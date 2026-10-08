// "Crocheting" (Trade Skills). Slug `crochet`. Series "From Fiber to Fabric" (`from-fiber-to-fabric`),
// code FIBRE, slot 02, after Making String (FIBRE-00) and Knot-Tying & Rope Work (FIBRE-01, which joined
// the series by BAM's decision of 2026-10-08). Both are linked here by course name.
//
// PUBLIC and free, by BAM's answers of 2026-10-06 to the brief (section 8): the four projects as
// drafted, ships on the engravings, title "Crocheting", standards unmapped for now.
//
// RESEARCH TIER 1 (docs/course-method/README.md).
//   Brief:   plans/future-courses/trade-skills/2026-10-05-crochet-brief.md (BAM's answers in section 8)
//   Dossier: plans/future-courses/trade-skills/2026-10-06-crochet-dossier.md
// Only the dossier's VERIFIED lines and its section 4 approved claims are asserted below. Quotations
// are copied from the dossier, which copied them from the fetched text. Where a source's own sentence
// contains a dash, the quotation is cut at the dash and the rest is given in the course's words.
// Added 2026-10-07 from the fetched Gutenberg texts, after the verifier pass: Fryer p. 51 runs to CUT 4
// and Plate 2 has four numbered photographs; Fryer pp. 172-173 (ripping out knitting, reusing yarn);
// the Tam widens only "until you have 30 doubles in each section". Dillmont's fig. 442 was checked on
// the archive.org page image (encyclopediaofne00dill, leaf 248): figure and text are on printed p. 240.
//
// THE DOSSIER'S CORRECTIONS TO THE BRIEF, all honoured: the knots course teaches no slip knot, so the
// slip knot is taught here from Fryer (1918), p. 148, Plate 4; Riego's twelve 1846 illustrations are
// bead and colour grid charts, never described as stitch figures; Riley, Corkhill and Morris (2013) is a
// KNITTING survey and is not cited; Penelope's instructions sit in a volume dated 1822-1823 (Karp dates
// them 1823); Grant's memoir was written 1845-1867 about 1812-13 and is not a record made in 1812;
// Lambert is quoted from the 1847 New York printing; no inventor of Irish crochet is documented.
//
// THIN RECORD, said plainly in the lessons rather than filled from memory: the magic ring (no source),
// pulling out and reworking a mistake (no crochet source; Fryer pp. 172-173 gives it for knitting
// only, and lesson 19 says so), blocking crochet (no crochet source), the
// abbreviations' expansions beyond the stitch names, yo, BLO, FLO and ch-sp, and the geometric reason a flat circle needs a
// steady increase (no fetched geometry source).
//
// RIGHTS (CLAUDE.md source-hosting rule, gate D5a), decided per source:
//   Tier A, may be hosted on Cloudinary later: Dillmont; Riego 1846, 1848 and 1861; Beeton 1870; the
//     1918 Handbook; Fryer 1918; Lambert 1847 (all Project Gutenberg); the Priscilla Crochet Book 1908
//     (Library of Congress: no known restrictions); Grant 1898 (archive.org NOT_IN_COPYRIGHT).
//   Tier B, linked only, never rehosted: the Craft Yarn Council pages and Leinhauser's guide (its
//     diagrams belong to Leisure Arts); Henderson and Taimina's web version; Karp's postprint; the KB
//     page; the Gaugain scan (CC BY-NC-ND 3.0); the 1883 Irish Lace scan (a Google digitisation that
//     asks for non-commercial use); Ito et al. 2018 (CC BY-NC-ND 4.0).
//   Tier C, cite only: Burns and Van Der Meer 2021 (abstract read).
//   BAM's purchased books are not used anywhere in this course.
//   No image is embedded. Lessons describe a figure and cite it by number and page; hosted Tier A
//   figures are added in a later step.
//
// STANDARDS: excused. A `BACKLOG` line in scripts/check-standards-coverage.ts records BAM's decision of
// 2026-10-06 (a practical skill; the hyperbolic-plane lesson is not claimed).
//
// ASSESSMENT (Tier 0): every teaching section has a quiz pooling round(section words / 35), clamped to
// 40-100, serving 5, passing 80, shuffled; the final pools 40 or more, serves 10, passes 80. Every
// question carries `explanation` and `sourceLessonSlug`. Correct options are written short and the
// distractors specific and definitively wrong. Self-checks are flush-left `:::reveal q ||| a` lines;
// recall cards quiz the PREVIOUS teaching lesson.

import type { AuthoredCourse } from "./authored-course";

// ── Bibliography (APA 7). Each lesson appends a locator: the page, figure or section to open. ──────
const DILLMONT =
  "Dillmont, T. de. (n.d.). *Encyclopedia of needlework* (English ed.). Th. de Dillmont. https://www.gutenberg.org/ebooks/20776";
const RIEGO_1846 =
  "Riego de la Branchardière, E. (1846). *Knitting, crochet, and netting, with twelve illustrations*. S. Knights. https://www.gutenberg.org/ebooks/36669";
const RIEGO_1848 =
  "Riego de la Branchardière, E. (1848). *The crochet book, fourth series*. Simpkin, Marshall, and Co. https://www.gutenberg.org/ebooks/61222";
const RIEGO_1861 =
  "Riego de la Branchardière, E. (1861). *Golden stars in tatting and crochet*. Simpkin, Marshall, and Co. https://www.gutenberg.org/ebooks/28457";
const BEETON =
  "Beeton, Mrs. (1870). *Beeton's book of needlework*. https://www.gutenberg.org/ebooks/15147";
const HANDBOOK =
  "*Handbook of wool knitting and crochet*. (1918). Needlecraft Publishing Company. https://www.gutenberg.org/ebooks/26113";
const FRYER =
  "Fryer, J. E. (1918). *The Mary Frances knitting and crocheting book; or, Adventures among the knitting people* (J. A. Boyer, Illus.). John C. Winston. https://www.gutenberg.org/ebooks/52396";
const LAMBERT =
  "Lambert, Miss. (1847). *My crochet sampler*. D. M. Peyser. https://www.gutenberg.org/ebooks/57595";
const PRISCILLA =
  "Hettich, L. B. (Ed.). (1908). *The Priscilla crochet book*. Priscilla Publishing. https://archive.org/details/priscillacrochet00hett";
const GAUGAIN =
  "Gaugain, J. (1840). *The lady's assistant for executing useful and fancy designs in knitting, netting, and crotchet work*. I. J. Gaugain. https://archive.org/details/krl00394037";
const GRANT =
  "Grant, E. (1898). *Memoirs of a Highland lady: The autobiography of Elizabeth Grant of Rothiemurchus, afterwards Mrs. Smith of Baltiboys, 1797-1830* (Lady Strachey, Ed.; 3rd impression). John Murray. https://archive.org/details/memoirsofhighlan00graniala";
const IRISH_LACE =
  "*Irish lace: A history of the industry* [Mansion House exhibition catalogue]. (1883). https://archive.org/details/mansionhouseexh00housgoog";
const KARP =
  "Karp, C. (2018). Defining crochet. *Textile History, 49*(2), 208-223. https://doi.org/10.1080/00404969.2018.1491689 Free postprint: https://loopholes.blog/wp-content/publications/Defining-Crochet-Postprint.pdf";
const KB =
  "KB, national library of the Netherlands. (n.d.). *Penélopé, of maandwerk aan het vrouwelijk geslacht toegewijd*. https://collecties.kb.nl/en/collections/magazines/penelope-maandwerk-aan-het-vrouwelijk-geslacht-toegewijd";
const CYC_ABBR =
  "Craft Yarn Council. (n.d.-a). *Crochet abbreviations master list*. https://www.craftyarncouncil.com/standards/crochet-abbreviations";
const CYC_SYMBOLS =
  "Craft Yarn Council. (n.d.-b). *Crochet chart symbols*. https://www.craftyarncouncil.com/standards/crochet-chart-symbols";
const CYC_FAQ = "Craft Yarn Council. (n.d.-c). *FAQs*. https://www.craftyarncouncil.com/standards/faqs";
const CYC_HOOKS =
  "Craft Yarn Council. (n.d.-d). *Hooks & needles*. https://www.craftyarncouncil.com/standards/hooks-and-needles";
const CYC_LEVELS =
  "Craft Yarn Council. (n.d.-e). *Project levels*. https://www.craftyarncouncil.com/standards/project-levels";
const CYC_WEIGHTS =
  "Craft Yarn Council. (n.d.-f). *Standard yarn weight system*. https://www.craftyarncouncil.com/standards/yarn-weight-system";
const CYC_STEEL =
  "Craft Yarn Council. (n.d.-g). *Steel crochet hook & crochet thread sizes*. https://www.craftyarncouncil.com/standards/steel-crochet-hook-crochet-thread-sizes";
const LEINHAUSER =
  "Leinhauser, J. (n.d.). *How to read a crochet pattern*. Craft Yarn Council. https://www.craftyarncouncil.com/standards/how-to-read-crochet-pattern";
const HT =
  "Henderson, D. W., & Taimina, D. (n.d.). *Crocheting the hyperbolic plane* [Web version; updated version in *Mathematical Intelligencer, 23*(2), 17-28, 2001]. Cornell University. https://pi.math.cornell.edu/~dtaimina/crochet/hplane.htm";
const BURNS =
  "Burns, P., & Van Der Meer, R. (2021). Happy Hookers: Findings from an international study exploring the effects of crochet on wellbeing. *Perspectives in Public Health, 141*(3), 149-157. https://doi.org/10.1177/1757913920911961";
const ITO =
  "Ito, M., Martin, C., Pfister, R. C., Rafalow, M. H., Salen, K., & Wortman, A. (2018). *Affinity online: How connection and shared interest fuel learning*. NYU Press. https://doi.org/10.18574/nyu/9781479888900.001.0001";

/** One `## Sources` line: the APA reference, then where in it to look. */
const src = (ref: string, where: string) => `- ${ref} Where to look: ${where}`;

export const CROCHET_COURSE: AuthoredCourse = {
  title: "Crocheting",
  description:
    "Learn to crochet from the manuals that first taught it in print, read side by side with the modern standards. Hold a hook and yarn, make a slip knot and a foundation chain, and work the slip stitch and the four stitches that stand on it. Turn rows, join rounds, and shape a flat circle, a tube, a cone, a ball and a crocheted hyperbolic plane, the model two mathematicians made for their geometry students. Read a pattern in US and UK terms (the same word names different stitches, and both systems were in American print by 1918), follow a symbol chart, and use a swatch to check gauge. Then the history, as the record shows it: hooks before the word, Penelope's instructions in a volume dated 1822-1823, Gaugain in 1840, Irish crochet and the famine, and which origin stories have no source at all. Four projects close it: a washcloth, a coaster, a hat and a hyperbolic plane. Every claim is cited to a page you can open, and where the record is thin the course says so.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 · Hook, yarn, hands
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-crochet-is",
      title: "1 · What crochet is, and how this course teaches it",
      section: "Section 1 · Hook, yarn, hands",
      body: `Crochet makes fabric from one strand and one hook. The *Encyclopedia of Needlework* published by Th. de Dillmont, a manual this course leans on throughout, opens its crochet chapter with the name: "Crochet work, so called from the hook, French *croche* or *croc*, with which it is done" (Dillmont, n.d., p. 221).

**One stitch, really.** Dillmont goes further. "In point of fact, there is only one, because all crochet work consists of loops made by means of the hook or needle, and connected together by being drawn the one through the other" (p. 222). Every stitch in this course is that move: pull a loop through a loop. What changes from one stitch to the next is how many times the yarn goes round the hook first, and how many loops you pull through at once.

**What makes it crochet and not just a chain.** In a 2018 paper called "Defining Crochet", Karp quotes a 1966 definition by Emery: crochet loops interwork "not only vertically with those in the previous row, as in knitting, but laterally as well". Karp's own conclusion is blunt: "a single row of chain stitches is not crochet, and can only become so when a second row of stitches is worked into it" (Karp, 2018, p. 1).

**How this course teaches.** Most of the instructions here come from manuals printed between 1840 and 1918, which are out of copyright and free to read today: E. Riego de la Branchardière's books of the 1840s; *Beeton's Book of Needlework* (1870); *The Priscilla Crochet Book* (Boston, 1908); and two American books of 1918, a *Handbook of Wool Knitting and Crochet* and *The Mary Frances Knitting and Crocheting Book*. Th. de Dillmont's *Encyclopedia of Needlework*, which this course leans on throughout, is free to read too, but its English edition carries no date. They disagree with each other constantly, above all about what to call a stitch, and the lessons show you the disagreement instead of hiding it. The modern conventions (yarn weights, hook sizes, abbreviations and chart symbols) come from the Craft Yarn Council's published standards.

**Words are a weak way to teach hands.** These manuals knew it, which is why they are full of engravings and photographs. Where a lesson names a figure, open the source at that page: every lesson ends with its sources and says where in them to look. Several lessons also show the figure itself, credited to its source and page.

**Where this fits.** Crocheting is part of the From Fiber to Fabric series on Learn.WitUS. Yarn is string, and the companion course *Making String* starts one step earlier, with how string is made. *Knot-Tying & Rope Work*, the course before this one in the series, is good practice for the hands.

To start you need a hook and some yarn. Which hook and which yarn are the next two lessons.

:::reveal According to Dillmont, how many crochet stitches are there, "in point of fact"? ||| One. All crochet is loops drawn one through another with a hook; every named stitch is a variation on that move.

:::reveal In Karp's definition, why is a single row of chain not yet crochet? ||| Because crochet loops interwork sideways with their neighbours as well as with the row before. A chain becomes crochet only when a second row is worked into it.

## Sources
${src(DILLMONT, `"Crochet Work", pp. 221-222 (printed pages, from the HTML edition's page anchors).`)}
${src(KARP, `postprint p. 1 (the Emery definition and Karp's conclusion).`)}`,
    },
    {
      slug: "hooks-and-sizes",
      title: "2 · Hooks, and why their numbers never agreed",
      section: "Section 1 · Hook, yarn, hands",
      recallContent: [
        {
          prompt: "Dillmont says there is, in point of fact, only one crochet stitch. What is it?",
          answer: "A loop drawn through another loop with the hook. Every named stitch is a variation on that one move.",
        },
        {
          prompt: "When does a chain become crochet, in Karp's definition?",
          answer: "When a second row of stitches is worked into it. A single row of chain is not yet crochet.",
        },
      ],
      body: `**What a hook is made of.** Dillmont lists the materials: "Hooks, or needles, as they are generally called, made of wood, bone or tortoise-shell are used for all the heavier kinds of crochet work in thick wool or cotton, and steel ones for the finer kinds" (Dillmont, n.d., p. 221). Notice the word "needles". In these manuals the hook is often called a needle, so a "crochet needle" in an old pattern is the hook. Dillmont's figures 400 to 402, on p. 222, show three of them: one with a wooden handle, one with a steel handle, and an English hook.

**The shape that matters.** "The points should be well polished inside and not too sharp, the backs slightly curved" (p. 221). Beeton (1870) says it in one line: "The needle, whether it be steel or bone, must be smoothly polished" (p. 185).

**Match the hook to the yarn.** Every manual says this. Dillmont: "it is most essential that the needle should be suited to the cotton in size" (p. 221). Beeton: "The size of the needle and that of the cotton or wool must correspond" (p. 185). The 1918 *Handbook* names the cost of a hook that is too big: "the work is apt to be sleazy".

**The numbers never agreed.** Hook sizes are an old muddle. Dillmont prints a table pairing her needle numbers 9, 10, 11, 12, 13, 14, 16 and 18 with D.M.C thread numbers (p. 222). Riego's 1848 book asks for "Needle No. 23, Bell Gauge" (Riego de la Branchardière, 1848, p. 5), a size given in one gauge's own numbers. By 1918 the *Handbook* had given up: "no two manufacturers use like numbers for the same sizes".

The Craft Yarn Council's answer was to measure. Its FAQ says "we realized there were differences in how various companies numbered their hook sizes. That was the main reason we adopted the metric sizing, which is the actual measurement (diameter) of the hook" (Craft Yarn Council, n.d.-c). Its hooks page gives the rule: "Because letter and number sizing vary from company to company, rely on the package millimeter (mm) sizing, which is an accurate measurement" (Craft Yarn Council, n.d.-d). Some rows of its crochet hook table:

| Millimetres | US size |
|---|---|
| 2.25 mm | B-1 |
| 3.50 mm | E-4 |
| 4 mm | G-6 |
| 5 mm | H-8 |
| 5.50 mm | I-9 |
| 6 mm | J-10 |
| 6.50 mm | K-10½ |
| 8 mm | L-11 |
| 10 mm | N/P-15 |

The same table also lists a 4.25 mm G and a 5.25 mm I, which is the whole problem in two rows: the letter alone does not tell you the size. Source: Craft Yarn Council www.YarnStandards.com.

**Steel hooks run backwards.** Fine thread is worked with small steel hooks, and their numbers run the other way: "the higher the number, the smaller the hook". Thread "is similarly sized: the smaller the number, the thicker the thread". The council says "The most common crochet threads are sizes 3, 5, 10, 20, and 30", going "up to size 100, which is the finest" (Craft Yarn Council, n.d.-g).

**One hook this course does not use.** Dillmont notes that "The Tunisian crochet is done with a long straight hook" (p. 221), with "a knob at one end" (pp. 241-243; plain Tunisian is fig. 444, p. 242). Tunisian crochet is a different technique and is not taught here.

:::reveal Why does the Craft Yarn Council tell you to trust the millimetre size on a hook's package? ||| Because letter and number sizes vary from company to company, while millimetres are the hook's actual diameter.

:::reveal Steel hook size 7 or steel hook size 10: which is smaller? ||| Size 10. Steel hooks run backwards: the higher the number, the smaller the hook.

## Sources
${src(DILLMONT, `"Crochet Work", p. 221 (materials, points, sizing); p. 222, figs. 400-402 and the needle-number table; pp. 241-243, with fig. 444, plain Tunisian crochet, on p. 242.`)}
${src(BEETON, `"Crochet", p. 185.`)}
${src(RIEGO_1848, `p. 5 (the materials line).`)}
${src(HANDBOOK, `section "A Lesson in Crochet", the remarks on hooks (this edition has no page numbers).`)}
${src(CYC_FAQ, `the question on hook sizing.`)}
${src(CYC_HOOKS, `the crochet hook table and the paragraph above it.`)}
${src(CYC_STEEL, `the opening paragraphs on steel hooks and thread sizes.`)}`,
    },
    {
      slug: "yarn-weights",
      title: "3 · Yarn weights, and the swatch that overrules the label",
      section: "Section 1 · Hook, yarn, hands",
      recallContent: [
        {
          prompt: "Why did the Craft Yarn Council adopt metric hook sizing?",
          answer: "Because companies numbered their hooks differently. Millimetres are the actual diameter of the hook, so the mm size on the package is the one to trust.",
        },
        {
          prompt: "Which way do steel hook numbers run?",
          answer: "Backwards: the higher the number, the smaller the hook. Crochet thread works the same way, with the smaller number being the thicker thread.",
        },
      ],
      body: `Yarn comes in thicknesses, and the thickness decides which hook suits it. The Craft Yarn Council sorts yarn into numbered weight categories, each with its own symbol. In the table read for this course there are eight, numbered 0 to 7.

| Category | US hook range | Metric hook range | Crochet gauge in single crochet, to 4 inches |
|---|---|---|---|
| 0 Lace | steel 6, 7, 8; regular hook B-1 | see the council's page | 32-42 double crochets |
| 1 Super fine | B-1 to E-4 | 2.25-3.5 mm | 21-32 stitches |
| 2 Fine | E-4 to 7 | 3.5-4.5 mm | 16-20 stitches |
| 3 Light | 7 to I-9 | 4.5-5.5 mm | 12-17 stitches |
| 4 Medium | I-9 to K-10½ | 5.5-6.5 mm | 11-14 stitches |
| 5 Bulky | K-10½ to M-13 | 6.5-9 mm | 8-11 stitches |
| 6 Super bulky | M-13 to Q | 9-15 mm | 7-9 stitches |
| 7 Jumbo | Q and larger | 15 mm and larger | 6 and fewer |

Source: Craft Yarn Council's www.YarnStandards.com (Craft Yarn Council, n.d.-f).

**How to read a row.** Take category 4, medium. The council suggests a hook from I-9 to K-10½, which is 5.5 to 6.5 mm, and expects 11 to 14 single crochet stitches across 4 inches. If a pattern names a weight and not a particular yarn, that row is where your swatch starts. Notice that the lace row counts double crochets, not single: read the row before you trust it.

**A range, not a promise.** The table's own footnote says "GUIDELINES ONLY". The council's FAQ is firmer: "The Standard Yarn Weight System should not be used as an interchangeability chart ... you must knit or crochet a gauge swatch to be sure" (Craft Yarn Council, n.d.-c). A number on the label puts a yarn in a range. It does not promise that two yarns in the same range will work up the same, and the only test is a swatch, which is lesson 19.

**About size 8.** The council's page announces an updated system that adds a size 8, with downloadable resources "coming soon". The table read for this course had no size 8 column, so this course stops at 7.

**Yarn is string.** Every row on this table is a strand at a particular thickness. The companion course *Making String* is about how a strand like that is made in the first place.

:::reveal What does the Craft Yarn Council say its yarn weight system must not be used as? ||| An interchangeability chart. It gives ranges; only a gauge swatch shows how a particular yarn and hook behave together.

:::reveal Which category does the council call medium, and what hook range does it suggest? ||| Category 4, with hooks from I-9 to K-10½, or 5.5 to 6.5 mm.

## Sources
${src(CYC_WEIGHTS, `the yarn weight table, rows "Crochet Gauge Ranges in Single Crochet to 4 inch" and "Recommended Hook U.S. Size Range", the metric hook row, and the footnotes.`)}
${src(CYC_FAQ, `the question on the yarn weight system and interchangeability.`)}`,
    },
    {
      slug: "holding-hook-and-yarn",
      title: "4 · Holding the hook and the yarn",
      section: "Section 1 · Hook, yarn, hands",
      recallContent: [
        {
          prompt: "What hook and gauge does the Craft Yarn Council suggest for a category 4 (medium) yarn?",
          answer: "Hooks from I-9 to K-10½ (5.5 to 6.5 mm), and 11 to 14 single crochet stitches across 4 inches.",
        },
        {
          prompt: "Why is the yarn weight table not an interchangeability chart?",
          answer: "It gives guideline ranges. Two yarns in one category can still work up differently, so only a gauge swatch settles it.",
        },
      ],
      body: `**The hook hand.** Three manuals describe the same grip: hold the hook like a pen. Dillmont: "hold the needle between the thumb and first finger of the right hand, letting it rest on the second finger, in the same manner in which you hold your pen" (Dillmont, n.d., pp. 223-224). Beeton: "The crochet-needle is held in the right hand between the thumb and forefinger, as you hold a pen in writing" (Beeton, 1870, pp. 186-187). The 1918 *Handbook*: "Hold the needle in the right hand very much as you hold a pen when writing". All three put the hook in the right hand.

**The yarn hand.** The left hand does two jobs at once: it holds the work and it feeds the yarn. The 1918 *Handbook* gives the most exact path: "Hold work with thumb and second finger of left hand, letting the thread pass over the forefinger, slightly raised, or held up from the work, under the second, over the third and under the little finger." Beeton holds the cotton "as for knitting on the forefinger and other fingers of the left hand" (pp. 186-187). Dillmont: "Take the thread in the left hand between the finger and thumb" (pp. 223-224). Her figure 403, "Position of the hands and explanation of chain stitch" (pp. 223-224), shows both hands together, and it is the picture to study before you try.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419359/witus/courses/crochet/crochet/dillmont-fig403-position-of-the-hands.jpg ||| An engraving of two hands crocheting, each wrist in a ruffled cuff and a dark sleeve. The hand on the right holds a slim hook between thumb and first finger, the way a pen is held, with its shaft pointing left. The hand on the left pinches the work between finger and thumb at the tip of the hook. Below the tip hang two strands: a plain length of thread, and a short length of chain that looks like a narrow braid. ||| Dillmont's figure 403, "Position of the hands and explanation of chain stitch" (p. 223). Check each hand against her words: the hook is held "in the same manner in which you hold your pen", and the thread is taken "in the left hand between the finger and thumb". The braided strand hanging down is the chain already made. ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Crochet Work", p. 223, Fig. 403, Position of the hands and explanation of chain stitch. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 403. Position of the hands and explanation of chain stitch.jpg (the same engraving is 416.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._403._Position_of_the_hands_and_explanation_of_chain_stitch.jpg

**The over.** One word you will meet in every lesson after this one. Dillmont defines it: "The throwing of the thread round the needle by a jerk of the wrist is called an 'over'" (pp. 223-224). The Mary Frances book calls the same move "wrapping" the yarn (Fryer, 1918, p. 48). Modern US patterns call it a yarn over, written yo, and UK patterns call it yarn over hook, yoh (Craft Yarn Council, n.d.-a).

**Work at the point.** Beeton adds a rule about where the loop sits: "work only with the point of the needle, and never move the stitch up and down the needle" (p. 185).

**How tight.** The sources agree on evenness more than on any number. Dillmont tightens the loop of the first stitch "just enough to leave an easy passage through it for the needle" (pp. 223-224). Beeton: "The stitches must be elastic, but if too loose they look as bad as if too tight" (p. 185), and "Each stitch must be loose enough to let the hook of the needle pass easily through" (p. 187). The 1918 *Handbook* tightens each loop "so that all will be of uniform size and smoothness". Two mathematicians crocheting a geometry model asked for the same thing: "Be sure to crochet fairly tight and even" (Henderson & Taimina, n.d.).

**One word, two meanings.** In a British pattern "tension" means what an American pattern calls gauge (Craft Yarn Council, n.d.-a). This lesson is about how firmly you work; gauge, in either name, is lesson 19.

:::reveal What grip do Dillmont, Beeton and the 1918 Handbook all describe for the hook? ||| Like a pen, between the thumb and first finger of the right hand.

:::reveal What did Dillmont call throwing the thread round the hook? ||| An "over". The Mary Frances book calls it wrapping; US patterns say yarn over (yo), and UK patterns yarn over hook (yoh).

## Sources
${src(DILLMONT, `"Crochet Work", pp. 223-224, fig. 403 ("Position of the hands and explanation of chain stitch").`)}
${src(BEETON, `"Crochet", p. 185 (working at the point; elastic stitches) and pp. 186-187, Ill. 216 (holding hook and cotton).`)}
${src(HANDBOOK, `section "A Lesson in Crochet", the holding instructions and Figure 1.`)}
${src(FRYER, `p. 48, Plate 1 ("wrapping" the yarn).`)}
${src(CYC_ABBR, `the table "Abbreviation & Term Differences between the U.S., United Kingdom (U.K.) and Canada" (yo and yoh; gauge and tension).`)}
${src(HT, `section "2. How to Crochet the Hyperbolic Plane".`)}`,
    },
    {
      slug: "the-slip-knot",
      title: "5 · The slip knot, and other ways to put the first loop on",
      section: "Section 1 · Hook, yarn, hands",
      recallContent: [
        {
          prompt: "Where does the yarn run in the 1918 Handbook's left hand?",
          answer: "Over the forefinger (held slightly raised), under the second finger, over the third and under the little finger, with the work held by the thumb and second finger.",
        },
        {
          prompt: "What did Dillmont call throwing the yarn round the hook, and what do US patterns call it?",
          answer: "An \"over\". US patterns call it a yarn over (yo); UK patterns say yarn over hook (yoh).",
        },
      ],
      body: `**The step nobody prints.** Jean Leinhauser's guide to reading patterns, published by the Craft Yarn Council, starts with the step that patterns leave out: "the very first thing you must do is make a slip knot on your hook. Does the pattern tell you this? No" (Leinhauser, n.d.). Patterns assume it. So this lesson teaches it.

**Not in the knots course.** The *Knot-Tying & Rope Work* course on Learn.WitUS does not teach a slip knot, so it is taught here.

**The slip knot from Mary Frances (1918).** *The Mary Frances Knitting and Crocheting Book* teaches the knot on p. 148, beside Plate 4, a photograph whose caption calls it the right way to make a slip knot and the first step in knitting. A crochet chain starts from the same knot on the hook. The book's steps, in its own words:

1. "Hold yarn in hands as shown in this picture."
2. "Let upper thread fall behind the second finger of left hand."
3. "Catch it between the first and second fingers."
4. "Pull hard on the thread in the right hand bringing the loop off the left-hand fingers."
5. "Draw knot up tight."
6. "Slip the loop on a knitting needle and draw it up close."

The book teaches the knot as the first step in knitting, so its last step puts the loop on a knitting needle. For crochet, put the same loop on your hook.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419524/witus/courses/crochet/crochet/fryer-1918-plate4-slip-knot.jpg ||| A page of six numbered black-and-white photographs, in two columns, of a pair of hands tying a knot in white yarn against a black background. In 1 to 3, the left hand is held out with its first two fingers extended while the right hand, at the upper right, draws the yarn across them and then round them. In 4, a small round loop has formed at the left hand's fingertips. In 5, the right hand pulls the yarn and the knot closes up between the hands. In 6, the right hand holds a long straight knitting needle with the knot on it, and the left hand holds the loose yarn below. ||| Plate 4 of the Mary Frances book, captioned "Motion Pictures Showing the Right Way to Make a Slip Knot": the plate the steps on p. 148 lean on. The pictures are numbered as the steps are, so "Hold yarn in hands as shown in this picture" means picture 1. The last picture puts the knot on a knitting needle, because the book teaches it as the first step in knitting. For crochet, the same knot goes on your hook. ||| J. E. Fryer, The Mary Frances Knitting and Crocheting Book (John C. Winston, 1918), Plate 4, unnumbered plate facing p. 148. Public domain in the USA. Image via Project Gutenberg eBook 52396. https://www.gutenberg.org/ebooks/52396

**Read the steps with the plate.** Those lines are not the whole instruction. The text leans on its photograph: the first step says only "as shown in this picture", and the book's own text runs on between the lines quoted here. How to hold the yarn at the start is given only by the plate; the words never describe it. Plate 4 is shown above (in the book it faces p. 148): read the steps with it in front of you, and note that its last picture puts the knot on a knitting needle, where a crocheter puts it on the hook. A slip knot learned from words alone is a guess.

**Two other ways in.** The same book starts its crochet chain without a slip knot at all: "Pointing the hook away from you, turn it completely around, bringing a loop on the needle" (Fryer, 1918, p. 48). Plate 1, which the book calls its "motion pictures", shows the move. The older manuals say even less about the first loop. Riego (1846) begins a chain with "Make a loop, and draw the wool through it" (Riego de la Branchardière, 1846, p. 55), and the 1918 *Handbook* with "Make a loop of thread around the needle". For a beginner, the slip knot is the version a source teaches step by step, with a picture.

**It is not a stitch.** However you put the first loop on, do not count it. Leinhauser: "do not count the slip knot as a stitch. The loop on the hook is never counted as a stitch." You will use that rule in every count from here on.

:::reveal Does a crochet pattern usually tell you to make a slip knot first? ||| No. Patterns assume it: you make a slip knot on the hook before the first chain.

:::reveal Do you count the slip knot, or the loop on the hook, as a stitch? ||| No. Neither is ever counted.

## Sources
${src(LEINHAUSER, `section "Getting Started" (the slip knot, and the counting rule for the slip knot and the loop on the hook).`)}
${src(FRYER, `p. 148, Plate 4 (the slip knot); p. 48, Plate 1 (the turned-hook loop that starts a chain).`)}
${src(RIEGO_1846, `p. 55, "Terms Used in Crochet" ("To make a chain").`)}
${src(HANDBOOK, `section "A Lesson in Crochet", Figure 1 (chain).`)}`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Hook, yarn, hands",
      section: "Section 1 · Hook, yarn, hands",
      body: "A graded check on hooks, yarn weights, holding the hook and yarn, and the first loop. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // ── what-crochet-is ──
          {
            prompt: "According to Dillmont, where does the name crochet come from?",
            options: ["The French word for hook", "A Dutch word for needle", "The Scottish name for a shepherd's walking crook", "An Italian word for the trimmings sold by passementiers"],
            correctIndex: 0,
            explanation: "Dillmont, p. 221: \"Crochet work, so called from the hook, French croche or croc, with which it is done.\"",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "How many crochet stitches does Dillmont say there are, \"in point of fact\"?",
            options: ["Eight", "One", "Two", "Five"],
            correctIndex: 1,
            explanation: "Dillmont, p. 222: \"In point of fact, there is only one, because all crochet work consists of loops made by means of the hook or needle, and connected together by being drawn the one through the other.\"",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "In Dillmont's account, what is every crochet stitch at bottom?",
            options: ["A knot tied round a strand", "A twist of yarn locked in place by a frame", "A loop drawn through a loop", "A loop passed from one needle to a second needle"],
            correctIndex: 2,
            explanation: "All crochet, Dillmont says, is loops made with the hook and \"drawn the one through the other\". Every named stitch is a variation on that move.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "What changes from one stitch to the next, as lesson 1 explains it?",
            options: ["The kind of fibre the yarn is spun from", "Which hand holds the hook during the stitch", "Whether the stitch is worked on a frame or loose", "How many wraps, and how many loops pulled"],
            correctIndex: 3,
            explanation: "The move is always a loop through a loop. What changes is how many times the yarn goes round the hook first, and how many loops you pull through at once.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "In Karp's definition, when does a row of chain become crochet?",
            options: ["When a second row is worked into it", "As soon as the chain is longer than twenty stitches", "When the chain is joined into a ring with a slip stitch", "Once both ends are fastened off"],
            correctIndex: 0,
            explanation: "Karp, p. 1: \"a single row of chain stitches is not crochet, and can only become so when a second row of stitches is worked into it.\"",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "Emery's definition, as Karp quotes it, says crochet loops interwork vertically and also how?",
            options: ["Diagonally", "Laterally as well", "Only through the back loop of the row before", "Through a frame that holds the fabric taut"],
            correctIndex: 1,
            explanation: "Crochet loops interwork \"not only vertically with those in the previous row, as in knitting, but laterally as well\" (Karp, quoting Emery, p. 1).",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "Most of this course's period manuals were printed in which span of years?",
            options: ["1653 to 1767, before crochet instructions were printed", "1950 to 2001", "1840 to 1918", "1567 to 1823, from royal accounts to Penélopé"],
            correctIndex: 2,
            explanation: "The manuals run from Gaugain's 1840 book to the two American books of 1918, all out of copyright and free to read.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "What do this course's period manuals disagree about most?",
            options: ["Whether the hook belongs in the right or left hand", "Whether a foundation chain is needed at all", "Wool or cotton", "What to call a stitch"],
            correctIndex: 3,
            explanation: "They disagree constantly, above all about stitch names, and the lessons show the disagreement instead of hiding it.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "Where do this course's modern conventions for yarn weights and chart symbols come from?",
            options: ["The Craft Yarn Council", "The 1918 Handbook of Wool Knitting and Crochet", "Dillmont's Encyclopedia of Needlework tables", "Priscilla's 1908 book"],
            correctIndex: 0,
            explanation: "Yarn weights, hook sizes, abbreviations and chart symbols come from the Craft Yarn Council's published standards.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "Why are the period manuals full of engravings and photographs, as lesson 1 puts it?",
            options: ["Printing rules then required a picture on each page", "Words are a weak way to teach hands", "Their readers could not read", "The engravings were sold separately as patterns"],
            correctIndex: 1,
            explanation: "Lesson 1: words are a weak way to teach hands, and the manuals knew it. Where a lesson names a figure, open the source at that page.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "When a lesson names a figure, where should you look?",
            options: ["In the quiz explanation, which reprints each figure", "In a course image gallery", "In the source, at that page", "On the Craft Yarn Council's chart symbol page"],
            correctIndex: 2,
            explanation: "Every lesson ends with its sources and says where in them to look. Several lessons also show the figure itself, credited to its source and page.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "Which series is Crocheting part of?",
            options: ["The House You Live In, beside Keeping a House", "Rope and Rigging, with Knot-Tying & Rope Work", "Trade Skills Essentials, with broadcasting", "From Fiber to Fabric"],
            correctIndex: 3,
            explanation: "Crocheting is part of the From Fiber to Fabric series on Learn.WitUS, after Making String.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "What does the companion course Making String teach, as this course describes it?",
            options: ["How string is made", "How to read US and UK crochet patterns", "How to tie the slip knot this course leaves out", "Blocking crochet"],
            correctIndex: 0,
            explanation: "Yarn is string, and Making String starts one step earlier than this course, with how string is made.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "Is the Knot-Tying & Rope Work course part of the From Fiber to Fabric series?",
            options: ["Yes, it opens the series", "Yes, as its second course", "Yes, it replaces this course's lessons on the chain", "No, it is a separate neighbour"],
            correctIndex: 1,
            explanation: "Lesson 1: Knot-Tying & Rope Work is the course before this one in the series, good practice for the hands. Making String opens the series.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "What does lesson 1 say you need to start?",
            options: ["A tambour frame", "A pattern book and a set of steel needles", "A hook and some yarn", "A spinning wheel and a yarn ball winder"],
            correctIndex: 2,
            explanation: "A hook and some yarn. Which hook and which yarn are the next two lessons.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "Which of these is one of this course's period manuals?",
            options: ["Verrill's Knots, Splices and Rope Work of 1917", "Paludan's monograph on early crochet evidence", "Affinity Online, the 2018 NYU Press study", "Beeton's Book of Needlework"],
            correctIndex: 3,
            explanation: "Beeton's Book of Needlework (1870) is one of the manuals, with Dillmont, Riego, Priscilla and the two 1918 books.",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "Does the English edition of Dillmont's Encyclopedia carry a printed date?",
            options: ["Yes, 1840 on its title page", "No, it carries no date", "Yes, 1918, like the Handbook", "Yes, 1870, like Beeton"],
            correctIndex: 1,
            explanation: "Its English edition carries no date, which is why this course cites it as (n.d.) and leaves it out of the 1840 to 1918 span.",
            sourceLessonSlug: "what-crochet-is",
          },
          // ── hooks-and-sizes ──
          {
            prompt: "What does Dillmont say the hooks for heavier work are made of?",
            options: ["Wood, bone or tortoise-shell", "Brass, pewter or polished copper wire", "Ivory only, since bone splinters in wool", "Aluminium or plastic"],
            correctIndex: 0,
            explanation: "Dillmont, p. 221: hooks \"made of wood, bone or tortoise-shell are used for all the heavier kinds of crochet work in thick wool or cotton, and steel ones for the finer kinds\".",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What does Dillmont use steel hooks for?",
            options: ["Tunisian crochet worked in thick wool", "The finer kinds of work", "The heaviest work in thick cotton", "Tambour work only"],
            correctIndex: 1,
            explanation: "Wood, bone or tortoise-shell for the heavier kinds; \"steel ones for the finer kinds\" (Dillmont, p. 221).",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "In these older manuals, what is a \"crochet needle\"?",
            options: ["A sewing needle", "The frame that tambour work is stretched on", "The hook itself", "A knitting needle used for the first row"],
            correctIndex: 2,
            explanation: "Dillmont writes \"Hooks, or needles, as they are generally called\", and Beeton writes of \"The needle, whether it be steel or bone\". In an old pattern the needle is the hook.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What does Dillmont want the point of a hook to be like?",
            options: ["Sharpened fine so that it pierces the yarn", "Left rough so the yarn grips and cannot slip", "Flattened like a spoon handle for a wide loop", "Polished, not too sharp"],
            correctIndex: 3,
            explanation: "\"The points should be well polished inside and not too sharp, the backs slightly curved\" (Dillmont, p. 221).",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What does Beeton (1870) say about the needle, whether steel or bone?",
            options: ["It must be smoothly polished", "It must be at least as long as the worker's hand", "It must be hollow", "It must be warmed before use so the wool softens"],
            correctIndex: 0,
            explanation: "Beeton, p. 185: \"The needle, whether it be steel or bone, must be smoothly polished.\"",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What do Dillmont and Beeton both say about the hook and the yarn?",
            options: ["The hook must always be steel, whatever the yarn", "Their sizes must match", "The yarn must be twice as thick as the hook", "Size does not matter"],
            correctIndex: 1,
            explanation: "Dillmont: the needle must be \"suited to the cotton in size\". Beeton: \"The size of the needle and that of the cotton or wool must correspond.\"",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What does the 1918 Handbook say happens with a hook that is too large?",
            options: ["The stitches split the yarn and the row puckers", "The yarn breaks", "The work is apt to be sleazy", "The hook slips and drops every third loop"],
            correctIndex: 2,
            explanation: "The Handbook's one line on it: with a hook that is too large, \"the work is apt to be sleazy\".",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What did the 1918 Handbook say about hook numbers?",
            options: ["Every maker had adopted one shared numbering", "Numbers had been replaced by millimetres by law", "Only steel hooks carried a size number at all", "Makers used different numbers"],
            correctIndex: 3,
            explanation: "\"no two manufacturers use like numbers for the same sizes\" (Handbook, 1918). The muddle is old.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "Which hook does Riego's 1848 book ask for?",
            options: ["Needle No. 23, Bell Gauge", "A 5 mm ivory hook", "A wooden hook sized E-4 on the US letter scale", "A tortoise-shell hook cut from a comb's tooth"],
            correctIndex: 0,
            explanation: "Riego (1848, p. 5) asks for \"Needle No. 23, Bell Gauge\", a size given in one gauge's own numbers.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What does Dillmont's table on p. 222 pair her needle numbers with?",
            options: ["Craft Yarn Council weight categories 0 to 7", "D.M.C thread numbers", "US letter sizes from B-1 to N/P-15", "Millimetre diameters"],
            correctIndex: 1,
            explanation: "Dillmont pairs needle numbers 9, 10, 11, 12, 13, 14, 16 and 18 with D.M.C thread numbers. The council's weights and letters came much later.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "Why did the Craft Yarn Council adopt metric hook sizing?",
            options: ["European law required metric labels after 1918", "The letters ran out after the size Q hook", "Companies numbered hooks differently", "Steel hooks could not be marked with a letter"],
            correctIndex: 2,
            explanation: "Its FAQ: there were \"differences in how various companies numbered their hook sizes. That was the main reason we adopted the metric sizing\".",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What does a hook's millimetre size measure, according to the council?",
            options: ["Its length", "The depth of the throat that holds the yarn", "The weight of the hook in tenths of a gram", "Its diameter"],
            correctIndex: 3,
            explanation: "Metric sizing \"is the actual measurement (diameter) of the hook\" (Craft Yarn Council FAQ).",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "On a hook's package, which size does the council tell you to rely on?",
            options: ["The millimetre size", "The letter", "The number printed by the yarn maker on the ball", "Whichever size the pattern's photograph shows"],
            correctIndex: 0,
            explanation: "\"Because letter and number sizing vary from company to company, rely on the package millimeter (mm) sizing, which is an accurate measurement.\"",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "In the council's hook table, which US size is the 5 mm hook?",
            options: ["G-6", "H-8", "I-9", "K-10½"],
            correctIndex: 1,
            explanation: "5 mm is H-8. The neighbours are 4 mm G-6 and 5.50 mm I-9.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "In the council's hook table, which US size is the 6 mm hook?",
            options: ["K-10½", "I-9", "J-10", "L-11"],
            correctIndex: 2,
            explanation: "6 mm is J-10. K-10½ is 6.50 mm, and L-11 is 8 mm.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "The council's table lists both a 4 mm and a 4.25 mm hook under one letter. Which letter?",
            options: ["E", "N", "H", "G"],
            correctIndex: 3,
            explanation: "4 mm is G-6 and 4.25 mm is also a G. The table does the same with I at 5.25 and 5.50 mm.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What does lesson 2 say the 4.25 mm G and the 5.25 mm I show?",
            options: ["A letter alone is not a size", "That metric sizes were dropped in favour of letters", "That the council's table contains printing errors", "That steel hooks are sized the same as regular ones"],
            correctIndex: 0,
            explanation: "Two hooks share a letter, so the letter alone does not tell you the size. That is why the council says to rely on millimetres.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "Which steel hook is smaller: size 7 or size 10?",
            options: ["Size 7", "Size 10", "They are the same; steel hooks carry no sizes", "Size 7, because steel numbers count millimetres"],
            correctIndex: 1,
            explanation: "Steel hooks run backwards: \"the higher the number, the smaller the hook\".",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "Which crochet thread is thicker: size 10 or size 30?",
            options: ["Size 30", "They are equal; the size number names the colour", "Size 10", "Size 30, since thread runs like regular hooks"],
            correctIndex: 2,
            explanation: "Thread \"is similarly sized: the smaller the number, the thicker the thread\" (Craft Yarn Council).",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "Which thread size does the council call the finest?",
            options: ["Size 3", "Size 30, the highest of the common sizes", "Size 0, the lace row on the yarn table", "Size 100"],
            correctIndex: 3,
            explanation: "The most common threads are sizes 3, 5, 10, 20 and 30, going \"up to size 100, which is the finest\".",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "What kind of hook does Tunisian crochet use, per Dillmont?",
            options: ["A long straight hook", "A short hook with a flat, spoon-shaped end", "A forked hairpin", "A tambour needle screwed into a case"],
            correctIndex: 0,
            explanation: "\"The Tunisian crochet is done with a long straight hook\" (p. 221), with \"a knob at one end\" (pp. 241-243; fig. 444 is on p. 242).",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "Does this course teach Tunisian crochet?",
            options: ["Yes, in shaping", "No, it is not taught", "Yes, as the last of the four projects", "Yes, alongside the slip knot in section 1"],
            correctIndex: 1,
            explanation: "Tunisian crochet is a different technique. It is mentioned so the long hook is not a mystery, and is not taught.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          // ── yarn-weights ──
          {
            prompt: "How many yarn weight categories did the council's table have when it was read for this course?",
            options: ["Five, numbered 1 to 5, with no lace", "Six, from fine to jumbo, with no zero", "Eight, 0 to 7", "Ten, numbered 0 to 9, with two jumbos"],
            correctIndex: 2,
            explanation: "Eight categories, 0 lace to 7 jumbo. A size 8 was announced but was not in the table.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "Which category does the council call medium?",
            options: ["2", "6", "0", "4"],
            correctIndex: 3,
            explanation: "Category 4 is medium: hooks I-9 to K-10½ (5.5 to 6.5 mm), 11 to 14 single crochet to 4 inches.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "What hook range does the council suggest for medium yarn?",
            options: ["I-9 to K-10½", "B-1 to E-4, the range for super fine yarn", "M-13 to Q, the range for super bulky yarn", "E-4 to 7"],
            correctIndex: 0,
            explanation: "Medium (4): I-9 to K-10½, or 5.5 to 6.5 mm.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "How many single crochet across 4 inches does the council expect from medium yarn?",
            options: ["21 to 32", "11 to 14", "6 and fewer, as for jumbo yarn", "32 to 42, as for the lace row"],
            correctIndex: 1,
            explanation: "11 to 14 single crochet to 4 inches for category 4. It is a guideline range, not a promise.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "Which category is jumbo?",
            options: ["5", "6", "7", "0"],
            correctIndex: 2,
            explanation: "7 is jumbo: hook Q and larger, 15 mm and larger, 6 and fewer stitches to 4 inches.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "What metric hook range goes with category 1, super fine?",
            options: ["5.5-6.5 mm, as for medium yarn", "9-15 mm, as for super bulky yarn", "15 mm and larger, as for jumbo yarn", "2.25-3.5 mm"],
            correctIndex: 3,
            explanation: "Super fine (1): B-1 to E-4, 2.25 to 3.5 mm.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "In the lace row of the gauge table, what does the count measure?",
            options: ["Double crochets", "Single crochets, like every other row", "Half double crochets, the middle stitch", "Chains"],
            correctIndex: 0,
            explanation: "The lace row gives 32-42 double crochets, while the other rows count single crochet. Read the row before you trust it.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "What does the yarn table's own footnote say about its ranges?",
            options: ["MANDATORY FOR ALL PATTERN PUBLISHERS", "GUIDELINES ONLY", "VALID ONLY FOR WOOL, NOT FOR COTTON", "MEASURED AFTER BLOCKING THE SWATCH"],
            correctIndex: 1,
            explanation: "The footnote says \"GUIDELINES ONLY\", and the FAQ adds that you must make a gauge swatch to be sure.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "The council says its yarn weight system should not be used as what?",
            options: ["A hook-size guide", "A way to read the weight symbol on a yarn label", "An interchangeability chart", "A starting point for choosing your gauge swatch"],
            correctIndex: 2,
            explanation: "\"The Standard Yarn Weight System should not be used as an interchangeability chart ... you must knit or crochet a gauge swatch to be sure.\"",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "Two yarns sit in the same weight category. What does the council say tells you whether they behave alike?",
            options: ["The labels", "Checking that both were spun by the same company", "Weighing both balls and matching their grams", "A gauge swatch"],
            correctIndex: 3,
            explanation: "A category puts a yarn in a range. Only a swatch shows how a particular yarn and hook work up.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "What did the council's page announce that its table did not yet show when read for this course?",
            options: ["A size 8", "A metric column for every category", "A category for steel crochet thread", "A separate table for UK yarn names"],
            correctIndex: 0,
            explanation: "The page announced an updated system with a size 8 and resources \"coming soon\"; the table had no size 8 column.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "Why does this course stop its yarn table at category 7?",
            options: ["The council's page says 7 is the largest it will use", "The table read had no size 8", "Category 8 appears in the table with no hook range", "Dillmont's table of needle numbers stops at 7"],
            correctIndex: 1,
            explanation: "The page announced a size 8, but the table read for this course had no size 8 column, so the course stops at 7.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "A pattern names a yarn weight but no particular yarn. Where does lesson 3 say your swatch starts?",
            options: ["With the hook size printed on the pattern's cover", "With a 5 mm hook", "At that weight's row in the table", "With the smallest steel hook you happen to own"],
            correctIndex: 2,
            explanation: "That row gives the suggested hook range and the expected gauge, which is where a swatch begins.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "What does this course say yarn is?",
            options: ["A knitted tube that is cut into lengths", "Fibre that is crocheted before it is sold", "A chain made with a tambour needle", "String"],
            correctIndex: 3,
            explanation: "Yarn is string: every row on the weight table is a strand at a particular thickness. Making String is about how one is made.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "What hook range does the council give for super bulky yarn?",
            options: ["M-13 to Q", "I-9 to K-10½, the range for medium", "B-1 to E-4, the range for super fine", "7 to I-9"],
            correctIndex: 0,
            explanation: "Super bulky (6): M-13 to Q, 9 to 15 mm.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "Light yarn, category 3, goes with which metric hook range?",
            options: ["2.25-3.5 mm, as for super fine yarn", "4.5-5.5 mm", "6.5-9 mm", "9-15 mm, as for super bulky yarn"],
            correctIndex: 1,
            explanation: "Light (3): 7 to I-9, 4.5 to 5.5 mm, 12 to 17 stitches to 4 inches.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "Which category's hook range starts with steel hooks?",
            options: ["7, jumbo, the largest category", "4, medium, which starts at I-9", "0, lace", "1, super fine, which starts at B-1"],
            correctIndex: 2,
            explanation: "Lace (0): steel 6, 7, 8, and regular hook B-1.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "What hook range does the council give for bulky yarn, category 5?",
            options: ["I-9 to K-10½, the range for medium", "K-10½ to M-13", "M-13 to Q, the range for super bulky", "E-4 to 7"],
            correctIndex: 1,
            explanation: "Bulky (5): K-10½ to M-13, 6.5 to 9 mm, 8 to 11 stitches to 4 inches.",
            sourceLessonSlug: "yarn-weights",
          },
          // ── holding-hook-and-yarn ──
          {
            prompt: "How do Dillmont, Beeton and the 1918 Handbook all say to hold the hook?",
            options: ["Like a knife, with the palm over the handle", "Like a spoon, resting in curled fingers", "Like a bow", "Like a pen"],
            correctIndex: 3,
            explanation: "All three: like a pen. Dillmont: \"in the same manner in which you hold your pen\". Beeton: \"as you hold a pen in writing\".",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "Which hand holds the hook in all three manuals?",
            options: ["The right", "The left, with the yarn in the right hand", "Either; the manuals describe both ways", "Neither; the hook rests in a frame"],
            correctIndex: 0,
            explanation: "All three put the hook in the right hand and the yarn and work in the left.",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "In Dillmont's grip, which finger does the hook rest on?",
            options: ["The little finger, curled under the hook", "The second finger", "The thumb, with the first finger on top", "The third finger"],
            correctIndex: 1,
            explanation: "Hold it \"between the thumb and first finger of the right hand, letting it rest on the second finger\" (Dillmont, pp. 223-224).",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "What two jobs does the left hand do?",
            options: ["Turns the work and counts the chains", "Holds the pattern and marks each row", "Holds the work and feeds the yarn", "Steadies the hook and cuts the yarn"],
            correctIndex: 2,
            explanation: "The left hand holds the work and feeds the yarn at the same time; the 1918 Handbook gives the exact path.",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "In the 1918 Handbook's left hand, where does the thread go first?",
            options: ["Under the little finger, then round the wrist", "Under the thumb", "Round the third finger twice, then over", "Over the forefinger"],
            correctIndex: 3,
            explanation: "\"letting the thread pass over the forefinger, slightly raised, or held up from the work, under the second, over the third and under the little finger.\"",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "Which fingers of the left hand hold the work, in the 1918 Handbook?",
            options: ["Thumb and second finger", "Thumb and forefinger", "Third finger and little finger, curled in", "The whole palm, with the fingers spread"],
            correctIndex: 0,
            explanation: "\"Hold work with thumb and second finger of left hand\", while the thread runs over and under the fingers.",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "In the 1918 Handbook's path, which fingers does the thread pass under?",
            options: ["The forefinger and the third finger", "The second and little fingers", "The thumb and forefinger", "Only the third finger and no other"],
            correctIndex: 1,
            explanation: "Over the forefinger, under the second, over the third, under the little finger.",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "Which of Dillmont's figures shows both hands making chain?",
            options: ["Figure 444, plain Tunisian crochet", "Figure 842, a thimble for tambouring", "Figure 403", "Figure 400"],
            correctIndex: 2,
            explanation: "Figure 403, \"Position of the hands and explanation of chain stitch\", pp. 223-224.",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "What did Dillmont call throwing the thread round the hook?",
            options: ["A draw, counted once for each loop", "A wrap, as the Mary Frances book says", "A catch, from Gaugain's tambour terms", "An over"],
            correctIndex: 3,
            explanation: "\"The throwing of the thread round the needle by a jerk of the wrist is called an 'over'\" (Dillmont, pp. 223-224).",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "What does the Mary Frances book call catching the yarn on the hook?",
            options: ["Wrapping", "Throwing, after Dillmont's jerk of the wrist", "Casting on, as the knitting manuals say", "Hooking"],
            correctIndex: 0,
            explanation: "Fryer (1918), p. 48: \"This is called 'wrapping' the yarn.\"",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "How is yarn over abbreviated in a US pattern?",
            options: ["yoh, the UK abbreviation", "yo", "ov", "wr, short for a wrap"],
            correctIndex: 1,
            explanation: "US patterns write yo; UK patterns write yoh, yarn over hook (Craft Yarn Council).",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "What do UK patterns call a yarn over?",
            options: ["Wool round needle, as in knitting", "Thread throw, after Dillmont's over", "Yarn over hook", "Loop pull"],
            correctIndex: 2,
            explanation: "The Craft Yarn Council's second table: U.S. yarn over (yo) is U.K. yarn over hook (yoh).",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "Where on the hook does Beeton say to work?",
            options: ["Along the whole shaft, sliding each loop down", "At the handle end, where the hook is widest", "Wherever the loop sits, as long as it is even", "Only with the point"],
            correctIndex: 3,
            explanation: "\"work only with the point of the needle, and never move the stitch up and down the needle\" (Beeton, p. 185).",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "What does Beeton say about moving the stitch along the needle?",
            options: ["Never move it up and down", "Slide it to the handle", "Move it to the widest part to size the loop", "Push it up the shaft to loosen a tight row"],
            correctIndex: 0,
            explanation: "Work only with the point, \"and never move the stitch up and down the needle\".",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "How tight does Dillmont make the first loop?",
            options: ["As tight as the yarn allows without breaking", "Just enough for the hook to pass", "Loose enough to fit two fingers through it", "Not at all"],
            correctIndex: 1,
            explanation: "Tightening it \"just enough to leave an easy passage through it for the needle\" (Dillmont, pp. 223-224).",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "What does Beeton say about stitches that are too loose?",
            options: ["They are easier to count than tight ones", "They are needed for every turning chain", "They look as bad as too tight", "They make the fabric stronger when washed"],
            correctIndex: 2,
            explanation: "\"The stitches must be elastic, but if too loose they look as bad as if too tight\" (Beeton, p. 185).",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "What did the 1918 Handbook want of every loop?",
            options: ["A slight twist", "A larger size at the start of each new row", "Extra slack so the work can be stretched", "Uniform size and smoothness"],
            correctIndex: 3,
            explanation: "Tighten each loop as drawn through \"so that all will be of uniform size and smoothness\".",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "What did Henderson and Taimina ask for when crocheting their model?",
            options: ["Fairly tight and even", "Loose and airy", "Tight at the centre and loose at the edge", "Uneven, so that the surface curls on its own"],
            correctIndex: 0,
            explanation: "\"Be sure to crochet fairly tight and even\" (Henderson & Taimina, section 2).",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "On tension, what do the sources agree on more than on any number?",
            options: ["The exact hook size for every yarn weight", "Evenness", "The number of chains needed in every ring", "Colour"],
            correctIndex: 1,
            explanation: "The 1918 Handbook wants loops \"of uniform size and smoothness\" and Henderson and Taimina say \"Be sure to crochet fairly tight and even\"; Dillmont and Beeton want room for the hook to pass, and Beeton warns that too loose looks as bad as too tight.",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "In a British pattern, what does \"tension\" mean?",
            options: ["How hard you pull on the yarn as you work", "The number of turning chains in each row", "What a US pattern calls gauge", "The weight category printed on the label"],
            correctIndex: 2,
            explanation: "The council's table: U.S. gauge is U.K. tension. Lesson 4 is about how firmly you work; gauge, in either name, is lesson 19.",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          // ── the-slip-knot ──
          {
            prompt: "What does Leinhauser say is the very first thing you must do?",
            options: ["Count out the chains the first row needs", "Read the pattern's gauge and swatch it", "Wind the yarn into a ball", "Make a slip knot on the hook"],
            correctIndex: 3,
            explanation: "\"the very first thing you must do is make a slip knot on your hook. Does the pattern tell you this? No\" (Leinhauser).",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "Does a pattern usually tell you to make the slip knot?",
            options: ["No, it is left out", "Yes, always", "Yes, but only in UK-terms patterns", "Yes, written as sk in the abbreviations"],
            correctIndex: 0,
            explanation: "Patterns assume it. Leinhauser asks \"Does the pattern tell you this?\" and answers \"No\".",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "Does the Knot-Tying & Rope Work course teach a slip knot?",
            options: ["Yes, in its lesson on the overhand knot", "No", "Yes, as the first knot of its first section", "Yes, in its lesson on whipping a rope end"],
            correctIndex: 1,
            explanation: "It does not, so this course teaches the slip knot itself, from the Mary Frances book.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "Where in the Mary Frances book is the slip knot taught?",
            options: ["p. 48, with Plate 1, in the crochet half", "p. 206, beside the Little Crocheted Hat", "p. 148, with Plate 4", "p. 69, the scarf"],
            correctIndex: 2,
            explanation: "p. 148, beside Plate 4, whose caption calls it the right way to make a slip knot.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "What does the caption of Plate 4 in the Mary Frances book call the slip knot?",
            options: ["The first chain of a crochet row", "A knot for joining two rope ends", "The last step before fastening off", "The first step in knitting"],
            correctIndex: 3,
            explanation: "Plate 4's caption calls it the right way to make a slip knot, the first step in knitting (p. 148). A crochet chain starts from the same knot on the hook.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "What does step 1 of the Mary Frances slip knot say?",
            options: ["Hold the yarn as the picture shows", "Tie an overhand knot near the end of the yarn", "Wind the yarn round the hook", "Make a chain of three and pull the tail"],
            correctIndex: 0,
            explanation: "\"Hold yarn in hands as shown in this picture.\" The step depends on Plate 4.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "What is the last step of the Mary Frances slip knot?",
            options: ["Wind the tail twice round the hook", "Slip the loop on a knitting needle", "Leave the knot loose until the chain is done", "Pass the end back"],
            correctIndex: 1,
            explanation: "Step 6, the last of the book's six steps: \"Slip the loop on a knitting needle and draw it up close.\" Step 5, \"Draw knot up tight\", comes just before it. For crochet, the same loop goes on your hook.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "Why does lesson 5 say the Mary Frances words alone are not enough?",
            options: ["They were written for left-handed knitters", "Its steps are printed in the wrong order", "They lean on a photograph", "They use UK names"],
            correctIndex: 2,
            explanation: "The first step says only \"as shown in this picture\": how to hold the yarn at the start is given only by the plate.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "What does Plate 4 show that the words never say?",
            options: ["How many chains to make after the finished knot", "Which hook size to use for the very first loop", "How to unpick the knot if it jams on the hook", "How to hold the yarn at the start"],
            correctIndex: 3,
            explanation: "The starting hold is given only as \"as shown in this picture\". Plate 4, shown in the lesson, gives it.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "What does lesson 5 tell you to do with the slip-knot steps?",
            options: ["Read them with Plate 4 in front of you", "Skip the slip knot", "Tie any knot that holds and move straight on", "Use the knots course's overhand knot instead"],
            correctIndex: 0,
            explanation: "Read the steps with Plate 4 in front of you. A slip knot learned from words alone is a guess.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "How does the Mary Frances book start its crochet chain without a slip knot?",
            options: ["By tying it to the handle", "By turning the hook around", "By looping the yarn round two fingers", "By pinning the yarn's end to a cushion"],
            correctIndex: 1,
            explanation: "\"Pointing the hook away from you, turn it completely around, bringing a loop on the needle\" (Fryer, p. 48).",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "What does the Mary Frances book call Plate 1?",
            options: ["Its Illustration 216, as in Beeton", "Its knitting lesson", "Its motion pictures", "Its picture of the right way"],
            correctIndex: 2,
            explanation: "Plate 1, the chain, is the book's \"motion pictures\" (p. 48).",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "How does Riego (1846) begin a chain?",
            options: ["Tie a slip knot just as Mary Frances does", "Wind the wool three times round the needle", "Pin the wool to a cushion and pull it taut", "Make a loop, draw the wool through"],
            correctIndex: 3,
            explanation: "Riego, p. 55, \"To make a chain\": \"Make a loop, and draw the wool through it.\"",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "How does the 1918 Handbook begin its chain?",
            options: ["A loop of thread around the needle", "A slip knot tied following a photographed plate", "A knot taken from the knots course's lesson 4", "Three chains tied together"],
            correctIndex: 0,
            explanation: "Figure 1: \"Make a loop of thread around the needle\", then draw the thread through.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "Which first loop does lesson 5 point a beginner to, and why?",
            options: ["Riego's loop, because it is the oldest one in print", "The slip knot: taught step by step", "The turned-hook loop, because it needs no picture at all", "The Handbook's loop, because it uses US stitch names"],
            correctIndex: 1,
            explanation: "The slip knot is the version a source teaches step by step, with a picture.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "Do you count the slip knot as a stitch?",
            options: ["Yes, as the first chain of the row", "Yes, but only in a row of single crochet", "No, it is not counted", "Only before Ch 1"],
            correctIndex: 2,
            explanation: "Leinhauser: \"do not count the slip knot as a stitch.\"",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "Is the loop on the hook counted as a stitch?",
            options: ["Always, as the last stitch of the row", "Only at the end of a round", "Only in a row of double crochet", "Never"],
            correctIndex: 3,
            explanation: "Leinhauser: \"The loop on the hook is never counted as a stitch.\"",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "Who wrote the guide to reading patterns that the Craft Yarn Council publishes?",
            options: ["Jean Leinhauser", "Daina Taimina, who crocheted the model plane", "Th. de Dillmont", "Jane Gaugain, of the 1840 Lady's Assistant"],
            correctIndex: 0,
            explanation: "Jean Leinhauser's \"How to Read a Crochet Pattern\" is on the council's standards site.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "What does lesson 5 say about a slip knot learned from words alone?",
            options: ["It is the safest way to learn the knot", "It is a guess", "It is how every period manual taught it", "It is the method the knots course uses"],
            correctIndex: 1,
            explanation: "The words lean on the plate, so learning the knot without Plate 4 is guessing.",
            sourceLessonSlug: "the-slip-knot",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 · The chain and the five stitches
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-foundation-chain",
      title: "6 · The foundation chain",
      section: "Section 2 · The chain and the five stitches",
      recallContent: [
        {
          prompt: "What does Leinhauser say a pattern will not tell you to do first?",
          answer: "Make a slip knot on your hook. Patterns assume it.",
        },
        {
          prompt: "Is the slip knot, or the loop on the hook, ever counted as a stitch?",
          answer: "No. Leinhauser: the slip knot is not counted, and the loop on the hook is never counted.",
        },
      ],
      body: `**Where everything starts.** Beeton (1870): "All crochet-work patterns are begun on a foundation chain" (pp. 185-186). A row of chain is the edge the first row is worked into, and every later row builds on it, which is why Karp's definition from lesson 1 calls it not yet crochet: it becomes fabric when the next row goes into it.

**A note on names.** From here on this course uses US stitch names, the ones the Craft Yarn Council's master list uses ("These definitions reflect U.S. crochet terminology"), and gives the UK name in brackets the first time each stitch appears. Lesson 16 explains why there are two systems, and why the same word means different stitches in each.

**The chain, in four sources.** Start with the loop on your hook from lesson 5.

- The Mary Frances book: "Now point the hook under the yarn, and catch it on the hook. This is called 'wrapping' the yarn." Then: "Pull a loop through the loop which was on the needle" (Fryer, 1918, p. 48). Repeat.
- Dillmont: "The next stitches are made by taking up the thread with the needle and drawing it through the loop" (Dillmont, n.d., pp. 223-224).
- *The Priscilla Crochet Book*: "Chain Stitch (ch st). Make a series of loops, drawing each loop through the preceding one" (Hettich, 1908, p. 3).
- The 1918 *Handbook* adds the standard: tighten "each loop as drawn through, so that all will be of uniform size and smoothness". It also gives the abbreviation: "When abbreviations are used, that for chain is ch."

Four books, one motion: yarn over, pull through the loop on the hook, and you have one chain with a new loop on the hook.

**Look at the pictures.** Dillmont's figure 403 (pp. 223-224) shows both hands making chain. Beeton's Illustration 216 (pp. 186-187) is the plain foundation chain. The 1918 *Handbook*'s Figure 1 is the chain, and the Mary Frances book's Plate 1, which it calls its "motion pictures", shows the move in photographs.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419526/witus/courses/crochet/crochet/fryer-1918-plate1-chain-stitch.jpg ||| A page of eight numbered black-and-white photographs, in two columns, of a pair of hands making a crochet chain in white yarn with a long pale hook, against a black background. In 1 to 4 the right hand holds the hook while the left hand holds the yarn close to its tip, where a loop forms. In 5 to 7 the left hand is raised with the yarn passing over its fingers, and the hook, held in the right hand, works at the left hand's fingertips. Picture 8 is a close view of the hook, whose handle is turned with a knob at the end, with a short, even length of chain running from its tip like a narrow braid. ||| Plate 1 of the Mary Frances book, captioned "Motion Pictures Showing How to Make Chain Stitch", with its description on p. 48. The book starts the chain without a slip knot: "Pointing the hook away from you, turn it completely around, bringing a loop on the needle." Picture 8 is the finished chain beside the hook. ||| J. E. Fryer, The Mary Frances Knitting and Crocheting Book (John C. Winston, 1918), Plate 1, unnumbered plate following p. 48. Public domain in the USA. Image via Project Gutenberg eBook 52396. https://www.gutenberg.org/ebooks/52396

**Even chains.** Beeton's warning applies to every chain: "Each stitch must be loose enough to let the hook of the needle pass easily through" (p. 187). Every stitch of your next row has to go into one of these chains.

**Counting a chain.** Count the chains you made, not the knot and not the loop on the hook (Leinhauser, n.d.). If a pattern says "Ch 15", you should be able to count fifteen chains before you start the next row.

:::reveal How does the Priscilla Crochet Book define chain stitch? ||| "Make a series of loops, drawing each loop through the preceding one."

:::reveal What is the 1918 Handbook's abbreviation for chain, and what standard does it set for each loop? ||| "ch". Each loop is tightened as it is drawn through "so that all will be of uniform size and smoothness".

## Sources
${src(BEETON, `"Crochet", pp. 185-186 (the foundation chain); pp. 186-187, Ill. 216.`)}
${src(FRYER, `p. 48, Plate 1.`)}
${src(DILLMONT, `"Crochet Work", pp. 223-224, fig. 403.`)}
${src(PRISCILLA, `"Explanation of Stitches", printed p. 3 (PDF p. 9).`)}
${src(HANDBOOK, `section "A Lesson in Crochet", Figure 1.`)}
${src(CYC_ABBR, `the note at the head of the master list.`)}
${src(LEINHAUSER, `the counting rule for the slip knot and the loop on the hook.`)}`,
    },
    {
      slug: "slip-stitch-and-single-crochet",
      title: "7 · Slip stitch and single crochet",
      section: "Section 2 · The chain and the five stitches",
      recallContent: [
        {
          prompt: "What is the one motion behind every chain, in all four sources?",
          answer: "Yarn over (wrap) and pull a loop through the loop on the hook.",
        },
        {
          prompt: "Why must each chain be loose enough for the hook to pass easily?",
          answer: "Because every stitch of the next row is worked into one of those chains (Beeton: \"Each stitch must be loose enough to let the hook of the needle pass easily through\").",
        },
      ],
      body: `The two shortest stitches differ by one step. In both you put the hook into a stitch and catch the yarn. In a slip stitch you pull that loop straight through everything on the hook. In a single crochet you stop with two loops on the hook, then wrap again and pull through both.

**Slip stitch (UK: slip stitch, ss).** *The Priscilla Crochet Book*: "Slip Stitch (sl st). Insert the hook into the stitch, draw the wool through that stitch and through the wool on hook at the same time" (Hettich, 1908, p. 3). The Mary Frances book gives a practice row: "Make 15 chain stitches. Skip one chain. Put the hook through the next chain stitch; wrap yarn over needle, and draw it through both loops on the needle" (Fryer, 1918, p. 53). Beeton calls it slip stitch too (p. 188, Ill. 219). Dillmont calls the same motion "single stitch": "Put the needle in from the right side of the work, into the uppermost loop of the preceding row, take up the thread on the needle and draw it through both loops" (Dillmont, n.d., p. 224, fig. 404). The 1918 *Handbook* calls this motion its single crochet (Figure 2, "frequently called slip-stitch"). It keeps the name slip-stitch for a different move, "properly a close joining stitch", worked by dropping the loop, and lesson 22 teaches that join.

**Single crochet (UK: double crochet, dc).** The Mary Frances book teaches it in four numbered steps, labelled "CUT 1" to "CUT 4", with its Plate 2, whose four photographs are numbered 1 to 4. "Make a row of 15 chain stitches." Then, cut 1: "Put the hook through the second chain stitch from the needle. (That is, skip one chain stitch.)" Cut 2: "Draw a loop through the chain stitch, and wrap the yarn over the hook, and" cut 3: "Pull a loop through the two loops on the needle." Cut 4: "Keep on working in this way until you have made a row of single crochet stitches" (Fryer, 1918, p. 51). Cuts 1 to 3 make one stitch; cut 4 repeats it along the chain. Priscilla says the same in one line: "Single Crochet (s c). Insert the hook, draw wool through, pass wool around hook (wool over), and draw it through both loops on the hook" (Hettich, 1908, p. 3).

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419526/witus/courses/crochet/crochet/fryer-1918-plate2-single-crochet.jpg ||| A page of four numbered black-and-white photographs, overlapping in a zigzag, of hands working single crochet in white yarn against a black background. In 1 to 3 the left hand holds the start of the work between thumb and finger, with the yarn over its raised forefinger, and the right hand holds a long pale hook whose tip is in the work, with loops on it. Picture 4 is a close view: a length of chain lies flat, a short row of stitches has been worked along part of it, and the hook is in the chain at the end of that row, with the unworked chain stretching away to the left and the yarn rising from the hook to the top left. ||| Plate 2 of the Mary Frances book, captioned "Motion Pictures Showing How to Make Single Crochet", described on p. 51. The pictures are numbered as the steps are: cut 1 puts the hook "through the second chain stitch from the needle", and cut 3 pulls "a loop through the two loops on the needle". Picture 4 is the row under way along the chain. ||| J. E. Fryer, The Mary Frances Knitting and Crocheting Book (John C. Winston, 1918), Plate 2, unnumbered plate facing p. 51. Public domain in the USA. Image via Project Gutenberg eBook 52396. https://www.gutenberg.org/ebooks/52396

**Why the second chain from the hook.** The chain next to the hook is skipped. Both Mary Frances ("skip one chain stitch") and Leinhauser ("sc in 2nd ch from hook") start the first single crochet in the second chain.

**The same motion under five names.** Here is the single crochet motion, hook in, loop through, over, through both, in the older books:

- Dillmont calls it "plain stitch" (p. 224, fig. 405).
- Beeton calls it "double stitch" (p. 188, Ill. 220).
- Lambert (1847) calls it "plain double crochet", "the crochet stitch generally practised" (pp. 15-16).
- The 1918 *Handbook* calls it "double crochet (d c)" (Figure 3).
- Priscilla (1908) and Mary Frances (1918) call it single crochet, as US patterns do now.

Same hands, same loops, five names. That is why lesson 16 exists.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419360/witus/courses/crochet/crochet/dillmont-fig405-plain-stitch.jpg ||| A white-on-black engraving of a strip of crochet fabric in rows of short, close stitches, each with a small crossbar, so the rows look like lines of tiny letter H's. A hook comes in from the upper right with loops of thread on its shaft and its tip in the top row. The finished part of that row lies to the right of the hook, and the working thread runs off to the upper left. ||| Dillmont's figure 405, "Plain stitch" (p. 224). Her plain stitch is today's US single crochet, the stitch this lesson teaches: put the hook in, "draw the thread through it in a loop, turn the thread round the needle and draw it through both loops on the needle." ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Crochet Work", p. 224, Fig. 405, Plain stitch. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 405. Plain stitch.jpg (the same engraving is 418.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._405._Plain_stitch.jpg

:::reveal What is the one step that makes a single crochet different from a slip stitch? ||| In a single crochet you stop with two loops on the hook, wrap again, and pull through both. A slip stitch pulls straight through everything at once.

:::reveal Into which chain does the first single crochet of a row go? ||| The second chain from the hook. The chain next to the hook is skipped.

## Sources
${src(PRISCILLA, `"Explanation of Stitches", printed p. 3 (PDF p. 9).`)}
${src(FRYER, `p. 51, Plate 2 (single crochet); p. 53 (slip stitch).`)}
${src(BEETON, `"Crochet", p. 188, Ill. 219 (slip stitch) and Ill. 220 (double stitch).`)}
${src(DILLMONT, `"Crochet Work", p. 224, fig. 404 (single stitch) and fig. 405 (plain stitch).`)}
${src(LAMBERT, `pp. 15-16 (terms).`)}
${src(HANDBOOK, `section "A Lesson in Crochet", Figures 2 and 3, and the slip-stitch paragraph.`)}
${src(LEINHAUSER, `the single crochet row example.`)}`,
    },
    {
      slug: "the-tall-stitches",
      title: "8 · Half double, double and treble: the tall stitches",
      section: "Section 2 · The chain and the five stitches",
      recallContent: [
        {
          prompt: "Describe a single crochet in one line.",
          answer: "Hook into the stitch, draw a loop through (two loops on the hook), yarn over, draw through both loops.",
        },
        {
          prompt: "Name two older names for the single crochet motion.",
          answer: "Any two of: Dillmont's \"plain stitch\", Beeton's \"double stitch\", Lambert's \"plain double crochet\", the 1918 Handbook's \"double crochet\".",
        },
      ],
      body: `Dillmont: "Trebles are little columns, or bars made of loops or stitches" (Dillmont, n.d., pp. 227-228). The tall stitches all start the same way, with the yarn wrapped round the hook *before* you insert it. From the double up, the number of wraps decides the height; the half double has the same one wrap as the double but finishes all three loops at once.

**Half double crochet (UK: half treble, htr).** One wrap first, then pull through all three loops at once. Priscilla: "Half Double Crochet (h d c). Pass the wool around the hook, insert the hook, draw wool through; pass the wool around the hook, and draw the wool through all 3 loops at once" (Hettich, 1908, p. 3). Dillmont's "half treble" is the same (p. 228; fig. 415 is on p. 227), Beeton's "long double" too (p. 191, Ill. 225), and the 1918 *Handbook*'s "half-treble" (Figure 5).

**Double crochet (UK: treble, tr).** One wrap first, then off two loops at a time, twice. Priscilla: "Double Crochet (d c). Pass the wool around the hook, insert the hook, draw wool through; pass the wool around the hook, and draw the wool through 2 loops, wool over, and again through 2 loops." The Mary Frances book starts a row of them in the third chain from the hook: "Wrap the yarn over the needle, and put hook through the third chain stitch from the needle. (That is, skip 2 chain stitches.)", then "Pull a loop through 2 of the loops on the needle", then "Wrap again and pull a loop through the 2 loops" (Fryer, 1918, pp. 52-53). Riego (1846) called it "Treble Crochet" and closed her description with "This is 1 stitch" (Riego de la Branchardière, 1846, p. 58). Dillmont's "treble" is the same motion (p. 228, figs. 416-417), and so is Beeton's (p. 191, Ill. 226).

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419360/witus/courses/crochet/crochet/dillmont-fig416-trebles.jpg ||| A white-on-black engraving of crochet fabric made of tall stitches, each a twisted upright post, standing in rows between horizontal braid-like edges. A new row is half done: its posts stand on the right, and to their left the hook, entering from the upper right, has thread wound on its shaft and two strands running down from it into the top of the row below. The working thread runs off to the left. ||| Dillmont's figure 416, "Trebles made directly above one another" (p. 228). Her treble is today's US double crochet: one wrap, then off two loops at a time, twice. Each twisted post is one stitch. Set it beside the short stitches of her figure 405 in lesson 7 to see the height the wrap adds. ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Crochet Work", p. 228, Fig. 416, Trebles made directly above one another. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 416. Trebles made directly above one another.jpg (the same engraving is 429.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._416._Trebles_made_directly_above_one_another.jpg

**Treble crochet (UK: double treble, dtr).** Two wraps first, then off two at a time, three times. Priscilla: "Treble Crochet (t c or tr c). Pass the wool around the hook twice, insert the hook, draw the wool through; pass the wool around the hook, draw through 2 loops, wool over, again through 2 loops, wool over, then again through 2." Mary Frances: "Wrap the yarn around the needle twice, before putting hook through the chain stitch" (Fryer, 1918, p. 228). Dillmont's "double trebles, called also 'long stitch'" (p. 228, fig. 418), and Beeton's "long treble" (p. 191, Ill. 227) are the same.

**Taller still.** Dillmont goes on: the triple treble is wound "three times round the needle", the quadruple "four times" (p. 229, fig. 419). Beeton's double long treble is wound "three times" (p. 192). The rule holds all the way up: one more wrap, one more pair of loops to work off, a taller stitch.

**Counting the draws.** The 1918 *Handbook* names its stitches by how many times you draw the yarn through: "It will be noted that the single crochet has one 'draw,' the double two, and the treble three, from which these stitches take their names." In that book's names, the single is today's US slip stitch, the double is the US single crochet, and the treble is the US double crochet, so its rule counts pulls, not wraps.

**The five stitches of this section's title** are the slip stitch, single, half double, double and treble. Those five, plus the chain, carry every project in this course.

:::reveal What decides how tall a tall stitch is? ||| From the double up, how many times the yarn is wrapped round the hook before you insert it, each extra wrap adding one more pair of loops to work off. The half double has the same one wrap as the double but finishes all three loops at once.

:::reveal How does a half double crochet finish, compared with a double crochet? ||| A half double pulls through all three loops at once. A double works them off two at a time, twice.

## Sources
${src(PRISCILLA, `"Explanation of Stitches", printed p. 3 (PDF p. 9).`)}
${src(FRYER, `pp. 52-53 (double crochet); p. 228 (treble crochet).`)}
${src(RIEGO_1846, `p. 58, "Treble Crochet".`)}
${src(DILLMONT, `"Crochet Work", pp. 227-229, figs. 415-419.`)}
${src(BEETON, `"Crochet", p. 191, Ill. 225-227; p. 192, Ill. 228.`)}
${src(HANDBOOK, `section "A Lesson in Crochet", Figures 4-7 and the paragraph on "draws".`)}`,
    },
    {
      slug: "where-the-hook-goes",
      title: "9 · Where the hook goes, and counting what you made",
      section: "Section 2 · The chain and the five stitches",
      recallContent: [
        {
          prompt: "How many wraps go on the hook before you insert it for a double crochet, and for a treble crochet?",
          answer: "One for a double crochet, two for a treble crochet.",
        },
        {
          prompt: "What do the 1918 Handbook's stitch names count?",
          answer: "Draws: its single has one draw, its double two, its treble three.",
        },
      ],
      body: `Every stitch so far says "insert the hook". Into what, exactly, changes the fabric.

**Under both loops: the default.** The top of a stitch has two threads lying along it. The Mary Frances book: "Put the hook through under both threads at the top of the next stitch" (Fryer, 1918, p. 52). Its doll's scarf is worked "putting the crochet hook through the 2 threads or loops at the top of each stitch" (p. 69). Dillmont's rose stitch: "Insert the needle from the right side, under both the horizontal loops of the preceding row" (Dillmont, n.d., pp. 224-225, fig. 406). Unless a pattern says otherwise, this is where the hook goes.

**Which loop is which.** Leinhauser: "The front loop is the loop closest to you, the back loop is the loop farthest away from you" (Leinhauser, n.d.). The Craft Yarn Council's abbreviations list gives BLO as "back loop or back loop only" and FLO as "front loop or front loop only" (Craft Yarn Council, n.d.-a).

**Back loop only: ribs.** Three manuals describe the same rib. Dillmont's ribbed stitch is "Worked backwards and forwards, the hook being passed through the back part only of the stitches of the preceding row" (pp. 224-225, fig. 408). Beeton: "Insert the needle always into the back part of every stitch" (p. 189, Ill. 222). The 1918 *Handbook*: "the slipper-stitch, or ribbed stitch, is formed by taking up the back horizontal loop or vein of each stitch". Dillmont's figure 408 shows the result.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419361/witus/courses/crochet/crochet/dillmont-fig408-ribbed-stitch.jpg ||| A white-on-black engraving of crochet fabric in rows of short stitches, each topped with a small knot-like head. Between the bands of stitches run raised horizontal lines like braid, so the fabric looks ridged. A new row is under way at the upper right, and the hook, entering from the upper right with loops on its shaft, has its tip at the top edge of the row below. The working thread runs off to the upper left. ||| Dillmont's figure 408, "Ribbed stitch" (p. 225), "Worked backwards and forwards, the hook being passed through the back part only of the stitches of the preceding row." Look for the raised lines between the rows: that ridged texture is the rib this lesson describes, which Beeton and the 1918 Handbook reach by the same move. ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Crochet Work", p. 225, Fig. 408, Ribbed stitch. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 408. Ribbed stitch.jpg (the same engraving is 421.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._408._Ribbed_stitch.jpg

**Between stitches, and into a space.** Dillmont puts tall stitches "between the trebles of the last row" (p. 228, fig. 417). Riego (1846) defines working "In the chain" as: "Put the needle through the loop formed by the chain stitches, in the row before, instead of in a stitch" (Riego de la Branchardière, 1846, p. 55). A modern pattern calls that space a ch-sp (Craft Yarn Council, n.d.-a).

**Counting what you made.** Leinhauser's two worked examples are the ones to learn:

- "Row 1: Ch 15; sc in 2nd ch from hook and in each ch across." Then: "You should have 14 single crochet stitches." Fifteen chains, the first one next to the hook skipped, fourteen stitches.
- "Ch 17. Row 1: Dc in 4th ch from hook and in chain across: 15 dc". Fourteen stitches are worked, and "Those 3 skipped chains count as first double crochet of the row", which makes fifteen.

The difference is the rule you will use most: in a row of single crochet the skipped chain is not a stitch, and in a row of taller stitches the skipped chains stand in for the first one. Lesson 10 comes back to it as the turning chain.

**Count every row.** Leinhauser again: "Count the stitches at the end of every row." Counting is how you catch a lost or added stitch in the row where it happened.

:::reveal A pattern says "Ch 15; sc in 2nd ch from hook and in each ch across." How many single crochet should you have? ||| 14. The chain next to the hook is skipped and is not a stitch.

:::reveal A pattern says "Ch 17. Dc in 4th ch from hook and in each ch across." Why do you end with 15 and not 14? ||| Because the 3 skipped chains count as the first double crochet of the row.

## Sources
${src(FRYER, `p. 52 (under both threads); p. 69 (the doll's scarf).`)}
${src(DILLMONT, `"Crochet Work", pp. 224-225, fig. 406 (rose stitch) and fig. 408 (ribbed stitch); p. 228, fig. 417.`)}
${src(BEETON, `"Crochet", p. 189, Ill. 222.`)}
${src(HANDBOOK, `section "A Lesson in Crochet", the slipper-stitch paragraph.`)}
${src(RIEGO_1846, `p. 55, "Terms Used in Crochet" ("In the chain").`)}
${src(LEINHAUSER, `the single crochet and double crochet row examples; the front and back loop definitions; the counting rule.`)}
${src(CYC_ABBR, `entries BLO, FLO, ch-sp.`)}`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The chain and the five stitches",
      section: "Section 2 · The chain and the five stitches",
      body: "A graded check on the chain, the five stitches, where the hook goes, and counting. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // ── the-foundation-chain ──
          {
            prompt: "What does Beeton say all crochet-work patterns are begun on?",
            options: ["A ring of three chains joined with a slip stitch", "A foundation chain", "A row of slip stitches worked into a cord", "A knitted cast-on"],
            correctIndex: 1,
            explanation: "Beeton (1870), pp. 185-186: \"All crochet-work patterns are begun on a foundation chain.\"",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Lesson 6 recalls Karp's definition. Why is a row of chain alone not yet crochet?",
            options: ["It must be joined", "It is too short until it has twenty stitches", "It needs a second row", "It must be worked over a tambour frame first"],
            correctIndex: 2,
            explanation: "A chain becomes fabric when the next row goes into it, which is why Karp says one row of chain is not yet crochet.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Which stitch names does this course use from lesson 6 on?",
            options: ["UK names", "Dillmont's names, as the oldest system", "The 1918 Handbook's English names", "US names"],
            correctIndex: 3,
            explanation: "The course uses US names, the ones the Craft Yarn Council's master list uses, and gives the UK name in brackets the first time.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Whose master list says \"These definitions reflect U.S. crochet terminology\"?",
            options: ["The Craft Yarn Council's", "The 1918 Handbook of Wool Knitting and Crochet", "The Priscilla Crochet Book's Explanation of Stitches", "Dillmont's sign table"],
            correctIndex: 0,
            explanation: "That line heads the Craft Yarn Council's crochet abbreviations master list.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "In the Mary Frances chain, what comes right after the yarn is caught on the hook?",
            options: ["Turn the hook a full circle", "Pull a loop through the loop", "Pass the yarn behind the second finger", "Insert the hook into the second chain"],
            correctIndex: 1,
            explanation: "\"Now point the hook under the yarn, and catch it on the hook\", then \"Pull a loop through the loop which was on the needle\" (Fryer, p. 48).",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "How does the Priscilla Crochet Book define chain stitch?",
            options: ["A loop around the hook, tightened into a firm knot", "Two loops drawn together through a joined ring", "Loops drawn through the one before", "Wool pulled through two loops"],
            correctIndex: 2,
            explanation: "Priscilla, p. 3: \"Chain Stitch (ch st). Make a series of loops, drawing each loop through the preceding one.\"",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "What abbreviation does the 1918 Handbook give for chain?",
            options: ["cs", "c", "chn", "ch"],
            correctIndex: 3,
            explanation: "\"When abbreviations are used, that for chain is ch.\"",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Which Beeton illustration shows the plain foundation chain?",
            options: ["Illustration 216", "Illustration 272", "Illustration 222, the ribbed stitch", "Illustration 228, the double long treble"],
            correctIndex: 0,
            explanation: "Beeton's Ill. 216, pp. 186-187, is the plain foundation chain.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Which Mary Frances plate shows the chain stitch?",
            options: ["Plate 4", "Plate 1", "Plate 2", "None; the book has no crochet plates"],
            correctIndex: 1,
            explanation: "Plate 1 shows the chain, which the book calls its \"motion pictures\".",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Four sources, one motion. What is a chain?",
            options: ["Hook into the chain below, over, and through both", "Over twice, then through two loops and two loops", "Over, and through the hook's loop", "Into the ring, over, through all"],
            correctIndex: 2,
            explanation: "Yarn over, pull through the loop on the hook, and you have one chain with a new loop on the hook.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "What does Beeton's warning say each stitch must be?",
            options: ["Tight enough that no light shows through", "Twice the hook's width", "Pulled firm against the row beneath it", "Loose enough for the hook"],
            correctIndex: 3,
            explanation: "\"Each stitch must be loose enough to let the hook of the needle pass easily through\" (Beeton, p. 187). Every stitch of the next row goes into one of these chains.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "A pattern says \"Ch 15\". What do you count?",
            options: ["Fifteen chains, not the knot", "Fourteen chains and the knot", "Fifteen chains plus the loop on the hook", "Sixteen loops, counting the hook's loop too"],
            correctIndex: 0,
            explanation: "Count the chains you made, not the knot and not the loop on the hook (Leinhauser).",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "In Dillmont's words, how are the chain stitches after the first made?",
            options: ["By wrapping twice and working off in pairs", "Thread taken up and drawn through", "By inserting the hook into the stitch below", "By twisting the loop a full turn"],
            correctIndex: 1,
            explanation: "\"The next stitches are made by taking up the thread with the needle and drawing it through the loop\" (Dillmont, pp. 223-224).",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "What is the foundation chain to every row after it?",
            options: ["A spare row that is unravelled at the end", "A guide row that is cut off at the finish", "The base edge every later row builds on", "The last row, worked after all the others"],
            correctIndex: 2,
            explanation: "The first row is worked into the chain, and each row after that goes into the row below it, so the whole piece builds up from that edge.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Where does lesson 6 say this course gives each stitch's UK name?",
            options: ["In a footnote at the end of each section", "Nowhere at all", "In the final quiz, never in the lessons", "In brackets, the first time"],
            correctIndex: 3,
            explanation: "The UK name is given in brackets the first time each stitch appears; lesson 16 explains the two systems.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "What does the 1918 Handbook say to do to each chain loop as it is drawn through?",
            options: ["Tighten it", "Twist it", "Leave it loose until the row is complete", "Slide it down to the hook's handle"],
            correctIndex: 0,
            explanation: "Tighten \"each loop as drawn through, so that all will be of uniform size and smoothness\".",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Which loop does lesson 6 start the chain from?",
            options: ["A fresh loop tied round the hook's handle", "The loop from lesson 5", "A ring from lesson 11", "A loop pulled up through the work below"],
            correctIndex: 1,
            explanation: "Start with the loop on your hook from lesson 5: the slip knot, or one of the other first loops.",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Which source does lesson 6 quote for \"Make a series of loops, drawing each loop through the preceding one\"?",
            options: ["Dillmont's Encyclopedia of Needlework", "Beeton's Book of Needlework of 1870", "The Priscilla Crochet Book", "The Mary Frances Knitting and Crocheting Book"],
            correctIndex: 2,
            explanation: "That is Priscilla's definition of chain stitch, printed p. 3 (PDF p. 9).",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "What sign does Beeton give that a chain is the right size?",
            options: ["It fills the throat", "It matches the width of the yarn twice", "It sits snug against the hook's handle", "The hook passes easily"],
            correctIndex: 3,
            explanation: "Each stitch must be loose enough to let the hook \"pass easily through\".",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "After you make one chain, what is left on the hook?",
            options: ["A new loop", "Two loops, ready for the next stitch", "No loops", "Three loops, one for each wrap made"],
            correctIndex: 0,
            explanation: "Over, pull through the loop on the hook: one chain made, and a new loop on the hook for the next.",
            sourceLessonSlug: "the-foundation-chain",
          },
          // ── slip-stitch-and-single-crochet ──
          {
            prompt: "What step makes a single crochet different from a slip stitch?",
            options: ["A wrap before the hook goes into the stitch", "A second wrap through two loops", "Working into the back loop instead of both", "Turning the work"],
            correctIndex: 1,
            explanation: "In a single crochet you stop with two loops on the hook, wrap again and pull through both. A slip stitch pulls straight through everything at once.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "How does Priscilla describe the slip stitch?",
            options: ["Wrap first, insert, then draw off in two pairs", "Insert into the ring and draw through four loops", "Draw through stitch and loop at once", "Wrap twice, insert, then draw through three times"],
            correctIndex: 2,
            explanation: "\"Insert the hook into the stitch, draw the wool through that stitch and through the wool on hook at the same time\" (Priscilla, p. 3).",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What is the UK name for the slip stitch?",
            options: ["Double crochet (dc), one step up", "Half treble (htr), two steps up", "Treble (tr)", "Slip stitch (ss)"],
            correctIndex: 3,
            explanation: "The slip stitch keeps its name: sl st in the US, ss in the UK.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "In the Mary Frances slip stitch row, what do you do after the 15 chains?",
            options: ["Skip one chain", "Join the chain into a ring with a slip stitch", "Turn the work and make one more chain", "Wrap the yarn twice round the needle"],
            correctIndex: 0,
            explanation: "\"Make 15 chain stitches. Skip one chain. Put the hook through the next chain stitch\" (Fryer, p. 53).",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What does Dillmont call the slip stitch motion?",
            options: ["Plain stitch", "Single stitch", "Shepherd's knitting, as in Grant's memoir", "Rose stitch, from her figure 406"],
            correctIndex: 1,
            explanation: "Dillmont's \"single stitch\" (p. 224, fig. 404) draws the thread through both loops in one pull, the US slip stitch.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What does the 1918 Handbook say the slip stitch properly is?",
            options: ["The stitch that every row must begin with", "A decorative edge for finished collars", "A close joining stitch", "The tallest stitch in the English names"],
            correctIndex: 2,
            explanation: "The Handbook's slip-stitch is \"properly a close joining stitch\": drop the loop, put the hook into the piece, and pull the dropped loop through. Lesson 22 uses it that way.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "Which Beeton illustration shows the slip stitch?",
            options: ["Ill. 225", "Ill. 216", "Ill. 227", "Ill. 219"],
            correctIndex: 3,
            explanation: "Beeton calls it slip stitch too, p. 188, Ill. 219.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "How many numbered steps does the Mary Frances book give for single crochet?",
            options: ["Four", "Five, matching the slip-knot steps", "Two, one for each loop on the hook", "Seven, one for each photograph"],
            correctIndex: 0,
            explanation: "CUT 1 to CUT 4 (Fryer, p. 51), with Plate 2's four numbered photographs. Cuts 1 to 3 make the stitch; cut 4 says to keep on working in this way.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "In the Mary Frances single crochet, where does the hook go first?",
            options: ["The first chain, right next to the hook", "The second chain from the needle", "The third chain", "The slip knot at the far end of the chain"],
            correctIndex: 1,
            explanation: "\"Put the hook through the second chain stitch from the needle. (That is, skip one chain stitch.)\"",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "In a single crochet, how many loops are on the hook after you draw a loop through the chain?",
            options: ["Three", "One", "Two", "Four"],
            correctIndex: 2,
            explanation: "Two loops; then wrap and \"Pull a loop through the two loops on the needle\".",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "How does Priscilla's single crochet end?",
            options: ["Through all three", "Through two loops, then two more", "Through the stitch and loop together", "Through both loops"],
            correctIndex: 3,
            explanation: "\"Insert the hook, draw wool through, pass wool around hook (wool over), and draw it through both loops on the hook.\"",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What is the UK name for single crochet?",
            options: ["Double crochet", "Slip stitch", "Half treble, the middle UK stitch", "Single crochet, the same as the US"],
            correctIndex: 0,
            explanation: "US single crochet (sc) is UK double crochet (dc).",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What does Dillmont call the single crochet motion?",
            options: ["Single stitch, her fig. 404", "Plain stitch", "Treble", "Rose stitch, her fig. 406"],
            correctIndex: 1,
            explanation: "Dillmont's \"plain stitch\" (p. 224, fig. 405) is the US single crochet.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What does Beeton call the single crochet motion?",
            options: ["Slip stitch, her Ill. 219", "Long double, her Ill. 225", "Double stitch", "Treble, her Ill. 226"],
            correctIndex: 2,
            explanation: "Beeton's \"double stitch\", p. 188, Ill. 220.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What does Lambert (1847) call the single crochet motion?",
            options: ["Shepherd or Single Crochet, from Riego", "Plain single crochet, one loop only", "Long stitch", "Plain double crochet"],
            correctIndex: 3,
            explanation: "Lambert's \"plain double crochet\" keeps two loops on the needle and draws through both (pp. 15-16).",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What did Lambert say of plain double crochet?",
            options: ["The stitch generally practised", "The hardest stitch to learn from print", "A stitch fit only for children's work", "A stitch used only for Irish lace"],
            correctIndex: 0,
            explanation: "\"This is the crochet stitch generally practised\" (Lambert, 1847, p. 16).",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "What does the 1918 Handbook call the single crochet motion?",
            options: ["Single crochet (s c), as in Priscilla", "Double crochet (d c)", "Slip-stitch, as it says some books do", "Half-treble"],
            correctIndex: 1,
            explanation: "The Handbook uses English names: its \"double crochet (d c)\", Figure 3, is the US single crochet.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "Which two books call the motion single crochet, as US patterns do now?",
            options: ["Dillmont and Beeton, the British pair", "Lambert and Riego, from the 1840s", "Priscilla and Mary Frances", "Gaugain and the Handbook"],
            correctIndex: 2,
            explanation: "Priscilla (1908) and Mary Frances (1918) both write single crochet.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "Into which chain do Mary Frances and Leinhauser put the first single crochet?",
            options: ["The 4th from the hook, as for doubles", "The 1st, right next to the hook", "The last chain", "The 2nd from the hook"],
            correctIndex: 3,
            explanation: "Mary Frances: \"skip one chain stitch\". Leinhauser: \"sc in 2nd ch from hook\".",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "How does the Mary Frances book label its single crochet steps?",
            options: ["CUT 1 to CUT 4", "STEP A to STEP C, under Plate 4", "Figures 1 to 3 of the Handbook", "Illustrations 219 to 221 of Beeton"],
            correctIndex: 0,
            explanation: "The steps are labelled CUT 1, CUT 2, CUT 3 and CUT 4 (Fryer, p. 51, Plate 2).",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "Which Dillmont figure shows her single stitch, the US slip stitch?",
            options: ["Fig. 405", "Fig. 404", "Fig. 403", "Fig. 408"],
            correctIndex: 1,
            explanation: "Fig. 404, p. 224: \"draw it through both loops\".",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "How many names for the single crochet motion does lesson 7 list?",
            options: ["Two", "Three", "Five", "Eight"],
            correctIndex: 2,
            explanation: "Plain stitch, double stitch, plain double crochet, double crochet and single crochet: same hands, same loops, five names.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          // ── the-tall-stitches ──
          {
            prompt: "How does Dillmont describe trebles?",
            options: ["Knots tied over a doubled strand", "Twists locked in by a second chain", "Rings worked into a single loop", "Little columns, or bars"],
            correctIndex: 3,
            explanation: "\"Trebles are little columns, or bars made of loops or stitches\" (Dillmont, pp. 227-228).",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What do all the tall stitches start with?",
            options: ["A wrap before inserting", "A chain worked into the stitch below", "A slip stitch", "Two loops already left on the hook"],
            correctIndex: 0,
            explanation: "The yarn is wrapped round the hook before you insert it. From the double up, the number of wraps decides the height.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What decides how tall a tall stitch is?",
            options: ["The length of the starting chain", "Wraps and how loops come off", "Which hand holds the hook", "Whether the right or wrong side faces you"],
            correctIndex: 1,
            explanation: "A half double and a double both take one wrap, but the double takes one more pull, off two and then off two again, so it stands taller: the 1918 Handbook turns with two chain for its half treble (the US half double) and three for its treble (the US double). From the double up, each extra wrap adds one more pair of loops to work off.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "How does a half double crochet finish?",
            options: ["Through two loops, then through two more", "Through the stitch and the hook's loop at once", "Through all three loops", "Two loops, three times"],
            correctIndex: 2,
            explanation: "Priscilla: \"draw the wool through all 3 loops at once\".",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What is the UK name for half double crochet?",
            options: ["Half double (hd), as in the US", "Double crochet (dc), the short stitch", "Treble (tr)", "Half treble (htr)"],
            correctIndex: 3,
            explanation: "US half double crochet (hdc) is UK half treble (htr).",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What does Beeton call the half double motion?",
            options: ["Long double", "Long treble, her Ill. 227", "Double stitch, her Ill. 220", "Slip stitch, her Ill. 219"],
            correctIndex: 0,
            explanation: "Beeton's \"long double\", p. 191, Ill. 225.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "How does a double crochet finish?",
            options: ["All three at once", "Two loops at a time, twice", "Two loops at a time, three times", "Through the stitch and loop together"],
            correctIndex: 1,
            explanation: "Priscilla: \"draw the wool through 2 loops, wool over, and again through 2 loops\".",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What is the UK name for the US double crochet?",
            options: ["Double crochet (dc), the same word", "Half treble (htr)", "Treble (tr), one step up", "Double treble (dtr), one step up"],
            correctIndex: 2,
            explanation: "US double crochet (dc) is UK treble (tr). The word \"double\" is the trap.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "Into which chain does the Mary Frances book put the first double crochet?",
            options: ["The second, skipping just one chain", "The fifth chain", "The first, right beside the hook", "The third from the needle"],
            correctIndex: 3,
            explanation: "\"put hook through the third chain stitch from the needle. (That is, skip 2 chain stitches.)\" (Fryer, p. 52).",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What did Riego (1846) call the US double crochet?",
            options: ["Treble Crochet", "Plain, Double, or French Crochet", "Shepherd or Single Crochet", "Long stitch"],
            correctIndex: 0,
            explanation: "Riego's \"Treble Crochet\", p. 58: wool round the needle, three loops, then off two and two.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "How does Riego close her description of treble crochet?",
            options: ["Repeat until the row is complete", "This is 1 stitch", "Draw up tight and fasten the wool", "Turn and chain three for the next row"],
            correctIndex: 1,
            explanation: "\"This is 1 stitch\" (Riego, 1846, p. 58).",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "How does a US treble crochet begin?",
            options: ["One wrap first, as for a double", "Three wraps first, as for a triple", "Two wraps first", "No wrap at all"],
            correctIndex: 2,
            explanation: "Priscilla: \"Pass the wool around the hook twice, insert the hook\". Mary Frances: \"Wrap the yarn around the needle twice\".",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "How many times do you work off two loops in a US treble crochet?",
            options: ["Two", "Four", "Once", "Three"],
            correctIndex: 3,
            explanation: "Two wraps, insert, draw through (four loops), then off two at a time, three times.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What is the UK name for the US treble crochet?",
            options: ["Double treble (dtr)", "Treble (tr)", "Triple treble (trtr), two steps up", "Half treble (htr), one step down"],
            correctIndex: 0,
            explanation: "US treble (tr) is UK double treble (dtr).",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What does Dillmont call the US treble crochet motion?",
            options: ["Half treble, her figure 415", "Double treble", "Treble", "Plain stitch, her figure 405"],
            correctIndex: 1,
            explanation: "Dillmont's double treble, p. 228, fig. 418: thread turned twice round the needle, worked off two at a time three times.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What else does Dillmont say double trebles are called?",
            options: ["Extra long stitch, her quadruple name", "Rose stitch, her figure 406", "Long stitch", "Cluster stitch, her figure 426"],
            correctIndex: 2,
            explanation: "\"double trebles, called also 'long stitch'\". \"Extra long stitch\" is her name for quadruple and quintuple trebles.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What does Beeton call the US treble crochet motion?",
            options: ["Long double, her Ill. 225", "Double long treble, her Ill. 228", "Treble", "Long treble"],
            correctIndex: 3,
            explanation: "Beeton's \"long treble\", p. 191, Ill. 227: \"the cotton is wound twice round the needle\".",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "How many times is the thread wound for Dillmont's triple treble?",
            options: ["Three", "Two", "Four", "One"],
            correctIndex: 0,
            explanation: "Triple treble \"three times round the needle\", quadruple \"four times\" (p. 229, fig. 419).",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What does each extra wrap add to a stitch?",
            options: ["A second insertion into the same stitch", "One more pair to work off", "A loop that stays on the hook to the end", "A twist that makes the stitch lean over"],
            correctIndex: 1,
            explanation: "The rule holds all the way up: one more wrap, one more pair of loops to work off, a taller stitch.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What do the 1918 Handbook's stitch names count?",
            options: ["Wraps", "Chains in the turning chain", "Draws", "Loops left on the hook at the end"],
            correctIndex: 2,
            explanation: "\"the single crochet has one 'draw,' the double two, and the treble three, from which these stitches take their names.\"",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "In the 1918 Handbook's names, which US stitch is its \"treble\"?",
            options: ["Treble crochet, the same word", "Single crochet", "Half double, one step down", "Double crochet"],
            correctIndex: 3,
            explanation: "Its single is the US slip stitch, its double the US single crochet, and its treble the US double crochet.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "Which five stitches does section 2's title mean?",
            options: ["Slip stitch up to treble crochet", "Chain, single, double, picot and cluster", "Single, double, treble, double and triple treble", "Slip, single, rose, ribbed and slipper stitch"],
            correctIndex: 0,
            explanation: "The slip stitch, single, half double, double and treble. With the chain, they carry every project in the course.",
            sourceLessonSlug: "the-tall-stitches",
          },
          // ── where-the-hook-goes ──
          {
            prompt: "Unless a pattern says otherwise, where does the hook go?",
            options: ["Into the back loop only, for a rib", "Under both loops", "Into the front loop only, for a ridge", "Between stitches"],
            correctIndex: 1,
            explanation: "Mary Frances: \"under both threads at the top of the next stitch\". Dillmont's rose stitch: \"under both the horizontal loops\".",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "How many threads lie along the top of a stitch, as lesson 9 describes it?",
            options: ["One", "Three", "Two", "Four"],
            correctIndex: 2,
            explanation: "Two: the front loop and the back loop. The default is to go under both.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "Which Dillmont stitch goes under both horizontal loops of the row before?",
            options: ["Ribbed stitch", "Single stitch, her figure 404", "Cluster stitch, her figure 426", "Rose stitch, fig. 406"],
            correctIndex: 3,
            explanation: "Rose stitch, pp. 224-225, fig. 406.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "According to Leinhauser, which is the front loop?",
            options: ["The one closest to you", "The one farthest from you, at the back", "The one on the hook", "The one under the top of the stitch"],
            correctIndex: 0,
            explanation: "\"The front loop is the loop closest to you, the back loop is the loop farthest away from you.\"",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "What do BLO and FLO mark in a pattern?",
            options: ["Beginning and finishing a long row", "Working into one loop", "Blocking and finishing a large piece", "A loose chain and a firm chain"],
            correctIndex: 1,
            explanation: "The council's list: BLO, \"back loop or back loop only\"; FLO, \"front loop or front loop only\".",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "What fabric do three manuals make by working only the back loop?",
            options: ["A lace mesh with open squares", "A tube that closes at the top", "A rib", "A twisted cord like a rope"],
            correctIndex: 2,
            explanation: "Dillmont's ribbed stitch, Beeton's Ill. 222 and the 1918 slipper-stitch all work the back loop only.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "What does the 1918 Handbook call its back-loop stitch?",
            options: ["The rose stitch, after Dillmont", "Shepherd's knitting, after Grant", "The star stitch, after Priscilla", "The slipper-stitch"],
            correctIndex: 3,
            explanation: "\"the slipper-stitch, or ribbed stitch, is formed by taking up the back horizontal loop or vein of each stitch\".",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "How does Dillmont work her ribbed stitch?",
            options: ["To and fro, back part only", "Round and round", "All from one end, into the front loop", "In a frame, through the back of the cloth"],
            correctIndex: 0,
            explanation: "\"Worked backwards and forwards, the hook being passed through the back part only of the stitches of the preceding row\" (fig. 408).",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "Where does Beeton's ribbed stitch put the needle?",
            options: ["The front part", "Into the back part", "Between the stitches of the row below", "Under both loops of every stitch"],
            correctIndex: 1,
            explanation: "\"Insert the needle always into the back part of every stitch\" (Beeton, p. 189, Ill. 222).",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "Which Beeton illustration is the ribbed stitch?",
            options: ["Ill. 216", "Ill. 219", "Ill. 222", "Ill. 225"],
            correctIndex: 2,
            explanation: "Ill. 222, p. 189.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "In fig. 417, where does Dillmont put her trebles?",
            options: ["Into the back loop of the trebles below", "Into the chain spaces two rows down", "On the turning chain", "Between the trebles below"],
            correctIndex: 3,
            explanation: "The needle goes \"under both, and between the trebles of the last row\" (p. 228, fig. 417).",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "How does Riego (1846) define working \"In the chain\"?",
            options: ["Through the chain loop below", "Into each chain one by one along the row", "Into the slip knot at the end of the chain", "Around the chain from behind, like a post"],
            correctIndex: 0,
            explanation: "\"Put the needle through the loop formed by the chain stitches, in the row before, instead of in a stitch\" (Riego, p. 55).",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "What does a modern pattern call the space Riego works \"in the chain\"?",
            options: ["A tch", "A ch-sp", "A sk, for skip", "A rnd, the round"],
            correctIndex: 1,
            explanation: "The council's list: \"ch-sp | chain space\". Riego's loop of chain from the row before is that space.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "\"Ch 15; sc in 2nd ch from hook and in each ch across.\" How many single crochet?",
            options: ["15", "16", "14", "13"],
            correctIndex: 2,
            explanation: "Leinhauser: \"You should have 14 single crochet stitches.\" The chain next to the hook is skipped.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "\"Ch 17. Dc in 4th ch from hook and in chain across.\" How many dc does Leinhauser count?",
            options: ["14", "17", "13", "15"],
            correctIndex: 3,
            explanation: "Fourteen are worked, and \"Those 3 skipped chains count as first double crochet of the row\": 15.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "Why does Leinhauser's double crochet row count 15 and not 14?",
            options: ["The skipped chains count as one", "The slip knot counts as the first stitch", "The last chain is worked twice for the edge", "The loop on the hook counts"],
            correctIndex: 0,
            explanation: "In a row of taller stitches the skipped chains stand in for the first stitch.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "In a row of single crochet, is the skipped chain a stitch?",
            options: ["Yes, it is the first stitch of the row", "No, it is not a stitch", "Only in UK terms", "Only if the pattern gives a stitch count"],
            correctIndex: 1,
            explanation: "In single crochet the skipped chain is not a stitch; in taller stitches the skipped chains count as the first one.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "What does Leinhauser say to do at the end of every row?",
            options: ["Turn the work and chain three", "Fasten off", "Count the stitches", "Measure the row against the gauge"],
            correctIndex: 2,
            explanation: "\"Count the stitches at the end of every row.\"",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "Why count every row, as lesson 9 puts it?",
            options: ["To know when the yarn ball will run out", "To find the row's place in the pattern photo", "To measure your gauge without making a swatch", "To catch an error where it happened"],
            correctIndex: 3,
            explanation: "Counting is how you catch a lost or added stitch in the row where it happened.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "What does lesson 9 say the next lesson calls the chains that stand in for the first stitch?",
            options: ["The turning chain", "The foundation chain of the row", "The chain space of the row before", "The slip knot of the next row"],
            correctIndex: 0,
            explanation: "Lesson 10 comes back to the skipped chains as the turning chain.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "Where does the Mary Frances doll's scarf put the hook in each stitch?",
            options: ["The back loop only", "Through both top loops", "Between the stitches of the row before", "Into the chain space of the row below"],
            correctIndex: 1,
            explanation: "\"putting the crochet hook through the 2 threads or loops at the top of each stitch\" (Fryer, p. 69).",
            sourceLessonSlug: "where-the-hook-goes",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 · Rows and rounds
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "rows-and-the-turning-chain",
      title: "10 · Rows, and the turning chain",
      section: "Section 3 · Rows and rounds",
      recallContent: [
        {
          prompt: "Where does the hook go by default, and what do you get by working the back loop only?",
          answer: "Under both loops at the top of the stitch. Working the back loop only makes a ribbed fabric (Dillmont's ribbed stitch, the 1918 slipper-stitch).",
        },
        {
          prompt: "Ch 17, dc in 4th ch from hook and across: how many dc, and why?",
          answer: "15. Fourteen are worked and the 3 skipped chains count as the first double crochet.",
        },
      ],
      body: `**Two ways to make rows.** Dillmont: "The rows are worked ... either to and fro, or all from one end. In the former case, the work has to be turned at the end of each row, and the subsequent row begun with 1, 2 or 3 chain stitches to prevent the contraction of the outside edge" (Dillmont, n.d., p. 223). The washcloth in section 8 is worked to and fro.

**Why the turning chain.** Dillmont's reason, quoted above, is to stop the outside edge contracting. The Mary Frances book: "It is always necessary to use chain stitches in turning crochet work", and its reason is "to keep the edges even" (Fryer, 1918, p. 52).

**How many chains.** The 1918 *Handbook* gives the whole ladder: "In turning, one chain-stitch corresponds to a double, two chain-stitches to a half or short treble, three chain to a treble, four to a double treble, five to a triple treble, and so on, adding one chain for each extra 'draw.'" That book uses the English names, so in US terms:

| Stitch, US name | UK name, as in the 1918 Handbook | Turning chains |
|---|---|---|
| single crochet | double | 1 |
| half double crochet | half treble | 2 |
| double crochet | treble | 3 |
| treble crochet | double treble | 4 |
| double treble | triple treble | 5 |

**Does the turning chain count?** Leinhauser gives the US rule. In single crochet: "never count the turning ch-1 as a stitch." For everything taller: "Unless your pattern tells you otherwise, on all stitches taller than a single crochet, the turning chain is counted as the first stitch of the row" (Leinhauser, n.d.). That is the same rule you met at the start of a chain in lesson 9. Beeton's ribbed stitch says the same of its one chain in its own words: "Work 1 chain stitch at the end of every row, which is not worked, however, in the following row" (p. 189).

**The older habit: working all from one end.** Dillmont's other way of making rows never turns. Working all one way, "the thread must be fastened on afresh each time" (p. 223). Riego (1846) gives it as a standing rule: "In crochet that is worked square, at the end of a row, cut the wool off, and draw it through to fasten it; begin at the other end" (Riego de la Branchardière, 1846, p. 55). Her plain crochet ends each row the same way: "At the end, cut the wool off, draw it through, and begin at the other end" (pp. 57-58). And her way to start the next row: "Put the needle in the side of the 1st stitch, bring the wool through, and work a chain stitch" (p. 55). The passages quoted here record the habit without giving a reason. Dillmont's later pages assume the other way when a stitch requires it: "When you use a stitch that has to be worked to and fro, you turn your work at the end of every row" (p. 240).

:::reveal How many turning chains go with a US double crochet, and does the turning chain count as a stitch? ||| Three, and unless the pattern says otherwise it counts as the first stitch of the row.

:::reveal In a row of single crochet, does the turning ch-1 count as a stitch? ||| No. Leinhauser: never count the turning ch-1 as a stitch.

## Sources
${src(DILLMONT, `"Crochet Work", p. 223 (rows to and fro, or from one end); p. 240 (turning).`)}
${src(FRYER, `p. 52 (turning).`)}
${src(HANDBOOK, `section "A Lesson in Crochet", the paragraph on turning.`)}
${src(LEINHAUSER, `section "Getting Started" (the single crochet row and the turning ch-1); section "Working in Double Crochet" (the turning chain counted as a stitch).`)}
${src(BEETON, `"Crochet", p. 189, Ill. 222.`)}
${src(RIEGO_1846, `p. 55, "Terms Used in Crochet"; pp. 57-58, "Plain, Double, or French Crochet".`)}`,
    },
    {
      slug: "joining-a-ring",
      title: "11 · Rounds: joining a chain into a ring",
      section: "Section 3 · Rows and rounds",
      recallContent: [
        {
          prompt: "Why does a row begin with a turning chain, in Dillmont's and Mary Frances's words?",
          answer: "Dillmont: \"to prevent the contraction of the outside edge\". Mary Frances: \"to keep the edges even\".",
        },
        {
          prompt: "What did Riego do at the end of every row of work \"worked square\"?",
          answer: "Cut the wool, drew it through to fasten it, and began again at the other end, so the work was never turned.",
        },
      ],
      body: `Rows go back and forth. Rounds go round, and they start from a ring.

**Making the ring.** Every source here makes it the same way: a short chain, joined end to start.

- The Mary Frances hat: "Make 3 chain stitches and join into a ring with slip stitch" (Fryer, 1918, p. 206).
- The 1918 *Handbook*'s Tam-o'-Shanter: "Make a chain of 3 stitches, join."
- Dillmont's square: "Begin with 4 chain stitches, and work 1 single on the 1st chain, to make a round" (Dillmont, n.d., p. 239). Dillmont's "single" is the US slip stitch (lesson 7), so this is the same join.
- *The Priscilla Crochet Book*'s ball cover: "a ch of 4 sts; join in a circle" (Hettich, 1908, p. 39).
- Leinhauser: "Ch 8, join with a slip stitch to form a ring" (Leinhauser, n.d.).

Three, four and eight chains are the sizes these sources use.

**Working into the ring.** The Tam and the Mary Frances hat both work their first round into the ring. The 1918 Tam: "Seven doubles in ring." Those are English doubles, which are US single crochet. The Mary Frances hat starts taller: "Make 3 chains. ... Put 16 double crochets in the ring (counting the 3 chains as if they were one double crochet)" (p. 206). Those three chains do the same job as a turning chain: they stand in for the first double crochet, so the round has sixteen.

**Round work is old.** Riego's 1846 "Shepherd or Single Crochet", which is a slip stitch, came with a note: "This stitch is usually worked round, for Cuffs, Muffatees, Boots, &c." Her start: "Make a chain, join it, keep the loop on the needle" (Riego de la Branchardière, 1846, p. 57).

**What this course does not teach, and why.** If you meet a pattern that begins with a "magic ring" or an "adjustable ring", know that none of the sources this course was built from describes one. Rather than teach a method from no source, this course starts every round from a joined chain, as every source in this lesson does.

:::reveal How do the sources here start a round? ||| With a short chain (3, 4 or 8 chains) joined into a ring. Mary Frances and Leinhauser join with a slip stitch, and Dillmont with her "single", the same stitch. The Tam, Priscilla and Riego say only "join".

:::reveal The Mary Frances hat puts 16 double crochets in the ring, counting its starting chains as one. How many chains stand in for that first stitch? ||| Three.

## Sources
${src(FRYER, `pp. 206-207, "Little Crocheted Hat".`)}
${src(HANDBOOK, `section "Tam-o'-Shanter in Double Crochet".`)}
${src(DILLMONT, `"Crochet Work", p. 239 (the square, fig. 441 on p. 240).`)}
${src(PRISCILLA, `"Child's Ball", printed p. 39 (PDF p. 45).`)}
${src(LEINHAUSER, `the section on working in rounds.`)}
${src(RIEGO_1846, `p. 57, "Shepherd or Single Crochet".`)}`,
    },
    {
      slug: "the-flat-circle",
      title: "12 · The flat circle and the steady increase",
      section: "Section 3 · Rows and rounds",
      recallContent: [
        {
          prompt: "How do the sources in this course start a round?",
          answer: "A short chain joined into a ring. Mary Frances, Leinhauser and Dillmont join with a slip stitch; the Tam, Priscilla and Riego say only \"join\".",
        },
        {
          prompt: "Why does this course not teach the magic ring?",
          answer: "None of the sources it was built from describes one, so every round here starts from a joined chain.",
        },
      ],
      body: `Work round and round into a ring without adding stitches and the piece will not lie flat. Every manual here that makes a flat round piece adds stitches as it goes. Beeton (1870) puts it as a rule: "It is necessary to increase regularly in all the rounds to keep the work flat" (p. 268). Her rule comes from a work-basket that is oval, begun on a row of 46 stitches and crocheted over damp straw (pp. 266-268), so take the principle from it, not the pattern. The 1918 *Handbook*'s button cover says the same in its own words: "Continue to work around and around, widening to keep the work flat".

**The 1918 Tam-o'-Shanter, round by round.** This is the clearest worked example in the sources, and it is in English names, so its "double" is the US single crochet.

1. "Make a chain of 3 stitches, join." Then "Seven doubles in ring." That is 7 stitches.
2. "Two doubles in each double". Every stitch gets two, so 14.
3. "A double in double, 2 in next; repeat." 21.
4. "A double in each of 2 doubles, 2 in next; repeat." 28.
5. "A double in each of 3 doubles, 2 in next; repeat." 35.

Then: "Continue in this way, adding 1 double between widenings each row, until you have 30 doubles in each section". The pattern is plain once you see it. Each widening round has seven increases, one in each of seven sections, so it is 7 stitches longer than the round before, and the plain stitches between increases go up by one each time. The widening stops once each section has 30 doubles; the Tam's later rounds do not add seven, and its rounds 36 to 45 add none (lesson 14).

**Corners instead of a circle.** Dillmont's square and hexagon put their increases at the corners instead of spreading them round. Her hexagon (p. 240, fig. 442): "Make a foundation chain of 6 stitches, join the round; 12 plain on the 6 chain", and at each corner "3 plain on the second plain of the last row; repeat 5 times", which makes six corners. Her square gets its corners from "3 plain on the second of the 3 plain that form the corner" (p. 240, fig. 441). Dillmont's "plain" is the US single crochet. The Mary Frances hat starts with 16 double crochets in the ring and builds sections of its own (pp. 206-207).

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419362/witus/courses/crochet/crochet/dillmont-fig441-crochet-square.jpg ||| A white-on-black engraving of a flat crochet square, worked outward from a small round centre in rings that turn square as they grow. Small holes line up along the diagonals, running from the centre out to each of the four corners. ||| Dillmont's figure 441, "Crochet square" (p. 240). Each round keeps four corners, and the small holes on the diagonals line up through them. That is where her increases go: "3 plain on the second of the 3 plain that form the corner." Her "plain" is the US single crochet. ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Crochet Work", p. 240, Fig. 441, Crochet square. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 441. Crochet square.jpg (the same engraving is 454.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._441._Crochet_square.jpg

**What the sources do not say.** They give the steady increase as practice: do it, and the work stays flat. None of the sources this course was built from explains the geometry of why a flat circle needs it, so this course does not offer an explanation either. What the course can show you is what happens when you get the amount wrong on purpose. Increase nothing and you get a tube (lesson 14). Increase by a growing amount, in a fixed ratio, and you get the hyperbolic plane (lesson 15).

:::reveal In the 1918 Tam, how many stitches does each widening round add, and how are they placed? ||| Seven: one increase in each of seven sections, with one more plain stitch between increases each round, until each section has 30 doubles.

:::reveal Where do Dillmont's square and hexagon put their increases? ||| At the corners: three stitches into one stitch at each corner, four corners for the square and six for the hexagon.

## Sources
${src(BEETON, `pp. 266-268, Ill. 272-273 (the work-basket; the rule is on p. 268).`)}
${src(HANDBOOK, `section "Tam-o'-Shanter in Double Crochet", rounds 1-5; the button-cover instructions (this edition has no page numbers).`)}
${src(DILLMONT, `"Crochet Work", p. 240, fig. 441 (square) and fig. 442 (hexagon).`)}
${src(FRYER, `pp. 206-207, "Little Crocheted Hat".`)}`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Rows and rounds",
      section: "Section 3 · Rows and rounds",
      body: "A graded check on turning chains, working rows, joining rings and the flat circle. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // ── rows-and-the-turning-chain ──
          {
            prompt: "What are Dillmont's two ways of working rows?",
            options: ["To and fro, or all from one end", "In rounds, or in a frame like tambour", "Into front loops, or into back loops", "In wool, or in cotton"],
            correctIndex: 0,
            explanation: "\"The rows are worked ... either to and fro, or all from one end\" (Dillmont, p. 223).",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "Why does Dillmont begin a turned row with chain stitches?",
            options: ["So the row is easier to count at the end", "To stop the edge contracting", "To fasten off there", "So the yarn can change colour there"],
            correctIndex: 1,
            explanation: "The row is \"begun with 1, 2 or 3 chain stitches to prevent the contraction of the outside edge\".",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "How many chains does Dillmont say begin a turned row?",
            options: ["Always 3", "4 or 5, depending on the yarn weight", "1, 2 or 3", "None; the row starts in the first stitch"],
            correctIndex: 2,
            explanation: "\"1, 2 or 3 chain stitches\" (p. 223). The 1918 Handbook ties the number to the stitch.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "What reason does the Mary Frances book give for turning chains?",
            options: ["To make the row easier to unpick", "To mark each row", "To hide the yarn's tail inside", "To keep the edges even"],
            correctIndex: 3,
            explanation: "\"It is always necessary to use chain stitches in turning crochet work\", and the reason is \"to keep the edges even\" (Fryer, p. 52).",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "How many turning chains go with a US single crochet?",
            options: ["1", "2", "3", "4"],
            correctIndex: 0,
            explanation: "The 1918 Handbook: \"one chain-stitch corresponds to a double\", and its double is the US single crochet.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "How many turning chains go with a US double crochet?",
            options: ["1", "3", "2", "5"],
            correctIndex: 1,
            explanation: "\"three chain to a treble\", and the Handbook's treble is the US double crochet.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "How many turning chains go with a US treble crochet?",
            options: ["2", "3", "4", "6"],
            correctIndex: 2,
            explanation: "\"four to a double treble\", and the Handbook's double treble is the US treble crochet.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "In US terms, how many turning chains go with a double treble?",
            options: ["3", "4", "6", "5"],
            correctIndex: 3,
            explanation: "\"five to a triple treble\", and the UK triple treble is the US double treble.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "How does the 1918 Handbook say the number of turning chains grows?",
            options: ["One chain per extra draw", "Two chains for every extra wrap", "One chain per row worked so far", "Always three chains"],
            correctIndex: 0,
            explanation: "\"and so on, adding one chain for each extra 'draw.'\"",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "In the 1918 Handbook's English names, three chain correspond to which stitch?",
            options: ["A double", "A treble", "A half treble", "A double treble"],
            correctIndex: 1,
            explanation: "\"three chain to a treble\". That treble is the US double crochet.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "In US single crochet, does the turning ch-1 count as a stitch?",
            options: ["Always, as the row's first stitch", "Only on the very first row", "Never, on any row of the work", "Only when the row is short"],
            correctIndex: 2,
            explanation: "Leinhauser: \"never count the turning ch-1 as a stitch.\"",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "On stitches taller than single crochet, what does Leinhauser say the turning chain counts as?",
            options: ["Nothing", "The last stitch of the row", "Half a stitch, rounded up", "The first stitch"],
            correctIndex: 3,
            explanation: "\"on all stitches taller than a single crochet, the turning chain is counted as the first stitch of the row\".",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "When does Leinhauser's taller-stitch counting rule not apply?",
            options: ["When the pattern says otherwise", "When the yarn is finer than a medium weight", "When working in rounds", "When the hook is a small steel thread hook"],
            correctIndex: 0,
            explanation: "The rule opens \"Unless your pattern tells you otherwise\".",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "What does Beeton say of the one chain at the end of every ribbed row?",
            options: ["It is worked twice on the next row", "It is not worked into", "It is cut off when the row is done", "It counts as the row's last stitch"],
            correctIndex: 1,
            explanation: "\"Work 1 chain stitch at the end of every row, which is not worked, however, in the following row\" (Beeton, p. 189).",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "Working all from one end, what does Dillmont say must happen each row?",
            options: ["Turn the work over and chain three more", "Change the hook", "Fasten the thread on afresh", "Join the row into a closed ring"],
            correctIndex: 2,
            explanation: "Working one way, \"the thread must be fastened on afresh each time\" (p. 223).",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "What did Riego do at the end of each row of crochet \"worked square\"?",
            options: ["Turned the work and chained one stitch", "Joined the row's ends with a slip stitch", "Left a loop on the hook for the next row", "Cut the wool and began again"],
            correctIndex: 3,
            explanation: "\"at the end of a row, cut the wool off, and draw it through to fasten it; begin at the other end\" (Riego, 1846, p. 55).",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "How did Riego start a new row when working from one end?",
            options: ["In the side of the 1st stitch", "Turn the work and chain three as usual", "Tie a new slip knot onto the hook first", "Work into the back loop of the last row"],
            correctIndex: 0,
            explanation: "\"To commence a row\": \"Put the needle in the side of the 1st stitch, bring the wool through, and work a chain stitch.\"",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "Do the passages lesson 10 quotes say why rows were worked from one end?",
            options: ["Yes: turned work showed its wrong side", "No, they give no reason", "Yes: the wool was too short to turn", "Yes: one-way hooks"],
            correctIndex: 1,
            explanation: "Lesson 10: the passages it quotes record the habit without giving a reason.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "What does Dillmont say to do with a stitch that has to be worked to and fro?",
            options: ["Cut and fasten the thread every row", "Front loops only", "Turn at the end of every row", "Work it only in rounds, never in rows"],
            correctIndex: 2,
            explanation: "\"When you use a stitch that has to be worked to and fro, you turn your work at the end of every row\" (p. 240).",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "Which project in section 8 does lesson 10 say is worked to and fro?",
            options: ["The coaster", "The hat", "The button cover", "The washcloth"],
            correctIndex: 3,
            explanation: "The washcloth is worked in rows, turning with a ch-1 each time.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          // ── joining-a-ring ──
          {
            prompt: "How do all the sources in lesson 11 make a ring?",
            options: ["A short chain, joined", "A wide slip knot", "A loop of yarn round two fingers", "A row of stitches sewn end to end"],
            correctIndex: 0,
            explanation: "Every source here makes it the same way: a short chain, joined end to start.",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "How many chains make the Mary Frances hat's ring?",
            options: ["8", "3", "4", "6"],
            correctIndex: 1,
            explanation: "\"Make 3 chain stitches and join into a ring with slip stitch\" (Fryer, p. 206).",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "How many chains begin Dillmont's square?",
            options: ["3", "8", "4", "6"],
            correctIndex: 2,
            explanation: "\"Begin with 4 chain stitches, and work 1 single on the 1st chain, to make a round\" (p. 239).",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "How does Dillmont join her square's chain into a round?",
            options: ["A double crochet into the last chain", "Three plain stitches into the first chain", "A knot tied with the two yarn ends", "1 single on the 1st chain"],
            correctIndex: 3,
            explanation: "\"work 1 single on the 1st chain, to make a round\". Her single is the US slip stitch.",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "Dillmont's \"single\", used to join the ring, is which US stitch?",
            options: ["The slip stitch", "Single crochet", "Half double crochet, her half treble", "Double crochet, her treble"],
            correctIndex: 0,
            explanation: "Dillmont's single stitch draws through both loops in one pull, the US slip stitch (lesson 7).",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "How many chains make Leinhauser's ring?",
            options: ["3", "8", "4", "6"],
            correctIndex: 1,
            explanation: "\"Ch 8, join with a slip stitch to form a ring\" (Leinhauser).",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "What does Leinhauser join the ring with?",
            options: ["A single crochet into the first chain", "A knot", "A slip stitch", "A double crochet worked into the ring"],
            correctIndex: 2,
            explanation: "\"join with a slip stitch to form a ring\".",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "How many chains begin Priscilla's ball cover?",
            options: ["3", "8", "7", "4"],
            correctIndex: 3,
            explanation: "\"a ch of 4 sts; join in a circle\" (Priscilla, p. 39).",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "In lesson 11's list, which ring sizes do the sources use?",
            options: ["3, 4 and 8 chains", "1 and 2 chains only", "10, 12 and 20 chains", "15, 17 and 21 chains"],
            correctIndex: 0,
            explanation: "Three (Mary Frances, the Tam), four (Dillmont, Priscilla) and eight (Leinhauser).",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "Where do the Tam and the Mary Frances hat work their first round?",
            options: ["Into each chain, one by one", "Into the centre of the ring", "Into the back loop of the chain", "Around the slip-stitch join only"],
            correctIndex: 1,
            explanation: "The Tam: \"Seven doubles in ring.\" Mary Frances: \"Put 16 double crochets in the ring\".",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "How many stitches go in the ring in the 1918 Tam's first round?",
            options: ["Sixteen", "Twelve", "Seven", "Three"],
            correctIndex: 2,
            explanation: "\"Seven doubles in ring.\"",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "The 1918 Tam's \"doubles\" are which US stitch?",
            options: ["Double crochet", "Half double crochet", "Treble crochet", "Single crochet"],
            correctIndex: 3,
            explanation: "The Handbook uses English names, so its double is the US single crochet.",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "How many double crochets go in the Mary Frances hat's ring?",
            options: ["16", "7", "12", "3"],
            correctIndex: 0,
            explanation: "\"Put 16 double crochets in the ring (counting the 3 chains as if they were one double crochet)\".",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "Why do the Mary Frances hat's 3 starting chains count as a stitch?",
            options: ["They are the ring, so they are counted", "They stand in for the first dc", "They count as three dc, one per chain", "They replace the slip-stitch join"],
            correctIndex: 1,
            explanation: "They do the job of a turning chain: they stand in for the first double crochet, so the round has sixteen.",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "How did Riego say shepherd crochet was usually worked?",
            options: ["In rows", "In strips", "In rounds", "In a frame"],
            correctIndex: 2,
            explanation: "\"This stitch is usually worked round, for Cuffs, Muffatees, Boots, &c.\" (Riego, 1846, p. 57).",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "Which item does Riego name among those shepherd crochet was worked round for?",
            options: ["Shawls", "Collars", "Doilies", "Cuffs"],
            correctIndex: 3,
            explanation: "Cuffs, muffatees and boots.",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "Why does this course not teach the magic ring?",
            options: ["No source here describes one", "It is too hard", "It was dropped from the council's list", "It only works with a steel thread hook"],
            correctIndex: 0,
            explanation: "None of the sources this course was built from describes a magic or adjustable ring, so the course does not teach one.",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "What does every round in this course start from?",
            options: ["A magic ring", "A joined chain", "A slip knot opened wide", "A sewn loop of yarn"],
            correctIndex: 1,
            explanation: "Every round here starts from a joined chain, as every source in lesson 11 does.",
            sourceLessonSlug: "joining-a-ring",
          },
          // ── the-flat-circle ──
          {
            prompt: "Why does lesson 12 take only the principle from Beeton's work-basket?",
            options: ["Beeton wrote it for a knitted basket", "It is oval, not a circle", "It is worked on a tambour frame", "Its stitch counts are lost from the book"],
            correctIndex: 1,
            explanation: "The basket is oval, begun on a row of 46 stitches and crocheted over damp straw (Beeton, pp. 266-268), so lesson 12 takes the principle, not the pattern.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "What does Beeton say keeps round work flat?",
            options: ["Working every round into the back loop", "A damp cloth", "Regular increases", "Tightening the yarn every other round"],
            correctIndex: 2,
            explanation: "\"It is necessary to increase regularly in all the rounds to keep the work flat\" (Beeton, p. 268).",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Which word does the 1918 button cover use for increasing?",
            options: ["Growing", "Doubling", "Opening", "Widening"],
            correctIndex: 3,
            explanation: "\"Continue to work around and around, widening to keep the work flat\".",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "How many stitches are in round 2 of the 1918 Tam?",
            options: ["14", "21", "8", "28"],
            correctIndex: 0,
            explanation: "\"Two doubles in each double\": 7 becomes 14.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "How many stitches are in round 4 of the 1918 Tam?",
            options: ["24", "28", "32", "35"],
            correctIndex: 1,
            explanation: "7, 14, 21, 28: seven more each round.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Round 3 of the Tam reads \"A double in double, 2 in next; repeat.\" How many stitches?",
            options: ["14", "18", "21", "28"],
            correctIndex: 2,
            explanation: "Each of the 7 sections becomes 3 stitches: 21.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "How many increases go into each widening round of the 1918 Tam?",
            options: ["One", "Six", "Fourteen", "Seven"],
            correctIndex: 3,
            explanation: "One increase in each of seven sections, so every widening round is 7 stitches longer than the last.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "In the Tam, what goes up by one each round?",
            options: ["Stitches between increases", "The number of sections in the round", "The chains in the ring", "The number of increases in each section"],
            correctIndex: 0,
            explanation: "\"adding 1 double between widenings each row\".",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "How many doubles in each section does the Tam reach before it stops widening?",
            options: ["7", "30", "102", "35"],
            correctIndex: 1,
            explanation: "\"until you have 30 doubles in each section\".",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Where do Dillmont's square and hexagon put their increases?",
            options: ["Spread evenly round the circle", "Round 1 only", "At the corners", "Along one side of each round"],
            correctIndex: 2,
            explanation: "Three stitches into one stitch at each corner, instead of spreading the increases round.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "How does Dillmont's hexagon begin?",
            options: ["4 chain, joined; 1 single on the first", "3 chain, joined; 7 doubles in ring", "8 chain, joined; 16 trebles in ring", "6 chain, joined; 12 plain"],
            correctIndex: 3,
            explanation: "\"Make a foundation chain of 6 stitches, join the round; 12 plain on the 6 chain\" (p. 240, fig. 442).",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Dillmont's hexagon corner rule ends \"repeat 5 times\". How many corners does that make?",
            options: ["Six", "Four", "Five", "Seven"],
            correctIndex: 0,
            explanation: "One corner, then 5 repeats: six corners.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Dillmont's \"plain\" is which US stitch?",
            options: ["Slip stitch", "Single crochet", "Double crochet, her treble", "Half double, her half treble"],
            correctIndex: 1,
            explanation: "Dillmont's plain stitch (fig. 405) is the US single crochet.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "What makes a corner in Dillmont's square?",
            options: ["A chain loop of five with a picot", "A missed stitch", "3 plain in one stitch", "Two trebles worked together"],
            correctIndex: 2,
            explanation: "\"3 plain on the second of the 3 plain that form the corner\" (p. 240, fig. 441).",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "How do the sources give the steady increase?",
            options: ["As a geometric proof with a diagram", "As a rule from the Craft Yarn Council", "As a theorem from Henderson and Taimina", "As practice: do it, and it stays flat"],
            correctIndex: 3,
            explanation: "They give it as practice: do it, and the work stays flat.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Does this course explain the geometry of why a flat circle needs a steady increase?",
            options: ["No; no source here does", "Yes, using Henderson and Taimina's page", "Yes, using Dillmont's hexagon figures", "Yes, from Beeton"],
            correctIndex: 0,
            explanation: "None of the sources this course was built from explains it, so the course does not offer an explanation.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "What does lesson 12 say you get if you increase nothing?",
            options: ["A flat circle", "A tube", "A hyperbolic plane", "A square"],
            correctIndex: 1,
            explanation: "Increase nothing and you get a tube (lesson 14).",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "What does lesson 12 say you get by increasing in a fixed ratio?",
            options: ["A cone", "A flat hexagon with six corners", "The hyperbolic plane", "A sphere that closes at the top"],
            correctIndex: 2,
            explanation: "Increase by a growing amount, in a fixed ratio, and you get the hyperbolic plane (lesson 15).",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Which piece in lesson 12 starts with 16 double crochets in the ring?",
            options: ["The 1918 Tam", "Riego's Greek Cap of 1846, p. 75", "Priscilla's Child's Ball cover", "The Mary Frances hat"],
            correctIndex: 3,
            explanation: "The Mary Frances \"Little Crocheted Hat\", pp. 206-207, builds sections of its own from 16 double crochets.",
            sourceLessonSlug: "the-flat-circle",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 · Shaping
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "increase-and-decrease",
      title: "13 · Increasing and decreasing",
      section: "Section 4 · Shaping",
      recallContent: [
        {
          prompt: "In the 1918 Tam, how many stitches does each widening round add?",
          answer: "Seven, one in each of seven sections: 7, 14, 21, 28, 35 and so on, until each section has 30 doubles.",
        },
        {
          prompt: "What does Beeton say keeps round work flat?",
          answer: "\"It is necessary to increase regularly in all the rounds to keep the work flat.\"",
        },
      ],
      body: `Every shape in crochet comes from two moves: add a stitch, or take one away.

**Riego's definitions (1846).** Her list of terms gives both moves in a few words. To increase: "Work 2 stitches in 1." To decrease: "Miss a stitch." And to miss a stitch is to "Pass over 1 of the row before" (Riego de la Branchardière, 1846, p. 55). So in Riego's book an increase puts two stitches where there was one, and a decrease skips a stitch of the row below.

**The other words for it.** The 1918 *Handbook* says "widening". *The Priscilla Crochet Book* abbreviates its widening: "the term used is wi 2" (Hettich, 1908, p. 3). Modern patterns write inc and dec, and the Craft Yarn Council's master list includes the two-together decreases sc2tog and dc2tog (Craft Yarn Council, n.d.-a). The chart symbols page draws them too (Craft Yarn Council, n.d.-b). This course does not reproduce the master list's steps for those two; open the list itself for them.

**Two together, in an older source.** Dillmont's Tunisian crochet decreases by working two stitches as one: "On the right you crochet the first two stitches together, and at the end of the row, the last two" (Dillmont, n.d., p. 243, fig. 447). Tunisian is not taught here, but it shows the two-together idea in an older source.

**Increase, then decrease.** Dillmont's coloured star does both in one motif (p. 241, fig. 443). "In each subsequent row, make one dark stitch more, increasing regularly, that is, making 2 stitches on the last light stitch that comes before the dark ones." Later: "then begin to decrease in every row by one". (The printed caption itself reads "Fig. 423", a misprint that the plain-text edition copies. Dillmont's own heading on the same page calls it fig. 443, and the HTML edition corrects the caption to match.)

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419363/witus/courses/crochet/crochet/dillmont-fig443-coloured-star.jpg ||| A white-on-black engraving of a flat, round crochet mat worked in a light thread, its stitches running in rings round a small centre. A dark star with six broad arms is worked into it. The arms leave the centre divided by thin lines of light stitches, and each bends round in the same direction, like the blades of a pinwheel, out towards the edge. ||| Dillmont's figure 443, "Coloured star worked into a light ground" (p. 241). The arms grow because in each row she makes "one dark stitch more, increasing regularly, that is, making 2 stitches on the last light stitch that comes before the dark ones", and later she will "begin to decrease in every row by one". In the book, the caption printed under this engraving misnumbers it Fig. 423. ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Crochet Work", p. 241, Fig. 443, Coloured star worked into a light ground (the printed caption reads Fig. 423). Public domain in the USA. Image via Wikimedia Commons, File:Fig. 443. Coloured star worked into a light ground.jpg (the same engraving is 456.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._443._Coloured_star_worked_into_a_light_ground.jpg

**Shaping by eye.** Lambert (1847) treats crochet as a fabric you can shape to any outline as you go. "A paper pattern, the size of any desired object, can easily be cut", she writes, and then "the making a stitch at the commencement, or the decreasing in the middle, or the end of a row, and *vice versâ*, render this work subservient to almost any form" (Lambert, 1847, pp. 11-12). In plain words: cut a paper pattern to the shape you want, and add or drop stitches at the start, middle or end of a row until the work matches it.

**Where the increases go.** In rounds, the sources spread their increases round the circle (the Tam) or stack them at corners (Dillmont's square). Beeton's basket border increases "at both ends" (Beeton, 1870, p. 268), as lesson 14 shows.

:::reveal What are Riego's 1846 definitions of increasing and decreasing? ||| To increase: "Work 2 stitches in 1." To decrease: "Miss a stitch," which means pass over one stitch of the row before.

:::reveal How did Lambert suggest shaping crochet to an object? ||| Cut a paper pattern the size of the object, and add or decrease stitches at the start, middle or end of rows until the work matches it.

## Sources
${src(RIEGO_1846, `p. 55, "Terms Used in Crochet".`)}
${src(HANDBOOK, `the button-cover instructions ("widening").`)}
${src(PRISCILLA, `"Explanation of Stitches", printed p. 3 (PDF p. 9).`)}
${src(CYC_ABBR, `entries inc, dec, sc2tog, dc2tog.`)}
${src(CYC_SYMBOLS, `the sc2tog and dc2tog symbols.`)}
${src(DILLMONT, `"Crochet Work", p. 241, fig. 443 (coloured star); p. 243, fig. 447 (Tunisian decreasing).`)}
${src(LAMBERT, `pp. 11-12.`)}
${src(BEETON, `p. 268, Ill. 272-273 (the work-basket border, "at both ends").`)}`,
    },
    {
      slug: "tube-cone-and-sphere",
      title: "14 · Tube, cone and sphere",
      section: "Section 4 · Shaping",
      recallContent: [
        {
          prompt: "What did Riego mean by \"Miss a stitch\"?",
          answer: "Pass over one stitch of the row before. It was her way to decrease.",
        },
        {
          prompt: "What is sc2tog?",
          answer: "A two-together decrease in single crochet, listed in the Craft Yarn Council's master list (alongside dc2tog).",
        },
      ],
      body: `Beyond the flat circle, the sources show three shapes.

**The tube: stop increasing.** Work round without adding stitches and the sides go straight up. Beeton's work-basket border: "the first 2 rounds without increasing the number of stitches" (Beeton, 1870, p. 268). The 1918 *Handbook*'s Tam: "36 to 45. A double in each stitch", ten rounds with no change in count.

**The cone: increase a little.** Beeton's border goes on: "but in the following 9 rounds increase 2 double stitches at both ends, in order that the edge may be a little wider in the upper part" (p. 268). A little increase on each round, and the wall leans out instead of going straight up. Two cautions before you copy it. Beeton's basket is oval, not round, and it is begun on a row of 46 stitches, not a ring. And it is crocheted over damp straw (pp. 266-268). Read it for the principle, not as a pattern.

**The sphere: increase, hold, decrease.** *The Priscilla Crochet Book*'s "Child's Ball" is a cover for a ball: "a ch of 4 sts; join in a circle, and work in tr st, increasing at regular intervals until the work is large enough to cover one-half the ball; then work a few rows without increasing, draw the cover over the ball ... and work the other half to correspond with the first half, decreasing at regular intervals" (Hettich, 1908, p. 39). Increase until the circle covers half the ball, work straight round the middle, then decrease by the same steps until it closes.

**The closed cover.** The 1918 *Handbook*'s button cover is the same idea at a smaller size. Work round "widening to keep the work flat, until you have a circle which will cover the button-mold", then "work once around without widening, slip in the mold", and close it: "miss 1, a double in next, and repeat until the cover is closed". Missing every other stitch is Riego's decrease from lesson 13, done all the way round.

**Three behaviours.** Increase steadily and the work lies flat. Increase not at all and it goes straight up. Increase a little, as Beeton's border does, and the wall flares. Those three behaviours are all in the sources. Notice that the sources give them as instructions, not as geometry: they say what to do, and the shape follows.

:::reveal What happens when you work rounds without increasing? ||| The sides go straight up and you get a tube, like Beeton's first two border rounds or the 1918 Tam's rows 36 to 45.

:::reveal How is Priscilla's Child's Ball cover shaped? ||| Increase until the circle covers half the ball, work a few rows without increasing, then decrease the second half to match.

## Sources
${src(BEETON, `pp. 266-268, Ill. 272-273 (the work-basket and its border).`)}
${src(HANDBOOK, `section "Tam-o'-Shanter in Double Crochet", rows 36-45; the button-cover instructions.`)}
${src(PRISCILLA, `"Child's Ball", printed p. 39 (PDF p. 45).`)}`,
    },
    {
      slug: "the-hyperbolic-plane",
      title: "15 · The hyperbolic plane: increasing on purpose",
      section: "Section 4 · Shaping",
      recallContent: [
        {
          prompt: "How do you make a tube in crochet?",
          answer: "Work rounds without increasing; the sides go straight up.",
        },
        {
          prompt: "How did the 1918 button cover close?",
          answer: "\"miss 1, a double in next, and repeat until the cover is closed\": skipping every other stitch all the way round.",
        },
      ],
      body: `Lesson 12 showed that a flat circle needs a steady increase. This lesson is about increasing by a growing amount, on purpose, by a rule, and what two mathematicians made with it.

**Where it came from.** David Henderson and Daina Taimina tell the story on their web page (Henderson & Taimina, n.d.). "In June of 1997, Daina was in a workshop watching the leader of the workshop, David ... using a paper and tape surface". Henderson's paper model dated from 1978; he had learned it "from William Thurston at a workshop at Bates College". Taimina tried knitting first. "Daina experimented with knitting (but the result was not rigid enough) and then settled on crocheting." An updated version of their account was published in the *Mathematical Intelligencer* in 2001.

**The one rule.** "You have to increase ... the number of stitches from one row to the next in a constant ratio, N to N+1". In practice: work N stitches as normal, then put the next stitch into the same loop as the one before, which is an increase, and repeat across the row. Every N stitches of the old row become N+1 in the new one.

**How that differs from a flat circle.** The 1918 Tam adds seven stitches in every widening round, however big it gets. The hyperbolic rule adds one stitch for every N, so the more stitches a row has, the more it adds. With N = 5, a row of 30 stitches becomes 36, and a row of 300 would become 360. The flat circle adds the same number each round; the hyperbolic plane adds a fixed share, so the number of stitches it adds keeps growing.

**Never change the ratio midway.** "You can experiment with different ratios BUT not in the same model. You will get a hyperbolic plane ONLY if you will be increasing the number of stitches in the same ratio all the time."

**The ratio sets the size.** "the ratio determines the radius", and the page shows models (figs. 7a-c) with radii of "approximately 4 cm, 8 cm, and 16 cm". It also says that "as r increases the hyperbolic plane becomes flatter and flatter", and gives the curvature as -1/r².

**Why mathematicians cared.** Henderson and Taimina note that "many books state that it is impossible to isometrically embed the hyperbolic plane as a closed subset of the Euclidean 3-space", and cite Hilbert, in 1901, among others; their page discusses where the crocheted surfaces fit among those results. What crochet gave them was a surface rigid enough to hold and work on. Their students, "during one class period", used it to study geodesics (the page explains the term), and found that on this surface geodesics can be asymptotic. The page notes that "Asymptotic geodesics never happen on a Euclidean plane or on a sphere."

You will make one in lesson 32.

:::reveal What is the one rule for crocheting a hyperbolic plane? ||| Increase in a constant ratio, N to N+1, every row, and never change the ratio within one model.

:::reveal With N = 5, how many stitches follow a row of 30? ||| 36. Every 5 stitches become 6.

## Sources
${src(HT, `the header (the 2001 journal version); the introduction (the 1997 workshop); section "2. How to Crochet the Hyperbolic Plane"; "Hyperbolic Planes of Different Radii", figs. 7a-c; "What Can We Determine About Hyperbolic Geodesics?".`)}`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Shaping",
      section: "Section 4 · Shaping",
      body: "A graded check on increasing and decreasing, tubes, cones, spheres and the hyperbolic plane. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // ── increase-and-decrease ──
          {
            prompt: "What are Riego's 1846 words for increasing?",
            options: ["Work 2 stitches in 1", "Miss a stitch of the row before", "Chain one", "Wrap twice before the next stitch"],
            correctIndex: 0,
            explanation: "Riego, p. 55: \"To increase\" is \"Work 2 stitches in 1.\"",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "What is Riego's 1846 definition of decreasing?",
            options: ["Work 2 stitches into 1 stitch", "Miss a stitch", "Work two stitches together as one", "Chain three"],
            correctIndex: 1,
            explanation: "\"To decrease\" is \"Miss a stitch\" (Riego, p. 55).",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "What does Riego say \"Miss a stitch\" means?",
            options: ["Drop the loop from the hook, then pick it up", "Work into the chain space instead of a stitch", "Pass over 1 of the row before", "Leave the yarn unwrapped"],
            correctIndex: 2,
            explanation: "\"Miss a stitch\" is \"Pass over 1 of the row before.\"",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "What abbreviation does Priscilla use for widening?",
            options: ["inc", "w2tog", "2in1", "wi 2"],
            correctIndex: 3,
            explanation: "\"the term used is wi 2\" (Priscilla, p. 3).",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "Which two-together decreases does the council's master list include?",
            options: ["sc2tog and dc2tog", "hdc3tog and tr4tog only", "ss2tog and htr2tog, UK forms", "ch2tog and sl2tog"],
            correctIndex: 0,
            explanation: "The master list includes sc2tog and dc2tog, and the chart symbols page draws them too.",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "Where does lesson 13 send you for the steps of sc2tog and dc2tog?",
            options: ["Dillmont's Tunisian decrease, fig. 447", "The master list itself", "Riego's terms on p. 55 of her book", "Priscilla's p. 3"],
            correctIndex: 1,
            explanation: "The course does not reproduce the master list's steps for those two; open the list itself.",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "How does Dillmont's Tunisian crochet decrease?",
            options: ["Missing every other stitch in the row", "Cutting the row short", "Two stitches worked as one", "Working into the back loop for a row"],
            correctIndex: 2,
            explanation: "\"On the right you crochet the first two stitches together, and at the end of the row, the last two\" (p. 243, fig. 447).",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "In Dillmont's Tunisian decrease, which stitches are worked together?",
            options: ["Only the middle two of the row", "Every third pair across the row", "Only at the end, never at the start", "The first two and the last two"],
            correctIndex: 3,
            explanation: "The first two on the right, and the last two at the end of the row.",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "What does Dillmont's coloured star do?",
            options: ["Increases, then decreases", "Decreases only", "Keeps a fixed count in every row", "Decreases first, then increases"],
            correctIndex: 0,
            explanation: "One dark stitch more each row, then \"begin to decrease in every row by one\" (p. 241, fig. 443).",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "In the coloured star, where is the extra stitch made?",
            options: ["The first dark stitch of the row below", "Last light stitch", "The turning chain at each row's end", "The centre stitch"],
            correctIndex: 1,
            explanation: "\"making 2 stitches on the last light stitch that comes before the dark ones\".",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "The plain-text Dillmont captions the coloured star as figure 423. What is the right number?",
            options: ["423", "403", "443", "433"],
            correctIndex: 2,
            explanation: "The printed caption reads 423, a misprint the plain text copies; Dillmont's own heading on p. 241 calls it fig. 443, as the HTML edition does.",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "What did Lambert say could easily be cut, to shape crochet?",
            options: ["The crochet itself, then bound off", "A card template of the stitch count", "A wooden block", "A paper pattern"],
            correctIndex: 3,
            explanation: "\"A paper pattern, the size of any desired object, can easily be cut\" (Lambert, 1847, p. 11).",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "In Lambert's view, what renders crochet \"subservient to almost any form\"?",
            options: ["Adding and decreasing stitches", "Working it over a frame like tambour", "Pressing it damp over a wooden block", "Changing the hook"],
            correctIndex: 0,
            explanation: "\"the making a stitch at the commencement, or the decreasing in the middle, or the end of a row, and vice versâ, render this work subservient to almost any form.\"",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "Where in a row does Lambert say you may add or drop stitches?",
            options: ["Only at the start of each row", "Start, middle or end", "Only in the middle of each row", "Only at the end, never the start"],
            correctIndex: 1,
            explanation: "At the commencement, in the middle, or at the end of a row.",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "In rounds, how does the 1918 Tam place its increases?",
            options: ["Stacked at four corners like a square", "All together at the start of the round", "Spread round the circle", "Every other round"],
            correctIndex: 2,
            explanation: "The Tam spreads seven increases round the circle; Dillmont's square stacks them at corners.",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "Where does Beeton's basket border increase?",
            options: ["In the middle", "At six corners, like Dillmont's hexagon", "Only in the very last round", "At both ends, for 9 rounds"],
            correctIndex: 3,
            explanation: "\"increase 2 double stitches at both ends\" (Beeton, p. 268).",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "In Riego's book, what does an increase put where there was one stitch?",
            options: ["Two stitches", "Three stitches and a chain", "One stitch", "A chain space of two"],
            correctIndex: 0,
            explanation: "\"Work 2 stitches in 1\": two stitches where there was one.",
            sourceLessonSlug: "increase-and-decrease",
          },
          // ── tube-cone-and-sphere ──
          {
            prompt: "What happens when you work rounds without increasing?",
            options: ["The circle grows flatter and wider", "The sides go straight up", "The work ruffles into a curved sheet", "It closes into a ball"],
            correctIndex: 1,
            explanation: "No increase and the sides go straight up: a tube.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "How many border rounds does Beeton work without increasing?",
            options: ["9", "46", "2", "11"],
            correctIndex: 2,
            explanation: "\"the first 2 rounds without increasing the number of stitches\" (Beeton, p. 268).",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "Which rows of the 1918 Tam are worked with a double in each stitch?",
            options: ["1 to 5", "10 to 20", "2 to 9", "36 to 45"],
            correctIndex: 3,
            explanation: "\"36 to 45. A double in each stitch\": ten rounds with no change in count.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "After its straight rounds, in how many rounds does Beeton's border increase?",
            options: ["9", "2", "46", "30"],
            correctIndex: 0,
            explanation: "\"in the following 9 rounds increase 2 double stitches at both ends\".",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "Why does Beeton's border increase at both ends?",
            options: ["So the border lies perfectly flat", "So the top is a little wider", "So the border closes into a lid", "For the straw"],
            correctIndex: 1,
            explanation: "\"in order that the edge may be a little wider in the upper part\".",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What shape is Beeton's basket?",
            options: ["Round, from a ring of three", "Square, with four corners", "Oval", "Hexagonal, like Dillmont's"],
            correctIndex: 2,
            explanation: "It is oval, begun on a row of 46 stitches, not a ring: read it for the principle.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What is Beeton's basket begun on?",
            options: ["A ring of 4", "A ring of 8 chains, joined", "A Tam crown of 7 sections", "A 46-stitch row"],
            correctIndex: 3,
            explanation: "A row of 46 stitches, which is one reason it is not a pattern for a round piece.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What is Beeton's basket crocheted over?",
            options: ["Damp straw", "A wooden block cut to shape", "A paper pattern pinned flat", "Old wool"],
            correctIndex: 0,
            explanation: "It is crocheted over damp straw (Beeton, pp. 266-268).",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "How should you read Beeton's basket, according to lesson 14?",
            options: ["As a complete beginner's pattern", "For the principle", "As a pattern for a round hat", "As a guide to blocking crochet"],
            correctIndex: 1,
            explanation: "Read it for the principle, not as a pattern: it is oval, starts on a row, and is worked over straw.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What is Priscilla's Child's Ball?",
            options: ["A ball stuffed with straw", "A ball of yarn wound tight", "A cover for a ball", "A round coaster for a game"],
            correctIndex: 2,
            explanation: "A crocheted cover drawn over a ball (Priscilla, p. 39).",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "In Priscilla's ball cover, when does the increasing stop?",
            options: ["After exactly seven rounds", "When the cover reaches 102 stitches", "When it measures 22 inches round", "When it covers half the ball"],
            correctIndex: 3,
            explanation: "\"increasing at regular intervals until the work is large enough to cover one-half the ball\".",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What comes between the two halves of Priscilla's ball cover?",
            options: ["A few rows without increasing", "The cover is fastened off and resewn", "A new colour", "A row of picots marks the middle"],
            correctIndex: 0,
            explanation: "\"then work a few rows without increasing\", draw the cover over the ball, and decrease the other half to match.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "How does the 1918 button cover close?",
            options: ["Two in every stitch", "Miss 1, a double in next", "A slip stitch into every stitch", "Sewn shut with a long-eyed needle"],
            correctIndex: 1,
            explanation: "\"miss 1, a double in next, and repeat until the cover is closed\".",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What is the button cover's closing, in Riego's terms?",
            options: ["Her increase, worked all round", "Her shepherd crochet, worked round", "Her decrease, all round", "Her chain"],
            correctIndex: 2,
            explanation: "Missing every other stitch is Riego's decrease, \"Miss a stitch\", done all the way round.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What does the button cover do just before the mold is slipped in?",
            options: ["Two rounds of doubled increases", "A row of slip stitches across", "A chain of eight joined to the edge", "One plain round"],
            correctIndex: 3,
            explanation: "\"work once around without widening, slip in the mold\".",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "Which three behaviours does lesson 14 say the sources show?",
            options: ["Flat, straight, flaring", "Flat, ruffled and twisted into a spiral", "Round, square and six-sided like a hexagon", "Tight, loose and even in the tension"],
            correctIndex: 0,
            explanation: "Increase steadily and it lies flat; not at all and it goes straight up; a little and the wall flares.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          // ── the-hyperbolic-plane ──
          {
            prompt: "Who made the crocheted hyperbolic plane in lesson 15?",
            options: ["Dillmont and Beeton, the manual writers", "Henderson and Taimina", "Leinhauser, for the Craft Yarn Council", "Karp and Paludan, the historians"],
            correctIndex: 1,
            explanation: "David Henderson and Daina Taimina tell the story on their web page.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "When was Taimina in the workshop where Henderson used a paper model?",
            options: ["Spring 2001, in the journal", "1978", "June 1997", "1901, with Hilbert's result"],
            correctIndex: 2,
            explanation: "\"In June of 1997, Daina was in a workshop watching the leader of the workshop, David ... using a paper and tape surface\".",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "From whom, and where, did Henderson learn the paper model?",
            options: ["Taimina, at a 1997 workshop", "Hilbert, from his 1901 paper", "Milnor, from his 1972 result", "Thurston, at Bates College"],
            correctIndex: 3,
            explanation: "He learned it \"from William Thurston at a workshop at Bates College\"; his paper model dated from 1978.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "Why did Taimina settle on crochet rather than knitting?",
            options: ["Knitting was not rigid enough", "Knitting needles were too long to use", "Hooks were cheaper", "Knitting could only make flat squares"],
            correctIndex: 0,
            explanation: "\"Daina experimented with knitting (but the result was not rigid enough) and then settled on crocheting.\"",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "Where was an updated version of Henderson and Taimina's hyperbolic-plane account published?",
            options: ["Textile History", "Mathematical Intelligencer", "The Craft Yarn Council's standards site", "Perspectives in Public Health, 2021"],
            correctIndex: 1,
            explanation: "Mathematical Intelligencer, vol. 23, no. 2, pp. 17-28, Spring 2001.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "What is the one rule for crocheting the hyperbolic plane?",
            options: ["Seven increases in every single round", "No increases at all after the first row", "Constant ratio, N to N+1", "Add one stitch at each end of every row"],
            correctIndex: 2,
            explanation: "\"increase ... the number of stitches from one row to the next in a constant ratio, N to N+1\".",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "In Henderson and Taimina's hyperbolic plane, how is each increase made in practice?",
            options: ["Chain one between two stitches", "Skip a stitch and work two in the next", "Work into the back loop only", "Next stitch in the same loop"],
            correctIndex: 3,
            explanation: "Work N stitches, then put the next into the same loop as the one before: two stitches in one loop.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "Under the hyperbolic plane's N-to-N+1 rule, with N = 5, a row of 30 stitches becomes how many?",
            options: ["36", "35", "37", "60"],
            correctIndex: 0,
            explanation: "Every 5 stitches become 6: 30 becomes 36.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "How does the flat circle's growth differ from the hyperbolic plane's?",
            options: ["Rows against rounds, and nothing more", "Fixed number vs fixed share", "Steel hook vs wooden", "Single crochet against treble crochet"],
            correctIndex: 1,
            explanation: "The Tam adds seven stitches in every widening round; the hyperbolic rule adds a fixed share, so the number it adds keeps growing.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "In which rounds does the 1918 Tam add seven stitches?",
            options: ["Every round, to the very end", "Its widening rounds", "Only round 1", "Rows 36 to 45"],
            correctIndex: 1,
            explanation: "Seven per round while it widens, \"until you have 30 doubles in each section\"; rows 36 to 45 add none.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "Can you change the N-to-N+1 ratio partway through one hyperbolic-plane model?",
            options: ["Yes, once the model has 100 stitches", "Yes, to flatten the model at its edge", "No, not in one model", "Yes, every tenth row"],
            correctIndex: 2,
            explanation: "\"You can experiment with different ratios BUT not in the same model.\"",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "What do Henderson and Taimina say the ratio determines?",
            options: ["The colour", "The number of rows to work", "The yarn weight to buy", "The radius"],
            correctIndex: 3,
            explanation: "\"the ratio determines the radius\".",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "What radii do Henderson and Taimina's hyperbolic-plane figures 7a to 7c show, approximately?",
            options: ["4, 8 and 16 cm", "1, 2 and 3 cm", "10, 20 and 30 cm", "20, 40 and 80 cm"],
            correctIndex: 0,
            explanation: "\"approximately 4 cm, 8 cm, and 16 cm\".",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "As r increases, what happens to the hyperbolic plane?",
            options: ["It ruffles more and more tightly", "It gets flatter", "It closes up into a sphere", "It turns into a straight tube"],
            correctIndex: 1,
            explanation: "\"as r increases the hyperbolic plane becomes flatter and flatter\".",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "What curvature does Henderson and Taimina's page give for a hyperbolic plane of radius r?",
            options: ["r/2", "r²", "-1/r²", "-2r"],
            correctIndex: 2,
            explanation: "The page gives the Gaussian curvature as -1/r².",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "Whose 1901 work do Henderson and Taimina cite on embedding the hyperbolic plane?",
            options: ["Thurston's, from Bates College", "Paludan's, on crochet's origins", "Gaugain's", "Hilbert's"],
            correctIndex: 3,
            explanation: "They cite Hilbert, in 1901, among others, beside the statement that many books call an isometric embedding impossible.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "What did Henderson and Taimina's students study on the crocheted hyperbolic plane in one class period?",
            options: ["Geodesics on the surface", "Stitch counts for the Tam", "Yarn weights 0 to 7", "UK and US stitch names"],
            correctIndex: 0,
            explanation: "Students, \"during one class period\", studied geodesics on the crocheted surface.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "What do Henderson and Taimina say never happens on a Euclidean plane or on a sphere?",
            options: ["Increases in a constant ratio", "Asymptotic geodesics", "Rounds of stitches", "Rows that must be counted"],
            correctIndex: 1,
            explanation: "\"Asymptotic geodesics never happen on a Euclidean plane or on a sphere.\"",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "What did crochet give Henderson and Taimina, as lesson 15 puts it?",
            options: ["A perfect copy of the plane in 3-space", "A proof of Hilbert's 1901 theorem", "A rigid, workable surface", "A model with no increases"],
            correctIndex: 2,
            explanation: "A surface rigid enough to hold and work on, which knitting had not given Taimina.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 · Reading a pattern
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "us-and-uk-names",
      title: "16 · US and UK names: the same word, a different stitch",
      section: "Section 5 · Reading a pattern",
      recallContent: [
        {
          prompt: "What is the rule for a hyperbolic plane?",
          answer: "Increase in a constant ratio, N to N+1, row after row, never changing the ratio within one model.",
        },
        {
          prompt: "What did Henderson and Taimina's students find on the crocheted model in one class period?",
          answer: "Geodesics, including asymptotic geodesics, which never happen on a Euclidean plane or on a sphere.",
        },
      ],
      body: `A US pattern and a UK pattern can use the same word for different stitches. "Double crochet" is the trap: in a US pattern it is the tall stitch with one wrap, and in a UK pattern it is the short stitch a US pattern calls single crochet.

**The Craft Yarn Council's table.** Its page "Abbreviation & Term Differences between the U.S., United Kingdom (U.K.) and Canada" lists them (Craft Yarn Council, n.d.-a):

| U.S. and Canada | U.K. |
|---|---|
| slip stitch (sl st) | slip stitch (ss) |
| single crochet (sc) | double crochet (dc) |
| half double crochet (hdc) | half treble (htr) |
| double crochet (dc) | treble (tr) |
| treble (tr) | double treble (dtr) |
| double treble (dtr) | triple treble (trtr) |

A second table groups Canada with the U.K. for two more words: what a U.S. pattern calls gauge, a U.K. one calls tension, and yarn over (yo) is yarn over hook (yoh). Above the slip stitch, every UK name is one step up from the US name for the same stitch.

**It is older than either country's patterns today.** The split was already in American print more than a century ago. The 1918 *Handbook* used the English names, and said so: "The stitches and terms given herewith are such as are in general use, and were taught the writer by an English teacher of crocheting, herself a professional in the art." Then it warned: "In some periodicals and books, the real slip-stitch is omitted, and the single is called slip-stitch; the double is called single, the treble is called double, the double treble is called treble, and so on." That shifted set is today's US system. *The Priscilla Crochet Book*, printed in Boston in 1908, already used it: slip stitch, single crochet, half double, double, treble (Hettich, 1908, p. 3). So it is not quite right to say "US names versus UK names" as if each country had always had one. Both systems were in American print before the Craft Yarn Council's table.

**And before that, every book its own.** Here is one motion, hook in, loop through, over, through both (today's US single crochet), as each source names it:

| Source | Its name for that motion |
|---|---|
| Gaugain, 1840 | "Plain French Tambour", "double tambour" |
| Riego, 1846 | "Plain, Double, or French Crochet" |
| Lambert, 1847 | "plain double crochet" |
| Beeton, 1870 | "double stitch" |
| Dillmont | "plain stitch" |
| 1918 *Handbook* | "double crochet (d c)" |
| Priscilla, 1908 | "single crochet (s c)" |
| Mary Frances, 1918 | "single crochet" |

The slip stitch had its own run of names: Riego's "Shepherd or Single Crochet", Lambert's "plain single crochet", Dillmont's "single stitch", Beeton's and Priscilla's "slip stitch".

**How to protect yourself.** Read the pattern's own stitch key before you start. The Craft Yarn Council's master list says outright, "These definitions reflect U.S. crochet terminology" (Craft Yarn Council, n.d.-a), and its chart page says "Always refer to the pattern key" (Craft Yarn Council, n.d.-b). If a pattern does not say which system it uses, the key, or the stitches it describes, will.

:::reveal A UK pattern says "double crochet". Which US stitch is that? ||| Single crochet.

:::reveal Was the split between the two naming systems already in American print before the Craft Yarn Council's table? ||| Yes. Priscilla (Boston, 1908) used today's US names, and the 1918 Handbook used the English ones and warned about the shift.

## Sources
${src(CYC_ABBR, `the tables "Abbreviation & Term Differences between the U.S., United Kingdom (U.K.) and Canada"; the note at the head of the master list.`)}
${src(CYC_SYMBOLS, `the opening paragraph.`)}
${src(HANDBOOK, `section "A Lesson in Crochet", the opening paragraph.`)}
${src(PRISCILLA, `"Explanation of Stitches", printed p. 3 (PDF p. 9).`)}
${src(FRYER, `p. 51, Plate 2 (single crochet).`)}
${src(GAUGAIN, `p. 190 (PDF p. 194).`)}
${src(RIEGO_1846, `pp. 57-58.`)}
${src(LAMBERT, `p. 15.`)}
${src(BEETON, `"Crochet", p. 188, Ill. 219-220.`)}
${src(DILLMONT, `"Crochet Work", p. 224, figs. 404-405.`)}`,
    },
    {
      slug: "abbreviations-and-repeats",
      title: "17 · Abbreviations and repeat signs",
      section: "Section 5 · Reading a pattern",
      recallContent: [
        {
          prompt: "A US pattern says double crochet (dc). What does a UK pattern call it?",
          answer: "Treble (tr).",
        },
        {
          prompt: "What did the 1918 Handbook warn about stitch names?",
          answer: "That some periodicals and books shift every name down one: the single is called slip-stitch, the double single, the treble double, and so on.",
        },
      ],
      body: `A pattern is written in shorthand.

**The abbreviations you will meet most.** The Craft Yarn Council's master list has them all, in US terms (Craft Yarn Council, n.d.-a). A selection:

- **Stitches:** ch, sl st, sc, hdc, dc, tr, dtr, trtr. All are US names. ch is the chain. sl st through dtr are the US column of lesson 16's table. trtr is the US triple treble, one step taller than dtr; in lesson 16's table trtr appears only as the UK name for the US dtr.
- **Shaping:** inc, dec, sc2tog, dc2tog.
- **Where and how:** rnd, sk, sp, ch-sp, tch, BLO, FLO, yo, RS, WS.

This course has checked the stitch names against the master list; yo is yarn over (lesson 4), and BLO, FLO and ch-sp are the back loop, the front loop and the chain space (lesson 9). For the exact wording of the rest, keep the master list open beside your pattern rather than trust a paraphrase.

**Repeat signs.** Patterns save space by writing a sequence once and telling you how often to repeat it. The 1918 *Handbook*: "PARENTHESES () AND ASTERISKS OR STARS ... are used to prevent the necessity of repetition and save space." Its worked example: "(Chain 3, miss 3, 1 treble in next) three times". Read it as: chain 3, skip 3, one treble in the next stitch (the Handbook uses English names, so that is a US double crochet); then do that whole bracket twice more. Dillmont used the stars the same way: "In crochet, as in knitting, you frequently have to repeat the same series of stitches. Such repetitions will be indicated, by the signs \\*, \\*\\*, \\*\\*\\*" (Dillmont, n.d., p. 222). The master list today gives the asterisk (alone and in pairs), curly brackets, square brackets and parentheses as repeat signs.

**Reading a real line.** Leinhauser's first example: "Row 1: Ch 15; sc in 2nd ch from hook and in each ch across." Take it word by word:

1. "Row 1:" This is the first row worked into the chain.
2. "Ch 15;" Make 15 chains (after the slip knot, which is never counted).
3. "sc in 2nd ch from hook" Skip the chain next to the hook and work a single crochet in the next one.
4. "and in each ch across." One single crochet in every chain to the end.

Leinhauser's check: "You should have 14 single crochet stitches." Remember what is not printed: "the very first thing you must do is make a slip knot on your hook. Does the pattern tell you this? No" (Leinhauser, n.d.).

**The count at the end of a line.** A pattern may end a row with the number you should have, as Leinhauser's double crochet row does: "Dc in 4th ch from hook and in chain across: 15 dc". That number after the colon is the pattern checking your work for you. Compare it with your own count every time.

:::reveal What does "(Chain 3, miss 3, 1 treble in next) three times" tell you to do? ||| Work the sequence in the brackets (chain 3, skip 3 stitches, 1 treble in the next) three times in all. The Handbook's treble is a US double crochet.

:::reveal What is the number after the colon at the end of a pattern row for? ||| It is the stitch count you should have when the row is done, so you can check your work.

## Sources
${src(CYC_ABBR, `the master list (stitch and working abbreviations; repeat signs).`)}
${src(HANDBOOK, `section "A Lesson in Crochet", the paragraph on parentheses and asterisks.`)}
${src(DILLMONT, `"Crochet Work", p. 222, "Explanation of the signs".`)}
${src(LEINHAUSER, `the single crochet and double crochet row examples; section "Getting Started" (the slip knot).`)}`,
    },
    {
      slug: "charts-and-symbols",
      title: "18 · Symbol charts and square charts",
      section: "Section 5 · Reading a pattern",
      recallContent: [
        {
          prompt: "Name three kinds of repeat sign in a crochet pattern.",
          answer: "Any three of: the asterisk, the double asterisk, curly brackets, square brackets, parentheses.",
        },
        {
          prompt: "Read \"Ch 15; sc in 2nd ch from hook and in each ch across.\"",
          answer: "Make 15 chains, skip the one next to the hook, then single crochet in each chain to the end: 14 stitches.",
        },
      ],
      body: `Some patterns are drawn, not written. A chart draws each stitch as a symbol.

**The symbols.** The Craft Yarn Council publishes a standard set: "For the most part each symbol represents a stitch as it looks on the right side of the work. Always refer to the pattern key" (Craft Yarn Council, n.d.-b). The basic ones, as drawn on its page:

- **chain:** an open oval.
- **slip stitch:** a filled dot.
- **single crochet:** a plus sign or an X. "Both symbols are commonly used."
- **half double crochet:** a T.
- **double crochet:** a T with one slash across the stem.
- **treble crochet:** a T with two slashes.

A memory aid of this course's own, not the council's: on the double and the treble, each slash is one wrap. A double crochet starts with one wrap round the hook and is drawn with one slash; a treble starts with two wraps and is drawn with two. The half double breaks the pattern: it also starts with one wrap but is drawn as a plain T. The council's list continues to the double treble, sc2tog and dc2tog, clusters, popcorn, shell, picot, FPdc, BPdc, BLO and FLO. This course links the symbols rather than copying the drawings: open the page and look.

**Square charts: filet.** An older kind of chart is a grid of squares, some open and some filled. Dillmont gives the rule for turning it into stitches: "For each square marked on the pattern, you must count, in the grounding, 1 treble and 2 chain stitches; in the solid parts, 3 trebles. The squares formed by the chain stitches should always begin and end with a treble. ... Thus for 2 solid squares, side by side, count 7 trebles, and for 3 squares, 10" (Dillmont, n.d., p. 238, figs. 437-438). Dillmont's "treble" is the US double crochet.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419363/witus/courses/crochet/crochet/dillmont-fig437-open-work-after-a-tapestry-pattern.jpg ||| A white-on-black engraving of a rectangle of crochet lace built as a grid of small squares. Many squares are open holes framed by thin upright stitches and bars; others are filled in solid with stitches. The solid squares join into blocks and stepped shapes that make a geometric pattern across the piece, with mostly solid bands down the left and right sides. ||| Dillmont's figure 437, "Open-work crochet made after a tapestry pattern" (p. 238): a square chart turned into lace, the work her rule in this lesson is for. Each open square of the grid is "1 treble and 2 chain stitches", and each solid one "3 trebles". Her "treble" is the US double crochet. ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Crochet Work", p. 238, Fig. 437, Open-work crochet made after a tapestry pattern. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 437. Open-work crochet made after a tapestry pattern.jpg (the same engraving is full_450.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._437._Open-work_crochet_made_after_a_tapestry_pattern.jpg

The arithmetic: each solid square is 3 trebles, and a run of squares starts with one extra treble to close the first edge. Two solid squares: 1 + 3 + 3 = 7. Three: 1 + 9 = 10. You will use this in the exercise in lesson 20.

**A chart from 1846.** Riego's *Knitting, Crochet, and Netting* (1846) came "with twelve illustrations", and the Project Gutenberg edition labels all twelve "Pattern chart". Its figure 1 is a squared grid with filled dots, a chart for a purse, which shows where the colours or the beads go. Figures 1 to 9 follow crochet patterns and figures 10 to 12 follow netting patterns (pp. 89 and 93). They are not drawings of stitches; for those, use Dillmont, Beeton and the 1918 *Handbook*.

**One line to remember.** Whatever the chart, the council's advice holds: "Always refer to the pattern key."

:::reveal On a Craft Yarn Council chart, what does a T with one slash across the stem mean? ||| Double crochet.

:::reveal Using Dillmont's rule, how many trebles make 3 solid squares side by side? ||| 10: three for each square and one to begin.

## Sources
${src(CYC_SYMBOLS, `the opening paragraph and the symbols for chain, slip stitch, sc, hdc, dc and tr.`)}
${src(DILLMONT, `"Crochet Work", p. 238, figs. 437-438.`)}
${src(RIEGO_1846, `the twelve illustrations ("Pattern chart"), placed after the table of contents in the original; figs. 10-12 belong to the netting patterns on pp. 89 and 93.`)}`,
    },
    {
      slug: "gauge-and-catching-mistakes",
      title: "19 · Gauge, swatches, and catching mistakes early",
      section: "Section 5 · Reading a pattern",
      recallContent: [
        {
          prompt: "What does a filled dot mean on a crochet chart, and an open oval?",
          answer: "A filled dot is a slip stitch; an open oval is a chain.",
        },
        {
          prompt: "What is Dillmont's rule for a solid square on a filet chart?",
          answer: "Three trebles per solid square, and a run of squares begins and ends with a treble (2 solid squares = 7 trebles, 3 = 10).",
        },
      ],
      body: `**Gauge.** Gauge is a count of stitches across a measured width, as in the yarn table's 11 to 14 single crochet to 4 inches for a medium yarn. A pattern states its gauge so you can match it. A UK pattern calls it tension (Craft Yarn Council, n.d.-a). The only way to know your gauge is to make a small sample first, a swatch, and measure it.

The Craft Yarn Council: "Regardless of the number, letter or millimeter sizing, always complete a gauge swatch". Then the adjustment: "If your swatch is larger than the pattern gauge, redo a swatch using a smaller hook or needle. Conversely, if your gauge swatch it [sic] too small, redo it using a larger hook" (Craft Yarn Council, n.d.-d). Larger swatch, smaller hook. Smaller swatch, larger hook.

The council's yarn weight table gives you a starting point for the swatch, in single crochet across 4 inches: 11 to 14 stitches for a medium yarn, for instance (Craft Yarn Council, n.d.-f). It is only a starting point. The FAQ says it plainly: "you must knit or crochet a gauge swatch to be sure" (Craft Yarn Council, n.d.-c).

**Swatches are old.** *The Priscilla Crochet Book* (1908) gives the reason swatches exist, in a sentence about its star stitch: "no two persons will make it alike, and a little difference in the working of the stars may necessitate the putting in or leaving out of a number of extra stars in a row." Its advice: "It is advisable for any one working star stitch for the first time to work a sample strip" (Hettich, 1908, p. 3).

**Catching a mistake.** The sources teach you to find a mistake early, by two habits.

1. **Count every row.** Leinhauser: "Count the stitches at the end of every row" (Leinhauser, n.d.). Compare it with the count the pattern prints.
2. **Watch the edges.** Priscilla's diagnosis, from the same star-stitch page: "Now notice if your work at the ends is perfectly straight. If it slopes at the end where the wool is clipped off, you will have to work an extra star to keep it even ... It is generally caused by keeping the 1st st tight upon the hook when it should be loosest of all." In her star stitch, a sloping edge is a symptom, and a tight first stitch on the hook is the usual cause.

**Undoing a mistake: the record has it for knitting only.** No crochet source this course was built from tells you how to pull out crochet stitches and rework them. The one passage on undoing work is a knitting scene in the Mary Frances book. Mary Frances finds dropped stitches in a doll's knitted shawl, and the fairy tells her: "You must pull out your needle and rip out all your stitches back to the beginning of the row where you see your first mistake" (Fryer, 1918, p. 172). On the next page the fairy says the yarn can be used again ("many a grown person has unraveled a whole sweater and used the yarn again"), and that crinkled yarn can be steamed: laid in a towel in a wire strainer or colander, over a kettle of boiling water but not touching it, for five minutes (p. 173). Then Mary Frances knits again the "seven rows which she had ripped out" (p. 173). That is knitting, done with a needle you pull out. The book gives no crochet version, so this course does not turn it into a crochet rule. For crochet, the sources teach you to catch a mistake early, by counting and by watching the edges.

:::reveal Your swatch is larger than the pattern's gauge. Do you change to a smaller or a larger hook? ||| A smaller hook.

:::reveal What did Priscilla say usually causes an edge that slopes? ||| Keeping the first stitch tight on the hook "when it should be loosest of all".

## Sources
${src(CYC_HOOKS, `the paragraph above the hook table (gauge swatches).`)}
${src(CYC_WEIGHTS, `the row "Crochet Gauge Ranges in Single Crochet to 4 inch".`)}
${src(CYC_FAQ, `the question on the yarn weight system and interchangeability.`)}
${src(CYC_ABBR, `the U.S. and U.K. term table (gauge and tension).`)}
${src(PRISCILLA, `"Star Stitch", printed p. 3 (PDF p. 9).`)}
${src(LEINHAUSER, `the counting rule.`)}
${src(FRYER, `pp. 172-173, after "Doll's Knitted Shawl" (p. 171): ripping out knitting and reusing the yarn.`)}`,
    },
    {
      slug: "exercise-read-and-count",
      title: "20 · Exercise: read the line, name the stitch, count the result",
      section: "Section 5 · Reading a pattern",
      body: `Type a short answer to each. The counts are the skill this section teaches: work them out from the rule, not from memory. Stitch names can be written in full or as the abbreviation.

## Sources
${src(LEINHAUSER, `the single crochet and double crochet row examples; the turning-chain rule.`)}
${src(CYC_ABBR, `the tables "Abbreviation & Term Differences between the U.S., United Kingdom (U.K.) and Canada".`)}
${src(CYC_SYMBOLS, `the symbols for slip stitch, dc and tr.`)}
${src(CYC_HOOKS, `the paragraph above the hook table (gauge swatches).`)}
${src(DILLMONT, `"Crochet Work", p. 238, figs. 437-438 (the filet rule).`)}
${src(HANDBOOK, `section "Tam-o'-Shanter in Double Crochet", rounds 1-5.`)}
${src(HT, `section "2. How to Crochet the Hyperbolic Plane".`)}`,
      exercise: {
        instructions:
          "Answer each in a word, a short phrase or a number. Capitals are forgiven.",
        items: [
          { prompt: "Ch 21; sc in 2nd ch from hook and in each ch across. How many single crochet?", answer: "20", computedAnswer: true, hint: "The chain next to the hook is skipped and is not a stitch.", explanation: "Twenty-one chains, the first skipped: 20 single crochet. Leinhauser's example is the same rule: Ch 15 gives 14 sc." },
          { prompt: "Ch 20; dc in 4th ch from hook and in each ch across, the skipped chains counting as the first dc. How many double crochet?", answer: "18", computedAnswer: true, hint: "Count the chains you work into, then add one for the skipped three.", explanation: "Chains 4 to 20 take 17 dc, and the 3 skipped chains count as the first: 18. Leinhauser's Ch 17 gives 15 by the same rule." },
          { prompt: "A US pattern says single crochet. What does a UK pattern call that stitch?", answer: "double crochet", accept: ["dc", "double", "a double crochet"], hint: "Above the slip stitch, UK names sit one step up.", explanation: "Craft Yarn Council table: single crochet (sc) in the U.S. is double crochet (dc) in the U.K." },
          { prompt: "A UK pattern says treble (tr). What is the US name?", answer: "double crochet", accept: ["dc", "double", "a double crochet"], hint: "Step the UK name down one.", explanation: "Craft Yarn Council table: U.S. double crochet (dc) is U.K. treble (tr)." },
          { prompt: "A UK pattern gives the tension. What does a US pattern call it?", answer: "gauge", accept: ["the gauge"], hint: "It is the number your swatch has to match.", explanation: "The council's second table: U.S. gauge is U.K. tension." },
          { prompt: "On a Craft Yarn Council chart, a T with two slashes across the stem is which stitch?", answer: "treble crochet", accept: ["treble", "tr", "a treble"], hint: "On a dc or tr, each slash is one wrap.", explanation: "One slash is a double crochet (one wrap), two slashes a treble (two wraps)." },
          { prompt: "On a crochet chart, which stitch is a filled dot?", answer: "slip stitch", accept: ["sl st", "a slip stitch", "slip"], hint: "It is the shortest stitch there is.", explanation: "On the council's chart page the slip stitch is a filled dot and the chain an open oval." },
          { prompt: "By Dillmont's filet rule, how many trebles make 4 solid squares side by side?", answer: "13", computedAnswer: true, hint: "Three per solid square, and one to begin.", explanation: "1 + 3 × 4 = 13. Dillmont's own examples: 2 solid squares are 7 trebles and 3 are 10." },
          { prompt: "The 1918 Tam starts with 7 stitches in the ring, and each widening round adds 7. Round 6 is still widening. How many stitches are in round 6?", answer: "42", computedAnswer: true, hint: "Round 5 has 35.", explanation: "7, 14, 21, 28, 35, 42: each widening round is seven more than the last, and the Tam keeps widening until each section has 30 doubles." },
          { prompt: "Your swatch is larger than the pattern's gauge. Do you change to a smaller or a larger hook?", answer: "smaller", accept: ["a smaller hook", "smaller hook", "smaller one"], hint: "A bigger hook makes bigger stitches.", explanation: "The Craft Yarn Council: if your swatch is larger than the pattern gauge, redo it with a smaller hook." },
          { prompt: "In a US pattern, which turning chain counts as a stitch: the ch-1 before a row of single crochet, or the ch-3 before a row of double crochet?", answer: "ch-3", accept: ["the ch-3", "ch 3", "ch3", "the ch 3", "chain 3", "the chain 3", "the ch-3 before double crochet"], hint: "Leinhauser's rule is about stitches taller than a single crochet.", explanation: "Never count the turning ch-1 in single crochet; on taller stitches the turning chain counts as the first stitch unless the pattern says otherwise." },
          { prompt: "With N = 4, a hyperbolic-plane row has 40 stitches. How many does the next row have?", answer: "50", computedAnswer: true, hint: "Every N stitches become N + 1.", explanation: "40 ÷ 4 = 10 groups of 4, and each becomes 5: 50 stitches." },
        ],
      },
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Reading a pattern",
      section: "Section 5 · Reading a pattern",
      body: "A graded check on US and UK names, abbreviations and repeats, charts, gauge and catching mistakes. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // ── us-and-uk-names ──
          {
            prompt: "In a UK pattern, what is a \"double crochet\"?",
            options: ["US double crochet, the same stitch", "US single crochet", "US half double crochet", "US treble crochet"],
            correctIndex: 1,
            explanation: "Craft Yarn Council: US single crochet (sc) is UK double crochet (dc). \"Double crochet\" is the trap.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What does the US double crochet become in a UK pattern?",
            options: ["Double crochet, the same word", "Half treble", "Treble (tr)", "Double treble, two steps up"],
            correctIndex: 2,
            explanation: "US double crochet (dc) is UK treble (tr).",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What is the US treble in UK terms?",
            options: ["Treble", "Triple treble, two steps up", "Half treble, two steps down", "Double treble"],
            correctIndex: 3,
            explanation: "US treble (tr) is UK double treble (dtr).",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What is the US double treble in UK terms?",
            options: ["Triple treble (trtr)", "Double treble (dtr), the same", "Treble (tr)", "Quadruple treble, two steps up"],
            correctIndex: 0,
            explanation: "US double treble (dtr) is UK triple treble (trtr).",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "Which stitch keeps the same name in both systems?",
            options: ["Double crochet, in both countries", "Slip stitch", "Treble", "Half double, in both countries"],
            correctIndex: 1,
            explanation: "Slip stitch is sl st in the US and ss in the UK, the same stitch under the same name.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "Above the slip stitch, how do UK names relate to US names for the same stitch?",
            options: ["One step down for every stitch", "Identical", "One step up", "Two steps up for tall stitches only"],
            correctIndex: 2,
            explanation: "single to double, half double to half treble, double to treble, treble to double treble, double treble to triple treble.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What does a UK pattern call gauge?",
            options: ["Gauge", "Swatch size, from the label", "Stitch weight, per 4 inches", "Tension"],
            correctIndex: 3,
            explanation: "The council's second table: U.S. gauge is U.K. tension.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "For gauge and yarn over, which country does the council's second table group with the UK?",
            options: ["Canada", "The US", "Australia", "Ireland"],
            correctIndex: 0,
            explanation: "The second table reads U.S. to U.K./Canada: gauge to tension, yarn over (yo) to yarn over hook (yoh).",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "For stitch names, which country does the council's first table group with the US?",
            options: ["The United Kingdom", "Canada", "Ireland and Scotland", "France and Germany"],
            correctIndex: 1,
            explanation: "The first table reads U.S. and Canada to U.K.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "Who taught the 1918 Handbook's writer the stitch names it used?",
            options: ["A Boston editor", "The Craft Yarn Council", "An English teacher", "A teacher at a blind school"],
            correctIndex: 2,
            explanation: "\"taught the writer by an English teacher of crocheting, herself a professional in the art.\"",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What did the 1918 Handbook warn that some periodicals and books did?",
            options: ["Left out the chain entirely", "Used French names for stitches", "Counted the slip knot as a stitch", "Names shifted down one"],
            correctIndex: 3,
            explanation: "\"the real slip-stitch is omitted, and the single is called slip-stitch; the double is called single, the treble is called double\".",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "The shifted names the 1918 Handbook warned about are today's what?",
            options: ["US system", "UK system", "Canadian system for gauge", "Dillmont's own system"],
            correctIndex: 0,
            explanation: "Single for the old double, double for the old treble: that shifted set is today's US system.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "Which book, printed in Boston in 1908, already used today's US names?",
            options: ["The Handbook of Wool Knitting", "Priscilla", "Beeton's", "Lambert's My Crochet Sampler"],
            correctIndex: 1,
            explanation: "The Priscilla Crochet Book: slip stitch, single crochet, half double, double, treble.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "Were both naming systems in American print before the Craft Yarn Council's table?",
            options: ["Yes, plus a third Canadian set", "No, only the US system existed", "Yes, both were", "No, neither"],
            correctIndex: 2,
            explanation: "Priscilla (1908) used today's US names, and the 1918 Handbook used the English ones. The council's table puts Canada in the US column for every stitch name, so there is no third set.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "Why does lesson 16 say \"US names versus UK names\" is not quite right?",
            options: ["The UK never used stitch names in print", "The US adopted the UK names in 2001", "Canada invented both", "Both were in American print"],
            correctIndex: 3,
            explanation: "It is not as if each country always had one system: both were in American print before the council's table.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What did Gaugain (1840) call today's US single crochet?",
            options: ["Plain French Tambour", "Shepherd or Single Crochet, like Riego", "Plain double crochet", "Long double, like Beeton's Ill. 225"],
            correctIndex: 0,
            explanation: "Gaugain's \"Plain French Tambour ... (sometimes called double tambour)\", p. 190.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What did Riego (1846) call today's US single crochet?",
            options: ["Shepherd or Single Crochet, her p. 57 heading", "Plain, Double, or French Crochet", "Treble Crochet, from her p. 58", "Long stitch"],
            correctIndex: 1,
            explanation: "Riego's \"Plain, Double, or French Crochet\", pp. 57-58.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What did Riego call the slip stitch?",
            options: ["Plain, Double, or French Crochet, p. 57", "Treble Crochet, as on her page 58", "Shepherd or Single Crochet", "Plain single crochet"],
            correctIndex: 2,
            explanation: "Riego's \"Shepherd or Single Crochet\", p. 57, describes a slip stitch.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What does lesson 16 tell you to read before you start a pattern?",
            options: ["The yarn label's care symbols", "The designer's other patterns", "The last row's stitch count", "Its stitch key"],
            correctIndex: 3,
            explanation: "Read the pattern's own stitch key before you start; if it does not name its system, the key will show it.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What does the council's chart page say to always refer to?",
            options: ["The pattern key", "The yarn weight table, rows 0 to 7", "The hook chart", "The table of UK and US terms"],
            correctIndex: 0,
            explanation: "\"Always refer to the pattern key\" (Craft Yarn Council, chart symbols).",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "In lesson 16's table, which source calls today's US single crochet \"plain stitch\"?",
            options: ["Beeton", "Lambert", "Priscilla", "Dillmont"],
            correctIndex: 3,
            explanation: "Dillmont's \"plain stitch\" (p. 224, fig. 405) is today's US single crochet.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What did Lambert (1847) call the slip stitch?",
            options: ["Plain double crochet", "Shepherd's hook stitch, from Scotland", "Plain single crochet", "Single stitch"],
            correctIndex: 2,
            explanation: "Lambert's \"plain single crochet\" is the stitch \"where one loop only is made on the needle, and drawn through each stitch\" (p. 15).",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "Which book in lesson 16's table abbreviates single crochet as \"s c\"?",
            options: ["Mary Frances (1918)", "Priscilla (1908)", "Beeton (1870)", "Gaugain (1840)"],
            correctIndex: 1,
            explanation: "Priscilla (1908): \"Single Crochet (s c).\" In lesson 16's table the Mary Frances name is plain \"single crochet\", Beeton's is \"double stitch\" and Gaugain's \"Plain French Tambour\".",
            sourceLessonSlug: "us-and-uk-names",
          },
          // ── abbreviations-and-repeats ──
          {
            prompt: "Which group does lesson 17 list as shaping abbreviations?",
            options: ["ch, sl st, sc, hdc, dc, tr", "inc, dec, sc2tog, dc2tog", "rnd, sk, sp, ch-sp, tch", "BLO, FLO, yo, RS, WS"],
            correctIndex: 1,
            explanation: "Shaping: inc, dec, sc2tog, dc2tog.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "What does lesson 17 say to keep open beside your pattern?",
            options: ["Dillmont's table of needle numbers", "The Handbook", "The master list", "The yarn weight table, rows 0 to 7"],
            correctIndex: 2,
            explanation: "Keep the Craft Yarn Council's master list open for the exact wording, rather than trust a paraphrase.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "Why does lesson 17 not spell out every abbreviation?",
            options: ["The master list forbids anyone to copy it", "They change every year", "Modern patterns have stopped using them", "It checked only a few of them"],
            correctIndex: 3,
            explanation: "The course checked the stitch names, yo, BLO, FLO and ch-sp against the master list, and sends you to the list for the rest.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "What does the 1918 Handbook say parentheses and asterisks are used for?",
            options: ["To save repeating", "To mark the stitches you can skip", "To show which stitches are UK names", "To flag the rows that need counting"],
            correctIndex: 0,
            explanation: "They \"are used to prevent the necessity of repetition and save space.\"",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "\"(Chain 3, miss 3, 1 treble in next) three times.\" How often do you work the bracket?",
            options: ["Four times, once plus three repeats", "Three times in all", "Once", "Twice, then the last part alone"],
            correctIndex: 1,
            explanation: "Work the sequence in the brackets, then do the whole bracket twice more: three times in all.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "In the 1918 Handbook's repeat example, \"(Chain 3, miss 3, 1 treble in next) three times\", what does \"miss 3\" mean?",
            options: ["Chain 3 more for the turning", "Work 3 into one", "Skip 3 stitches", "Leave 3 loops on the hook"],
            correctIndex: 2,
            explanation: "Miss means skip: Riego's \"Pass over 1 of the row before\", here three times over.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "Which signs did Dillmont use to mark repeats?",
            options: ["Brackets", "Circled numbers", "Underlines", "Asterisks"],
            correctIndex: 3,
            explanation: "\"Such repetitions will be indicated, by the signs\" of one, two and three asterisks (Dillmont, p. 222).",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "Which of these does the master list give as a repeat sign?",
            options: ["Square brackets", "A colon after the row number", "A line beneath the stitches", "A question mark"],
            correctIndex: 0,
            explanation: "The master list gives the asterisk (alone and in pairs), curly brackets, square brackets and parentheses.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "In \"Row 1: Ch 15;\", what does \"Ch 15\" tell you?",
            options: ["Work 15 rows of chain stitch", "Make 15 chains", "Skip 15 chains along the row", "Make 15 sc"],
            correctIndex: 1,
            explanation: "Make 15 chains, after the slip knot, which is never counted.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "In \"sc in 2nd ch from hook\", which chain gets the first stitch?",
            options: ["The first, right next to the hook", "The second from the slip knot", "One past the chain by the hook", "The last chain that was made"],
            correctIndex: 2,
            explanation: "Skip the chain next to the hook and work a single crochet in the next one.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "What does \"and in each ch across\" mean?",
            options: ["Two stitches in every other chain", "One stitch in each alternate chain", "Skip every chain", "One stitch in every chain"],
            correctIndex: 3,
            explanation: "One single crochet in every chain to the end of the row.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "How many stitches should you have after Leinhauser's Row 1?",
            options: ["14 single crochet", "15 single crochet", "13, after skipping both ends", "16, counting the slip knot too"],
            correctIndex: 0,
            explanation: "\"You should have 14 single crochet stitches.\"",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "What must you do that Leinhauser's pattern line never prints?",
            options: ["Make the chains", "Make the slip knot", "Work the stitch named in the chain", "Start at the row number printed"],
            correctIndex: 1,
            explanation: "\"the very first thing you must do is make a slip knot on your hook. Does the pattern tell you this? No\".",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "What is the number after the colon at the end of a row, as in \": 15 dc\"?",
            options: ["The number of rows still to work", "The hook size in millimetres", "Your expected count", "The next page"],
            correctIndex: 2,
            explanation: "It is the stitch count you should have when the row is done: the pattern checking your work for you.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "What does lesson 17 say to do with the count after the colon at the end of a row?",
            options: ["Multiply it by the gauge", "Add it to the next row's count", "Ignore it until the last row", "Check your count"],
            correctIndex: 3,
            explanation: "Compare it with your own count every time.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "In lesson 17's list, which of these is a stitch abbreviation?",
            options: ["hdc", "rnd", "BLO", "dec"],
            correctIndex: 0,
            explanation: "hdc, half double crochet, is one of the stitch names in lesson 16's table.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "What does \"yo\" stand for?",
            options: ["Yarn only", "Yarn over", "Your own stitch", "Yoke opening"],
            correctIndex: 1,
            explanation: "yo is yarn over (lesson 4); the UK form is yoh, yarn over hook.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "Which repeat signs did the 1918 Handbook name?",
            options: ["Square brackets and colons only", "Curly braces and question marks", "Underlines beside the row numbers", "Parentheses, asterisks or stars"],
            correctIndex: 3,
            explanation: "\"PARENTHESES () AND ASTERISKS OR STARS ... are used to prevent the necessity of repetition and save space.\"",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "On the Craft Yarn Council's master list, which stitch is trtr?",
            options: ["The US treble crochet", "The US triple treble", "A two-together decrease", "A turning chain of three"],
            correctIndex: 1,
            explanation: "The master list uses US terms, and trtr is the triple treble, one step taller than dtr. In lesson 16's table, trtr appears only as the UK name for the US dtr.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "In the 1918 Handbook's repeat example, its \"treble\" is which US stitch?",
            options: ["Treble crochet", "Single crochet", "Half double", "Double crochet"],
            correctIndex: 3,
            explanation: "The Handbook uses English names, so its treble is the US double crochet.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          // ── charts-and-symbols ──
          {
            prompt: "From which side does a chart symbol show a stitch, for the most part?",
            options: ["The wrong side of the work", "The edge, seen side-on", "The right side", "Both sides at once"],
            correctIndex: 2,
            explanation: "\"For the most part each symbol represents a stitch as it looks on the right side of the work.\"",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "What does an open oval mean on a crochet chart?",
            options: ["Slip stitch", "Single crochet", "Double crochet", "Chain stitch"],
            correctIndex: 3,
            explanation: "Chain is an open oval; slip stitch is a filled dot.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "What does a filled dot mean on a crochet chart?",
            options: ["Slip stitch", "Chain", "Single crochet", "Half double"],
            correctIndex: 0,
            explanation: "A filled dot is a slip stitch.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "Which two symbols does the council say are both used for single crochet?",
            options: ["T or a dot", "+ or X", "Oval or dot", "T with one slash"],
            correctIndex: 1,
            explanation: "A plus sign or an X: \"Both symbols are commonly used.\"",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "What does a plain T mean on a crochet chart?",
            options: ["Double crochet", "Treble crochet", "Half double", "Slip stitch"],
            correctIndex: 2,
            explanation: "A plain T is the half double crochet; slashes across the stem mark the taller stitches.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "What does a T with two slashes mean?",
            options: ["Double crochet", "Half double", "Single crochet", "Treble crochet"],
            correctIndex: 3,
            explanation: "One slash is a double crochet; two slashes a treble crochet.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "What do the slashes across a T match?",
            options: ["Wraps, on a dc or tr", "The rows below", "The loops left on the hook", "The chains in the turning chain"],
            correctIndex: 0,
            explanation: "On the double and the treble, each slash is one wrap: a double starts with one wrap and has one slash, a treble starts with two and has two. The half double also starts with one wrap but is a plain T.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "Does this course copy the council's symbol drawings?",
            options: ["Yes, in every chart lesson", "No, it links to the page", "Yes, as hosted images", "No, it skips chart symbols"],
            correctIndex: 1,
            explanation: "The course links the symbols rather than copying the drawings: open the council's page and look.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "In Dillmont's filet rule, what makes an open square?",
            options: ["3 trebles side by side", "2 trebles with 1 chain between", "1 treble and 2 chain", "4 chain alone"],
            correctIndex: 2,
            explanation: "\"For each square marked on the pattern, you must count, in the grounding, 1 treble and 2 chain stitches\" (p. 238).",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "In Dillmont's filet rule, what makes a solid square?",
            options: ["1 treble and 2 chain", "2 trebles", "5 chain closed with a plain", "3 trebles"],
            correctIndex: 3,
            explanation: "\"in the solid parts, 3 trebles\".",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "What must the chain squares always begin and end with, in Dillmont's rule?",
            options: ["A treble", "2 chain", "A slip-stitch join", "A picot of five chain"],
            correctIndex: 0,
            explanation: "\"The squares formed by the chain stitches should always begin and end with a treble.\"",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "How many trebles make 2 solid squares side by side?",
            options: ["6", "7", "8", "9"],
            correctIndex: 1,
            explanation: "\"Thus for 2 solid squares, side by side, count 7 trebles\": 1 + 3 + 3.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "How many trebles make 3 solid squares side by side?",
            options: ["9", "12", "10", "11"],
            correctIndex: 2,
            explanation: "\"and for 3 squares, 10\": 1 + 9.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "Dillmont's \"treble\" in the filet rule is which US stitch?",
            options: ["Treble crochet, the same word", "Single crochet", "Half double, her half treble", "Double crochet"],
            correctIndex: 3,
            explanation: "Dillmont's treble is the US double crochet.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "What are Riego's twelve 1846 illustrations?",
            options: ["Pattern charts", "Stitch drawings", "Purse photographs", "Hook drawings"],
            correctIndex: 0,
            explanation: "The Gutenberg edition labels all twelve \"Pattern chart\". They are not drawings of stitches.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "What does Riego's figure 1 show?",
            options: ["Two hands holding a hook", "A grid of filled dots", "A finished purse, photographed", "A treble's motion"],
            correctIndex: 1,
            explanation: "A squared grid with filled dots, a chart for a purse showing where the colours or beads go.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "Which of Riego's twelve figures follow netting patterns?",
            options: ["1 to 9", "1 to 3, the first three", "10 to 12", "All twelve of them"],
            correctIndex: 2,
            explanation: "Figures 1 to 9 follow crochet patterns and 10 to 12 follow netting patterns (pp. 89 and 93).",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "For drawings of stitches, rather than Riego's charts, which sources does lesson 18 send you to?",
            options: ["Riego's figures 10 to 12 for netting", "The council's chart symbol drawings only", "Karp's figures in his 2018 paper", "Dillmont, Beeton, the Handbook"],
            correctIndex: 3,
            explanation: "For drawings of stitches, use Dillmont, Beeton and the 1918 Handbook.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "A plain T on a council chart is the half double. How many wraps does it start with?",
            options: ["None, like the single", "Two, like the treble", "One, like the double", "Three, like the dtr"],
            correctIndex: 2,
            explanation: "The slash-per-wrap aid holds only for the double and the treble. The half double starts with one wrap, like the double, but is drawn as a plain T.",
            sourceLessonSlug: "charts-and-symbols",
          },
          // ── gauge-and-catching-mistakes ──
          {
            prompt: "What is gauge, as lesson 19 describes it?",
            options: ["Stitches per width", "The weight of a ball of yarn", "Hook diameter", "The number of rows in a piece"],
            correctIndex: 0,
            explanation: "A count of stitches across a measured width, as in the yarn table's 11 to 14 single crochet to 4 inches.",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Why does a pattern state its gauge?",
            options: ["So you can buy the right yarn brand", "So you can match it", "So you know how many rows to work", "So you can skip the swatch"],
            correctIndex: 1,
            explanation: "A pattern states its gauge so you can match it, and the swatch tells you whether you do.",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Whatever a hook's sizing, what does the council say to complete?",
            options: ["A hook test", "A full first row of the pattern", "A gauge swatch", "A count of the chains in the ring"],
            correctIndex: 2,
            explanation: "\"Regardless of the number, letter or millimeter sizing, always complete a gauge swatch\".",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Your swatch is larger than the pattern gauge. What does the council say?",
            options: ["Keep going; larger is within range", "Pull tighter", "Change to a heavier yarn weight", "Use a smaller hook"],
            correctIndex: 3,
            explanation: "\"If your swatch is larger than the pattern gauge, redo a swatch using a smaller hook or needle.\"",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Your swatch is too small. What does the council say?",
            options: ["Use a larger hook", "Use a smaller hook and work looser", "Add a stitch to every row of the pattern", "Use lighter yarn"],
            correctIndex: 0,
            explanation: "\"Conversely, if your gauge swatch it [sic] too small, redo it using a larger hook\".",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "How does lesson 19 treat the yarn weight table's gauge figures?",
            options: ["As the final answer to gauge", "As a starting point", "As a substitute for a swatch", "As a list of hook brands"],
            correctIndex: 1,
            explanation: "The table gives a starting point; the FAQ says you must make a swatch to be sure.",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "What does the council's FAQ say you must make to be sure of gauge?",
            options: ["A purchase of one brand only", "A label note", "A gauge swatch", "A count of rows on the label"],
            correctIndex: 2,
            explanation: "\"you must knit or crochet a gauge swatch to be sure\".",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Which stitch did Priscilla say \"no two persons will make\" alike?",
            options: ["A foundation chain of ten", "A slip knot", "A turning chain of three", "Star stitch"],
            correctIndex: 3,
            explanation: "Star stitch: \"no two persons will make it alike\" (Priscilla, p. 3).",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "What did Priscilla advise for anyone working star stitch for the first time?",
            options: ["A sample strip", "A larger steel hook than usual", "A UK pattern", "A frame to hold the work flat"],
            correctIndex: 0,
            explanation: "\"It is advisable for any one working star stitch for the first time to work a sample strip\".",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "What are the sources' two habits for catching a mistake?",
            options: ["Pull out rows, and rework them", "Count and watch edges", "Block each piece, then measure", "Change hooks, and swatch again"],
            correctIndex: 1,
            explanation: "Count the stitches at the end of every row (Leinhauser), and watch the edges for a slope (Priscilla).",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Your star stitch slopes at the end where the wool is clipped. What does Priscilla say to do?",
            options: ["Start the row again from the chain", "Change to a smaller hook at once", "Work an extra star", "Block the piece when it is done"],
            correctIndex: 2,
            explanation: "\"you will have to work an extra star to keep it even\".",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "What does Priscilla say usually causes a sloping edge in star stitch?",
            options: ["A turning chain that is too long", "The wrong hook", "Yarn joined in the middle of a row", "A tight first stitch"],
            correctIndex: 3,
            explanation: "\"It is generally caused by keeping the 1st st tight upon the hook when it should be loosest of all.\"",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "In her star stitch, how should the first stitch sit on the hook, per Priscilla?",
            options: ["Loosest of all", "Tightest of all, to anchor it", "The same as every other stitch", "Twisted once"],
            correctIndex: 0,
            explanation: "It \"should be loosest of all\".",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Does any source in this course explain how to pull out stitches and rework them?",
            options: ["Yes, Leinhauser's counting guide", "Only Fryer, for knitting", "Yes, Priscilla's star stitch page", "Only Riego, for crochet"],
            correctIndex: 1,
            explanation: "Only the Mary Frances book, in a knitting scene: \"rip out all your stitches back to the beginning of the row where you see your first mistake\" (Fryer, p. 172). No crochet source here explains it.",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "What does Leinhauser say to count, and when?",
            options: ["Rows, once the piece is done", "Chains, before the first row", "Stitches, each row", "Wraps, always"],
            correctIndex: 2,
            explanation: "\"Count the stitches at the end of every row.\"",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Is Priscilla's sloping-edge diagnosis written for every stitch?",
            options: ["Yes, for all crochet", "No, for her star stitch", "No, for single crochet", "No, for her chain stitch"],
            correctIndex: 1,
            explanation: "It sits on her star-stitch page, and its remedy is \"work an extra star\".",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          // ── exercise-read-and-count ──
          {
            prompt: "In the lesson 20 exercise, Ch 21 with sc from the 2nd chain gives how many sc?",
            options: ["21", "22", "19", "20"],
            correctIndex: 3,
            explanation: "Twenty-one chains, the first skipped: 20.",
            sourceLessonSlug: "exercise-read-and-count",
          },
          {
            prompt: "In the lesson 20 exercise, Ch 20 with dc from the 4th chain gives how many dc?",
            options: ["18", "17", "20", "16"],
            correctIndex: 0,
            explanation: "Chains 4 to 20 take 17 dc, and the 3 skipped chains count as the first: 18.",
            sourceLessonSlug: "exercise-read-and-count",
          },
          {
            prompt: "In the lesson 20 exercise, how many trebles make 4 solid filet squares?",
            options: ["12", "13", "16", "14"],
            correctIndex: 1,
            explanation: "1 + 3 × 4 = 13.",
            sourceLessonSlug: "exercise-read-and-count",
          },
          {
            prompt: "In the lesson 20 exercise, how many stitches are in round 6 of the Tam?",
            options: ["36", "40", "42", "49"],
            correctIndex: 2,
            explanation: "7, 14, 21, 28, 35, 42.",
            sourceLessonSlug: "exercise-read-and-count",
          },
          {
            prompt: "In the lesson 20 exercise, N = 4 and a row has 40 stitches. How many in the next row?",
            options: ["44", "41", "80", "50"],
            correctIndex: 3,
            explanation: "Ten groups of 4, each becoming 5: 50.",
            sourceLessonSlug: "exercise-read-and-count",
          },
          {
            prompt: "In the lesson 20 exercise, which turning chain counts as a stitch in a US pattern?",
            options: ["The ch-1 before a single crochet row", "The ch-3", "Neither", "Both, each counted as one stitch"],
            correctIndex: 1,
            explanation: "Never count the turning ch-1 in single crochet; on taller stitches the turning chain counts as the first stitch unless the pattern says otherwise (Leinhauser).",
            sourceLessonSlug: "exercise-read-and-count",
          },
          {
            prompt: "In the lesson 20 exercise, a UK treble (tr) is which US stitch?",
            options: ["Double crochet", "Treble crochet", "Half double crochet, a step lower", "Single crochet, two steps down"],
            correctIndex: 0,
            explanation: "Craft Yarn Council table: U.S. double crochet (dc) is U.K. treble (tr).",
            sourceLessonSlug: "exercise-read-and-count",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 · Finishing
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "fastening-off-and-ends",
      title: "21 · Fastening off, and the loose ends",
      section: "Section 6 · Finishing",
      recallContent: [
        {
          prompt: "Your swatch is smaller than the pattern gauge. What does the Craft Yarn Council say to do?",
          answer: "Make another swatch with a larger hook.",
        },
        {
          prompt: "What two habits do the sources teach for catching a mistake?",
          answer: "Count the stitches at the end of every row (Leinhauser), and watch the edges for a slope (Priscilla).",
        },
      ],
      body: `**Fastening off.** When the last stitch is made, one loop is left on the hook. Fastening off secures it. The move is the same in all four sources below, from 1840 to 1918.

- Gaugain (1840): "When you come to the end of the row, cut off the thread, and draw it through the last loop, which fastens it" (Gaugain, 1840, p. 191).
- Riego (1846): "cut the wool off, and draw it through to fasten it" (Riego de la Branchardière, 1846, p. 55).
- Dillmont: "At the end of each row, cut the thread and draw the end through the last loop; in this manner all crochet work is finished off" (Dillmont, n.d., p. 223).
- The Mary Frances book, finishing its doll's scarf: "Break off the yarn, and fasten the end by making a chain stitch and pulling the yarn all the way through" (Fryer, 1918, p. 69).

Cut the yarn and draw the end through the last loop on the hook.

**The loose ends.** Every piece has at least two ends, where you started and where you stopped, and a colour change adds more. Dillmont describes two ways workers dealt with them: "Some crochet workers make a few extra chain stitches with the ends of the thread at the beginning and end of each row, or fasten them off with a few stitches on the wrong side" (p. 223). The Mary Frances book gives a needle method, under the heading "To Join Ends of Yarn in Crocheting": "When the work is finished, thread the ends of yarn into a long-eyed 'crewel' or darning needle, and run the ends back into the work" (Fryer, 1918, p. 76). Its crocheted cape says it again: "To fasten the loose ends of wool, thread them into a long-eyed needle and run the ends back into the work" (p. 238). On the doll's necklace the needle strings three beads before the end is fastened "securely into the end chain stitch" (pp. 50-51).

**Ends at a colour change.** Changing colour leaves ends too, and the sources say how to change cleanly. Dillmont: "the last stitch before you take another colour cannot be finished with the same thread, you must pass the new thread through the last loop and draw it up with that" (p. 239). Riego (1846) adds how to carry the colour you are not using: "Lay the color not wanted along, and work over it. In changing the color, draw it through before finishing the stitch, when there are 2 loops on the needle" (pp. 58-59).

**What the record leaves open.** Fryer says to run the ends back into the work, and the picture is captioned "Run the ends into the work" (p. 76). She does not say how far to run an end or along which path, so this course gives no rule for that.

:::reveal How do the four sources in this lesson fasten off? ||| Cut the yarn and draw the end through the last loop on the hook.

:::reveal When does Dillmont say to bring in a new colour? ||| On the last stitch before the change: that stitch is finished with the new thread, drawn through the last loop.

## Sources
${src(GAUGAIN, `p. 191 (PDF p. 195).`)}
${src(RIEGO_1846, `p. 55, "Terms Used in Crochet"; pp. 58-59 (two colours).`)}
${src(DILLMONT, `"Crochet Work", p. 223 (finishing off; ends); p. 239 (changing colour).`)}
${src(FRYER, `pp. 50-51 (the doll's necklace); p. 69 (the doll's scarf); p. 76 ("To Join Ends of Yarn in Crocheting"); p. 238 (the cape's loose ends).`)}`,
    },
    {
      slug: "joining-and-edges",
      title: "22 · Joining pieces, and edges",
      section: "Section 6 · Finishing",
      recallContent: [
        {
          prompt: "How do you fasten off?",
          answer: "Cut the yarn and draw the end through the last loop on the hook.",
        },
        {
          prompt: "How did Riego carry a colour she was not using?",
          answer: "\"Lay the color not wanted along, and work over it.\"",
        },
      ],
      body: `Many pieces are made in parts: squares for a counterpane, strips for a table cover. The parts have to be joined.

**Sew it, or crochet it.** Dillmont, on her pattern in squares for counterpanes (fig. 478, p. 290): "The separate parts are then either sewn or crocheted together on the wrong side" (Dillmont, n.d., p. 291). Lambert (1847) says table covers "may be made in four or six lengths, and afterwards sewn together with wool" (Lambert, 1847, p. 12).

**The slip stitch as a join.** The 1918 *Handbook* calls its own slip-stitch "properly a close joining stitch", and gives the join: "Drop the stitch on the needle, insert hook through the stitch of work to which you wish to join, take up the dropped stitch and pull through". Riego (1861) gives the same move under the heading "To Join" in crochet: "Take the needle out of the loop, put it into the stitch to be joined, and bring the loop through this stitch" (Riego de la Branchardière, 1861). Fifty-seven years apart, one move: take the hook out, put it through the piece you are joining to, catch the dropped loop and pull it through.

**Joining on a paper pattern.** For a chair-back made of separate crochet pieces, Dillmont lays them out on a drawing first: "draw a square the size of the work on a piece of thick paper or waxcloth ... sew the separate pieces of crochet upon it, face downwards, in their proper places and make the trebles on the wrong side of the work" (p. 316, fig. 485 on p. 317). The paper holds every piece in place while the joining stitches go in. It is the same idea as Lambert's paper pattern for shaping, from lesson 13.

**Edges: a picot.** A finished edge can be plain, or it can carry a small decoration. Dillmont's chain picot is the simplest: "For the small chain picots, make: 5 chain and 1 plain stitch on the first of these 5 stitches" (p. 237). In US terms, chain 5 and work a single crochet into the first of those chains.

**Starting on a finished piece.** In Riego's 1861 book the crochet is worked as loops of chain round tatted stars, so it starts on work already made. She defines "To Commence" in crochet: "Put the needle into a stitch or pearl loop, and, leaving an end, bring the wool through in a loop."

:::reveal Name two ways Dillmont says separate crochet parts can be joined. ||| Sewn together, or crocheted together, on the wrong side.

:::reveal How do you make Dillmont's small chain picot, in US terms? ||| Chain 5, then a single crochet into the first of those 5 chains.

## Sources
${src(DILLMONT, `"Crochet Work", p. 237 (chain picots); pp. 290-291 (squares for counterpanes: fig. 478 on p. 290, the joining sentence on p. 291); p. 316 (chair-back, fig. 485 on p. 317).`)}
${src(LAMBERT, `p. 12.`)}
${src(HANDBOOK, `section "A Lesson in Crochet", the slip-stitch paragraph.`)}
${src(RIEGO_1861, `the crochet terms "'To Commence,' in Crochet" and "'To Join,' in Crochet".`)}`,
    },
    {
      slug: "care-and-blocking",
      title: "23 · Care, and the gap in the record on blocking",
      section: "Section 6 · Finishing",
      recallContent: [
        {
          prompt: "How does the 1918 Handbook join with a slip stitch?",
          answer: "Drop the stitch from the hook, insert the hook through the stitch you are joining to, pick up the dropped stitch and pull it through.",
        },
        {
          prompt: "Why did Dillmont lay chair-back pieces on paper before joining them?",
          answer: "To hold every piece face down in its proper place on a drawing the size of the finished work while the joining trebles were worked on the wrong side.",
        },
      ],
      body: `Two finishing questions remain: shaping a piece to its final size, and washing it. This lesson is short, because the record is.

**Washing starts with the material.** Dillmont's crochet chapter touches care when it points to washable materials for "things that require frequent washing" (Dillmont, n.d., p. 241). The choice of yarn is where care begins: a washcloth (lesson 29) will be washed often, so choose its yarn for that.

**Blocking: what the record says.** The word you will meet in modern patterns is blocking. It is the one finishing step this course cannot source for crochet, and here is what the record does say.

- Dillmont's crochet chapter has no blocking, starching or pressing instruction. It was searched for "starch", "block", "iron", "press" and "damp".
- Beeton's crochet section has no blocking instruction either.
- The 1918 *Handbook*'s only pressing instruction is for a knitted coat, not for crochet: "stretch into shape, pin to an ironing-board, cover with a damp cloth and press with a fairly hot iron until the cloth is dry."
- Dillmont's general finishing pages sit outside her crochet chapter, on pp. 565-568, and they are written for lace. She stiffens new lace by dabbing it with damp organdie muslin and ironing it (p. 565), irons lace on "a board covered with white flannel" (p. 567), and pins it out damp on a padded wooden drum, leaving it there "till it be quite dry" (pp. 567-568). These pages never mention crochet.

So the position is this. The knitted-coat pressing and Dillmont's lace pinning are real period methods, but one was written for knitting and the other for lace, and this course will not tell you either is right for your crochet. If a pattern you follow gives blocking instructions, follow the pattern. If it does not, no source in this course tells you what to do. The course's own suggestion, which is not a sourced method, borrows the habit lesson 19 taught for gauge: try any method on your swatch first, and see what the yarn does.

**Why the gap is stated.** A course that filled the gap with a confident paragraph would be teaching you something no source here supports. Thinness is a finding. When this course adds a source on blocking crochet, this lesson will change.

:::reveal Which source in this course gives a pressing instruction, and what was it written for? ||| The 1918 Handbook, and it was written for a knitted coat, not for crochet.

:::reveal Before trying an unsourced finishing method on a finished piece, what should you try it on? ||| Your swatch.

## Sources
${src(DILLMONT, `"Crochet Work", p. 241 (washable materials); the crochet chapter, pp. 221-324, for the absence of a blocking instruction; pp. 565-568 ("To stiffen new needlework", "To stiffen lace", "To iron lace", "To pin out lace": lace finishing, outside the crochet chapter, with no mention of crochet).`)}
${src(BEETON, `"Crochet", pp. 185-191 (no blocking instruction).`)}
${src(HANDBOOK, `the knitted coat's finishing paragraph.`)}`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Finishing",
      section: "Section 6 · Finishing",
      body: "A graded check on fastening off, ends, joining, edges, care and the gap on blocking. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // ── fastening-off-and-ends ──
          {
            prompt: "How does Gaugain (1840) fasten off at the end of a row?",
            options: ["Tie the two ends in a square knot", "Chain ten and sew the chain down", "Through the last loop", "Pin the loop"],
            correctIndex: 2,
            explanation: "\"cut off the thread, and draw it through the last loop, which fastens it\" (Gaugain, 1840, p. 191).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "Dillmont says \"in this manner all crochet work is finished off\". In what manner?",
            options: ["A knot tied on the wrong side of the work", "Slip stitches across", "The last loop sewn down with a needle", "End drawn through the last loop"],
            correctIndex: 3,
            explanation: "\"cut the thread and draw the end through the last loop; in this manner all crochet work is finished off\" (p. 223).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "How does the Mary Frances doll's scarf fasten its end?",
            options: ["A chain pulled right through", "A slip knot, drawn up tight on the end", "A bead threaded on, then knotted twice", "A double crochet"],
            correctIndex: 0,
            explanation: "\"fasten the end by making a chain stitch and pulling the yarn all the way through\" (Fryer, p. 69).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What does Riego (1846) say to do to fasten off?",
            options: ["Turn and chain one", "Cut the wool, draw it through", "Sew the end in with a long-eyed needle", "Tie the wool to the next ball's end"],
            correctIndex: 1,
            explanation: "\"cut the wool off, and draw it through to fasten it\" (Riego, 1846, p. 55).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "At least how many ends does every piece have?",
            options: ["One", "Four", "Two", "None"],
            correctIndex: 2,
            explanation: "One where you started and one where you stopped.",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What adds more ends to a piece?",
            options: ["A turning chain at the row's end", "An increase worked at a corner", "A row worked in the back loop", "A colour change"],
            correctIndex: 3,
            explanation: "A colour change leaves ends too, which is why lesson 21 covers changing colour.",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What is one way Dillmont says some workers fastened their ends?",
            options: ["A few stitches on the wrong side", "Knotting the two ends twice on the right side", "Gluing them flat", "Leaving them long as a fringe for decoration"],
            correctIndex: 0,
            explanation: "\"or fasten them off with a few stitches on the wrong side\" (p. 223).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What does Dillmont say some workers did with their ends at each row's start and end?",
            options: ["Burning the tips so that they cannot fray", "Extra chain stitches with them", "Tying them to the turning chain of the next row", "Pinning them down"],
            correctIndex: 1,
            explanation: "\"Some crochet workers make a few extra chain stitches with the ends of the thread at the beginning and end of each row\".",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "In the Mary Frances doll's necklace, what is the long-eyed needle for?",
            options: ["To sew on a clasp", "To make the first chain", "To thread three beads", "To pick up a dropped stitch"],
            correctIndex: 2,
            explanation: "For the doll's necklace it strings three beads on the end, which is then fastened \"securely into the end chain stitch\" (pp. 50-51). The book also uses one to \"run the ends back into the work\" (pp. 76, 238).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "When does Dillmont bring in a new colour?",
            options: ["At the start of the next row only", "After fastening off", "On the first stitch after the change", "On the last stitch before the change"],
            correctIndex: 3,
            explanation: "\"the last stitch before you take another colour cannot be finished with the same thread\" (p. 239).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "At a colour change, how does Dillmont bring in the new thread?",
            options: ["Through the last loop", "Knotted to the old colour's end", "Into the back loop", "Wrapped twice before the insert"],
            correctIndex: 0,
            explanation: "\"you must pass the new thread through the last loop and draw it up with that\" (p. 239).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What does Riego (1846) do with the colour not wanted?",
            options: ["Cuts it off", "Works over it", "Leaves it hanging at the back", "Winds it round the hook's handle"],
            correctIndex: 1,
            explanation: "\"Lay the color not wanted along, and work over it\" (pp. 58-59).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "When does Riego draw the new colour through?",
            options: ["After the stitch is fully finished", "Before the hook goes into the stitch", "With 2 loops on the needle", "At the next row"],
            correctIndex: 2,
            explanation: "\"In changing the color, draw it through before finishing the stitch, when there are 2 loops on the needle.\"",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What does the Mary Frances book use to run ends back into the work?",
            options: ["The crochet hook itself", "A steel knitting needle", "A dressmaker's pin", "A long-eyed darning needle"],
            correctIndex: 3,
            explanation: "\"thread the ends of yarn into a long-eyed 'crewel' or darning needle, and run the ends back into the work\" (Fryer, 1918, p. 76).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "When does the Mary Frances book run the ends in?",
            options: ["When the work is finished", "Before the first row", "After every single stitch", "Only after washing"],
            correctIndex: 0,
            explanation: "\"When the work is finished, thread the ends of yarn into a long-eyed 'crewel' or darning needle\" (p. 76).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "When the last stitch is made, what is left on the hook?",
            options: ["Two loops, ready to cut", "One loop", "No loops at all", "Three loops and a tail"],
            correctIndex: 1,
            explanation: "One loop, which fastening off secures.",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What heading does the Mary Frances book give its needle method for ends?",
            options: ["How to Fasten Off Ends in Crochet", "To Join Ends of Yarn in Crocheting", "To Finish the Doll's Scarf", "To Hide Ends of Yarn in Crochet Work"],
            correctIndex: 1,
            explanation: "Under \"To Join Ends of Yarn in Crocheting\": \"When the work is finished, thread the ends of yarn into a long-eyed 'crewel' or darning needle, and run the ends back into the work\" (Fryer, 1918, p. 76).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "On which page does the Mary Frances cape give its step for loose ends?",
            options: ["p. 69", "p. 148", "p. 238", "p. 206"],
            correctIndex: 2,
            explanation: "\"To fasten the loose ends of wool, thread them into a long-eyed needle and run the ends back into the work\" (p. 238).",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What does lesson 21 say the record leaves open about running ends in?",
            options: ["Whether to use a needle", "Whether to run them in at all", "How far, and along which path", "When the work must be finished"],
            correctIndex: 2,
            explanation: "Fryer says to run the ends back into the work with a long-eyed needle when the work is finished, but not how far or along which path.",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          // ── joining-and-edges ──
          {
            prompt: "What are Dillmont's two ways of joining counterpane squares?",
            options: ["Knotted or glued along the edges", "Woven or felted into one piece", "Sewn or crocheted", "Pinned or tied"],
            correctIndex: 2,
            explanation: "\"The separate parts are then either sewn or crocheted together on the wrong side\" (p. 291; the pattern is fig. 478 on p. 290).",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "On which side does Dillmont join counterpane squares?",
            options: ["The right side, for a ridge", "Whichever side faces up", "The edge, seen side-on", "The wrong side"],
            correctIndex: 3,
            explanation: "\"on the wrong side\".",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "How did Lambert say table covers could be made?",
            options: ["In lengths, sewn together", "In one piece on a large frame", "In squares, crocheted together", "In rounds"],
            correctIndex: 0,
            explanation: "They \"may be made in four or six lengths, and afterwards sewn together with wool\" (Lambert, 1847, p. 12).",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "What did Lambert sew table-cover lengths together with?",
            options: ["Silk", "Wool", "Cotton", "Linen"],
            correctIndex: 1,
            explanation: "\"sewn together with wool\".",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "How does the 1918 Handbook's slip-stitch join begin?",
            options: ["Tie a knot in the end of the yarn first", "Chain three first", "Drop the stitch on the needle", "Wrap the yarn twice round the hook"],
            correctIndex: 2,
            explanation: "\"Drop the stitch on the needle, insert hook through the stitch of work to which you wish to join, take up the dropped stitch and pull through\".",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "In the 1918 Handbook's slip-stitch join, where does the hook go after the stitch is dropped?",
            options: ["Back into the dropped stitch itself", "Into the chain space of the row below", "Into the loose yarn tail", "Into the piece you join to"],
            correctIndex: 3,
            explanation: "Through \"the stitch of work to which you wish to join\", then catch the dropped stitch and pull it through.",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "In Riego's 1861 \"To Join\", what do you do first?",
            options: ["Take the hook out", "Wrap the wool twice round the needle", "Chain five and skip one pearl loop", "Tie the wool on"],
            correctIndex: 0,
            explanation: "\"Take the needle out of the loop, put it into the stitch to be joined, and bring the loop through this stitch\".",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "What do Riego's 1861 join and the 1918 Handbook's join show?",
            options: ["Two different moves for two countries", "One move, decades apart", "A move that changed with the hook", "A tatting join"],
            correctIndex: 1,
            explanation: "Fifty-seven years apart, one move: hook out, through the piece you are joining to, catch the loop, pull through.",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "For a chair-back of separate pieces, what does Dillmont draw first?",
            options: ["A chart of filled and open squares", "A circle on the chair seat", "A square on paper", "A grid of dots"],
            correctIndex: 2,
            explanation: "\"draw a square the size of the work on a piece of thick paper or waxcloth\" (p. 316, fig. 485 on p. 317).",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "How are the chair-back pieces laid on Dillmont's paper?",
            options: ["Face up", "Edge to edge, upright", "Overlapping by a stitch", "Face down"],
            correctIndex: 3,
            explanation: "\"sew the separate pieces of crochet upon it, face downwards, in their proper places\".",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "On which side are the chair-back's joining trebles worked?",
            options: ["The wrong side", "The right side, to show", "Both sides, in turn", "Neither; they are sewn"],
            correctIndex: 0,
            explanation: "\"make the trebles on the wrong side of the work.\"",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "What does Dillmont's paper do while the chair-back is joined?",
            options: ["Sets the gauge for every single square", "Holds each piece in place", "Shows the stitch counts for each row", "Stiffens the work"],
            correctIndex: 1,
            explanation: "It holds every piece in its proper place while the joining stitches go in.",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "Lesson 22 says Dillmont's paper for joining is the same idea as what?",
            options: ["Riego's twelve pattern charts of 1846", "Dillmont's square chart for filet work", "Lambert's paper pattern", "Priscilla's sample strip for star stitch"],
            correctIndex: 2,
            explanation: "Lambert's paper pattern for shaping, from lesson 13.",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "How does Dillmont make her small chain picot?",
            options: ["3 chain, then a slip stitch in the third", "7 chain, joined", "5 chain, 1 treble in the last of them", "5 chain, 1 plain in the first"],
            correctIndex: 3,
            explanation: "\"For the small chain picots, make: 5 chain and 1 plain stitch on the first of these 5 stitches\" (p. 237).",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "What is Dillmont's chain picot in US terms?",
            options: ["Chain 5, sc in the first chain", "Chain 3, sl st in the third", "Chain 7, join into a ring with a slip stitch", "Chain 5, then a treble in the last chain"],
            correctIndex: 0,
            explanation: "Her plain stitch is the US single crochet: chain 5 and sc into the first of those chains.",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "In Riego's 1861 book, what is the crochet worked onto?",
            options: ["Linen edges", "Tatted stars", "Knitted cuffs and boots", "A paper pattern"],
            correctIndex: 1,
            explanation: "Its crochet is loops of chain round tatted stars, so it starts on work already made.",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "How does Riego's 1861 \"To Commence\" in crochet begin?",
            options: ["A slip knot tied apart and then slid onto the hook", "Three chains made first, then joined to a pearl", "Hook in, leave an end, pull a loop", "A knot tied round the stitch with both of the ends"],
            correctIndex: 2,
            explanation: "\"Put the needle into a stitch or pearl loop, and, leaving an end, bring the wool through in a loop.\"",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "On which page is Dillmont's fig. 485, the chair-back, printed?",
            options: ["p. 316", "p. 291", "p. 317", "p. 290"],
            correctIndex: 2,
            explanation: "The joining instruction is on p. 316; the figure itself is printed on p. 317.",
            sourceLessonSlug: "joining-and-edges",
          },
          // ── care-and-blocking ──
          {
            prompt: "What does Dillmont's crochet chapter say about care?",
            options: ["Starch every piece after washing", "Iron each piece on the right side", "Never wash it", "Choose washable materials"],
            correctIndex: 3,
            explanation: "It touches care by pointing to washable materials for \"things that require frequent washing\" (p. 241).",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "For what does Dillmont point to washable materials?",
            options: ["Things washed often", "Things kept under glass for display", "Things made for the London trade", "Silk purses"],
            correctIndex: 0,
            explanation: "\"things that require frequent washing\".",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "Which project does lesson 23 name when it says to choose yarn for washing?",
            options: ["The hyperbolic plane model", "The washcloth", "The 1918 Tam-based hat", "The coaster"],
            correctIndex: 1,
            explanation: "A washcloth will be washed often, so choose its yarn for that.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "Is there a blocking instruction in Dillmont's crochet chapter?",
            options: ["Yes, on p. 223 with fastening off", "Yes, on p. 241", "No, none was found", "Yes, on p. 291 with joining"],
            correctIndex: 2,
            explanation: "It has no blocking, starching or pressing instruction; it was searched for starch, block, iron, press and damp.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "Does Beeton's crochet section give a blocking instruction?",
            options: ["Yes, on p. 268", "Yes, with her ribbed stitch", "Yes, with the foundation chain", "No, it has none"],
            correctIndex: 3,
            explanation: "Beeton's crochet section has no blocking instruction either.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "What is the 1918 Handbook's only pressing instruction written for?",
            options: ["A knitted coat", "A crocheted Tam-o'-Shanter", "A crochet button cover", "A crochet table cover"],
            correctIndex: 0,
            explanation: "It is for a knitted coat, not for crochet.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "In the 1918 Handbook's knitted-coat instruction, what covers the work before pressing?",
            options: ["A sheet of thick paper", "A damp cloth", "A layer of dry straw", "A starched linen napkin"],
            correctIndex: 1,
            explanation: "\"cover with a damp cloth and press with a fairly hot iron until the cloth is dry.\"",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "Does this course tell you the knitted-coat method suits your crochet?",
            options: ["Yes, for wool crochet only", "Yes, for every crochet piece", "No, it will not", "Yes, if cotton"],
            correctIndex: 2,
            explanation: "It is a real period method, written for knitting, and the course will not tell you it is right for crochet.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "Where are Dillmont's general lace-finishing pages?",
            options: ["pp. 221-324, the crochet chapter", "p. 521", "p. 291, with counterpanes", "pp. 565-568"],
            correctIndex: 3,
            explanation: "They sit outside her crochet chapter, on pp. 565-568.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "Why does this course not teach from Dillmont's lace-finishing pages?",
            options: ["They never mention crochet", "They are about knitting, not lace", "They were removed from the edition", "They need a licence before quoting"],
            correctIndex: 0,
            explanation: "Pp. 565-568 stiffen, iron and pin out lace and never mention crochet, so the course does not present them as crochet instructions.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "If a pattern you follow gives blocking instructions, what does lesson 23 say?",
            options: ["Ignore them; no source supports it", "Follow the pattern", "Use the knitted-coat method instead", "Ask the council"],
            correctIndex: 1,
            explanation: "Follow the pattern. If it gives none, the course suggests testing on your swatch first.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "Where should you try an unsourced finishing method first?",
            options: ["On the finished piece's back", "On a different yarn entirely", "On your swatch", "The first row"],
            correctIndex: 2,
            explanation: "Try it on your swatch and see what the yarn does.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "What are Dillmont's finishing pages, pp. 565-568, written for?",
            options: ["Crochet only", "Knitted coats", "Lace, not crochet", "Tunisian crochet"],
            correctIndex: 2,
            explanation: "They stiffen, iron and pin out lace, and never mention crochet.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "What does lesson 23 call thinness in the record?",
            options: ["A gap to fill from memory", "A reason to skip the topic", "An error in the sources", "A finding"],
            correctIndex: 3,
            explanation: "Thinness is a finding. A confident paragraph filling the gap would teach something no source here supports.",
            sourceLessonSlug: "care-and-blocking",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7 · Where crochet came from, as the record shows it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "before-the-word",
      title: "24 · Before the word: chains in the air, tambour, and flat hooks",
      section: "Section 7 · Where crochet came from, as the record shows it",
      recallContent: [
        {
          prompt: "Which source in this course gives a pressing instruction, and why does the course not apply it to crochet?",
          answer: "The 1918 Handbook, and it was written for a knitted coat. No crochet source in the course gives a blocking instruction.",
        },
        {
          prompt: "Where does care for a crochet piece begin, in Dillmont's crochet chapter?",
          answer: "With the material: choosing washable materials for \"things that require frequent washing\".",
        },
      ],
      body: `Crochet's history is short in print and murky before it. This section follows the record: what a source shows, who reports it, and where the record runs out. Much of it comes from Karp's 2018 paper "Defining Crochet", and much of what Karp reports rests on documents this course has not read. Those are marked as Karp's report.

**Chains in the air, 1653.** Karp writes that "some form of hook was used to make 'chains in the air' in the context of passementerie before the arrival of tambour embroidery. This is explicitly documented in a patent granted to the passementiers in 1653 by Louis XIV" (Karp, 2018, p. 3).

**An older mention, reported.** In an addendum to his postprint, Karp reports that the household accounts of Mary, Queen of Scots, dated 13 February 1567, record "silk thread used for sewing and crochet" (p. 17). That is Karp's report of a document this course has not seen.

**Tambour.** "In the early 1760s, a technique for the rapid production of chain-stitch embroidery using a small hooked needle was introduced into Europe. This is known as tambour embroidery, and commonly taken to be the direct precursor of crochet" (p. 3). Dillmont, describing tambour work, put the relationship more bluntly, and noted that the craft was coming back: tambouring, "which is in point of fact merely a form of crochet, has lately been revived". Its loops are "made with a small hook, called a tambour needle", and the work "must be mounted on a frame" (Dillmont, n.d., pp. 521-522, figs. 842-845).

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419364/witus/courses/crochet/crochet/dillmont-fig844-position-of-the-hands-in-tambouring.jpg ||| An engraving of tambour work. A round embroidery frame holding stretched fabric is clamped to the edge of a table by a screw clamp, whose pear-shaped handle hangs below. A hand in a ruffled cuff reaches down from the upper right and holds a fine needle upright in the fabric, its forefinger capped with a short metal sleeve pressed against the cloth. Beside it is a partly worked band of scrolling pattern, with fainter drawn lines around it. A second arm comes up from beneath the frame at the lower right, its hand hidden under the fabric, with a thread hanging below. ||| Dillmont's figure 844, "Position of the hands in tambouring" (p. 522). This is the tambour embroidery that Karp calls "commonly taken to be the direct precursor of crochet". In Dillmont's words, "The loops which are made with a small hook, called a tambour needle, form a fine chain stitch", and the work "must be mounted on a frame". ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Miscellaneous Fancy Work", p. 522, Fig. 844, Position of the hands in tambouring. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 844. Position of the hands in tambouring.jpg (the same engraving is 857.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._844._Position_of_the_hands_in_tambouring.jpg

**The one Chinese link in the record.** Karp quotes Saint-Aubin, writing in 1770 about chain-stitch embroidery: "Since a new technique was brought to us from China nearly a decade ago, which provides correct results six times more rapidly, we abandoned the earlier mode of operation" (p. 9). Note what that sentence is about: tambour embroidery, not crochet.

**Flat hooks.** Karp reports flat, improvised hooks: an illustration from 1785 of soldiers using "a bent nail as a hook", and a Leipzig account from 1800 of shoe uppers knit "with a hook that was commonly made from the handle of a spoon" (pp. 5-6).

**What has survived.** Karp writes that there is "only one historiographically rigorous monograph", by Paludan, and reports its conclusion that "no material evidence of crochet has been found pre-dating 1800" (p. 2). Karp also reports pieces that would push that date back if their dating holds, among them an 18th-century English cap at the V&A, of which he writes, "If correctly dated, this cap is the earliest known instantiation of solid work crochet" (p. 16, note 47). The "if" is his, and it matters.

:::reveal What does Karp say the 1653 patent documents? ||| That some form of hook was used to make "chains in the air" in passementerie, before tambour embroidery arrived.

:::reveal Is Saint-Aubin's 1770 remark about China evidence that crochet came from China? ||| No. It is about tambour embroidery, a chain-stitch technique, not crochet.

## Sources
${src(KARP, `postprint p. 2 (Paludan); p. 3 (1653 patent; tambour, early 1760s); pp. 5-6 (flat hooks, 1785 and 1800); p. 9 (Saint-Aubin, 1770); p. 16, note 47 (the cap); p. 17, Addenda (1567).`)}
${src(DILLMONT, `"Tambour Work", pp. 521-522 (fig. 844 is on p. 522), figs. 842-845.`)}`,
    },
    {
      slug: "shepherds-knitting",
      title: "25 · Shepherd's knitting, and a memoir that is not a diary",
      section: "Section 7 · Where crochet came from, as the record shows it",
      recallContent: [
        {
          prompt: "What did Dillmont say tambouring is \"in point of fact\"?",
          answer: "\"merely a form of crochet\": fine chain stitch made with a small hook, on work mounted in a frame.",
        },
        {
          prompt: "What did Paludan conclude about material evidence of crochet, as Karp summarises it?",
          answer: "That no material evidence of crochet has been found from before 1800.",
        },
      ],
      body: `Before "crochet" was the common word in English, one stitch had another name: shepherd's knitting.

**The memoir.** Elizabeth Grant of Rothiemurchus describes a nightcap "made by his industrious wife in a stitch she called shepherd's knitting; it was done with a little hook which she manufactured for herself out of the tooth of an old tortoise-shell comb, and she used to go on looping her home-spun wool as quick as fingers could move, making not only caps, but drawers and waistcoats for winter wear" (Grant, 1898, p. 182). The page's running head is "INVERDRUIE 1812-13".

**When it was written.** This is where reading carefully pays. The running head dates the events to 1812-13. It does not date the writing. The title page names the author "Elizabeth Grant of Rothiemurchus, afterwards Mrs. Smith of Baltiboys", which is why the preface calls her Mrs. Smith. The preface says: "Mrs. Smith began writing her recollections in 1845 ... and concluded the portion here printed in 1867." It adds: "That they should contain some errors and inaccuracies is natural in the circumstances." The book was published in 1898. So the passage is a memory of 1812-13, written down between 1845 and 1867, and printed in 1898.

Even careful scholars slip here. Karp calls the passage "a journal entry from 1812" (Karp, 2018, p. 7). The memoir's own preface says otherwise. A memory written down thirty or more years later is still good evidence, but it is evidence of a different kind from a diary kept at the time, and the difference is worth stating.

**What shepherd's knitting was.** Karp identifies it: Riego's 1846 book "includes a section headed 'Shepherd or Single Crochet' that describes a slip stitch. It is clear from this and other early British publications that what they called shepherd's knitting is now generically termed slip-stitch crochet" (p. 5). Riego's own heading is there to check: "Shepherd or Single Crochet", "usually worked round, for Cuffs, Muffatees, Boots, &c." (Riego de la Branchardière, 1846, p. 57). Karp also reports an 1856 handbook saying, "This kind of work, which has lately become fashionable under its new name, was formerly called 'Shepherd's Knitting'" (p. 2), and that Riego's 1848 *Crochet Book, Second Series* defines "Single Crochet, or Shepherd's Knitting" (p. 17). Those two are Karp's reports.

**The Scottish story, in Lambert's words.** Lambert's 1847 introduction gives crochet a Scottish beginning: "a species of knitting originally practised by the peasants in Scotland, with a small hooked needle called a shepherd's hook" (Lambert, 1847, p. 9). That is her account, printed in the 1840s. Read it beside Grant: two writers of the same decades connecting the stitch with Scotland, one from memory and one in an introduction.

:::reveal When was Grant's "shepherd's knitting" passage written, and when did the events happen? ||| Written between 1845 and 1867, about 1812-13, and published in 1898.

:::reveal What is shepherd's knitting called today, according to Karp? ||| Slip-stitch crochet.

## Sources
${src(GRANT, `printed p. 182 (scan leaf 204), running head "INVERDRUIE 1812-13"; the Preface.`)}
${src(KARP, `postprint p. 2 (the 1856 handbook); p. 5 (Riego and shepherd's knitting); p. 7 ("a journal entry from 1812"); p. 17, Addenda (Riego 1848).`)}
${src(RIEGO_1846, `p. 57, "Shepherd or Single Crochet".`)}
${src(LAMBERT, `pp. 9-10, Introduction.`)}`,
    },
    {
      slug: "crochet-in-print",
      title: "26 · Crochet in print: Penélopé, Gaugain, Riego and Lambert",
      section: "Section 7 · Where crochet came from, as the record shows it",
      recallContent: [
        {
          prompt: "Why is Grant's memoir not \"a journal entry from 1812\"?",
          answer: "Its own preface says she wrote it between 1845 and 1867. It records events of 1812-13 from memory, and was published in 1898.",
        },
        {
          prompt: "Which 1846 heading does Karp use to identify shepherd's knitting as slip-stitch crochet?",
          answer: "Riego's \"Shepherd or Single Crochet\", which describes a slip stitch.",
        },
      ],
      body: `**The oldest printed instructions found so far.** Karp: "The earliest known description of what is explicitly labelled as crochet in the current sense ... is found in a series of three Dutch crochet instructions from 1823 in the monthly periodical Penélopé. The tambour needle is the only tool prescribed" (Karp, 2018, p. 10).

The KB, the national library of the Netherlands, holds the magazine and dates it more cautiously. *Penélopé* "was published between 1821 and 1835 in separate instalments", and the page it shows is "detail from page 93. *Penélopé*, volume II (1822-1823)". The instruction tells the reader to use "a tambour needle, with a hook at the front, which is screwed into a case" (KB, n.d.). A plate "after page 72" shows five purses, "of which E and F are crocheted". So: a volume dated 1822-1823, page 93, which Karp dates to 1823. Karp also reports that an 1833 volume of *Penélopé* shows a treble crochet, in Karp's UK terms (a US double crochet), used as a "rosette stitch" in filet crochet (p. 10).

**The word in English print.** Karp reports that the first use of "crochet" for the craft "yet noted in British publication" is a French-language purse instruction in an English compilation of 1837, and that "The first crochet instructions in the latter language were published by Jane Gaugain in 1840" (p. 2). Gaugain's book, printed in Edinburgh, heads its section "TAMBOUR, OR CROTCHET", and its first entry still uses the tambour name: "SINGLE TAMBOUR, OR CHAIN STITCH. This is worked by drawing one loop through the other; it is seldom used save for open purses, and sometimes for muffettees, shoes, &c." (Gaugain, 1840, p. 189).

**One stitch, renamed in six years.** Karp: "Gaugain describes a Plain French Tambour or Double Tambour in 1840 that Riego calls a Plain, Double or French Crochet in 1846" (p. 9). Gaugain's own words: "insert the needle in the first loop, and catch the silk from behind; pull it through the loop. You have now 2 loops on the needle, then catch the thread, and pull it through the two loops; this forms one stitch" (p. 190). That is today's US single crochet.

**The hook changes too.** "The ivory hook is first mentioned by Gaugain in 1840", and the round, gently tapered hook "appears to have been added to the crocheter's toolbox at some time between 1833 and 1840". "Tapered bone hooks remained in commercial production until the Second World War" (Karp, 2018, p. 12).

**Suddenly everywhere.** Karp quotes Lambert in 1842: "Crochet work, although long known and practised, did not attract particular attention until within the last four years" (p. 2). Her 1847 New York printing says crochet "has, within the last seven years, obtained the preference over all other ornamental works of a similar nature" (Lambert, 1847, p. 9).

**Who claimed it.** Lambert's next sentences: "This art has attained its highest degree of perfection in England, whence it has been transplanted to France and Germany, and both these countries, although unjustifiably, have claimed the invention" (pp. 9-10). Her preface says a German translation "has excited some attention, even in Germany, a country which has laid claim to the invention of the art" (p. 4). That is the claim and the counterclaim, in one writer's view. It is not evidence of where crochet began, and the passage offers none.

**Riego's promise.** Riego's 1846 preface says that "as all the receipts have been tried, she can with confidence answer for their accuracy" (Riego de la Branchardière, 1846). She was promising that her patterns worked as printed.

:::reveal Where is the oldest printed crochet instruction found so far, and what tool does it name? ||| In the Dutch magazine Penélopé, volume II (1822-1823), p. 93. The tambour needle is the only tool.

:::reveal Who published the first crochet instructions in English, and when? ||| Jane Gaugain, in 1840, under the heading "TAMBOUR, OR CROTCHET".

## Sources
${src(KARP, `postprint p. 2 (1837; Gaugain 1840; Lambert 1842); p. 9 (Gaugain and Riego); p. 10 (Penélopé); p. 12 (hooks).`)}
${src(KB, `section "The oldest crochet pattern?".`)}
${src(GAUGAIN, `title page; unnumbered section-title page "TAMBOUR, OR CROTCHET." before p. 189 (PDF p. 191; also in the contents, p. 8, PDF p. 12); pp. 189-191 (PDF pp. 193-195).`)}
${src(LAMBERT, `p. 4, Preface; pp. 9-10, Introduction.`)}
${src(RIEGO_1846, `title page and Preface.`)}`,
    },
    {
      slug: "irish-crochet-and-the-famine",
      title: "27 · Irish crochet and the famine: what is documented",
      section: "Section 7 · Where crochet came from, as the record shows it",
      recallContent: [
        {
          prompt: "What does Lambert say France and Germany did, and how does she judge it?",
          answer: "Both claimed the invention of crochet, \"although unjustifiably\", in her view; she says the art reached its highest perfection in England.",
        },
        {
          prompt: "What did Gaugain call the stitch Riego later called \"Plain, Double or French Crochet\"?",
          answer: "Plain French Tambour, or double tambour.",
        },
      ],
      body: `The source for this lesson is a catalogue printed in London in 1883 for an exhibition at the Mansion House, *Irish Lace: A History of the Industry*. It is careful to say what it does not know.

**Before the famine: a convent school, 1845.** The catalogue traces Cork crochet to "The nuns of the Ursuline Convent at Blachrock [sic], Co. Cork", who "wisely added industrial training to the education of those who came to their exterior day school. It is on record that in the year 1845 they received about ninety pounds on the work they had taught their scholars to do" (*Irish Lace*, 1883, p. 5). The place is Blackrock; the catalogue prints "Blachrock". It says the industry then spread to "almost every convent" and "did much to mitigate the effects of famine".

**Nobody knows who started it.** The same page: "Whoever suggested the tambour needle, for ladies to amuse themselves in producing crochet work, at the same time indirectly conferred a great boon on the poor." And: "It is not remembered into whose hands it first came, or in what spot it commenced its beneficent career ... Evidently it was known before the famine, but the famine brought out and proved its worth" (p. 5). The catalogue names no inventor of Irish crochet.

**The famine.** "The failure of the potato crop in 1846 stirred the entire population to think of industry as the only legitimate means of relief. Lace-making was only one of many forms of labour that the benevolent adopted." And: "With the exception of Carrickmacross and Limerick, all other existing lace-industries in Ireland arose out of the famine years of 1846-7-8" (p. 4).

**Teaching crochet as relief, from 1847.** "Previous to 1847, Mrs. W. C. Roberts, of Thornton, Co. Kildare, greatly assisted the poor in her neighbourhood by teaching them to knit woollen jackets. In that year of famine the orders failed, and crochet was suggested ... Every one thus personally taught by Mrs. Roberts was required to teach three others, and so on, until hundreds were taught." It adds that "the distress at that time was so great that boys willingly learned to do crochet work" (p. 6). One of her teachers went, "on the application of Mrs. Hand, to Clones, Co. Monaghan", where "To its Rectory, for miles round, came the poor to learn crochet" (p. 7).

**The trade.** Crochet "was soon introduced to the London trade", and "Its productions formed a conspicuous element of the great exhibition of 1851." The catalogue names "Plain Crochet" and "Lace Crochet", and a plate shows both from Cork. It records a collar order placed "at 12/6 per doz." being cut to "2/6" (p. 6). It lists the places the work spread: "New Ross, Thomastown, Castleboro', Thornton, Dungiven, and Carndough."

**What the record does not support.** It does not name an inventor. It does not mention Riego, and stories that credit her with inventing Irish crochet get no support from it. It does not say convents invented crochet: it says one convent school taught it by 1845 and was paid for the work. Its chapter also quotes period contempt for the poor it describes; this course does not repeat it.

:::reveal What is the earliest dated fact the 1883 catalogue gives for Irish crochet? ||| In 1845 the Ursuline nuns at Blackrock, Co. Cork, received about ninety pounds for the work they had taught the pupils of their day school.

:::reveal What was Mrs. Roberts's rule for the people she taught crochet in 1847? ||| Each person she taught had to teach three others.

## Sources
${src(IRISH_LACE, `printed p. 4, the famine passage (IIIF image n18); printed p. 5, "Cork" (IIIF image n27); printed p. 6, "Cork" and "Clones" (IIIF image n28); printed p. 7, the Clones passage (IIIF image n33); plate "CORK. 4" (IIIF image n25).`)}`,
    },
    {
      slug: "folklore-testimony-and-a-survey",
      title: "28 · Folklore, testimony, and one survey",
      section: "Section 7 · Where crochet came from, as the record shows it",
      recallContent: [
        {
          prompt: "Does the 1883 Irish Lace catalogue name an inventor of Irish crochet?",
          answer: "No. It says \"It is not remembered into whose hands it first came\", and does not mention Riego.",
        },
        {
          prompt: "When is teaching crochet as famine relief documented from, and by whom?",
          answer: "From 1847, by Mrs. W. C. Roberts of Thornton, Co. Kildare, whose pupils each had to teach three others.",
        },
      ],
      body: `**Folklore, named as folklore.** You will meet origin stories for crochet that put its birth in Arabia, in China, in South America, or in a Swedish magazine of 1819. None of the sources this course was built from supports any of them.

- The only Chinese link in the record is Saint-Aubin's 1770 remark, and it is about tambour embroidery, not crochet (lesson 24).
- For Sweden, the record holds a different report: Karp reports from Sweden "a neckpiece in two-colour tapestry crochet with the date 1812 worked integrally into the fabric" (Karp, 2018, p. 10). That is his report of an object this course has not seen, and it is not a magazine of 1819.
- "Riego invented Irish crochet": the 1883 history of the industry does not mention her (lesson 27).

A good rule for any origin story: ask what document it rests on. If the answer is another retelling, it is folklore until someone finds the document.

**Testimony from 1847.** Lambert made two claims about who crochet suits. First, "It is particularly adapted for making articles for charitable purposes; hence, the instruction of children in *blind* schools, in this easy and useful art, is well worthy the attention of philanthropists" (Lambert, 1847, pp. 10-11). Second, that crochet in fleecy wool with an ivory needle "may be readily learned, and has, therefore, been much practised, both by invalids, and by persons whose sight either needs relief, or has become impaired" (p. 12). These are one writer's views in a pattern book's introduction. They are period testimony, not evidence. The *Blind and Low-Vision America* course on Learn.WitUS, in its lesson "7 · The residential school, and low expectation as a curriculum", looks at what it meant when handwork was the curriculum chosen for blind children.

**One modern survey, and its limits.** Burns and Van Der Meer ran an online survey of crocheters, "promoted through social media, over a 6-week period, resulting in valid responses from 8391 individuals" (Burns & Van Der Meer, 2021). It was published online in 2020 and in print in 2021. "Most respondents were female (99.1%)". Respondents "reported that crochet made them feel calmer (89.5%), happier (82%) and more useful (74.7%)".

Read that carefully. It is what respondents reported. The people who answered chose to answer a survey about crochet that reached them through social media, so they are not a sample of all crocheters, let alone of everyone. Nobody was compared with people who do not crochet. The authors conclude that crochet "can play a role in promoting positive wellbeing"; that is their inference from this sample. It is a reason to ask a better question, not a finding that crochet makes people calmer.

**Learning together.** Crochet has been taught person to person at least since the Ursuline day school of 1845 and Mrs. Roberts's teach-three rule of 1847. For a study of how people learn through shared interests online, see *Affinity Online* (Ito et al., 2018), which is free to read under an open licence.

:::reveal Which origin stories for crochet does this course name as folklore? ||| Arabian, Chinese and South American origins, and a Swedish magazine of 1819. None of the sources this course was built from supports any of them.

:::reveal Burns and Van Der Meer report that 89.5% of respondents said crochet made them feel calmer. Name two limits of that finding. ||| Any two: the sample was self-selected through social media; the answers were self-reported; 99.1% were female; there was no comparison group.

## Sources
${src(KARP, `postprint p. 9 (Saint-Aubin); p. 10 (the 1812 neckpiece).`)}
${src(LAMBERT, `pp. 10-11 (blind schools); p. 12 (invalids and failing sight).`)}
${src(BURNS, `the abstract.`)}
${src(ITO, `the whole book, open access under CC BY-NC-ND 4.0 (no single chapter is cited).`)}`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Where crochet came from",
      section: "Section 7 · Where crochet came from, as the record shows it",
      body: "A graded check on the record of crochet's history: hooks before the word, shepherd's knitting, crochet in print, Irish crochet, and what is folklore. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // ── before-the-word ──
          {
            prompt: "What does Karp say the 1653 patent documents?",
            options: ["Chains in the air", "A steel hook", "A Dutch magazine's crochet pattern", "Tambour embroidery reaching Europe"],
            correctIndex: 0,
            explanation: "\"some form of hook was used to make 'chains in the air' in the context of passementerie before the arrival of tambour embroidery\" (Karp, p. 3).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "Who granted the 1653 patent, as Karp reports?",
            options: ["Mary, Queen of Scots", "Louis XIV", "Penélopé", "A guild of Irish lace makers"],
            correctIndex: 1,
            explanation: "\"a patent granted to the passementiers in 1653 by Louis XIV\".",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "To whom was the 1653 patent granted?",
            options: ["The makers of tambour needles", "The shepherds of the Highlands", "The passementiers", "The Ursuline nuns of Cork"],
            correctIndex: 2,
            explanation: "To the passementiers, by Louis XIV (Karp, p. 3).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What does Karp report from the household accounts of Mary, Queen of Scots?",
            options: ["A tortoise-shell hook", "A crocheted collar sent to the French court", "A pattern book of Dutch purses for the queen", "Thread for sewing and crochet"],
            correctIndex: 3,
            explanation: "\"silk thread used for sewing and crochet\", 13 February 1567, in the addendum to Karp's postprint (p. 17).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What date does Karp give for the household accounts of Mary, Queen of Scots?",
            options: ["13 February 1567", "13 February 1653, with the patent", "June 1997, at a workshop", "1823, with Penélopé"],
            correctIndex: 0,
            explanation: "13 February 1567.",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "Has this course read the 1567 accounts itself?",
            options: ["Yes, in the KB's collection", "No; it is Karp's report", "Yes, on archive.org", "Yes, quoted in the 1883 catalogue"],
            correctIndex: 1,
            explanation: "It is Karp's report of a document this course has not seen, and the lesson says so.",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "When does Karp say tambour embroidery was introduced into Europe?",
            options: ["1653, with the passementiers", "1823", "The early 1760s", "1840, with Gaugain's book"],
            correctIndex: 2,
            explanation: "\"In the early 1760s, a technique for the rapid production of chain-stitch embroidery using a small hooked needle was introduced into Europe.\"",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What is tambour embroidery \"commonly taken to be\", per Karp?",
            options: ["A kind of Irish lace from Cork", "A knitting stitch from Scotland", "A Dutch name for the chain stitch", "Crochet's precursor"],
            correctIndex: 3,
            explanation: "\"commonly taken to be the direct precursor of crochet\" (p. 3).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What did Dillmont say tambouring is \"in point of fact\"?",
            options: ["Merely a form of crochet", "A kind of knitting done on a frame", "A Chinese embroidery unrelated to crochet", "A kind of netting"],
            correctIndex: 0,
            explanation: "\"tambouring, which is in point of fact merely a form of crochet, has lately been revived\" (p. 521).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What must tambour work be mounted on, per Dillmont?",
            options: ["A long straight hook with a knob", "A frame", "A pair of knitting needles", "A forked steel hairpin"],
            correctIndex: 1,
            explanation: "The work \"must be mounted on a frame\" (p. 521).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What did Dillmont say had happened to tambouring?",
            options: ["It had died out with the French court", "It had been banned by the passementiers", "It had lately been revived", "It had moved to hooks"],
            correctIndex: 2,
            explanation: "\"tambouring ... has lately been revived\" (p. 521).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "Saint-Aubin's 1770 remark about China concerns what?",
            options: ["Crochet as it is worked today", "Irish crochet lace for collars", "Knitting with a bent nail", "Tambour embroidery"],
            correctIndex: 3,
            explanation: "He wrote about chain-stitch embroidery, the tambour technique, not crochet (Karp, p. 9).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "Is Saint-Aubin's remark evidence that crochet came from China?",
            options: ["No, it concerns tambour", "Yes, it names China", "Yes, as Karp concludes", "Yes, for Irish crochet only"],
            correctIndex: 0,
            explanation: "It is about tambour embroidery. It is the only Chinese link in the record, and it is not about crochet.",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What improvised hook does Karp report from an illustration of 1785?",
            options: ["A tortoise-shell comb tooth", "A soldier's bent nail", "A spoon handle", "A tambour needle in a case"],
            correctIndex: 1,
            explanation: "Soldiers using \"a bent nail as a hook\" (Karp, p. 5).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What were Leipzig shoe uppers knit with in 1800, as Karp reports?",
            options: ["A bent nail, like the soldiers'", "An ivory hook, like Gaugain's", "A spoon-handle hook", "A steel hook"],
            correctIndex: 2,
            explanation: "\"with a hook that was commonly made from the handle of a spoon\".",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What did Paludan conclude about material evidence, as Karp reports it?",
            options: ["Pieces survive from 1653 onward", "Plenty survives from the 1500s", "Most is in China", "None found before 1800"],
            correctIndex: 3,
            explanation: "\"no material evidence of crochet has been found pre-dating 1800\" (Karp, p. 2).",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "Karp writes that there is \"only one historiographically rigorous monograph\". By whom?",
            options: ["Paludan", "Emery", "Henderson and Taimina", "Lambert, in 1847"],
            correctIndex: 0,
            explanation: "Paludan's study, as Karp reports it.",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "Karp's note on the V&A cap says \"If correctly dated\". What does the \"if\" signal?",
            options: ["The cap has been lost since 1883", "An open date", "A forgery", "The cap was made in China"],
            correctIndex: 1,
            explanation: "The date is not settled. The \"if\" is Karp's, and it matters.",
            sourceLessonSlug: "before-the-word",
          },
          // ── shepherds-knitting ──
          {
            prompt: "In Grant's memoir, what stitch was the nightcap made in?",
            options: ["Plain French tambour, Gaugain's name", "Irish crochet", "Shepherd's knitting", "Tunisian crochet on a long hook"],
            correctIndex: 2,
            explanation: "\"in a stitch she called shepherd's knitting\" (Grant, 1898, p. 182).",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What was the hook in Grant's memoir made from?",
            options: ["A bent nail from a soldier's kit", "The handle of a pewter spoon", "Polished ivory from Edinburgh", "A comb's tooth"],
            correctIndex: 3,
            explanation: "\"a little hook which she manufactured for herself out of the tooth of an old tortoise-shell comb\".",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "Besides caps, what does Grant say were made in shepherd's knitting?",
            options: ["Drawers and waistcoats", "Purses and collars to sell in town", "Lace collars for the London trade", "Cuffs and boots"],
            correctIndex: 0,
            explanation: "\"making not only caps, but drawers and waistcoats for winter wear\".",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What is the running head on Grant's p. 182?",
            options: ["ROTHIEMURCHUS 1845, the writing", "INVERDRUIE 1812-13", "BALTIBOYS 1867, the finish", "EDINBURGH 1840, with Gaugain"],
            correctIndex: 1,
            explanation: "\"INVERDRUIE 1812-13\": it dates the events, not the writing.",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What does the running head on Grant's p. 182 date?",
            options: ["The writing of the passage", "The printing of the book", "The events", "The scan"],
            correctIndex: 2,
            explanation: "It dates the events to 1812-13. The preface dates the writing.",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "When did Mrs. Smith begin writing her recollections?",
            options: ["1812", "1867", "1898", "1845"],
            correctIndex: 3,
            explanation: "\"Mrs. Smith began writing her recollections in 1845\". Mrs. Smith is Grant: the title page reads \"afterwards Mrs. Smith of Baltiboys\".",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "When did Mrs. Smith conclude the printed portion of her recollections?",
            options: ["1867", "1845", "1812", "1898"],
            correctIndex: 0,
            explanation: "\"and concluded the portion here printed in 1867.\"",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "In what year was the edition of the memoir read for this course published?",
            options: ["1812", "1898", "1845", "1867"],
            correctIndex: 1,
            explanation: "The third impression, 1898.",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What did Karp call the Grant passage?",
            options: ["A memoir written in the 1860s", "A letter", "A journal entry", "A note in the 1898 preface"],
            correctIndex: 2,
            explanation: "Karp calls it \"a journal entry from 1812\" (p. 7). The memoir's preface says otherwise.",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What contradicts Karp's description of the passage?",
            options: ["A letter from Lambert in 1847", "Gaugain's 1840 heading", "Riego's 1846 preface", "The preface to Grant's book"],
            correctIndex: 3,
            explanation: "The preface to Grant's memoir says it was written between 1845 and 1867, not in 1812.",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What does the memoir's preface say about errors?",
            options: ["Some are natural", "There are none", "All were corrected in 1898", "They are marked with a star"],
            correctIndex: 0,
            explanation: "\"That they should contain some errors and inaccuracies is natural in the circumstances.\"",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "Is a memory written decades later still evidence, per lesson 25?",
            options: ["No, it must be thrown out", "Yes, of a different kind", "Only with a diary", "Only for events after 1845"],
            correctIndex: 1,
            explanation: "It is good evidence, but of a different kind from a diary kept at the time.",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What does Karp say shepherd's knitting is now termed?",
            options: ["Tunisian crochet, on a long hook", "Single crochet, in US terms", "Slip-stitch crochet", "Tambour work, on a frame"],
            correctIndex: 2,
            explanation: "\"what they called shepherd's knitting is now generically termed slip-stitch crochet\" (Karp, p. 5).",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "Which 1846 heading does Karp point to?",
            options: ["A Lesson in Crochet, the 1918 heading", "Treble Crochet, as on her page 58", "TAMBOUR, OR CROTCHET, Gaugain's heading", "Shepherd or Single Crochet"],
            correctIndex: 3,
            explanation: "Riego's \"Shepherd or Single Crochet\" describes a slip stitch.",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What did an 1856 handbook say crochet was formerly called, as Karp reports?",
            options: ["Shepherd's Knitting", "French tambour", "Penelope work, after the Dutch magazine", "Irish lace, from the Cork convent"],
            correctIndex: 0,
            explanation: "\"This kind of work, which has lately become fashionable under its new name, was formerly called 'Shepherd's Knitting'\" (Karp, p. 2).",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "In Riego's 1848 Second Series, as Karp reports, single crochet is also called what?",
            options: ["Plain French Tambour, Gaugain's name", "Shepherd's Knitting", "Double tambour, from the purse books", "Rose stitch"],
            correctIndex: 1,
            explanation: "\"Single Crochet, or Shepherd's Knitting\" (Karp, p. 17).",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "Where does Lambert's 1847 introduction say crochet was originally practised?",
            options: ["At the French court of Louis XIV", "In the convents of County Cork", "Among Scottish peasants", "In Leipzig"],
            correctIndex: 2,
            explanation: "\"a species of knitting originally practised by the peasants in Scotland\" (Lambert, p. 9).",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "What did Lambert say the small hooked needle was called?",
            options: ["A tambour needle, as in embroidery", "A Penelope needle, from the magazine", "A Bell gauge, from Riego's book", "A shepherd's hook"],
            correctIndex: 3,
            explanation: "\"with a small hooked needle called a shepherd's hook\".",
            sourceLessonSlug: "shepherds-knitting",
          },
          // ── crochet-in-print ──
          {
            prompt: "Where is the earliest known description of crochet in the current sense, per Karp?",
            options: ["In Penélopé", "In Gaugain's Lady's Assistant", "In Beeton", "In Dillmont's Encyclopedia"],
            correctIndex: 0,
            explanation: "\"a series of three Dutch crochet instructions from 1823 in the monthly periodical Penélopé\" (Karp, p. 10).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "What language were the Penélopé instructions in?",
            options: ["French, like the word crochet", "Dutch", "English, like Gaugain's", "German, as Lambert said"],
            correctIndex: 1,
            explanation: "They are Dutch instructions, in a Dutch monthly.",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "What tool do the Penélopé instructions prescribe?",
            options: ["An ivory hook from Edinburgh", "A long straight Tunisian hook", "A tambour needle", "A bent nail"],
            correctIndex: 2,
            explanation: "\"The tambour needle is the only tool prescribed\" (Karp, p. 10).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "How does the KB date the volume that holds the instructions?",
            options: ["1821", "1833, with the rosette stitch", "1840, the year of Gaugain", "1822-1823"],
            correctIndex: 3,
            explanation: "\"Penélopé, volume II (1822-1823)\". Karp dates the instructions 1823.",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "On which page of its Penélopé volume does the KB show the crochet instruction?",
            options: ["93", "72", "189", "182"],
            correctIndex: 0,
            explanation: "\"detail from page 93\" (KB).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "How does the Penélopé instruction describe the needle?",
            options: ["Long and straight with a knob", "Screwed into a case", "Flat, cut from a spoon handle", "Ivory, polished"],
            correctIndex: 1,
            explanation: "\"a tambour needle, with a hook at the front, which is screwed into a case\".",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "Which purses on the Penélopé plate after page 72 are crocheted?",
            options: ["A and B", "All five", "E and F", "None of them"],
            correctIndex: 2,
            explanation: "Five purses, \"of which E and F are crocheted\" (KB).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "What did an 1833 volume of Penélopé show, as Karp reports?",
            options: ["The first ivory crochet hook", "A slip knot with a photograph", "US and UK names", "A rosette stitch"],
            correctIndex: 3,
            explanation: "A treble crochet in Karp's UK terms (a US double crochet), used as a \"rosette stitch\" in filet crochet (Karp, p. 10).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "In what year does Karp place the first use of \"crochet\" yet noted in British publication?",
            options: ["1837", "1840", "1842", "1870"],
            correctIndex: 0,
            explanation: "A French-language purse instruction in an English compilation of 1837 (Karp, p. 2).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "Who published the first crochet instructions in English?",
            options: ["Riego", "Jane Gaugain", "Lambert, in her 1842 handbook", "Mrs. Beeton, in her 1870 book"],
            correctIndex: 1,
            explanation: "\"The first crochet instructions in the latter language were published by Jane Gaugain in 1840\" (Karp, p. 2).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "In what year did Jane Gaugain publish her crochet instructions?",
            options: ["1823", "1846", "1840", "1870"],
            correctIndex: 2,
            explanation: "1840, in Edinburgh.",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "How does Gaugain head her crochet section?",
            options: ["SHEPHERD OR SINGLE CROCHET, as in Riego", "PLAIN, DOUBLE, OR FRENCH CROCHET", "CROCHET WORK, as in Dillmont", "TAMBOUR, OR CROTCHET"],
            correctIndex: 3,
            explanation: "\"TAMBOUR, OR CROTCHET\", with the tambour name first.",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "Where was Gaugain's book printed?",
            options: ["Edinburgh", "London", "Boston, by Priscilla", "New York, by Peyser"],
            correctIndex: 0,
            explanation: "Its title page reads \"EDINBURGH. 1840.\"",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "Single tambour, Gaugain says, is seldom used save for what?",
            options: ["Bed covers and counterpanes", "Open purses", "Collars for the London trade", "Caps"],
            correctIndex: 1,
            explanation: "\"it is seldom used save for open purses, and sometimes for muffettees, shoes, &c.\" (p. 189).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "Gaugain's double tambour is today's which US stitch?",
            options: ["Double crochet, as its name says", "Slip stitch", "Single crochet", "Treble crochet, as in Riego"],
            correctIndex: 2,
            explanation: "Two loops on the needle, then through both: today's US single crochet.",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "Which hook does Karp say Gaugain first mentions in 1840?",
            options: ["The steel hook with a handle", "The bent-nail hook of soldiers", "The tortoise-shell comb hook", "The ivory hook"],
            correctIndex: 3,
            explanation: "\"The ivory hook is first mentioned by Gaugain in 1840\" (Karp, p. 12).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "When does Karp say the round, gently tapered hook appeared?",
            options: ["Between 1833 and 1840", "Before the 1653 patent was granted", "After 1945", "Between 1567 and 1653, in France"],
            correctIndex: 0,
            explanation: "It \"appears to have been added to the crocheter's toolbox at some time between 1833 and 1840\".",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "Until when were tapered bone hooks in commercial production?",
            options: ["The Irish famine of 1846-7-8", "The Second World War", "The great exhibition of 1851", "1918"],
            correctIndex: 1,
            explanation: "\"Tapered bone hooks remained in commercial production until the Second World War\" (Karp, p. 12).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "In 1842, for how long did Lambert say crochet had attracted particular attention?",
            options: ["Ever since the 1653 patent", "Since around 1800, forty years", "About four years", "Only for one season, that year"],
            correctIndex: 2,
            explanation: "\"did not attract particular attention until within the last four years\" (Lambert, quoted by Karp, p. 2).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "In 1847, what did Lambert say crochet had obtained within the last seven years?",
            options: ["A royal patent from the queen", "School lessons", "A name of its own in French", "The preference"],
            correctIndex: 3,
            explanation: "It \"has, within the last seven years, obtained the preference over all other ornamental works of a similar nature\".",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "Which country does Lambert say brought crochet to its highest perfection?",
            options: ["England", "France", "Germany, which claimed it", "Scotland, where it began"],
            correctIndex: 0,
            explanation: "\"This art has attained its highest degree of perfection in England\" (pp. 9-10).",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "How does Lambert judge France's and Germany's claims to the invention?",
            options: ["Fair", "Unjustified", "Proven by their patents", "Likely, but unrecorded"],
            correctIndex: 1,
            explanation: "\"both these countries, although unjustifiably, have claimed the invention.\" That is her view; the passage offers no evidence.",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "What did Riego's 1846 preface promise about her receipts?",
            options: ["Every stitch had a photograph", "Every pattern was in US terms", "All had been tried", "Sizes in mm"],
            correctIndex: 2,
            explanation: "\"as all the receipts have been tried, she can with confidence answer for their accuracy.\"",
            sourceLessonSlug: "crochet-in-print",
          },
          // ── irish-crochet-and-the-famine ──
          {
            prompt: "What is the source for lesson 27, on Irish crochet and the famine?",
            options: ["A 1912 government report on lace", "Riego's 1846 book on crochet", "Karp's 2018 paper on crochet", "An 1883 Mansion House catalogue"],
            correctIndex: 3,
            explanation: "Irish Lace: A History of the Industry, the catalogue of an 1883 exhibition at the Mansion House.",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "To whom does the catalogue trace Cork crochet?",
            options: ["Ursuline nuns", "Mrs. Roberts of Thornton", "Riego", "Jane Gaugain, of Edinburgh"],
            correctIndex: 0,
            explanation: "\"The nuns of the Ursuline Convent at Blachrock [sic], Co. Cork\" (p. 5).",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "In what kind of school did the Blackrock nuns teach crochet, per the 1883 catalogue?",
            options: ["A boarding school", "A day school", "A blind school", "A night school"],
            correctIndex: 1,
            explanation: "They \"added industrial training to the education of those who came to their exterior day school.\"",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "In which year does the 1883 catalogue record the Blackrock nuns being paid for their pupils' work?",
            options: ["1847", "1851", "1845", "1883"],
            correctIndex: 2,
            explanation: "\"It is on record that in the year 1845 they received about ninety pounds on the work\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "About how much did the Blackrock nuns receive in 1845 for the work they had taught?",
            options: ["Ten pounds", "Twelve and sixpence", "Two thousand pounds", "Ninety pounds"],
            correctIndex: 3,
            explanation: "\"about ninety pounds on the work they had taught their scholars to do\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Does the catalogue name an inventor of Irish crochet?",
            options: ["No, it names none", "Yes, Riego", "Yes, Mrs. Roberts", "Yes, an Ursuline nun"],
            correctIndex: 0,
            explanation: "It names none.",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "What does the 1883 Irish Lace catalogue say about who first had crochet?",
            options: ["It was Mrs. Roberts in 1847", "It is not remembered", "It was the Ursulines in 1845", "A London dealer"],
            correctIndex: 1,
            explanation: "\"It is not remembered into whose hands it first came, or in what spot it commenced its beneficent career\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Was crochet known in Ireland before the famine, per the catalogue?",
            options: ["No, from 1847", "No, it came in 1851", "Evidently, yes", "Not until the 1880s"],
            correctIndex: 2,
            explanation: "\"Evidently it was known before the famine, but the famine brought out and proved its worth\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Which two lace industries does the catalogue except from arising out of the famine years?",
            options: ["Cork and Clones, the two crochet towns", "Thornton and Dungiven", "New Ross and Thomastown, from the same list", "Carrickmacross and Limerick"],
            correctIndex: 3,
            explanation: "\"With the exception of Carrickmacross and Limerick, all other existing lace-industries in Ireland arose out of the famine years of 1846-7-8.\"",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Who taught crochet as famine relief at Thornton from 1847?",
            options: ["Mrs. W. C. Roberts", "Mrs. Hand", "The Ursuline nuns of Blackrock", "Mrs. Beeton, of Paternoster Row"],
            correctIndex: 0,
            explanation: "Mrs. W. C. Roberts, of Thornton, Co. Kildare (p. 6).",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "What had Mrs. Roberts taught before 1847?",
            options: ["Lace-work on a tambour frame", "Knitting jackets", "Netting purses for the London trade", "Spinning flax for the linen mills"],
            correctIndex: 1,
            explanation: "\"teaching them to knit woollen jackets. In that year of famine the orders failed, and crochet was suggested\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "What was Mrs. Roberts's rule for each person she taught?",
            options: ["Pay a shilling a week", "Sell in London", "Teach three others", "Work only at the rectory"],
            correctIndex: 2,
            explanation: "\"Every one thus personally taught by Mrs. Roberts was required to teach three others\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Where did one of the Roberts teachers go at Mrs. Hand's request?",
            options: ["Blackrock, Co. Cork", "Thornton, Co. Kildare", "Tynan", "Clones"],
            correctIndex: 3,
            explanation: "\"on the application of Mrs. Hand, to Clones, Co. Monaghan\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Which exhibition does the catalogue say Irish crochet was conspicuous in?",
            options: ["1851", "1883", "1845", "1867"],
            correctIndex: 0,
            explanation: "\"Its productions formed a conspicuous element of the great exhibition of 1851.\"",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "What happened to a collar order placed \"at 12/6 per doz.\"?",
            options: ["It rose to twenty shillings", "It was cut to 2/6", "It was cancelled in 1851", "No change"],
            correctIndex: 1,
            explanation: "The catalogue records it being cut to \"2/6\" (p. 6).",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Which two kinds of crochet does the catalogue name?",
            options: ["Irish crochet and English crochet", "Tambour crochet and Tunisian", "Plain and Lace", "Filet crochet and star stitch"],
            correctIndex: 2,
            explanation: "\"Plain Crochet\" and \"Lace Crochet\", both shown from Cork on plate \"CORK. 4\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Does the catalogue mention Riego?",
            options: ["Yes, as the inventor", "Yes, in Cork", "Yes, in its preface", "No, it does not"],
            correctIndex: 3,
            explanation: "It does not, so stories crediting her with inventing Irish crochet get no support from it.",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Does the catalogue say convents invented crochet?",
            options: ["No", "Yes, the Ursulines did", "Yes, in Co. Monaghan", "Yes, before 1800"],
            correctIndex: 0,
            explanation: "It says one convent school taught it by 1845 and was paid for the work. That is not invention.",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          // ── folklore-testimony-and-a-survey ──
          {
            prompt: "Which of these origin stories does lesson 28 name as folklore?",
            options: ["Scotland, as Lambert told it", "An Arabian origin", "Holland, from Penélopé's 1823 issue", "Ireland, from the Cork convent"],
            correctIndex: 1,
            explanation: "Arabian, Chinese and South American origins, and a Swedish magazine of 1819: none of the course's sources supports them.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "What does lesson 28 say about a Swedish magazine of 1819?",
            options: ["It holds the oldest pattern", "Karp quotes it on his p. 10", "No source supports it", "The KB holds it"],
            correctIndex: 2,
            explanation: "None of the sources this course was built from supports it.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "What does Karp report from Sweden?",
            options: ["A crochet magazine from 1819", "A bent-nail hook from 1785", "A 1653 patent", "A dated neckpiece"],
            correctIndex: 3,
            explanation: "\"a neckpiece in two-colour tapestry crochet with the date 1812 worked integrally into the fabric\" (p. 10).",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "Where is the date on the Swedish neckpiece Karp reports?",
            options: ["In the fabric", "Stitched on a paper label", "Written in a museum ledger", "Engraved on a hook"],
            correctIndex: 0,
            explanation: "\"worked integrally into the fabric\". It is Karp's report of an object this course has not seen.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "What is lesson 28's rule for any origin story?",
            options: ["Trust it if many sites repeat it", "Ask for the document", "Accept any date", "Prefer the oldest-sounding one"],
            correctIndex: 1,
            explanation: "Ask what document it rests on. If the answer is another retelling, it is folklore until someone finds the document.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "What did Lambert say crochet is particularly adapted for?",
            options: ["Court dress and royal gifts", "Sailors' nets", "Charitable purposes", "Fine lace for export"],
            correctIndex: 2,
            explanation: "\"It is particularly adapted for making articles for charitable purposes\" (p. 10).",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "Teaching crochet in which schools did Lambert call \"well worthy the attention of philanthropists\"?",
            options: ["Girls at the convent day schools", "Army schools", "Shepherds out on the Highlands", "Blind schools"],
            correctIndex: 3,
            explanation: "\"the instruction of children in blind schools, in this easy and useful art, is well worthy the attention of philanthropists.\"",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "Which group did Lambert say had much practised crochet in fleecy wool?",
            options: ["Invalids", "Sailors", "Soldiers in winter camps", "Nuns in convent schools"],
            correctIndex: 0,
            explanation: "\"both by invalids, and by persons whose sight either needs relief, or has become impaired\" (p. 12).",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "How does lesson 28 classify Lambert's remarks?",
            options: ["Clinical evidence of a benefit", "Period testimony", "A controlled trial of 1847", "A survey of her readers"],
            correctIndex: 1,
            explanation: "One writer's views in a pattern book's introduction: period testimony, not evidence.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "Which Learn.WitUS course looks at handwork as the curriculum chosen for blind children?",
            options: ["Knot-Tying & Rope Work, in its fourth lesson", "Making String", "Blind and Low-Vision America", "Keeping a House, on the hazards in a home"],
            correctIndex: 2,
            explanation: "Its lesson \"7 · The residential school, and low expectation as a curriculum\".",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "How was Burns and Van Der Meer's survey promoted?",
            options: ["Through yarn shop flyers", "A census", "Through doctors' surgeries", "Social media"],
            correctIndex: 3,
            explanation: "\"An online survey ... promoted through social media, over a 6-week period\".",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "How many valid responses did the survey have?",
            options: ["8,391", "839", "83,910", "391"],
            correctIndex: 0,
            explanation: "\"valid responses from 8391 individuals\".",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "What share of respondents were female?",
            options: ["50.5%", "99.1%", "74.7%", "89.5%"],
            correctIndex: 1,
            explanation: "\"Most respondents were female (99.1%)\".",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "What share of respondents reported feeling calmer?",
            options: ["99.1%", "82%", "89.5%", "74.7%"],
            correctIndex: 2,
            explanation: "\"crochet made them feel calmer (89.5%), happier (82%) and more useful (74.7%)\".",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "What share reported feeling more useful?",
            options: ["89.5%", "99.1%", "50%", "74.7%"],
            correctIndex: 3,
            explanation: "74.7% said more useful.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "Which of these is a limit of the survey, per lesson 28?",
            options: ["No comparison group", "Too few respondents to count", "Only men", "It was never published"],
            correctIndex: 0,
            explanation: "Nobody was compared with people who do not crochet; the sample was self-selected and the answers self-reported.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "What is the 89.5% figure, as lesson 28 reads it?",
            options: ["Proof crochet causes calm", "Self-reported", "Lab-measured", "A result from a clinical trial"],
            correctIndex: 1,
            explanation: "It is what respondents reported. It is not a finding that crochet makes people calmer.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "Which open-access book does lesson 28 point to on learning through shared interests online?",
            options: ["Defining Crochet, by Karp", "Irish Lace", "Affinity Online", "My Crochet Sampler, of 1847"],
            correctIndex: 2,
            explanation: "Ito et al. (2018), Affinity Online, free to read under an open licence.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 8 · Projects
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "project-washcloth",
      title: "29 · Project 1: a washcloth, in rows",
      section: "Section 8 · Projects",
      recallContent: [
        {
          prompt: "What does Burns and Van Der Meer's survey show, and what does it not show?",
          answer: "It shows what 8,391 self-selected respondents reported (89.5% felt calmer). It does not show that crochet causes calm: there was no comparison group, and 99.1% of respondents were female.",
        },
        {
          prompt: "What should you ask of any origin story for crochet?",
          answer: "What document it rests on. If the answer is another retelling, treat it as folklore.",
        },
      ],
      body: `Four projects close the course, one for each skill: rows, rounds, shaping, and the geometry of increasing. Each one is built from the sources' own instructions. Where the course combines two sources into one project, it says so.

The first is a square of single crochet in rows. It fits the Craft Yarn Council's "Basic" project level: "Projects using basic stitches. May include basic increases and decreases" (Craft Yarn Council, n.d.-e).

**The model.** The method comes from the Mary Frances book's doll's scarf: 7 chain; "Skip 1 chain stitch. Make 6 single crochet stitches"; then "Make 62 rows of single crochet stitches, putting the crochet hook through the 2 threads or loops at the top of each stitch"; and to finish, "Break off the yarn, and fasten the end by making a chain stitch and pulling the yarn all the way through" (Fryer, 1918, p. 69). Your washcloth uses the same method, wider and shorter.

**Yarn.** A washcloth gets washed often, so choose a yarn that washes well. Dillmont gives this rule in her note on materials for Tunisian crochet: "for things that require frequent washing or cleaning, a good washing material should be selected" (Dillmont, n.d., p. 241). The rule is about how the cloth is used, not the stitch, so it holds for this single-crochet cloth too. Take a hook from the range on the yarn's label (lesson 3).

**Steps.**

1. **Swatch.** Work a small square of single crochet and measure how many stitches make 4 inches. Lesson 19.
2. **Decide the width.** Pick the width you want and work out the stitches from your swatch. If your swatch made 12 stitches in 4 inches and you want 8 inches, you need 24 stitches.
3. **Chain one more than that.** Slip knot on the hook (lesson 5), then 25 chains. The chain next to the hook will be skipped (lesson 7).
4. **Row 1.** Single crochet in the 2nd chain from the hook and in each chain across. Count: 24. Leinhauser's rule, lesson 9.
5. **Turn.** Chain 1 and turn. The ch-1 does not count as a stitch (lesson 10).
6. **Every row after.** One single crochet in each stitch across, hook under both loops at the top of each stitch, as the Mary Frances scarf does. Count at the end of every row.
7. **Stop** when the piece is as long as it is wide.
8. **Fasten off.** Cut the yarn and pull it through the last loop (lesson 21). Fasten the ends with a few stitches on the wrong side, as Dillmont describes.

**What to check.** Edges straight, not sloping: if one slopes, look at your first stitch on the hook, the cause Priscilla names for a sloping edge in her star stitch (lesson 19). Count the same in every row. If the count drifts, you have missed or added a stitch.

**Variations from the sources.** Work the whole cloth in the back loop only for a rib like Dillmont's ribbed stitch (lesson 9). Add a picot edge (lesson 22).

:::reveal You want a washcloth 24 single crochet wide. How many chains do you make, and why? ||| 25. The first single crochet goes into the 2nd chain from the hook, so the chain next to the hook is skipped.

:::reveal In a row of single crochet, does the ch-1 you turn with count as a stitch? ||| No.

## Sources
${src(CYC_LEVELS, `the "Basic" level.`)}
${src(FRYER, `p. 69 (the doll's scarf).`)}
${src(DILLMONT, `"Crochet Work", p. 223 (ends); p. 241 (washable materials).`)}
${src(LEINHAUSER, `the single crochet row example and the turning-chain rule.`)}`,
    },
    {
      slug: "project-coaster",
      title: "30 · Project 2: a coaster, in rounds",
      section: "Section 8 · Projects",
      recallContent: [
        {
          prompt: "Your swatch makes 12 single crochet in 4 inches and you want a cloth 8 inches wide. How many stitches, and how many chains to start?",
          answer: "24 stitches, so 25 chains: the chain next to the hook is skipped.",
        },
        {
          prompt: "What does the Craft Yarn Council's \"Basic\" project level allow?",
          answer: "Projects using basic stitches, which may include basic increases and decreases.",
        },
      ],
      body: `A coaster is a flat circle, and the 1918 *Handbook*'s Tam-o'-Shanter gives the clearest rounds in the sources for one. This project uses the first rounds of the Tam as the coaster. The Tam is written in English names, so here it is in US terms, where its "double" is the single crochet.

**Steps.**

1. **Ring.** "Make a chain of 3 stitches, join" (Handbook, 1918). Join with a slip stitch into the first chain (lesson 11).
2. **Round 1.** "Seven doubles in ring": 7 single crochet into the centre of the ring.
3. **Round 2.** "Two doubles in each double": 2 single crochet in every stitch. 14.
4. **Round 3.** "A double in double, 2 in next; repeat." 21.
5. **Round 4.** "A double in each of 2 doubles, 2 in next; repeat." 28.
6. **Round 5.** "A double in each of 3 doubles, 2 in next; repeat." 35.
7. **Keep going.** "Continue in this way, adding 1 double between widenings each row". Round 6 has 4 plain stitches between increases and 42 stitches; round 7 has 5 and 49.
8. **Stop** when the circle is as wide as you want the coaster. The 1918 button cover finishes its flat circle by working "once around without widening"; you can do the same for your last round.
9. **Fasten off** and fasten the ends on the wrong side (lesson 21).

**Count every round.** Each round should be exactly 7 more than the last. If it is not, count the plain stitches between increases: there should be one more in each section than in the round before.

**The other way: corners.** Dillmont's hexagon makes a six-sided coaster. Her start: "Make a foundation chain of 6 stitches, join the round; 12 plain on the 6 chain", and her corners: "3 plain on the second plain of the last row; repeat 5 times" (Dillmont, n.d., p. 240, fig. 442). Her "plain" is the US single crochet. Read her full instruction on p. 240 with figure 442 before you try it; this lesson gives only the start and the corner rule, because those are what this course has checked. Her square (pp. 239-240, fig. 441) works the same way with four corners.

:::figure https://res.cloudinary.com/devdash54321/image/upload/v1791419365/witus/courses/crochet/crochet/dillmont-fig442-crochet-hexagon.jpg ||| A white-on-black engraving of a flat crochet hexagon worked outward from a small round centre. Its six sides curve slightly inward between six pointed corners, and small holes line up from the centre towards each corner. Bands of slightly different texture mark the rounds, and a short loose end of thread sticks out near the right-hand corner. ||| Dillmont's figure 442, "Crochet hexagon" (p. 240), the six-cornered version of this coaster. It starts from "a foundation chain of 6 stitches", and each round puts "3 plain on the second plain of the last row" at every one of its six corners. Her "plain" is the US single crochet. ||| Th. de Dillmont, Encyclopedia of Needlework (English ed., n.d.), "Crochet Work", p. 240, Fig. 442, Crochet hexagon. Public domain in the USA. Image via Wikimedia Commons, File:Fig. 442. Crochet hexagon.jpg (the same engraving is 455.jpg in Project Gutenberg eBook 20776). https://commons.wikimedia.org/wiki/File:Fig._442._Crochet_hexagon.jpg

**What to check.** A flat circle should lie flat. If yours does not, recount: a missed increase or an extra one changes the count, and regular increases are what keep the work flat in every source here that makes a flat piece.

:::reveal In the Tam-based coaster, how many stitches should round 6 have? ||| 42: seven more than round 5's 35.

:::reveal What does the 1918 button cover do on the last round before it changes shape? ||| It works once around without widening.

## Sources
${src(HANDBOOK, `section "Tam-o'-Shanter in Double Crochet", rounds 1-5; the button-cover instructions.`)}
${src(DILLMONT, `"Crochet Work", pp. 239-240, fig. 441 (square); p. 240, fig. 442 (hexagon).`)}`,
    },
    {
      slug: "project-hat",
      title: "31 · Project 3: a hat",
      section: "Section 8 · Projects",
      recallContent: [
        {
          prompt: "How many stitches does each round of the Tam-based coaster add, and where?",
          answer: "Seven, one increase in each of seven sections, with one more plain stitch between increases each round.",
        },
        {
          prompt: "What is Dillmont's corner rule for her hexagon?",
          answer: "\"3 plain on the second plain of the last row; repeat 5 times\": three single crochet into one stitch at each of six corners.",
        },
      ],
      body: `A simple hat is two shapes you already know: a flat circle for the crown, then a tube for the sides (lessons 12 and 14). This project puts the 1918 Tam's crown together with the sources' rule for a tube. It is a course design built from their rules, not a historical pattern copied whole, and it says so.

**The precedent, 1846.** Riego's "Greek Cap" works the same way. It begins on 7 chain, with "1st round" worked "2 stitches in 1", and adds stitches round after round "until there are 102 stitches" (Riego de la Branchardière, 1846, p. 76), with further increases through its pattern rounds. Then: "This finishes the increase; it will now be 22 inches round" (p. 77). Her increases end when the work is 22 inches round.

**Steps.**

1. **Measure.** Measure round your head with a tape where the hat will sit.
2. **Crown.** Work the coaster from lesson 30: ring of 3 chain, 7 single crochet, then 7 increases every round with one more plain stitch between them each time.
3. **Stop increasing** when the edge of the circle measures what you measured round your head, as Riego stopped hers at 22 inches round. Hold it round your head to check.
4. **Sides.** Work rounds with no increase: one single crochet in each stitch. The Tam's rows 36 to 45 do exactly this: "36 to 45. A double in each stitch", ten rounds of straight sides.
5. **Try it on** as you go, and stop when it is deep enough.
6. **Fasten off** and fasten the ends on the wrong side.

**Why the sides are a tube.** Work rounds without increasing and the sides go straight up (lesson 14). If they flare, you are adding stitches somewhere; count.

**What this lesson leaves out.** The 1918 Tam also has a few rounds of decreases between its crown and its straight rows. As transcribed, their numbers look garbled, so this course does not reproduce them. The Mary Frances book has a hat of its own, the "Little Crocheted Hat": "Make 3 chain stitches and join into a ring with slip stitch. Make 3 chains", then "Put 16 double crochets in the ring (counting the 3 chains as if they were one double crochet)" (Fryer, 1918, p. 206). It continues on p. 207 in double crochet; read it there if you want a taller-stitch crown.

:::reveal When does this project stop increasing the crown? ||| When the circle's edge measures round your head, as Riego's Greek Cap stopped at "22 inches round".

:::reveal What do the hat's sides need, and which rows of the 1918 Tam show it? ||| Rounds with no increase, one stitch in each stitch: the Tam's rows 36 to 45.

## Sources
${src(RIEGO_1846, `pp. 75-77, "Greek Cap".`)}
${src(HANDBOOK, `section "Tam-o'-Shanter in Double Crochet", rounds 1-5 and rows 36-45.`)}
${src(FRYER, `pp. 206-207, "Little Crocheted Hat".`)}`,
    },
    {
      slug: "project-hyperbolic-plane",
      title: "32 · Project 4: a hyperbolic plane",
      section: "Section 8 · Projects",
      recallContent: [
        {
          prompt: "What two shapes make the simple hat in this course?",
          answer: "A flat circle for the crown, increased until its edge measures round your head, and a tube of rounds without increase for the sides.",
        },
        {
          prompt: "How big was Riego's 1846 Greek Cap when she stopped increasing?",
          answer: "\"22 inches round\".",
        },
      ],
      body: `The last project is the one where you break the flat circle's rule on purpose. Henderson and Taimina say you need very little: "All you need to know is how to make a chain (to start) and how to single crochet" (Henderson & Taimina, n.d.).

**Yarn.** They "chose a yarn which will not stretch a lot".

**Steps, from their page.**

1. **Chain about 20.**
2. **First stitch.** Into "the 2nd chain from the hook. Take yarn over and pull through chain, leaving 2 loops on hook. Take yarn over and pull through both loops". That is a single crochet (lesson 7).
3. **Choose N** and keep it. "For the next N stitches proceed exactly like the first stitch".
4. **The increase.** "For the (N+1)st stitch proceed as before except insert the hook into the same loop as the N-th stitch". Two stitches in one loop: an increase.
5. **Repeat across the row**: N stitches, then one increase, to the end. At the end of the row, make one extra chain and turn.
6. **Every row after** the same, always with the same N. Every N stitches of the old row become N + 1.
7. "Be sure to crochet fairly tight and even."

**The rule that cannot bend.** "You can experiment with different ratios BUT not in the same model. You will get a hyperbolic plane ONLY if you will be increasing the number of stitches in the same ratio all the time." Write N down before you start.

**Watch it grow.** Count each row. With N = 5, a row of 20 becomes 24, then 28, then 33: stitches left over at the end of a row, too few to make a full group of 5, get no increase. The rows grow faster and faster, and so does the time each takes. Keep going: the growth is the point.

**Try two.** "the ratio determines the radius", and Henderson and Taimina's figures 7a to 7c show models with radii of "approximately 4 cm, 8 cm, and 16 cm". Make two small models with different values of N and compare them. Their page says that "as r increases the hyperbolic plane becomes flatter and flatter".

**Use it.** The model is for handling. On their page, students "during one class period" used theirs to look at geodesics. The section "What Can We Determine About Hyperbolic Geodesics?" sets out what they did, including a test with a ribbon; work through it with your own model in hand.

**What this course does not claim.** It does not teach the mathematics of curvature or of triangles on this surface, and it makes no claim to a geometry standard. The page is there for anyone who wants to go further.

:::reveal What must stay the same from the first row to the last in a hyperbolic plane? ||| The ratio: the same N in every row.

:::reveal With N = 5, a row of 20 becomes how many? ||| 24. Every 5 stitches become 6.

## Sources
${src(HT, `section "2. How to Crochet the Hyperbolic Plane" (materials and steps); "Hyperbolic Planes of Different Radii", figs. 7a-c; "What Can We Determine About Hyperbolic Geodesics?".`)}`,
    },
    {
      slug: "section-8-quiz",
      title: "Section 8 quiz · Projects",
      section: "Section 8 · Projects",
      body: "A graded check on the four projects: the washcloth, the coaster, the hat and the hyperbolic plane. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // ── project-washcloth ──
          {
            prompt: "Which Craft Yarn Council project level does the washcloth fit?",
            options: ["Basic", "Easy", "Intermediate", "Complex"],
            correctIndex: 0,
            explanation: "Basic: \"Projects using basic stitches. May include basic increases and decreases.\"",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "How does the council describe a Basic project?",
            options: ["Lace patterns worked in two colours", "Basic stitches, maybe basic shaping", "Basic stitches, never any shaping", "Only chains and slip stitches"],
            correctIndex: 1,
            explanation: "\"Projects using basic stitches. May include basic increases and decreases.\"",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Which period piece gives the washcloth its method?",
            options: ["Dillmont's hexagon on p. 240", "Beeton's basket on p. 268", "A doll's scarf", "Riego's Greek Cap on p. 75"],
            correctIndex: 2,
            explanation: "The Mary Frances book's doll's scarf, p. 69: chain, sc from the 2nd chain, rows through both loops, fasten off.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "How many rows does the Mary Frances doll's scarf have?",
            options: ["7", "30", "102", "62"],
            correctIndex: 3,
            explanation: "\"Make 62 rows of single crochet stitches\".",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "How many chains does the doll's scarf start with?",
            options: ["7", "3", "15", "46"],
            correctIndex: 0,
            explanation: "7 chain, then \"Skip 1 chain stitch. Make 6 single crochet stitches\".",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "What does lesson 29 tell you to do first?",
            options: ["Chain the full width at once", "Work a gauge swatch", "Add a picot edge", "Count the rows of the scarf"],
            correctIndex: 1,
            explanation: "Work a small square of single crochet and measure how many stitches make 4 inches.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Your swatch makes 12 single crochet in 4 inches. How many stitches for an 8-inch cloth?",
            options: ["12", "32", "24", "48"],
            correctIndex: 2,
            explanation: "Twice the swatch width, twice the stitches: 24.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "For 24 single crochet across, how many chains do you make?",
            options: ["24", "27", "26", "25"],
            correctIndex: 3,
            explanation: "One more than the stitches, because the first single crochet goes into the 2nd chain from the hook.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Why chain one more than the number of stitches?",
            options: ["The chain by the hook is skipped", "The slip knot counts", "Each row loses one stitch as you work", "One chain is always lost when you fasten off"],
            correctIndex: 0,
            explanation: "Row 1 starts in the 2nd chain from the hook, so the chain next to the hook is skipped (lesson 7).",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "What do you do at the end of each washcloth row?",
            options: ["Chain 3 and turn, as for doubles", "Chain 1 and turn", "Cut the yarn and start again", "Slip stitch into the first stitch"],
            correctIndex: 1,
            explanation: "Chain 1 and turn; one turning chain goes with single crochet.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Does the washcloth's turning ch-1 count as a stitch?",
            options: ["Yes, as the row's first stitch", "Yes, on odd rows", "No, it is not counted", "Only on the very last row"],
            correctIndex: 2,
            explanation: "Leinhauser: never count the turning ch-1 in single crochet.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Where does the hook go in each washcloth stitch?",
            options: ["Back loop only, every row", "Front loop only, every row", "Between stitches, every row", "Under both loops, as in the scarf"],
            correctIndex: 3,
            explanation: "Under both loops at the top of each stitch, as the Mary Frances scarf does.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "When does lesson 29 say to stop adding rows?",
            options: ["When it is square", "After exactly 62 rows", "When the yarn runs out", "After 24 rows"],
            correctIndex: 0,
            explanation: "Stop when the piece is as long as it is wide.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "One edge of your washcloth slopes. What does lesson 29 say to look at?",
            options: ["The yarn's weight category", "Your first stitch", "Whether the hook is too large", "The colour of the yarn"],
            correctIndex: 1,
            explanation: "Your first stitch on the hook: the cause Priscilla names for a sloping edge in her star stitch (lesson 19).",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Working the whole cloth in the back loop only gives a rib like which Dillmont stitch?",
            options: ["Rose stitch, her fig. 406", "Plain stitch, her fig. 405", "Ribbed stitch", "Cluster stitch, her fig. 426"],
            correctIndex: 2,
            explanation: "Dillmont's ribbed stitch, worked to and fro through the back part only (lesson 9).",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Why does lesson 29 point to Dillmont's note on washable materials?",
            options: ["Dillmont sold yarn for washcloths", "The council requires washable yarn", "Wool cannot be crocheted at all", "A washcloth needs frequent washing"],
            correctIndex: 3,
            explanation: "A washcloth gets washed often, so choose its yarn for \"things that require frequent washing\".",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Dillmont's rule on washable materials comes from her note on which technique?",
            options: ["Tambour work", "Tunisian crochet", "Filet crochet", "Irish crochet"],
            correctIndex: 1,
            explanation: "It sits in her note on materials for Tunisian crochet; lesson 29 applies it to the washcloth because the rule is about how the cloth is used, not the stitch.",
            sourceLessonSlug: "project-washcloth",
          },
          // ── project-coaster ──
          {
            prompt: "Which source's rounds does the coaster use?",
            options: ["The 1918 Tam's rounds", "Riego's Greek Cap of 1846", "Priscilla's Child's Ball", "Beeton's base"],
            correctIndex: 0,
            explanation: "The first rounds of the 1918 Handbook's Tam-o'-Shanter.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "In US terms, which stitch is the Tam's \"double\" for the coaster?",
            options: ["US double crochet, as written", "US single crochet", "US half double crochet, one wrap", "US treble crochet, two wraps"],
            correctIndex: 1,
            explanation: "The Tam is in English names, so its double is the US single crochet.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "How many chains make the coaster's ring?",
            options: ["8", "6", "3", "4"],
            correctIndex: 2,
            explanation: "\"Make a chain of 3 stitches, join.\"",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "How many stitches go in round 1 of the coaster?",
            options: ["16", "12", "3", "7"],
            correctIndex: 3,
            explanation: "\"Seven doubles in ring\": 7 single crochet.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "What does round 2 of the coaster do?",
            options: ["2 in every stitch", "1 in every stitch, no increase", "2 in every other stitch only", "3 in every corner stitch"],
            correctIndex: 0,
            explanation: "\"Two doubles in each double\": 14.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "How many stitches are in round 5 of the coaster?",
            options: ["30", "35", "40", "42"],
            correctIndex: 1,
            explanation: "7, 14, 21, 28, 35.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "How many stitches are in round 7 of the coaster?",
            options: ["42", "45", "49", "56"],
            correctIndex: 2,
            explanation: "Round 7 has 5 plain stitches between increases and 49 stitches.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "In round 6, how many plain stitches sit between increases?",
            options: ["3", "5", "6", "4"],
            correctIndex: 3,
            explanation: "One more than round 5's three: 4, for 42 stitches.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "When does the coaster stop growing?",
            options: ["At your chosen size", "At exactly 30 stitches per section", "After exactly seven rounds and no more", "When it reaches 102 stitches"],
            correctIndex: 0,
            explanation: "Stop when the circle is as wide as you want the coaster.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "Following the 1918 button cover, what can the coaster's last round be?",
            options: ["A round of double increases", "A plain round", "A round of picots on the edge", "Trebles"],
            correctIndex: 1,
            explanation: "The button cover works \"once around without widening\"; you can do the same.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "How should each coaster round compare with the last?",
            options: ["Twice as many as before", "The same number again", "7 more", "6 more"],
            correctIndex: 2,
            explanation: "Exactly 7 more. If not, count the plain stitches between increases.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "Which Dillmont piece makes a six-sided coaster?",
            options: ["Her coloured star, fig. 443", "Her square, fig. 441", "Her picot edge, p. 237", "Her hexagon"],
            correctIndex: 3,
            explanation: "Her hexagon, p. 240, fig. 442.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "Why does lesson 30 give only the start and the corner rule for Dillmont's hexagon?",
            options: ["Only those checked", "The rest is under copyright", "Dillmont left the rest out", "The rest is in UK terms"],
            correctIndex: 0,
            explanation: "Those are what this course has checked; read her full instruction on p. 240 with figure 442.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "If your coaster does not lie flat, what does lesson 30 say to do?",
            options: ["Press it with a hot iron", "Recount the stitches", "Change to a larger hook", "Add picots"],
            correctIndex: 1,
            explanation: "A missed or extra increase changes the count, and regular increases are what keep the work flat.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "What keeps the work flat in every source here that makes a flat piece?",
            options: ["A damp cloth and pins", "A larger hook each round", "Regular increases", "A frame"],
            correctIndex: 2,
            explanation: "Beeton: \"It is necessary to increase regularly in all the rounds to keep the work flat.\"",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "In round 3 of the coaster, how many plain stitches sit between increases?",
            options: ["1", "2", "3", "0"],
            correctIndex: 0,
            explanation: "\"A double in double, 2 in next; repeat\": one plain stitch, then an increase, seven times over: 21.",
            sourceLessonSlug: "project-coaster",
          },
          // ── project-hat ──
          {
            prompt: "What two shapes make lesson 31's hat?",
            options: ["A sphere closed at the top, then a cone", "A hyperbolic plane, then a flat circle", "Two hexagons", "Flat circle, then tube"],
            correctIndex: 3,
            explanation: "A flat circle for the crown, then a tube for the sides (lessons 12 and 14).",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "Is lesson 31's hat a historical pattern copied whole?",
            options: ["No, it is a course design", "Yes, Riego's Greek Cap", "Yes, the Tam", "Yes, the Mary Frances hat"],
            correctIndex: 0,
            explanation: "It is a course design built from the sources' rules, and the lesson says so.",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "Riego's Greek Cap began on how many chains?",
            options: ["3", "7", "4", "8"],
            correctIndex: 1,
            explanation: "7 chain, with the first round worked \"2 stitches in 1\".",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "How many stitches did the Greek Cap reach before its further increases?",
            options: ["210", "46", "102", "35"],
            correctIndex: 2,
            explanation: "\"until there are 102 stitches\" (Riego, 1846, p. 76).",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "How big round was the Greek Cap when the increase finished?",
            options: ["10 inches round", "30 inches round", "46 inches round", "22 inches round"],
            correctIndex: 3,
            explanation: "\"This finishes the increase; it will now be 22 inches round\" (p. 77).",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "What does lesson 31 have you measure first?",
            options: ["Round your head", "The length of your hook", "The weight of the yarn ball", "The Tam's printed rows"],
            correctIndex: 0,
            explanation: "Measure round your head with a tape where the hat will sit.",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "When do you stop increasing the crown?",
            options: ["After exactly seven rounds", "At your head size", "After 102 stitches, as Riego did", "At hand width"],
            correctIndex: 1,
            explanation: "When the circle's edge measures round your head, as Riego's increases ended at 22 inches round.",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "How are the hat's sides worked?",
            options: ["Seven increases every round", "Two increases at both ends", "No increases", "Decreases"],
            correctIndex: 2,
            explanation: "Rounds with no increase, one stitch in each stitch: a tube.",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "Which rows of the 1918 Tam show straight sides?",
            options: ["1 to 5", "Round 1, seven in the ring", "6 to 30, the widening rows", "36 to 45"],
            correctIndex: 3,
            explanation: "\"36 to 45. A double in each stitch\".",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "The hat's sides start to flare. What does that tell you?",
            options: ["Extra stitches", "Your hook is too small", "Your yarn is too heavy", "The back loop"],
            correctIndex: 0,
            explanation: "If the sides flare, you are adding stitches somewhere; count.",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "Why does lesson 31 leave out the 1918 Tam's decrease rows?",
            options: ["UK terms", "They look garbled", "They need a fine steel thread hook", "They belong to a different pattern"],
            correctIndex: 1,
            explanation: "As transcribed, their numbers look garbled, so the course does not reproduce them.",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "How does the Mary Frances \"Little Crocheted Hat\" begin, after its ring?",
            options: ["7 chain and 2 stitches in each", "Seven doubles in a ring of 3", "16 dc in a ring", "A chain of 4 joined in a circle"],
            correctIndex: 2,
            explanation: "\"Put 16 double crochets in the ring (counting the 3 chains as if they were one double crochet)\".",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "Which pages hold the Mary Frances hat?",
            options: ["p. 148, with Plate 4", "p. 69", "p. 52, the double crochet", "pp. 206-207"],
            correctIndex: 3,
            explanation: "pp. 206-207, \"Little Crocheted Hat\".",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "Which earlier project does the hat's crown follow?",
            options: ["The coaster's rounds", "The washcloth", "Beeton's oval base", "Priscilla's ball"],
            correctIndex: 0,
            explanation: "Work the coaster from lesson 30, then keep increasing until it measures round your head.",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "What does Riego's Greek Cap give lesson 31's hat?",
            options: ["A decrease", "A stopping point", "Which weight of yarn to buy", "How to join separate pieces"],
            correctIndex: 1,
            explanation: "Her increases end at 22 inches round: a precedent for stopping the crown at a measured size.",
            sourceLessonSlug: "project-hat",
          },
          // ── project-hyperbolic-plane ──
          {
            prompt: "What do Henderson and Taimina say you need to know?",
            options: ["Every stitch up to treble crochet", "Tunisian crochet on a long hook", "Chain and sc", "How to read a filet square chart"],
            correctIndex: 2,
            explanation: "\"All you need to know is how to make a chain (to start) and how to single crochet.\"",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "What yarn did Henderson and Taimina choose?",
            options: ["The softest, stretchiest yarn", "Size 100 thread", "Super bulky yarn, category 6", "Low-stretch yarn"],
            correctIndex: 3,
            explanation: "They \"chose a yarn which will not stretch a lot\".",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "About how many chains start the hyperbolic plane?",
            options: ["20", "3", "102", "8"],
            correctIndex: 0,
            explanation: "Chain about 20.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "Into which chain does the hyperbolic plane's first stitch go?",
            options: ["The 4th, as for doubles", "The 2nd from the hook", "The 1st, next to the hook", "The 3rd, skipping two"],
            correctIndex: 1,
            explanation: "Into \"the 2nd chain from the hook\".",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "What stitch is the first stitch of Henderson and Taimina's hyperbolic plane?",
            options: ["Double crochet, one wrap", "Slip stitch", "Single crochet", "Treble crochet, two wraps"],
            correctIndex: 2,
            explanation: "\"Take yarn over and pull through chain, leaving 2 loops on hook. Take yarn over and pull through both loops\": a single crochet.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "How is the (N+1)st stitch made?",
            options: ["Skip a loop, then work two in the next", "Into the chain space of the row below", "Into the back loop", "Same loop as the Nth"],
            correctIndex: 3,
            explanation: "\"proceed as before except insert the hook into the same loop as the N-th stitch\".",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "What do you do at the end of each row of the hyperbolic plane?",
            options: ["One extra chain", "Fasten off", "Join with a slip stitch", "Three chains, counted"],
            correctIndex: 0,
            explanation: "Make one extra chain at the end of the row and turn.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "Before you start a hyperbolic plane, what does lesson 32 say to write down?",
            options: ["The yarn's dye lot", "Your chosen number N", "The date of each row", "The hook's letter size"],
            correctIndex: 1,
            explanation: "Write N down: the ratio must never change within one model.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "Under the hyperbolic plane's N-to-N+1 rule, with N = 5, a row of 20 becomes how many?",
            options: ["25", "21", "24", "40"],
            correctIndex: 2,
            explanation: "Every 5 stitches become 6: 24.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "Under the hyperbolic plane's N-to-N+1 rule, with N = 5, how many stitches follow a row of 24?",
            options: ["29", "30", "48", "28"],
            correctIndex: 3,
            explanation: "20 stitches in four groups of 5 become 24; the last 4 make no full group of 5, so they get no increase: 28.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "How do the model's rows grow?",
            options: ["Faster and faster", "Steadily, seven each row", "More slowly as it grows", "Smaller each row"],
            correctIndex: 0,
            explanation: "The rows grow faster and faster, and so does the time each takes.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "What do Henderson and Taimina's figures 7a to 7c compare?",
            options: ["Different yarn colours", "Different radii", "Different hook sizes only", "Stitch names"],
            correctIndex: 1,
            explanation: "Models with radii of \"approximately 4 cm, 8 cm, and 16 cm\".",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "What does lesson 32 suggest you make, to compare?",
            options: ["One large model, changing N midway", "Two models with the very same N", "Two models, different N", "Three flat circles"],
            correctIndex: 2,
            explanation: "Two small models with different values of N, never mixing ratios in one model.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "Which test does Henderson and Taimina's geodesics section include, as lesson 32 mentions?",
            options: ["A water test", "A gauge test on a swatch", "A pull test on the chain", "A ribbon test"],
            correctIndex: 3,
            explanation: "The section \"What Can We Determine About Hyperbolic Geodesics?\" includes a test with a ribbon.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "Does this course teach the mathematics of curvature or of triangles on the hyperbolic plane?",
            options: ["No, it leaves that to the source", "Yes, in lesson 12, the flat circle", "Yes, in lesson 32, the project", "Yes, in the final assessment"],
            correctIndex: 0,
            explanation: "It does not. Lesson 15 quotes the page's curvature value but does not teach the mathematics; the page is there for anyone who wants to go further.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "Under the hyperbolic plane's N-to-N+1 rule, with N = 5, a row of 28 becomes how many?",
            options: ["34", "35", "56", "33"],
            correctIndex: 3,
            explanation: "Five groups of 5 become 30, and the 3 stitches left over make no full group, so they get no increase: 33.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
          {
            prompt: "Does this course claim a geometry standard for the hyperbolic plane?",
            options: ["Yes, a Common Core one", "No, it claims none", "Yes, in every state", "Yes, for the final"],
            correctIndex: 1,
            explanation: "It makes no claim to a geometry standard.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // FINAL
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-assessment",
      title: "Final assessment · Crocheting",
      section: "Final assessment",
      body: "Ten questions drawn from across the course. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which statement matches Karp's definition of crochet?",
            options: ["A chain alone is not yet crochet", "Any looped fabric made with any kind of needle", "Only work in a ring", "Only work done with a steel hook in thread"],
            correctIndex: 0,
            explanation: "A single row of chain becomes crochet only when a second row is worked into it (Karp, p. 1).",
            sourceLessonSlug: "what-crochet-is",
          },
          {
            prompt: "A pattern names a G hook. Why check the millimetres too?",
            options: ["Letters were abolished by the council", "Two sizes share the letter", "G is a steel size, not a regular one", "They show its colour"],
            correctIndex: 1,
            explanation: "The council's table lists both a 4 mm G-6 and a 4.25 mm G. Rely on the millimetre size.",
            sourceLessonSlug: "hooks-and-sizes",
          },
          {
            prompt: "Which yarn category's gauge row counts double crochets instead of singles?",
            options: ["Jumbo", "Medium, category 4", "Lace, category 0", "Super fine, category 1"],
            correctIndex: 2,
            explanation: "The lace row gives 32-42 double crochets; the others count single crochet.",
            sourceLessonSlug: "yarn-weights",
          },
          {
            prompt: "Which hand feeds the yarn in Dillmont, Beeton and the 1918 Handbook?",
            options: ["The right, with the hook", "Neither; a frame feeds it", "Both", "The left"],
            correctIndex: 3,
            explanation: "The right hand holds the hook like a pen; the left holds the work and feeds the yarn.",
            sourceLessonSlug: "holding-hook-and-yarn",
          },
          {
            prompt: "Where is the slip knot taught on Learn.WitUS?",
            options: ["Crocheting, lesson 5", "Knot-Tying & Rope Work, lesson 4", "Making String, its first lesson", "Nowhere"],
            correctIndex: 0,
            explanation: "Lesson 5 of this course, from the Mary Frances book, p. 148, Plate 4. The knots course does not teach it.",
            sourceLessonSlug: "the-slip-knot",
          },
          {
            prompt: "What is the first row of a crochet pattern worked into?",
            options: ["A strip of netting", "A foundation chain", "A knitted cast-on edge", "A row of slip knots"],
            correctIndex: 1,
            explanation: "\"All crochet-work patterns are begun on a foundation chain\" (Beeton, pp. 185-186).",
            sourceLessonSlug: "the-foundation-chain",
          },
          {
            prompt: "Which stitch pulls the new loop through the stitch and the hook's loop in one move?",
            options: ["Single crochet", "Half double", "Slip stitch", "Double crochet"],
            correctIndex: 2,
            explanation: "A slip stitch draws through the stitch and the loop on the hook at the same time.",
            sourceLessonSlug: "slip-stitch-and-single-crochet",
          },
          {
            prompt: "A stitch starts with two wraps round the hook. In US terms it is a what?",
            options: ["Double crochet", "Half double", "Double treble", "Treble crochet"],
            correctIndex: 3,
            explanation: "Two wraps first, then off two loops at a time three times: US treble crochet, UK double treble.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "Which stitch finishes by pulling through three loops at once?",
            options: ["Half double", "Double crochet", "Treble crochet", "Slip stitch"],
            correctIndex: 0,
            explanation: "One wrap, insert, draw through, then through all three loops at once.",
            sourceLessonSlug: "the-tall-stitches",
          },
          {
            prompt: "What makes Dillmont's ribbed stitch ribbed?",
            options: ["Two wraps before each stitch", "Back loop only", "A chain between every stitch", "In the round"],
            correctIndex: 1,
            explanation: "The hook passes \"through the back part only of the stitches of the preceding row\".",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "Ch 11; sc in 2nd ch from hook and in each ch across. How many sc?",
            options: ["11", "12", "10", "9"],
            correctIndex: 2,
            explanation: "The chain next to the hook is skipped and not counted: 10.",
            sourceLessonSlug: "where-the-hook-goes",
          },
          {
            prompt: "A row of half double crochet begins with how many turning chains?",
            options: ["1", "3", "4", "2"],
            correctIndex: 3,
            explanation: "\"two chain-stitches to a half or short treble\", which is the US half double.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "Which older habit made each new row without turning the work?",
            options: ["Cut and restart", "Front loop only", "Back loop only", "A turning chain"],
            correctIndex: 0,
            explanation: "Riego and Dillmont describe cutting the wool at each row's end and beginning again at the other end.",
            sourceLessonSlug: "rows-and-the-turning-chain",
          },
          {
            prompt: "Which join closes a chain into a ring in these sources?",
            options: ["A square knot", "A slip stitch", "A double crochet", "A sewn stitch"],
            correctIndex: 1,
            explanation: "Mary Frances and Leinhauser join with a slip stitch; Dillmont's \"single\" is the same stitch.",
            sourceLessonSlug: "joining-a-ring",
          },
          {
            prompt: "Seven stitches in round 1, seven more each round. How many in round 3?",
            options: ["14", "28", "21", "35"],
            correctIndex: 2,
            explanation: "7, 14, 21.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Increases stacked at the corners give which shapes in Dillmont?",
            options: ["A circle and a closed sphere", "Tube and cone", "A ball and an oval basket", "Square, hexagon"],
            correctIndex: 3,
            explanation: "Her square (fig. 441) and hexagon (fig. 442) put three stitches into one at each corner.",
            sourceLessonSlug: "the-flat-circle",
          },
          {
            prompt: "Which modern abbreviation names a two-together decrease?",
            options: ["sc2tog", "inc", "ch-sp", "tch"],
            correctIndex: 0,
            explanation: "sc2tog and dc2tog are the two-together decreases in the council's master list.",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "In Priscilla's ball cover, what comes after the first half?",
            options: ["Fastens off and sews on a separate lid", "Straight, then decrease", "Keeps increasing", "Starts a fresh ring of chain for the top"],
            correctIndex: 1,
            explanation: "A few rows without increasing, then the other half decreased to match.",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What does Beeton's basket border do to flare a little?",
            options: ["Works every stitch into the back loop", "A larger hook", "Increases at both ends", "Adds a row of tall trebles"],
            correctIndex: 2,
            explanation: "\"increase 2 double stitches at both ends, in order that the edge may be a little wider in the upper part.\"",
            sourceLessonSlug: "tube-cone-and-sphere",
          },
          {
            prompt: "What do you get if you change the ratio N to N+1 partway through one model?",
            options: ["A flatter and neater plane", "A sphere that closes at once", "A tube", "No hyperbolic plane"],
            correctIndex: 3,
            explanation: "\"You will get a hyperbolic plane ONLY if you will be increasing the number of stitches in the same ratio all the time.\"",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "What did Taimina watch Henderson use at the 1997 workshop?",
            options: ["A paper and tape surface", "A Priscilla pattern of 1908", "A crocheted hyperbolic plane", "A Tam pattern from 1918"],
            correctIndex: 0,
            explanation: "\"using a paper and tape surface\". Crochet came after she tried knitting.",
            sourceLessonSlug: "the-hyperbolic-plane",
          },
          {
            prompt: "A UK pattern says \"half treble\". What is it in US terms?",
            options: ["tr", "hdc", "dc", "sc"],
            correctIndex: 1,
            explanation: "UK half treble (htr) is US half double crochet (hdc).",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "Which American book warned in 1918 that stitch names were shifting between books?",
            options: ["The Priscilla book", "The Mary Frances book", "The Handbook", "Beeton's book"],
            correctIndex: 2,
            explanation: "The Handbook of Wool Knitting and Crochet warned that some books shift every name down one.",
            sourceLessonSlug: "us-and-uk-names",
          },
          {
            prompt: "What does a bracket followed by \"three times\" tell you?",
            options: ["Work it once, then three more times", "Skip three rows", "Work it three times per stitch", "Three times in all"],
            correctIndex: 3,
            explanation: "Work the bracketed sequence three times in all, as in the 1918 Handbook's example.",
            sourceLessonSlug: "abbreviations-and-repeats",
          },
          {
            prompt: "What does \"miss\" mean in an old pattern?",
            options: ["Skip a stitch", "Make an error", "Leave out a row", "Drop the loop"],
            correctIndex: 0,
            explanation: "Riego: \"Miss a stitch\" is \"Pass over 1 of the row before.\"",
            sourceLessonSlug: "increase-and-decrease",
          },
          {
            prompt: "On a chart, how do you tell a double crochet from a treble?",
            options: ["Its colour", "Count the slashes", "Measure the oval's size", "Count the dots below"],
            correctIndex: 1,
            explanation: "A T with one slash is a double crochet; two slashes, a treble.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "By Dillmont's filet rule, how many trebles make 5 solid squares side by side?",
            options: ["15", "20", "16", "17"],
            correctIndex: 2,
            explanation: "1 + 3 × 5 = 16.",
            sourceLessonSlug: "charts-and-symbols",
          },
          {
            prompt: "Before starting a sized piece, what does lesson 19 say to make?",
            options: ["A paper pattern", "A chart of the rows", "A practice ring", "A gauge swatch"],
            correctIndex: 3,
            explanation: "Always complete a gauge swatch, whatever the hook's sizing.",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "Your swatch is too small for the pattern gauge. Which hook do you try?",
            options: ["Larger", "Smaller, to tighten it", "The same, worked looser", "Steel"],
            correctIndex: 0,
            explanation: "\"if your gauge swatch it [sic] too small, redo it using a larger hook\".",
            sourceLessonSlug: "gauge-and-catching-mistakes",
          },
          {
            prompt: "In lesson 20's exercise, what does a UK \"tension\" become in a US pattern?",
            options: ["Yarn over", "Gauge", "Hook size", "Weight"],
            correctIndex: 1,
            explanation: "U.K. tension is U.S. gauge.",
            sourceLessonSlug: "exercise-read-and-count",
          },
          {
            prompt: "What do you do when the last stitch of a piece is made?",
            options: ["Tie a knot", "Leave the loop on a safety pin", "Fasten off", "Chain three and turn the work"],
            correctIndex: 2,
            explanation: "Cut the yarn and draw the end through the last loop, as Gaugain (1840), Riego (1846) and Dillmont describe it.",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "What did some workers do with their ends on the wrong side, per Dillmont?",
            options: ["Glued them flat to the back", "Burned them", "Tied them in a bow to hang", "Stitched them down"],
            correctIndex: 3,
            explanation: "\"fasten them off with a few stitches on the wrong side\".",
            sourceLessonSlug: "fastening-off-and-ends",
          },
          {
            prompt: "Which stitch does the 1918 Handbook use to join two pieces?",
            options: ["Slip stitch", "Treble crochet", "Picot", "Half treble"],
            correctIndex: 0,
            explanation: "Its own slip-stitch is \"properly a close joining stitch\": drop the loop, put the hook into the piece, and pull the dropped loop through.",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "What does Dillmont's chain picot decorate?",
            options: ["A ring's centre", "A finished edge", "A turning chain", "A foundation chain"],
            correctIndex: 1,
            explanation: "It is an edge finish: 5 chain and 1 plain stitch in the first of them.",
            sourceLessonSlug: "joining-and-edges",
          },
          {
            prompt: "Which finishing step can this course not source for crochet?",
            options: ["Fastening off the last loop", "Joining squares on the wrong side", "Blocking a piece to size", "Changing colour mid-row"],
            correctIndex: 2,
            explanation: "No crochet source in the course gives a blocking instruction.",
            sourceLessonSlug: "care-and-blocking",
          },
          {
            prompt: "In the record Karp gives, which came first: the 1653 patent or tambour embroidery in Europe?",
            options: ["Tambour, in the early 1560s", "The same year", "Tambour, around the year 1600", "The 1653 patent"],
            correctIndex: 3,
            explanation: "The patent is 1653; tambour embroidery arrived in Europe in the early 1760s.",
            sourceLessonSlug: "before-the-word",
          },
          {
            prompt: "What kind of evidence is Grant's shepherd's knitting passage?",
            options: ["A later memory", "A diary entry made in 1812", "An 1813 letter", "A pattern printed in 1898"],
            correctIndex: 0,
            explanation: "Events of 1812-13, written between 1845 and 1867, printed in 1898.",
            sourceLessonSlug: "shepherds-knitting",
          },
          {
            prompt: "Put these in date order: Penélopé's instructions, Gaugain's book, Riego's 1846 book.",
            options: ["Gaugain, Riego, Penélopé", "Penélopé, Gaugain, Riego", "Riego, Penélopé, Gaugain", "Gaugain, Penélopé, Riego"],
            correctIndex: 1,
            explanation: "A volume dated 1822-1823, then 1840, then 1846.",
            sourceLessonSlug: "crochet-in-print",
          },
          {
            prompt: "What does the 1883 catalogue say the famine did for crochet in Ireland?",
            options: ["Invented it from nothing in 1847", "Ended the trade entirely by 1851", "Proved its worth", "Brought it in"],
            correctIndex: 2,
            explanation: "\"Evidently it was known before the famine, but the famine brought out and proved its worth\".",
            sourceLessonSlug: "irish-crochet-and-the-famine",
          },
          {
            prompt: "Who answered Burns and Van Der Meer's survey?",
            options: ["A random sample", "Patients chosen by their doctors", "Every crocheter in one country", "Self-selected crocheters"],
            correctIndex: 3,
            explanation: "People who chose to answer a survey promoted through social media; 99.1% were female.",
            sourceLessonSlug: "folklore-testimony-and-a-survey",
          },
          {
            prompt: "Which project is worked in rows?",
            options: ["The washcloth", "The coaster", "The hat, crown first", "The Tam"],
            correctIndex: 0,
            explanation: "The washcloth: single crochet rows, ch-1 and turn.",
            sourceLessonSlug: "project-washcloth",
          },
          {
            prompt: "Which project uses the 1918 Tam's first rounds as it stands?",
            options: ["The washcloth", "The coaster", "The hyperbolic plane", "Riego's Greek Cap"],
            correctIndex: 1,
            explanation: "The coaster is the Tam's crown rounds in US single crochet.",
            sourceLessonSlug: "project-coaster",
          },
          {
            prompt: "Which project joins a flat circle to a tube?",
            options: ["The washcloth", "The coaster", "The hat", "The hyperbolic plane"],
            correctIndex: 2,
            explanation: "The crown is a flat circle; the sides are rounds with no increase.",
            sourceLessonSlug: "project-hat",
          },
          {
            prompt: "Which project breaks the flat circle's rule on purpose?",
            options: ["The hat's crown, a flat circle", "The washcloth, in rows", "The coaster", "The hyperbolic plane"],
            correctIndex: 3,
            explanation: "It increases in a constant ratio, N to N+1, so the number it adds keeps growing; a flat circle adds the same number each round.",
            sourceLessonSlug: "project-hyperbolic-plane",
          },
        ],
      },
    },
  ],
};
