import { check, index, numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { users } from "./auth";
import { tenants } from "./tenancy";
import { courses, lessons } from "./courses";
import { cohorts } from "./cohorts";

// Grade overrides (plans/66, approved by BAM 2026-08-18). The rule this table exists to protect:
// a learner's real attempts are NEVER edited. A teacher who needs to adjust an outcome (the fire
// drill quiz, credit for documented outside work) writes an override ROW on top; every read that
// honors overrides shows the ADJUSTED value with a visible marker, and the original stays intact
// underneath.
//
// Append-only by design: no update or delete path exists in the app. A wrong override is
// corrected by writing a NEWER override (latest per (student, course, lesson, kind) wins), so
// even mistakes stay in the trail. `reason` is NOT NULL and non-empty for the same reason media
// rejections and citation closures require one: a record nobody can interrogate is worse than
// none.
//
// Where overrides apply (decision 3): the teacher's own cohort views (report page + CSV), the
// /family guardian report, the school roll-up, and the learner's own dashboard (which shows BOTH
// values plainly — a student must never discover their real score was silently replaced).
// Platform/course-level aggregates (course recall/quiz statistics, dashboards built on
// quiz_attempts) NEVER consult this table. Course-completion overrides affect progress display
// only and mint no certificate (decision 2b); no override kind feeds sequential gating.
export const gradeOverrides = pgTable(
  "grade_overrides",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** The class this adjustment was made through; authority = owning this cohort (or brand_admin). */
    cohortId: uuid("cohort_id")
      .notNull()
      .references(() => cohorts.id, { onDelete: "cascade" }),
    studentUserId: text("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    teacherUserId: text("teacher_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    /** Set for lesson_complete only; quiz_score and course_complete are course-level in v1. */
    lessonId: uuid("lesson_id").references(() => lessons.id, { onDelete: "cascade" }),
    /** quiz_score | lesson_complete | course_complete */
    kind: text("kind").notNull(),
    /** The adjusted score (0-100) for quiz_score; null for the completion kinds. */
    value: numeric("value", { precision: 5, scale: 2 }),
    reason: text("reason").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    // "This student's adjustments in this course" — the effective-value resolution read.
    index("grade_overrides_tenant_student_course_idx").on(t.tenantId, t.studentUserId, t.courseId),
    // "This class's adjustments" — the teacher's list.
    index("grade_overrides_tenant_cohort_idx").on(t.tenantId, t.cohortId),
    check(
      "grade_overrides_kind_chk",
      sql`${t.kind} in ('quiz_score','lesson_complete','course_complete')`,
    ),
    // A score override carries a value; completion overrides never do.
    check("grade_overrides_value_chk", sql`(${t.kind} = 'quiz_score') = (${t.value} is not null)`),
    check(
      "grade_overrides_score_range_chk",
      sql`${t.value} is null or (${t.value} >= 0 and ${t.value} <= 100)`,
    ),
    // lesson_complete anchors to a lesson; the other kinds are course-level.
    check(
      "grade_overrides_lesson_chk",
      sql`(${t.kind} = 'lesson_complete') = (${t.lessonId} is not null)`,
    ),
    check("grade_overrides_reason_chk", sql`char_length(btrim(${t.reason})) > 0`),
  ],
);

export type GradeOverride = typeof gradeOverrides.$inferSelect;
