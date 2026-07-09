import { pgTable, text, timestamp, uuid, index } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";

// Per-tenant server-to-server read API keys (see plans/wanderlearn-embed-design.md).
// A consumer app (e.g. WanderLearn's backend) authenticates as `Authorization: Bearer
// <raw key>`; we hash the raw key and look it up here to resolve the TENANT — never the
// other way around, and never from the request host or any client-supplied tenant id/slug.
// The raw key is shown to the admin exactly ONCE at creation and is never stored — only
// `keyHash` (sha256 of the raw key) persists, so a DB leak alone can't be replayed.
export const tenantApiKeys = pgTable(
  "tenant_api_keys",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    // sha256(raw key), hex. Unique so a hash collision can't resolve to two tenants.
    keyHash: text("key_hash").notNull().unique(),
    // First few chars of the raw key (e.g. "lwus_ab12cd34") kept ONLY for the admin list
    // to tell keys apart — never enough to reconstruct or authenticate with.
    keyPrefix: text("key_prefix").notNull(),
    createdByUserId: text("created_by_user_id").references(() => users.id, {
      onDelete: "set null",
    }),
    lastUsedAt: timestamp("last_used_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    // NULL = active. Set = revoked (soft-delete so audit/lastUsedAt history survives).
    revokedAt: timestamp("revoked_at", { withTimezone: true }),
  },
  (t) => [
    index("tenant_api_keys_tenant_idx").on(t.tenantId),
    index("tenant_api_keys_active_idx").on(t.tenantId, t.revokedAt),
  ],
);

export type TenantApiKey = typeof tenantApiKeys.$inferSelect;
