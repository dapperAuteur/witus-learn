import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { tenants } from "./tenancy";

// Rate-limit state for POST /api/kid-login (avatar + PIN sign-in). One row per child
// user — a PIN is weak (4-6 digits), so this is the load-bearing mitigation: lock the
// child out after repeated wrong guesses. Tenant-scoped for audit/consistency even
// though childUserId alone is already unique to one managed profile.
export const kidLoginAttempts = pgTable("kid_login_attempts", {
  childUserId: text("child_user_id")
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  tenantId: uuid("tenant_id")
    .notNull()
    .references(() => tenants.id, { onDelete: "cascade" }),
  attempts: integer("attempts").notNull().default(0),
  lockedUntil: timestamp("locked_until", { withTimezone: true }),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export type KidLoginAttempt = typeof kidLoginAttempts.$inferSelect;
