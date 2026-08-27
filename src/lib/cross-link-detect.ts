// What counts as one course MENTIONING another, and as already LINKING to it.
//
// Extracted from scripts/find-cross-links.ts so the offline report and the database-backed
// generator (`pnpm gen:cross-links`) apply exactly the same rules. Two producers with two slightly
// different definitions of "a mention" would give the owner a queue that disagrees with the report
// he is reading beside it, and neither would be wrong enough to notice.
//
// FALSE POSITIVES ARE THE FAILURE MODE, not false negatives. A queue that cries wolf gets clicked
// through, and a rubber-stamped queue is worse than no queue: it converts "nobody reviewed this"
// into "somebody approved this". Every rule below trades recall for precision, and each one was
// measured on the catalog before it was kept.
//
// Pure and free of node APIs so the generator, a server component and a unit test can all use it.

/** A title shorter than this is too generic to match on without drowning the queue in noise. */
export const MIN_TITLE_WORDS = 2;

/**
 * A SINGLE-WORD slug like "acting" or "tennis" is an ordinary English word, and substring-matching
 * it reports every "acting on" and "interacting" in the catalog. Measured on the first run of the
 * report: single-word slugs produced most of the noise and none of the useful hits. So a slug is
 * matched only when it is multi-part, and then only on a word boundary. Titles are unaffected, since
 * a two-word-minimum title is already specific.
 */
export function slugIsDistinctive(slug: string): boolean {
  return slug.includes("-");
}

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export interface CrossLinkTargetCourse {
  slug: string;
  title: string;
}

/** The courses worth looking for. A one-word title matches too much to be evidence of anything. */
export function eligibleTargets(
  courses: readonly CrossLinkTargetCourse[],
): CrossLinkTargetCourse[] {
  return courses.filter(
    (c) => c.slug && c.title.trim().split(/\s+/).length >= MIN_TITLE_WORDS,
  );
}

/**
 * The pattern that finds a mention of one course in another's prose.
 *
 * Titles are matched CASE-SENSITIVELY on purpose. A title like "The Match" is ordinary English, and
 * matching it case-insensitively reported every tennis and football lesson that said "the match".
 * Prose referring to another course capitalises its name; prose using the same words as words does
 * not. Measured: this alone removed 40 false pairs and cost no real one.
 */
export function mentionPattern(target: CrossLinkTargetCourse, via: "title" | "slug"): RegExp {
  if (via === "title") return new RegExp(escapeRegExp(target.title));
  return new RegExp(`(^|[^a-z0-9-])${escapeRegExp(target.slug)}([^a-z0-9-]|$)`, "i");
}

/** Every markdown link target in the text, lowercased. */
export function linkTargets(text: string): string {
  return (text.match(/\]\(([^)]*)\)/g) ?? []).join(" ").toLowerCase();
}

export interface DetectedMention {
  targetSlug: string;
  targetTitle: string;
  via: "title" | "slug";
}

/**
 * The courses this lesson talks about and does not already link to.
 *
 * A mention that sits anywhere inside a markdown link target in the same lesson is satisfied and is
 * not reported: the app builds course URLs several ways (/course/<id>, /{username}/{slug},
 * /series/<slug>), so the slug appearing in any of them means the connection is already made.
 */
export function detectMentions(
  lessonText: string,
  sourceCourseSlug: string,
  targets: readonly CrossLinkTargetCourse[],
): DetectedMention[] {
  const links = linkTargets(lessonText);
  const out: DetectedMention[] = [];
  for (const t of targets) {
    if (t.slug === sourceCourseSlug) continue;
    if (links.includes(t.slug)) continue;
    const byTitle = mentionPattern(t, "title").test(lessonText);
    const bySlug = slugIsDistinctive(t.slug) && mentionPattern(t, "slug").test(lessonText);
    if (!byTitle && !bySlug) continue;
    out.push({ targetSlug: t.slug, targetTitle: t.title, via: byTitle ? "title" : "slug" });
  }
  return out;
}
