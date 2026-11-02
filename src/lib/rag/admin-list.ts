import type { CourseIndexState } from "./index-course";

// PURE: what /admin/rag lists. The courses needing a run (never indexed, or changed since) come first
// as rows; current and empty courses are only counted. Kept apart from the page so it is unit-tested
// and so the client component receives plain strings, not Dates.

export interface RagAdminRow {
  courseId: string;
  title: string;
  courseSlug: string;
  tenantName: string;
  tenantSlug: string;
  isPublished: boolean;
  reason: "never" | "changed";
  /** ISO string, or null when the course was never indexed. */
  indexedAt: string | null;
  chunkCount: number;
}

export function ragAdminRows(states: readonly CourseIndexState[]): { rows: RagAdminRow[]; current: number; empty: number } {
  const rows: RagAdminRow[] = [];
  let current = 0;
  let empty = 0;
  for (const s of states) {
    if (s.state === "current") current++;
    else if (s.state === "empty") empty++;
    else
      rows.push({
        courseId: s.courseId,
        title: s.title,
        courseSlug: s.courseSlug,
        tenantName: s.tenantName,
        tenantSlug: s.tenantSlug,
        isPublished: s.isPublished,
        reason: s.state,
        indexedAt: s.indexedAt ? new Date(s.indexedAt).toISOString() : null,
        chunkCount: s.chunkCount,
      });
  }
  // Published courses first (a learner can open their chat), then never-indexed before changed.
  rows.sort(
    (a, b) =>
      Number(b.isPublished) - Number(a.isPublished) ||
      (a.reason === b.reason ? 0 : a.reason === "never" ? -1 : 1) ||
      a.tenantName.localeCompare(b.tenantName) ||
      a.title.localeCompare(b.title),
  );
  return { rows, current, empty };
}

export const REASON_LABEL: Record<RagAdminRow["reason"], string> = {
  never: "Never indexed",
  changed: "Changed since indexed",
};
