// Course offers, as pure rules (BAM, 2026-11-10: "request a course should allow teacher to choose from
// list of existing courses also, and approve assigned courses"). When a school's admin hands a course
// to a teacher (Admin → Users, or a course's settings), it is an OFFER: the course's instructor does not
// change until the teacher presses Accept on /teach. Decline leaves the instructor as it was and tells the
// admin. An offer that nobody answers expires after OFFER_TTL_DAYS. The platform owner's picker on a
// course's settings stays immediate, and so does assigning a course to yourself (there is nobody else to
// ask). The database half is src/db/queries/course-offers.ts.

import { z } from "zod";

export const OFFER_TTL_DAYS = 14;
export const OFFER_NOTE_MAX = 1000;

export type CourseOfferStatus = "offered" | "accepted" | "declined" | "withdrawn" | "expired";

export const OFFER_STATUS_LABELS: Record<CourseOfferStatus, string> = {
  offered: "Waiting for the teacher",
  accepted: "Accepted",
  declined: "Declined",
  withdrawn: "Withdrawn",
  expired: "Expired",
};

/** When an offer made at `now` stops being answerable. */
export function offerExpiresAt(now: Date): Date {
  return new Date(now.getTime() + OFFER_TTL_DAYS * 24 * 60 * 60 * 1000);
}

/** What a teacher sends to answer an offer. */
export const OfferResponseInput = z.object({
  action: z.enum(["accept", "decline"]),
  note: z.string().trim().max(OFFER_NOTE_MAX, `Keep the note under ${OFFER_NOTE_MAX} characters.`).optional(),
});
export type OfferResponseInput = z.infer<typeof OfferResponseInput>;

export const OFFER_NOT_YOURS = "This offer was made to another teacher.";
export const OFFER_ALREADY_ANSWERED = "This offer was already answered or withdrawn.";
export const OFFER_EXPIRED = `This offer expired (offers last ${OFFER_TTL_DAYS} days). Ask the school's admin to offer it again.`;
export const OFFER_NO_LONGER_TEACHER = "You are no longer a teacher of this school, so you can't take this course. Ask the school's admin.";

/**
 * May this person answer this offer now? Only the teacher it was made to, only while it is open and
 * unexpired. Accepting also needs the teacher to still teach on the school; declining never does.
 */
export function decideOfferResponse(input: {
  offer: { status: string; teacherUserId: string; expiresAt: Date };
  actorUserId: string;
  action: "accept" | "decline";
  teacherCanTeach: boolean;
  now: Date;
}): { ok: true } | { ok: false; status: 403 | 409 | 410; error: string } {
  if (input.offer.teacherUserId !== input.actorUserId) return { ok: false, status: 403, error: OFFER_NOT_YOURS };
  if (input.offer.status !== "offered") return { ok: false, status: 409, error: OFFER_ALREADY_ANSWERED };
  if (input.offer.expiresAt.getTime() <= input.now.getTime()) return { ok: false, status: 410, error: OFFER_EXPIRED };
  if (input.action === "accept" && !input.teacherCanTeach) return { ok: false, status: 409, error: OFFER_NO_LONGER_TEACHER };
  return { ok: true };
}

/**
 * Is a school admin's assignment an offer, or immediate? Immediate for the platform owner on a course's
 * settings page (BAM is the owner), and for anyone handing the course to themselves. Everything else a
 * school admin does, and the owner's assignments from Admin → Users, is an offer the teacher accepts.
 */
export function assignmentIsOffer(input: { actorUserId: string; targetUserId: string; actorIsOwner: boolean; source: "course-settings" | "admin-users" }): boolean {
  if (input.actorUserId === input.targetUserId) return false;
  if (input.actorIsOwner && input.source === "course-settings") return false;
  return true;
}
