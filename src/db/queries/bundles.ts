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
