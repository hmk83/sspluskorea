import { readFile } from "node:fs/promises";
import { randomBytes } from "node:crypto";

const accessToken = process.env.SUPABASE_ACCESS_TOKEN;
const projectRef = "imaoieqwteqwsssicuxr";
const functionSlug = process.env.SUPABASE_FUNCTION_SLUG || "track-visit";
const sourcePath = process.env.SUPABASE_FUNCTION_SOURCE || `../supabase/functions/${functionSlug}/index.ts`;
const verifyJwt = process.env.SUPABASE_VERIFY_JWT === "true";
const sourceFile = new URL(sourcePath, import.meta.url);

if (!accessToken) throw new Error("SUPABASE_ACCESS_TOKEN is required.");

function buildMultipart(parts) {
  const boundary = `----soyu-scan-supabase-${randomBytes(12).toString("hex")}`;
  const chunks = [];
  for (const part of parts) {
    chunks.push(Buffer.from(`--${boundary}\r\n`));
    chunks.push(Buffer.from(`Content-Disposition: form-data; name="${part.name}"${part.filename ? `; filename="${part.filename}"` : ""}\r\n`));
    chunks.push(Buffer.from(`Content-Type: ${part.contentType || "application/octet-stream"}\r\n\r\n`));
    chunks.push(Buffer.isBuffer(part.value) ? part.value : Buffer.from(String(part.value)));
    chunks.push(Buffer.from("\r\n"));
  }
  chunks.push(Buffer.from(`--${boundary}--\r\n`));
  return { boundary, body: Buffer.concat(chunks) };
}

async function main() {
  const source = await readFile(sourceFile);
  const metadata = {
    entrypoint_path: "index.ts",
    name: functionSlug,
    verify_jwt: verifyJwt
  };
  const upload = buildMultipart([
    { name: "metadata", value: JSON.stringify(metadata), contentType: "application/json" },
    { name: "file", filename: "index.ts", value: source, contentType: "application/typescript" }
  ]);
  const response = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/functions/deploy?slug=${functionSlug}`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": `multipart/form-data; boundary=${upload.boundary}`
    },
    body: upload.body
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error(`${response.status} ${data.message || text || response.statusText}`);
  }
  console.log(JSON.stringify({
    ok: true,
    slug: data.slug || functionSlug,
    version: data.version || null,
    status: data.status || null
  }, null, 2));
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
