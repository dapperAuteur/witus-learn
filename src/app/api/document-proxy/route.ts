// GET /api/document-proxy?url= — serve a whitelisted Cloudinary PDF inline (so
// citations open in-browser instead of downloading). Host-whitelisted to prevent
// the endpoint becoming an open proxy.
const ALLOWED_HOSTS = ["res.cloudinary.com", "cloudinary.com"];

export async function GET(req: Request) {
  const raw = new URL(req.url).searchParams.get("url");
  if (!raw) return new Response("Missing url", { status: 400 });

  let target: URL;
  try {
    target = new URL(raw);
  } catch {
    return new Response("Invalid url", { status: 400 });
  }
  if (target.protocol !== "https:") return new Response("Forbidden", { status: 403 });
  const ok = ALLOWED_HOSTS.some(
    (h) => target.hostname === h || target.hostname.endsWith(`.${h}`),
  );
  if (!ok) return new Response("Forbidden", { status: 403 });

  const upstream = await fetch(target.toString());
  if (!upstream.ok) return new Response("Upstream error", { status: 502 });

  return new Response(upstream.body, {
    headers: {
      "content-type": upstream.headers.get("content-type") ?? "application/pdf",
      "content-disposition": "inline",
      "cache-control": "public, max-age=60, s-maxage=300",
    },
  });
}
