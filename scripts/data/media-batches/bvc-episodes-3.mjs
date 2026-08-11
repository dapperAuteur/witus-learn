// Media batch: BVC episodes, third run (stage 10 of plans/63). Three plates, through the sidecar.
// Every one was opened and LOOKED AT before its alt text was written.
//
// ── A CORRECTION TO PLANS/63 ─────────────────────────────────────────────────────────────────────
// After the second batch I wrote that Köhler's Medizinal-Pflanzen "covers very nearly every
// commodity the episodes are about", and proposed finishing all nineteen from that one seam. That
// was too confident. Köhler is a European MEDICAL catalogue, so its coverage tracks what interested
// European pharmacy in 1887, and it thins out fast beyond that:
//
//   · KAVA (Piper methysticum)  not in the series. Searches return unrelated German floras.
//   · KHAT (Catha edulis)       not in the series.
//   · BARLEY (Hordeum vulgare)  not in the series, so whiskey has no plate from here.
//
// That absence is not a gap in the archive so much as a fact about the archive, and it is the same
// point the batch-2 header made from the other side: what Köhler drew tells you what Europe was
// paying attention to. Kava and khat were not commodities European medicine traded in. Barley was
// too ordinary to need a plate.
//
// So the remaining episodes need a different source per commodity rather than one seam, which is
// slower and is the honest position. Recorded here so nobody repeats the search expecting a hit.
//
// ── ON REUSING TWO PLATES ────────────────────────────────────────────────────────────────────────
// The cacao and coffee plates already appear in the SOMMELIER courses. Using them again here is
// deliberate, not an oversight: they are the canonical botanical illustrations of those species and
// there is no better one. The captions are written to different questions, because the courses ask
// different ones. The episode asks where a commodity comes from and who grew it; the sommelier
// course asks what the taster is tasting.

export const batch = "bvc-episodes-3";

export const targets = [
  {
    commons: "File:Oryza sativa - Köhler–s Medizinal-Pflanzen-232.jpg",
    course: "sake",
    csv: "sake",
    lesson: "l5-the-rice-wine-belt-of-asia",
    name: "oryza-sativa-kohler-plate",
    alt: "A colour botanical plate of the rice plant. A clump of upright grassy stems with long narrow leaves rises from a dense mass of fine white roots. At the right hangs a heavy golden seed head, its grains ripe and bending the stalk over. Enlarged studies around the edges show a single flower opened to reveal six yellow stamens, individual grains husked and unhusked, and a grain cut lengthways to show the white starch inside.",
    caption:
      "Look at the roots and then at the grain. The dense fibrous root mass is what lets rice stand in flooded ground where other cereals drown, and the flooding is the whole reason for the paddy landscape this episode maps. The cut grain at the lower right is the other half of the story: that white starch is what the mould in the previous lesson converts to sugar.",
  },
  {
    commons: "File:Theobroma cacao - Köhler–s Medizinal-Pflanzen-136.jpg",
    course: "chocolate",
    csv: "chocolate",
    lesson: "l3-the-cacao-tree-and-the-narrowest-belt",
    name: "theobroma-cacao-kohler-plate-bvc",
    alt: "A colour botanical plate of cacao. Two very large oval leaves dominate the centre. At the upper left, a thick woody branch carries small pale pink and cream flowers growing directly out of the bark rather than from twigs or leaf joints. Around the edges are enlarged studies of a single flower, its parts separated, stamens, and a seed shown whole and in cross-section.",
    caption:
      "This lesson is about how narrow the growing belt is, and the plant explains part of it. Cacao is an understorey tree of wet tropical forest: it wants shade, steady heat and constant moisture, and it will not tolerate a dry season or a cool night. The band of the world that offers all of that at once is thin, and it is why the map in this lesson looks the way it does.",
  },
  {
    commons: "File:Coffea arabica -Köhler.jpg",
    course: "coffee",
    csv: "coffee",
    lesson: "l3-the-coffee-belt-where-coffee-grows-and-why",
    name: "coffea-arabica-kohler-plate-bvc",
    alt: "A colour botanical plate of a coffee branch headed Rubiaceae and captioned Coffea arabica L. The branch carries long glossy dark green leaves in opposite pairs, clusters of white five-petalled flowers at the leaf joints, and oval fruits ripening from green to dark red. Along the lower edge are enlarged studies: a flower opened out, stamens, a cross-section of a fruit showing two seeds face to face, and two whole beans.",
    caption:
      "The fruits on the branch are the reason the belt is where it is. They ripen unevenly, a few at a time on the same branch, so the crop has to be picked over and over by hand across a season. That labour demand, not the climate alone, shaped who grew coffee and under what arrangements, which is where this episode goes next.",
  },
];
