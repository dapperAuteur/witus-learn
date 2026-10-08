// Media batch: Making String (course `making-string`, series From Fibre to Fabric).
//
// Every image below was opened and LOOKED AT before its alt text was written, at the exact URL
// given, on 2026-10-07. Alt text says what the image shows; the caption says what to look at and
// why, and asserts nothing the dossier does not verify
// (plans/future-courses/trade-skills/2026-10-06-making-string-dossier.md) except what is printed on
// the figure itself, read from the page image the same day.
//
// RIGHTS. Every figure here is Tier A under the source-hosting rule in CLAUDE.md, on one of two
// grounds: a US federal work (17 U.S.C. 105: the two Army manuals and the USDA Yearbook), or a work
// published in 1930 or earlier (Verrill, n.d. with an introduction dated January 1917; Dewey 1914;
// Mason 1895). Two things were deliberately left OUT:
//   · Hardy et al. 2020 Fig. 3c and Conard and Rots 2024 Fig. 2. Both are CC BY 4.0, which the
//     script would accept, but this batch was scoped to federal and pre-1931 works. They are the
//     obvious next additions for lessons 2 and 11, with their figure credit lines kept.
//   · HAER MA-90-2 photographs 1 to 13. The Library of Congress record (loc.gov/item/ma1756) lists
//     22 photographs but has NOT digitized them: its JSON offers only the data pages and the caption
//     PDF, `image_url` is empty, and the photo resource path 404s. There is nothing to fetch, so
//     lesson 12 (the ropewalk) has no figure here. Photos 14 to 22 would be Tier B in any case.
//
// WHY ONLY ONE ENTRY IS IN `targets`. upload-course-media.mjs can fetch from exactly two places: a
// Wikimedia Commons file title (`commons`) or a Library of Congress item id (`loc`). Of the eleven
// figures chosen, only Verrill's Figure 1 exists on Commons (as "File:Constriction of rope.png",
// the same drawing as Gutenberg's fig1.gif, with the printed caption cropped off; Commons credits a
// 1919 Norman W. Henley printing). The other ten live on Project Gutenberg and the Internet Archive,
// which the script has no source type for. They are listed in `pending` below with the exact image
// URL each one was verified at (Internet Archive IIIF region URLs crop a single figure out of its
// page; the region is part of the URL). The script reads only `batch` and `targets`, so `pending` is
// inert data: it ships the day the script grows a direct-URL source type with a declared licence,
// which is the orchestrator's decision and not this file's.
//
// EXTRA FIELDS. `figure`, `page`, `sourceImageUrl` and `figureCredit` are not read by the script;
// they pass through into the dry-run manifest. `figureCredit` is the credit for the lesson's
// `:::figure` line. For a Commons target the script ALSO builds its own provenance credit from the
// Commons metadata, which is what /admin/media shows; that one will carry Commons' file title,
// typo included.
//
// No em or en dashes in any alt, caption or credit (course house style).

export const batch = "making-string";

export const targets = [
  {
    commons: "File:Constriction of rope.png",
    course: "making-string",
    lesson: "fibre-yarn-strand-rope",
    name: "verrill-fig1-construction-of-rope",
    figure: "Verrill, Fig. 1, Construction of Rope",
    page: "chapter I, \"Cordage\" (the Gutenberg transcription has no page numbers)",
    sourceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Constriction_of_rope.png",
    alt: "Two pen-and-ink drawings of rope with their ends opened out, each part lettered. On the left, a three-strand rope lettered D spreads its strands apart at the top: one strand is lettered C, and another untwists further into thinner yarns, one lettered B, whose tips fray into loose straight fibres lettered A. On the right, a thicker rope lettered E is made of smaller ropes twisted together, and at its top these open out in turn, with the letters D, C and B marking smaller and smaller parts.",
    caption:
      "Verrill's Figure 1, \"Construction of Rope.\" Follow the letters from smallest to largest: A is loose fibre, B a yarn, C a strand, D a rope, and on the right E is a cable made of ropes. Every level in the drawing is a twist, and lesson 2 explains why each one turns the opposite way to the level below it.",
    figureCredit:
      "A. Hyatt Verrill, Knots, Splices and Rope Work, 2nd rev. ed., ch. I, Fig. 1, Construction of Rope. Public domain in the USA. Image via Wikimedia Commons, File:Constriction of rope.png (the same drawing is fig1.gif in Project Gutenberg eBook 13510). https://commons.wikimedia.org/wiki/File:Constriction_of_rope.png",
  },
];

