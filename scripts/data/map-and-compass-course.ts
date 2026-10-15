import type { AuthoredCourse } from "./authored-course";

// "Map and Compass: Finding Your Way on Land" (Survival, also listed in Rivers & Expeditions).
// Slug `map-and-compass`. Series `tools-that-think` ("Tools That Think"), code TOOLS, position 01;
// TOOLS-02 is the slide rule and TOOLS-03 and 04 the surveying pair (each on its own branch).
//
// RESEARCH TIER 2 (docs/course-method/README.md): a wrong bearing or a wrong declination sign can
// strand a person, so safety sends the course to Tier 2 whatever its score.
// Brief:   plans/future-courses/science-and-math/tool-usage/2026-10-14-map-and-compass-brief.md
//          (approved by BAM 2026-10-14; his answers are at its end: QR reviewer not yet named; recommend
//          US Topo quads near Indianapolis; add a lesson on what compass features to look for, with no
//          brands; full standards mapping; night navigation and difficult terrain IN; title and series
//          as here; his three books are Tier C, a read-alongside list only).
// Handoff: plans/future-courses/science-and-math/tool-usage/handoff-2026-10-14.md, "Map and compass"
//          (outline, verified page locators, the four recommended quads and their rules, standards).
//          Only the brief's VERIFIED lines and the handoff's verified locators are asserted. DERIVED
//          lines appear with their working shown (lessons 7, 16, 17, 24). REPORTED and UNVERIFIED lines
//          are left out, or named in the lesson as open questions with a research check filed.
//
// VISIBILITY: PUBLIC and FREE, and HELD ("Coming soon") until a NAMED qualified reviewer (a
// search-and-rescue member, or a wilderness or land-navigation instructor) has read every lesson
// marked QR, and until BAM has recorded the demonstrations marked P. The publishHoldReason in
// scripts/seed-courses.ts says so. No reviewer is named yet (brief question 1).
//
// WHAT IT IS NOT, stated in the description and in lesson 1: a search-and-rescue course, wilderness
// first aid, or a safety qualification.
//
// THE SOURCE DECISION (brief section 1 and gate A4). The backbone is the Army's FM 3-25.26 of 20 July
// 2001 ("Approved for public release; distribution is unlimited", cover and p. i), read beside the
// NWCG's Basic Land Navigation, PMS 475 (May 2016, public domain, p. iii). NEVER quoted, hosted or
// linked: TC 3-25.26 (2013) and FM 3-25.26 (2005), whose own covers restrict distribution (brief V1 to
// V3). They are named in lesson 1 only to say why they are not used. No compass maker's manual and no
// commercial land-navigation book is reproduced or paraphrased. BAM's three books are listed in lesson
// 36 by title, author, edition and publisher only (Tier C).
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (qualified reviewer): 17, 19, 27, 28, 29, 30, 31, 33.
//     The brief marks 3.4, 3.6, 5.2, 5.3, 5.4 and 6.2 (here 17, 19, 27, 28, 29, 33). Added: 30 night
//     navigation and 31 difficult terrain, both brought IN by BAM's answer 5.
//   P (BAM's demonstration on video): 2, 4, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 28, 34, 36.
//   Unmarked: 1, 3, 5 to 12, 16, 26, 32, 35.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted on Cloudinary later: FM 3-25.26 (2001), a federal work approved for public
//    release (prefer a .mil, .gov or Wayback copy of the 2001 printing for the upload, and re-derive
//    #page=N from whatever copy is hosted); NWCG PMS 475 (public domain; credit NWCG, never its logo);
//    USGS Fact Sheet 035-01, the USGS symbol sheets and US Topo maps (federal, public domain); the USGS,
//    NCEI, GPS.gov, NPS and FGDC web pages (federal, linked).
//  - Tier B, link only, never rehost: the Indiana DNR and Hoosier National Forest pages and property
//    maps read for lesson 3, and the Pathfinder Trail orienteering brochure (state works; "it opened
//    freely" is not a licence).
//  - Tier C, cite only: BAM's three books (lesson 36).
//  - FIGURES: none embedded (a :::figure needs a hosted Cloudinary URL). Figures are described in words
//    and cited by number and page.
//
// LOCATORS. FM 3-25.26 (2001): the archive.org scan runs ahead of the printed pages by a fixed offset
// per chapter (ch. 1 +6, 3 +16, 4 +22, 5 +49, 6 +63, 9 +109, 10 +122, 11 +146, 13 +172, app. F +195),
// so every locator gives the printed page AND the PDF page. NWCG PMS 475: the printed page equals the
// PDF page (read from the Wayback copy of 2024-01-27, because nwcg.gov did not resolve).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts):
//  - L16, L17: the declination for 14 October 2026 at the four quads is this course's own WMM2025
//    computation (about 4°47' W at Hindustan), to be confirmed on NCEI's calculator.
//  - L3: Indiana DNR day-visitor hours (312 IAC 8-2) could not be read here.
//  - L3: Yellowwood's web page allows dispersed camping along the Tecumseh Trail while its property map
//    says "Camping in designated areas"; which rule governs is unsettled.
//  - L3: the Pathfinder Trail orienteering course at Morgan-Monroe is closed after the 18 June 2026
//    tornado; no reopening date is published.
//  - L1, L23: whether NWCG's announced revision of PMS 475 changes anything this course uses.
//
// STANDARDS (src/lib/standards/): CCSS 4.MD.C.6 (partial), 4.MD.C.7, 5.G.A.2, 7.G.A.1 (partial) and
// HSN-Q.A.3 through the shared Common Core math file; Indiana 5.CA.11 and 7.GM.1 (partial) through a
// new Indiana mathematics framework. NGSS 4-ESS2-2 is NOT claimed: its text has not been confirmed for
// every adopting state. See the claims for which lessons carry each.
//
// House style, matching stage-and-broadcast-rigging-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the lesson
// before; an APA 7 `## Sources` block on every teaching lesson with a locator on every entry; a quiz
// per section pooled to round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled; a final
// pooling 40+ and serving 10, placed last. Every question's four options sit within eight characters of
// each other, so no length strategy can beat chance, and correctIndex rotates. American spelling in
// prose; quotations keep their own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const FM_2001 =
  "Headquarters, Department of the Army. (2001, July 20). *Map reading and land navigation* (FM 3-25.26). Superseded; \"Approved for public release; distribution is unlimited.\" https://archive.org/details/milmanual-fm-3-25.26-map-reading-and-land-navigation";
