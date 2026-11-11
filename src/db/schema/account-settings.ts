import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";

// Account settings (BAM, 2026-11-10: "users should be able to manage their accounts"). Three tables:
// the change log, the pending email changes, and the "ask to delete my account" requests. Accounts are
// GLOBAL (one users row across every school), so none of these is tenant-scoped for reads; tenant_id
// records only which school's host a change was made on, for the log and for branding the email.

// Append-only log of every change to an account's email, username or display name, by the person,
// by an admin, or by a data migration (the role mailboxes of 2026-11-10). Same pattern as
// course_instructor_changes and course_visibility_changes: rows are only ever inserted.
export const accountChanges = pgTable(
  "account_changes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    /** The account that changed. The log goes with the account. */
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** The school whose host the change was made on. Null for a migration, or if the school is removed. */
    tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "set null" }),
    /** Who made it. Null for a migration, or if that account is removed later. */
    actorUserId: text("actor_user_id").references(() => users.id, { onDelete: "set null" }),
    /** self | platform_owner | brand_admin | migration */
    actorRole: text("actor_role").notNull(),
    /** email | username | display_name */
    field: text("field").notNull(),
    fromValue: text("from_value"),
    toValue: text("to_value"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("account_changes_user_idx").on(t.userId, t.createdAt),
    check("account_changes_actor_role_chk", sql`${t.actorRole} in ('self','platform_owner','brand_admin','migration')`),
    check("account_changes_field_chk", sql`${t.field} in ('email','username','display_name')`),
  ],
);

export type AccountChange = typeof accountChanges.$inferSelect;
export type AccountChangeActorRole = "self" | "platform_owner" | "brand_admin" | "migration";
export type AccountChangeField = "email" | "username" | "display_name";

// A person's own email change, waiting for the click on the link Learn mailed to the NEW address.
// Only the SHA-256 of the token is stored, so a database read never yields a working link. One
// request per account is live at a time (a new one replaces the old); a used or expired row stays as
// the record that it was asked for, which is also what the durable rate limit counts.
export const emailChangeRequests = pgTable(
  "email_change_requests",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** The school whose host it was asked on: the link points there and the email carries its brand. */
    tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "set null" }),
    /** Lower-cased and trimmed. */
    newEmail: text("new_email").notNull(),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
    /** When the link was used. Null while it waits. */
    usedAt: timestamp("used_at", { withTimezone: true }),
    /** When a newer request or a cancel replaced it. Null while it waits. */
    cancelledAt: timestamp("cancelled_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("email_change_requests_token_uq").on(t.tokenHash),
    index("email_change_requests_user_idx").on(t.userId, t.createdAt),
  ],
);

export type EmailChangeRequest = typeof emailChangeRequests.$inferSelect;

// "Ask to delete my account". There is no self-service deletion: an account can hold certificates,
// a school's course byline, a family link or a payment record, and removing it is a decision the
// platform owner makes by hand. The person asks; the owner sees it on /admin/users and marks it
// handled. No free-text field, by the no-inbox rule: it is a signal, not a message.
export const accountDeletionRequests = pgTable(
  "account_deletion_requests",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    /** The school whose host it was asked on. */
    tenantId: uuid("tenant_id").references(() => tenants.id, { onDelete: "set null" }),
    /** requested | handled | withdrawn */
    status: text("status").notNull().default("requested"),
    resolvedByUserId: text("resolved_by_user_id").references(() => users.id, { onDelete: "set null" }),
    resolvedAt: timestamp("resolved_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    // One open request per account.
    uniqueIndex("account_deletion_requests_open_uq").on(t.userId).where(sql`${t.status} = 'requested'`),
    check("account_deletion_requests_status_chk", sql`${t.status} in ('requested','handled','withdrawn')`),
  ],
);

export type AccountDeletionRequest = typeof accountDeletionRequests.$inferSelect;
