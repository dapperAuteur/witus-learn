import { index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { tenants } from "./tenancy";

// Live class chat: a simple per-tenant chat room shown on the /live page during (and around) a live
// session, so students can interact with the instructor in real time. Tenant-scoped (isolation), polled
// by the client every few seconds. `name` is snapshotted at post time so a display name is stable.
export const liveMessages = pgTable(
  "live_messages",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    name: text("name"),
    body: text("body").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("live_messages_tenant_created_idx").on(t.tenantId, t.createdAt)],
);

export type LiveMessage = typeof liveMessages.$inferSelect;

// Live presence ("who's here") for cohort management: one row per (tenant, user), refreshed by a
// client heartbeat. A user is "present" if last_seen is recent (~60s window). Tenant-scoped.
export const livePresence = pgTable(
  "live_presence",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    name: text("name"),
    lastSeenAt: timestamp("last_seen_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("live_presence_tenant_user_uq").on(t.tenantId, t.userId),
    index("live_presence_tenant_seen_idx").on(t.tenantId, t.lastSeenAt),
  ],
);

export type LivePresence = typeof livePresence.$inferSelect;
