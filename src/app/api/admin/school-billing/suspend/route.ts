import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { isPlatformOwner } from "@/lib/session";
import {
  getSchoolForBilling,
  setPlatformSubscriptionStatusByTenantId,
  setTenantActive,
} from "@/db/queries/platform-subscriptions";

const Body = z.object({
  tenantId: z.string().uuid(),
  action: z.enum(["suspend", "reactivate"]),
});

// POST /api/admin/school-billing/suspend (plans/51). The platform OWNER suspends or reactivates a
// white-label school. Suspend takes the tenant offline and marks its billing canceled; reactivate
// brings it back live and active. Owner-only and cross-tenant, so it authorizes with isPlatformOwner
// (not a per-tenant admin check). Idempotent: re-running the same action just rewrites the same
// values, never an error.
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session || !(await isPlatformOwner(session.user.id))) return errorJson("Owner only.", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Check the values and try again.", 400);
  const { tenantId, action } = parsed.data;

  const school = await getSchoolForBilling(tenantId);
  if (!school) return errorJson("School not found.", 404);

  const active = action === "reactivate";
  await setTenantActive(tenantId, active);
  await setPlatformSubscriptionStatusByTenantId(tenantId, active ? "active" : "canceled");

  return json({ ok: true, tenantId, active });
}
