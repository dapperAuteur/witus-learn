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
const HNF_RULES =
  "USDA Forest Service. (n.d.). *Rules and regulations*. Hoosier National Forest. https://www.fs.usda.gov/r09/hoosier/about-area/rules-and-regulations";
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
const USGS_NORTH =
  "U.S. Geological Survey. (n.d.-f). *What do the different north arrows on a USGS topographic map mean?* [FAQ]. https://www.usgs.gov/faqs/what-do-different-north-arrows-a-usgs-topographic-map-mean";
const USGS_DECL = "U.S. Geological Survey. (n.d.-g). *What is declination?* [FAQ]. https://www.usgs.gov/faqs/what-declination";
// NCEI (Tier A, federal; the WMM source code is stated public domain), read 2026-10-14.
const NCEI_DECL =
  "National Centers for Environmental Information. (n.d.-a). *Magnetic declination*. National Oceanic and Atmospheric Administration. https://www.ncei.noaa.gov/products/magnetic-declination";
const NCEI_WMM =
  "National Centers for Environmental Information. (n.d.-b). *World Magnetic Model (WMM)*. National Oceanic and Atmospheric Administration. https://www.ncei.noaa.gov/products/world-magnetic-model";
const NCEI_WMM_ACC =
  "National Centers for Environmental Information. (n.d.-c). *World Magnetic Model accuracy, limitations, and error model*. National Oceanic and Atmospheric Administration. https://www.ncei.noaa.gov/products/world-magnetic-model/accuracy-limitations-error-model";
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
- ${GPS_ACCURACY} Locator: "GPS Accuracy FAQs", "How Accurate is GPS?", the smartphone sentence.
- ${FGDC_USNG} Locator: the FEMA memorandum of May 28, 2009, and the standard's number.
- ${USGS_UTM_GRID} Locator: "US Topo maps (2010-present)".
- ${USTOPO_HINDUSTAN} Locator: lower margin, the U.S. National Grid box.`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Saying where a place is",
      section: "3 · Saying where a place is",
      body: "A graded check on latitude and longitude, the UTM grid, and how precise a grid reference is. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Why does the Army manual say places in the woods need a referencing system?", options: ["There are no street names or numbers", "Paper maps are not allowed in a city", "GPS works only on paved city streets", "Trails change their names each year"], correctIndex: 0, explanation: "In a city \"the streets are named and the buildings have numbers. The only thing needed is the address.\" Undeveloped areas need \"a uniform and precise system of referencing\".", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Which two coordinate systems appear on every US Topo map?", options: ["Township-range and a street grid", "Latitude-longitude and the UTM grid", "State plane and the old Army grid", "Mile markers and the county grid"], correctIndex: 1, explanation: "Lesson 10 covers latitude and longitude; lesson 11 the UTM grid. Both are on every US Topo.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "What does latitude measure?", options: ["Distance east or west of Greenwich", "Height above the mean sea level", "Distance north or south of the equator", "The angle east of magnetic north"], correctIndex: 2, explanation: "Latitude is the distance north or south of the equator. \"Lines of latitude run east-west but north-south distances are measured between them.\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Where does the prime meridian of the system we use run?", options: ["Through Washington, DC", "Through Paris, France", "Through the North Pole", "Through Greenwich, England"], correctIndex: 3, explanation: "\"The prime meridian of the system we use runs through Greenwich, England and is known as the Greenwich meridian.\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "How is each degree of latitude or longitude divided?", options: ["Into 60 minutes of 60 seconds", "Into 100 minutes of 100 seconds", "Into 10 minutes of 60 seconds", "Into 60 minutes of 100 seconds"], correctIndex: 0, explanation: "\"Each circle is divided into 360 degrees, each degree into 60 minutes, and each minute into 60 seconds.\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Why must N or S always be given with a latitude?", options: ["Northern maps use a different scale", "The same number occurs on both sides", "The equator is numbered 90 degrees", "The poles have no latitude at all"], correctIndex: 1, explanation: "\"Latitude can have the same numerical value north or south of the equator, so the direction N or S must always be given.\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "How far does longitude run east and west of the prime meridian?", options: ["To 90 degrees each way", "To 360 degrees each way", "To 180 degrees each way", "To 60 degrees each way"], correctIndex: 2, explanation: "Longitude runs to 180° east and 180° west; latitude runs to 90° north and south.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Which coordinate does the workbook say is always said first?", options: ["Longitude", "Easting", "Northing", "Latitude"], correctIndex: 3, explanation: "The workbook: \"latitude is always said first.\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "About how far on the ground is one degree of latitude?", options: ["About 111 km (69 miles)", "About 30 km (19 miles)", "About 1.6 km (1 mile)", "About 160 km (100 miles)"], correctIndex: 0, explanation: "\"The ground distance covered by one degree of latitude is about 111 kilometers (69 miles)\".", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "About how far on the ground is one second of latitude?", options: ["About 3 meters (10 feet)", "About 30 meters (100 feet)", "About 111 meters (364 feet)", "About 1 meter (3 feet)"], correctIndex: 1, explanation: "\"one second is equal to about 30 meters (100 feet).\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "What happens to the ground length of a degree of longitude away from the equator?", options: ["It grows, doubling at the poles", "It stays about 111 km everywhere", "It shrinks, to zero at the poles", "It shrinks, then grows past 60°"], correctIndex: 2, explanation: "It is about 111 km at the equator and \"decreases as one moves north or south, until it becomes zero at the poles.\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "How long is one second of longitude at the latitude of Washington, DC, per the Army manual?", options: ["About 30 meters (100 feet)", "About 12 meters (39 feet)", "About 48 meters (157 feet)", "About 24 meters (78 feet)"], correctIndex: 3, explanation: "One second of longitude is about 30 meters at the equator but \"about 24 meters (78 feet)\" at Washington's latitude.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Which format does the workbook call the most common on maps?", options: ["Degrees, minutes and seconds", "Decimal degrees only", "Degrees, decimal minutes", "Meters east and north"], correctIndex: 0, explanation: "Degrees, minutes and seconds is \"the most common format that is used on maps\"; decimal minutes are used by aircraft systems and decimal degrees by the Weather Service and many computer maps.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Convert 48° 20' 30\" to degrees and decimal minutes.", options: ["48° 20.3'", "48° 20.5'", "48° 23.0'", "48° 2.05'"], correctIndex: 1, explanation: "Divide the seconds by 60: 30 ÷ 60 = 0.5, so 48° 20.5'.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Convert 48° 20.5' back to degrees, minutes and seconds.", options: ["48° 20' 50\"", "48° 20' 05\"", "48° 20' 30\"", "48° 25' 00\""], correctIndex: 2, explanation: "Multiply the decimal by 60: 0.5 × 60 = 30 seconds, so 48° 20' 30\".", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "What does the workbook compare counting minutes and seconds to?", options: ["Counting money in a till", "Counting steps in a pace", "Counting lines on a ruler", "Counting time on a clock"], correctIndex: 3, explanation: "Counting \"is the same as counting time on a clock\": at 60 seconds carry a minute, at 60 minutes carry a degree.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "How does a US Topo map show latitude and longitude?", options: ["Tick marks at the edges, not full lines", "Full black lines drawn across the map", "Blue lines every half degree or so", "Only in a table printed on the back"], correctIndex: 0, explanation: "Topographic maps \"do not show the latitude/longitude lines\", only tick marks along the edges, with full values at the corners.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "How often are latitude and longitude ticks printed on a 1:24,000 map?", options: ["Every 7.5 minutes", "Every 2.5 minutes", "Every 1 minute", "Every 5 minutes"], correctIndex: 1, explanation: "\"On 1:24,000 scale maps, latitude and longitude tick marks are indicated every 2.5 minutes.\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "How many 2.5-minute spaces does a 7.5-minute quad span in each direction?", options: ["Two", "Five", "Three", "Six"], correctIndex: 2, explanation: "7.5 = 3 × 2.5, so the quad is three tick spaces wide and three tall.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "In the western hemisphere, which way does the workbook say to count longitude on the map?", options: ["Left to right, west to east", "Bottom to top, south to north", "Top to bottom, north to south", "Right to left, east to west"], correctIndex: 3, explanation: "\"If the point lies in the western hemisphere, count degrees, minutes and seconds from right to left (east to west).\"", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Which catalog course teaches latitude and longitude on an aeronautical sectional chart?", options: ["The FAA Part 107 course", "The surveying course", "The river expedition", "The climate tools one"], correctIndex: 0, explanation: "The FAA Part 107 course teaches it in module 6, \"Sectional Charts\", where the scale is 1:500,000.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "What does How We Know What's Out There's first lesson show about latitude?", options: ["It was set by the first GPS", "It was found from the stars", "It was fixed by the Army in 1900", "It was copied from road maps"], correctIndex: 1, explanation: "Its lesson \"1 · Finding yourself by the sky\" shows how latitude was found from the stars long before any grid.", sourceLessonSlug: "latitude-and-longitude" },
          { prompt: "Why is a square grid laid over a large-scale map?", options: ["Paper maps cannot show any angles", "Degrees are too small to be useful", "Latitude and longitude lines curve", "Grids replaced the compass in 1950"], correctIndex: 2, explanation: "On the projection, \"most lines of latitude and longitude are curved lines\", so a rectangular grid is superimposed, \"similar to the block system of most city streets.\"", sourceLessonSlug: "the-utm-grid" },
          { prompt: "In what unit does the UTM grid measure?", options: ["Degrees", "Miles", "Paces", "Meters"], correctIndex: 3, explanation: "UTM measures in meters, not degrees.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "Between which latitudes does the UTM grid run?", options: ["84° N and 80° S", "90° N and 90° S", "80° N and 84° S", "60° N and 60° S"], correctIndex: 0, explanation: "The UTM grid covers the world \"between latitude 84°N and latitude 80°S\".", sourceLessonSlug: "the-utm-grid" },
          { prompt: "How many UTM zones are there, and how wide is each?", options: ["24 zones, each 15 degrees wide", "60 zones, each 6 degrees wide", "36 zones, each 10 degrees wide", "90 zones, each 4 degrees wide"], correctIndex: 1, explanation: "The globe is divided into \"60 zones (6 degrees wide)\".", sourceLessonSlug: "the-utm-grid" },
          { prompt: "How many UTM zones does the workbook say the lower 48 states span?", options: ["6", "4", "10", "19"], correctIndex: 2, explanation: "\"The contiguous 48 states has 10 zones.\"", sourceLessonSlug: "the-utm-grid" },
          { prompt: "Which UTM zone is Indiana in?", options: ["Zone 17", "Zone 15", "Zone 19", "Zone 16"], correctIndex: 3, explanation: "Indiana is in Zone 16; every quad in lesson 3 prints \"Grid Zone Designation 16S\". Zone 19 includes Maine.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "What is the central meridian of UTM Zone 16, per the USGS?", options: ["87 degrees west", "86 degrees west", "84 degrees west", "90 degrees west"], correctIndex: 0, explanation: "\"In Zone 16, for example, the central meridian is at 87 degrees longitude west.\"", sourceLessonSlug: "the-utm-grid" },
          { prompt: "What false easting does every UTM central meridian carry?", options: ["1,000 meters", "500,000 meters", "10,000,000 meters", "100,000 meters"], correctIndex: 1, explanation: "\"The false eating value\" (a misprint for easting) \"for each central meridian is 500,000 meters\".", sourceLessonSlug: "the-utm-grid" },
          { prompt: "Why does the UTM grid use a false easting?", options: ["So every zone is the same size", "So the equator is at zero", "So every easting is positive", "So north is always at top"], correctIndex: 2, explanation: "False values eliminate negative numbers, \"resulting in positive values for all points within each zone.\"", sourceLessonSlug: "the-utm-grid" },
          { prompt: "What is the false northing of the equator in the northern hemisphere?", options: ["500,000 meters", "10,000,000 meters", "1,000 meters", "0 meters exactly"], correctIndex: 3, explanation: "It is \"0 meters when measuring in the northern hemisphere and 10,000,000 meters when measuring in the southern hemisphere.\"", sourceLessonSlug: "the-utm-grid" },
          { prompt: "What is the Army manual's one rule for reading UTM distances?", options: ["Always right, then up", "Always up, then right", "Always left, then down", "Always north, then east"], correctIndex: 0, explanation: "\"Distances are always measured RIGHT and UP (east and north as the reader faces the map)\".", sourceLessonSlug: "the-utm-grid" },
          { prompt: "On the coordinate plane, which UTM number plays the part of x?", options: ["The northing", "The easting", "The zone number", "The row letter"], correctIndex: 1, explanation: "The easting is the x-coordinate, read first, going right; the northing is the y-coordinate, read second, going up.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "In which quadrant of the coordinate plane does every point in a UTM zone sit?", options: ["The second, easting negative", "The fourth, northing negative", "The first, both numbers positive", "Any of the four, by location"], correctIndex: 2, explanation: "Because of the false origin, every point in the zone sits in the first quadrant, with both numbers positive.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "An easting reads 546,000 m in Zone 16. Where is that, relative to the central meridian?", options: ["46,000 meters west of it", "546,000 meters east of it", "54,600 meters east of it", "46,000 meters east of it"], correctIndex: 3, explanation: "546,000 - 500,000 = 46,000 meters east of the central meridian, 87° W.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "The workbook's New Hampshire point has an easting of 297,480 m. Where is it?", options: ["202,520 m west of the central meridian", "202,520 m east of the central meridian", "297,480 m east of the central meridian", "297,480 m west of the central meridian"], correctIndex: 0, explanation: "500,000 - 297,480 = 202,520 meters west of Zone 19's central meridian.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "A is at 546,200 m E, 4,370,700 m N; B is at 547,500 m E, 4,371,100 m N. Where is B from A?", options: ["400 m east and 1,300 m north", "1,300 m east and 400 m north", "1,300 m west and 400 m south", "13,000 m east and 4,000 m north"], correctIndex: 1, explanation: "547,500 - 546,200 = 1,300 meters east; 4,371,100 - 4,370,700 = 400 meters north.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "What does a UTM northing measure in the northern hemisphere?", options: ["Meters north of the zone's top", "Meters north of the map's edge", "Meters north of the equator", "Degrees north of the equator"], correctIndex: 2, explanation: "A northing is meters north of the equator, which has a false northing of 0 in the northern hemisphere.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "Which letters did the Army's grid rows leave out?", options: ["A and B", "Y and Z", "Q and U", "I and O"], correctIndex: 3, explanation: "The rows run C through X, and \"I and O were omitted\".", sourceLessonSlug: "the-utm-grid" },
          { prompt: "In a grid zone designation such as 16S, why does the number come first?", options: ["It is read right, then up", "Numbers always precede letters", "The letter is the map's sheet", "The number names the row band"], correctIndex: 0, explanation: "Zone and row are read right and up, \"so the number is always written before the letter\".", sourceLessonSlug: "the-utm-grid" },
          { prompt: "Which grid zone designation does the Army manual give for Columbus, Georgia?", options: ["17S", "16S", "16T", "15R"], correctIndex: 1, explanation: "\"Columbus lies in zone 16 and row S, or in grid zone designation 16S\". The Indiana quads print 16S too.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "How far apart are the black grid lines on a US Topo map?", options: ["100 meters", "1 mile", "1,000 meters", "2.5 minutes"], correctIndex: 2, explanation: "A US Topo draws black grid lines every 1,000 meters, labeled in the margin with shortened numbers.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "What do the large numbers beside the grid ticks on a USGS map represent?", options: ["Hundreds and tens of meters from the edge", "Degrees and minutes of longitude only", "Elevations of the nearest index lines", "Tens of thousands and thousands of meters"], correctIndex: 3, explanation: "\"Note that the large numbers adjacent to the tick marks around the perimeter of the map represent tens of thousands and thousands of meters.\"", sourceLessonSlug: "the-utm-grid" },
          { prompt: "When did black UTM grid lines arrive on USGS maps, according to the workbook?", options: ["Since 1978", "Since 1956", "Since 1994", "Since 2009"], correctIndex: 0, explanation: "The workbook says blue ticks marked the grid \"Prior to 1978\" and black grid lines appeared \"Since 1978\". USGS answers give 1977 and 1979.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "According to one USGS answer, when were blue ticks replaced with a full black UTM grid?", options: ["In 1956", "In 1979", "In 1992", "In 2010"], correctIndex: 1, explanation: "\"In 1979, the ticks were replaced with a full-line black UTM grid\", a decision reversed in 1992 and again in 1994.", sourceLessonSlug: "the-utm-grid" },
          { prompt: "Which USGS maps do not show the full grid regardless of vintage?", options: ["Those printed before World War I", "Those of Alaska and Puerto Rico", "Those made with the Forest Service", "Those at a scale of 1:24,000"], correctIndex: 2, explanation: "Maps \"published over National Forests in cooperation with the U.S. Forest Service do not show the full grid regardless of their vintage.\"", sourceLessonSlug: "the-utm-grid" },
          { prompt: "What do all the sources agree about US Topo maps after 2009?", options: ["They show no UTM grid at all", "They use blue grid ticks only", "They print a grid every mile", "They have a full UTM grid"], correctIndex: 3, explanation: "\"All US Topo maps published after 2009 have a full UTM grid\".", sourceLessonSlug: "the-utm-grid" },
          { prompt: "What does a grid reference name, according to lesson 12?", options: ["A square, sized by its digits", "An exact point, to the meter", "A trail, by its marked name", "A quad, by its sheet number"], correctIndex: 0, explanation: "\"A grid reference does not name a point. It names a square, and the number of digits says how big the square is.\"", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "How does the Army manual connect digits and precision?", options: ["The fewer digits, the more precise", "The more digits, the more precise", "Digits show the map's scale only", "Digits show the map's edition"], correctIndex: 1, explanation: "\"the more digits the more precise the measurement.\"", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "How big is the square named by a four-figure grid reference?", options: ["100 meters on a side", "10 meters on a side", "1,000 meters on a side", "10 kilometers on a side"], correctIndex: 2, explanation: "Four digits name a 1,000-meter grid square, such as 1484.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "How big is the square named by a six-digit grid reference?", options: ["10 meters on a side", "1,000 meters on a side", "1 meter on a side", "100 meters on a side"], correctIndex: 3, explanation: "Six digits locate a point to the nearest 100 meters.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "How big is the square named by an eight-digit grid reference?", options: ["10 meters on a side", "1 meter on a side", "100 meters on a side", "1,000 meters on a side"], correctIndex: 0, explanation: "Eight digits locate a point to the nearest 10 meters.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "In the workbook's table, what does 297480 4834360 describe?", options: ["A 10 m by 10 m square", "A 1 m by 1 m square", "A 100 m by 100 m square", "A 1 km by 1 km square"], correctIndex: 1, explanation: "The full values describe a 1 m by 1 m square; 29748 483436 is 10 m and 2974 48343 is 100 m.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "Why must a military grid reference always have an even number of digits?", options: ["Odd numbers are bad luck", "Each digit is a full meter", "The reader splits it in half", "The zone takes one digit"], correctIndex: 2, explanation: "Coordinates \"must always contain an even number of digits\", and the reader splits them: first half right, second half up.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "If the grid square is 1484, what is the next square to the right?", options: ["1485", "1483", "1384", "1584"], correctIndex: 3, explanation: "\"the next square to the right would be 1584; the next square up would be 1485\".", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "If the grid square is 1484, what is the next square up?", options: ["1485", "1584", "1474", "1494"], correctIndex: 0, explanation: "Up adds one to the second half: 1485.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "Point X is two tenths right and seven tenths up in square 1484. What is its six-digit reference?", options: ["147842", "142847", "148427", "142874"], correctIndex: 1, explanation: "Right first: 14 and 2 make 142; then up: 84 and 7 make 847. Together, 142847.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "To how many digits does the Army manual normally report a location?", options: ["Four, to the nearest kilometer", "Eight, to the nearest 10 meters", "Six, to the nearest 100 meters", "Ten, to the nearest meter"], correctIndex: 2, explanation: "\"Normally, grid coordinates are determined to the nearest 100 meters (six digits) for reporting locations.\"", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "Which corner of a grid square does a grid reference start from?", options: ["The northeast corner", "The northwest corner", "The square's center", "The southwest corner"], correctIndex: 3, explanation: "The manual's 0182 \"gives the location of the southwest corner of grid square 0182\": start there and go right, then up.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "A pencil line 0.5 mm wide on a 1:24,000 map covers how much ground?", options: ["About 12 meters", "About 1.2 meters", "About 120 meters", "About 24 meters"], correctIndex: 0, explanation: "0.5 mm × 24,000 = 12,000 mm, which is 12 meters.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "How accurate does GPS.gov say smartphones typically are under open sky?", options: ["Within a 1 cm radius", "Within a 4.9 m radius", "Within a 49 m radius", "Within a 0.5 m radius"], correctIndex: 1, explanation: "Smartphones \"are typically accurate to within a 4.9 m (16 ft.) radius under open sky\", and worse near buildings, bridges and trees.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "Why does a ten-digit reference copied off a phone usually claim too much?", options: ["It claims 10 m; the phone measures 1 m", "Phones cannot show UTM coordinates", "It claims 1 m; the phone measures ~4.9 m", "Ten digits name a 100-meter square"], correctIndex: 2, explanation: "Ten digits claim 1 meter, but a phone is typically good to about 4.9 m under open sky.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "The workbook says UTM can identify a location within a meter. What does lesson 12 make of that?", options: ["Every phone and map can measure to a meter", "Only Army maps can reach a single meter", "The workbook is wrong; UTM stops at 100 m", "The system can say it; tools rarely measure it"], correctIndex: 3, explanation: "\"That is what the system can express, not what your tools measured.\"", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "What rule does lesson 12 give for how many digits to report?", options: ["No more than your worst tool supports", "Always ten, to be safe and precise", "Always four, to keep it simple", "As many as the phone screen shows"], correctIndex: 0, explanation: "\"never more digits than your worst instrument supports.\"", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "In the Army manual's example 16SGL0182, what is GL?", options: ["The map's sheet name, shortened", "The 100,000-meter square letters", "The grid zone's row band letter", "The declination code for the map"], correctIndex: 1, explanation: "16S is the grid zone designation and GL the 100,000-meter square identification letters, which the manual requires in any full reference.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "How does the workbook describe the Military Grid Reference System?", options: ["A rival of the UTM, in degrees", "A grid used only by the Navy", "An extension of the UTM system", "The land survey's township grid"], correctIndex: 2, explanation: "MGRS \"is an extension of the UTM system\", with \"coordinates are 2 to 10 digits which represent a precision range of 10 kilometers to 1 meter.\"", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "What precision range does the workbook give for MGRS references of 2 to 10 digits?", options: ["1 kilometer to 1 centimeter", "100 meters to 10 meters", "100 kilometers to 1 meter", "10 kilometers to 1 meter"], correctIndex: 3, explanation: "Its coordinates \"are 2 to 10 digits which represent a precision range of 10 kilometers to 1 meter.\"", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "What is the federal standard number for the U.S. National Grid?", options: ["FGDC-STD-011-2001", "FGDC-STD-001-2011", "FM 3-25.26 (2001)", "NWCG PMS 475"], correctIndex: 0, explanation: "The U.S. National Grid is FGDC-STD-011-2001.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "What did FEMA's May 28, 2009 memo set the U.S. National Grid as?", options: ["The only grid allowed on any map", "A standard for its operational maps", "A replacement for all of latitude", "A grid for its flood insurance"], correctIndex: 1, explanation: "The memo's priority: \"Establish a standard for FEMA operational maps using the US National Grid System\".", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "What U.S. National Grid 100,000-meter square ID does the Hindustan quad print?", options: ["GL", "EK", "EJ", "SG"], correctIndex: 2, explanation: "Hindustan prints \"U.S. National Grid 100,000-m Square ID\" EJ. GL is the square in the Army manual's Georgia example.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "What does the USGS say about the grid on US Topo maps since 2009?", options: ["It replaced UTM with state plane grids", "It is drawn only in National Forests", "It uses the Army's old row letters only", "It conforms to the US National Grid"], correctIndex: 3, explanation: "The grid on every US Topo since 2009 is \"implemented in conformance with the U.S. National Grid standard.\"", sourceLessonSlug: "how-precise-is-a-grid-reference" },
          { prompt: "Where does lesson 12 send the section-township-range land survey?", options: ["To the surveying courses in this series", "To lesson 11, as a kind of UTM grid", "To the final quiz, as a bonus topic", "Nowhere; the course ignores it all"], correctIndex: 0, explanation: "Land survey descriptions describe land rather than find your way, and belong to the surveying courses later in this series.", sourceLessonSlug: "how-precise-is-a-grid-reference" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: The compass
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "parts-of-a-compass",
      title: "13 · Parts of a baseplate compass, and a lensatic beside it",
      section: "4 · The compass",
      recallContent: [
        {
          prompt: "How big is the square named by a six-digit grid reference, and when does the Army manual use six digits?",
          answer: "100 meters on a side; six digits are its normal precision \"for reporting locations.\"",
        },
        {
          prompt: "Why is a ten-digit reference copied off a phone usually more precise than the truth?",
          answer: "It claims 1 meter, but GPS.gov says a phone is typically good to about 4.9 m under open sky, and worse under trees.",
        },
      ],
      body: `${P("BAM names each part on camera, first on his baseplate compass with a declination adjustment, then on his lensatic compass, holding the two side by side")}

