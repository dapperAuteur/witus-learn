import { sql } from "drizzle-orm";
import { check, integer, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courses } from "./courses";

// A course can require / recommend other courses. Required prerequisites block
// enrollment unless the learner has completed them or holds an override.
export const coursePrerequisites = pgTable(
  "course_prerequisites",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    prerequisiteCourseId: uuid("prerequisite_course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    enforcement: text("enforcement").notNull().default("required"),
    sortOrder: integer("sort_order").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("course_prerequisites_uq").on(t.courseId, t.prerequisiteCourseId),
    check("course_prerequisites_enforcement_chk", sql`${t.enforcement} in ('required','recommended')`),
    check("course_prerequisites_self_chk", sql`${t.courseId} <> ${t.prerequisiteCourseId}`),
  ],
);

export const prerequisiteOverrides = pgTable(
  "prerequisite_overrides",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    grantedBy: text("granted_by").references(() => users.id, { onDelete: "set null" }),
    notes: text("notes"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [unique("prerequisite_overrides_uq").on(t.courseId, t.userId)],
);

export type CoursePrerequisite = typeof coursePrerequisites.$inferSelect;
export type PrerequisiteOverride = typeof prerequisiteOverrides.$inferSelect;
