import "server-only";
import { cookies } from "next/headers";
import type { TenantRecord } from "./tenant";
import { ageGateCookieName } from "./tenant-util";

/**
 * Whether the visitor has acknowledged the age-gate for this tenant. Read on the
 * server so SSR can withhold content before acknowledgment (the cookie is set by
 * the confirmAge server action). Tenants without `requires_age_gate` always pass.
 */
export async function hasAcknowledgedAge(tenant: TenantRecord): Promise<boolean> {
  if (!tenant.requiresAgeGate) return true;
  return hasAgeConsentCookie(tenant.slug);
}

/**
 * Raw age-consent check, independent of the tenant flag — for PER-COURSE gating
 * (e.g. BVC Season 1 is open, Seasons 2-3 set `courses.requires_age_gate`). The
 * consent cookie is shared per tenant, so acknowledging once covers all gated
 * courses on that brand.
 */
export async function hasAgeConsentCookie(tenantSlug: string): Promise<boolean> {
  const store = await cookies();
  return store.get(ageGateCookieName(tenantSlug))?.value === "1";
}
