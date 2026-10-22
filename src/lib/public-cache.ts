import "server-only";
import { unstable_cache } from "next/cache";
import { CACHE_TAGS, PUBLIC_CACHE_SECONDS } from "@/lib/cache-tags";
import type { Course } from "@/db/schema";
import {
  getCourseLesson,
  listLessonSummaries,
  listModules,
} from "@/db/queries/authoring";
import {
  findCourseRoute,
  getCourseById,
  listCategories,
  listCourseRoutes,
  listCourses,
  listPublishedCourseSlugs,
  listSitemapCourses,
  type CatalogQuery,
} from "@/db/queries/catalog";
import { listBelts, listCommodities, mapDataExists } from "@/db/queries/map";
import {
  countPublicCourses,
  getCurriculumStats,
  getEpisodeFacts,
  getMostCitedCourse,
} from "@/db/queries/explore";
import { getStandardsCoverage } from "@/db/queries/standards";
import { lookupTenantByHost } from "@/db/queries/tenant-lookup";

// Cross-request caching for PUBLIC, read-mostly reads: the same rows for every visitor, changed
// only when an admin edits content. Why: cloud-briefs/learn-db-egress-2026-10-20.md (crawlers were
// re-reading the same rows until Neon's monthly transfer ran out).
//
// THE RULE: nothing per-user goes through here. No session, enrollment, progress, notes, quiz
// attempts, auditor grants, dashboards. A read belongs here only if its answer is identical for
// every person who asks, keyed by nothing but tenant/course ids and public slugs. Time-dependent
// reads (promotions) and free-text searches stay uncached too.
//
// Every entry is tagged (src/lib/cache-tags.ts) and cleared where its data is written, plus a
// one-hour TTL backstop for the seed scripts, which write outside Next and cannot clear a tag.

// ── Date-safe wrapper ──────────────────────────────────────────────────────────────────────────
// unstable_cache stores results as JSON, which turns a Date into a string while the TypeScript type
// still says Date. That would break `updatedAt.getTime()`, `vettedAt` checks and sitemap
// `lastModified` silently. So results are encoded with Dates tagged and revived on the way out.

const DATE_KEY = "__cachedDate";

function encodeDates(value: unknown): unknown {
  if (value instanceof Date) return { [DATE_KEY]: value.toISOString() };
  if (Array.isArray(value)) return value.map(encodeDates);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, encodeDates(v)]));
  }
  return value;
}

function decodeDates(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(decodeDates);
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    const iso = record[DATE_KEY];
    if (typeof iso === "string" && Object.keys(record).length === 1) return new Date(iso);
    return Object.fromEntries(Object.entries(record).map(([k, v]) => [k, decodeDates(v)]));
  }
  return value;
}

type CacheArg = string | number | boolean | null | undefined;

/**
 * Wrap a read in Next's data cache. The key is `name` plus the arguments (so a different tenant or
 * course is a different entry), and `tags` are computed from the same arguments. Results must be
 * plain data: rows, arrays, Dates. A Map or Set does not survive JSON, so return arrays and build
 * the Map at the call site.
 */
export function cachedRead<A extends CacheArg[], R>(
  name: string,
  fn: (...args: A) => Promise<R>,
  tags: (...args: A) => string[],
): (...args: A) => Promise<R> {
  return async (...args: A) => {
    const read = unstable_cache(async () => encodeDates(await fn(...args)), [name, JSON.stringify(args)], {
      tags: tags(...args),
      revalidate: PUBLIC_CACHE_SECONDS,
    });
    return decodeDates(await read()) as R;
  };
}

// ── Tenants ────────────────────────────────────────────────────────────────────────────────────

/** Tenant row for a (normalized) host, or null. The isActive check stays with the caller. */
export const cachedTenantByHost = cachedRead("tenant-by-host", lookupTenantByHost, () => [CACHE_TAGS.tenants]);

// ── Course + lesson content ────────────────────────────────────────────────────────────────────

/** The tenant's pretty-URL index. Tagged with profiles too: the username half can change. */
export const cachedCourseRoutes = cachedRead("course-routes", listCourseRoutes, (tenantId) => [
  CACHE_TAGS.catalog(tenantId),
  CACHE_TAGS.profiles,
]);

/** One course row by id, tenant-filtered (a foreign id is null). */
export const cachedCourseById = cachedRead("course-by-id", getCourseById, (tenantId, id) => [
  CACHE_TAGS.catalog(tenantId),
  CACHE_TAGS.course(id),
]);

/**
 * The course behind /{username}/{slug}, through the per-tenant route index, so an invented URL
 * costs one in-memory lookup and leaves no cache entry behind (the index and the course rows are
 * both bounded by the real catalog).
 */
