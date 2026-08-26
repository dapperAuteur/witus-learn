// Self-nominated course interest. PURE (no next/headers, no db) so the isolation suite can prove
// every branch offline, exactly like src/lib/auditors.ts, which this feeds.
//
// THE ONE RULE, and the reason this file exists at all: a self-nomination is a REQUEST. It is not
// access. src/db/schema/auditors.ts explains why a `course_auditors` grant is valuable (it opens an
// UNVETTED course to a reader), and a grant anyone could mint by typing "I am an expert" into a
// public form would be worth nothing. So the only function here that says "give this person a
// grant" requires BOTH an explicit human approval AND a capacity that a grant fits, and it is the
// single definition the route, the query layer and the tests all share.

/** The three ways a visitor can put their hand up on a course. */
export type InterestCapacity = "learner" | "beta" | "expert";

/** pending grants nothing. approved is a human decision. declined is not reopened by re-asking. */
export type InterestStatus = "pending" | "approved" | "declined";

export interface CapacityDef {
  value: InterestCapacity;
  /** Radio label on the public form. */
  label: string;
  /** One line under the label, saying what the person is agreeing to do. */
  blurb: string;
  /** What approving this capacity mints. "audit" is the read-only course_auditors grant. */
  grants: "audit" | "none";
}

export const CAPACITIES: readonly CapacityDef[] = [
  {
    value: "learner",
    label: "I want to take this course",
    blurb: "Tell me when it opens. Nothing else is expected of you.",
    grants: "none",
  },
  {
    value: "beta",
    label: "I will test this course before it opens",
    blurb:
      "Read it early and send notes on what is confusing, broken, or wrong. Nothing you do is recorded, so no progress, no scores, no certificate.",
    grants: "audit",
  },
  {
    value: "expert",
    label: "I can vet this course as a subject matter expert",
    blurb:
      "Check the claims and the sources against what you know. Tell us your background below so the instructor can weigh it.",
    grants: "audit",
  },
] as const;

const CAPACITY_VALUES = new Set<string>(CAPACITIES.map((c) => c.value));

export function isInterestCapacity(v: unknown): v is InterestCapacity {
  return typeof v === "string" && CAPACITY_VALUES.has(v);
}

export function capacityDef(capacity: InterestCapacity): CapacityDef {
  return CAPACITIES.find((c) => c.value === capacity) ?? CAPACITIES[0]!;
}

/** Short label for the admin list. */
export function capacityLabel(capacity: InterestCapacity): string {
  switch (capacity) {
    case "beta":
      return "Beta tester";
    case "expert":
      return "Subject matter expert";
    default:
      return "Interested learner";
  }
}

/**
 * Does approving this request hand over a read-only audit grant on the course?
 *
 * The ONLY function in the app that answers "should this self-nomination become a course_auditors
 * row". Both halves are load-bearing:
 *
 *   status must be APPROVED  a pending or declined request grants nothing, ever. This is the
 *                            privilege-escalation guard: without it, the public form itself would
 *                            be the grant, and an unvetted course would be open to anyone who
 *                            claimed expertise.
 *   capacity must FIT        an interested learner is not a reviewer. They asked to be told when
 *                            the course opens, so they get exactly that and no read access.
 *
 * Approval NEVER enrolls anyone, in any capacity. See src/db/schema/auditors.ts for why: a tester
 * counted as a learner corrupts the course statistics the quiz-integrity rule protects.
 */
export function grantsAuditOnDecision(input: {
  capacity: InterestCapacity;
  status: InterestStatus;
}): boolean {
  if (input.status !== "approved") return false;
  return capacityDef(input.capacity).grants === "audit";
}

/**
 * Should this request's EMAIL be mirrored into the school's existing lead funnel (leads.inquiries,
 * via addCourseNotifySignup)?
 *
 * True for the two learner-shaped capacities only, because that is literally the existing "notify
 * me when this course opens" button and the demand board on /admin/leads should keep counting them.
 * An expert did not ask to hear about a course opening, and counting a reviewer as demand would
 * inflate the one number the board exists to report.
 *
 * ONLY the email and the course reach the funnel. Never the phone number, never the credentials:
 * `leads` feeds a CSV export and an email-campaign audience (see src/db/schema/interest.ts).
 */
export function feedsLeadFunnel(capacity: InterestCapacity): boolean {
  return capacity === "learner" || capacity === "beta";
}

// ── Input normalization ────────────────────────────────────────────────────────────────
// Trim, lowercase the address, and turn a whitespace-only optional field into a real NULL, so
// "  " never lands in the database looking like a phone number somebody can be called on.

export interface RawInterestInput {
  capacity: InterestCapacity;
  name: string;
  email: string;
  phone?: string | null;
  credentials?: string | null;
}

