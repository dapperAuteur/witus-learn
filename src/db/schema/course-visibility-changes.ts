import { boolean, index, jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";
import { courses } from "./courses";

// Audit trail for the platform owner's Make public / Make private switch (src/lib/course-visibility.ts,
// POST /api/courses/[id]/visibility). One row per change that actually changed something: who, when,
// from what, to what, whether the release-readiness check was overridden, and the reason given.
// Append-only: nothing updates or deletes these rows (the course cascade aside).
export const courseVisibilityChanges = pgTable(
  "course_visibility_changes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    /** The platform owner who clicked. Kept as null if the account is ever removed. */
    actorUserId: text("actor_user_id").references(() => users.id, { onDelete: "set null" }),
    fromVisibility: text("from_visibility").notNull(),
    toVisibility: text("to_visibility").notNull(),
    fromPublished: boolean("from_published").notNull(),
    toPublished: boolean("to_published").notNull(),
    /** True when the course was not ready (unvetted, held, or markers open) and the owner went ahead. */
    overrodeReadiness: boolean("overrode_readiness").notNull().default(false),
    /** Required with an override; optional otherwise. */
    reason: text("reason"),
    /** The publish hold an override cleared, so the row says what was set aside. */
    clearedHoldReason: text("cleared_hold_reason"),
    /** The readiness the server computed at the moment of the change (PublicReadiness). */
    readiness: jsonb("readiness"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("course_visibility_changes_course_idx").on(t.courseId, t.createdAt)],
);

export type CourseVisibilityChange = typeof courseVisibilityChanges.$inferSelect;