// Verified Tier A figures the current script cannot fetch (no Gutenberg or Internet Archive source
// type). Same shape as a target, plus `licence` and `rightsBasis`, which a direct-URL source type
// would have to declare because there is no Commons or LOC metadata to read them from.
export const pending = [
  {
    course: "making-string",
    lesson: "fibre-yarn-strand-rope",
    name: "fm-5-125-fig1-1-cordage-of-rope-construction",
    figure: "FM 5-125, Figure 1-1, Cordage of rope construction",
    page: "printed p. 1-2 (PDF p. 17; scan leaf n16)",
    sourceImageUrl:
      "https://iiif.archive.org/image/iiif/3/fm-5-125-rigging-techniques-procedures-and-applications-1995%2FFM%205-125%20Rigging%20Techniques%2C%20Procedures%2C%20And%20Applications%20%201995_jp2.zip%2FFM%205-125%20Rigging%20Techniques%2C%20Procedures%2C%20And%20Applications%20%201995_jp2%2FFM%205-125%20Rigging%20Techniques%2C%20Procedures%2C%20And%20Applications%20%201995_0016.jp2/262,325,1955,1575/max/0/default.jpg",
    licence: "Public domain",
    rightsBasis:
      "US federal work (17 U.S.C. 105). The manual states: Approved for public release; distribution is unlimited. Internet Archive marks the item with the Public Domain Mark 1.0.",
    alt: "A line drawing in a ruled box of a three-strand rope lying diagonally, its cut end at the lower right showing the three strands in section. Towards the upper left the strands come apart: two curve away to the left with small frayed tips, with an arrow labelled Strands pointing at them, and the third loops up and over to the right, where it opens into a fan of thin lines labelled Yarns and, beyond them, finer wavy lines labelled Fibers.",
    caption:
      "FM 5-125 Figure 1-1, \"Cordage of rope construction,\" runs Verrill's chain the other way. Start at the finished rope on the lower right, then follow the strand that loops away as it opens into yarns and then into fibres. Set beside Verrill's Figure 1, the two drawings name the same parts.",
    figureCredit:
      "Headquarters, Department of the Army, FM 5-125, Rigging Techniques, Procedures, and Applications (1995), Figure 1-1, Cordage of rope construction, printed p. 1-2. US federal work, approved for public release. Scan via Internet Archive. https://archive.org/details/fm-5-125-rigging-techniques-procedures-and-applications-1995/page/n16",
  },
  {
    course: "making-string",
    lesson: "each-twist-against-the-last",
    name: "verrill-figs84-86-grommet",
    figure: "Verrill, Figs. 84, 85 and 86, Grommet complete and making",
    page: "chapter V, the grommet paragraph (no page numbers in the transcription)",
    sourceImageUrl: "https://www.gutenberg.org/cache/epub/13510/images/fig84-86.gif",
    licence: "Public domain",
    rightsBasis:
      "Published before 1931 (introduction dated January 1917). Project Gutenberg catalogue: Public domain in the USA.",
    alt: "Three line drawings of rope rings, each labelled with its figure number. Top left, Fig. 84, a ring formed by a single strand laid round on itself, with a long loose tail of the strand trailing down to the left. Top right, Fig. 85, a thicker ring with the free end of the strand still lying across its lower edge. Below, Fig. 86, a complete, even ring of three-strand rope with no loose end showing.",
    caption:
      "Verrill's grommet in three stages. In Fig. 84 the long end has followed the lay once round, making a two-stranded ring; in Fig. 85 the third strand is in; Fig. 86 is the finished ring, its ends knotted, tucked and trimmed. The strand lies back into its own grooves only because it still carries its twist.",
    figureCredit:
      "A. Hyatt Verrill, Knots, Splices and Rope Work, 2nd rev. ed., ch. V, Figs. 84, 85 and 86, Grommet complete and making. Public domain in the USA. Via Project Gutenberg eBook 13510. https://www.gutenberg.org/ebooks/13510",
  },
  {
    course: "making-string",
    lesson: "stem-leaf-bark-and-animal",
    name: "dewey-1913-pl40-fig4-hemp-fibre",
    figure: "Dewey, Hemp, Plate XL, fig. 4, Fiber in the form in which it leaves the farm",
    page: "Plate XL (PDF p. 346; scan leaf n345), fig. 4 cropped from the four-figure plate",
    sourceImageUrl:
      "https://iiif.archive.org/image/iiif/3/yoa1913%2Fyoa1913_jp2.zip%2Fyoa1913_jp2%2Fyoa1913_0345.jp2/940,1360,440,840/max/0/default.jpg",
    licence: "Public domain",
    rightsBasis:
      "US federal work (USDA Yearbook, Government Printing Office) and published 1914. National Agricultural Library: not in copyright.",
    alt: "A black and white photograph of a long hank of fibre hanging against a plain grey background. It is gathered into a knob at the top and falls in a dense, slightly tangled mass that narrows into two loose tails at the bottom. A printed number 4 is at the lower left.",
    caption:
      "Dewey's Plate XL, figure 4: \"Fiber in the form in which it leaves the farm.\" This is what bast looks like once it is off the stalk. Dewey says the hemp fibre of commerce is the primary bast fibres \"with some adherent bark.\" Lesson 5 is how it gets from the stalk to this.",
    figureCredit:
      "Lyster H. Dewey, Hemp, in Yearbook of the United States Department of Agriculture 1913 (1914), Plate XL, fig. 4. US federal work; National Agricultural Library: not in copyright. Scan via Internet Archive. https://archive.org/details/yoa1913/page/n345",
  },
  {
    course: "making-string",
    lesson: "hemp-and-flax-by-hand",
    name: "dewey-1913-pl44-fig3-spreading-hemp-for-retting",
    figure: "Dewey, Hemp, Plate XLIV, fig. 3, Spreading fiber hemp for retting",
    page: "Plate XLIV (PDF p. 366; scan leaf n365), fig. 3 cropped from the three-figure plate",
    sourceImageUrl:
      "https://iiif.archive.org/image/iiif/3/yoa1913%2Fyoa1913_jp2.zip%2Fyoa1913_jp2%2Fyoa1913_0365.jp2/485,1660,833,533/max/0/default.jpg",
    licence: "Public domain",
    rightsBasis:
      "US federal work (USDA Yearbook, Government Printing Office) and published 1914. National Agricultural Library: not in copyright.",
    alt: "A black and white photograph of a flat field under a pale sky. On the left three people stoop low, laying cut stalks on the ground, and the stalks cover the foreground in a thin layer that runs back towards the horizon. Two tall conical shocks of upright stalks stand behind them, with a road, a fence line and telegraph poles beyond. A printed number 3 is at the lower left.",
    caption:
      "Dewey's Plate XLIV, figure 3: \"Spreading fiber hemp for retting.\" This is dew retting being laid out. Dewey says the hemp is spread \"in thin, even rows, so that it will all be uniformly exposed to the weather,\" and left from four weeks to four months. Look at how thin the layer is: every stalk has to get the weather.",
    figureCredit:
      "Lyster H. Dewey, Hemp, in Yearbook of the United States Department of Agriculture 1913 (1914), Plate XLIV, fig. 3, Spreading fiber hemp for retting. US federal work; National Agricultural Library: not in copyright. Scan via Internet Archive. https://archive.org/details/yoa1913/page/n365",
  },
  {
    course: "making-string",
    lesson: "hemp-and-flax-by-hand",
    name: "dewey-1913-pl46-fig1-hand-brake",
    figure: "Dewey, Hemp, Plate XLVI, fig. 1, The hand brake",
    page: "Plate XLVI (PDF p. 368; scan leaf n367), fig. 1 cropped from the four-figure plate",
    sourceImageUrl:
      "https://iiif.archive.org/image/iiif/3/yoa1913%2Fyoa1913_jp2.zip%2Fyoa1913_jp2%2Fyoa1913_0367.jp2/280,305,620,575/max/0/default.jpg",
    licence: "Public domain",
    rightsBasis:
      "US federal work (USDA Yearbook, Government Printing Office) and published 1914. National Agricultural Library: not in copyright.",
    alt: "A black and white photograph of a man in a broad-brimmed hat and a worn jacket standing at a long wooden frame on splayed legs, set at a slant in a field strewn with stalks. He grips the handle of a hinged upper beam with one hand and holds a bundle of stalks across the frame with the other, and broken stalks hang from it to the ground. Heaps of loose stalks lie behind him. A printed number 1 is at the lower left.",
    caption:
      "Dewey's Plate XLVI, figure 1, the hand brake. Match it to his description: a lower frame of boards set edgewise, and a hinged upper frame brought down on the stalks laid across it. The worker \"crunches the upper part down, breaking the stalks,\" and, Dewey adds, \"The work requires skill, strength, and endurance.\"",
    figureCredit:
      "Lyster H. Dewey, Hemp, in Yearbook of the United States Department of Agriculture 1913 (1914), Plate XLVI, fig. 1, The hand brake. US federal work; National Agricultural Library: not in copyright. Scan via Internet Archive. https://archive.org/details/yoa1913/page/n367",
  },
  {
    course: "making-string",
    lesson: "twist-and-ply",
    name: "atp-3-50-21-fig-a21-twisting-fibers",
    figure: "ATP 3-50.21, Figure A-21, Twisting fibers",
    page: "printed p. A-21 (PDF p. 215; scan leaf n214)",
    sourceImageUrl:
      "https://iiif.archive.org/image/iiif/3/survival-atp-3-50-21%2FSurvival%20(ATP%203-50-21)_jp2.zip%2FSurvival%20(ATP%203-50-21)_jp2%2FSurvival%20(ATP%203-50-21)_0214.jp2/850,982,927,674/max/0/default.jpg",
    licence: "Public domain",
    rightsBasis:
      "US federal work (17 U.S.C. 105). The manual states: Approved for public release; distribution is unlimited. Internet Archive marks the item with the Public Domain Mark 1.0.",
    alt: "A line drawing in a ruled box of two hands at the right, one above the other, each pinching the end of a thin twisted strand between thumb and fingers; the lower hand also holds a tuft of loose fibre. The two strands run to the left and meet, winding round each other into a thicker cord at the left edge. A small curved arrow beside each strand shows the way it is being turned.",
    caption:
      "ATP 3-50.21 Figure A-21, \"Twisting fibers.\" The arrows are the instruction: each hand keeps putting twist into its own strand while, at the left, the strands lay up together the other way. That is step 4 of paragraph A-38, the step that is easy to miss.",
    figureCredit:
      "Headquarters, Department of the Army, ATP 3-50.21, Survival (18 September 2018), Figure A-21, Twisting fibers, printed p. A-21. US federal work, approved for public release. Scan via Internet Archive. https://archive.org/details/survival-atp-3-50-21/page/n214",
  },
  {
    course: "making-string",
    lesson: "twist-and-ply",
    name: "atp-3-50-21-fig8-8-making-cordage",
    figure: "ATP 3-50.21, Figure 8-8, Making cordage",
    page: "printed p. 8-10 (PDF p. 190; scan leaf n189)",
    sourceImageUrl:
      "https://iiif.archive.org/image/iiif/3/survival-atp-3-50-21%2FSurvival%20(ATP%203-50-21)_jp2.zip%2FSurvival%20(ATP%203-50-21)_jp2%2FSurvival%20(ATP%203-50-21)_0189.jp2/232,163,765,470/max/0/default.jpg",
    licence: "Public domain",
    rightsBasis:
      "US federal work (17 U.S.C. 105). The manual states: Approved for public release; distribution is unlimited. Internet Archive marks the item with the Public Domain Mark 1.0.",
    alt: "Three line-drawing panels side by side in a ruled box, each with a printed caption beneath. Panel 1: several thin cords hang down from a knot at the top, an arrow pointing at the knot, captioned Secure firmly at knot. Panel 2: the cords are divided into two strands hanging from the knot, each drawn twisted, with a curved arrow beside each, captioned Twist both strands clockwise. Panel 3: the two strands are wound round each other into a single cord, with one curved arrow, captioned Twist one strand around the other counterclockwise.",
    caption:
      "ATP 3-50.21 Figure 8-8, \"Making cordage,\" the drawing this course teaches from. Compare the arrows in panels 2 and 3: they turn opposite ways, which is the S and Z of lesson 2. The cords are parachute cord, so you can practise the motion before you have prepared any fibre.",
    figureCredit:
      "Headquarters, Department of the Army, ATP 3-50.21, Survival (18 September 2018), Figure 8-8, Making cordage, printed p. 8-10. US federal work, approved for public release. Scan via Internet Archive. https://archive.org/details/survival-atp-3-50-21/page/n189",
  },
  {
    course: "making-string",
    lesson: "finishing-and-what-it-is-for",
    name: "fm-5-125-fig2-39-renewing-rope-strands",
    figure: "FM 5-125, Figure 2-39, Renewing rope strands",
    page: "printed p. 2-27 (PDF p. 63; scan leaf n62)",
    sourceImageUrl:
      "https://iiif.archive.org/image/iiif/3/fm-5-125-rigging-techniques-procedures-and-applications-1995%2FFM%205-125%20Rigging%20Techniques%2C%20Procedures%2C%20And%20Applications%20%201995_jp2.zip%2FFM%205-125%20Rigging%20Techniques%2C%20Procedures%2C%20And%20Applications%20%201995_jp2%2FFM%205-125%20Rigging%20Techniques%2C%20Procedures%2C%20And%20Applications%20%201995_0062.jp2/645,358,1305,984/max/0/default.jpg",
    licence: "Public domain",
    rightsBasis:
      "US federal work (17 U.S.C. 105). The manual states: Approved for public release; distribution is unlimited. Internet Archive marks the item with the Public Domain Mark 1.0.",
    alt: "Three line drawings of an upright three-strand rope in a ruled box, numbered 1 to 3. In 1, the two broken ends of one strand stand out loose from the rope, labelled Unlay broken strand. In 2, a new strand drawn in black runs along the gap, and at each end it is tied to the old strand with a knot whose ends are tucked into the rope, labelled Insert new strand, Overhand knot and Tuck each strand. In 3, the rope is whole again with the black strand in place, labelled Smooth tucked ends by rolling.",
    caption:
      "FM 5-125 Figure 2-39, \"Renewing rope strands,\" the drawing the repair rule points to. The new strand is longer than the break, so tying it in shortens nothing; tying the broken ends straight to each other would shorten that one strand.",
    figureCredit:
      "Headquarters, Department of the Army, FM 5-125, Rigging Techniques, Procedures, and Applications (1995), Figure 2-39, Renewing rope strands, printed p. 2-27. US federal work, approved for public release. Scan via Internet Archive. https://archive.org/details/fm-5-125-rigging-techniques-procedures-and-applications-1995/page/n62",
  },
  {
    course: "making-string",
    lesson: "spindle-whorl-and-twister",
    name: "mason-1895-plate-spinning-woollen-yarn",
    figure: "Mason, unnumbered plate, \"Zuni woman spinning woollen yarn\" (Photo in U.S. Nat. Museum)",
    page: "unnumbered plate between printed pp. 76 and 77 (scan leaf n85)",
    sourceImageUrl:
      "https://iiif.archive.org/image/iiif/3/originsinventio01masogoog%2Foriginsinventio01masogoog_jp2.zip%2Foriginsinventio01masogoog_jp2%2Foriginsinventio01masogoog_0085.jp2/290,658,2133,2992/max/0/default.jpg",
    licence: "Public domain",
    rightsBasis:
      "Published 1895. Internet Archive: NOT_IN_COPYRIGHT. This is the 1895 Walter Scott scan, not the 1966 MIT Press reprint the dossier forbids.",
    alt: "A black and white studio photograph of a woman with shoulder-length dark hair seated on a low stool on a dark blanket, looking down at her work. She wears a dark dress fastened over one shoulder above a pale patterned blouse. Her right hand holds a long thin spindle that slants from her lap down to the blanket; its lower part is wrapped thickly in pale yarn, and a flat disc sits on the shaft just above its tip. Her left hand is raised at shoulder height, fingers pinched on a fine thread, and a soft pale bundle of fibre rests in her lap.",
    caption:
      "Mason's book prints this photograph beside his page 76 account of the spindle, captioned \"Zuni woman spinning woollen yarn\" and credited to a photograph in the U.S. National Museum. The book does not record her name. Find the whorl, the flat disc low on the shaft: in Mason's words the spindle with its whorl is \"a free wheel and axle, with the principle of the fly-wheel fully developed.\"",
    figureCredit:
      "O. T. Mason, The Origins of Invention: A Study of Industry among Primitive Peoples (Walter Scott, 1895), unnumbered plate between pp. 76 and 77 (Photo in U.S. Nat. Museum). Public domain. Scan via Internet Archive. https://archive.org/details/originsinventio01masogoog/page/n85",
  },
  {
    course: "making-string",
    lesson: "laid-and-braided",
    name: "verrill-fig2-bolt-rope",
    figure: "Verrill, Fig. 2, Bolt-Rope",
    page: "chapter I, \"Cordage\" (no page numbers in the transcription)",
    sourceImageUrl: "https://www.gutenberg.org/cache/epub/13510/images/fig2.gif",
    licence: "Public domain",
    rightsBasis:
      "Published before 1931 (introduction dated January 1917). Project Gutenberg catalogue: Public domain in the USA.",
    alt: "A pen-and-ink drawing of a short length of rope standing upright with its top end opened out. Four strands, each bound with a few turns of twine near its frayed tip, curl away from the centre, and up the middle runs a straighter central strand lettered F. Below the opening the strands are laid closely round one another.",
    caption:
      "Verrill's Figure 2, a bolt-rope, unlaid at the top to show what his text says: strands laid around a core, F, \"or central strand,\" and four of them rather than three. Compare the three-strand rope of Figure 1, which has no core.",
    figureCredit:
      "A. Hyatt Verrill, Knots, Splices and Rope Work, 2nd rev. ed., ch. I, Fig. 2, Bolt-Rope. Public domain in the USA. Via Project Gutenberg eBook 13510. https://www.gutenberg.org/ebooks/13510",
  },
];
