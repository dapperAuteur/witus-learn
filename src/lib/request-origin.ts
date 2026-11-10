/**
 * The public origin a request arrived on (the school's own host), for links in emails and redirects.
 * Read from the proxy headers Vercel sets, falling back to the Host header, so a school's admin is
 * sent a link on the school's domain and never on another school's or the platform's. Null when the
 * request carries no host at all (a test, a cron), and callers then fall back to NEXT_PUBLIC_APP_URL.
 */
export function requestOrigin(headers: Headers): string | null {
  const host = headers.get("x-forwarded-host") ?? headers.get("host");
  if (!host) return null;
  const proto = headers.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}
