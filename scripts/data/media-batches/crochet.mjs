// Media batch: Crocheting (course `crochet`, series From Fibre to Fabric).
//
// Every image below was opened and LOOKED AT before its alt text was written, at the exact URL
// given, on 2026-10-07. Alt text says what the image shows; the caption says what to look at and
// why, and asserts nothing the dossier does not verify
// (plans/future-courses/trade-skills/2026-10-06-crochet-dossier.md) except what is printed on the
// figure itself, read from the page image the same day. Quotations in captions are cut at any dash in
// the source, as the course itself does.
//
// RIGHTS. Every figure here is Tier A under the source-hosting rule in CLAUDE.md, on the ground that
// it was published in 1930 or earlier:
//   · Dillmont, Encyclopedia of Needlework, English edition. The author lived 1846-1890; Project
//     Gutenberg (eBook 20776) catalogues it "Public domain in the USA"; Commons marks each figure file
//     "Public domain". The English title page carries no date (dossier: year UNVERIFIED). Commons
//     dates the files 1886 and the Internet Archive catalogues its copies 1890; neither is asserted
//     here, so every credit says n.d.
//   · Fryer, The Mary Frances Knitting and Crocheting Book (John C. Winston, 1918). Project Gutenberg
//     (eBook 52396): "Public domain in the USA". The Internet Archive copy used for the plates is the
//     Library of Congress's own: "The Library of Congress is unaware of any copyright restrictions
//     for this item."
//
// PAGE LOCATORS were read off the PRINTED page images, not off the Gutenberg HTML's page anchors,
// because the HTML places several engravings after the wrong anchor (fig. 403 sits after its p. 224
// anchor but is printed on p. 223; fig. 442 after p. 241 but printed on p. 240; fig. 408 after p. 225,
// which is right). Dillmont pages were checked on archive.org/details/encyclopediaofne00dill_0 (Getty
// copy; same text and layout as the Gutenberg transcription), where scan leaf nN shows the printed page
// given. Fryer plates were checked on archive.org/details/maryfrancesknitt00frye.
//
// Read from the page images on 2026-10-07 and used below (beyond the dossier): Dillmont's printed
// caption under fig. 443 reads "Fig. 423" while her heading on p. 241 says fig. 443 (the course already
// says this); the star's foundation is "1 plain with the dark thread, and 1 with the light on each of
// the 6 plain" (p. 241), which matches the six dark arms counted on the engraving; Fryer's plates are
// numbered picture by picture to match the "Cut" numbers in the text on pp. 48, 51 and 148, and p. 48
// footnotes "Cut means picture"; Fryer's p. 148 step 6 reads "Slip the loop on a knitting needle and
// draw it up close."
//
// WHY THREE ENTRIES ARE IN `pending`. upload-course-media.mjs can fetch from exactly two places: a
// Wikimedia Commons file title (`commons`) or a Library of Congress item id (`loc`). Dillmont's
// engravings are on Commons one figure per file, so nine are `targets`. Fryer's photographic plates
// are not: Commons holds only the whole book as a PDF, and the script cannot take one page of it. They
// are listed in `pending` with the exact Internet Archive IIIF region URL each was verified at (the
// region crops the plate and its printed caption out of the scanned leaf). The script reads only
// `batch` and `targets`, so `pending` is inert data until the script grows a direct-URL source type,
// which is the orchestrator's decision and not this file's. The slip-knot plate is the most needed
// figure in the course (lesson 5 says "Until the plate is added to this lesson ..."), so it is listed
// first.
//
// DELIBERATELY LEFT OUT: Beeton's Ill. 216-238 and the 1918 Handbook's Figures 1-7 (Tier A, but the
// Dillmont engravings and Fryer photographs cover the same stitches and are on Commons or better
// scanned); Riego's 1846 grid charts (Tier A, but a bead and colour chart for a purse, of less use to a
// learner than Dillmont's filet piece); the Priscilla photographs; the 1883 Irish Lace plate "CORK. 4"
// (the only scan is a Google digitisation that asks for non-commercial use: Tier B); every Craft Yarn
// Council symbol, Leinhauser diagram, Henderson and Taimina figure and Karp figure (Tier B or never).
//
// EXTRA FIELDS. `figure`, `page`, `sourceImageUrl` and `figureCredit` are not read by the script;
// they pass through into the dry-run manifest. `figureCredit` is the credit for the lesson's
// `:::figure` line. For a Commons target the script ALSO builds its own provenance credit from the
// Commons metadata, which is what /admin/media shows.
//
// No em or en dashes in any alt, caption or credit (course house style).

