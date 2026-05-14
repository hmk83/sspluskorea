import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

const allowedPages = new Set(["index-1", "index-2", "index-3"]);
const allowedDevices = new Set(["desktop", "tablet", "mobile"]);
const countryNames: Record<string, string> = {
  KR: "대한민국",
  US: "미국",
  JP: "일본",
  CN: "중국"
};
const koreanRegionNames: Record<string, string> = {
  Seoul: "서울특별시",
  "Gyeonggi-do": "경기도",
  Busan: "부산광역시",
  Incheon: "인천광역시",
  Daegu: "대구광역시",
  Daejeon: "대전광역시",
  Gwangju: "광주광역시",
  "Jeju-do": "제주특별자치도"
};
const koreanCityNames: Record<string, string> = {
  Seoul: "서울",
  Seongnam: "성남",
  Suwon: "수원",
  Busan: "부산",
  Incheon: "인천",
  Daegu: "대구",
  Daejeon: "대전",
  Gwangju: "광주",
  Jeju: "제주"
};

function header(headers: Headers, names: string[]) {
  for (const name of names) {
    const value = headers.get(name);
    if (value) return decodeURIComponent(value).trim();
  }
  return "";
}

function normalizeGeo(value: string, map: Record<string, string>) {
  const text = String(value || "").trim();
  if (!text || text === "Unknown" || text === "-") return "미확인";
  return map[text] || text;
}

async function sha256(value: string) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const sourcePage = allowedPages.has(body.source_page) ? body.source_page : "index-1";
    const deviceType = allowedDevices.has(body.device_type) ? body.device_type : "desktop";
    const ip = header(request.headers, ["cf-connecting-ip", "x-forwarded-for", "x-real-ip"]).split(",")[0].trim();
    const salt = Deno.env.get("ANALYTICS_SALT") || Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "soyu-scan";
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") || "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
    );

    const payload = {
      source_page: sourcePage,
      path: String(body.path || "").slice(0, 500),
      referrer: String(body.referrer || "").slice(0, 1000),
      user_agent: String(body.user_agent || request.headers.get("user-agent") || "").slice(0, 1000),
      device_type: deviceType,
      country: normalizeGeo(body.soyu_geo_country || header(request.headers, ["x-soyu-country", "cf-ipcountry", "x-vercel-ip-country", "x-country-code"]), countryNames),
      region: normalizeGeo(body.soyu_geo_region || header(request.headers, ["x-soyu-region", "cf-region", "x-vercel-ip-country-region", "x-region"]), koreanRegionNames),
      city: normalizeGeo(body.soyu_geo_city || header(request.headers, ["x-soyu-city", "cf-city", "x-vercel-ip-city", "x-city"]), koreanCityNames),
      ip_hash: ip ? await sha256(`${salt}:${ip}`) : ""
    };

    const { error } = await supabase.from("page_views").insert(payload);
    if (error) throw error;

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Track failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
