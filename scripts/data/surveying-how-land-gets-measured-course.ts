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
  ],
};
