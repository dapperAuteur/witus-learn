// Pure tenancy helpers — NO `server-only`, NO next/headers — so the isolation
// test suite can exercise them directly. Request-bound logic (reading cookies /
// headers) lives in tenant.ts and age-gate.ts.

/** Lowercase + strip port/whitespace so "BVC.localhost:3040" → "bvc.localhost". */
export function normalizeHost(host: string | null | undefined): string {
  if (!host) return "";
  return host.trim().toLowerCase().split(":")[0];
}

/** Per-tenant age-gate cookie name, e.g. "better-vice-club_age_ok". */
export function ageGateCookieName(tenantSlug: string): string {
  return `${tenantSlug}_age_ok`;
}

// Route-surface gating. A tenant exposes only its surface; CentOS-style
// dashboard/module/pricing/marketing routes redirect to the tenant home. This
// is the static blocklist enforced at the edge (proxy.ts); finer, flag-driven
// gating happens server-side where the resolved tenant is available.
export const BLOCKED_SURFACE_PREFIXES = [
  "/dashboard",
  "/pricing",
  "/modules",
  "/academy",
  "/onboarding",
  "/app-tutorials",
  "/learn-the-app",
] as const;

/** True if `pathname` is a CentOS-style route that must redirect to the tenant home. */
export function isBlockedSurfacePath(pathname: string): boolean {
  return BLOCKED_SURFACE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}
