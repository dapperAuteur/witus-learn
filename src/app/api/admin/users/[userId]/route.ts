import { apiContext, errorJson, json } from "@/lib/api";
import { getMembership, isPlatformOwner } from "@/lib/session";
import { schoolRoleOf } from "@/db/queries/course-instructor";
import {
  adminSetEmail,
  applyProfileChanges,
  countOtherSchoolRoles,
  getAccountFacts,
  isEmailTaken,
  isUsernameTaken,
} from "@/db/queries/account-settings";
import { decideMemberEdit, EMAIL_TAKEN, maskEmail, MemberEditInput, USERNAME_TAKEN, validateUsername } from "@/lib/account-settings";
import { sendEmailChangedNoticeEmail } from "@/lib/emails";

// PATCH /api/admin/users/[userId]: a school's admin or the platform owner edits a member's display name,
// username or email from /admin/users (BAM, 2026-11-10). The target must hold a role on the school the
// request's host resolved to (another school's member is a 404). The rule is decideMemberEdit in
// src/lib/account-settings.ts: a school's admin may not edit the platform owner, another admin, or
// anyone who also belongs to another school, since an account is global. Validation is the same as
// self-service; an email change takes effect at once (no link), is logged in account_changes with the
// admin as the actor, and both addresses get a plain notice (best-effort).
export async function PATCH(req: Request, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Unauthorized", 401);

  const parsed = MemberEditInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Check the form.", 400);
  const d = parsed.data;

  const isOwner = await isPlatformOwner(session.user.id);
  const isSchoolAdmin = isOwner || (await getMembership(session.user.id, sdb.tenantId)) === "brand_admin";
  if (!isOwner && !isSchoolAdmin) return errorJson("Only the platform owner or this school's admin can edit a member's account.", 403);

  const [role, facts, otherSchoolRoles] = await Promise.all([
    schoolRoleOf(sdb.tenantId, userId),
    getAccountFacts(userId),
    countOtherSchoolRoles(userId, sdb.tenantId),
  ]);
  if (!facts || !role) return errorJson("Not found", 404);

  let username: string | undefined;
  if (d.username !== undefined) {
    const checked = validateUsername(d.username);
    if (!checked.ok) return errorJson(checked.error, 400);
    if (checked.username !== facts.username) username = checked.username;
  }
  const email = d.email !== undefined && d.email !== facts.email.toLowerCase() ? d.email : undefined;

  const decision = decideMemberEdit({
    actor: { userId: session.user.id, isOwner, isSchoolAdmin },
    target: { ...facts, role, otherSchoolRoles },
    changes: { email: email !== undefined, username: username !== undefined },
  });
  if (!decision.ok) return errorJson(decision.error, decision.status);

  if (username !== undefined && (await isUsernameTaken(username, userId))) return errorJson(USERNAME_TAKEN, 409);
  if (email !== undefined && (await isEmailTaken(email, userId))) return errorJson(EMAIL_TAKEN, 409);

  const actor = { userId: session.user.id, role: decision.actorRole, tenantId: sdb.tenantId };
  const changed: string[] = [];
  if (d.displayName !== undefined || username !== undefined) {
    const result = await applyProfileChanges({
      userId,
      displayName: d.displayName === undefined ? undefined : d.displayName.trim() || null,
      username,
      actor,
    });
    if (!result.ok) return result.reason === "username-taken" ? errorJson(USERNAME_TAKEN, 409) : errorJson("Not found", 404);
    changed.push(...result.changed);
  }
  if (email !== undefined) {
    const result = await adminSetEmail({ userId, newEmail: email, actor });
    if (!result.ok) return result.reason === "taken" ? errorJson(EMAIL_TAKEN, 409) : errorJson("Not found", 404);
    if (result.changed) {
      changed.push("email");
      for (const to of [result.oldEmail, email]) {
        try {
          await sendEmailChangedNoticeEmail({ tenant: sdb.tenant, to, newEmailMasked: maskEmail(email), by: "admin" });
        } catch (err) {
          console.error(`[admin-users] email changed for user ${userId} but a notice FAILED on school ${sdb.tenant.slug}:`, err);
        }
      }
    }
  }
  return json({ ok: true, changed });
}
