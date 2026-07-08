import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getCohort, listMembers } from "@/db/queries/cohorts";
import { createGuardianInvite } from "@/db/queries/family";
import { sendGuardianInviteEmail } from "@/lib/emails";
import { getSiteUrl } from "@/lib/site-url";

type Params = { params: Promise<{ id: string }> };

const Body = z.object({ studentUserId: z.string().min(1), email: z.string().email() });

// POST /api/cohorts/[id]/guardian-invite — a teacher links a parent to one of their
// students' accounts so the parent gets a read-only Family view of that child. Gated the
// same way as the student invite: the cohort's own owner or a tenant admin — never any
// other signed-in user. Always returns the invite URL (so the teacher can copy/share it)
// even if the email itself fails to send.
export async function POST(req: Request, { params }: Params) {
  const { id } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Not found", 404);
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) {
    return errorJson("Forbidden", 403);
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Please enter a valid email address.", 400);

  // Confirm the student is actually a member of THIS cohort before inviting a parent to
  // see them — a teacher can only vouch for guardians of their own students.
  const members = await listMembers(sdb.tenantId, cohort.id);
  const student = members.find((m) => m.userId === parsed.data.studentUserId);
  if (!student) return errorJson("That student isn't a member of this class.", 400);

  const invite = await createGuardianInvite(
    sdb.tenantId,
    parsed.data.studentUserId,
    parsed.data.email.trim().toLowerCase(),
    cohort.id,
  );
  const inviteUrl = `${await getSiteUrl()}/family/accept/${invite.token}`;

  let emailed = true;
  try {
    await sendGuardianInviteEmail({
      tenant: sdb.tenant,
      studentName: student.displayName,
      to: invite.email,
      inviteUrl,
    });
  } catch {
    // Mailgun may not be configured yet (or the send failed) — the invite link
    // above still works, so surface it instead of failing the request.
    emailed = false;
  }

  return json({ inviteUrl, emailed });
}
