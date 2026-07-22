import { and, asc, desc, eq, ilike, or, type SQL } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseCategories,
  courses,
  type Course,
  type CourseCategory,
} from "@/db/schema";

// Tenant-scoped catalog queries. Every function takes an explicit tenantId and
// bakes it into the WHERE — there is no unscoped variant. Kept free of
// next/headers so the isolation suite can call them directly.

export interface CatalogQuery {
  q?: string;
  category?: string;
  seriesSlug?: string;
  featured?: boolean;
  sort?: "newest" | "title" | "featured";
  /** Owner/instructor tooling only; the public catalog never sets this. */
  includeUnpublished?: boolean;
}

export async function listCourses(tenantId: string, opts: CatalogQuery = {}): Promise<Course[]> {
  const conds: SQL[] = [eq(courses.tenantId, tenantId)];
  if (!opts.includeUnpublished) conds.push(eq(courses.isPublished, true));
  if (opts.category) conds.push(eq(courses.category, opts.category));
  if (opts.seriesSlug) conds.push(eq(courses.seriesSlug, opts.seriesSlug));
  if (opts.featured) conds.push(eq(courses.isFeatured, true));
  if (opts.q) {
    const like = `%${opts.q}%`;
    conds.push(or(ilike(courses.title, like), ilike(courses.description, like)) as SQL);
  }

  const orderBy =
    opts.sort === "title"
      ? asc(courses.title)
      : opts.sort === "featured"
        ? asc(courses.featuredOrder)
        : desc(courses.publishedAt);

  return db
    .select()
    .from(courses)
    .where(and(...conds))
    .orderBy(orderBy);
}

/** By-id read filtered to the tenant: a foreign id returns null → the caller 404s. */
export async function getCourseById(tenantId: string, id: string): Promise<Course | null> {
  const rows = await db
    .select()
    .from(courses)
    .where(and(eq(courses.id, id), eq(courses.tenantId, tenantId)))
    .limit(1);
  return rows[0] ?? null;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Resolve a course from a URL segment that may be EITHER its uuid or its slug, so the authoring
 * URLs can read `/teach/faa-part-107` instead of `/teach/<uuid>` while every existing uuid link
 * and bookmark keeps working.
 *
 * Tenant-scoped like every other by-id/by-slug read: a foreign course returns null and the caller
 * 404s (never redirects — a redirect would leak that the course exists on another brand).
 *
 * `courses.slug` is unique per (tenant, instructor), NOT per tenant, so two instructors in one
 * brand may share a slug. When a slug is ambiguous we return null rather than guess: the uuid URL
 * still works and is unambiguous. Callers must use the RESOLVED `course.id` for downstream
 * queries, never the raw URL segment.
 */
export async function getCourseByIdOrSlug(tenantId: string, idOrSlug: string): Promise<Course | null> {
  if (UUID_RE.test(idOrSlug)) return getCourseById(tenantId, idOrSlug);
  const rows = await db
    .select()
    .from(courses)
    .where(and(eq(courses.slug, idOrSlug), eq(courses.tenantId, tenantId)))
    .limit(2); // 2 so an ambiguous slug is detectable rather than silently taking the first
  return rows.length === 1 ? rows[0] : null;
}

export async function listCategories(tenantId: string): Promise<CourseCategory[]> {
  return db
    .select()
    .from(courseCategories)
    .where(eq(courseCategories.tenantId, tenantId))
    .orderBy(asc(courseCategories.sortOrder), asc(courseCategories.name));
}
