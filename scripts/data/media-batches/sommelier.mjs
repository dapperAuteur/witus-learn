// Media batch: BVC Sommelier (stage 9 of plans/63).
//
// Every file below was opened and LOOKED AT before its alt text was written.
//
// THE CONSTRAINT THAT SHAPED THIS BATCH. The Sommelier courses are tasting courses, and Wine is 21+
// age-gated with a deliberate no-alcohol path through every drill. Illustrating them with drinks
// photography would undercut that, and would also teach nothing: a photograph of a filled glass
// tells a learner less than a botanical plate does. So this batch goes to the PLANT and the PROCESS
// rather than the product, and both images were chosen because a learner can read something off
// them that the prose alone cannot show.
//
// WINE GETS NOTHING THIS ROUND, and it is the largest of the three courses at 52 lessons. Vine and
// terroir imagery is abundant but almost all of it is either modern share-alike photography of a
// vineyard, which is scenery, or bottle-and-glass imagery, which is the thing to avoid. Wine wants
// images chosen against specific lessons (a phylloxera-era grafting diagram, a soil profile, a
// pruning system), which is episode-by-episode sourcing, and is worth doing properly rather than
// filling the course with landscapes.

export const batch = "sommelier";

export const targets = [
  {
    commons: "File:Coffea arabica -Köhler.jpg",
    course: "bvc-taster-coffee",
    file: "bvc-sommelier-coffee-course.ts",
    lesson: "coffee-species-and-varieties",
    name: "coffea-arabica-kohler-plate",
    alt: "A colour botanical plate of a coffee branch, headed Rubiaceae and captioned Coffea arabica L. The branch carries long glossy dark green leaves in opposite pairs, clusters of white five-petalled flowers at the leaf joints, and oval fruits ripening from green to dark red. Along the lower edge are separate enlarged studies: a flower opened out, stamens, a cross-section of a fruit showing two seeds face to face, and two whole beans in side and grooved view.",
    caption:
      "Look at the bottom right of the plate: the fruit is cut open and there are two seeds lying flat against each other, grooved sides in. That is where the flat face of a coffee bean comes from, and why a bean that develops alone in the cherry is round instead. The plant is a fruit tree, and the bean is a seed.",
  },
  {
    commons: "File:Theobroma cacao - Köhler–s Medizinal-Pflanzen-136.jpg",
    course: "bvc-taster-chocolate",
    file: "bvc-sommelier-chocolate-course.ts",
    lesson: "choc-genetics",
    name: "theobroma-cacao-kohler-plate",
    alt: "A colour botanical plate of cacao. Two very large oval leaves dominate the centre. At the upper left, a thick woody branch carries small pale pink and cream flowers growing directly out of the bark itself rather than from twigs or leaf joints. Around the edges are enlarged studies of a single flower, its parts separated, stamens, and a seed shown whole and in cross-section.",
    caption:
      "The detail worth pausing on is at the upper left: the flowers are growing straight out of the woody trunk. Cacao is cauliflorous, so the pods form on the trunk and old branches rather than at the ends of twigs. That single fact is why cacao is still cut by hand, one pod at a time, and why the crop resists mechanisation in a way coffee does not.",
  },
];
