import { createHash } from "node:crypto";
import { materialLessonText, type MaterialLesson } from "@/lib/lesson-review";

/**
 * sha256 (hex) of a lesson's material text (src/lib/lesson-review.ts). Always computed on the
 * SERVER from the row as stored, never accepted from a client: a verdict pinned to a hash the
 * browser supplied would let anyone keep a badge on text that changed.
 *
 * Its own file because node:crypto must not reach a client bundle, and lesson-review.ts is imported
 * by client components for its labels.
 */
export function lessonReviewHash(lesson: MaterialLesson): string {
  return createHash("sha256").update(materialLessonText(lesson)).digest("hex");
}
