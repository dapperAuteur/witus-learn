import { sql } from "drizzle-orm";
import { check, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { citext } from "./_types";
import { tenants } from "./tenancy";
import { users } from "./auth";

// A role on ONE school, waiting for an address that has no account yet (migration 0080). Written only
// by the owner's `pnpm test-users:prod` (scripts/lib/test-users.ts); claimed by the auth hook the
// moment an account with that address is created, by a magic link or by "Sign in with WitUS"
// (claimPendingRoleGrants, src/db/queries/pending-role-grants.ts). A claimed row stays as the record
// of who was granted what and when. Never a message, never shown to the person: it only becomes a
// tenant_memberships row.
export const pendingRoleGrants = pgTable(
  "pending_role_grants",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    email: citext("email").notNull(),
    role: text("role").notNull(),
    claimedAt: timestamp("claimed_at", { withTimezone: true }),
    claimedUserId: text("claimed_user_id").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("pending_role_grants_tenant_email_uq").on(t.tenantId, t.email),
    check("pending_role_grants_role_chk", sql`${t.role} in ('learner','instructor','brand_admin')`),
  ],
);

export type PendingRoleGrant = typeof pendingRoleGrants.$inferSelect;
