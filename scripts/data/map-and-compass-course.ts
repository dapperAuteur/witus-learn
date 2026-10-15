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
// Lesson 3's places (Tier B, linked only), read 2026-10-14.
const FH_MAP =
  "Indiana Department of Natural Resources. (2026, January). *Fort Harrison State Park* [Property and trail map]. https://www.in.gov/dnr/state-parks/files/ftharrison_trail.pdf";
const MMSF_PAGE =
  "Indiana Department of Natural Resources. (n.d.-a). *Morgan-Monroe State Forest*. https://www.in.gov/dnr/forestry/properties/morgan-monroe-state-forest/";
const MMSF_MAP =
  "Indiana Department of Natural Resources. (2021a, August). *Morgan-Monroe State Forest* [Property map]. https://www.in.gov/dA/7ac22c7c01/fo-morgan-monroe-map.pdf";
const MMSF_ORIENT =
  "Indiana Department of Natural Resources. (2013, May). *Pathfinder Trail orienteering course* [Brochure; first developed May 1997 with the Environmental Club of Bloomington South High School]. https://www.in.gov/dA/e4de3d4b52/fo-MorganMonroeOrienteeringMap.pdf";
const YSF_PAGE =
  "Indiana Department of Natural Resources. (n.d.-b). *Yellowwood State Forest*. https://www.in.gov/dnr/forestry/properties/yellowwood-state-forest/";
const YSF_MAP =
  "Indiana Department of Natural Resources. (2021b, September). *Yellowwood State Forest* [Property map]. https://www.in.gov/dA/1ccf866ece/fo-Yellowwood_map.pdf";
const DNR_SP_RULES =
  "Indiana Department of Natural Resources. (n.d.-c). *Rules & regulations* [State parks]. https://www.in.gov/dnr/state-parks/property-rules-and-regulations";
const DEAM =
  "USDA Forest Service. (n.d.). *Charles C. Deam Wilderness*. Hoosier National Forest. https://www.fs.usda.gov/r09/hoosier/recreation/charles-c-deam-wilderness";
// The four US Topo sheets (Tier A, federal, public domain), as downloaded from The National Map.
const USTOPO_INDY_EAST =
  "U.S. Geological Survey. (2022a). *Indianapolis East quadrangle, Indiana* [US Topo 7.5-minute map, 1:24,000; dated 2022-10-14]. https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/USTopo/PDF/IN/IN_Indianapolis_East_20221014_TM_geo.pdf";
const USTOPO_HINDUSTAN =
  "U.S. Geological Survey. (2022b). *Hindustan quadrangle, Indiana* [US Topo 7.5-minute map, 1:24,000; dated 2022-10-05]. https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/USTopo/PDF/IN/IN_Hindustan_20221005_TM_geo.pdf";
const USTOPO_BELMONT =
  "U.S. Geological Survey. (2022c). *Belmont quadrangle, Indiana* [US Topo 7.5-minute map, 1:24,000; dated 2022-10-14]. https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/USTopo/PDF/IN/IN_Belmont_20221014_TM_geo.pdf";
