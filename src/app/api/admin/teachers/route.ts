import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { findUserByEmail, getTeachingEligibility } from "@/db/queries/teacher-age";
import { getSchoolRole, grantTeacherRole } from "@/db/queries/school-teachers";
import { teacherGrantError } from "@/lib/school-teachers";

const Body = z.object({ email: z.string().trim().email().max(320) });

// POST /api/admin/teachers: make someone a teacher (instructor) of THIS school (decided 2026-09-20).
// Brand admin or platform owner. The tenant is the request host's, never the client's. The person
// must have signed in once and must pass the platform owner's "teachers must be adults" rule.
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);
  if (!(await isTenantAdmin(session, sdb.tenantId))) return errorJson("Forbidden", 403);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Enter the person's email address.", 400);

  const user = await findUserByEmail(parsed.data.email);
  if (!user) {
    return errorJson("No account uses that email yet. Ask them to sign in to this school once, then try again.", 404);
  }
  const [currentRole, eligibility] = await Promise.all([
    getSchoolRole(sdb.tenantId, user.id),
    getTeachingEligibility(user.id),
  ]);
  const error = teacherGrantError({ currentRole, passesAgeRule: eligibility.passesAgeRule, status: eligibility.status });
  if (error) return errorJson(error, 409);

  await grantTeacherRole(sdb.tenantId, user.id);
  return json({ ok: true });
}
