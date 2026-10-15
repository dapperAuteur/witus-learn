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
// USGS (Tier A, federal, public domain), read 2026-10-14.
const USGS_FS =
  "U.S. Geological Survey. (2001, March). *Finding your way with map and compass* (Fact Sheet 035-01). https://pubs.usgs.gov/fs/2001/0035/report.pdf";
const USGS_USTOPO =
  "U.S. Geological Survey. (n.d.-a). *US Topo: Maps for America*. National Geospatial Program. https://www.usgs.gov/programs/national-geospatial-program/us-topo-maps-america";
const USGS_OLDER =
  "U.S. Geological Survey. (n.d.-b). *Can I still get the older topographic maps?* [FAQ]. https://www.usgs.gov/faqs/can-i-still-get-older-topographic-maps";
const USGS_COPYRIGHT =
  "U.S. Geological Survey. (n.d.-c). *Are USGS topographic maps copyrighted?* [FAQ]. https://www.usgs.gov/faqs/are-usgs-topographic-maps-copyrighted";
const USGS_USTOPO_SYM =
  "U.S. Geological Survey. (2023, January 11). *US Topo map symbols* (ver. 7.7). https://www.usgs.gov/media/files/us-topo-map-symbols";
const USGS_GIP_SYM =
  "U.S. Geological Survey. (2005). *Topographic map symbols* [General Interest Publication]. https://pubs.usgs.gov/publication/70039164";
const USGS_UTM_MEASURED =
  "U.S. Geological Survey. (n.d.-d). *How are UTM coordinates measured on USGS topographic maps?* [FAQ]. https://www.usgs.gov/faqs/how-are-utm-coordinates-measured-usgs-topographic-maps";
const USGS_UTM_GRID =
  "U.S. Geological Survey. (n.d.-e). *Do all USGS 7.5 minute topographic maps show the UTM grid?* [FAQ]. https://www.usgs.gov/faqs/do-all-usgs-75-minute-topographic-maps-show-utm-grid";
const FGDC_USNG =
  "Federal Geographic Data Committee. (n.d.). *United States National Grid*. https://www.fgdc.gov/usng";
