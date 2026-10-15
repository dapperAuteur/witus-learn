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

**Whose land it was.** The Ordinance's own first sentence names what it was dividing: "the territory ceded by individual states to the United States, which had been purchased of the Indian inhabitants" (White, p. 11). The grid was laid over land that Native nations had ceded, by treaty and under pressure, and in Indiana the surveys followed the cessions one by one. This course treats that as part of the record, not a preface to it. Lessons 3, 7 and 10 read those documents closely and carry a Native reviewer's read before the course is released. For the treaties themselves, the catalog's course *Tribal Nations and Indigenous Governance* teaches how to read one.

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
  ],
};
