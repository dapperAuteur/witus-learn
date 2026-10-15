import type { AuthoredCourse } from "./authored-course";

// "Surveying: How Land Gets Measured" (Science & Math). Slug `surveying-how-land-gets-measured`.
// Series `tools-that-think` ("Tools That Think"), code TOOLS, position 03. TOOLS-01 is the
// map-and-compass course and TOOLS-02 the slide-rule course, both built in parallel branches; this
// course names them in prose rather than linking a slug that may still change. TOOLS-04 is its
// companion, `reading-a-land-description` (the PLSS grid, metes and bounds and the deed, Indiana).
//
// RESEARCH TIER 2 (docs/course-method/README.md): boundary-adjacent practice of a licensed profession.
// Brief:   plans/future-courses/science-and-math/tool-usage/2026-10-14-surveying-brief.md, approved by
//          BAM 2026-10-14 with his decision to SPLIT it (answer 1): this course is the brief's sections 1
//          to 4 (distance, direction, elevation, area) with its own section 0; the brief's sections 5 to 7
//          became TOOLS-04. His answer 2 added lesson 3 (what to look for in each tool). Answer 4: host
//          the public-domain scans and link them; Google-digitized scans go to BAM's private library only.
//          Every source below links the public, non-Google copy.
//
// VISIBILITY: PUBLIC and FREE, HELD ("Coming soon") until a licensed land surveyor (to be named) has
// read every lesson marked QR with authority to change or cut it, and BAM has filmed the lessons marked
// P. The publishHoldReason in scripts/seed-courses.ts says so.
//
// WHAT IT IS NOT, stated in the description and in lesson 2: a surveying qualification, or a way to
// find a property line. It teaches the compass as the tool that made the old records, because the 2009
// Manual prohibits the needle compass on official surveys (sec. 2-4).
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (licensed land surveyor, to be named): 2 (the limits of the course and the legal-survey
//     definition) and 14 (the federal penalty for disturbing a survey mark).
//   P (BAM's demonstration with the tool): 3, 4, 5, 6, 7, 8, 10, 12, 13, 17.
//   Unmarked: 1, 9, 11, 15, 16.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, free to host: the 2009 Manual, White's history and the 2017 Specifications (BLM, federal
//    works); 74 FR 48776; the NIST, USGS, NCEI and NOAA pages; Breed and Hosmer, 3rd ed., 1912 printing
//    (Internet Archive's own scan of the Southern Methodist University copy, principlespracti0001char_w1m0,
//    not a Google scan) and Gillespie, 8th ed., 1883 (Cornell University Library scan,
//    cu31924003646159, MSN-sponsored, not a Google scan), both published before 1929.
//    The Google scans the brief first read (principlesandpr02hosmgoog, Breed and Hosmer 1908;
//    atreatiseonland00gillgoog, Gillespie 1855) go to BAM's private library and are never linked here.
//    Page numbers were checked in the non-Google scans: the passages cited fall on the same printed
//    pages the brief recorded from the Google copies.
//  - Tier B, link only: Dracup's NGS history (author's federal-work status unsettled), the Boone County
//    surveyor's page, and Starkey (1956).
//  - Breed and Hosmer's sample deed names private people; it is not used in this course.
//  - FIGURES: none embedded yet. Breed and Hosmer's Fig. 2 (chaining), Fig. 4 (reading bearings),
//    Fig. 43 (differential leveling) and Fig. 196 (the polar planimeter) are cited by number and page.
//
// STANDARDS: CCSS.Math.Content.HSN-Q.A.3 (choose a level of accuracy appropriate to limitations on
// measurement), through claim `catalog.surveying-measurement-accuracy`. Not claimed: HSG.SRT.C.8 and
// HSG.GPE.B.7, which lessons 8 and 16 touch, because they ask the learner to PRODUCE a computed answer
// and this platform cannot yet grade one (src/lib/standards/shared/common-core-math.ts).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts):
//  - L9: what the NCEI historic calculator gives for Vincennes in 1804, against Mansfield's 6° 45' E.
//    The lesson is built as the exercise and states no answer.
//  - L14: which current NGS tool a learner should use to look up a mark's datasheet.
//
// House style, matching stage-and-broadcast-rigging-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the lesson
// before; an APA 7 `## Sources` block on every teaching lesson with a locator (printed page AND PDF page
// where they differ, section, paragraph) and a hosting tier on every entry; a quiz per section pooled to
// round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled; a final pooling 40+ serving 10,
// placed last. Every question's four options sit within one visible length margin of each other, so no
// length position wins. American spelling in prose; quotations keep their own spelling. No em or en
// dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const MANUAL =
  "Bureau of Land Management. (2009). *Manual of surveying instructions: For the survey of the public lands of the United States*. U.S. Department of the Interior. https://www.blm.gov/sites/default/files/Manual_Of_Surveying_Instructions_2009.pdf";
const WHITE =
  "White, C. A. (1983, second printing 1991). *A history of the rectangular survey system*. Bureau of Land Management. https://www.blm.gov/sites/default/files/histrect.pdf";
const BH =
  "Breed, C. B., & Hosmer, G. L. (1912). *The principles and practice of surveying: Vol. 1. Elementary surveying* (3rd ed.; copyright 1906, 1908). John Wiley & Sons. https://archive.org/details/principlespracti0001char_w1m0";
const GILLESPIE =
  "Gillespie, W. M. (1883). *A treatise on land-surveying* (8th ed.). D. Appleton and Company. https://archive.org/details/cu31924003646159";
const FR_2009 =
  "Bureau of Land Management. (2009, September 24). Cadastral survey: Notice of availability of the next edition of the Manual of Surveying Instructions. *Federal Register, 74*(184), 48776-48777. https://www.federalregister.gov/documents/2009/09/24/E9-23216/cadastral-survey-notice-of-availability-of-the-next-edition-of-the-manual-of-surveying-instructions";
const NIST_FOOT =
  "National Institute of Standards and Technology. (n.d.). *Putting the best \"foot\" forward: Ending the era of the U.S. survey foot (1959 to 2022)*. https://www.nist.gov/pml/us-surveyfoot";
const USGS_FAQ =
  "U.S. Geological Survey. (2025, January 14). *Are the Public Land Survey System (PLSS) section lines on US Topo maps a legal record?* https://www.usgs.gov/faqs/are-plss-section-lines-us-topo-maps-a-legal-record";
const NCEI =
  "National Centers for Environmental Information. (2009). *US historic declination calculator* [Metadata record]. National Oceanic and Atmospheric Administration. https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ngdc.mgg.geophysical_models:US_Historic_Declination_Calculator/html";
const DRACUP =
  "Dracup, J. F. (n.d.). *Geodetic surveys in the United States: The beginning and the next one hundred years, 1807-1940*. National Geodetic Survey. https://www.ngs.noaa.gov/PUBS_LIB/geodetic_survey_1807.html";
const NOAA_MARKS =
  "National Oceanic and Atmospheric Administration. (n.d.). *Survey mark hunting* [Classroom activity, Discover Your World With NOAA, pp. 93-95]. https://www.nauticalcharts.noaa.gov/learn/docs/educational-activities/survey-mark-hunting.pdf";
const BOONE =
  "Boone County, Indiana, Surveyor's Office. (n.d.). *Surveyor's responsibilities*. https://boonecounty.in.gov/offices/surveyor/surveyor-responsibilities";
const STARKEY =
  "Starkey, O. P. (1957). Road patterns of Indiana. *Proceedings of the Indiana Academy of Science, 66*, 192-194 (volume dated 1956). https://journals.indianapolis.iu.edu/index.php/ias/article/download/6447/6472/12578";

const TIER_A = "Tier A, free to host (U.S. federal work).";
const TIER_A_PD = "Tier A, free to host (published before 1929; non-Google scan).";
const TIER_B = "Tier B, link only.";

/** The marker every lesson needing a qualified reviewer opens with. */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;
/** The marker every lesson needing BAM's demonstration opens with. */
const P = (what: string) => `> **Before release:** needs a practitioner or BAM's demonstration: ${what}.`;

const SURVEYOR = "a licensed land surveyor, to be named";

export const SURVEYING_HOW_LAND_GETS_MEASURED_COURSE: AuthoredCourse = {
  title: "Surveying: How Land Gets Measured",
  description:
    "Measure land by hand the way the public land surveys were made. Pace a line and calibrate your own step; run a line with a Gunter's chain of 66 feet and 100 links; take a bearing with a surveyor's compass, correct it for magnetic declination, and catch local attraction by sighting from both ends; run a level line from backsights and foresights; and compute an area from chains, from the coordinates of the corners, and with a polar planimeter. Every method is taught from the federal Manual of Surveying Instructions and two public-domain surveying textbooks, with the history of how the first lines were run in Ohio and Indiana and what went wrong with them. A lesson on what to look for in each tool comes first. It does not make anyone a surveyor and never tells a learner where a property line is: reading land descriptions, and the law that grew around the old corners, is the companion course, Reading a Land Description. The third course in the Tools That Think series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 0: Before you measure
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-survey-is",
      title: "1 · What a survey is",
      section: "0 · Before you measure",
      body: `**What this course is for.** By the end you should be able to measure a distance by pacing and by chaining, take a compass bearing and correct it, run a level line, and compute an area three ways, and to say how far each result can be trusted. Those are the jobs the old surveyors did by hand, and this course teaches them with the same tools.

**A definition from 1912.** Breed and Hosmer's surveying textbook opens: "Surveying is the art of measuring and locating lines and angles on the surface of the earth." When the area is small enough that the earth's curvature "may be safely neglected", the work is plane surveying; a survey of a state or a country, where curvature counts, is geodetic surveying. Surveys are made for "the determination of areas, the fixing of boundary lines, and the plotting of maps", and for engineering work of every kind.

**Every length is horizontal.** "In surveying, all measurements of lengths are horizontal or else are subsequently reduced to horizontal distances." A map shows the horizontal projection of a line, never its length along the ground. The federal Manual of Surveying Instructions says the same for the public lands: distances are "horizontal measure in chains" (sec. 2-6). Lesson 6 shows what that costs on a hill.

**Why the government cared.** In 1785 the Confederation Congress decided that western land would be surveyed before it was sold. The Bureau of Land Management's notice of the 2009 Manual says the system it created "has formed the framework for all land title, both public and private, in all States except those formed from the territory of the original 13 colonies, Texas, and Hawaii." So these measurements are how most of the country's land was first described. The law that grew around them, including why the original corners stand even where the chain was wrong, is the subject of the companion course, *Reading a Land Description*. This course keeps to the measuring.

**Tools That Think.** This is the third course in the series. The series' map-and-compass course teaches the baseplate compass, azimuths and a pace count for finding your way; its slide-rule course teaches computing by hand. This course takes the compass and the pace somewhere else: to the surveyor's compass, quadrant bearings and local attraction, with pacing as the rough check on a chain. Section 4's arithmetic can be worked on a slide rule.

**How to read this course.** Each lesson ends with where its facts come from, page by page, and says whether you can open the source free. A box that begins "Before release" at the top of a lesson means it is waiting on someone: a licensed land surveyor's read, or BAM's own demonstration with the tool.

:::reveal Why is a length measured along a slope not yet a survey distance? ||| Survey lengths "are horizontal or else are subsequently reduced to horizontal distances" (Breed and Hosmer, sec. 3), and the Manual reports distances as horizontal measure (sec. 2-6).

:::reveal What separates plane surveying from geodetic surveying? ||| Whether the earth's curvature can be "safely neglected" over the area surveyed. A state or a country needs geodetic surveying.

## Sources
- ${BH} Locator: chap. I, secs. 1 to 3, p. 3 (scan p. 29). ${TIER_A_PD}
- ${MANUAL} Locator: sec. 2-6, p. 28 (PDF p. 39). ${TIER_A}
- ${FR_2009} Locator: "Supplementary Information", "Background", first paragraph, 74 FR 48776. ${TIER_A}`,
    },
    {
      slug: "the-tools-and-the-limits",
      title: "2 · The tools, and what this course will not make you",
      section: "0 · Before you measure",
      recallContent: [
        {
          prompt: "How do Breed and Hosmer define surveying?",
          answer: "\"Surveying is the art of measuring and locating lines and angles on the surface of the earth.\"",
        },
        {
          prompt: "How are survey distances reported, on a slope or on the level?",
          answer: "As horizontal distances: lengths \"are horizontal or else are subsequently reduced to horizontal distances.\"",
        },
      ],
      body: `${QR(`${SURVEYOR}, to check the course's stated limits and the legal-survey definition`)}

**The kit.** Five tools carry this course: a chain and its pins for distance, a surveyor's compass for direction, a level and a rod for height, and a polar planimeter for area. Your own legs are the sixth, because pacing is the rough check on everything else. Lesson 3 says what to look for in each.

**Old tools, placed honestly.** The Manual lists the instruments the public lands have been surveyed with: "the magnetic needle, solar compass, transit with solar attachment, and direct altitude or hour angle observations on the Sun, Polaris, or other stars." Then it adds: "Only the use of the needle compass is unequivocally prohibited" (sec. 2-4). The compass in this course is the tool that made the old records, not the tool that settles a line today. Lesson 11 explains why.

**What this course will not make you.**

1. **Not a surveyor.** Surveying is a licensed profession. The Boone County, Indiana, surveyor's office defines a legal survey as "a survey prepared by a registered land surveyor with notice to all adjoining landowners".
2. **Not a judge of your own property line.** This course never tells anyone where a line is. A chain and a compass in your yard produce a measurement, not a boundary.
3. **Not a reader of boundaries off a map.** The section lines printed on a U.S. Geological Survey topographic map are not a legal record: "US Topo maps are not legal documents and the Public Land Survey System (PLSS) representation is not legally authoritative."

**What it will make you.** Someone who can measure a line, a direction, a rise and an area by hand, say how far to trust each number, and read an old survey record knowing how it was made. *Reading a Land Description* builds on that last skill.

**Courtesy and the law in the field.** Measure on public land where walking is allowed, or on land whose owner has said yes. Federal law protects survey marks: whoever "willfully destroys, defaces, changes, or removes to another place any section corner", or "willfully defaces, changes or removes any monument or bench mark of any Government survey, shall be fined under this title or imprisoned not more than six months, or both" (18 U.S.C. 1858, quoted in the Manual, sec. 4-2). Look, photograph, never move. Lesson 14 comes back to it.

:::reveal Which historical direction instrument does the 2009 Manual prohibit outright? ||| The needle compass: "Only the use of the needle compass is unequivocally prohibited" (sec. 2-4).

:::reveal Can a section line on a USGS topographic map settle where a property line runs? ||| No. The USGS says the PLSS shown on US Topo maps "is not legally authoritative."

## Sources
- ${MANUAL} Locator: sec. 2-4, p. 28 (PDF p. 39); sec. 4-2, p. 105 (PDF p. 116). ${TIER_A}
- ${USGS_FAQ} Locator: the answer, first sentence. ${TIER_A}
- ${BOONE} Locator: "Legal Survey Book". ${TIER_B}`,
    },
    {
      slug: "what-to-look-for-in-each-tool",
      title: "3 · What to look for in each tool",
      section: "0 · Before you measure",
      recallContent: [
        {
          prompt: "Which direction instrument does the 2009 Manual unequivocally prohibit?",
          answer: "The needle compass (sec. 2-4).",
        },
        {
          prompt: "How does the Boone County surveyor's office define a legal survey?",
          answer: "\"A survey prepared by a registered land surveyor with notice to all adjoining landowners\".",
        },
      ],
      body: `${P("BAM's own chain and pins, surveyor's compass, level and rod, and polar planimeter, each shown feature by feature on camera once he has acquired them")}

**Why a features lesson.** A tool bought blind can teach the wrong habit: a chain that has stretched, a needle that sticks, a rod that leans. Every check below comes from Breed and Hosmer's 1912 textbook, written for students, so each is something you can see or test yourself. This lesson recommends no brand and quotes no price.

**The chain.**
- **Length and divisions.** A surveyor's (Gunter's) chain is 66 feet of 100 links; an engineer's chain is 100 feet of 100 one-foot links (sec. 4). Know which you have before you record a number.
- **Tags.** On the engineer's chain "every tenth link counting from either end is marked by a brass tag having one, two, three, or four points", with a round tag at the middle, so the 10-foot and 90-foot points look alike and you must note which side of the middle a reading falls on.
- **A way to adjust it.** Chains lengthen with wear, so a chain "should be frequently compared with a standard of length", and a nut at the handle lets the end link be lengthened or shortened.
- **Eleven pins.** Chaining takes "a set of eleven steel marking pins" (sec. 10).
- **A steel tape instead?** Steel varies "a slight amount in length with the temperature and with the pull", and the variation can be worked out (sec. 6).

**The surveyor's compass** (sec. 24).
- A circle "graduated to degrees and half-degrees, and numbered from two opposite zero points each way to 90°", N and S at the zeros, E and W at the 90s.
- "two vertical sights", lined up with the zero points.
- "two spirit levels at right angles to each other", and a ball-and-socket joint on the tripod.
- A screw that lifts the needle off its pivot. "The needle should always be raised when the compass is lifted or carried", because "a dull pivot-point is a fruitful source of error."
- E and W reversed on the box. That is correct: the box turns under the needle, so the reversal makes the reading name the right quadrant (sec. 26).
- A straight needle on a centered pivot. If the two ends do not read 180° apart, the needle is bent, the pivot is off center, or both (sec. 34). Read both ends in several directions to tell which.

**The level and the rod.** The bubble must stay centered as the telescope turns, and the rod must be readable and held upright: "It is extremely important that the rod be held plumb" (sec. 113).

**The planimeter.** Breed and Hosmer's polar planimeter has an anchor arm "of fixed length" held by "a needle point" and a weight, a tracing arm that slides through a collar so its length can be set to the map's scale, a tracing point, a graduated wheel, a small disk that counts the wheel's full turns, and a vernier. "The result of reading the disk, the wheel, and its vernier will usually give four figures" (Appendix B).

**Before you buy anything old,** check the chain against a known length and read the compass needle at both ends. Lessons 5, 10 and 17 show why each check matters.

:::reveal Why are E and W reversed on a surveyor's compass box? ||| The needle stands still and the box turns under it, so the reversal makes the reading name the correct quadrant (Breed and Hosmer, sec. 26).

:::reveal The two ends of a compass needle read 1° short of 180° apart in every direction you turn. What does that point to? ||| A bent needle on a centered pivot. If the difference changed as the compass turned, the pivot would be off center (sec. 34).

## Sources
- ${BH} Locator: secs. 4, 6 and 10, pp. 3 to 7 (scan pp. 29 to 33); secs. 24 and 26, pp. 16 to 19 (scan pp. 42 to 45); sec. 34, pp. 25 to 26 (scan pp. 51 to 52); sec. 113, p. 84 (scan p. 110); Appendix B, pp. 533 to 534 (scan pp. 573 to 574). ${TIER_A_PD}`,
    },
    {
      slug: "section-0-quiz",
      title: "Section 0 quiz · Before you measure",
      section: "0 · Before you measure",
      body: "A graded check on what surveying is, the course's tools and limits, and what to look for in each tool. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How do Breed and Hosmer define surveying?", options: ["The art of measuring and locating lines and angles on the earth", "The art of drawing maps from the reports of travelers and pilots", "The science of dividing land into lots of equal area for sale", "The practice of settling disputes between neighbors over fences"], correctIndex: 0, explanation: "Breed and Hosmer, sec. 1: \"Surveying is the art of measuring and locating lines and angles on the surface of the earth.\"", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "When may a survey be treated as plane surveying?", options: ["When every line is run on the magnetic meridian alone", "When the earth's curvature may be safely neglected", "When the land surveyed is flat and has no hills on it", "When the survey covers a whole state or a country"], correctIndex: 1, explanation: "Plane surveying is a survey \"of such limited extent that the effect of the earth's curvature may be safely neglected.\" Flat ground has nothing to do with it; a state-wide survey is geodetic.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "What kind of survey must account for the earth's curvature?", options: ["Plane surveying", "Compass surveying", "Geodetic surveying", "Pace surveying"], correctIndex: 2, explanation: "When a survey is so large that curvature must be taken into account, such as the survey of a state or a country, \"it is called Geodetic Surveying.\"", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "Which of these do Breed and Hosmer NOT list among the purposes of surveys?", options: ["Determining areas", "Fixing boundary lines", "Plotting maps", "Setting land prices"], correctIndex: 3, explanation: "Surveys are made for \"the determination of areas, the fixing of boundary lines, and the plotting of maps\", and for engineering work. Pricing land is not on the list.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "How are lengths recorded in surveying?", options: ["As horizontal distances, or reduced to them", "As distances along the ground surface itself", "As slope distances with the angle written in", "As straight-line distances through the earth"], correctIndex: 0, explanation: "\"In surveying, all measurements of lengths are horizontal or else are subsequently reduced to horizontal distances.\"", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "What does a map show of a line that runs over a hill?", options: ["Its length along the ground", "Its horizontal projection", "Its length along the slope", "Its length plus the climb"], correctIndex: 1, explanation: "\"The distance between two points as shown on a map then is always this horizontal projection.\"", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "How does the 2009 Manual report distances on the public lands?", options: ["Slope measure in chains", "Horizontal measure in rods", "Horizontal measure in chains", "Slope measure in meters"], correctIndex: 2, explanation: "Manual sec. 2-6: the primary basis for reporting distances in the PLSS is \"horizontal measure in chains.\"", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "In what year did the Confederation Congress establish the Public Land Survey System?", options: ["1776", "1785", "1787", "1803"], correctIndex: 1, explanation: "The BLM's 2009 notice: \"The Congress of the Confederation established the Public Land Survey System (PLSS) in 1785.\"", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "The BLM says the PLSS is the framework for land title in every state except which?", options: ["The states that sit along the Atlantic or Pacific", "The states west of the Mississippi River and Alaska", "The states admitted to the Union after the Civil War", "The 13 original colonies' states, Texas and Hawaii"], correctIndex: 3, explanation: "74 FR 48776: the PLSS \"has formed the framework for all land title, both public and private, in all States except those formed from the territory of the original 13 colonies, Texas, and Hawaii.\"", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "What did Congress decide in 1785 about western land?", options: ["It would be surveyed before it was sold", "It would be sold first and surveyed later", "It would be granted free to any settler", "It would be leased but never sold outright"], correctIndex: 0, explanation: "Lesson 1: in 1785 the Confederation Congress decided that western land would be surveyed before it was sold.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "Which companion course takes up the law that grew around the old corners?", options: ["The slide-rule course", "The map-and-compass course", "Reading a Land Description", "None; it is not taught"], correctIndex: 2, explanation: "The law, including why the original corners stand even where the chain was wrong, is the subject of the companion course, Reading a Land Description.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "How does this course use pacing, compared with the series' map-and-compass course?", options: ["As the rough check on a chain", "As the main way to find a route", "As a way to set a legal corner", "As a substitute for the compass"], correctIndex: 0, explanation: "The map-and-compass course uses a pace count for finding your way; this course uses pacing as the rough check on a chain.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "What does lesson 1 say section 4's arithmetic can be worked on?", options: ["A sextant", "A slide rule", "A pocket compass", "A level rod"], correctIndex: 1, explanation: "\"Section 4's arithmetic can be worked on a slide rule\", the subject of the series' second course.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "What does a \"Before release\" box at the top of a lesson mean?", options: ["It holds the graded quiz that the section requires", "It may be skipped by learners who own the tools", "It was written and signed by a licensed surveyor", "It waits on a surveyor's read or BAM's demonstration"], correctIndex: 3, explanation: "The box means the lesson is waiting on someone: a licensed land surveyor's read, or BAM's own demonstration with the tool.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "Besides the source itself, what does every lesson's Sources block tell you?", options: ["Where in it to look, and whether you can open it free", "How much the book costs and where to buy a copy of it", "Which reviewer approved it and on what date they did", "How many other courses in the catalog cite it as well"], correctIndex: 0, explanation: "Each lesson ends with where its facts come from, page by page, and says whether you can open the source free.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "What does the series' map-and-compass course teach that this course does not?", options: ["The surveyor's compass and quadrant bearings for lines", "The baseplate compass and azimuths for finding your way", "Local attraction and how to sight from both line ends", "Pacing as the rough check on a chain's measured line"], correctIndex: 1, explanation: "The map-and-compass course teaches the baseplate compass, azimuths and a pace count for finding your way. Quadrant bearings, local attraction and pacing as a check on the chain belong to this course.", sourceLessonSlug: "what-a-survey-is" },
          { prompt: "Which tool does this course use to measure area from a plat?", options: ["A polar planimeter", "A surveyor's compass", "A level and rod", "A steel tape measure"], correctIndex: 0, explanation: "Lesson 2: a chain and pins for distance, a surveyor's compass for direction, a level and rod for height, and a polar planimeter for area.", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "What does lesson 2 call the rough check on everything else?", options: ["Leveling", "Chaining", "Pacing", "Sighting"], correctIndex: 2, explanation: "\"Your own legs are the sixth, because pacing is the rough check on everything else.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "Which instruments does the Manual list among those the public lands were surveyed with?", options: ["Magnetic needle, solar compass, solar transit", "Laser scanner, drone camera, and a sonar unit", "Plane table, sextant, and a ship's log reel", "Pedometer, odometer, and a surveyor's wheel"], correctIndex: 0, explanation: "Manual sec. 2-4: historically \"the magnetic needle, solar compass, transit with solar attachment, and direct altitude or hour angle observations on the Sun, Polaris, or other stars.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "What does the 2009 Manual say about the needle compass?", options: ["It is preferred for retracing lines", "Its use is unequivocally prohibited", "It is allowed only on short lines", "It must be checked against a level"], correctIndex: 1, explanation: "Manual sec. 2-4: \"Only the use of the needle compass is unequivocally prohibited.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "Why does this course still teach the surveyor's compass?", options: ["It is the tool that settles a line today", "It is required for every legal survey now", "It is more accurate than a solar transit", "It is the tool that made the old records"], correctIndex: 3, explanation: "\"The compass in this course is the tool that made the old records, not the tool that settles a line today.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "How does the Boone County, Indiana, surveyor's office define a legal survey?", options: ["By any owner with a chain, with notice to the county recorder", "By the county assessor, with notice to the state archives", "By a registered surveyor, with notice to all adjoining owners", "By a title company, with notice to the buyer's mortgage lender"], correctIndex: 2, explanation: "\"A legal survey is a survey prepared by a registered land surveyor with notice to all adjoining landowners.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "What does a chain and a compass in your yard produce, according to lesson 2?", options: ["A measurement, not a boundary", "A boundary, once it is recorded", "A legal survey, if two sign it", "A corner, if a pin is left there"], correctIndex: 0, explanation: "\"A chain and a compass in your yard produce a measurement, not a boundary.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "What does the USGS say about the PLSS lines shown on US Topo maps?", options: ["They are the official legal record", "They are not legally authoritative", "They control when deeds are unclear", "They replace the original field notes"], correctIndex: 1, explanation: "USGS: \"US Topo maps are not legal documents and the Public Land Survey System (PLSS) representation is not legally authoritative.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "What does this course promise about property lines?", options: ["It shows how to find your own line", "It certifies lines for its graduates", "It never tells anyone where a line is", "It locates lines from any topo map"], correctIndex: 2, explanation: "\"This course never tells anyone where a line is.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "Where does lesson 2 say you should practice measuring?", options: ["On any vacant lot, since nobody is using it at the time", "Along any road shoulder, since the public owns it all", "On a neighbor's lot, so long as you leave no marks there", "On public land open to walking, or with the owner's yes"], correctIndex: 3, explanation: "\"Measure on public land where walking is allowed, or on land whose owner has said yes.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "Which federal statute penalizes disturbing a government survey mark?", options: ["18 U.S.C. 1858", "43 U.S.C. 752", "16 U.S.C. 590", "29 U.S.C. 654"], correctIndex: 0, explanation: "18 U.S.C. 1858, quoted in full in Manual sec. 4-2. 43 U.S.C. 752 is the 1805 statute on corners, not a penalty.", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "What is the longest prison term 18 U.S.C. 1858 sets for willfully removing a survey monument?", options: ["Two years", "Six months", "Thirty days", "Five years"], correctIndex: 1, explanation: "The statute: \"shall be fined under this title or imprisoned not more than six months, or both.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "Which marks does 18 U.S.C. 1858 protect?", options: ["Only section corners set by the original federal surveyors", "Only bench marks set by the federal geodetic survey", "Section corners, witness trees, monuments and bench marks", "Fence posts and stakes set by private licensed surveyors"], correctIndex: 2, explanation: "It covers section and quarter-section corners, meander posts, witness trees, trees blazed to mark a line, and \"any monument or bench mark of any Government survey.\"", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "What does lesson 2 tell you to do when you find a survey mark?", options: ["Dig it up to read the date", "Paint it so others find it", "Move it to a safer spot", "Look, photograph, never move"], correctIndex: 3, explanation: "\"Look, photograph, never move.\" Moving it can be a federal offense under 18 U.S.C. 1858.", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "What will this course make you, according to lesson 2?", options: ["Able to measure by hand and say how far to trust it", "Licensed to sign surveys in the state of Indiana", "Qualified to settle a fence dispute between owners", "Ready to set section corners for the county office"], correctIndex: 0, explanation: "Someone who can measure a line, a direction, a rise and an area by hand, say how far to trust each number, and read an old survey record knowing how it was made.", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "Which of these is NOT one of this course's tools?", options: ["A Gunter's chain", "A level and rod", "A polar planimeter", "A GPS receiver"], correctIndex: 3, explanation: "The kit is a chain and pins, a surveyor's compass, a level and rod, a polar planimeter, and your own legs. A satellite receiver is not taught.", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "Why does lesson 2 count your own legs among the tools?", options: ["Walking a line is how corners become legal", "Pacing is the rough check on everything else", "Pacing replaces the chain on hilly ground", "Walking is how the Manual measures today"], correctIndex: 1, explanation: "Pacing is the rough check on the other tools, never a replacement for the chain and never what makes a corner.", sourceLessonSlug: "the-tools-and-the-limits" },
          { prompt: "How long is a Gunter's chain, and how many links does it have?", options: ["100 feet, 100 links", "66 feet, 80 links", "66 feet, 100 links", "100 feet, 66 links"], correctIndex: 2, explanation: "A surveyor's (Gunter's) chain is 66 feet of 100 links (Breed and Hosmer, sec. 4). The 100-foot chain is the engineer's chain.", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "How long is an engineer's chain?", options: ["100 feet of one-foot links", "66 feet of 7.92-inch links", "80 feet of 100 short links", "50 feet of six-inch links"], correctIndex: 0, explanation: "\"The engineer's chain is 100 feet long and is divided into one hundred links of one foot each.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "On an engineer's chain, how is every tenth link marked?", options: ["By a red paint band around the link", "By a larger ring than the other links", "By a stamped number on the link itself", "By a brass tag with one to four points"], correctIndex: 3, explanation: "\"Every tenth link counting from either end is marked by a brass tag having one, two, three, or four points.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "Why must you note which side of the middle tag a reading falls on?", options: ["The links on each side differ in length", "The 10-foot and 90-foot points look alike", "The tags on one side are made of steel", "The handles on each end are not alike"], correctIndex: 1, explanation: "The tags count from either end, so the 10-foot and 90-foot points are marked alike, and so on.", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "Why should a chain be compared often with a standard of length?", options: ["Its links shrink in cold weather every winter", "Its tags wear off and must be recounted often", "Its many wearing surfaces lengthen it with use", "Its handles bend whenever it is pulled taut"], correctIndex: 2, explanation: "\"On account of the large number of wearing surfaces and the consequent lengthening with use, the chain should be frequently compared with a standard of length.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "How is a chain's length adjusted, according to Breed and Hosmer?", options: ["A nut at the handle changes the end link", "A link is cut out with a file and a saw", "The middle tag slides along the chain", "The pins are set shorter on each throw"], correctIndex: 0, explanation: "A nut at the handle \"allows the length of the chain to be altered by lengthening or shortening the end link.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "How many marking pins does chaining a line take?", options: ["Ten", "Twelve", "Twenty", "Eleven"], correctIndex: 3, explanation: "Chaining is done \"by two chainmen using a chain and a set of eleven steel marking pins\" (sec. 10).", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "What do Breed and Hosmer say makes a steel tape vary in length?", options: ["Humidity and the dew on it", "Temperature and the pull", "Sunlight and the paint on it", "Altitude and the thin air"], correctIndex: 1, explanation: "A steel tape \"varies a slight amount in length with the temperature and with the pull\", and both can be worked out.", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "How is the circle of a surveyor's compass graduated?", options: ["To whole degrees only, 0 to 360° clockwise", "To tenths of a degree, 0 to 180° each way", "To degrees and half-degrees, 0 to 90° each way", "To quarter-degrees, 0 to 400 grads around"], correctIndex: 2, explanation: "\"Graduated to degrees and half-degrees, and numbered from two opposite zero points each way to 90°.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "Where are the letters N and S on a surveyor's compass circle?", options: ["At the two zero points", "At the two 90° points", "At the 45° points", "On the needle's ends"], correctIndex: 0, explanation: "\"The zero points are marked with the letters N and S, and the 90° points are marked E and W.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "Why should the compass needle be raised whenever the compass is carried?", options: ["To keep the needle from losing magnetism", "To keep the glass cover from cracking", "To keep the sights from bending out of line", "To keep the pivot-point from dulling"], correctIndex: 3, explanation: "\"The needle should always be raised when the compass is lifted or carried, to prevent dulling the pivot-point.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "What do Breed and Hosmer call a dull pivot-point?", options: ["A harmless sign of age", "A fruitful source of error", "A reason to replace the box", "A cause of magnetic dip"], correctIndex: 1, explanation: "\"A dull pivot-point is a fruitful source of error.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "Why are E and W reversed on a surveyor's compass box?", options: ["The maker copies the mariner's card, which is printed that way", "The letters are mirrored so they read right in the glass", "The box turns under the needle, so the quadrant reads right", "The compass is meant to be read from behind the far sight"], correctIndex: 2, explanation: "\"Since the needle stands still and the box turns under it, the letters E and W on the box are reversed\" so that the reading gives the proper quadrant.", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "A needle's ends are not 180° apart, and the gap is the same in every direction. What is wrong?", options: ["The needle is bent; the pivot is centered", "The pivot is off center; the needle is fine", "The glass is electrified and must be wiped", "The bubbles are out and must be re-leveled"], correctIndex: 0, explanation: "\"If the difference of the two readings is the same in whatever direction the compass is turned, it follows that the needle is bent but the pivot-point is in the center.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "How do you tell a bent needle from an off-center pivot?", options: ["Tap the glass and read the north end", "Raise the needle and read the south end", "Sight a far pole and read one end only", "Read both ends in several directions"], correctIndex: 3, explanation: "A constant difference in every direction means a bent needle; a difference that changes as the compass turns means the pivot is off center (sec. 34).", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "What do Breed and Hosmer say about holding the level rod?", options: ["It should lean slightly toward the instrument", "It is extremely important that it be plumb", "It may lean if the target is clamped tightly", "It should be held by the rodman's assistant"], correctIndex: 1, explanation: "\"It is extremely important that the rod be held plumb\" (sec. 113).", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "On a polar planimeter, what holds the anchor arm in place?", options: ["A clamp screwed to the drafting table", "A suction cup pressed onto the map", "A needle point and a small weight", "A pin through the plat's north arrow"], correctIndex: 2, explanation: "The arm \"is anchored at O by a needle point which sticks into the paper and is held in position by a small weight.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "Why can a planimeter's tracing arm slide through its collar?", options: ["So its length can be set to the map's scale", "So it can reach the far corners of a page", "So it can fold flat for storage in a box", "So it can trace both sides of a line at once"], correctIndex: 0, explanation: "The distance from the collar to the tracing point is \"adjusted to conform to the scale of the map.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "What does the small disk on a polar planimeter record?", options: ["The anchor arm's set length", "The map's scale in feet", "The total distance traced", "The wheel's full revolutions"], correctIndex: 3, explanation: "\"A small disk D which records the number of full revolutions of the wheel.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "How many figures does reading the planimeter's disk, wheel and vernier usually give?", options: ["Two", "Four", "Six", "Three"], correctIndex: 1, explanation: "\"The result of reading the disk, the wheel, and its vernier will usually give four figures.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "What does lesson 3 say about brands and prices?", options: ["It recommends the cheapest working models", "It recommends only antique brass tools", "It recommends no brand and quotes no price", "It recommends the brands BAM has bought"], correctIndex: 2, explanation: "\"This lesson recommends no brand and quotes no price.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
          { prompt: "Which two checks does lesson 3 suggest before you buy an old chain and compass?", options: ["Chain weighed on a scale; needle read at the north end", "Chain counted link by link; needle tapped twice gently", "Chain stretched overnight; needle rubbed with a magnet", "Chain against a known length; needle read at both ends"], correctIndex: 3, explanation: "\"Check the chain against a known length and read the compass needle at both ends.\"", sourceLessonSlug: "what-to-look-for-in-each-tool" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: Distance: pacing and the chain
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "pacing-a-line",
      title: "4 · Pacing: walk a straight line and calibrate your step",
      section: "1 · Distance: pacing and the chain",
      recallContent: [
        {
          prompt: "Why should a compass needle be raised whenever the compass is carried?",
          answer: "To keep from dulling the pivot-point: \"a dull pivot-point is a fruitful source of error\" (Breed and Hosmer, sec. 24).",
        },
        {
          prompt: "How can you tell a bent needle from an off-center pivot?",
          answer: "Read both ends in several directions. A constant difference means a bent needle; a difference that changes as the compass turns means the pivot is off center (sec. 34).",
        },
      ],
      body: `${P("BAM walking a calibration line several times and then a test line, counting aloud, with each count and the arithmetic shown on screen")}

**Why pace at all.** Pacing is the cheapest distance measurement there is, and it is the rough check on every other one. Breed and Hosmer tell the head chainman that "much time can be saved" if he will "pace the chain-length" before lining himself in (sec. 10). The series' map-and-compass course teaches a pace count for finding your way; this lesson treats the pace as a survey measurement, calibrated, repeated, and reported with its error.

**Walk a straight line first.** William Gillespie's *Treatise on Land-Surveying* puts the skill before the counting: "the art of walking in a straight line must first be acquired." His method: "fix the eye on two objects in the desired line, such as two trees, or bushes, or stones, or tufts of grass. Walk forward, keeping the nearest of these objects steadily covering the other." Before you reach the nearer object, choose a new one in line farther ahead, and go on the same way (art. 460).

**Take your natural step.** Both textbooks give the same warning. Gillespie: "It is better not to attempt to make each of the paces three feet, but to take steps of the natural length." Breed and Hosmer: the beginner "should take his natural step and avoid any attempt to take steps just 3 ft. long." A forced step is hard to repeat, and repeatability is the whole value of a pace.

**Calibrate on a known distance.** Gillespie again: "ascertain the value of each by walking over a known distance, and dividing it by the number of paces required to traverse it. Every person should thus determine the usual length of his own steps, repeating the experiment sufficiently often." Breed and Hosmer say to pace "several times, some line of known length so as to determine approximately how many steps he takes in 100 ft."

**A worked calibration.** Lay out 200 feet with a tape on a level path and walk it four times. Say the counts are 79, 81, 80 and 80. The mean is 80 paces, so one pace is 200 ÷ 80 = 2.5 feet. Keep the spread as well as the mean: 200 ÷ 81 = 2.47 feet and 200 ÷ 79 = 2.53 feet. Lesson 7 uses that spread to decide how many digits a paced distance deserves.

**Count the same way every time.** Gillespie's paces are single steps: he gives "the English military pace" as "two feet and six inches", and says the French geographical engineers trained themselves to steps of eight-tenths of a meter. Some walkers count every second step instead. Either works, so long as you calibrate the way you count and never switch.

**Machines that count for you.** Gillespie describes a pedometer worn on the body, with a cord to the foot that "at each step moves a toothed wheel one division." Breed and Hosmer describe the odometer, which counts the turns of a carriage wheel: "The circumference of the wheel being known the approximate distance traversed is easily determined" (sec. 9). Both count; neither knows how long your step or your wheel really is until you check it on a known line.

**To try.** Lay out a known line, walk it at least four times, and write down every count, not only the average. Lesson 7 pairs this pace with a chained line.

:::reveal You walk a 150-foot calibration line four times and count 60, 61, 59 and 60 paces. What is your pace? ||| 150 ÷ 60 = 2.5 feet, from the mean count of 60. The spread runs from 150 ÷ 61 = 2.46 feet to 150 ÷ 59 = 2.54 feet.

:::reveal Why do both textbooks warn against stretching each step to three feet? ||| A forced step is not repeatable. Gillespie and Breed and Hosmer both say to take the natural step and calibrate it on a known distance.

## Sources
- ${GILLESPIE} Locator: Part IX, art. 460, pp. 311 to 312 (scan pp. 317 to 318). ${TIER_A_PD}
- ${BH} Locator: sec. 9, p. 6 (scan p. 32); sec. 10, pp. 7 to 9 (scan pp. 33 to 35). ${TIER_A_PD}`,
    },
    {
      slug: "gunters-chain",
      title: "5 · Gunter's chain: 66 feet, 100 links, and the acre",
      section: "1 · Distance: pacing and the chain",
      recallContent: [
        {
          prompt: "How did Gillespie say to walk a straight line?",
          answer: "Keep two objects in the line, the nearer steadily covering the farther, and choose a new one ahead before you reach the nearer (art. 460).",
        },
        {
          prompt: "How do you find the length of your own pace?",
          answer: "Walk a known distance several times at your natural step and divide the distance by the number of paces.",
        },
      ],
      body: `${P("BAM's chain laid out beside a tape, with the handles, the tags and the end-link adjusting nut shown close up, and a link measured against a ruler")}

**The legal unit.** The federal Manual of Surveying Instructions opens its units of distance with the law: "The law prescribes the chain as the unit of linear measure for the survey of the public lands. The majority of the PLSS has, in fact, been surveyed and reported in chain units" (sec. 2-42). The chain was "devised in the 17th century by Edmund Gunter, an English astronomer," and it "is so designed that 10 square chains are equivalent to 1 acre."

**The table to learn.** From the Manual's table 2-1 and Breed and Hosmer's sec. 4:

| Unit | Equals |
|---|---|
| 1 chain | 100 links = 66 feet = 4 rods (also called poles or perches) |
| 1 rod | 25 links = 16.5 feet |
| 1 link | 0.66 foot = 7.92 inches |
| 1 mile | 80 chains = 5,280 feet |
| 1 acre | 10 square chains = 43,560 square feet |
| 1 square mile | 640 acres |

**Why the numbers fit.** Work them once and they stay with you.
- 66 feet × 80 chains = 5,280 feet, so the chain divides the mile evenly.
- One square chain is 66 × 66 = 4,356 square feet. Ten of them make 43,560 square feet: the acre.
- A mile square is 80 × 80 = 6,400 square chains. Divide by 10 and you have 640 acres, the section of the public land survey.
- A link is a hundredth of a chain, so a chain length reads as a decimal: 12.34 chains is 12 chains and 34 links.

Breed and Hosmer say Gunter's chain is used "chiefly" in land surveying "on account of its simple relation to the acre and to the mile." Distances measured with it "are recorded as chains and links, (or in chains and decimals)," while the 100-foot engineer's chain records feet and decimals. And: "The inch, however, is never used in surveying fieldwork."

**Rods, poles, perches and the two-pole chain.** The Manual warns that the old records do not all speak in chains. In the English colonies "lengths of lines were frequently expressed in poles"; early field notes in the southern states give "perches"; and "The term now commonly used for the same distance is the rod." In some places distances "were recorded in 2 pole (perch) chains," and a surveyor retracing such work "needs to be cautious" (sec. 2-42). The very first line of the public land survey, in 1785, was measured "with a two-pole Gunter's chain held horizontally" (White, p. 18). A two-pole chain is 33 feet, half a full chain, so read the field notes for which chain was used before you trust a number.

**Which foot?** The Manual defines the chain "in terms of the U.S. Survey Foot", and says the difference from the international foot is "very small, on the order of 2 parts per million" (sec. 2-43). Over a mile, 2 parts per million is about a hundredth of a foot (5,280 × 0.000002 = 0.01). The National Institute of Standards and Technology has since retired the survey foot: "The U.S. survey foot is obsolete. Only use for historical and legacy applications." It was superseded by the international foot of exactly 0.3048 meter. Rerunning an old chained line is exactly that kind of historical work, so a surveyor still needs both.

**The chain grows.** Breed and Hosmer (sec. 22): a new chain is "very nearly the standard length," and at first its links bend and shorten it. "But there are nearly six hundred wearing surfaces and before long the small amount of wear on each surface lengthens the chain an appreciable amount. It is very common to find chains which, after considerable use, have lengthened 0.3 ft. or more." Follow that through a mile. A chain 66.3 feet long fits along a true mile 5,280 ÷ 66.3 = 79.64 times, so the notes record 79.64 chains for a line that is really 80, about 24 feet short. The Manual says the same of the old surveys: "Prior to 1900 most of the lines were measured with the Gunter's link chain. Such a chain was difficult to keep at standard length" (sec. 7-5). What the law did about that is the subject of *Reading a Land Description*.

:::reveal Why do ten square chains make an acre? ||| A square chain is 66 × 66 = 4,356 square feet, and ten of them are 43,560 square feet, the acre.

:::reveal A field note reads 7.25 chains. How far is that in feet? ||| 7.25 × 66 = 478.5 feet: 7 chains and 25 links.

## Sources
- ${MANUAL} Locator: secs. 2-42 and 2-43 and table 2-1, p. 37 (PDF p. 48); sec. 7-5, p. 165 (PDF p. 176). ${TIER_A}
- ${BH} Locator: sec. 4, pp. 3 to 5 (scan pp. 29 to 31); sec. 22, p. 14 (scan p. 40). ${TIER_A_PD}
- ${WHITE} Locator: p. 18 (PDF p. 32). ${TIER_A}
- ${NIST_FOOT} Locator: the timeline entries for December 31, 2022 and January 1, 2023. ${TIER_A}`,
    },
    {
      slug: "chaining-a-line",
      title: "6 · Chaining a line: two chainmen, eleven pins, and the errors that creep in",
      section: "1 · Distance: pacing and the chain",
      recallContent: [
        {
          prompt: "How long is a Gunter's chain, how many links does it have, and how many chains make a mile?",
          answer: "66 feet and 100 links; 80 chains to the mile.",
        },
        {
          prompt: "What happens to a chain's length with use?",
          answer: "It grows: nearly six hundred wearing surfaces each wear a little, and chains 0.3 ft. or more too long are common (Breed and Hosmer, sec. 22).",
        },
      ],
      body: `${P("BAM and a helper chaining a measured line on level ground and then down a slope, with the pin tally, the calls and the plumb line on camera")}

**The crew and the kit.** Breed and Hosmer (sec. 10): "This work is done by two chainmen using a chain and a set of eleven steel marking pins." The head chainman "carries ten of the marking pins and the front end of the chain. The rear-chainman takes the eleventh pin and the other end of the chain." Their Fig. 2, on p. 7, shows the two men at work.

**One chain-length, step by step.**
1. The rear chainman holds his end at the starting pin, "just to one side" of it, so that a jerk on the chain does not disturb the pin.
2. With his eye over the point, he lines the head chainman in on a sighting rod at the far end, motioning him right or left.
3. The head chainman stretches the chain taut, checks that there are no kinks and that nothing bends it, and when the rear chainman calls "All right here," sets a pin at the end of the chain and presses it vertically into the ground. Then he calls "All right."
4. The rear chainman pulls the pin at his end, and they move on. Just before he reaches the next pin he calls "Chain," to warn the head chainman that a chain-length is nearly run out.

**The pins are the tally.** "The number of pins the rear-chainman holds is a record of the number of chain-lengths measured. There is always one pin in the ground which simply marks the distance and is not counted." After 10 chains the head chainman is out of pins; the rear chainman brings the ten forward, both men count them, and both write the 10 chains in their notebooks. A part chain at the end is read in links from the proper tag, with tenths of a link estimated.

**Every length is horizontal, so hills cost work.** On a slope "the chain must be held horizontal and the distance transferred to the ground by means of a plumb-line. This is difficult to do accurately and is a fruitful source of error. Beginners usually hold the downhill end of the chain too low" (sec. 11). Where the slope is too steep to hold a full chain level, it is measured in sections of 50, 20 or even 10 feet. Chaining downhill is usually the more accurate direction, because the rear end is then held firmly on the ground.

**Errors and mistakes are different things.** Breed and Hosmer list the common sources of error (sec. 13): not pulling the chain taut, careless plumbing, incorrect alignment, wind, temperature, and a chain of the wrong length. Mistakes are blunders (sec. 14): omitting a whole chain-length, reading from the wrong end of the chain ("40 ft. for 60 ft."), transposing figures. The cure for blunders is procedure (sec. 15). More than one person keeps the tally, and the note keeper repeats each distance aloud, in different words: if the chainman calls "Thirty-six, five," the note keeper answers "Thirty-six and a half," and a chainman who meant 36.05 hears the mistake at once.

**Errors that cancel and errors that add up.** Section 23 separates errors "which are of such a nature that they tend to balance each other" from "those which continually accumulate. The latter are by far the more serious." Their example: a 5,000-foot line measured with a tape 0.01 foot too long, with a random error of about 0.02 foot in marking each tape length. Over fifty lengths the random errors partly cancel and leave about 0.14 foot; the long tape adds its 0.01 foot every time, 0.50 foot in all. "The small (0.01) accumulative error is therefore seen to have far greater effect than the larger (0.02) compensating error." A worn chain is an accumulating error.

**The first four miles, 1785.** The Land Ordinance's surveys began on September 30, 1785, at the Pennsylvania line on the north bank of the Ohio. By October 8, C. A. White records in the Bureau of Land Management's history, Thomas Hutchins, eight other surveyors "and a crew of about 30 chainmen and axemen ran 4 miles of line," measured "with a two-pole Gunter's chain held horizontally." The ground was "very rough, hilly, and covered with timber," speed mattered most, and "the resulting measurements were very crude" (pp. 18 to 19). What became of land laid out on such measurements is the subject of *Reading a Land Description*.

:::reveal The rear chainman holds 7 pins, and one more pin stands in the ground ahead. How many chain-lengths have been run since the last tally of ten? ||| Seven. The pins in the rear chainman's hand are the count; the pin in the ground only marks the point and is not counted.

:::reveal In Breed and Hosmer's example, which error does more damage over a long line, and why? ||| The accumulating one. A tape 0.01 ft. too long adds 0.01 ft. every length, 0.50 ft. over fifty lengths, while random 0.02 ft. errors partly cancel and leave about 0.14 ft.

## Sources
- ${BH} Locator: secs. 10 and 11 and Fig. 2, pp. 7 to 10 (scan pp. 33 to 36); secs. 13 to 15, pp. 11 to 12 (scan pp. 37 to 38); sec. 23, pp. 14 to 15 (scan pp. 40 to 41). ${TIER_A_PD}
- ${WHITE} Locator: pp. 18 to 19 (PDF pp. 32 to 33). ${TIER_A}`,
    },
    {
      slug: "practice-pace-and-chain",
      title: "7 · Practice: pace and chain the same line, and report each honestly",
      section: "1 · Distance: pacing and the chain",
      recallContent: [
        {
          prompt: "What does the rear chainman's handful of pins record?",
          answer: "The number of chain-lengths measured. The one pin in the ground only marks the point and is not counted.",
        },
        {
          prompt: "Which errors do Breed and Hosmer call far more serious: those that balance or those that accumulate?",
          answer: "Those that accumulate, such as a chain of the wrong length, which adds its error on every chain-length.",
        },
      ],
      body: `${P("BAM pacing and then chaining the same line, with both field books shown and the comparison worked on screen")}

**The exercise.** Pick a straight line a few hundred feet long, on public ground open to walking or with the owner's yes (lesson 2), and mark both ends. Measure it twice: once by pacing with the step you calibrated in lesson 4, once with a chain or tape as in lesson 6. Then report each result with only the digits it has earned. This is the skill a mathematics standard names directly: choose a level of accuracy appropriate to the limitations of the measurement when reporting a quantity.

**How good is each method?** Breed and Hosmer give the chain's budget (sec. 16): "If, in a survey, it is allowable to make an error of one foot in every five hundred feet the chain is sufficiently accurate for the work. To reach an accuracy of 1 in 1000 or greater with a chain it is necessary to give careful attention to the pull, the plumbing, and the deviation from the standard length." With a steel tape "an accuracy of 1 in 5000 can be obtained without difficulty" with ordinary care. No book can give you the figure for pacing, because it is your own step: your calibration spread is the measure.

**A worked example.**
1. **Calibration** (lesson 4): 200 feet walked in 79, 81, 80 and 80 paces. One pace is 2.5 feet, ranging from 2.47 to 2.53, a little over 1 percent either way.
2. **Paced:** 123 paces. 123 × 2.5 = 307.5 feet, with a range of 123 × 2.47 = 304 to 123 × 2.53 = 311 feet. Report it as about 308 feet, give or take 4, paced. Writing "307.5 feet" would claim a precision your legs never had.
3. **Chained:** 4 chains and 62 links, so 4.62 × 66 = 304.92 feet. At the chain's 1 in 500, the uncertainty is about 304.92 ÷ 500 = 0.6 foot. Report 305 feet, or 4.62 chains. Recording to the nearest link already matches the chain's accuracy, because a link is 0.66 foot. "304.92 feet" claims hundredths of a foot that the chain did not measure.
4. **Compare:** the paced figure is 2.6 feet longer, about 1 part in 117 (2.6 ÷ 305). That is inside the pace's own range of 304 to 311 feet, which is all a rough check can ask.

**What the check is for.** Pacing cannot find a one-foot error, but it catches a big one at once. If the two figures disagree by far more than your pacing spread allows, suspect a blunder in the chaining first. Breed and Hosmer's list of common mistakes begins with reading errors and "omitting a whole chain- or tape-length" (sec. 14), and a dropped chain shows up as a gap of 66 feet. Their advice for every measurement is the same habit: "the chainmen should make mental estimates of the distances when measuring, in order to avoid large and absurd mistakes" (sec. 15).

**Three rules for the field book.**
1. Never write more digits than the method supports.
2. Write the method next to the number: "paced" or "chained."
3. Keep the raw counts, so a reader can redo your arithmetic.

:::reveal Your pace is 2.4 feet and you count 150 paces. What do you write in the field book? ||| 150 × 2.4 = 360 feet, written as "about 360 feet, paced", with the count of 150 beside it, never "360.0 feet".

:::reveal A line chains at 6.05 chains. Using Breed and Hosmer's 1 in 500, about how uncertain is it? ||| 6.05 × 66 = 399.3 feet, and 399.3 ÷ 500 is about 0.8 foot. Report about 399 feet, or 6.05 chains.

:::reveal Pacing gives about 380 feet and the chain gives 314 feet for the same line. What should you suspect first? ||| A blunder in the chaining, most likely a chain-length dropped from the tally: the gap is 66 feet, one full chain.

## Sources
- ${BH} Locator: secs. 14 to 16, pp. 11 to 12 (scan pp. 37 to 38). ${TIER_A_PD}
- ${GILLESPIE} Locator: Part IX, art. 460, pp. 311 to 312 (scan pp. 317 to 318). ${TIER_A_PD}`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Distance: pacing and the chain",
      section: "1 · Distance: pacing and the chain",
      body: "A graded check on pacing, Gunter's chain, chaining a line, and reporting a measured distance with the accuracy it has earned. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What do both Gillespie and Breed and Hosmer say about the length of each pace?", options: ["Take your natural step, not a forced three feet", "Stretch every step to exactly three feet long", "Shorten each step to two feet on rough ground", "Match each step to the length of a chain link"], correctIndex: 0, explanation: "Gillespie: \"take steps of the natural length\"; Breed and Hosmer: \"take his natural step and avoid any attempt to take steps just 3 ft. long.\"", sourceLessonSlug: "pacing-a-line" },
          { prompt: "What skill does Gillespie say must be acquired before pacing?", options: ["Counting steps aloud", "Reading a pedometer", "Walking a straight line", "Keeping a field book"], correctIndex: 2, explanation: "\"The art of walking in a straight line must first be acquired\" (art. 460).", sourceLessonSlug: "pacing-a-line" },
          { prompt: "How does Gillespie keep a walker on a straight line?", options: ["Keep the sun at one angle over the same shoulder", "Keep the nearer of two objects covering the farther", "Keep a compass needle pointed at the far end", "Keep count of steps and turn at every hundredth"], correctIndex: 1, explanation: "Fix the eye on two objects in the line and walk forward \"keeping the nearest of these objects steadily covering the other.\"", sourceLessonSlug: "pacing-a-line" },
          { prompt: "When should you choose a new object ahead while walking a line?", options: ["Only after reaching the farther of the objects", "Each time you have counted a hundred paces", "Whenever the compass needle swings off line", "Before you reach the nearer of the two objects"], correctIndex: 3, explanation: "Gillespie: before getting up to the nearest object, choose a new one in line farther ahead, and go on as before.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "How do you find the length of your pace, according to Gillespie?", options: ["Multiply your height by a fixed ratio for adults", "Divide a known distance by the paces it takes", "Measure one footprint and double the result", "Time a walk and divide it by your usual speed"], correctIndex: 1, explanation: "\"Ascertain the value of each by walking over a known distance, and dividing it by the number of paces required to traverse it.\"", sourceLessonSlug: "pacing-a-line" },
          { prompt: "Why does lesson 4 tell you to repeat the calibration walk and keep every count?", options: ["A known distance changes from walk to walk", "The pedometer must be reset on every walk", "The Manual requires four walks for a record", "One walk shows nothing of your step's spread"], correctIndex: 3, explanation: "Gillespie says to repeat the experiment \"sufficiently often\", and lesson 4 keeps the spread as well as the mean, because lesson 7 uses the spread.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "You walk 200 feet in a mean of 80 paces. How long is your pace?", options: ["2.5 feet", "2.0 feet", "3.0 feet", "2.8 feet"], correctIndex: 0, explanation: "200 ÷ 80 = 2.5 feet.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "In lesson 4's calibration, what do the counts of 79 and 81 paces give you?", options: ["The error in the tape that laid the line", "The number of chains in the 200-foot line", "The spread of the pace, 2.53 to 2.47 feet", "The mean pace, which works out to 2.25 feet"], correctIndex: 2, explanation: "200 ÷ 79 = 2.53 feet and 200 ÷ 81 = 2.47 feet: the spread around the 2.5-foot mean.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "What do Breed and Hosmer say the head chainman can save time by doing?", options: ["Pacing the chain-length before lining in", "Skipping the pins on every second chain", "Calling the tally only every ten chains", "Leaving the sighting rod at the start"], correctIndex: 0, explanation: "\"Much time can be saved if the head-chainman will pace the chain-length and then place himself very nearly in the line\" (sec. 10).", sourceLessonSlug: "pacing-a-line" },
          { prompt: "How long does Gillespie give the English military pace?", options: ["Three feet exactly", "Two feet even", "Two feet six inches", "Thirty-three inches"], correctIndex: 2, explanation: "\"The English military pace is two feet and six inches.\"", sourceLessonSlug: "pacing-a-line" },
          { prompt: "What step did the French geographical engineers train themselves to, according to Gillespie?", options: ["One full meter exactly", "Eight-tenths of a meter", "Half of a meter each", "Three-quarters of a yard"], correctIndex: 1, explanation: "They accustom themselves \"to take regular steps of eight-tenths of a metre\".", sourceLessonSlug: "pacing-a-line" },
          { prompt: "Some walkers count every second step. What does lesson 4 say about that?", options: ["It is wrong; only single steps count as paces", "It doubles the accuracy of any paced distance", "It is allowed only on lines under one chain", "It works if you calibrate that way and never switch"], correctIndex: 3, explanation: "Either way of counting works, so long as you calibrate the way you count and never switch.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "What does Gillespie's pedometer do at each step?", options: ["Rings a small bell inside the case", "Moves a toothed wheel one division", "Punches a hole in a paper strip", "Swings a pendulum through one arc"], correctIndex: 1, explanation: "A cord from the body to the foot \"at each step moves a toothed wheel one division\", and wheelwork records the total.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "What does the odometer in Breed and Hosmer count?", options: ["The steps of a walking chainman", "The pins pulled by the rear man", "The links that pass a fixed tag", "The turns of a carriage wheel"], correctIndex: 3, explanation: "It registers \"the number of revolutions of one of the wheels\" of a carriage (sec. 9).", sourceLessonSlug: "pacing-a-line" },
          { prompt: "What must you know to turn an odometer's count into a distance?", options: ["The circumference of the wheel", "The weight of the carriage body", "The speed of the horse pulling", "The slope of the road surface"], correctIndex: 0, explanation: "\"The circumference of the wheel being known the approximate distance traversed is easily determined\" (sec. 9).", sourceLessonSlug: "pacing-a-line" },
          { prompt: "Why does lesson 4 say a pedometer or odometer still needs checking on a known line?", options: ["It is banned by the Manual on official surveys", "It works only on ground with no slope at all", "It counts, but cannot know your real step or wheel", "It rounds every count to the nearest chain"], correctIndex: 2, explanation: "Both count; neither knows how long your step or your wheel really is until you check it on a known line.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "Why is a forced three-foot step a poor pace?", options: ["It is hard to repeat the same way twice", "It is longer than any chain link allows", "It is shorter than the legal survey pace", "It makes a pedometer skip one division"], correctIndex: 0, explanation: "A forced step is hard to repeat, and repeatability is the whole value of a pace.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "How does lesson 4 treat the pace, compared with a pace count for finding your way?", options: ["As a guess: never written down or checked again", "As a legal distance once it is recorded twice", "As a measurement: calibrated, repeated, and reported", "As a backup used only when the chain is lost"], correctIndex: 2, explanation: "This lesson treats the pace as a survey measurement, calibrated, repeated, and reported with its error.", sourceLessonSlug: "pacing-a-line" },
          { prompt: "What does the Manual say the law prescribes as the unit of linear measure for public land surveys?", options: ["The foot", "The chain", "The meter", "The yard"], correctIndex: 1, explanation: "Manual sec. 2-42: \"The law prescribes the chain as the unit of linear measure for the survey of the public lands.\"", sourceLessonSlug: "gunters-chain" },
          { prompt: "Who devised the chain unit, according to the Manual?", options: ["Thomas Hutchins, the U.S. Geographer", "Jared Mansfield, a surveyor general", "William Burt, a Michigan surveyor", "Edmund Gunter, an English astronomer"], correctIndex: 3, explanation: "The chain unit was \"devised in the 17th century by Edmund Gunter, an English astronomer\" (sec. 2-42).", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many square chains make an acre?", options: ["Four", "Ten", "Eighty", "Sixty"], correctIndex: 1, explanation: "The chain \"is so designed that 10 square chains are equivalent to 1 acre\" (sec. 2-42).", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many chains make a mile?", options: ["66", "100", "40", "80"], correctIndex: 3, explanation: "Table 2-1: 1 mile = 80 chains = 5,280 feet.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many links make up one Gunter's chain?", options: ["100", "66", "80", "25"], correctIndex: 0, explanation: "1 chain = 100 links = 66 feet (table 2-1; Breed and Hosmer, sec. 4).", sourceLessonSlug: "gunters-chain" },
          { prompt: "How long is one link, in inches?", options: ["12.00 inches", "6.60 inches", "7.92 inches", "8.25 inches"], correctIndex: 2, explanation: "Breed and Hosmer, sec. 4: each link is 66/100 of a foot, \"or 7.92 inches\".", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many rods make a chain?", options: ["Four", "Two", "Ten", "Six"], correctIndex: 0, explanation: "1 chain = 4 poles, perches or rods (table 2-1).", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many links make one rod, or pole?", options: ["10", "33", "25", "50"], correctIndex: 2, explanation: "Manual sec. 2-42: \"One pole is equal to 25 links, and 4 poles equal 1 chain.\"", sourceLessonSlug: "gunters-chain" },
          { prompt: "How long is a rod, in feet?", options: ["33.0 feet", "16.5 feet", "12.0 feet", "20.0 feet"], correctIndex: 1, explanation: "A rod is 25 links of 0.66 foot: 16.5 feet, a quarter of a 66-foot chain.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many square feet are in an acre?", options: ["4,356", "5,280", "64,000", "43,560"], correctIndex: 3, explanation: "Table 2-1: 1 acre = 10 square chains = 43,560 square feet.", sourceLessonSlug: "gunters-chain" },
          { prompt: "What does multiplying 66 feet by 80 show?", options: ["43,560, the square feet in one acre", "5,280 feet, so the chain divides the mile", "640, the acres in one square mile", "100, the links in one Gunter's chain"], correctIndex: 1, explanation: "66 × 80 = 5,280 feet: the chain divides the mile evenly.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many square feet are in one square chain?", options: ["43,560", "6,600", "3,600", "4,356"], correctIndex: 3, explanation: "66 × 66 = 4,356 square feet; ten of them make the acre.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many acres are in a square mile?", options: ["640", "160", "6,400", "1,000"], correctIndex: 0, explanation: "A mile square is 80 × 80 = 6,400 square chains, and 6,400 ÷ 10 = 640 acres.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many square chains are in a square mile?", options: ["640", "8,000", "6,400", "4,356"], correctIndex: 2, explanation: "80 chains × 80 chains = 6,400 square chains.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How is 12 chains and 34 links written as a decimal?", options: ["12.34 chains", "12.034 chains", "123.4 chains", "1.234 chains"], correctIndex: 0, explanation: "A link is a hundredth of a chain, so 34 links is .34 of a chain.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How are distances measured with the 100-foot engineer's chain recorded?", options: ["In chains and links", "In rods and inches", "In feet and decimals", "In poles and perches"], correctIndex: 2, explanation: "Breed and Hosmer, sec. 4: surveyor's chain distances are in chains and links; engineer's chain distances \"are recorded as feet and decimals.\"", sourceLessonSlug: "gunters-chain" },
          { prompt: "Why do Breed and Hosmer say Gunter's chain is used chiefly in land surveying?", options: ["Its light weight on long lines through timber", "Its simple relation to the acre and the mile", "Its brass tags marking every tenth link", "Its use in all city surveys of their day"], correctIndex: 1, explanation: "Its use is confined chiefly to land surveying \"on account of its simple relation to the acre and to the mile\" (sec. 4).", sourceLessonSlug: "gunters-chain" },
          { prompt: "What do Breed and Hosmer say about the inch in surveying fieldwork?", options: ["It is used for links", "It is used on slopes", "It replaces tenths", "It is never used"], correctIndex: 3, explanation: "\"The inch, however, is never used in surveying fieldwork\" (sec. 4).", sourceLessonSlug: "gunters-chain" },
          { prompt: "In the English colonial records, what unit does the Manual say lengths were frequently given in?", options: ["Varas", "Poles", "Meters", "Leagues"], correctIndex: 1, explanation: "Manual sec. 2-42: in the English colonial area \"lengths of lines were frequently expressed in poles.\"", sourceLessonSlug: "gunters-chain" },
          { prompt: "What term does the Manual say is now commonly used for a pole or a perch?", options: ["The link", "The yard", "The chain", "The rod"], correctIndex: 3, explanation: "\"The term now commonly used for the same distance is the rod\" (sec. 2-42).", sourceLessonSlug: "gunters-chain" },
          { prompt: "What chain measured the first line of the public land survey in 1785?", options: ["A two-pole Gunter's chain", "A 100-foot engineer's chain", "A 20-meter metric chain", "A steel tape of 500 feet"], correctIndex: 0, explanation: "White, p. 18: the line was \"measured with a two-pole Gunter's chain held horizontally.\"", sourceLessonSlug: "gunters-chain" },
          { prompt: "How long is a two-pole chain?", options: ["66 feet", "16.5 feet", "33 feet", "100 feet"], correctIndex: 2, explanation: "Two poles of 16.5 feet: 33 feet, half a full chain.", sourceLessonSlug: "gunters-chain" },
          { prompt: "Why does lesson 5 say to read old field notes before trusting a distance in them?", options: ["Some were kept in two-pole chains, not full chains", "All of them were written in inches, not in feet", "None of them say which way the line was run", "Every one was later converted to the meter"], correctIndex: 0, explanation: "The Manual warns that some distances \"were recorded in 2 pole (perch) chains,\" and a retracing surveyor \"needs to be cautious\" (sec. 2-42).", sourceLessonSlug: "gunters-chain" },
          { prompt: "In which foot is the chain unit defined, according to the Manual?", options: ["The international foot", "The English military foot", "The U.S. survey foot", "The French royal foot"], correctIndex: 2, explanation: "Manual sec. 2-43: \"The chain unit is defined in terms of the U.S. Survey Foot.\"", sourceLessonSlug: "gunters-chain" },
          { prompt: "How large does the Manual say the difference between the survey foot and the international foot is?", options: ["About 2 parts per thousand", "About 2 parts per million", "About 2 parts per hundred", "About 2 parts per billion"], correctIndex: 1, explanation: "\"Very small, on the order of 2 parts per million\" (sec. 2-43).", sourceLessonSlug: "gunters-chain" },
          { prompt: "Over one mile, about how much is 2 parts per million?", options: ["About 0.1 foot", "About 1 foot", "About 10 feet", "About 0.01 foot"], correctIndex: 3, explanation: "5,280 × 0.000002 = 0.01 foot.", sourceLessonSlug: "gunters-chain" },
          { prompt: "What is the status of the U.S. survey foot today, according to NIST?", options: ["Required on every new federal survey since 2023", "Obsolete except for historical and legacy uses", "Equal to the international foot by definition", "Kept only for surveys in Alaska and Hawaii"], correctIndex: 1, explanation: "NIST: \"The U.S. survey foot is obsolete. Only use for historical and legacy applications.\"", sourceLessonSlug: "gunters-chain" },
          { prompt: "How long is the international foot that superseded the survey foot?", options: ["Exactly 0.3000 meter", "Exactly 0.3333 meter", "Exactly 0.3084 meter", "Exactly 0.3048 meter"], correctIndex: 3, explanation: "NIST: superseded by the international foot definition, 1 foot = 0.3048 meter exactly.", sourceLessonSlug: "gunters-chain" },
          { prompt: "Why does a surveyor rerunning an old chained line still need the survey foot?", options: ["It is historical work, the use NIST still allows", "It is required on every new federal survey today", "It is shorter by a full foot on every chain", "It is the only foot a steel tape is marked in"], correctIndex: 0, explanation: "NIST keeps the survey foot only \"for historical and legacy applications\", and rerunning an old line is that kind of work.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many wearing surfaces does a chain have, according to Breed and Hosmer?", options: ["Exactly one hundred", "About sixty-six", "Nearly six hundred", "Nearly two thousand"], correctIndex: 2, explanation: "\"There are nearly six hundred wearing surfaces\" (sec. 22).", sourceLessonSlug: "gunters-chain" },
          { prompt: "What happens to a new chain during its first use?", options: ["Its links bend and shorten it", "Its tags fall off one by one", "Its links stretch and lengthen it", "Its handles break off at the ends"], correctIndex: 0, explanation: "\"During its first use the links become bent and the chain thus shortened\" (sec. 22). Wear lengthens it only later.", sourceLessonSlug: "gunters-chain" },
          { prompt: "By how much do Breed and Hosmer say chains have commonly lengthened after considerable use?", options: ["3 feet or more", "0.03 foot at most", "0.3 foot or more", "A full rod or more"], correctIndex: 2, explanation: "\"It is very common to find chains which, after considerable use, have lengthened 0.3 ft. or more\" (sec. 22).", sourceLessonSlug: "gunters-chain" },
          { prompt: "A chain 0.3 foot too long is laid along a true mile. What do the notes record?", options: ["About 80.36 chains, about 24 feet long", "About 79.64 chains, about 24 feet short", "Exactly 80 chains, with no error at all", "About 79.64 chains, about 24 feet long"], correctIndex: 1, explanation: "5,280 ÷ 66.3 = 79.64 chains, so the record reads about 0.36 chain, roughly 24 feet, short of the true 80.", sourceLessonSlug: "gunters-chain" },
          { prompt: "Does a chain that is too long make a line read longer or shorter than it is?", options: ["Longer, because each chain covers more", "The same, because the links cancel out", "Longer, but only on sloping ground", "Shorter, because fewer chain-lengths fit"], correctIndex: 3, explanation: "Each chain-length covers more ground, so fewer of them fit along the line and the recorded number is too small.", sourceLessonSlug: "gunters-chain" },
          { prompt: "What does the Manual say about the Gunter's chain on surveys before 1900?", options: ["It was replaced by steel tapes around 1800", "It was difficult to keep at standard length", "It was used only on the boundaries of states", "It was checked each day against a solar compass"], correctIndex: 1, explanation: "Manual sec. 7-5: \"Prior to 1900 most of the lines were measured with the Gunter's link chain. Such a chain was difficult to keep at standard length.\"", sourceLessonSlug: "gunters-chain" },
          { prompt: "A field note reads 7.25 chains. How far is that in feet?", options: ["725.0 feet", "462.0 feet", "511.5 feet", "478.5 feet"], correctIndex: 3, explanation: "7.25 × 66 = 478.5 feet.", sourceLessonSlug: "gunters-chain" },
          { prompt: "How many chainmen does Breed and Hosmer's method of chaining use?", options: ["Two", "Three", "Four", "One"], correctIndex: 0, explanation: "\"This work is done by two chainmen using a chain and a set of eleven steel marking pins\" (sec. 10).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "How many pins does the head chainman carry at the start of a line?", options: ["Eleven", "Five", "Ten", "Twelve"], correctIndex: 2, explanation: "The head chainman \"carries ten of the marking pins and the front end of the chain.\"", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Who carries the eleventh pin at the start of a line?", options: ["The rear chainman", "The head chainman", "The note keeper", "The lead axeman"], correctIndex: 0, explanation: "\"The rear-chainman takes the eleventh pin and the other end of the chain.\"", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Why does the rear chainman hold his end just to one side of the pin?", options: ["So he can read the tags from the proper end", "So the head man can see the far rod clearly", "So a jerk on the chain will not disturb the pin", "So the chain stays level going downhill"], correctIndex: 2, explanation: "He holds his end \"just to one side\" so that \"any jerking of the chain will not disturb the pin\".", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Who lines the head chainman in on the far sighting rod?", options: ["The head chainman, alone and unaided", "The rear chainman, eye over the point", "The note keeper, from beside the line", "The surveyor, standing at the far rod"], correctIndex: 1, explanation: "\"The rear-chainman, with his eye over the point, places the head-chainman in line\" with a sighting rod.", sourceLessonSlug: "chaining-a-line" },
          { prompt: "What does the rear chainman call when his end is held at his pin?", options: ["\"Pin is set now\"", "\"Pull and hold\"", "\"Tally is ten\"", "\"All right here\""], correctIndex: 3, explanation: "When he calls \"All right here,\" the head chainman sets the pin at the end of the chain.", sourceLessonSlug: "chaining-a-line" },
          { prompt: "What does the rear chainman call just before he reaches the next pin?", options: ["\"Pins\"", "\"Chain\"", "\"Stop\"", "\"Mark\""], correctIndex: 1, explanation: "\"Just before reaching the second pin the rear-chainman calls out, 'Chain,'\" to warn the head chainman.", sourceLessonSlug: "chaining-a-line" },
          { prompt: "What records the number of chain-lengths measured?", options: ["The pins left standing in the ground", "The tags passed by the head chainman", "The notches cut in the sighting rod", "The pins in the rear chainman's hand"], correctIndex: 3, explanation: "\"The number of pins the rear-chainman holds is a record of the number of chain-lengths measured.\"", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Is the pin standing in the ground ahead counted in the tally?", options: ["No; it only marks the point", "Yes; it counts as one chain", "Yes; it counts as half a chain", "Only at the very end of a line"], correctIndex: 0, explanation: "\"There is always one pin in the ground which simply marks the distance and is not counted.\"", sourceLessonSlug: "chaining-a-line" },
          { prompt: "What happens when 10 chains have been measured?", options: ["The crew stops and lays out a new base line there", "The head chainman sets a stone monument at once", "The pins go forward, both count them, both record 10", "The rear chainman resets the length of the chain"], correctIndex: 2, explanation: "The rear chainman brings the ten pins forward, both count them, and both record the 10 chains in their notebooks.", sourceLessonSlug: "chaining-a-line" },
          { prompt: "How is a part chain at the end of a line read?", options: ["In links from the proper tag, tenths estimated", "In feet from the handle, inches estimated", "In rods from the middle, links estimated", "In paces from the last pin, feet estimated"], correctIndex: 0, explanation: "\"The links are read by counting from the proper tag and the tenths of a link are estimated.\"", sourceLessonSlug: "chaining-a-line" },
          { prompt: "On a slope, how must the chain be held?", options: ["Along the slope, with the angle written in", "Loose, so it lies flat on the ground surface", "Horizontal, with a plumb line to the ground", "Vertical, with a level on the downhill end"], correctIndex: 2, explanation: "\"The chain must be held horizontal and the distance transferred to the ground by means of a plumb-line\" (sec. 11).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "What mistake do beginners usually make when chaining on a slope?", options: ["Holding the uphill end too high", "Holding the downhill end too low", "Pulling the chain much too tight", "Counting the standing pin twice"], correctIndex: 1, explanation: "\"Beginners usually hold the downhill end of the chain too low\" (sec. 11).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "What do Breed and Hosmer do when a slope is too steep to hold a full chain level?", options: ["Pace across the slope and skip the chain", "Use a two-pole chain and double the count", "Leave the slope out of the recorded line", "Measure in sections of 50, 20 or 10 feet"], correctIndex: 3, explanation: "\"The measurement must be made in sections, 50-ft., 20-ft., or even 10-ft. lengths being used\" (sec. 11).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Which direction of chaining is usually more accurate, and why?", options: ["Uphill; the head chainman can see the far rod", "Downhill; the rear end is held firm on the ground", "Downhill; the chain sags less going down a hill", "Uphill; the plumb line hangs more steadily"], correctIndex: 1, explanation: "Chaining downhill is generally more accurate \"because in the former case the rear end is held firmly at a point on the ground\" (sec. 11).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Which of these is an error rather than a mistake, in Breed and Hosmer's terms?", options: ["Omitting a whole chain-length", "Reading 40 ft. for 60 ft.", "Transposing 46.24 as 46.42", "A chain of the wrong length"], correctIndex: 3, explanation: "An erroneous length of chain is on the list of sources of error (sec. 13); the other three are mistakes (sec. 14).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "How do Breed and Hosmer guard against miscounting chain-lengths?", options: ["More than one person keeps the tally", "The head chainman paints every pin red", "The crew walks the whole line in silence", "The note keeper counts every link aloud"], correctIndex: 0, explanation: "\"Mistakes in counting the tape-lengths may be avoided if more than one person keeps the tally\" (sec. 15).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Why does a note keeper answer \"Thirty-six and a half\" to a call of \"Thirty-six, five\"?", options: ["So the chainman knows to pull the next pin up", "So the tally of chain-lengths moves on by one", "So a chainman who meant 36.05 hears the mistake", "So the reading is turned into rods and links"], correctIndex: 2, explanation: "Answering in different words removes ambiguity: \"If the chainman had meant 36.05 the mistake would be noticed\" (secs. 15 to 16).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Which kind of error do Breed and Hosmer call by far the more serious?", options: ["Errors that accumulate", "Errors that balance out", "Errors on level ground", "Errors in the last chain"], correctIndex: 0, explanation: "Errors \"which continually accumulate. The latter are by far the more serious\" (sec. 23).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "In Breed and Hosmer's 5,000-foot example, how much error does the tape that is 0.01 foot too long add?", options: ["0.14 foot", "0.01 foot", "0.50 foot", "5.00 feet"], correctIndex: 2, explanation: "50 tape-lengths × 0.01 foot = 0.50 foot, because that error repeats every time.", sourceLessonSlug: "chaining-a-line" },
          { prompt: "In the same example, about how much do the random 0.02-foot errors leave after partly canceling?", options: ["About 1.00 foot", "About 0.14 foot", "About 0.50 foot", "About 0.02 foot"], correctIndex: 1, explanation: "About 7 of the 50 random errors remain uncanceled: 7 × 0.02 = 0.14 foot (sec. 23).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Why is a worn chain an accumulating error?", options: ["It adds a random error that cancels out", "It adds error only when it is on a slope", "It adds error only at the end of a line", "It adds the same error on every chain-length"], correctIndex: 3, explanation: "A chain of the wrong length is wrong by the same amount on every chain-length, so the error adds up with the distance.", sourceLessonSlug: "chaining-a-line" },
          { prompt: "On what date did the Land Ordinance's surveys begin?", options: ["July 4, 1776", "September 30, 1785", "May 20, 1785", "March 1, 1800"], correctIndex: 1, explanation: "White, p. 18: Hutchins and his group began the rectangular surveys on September 30, 1785. May 20, 1785 is the date of the Ordinance itself.", sourceLessonSlug: "chaining-a-line" },
          { prompt: "Where did the first line of the public land survey begin?", options: ["At the mouth of the Great Miami on the Ohio line", "At Vincennes on the east bank of the Wabash", "At the mouth of the Ohio on the Mississippi", "At the Pennsylvania line on the Ohio's north bank"], correctIndex: 3, explanation: "The surveys began at a post on the north bank of the Ohio River, on the west boundary of Pennsylvania (White, p. 18).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "How much line did Hutchins's crew run between September 30 and October 8, 1785?", options: ["4 miles", "40 miles", "6 miles", "24 miles"], correctIndex: 0, explanation: "White, p. 18: they \"ran 4 miles of line west from the beginning point.\"", sourceLessonSlug: "chaining-a-line" },
          { prompt: "About how many chainmen and axemen worked with Hutchins in 1785?", options: ["About 300", "About 8", "About 30", "About 3"], correctIndex: 2, explanation: "\"A crew of about 30 chainmen and axemen\" (White, p. 18). Eight was the number of other surveyors.", sourceLessonSlug: "chaining-a-line" },
          { prompt: "How does White describe the measurements of the first surveys?", options: ["Very crude", "Very exact", "Fairly close", "Fully accurate"], correctIndex: 0, explanation: "\"The resulting measurements were very crude\" (White, p. 19).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "How does White describe the ground the first lines crossed?", options: ["Flat, open, and mostly prairie", "Marshy, low, and often flooded", "Very rough, hilly, and timbered", "Sandy, dry, and nearly treeless"], correctIndex: 2, explanation: "\"The terrain was very rough, hilly, and covered with timber\" (White, p. 19).", sourceLessonSlug: "chaining-a-line" },
          { prompt: "What mathematics skill does lesson 7 practice?", options: ["Computing the area of a polygon from coordinates", "Choosing accuracy suited to a measurement's limits", "Solving right triangles with trigonometric ratios", "Converting each distance into metric units"], correctIndex: 1, explanation: "Lesson 7: choose a level of accuracy appropriate to the limitations of the measurement when reporting a quantity.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "What accuracy do Breed and Hosmer say makes the chain sufficient for the work?", options: ["One foot in every fifty", "One foot in five thousand", "One foot in fifty thousand", "One foot in five hundred"], correctIndex: 3, explanation: "\"If, in a survey, it is allowable to make an error of one foot in every five hundred feet the chain is sufficiently accurate\" (sec. 16).", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "What must you attend to for 1 in 1000 or better with a chain?", options: ["The weather, the season, and the time of day", "The pull, the plumbing, and the standard length", "The pins, the tags, and the notebook's layout", "The paces, the pedometer, and the odometer"], correctIndex: 1, explanation: "\"It is necessary to give careful attention to the pull, the plumbing, and the deviation from the standard length\" (sec. 16).", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "What accuracy do Breed and Hosmer say a steel tape gives without difficulty?", options: ["1 in 500", "1 in 50", "1 in 50,000", "1 in 5000"], correctIndex: 3, explanation: "\"With the steel tape an accuracy of 1 in 5000 can be obtained without difficulty\" with ordinary care (sec. 16).", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "Why can no book give you the accuracy of your own pacing?", options: ["It depends on your step; your spread measures it", "It is too poor to be worth measuring at all", "It is fixed by law at one foot in a hundred", "It equals the chain's, so it needs no figure"], correctIndex: 0, explanation: "It is your own step, so your calibration spread is the measure.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "In lesson 7's example, what do 123 paces of 2.5 feet give?", options: ["312.5 feet", "295.0 feet", "307.5 feet", "246.0 feet"], correctIndex: 2, explanation: "123 × 2.5 = 307.5 feet.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "How does lesson 7 report the paced distance?", options: ["About 308 feet, give or take 4, paced", "Exactly 307.5 feet, measured by pace", "Exactly 304.92 feet, from the paces", "About 300 chains, give or take one"], correctIndex: 0, explanation: "The pace ranges from 304 to 311 feet, so the result is about 308 feet, give or take 4, with the method written beside it.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "What is 4.62 chains in feet?", options: ["462.00 feet", "277.20 feet", "304.92 feet", "330.00 feet"], correctIndex: 2, explanation: "4.62 × 66 = 304.92 feet.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "At 1 in 500, about how uncertain is a 305-foot chained line?", options: ["About 6 feet", "About 0.6 foot", "About 0.06 foot", "About 60 feet"], correctIndex: 1, explanation: "305 ÷ 500 = 0.61 foot.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "Why is recording a chained line to the nearest link a good match for its accuracy?", options: ["A link is the smallest unit the law will accept", "A link is exactly one foot on every chain made", "A link is too short for any chain to measure", "A link, 0.66 foot, is about the chain's error here"], correctIndex: 3, explanation: "At 1 in 500 a 305-foot line is uncertain by about 0.6 foot, and a link is 0.66 foot.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "What is wrong with reporting a chained line as 304.92 feet?", options: ["It gives the length in the wrong unit entirely", "It claims hundredths the chain did not measure", "It leaves out the slope of the ground itself", "It ought to be written in rods, not in feet"], correctIndex: 1, explanation: "\"304.92 feet\" claims hundredths of a foot that the chain did not measure; 305 feet or 4.62 chains is honest.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "In the example, why is a 2.6-foot gap between pace and chain acceptable?", options: ["It is smaller than one link of a Gunter's chain", "It equals the chain's own error of 1 in 500", "It is under a legal limit set for paced lines", "It lies inside the pace's range of 304 to 311"], correctIndex: 3, explanation: "The chained 305 feet falls inside the paced range, which is all a rough check can ask.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "What kind of error can pacing catch?", options: ["A big blunder, such as a dropped chain", "A one-foot error in a long chained line", "A chain that has grown 0.3 foot too long", "A slope held a little low on the downhill"], correctIndex: 0, explanation: "Pacing cannot find a one-foot error, but it catches a big one at once, such as a chain-length dropped from the tally.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "Pacing gives about 380 feet and the chain gives 314 feet. What should you suspect first?", options: ["A pace that has grown longer with age", "A compass whose needle has been bent", "A chain-length dropped from the tally", "A survey foot used in place of a meter"], correctIndex: 2, explanation: "The gap is 66 feet, one full chain: Breed and Hosmer's mistake of \"omitting a whole chain- or tape-length\" (sec. 14).", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "What do Breed and Hosmer tell chainmen to do to avoid large and absurd mistakes?", options: ["Make mental estimates of distances as they go", "Pull the chain with twice the usual force", "Use only steel tapes and never a chain", "Count each link aloud from end to end"], correctIndex: 0, explanation: "\"The chainmen should make mental estimates of the distances when measuring, in order to avoid large and absurd mistakes\" (sec. 15).", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "Which of these is NOT one of lesson 7's three rules for the field book?", options: ["Write no more digits than earned", "Write the method next to it", "Round all figures to whole chains", "Keep the raw counts with it"], correctIndex: 2, explanation: "The three rules: never write more digits than the method supports, write the method next to the number, and keep the raw counts.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "Why does lesson 7 say to keep the raw counts in the field book?", options: ["So the county can tax the paced land", "So a reader can redo your arithmetic", "So the pins can be counted again later", "So the chain can be resized from them"], correctIndex: 1, explanation: "Keep the raw counts, so a reader can redo your arithmetic.", sourceLessonSlug: "practice-pace-and-chain" },
          { prompt: "A line chains at 6.05 chains. What is it in feet?", options: ["605.0 feet", "366.3 feet", "432.6 feet", "399.3 feet"], correctIndex: 3, explanation: "6.05 × 66 = 399.3 feet.", sourceLessonSlug: "practice-pace-and-chain" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Direction: the surveyor's compass
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "bearings-and-angles",
      title: "8 · Bearings in quadrant form, and turning bearings into angles",
      section: "2 · Direction: the surveyor's compass",
      recallContent: [
        {
          prompt: "At Breed and Hosmer's 1 in 500, about how uncertain is a chained line of 305 feet?",
          answer: "About 0.6 foot (305 ÷ 500), so it is honestly reported as 305 feet or 4.62 chains, not 304.92 feet.",
        },
        {
          prompt: "Pacing and chaining disagree by about 66 feet. What should you suspect?",
          answer: "A blunder: a whole chain-length dropped from the tally.",
        },
      ],
      body: `${P("BAM's surveyor's compass set up and leveled, sighting a rod, with the needle let down, the glass tapped, and the reading taken close up on camera")}

**What a bearing is.** Breed and Hosmer (sec. 24): the needle points along the magnetic meridian, and "the horizontal angle between the direction of this meridian and of any other line ... is called the Magnetic Bearing of the line, or simply its Bearing." Measured from the true, geographical meridian instead, it "is called the true bearing. In general this will not be the same as the magnetic bearing." Lesson 9 is about that difference.

**Quadrant form.** "Bearings are reckoned from 0° to 90°, the 0° being either at the N or the S point and the 90° either at the E or the W point." So a bearing always has three parts: N or S first, then an angle of 90° or less, then E or W. Breed and Hosmer's example: "if a line makes an angle of 20° with the meridian and is in the southeast quadrant its bearing is written S 20° E." Their Fig. 4, on p. 18, draws four: N 30° E, S 60° E, S 60° W and N 45° W.

**Azimuths are different.** An azimuth runs all the way round the circle. Breed and Hosmer reckon true azimuths "from the south point right-handed (clockwise) to 360°," the astronomers' habit of their day, and add that "sometimes, however, the azimuth is reckoned from the north." The series' map-and-compass course uses azimuths from north. When you meet an azimuth in an old record, find out where its zero is before you use it.

**Taking a bearing** (sec. 26). Set the compass up and level it on the line, let the needle down on its pivot, and turn the box until the sights point exactly at a rod on the line. "The glass should be tapped lightly over the end of the needle to be sure that the latter is free to move." Then read and record. "Bearings are usually read to the nearest quarter of a degree." The rule for which end to read: "When the north point of the compass-box is toward the point whose bearing is desired, read the north end of the needle. When the south point of the box is toward the point, read the south end of the needle." Read the farther end, "always looking along the needle, not across it"; looking sideways makes it seem to sit on the wrong graduation, an error called parallax. Keep the chain, the axe, the pins and your keys away from the compass, because iron moves the needle.

**The reverse bearing.** "If a bearing of the line is taken looking in the opposite direction it is called the reverse bearing." The angle stays the same and both letters flip: the reverse of N 30° E is S 30° W. Lesson 10 uses that to catch a disturbed needle.

**From bearings to angles** (sec. 41). Every bearing is "reckoned from the meridian, either N or S, toward the E and W points," so the angle between two lines from one point follows from their letters:

| The two bearings | Angle between the lines | Example |
|---|---|---|
| Same first letter, same last letter | the difference | N 20° E and N 50° E: 30° |
| Same first letter, different last letters | the sum | N 20° E and N 50° W: 70° |
| Different first letters, same last letter | 180° minus the sum | N 20° E and S 50° E: 110° |
| Different first letters, different last letters | 180° minus the difference | N 20° E and S 50° W: 150° |

Breed and Hosmer give the same four cases in their Fig. 11. If you would rather not memorize a table, turn each bearing into an azimuth from north (N 20° E is 20°, S 50° E is 130°, S 50° W is 230°, N 50° W is 310°) and subtract.

**How fine is a bearing?** The Manual says bearings are reported "to the level of precision consistent with the accuracy requirements of the survey," and that "many plats and field notes indicate bearings to only the nearest minute" (sec. 2-41). A needle read to a quarter of a degree is good to 15 minutes at best, so a compass bearing written to the minute claims more than the compass gave.

:::reveal A line runs 25° west of south. Write its bearing and its reverse bearing. ||| S 25° W; the reverse is N 25° E.

:::reveal From one point, line A bears N 40° E and line B bears S 70° E. What is the angle between them? ||| Different first letters, same last letter: 180° − (40° + 70°) = 70°. As azimuths, 40° and 110°, which also differ by 70°.

## Sources
- ${BH} Locator: secs. 24 and 26 and Fig. 4, pp. 16 to 19 (scan pp. 42 to 45); sec. 41 and Fig. 11, p. 30 (scan p. 56). ${TIER_A_PD}
- ${MANUAL} Locator: sec. 2-5, p. 28 (PDF p. 39); sec. 2-41, p. 37 (PDF p. 48). ${TIER_A}`,
    },
    {
      slug: "magnetic-declination",
      title: "9 · Magnetic north is not true north: declination, its drift, and the Vincennes line",
      section: "2 · Direction: the surveyor's compass",
      recallContent: [
        {
          prompt: "Write the bearing of a line 20° east of south, and its reverse bearing.",
          answer: "S 20° E; the reverse is N 20° W. The angle stays the same and both letters flip.",
        },
        {
          prompt: "Two lines from one point bear N 20° E and N 50° W. What angle do they make?",
          answer: "Same first letter, different last letters: the sum, 70°.",
        },
      ],
      body: `**The angle between two norths.** Breed and Hosmer (sec. 28): the direction the needle settles in "is called the magnetic meridian and rarely coincides with the true meridian. The angle which the needle makes with the true meridian is called the declination of the needle." When the north end points east of true north the declination is east; when it points west, it is west. Navigators call the same angle variation, and so did the Land Ordinance of 1785.

**It drifts, by the year and by the hour** (sec. 29). Breed and Hosmer name four changes: the secular variation, "a long, extremely slow swing"; a daily swing averaging "about 7 minutes of arc"; an annual change "so small (about one minute a year) that it need not be considered"; and irregular jumps from magnetic storms, often "from ten to twenty minutes in the United States." Writing in 1912, they add that "all declinations are now increasing" across most of the country, "at an average rate of about 3 minutes per year." It also changes with place: "The value found at one place may be considerably different from that of a place only a few miles distant" (sec. 31).

**Turning a magnetic bearing into a true one.** The safe method is to go through azimuths from north:
1. Turn the magnetic bearing into a magnetic azimuth (N 21° W is 360° − 21° = 339°).
2. Add an east declination, or subtract a west one, to get the true azimuth.
3. Turn the true azimuth back into a bearing.

Breed and Hosmer set this problem (p. 30): in 1859 a line bore N 21° W when the declination was 8° 39' W; in 1902 the declination was 10° 58' W. What did the line bear in 1902? The true azimuth is 339° − 8° 39' = 330° 21', a true bearing of N 29° 39' W. In 1902 the needle sat 10° 58' west of true, so the magnetic azimuth was 330° 21' + 10° 58' = 341° 19', a bearing of N 18° 41' W. The line had not moved; the needle had.

**What the 1785 Ordinance ordered.** The Land Ordinance, printed in full in C. A. White's history of the rectangular survey, told the surveyors to "pay the utmost attention to the variation of the magnetic needle; and shall run and note all lines by the true meridian, certifying, with every plat, what was the variation at the times of running the lines thereon noted" (p. 12). Hutchins complained of the difficulty of surveying by the true meridian at $2 a mile, and in May 1786 Congress suspended the requirement (p. 18). White's verdict on the result: "There is no indication that any attempt was made to correct the compass needle for the magnetic variation. As a result, the range lines have an actual bearing of about S. 2° W., with a maximum bearing of about S. 3° W." (p. 19). Lines meant to run due south still run a couple of degrees off it.

**The Vincennes line.** In 1803 Thomas Freeman surveyed the boundaries of the Vincennes Tract in what became Indiana. When Jared Mansfield, the surveyor general, reached Vincennes in 1804, he "made astronomic observations of the corners of the Vincennes Tract and found that Freeman had run the north boundary on a magnetic bearing of N. 78° W. instead of true bearing and that the average magnetic declination was 6° 45' E." (White, p. 49). Mansfield wrote to the Treasury that Freeman's courses had been "put down with a variation of 12° from the true meridian. On examination, they were found to deviate 12° from the magnetical meridian, instead of the true" (letter of October 26, 1804, quoted on p. 51). Work it through: a magnetic N 78° W is an azimuth of 282°; add 6° 45' east and the true azimuth is 288° 45', a true bearing of N 71° 15' W. One unconverted bearing turned a whole boundary nearly 7° away from the line the description gave. *Reading a Land Description* follows that boundary into Indiana's land records.

**Try it yourself.** NOAA's National Centers for Environmental Information keeps a US Historic Declination Calculator (https://www.ngdc.noaa.gov/geomag-web/#ushistoric) covering 1750 to 2014 for the conterminous United States. Its own record says results are "typically accurate to 30 minutes of arc." Enter Vincennes, Indiana, and the year 1804, and compare its answer with Mansfield's 6° 45' E. This course does not print the answer: the comparison is waiting on a check, and an answer printed here before anyone has done it would only be a guess.

:::reveal Your compass reads N 40° E where the declination is 5° W. What is the true bearing? ||| Magnetic azimuth 40°; subtract the west declination: 35°. True bearing N 35° E.

:::reveal Why did Hutchins's range lines in Ohio end up running about S 2° W instead of due south? ||| White finds no sign that anyone corrected the needle for the magnetic variation, after Congress suspended the true-meridian requirement in 1786.

## Sources
- ${BH} Locator: secs. 28, 29 and 31, pp. 19 to 25 (scan pp. 45 to 51); problem 3(a), p. 30 (scan p. 56). ${TIER_A_PD}
- ${WHITE} Locator: the Land Ordinance text, p. 12 (PDF p. 26); pp. 18 to 19 (PDF pp. 32 to 33); p. 49 (PDF p. 63); Mansfield's letter, p. 51 (PDF p. 65). ${TIER_A}
- ${NCEI} Locator: the "Description" (accuracy, coverage, models) and the "Time Period" under "Time & Location". ${TIER_A}`,
    },
    {
      slug: "local-attraction",
      title: "10 · Local attraction: sight the line from both ends",
      section: "2 · Direction: the surveyor's compass",
      recallContent: [
        {
          prompt: "What is the declination of the needle?",
          answer: "The angle the needle makes with the true meridian: east when the north end points east of true north, west when it points west (Breed and Hosmer, sec. 28).",
        },
        {
          prompt: "What magnetic bearing did Mansfield find Freeman had run the Vincennes Tract's north boundary on, and what declination did he observe?",
          answer: "A magnetic bearing of N 78° W, with an average declination of 6° 45' E (White, p. 49).",
        },
      ],
      body: `${P("BAM taking a bearing and its reverse on a line well clear of iron, then on a line with one end beside a parked car or a steel fence post, with the two pairs of readings compared on screen")}

**What pulls the needle aside.** Breed and Hosmer (sec. 26): "Since iron or steel near the instrument affects the position of the needle, great care should be taken that the chain, axe, or marking pins are not left near the compass. Small pieces of iron on the person, such as keys, iron buttons, or the iron wire in a stiff hat, also produce a noticeable effect on the needle." And in 1912 they already warned that "electric currents are a great source of disturbance to the needle and in cities, where electricity is so common, the compass is practically useless." Today's version of the same list is anything steel or electric near the compass: a phone, a car, a fence, a buried pipe, a power line. A disturbance at one station, from a source you may not see, is called local attraction.

**The check: sight the line from both ends** (sec. 40). "As the needle is always affected by masses of iron near the compass it is important that the bearings in any survey should be checked. This is most readily done by taking the bearing of any line from both its ends or from intermediate points on the line. If the two bearings agree it is probable that there is no local magnetic disturbance." A bearing and its reverse should share the same angle with the letters flipped, exactly 180° apart.

**Breed and Hosmer's worked case** (their Fig. 10, p. 29). With the compass at A, the bearing of AB reads N 50¼° E. With the compass at B, the reverse bearing BA reads S 49° W. They disagree by 1¼°, so "there is local attraction at one or both points." Which one?
1. From B, sight a third point C that looks free of disturbance. BC reads S 72° E.
2. Move to C and sight back. CB reads N 72° W.
3. That pair agrees, so there is no local attraction at B or C. The reading taken at B, S 49° W, is therefore the true magnetic bearing of the line, and "there is 1¼° error in all bearings taken at A."
4. If BC and CB had not agreed, take the bearing and reverse of a new line CD, and keep going "until a line is found whose bearing and reverse bearing differ by exactly 180°."

**Correcting the bad station.** A disturbance at A turns every reading taken at A by the same amount, so the fix is one number applied to all of them. At A the line to B read N 50¼° E, an azimuth of 50¼°, when its true magnetic azimuth was 49°: the readings at A are 1¼° too far clockwise. Take 1¼° off every azimuth read at A. A reading of N 10° W at A (an azimuth of 350°) becomes 348¾°, or N 11¼° W.

**Why angles survive it.** Because every bearing at one station is turned by the same amount, the angle between two lines read at that station does not change. Subtract one disturbed azimuth from another and the disturbance cancels. That is why a compass traverse can still close when one corner sits next to a steel post: the angles are sound even though the bearings at that corner are not.

**Two more habits from the same chapter** (secs. 38 and 39). The common sources of error are "iron or steel near compass" and "parallax in reading needle." The common mistakes are reading the wrong end of the needle, not letting the needle down on the pivot, and reading the wrong side of the tenth degree, "61° instead of 59°."

**To try.** Choose a line well clear of fences and cars, read its bearing from each end, and confirm the pair sits 180° apart. Then repeat with one end beside a steel post and watch the pair disagree.

:::reveal From A, line AB reads N 30° E. From B, line BA reads S 32° W. What does that tell you, and what do you do next? ||| The pair is 2° off from a true reverse, so there is local attraction at A, at B, or both. Sight a third point C from B, then sight back from C; whichever station gives a matching pair is the clean one.

:::reveal Every azimuth read at station D is known to be 2° too far counterclockwise. A reading at D is S 40° E. What is the corrected bearing? ||| S 40° E is an azimuth of 140°. Too far counterclockwise means add 2°: 142°, which is S 38° E.

## Sources
- ${BH} Locator: sec. 26, pp. 18 to 19 (scan pp. 44 to 45); secs. 38 and 39, p. 28 (scan p. 54); sec. 40 and Fig. 10, p. 29 (scan p. 55). ${TIER_A_PD}`,
    },
    {
      slug: "why-the-needle-was-banned",
      title: "11 · Why the needle compass is banned from official surveys, and what replaced it",
      section: "2 · Direction: the surveyor's compass",
      recallContent: [
        {
          prompt: "How do Breed and Hosmer check a survey for local attraction?",
          answer: "Take the bearing of each line from both ends. If a bearing and its reverse differ by exactly 180°, there is probably no disturbance; if not, find a clean line and work back to the bad station.",
        },
        {
          prompt: "Why does local attraction at one station leave the angles measured there unchanged?",
          answer: "It turns every bearing at that station by the same amount, so the difference between any two of them stays the same.",
        },
      ],
      body: `**Three weaknesses, already met.** The needle compass carries three faults this section has shown. It points to a magnetic north that differs from true north by an amount that changes with the year, the hour and the place (lesson 9). Iron and electric current near it pull it aside without warning (lesson 10). And it reads coarsely: "Bearings are usually read to the nearest quarter of a degree" (Breed and Hosmer, sec. 26). A quarter of a degree sounds small, but at the end of a mile-long line it moves the far end about 23 feet sideways (5,280 × tan 0.25° = 23).

**Where it failed in the field.** C. A. White's history records the moment the needle met iron country. William A. Burt, who had contracted for public land surveys in Michigan from 1833, "found that iron ore deposits made needle compass surveying nearly impossible." He invented a "True Meridian Finding" instrument, "since known as Burt's Solar Compass," had it built in 1835 by William J. Young of Philadelphia, and patented it on February 25, 1836. White's judgment: "The Burt Solar Compass made possible the accurate extension of the rectangular system of surveying in the iron ore regions and throughout the western United States" (p. 96).

It did not take over at once. In 1841 the surveyor general in Arkansas "was having trouble with 'local attraction' to such a degree on the Sabine River that he had to relinquish the contracts for approximately 1,000 miles of lines." That July the General Land Office sent a report on Burt's solar compass to every surveyor general and "recommended the instrument should be put to use in all the surveying districts. It wasn't, however." (p. 99).

**What the solar compass did differently.** Instead of a needle, it found the true meridian from the sun. The 2009 Manual of Surveying Instructions says why that mattered: "a properly adjusted solar compass or solar transit determined the true meridian at each instrument setup. Matched with traditional chaining, a line of constant bearing can be run by instrumental orientation without any special reduction of the survey data" (the paragraphs after sec. 2-8). No declination to look up, and no iron to fool it.

**The rule today.** The Manual lists the instruments the public lands have been surveyed with: "Historically, these include the magnetic needle, solar compass, transit with solar attachment, and direct altitude or hour angle observations on the Sun, Polaris, or other stars. The use of direct astronomical observations to determine direction is effective and still used. Only the use of the needle compass is unequivocally prohibited." Other valid methods "include gyroscopic instruments, satellite receivers, orientation from the National Spatial Reference System (NSRS), and identifiable lines between monuments of adjoining official surveys" (sec. 2-4). Every line is reported in bearings "with reference to the true meridian" (sec. 2-5).

**So why learn the compass at all?** Because a great deal of the record was made with it. The first lines in Ohio were run "with a compass or circumferentor, with orientation at each point by using the compass needle" (White, p. 18), and old deeds across the country give magnetic bearings. To read such a record you need to know what its bearings could and could not mean: which way the needle pointed that year, what a quarter of a degree amounts to, and that a station near iron can be wrong by a degree or more. That is the knowledge this section gives you. It is also why this course never asks you to settle a line with a compass: the official surveys stopped trusting the needle, and so should you.

:::reveal At the end of a 2-mile line, about how far sideways does a quarter-degree error move the far end? ||| 10,560 × tan 0.25° is about 46 feet, twice the 23 feet of a 1-mile line.

:::reveal What problem pushed William Burt to invent the solar compass? ||| Iron ore deposits in Michigan, which "made needle compass surveying nearly impossible" (White, p. 96).

## Sources
- ${MANUAL} Locator: secs. 2-4 and 2-5, and the paragraphs after sec. 2-8, p. 28 (PDF p. 39). ${TIER_A}
- ${WHITE} Locator: p. 18 (PDF p. 32); p. 96 (PDF p. 110); p. 99 (PDF p. 113). ${TIER_A}
- ${BH} Locator: sec. 26, p. 18 (scan p. 44). ${TIER_A_PD}`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Direction: the surveyor's compass",
      section: "2 · Direction: the surveyor's compass",
      body: "A graded check on quadrant bearings and angles, magnetic declination, local attraction, and why the needle compass left the official surveys. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What do Breed and Hosmer call the horizontal angle between the magnetic meridian and a line?", options: ["Its magnetic bearing", "Its declination", "Its local attraction", "Its reverse azimuth"], correctIndex: 0, explanation: "\"This angle is called the Magnetic Bearing of the line, or simply its Bearing\" (sec. 24).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is a bearing called when it is measured from the geographical meridian?", options: ["The reverse bearing", "The magnetic bearing", "The true bearing", "The grid bearing"], correctIndex: 2, explanation: "Reckoned from the geographical meridian, \"it is called the true bearing\" (sec. 24).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is the largest angle a bearing in quadrant form can have?", options: ["180°", "90°", "360°", "45°"], correctIndex: 1, explanation: "\"Bearings are reckoned from 0° to 90°\" from the N or S point toward E or W.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "A line makes 20° with the meridian in the southeast quadrant. How is its bearing written?", options: ["E 20° S", "N 20° E", "S 70° E", "S 20° E"], correctIndex: 3, explanation: "Breed and Hosmer's own example: \"its bearing is written S 20° E.\"", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "In quadrant form, which letter always comes first?", options: ["E or W", "N or S", "N or E", "S or W"], correctIndex: 1, explanation: "The 0° is at the N or the S point, so the bearing starts with N or S and ends with E or W.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "Which of these is NOT a correctly written quadrant bearing?", options: ["S 60° W", "N 45° W", "S 10° E", "N 95° E"], correctIndex: 3, explanation: "Bearings run from 0° to 90°, so N 95° E cannot be one.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "From which point do Breed and Hosmer reckon true azimuths?", options: ["From the south, clockwise to 360°", "From the north, clockwise to 360°", "From the east, clockwise to 360°", "From the west, clockwise to 360°"], correctIndex: 0, explanation: "They reckon azimuths \"from the south point right-handed (clockwise) to 360°,\" adding that sometimes the azimuth is reckoned from the north.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What should you find out before using an azimuth from an old record?", options: ["What color its ink is", "Who owned the compass", "Where its zero point is", "How long the line was"], correctIndex: 2, explanation: "Breed and Hosmer reckon from the south and others from the north, so find out where its zero is first.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "Why is the compass glass tapped lightly before a bearing is read?", options: ["To be sure the needle is free to move", "To clear dew from the face of the glass", "To set the needle's dip counterweight", "To reverse the letters E and W on it"], correctIndex: 0, explanation: "\"The glass should be tapped lightly over the end of the needle to be sure that the latter is free to move\" (sec. 26).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "To what do Breed and Hosmer say bearings are usually read?", options: ["The nearest second of arc", "The nearest tenth of a degree", "The nearest quarter of a degree", "The nearest whole five degrees"], correctIndex: 2, explanation: "\"Bearings are usually read to the nearest quarter of a degree\" (sec. 26).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "The north point of the compass box is toward the point being sighted. Which end of the needle do you read?", options: ["The south end", "The north end", "Either end", "Both, averaged"], correctIndex: 1, explanation: "\"When the north point of the compass-box is toward the point whose bearing is desired, read the north end of the needle.\"", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "The south point of the compass box is toward the point being sighted. Which end of the needle do you read?", options: ["The north end", "Whichever is nearer", "The middle of it", "The south end"], correctIndex: 3, explanation: "\"When the south point of the box is toward the point, read the south end of the needle.\"", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is parallax in reading a compass needle?", options: ["Reading the near end instead of the far end", "Reading it sideways onto the wrong graduation", "Reading it before tapping the glass lightly", "Reading it with the needle still raised up"], correctIndex: 1, explanation: "Looking at the needle sideways can make it appear to sit on a graduation \"which is really at one side of it. This error is called parallax\" (sec. 26).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "How should you look at the needle when reading it?", options: ["Across the needle, at its nearer end", "From above, at the needle's center", "From below, through the glass bottom", "Along the needle, at its farther end"], correctIndex: 3, explanation: "Read the farther end, \"always looking along the needle, not across it\" (sec. 26).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "Which of these should be kept away from the compass while reading it?", options: ["The chain, axe, pins and keys", "The sighting rod and the flags", "The notebook and the pencil", "The tripod legs and the bubbles"], correctIndex: 0, explanation: "Iron near the instrument moves the needle, so keep the chain, axe and marking pins away, and mind keys and iron buttons (sec. 26).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is a reverse bearing?", options: ["A bearing read from the needle's south end", "A bearing corrected for the declination", "A line's bearing taken looking the opposite way", "A bearing measured from the true meridian"], correctIndex: 2, explanation: "\"If a bearing of the line is taken looking in the opposite direction it is called the reverse bearing\" (sec. 26).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is the reverse bearing of N 30° E?", options: ["S 30° W", "S 30° E", "N 30° W", "S 60° W"], correctIndex: 0, explanation: "The angle stays the same and both letters flip.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is the reverse bearing of S 65° E?", options: ["N 65° E", "S 65° W", "N 65° W", "N 25° W"], correctIndex: 2, explanation: "Flip both letters and keep the angle.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "Two bearings share both letters, such as N 20° E and N 50° E. What angle do the lines make?", options: ["Their total sum, 70°", "Their difference, 30°", "180° minus sum, 110°", "180° minus gap, 150°"], correctIndex: 1, explanation: "Same first letter and same last letter: the angle is the difference of the bearings.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "Two bearings share the first letter but not the last, such as N 20° E and N 50° W. What angle do the lines make?", options: ["Their difference, 30°", "180° minus sum, 110°", "180° minus gap, 150°", "Their total sum, 70°"], correctIndex: 3, explanation: "Same first letter, different last letters: the angle is the sum.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is the angle between lines bearing N 20° E and S 50° E from one point?", options: ["70°", "110°", "30°", "150°"], correctIndex: 1, explanation: "Different first letters, same last letter: 180° − (20° + 50°) = 110°.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is the angle between lines bearing N 20° E and S 50° W from one point?", options: ["110°", "70°", "30°", "150°"], correctIndex: 3, explanation: "Different first letters and different last letters: 180° − (50° − 20°) = 150°.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is S 50° E as an azimuth from north?", options: ["130°", "50°", "230°", "310°"], correctIndex: 0, explanation: "From north, clockwise: 180° − 50° = 130°.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What is N 50° W as an azimuth from north?", options: ["50°", "130°", "310°", "230°"], correctIndex: 2, explanation: "360° − 50° = 310°.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "To what precision does the Manual say many plats and field notes give bearings?", options: ["Only the nearest minute", "Only the nearest degree", "The nearest second always", "The nearest quarter degree"], correctIndex: 0, explanation: "\"Many plats and field notes indicate bearings to only the nearest minute\" (sec. 2-41).", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "Why does lesson 8 say a compass bearing written to the minute claims too much?", options: ["A needle cannot be read at all closer than one degree", "The Manual forbids any bearing given in whole minutes", "A needle read to a quarter degree is good to 15 minutes", "A minute is larger than a quarter degree on the circle"], correctIndex: 2, explanation: "A quarter of a degree is 15 minutes, so the compass gave no more than that.", sourceLessonSlug: "bearings-and-angles" },
          { prompt: "What do Breed and Hosmer call the angle the needle makes with the true meridian?", options: ["The dip of the needle", "The declination of the needle", "The parallax of the needle", "The bearing of the needle"], correctIndex: 1, explanation: "\"The angle which the needle makes with the true meridian is called the declination of the needle\" (sec. 28).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "When the north end of the needle points west of true north, what is the declination called?", options: ["East", "Negative dip", "Reverse", "West"], correctIndex: 3, explanation: "When the north end points west of true north it has a west declination (sec. 28).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What do navigators, and the 1785 Ordinance, call the angle surveyors call declination?", options: ["Deviation", "Variation", "Inclination", "Correction"], correctIndex: 1, explanation: "Breed and Hosmer note that surveyors' declination \"is usually called Variation by navigators,\" and the Ordinance speaks of \"the variation of the magnetic needle.\"", sourceLessonSlug: "magnetic-declination" },
          { prompt: "How do Breed and Hosmer describe the secular variation?", options: ["A daily swing of a few minutes", "A sudden jump in a magnetic storm", "A yearly change of one minute", "A long, extremely slow swing"], correctIndex: 3, explanation: "\"The Secular Variation is a long, extremely slow swing\" (sec. 29).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "About how large is the daily swing of the needle, on average?", options: ["About 7 minutes of arc", "About 7 degrees of arc", "About 7 seconds of arc", "About 70 minutes of arc"], correctIndex: 0, explanation: "The daily variation \"averages about 7 minutes of arc\" (sec. 29).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What do Breed and Hosmer say about the annual variation?", options: ["It is the largest change of all the four", "It reverses the needle every few years", "It is so small it need not be considered", "It must be applied to every bearing read"], correctIndex: 2, explanation: "\"So small (about one minute a year) that it need not be considered in surveying work\" (sec. 29).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What causes the irregular variations of the needle?", options: ["Chiefly magnetic storms", "Chiefly the moon's phases", "Chiefly the air temperature", "Chiefly the day of the week"], correctIndex: 0, explanation: "\"Irregular Variations in the declination are due chiefly to magnetic storms\" (sec. 29).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "How large do Breed and Hosmer say storm variations often are in the United States?", options: ["From ten to twenty degrees", "From one to two seconds", "From ten to twenty minutes", "From thirty to sixty degrees"], correctIndex: 2, explanation: "Such storms \"often cause variations of from ten to twenty minutes in the United States\" (sec. 29).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "Writing in 1912, at what average rate did Breed and Hosmer say declinations were increasing?", options: ["About 3 degrees per year", "About 3 minutes per year", "About 3 seconds per year", "About 30 minutes per year"], correctIndex: 1, explanation: "\"At an average rate of about 3 minutes per year\" (sec. 29).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What do Breed and Hosmer say about declination at two places a few miles apart?", options: ["It is always exactly the same", "It differs only in magnetic storms", "It differs only by the daily swing", "It may be considerably different"], correctIndex: 3, explanation: "\"The value found at one place may be considerably different from that of a place only a few miles distant\" (sec. 31).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What is N 21° W as an azimuth from north?", options: ["21°", "339°", "159°", "201°"], correctIndex: 1, explanation: "360° − 21° = 339°.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "When converting a magnetic azimuth to a true azimuth, what do you do with an east declination?", options: ["Subtract it", "Double it", "Ignore it", "Add it"], correctIndex: 3, explanation: "Add an east declination, or subtract a west one, to get the true azimuth.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "A compass reads N 40° E where the declination is 5° W. What is the true bearing?", options: ["N 35° E", "N 45° E", "N 40° W", "S 35° E"], correctIndex: 0, explanation: "Magnetic azimuth 40°, minus the 5° west declination: 35°, or N 35° E.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "In Breed and Hosmer's problem, a line bore N 21° W in 1859 with a declination of 8° 39' W. What was its true bearing?", options: ["N 12° 21' W", "N 21° 00' W", "N 29° 39' W", "N 18° 41' W"], correctIndex: 2, explanation: "Azimuth 339° − 8° 39' = 330° 21', a true bearing of N 29° 39' W.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "In the same problem, with a declination of 10° 58' W in 1902, what did the line bear by compass?", options: ["N 18° 41' W", "N 29° 39' W", "N 21° 00' W", "N 40° 37' W"], correctIndex: 0, explanation: "True azimuth 330° 21' + 10° 58' = 341° 19', a magnetic bearing of N 18° 41' W.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "In that problem, why did the compass bearing change between 1859 and 1902?", options: ["The line was moved by a new owner", "The chain had grown 0.3 foot longer", "The needle moved; the line did not", "The survey foot had been redefined"], correctIndex: 2, explanation: "The line had not moved; the declination had changed from 8° 39' W to 10° 58' W.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What did the 1785 Land Ordinance tell the surveyors to do about the needle?", options: ["Run every line by the needle and ignore its variation", "Note its variation and run lines by the true meridian", "Use only a solar compass on every line they ran", "Correct each bearing to the meridian of London"], correctIndex: 1, explanation: "Pay \"the utmost attention to the variation of the magnetic needle; and shall run and note all lines by the true meridian\" (White, p. 12).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What did the Ordinance require the surveyors to certify with every plat?", options: ["The names of all the chainmen hired", "The price each lot would be sold for", "The weather on each day of the work", "The variation when its lines were run"], correctIndex: 3, explanation: "\"Certifying, with every plat, what was the variation at the times of running the lines thereon noted\" (White, p. 12).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What did Congress do about the true-meridian requirement in May 1786?", options: ["Doubled it", "Suspended it", "Enforced it", "Funded it"], correctIndex: 1, explanation: "On May 9 and 12, 1786, Congress passed resolutions suspending the true meridian requirement (White, p. 18).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What actual bearing do Hutchins's range lines in Ohio have, according to White?", options: ["Exactly due south", "About S 12° E", "About N 78° W", "About S 2° W"], correctIndex: 3, explanation: "\"The range lines have an actual bearing of about S. 2° W., with a maximum bearing of about S. 3° W.\" (White, p. 19).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "Why do the Ohio range lines run off due south, according to White?", options: ["No one corrected the needle for its variation", "The chain was too long on every range line", "The Ordinance ordered lines to run S 2° W", "The surveyors used the meridian of London"], correctIndex: 0, explanation: "\"There is no indication that any attempt was made to correct the compass needle for the magnetic variation\" (White, p. 19).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "Who surveyed the boundaries of the Vincennes Tract in 1803?", options: ["Thomas Hutchins", "William Burt", "Thomas Freeman", "Absalom Martin"], correctIndex: 2, explanation: "White, p. 48: \"Thomas Freeman had already surveyed the boundaries of the Vincennes Tract in 1803.\"", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What did Mansfield find about Freeman's north boundary of the Vincennes Tract?", options: ["It ran on a magnetic bearing, not a true one", "It ran exactly on the true meridian of 1804", "It was chained with a stretched engineer's chain", "It had never been marked on the ground at all"], correctIndex: 0, explanation: "Freeman \"had run the north boundary on a magnetic bearing of N. 78° W. instead of true bearing\" (White, p. 49).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What average declination did Mansfield observe at Vincennes?", options: ["12° 00' E", "6° 45' W", "6° 45' E", "2° 00' W"], correctIndex: 2, explanation: "\"The average magnetic declination was 6° 45' E.\" (White, p. 49).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "In Mansfield's letter, how far had Freeman's courses been put down from the true meridian?", options: ["6° 45'", "12°", "78°", "2°"], correctIndex: 1, explanation: "Freeman's courses \"were put down with a variation of 12° from the true meridian\" and were found to deviate 12° from the magnetic meridian instead (White, p. 51).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "With a declination of 6° 45' E, what true bearing is a magnetic N 78° W?", options: ["N 84° 45' W", "N 78° 00' W", "S 71° 15' W", "N 71° 15' W"], correctIndex: 3, explanation: "Magnetic azimuth 282° plus 6° 45' east is 288° 45', a true bearing of N 71° 15' W.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What years does the NOAA US Historic Declination Calculator cover?", options: ["1500 to 1900", "1750 to 2014", "1900 to 2025", "1785 to 1850"], correctIndex: 1, explanation: "The NCEI record gives a time period of 1750 to 2014, for the conterminous United States.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "How accurate does NOAA say the historic calculator's results typically are?", options: ["To 30 seconds of arc", "To 3 degrees of arc", "To 1 second of arc", "To 30 minutes of arc"], correctIndex: 3, explanation: "\"While results are typically accurate to 30 minutes of arc\" (NCEI record, Description).", sourceLessonSlug: "magnetic-declination" },
          { prompt: "Why does lesson 9 not print the calculator's value for Vincennes in 1804?", options: ["The comparison awaits a check; a printed guess is worse", "The calculator does not cover any year before 1900", "The calculator gives no values for Indiana at all", "Mansfield's value is known to be wrong, so it is moot"], correctIndex: 0, explanation: "The comparison with Mansfield's 6° 45' E is waiting on a check, and an answer printed before anyone has done it would only be a guess.", sourceLessonSlug: "magnetic-declination" },
          { prompt: "What do Breed and Hosmer warn about small pieces of iron on the surveyor's person?", options: ["They have no effect unless they are magnetized", "They matter only when the compass is in a city", "Keys and iron buttons noticeably move the needle", "They steady the needle and should be carried"], correctIndex: 2, explanation: "\"Small pieces of iron on the person, such as keys, iron buttons, or the iron wire in a stiff hat, also produce a noticeable effect on the needle\" (sec. 26).", sourceLessonSlug: "local-attraction" },
          { prompt: "What did Breed and Hosmer say about the compass in cities in 1912?", options: ["It is practically useless, due to electric currents", "It is more accurate, because of the straight streets", "It is required by law on every lot in the city", "It works only at night, when the streetcars stop"], correctIndex: 0, explanation: "\"Electric currents are a great source of disturbance to the needle and in cities, where electricity is so common, the compass is practically useless\" (sec. 26).", sourceLessonSlug: "local-attraction" },
          { prompt: "What is local attraction?", options: ["The pull of the earth's magnetic pole", "The daily swing of the needle at noon", "A needle disturbance at one station", "The difference between two norths"], correctIndex: 2, explanation: "A disturbance at one station, from iron or current nearby, is local attraction (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "How do Breed and Hosmer say bearings are most readily checked for local attraction?", options: ["Take each bearing twice from the same end", "Take each line's bearing from both its ends", "Compare each bearing with a published map", "Take each bearing with two different compasses"], correctIndex: 1, explanation: "\"This is most readily done by taking the bearing of any line from both its ends or from intermediate points on the line\" (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "If a bearing and its reverse agree, what do Breed and Hosmer conclude?", options: ["It is certain the declination is zero there", "It proves the line is on the true meridian", "It shows the chain is at standard length", "It is probable there is no local disturbance"], correctIndex: 3, explanation: "\"If the two bearings agree it is probable that there is no local magnetic disturbance\" (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "How far apart should a bearing and its reverse be?", options: ["Exactly 90°", "Exactly 180°", "Exactly 360°", "Exactly 45°"], correctIndex: 1, explanation: "Same angle, letters flipped: exactly 180° apart, which is the test in sec. 40.", sourceLessonSlug: "local-attraction" },
          { prompt: "In Breed and Hosmer's case, AB reads N 50¼° E and BA reads S 49° W. What do they conclude first?", options: ["There is no local attraction at either point", "The declination at A is exactly 50¼° east", "The chain between A and B was a link too long", "There is local attraction at one or both points"], correctIndex: 3, explanation: "The pair disagrees by 1¼°, so \"there is local attraction at one or both points\" (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "In that case, what is the next step to find which station is disturbed?", options: ["Sight a third point C and check BC against CB", "Retake AB from A until the reading changes", "Average the two readings and record that", "Move the compass a few feet and try again"], correctIndex: 0, explanation: "Turn the compass toward a point C apparently free from disturbance and compare the bearing BC with the reverse CB (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "BC reads S 72° E and CB reads N 72° W. What does that pair show?", options: ["Local attraction at B and at C", "Local attraction at C but not B", "No local attraction at B or C", "A declination of 72° at point B"], correctIndex: 2, explanation: "The pair is exactly reversed, which \"indicates that there is no local attraction at C or B\" (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "In the worked case, which reading is the correct magnetic bearing of line BA?", options: ["S 49° W, read at B", "N 50¼° E, read at A", "S 50¼° W, averaged", "N 72° W, read at C"], correctIndex: 0, explanation: "With B shown to be clean, \"S 49° W is the correct bearing of line BA\" (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "How much error is there in all bearings taken at A, in the worked case?", options: ["50¼°", "72°", "1¼°", "¼°"], correctIndex: 2, explanation: "\"There is 1¼° error in all bearings taken at A\" (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "If BC and CB had not agreed either, what do Breed and Hosmer do next?", options: ["Give up the compass and pace every line", "Check the bearing and reverse of line CD", "Average all the readings taken so far", "Move station B to the far side of A"], correctIndex: 1, explanation: "Take the bearing and reverse bearing of a new line CD, continuing until a pair differs by exactly 180° (sec. 40).", sourceLessonSlug: "local-attraction" },
          { prompt: "Why can one correction fix every bearing read at a disturbed station?", options: ["The disturbance affects only the first bearing read", "The disturbance vanishes once the glass is tapped", "The disturbance follows the needle's daily swing", "The disturbance turns all of them the same amount"], correctIndex: 3, explanation: "A disturbance at one station turns every reading taken there by the same amount, so one number corrects them all.", sourceLessonSlug: "local-attraction" },
          { prompt: "At A the readings are 1¼° too far clockwise. What does a reading of N 10° W at A become?", options: ["N 8¾° W", "N 11¼° W", "N 10° E", "S 11¼° W"], correctIndex: 1, explanation: "N 10° W is an azimuth of 350°; take off 1¼° to get 348¾°, which is N 11¼° W.", sourceLessonSlug: "local-attraction" },
          { prompt: "Every azimuth at station D is 2° too far counterclockwise. What does a reading of S 40° E at D become?", options: ["S 42° E", "S 40° W", "N 38° E", "S 38° E"], correctIndex: 3, explanation: "S 40° E is an azimuth of 140°; add 2° to get 142°, which is S 38° E.", sourceLessonSlug: "local-attraction" },
          { prompt: "Why does local attraction at a station not change the angles measured there?", options: ["Both bearings shift alike, so their difference holds", "The needle is steadier when it reads two lines", "The angle is read from a separate graduated arc", "The disturbance cancels once the line is chained"], correctIndex: 0, explanation: "Every bearing at the station is turned by the same amount, so subtracting one from another cancels the disturbance.", sourceLessonSlug: "local-attraction" },
          { prompt: "What two common sources of error in compass work do Breed and Hosmer list?", options: ["Wind on the chain, and temperature", "Sag of the tape, and a wrong pull", "Iron near the compass, and parallax", "Rain on the glass, and loose screws"], correctIndex: 2, explanation: "Sec. 38: \"Iron or steel near compass\" and \"Parallax in reading needle.\"", sourceLessonSlug: "local-attraction" },
          { prompt: "Which of these is one of Breed and Hosmer's common compass mistakes?", options: ["Not letting the needle down on the pivot", "Leveling the bubbles before every reading", "Tapping the glass before reading the needle", "Reading the farther end of the needle"], correctIndex: 0, explanation: "Sec. 39 lists reading the wrong end of the needle, not letting the needle down on the pivot, and reading the wrong side of the tenth degree.", sourceLessonSlug: "local-attraction" },
          { prompt: "What reading do Breed and Hosmer give as an example of reading the wrong side of the tenth degree?", options: ["16° instead of 61°", "60° instead of 50°", "61° instead of 59°", "59° instead of 95°"], correctIndex: 2, explanation: "Sec. 39: \"reading 61° instead of 59°.\"", sourceLessonSlug: "local-attraction" },
          { prompt: "From A, line AB reads N 30° E; from B, line BA reads S 32° W. What does that show?", options: ["No local attraction at either station", "Local attraction at A, at B, or at both", "A declination of 2° east at both points", "A chain error of two links on the line"], correctIndex: 1, explanation: "A true reverse of N 30° E is S 30° W; a 2° mismatch means a disturbance at one or both stations.", sourceLessonSlug: "local-attraction" },
          { prompt: "To what do Breed and Hosmer say compass bearings are usually read?", options: ["The nearest single minute", "The nearest tenth of a degree", "The nearest whole degree", "The nearest quarter degree"], correctIndex: 3, explanation: "\"Bearings are usually read to the nearest quarter of a degree\" (sec. 26).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "About how far does a quarter-degree error move the far end of a one-mile line?", options: ["About 2.3 feet", "About 23 feet", "About 230 feet", "About 0.23 foot"], correctIndex: 1, explanation: "5,280 × tan 0.25° is about 23 feet.", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "About how far does a quarter-degree error move the far end of a two-mile line?", options: ["About 23 feet", "About 92 feet", "About 4.6 feet", "About 46 feet"], correctIndex: 3, explanation: "10,560 × tan 0.25° is about 46 feet.", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Which three weaknesses of the needle compass does lesson 11 bring together?", options: ["Changing declination, local attraction, coarse reading", "Heavy weight, high price, and fragile glass covers", "Slow setup, short range, and a tendency to rust", "Dim sights, loose legs, and poorly marked tags"], correctIndex: 0, explanation: "Lesson 11 gathers lesson 9's declination, lesson 10's local attraction, and the quarter-degree reading.", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "What made needle compass surveying nearly impossible for William Burt in Michigan?", options: ["Heavy snowfall", "Dense pine forests", "Iron ore deposits", "Flooded river valleys"], correctIndex: 2, explanation: "Burt \"found that iron ore deposits made needle compass surveying nearly impossible\" (White, p. 96).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "What did Burt call the instrument now known as Burt's Solar Compass?", options: ["A \"True Meridian Finding\" instrument", "A \"Magnetic Needle Corrector\" device", "A \"Polar Star Sighting\" instrument", "A \"Local Attraction Detector\" box"], correctIndex: 0, explanation: "White, p. 96: Burt \"invented his 'True Meridian Finding' instrument, since known as Burt's Solar Compass.\"", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Who built Burt's solar compass in 1835?", options: ["Edmund Gunter of London, England", "Thomas Hutchins of Pittsburgh", "William J. Young of Philadelphia", "Jared Mansfield of Marietta, Ohio"], correctIndex: 2, explanation: "Burt \"had it built by William J. Young of Philadelphia\" (White, p. 96).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "When was Burt's solar compass patented?", options: ["September 30, 1785", "February 25, 1836", "October 26, 1804", "July 7, 1841"], correctIndex: 1, explanation: "\"It was patented on February 25, 1836\" (White, p. 96).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "What does White say the Burt Solar Compass made possible?", options: ["The first survey of the boundary of Pennsylvania", "Surveys without any chain or measured distance", "Surveys that never needed a deputy surveyor", "Accurate surveys in iron country and the West"], correctIndex: 3, explanation: "It \"made possible the accurate extension of the rectangular system of surveying in the iron ore regions and throughout the western United States\" (White, p. 96).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Why did the Arkansas surveyor general give up contracts for about 1,000 miles of lines in 1841?", options: ["A lack of chainmen willing to work", "Local attraction on the Sabine River", "A treaty that closed the whole region", "Flooding that washed out every corner"], correctIndex: 1, explanation: "He \"was having trouble with 'local attraction' to such a degree on the Sabine River that he had to relinquish the contracts\" (White, p. 99).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "What happened after the General Land Office recommended the solar compass for all districts in 1841?", options: ["Every district adopted it within a year", "Congress banned it as too expensive", "The needle compass was outlawed that day", "It wasn't put to use in all of them"], correctIndex: 3, explanation: "The GLO \"recommended the instrument should be put to use in all the surveying districts. It wasn't, however.\" (White, p. 99).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "How did a solar compass find direction, according to the Manual?", options: ["It found the true meridian at each setup", "It found magnetic north more steadily", "It measured the angle to a fixed beacon", "It copied the bearing from the last plat"], correctIndex: 0, explanation: "\"A properly adjusted solar compass or solar transit determined the true meridian at each instrument setup\" (Manual, after sec. 2-8).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Which direction instrument does the Manual unequivocally prohibit on official surveys?", options: ["The solar compass", "The solar transit", "The needle compass", "The gyroscope"], correctIndex: 2, explanation: "\"Only the use of the needle compass is unequivocally prohibited\" (sec. 2-4).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Which method does the Manual call effective and still used?", options: ["Direct astronomical observations", "Readings of the magnetic needle", "Bearings copied from county maps", "Pacing each line from both ends"], correctIndex: 0, explanation: "\"The use of direct astronomical observations to determine direction is effective and still used\" (sec. 2-4).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Which of these does the Manual list as a valid modern method for determining direction?", options: ["Magnetic needles", "Pocket compasses", "Satellite receivers", "Odometer wheels"], correctIndex: 2, explanation: "Valid methods \"include gyroscopic instruments, satellite receivers, orientation from the National Spatial Reference System (NSRS), and identifiable lines between monuments of adjoining official surveys\" (sec. 2-4).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Against what does the Manual say every PLSS line's bearing is reported?", options: ["The magnetic meridian", "The true meridian", "The meridian of London", "The nearest road"], correctIndex: 1, explanation: "Bearings are stated \"with reference to the true meridian\" (sec. 2-5).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "How were the first lines in Ohio oriented, according to White?", options: ["By a solar compass at each station", "By stars observed every few miles", "By a transit run on a true meridian", "By the compass needle at each point"], correctIndex: 3, explanation: "The line \"was run with a compass or circumferentor, with orientation at each point by using the compass needle\" (White, p. 18).", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Why does this course still teach the needle compass?", options: ["It remains the standard for official surveys", "Much of the old record was made with it", "It is more accurate than a solar compass", "It is required to read a modern deed today"], correctIndex: 1, explanation: "A great deal of the record was made with it, and reading that record means knowing what its bearings could and could not mean.", sourceLessonSlug: "why-the-needle-was-banned" },
          { prompt: "Why does this course never ask you to settle a line with a compass?", options: ["The compass reads only in degrees, not minutes", "The law requires a chain in every measurement", "The compass cannot take a reverse bearing", "The official surveys stopped trusting the needle"], correctIndex: 3, explanation: "The Manual prohibits the needle compass on official surveys, and lesson 11 says you should not trust it to settle a line either.", sourceLessonSlug: "why-the-needle-was-banned" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Elevation: running a level line
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "differential-leveling",
      title: "12 · Differential leveling: backsight, foresight, turning point",
      section: "3 · Elevation: running a level line",
      recallContent: [
        {
          prompt: "What problem pushed William Burt to invent his solar compass?",
          answer: "Iron ore deposits in Michigan that \"made needle compass surveying nearly impossible\" (White, p. 96).",
        },
        {
          prompt: "Which direction instrument does the 2009 Manual unequivocally prohibit, and against what is every PLSS bearing reported?",
          answer: "The needle compass; bearings are reported with reference to the true meridian (secs. 2-4 and 2-5).",
        },
      ],
      body: `${P("BAM setting up and leveling his level, a helper holding the rod plumb on a stone, and a short level line run across two turning points with the field book filled in on screen")}

**The simplest case.** Breed and Hosmer (sec. 111): "In order to obtain the difference in elevation between two points, hold the rod at the first point and, while the instrument is level, take a rod-reading. This is the distance that the bottom of the rod is below the line of sight of the level. Then take a rod-reading on the second point and the difference between the two rod-readings is the difference in elevation of the two points." A bigger reading means the ground is lower, because more of the rod is below the line of sight.

**Leveling the instrument** (sec. 112). Set it up where the rod can be seen on both points, and save time by doing most of the leveling with the tripod legs, keeping the leveling screws for small moves. Center the bubble over one pair of screws, then the other, and repeat. "If the instrument is in adjustment and is properly leveled in both directions, then the bubble will remain in the center during an entire revolution of the telescope about the vertical axis."

**Reading the rod** (sec. 113). Bring the bubble to the center while the telescope points at the rod, and check it again just before and just after each reading: "It is not sufficient to trust the bubble to remain in the center." The rodman stands beside the rod and keeps it upright, because "it is extremely important that the rod be held plumb." A rod that leans reads too high, because the level line of sight crosses a tilted rod farther from its foot. One way to plumb it toward the instrument is "waving the rod": the rodman tips it toward the level and slowly draws it back, and the target on the rod "will be highest when the rod is plumb" (sec. 114).

**When the points are far apart** (sec. 116). Then the line is run in steps.
- The first reading, on the starting point, is the **backsight**, also called a plus sight (B. S. or + S.).
- The rod then goes to "some well-defined point which will not change in elevation (such as the top of a firm rock)". The reading there is a **foresight**, or minus sight (F. S. or − S.), and that point is a **turning point** (T. P.).
- The level moves ahead, takes a backsight on the turning point, and a foresight on the next one, and so on to the end.

"The elevation of the last point above the first is equal to the sum of all the backsights minus the sum of all the foresights. If the result is negative, i.e., if the sum of the foresights is the greater, then the last point is below the first."

**Breed and Hosmer's own notes** (p. 87), from a stone bound at A to a stone step at B:

| Point | + S. | − S. |
|---|---|---|
| A | 8.160 | |
| T. P. | 7.901 | 2.404 |
| T. P. | 9.446 | 3.070 |
| T. P. | 8.005 | 6.906 |
| B | | 2.107 |
| Sums | 33.512 | 14.487 |

33.512 − 14.487 = 19.025: "B above A" by 19.025 feet.

**Following the line point by point.** Give A an elevation of 100.000 feet. Each backsight adds and each foresight subtracts: 100.000 + 8.160 − 2.404 = 105.756 at the first turning point; + 7.901 − 3.070 = 110.587 at the second; + 9.446 − 6.906 = 113.127 at the third; + 8.005 − 2.107 = 119.025 at B. The last figure agrees with the sums, 19.025 above A, which is the arithmetic check on the notes.

**The signal that moves the work on.** Breed and Hosmer list the hand signals of a level party (sec. 115). For "Take a Turning Point," "the arm is swung slowly in a circle above the head."

:::reveal Backsights total 12.40 feet and foresights total 15.15 feet. Is the last point above or below the first, and by how much? ||| Below, by 2.75 feet: 12.40 − 15.15 = −2.75, and a negative result means the last point is lower.

:::reveal Why must a turning point be a firm rock or another point that will not change in elevation? ||| It carries the elevation forward: the foresight and the next backsight are both read on it, so if it settles between the two readings, every elevation after it is wrong.

## Sources
- ${BH} Locator: secs. 111 to 116 and Fig. 43, pp. 83 to 86 (scan pp. 109 to 112); the field notes, p. 87 (scan p. 113). ${TIER_A_PD}`,
    },
    {
      slug: "balanced-sights",
      title: "13 · Balanced sights, the earth's curve, and how close a level line closes",
      section: "3 · Elevation: running a level line",
      recallContent: [
        {
          prompt: "How do Breed and Hosmer get the elevation of the last point above the first in differential leveling?",
          answer: "The sum of all the backsights minus the sum of all the foresights; a negative result means the last point is below the first (sec. 116).",
        },
        {
          prompt: "What is a turning point?",
          answer: "A firm, well-defined point that will not change in elevation, where a foresight is taken and then, from the next setup, a backsight.",
        },
      ],
      body: `${P("BAM pacing the backsight and foresight distances so they match, then running a short loop that returns to its starting mark, with the misclosure worked on screen")}

**How long a sight?** Breed and Hosmer (sec. 117): the proper length depends on how distinct and steady the rod looks, on how much readings on one point vary, and on the precision wanted. "Under ordinary conditions the length of sight should not exceed about 300 ft. where elevations to the nearest 0.01 ft. are desired." And the "'boiling' of the air due to irregular refraction is frequently so troublesome that long sights cannot be taken accurately."

**Balance the sights, and two errors vanish.** A level slightly out of adjustment tilts its line of sight, and "the resulting error in the rod-reading is proportional to the distance from the instrument to the rod." But a height difference is the difference of two readings. "If the level is at equal distances from the rod the errors are equal," and they cancel. How does the rodman know the distances are equal? "By counting his paces as he goes from one point to the other" (sec. 117). The pace from lesson 4 comes back here as a working tool.

**The earth curves, and the air bends light** (sec. 118). A level line of sight is straight, but the earth's surface curves away beneath it, so a distant rod reads a little high. Refraction in the air bends the sight back down, making the effect "about one-seventh part smaller." Breed and Hosmer's figures for the combined effect:

| Length of sight | Curvature and refraction |
|---|---|
| 300 ft. | 0.002 ft. |
| 500 ft. | 0.005 ft. |
| 1,000 ft. | 0.020 ft. |
| 1 mile | about 0.57 ft. |

At ordinary sight lengths the effect is tiny; over a mile it is more than half a foot. And the same cure works again: "If the rod is equally distant from the instrument on the foresight and backsight the effect of curvature and refraction is eliminated from the result."

**Small habits that matter.** The rod is made of wood, and "the effect of moisture is greater" than heat, "consequently if very accurate leveling is to be done the rod should be compared frequently with a standard" (sec. 110). "Care should be taken not to strike the rod on the ground after it has been clamped and before it has been read" (sec. 119). And "whenever close results are desired it will be well to take several readings on each point and use the mean" (sec. 114).

**Close the loop.** A single run from A to B gives an answer with nothing to check it against. Run the line back to A by different turning points, and the arithmetic gives you a test for free: around a closed loop the elevation ends where it began, so all the backsights minus all the foresights should come to zero. Whatever it comes to instead is the **misclosure**, a measure of how much error crept into the work.

A worked case. Out from A to B, the notes give B 4.316 feet above A. Back from B to A, by other turning points, they give A 4.302 feet below B. Around the loop the sum is 4.316 − 4.302 = 0.014 foot, so the work misses by 0.014 foot. The best single figure is the mean of the two runs, 4.309 feet, and with a misclosure of a hundredth of a foot the honest report is B about 4.31 feet above A. Giving it as 4.3090 would claim a thousandth of a foot the work never reached. This is the same rule as lesson 7: choose the level of accuracy the measurement can support.

:::reveal A level stands 120 feet from the backsight and 260 feet from the foresight. What error does that invite, and how does Breed and Hosmer's rodman avoid it? ||| Any tilt in the line of sight hits the two readings unequally, so it no longer cancels. The rodman paces the foresight distance to match the backsight distance.

:::reveal A loop run out and back gives a misclosure of 0.03 foot. Should the elevation difference be reported to the thousandth of a foot? ||| No. Work that misses by 0.03 foot supports a figure to the hundredth at best, so report it to two decimal places.

## Sources
- ${BH} Locator: sec. 110, p. 83 (scan p. 109); sec. 114, p. 85 (scan p. 111); secs. 117 and 118 and Fig. 44, pp. 87 to 88 (scan pp. 113 to 114); sec. 119, p. 88 (scan p. 114). ${TIER_A_PD}`,
    },
    {
      slug: "bench-marks-and-the-law",
      title: "14 · Bench marks, the federal geodetic survey, and the law that protects them",
      section: "3 · Elevation: running a level line",
      recallContent: [
        {
          prompt: "Why do Breed and Hosmer have the rodman pace the foresight distance to match the backsight?",
          answer: "Equal sight lengths make an instrument's tilt, and the earth's curvature and refraction, affect both readings equally, so they cancel in the difference (secs. 117 and 118).",
        },
        {
          prompt: "What is a misclosure?",
          answer: "What a level loop's backsights minus foresights come to instead of zero when it returns to its starting point: a measure of the error in the work.",
        },
      ],
      body: `${QR(`${SURVEYOR}, to check the statement of the federal penalty and the advice on finding and handling survey marks`)}

**Where elevations start.** A level line gives differences. To turn a difference into an elevation, you start from a point whose elevation someone has already fixed. NOAA's National Geodetic Survey (NGS) keeps those points: in its classroom activity *Survey Mark Hunting*, NOAA says that in the United States "these reference points are developed and maintained by NOAA's National Geodetic Survey," and that there are "more than 1,200,000" of them.

**What a survey mark looks like.** NOAA again: "NGS uses permanent marks called 'survey marks' (you may hear survey marks called 'benchmarks,' but benchmarks are only one type of survey mark). Often, survey marks are marked with a metal disk ... set in concrete or bedrock." They can also be "stainless steel rods driven into the ground, drill holes in bedrock, bottles, pots, or landmarks visible from a long distance, such as a water tower, a radio mast, or a church steeple." For a tower or a steeple, the top of the structure is usually the point itself.

**The agency behind them.** Joseph F. Dracup, listed as retired from the Coast and Geodetic Survey, wrote its history for NGS: "Geodetic surveying began in the United States on February 10, 1807 with the creation of the Survey of the Coast by Congress," with the Swiss-born geodesist Ferdinand R. Hassler in charge. It was "identified as the Coast Survey in 1836," and "in 1878 Congress changed the name to U.S. Coast and Geodetic Survey." The marks themselves changed slowly: "Bench mark monuments were of similar design until the late 1970's when special steel rod type marks were introduced."

**Reading a mark's datasheet.** Every NGS mark has a datasheet, and at its foot a "Station Description" gives "very precise instructions for finding the survey mark, starting from easy-to-find landmarks." NOAA quotes two, in the datasheets' own capitals: "30 FEET SOUTH OF THE CENTER LINE OF THE ROAD, 23.98 FEET WEST OF BENCH MARK 33 A (USGS), AND ABOUT 2 FEET LOWER THAN THE ROAD," and "8 FEET SOUTHEAST OF A GATE IN AN EAST-AND-WEST FENCE, AND IN THE TOP OF A LAVA ROCK." Notice what those descriptions are: distances and directions from things you can find, the same metes-and-bounds habit the old surveyors used. The NOAA activity tells you to look marks up through the NGS website, but its step-by-step clicks describe an older version of the site. Which NGS tool a learner should use today is waiting on a check, so this course names the agency and not a page.

**How to hunt, and how not to.** NOAA's own rules for what it calls "mark recovery":
- "Mark recovery should ONLY be done with an adult partner!"
- "Many survey marks are on private property, and may be in dangerous areas. Be sure to obey local laws!"
- "When you find a benchmark, you can take pictures, but that's all! Never disturb or move a benchmark, even if it appears to have been damaged. Remember that benchmarks are important, they are public property, and are protected by law."
- Never climb a tower or a steeple to reach a mark on top of it.

**The law.** The Manual of Surveying Instructions quotes the federal statute in full (18 U.S.C. 1858, in sec. 4-2): "Whoever willfully destroys, defaces, changes, or removes to another place any section corner, quarter-section corner, or meander post, on any Government line of survey, or willfully cuts down any witness tree or any tree blazed to mark the line of a Government survey, or willfully defaces, changes or removes any monument or bench mark of any Government survey, shall be fined under this title or imprisoned not more than six months, or both." Lesson 2 gave the short form: look, photograph, never move.

**Why it matters to a level line.** A bench mark is only useful if it is exactly where its datasheet says, at exactly the height on record. A disk pried loose and reset an inch higher is worse than a missing one, because the next person to level from it will carry the inch into everything they measure. That is the plain reason behind the penalty.

:::reveal Is every survey mark a "benchmark"? ||| No. NOAA says "benchmarks are only one type of survey mark"; marks also include steel rods, drill holes, and landmarks such as towers and steeples.

:::reveal You find a bench mark disk that has been knocked loose. What does NOAA say to do? ||| Photograph it, but "never disturb or move a benchmark, even if it appears to have been damaged."

## Sources
- ${NOAA_MARKS} Locator: pp. 93 to 95. ${TIER_A}
- ${DRACUP} Locator: "Abstract"; "1807: Survey of the Coast Created"; "A Series of Name Changes"; "Versatile Concrete". ${TIER_B}
- ${MANUAL} Locator: sec. 4-2, p. 105 (PDF p. 116). ${TIER_A}`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Elevation: running a level line",
      section: "3 · Elevation: running a level line",
      body: "A graded check on differential leveling, balanced sights and the earth's curve, closing a level loop, and the bench marks a level line starts from. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does a rod-reading measure, according to Breed and Hosmer?", options: ["How far the rod's bottom is below the line of sight", "How far the rod's top is above the ground point", "How far the rod stands from the level itself", "How far the rod leans away from the plumb line"], correctIndex: 0, explanation: "\"This is the distance that the bottom of the rod is below the line of sight of the level\" (sec. 111).", sourceLessonSlug: "differential-leveling" },
          { prompt: "In the simplest case, how is the difference in elevation of two points found?", options: ["The sum of the two rod-readings taken", "The product of the readings and the distance", "The difference between the two rod-readings", "The mean of the two rod-readings taken"], correctIndex: 2, explanation: "\"The difference between the two rod-readings is the difference in elevation of the two points\" (sec. 111).", sourceLessonSlug: "differential-leveling" },
          { prompt: "The rod reads 6.2 feet on point P and 3.9 feet on point Q. Which point is higher?", options: ["P, by 2.3 feet", "Q, by 2.3 feet", "Q, by 10.1 feet", "P, by 10.1 feet"], correctIndex: 1, explanation: "A bigger reading means lower ground, so Q is higher by 6.2 − 3.9 = 2.3 feet.", sourceLessonSlug: "differential-leveling" },
          { prompt: "What do Breed and Hosmer advise doing most of the leveling of the instrument with?", options: ["The leveling screws", "The telescope clamp", "The rod's own level", "The tripod legs"], correctIndex: 3, explanation: "Time will be saved by \"doing nearly all of the leveling by means of the tripod legs, using the leveling screws only for slight motions\" (sec. 112).", sourceLessonSlug: "differential-leveling" },
          { prompt: "How can you tell the level is in adjustment and properly leveled?", options: ["The bubble moves to one end as the scope turns", "The bubble stays centered through a full turn", "The rod reads the same from any distance away", "The cross-hair touches the top of the rod"], correctIndex: 1, explanation: "\"The bubble will remain in the center during an entire revolution of the telescope about the vertical axis\" (sec. 112).", sourceLessonSlug: "differential-leveling" },
          { prompt: "When should the levelman check the bubble during a rod-reading?", options: ["Only once, when the level is first set up", "Only at the end of each full day's work", "Only when the rodman calls out for it", "Just before and just after each reading"], correctIndex: 3, explanation: "\"It is not sufficient to trust the bubble to remain in the center\"; examine it just before and immediately after every reading (sec. 113).", sourceLessonSlug: "differential-leveling" },
          { prompt: "What do Breed and Hosmer call extremely important about the rod?", options: ["That it be held plumb", "That it be held tilted", "That it be freshly painted", "That it be held by two men"], correctIndex: 0, explanation: "\"It is extremely important that the rod be held plumb\" (sec. 113).", sourceLessonSlug: "differential-leveling" },
          { prompt: "Why does a leaning rod read too high?", options: ["The rod's paint stretches when it tilts", "The bubble moves when the rod leans away", "The sight crosses it farther from its foot", "The target slides down a leaning rod"], correctIndex: 2, explanation: "The level line of sight crosses a tilted rod farther from its foot, so the reading is larger than on a plumb rod.", sourceLessonSlug: "differential-leveling" },
          { prompt: "When the rodman waves the rod, when is the target highest?", options: ["When the rod is plumb", "When it leans forward", "When it leans backward", "When it lies on the ground"], correctIndex: 0, explanation: "The target \"will be highest when the rod is plumb\" (sec. 114).", sourceLessonSlug: "differential-leveling" },
          { prompt: "What is another name for a backsight?", options: ["A minus sight", "A turning sight", "A plus sight", "A level sight"], correctIndex: 2, explanation: "\"This is called a backsight or plus sight and is usually written B. S. or + S.\" (sec. 116).", sourceLessonSlug: "differential-leveling" },
          { prompt: "What is another name for a foresight?", options: ["A plus sight", "A minus sight", "A back reading", "A bench sight"], correctIndex: 1, explanation: "\"This is called a foresight or minus sight and is written F. S. or − S.\" (sec. 116).", sourceLessonSlug: "differential-leveling" },
          { prompt: "Where is the first reading of a differential level line taken?", options: ["On the first turning point, as a foresight", "On the final point, as a backsight", "On the instrument itself, as a check", "On the starting point, as a backsight"], correctIndex: 3, explanation: "When the points are far apart, \"a rod-reading is taken on the first point. This is called a backsight\" (sec. 116).", sourceLessonSlug: "differential-leveling" },
          { prompt: "What kind of point do Breed and Hosmer want for a turning point?", options: ["A soft point that will take a stake easily and fast", "A well-defined point that will not change in elevation", "A point exactly halfway between the start and the end", "A point on the same contour as the starting point"], correctIndex: 1, explanation: "\"Some well-defined point which will not change in elevation (such as the top of a firm rock)\" (sec. 116).", sourceLessonSlug: "differential-leveling" },
          { prompt: "What example of a turning point do Breed and Hosmer give?", options: ["The top of a fence post", "A stake driven in mud", "A spot on loose gravel", "The top of a firm rock"], correctIndex: 3, explanation: "\"Such as the top of a firm rock\" (sec. 116).", sourceLessonSlug: "differential-leveling" },
          { prompt: "How is T. P. read in level notes?", options: ["Turning point", "True position", "Total plus", "Tape pull"], correctIndex: 0, explanation: "The second point \"is called a turning point and is written T. P.\" (sec. 116).", sourceLessonSlug: "differential-leveling" },
          { prompt: "What gives the elevation of the last point above the first?", options: ["All foresights minus all backsights", "All backsights plus all foresights", "All backsights minus all foresights", "The last backsight minus the first"], correctIndex: 2, explanation: "\"The sum of all the backsights minus the sum of all the foresights\" (sec. 116).", sourceLessonSlug: "differential-leveling" },
          { prompt: "If the sum of the foresights is greater than the sum of the backsights, where is the last point?", options: ["Below the first point", "Above the first point", "Level with the first point", "On the same turning point"], correctIndex: 0, explanation: "\"If the sum of the foresights is the greater, then the last point is below the first\" (sec. 116).", sourceLessonSlug: "differential-leveling" },
          { prompt: "In Breed and Hosmer's notes, what is the sum of the backsights?", options: ["14.487", "19.025", "33.512", "8.160"], correctIndex: 2, explanation: "8.160 + 7.901 + 9.446 + 8.005 = 33.512.", sourceLessonSlug: "differential-leveling" },
          { prompt: "In Breed and Hosmer's notes, what is the sum of the foresights?", options: ["33.512", "14.487", "19.025", "2.107"], correctIndex: 1, explanation: "2.404 + 3.070 + 6.906 + 2.107 = 14.487.", sourceLessonSlug: "differential-leveling" },
          { prompt: "In Breed and Hosmer's notes, how far is B above A?", options: ["14.487 feet", "33.512 feet", "48.000 feet", "19.025 feet"], correctIndex: 3, explanation: "33.512 − 14.487 = 19.025: \"B above A.\"", sourceLessonSlug: "differential-leveling" },
          { prompt: "Starting from A at 100.000 feet, what is the first turning point's elevation in those notes?", options: ["108.160 feet", "105.756 feet", "102.404 feet", "97.596 feet"], correctIndex: 1, explanation: "100.000 + 8.160 − 2.404 = 105.756.", sourceLessonSlug: "differential-leveling" },
          { prompt: "How does lesson 12 check the arithmetic of a set of level notes?", options: ["Adding the rod lengths gives the length of the line", "Reading the bubble twice proves the sums are right", "Averaging the backsights gives each turning point", "Carrying elevations point by point gives the same total"], correctIndex: 3, explanation: "Each backsight adds and each foresight subtracts; carried point by point, the last elevation must agree with the sums.", sourceLessonSlug: "differential-leveling" },
          { prompt: "What did Breed and Hosmer's level line run between?", options: ["A stone bound and a stone step", "A church spire and a well", "Two section corners in a field", "A bridge and a river gauge"], correctIndex: 0, explanation: "From a stone bound at A to the corner of a stone step at B (p. 87).", sourceLessonSlug: "differential-leveling" },
          { prompt: "What hand signal means \"Take a Turning Point\"?", options: ["Both hands held out flat and waved", "One arm raised high above the shoulder", "The arm swung slowly in a circle overhead", "Both arms out and down, raised quickly"], correctIndex: 2, explanation: "\"The arm is swung slowly in a circle above the head\" (sec. 115).", sourceLessonSlug: "differential-leveling" },
          { prompt: "Backsights total 12.40 feet and foresights total 15.15 feet. Where is the last point?", options: ["2.75 feet below the first", "2.75 feet above the first", "27.55 feet above the first", "27.55 feet below the first"], correctIndex: 0, explanation: "12.40 − 15.15 = −2.75, and a negative result means the last point is lower.", sourceLessonSlug: "differential-leveling" },
          { prompt: "Why must a turning point not settle between two readings?", options: ["The bubble will not center on a soft point at all", "The rod cannot be waved on a point that settles", "Both the foresight and next backsight are read on it", "The level must stand on the turning point itself"], correctIndex: 2, explanation: "It carries the elevation forward, so if it moves between the foresight and the next backsight, every later elevation is wrong.", sourceLessonSlug: "differential-leveling" },
          { prompt: "What do Breed and Hosmer give as the usual limit on a sight where elevations to 0.01 ft. are wanted?", options: ["About 30 feet", "About 300 feet", "About 3,000 feet", "About one mile"], correctIndex: 1, explanation: "\"The length of sight should not exceed about 300 ft. where elevations to the nearest 0.01 ft. are desired\" (sec. 117).", sourceLessonSlug: "balanced-sights" },
          { prompt: "What makes long sights hard to take accurately, according to Breed and Hosmer?", options: ["Fog on the glass", "Rust on the rod", "Wear on the pins", "\"Boiling\" of the air"], correctIndex: 3, explanation: "\"'Boiling' of the air due to irregular refraction is frequently so troublesome that long sights cannot be taken accurately\" (sec. 117).", sourceLessonSlug: "balanced-sights" },
          { prompt: "If a level is out of adjustment, how does the error in a rod-reading grow?", options: ["In proportion to the height of the rod", "In proportion to the distance to the rod", "In proportion to the time since setup", "In proportion to the rod's own weight"], correctIndex: 1, explanation: "\"The resulting error in the rod-reading is proportional to the distance from the instrument to the rod\" (sec. 117).", sourceLessonSlug: "balanced-sights" },
          { prompt: "Why do equal backsight and foresight distances remove the error of a level out of adjustment?", options: ["The bubble re-centers itself at equal distances", "The rod reads zero at the midpoint of each line", "The line of sight bends back at equal distances", "The errors are equal and cancel in the difference"], correctIndex: 3, explanation: "\"If the level is at equal distances from the rod the errors are equal,\" and the elevation comes from the difference of the readings (sec. 117).", sourceLessonSlug: "balanced-sights" },
          { prompt: "How does Breed and Hosmer's rodman make the two sight distances equal?", options: ["By counting his paces", "By using a steel tape", "By reading the bubble", "By chaining each sight"], correctIndex: 0, explanation: "\"By counting his paces as he goes from one point to the other\" (sec. 117).", sourceLessonSlug: "balanced-sights" },
          { prompt: "Which earlier lesson's skill does balancing sights put to work?", options: ["Chaining, from lesson 6", "Reading bearings, lesson 8", "Pacing, from lesson 4", "Local attraction, lesson 10"], correctIndex: 2, explanation: "The rodman balances sights by counting paces, the skill lesson 4 calibrates.", sourceLessonSlug: "balanced-sights" },
          { prompt: "How does the earth's curvature affect a distant rod-reading?", options: ["It reads a little high", "It reads a little low", "It reads exactly true", "It cannot be read at all"], correctIndex: 0, explanation: "The surface curves away beneath the level line of sight, so a distant rod reads a little high.", sourceLessonSlug: "balanced-sights" },
          { prompt: "How much do Breed and Hosmer say refraction reduces the effect of curvature?", options: ["About one-half", "About one-tenth", "About one-seventh", "About two-thirds"], correctIndex: 2, explanation: "Refraction makes the offset appear \"about one-seventh part smaller\" (sec. 118).", sourceLessonSlug: "balanced-sights" },
          { prompt: "What is the combined effect of curvature and refraction over one mile?", options: ["About 0.057 foot", "About 0.57 foot", "About 5.7 feet", "About 57 feet"], correctIndex: 1, explanation: "\"This offset, corrected for refraction, is about 0.57 ft. in one mile\" (sec. 118).", sourceLessonSlug: "balanced-sights" },
          { prompt: "What is the combined effect of curvature and refraction for a 300-foot sight?", options: ["0.020 foot", "0.200 foot", "0.570 foot", "0.002 foot"], correctIndex: 3, explanation: "\"For 300 ft. it is 0.002 ft.\" (sec. 118).", sourceLessonSlug: "balanced-sights" },
          { prompt: "What is the combined effect of curvature and refraction for a 1,000-foot sight?", options: ["0.002 foot", "0.020 foot", "0.005 foot", "0.570 foot"], correctIndex: 1, explanation: "\"For 1000 ft., 0.020 ft.\" (sec. 118).", sourceLessonSlug: "balanced-sights" },
          { prompt: "How is the effect of curvature and refraction removed from a level line?", options: ["By adding 0.57 foot to every foresight in the notes", "By leveling only at night when the air is still", "By taking every reading from the top of a hill", "By making each foresight and backsight equally long"], correctIndex: 3, explanation: "\"If the rod is equally distant from the instrument on the foresight and backsight the effect of curvature and refraction is eliminated\" (sec. 118).", sourceLessonSlug: "balanced-sights" },
          { prompt: "What affects a wooden level rod more, according to Breed and Hosmer?", options: ["Moisture", "Heat", "Sunlight", "Wind"], correctIndex: 0, explanation: "Heat matters little because wood expands little; \"the effect of moisture is greater\" (sec. 110).", sourceLessonSlug: "balanced-sights" },
          { prompt: "For very accurate leveling, what should be done with the rod?", options: ["Paint it fresh before each job", "Shorten it by a foot each season", "Compare it often with a standard", "Soak it in water before using it"], correctIndex: 2, explanation: "\"If very accurate leveling is to be done the rod should be compared frequently with a standard\" (sec. 110).", sourceLessonSlug: "balanced-sights" },
          { prompt: "What precaution do Breed and Hosmer give about a clamped rod?", options: ["Do not strike it on the ground before it is read", "Do not read it until the clamp has been oiled", "Do not clamp it at all on a windy day's work", "Do not let the rodman touch it after clamping"], correctIndex: 0, explanation: "\"Care should be taken not to strike the rod on the ground after it has been clamped and before it has been read\" (sec. 119).", sourceLessonSlug: "balanced-sights" },
          { prompt: "When close results are wanted, what do Breed and Hosmer suggest for each point?", options: ["One reading, taken very quickly", "Two readings, keeping the larger", "Several readings and their mean", "Three readings, keeping the last"], correctIndex: 2, explanation: "\"Whenever close results are desired it will be well to take several readings on each point and use the mean\" (sec. 114).", sourceLessonSlug: "balanced-sights" },
          { prompt: "Why run a level line back to its starting point?", options: ["The return trip doubles the accuracy of each sight", "The loop should sum to zero, which tests the work", "The starting point must be leveled twice by law", "The rod has to be returned to the starting point"], correctIndex: 1, explanation: "Around a closed loop all backsights minus all foresights should come to zero, so the result tests the work.", sourceLessonSlug: "balanced-sights" },
          { prompt: "What is a level loop's misclosure?", options: ["The length of its longest sight", "The number of its turning points", "The height of its first backsight", "What it sums to instead of zero"], correctIndex: 3, explanation: "Whatever the loop's backsights minus foresights come to instead of zero is the misclosure.", sourceLessonSlug: "balanced-sights" },
          { prompt: "Out from A, B is 4.316 feet above A; back, A is 4.302 feet below B. What is the misclosure?", options: ["8.618 feet", "0.014 foot", "4.309 feet", "0.140 foot"], correctIndex: 1, explanation: "4.316 − 4.302 = 0.014 foot.", sourceLessonSlug: "balanced-sights" },
          { prompt: "In that loop, what is the best single figure for B above A?", options: ["4.316 feet", "4.302 feet", "0.014 foot", "4.309 feet"], correctIndex: 3, explanation: "The mean of the two runs: (4.316 + 4.302) ÷ 2 = 4.309 feet.", sourceLessonSlug: "balanced-sights" },
          { prompt: "How does lesson 13 report B above A, given a misclosure of 0.014 foot?", options: ["About 4.31 feet", "Exactly 4.3090 feet", "About 4 feet", "Exactly 4.316 feet"], correctIndex: 0, explanation: "With a misclosure of about a hundredth of a foot, the honest report is about 4.31 feet.", sourceLessonSlug: "balanced-sights" },
          { prompt: "A loop misses by 0.03 foot. To what should its result be reported?", options: ["The thousandth of a foot", "The ten-thousandth", "The hundredth of a foot", "The millionth of a foot"], correctIndex: 2, explanation: "Work that misses by 0.03 foot supports a figure to the hundredth at best.", sourceLessonSlug: "balanced-sights" },
          { prompt: "A level stands 120 feet from the backsight and 260 feet from the foresight. What is wrong?", options: ["The sights are unbalanced, so errors won't cancel", "The sights are too short to read with any care", "The foresight should always be the shorter one", "The backsight must be over 300 feet to count"], correctIndex: 0, explanation: "Any tilt in the line of sight, or the earth's curve, hits two unequal sights unequally, so the error no longer cancels.", sourceLessonSlug: "balanced-sights" },
          { prompt: "Which agency develops and maintains survey reference points in the United States?", options: ["The Bureau of Land Management", "The U.S. Geological Survey", "NOAA's National Geodetic Survey", "The county surveyor's office"], correctIndex: 2, explanation: "\"These reference points are developed and maintained by NOAA's National Geodetic Survey (NGS)\" (NOAA, p. 93).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "About how many survey marks does NOAA say there are in the United States?", options: ["About 12,000", "More than 1,200,000", "About 120,000", "More than 12,000,000"], correctIndex: 1, explanation: "\"More than 1,200,000 in the United States!\" (NOAA, p. 93).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What does NOAA say about the word \"benchmark\"?", options: ["Every survey mark is properly a benchmark", "The word is used only for church steeples", "The word was retired along with the chain", "Benchmarks are only one type of survey mark"], correctIndex: 3, explanation: "\"You may hear survey marks called 'benchmarks,' but benchmarks are only one type of survey mark\" (p. 93).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What is a survey mark often made of, according to NOAA?", options: ["A painted stake driven into soft ground", "A metal disk set in concrete or bedrock", "A wooden post with a carved number", "A plastic flag on a long wire stem"], correctIndex: 1, explanation: "\"Often, survey marks are marked with a metal disk ... set in concrete or bedrock\" (p. 93).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "Which of these does NOAA list as a possible survey mark?", options: ["A parked car", "A garden hose", "A traffic cone", "A church steeple"], correctIndex: 3, explanation: "Marks can be \"landmarks visible from a long distance, such as a water tower, a radio mast, or a church steeple\" (p. 93).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "When a survey mark is a tower or a steeple, where is the survey point usually?", options: ["At the top of the structure", "At the base of the structure", "At the nearest street corner", "At the door of the structure"], correctIndex: 0, explanation: "\"The top of these structures is usually the survey point\" (NOAA, p. 95).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "According to Dracup, when did geodetic surveying begin in the United States?", options: ["September 30, 1785", "February 25, 1836", "February 10, 1807", "December 11, 1816"], correctIndex: 2, explanation: "\"Geodetic surveying began in the United States on February 10, 1807 with the creation of the Survey of the Coast by Congress.\"", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What did Congress create in 1807 to begin geodetic surveying?", options: ["The Survey of the Coast", "The General Land Office", "The Bureau of the Census", "The Corps of Discovery"], correctIndex: 0, explanation: "Geodetic surveying began \"with the creation of the Survey of the Coast by Congress\" (Dracup).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "Who was placed in charge of the Survey of the Coast?", options: ["Thomas Hutchins", "Jared Mansfield", "Ferdinand R. Hassler", "Edmund Gunter"], correctIndex: 2, explanation: "\"Ferdinand R. Hassler, a Swiss born geodesist, who conceived the plan was placed in charge\" (Dracup).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What was the agency's name from 1878?", options: ["The National Geodetic Survey", "U.S. Coast and Geodetic Survey", "U.S. Coast and Harbor Survey", "The U.S. General Land Office"], correctIndex: 1, explanation: "\"In 1878 Congress changed the name to U.S. Coast and Geodetic Survey\" (Dracup).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "In what year was the Survey of the Coast first identified as the Coast Survey?", options: ["1807", "1878", "1899", "1836"], correctIndex: 3, explanation: "\"Identified as the Coast Survey in 1836\" (Dracup, Abstract).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "Until when, according to Dracup, were bench mark monuments of similar design?", options: ["The early 1830s", "The late 1970s", "The late 1870s", "The early 2020s"], correctIndex: 1, explanation: "\"Bench mark monuments were of similar design until the late 1970's when special steel rod type marks were introduced.\"", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What part of an NGS datasheet tells you how to find the mark?", options: ["The \"Datum Statement\"", "The \"Elevation Table\"", "The \"Agency Contacts\"", "The \"Station Description\""], correctIndex: 3, explanation: "At the bottom of the datasheet is a section titled \"Station Description,\" with precise instructions for finding the mark (NOAA, p. 94).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What do datasheet station descriptions start from?", options: ["Easy-to-find landmarks", "The nearest state line", "The equator and pole", "A GPS fix alone"], correctIndex: 0, explanation: "They give instructions \"starting from easy-to-find landmarks (such as a public building or the intersection of major roads)\" (NOAA, p. 94).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What habit of the old surveyors do datasheet descriptions share?", options: ["Bearings read only from a needle compass", "Lengths given only in chains and links", "Distance and direction from findable things", "Elevations given only in rods and poles"], correctIndex: 2, explanation: "\"30 FEET SOUTH OF THE CENTER LINE OF THE ROAD\" is distance and direction from findable things, the metes-and-bounds habit.", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "Why does lesson 14 name the agency but not a page for looking up marks?", options: ["The NOAA steps are old and the current tool awaits a check", "The agency has stopped publishing mark datasheets at all", "Mark locations are secret and may not be looked up", "Only licensed surveyors are allowed to see datasheets"], correctIndex: 0, explanation: "The NOAA activity's clicks describe an older version of the site; which NGS tool to use today is waiting on a check.", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What does NOAA say about hunting survey marks with an adult?", options: ["Mark recovery is best done alone, early in the morning", "Mark recovery needs a permit signed by the county", "Mark recovery should ONLY be done with an adult partner", "Mark recovery is only for adults over twenty-one"], correctIndex: 2, explanation: "\"Mark recovery should ONLY be done with an adult partner!\" (NOAA, p. 94).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What does NOAA warn about where many survey marks are?", options: ["Under water, where only divers can reach them", "On private property, sometimes in dangerous areas", "Inside federal buildings closed to the public", "On mountaintops reachable only by helicopter"], correctIndex: 1, explanation: "\"Many survey marks are on private property, and may be in dangerous areas. Be sure to obey local laws!\" (p. 94).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What may you do when you find a benchmark, according to NOAA?", options: ["Clean and repaint the disk", "Reset it if it looks loose", "Take it home for safekeeping", "Take pictures, and that's all"], correctIndex: 3, explanation: "\"When you find a benchmark, you can take pictures, but that's all!\" (p. 95).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What should you do with a benchmark that appears damaged?", options: ["Straighten it carefully", "Never disturb or move it", "Pull it and report it", "Mark it with spray paint"], correctIndex: 1, explanation: "\"Never disturb or move a benchmark, even if it appears to have been damaged\" (p. 95).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What should you do when a survey point is the top of a tower or steeple?", options: ["Climb up and photograph the very top", "Ask the owner for a key to the roof", "Measure its height with a long tape", "Log it from the ground; never climb"], correctIndex: 3, explanation: "\"Do not climb these structures!\" Log the find and photograph it from the ground (NOAA, p. 95).", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "Which federal statute penalizes disturbing a government bench mark?", options: ["18 U.S.C. 1858", "43 U.S.C. 752", "16 U.S.C. 470", "42 U.S.C. 4321"], correctIndex: 0, explanation: "18 U.S.C. 1858, quoted in full in Manual sec. 4-2.", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "What is the longest prison term in 18 U.S.C. 1858?", options: ["Six years", "Sixty days", "Six months", "One year"], correctIndex: 2, explanation: "\"Shall be fined under this title or imprisoned not more than six months, or both.\"", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "Which of these does 18 U.S.C. 1858 NOT name?", options: ["A private fence post", "A witness tree", "A meander post", "A bench mark"], correctIndex: 0, explanation: "The statute names section and quarter-section corners, meander posts, witness trees, blazed line trees, and \"any monument or bench mark of any Government survey.\" A private fence post is not among them.", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "Why is a bench mark reset an inch higher worse than a missing one?", options: ["A missing mark is always replaced the same week", "A reset mark costs more to remove than to replace", "The next user carries the inch into all their work", "The inch shows on the disk and confuses readers"], correctIndex: 2, explanation: "A mark is useful only at exactly its recorded height; the next person to level from a moved one carries the error into everything.", sourceLessonSlug: "bench-marks-and-the-law" },
          { prompt: "Where does lesson 14 say a level line's elevations start from?", options: ["The lowest point along the whole line", "A point whose elevation is already fixed", "The surveyor's own chosen height of 100", "The height of the level's tripod head"], correctIndex: 1, explanation: "A level line gives differences; an elevation needs a starting point whose elevation someone has already fixed.", sourceLessonSlug: "bench-marks-and-the-law" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Area
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "area-from-chains-and-triangles",
      title: "15 · Area from chains and triangles: acres, square chains, and the 640-acre section",
      section: "4 · Area",
      recallContent: [
        {
          prompt: "Which federal statute protects bench marks and section corners, and what is its longest prison term?",
          answer: "18 U.S.C. 1858, quoted in Manual sec. 4-2: a fine, or up to six months in prison, or both.",
        },
        {
          prompt: "What does NOAA say to do when you find a benchmark?",
          answer: "Take pictures, but that's all: never disturb or move it, even if it appears damaged.",
        },
      ],
      body: `**Why the chain makes area easy.** Lesson 5's table does most of the work. Ten square chains make an acre (Manual, table 2-1), so a field measured in chains turns into acres with one division:

> acres = (length in chains × width in chains) ÷ 10

A field 12.50 chains long and 8.00 chains wide holds 12.50 × 8.00 = 100 square chains, which is 10 acres. Done in feet the same field is 825 × 528 = 435,600 square feet, divided by 43,560: still 10 acres, with much bigger numbers on the way. That is the convenience Breed and Hosmer meant by the chain's "simple relation to the acre."

**The section and its parts, as arithmetic.** A square mile is 80 chains on a side, so it holds 80 × 80 = 6,400 square chains, or 640 acres (table 2-1). Halve both sides and you have a square 40 chains on a side: 1,600 square chains, 160 acres, a quarter of the square mile. Halve again, 20 chains on a side: 400 square chains, 40 acres. Those three numbers, 640, 160 and 40, run through every land record in the public-land states. Which of them the law treats as units of sale, and how a description names them, is the subject of *Reading a Land Description*; here they are only multiplication.

**Triangles.** Most fields are not rectangles, so a surveyor splits them into triangles. Breed and Hosmer give two formulas (sec. 366).
- **Two sides and the angle between them:** area = ½ ab sin C, "where C is the angle included between the sides a and b." This fits a field surveyed by setting an instrument in the middle and measuring angles between the corners.
- **All three sides,** "if the field has been surveyed with the tape alone": area = √(s(s − a)(s − b)(s − c)), where s is half the perimeter, (a + b + c) ÷ 2.

Two worked cases, in chains:
1. Sides of 8 and 5 chains with 30° between them: ½ × 8 × 5 × sin 30° = ½ × 8 × 5 × 0.5 = 10 square chains, exactly 1 acre.
2. Sides of 3, 4 and 5 chains: s = 6, and √(6 × 3 × 2 × 1) = √36 = 6 square chains, 0.6 acre. (A 3-4-5 triangle is a right triangle, so ½ × 3 × 4 = 6 agrees.)

**Check one way with another.** For a four-sided lot, Breed and Hosmer cut along a diagonal and compute the two triangles, then cut along the other diagonal and compute again: "The area can be obtained by calculating the area of one pair of triangles and readily checked by calculating the other pair" (sec. 367). The two diagonals also each come out twice, from either triangle they belong to, and "these two determinations ... should check each other." Two routes to the same number is the habit, in area as in leveling.

**Rough checks you can do without trigonometry** (sec. 369). Plot the field to scale, divide the drawing into rectangles and triangles, scale their sides from the plan and add up their areas. Or lay a sheet ruled in small squares over the plan, count the squares, and estimate the part-squares "generally to tenths of a square, by inspection." Knowing the area of one square on the ground, you have the field's approximate area. The planimeter in lesson 17 is the instrument version of the same check.

**How many digits?** An area inherits the uncertainty of the lengths that made it, and a little more, because two lengths are multiplied. If each side of the 12.50 by 8.00 chain field could be off by a link, the area could be off by roughly 12.5 × 0.01 + 8 × 0.01 ≈ 0.2 square chain, about 0.02 acre. So "10.0 acres" is honest and "10.000 acres" is not.

:::reveal A field measures 15.00 by 6.40 chains. How many acres? ||| 15.00 × 6.40 = 96 square chains; ÷ 10 = 9.6 acres.

:::reveal A triangle has sides of 6 and 10 chains with 90° between them. What is its area in acres? ||| ½ × 6 × 10 × sin 90° = 30 square chains, which is 3 acres.

## Sources
- ${MANUAL} Locator: table 2-1, p. 37 (PDF p. 48). ${TIER_A}
- ${BH} Locator: sec. 4, p. 3 (scan p. 29); secs. 366 and 367, pp. 336 to 337 (scan pp. 376 to 377); sec. 369, p. 339 (scan p. 379). ${TIER_A_PD}`,
    },
    {
      slug: "area-from-coordinates",
      title: "16 · Area from the coordinates of the corners, and the double meridian distance method",
      section: "4 · Area",
      recallContent: [
        {
          prompt: "How do you turn a field measured in chains into acres?",
          answer: "Multiply length by width in chains to get square chains, then divide by 10: ten square chains make an acre.",
        },
        {
          prompt: "What area formula do Breed and Hosmer give for a triangle whose three sides were measured with the tape alone?",
          answer: "√(s(s − a)(s − b)(s − c)), where s is half the perimeter (sec. 366).",
        },
      ],
      body: `**From a traverse to coordinates.** A compass-and-chain survey of a field records, for every side, a bearing and a length. Breed and Hosmer (sec. 384): "To obtain the area enclosed the points of the survey are referred to a system of rectangular coördinates." In compass surveys "it is convenient to use the magnetic meridian for one of the axes," though any line will do.

**Latitudes and departures.** Each side is the long side of a right triangle whose other two sides run north-south and east-west. "The projection of any line on the meridian is called its difference of latitude or simply its latitude. The projection of a line on the other axis is called its difference of departure, or simply its departure." And:

> Latitude = Distance × cos Bearing; Departure = Distance × sin Bearing

North latitudes and east departures are positive; south latitudes and west departures negative. A course of 10.00 chains bearing N 30° E has a latitude of 10 × cos 30° = 8.66 chains north and a departure of 10 × sin 30° = 5.00 chains east. Breed and Hosmer's quick sanity check: "when the bearing of a course, for example, is less than 45° its latitude is greater than its departure and vice versa" (sec. 386).

**Does the field close?** Walk all the way round a field and you end where you began, so "if the field is a closed polygon the sum of the north latitudes will equal the sum of the south latitudes, and the sum of the east departures will equal the sum of the west departures" (sec. 387). Real notes never close exactly. The gap between the computed end and the start is the survey's total error, √(l² + d²) for errors l in latitude and d in departure, and "if this distance E is divided by the perimeter of the field the resulting fraction is called the error of closure" (sec. 391). In their own worked compass survey, errors of 0.08 and 0.07 chain give a closing error of about 10 links on a perimeter of 129.77 chains: about 1 in 1300. Before computing an area the error is spread around the sides, which Breed and Hosmer call balancing the traverse (sec. 387).

**The coordinate method** (sec. 411). Add up the latitudes and departures in order and every corner gets coordinates. Then: "(1) Number the corners consecutively around the field. (2) Multiply each abscissa by the difference between the following and the preceding ordinates, always subtracting the following from the preceding (or always subtracting the preceding from the following), and take half the sum of the products."

A worked field, in chains, with corners 1 (0, 0), 2 (8, 0), 3 (10, 6) and 4 (2, 6), where the first number is the abscissa x and the second the ordinate y. For each corner, multiply its x by (the next corner's y minus the previous corner's y):
- Corner 1: 0 × (0 − 6) = 0
- Corner 2: 8 × (6 − 0) = 48
- Corner 3: 10 × (6 − 0) = 60
- Corner 4: 2 × (0 − 6) = −12

The sum is 96; half of it is 48 square chains, 4.8 acres. The field is a parallelogram with a base of 8 chains and a height of 6, and 8 × 6 = 48 confirms it. (If the sum comes out negative, you numbered the corners the other way round; take its size.)

**The double meridian distance method** (secs. 384 to 385). Before coordinates were routine, surveyors computed the same area as a set of trapezoids between each side and the meridian. Each trapezoid's area is its latitude times its "meridian distance," the distance of the side's middle from the meridian; to avoid halving every time they used twice that distance, the double meridian distance (D.M.D.). Breed and Hosmer's rules:
1. "The D.M.D. of the first course ... equals the departure of the course itself."
2. "The D.M.D. of any other course equals the D.M.D. of the preceding course plus the departure of the preceding course plus the departure of the course itself."
3. "The D.M.D. of the last course should be numerically equal to its departure, but with opposite sign." That is the built-in check.

Multiply each D.M.D. by its latitude, add the north products, subtract the south ones, "and be careful to divide by 2." The result is the same area the coordinate method gives; the two are the same arithmetic arranged differently. Old plats and field books often show D.M.D. columns, which is why it is worth recognizing.

:::reveal A course runs 20.00 chains due east. What are its latitude and departure? ||| Latitude 0 (cos 90° = 0) and departure 20.00 chains east (sin 90° = 1).

:::reveal A triangle has corners (0, 0), (6, 0) and (0, 4), in chains. Use the coordinate rule to find its area. ||| Corner 1: 0 × (0 − 4) = 0; corner 2: 6 × (4 − 0) = 24; corner 3: 0 × (0 − 0) = 0. Half of 24 is 12 square chains, 1.2 acres, which matches ½ × 6 × 4.

## Sources
- ${BH} Locator: secs. 384 and 385, pp. 352 to 356 (scan pp. 392 to 396); sec. 386, p. 356 (scan p. 396); secs. 387 and 391 and Fig. 159, pp. 357 to 360 (scan pp. 397 to 400); sec. 411, pp. 374 to 375 (scan pp. 414 to 415). ${TIER_A_PD}`,
    },
  ],
};
