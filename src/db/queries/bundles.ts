import "server-only";
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { bundleCourses, bundles, type Bundle } from "@/db/schema/bundles";
import { courses, type Course } from "@/db/schema/courses";

// All reads are tenant-scoped. A by-slug read for a tenant that does not own the bundle returns
// null (the caller 404s, never redirects, so existence does not leak across tenants). Member courses
// are always filtered to the SAME tenant and to published courses, so a bundle can never surface
// another tenant's course or an unpublished one.

export async function listBundles(
  tenantId: string,
  opts: { includeUnpublished?: boolean } = {},
): Promise<Bundle[]> {
  const conds = [eq(bundles.tenantId, tenantId)];
  if (!opts.includeUnpublished) conds.push(eq(bundles.isPublished, true));
  return db
    .select()
    .from(bundles)
    .where(and(...conds))
    .orderBy(asc(bundles.title));
}

export async function getBundleBySlug(
  tenantId: string,
  slug: string,
  opts: { includeUnpublished?: boolean } = {},
): Promise<{ bundle: Bundle; courses: Course[] } | null> {
  const conds = [eq(bundles.tenantId, tenantId), eq(bundles.slug, slug)];
  if (!opts.includeUnpublished) conds.push(eq(bundles.isPublished, true));
  const b = await db
    .select()
    .from(bundles)
    .where(and(...conds))
    .limit(1);
  if (!b[0]) return null;

  const members = await db
    .select({ course: courses })
    .from(bundleCourses)
    .innerJoin(courses, eq(courses.id, bundleCourses.courseId))
    .where(
      and(
        eq(bundleCourses.bundleId, b[0].id),
        eq(courses.tenantId, tenantId), // the join is the tenant boundary
        eq(courses.isPublished, true),
      ),
    )
    .orderBy(asc(bundleCourses.sortOrder));

  return { bundle: b[0], courses: members.map((m) => m.course) };
}

/** The member course ids of a bundle, tenant-scoped. Used by the webhook to enroll on purchase. */
export async function getBundleCourseIds(tenantId: string, bundleId: string): Promise<string[]> {
  const rows = await db
    .select({ id: courses.id })
    .from(bundleCourses)
    .innerJoin(courses, eq(courses.id, bundleCourses.courseId))
    .where(and(eq(bundleCourses.bundleId, bundleId), eq(courses.tenantId, tenantId)))
    .orderBy(asc(bundleCourses.sortOrder));
  return rows.map((r) => r.id);
}

/**
 * Every bundle for a tenant with its member course ids, for the /admin/leads interest dashboard.
 *
 * Unpublished bundles are INCLUDED: a bundle BAM is still assembling is exactly the one he wants
 * demand numbers for before he prices it. Both sides of the join are pinned to the tenant, so a
 * bundle can never report another school's course as a member.
 */
export async function listBundleMemberships(
  tenantId: string,
): Promise<{ slug: string; title: string; courseIds: string[] }[]> {
  const all = await db
    .select()
    .from(bundles)
    .where(eq(bundles.tenantId, tenantId))
    .orderBy(asc(bundles.title));
  if (all.length === 0) return [];

  const links = await db
    .select({ bundleId: bundleCourses.bundleId, courseId: courses.id })
    .from(bundleCourses)
    .innerJoin(courses, eq(courses.id, bundleCourses.courseId))
    .innerJoin(bundles, eq(bundles.id, bundleCourses.bundleId))
    .where(and(eq(courses.tenantId, tenantId), eq(bundles.tenantId, tenantId)))
    .orderBy(asc(bundleCourses.sortOrder));

  const byBundle = new Map<string, string[]>();
  for (const l of links) {
    const list = byBundle.get(l.bundleId);
    if (list) list.push(l.courseId);
    else byBundle.set(l.bundleId, [l.courseId]);
  }
  return all.map((b) => ({ slug: b.slug, title: b.title, courseIds: byBundle.get(b.id) ?? [] }));
}

/**
 * PUBLISHED bundles that contain one course, for the course page's "also in a bundle" links
 * (BAM 2026-08-18). Tenant-scoped on both sides of the join like every other read here, so a
 * course can never surface another tenant's bundle. Unpublished bundles are withheld: a link to
 * a bundle nobody can buy is a dead end, and its price is not an offer we are making yet.
 */
export async function listBundlesForCourse(
  tenantId: string,
  courseId: string,
): Promise<{ id: string; slug: string; title: string; price: string; priceType: string }[]> {
  return db
    .select({
      // id is here so the course page can resolve a bundle-scoped promotion for this bundle.
      id: bundles.id,
      slug: bundles.slug,
      title: bundles.title,
      price: bundles.price,
      priceType: bundles.priceType,
    })
    .from(bundleCourses)
    .innerJoin(bundles, eq(bundles.id, bundleCourses.bundleId))
    .where(
      and(
        eq(bundleCourses.courseId, courseId),
        eq(bundles.tenantId, tenantId),
        eq(bundles.isPublished, true),
      ),
    )
    .orderBy(asc(bundles.title));
}

/** Cache the Stripe product/price on the bundle (mirrors updateCourse), tenant-scoped. */
export async function updateBundleStripe(
  tenantId: string,
  bundleId: string,
  patch: { stripeProductId?: string; stripePriceId?: string },
): Promise<void> {
  await db
    .update(bundles)
    .set(patch)
    .where(and(eq(bundles.tenantId, tenantId), eq(bundles.id, bundleId)));
}

/** Upsert a bundle by (tenant, slug) and replace its member set. Used by seed:bundles. */
export async function upsertBundle(
  tenantId: string,
  input: { slug: string; title: string; description?: string; price?: number; courseIds: string[] },
): Promise<Bundle> {
  const existing = await db
    .select()
    .from(bundles)
    .where(and(eq(bundles.tenantId, tenantId), eq(bundles.slug, input.slug)))
    .limit(1);

  let bundle: Bundle;
  if (existing[0]) {
    // Do NOT overwrite price or is_published on re-seed: those are the owner's to set. Only refresh
    // title/description.
    const updated = await db
      .update(bundles)
      .set({ title: input.title, description: input.description ?? null })
      .where(eq(bundles.id, existing[0].id))
      .returning();
    bundle = updated[0];
    await db.delete(bundleCourses).where(eq(bundleCourses.bundleId, bundle.id));
  } else {
    const inserted = await db
      .insert(bundles)
      .values({
        tenantId,
        slug: input.slug,
        title: input.title,
        description: input.description ?? null,
        price: input.price != null ? String(input.price) : "0",
        isPublished: false, // never auto-publish; the owner sets a price and publishes
      })
      .returning();
    bundle = inserted[0];
  }

  if (input.courseIds.length > 0) {
    await db
      .insert(bundleCourses)
      .values(input.courseIds.map((courseId, i) => ({ bundleId: bundle.id, courseId, sortOrder: i })))
      .onConflictDoNothing();
  }
  return bundle;
}
