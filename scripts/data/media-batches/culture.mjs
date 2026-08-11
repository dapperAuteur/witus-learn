// Media batch: culture (stage 3 of plans/63). Also the first batch to use the Library of Congress
// as a source, which is why the LOC support in upload-course-media.mjs arrived with it.
//
// Every file below was opened and LOOKED AT before its alt text was written.
//
// TWO COURSES IN THIS FAMILY GOT NO IMAGES, ON PURPOSE. Recorded here because the reasoning is the
// useful part and the next author will otherwise assume nobody tried:
//
//   · HOODOO (hoodoo-tradition-of-resistance, hoodoo-complete). Commons returns essentially nothing
//     for conjure material culture, and what circulates elsewhere is mostly modern commercial
//     product photography or staged "ritual" imagery made for an audience. This is a living and in
//     places sacred practice, and illustrating it with a posed photograph would misrepresent it
//     while teaching nothing. A course that spends its length on how outsiders have flattened this
//     tradition should not flatten it with a stock picture. Better routes exist and are slower:
//     documented museum holdings with per-object rights, or historical photographs of named people
//     who consented to be photographed.
//   · AFROCENTRICITY. The obvious images are Kemetic: monuments, statuary, wall painting. The
//     course's whole discipline is that the argument ABOUT that material is contested and that
//     Diop's case and the Egyptological response both get stated fairly. Dropping a photograph of a
//     pharaonic sculpture beside that would quietly take a side, which is exactly what the course
//     is careful not to do. It needs images chosen with the argument in view, not decoration.
//
// WHAT THE LOC RIGHTS CHECK DID HERE, both directions, on the same subject:
//   · REFUSED a James Van DerZee photograph of Garvey and the Garvey Militia, Harlem 1924. Its
//     advisory reads "Publication is restricted." Exactly the outcome the check exists for.
//   · ACCEPTED the 1920 Keystone portrait below, whose advisory records that the LOC's own
//     Photoduplication Service checked the renewal records and found none.
// The first refusal is a better advert for the pipeline than the acceptance.

export const batch = "culture";

export const targets = [
  {
    commons: "File:View of the Baths of Caracalla MET DP828384.jpg",
    course: "history-of-bathing",
    lesson: "bathing-rome-thermae",
    name: "baths-of-caracalla-engraving",
    alt: "An engraving of the ruined Baths of Caracalla: three enormous brick arches, walls stripped back to their rubble core, with vegetation growing from the ledges and further ruined columns visible through the central arch. Four tiny human figures stand on the ground in the middle distance, one gesturing upward. A caption in Italian runs along the bottom edge.",
    caption:
      "Look at the people. Four figures, standing inside a single room of one bath complex, and they barely reach the base of the arches. This is the ruin, not the building: what the Romans actually built was larger, roofed, heated and faced in marble.",
  },
  {
    commons: "File:Bronze strigil (scraper) MET DP107030.jpg",
    course: "history-of-bathing",
    lesson: "bathing-rome-oil-strigil-soap",
    name: "roman-bronze-strigil",
    alt: "A corroded bronze tool photographed against a plain pale background. It is a single curved blade, tapering and hooked at one end, joined at the other to a long flat rectangular loop that forms the handle. The surface is mottled dark brown and green with age.",
    caption:
      "A strigil. This is the whole technology: oil the skin, let it lift the dirt, then drag this along the body and scrape the mixture off. The curve is not decorative, it is what lets the blade follow an arm or a shin.",
  },
  {
    loc: "94509041",
    course: "pan-africanism",
    lesson: "garvey-and-the-unia",
    name: "marcus-garvey-1920-portrait",
    alt: "A sepia photographic print of a seated man in a three-piece suit and patterned tie, turned slightly and looking directly at the camera without smiling. A round badge is pinned to his waistcoat. Behind him is a desk with papers and a dark wooden fitting.",
    caption:
      "Marcus Garvey in 1920, at the height of the UNIA. Note the setting: a desk, papers, a suit, a membership badge. The movement that reached millions presented itself as an organisation with officers and records, not as a mood, and that is a large part of how it reached them.",
  },
];