export async function cachedCourseBySlug(tenantId: string, username: string, slug: string): Promise<Course | null> {
  const route = findCourseRoute(await cachedCourseRoutes(tenantId), username, slug);
  return route ? cachedCourseById(tenantId, route.id) : null;
}

/** Lesson summaries (no bodies). Gating and the published filter are applied by the caller. */
export const cachedLessonSummaries = cachedRead("lesson-summaries", listLessonSummaries, (courseId) => [
  CACHE_TAGS.course(courseId),
]);

/** Sections of a course, ordered. */
export const cachedModules = cachedRead("course-modules", listModules, (courseId) => [CACHE_TAGS.course(courseId)]);

/** One full lesson. Only call it for a lesson the viewer's gate already let through. */
export const cachedCourseLesson = cachedRead("course-lesson", getCourseLesson, (courseId) => [
  CACHE_TAGS.course(courseId),
]);

// ── Catalog ────────────────────────────────────────────────────────────────────────────────────

const cachedCatalogList = cachedRead(
  "catalog-list",
  (tenantId: string, category: string | null, featured: boolean, sort: string | null) =>
    listCourses(tenantId, {
      category: category ?? undefined,
      featured: featured || undefined,
      sort: (sort ?? undefined) as CatalogQuery["sort"],
    }),
  (tenantId) => [CACHE_TAGS.catalog(tenantId)],
);

/**
 * The public catalog. Cached only for the shapes every visitor shares and only for keys bounded by
 * the catalog itself: no free-text search, no unpublished courses (an editor's view), and a category
 * filter only when it names one of the tenant's real categories. Anything else (a typo, a bot
 * inventing ?category= values) reads the database directly rather than adding a cache entry.
 */
export async function cachedListCourses(tenantId: string, opts: CatalogQuery = {}): Promise<Course[]> {
  if (opts.q?.trim() || opts.includeUnpublished || opts.seriesSlug) return listCourses(tenantId, opts);
  if (opts.category && !(await cachedCategories(tenantId)).some((c) => c.name === opts.category)) {
    return listCourses(tenantId, opts);
  }
  return cachedCatalogList(tenantId, opts.category ?? null, Boolean(opts.featured), opts.sort ?? null);
}

export const cachedCategories = cachedRead("catalog-categories", listCategories, (tenantId) => [
  CACHE_TAGS.catalog(tenantId),
]);

export const cachedPublishedCourseSlugs = cachedRead("catalog-published-slugs", listPublishedCourseSlugs, (tenantId) => [
  CACHE_TAGS.catalog(tenantId),
]);

export const cachedSitemapCourses = cachedRead("sitemap-courses", listSitemapCourses, (tenantId) => [
  CACHE_TAGS.catalog(tenantId),
]);

/** Jurisdictions this tenant's catalog is aligned to, for the sitemap's standards URLs. */
export const cachedStandardsCoverage = cachedRead("standards-coverage", getStandardsCoverage, (tenantId) => [
  CACHE_TAGS.catalog(tenantId),
]);

// ── Map + explore ──────────────────────────────────────────────────────────────────────────────

export const cachedMapDataExists = cachedRead("map-exists", mapDataExists, (tenantId) => [CACHE_TAGS.catalog(tenantId)]);

export const cachedCommodities = cachedRead("map-commodities", listCommodities, (tenantId) => [
  CACHE_TAGS.catalog(tenantId),
]);

export const cachedBelts = cachedRead("map-belts", listBelts, (tenantId) => [CACHE_TAGS.catalog(tenantId)]);

export const cachedCurriculumStats = cachedRead("explore-stats", getCurriculumStats, (tenantId) => [
  CACHE_TAGS.catalog(tenantId),
]);

export const cachedMostCitedCourse = cachedRead("explore-most-cited", getMostCitedCourse, (tenantId) => [
  CACHE_TAGS.catalog(tenantId),
]);

/** Ids are sorted and joined so the same pin set is one entry whatever order the page passes. */
const cachedPublicCourseCount = cachedRead(
  "explore-public-count",
  (tenantId: string, ids: string) => countPublicCourses(tenantId, ids ? ids.split(",") : []),
  (tenantId) => [CACHE_TAGS.catalog(tenantId)],
);
export function cachedCountPublicCourses(tenantId: string, courseIds: string[]) {
  return cachedPublicCourseCount(tenantId, [...new Set(courseIds)].sort().join(","));
}

const cachedEpisodeFactRows = cachedRead(
  "explore-episode-facts",
  async (tenantId: string, ids: string) => [...(await getEpisodeFacts(tenantId, ids ? ids.split(",") : []))],
  (tenantId) => [CACHE_TAGS.catalog(tenantId)],
);
export async function cachedEpisodeFacts(tenantId: string, courseIds: string[]) {
  return new Map(await cachedEpisodeFactRows(tenantId, [...new Set(courseIds)].sort().join(",")));
}
