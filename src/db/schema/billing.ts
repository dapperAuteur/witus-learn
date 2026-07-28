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

// Platform billing (plans/51): what a white-label SCHOOL pays to run its own instance, one row per
// tenant. This is the opposite money direction from enrollments (which charge a STUDENT for a course
// and pay the school via Connect): here the school pays BAM's platform account. Each school carries
// its OWN negotiated amount, either recurring or a one-time lifetime payment.
export const platformSubscriptions = pgTable(
  "platform_subscriptions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** 'subscription' (recurring) or 'lifetime' (one-time, never renews). */
    billingType: text("billing_type").notNull(),
    /** 'month' or 'year' for a subscription; null for lifetime. */
    interval: text("interval"),
    /** The negotiated per-school price, in the currency's minor unit (cents). */
    amountCents: integer("amount_cents").notNull(),
    currency: text("currency").notNull().default("usd"),
    /** 'pending' (checkout created, unpaid) | 'active' | 'past_due' | 'canceled'. */
    status: text("status").notNull().default("pending"),
    stripeCustomerId: text("stripe_customer_id"),
    stripeSubscriptionId: text("stripe_subscription_id"),
    stripeCheckoutSessionId: text("stripe_checkout_session_id"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("platform_subscriptions_tenant_uq").on(t.tenantId),
    check("platform_subscriptions_type_chk", sql`${t.billingType} in ('subscription','lifetime')`),
    check(
      "platform_subscriptions_status_chk",
      sql`${t.status} in ('pending','active','past_due','canceled')`,
    ),
  ],
);

export type PlatformSubscription = typeof platformSubscriptions.$inferSelect;