const USTOPO_ELKINSVILLE =
  "U.S. Geological Survey. (2022d). *Elkinsville quadrangle, Indiana* [US Topo 7.5-minute map, 1:24,000; dated 2022-10-05]. https://prd-tnm.s3.amazonaws.com/StagedProducts/Maps/USTopo/PDF/IN/IN_Elkinsville_20221005_TM_geo.pdf";
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
    {
      slug: "the-kit",
      title: "2 · The kit, and getting it cheaply",
      section: "1 · Before you set out",
      recallContent: [
        {
          prompt: "What does the National Park Service say about a physical map?",
          answer: "\"Bring a physical map as a back up.\" It also says to know how to use a topographical map, compass or GPS unit before going out.",
        },
        {
          prompt: "Why does this course quote the 2001 Army manual and never its later editions?",
          answer: "The 2001 edition is \"Approved for public release; distribution is unlimited.\" The 2005 and 2013 editions carry distribution restrictions.",
        },
      ],
      body: `${P("BAM lays out his own kit on camera, item by item: a baseplate compass with a declination adjustment, a lensatic compass for comparison, a printed US Topo quad, a ruler and protractor, a pencil, a watch, and a phone or GPS receiver with a spare battery")}

**The workbook's list.** The wildland fire workbook tells its readers what they need for its exercises: "Compass with adjustment for magnetic declination", "Clinometer", "Calculator", "Engineer's ruler", "Protractor", "Dot grid" and "UTM grid reader". It also says to have "a U.S. Geological Survey (USGS) color topographic map to use as a reference." This course needs less than that. A clinometer measures slope and a dot grid measures area, and neither is required here.

**What this course uses.**
- **A topographic map of ground you can walk.** The US Geological Survey gives its current maps away as free downloads, and lesson 4 shows how to get yours. Print it at full size and then check the printed bar scale against a ruler, because a printer that shrinks the page shrinks every distance on it.
- **A baseplate compass.** The workbook teaches this kind "because it is a common, inexpensive, and easy to use compass that does not require batteries." Lesson 14 lists the features worth paying for, the declination adjustment above all, and why a lensatic compass is the other common choice.
- **A ruler and a protractor.** The workbook's Appendix C prints a protractor, an engineer's ruler and a UTM grid reader as templates, with the instruction "Copy on clear plastic sheets. Make sure scale does not change during photocopying." Many baseplate compasses carry a ruler and scales on the plate itself.
- **A pencil and something to write on.** Appendix C also prints a field-notes form. Lesson 26 turns your plan into a route card, and lesson 28 shows why the log matters.
- **A watch.** For time on each leg, and for the watch method of finding direction in lesson 25, which comes with its own warning.
- **A phone or GPS receiver, with a spare battery.** The Park Service says "Pack an extra battery for your phone." The Hoosier National Forest's checklist for the Deam Wilderness says to "Have a map", adding that paper is best and that "digital works if you have signal and plenty of battery power."

**What it does not replace.** Navigation is one of the Park Service's ten categories, not all of them. The same list asks for a light, "Headlamps are the recommended light source because they are hands-free", along with first aid, water, food, extra clothing and shelter. Lesson 30, on night navigation, assumes you carry a light and spare batteries.

**Getting it cheaply.** The map is free to download. The templates are free to print. The baseplate compass is the inexpensive kind on purpose. This course names no brands and quotes no prices: lesson 14 tells you what to look for, so you can judge any compass yourself.

:::reveal Which compass feature heads the wildland fire workbook's list of materials? ||| "Compass with adjustment for magnetic declination".

:::reveal What should you check after printing a map or a template? ||| That the scale has not changed: measure the printed bar scale against a ruler. The workbook says "Make sure scale does not change during photocopying."

## Sources
- ${NWCG_475} Locator: p. ix, "Introduction", the list of materials; p. 81, chapter 4 introduction; p. 169, Appendix C templates; p. 171, the field-notes form.
- ${NPS_TEN} Locator: "Navigation" and "Illumination".
- ${DEAM} Locator: "Pre-Trip Check List".`,
    },
    {
      slug: "where-to-practice-near-indianapolis",
      title: "3 · Where to practice near Indianapolis",
      section: "1 · Before you set out",
      recallContent: [
        {
          prompt: "Which compass does the wildland fire workbook teach, and why?",
          answer: "The baseplate compass, \"because it is a common, inexpensive, and easy to use compass that does not require batteries.\"",
        },
        {
          prompt: "What should you check after printing a map or a template?",
          answer: "That the scale has not changed: measure the printed bar scale against a ruler.",
        },
      ],
      body: `**Scout the ground first, and read its rules.** The Army manual puts this before any training: "Unit leaders must complete a thorough terrain reconnaissance before using an area for land navigation training. They should look for dangerous terrain, heavy trafficked roads, water obstacles, wildlife, and training debris." A civilian has one more thing to check: whether the land's manager allows what you mean to do. Off-trail walking, being out after dark and filming are each allowed in some places and not in others.

**Four places, nearest first.** Each is public land on a free US Topo map (lesson 4), and the rules below are quoted from each manager's own page or map as read on 14 October 2026. Rules change, so read them again before you go.

**1. Fort Harrison State Park, northeast Indianapolis.** Map: the INDIANAPOLIS EAST quad, dated 2022-10-14, contour interval 5 feet. The park's trail map says "PLEASE STAY ON MARKED TRAILS." and lists two nature preserves, Chinquapin and Bluffs of Fall Creek, each "Closed to the public." Use it for the skills that work on a trail: reading the map against the ground, pace counts on a measured stretch, and taking bearings to landmarks. It is not the place to leave the trail, and it has no campground for a night walk.

**2. Morgan-Monroe State Forest, Morgan and Monroe counties.** Map: HINDUSTAN, dated 2022-10-05, contour interval 10 feet. Its trail map also says "PLEASE STAY ON MARKED TRAILS." The forest built the Pathfinder Trail Orienteering Course, "a 'compass course', set up for you to practice following bearings and counting pace", but the forest's page lists it as closed after the EF-2 tornado of June 18, 2026, with no reopening date given. After dark is possible only as a registered backcountry camper: "All campers must register", groups are limited to "family units or groups not exceeding six persons", "No campsite may be established within ¼ mile of access points", and "Use of the area is restricted to a maximum of three nights". In hunting season, "Hikers are advised to wear hunter orange or other bright clothing while on trails".

**3. Yellowwood State Forest, Brown County.** Map: BELMONT, dated 2022-10-14, contour interval 10 feet. "PLEASE STAY ON MARKED TRAILS." again, and part of the Tecumseh Trail is closed "until further notice". The two sources disagree about camping along the Tecumseh Trail: the forest's web page allows dispersed camping at least "¼ mile away from all roads, recreation areas, and trailheads, and a minimum of 100 feet from the trail", while the property map says "Camping in designated areas is allowed along this trail." Ask the forest office which rule governs before you plan a night there.

**4. Charles C. Deam Wilderness, Hoosier National Forest.** Map: ELKINSVILLE, dated 2022-10-05. This is the one site of the four whose posted rules expect you off the trail and out after dark. Its restrictions confine horse riders to designated trails and say nothing of the kind for walkers, and "Camping is prohibited within 200 feet of trails, trailheads, roads, water sources, rock shelters, caves, and historic structures, unless in a Forest Service designated campsite." "Group size is limited to 10 persons or less." "Geocaching is prohibited." Drones may not launch or land. And the page warns: "Please get a map before visiting this area, as the boundaries are not clearly marked." Lessons 30 and 31 point here.

**Groups, events and cameras.** The Indiana DNR says a special events permit is required by 312 IAC 8-2-15 "if an individual, business or other group wishes to host an event such as a public meeting, parade, contest, competition, sporting activity or other special event or activity on a DNR property." An orienteering meet you organize is that kind of event. The DNR's rules page also links a "Commercial Film and Photography Agreement Form"; before BAM films a demonstration on DNR land, he asks the property whether his filming needs one.

:::reveal Of the four sites, which one's posted rules expect walkers off the trail and out after dark? ||| The Charles C. Deam Wilderness in the Hoosier National Forest.

:::reveal Why can you not practice on Morgan-Monroe's Pathfinder orienteering course right now? ||| The forest lists it as closed after the EF-2 tornado of June 18, 2026, with no reopening date given.

## Sources
- ${FM_2001} Locator: printed p. 1-2 (PDF p. 8), paragraph 1-3.
- ${FH_MAP} Locator: "Nature Preserves" panel and the "Please stay on marked trails" note. Linked only.
- ${MMSF_PAGE} Locator: the tornado notice at the top; "Camping", backcountry paragraph; "Hunting"; "Hiking Trails", Pathfinder Orienteering Trail. Linked only.
- ${MMSF_MAP} Locator: "Please stay on marked trails" note. Linked only.
- ${MMSF_ORIENT} Locator: "Pathfinder Trail Orienteering Course", first panel. Linked only.
- ${YSF_PAGE} Locator: the Tecumseh Trail closure notice; "Hiking Trails", Tecumseh Trail. Linked only.
- ${YSF_MAP} Locator: the Tecumseh Trail entry and the "Please stay on marked trails" note. Linked only.
- ${DEAM} Locator: "Restrictions"; "Directions".
- ${DNR_SP_RULES} Locator: the page's list of rule topics; "Special Events". Linked only.
- ${USTOPO_INDY_EAST} Locator: lower margin, contour interval note.
- ${USTOPO_HINDUSTAN} Locator: lower margin, contour interval note.
- ${USTOPO_BELMONT} Locator: lower margin, contour interval note.
- ${USTOPO_ELKINSVILLE} Locator: lower margin, quad name and date.`,
    },
  ],
};
