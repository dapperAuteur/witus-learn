import type { Course, Lesson } from "@/db/schema";
import { isUnvetted } from "@/lib/vetting";

// Pure lesson-gating logic (no next/headers) so it can be unit-tested. Rule:
//   editor → everything · unpublished → locked · unvetted → locked (before free-preview,
//   so a preview lesson can't leak an unreviewed course) · free-preview → open ·
//   free course → open (sequential: prior lessons must be complete) ·
//   paid course → locked until enrollment (Phase 5).

export type LessonLockReason = "draft" | "unvetted" | "locked" | "sequential";

export interface LessonAccessCtx {
  isEditor: boolean;
  isEnrolled: boolean;
  completedLessonIds: Set<string>;
  /** Lesson ids in display order, for sequential gating. */
  orderedLessonIds: string[];
}

export function isFreeCourse(course: Pick<Course, "priceType" | "price">): boolean {
  return course.priceType === "free" || Number(course.price) === 0;
}

export function lessonAccess(
  course: Pick<Course, "isPublished" | "isSequential" | "priceType" | "price" | "vettedAt">,
  lesson: Pick<Lesson, "id" | "isPublished" | "isFreePreview">,
  ctx: LessonAccessCtx,
): { open: boolean; reason?: LessonLockReason } {
  if (ctx.isEditor) return { open: true };
  if (!course.isPublished || !lesson.isPublished) return { open: false, reason: "draft" };
  // An UNVETTED course ("Coming soon") has no open lessons for anyone but an editor or an
  // existing enrollee, checked before free-preview so a preview lesson can't leak it either.
  // The landing page already withholds the whole lesson list (see loadCourseView); this is the
  // second line of defence, and the one the quiz/progress API routes get for free.
  if (isUnvetted(course) && !ctx.isEnrolled) return { open: false, reason: "unvetted" };
  if (lesson.isFreePreview) return { open: true };
  // Paid course: locked until enrolled (free enroll in Phase 5a, Stripe in 5b).
  if (!isFreeCourse(course) && !ctx.isEnrolled) return { open: false, reason: "locked" };

  if (course.isSequential) {
    const idx = ctx.orderedLessonIds.indexOf(lesson.id);
    const prior = idx > 0 ? ctx.orderedLessonIds.slice(0, idx) : [];
    if (!prior.every((id) => ctx.completedLessonIds.has(id))) {
      return { open: false, reason: "sequential" };
    }
  }
  return { open: true };
}
