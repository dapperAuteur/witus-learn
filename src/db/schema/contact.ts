import { sql } from "drizzle-orm";
import { check, index, pgTable, primaryKey, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { cohorts } from "./cohorts";
import { tenants } from "./tenancy";

// Parent/teacher contact (plans/app-improvements/messaging-parents-teachers.md, BAM's decisions of
// 2026-08-30 and 2026-09-20). NOT MESSAGING: nothing here carries a message, and CLAUDE.md's
// no-inbox rule says nothing ever will. Two adults who are already related through a class (a
// guardian of an enrolled student, and a teacher of that class) can see how to reach each other or
// ask to be reached, and then talk OUTSIDE the app.
//
// Three tables, all tenant-scoped:
//   contact_settings   each person's defaults: how the OTHER side may reach them, plus optional
//                      phone and an availability note;
//   contact_overrides  per-person exceptions to those defaults ("this one parent: through the
//                      school only"), in every combination of the three modes;
//   contact_cohort_overrides
//                      a teacher's rule for a whole CLASS ("parents in Tuesday Science may not
//                      contact me"), between the default and the per-person rule;
//   contact_pings      "I'd like to talk": a signal, shown in-app first and emailed after 48 hours
//                      only if the person who asked has not said they've connected.
//
// The three modes, and what the OTHER person sees:
//   direct   my contact details (account email, optional phone and note) are shown to them;
//   request  my details stay hidden, but they can ask me to contact them (a ping);
//   school   they can't ping me, and are pointed to the school's own contact instead.

export const CONTACT_MODE_SQL = sql`('direct','request','school')`;

export const contactSettings = pgTable(
  "contact_settings",
  {
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // How PARENTS of the students I teach may reach me (applies when I am the teacher).
    parentsMode: text("parents_mode").notNull().default("request"),
    // How TEACHERS of my children may reach me (applies when I am the parent).
    teachersMode: text("teachers_mode").notNull().default("request"),
    phone: text("phone"),
    // "Weekdays after 3pm". Length-capped in the route (CONTACT_NOTE_MAX): this is the one free-text
    // field in the feature, so it is an availability note on the PERSON, never on a ping.
    note: text("note"),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    primaryKey({ columns: [t.tenantId, t.userId] }),
    check("contact_settings_parents_mode_chk", sql`${t.parentsMode} in ${CONTACT_MODE_SQL}`),
    check("contact_settings_teachers_mode_chk", sql`${t.teachersMode} in ${CONTACT_MODE_SQL}`),
  ],
);

export type ContactSettingsRow = typeof contactSettings.$inferSelect;

export const contactOverrides = pgTable(
  "contact_overrides",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    // The person whose rule this is...
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // ...and the one counterpart it applies to.
    otherUserId: text("other_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    mode: text("mode").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("contact_overrides_tenant_user_other_uq").on(t.tenantId, t.userId, t.otherUserId),
    check("contact_overrides_mode_chk", sql`${t.mode} in ${CONTACT_MODE_SQL}`),
    check("contact_overrides_not_self_chk", sql`${t.userId} <> ${t.otherUserId}`),
  ],
);

export type ContactOverride = typeof contactOverrides.$inferSelect;

// Precedence, most specific first: per-person override > per-class override > default for the
// asker's role (src/lib/contact.ts, effectiveMode).
export const contactCohortOverrides = pgTable(
  "contact_cohort_overrides",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    // The teacher whose rule this is...
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    // ...and the class it covers. Set only by a teacher of that class (PUT /api/contact/cohort-overrides).
    cohortId: uuid("cohort_id")
      .notNull()
      .references(() => cohorts.id, { onDelete: "cascade" }),
    mode: text("mode").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("contact_cohort_overrides_tenant_user_cohort_uq").on(t.tenantId, t.userId, t.cohortId),
    check("contact_cohort_overrides_mode_chk", sql`${t.mode} in ${CONTACT_MODE_SQL}`),
  ],
);

export type ContactCohortOverride = typeof contactCohortOverrides.$inferSelect;

// A ping names the STUDENT it is about (decided 2026-09-20: both adults see the student's name and a
// link to their work), but a student is never a party: never the sender, never the recipient, and
// the check constraints below make that a database fact. There is no body, subject, or message
// column, and there must never be one (CLAUDE.md, no-inbox rule; tests/contact-schema.test.ts).
export const contactPings = pgTable(
  "contact_pings",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    // The class that makes these two adults related. Every read re-checks the relationship live.
    cohortId: uuid("cohort_id")
      .notNull()
      .references(() => cohorts.id, { onDelete: "cascade" }),
    studentUserId: text("student_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    fromUserId: text("from_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    toUserId: text("to_user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    fromRole: text("from_role").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    // When the ping ENDED: the asker marked "we've started talking", or (since 2026-09-20, migration
    // 0065) the person asked closed it. Either way it leaves both pages and the badge, and the
    // fallback email is never sent. The column keeps its original name so migration 0064 stands.
    connectedAt: timestamp("connected_at", { withTimezone: true }),
    // Who ended it: the asker or the recipient. Null while active (and on pings ended before 0065).
    // Never shown to the other person: that would be a "seen" signal, which the no-inbox rule bans.
    closedBy: text("closed_by").references(() => users.id, { onDelete: "set null" }),
    // Set when the 48-hour fallback email went out (src/app/api/cron/contact-pings). One per ping.
    emailedAt: timestamp("emailed_at", { withTimezone: true }),
  },
  (t) => [
    index("contact_pings_tenant_to_idx").on(t.tenantId, t.toUserId, t.createdAt),
    index("contact_pings_tenant_from_idx").on(t.tenantId, t.fromUserId, t.createdAt),
    index("contact_pings_email_due_idx")
      .on(t.createdAt)
      .where(sql`${t.connectedAt} is null and ${t.emailedAt} is null`),
    check("contact_pings_role_chk", sql`${t.fromRole} in ('parent','teacher')`),
    check("contact_pings_not_self_chk", sql`${t.fromUserId} <> ${t.toUserId}`),
    check(
      "contact_pings_student_not_party_chk",
      sql`${t.studentUserId} <> ${t.fromUserId} and ${t.studentUserId} <> ${t.toUserId}`,
    ),
  ],
);

export type ContactPing = typeof contactPings.$inferSelect;
