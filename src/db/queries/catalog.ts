import { and, asc, desc, eq, getTableColumns, ilike, inArray, isNotNull, or, sql, type SQL } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseCategories,
  courses,
  userProfiles,
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
  /** `curriculum` is the DEFAULT and the one a browsing learner wants: category order first (the
   *  order the tenant chose in course_categories.sort_order), then position within a series, then
   *  title. `newest` is still available and is what an owner checking recent work wants. */
  sort?: "curriculum" | "newest" | "title" | "featured";
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

  // Curriculum order needs the tenant's chosen category order, which lives on another table, so it
  // takes a LEFT JOIN (left, not inner: a course whose category string matches no category row must
  // still appear, sorted to the end of the categories rather than dropped from the catalog). The
  // join is ON tenant_id too — joining on name alone would pull another brand's category row and
  // let its sort_order influence this tenant's page, which is a leak of exactly the kind the
  // isolation suite exists to catch, even though no foreign course would be returned.
  if (opts.sort == null || opts.sort === "curriculum") {
    return db
      .select(getTableColumns(courses))
      .from(courses)
      .leftJoin(
        courseCategories,
        and(
          eq(courseCategories.tenantId, courses.tenantId),
          eq(courseCategories.name, courses.category),
        ),
      )
      .where(and(...conds))
      .orderBy(
        sql`${courseCategories.sortOrder} nulls last`,
        asc(courseCategories.name),
        sql`${courses.seriesTitle} nulls last`,
        sql`${courses.seriesOrder} nulls last`,
        asc(courses.title),
      );
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

export interface SitemapCourse {
  slug: string | null;
  isPublished: boolean;
  visibility: string;
  /** The instructor's public username, half of the pretty URL /{username}/{slug}. */
  username: string | null;
  updatedAt: Date;
}

/**
 * Rows for the tenant's sitemap: enough to build /{username}/{slug} and decide whether the URL
 * is publicly reachable. UNVETTED courses are INCLUDED on purpose: their landing page is real
 * public content (description + the standards they meet), which is what educators shop on; only
 * the lessons behind it are closed. The include/exclude decision itself lives in one pure place,
 * `includeInSitemap` in src/lib/vetting.ts, so it can be tested and can't drift per surface.
 */
export async function listSitemapCourses(tenantId: string): Promise<SitemapCourse[]> {
  const rows = await db
    .select({
      slug: courses.slug,
      isPublished: courses.isPublished,
      visibility: courses.visibility,
      username: userProfiles.username,
      updatedAt: courses.updatedAt,
    })
    .from(courses)
    .leftJoin(userProfiles, eq(userProfiles.userId, courses.instructorId))
    .where(eq(courses.tenantId, tenantId))
    .orderBy(asc(courses.title));
  return rows;
}

export interface SeriesSummary {
  slug: string;
  title: string;
  /** The shared code prefix, e.g. "STORY". Null when the series has no codes yet. */
  code: string | null;
  courseCount: number;
  /** Distinct track names in the series, in curriculum order. Empty for a single-path series. */
  tracks: string[];
  /** Title of the course a learner should take first: the "00" course, else the lowest order. */
  startsWith: string | null;
  hasCapstone: boolean;
}

/**
 * Every series this tenant publishes, summarised for the /series index.
 *
 * Built from the same published-course rows the catalog uses, so an unpublished course cannot
 * inflate a count and a series that exists only on another brand is invisible here — the tenant
 * filter is the whole point, since a series NAME is itself information about another school.
 */
export async function listSeries(tenantId: string): Promise<SeriesSummary[]> {
  const rows = await db
    .select({
      seriesSlug: courses.seriesSlug,
      seriesTitle: courses.seriesTitle,
      seriesCode: courses.seriesCode,
      seriesPosition: courses.seriesPosition,
      seriesTrack: courses.seriesTrack,
      seriesOrder: courses.seriesOrder,
      title: courses.title,
    })
    .from(courses)
    .where(
      and(
        eq(courses.tenantId, tenantId),
        eq(courses.isPublished, true),
        eq(courses.visibility, "public"),
        isNotNull(courses.seriesSlug),
      ),
    )
    .orderBy(sql`${courses.seriesOrder} nulls last`, asc(courses.title));

  const bySlug = new Map<string, SeriesSummary>();
  const explicitStart = new Map<string, string>();
  for (const r of rows) {
    const slug = r.seriesSlug as string;
    let s = bySlug.get(slug);
    if (!s) {
      s = {
        slug,
        title: r.seriesTitle ?? slug,
        code: r.seriesCode,
        courseCount: 0,
        tracks: [],
        startsWith: null,
        hasCapstone: false,
      };
      bySlug.set(slug, s);
    }
    s.courseCount++;
    if (r.seriesCode && !s.code) s.code = r.seriesCode;
    if (r.seriesTrack && !s.tracks.includes(r.seriesTrack)) s.tracks.push(r.seriesTrack);
    const pos = r.seriesPosition?.trim().toUpperCase();
    if (pos === "99") s.hasCapstone = true;
    // Rows arrive in curriculum order, so the first row is the fallback start. An explicit "00"
    // overrides it, because a series may give its entry course any series_order it likes and the
    // code is the authoritative statement of where a learner begins.
    if (pos === "00") explicitStart.set(slug, r.title);
    else if (s.startsWith === null) s.startsWith = r.title;
  }
  for (const [slug, title] of explicitStart) {
    const s = bySlug.get(slug);
    if (s) s.startsWith = title;
  }
  return [...bySlug.values()].sort((a, b) => a.title.localeCompare(b.title));
}

export async function listCategories(tenantId: string): Promise<CourseCategory[]> {
  return db
    .select()
    .from(courseCategories)
    .where(eq(courseCategories.tenantId, tenantId))
    .orderBy(asc(courseCategories.sortOrder), asc(courseCategories.name));
}

/**
 * Current `content_version` for the given course ids, tenant-scoped.
 *
 * Powers the "Update available" badge on /downloads: the learner's manifest holds the version it
 * downloaded, this returns the version that is live now. Ids belonging to another brand are simply
 * ABSENT from the result rather than erroring, which is both the tenant-isolation rule (never
 * confirm a foreign course exists) and the behaviour the UI wants (unknown, so say nothing).
 */
export async function getContentVersions(
  tenantId: string,
  ids: string[],
): Promise<Record<string, number>> {
  if (ids.length === 0) return {};
  const rows = await db
    .select({ id: courses.id, contentVersion: courses.contentVersion })
    .from(courses)
    .where(and(eq(courses.tenantId, tenantId), inArray(courses.id, ids)));
  return Object.fromEntries(rows.map((r) => [r.id, r.contentVersion]));
}
