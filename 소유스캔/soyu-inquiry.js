(function () {
  const CONFIG = window.SOYU_SUPABASE_CONFIG || {};
  const REQUIRED_FIELDS = ["url", "anonKey"];
  let client = null;

  function isConfigured() {
    return REQUIRED_FIELDS.every((key) => typeof CONFIG[key] === "string" && CONFIG[key].trim());
  }

  function getClient() {
    if (!isConfigured()) {
      throw new Error("Supabase URL과 anon key가 설정되지 않았습니다.");
    }
    if (!window.supabase || typeof window.supabase.createClient !== "function") {
      throw new Error("Supabase SDK를 불러오지 못했습니다.");
    }
    if (!client) {
      const isAdminPage = (window.location.pathname.split("/").pop() || "").toLowerCase().includes("admin");
      client = window.supabase.createClient(CONFIG.url, CONFIG.anonKey, {
        auth: {
          persistSession: isAdminPage,
          autoRefreshToken: isAdminPage,
          detectSessionInUrl: false,
          storageKey: isAdminPage ? "soyou-scan-admin-auth" : "soyou-scan-public-inquiry"
        }
      });
    }
    return client;
  }

  function normalizeSourcePage() {
    const fileName = (window.location.pathname.split("/").pop() || "index-1.html").toLowerCase();
    if (fileName.includes("index-2")) return "index-2";
    if (fileName.includes("index-3")) return "index-3";
    return "index-1";
  }

  function getValue(data, keys) {
    for (const key of keys) {
      const value = data.get(key);
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    return "";
  }

  function buildPayload(form) {
    const data = new FormData(form);
    return {
      source_page: normalizeSourcePage(),
      source_path: window.location.pathname,
      company_name: getValue(data, ["company", "companyName"]),
      manager_name: getValue(data, ["manager", "name", "managerName"]),
      position: getValue(data, ["role", "position"]),
      phone: getValue(data, ["phone", "contact"]),
      request_type: getValue(data, ["requestType", "type"]),
      memo: getValue(data, ["memo", "message"]),
      privacy_agreed: Boolean(form.querySelector('input[type="checkbox"]:required')?.checked),
      status: "신규",
      admin_note: ""
    };
  }

  function validatePayload(payload) {
    const missing = [];
    if (!payload.company_name) missing.push("회사명");
    if (!payload.manager_name) missing.push("담당자명");
    if (!payload.position) missing.push("담당자 직책");
    if (!payload.phone) missing.push("담당자 연락처");
    if (!payload.request_type) missing.push("문의 유형");
    if (!payload.privacy_agreed) missing.push("개인정보 동의");
    if (missing.length) {
      throw new Error(`${missing.join(", ")} 항목을 확인해주세요.`);
    }
  }

  async function saveInquiry(form) {
    const payload = buildPayload(form);
    validatePayload(payload);
    const supabaseClient = getClient();
    const { error } = await supabaseClient.from(CONFIG.inquiryTable || "inquiries").insert(payload);
    if (error) throw error;
    return payload;
  }

  async function handleSubmit(event, options) {
    event.preventDefault();
    const form = event.currentTarget;
    const submit = form.querySelector('[type="submit"]');
    const originalText = submit ? submit.textContent : "";
    try {
      if (submit) {
        submit.disabled = true;
        submit.textContent = "저장 중...";
      }
      const payload = await saveInquiry(form);
      if (typeof options?.onSuccess === "function") options.onSuccess(payload);
      form.reset();
      return payload;
    } catch (error) {
      if (typeof options?.onError === "function") {
        options.onError(error);
      } else {
        alert(error.message || "문의 저장 중 오류가 발생했습니다.");
      }
      return null;
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = originalText;
      }
    }
  }

  window.SoyouInquiry = {
    isConfigured,
    getClient,
    buildPayload,
    saveInquiry,
    handleSubmit,
    normalizeSourcePage
  };
})();
