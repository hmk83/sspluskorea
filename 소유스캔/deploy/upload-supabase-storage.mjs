import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const supabaseUrl = "https://imaoieqwteqwsssicuxr.supabase.co";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const bucket = process.env.SUPABASE_STORAGE_BUCKET || "soyu-scan-site";
const root = new URL("../", import.meta.url);

if (!serviceKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY is required.");

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".webp", "image/webp"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".pdf", "application/pdf"]
]);

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "apikey": serviceKey,
      "Authorization": `Bearer ${serviceKey}`,
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  const data = text ? (() => {
    try { return JSON.parse(text); } catch { return text; }
  })() : null;
  return { response, data, text };
}

async function ensureBucket() {
  const { response, data } = await request(`${supabaseUrl}/storage/v1/bucket`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: bucket, name: bucket, public: true })
  });
  if (!response.ok && !String(data?.message || "").toLowerCase().includes("already exists")) {
    throw new Error(`Bucket create failed: ${response.status} ${data?.message || JSON.stringify(data)}`);
  }

  await request(`${supabaseUrl}/storage/v1/bucket/${bucket}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ public: true })
  });
}

async function listUploads() {
  const uploads = [
    ["index.html", "index-1.html"],
    ["index-1.html", "index-1.html"],
    ["index-2.html", "index-2.html"],
    ["index-3.html", "index-3.html"],
    ["admin.html", "admin.html"],
    ["privacy.html", "privacy.html"],
    ["supabase-config.js", "supabase-config.js"],
    ["soyu-inquiry.js", "soyu-inquiry.js"],
    ["soyu-analytics.js", "soyu-analytics.js"]
  ];
  const imageDir = new URL("images/", root);
  const imageFiles = await readdir(imageDir);
  for (const file of imageFiles.filter((name) => name.toLowerCase().endsWith(".webp")).sort()) {
    uploads.push([`images/${file}`, `images/${file}`]);
  }
  return uploads;
}

async function uploadObject(remotePath, localPath) {
  const fullPath = new URL(localPath, root);
  const body = await readFile(fullPath);
  const ext = path.extname(localPath).toLowerCase();
  const contentType = contentTypes.get(ext) || "application/octet-stream";
  const encodedPath = remotePath.split("/").map(encodeURIComponent).join("/");
  const { response, data } = await request(`${supabaseUrl}/storage/v1/object/${bucket}/${encodedPath}`, {
    method: "PUT",
    headers: {
      "Content-Type": contentType,
      "Cache-Control": contentType.startsWith("text/html") ? "no-cache" : "public, max-age=31536000, immutable",
      "x-upsert": "true"
    },
    body
  });
  if (!response.ok) {
    throw new Error(`Upload failed ${remotePath}: ${response.status} ${data?.message || JSON.stringify(data)}`);
  }
  return {
    path: remotePath,
    url: `${supabaseUrl}/storage/v1/object/public/${bucket}/${encodedPath}`
  };
}

async function main() {
  await ensureBucket();
  const uploads = await listUploads();
  const results = [];
  for (const [remotePath, localPath] of uploads) {
    results.push(await uploadObject(remotePath, localPath));
  }
  const links = results.filter((item) => item.path.endsWith(".html"));
  console.log(JSON.stringify({ ok: true, bucket, uploaded: results.length, links }, null, 2));
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
