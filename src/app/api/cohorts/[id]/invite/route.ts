import { z } from "zod";
import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { createInvite, getCohort } from "@/db/queries/cohorts";
import { sendCohortInviteEmail } from "@/lib/emails";
import { getSiteUrl } from "@/lib/site-url";

type Params = { params: Promise<{ id: string }> };

const Body = z.object({ email: z.string().email() });

// POST /api/cohorts/[id]/invite — email a student an invite link. Gated on ownership
// (the cohort's own creator) or a tenant admin — not just "any instructor" — so one
// user can't manage another's cohort. Always returns the invite URL (so the owner can
// copy/share it) even if the email itself fails to send — the invite record already
// exists either way.
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

  const invite = await createInvite(sdb.tenantId, cohort.id, parsed.data.email.trim().toLowerCase());
  const inviteUrl = `${await getSiteUrl()}/join/${invite.token}`;

  let emailed = true;
  try {
    await sendCohortInviteEmail({
      tenant: sdb.tenant,
      cohortName: cohort.name,
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
