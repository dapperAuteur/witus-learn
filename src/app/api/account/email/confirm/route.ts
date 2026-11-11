import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";
import { maskEmail } from "@/lib/account-settings";
import { confirmEmailChange } from "@/db/queries/account-settings";
import { sendEmailChangedNoticeEmail } from "@/lib/emails";

const Body = z.object({ token: z.string().min(16).max(200) });

// POST /api/account/email/confirm: use the link from the email-change message. The link opens a page
// (/account/email/confirm) whose Confirm button posts here, so a mail scanner that only fetches the
// link changes nothing. No session is required: the token alone proves the person reads the new inbox,
// and they may open it on another device. On success the old address gets a plain notice (best-effort).
// Answers { outcome } for every expected case, so the page can say what to do next.
export async function POST(req: Request) {
  const { sdb } = await apiContext();
  if (!checkRateLimit(`email-confirm:ip:${clientIp(req)}`, { windowMs: 10 * 60 * 1000, max: 20 }).allowed) {
    return errorJson("Too many tries in a few minutes. Wait ten minutes, then open the link again.", 429);
  }
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return json({ outcome: "invalid" }, 400);

  const result = await confirmEmailChange(parsed.data.token, sdb.tenantId);
  if (!result.ok) return json({ outcome: result.reason }, result.reason === "taken" ? 409 : 410);

  try {
    await sendEmailChangedNoticeEmail({ tenant: sdb.tenant, to: result.oldEmail, newEmailMasked: maskEmail(result.newEmail), by: "self" });
  } catch (err) {
    console.error(`[account] email changed for user ${result.userId} but the notice to the old address FAILED on school ${sdb.tenant.slug}:`, err);
  }
  return json({ outcome: "changed" });
}
