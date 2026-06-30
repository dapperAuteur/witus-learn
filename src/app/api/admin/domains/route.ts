import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getMembership, isPlatformOwner } from "@/lib/session";
import { addDomain } from "@/db/queries/admin-domains";

const Schema = z.object({ tenantId: z.string().uuid(), host: z.string().min(3).max(255) });

// POST /api/admin/domains — map a custom domain to a school. The platform owner can map
// to ANY school; a brand admin only to a school they administer (checked against the
// submitted tenantId, so they cannot map a domain onto another brand).
export async function POST(req: Request) {
  const { session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const parsed = Schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);

  const allowed =
    (await isPlatformOwner(session.user.id)) ||
    (await getMembership(session.user.id, parsed.data.tenantId)) === "brand_admin";
  if (!allowed) return errorJson("Forbidden", 403);

  const res = await addDomain(parsed.data.tenantId, parsed.data.host);
  if ("error" in res) return errorJson(res.error, 400);
  return json(res);
}
