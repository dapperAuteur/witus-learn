import { describe, expect, it } from "vitest";
import { HELP_ARTICLES } from "@/lib/help-articles";
import type { AuthoredCourse } from "../scripts/data/authored-course";
import { USING_LEARN_LEARNER_COURSE } from "../scripts/data/using-learn-learner-course";
import { USING_LEARN_PARENT_COURSE } from "../scripts/data/using-learn-parent-course";
import { USING_LEARN_BUILD_A_COURSE_COURSE } from "../scripts/data/using-learn-build-a-course-course";
import { USING_LEARN_RUN_YOUR_COURSE_COURSE } from "../scripts/data/using-learn-run-your-course-course";
import { USING_LEARN_COHORTS_COURSE } from "../scripts/data/using-learn-cohorts-course";
import { USING_LEARN_RUN_YOUR_SCHOOL_COURSE } from "../scripts/data/using-learn-run-your-school-course";

// The "Using Learn.WitUS" series teaches the help centre, so it has two duties no other course has:
// every article must be taught somewhere or waived on the record, and the quizzes must be measured
// HERE. The repo's quiz guards (scripts/check-quiz-balance.ts, scripts/check-longest-option.ts)
// only recognise a bank written as an object literal with a `questions` property; these banks are
// arrays handed to sectionQuiz()/finalQuiz(), so neither guard ever sees them. Rather than leave
// them unmeasured, this test runs the same two rules against the built courses, which is the data
// that actually seeds.

const COURSES: [string, AuthoredCourse][] = [
  ["learner", USING_LEARN_LEARNER_COURSE],
  ["parent", USING_LEARN_PARENT_COURSE],
  ["build-a-course", USING_LEARN_BUILD_A_COURSE_COURSE],
  ["run-your-course", USING_LEARN_RUN_YOUR_COURSE_COURSE],
  ["cohorts", USING_LEARN_COHORTS_COURSE],
  ["run-your-school", USING_LEARN_RUN_YOUR_SCHOOL_COURSE],
];

/** Articles deliberately taught by no path. Each needs a reason a reader can weigh. */
const WAIVED: Record<string, string> = {
  "keeping-courses-current": "a command-line runbook for the platform owner, not a screen anyone drives",
};

describe("Using Learn.WitUS series", () => {
  it("teaches every help article, or waives it on the record", () => {
    const taught = new Set<string>();
    for (const [, course] of COURSES) for (const l of course.lessons) if (!l.quiz) taught.add(l.slug);
    const missing = HELP_ARTICLES.map((a) => a.slug).filter((s) => !taught.has(s) && !WAIVED[s]);
    expect({ missing }).toEqual({ missing: [] });
    // A waiver for an article that no longer exists is dead weight that hides the next gap.
    const stale = Object.keys(WAIVED).filter((s) => !HELP_ARTICLES.some((a) => a.slug === s));
    expect({ stale }).toEqual({ stale: [] });
  });

  for (const [name, course] of COURSES) {
    describe(name, () => {
      const lessonSlugs = new Set(course.lessons.filter((l) => !l.quiz).map((l) => l.slug));
      const quizzes = course.lessons.filter((l) => l.quiz);

      it("gives every teaching section a quiz, at the approved sizes", () => {
        const sections = [...new Set(course.lessons.filter((l) => !l.quiz).map((l) => l.section))];
        const quizSections = new Set(quizzes.map((q) => q.section));
        expect(sections.filter((s) => !quizSections.has(s))).toEqual([]);
        // BAM, 2026-09-22: sections serve 5 of 10 or more; the final serves 10 of 25 or more.
        for (const q of quizzes) {
          const isFinal = q.slug === "final-quiz";
          expect({ slug: q.slug, pool: q.quiz!.questions.length >= (isFinal ? 25 : 10) }).toEqual({
            slug: q.slug,
            pool: true,
          });
          expect(q.quiz!.questionsPerAttempt).toBe(isFinal ? 10 : 5);
          expect(q.quiz!.passingScore).toBe(80);
        }
      });

      it("points every question at a lesson of this course, with an explanation", () => {
        for (const q of quizzes) {
          for (const [i, question] of q.quiz!.questions.entries()) {
            const where = `${q.slug}[${i}]`;
            expect({ where, source: lessonSlugs.has(question.sourceLessonSlug ?? "") }).toEqual({ where, source: true });
            expect({ where, explained: Boolean(question.explanation?.trim()) }).toEqual({ where, explained: true });
            expect({ where, options: question.options.length }).toEqual({ where, options: 4 });
            expect({ where, answer: question.correctIndex >= 0 && question.correctIndex < 4 }).toEqual({ where, answer: true });
          }
        }
      });

      it("cannot be beaten by always clicking the longest option", () => {
        // scripts/check-longest-option.ts: visible = options within max(8, 10%) of the longest;
        // a bank scores 1/visible when the answer is in that set. Limit max(0.60, 1/options + 0.25).
        for (const q of quizzes) {
          const questions = q.quiz!.questions;
          if (questions.length < 8) continue;
          let score = 0;
          for (const question of questions) {
            const lengths = question.options.map((o) => o.length);
            const longest = Math.max(...lengths);
            const margin = Math.max(8, longest * 0.1);
            const visible = lengths.filter((l) => l >= longest - margin).length;
            if (lengths[question.correctIndex] >= longest - margin) score += 1 / visible;
          }
          const expected = score / questions.length;
          expect({ slug: q.slug, beatable: expected > 0.6 }).toEqual({ slug: q.slug, beatable: false });
        }
      });

      it("does not park its answers on one option", () => {
        // scripts/check-quiz-balance.ts: over 60% at one index fails unless the bank shuffles.
        for (const q of quizzes) {
          const questions = q.quiz!.questions;
          if (questions.length < 8) continue;
          const counts = [0, 0, 0, 0];
          for (const question of questions) counts[question.correctIndex] += 1;
          const worst = Math.max(...counts) / questions.length;
          expect({ slug: q.slug, shuffles: q.quiz!.shuffleOptions === true, lopsided: worst > 0.6 }).toEqual({
            slug: q.slug,
            shuffles: true,
            lopsided: false,
          });
        }
      });
    });
  }
});
