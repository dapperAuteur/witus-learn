// Bulk "Set navigation: CYOA / Linear" on /teach (BAM, 2026-11-04: "can I convert multiple courses at once to
// CYOA?"). Shared by POST /api/courses/bulk-navigation and the catalog's bulk bar, so the result shape and the
// summary can't drift. Pure: no database, no server-only imports.

export type NavigationMode = "linear" | "cyoa";

/** At most this many courses per request: a whole catalog page "Select all shown", with room to spare. */
export const BULK_NAVIGATION_MAX = 500;

export type BulkNavigationStatus = "updated" | "unchanged" | "not-found" | "forbidden" | "failed";

export interface BulkNavigationResult {
  courseId: string;
  status: BulkNavigationStatus;
  /** Present only when the caller may edit the course (a refusal names nothing it could not already see). */
  title?: string;
  /** CYOA only: published lessons, and how many still need a crossroads embedding. */
  crossroads?: { published: number; stale: number };
}

export interface BulkNavigationSummary {
  updated: number;
  unchanged: number;
  refused: number;
  failed: number;
  /** CYOA courses (updated or already CYOA) with at least one published lesson that needs an embedding. */
  coursesNeedingCrossroads: number;
  lessonsNeedingCrossroads: number;
}

export function summarizeBulkNavigation(results: readonly BulkNavigationResult[]): BulkNavigationSummary {
  const out: BulkNavigationSummary = {
    updated: 0,
    unchanged: 0,
    refused: 0,
    failed: 0,
    coursesNeedingCrossroads: 0,
    lessonsNeedingCrossroads: 0,
  };
  for (const r of results) {
    if (r.status === "updated") out.updated++;
    else if (r.status === "unchanged") out.unchanged++;
    else if (r.status === "failed") out.failed++;
    else out.refused++;
    if (r.crossroads && r.crossroads.stale > 0) {
      out.coursesNeedingCrossroads++;
      out.lessonsNeedingCrossroads += r.crossroads.stale;
    }
  }
  return out;
}

/** Run `fn` over `items` with at most `limit` in flight, keeping input order. */
export async function mapLimit<T, R>(items: readonly T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out = new Array<R>(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await fn(items[i]);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return out;
}

/** The paced backfill that embeds every CYOA course's missing lessons (OPERATING.md 3c). */
export const CROSSROADS_BACKFILL_COMMAND =
  "gh workflow run seed-production.yml --repo dapperAuteur/witus-learn --ref main -f seed=false -f rag=none -f cyoa=needing";
export const CROSSROADS_BACKFILL_URL = "https://github.com/dapperAuteur/witus-learn/actions/workflows/seed-production.yml";
