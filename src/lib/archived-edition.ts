// Archived course editions (plans/101 section 5, approved by BAM 2026-11-25).
//
// When a course is rebuilt under the course method, the old course is not deleted and not hidden: it
// is ARCHIVED. It stays readable for everyone who enrolled, says plainly why it was replaced, points
// at the replacement, and stops taking new learners. These helpers are the one place that decides
// what "archived" means to the rest of the app; they are pure so the unit suite can pin them down
// without a database. Writing the state is src/lib/archive-course.ts.

/** The three columns migration 0086 added to `courses`. */
export interface ArchivedFields {
  archivedAt: Date | null;
  archivedReason: string | null;
  supersededByCourseId: string | null;
}

/** True when the course is an archived edition. `archived_at` alone is the flag: the reason and the
 *  replacement are information about the archive, not conditions of it. */
export function isArchived(course: { archivedAt: Date | string | null | undefined }): boolean {
  return course.archivedAt != null;
}

/**
 * The default label, word for word from plan 101 section 5. The two placeholders are filled when the
 * course is archived, so the stored text names the replacement by title and the date its sources
 * packet was approved for building. Stored, not computed at render time: the title of the replacement
 * can change later, and the banner should keep saying what was true when the edition was archived.
 */
export const DEFAULT_ARCHIVED_REASON_TEMPLATE =
  "Archived edition. This course was built before Learn.WitUS adopted its course method (sources approved before writing, every claim checked, standards per lesson). It stays readable for learners who enrolled, but it is no longer maintained. The replacement is <title>, built from an approved sources packet on <date>.";

/** `date` renders as an ISO calendar date (2026-11-25), the form the rest of the app's dates use. */
export function defaultArchivedReason(input: { replacementTitle: string; date: Date }): string {
  return DEFAULT_ARCHIVED_REASON_TEMPLATE.replace("<title>", input.replacementTitle).replace(
    "<date>",
    formatArchiveDate(input.date),
  );
}

/** Calendar date in UTC, so the stored text does not depend on the laptop or runner that archived. */
export function formatArchiveDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * Slug rule (a): the replacement takes the canonical slug and the old course moves to
 * `<slug>-archived-<year>`. Links, standards claims and series pages that name the canonical slug
 * keep working and now reach the maintained course; the archived edition stays reachable at the
 * new address and from the course page's "earlier edition" note.
 */
export function archivedSlug(slug: string, now: Date): string {
  return `${slug}-archived-${now.getUTCFullYear()}`;
}

/** The server's answer to a new enrollment on an archived edition (409). Names the replacement when
 *  one is set, so the message is an instruction rather than a dead end. */
export function archivedEnrollmentMessage(replacementTitle: string | null | undefined): string {
  const base = "This is an archived edition and takes no new enrollments.";
  return replacementTitle ? `${base} Take ${replacementTitle} instead.` : base;
}

/**
 * A series page lists the maintained courses in the main groups and the archived ones under
 * "Earlier edition". Order within each half is the caller's (the page sorts by series_order first),
 * so this only partitions.
 */
export function splitSeriesEditions<T extends { archivedAt: Date | string | null }>(
  courses: readonly T[],
): { current: T[]; earlier: T[] } {
  const current: T[] = [];
  const earlier: T[] = [];
  for (const c of courses) (isArchived(c) ? earlier : current).push(c);
  return { current, earlier };
}
