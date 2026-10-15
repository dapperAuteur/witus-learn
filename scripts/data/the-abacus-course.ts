import type { AuthoredCourse } from "./authored-course";

// "The Abacus: Soroban and Suanpan" (Science & Math, also listed in Culture & History). Slug
// `the-abacus`. Series `tools-that-think` ("Tools That Think"), code TOOLS, position 05. TOOLS-01 map
// and compass and TOOLS-02 the slide rule are built in parallel branches.
//
// RESEARCH TIER 1 (docs/course-method/README.md): mathematics and history, nothing health, law,
// safety or money. The anzan section touches child-learning research and is written strictly to one
// randomized trial (Barner et al., 2016) and to no broader claim.
// Brief:   plans/future-courses/science-and-math/tool-usage/2026-10-14-abacus-brief.md (approved by BAM
//          2026-10-15; his answers are in its final section: add square and cube roots; TOOLS-05;
//          multiple-choice quizzes; claim 1.OA.C.6, 1.NBT.B.2, 2.NBT.A.1, 2.NBT.B.7, 2.NBT.B.9,
//          4.NBT.A.1, 5.NBT.A.1 and MP5 only as far as taught; keep the three-lesson anzan section;
//          teach the Cranmer abacus; public and free, held for his P videos; teach the modern division
//          method from his demonstration, the old division table only as a primary-source exercise;
//          quote around the slurs in the 1946 press and say plainly that and why the quotation is
//          altered, with the history and its connection to today).
// Evidence: the brief's section 6 (70 VERIFIED items) serves as the dossier. The build re-read every
//          operational locator on the page images of Knott (1886) and the newspaper pages, and found one
//          more misprint the brief did not record: Knott prints "multiply 4143 by 928" (p. 51) but his
//          steps (p. 52, "the next figure of the multiplicand, 7") and his Fig. 7 (multiplicand rods
//          reading 4, 1, 7) work 4173. Lesson 11 teaches it as Knott worked it, 928 x 4173 = 3,872,544,
//          and turns the misprint into an exercise beside the brief's "3437.843" (lesson 8).
//          Added at build (all fetched 2026-10-15): the National Archives milestone pages on Executive
//          Order 9066 and the Chinese Exclusion Act (federal works), and the Presidential Memorandum of
//          January 26, 2021 (86 FR 7485), for lesson 25's account of what the 1946 language did and how it
//          connects to today; the MEXT Course of Study's Japanese text (lesson 26).
//
// VISIBILITY: PUBLIC and free, HELD ("Coming soon") until BAM records the demonstrations the P lessons
// call for. BAM has not yet chosen his soroban (brief question 1), so lesson 4 is written to help him
// choose. The publishHoldReason in scripts/seed-courses.ts says so. Registered on Learn.WitUS only
// (Science & Math, also Culture & History). BAM approved an ElementaryMBA copy (STEAM, brief question
// 3), which needs tests/seed-registry.test.ts to allow one slug per school and waits on that change.
//
// LESSON NUMBERS differ from the brief's outline by two from lesson 15 on: BAM's added square-root and
// cube-root lessons are 15 and 16, inside section 3, so the brief's lesson 24 (the abacus in schools,
// with the Cranmer abacus) is lesson 26 here.
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line (parsed by the seeder).
//   P (BAM's demonstration): 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 19, 22 and 27. Every P lesson
//   still teaches its operation fully in writing, with bead tables, so a learner without the video can
//   follow it. Lesson 13 (division) is the one whose method waits most on BAM: it teaches the
//   multiplication-table method the League of Japan Abacus Associations names, worked on plain
//   arithmetic, and BAM's video shows his own hands doing it.
//
// ASSESSMENT: multiple choice only (BAM, brief question 4). Every worked number comes from Knott (1886),
// Smith and Mikami (1914, including the 1627 Jinkoki examples), Smith (1925), or is plain arithmetic
// shown in the lesson. Kojima (1954) is Tier C: cited by page, never paraphrased into drills. The
// Wikibooks "Modern division" page is linked, never adapted (its CC BY-SA terms would carry over).
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted later: Knott 1886 (Digital Library of India scan; 1886), Smith and Mikami
//    1914, Smith 1925 and Mikami 1913 (archive.org, not in copyright or Public Domain Mark), Zhu 2023
//    (CC BY 4.0, with attribution), the Smithsonian record TEXT (CC0 per the Open Access API; images
//    are not CC0 and stay linked), the National Archives pages and the Federal Register (federal works).
//  - Tier B, link only: the two 1946 Washington Daily News pages (Library of Congress; renewal status
//    not checked), Barner et al. 2016 (Harvard DASH, Open Access Policy terms), the MEXT Course of Study
//    (Japanese copyright article 13 not checked), the League of Japan Abacus Associations pages, the
//    National Abacus Education Federation timeline, the Kyoto University catalog record, MacTutor, the
//    APH product page and museum record, UNESCO, and the Wikibooks page (CC BY-SA, linked not adapted).
//  - Tier C, cite only: Kojima (1954), "Copyright in Japan, 1954", renewal not checked.
//
// THE 1946 QUOTATIONS (BAM, brief question 10). Lesson 25 quotes the United Press report and the
// November 19 caption AROUND the slurs: each place a slur stood is marked [slur] or [...], and the
// lesson says plainly that the quotation is altered, why, what the words did in 1946, and how that
// connects to today, linking the public lessons that teach the history (Seattle: The Modern Bookend
// lesson 3; The History of Unions lesson 4; Exported lesson 4; The President's House lesson 12). The
// candidates The Match and The Great Migration were opened and not linked: neither has a lesson that
// teaches anti-Asian exclusion (each mentions it only as a quiz option).
//
// LINKS to other courses use the live pattern /bam/<course-slug>/lesson/<lesson-slug> (the pattern
// in tests/faa-lesson-markdown.test.ts, from a learner-reported live URL). The Slide Rule is named and
// not linked: it is on an unmerged branch and held.
//
// STANDARDS: CCSS 1.OA.C.6 (partial), 1.NBT.B.2, 2.NBT.A.1, 2.NBT.B.7, 2.NBT.B.9 (partial), 4.NBT.A.1,
// 5.NBT.A.1 and MP5 (partial), through three claims in src/lib/standards/claims.ts mapped in
// shared/common-core-math.ts.
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts, keys ab-*):
//  - L4: whether a clearing bar on some modern sorobans is worth having (no source read describes one).
//  - L23: when the abacus reached Japan (the sources read give three different answers).
//  - L23: the Waseda University Library scan of the 1622 Warisansho (not identified on the page).
//  - L24: when the four-bead soroban came in (five sources, five different dates or ranges).
//  - L25: the Pacific Stars and Stripes report of the contest, read only as Kojima reprints it.
//  - L26: when the soroban certification exams began (1928, 1931 or 1944 in three sources).
//  - L26: the 1962 Nolan and Morris study behind APH's "4 grade levels" (not read).
//
// House style, matching the-slide-rule-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the lesson before; an
// APA 7 `## Sources` block on every teaching lesson with a locator and a tier on every entry (printed
// page AND PDF page where they differ); a quiz per section pooled to round(words / 35), clamped 40 to
// 100, serving 5, passing 80, shuffled; a final pooling 40+ and serving 10, placed last. Options within
// a question are written to within a few characters of the same length, so no length position gives
// the answer away. Bead states are plain-text tables (the app renders no figures without a hosted
// image). American spelling in prose; quotations keep their own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const KNOTT =
  "Knott, C. G. (1886). The abacus, in its historic and scientific aspects. *Transactions of the Asiatic Society of Japan, 14*, 18-70. https://archive.org/details/in.ernet.dli.2015.70900";
const SMITH_MIKAMI =
  "Smith, D. E., & Mikami, Y. (1914). *A history of Japanese mathematics*. Open Court. https://archive.org/details/historyofjapanes00smituoft";
const SMITH_1925 =
  "Smith, D. E. (1925). *History of mathematics* (Vol. 2). Ginn. https://archive.org/details/historyofmathema02smit";
const MIKAMI_1913 =
  "Mikami, Y. (1913). *The development of mathematics in China and Japan*. Teubner. https://archive.org/details/DevelopmentOfMat01MikaUMic";
const ZHU =
  "Zhu, Y. (2023). The interplay between textual procedures and material operations from the viewpoint of Chinese mathematical texts. *Science in Context, 36*, 213-234. https://doi.org/10.1017/S0269889725100860";
const MACTUTOR =
  "O'Connor, J. J., & Robertson, E. F. (2003, December). *Cheng Dawei*. MacTutor History of Mathematics, University of St Andrews. https://mathshistory.st-andrews.ac.uk/Biographies/Cheng_Dawei/";
const KYOTO =
  "Kyoto University Library. (n.d.). *原本直指算法統宗* [Catalog record rb00028638, an 1864 reprint of Cheng Dawei's Suanfa tongzong]. Kyoto University Rare Materials Digital Archive. https://rmda.kulib.kyoto-u.ac.jp/item/rb00028638";
