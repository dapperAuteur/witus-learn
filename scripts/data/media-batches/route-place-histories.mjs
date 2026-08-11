// Media batch: route and place histories (stage 4 of plans/63).
//
// Every file below was opened and LOOKED AT before its alt text was written.
//
// THIS STAGE IS DELIBERATELY SMALL, and the plan predicted the opposite. I expected route/place
// courses to be the richest seam in the catalog because American places are heavily photographed by
// HABS and the FSA. What is on COMMONS is much thinner than what exists in the Library of Congress,
// and the good historical material for these particular blocks is largely in library catalogues
// rather than on Commons. What follows is what could be sourced honestly. Two things were rejected
// rather than padded, and both rejections are recorded because they are the useful part:
//
//   · PITTSBURGH (pittsburgh-where-the-playbook-was-written). Nothing usable. The Hill District and
//     the Civic Arena searches return architectural trade journals and unrelated scans. The images
//     that would carry the lesson (the district before demolition) are not on Commons.
//   · An "Africans in Philadelphia" interpretive panel at the President's House site. Correctly
//     licensed CC0 and rejected anyway: it is a wall of body text, so it would render as a picture
//     of prose next to the lesson's own prose, and teach nothing the paragraph beside it does not.
//     "It is free and it is on topic" is not sufficient reason to publish an image.
//
// A NOTE ON `file`. These courses were authored with short data-file names and long registered
// slugs, so each target names its file explicitly. See the comment in upload-course-media.mjs.

export const batch = "route-place-histories";

export const targets = [
  {
    commons: "File:Madame Walker Theatre Center.jpg",
    course: "indiana-avenue-a-district-and-what-replaced-it",
    file: "indiana-avenue-course.ts",
    lesson: "ia-built-walker",
    name: "walker-building-indianapolis",
    alt: "A four-storey brick and terracotta building on a street corner in low sunlight, with a large rooftop sign reading WALKER THEATRE in dark red letters. A clock is set into the parapet above the corner entrance, and a marquee over the door reads WALKER. Overhead power lines cross the frame and the streets below are empty.",
    caption:
      "The Walker Building, Indianapolis. It is still standing, which is the point of this lesson: almost everything else on the avenue is not, so the survivor gets asked to represent a district it was only ever one building of.",
  },
  {
    commons: "File:1790s Philadelphia Map - President's House Site 2022-06 (71).jpg",
    course: "the-presidents-house",
    file: "presidents-house-course.ts",
    lesson: "ph-built-what-a-museum-shows",
    name: "presidents-house-site-philadelphia-map-panel",
    alt: "An interpretive panel headed MAP OF PHILADELPHIA, showing a 1790s street grid with red and one blue dot marking sites, each linked by a dashed line to a label. The labels include Christ Church Burial Ground, The President's House, Carpenter's Hall, the First Bank of the United States, the Walnut Street Jail, the African Episcopal Church of St. Thomas 1794 location, Washington Square African burial ground, and Mother Bethel African Methodist Episcopal Church. A note credits the base map to William Barker, about 1795.",
    caption:
      "The panel at the President's House site, and the reason to look at it is what shares the frame. The house is one dot. On the same few blocks: an African burial ground, Mother Bethel, St. Thomas, and the Walnut Street Jail. A site tells you about a building; a map tells you what the building sat inside.",
  },
  {
    commons: "File:Black-Bottom-mosaic-2014.JPG",
    course: "philadelphia-the-university-and-the-block",
    file: "philadelphia-university-course.ts",
    lesson: "pa-built-what-replaced-it",
    name: "black-bottom-mosaic-philadelphia",
    alt: "A tiled mosaic memorial wall set against a concrete structure. At the left, two hands hold a red heart lettered BLACK BOTTOM. The centre shows a street map of the neighbourhood in terracotta and black tile. Above it a yellow mechanical digger faces a row of small houses, and at the right children are shown skipping. Panels of lettered tiles carry text describing a community that once existed between 32nd Street and Walnut, and stating that urban renewal destroyed it. Dead leaves are heaped at the base.",
    caption:
      "The Black Bottom memorial mosaic. Read it as a document rather than as decoration: the neighbourhood survives here as a map, a heart, and a sentence about what happened to it, mounted on the structure that stands where it was. The digger is in the picture, facing the houses.",
  },
];
