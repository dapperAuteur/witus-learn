import { z } from "zod";
import { apiContext, errorJson, isTenantInstructor, json } from "@/lib/api";
import { createCohort, listCohorts } from "@/db/queries/cohorts";

const Body = z.object({ name: z.string().min(1).max(120) });

// POST /api/admin/cohorts — an instructor creates a private class (cohort).
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!(await isTenantInstructor(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Please enter a class name.", 400);

  const cohort = await createCohort(sdb.tenantId, session!.user.id, parsed.data.name.trim());
  return json({ cohort });
}

// GET /api/admin/cohorts — this instructor's cohorts (brand admins see every cohort in the tenant).
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!(await isTenantInstructor(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const cohorts = await listCohorts(sdb.tenantId, session!.user.id);
  return json({ cohorts });
}
