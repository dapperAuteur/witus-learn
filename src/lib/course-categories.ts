// A course has ONE primary category (`courses.category`) and may also appear under a few more
// (`courses.additional_categories`). The primary is the one that decides where the course sorts in
// curriculum order, its social-card subtitle, the course graph and the pricing proposal; the extras
// only add places the course is FOUND. BAM asked for this on 2026-09-18 so a course like the Soul
// Train one can sit in both Careers & Media and Culture & History without being duplicated.
//
// Everything that writes the list goes through `normalizeAdditionalCategories`, so the seed, the
// settings form and a category rename cannot disagree about what a valid list looks like. Pure and
// server-free so it can be tested directly.

/** The most extra categories one course may carry. A course listed everywhere is listed nowhere. */
export const MAX_ADDITIONAL_CATEGORIES = 5;

/**
 * Clean a requested list of extra categories: trim each name, drop blanks, drop exact duplicates
 * (first one wins, so order is preserved), drop the course's own primary category (listing a course
 * twice in one category would double-count it), and cap the length.
 *
 * Names are matched exactly, never case-folded, because `course_categories.name` is compared exactly
 * everywhere else and a case-insensitive rule here would let "Civics" and "civics" drift apart.
 */
export function normalizeAdditionalCategories(
  primary: string | null | undefined,
  requested: readonly string[] | null | undefined,
): string[] {
  const main = primary?.trim() ?? "";
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of requested ?? []) {
    const name = raw.trim();
    if (!name || name === main || seen.has(name)) continue;
    seen.add(name);
    out.push(name);
    if (out.length === MAX_ADDITIONAL_CATEGORIES) break;
  }
  return out;
}

interface CategorisedCourse {
  category: string | null;
  additionalCategories?: readonly string[] | null;
}

/** Every category a course appears under, primary first, with no duplicates or blanks. */
export function courseCategoryNames(course: CategorisedCourse): string[] {
  const primary = course.category?.trim() || null;
  const extra = normalizeAdditionalCategories(primary, course.additionalCategories);
  return primary ? [primary, ...extra] : extra;
}

/** Whether a course is listed under `name`, as its primary category or as an additional one. */
export function isInCategory(course: CategorisedCourse, name: string): boolean {
  return courseCategoryNames(course).includes(name.trim());
}

/**
 * Apply a category RENAME to one course's extra list, keeping it valid. The rename may collide with
 * the primary (a course whose primary is "A" and extras ["B"], after renaming B to A) or with another
 * extra, and normalising removes both. Returns null when nothing changed, so a caller can skip the
 * write.
 */
export function renameInAdditional(
  primary: string | null,
  additional: readonly string[],
  oldName: string,
  newName: string,
): string[] | null {
  if (!additional.includes(oldName)) return null;
  const next = normalizeAdditionalCategories(
    primary,
    additional.map((n) => (n === oldName ? newName : n)),
  );
  const unchanged = next.length === additional.length && next.every((n, i) => n === additional[i]);
  return unchanged ? null : next;
}