// UPDATE 2026-10-07: the three Mary Frances plates moved from `pending` to `targets`, fetched from
// Project Gutenberg eBook 52396 (images i-162, i-052, i-057, checked by eye against the printed plate
// captions in the ebook HTML) now that the script reads Gutenberg rights. The Gutenberg files carry the
// photographs without the printed caption beneath, so the alt text no longer mentions one.

export const batch = "crochet";

export const targets = [
  {
    "commons": "File:Fig. 403. Position of the hands and explanation of chain stitch.jpg",
    "course": "crochet",
    "lesson": "holding-hook-and-yarn",
    "name": "dillmont-fig403-position-of-the-hands",
    "figure": "Dillmont, Fig. 403, Position of the hands and explanation of chain stitch",
    "page": "printed p. 223 (archive.org encyclopediaofne00dill_0, scan leaf n233); the passage it illustrates runs pp. 223-224",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Fig._403._Position_of_the_hands_and_explanation_of_chain_stitch.jpg",
    "alt": "An engraving of two hands crocheting, each wrist in a ruffled cuff and a dark sleeve. The hand on the right holds a slim hook between thumb and first finger, the way a pen is held, with its shaft pointing left. The hand on the left pinches the work between finger and thumb at the tip of the hook. Below the tip hang two strands: a plain length of thread, and a short length of chain that looks like a narrow braid.",
    "caption": "Dillmont's figure 403, \"Position of the hands and explanation of chain stitch\" (p. 223). Check each hand against her words: the hook is held \"in the same manner in which you hold your pen\", and the thread is taken \"in the left hand between the finger and thumb\". The braided strand hanging down is the chain already made.",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Crochet Work\", p. 223, Fig. 403, Position of the hands and explanation of chain stitch. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 403. Position of the hands and explanation of chain stitch.jpg (the same engraving is 416.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._403._Position_of_the_hands_and_explanation_of_chain_stitch.jpg"
  },
  {
    "commons": "File:Fig. 405. Plain stitch.jpg",
    "course": "crochet",
    "lesson": "slip-stitch-and-single-crochet",
    "name": "dillmont-fig405-plain-stitch",
    "figure": "Dillmont, Fig. 405, Plain stitch",
    "page": "printed p. 224 (scan leaf n234)",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Fig._405._Plain_stitch.jpg",
    "alt": "A white-on-black engraving of a strip of crochet fabric in rows of short, close stitches, each with a small crossbar, so the rows look like lines of tiny letter H's. A hook comes in from the upper right with loops of thread on its shaft and its tip in the top row. The finished part of that row lies to the right of the hook, and the working thread runs off to the upper left.",
    "caption": "Dillmont's figure 405, \"Plain stitch\" (p. 224). Her plain stitch is today's US single crochet, the stitch this lesson teaches: put the hook in, \"draw the thread through it in a loop, turn the thread round the needle and draw it through both loops on the needle.\"",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Crochet Work\", p. 224, Fig. 405, Plain stitch. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 405. Plain stitch.jpg (the same engraving is 418.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._405._Plain_stitch.jpg"
  },
  {
    "commons": "File:Fig. 416. Trebles made directly above one another.jpg",
    "course": "crochet",
    "lesson": "the-tall-stitches",
    "name": "dillmont-fig416-trebles",
    "figure": "Dillmont, Fig. 416, Trebles made directly above one another",
    "page": "printed p. 228 (scan leaf n238)",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/99/Fig._416._Trebles_made_directly_above_one_another.jpg",
    "alt": "A white-on-black engraving of crochet fabric made of tall stitches, each a twisted upright post, standing in rows between horizontal braid-like edges. A new row is half done: its posts stand on the right, and to their left the hook, entering from the upper right, has thread wound on its shaft and two strands running down from it into the top of the row below. The working thread runs off to the left.",
    "caption": "Dillmont's figure 416, \"Trebles made directly above one another\" (p. 228). Her treble is today's US double crochet: one wrap, then off two loops at a time, twice. Each twisted post is one stitch. Set it beside the short stitches of her figure 405 in lesson 7 to see the height the wrap adds.",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Crochet Work\", p. 228, Fig. 416, Trebles made directly above one another. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 416. Trebles made directly above one another.jpg (the same engraving is 429.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._416._Trebles_made_directly_above_one_another.jpg"
  },
  {
    "commons": "File:Fig. 408. Ribbed stitch.jpg",
    "course": "crochet",
    "lesson": "where-the-hook-goes",
    "name": "dillmont-fig408-ribbed-stitch",
    "figure": "Dillmont, Fig. 408, Ribbed stitch",
    "page": "printed p. 225 (scan leaf n235); its text begins on p. 225",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Fig._408._Ribbed_stitch.jpg",
    "alt": "A white-on-black engraving of crochet fabric in rows of short stitches, each topped with a small knot-like head. Between the bands of stitches run raised horizontal lines like braid, so the fabric looks ridged. A new row is under way at the upper right, and the hook, entering from the upper right with loops on its shaft, has its tip at the top edge of the row below. The working thread runs off to the upper left.",
    "caption": "Dillmont's figure 408, \"Ribbed stitch\" (p. 225), \"Worked backwards and forwards, the hook being passed through the back part only of the stitches of the preceding row.\" Look for the raised lines between the rows: that ridged texture is the rib this lesson describes, which Beeton and the 1918 Handbook reach by the same move.",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Crochet Work\", p. 225, Fig. 408, Ribbed stitch. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 408. Ribbed stitch.jpg (the same engraving is 421.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._408._Ribbed_stitch.jpg"
  },
  {
    "commons": "File:Fig. 441. Crochet square.jpg",
    "course": "crochet",
    "lesson": "the-flat-circle",
    "name": "dillmont-fig441-crochet-square",
    "figure": "Dillmont, Fig. 441, Crochet square",
    "page": "printed p. 240 (scan leaf n250)",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/55/Fig._441._Crochet_square.jpg",
    "alt": "A white-on-black engraving of a flat crochet square, worked outward from a small round centre in rings that turn square as they grow. Small holes line up along the diagonals, running from the centre out to each of the four corners.",
    "caption": "Dillmont's figure 441, \"Crochet square\" (p. 240). Each round keeps four corners, and the small holes on the diagonals line up through them. That is where her increases go: \"3 plain on the second of the 3 plain that form the corner.\" Her \"plain\" is the US single crochet.",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Crochet Work\", p. 240, Fig. 441, Crochet square. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 441. Crochet square.jpg (the same engraving is 454.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._441._Crochet_square.jpg"
  },
  {
    "commons": "File:Fig. 443. Coloured star worked into a light ground.jpg",
    "course": "crochet",
    "lesson": "increase-and-decrease",
    "name": "dillmont-fig443-coloured-star",
    "figure": "Dillmont, Fig. 443, Coloured star worked into a light ground (printed caption misnumbered Fig. 423)",
    "page": "printed p. 241 (scan leaf n251)",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Fig._443._Coloured_star_worked_into_a_light_ground.jpg",
    "alt": "A white-on-black engraving of a flat, round crochet mat worked in a light thread, its stitches running in rings round a small centre. A dark star with six broad arms is worked into it. The arms leave the centre divided by thin lines of light stitches, and each bends round in the same direction, like the blades of a pinwheel, out towards the edge.",
    "caption": "Dillmont's figure 443, \"Coloured star worked into a light ground\" (p. 241). The arms grow because in each row she makes \"one dark stitch more, increasing regularly, that is, making 2 stitches on the last light stitch that comes before the dark ones\", and later she will \"begin to decrease in every row by one\". In the book, the caption printed under this engraving misnumbers it Fig. 423.",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Crochet Work\", p. 241, Fig. 443, Coloured star worked into a light ground (the printed caption reads Fig. 423). Public domain in the USA. Image via Wikimedia Commons, File:Fig. 443. Coloured star worked into a light ground.jpg (the same engraving is 456.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._443._Coloured_star_worked_into_a_light_ground.jpg"
  },
  {
    "commons": "File:Fig. 437. Open-work crochet made after a tapestry pattern.jpg",
    "course": "crochet",
    "lesson": "charts-and-symbols",
    "name": "dillmont-fig437-open-work-after-a-tapestry-pattern",
    "figure": "Dillmont, Fig. 437, Open-work crochet made after a tapestry pattern",
    "page": "printed p. 238 (scan leaf n248)",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/17/Fig._437._Open-work_crochet_made_after_a_tapestry_pattern.jpg",
    "alt": "A white-on-black engraving of a rectangle of crochet lace built as a grid of small squares. Many squares are open holes framed by thin upright stitches and bars; others are filled in solid with stitches. The solid squares join into blocks and stepped shapes that make a geometric pattern across the piece, with mostly solid bands down the left and right sides.",
    "caption": "Dillmont's figure 437, \"Open-work crochet made after a tapestry pattern\" (p. 238): a square chart turned into lace, the work her rule in this lesson is for. Each open square of the grid is \"1 treble and 2 chain stitches\", and each solid one \"3 trebles\". Her \"treble\" is the US double crochet.",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Crochet Work\", p. 238, Fig. 437, Open-work crochet made after a tapestry pattern. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 437. Open-work crochet made after a tapestry pattern.jpg (the same engraving is full_450.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._437._Open-work_crochet_made_after_a_tapestry_pattern.jpg"
  },
  {
    "commons": "File:Fig. 844. Position of the hands in tambouring.jpg",
    "course": "crochet",
    "lesson": "before-the-word",
    "name": "dillmont-fig844-position-of-the-hands-in-tambouring",
    "figure": "Dillmont, Fig. 844, Position of the hands in tambouring",
    "page": "printed p. 522 (scan leaf n538); the tambour section opens on p. 521",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Fig._844._Position_of_the_hands_in_tambouring.jpg",
    "alt": "An engraving of tambour work. A round embroidery frame holding stretched fabric is clamped to the edge of a table by a screw clamp, whose pear-shaped handle hangs below. A hand in a ruffled cuff reaches down from the upper right and holds a fine needle upright in the fabric, its forefinger capped with a short metal sleeve pressed against the cloth. Beside it is a partly worked band of scrolling pattern, with fainter drawn lines around it. A second arm comes up from beneath the frame at the lower right, its hand hidden under the fabric, with a thread hanging below.",
    "caption": "Dillmont's figure 844, \"Position of the hands in tambouring\" (p. 522). This is the tambour embroidery that Karp calls \"commonly taken to be the direct precursor of crochet\". In Dillmont's words, \"The loops which are made with a small hook, called a tambour needle, form a fine chain stitch\", and the work \"must be mounted on a frame\".",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Miscellaneous Fancy Work\", p. 522, Fig. 844, Position of the hands in tambouring. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 844. Position of the hands in tambouring.jpg (the same engraving is 857.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._844._Position_of_the_hands_in_tambouring.jpg"
  },
  {
    "commons": "File:Fig. 442. Crochet hexagon.jpg",
    "course": "crochet",
    "lesson": "project-coaster",
    "name": "dillmont-fig442-crochet-hexagon",
    "figure": "Dillmont, Fig. 442, Crochet hexagon",
    "page": "printed p. 240 (scan leaf n250)",
    "sourceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/89/Fig._442._Crochet_hexagon.jpg",
    "alt": "A white-on-black engraving of a flat crochet hexagon worked outward from a small round centre. Its six sides curve slightly inward between six pointed corners, and small holes line up from the centre towards each corner. Bands of slightly different texture mark the rounds, and a short loose end of thread sticks out near the right-hand corner.",
    "caption": "Dillmont's figure 442, \"Crochet hexagon\" (p. 240), the six-cornered version of this coaster. It starts from \"a foundation chain of 6 stitches\", and each round puts \"3 plain on the second plain of the last row\" at every one of its six corners. Her \"plain\" is the US single crochet.",
    "figureCredit": "Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), \"Crochet Work\", p. 240, Fig. 442, Crochet hexagon. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 442. Crochet hexagon.jpg (the same engraving is 455.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._442._Crochet_hexagon.jpg"
  },
  {
    "gutenberg": "52396",
    "course": "crochet",
    "lesson": "the-slip-knot",
    "name": "fryer-1918-plate4-slip-knot",
    "figure": "Fryer, Plate 4, Motion Pictures Showing the Right Way to Make a Slip Knot (First Step in Knitting)",
    "page": "unnumbered plate facing printed p. 148 (scan leaf n171; p. 148 is n170)",
    "alt": "A page of six numbered black-and-white photographs, in two columns, of a pair of hands tying a knot in white yarn against a black background. In 1 to 3, the left hand is held out with its first two fingers extended while the right hand, at the upper right, draws the yarn across them and then round them. In 4, a small round loop has formed at the left hand's fingertips. In 5, the right hand pulls the yarn and the knot closes up between the hands. In 6, the right hand holds a long straight knitting needle with the knot on it, and the left hand holds the loose yarn below.",
    "caption": "Plate 4 of the Mary Frances book, captioned \"Motion Pictures Showing the Right Way to Make a Slip Knot\": the plate the steps on p. 148 lean on. The pictures are numbered as the steps are, so \"Hold yarn in hands as shown in this picture\" means picture 1. The last picture puts the knot on a knitting needle, because the book teaches it as the first step in knitting. For crochet, the same knot goes on your hook.",
    "figureCredit": "J. E. Fryer, The Mary Frances Knitting and Crocheting Book (John C. Winston, 1918), Plate 4, unnumbered plate facing p. 148. Public domain in the USA. Image via Project Gutenberg eBook 52396. https://www.gutenberg.org/ebooks/52396",
    "imageUrl": "https://www.gutenberg.org/cache/epub/52396/images/i-162.jpg",
    "sourceImageUrl": "https://www.gutenberg.org/cache/epub/52396/images/i-162.jpg",
    "batchRightsNote": "Published 1918. The script reads Gutenberg's RDF for eBook 52396 (Public domain in the USA.). The Internet Archive's Library of Congress copy also states: The Library of Congress is unaware of any copyright restrictions for this item."
  },
  {
    "gutenberg": "52396",
    "course": "crochet",
    "lesson": "the-foundation-chain",
    "name": "fryer-1918-plate1-chain-stitch",
    "figure": "Fryer, Plate 1, Motion Pictures Showing How to Make Chain Stitch",
    "page": "unnumbered plate following printed p. 48 (scan leaf n59; p. 48 is n58); its caption says \"See Description, Page 48\"",
    "alt": "A page of eight numbered black-and-white photographs, in two columns, of a pair of hands making a crochet chain in white yarn with a long pale hook, against a black background. In 1 to 4 the right hand holds the hook while the left hand holds the yarn close to its tip, where a loop forms. In 5 to 7 the left hand is raised with the yarn passing over its fingers, and the hook, held in the right hand, works at the left hand's fingertips. Picture 8 is a close view of the hook, whose handle is turned with a knob at the end, with a short, even length of chain running from its tip like a narrow braid.",
    "caption": "Plate 1 of the Mary Frances book, captioned \"Motion Pictures Showing How to Make Chain Stitch\", with its description on p. 48. The book starts the chain without a slip knot: \"Pointing the hook away from you, turn it completely around, bringing a loop on the needle.\" Picture 8 is the finished chain beside the hook.",
    "figureCredit": "J. E. Fryer, The Mary Frances Knitting and Crocheting Book (John C. Winston, 1918), Plate 1, unnumbered plate following p. 48. Public domain in the USA. Image via Project Gutenberg eBook 52396. https://www.gutenberg.org/ebooks/52396",
    "imageUrl": "https://www.gutenberg.org/cache/epub/52396/images/i-052.jpg",
    "sourceImageUrl": "https://www.gutenberg.org/cache/epub/52396/images/i-052.jpg",
    "batchRightsNote": "Published 1918. The script reads Gutenberg's RDF for eBook 52396 (Public domain in the USA.). The Internet Archive's Library of Congress copy also states: The Library of Congress is unaware of any copyright restrictions for this item."
  },
  {
    "gutenberg": "52396",
    "course": "crochet",
    "lesson": "slip-stitch-and-single-crochet",
    "name": "fryer-1918-plate2-single-crochet",
    "figure": "Fryer, Plate 2, Motion Pictures Showing How to Make Single Crochet",
    "page": "unnumbered plate facing printed p. 51 (scan leaf n64; p. 51 is n65); its caption says \"See Description, Page 51\"",
    "alt": "A page of four numbered black-and-white photographs, overlapping in a zigzag, of hands working single crochet in white yarn against a black background. In 1 to 3 the left hand holds the start of the work between thumb and finger, with the yarn over its raised forefinger, and the right hand holds a long pale hook whose tip is in the work, with loops on it. Picture 4 is a close view: a length of chain lies flat, a short row of stitches has been worked along part of it, and the hook is in the chain at the end of that row, with the unworked chain stretching away to the left and the yarn rising from the hook to the top left.",
    "caption": "Plate 2 of the Mary Frances book, captioned \"Motion Pictures Showing How to Make Single Crochet\", described on p. 51. The pictures are numbered as the steps are: cut 1 puts the hook \"through the second chain stitch from the needle\", and cut 3 pulls \"a loop through the two loops on the needle\". Picture 4 is the row under way along the chain.",
    "figureCredit": "J. E. Fryer, The Mary Frances Knitting and Crocheting Book (John C. Winston, 1918), Plate 2, unnumbered plate facing p. 51. Public domain in the USA. Image via Project Gutenberg eBook 52396. https://www.gutenberg.org/ebooks/52396",
    "imageUrl": "https://www.gutenberg.org/cache/epub/52396/images/i-057.jpg",
    "sourceImageUrl": "https://www.gutenberg.org/cache/epub/52396/images/i-057.jpg",
    "batchRightsNote": "Published 1918. The script reads Gutenberg's RDF for eBook 52396 (Public domain in the USA.). The Internet Archive's Library of Congress copy also states: The Library of Congress is unaware of any copyright restrictions for this item."
  }
];

export const pending = [];
