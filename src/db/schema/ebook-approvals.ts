import { index, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
import { tenants } from "./tenancy";
import { users } from "./auth";

// Approval state for an ebook, per tenant. A row EXISTS only when the ebook has been approved, so
// absence is the default and the default is private.
//
// That shape is deliberate. The alternative, a row with an `approved` boolean, makes "not yet
// reviewed" and "reviewed and rejected" look identical to a bug that reads the wrong column, and a
// missing row would then read as approved-by-omission. Here the safe state is the one that requires
// no data to exist, which is the same reasoning behind courses.vetted_at being NULL by default.
export const ebookApprovals = pgTable(
  "ebook_approvals",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** Ebook.slug from src/lib/ebooks.ts. */
    ebookSlug: text("ebook_slug").notNull(),
    approvedAt: timestamp("approved_at", { withTimezone: true }).notNull().defaultNow(),
    approvedBy: text("approved_by").references(() => users.id, { onDelete: "set null" }),
    /** What was checked before approving. Optional, but the admin form asks for it. */
    note: text("note"),
  },
  (t) => [
    unique("ebook_approvals_tenant_slug_uq").on(t.tenantId, t.ebookSlug),
    index("ebook_approvals_tenant_idx").on(t.tenantId),
  ],
);

export type EbookApproval = typeof ebookApprovals.$inferSelect;
