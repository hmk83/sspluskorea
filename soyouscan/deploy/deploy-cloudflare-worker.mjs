import { readFile } from "node:fs/promises";
import { randomBytes } from "node:crypto";

const cloudflareToken = process.env.CLOUDFLARE_API_TOKEN;
const ipinfoToken = process.env.IPINFO_TOKEN;

const scriptName = "soyu-scan-track";
const workerFile = new URL("./cloudflare-worker-track-visit.js", import.meta.url);
const supabaseUrl = "https://imaoieqwteqwsssicuxr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltYW9pZXF3dGVxd3Nzc2ljdXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3Mzg5MjYsImV4cCI6MjA5NDMxNDkyNn0.neebqRFbkU-4HNKIP3VLUD5wpFmCPtLELz-PDCwh36M";

if (!cloudflareToken) throw new Error("CLOUDFLARE_API_TOKEN is required.");

async function cf(path, options = {}) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${cloudflareToken}`,
      ...(options.body && !(options.body instanceof Uint8Array)
        ? { "Content-Type": "application/json" }
        : {}),
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok || data.success === false) {
    const message = data.errors?.map((error) => error.message).join("; ") || text || response.statusText;
    throw new Error(`${response.status} ${message}`);
  }
  return data;
}

async function getAccountId() {
  if (process.env.CLOUDFLARE_ACCOUNT_ID) return process.env.CLOUDFLARE_ACCOUNT_ID;
  const accounts = await cf("/accounts");
  const account = accounts.result?.[0];
  if (!account?.id) throw new Error("No Cloudflare account was returned for this token.");
  return account.id;
}

function buildMultipart(parts) {
  const boundary = `----soyu-scan-${randomBytes(12).toString("hex")}`;
  const chunks = [];
  for (const part of parts) {
    chunks.push(Buffer.from(`--${boundary}\r\n`));
    chunks.push(Buffer.from(`Content-Disposition: form-data; name="${part.name}"${part.filename ? `; filename="${part.filename}"` : ""}\r\n`));
    chunks.push(Buffer.from(`Content-Type: ${part.contentType || "application/octet-stream"}\r\n\r\n`));
    chunks.push(Buffer.isBuffer(part.value) ? part.value : Buffer.from(String(part.value)));
    chunks.push(Buffer.from("\r\n"));
  }
  chunks.push(Buffer.from(`--${boundary}--\r\n`));
  return {
    boundary,
    body: Buffer.concat(chunks)
  };
}

async function putSecret(accountId, name, text) {
  if (!text) return;
  await cf(`/accounts/${accountId}/workers/scripts/${scriptName}/secrets`, {
    method: "PUT",
    body: JSON.stringify({ name, text, type: "secret_text" })
  });
}

async function main() {
  const accountId = await getAccountId();
  const workerCode = await readFile(workerFile);
  const moduleName = "cloudflare-worker-track-visit.js";
  const metadata = {
    main_module: moduleName,
    compatibility_date: "2026-05-14",
    bindings: [
      { type: "plain_text", name: "SUPABASE_EDGE_ENDPOINT", text: `${supabaseUrl}/functions/v1/track-visit` },
      { type: "plain_text", name: "SUPABASE_ANON_KEY", text: supabaseAnonKey }
    ]
  };

  const upload = buildMultipart([
    { name: "metadata", value: JSON.stringify(metadata), contentType: "application/json" },
    { name: moduleName, filename: moduleName, value: workerCode, contentType: "application/javascript+module" }
  ]);

  const deploy = await cf(`/accounts/${accountId}/workers/scripts/${scriptName}`, {
    method: "PUT",
    body: upload.body,
    headers: { "Content-Type": `multipart/form-data; boundary=${upload.boundary}` }
  });
  await putSecret(accountId, "IPINFO_TOKEN", ipinfoToken);

  let subdomain = "";
  try {
    const subdomainResponse = await cf(`/accounts/${accountId}/workers/subdomain`);
    subdomain = subdomainResponse.result?.subdomain || "";
  } catch {
    subdomain = "";
  }

  const workerUrl = subdomain ? `https://${scriptName}.${subdomain}.workers.dev` : "";
  console.log(JSON.stringify({
    ok: true,
    accountId,
    scriptName,
    workerUrl,
    etag: deploy.result?.etag || null
  }, null, 2));
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
