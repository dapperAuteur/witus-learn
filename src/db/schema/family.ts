import { date, index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { cohorts } from "./cohorts";
import { users } from "./auth";
import { tenants } from "./tenancy";

// Family (Model A of the hybrid): a parent/guardian links to their own child's EXISTING
// learner account (the child signs in themselves) and gets a READ-ONLY view of that
// child's progress/grades/attendance. Model B (parent-managed sub-profiles for kids too
// young for their own account) is a future follow-up — NOT built here; this schema
// doesn't preclude it. Tenant-scoped like everything else — every read filters tenant_id,
// and `isGuardianOf` is the mandatory gate before showing any child's data.

// A confirmed parent↔child link. Many guardians can link to one student (both parents),
// and (in principle) one guardian could be linked to multiple children.
export const guardians = pgTable(
  "guardians",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    guardianUserId: text("guardian_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    studentUserId: text("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("guardians_guardian_student_uq").on(t.guardianUserId, t.studentUserId),
    index("guardians_tenant_guardian_idx").on(t.tenantId, t.guardianUserId),
  ],
);

export type Guardian = typeof guardians.$inferSelect;

// Magic-link-style email invites a teacher (cohort owner) sends to a child's parent, mirroring
// cohort_invites. `token` is a 16-byte hex generated in app code. An invite is accepted at most
// once — `acceptedAt`/`acceptedGuardianUserId` record that.
export const guardianInvites = pgTable(
  "guardian_invites",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    studentUserId: text("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    cohortId: uuid("cohort_id").references(() => cohorts.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    token: text("token").notNull().unique(),
    invitedAt: timestamp("invited_at", { withTimezone: true }).notNull().defaultNow(),
    acceptedAt: timestamp("accepted_at", { withTimezone: true }),
    acceptedGuardianUserId: text("accepted_guardian_user_id").references(() => users.id),
  },
  (t) => [index("guardian_invites_token_idx").on(t.token)],
);

export type GuardianInvite = typeof guardianInvites.$inferSelect;

// One row per (cohort, student, day) they were present in the live room — piggybacked
// on the presence heartbeat. This is how a parent sees attendance without any separate
// check-in flow.
export const cohortAttendance = pgTable(
  "cohort_attendance",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    cohortId: uuid("cohort_id")
      .notNull()
      .references(() => cohorts.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    day: date("day").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("cohort_attendance_cohort_user_day_uq").on(t.cohortId, t.userId, t.day),
    index("cohort_attendance_tenant_cohort_day_idx").on(t.tenantId, t.cohortId, t.day),
  ],
);

export type CohortAttendance = typeof cohortAttendance.$inferSelect;
