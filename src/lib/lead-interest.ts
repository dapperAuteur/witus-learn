import type { LeadInquiry } from "@/db/schema/learning";

/**
 * Interest filtering for /admin/leads: who is waiting for what.
 *
 * PURE on purpose. The database side only hands over THIS tenant's leads, THIS tenant's courses,
 * and THIS tenant's bundle memberships; every decision about which lead matches which course,
 * track or bundle is made here. That means the whole thing is testable without a database, and it
 * cannot invent a cross-tenant match: nothing in this file can reach a row the caller did not
 * already scope.
 *
 * SCALE HONESTY (read before the list gets big). `leads.inquiries` is a jsonb array, so "which
 * leads asked about course X" is not something a normal btree index can answer. So we load the
 * tenant's leads and filter in JS. At the current volume (hundreds of rows per school, one admin
 * reading one page) that is the right trade: no migration, no second table, no index to keep in
 * sync. It degrades linearly with the lead count, and the LIMIT on the query is a real ceiling,
 * not a formality.
 *
 * If a school's list grows into the tens of thousands, this must change. Two ways out, in
 * increasing order of cost:
 *   1. A GIN index on `leads.inquiries` plus a jsonb containment (`@>`) predicate pushed down into
 *      SQL. `countCourseNotifySignups` in src/db/queries/leads.ts already uses exactly that
 *      matcher, so the shape is proven; only the index and the WHERE clause are missing.
 *   2. A normalized `lead_interests(tenant_id, lead_id, course_id, source, at)` table, which is
 *      the one that also gives real pagination, per-course counts in SQL, and sorting by activity.
 * Do not paper over it by raising the LIMIT: a silently truncated list is worse than a slow one.
 */

/** Marker for a "tell me when this course opens" signup inside `leads.inquiries`. */
export const COURSE_NOTIFY_SOURCE = "course-notify";

/** A course as the interest dashboard needs it. Loaded tenant-scoped by the caller. */
export interface InterestCourse {
  id: string;
  title: string;
  seriesSlug: string | null;
  seriesTitle: string | null;
}

/** A bundle plus its member course ids. Loaded tenant-scoped by the caller. */
export interface InterestBundle {
  slug: string;
  title: string;
  courseIds: string[];
}

/** A captured lead, as stored. Loaded tenant-scoped by the caller. */
export interface InterestLead {
  email: string;
  name: string | null;
  source: string | null;
  createdAt: Date;
  inquiries: LeadInquiry[] | null;
}

/** What the reader asked for, straight off searchParams. Unknown values match nothing. */
export interface InterestFilters {
  /** A course id. */
  course?: string | null;
  /** A `courses.series_slug`, i.e. a learning track. */
  track?: string | null;
  /** A `bundles.slug`. */
  bundle?: string | null;
  /** An inquiry source, e.g. "course-notify" or "explore-pricing". */
  source?: string | null;
}

/** One thing a lead said, flattened so the page and the CSV render the same shape. */
export interface InterestEntry {
  source: string;
  courseId: string | null;
  courseTitle: string | null;
  role: string | null;
  students: number | null;
  message: string | null;
  /** ISO-8601. */
  at: string;
  /**
   * True when the lead row carried no inquiries at all (a plain newsletter-style signup via
   * addLead). We synthesize one entry from the row so those people are still listed and still
   * filterable by source, instead of vanishing from a page called "leads".
   */
  implicit: boolean;
}

/** A lead plus only the entries that matched the current filter. */
export interface InterestRow {
  email: string;
  name: string | null;
  createdAt: Date;
  entries: InterestEntry[];
  /** ISO-8601 of the most recent matching entry. The list sorts on this. */
  latestAt: string;
}

/** One line on the demand board. */
export interface InterestCount {
  /** The value to put in the querystring (course id, series slug, bundle slug, source). */
  key: string;
  label: string;
  /** Distinct PEOPLE, not entries. Two signups from one address is one person waiting. */
  leads: number;
}

