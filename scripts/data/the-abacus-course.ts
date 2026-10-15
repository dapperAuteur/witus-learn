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
    // @@END_LESSONS@@
  ],
};