export interface NormalizedInterestInput {
  capacity: InterestCapacity;
  name: string;
  email: string;
  /** E.164-style ("+" then digits) when it could be read that way, else null. */
  phone: string | null;
  /** Exactly what they typed, kept whether or not normalization understood it. */
  phoneRaw: string | null;
  credentials: string | null;
}

const blankToNull = (v: string | null | undefined): string | null => {
  const t = (v ?? "").trim();
  return t === "" ? null : t;
};

// ── Phone: international, and deliberately forgiving ───────────────────────────────────
//
// No country is assumed. This platform is white-labelled onto schools anywhere, so a number from
// outside the US is a normal case and there is no "default" dialling code to prepend. The form asks
// for the country code in the hint and this never invents one.
//
// No parsing library either: libphonenumber is large, nothing in package.json already has it, and
// a contact field a human reads and dials does not need per-country grammar. What it needs is to
// not reject real people. So the rule is loose on purpose:
//
//   accepted characters   + digits space hyphen parentheses dots (every separator a human types)
//   normalization         strip the separators; keep a LEADING "+" if there was one
//   plausibility          6 to 15 digits, which spans the shortest national numbers up to E.164's
//                         own 15-digit ceiling
//
// A number outside that range is NOT refused. It is stored raw, with `phone` left null, because an
// unusual number the owner can still read beats a signup the form threw away. The only thing that
// is refused is a non-empty phone field with no digit in it at all, which is not a phone number by
// any country's rules.

/** The separators a human types. Everything here is stripped before the digits are counted. */
const PHONE_SEPARATORS = /[\s().\-\u2010-\u2015\/]/g;

export const PHONE_MIN_DIGITS = 6;
/** E.164's own ceiling. */
export const PHONE_MAX_DIGITS = 15;

export interface NormalizedPhone {
  /** E.164-style, or null when the input could not plausibly be read as a number. */
  e164: string | null;
  /** Trimmed original. Null only when the field was left empty. */
  raw: string | null;
  /** False only for a non-empty value containing no digit at all. */
  usable: boolean;
}

export function normalizePhone(input: string | null | undefined): NormalizedPhone {
  const raw = blankToNull(input);
  if (raw === null) return { e164: null, raw: null, usable: true };

  const stripped = raw.replace(PHONE_SEPARATORS, "");
  const digits = stripped.replace(/\D/g, "");
  if (digits.length === 0) return { e164: null, raw, usable: false };

  // Only a LEADING plus is a country-code marker. A "+" anywhere else is noise, not a second one.
  const hasPlus = stripped.startsWith("+");
  const plausible = digits.length >= PHONE_MIN_DIGITS && digits.length <= PHONE_MAX_DIGITS;
  return { e164: plausible ? `${hasPlus ? "+" : ""}${digits}` : null, raw, usable: true };
}

export function normalizeInterestInput(raw: RawInterestInput): NormalizedInterestInput {
  const phone = normalizePhone(raw.phone);
  return {
    capacity: raw.capacity,
    name: raw.name.trim(),
    email: raw.email.trim().toLowerCase(),
    phone: phone.e164,
    phoneRaw: phone.raw,
    credentials: blankToNull(raw.credentials),
  };
}

/** Hint under the phone input. Names two dialling codes so neither reads as the default. */
export const PHONE_HINT = "Include your country code, for example +44 20 7123 4567 or +1 555 0100.";

// ── Owner-only serialization ───────────────────────────────────────────────────────────

/**
 * The fields that must never leave the owner's own admin surface. Exported so the isolation suite
 * can assert against the list itself rather than against a copy of it that can drift.
 */
export const INTEREST_PII_FIELDS = ["phone", "phone_raw", "phoneRaw", "credentials"] as const;

/** One request as the row is stored, reduced to what the serializer needs. */
export interface InterestRow {
  id: string;
  tenantId: string;
  courseId: string;
  capacity: string;
  status: string;
  name: string;
  email: string;
  phone: string | null;
  phoneRaw: string | null;
  credentials: string | null;
  createdAt: Date;
  decidedAt: Date | null;
}

export interface OwnerInterestView {
  id: string;
  capacity: InterestCapacity;
  status: InterestStatus;
  name: string;
  email: string;
  /** E.164-style, or null when nothing dialable could be read out of what they typed. */
  phone: string | null;
  /** Shown next to `phone` only when the two differ, so mangled normalization is always visible. */
  phoneRaw: string | null;
  credentials: string | null;
  createdAt: string;
  decidedAt: string | null;
}

/**
 * The ONE place a request (phone and credentials included) is turned into JSON.
 *
 * Callers must already have proved the reader is the course owner, its instructor, or a tenant
 * admin, AND that the row is this tenant's. This re-checks the tenant anyway, because a boundary
 * enforced only in the query is a boundary one forgotten WHERE undoes silently: a row from another
 * school returns null and the caller drops it.
 */
