import { env } from "@/lib/env";
import { apiContext, errorJson, json } from "@/lib/api";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";
import { requestOrigin } from "@/lib/request-origin";
import {
  accountLockReason,
  EMAIL_CHANGE_MAX_PER_HOUR,
  EMAIL_CHANGE_TTL_MINUTES,
  EMAIL_RATE_LIMITED,
  EMAIL_SAME,
  EMAIL_TAKEN,
  EmailChangeInput,
} from "@/lib/account-settings";
import {
  cancelEmailChange,
  countRecentEmailChangeRequests,
  createEmailChangeRequest,
  getAccountFacts,
  isEmailTaken,
} from "@/db/queries/account-settings";
import { sendEmailChangeLinkEmail } from "@/lib/emails";

// POST /api/account/email: start changing the signed-in person's own email (BAM, 2026-11-10: "users
// should be able to manage their accounts"). Nothing changes yet: Learn mails a link to the NEW address
// and the change happens when that link is used (POST /api/account/email/confirm), so an address is only
// ever moved to an inbox its owner reads. Rate-limited twice: a per-instance burst limit, and a durable
// count in the database (EMAIL_CHANGE_MAX_PER_HOUR per account per hour). The link points at the school
// whose host the request came from; an unknown host never gets here (apiContext 404s it).
export async function POST(req: Request) {
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Sign in first, then try again.", 401);

  const parsed = EmailChangeInput.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson(parsed.error.issues[0]?.message ?? "Enter a full email address.", 400);
  const newEmail = parsed.data.newEmail;

  const facts = await getAccountFacts(session.user.id);
  if (!facts) return errorJson("Sign in first, then try again.", 401);
  const lock = accountLockReason(facts);
  if (lock) return errorJson(lock, 400);
  if (newEmail === facts.email.toLowerCase()) return errorJson(EMAIL_SAME, 400);

  const burst = checkRateLimit(`email-change:user:${session.user.id}`, { windowMs: 10 * 60 * 1000, max: 3 });
  const perIp = checkRateLimit(`email-change:ip:${clientIp(req)}`, { windowMs: 10 * 60 * 1000, max: 10 });
  if (!burst.allowed || !perIp.allowed) return errorJson("Too many tries in a few minutes. Wait ten minutes, then try again.", 429);
  if ((await countRecentEmailChangeRequests(session.user.id)) >= EMAIL_CHANGE_MAX_PER_HOUR) return errorJson(EMAIL_RATE_LIMITED, 429);

  if (await isEmailTaken(newEmail, session.user.id)) return errorJson(EMAIL_TAKEN, 409);

  const { token, expiresAt } = await createEmailChangeRequest({ userId: session.user.id, tenantId: sdb.tenantId, newEmail });
  const origin = requestOrigin(req.headers) ?? env.NEXT_PUBLIC_APP_URL;
  const link = `${origin}/account/email/confirm?token=${encodeURIComponent(token)}`;
  try {
    await sendEmailChangeLinkEmail({ tenant: sdb.tenant, to: newEmail, link, expiresMinutes: EMAIL_CHANGE_TTL_MINUTES });
  } catch (err) {
    console.error(`[account] email-change link for user ${session.user.id} could not be sent on school ${sdb.tenant.slug}:`, err);
    await cancelEmailChange(session.user.id);
    return errorJson("We couldn't send the confirmation email just now. Check the address and try again in a few minutes.", 502);
  }
  return json({ pending: { newEmail, expiresAt } }, 201);
}

// DELETE /api/account/email: cancel a waiting email change (its link stops working).
export async function DELETE() {
  const { session } = await apiContext();
  if (!session) return errorJson("Sign in first, then try again.", 401);
  await cancelEmailChange(session.user.id);
  return json({ ok: true });
}
