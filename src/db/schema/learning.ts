import { sql } from "drizzle-orm";
import {
  check,
  index,
  integer,
  jsonb,
  numeric,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courses, lessons } from "./courses";
import { tenants } from "./tenancy";

// Per-(user, lesson) progress. completed_at is set when the learner finishes the
// lesson; watch_seconds / quiz fields support the players (quiz scoring lands in
// Phase 6). Tenant scope is inherited via the lesson.
export const lessonProgress = pgTable(
  "lesson_progress",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    watchSeconds: integer("watch_seconds").notNull().default(0),
    quizScore: numeric("quiz_score", { precision: 5, scale: 2 }),
    quizAnswers: jsonb("quiz_answers"),
    tourProgress: jsonb("tour_progress"),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.lessonId] })],
);

export type LessonProgress = typeof lessonProgress.$inferSelect;

// Learner-submitted corrections / comments / questions on a lesson — the curriculum
// feedback tool. Tenant-scoped explicitly (so review queries stay isolated). Status
// lets instructors triage. A learner improving the curriculum is a trust signal.
export const lessonFeedback = pgTable(
  "lesson_feedback",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    lessonId: uuid("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** correction | comment | question */
    kind: text("kind").notNull().default("comment"),
    body: text("body").notNull(),
    /** open | reviewed | resolved */
    status: text("status").notNull().default("open"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("lesson_feedback_lesson_idx").on(t.lessonId),
    index("lesson_feedback_tenant_status_idx").on(t.tenantId, t.status),
    check("lesson_feedback_kind_chk", sql`${t.kind} in ('correction','comment','question')`),
    check("lesson_feedback_status_chk", sql`${t.status} in ('open','reviewed','resolved')`),
  ],
);

export type LessonFeedback = typeof lessonFeedback.$inferSelect;
