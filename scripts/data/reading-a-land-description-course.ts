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
  ],
};
