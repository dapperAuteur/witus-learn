// Media batch: The Great Migration (stage 2 of plans/63).
//
// Every file below was opened and LOOKED AT before its alt text was written.
//
// ⚠️⚠️ THE TRAP IN THIS SUBJECT, AND THE TOOL CANNOT SAVE YOU FROM IT ⚠️⚠️
//
// Commons' "Category:Great Migration (African American)" contains several files whose titles are
// Jacob Lawrence's Migration Series panel captions verbatim, held by NARA:
//
//   "During World War I there was a great migration north by southern Negroes - NARA - 559091.jpg"
//   "The migration gained in momentum - NARA - 559096.jpg"
//   "Many migrants found poor housing conditions in the North - NARA - 559097.jpg"
//
// They are the obvious, iconic images for this course. DO NOT USE THEM. The Migration Series is
// Jacob Lawrence's work, he died in 2000, and a US government agency holding a photograph of a
// painting does not put the painting into the public domain.
//
// The dangerous part: **Commons tags these "Public domain", so upload-course-media.mjs ALLOWS
// them.** Its rights check reads the licence Commons reports; it cannot audit whether that licence
// is right about an underlying artwork. This is the one class of error in this pipeline where the
// judgement has to be human, and it is worth knowing that before the next batch.
//
// The four below are safe on different grounds: two are federal government works (an Office of War
// Information photograph and a Census Bureau chart), and two are published US material from the
// 1920s. Each licence was checked individually rather than inherited from the category.

export const batch = "great-migration";

export const targets = [
  {
    commons: "File:GreatMigration1910to1970-UrbanPopulation.png",
    course: "great-migration",
    lesson: "what-was-the-great-migration",
    name: "great-migration-two-waves-maps",
    alt: "Two maps of the United States side by side, headed The First Great Migration 1910-1940 and The Second Great Migration 1940-1970. Circles mark cities, sized by population and coloured by change in the share of residents who were Black: orange and red for increases, blue and purple for decreases. The first map shows moderate increases concentrated in the industrial Midwest and Northeast; the second shows far larger increases across the North, the Midwest and the West Coast, with decreases across much of the rural South.",
    caption:
      "Two waves, one picture. Compare the maps rather than reading either alone: the second is not a continuation of the first at the same scale, it is a much larger movement reaching much further west. The note beneath records Newark going from 10.6 percent Black in 1940 to 54.2 percent in 1970.",
  },
  {
    commons: "File:Scott Arthur Family 1920.jpg",
    course: "great-migration",
    lesson: "push-meets-pull",
    name: "arthur-scott-family-arrival",
    alt: "A posed photograph of eight people, adults and children, standing together in overcoats and hats. Several carry folded coats and bundles over their arms; two suitcases stand on the floor in front of them. Nobody is smiling.",
    caption:
      "The Arthur Scott family, photographed for a 1922 Chicago study of race relations. Six million is a number nobody can picture. This is what one decision looked like: an entire household, everything they carried, and a photograph taken at the other end of it.",
  },
  {
    commons: "File:We want white tenants.jpg",
    course: "great-migration",
    lesson: "arrival-in-the-cities",
    name: "sojourner-truth-homes-sign-1942",
    alt: "A black and white photograph of a large hand-painted plywood sign staked in snow-covered scrub, reading WE WANT WHITE TENANTS IN OUR WHITE COMMUNITY. Two small United States flags are tied to the bushes on either side of it. Bare trees and utility poles stand behind. The negative is marked OWI-16549-C.",
    caption:
      "Detroit, 1942, directly opposite the Sojourner Truth homes, a new federal housing project. Look at the flags: whoever put the sign up did not think they were opposing America, they thought they were speaking for it. This is what the destination could be, and it is why the course refuses to call the North a promised land.",
  },
  {
    commons: "File:435ConventAve 1926.10.02 p1 NYAge AptHouseBeingSoldToColored FullPage.jpg",
    course: "great-migration",
    lesson: "the-black-press-and-the-defender",
    name: "new-york-age-1926-front-page",
    alt: "The full front page of The New York Age for Saturday, October 2, 1926, price five cents, with the strapline A Real Home Paper. The lead headline reads Harry Wills To Box Jack Sharkey. Other front-page stories include Colored Waitresses In Tea Room Strike To Prevent Racial Discrimination, Harlem Hospital Officials Act To End Possible Collusion Between Employes And Undertakers In Reports Of Deaths, Congressman Weller Insults Negro Voters In Public Address, Marines In Miami Cause Trouble By Bullying Negroes, and Fine New Apartment House On Convent Ave. Being Sold To Colored Tenants.",
    caption:
      "One front page, and count what is on it: a title fight, a strike over a fired waitress, a hospital corruption investigation, a congressman's insult, violence in Miami, and an apartment building opening to Black tenants. Sport, labour, institutional accountability, national news and housing, all in one paper, because no other paper was carrying any of it.",
  },
];
