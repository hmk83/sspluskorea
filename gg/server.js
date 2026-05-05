const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { URL } = require("node:url");

const ROOT = __dirname;
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp"
};

loadEnvFile(path.join(ROOT, ".env.local"));
loadEnvFile(path.join(ROOT, ".env"));

const PORT = Number(process.env.PORT || 8844);
const DEFAULT_IMAGE_MODELS = ["gemini-2.5-flash-image", "gemini-3-pro-image-preview"];
const MODELS = [...new Set([
  ...String(process.env.GEMINI_IMAGE_MODEL || "")
    .split(",")
    .map((model) => model.trim())
    .filter(Boolean),
  ...DEFAULT_IMAGE_MODELS
])];

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const text = fs.readFileSync(filePath, "utf8");
  text.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const index = trimmed.indexOf("=");
    if (index <= 0) return;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  });
}

function sendJson(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload)
  });
  res.end(payload);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 18 * 1024 * 1024) {
        reject(new Error("요청 이미지 용량이 너무 큽니다."));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("요청 형식이 올바르지 않습니다."));
      }
    });
    req.on("error", reject);
  });
}

function publicFilePath(urlPathname) {
  const pathname = decodeURIComponent(urlPathname === "/" ? "/index.html" : urlPathname);
  const resolved = path.resolve(ROOT, `.${pathname}`);
  if (!resolved.startsWith(ROOT)) return null;
  return resolved;
}

function serveStatic(req, res, pathname) {
  const filePath = publicFilePath(pathname);
  if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    res.writeHead(404, { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { "Access-Control-Allow-Origin": "*", "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}

function imagePartsFromReferences(references = []) {
  return references
    .filter((ref) => ref && ref.data && ref.mimeType)
    .slice(0, 3)
    .map((ref) => ({
      inline_data: {
        mime_type: ref.mimeType,
        data: ref.data
      }
    }));
}

async function handleGenerate(req, res) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: "GEMINI_API_KEY가 .env.local에 설정되어 있지 않습니다." });
    return;
  }

  try {
    const body = await readJson(req);
    const prompt = String(body.prompt || "").trim();
    if (!prompt) {
      sendJson(res, 400, { error: "프롬프트가 비어 있습니다." });
      return;
    }

    const parts = [
      {
        text: [
          prompt,
          "",
          "Create one polished final image. Do not create a UI mockup unless the prompt asks for a poster or magazine layout.",
          "Preserve uploaded reference image identity, product shape, and background atmosphere according to the Korean prompt.",
          `Requested aspect ratio: ${body.ratio || "4:5"}.`
        ].join("\n")
      },
      ...imagePartsFromReferences(body.references)
    ];

    let result = null;
    let usedModel = "";
    let failureStatus = 502;
    let failureMessage = "Google 이미지 생성 요청에 실패했습니다.";

    for (const model of MODELS) {
      const googleRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey
          },
          body: JSON.stringify({
            contents: [{ parts }]
          })
        }
      );

      const payload = await googleRes.json();
      if (googleRes.ok) {
        result = payload;
        usedModel = model;
        break;
      }
      failureStatus = googleRes.status;
      failureMessage = payload?.error?.message || failureMessage;
    }

    if (!result) {
      sendJson(res, failureStatus, { error: failureMessage });
      return;
    }

    const outputPart = result?.candidates?.[0]?.content?.parts?.find((part) => part.inlineData || part.inline_data);
    const inlineData = outputPart?.inlineData || outputPart?.inline_data;
    if (!inlineData?.data) {
      sendJson(res, 502, { error: "생성 이미지가 응답에 포함되지 않았습니다.", rawText: result?.candidates?.[0]?.content?.parts?.find((part) => part.text)?.text || "" });
      return;
    }

    sendJson(res, 200, {
      image: `data:${inlineData.mimeType || inlineData.mime_type || "image/png"};base64,${inlineData.data}`,
      model: usedModel
    });
  } catch (error) {
    sendJson(res, 500, { error: error.message || "이미지 생성 중 오류가 발생했습니다." });
  }
}

function handleHealth(res) {
  sendJson(res, 200, {
    ready: Boolean(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY),
    models: MODELS
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end();
    return;
  }
  if (req.method === "POST" && url.pathname === "/api/generate") {
    handleGenerate(req, res);
    return;
  }
  if (req.method === "GET" && url.pathname === "/api/health") {
    handleHealth(res);
    return;
  }
  if (req.method === "GET") {
    serveStatic(req, res, url.pathname);
    return;
  }
  res.writeHead(405, { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain; charset=utf-8" });
  res.end("Method not allowed");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Prompt Atelier server running at http://127.0.0.1:${PORT}/`);
});
