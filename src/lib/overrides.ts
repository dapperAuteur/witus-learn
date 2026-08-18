// Pure effective-value resolution for grade overrides (plans/66, approved 2026-08-18). No DB:
// callers hand this the student's override rows and their real values; it answers what each
// surface should SHOW. The real attempt is never modified anywhere, and platform/course-level
// aggregates never call anything in this file (decision 3).

export interface OverrideRow {
  id: string;
  courseId: string;
  lessonId: string | null;
  kind: "quiz_score" | "lesson_complete" | "course_complete";
  value: string | number | null;
  reason: string;
  teacherUserId: string;
  createdAt: Date;
}

/** Latest-wins per (course, lesson, kind): the append-only correction rule. */
export function latestOverrides(rows: OverrideRow[]): Map<string, OverrideRow> {
  const byKey = new Map<string, OverrideRow>();
  for (const row of rows) {
    const key = `${row.courseId}|${row.lessonId ?? ""}|${row.kind}`;
    const existing = byKey.get(key);
    if (!existing || row.createdAt > existing.createdAt) byKey.set(key, row);
  }
  return byKey;
}

export interface EffectiveQuiz {
  /** What the surface shows. */
  effective: number | null;
  /** The untouched real value, shown alongside wherever the learner looks. */
  original: number | null;
  /** Set when an override applied — the visible "adjusted by" marker's content. */
  adjusted?: { reason: string; teacherUserId: string; at: Date };
}

/** The course-level quiz figure a cohort/family/roll-up surface shows for one student. */
export function effectiveQuizScore(
  original: number | null,
  overrides: Map<string, OverrideRow>,
  courseId: string,
): EffectiveQuiz {
  const o = overrides.get(`${courseId}||quiz_score`);
  if (!o || o.value == null) return { effective: original, original };
  return {
    effective: Number(o.value),
    original,
    adjusted: { reason: o.reason, teacherUserId: o.teacherUserId, at: o.createdAt },
  };
}

export interface EffectiveCompletion {
  /** Real completions plus lesson_complete overrides (display only; never gates anything). */
  effectiveCount: number;
  originalCount: number;
  /** Course marked complete by override (decision 2b: display only, mints no certificate). */
  courseMarkedComplete: { reason: string; teacherUserId: string; at: Date } | null;
  adjustedLessons: { lessonId: string; reason: string; teacherUserId: string; at: Date }[];
}

/** Lessons-completed as a surface shows it: real completions ∪ overridden lessons. */
export function effectiveCompletions(
  completedLessonIds: ReadonlySet<string>,
  overrides: Map<string, OverrideRow>,
  courseId: string,
): EffectiveCompletion {
  const adjustedLessons: EffectiveCompletion["adjustedLessons"] = [];
  let extra = 0;
  for (const o of overrides.values()) {
    if (o.courseId !== courseId || o.kind !== "lesson_complete" || !o.lessonId) continue;
    adjustedLessons.push({
      lessonId: o.lessonId,
      reason: o.reason,
      teacherUserId: o.teacherUserId,
      at: o.createdAt,
    });
    if (!completedLessonIds.has(o.lessonId)) extra += 1;
  }
  const course = overrides.get(`${courseId}||course_complete`);
  return {
    effectiveCount: completedLessonIds.size + extra,
    originalCount: completedLessonIds.size,
    courseMarkedComplete: course
      ? { reason: course.reason, teacherUserId: course.teacherUserId, at: course.createdAt }
      : null,
    adjustedLessons,
  };
}
