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
  opioids: {
    "l3-where-the-poppy-grows": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786444281/witus/courses/bvc-episodes-2/opioids/papaver-somniferum-kohler-plate.jpg",
        alt:
          "A colour botanical plate of the opium poppy. A large white flower with a pink-flushed centre and a separate scarlet flower are shown open, alongside a nodding unopened bud on a bristly stalk and a stem with deeply lobed grey-green leaves clasping it. At the lower left are two seed capsules, one whole with a flat ridged crown on top and one cut open, plus a cross-section showing the ringed chambers inside and scattered tiny seeds.",
        caption:
          "Look at the capsules at the lower left rather than at the flowers. That ridged pod is the entire commercial object: scored while green, it weeps a latex, and everything the rest of this episode describes follows from that one property of one seed head.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Papaver somniferum - Köhler–s Medizinal-Pflanzen-102.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Papaver_somniferum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-102.jpg",
      },
    ],
  },
  coca: {
    "l3-the-yungas": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786444282/witus/courses/bvc-episodes-2/coca/erythroxylum-coca-kohler-plate.jpg",
        alt:
          "A colour botanical plate of the coca shrub. Two slender woody branches carry smooth oval leaves arranged alternately, with clusters of very small greenish-white flowers where the leaves meet the stem. Around the edges are enlarged studies: an opened flower, its stamens fused into a tube, a cross-section of the ovary, and a single smooth brown seed.",
        caption:
          "This is the plant, and it is worth registering how ordinary it looks. A modest shrub with small leaves and flowers you would walk past. Everything that separates the leaf chewed in the Yungas from the powder in the later lessons is done to it afterward, by industry, and none of it is visible here.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Erythroxylum coca - Köhler–s Medizinal-Pflanzen-204.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Erythroxylum_coca_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-204.jpg",
      },
    ],
  },
  tobacco: {
    "l3-the-tobacco-belt": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786444283/witus/courses/bvc-episodes-2/tobacco/nicotiana-tabacum-kohler-plate.jpg",
        alt:
          "A colour botanical plate of tobacco. A single stout stem carries very large pointed leaves that clasp it directly, and is topped by a cluster of long trumpet-shaped flowers, pale at the base and flaring to deep pink at the mouth. Smaller studies show a flower cut lengthways, a green seed capsule whole and split, and a scatter of extremely small dark seeds.",
        caption:
          "The leaves are the crop, and their size is the reason this plant shaped a labour system. Each one is picked, cured, graded and handled individually, by hand, over months. Note the seeds at the lower left too: they are nearly dust, which is why tobacco is started in seedbeds and transplanted rather than sown where it will grow.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Nicotiana tabacum - Köhler–s Medizinal-Pflanzen-098.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Nicotiana_tabacum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-098.jpg",
      },
    ],
  },
  cannabis: {
    "l3-born-in-the-mountains": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786444283/witus/courses/bvc-episodes-2/cannabis/cannabis-sativa-kohler-plate.jpg",
        alt:
          "A colour botanical plate of cannabis. Two shoots are shown side by side: the left carries loose drooping sprays of small pale flowers, the right carries dense leafy clusters with rounded green seed cases among them. Both bear the familiar palmate leaves of five to seven narrow toothed leaflets. Along the bottom are enlarged studies of a seed whole, in cross-section and germinating.",
        caption:
          "The two shoots at the top are the point: this species is usually dioecious, so the drooping pollen sprays on the left and the seed-bearing clusters on the right grow on separate plants. That single botanical fact governs how the crop is grown, whether for fibre or for resin, and it is the reason the two industries in this episode diverge so early.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Cannabis sativa - Köhler–s Medizinal-Pflanzen-026.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Cannabis_sativa_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-026.jpg",
      },
    ],
  },
  beer: {
    "l3-the-grain-belt-and-the-hop-belt": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786444284/witus/courses/bvc-episodes-2/beer/humulus-lupulus-kohler-plate.jpg",
        alt:
          "A colour botanical plate of the hop. A twining stem carries large lobed leaves with toothed edges, and at the right hangs a cluster of pale green cones built from overlapping papery scales. At the upper right is a loose spray of small greenish male flowers. Enlarged studies around the margins show a single scale, the tiny resin glands at its base, and a seed whole and in section.",
        caption:
          "The cones on the right are what the hop belt exists for. Look at the enlarged scale near the bottom edge and the small glands at its base: that resin is both the bitterness and a preservative, and it is why beer could survive a voyage. Grain decides where beer is possible; this decides how far it can travel.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Humulus lupulus - Köhler–s Medizinal-Pflanzen-072.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Humulus_lupulus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-072.jpg",
      },
    ],
  },
  wine: {
    "l3-the-wine-belt-where-grapes-grow": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786444285/witus/courses/bvc-episodes-2/wine/vitis-vinifera-kohler-plate.jpg",
        alt:
          "A colour botanical plate of the grapevine. On the left a woody cane carries broad lobed leaves, one turning yellow, and an upright spray of tiny green unopened flowers. On the right a bunch of pale green grapes hangs from a cane beside coiling tendrils. Smaller studies show a flower with its cap lifting off, a grape cut across to reveal the seeds, and single seeds from several angles.",
        caption:
          "Two states of the same cane, side by side: flowering on the left, fruit on the right. The tendrils matter more than they look. This is a climbing plant that in the wild grows up trees toward light, and every trellis, every pruning system and every vineyard row in the rest of this episode is an argument with that habit.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Vitis vinifera - Köhler–s Medizinal-Pflanzen-145.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Vitis_vinifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-145.jpg",
      },
    ],
  },
  sake: {
    "l5-the-rice-wine-belt-of-asia": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786445991/witus/courses/bvc-episodes-3/sake/oryza-sativa-kohler-plate.jpg",
        alt:
          "A colour botanical plate of the rice plant. A clump of upright grassy stems with long narrow leaves rises from a dense mass of fine white roots. At the right hangs a heavy golden seed head, its grains ripe and bending the stalk over. Enlarged studies around the edges show a single flower opened to reveal six yellow stamens, individual grains husked and unhusked, and a grain cut lengthways to show the white starch inside.",
        caption:
          "Look at the roots and then at the grain. The dense fibrous root mass is what lets rice stand in flooded ground where other cereals drown, and the flooding is the whole reason for the paddy landscape this episode maps. The cut grain at the lower right is the other half of the story: that white starch is what the mould in the previous lesson converts to sugar.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Oryza sativa - Köhler–s Medizinal-Pflanzen-232.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Oryza_sativa_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-232.jpg",
      },
    ],
  },
  chocolate: {
    "l3-the-cacao-tree-and-the-narrowest-belt": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786445992/witus/courses/bvc-episodes-3/chocolate/theobroma-cacao-kohler-plate-bvc.jpg",
        alt:
          "A colour botanical plate of cacao. Two very large oval leaves dominate the centre. At the upper left, a thick woody branch carries small pale pink and cream flowers growing directly out of the bark rather than from twigs or leaf joints. Around the edges are enlarged studies of a single flower, its parts separated, stamens, and a seed shown whole and in cross-section.",
        caption:
          "This lesson is about how narrow the growing belt is, and the plant explains part of it. Cacao is an understorey tree of wet tropical forest: it wants shade, steady heat and constant moisture, and it will not tolerate a dry season or a cool night. The band of the world that offers all of that at once is thin, and it is why the map in this lesson looks the way it does.",
        credit:
          "Franz Eugen Köhler, Köhler's Medizinal-Pflanzen. Theobroma cacao - Köhler–s Medizinal-Pflanzen-136.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Theobroma_cacao_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-136.jpg",
      },
    ],
  },
  coffee: {
    "l3-the-coffee-belt-where-coffee-grows-and-why": [
      {
        url: "https://res.cloudinary.com/devdash54321/image/upload/v1786445993/witus/courses/bvc-episodes-3/coffee/coffea-arabica-kohler-plate-bvc.jpg",
        alt:
          "A colour botanical plate of a coffee branch headed Rubiaceae and captioned Coffea arabica L. The branch carries long glossy dark green leaves in opposite pairs, clusters of white five-petalled flowers at the leaf joints, and oval fruits ripening from green to dark red. Along the lower edge are enlarged studies: a flower opened out, stamens, a cross-section of a fruit showing two seeds face to face, and two whole beans.",
        caption:
          "The fruits on the branch are the reason the belt is where it is. They ripen unevenly, a few at a time on the same branch, so the crop has to be picked over and over by hand across a season. That labour demand, not the climate alone, shaped who grew coffee and under what arrangements, which is where this episode goes next.",
        credit:
          "Köhler. Coffea arabica -Köhler.jpg. Public domain. Via Wikimedia Commons. https://commons.wikimedia.org/wiki/File:Coffea_arabica_-K%C3%B6hler.jpg",
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
