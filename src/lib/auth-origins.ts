import { env } from "./env";
import { getTenantByHost } from "./tenant";

// Single source of truth for which origins may drive auth on this multi-tenant
// deployment. Used BOTH by the Better Auth config (`trustedOrigins` in auth.ts) and by
// the kid-login plugin's CSRF check (kid-login-plugin.ts), so the two can never drift.

/** Static, env-driven base origins (the platform's own URLs + any explicit extras). */
export function staticTrustedOrigins(): string[] {
  const fromEnv = (env.TRUSTED_ORIGINS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const devHosts =
    env.NODE_ENV !== "production"
      ? ["http://localhost:3040", "http://bvc.localhost:3040", "http://acme.localhost:3040"]
      : [];
  return Array.from(new Set([env.BETTER_AUTH_URL, env.NEXT_PUBLIC_APP_URL, ...devHosts, ...fromEnv]));
}

/**
 * Origins allowed to drive auth for THIS request. DYNAMIC: every brand has its own
 * domain(s), so we trust the request's origin when its host resolves to a registered
 * tenant — that's why custom domains like www.bettervice.club work without hardcoding
 * each in env. Takes the request Headers so it can read the (proxied) host.
 */
export async function computeTrustedOrigins(headers?: Headers): Promise<string[]> {
  const origins = new Set(staticTrustedOrigins());
  const host = headers?.get("x-forwarded-host") ?? headers?.get("host");
  if (host) {
    const tenant = await getTenantByHost(host);
    if (tenant) {
      const proto = headers?.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
      origins.add(`${proto}://${host}`);
    }
  }
  return Array.from(origins);
}

/** Normalize any URL/origin string to its bare origin (scheme://host[:port]), or null. */
function toOrigin(value: string): string | null {
  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

/**
 * CSRF verdict for a login POST, mirroring Better Auth's built-in `validateFormCsrf`
 * (the exact middleware `/sign-in/email` runs) so kid-login is neither more nor less
 * permissive than the platform's own sign-in:
 *
 *  - Origin is read from the `Origin` header, falling back to `Referer`.
 *  - A present Origin/Referer must be in this request's trusted set, else BLOCK.
 *  - A cross-site `Sec-Fetch-Site: cross-site` navigation is always BLOCKed.
 *  - A MISSING (or literal "null") Origin is BLOCKed only when the request carries a
 *    Cookie or any `Sec-Fetch-*` header (i.e. it came from a browser) — matching the
 *    built-in's "forceValidate when useCookies || Sec-Fetch present". A request with no
 *    cookie, no Sec-Fetch, and no Origin/Referer (a non-browser client that can't be
 *    doing cross-site CSRF) is ALLOWed, exactly as the built-in permits.
 *
 * Returns "ok" or "blocked"; the caller turns "blocked" into a generic 403.
 */
export async function checkLoginOrigin(headers: Headers): Promise<"ok" | "blocked"> {
  const originHeader = headers.get("origin") || headers.get("referer") || "";
  const hasCookie = headers.has("cookie");
  const secFetchSite = headers.get("sec-fetch-site");
  const secFetchMode = headers.get("sec-fetch-mode");
  const secFetchDest = headers.get("sec-fetch-dest");
  const hasSecFetch = Boolean(
    (secFetchSite && secFetchSite.trim()) ||
      (secFetchMode && secFetchMode.trim()) ||
      (secFetchDest && secFetchDest.trim()),
  );

  // Always block a cross-site navigation login attempt (built-in's explicit guard).
  if (secFetchSite === "cross-site" && secFetchMode === "navigate") return "blocked";

  const forceValidate = hasCookie || hasSecFetch || Boolean(originHeader);
  if (!forceValidate) return "ok"; // non-browser, no cookie/origin/Sec-Fetch — nothing to CSRF.

  if (!originHeader || originHeader === "null") return "blocked";

  const requestOrigin = toOrigin(originHeader);
  if (!requestOrigin) return "blocked";

  const trusted = await computeTrustedOrigins(headers);
  const trustedOrigins = new Set(trusted.map(toOrigin).filter((o): o is string => o !== null));
  return trustedOrigins.has(requestOrigin) ? "ok" : "blocked";
}
