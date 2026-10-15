import type { AuthoredCourse } from "./authored-course";

// "Reading a Land Description: The Grid, the Deed and Indiana" (Civics; additional Science & Math
// and Money & Property). Slug `reading-a-land-description`. Series `tools-that-think` ("Tools That
// Think"), code TOOLS, position 04. Its companion is TOOLS-03, `surveying-how-land-gets-measured`,
// which teaches the chain, the compass, the level and the planimeter; this course reads what those
// tools produced and the law that grew around it. TOOLS-01 (map and compass) and TOOLS-02 (the
// slide rule) are built in other branches and are named in prose, not linked.
//
// RESEARCH TIER 2 (docs/course-method/README.md): boundary law and land title, next to a licensed
// profession. Brief: plans/future-courses/science-and-math/tool-usage/2026-10-14-surveying-brief.md,
// approved by BAM 2026-10-14 with his decision to SPLIT it (answer 1): this course is the brief's
// sections 5 to 7 (the PLSS grid, metes and bounds and the deed, Indiana) with its own section 0.
// Answer 2 added lesson 9 (what to look for in a land description). Answer 5 added Money & Property.
// Answer 6: BAM films a county surveyor's office visit later (lesson 13 stays a P placeholder).
// Answer 8: a Native reviewer reads the treaty-cession lessons (the community-review gate, E3).
//
// VISIBILITY: PUBLIC and FREE, HELD ("Coming soon") until (1) a licensed land surveyor (to be named)
// has read every lesson marked QR, with authority to change or cut it; (2) a Native reviewer (to be
// named) has read lessons 3, 7 and 10, which teach that the grid followed treaty cessions; and (3)
// BAM has filmed lesson 13. The publishHoldReason in scripts/seed-courses.ts says so.
//
// WHAT IT IS NOT, stated in the description and in lesson 2: a surveying qualification, legal
// advice, or a way to find a property line. Every exercise uses a public building's record or a
// historical document, never a private home.
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR, licensed land surveyor only: 2 (the limits and the legal-survey definition), 6 (the corners
//     are the law), 8 (reading and rerunning a deed).
//   QR, ONE combined line naming the surveyor AND the Native reviewer (the release-marker parser
//     keeps one verdict per kind per lesson, so both names share one line): 3 (the 1785 Ordinance,
//     "purchased of the Indian inhabitants"), 7 (the 1775 Piankeshaw deed), 10 (how Indiana was
//     surveyed, cession by cession).
//   P (BAM's filmed visit): 13.
//   Unmarked: 1, 4, 5, 9, 11, 12.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, free to host: the 2009 Manual, White's history, the 2017 Specifications (BLM, federal
//    works); 74 FR 48776; the USGS page; Breed and Hosmer, 3rd ed., 1912 printing (Internet
//    Archive's own scan, principlespracti0001char_w1m0, not a Google scan); Wilson (1916), in the
//    Indiana Magazine of History, published before 1929 (IU ScholarWorks copy).
//  - Tier B, link only: the Indiana Archives and Records Administration (IARA) land-records page,
//    the Indiana State Library blog, Starkey (1956), and the Boone and Wells county surveyor pages.
//  - Breed and Hosmer's sample deed names private people; lesson 8 describes its form and quotes
//    none of the names. The 1775 deed names its eleven Piankeshaw signers, and lesson 7 names them
//    as the deed prints them, because they were the parties to it.
//  - FIGURES: none embedded yet.
//
// STANDARDS (src/lib/standards/): Indiana USH.10.2 (partial) through claim
// `history.land-record-primary-sources`; Indiana Grade 4 Social Studies 4.H.4 (partial) through
// claim `civics.land-ordinance-and-northwest-ordinance`. Verbatim texts were read in the 2023 IDOE
// documents.
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts):
//  - L12: the year the Vincennes land office opened. IARA's own page gives 1807 in one sentence
//    and 1804 in another; the course states neither.
//  - L11: how Indiana's civil townships relate to survey townships; the course says it does not
//    establish this.
//  - L10 links back to TOOLS-03 lesson 9 for the NCEI declination check (filed there).
//
// DISAGREEMENTS TAUGHT, NOT RESOLVED: Freeman's survey of the Vincennes Tract is "1803" in White
// (p. 48) and "1802-3" in Wilson (p. 1), whose transcription of Freeman's own record has him
// crossing the Wabash on July 21, 1802. Lesson 10 shows both.
//
// House style, matching surveying-how-land-gets-measured-course.ts: `section` on every lesson;
// flush-left single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on,
// quizzing the lesson before; an APA 7 `## Sources` block on every teaching lesson with a locator
// (printed page AND PDF page where they differ) and a hosting tier on every entry; a quiz per section
// pooled to round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled; a final pooling
// 40+ serving 10, placed last. Every question's four options sit within one visible length margin
// of each other, so no length position wins. American spelling in prose; quotations keep their own
// spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const MANUAL =
  "Bureau of Land Management. (2009). *Manual of surveying instructions: For the survey of the public lands of the United States*. U.S. Department of the Interior. https://www.blm.gov/sites/default/files/Manual_Of_Surveying_Instructions_2009.pdf";
const WHITE =
  "White, C. A. (1983, second printing 1991). *A history of the rectangular survey system*. Bureau of Land Management. https://www.blm.gov/sites/default/files/histrect.pdf";
const SPECS =
  "Bureau of Land Management. (2017). *Specifications for descriptions of land: For use in land orders, executive orders, proclamations, Federal Register documents, and land description databases* (Rev. ed.). U.S. Department of the Interior. https://az.blm.gov/surveys/Library/2017%20Specs%20for%20Desc%20of%20Land.pdf";
const BH =
  "Breed, C. B., & Hosmer, G. L. (1912). *The principles and practice of surveying: Vol. 1. Elementary surveying* (3rd ed.; copyright 1906, 1908). John Wiley & Sons. https://archive.org/details/principlespracti0001char_w1m0";
const FR_2009 =
  "Bureau of Land Management. (2009, September 24). Cadastral survey: Notice of availability of the next edition of the Manual of Surveying Instructions. *Federal Register, 74*(184), 48776-48777. https://www.federalregister.gov/documents/2009/09/24/E9-23216/cadastral-survey-notice-of-availability-of-the-next-edition-of-the-manual-of-surveying-instructions";
const USGS_FAQ =
  "U.S. Geological Survey. (2025, January 14). *Are the Public Land Survey System (PLSS) section lines on US Topo maps a legal record?* https://www.usgs.gov/faqs/are-plss-section-lines-us-topo-maps-a-legal-record";
const WILSON =
  "Wilson, G. R. (1916). The first public land surveys in Indiana; Freeman's lines. *Indiana Magazine of History, 12*(1), 1-33. https://scholarworks.iu.edu/journals/index.php/imh/article/view/5959";
const STARKEY =
  "Starkey, O. P. (1957). Road patterns of Indiana. *Proceedings of the Indiana Academy of Science, 66*, 192-194 (volume dated 1956). https://journals.indianapolis.iu.edu/index.php/ias/article/download/6447/6472/12578";
const IARA =
  "Indiana Archives and Records Administration. (n.d.). *Land records*. https://www.in.gov/iara/services-for-public/search-archives-holdings/land-records/";
const ISL_BLOG =
  "Springer, K. (2023, October 26). *Digitized field notes bring detail to the history of land surveying in Indiana*. Indiana State Library Blog. https://blog.library.in.gov/digitized-field-notes-bring-detail-to-the-history-of-land-surveying-in-indiana/";
const BOONE =
  "Boone County, Indiana, Surveyor's Office. (n.d.). *Surveyor's responsibilities*. https://boonecounty.in.gov/offices/surveyor/surveyor-responsibilities";
const WELLS =
  "Wells County, Indiana, Surveyor. (n.d.). *Cornerstone*. https://wellscounty.org/cornerstone-surveyor/";

const TIER_A = "Tier A, free to host (U.S. federal work).";
const TIER_A_PD = "Tier A, free to host (published before 1929; non-Google scan).";
const TIER_A_1916 = "Tier A, free to host (published 1916).";
const TIER_B = "Tier B, link only.";

/** The marker every lesson needing a qualified reviewer opens with. */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;
/** The marker every lesson needing BAM's demonstration opens with. */
const P = (what: string) => `> **Before release:** needs a practitioner or BAM's demonstration: ${what}.`;

const SURVEYOR = "a licensed land surveyor, to be named";
const NATIVE_REVIEWER = "a Native reviewer, to be named";

