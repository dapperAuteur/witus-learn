// Course requests, as pure rules (BAM, 2026-11-10: "teachers should be able to submit or request
// courses"). A teacher of a school asks for a course from /teach; the school's admin or the platform
// owner approves (a draft course is created with that teacher as its instructor) or declines with a
// note. The database half is src/db/queries/course-requests.ts; the routes are
// POST /api/teach/course-requests and POST /api/admin/course-requests/[id].

import { z } from "zod";
import type { CourseRequestStatus } from "@/db/schema";

export const COURSE_REQUEST_LIMITS = { title: 200, description: 2000, reason: 2000, briefUrl: 500, note: 1000 } as const;

/** What a teacher sends. Trimmed; an empty optional link becomes null. */
export const CourseRequestInput = z.object({
  title: z.string().trim().min(3, "Give the course a title (at least 3 characters).").max(COURSE_REQUEST_LIMITS.title),
  description: z.string().trim().min(10, "Describe the course in a sentence or two.").max(COURSE_REQUEST_LIMITS.description),
  reason: z.string().trim().min(10, "Say why this course, in a sentence or two.").max(COURSE_REQUEST_LIMITS.reason),
  briefUrl: z
    .string()
    .trim()
    .max(COURSE_REQUEST_LIMITS.briefUrl)
    .transform((s) => (s === "" ? null : s))
    .pipe(z.url("The brief link must be a full URL (https://...).").nullable())
    .optional()
    .transform((v) => v ?? null),
});
export type CourseRequestInput = z.infer<typeof CourseRequestInput>;

/** What an admin sends on a decision. */
export const CourseRequestDecisionInput = z.object({
  action: z.enum(["approve", "decline"]),
  note: z.string().trim().max(COURSE_REQUEST_LIMITS.note).optional(),
});
export type CourseRequestDecisionInput = z.infer<typeof CourseRequestDecisionInput>;

export const REQUEST_STATUS_LABELS: Record<CourseRequestStatus, string> = {
  requested: "Waiting for the school",
  approved: "Approved: the draft course is yours",
  declined: "Declined",
};

export const COURSE_REQUEST_FORBIDDEN = "Only a teacher of this school can request a course here.";
export const COURSE_REQUEST_DECIDE_FORBIDDEN = "Only the platform owner or this school's admin can decide a course request.";
export const COURSE_REQUEST_ALREADY_DECIDED = "This request was already decided.";
export const COURSE_REQUEST_NOTE_REQUIRED = "Tell the teacher why, in a sentence or two (at least 10 characters).";
export const COURSE_REQUEST_NO_LONGER_TEACHER = "That person is no longer a teacher of this school, so a course can't be created for them. Decline the request, or make them a teacher again first.";

export const MIN_DECLINE_NOTE = 10;

/**
 * May this decision be applied? A request is decided once; a decline needs a note the teacher can act
 * on; an approval creates a course, so the requester must still be able to teach on the school.
 */
export function decideCourseRequestAction(input: {
  actor: { isOwner: boolean; isSchoolAdmin: boolean };
  request: { status: string };
  action: "approve" | "decline";
  note: string | null;
  requesterCanTeach: boolean;
}): { ok: true } | { ok: false; status: 403 | 409 | 400; error: string } {
  if (!input.actor.isOwner && !input.actor.isSchoolAdmin) {
    return { ok: false, status: 403, error: COURSE_REQUEST_DECIDE_FORBIDDEN };
  }
  if (input.request.status !== "requested") return { ok: false, status: 409, error: COURSE_REQUEST_ALREADY_DECIDED };
  if (input.action === "decline" && (input.note ?? "").length < MIN_DECLINE_NOTE) {
    return { ok: false, status: 400, error: COURSE_REQUEST_NOTE_REQUIRED };
  }
  if (input.action === "approve" && !input.requesterCanTeach) {
    return { ok: false, status: 409, error: COURSE_REQUEST_NO_LONGER_TEACHER };
  }
  return { ok: true };
}