**What a compass does, and does not.** The wildland fire workbook: a compass "uses a magnet, mounted on a pivot that turns in response to the earth's magnetic field, to determine direction (but not position)." Direction is all it gives you. Position comes from the map, the ground and the methods in section 5.

**The baseplate compass, part by part.** The workbook names these (p. 82):
- **Magnetic needle.** It "typically has a red end that points to magnetic north, as long as the compass is being used properly and there is no local magnetic attraction."
- **Housing with cardinal points and degrees.** a revolving dial showing "the cardinal points (at least north, east, south, and west)" and degrees from 0 to 360, turned "to line up the compass needle with the orienting arrow when taking a bearing."
- **Orienting arrow.** The outlined arrow inside the housing, "used to align the magnetic needle when taking a bearing. It is also what is adjusted to set the compass for magnetic declination."
- **Orienting lines.** They run parallel to the orienting arrow and line the dial up with grid lines on a map. "When the declination is set on a compass with an adjustment screw, the orienting lines no longer parallel the orienting arrow."
- **Index line.** On the front of the plate, "where you read the indicated bearing."
- **Direction of travel arrow.** "used for sighting and following bearings. The arrow should be pointed in the direction of the destination or landmark."
- **Base plate.** The clear plate everything sits on, which "can be used as a ruler to measure map distances", sometimes with a protractor.
- **Optional extras:** a magnifying lens, a declination adjustment screw (or an internal adjustment), a clinometer for slope, and a sighting mirror, which "can improve accuracy when reading bearings" and "can also be used for signaling."

**The lensatic compass, for comparison.** The Army manual's compass "consists of three major parts: the cover, the base, and the lens."
- **Cover:** protects the dial and carries "the sighting wire (front sight) and two luminous sighting slots or dots used for night navigation."
- **Base:** a floating dial whose arrow "always points to magnetic north", with "two scales; the outer scale denotes mils and the inner scale (normally in red) denotes degrees"; a fixed black index line; a bezel ring that "contains 120 clicks when rotated fully; each click is equal to 3°", with a short luminous line; and a thumb loop.
- **Lens:** for reading the dial, with the rear-sight slot. Closed, it locks the dial; it "must be opened more than 45° to allow the dial to float freely."

**Degrees and mils.** The lensatic's outer scale is in mils. "A circle equals 6400 mils divided by 360 degrees, or 17.78 mils per degree." The Hindustan quad prints its declination both ways: 4°28' is 79 mils, because 4.47 × 17.78 is about 79.

**The two side by side.** On a baseplate you turn the housing until the needle sits in the orienting arrow, then read the bearing at the index line. On a lensatic the dial floats on its own and you read it through the lens under the index line. The baseplate's clear plate lies flat on a map and works as a protractor and ruler; the lensatic's straightedge carries a coordinate scale, "1:50,000 in newer compasses", with a warning that "Some older compasses will have a 1:25,000 scale." Neither scale is the 1:24,000 of a US Topo, so measure distance with the map's bar scale.

:::reveal Which part of a baseplate compass do you turn to set it for declination? ||| The orienting arrow: the workbook says "It is also what is adjusted to set the compass for magnetic declination."

:::reveal How many degrees is one click of a lensatic compass's bezel ring? ||| 3°, with 120 clicks in a full turn.

## Sources
- ${NWCG_475} Locator: p. 81, chapter 4 introduction; p. 82, "Parts of a Compass"; p. 83, Figure 4-1.
- ${FM_2001} Locator: printed pp. 9-1 and 9-2 (PDF pp. 110 and 111), paragraphs 9-1 and 9-2; printed p. 6-1 (PDF p. 64), paragraph 6-1b.
- ${USTOPO_HINDUSTAN} Locator: lower margin, the declination diagram (degrees and mils).`,
    },
    {
      slug: "choosing-a-compass",
      title: "14 · What to look for in a compass",
      section: "4 · The compass",
      recallContent: [
        {
          prompt: "Which part of a baseplate compass is adjusted to set it for declination?",
          answer: "The orienting arrow. Once declination is set with a screw, the orienting lines no longer run parallel to it.",
        },
        {
          prompt: "What are the three major parts of a lensatic compass?",
          answer: "The cover (sighting wire and luminous dots), the base (floating dial, index line, bezel ring of 3° clicks, thumb loop) and the lens (with the rear-sight slot).",
        },
      ],
      body: `${P("BAM shows each feature below on his two compasses, and runs the buyer's checks on camera: the needle settling, the dial turning, and the declination setting being changed and locked")}

**Why a lesson on buying.** You will choose your own compass, and this course names no brands and quotes no prices. What it can give you is the list of features the two backbone documents rely on, and the checks the Army manual makes on any compass before trusting it.

**First feature: a declination adjustment.** The workbook's list of materials begins "Compass with adjustment for magnetic declination". It explains the choice: "Either the map or the compass needs to be adjusted for declination. It is generally easier to adjust the compass for declination, rather than the map." It also warns that designs differ: "Some compasses have a declination screw that can be turned which rotates the orienting arrow. Others require the rotation of the center of the case so the orienting arrow is offset by declination. Some compasses are automatically adjusted." Whatever the design, the workbook says to "refer to the owner's manual for specific instructions." Look for a setting you can read in degrees and that stays put once set. Lesson 17 shows what it saves you: the arithmetic and its sign errors.

**For map work: a clear base plate.** The workbook's baseplate compass doubles as a ruler and protractor on the map: the plate "can be used as a ruler to measure map distances", and "Some compasses will have a protractor on the baseplate that can be used to determine bearings from a map." Look for:
- **Orienting lines** in the housing, to line the dial up with the map's grid lines (lesson 21).
- **A ruler or map scale on the plate.** If it carries map scales, check that one matches the 1:24,000 of a US Topo. The Army manual shows why: its lensatic's coordinate scale is 1:50,000 on newer compasses, "Some older compasses will have a 1:25,000 scale", and the values must then be adjusted. "Check the scale."
- **A dial marked in degrees from 0 to 360**, fine enough to read to the nearest degree or two. The manual reads map azimuths "to the nearest degree".

**Useful, not required.** A magnifying lens "for reading tiny map symbols"; a sighting mirror, which "can improve accuracy when reading bearings" and doubles as a signal; a clinometer, which this course does not use.

**The lensatic's strengths.** The Army's compass has features built for the dark and for sighting: the "two luminous sighting slots or dots used for night navigation", a bezel ring whose 3° clicks let you set a bearing by feel (lesson 30), and a sighting wire and slot for the compass-to-cheek technique, which the manual calls "the best technique" for sighting. What the manual's compass does not have is a declination setting: it handles declination by arithmetic with the grid-magnetic angle (lesson 17).

**Batteries.** The workbook teaches the baseplate compass partly because it "does not require batteries." Electronic compasses exist, and phones carry one, but a magnetic needle keeps working when the battery does not.

**Checks before you trust it.** The Army manual: "A detailed inspection is required when first obtaining and using a compass. One of the most important parts to check is the floating dial, which contains the magnetic needle." It wants the sighting wire straight, the glass unbroken, "the numbers on the dial are readable, and most important, that the dial does not stick." For a baseplate compass, the same checks are: does the needle swing freely and settle, does the housing turn smoothly, can you read every mark, and does the declination setting hold. The manual also checks accuracy "on a known line of direction", and says "Compasses with more than 3° + variation should not be used."

:::reveal Which compass feature does the workbook list first, and why? ||| A declination adjustment: it is "generally easier to adjust the compass for declination, rather than the map."

:::reveal According to the Army manual, what is the most important check on a new compass? ||| That the dial (the magnetic needle) does not stick.

## Sources
- ${NWCG_475} Locator: p. ix, the list of materials; p. 81, chapter 4 introduction; p. 82, "Parts of a Compass"; p. 86, "Adjusting a Compass".
- ${FM_2001} Locator: printed pp. 9-2 and 9-3 (PDF pp. 111 and 112), paragraphs 9-2a, 9-2c, 9-3a and 9-3c; printed p. 9-4 (PDF p. 113), paragraph 9-4b note; printed p. 6-7 (PDF p. 70), paragraph 6-5b note.`,
    },
    {
      slug: "holding-it-and-what-pulls-the-needle",
      title: "15 · Holding it, and what pulls the needle",
      section: "4 · The compass",
      recallContent: [
        {
          prompt: "Which compass feature does the workbook list first, and why?",
          answer: "A declination adjustment, because it is \"generally easier to adjust the compass for declination, rather than the map.\"",
        },
        {
          prompt: "What does the Army manual call the most important check on a new compass?",
          answer: "That the dial, which carries the magnetic needle, \"does not stick.\" It also says compasses off by more than 3° should not be used.",
        },
      ],
      body: `${P("BAM shows the hold for each compass, then walks toward a parked car and a wire fence with the compass level in front of him so the camera can see the needle swing")}

**A small error grows.** The workbook opens its tips with the reason they matter: "A small error when using a compass can result in a significant error in measurement on the ground." Lesson 17 puts a number on it.

**How to hold a baseplate compass.** The workbook's tips (p. 84):
- "Hold the compass level and steady so the needle swings freely."
- "Hold the compass about waist high in front of the body, except when using a compass with a sighting mirror or a sighting type compass."
- "Raise and lower eyes when taking a bearing, do not move your head. Always use the same eye when taking bearings."
- "Directly face object that is being measured."
- "Take bearing twice."
- "Follow the direction of travel arrow, not the compass needle, when walking a bearing."

**How to hold a lensatic.** The Army manual's preferred hold is the centerhold technique: open the compass fully, thumb through the thumb loop, steady it with both hands, and "Pull your elbows firmly into your sides; this will place the compass between your chin and your belt. To measure an azimuth, simply turn your entire body toward the object". The manual lists its advantages, among them that "It is faster and easier to use" and "It can be used under all conditions of visibility." For sighting a distant object precisely, it uses the compass-to-cheek technique instead.

**What pulls the needle.** A compass needle points along the magnetic field where it sits, and nearby iron changes that field. The workbook: "Avoid taking readings near magnetic fields such as steel, iron (ferrous metals), vehicles, rebar, and clipboards. Even belt buckles, glasses, and rings can interfere with the compass reading." The USGS fact sheet's list: "pocket knives, belt buckles, railroad tracks, trucks, electrical lines, and so forth". Not every metal matters; the Army manual says "nonmagnetic metals and alloys do not affect compass readings."

**How far to stand off.** The manual gives separation distances for its soldiers, and three translate directly to a civilian walk:
- High-tension power lines: **55 meters**.
- A field gun, truck or tank: **18 meters**. Read that as your car at the trailhead.
- Telegraph or telephone wires and barbed wire: **10 meters**. Read that as a wire fence.

Its last two lines, a machine gun at 2 meters and a steel helmet or rifle at half a meter, make the same point at arm's length: keep steel off your body and out of your hand while you read.

**When the ground itself pulls.** Sometimes the cause is underground. The World Magnetic Model behind every declination value describes only the large-scale field from Earth's core, and NCEI says "Some local, regional, and temporal magnetic declination anomalies can exceed 10 degrees", while anomalies "of the order of 3 or 4 degrees are not uncommon but are usually of small spatial extent." Lesson 16 explains the model; for now, if two careful readings from spots a few meters apart disagree, suspect the ground or something you are carrying.

**Orienting the compass, or "boxing the needle".** The workbook's first exercise: set 0° (or 360°) at the index line, then "Hold the base plate and turn your body until the north seeking end of the magnetic needle lines up with the orienting arrow. The direction you are facing is magnetic north." Lining the needle up inside the arrow is called "boxing the needle", and every method in the next four lessons begins with it.

:::reveal How far does the Army manual say to stay from a truck or a tank, and from barbed wire? ||| 18 meters from a field gun, truck or tank; 10 meters from barbed wire or telephone wires.

:::reveal What does "boxing the needle" mean? ||| Turning until the north-seeking end of the needle lines up with the orienting arrow.

## Sources
- ${NWCG_475} Locator: p. 84, "Tips on Getting Accurate Compass Readings"; p. 87, "Orienting a Compass" and Table 4-1.
- ${FM_2001} Locator: printed pp. 9-2 to 9-4 (PDF pp. 111 to 113), paragraphs 9-3b and 9-4a to 9-4b.
- ${USGS_FS} Locator: p. 2, "A Word of Caution".
- ${NCEI_WMM_ACC} Locator: the opening paragraph on what the model leaves out, and its anomaly sentences.`,
    },
    {
      slug: "three-norths-and-declination",
      title: "16 · Three norths, and declination",
      section: "4 · The compass",
      recallContent: [
        {
          prompt: "How far does the Army manual say to stay from high-tension power lines, a truck, and barbed wire?",
          answer: "55 meters from high-tension power lines, 18 meters from a field gun, truck or tank, and 10 meters from telephone wires and barbed wire.",
        },
        {
          prompt: "How do you hold a baseplate compass for a reading?",
          answer: "Level and steady so the needle swings freely, about waist high in front of you, facing the object directly; take the bearing twice.",
        },
      ],
      body: `**Three norths.** The Army manual: "There are three base lines: true north, magnetic north, and grid north."
- **True north** is "A line from any point on the earth's surface to the north pole. All lines of longitude are true north lines." It is drawn as a star.
- **Magnetic north** is the direction the needle shows, drawn as a line with half an arrowhead and labeled MN.
- **Grid north** is "established by using the vertical grid lines on the map", labeled GN. On a current US Topo, the USGS says, the grid is UTM, and "The difference between true north and grid north is an inherent effect of transforming the earth's spherical surface to a plane surface".

**Declination, defined twice.** The manual's definition is general: "Declination is the angular difference between any two norths." It names two of the angles: the **grid-magnetic (G-M) angle** "between grid north and magnetic north", and the **grid convergence**, between true north and grid north. NCEI, which computes the values, uses the word for the one that matters most: "Magnetic declination (sometimes called magnetic variation) is the angle between magnetic north and true north. Declination is positive when this angle is east of true north and negative when it is west."

**Where does the needle point? The sources disagree.** The Army manual calls magnetic north "The direction to the north magnetic pole", and the workbook says "The magnetic needle points to the magnetic North Pole." NCEI answers the question directly: "No. The compass points in the directions of the horizontal component of the magnetic field where the compass is located, and not to any single point." Trust NCEI here. The field is lumpy, which is why declination differs from place to place, and the USGS adds that "at very high latitudes, the compass can even point south!"

**East or west.** The workbook: in the lower 48 states declination "generally varies between zero and twenty degrees". East of the zero line, as in Maine, the needle points west of true north, a westerly declination; west of it, as in Nevada, easterly. Indiana's is westerly.

**Angles add: the Hindustan diagram.** The Hindustan quad's diagram shows magnetic north 4°28' west of true north and grid north 0°21' east of it. The G-M angle runs from grid north, past true north, to magnetic north, so it is made of those two parts, and angles that do not overlap add:

G-M angle = 4°28' + 0°21' = **4°49'**

The other three quads in lesson 3 work the same way. Indianapolis East: 4°49' + 0°36' = **5°25'**. Belmont: 4°32' + 0°26' = **4°58'**. Elkinsville: 4°31' + 0°26' = **4°57'**. Run it backward as an equation with an unknown: if a map gave a G-M angle of 4°49' and a grid convergence of 0°21' on the opposite side of true north, the declination d solves 4°49' = d + 0°21', so d = 4°28'. When the two lines lie on the same side of true north, the smaller angle sits inside the larger, and you subtract instead. That is why the manual tells you to sketch the diagram every time.

**Why the date matters.** Magnetic north drifts. The USGS: "magnetic declination values on old maps might no longer be accurate." The Hindustan diagram is labeled "2019 MAGNETIC NORTH DECLINATION AT CENTER OF SHEET". This course's own calculation from the current World Magnetic Model gives about **4°47' west** for the center of that sheet on 14 October 2026, about 19' more than the printed 4°28'. That figure is an estimate the course has filed to be confirmed against NCEI's online calculator; use the calculator for the value on the day you walk.

**The model, and what it leaves out.** NCEI: "The current version (WMM2025) was released on December 17, 2024, and will remain valid until late 2029", and "the current model expires on December 31, 2029." It "comes pre-installed in Android and iOS devices". But it "only describe[s] the long-wavelength portion of Earth's internal magnetic field"; the crust, upper mantle, ionosphere and magnetosphere "are not represented". Near the magnetic poles lie "Blackout Zones" where "compasses are unreliable."

**A primary-source exercise.** Look up today's declination for the center of your quad on NCEI's calculator. Write it beside the printed value and its year. Then download a historical quad of the same ground (lesson 4) and add its printed value and year. You now have three dated measurements of a moving field.

:::reveal On the Hindustan quad, what is the grid-magnetic angle, and why is it a sum? ||| 4°49': magnetic north is 4°28' west of true north and grid north 0°21' east, so the two non-overlapping angles add.

:::reveal Does a compass needle point to the magnetic pole? ||| NCEI says no: it points along "the horizontal component of the magnetic field where the compass is located, and not to any single point."

## Sources
- ${FM_2001} Locator: printed pp. 6-1 and 6-2 (PDF pp. 64 and 65), paragraph 6-2; printed pp. 6-8 to 6-14 (PDF pp. 71 to 77), paragraph 6-6.
- ${NCEI_DECL} Locator: "Magnetic Declination", first paragraph; "Does the compass needle point toward the magnetic pole?"
- ${NWCG_475} Locator: p. 81, chapter 4 introduction; pp. 85 and 86, "Adjusting a Compass for Magnetic Declination".
- ${USGS_NORTH} Locator: the answer, on true, magnetic and grid north.
- ${USGS_DECL} Locator: the answer, first paragraph.
- ${NCEI_WMM} Locator: the overview paragraphs and the "WMM2025 Coefficient File" note.
- ${NCEI_WMM_ACC} Locator: opening paragraph; "Blackout Zone (BoZ)".
- ${USTOPO_HINDUSTAN} Locator: the declination diagram. Also ${USTOPO_INDY_EAST}; ${USTOPO_BELMONT}; ${USTOPO_ELKINSVILLE}, each at its declination diagram.`,
    },
    {
      slug: "correcting-for-declination",
      title: "17 · Correcting for declination without a sign error",
      section: "4 · The compass",
      recallContent: [
        {
          prompt: "On the Hindustan quad, what is the grid-magnetic angle, and why is it a sum?",
          answer: "4°49': magnetic north is 4°28' west of true north and grid north 0°21' east, so the two non-overlapping angles add.",
        },
        {
          prompt: "How does NCEI define magnetic declination and its sign?",
          answer: "\"the angle between magnetic north and true north\", positive when magnetic north is east of true north and negative when it is west.",
        },
      ],
      body: `${P("BAM sets the declination on his baseplate compass for the quad he films on, shows the dial before and after, then converts the same bearing by arithmetic on paper and shows that both give one answer")}

${QR("a search-and-rescue member or a wilderness or land-navigation instructor, to check the direction rules, the worked examples and the check at the end, because a sign error here sends a walker the wrong way")}

**Why bother.** A map is drawn to true north and a compass needle follows magnetic north, so a bearing carried from one to the other is wrong by the declination unless you correct it. The Army manual: azimuths "will be in error by the size of the declination angle if not adjusted for it." The workbook puts a number on it: "1 degree off can result in 920 feet off course in 10 miles." Check the arithmetic: ten miles is 52,800 feet, and the sideways error for one degree is 52,800 × tan(1°), about 52,800 × 0.01746, which is about **922 feet**.

**Way 1: set it on the compass.** The workbook's advice: "It is generally easier to adjust the compass for declination, rather than the map. When the compass is adjusted then geographic north is the reference point for both the compass and the map." You set the declination once, by the screw or ring your compass has (follow its own instructions), and after that every bearing you read is a true bearing, ready for the map. In the workbook's words, bearings from an unadjusted compass "are called 'magnetic bearings'", and from an adjusted one, "'true bearings.'"

**Way 2: do the arithmetic.** The USGS fact sheet gives the rule for turning a true bearing measured on the map into a magnetic bearing to walk: "If the MN arrow on the map magnetic declination diagram is to the right of the true north line, subtract the MN value. If the arrow is to the left of the line, add the value." On every quad in lesson 3, MN is to the left. So, in Indiana, **map to compass: add**.
- On the Hindustan quad, using the printed 4°28' (call it 4.5°): a true bearing of 60° becomes 60 + 4.5 = **64.5° magnetic**.

Going the other way, compass to map, you undo it: **compass to map: subtract**.
- A magnetic bearing of 210° becomes 210 - 4.5 = **205.5° true**.

**The same rule, written as an equation.** NCEI writes it as one formula: "You can compute the true bearing from a magnetic bearing by adding the magnetic declination to the magnetic bearing," with the convention "that degrees west are negative". For Hindustan, declination d = -4.5°, so true = magnetic + d. Check the first example: 64.5 + (-4.5) = 60. Check the second: 210 + (-4.5) = 205.5. Both rules agree, which is the point of checking.

**Grid lines instead of true north.** If you measure bearings on the map against the black UTM grid lines rather than the map's edge, the angle to correct for is the grid-magnetic angle (lesson 16), 4°49' on Hindustan, not 4°28'. The difference is only 0°21' there, but the manual's rule is to sketch the diagram and know which north you measured from.

**Past 360, below 0.** "There are no negative azimuths on the azimuth circle." A true bearing of 358° plus 4.5° is 362.5°, which is **2.5°**. A magnetic bearing of 2° minus 4.5° is -2.5°, which is **357.5°**.

**Use today's number.** The printed value is for 2019; lesson 16 estimates about 4°47' west for 2026. Using 4°28' instead of 4°47' leaves 19' of error. Over ten miles that is about 52,800 × tan(0.32°), roughly **290 feet**. Get the current value from NCEI before a long walk.

**The check that catches sign errors.** The manual: "When converting azimuths, exercise extreme care when adding and subtracting the G-M angle. A simple mistake of 1° could be significant in the field." Before you walk, do the conversion both ways (rule and equation) and make sure they agree, and ask: in Indiana, should the compass number be bigger than the map number? Yes, by the declination.

:::reveal In Indiana, does a true bearing from the map get bigger or smaller when you turn it into a magnetic bearing? ||| Bigger: magnetic north is to the left (west) on the diagram, so you add the declination.

:::reveal About how far off course is one degree of error over ten miles? ||| About 920 feet (the workbook); 52,800 × tan(1°) is about 922 feet.

## Sources
- ${NWCG_475} Locator: pp. 85 and 86, "Adjusting a Compass"; p. 88, "Taking Bearings (Direct and Back)"; p. 111, the note that the chapter adjusts the compass, not the map.
- ${USGS_FS} Locator: p. 2, "Taking a compass bearing from a map", step 3.
- ${NCEI_DECL} Locator: "How do I correct my compass to the true bearing?"
- ${FM_2001} Locator: printed pp. 6-9 and 6-10 (PDF pp. 72 and 73), paragraphs 6-6b, 6-6d and 6-6e; printed p. 6-14 (PDF p. 77), the note in paragraph 6-6.
- ${USTOPO_HINDUSTAN} Locator: the declination diagram.`,
    },
    {
      slug: "taking-a-bearing",
      title: "18 · Taking a bearing and a back bearing",
      section: "4 · The compass",
      recallContent: [
        {
          prompt: "In Indiana, how do you turn a true bearing from the map into a magnetic bearing to walk?",
          answer: "Add the declination (magnetic north is to the left, west, on the diagram). On Hindustan, 60° true is about 64.5° magnetic.",
        },
        {
          prompt: "How does NCEI write the declination correction as one equation?",
          answer: "True bearing = magnetic bearing + declination, with west declination negative.",
        },
      ],
      body: `${P("BAM takes a direct bearing to a landmark with each compass, says the number aloud, walks to the landmark and takes the back bearing to where he started, and shows the two numbers differ by 180°")}

