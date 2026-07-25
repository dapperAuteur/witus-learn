import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  integer,
  numeric,
  pgTable,
  primaryKey,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";
import { courses } from "./courses";
import { tenants } from "./tenancy";

// A bundle is a themed set of courses sold together at one price. Buying it enrolls the learner in
// every member course (the webhook grants per-course access, so a later edit to the bundle never
// removes access already bought). Tenant-scoped like courses; the (tenant_id, slug) pair is unique.
// The pricing/billing columns mirror `courses` so ensureBundlePrice/createBundleCheckout reuse the
// same Stripe pattern. See src/lib/bundles.ts for the proposed bundles this seeds from, and plans/48.
export const bundles = pgTable(
  "bundles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    tenantId: uuid("tenant_id")
      .notNull()
      .references(() => tenants.id, { onDelete: "cascade" }),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    description: text("description"),
    price: numeric("price", { precision: 10, scale: 2 }).notNull().default("0"),
    // 'one_time' | 'subscription'. Bundles are one-time by default; subscription is allowed for a
    // future "all-access" bundle but is not required by the first release.
    priceType: text("price_type").notNull().default("one_time"),
    billingInterval: text("billing_interval"),
    stripeProductId: text("stripe_product_id"),
    stripePriceId: text("stripe_price_id"),
    isPublished: boolean("is_published").notNull().default(false),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    unique("bundles_tenant_slug_uq").on(t.tenantId, t.slug),
    check("bundles_price_type_chk", sql`${t.priceType} in ('one_time','subscription')`),
  ],
);

// The membership join. A course can be in many bundles; a bundle has many courses. ON DELETE CASCADE
// on both sides, so deleting a course or a bundle cleans up the link (not the learner's enrollment,
// which is granted per course and independent).
export const bundleCourses = pgTable(
  "bundle_courses",
  {
    bundleId: uuid("bundle_id")
      .notNull()
      .references(() => bundles.id, { onDelete: "cascade" }),
    courseId: uuid("course_id")
      .notNull()
      .references(() => courses.id, { onDelete: "cascade" }),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (t) => [primaryKey({ columns: [t.bundleId, t.courseId] })],
);

export type Bundle = typeof bundles.$inferSelect;
export type BundleCourse = typeof bundleCourses.$inferSelect;
