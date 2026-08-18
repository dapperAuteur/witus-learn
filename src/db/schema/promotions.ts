import { sql } from "drizzle-orm";
import { check, numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./auth";
import { bundles } from "./bundles";
import { courses } from "./courses";
import { tenants } from "./tenancy";

// A PROMOTION is a codeless sale: a price cut that applies to everyone who sees the page, with no
// code to type. It is the sibling of `promo_codes` (src/db/schema/connect.ts), not a replacement:
// a code is a targeted grant to one buyer, a promotion is a public offer on the catalog. Both can
// be live at once (a code's coupon still applies on top of the promotional line-item amount).
//
// The price is NEVER written back onto courses.price / bundles.price. That column is the owner's
// LIST price and overwriting it loses the number the sale is a discount FROM, which is exactly the
// silent-data-loss failure documented for seed-time prices. Resolution is computed at read time by
// src/lib/sale-pricing.ts and re-computed server-side at checkout.
//
// Windows: starts_at NULL means "live immediately", ends_at NULL means "runs indefinitely until
// someone ends it", and ended_at is the manual stop (set to now() by the End now button). A row is
// therefore never deleted to stop a sale, so the history of what was offered stays readable.
export const promotions = pgTable(
  "promotions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    /** Owner-facing label, shown in the admin list and on the price ("Summer sale"). */
    name: text("name").notNull(),
    /** 'course' | 'bundle' | 'tenant' (tenant = brand-wide, every course and bundle). */
    scope: text("scope").notNull(),
    // The target is two real foreign keys rather than one polymorphic id, so the database enforces
    // that the target exists and cleans the promotion up when it is deleted. The CHECK below makes
    // the scope/target combinations that would be ambiguous unrepresentable.
    courseId: uuid("course_id").references(() => courses.id, { onDelete: "cascade" }),
    bundleId: uuid("bundle_id").references(() => bundles.id, { onDelete: "cascade" }),
    /** 'percent' (value = 1..100 off) | 'amount' (value = dollars off) | 'free' (value NULL). */
    kind: text("kind").notNull(),
    value: numeric("value", { precision: 10, scale: 2 }),
    /** NULL = live immediately. */
    startsAt: timestamp("starts_at", { withTimezone: true }),
    /** NULL = runs indefinitely until ended manually. */
    endsAt: timestamp("ends_at", { withTimezone: true }),
    /** Set by "End now"; a row with this set is over regardless of ends_at. */
    endedAt: timestamp("ended_at", { withTimezone: true }),
    // Nullable + SET NULL: deleting the admin who made the sale must not silently delete the sale
    // (and with it, a price learners are currently being shown).
    createdBy: text("created_by").references(() => users.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    check("promotions_scope_chk", sql`${t.scope} in ('course','bundle','tenant')`),
    // Exactly one target for a scoped promotion, and none for a brand-wide one.
    check(
      "promotions_target_chk",
      sql`(${t.scope} = 'course' and ${t.courseId} is not null and ${t.bundleId} is null)
       or (${t.scope} = 'bundle' and ${t.bundleId} is not null and ${t.courseId} is null)
       or (${t.scope} = 'tenant' and ${t.courseId} is null and ${t.bundleId} is null)`,
    ),
    check("promotions_kind_chk", sql`${t.kind} in ('percent','amount','free')`),
    // value present iff the kind needs one; percent within 1..100; amount strictly positive.
    check(
      "promotions_value_chk",
      sql`(${t.kind} = 'free' and ${t.value} is null)
       or (${t.kind} = 'percent' and ${t.value} is not null and ${t.value} >= 1 and ${t.value} <= 100)
       or (${t.kind} = 'amount' and ${t.value} is not null and ${t.value} > 0)`,
    ),
    check(
      "promotions_window_chk",
      sql`${t.startsAt} is null or ${t.endsAt} is null or ${t.endsAt} > ${t.startsAt}`,
    ),
  ],
);

export type Promotion = typeof promotions.$inferSelect;
