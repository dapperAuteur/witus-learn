import "server-only";
import { and, asc, eq, inArray, isNotNull, isNull } from "drizzle-orm";
import { db } from "@/db/client";
import { lessonReviews, lessons, type LessonReview } from "@/db/schema";
import type { Verdict, VerdictNeedKind } from "@/lib/lesson-review";

// Reviewer sign-off reads and writes (plans/93 section 1). EVERY function takes a tenantId and
// filters on it, and is reached through ScopedDb, which supplies that id itself. The unique key on
// lesson_reviews includes tenant_id, so an upsert from one school can never land on another school's
// row even if a lesson id were guessed. Kept free of next/headers so the isolation suite can call
// them directly.

/**
 * Every current verdict on the named courses, in this tenant, or on one lesson of them when
 * `lessonId` is given (the lesson page reads just its own). Empty ids read nothing.
 */
export async function listLessonReviews(
  tenantId: string,
  courseIds: readonly string[],
  lessonId?: string,
): Promise<LessonReview[]> {
  const ids = [...new Set(courseIds)];
  if (ids.length === 0) return [];
  return db
    .select()
    .from(lessonReviews)
    .where(
      and(
        eq(lessonReviews.tenantId, tenantId),
        inArray(lessonReviews.courseId, ids),
        lessonId ? eq(lessonReviews.lessonId, lessonId) : undefined,
      ),
    );
}

export interface UpsertLessonReviewInput {
  tenantId: string;
  courseId: string;
  lessonId: string;
  needKind: VerdictNeedKind;
  auditorId: string | null;
  reviewerUserId: string;
  reviewerName: string;
  reviewerCredential: string;
  verdict: Verdict;
  correction: string | null;
  /** Computed on the server from the lesson row as stored, never taken from a request. */
  lessonHash: string;
}

/**
 * Record a verdict. One current verdict per (tenant, lesson, need kind): a new one REPLACES the old
 * one outright (reviewer, credit, correction, hash and date), and clears any "applied" stamp. There
 * is no history chain and no parent, by the no-inbox rule: a verdict is not an answer to anything.
 */
export async function upsertLessonReview(input: UpsertLessonReviewInput): Promise<LessonReview> {
  const now = new Date();
  const [row] = await db
    .insert(lessonReviews)
    .values({ ...input, decidedAt: now })
    .onConflictDoUpdate({
      target: [lessonReviews.tenantId, lessonReviews.lessonId, lessonReviews.needKind],
      set: {
        courseId: input.courseId,
        auditorId: input.auditorId,
        reviewerUserId: input.reviewerUserId,
        reviewerName: input.reviewerName,
        reviewerCredential: input.reviewerCredential,
        verdict: input.verdict,
        correction: input.correction,
        correctionAppliedAt: null,
        lessonHash: input.lessonHash,
        decidedAt: now,
      },
    })
    .returning();
  return row;
}

/**
 * "Applied as written": the owner says the lesson now reads as the reviewer's correction asked.
 * Stamps the time and RE-PINS the hash to the edited lesson, so the badge survives the edit that
 * applied the correction. Only an unstamped cleared-with-correction verdict can be stamped. Scoped by tenant,
 * course, lesson and kind, so an id from anywhere else updates nothing.
 */
export async function markCorrectionApplied(input: {
  tenantId: string;
  courseId: string;
  lessonId: string;
  needKind: VerdictNeedKind;
  lessonHash: string;
}): Promise<LessonReview | null> {
  const [row] = await db
    .update(lessonReviews)
    .set({ correctionAppliedAt: new Date(), lessonHash: input.lessonHash })
    .where(
      and(
        eq(lessonReviews.tenantId, input.tenantId),
        eq(lessonReviews.courseId, input.courseId),
        eq(lessonReviews.lessonId, input.lessonId),
        eq(lessonReviews.needKind, input.needKind),
        eq(lessonReviews.verdict, "cleared_with_correction"),
        // Once only. After the stamp, any further edit resets the verdict like any other edit and
        // needs a fresh review: the owner cannot keep re-pinning a reviewer's name onto new wording.
        isNull(lessonReviews.correctionAppliedAt),
      ),
    )
    .returning();
  return row ?? null;
}

/** A lesson that carries at least one release need, with the fields its hash is computed from. */
export interface ReviewableLesson {
  id: string;
  courseId: string;
  slug: string | null;
  title: string;
  isPublished: boolean;
  sortOrder: number;
  reviewNeeds: unknown;
  textContent: string | null;
  contentUrl: string | null;
  recallContent: unknown;
  exerciseContent: unknown;
  mapContent: unknown;
}

/**
 * Lessons with release needs in the named courses, in this tenant, in course order. Only marked
 * lessons are read (a handful of courses carry markers), which keeps the /teach chip and the review
 * list from pulling every lesson body in the brand.
 */
export async function listReviewableLessons(tenantId: string, courseIds: readonly string[]): Promise<ReviewableLesson[]> {
  const ids = [...new Set(courseIds)];
  if (ids.length === 0) return [];
  return db
    .select({
      id: lessons.id,
      courseId: lessons.courseId,
      slug: lessons.slug,
      title: lessons.title,
      isPublished: lessons.isPublished,
      sortOrder: lessons.sortOrder,
      reviewNeeds: lessons.reviewNeeds,
      textContent: lessons.textContent,
      contentUrl: lessons.contentUrl,
      recallContent: lessons.recallContent,
      exerciseContent: lessons.exerciseContent,
      mapContent: lessons.mapContent,
    })
    .from(lessons)
    .where(and(eq(lessons.tenantId, tenantId), inArray(lessons.courseId, ids), isNotNull(lessons.reviewNeeds)))
    .orderBy(asc(lessons.courseId), asc(lessons.sortOrder));
}
