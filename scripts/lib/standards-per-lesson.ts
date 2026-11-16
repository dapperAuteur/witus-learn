import type { CourseClaim } from "../../src/lib/standards/types";

/**
 * The per-lesson half of course-creation rubric v1.7 gate D6 ("standards, numbered and per lesson":
 * each claim naming the lessons that teach it), as pure functions for scripts/check-standards-coverage.ts
 * and tests/standards-per-lesson.test.ts.
 *
 * A course is mapped PER LESSON when every claim it is on (that some standard actually references)
 * names, in `lessonSlugs[course]`, at least one lesson of that course. It is mapped AT COURSE LEVEL
 * when none does, and PARTIAL in between. The prose `lessons` field on a claim does not count: it is
 * pooled across the claim's courses and cannot be checked against a lesson.
 */

export type PerLessonStatus = "per-lesson" | "partial" | "course-level";

export interface PerLessonReport {
  slug: string;
  status: PerLessonStatus;
  claims: number;
  claimsWithLessons: number;
}

/** Where a course stands, from the claims that back at least one standard. */
export function perLessonStatus(slug: string, claims: readonly CourseClaim[]): PerLessonReport {
  const mine = claims.filter((c) => c.courseSlugs.includes(slug));
  const withLessons = mine.filter((c) => (c.lessonSlugs?.[slug] ?? []).length > 0).length;
  const status: PerLessonStatus =
    mine.length > 0 && withLessons === mine.length ? "per-lesson" : withLessons > 0 ? "partial" : "course-level";
  return { slug, status, claims: mine.length, claimsWithLessons: withLessons };
}

/**
 * Data errors in `lessonSlugs`, on every claim regardless of baseline: a key that is not one of the
 * claim's courses, or a slug that is not a lesson of that course. `lessonsOf` holds the lesson slugs of
 * every course readable on this machine; a course it lacks (a gitignored module) is not checked.
 */
export function lessonSlugErrors(
  claims: readonly CourseClaim[],
  lessonsOf: ReadonlyMap<string, ReadonlySet<string>>,
): string[] {
  const errors: string[] = [];
  for (const c of claims) {
    for (const [course, slugs] of Object.entries(c.lessonSlugs ?? {})) {
      if (!c.courseSlugs.includes(course)) {
        errors.push(`${c.id}: lessonSlugs names "${course}", which is not in this claim's courseSlugs`);
        continue;
      }
      const known = lessonsOf.get(course);
      if (!known) continue;
      for (const s of slugs) {
        if (!known.has(s)) errors.push(`${c.id}: "${course}" has no lesson with slug "${s}"`);
      }
    }
  }
  return errors;
}
