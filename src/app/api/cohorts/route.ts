import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { createCohort, listCohorts } from "@/db/queries/cohorts";
import { getTeachingEligibility } from "@/db/queries/teacher-age";
import { hasTeacherRole } from "@/lib/cohort-access";
import { teachBlockReason } from "@/lib/teacher-age";

const Body = z.object({ name: z.string().min(1).max(120) });

// POST /api/cohorts: create a private class (cohort). Decided 2026-09-20: only ADULT teachers or
// admins may. Role = instructor / brand_admin / platform owner on this tenant; age = the platform
// owner's "teachers must be adults" rule (src/lib/teacher-age.ts, default on). Anyone else can
// still be made a teacher of a class that a teacher or admin sets up for them
// (POST /api/cohorts/[id]/teachers).
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  if (!(await hasTeacherRole(session, sdb.tenantId))) {
    return errorJson("Only teachers and admins can create classes. Ask an admin to set one up for you.", 403);
  }
  const eligibility = await getTeachingEligibility(session.user.id);
  const blocked = teachBlockReason(eligibility);
  if (blocked) return json({ error: blocked, needsAdultAttestation: eligibility.status === "unattested" }, 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Please enter a class name.", 400);

  const cohort = await createCohort(sdb.tenantId, session.user.id, parsed.data.name.trim());
  return json({ cohort });
}

// GET /api/cohorts: the signed-in caller's classes (created by them or assigned to them).
export async function GET() {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohorts = await listCohorts(sdb.tenantId, session.user.id);
  return json({ cohorts });
}
