// Media batch: BVC episodes (stage 10 of plans/63). The first batch to go through the FIGURE
// SIDECAR rather than into a lesson body.
//
// Every file below was opened and LOOKED AT before its alt text was written.
//
// ── WHY THESE TARGETS CARRY `csv` ────────────────────────────────────────────────────────────────
// A BVC episode has no committed course file: its lessons come from content/bvc/*.csv, which is
// gitignored. So the uploader validates the lesson against the CSV, computing the slug exactly as
// scripts/seed-bvc-real.ts does. That check matters more here than anywhere else, because these
// figures are declared in src/lib/course-figures.ts and matched at seed time: a wrong slug does not
// error, it simply never matches, and the image never appears.
//
// ── WHY BOTANICAL PLATES, AND WHY THIS IS NOT LAZINESS ───────────────────────────────────────────
// Köhler's Medizinal-Pflanzen (1887) covers very nearly every commodity BVC is about: tea, cane,
// tobacco, coca, cacao, coffee. It is public domain, it is consistent, and it is the right register
// for this catalog for a specific reason.
//
// Several of these episodes are about substances, and half of them are age-gated. The obvious
// alternative imagery is product photography, which for tobacco or coca would be either an
// advertisement or a drug-scare picture, and both would editorialise in a way the courses do not. A
// botanical plate says: this is a plant, here is its structure, look at it. That is exactly the
// stance the BVC episodes take before they get to the trade and the harm.
//
// A CAUTION FOR WHOEVER EXTENDS THIS. The plates are period documents. Köhler's series exists
// because these plants were commercially and pharmacologically interesting to European medicine in
// 1887, which is itself part of the story these episodes tell. Do not present a plate as neutral
// nature illustration when the reason it was drawn is the subject of the lesson beside it.

export const batch = "bvc-episodes";

export const targets = [
  {
    commons: "File:Camellia sinensis - Köhler–s Medizinal-Pflanzen-025.jpg",
    course: "tea",
    csv: "tea",
    lesson: "l3-the-tea-plant-and-its-climate-zones",
    name: "camellia-sinensis-kohler-plate",
    alt: "A colour botanical plate headed Ternstroemiaceae showing a tea branch: pointed dark green leaves with finely toothed edges, several white flowers with dense yellow stamens at their centres, and tight round buds. Around the margins are enlarged studies of single stamens, a flower cut lengthways, a young fruit in cross-section, and a woody three-lobed seed capsule shown closed and split open with seeds inside.",
    caption:
      "Every kind of tea in this episode, green, black, oolong, white, comes from this one species. What separates them is not the plant but what happens to the leaf in the hours after it is picked. Note the seed capsule at the lower right: tea is a camellia, and a close relative of the ornamental in a hundred front gardens.",
  },
  {
    commons: "File:Saccharum officinarum - Köhler–s Medizinal-Pflanzen-125.jpg",
    course: "sugar",
    csv: "sugar",
    lesson: "l3-two-plants-one-sweetness",
    name: "saccharum-officinarum-kohler-plate",
    alt: "A colour botanical plate of sugarcane. Two very long strap-shaped leaves arch across the image with a pale midrib. Behind them stand jointed canes topped with feathery flowering plumes, one pink and one silver-grey. At the right is a length of cut cane showing its banded joints and pale cut end, and along the bottom are small studies of individual florets and seeds.",
    caption:
      "This is one of the two plants in the lesson's title, and it is a giant grass. The other, sugar beet, is a root that looks nothing like it and grows where this cannot. Two entirely unrelated plants were bred toward the same molecule, and which one a place grew decided a great deal about who worked there and under what terms.",
  },
];
