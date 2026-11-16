import type { AuthoredCourse } from "../data/authored-course";
import { briefDate, objectiveProblems } from "../../src/lib/lesson-objectives";

/**
 * The rules behind `pnpm check:objectives` (course-creation rubric v1.7, gate D10), as pure functions
 * so tests/objectives.test.ts can feed them courses. scripts/check-objectives.ts loads the catalog.
 */

/** Rubric v1.7 was written on this day; a course briefed on or after it carries objectives. */
export const OBJECTIVES_CUTOFF = "2026-11-16";

export interface ObjectivesReport {
  slug: string;
  /** True when the gate applies: not excused by the baseline, or briefed on or after the cutoff. */
  inScope: boolean;
  lessons: number;
  withObjectives: number;
  withCriteria: number;
  /** Every lesson has one to three objectives and at least one success criterion. */
  complete: boolean;
  /** "lesson-slug: what is wrong". Malformed fields count on every course; missing ones only in scope. */
  problems: string[];
}

export function evaluateObjectives(input: {
  slug: string;
  course: AuthoredCourse;
  /** The course file's source, for its `Brief:` date. Empty when unknown. */
  source: string;
  excused: ReadonlySet<string>;
  /** Every standard code this course claims (any jurisdiction); an objective's code must be one. */
  claimedCodes: ReadonlySet<string>;
}): ObjectivesReport {
  const { slug, course, source, excused, claimedCodes } = input;
  const dated = briefDate(source);
  const inScope = !excused.has(slug) || (dated !== null && dated >= OBJECTIVES_CUTOFF);
  const problems: string[] = [];
  let withObjectives = 0;
  let withCriteria = 0;
  let complete = course.lessons.length > 0;
  for (const l of course.lessons) {
    if ((l.objectives ?? []).some((o) => o.text.trim())) withObjectives++;
    if ((l.successCriteria ?? []).some((s) => s.trim())) withCriteria++;
    if (objectiveProblems(l, true).length > 0) complete = false;
    for (const p of objectiveProblems(l, inScope)) problems.push(`${l.slug}: ${p}`);
    for (const o of l.objectives ?? []) {
      const code = o.standardCode?.trim();
      if (code && !claimedCodes.has(code)) {
        problems.push(`${l.slug}: objective names standard "${code}", which this course does not claim (pnpm standards:for ${slug})`);
      }
    }
  }
  return { slug, inScope, lessons: course.lessons.length, withObjectives, withCriteria, complete, problems };
}
