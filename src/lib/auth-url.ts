/** Rewrite a magic-link URL's origin to the request host so the link lands on the
 *  tenant domain the user signed in from (sessions are per-domain; no cross-brand SSO).
 *
 *  Also absolutizes the verify URL's `callbackURL` / `newUserCallbackURL` /
 *  `errorCallbackURL` params against the tenant origin when they're relative.
 *  Better-Auth's magic-link verify resolves a relative callbackURL against the
 *  configured `baseURL` (BETTER_AUTH_URL = the platform domain), so a tenant user
 *  who clicked a link on bettervice.club would be redirected to learn.witus.online
 *  after verification — onto a different cookie jar where they appear logged out.
 *  Pinning the callbacks to the request origin keeps the whole flow on the tenant. */
export function rewriteOrigin(
  url: string,
  host: string | null | undefined,
  proto: string | null | undefined,
): string {
  if (!host) return url;
  try {
    const parsed = new URL(url);
    parsed.host = host;
    parsed.protocol = `${proto ?? (host.includes("localhost") ? "http" : "https")}:`;
    for (const key of ["callbackURL", "newUserCallbackURL", "errorCallbackURL"]) {
      const value = parsed.searchParams.get(key);
      // Only relative paths are at risk of resolving against the platform baseURL;
      // leave absolute callbacks untouched (originCheck still guards them at verify).
      if (value && value.startsWith("/")) {
        parsed.searchParams.set(key, new URL(value, parsed.origin).toString());
      }
    }
    return parsed.toString();
  } catch {
    return url;
  }
}
