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
/** The WitUS-branded base school: the only Learn tenant the WitUS IdP has registered. */
export const WITUS_BASE_TENANT_SLUG = "learn-witus";

/**
 * Does this school take part in "Sign in with WitUS" and global sign-out?
 *
 * STRICTER THAN `isWitusBrandedHost`, on purpose. The IdP (gemini/witus lib/identity/clients.ts)
 * registers exactly one Learn host, learn.witus.online, and deliberately registers NO tenant host,
 * so a tenant that attempts the WitUS flow gets a 400. A school on a WitUS subdomain is still a
 * tenant: the Acme demo at acme.learning.witus.online is WitUS-branded (it keeps the ecosystem
 * footer), but on 2026-09-21 signing out there sent the visitor to the IdP with an unregistered
 * post_logout_redirect_uri and stranded them on "post_logout_redirect_uri is not registered for
 * this client". Keyed on the tenant, not the host, so dev (localhost → learn-witus) behaves the
 * same as production. A tenant that opts in via `flags.ecosystemSso` must also be registered on
 * the IdP, or the same 400 follows.
 */
export function tenantUsesWitusSso(
  tenant: { slug: string; flags: { ecosystemSso?: unknown } } | null | undefined,
): boolean {
  if (!tenant) return false;
  return tenant.slug === WITUS_BASE_TENANT_SLUG || tenant.flags.ecosystemSso === true;
}

export function isWitusBrandedHost(rawHost: string | null | undefined): boolean {
  const host = (rawHost ?? "").toLowerCase().split(":")[0];
  return (
    host === "witus.online" ||
    host.endsWith(".witus.online") ||
    host === "localhost" ||
    host.endsWith(".localhost")
  );
}
