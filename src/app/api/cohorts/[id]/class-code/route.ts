import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getCohort } from "@/db/queries/cohorts";
import { getOrCreateClassCode } from "@/db/queries/kid-login";

type Params = { params: Promise<{ id: string }> };

const Body = z.object({ rotate: z.boolean().optional() });

// POST /api/cohorts/[id]/class-code — generate (or, with { rotate: true }, replace) this
// cohort's kid-login class code. Gated on ownership (the cohort's own creator) or a
// tenant admin — same pattern as /api/cohorts/[id]/invite. Rotating immediately
// invalidates the old code (it's overwritten, not kept valid alongside the new one) so a
// code that leaked (e.g. posted publicly) can be retired.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Not found", 404);
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) {
    return errorJson("Forbidden", 403);
  }

  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  const rotate = parsed.success ? (parsed.data.rotate ?? false) : false;

  const classCode = await getOrCreateClassCode(sdb.tenantId, cohort.id, rotate);
  return json({ classCode });
}

// GET /api/cohorts/[id]/class-code — fetch the current code (null if kid-login hasn't
// been enabled for this class yet). Same ownership gate as POST.
export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Not found", 404);
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) {
    return errorJson("Forbidden", 403);
  }

  return json({ classCode: cohort.classCode ?? null });
}