/** Human labels for the inquiry sources actually in use. Unknown sources show their raw value. */
const SOURCE_LABELS: Record<string, string> = {
  [COURSE_NOTIFY_SOURCE]: "Waiting for a course",
  "explore-pricing": "Pricing enquiry",
  "coming-soon": "Coming-soon signup",
  home: "Homepage signup",
  signup: "Email signup",
};

export function sourceLabel(source: string): string {
  return SOURCE_LABELS[source] ?? source;
}

/** Normalize a raw searchParams value: empty string and "all" both mean "no filter". */
export function readFilter(raw: string | string[] | undefined): string | null {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (!v) return null;
  const t = v.trim();
  return t === "" || t === "all" ? null : t;
}

/** Flatten one lead into the entries the dashboard reasons about. */
export function entriesOf(lead: InterestLead): InterestEntry[] {
  const list = lead.inquiries ?? [];
  if (list.length === 0) {
    return [
      {
        source: lead.source ?? "signup",
        courseId: null,
        courseTitle: null,
        role: null,
        students: null,
        message: null,
        at: lead.createdAt.toISOString(),
        implicit: true,
      },
    ];
  }
  return list.map((q) => ({
    source: q.source,
    courseId: q.courseId ?? null,
    courseTitle: q.courseTitle ?? null,
    role: q.role ?? null,
    students: q.students ?? null,
    message: q.message ?? null,
    at: q.at,
    implicit: false,
  }));
}

/**
 * Which course ids the course/track/bundle filters select, or null for "do not narrow by course".
 *
 * Every branch resolves against the tenant-scoped `courses` / `bundles` the caller loaded, so a
 * course id or bundle slug belonging to another school (or simply mistyped) resolves to the EMPTY
 * set and the page shows its honest "no matches" state. It can never widen the result.
 *
 * Several filters at once intersect, so ?track=x&bundle=y means "in that track AND that bundle".
 */
export function resolveCourseIds(
  filters: InterestFilters,
  courses: InterestCourse[],
  bundles: InterestBundle[],
): Set<string> | null {
  const sets: Set<string>[] = [];

  if (filters.course) {
    sets.push(new Set(courses.filter((c) => c.id === filters.course).map((c) => c.id)));
  }
  if (filters.track) {
    sets.push(new Set(courses.filter((c) => c.seriesSlug === filters.track).map((c) => c.id)));
  }
  if (filters.bundle) {
    const b = bundles.find((x) => x.slug === filters.bundle);
    const owned = new Set(courses.map((c) => c.id));
    // Belt and braces: the membership query already joins through courses on tenant_id, but the
    // intersection with the tenant's own course list means a stale row could not widen this set.
    sets.push(new Set((b?.courseIds ?? []).filter((id) => owned.has(id))));
  }

  if (sets.length === 0) return null;
  return sets.reduce((acc, s) => new Set([...acc].filter((id) => s.has(id))));
}

/**
 * The filtered list: leads with at least one entry matching, carrying only the matching entries.
 * Newest activity first.
 */
export function filterInterest(input: {
  leads: InterestLead[];
  courses: InterestCourse[];
  bundles: InterestBundle[];
  filters: InterestFilters;
}): InterestRow[] {
  const courseIds = resolveCourseIds(input.filters, input.courses, input.bundles);
  const source = input.filters.source ?? null;

  const rows: InterestRow[] = [];
  for (const lead of input.leads) {
    const entries = entriesOf(lead).filter((e) => {
      if (source && e.source !== source) return false;
      if (courseIds && !(e.courseId && courseIds.has(e.courseId))) return false;
      return true;
    });
    if (entries.length === 0) continue;
    const latestAt = entries.reduce((a, e) => (e.at > a ? e.at : a), entries[0]!.at);
    rows.push({ email: lead.email, name: lead.name, createdAt: lead.createdAt, entries, latestAt });
  }
  rows.sort((a, b) => (a.latestAt < b.latestAt ? 1 : a.latestAt > b.latestAt ? -1 : 0));
  return rows;
}

