import { and, eq, inArray, ne } from "drizzle-orm";
import { db } from "@/db/client";
import { courses } from "@/db/schema";

// Tenant-scoped resolver for /standards.
//
// Isolation note: the standards table in src/lib/standards.ts is a STATIC file — it knows
// course *slugs*, not tenant ids, and it is shared by every tenant that hosts this curriculum.
// This function is the tenant boundary. It answers exactly one question: "of the slugs the
// standards table mentions, which does THIS tenant actually publish?" — and the page then
// renders only those. A tenant that shares only Season 1 therefore cannot surface a Season 2/3
// standard, because the query never returns those courses for it.
//
// The `courses.tenantId` filter below is load-bearing. Do not remove it, and do not "optimize"
// this into a slug-only lookup: slugs are unique per tenant, NOT globally, so an unscoped
// query would happily hand one brand another brand's course.

export interface AlignedCourse {
  id: string;
  title: string;
  slug: string;
}

/**
 * The published, non-private courses of THIS tenant whose slug appears in `slugs`, keyed by slug.
 * Empty map when the tenant hosts none of them — the page then 404s rather than rendering a
 * standards claim with nothing behind it.
 */
export async function getAlignedCourses(
  tenantId: string,
  slugs: string[],
): Promise<Map<string, AlignedCourse>> {
  const wanted = [...new Set(slugs)];
  if (wanted.length === 0) return new Map();

  const rows = await db
    .select({ id: courses.id, title: courses.title, slug: courses.slug })
    .from(courses)
    .where(
      and(
        eq(courses.tenantId, tenantId),
        eq(courses.isPublished, true),
        ne(courses.visibility, "private"),
        inArray(courses.slug, wanted),
      ),
    );

  const out = new Map<string, AlignedCourse>();
  for (const r of rows) {
    if (!r.slug) continue;
    out.set(r.slug, { id: r.id, title: r.title, slug: r.slug });
  }
  return out;
}
