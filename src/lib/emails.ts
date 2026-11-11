import "server-only";
import type { Course, LeadInquiry } from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";
import { sendEmail } from "@/lib/mailer";
import { env } from "@/lib/env";
import { schoolDisclaimerFor } from "@/lib/school-disclaimer";

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
  // A certificate is a completion artifact, so a school whose name could read as a degree says what
  // it is not (src/lib/school-disclaimer.ts), here as on the /verify page.
  const schoolNote = schoolDisclaimerFor(opts.tenant.slug);
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.tenant.email.replyTo,
    subject: `Your ${brand} certificate: ${opts.course.title}`,
    text:
      `${who}congratulations on completing "${opts.course.title}" with ${brand}.\n\nVerify your certificate:\n${verifyUrl}\n` +
      (schoolNote ? `\n${schoolNote.text}\n` : ""),
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

/**
 * Invite-to-audit email (plans/52 §5): asks someone to REVIEW an unvetted course before it opens.
 * The copy says out loud that nothing they do is recorded, because a reviewer who thinks they are
 * being graded reads differently from one who knows they are not.
 */
export async function sendCourseAuditInviteEmail(opts: {
  tenant: TenantRecord;
  courseTitle: string;
  to: string;
  inviteUrl: string;
}): Promise<void> {
  const brand = brandName(opts.tenant);
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.tenant.email.replyTo,
    subject: `Please review "${opts.courseTitle}" on ${brand}`,
    text:
      `You've been invited to audit the course "${opts.courseTitle}" on ${brand} before it opens to learners.\n\n` +
      `Open this link, then sign in with this email address:\n${opts.inviteUrl}\n\n` +
      `You can read every lesson. Nothing you do is recorded: no progress, no quiz scores, no certificate. ` +
      `Send your notes to whoever invited you.\n`,
    // `/audit/<token>` GRANTS read access to a closed course → stripped from the Inbox mirror.
    kind: "course-audit-invite",
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
  const role = opts.inquiry.role ? (ROLE_LABELS[opts.inquiry.role] ?? opts.inquiry.role) : "-";
  const students = opts.inquiry.students != null ? String(opts.inquiry.students) : "-";
  const who = opts.fromName?.trim() || opts.fromEmail;

  const lines = [
    `New pricing enquiry for ${brand}.`,
    "",
    `Name:     ${opts.fromName?.trim() || "-"}`,
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

/**
 * The reminder email for a parent/teacher contact ping (src/app/api/cron/contact-pings): the
 * person who asked has not said "we've started talking", so the person they asked hears about it by
 * email as well as in the app. Sent on days 2, 4, 8 and 16 until either person ends the request,
 * which itself ends on day 30 (BAM, 2026-10-06).
 *
 * Reply-To is the ASKER's account email (the sendPricingInquiryEmail pattern), so hitting reply
 * answers them directly. From stays the school's own sender: putting a parent's gmail address in
 * From would fail DMARC at the recipient's mail server, while Reply-To is not checked. Contains the
 * student's name (decided 2026-09-20: both adults see it; the guardian invite already names the
 * child) and a sign-in-required link to the page where the request lives. Contains NO message from
 * the asker (there is none to send), no token, and no link that grants anything. Not mirrored to the
 * WitUS Inbox (NOT_MIRRORED in src/lib/mailer.ts).
 */
export async function sendContactPingEmail(opts: {
  tenant: TenantRecord;
  to: string;
  fromName: string;
  fromEmail: string;
  fromRoleText: string;
  fromPhone: string | null;
  fromNote: string | null;
  studentName: string;
  cohortName: string;
  askedOn: string;
  /** The day the request ends on its own (30 days after the ask). */
  endsOn: string;
  /** Which reminder this is, 1-based, and how many there can be. */
  reminderNumber: number;
  reminderTotal: number;
  pageUrl: string;
}): Promise<void> {
  const brand = brandName(opts.tenant);
  const isLast = opts.reminderNumber >= opts.reminderTotal;
  const lines = [
    `${opts.fromName}, ${opts.fromRoleText} in "${opts.cohortName}", asked on ${opts.askedOn} to talk with you.`,
    "",
    "How to reach them:",
    `  Email: ${opts.fromEmail} (reply to this email to answer them directly)`,
    ...(opts.fromPhone ? [`  Phone: ${opts.fromPhone}`] : []),
    ...(opts.fromNote ? [`  Best time: ${opts.fromNote}`] : []),
    "",
    `${brand} does not carry messages, so please talk by email or phone.`,
    "",
    `See this request, and ${opts.studentName}'s work, on ${brand} (sign in required):`,
    opts.pageUrl,
    "",
    `You are getting this because ${opts.fromName} asked through ${brand} on ${opts.askedOn}, and neither of you has ended the request yet.`,
    isLast
      ? `This is the last reminder (${opts.reminderNumber} of ${opts.reminderTotal}). The request ends on its own on ${opts.endsOn}.`
      : `This is reminder ${opts.reminderNumber} of ${opts.reminderTotal}; they come further apart each time. To stop them, close the request on the page above, or once you've talked ${opts.fromName} can mark it done. Either way it ends on its own on ${opts.endsOn}.`,
  ];
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.fromEmail,
    subject:
      opts.reminderNumber > 1
        ? `Reminder: ${opts.fromName} would like to talk about ${opts.studentName}`
        : `${opts.fromName} would like to talk about ${opts.studentName}`,
    text: lines.join("\n"),
    kind: "contact-ping",
    tenant: opts.tenant.slug,
  });
}

