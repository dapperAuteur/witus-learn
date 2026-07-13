import { and, countDistinct, eq, inArray, ne, sql, type SQL } from "drizzle-orm";
import { db } from "@/db/client";
import {
  courseClaims,
  courseSources,
  courses,
  lessons,
  platformSettings,
  type MapBelt,
  type MapCommodity,
} from "@/db/schema";
import type { TenantRecord } from "@/lib/tenant";
import { brandName } from "@/lib/branding";

// Everything the /explore landing page says about itself in numbers, derived from
// THIS tenant's own rows. Nothing here is marketing copy with a number typed into it —
// if a figure renders on the page it came out of one of these queries, so it can never
// be stale, inflated, or borrowed from another brand.
//
// Isolation note: `course_sources` and `course_claims` are keyed by course_id and carry
// NO tenant_id of their own. Every aggregate over them therefore INNER JOINs `courses`
// and filters on courses.tenant_id — that join IS the tenant boundary here. Do not
// "simplify" these by dropping the join.

/** The public-catalog predicate: this tenant's published, non-private courses. */
function publicCourseConds(tenantId: string): SQL[] {
  return [
    eq(courses.tenantId, tenantId),
    eq(courses.isPublished, true),
    ne(courses.visibility, "private"),
  ];
}

// ── Map facts (pure — no DB, so the isolation/unit suite can exercise them offline) ──

export interface MapSummary {
  /** Pins on the map (one per commodity/episode). */
  commodities: number;
  /** Distinct origin places named by those pins (map_commodities.geo). */
  origins: number;
  /** Distinct seasons represented. */
  seasons: number;
  /** Growing belts drawn on the map. */
  belts: number;
  /** Distinct countries covered by the growing belts' production regions. */
  beltCountries: number;
}

/**
 * Summarize the rows the page has already fetched. Pure so the page pays no extra DB
 * round-trip and the numbers provably describe the exact pins being rendered.
 *
 * `geo` is free text ("Ethiopian highlands", "West Africa (Nigeria, Ghana)") — it is NOT a
 * country, so we count it as "origins", never as "countries". The only trustworthy country
 * figure in this dataset is the belts' ISO-numeric `production_country_codes`.
 */
export function summarizeMap(commodities: MapCommodity[], belts: MapBelt[]): MapSummary {
  const origins = new Set<string>();
  const seasons = new Set<number>();
  for (const c of commodities) {
    if (c.geo?.trim()) origins.add(c.geo.trim().toLowerCase());
    if (c.seasonNumber != null) seasons.add(c.seasonNumber);
  }

  const countries = new Set<number>();
  for (const b of belts) for (const code of b.productionCountryCodes ?? []) countries.add(code);

  return {
    commodities: commodities.length,
    origins: origins.size,
    seasons: seasons.size,
    belts: belts.length,
    beltCountries: countries.size,
  };
}

// ── Curriculum facts (tenant-scoped aggregates) ──────────────────────────────

export interface CurriculumStats {
  courses: number;
  /** Of those courses, how many are price_type 'free'. Lets the page answer "what does it
   *  cost?" with a fact instead of a guess — we never assert a price we haven't been told. */
  freeCourses: number;
  lessons: number;
  instructors: number;
  sources: number;
  verifiedSources: number;
  claims: number;
  confirmedClaims: number;
}

export async function getCurriculumStats(tenantId: string): Promise<CurriculumStats> {
  const conds = publicCourseConds(tenantId);

  const [courseAgg, lessonAgg, sourceAgg, claimAgg] = await Promise.all([
    db
      .select({
        courses: countDistinct(courses.id),
        instructors: countDistinct(courses.instructorId),
        freeCourses: sql<number>`count(*) filter (where ${courses.priceType} = 'free')::int`,
      })
      .from(courses)
      .where(and(...conds)),

    db
      .select({ lessons: countDistinct(lessons.id) })
      .from(lessons)
      .innerJoin(courses, eq(lessons.courseId, courses.id))
      // lessons carries its own tenant_id too — assert both, so a mis-stamped row can't slip in.
      .where(and(...conds, eq(lessons.tenantId, tenantId), eq(lessons.isPublished, true))),

    db
      .select({
        sources: countDistinct(courseSources.id),
        verified: sql<number>`count(distinct ${courseSources.id}) filter (where ${courseSources.verified})::int`,
      })
      .from(courseSources)
      .innerJoin(courses, eq(courseSources.courseId, courses.id))
      .where(and(...conds)),

    db
      .select({
        claims: countDistinct(courseClaims.id),
        confirmed: sql<number>`count(distinct ${courseClaims.id}) filter (where ${courseClaims.status} = 'confirmed')::int`,
      })
      .from(courseClaims)
      .innerJoin(courses, eq(courseClaims.courseId, courses.id))
      .where(and(...conds)),
  ]);

  return {
    courses: courseAgg[0]?.courses ?? 0,
    freeCourses: courseAgg[0]?.freeCourses ?? 0,
    instructors: courseAgg[0]?.instructors ?? 0,
    lessons: lessonAgg[0]?.lessons ?? 0,
    sources: sourceAgg[0]?.sources ?? 0,
    verifiedSources: sourceAgg[0]?.verified ?? 0,
    claims: claimAgg[0]?.claims ?? 0,
    confirmedClaims: claimAgg[0]?.confirmed ?? 0,
  };
}

