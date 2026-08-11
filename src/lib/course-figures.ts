// The figure SIDECAR: how a course whose lesson bodies are not in this repository can still carry
// images, credits and provenance that live in git.
//
// ── THE PROBLEM (plans/63 §4c, decision task 248) ────────────────────────────────────────────────
//
// Most courses are committed data modules, so a `:::figure` line sits in the same file as the lesson
// it belongs to and is reviewed in the same diff. The BVC episodes are not: their bodies come from
// `content/bvc/*.csv`, and `/content/` is gitignored. Writing a figure into a CSV would put the
// image URL, the alt text and above all the CREDIT somewhere that
//
//   · never appears in a diff, so no reviewer ever sees the rights claim,
//   · exists on one machine, and
//   · is destroyed the next time the CSV is regenerated.
//
// This catalog's whole trust position is that it can account for every image it publishes. An
// untracked credit is not an inconvenience, it is the discipline quietly not applying to the largest
// course family we have.
//
// ── THE SHAPE ────────────────────────────────────────────────────────────────────────────────────
//
// Figures are declared HERE, keyed by course slug and lesson slug, and merged into the lesson body
// at seed time. The lesson text stays wherever it lives; the image and its provenance stay in git.
//
// This is deliberately not BVC-specific. FAA, the languages and the health courses are all seeded
// from generated or gitignored sources and have the same gap the day anyone wants a figure in them.
//
// ── WHY LESSON SLUGS ARE SAFE TO KEY ON ──────────────────────────────────────────────────────────
//
// scripts/seed-bvc-real.ts derives a BVC lesson slug deterministically from the CSV row:
// `l{lesson_order}-{slugify(title)}`, truncated to 90 characters (and `quiz-{lesson_order}` for a
// quiz). So the key is stable across re-seeds and computable without the CSV in hand. If a lesson's
// TITLE is edited the slug changes and its figure silently stops applying, which is why
// `unmatchedFigureKeys` exists and why the seeder reports it rather than failing quietly.

/** One image, declared away from its lesson. Same four fields as an inline `:::figure`. */
export interface CourseFigure {
  /** Cloudinary URL, as produced by scripts/upload-course-media.mjs. */
  url: string;
  /** What the image SHOWS, for a reader who cannot see it. Never the caption. */
  alt: string;
  /** What to look at and why it is in this lesson. Visible to everyone. */
  caption: string;
  /** Creator, title, licence, source. Required, and the reason this file has to be in git. */
  credit: string;
}

/** courseSlug -> lessonSlug -> figures, in the order they should appear. */
export type CourseFigureMap = Record<string, Record<string, CourseFigure[]>>;

/**
 * Declared figures for courses whose bodies are not committed.
 *
 * EMPTY BY DESIGN until BAM answers task 248 and the first BVC batch is sourced. The plumbing ships
 * first so the images have somewhere durable to land, rather than sourcing images against storage
 * that cannot hold them.
 */
export const COURSE_FIGURES: CourseFigureMap = {};

/** Render one figure as the `:::figure` directive line the lesson renderer already understands. */
export function figureLine(f: CourseFigure): string {
  return `:::figure ${f.url} ||| ${f.alt} ||| ${f.caption} ||| ${f.credit}`;
}

/**
 * Merge any declared figures into a lesson body, after its FIRST paragraph.
 *
 * After the first paragraph rather than at the top, because a lesson should open in its own voice:
 * an image before a single line of text gives the reader a picture with nothing to read it against.
 * That is also where every hand-placed figure in the committed courses sits, so the two paths agree.
 *
 * Returns the body unchanged when nothing is declared, so it is safe to call on every lesson.
 */
export function withFigures(
  courseSlug: string,
  lessonSlug: string,
  body: string | undefined,
  figures: CourseFigureMap = COURSE_FIGURES,
): string | undefined {
  const declared = figures[courseSlug]?.[lessonSlug];
  if (!declared?.length || !body) return body;
  const block = declared.map(figureLine).join("\n\n");
  const split = body.indexOf("\n\n");
  // A one-paragraph body has nowhere "after the first paragraph" to be, so append.
  if (split === -1) return `${body}\n\n${block}`;
  return `${body.slice(0, split)}\n\n${block}${body.slice(split)}`;
}

/**
 * Figure keys that matched no lesson in a seed run: `courseSlug/lessonSlug`.
 *
 * The failure this catches is invisible otherwise. A figure declared against a lesson slug that no
 * longer exists (because the lesson's title changed, so its derived slug changed) does not error. It
 * simply never renders, and the image looks like it was never added. The seeder prints this list.
 */
export function unmatchedFigureKeys(
  courseSlug: string,
  seededLessonSlugs: readonly string[],
  figures: CourseFigureMap = COURSE_FIGURES,
): string[] {
  const declared = figures[courseSlug];
  if (!declared) return [];
  const present = new Set(seededLessonSlugs);
  return Object.keys(declared)
    .filter((slug) => !present.has(slug))
    .map((slug) => `${courseSlug}/${slug}`);
}
