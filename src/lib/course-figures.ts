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
 * Every entry here was uploaded and rights-checked by scripts/upload-course-media.mjs, whose
 * manifest under scripts/data/media/ carries the full provenance and feeds /admin/media. The lesson
 * slugs were validated against the actual CSVs at upload time, because a slug that matches nothing
 * does not error: it simply never renders. See `unmatchedFigureKeys` below.
 */
export const COURSE_FIGURES: CourseFigureMap = {
  // BVC episodes (stage 10 of plans/63). Declared here rather than inline because these lesson
  // bodies come from gitignored CSVs, so an inline credit would never reach git.
  tea: {
    "l3-the-tea-plant-and-its-climate-zones": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786418888/witus/courses/bvc-episodes/tea/camellia-sinensis-kohler-plate.jpg",
        alt:
          "A colour botanical plate headed Ternstroemiaceae showing a tea branch: pointed dark green leaves with finely toothed edges, several white flowers with dense yellow stamens at their centres, and tight round buds. Around the margins are enlarged studies of single stamens, a flower cut lengthways, a young fruit in cross-section, and a woody three-lobed seed capsule shown closed and split open with seeds inside.",
        caption:
          "Every kind of tea in this episode, green, black, oolong, white, comes from this one species. What separates them is not the plant but what happens to the leaf in the hours after it is picked. Note the seed capsule at the lower right: tea is a camellia, and a close relative of the ornamental in a hundred front gardens.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Camellia sinensis - Köhler–s Medizinal-Pflanzen-025.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Camellia_sinensis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-025.jpg",
      },
    ],
  },
  sugar: {
    "l3-two-plants-one-sweetness": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786418888/witus/courses/bvc-episodes/sugar/saccharum-officinarum-kohler-plate.jpg",
        alt:
          "A colour botanical plate of sugarcane. Two very long strap-shaped leaves arch across the image with a pale midrib. Behind them stand jointed canes topped with feathery flowering plumes, one pink and one silver-grey. At the right is a length of cut cane showing its banded joints and pale cut end, and along the bottom are small studies of individual florets and seeds.",
        caption:
          "This is one of the two plants in the lesson's title, and it is a giant grass. The other, sugar beet, is a root that looks nothing like it and grows where this cannot. Two entirely unrelated plants were bred toward the same molecule, and which one a place grew decided a great deal about who worked there and under what terms.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Saccharum officinarum - Köhler–s Medizinal-Pflanzen-125.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Saccharum_officinarum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-125.jpg",
      },
    ],
  },
};

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
