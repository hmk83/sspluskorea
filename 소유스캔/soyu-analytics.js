(function () {
  const CONFIG = window.SOYU_SUPABASE_CONFIG || {};

  function normalizeSourcePage() {
    if (window.SoyouInquiry && typeof window.SoyouInquiry.normalizeSourcePage === "function") {
      return window.SoyouInquiry.normalizeSourcePage();
    }
    const fileName = (window.location.pathname.split("/").pop() || "index-1.html").toLowerCase();
    if (fileName.includes("index-2")) return "index-2";
    if (fileName.includes("index-3")) return "index-3";
    return "index-1";
  }

  function getDeviceType() {
    const ua = navigator.userAgent || "";
    if (/ipad|tablet|playbook|silk/i.test(ua)) return "tablet";
    if (/mobi|iphone|android/i.test(ua)) return "mobile";
    return "desktop";
  }

  function buildPayload() {
    return {
      source_page: normalizeSourcePage(),
      path: window.location.pathname,
      referrer: document.referrer || "",
      user_agent: navigator.userAgent || "",
      device_type: getDeviceType()
    };
  }

  function trackVisit() {
    if (!CONFIG.trackEndpoint) return;
    const payload = JSON.stringify(buildPayload());
    const headers = {
      "Content-Type": "application/json",
      "apikey": CONFIG.anonKey || ""
    };
    fetch(CONFIG.trackEndpoint, {
      method: "POST",
      headers,
      body: payload,
      keepalive: true
    }).catch(() => {});
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", trackVisit, { once: true });
  } else {
    trackVisit();
  }

  window.SoyouAnalytics = {
    buildPayload,
    trackVisit,
    normalizeSourcePage
  };
})();
