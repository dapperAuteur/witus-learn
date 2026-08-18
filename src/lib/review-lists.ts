// Summary lines for the two collapsed verification boards: /admin/citations (list A, every source in
// a staged course) and /admin/research (list B, the hand-written source checks). Both pages used to
// render every item of every course expanded, which at 675 citations is a page nobody scrolls to the
// bottom of, so each course is now a collapsed <details>.
//
// Collapsing hides work, so the summary line has to carry the queue: the count of items and, when a
// group still has unresolved ones, how many. "12 sources, 3 unverified" tells a verifier which course
// to open without opening any of them; "12 sources, all checked" says this one is done.
//
// Pure functions over counts, no React and no data access, so both a server component and a client
// component can use them and the wording is tested rather than eyeballed.

export interface ReviewCounts {
  /** Items in the group. */
  total: number;
  /** Items still needing attention (unverified citations, open checks). */
  open: number;
}

/** Count a group's items and how many of them are still open, in one pass. */
export function countReviewGroup<T>(items: readonly T[], isOpen: (item: T) => boolean): ReviewCounts {
  let open = 0;
  for (const item of items) if (isOpen(item)) open += 1;
  return { total: items.length, open };
}

function plural(n: number, one: string, many: string): string {
  return `${n} ${n === 1 ? one : many}`;
}

/**
 * Summary text for a course on /admin/citations and /audit/citations.
 * "12 sources, 3 unverified" · "12 sources, all checked" · "no sources extracted yet".
 */
export function citationGroupSummary(counts: ReviewCounts): string {
  if (counts.total === 0) return "no sources extracted yet";
  const items = plural(counts.total, "source", "sources");
  return counts.open === 0 ? `${items}, all checked` : `${items}, ${counts.open} unverified`;
}

/**
 * Summary text for a course on /admin/research.
 * "5 checks, 3 open" · "5 checks, all answered".
 */
export function researchGroupSummary(counts: ReviewCounts): string {
  if (counts.total === 0) return "no checks filed";
  const items = plural(counts.total, "check", "checks");
  return counts.open === 0 ? `${items}, all answered` : `${items}, ${counts.open} open`;
}

/**
 * Whether a group starts expanded.
 *
 * Only when it is the ONLY group on the page and it still has open work: a one-course board that
 * collapses to a single line is a page that looks empty and costs a click for nothing (the invited
 * auditor at /audit/citations usually holds exactly one grant). With two or more groups, everything
 * starts closed, because opening "the ones with open work" on a board where 600 of 675 citations are
 * unverified expands the whole page and gives back the problem being fixed. The counts in each
 * summary line are what keeps the queue visible instead.
 */
export function reviewGroupStartsOpen(counts: ReviewCounts, groupCount: number): boolean {
  return groupCount === 1 && counts.open > 0;
}
