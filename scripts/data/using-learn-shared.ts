// Shared builders for the "Using Learn.WitUS" series (series code USING): one course per role,
// every lesson made from the help article it teaches.
//
// Research tier 1 (product documentation). Brief:
// plans/future-courses/using-learn/2026-09-21-using-learn-paths-brief.md, approved by BAM
// 2026-09-22 (rubric v1.3 gate A8), with these decisions: Learn only; a Cohort teacher path added
// to the four in the brief; series "Using Learn.WitUS" / USING; public and free, BAM vets each one
// (E1); flagship plus the Acme demo school; captioned clips embedded later.
//
// WHY THE LESSON TEXT IS NOT COPIED HERE. Each lesson's body is read from
// src/lib/help-articles.ts at seed time. A copy would drift from the page it teaches the first
// time BAM edits an article, and nobody would notice until a learner followed a step that no
// longer exists. Re-seeding republishes the current article text, and `helpLesson` throws if a
// slug disappears, so a deleted article breaks the seed instead of silently emptying a lesson.
//
// ASSESSMENT SIZE (rubric D2 exception, BAM 2026-09-22): section quizzes serve 5 from a pool of
// 10 or more; the final serves 10 from a pool of 25 and passes at 80. The full spec would want
// 40 to 100 questions per section, which on UI steps is the trivia the density rule exists to
// prevent. Every question still carries `sourceLessonSlug`, and every teaching section has a quiz.
import type { AuthoredLesson } from "./authored-course";
import type { QuizQuestion } from "../../src/lib/quiz";
import { HELP_ARTICLES } from "../../src/lib/help-articles";

export const USING_SERIES = {
  slug: "using-learn",
  title: "Using Learn.WitUS",
  code: "USING",
  category: "Using Learn.WitUS",
} as const;

const ARTICLE = new Map(HELP_ARTICLES.map((a) => [a.slug, a]));

/** Every help article slug, for the coverage guard in tests/using-learn-coverage.test.ts. */
export const HELP_SLUGS: string[] = HELP_ARTICLES.map((a) => a.slug);

/**
 * One lesson, built from one help article.
 *
 * `tryIt` is the only authored prose: a short instruction that sends the learner to the live
 * screen the article describes. Keep it to what the article already says. It must not promise a
 * control the app does not have.
 */
export function helpLesson(slug: string, section: string, tryIt: string): AuthoredLesson {
  const article = ARTICLE.get(slug);
  if (!article) {
    throw new Error(
      `using-learn: help article "${slug}" no longer exists in src/lib/help-articles.ts. ` +
        "Update the path that lists it (and tests/using-learn-coverage.test.ts).",
    );
  }
  return {
    slug,
    title: article.title,
    section,
    body: [
      article.body.trim(),
      "## Try it",
      tryIt.trim(),
      "## Sources",
      `Learn.WitUS. (2026). *${article.title}* [Help article]. https://learn.witus.online/help/${slug}`,
    ].join("\n\n"),
  };
}

/** A section's quiz: serves 5 of its pool, shuffled, passes at 80. */
export function sectionQuiz(section: string, n: number, questions: QuizQuestion[]): AuthoredLesson {
  return {
    slug: `section-${n}-quiz`,
    title: `Section ${n} quiz`,
    section,
    quiz: { questions, passingScore: 80, questionsPerAttempt: 5, shuffleOptions: true },
  };
}

/** The course's final: serves 10 of its pool, shuffled, passes at 80. Earns the certificate. */
export function finalQuiz(section: string, questions: QuizQuestion[]): AuthoredLesson {
  return {
    slug: "final-quiz",
    title: "Final quiz",
    section,
    quiz: { questions, passingScore: 80, questionsPerAttempt: 10, shuffleOptions: true },
  };
}
