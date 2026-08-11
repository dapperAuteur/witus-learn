// Media batch: BVC episodes, second run (stage 10 of plans/63). Six more Köhler plates, through the
// figure sidecar. Every one was opened and LOOKED AT before its alt text was written.
//
// ── WHY EVERY ONE OF THESE IS A PLANT AND NOT A PRODUCT ──────────────────────────────────────────
//
// Five of the six episodes here are age-gated, and for those the alternatives are worse in opposite
// directions. Period advertising sells the thing. Drug-scare photography condemns the user. Both
// take a position the episodes deliberately do not, because the BVC argument is about trade, power
// and consequence rather than about whether a plant is wicked.
//
// A botanical plate refuses both. It says: this is a plant, here is how it is built, look at it.
// And each of these plates happens to show the specific structure the episode turns on, which is
// why the captions point at a numbered detail rather than admiring the picture:
//   · the poppy's seed capsule, which is the entire commercial object
//   · the hop cone, which is the preservative that let beer travel
//   · coca's small green flowers, on a shrub that looks like nothing at all
//
// ── THE CAUTION, REPEATED BECAUSE IT MATTERS MORE HERE ───────────────────────────────────────────
// Köhler's Medizinal-Pflanzen (1887) is a MEDICAL catalogue. These plants are in it because European
// pharmacy and European commerce were interested in them, which is the story several of these
// episodes are telling. Do not let a plate read as neutral nature illustration: the reason it was
// drawn is part of the subject.

export const batch = "bvc-episodes-2";

export const targets = [
  {
    commons: "File:Papaver somniferum - Köhler–s Medizinal-Pflanzen-102.jpg",
    course: "opioids",
    csv: "opioids",
    lesson: "l3-where-the-poppy-grows",
    name: "papaver-somniferum-kohler-plate",
    alt: "A colour botanical plate of the opium poppy. A large white flower with a pink-flushed centre and a separate scarlet flower are shown open, alongside a nodding unopened bud on a bristly stalk and a stem with deeply lobed grey-green leaves clasping it. At the lower left are two seed capsules, one whole with a flat ridged crown on top and one cut open, plus a cross-section showing the ringed chambers inside and scattered tiny seeds.",
    caption:
      "Look at the capsules at the lower left rather than at the flowers. That ridged pod is the entire commercial object: scored while green, it weeps a latex, and everything the rest of this episode describes follows from that one property of one seed head.",
  },
  {
    commons: "File:Erythroxylum coca - Köhler–s Medizinal-Pflanzen-204.jpg",
    course: "coca",
    csv: "coca",
    lesson: "l3-the-yungas",
    name: "erythroxylum-coca-kohler-plate",
    alt: "A colour botanical plate of the coca shrub. Two slender woody branches carry smooth oval leaves arranged alternately, with clusters of very small greenish-white flowers where the leaves meet the stem. Around the edges are enlarged studies: an opened flower, its stamens fused into a tube, a cross-section of the ovary, and a single smooth brown seed.",
    caption:
      "This is the plant, and it is worth registering how ordinary it looks. A modest shrub with small leaves and flowers you would walk past. Everything that separates the leaf chewed in the Yungas from the powder in the later lessons is done to it afterward, by industry, and none of it is visible here.",
  },
  {
    commons: "File:Nicotiana tabacum - Köhler–s Medizinal-Pflanzen-098.jpg",
    course: "tobacco",
    csv: "tobacco",
    lesson: "l3-the-tobacco-belt",
    name: "nicotiana-tabacum-kohler-plate",
    alt: "A colour botanical plate of tobacco. A single stout stem carries very large pointed leaves that clasp it directly, and is topped by a cluster of long trumpet-shaped flowers, pale at the base and flaring to deep pink at the mouth. Smaller studies show a flower cut lengthways, a green seed capsule whole and split, and a scatter of extremely small dark seeds.",
    caption:
      "The leaves are the crop, and their size is the reason this plant shaped a labour system. Each one is picked, cured, graded and handled individually, by hand, over months. Note the seeds at the lower left too: they are nearly dust, which is why tobacco is started in seedbeds and transplanted rather than sown where it will grow.",
  },
  {
    commons: "File:Cannabis sativa - Köhler–s Medizinal-Pflanzen-026.jpg",
    course: "cannabis",
    csv: "cannabis",
    lesson: "l3-born-in-the-mountains",
    name: "cannabis-sativa-kohler-plate",
    alt: "A colour botanical plate of cannabis. Two shoots are shown side by side: the left carries loose drooping sprays of small pale flowers, the right carries dense leafy clusters with rounded green seed cases among them. Both bear the familiar palmate leaves of five to seven narrow toothed leaflets. Along the bottom are enlarged studies of a seed whole, in cross-section and germinating.",
    caption:
      "The two shoots at the top are the point: this species is usually dioecious, so the drooping pollen sprays on the left and the seed-bearing clusters on the right grow on separate plants. That single botanical fact governs how the crop is grown, whether for fibre or for resin, and it is the reason the two industries in this episode diverge so early.",
  },
  {
    commons: "File:Humulus lupulus - Köhler–s Medizinal-Pflanzen-072.jpg",
    course: "beer",
    csv: "beer",
    lesson: "l3-the-grain-belt-and-the-hop-belt",
    name: "humulus-lupulus-kohler-plate",
    alt: "A colour botanical plate of the hop. A twining stem carries large lobed leaves with toothed edges, and at the right hangs a cluster of pale green cones built from overlapping papery scales. At the upper right is a loose spray of small greenish male flowers. Enlarged studies around the margins show a single scale, the tiny resin glands at its base, and a seed whole and in section.",
    caption:
      "The cones on the right are what the hop belt exists for. Look at the enlarged scale near the bottom edge and the small glands at its base: that resin is both the bitterness and a preservative, and it is why beer could survive a voyage. Grain decides where beer is possible; this decides how far it can travel.",
  },
  {
    commons: "File:Vitis vinifera - Köhler–s Medizinal-Pflanzen-145.jpg",
    course: "wine",
    csv: "wine",
    lesson: "l3-the-wine-belt-where-grapes-grow",
    name: "vitis-vinifera-kohler-plate",
    alt: "A colour botanical plate of the grapevine. On the left a woody cane carries broad lobed leaves, one turning yellow, and an upright spray of tiny green unopened flowers. On the right a bunch of pale green grapes hangs from a cane beside coiling tendrils. Smaller studies show a flower with its cap lifting off, a grape cut across to reveal the seeds, and single seeds from several angles.",
    caption:
      "Two states of the same cane, side by side: flowering on the left, fruit on the right. The tendrils matter more than they look. This is a climbing plant that in the wild grows up trees toward light, and every trellis, every pruning system and every vineyard row in the rest of this episode is an argument with that habit.",
  },
];
