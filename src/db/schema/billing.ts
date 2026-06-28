import { sql } from "drizzle-orm";
import { check, integer, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { courses } from "./courses";
import { tenants } from "./tenancy";

// Enrollment (tenant_id denormalized for cheap isolation) + the completion record
// that backs the public certificate. Stripe fields are populated by the paid flow
// in Phase 5b; the free flow inserts directly.
export const enrollments = pgTable(
  "enrollments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    status: text("status").notNull().default("active"),
    attemptNumber: integer("attempt_number").notNull().default(1),
    stripeCheckoutSessionId: text("stripe_checkout_session_id"),
    stripeSubscriptionId: text("stripe_subscription_id"),
    enrolledAt: timestamp("enrolled_at", { withTimezone: true }).notNull().defaultNow(),
    lastContentSeenAt: timestamp("last_content_seen_at", { withTimezone: true }),
  },
  (t) => [
    unique("enrollments_user_course_attempt_uq").on(t.userId, t.courseId, t.attemptNumber),
    check("enrollments_status_chk", sql`${t.status} in ('active','cancelled')`),
  ],
);

export const courseCompletions = pgTable(
  "course_completions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    completedAt: timestamp("completed_at", { withTimezone: true }).notNull().defaultNow(),
    // 16-byte hex token generated in app code (no pgcrypto dependency).
    verificationToken: text("verification_token").notNull().unique(),
  },
  (t) => [unique("course_completions_user_course_uq").on(t.userId, t.courseId)],
);

export type Enrollment = typeof enrollments.$inferSelect;
export type CourseCompletion = typeof courseCompletions.$inferSelect;
