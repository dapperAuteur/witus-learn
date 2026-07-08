import { index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { tenants } from "./tenancy";

// Cohorts: a teacher/owner's private class (home-school #1 use case). A cohort
// groups students so the instructor can invite by email and see who's present
// on the /live roster. Tenant-scoped like everything else — a cohort, its
// members, and its invites all carry tenant_id and every query filters it.
export const cohorts = pgTable(
  "cohorts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    ownerId: text("owner_id")
      .notNull()
      .references(() => users.id),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("cohorts_tenant_idx").on(t.tenantId)],
);

export type Cohort = typeof cohorts.$inferSelect;

// Enrolled members of a cohort (students who accepted an invite).
export const cohortMembers = pgTable(
  "cohort_members",
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
    joinedAt: timestamp("joined_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("cohort_members_cohort_user_uq").on(t.cohortId, t.userId),
    index("cohort_members_tenant_idx").on(t.tenantId),
  ],
);

export type CohortMember = typeof cohortMembers.$inferSelect;

// Magic-link-style email invites into a cohort. `token` is a 16-byte hex
// generated in app code (no pgcrypto, matching course_completions). An invite
// is accepted at most once — `acceptedAt`/`acceptedUserId` record that.
export const cohortInvites = pgTable(
  "cohort_invites",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    cohortId: uuid("cohort_id")
      .notNull()
      .references(() => cohorts.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    token: text("token").notNull().unique(),
    invitedAt: timestamp("invited_at", { withTimezone: true }).notNull().defaultNow(),
    acceptedAt: timestamp("accepted_at", { withTimezone: true }),
    acceptedUserId: text("accepted_user_id").references(() => users.id),
  },
  (t) => [index("cohort_invites_token_idx").on(t.token)],
);

export type CohortInvite = typeof cohortInvites.$inferSelect;
