import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getAdultStatus } from "@/db/queries/teacher-age";
import { getCohort, isCohortTeacher } from "@/db/queries/cohorts";
import { CONTACT_MODES } from "@/lib/contact";
import { mayUseContact } from "@/lib/teacher-age";

const Body = z.object({
  cohortId: z.string().uuid(),
  // "default" clears the class rule, so this class's parents follow your default again.
  mode: z.enum([...CONTACT_MODES, "default"]),
});

// PUT /api/contact/cohort-overrides: a teacher's rule for how the parents of ONE class may reach
// them (decided 2026-09-20: "allow teacher to toggle cohort cannot or can contact me along with
// individual parent"). Sits between the default and the per-parent rule: a rule set for one parent
// still wins over the class rule. Only a teacher of this class, on this school, may set it; for
// anyone else it is the same 404 as a class that does not exist.
export async function PUT(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);
  if (!mayUseContact(await getAdultStatus(session.user.id))) {
    return json({ error: "Confirm you are 18 or older first.", needsAdultAttestation: true }, 403);
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { cohortId, mode } = parsed.data;

  const cohort = await getCohort(sdb.tenantId, cohortId);
  if (!cohort || !(await isCohortTeacher(sdb.tenantId, cohort.id, session.user.id))) {
    return errorJson("Not found", 404);
  }

  await sdb.setContactCohortOverride(session.user.id, cohort.id, mode === "default" ? null : mode);
  return json({ ok: true });
}