**What a bearing is.** The Army manual calls it an azimuth: "An azimuth is defined as a horizontal angle measured clockwise from a north base line. This north base line could be true north, magnetic north, or grid north." The workbook uses the word bearing and says that "the term 'bearing' is used interchangeably with the term 'azimuth.'" Either way it is an angle in degrees, from 0 at north, clockwise: east is 90, south 180, west 270.

**Sketch one before you take one.** To draw a bearing of 60°: draw a short line straight up the page for north, put a protractor's center on its base with 0 on the north line, count 60 degrees clockwise, mark it, and draw the line. A bearing of 240° points the opposite way along the same line. Sketching first makes the numbers mean something before you meet them in the field.

**Taking a direct bearing with a baseplate compass.** The workbook's four steps (Table 4-2):
1. "Adjust compass for declination if using the bearing with a map."
2. "Face object and align the direction-of-travel arrow with the object whose bearing you want to measure."
3. "Turn the compass housing until the north end of the magnetic needle is aligned with the orienting arrow."
4. "Read the bearing where the direction of travel arrow or index line meets the dial. This is the direction to the object, expressed as an angle."

Then do it again: the workbook's tip is "Take bearing twice."

**With a lensatic.** For a quick reading, the centerhold: point the cover at the object by turning your whole body, then "look down and read the azimuth from beneath the fixed black index line." For a precise sight on a distant object, the compass-to-cheek technique: raise the cover's sighting wire, look through the rear-sight slot, line the wire up with the object, and "glance down at the dial through the eye lens to read the azimuth."

**The back bearing.** "A back bearing ... is the exact opposite of a bearing", the workbook says: it points from the object back to you. The Army manual's rule: "add 180 degrees if the azimuth is 180 degrees or less, or subtract 180 degrees if the azimuth is 180 degrees or more." The workbook's example: "if the direct bearing is 60° the back bearing is 240°." Two more:
- 145° + 180° = **325°**.
- 300° - 180° = **120°**.

On a baseplate you can also read a back bearing directly by "aligning the south end of the needle with the orienting arrow."

**Why back bearings matter.** They tell someone else where you are: the workbook's example is "I am located 145° from the cell tower." They also check that you are still on line while you walk (lesson 19). And they are where careless arithmetic does damage. The Army manual prints the warning in a box: "A simple mathematical mistake could cause disastrous consequences."

**A bearing is a number, so say it with its north.** "64° magnetic" and "60° true" can be the same direction on Hindustan ground (lesson 17). A bearing written without its north is half a fact.

:::reveal What is the back bearing of 145°? ||| 325°: add 180 because 145 is less than 180.

:::reveal In which direction, and from which line, is an azimuth measured? ||| Clockwise, from a north base line (true, magnetic or grid north).

## Sources
- ${FM_2001} Locator: printed pp. 6-2 and 6-3 (PDF pp. 65 and 66), paragraph 6-3 and 6-3a; printed pp. 9-3 and 9-4 (PDF pp. 112 and 113), paragraphs 9-4a and 9-4b.
- ${NWCG_475} Locator: p. 81, chapter 4 introduction; p. 84, tips; pp. 88 to 90, "Taking Bearings (Direct and Back)" and Table 4-2.`,
    },
    {
      slug: "following-a-bearing",
      title: "19 · Following a bearing",
      section: "4 · The compass",
      recallContent: [
        {
          prompt: "What is the back bearing of 300°?",
          answer: "120°: subtract 180 because 300 is more than 180.",
        },
        {
          prompt: "What are the workbook's four steps for a direct bearing with a baseplate compass?",
          answer: "Adjust for declination if using a map; face the object with the direction-of-travel arrow on it; turn the housing until the needle's north end sits in the orienting arrow; read the bearing at the index line.",
        },
      ],
      body: `${P("BAM follows a 100-meter bearing through woods on camera, choosing intermediate objects aloud, checking with a back bearing halfway, and walking the box detour around an obstacle")}

${QR("a search-and-rescue member or a wilderness or land-navigation instructor, to check the method, the detour arithmetic and the advice on what to do when the back bearing does not match")}

**Why follow a bearing.** "A bearing can help you stay on course even if you lose sight of your destination due to terrain, vegetation, fog, smoke or other conditions," says the workbook. You set the bearing once and walk the line it gives you.

**The workbook's method (Table 4-3).**
1. "Adjust compass for declination if using the bearing with a map."
2. Take the bearing of your destination. If it is far away or hidden, "choose an intermediary object that is visible and located along the line of the direction-of-travel arrow. Don't turn the compass housing after you have taken the bearing."
3. "Walk to the intermediary or goal destination by the easiest route, it doesn't have to be straight route. Don't look at your compass while you are walking, just walk towards the destination."
4. Check that you are still on the line: stop, turn until the needle sits in the orienting arrow again, and see that the travel arrow still points at the next object. Then "Take a back bearing to the intermediary or starting point. It should be 180° from the direct bearing that was taken from that point." If it is not, step sideways until it is.
5. "Repeat steps above until goal object is reached."

If nothing stands out on the line, "another person can serve as the intermediate destination."

**Steering marks.** The Army manual calls the intermediate objects steering marks, and its advice on choosing them is the best part of the chapter. A good one has "color, shade of color, size, or shape (preferably all four)" so you keep recognizing it as you approach. "If several easily distinguished objects appear along your line of march, the best steering mark is the most distant object", and "If you have many options, select the highest object". They are chosen as you walk: "Steering marks should never be determined from a map study." And never walk with the compass held open in front of you, because it "will not stay steady or level": sight, put it away, walk, sight again.

**With a lensatic.** Preset it: hold it level, turn it until the bearing sits under the black index line, then turn the bezel ring until its luminous line lies over the north-seeking arrow. To follow, hold it in the centerhold and "turn your body until the north-seeking arrow is aligned with the luminous line."

**Around an obstacle: the box.** The manual detours at right angles and counts the legs. Its example, on a bearing of 90°: turn to 180° and walk 100 meters; turn back to 90° and walk 150 meters past the obstacle; turn to 360° and walk 100 meters; turn to 90° again, "and you are back on your original azimuth line." The two side legs cancel because they are equal and opposite. Two rules come with it: to turn right 90°, add 90 to your bearing; to turn left, subtract 90. And count only the paces that move you toward the goal: "be certain that only paces taken toward the final destination are counted as part of your forward progress." In the example, the 150 meters along the obstacle count; the two 100-meter side legs do not.

**When the line drifts.** Each small error adds to the last. The workbook: "A mistake of a few degrees can result in a significant mistake in distance from your final destination." That is why the back-bearing check comes every leg, not only at the end, and why section 5 teaches ways to let the land correct you.

:::reveal After you take a bearing with a baseplate compass, what must you not do before you reach the next object? ||| Turn the compass housing. The bearing is set; you only re-box the needle to check.

:::reveal In the box detour, which legs count toward forward progress? ||| Only the leg toward the destination (the 150 meters on the original bearing), not the two side legs.

## Sources
- ${NWCG_475} Locator: p. 84, tips; p. 91, "Following Bearings" and Table 4-3.
- ${FM_2001} Locator: printed pp. 9-4 to 9-6 (PDF pp. 113 to 115), paragraphs 9-4c(1) and 9-4d; printed pp. 11-14 and 11-15 (PDF pp. 160 and 161), paragraph 11-6a(4) to (7).`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The compass",
      section: "4 · The compass",
      body: "A graded check on the parts of a compass, what to look for in one, holding it and what pulls the needle, the three norths and declination, correcting for declination, and taking and following a bearing. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does a compass determine, in the workbook's words?", options: ["Direction, but not position", "Position, but not direction", "Both direction and position", "Distance and elevation only"], correctIndex: 0, explanation: "A compass \"uses a magnet, mounted on a pivot that turns in response to the earth's magnetic field, to determine direction (but not position).\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "What color is the north end of a baseplate compass needle, typically?", options: ["White", "Red", "Black", "Green"], correctIndex: 1, explanation: "The needle \"typically has a red end that points to magnetic north\".", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "What is the orienting arrow used for, besides boxing the needle?", options: ["Reading the map's scale", "Signaling for rescue", "Setting the declination", "Measuring the slope"], correctIndex: 2, explanation: "It is \"used to align the magnetic needle when taking a bearing. It is also what is adjusted to set the compass for magnetic declination.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "What happens to the orienting lines once declination is set with a screw?", options: ["They point straight at true north", "They turn red to show the setting", "They line up with the travel arrow", "They no longer parallel the arrow"], correctIndex: 3, explanation: "\"When the declination is set on a compass with an adjustment screw, the orienting lines no longer parallel the orienting arrow.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "Where on a baseplate compass do you read the bearing?", options: ["At the index line", "At the needle tip", "At the plate edge", "At the mirror line"], correctIndex: 0, explanation: "The index line is \"where you read the indicated bearing.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "Which way should the direction of travel arrow point?", options: ["Toward magnetic north", "Toward the destination", "Toward the map's top", "Toward your own feet"], correctIndex: 1, explanation: "\"The arrow should be pointed in the direction of the destination or landmark.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "What can a baseplate compass's clear plate be used as on the map?", options: ["A magnifier for the legend", "A mirror for signaling", "A ruler for map distances", "A level for the slope"], correctIndex: 2, explanation: "The plate \"can be used as a ruler to measure map distances\", and some carry a protractor.", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "What are the three major parts of a lensatic compass?", options: ["Plate, needle and dial", "Mirror, ring and wire", "Housing, arrow and lid", "Cover, base and lens"], correctIndex: 3, explanation: "The lensatic \"consists of three major parts: the cover, the base, and the lens.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "What does the lensatic's cover carry for night navigation?", options: ["Two luminous sighting dots", "A small battery-powered lamp", "A glow-in-the-dark map scale", "A reflective mirror strip"], correctIndex: 0, explanation: "The cover holds \"the sighting wire (front sight) and two luminous sighting slots or dots used for night navigation.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "How many degrees is one click of a lensatic's bezel ring?", options: ["1 degree", "3 degrees", "5 degrees", "10 degrees"], correctIndex: 1, explanation: "The bezel ring \"contains 120 clicks when rotated fully; each click is equal to 3°.\" 120 × 3 = 360.", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "Which scale on a lensatic's dial is in mils?", options: ["The inner scale", "The bezel ring", "The outer scale", "The thumb loop"], correctIndex: 2, explanation: "\"There are two scales; the outer scale denotes mils and the inner scale (normally in red) denotes degrees.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "How far must the lensatic's lens be opened for the dial to float freely?", options: ["More than 10 degrees", "More than 90 degrees", "Exactly 180 degrees", "More than 45 degrees"], correctIndex: 3, explanation: "The rear sight \"must be opened more than 45° to allow the dial to float freely.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "How many mils make a full circle?", options: ["6,400", "3,600", "4,000", "6,000"], correctIndex: 0, explanation: "\"A circle equals 6400 mils divided by 360 degrees, or 17.78 mils per degree.\"", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "Why measure distance with the map's bar scale, not a lensatic's coordinate scale?", options: ["It has no straight edge at all", "Its scales are not 1:24,000", "Its scale is printed in mils", "It works only after dark"], correctIndex: 1, explanation: "The lensatic's scale is \"1:50,000 in newer compasses\", and some older ones are 1:25,000; neither is a US Topo's 1:24,000.", sourceLessonSlug: "parts-of-a-compass" },
          { prompt: "Which compass feature heads the workbook's list of materials?", options: ["A built-in clinometer", "A sighting mirror", "A declination adjustment", "A magnifying lens"], correctIndex: 2, explanation: "The list begins \"Compass with adjustment for magnetic declination\".", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "Which is generally easier to adjust for declination, according to the workbook?", options: ["The map", "The GPS", "The protractor", "The compass"], correctIndex: 3, explanation: "\"It is generally easier to adjust the compass for declination, rather than the map.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "Which is one way the workbook says a compass may be built to take declination?", options: ["A screw that rotates the orienting arrow", "A magnet you slide along the needle", "A sticker you place on the base plate", "A second needle that points true north"], correctIndex: 0, explanation: "\"Some compasses have a declination screw that can be turned which rotates the orienting arrow.\" Others rotate the center of the case, and some adjust automatically.", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "Where does the workbook send you for how to set your own compass's declination?", options: ["To a USGS fact sheet", "To its owner's manual", "To the Army manual", "To a GPS receiver"], correctIndex: 1, explanation: "The workbook says to \"refer to the owner's manual for specific instructions.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "What should you check about a ruler or map scale on a compass's base plate?", options: ["That it is printed in mils, not degrees", "That it is longer than six inches", "That one matches your map's 1:24,000", "That it glows in the dark at night"], correctIndex: 2, explanation: "If the plate carries map scales, check that one matches the 1:24,000 of a US Topo. The Army manual's own warning: \"Check the scale.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "What are orienting lines in the housing for?", options: ["Measuring the slope of a hillside", "Counting the paces on each leg", "Reading mils on the outer ring", "Lining the dial up with grid lines"], correctIndex: 3, explanation: "Orienting lines let you line the dial up with the map's grid lines (lesson 21).", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "To what precision does the Army manual read a map azimuth?", options: ["To the nearest degree", "To the nearest minute", "To the nearest 5 degrees", "To the nearest second"], correctIndex: 0, explanation: "\"When measuring an azimuth, the reading is always to the nearest degree or 10 mils.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "Which feature does this course not use?", options: ["The base plate", "The clinometer", "The index line", "The needle"], correctIndex: 1, explanation: "A clinometer measures slope, \"which this course does not use.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "Which technique does the Army manual call the best for sighting?", options: ["Centerhold", "Boxing the needle", "Compass-to-cheek", "The click method"], correctIndex: 2, explanation: "\"The compass-to-cheek technique is used almost exclusively for sighting, and it is the best technique for this purpose.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "What does the Army's lensatic compass lack that the workbook requires?", options: ["A floating dial", "A sighting wire", "A luminous line", "A declination setting"], correctIndex: 3, explanation: "The manual's compass handles declination by arithmetic with the grid-magnetic angle; it has no declination setting.", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "Why does a magnetic needle keep working when a phone does not?", options: ["It needs no batteries", "It is waterproofed", "It is set by satellite", "It needs less light"], correctIndex: 0, explanation: "The workbook teaches the baseplate compass partly because it \"does not require batteries.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "What does the Army manual say is the most important check on a new compass?", options: ["That the case is not scratched", "That the dial does not stick", "That the lid closes tightly", "That the needle is bright red"], correctIndex: 1, explanation: "The user checks the sighting wire, the glass and the numbers, \"and most important, that the dial does not stick.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "How far off may a compass be before the Army manual says not to use it?", options: ["More than 1 degree", "More than 10 degrees", "More than 3 degrees", "More than 30 degrees"], correctIndex: 2, explanation: "\"Compasses with more than 3° + variation should not be used.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "On what does the Army manual check a compass's accuracy?", options: ["The sun at noon each day", "A second, newer compass", "The North Star at night", "A known line of direction"], correctIndex: 3, explanation: "A compass \"has to be checked periodically on a known line of direction, such as a surveyed azimuth using a declination station.\"", sourceLessonSlug: "choosing-a-compass" },
          { prompt: "What does the workbook say a small error with a compass can cause?", options: ["A significant error on the ground", "A broken needle in the housing", "A reversed back bearing reading", "A loss of the declination setting"], correctIndex: 0, explanation: "\"A small error when using a compass can result in a significant error in measurement on the ground.\"", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "How should you hold a baseplate compass for a reading?", options: ["Tilted toward you at eye level", "Level and steady, about waist high", "Flat on the ground at your feet", "At arm's length above your head"], correctIndex: 1, explanation: "\"Hold the compass level and steady so the needle swings freely,\" and \"about waist high in front of the body\".", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "When taking a bearing, what should you move: your head or your eyes?", options: ["Your head, not your eyes", "Both, together, slowly", "Your eyes, not your head", "Neither; close one eye"], correctIndex: 2, explanation: "\"Raise and lower eyes when taking a bearing, do not move your head. Always use the same eye when taking bearings.\"", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "When walking a bearing, what should you follow?", options: ["The red end of the needle", "The orienting lines inside", "The map's north edge line", "The direction of travel arrow"], correctIndex: 3, explanation: "\"Follow the direction of travel arrow, not the compass needle, when walking a bearing.\"", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "In the centerhold technique, where does the lensatic compass sit?", options: ["Between your chin and your belt", "At arm's length in front of you", "Against your cheek below one eye", "Flat on a map on the ground"], correctIndex: 0, explanation: "\"Pull your elbows firmly into your sides; this will place the compass between your chin and your belt.\"", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "Which of these does the workbook list as interfering with a compass?", options: ["Plastic bottles and nylon packs", "Belt buckles, glasses and rings", "Wooden walking sticks and paper", "Cotton clothing and rubber boots"], correctIndex: 1, explanation: "\"Even belt buckles, glasses, and rings can interfere with the compass reading.\"", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "Which metals does the Army manual say do not affect a compass?", options: ["Steel and iron of every kind", "Any metal less than 1 meter off", "Nonmagnetic metals and alloys", "Only metals in power lines"], correctIndex: 2, explanation: "\"nonmagnetic metals and alloys do not affect compass readings.\"", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "How far does the Army manual say to stay from high-tension power lines?", options: ["18 meters", "10 meters", "2 meters", "55 meters"], correctIndex: 3, explanation: "High-tension power lines: 55 meters.", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "How far does the Army manual say to stay from a truck?", options: ["18 meters", "55 meters", "10 meters", "1 meter"], correctIndex: 0, explanation: "\"Field gun, truck, or tank\": 18 meters. Read that as your car at the trailhead.", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "How far does the Army manual say to stay from barbed wire?", options: ["18 meters", "10 meters", "55 meters", "2 meters"], correctIndex: 1, explanation: "\"Telegraph or telephone wires and barbed wire\": 10 meters.", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "How large can local declination anomalies be, according to NCEI?", options: ["They never exceed 1 degree", "They are always 3 degrees", "They can exceed 10 degrees", "They are under one minute"], correctIndex: 2, explanation: "\"Some local, regional, and temporal magnetic declination anomalies can exceed 10 degrees.\" Anomalies of 3 or 4 degrees \"are not uncommon\".", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "Two careful readings a few meters apart disagree. What does lesson 15 say to suspect?", options: ["A broken compass every time", "The map's printed declination", "The sun's angle in the sky", "The ground or something you carry"], correctIndex: 3, explanation: "\"if two careful readings from spots a few meters apart disagree, suspect the ground or something you are carrying.\"", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "What is \"boxing the needle\"?", options: ["Lining the needle up in the arrow", "Locking the needle for transport", "Storing the compass in its case", "Turning the bezel ring by clicks"], correctIndex: 0, explanation: "Turning until \"the north seeking end of the magnetic needle lines up with the orienting arrow\" is called \"boxing the needle\".", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "With 0° set at the index line and the needle boxed, which way are you facing?", options: ["True north", "Magnetic north", "Grid north", "Magnetic south"], correctIndex: 1, explanation: "\"The direction you are facing is magnetic north.\"", sourceLessonSlug: "holding-it-and-what-pulls-the-needle" },
          { prompt: "How many base lines, or norths, does the Army manual name?", options: ["Two", "Four", "Three", "One"], correctIndex: 2, explanation: "\"There are three base lines: true north, magnetic north, and grid north.\"", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "How is true north drawn on a declination diagram?", options: ["As the letters GN", "As a half arrow", "As the letters MN", "As a star"], correctIndex: 3, explanation: "True north \"is usually represented by a star\". Magnetic north is a half arrowhead or MN; grid north is GN.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "Why do true north and grid north differ, per the USGS?", options: ["Flattening a sphere onto a plane", "Errors made by early surveyors", "Drift in the earth's magnetism", "Printing shrinkage of the paper"], correctIndex: 0, explanation: "The difference \"is an inherent effect of transforming the earth's spherical surface to a plane surface\".", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "How does the Army manual define declination in general?", options: ["The angle between north and east", "The angle between any two norths", "The tilt of the needle downward", "The height of the sun at noon"], correctIndex: 1, explanation: "\"Declination is the angular difference between any two norths.\"", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "What is the grid-magnetic (G-M) angle?", options: ["The angle from true to grid north", "The angle from true to magnetic north", "The angle from grid to magnetic north", "The angle from grid north to east"], correctIndex: 2, explanation: "The G-M angle is \"between grid north and magnetic north\". The angle between true and grid north is the grid convergence.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "Under NCEI's convention, what sign does a west declination carry?", options: ["Positive", "Neither", "It varies", "Negative"], correctIndex: 3, explanation: "\"Declination is positive when this angle is east of true north and negative when it is west.\"", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "Does a compass needle point at the magnetic pole, according to NCEI?", options: ["No; it follows the local field", "Yes; always at the north pole", "Yes, but only in the tropics", "No; it points at true north"], correctIndex: 0, explanation: "\"No. The compass points in the directions of the horizontal component of the magnetic field where the compass is located, and not to any single point.\"", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "In the lower 48 states, the workbook says declination generally varies between what?", options: ["Zero and five degrees", "Zero and twenty degrees", "Twenty and forty degrees", "Zero and ninety degrees"], correctIndex: 1, explanation: "It \"generally varies between zero and twenty degrees\".", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "On the Hindustan quad, what is the grid-magnetic angle?", options: ["4°07'", "4°28'", "4°49'", "0°21'"], correctIndex: 2, explanation: "Magnetic north is 4°28' west of true north and grid north 0°21' east, so the G-M angle is 4°28' + 0°21' = 4°49'.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "Why is the Hindustan G-M angle a sum of two angles?", options: ["Both parts lie on the same side", "The diagram is drawn to scale", "Declination is always doubled", "The two parts lie on opposite sides"], correctIndex: 3, explanation: "The G-M angle runs from grid north, past true north, to magnetic north, so its two non-overlapping parts add.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "On the Indianapolis East quad, what is the grid-magnetic angle?", options: ["5°25'", "4°13'", "4°49'", "5°36'"], correctIndex: 0, explanation: "4°49' + 0°36' = 5°25'.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "A map gives a G-M angle of 4°49' and a grid convergence of 0°21' on the other side of true north. What is the declination?", options: ["5°10'", "4°28'", "4°49'", "0°21'"], correctIndex: 1, explanation: "Solve 4°49' = d + 0°21': d = 4°28'.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "When grid north and magnetic north lie on the same side of true north, what do you do?", options: ["Add the two angles up", "Double the larger angle", "Subtract the smaller angle", "Ignore the grid north"], correctIndex: 2, explanation: "\"When the two lines lie on the same side of true north, the smaller angle sits inside the larger, and you subtract instead.\"", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "For what year is the Hindustan quad's declination printed?", options: ["2022", "2010", "2026", "2019"], correctIndex: 3, explanation: "Its diagram is labeled \"2019 MAGNETIC NORTH DECLINATION AT CENTER OF SHEET\", though the quad is dated 2022.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "What did this course's own World Magnetic Model calculation give for the Hindustan sheet in October 2026?", options: ["About 4°47' west, still to be confirmed", "About 4°28' west, the printed value", "About 4°47' east, confirmed by NCEI", "About 0°21' east, the grid convergence"], correctIndex: 0, explanation: "About 4°47' west for 14 October 2026, an estimate the course has filed to be confirmed against NCEI's online calculator.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "When does NCEI say the current World Magnetic Model expires?", options: ["December 17, 2024", "December 31, 2029", "December 31, 2026", "January 1, 2030"], correctIndex: 1, explanation: "WMM2025 \"was released on December 17, 2024\", and \"the current model expires on December 31, 2029.\"", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "Which part of the earth's magnetic field does the World Magnetic Model describe?", options: ["Every local anomaly, down to a meter", "Only the field in the ionosphere", "The long-wavelength part from the core", "Only the field near the two poles"], correctIndex: 2, explanation: "It \"only describe[s] the long-wavelength portion of Earth's internal magnetic field\"; the crust, upper mantle, ionosphere and magnetosphere are not represented.", sourceLessonSlug: "three-norths-and-declination" },
          { prompt: "Why does the Army manual say a declination correction matters?", options: ["Maps print upside down without it", "Compasses stop working without it", "Grid lines vanish without it", "Bearings err by the declination"], correctIndex: 3, explanation: "Azimuths \"will be in error by the size of the declination angle if not adjusted for it.\"", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "How far off course does the workbook say one degree puts you over ten miles?", options: ["About 920 feet", "About 92 feet", "About 9,200 feet", "About 1 mile"], correctIndex: 0, explanation: "\"1 degree off can result in 920 feet off course in 10 miles.\" 52,800 × tan(1°) is about 922 feet.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "Once a compass is adjusted for declination, what kind of bearings does it give?", options: ["Magnetic bearings", "True bearings", "Grid bearings", "Back bearings"], correctIndex: 1, explanation: "Bearings from an adjusted compass \"are called 'true bearings'\"; from an unadjusted one, \"magnetic bearings\".", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "Under the USGS rule, what do you do if MN on the diagram is to the left of true north?", options: ["Subtract the MN value", "Double the MN value", "Add the MN value", "Ignore the MN value"], correctIndex: 2, explanation: "\"If the arrow is to the left of the line, add the value.\" To the right, subtract.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "On the Hindustan quad (4.5° west), what magnetic bearing matches a true bearing of 60°?", options: ["55.5°", "60.0°", "69.0°", "64.5°"], correctIndex: 3, explanation: "Map to compass in Indiana: add. 60 + 4.5 = 64.5° magnetic.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "On the Hindustan quad (4.5° west), what true bearing matches a magnetic bearing of 210°?", options: ["205.5°", "214.5°", "210.0°", "201.0°"], correctIndex: 0, explanation: "Compass to map: subtract. 210 - 4.5 = 205.5° true.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "What is NCEI's equation for a true bearing?", options: ["Magnetic bearing minus 180 degrees", "Magnetic bearing plus declination", "Grid bearing times the declination", "True north minus the grid angle"], correctIndex: 1, explanation: "\"You can compute the true bearing from a magnetic bearing by adding the magnetic declination to the magnetic bearing,\" with west negative.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "Using NCEI's equation, what is 64.5° magnetic on the Hindustan quad (d = -4.5°)?", options: ["69° true", "64.5° true", "60° true", "55.5° true"], correctIndex: 2, explanation: "True = 64.5 + (-4.5) = 60°, the same answer the USGS rule gives.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "Measuring against the map's UTM grid lines, which angle do you correct for on Hindustan?", options: ["The declination, 4°28'", "The convergence, 0°21'", "No angle at all", "The G-M angle, 4°49'"], correctIndex: 3, explanation: "Against grid lines, the angle is the grid-magnetic angle, 4°49' on Hindustan, not the 4°28' declination.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "A true bearing of 358° plus a 4.5° declination gives what bearing?", options: ["2.5°", "362.5°", "353.5°", "357.5°"], correctIndex: 0, explanation: "362.5° goes past 360, so it is 2.5°. \"There are no negative azimuths on the azimuth circle.\"", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "A magnetic bearing of 2° minus a 4.5° declination gives what bearing?", options: ["-2.5°", "357.5°", "6.5°", "2.5°"], correctIndex: 1, explanation: "-2.5° goes below 0, so it is 360 - 2.5 = 357.5°.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "Using 4°28' instead of today's estimated 4°47' leaves how much error over ten miles?", options: ["About 29 feet", "About 920 feet", "About 290 feet", "About 2,900 feet"], correctIndex: 2, explanation: "19' is about 0.32°, and 52,800 × tan(0.32°) is roughly 290 feet.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "What check does lesson 17 give for catching sign errors?", options: ["Ask a friend to guess the number", "Round every bearing to tens", "Trust the first number you get", "Convert both ways; they must agree"], correctIndex: 3, explanation: "Do the conversion both ways (rule and equation) and make sure they agree.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "In Indiana, should the compass number be bigger or smaller than the map number?", options: ["Bigger, by the declination", "Smaller, by the declination", "The same, every single time", "Bigger, by 180 degrees"], correctIndex: 0, explanation: "Magnetic north is west of true north, so the magnetic bearing is larger by the declination.", sourceLessonSlug: "correcting-for-declination" },
          { prompt: "How does the Army manual define an azimuth?", options: ["A vertical angle measured from level", "A horizontal angle clockwise from north", "A horizontal angle counterclockwise", "The distance between two grid lines"], correctIndex: 1, explanation: "\"An azimuth is defined as a horizontal angle measured clockwise from a north base line.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "What does the workbook say about the words bearing and azimuth?", options: ["It uses them for opposites", "It never uses azimuth at all", "It uses them interchangeably", "It uses azimuth for maps only"], correctIndex: 2, explanation: "\"the term 'bearing' is used interchangeably with the term 'azimuth.'\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "What bearing is due west?", options: ["90°", "180°", "360°", "270°"], correctIndex: 3, explanation: "Measured clockwise from north: east is 90, south 180, west 270.", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "To sketch a bearing of 60°, where do you count from?", options: ["Clockwise from the north line", "Counterclockwise from north", "Clockwise from the east line", "Upward from the bottom edge"], correctIndex: 0, explanation: "Put the protractor's center on the north line's base with 0 on the line, and count 60 degrees clockwise.", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "What is the workbook's first step in taking a direct bearing?", options: ["Turn the housing to the needle first", "Adjust for declination if using a map", "Read the dial at the index line", "Take the back bearing to the object"], correctIndex: 1, explanation: "Step 1: \"Adjust compass for declination if using the bearing with a map.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "In the workbook's steps, what do you turn until the needle aligns with the orienting arrow?", options: ["The base plate", "Your own body", "The compass housing", "The map sheet"], correctIndex: 2, explanation: "\"Turn the compass housing until the north end of the magnetic needle is aligned with the orienting arrow.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "Using the centerhold, where do you read a lensatic's azimuth?", options: ["At the tip of the sighting wire", "On the bezel's luminous line", "Through the rear-sight slot", "Beneath the black index line"], correctIndex: 3, explanation: "Point the cover at the object, then \"look down and read the azimuth from beneath the fixed black index line.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "What is the back bearing of 60°?", options: ["240°", "120°", "300°", "150°"], correctIndex: 0, explanation: "The workbook's example: \"if the direct bearing is 60° the back bearing is 240°.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "What is the back bearing of 145°?", options: ["235°", "325°", "35°", "215°"], correctIndex: 1, explanation: "145 is less than 180, so add 180: 325°.", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "What is the back bearing of 300°?", options: ["480°", "60°", "120°", "210°"], correctIndex: 2, explanation: "300 is more than 180, so subtract 180: 120°.", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "How can you read a back bearing directly on a baseplate compass?", options: ["Turn the plate upside down", "Read at the mirror's notch", "Use the orienting lines", "Align the needle's south end"], correctIndex: 3, explanation: "Take it like a direct bearing but by \"aligning the south end of the needle with the orienting arrow.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "What example does the workbook give of a back bearing telling someone where you are?", options: ["145° from the cell tower", "60° from the trailhead", "240° from the fire tower", "90° from the river"], correctIndex: 0, explanation: "The workbook's example: \"I am located 145° from the cell tower.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "What does the Army manual's boxed warning say about back azimuth arithmetic?", options: ["It is never really needed", "A slip could be disastrous", "Round it to the nearest ten", "Mils are safer than degrees"], correctIndex: 1, explanation: "\"A simple mathematical mistake could cause disastrous consequences.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "Why does lesson 18 say to write a bearing with its north?", options: ["The law requires the label", "It makes the number smaller", "Without it, it is half a fact", "Grid north is always meant"], correctIndex: 2, explanation: "\"64° magnetic\" and \"60° true\" can be the same direction on Hindustan ground; \"A bearing written without its north is half a fact.\"", sourceLessonSlug: "taking-a-bearing" },
          { prompt: "According to the workbook, why follow a bearing?", options: ["It replaces the need for a map", "It tells you how far you went", "It shows the safest route", "It keeps you on course unseen"], correctIndex: 3, explanation: "\"A bearing can help you stay on course even if you lose sight of your destination due to terrain, vegetation, fog, smoke or other conditions.\"", sourceLessonSlug: "following-a-bearing" },
          { prompt: "If your destination is hidden, what does the workbook say to choose?", options: ["An intermediary object on the line", "A new destination you can see", "The shortest trail toward it", "A bearing 10 degrees to one side"], correctIndex: 0, explanation: "\"choose an intermediary object that is visible and located along the line of the direction-of-travel arrow.\"", sourceLessonSlug: "following-a-bearing" },
          { prompt: "After taking a bearing, what must you not do to a baseplate compass?", options: ["Box the needle to check", "Turn the compass housing", "Put it in your pocket", "Take a back bearing"], correctIndex: 1, explanation: "\"Don't turn the compass housing after you have taken the bearing.\"", sourceLessonSlug: "following-a-bearing" },
          { prompt: "While walking to the intermediary object, what does the workbook say about the compass?", options: ["Watch the needle every step", "Hold it open at arm's length", "Don't look at it; just walk", "Turn the housing as you go"], correctIndex: 2, explanation: "\"Don't look at your compass while you are walking, just walk towards the destination.\"", sourceLessonSlug: "following-a-bearing" },
          { prompt: "The back bearing to your last point should differ from the direct bearing by how much?", options: ["90 degrees", "360 degrees", "45 degrees", "180 degrees"], correctIndex: 3, explanation: "\"It should be 180° from the direct bearing that was taken from that point.\" If not, step sideways until it is.", sourceLessonSlug: "following-a-bearing" },
          { prompt: "Of several distinct objects on your line, which does the Army manual call the best steering mark?", options: ["The most distant one", "The closest one", "The brightest one", "The smallest one"], correctIndex: 0, explanation: "\"If several easily distinguished objects appear along your line of march, the best steering mark is the most distant object\".", sourceLessonSlug: "following-a-bearing" },
          { prompt: "Given many options, which steering mark does the manual prefer?", options: ["The lowest object", "The highest object", "The widest object", "The nearest tree"], correctIndex: 1, explanation: "\"If you have many options, select the highest object\". A higher mark is not as easily lost to sight.", sourceLessonSlug: "following-a-bearing" },
          { prompt: "When does the Army manual say steering marks should be chosen?", options: ["At home, from the map, before you go", "Only at night, from the brightest light", "As you walk, never from a map study", "Once, at the start of each route"], correctIndex: 2, explanation: "\"Steering marks should never be determined from a map study.\" They are selected as the march progresses.", sourceLessonSlug: "following-a-bearing" },
          { prompt: "Why does the Army manual say never to walk with the compass open in front of you?", options: ["It may scratch the glass face", "It drains the luminous paint", "It confuses the other walkers", "It will not stay steady or level"], correctIndex: 3, explanation: "Held that way, it \"will not stay steady or level\", so sight, put it away, walk, and sight again.", sourceLessonSlug: "following-a-bearing" },
          { prompt: "In the box detour on a 90° bearing, what is the first turn?", options: ["To 180° for 100 meters", "To 270° for 150 meters", "To 360° for 100 meters", "To 90° for 150 meters"], correctIndex: 0, explanation: "Turn to 180° and walk 100 m; turn to 90° and walk 150 m; turn to 360° and walk 100 m; then back to 90°.", sourceLessonSlug: "following-a-bearing" },
          { prompt: "To turn right 90 degrees from your bearing, what do you do?", options: ["Subtract 90 degrees", "Add 90 degrees", "Add 180 degrees", "Subtract 45 degrees"], correctIndex: 1, explanation: "\"To turn clockwise (right) 90 degrees, you must add 90 degrees to your original azimuth.\"", sourceLessonSlug: "following-a-bearing" },
          { prompt: "In the box detour, which paces count toward forward progress?", options: ["Every pace on all three legs", "Only the two side legs' paces", "Only those toward the destination", "None until you are back on line"], correctIndex: 2, explanation: "\"be certain that only paces taken toward the final destination are counted as part of your forward progress.\"", sourceLessonSlug: "following-a-bearing" },
          { prompt: "What does the workbook say a mistake of a few degrees can do?", options: ["Reverse your back bearing", "Break the compass needle", "Nothing that matters much", "Put you far from the destination"], correctIndex: 3, explanation: "\"A mistake of a few degrees can result in a significant mistake in distance from your final destination.\"", sourceLessonSlug: "following-a-bearing" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Map and compass together
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "orienting-the-map",
      title: "20 · Orienting the map",
      section: "5 · Map and compass together",
      recallContent: [
        {
          prompt: "After taking a bearing with a baseplate compass, what must you not do before you reach your next object?",
          answer: "Turn the compass housing. The bearing is set; you only re-box the needle to check.",
        },
        {
          prompt: "Of several distinct objects on your line, which does the Army manual call the best steering mark?",
          answer: "The most distant one; given many options, the highest. Steering marks are chosen as you walk, never from a map study.",
        },
      ],
      body: `${P("BAM orients the same map twice on camera, once by the terrain from a high point with two landmarks in view and once with his declination-adjusted baseplate compass, then turns to face a new direction and re-orients")}

