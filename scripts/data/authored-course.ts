// Shared shape for an authored course delivered as a committed data module.
// Any course (languages, FAA, cyber, Ed.L.D.) authored against the content/writing
// standard can be expressed this way and fed to the re-seedable seeder, which
// upserts lessons by (courseId, slug) so IDs — and thus embeddings/progress — survive.

import type { QuizContent } from "../../src/lib/quiz";

export interface AuthoredLesson {
  slug: string;
  title: string;
  /** Markdown body (tables + examples + a production/conversation challenge). */
  body?: string;
  /** When set, this lesson is a QUIZ. Every question must carry `explanation` +
   *  `sourceLessonSlug` (the lesson that teaches the answer) — the standard. */
  quiz?: QuizContent;
}

export interface AuthoredCourse {
  title: string;
  description: string;
  lessons: AuthoredLesson[];
}
