// The "teachers must be adults" rule, as pure predicates so it is testable without a database
// (the same split as src/lib/assessment-fit.ts). The queries that gather the facts live in
// src/db/queries/teacher-age.ts; every gate that asks "may this person teach?" or "may this
// person use parent/teacher contact?" calls one of the functions below with those facts.
//
// How "adult" is decided, honestly: the platform has no ID check. A person is an adult here when
// they have ATTESTED "I am 18 or older" AND nothing structural says otherwise. The structural
// signals win over any attestation, because each one is a fact the platform itself recorded:
//   - a managed child profile (created by a parent, no login of its own),
//   - an avatar-PIN login (the kid-login flow, for children without email),
//   - a guardians row naming them as someone's STUDENT.
// The platform owner's switch (default ON) makes the rule apply to teaching; the owner can grant a
// per-person exception, which lets that person teach. An exception never makes anyone contactable:
// parent/teacher contact always requires a real "adult" status, because "no student is ever a
// party" is the load-bearing rule of that feature (plans/app-improvements/messaging-parents-teachers.md).

export interface AdultFacts {
  /** When they ticked "I am 18 or older", or null if they never have. */
  attestedAt: Date | null;
  isManagedChild: boolean;
  isAvatarPinLogin: boolean;
  isLinkedStudent: boolean;
}

export type AdultStatus = "adult" | "unattested" | "minor_signal";

export type MinorSignal = "managed_child" | "avatar_pin_login" | "linked_student";

export function minorSignals(f: AdultFacts): MinorSignal[] {
  const out: MinorSignal[] = [];
  if (f.isManagedChild) out.push("managed_child");
  if (f.isAvatarPinLogin) out.push("avatar_pin_login");
  if (f.isLinkedStudent) out.push("linked_student");
  return out;
}

export function adultStatus(f: AdultFacts): AdultStatus {
  if (minorSignals(f).length > 0) return "minor_signal";
  return f.attestedAt ? "adult" : "unattested";
}

/** May this person attest at all? Never for an account the platform already knows is a child's. */
export function mayAttestAdult(f: AdultFacts): boolean {
  return minorSignals(f).length === 0;
}

export interface TeachingFacts {
  status: AdultStatus;
  /** The platform owner's switch. Absent setting means ON. */
  ruleOn: boolean;
  /** An active owner-granted exception for this person. */
  hasException: boolean;
}

/** Passes the age half of teaching (creating a class, being assigned to teach one). The ROLE half
 *  (instructor / brand_admin for creating) is checked separately by the caller. */
export function passesTeacherAgeRule(t: TeachingFacts): boolean {
  if (!t.ruleOn) return true;
  if (t.hasException) return true;
  return t.status === "adult";
}

/** May this person send or receive a parent/teacher contact ping, or have their contact details
 *  shown? Only a real adult: an owner exception deliberately does NOT count here. */
export function mayUseContact(status: AdultStatus): boolean {
  return status === "adult";
}

export const MINOR_SIGNAL_LABELS: Record<MinorSignal, string> = {
  managed_child: "a child profile managed by a parent (no login of its own)",
  avatar_pin_login: "signs in with the kid login (class code, avatar and PIN)",
  linked_student: "linked to a parent or guardian as their student",
};

/** Why someone cannot teach yet, in words for THAT person. Null when they can. */
export function teachBlockReason(t: TeachingFacts): string | null {
  if (passesTeacherAgeRule(t)) return null;
  if (t.status === "unattested") {
    return "Teachers on this platform must be adults. Confirm you are 18 or older to continue.";
  }
  return "This account can't teach classes, because it belongs to a student. Ask your school if you think that is wrong.";
}

// ── The owner's exception flow ────────────────────────────────────────────────
//
// Decided 2026-09-20: the platform owner may exempt an individual from the rule, behind several
// warnings and steps. The steps are enforced on the SERVER by exceptionGrantError, so skipping the
// UI (a hand-built request) cannot skip a warning. Each acknowledgement below is shown as its own
// checkbox, the person's email must be typed back, and a reason is required and kept.

export const EXCEPTION_ACKS = {
  teachUnverified:
    "I understand this lets this person create and teach classes without being confirmed as an adult.",
  checkedOutside: "I have checked, outside this app, who this person is and why they need to teach.",
  noContact:
    "I understand families still cannot contact this person through the app, and that this exception is recorded with my account and my reason.",
} as const;

/** The extra acknowledgement shown, and required, only when the account carries a minor signal. */
export const MINOR_SIGNAL_ACK =
  "This account shows signs of belonging to a child (listed above). I am granting the exception anyway.";

export type ExceptionAckKey = keyof typeof EXCEPTION_ACKS;

export const EXCEPTION_REASON_MIN = 20;
export const EXCEPTION_REASON_MAX = 1000;

export interface ExceptionGrantInput {
  reason: string;
  confirmEmail: string;
  acks: Partial<Record<ExceptionAckKey, boolean>>;
  minorSignalAck?: boolean;
}

export interface ExceptionTarget {
  email: string;
  status: AdultStatus;
  signals: MinorSignal[];
  hasException: boolean;
}

/** Null when the grant may proceed; otherwise the reason it may not, in words for the owner. */
export function exceptionGrantError(input: ExceptionGrantInput, target: ExceptionTarget): string | null {
  if (target.hasException) return "This person already has an active exception.";
  if (target.status === "adult") return "This person has already confirmed they are an adult; no exception is needed.";
  for (const key of Object.keys(EXCEPTION_ACKS) as ExceptionAckKey[]) {
    if (input.acks[key] !== true) return "Tick every acknowledgement before granting an exception.";
  }
  if (target.signals.length > 0 && input.minorSignalAck !== true) {
    return "This account shows signs of belonging to a child. Tick the extra acknowledgement to continue.";
  }
  const reason = input.reason.trim();
  if (reason.length < EXCEPTION_REASON_MIN) {
    return `Write a reason of at least ${EXCEPTION_REASON_MIN} characters. It is kept with the exception.`;
  }
  if (reason.length > EXCEPTION_REASON_MAX) return `Keep the reason under ${EXCEPTION_REASON_MAX} characters.`;
  if (input.confirmEmail.trim().toLowerCase() !== target.email.trim().toLowerCase()) {
    return "The email you typed does not match this person's account email.";
  }
  return null;
}

/** Turning the rule OFF is the bigger decision (it lets every unconfirmed teacher create classes),
 *  so it takes typing this phrase. Turning it back on takes nothing. */
export const RULE_OFF_PHRASE = "TURN OFF";