**What oriented means.** The Army manual: "The first step for a navigator in the field is orienting the map. A map is oriented when it is in a horizontal position with its north and south corresponding to the north and south on the ground." The workbook says why it comes first: "Orienting the map to true north is key to navigating successfully. Orienting a map also gives you a general idea of your own location on the map." With the map lined up with the land, the road on your left is on the map's left, and the hill ahead is ahead on the paper.

**By the terrain.** The workbook's three steps (Table 6-1):
1. "Find your approximate location on the map."
2. "Select two prominent topographical features or landmarks that are visible to you and shown on the map."
3. "Turn the map until the features on the map are in proper relation to the actual features in the field. The map is now oriented."

The manual adds that this method "requires careful examination of the map and the ground, and the user must know his approximate location." Lesson 9's SOSES (shape, orientation, size, elevation, slope) is how you match a hill you see to a hill on the paper. The Army's orienteering appendix prefers this way: "The orienteer should try not to use the compass to orient the map. The terrain association technique is recommended instead."

**By the compass, adjusted for declination.** The workbook's four steps (Table 6-2):
1. "Adjust compass for declination as appropriate. Make sure there is no local magnetic attraction."
2. "Rotate the compass housing so north or 360º is at the index line or direction of travel line on the compass."
3. "Place one side of the compass base plate along the right or left hand edge of the map. The direction-of-travel line must be toward the top of the map."
4. "Carefully rotate the map and compass together until the needle is aligned with orienting arrow. The map and compass are now oriented."

Because the compass is set for declination, the map's edge (true north) now points at true north on the ground.

