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

// Cohort invite email — invites a student into an instructor's private class
// (home-school #1 use case). Same per-tenant sender pattern as the certificate
// email above.
export async function sendCohortInviteEmail(opts: {
  tenant: TenantRecord;
  cohortName: string;
  to: string;
  inviteUrl: string;
}): Promise<void> {
  const brand = brandName(opts.tenant);
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.tenant.email.replyTo,
    subject: `You're invited to "${opts.cohortName}" on ${brand}`,
    text: `You've been invited to join the class "${opts.cohortName}" on ${brand}.\n\nJoin here:\n${opts.inviteUrl}\n`,
  });
}

// Guardian (parent) invite email — a teacher links a parent to their child's account so
// the parent gets a read-only Family view (progress/grades/attendance for that child
// only). Same per-tenant sender pattern as the cohort invite above.
export async function sendGuardianInviteEmail(opts: {
  tenant: TenantRecord;
  studentName: string;
  to: string;
  inviteUrl: string;
}): Promise<void> {
  const brand = brandName(opts.tenant);
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.tenant.email.replyTo,
    subject: `See ${opts.studentName}'s progress on ${brand}`,
    text: `You've been invited to link your ${brand} parent account to ${opts.studentName}, so you can see their course progress, grades, and attendance.\n\nLink your account:\n${opts.inviteUrl}\n`,
  });
}
