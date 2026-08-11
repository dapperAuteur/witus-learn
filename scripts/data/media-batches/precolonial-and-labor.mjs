// Media batch: precolonial history and labor (stage 5 of plans/63).
//
// Every file below was opened and LOOKED AT before its alt text was written.
//
// THE MUSEUM-OBJECT TRAP THIS STAGE WAS WARNED ABOUT. The object can be three thousand years old
// and the PHOTOGRAPH of it a few years old, with its own author and its own licence. Object age
// tells you nothing. So each entry here was checked on the photographer or the reproduction, not on
// the subject: the Catalan Atlas detail is a faithful reproduction of a 1375 manuscript, the
// Haymarket image is an 1886 engraving, and the Teotihuacan photograph is a modern work whose
// author released it CC BY and who is therefore credited by name in the credit line.
//
// WHAT WAS TRIED AND DROPPED, because the reasoning saves the next author the search:
//
//   · A Library of Congress "Flint, Michigan, 1937-1940, scenes from two strikes" item. Cleared on
//     rights ("No known restrictions") and REFUSED by the script anyway, correctly: it is an image
//     GROUP with no single downloadable rendition. Rights and availability are different questions.
//   · A LOC photograph of the damaged Triangle Shirtwaist fire escape, 1911. Advisory reads
//     "Publication may be restricted." Refused. The best-known image of an event is quite often the
//     one somebody still holds rights in.
//   · A 1919 LOC photograph of women picketing a steel mill, cleared and genuinely good, dropped
//     for a different reason: history-of-unions is organised by NAMED episodes (Haymarket,
//     Homestead, Triangle, Wagner, the CIO, Taft-Hartley, PATCO) and there is no 1919 lesson. It
//     would have had to be filed under a lesson it does not illustrate. Sourcing for this course
//     has to be episode-by-episode, which is slower and is the only honest way to do it.

export const batch = "precolonial-and-labor";

export const targets = [
  {
    commons: "File:Catalan Atlas BNF Sheet 6 Mansa Musa (cropped).jpg",
    course: "africa-before-colonization",
    lesson: "africa-mansa-musa",
    name: "catalan-atlas-mansa-musa",
    alt: "A detail from a medieval illuminated map showing a crowned Black king seated on a throne, facing left. He holds a large round gold nugget up in his right hand and a sceptre in his left. He wears a gold crown and a pale robe, and the throne is drawn with red cushions. Red and green navigational lines cross the parchment around him, with Catalan text at the upper right.",
    caption:
      "Mansa Musa on the Catalan Atlas of about 1375, drawn in Majorca by a mapmaker who had never been to Mali. Look at what the image is doing: it places him on a European sea chart, at the end of the trade routes, holding the thing those routes were for. This is not a portrait. It is what Mali meant to somebody on the other side of the Sahara.",
  },
  {
    commons: "File:Wiki Loves Pyramids - Teotihuacan - Avenue of the Dead - 1.JPG",
    course: "precolumbian-mesoamerica",
    lesson: "meso-teotihuacan-city",
    name: "teotihuacan-avenue-of-the-dead",
    alt: "A wide gravel avenue running straight away from the camera toward a stepped stone pyramid at its far end, with a green mountain ridge rising behind. Low stone platforms with staircases line both sides of the avenue. Perhaps thirty visitors are spread along its length, the nearest in the foreground and the furthest reduced to specks near the pyramid's base.",
    caption:
      "The Avenue of the Dead, looking toward the Pyramid of the Moon. Use the visitors as a ruler: the people nearest the pyramid are barely visible, and the avenue continues well behind the camera. The city was laid out on this axis before it was built along it, which is the part worth holding onto.",
  },
  {
    commons: "File:HaymarketRiot-Harpers.jpg",
    course: "history-of-unions",
    lesson: "haymarket-1886",
    name: "haymarket-1886-harpers-engraving",
    alt: "A dramatic black and white engraving of a night scene in a city street. At the left a bearded man stands on a wagon with one arm raised, addressing a crowd. At the centre a bomb bursts in a blaze of light among a close-ranked line of uniformed police, several of whom are firing revolvers. Men scatter in every direction and bodies lie on the ground. Building signs read SALESROOMS and JEFFERSON ST.",
    caption:
      "Harper's Weekly, 1886. Read this as evidence about the coverage rather than about the event: it is an artist's reconstruction, published for a national audience, and it decides for the reader who was speaking, who was orderly and who threw the bomb. The lesson beside it refuses to settle the last of those. This picture does not.",
  },
];
