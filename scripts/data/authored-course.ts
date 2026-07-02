// Shared shape for an authored course delivered as a committed data module.
// Any course (languages, FAA, cyber, Ed.L.D.) authored against the content/writing
// standard can be expressed this way and fed to the re-seedable seeder, which
// upserts lessons by (courseId, slug) so IDs — and thus embeddings/progress — survive.

import type { QuizContent } from "../../src/lib/quiz";
import type { ExerciseContent } from "../../src/lib/exercise";

export interface AuthoredLesson {
  slug: string;
  title: string;
  /** Section/module this lesson belongs to (e.g. "Chapter 1: …"). Lessons sharing a
   *  section are grouped into one course module — collapsible on the course page, and
   *  the section's quiz covers just that section. Lessons with no section stay flat. */
  section?: string;
  /** Markdown body (tables + examples + a production/conversation challenge). */
  body?: string;
  /** When set, this lesson is a QUIZ. Every question must carry `explanation` +
   *  `sourceLessonSlug` (the lesson that teaches the answer) — the standard. */
  quiz?: QuizContent;
  /** When set, this lesson is an EXERCISE (fill-in production drill); body is intro context. */
  exercise?: ExerciseContent;
  /** When set, this lesson is a MAP (markers/lines/polygons); body becomes context text. */
  mapContent?: unknown;
  /** Active-recall cards shown in the lesson (click-to-reveal + self-grade). Use these
   *  instead of spelling a recall answer out in the body — the answer stays hidden until
   *  the learner reveals it. Renders via <RecallPlayer>; grades feed the teacher's
   *  recall-accuracy panel. Pairs with a `body` (a recall lesson is still a text lesson). */
  recallContent?: { prompt: string; answer: string }[];
}

export interface AuthoredCourse {
  title: string;
  description: string;
  lessons: AuthoredLesson[];
}