// A teacher asked for a course (POST /api/teach/course-requests): tell the school's admins, with a link
// to the Users page where they decide it. Same per-tenant sender as every other email here. The
// caller treats a failure as non-fatal: the request row is already saved and listed on /admin/users.
export async function sendCourseRequestEmail(opts: {
  tenant: TenantRecord;
  to: string;
  teacherName: string;
  teacherEmail: string;
  title: string;
  description: string;
  reason: string;
  briefUrl: string | null;
  adminUrl: string;
}): Promise<void> {
  const brand = brandName(opts.tenant);
  const lines = [
    `${opts.teacherName} asked for a new course on ${brand}.`,
    "",
    `Title:   ${opts.title}`,
    "",
    "What it covers:",
    opts.description,
    "",
    "Why:",
    opts.reason,
    ...(opts.briefUrl ? ["", `Brief: ${opts.briefUrl}`] : []),
    "",
    `Approve or decline it here: ${opts.adminUrl}`,
    `Reply straight to this email to answer ${opts.teacherName}.`,
  ];
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.teacherEmail,
    subject: `${brand}: course request from ${opts.teacherName}: ${opts.title}`,
    text: lines.join("\n"),
    kind: "course-request",
    tenant: opts.tenant.slug,
  });
}

// The school decided a teacher's course request (POST /api/admin/course-requests/[id]): tell the
// teacher, with the course link on an approval or the note on a decline. Non-fatal for the caller.
export async function sendCourseRequestDecisionEmail(opts: {
  tenant: TenantRecord;
  to: string;
  title: string;
  decision: "approved" | "declined";
  note: string | null;
  /** The new course's /teach page, on an approval. */
  courseUrl: string | null;
}): Promise<void> {
  const brand = brandName(opts.tenant);
  const approved = opts.decision === "approved";
  const lines = approved
    ? [
        `Your course request on ${brand} was approved: ${opts.title}.`,
        "",
        "A draft course was created with you as its instructor. It is private and unpublished until the school opens it.",
        ...(opts.courseUrl ? ["", `Start adding lessons: ${opts.courseUrl}`] : []),
        ...(opts.note ? ["", "Note from the school:", opts.note] : []),
      ]
    : [
        `Your course request on ${brand} was declined: ${opts.title}.`,
        "",
        "Note from the school:",
        opts.note ?? "(none)",
        "",
        "You can send a new request from Teach once you have addressed it.",
      ];
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.tenant.email.replyTo,
    subject: `${brand}: your course request was ${opts.decision}: ${opts.title}`,
    text: lines.join("\n"),
    kind: "course-request-decision",
    tenant: opts.tenant.slug,
  });
}

// Account settings (BAM, 2026-11-10: "users should be able to manage their accounts").

// The link that moves an account to a new address, sent to the NEW address only (proving the person
// reads that inbox). A bearer credential: its `token` query parameter is stripped from the Inbox mirror
// by src/lib/email-redact.ts.
export async function sendEmailChangeLinkEmail(opts: { tenant: TenantRecord; to: string; link: string; expiresMinutes: number }): Promise<void> {
  const brand = brandName(opts.tenant);
  const lines = [
    `Someone signed in to ${brand} asked to use this address for their account.`,
    "",
    `To confirm, open this link and press Confirm (it works for ${opts.expiresMinutes} minutes):`,
    opts.link,
    "",
    "If you didn't ask for this, ignore this email. Nothing changes until the link is used.",
  ];
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.tenant.email.replyTo,
    subject: `${brand}: confirm your new email address`,
    text: lines.join("\n"),
    kind: "email-change",
    tenant: opts.tenant.slug,
  });
}

// A plain notice to the OLD address once the account has moved, so a change the owner did not make is
// noticed. No link: there is nothing to click, and the old address no longer signs in.
export async function sendEmailChangedNoticeEmail(opts: {
  tenant: TenantRecord;
  to: string;
  newEmailMasked: string;
  /** Who made the change: the person themselves, or an admin of the school. */
  by: "self" | "admin";
}): Promise<void> {
  const brand = brandName(opts.tenant);
  const lines = [
    opts.by === "self"
      ? `The email address on your ${brand} account was changed to ${opts.newEmailMasked}.`
      : `An admin of ${brand} changed the email address on your account to ${opts.newEmailMasked}.`,
    "",
    "Sign-in links now go to the new address, not this one.",
    "",
    "If you didn't expect this, reply to this email and say so.",
  ];
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    replyTo: opts.tenant.email.replyTo,
    subject: `${brand}: your account's email address was changed`,
    text: lines.join("\n"),
    kind: "email-change-notice",
    tenant: opts.tenant.slug,
  });
}

// Tell the platform owner that someone asked for their account to be deleted (there is no
// self-service deletion; the owner handles it by hand and marks it on /admin/users).
export async function sendAccountDeletionRequestEmail(opts: { tenant: TenantRecord; to: string; who: string; adminUrl: string }): Promise<void> {
  const brand = brandName(opts.tenant);
  await sendEmail({
    to: opts.to,
    from: opts.tenant.email.from,
    subject: `${brand}: ${opts.who} asked to delete their account`,
    text: [
      `${opts.who} asked, from ${brand}, for their account to be deleted.`,
      "",
      `It is listed on the Users page until you mark it handled: ${opts.adminUrl}`,
    ].join("\n"),
    kind: "account-deletion-request",
    tenant: opts.tenant.slug,
  });
}
