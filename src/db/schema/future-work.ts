import { sql } from "drizzle-orm";
import { check, index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { tenants } from "./tenancy";

// Notes the platform owner leaves on a Future Classes & Features item at /admin/future.
//
// The ITEMS themselves are committed content (src/lib/future-work.ts) — only the feedback is in the
// database, so `item_key` is a plain text reference to FutureWorkItem.key, not a foreign key. This
// is the channel that replaces copy-paste: BAM writes here, `pnpm future:list` reads it back.
export const futureWorkNotes = pgTable(
  "future_work_notes",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** FutureWorkItem.key, e.g. "she-did-the-work" or "sdtw-ava-duvernay". */
    itemKey: text("item_key").notNull(),
    body: text("body").notNull(),
    authorUserId: text("author_user_id").references(() => users.id, { onDelete: "set null" }),
    /** open | done — "done" once the note's ask has shipped. */
    status: text("status").notNull().default("open"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    index("future_work_notes_tenant_item_idx").on(t.tenantId, t.itemKey),
    check("future_work_notes_status_chk", sql`${t.status} in ('open','done')`),
  ],
);

export type FutureWorkNote = typeof futureWorkNotes.$inferSelect;
