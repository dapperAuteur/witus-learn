// Parent/teacher contact, as pure rules (no database), so every decision is unit-testable the way
// src/lib/assessment-fit.ts is. Queries live in src/db/queries/contact.ts; routes and pages call
// these functions with the facts those queries return.
//
// The feature, per BAM (2026-08-30, then 2026-09-20, choosing Option C with his own fallback):
//   1. Each adult sets how the OTHER side may reach them: show my details / ask me first / only
//      through the school. One default for parents, one for teachers, and per-person overrides.
//   2. A ping ("I'd like to talk") shows up IN THE APP first, as a badge and a card on the page where
//      the relationship already lives (/family, the class roster). There is no inbox.
//   3. The person who asked says "we've started talking" once they have. If they have not after 48
//      hours, the other person gets ONE email, Reply-To the asker.
//   4. No student is ever a party. Both adults see the student's name and a link to their work.

export const CONTACT_MODES = ["direct", "request", "school"] as const;
export type ContactMode = (typeof CONTACT_MODES)[number];

/** Nobody has chosen yet: details stay hidden, asking is allowed. The 2026-08-30 decision exactly. */
export const DEFAULT_CONTACT_MODE: ContactMode = "request";

export const CONTACT_MODE_LABELS: Record<ContactMode, string> = {
  direct: "Show my contact details",
  request: "Ask me to get in touch",
  school: "Only through the school",
};

export const CONTACT_MODE_HELP: Record<ContactMode, string> = {
  direct: "They see your account email, plus the phone and note below if you add them, and can let you know they'd like to talk.",
  request: "Your details stay hidden. They can ask you to get in touch, and you see their details with the request.",
  school: "They can't ask you in the app. They are pointed to the school's own contact instead.",
};

export type Role = "parent" | "teacher";

export const HOUR_MS = 60 * 60 * 1000;
/** After this long with no "we've connected", the recipient gets the fallback email. */
export const PING_EMAIL_AFTER_MS = 48 * HOUR_MS;
/** A ping stops showing (and can no longer be emailed) after this long. There is no archive. */
export const PING_ACTIVE_MS = 14 * 24 * HOUR_MS;
/** One new ping per (asker, recipient, student) per day, even after the last one ended. */
export const PING_REPEAT_MS = 24 * HOUR_MS;

export const CONTACT_NOTE_MAX = 120;
export const CONTACT_PHONE_MAX = 40;

export interface ContactSettingsFacts {
  parentsMode: ContactMode;
  teachersMode: ContactMode;
}

/**
 * How `askerRole` may reach the owner of `settings`: a per-person override wins over the default for
 * that role. A teacher's `parentsMode` governs parents; a parent's `teachersMode` governs teachers.
 */
export function effectiveMode(input: {
  settings: ContactSettingsFacts | null;
  override: ContactMode | null;
  askerRole: Role;
}): ContactMode {
  if (input.override) return input.override;
  if (!input.settings) return DEFAULT_CONTACT_MODE;
  return input.askerRole === "parent" ? input.settings.parentsMode : input.settings.teachersMode;
}

/** What the viewer sees for one counterpart. */
export type CounterpartView = "details" | "ask" | "school";

/**
 * `targetIsAdult` is mayUseContact(status) for the counterpart. Someone who is not a confirmed adult
 * is never shown and never pinged: the viewer is pointed to the school, the same as "school" mode,
 * so the page does not reveal WHY (which would itself say something about a person's age).
 */
export function counterpartView(mode: ContactMode, targetIsAdult: boolean): CounterpartView {
  if (!targetIsAdult || mode === "school") return "school";
  return mode === "direct" ? "details" : "ask";
}

export function mayPing(view: CounterpartView): boolean {
  return view !== "school";
}

export interface PingTimes {
  createdAt: Date;
  connectedAt: Date | null;
  emailedAt: Date | null;
}

/** Still showing in the app: not ended by the asker and not older than PING_ACTIVE_MS. */
export function isPingActive(p: PingTimes, now: Date): boolean {
  return !p.connectedAt && now.getTime() - p.createdAt.getTime() < PING_ACTIVE_MS;
}

/** Due for the one fallback email: active, never emailed, and at least 48 hours old. */
export function isPingDueForEmail(p: PingTimes, now: Date): boolean {
  return isPingActive(p, now) && !p.emailedAt && now.getTime() - p.createdAt.getTime() >= PING_EMAIL_AFTER_MS;
}

/** When the fallback email becomes due, for the asker's "we'll email them on ..." line. */
export function pingEmailDueAt(p: Pick<PingTimes, "createdAt">): Date {
  return new Date(p.createdAt.getTime() + PING_EMAIL_AFTER_MS);
}

/**
 * Why a new ping from this asker, to this recipient, about this student may NOT be sent, or null when
 * it may. `previous` is their pings for the same (asker, recipient, student), any age.
 */
export function pingBlockReason(previous: PingTimes[], now: Date): string | null {
  if (previous.some((p) => isPingActive(p, now))) {
    return "You've already asked. Mark it as connected once you've talked, or wait for it to expire.";
  }
  if (previous.some((p) => now.getTime() - p.createdAt.getTime() < PING_REPEAT_MS)) {
    return "You asked less than a day ago. Try again tomorrow.";
  }
  return null;
}

/** "a parent of Sam Lee" / "a teacher of Sam Lee", for the card and the email. */
export function roleOf(role: Role, studentName: string): string {
  return role === "parent" ? `a parent of ${studentName}` : `a teacher of ${studentName}`;
}

/** Trim, cap, and turn blanks into null for the two optional profile fields. */
export function cleanContactField(value: string | null | undefined, max: number): string | null {
  const v = (value ?? "").trim();
  return v ? v.slice(0, max) : null;
}
