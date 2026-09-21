import { sql } from "drizzle-orm";
import { index, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";

// The platform owner's per-person exceptions to the "teachers must be adults" rule
// (src/lib/teacher-age.ts). Deliberately GLOBAL, not tenant-scoped: the switch it bends is the
// platform owner's, not a school's, and only the owner can read or write this table.
//
// Rows are never deleted: revoking sets revoked_at/revoked_by, so the record of who was allowed to
// teach while not verified as an adult, by whom, when, and why, survives the revocation. The partial
// unique index allows one ACTIVE exception per person while keeping every past one.
export const teacherAgeExceptions = pgTable(
  "teacher_age_exceptions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    grantedBy: text("granted_by")
      .notNull()
      .references(() => users.id),
    // Why, in the owner's words. Required (and length-checked in the route) because an exception
    // with no reason is one nobody can review later.
    reason: text("reason").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
    revokedBy: text("revoked_by").references(() => users.id),
  },
  (t) => [
    uniqueIndex("teacher_age_exceptions_active_uq")
      .on(t.userId)
      .where(sql`${t.revokedAt} is null`),
    index("teacher_age_exceptions_created_idx").on(t.createdAt),
  ],
);

export type TeacherAgeException = typeof teacherAgeExceptions.$inferSelect;