/**
 * Distinct course ids one lead expressed interest in, restricted to courses the tenant still has.
 *
 * An entry naming a course that has since been deleted is dropped from the demand board rather
 * than counted under a title nothing can be filtered to. It still appears in the unfiltered list,
 * so the person is not hidden, only the dead tally line is.
 */
function leadCourseIds(lead: InterestLead, owned: Set<string>): Set<string> {
  const ids = new Set<string>();
  for (const e of entriesOf(lead)) {
    if (e.courseId && owned.has(e.courseId)) ids.add(e.courseId);
  }
  return ids;
}

function sortCounts(counts: InterestCount[]): InterestCount[] {
  return counts
    .filter((c) => c.leads > 0)
    .sort((a, b) => b.leads - a.leads || a.label.localeCompare(b.label));
}

/** People waiting, per course. Sorted by demand, descending. */
export function countByCourse(leads: InterestLead[], courses: InterestCourse[]): InterestCount[] {
  const owned = new Set(courses.map((c) => c.id));
  const tally = new Map<string, number>();
  for (const lead of leads) {
    for (const id of leadCourseIds(lead, owned)) tally.set(id, (tally.get(id) ?? 0) + 1);
  }
  return sortCounts(
    courses.map((c) => ({ key: c.id, label: c.title, leads: tally.get(c.id) ?? 0 })),
  );
}

/** People waiting, per learning track (series). One person counts once per track. */
export function countByTrack(leads: InterestLead[], courses: InterestCourse[]): InterestCount[] {
  const owned = new Set(courses.map((c) => c.id));
  const trackOf = new Map(courses.map((c) => [c.id, c.seriesSlug] as const));
  const titles = new Map<string, string>();
  for (const c of courses) {
    if (c.seriesSlug) titles.set(c.seriesSlug, c.seriesTitle ?? c.seriesSlug);
  }

  const tally = new Map<string, number>();
  for (const lead of leads) {
    const tracks = new Set<string>();
    for (const id of leadCourseIds(lead, owned)) {
      const t = trackOf.get(id);
      if (t) tracks.add(t);
    }
    for (const t of tracks) tally.set(t, (tally.get(t) ?? 0) + 1);
  }
  return sortCounts(
    [...titles].map(([slug, label]) => ({ key: slug, label, leads: tally.get(slug) ?? 0 })),
  );
}

/** People waiting, per bundle: anyone interested in ANY course the bundle contains. */
export function countByBundle(
  leads: InterestLead[],
  courses: InterestCourse[],
  bundles: InterestBundle[],
): InterestCount[] {
  const owned = new Set(courses.map((c) => c.id));
  const tally = new Map<string, number>();
  for (const lead of leads) {
    const ids = leadCourseIds(lead, owned);
    if (ids.size === 0) continue;
    for (const b of bundles) {
      if (b.courseIds.some((id) => ids.has(id))) tally.set(b.slug, (tally.get(b.slug) ?? 0) + 1);
    }
  }
  return sortCounts(
    bundles.map((b) => ({ key: b.slug, label: b.title, leads: tally.get(b.slug) ?? 0 })),
  );
}

/** People per inquiry source, so "wants this course" reads apart from "asked about pricing". */
export function countBySource(leads: InterestLead[]): InterestCount[] {
  const tally = new Map<string, number>();
  for (const lead of leads) {
    const sources = new Set(entriesOf(lead).map((e) => e.source));
    for (const s of sources) tally.set(s, (tally.get(s) ?? 0) + 1);
  }
  return sortCounts([...tally].map(([key, leads]) => ({ key, label: sourceLabel(key), leads })));
}

/** Build a /admin/leads querystring from a filter set. Empty filters give an empty string. */
export function interestQuery(filters: InterestFilters): string {
  const qs = new URLSearchParams();
  if (filters.course) qs.set("course", filters.course);
  if (filters.track) qs.set("track", filters.track);
  if (filters.bundle) qs.set("bundle", filters.bundle);
  if (filters.source) qs.set("source", filters.source);
  return qs.toString();
}