const KOJIMA = "Kojima, T. (1954). *The Japanese abacus: Its use and theory*. Charles E. Tuttle.";
const BARNER =
  "Barner, D., Alvarez, G., Sullivan, J., Brooks, N., Srinivasan, M., & Frank, M. C. (2016). Learning mathematics in a visuospatial format: A randomized, controlled trial of mental abacus instruction. *Child Development, 87*(4), 1146-1158. Pre-publication manuscript, Harvard DASH. http://nrs.harvard.edu/urn-3:HUL.InstRepos:41364831";
const UP_1946 =
  "United Press. (1946, November 11). Ancient abacus whips electric calculator. *The Washington Daily News*, p. 27. Library of Congress, Chronicling America. https://www.loc.gov/resource/sn82016181/1946-11-11/ed-1/?sp=27";
const WDN_PHOTO =
  "Maybe we ain't so smart [Photograph and caption]. (1946, November 19). *The Washington Daily News*, p. 3. Library of Congress, Chronicling America. https://www.loc.gov/resource/sn82016181/1946-11-19/ed-1/?sp=3";
const NMAH = "National Museum of American History. (n.d.";
const NMAH_TAMURA = `${NMAH}-a). *Soroban, or Japanese abacus* (ID 1979.0876.04). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a5-04a2-704b-e053-15f76fa0b4fa`;
const NMAH_ALBREE = `${NMAH}-b). *Soroban, or Japanese abacus* (ID MA.335485). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a5-186b-704b-e053-15f76fa0b4fa`;
const NMAH_SUANPAN = `${NMAH}-c). *Suan-p'an, or Chinese abacus* (ID 1989.0709.01). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a5-0cca-704b-e053-15f76fa0b4fa`;
const NMAH_TAKEDA = `${NMAH}-d). *Soroban or Japanese abacus* (ID 1983.0831.03). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746a5-0cc3-704b-e053-15f76fa0b4fa`;
const NMAH_TIME = `${NMAH}-e). *Sheets, addition on the abacus, Japanese style* (ID 1979.3084.170). Smithsonian Institution. https://n2t.net/ark:/65665/ng49ca746b4-9dc0-704b-e053-15f76fa0b4fa`;
const APH_PRODUCT =
  "American Printing House for the Blind. (n.d.). *Cranmer abacus* (Catalog No. 1-03150-00) [Product page]. https://www.aph.org/product/cranmer-abacus/";
const APH_MUSEUM =
  "Museum of the American Printing House for the Blind. (n.d.). *Large Cranmer abacus* (Object ID 2007.29.25) [Museum record]. https://www.aph.org/museum/";
const LEAGUE_HISTORY =
  "The League of Japan Abacus Associations. (2014). *History of the soroban*. https://www.shuzan.jp/english/history/";
const LEAGUE_EDUCATION =
  "The League of Japan Abacus Associations. (n.d.). *Soroban in education and modern Japanese society*. https://www.shuzan.jp/english/education/";
const LEAGUE_KENTEI =
  "日本珠算連盟 [The League of Japan Abacus Associations]. (n.d.). *珠算能力検定試験* [Abacus proficiency examination]. https://www.shuzan.jp/kentei/shuzan/";
const ZENSHUREN =
  "全国珠算教育連盟 [National Abacus Education Federation]. (2025). *そろばんの歴史* [History of the soroban, timeline poster, PDF]. https://www.soroban.or.jp/";
const MEXT =
  "文部科学省 [Ministry of Education, Culture, Sports, Science and Technology]. (2017). *小学校学習指導要領（平成29年告示）* [Course of Study for elementary schools]. https://www.mext.go.jp/content/1413522_001.pdf";
const UNESCO =
  "UNESCO. (2013). *Chinese Zhusuan, knowledge and practices of mathematical calculation through the abacus* (Decision 8.COM 8.8, file 00853). https://ich.unesco.org/en/RL/chinese-zhusuan-knowledge-and-practices-of-mathematical-calculation-through-the-abacus-00853";
const WIKIBOOKS =
  "Wikibooks contributors. (n.d.). *Using an abacus/Modern division*. Wikibooks. https://en.wikibooks.org/wiki/Using_an_Abacus/Modern_division";
const NARA_9066 =
  "National Archives. (n.d.-a). *Executive Order 9066: Resulting in Japanese-American incarceration (1942)*. Milestone Documents. https://www.archives.gov/milestone-documents/executive-order-9066";
const NARA_EXCLUSION =
  "National Archives. (n.d.-b). *Chinese Exclusion Act (1882)*. Milestone Documents. https://www.archives.gov/milestone-documents/chinese-exclusion-act";
const FR_2021 =
  "Biden, J. R., Jr. (2021, January 29). Condemning and combating racism, xenophobia, and intolerance against Asian Americans and Pacific Islanders in the United States (Memorandum of January 26, 2021). *Federal Register, 86*(18), 7485-7486. https://www.federalregister.gov/documents/2021/01/29/2021-02073/condemning-and-combating-racism-xenophobia-and-intolerance-against-asian-americans-and-pacific";

/** Tier notes appended to each Sources entry (the source-hosting rule in CLAUDE.md). */
const TA = "Tier A (out of copyright, openly licensed or a federal work; may be hosted).";
const TB = "Tier B (link only, never rehost).";
const TC = "Tier C (cite by title only; no link, no copy).";

/** The marker every lesson needing BAM's demonstration opens with (parsed by the seeder). */
const P = (what: string) => `> **Before release:** needs a practitioner or BAM's demonstration: ${what}.`;

/** Lesson links inside the catalog, in the live pattern /bam/<course>/lesson/<lesson>. */
const L = (course: string, lesson: string) => `/bam/${course}/lesson/${lesson}`;