/**
 * How many of the given course ids are live, public courses **of this tenant**. The page
 * feeds it the courseIds its own pins point at, so "N pins open a full course" is exact —
 * and a pin somehow pointing at a foreign course contributes nothing (the tenant filter).
 */
export async function countPublicCourses(tenantId: string, courseIds: string[]): Promise<number> {
  const ids = [...new Set(courseIds)];
  if (ids.length === 0) return 0;
  const rows = await db
    .select({ n: countDistinct(courses.id) })
    .from(courses)
    .where(and(...publicCourseConds(tenantId), inArray(courses.id, ids)));
  return rows[0]?.n ?? 0;
}

/**
 * One published, public course of this tenant that actually HAS cited sources — the page
 * links to it as "see the sources for yourself" so the trust claim is demonstrated, not
 * asserted. Null when nothing qualifies (then the page shows no link rather than a dead one).
 */
export async function getMostCitedCourse(
  tenantId: string,
): Promise<{ id: string; title: string; sources: number } | null> {
  const rows = await db
    .select({
      id: courses.id,
      title: courses.title,
      sources: countDistinct(courseSources.id),
    })
    .from(courses)
    .innerJoin(courseSources, eq(courseSources.courseId, courses.id))
    .where(and(...publicCourseConds(tenantId)))
    .groupBy(courses.id, courses.title)
    .orderBy(sql`count(distinct ${courseSources.id}) desc`)
    .limit(1);
  return rows[0] ?? null;
}

/**
 * Per-course facts for the episodes on the map, so clicking a pin can reveal what that episode
 * actually contains (lessons to work through, sources behind it) INSTEAD of ejecting the visitor
 * into the course. Keyed by course id.
 *
 * Tenant-scoped the same way every other aggregate here is: the courses join carries the tenant
 * filter, so a pin pointing at another brand's course yields no facts rather than that brand's
 * numbers. Unpublished/private courses are excluded, so a visitor never learns a draft exists.
 */
export interface EpisodeFacts {
  lessons: number;
  sources: number;
}

export async function getEpisodeFacts(
  tenantId: string,
  courseIds: string[],
): Promise<Map<string, EpisodeFacts>> {
  const ids = [...new Set(courseIds)];
  const out = new Map<string, EpisodeFacts>();
  if (ids.length === 0) return out;

  const conds = [...publicCourseConds(tenantId), inArray(courses.id, ids)];

  const [lessonRows, sourceRows] = await Promise.all([
    db
      .select({ courseId: courses.id, n: countDistinct(lessons.id) })
      .from(courses)
      .leftJoin(
        lessons,
        and(
          eq(lessons.courseId, courses.id),
          eq(lessons.tenantId, tenantId),
          eq(lessons.isPublished, true),
        ),
      )
      .where(and(...conds))
      .groupBy(courses.id),

    db
      .select({ courseId: courses.id, n: countDistinct(courseSources.id) })
      .from(courses)
      .leftJoin(courseSources, eq(courseSources.courseId, courses.id))
      .where(and(...conds))
      .groupBy(courses.id),
  ]);

  for (const r of lessonRows) out.set(r.courseId, { lessons: r.n ?? 0, sources: 0 });
  for (const r of sourceRows) {
    const existing = out.get(r.courseId) ?? { lessons: 0, sources: 0 };
    out.set(r.courseId, { ...existing, sources: r.n ?? 0 });
  }
  return out;
}

// ── Tenant-configurable hero copy (no migration: the generic platform_settings k/v) ──

const HEADLINE_KEY = "explore_headline";
const SUBHEAD_KEY = "explore_subhead";
const INTRO_KEY = "explore_intro";

export interface ExploreCopy {
  headline: string;
  subhead: string;
  intro: string | null;
}

/**
 * The one part of /explore that is prose rather than a derived number. It is per-tenant and
 * server-resolved: a brand overrides it by writing `explore_headline` / `explore_subhead` /
 * `explore_intro` rows into platform_settings for ITS OWN tenant_id (the same pattern
 * /admin/live uses for stream settings — see db/queries/stream-settings.ts). No migration.
 *
 * The defaults are deliberately BRAND-NEUTRAL and describe the *feature*, not any one
 * school's voice — so a second tenant with map data never inherits Better Vice Club's pitch.
 * The only brand-specific words in a default come from the tenant's own row (name/tagline).
 */
export async function getExploreCopy(tenant: TenantRecord): Promise<ExploreCopy> {
  const rows = await db
    .select({ key: platformSettings.key, value: platformSettings.value })
    .from(platformSettings)
    .where(
      and(
        eq(platformSettings.tenantId, tenant.id),
        inArray(platformSettings.key, [HEADLINE_KEY, SUBHEAD_KEY, INTRO_KEY]),
      ),
    );

  const set = new Map(rows.map((r) => [r.key, r.value?.trim() || null]));

  return {
    headline: set.get(HEADLINE_KEY) ?? "The Commodity Map",
    subhead:
      set.get(SUBHEAD_KEY) ??
      `A curriculum you enter through a map. Every course in ${brandName(tenant)} begins with a real thing from a real place — pick a pin, and the history, geography, science, and economics behind it unfold from there.`,
    intro: set.get(INTRO_KEY) ?? tenant.tagline,
  };
}