// GPS.gov (Tier A, federal), read 2026-10-14.
const GPS_ACCURACY = "GPS.gov. (n.d.-a). *GPS accuracy*. https://www.gps.gov/gps-accuracy";
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
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Before you set out",
      section: "1 · Before you set out",
      body: "A graded check on what this course teaches and where it comes from, the kit, and where to practice near Indianapolis. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which two tools does this course teach you to use together?", options: ["A topographic map and a baseplate compass", "A road atlas and a phone's compass app only", "A nautical chart and a ship's steering compass", "A star chart and a sextant for the noon sight"], correctIndex: 0, explanation: "Lesson 1: the course teaches five things to do \"with a printed topographic map and a baseplate compass\", and ends with what GPS adds.", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What does the course end with?", options: ["Orienteering competition rules and scoring", "GPS: how it finds you and where it fails", "Wilderness first aid for a lost walker", "Search-and-rescue tactics for a team lead"], correctIndex: 1, explanation: "\"The course ends with GPS: how a receiver finds you, where it fails, and how to put its fix on the paper map.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Which category comes first in the National Park Service's Ten Essentials?", options: ["Hydration", "Shelter", "Navigation", "Fire"], correctIndex: 2, explanation: "The NPS puts navigation first: \"Map, compass, and GPS system\".", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What does the National Park Service say to bring as a back up?", options: ["A second phone", "A satellite app", "A paper compass", "A physical map"], correctIndex: 3, explanation: "\"Bring a physical map as a back up.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What does the Park Service say to pack for your phone?", options: ["An extra battery", "A sturdy case", "A dry bag", "A spare SIM card"], correctIndex: 0, explanation: "\"Pack an extra battery for your phone.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "When does the Park Service say you should know how to use a map, compass or GPS?", options: ["Once you are lost", "Before going out", "After a park class", "On your second trip"], correctIndex: 1, explanation: "\"Know how to use a topographical map, compass or GPS unit before going out.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What does the wildland fire workbook say about map and compass skills, even with GPS?", options: ["They are now optional", "They are for experts", "They are still needed", "They replace the GPS"], correctIndex: 2, explanation: "\"Even with new technology, such as Global Positioning System (GPS) receivers, map and compass skills are still needed.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Why does the 2001 Army manual say not to depend entirely on compass or map navigation?", options: ["Both are slower than any GPS receiver is", "Each works only in daylight on open ground", "Neither is accurate to better than a mile", "Either or both could be lost or destroyed"], correctIndex: 3, explanation: "\"One should not depend entirely on compass navigation or map navigation; either or both could be lost or destroyed.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Which of these does lesson 1 say this course is NOT?", options: ["A safety qualification", "Navigation instruction", "A course on map reading", "A course on the compass"], correctIndex: 0, explanation: "\"It is not a search-and-rescue course, not wilderness first aid, and not a safety qualification.\" It is navigation instruction.", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What does the River Expedition course Finding Your Way, and Losing It say of itself?", options: ["It is a full navigation course", "It is not navigation instruction", "It is a safety qualification", "It is a search-and-rescue course"], correctIndex: 1, explanation: "Its lesson \"4 · Sources\" says: \"It is not navigation instruction and not a safety qualification.\" This course is the navigation instruction it points away from.", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "How does lesson 1 say navigation is learned?", options: ["By reading every manual twice first", "By watching videos until it sticks", "By doing it, on easy ground near help", "By passing this course's final quiz"], correctIndex: 2, explanation: "\"Navigation is learned by doing it, first on easy ground and close to help.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What is the date of the Army field manual this course quotes?", options: ["15 November 2013", "18 January 2005", "7 May 1993", "20 July 2001"], correctIndex: 3, explanation: "FM 3-25.26 is dated 20 July 2001. The 2005 field manual and the 2013 training circular are later editions; 7 May 1993 is the date of FM 21-26, which the 2001 manual superseded.", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What does the cover of the 2001 field manual say about its distribution?", options: ["Public release; distribution unlimited", "Government agencies and contractors only", "For official use only; destroy when done", "Military units only; no civilian copies"], correctIndex: 0, explanation: "The cover reads \"Approved for public release; distribution is unlimited.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Why does this course not use the Army's 2005 and 2013 editions?", options: ["They are out of print and unfindable", "Their covers restrict distribution", "They teach a different kind of map", "They contradict the 2001 edition"], correctIndex: 1, explanation: "The 2005 field manual and the 2013 training circular \"carry distribution restrictions on their own covers, so this course does not use, quote or link them, whatever copies circulate online.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Does a copy of TC 3-25.26 circulating online change whether this course may use it?", options: ["Yes; a public copy is fair game to use", "Yes, if the copy is a scan of the paper", "No; the cover restriction still holds", "No, but it may be quoted in a footnote"], correctIndex: 2, explanation: "The course does not use, quote or link the restricted editions \"whatever copies circulate online\".", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "When a lesson quotes the 2001 Army manual, what is it quoting?", options: ["The Army's current land navigation", "A civilian workbook for firefighters", "A commercial land-navigation book", "Superseded doctrine anyone may read"], correctIndex: 3, explanation: "\"When a lesson quotes the 2001 manual, it is quoting old doctrine, chosen because anyone may read it.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Who published Basic Land Navigation, PMS 475?", options: ["The National Wildfire Coordinating Group", "The U.S. Army's Training and Doctrine arm", "The U.S. Geological Survey's map program", "The National Park Service's ranger staff"], correctIndex: 0, explanation: "Basic Land Navigation, PMS 475 (May 2016), is the National Wildfire Coordinating Group's civilian workbook.", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What does PMS 475's own notice say about its information?", options: ["It is for NWCG staff only", "It is in the public domain", "It may not be photocopied", "It may be quoted for a fee"], correctIndex: 1, explanation: "Its notice says its information \"is in the public domain\".", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Which kind of compass does the workbook teach that the 2001 manual does not?", options: ["The lensatic compass", "The M2 artillery one", "The baseplate compass", "The electronic compass"], correctIndex: 2, explanation: "The workbook \"teaches the baseplate compass, which the 2001 manual does not.\" The 2001 manual teaches the lensatic compass.", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "How do the two backbone documents define a pace?", options: ["Both define a pace as one natural step", "Both define a pace as two natural steps", "Neither one defines a pace at all", "One step in one, two steps in the other"], correctIndex: 3, explanation: "\"A 'pace' is one step in the Army manual and two in the workbook.\" Lessons 22 and 23 teach both.", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What do the two documents call finding your own position?", options: ["Resection in one, triangulation in the other", "Intersection in both of the two documents", "Dead reckoning in one, orienting in the other", "Thumbing in one, handrailing in the other"], correctIndex: 0, explanation: "\"Finding your own position is 'resection' in one and 'triangulation' in the other.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Why does every number that can go stale carry a date in this course?", options: ["Dates make a lesson look more official", "Maps age and magnetic north moves", "The Army manual dates every number", "Learners are graded on the dates"], correctIndex: 1, explanation: "\"Every number that can go stale carries its date, because maps age, magnetic north moves and satellite counts change.\"", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "What does a box at the top beginning \"Before release\" mean?", options: ["It is optional reading for the final quiz", "It holds the graded quiz for its section", "It needs BAM's demo or a qualified reviewer", "It was written by an Army instructor"], correctIndex: 2, explanation: "A lesson that needs BAM's demonstration on video, or a qualified reviewer such as a search-and-rescue member or a land-navigation instructor, says so in that box.", sourceLessonSlug: "what-this-course-teaches" },
          { prompt: "Which item comes first in the workbook's list of materials for its exercises?", options: ["A clinometer for estimating the slope", "A calculator with trigonometry keys", "A dot grid for measuring map areas", "A compass with a declination adjustment"], correctIndex: 3, explanation: "The list begins \"Compass with adjustment for magnetic declination\", then \"Clinometer\", \"Calculator\", \"Engineer's ruler\", \"Protractor\", \"Dot grid\" and \"UTM grid reader\".", sourceLessonSlug: "the-kit" },
          { prompt: "Which kind of map does the workbook say to have beside you as a reference?", options: ["A USGS color topographic map", "A state highway road map", "A satellite photo printout", "A city street map of the area"], correctIndex: 0, explanation: "It says to have \"a U.S. Geological Survey (USGS) color topographic map to use as a reference.\"", sourceLessonSlug: "the-kit" },
          { prompt: "Why does this course not require the clinometer and the dot grid?", options: ["Both cost more than the compass", "It measures neither slope nor area", "Both need batteries to be used", "The workbook calls them optional"], correctIndex: 1, explanation: "\"A clinometer measures slope and a dot grid measures area, and neither is required here.\"", sourceLessonSlug: "the-kit" },
          { prompt: "Who gives away the current topographic maps this course uses?", options: ["The National Park Service", "The Indiana DNR's offices", "The U.S. Geological Survey", "The U.S. Army's map service"], correctIndex: 2, explanation: "\"The US Geological Survey gives its current maps away as free downloads, and lesson 4 shows how to get yours.\"", sourceLessonSlug: "the-kit" },
          { prompt: "Why check a printed map's bar scale against a ruler?", options: ["The bar scale is often printed in error", "The ruler on a compass is never accurate", "US Topo maps print at a different scale", "A printer that shrinks it shrinks distances"], correctIndex: 3, explanation: "\"Print it at full size and then check the printed bar scale against a ruler, because a printer that shrinks the page shrinks every distance on it.\"", sourceLessonSlug: "the-kit" },
          { prompt: "Why does the workbook teach the baseplate compass?", options: ["It is cheap, easy and needs no batteries", "It is the Army's standard field compass", "It is the most precise compass you can buy", "It is the only kind with a sighting mirror"], correctIndex: 0, explanation: "The workbook teaches it \"because it is a common, inexpensive, and easy to use compass that does not require batteries.\"", sourceLessonSlug: "the-kit" },
          { prompt: "Which compass feature does lesson 2 single out as worth paying for above all?", options: ["The sighting mirror on top", "The declination adjustment", "The luminous night markings", "The built-in clinometer"], correctIndex: 1, explanation: "Lesson 14 lists the features worth paying for, \"the declination adjustment above all\".", sourceLessonSlug: "the-kit" },
          { prompt: "Which templates does the workbook's Appendix C print?", options: ["Compass rose, route card, a pace-count chart", "Contour gauge, slope chart, a declination dial", "Protractor, engineer's ruler, UTM grid reader", "Star chart, sun table, a time-zone converter"], correctIndex: 2, explanation: "\"The workbook's Appendix C prints a protractor, an engineer's ruler and a UTM grid reader as templates.\"", sourceLessonSlug: "the-kit" },
          { prompt: "What does Appendix C say to print its templates on?", options: ["Heavy card stock paper", "Waterproof map paper", "Ordinary printer paper", "Clear plastic sheets"], correctIndex: 3, explanation: "\"Copy on clear plastic sheets. Make sure scale does not change during photocopying.\"", sourceLessonSlug: "the-kit" },
          { prompt: "Besides the templates, what else does Appendix C print?", options: ["A field-notes form", "A blank route card", "A pace-count chart", "A declination dial"], correctIndex: 0, explanation: "\"Appendix C also prints a field-notes form.\" Lesson 26 turns your plan into a route card.", sourceLessonSlug: "the-kit" },
          { prompt: "Which two uses does lesson 2 give for a watch?", options: ["Pace counting, and setting declination", "Time on each leg, and the watch method", "Measuring slope, and estimating height", "Reading UTM grids, and taking bearings"], correctIndex: 1, explanation: "\"A watch. For time on each leg, and for the watch method of finding direction in lesson 25, which comes with its own warning.\"", sourceLessonSlug: "the-kit" },
          { prompt: "What does the Deam Wilderness checklist say about a digital map?", options: ["It is banned inside the wilderness area", "It is better than paper in every respect", "It works with signal and plenty of battery", "It works only with a separate GPS unit"], correctIndex: 2, explanation: "The checklist says to \"Have a map\", that paper is best, and that \"digital works if you have signal and plenty of battery power.\"", sourceLessonSlug: "the-kit" },
          { prompt: "How does lesson 2 place navigation among the Ten Essentials?", options: ["The only category that really matters", "Optional for a short walk in a park", "A category the Park Service dropped", "One of ten categories, not all of them"], correctIndex: 3, explanation: "\"Navigation is one of the Park Service's ten categories, not all of them.\" The same list asks for a light, first aid, water, food, extra clothing and shelter.", sourceLessonSlug: "the-kit" },
          { prompt: "Why does the Park Service recommend a headlamp as your light?", options: ["Headlamps are hands-free", "Headlamps are the brightest", "Headlamps need no batteries", "Headlamps cost the least"], correctIndex: 0, explanation: "\"Headlamps are the recommended light source because they are hands-free.\"", sourceLessonSlug: "the-kit" },
          { prompt: "What does the night navigation lesson assume you carry?", options: ["A GPS receiver and a radio", "A light and spare batteries", "A lensatic compass only", "A second map in a dry bag"], correctIndex: 1, explanation: "\"Lesson 30, on night navigation, assumes you carry a light and spare batteries.\"", sourceLessonSlug: "the-kit" },
          { prompt: "Why does the course name no compass brands and quote no prices?", options: ["Because every brand is equally good to use", "Because prices are listed in the final quiz", "So you can judge any compass by its features", "Because the Army manual names the brands"], correctIndex: 2, explanation: "\"This course names no brands and quotes no prices: lesson 14 tells you what to look for, so you can judge any compass yourself.\"", sourceLessonSlug: "the-kit" },
          { prompt: "Which items of the kit does lesson 2 say cost nothing?", options: ["The compass and the watch", "The phone and its battery", "The ruler and the pencil", "The map and the templates"], correctIndex: 3, explanation: "\"The map is free to download. The templates are free to print. The baseplate compass is the inexpensive kind on purpose.\"", sourceLessonSlug: "the-kit" },
          { prompt: "What will BAM show on camera for lesson 2?", options: ["His own kit, laid out item by item", "A night walk in the Deam Wilderness", "How to repair a broken compass needle", "A tour of the USGS map download page"], correctIndex: 0, explanation: "The \"Before release\" box: BAM lays out his own kit on camera, item by item.", sourceLessonSlug: "the-kit" },
          { prompt: "According to the Army manual, what must leaders do before using an area for land navigation training?", options: ["A night march across the whole area", "A thorough terrain reconnaissance", "A written test of every soldier there", "A survey of the area's property lines"], correctIndex: 1, explanation: "\"Unit leaders must complete a thorough terrain reconnaissance before using an area for land navigation training.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which hazards does the Army manual say to look for in a training area?", options: ["Weather, insects, noise, fences, signs", "Crowds, traffic, dogs, cyclists, rain", "Terrain, roads, water, wildlife, debris", "Cliffs, caves, snow, ice, and darkness"], correctIndex: 2, explanation: "\"They should look for dangerous terrain, heavy trafficked roads, water obstacles, wildlife, and training debris.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What extra thing does lesson 3 say a civilian must check about a practice area?", options: ["Whether the Army has trained there before", "Whether it has a printed orienteering map", "Whether its trails show up on a phone app", "Whether its manager allows what you plan"], correctIndex: 3, explanation: "\"A civilian has one more thing to check: whether the land's manager allows what you mean to do.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which three activities does lesson 3 say are allowed in some places and not others?", options: ["Off-trail walking, night, and filming", "Hiking, picnicking, and bird watching", "Fishing, swimming, and boat launching", "Driving, parking, and cycling on roads"], correctIndex: 0, explanation: "\"Off-trail walking, being out after dark and filming are each allowed in some places and not in others.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which US Topo quad covers Fort Harrison State Park?", options: ["Indianapolis West", "Indianapolis East", "McCordsville", "Cumberland"], correctIndex: 1, explanation: "Fort Harrison is on the INDIANAPOLIS EAST quad, dated 2022-10-14. Indianapolis West, McCordsville and Cumberland are neighboring sheets, named in its adjoining-quadrangle diagram.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What contour interval does the Indianapolis East quad use?", options: ["10 feet", "20 feet", "5 feet", "40 feet"], correctIndex: 2, explanation: "Indianapolis East's contour interval is 5 feet; the three southern quads use 10 feet.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What does Fort Harrison's trail map ask of visitors?", options: ["Register at the office", "Wear hunter orange", "Hike only in pairs", "Stay on marked trails"], correctIndex: 3, explanation: "The trail map says \"PLEASE STAY ON MARKED TRAILS.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which two Fort Harrison nature preserves does the park map list as closed to the public?", options: ["Chinquapin and Bluffs of Fall Creek", "Warbler Woods and Lawrence Creek", "Lawrence Creek and Bluffs of Fall Creek", "Warbler Woods and Bluffs of Fall Creek"], correctIndex: 0, explanation: "Chinquapin and Bluffs of Fall Creek are each \"Closed to the public.\" Warbler Woods and Lawrence Creek are not marked closed.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which skills does lesson 3 suggest practicing at Fort Harrison?", options: ["Off-trail travel through the preserves", "Trail skills: pace counts and bearings", "Night walks from the park campground", "An orienteering meet with a large group"], correctIndex: 1, explanation: "Use it \"for the skills that work on a trail: reading the map against the ground, pace counts on a measured stretch, and taking bearings to landmarks.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Why is Fort Harrison not the place for a night navigation walk?", options: ["Its trails are lit all night long", "It closes every year for the winter", "It has no campground for a night walk", "It sits under an airport flight path"], correctIndex: 2, explanation: "\"It is not the place to leave the trail, and it has no campground for a night walk.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which US Topo quad covers Morgan-Monroe State Forest?", options: ["Belmont", "Fishers", "Norman", "Hindustan"], correctIndex: 3, explanation: "Morgan-Monroe is on the HINDUSTAN quad, dated 2022-10-05, contour interval 10 feet.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What did Morgan-Monroe build its Pathfinder Trail for, by its own brochure?", options: ["Following bearings and counting pace", "Mountain biking on rugged ridge lines", "Horse riding with an annual use tag", "Hunting from fixed stands in season"], correctIndex: 0, explanation: "The brochure calls it \"a 'compass course', set up for you to practice following bearings and counting pace\".", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What closed Morgan-Monroe's Pathfinder orienteering course in 2026?", options: ["A wildfire in late summer", "An EF-2 tornado on June 18", "A flood on Bryant Creek", "An ice storm in January"], correctIndex: 1, explanation: "The forest's page lists it as closed after the EF-2 tornado of June 18, 2026, with no reopening date given.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "How may you be in Morgan-Monroe's backcountry after dark?", options: ["With a special night-hiking permit", "Only with a ranger as your guide", "As a registered backcountry camper", "Freely, since no hours are posted"], correctIndex: 2, explanation: "After dark is possible only as a registered backcountry camper: \"All campers must register.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What group size does Morgan-Monroe allow for backcountry camping?", options: ["Groups up to ten, as in the Deam", "Groups of any size with a permit", "Pairs only, never a solo camper", "Family units, or groups up to six"], correctIndex: 3, explanation: "Groups are limited to \"family units or groups not exceeding six persons\".", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "How far from access points must a Morgan-Monroe backcountry campsite be?", options: ["At least a quarter mile", "At least 100 feet", "At least 200 feet", "At least half a mile"], correctIndex: 0, explanation: "\"No campsite may be established within ¼ mile of access points\".", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "How many nights may one person use Morgan-Monroe's backcountry area?", options: ["Six at most", "Three at most", "Fourteen at most", "One at most"], correctIndex: 1, explanation: "\"Use of the area is restricted to a maximum of three nights\".", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What does Morgan-Monroe advise hikers to wear in hunting season?", options: ["A helmet and a reflective vest", "Dark clothing to avoid notice", "Hunter orange or bright clothing", "A whistle and a radio beacon"], correctIndex: 2, explanation: "\"Hikers are advised to wear hunter orange or other bright clothing while on trails during hunting season.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which US Topo quad covers Yellowwood State Forest?", options: ["Hindustan", "Cumberland", "Elkinsville", "Belmont"], correctIndex: 3, explanation: "Yellowwood is on the BELMONT quad, dated 2022-10-14, contour interval 10 feet.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "On camping along the Tecumseh Trail at Yellowwood, how do the forest's two sources compare?", options: ["They disagree; ask the forest office", "They agree on designated sites only", "They agree camping is not allowed", "Only the web page mentions camping"], correctIndex: 0, explanation: "The web page allows dispersed camping a quarter mile from roads and 100 feet from the trail; the property map says \"Camping in designated areas is allowed along this trail.\" Ask which rule governs.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Under Yellowwood's web page, how far from the Tecumseh Trail must a dispersed campsite be?", options: ["At least 200 feet", "At least 100 feet", "At least 50 feet", "At least 500 feet"], correctIndex: 1, explanation: "Campsites must be \"a minimum of 100 feet from the trail\", and at least a quarter mile from roads, recreation areas and trailheads.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which of the four sites has posted rules that expect walkers off the trail and out after dark?", options: ["Fort Harrison State Park", "Morgan-Monroe State Forest", "The Charles C. Deam Wilderness", "Yellowwood State Forest"], correctIndex: 2, explanation: "The Deam is \"the one site of the four whose posted rules expect you off the trail and out after dark.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "In the Deam Wilderness, who must stay on designated trails?", options: ["Every walker", "Groups of six", "Solo campers", "Horse riders"], correctIndex: 3, explanation: "Its restrictions confine horse riders to designated trails \"and say nothing of the kind for walkers\".", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "How close to a trail may you camp in the Deam, outside a designated campsite?", options: ["No closer than 200 feet", "No closer than 100 feet", "No closer than 50 feet", "No closer than a mile"], correctIndex: 0, explanation: "\"Camping is prohibited within 200 feet of trails, trailheads, roads, water sources, rock shelters, caves, and historic structures, unless in a Forest Service designated campsite.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What is the group size limit in the Deam Wilderness?", options: ["6 persons or less", "10 persons or less", "12 persons or less", "20 persons or less"], correctIndex: 1, explanation: "\"Group size is limited to 10 persons or less.\" Morgan-Monroe's backcountry limit is six.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Which activity does the Deam Wilderness prohibit outright?", options: ["Backpacking", "Bird watching", "Geocaching", "Map reading"], correctIndex: 2, explanation: "\"Geocaching is prohibited.\" Drones may not launch or land there either.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Why does the Forest Service say to get a map before visiting the Deam?", options: ["The trails are not marked at all", "Phones are banned in the wilderness", "The roads are closed to the public", "The boundaries are not clearly marked"], correctIndex: 3, explanation: "\"Please get a map before visiting this area, as the boundaries are not clearly marked.\"", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "Under which rule does the Indiana DNR require a special events permit?", options: ["312 IAC 8-2-15", "312 IAC 2-8-51", "29 CFR 1910.28", "36 CFR 261.10"], correctIndex: 0, explanation: "The DNR says a special events permit is required by 312 IAC 8-2-15 for an event such as a contest, competition or sporting activity on a DNR property.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
          { prompt: "What does BAM do before filming a demonstration on DNR land?", options: ["Posts the video to the DNR's own channel", "Asks the property about a film agreement", "Films only before the property opens", "Buys a special events permit for $25"], correctIndex: 1, explanation: "The DNR's rules page links a \"Commercial Film and Photography Agreement Form\"; BAM asks the property whether his filming needs one.", sourceLessonSlug: "where-to-practice-near-indianapolis" },
        ],
      },
    },
    {
      slug: "what-a-topographic-map-is",
      title: "4 · What a topographic map is, and getting yours free",
      section: "2 · Reading a topographic map",
      recallContent: [
        {
          prompt: "Of the four practice sites near Indianapolis, which one's posted rules expect walkers off the trail and out after dark?",
          answer: "The Charles C. Deam Wilderness in the Hoosier National Forest (ELKINSVILLE quad).",
        },
        {
          prompt: "What did the Army manual say leaders must do before using an area for land navigation training?",
          answer: "\"complete a thorough terrain reconnaissance\", looking for \"dangerous terrain, heavy trafficked roads, water obstacles, wildlife, and training debris.\"",
        },
      ],
      body: `${P("BAM downloads the US Topo quad he will film on, turns layers on and off in the PDF, prints it at full size, and checks the bar scale with a ruler; then opens a historical quad of the same ground beside it")}

**What makes a map topographic.** The US Geological Survey puts it in one sentence: "The distinctive characteristic of a topographic map is that the shape of the Earth's surface is shown by contour lines." Its fact sheet for walkers says the same thing in plainer words: "These maps describe the shape of the land." A road map tells you where the roads go. A topographic map also tells you which way is uphill, how steep it is, and where the water runs, which is what you need once you leave the road.

**The US Topo.** The USGS's current series is called US Topo. Its symbol guide defines it: "a digital topographic map that covers 7.5-minutes of longitude by 7.5-minutes of latitude and is produced at a scale of 1:24,000." Each sheet is called a quadrangle, or quad, and is named in its margin. US Topo maps keep "the same extent, scale, and general layout" as the paper 7.5-minute maps the USGS printed from 1947 to 2006. The difference is underneath: "The base data layer of a US Topo map is a recent orthographic aerial photograph," with contours, water, roads, boundaries and names drawn on top.

**Getting yours.** The program page says the maps are "Available for free and immediate download". Each one is a geospatial PDF, which "enables basic GIS functionality, such as displaying coordinates, distance or area measurement", and a layered PDF, which "allows users to turn each data layer on or off". Turning the photograph off before you print gives a cleaner page and saves ink.

**And the old ones.** The USGS also scanned its paper maps: "Topographic maps originally published as paper documents between 1884-2006 have been scanned and published as the USGS Historical Topographic Map Collection." Both the historical maps and the current US Topos (published 2009 to the present) are free through TopoView or the USGS Store's Map Locator. Download a historical quad of the same ground as your current one. Roads, lakes, woods and even the magnetic declination will differ, and section 4 uses that difference.

**Free to copy, with one exception.** "All topographic maps produced by the U.S. Geological Survey (USGS) are in the public domain and are not copyrighted", the USGS says, except that "Most maps in the period 2010-2016 contain commercially licensed road data." It stopped using commercial data in November 2016. Even the older US Topos "can be reproduced freely and used for any purpose, provided copyright notices" for that data are kept.

**How often they change.** Here the USGS's own pages disagree by date. The 2023 symbol guide says "US Topo maps are revised on a three-year production cycle." The program page, read in October 2026, says the series "Historically followed a 3-year production cycle" and that "Beginning in 2026, the US Topo program will update maps based on changes in the underlying data." The Hindustan quad shows the old rhythm: editions dated 2010, 2013, 2016, 2019 and 2022. Trust the newer page, and read the date on your own sheet.

:::reveal What makes a map topographic, in the USGS's words? ||| "The distinctive characteristic of a topographic map is that the shape of the Earth's surface is shown by contour lines."

:::reveal Which years does the USGS Historical Topographic Map Collection cover? ||| Maps "originally published as paper documents between 1884-2006".

## Sources
- ${USGS_GIP_SYM} Locator: p. 1, "What is a Topographic Map?"
- ${USGS_FS} Locator: p. 1, first paragraph.
- ${USGS_USTOPO_SYM} Locator: p. 2, "What is a US Topo map?"
- ${USGS_USTOPO} Locator: the download panels and the list of US Topo features.
- ${USGS_OLDER} Locator: the answer, first paragraph.
- ${USGS_COPYRIGHT} Locator: the answer and its note on commercial road data.
- ${USTOPO_HINDUSTAN} Locator: the edition dates, as listed by The National Map for the Hindustan quad (2010-05-13, 2013-05-20, 2016-10-18, 2019-05-10, 2022-10-05).`,
    },
    {
      slug: "the-margin",
      title: "5 · The margin: read the instructions first",
      section: "2 · Reading a topographic map",
      recallContent: [
        {
          prompt: "What is a US Topo map, in the USGS symbol guide's words?",
          answer: "\"a digital topographic map that covers 7.5-minutes of longitude by 7.5-minutes of latitude and is produced at a scale of 1:24,000.\" Its base layer is a recent aerial photograph.",
        },
        {
          prompt: "How do the USGS's own pages disagree about how often US Topo maps change?",
          answer: "The 2023 symbol guide says they are \"revised on a three-year production cycle\"; the program page says that was historical and that \"Beginning in 2026\" maps update from changes in the underlying data.",
        },
      ],
      body: `**The map's instructions.** The Army manual opens its chapter on the margin with an analogy: "A map could be compared to any piece of equipment, in that before it is placed into operation the user must read the instructions." The instructions are the marginal information printed around the edge, and the manual's rule is to read them every time: "All maps are not the same, so it becomes necessary every time a different map is used to examine the marginal information carefully."

**What to look for, and why each matters.** The manual lists more than twenty items for a military sheet. These are the ones a civilian US Topo also carries:
- **The name.** "A map is generally named for the settlement contained within the area covered by the sheet, or for the largest natural feature".
- **The scale**, as a fraction such as 1:24,000, and the **bar scales**, which are "rulers used to convert map distance to ground distance." The manual warns that "Care should be exercised when using the scales, especially in the selection of the unit of measure that is needed." Lesson 7 uses both.
- **The contour interval**, the height between neighboring contour lines. Lesson 8 depends on it.
- **The declination diagram**, which "indicates the angular relationships of true north, grid north, and magnetic north." Section 4 is built on it.
- **The datum.** Coordinates mean nothing without it. The manual's warning: "UTM coordinates from the same point computed on different data may differ as much as 900 meters." The wildland fire workbook calls the datum and UTM zone "extremely important when using a GPS receiver." Lesson 34 comes back to this.
- **The date.** The map information date "is important when determining how accurately the map data might be expected to match what you will encounter on the ground." A printing date is not the same thing and "should not be used to determine when the map information was obtained."
- **The legend.** "The symbols are not always the same on every map. Always refer to the legend to avoid errors when reading a map." Lesson 6 reads it.
- **The adjoining sheets**, so you know which quad to download when your route runs off the edge.

**One margin, read.** The Hindustan quad that covers Morgan-Monroe State Forest prints, along its bottom edge: HINDUSTAN QUADRANGLE, INDIANA, 7.5-MINUTE SERIES; SCALE 1:24 000; CONTOUR INTERVAL 10 FEET; NORTH AMERICAN VERTICAL DATUM OF 1988 for heights; North American Datum of 1983 (NAD83) for positions, with the projection and 1,000-meter grid on "Universal Transverse Mercator, Zone 16S". Its declination diagram is titled "UTM GRID AND 2019 MAGNETIC NORTH DECLINATION AT CENTER OF SHEET", and shows magnetic north 4°28' (79 mils) to the west of true north and grid north 0°21' (6 mils) to the east. Its adjoining-quadrangles box names eight neighbors, from Paragon and Martinsville to Bloomington and Belmont. And it says plainly: "This map is not a legal document."

**Numbers, not the drawing.** The USGS fact sheet adds a warning about that diagram: "The declination diagram is only representational, and true values of the angles of declination should be taken from the numbers provided rather than from the directional lines." Never measure the angle with a protractor off the diagram; read the number.

**When the workbook is out of date.** The workbook, written in 2016, says "The datum used for most currently available USGS 7.5 minute series topographical maps is the NAD27." Every current US Topo quad in lesson 3 prints NAD83. A historical quad may print NAD27. Read the datum on the sheet in your hand, not the one a book expects.

:::reveal According to the Army manual, how far apart can UTM coordinates of the same point be when computed on different datums? ||| "as much as 900 meters."

:::reveal On the Hindustan quad, which way and how far does magnetic north lie from true north, and for what year? ||| 4°28' (79 mils) west of true north, for 2019, at the center of the sheet.

## Sources
- ${FM_2001} Locator: printed pp. 3-1 to 3-4 (PDF pp. 17 to 20), paragraph 3-1, items a, d, f, j, k, l, q, t and w.
- ${NWCG_475} Locator: p. 14, "Topographic Maps"; p. 36, "Datum and UTM Zone".
- ${USGS_FS} Locator: pp. 1 and 2, "From Here to There: Determining Direction".
- ${USTOPO_HINDUSTAN} Locator: lower margin, the scale, contour interval, datum and projection notes, the declination diagram and the adjoining-quadrangles box.`,
    },
    {
      slug: "symbols-and-colors",
      title: "6 · Symbols and colors, and why old maps carry purple",
      section: "2 · Reading a topographic map",
      recallContent: [
        {
          prompt: "What does the USGS fact sheet say about measuring declination off the diagram in the margin?",
          answer: "\"The declination diagram is only representational, and true values of the angles of declination should be taken from the numbers provided rather than from the directional lines.\"",
        },
        {
          prompt: "Why must you read the datum note on your own sheet, not the one a book expects?",
          answer: "Coordinates of one point on different datums can differ \"as much as 900 meters\" (Army manual), and the 2016 workbook still says most quads use NAD27 while current US Topo quads print NAD83.",
        },
      ],
      body: `**Why a map needs symbols.** At 1:24,000 a house is a speck and a creek is thinner than a hair. The Army manual explains the trade: showing every feature at its true size "is not practical because many of the features would be unimportant and others would be unrecognizable because of their reduction in size." So the mapmaker uses symbols, placed "in such a manner that the center of the symbol remains in its true location." There is one exception worth knowing: where a road has been drawn wider than it is, a building beside it "is moved from its true position to preserve its relation to the road."

**What the colors mean on a US Topo.** The 2023 symbol guide gives the scheme in one line: "topographic contours in brown, streams and rivers and other hydrographic features in blue, and roads in black and red." Underneath sits the aerial photograph, which "shows those features on the Earth's surface that are visible to the eye." The line style carries meaning too: "a perennial stream is symbolized by a solid blue line while an intermittent stream is shown by a blue dashed and dotted line." A dashed blue line on a map in August may be a dry bed under your feet.

**The older scheme.** The USGS's 2005 symbol sheet describes the paper maps you will find in the historical collection: area colors first, "vegetation (green), water (blue), and densely built-up areas (gray or red)"; then lines, "topographic contours (brown); lakes, streams, irrigation ditches, and other hydrographic features (blue); land grids and important roads (red); and other roads and trails, railroads, boundaries, and other cultural features (black)." The 2001 fact sheet adds that "Woodlands, for instance, are shown in a green tint" and "Buildings may be shown on the map as black squares or outlines."

**Purple.** Open an older quad and you may find features printed in purple. The fact sheet explains: "Recent changes in an area may be shown by a purple overprint." The 2005 sheet finishes the story: "At one time, purple was used as a revision color to show all feature changes. Currently, purple is not used in our revision program, but purple features are still present on many existing maps." On an old sheet, purple marks what was added at a revision.

**Symbols change, so read the legend.** The 2005 sheet warns that symbols "are constantly refined", so "within the same series, maps may have slightly different symbols for the same feature." The Army manual makes it a habit: "the legend should be referred to each time a new map is used." For a US Topo, the legend is a separate document: the symbol guide "is included as an attachment for all US Topo map downloads."

**Colors have a long history.** The manual notes that "By the fifteenth century, most European maps were carefully colored," with mountains in brown, water in blue and vegetation in green, and that "the use of colors has not changed much over the past several hundred years." Lesson 35 comes back to old maps.

:::reveal On a US Topo map, what color are contours, water features and roads? ||| Contours brown; streams, rivers and other water blue; roads black and red.

:::reveal What does purple mean on an older USGS quad? ||| A revision: "At one time, purple was used as a revision color to show all feature changes." It is no longer used, but remains on many existing maps.

## Sources
- ${FM_2001} Locator: printed pp. 3-5 and 3-6 (PDF pp. 21 and 22), paragraphs 3-3 and 3-5.
- ${USGS_USTOPO_SYM} Locator: p. 2, "Symbols on US Topo Maps"; and the media page's "Detailed Description".
- ${USGS_GIP_SYM} Locator: p. 1, "What is a Topographic Map?" and "Reading Topographic Maps".
- ${USGS_FS} Locator: p. 1, the paragraph on colored areas and symbols.`,
    },
    {
      slug: "scale-and-distance",
      title: "7 · Scale and distance",
      section: "2 · Reading a topographic map",
      recallContent: [
        {
          prompt: "On a US Topo map, what colors are contours, water features and roads?",
          answer: "Contours brown; streams, rivers and other water blue; roads black and red.",
        },
        {
          prompt: "Why might an older USGS quad show features in purple?",
          answer: "Purple was once the revision color: \"At one time, purple was used as a revision color to show all feature changes.\" It is no longer used but remains on many existing maps.",
        },
      ],
      body: `**The representative fraction.** A scale such as 1:24,000 is a ratio. The Army manual: "The RF is always written with the map distance as 1 and is independent of any unit of measure." So 1:24,000 means one inch on the map is 24,000 inches on the ground, and also one centimeter is 24,000 centimeters. The workbook does the conversion that matters on a US Topo: "1 inch represents 24,000 inches or 2000 feet". The USGS fact sheet's table adds that one centimeter represents 240 meters, and that at 1:63,360 one inch is one mile.

**From the map to the ground.** "The ground distance between two points is determined by measuring between the same two points on the map and then multiplying the map measurement by the denominator of the RF". Worked on a 1:24,000 quad:
- You measure 3.5 inches between two trail junctions. 3.5 × 2,000 = **7,000 feet**, and 7,000 ÷ 5,280 is about **1.33 miles**.
- You measure 6.2 centimeters. 6.2 × 240 = **1,488 meters**, about 1.5 kilometers.

**From the ground to the map.** The manual turns it around: map distance equals ground distance divided by the denominator. A 1,200-meter leg on a 1:24,000 map is 1,200 ÷ 24,000 = 0.05 meter, which is **5 centimeters**.

**Area, too.** A scale works on area by squaring it. The black grid on a US Topo is drawn every 1,000 meters, so each grid square is 1,000 m × 1,000 m = **1 square kilometer**, which is about 247 acres. Fort Harrison State Park's map gives the park as 1,744 acres, roughly the area of seven grid squares. The fact sheet gives a whole 7.5-minute quad at "49 to 70" square miles; the range comes from how much the lines of longitude crowd together with distance from the equator.

**The bar scale.** The scale you can trust after printing is the bar scale, because it shrinks or grows with the paper. The manual calls it "a ruler printed on the map". Right of zero is the primary scale, in whole units; left of zero is the extension scale, divided into tenths, and "always read right to left". To use it, lay the straight edge of a scrap of paper between the two points, tick both, then carry the paper to the bar: put the right tick on a whole number of the primary scale and read the left tick in the extension. A map printed at 90 percent of full size is no longer 1:24,000 (one inch is then about 2,222 feet), but its bar scale is still right.

**A winding route.** For a road or a trail that bends, the manual's method is a paper strip pivoted at every bend: tick the start, run the edge along the first straight stretch, tick where the line leaves the edge, pivot to the next stretch, and so on. At the end, measure only from the first tick to the last on the bar scale; "The tick marks in between are not used."

**What a map distance is not.** "Maps measure the distance between two points 'as the crow flies,'" says the workbook. "This means they measure horizontal distances, not slope distances." On flat ground that changes nothing. On hills, "distances measured on maps are going to be way off", always short of what you will walk. And the manual adds a caution about small scales: "As the scale becomes smaller, the accuracy of measurement decreases because some of the features on the map must be exaggerated".

**The right map for the job.** The Fort Harrison course in this catalog, in its lesson "14 · Map: this post, and the national pattern it belongs to", makes the same point from the other side: a world map cannot show a 2,500-acre post. Pick the scale that shows the ground you will walk.

:::reveal On a 1:24,000 map, how far on the ground is 2.5 inches? ||| 2.5 × 2,000 feet = 5,000 feet, a little under a mile (5,280 feet).

:::reveal Why trust the bar scale over the printed 1:24,000 after you print a map? ||| The bar scale shrinks or grows with the paper, so it stays right; the fraction is only right at full size.

## Sources
- ${FM_2001} Locator: printed pp. 5-1 to 5-6 (PDF pp. 50 to 55), paragraphs 5-1a, 5-1d, 5-1e and 5-2a to 5-2g.
- ${NWCG_475} Locator: p. 34, "Fractional Scale"; p. 133, "Estimating Distance on the Ground".
- ${USGS_FS} Locator: p. 1, "From Near to Far: Distance" and its table of map series.
- ${FH_MAP} Locator: the park's address block ("1,744 Acres"). Linked only.`,
    },
    {
      slug: "contour-lines",
      title: "8 · Contour lines: reading height and steepness",
      section: "2 · Reading a topographic map",
      recallContent: [
        {
          prompt: "How do you turn a map measurement into a ground distance?",
          answer: "Multiply the map measurement by the denominator of the representative fraction. On a 1:24,000 map, one inch is 2,000 feet.",
        },
        {
          prompt: "Why are distances measured on a map short of what you walk on hilly ground?",
          answer: "Maps \"measure horizontal distances, not slope distances\" (the workbook), so a hill adds distance the map does not show.",
        },
      ],
      body: `**What a contour is.** The 2023 US Topo symbol guide: "The unique feature of a topographic map is the contour. These lines do not exist on the Earth's surface. They join points of equal elevation above a zero level surface (such as Mean Sea Level) and therefore show heights of the land and reveal the shape of the land surface." Picture walking a hillside without ever going up or down: your path is a contour line. The 2005 sheet adds the rule that follows from it: "Each contour is a line of equal elevation; therefore, contours never cross."

**Three kinds of line.** The Army manual names them:
- **Index.** "Starting at zero elevation or mean sea level, every fifth contour line is a heavier line." Index contours carry their elevation as a number.
- **Intermediate.** The finer lines between them, which "do not have their elevations given. There are normally four intermediate contour lines between index contour lines."
- **Supplementary.** Dashed lines that "show changes in elevation of at least one-half the contour interval", used "where there is very little change in elevation, such as on fairly level terrain."

**The contour interval.** The interval is the height between neighboring lines, printed in the margin under the bar scale. It varies with the ground: the symbol guide says "A map of a relatively flat area may have a contour interval of 10 feet. In steep areas an interval of 100 feet or more may be used". Around Indianapolis it is 5 feet on the Indianapolis East quad and 10 feet on the three southern quads in lesson 3. With four intermediates between index lines, an index line comes every fifth contour, so on a 10-foot map the index lines are 50 feet apart.

**Reading an elevation.** The manual's steps: find the interval, find the nearest numbered index line, decide whether you are going up or down from it, and count lines. "If you are increasing elevation, add the contour interval to the nearest index contour line. If you are decreasing elevation, subtract the contour interval". Worked on a 10-foot map: a point on the second intermediate line above the 700-foot index is 700 + 2 × 10 = **720 feet**. A point on the line just below the 750-foot index is **740 feet**.

**Between the lines, and on top.** For a point between two lines, the manual's rule of thumb: under a quarter of the way across, take the lower line; from a quarter to three quarters, add half the interval; past three quarters, take the upper line. For a hilltop, "Add one-half the contour interval to the elevation of the last contour line." A hilltop inside a closed 780-foot line on a 10-foot map is about **785 feet**. A depression works the other way: subtract half the interval from the lowest line, and its contour carries tick marks that "always point to lower elevations."

**Known heights.** "Bench marks, the more accurate of the two, are symbolized by a black X", with the height beside it, and spot elevations mark hilltops and road junctions.

**Steepness.** "Closely spaced contours indicate a steep land slope; widely spaced contours show more level ground," says the symbol guide. The workbook measures it as a percentage: "A one percent slope indicates a rise or drop of one unit over a distance of 100 horizontal units." Rise is the difference in height; run is the map distance through the scale. Worked: from a 700-foot line to a 750-foot line across 0.25 inch of a 1:24,000 map is a rise of 50 feet over a run of 500 feet, a **10 percent** slope.

:::reveal On a map with a 10-foot contour interval, how far apart in height are the index contours? ||| 50 feet: every fifth line is an index line, with four intermediates between.

:::reveal How does the Army manual estimate the elevation of a hilltop? ||| Add half the contour interval to the last contour line below the top.

## Sources
- ${USGS_USTOPO_SYM} Locator: p. 2, the paragraph beginning "The unique feature of a topographic map is the contour."
- ${USGS_GIP_SYM} Locator: p. 1, "Reading Topographic Maps", the contour paragraph.
- ${FM_2001} Locator: printed pp. 10-1 to 10-5 (PDF pp. 123 to 127), paragraphs 10-2e, 10-3 and 10-4.
- ${NWCG_475} Locator: p. 45, slope.
- ${USTOPO_INDY_EAST} Locator: lower margin, contour interval note.`,
    },
    {
      slug: "landforms-from-contours",
      title: "9 · Landforms from contours",
      section: "2 · Reading a topographic map",
      recallContent: [
        {
          prompt: "How many intermediate contour lines normally sit between two index contours, according to the Army manual?",
          answer: "Four: \"every fifth contour line is a heavier line\", the index contour.",
        },
        {
          prompt: "What does the spacing of contour lines tell you?",
          answer: "Steepness: \"Closely spaced contours indicate a steep land slope; widely spaced contours show more level ground.\"",
        },
      ],
      body: `**From lines to land.** Contours are only useful once you can see shapes in them. The Army manual classifies ten terrain features: five major, three minor and two made by people. For each it gives what you would feel standing on it and how the contours draw it.

**The five major features.** The manual lists them as "the five major terrain features (hilltop, valley, ridge, depression, and saddle)".
- **Hill.** "From a hilltop, the ground slopes down in all directions. A hill is shown on a map by contour lines forming concentric circles. The inside of the smallest closed circle is the hilltop."
- **Saddle.** "A saddle is a dip or low point between two areas of higher ground." Stand in one and "there is high ground in two opposite directions and lower ground in the other two directions." On the map it "is normally represented as an hourglass."
- **Valley.** "A valley is a stretched-out groove in the land, usually formed by streams or rivers." Its contours are U-shaped or V-shaped, and the rule that tells you which way water runs is this one: "The closed end of the contour line (U or V) always points upstream or toward high ground."
- **Ridge.** "A ridge is a sloping line of high ground." On its centerline you have "low ground in three directions and high ground in one direction". Its contours are U- or V-shaped too, but here "The closed end of the contour line points away from high ground."
- **Depression.** "A depression is a low point in the ground or a sinkhole", drawn as "closed contour lines that have tick marks pointing toward low ground." Only depressions at least as deep as the contour interval are usually shown.

**The three minor features.**
- **Draw.** "A draw is a less developed stream course than a valley", with "essentially no level ground". Its U's and V's point toward high ground, like a valley's.
- **Spur.** "A spur is a short, continuous sloping line of higher ground, normally jutting out from the side of a ridge." Its U's and V's point away from high ground, like a ridge's.
- **Cliff.** "A cliff is a vertical or near vertical feature". Its contours run very close together or touch, and where they merge into one line, that line carries tick marks toward low ground.

**Made by people.** A **cut** goes through raised ground to give a road or railroad a level bed; a **fill** builds up a low area for the same purpose. The manual says both are shown "when they are at least 10 feet high."

**Telling a valley from a ridge.** The two look the same on paper, a stack of U's or V's. The difference is which way they point. Point toward higher numbers, uphill, and you are looking at a valley or a draw, where water runs. Point toward lower numbers, downhill, and it is a ridge or a spur, where water divides. Read the index numbers before you decide.

**Describe it, then find it.** The manual's technique for matching what you see to the map is SOSES: compare features by "their shapes, orientations, sizes, elevations, and slopes." Lesson 20 uses it to orient the map by terrain.

**High ground divides water.** The River and the Watershed course makes the same point in its lesson "1 · You live in a watershed": the line between two watersheds is a divide, and it usually runs along high ground. On a topographic map, that divide is a ridgeline you can trace.

:::reveal On a map, which way does the closed end of a valley's U or V point? ||| Upstream, toward high ground. A ridge's or spur's points away from high ground.

:::reveal If you stand in a saddle, where is the high ground? ||| In two opposite directions, with lower ground in the other two. On the map it looks like an hourglass.

## Sources
- ${FM_2001} Locator: printed pp. 10-12 to 10-16 (PDF pp. 134 to 138), paragraph 10-6; printed p. 10-18 (PDF p. 140), paragraph 10-7b; printed p. 11-7 (PDF p. 153), paragraph 11-3a.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Reading a topographic map",
      section: "2 · Reading a topographic map",
      body: "A graded check on what a topographic map is and where to get one, the margin, symbols and colors, scale and distance, contour lines, and landforms. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is the distinctive characteristic of a topographic map, according to the USGS?", options: ["Contour lines show the land's shape", "Roads are colored by their surface", "North is always at the top edge", "Every building is drawn to scale"], correctIndex: 0, explanation: "\"The distinctive characteristic of a topographic map is that the shape of the Earth's surface is shown by contour lines.\"", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "What does a topographic map tell you that a road map usually does not?", options: ["Which roads are paved and toll-free", "Which way is uphill, and how steep", "Where the gas stations are located", "How long the drive takes by car"], correctIndex: 1, explanation: "Lesson 4: a topographic map \"also tells you which way is uphill, how steep it is, and where the water runs\".", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "What area does one US Topo map cover?", options: ["15 minutes of longitude by 15 of latitude", "One whole degree of latitude and longitude", "7.5 minutes of longitude by 7.5 of latitude", "One county, whatever its size and shape"], correctIndex: 2, explanation: "A US Topo map \"covers 7.5-minutes of longitude by 7.5-minutes of latitude and is produced at a scale of 1:24,000.\"", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "At what scale are US Topo maps produced?", options: ["1:63,360", "1:50,000", "1:250,000", "1:24,000"], correctIndex: 3, explanation: "US Topo maps are \"produced at a scale of 1:24,000.\" 1:63,360 is the Alaska scale of one inch to a mile.", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "What is a single US Topo sheet called?", options: ["A quadrangle, or quad", "A township, or tract", "A section, or plat", "A sector, or tile"], correctIndex: 0, explanation: "\"Each sheet is called a quadrangle, or quad, and is named in its margin.\"", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "Which paper series do US Topo maps keep the same extent, scale and layout as?", options: ["The 15-minute maps of 1884 to 1940", "The 7.5-minute maps of 1947 to 2006", "The county road maps of the 1950s", "The Army's 1:50,000 field sheets"], correctIndex: 1, explanation: "US Topo maps keep \"the same extent, scale, and general layout\" as the paper 7.5-minute maps the USGS printed from 1947 to 2006.", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "What is the base layer of a US Topo map?", options: ["A hand-drawn shaded relief", "A scanned 1950s paper map", "A recent aerial photograph", "A satellite radar image"], correctIndex: 2, explanation: "\"The base data layer of a US Topo map is a recent orthographic aerial photograph.\"", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "What does it cost to download a current US Topo map?", options: ["A small store fee", "A yearly license", "A per-print fee", "Nothing; it is free"], correctIndex: 3, explanation: "The program page says the maps are \"Available for free and immediate download\".", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "What can a layered US Topo PDF do?", options: ["Turn each data layer on or off", "Show live trail closures", "Update itself every week", "Track your phone's position"], correctIndex: 0, explanation: "A layered PDF \"allows users to turn each data layer on or off\". Turning off the photograph gives a cleaner print.", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "Which years does the USGS Historical Topographic Map Collection cover?", options: ["1947 to 2009", "1884 to 2006", "1900 to 1999", "1776 to 1884"], correctIndex: 1, explanation: "Maps \"originally published as paper documents between 1884-2006 have been scanned and published as the USGS Historical Topographic Map Collection.\"", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "Why does lesson 4 suggest downloading a historical quad of your own ground?", options: ["It is more accurate than today's", "It shows the trails more clearly", "Section 4 uses how it differs", "It is the only one with contours"], correctIndex: 2, explanation: "Roads, lakes, woods and even the magnetic declination will differ, \"and section 4 uses that difference.\"", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "Which US Topo maps may contain commercially licensed road data?", options: ["Every map made after 2016", "All historical quads only", "Maps of Alaska and Hawaii", "Most maps from 2010 to 2016"], correctIndex: 3, explanation: "\"Most maps in the period 2010-2016 contain commercially licensed road data.\" The USGS stopped using commercial data in November 2016.", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "May you reproduce a US Topo map that contains commercial road data?", options: ["Yes, if its copyright notices stay", "No, never without written consent", "Only for personal, non-teaching use", "Only after the data is ten years old"], correctIndex: 0, explanation: "US Topo maps \"can be reproduced freely and used for any purpose, provided copyright notices\" for that data are kept.", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "What does the 2023 symbol guide say about how often US Topo maps are revised?", options: ["Every year, as the data changes", "On a three-year production cycle", "Once a decade, with the census", "Only when a user reports errors"], correctIndex: 1, explanation: "The 2023 guide says \"US Topo maps are revised on a three-year production cycle.\" The October 2026 program page calls that historical.", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "What does the US Topo program page say changes beginning in 2026?", options: ["Paper maps return to the stores", "Maps move to a 1:50,000 scale", "Updates follow changes in the data", "Downloads begin to carry a fee"], correctIndex: 2, explanation: "\"Beginning in 2026, the US Topo program will update maps based on changes in the underlying data.\"", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "Which edition dates does the Hindustan quad show?", options: ["2009, 2012, 2015, 2018 and 2021", "2011, 2014, 2017, 2020 and 2023", "2010, 2014, 2018, 2022 and 2026", "2010, 2013, 2016, 2019 and 2022"], correctIndex: 3, explanation: "The Hindustan quad's editions are dated 2010, 2013, 2016, 2019 and 2022, the old three-year rhythm.", sourceLessonSlug: "what-a-topographic-map-is" },
          { prompt: "How does the Army manual compare a map to equipment?", options: ["Read its instructions before use", "Clean it after every single use", "Replace it when it gets worn out", "Store it dry, folded and flat"], correctIndex: 0, explanation: "\"A map could be compared to any piece of equipment, in that before it is placed into operation the user must read the instructions.\" The instructions are the margin.", sourceLessonSlug: "the-margin" },
          { prompt: "How often does the Army manual say to examine the marginal information?", options: ["Once, when you first learn to read maps", "Every time a different map is used", "Only when the map is a foreign one", "Only when the map has a new edition"], correctIndex: 1, explanation: "\"All maps are not the same, so it becomes necessary every time a different map is used to examine the marginal information carefully.\"", sourceLessonSlug: "the-margin" },
          { prompt: "How is a map generally named, according to the Army manual?", options: ["For the surveyor who first mapped the area", "For the county seat nearest to its center", "For its main settlement or natural feature", "For a number in a national grid of sheets"], correctIndex: 2, explanation: "\"A map is generally named for the settlement contained within the area covered by the sheet, or for the largest natural feature\".", sourceLessonSlug: "the-margin" },
          { prompt: "What does the Army manual call the bar scales?", options: ["Charts of the map's contour colors", "Tables of the map's grid numbers", "Keys to the map's road symbols", "Rulers that convert map distance"], correctIndex: 3, explanation: "Bar scales are \"rulers used to convert map distance to ground distance.\"", sourceLessonSlug: "the-margin" },
          { prompt: "What does the Army manual warn about when using the bar scales?", options: ["Choosing the right unit of measure", "Bars printed in the wrong color", "Bars that skip every other mark", "Bars printed on the map's back"], correctIndex: 0, explanation: "\"Care should be exercised when using the scales, especially in the selection of the unit of measure that is needed.\"", sourceLessonSlug: "the-margin" },
          { prompt: "What does the declination diagram show?", options: ["The map's datum and its zone", "True, grid and magnetic north", "The sun's path over the sheet", "The quads that adjoin this one"], correctIndex: 1, explanation: "It \"indicates the angular relationships of true north, grid north, and magnetic north.\"", sourceLessonSlug: "the-margin" },
          { prompt: "How far apart can UTM coordinates for one point be on different datums, per the Army manual?", options: ["As much as 9 meters", "As much as 90 meters", "As much as 900 meters", "As much as 9 kilometers"], correctIndex: 2, explanation: "\"UTM coordinates from the same point computed on different data may differ as much as 900 meters.\"", sourceLessonSlug: "the-margin" },
          { prompt: "Which margin date tells you how well the map should match the ground?", options: ["The printing date", "The download date", "The purchase date", "The map information date"], correctIndex: 3, explanation: "The map information date \"is important when determining how accurately the map data might be expected to match what you will encounter on the ground.\" The printing date is not.", sourceLessonSlug: "the-margin" },
          { prompt: "What does the Army manual say the printing date should not be used for?", options: ["Telling when the map data was gathered", "Telling which edition is the newest", "Telling who printed the map sheet", "Telling which datum the map uses"], correctIndex: 0, explanation: "The printing date \"should not be used to determine when the map information was obtained.\"", sourceLessonSlug: "the-margin" },
          { prompt: "Why does the Army manual say always to refer to the legend?", options: ["The legend lists the map's errors", "Symbols are not the same on every map", "The legend gives the declination", "Symbols change color as maps age"], correctIndex: 1, explanation: "\"The symbols are not always the same on every map. Always refer to the legend to avoid errors when reading a map.\"", sourceLessonSlug: "the-margin" },
          { prompt: "What contour interval does the Hindustan quad use?", options: ["5 feet", "20 feet", "10 feet", "40 feet"], correctIndex: 2, explanation: "The Hindustan margin prints \"CONTOUR INTERVAL 10 FEET\".", sourceLessonSlug: "the-margin" },
          { prompt: "Which horizontal datum does the Hindustan quad print?", options: ["NAD27", "NAVD88", "WGS72", "NAD83"], correctIndex: 3, explanation: "It prints North American Datum of 1983 (NAD83) for positions. NAVD88 is its vertical datum, for heights.", sourceLessonSlug: "the-margin" },
          { prompt: "Which UTM zone does the Hindustan quad's grid use?", options: ["Zone 16S", "Zone 15N", "Zone 17S", "Zone 18T"], correctIndex: 0, explanation: "Its projection and 1,000-meter grid are on \"Universal Transverse Mercator, Zone 16S\".", sourceLessonSlug: "the-margin" },
          { prompt: "On the Hindustan quad, where is magnetic north for 2019?", options: ["4°28' east of true north", "4°28' west of true north", "0°21' west of true north", "0°21' east of true north"], correctIndex: 1, explanation: "The diagram shows magnetic north 4°28' (79 mils) west of true north, and grid north 0°21' east of it.", sourceLessonSlug: "the-margin" },
          { prompt: "On the Hindustan quad, where is grid north?", options: ["0°21' west of true north", "4°28' east of true north", "0°21' east of true north", "4°28' west of true north"], correctIndex: 2, explanation: "Grid north is 0°21' (6 mils) east of true north; magnetic north is 4°28' west.", sourceLessonSlug: "the-margin" },
          { prompt: "What does the Hindustan quad say plainly about its legal status?", options: ["It may settle a property line", "It is binding in Indiana courts", "It is a certified survey plat", "It is not a legal document"], correctIndex: 3, explanation: "The margin says: \"This map is not a legal document.\"", sourceLessonSlug: "the-margin" },
          { prompt: "How should you take the declination from a USGS map's diagram?", options: ["Read the number printed", "Measure the drawn angle", "Copy the drawing to scale", "Average the drawn lines"], correctIndex: 0, explanation: "\"The declination diagram is only representational, and true values of the angles of declination should be taken from the numbers provided rather than from the directional lines.\"", sourceLessonSlug: "the-margin" },
          { prompt: "Which datum does the 2016 workbook say most USGS 7.5-minute maps use?", options: ["NAD83", "NAD27", "WGS84", "NAVD88"], correctIndex: 1, explanation: "The workbook says \"The datum used for most currently available USGS 7.5 minute series topographical maps is the NAD27.\" Every current US Topo quad in lesson 3 prints NAD83.", sourceLessonSlug: "the-margin" },
          { prompt: "Why does the workbook call the datum and UTM zone extremely important?", options: ["They set the map's contour interval", "They tell you the map's print date", "You need them to use a GPS receiver", "They decide the map's sheet name"], correctIndex: 2, explanation: "The datum and UTM zone are \"extremely important when using a GPS receiver.\" Lesson 34 comes back to this.", sourceLessonSlug: "the-margin" },
          { prompt: "Why does a map need symbols at all?", options: ["Symbols make the map print faster", "The law requires standard symbols", "Photographs cannot be printed", "True-size features would vanish"], correctIndex: 3, explanation: "True size \"is not practical because many of the features would be unimportant and others would be unrecognizable because of their reduction in size.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "Where on the ground does a map symbol's center sit?", options: ["At the feature's true location", "At the nearest road junction", "At the feature's north edge", "At the nearest grid line"], correctIndex: 0, explanation: "Symbols are placed \"in such a manner that the center of the symbol remains in its true location.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "When does the Army manual say a feature is moved from its true position?", options: ["When it sits exactly on a grid line", "When a road beside it is drawn wider", "When it is newer than the map date", "When it falls on the map's margin"], correctIndex: 1, explanation: "Where a road's width \"has been exaggerated\", a feature beside it \"is moved from its true position to preserve its relation to the road.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "On a US Topo map, what color are contours?", options: ["Black", "Green", "Brown", "Purple"], correctIndex: 2, explanation: "\"topographic contours in brown, streams and rivers and other hydrographic features in blue, and roads in black and red.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "How does a US Topo map draw an intermittent stream?", options: ["Solid blue line, extra thick", "Brown dashed line with ticks", "Black dotted line in a tint", "Blue dashed and dotted line"], correctIndex: 3, explanation: "\"a perennial stream is symbolized by a solid blue line while an intermittent stream is shown by a blue dashed and dotted line.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "What may a dashed blue line on a map turn out to be in August?", options: ["A dry streambed under your feet", "A paved road under construction", "A power line crossing a valley", "A fence line along a property"], correctIndex: 0, explanation: "A dashed and dotted blue line is an intermittent stream: \"A dashed blue line on a map in August may be a dry bed under your feet.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "On the 2005 USGS scheme, what color shows vegetation?", options: ["Brown", "Green", "Gray", "Blue"], correctIndex: 1, explanation: "Area features: \"vegetation (green), water (blue), and densely built-up areas (gray or red)\".", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "On the 2005 USGS scheme, what color are land grids and important roads?", options: ["Blue", "Green", "Red", "Brown"], correctIndex: 2, explanation: "Lines: contours brown, water blue, \"land grids and important roads (red)\", and other roads, trails, railroads and boundaries black.", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "How does the 2001 fact sheet say buildings may be shown?", options: ["As red dots with a number", "As brown blocks in a tint", "As purple crosses in a ring", "As black squares or outlines"], correctIndex: 3, explanation: "\"Buildings may be shown on the map as black squares or outlines.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "What did purple once mean on USGS maps?", options: ["A revision showing changes", "A national forest boundary", "A road under construction", "A wetland that floods yearly"], correctIndex: 0, explanation: "\"At one time, purple was used as a revision color to show all feature changes.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "Does the USGS still use purple for revisions?", options: ["Yes, on every US Topo since 2009", "No, though it remains on old maps", "Yes, but only on its Alaska maps", "No, and it erased all old purple"], correctIndex: 1, explanation: "\"Currently, purple is not used in our revision program, but purple features are still present on many existing maps.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "Why may two maps in the same series show one feature with different symbols?", options: ["Each surveyor picks their own", "Printers vary in their inks", "Symbols are constantly refined", "States set their own symbols"], correctIndex: 2, explanation: "Symbols \"are constantly refined\", so \"within the same series, maps may have slightly different symbols for the same feature.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "Where is the legend for a US Topo map?", options: ["Printed on the map's back side", "Only in the USGS printed catalog", "In the map's top right corner", "In a guide attached to each download"], correctIndex: 3, explanation: "The US Topo symbol guide \"is included as an attachment for all US Topo map downloads.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "By the fifteenth century, what color were rivers and lakes on most European maps?", options: ["Blue", "Red", "Green", "Brown"], correctIndex: 0, explanation: "The Army manual: mountains in brown, \"rivers and lakes in blue, vegetation in green, roads in yellow, and special information in red.\"", sourceLessonSlug: "symbols-and-colors" },
          { prompt: "What does the scale 1:24,000 mean?", options: ["One inch on the map is 24,000 feet", "One map unit is 24,000 on the ground", "One inch on the map is 24,000 yards", "One map unit is 2,400 on the ground"], correctIndex: 1, explanation: "The representative fraction is \"independent of any unit of measure\": one unit on the map is 24,000 of the same unit on the ground.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "On a 1:24,000 map, one inch represents how many feet?", options: ["2,400 feet", "1,000 feet", "2,000 feet", "5,280 feet"], correctIndex: 2, explanation: "\"1 inch represents 24,000 inches or 2000 feet\". 24,000 ÷ 12 = 2,000.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "On a 1:24,000 map, one centimeter represents how many meters?", options: ["24 meters", "2,400 meters", "100 meters", "240 meters"], correctIndex: 3, explanation: "The fact sheet's table gives 1 centimeter as 240 meters at 1:24,000.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "At which scale is one inch on the map one mile on the ground?", options: ["1:63,360", "1:24,000", "1:50,000", "1:100,000"], correctIndex: 0, explanation: "One mile is 63,360 inches, so one inch to a mile is 1:63,360.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "You measure 3.5 inches on a 1:24,000 map. About how far is that on the ground?", options: ["3,500 feet, about 0.66 mile", "7,000 feet, about 1.33 miles", "8,400 feet, about 1.59 miles", "7,000 yards, about 3.98 miles"], correctIndex: 1, explanation: "3.5 × 2,000 = 7,000 feet, and 7,000 ÷ 5,280 is about 1.33 miles.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "You measure 6.2 centimeters on a 1:24,000 map. How far is that on the ground?", options: ["1,240 meters", "148.8 meters", "1,488 meters", "2,480 meters"], correctIndex: 2, explanation: "6.2 × 240 = 1,488 meters, about 1.5 kilometers.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "How long is a 1,200-meter leg on a 1:24,000 map?", options: ["50 centimeters", "2 centimeters", "12 centimeters", "5 centimeters"], correctIndex: 3, explanation: "Map distance = ground distance ÷ denominator: 1,200 ÷ 24,000 = 0.05 meter = 5 centimeters.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "How much ground does one square of a US Topo's 1,000-meter grid cover?", options: ["1 square kilometer", "1 square mile", "10 square kilometers", "100 acres exactly"], correctIndex: 0, explanation: "1,000 m × 1,000 m = 1 square kilometer, about 247 acres.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "Fort Harrison's map gives the park as 1,744 acres. About how many 1-km grid squares is that?", options: ["About two", "About seven", "About fifteen", "About seventy"], correctIndex: 1, explanation: "One grid square is about 247 acres, and 1,744 ÷ 247 is about 7.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "Which scale stays right after a map is printed smaller than full size?", options: ["The 1:24,000 fraction", "The contour interval", "The printed bar scale", "The grid number labels"], correctIndex: 2, explanation: "The bar scale \"shrinks or grows with the paper\", so it stays right; the fraction is only right at full size.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "A 1:24,000 map is printed at 90 percent of full size. About how far is one inch now?", options: ["About 1,800 feet", "About 2,000 feet", "About 2,400 feet", "About 2,222 feet"], correctIndex: 3, explanation: "2,000 ÷ 0.9 is about 2,222 feet, so the map is no longer 1:24,000, though its bar scale is still right.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "On a bar scale, what is the part left of zero called?", options: ["The extension scale", "The primary scale", "The contour scale", "The fraction scale"], correctIndex: 0, explanation: "Right of zero is the primary scale in whole units; left of zero is the extension scale, divided into tenths.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "Which way does the Army manual say to read the extension scale?", options: ["Always left to right", "Always right to left", "From top to bottom", "From either end"], correctIndex: 1, explanation: "The extension scale is \"always read right to left\".", sourceLessonSlug: "scale-and-distance" },
          { prompt: "When measuring a winding route with a paper strip, which tick marks give the distance?", options: ["Every tick, added together", "The two farthest apart", "Only the first and the last", "The middle one, doubled"], correctIndex: 2, explanation: "Measure only from the first tick to the last; \"The tick marks in between are not used.\"", sourceLessonSlug: "scale-and-distance" },
          { prompt: "What kind of distance does a map measure, according to the workbook?", options: ["Slope, not horizontal distance", "Walking time, not distance", "Road distance, not straight", "Horizontal, not slope distance"], correctIndex: 3, explanation: "Maps \"measure horizontal distances, not slope distances.\"", sourceLessonSlug: "scale-and-distance" },
          { prompt: "On hilly ground, how do map distances compare with what you walk?", options: ["They fall short of it", "They are always longer", "They match it exactly", "They double it at most"], correctIndex: 0, explanation: "On hills, \"distances measured on maps are going to be way off\", always short of what you will walk.", sourceLessonSlug: "scale-and-distance" },
          { prompt: "What happens to the accuracy of measurement as a map's scale becomes smaller?", options: ["It increases", "It decreases", "It stays fixed", "It doubles"], correctIndex: 1, explanation: "\"As the scale becomes smaller, the accuracy of measurement decreases because some of the features on the map must be exaggerated\".", sourceLessonSlug: "scale-and-distance" },
          { prompt: "What do contour lines join, according to the US Topo symbol guide?", options: ["Points of equal slope", "Points of equal distance", "Points of equal elevation", "Points of equal rainfall"], correctIndex: 2, explanation: "Contours \"join points of equal elevation above a zero level surface (such as Mean Sea Level)\".", sourceLessonSlug: "contour-lines" },
          { prompt: "Why can two contour lines never cross?", options: ["The printer cannot draw it", "Rivers always lie between them", "The interval forbids it", "Each is one equal elevation"], correctIndex: 3, explanation: "\"Each contour is a line of equal elevation; therefore, contours never cross.\"", sourceLessonSlug: "contour-lines" },
          { prompt: "Which contour lines are heavier and carry their elevation?", options: ["Index contours", "Intermediate contours", "Supplementary contours", "Depression contours"], correctIndex: 0, explanation: "\"every fifth contour line is a heavier line\", the index contour, normally numbered with its elevation.", sourceLessonSlug: "contour-lines" },
          { prompt: "How many intermediate lines normally sit between two index contours?", options: ["Two", "Four", "Five", "Ten"], correctIndex: 1, explanation: "\"There are normally four intermediate contour lines between index contour lines.\"", sourceLessonSlug: "contour-lines" },
          { prompt: "What do supplementary contours look like, and where are they used?", options: ["Heavy lines, on steep ground", "Dots, along every stream bed", "Dashes, on fairly level ground", "Blue lines, along lake shores"], correctIndex: 2, explanation: "They \"resemble dashes\" and are used \"where there is very little change in elevation, such as on fairly level terrain.\"", sourceLessonSlug: "contour-lines" },
          { prompt: "What is the contour interval?", options: ["The distance between two grid lines", "The number of lines in each inch", "The height of the map's top hill", "The height between neighboring lines"], correctIndex: 3, explanation: "The interval is \"the vertical distance between adjacent contour lines\", printed in the margin under the bar scale.", sourceLessonSlug: "contour-lines" },
          { prompt: "On a map with a 10-foot contour interval, how far apart in height are the index lines?", options: ["50 feet", "10 feet", "40 feet", "100 feet"], correctIndex: 0, explanation: "Every fifth line is an index line, so on a 10-foot map index lines are 50 feet apart.", sourceLessonSlug: "contour-lines" },
          { prompt: "What contour interval does the Indianapolis East quad use?", options: ["10 feet", "5 feet", "20 feet", "50 feet"], correctIndex: 1, explanation: "Indianapolis East uses 5 feet; the three southern quads in lesson 3 use 10 feet.", sourceLessonSlug: "contour-lines" },
          { prompt: "On a 10-foot map, a point sits on the second intermediate line above the 700-foot index. What is its elevation?", options: ["702 feet", "750 feet", "720 feet", "740 feet"], correctIndex: 2, explanation: "700 + 2 × 10 = 720 feet. Going up, add the interval for each line.", sourceLessonSlug: "contour-lines" },
          { prompt: "On a 10-foot map, a point sits on the line just below the 750-foot index. What is its elevation?", options: ["760 feet", "745 feet", "700 feet", "740 feet"], correctIndex: 3, explanation: "Going down from the index, subtract one interval: 750 - 10 = 740 feet.", sourceLessonSlug: "contour-lines" },
          { prompt: "How does the Army manual estimate the elevation of a hilltop?", options: ["Add half the interval to the top line", "Add a full interval to the top line", "Take the top line's own elevation", "Double the top line's elevation"], correctIndex: 0, explanation: "\"Add one-half the contour interval to the elevation of the last contour line.\"", sourceLessonSlug: "contour-lines" },
          { prompt: "A hilltop sits inside a closed 780-foot line on a 10-foot map. About how high is it?", options: ["About 790 feet", "About 785 feet", "About 780 feet", "About 800 feet"], correctIndex: 1, explanation: "780 + half of 10 = about 785 feet.", sourceLessonSlug: "contour-lines" },
          { prompt: "A point lies halfway between two contour lines. What does the manual's rule of thumb add?", options: ["A full contour interval", "A quarter of the interval", "Half the contour interval", "Nothing; use the lower one"], correctIndex: 2, explanation: "From a quarter to three quarters of the way across, \"add one-half the contour interval to the last contour line.\"", sourceLessonSlug: "contour-lines" },
          { prompt: "Which way do the tick marks on a depression's contour point?", options: ["Toward higher elevations", "Toward true north", "Toward the nearest road", "Toward lower elevations"], correctIndex: 3, explanation: "\"The tick marks on the contour line forming a depression always point to lower elevations.\"", sourceLessonSlug: "contour-lines" },
          { prompt: "How is a bench mark shown, per the Army manual?", options: ["A black X with its height", "A brown dot with no label", "A blue circle with a flag", "A red star with a number"], correctIndex: 0, explanation: "\"Bench marks, the more accurate of the two, are symbolized by a black X\", with the elevation beside it.", sourceLessonSlug: "contour-lines" },
          { prompt: "What does a one percent slope mean, in the workbook's words?", options: ["One degree of tilt from the level", "One unit of rise per 100 horizontal", "One foot of rise per mile of trail", "One contour line for each inch"], correctIndex: 1, explanation: "\"A one percent slope indicates a rise or drop of one unit over a distance of 100 horizontal units.\"", sourceLessonSlug: "contour-lines" },
          { prompt: "From a 700-foot line to a 750-foot line across 0.25 inch of a 1:24,000 map: what is the slope?", options: ["5 percent", "20 percent", "10 percent", "50 percent"], correctIndex: 2, explanation: "0.25 inch is 500 feet of run; the rise is 50 feet; 50 ÷ 500 = 10 percent.", sourceLessonSlug: "contour-lines" },
          { prompt: "How many terrain features does the Army manual classify?", options: ["Five", "Eight", "Twelve", "Ten"], correctIndex: 3, explanation: "Ten in all: five major, three minor and two made by people (cut and fill).", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "Which list gives the Army manual's five major terrain features?", options: ["Hilltop, valley, ridge, depression, saddle", "Hilltop, spur, draw, cliff, and saddle", "Valley, ridge, cut, fill, and the cliff", "Ridge, spur, draw, valley, and the cut"], correctIndex: 0, explanation: "\"the five major terrain features (hilltop, valley, ridge, depression, and saddle)\".", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "How does a map show a hill?", options: ["Contours shaped like an hourglass", "Contours in concentric circles", "Contours with ticks toward low", "Contours merged into one line"], correctIndex: 1, explanation: "\"A hill is shown on a map by contour lines forming concentric circles. The inside of the smallest closed circle is the hilltop.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "What shape does a saddle normally make on a map?", options: ["A bull's-eye", "A long U-shape", "An hourglass", "A star burst"], correctIndex: 2, explanation: "\"A saddle is normally represented as an hourglass.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "If you stand in a saddle, where is the high ground?", options: ["In all four directions", "In three directions", "In one direction only", "In two opposite directions"], correctIndex: 3, explanation: "\"there is high ground in two opposite directions and lower ground in the other two directions.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "Which way does the closed end of a valley's U or V point?", options: ["Upstream, toward high ground", "Downstream, toward low ground", "Always toward true north", "Toward the nearest road"], correctIndex: 0, explanation: "\"The closed end of the contour line (U or V) always points upstream or toward high ground.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "Which way does the closed end of a ridge's U or V point?", options: ["Toward high ground", "Away from high ground", "Toward the stream", "Toward the north"], correctIndex: 1, explanation: "For a ridge, \"The closed end of the contour line points away from high ground.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "If you stand on the centerline of a ridge, where is the low ground?", options: ["In one direction", "In two directions", "In three directions", "In no direction"], correctIndex: 2, explanation: "On a ridge's centerline you have \"low ground in three directions and high ground in one direction\".", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "How does a map show a depression?", options: ["Open lines, ticks toward high ground", "An hourglass, with no ticks at all", "A V-shape pointing toward the stream", "Closed lines, ticks toward low ground"], correctIndex: 3, explanation: "Depressions are \"closed contour lines that have tick marks pointing toward low ground.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "What is a draw, according to the Army manual?", options: ["A less developed stream course", "A short spur off a main ridge", "A dip between two hilltops", "A cut made through a hillside"], correctIndex: 0, explanation: "\"A draw is a less developed stream course than a valley\", with \"essentially no level ground\".", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "Which feature is \"a short, continuous sloping line of higher ground\" jutting from a ridge?", options: ["A draw", "A spur", "A saddle", "A cliff"], correctIndex: 1, explanation: "\"A spur is a short, continuous sloping line of higher ground, normally jutting out from the side of a ridge.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "How does a map show a cliff?", options: ["Contours spaced far apart", "Contours in concentric rings", "Contours very close or touching", "Contours shaped as an hourglass"], correctIndex: 2, explanation: "A cliff's contours run very close together or touch; where they merge into one line, it carries ticks toward low ground.", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "What is a cut?", options: ["A low area filled for a level roadbed", "A stream channel carved by a flood", "A gap left between two map sheets", "Raised ground cut for a level roadbed"], correctIndex: 3, explanation: "A cut goes through raised ground to give a road or railroad a level bed; a fill builds up a low area.", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "How high must a cut or fill be to appear on the map, per the Army manual?", options: ["At least 10 feet", "At least 5 feet", "At least 20 feet", "At least 50 feet"], correctIndex: 0, explanation: "Cuts and fills are shown \"when they are at least 10 feet high.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "A stack of V's points toward higher index numbers. What are you looking at?", options: ["A ridge or a spur", "A valley or a draw", "A hill or a peak", "A cliff or a cut"], correctIndex: 1, explanation: "Pointing uphill means a valley or draw, where water runs; pointing downhill means a ridge or spur.", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "What does the Army manual's SOSES stand for?", options: ["Slope, outline, shade, edge, symbol", "Size, origin, scale, extent, spacing", "Shape, orientation, size, elevation, slope", "Shape, outline, scale, edge, sight"], correctIndex: 2, explanation: "Compare features by \"their shapes, orientations, sizes, elevations, and slopes.\"", sourceLessonSlug: "landforms-from-contours" },
          { prompt: "Where does a watershed divide usually run, as The River and the Watershed course puts it?", options: ["Along the river", "Along the roads", "Along the coast", "Along high ground"], correctIndex: 3, explanation: "The divide between two watersheds \"usually runs along high ground\". On a topographic map it is a ridgeline you can trace.", sourceLessonSlug: "landforms-from-contours" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Saying where a place is
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "latitude-and-longitude",
      title: "10 · Latitude and longitude on a topographic map",
      section: "3 · Saying where a place is",
      recallContent: [
        {
          prompt: "Which way does the closed end of a valley's U or V point, and a ridge's?",
          answer: "A valley's (and a draw's) points upstream, toward high ground; a ridge's (and a spur's) points away from high ground.",
        },
        {
          prompt: "What shape does a saddle make on a map, and what do you feel standing in one?",
          answer: "An hourglass; high ground in two opposite directions and lower ground in the other two.",
        },
      ],
      body: `**Why a place needs coordinates.** The Army manual starts with a city: "the streets are named and the buildings have numbers. The only thing needed is the address." Out in the woods there is no address, so you need "a uniform and precise system of referencing". There are two on every US Topo map: latitude and longitude, which this lesson covers, and the UTM grid, in lesson 11.

**Two sets of rings.** Latitude measures north or south of the equator. "Lines of latitude run east-west but north-south distances are measured between them." Longitude measures east or west of the prime meridian, which "runs through Greenwich, England". Both are angles: "Each circle is divided into 360 degrees, each degree into 60 minutes, and each minute into 60 seconds." Latitude runs from 0° at the equator to 90° at each pole, so "the direction N or S must always be given"; longitude runs to 180° east and west, and "The direction E or W must always be given." The wildland fire workbook adds that "latitude is always said first."

**What a degree is on the ground.** "The ground distance covered by one degree of latitude is about 111 kilometers (69 miles); one second is equal to about 30 meters (100 feet)." Longitude is different. A degree of longitude is about 111 kilometers only at the equator and "decreases as one moves north or south, until it becomes zero at the poles." The manual's example: one second of longitude is about 30 meters at the equator but "about 24 meters (78 feet)" at the latitude of Washington, DC. The catalog's climate tools course makes the same point in its lesson "3 · Grids, resolution, and what a cell hides": cells defined in degrees shrink toward the poles.

**Three ways to write it.** The workbook lists them: degrees, minutes and seconds, "the most common format that is used on maps"; degrees and decimal minutes, used by aircraft guidance systems; and decimal degrees, used by the National Weather Service and many computer maps. Its conversion: to turn seconds into decimal minutes, divide by 60, so 48° 20' 30" becomes 48° 20.5'; to go back, multiply the decimal by 60. Counting works "the same as counting time on a clock": at 60 seconds, carry a minute; at 60 minutes, carry a degree.

**Where they are on a US Topo.** The map does not draw latitude and longitude lines across its face. The workbook says topographic maps "do not show the latitude/longitude lines", only tick marks along the edges. The four corners carry full values, and "On 1:24,000 scale maps, latitude and longitude tick marks are indicated every 2.5 minutes", with small crosses where the lines would meet inside the map. A 7.5-minute quad is three ticks wide and three tall: 7.5 = 3 × 2.5. To find a point's latitude, draw a line between matching ticks on the two sides, then measure how far the point sits between two lines and divide that gap into equal parts.

**The western hemisphere trap.** In Indiana, longitude is west, so it grows toward the west, the left edge of the map. The workbook's warning: "If the point lies in the western hemisphere, count degrees, minutes and seconds from right to left (east to west)." Many errors are simply counting the wrong way.

**You may have done this before.** The FAA Part 107 course in this catalog teaches latitude and longitude on an aeronautical sectional chart in its module 6, "Sectional Charts", where the scale is 1:500,000. And How We Know What's Out There, in its lesson "1 · Finding yourself by the sky", shows how latitude was found from the stars long before any grid.

:::reveal About how far on the ground is one degree of latitude, and one second? ||| About 111 kilometers (69 miles) for a degree, and about 30 meters (100 feet) for a second.

:::reveal On a 1:24,000 US Topo, how often are latitude and longitude tick marks printed? ||| Every 2.5 minutes, with full values at the four corners.

## Sources
- ${FM_2001} Locator: printed pp. 4-1 to 4-3 (PDF pp. 23 to 25), paragraphs 4-1 and 4-2a to 4-2d.
- ${NWCG_475} Locator: p. 37, "Latitude and Longitude (edges of map)"; pp. 66 to 68, "Latitude/Longitude" and "Counting and Converting Minutes and Seconds".`,
    },
    {
      slug: "the-utm-grid",
      title: "11 · The UTM grid: read right, then up",
      section: "3 · Saying where a place is",
      recallContent: [
        {
          prompt: "About how far on the ground is one degree of latitude?",
          answer: "About 111 kilometers (69 miles); one second is about 30 meters (100 feet). A degree of longitude shrinks toward the poles.",
        },
        {
          prompt: "In the western hemisphere, which way do you count longitude on the map?",
          answer: "From right to left (east to west): longitude west grows toward the map's left edge.",
        },
      ],
      body: `**Why a square grid.** On the projection used for large-scale maps, "most lines of latitude and longitude are curved lines", and the shapes between them differ in size. So a rectangular grid is laid over the map, "a system of squares similar to the block system of most city streets." That grid is the Universal Transverse Mercator, or UTM, and it measures in meters, not degrees.

**Sixty zones.** The UTM grid covers the world "between latitude 84°N and latitude 80°S". It is divided into "60 zones (6 degrees wide)", numbered from west to east starting at the 180° meridian. The workbook adds that the lower 48 states span 10 of them, and the USGS that Zone 1 includes the westernmost point of Alaska and Zone 19 includes Maine. Indiana is in Zone 16, and the USGS gives its center line: "In Zone 16, for example, the central meridian is at 87 degrees longitude west."

**The false origin.** Each zone measures from its central meridian and the equator. Measuring both ways from zero would give negative numbers west of the center line, so the grid assigns "false values" that make every point positive. "The false eating value" (the manual's misprint for easting) "for each central meridian is 500,000 meters, and the false northing value for the equator is 0 meters when measuring in the northern hemisphere". An easting is meters east of a line 500,000 meters west of the central meridian; a northing is meters north of the equator.

**Right, then up.** The manual states its one rule in capitals: "Distances are always measured RIGHT and UP (east and north as the reader faces the map)". This is the coordinate plane from math class. The easting is the x-coordinate, read first, going right; the northing is the y-coordinate, read second, going up; and because of the false origin, every point in the zone sits in the first quadrant, with both numbers positive. Interpreting a coordinate is reading what each number says about the ground:
- An easting of 546,000 meters is 546,000 - 500,000 = **46,000 meters east of the central meridian**, 87° W.
- An easting of 297,480 meters, the workbook's New Hampshire example in Zone 19, is 500,000 - 297,480 = **202,520 meters west** of that zone's central meridian.
- Two made-up points in Zone 16: A at 546,200 m E, 4,370,700 m N; B at 547,500 m E, 4,371,100 m N. B is 547,500 - 546,200 = **1,300 meters east** and 4,371,100 - 4,370,700 = **400 meters north** of A.

**Zone and row.** The manual's grid also has lettered rows, C through X, all but the northernmost 8 degrees high ("I and O were omitted"). A zone number and row letter make a grid zone designation, read right and up, so "the number is always written before the letter". The manual's example is Columbus, Georgia, "grid zone designation 16S". Every quad in lesson 3 prints "Grid Zone Designation 16S" too.

**On the map.** A US Topo draws black grid lines every 1,000 meters, labeled in the margin with shortened numbers. "Note that the large numbers adjacent to the tick marks around the perimeter of the map represent tens of thousands and thousands of meters", says the USGS; the full value is printed near the corners. So a grid line labeled 46 on the Hindustan quad stands for 46,000 meters plus some number of hundred-thousands, and the full value near the corner supplies the rest.

**When the grid arrived: the sources disagree.** The workbook says blue ticks marked the grid "Prior to 1978" and black grid lines appeared "Since 1978". One USGS answer says "Almost all USGS topographic maps produced after 1977 show UTM tick marks ... (or a full-line grid)". Another says blue ticks began in the mid-1950s, "In 1979, the ticks were replaced with a full-line black UTM grid", the decision was "reversed in 1992, then reversed again in 1994", and maps made with the Forest Service "do not show the full grid regardless of their vintage." All agree on the present: "All US Topo maps published after 2009 have a full UTM grid". On an older sheet, look before you rely on it.

:::reveal What does "read right, then up" mean for a UTM coordinate? ||| Read the easting first (meters east, going right), then the northing (meters north, going up), like x and then y on a graph.

:::reveal What false easting does every UTM central meridian carry, and why? ||| 500,000 meters, so that every point in the zone has a positive easting.

## Sources
- ${FM_2001} Locator: printed pp. 4-10 to 4-12 (PDF pp. 32 to 34), paragraphs 4-3a and 4-4.
- ${NWCG_475} Locator: p. 38, "Universal Transverse Mercator (UTM) (edges of map)"; pp. 69 to 71, "UTM Grid Zones" and "UTM Coordinates".
- ${USGS_UTM_MEASURED} Locator: the answer, first and second paragraphs.
- ${USGS_UTM_GRID} Locator: "Historical Topographic Map Collection" and "US Topo maps".
- ${USTOPO_HINDUSTAN} Locator: lower margin, "Grid Zone Designation 16S"; the grid labels along the edges.`,
    },
    {
      slug: "how-precise-is-a-grid-reference",
      title: "12 · How precise is a grid reference?",
      section: "3 · Saying where a place is",
      recallContent: [
        {
          prompt: "What does \"read right, then up\" mean for a UTM coordinate?",
          answer: "Read the easting first (meters east, going right), then the northing (meters north, going up), like x and then y on a graph.",
        },
        {
          prompt: "An easting reads 546,000 meters in Zone 16. What does that say about the place?",
          answer: "It is 546,000 - 500,000 = 46,000 meters east of the zone's central meridian, 87° W.",
        },
      ],
      body: `**More digits, smaller square.** A grid reference does not name a point. It names a square, and the number of digits says how big the square is. The Army manual: "The number of digits represents the degree of precision to which a point has been located and measured on a map, the more digits the more precise the measurement." The workbook's table, for one New Hampshire location:
- **297 4834** (the four-figure style, shortened): a 1,000 m by 1,000 m square.
- **2974 48343**: a 100 m by 100 m square.
- **29748 483436**: a 10 m by 10 m square.
- **297480 4834360**: a 1 m by 1 m square.

The military writes the short forms as one run of digits. "Coordinates are written as one continuous number without spaces, parentheses, dashes, or decimal points; they must always contain an even number of digits", and the reader splits it in half: the first half is right, the second half is up.

**Four, six, eight.** A four-digit reference such as 1484 names a 1,000-meter grid square, and the next square to the right "would be 1584; the next square up would be 1485". To get six digits, "Mentally divide the grid square in tenths": the manual's point X is two tenths right and seven tenths up, so its reference is 142847, good to 100 meters. With a plotting scale you can read hundredths and get eight digits, 14178484, good to 10 meters. The manual's practice: "Normally, grid coordinates are determined to the nearest 100 meters (six digits) for reporting locations," and eight digits for targets.

**Which corner?** A grid reference names the square up and to the right of the lines it quotes. The manual's example, 0182, "gives the location of the southwest corner of grid square 0182". Read it as "start at the southwest corner and go right, then up."

**Choose the precision your measurement can carry.** This is the part that takes judgment. More digits are not more truth; they are a claim about how well you measured.
- **Your pencil.** A pencil line half a millimeter wide on a 1:24,000 map covers 0.5 mm × 24,000 = 12,000 mm, which is **12 meters** of ground. An eight-digit reference read off a paper map by eye is already at the edge of what the paper can show.
- **A phone.** GPS.gov says smartphones are "typically accurate to within a 4.9 m (16 ft.) radius under open sky", and worse under trees or near buildings (lesson 33). A ten-digit, 1-meter reference copied off a phone screen claims more than the phone measured.
- **The workbook.** It says that with UTM "a location can be identified within a meter." That is what the system can express, not what your tools measured.

So report six digits for "here is where we are", eight when the map, the tool and the need justify it, and never more digits than your worst instrument supports.

**The letters in front.** The manual requires the grid zone designation and "the 100,000-meter square identification letters" in any full reference, as in its example 16SGL0182. The workbook calls this the Military Grid Reference System, "an extension of the UTM system", whose "coordinates are 2 to 10 digits which represent a precision range of 10 kilometers to 1 meter." Civilian maps carry the same idea as the U.S. National Grid, a federal standard (FGDC-STD-011-2001) that FEMA chose in a May 28, 2009 memo to "Establish a standard for FEMA operational maps". The Hindustan quad prints its "U.S. National Grid 100,000-m Square ID" as EJ, and the USGS says the grid on every US Topo since 2009 is "implemented in conformance with the U.S. National Grid standard."

**One more system, later.** The section-township-range descriptions of the federal land survey, the grid under many Indiana roads, are a different job, describing land rather than finding your way, and belong to the surveying courses later in this series.

:::reveal How big is the square named by a six-digit grid reference? ||| 100 meters on a side. Four digits name 1,000 m; eight name 10 m.

:::reveal Why is a ten-digit reference copied off a phone usually more precise than the truth? ||| It claims 1 meter, but GPS.gov says a phone is typically good to about 4.9 m under open sky, and worse under trees.

## Sources
- ${FM_2001} Locator: printed pp. 4-17, 4-18 and 4-21 (PDF pp. 39, 40 and 43), paragraphs 4-5a, 4-5b and 4-5e; printed p. 4-23 (PDF p. 45), paragraph 4-6e.
- ${NWCG_475} Locator: p. 69, "Universal Transverse Mercator (UTM)"; p. 71, the table of abbreviated coordinates; p. 77, "Military Grid Reference System (MGRS)".
- ${GPS_ACCURACY} Locator: "How accurate is GPS?", the smartphone sentence.
- ${FGDC_USNG} Locator: the FEMA memorandum of May 28, 2009, and the standard's number.
- ${USGS_UTM_GRID} Locator: "US Topo maps (2010-present)".
- ${USTOPO_HINDUSTAN} Locator: lower margin, the U.S. National Grid box.`,
    },
  ],
};
