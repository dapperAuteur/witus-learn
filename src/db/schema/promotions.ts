import { sql } from "drizzle-orm";
import { check, numeric, pgTable, primaryKey, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";
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
    /**
     * URL slug for a PUBLIC campaign page at /sale/<slug>. NULL means the sale has no page of its
     * own, which is the right default: a one-off discount on a single course does not need a
     * landing page, and forcing one would fill /sale with noise.
     *
     * Unique per tenant, not globally, because two brands may both run a "back-to-school".
     */
    slug: text("slug"),
    /**
     * 'course' | 'bundle' | 'tenant' | 'courses'.
     *
     * · course / bundle  one target, named by the column below.
     * · tenant           brand-wide: every course and every bundle.
     * · courses          a MEMBER LIST, held in `promotion_courses`. This is the shape a running
     *                    campaign needs ("Back to school", courses added as they are vetted): one
     *                    row that is the sale, with a set that grows. The alternative, one
     *                    course-scoped row per course, makes ending the sale an N-times job and
     *                    leaves no object that IS the campaign.
     */
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
    unique("promotions_tenant_slug_uq").on(t.tenantId, t.slug),
    check("promotions_scope_chk", sql`${t.scope} in ('course','bundle','tenant','courses')`),
    // Exactly one target for a single-target promotion, and none for the two set-shaped scopes.
    // 'courses' carries no target column: its membership lives in `promotion_courses`, so a row
    // with members and a stray course_id would be ambiguous about which one counted.
    check(
      "promotions_target_chk",
      sql`(${t.scope} = 'course' and ${t.courseId} is not null and ${t.bundleId} is null)
       or (${t.scope} = 'bundle' and ${t.bundleId} is not null and ${t.courseId} is null)
       or (${t.scope} in ('tenant','courses') and ${t.courseId} is null and ${t.bundleId} is null)`,
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

/**
 * Membership of a `scope: 'courses'` promotion. One row per course in the campaign.
 *
 * WHY A JOIN TABLE AND NOT A COURSE-SCOPED ROW PER COURSE. The campaign has to be one object:
 * ending it, renaming it, or changing the discount must be a single action, and the admin list has
 * to show one sale rather than forty. Adding a course to a running sale is then an insert here,
 * which is exactly the workflow of vetting courses over the weeks a promotion runs.
 *
 * Cascades both ways on purpose: deleting the promotion removes its membership, and deleting a
 * course removes it from every sale rather than leaving a row pointing at nothing.
 */
export const promotionCourses = pgTable(
  "promotion_courses",
  {
    promotionId: uuid("promotion_id")
      .notNull()
      .references(() => promotions.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    /** When this course joined the sale. Kept so the campaign's own history is readable. */
    addedAt: timestamp("added_at", { withTimezone: true }).notNull().defaultNow(),
  },
  // The composite key is also the uniqueness guarantee: a course cannot be added to one sale twice.
  (t) => [primaryKey({ columns: [t.promotionId, t.courseId] })],
);

export type Promotion = typeof promotions.$inferSelect;
export type PromotionCourse = typeof promotionCourses.$inferSelect;
