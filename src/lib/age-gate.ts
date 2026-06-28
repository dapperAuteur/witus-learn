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
  const store = await cookies();
  return store.get(ageGateCookieName(tenant.slug))?.value === "1";
}
