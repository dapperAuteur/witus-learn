// Lesson objectives and success criteria (course-creation rubric v1.7, gate D10, 2026-11-16).
//
// The IMS Director of Education's review of the Speedway course asked for explicit objectives per
// lesson, "which will pair naturally with specific standards". So a lesson may now say what a learner
// can do after it (one to three objectives, each optionally naming the standard code it serves) and
// how they will know (the success criteria its quiz or project checks).
//
// WHERE IT LIVES. Authored on the lesson in scripts/data (`AuthoredLesson.objectives` and
// `.successCriteria`), written by the seeder to the nullable `lessons.objectives` jsonb column
// (migration 0085) as one `LessonObjectives` value, and drawn by the lesson page above the lesson as
// "After this lesson you can". A column rather than a block in the body because quiz lessons render
// no body at all, and the body feeds the RAG index, annotation anchors and seed-drift hashing, none of
// which should change when objectives are added. The seeder rewrites it on every run, like
// `review_needs`; it is not teacher-edited, so it is not part of seed drift.
//
// Pure: no I/O. The seeder (tsx), the page (server) and scripts/check-objectives.ts share it.

export interface LessonObjective {
  /** What the learner can do after the lesson, finishing the sentence "After this lesson you can ...". */
  text: string;
  /** The standard code this objective serves (rubric gate D6), exactly as `pnpm standards:for` prints it. */
  standardCode?: string;
}

/** The stored shape of `lessons.objectives`. */
export interface LessonObjectives {
  objectives: LessonObjective[];
  successCriteria: string[];
}

/** The authored fields, as they sit on an AuthoredLesson. */
export interface AuthoredObjectiveFields {
  objectives?: LessonObjective[];
  successCriteria?: string[];
}

/** Rubric D10: one to three objectives per lesson. */
export const MAX_OBJECTIVES = 3;

/** What the seeder writes: null when the lesson names neither objectives nor success criteria. */
export function toLessonObjectives(l: AuthoredObjectiveFields): LessonObjectives | null {
  const objectives = (l.objectives ?? [])
    .map((o) => ({ text: o.text.trim(), ...(o.standardCode?.trim() ? { standardCode: o.standardCode.trim() } : {}) }))
    .filter((o) => o.text.length > 0);
  const successCriteria = (l.successCriteria ?? []).map((s) => s.trim()).filter((s) => s.length > 0);
  if (objectives.length === 0 && successCriteria.length === 0) return null;
  return { objectives, successCriteria };
}

/** Read a stored value defensively: the column is jsonb, so the page never trusts its shape blindly. */
export function readLessonObjectives(value: unknown): LessonObjectives | null {
  if (!value || typeof value !== "object") return null;
  const v = value as { objectives?: unknown; successCriteria?: unknown };
  const objectives = Array.isArray(v.objectives)
    ? v.objectives.flatMap((o): LessonObjective[] => {
        if (!o || typeof o !== "object" || typeof (o as LessonObjective).text !== "string") return [];
        const { text, standardCode } = o as LessonObjective;
        return text.trim() ? [{ text, ...(typeof standardCode === "string" && standardCode ? { standardCode } : {}) }] : [];
      })
    : [];
  const successCriteria = Array.isArray(v.successCriteria)
    ? v.successCriteria.filter((s): s is string => typeof s === "string" && s.trim().length > 0)
    : [];
  if (objectives.length === 0 && successCriteria.length === 0) return null;
  return { objectives, successCriteria };
}

/** What is wrong with one lesson's authored fields, as sentences; empty when it meets gate D10. */
export function objectiveProblems(l: AuthoredObjectiveFields, required: boolean): string[] {
  const problems: string[] = [];
  const objectives = l.objectives ?? [];
  const criteria = l.successCriteria ?? [];
  if (objectives.some((o) => !o.text.trim())) problems.push("an objective has no text");
  if (criteria.some((s) => !s.trim())) problems.push("a success criterion is empty");
  if (objectives.length > MAX_OBJECTIVES) problems.push(`${objectives.length} objectives (at most ${MAX_OBJECTIVES})`);
  if (required) {
    if (objectives.length === 0) problems.push("no objectives (one to three)");
    if (criteria.length === 0) problems.push("no success criteria (at least one)");
  }
  return problems;
}

/**
 * The first ISO date on a `Brief:` line in a course file's header comment, or null. Brief lines are
 * free text (`// Brief: plans/future-courses/<category>/2026-11-01-<slug>-brief.md`, or
 * `// Brief: cloud-briefs/crew-05/00-approved-brief.md (approved by BAM 2026-10-21 ...)`), so this is a
 * best effort: on 2026-11-16 only 34 of 331 course files carried one. It can only ever ADD a course to
 * a gate's scope; a course with no readable date is in scope unless the baseline excuses it.
 */
export function briefDate(source: string): string | null {
  const m = /^\s*(?:\/\/|\*)\s*brief\b[^\n]*?(\d{4}-\d{2}-\d{2})/im.exec(source.slice(0, 8000));
  return m ? m[1] : null;
}
