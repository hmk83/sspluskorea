const storageBase = "https://imaoieqwteqwsssicuxr.supabase.co/storage/v1/object/public/soyu-scan-site";

const contentTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf"
};

function extname(path: string) {
  const match = path.match(/(\.[a-z0-9]+)$/i);
  return match ? match[1].toLowerCase() : "";
}

function resolvePath(request: Request) {
  const url = new URL(request.url);
  let filePath = url.searchParams.get("path") || url.pathname;
  for (const marker of ["/functions/v1/site", "/site"]) {
    if (filePath.startsWith(marker)) {
      filePath = filePath.slice(marker.length);
      break;
    }
  }
  filePath = decodeURIComponent(filePath).replace(/^\/+/, "");
  if (!filePath || filePath.endsWith("/")) filePath += "index.html";
  if (filePath.includes("..")) return "";
  return filePath;
}

Deno.serve(async (request) => {
  const filePath = resolvePath(request);
  if (!filePath) {
    return new Response("Not found", { status: 404 });
  }

  const encodedPath = filePath.split("/").map(encodeURIComponent).join("/");
  const upstream = await fetch(`${storageBase}/${encodedPath}`);
  if (!upstream.ok) {
    return new Response("Not found", { status: 404 });
  }

  const headers = new Headers();
  headers.set("Content-Type", contentTypes[extname(filePath)] || "application/octet-stream");
  headers.set("Cache-Control", filePath.endsWith(".html") ? "no-cache" : "public, max-age=31536000, immutable");
  headers.set("X-Robots-Tag", "noindex");
  return new Response(upstream.body, {
    status: 200,
    headers
  });
});
