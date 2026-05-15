const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, apikey",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};
const countryNames = {
  KR: "대한민국",
  US: "미국",
  JP: "일본",
  CN: "중국",
  SG: "싱가포르"
};
const regionNames = {
  Seoul: "서울특별시",
  "Gyeonggi-do": "경기도",
  Busan: "부산광역시",
  Incheon: "인천광역시",
  Daegu: "대구광역시",
  Daejeon: "대전광역시",
  Gwangju: "광주광역시",
  Ulsan: "울산광역시",
  "Jeju-do": "제주특별자치도"
};
const cityNames = {
  Seoul: "서울",
  Seongnam: "성남",
  Suwon: "수원",
  Busan: "부산",
  Incheon: "인천",
  Daegu: "대구",
  Daejeon: "대전",
  Gwangju: "광주",
  Ulsan: "울산",
  Jeju: "제주"
};
const koreanRegionDisplayNames = new Set(Object.values(regionNames));
const koreanCityDisplayNames = new Set(Object.values(cityNames));

function displayGeo(value, map) {
  const text = String(value || "").trim();
  if (!text || text === "Unknown" || text === "-") return "미확인";
  return map[text] || text;
}

function encodedGeo(value, map) {
  return encodeURIComponent(displayGeo(value, map));
}

async function getIpinfoCountry(ip, token) {
  if (!ip || !token) return "";
  try {
    const response = await fetch(`https://api.ipinfo.io/lite/${encodeURIComponent(ip)}?token=${encodeURIComponent(token)}`, {
      headers: { "Accept": "application/json" }
    });
    if (!response.ok) return "";
    const data = await response.json();
    return String(data.country_code || data.country || "").trim();
  } catch {
    return "";
  }
}

async function resolveGeo(cf, ip, env) {
  const country = String(cf.country || "").trim();
  const region = String(cf.region || "").trim();
  const city = String(cf.city || "").trim();
  const timezone = String(cf.timezone || "").trim();
  const hasKoreanLocality = Boolean(
    regionNames[region]
      || cityNames[city]
      || koreanRegionDisplayNames.has(region)
      || koreanCityDisplayNames.has(city)
      || /[가-힣]/.test(`${region}${city}`)
      || timezone === "Asia/Seoul"
  );
  const ipinfoCountry = await getIpinfoCountry(ip, env.IPINFO_TOKEN);

  if (ipinfoCountry === "KR") {
    return {
      country: "대한민국",
      region: "미확인",
      city: "미확인"
    };
  }

  if (country && country !== "KR" && hasKoreanLocality) {
    return {
      country: "대한민국",
      region: "미확인",
      city: "미확인"
    };
  }

  return {
    country: displayGeo(country, countryNames),
    region: displayGeo(region, regionNames),
    city: displayGeo(city, cityNames)
  };
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
    if (request.method !== "POST") {
      return Response.json({ error: "Method not allowed" }, { status: 405, headers: corsHeaders });
    }

    try {
      const cf = request.cf || {};
      const ip = request.headers.get("cf-connecting-ip") || "";
      const geo = await resolveGeo(cf, ip, env);
      const body = await request.json().catch(() => ({}));
      const bodyText = JSON.stringify({
        ...body,
        soyu_geo_country: geo.country,
        soyu_geo_region: geo.region,
        soyu_geo_city: geo.city
      });
      const response = await fetch(env.SUPABASE_EDGE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": env.SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${env.SUPABASE_ANON_KEY}`,
          "x-soyu-country": encodeURIComponent(geo.country),
          "x-soyu-region": encodeURIComponent(geo.region),
          "x-soyu-city": encodeURIComponent(geo.city),
          "x-real-ip": ip,
          "user-agent": request.headers.get("user-agent") || ""
        },
        body: bodyText
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      return Response.json({ ok: true }, { headers: corsHeaders });
    } catch (error) {
      return Response.json({ error: error.message || "Track failed" }, { status: 500, headers: corsHeaders });
    }
  }
};
