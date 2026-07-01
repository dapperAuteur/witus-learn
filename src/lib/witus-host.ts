/**
 * Is this request hitting a WitUS-branded surface (the apex or any `*.witus.online`
 * subdomain, plus localhost in dev)?
 *
 * White-label tenants on their OWN domains (bettervice.club, elementarymba.com)
 * are deliberately NOT WitUS-branded: they stay isolated from the ecosystem — no
 * "Sign in with WitUS" button and no cross-product ecosystem footer. Tenants that
 * explicitly opt in via `flags.ecosystemSso` are handled by the caller; this helper
 * only answers the host question.
 *
 * Mirror of the host check originally inlined in `app/login/page.tsx`; extracted so
 * the login page and the tenant layout gate on the exact same rule.
 */
export function isWitusBrandedHost(rawHost: string | null | undefined): boolean {
  const host = (rawHost ?? "").toLowerCase().split(":")[0];
  return (
    host === "witus.online" ||
    host.endsWith(".witus.online") ||
    host === "localhost" ||
    host.endsWith(".localhost")
  );
}
