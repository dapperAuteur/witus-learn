import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { addCohortTeacher, getCohort } from "@/db/queries/cohorts";
import { findUserByEmail, getTeachingEligibility } from "@/db/queries/teacher-age";
import { canAssignCohortTeachers } from "@/lib/cohort-access";

const Body = z.object({ email: z.string().trim().email().max(320) });

// POST /api/cohorts/[id]/teachers: assign another person as a teacher of this class, so they can
// run it (roster, invites, grades, teacher notes) and so its families can reach them. Only the
// class's creator or a tenant admin may assign (decided 2026-09-20). The assignee must pass the
// platform owner's "teachers must be adults" rule; they do NOT need an instructor role, because
// being assigned to a class is itself the grant for that class.
//
// The email lookup does tell an assigner whether an address has an account. That is accepted
// here: only a class's creator or a school admin reaches it, and the alternative (an invite-token
// flow) is a second product for a one-field form.
export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Not found", 404);
  if (!(await canAssignCohortTeachers(session, sdb.tenantId, cohort))) {
    return errorJson("Only the class's creator or a school admin can assign teachers.", 403);
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Enter the teacher's email address.", 400);

  const user = await findUserByEmail(parsed.data.email);
  if (!user) {
    return errorJson("No account uses that email yet. Ask them to sign in to this school once, then try again.", 404);
  }
  const eligibility = await getTeachingEligibility(user.id);
  if (!eligibility.passesAgeRule) {
    return errorJson(
      eligibility.status === "unattested"
        ? "That person hasn't confirmed they are 18 or older. Teachers must be adults: ask them to confirm it from the Cohorts page, then try again."
        : "That account belongs to a student, so it can't be assigned to teach.",
      409,
    );
  }

  await addCohortTeacher(sdb.tenantId, cohort.id, user.id, session.user.id);
  return json({ ok: true });
}