export function serializeForOwner(row: InterestRow, tenantId: string): OwnerInterestView | null {
  if (row.tenantId !== tenantId) return null;
  return {
    id: row.id,
    capacity: isInterestCapacity(row.capacity) ? row.capacity : "learner",
    status: isInterestStatus(row.status) ? row.status : "pending",
    name: row.name,
    email: row.email,
    phone: row.phone,
    phoneRaw: row.phoneRaw,
    credentials: row.credentials,
    createdAt: row.createdAt.toISOString(),
    decidedAt: row.decidedAt ? row.decidedAt.toISOString() : null,
  };
}

export function isInterestStatus(v: unknown): v is InterestStatus {
  return v === "pending" || v === "approved" || v === "declined";
}

/**
 * What the PUBLIC form says back. Deliberately identical whatever happened, so the response cannot
 * be used to probe whether an address has already applied or has been declined.
 */
export const INTEREST_ACK =
  "Thanks. Your note is with the instructor, and they will get in touch if it is a fit.";

/**
 * The privacy sentences the form must show, verbatim. Kept here (not inline in the component) so
 * the isolation suite can pin them: a field that quietly collects a phone number is not acceptable,
 * and a promise that drifts out of the copy is the same failure a month later.
 *
 * The second sentence is the honest half. Every submission does reach the WitUS team's triage inbox
 * (buildInboxSubmission below), so the copy says so rather than implying the note never leaves this
 * school. What it says does NOT go there is exactly what buildInboxSubmission does not send.
 */
export const INTEREST_PRIVACY_NOTICE =
  "Your phone number and your background are shown only to this course's instructor and this school's admins. They are never published, never sold, never added to a mailing list, and never sent to any other service. Both are optional: leave them blank and email is enough.";

export const INTEREST_ROUTING_NOTICE =
  "Your name, your email address, and which of the three you picked go to the WitUS team's inbox so a person actually reads this and replies.";

// ── Inbox notification (the central WitUS triage) ──────────────────────────────────────

/**
 * The submission body for src/lib/ecosystem-webhook.ts -> sendToInbox, built as a PURE function so
 * the isolation suite can assert what it does and does not carry without a network or a database.
 *
 * WHAT IT CARRIES, and why that is the line:
 *   name, email       the contract's own submitter_name / submitter_email, which is how a triager
 *                     replies to a person at all. Every sibling route already sends these
 *                     (src/app/api/leads/route.ts, /api/course-notify), and the form's copy says so.
 *   capacity          in the form_type AND in the payload, so an SME nomination awaiting a decision
 *                     reads differently from someone marking interest, at a glance in the list.
 *   course, school    which course of which brand, so the item is actionable without a lookup.
 *   the two booleans  whether a phone number and a background were supplied, so a triager knows
 *                     there is more to read and where to read it.
 *   review_url        a deep link to the owner's own admin view, which is where the PII lives.
 *
 * WHAT IT REFUSES TO CARRY: the phone number and the credentials text themselves. They were
 * volunteered under the promise above, by someone who may have no account here, and the inbox is a
 * different service with a different database and a shared triage UI. A notification plus a link
 * back is all the triager needs, and it keeps one copy of the sensitive fields rather than two.
 * INTEREST_PII_FIELDS is the list; tests/isolation/course-interest.test.ts asserts neither the keys
 * nor the values appear anywhere in this body.
 *
 * The form_type follows the `<form>:<kind>` convention src/lib/mailer.ts already established.
 * `priority` stays "normal" for all three: the contract reserves "high" (which fires an SMS alert)
 * for inbound that could be a paying customer today, and none of these is.
 */
export function buildInboxSubmission(input: {
  request: NormalizedInterestInput;
  courseId: string;
  courseTitle: string;
  courseSlug: string | null;
  schoolSlug: string;
  /** Absolute link to the owner's admin view of this course's requests. */
  reviewUrl: string;
}): {
  form_type: string;
  submitter_email: string;
  submitter_name: string;
  priority: "normal";
  payload: Record<string, unknown>;
} {
  const { request } = input;
  return {
    form_type: `learn-course-interest:${request.capacity}`,
    submitter_email: request.email,
    submitter_name: request.name,
    priority: "normal",
    payload: {
      capacity: request.capacity,
      capacity_label: capacityLabel(request.capacity),
      needs_decision: capacityDef(request.capacity).grants === "audit",
      name: request.name,
      email: request.email,
      course_id: input.courseId,
      course_title: input.courseTitle,
      course_slug: input.courseSlug,
      school: input.schoolSlug,
      // Deliberately booleans, never the values. See the note above.
      phone_provided: request.phoneRaw !== null,
      credentials_provided: request.credentials !== null,
      review_url: input.reviewUrl,
    },
  };
}
