import "server-only";
import type { Course, LeadInquiry } from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { sendEmail } from "@/lib/mailer";
import { env } from "@/lib/env";

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
    // `/verify/<token>` is PUBLIC by design (a stranger is meant to be able to open it and check
    // the certificate), so it survives the Inbox mirror's redaction — see email-redact.ts.
    kind: "certificate",
    tenant: opts.tenant.slug,
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
    // `/join/<token>` GRANTS class membership to whoever holds it → stripped from the Inbox mirror.
    kind: "cohort-invite",
    tenant: opts.tenant.slug,
  });
}

const ROLE_LABELS: Record<string, string> = {
  parent: "Parent",
  teacher: "Teacher",
  homeschooler: "Homeschooler",
  school_district: "School or district",
  other: "Other",
};

/**
 * Who a pricing enquiry for this brand should land on. The brand's own reply-to comes first (a
 * second school's enquiries must reach THAT school, not the platform owner), falling back to the
 * platform owner. Null when neither is configured — the caller then records the lead and skips
 * the email rather than throwing.
 */
export function pricingInquiryRecipient(tenant: TenantRecord): string | null {
  return tenant.email.replyTo ?? env.PLATFORM_OWNER_EMAIL ?? null;
}

/**
 * "Contact us for pricing" enquiry → the brand's inbox. Reply-To is the PROSPECT, so hitting
 * reply in a mail client answers the customer directly.
 *
 * Throws if Mailgun rejects it (that is sendEmail's contract). The caller MUST treat that as
 * non-fatal — the lead is already persisted, and losing the row because the mail failed would
 * cost a sale. See submitPricingInquiry.
 */
export async function sendPricingInquiryEmail(opts: {
  tenant: TenantRecord;
  to: string;
  fromName: string | null;
  fromEmail: string;
  inquiry: LeadInquiry;
  adminUrl: string;
}): Promise<void> {
  const brand = brandName(opts.tenant);
  const role = opts.inquiry.role ? (ROLE_LABELS[opts.inquiry.role] ?? opts.inquiry.role) : "—";
  const students = opts.inquiry.students != null ? String(opts.inquiry.students) : "—";
  const who = opts.fromName?.trim() || opts.fromEmail;

  const lines = [
    `New pricing enquiry for ${brand}.`,
    "",
    `Name:     ${opts.fromName?.trim() || "—"}`,
    `Email:    ${opts.fromEmail}`,
    `Role:     ${role}`,
    `Students: ${students}`,
    "",
    "Message:",
    opts.inquiry.message?.trim() || "(none)",
    "",
    `Reply straight to this email to answer ${who}.`,
    `All leads: ${opts.adminUrl}`,
  ];

  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.fromEmail,
    subject: `${brand}: pricing enquiry from ${who}`,
    text: lines.join("\n"),
    // Note: the ENQUIRY itself is already mirrored by submitPricingInquiry as
    // `learn-witus-pricing-inquiry` (with the full lead). This mirrors the NOTIFICATION EMAIL as
    // `learn-witus-email:pricing-inquiry` — a different form_type, so triage can tell "a lead came
    // in" from "we emailed the brand about it", which is exactly the pair you want when a send
    // silently fails.
    kind: "pricing-inquiry",
    tenant: opts.tenant.slug,
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
    // `/family/accept/<token>` GRANTS access to a CHILD's data → the most sensitive link we send.
    // Stripped from the Inbox mirror; only the fact that the invite went out is recorded.
    kind: "guardian-invite",
    tenant: opts.tenant.slug,
  });
}