export const READING_A_LAND_DESCRIPTION_COURSE: AuthoredCourse = {
  title: "Reading a Land Description: The Grid, the Deed and Indiana",
  description:
    "Learn to read the words that describe land. Read the Land Ordinance of 1785 as a primary source, then the grid it created: principal meridians, base lines, townships, ranges and the 36 sections, and the aliquot parts and lots of a legal description such as SW1/4NE1/4. Learn why the corners the original surveyors set stand as the true corners, errors and all; read a metes-and-bounds deed, from a 1775 purchase from eleven Piankeshaw chiefs bounded in leagues along the Wabash to a modern lot and block; and use a checklist of what to look for in any description. Then find the survey under Indiana: the Ohio River base, the First and Second Principal Meridians, Freeman's lines around the Vincennes Tract, the cessions the surveys followed, the section-line grid under the state's roads, and the archives and county surveyors that keep the records. Taught from the federal Manual of Surveying Instructions, the Bureau of Land Management's own history and specifications, and the original documents. It does not make anyone a surveyor, gives no legal advice, and never tells a learner where a property line is. The fourth course in the Tools That Think series, and the companion to Surveying: How Land Gets Measured.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 0: Before you read a description
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "survey-before-sale",
      title: "1 · Survey before sale: why a land description is a civic act",
      section: "0 · Before you read a description",
      body: `**What this course is for.** By the end you should be able to read a legal description written on the federal grid (a principal meridian, a township and range, a section and its parts), read a metes-and-bounds description written as courses and distances, say which parts of each control when they disagree, and find the original survey records for land in Indiana. The companion course, *Surveying: How Land Gets Measured*, teaches the chain, the compass, the level and the planimeter that made those records. This course reads what they produced.

**Why the law cares about words.** The federal Manual of Surveying Instructions starts from a rule older than the United States: "the fundamental principle of the common law that a valid land conveyance shall, in addition to other requirements, contain a description sufficiently accurate to identify boundaries with a required degree of certainty" (sec. 1-18). A deed that cannot be traced on the ground conveys trouble.

**What the colonies did.** In the colonial states, land "was described by irregular metes-and-bounds, with each parcel depending more or less on the description of its neighbors" (sec. 1-18). A parcel was located by walking from a tree or a stone to the next one, and its neighbor's deed began where it ended. C. A. White's history of the rectangular survey, published by the Bureau of Land Management, records the argument Congress had about whether to keep doing that in the West. Alexander Hamilton's side favored "indiscriminate location, the old metes and bounds system." Thomas Jefferson's side "advocated a system of rectangular survey before any sale or settlement," arguing "that survey before sale was necessary to prevent overlapping claims and to simplify deeds and registering. A rectangular system would survey all the land, with no gaps or gores, make the buyer take the poor land along with the good land, and make every man's land have a common boundary with his neighbor" (White, p. 11).

**What Congress decided.** Survey before sale won. The Land Ordinance of May 20, 1785 created what is now called the Public Land Survey System (PLSS). The Bureau of Land Management's notice of the 2009 Manual says it "has formed the framework for all land title, both public and private, in all States except those formed from the territory of the original 13 colonies, Texas, and Hawaii." The Manual counts the result: "Thirty States have been created out of the public domain" (sec. 1-32). Indiana is one of them, admitted on December 11, 1816. If you own land in Indiana, or rent it, or pay taxes on it, its description almost certainly begins with this survey.

**Whose land it was.** The Ordinance's own first sentence names what it was dividing: "the territory ceded by individual states to the United States, which had been purchased of the Indian inhabitants" (White, p. 11). The grid was laid over land that Native nations had ceded by treaty, and in Indiana the surveys followed the cessions one by one (lesson 10). This course treats that as part of the record, not a preface to it. Lessons 3, 7 and 10 read those documents closely and carry a Native reviewer's read before the course is released. For the treaties themselves, the catalog's course *Tribal Nations and Indigenous Governance* teaches how to read one.

**How to read this course.** Each lesson ends with where its facts come from, page by page, and says whether you can open the source free. A box that begins "Before release" at the top of a lesson means it is waiting on someone: a licensed land surveyor's read, a Native reviewer's read, or BAM's own filmed visit.

:::reveal What did the Jefferson side argue survey before sale would prevent? ||| Overlapping claims. A rectangular survey would cover all the land with no gaps or gores and give every owner a common boundary with a neighbor (White, p. 11).

:::reveal In which states is the PLSS not the framework for land title, according to the BLM? ||| Those formed from the original 13 colonies' territory, Texas, and Hawaii.

## Sources
- ${MANUAL} Locator: sec. 1-18, p. 7 (PDF p. 18); sec. 1-32, pp. 15 to 16 (PDF pp. 26 to 27). ${TIER_A}
- ${WHITE} Locator: p. 11 (PDF p. 25), the "Small Farms Versus Large Grants" discussion and the opening of the Ordinance's text. ${TIER_A}
- ${FR_2009} Locator: "Supplementary Information", "Background", first paragraph, 74 FR 48776. ${TIER_A}`,
    },
    {
      slug: "what-this-course-will-not-make-you",
      title: "2 · What this course will not make you, and how a description becomes a boundary",
      section: "0 · Before you read a description",
      recallContent: [
        {
          prompt: "What did the colonial states use to describe land, according to the Manual?",
          answer: "\"Irregular metes-and-bounds, with each parcel depending more or less on the description of its neighbors\" (sec. 1-18).",
        },
        {
          prompt: "What does the Land Ordinance's first sentence say the territory to be divided was?",
          answer: "\"The territory ceded by individual states to the United States, which had been purchased of the Indian inhabitants.\"",
        },
      ],
      body: `${QR(`${SURVEYOR}, to check the course's stated limits, the legal-survey definition, and the description of what controls a boundary`)}

**What this course will not make you.**
1. **Not a surveyor.** Retracing a boundary is a licensed profession. The Boone County, Indiana, surveyor's office puts the line plainly: "A legal survey is a survey prepared by a registered land surveyor with notice to all adjoining landowners," and the county surveyor "maintains a legal survey record book for all legal surveys within the county."
2. **Not a lawyer.** Nothing here is legal advice about a particular deed. Breed and Hosmer's 1912 textbook, which this course quotes on how deeds were read, describes general principles of its day; the law where your land is, today, is a question for a licensed surveyor or an attorney.
3. **Not a judge of your own line.** This course never tells anyone where a property line is. Reading a description tells you what was conveyed, in words. Where those words land on the ground is a surveyor's finding.

**Three things that look like boundaries and are not.**
- **A section line on a map.** The U.S. Geological Survey says it plainly: "US Topo maps are not legal documents and the Public Land Survey System (PLSS) representation is not legally authoritative."
- **A protraction diagram.** For unsurveyed land the Bureau of Land Management draws the grid in advance, but "a protraction diagram is not, and is not intended to be, a substitute for an official survey" (Manual, sec. 3-12).
- **A fence.** A fence shows where someone built a fence. Lesson 6 shows why the law looks first to the corners the original surveyor set.

**How a description becomes a boundary.** A deed is words; a boundary is a line on the ground. The bridge between them is the monument, the corner the surveyor actually set. The Manual: "The courts attach major importance to evidence relating to the original position of the corner, such evidence being given far greater weight than the record relating to bearings and lengths of lines. The corner monument and its accessories constitute direct evidence of the position of the corner" (sec. 4-2). So when the words and the marks disagree, the marks usually win. Lesson 6 gives the statutes behind that rule, and lesson 8 shows how the same idea governs an ordinary deed.

**The corners are protected.** Federal law makes it a crime to willfully destroy, deface, change or remove a section corner, a witness tree, or "any monument or bench mark of any Government survey" (18 U.S.C. 1858, quoted in the Manual, sec. 4-2). If you find one, look and photograph; never move it.

**How the exercises work.** Every exercise in this course uses a historical document or the recorded description of a public building, such as a courthouse, a library or a school, never a private home. Land records are public, but a stranger's deed is not practice material.

**What it will make you.** Someone who can read a legal description on the grid or in metes and bounds, explain which of its parts control, and find the original survey records behind it. That is enough to ask a surveyor, a title company or a county office the right questions, and to understand the answers.

:::reveal According to the Manual, which weighs more in court: evidence of a corner's original position, or the recorded bearings and lengths? ||| Evidence of the corner's original position, which is "given far greater weight than the record relating to bearings and lengths of lines" (sec. 4-2).

:::reveal Does a protraction diagram fix a boundary? ||| No. The Manual says it "is not, and is not intended to be, a substitute for an official survey" (sec. 3-12).

## Sources
- ${BOONE} Locator: "Legal Survey Book". ${TIER_B}
- ${USGS_FAQ} Locator: the answer, first sentence. ${TIER_A}
- ${MANUAL} Locator: sec. 3-12, p. 42 (PDF p. 53); sec. 4-2, p. 105 (PDF p. 116). ${TIER_A}`,
    },
    {
      slug: "section-0-quiz",
      title: "Section 0 quiz · Before you read a description",
      section: "0 · Before you read a description",
      body: "A graded check on why a land description is a civic act and on what this course will and will not make you. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What common-law principle does the Manual say a valid land conveyance must meet?", options: ["A description accurate enough to identify the boundaries", "A price paid in coin at the moment the deed is signed", "A witness from each neighboring parcel at the signing", "A map drawn by the county at the buyer's own expense"], correctIndex: 0, explanation: "\"A valid land conveyance shall, in addition to other requirements, contain a description sufficiently accurate to identify boundaries with a required degree of certainty\" (sec. 1-18).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "How were lands described in the colonial states, according to the Manual?", options: ["By a grid of square townships", "By numbered city blocks only", "By irregular metes and bounds", "By latitude and longitude alone"], correctIndex: 2, explanation: "Lands \"were described by irregular metes-and-bounds, with each parcel depending more or less on the description of its neighbors\" (sec. 1-18).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "What weakness of colonial descriptions does the Manual name?", options: ["Each parcel had to be exactly one mile square", "Each parcel depended on its neighbors' descriptions", "Each parcel was surveyed twice before a sale", "Each parcel was named for the king's officer"], correctIndex: 1, explanation: "\"With each parcel depending more or less on the description of its neighbors\" (sec. 1-18).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "Which side favored \"indiscriminate location, the old metes and bounds system\"?", options: ["Thomas Jefferson's side", "John Adams's side", "Thomas Hutchins's side", "Alexander Hamilton's side"], correctIndex: 3, explanation: "White, p. 11: \"Hamilton was in favor of indiscriminate location, the old metes and bounds system.\"", sourceLessonSlug: "survey-before-sale" },
          { prompt: "What did the Jefferson side advocate, according to White?", options: ["Free settlement first, with surveys made later", "Rectangular survey before any sale or settlement", "Sale of whole states to large land companies", "Leasing western land but never selling any"], correctIndex: 1, explanation: "The Jefferson group \"advocated a system of rectangular survey before any sale or settlement\" (White, p. 11).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "What did the Jefferson side say survey before sale would prevent?", options: ["Rising land prices", "Westward settlement", "Treaties with nations", "Overlapping claims"], correctIndex: 3, explanation: "\"Survey before sale was necessary to prevent overlapping claims and to simplify deeds and registering\" (White, p. 11).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "Which of these was NOT one of the Jefferson side's arguments for a rectangular survey?", options: ["Buyers could pick only the best land", "It would leave no gaps or gores", "Buyers took poor land with good", "Neighbors shared a common boundary"], correctIndex: 0, explanation: "It would \"make the buyer take the poor land along with the good land\", the opposite of picking only the best.", sourceLessonSlug: "survey-before-sale" },
          { prompt: "On what date did Congress pass the Land Ordinance?", options: ["July 4, 1776", "July 13, 1787", "May 20, 1785", "March 1, 1800"], correctIndex: 2, explanation: "The Land Ordinance of May 20, 1785 (White, p. 11; Manual sec. 1-18). July 13, 1787 is the Northwest Ordinance.", sourceLessonSlug: "survey-before-sale" },
          { prompt: "What is the system the 1785 Ordinance created now called?", options: ["The Public Land Survey System", "The National Spatial Reference", "The Colonial Boundary Register", "The General Mapping Program"], correctIndex: 0, explanation: "The Manual calls it the Public Land Survey System, or PLSS.", sourceLessonSlug: "survey-before-sale" },
          { prompt: "According to the BLM's 2009 notice, the PLSS is the framework for land title in which states?", options: ["Only the states east of the Mississippi River", "Only the states admitted after the Civil War", "All but the original colonies, Texas, and Hawaii", "Every state in the Union, with no exceptions"], correctIndex: 2, explanation: "All States \"except those formed from the territory of the original 13 colonies, Texas, and Hawaii\" (74 FR 48776).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "How many states does the Manual say were created out of the public domain?", options: ["Thirteen", "Thirty", "Fifty", "Twenty"], correctIndex: 1, explanation: "\"Thirty States have been created out of the public domain\" (sec. 1-32).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "When was Indiana admitted to the Union, according to the Manual?", options: ["July 4, 1776", "May 20, 1785", "March 26, 1804", "December 11, 1816"], correctIndex: 3, explanation: "Indiana was \"admitted into the Union December 11, 1816\" (sec. 1-32).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "What does the Land Ordinance's first sentence say the territory was?", options: ["Won by the Continental Army from the British crown", "Ceded by states, purchased of the Indian inhabitants", "Bought from France as part of the Louisiana Purchase", "Granted to the Ohio Company by Congress in full"], correctIndex: 1, explanation: "\"The territory ceded by individual states to the United States, which had been purchased of the Indian inhabitants\" (White, p. 11).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "How does lesson 1 say this course treats the treaty cessions under the grid?", options: ["As a topic left to another course entirely", "As settled history that needs no review", "As a footnote at the end of the course", "As part of the record, not a preface to it"], correctIndex: 3, explanation: "\"This course treats that as part of the record, not a preface to it.\"", sourceLessonSlug: "survey-before-sale" },
          { prompt: "Which lessons of this course carry a Native reviewer's read before release?", options: ["Lessons 3, 7 and 10", "Lessons 1, 2 and 13", "Lessons 4, 5 and 6", "Lessons 9, 11 and 12"], correctIndex: 0, explanation: "Lessons 3, 7 and 10 read the cession documents closely and carry a Native reviewer's read.", sourceLessonSlug: "survey-before-sale" },
          { prompt: "Which catalog course does lesson 1 point to for reading a treaty?", options: ["Surveying: How Land Gets Measured", "Mudsock: How a Rivalry Marks a Boundary", "Tribal Nations and Indigenous Governance", "The series' map-and-compass course"], correctIndex: 2, explanation: "For the treaties themselves, Tribal Nations and Indigenous Governance teaches how to read one.", sourceLessonSlug: "survey-before-sale" },
          { prompt: "What does the companion course, Surveying: How Land Gets Measured, teach?", options: ["The chain, compass, level and planimeter", "The deed, the grid, and Indiana's records", "The treaties that ceded Indiana's land", "The county offices that tax each parcel"], correctIndex: 0, explanation: "It teaches the tools that made the records; this course reads what they produced.", sourceLessonSlug: "survey-before-sale" },
          { prompt: "What can a reader of this course expect from each lesson's Sources block?", options: ["Which reviewer approved it, and on what date", "How much each source costs, and where to buy it", "Where to look in each source, and whether it is free", "Which other courses also cite the same source"], correctIndex: 2, explanation: "Each lesson ends with where its facts come from, page by page, and says whether you can open the source free.", sourceLessonSlug: "survey-before-sale" },
          { prompt: "What does a \"Before release\" box mean in this course?", options: ["The lesson is optional reading for experienced readers", "The lesson waits on a surveyor, a Native reviewer, or BAM", "The lesson holds the graded quiz for its whole section", "The lesson was written and signed by a county surveyor"], correctIndex: 1, explanation: "It means the lesson is waiting on a licensed land surveyor's read, a Native reviewer's read, or BAM's filmed visit.", sourceLessonSlug: "survey-before-sale" },
          { prompt: "Why is a description that cannot be traced on the ground a problem?", options: ["It is too long to fit on a county recorder's form", "It must then be rewritten again in metric units", "It forces the state to buy the land back at once", "It fails the common-law test for a valid conveyance"], correctIndex: 3, explanation: "The common law asks for a description \"sufficiently accurate to identify boundaries with a required degree of certainty\" (sec. 1-18).", sourceLessonSlug: "survey-before-sale" },
          { prompt: "How does the Boone County surveyor's office define a legal survey?", options: ["By the county assessor, with notice to the state archives", "By a registered surveyor, with notice to all adjoining owners", "By the owner with a chain, with notice to the recorder", "By a title company, with notice to the buyer's lender"], correctIndex: 1, explanation: "\"A legal survey is a survey prepared by a registered land surveyor with notice to all adjoining landowners.\"", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What does the Boone County surveyor keep for all legal surveys in the county?", options: ["A list of fence permits", "A ledger of property taxes", "A file of building plans", "A legal survey record book"], correctIndex: 3, explanation: "The County Surveyor \"maintains a legal survey record book for all legal surveys within the county.\"", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Who should answer a question about the law on your particular deed today?", options: ["A licensed surveyor or an attorney", "Any neighbor who has lived nearby", "The author of a 1912 textbook", "A county road crew working nearby"], correctIndex: 0, explanation: "Breed and Hosmer describe general principles of 1912; the law where your land is today is a question for a licensed surveyor or an attorney.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What does lesson 2 say reading a description tells you?", options: ["Where the line is on the ground", "How much the land is worth today", "What was conveyed, in words", "Who the next owner will be"], correctIndex: 2, explanation: "Reading a description tells you what was conveyed, in words; where those words land on the ground is a surveyor's finding.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What does the USGS say about PLSS lines on its US Topo maps?", options: ["They are not legally authoritative", "They are the official legal record", "They control when a deed is vague", "They replace the original field notes"], correctIndex: 0, explanation: "\"US Topo maps are not legal documents and the Public Land Survey System (PLSS) representation is not legally authoritative.\"", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What does the Manual say about a protraction diagram?", options: ["It is the official survey for new land", "It overrides the original field notes", "It is no substitute for an official survey", "It fixes corners once it is printed"], correctIndex: 2, explanation: "\"A protraction diagram is not, and is not intended to be, a substitute for an official survey\" (sec. 3-12).", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What does lesson 2 say a fence shows?", options: ["Where the legal line must be", "Where someone built a fence", "Where the original corner is", "Where the section line runs"], correctIndex: 1, explanation: "\"A fence shows where someone built a fence.\" Lesson 6 shows why the law looks first to the original corners.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What does lesson 2 call the bridge between a deed's words and a line on the ground?", options: ["The county's online parcel map", "The buyer's own written intent", "The price stated in the deed", "The monument the surveyor set"], correctIndex: 3, explanation: "The bridge between them is the monument, the corner the surveyor actually set.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Which weighs more in court, according to the Manual?", options: ["The recorded bearings of all the lines", "Evidence of a corner's original position", "The recorded lengths of all the lines", "The acreage written on the deed itself"], correctIndex: 1, explanation: "Corner evidence is \"given far greater weight than the record relating to bearings and lengths of lines\" (sec. 4-2).", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What does the Manual call the corner monument and its accessories?", options: ["Secondary evidence, below the field notes", "Decorations with no legal weight at all", "Temporary marks for the chainmen only", "Direct evidence of the corner's position"], correctIndex: 3, explanation: "\"The corner monument and its accessories constitute direct evidence of the position of the corner\" (sec. 4-2).", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "When a deed's words and the original marks disagree, which usually wins?", options: ["The marks", "The words", "The fence", "The map"], correctIndex: 0, explanation: "Corner evidence outweighs the record of bearings and lengths, so the marks usually win (sec. 4-2).", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Which statute makes it a crime to willfully remove a section corner?", options: ["43 U.S.C. 752", "16 U.S.C. 470", "18 U.S.C. 1858", "42 U.S.C. 4321"], correctIndex: 2, explanation: "18 U.S.C. 1858, quoted in full in the Manual, sec. 4-2.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What should you do if you find a government survey corner?", options: ["Look and photograph; never move it", "Dig it up to read the date on it", "Move it to where your fence runs", "Paint it so the mower avoids it"], correctIndex: 0, explanation: "\"If you find one, look and photograph; never move it.\"", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Which of these does 18 U.S.C. 1858 protect?", options: ["Fence posts", "Mailboxes", "Witness trees", "Road signs"], correctIndex: 2, explanation: "It covers section corners, witness trees, blazed line trees, and \"any monument or bench mark of any Government survey.\"", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What do this course's exercises use for practice?", options: ["Any private home's deed found in county records", "Historical documents and public buildings' records", "The learner's neighbors' deeds, with permission", "Made-up deeds with invented owners and lots"], correctIndex: 1, explanation: "Every exercise uses a historical document or the recorded description of a public building, never a private home.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Why does this course not use private homes' deeds for practice?", options: ["Private deeds are sealed and cannot be read by anyone", "Private deeds never contain any legal description", "Private deeds are written only in metes and bounds", "Records are public, but a stranger's deed is not practice"], correctIndex: 3, explanation: "\"Land records are public, but a stranger's deed is not practice material.\"", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Which of these is a public building of the kind lesson 2 suggests for practice?", options: ["A neighbor's garage", "A county courthouse", "A friend's farmhouse", "A rented apartment"], correctIndex: 1, explanation: "A courthouse, a library or a school: public buildings, never a private home.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "What does lesson 2 say this course will make you?", options: ["A surveyor licensed to sign a legal survey in Indiana", "An attorney able to give advice on particular deeds", "A county official who settles disputes over lines", "A reader of descriptions who can ask the right questions"], correctIndex: 3, explanation: "Someone who can read a legal description, explain which parts control, and find the records, enough to ask the right questions.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Which of these will this course NOT make you?", options: ["A licensed surveyor", "A careful reader", "A records finder", "A better questioner"], correctIndex: 0, explanation: "Retracing a boundary is a licensed profession; the course does not make anyone a surveyor.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Why does lesson 2 call Breed and Hosmer's deed rules \"general principles of its day\"?", options: ["The book was never used by working surveyors at all", "The book covers only surveys in the state of Maine", "The book is from 1912, and law varies by place and time", "The book was withdrawn and replaced by the Manual"], correctIndex: 2, explanation: "Breed and Hosmer's 1912 textbook describes general principles of its day; today's law where your land is needs a surveyor or attorney.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Who decides where a deed's words land on the ground?", options: ["A surveyor, whose finding it is", "The reader, from the words alone", "The neighbor with the oldest fence", "The online map, from its lines"], correctIndex: 0, explanation: "Where those words land on the ground is a surveyor's finding.", sourceLessonSlug: "what-this-course-will-not-make-you" },
          { prompt: "Which lesson gives the statutes behind the rule that the marks usually win?", options: ["Lesson 9", "Lesson 12", "Lesson 6", "Lesson 13"], correctIndex: 2, explanation: "Lesson 6 gives the statutes; lesson 8 applies the idea to an ordinary deed.", sourceLessonSlug: "what-this-course-will-not-make-you" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: The grid: the Public Land Survey System
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-land-ordinance-of-1785",
      title: "3 · The Land Ordinance of 1785, read as a primary source",
      section: "1 · The grid: the Public Land Survey System",
      recallContent: [
        {
          prompt: "What does the USGS say about the section lines printed on its US Topo maps?",
          answer: "They are not a legal record: \"the Public Land Survey System (PLSS) representation is not legally authoritative.\"",
        },
        {
          prompt: "Which does the Manual say weighs more in court: evidence of a corner's original position, or the record of bearings and lengths?",
          answer: "Evidence of the corner's original position (sec. 4-2).",
        },
      ],
      body: `${QR(`${SURVEYOR}, to check the reading of the Ordinance's survey rules; and ${NATIVE_REVIEWER}, to read how the lesson treats "the late Indian purchases" and the Ordinance's framing of Native land`)}

**Read it yourself.** The full text of "An Ordinance for Ascertaining the Mode of Disposing of Lands in the Western Territory," passed May 20, 1785, is printed in C. A. White's *A History of the Rectangular Survey System* (pp. 11 to 13), free from the Bureau of Land Management. It runs about three pages. This lesson walks through it in order, quoting its own words, so you can check every claim against the document.

**What it was dividing.** It opens: "the territory ceded by individual states to the United States, which had been purchased of the Indian inhabitants, shall be disposed of in the following manner." Hold onto the word "purchased." It is the government's word for land ceded by treaty, and lessons 7 and 10 show what such transactions looked like on paper.

**The township.** "The surveyors ... shall proceed to divide the said territory into townships of 6 miles square, by lines running due north and south, and others crossing these at right angles, as near as may be, unless where the boundaries of the late Indian purchases may render the same impracticable." The grid was to give way only where a treaty boundary got in its way. A surveyor was paid "two dollars for every mile, in length, he shall run, including the wages of chain carriers, markers, and every other expense."

**Where to begin.** The first north-south line was to start "on the river Ohio, at a point that shall be found to be due north from the western termination of a line, which has been run as the southern boundary of the state of Pennsylvania," and the first east-west line from the same point. Townships were numbered "progressively from south to north," and ranges by "their progressive numbers to the westward."

**How to mark it.** "The lines shall be measured with a chain; shall be plainly marked by chaps on the trees, and exactly described on a plat; whereon shall be noted by the surveyor, as their proper distances, all mines, salt-springs, salt-licks, and mill-seats, that shall come to his knowledge; and all water-courses, mountains and other remarkable and permanent things ... and also the quality of the lands." A "chap" is a blaze, a cut in the bark. The plat was a sales sheet as much as a map.

**The lots.** Each township's plat was to be "marked by subdivisions into lots of one mile square, or 640 acres, ... and numbered from 1 to 36." Only the outside lines were run on the ground; the inner lots were drawn on paper. Lots 8, 11, 26 and 29 were reserved "for future sale," and "the lot No. 16, of every township, for the maintenance of public schools, within the said township," with "one-third part of all gold, silver, lead and copper mines." Land was not to be sold "under the price of one dollar the acre," plus survey costs "rated at 36 dollars the township." And "the towns of Gnadenhutten, Schoenbrun and Salem, on the Muskingum," were reserved "for the sole use of the Christian Indians, who were formerly settled there."

**How White reads it.** White's analysis (p. 14) begins: "Only the land that had been purchased from the Indians was to be surveyed. This provision would appease the Indians, follow the practice of purchase traditional in the colonies, and since only Congress could buy land from the Indians, would prevent private claims based on private purchases." That is White's interpretation, written in 1983 for the BLM, and it is worth reading critically: it explains the provision from the government's side. Lesson 7 shows a private purchase of exactly the kind it shut out. The catalog's course *The Match* (its lesson "Whose land it was") follows how ceded land was counted and sold, parcel by parcel.

White also explains two numbers. Townships "were to be six miles square (reduced from seven)," and the chain was written into the law partly because Jefferson had wanted a geographic mile of about 6,080 feet, which "would have made a lot about 849 acres, a very oddball figure" (p. 14). Lot 16 mattered for a reason beyond land: White judges that with it "governmental support of public schools was established" (p. 15).

**Two years later: the Northwest Ordinance.** The 1785 Ordinance said how to survey and sell. The Northwest Ordinance of July 13, 1787 said how the territory would be governed. The Manual calls it "the first general legislation by the Congress on the subject of real property," and notes that by it "new States were to be admitted on an equal footing with the original States" (sec. 1-20(n)). White summarizes its articles (p. 15): religious freedom; habeas corpus, jury trial and property rights; public schools and "protection and rights of the Indians"; the territory to be divided into three to five states, each admissible at 50,000 free inhabitants; and slavery outlawed in the territory. Indiana was one of the states carved from that territory, admitted in 1816 (Manual, sec. 1-32). The 1785 Ordinance gave Indiana its grid; the 1787 Ordinance gave it the path to statehood.

:::reveal Where did the 1785 Ordinance allow the surveyors to depart from six-mile-square townships? ||| "Where the boundaries of the late Indian purchases may render the same impracticable," and no further than those circumstances required.

:::reveal Which lot of every township did the Ordinance reserve for public schools? ||| Lot No. 16, "for the maintenance of public schools, within the said township."

## Sources
- ${WHITE} Locator: the Ordinance's text, pp. 11 to 13 (PDF pp. 25 to 27); White's analysis, pp. 14 to 15 (PDF pp. 28 to 29). ${TIER_A}
- ${MANUAL} Locator: sec. 1-20(n), p. 20 (PDF p. 31); sec. 1-32, p. 16 (PDF p. 27). ${TIER_A}`,
    },
    {
      slug: "meridians-townships-and-ranges",
      title: "4 · Meridians, base lines, townships and ranges",
      section: "1 · The grid: the Public Land Survey System",
      recallContent: [
        {
          prompt: "How big were the 1785 Ordinance's townships, and how many lots did each hold?",
          answer: "Six miles square, divided on the plat into 36 lots of one mile square, or 640 acres.",
        },
        {
          prompt: "What did the Northwest Ordinance of 1787 provide for new states?",
          answer: "That they would be admitted \"on an equal footing with the original States\" (Manual, sec. 1-20(n)); White adds three to five states, each admissible at 50,000 free inhabitants.",
        },
      ],
      body: `**The rule in one sentence.** The statute behind every township, as the Manual quotes it (sec. 3-2, citing Rev. Stat. 2395; 43 U.S.C. 751): the public lands "shall be divided by lines intersecting true north and south lines at right angles so as to form townships 6 miles square," the townships "shall be subdivided into 36 sections, each 1 mile square and containing 640 acres as nearly as may be," and the sections are numbered "beginning with the number 1 in the northeast section, and proceeding west and east alternately through the township with progressive numbers to and including 36."

**The framework, step by step** (sec. 3-3):
1. An **initial point**, "to serve as an origin for surveys to be extended in separated localities."
2. A **principal meridian** running north and south through it, and a **base line** running east and west.
3. **Guide meridians** and **standard parallels** at intervals "short enough to maintain a workable adherence to the legal definition of the primary unit, the township 6 miles square."
4. **Township exteriors**, numbered "to the north or south commencing with number 1 at the base line," with **ranges** numbered "to the east or west beginning with number 1 at the principal meridian."
5. **Sections**, numbered "commencing with number 1 in the northeast section of the township, proceeding thence west to section 6, thence south to section 7, thence east to section 12, and so on, alternately, to number 36 in the southeast section."

**Draw the township.** Six rows of six squares. The top row, from right to left: 1, 2, 3, 4, 5, 6. The next row, left to right: 7 under 6, then 8, 9, 10, 11, 12 under 1. And so on, snaking down, until 36 sits in the bottom right corner. Draw it twice and you will not forget it.

**It was not always this way.** Under the 1785 Ordinance the lots were numbered differently: "commencing with No. 1 in the southeast corner of the township and running from south to north in each sequence to No. 36 in the northwest corner" (Manual, front matter, describing the first township plat). The Act of May 18, 1796 changed the numbering "to that which is practiced today" (sec. 1-20(n)). So a section 1 in eastern Ohio's first surveys is not where a section 1 is anywhere else. Old records must be read by the rules of their own date.

**Reading a township and range.** A description gives the township first, then the range, each with a direction: "T. 4 N., R. 20 E." means township 4 north of the base line, range 20 east of the principal meridian (the Bureau of Land Management's *Specifications for Descriptions of Land*, p. 10). Because each township is 6 miles on a side, the numbers turn straight into distances. Township 4 north is the fourth row of townships above the base line, so its south line lies 3 × 6 = 18 miles north of the base line. Range 20 east is the twentieth column east of the meridian, so its west line lies 19 × 6 = 114 miles east of it.

**Why the grid needs correcting.** Meridians are not parallel; they run together toward the pole. A township whose east and west lines both run true north must be a little narrower at its north end than at its south. Standard parallels, "which have also been called correction lines," restart the measurement at intervals; under the 2009 Manual they are run "at intervals of 24 miles north and south of the base line," and guide meridians "at intervals of 24 miles east and west from the principal meridian" (secs. 3-13 and 3-14). The same sections admit that older surveys used other spacings, 30 or 36 miles. A township line that jogs where it crosses a correction line is the grid catching up with the shape of the earth, not a mistake. When you meet one on an old plat, read the rules of its own date before you draw a conclusion.

**The meridians that matter here.** The Manual's table 3-1 lists every principal meridian, the year it was adopted, and the states it governs. Two reach Indiana: the **Second Principal Meridian**, adopted 1805, governing surveys "in Illinois and Indiana," with an initial point at 38° 28' 09.900" N, 86° 27' 20.400" W; and the **First Principal Meridian**, adopted 1819, governing "Ohio and Indiana." Table 3-2 adds a survey with no initial point at all: the "Ohio River Base (Indiana)," begun 1799, its townships numbered north from the Ohio River. Lesson 10 tells how Indiana came to be surveyed from three origins.

:::reveal In a regular township, which section lies directly south of section 6? ||| Section 7. The numbers run west along the top row from 1 to 6, then turn south and run east, so 7 sits under 6.

:::reveal How far north of the base line is the south line of township 3 north? ||| Two townships of 6 miles lie below it, so 2 × 6 = 12 miles.

## Sources
- ${MANUAL} Locator: front matter, the first township plat (PDF p. 5); sec. 1-20(n), p. 20 (PDF p. 31); secs. 3-2 and 3-3, pp. 39 to 40 (PDF pp. 50 to 51); tables 3-1 and 3-2, pp. 41 to 42 (PDF pp. 52 to 53); secs. 3-13 and 3-14, pp. 42 to 43 (PDF pp. 53 to 54). ${TIER_A}
- ${SPECS} Locator: chap. II, "Preferred Method for Writing Descriptions," p. 10 (PDF p. 16). ${TIER_A}`,
    },
    {
      slug: "aliquot-parts-and-lots",
      title: "5 · Aliquot parts and lots: reading SW1/4NE1/4",
      section: "1 · The grid: the Public Land Survey System",
      recallContent: [
        {
          prompt: "In a regular township, where are sections 1, 6, 7 and 36?",
          answer: "Section 1 in the northeast corner, 6 in the northwest, 7 directly under 6, and 36 in the southeast.",
        },
        {
          prompt: "Read \"T. 4 N., R. 20 E.\"",
          answer: "Township 4 north of the base line, range 20 east of the principal meridian.",
        },
      ],
      body: `**Below the section.** A section is a square mile of 640 acres, but people rarely buy a whole one. The Bureau of Land Management's *Specifications for Descriptions of Land* (2017), the federal style guide for writing descriptions, explains how a section is cut into smaller legal units, called **legal subdivisions**, which "are of two types, aliquot parts and lots" (p. 9).

**Aliquot parts.** "Aliquot" means a part that divides a whole exactly. The *Specifications* define an aliquot part as "an area that is a legal subdivision of a section by division into halves or fourths ad infinitum; except lots" (p. 9, note 14).
- The section is split into quarters "by running straight lines from the established quarter-section corners to the opposite corresponding quarter-section corners." These "nominal 160-acre units are designated by symbol ... as NE1/4, NW1/4, SW1/4, and SE1/4."
- Each quarter is split the same way into "nominal 40-acre units ... designated by symbol ... as, for example, SW1/4NE1/4."
- Occasionally again, into "nominal 10-acre units ... for example, NW1/4SW1/4NE1/4."

**Read it right to left.** SW1/4NE1/4 means the southwest quarter **of** the northeast quarter. Start with the last piece (the NE quarter of the section, 160 acres) and work left: its SW quarter is 40 acres. NW1/4SW1/4NE1/4 is the NW quarter of the SW quarter of the NE quarter: 160 → 40 → 10 acres. Each component divides the area by four.

**The comma is not punctuation, it is arithmetic.** "A comma means 'AND THE' and the absence of a comma means 'OF THE.'" The *Specifications'* own example: "The description NE1/4SW1/4SE1/4 without a comma describes an aliquot part of 10 acres. With a comma, as such NE1/4, SW1/4, SE1/4 describes three aliquot parts totaling 480 acres" (p. 10). One misplaced comma can multiply an area by forty-eight.

**Four components at most.** Aliquot parts could be divided forever, but long strings "tend to invite error," so "land descriptions by aliquot part must not go beyond a four component description" (p. 9). A 2½-acre unit such as SE1/4NE1/4NE1/4SW1/4 is acceptable; a five-component string is not, and anything smaller gets a survey and lot numbers instead. The Manual states the same practice (sec. 3-33).

**A complete description.** "A proper aliquot part description should contain all of the reference elements within it: principal meridian, State, township and range, section, and lots or aliquot parts." The *Specifications'* worked example (p. 10):

> Mount Diablo Meridian, Nevada
> T. 4 N., R. 20 E.,
> sec. 15, NW1/4, NE1/4SE1/4SW1/4, and NW1/4SE1/4.

"The areas described aggregate 210 acres": the NW quarter (160), plus a 10-acre piece, plus a 40-acre piece. Parts are listed in a set order, "NE, then NW, SW, and SE."

**Halves of halves are trouble.** The *Specifications* advise against "half of a half" descriptions such as W1/2W1/2, because they are "ambiguous and subject to more than one interpretation" (p. 11): it is not clear whether the half is by area or by measurement.

**Lots.** Not every section is regular. The Manual (sec. 3-32): of a township's 36 sections, "25 of which are regular sections returned as containing 640 acres each." The sections against the north and west boundaries absorb the leftovers from measurement and from the converging meridians: each holds 480 acres of regular aliquot parts plus "four additional regular lots returned as containing 40 acres plus or minus the excess or deficiency," and section 6, in the corner, holds 360 acres plus seven lots. A lot is "designated by section and lot numbers such as 'sec. 3, lot 1,'" and "lots cannot be described as aliquot" (*Specifications*, p. 11).

**Legal acres and the smallest unit.** Under the Act of March 1, 1800, "each legal subdivision on the plats returned by the Surveyor General shall be considered as containing the exact quantity expressed on the plat": "the plat is the source of the quantity of acres for administrative purposes, often called legal acres" (Manual, sec. 1-20(n)). A quarter section of a full 640-acre section is 160 acres in law, whatever a modern tape says. And "the smallest legal subdivision for purposes of disposal under the general land laws is 40 acres unless otherwise specified in a given law" (sec. 3-32).

:::reveal How many acres is NE1/4SE1/4, and how many is NE1/4, SE1/4? ||| Without the comma, the NE quarter of the SE quarter: 40 acres. With the comma, the NE quarter and the SE quarter: 320 acres.

:::reveal How many acres is the S1/2NE1/4? ||| Half of a 160-acre quarter: 80 acres.

## Sources
- ${SPECS} Locator: chap. II, pp. 9 to 11 (PDF pp. 15 to 17), including note 14's glossary definitions. ${TIER_A}
- ${MANUAL} Locator: sec. 1-20(n), pp. 20 to 21 (PDF pp. 31 to 32); secs. 3-32 and 3-33, pp. 47 to 48 (PDF pp. 58 to 59). ${TIER_A}`,
    },
    {
      slug: "the-corners-are-the-law",
      title: "6 · The corners are the law: monuments over measurements",
      section: "1 · The grid: the Public Land Survey System",
      recallContent: [
        {
          prompt: "What does a comma mean in an aliquot description, and what does its absence mean?",
          answer: "A comma means \"AND THE\"; no comma means \"OF THE\" (Specifications, p. 10).",
        },
        {
          prompt: "What are \"legal acres\"?",
          answer: "The quantity of acres shown on the official plat, which the Act of March 1, 1800 made the quantity for administrative purposes (Manual, sec. 1-20(n)).",
        },
      ],
      body: `${QR(`${SURVEYOR}, to check this lesson's statement of the statutes and the restoration rules, and its advice on fences and lines`)}

**The problem the law had to solve.** The companion course showed how the first lines were run: with a chain that "was difficult to keep at standard length," over hills where "inaccuracies often arose in measuring steep slopes" (Manual, sec. 7-5). By 1800 corners stood on the ground that were not where the theory put them, and land had already been sold by them: the first sale of the Seven Ranges was held in 1787 (White, p. 19). Congress had to choose: move the corners to match the arithmetic, or hold the corners and let the arithmetic go.

**It held the corners: the Act of March 1, 1800.** The Manual (sec. 1-20(n)) summarizes it: "the lines run and the corners marked on the ground and returned in the field notes and on the plat by the Surveyor General shall be considered to be the lines and corners of the parcels so identified, even though not in conformity to the precise theoretical positions contemplated by the survey laws, or not appearing to correspond with the plat, or found at unequal distances from the respective corners. It thus established a hierarchy of boundary evidence, the foremost and dispositive of which were the actual marks on the ground."

**Then made it permanent: the Act of February 11, 1805** (2 Stat. 313; 43 U.S.C. 752). It "fixes the corners marked (monumented) in position regardless of any errors, requires that any corners of half- or quarter-section not marked (monumented) in the original survey shall be established at midpoint and on line, fixes the lines actually run and marked as the proper (true) boundary lines, and establishes the length of the lines returned by the Surveyor General ... as the true length." It also fixed that "a half-section or quarter-section of a full 640-acre section contains 320 or 160 acres, respectively" (sec. 1-20(n)).

The idea had a champion. White records that Jared Mansfield, the surveyor general, "insisted that if his plats returned 640 acres in a section, then a quarter-section contained 160 acres regardless of what errors were found in the original surveys," and that "Mansfield was so firm in this stand that his views soon became law" (p. 49).

**How the Manual states the rule today.**
- "The original corners shall stand as the true corners they were intended to represent, even though not exactly where professional care might have placed them in the first instance" (sec. 3-4).
- "The law provides that the corners marked during the process of an original survey shall forever remain fixed in position, even disregarding technical errors that may have passed undetected before acceptance of the survey" (sec. 4-2).
- "Existing original corners shall not be disturbed. ... This restates the common law hierarchy of calls for monuments as controlling over calls for measurements" (sec. 7-5).

**Monuments over measurements.** That last phrase is the heart of it. A description "calls" for things: a monument (a corner, a stone, a blazed tree) and a measurement (a bearing, a distance). When they disagree, the monument controls. The chain's error does not move the corner; the corner corrects the chain.

**When a corner is lost.** A corner is **lost** only when "its original position cannot be determined by substantial evidence, either from traces of the original marks or from acceptable evidence or reliable testimony" (sec. 7-2). If substantial evidence exists, the corner is "existent or obliterated," and its original position is used. A truly lost corner is restored "by applying proportionate measurement" (sec. 7-1): the original record's distances are stretched or shrunk in proportion until they fit between the corners that do survive. "Lost corners must be reestablished in the identical positions they originally occupied" (sec. 3-4), as nearly as evidence allows. This is professional work, and the rule is that a surveyor restores the old position, never a new and better one.

**Why your fence may not be on your line.** A fence, a road edge, or a line on a county map was put there by someone after the survey, for their own reasons. The legal line runs between the original corners, wherever they actually stand. Whether a particular fence sits on that line is a question only a licensed surveyor's retracement can answer; this course gives you the reason the question exists, not the answer for any piece of land.

:::reveal An original corner is found 30 feet from where the plat's distances say it should be. Which position controls? ||| The corner as found. By the Acts of 1800 and 1805 and Manual secs. 3-4 and 4-2, original corners stand "regardless of any errors."

:::reveal When is a corner "lost" rather than "obliterated"? ||| When its original position cannot be determined by substantial evidence, from traces of the marks or reliable testimony. If such evidence exists, it is obliterated, and that evidence is used (sec. 7-2).

## Sources
- ${MANUAL} Locator: sec. 1-20(n), pp. 20 to 21 (PDF pp. 31 to 32); sec. 3-4, p. 40 (PDF p. 51); sec. 4-2, p. 105 (PDF p. 116); secs. 7-1, 7-2 and 7-5, p. 165 (PDF p. 176). ${TIER_A}
- ${WHITE} Locator: p. 19 (PDF p. 33); p. 49 (PDF p. 63). ${TIER_A}`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The grid: the Public Land Survey System",
      section: "1 · The grid: the Public Land Survey System",
      body: "A graded check on the Land Ordinance of 1785 and the Northwest Ordinance, the township grid, aliquot parts and lots, and why the original corners control. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Where is the full text of the 1785 Ordinance printed, free, according to lesson 3?", options: ["In White's history of the rectangular survey", "In Breed and Hosmer's 1912 surveying textbook", "In the 2017 Specifications for land descriptions", "In the Federal Register notice from 2009 itself"], correctIndex: 0, explanation: "White's A History of the Rectangular Survey System prints the full text on pp. 11 to 13.", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "On what date was the Land Ordinance passed?", options: ["July 13, 1787", "May 18, 1796", "May 20, 1785", "March 1, 1800"], correctIndex: 2, explanation: "\"Passed May 20,1785\" (White, p. 11).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "What word does the Ordinance use for how the territory had been obtained from Native nations?", options: ["Conquered", "Purchased", "Discovered", "Inherited"], correctIndex: 1, explanation: "\"Which had been purchased of the Indian inhabitants.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How large were the Ordinance's townships to be?", options: ["7 miles square", "10 miles square", "1 mile square", "6 miles square"], correctIndex: 3, explanation: "\"Townships of 6 miles square\" (White, p. 12).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Where could surveyors depart from the six-mile-square rule?", options: ["Wherever the ground was too hilly to chain at all", "Where the late Indian purchases made it impracticable", "Wherever a settler had already built a log cabin", "Wherever a river crossed a township's outer line"], correctIndex: 1, explanation: "\"Unless where the boundaries of the late Indian purchases may render the same impracticable\" (White, p. 12).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How much was a surveyor paid per mile under the Ordinance?", options: ["Two dollars, plus the wages of chain carriers", "One dollar, with chain carriers paid by Congress", "Six dollars, chain carriers paid by the buyers", "Two dollars, wages of chain carriers included"], correctIndex: 3, explanation: "\"Two dollars for every mile, in length, he shall run, including the wages of chain carriers, markers, and every other expense.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Where did the Ordinance say the first north-south line should begin?", options: ["On the Ohio, due north of Pennsylvania's south line end", "On Lake Erie, at the end of Pennsylvania's north line", "On the Mississippi, at the mouth of the Ohio River", "At Vincennes, on the east bank of the Wabash River"], correctIndex: 0, explanation: "\"On the river Ohio, at a point that shall be found to be due north from the western termination of a line, which has been run as the southern boundary of the state of Pennsylvania.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Which way were the Ordinance's townships numbered?", options: ["From north to south", "From west to east", "From south to north", "From the center out"], correctIndex: 2, explanation: "\"By numbers progressively from south to north.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How were the Ordinance's lines to be marked on the ground?", options: ["By chaps on the trees", "By painted stakes", "By stone walls", "By iron pipes"], correctIndex: 0, explanation: "\"Plainly marked by chaps on the trees\"; a chap is a blaze cut in the bark.", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Which of these did the Ordinance tell surveyors to note on the plat?", options: ["The names of all settlers", "The price of nearby land", "Salt-springs and mill-seats", "The weather on each day"], correctIndex: 2, explanation: "\"All mines, salt-springs, salt-licks, and mill-seats ... and also the quality of the lands.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Why does lesson 3 call the Ordinance's plat a sales sheet as much as a map?", options: ["It listed each lot's buyer and the price paid", "It noted the land's quality and resources", "It was printed for sale in every county seat", "It carried an advertisement for the auction"], correctIndex: 1, explanation: "Surveyors noted mines, salt-licks, mill-seats, water-courses and \"the quality of the lands\".", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How large was each lot on the Ordinance's township plat?", options: ["Half a mile square, 160 acres", "Two miles square, 2,560 acres", "One mile by half, 320 acres", "One mile square, 640 acres"], correctIndex: 3, explanation: "\"Lots of one mile square, or 640 acres.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Under the 1785 Ordinance, which lines were actually run on the ground?", options: ["Every lot line in every township", "Only the townships' outside lines", "Only the lines around lot 16", "Only lines along the Ohio River"], correctIndex: 1, explanation: "Only the outside lines were run; the inner lots were drawn on paper (Manual front matter; sec. 1-20(n)).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Which lots did the Ordinance reserve for future sale?", options: ["1, 6, 31 and 36", "4, 9, 16 and 21", "2, 12, 22 and 32", "8, 11, 26 and 29"], correctIndex: 3, explanation: "\"The four lots, being numbered 8,11,26, 29\" (White, p. 13).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Which lot did the Ordinance reserve for public schools?", options: ["Lot No. 16", "Lot No. 36", "Lot No. 1", "Lot No. 29"], correctIndex: 0, explanation: "\"The lot No. 16, of every township, for the maintenance of public schools.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "What share of gold, silver, lead and copper mines did the Ordinance reserve?", options: ["One-half", "One-fifth", "One-third", "One-tenth"], correctIndex: 2, explanation: "\"One-third part of all gold, silver, lead and copper mines.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "What was the lowest price per acre the Ordinance allowed?", options: ["One dollar", "Two dollars", "Fifty cents", "Six dollars"], correctIndex: 0, explanation: "Not \"under the price of one dollar the acre.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "At what amount did the Ordinance rate survey costs per township?", options: ["640 dollars", "2 dollars", "36 dollars", "100 dollars"], correctIndex: 2, explanation: "Survey and other charges \"rated at 36 dollars the township.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "Which towns did the Ordinance reserve for the Christian Indians formerly settled there?", options: ["Vincennes, Kaskaskia and Detroit", "Gnadenhutten, Schoenbrun and Salem", "Marietta, Chillicothe and Cincinnati", "Pittsburgh, Wheeling and Steubenville"], correctIndex: 1, explanation: "\"The towns of Gnadenhutten, Schoenbrun and Salem, on the Muskingum.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "According to White, what would surveying only purchased land prevent?", options: ["Treaties between Congress and Native nations", "Sales of land to settlers in small parcels", "Any reservation of land for public schools", "Private claims based on private purchases"], correctIndex: 3, explanation: "\"Since only Congress could buy land from the Indians, would prevent private claims based on private purchases\" (White, p. 14).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How does lesson 3 ask you to treat White's explanation of the purchase provision?", options: ["Accept it as the only account the documents allow", "Critically: it explains from the government's side", "Ignore it entirely, since White was not a historian", "Treat it as the Native nations' own written account"], correctIndex: 1, explanation: "It is White's 1983 interpretation for the BLM, worth reading critically because it explains the provision from the government's side.", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "From what size were the townships reduced to six miles square, according to White?", options: ["Ten miles square", "Five miles square", "Eight miles square", "Seven miles square"], correctIndex: 3, explanation: "\"Six miles square (reduced from seven)\" (White, p. 14).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How big would a lot have been with Jefferson's geographic mile, according to White?", options: ["About 849 acres", "About 640 acres", "About 1,000 acres", "About 320 acres"], correctIndex: 0, explanation: "It \"would have made a lot about 849 acres, a very oddball figure\" (White, p. 14).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "What does White say lot 16 established?", options: ["The first county seat in each township", "A church in the center of each township", "Governmental support of public schools", "A land office in every surveyed township"], correctIndex: 2, explanation: "\"Governmental support of public schools was established\" (White, p. 15).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "What does the Manual call the Northwest Ordinance of 1787?", options: ["The first general legislation by Congress on real property", "The last law of the Confederation on western land sales", "The first treaty between Congress and the Miami nation", "The founding act of the General Land Office in 1812"], correctIndex: 0, explanation: "\"The first general legislation by the Congress on the subject of real property\" (sec. 1-20(n)).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "On what footing were new states to be admitted under the Northwest Ordinance?", options: ["Junior footing until they had 100 years", "Territorial footing without any senators", "Equal footing with the original states", "Federal footing as districts of Congress"], correctIndex: 2, explanation: "\"New States were to be admitted on an equal footing with the original States\" (sec. 1-20(n)).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How many states was the Northwest Territory to be divided into, according to White?", options: ["Two to four", "Three to five", "Six to eight", "Exactly seven"], correctIndex: 1, explanation: "White's summary of Article 5: \"divided into three to five new States.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "At what population could a territory be admitted as a state under the Northwest Ordinance?", options: ["5,000 free inhabitants", "60,000 voters in all", "100,000 inhabitants", "50,000 free inhabitants"], correctIndex: 3, explanation: "\"When a territory contained 50,000 free inhabitants, it could be admitted as a new State\" (White, p. 15).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "What did the Northwest Ordinance outlaw in the territory, according to White's summary?", options: ["Every sale of land to companies", "Slavery and involuntary servitude", "Any treaty with Native nations", "All taxes on residents' property"], correctIndex: 1, explanation: "Article 6: \"Slavery and involuntary servitude outlawed in the Northwest Territory\" (White, p. 15).", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How does lesson 3 sum up what the two ordinances gave Indiana?", options: ["Its capital from 1785, its borders from 1787", "Its first county from 1785, its courts from 1787", "Its land offices from 1785, its roads from 1787", "Its grid from 1785, its path to statehood from 1787"], correctIndex: 3, explanation: "\"The 1785 Ordinance gave Indiana its grid; the 1787 Ordinance gave it the path to statehood.\"", sourceLessonSlug: "the-land-ordinance-of-1785" },
          { prompt: "How does the statute define townships, as the Manual quotes it?", options: ["6 miles square, on lines at right angles to true meridians", "7 miles square, on lines run by the magnetic needle", "10 miles square, on lines along the rivers' courses", "6 miles square, on lines set by each state's surveyor"], correctIndex: 0, explanation: "Lines \"intersecting true north and south lines at right angles so as to form townships 6 miles square\" (sec. 3-2).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "How many sections does a regular township hold?", options: ["16", "64", "36", "25"], correctIndex: 2, explanation: "Townships \"shall be subdivided into 36 sections, each 1 mile square\" (sec. 3-2).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Where is section 1 in a township numbered under today's rule?", options: ["The northeast corner", "The southeast corner", "The northwest corner", "The township's center"], correctIndex: 0, explanation: "Numbering commences \"with number 1 in the northeast section of the township\" (sec. 3-3).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Where is section 36 in a township numbered under today's rule?", options: ["The northeast corner", "The southwest corner", "The southeast corner", "The northwest corner"], correctIndex: 2, explanation: "\"... and so on, alternately, to number 36 in the southeast section\" (sec. 3-3).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Which section lies directly south of section 6?", options: ["12", "7", "5", "31"], correctIndex: 1, explanation: "From 6 the numbers turn south to 7 and run east.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Which section lies directly south of section 1?", options: ["7", "2", "36", "12"], correctIndex: 3, explanation: "The second row runs 7 to 12 from west to east, so 12 sits under 1.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "What serves as the origin for a set of rectangular surveys?", options: ["A county seat", "An initial point", "A river mouth", "A land office"], correctIndex: 1, explanation: "\"The establishment of independent initial points, each to serve as an origin for surveys\" (sec. 3-3).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "What runs east and west through an initial point?", options: ["The meridian", "A guide meridian", "A range line", "The base line"], correctIndex: 3, explanation: "Principal meridians run north and south and base lines east and west from the initial points (sec. 3-3).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "From what are township numbers counted?", options: ["The base line, north or south", "The meridian, east or west", "The nearest river, upstream", "The state line, going inland"], correctIndex: 0, explanation: "Townships are numbered \"to the north or south commencing with number 1 at the base line\" (sec. 3-3).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "From what are range numbers counted?", options: ["The base line, north or south", "The nearest county line, outward", "The meridian, east or west", "The Atlantic coast, westward"], correctIndex: 2, explanation: "Ranges are numbered \"to the east or west beginning with number 1 at the principal meridian\" (sec. 3-3).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Under the 1785 Ordinance, where was lot No. 1 of a township?", options: ["The southeast corner", "The northeast corner", "The northwest corner", "The southwest corner"], correctIndex: 0, explanation: "Lots were numbered \"commencing with No. 1 in the southeast corner\" (Manual, front matter).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Which act changed section numbering to today's pattern?", options: ["The Act of March 1, 1800", "The Act of February 11, 1805", "The Act of May 18, 1796", "The Act of April 25, 1812"], correctIndex: 2, explanation: "The Act of May 18, 1796 changed the rule \"to that which is practiced today\" (sec. 1-20(n)).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Why must old records be read by the rules of their own date?", options: ["Old records are all written in Latin or French", "Numbering and spacing rules changed over time", "The meridians were moved to new places in 1900", "The chain was redefined as 100 feet in 1796"], correctIndex: 1, explanation: "Section numbering changed in 1796, and parallel spacings differed in older surveys, so a record follows the rules of its date.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "How do you read \"T. 4 N., R. 20 E.\"?", options: ["Tract 4 north, road 20 east", "Township 4 north, row 20 east", "Tier 4 north, ridge 20 east", "Township 4 north, range 20 east"], correctIndex: 3, explanation: "Township 4 north of the base line, range 20 east of the principal meridian (Specifications, p. 10).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "How far north of the base line is the south line of township 4 north?", options: ["24 miles", "18 miles", "4 miles", "12 miles"], correctIndex: 1, explanation: "Three townships of 6 miles lie below it: 3 × 6 = 18 miles.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "How far east of the principal meridian is the west line of range 20 east?", options: ["120 miles", "20 miles", "126 miles", "114 miles"], correctIndex: 3, explanation: "Nineteen ranges of 6 miles lie between: 19 × 6 = 114 miles.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "How far north of the base line is the south line of township 3 north?", options: ["12 miles", "18 miles", "3 miles", "6 miles"], correctIndex: 0, explanation: "Two townships of 6 miles lie below it: 2 × 6 = 12 miles.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Why does the rectangular grid need correction lines?", options: ["Rivers cut across the township lines", "Chains stretch more on northern lines", "Meridians run together toward the pole", "The base line was run on a magnetic bearing"], correctIndex: 2, explanation: "Meridians converge, so a township with true north-south sides narrows northward; standard parallels restart the measurement.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "What have standard parallels also been called?", options: ["Correction lines", "Meander lines", "Treaty lines", "Section lines"], correctIndex: 0, explanation: "\"Standard parallels, which have also been called correction lines\" (sec. 3-13).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "At what interval does the 2009 Manual run standard parallels?", options: ["6 miles", "36 miles", "24 miles", "48 miles"], correctIndex: 2, explanation: "\"At intervals of 24 miles north and south of the base line\" (sec. 3-13).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "What other spacings does the Manual admit older standard parallels used?", options: ["6 or 12 miles", "30 or 36 miles", "48 or 60 miles", "10 or 20 miles"], correctIndex: 1, explanation: "\"Where standard parallels previously have been placed at intervals of 30 or 36 miles\" (sec. 3-13).", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "What does lesson 4 say a jog in a township line at a correction line is?", options: ["A surveyor's blunder that voids the plat", "A sign the land was never actually surveyed", "A treaty boundary placed on top of the grid", "The grid catching up with the earth's shape"], correctIndex: 3, explanation: "A jog at a correction line is the grid catching up with the shape of the earth, not a mistake.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Which principal meridian, adopted in 1805, governs surveys in Illinois and Indiana?", options: ["The First Principal Meridian", "The Second Principal Meridian", "The Third Principal Meridian", "The Fourth Principal Meridian"], correctIndex: 1, explanation: "Table 3-1: Second Principal, adopted 1805, Illinois and Indiana.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "Which principal meridian, adopted in 1819, governs surveys in Ohio and Indiana?", options: ["The Second Principal Meridian", "The Fifth Principal Meridian", "The Michigan Meridian", "The First Principal Meridian"], correctIndex: 3, explanation: "Table 3-1: First Principal, adopted 1819, Ohio and Indiana.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "What is the Ohio River Base (Indiana) in the Manual's table 3-2?", options: ["A 1799 survey with townships counted from the Ohio", "A 1785 survey run on the Pennsylvania line itself", "An 1819 survey based on the First Principal Meridian", "An 1804 survey of the Vincennes Tract's boundaries"], correctIndex: 0, explanation: "Table 3-2: Ohio River Base (Indiana), 1799, townships numbered north from the Ohio River.", sourceLessonSlug: "meridians-townships-and-ranges" },
          { prompt: "What are the two types of legal subdivisions, according to the Specifications?", options: ["Townships and ranges", "Tracts and parcels", "Aliquot parts and lots", "Blocks and plats"], correctIndex: 2, explanation: "Legal subdivisions \"are of two types, aliquot parts and lots\" (p. 9).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "What is an aliquot part?", options: ["A subdivision of a section by halves or fourths", "A numbered piece along a township's north edge", "A tract described by courses and distances", "A lot in a recorded town subdivision plat"], correctIndex: 0, explanation: "\"An area that is a legal subdivision of a section by division into halves or fourths ad infinitum; except lots\" (p. 9, note 14).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How is a section divided into quarter sections?", options: ["Lines run due north from each section corner", "Lines set by the buyer at the time of sale", "Straight lines between opposite quarter corners", "Lines along the nearest roads and streams"], correctIndex: 2, explanation: "\"By running straight lines from the established quarter-section corners to the opposite corresponding quarter-section corners\" (p. 9).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many nominal acres is a quarter section?", options: ["40", "160", "320", "640"], correctIndex: 1, explanation: "\"These nominal 160-acre units\" (p. 9).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many nominal acres is a quarter-quarter section such as SW1/4NE1/4?", options: ["160", "10", "80", "40"], correctIndex: 3, explanation: "\"These nominal 40-acre units are designated by symbol ... as, for example, SW1/4NE1/4\" (p. 9).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many nominal acres is NW1/4SW1/4NE1/4?", options: ["40", "10", "2.5", "160"], correctIndex: 1, explanation: "\"These resulting nominal 10-acre units are designated by symbol as, for example, NW1/4SW1/4NE1/4\" (p. 9).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How do you read SW1/4NE1/4?", options: ["The NE quarter of the SW quarter", "The SW quarter and the NE quarter", "The SW quarter beside the NE one", "The SW quarter of the NE quarter"], correctIndex: 3, explanation: "Read right to left: the southwest quarter of the northeast quarter.", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "In which direction should an aliquot string be read to find the land?", options: ["Right to left, from the largest piece", "Left to right, from the smallest piece", "Top to bottom, from the township", "Either way, as the order is free"], correctIndex: 0, explanation: "Start with the last piece and work left; each component divides the area by four.", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "What does a comma mean in an aliquot description, according to the Specifications?", options: ["\"OF THE\"", "\"OR THE\"", "\"AND THE\"", "\"IN THE\""], correctIndex: 2, explanation: "\"A comma means 'AND THE' and the absence of a comma means 'OF THE'\" (p. 10).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many acres is NE1/4SW1/4SE1/4, with no commas?", options: ["10 acres", "480 acres", "40 acres", "160 acres"], correctIndex: 0, explanation: "\"The description NE1/4SW1/4SE1/4 without a comma describes an aliquot part of 10 acres\" (p. 10).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many acres is NE1/4, SW1/4, SE1/4, with commas?", options: ["10 acres", "160 acres", "480 acres", "120 acres"], correctIndex: 2, explanation: "\"With a comma, as such NE1/4, SW1/4, SE1/4 describes three aliquot parts totaling 480 acres\" (p. 10).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many acres is NE1/4SE1/4?", options: ["320 acres", "40 acres", "160 acres", "10 acres"], correctIndex: 1, explanation: "The NE quarter of the SE quarter: 160 ÷ 4 = 40 acres.", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many acres is the S1/2NE1/4?", options: ["40 acres", "320 acres", "20 acres", "80 acres"], correctIndex: 3, explanation: "Half of a 160-acre quarter is 80 acres.", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "What is the longest aliquot description the Specifications allow?", options: ["Three components", "Four components", "Five components", "Six components"], correctIndex: 1, explanation: "Descriptions \"must not go beyond a four component description\" (p. 9).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "Why do the Specifications limit aliquot descriptions?", options: ["Short strings are illegal in court", "Recorders charge by the component", "The Manual bans all quarter-quarters", "Long strings tend to invite error"], correctIndex: 3, explanation: "Lengthy descriptions \"tend to invite error in the preparation and recordation of documents\" (p. 9).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "What five elements should a proper aliquot description contain?", options: ["Meridian, state, township and range, section, parts", "Owner, price, date, witness, and the recorder", "County, road, house number, lot, block, and city", "Latitude, longitude, elevation, area, and date"], correctIndex: 0, explanation: "\"Principal meridian, State, township and range, section, and lots or aliquot parts\" (p. 10).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many acres does the Specifications' Mount Diablo example describe?", options: ["160 acres", "250 acres", "210 acres", "640 acres"], correctIndex: 2, explanation: "NW1/4 (160) + NE1/4SE1/4SW1/4 (10) + NW1/4SE1/4 (40) = 210 acres.", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "In what order do the Specifications list the quarters?", options: ["NE, NW, SW, SE", "NW, NE, SE, SW", "SE, SW, NW, NE", "NE, SE, SW, NW"], correctIndex: 0, explanation: "\"In the order NE, then NW, SW, and SE\" (p. 10).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "Why do the Specifications advise against a description like W1/2W1/2?", options: ["It is too short to be recorded by a county", "It names a part that cannot exist on a plat", "It is ambiguous: half by area or by measure?", "It must be written with commas to be read"], correctIndex: 2, explanation: "Half of a half is \"ambiguous and subject to more than one interpretation\" (p. 11).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many regular 640-acre sections does a regular township hold, according to the Manual?", options: ["36", "25", "16", "30"], correctIndex: 1, explanation: "\"25 of which are regular sections returned as containing 640 acres each\" (sec. 3-32).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "Where are a township's irregular sections, which hold lots?", options: ["Along its south and east boundaries", "In the four sections at its center", "Wherever a road crosses the township", "Along its north and west boundaries"], correctIndex: 3, explanation: "\"Irregular sections against the north and west boundaries\" (sec. 3-32).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How many lots does section 6 usually hold, according to the Manual?", options: ["Four", "Seven", "Two", "Nine"], correctIndex: 1, explanation: "Section 6 contains 360 acres of aliquot parts \"with seven additional regular lots\" (sec. 3-32).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "How is a lot written in a description?", options: ["By quarter and quarter, as \"NW1/4NE1/4\"", "By street and number, as \"3 Lot Street\"", "By owner's last name, as \"the Smith lot\"", "By section and lot number, as \"sec. 3, lot 1\""], correctIndex: 3, explanation: "Lots are \"designated by section and lot numbers such as 'sec. 3, lot 1'\" (p. 11).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "May a lot be described as an aliquot part?", options: ["No; lots cannot be described as aliquot", "Yes; any lot equals a quarter-quarter", "Yes; but only in section 6 of a township", "No; lots must be described in rods only"], correctIndex: 0, explanation: "\"Lots cannot be described as aliquot\" (Specifications, p. 11).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "Which act made the plat's acreage the \"legal acres\"?", options: ["The Act of May 18, 1796", "The Act of April 5, 1832", "The Act of March 1, 1800", "The Land Ordinance of 1785"], correctIndex: 2, explanation: "The Act of March 1, 1800 set that \"the plat is the source of the quantity of acres for administrative purposes, often called legal acres\" (sec. 1-20(n)).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "What is the smallest legal subdivision for disposal under the general land laws, unless a law says otherwise?", options: ["40 acres", "10 acres", "160 acres", "2.5 acres"], correctIndex: 0, explanation: "\"The smallest legal subdivision for purposes of disposal under the general land laws is 40 acres unless otherwise specified\" (sec. 3-32).", sourceLessonSlug: "aliquot-parts-and-lots" },
          { prompt: "What did the Act of March 1, 1800 make the lines and corners of a parcel?", options: ["Those computed from the plat's data", "Those set later by each purchaser", "Those run and marked on the ground", "Those drawn on the state's maps"], correctIndex: 2, explanation: "The lines run and corners marked on the ground \"shall be considered to be the lines and corners of the parcels so identified\" (sec. 1-20(n)).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "What did the Act of 1800 make the foremost and dispositive boundary evidence?", options: ["The bearings in the field notes", "The actual marks on the ground", "The acreage stated on the plat", "The price paid by the buyer"], correctIndex: 1, explanation: "\"A hierarchy of boundary evidence, the foremost and dispositive of which were the actual marks on the ground\" (sec. 1-20(n)).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "What does the Act of February 11, 1805 do with corners marked in the original survey?", options: ["Moves them to match the theoretical grid", "Replaces them with stone monuments later", "Leaves them for each buyer to relocate", "Fixes them in position regardless of errors"], correctIndex: 3, explanation: "It \"fixes the corners marked (monumented) in position regardless of any errors\" (sec. 1-20(n)).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "Where does the 1805 Act place quarter-section corners not marked in the original survey?", options: ["At the buyer's own choosing", "At the midpoint and on line", "At the nearest stream crossing", "At one-third of the distance"], correctIndex: 1, explanation: "Such corners \"shall be established at midpoint and on line\" (sec. 1-20(n)).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "Under the 1805 Act, how many acres is a quarter of a full 640-acre section?", options: ["120 acres", "200 acres", "180 acres", "160 acres"], correctIndex: 3, explanation: "\"A half-section or quarter-section of a full 640-acre section contains 320 or 160 acres, respectively\" (sec. 1-20(n)).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "What did Jared Mansfield insist about quarter sections, according to White?", options: ["A 640-acre section's quarter held 160 acres despite errors", "Every quarter must be remeasured before it could be sold", "Quarters should be sold by their measured, not plat, area", "Quarters could be sold only after a solar compass check"], correctIndex: 0, explanation: "He \"insisted that if his plats returned 640 acres in a section, then a quarter-section contained 160 acres regardless of what errors were found\" (White, p. 49).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "What happened to Mansfield's view, according to White?", options: ["Congress rejected it", "Courts overturned it", "It soon became law", "It was never written"], correctIndex: 2, explanation: "\"Mansfield was so firm in this stand that his views soon became law\" (White, p. 49).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "How does Manual sec. 3-4 describe original corners?", options: ["True corners, even if not where care would place them", "Rough guides, to be corrected by every new survey", "Temporary marks, replaced when the land was sold", "Advisory points, below the plat's measurements"], correctIndex: 0, explanation: "\"The original corners shall stand as the true corners they were intended to represent, even though not exactly where professional care might have placed them\" (sec. 3-4).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "What does Manual sec. 4-2 say about original corners?", options: ["They shall be moved when errors are found", "They shall be reset every fifty years", "They shall forever remain fixed in position", "They shall expire when the land is resold"], correctIndex: 2, explanation: "\"The corners marked during the process of an original survey shall forever remain fixed in position\" (sec. 4-2).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "Which common-law rule does the Manual say sec. 7-5 restates?", options: ["Measurements control over monuments", "Monuments control over measurements", "The newest survey always controls", "The larger acreage always controls"], correctIndex: 1, explanation: "\"The common law hierarchy of calls for monuments as controlling over calls for measurements\" (sec. 7-5).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "In a description, which of these is a call for a monument?", options: ["A distance of 40 chains", "A bearing of N 89° E", "An area of 160 acres", "A blazed tree at the corner"], correctIndex: 3, explanation: "A monument is a physical mark such as a corner, a stone or a blazed tree; bearings and distances are measurements.", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "When is a corner lost, according to the Manual?", options: ["When the stone or wooden post has rotted away", "When no substantial evidence shows its position", "When a county road has been paved over it", "When the present owner cannot find it alone"], correctIndex: 1, explanation: "Lost means its original position \"cannot be determined by substantial evidence, either from traces of the original marks or from acceptable evidence or reliable testimony\" (sec. 7-2).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "If substantial evidence of a corner's original position exists, what is the corner?", options: ["Lost, and restored by proportionate measurement", "Void, and the parcel must be surveyed again", "Moved, and the nearest fence becomes the line", "Existent or obliterated, and that position is used"], correctIndex: 3, explanation: "\"If substantial evidence of the position of the original corner exists, it is an existent or obliterated corner\" (sec. 7-2).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "How is a truly lost corner restored, according to the Manual?", options: ["By proportionate measurement", "By the owner's best memory", "By the nearest fence line", "By a fresh random survey"], correctIndex: 0, explanation: "\"The surveyor will restore the lost corner by applying proportionate measurement\" (sec. 7-1).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "Where must lost corners be reestablished?", options: ["In new and more accurate positions", "Where the current owners agree to put them", "In the identical positions they first held", "At the nearest point on a modern grid"], correctIndex: 2, explanation: "\"Lost corners must be reestablished in the identical positions they originally occupied\" (sec. 3-4).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "An original corner is found 30 feet from where the plat's distances put it. Which controls?", options: ["The corner as found", "The plat's distances", "A point halfway between", "The nearest fence post"], correctIndex: 0, explanation: "Original corners stand \"regardless of any errors\" (Act of 1805; secs. 3-4 and 4-2).", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "Why might your fence not be on your legal line?", options: ["Fences are always set a foot inside the line by law", "The county moves the line whenever land is resold", "Built later; the line runs between original corners", "The legal line follows the nearest road's centerline"], correctIndex: 2, explanation: "A fence was built later for its builder's reasons; the legal line runs between the original corners, wherever they stand.", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "Who can answer whether a particular fence sits on the legal line?", options: ["Any reader of this course's lessons", "Only a licensed surveyor's retracement", "The neighbor who built the fence", "The county's online parcel viewer"], correctIndex: 1, explanation: "Only a licensed surveyor's retracement can answer it; the course gives the reason the question exists.", sourceLessonSlug: "the-corners-are-the-law" },
          { prompt: "Why did Congress choose to hold the original corners rather than move them?", options: ["The chain was found to be exactly accurate after all", "No one could afford to buy a solar compass at all", "The Ordinance of 1785 had banned every resurvey", "Land had already been sold by the corners on the ground"], correctIndex: 3, explanation: "By 1800 corners stood on the ground away from the theory, and land had already been sold by them; the Acts of 1800 and 1805 held them.", sourceLessonSlug: "the-corners-are-the-law" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Metes and bounds, and the deed
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "metes-and-bounds-and-the-1775-deed",
      title: "7 · Metes and bounds, and a 1775 deed bounded in leagues along the Wabash",
      section: "2 · Metes and bounds, and the deed",
      recallContent: [
        {
          prompt: "Which common-law rule does the Manual say governs when a monument and a measurement disagree?",
          answer: "Calls for monuments control over calls for measurements (sec. 7-5).",
        },
        {
          prompt: "What did the Act of February 11, 1805 do with corners marked in the original survey?",
          answer: "Fixed them in position \"regardless of any errors\" (43 U.S.C. 752; Manual sec. 1-20(n)).",
        },
      ],
      body: `${QR(`${SURVEYOR}, to check the description of metes and bounds; and ${NATIVE_REVIEWER}, to read how the lesson presents the 1775 Piankeshaw deed, its signers, and the purchase the United States refused to recognize`)}

**Metes and bounds.** Before the grid, and alongside it ever since, land was described by walking its edge: a starting point, then a course (a direction) and a distance to the next point, and so on around until the description returns to the start. "Metes" are the measurements; "bounds" are the things the line runs along or to, such as a stream, a road, a neighbor's land or a marked tree. The Manual calls this the colonial practice "where lands were described by irregular metes-and-bounds" (sec. 1-18).

**It never went away.** Even inside the public-land states, the Manual says, "nonrectangular surveys, sometimes referred to as metes-and-bounds surveys, are required to define the boundaries of irregular areas of land that are not conformable to legal subdivisions": mineral claims, private land grants, townsites, Indian reservations, national parks and more (sec. 10-33). And a deed for a parcel that is not a whole legal subdivision can be written the same way; lesson 8 reads one.

**A deed from 1775.** George R. Wilson's 1916 article "The First Public Land Surveys in Indiana; Freeman's Lines," in the *Indiana Magazine of History*, reprints a deed in full. In 1775 Louis Viviat, a merchant of the Illinois country, acting for an association "denominated the 'Wabash Land Company,'" negotiated with the Piankeshaw for two large tracts along the Wabash, "and at Post Vincennes, October 18, 1775, he obtained a deed from eleven Piankeshaw chiefs" (pp. 1 to 2). The deed names them: Tabac, or Tobacco; Montour; La Grand Couette; Ouaouaijao; Tabac, junior; La Mouche Noire, or the Black Fly; Le Maringouin, or Musquito; Le Petit Castor, or the Little Beaver; Kiesquibichias; Grelot, senior; and Grelot, junior.

**Read its bounds as a surveyor would.** The first tract, in the deed's own words (p. 4): "beginning at the mouth of a rivulet called Riviere du Chat, or Cat River, where it empties itself into the Ouabache river aforesaid, being about fifty-two leagues distant from the above Post St. Vincent aforesaid; thence down the Ouabache, by the several courses thereof, to a place called Point Coupee, ... being forty leagues, or thereabouts, in length on the said river Ouabache, from the place of beginning, with forty leagues in width or breadth on the east side, and thirty leagues in breadth or width on the west side." Take it apart:
- **Point of beginning:** a natural monument, a river mouth.
- **Course:** "down the Ouabache, by the several courses thereof," so the river itself is the line.
- **Distance:** "forty leagues, or thereabouts."
- **Widths:** forty leagues east, thirty west, with no stated direction.
A second tract ran from the mouth of the White River down the Wabash to the Ohio. Between them, "the intermediate space of twenty-four leagues, or thereabouts, between Point Coupee and the mouth of the White river," was "reserved for the use of the inhabitants of Post St. Vincent." That **exception** matters in lesson 10: it became the Vincennes Tract.

**What a league was.** Wilson tried to pin the unit down and could not: "A marine league, in England and America is 18,240 feet, or almost 3½ miles"; "the common league of France was 2.422 miles"; "a land league is sometimes said to be three statute miles. ... so it appears very indefinite" (pp. 7 to 8). When Freeman finally ran the line, "twenty-four leagues along the meanderings of the Wabash proved to be 40 miles when run south 12 degrees west from the Orleans corner" (p. 8). A description whose unit is uncertain is uncertain everywhere.

**The price, and what became of it.** The consideration was "five shillings" and goods "for the use of the several tribes": among them "four hundred blankets, twenty-two pieces of stroud, two hundred and fifty shirts," "ten thousand gunflints, six hundred pounds of gunpowder, two thousand pounds of lead," flour, salt, horses and silverware (p. 3). Wilson reckons the deed "conveyed to the purchasers about 37,497,600 acres" (p. 6). The company asked Congress to confirm part of its claim "in the years 1781, 1791, 1797, 1804 and 1810; but all of these applications were rejected" (p. 7). "The American government did not recognize the title, as held by the French and the Wabash Land Company, as sufficient, and proceeded to recognize the claims of the Indians," buying the land from them directly (p. 8). This is the private purchase that lesson 3's Ordinance was written to shut out.

**What this source cannot tell you.** The deed is the purchasers' document, written in their language and their law, and reprinted by a surveyor-historian a century and a half later. It records eleven names and a list of goods. It does not record how the Piankeshaw council understood what it was agreeing to. Read it as evidence of what the buyers wrote down, which is a narrower thing.

:::reveal In the 1775 deed's first tract, what is the point of beginning, and what kind of monument is it? ||| The mouth of the Riviere du Chat, or Cat River, where it enters the Wabash: a natural monument.

:::reveal Why does Wilson call the league "very indefinite"? ||| It had several values: an English or American marine league of 18,240 feet, a French common league of 2.422 miles, and a land league sometimes said to be three miles.

## Sources
- ${WILSON} Locator: pp. 1 to 4, the deed of October 18, 1775 (the bounds on p. 4); pp. 6 to 8, the acreage, the rejected applications, and the league. ${TIER_A_1916}
- ${MANUAL} Locator: sec. 1-18, p. 7 (PDF p. 18); sec. 10-33, p. 336 (PDF p. 347). ${TIER_A}`,
    },
    {
      slug: "reading-a-deed-description",
      title: "8 · Reading a deed description: what controls, rerunning an old deed, and lot and block",
      section: "2 · Metes and bounds, and the deed",
      recallContent: [
        {
          prompt: "What did Wilson find when he tried to fix the length of a league?",
          answer: "Several values: a marine league of 18,240 feet, a French common league of 2.422 miles, a land league sometimes said to be three miles. \"It appears very indefinite.\"",
        },
        {
          prompt: "What happened to the Wabash Land Company's requests that Congress confirm its 1775 purchase?",
          answer: "Every one, in 1781, 1791, 1797, 1804 and 1810, was rejected (Wilson, p. 7).",
        },
      ],
      body: `${QR(`${SURVEYOR}, to check the 1912 rules of deed interpretation as this lesson states them, and to say where today's practice differs`)}

**The shape of a deed description.** Breed and Hosmer's 1912 textbook says the written description recorded in a deed "should be given by bearings (or angles) and distances, stating in every case how the sides of the property are marked and whether bounded by a highway, stream, or private property" (sec. 150). Their sample deed, for a small parcel in Maine, has every part you will meet in a real one. It names private people, so this course describes it rather than quoting it:
1. A **point of beginning**, tied to something findable: a point in the line of a named road, at an iron pipe sunk in the ground.
2. **Courses**, each a bearing and a distance, such as "N 85° 34' E" for a stated number of feet, written in words and in figures.
3. **Monuments and bounds** along the way: the thread of a brook's channel, the middle of a stone wall, a fence, another iron pipe, and the adjoining owners' land.
4. A **close**: the last course runs "to the point of beginning."
5. A **basis of bearing**: "all the bearings being magnetic."
6. An **area**: "a calculated area of 79,305 square feet more or less."

They add a warning: "It is unfortunate that the description of the property in deeds in the vast majority of cases, does not define the property in such a manner that it can be plotted from the description" (sec. 150).

**What controls when the parts disagree.** Breed and Hosmer set out the rules of interpretation as the courts of their day applied them (sec. 151). Read them as the principles of 1912, not as advice about your deed:
- "It is distinctly his duty to find the position of the original boundaries of the property and not attempt to correct the original survey even though he may be sure that an error exists in it."
- "Where artificial features are mentioned as boundaries, these always take precedence over the recorded measurements or angles, but these marks must be mentioned in the deed in order to have the force or authority of monuments."
- "When the area does not agree with the boundaries as described in the deed the boundaries control."
- "It is assumed that it was intended to convey property the boundaries of which will form a closed traverse," so a surveyor may "reject any evident mistake," such as a bearing written backward or a side left out.
- In a dispute between neighbors, "the surveyor acts simply as an expert in judging where the line originally ran and has no power to establish a new line."
That is lesson 6's rule again, at the scale of a backyard: monuments first, measurements second, area last.

**Rerunning an old deed** (sec. 152). "The visible marks which are mentioned in a deed are of primary importance ... the lengths of the sides and the bearings (or angles) ... are of secondary importance." When the marks are gone, the surveyor falls back on the record. If the bearings are magnetic, "it is necessary first to find the declination of the needle at the date of the original survey as well as the present declination of the needle and to correct all the bearings accordingly." Better still, if one original line can be found on the ground, "a bearing taken on this line and compared with that given in the deed will determine directly the change in declination." The companion course's lesson 9 works this arithmetic. And if the old traverse does not close by a little, the chain may be to blame: measure a known line and compare it with the record before running anything (p. 120).

**Lot and block.** Inside towns, land is usually described by a recorded plat instead: a named subdivision, a block number and a lot number. The *Specifications* note that "lot" has two meanings: a government lot in an irregular section (lesson 5), and "the name given individual parcels of recorded subdivision of private tracts, i.e., lot and block subdivisions" (p. 9, note 14). Breed and Hosmer: "When a deed refers to a plan the dimensions on this plan become a part of the description of the property" (sec. 151). So "Lot 7, Block 3" means nothing without the recorded plat it points to, which the county recorder keeps.

**Where deeds are kept.** "The transfer of real property must be recorded," Breed and Hosmer wrote, and the registry indexes deeds by **grantor** (seller) and **grantee** (buyer) (sec. 153). In Indiana, the State Archives explains that after the first sale from the public domain, "all subsequent transactions and plat maps are held by the recorders in the individual counties of Indiana" (lesson 12).

**Practice.** Choose a public building in your county, such as the courthouse, a library or a public school, and find its recorded legal description through your county's public parcel records. Decide which system it uses (grid, metes and bounds, or lot and block), and label its parts with this lesson's list. Never practice on a private home.

:::reveal A deed's courses add up to 2.1 acres, but it says "containing 2.5 acres, more or less." Under Breed and Hosmer's rules, which controls? ||| The boundaries. "When the area does not agree with the boundaries as described in the deed the boundaries control."

:::reveal What must a fence or wall have to count as a monument in a deed, according to Breed and Hosmer? ||| It must be mentioned in the deed: "these marks must be mentioned in the deed in order to have the force or authority of monuments."

## Sources
- ${BH} Locator: secs. 150 to 152, pp. 115 to 120 (scan pp. 141 to 146); sec. 153, p. 120 (scan p. 146). ${TIER_A_PD}
- ${SPECS} Locator: p. 9 (PDF p. 15), note 14, the definition of "lot". ${TIER_A}
- ${IARA} Locator: the paragraph on county recorders. ${TIER_B}`,
    },
  ],
};
