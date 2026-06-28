import "server-only";
import type { Course } from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { sendEmail } from "@/lib/mailer";

// Per-tenant completion certificate email. The sender + brand come from the
// tenant row, so a BVC certificate never says Learn.WitUS / CentenarianOS.
export async function sendCompletionEmail(opts: {
  tenant: TenantRecord;
  course: Course;
  to: string;
  studentName: string | null;
  token: string;
  siteUrl: string;
}): Promise<void> {
  const brand = brandName(opts.tenant);
  const verifyUrl = `${opts.siteUrl}/verify/${opts.token}`;
  const who = opts.studentName ? `${opts.studentName}, ` : "";
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.tenant.email.replyTo,
    subject: `Your ${brand} certificate: ${opts.course.title}`,
    text: `${who}congratulations on completing "${opts.course.title}" with ${brand}.\n\nVerify your certificate:\n${verifyUrl}\n`,
  });
}
