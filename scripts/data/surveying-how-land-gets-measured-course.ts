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
  ],
};
