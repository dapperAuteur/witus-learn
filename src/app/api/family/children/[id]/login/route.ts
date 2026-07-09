import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { isManagedChildOf } from "@/db/queries/family";
import { getCohort } from "@/db/queries/cohorts";
import { addCohortMemberIfAbsent, getOrCreateClassCode, setChildLoginMethod } from "@/db/queries/kid-login";

type Params = { params: Promise<{ id: string }> };

const Body = z.object({
  method: z.enum(["none", "magic_link", "avatar_pin"]),
  avatarKey: z.string().optional(),
  pin: z.string().optional(),
  // Only used when method === "avatar_pin": which of the parent's own cohorts to enroll
  // the child in (idempotent) so they have a class code to sign in with. Optional if the
  // child is already a member of a cohort with a class code.
  cohortId: z.string().uuid().optional(),
});

// POST /api/family/children/[id]/login — set (or clear) how a managed child signs in:
// None / Email (magic_link) / Avatar+PIN. Parent-owned only: isManagedChildOf is the gate,
// re-checked here AND inside setChildLoginMethod (belt + suspenders — never rely on a
// single call site for an ownership check this sensitive). Enabling Avatar+PIN with a
// cohortId also enrolls the child in that class (if not already) and ensures it has a
// class code, so the response can hand the parent something to share immediately.
export async function POST(req: Request, { params }: Params) {
  const { id: childUserId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid request.", 400);
  const { method, avatarKey, pin, cohortId } = parsed.data;

  const managesChild = await isManagedChildOf(session.user.id, childUserId);
  if (!managesChild) return errorJson("You don't manage that profile.", 403);

  let classCode: string | null = null;
  if (method === "avatar_pin" && cohortId) {
    const cohort = await getCohort(sdb.tenantId, cohortId);
    if (!cohort) return errorJson("Class not found.", 404);
    if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) {
      return errorJson("You don't manage that class.", 403);
    }
    await addCohortMemberIfAbsent(sdb.tenantId, cohort.id, childUserId);
    classCode = await getOrCreateClassCode(sdb.tenantId, cohort.id);
  }

  const result = await setChildLoginMethod(session.user.id, childUserId, method, { avatarKey, pin });
  if (!result.ok) return errorJson(result.error ?? "Could not update login method.", 400);

  return json({ ok: true, classCode });
}