const NWCG_475 =
  "National Wildfire Coordinating Group. (2016, May). *Basic land navigation* (PMS 475, NFES 002865). https://www.nwcg.gov/sites/default/files/publications/pms475.pdf (archived copy read: https://web.archive.org/web/20240127171515/https://www.nwcg.gov/sites/default/files/publications/pms475.pdf)";
const NPS_TEN =
  "National Park Service. (2026, May 28). *Ten essentials*. U.S. Department of the Interior. https://www.nps.gov/articles/10essentials.htm";

/** The marker every lesson needing a qualified reviewer opens with (BAM, 2026-10-14). */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;
/** The marker every lesson needing BAM's demonstration on video opens with. */
const P = (what: string) => `> **Before release:** needs a practitioner or BAM's demonstration: ${what}.`;

export const MAP_AND_COMPASS_COURSE: AuthoredCourse = {
  title: "Map and Compass: Finding Your Way on Land",
  description:
    "Learn to find your way on land with a printed topographic map and a baseplate compass, and to say what a GPS adds to each step. The course reads the map's margin, scale, symbols and contour lines until you can picture the ground and measure distance and height on it; says where a place is in latitude and longitude and in the UTM grid, and how precise each grid reference is; takes and follows a bearing and corrects for magnetic declination in either direction without a sign error; finds your position from landmarks, a pace count and the shape of the land; plans a route on paper, including at night and on difficult ground; and ends with how GPS finds you, where it fails, and how to put its fix on the paper map. It is built from two public documents read side by side, the Army's 2001 field manual and the National Wildfire Coordinating Group's land navigation workbook, and it says plainly where they disagree. One lesson names places near Indianapolis to practice and the rules that apply at each. It is not a search-and-rescue course, wilderness first aid, or a safety qualification, and every lesson that needs a qualified reviewer or a demonstration says so at the top. The first course in the Tools That Think series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: Before you set out
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-this-course-teaches",
      title: "1 · What this course teaches, and what it does not",
      section: "1 · Before you set out",
      body: `**What you will be able to do.** By the end you should be able to do five things with a printed topographic map and a baseplate compass. Read the map well enough to picture the ground and to measure a distance and a height on it. Say where a place is, in latitude and longitude and in UTM grid coordinates. Take and follow a bearing, correcting for magnetic declination without a sign error. Find yourself on the map from landmarks, a pace count and the shape of the land. Plan and walk a route, and know what to do when the map and the ground stop agreeing. The course ends with GPS: how a receiver finds you, where it fails, and how to put its fix on the paper map.

**Why paper, still.** The National Park Service's list of Ten Essentials puts navigation first, "Map, compass, and GPS system", and says: "Know how to use a topographical map, compass or GPS unit before going out. Bring a physical map as a back up." It adds: "Pack an extra battery for your phone." The wildland fire workbook this course leans on opens the same way: "Even with new technology, such as Global Positioning System (GPS) receivers, map and compass skills are still needed." The Army manual this course quotes most ends its paragraph on navigation methods with a warning that cuts both ways: "One should not depend entirely on compass navigation or map navigation; either or both could be lost or destroyed."

**What this course is not.** It is not a search-and-rescue course, not wilderness first aid, and not a safety qualification. The River Expedition course *Finding Your Way, and Losing It* says of itself, in its lesson "4 · Sources": "It is not navigation instruction and not a safety qualification." This course is the navigation instruction that course points away from, and it is not a safety qualification either. Navigation is learned by doing it, first on easy ground and close to help. Lesson 3 names places near Indianapolis where practice is allowed, and the rules at each.

**Where the course comes from.** Two public documents, read together. The first is the Army's field manual *Map Reading and Land Navigation*, FM 3-25.26, dated 20 July 2001, whose cover reads "Approved for public release; distribution is unlimited." It is superseded. The Army's later editions, the 2005 field manual and the current training circular TC 3-25.26 of 2013, carry distribution restrictions on their own covers, so this course does not use, quote or link them, whatever copies circulate online. When a lesson quotes the 2001 manual, it is quoting old doctrine, chosen because anyone may read it. The second is the National Wildfire Coordinating Group's *Basic Land Navigation*, PMS 475, May 2016, a civilian workbook whose own notice says its information "is in the public domain". It teaches the baseplate compass, which the 2001 manual does not.

**Where they disagree, you will be told.** The two documents use the same words differently. A "pace" is one step in the Army manual and two in the workbook. Finding your own position is "resection" in one and "triangulation" in the other. Lessons 22 and 23 teach both versions side by side. And every number that can go stale carries its date, because maps age, magnetic north moves and satellite counts change.

**How the lessons are marked.** A lesson that needs BAM's demonstration on video, or a qualified reviewer such as a search-and-rescue member or a land-navigation instructor, says so at the top, in a box that begins "Before release".

:::reveal What does the National Park Service tell you to bring as a back up to a phone or GPS? ||| "Bring a physical map as a back up."

:::reveal Why does this course quote the Army's 2001 manual and not its current edition? ||| The 2001 edition is "Approved for public release; distribution is unlimited." The later editions carry distribution restrictions, so the course does not use them.

## Sources
- ${NPS_TEN} Locator: "Navigation", the first of the ten categories.
- ${NWCG_475} Locator: p. iii, the public-domain notice; p. ix, "Introduction".
- ${FM_2001} Locator: cover (PDF p. 1); p. i (PDF p. 2); printed p. 11-18 (PDF p. 164), paragraph 11-6.`,
    },
  ],
};
