import { integer, jsonb, numeric, pgTable, primaryKey, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { lessons } from "./courses";

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