**By the compass, without the adjustment.** The Army's lensatic has no declination setting, so the manual lays the compass's straightedge along a north-south grid line, turns map and compass until the arrow is under the index line, and then turns them a little more, by the grid-magnetic angle. "If the magnetic north arrow on the map is to the left of the grid north, check the compass reading to see if it equals the G-M angle given in the declination diagram. The map is then oriented." On the Hindustan quad, where magnetic north is to the left, the compass laid along a grid line reads about 5° (the G-M angle, 4°49') when the map is oriented. Skip that last turn and the map is about 5° off, which, as lesson 17 showed, adds up.

**A simpler version you will meet.** Morgan-Monroe's orienteering brochure teaches the quick form: "rotate the map so that map north points the same direction as compass north." Then "all of the terrain in front of you is 'up' on the map", and "When you turn your body to walk in a different direction, re-orient the map so that it is always aligned with the terrain." It leaves out declination, which in Indiana is about 5°: close enough for reading the land, not for a long bearing.

**Keep it oriented.** The manual: once the map is oriented, "Do not move the map from its oriented position", and "Special care should be taken whenever orienting your map with a compass. A small mistake can cause you to navigate in the wrong direction." Without a compass or recognizable terrain, lesson 25's methods can give you north.

:::reveal What does it mean for a map to be oriented? ||| It lies horizontal with its north and south matching north and south on the ground.

:::reveal Orienting by terrain, what must you already know? ||| Your approximate location on the map, plus two landmarks you can see that are also on the map.

## Sources
- ${FM_2001} Locator: printed pp. 11-1 to 11-6 (PDF pp. 147 to 152), paragraph 11-1; printed p. F-19 (PDF p. 214), paragraph F-10.
- ${NWCG_475} Locator: p. 112, "Orienting Maps" and Table 6-1; p. 113, Table 6-2.
- ${MMSF_ORIENT} Locator: "Orienteering Pointers", "Orienting the Map". Linked only.
- ${USTOPO_HINDUSTAN} Locator: the declination diagram.`,
    },
    {
      slug: "a-bearing-from-the-map",
      title: "21 · A bearing from the map to the ground",
      section: "5 · Map and compass together",
      recallContent: [
        {
          prompt: "What are the workbook's steps for orienting a map by terrain?",
          answer: "Find your approximate location; pick two prominent features you can see that are on the map; turn the map until they sit in proper relation to the real ones.",
        },
        {
          prompt: "On the Hindustan quad, what should a compass laid along a grid line read when the map is oriented without a declination setting?",
          answer: "About 5°, the grid-magnetic angle of 4°49', because magnetic north is to the left of grid north.",
        },
      ],
      body: `${P("BAM measures one bearing on his quad three ways, with a protractor, with the compass used as a protractor, and by the USGS border method, and shows they agree; then walks it")}

**Why measure a bearing on the map.** The workbook's examples: you know where you are and want to reach a place "several miles away over hilly terrain", or one you cannot see "because of morning fog". The map gives you the direction; the compass carries it onto the ground.

**With a protractor.** The workbook: "A protractor or compass can be used to measure a map bearing; a protractor is easier to use and more accurate than a compass." Its steps (Table 6-3):
1. "Center the protractor over the starting point and orient 0º with true north (the 0º line needs to be parallel to edge of map)."
2. "Draw a line on the map from the starting point towards the destination."
3. "Read the bearing where the line, string or ruler intersects the protractor. This is the direction of travel to your destination."
4. "Before using this bearing in the field, adjust the compass for declination."

The Army manual does the same against the grid lines instead of the map's edge, and so gets a grid bearing: "when using the protractor on a map, only grid azimuths are obtained." It reads every azimuth "to the nearest degree", and it adds two warnings. Measure from start to end: "If a mistake is made and the reading is taken from the ending point, the grid azimuth will be opposite". And "Distance does not change an accurately measured azimuth": a long line and a short line at the same angle read the same.

**With the compass as a protractor.** The workbook's way to get a true bearing (Table 6-5): "Set compass at 0º declination. Disregard the magnetic needle." Lay one edge of the base plate along the line from start to destination, with the travel arrow pointing toward the destination. "Turn the compass housing so that the orienting arrow points to true north, parallel to map edge and longitude lines." Then "Read the true bearing at the index line." The needle plays no part; on the map, the compass is just a protractor with a ruler attached.

**The USGS border method.** The fact sheet draws "a straight line on the map passing through your location and your destination and extending across any one of the map borders", centers the compass where the line meets the border, lines it up with the border, and reads the true bearing. Its warning: "Be careful to get the bearing in the correct sense because a straight line will have two values 180° apart."

**Then cross to the ground.** A map bearing is true (from the edge) or grid (from the grid lines). Before you walk it, correct it as lesson 17 showed: set your compass for declination, or, in Indiana, add the declination. On the Hindustan quad, a protractor reading of 60° true is about 64.5° magnetic.

**And the other way: plotting a bearing.** To draw a bearing you took in the field onto the map, the manual's steps: convert it to the map's north first, put the protractor's center on your known point with its base line along a grid line, "Make a mark on the map at the desired azimuth", and draw the line from the point through the mark. This is sketching an angle of a given size, as in lesson 18, now on real ground.

:::reveal According to the workbook, which is easier and more accurate for a map bearing, a protractor or a compass? ||| A protractor.

:::reveal Why does the USGS warn you to get a map bearing "in the correct sense"? ||| Because a straight line has two bearings 180° apart; measure from where you are toward where you are going.

## Sources
- ${NWCG_475} Locator: pp. 114 and 115, "Measuring a Bearing on a Map" and Table 6-3; pp. 116 and 117, Tables 6-4 and 6-5.
- ${FM_2001} Locator: printed p. 9-1 (PDF p. 110), paragraph 9-1; printed pp. 6-4 to 6-7 (PDF pp. 67 to 70), paragraphs 6-4 and 6-5b, with the warning in 6-4 and the note in 6-5b.
- ${USGS_FS} Locator: p. 2, "Taking a compass bearing from a map", steps 1 to 3.`,
    },
    {
      slug: "finding-yourself",
      title: "22 · Finding yourself: resection, intersection, and a clash of names",
      section: "5 · Map and compass together",
      recallContent: [
        {
          prompt: "Using the workbook's compass-as-protractor method for a true bearing, what do you do with the needle?",
          answer: "Disregard it: set the compass at 0° declination, lay the plate along the line, turn the orienting arrow to true north parallel to the map edge, and read at the index line.",
        },
        {
          prompt: "What does the Army manual say about measuring a map azimuth from the wrong end of the line?",
          answer: "The reading will be the opposite direction, sending you the wrong way.",
        },
      ],
      body: `${P("BAM stands at a spot he has not marked on his quad, takes bearings to two landmarks about 90° apart, plots the back bearings, and then checks the crossing point against a known feature")}

**The situation.** You can see landmarks that are on your map, but you are not sure where you are among them. Bearings to them, drawn backward on the map, cross where you stand. The two backbone documents agree on the method and disagree on the name.

**The Army's words.**
- **Resection** finds your own position: "Resection is the method of locating one's position on a map by determining the grid azimuth to at least two well-defined locations that can be pinpointed on the map. For greater accuracy, the desired method of resection would be to use three or more well-defined locations."
- **Modified resection** works when you are on a line: "when the person is located on a linear feature on the ground, such as a road, canal, or stream". One bearing is enough, and "The location of the user is where the line crosses the linear feature."
- **Intersection** finds a distant point you cannot reach: "the location of an unknown point by successively occupying at least two (preferably three) known positions on the ground and then map sighting on the unknown location."

**The workbook's words.** It calls finding your own position **triangulation**, and uses the same word for finding a distant point: "Triangulation is also used to estimate the location of an unknown position." Its example is smoke: two observers who know where they stand each take a bearing to the smoke, and "The intersection of the two lines is the location of the smoke." So the workbook's one word covers the Army's resection and intersection. Neither is wrong; they are two vocabularies, and you should know both before you talk to someone who learned the other.

**The steps for your own position.** The workbook's Table 6-9:
1. "Adjust compass for declination."
2. Locate two or more objects you can identify on the map. "It is best if the objects are approximately 90° apart to reduce potential errors."
3. "Take a bearing to each of the objects."
4. "Convert to back bearings."
5. "On the map, draw the lines of the back bearing from the objects", which the workbook calls lines of position. "The point where these lines intersect is your position."

**A worked example.** With the compass set for declination, you read 40° to a fire tower and 130° to a bridge, 90° apart. The back bearings are 40 + 180 = **220°** and 130 + 180 = **310°**. From the tower on the map, draw a line at 220°; from the bridge, a line at 310°. Where they cross is you. Using the Army's lensatic instead, you would read magnetic bearings, convert each to grid with the G-M angle, then take the back bearings, as the manual's step list does.

**Why 90°, and why three.** Lines that cross at a shallow angle smear your small bearing errors along a long stretch of map; lines near 90° pin them down. A third line is a check: three lines seldom meet at exactly one point, and the small triangle they make shows how good your bearings were. If it is large, take them again.

**Without a compass.** Both resection and intersection can be done with a straightedge on a map oriented by terrain: pivot the edge on a known point on the map until it lines up with the same point on the ground, and draw the line toward yourself. Do it from a second point and the lines cross at your position.

**When to do it.** Not only when you are lost. Lesson 23 shows that pace counts drift, and the Army manual's cure is to resect along the way: "Periodically, you should accomplish a resection triangulation using two or more known points to pinpoint and correct your position on the map."

:::reveal What does the workbook call finding your own position from two landmarks, and what does the Army manual call it? ||| The workbook calls it triangulation; the Army manual calls it resection.

:::reveal Why does the workbook want the two landmarks about 90° apart? ||| "to reduce potential errors": lines crossing near a right angle pin down the position best.

## Sources
- ${FM_2001} Locator: printed pp. 6-14 to 6-19 (PDF pp. 77 to 82), paragraphs 6-7, 6-8 and 6-9; printed p. 11-16 (PDF p. 162), paragraph 11-6a(11).
- ${NWCG_475} Locator: p. 131, "Estimating Your Own Position Location" and Table 6-9; p. 132, "Estimating Unknown Position Locations".`,
    },
    {
      slug: "pace-count-and-dead-reckoning",
      title: "23 · Pace count and dead reckoning",
      section: "5 · Map and compass together",
      recallContent: [
        {
          prompt: "What does the workbook call finding your own position from two landmarks, and what does the Army manual call it?",
          answer: "The workbook calls it triangulation; the Army manual calls it resection (and finding a distant point, intersection).",
        },
        {
          prompt: "You read 40° to a tower and 130° to a bridge. Which lines do you draw on the map?",
          answer: "The back bearings: 220° from the tower and 310° from the bridge. You are where they cross.",
        },
      ],
      body: `${P("BAM calibrates his pace on a measured course, flat and then uphill, counting both ways the two documents define a pace, and shows the tally method he uses")}

**Distance is where most errors come from.** The Army manual: "Determining distance is the most common source of error encountered while moving either mounted or dismounted." The map tells you how far; counting your steps tells you how far you have come.

**Two definitions of a pace.** The documents disagree, and both are in use:
- **The Army manual:** "A pace is equal to one natural step, about 30 inches long." You learn "how many paces it takes you to walk 100 meters."
- **The workbook:** "A pace is defined as the average length of two natural steps (a count is made each time the same foot touches the ground)."

So a two-step pace is about twice an Army pace, and a count of one is about half the other. The arithmetic: 30 inches is about 0.76 meter, so 100 meters is about 100 ÷ 0.76, roughly **131 one-step paces**, or about **66 two-step paces**. Morgan-Monroe's brochure uses the two-step kind ("It's easiest to include both feet in your 'pace' length") and says "Five or six paces would be average for 30 feet." Decide which you count, write it on your route card, and never mix them.

**Calibrate yours.** The workbook's method (Table 6-11): set up courses of 100 feet or 66 feet (one chain), "One course needs to be on level ground and the other two need to be on a moderate slope and steep slope." Walk each, count, and "Calculate your pace by dividing the distance measured (100' or 66') by average number of paces." The Army walks a measured course of 100 to 600 meters "on similar terrain to that you will be walking over", and divides: on a 600-meter course, "divide the total paces by 6" to get paces per 100 meters.

**What changes it.** Both documents list the same causes. The manual's: "Your pace lengthens on a downslope and shortens on an upgrade"; "A head wind shortens the pace and a tail wind increases it"; "Sand, gravel, mud, snow, and similar surface materials tend to shorten the pace"; falling snow, rain or ice shorten it; so do heavy clothing and poor boots; and "Poor visibility, such as in fog, rain, or darkness, will shorten your pace." Its example: "if it normally takes you 120 paces to walk 100 meters, your pace count may increase to 130 or more when walking up a slope."

**Keep count outside your head.** "Do not try to remember the count; always use one of these methods": a pebble moved to a pocket every 100 meters, knots in a string, marks in a notebook.

**Dead reckoning.** The manual defines it in two steps: first "use of a protractor and graphic scales to determine the direction and distance from one point to another on a map", then "the use of a compass and some means of measuring distance to apply this information on the ground." A worked leg: the map gives 450 meters at 64.5° magnetic; your two-step count is 64 per 100 meters on this ground, so you expect 4.5 × 64 = **288 paces** before you look for the end of the leg.

**Why it drifts, and the cure.** "Error from them compounds over distance; therefore, you could soon be far afield from your intended route even if you performed the procedures correctly." The manual's rules: confirm your position "whenever you encounter a known feature on the ground that is also on the map", resect along the way (lesson 22), and "Pace counts or any type of distance measurement should begin anew each time your position is confirmed on the map." Compared with reading the land, "The technique of moving by terrain association is more forgiving of mistakes and far less time-consuming than dead reckoning." Lesson 24 combines the two.

:::reveal How do the Army manual and the workbook define a pace? ||| The Army: one natural step, about 30 inches. The workbook: the average length of two natural steps, counted each time the same foot lands.

:::reveal When does the Army manual say to start your pace count over? ||| Each time your position is confirmed on the map.

## Sources
- ${FM_2001} Locator: printed p. 5-11 (PDF p. 60), paragraph 5-3a; printed pp. 11-14 and 11-16 (PDF pp. 160 and 162), paragraphs 11-6a(1), (2) and (11), and 11-6b.
- ${NWCG_475} Locator: p. 133, "Pacing" and Table 6-11; p. 134, the list of what changes a pace.
- ${MMSF_ORIENT} Locator: "Orienteering Pointers", "Estimating Distance". Linked only.`,
    },
    {
      slug: "let-the-land-help",
      title: "24 · Let the land help: handrails, catching features, attack points, offsets",
      section: "5 · Map and compass together",
      recallContent: [
        {
          prompt: "How do the Army manual and the workbook define a pace?",
          answer: "The Army: one natural step, about 30 inches. The workbook: the average length of two natural steps.",
        },
        {
          prompt: "What does the Army manual call the most common source of error when moving?",
          answer: "\"Determining distance is the most common source of error encountered while moving either mounted or dismounted.\"",
        },
      ],
      body: `${P("BAM walks a short leg that uses each technique in turn on his quad: a stream as a handrail, a road as a catching feature, a trail junction as an attack point, and a deliberate offset onto a linear feature")}

**Why lean on the land.** The Army manual: "because it is difficult to dead reckon without error over long distances with your compass, the alert navigator can often gain assistance from the terrain." Moving by terrain association "is more forgiving of mistakes" because "you are comparing what you expected to see from the map to what you do see on the ground." The manual's everyday comparison: "you do not find the neighborhood grocery store by dead reckoning".

**Handrails.** "Handrails are linear features like roads or highways, railroads, power transmission lines, ridgelines, or streams that run roughly parallel to your direction of travel." While one runs beside you, you can "rough compass without the use of steering marks for as long as the feature travels with you on your right or left." Morgan-Monroe's orienteering brochure says the same about its own hills: "Following compass bearings over long distances is not practical in ridge-and-valley terrain. Instead, look for 'handrails'", and "ridge tops and stream beds also count."

**Catching features.** Where your route leaves the handrail, pick something you cannot miss: "Some prominent feature located near this point is selected to provide this warning. This is called a catching feature; it can also be used to tell you when you have gone too far." A road across your path, a lake, the bottom of a steep slope: if you reach it, you have overshot.

**Attack points.** "The catching feature may also be your navigational attack point; this point is the place where area navigation ends and point navigation begins." From there you move "cautiously and precisely along a given azimuth for a specified distance", and "A distance of 500 meters or less is most desirable." The Army's orienteering appendix gives examples: "stream junctions, bridges, and road intersections."

**The deliberate offset.** Suppose your goal sits on a road that crosses your path, and you aim straight at it. Small compass errors mean you reach the road without knowing whether the goal lies left or right. The manual's answer is to miss on purpose: "A deliberate offset by a known number of degrees in a known direction compensates for possible errors and ensures that upon reaching the linear feature, the user knows whether to go right or left to reach the objective." Its numbers: "Ten degrees is an adequate offset for most tactical uses. Each degree offset moves the course about 18 meters to the right or left for each 1,000 meters traveled." So 10° over 1,000 meters puts you about **180 meters** to one side, and you turn the other way when you hit the road. The 18 meters checks out: 1,000 × tan(1°) is about 17.5 meters. Over 600 meters, 10° is about 6 × 18 = **108 meters**. The manual's reason for erring on purpose: "If you introduce your own mistake, you will certainly know how to correct it."

**Thumbing.** The orienteering appendix's simplest trick: fold the map small, put your thumb beside your location, and move it as you move. "This technique prevents the orienteer from looking all over the map for his location."

**Putting it together.** The manual's conclusion: "the most successful navigation is obtained by combining the techniques described above. Constant orientation of the map and continuous observation of the terrain in conjunction with compass-read azimuths, and distance traveled on the ground compared with map distance, used together make reaching a destination more certain." A typical leg: follow a stream (handrail) to where a trail crosses it (catching feature and attack point), then walk the last 300 meters on a bearing with a pace count.

**Orienteering as a sport.** The 2001 manual describes civilian orienteering under "the United States Orienteering Federation with at least 70 clubs currently affiliated", on maps at 1:15,000 with a 5-meter contour interval and north lines drawn to magnetic north. That is a 2001 description; check the current body and its clubs before you go looking for an event.

:::reveal What is a catching feature? ||| A prominent feature near where your route leaves a handrail, chosen to warn you it is time to turn, or that you have gone too far.

:::reveal About how far to the side does a 10° deliberate offset put you after 1,000 meters? ||| About 180 meters: the manual's 18 meters per degree per 1,000 meters.

## Sources
- ${FM_2001} Locator: printed pp. 9-6 and 9-7 (PDF pp. 115 and 116), paragraph 9-4e; printed pp. 11-15 to 11-18 (PDF pp. 161 to 164), paragraphs 11-6a(9), (10), 11-6b and 11-6c; printed pp. F-19 to F-21 (PDF pp. 214 to 216), paragraphs F-10 and F-11.
- ${MMSF_ORIENT} Locator: "Orienteering Pointers", "Route Choice and Handrails". Linked only.`,
    },
    {
      slug: "without-a-compass",
      title: "25 · Without a compass: shadow, watch and star",
      section: "5 · Map and compass together",
      recallContent: [
        {
          prompt: "What is a navigational attack point, and how far from the goal does the Army manual prefer it?",
          answer: "The last easily identified checkpoint, where area navigation ends and point navigation begins; 500 meters or less.",
        },
        {
          prompt: "Why aim a deliberate offset to one side of a goal on a road?",
          answer: "So that when you reach the road you know which way to turn; 10° moves you about 180 meters aside per 1,000 meters.",
        },
      ],
      body: `${P("BAM runs the shadow-tip method with a stick on a sunny day, tries the watch method beside it, and compares both with his compass")}

**When the compass is gone.** The Army manual: "When a compass is not available, different techniques should be used to determine the four cardinal directions." These give rough directions, good enough to orient a map (lesson 20) or to keep walking the right general way. None replaces a compass.

**The shadow-tip method.** The manual calls it "This simple and accurate method of finding direction by the sun", in four steps:
1. "Place a stick or branch into the ground at a level spot where a distinctive shadow will be cast. Mark the shadow tip with a stone, twig, or other means. This first shadow mark is always the west direction."
2. "Wait 10 to 15 minutes until the shadow tip moves a few inches. Mark the new position of the shadow tip in the same way as the first."
3. "Draw a straight line through the two marks to obtain an approximate east-west line."
4. "Standing with the first mark (west) to your left, the other directions are simple; north is to the front, east is to the right, and south is behind you."

The rule to remember: "the first shadow-tip mark is always in the west direction, everywhere on earth." The manual's limit: it "is not intended for use in polar regions, which the Department of Defense defines as being above 60° latitude in either hemisphere." At night, the manual says the same trick works with a bright moon, "the moon has to be bright enough to cast a shadow."

**A shadow clock.** Set the stick upright where the east-west and north-south lines cross, and its shadow becomes an hour hand: the west end of the line reads 0600, the east end 1800, and the north-south line is noon. It "makes every day 12 unequal hours long", so it is rough, but it can reset a watch.

**The watch method, with its warning.** "In the north temperate zone only, the hour hand is pointed toward the sun. A south line can be found midway between the hour hand and 1200 hours, standard time. If on daylight saving time, the north-south line is found between the hour hand and 1300 hours." Then the warning, which is why the course lists it last: "The watch method can be in error, especially in the lower latitudes, and may cause circling." The manual's fix is to set the watch from a shadow clock and check it again after an hour.

**The North Star.** At night in the northern hemisphere, "The North Star is less than 1° off true north and does not move from its place because the axis of the earth is pointed toward it." To find it, use the two Pointers of the Big Dipper: "an imaginary line drawn through them five times their distance points to the North Star", the last star in the Little Dipper's handle. It is not the brightest star; "none is more important because of its location." It cannot be seen south of the equator, and "above latitude 70°, it is too high in the sky to be useful." Of the roughly 5,000 stars visible to the eye, the manual says navigators use fewer than 60.

**From direction to latitude.** The North Star gives more than north. How We Know What's Out There, in its lesson "1 · Finding yourself by the sky", shows how its height above the horizon gives your latitude, the idea behind the later sextant course in this series.

**Choose the honest tool.** Shadow-tip is slow but sound in daylight; the North Star is the best night reference in this hemisphere; the watch method is the one most likely to walk you in a circle. Each gives true north, not magnetic, so a map oriented by them needs no declination correction.

:::reveal In the shadow-tip method, which direction is the first mark? ||| West, "everywhere on earth."

:::reveal How far from true north is the North Star, according to the Army manual? ||| Less than 1°.

## Sources
- ${FM_2001} Locator: printed pp. 9-7 to 9-10 (PDF pp. 116 to 119), paragraph 9-5a to 9-5c; printed p. 11-18 (PDF p. 164), paragraph 11-7b.`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Map and compass together",
      section: "5 · Map and compass together",
      body: "A graded check on orienting the map, taking a bearing from the map to the ground, finding yourself by resection and intersection, pace counts and dead reckoning, handrails and offsets, and finding direction without a compass. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "According to the Army manual, what is the first step for a navigator in the field?", options: ["Orienting the map", "Counting the paces", "Taking a bearing", "Calling for help"], correctIndex: 0, explanation: "\"The first step for a navigator in the field is orienting the map.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "When is a map oriented, according to the Army manual?", options: ["Held upright with the legend at the bottom", "Horizontal, its north matching the ground's", "Folded so only your area is showing", "Turned so its text reads the right way up"], correctIndex: 1, explanation: "\"A map is oriented when it is in a horizontal position with its north and south corresponding to the north and south on the ground.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "Besides helping you navigate, what does orienting a map give you, per the workbook?", options: ["The exact distance to your goal", "The current magnetic declination", "A general idea of your own location", "A list of the nearest landmarks"], correctIndex: 2, explanation: "\"Orienting a map also gives you a general idea of your own location on the map.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "What is the workbook's first step in orienting a map by terrain?", options: ["Set the compass declination", "Draw a line to your goal", "Count paces to a landmark", "Find your approximate location"], correctIndex: 3, explanation: "Step 1: \"Find your approximate location on the map.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "How many landmarks does the workbook's terrain method use?", options: ["Two prominent features", "One distant mountaintop", "Three, each 120° apart", "Four, one in each direction"], correctIndex: 0, explanation: "Step 2: \"Select two prominent topographical features or landmarks that are visible to you and shown on the map.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "Which method does the Army's orienteering appendix recommend for orienting the map?", options: ["The compass only", "Terrain association", "The watch method", "The North Star"], correctIndex: 1, explanation: "\"The orienteer should try not to use the compass to orient the map. The terrain association technique is recommended instead.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "Before orienting a map with a compass, what does the workbook say to check besides declination?", options: ["That the map's legend is facing upward", "That the sun is directly behind your back", "That there is no local magnetic attraction", "That your pace count is current for today"], correctIndex: 2, explanation: "Step 1: \"Adjust compass for declination as appropriate. Make sure there is no local magnetic attraction.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "In the workbook's compass method, what goes at the index line?", options: ["The declination", "The map's scale", "South, or 180°", "North, or 360°"], correctIndex: 3, explanation: "Step 2: \"Rotate the compass housing so north or 360º is at the index line or direction of travel line on the compass.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "In the workbook's compass method, where does the base plate go?", options: ["Along the map's right or left edge", "Along the map's bottom margin", "Across the map's center diagonal", "On the legend at the map's foot"], correctIndex: 0, explanation: "Step 3: \"Place one side of the compass base plate along the right or left hand edge of the map.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "In the workbook's compass method, what do you turn until the needle aligns?", options: ["The compass housing alone", "The map and compass together", "The map alone, under it", "Your body, not the map"], correctIndex: 1, explanation: "Step 4: \"Carefully rotate the map and compass together until the needle is aligned with orienting arrow.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "With a compass set for declination, what does the map's edge point at once the map is oriented?", options: ["Magnetic north on the ground", "Grid north on the ground", "True north on the ground", "The sun's spot at midday"], correctIndex: 2, explanation: "Because the compass is set for declination, the map's edge (true north) points at true north on the ground.", sourceLessonSlug: "orienting-the-map" },
          { prompt: "Orienting the Hindustan quad with an unadjusted lensatic along a grid line, what should it read?", options: ["Exactly 0°, due north", "About 355°, west of north", "Exactly 180°, due south", "About 5°, the G-M angle"], correctIndex: 3, explanation: "Magnetic north is to the left of grid north, so the compass reads about the G-M angle, 4°49', when the map is oriented.", sourceLessonSlug: "orienting-the-map" },
          { prompt: "What does Morgan-Monroe's brochure leave out of its quick way to orient a map?", options: ["The magnetic declination", "The direction of north", "The terrain around you", "The map's legend and scale"], correctIndex: 0, explanation: "The brochure says to \"rotate the map so that map north points the same direction as compass north\"; it leaves out declination, about 5° in Indiana.", sourceLessonSlug: "orienting-the-map" },
          { prompt: "What does the brochure say to do when you turn to walk a new direction?", options: ["Fold the map and put it away", "Re-orient the map to the terrain", "Turn the map over, face down", "Start a brand new pace count"], correctIndex: 1, explanation: "\"When you turn your body to walk in a different direction, re-orient the map so that it is always aligned with the terrain.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "Once a map is oriented, what does the Army manual say not to do?", options: ["Look at the map's legend again", "Take any bearing from the map", "Move the map from that position", "Use a protractor on the map"], correctIndex: 2, explanation: "\"Do not move the map from its oriented position since any change in its position moves it out of line with the magnetic north.\"", sourceLessonSlug: "orienting-the-map" },
          { prompt: "Why does the workbook say you might measure a bearing on a map?", options: ["To find the map's contour interval", "To check the map's printing date", "To learn the map's horizontal datum", "To reach a place you cannot see"], correctIndex: 3, explanation: "Its examples include a place \"several miles away over hilly terrain\" or one you cannot see \"because of morning fog\".", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "Which tool does the workbook call easier and more accurate for a map bearing?", options: ["A protractor", "A compass", "A GPS unit", "A wristwatch"], correctIndex: 0, explanation: "\"a protractor is easier to use and more accurate than a compass.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "In the workbook's protractor method, where do you center the protractor?", options: ["Over the destination", "Over the starting point", "At the map's center", "On the nearest grid line"], correctIndex: 1, explanation: "Step 1: \"Center the protractor over the starting point and orient 0º with true north\".", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "In the workbook's protractor method, what must the 0° line be parallel to?", options: ["The nearest road", "The line to the goal", "The edge of the map", "The nearest stream"], correctIndex: 2, explanation: "\"the 0º line needs to be parallel to edge of map\".", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "What is the workbook's last step before using a protractor bearing in the field?", options: ["Add 180 degrees to the reading", "Measure the distance on the bar", "Fold the map along the drawn line", "Adjust the compass for declination"], correctIndex: 3, explanation: "Step 4: \"Before using this bearing in the field, adjust the compass for declination.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "Using a protractor against the map's grid lines, what kind of azimuth do you get?", options: ["A grid azimuth", "A true azimuth", "A magnetic one", "A back azimuth"], correctIndex: 0, explanation: "\"when using the protractor on a map, only grid azimuths are obtained.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "What happens if you read a map azimuth from the ending point instead of the start?", options: ["You get the same direction", "You get the opposite direction", "You get a 90-degree error", "You get a magnetic bearing"], correctIndex: 1, explanation: "\"If a mistake is made and the reading is taken from the ending point, the grid azimuth will be opposite, thus causing the user to go in the wrong direction.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "Does the length of a line change an accurately measured azimuth?", options: ["Yes; longer lines read larger", "Yes; shorter lines read larger", "No; distance does not change it", "Only beyond one full mile"], correctIndex: 2, explanation: "\"Distance does not change an accurately measured azimuth.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "To what precision does the Army manual read a map azimuth with a protractor?", options: ["The nearest minute", "The nearest 5 degrees", "The nearest 10 degrees", "The nearest degree"], correctIndex: 3, explanation: "\"When measuring an azimuth, the reading is always to the nearest degree or 10 mils.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "Using the compass as a protractor for a true bearing, how do you set its declination?", options: ["At 0° declination", "At the map's value", "At the G-M angle", "At 180 degrees"], correctIndex: 0, explanation: "Table 6-5, step 1: \"Set compass at 0º declination. Disregard the magnetic needle.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "Using the compass as a protractor on the map, what part does the needle play?", options: ["It sets the line", "None; disregard it", "It gives the scale", "It shows the goal"], correctIndex: 1, explanation: "\"Disregard the magnetic needle.\" On the map, the compass is just a protractor with a ruler attached.", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "In the compass-as-protractor method, where does the orienting arrow point?", options: ["To the destination on the map", "To magnetic north on the ground", "To true north, along the map edge", "To the nearest grid line's end"], correctIndex: 2, explanation: "\"Turn the compass housing so that the orienting arrow points to true north, parallel to map edge and longitude lines.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "In the USGS border method, where do you center the compass?", options: ["On your own location on the map", "On the destination on the map", "On the declination diagram", "Where your line crosses the border"], correctIndex: 3, explanation: "Draw a line through your location and destination across a map border, then center the compass where the line meets the border.", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "Why does the USGS warn you to get a map bearing in the correct sense?", options: ["A line has two values 180° apart", "The map's north is not at the top", "Compasses read backward on maps", "Bearings differ by 90° each way"], correctIndex: 0, explanation: "\"Be careful to get the bearing in the correct sense because a straight line will have two values 180° apart.\"", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "On the Hindustan quad, a protractor gives 60° true. About what magnetic bearing do you walk?", options: ["About 55.5°", "About 64.5°", "About 240°", "About 60.0°"], correctIndex: 1, explanation: "In Indiana, add the declination: 60 + 4.5 = about 64.5° magnetic.", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "When plotting a field bearing onto a map, what does the Army manual say to do first?", options: ["Draw a line to the map's edge", "Add 180 degrees to the bearing", "Convert it to the map's north", "Measure the distance with a strip"], correctIndex: 2, explanation: "The first step is to convert the azimuth from magnetic to grid, if necessary, before placing the protractor.", sourceLessonSlug: "a-bearing-from-the-map" },
          { prompt: "What does the Army manual call finding your own position from known landmarks?", options: ["Intersection", "Dead reckoning", "Polar plotting", "Resection"], correctIndex: 3, explanation: "\"Resection is the method of locating one's position on a map by determining the grid azimuth to at least two well-defined locations\".", sourceLessonSlug: "finding-yourself" },
          { prompt: "For greater accuracy, how many landmarks does the Army manual want for resection?", options: ["Three or more", "Exactly two", "Just one", "Five or more"], correctIndex: 0, explanation: "\"For greater accuracy, the desired method of resection would be to use three or more well-defined locations.\"", sourceLessonSlug: "finding-yourself" },
          { prompt: "When can you use modified resection?", options: ["When you can see three landmarks", "When you stand on a road or stream", "When your compass is broken", "When it is fully dark outside"], correctIndex: 1, explanation: "Modified resection works \"when the person is located on a linear feature on the ground, such as a road, canal, or stream\".", sourceLessonSlug: "finding-yourself" },
          { prompt: "In modified resection, where are you?", options: ["At the landmark you sighted on", "Halfway between two landmarks", "Where your line crosses the feature", "At the end of your pace count"], correctIndex: 2, explanation: "\"The location of the user is where the line crosses the linear feature.\"", sourceLessonSlug: "finding-yourself" },
          { prompt: "What does the Army manual call locating a distant point from two known positions?", options: ["Resection", "Thumbing", "Offsetting", "Intersection"], correctIndex: 3, explanation: "Intersection is \"the location of an unknown point by successively occupying at least two (preferably three) known positions on the ground\".", sourceLessonSlug: "finding-yourself" },
          { prompt: "What word does the workbook use for finding your own position?", options: ["Triangulation", "Intersection", "Resection", "Orienteering"], correctIndex: 0, explanation: "The workbook calls it triangulation, and uses the same word for finding an unknown distant point.", sourceLessonSlug: "finding-yourself" },
          { prompt: "In the workbook's smoke example, where is the smoke?", options: ["At the end of one long bearing", "Where two observers' lines cross", "At the nearest tower to the fire", "Halfway along one observer's line"], correctIndex: 1, explanation: "Two observers each take a bearing to the smoke, and \"The intersection of the two lines is the location of the smoke.\"", sourceLessonSlug: "finding-yourself" },
          { prompt: "How should you treat the clash of names between the two documents?", options: ["Use only the Army's words", "Use only the workbook's word", "Know both; neither is wrong", "Treat them as two methods"], correctIndex: 2, explanation: "\"Neither is wrong; they are two vocabularies, and you should know both before you talk to someone who learned the other.\"", sourceLessonSlug: "finding-yourself" },
          { prompt: "How far apart does the workbook want the two landmarks, ideally?", options: ["About 10 degrees", "About 180 degrees", "About 45 degrees", "About 90 degrees"], correctIndex: 3, explanation: "\"It is best if the objects are approximately 90° apart to reduce potential errors.\"", sourceLessonSlug: "finding-yourself" },
          { prompt: "After taking bearings to the landmarks, what does the workbook convert them to?", options: ["Back bearings", "Grid bearings", "Mils, from degrees", "Paces per 100 m"], correctIndex: 0, explanation: "Step 4: \"Convert to back bearings.\"", sourceLessonSlug: "finding-yourself" },
          { prompt: "What does the workbook call the lines drawn back from the landmarks?", options: ["Lines of sight", "Lines of position", "Grid lines", "Handrails"], correctIndex: 1, explanation: "The back-bearing lines from the objects are called lines of position; where they intersect is your position.", sourceLessonSlug: "finding-yourself" },
          { prompt: "You read 40° to a tower and 130° to a bridge. Which lines do you draw from them?", options: ["40° from the tower, 130° from the bridge", "130° from the tower, 40° from the bridge", "220° from the tower, 310° from the bridge", "310° from the tower, 220° from the bridge"], correctIndex: 2, explanation: "Draw the back bearings: 40 + 180 = 220° from the tower and 130 + 180 = 310° from the bridge.", sourceLessonSlug: "finding-yourself" },
          { prompt: "With the Army's lensatic, what extra step comes before the back bearings?", options: ["Convert mils to inches", "Add 90 to each bearing", "Orient the map to south", "Convert magnetic to grid"], correctIndex: 3, explanation: "The manual's steps convert each magnetic azimuth to grid with the G-M angle, then take the back azimuth.", sourceLessonSlug: "finding-yourself" },
          { prompt: "Why do lines crossing near 90° give a better fix?", options: ["Small bearing errors spread less", "They need fewer landmarks seen", "They avoid using any compass", "They cancel the declination"], correctIndex: 0, explanation: "Lines crossing at a shallow angle smear small bearing errors along a long stretch; lines near 90° pin them down.", sourceLessonSlug: "finding-yourself" },
          { prompt: "What does a large triangle from three lines of position tell you?", options: ["You are exactly at its center point", "Your bearings were poor; retake them", "The map's scale is printed wrong", "The landmarks have moved since"], correctIndex: 1, explanation: "Three lines seldom meet at one point; the small triangle shows how good your bearings were. If it is large, take them again.", sourceLessonSlug: "finding-yourself" },
          { prompt: "How can you resect without a compass?", options: ["A watch held toward the sun at noon", "A pace count kept from the trailhead", "A straightedge on a map set by terrain", "A GPS receiver's own back bearing"], correctIndex: 2, explanation: "On a map oriented by terrain, pivot a straightedge on a known point until it lines up with the same point on the ground, and draw the line.", sourceLessonSlug: "finding-yourself" },
          { prompt: "When does the Army manual say to resect, besides when lost?", options: ["Only at the start of a walk", "Only after dark has fallen", "Only when the GPS has failed", "Periodically, along the way"], correctIndex: 3, explanation: "\"Periodically, you should accomplish a resection triangulation using two or more known points to pinpoint and correct your position on the map.\"", sourceLessonSlug: "finding-yourself" },
          { prompt: "What does the Army manual call the most common source of error when moving?", options: ["Determining distance", "Reading the legend", "Holding the compass", "Choosing a route"], correctIndex: 0, explanation: "\"Determining distance is the most common source of error encountered while moving either mounted or dismounted.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "How does the Army manual define a pace?", options: ["Two natural steps, about 60 inches", "One natural step, about 30 inches", "One stride of exactly one meter", "One step, about 30 centimeters"], correctIndex: 1, explanation: "\"A pace is equal to one natural step, about 30 inches long.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "How does the workbook define a pace?", options: ["One natural step, about 30 inches", "The distance of one full stride", "The average length of two steps", "Any step on level, open ground"], correctIndex: 2, explanation: "\"A pace is defined as the average length of two natural steps (a count is made each time the same foot touches the ground).\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "About how many one-step Army paces of 30 inches make 100 meters?", options: ["About 66", "About 100", "About 30", "About 131"], correctIndex: 3, explanation: "30 inches is about 0.76 meter, and 100 ÷ 0.76 is roughly 131.", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "About how many two-step paces make 100 meters, for the same walker?", options: ["About 66", "About 131", "About 100", "About 262"], correctIndex: 0, explanation: "A two-step pace is about twice an Army pace, so about 131 ÷ 2, roughly 66.", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "How many paces does Morgan-Monroe's brochure call average for 30 feet?", options: ["Ten or twelve", "Five or six", "Two or three", "Fifteen"], correctIndex: 1, explanation: "\"Five or six paces would be average for 30 feet,\" counting both feet as one pace.", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "What must you never do with the two kinds of pace count?", options: ["Write them", "Test them", "Mix them", "Name them"], correctIndex: 2, explanation: "\"Decide which you count, write it on your route card, and never mix them.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "How long are the workbook's pacing courses?", options: ["100 yards or 66 yards", "One mile or one half", "600 meters only", "100 feet or 66 feet"], correctIndex: 3, explanation: "\"Each course needs to be 100' or 66' (one chain).\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "On what ground does the workbook set its three pacing courses?", options: ["Level, moderate slope, steep slope", "Paved road, dirt trail, and open field", "Sand, then mud, then loose gravel", "Daylight, dusk, and the full dark"], correctIndex: 0, explanation: "\"One course needs to be on level ground and the other two need to be on a moderate slope and steep slope.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "After walking a 600-meter course, how does the Army manual find paces per 100 meters?", options: ["Multiply the paces by 6", "Divide the total paces by 6", "Divide the total paces by 60", "Subtract 600 from the paces"], correctIndex: 1, explanation: "\"count the paces it takes you to walk the 600 meters, then divide the total paces by 6.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "What happens to your pace on a downslope?", options: ["It shortens", "It stays the same", "It lengthens", "It stops counting"], correctIndex: 2, explanation: "\"Your pace lengthens on a downslope and shortens on an upgrade.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "What does a head wind do to your pace?", options: ["Lengthens it", "Doubles it", "Leaves it alone", "Shortens it"], correctIndex: 3, explanation: "\"A head wind shortens the pace and a tail wind increases it.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "In the Army manual's example, 120 paces per 100 m may become what uphill?", options: ["130 or more", "110 or fewer", "120 exactly", "240 or more"], correctIndex: 0, explanation: "\"if it normally takes you 120 paces to walk 100 meters, your pace count may increase to 130 or more when walking up a slope.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "What does poor visibility do to your pace, per the Army manual?", options: ["Lengthens it", "Shortens it", "Doubles it", "Has no effect"], correctIndex: 1, explanation: "\"Poor visibility, such as in fog, rain, or darkness, will shorten your pace.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "What does the Army manual say about keeping your pace count in your head?", options: ["It is the best way, if you focus", "Only for counts under 100 paces", "Do not; use pebbles, knots or marks", "Only when you walk on a trail"], correctIndex: 2, explanation: "\"Do not try to remember the count; always use one of these methods\": pebbles, knots in a string, or marks in a notebook.", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "What are the two steps of dead reckoning, per the Army manual?", options: ["Walk the ground, then draw the map", "Orient the map, then fold it away", "Read the legend, then the margin", "Measure on the map, then apply on ground"], correctIndex: 3, explanation: "First determine direction and distance on the map with a protractor and scales; then apply them on the ground with a compass and a distance measure.", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "A 450-meter leg; your count is 64 paces per 100 meters. How many paces do you expect?", options: ["288", "450", "64", "703"], correctIndex: 0, explanation: "4.5 × 64 = 288 paces before you look for the end of the leg.", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "What does the Army manual say happens to compass and pace errors over distance?", options: ["They cancel", "They compound", "They vanish", "They halve"], correctIndex: 1, explanation: "\"Error from them compounds over distance; therefore, you could soon be far afield from your intended route even if you performed the procedures correctly.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "When should a pace count begin anew?", options: ["Every 1,000 paces, without fail", "Only at the start of each day", "Each time your position is confirmed", "Whenever you stop to drink water"], correctIndex: 2, explanation: "\"Pace counts or any type of distance measurement should begin anew each time your position is confirmed on the map.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "How does the Army manual compare terrain association with dead reckoning?", options: ["Slower, but a great deal more accurate", "Easier to teach and to learn quickly", "Only usable along paved roads and trails", "More forgiving and less time-consuming"], correctIndex: 3, explanation: "\"The technique of moving by terrain association is more forgiving of mistakes and far less time-consuming than dead reckoning.\"", sourceLessonSlug: "pace-count-and-dead-reckoning" },
          { prompt: "What everyday example does the Army manual give for terrain association?", options: ["Finding the neighborhood grocery store", "Driving on the interstate at night", "Reading a street sign in the city", "Following a bus route to school"], correctIndex: 0, explanation: "\"you do not find the neighborhood grocery store by dead reckoning\".", sourceLessonSlug: "let-the-land-help" },
          { prompt: "What is a handrail, according to the Army manual?", options: ["A railing on a trail's steep section", "A linear feature parallel to your route", "A fixed rope on a cliff or a ledge", "A bearing taken from a fence post"], correctIndex: 1, explanation: "\"Handrails are linear features like roads or highways, railroads, power transmission lines, ridgelines, or streams that run roughly parallel to your direction of travel.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "While a handrail runs beside you, how precise must your compass work be?", options: ["You must sight every 10 m", "You must count every pace", "You can rough compass it", "You must resect each mile"], correctIndex: 2, explanation: "You can \"rough compass without the use of steering marks for as long as the feature travels with you on your right or left.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "Besides roads and trails, what does the brochure say count as handrails?", options: ["Single trees and boulders", "Clouds and the sun's track", "Fence posts and road signs", "Ridge tops and stream beds"], correctIndex: 3, explanation: "\"Roads and trails are obvious examples, but ridge tops and stream beds also count\".", sourceLessonSlug: "let-the-land-help" },
          { prompt: "What does a catching feature tell you?", options: ["Turn here, or you went too far", "Your exact grid reference there", "The current declination there", "How many paces remain to go"], correctIndex: 0, explanation: "It warns you that it is time to go your separate ways from the handrail, and \"can also be used to tell you when you have gone too far.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "What is a navigational attack point?", options: ["Where you begin the walk", "Where area navigation ends", "Where you camp at night", "Where the handrail begins"], correctIndex: 1, explanation: "It is \"the place where area navigation ends and point navigation begins.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "How far from the objective does the Army manual prefer an attack point?", options: ["5 kilometers or less", "50 meters or less", "500 meters or less", "At least 2 kilometers"], correctIndex: 2, explanation: "\"A distance of 500 meters or less is most desirable.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "Which are the Army orienteering appendix's examples of attack points?", options: ["Single trees, rocks, and fallen logs", "Clouds, hilltops, and distant towers", "Camps, parking lots, and campfires", "Stream junctions, bridges, intersections"], correctIndex: 3, explanation: "\"Some examples of attack points are stream junctions, bridges, and road intersections.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "Why aim a deliberate offset to one side of a goal on a road?", options: ["To know which way to turn at the road", "To walk a shorter route to the road", "To avoid having to take a bearing", "To cancel the magnetic declination"], correctIndex: 0, explanation: "The offset \"ensures that upon reaching the linear feature, the user knows whether to go right or left to reach the objective.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "How big an offset does the Army manual call adequate for most uses?", options: ["One degree", "Ten degrees", "Ninety degrees", "Forty-five"], correctIndex: 1, explanation: "\"Ten degrees is an adequate offset for most tactical uses.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "How far does each degree of offset move you per 1,000 meters?", options: ["About 1.8 meters", "About 180 meters", "About 18 meters", "About 100 meters"], correctIndex: 2, explanation: "\"Each degree offset moves the course about 18 meters to the right or left for each 1,000 meters traveled.\" 1,000 × tan(1°) is about 17.5.", sourceLessonSlug: "let-the-land-help" },
          { prompt: "How far aside does a 10° offset put you after 1,000 meters?", options: ["About 18 meters", "About 1,000 meters", "About 100 meters", "About 180 meters"], correctIndex: 3, explanation: "10 × 18 = about 180 meters.", sourceLessonSlug: "let-the-land-help" },
          { prompt: "How far aside does a 10° offset put you after 600 meters?", options: ["About 108 meters", "About 180 meters", "About 60 meters", "About 18 meters"], correctIndex: 0, explanation: "6 × 18 = about 108 meters.", sourceLessonSlug: "let-the-land-help" },
          { prompt: "What does the Army manual say about introducing your own mistake on purpose?", options: ["It always makes you get lost", "You will know how to correct it", "It is banned in orienteering", "It doubles your total error"], correctIndex: 1, explanation: "\"If you introduce your own mistake, you will certainly know how to correct it.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "What is thumbing?", options: ["Hitchhiking back to the trailhead", "Measuring distance by thumb widths", "Keeping a thumb beside your map spot", "Pressing the compass needle down"], correctIndex: 2, explanation: "Fold the map small and put your thumb beside your location, moving it as you move. It \"prevents the orienteer from looking all over the map for his location.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "According to the Army manual, what gives the most successful navigation?", options: ["Dead reckoning alone", "Terrain association alone", "A GPS with no map", "Combining the techniques"], correctIndex: 3, explanation: "\"the most successful navigation is obtained by combining the techniques described above.\"", sourceLessonSlug: "let-the-land-help" },
          { prompt: "What contour interval did the 2001 manual describe for civilian orienteering maps?", options: ["5 meters", "10 feet", "20 meters", "40 feet"], correctIndex: 0, explanation: "The 2001 manual described orienteering maps at 1:15,000 with a 5-meter contour interval and magnetic north lines, a description lesson 24 says to check against today.", sourceLessonSlug: "let-the-land-help" },
          { prompt: "What does the Army manual call the shadow-tip method?", options: ["Fast but unreliable", "Simple and accurate", "Useful only at night", "Best near the poles"], correctIndex: 1, explanation: "\"This simple and accurate method of finding direction by the sun consists of four basic steps\".", sourceLessonSlug: "without-a-compass" },
          { prompt: "In the shadow-tip method, which direction is the first mark?", options: ["East", "North", "West", "South"], correctIndex: 2, explanation: "\"This first shadow mark is always the west direction.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "Standing with the first shadow mark on your left, which way do you face?", options: ["South", "East", "West", "North"], correctIndex: 3, explanation: "\"Standing with the first mark (west) to your left, the other directions are simple; north is to the front, east is to the right, and south is behind you.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "Above what latitude is the shadow-tip method not intended for use?", options: ["60 degrees", "30 degrees", "45 degrees", "80 degrees"], correctIndex: 0, explanation: "It \"is not intended for use in polar regions, which the Department of Defense defines as being above 60° latitude in either hemisphere.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "What can stand in for the sun in the shadow-tip method at night?", options: ["The North Star", "A bright moon", "A headlamp", "A campfire"], correctIndex: 1, explanation: "At night \"Just use the moon instead of the sun. In this case, the moon has to be bright enough to cast a shadow.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "What hours does a shadow clock always read at sunrise and sunset?", options: ["0700 and 1900", "0500 and 2000", "0600 and 1800", "1200 and 2400"], correctIndex: 2, explanation: "It \"always reads 0600 hours at sunrise and 1800 hours at sunset\", making every day 12 unequal hours long.", sourceLessonSlug: "without-a-compass" },
          { prompt: "In the north temperate zone, where does the watch method put the south line?", options: ["Straight along the minute hand", "Opposite the hour hand from 6", "Midway between the 3 and the 9", "Midway between the hour hand and 12"], correctIndex: 3, explanation: "Point the hour hand at the sun; \"A south line can be found midway between the hour hand and 1200 hours, standard time.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "On daylight saving time, which hour replaces 1200 in the watch method?", options: ["1300", "1100", "1400", "0600"], correctIndex: 0, explanation: "\"If on daylight saving time, the north-south line is found between the hour hand and 1300 hours.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "What warning does the Army manual give about the watch method?", options: ["It works only near the equator", "It can err and may cause circling", "It needs a watch with a compass", "It is exact to within one degree"], correctIndex: 1, explanation: "\"The watch method can be in error, especially in the lower latitudes, and may cause circling.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "How far from true north is the North Star, per the Army manual?", options: ["About 5 degrees", "About 10 degrees", "Less than 1 degree", "Exactly 0 degrees"], correctIndex: 2, explanation: "\"The North Star is less than 1° off true north\".", sourceLessonSlug: "without-a-compass" },
          { prompt: "How do the Big Dipper's Pointers find the North Star?", options: ["Extend their line twice their gap", "Follow the Big Dipper's handle down", "Look straight between the two stars", "Extend their line five times their gap"], correctIndex: 3, explanation: "\"an imaginary line drawn through them five times their distance points to the North Star.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "Above which latitude is the North Star too high in the sky to be useful?", options: ["70 degrees", "40 degrees", "50 degrees", "90 degrees"], correctIndex: 0, explanation: "\"above latitude 70°, it is too high in the sky to be useful\".", sourceLessonSlug: "without-a-compass" },
          { prompt: "Of about 5,000 stars visible to the eye, how many does the manual say navigators use?", options: ["About 500", "Fewer than 60", "All of them", "Only one"], correctIndex: 1, explanation: "\"Less than 60 of approximately 5,000 stars visible to the eye are used by navigators.\"", sourceLessonSlug: "without-a-compass" },
          { prompt: "What does How We Know What's Out There's first lesson get from the North Star?", options: ["Your longitude, from its color", "The time, from its brightness", "Your latitude, from its height", "The declination, from its tilt"], correctIndex: 2, explanation: "Its lesson \"1 · Finding yourself by the sky\" shows how the North Star's height above the horizon gives your latitude.", sourceLessonSlug: "without-a-compass" },
          { prompt: "Does a map oriented by the North Star need a declination correction?", options: ["Yes; add the declination each time", "Yes; subtract the G-M angle", "Only on daylight saving time", "No; these methods give true north"], correctIndex: 3, explanation: "Each method gives true north, not magnetic, so a map oriented by them needs no declination correction.", sourceLessonSlug: "without-a-compass" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Planning and walking a route
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-route-on-paper",
      title: "26 · A route on paper",
      section: "6 · Planning and walking a route",
      recallContent: [
        {
          prompt: "In the shadow-tip method, which mark is west, and where is north when you stand with it on your left?",
          answer: "The first mark is always west; with it on your left, north is in front of you.",
        },
        {
          prompt: "What warning does the Army manual give about the watch method?",
          answer: "\"The watch method can be in error, especially in the lower latitudes, and may cause circling.\"",
        },
      ],
      body: `**Four steps.** The Army manual reduces land navigation to four: "you must know where you are, plan the route, stay on the route, and recognize the objective." Sections 2 to 5 gave you the tools. This section puts them in order, starting at a table with the map.

**Start where you are.** "If movement takes place without establishing the initial location, everything that is done in the field from there on is a gamble." Mark the start on the map before you mark anything else.

**What to weigh.** Among the manual's factors for choosing a route, the ones that matter to a walker are "Travel time", "Travel distance", "Energy expenditure", and the "Availability of good checkpoints and steering marks." The shortest line is often not the quickest: the manual's example is a route that looks like 1,000 meters but crosses a large ridge, against one of 1,500 meters "on flat terrain", where "the quickest route would be across the flat terrain". Its advice: "Following a valley floor or proceeding near (not on) the crest of a ridgeline generally offers easy movement, good navigation checkpoints". Follow the shape of the land rather than fighting it.

**Choose checkpoints the map can be trusted for.** "The best checkpoints are linear features that cross the route. Examples include perennial streams, hard-top roads, ridges, valleys, railroads, and power transmission lines." Next best are "features that represent elevation changes of at least two contour intervals such as hills, depressions, spurs, and draws." And a warning that ties back to lesson 4's dates: "Primary reliance upon cultural features and vegetation is cautioned against because they are most likely to have changed since the map was last revised." A trail or a clearing on a map is a claim about the past.

**Mark the decision points.** "Checkpoints located at places where changes in direction are made mark your decision points." The manual adds: "it is especially important to review the route and anticipate where mistakes are most likely to be made so they can be avoided."

**Finish with a short, careful leg.** The goal itself is often small and easy to miss, so the manual's method is to aim first for a checkpoint near it that is hard to miss, then "follow a specific compass azimuth and pace off the relatively short, known distance to the final, pinpoint destination. This procedure is called point navigation." That last checkpoint is lesson 24's attack point, best within 500 meters.

**The route card.** Write the plan down, one line per leg. This course's card has these columns, built from the lessons so far:
- **Leg**: from which checkpoint to which.
- **Bearing**: true from the map, and magnetic if your compass is not set for declination (lesson 17).
- **Distance**: in meters from the bar scale (lesson 7), and in your own paces (lesson 23).
- **Handrail and catching feature**: what guides you and what tells you that you have gone too far (lesson 24).
- **Checkpoint**: what you should see at the end of the leg.
- **Time**: your estimate for the leg (lesson 27).

An invented example, to show the form: "Leg 2: stream junction to trail crossing; bearing 64° true, 69° magnetic; 450 m, 288 paces; handrail the stream on the left; catching feature the gravel road; checkpoint a footbridge; 15 minutes." Workbook Appendix C prints a field-notes form you can adapt, and lesson 28 shows a card being used.

**Leave a copy behind.** The Forest Service's checklist for the Deam Wilderness: "Tell someone where you are going and when to expect you to return. Be specific." A route card is a specific answer.

:::reveal According to the Army manual, what are the best checkpoints? ||| Linear features that cross the route, such as perennial streams, hard-top roads, ridges, valleys, railroads and power lines.

:::reveal Why does the Army manual caution against relying on cultural features and vegetation as checkpoints? ||| They are the features "most likely to have changed since the map was last revised."

## Sources
- ${FM_2001} Locator: printed pp. 11-6 and 11-12 to 11-13 (PDF pp. 152 and 158 to 159), paragraphs 11-2a, 11-4b(5) and 11-5a to 11-5d.
- ${NWCG_475} Locator: p. 171, Appendix C field-notes form.
- ${DEAM} Locator: "Pre-Trip Check List".`,
    },
    {
      slug: "time-slope-and-turning-back",
      title: "27 · Time, slope, and the turn-back rule",
      section: "6 · Planning and walking a route",
      recallContent: [
        {
          prompt: "What are the Army manual's four steps of land navigation?",
          answer: "Know where you are, plan the route, stay on the route, and recognize the objective.",
        },
        {
          prompt: "What does the manual call the method of reaching a small goal from a nearby, easy checkpoint?",
          answer: "Point navigation: follow a compass azimuth and pace off the short, known distance to the final destination.",
        },
      ],
      body: `${QR("a search-and-rescue member or a wilderness or land-navigation instructor, to check the timing advice and the turn-back guidance for civilian walkers")}

**How long will it take?** The workbook says navigation skills help you know "how long it will take, and when you will get back." The only number the two backbone documents give for walking speed is a military one: "The normal rate for an 8-hour foot march is 4 kmph", that is, 4 kilometers an hour for trained soldiers, which the manual says varies with "Distance", "Time allowed", "Terrain", "Weather", "Physical condition of soldiers" and "Equipment/weight to be carried." Treat it as an upper bound, not a promise. Better: time yourself on the calibration walk from lesson 23, flat and uphill, and plan with your own number.

**Worked, with the soldier's rate.** A 6-kilometer route at 4 km/h is 6 ÷ 4 = **1.5 hours** of walking before any stop, climb or wrong turn. At half that speed, the same route takes **3 hours**. Write the slower figure on your route card.

**Slope costs distance as well as effort.** Map distances are horizontal (lesson 7). The workbook's own figure shows a stretch that is 384 feet on the map and 470 feet on the ground, because the ground climbs and falls: 470 ÷ 384 is about 1.22, so the walk is about **22 percent longer** than the map says. Lesson 8 measured slope as rise over run; the steeper the slope, the bigger that gap, and your pace shortens uphill too (lesson 23). The manual's route example makes the same point in time: a 1,500-meter flat route can beat a 1,000-meter route over a ridge.

**Budget the margin.** Add up the legs, use your slow speed, add time for every climb and for finding each checkpoint, and then add time you do not expect to need. The River Expedition course *Finding Your Way, and Losing It* names the failure this protects against, in its lesson "2 · When the plan fails": "committing further because you have already committed." Each choice to push on feels like progress, "and each one reduces your margin, and margin is the thing that absorbs the next surprise."

**Decide the turn-back rule before you need it.** The same lesson's counter-habit: "Decide the turn-back rule before you need it." For a walk, that means writing down, before you leave, a clock time at which you turn around wherever you are, and a condition that ends the walk early: a missed checkpoint you cannot resolve, failing light, weather, or anyone in the group wanting to stop. The river course's reason: "A rule set in advance survives contact with the desire to keep going. A judgment made at the moment does not, because at the moment you are tired, invested and want to be finished."

**Who calls it.** The same lesson again: "Somebody has to be able to make a call", and there must be "a way for the least confident person in the group to stop the day without it being a defeat." Agree on both at the trailhead, not on the ridge.

**Light is part of the budget.** Darkness slows everything: the Army manual says poor visibility shortens your pace, and night navigation needs its own plan (lesson 30). If your turn-back time would put you on unfamiliar ground after dark, it is too late.

:::reveal How long does a 6-kilometer route take at the Army's 4 km/h march rate, before stops? ||| 1.5 hours (6 ÷ 4). A slower walker should plan with their own measured speed.

:::reveal According to the river course, why set the turn-back rule in advance? ||| "A rule set in advance survives contact with the desire to keep going. A judgment made at the moment does not."

## Sources
- ${FM_2001} Locator: printed pp. 11-10 and 11-12 (PDF pp. 156 and 158), paragraphs 11-4b(1)(a) and 11-4b(5); printed p. 5-11 (PDF p. 60), paragraph 5-3a(2)(f).
- ${NWCG_475} Locator: p. 111, chapter 6 introduction; p. 133, Figure 6-11; p. 45, slope.`,
    },
    {
      slug: "bams-route",
      title: "28 · A planned route, walked and logged",
      section: "6 · Planning and walking a route",
      recallContent: [
        {
          prompt: "What does the river course name as the failure that turns a problem into an accident?",
          answer: "\"committing further because you have already committed.\" Each push feels like progress and uses up the margin.",
        },
        {
          prompt: "What is a turn-back rule, for a walk?",
          answer: "A clock time and conditions, written down before you leave, at which you turn around wherever you are.",
        },
      ],
      body: `${P("BAM plans a route of four or five legs on the quad he films on, walks it with a written log on camera, and shows on the map afterward where the log and the ground disagreed and why; filmed only where the land manager allows it (lesson 3)")}

${QR("a search-and-rescue member or a wilderness or land-navigation instructor, to review BAM's footage, his log and the lessons he draws from it before release")}

**What this lesson will hold.** This is the demonstration lesson: one real route, planned with the route card from lesson 26, walked with the methods of sections 4 and 5, and logged as it happens. The video carries it. The text below says what the log records and what to watch for, so you can keep the same log on your own walk.

**The log.** At each checkpoint, write:
- **The time**, so you can compare your real speed with your plan (lesson 27).
- **The leg and the bearing you walked**, with its north (lesson 18).
- **The pace count** for the leg, and the count you expected (lesson 23).
- **What you saw**, compared with what the card said you should see.
- **Any fix**: a resection, or a known feature reached, after which the pace count starts again (lesson 22). The Army manual: "Pace counts or any type of distance measurement should begin anew each time your position is confirmed on the map."

**What to watch for in the footage.** The documents name where routes go wrong, and the log is how you catch each one:
- **Distance.** "Determining distance is the most common source of error". A count that runs long on the uphill legs is the slope and the ground at work, not a mistake to hide.
- **Direction.** Leaving out Indiana's declination of about 4.5° puts a 450-meter leg about 35 meters off line (450 × tan 4.5°). Applying it with the wrong sign doubles the error to about 9°, and the miss to about 70 meters (450 × tan 9°). The check is the both-ways conversion in lesson 17.
- **The map's age.** A trail or clearing that has moved since the map was made: "cultural features and vegetation" are "most likely to have changed since the map was last revised."
- **Seeing what you expect.** The River Expedition course's definition fits a walk: "you are lost when your belief about your position stops matching reality, whether or not you have noticed." The log is a record of what you believed, written before you knew whether it was true.

**After the walk.** Lay the log beside the map and mark where your position, as logged, and the truth parted, then why. The river course's question for any failure account applies to your own: "what did they believe that turned out to be wrong?" Lesson 36 asks you to plan and log your own route the same way.

:::reveal According to the Army manual, when should a pace count begin anew? ||| Each time your position is confirmed on the map.

:::reveal Applying Indiana's 4.5° declination with the wrong sign makes what error, and how far off is a 450-meter leg? ||| About 9° (twice 4.5°), which puts you about 70 meters off line (450 × tan 9°).

## Sources
- ${FM_2001} Locator: printed p. 5-11 (PDF p. 60), paragraph 5-3; printed p. 11-13 (PDF p. 159), paragraph 11-5b(2); printed p. 11-16 (PDF p. 162), paragraph 11-6a(11).`,
    },
    {
      slug: "when-you-do-not-know-where-you-are",
      title: "29 · When you do not know where you are",
      section: "6 · Planning and walking a route",
      recallContent: [
        {
          prompt: "What should a route log record at each checkpoint?",
          answer: "The time, the leg and bearing walked (with its north), the pace count against the expected count, what you saw against the card, and any fix.",
        },
        {
          prompt: "Why does the log matter after the walk?",
          answer: "It records what you believed before you knew whether it was true, so you can find where your logged position and the truth parted, and why.",
        },
      ],
      body: `${QR("a search-and-rescue member or a wilderness or land-navigation instructor, to check every step of this lesson, which is safety advice for a person who may be in trouble")}

**Lost is a belief, not a place.** The River Expedition course *Finding Your Way, and Losing It*, lesson "1 · You cannot get lost on a river, and people do", gives the definition this lesson uses: "you are lost when your belief about your position stops matching reality, whether or not you have noticed." Its warning is that "the dangerous period is not the moment of confusion. It is the hours before it, when you were confidently wrong and making decisions on that basis." The Army manual puts the same idea positively: "The key to success in land navigation is to know your location at all times."

**First: stop.** Every step taken while confused adds distance between you and your last good fix. Stop walking, and get out the map and the log.

**Second: go back to your last certain position.** The river course's second habit: "know your last certain position. When something stops making sense, the right move is usually to work forward from the last point you were sure of, rather than to reason from where you assume you are now." Your log (lesson 28) says where that was, when, and on what bearing you left it. Time since then and your usual speed give a rough circle you must be inside.

**Third: try to fix your position.** Orient the map by compass (lesson 20). If you can see two landmarks that are on the map, resect (lesson 22). If you are on a trail, stream or road, one bearing and modified resection may be enough. The Army manual calls periodic resection the cure for drift: "Periodically, you should accomplish a resection triangulation using two or more known points to pinpoint and correct your position on the map."

**Fourth: if the land offers a big catching feature, use it, carefully.** Some places print their own way out. Morgan-Monroe's orienteering brochure tells its course users: "LOST? Note that all the hills/ridges on the map lead to roads. Simply walk uphill, and to the west." That advice is true of that course's ground, not of every forest. The same idea, a large linear feature you cannot miss, is lesson 24's catching feature at the scale of a whole area. Know yours before you start.

**Fifth: if you cannot fix your position, stay and be found.** The Army manual, writing about polar regions, gives the principle: "Distressed persons in these areas are advised to stay in one place so that search/rescue teams may easily find them." The catalog's Off-Grid & Emergency Survival course, in its lesson "20 · Your communication plan, and signaling for help", says the same for any stranding: "stay put if it's safe (a stationary person is easier to locate)", and make yourself visible and audible, with a whistle carrying farther than your voice. The Park Service's Ten Essentials ask for bright clothing for this reason: "Use bright clothing to make yourself easier to see in case Search and Rescue needs to look for you."

**Before any of this: the plan you left behind.** Staying put works because someone knows where to look. The Forest Service's checklist: "Tell someone where you are going and when to expect you to return. Be specific." A route card left at home (lesson 26) turns a search of a whole forest into a search of a line.

**What this lesson is not.** It is not search-and-rescue training and not a survival course. It is the navigator's half: stop, go back to the last certain position, try to fix it, and if you cannot, stay and help them find you.

:::reveal According to the river course, when is the dangerous period of being lost? ||| The hours before the confusion, "when you were confidently wrong and making decisions on that basis."

:::reveal If you cannot fix your position, what do the Army manual and the survival course both advise? ||| Stay in one place, if it is safe, so searchers can find you, and make yourself visible and audible.

## Sources
- ${FM_2001} Locator: printed p. 11-6 (PDF p. 152), paragraph 11-2; printed p. 11-16 (PDF p. 162), paragraph 11-6a(11); printed p. 9-8 (PDF p. 117), paragraph 9-5a(3)(d).
- ${MMSF_ORIENT} Locator: the "LOST?" note. Linked only.
- ${NPS_TEN} Locator: "Extra clothing".
- ${DEAM} Locator: "Pre-Trip Check List".`,
    },
    {
      slug: "night-navigation",
      title: "30 · Night navigation",
      section: "6 · Planning and walking a route",
      recallContent: [
        {
          prompt: "Lost, what is the first thing to do, and where do you work from?",
          answer: "Stop walking; then work forward from your last certain position rather than from where you assume you are.",
        },
        {
          prompt: "If you cannot fix your position, what is the advice?",
          answer: "Stay in one place if it is safe, so searchers can find you, and make yourself visible and audible.",
        },
      ],
      body: `${QR("a search-and-rescue member or a wilderness or land-navigation instructor, to check the night methods, the lensatic click arithmetic and the advice on where and how a civilian should practice after dark")}

**Same methods, less to see.** The Army manual opens its night paragraph plainly: "Darkness presents its own characteristics for land navigation because of limited or no visibility. However, the techniques and principles are the same as that used for day navigation." What changes is how much you can check as you go, so more of the work moves to the planning table.

**Plan harder.** "The success in nighttime land navigation depends on rehearsals during the planning phase before the movement, such as detailed analysis of the map to determine the type of terrain in which the navigation is going to take place and the predetermination of azimuths and distances." Every bearing and distance on your route card (lesson 26) is worked out in daylight. The manual also weighs checkpoints "even more heavily when selecting the route for a night operation", because "The degree of visibility and ease of recognition (visual effect) are the key".

**Dead reckoning, with help.** "The basic technique used for nighttime land navigation is dead reckoning with several compasses recommended." A second person a few steps ahead can be the steering mark, the way the manual sends "a member of the unit out in front of your position to create your own steering mark". If you pick natural marks, they "must have even more unique shapes than those selected during daylight", because "As darkness approaches, colors disappear and objects appear as black or gray silhouettes." And keep them close: in darkness "your steering marks must be close together."

**Your pace changes.** "Smaller steps are taken during night navigation, so remember, the pace count is different." The manual recommends a night pace count measured on a 100-meter course, and lesson 23's list already said poor visibility shortens a pace.

**The lensatic's night features.** The cover's "two luminous sighting slots or dots" and the bezel ring's 3° clicks let you set a bearing by touch, the "click method":
- Set the luminous line over the black index line. For a bearing under 180°, divide by 3 and count that many clicks counterclockwise: the manual's example, "51° ÷ 3 = 17 clicks counterclockwise."
- For a bearing over 180°, subtract it from 360, divide by 3, and count clockwise: "360°-330° = 30 ÷3 = 10 clicks clockwise."
- When a bearing does not divide by 3, round, and remember which way: rounding up means the goal "is to be found on the left"; rounding down, "on the right."
- For a quick right angle around an obstacle, turn until the luminous E (right) or W (left) sits under the luminous line, without touching the bezel.
- "When the compass is to be used in darkness, an initial azimuth should be set while light is still available, if possible."

**North at night.** The North Star (lesson 25) is the best reference in this hemisphere, and the shadow-tip method works with the moon "bright enough to cast a shadow."

**Light, and the rules.** Carry a headlamp and spare batteries: the Park Service's Ten Essentials say "Headlamps are the recommended light source because they are hands-free." And check that you may be there at all. Of the sites in lesson 3, the Charles C. Deam Wilderness is the one whose rules expect overnight use away from trails; on the wider Hoosier National Forest, "Day use areas are closed between 10 PM and 6 AM except for fishermen on the water." At Morgan-Monroe, after dark means registered backcountry camping. Practice first on ground you have walked in daylight.

:::reveal Using the click method on a lensatic, how do you set 51°? ||| 51 ÷ 3 = 17 clicks counterclockwise from the index line.

:::reveal Why does the Army manual say night steering marks need more distinctive shapes? ||| Because in the dark "colors disappear and objects appear as black or gray silhouettes."

## Sources
- ${FM_2001} Locator: printed p. 11-18 (PDF p. 164), paragraph 11-7; printed pp. 11-12 to 11-16 (PDF pp. 158 to 162), paragraphs 11-5b(1), 11-6a(5)(c), (6) and (11)(b); printed pp. 9-2 and 9-5 to 9-6 (PDF pp. 111 and 114 to 115), paragraphs 9-2a and 9-4c(2) to 9-4d(2).
- ${NPS_TEN} Locator: "Illumination".
- ${DEAM} Locator: "Restrictions".
- ${HNF_RULES} Locator: the day-use hours.
- ${MMSF_PAGE} Locator: "Camping", backcountry paragraph. Linked only.`,
    },
    {
      slug: "difficult-terrain",
      title: "31 · Difficult terrain",
      section: "6 · Planning and walking a route",
      recallContent: [
        {
          prompt: "Using the click method on a lensatic, how do you set 330°?",
          answer: "360 - 330 = 30, and 30 ÷ 3 = 10 clicks clockwise from the index line.",
        },
        {
          prompt: "What does the Army manual say changes about your pace at night?",
          answer: "\"Smaller steps are taken during night navigation, so remember, the pace count is different.\" It recommends a night count from a 100-meter course.",
        },
      ],
      body: `${QR("a search-and-rescue member or a wilderness or land-navigation instructor, to check what this lesson carries over from the Army manual's notes and what it says about steep wooded ground, wet bottoms and snow in Indiana")}

**Hints, not rules.** The Army manual's chapter on deserts, mountains, jungles, arctic ground and cities begins with a disclaimer worth copying: "The following information is not doctrine." Its refrain through every environment is that "the four steps and two techniques for navigation presented earlier remain valid": know where you are, plan, stay on the route, recognize the goal, by dead reckoning and terrain association. What changes is which of the two techniques the ground lets you use.

**Desert: distance lies.** In clear desert air, visibility "often contribute[s] to gross underestimations of ranges. Errors of up to 200 or 300 percent are not uncommon." Distant landmarks give "a false sense of security", and "It is not uncommon to develop errors of several kilometers when casually estimating a position in this manner." In dunes with few features, "you must proceed by dead reckoning."

**Mountains: read the slope.** "Since mountain maps often use large contour intevals" (the manual's spelling), small features vanish from the map. One technique the manual offers is the aspect of slope: "take a compass reading along an imaginary line that runs straight down the slope. It should cut through each of the contour lines at about a 90° angle." Compare that bearing with the map and "you will be able to keep track of your location ... even when visibility is poor."

**Forest and jungle: dead reckoning, and a pace table.** In thick growth, "very little terrain association can be accomplished because of the heavy foliage", so "The navigator must rely heavily upon his compass and the dead reckoning technique". The manual's best tool for it is a personal pace table: "your average pace count per 100 meters for each of the types of terrain through which you are likely to navigate." It also warns that vegetation is what maps get wrong: "In temperate climates, it is the areas of vegetation that are most likely to be altered and incorrectly portrayed on a map." For swamps, "The usual technique used in swamp navigation is dead reckoning."

**Snow and bare trees.** "There are no special techniques for navigating in arctic terrain." But with leaves off, "the absence of foliage makes movement by terrain association easier", while "in relatively flat, open areas covered with snow (especially in bright sunlight), the resulting lack of contrast may interfere with your being able to read the land." On a clear night, "Moonlight and starlight on a clear night reflect off the snow", which helps.

**Towns.** In built-up places "it is man-made features, such as roads, railroads, bridges, and buildings that become important", and because towns change fast, the topographic map "is likely to be outdated." A current street map helps.

**What this means near Indianapolis.** No desert, no mountains, no jungle, but each lesson has an Indiana form. Morgan-Monroe describes its own ground as "many steep ridges and valleys": that is mountain advice at a smaller size, so use the aspect of slope and expect your pace to change sharply between ridge and hollow. Summer woods are the manual's foliage problem: plan more dead reckoning from May to October and more terrain association once the leaves fall. Wet bottoms along creeks are swamp navigation in miniature. And keep a personal pace table for trail, open woods, brush and slope, filled in on your calibration walks (lesson 23). The Deam Wilderness (lesson 3) is where the rules allow you to practice all of it off trail.

**Avoid what you cannot handle.** The best route through difficult ground is often around it. The manual's route advice from lesson 26 holds here too: follow the shape of the land rather than fighting it.

:::reveal According to the Army manual, how large can range-estimate errors be in clear desert air? ||| "Errors of up to 200 or 300 percent are not uncommon."

:::reveal What is a personal pace table? ||| Your average pace count per 100 meters for each kind of ground you are likely to cross.

## Sources
- ${FM_2001} Locator: printed pp. 13-1 to 13-3 (PDF pp. 173 to 175), paragraph 13-1; printed p. 13-5 (PDF p. 177), paragraph 13-2; printed pp. 13-6 to 13-8 (PDF pp. 178 to 180), paragraph 13-3; printed pp. 13-9 and 13-10 (PDF pp. 181 and 182), paragraphs 13-4 and 13-5.
- ${MMSF_PAGE} Locator: the property description. Linked only.`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Planning and walking a route",
      section: "6 · Planning and walking a route",
      body: "A graded check on planning a route on paper, time and the turn-back rule, keeping a route log, what to do when you do not know where you are, night navigation, and difficult terrain. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What are the Army manual's four steps of land navigation?", options: ["Know where you are, plan, stay on route, recognize the goal", "Pack the kit, orient the map, walk the route, report back", "Read the margin, set declination, count paces, resect", "Choose a site, check the rules, film the route, log it"], correctIndex: 0, explanation: "\"you must know where you are, plan the route, stay on the route, and recognize the objective.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "What does the Army manual say about moving without first establishing your location?", options: ["It is fine on a short, easy route", "Everything after that is a gamble", "A GPS will make up the difference", "It saves time on the way out"], correctIndex: 1, explanation: "\"If movement takes place without establishing the initial location, everything that is done in the field from there on is a gamble.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "In the manual's example, which route is quicker: 1,000 m over a ridge or 1,500 m flat?", options: ["The 1,000-meter ridge route", "Both take exactly as long", "The 1,500-meter flat route", "Neither; take a road instead"], correctIndex: 2, explanation: "A route that looks like 1,000 meters but crosses a large ridge loses to one of 1,500 meters \"on flat terrain\".", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "Where does the Army manual say movement is generally easy, with good checkpoints?", options: ["Straight up the steepest slope at hand", "Along the very top of every ridgeline", "Across the wettest ground in a hollow", "A valley floor, or near, not on, a crest"], correctIndex: 3, explanation: "\"Following a valley floor or proceeding near (not on) the crest of a ridgeline generally offers easy movement, good navigation checkpoints\".", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "What does the Army manual call the best checkpoints?", options: ["Linear features that cross the route", "Single trees standing by the trail", "Buildings that are shown on the map", "Clearings in the middle of the woods"], correctIndex: 0, explanation: "\"The best checkpoints are linear features that cross the route.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "Which of these does the Army manual list as a good linear checkpoint?", options: ["A lone oak tree", "A perennial stream", "A small clearing", "A painted blaze"], correctIndex: 1, explanation: "Its examples: \"perennial streams, hard-top roads, ridges, valleys, railroads, and power transmission lines.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "After linear features, which checkpoints does the manual rank next?", options: ["Trail signs and painted tree blazes", "Buildings and fences shown on the map", "Changes of two or more contour intervals", "Clearings and changes in vegetation"], correctIndex: 2, explanation: "Next best are \"features that represent elevation changes of at least two contour intervals such as hills, depressions, spurs, and draws.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "Why does the manual caution against relying on vegetation as checkpoints?", options: ["It is never printed on topographic maps", "It is too large to be useful as a mark", "It shows up only on aerial photographs", "It likely changed since the last revision"], correctIndex: 3, explanation: "Cultural features and vegetation \"are most likely to have changed since the map was last revised.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "What does the Army manual call checkpoints where you change direction?", options: ["Decision points", "Attack points", "Catch points", "Steering marks"], correctIndex: 0, explanation: "\"Checkpoints located at places where changes in direction are made mark your decision points.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "While planning, what does the manual say to anticipate?", options: ["Which landmarks are the tallest", "Where mistakes are most likely", "How many photos you will take", "Where the GPS signal is best"], correctIndex: 1, explanation: "\"it is especially important to review the route and anticipate where mistakes are most likely to be made so they can be avoided.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "What does the manual call the final, paced leg on a bearing to a small goal?", options: ["Area navigation", "Thumbing", "Point navigation", "Handrailing"], correctIndex: 2, explanation: "Follow \"a specific compass azimuth and pace off the relatively short, known distance to the final, pinpoint destination. This procedure is called point navigation.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "Which column does lesson 26's route card include for each leg?", options: ["The weather forecast for the day", "The names of the people walking", "The map's printing date and edition", "Distance in meters and in paces"], correctIndex: 3, explanation: "The card lists, per leg: the leg, the bearing, the distance in meters and paces, the handrail and catching feature, the checkpoint, and the time.", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "On the route card, why give a magnetic bearing as well as a true one?", options: ["For a compass not set for declination", "Because maps print magnetic bearings", "Because true bearings are inaccurate", "For use only after dark has fallen"], correctIndex: 0, explanation: "The bearing column holds the true bearing from the map, \"and magnetic if your compass is not set for declination\".", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "In lesson 26's invented example, how long is leg 2?", options: ["288 meters, 450 paces", "450 meters, 288 paces", "600 meters, 384 paces", "4.5 kilometers, 2,880 paces"], correctIndex: 1, explanation: "\"Leg 2: stream junction to trail crossing; bearing 64° true, 69° magnetic; 450 m, 288 paces\".", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "What does the Deam checklist say to tell someone?", options: ["Which compass brand you bought", "How many photos you plan to take", "Where you go and when you return", "Your pace count on level ground"], correctIndex: 2, explanation: "\"Tell someone where you are going and when to expect you to return. Be specific.\"", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "Where can you find a form to adapt for your route card or log?", options: ["The Army manual's cover", "The USGS symbol guide", "The NPS Ten Essentials", "The workbook's Appendix C"], correctIndex: 3, explanation: "\"Workbook Appendix C prints a field-notes form you can adapt\".", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "What walking speed does the Army manual give for an 8-hour foot march?", options: ["4 kilometers an hour", "6 kilometers an hour", "2 kilometers an hour", "8 kilometers an hour"], correctIndex: 0, explanation: "\"The normal rate for an 8-hour foot march is 4 kmph.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "How should a civilian treat the Army's march rate when planning?", options: ["As the exact rate for any walker", "As an upper bound, not a promise", "As a minimum speed to keep up", "As the rate for walking at night"], correctIndex: 1, explanation: "\"Treat it as an upper bound, not a promise. Better: time yourself on the calibration walk\".", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "Which factor does the Army manual list as changing the rate of march?", options: ["The color of the map sheet", "The brand of the compass", "Equipment and weight carried", "The time zone you are in"], correctIndex: 2, explanation: "The rate varies with distance, time allowed, terrain, weather, physical condition and \"Equipment/weight to be carried.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "How long does a 6-km route take at 4 km/h, before stops?", options: ["2.5 hours", "0.6 hours", "24 hours", "1.5 hours"], correctIndex: 3, explanation: "6 ÷ 4 = 1.5 hours of walking before any stop, climb or wrong turn.", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "How long does the same 6-km route take at half that speed?", options: ["3 hours", "1 hour", "6 hours", "12 hours"], correctIndex: 0, explanation: "At 2 km/h, 6 ÷ 2 = 3 hours. Lesson 27 says to write the slower figure on your card.", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "Which speed does lesson 27 say to write on your route card?", options: ["The faster figure", "The slower figure", "The Army's 4 km/h", "Your best sprint"], correctIndex: 1, explanation: "\"Write the slower figure on your route card.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "In the workbook's figure, how much longer is the ground than the 384-foot map distance?", options: ["About 2 percent longer", "About 50 percent longer", "About 22 percent longer", "Exactly the same length"], correctIndex: 2, explanation: "The ground measures 470 feet against 384 on the map; 470 ÷ 384 is about 1.22.", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "Why do map distances fall short of the walk on hilly ground?", options: ["The map uses a smaller printed scale", "The map leaves out all of the trails", "The map's datum is out of date", "The map measures horizontal distance"], correctIndex: 3, explanation: "Map distances are horizontal (lesson 7), so climbs and descents add distance the map does not show.", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "What does the river course name as the failure that turns a problem into an accident?", options: ["Committing further because you committed", "Starting a walk without enough water", "Forgetting to set the declination", "Walking at night without a headlamp"], correctIndex: 0, explanation: "\"committing further because you have already committed.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "In the river course's words, what does margin do?", options: ["It speeds you up on the flat", "It absorbs the next surprise", "It replaces your pace count", "It sets the map's declination"], correctIndex: 1, explanation: "\"margin is the thing that absorbs the next surprise.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "When does the river course say to decide the turn-back rule?", options: ["When you feel tired", "At the far end", "Before you need it", "After it gets dark"], correctIndex: 2, explanation: "\"Decide the turn-back rule before you need it.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "For a walk, what does lesson 27 say a turn-back rule includes?", options: ["A promise to reach the goal whatever happens", "A plan to keep going if the weather turns", "A rule that only the leader may stop the walk", "A clock time to turn around wherever you are"], correctIndex: 3, explanation: "A clock time at which you turn around wherever you are, and conditions that end the walk early.", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "Why does a rule set in advance work better than a judgment in the moment?", options: ["In the moment you are tired and invested", "A rule set early is always more accurate", "Judgments are not allowed on a route card", "The weather is easier to predict in advance"], correctIndex: 0, explanation: "\"A judgment made at the moment does not, because at the moment you are tired, invested and want to be finished.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "Who should be able to stop the day, per the river course?", options: ["Only the strongest walker", "The least confident person", "Only the person with a map", "Nobody, once you have started"], correctIndex: 1, explanation: "There must be \"a way for the least confident person in the group to stop the day without it being a defeat.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "When is a turn-back time too late, according to lesson 27?", options: ["When it is any time after 12 noon", "When the walk is shorter than 6 km", "When it puts you on new ground after dark", "When the forecast says light rain"], correctIndex: 2, explanation: "\"If your turn-back time would put you on unfamiliar ground after dark, it is too late.\"", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "What will lesson 28's video show?", options: ["BAM buying a compass in a store", "BAM racing an orienteering course", "BAM teaching a search-and-rescue team", "BAM walking and logging a planned route"], correctIndex: 3, explanation: "BAM plans a route of four or five legs, walks it with a written log on camera, and shows where the log and the ground disagreed.", sourceLessonSlug: "bams-route" },
          { prompt: "Where may BAM film lesson 28's route?", options: ["Only where the land manager allows it", "Anywhere on public land in Indiana", "Only on paved trails in state parks", "Only on private land he owns himself"], correctIndex: 0, explanation: "The demonstration is \"filmed only where the land manager allows it (lesson 3)\".", sourceLessonSlug: "bams-route" },
          { prompt: "Why does the log record the time at each checkpoint?", options: ["To prove the walk was finished", "To compare real speed with the plan", "To set the compass declination", "To work out the map's scale"], correctIndex: 1, explanation: "\"The time, so you can compare your real speed with your plan (lesson 27).\"", sourceLessonSlug: "bams-route" },
          { prompt: "After a fix in the log, what happens to the pace count?", options: ["It is doubled for the next leg", "It is copied to the next leg", "It starts again from zero", "It is dropped for the walk"], correctIndex: 2, explanation: "\"Pace counts or any type of distance measurement should begin anew each time your position is confirmed on the map.\"", sourceLessonSlug: "bams-route" },
          { prompt: "A pace count runs long on the uphill legs. What does lesson 28 say that is?", options: ["A mistake you should hide", "A broken compass needle", "A wrong declination sign", "The slope and ground at work"], correctIndex: 3, explanation: "\"A count that runs long on the uphill legs is the slope and the ground at work, not a mistake to hide.\"", sourceLessonSlug: "bams-route" },
          { prompt: "Leaving out Indiana's 4.5° declination puts a 450-m leg about how far off line?", options: ["About 35 meters", "About 4.5 meters", "About 70 meters", "About 450 meters"], correctIndex: 0, explanation: "450 × tan 4.5° is about 35 meters.", sourceLessonSlug: "bams-route" },
          { prompt: "Applying Indiana's declination with the wrong sign makes what angular error?", options: ["About 4.5 degrees", "About 9 degrees", "About 18 degrees", "About 180 degrees"], correctIndex: 1, explanation: "The wrong sign doubles the error: twice 4.5° is about 9°.", sourceLessonSlug: "bams-route" },
          { prompt: "A 9° error puts a 450-meter leg about how far off line?", options: ["About 9 meters", "About 35 meters", "About 70 meters", "About 450 meters"], correctIndex: 2, explanation: "450 × tan 9° is about 70 meters.", sourceLessonSlug: "bams-route" },
          { prompt: "What check catches a declination sign error before you walk?", options: ["A second look at the map's legend", "A longer pace count on each leg", "Walking the leg twice to compare", "The both-ways conversion in lesson 17"], correctIndex: 3, explanation: "\"The check is the both-ways conversion in lesson 17.\"", sourceLessonSlug: "bams-route" },
          { prompt: "Which map features does lesson 28 warn may have moved since the map was made?", options: ["A trail or a clearing", "A ridge or a valley", "A hilltop or a saddle", "A contour or an index"], correctIndex: 0, explanation: "Cultural features and vegetation \"are most likely to have changed since the map was last revised.\"", sourceLessonSlug: "bams-route" },
          { prompt: "What does the log record, in the sense lesson 28 means?", options: ["Only the places you were certain of", "What you believed, before you knew", "The map's errors, after the walk", "The weather at each checkpoint"], correctIndex: 1, explanation: "\"The log is a record of what you believed, written before you knew whether it was true.\"", sourceLessonSlug: "bams-route" },
          { prompt: "What question does the river course ask of any failure account?", options: ["Who was at fault for the failure?", "How much did the failure cost them?", "What did they believe that was wrong?", "Which gear failed first on the trip?"], correctIndex: 2, explanation: "\"what did they believe that turned out to be wrong?\"", sourceLessonSlug: "bams-route" },
          { prompt: "According to the river course, when are you lost?", options: ["When you cannot see a trail", "When your phone has no signal", "When it gets dark outside", "When belief and reality part"], correctIndex: 3, explanation: "\"you are lost when your belief about your position stops matching reality, whether or not you have noticed.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "When is the dangerous period of being lost, per the river course?", options: ["The hours before the confusion", "The first minute of confusion", "The night after you are lost", "The walk home after a rescue"], correctIndex: 0, explanation: "\"the dangerous period is not the moment of confusion. It is the hours before it, when you were confidently wrong\".", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "What does the Army manual call the key to success in land navigation?", options: ["Owning the most precise compass", "Knowing your location at all times", "Walking faster than the others", "Carrying a GPS and a spare battery"], correctIndex: 1, explanation: "\"The key to success in land navigation is to know your location at all times.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Confused about your position, what does lesson 29 say to do first?", options: ["Walk faster", "Head uphill", "Stop walking", "Call a friend"], correctIndex: 2, explanation: "Every step taken while confused adds distance from your last good fix. Stop, and get out the map and the log.", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Where does the river course say to reason from when something stops making sense?", options: ["Where you assume you are", "The nearest road on the map", "The point you meant to reach", "Your last certain position"], correctIndex: 3, explanation: "\"work forward from the last point you were sure of, rather than to reason from where you assume you are now.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "What gives you a rough circle you must be inside?", options: ["Time since the fix and your speed", "The declination and the map date", "The contour interval and scale", "The number of landmarks in view"], correctIndex: 0, explanation: "\"Time since then and your usual speed give a rough circle you must be inside.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "On a trail or stream, which method may fix you with one bearing?", options: ["Intersection", "Modified resection", "Dead reckoning", "Thumbing the map"], correctIndex: 1, explanation: "On a trail, stream or road, one bearing and modified resection may be enough.", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "What does Morgan-Monroe's orienteering brochure tell lost course users to do?", options: ["Walk downhill, toward water", "Stay put and blow a whistle", "Walk uphill, and to the west", "Follow the nearest stream east"], correctIndex: 2, explanation: "\"LOST? Note that all the hills/ridges on the map lead to roads. Simply walk uphill, and to the west.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Does the brochure's escape advice work in every forest?", options: ["Yes; ridges always lead to roads", "Yes, if you walk to the west", "No; it is wrong even there", "No; it fits that course's ground"], correctIndex: 3, explanation: "\"That advice is true of that course's ground, not of every forest.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Which earlier idea is the brochure's escape advice a large version of?", options: ["A catching feature", "A deliberate offset", "A back bearing", "A pace table"], correctIndex: 0, explanation: "A large linear feature you cannot miss is lesson 24's catching feature at the scale of a whole area.", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "If you cannot fix your position, what does the Army manual advise?", options: ["Walk in a straight line out", "Stay in one place to be found", "Climb the highest hill near", "Follow any trail you can find"], correctIndex: 1, explanation: "\"Distressed persons in these areas are advised to stay in one place so that search/rescue teams may easily find them.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Why does the survival course say to stay put if it is safe?", options: ["Walking uses water you will need later", "The trail will lead searchers to you", "A stationary person is easier to locate", "Moving at night is always against rules"], correctIndex: 2, explanation: "\"stay put if it's safe (a stationary person is easier to locate)\".", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Why does the survival course favor a whistle?", options: ["It scares off animals at night", "It works as a compass in a pinch", "It is required by park rules", "It carries farther than your voice"], correctIndex: 3, explanation: "A whistle carries farther than your voice, which is why the survival course has you add one to your kit.", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Why do the Ten Essentials ask for bright clothing?", options: ["To be seen if Search and Rescue looks", "To keep you cooler in summer sun", "To scare off ticks and insects", "To meet the hunting season rule"], correctIndex: 0, explanation: "\"Use bright clothing to make yourself easier to see in case Search and Rescue needs to look for you.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Why does staying put work, according to lesson 29?", options: ["The forest is always small", "Someone knows where to look", "Phones always find you", "Rescuers walk every trail"], correctIndex: 1, explanation: "\"Staying put works because someone knows where to look.\" A route card left at home turns a search of a forest into a search of a line.", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "What does lesson 29 call itself?", options: ["A complete search-and-rescue course", "A wilderness first-aid lesson in full", "The navigator's half, not SAR training", "A survival course for spending the night"], correctIndex: 2, explanation: "\"It is not search-and-rescue training and not a survival course. It is the navigator's half\".", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "According to the Army manual, are night techniques different from day ones?", options: ["Yes; night uses only the stars", "Yes; night bans dead reckoning", "No; but maps are not used", "No; the principles are the same"], correctIndex: 3, explanation: "\"However, the techniques and principles are the same as that used for day navigation.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "What does night success depend on, per the Army manual?", options: ["Rehearsals during planning", "A brighter headlamp", "Walking much faster", "Leaving the map home"], correctIndex: 0, explanation: "\"The success in nighttime land navigation depends on rehearsals during the planning phase before the movement\".", sourceLessonSlug: "night-navigation" },
          { prompt: "What does the Army manual call the basic technique for night navigation?", options: ["Terrain association on its own", "Dead reckoning, several compasses", "The watch method by moonlight", "Following the brightest star"], correctIndex: 1, explanation: "\"The basic technique used for nighttime land navigation is dead reckoning with several compasses recommended.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "How does the Army manual weigh checkpoints for a night route?", options: ["Less heavily than in the daytime", "Not at all; use bearings instead", "Even more heavily than by day", "Exactly the same as in daytime"], correctIndex: 2, explanation: "Reliable checkpoints are \"weighted even more heavily when selecting the route for a night operation.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "Why must night steering marks have more unusual shapes?", options: ["Stars hide most of the trees", "Headlamps make things brighter", "Shapes change color at night", "Colors fade to gray silhouettes"], correctIndex: 3, explanation: "\"As darkness approaches, colors disappear and objects appear as black or gray silhouettes.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "In darkness, how far apart should steering marks be?", options: ["Close together", "Far apart", "Exactly 100 m", "One per mile"], correctIndex: 0, explanation: "In darkness \"your steering marks must be close together.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "What can a second person do for a night navigator?", options: ["Carry the map and the compass", "Serve as a steering mark ahead", "Count the paces out loud", "Hold the light on the dial"], correctIndex: 1, explanation: "The manual sends \"a member of the unit out in front of your position to create your own steering mark\".", sourceLessonSlug: "night-navigation" },
          { prompt: "What happens to your pace count at night?", options: ["It stays exactly the same", "It halves; steps are longer", "It changes; steps are smaller", "It is no longer needed"], correctIndex: 2, explanation: "\"Smaller steps are taken during night navigation, so remember, the pace count is different.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "Using the click method, how many clicks set 51°, and which way?", options: ["17 clicks, clockwise", "51 clicks, counterclockwise", "3 clicks, clockwise", "17 clicks, counterclockwise"], correctIndex: 3, explanation: "\"51° ÷ 3 = 17 clicks counterclockwise.\" Bearings under 180° count counterclockwise.", sourceLessonSlug: "night-navigation" },
          { prompt: "Using the click method, how many clicks set 330°, and which way?", options: ["10 clicks, clockwise", "10 clicks, counterclockwise", "110 clicks, clockwise", "30 clicks, clockwise"], correctIndex: 0, explanation: "\"360°-330° = 30 ÷3 = 10 clicks clockwise.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "If you round a bearing up for the click method, where is the goal?", options: ["To your right", "To your left", "Straight ahead", "Behind you"], correctIndex: 1, explanation: "Rounding up means the object \"is to be found on the left\"; rounding down, \"on the right.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "On a lensatic at night, how do you make a 90° turn right?", options: ["Put the luminous W under the line", "Turn the bezel ring 30 clicks", "Put the luminous E under the line", "Point the cover at the moon"], correctIndex: 2, explanation: "Turn until the center of the luminous letter E is under the luminous line; W for a left turn. The bezel ring is not moved.", sourceLessonSlug: "night-navigation" },
          { prompt: "When should you set an initial night azimuth on the compass, if possible?", options: ["Only after full darkness falls", "At midnight, by the North Star", "After the first missed checkpoint", "While light is still available"], correctIndex: 3, explanation: "\"When the compass is to be used in darkness, an initial azimuth should be set while light is still available, if possible.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "Which light does the Park Service recommend, and why?", options: ["A headlamp, because it is hands-free", "A lantern, because it is the brightest", "A phone light, because you carry one", "A candle, because it needs no battery"], correctIndex: 0, explanation: "\"Headlamps are the recommended light source because they are hands-free.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "When are Hoosier National Forest day-use areas closed?", options: ["8 PM to 8 AM", "10 PM to 6 AM", "Sunset to sunrise", "Midnight to 5 AM"], correctIndex: 1, explanation: "\"Day use areas are closed between 10 PM and 6 AM except for fishermen on the water.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "Where should you first practice night navigation, per lesson 30?", options: ["On ground you have never seen", "Off trail in a nature preserve", "On ground you walked in daylight", "Along a busy road for the lights"], correctIndex: 2, explanation: "\"Practice first on ground you have walked in daylight.\"", sourceLessonSlug: "night-navigation" },
          { prompt: "What disclaimer opens the Army manual's chapter on difficult terrain?", options: ["It applies to vehicles alone", "It replaces earlier chapters", "It is for officers only", "The information is not doctrine"], correctIndex: 3, explanation: "\"The following information is not doctrine.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "What does the manual say stays valid in every environment?", options: ["The four steps and two techniques", "The desert's dune-reading rules", "The watch method of direction", "A pace count set on the flat"], correctIndex: 0, explanation: "\"the four steps and two techniques for navigation presented earlier remain valid\".", sourceLessonSlug: "difficult-terrain" },
          { prompt: "How large can range-estimate errors be in clear desert air?", options: ["2 or 3 percent", "200 or 300 percent", "20 or 30 percent", "2,000 percent"], correctIndex: 1, explanation: "\"Errors of up to 200 or 300 percent are not uncommon.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "How large can errors grow from casually estimating a desert position by distant features?", options: ["A few meters only", "A hundred meters", "Several kilometers", "Under a pace count"], correctIndex: 2, explanation: "\"It is not uncommon to develop errors of several kilometers when casually estimating a position in this manner.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "In sandy dunes with few features, how must you proceed?", options: ["By terrain association", "By thumbing the map", "By following animals", "By dead reckoning"], correctIndex: 3, explanation: "\"you must proceed by dead reckoning.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "Why do small features vanish from mountain maps?", options: ["Large contour intervals", "Small printed scales", "Old magnetic data", "Faded map colors"], correctIndex: 0, explanation: "\"Since mountain maps often use large contour intevals\" (the manual's spelling), small features are not shown.", sourceLessonSlug: "difficult-terrain" },
          { prompt: "How do you take the aspect of slope?", options: ["A bearing straight up to the sky", "A bearing straight down the slope", "A bearing along the ridge's crest", "A bearing to the nearest stream"], correctIndex: 1, explanation: "\"take a compass reading along an imaginary line that runs straight down the slope. It should cut through each of the contour lines at about a 90° angle.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "At what angle should the aspect-of-slope line cross the contours?", options: ["About 45 degrees", "About 10 degrees", "About 90 degrees", "About 180 degrees"], correctIndex: 2, explanation: "\"It should cut through each of the contour lines at about a 90° angle.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "Why can little terrain association be done in jungle or thick forest?", options: ["Maps of jungle have no contours", "Compasses fail in the humidity", "There are no streams to follow", "Heavy foliage hides the land"], correctIndex: 3, explanation: "\"very little terrain association can be accomplished because of the heavy foliage.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "What is a personal pace table?", options: ["Your paces per 100 m on each kind of ground", "A table of the steps each partner takes", "A list of the paces from each landmark", "A chart of the time taken on each leg"], correctIndex: 0, explanation: "\"your average pace count per 100 meters for each of the types of terrain through which you are likely to navigate.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "In temperate climates, which areas does the manual say maps most often get wrong?", options: ["Areas of high ground", "Areas of vegetation", "Areas of open water", "Areas near railroads"], correctIndex: 1, explanation: "\"it is the areas of vegetation that are most likely to be altered and incorrectly portrayed on a map.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "What is the usual technique in swamp navigation, per the manual?", options: ["Thumbing", "The watch method", "Dead reckoning", "Handrailing"], correctIndex: 2, explanation: "\"The usual technique used in swamp navigation is dead reckoning.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "What does the manual say about special techniques for arctic terrain?", options: ["There are seven", "Use stars only", "Use the sun only", "There are none"], correctIndex: 3, explanation: "\"There are no special techniques for navigating in arctic terrain.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "What makes terrain association easier once the leaves fall?", options: ["The absence of foliage", "The longer daylight", "The frozen streams", "The brighter snow glare"], correctIndex: 0, explanation: "\"the absence of foliage makes movement by terrain association easier\".", sourceLessonSlug: "difficult-terrain" },
          { prompt: "In flat, open snow in bright sun, what may stop you reading the land?", options: ["The cold on the compass", "The lack of contrast", "The short days of winter", "The frozen map paper"], correctIndex: 1, explanation: "\"the resulting lack of contrast may interfere with your being able to read the land.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "In towns, why is the topographic map likely to be outdated?", options: ["Towns are left off such maps", "Towns block the GPS signal", "Towns grow and change fast", "Towns use a different datum"], correctIndex: 2, explanation: "\"As a result of the rapid growth and changes occurring in many urban areas, the military topographic map is likely to be outdated.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "How does Morgan-Monroe describe its own ground?", options: ["Flat farmland and open prairie", "Sand dunes along a lakeshore", "Wide marshes and wet meadows", "Many steep ridges and valleys"], correctIndex: 3, explanation: "The forest features \"many steep ridges and valleys\", mountain advice at a smaller size.", sourceLessonSlug: "difficult-terrain" },
          { prompt: "When does lesson 31 say to plan more dead reckoning in Indiana woods?", options: ["From May to October, leaves on", "From November to April, leaves off", "Only in deep snow in winter", "Only on clear moonlit nights"], correctIndex: 0, explanation: "\"plan more dead reckoning from May to October and more terrain association once the leaves fall.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "Which of lesson 3's sites lets you practice difficult ground off trail?", options: ["Fort Harrison State Park", "The Charles C. Deam Wilderness", "Yellowwood State Forest", "Morgan-Monroe State Forest"], correctIndex: 1, explanation: "\"The Deam Wilderness (lesson 3) is where the rules allow you to practice all of it off trail.\"", sourceLessonSlug: "difficult-terrain" },
          { prompt: "What does lesson 26 say to do with the shape of the land when routing?", options: ["Cross it by the straightest line", "Climb every ridge for the view", "Follow it rather than fight it", "Ignore it and trust the bearing"], correctIndex: 2, explanation: "Follow the shape of the land rather than fighting it: valley floors and the ground near, not on, a crest.", sourceLessonSlug: "a-route-on-paper" },
          { prompt: "Which two things does the river course say a group must establish early?", options: ["Who carries the map, and the snacks", "Who walks first, and who walks last", "Who keeps time, and who keeps pace", "Who can call it, and a way to stop"], correctIndex: 3, explanation: "\"Somebody has to be able to make a call\", and there must be a way for the least confident person to stop the day.", sourceLessonSlug: "time-slope-and-turning-back" },
          { prompt: "After the walk in lesson 28, what does BAM show on the map?", options: ["Where the log and the ground parted", "Where he took his best photographs", "Where he met other walkers that day", "Where the trail markers were missing"], correctIndex: 0, explanation: "He shows \"on the map afterward where the log and the ground disagreed and why\".", sourceLessonSlug: "bams-route" },
          { prompt: "After you stop, what does lesson 29 say to get out?", options: ["The phone and charger", "The map and the log", "The whistle and mirror", "The snack and the water"], correctIndex: 1, explanation: "\"Stop walking, and get out the map and the log.\"", sourceLessonSlug: "when-you-do-not-know-where-you-are" },
          { prompt: "Which lensatic feature lets you set a bearing by touch in the dark?", options: ["The thumb loop on the base", "The lens with its rear slot", "The bezel ring's 3° clicks", "The 1:50,000 straightedge"], correctIndex: 2, explanation: "The bezel ring's 3° clicks let you set a bearing by touch, the click method.", sourceLessonSlug: "night-navigation" },
          { prompt: "What helps night navigation on a clear night in snow?", options: ["The snow's lack of any contrast", "The long hours of winter dark", "The driving snow and wind", "Moon and starlight off the snow"], correctIndex: 3, explanation: "\"Moonlight and starlight on a clear night reflect off the snow\", which helps.", sourceLessonSlug: "difficult-terrain" },
        ],
      },
    },
  ],
};
