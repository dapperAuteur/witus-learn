import type { Course, Lesson } from "@/db/schema";

// Pure lesson-gating logic (no next/headers) so it can be unit-tested. Rule:
//   editor → everything · unpublished → locked · free-preview → open ·
//   free course → open (sequential: prior lessons must be complete) ·
//   paid course → locked until enrollment (Phase 5).

export type LessonLockReason = "draft" | "locked" | "sequential";

export interface LessonAccessCtx {
  isEditor: boolean;
  completedLessonIds: Set<string>;
  /** Lesson ids in display order, for sequential gating. */
  orderedLessonIds: string[];
}

export function isFreeCourse(course: Pick<Course, "priceType" | "price">): boolean {
  return course.priceType === "free" || Number(course.price) === 0;
}

export function lessonAccess(
  course: Pick<Course, "isPublished" | "isSequential" | "priceType" | "price">,
  lesson: Pick<Lesson, "id" | "isPublished" | "isFreePreview">,
  ctx: LessonAccessCtx,
): { open: boolean; reason?: LessonLockReason } {
  if (ctx.isEditor) return { open: true };
  if (!course.isPublished || !lesson.isPublished) return { open: false, reason: "draft" };
  if (lesson.isFreePreview) return { open: true };
  if (!isFreeCourse(course)) return { open: false, reason: "locked" };

  if (course.isSequential) {
    const idx = ctx.orderedLessonIds.indexOf(lesson.id);
    const prior = idx > 0 ? ctx.orderedLessonIds.slice(0, idx) : [];
    if (!prior.every((id) => ctx.completedLessonIds.has(id))) {
      return { open: false, reason: "sequential" };
    }
  }
  return { open: true };
}
