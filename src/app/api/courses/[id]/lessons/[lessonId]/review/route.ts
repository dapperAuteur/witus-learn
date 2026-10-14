import { z } from "zod";
import { apiContext, errorJson, json } from "@/lib/api";
import { getLessonById } from "@/db/queries/authoring";
import { isPlatformOwner } from "@/lib/session";
import {
  canRecordVerdict,
  effectiveReviewState,
  hasReviewerCredential,
  normalizeCorrection,
  OWNER_DEMONSTRATION_CREDENTIAL,
  readReviewNeeds,
  verdictKindsFor,
  CORRECTION_MAX,
} from "@/lib/lesson-review";
import { lessonReviewHash } from "@/lib/lesson-review-hash";

type Params = { params: Promise<{ id: string; lessonId: string }> };

const Body = z.object({
  needKind: z.enum(["qr", "p"]),
  verdict: z.enum(["cleared", "cleared_with_correction", "not_cleared"]),
  // Length is checked after trimming by normalizeCorrection; this cap only stops an absurd body.
  correction: z.string().max(CORRECTION_MAX * 4).nullable().optional(),
});

// POST /api/courses/[id]/lessons/[lessonId]/review — record a verdict on one of a lesson's release
// needs (reviewer sign-off, plans/93 section 1).
//
// Who: an ACCEPTED auditor of this course whose grant carries an inviter-set name and credential
// (QR and P needs), or the platform owner (P needs only, his own demonstration). The course's own
// instructor records nothing. The decision is canRecordVerdict in src/lib/lesson-review.ts.
//
// Tenant: from the host via the scoped DAL. The course 404s across tenants, the lesson 404s unless
// it belongs to THIS course, and the grant is looked up for this tenant and course only.
//
// The hash the verdict is pinned to is computed HERE, from the lesson row as stored. Nothing the
// client sends can choose it.
//
// No inbox (CLAUDE.md): the correction is content attached to this lesson and need. Nobody is
// notified, nothing is emailed, and a later verdict replaces this one rather than replying to it.
export async function POST(req: Request, { params }: Params) {
  const { id, lessonId } = await params;
  const { sdb, session } = await apiContext();
  if (!session) return errorJson("Please sign in first.", 401);

  const course = await sdb.getCourseById(id);
  if (!course) return errorJson("Not found", 404);
  const lesson = await getLessonById(sdb.tenantId, lessonId);
  if (!lesson || lesson.courseId !== course.id) return errorJson("Not found", 404);

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return errorJson("Invalid input", 400);
  const { needKind, verdict } = parsed.data;

  if (!verdictKindsFor(readReviewNeeds(lesson.reviewNeeds)).includes(needKind)) {
    return errorJson("This lesson has no release need of that kind.", 400);
  }
  const correction = normalizeCorrection(verdict, parsed.data.correction);
  if (!correction.ok) return errorJson(correction.error, 400);

  const isOwner = await isPlatformOwner(session.user.id);
  // The owner never clears a QR need, so his grant (if he invited himself) is not even looked up.
  const grant = isOwner
    ? null
    : await sdb.getViewerAuditorGrant({
        courseId: course.id,
        userId: session.user.id,
        email: session.user.email ?? null,
      });
  // A reviewer reads only published lessons; a verdict on a draft they cannot open means nothing.
  if (!isOwner && !lesson.isPublished) return errorJson("Not found", 404);

  const allowed = canRecordVerdict({
    isAuditor: Boolean(grant),
    hasCredential: grant ? hasReviewerCredential(grant) : false,
    isOwner,
    isInstructor: course.instructorId === session.user.id,
    kind: needKind,
  });
  if (!allowed) {
    if (grant && !hasReviewerCredential(grant)) {
      return errorJson(
        "The person who invited you has not added your name and credential yet, so a verdict could not be credited. Ask them to add it on the course's review panel.",
        403,
      );
    }
    if (isOwner) return errorJson("A qualified reviewer's need is cleared by an invited reviewer, not by the platform owner.", 403);
    return errorJson("Only an invited reviewer of this course can record a verdict.", 403);
  }

  const reviewerName = grant ? grant.reviewerName!.trim() : session.user.name?.trim() || "The platform owner";
  const reviewerCredential = grant ? grant.reviewerCredential!.trim() : OWNER_DEMONSTRATION_CREDENTIAL;
  const lessonHash = lessonReviewHash(lesson);

  const row = await sdb.upsertLessonReview({
    courseId: course.id,
    lessonId: lesson.id,
    needKind,
    auditorId: grant?.id ?? null,
    reviewerUserId: session.user.id,
    reviewerName,
    reviewerCredential,
    verdict,
    correction: correction.correction,
    lessonHash,
  });

  return json({
    review: {
      needKind: row.needKind,
      verdict: row.verdict,
      reviewerName: row.reviewerName,
      reviewerCredential: row.reviewerCredential,
      correction: row.correction,
      decidedAt: row.decidedAt,
    },
    state: effectiveReviewState(row, lessonHash),
  });
}