export const THE_ABACUS_COURSE: AuthoredCourse = {
  title: "The Abacus: Soroban and Suanpan",
  description:
    "Learn to set, read, add, subtract, multiply and divide on a Japanese soroban, one bead above the beam and four below, to work decimals with the unit marks, and to take square and cube roots the way an 1886 paper shows them. The course starts with place value you can touch (each rod is one place, the upper bead is worth five and each lower bead one) and the one sentence that explains every addition: when a rod cannot take a number, change the next rod by one and this rod by the number's complement. It drills the methods with bead tables you can follow without a video, turns two printing mistakes in the old sources into exercises a learner catches by reading the beads, and reads the old division table as a primary source. Then it goes back to what came before and around: counting rods in China, Korea and Japan, counting boards from the Salamis tablet to the English Exchequer, the Chinese suanpan, the soroban's crossing to Japan, and the reforms that took it to one bead above and four below. It closes with what the research on mental abacus does and does not show, the 1946 Tokyo contest between an abacus and an electric calculator read from the period press (with its racist language quoted around and explained, not repeated), the abacus in Japanese schools and the Cranmer abacus used by blind students in the United States, and a capstone page of arithmetic checked by pencil. Every worked example comes from public-domain sources or is plain arithmetic shown in the lesson. The fifth course in the Tools That Think series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: Place value you can touch
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "ten-places-on-a-frame",
      title: "1 · Ten places on a frame: what an abacus is",
      section: "1 · Place value you can touch",
      body: `**What this course is for.** By the end you should be able to pick up a Japanese **soroban**, the abacus with one bead above the beam and four below, and set and clear numbers, read place value from the beads, add and subtract, multiply, divide, work decimals with the unit marks, and take square and cube roots. You should be able to explain in one sentence why it works. You should also be able to read a Chinese **suanpan** (two beads above, five below) and say how it differs, and to tell the history from documents rather than from the stories that travel with the instrument.

**What an abacus is.** Cargill Knott read a paper on the soroban to the Asiatic Society of Japan, meeting in Tokyo, in December 1885. He defined it as "an arrangement of movable beads, which slip along fixed rods and indicate by their configuration some definite numerical quantity." The shape of the beads on the rods *is* the number. Nothing is written down.

**Three kinds of abacus.** The historian David Eugene Smith sorted the instruments that carry the name into "three standard types": the **dust board**, where figures were drawn in sand with a stylus and rubbed out with a finger (he thought it "seems to have been the earliest form"); the **table with loose counters** laid on ruled lines, "in common use in Europe until the opening of the 17th century"; and the **table with counters fastened to the lines**, grooves or rods carrying movable balls or disks. The bead frame is the third kind. Section 5 of this course goes back to the first two.

**Place value you can touch.** Knott's one-sentence account of how a soroban shows a number: it is "simply a mechanical model of our cipher system. Each rod corresponds to a definite figure 'place' ... or power of ten." His "cipher system" is the written numerals you already use, ten digits and a zero, where a digit's value depends on where it sits. On the frame you pick one rod as the ones; the rod to its left is the tens, the next the hundreds, and so on, while the rods to its right hold tenths and hundredths.

**An empty rod is a zero.** Written numerals need a symbol for an empty place: 706 needs its 0, or it reads 76. On a bead frame the empty place simply has no beads touching the beam, and you can see it is empty. That is why an abacus can do place-value arithmetic without a written zero at all. The written zero is its own long story: *Asia Before European Colonization* lesson "[5 · Gupta India and the numerals you are using right now](${L("asia-before-european-colonization", "asia-gupta-zero")})" traces what is documented about place value and zero in India. For a different base, *Pre-Columbian Mesoamerica* lesson "[7 · Script, zero, and the Long Count](${L("precolumbian-mesoamerica", "meso-maya-script-calendar")})" shows a place-value system that counts in twenties.

**Counters on lines, step by step.** Smith shows how an early computer with pebbles on ruled lines might add 22 and 139:

| Step | What you do | Hundreds line | Tens line | Units line |
|---|---|---|---|---|
| 1 | Place 2 pebbles on the units line | | | 2 |
| 2 | Place 9 more | | | 11 |
| 3 | Take away 10 units, add 1 to the tens line | | 1 | 1 |
| 4 | Add 2 to the tens, for the 20 in 22 | | 3 | 1 |
| 5 | Add 3 more, for the 30 in 139 | | 6 | 1 |
| 6 | Draw a hundreds line and place 1 pebble, for the 100 | 1 | 6 | 1 |

"The answer is 161." Step 3 is the whole idea of this course in miniature: ten on one line are traded for one on the next line to the left. A bead frame makes that trade with a flick of one finger, and lesson 6 teaches exactly how.

**The plan.** Section 1 builds the instrument in your hands: its parts, setting and reading numbers, and choosing one to buy. Section 2 adds and subtracts, section 3 multiplies, divides and takes roots, and section 4 asks what doing it in your head (anzan) does and does not do. Sections 5 to 7 are the history, from counting rods to a 1946 contest in Tokyo, and the course ends with a capstone page of arithmetic you check by pencil.

:::reveal In Knott's definition, what tells you which number an abacus shows? ||| The configuration of the beads on their rods: the beads' positions are the number, and nothing is written down.

:::reveal In Smith's pebble addition of 22 and 139, what happens at step 3? ||| Ten pebbles on the units line are taken away and one pebble is placed on the tens line: ten of one place are traded for one of the next place to the left.

## Sources
- ${KNOTT} Locator: p. 18 (PDF p. 41), the title page, "Read December 15th, 1885"; p. 46 (PDF p. 69), the definition; p. 48 (PDF p. 71), "simply a mechanical model of our cipher system" and each rod a place or power of ten. ${TA}
- ${SMITH_1925} Locator: p. 157 (PDF p. 175), the dust tablet as "the earliest form", the ruled table with counters "until the opening of the 17th century", the three standard types; p. 159 (PDF p. 177), the addition of 22 and 139 in six steps. ${TA}`,
    },
    {
      slug: "anatomy-of-a-soroban",
      title: "2 · Anatomy of a soroban",
      section: "1 · Place value you can touch",
      recallContent: [
        {
          prompt: "How did Knott define the soroban?",
          answer: "\"An arrangement of movable beads, which slip along fixed rods and indicate by their configuration some definite numerical quantity.\"",
        },
        {
          prompt: "Why can an abacus do place-value arithmetic without a written zero?",
          answer: "An empty place is simply a rod with no beads at the beam, and you can see that it is empty. Written numerals need a symbol for it.",
        },
      ],
      body: `${P("BAM naming each part on his own soroban (frame, beam, rods, the five-bead and the one-beads, the unit marks) and showing which beads count and which do not")}

**The frame and the beam.** Knott describes "a shallow rectangular box or framework ... divided longitudinally by a narrow ridge into two compartments, of which one is roughly some three or four times larger than the other." This course calls that ridge the **beam**. Rods "placed at equal intervals apart pass through the ridge" and are fixed into the sides of the frame, and on each rod the beads are threaded so they slide easily.

**The beads, and why they are shaped that way.** Looked at from the front, Knott writes, each bead is "a rhombus, the rod passing through the blunt angles. This double cone form makes manipulation rapid, the finger easily catching the ridge-like girth." Smith and Mikami make the same point in 1914: the soroban replaces the round balls of the Chinese instrument "by buttons having a sharp edge that the finger easily engages without slipping." A soroban bead is built to be caught by a fingertip.

**One bead above, four below.** On the soroban this course teaches, each rod carries **one bead above the beam** and **four below**. This course names them by their value: the upper bead is the **five-bead** and the lower beads are **one-beads**. A soroban given to the Smithsonian, made in 1959, is described exactly so: twenty-three rods, "one bead above the cross piece and four below." Knott's sorobans of 1885 were different. He counted "six (sometimes seven)" beads on a rod, "Five of these slide on the longer segment of the rod, the remaining one (or two) on the shorter." Lesson 24 tells how the extra beads went away, and why the sources disagree about when.

**Only beads at the beam count.** Knott's rule: "When the counters are as far as possible from the dividing ridge they have no value; when they are pushed as near the ridge as possible they have values." A one-bead pushed up to the beam counts 1 on its rod. The five-bead pushed down to the beam counts 5: in Knott's words it "has five times the value of any other counter upon that rod." Beads left away from the beam count nothing at all.

| Bead | Where it counts | Worth on its rod |
|---|---|---|
| Five-bead (above the beam) | Pushed down to touch the beam | 5 |
| Each one-bead (below the beam) | Pushed up to touch the beam | 1 |
| Any bead away from the beam | Nowhere | 0 |

**Every digit has exactly one shape.** With one five-bead and four one-beads, a rod can show 0 to 9 in only one way: the five-bead is either at the beam or not (0 or 5), and then 0 to 4 one-beads join it. So 7 is always the five-bead and two one-beads, never anything else. On Knott's five-bead rods there were two ways to show 5 (five one-beads, or the five-bead), which is one reason the fifth bead could go.

**The unit marks.** Along the beam many sorobans carry dots. The 1959 Smithsonian soroban: "Every third column of beads is marked with a black dot on the cross piece." Takashi Kojima's 1954 manual says the common Japanese soroban has 21 rods, with 13, 17, 27 and 31 also in use, and a unit point every third rod. You choose one marked rod as your ones rod; the marks every third rod then fall where commas fall in a written number, at the thousands and the millions, and lesson 14 uses them to place a decimal point.

**Old and new, side by side.** The Smithsonian also holds a soroban in a rosewood box, "ca 1885", with "13 parallel bamboo rods, with one bead above the cross bar and five below," used by S. Tetsu Tamura "as a schoolboy from 1885 to 1897". It is a physical match for Knott's count. Hold a modern soroban beside a picture of it and you have the change from five below to four below in two objects.

:::reveal On a one-above, four-below soroban, how is 7 shown on a rod, and is there any other way? ||| The five-bead at the beam and two one-beads up to the beam. There is no other way: each digit has exactly one shape.

:::reveal What did Knott and Smith and Mikami both say the bead's sharp double-cone edge is for? ||| So the finger catches it easily without slipping, which makes the beads quick to move.

## Sources
- ${KNOTT} Locator: p. 46 (PDF p. 69), the framework divided by a ridge, the rods, the double cone ("This double cone form makes manipulation rapid") and "six (sometimes seven)" beads, five on the longer segment; p. 47 (PDF p. 70), the remaining one or two on the shorter segment; p. 48 (PDF p. 71), counters away from the ridge have no value, and the single counter "has five times the value". ${TA}
- ${SMITH_MIKAMI} Locator: pp. 31 to 32 (PDF pp. 43 to 44), the soroban's single 5-ball and "buttons having a sharp edge that the finger easily engages without slipping". ${TA}
- ${NMAH_ALBREE} Locator: Description, the 23 rods, "one bead above the cross piece and four below", and "Every third column of beads is marked with a black dot". Record text CC0; images not checked. ${TB}
- ${NMAH_TAMURA} Locator: Description, the 13 bamboo rods with one bead above and five below, and its use by S. Tetsu Tamura "as a schoolboy from 1885 to 1897". Record text CC0; images not checked. ${TB}
- ${KOJIMA} Locator: p. 26, the 21-rod common soroban and the 13, 17, 27 and 31 rod sizes; p. 27, "a unit point at every third rod". ${TC}`,
    },
    {
      slug: "setting-clearing-reading",
      title: "3 · Setting, clearing and reading numbers",
      section: "1 · Place value you can touch",
      recallContent: [
        {
          prompt: "On a soroban, which beads count and which do not?",
          answer: "Only beads touching the beam count: a one-bead pushed up counts 1, the five-bead pushed down counts 5. Beads away from the beam count nothing.",
        },
        {
          prompt: "Why does each digit have exactly one shape on a one-above, four-below rod?",
          answer: "The five-bead is either at the beam or not (0 or 5), and then 0 to 4 one-beads join it, so 0 to 9 can each be made only one way.",
        },
      ],
      body: `${P("BAM clearing his soroban on camera, then setting and reading 706, 13, 30 and 987,654,321, rod by rod")}

**Clearing to zero.** Knott's method of 1885: tilt the frame "slightly with the smaller compartment uppermost," so every lower bead slides down away from the beam and every upper bead drops onto the beam. Then set the frame level and, "By a sweep of the finger tips along the surfaces of the single counters," push all the upper beads away from the beam. "The number represented is zero." Every bead is now as far from the beam as it can go. Do this before every new problem; a single stray bead left at the beam is a wrong answer you cannot see coming.

**Setting a digit on one rod.** Knott walks up one rod. Push up one lower bead and the rod shows 1; a second, 2; a third, 3; the fourth, 4. For 5, clear the lower beads and bring the five-bead down. Leave it there and push up lower beads again: 6, 7, 8, 9. Each digit is a five-bead (or not) plus up to four one-beads, exactly as lesson 2 said.

**Choosing the ones rod.** "One being first chosen as the unit, the next to the left is the 'tens,' the next the 'hundreds,' the next the 'thousands' and so on," Knott writes, and the rods to the right are tenths, hundredths and so on. In his figure he marks the ones rod with a V. On a modern soroban you use a unit mark: pick a marked rod near the middle and call it your ones rod.

**A way to write bead states.** This course writes a soroban as a small table, one column per rod, read left to right like a number:

| Rod | hundreds | tens | ones |
|---|---|---|---|
| Five-bead at the beam? | yes | no | yes |
| One-beads at the beam | 2 | 0 | 1 |
| Digit | 7 | 0 | 6 |

That is **706**: seven hundreds (the five-bead and two one-beads), zero tens (a rod with nothing at the beam), six ones (the five-bead and one one-bead). The empty tens rod *is* the zero, and you can see it.

**Tens and ones, made visible.** Set 13: one one-bead on the tens rod, the five-bead off and three one-beads on the ones rod. It is a ten and three ones. Set 10: one bead on the tens rod and the ones rod empty, ten ones gathered into a single ten. Set 30: three one-beads on the tens rod and nothing on the ones rod, three tens and no ones. Every two-digit number is a count of tens on one rod and a count of ones on the next, and the soroban will not let you forget which is which.

**A hundred is ten tens.** Set 100 and you have one bead on the hundreds rod and two empty rods beside it. On the tens rod you could never set more than 9; the tenth ten has to become one hundred on the rod to the left. That trade, ten of one rod for one of the next, is the carry, and lesson 6 makes it a move of the fingers.

**Ten times as much, one rod to the left.** Set 7 on the ones rod, then clear it and set 7 on the tens rod, then on the hundreds rod. The bead shapes are identical; only the rod has changed, and the value has gone from 7 to 70 to 700. A bead on any rod is worth ten times the same bead on the rod to its right. Going the other way, a bead on the tenths rod is worth one tenth of the same bead on the ones rod.

**Reading.** Read from the left: say each rod's digit in turn, and say "zero" for an empty rod between digits. Two pictures make good practice. Smith and Mikami's illustration of 1914 sets a different digit on each rod so that "the units are 1, the tens 2, the hundreds 3, and so on," and the soroban reads **987,654,321**. The research team in section 4 printed the reverse, a soroban "representing the value 123,456,789." Set each, clear it, and set it again until your fingers find the shapes without counting.

:::reveal Write the bead table for 706 in words, rod by rod. ||| Hundreds: the five-bead and two one-beads (7). Tens: nothing at the beam (0). Ones: the five-bead and one one-bead (6).

:::reveal You set 7 on the hundreds rod. How many times the value of the same 7 on the tens rod is it? ||| Ten times: 700 against 70. Each rod to the left is worth ten times the rod to its right.

## Sources
- ${KNOTT} Locator: p. 47 (PDF p. 70), tilting, leveling and sweeping the frame to zero ("The number represented is zero") and setting 1 to 4; p. 48 (PDF p. 71), 5 with the single counter, 6 to 9, and each rod a place, "One being first chosen as the unit"; p. 49 (PDF p. 72), Fig. 4 with "The mark V ... placed over the 'units' rod". ${TA}
- ${SMITH_MIKAMI} Locator: p. 36 (PDF p. 48), Fig. 12, the columns arranged so that "the units are 1, the tens 2, the hundreds 3," representing 987 654 321. ${TA}
- ${BARNER} Locator: ms p. 4 (PDF p. 5), Figure 1, a "Japanese soroban-style abacus ... representing the value 123,456,789". ${TB}`,
    },
    {
      slug: "what-to-look-for-buying-one",
      title: "4 · What to look for when you buy one",
      section: "1 · Place value you can touch",
      recallContent: [
        {
          prompt: "How does Knott clear a soroban to zero?",
          answer: "Tilt it with the smaller compartment uppermost so the lower beads slide away and the upper beads drop onto the beam, level it, then sweep the upper beads away from the beam with the fingertips.",
        },
        {
          prompt: "How does a soroban show that 13 is a ten and three ones?",
          answer: "One one-bead on the tens rod, and three one-beads (five-bead off) on the ones rod: a count of tens on one rod and of ones on the next.",
        },
      ],
      body: `${P("BAM comparing the sorobans he is choosing between (rod count, bead size and shape, unit marks, how firmly the beads stay put), and showing the one he buys")}

**Why this lesson exists.** A slide rule or a soroban is a tool you will hold for hundreds of hours, and a bad one teaches bad habits. This lesson lists what to check, each point tied to a source or to a number this course actually asks you to set.

**1. One bead above, four below.** This course teaches the one-above, four-below soroban, the form a 1959 Smithsonian example describes as "one bead above the cross piece and four below." A five-below soroban like Knott's still works, but it lets 5 be shown two ways, and the drills here assume four. A Chinese suanpan, with two above and five below, is a different instrument with its own methods; lesson 22 teaches you to read one, not to calculate on it.

**2. Enough rods.** Kojima's manual of 1954 gives 21 rods as the common Japanese size, with 13, 17, 27 and 31 also in use. Count what this course needs. Lesson 11's multiplication, Knott's 928 × 4173, uses three rods for 928, a gap, four for 4173, and "3 empty rods at least" to the right: eleven rods. The large cube root in lesson 16 lays out a nine-figure number with its answer rod beside it. Thirteen rods will do almost everything here; seventeen or more gives you room to work without crowding.

**3. Bead size you can feel.** A man who gave the Smithsonian a 23-rod soroban made in 1959 found addition and subtraction "straightforward" and bought the bigger instrument to try multiplication and division. "However, the beads were too small for his seventy-year-old fingers and thumb," and he went back to logarithm tables. Before you buy, check that your fingertip can move one bead without nudging its neighbor.

**4. Bead shape.** The soroban's bead is a double cone with a sharp edge. Knott says the shape "makes manipulation rapid, the finger easily catching the ridge-like girth"; Smith and Mikami say "a sharp edge that the finger easily engages without slipping." Round beads, like those the Smithsonian describes on a 1958 Chinese abacus ("The beads are rounded, as on other Chinese abaci"), are harder to catch with one fingertip.

**5. Unit marks.** Look for a dot on the beam every third rod, as on the 1959 Smithsonian soroban ("Every third column of beads is marked with a black dot"). Lesson 14 uses them to place decimal points, and they make long numbers easy to read.

**6. Beads that stay where you put them.** Knott levels the frame so that "if any counter is shifted it will have no tendency to move back to its former position." A soroban whose beads drift when you tilt it is quietly changing your number. The Cranmer abacus made for blind students solves this on purpose: the American Printing House for the Blind sells it as "A specially designed abacus that keeps beads in position once they have been set," with a "Red felt backing" that "prevents beads from slipping." Lesson 26 explains why that matters so much for a touch reader. For a sighted learner, a soroban with firm, even friction is the same idea in a milder form.

**7. A clearing bar, maybe.** Some sorobans sold today add a button or bar that clears every rod at once. No source this course has read describes one or tests whether it helps, so this lesson does not recommend it; BAM's video shows one if he buys one, and a research check is open.

**What it should cost.** Not much. In the 1946 contest of section 7, the champion's "deluxe abacus" was reported to cost "17 yen, about $1.13," against "a prewar price of about $800" for the electric calculator he beat.

**A checklist.**

| Check | Good sign | Why (lesson) |
|---|---|---|
| Beads per rod | One above, four below | Every digit has one shape (2) |
| Rods | 13 at least, 17 or more for roots | Knott's 928 × 4173 needs about 11 (11, 16) |
| Bead size | One fingertip, one bead | The 1959 donor's beads were too small |
| Bead shape | Sharp double cone | Caught "without slipping" (2) |
| Unit marks | A dot every third rod | Decimals and long numbers (14) |
| Friction | Beads stay set when tilted | A drifting bead changes the number (26) |

:::reveal Why does Knott's 928 × 4173 need about eleven rods? ||| Three rods for 928, a gap, four for 4173, and at least three empty rods to the right of the multiplicand for the product.

:::reveal What made the 1959 Smithsonian donor give up on his soroban for multiplication and division? ||| The beads were too small for his seventy-year-old fingers and thumb, so he went back to logarithm tables.

## Sources
- ${NMAH_ALBREE} Locator: Description, "one bead above the cross piece and four below", "Every third column of beads is marked with a black dot", and the donor's account (addition and subtraction "straightforward"; "the beads were too small for his seventy-year-old fingers and thumb"). Record text CC0. ${TB}
- ${NMAH_SUANPAN} Locator: Description, "The beads are rounded, as on other Chinese abaci." Record text CC0. ${TB}
- ${KNOTT} Locator: p. 46 (PDF p. 69), the double cone; p. 47 (PDF p. 70), leveling so a shifted counter has "no tendency to move back"; p. 51 (PDF p. 74), "3 empty rods at least to the right of the multiplicand". ${TA}
- ${SMITH_MIKAMI} Locator: p. 32 (PDF p. 44), "a sharp edge that the finger easily engages without slipping". ${TA}
- ${APH_PRODUCT} Locator: the product summary ("keeps beads in position once they have been set") and description ("Red felt backing prevents beads from slipping"). ${TB}
- ${UP_1946} Locator: p. 27, the 17-yen abacus and the calculator's $800 prewar price. ${TB}
- ${KOJIMA} Locator: p. 26, the common 21-rod soroban and the 13, 17, 27 and 31 rod sizes. ${TC}`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Place value you can touch",
      section: "1 · Place value you can touch",
      body: "A graded check on what an abacus is, the parts of a soroban, setting, clearing and reading numbers, and what to look for in one of your own. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          // Lesson 1
          { prompt: "To which society did Knott read his paper on the soroban in December 1885?", options: ["The Asiatic Society of Japan", "The Royal Society of London", "The French Academy of Science", "The Smithsonian Institution"], correctIndex: 0, explanation: "Lesson 1: Knott read it to the Asiatic Society of Japan, meeting in Tokyo, in December 1885.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "In Knott's definition, what shows the number on a soroban?", options: ["A dial read through a window", "Figures chalked on the frame", "The configuration of the beads", "The count of rods on the frame"], correctIndex: 2, explanation: "Lesson 1: beads that slip along fixed rods \"indicate by their configuration some definite numerical quantity.\"", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "Which of Smith's three types of abacus did he think was probably the earliest?", options: ["The bead frame on rods", "The sand-strewn dust board", "The table with counters", "The grooved bronze plate"], correctIndex: 1, explanation: "Lesson 1: Smith wrote that the dust tablet \"seems to have been the earliest form.\"", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "Until when, by Smith's account, were ruled tables with loose counters in common use in Europe?", options: ["The close of the 5th century", "The opening of the 12th century", "The opening of the 20th century", "The opening of the 17th century"], correctIndex: 3, explanation: "Lesson 1: the counter table was \"in common use in Europe until the opening of the 17th century.\"", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "Which of Smith's three types is the soroban?", options: ["Figures drawn in dust", "Loose counters on lines", "Pebbles in a clay bowl", "Counters fastened to lines"], correctIndex: 3, explanation: "Lesson 1: the bead frame is the third type, counters fastened to lines (rods or grooves).", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "Knott called the soroban \"simply a mechanical model of\" what?", options: ["The human hand", "Our cipher system", "A Chinese clock", "A pair of scales"], correctIndex: 1, explanation: "Lesson 1: \"simply a mechanical model of our cipher system,\" the written numerals with place value.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "On a soroban, what does each rod stand for?", options: ["One place, a power of ten", "One digit's color", "One hour of the day", "One coin of a set"], correctIndex: 0, explanation: "Lesson 1: \"Each rod corresponds to a definite figure 'place' ... or power of ten.\"", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "What do the rods to the right of the ones rod hold?", options: ["Tens and hundreds", "Nothing; they are spare", "Tenths and hundredths", "The answer's sign"], correctIndex: 2, explanation: "Lesson 1: to the left are tens and hundreds; to the right, tenths and hundredths.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "How does a soroban show a zero in the middle of a number?", options: ["A bead turned on its side", "An empty rod: no beads at beam", "A red bead marks the rod", "All of its beads at the beam"], correctIndex: 1, explanation: "Lesson 1: an empty place is a rod with nothing touching the beam, and you can see it is empty.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "Why does the written number 706 need its 0?", options: ["To mark it as even", "To show it is exact", "Zero marks a decimal", "Without it, it reads 76"], correctIndex: 3, explanation: "Lesson 1: written numerals need a symbol for an empty place, or 706 reads 76.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "In Smith's pebble addition, what is the sum of 22 and 139?", options: ["151", "171", "161", "261"], correctIndex: 2, explanation: "Lesson 1: \"The answer is 161.\"", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "In Smith's addition of 22 and 139, what happens when the units line holds 11 pebbles?", options: ["Ten go, one goes to tens", "One goes, ten go to tens", "All eleven go to tens", "Eleven stay on the line"], correctIndex: 0, explanation: "Lesson 1: step 3 takes away 10 units and adds one pebble to the tens line.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "In Smith's pebble addition, why is a hundreds line drawn at the last step?", options: ["For the 20 in 22", "For the 9 in 139", "For the 100 in 139", "For the 30 in 139"], correctIndex: 2, explanation: "Lesson 1: step 6 draws a hundreds line and places one pebble for the 100 in 139.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "Which other course lesson traces what is documented about place value and zero in India?", options: ["Asia Before European Col. 5", "Pre-Columbian Mesoamerica 7", "Learning How to Learn 8", "The History of Unions 4"], correctIndex: 0, explanation: "Lesson 1 links Asia Before European Colonization, lesson 5, on Gupta India and the numerals.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "The Maya system linked from lesson 1 is a place-value system that counts in what?", options: ["Fives", "Sixties", "Twelves", "Twenties"], correctIndex: 3, explanation: "Lesson 1: Pre-Columbian Mesoamerica lesson 7 shows a place-value system that counts in twenties.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "How many beads sit above and below the beam on a Chinese suanpan?", options: ["One above, four below", "Two above, five below", "One above, five below", "Two above, four below"], correctIndex: 1, explanation: "Lesson 1: the suanpan has two beads above and five below.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "Which section of this course covers anzan, doing abacus arithmetic in your head?", options: ["Section 4", "Section 1", "Section 2", "Section 6"], correctIndex: 0, explanation: "Lesson 1's plan: section 4 asks what anzan does and does not do.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "How is the capstone page of arithmetic at the end of the course checked?", options: ["By a calculator", "By a teacher", "By pencil", "By a timer"], correctIndex: 2, explanation: "Lesson 1: the course ends with a capstone page of arithmetic you check by pencil.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "In Smith's dust board, how were figures made and removed?", options: ["Chalk, then a cloth", "Stylus, then a finger", "Ink, then a knife", "Paint, then water"], correctIndex: 1, explanation: "Lesson 1: figures were drawn in sand with a stylus and rubbed out with a finger.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "What single move is \"the whole idea of this course in miniature\" in lesson 1?", options: ["One here for ten to the right", "Five here for one up above", "Two here for one to the left", "Ten here for one to the left"], correctIndex: 3, explanation: "Lesson 1: ten on one line are traded for one on the next line to the left.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "On a soroban, what is the rod to the left of the hundreds rod?", options: ["The tens rod", "The tenths rod", "The ones rod", "The thousands rod"], correctIndex: 3, explanation: "Lesson 1: ones, then tens, then hundreds, then thousands, each one rod further left.", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "When Smith adds 2 more pebbles to the tens line, what part of the sum is he adding?", options: ["The 2 in 22", "The 20 in 22", "The 30 in 139", "The 100 in 139"], correctIndex: 1, explanation: "Lesson 1: step 4 adds 2 pebbles to the tens line \"because of the 20 in 22.\"", sourceLessonSlug: "ten-places-on-a-frame" },
          { prompt: "What did Smith's early computer use as counters on the ruled lines?", options: ["Pebbles", "Coins", "Shells", "Knots"], correctIndex: 0, explanation: "Lesson 1: Smith's illustration adds 22 and 139 with pebbles placed on lines.", sourceLessonSlug: "ten-places-on-a-frame" },
          // Lesson 2
          { prompt: "What does this course call the ridge that divides the soroban's frame?", options: ["The rail", "The spine", "The beam", "The bar"], correctIndex: 2, explanation: "Lesson 2: Knott's \"narrow ridge\" is called the beam in this course.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "By Knott's account, how much larger is the bigger compartment of the frame?", options: ["About the same size", "Three or four times", "Ten times larger", "Twice as small"], correctIndex: 1, explanation: "Lesson 2: one compartment is \"roughly some three or four times larger than the other.\"", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "Seen from the front, what shape is a soroban bead, by Knott's description?", options: ["A circle", "A square", "An oval", "A rhombus"], correctIndex: 3, explanation: "Lesson 2: \"the form in perspective is that of a rhombus,\" a double cone.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "What did Knott say the double-cone bead shape does?", options: ["Makes the frame lighter", "Makes the beads cheaper", "Makes manipulation rapid", "Makes the rods stronger"], correctIndex: 2, explanation: "Lesson 2: \"This double cone form makes manipulation rapid.\"", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "Smith and Mikami say the soroban replaced round balls with buttons having what?", options: ["A sharp edge", "A painted number", "A flat face", "A hollow core"], correctIndex: 0, explanation: "Lesson 2: \"buttons having a sharp edge that the finger easily engages without slipping.\"", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "How many beads did Knott count on a soroban rod in 1885?", options: ["Five, sometimes six", "Seven, sometimes eight", "Six, sometimes seven", "Four, sometimes five"], correctIndex: 2, explanation: "Lesson 2: \"six (sometimes seven)\" beads, five on the longer segment.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "What does this course call the bead above the beam?", options: ["The five-bead", "The ten-bead", "The one-bead", "The zero-bead"], correctIndex: 0, explanation: "Lesson 2: the upper bead is the five-bead; the lower beads are one-beads.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "When does a one-bead count on its rod?", options: ["When pushed down off the beam", "When it is turned on the rod", "Always, wherever it sits", "When pushed up to the beam"], correctIndex: 3, explanation: "Lesson 2: only beads touching the beam count; a one-bead pushed up counts 1.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "How much is the five-bead worth when it touches the beam?", options: ["1", "5", "10", "50"], correctIndex: 1, explanation: "Lesson 2: it \"has five times the value of any other counter upon that rod.\"", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "What is a bead worth when it is as far from the beam as it can go?", options: ["Nothing", "Its full value", "Half its value", "Ten times more"], correctIndex: 0, explanation: "Lesson 2: \"When the counters are as far as possible from the dividing ridge they have no value.\"", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "How is 7 shown on a one-above, four-below rod?", options: ["Seven one-beads at the beam", "Two five-beads and one bead", "Five-bead and two one-beads", "Five-bead and three one-beads"], correctIndex: 2, explanation: "Lesson 2: 7 is always the five-bead and two one-beads, the only shape it can take.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "On Knott's five-below rods, which digit could be shown in two ways?", options: ["4", "5", "7", "9"], correctIndex: 1, explanation: "Lesson 2: five one-beads, or the five-bead, both made 5.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "How many rods does the 1959 Smithsonian soroban have?", options: ["13", "17", "21", "23"], correctIndex: 3, explanation: "Lesson 2: twenty-three rods, \"one bead above the cross piece and four below.\"", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "How are the columns of the 1959 Smithsonian soroban marked?", options: ["A dot every fifth", "A number on each", "A color every tenth", "A dot every third"], correctIndex: 3, explanation: "Lesson 2: \"Every third column of beads is marked with a black dot.\"", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "By Kojima's 1954 manual, how many rods does the common Japanese soroban have?", options: ["13", "21", "31", "9"], correctIndex: 1, explanation: "Lesson 2: Kojima gives 21 rods as the common size, with 13, 17, 27 and 31 also used.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "If you call a marked rod your ones rod, where do the next marks to its left fall?", options: ["Thousands, millions", "Tens and hundreds", "Tenths, hundredths", "Every other rod"], correctIndex: 0, explanation: "Lesson 2: with a dot every third rod, the marks fall where commas fall, at the thousands and millions.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "How many beads below the beam does the Tamura soroban of about 1885 have?", options: ["Four", "Six", "Five", "Two"], correctIndex: 2, explanation: "Lesson 2: \"one bead above the cross bar and five below,\" a match for Knott's count.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "Who used the Smithsonian's Tamura soroban, and when?", options: ["A merchant, 1840-1860", "A schoolboy, 1885-1897", "A banker, 1910-1920", "A soldier, 1941-1945"], correctIndex: 1, explanation: "Lesson 2: used by S. Tetsu Tamura \"as a schoolboy from 1885 to 1897.\"", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "What were the rods of the Tamura soroban made of?", options: ["Brass", "Ivory", "Steel", "Bamboo"], correctIndex: 3, explanation: "Lesson 2: \"13 parallel bamboo rods\" in the lid of a rosewood box.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "Which of these rod counts does Kojima NOT list among sorobans in use?", options: ["13", "17", "25", "31"], correctIndex: 2, explanation: "Lesson 2: Kojima lists 21 as common and 13, 17, 27 and 31 as also in use.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "How many one-beads does a rod of the soroban taught here carry?", options: ["Four", "Three", "Five", "Two"], correctIndex: 0, explanation: "Lesson 2: one bead above the beam and four below.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "On a one-above, four-below rod, how is the digit 4 shown?", options: ["Five-bead, one off", "Five-bead alone", "Four one-beads up", "Two beads each side"], correctIndex: 2, explanation: "Lesson 2: 0 to 4 one-beads join the five-bead or not; 4 is four one-beads with the five-bead off.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "Which part of a soroban carries the unit marks?", options: ["The beam", "The frame", "The beads", "The base"], correctIndex: 0, explanation: "Lesson 2: the dots sit on the beam (the cross piece), every third rod.", sourceLessonSlug: "anatomy-of-a-soroban" },
          { prompt: "On the soroban taught here, how many beads sit above the beam on each rod?", options: ["Two", "Four", "Five", "One"], correctIndex: 3, explanation: "Lesson 2: one bead above the beam (the five-bead) and four below.", sourceLessonSlug: "anatomy-of-a-soroban" },
          // Lesson 3
          { prompt: "In Knott's clearing method, which compartment is held uppermost when you tilt the frame?", options: ["The larger one", "The smaller one", "Neither; flat", "Both, in turn"], correctIndex: 1, explanation: "Lesson 3: tilt \"slightly with the smaller compartment uppermost.\"", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "After tilting, how does Knott move the upper beads away from the beam?", options: ["A sweep of the fingertips", "A shake of the whole frame", "One at a time with a pin", "A tap on the frame's end"], correctIndex: 0, explanation: "Lesson 3: \"By a sweep of the finger tips along the surfaces of the single counters.\"", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "When every bead is as far from the beam as it can go, what number does the soroban show?", options: ["Nine", "One", "Zero", "Five"], correctIndex: 2, explanation: "Lesson 3: \"The number represented is zero.\"", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "Why clear the soroban before every new problem?", options: ["It keeps the rods from rusting", "A stray bead is a wrong answer", "It sets the unit mark for you", "It warms up the finger joints"], correctIndex: 1, explanation: "Lesson 3: a single stray bead left at the beam is a wrong answer you cannot see coming.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "How do you set 5 on a cleared rod?", options: ["Push up five one-beads", "Push up four one-beads", "Move two upper beads", "Bring the five-bead down"], correctIndex: 3, explanation: "Lesson 3: for 5, the lower beads are clear and the five-bead comes down to the beam.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "How do you set 8 on a cleared rod?", options: ["Five-bead and four", "Eight one-beads up", "Five-bead and two", "Five-bead and three"], correctIndex: 3, explanation: "Lesson 3: leave the five-bead down and push up three one-beads: 5 + 3 = 8.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "In his figure, what mark does Knott put over the ones rod?", options: ["A dot", "A V", "A star", "An X"], correctIndex: 1, explanation: "Lesson 3: \"The mark V is placed over the 'units' rod.\"", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "On a modern soroban, how do you choose your ones rod?", options: ["Pick a marked rod mid-frame", "Always use the far right rod", "Always use the far left rod", "Use the rod with a red bead"], correctIndex: 0, explanation: "Lesson 3: pick a rod with a unit mark near the middle and call it your ones rod.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "Hundreds: five-bead and 2 up. Tens: nothing. Ones: five-bead and 1 up. What number is it?", options: ["726", "760", "706", "716"], correctIndex: 2, explanation: "Lesson 3: 7 hundreds, 0 tens, 6 ones is 706; the empty tens rod is the zero.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "How is 13 set on the tens and ones rods?", options: ["3 on tens; 1 on ones", "1 on tens; 3 on ones", "13 beads on the ones", "1 on ones; 3 on tens"], correctIndex: 1, explanation: "Lesson 3: one one-bead on the tens rod and three on the ones rod, a ten and three ones.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "How is 30 set on the tens and ones rods?", options: ["3 on ones; tens empty", "Five-bead on the tens", "30 beads on the ones", "3 on tens; ones empty"], correctIndex: 3, explanation: "Lesson 3: three one-beads on the tens rod and nothing on the ones rod.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "Why can a soroban never show more than 9 on the tens rod?", options: ["Tens rods have three beads", "Tens are shown in red", "The tenth ten is a hundred", "The beam blocks the tenth"], correctIndex: 2, explanation: "Lesson 3: the tenth ten has to become one hundred on the rod to the left.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "You set 7 on the tens rod, then the same 7 on the hundreds rod. How has its value changed?", options: ["Ten times larger", "Ten times smaller", "Two times larger", "It has not changed"], correctIndex: 0, explanation: "Lesson 3: 70 becomes 700; a bead is worth ten times the same bead on the rod to its right.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "Compared with the same bead on the ones rod, a bead on the tenths rod is worth what?", options: ["Ten times as much", "Exactly as much", "One tenth as much", "Half as much"], correctIndex: 2, explanation: "Lesson 3: a bead on the tenths rod is worth one tenth of the same bead on the ones rod.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "When reading a soroban aloud, what do you say for an empty rod between digits?", options: ["Zero", "Skip", "Ten", "Five"], correctIndex: 0, explanation: "Lesson 3: read from the left, saying \"zero\" for an empty rod between digits.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "What number does Smith and Mikami's 1914 illustration set on the soroban?", options: ["123,456,789", "111,111,111", "100,000,000", "987,654,321"], correctIndex: 3, explanation: "Lesson 3: units 1, tens 2, hundreds 3 and so on, reading 987,654,321.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "What number does the soroban in the research team's Figure 1 represent?", options: ["987,654,321", "123,456,789", "100,000,000", "999,999,999"], correctIndex: 1, explanation: "Lesson 3: a soroban \"representing the value 123,456,789.\"", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "On which rod do you put one bead to show 100?", options: ["The hundreds rod", "The tens rod", "The ones rod", "The tenths rod"], correctIndex: 0, explanation: "Lesson 3: one bead on the hundreds rod and two empty rods beside it.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "How is 10 set on the tens and ones rods?", options: ["10 beads on the ones", "Five-bead on ones, 5 up", "1 on tens; ones empty", "1 on ones; tens empty"], correctIndex: 2, explanation: "Lesson 3: one bead on the tens rod and the ones rod empty, ten ones gathered into a ten.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "A rod shows the five-bead down and four one-beads up. What digit is it?", options: ["4", "9", "8", "5"], correctIndex: 1, explanation: "Lesson 3: five plus four is 9, the most a rod can show.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "Which direction do you read a soroban's digits?", options: ["From the right", "From the center", "From the top", "From the left"], correctIndex: 3, explanation: "Lesson 3: read from the left, rod by rod, like a written number.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "On the soroban, what is the rod immediately to the right of the ones rod?", options: ["Tens", "Hundreds", "Hundredths", "Tenths"], correctIndex: 3, explanation: "Lesson 3: the rods to the right of the ones rod are tenths, then hundredths.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "A rod shows the five-bead down and one one-bead up. What digit is it?", options: ["1", "6", "4", "5"], correctIndex: 1, explanation: "Lesson 3: five plus one is 6.", sourceLessonSlug: "setting-clearing-reading" },
          { prompt: "To set 2 on a cleared rod, what do you move?", options: ["Two one-beads up", "The five-bead down", "Three one-beads up", "One one-bead up"], correctIndex: 0, explanation: "Lesson 3: push up one lower bead for 1, a second for 2.", sourceLessonSlug: "setting-clearing-reading" },
          // Lesson 4
          { prompt: "Which soroban does this course teach on?", options: ["Two above, five below", "One above, five below", "One above, four below", "Two above, four below"], correctIndex: 2, explanation: "Lesson 4: the drills assume the one-above, four-below soroban.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What does lesson 22 teach you to do with a Chinese suanpan?", options: ["Repair one", "Read one", "Build one", "Drill on one"], correctIndex: 1, explanation: "Lesson 4: the suanpan is a different instrument; lesson 22 teaches reading it, not calculating on it.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "About how many rods does Knott's 928 × 4173 need?", options: ["Seven", "Twenty", "Nine", "Eleven"], correctIndex: 3, explanation: "Lesson 4: three for 928, a gap, four for 4173, and at least three empty rods: eleven.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "How many empty rods does Knott leave to the right of the multiplicand?", options: ["At least one", "At least five", "At least three", "None at all"], correctIndex: 2, explanation: "Lesson 4: \"3 empty rods at least to the right of the multiplicand.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What rod count does lesson 4 suggest for room to work on roots?", options: ["Seventeen or more", "Nine or fewer", "Exactly thirteen", "Exactly eleven"], correctIndex: 0, explanation: "Lesson 4: thirteen rods do almost everything; seventeen or more gives room without crowding.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "Why did the 1959 Smithsonian donor put his soroban aside?", options: ["Its frame was cracked", "Its rods were too short", "Its beads were too small", "Its beads were too loose"], correctIndex: 2, explanation: "Lesson 4: \"the beads were too small for his seventy-year-old fingers and thumb.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What did the 1959 donor go back to for multiplication and division?", options: ["Logarithm tables", "A slide rule", "A suanpan", "A calculator"], correctIndex: 0, explanation: "Lesson 4: he put the soroban aside and returned to logarithm tables.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What did the 1959 donor find \"straightforward\" on the soroban?", options: ["Multiplying, dividing", "Square and cube roots", "Reading unit marks", "Adding and subtracting"], correctIndex: 3, explanation: "Lesson 4: he found addition and subtraction straightforward and bought a bigger one for the rest.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "How does the Smithsonian describe the beads of its 1958 Chinese abacus?", options: ["Pointed", "Rounded", "Square", "Hollow"], correctIndex: 1, explanation: "Lesson 4: \"The beads are rounded, as on other Chinese abaci.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "Which bead shape does lesson 4 recommend?", options: ["A sharp double cone", "A smooth round ball", "A flat square tile", "A long thin tube"], correctIndex: 0, explanation: "Lesson 4: the double cone is caught by the finger \"without slipping.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What spacing of unit marks does lesson 4 tell you to look for?", options: ["Every second rod", "Every fifth rod", "Every third rod", "Every rod"], correctIndex: 2, explanation: "Lesson 4: a dot on the beam every third rod, as on the 1959 Smithsonian soroban.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "Why does Knott level the frame before working?", options: ["So the beam stays clean", "So shifted beads stay put", "So the light falls evenly", "So the rods do not bend"], correctIndex: 1, explanation: "Lesson 4: so that a shifted counter has \"no tendency to move back to its former position.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What keeps the beads of the APH Cranmer abacus from slipping?", options: ["A locking lever", "Magnets in each bead", "Oiled steel rods", "Red felt backing"], correctIndex: 3, explanation: "Lesson 4: \"Red felt backing prevents beads from slipping.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "How does APH describe what the Cranmer abacus is designed to do?", options: ["Count beads aloud", "Light up each rod", "Clear with one push", "Keep beads where set"], correctIndex: 3, explanation: "Lesson 4: \"A specially designed abacus that keeps beads in position once they have been set.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What does lesson 4 conclude about a clearing bar?", options: ["Always worth buying", "Not recommended yet", "Required for drills", "Harmful to beads"], correctIndex: 1, explanation: "Lesson 4: no source read describes or tests one, so the lesson does not recommend it.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What was the 1946 champion's \"deluxe abacus\" reported to cost?", options: ["17 yen, about $1.13", "170 yen, about $11", "7 yen, about 50 cents", "1,700 yen, about $113"], correctIndex: 0, explanation: "Lesson 4: United Press reported \"17 yen, about $1.13.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What prewar price did United Press give for the electric calculator in the 1946 contest?", options: ["About $8", "About $80", "About $800", "About $8,000"], correctIndex: 2, explanation: "Lesson 4: the calculator \"had a prewar price of about $800.\"", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "What test does lesson 4 give for bead size?", options: ["Two beads per fingertip", "One fingertip, one bead", "A bead per fingernail", "Beads wider than a coin"], correctIndex: 1, explanation: "Lesson 4: check that your fingertip can move one bead without nudging its neighbor.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "Why might a soroban whose beads drift when tilted cause trouble?", options: ["It wears out the beam", "It hides the unit mark", "It makes the beads loud", "It changes your number"], correctIndex: 3, explanation: "Lesson 4: a soroban whose beads drift is quietly changing your number.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "Why does a five-below soroban still work but not suit these drills?", options: ["It cannot show 9", "It has no beam", "It shows 5 two ways", "It has no unit marks"], correctIndex: 2, explanation: "Lesson 4: a five-below soroban lets 5 be shown two ways, and the drills assume four below.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "Thirteen rods will do what, according to lesson 4?", options: ["Almost everything here", "Only the history part", "None of the drills", "Only additions"], correctIndex: 0, explanation: "Lesson 4: thirteen rods will do almost everything in this course.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "Which object is the source for the friction point in lesson 4's checklist?", options: ["Knott's 1885 soroban", "The Tamura soroban", "APH's Cranmer abacus", "The 1958 suanpan"], correctIndex: 2, explanation: "Lesson 4: the Cranmer abacus is built to keep beads in position once set.", sourceLessonSlug: "what-to-look-for-buying-one" },
          { prompt: "Why does lesson 4 list beads that stay put as a feature for sighted learners too?", options: ["Drifting beads change the number", "Felt makes the beads easier to see", "Stiff beads make quicker drills", "Loose beads damage the beam"], correctIndex: 0, explanation: "Lesson 4: firm, even friction keeps a set number from quietly changing, the Cranmer idea in a milder form.", sourceLessonSlug: "what-to-look-for-buying-one" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Adding and subtracting
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "adding-and-the-five-complement",
      title: "5 · Adding without carrying, and the five-complement",
      section: "2 · Adding and subtracting",
      recallContent: [
        {
          prompt: "Why does lesson 4 say Knott's 928 × 4173 needs about eleven rods?",
          answer: "Three rods for 928, a gap, four for 4173, and at least three empty rods to the right of the multiplicand.",
        },
        {
          prompt: "What did the 1959 Smithsonian donor's experience teach about bead size?",
          answer: "Check that one fingertip moves one bead: his beads were too small for his seventy-year-old fingers, and he went back to logarithm tables.",
        },
      ],
      body: `${P("BAM working 2 + 2, 4 + 3, 1 + 4 and 342 + 213 on camera, saying each move aloud")}

**Adding is setting, on top.** Knott calls addition and subtraction "self-evident," and Smith and Mikami show why: "To add two numbers we have only to set down the first ... and then set down the second upon it." You never write the first number down or hold it in your head. It is already on the beads, and the second number is added rod by rod, each digit to its own place.

**When the beads are there, just push them.** Smith and Mikami's first example: "to add 2 and 2, we put 2 balls at the top of the column and then 2 more, making 4." On a cleared ones rod, push up two one-beads, then two more. Most additions on a single rod are this simple: the beads you need are sitting below the beam waiting.

**Rod by rod, left to right.** Add 1,231 and 3,415. Set 1,231. Then go along the rods from the left: thousands, push up 3 (1 + 3 = 4); hundreds, push up 4 (2 + 4 = 6); tens, push up 1 (3 + 1 = 4); ones, the rod shows 1 and you need 5 more, so bring the five-bead down (1 + 5 = 6). The soroban reads **4,646**. No rod ever needed more beads than it had, so nothing had to change on its neighbor.

**When the beads are not there: the five-complement.** Smith and Mikami's next example is 4 and 3. Set 4: all four one-beads are up. Now there is no one-bead left to push. On the soroban taught here the move is: bring the five-bead down, which adds 5, and push two one-beads away, which takes off 2. Five minus two is three, so you have added 3. The rod shows the five-bead and two one-beads: **7**. Smith and Mikami describe the same result on their older five-bead soroban, "leaving the five-ball and 2 unit balls."

**The pairs that make five.** The number you take away is the one that makes 5 with the number you are adding. This course calls it the **five-complement**:

| To add | Bring down | Take away | Because |
|---|---|---|---|
| 1 | the five-bead | 4 one-beads | 5 - 4 = 1 |
| 2 | the five-bead | 3 one-beads | 5 - 3 = 2 |
| 3 | the five-bead | 2 one-beads | 5 - 2 = 3 |
| 4 | the five-bead | 1 one-bead | 5 - 1 = 4 |

Use it only when the five-bead is up (away from the beam) and there are not enough one-beads below to push. Try 1 + 4: the rod shows 1, three beads below, and you need four. Bring down the five-bead and take away one: **5**. And 3 + 4: bring down the five-bead, take away one, and the rod shows the five-bead and two one-beads, **7**.

**A whole number with no carrying.** Add 342 and 213. Set 342. Hundreds: the rod shows 3 and you need 2 more, but only one bead is below; bring down the five-bead and take away three (the complement of 2): the rod shows **5**. Tens: the rod shows 4 and you need 1, with no bead below; bring down the five-bead and take away four: **5**. Ones: the rod shows 2 and you need 3, with two beads below; bring down the five-bead and take away two: **5**. The answer is **555**, and every rod stayed under ten, so no neighbor was touched.

**Why it works, in one line.** The five-bead stands for five one-beads that the rod has no room for. Adding five and taking away the complement is just adding the number in two pieces, and the rod's total is the same either way.

**What comes next.** When a rod would go past 9, the five-bead is not enough; you need the rod to its left. That is the ten-complement, the move Knott built his whole explanation on, and it is lesson 6.

:::reveal The ones rod shows 4. How do you add 3? ||| Bring the five-bead down (add 5) and push two one-beads away (take off 2). The rod shows the five-bead and two one-beads: 7.

:::reveal Why is 342 + 213 = 555 done without touching any neighboring rod? ||| Every rod's sum stays at 9 or under (each is exactly 5), so each digit is added on its own rod with the five-complement where needed.

## Sources
- ${KNOTT} Locator: p. 49 (PDF p. 72), "The operations of addition and subtraction are self-evident." ${TA}
- ${SMITH_MIKAMI} Locator: p. 36 (PDF p. 48), "set down the first ... and then set down the second upon it", 2 and 2, 2 and 3, and the start of 4 and 3; p. 37 (PDF p. 49), the end of 4 and 3, "leaving the five-ball and 2 unit balls". ${TA}`,
    },
    {
      slug: "the-ten-complement",
      title: "6 · The ten-complement: carrying to the next rod",
      section: "2 · Adding and subtracting",
      recallContent: [
        {
          prompt: "The ones rod shows 4. How do you add 3 on a one-above, four-below soroban?",
          answer: "Bring the five-bead down (add 5) and push two one-beads away (take off 2): the rod shows 7.",
        },
        {
          prompt: "What is the five-complement of 2, and when do you use it?",
          answer: "3, because 2 and 3 make 5. Use it when the five-bead is up and there are not enough one-beads below to push.",
        },
      ],
      body: `${P("BAM working 7 + 6, 8 + 6, 6 + 7 and 95 + 7 on camera, naming each complement as he moves it")}

**When one rod is not enough.** A rod holds 9 at most. Add 6 to a rod showing 7 and the answer, 13, will not fit. Knott's rule, the heart of his whole account, says what to do: if a number cannot be added on a rod, "it is necessary simply to add ... one to ... the next higher place and subtract ... the complementary number from ... the place in question." He defines the complementary number as "the number which with the given number makes up 10."

**The pairs that make ten.** This course calls it the **ten-complement**:

| Number | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Ten-complement | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |

**7 + 6.** The ones rod shows 7 (the five-bead and two one-beads). You cannot add 6 there. So push up **one bead on the tens rod** (that adds 10) and **take 4 off the ones rod** (4 is the ten-complement of 6). Seven take away four is three, so the ones rod shows 3 and the tens rod shows 1: **13**. You added 10 and took off 4, which is adding 6. Smith and Mikami reach the same 13 on their older five-bead soroban, ending with "1 ten and 3 units."

**This is "making ten."** First-grade arithmetic in the Common Core standards teaches the same idea in writing, as "making ten (e.g., 8 + 6 = 8 + 2 + 4 = 10 + 4 = 14)." Work 8 + 6 on the beads: the ones rod shows 8; take off 4 (the complement of 6) and push up one ten. The rod now shows 4 and the tens rod 1, so 8 + 6 = 10 + 4 = 14. The written strategy and the bead move build the same ten and leave the same 4 ones. The soroban simply does it from the other side: instead of splitting the 6 into 2 and 4, it adds 10 and takes back 4.

**Why it always works.** Every digit and its ten-complement add to 10, so adding 10 on the next rod and taking off the complement adds exactly the digit. The total on the frame is the same as if the rod could hold the whole sum; the extra ten has simply moved to the place where tens belong. That is place value doing the work, and it is why Knott says the operations need "no mental labour beyond that of remembering the complementary number."

**When taking off the complement needs the five-bead.** Try 6 + 7. The ones rod shows 6 (the five-bead and one one-bead). The complement of 7 is 3, but there is only one one-bead to take off. So take off the five-bead and push up two one-beads instead (taking 5 and giving back 2 takes off 3): the ones rod shows 3. Then push up one bead on the tens rod: **13**. The five-complement from lesson 5 works inside the ten-complement whenever the rod needs it.

**When the carry carries.** Try 95 + 7. The ones rod shows 5, and you cannot add 7: take off its complement, 3 (take off the five-bead, push up two one-beads, as above), and add one to the tens rod. But the tens rod shows 9 and cannot take 1. Apply the same rule there: add one to the hundreds rod and take off 9 (the complement of 1) from the tens. The soroban reads **102**. Each step looked at one rod and its left-hand neighbor, and nothing was held in your head.

**What you see, and what you do not.** Knott notes that "A glance at the configuration on any rod is sufficient to show if the addition ... of a named number can be effected on it." Look at the rod, then either push the beads or use a complement. Lesson 9 comes back to the one thing this costs: the first number disappears as you add to it.

:::reveal The ones rod shows 7. How do you add 6 with the ten-complement? ||| Push up one bead on the tens rod (add 10) and take 4 off the ones rod (the complement of 6). The rods show 1 and 3: 13.

:::reveal Why does adding 10 on the next rod and taking off the complement always add the right amount? ||| Because a digit and its ten-complement make 10: 10 minus the complement is the digit.

## Sources
- ${KNOTT} Locator: pp. 49 to 50 (PDF pp. 72 to 73), "no mental labour beyond that of remembering the complementary number", its definition, "A glance at the configuration on any rod", and the rule to add one to the next higher place and subtract the complementary number. ${TA}
- ${SMITH_MIKAMI} Locator: p. 37 (PDF p. 49), adding 7 and 6 to make "1 ten and 3 units". ${TA}
- Common Core State Standards Initiative. (2010). *Common Core State Standards for mathematics*. https://corestandards.org/wp-content/uploads/2023/09/Math_Standards1.pdf Locator: p. 15, standard 1.OA.6, "making ten (e.g., 8 + 6 = 8 + 2 + 4 = 10 + 4 = 14)". ${TB}`,
    },
    // @@END_LESSONS@@
  ],
};
