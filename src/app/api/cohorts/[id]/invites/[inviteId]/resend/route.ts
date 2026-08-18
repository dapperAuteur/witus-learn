import { apiContext, errorJson, isTenantAdmin, json } from "@/lib/api";
import { getCohort, refreshInvite } from "@/db/queries/cohorts";
import { sendCohortInviteEmail } from "@/lib/emails";
import { getSiteUrl } from "@/lib/site-url";

type Params = { params: Promise<{ id: string; inviteId: string }> };

// POST /api/cohorts/[id]/invites/[inviteId]/resend — re-deliver a pending invite (plans/50,
// Phase 3 roster CRUD). Gated exactly like /invite: the cohort's own creator or a tenant admin.
// The token stays stable (refreshInvite only bumps invitedAt), so the earlier email's link keeps
// working; like the create flow, the URL is always returned so the owner can copy/share it even
// when email isn't configured or the send fails. An accepted or foreign invite 404s.
export async function POST(_req: Request, { params }: Params) {
  const { id, inviteId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const cohort = await getCohort(sdb.tenantId, id);
  if (!cohort) return errorJson("Not found", 404);
  if (cohort.ownerId !== session.user.id && !(await isTenantAdmin(session, sdb.tenantId))) {
    return errorJson("Forbidden", 403);
  }

  const invite = await refreshInvite(sdb.tenantId, cohort.id, inviteId);
  if (!invite) return errorJson("Not found", 404);

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
    // still works, so surface it instead of failing the request.
    emailed = false;
  }

  return json({ inviteUrl, emailed });
}
