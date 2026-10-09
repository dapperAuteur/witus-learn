import type { AuthoredCourse } from "./authored-course";

// "Raising Animals for Yarn" (Farm & Garden, also listed under Trade Skills). Slug
// `raising-animals-for-yarn`. Series `the-calorie-loop` ("The Calorie Loop"), code LOOP, position 03,
// after `manure-and-compost` (LOOP-00). It is also the last stop of the From Fiber to Fabric line
// (`making-string`, then `crochet`); a course has one series, so that line is named in the prose and
// the course is listed under Trade Skills as an additional category.
//
// RESEARCH TIER 2 (docs/course-method/README.md): animal health and welfare, zoonoses, the scrapie
// program and local law. Health, welfare and law claims are quoted exactly and cited with locators.
// Brief:   plans/future-courses/farm-and-garden/2026-10-05-raising-animals-for-yarn-brief.md
//          (reviewed by BAM 2026-10-06; his answers in its section 8 are binding).
// Dossier: plans/future-courses/farm-and-garden/2026-10-06-raising-animals-for-yarn-dossier.md
//          Only its VERIFIED lines and its section 4 approved claims are asserted below. Anything it
//          marks REPORTED or UNVERIFIED is left out, or named in a lesson as unread or unsettled.
//
// VISIBILITY: PUBLIC, free by default. HELD until a named husbandry reviewer has read it: task 326
// asks the Woolly Yak Ranch & Winery (Arcadia, Indiana) to be the practitioner, the reviewer and a
// filming visit. The hold reason in scripts/seed-courses.ts names the shepherd or fiber farmer.
//
// FIRST VERSION SCOPE (BAM, brief section 8, answer 2): sheep, alpaca and llama, and yak only. Goats
// (Angora and cashmere), Angora rabbits and silk follow in a later version; lesson 1 says so in one
// sentence and no lesson teaches them. Purdue Extension and Indiana zoning are taught as fetched
// lessons (24 to 26) plus a find-your-county-rule assignment (27), per answer 4. Scoped like
// `keeping-a-house`: needs, law, decisions and where to stop. No lesson tells a learner how to shear,
// lamb, castrate, dock, medicate or treat an animal; lesson 1 says those belong to a veterinarian, a
// shearer or a mentor, and the husbandry lessons repeat it where it bites.
//
// THE RANCH. The Woolly Yak Ranch & Winery appears once, in lesson 12, as two quoted phrases from its
// own website, marked as the ranch's own statements, until task 326 is answered. Its product claims
// (warmth against cashmere, feed, odor) are never repeated: no fetched source supports them.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted on Cloudinary later (nothing is hosted yet; every link is the original):
//    the NASS report and 2022 Census tables, NRCS Part 651 ch. 4, the AMS wool grade standard, the
//    CFR and U.S. Code sections, the APHIS scrapie documents, the 1933 and 1977 USDA wool leaflets,
//    the 1933 Bureau of Home Economics mimeograph, Furry and Viemont 1935 (NAL: not in copyright), NPS
//    page text, Boyce 1942, the Interior annual reports, Indians at Work, the 1940 SCS report, ARS
//    magazine text, NOAA normals, the FSIS rule, the CC BY papers (Juhos 2023, MacKintosh 2026,
//    Nohutcu and Merah 2025, Sapkota 2022, Kijas 2012) and the Gutenberg WPA narratives. Photographs
//    inside any of them (ARS, Wyoming, Hubbell) are NOT cleared and are not hosted.
//  - Tier B, cite and link, never rehost: Purdue Extension, Indiana BOAH, the Indiana Code and the
//    LII copy of the Indiana Administrative Code, IDEM, the county and town ordinances, the Pahl
//    opinion's CourtListener copy, Maryland and Ontario manure tables, ASI and American Wool Council,
//    The Livestock Conservancy and Robson, AVA, Merck, NCAT, UMass, Penn State, UF/IFAS, NMSU, AOA,
//    ICAR, SARE, FAO's The Yak, Sutter's Fort, the Mississippi resolution, the ranch's website, and the
//    three news reports.
//  - Tier C, cite only: the three Zheljazkov papers (abstracts read) and Bannor 2024 (unread).
//  - BAM's purchased books (Hancock, the Christiansborg volumes) are NOT used; no sentence here
//    derives from them. No figures are embedded; figures are described in words and cited.
//
// STANDARDS: none claimed. Excused in scripts/check-standards-coverage.ts BACKLOG ("OUT OF SCOPE,
// practical husbandry, no academic standard claimed"), like knot-tying.
//
// LESSONS MARKED FOR A REVIEWER OR PRACTITIONER (BAM, 2026-10-08). Each opens with a "> **Before
// release:**" line. The course is held, so learners do not see them; delete each line when its review
// is done.
//  - QR, a shepherd or large-animal veterinarian: 4 what-a-sheep-needs; 5 what-can-hurt-the-keeper;
//    7 welfare-and-mulesing; 28 should-you-keep-one.
//  - QR, a large-animal veterinarian who works with Indiana BOAH's scrapie rules: 6 scrapie-federal-
//    and-indiana.
//  - QR, a shepherd; plus a practitioner, a sheep shearer: 8 breeds-and-shearers.
//  - QR, a camelid veterinarian or an experienced alpaca and llama keeper: 9 alpaca-and-llama-needs;
//    10 camelid-health-and-indiana-rules.
//  - Practitioner, an alpaca fiber classer or grader: 11 camelid-fiber-and-grading.
//  - QR, a veterinarian or extension specialist who works with yaks; plus the practitioner, the
//    Woolly Yak Ranch & Winery (task 326): 12 the-yak.
//  - Practitioner, a sheep shearer: 13 shearing-day.
//  - Practitioner, a shepherd or fiber producer who skirts fleeces: 14 skirting-and-packing-a-fleece.
//  - Practitioner, a hand spinner: 15 scouring-carding-and-spinning.
//  - Practitioner, a natural dyer: 16 natural-dyeing-1935.
//  - QR, an extension educator or Master Gardener: 18 what-the-manure-carries; 19 waste-wool-in-the-
//    garden.
//  - QR, a historian of the Navajo livestock reduction, ideally a Dine scholar: 20 the-reduction-in-
//    the-federal-record; 21 navajo-voices-and-federal-framing; 22 the-sheep-themselves (plus a
//    heritage-breed shepherd).
//  - QR, a historian of slavery and Southern agriculture: 23 black-shepherds-and-what-is-missing.
//  - QR, an extension educator or shepherd: 24 money-time-and-help.
//  - QR, an Indiana land-use attorney or county plan commission staff: 25 indiana-law-a-keeper-meets;
//    26 an-alpaca-case-and-three-ordinances.
//  Unmarked: 1 to 3 (federal statistics and definitions), 17 (the AMS grade standard), 27 (the
//  assignment, a method).
//
// FATALITY CASES (BAM, 2026-10-08: "include fatality cases with links to news articles"). Not in the
// dossier. Fetched and read by the author on 2026-10-08 (article body text), quoted exactly, Tier B,
// link only, victims not named: AP via NBC News, 6 Dec 2021 (Bolton, Massachusetts, a sheep) and
// 1News, 19 Apr 2024 (Waitakere, New Zealand, a ram), both in lesson 5; NBC Bay Area, 11 Feb 2019
// (Vallejo, California, three alpacas killed by two dogs that dug under a fence), in lesson 9.
//
// HEDGES WRITTEN INTO LESSONS (for src/lib/research-checks.ts, filed by the orchestrator):
//  - L2 and L28: no source prices a raw fleece sold to a hand spinner.
//  - L5: no count of deaths caused by sheep was found.
//  - L6: 345 IAC read only on the LII copy, with no "current through" date.
//  - L7: Indiana's animal cruelty statute not read; the AVA's 25 percent auction figure not checked
//    against the AWEX data; ASI's "never mulesed" unchecked; AVMA policy pages unreadable.
//  - L8 and L24: the Purdue shearing school's taking place not confirmed; the 0.5 percent rate not
//    found in the statute.
//  - L10: the Indiana entry rule for a yak; the Animal Welfare Act and paid animal encounters.
//  - L11: alpaca guard hair (UMass against Penn State); yak fiber labeling under 16 CFR 300.
//  - L12: no yak micron figures until FAO ch. 6 is checked against a print copy.
//  - L18: no pathogen source for sheep, alpaca or llama manure.
//  - L19: no source on raw wool's safety in a vegetable bed.
//  - L20 and L21: killing against selling unsettled; prices paid not found; the 1939 court case
//    unnamed; the Senate hearing text not read; no 1930s record read uses the word "Churro".
//  - L22: Gulf Coast Native origin disputed.
//  - L23: nothing found on Black shepherds after 1865; Bannor 2024 unread.
//  - L25: right to farm against county zoning enforcement unanswered.
//  - L26: Arcadia's own ordinance unread; Hamilton County's Article 22 against its use table.
//
// SPELLING: American English in course prose ("fiber", "color", "program", "labeling"); a quotation
// keeps its source's spelling (the AVA's "behaviour"). No em or en dashes anywhere, including inside
// quotations: a quotation that carries one is cut at the dash.
//
// House style, matching manure-and-compost-course.ts and keeping-a-house-course.ts: `section` on every
// lesson; flush-left single-line `:::reveal q ||| a`; recallContent from the second teaching lesson
// on, quizzing the lesson before; an APA 7 `## Sources` block on every teaching lesson, each entry
// with its locator (printed page and PDF page where they differ, table, section heading, CFR or IC
// section); a quiz per section pooled to round(words / 35) clamped 40 to 100, serving 5, passing 80,
// shuffled; a final pooling 40 or more and serving 10, placed last. Option lengths are balanced
// within each question so the correct option is neither visibly the shortest nor the longest.

const S1 = "Section 1 · What a fiber animal is";
const S2 = "Section 2 · Sheep";
const S3 = "Section 3 · Alpaca, llama and yak";
const S4 = "Section 4 · Fleece to yarn";
const S5 = "Section 5 · Manure and waste wool";
const S6 = "Section 6 · A history the records keep";
const S7 = "Section 7 · Indiana and the decision";

// ── Source helpers. Locators follow the dossier's page offsets (dossier section 1). ──────────────
const USDA = "U.S. Department of Agriculture";

// Federal statistics. NASS: printed page = PDF page.
const nass = (loc: string, pdf: number) =>
  `National Agricultural Statistics Service. (2026, January 30). *Sheep and goats*. ${USDA}. ${loc}. https://esmis.nal.usda.gov/sites/default/release-files/795751/shep0126.pdf#page=${pdf}`;
const CENSUS = "https://www.nass.usda.gov/Publications/AgCensus/2022/Full_Report";
const censusUS = (loc: string, file: string) =>
  `National Agricultural Statistics Service. (2024a). *2022 Census of Agriculture: United States summary and state data* (Vol. 1, Ch. 1). ${USDA}. ${loc}. ${CENSUS}/Volume_1,_Chapter_1_US/${file}`;
const censusUSch2 = (loc: string) =>
  `National Agricultural Statistics Service. (2024b). *2022 Census of Agriculture: U.S. state level data* (Vol. 1, Ch. 2). ${USDA}. ${loc}. ${CENSUS}/Volume_1,_Chapter_2_US_State_Level/st99_2_023_023.pdf`;
const censusIN = (loc: string, path: string) =>
  `National Agricultural Statistics Service. (2024c). *2022 Census of Agriculture: Indiana state and county data*. ${USDA}. ${loc}. ${CENSUS}/${path}`;
const IN_T27 = "Volume_1,_Chapter_1_State_Level/Indiana/st18_1_024_027.pdf";
const IN_T32 = "Volume_1,_Chapter_1_State_Level/Indiana/st18_1_032_034.pdf";
const IN_CO13 = "Volume_1,_Chapter_2_County_Level/Indiana/st18_2_013_013.pdf";

// Wool grades and labeling. AMS standard: printed page N = PDF page N+1.
const ams = (loc: string, pdf: number) =>
  `${USDA}, Agricultural Marketing Service. (1968). *United States standards for grades of wool*. ${loc}. https://www.ams.usda.gov/sites/default/files/media/Wool_Standard%5B1%5D.pdf#page=${pdf}`;
const AMS_1997 =
  "Agricultural Marketing Service. (1997, August 13). Removal of U.S. grade standards and other selected regulations. *Federal Register, 62*(156), 43430-43441. Pages 43430 and 43432. https://www.govinfo.gov/content/pkg/FR-1997-08-13/html/97-21045.htm";
const CFR_7_31 = "Purchase of Wool and Wool Top Samples, 7 C.F.R. pt. 31 (2026). https://www.ecfr.gov/current/title-7/part-31";
const CFR_19_151 = "Grading of wool, 19 C.F.R. § 151.76(a) (2026). https://www.ecfr.gov/current/title-19/section-151.76";
const USC_15_68 =
  "Wool Products Labeling Act of 1939, 15 U.S.C. § 68(b) (2024 ed.). https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap2-subchapIII-sec68.htm";
const cfr16 = (section: string) =>
  `Rules and Regulations Under the Wool Products Labeling Act of 1939, 16 C.F.R. § ${section} (2026). https://www.ecfr.gov/current/title-16/part-300`;

// Scrapie, identification and welfare law
const cfr9 = (cite: string, section: string) =>
  `9 C.F.R. § ${cite} (2026). https://www.ecfr.gov/current/title-9/section-${section}`;
const USC_7_2132 =
  "Animal Welfare Act, 7 U.S.C. § 2132(g) (2023 ed.). https://www.govinfo.gov/content/pkg/USCODE-2023-title7/html/USCODE-2023-title7-chap54-sec2132.htm";
const aphisGuide = (loc: string) =>
  `Animal and Plant Health Inspection Service. (2019a). *Animal identification and recordkeeping guide for sheep and goats*. ${USDA}. ${loc}. https://www.aphis.usda.gov/sites/default/files/fs_ahscrapie.pdf`;
const APHIS_STANDARDS =
  "Animal and Plant Health Inspection Service. (2019b). *Scrapie program standards, volume 1*. Printed p. 53 (PDF p. 55). https://www.aphis.usda.gov/sites/default/files/nsep-program-standards-final-rule_6.pdf#page=55";
const APHIS_SCRAPIE =
  "Animal and Plant Health Inspection Service. (2026a, June 29). *Scrapie* [Web page]. https://www.aphis.usda.gov/livestock-poultry-disease/sheep-goat/scrapie";
const APHIS_TAGS =
  "Animal and Plant Health Inspection Service. (2026b, April 30). *Sheep and goat identification* [Web page]. https://www.aphis.usda.gov/animal-disease/sheep-goat/scrapie-tag";
const APHIS_STATUS =
  "Animal and Plant Health Inspection Service. (2026c, September 2). *Status of current eradication programs* [Web page]. Row Indiana, column Scrapie. https://www.aphis.usda.gov/livestock-poultry-disease/status-eradication-programs";
const APHIS_REPORT =
  "Animal and Plant Health Inspection Service. (2025). *National Scrapie Program: FY 2025 third quarter progress report* (APHIS-25-039). PDF pp. 1 and 2. https://www.aphis.usda.gov/sites/default/files/scrapie-quarterly-report.pdf";
/** Indiana Administrative Code, read on the LII copy (no "current through" date). */
const iac = (cite: string, slug: string) =>
  `${cite} (LII copy). https://www.law.cornell.edu/regulations/indiana/${slug}`;
const BOAH_FLYER =
  "Indiana State Board of Animal Health. (2026a). *Scrapie identification information for producers* [Flyer]. PDF pp. 3 and 4. https://www.in.gov/boah/files/Scrapie%20ID%20for%20Producers%204-2026%20-Ad%202.pdf";
const BOAH_4H =
  "Indiana State Board of Animal Health & Purdue Extension Indiana 4-H. (2026). *Sheep and goat exhibition and identification facts*. https://www.in.gov/boah/files/BOAH%20Sheep-Goat%20Exhibition%20and%20ID%20Facts%204-2026-ADA.pdf";
const BOAH_CAMELID =
  "Indiana State Board of Animal Health. (n.d.). *Camelid entry requirements* [Web page]. https://www.in.gov/boah/species-information/cattle-sheep-and-other-ruminants/camelids/camelid-entry-requirements";
const AVA =
  "Australian Veterinary Association. (2026, July 16). *Mulesing* [Policy]. Background; Definitions; points 1, 2, 4 and 5. https://www.ava.com.au/policy/mulesing";
const asiCare = (loc: string) =>
  `American Sheep Industry Association. (2021). *Sheep care guide*. ${loc}. https://www.sheepusa.org/wp-content/uploads/2021/06/Sheep-Care-Guide-2021-web.pdf`;
const ASI_QA =
  "American Sheep Industry Association. (n.d.). *Quality assurance programs* [Web page]. https://www.sheepusa.org/education-resources/assurance-programs";

// Breeds
const TLC_LIST =
  "The Livestock Conservancy. (2026). *2026 conservation priority livestock breeds* [List]. Headings Critical and Threatened. https://livestockconservancy.org/wp-content/uploads/2026/03/2026-CPL-Livestock-FINAL.pdf";
const TLC_CHURRO =
  "The Livestock Conservancy. (n.d.). *Navajo-Churro sheep* [Breed page]. \"Breed Facts\". https://livestockconservancy.org/heritage-breeds/heritage-breeds-list/navajo-churro-sheep/";
const ROBSON =
  "Robson, D. (2021). *Heritage sheep breed fiber profile* [One-page sheets for The Livestock Conservancy: Romeldale; Leicester Longwool; Navajo-Churro]. https://livestockconservancy.org/wp-content/uploads/2021/12/TLC-Fiber-profile-Navajo-Churro.pdf";

// Purdue Extension (printed page = PDF page)
const erasmus = (loc: string) =>
  `Erasmus, M. (2019). *Animal well-being: Sheep* (AS-656-W). Purdue Extension. ${loc}. https://www.extension.purdue.edu/extmedia/AS/AS-656-W.pdf`;
const as595 = (loc: string) =>
  `Pezzanite, L., Neary, M., Hutchens, T., & Scharko, P. (2009). *Common diseases and health problems in sheep and goats* (AS-595-W). Purdue Extension. ${loc}. https://www.extension.purdue.edu/extmedia/AS/AS-595-commonDiseases.pdf`;
const AS570 =
  "O'Neil, P. A., & Latour, M. A. (2005). *Animal exposure awareness* (AS-570-W). Purdue Extension. Page 2. https://www.extension.purdue.edu/extmedia/AS/AS-570-W.pdf";
const ec804 = (loc: string) =>
  `Munns, A. L., Fulton, J., & Widmar, N. O. (2016). *Sheep enterprise budget* (EC-804-W). Purdue Extension. ${loc}. https://www.extension.purdue.edu/extmedia/EC/EC-804-W.pdf`;
const EC800 =
  "Munns, A. L., Fulton, J., & Widmar, N. O. (2015). *Tools for choosing the right enterprise for you* (EC-800-W). Purdue Extension. Page 3, Table 2. https://www.extension.purdue.edu/extmedia/EC/EC-800-W.pdf";
const EC657 =
  "Harrison, G. A., & Spillers, P. D. (2004). *Indiana farm fence laws* (EC-657). Purdue Extension. Page 4. https://www.extension.purdue.edu/extmedia/EC/EC-657.pdf";
const ID488 =
  "Ebner, P., & Hong, Y. (2017). *Regulation of livestock production in Indiana: Who does what?* (ID-488-W). Purdue Extension. Pages 1 and 2. https://www.extension.purdue.edu/extmedia/ID/ID-488-W.pdf";
const ID233 =
  "Slack, V. (2000). *Zoning: What does it mean to your community?* (ID-233). Purdue Extension. Page 1. https://www.extension.purdue.edu/extmedia/ID/ID-233.pdf";
const ID511 =
  "Burbrink, J. (2018). *Welcome to the plan commission or board of zoning appeals* (ID-511-W). Purdue Extension. Pages 1 and 2. https://www.extension.purdue.edu/extmedia/ID/ID-511-W.pdf";
const ID228 =
  "Kumar, I. (2017). *A planning and zoning glossary* (ID-228-W). Purdue Extension. https://www.extension.purdue.edu/extmedia/ID/ID-228-W.pdf";
const CFO_REPORT =
  "Ebner, P., Ogle, T., Hall, T., DeBoer, L., & Henderson, J. (2016). *County regulation of confined feeding operations in Indiana*. Purdue Extension. Printed p. 2 (PDF p. 3). https://www.extension.purdue.edu/cdext/thematic-areas/community-planning/collaborative-projects/_docs/cfo-reports/other-reports-cfo/final-report-overview-2016.pdf";
const CFO_STUDY =
  "Purdue Extension Community Development. (n.d.). *Land use regulations of confined feeding operations (CFO) study* [Web page]. https://extension.purdue.edu/cdext/thematic-areas/community-planning/collaborative-projects/cfo.html";
const shearSchool = (loc: string) =>
  `O'Brien, E. (2026, February 25). *Indiana sheep shearing school open for registration*. Purdue Extension News. ${loc}. https://www.extension.purdue.edu/news/2026/02/indiana-sheep-shearing-school-open-for-registration.html`;

// Indiana statutes, rules and agencies
const ic = (cite: string, title: number) => `Ind. Code § ${cite} (2026). https://iga.in.gov/ic/2026/Title_${title}.html`;
const IDEM_CFO =
  "Indiana Department of Environmental Management. (n.d.). *About confined feeding operations* [Web page]. https://www.in.gov/idem/cfo/about-confined-feeding-operations/";
const pahl = (loc: string) =>
  `*County of Lake v. Pahl*, No. 45A03-1406-PL-214 (Ind. Ct. App. Mar. 31, 2015). ${loc}. https://storage.courtlistener.com/pdf/2015/03/31/county_of_lake_and_the_lake_county_plan_commission_v._alan_j._pahl_and.pdf`;
const HAMILTON_GIS =
  "Hamilton County, Indiana. (n.d.-a). *Planning jurisdiction* [GIS layer 137]. https://gis1.hamiltoncounty.in.gov/ArcGIS/rest/services/POSSE/POSSE_Map/MapServer/137";
const HAMILTON_PAGES =
  "Hamilton County, Indiana. (n.d.-b). *Zoning jurisdictions* [Web page]. https://www.hamiltoncounty.in.gov/620/Zoning-Jurisdictions";
const HAMILTON_UDO =
  "Hamilton County Plan Commission. (2023). *Unified development ordinance*. Article 22, printed p. 205 (PDF p. 207); use table, PDF p. 241. https://www.hamiltoncounty.in.gov/DocumentCenter/View/17536/HCPC-Unified-Development-Ordinance_FINAL_Amended_08242023";
const CICERO =
  "Town of Cicero and Jackson Township Plan Commission. (2015). *Zoning ordinance*. Printed pp. 98, 99 and 190 (PDF pp. 127, 130 and 221). https://www.ciceroin.org/wp-content/uploads/2024/12/Town-of-Cicero-Jackson-Township-Zoning-Ordinance-Book.pdf";
const TIPTON =
  "Tipton County, Indiana. (2008, revised 2014). *Tipton County zoning ordinance* (No. 2008-12). Art. One § 107; Art. Three §§ 301, 303, Table A; Art. Five § 502. https://www.tiptongov.com/egov/apps/document/center.egov?eGov_searchDepartment=37&eGov_searchType=19";

// Camelids and yaks
const merck = (loc: string) =>
  `Wiedner, E. (2021, updated 2026). *Management of llamas and alpacas*. Merck Veterinary Manual. ${loc}. https://www.merckvetmanual.com/exotic-and-laboratory-animals/llamas-and-alpacas/management-of-llamas-and-alpacas`;
const ncat = (loc: string) =>
  `Gegner, L. (2000/2012). *Llamas and alpacas on the farm* (ATTRA IP430). National Center for Appropriate Technology. ${loc}. https://www.ncat.org/wp-content/uploads/2025/12/llamaalpaca.pdf`;
const UMASS_HOUSING =
  "UMass Extension. (2026a). *Alpaca housing* [Fact sheet]. \"Introduction\"; \"Fencing\". https://www.umass.edu/agriculture-food-environment/crops-dairy-livestock-equine/fact-sheets/alpaca-housing";
const UMASS_SHEARING =
  "UMass Extension. (2026b). *Alpaca shearing* [Fact sheet]. https://www.umass.edu/agriculture-food-environment/crops-dairy-livestock-equine/fact-sheets/alpaca-shearing";
const UMASS_LLAMA =
  "Herbert, S., Hashemi, M., Chickering-Sears, C., Weis, S., Miller, K., Carlevale, J., Campbell-Nelson, K., & Zenk, Z. (2026). *Llama shearing* [Fact sheet]. UMass Extension. https://www.umass.edu/agriculture-food-environment/crops-dairy-livestock-equine/fact-sheets/llama-shearing";
const DURKES =
  "Durkes, A. (2008). *Parelaphostrongylus tenuis* infection in llamas. *ADDL Newsletter*. Purdue University. https://www.addl.purdue.edu/newsletters/2008/Spring/lama.htm";
const DUNCAN =
  "Duncan, A. K. (2000). Meningeal worm infections in llamas. *ADDL Newsletter*. Purdue University. https://addl.purdue.edu/newsletters/1996/summer/llamas.shtml";
const AOA =
  "Alpaca Owners Association. (2021). *U.S. alpaca fiber standard*. Grade rows. https://www.alpacainfo.com/academy/article/4662/u.s.-alpaca-fiber-standard";
const ICAR =
  "International Committee for Animal Recording. (2017). *Section 14: Guidelines for alpaca and cashmere goat identification and fibre*. Table 1, p. 8. https://www.icar.org/Guidelines/14-Alpaca-and-Goat-Identifcation-and-Fibre.pdf";
const GIBSON =
  "Gibson, A. (n.d.). *Educate alpaca producers on the benefits of grading and sorting fleeces* (SARE FNC08-707). Results; Discussion. https://projects.sare.org/sare_project/fnc08-707/";
const PSU_ALPACA =
  "Van Saun, R. J. (2025). *Nutritional effects on alpaca fiber*. Penn State Extension. https://extension.psu.edu/nutritional-effects-on-alpaca-fiber";
const sareYak = (loc: string) =>
  `Lehmkuhler, J. (2022-2024). *Yaks add farm diversification* (SARE OS22-157), with the infographic *Fiber processing decisions*. Southern SARE. ${loc}. https://projects.sare.org/sare_project/os22-157/`;
const UKY =
  "Nielson, A. (2023, October 16). *Conference explores yak production in Kentucky*. University of Kentucky. https://news.mgcafe.uky.edu/article/conference-explores-yak-production-kentucky";
const fao = (loc: string) =>
  `Wiener, G., Han, J., & Long, R. (2003). *The yak* (2nd ed.). FAO Regional Office for Asia and the Pacific. ${loc}. https://www.fao.org/4/ad347e/ad347e00.htm`;
const SAPKOTA =
  "Sapkota, S., Acharya, K. P., Laven, R., Acharya, N., & Turzillo, A. M. (2022). Possible consequences of climate change on survival, productivity and reproductive performance, and welfare of Himalayan yak. *Veterinary Sciences, 9*(8), 449. Abstract; sections 1 and 4. https://doi.org/10.3390/vetsci9080449";
const FSIS =
  "Food Safety and Inspection Service. (2021, July 15). Inspection of yak and other Bovidae, Cervidae, and Camelidae species. *Federal Register, 86*(133), 37216. https://www.govinfo.gov/content/pkg/FR-2021-07-15/pdf/2021-15062.pdf";
const NOAA =
  "National Centers for Environmental Information. (2021). *U.S. climate normals 1991-2020: Indianapolis, IN (USW00093819)*. Monthly and annual mean temperature. https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&stations=USW00093819&dataTypes=MLY-TAVG-NORMAL,MLY-TMAX-NORMAL&format=json&units=standard (annual: dataset normals-annualseasonal-1991-2020, ANN-TAVG-NORMAL)";
const RANCH =
  "Woolly Yak Ranch & Winery. (n.d.). [Website: Home, Sustainable Agriculture and FAQs pages; the ranch's own statements]. Retrieved October 7, 2026. https://www.woollyyak.com/";

// Fleece to yarn
const BUCK =
  "Buck, W. M. (1933). *Preparing wool for market* (Leaflet No. 92). U.S. Department of Agriculture. Page [1]. https://archive.org/details/preparingwoolfor92buck";
const BULLETIN10 =
  "Agricultural Marketing Service. (1977). *Preparing wool for market: How to increase profits* (Marketing Bulletin No. 10). U.S. Department of Agriculture. \"Points to remember\"; PDF p. 9. https://archive.org/details/preparingwoolfor10unit_0";
const bhe = (loc: string) =>
  `Bureau of Home Economics. (1933). *How to prepare raw wool at home for bedding* (Mimeograph 478R). U.S. Department of Agriculture. ${loc}. https://archive.org/details/CAT31039640`;
const NPS_SPINDLE =
  "National Park Service. (2015). *Drop spindle* [Pipe Spring National Monument]. \"What\". https://www.nps.gov/pisp/learn/historyculture/drop-spindle.htm";
const ufifas = (loc: string) =>
  `Weisman, B. R., & Vyas, D. (2021). *From sheep to shawl: An outline of wool processing in Florida* (AN377). UF/IFAS Extension. ${loc}. https://doi.org/10.32473/edis-AN377-2021`;
const woolCode = (loc: string) =>
  `American Wool Council. (2021). *Code of practice for preparation of wool clips*. American Sheep Industry Association. ${loc}. https://www.sheepusa.org/wp-content/uploads/2021/11/code-of-practice-2021.pdf`;
const nmsu = (loc: string) =>
  `Ward, M., & Flores, V. (2025). *Understanding wool grades* (Guide B-409). New Mexico State University. ${loc}. https://pubs.nmsu.edu/_b/B409_Revised.pdf`;
const SSQA =
  "Maneotis, K., Van Overbeke, D. L., LeValley, S. B., Woerner, D. R., Martin, J. N., Tatum, J. D., & Belk, K. E. (2016). *Producing consumer products from sheep: The Sheep Safety and Quality Assurance Program*. American Sheep Industry Association. Pages 20 and 21. https://www.americanwoolassurance.org/wp-content/uploads/ssqa-manual.pdf";
const sutter = (loc: string) =>
  `California State Parks, Sutter's Fort State Historic Park. (2008). *Spinning and weaving* [Station handbook]. ${loc}. https://www.parks.ca.gov/pages/485/files/spin%20and%20weave%20station.pdf`;
/** Furry and Viemont 1935. Printed page N = PDF page N+4. */
const furry = (loc: string, pdf: number) =>
  `Furry, M. S., & Viemont, B. M. (1935). *Home dyeing with natural dyes* (Miscellaneous Publication No. 230). ${USDA}. ${loc}. https://archive.org/download/homedyeingwithna230furr/homedyeingwithna230furr.pdf#page=${pdf}`;
const PUBCHEM =
  "National Library of Medicine. (n.d.). *Potassium dichromate* (CID 24502), GHS Classification [PubChem]. H350; H330. https://pubchem.ncbi.nlm.nih.gov/compound/24502";

// Manure and waste wool
const nrcs651 = (loc: string, pdf: number) =>
  `Natural Resources Conservation Service. (2008). *Agricultural waste characteristics* (Part 651, Chapter 4). ${USDA}. ${loc}. https://directives.nrcs.usda.gov/sites/default/files2/1712930943/17165.pdf#page=${pdf}`;
const ONTARIO =
  "Brown, C. (2021). *Available nutrients and value for manure from various livestock types* (Factsheet 21-077). Ontario Ministry of Agriculture, Food and Rural Affairs. Pages 1, 4 and 8. https://files.ontario.ca/omafra-available-nutrients-and-value-for-manure-from-various-livestock-types-21-077-en-2022-11-24.pdf";
const ONTARIO_2013 =
  "Brown, C. (2013). *Available nutrients and value for manure from various livestock types* (Order No. 13-043). Ontario Ministry of Agriculture and Food. Alpaca and llama rows. https://fieldcropnews.com/wp-content/uploads/2015/03/Nutrient-Value-of-Manure.pdf";
const MARYLAND =
  "University of Maryland Extension. (2018). *Average nutrient content of manure from various unusual livestock types*. Alpaca and llama rows. https://extension.umd.edu/resource/average-nutrient-content-manure-various-unusual-livestock-types";
const ZH2005 =
  "Zheljazkov, V. D. (2005). Assessment of wool waste and hair waste as soil amendment and nutrient source. *Journal of Environmental Quality, 34*(6), 2310-2317. https://doi.org/10.2134/jeq2004.0332 Paywalled; abstract read.";
const ZH2008 =
  "Zheljazkov, V. D., Stratton, G. W., & Sturz, T. (2008). Uncomposted wool and hair-wastes as soil amendments for high-value crops. *Agronomy Journal, 100*(6), 1605-1614. https://doi.org/10.2134/agronj2007.0214 Paywalled; abstract read.";
const ZH2009 =
  "Zheljazkov, V. D., Stratton, G. W., Pincock, J., Butler, S., Jeliazkova, E. A., Nedkov, N. K., & Gerard, P. D. (2009). Wool-waste as organic nutrient source for container-grown plants. *Waste Management, 29*(7), 2160-2164. https://doi.org/10.1016/j.wasman.2009.03.009 Paywalled; abstract read.";
const JUHOS =
  "Juhos, K., Papdi, E., Kovács, F., Vasileiadis, V. P., Veres, A., & Jiao, S. (2023). The effect of wool mulch on plant development. *Plants, 12*(3), 684. Abstract. https://doi.org/10.3390/plants12030684";
const MACKINTOSH =
  "MacKintosh, S. B., Fychan, R., Davies, J. W., Powell, H. G., Scott, M. B., & Marley, C. L. (2026). Grassland forage legumes and drought mitigation. *Journal of the Science of Food and Agriculture, 106*(13). Abstract. https://doi.org/10.1002/jsfa.70841";
const NOHUTCU =
  "Nohutçu, L., & Merah, O. (2025). The influence of wool pellet application on alleviating salt-induced stress in soybean. *Life, 15*(3), 328. Abstract. https://doi.org/10.3390/life15030328";

// History
const boyce = (loc: string) =>
  `Boyce, G. A. (1942). *A primer of Navajo economic problems*. Office of Indian Affairs, Navajo Service. ${loc}. https://archive.org/details/primerofnavajoec00boyc`;
const interior = (year: number, loc: string, id: string) =>
  `U.S. Department of the Interior. (${year}). *Annual report of the Secretary of the Interior for the fiscal year ended June 30, ${year}*. ${loc}. https://archive.org/details/${id}`;
const iaw = (ref: string, loc: string, id: string) =>
  `Office of Indian Affairs. ${ref} *Indians at Work*. ${loc}. https://archive.org/details/${id}`;
const STEWART =
  "Stewart, J. M. (1938, March). Personal impressions of the January 18-20 Navajo Tribal Council meeting. *Indians at Work, 5*(7), 16-19. Printed p. 17 (PDF p. 21). https://archive.org/details/indiansatwork571938unit";
const scs = (loc: string) =>
  `Soil Conservation Service, Region 8. (1940). *Progress report of the livestock demonstration conducted by operations in cooperation with the Navajo Experiment Station* (No. 1613). ${loc}. https://archive.org/details/CAT31288476`;
const NPS_HUBBELL =
  "National Park Service. (2025). *Kids and youth* [Hubbell Trading Post]. \"Where Are The Sheep?\". https://www.nps.gov/hutr/learn/kidsyouth/index.htm";
const ELSTEIN =
  "Elstein, D. (2005, April). Making sure sacred sheep don't become extinct. *Agricultural Research*. https://agresearchmag.ars.usda.gov/2005/apr/sheep";
const KIJAS =
  "Kijas, J. W., Miller, J. E., Hadfield, T., McCulloch, R., Garcia-Gamez, E., Porto Neto, L. R., & Cockett, N. (2012). Tracking the emergence of a new breed using 49,034 SNP in sheep. *PLoS ONE, 7*(7), e41508. Abstract; Introduction; Results. https://doi.org/10.1371/journal.pone.0041508";
const HAYS =
  "Hays, S. M. (1996, May). A hardy, hairy sheep. *Agricultural Research*. https://agresearchmag.ars.usda.gov/1996/may/sheep";
const MS_HR62 =
  "Mississippi Legislature. (2017). *House Resolution 62* (as introduced). https://billstatus.ls.state.ms.us/documents/2017/html/HR/HR0062IN.htm";
const WPA =
  "Federal Writers' Project. (1941). *Slave narratives: A folk history of slavery in the United States from interviews with former slaves* (Vols. II pt. 7, IV pt. 3, IX, XVI pts. 1 to 3; Project Gutenberg eBooks 11422, 18484, 12055, 30576, 30967, 35380). Library of Congress. Located by volume and interviewee. https://www.gutenberg.org/ebooks/11422";
const BANNOR =
  "Bannor, B. (2024). *American sheep: A cultural history*. University of Georgia Press. Chapter 4. https://doi.org/10.1353/book.138561 Not read.";

// News reports (fatality cases), fetched and read 2026-10-08. Tier B: link, never rehost.
const AP_BOLTON =
  "Associated Press. (2021, December 6). Volunteer, 73, dies after getting rammed by sheep at Massachusetts therapy farm. *NBC News*. Paragraphs 1 to 3. https://www.nbcnews.com/news/us-news/volunteer-73-dies-getting-rammed-sheep-massachusetts-therapy-farm-rcna7743";
const ONENEWS =
  "1News Reporters. (2024, April 19). Police release names of Waitākere couple killed by ram. *1News*. Paragraphs 1, 3 and 5 to 8. https://www.1news.co.nz/2024/04/19/police-release-names-of-waitakere-couple-killed-by-ram/";
const VALLEJO =
  "McSweeney, T. (2019, February 11). Three alpacas killed in dog attack at Vallejo learning farm. *NBC Bay Area*. Paragraphs 1, 3 and 6. https://www.nbcbayarea.com/news/local/three-alpacas-killed-in-dog-attack-at-vallejo-learning-farm/8542/";

const QUIZ_INTRO =
  "Questions are drawn at random from this section's pool, so a retake asks different ones. Each answer links back to the lesson that teaches it.";

export const RAISING_ANIMALS_FOR_YARN_COURSE: AuthoredCourse = {
  title: "Raising Animals for Yarn",
  description:
    "What it takes to keep an animal for its fiber: sheep, alpacas and llamas, and yaks. This course reads the documents behind the questions a keeper has to answer first. What does the animal need in company, shelter, feed and care? What does the law ask, from the federal scrapie tag rule to Indiana's stricter one and your county's zoning? How is fiber graded, from the USDA's 16 micron grades for wool to the alpaca owners' voluntary standard? How does a fleece become yarn: shearing day, skirting, scouring, carding, spinning, and natural dyeing from a 1935 USDA bulletin? Where does the manure go? And what do the federal records say about the Navajo livestock reduction of the 1930s, the Navajo-Churro sheep and the enslaved shepherds of the South? It is built on Purdue Extension, USDA, APHIS and the Indiana Code, works through real Indiana ordinances, and ends with you finding your own county's rule and deciding whether to keep one. It does not teach shearing, lambing or treatment: those belong to a veterinarian, a shearer or a mentor. The third course in The Calorie Loop, and the last stop of the From Fiber to Fabric line.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: What a fiber animal is
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "fiber-as-a-crop",
      title: "1 · Fiber as a crop, and where this course stops",
      section: S1,
      body: `A sheep kept for wool is a crop that grows back. Each year it is shorn and the fleece goes to a buyer, a mill or a spinner, while the animal goes on needing water, feed, shelter, company and a veterinarian. This course covers that whole arrangement: what a fiber animal needs, what the law asks of its keeper, how its fiber is graded, how a fleece becomes yarn, where its manure goes, and how to decide whether to keep one.

**Which animals.** This first version covers sheep, alpacas and llamas, and yaks. Angora and cashmere goats, Angora rabbits and silkworms will follow in a later version.

**What "wool" means.** The federal wool grade standard defines wool as "The fiber from the fleece of sheep" (Agricultural Marketing Service [AMS], 1968, § 31.201(g)). So its 16 grades, taught in lesson 17, are sheep-wool grades. The labeling law is wider: under the Wool Products Labeling Act, "wool" may include "the so-called specialty fibers from the hair of the camel, alpaca, llama, and vicuna" (15 U.S.C. § 68(b)). The yak is not on that list.

**What the federal count measures.** The 2022 Census of Agriculture report form measures two animal fibers by the pound, "Wool shorn" and "Mohair clipped". The only other fiber it counts by the pound is a crop, "Hemp for fiber". Alpacas and llamas are counted as animals (number on hand, number sold, sales dollars) with no column for fiber, fleece or shearing (National Agricultural Statistics Service [NASS], 2024a, Appendix B, Sections 18 and 22). So the 2022 census holds no federal count of alpaca or llama fleece.

**Where this course stops.** It teaches needs, law, decisions, and where to stop. No lesson tells you how to shear, deliver a lamb, castrate, dock a tail, give a drug or treat an animal. Those belong to a veterinarian, a shearer or a mentor who can stand next to you and the animal.

**Where it sits.** This is the third course in The Calorie Loop, after *Manure and Compost*: a fiber animal is also a manure animal, and section 5 follows its manure toward the soil. It is also the last stop of the From Fiber to Fabric line, after *Making String* and *Crocheting*: section 4 takes a fleece as far as yarn and hands spinning to *Making String*.

:::reveal Which animals' fibers may count as "wool" under the Wool Products Labeling Act? ||| Sheep's wool and the specialty fibers of the camel, alpaca, llama and vicuna. The yak is not named.

:::reveal Which two animal fibers does the 2022 census form measure by the pound? ||| Wool shorn and mohair clipped. Alpacas and llamas are counted only as animals.

## Sources
- ${ams("§ 31.201(g), printed p. 6", 7)}
- ${USC_15_68}
- ${censusUS("Appendix B, report form Sections 18 and 22, PDF pp. 37 and 39", "usappxb.pdf#page=37")}`,
    },
    {
      slug: "the-us-flock-in-numbers",
      title: "2 · The US flock in numbers",
      section: S1,
      recallContent: [
        {
          prompt: "Under the federal wool grade standard, what is wool?",
          answer: "\"The fiber from the fleece of sheep\" (§ 31.201(g)). The 16 grades are sheep-wool grades.",
        },
        {
          prompt: "Name two jobs this course leaves to a veterinarian, a shearer or a mentor.",
          answer: "Any two of: shearing, delivering a lamb, castrating, docking a tail, giving a drug, treating an animal.",
        },
      ],
      body: `The National Agricultural Statistics Service (NASS) publishes a sheep report every January. The one released on January 30, 2026, is the source for most of this lesson.

**The national flock.** On January 1, 2026, the United States had 4.99 million sheep and lambs, 1 percent fewer than a year earlier. In 2025, 3.00 million sheep were shorn for 20.5 million pounds of wool, an average fleece of 6.8 pounds. Wool sold for an average of $1.40 a pound, $28.7 million in all (NASS, 2026, pp. 1, 3).

**Not every sheep grows wool.** On January 1, 2026, 28 percent of US sheep and lambs were hair sheep or wool-hair crosses (NASS, 2026, p. 1). Indiana's share in the 2022 census was 28.7 percent, 22,744 of 79,185 (NASS, 2024c, county Table 13). Different dates and places, but both a bit over a quarter.

**Indiana.** Indiana had 76,000 sheep and lambs on January 1, 2026, about 1.5 percent of the national flock (NASS, 2026, p. 4). In 2025 the state sheared 38,000 sheep for 215,000 pounds of wool, a 5.7-pound average fleece, sold at an average of 50 cents a pound (pp. 10, 11). At those averages an Indiana fleece was worth about $2.85, against about $9.52 for the average US fleece. That is a state average commodity price. What a hand spinner pays for one good fleece is a different market, and no source this course read puts a price on it.

**A survey and a count.** The yearly NASS numbers come from a survey: about 24,000 operators were contacted, 44 percent of the reports were usable, and the inventory estimate's root mean square error over 10 years is 0.9 percent (NASS, 2026, pp. 17, 18). The Census of Agriculture, taken every five years, is the count: 88,853 US farms with sheep held 5,104,328 sheep and lambs on December 31, 2022 (NASS, 2024a, Table 27). A census "farm" is any place that sold, or normally would have sold, $1,000 or more of agricultural products in the year (Introduction, p. VIII). A keeper below that line is not in these numbers.

**Most flocks are small.** Two thirds of US sheep farms, 59,209 of them, had 1 to 24 sheep, yet they held only 11.5 percent of the sheep; the 111 farms with 5,000 or more held 22.8 percent (NASS, 2024a, Table 27). Of Indiana's 2,456 sheep farms, 1,565 (63.7 percent) had 1 to 24 head, and none had 2,500 or more. Those small Indiana flocks reported $162,000 of the state's $249,000 in wool sales, about 65 percent. Their pounds are withheld, printed "(D)", so this course computes no price per pound for them (NASS, 2024c, state Table 27).

:::reveal At 2025's state averages, about what was one Indiana fleece worth, and one average US fleece? ||| About $2.85 in Indiana (5.7 pounds at 50 cents) and about $9.52 for the US (6.8 pounds at $1.40). Both are commodity prices.

:::reveal What share of US sheep did the 59,209 farms with 1 to 24 sheep hold in 2022? ||| 11.5 percent, though they were two thirds of the farms.

## Sources
- ${nass("Pages 1, 3, 4, 10, 11, 17 and 18", 1)}
- ${censusUS("Table 27, printed p. 21; Introduction, printed p. VIII", "st99_1_024_027.pdf")}
- ${censusIN("State Table 27, printed p. 21; county Table 13, printed p. 412", IN_T27)}`,
    },
    {
      slug: "alpacas-llamas-and-the-uncounted-yak",
      title: "3 · Alpacas, llamas, and the yak no census counts",
      section: S1,
      recallContent: [
        {
          prompt: "How many sheep and lambs did the US have on January 1, 2026, and how much wool did it shear in 2025?",
          answer: "4.99 million sheep and lambs; 20.5 million pounds of wool from 3.00 million sheep shorn.",
        },
        {
          prompt: "What is the difference between the NASS sheep report and the Census of Agriculture?",
          answer: "The yearly report is a survey. The census, every five years, is a count of farms that sold or would normally sell $1,000 or more.",
        },
      ],
      body: `**Camelids, counted as animals.** The 2022 census counted 99,538 alpacas on 8,764 US farms and 29,705 llamas on 6,108 farms. Both fell from 2017, alpacas by about 18 percent and llamas by about 25 percent (NASS, 2024a, Table 32; NASS, 2024b, Table 23). Indiana had 1,722 alpacas on 178 farms and 913 llamas on 139 farms (NASS, 2024c, state Table 32). In 2022, 1,804 US farms sold 9,774 alpacas for $14.3 million, and 861 farms sold 3,136 llamas for $3.6 million (NASS, 2024a, Table 33). None of these numbers measures fiber.

**The yak is not in the census.** The 2022 report form has no code for yaks. Its "Other livestock" list names alpacas, package bees, other bees, bison, deer, elk, laboratory animals, llamas, mink, rabbits and worms, then "Other livestock, specify above", and the census defines "Other livestock" as "all livestock not having specific codes on the 2022 report form" (NASS, 2024a, Appendix B, pp. B-15, B-40). No published 2022 table, national, Indiana or county, has a yak row. Put those facts together and the conclusion is yours to draw: there is no federal yak count, and this course states no US yak population. The Livestock Conservancy's 2026 priority list does include the American yak, under cattle (The Livestock Conservancy, 2026).

**Manure is a product too.** The same form lists "Manure sold", code 4952, among the livestock products a farm may sell (NASS, 2024a, Appendix B, p. B-40). Section 5 reads what that manure carries.

**Activity: find your county's numbers.** Census Chapter 2 prints every county. For Indiana, Table 13 gives sheep, hair sheep and wool, and Table 23 gives alpacas and llamas. Worked example, Adams County: 108 farms with 3,278 sheep and lambs, and 23 farms producing 15,016 pounds of wool in 2022. The wool row is footnoted "Data are for farms with production, not necessarily sold." (NASS, 2024c, county Table 13, p. 412). A cell that reads "(D)" means "Withheld to avoid disclosing data for individual farms." (NASS, 2024a, Introduction). Look up your own county and keep the page: lesson 27 asks you to find your county's zoning rule, and *Manure and Compost* lesson 17 asks you to find your county extension office.

:::reveal Why does this course give no number for yaks in the United States? ||| The census form has no yak code, yaks fall under "Other livestock", and no published table has a yak row. There is no federal yak count.

:::reveal Which census table gives an Indiana county's alpacas and llamas, and which gives its sheep and wool? ||| Table 23 for alpacas and llamas; Table 13 for sheep, hair sheep and wool.

## Sources
- ${censusUS("Tables 32 and 33, printed p. 24; Appendix B, pp. B-15 and B-40; Introduction, PDF p. 3", "st99_1_032_034.pdf")}
- ${censusUSch2("Table 23, printed pp. 433 and 435 (PDF pp. 1 and 3)")}
- ${censusIN("State Table 32, printed p. 24; county Tables 13 and 23", IN_T32)}
- ${censusIN("County Table 13, Adams County row, printed p. 412", IN_CO13)}
- ${TLC_LIST}`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · What a fiber animal is",
      section: S1,
      body: QUIZ_INTRO,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How does the federal wool grade standard define wool?", options: ["The fiber from the fleece of sheep", "Any animal fiber that is sold by the pound", "Fleece of sheep, alpacas and llamas", "Sheep or goat fleece finer than 40's"], correctIndex: 0, explanation: "Section 31.201(g) of the AMS standard defines wool as the fiber from the fleece of sheep, so its 16 grades are sheep-wool grades. Alpaca and llama fiber is reached through the labeling law instead.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Which fiber does the Wool Products Labeling Act name among the specialty fibers that may be called wool?", options: ["Down of the yak", "Hair of the vicuna", "Fur of the Angora rabbit", "Floss of the silkworm"], correctIndex: 1, explanation: "15 U.S.C. § 68(b) lets wool include the specialty fibers from the hair of the camel, alpaca, llama and vicuna. The yak, the rabbit and the silkworm are not on that list.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Which animals does the first version of this course cover?", options: ["Sheep, Angora goats and Angora rabbits", "Alpacas, cashmere goats and silkworms", "Sheep, alpacas and llamas, and yaks only", "Sheep, llamas, rabbits and bison"], correctIndex: 2, explanation: "Lesson 1 sets the scope: sheep, alpacas and llamas, and yaks. Angora and cashmere goats, Angora rabbits and silkworms follow in a later version.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Which two animal fibers does the 2022 Census of Agriculture report form measure by the pound?", options: ["Alpaca and llama fleece", "Wool shorn and yak down combed", "Mohair clipped and cashmere combed", "Wool shorn and mohair clipped"], correctIndex: 3, explanation: "The form weighs \"Wool shorn\" and \"Mohair clipped\"; the only other fiber it weighs is a crop, hemp. Alpacas and llamas appear only as animals, and yaks have no code.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Besides wool and mohair, what is the only other fiber the 2022 census report form counts by the pound?", options: ["Hemp grown for fiber, a crop", "Alpaca fleece from yearly shearing", "Yak down, under Other livestock", "Llama fiber, counted by the head"], correctIndex: 0, explanation: "The only other fiber the form weighs is a crop, \"Hemp for fiber\". Alpacas and llamas are counted as animals with no fiber column, and yaks have no code at all.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "How does the 2022 census report form count alpacas and llamas?", options: ["By pounds of fleece shorn in 2022", "As animals only, with no fleece column", "As wool producers, beside sheep", "Under Other livestock, with yaks"], correctIndex: 1, explanation: "Alpacas and llamas have their own codes and are counted as animals (number on hand, number sold, sales dollars) with no fiber, fleece or shearing column. So no federal count of their fleece exists.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Which of these does this course say it does not teach?", options: ["Reading a federal grade standard", "Finding a county zoning rule", "Shearing or docking a sheep", "Comparing manure tables"], correctIndex: 2, explanation: "No lesson tells you how to shear, deliver a lamb, castrate, dock a tail, give a drug or treat an animal. The course does teach grade standards, zoning research and manure tables.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Who does lesson 1 say should teach the hands-on work of shearing, lambing or treating an animal?", options: ["A printed extension bulletin alone", "The 1935 USDA dye bulletin", "A state brand inspector's office", "A vet, shearer or mentor, in person"], correctIndex: 3, explanation: "Those jobs belong to a veterinarian, a shearer or a mentor who can stand next to you and the animal. The course teaches needs, law and decisions, not the hands-on work.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Which course comes before this one in The Calorie Loop?", options: ["Manure and Compost", "Making String", "Knot-Tying & Rope Work", "Keeping a House"], correctIndex: 0, explanation: "This is the third course in The Calorie Loop, after Manure and Compost, because a fiber animal is also a manure animal. Making String belongs to the From Fiber to Fabric line.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Where does section 4 of this course hand off spinning?", options: ["To Manure and Compost", "To Making String", "To the Crocheting course", "To Keeping a House"], correctIndex: 1, explanation: "Section 4 takes a fleece as far as yarn and hands spinning to Making String, which comes before Crocheting in the From Fiber to Fabric line.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Why does the 2022 census give no federal count of alpaca or llama fleece?", options: ["Alpaca fleece is counted under wool shorn", "Llama fleece is always withheld as (D)", "Its form has no column for camelid fiber", "Camelids are left off the form entirely"], correctIndex: 2, explanation: "The form counts alpacas and llamas as animals, with no fiber, fleece or shearing column. They are on the form, and their fleece is not folded into wool shorn.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Do the 16 grades of the federal wool standard apply to alpaca fiber?", options: ["Yes, alpaca is graded beside sheep", "Only for suri alpacas", "Only when it is blended with wool", "No, they are sheep-wool grades"], correctIndex: 3, explanation: "Because the standard defines wool as the fiber from the fleece of sheep, its 16 grades are sheep-wool grades. Lesson 11 covers the alpaca owners' voluntary standard.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "How many sheep and lambs did the US have on January 1, 2026?", options: ["4.99 million", "49.9 million", "1.38 million", "76,000 sheep and lambs"], correctIndex: 0, explanation: "NASS's January 2026 report gives 4.99 million sheep and lambs, 1 percent fewer than a year earlier. 76,000 is Indiana's flock.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "How much wool did the US shear in 2025?", options: ["2.05 million pounds", "20.5 million pounds", "6.8 million pounds", "215,000 pounds"], correctIndex: 1, explanation: "3.00 million sheep were shorn in 2025 for 20.5 million pounds of wool. 215,000 pounds is Indiana's share, and 6.8 pounds is the average fleece.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What was the average US fleece weight in 2025?", options: ["5.7 pounds", "9 pounds", "6.8 pounds", "20.5 pounds"], correctIndex: 2, explanation: "20.5 million pounds from 3.00 million sheep is an average fleece of 6.8 pounds. Indiana's average was 5.7, and 9 pounds is the wool in Purdue's budget ewe.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What average price per pound did US wool sell for in 2025?", options: ["$0.50", "$1.15", "$2.20", "$1.40"], correctIndex: 3, explanation: "NASS gives an average of $1.40 a pound, $28.7 million in all. Indiana's average was 50 cents, and $1.15 is the price in Purdue's 2016 budget.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What share of US sheep and lambs were hair sheep or wool-hair crosses on January 1, 2026?", options: ["28 percent", "8 percent", "48 percent", "63.7 percent"], correctIndex: 0, explanation: "NASS reports 28 percent. Indiana's 2022 census share was close, 28.7 percent; 63.7 percent is the share of Indiana sheep farms with 1 to 24 head.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "About what share of the national flock was in Indiana on January 1, 2026?", options: ["About 15 percent", "About 1.5 percent", "About 0.5 percent", "About 28 percent"], correctIndex: 1, explanation: "Indiana's 76,000 sheep and lambs were about 1.5 percent of the 4.99 million national flock.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What average price per pound did Indiana wool sell for in 2025?", options: ["$1.40", "$1.15", "$0.50", "$2.85"], correctIndex: 2, explanation: "Indiana averaged 50 cents a pound in 2025, against $1.40 nationally. $2.85 is about what one Indiana fleece was worth at that price.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "At 2025 state averages, about what was one Indiana fleece worth?", options: ["About $9.52", "About $0.50", "About $10.35", "About $2.85"], correctIndex: 3, explanation: "5.7 pounds at 50 cents is about $2.85, against about $9.52 for the average US fleece. $10.35 is the wool value in Purdue's budget.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "Why does lesson 2 warn that $2.85 is not what a hand spinner pays for one fleece?", options: ["It is a state commodity average", "It includes the cost of shearing", "It is a 1977 price, not 2025's", "It counts only hair sheep"], correctIndex: 0, explanation: "$2.85 comes from the state's average commodity price. A hand spinner's market for one good fleece is a different market, and no source the course read prices it.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "How many operators did NASS contact for its January 2026 sheep survey?", options: ["About 2,400", "About 24,000", "About 88,853", "About 240,000"], correctIndex: 1, explanation: "About 24,000 operators were contacted, and 44 percent of the reports were usable. 88,853 is the census count of US farms with sheep.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What share of the NASS sheep survey reports were usable?", options: ["24 percent", "94 percent", "44 percent", "0.9 percent"], correctIndex: 2, explanation: "NASS says 44 percent of the reports were usable. 0.9 percent is the inventory estimate's 10-year root mean square error.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What 10-year root mean square error does NASS give for its sheep inventory estimate?", options: ["9 percent", "4.4 percent", "2.85 percent", "0.9 percent"], correctIndex: 3, explanation: "NASS gives 0.9 percent for the sheep and lamb inventory estimate over the past 10 years.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "Which of these is a count, not a survey?", options: ["The five-yearly Census of Agriculture", "The January NASS sheep report", "The yearly wool price survey", "A Purdue budget table"], correctIndex: 0, explanation: "The yearly NASS numbers come from a survey. The Census of Agriculture, every five years, is the count: 88,853 farms with 5,104,328 sheep and lambs on December 31, 2022.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "How many US farms with sheep did the 2022 Census of Agriculture count?", options: ["59,209", "88,853", "2,456", "8,764"], correctIndex: 1, explanation: "88,853 farms held 5,104,328 sheep and lambs. 59,209 is the number with 1 to 24 head, 2,456 is Indiana's count, and 8,764 is US farms with alpacas.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What makes a place a \"farm\" in the Census of Agriculture?", options: ["Keeping 10 head of livestock all year", "Owning 20 acres or more of land in farms", "Sales of $1,000 or more, actual or normal", "Filing a Schedule F farm tax return"], correctIndex: 2, explanation: "A census farm is any place that sold, or normally would have sold, $1,000 or more of agricultural products in the year. A keeper below that line is not in the census numbers.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What share of US sheep did the farms with 1 to 24 sheep hold in 2022?", options: ["66 percent", "22.8 percent", "28 percent", "11.5 percent"], correctIndex: 3, explanation: "Two thirds of sheep farms (59,209) had 1 to 24 sheep, yet they held 11.5 percent of the sheep. The 111 farms with 5,000 or more held 22.8 percent.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What share of US sheep did the 111 farms with 5,000 or more head hold in 2022?", options: ["22.8 percent", "11.5 percent", "63.7 percent", "2.28 percent"], correctIndex: 0, explanation: "The 111 largest farms held 22.8 percent of the sheep, while the 59,209 farms with 1 to 24 head held 11.5 percent.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "What share of Indiana's 2022 wool sales did flocks of 1 to 24 head report?", options: ["About 11 percent", "About 65 percent", "About 28 percent", "About 99 percent"], correctIndex: 1, explanation: "They reported $162,000 of the state's $249,000, about 65 percent. Their pounds are withheld as (D), so no price per pound is computed.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "Why does lesson 2 compute no price per pound for Indiana's small flocks?", options: ["They reported no wool sales in 2022", "Their wool was graded as hair sheep", "Their wool pounds are withheld as (D)", "NASS surveys only large flocks"], correctIndex: 2, explanation: "The census prints their pounds as (D), withheld to avoid disclosing data for individual farms, so the dollars are taught as printed and no price per pound is derived.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "How many Indiana farms with sheep did the 2022 census count?", options: ["1,565", "88,853", "79,185", "2,456"], correctIndex: 3, explanation: "Indiana had 2,456 farms with 79,185 sheep and lambs; 1,565 of those farms had 1 to 24 head.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "How many alpacas did the 2022 census count in the US?", options: ["99,538", "29,705", "9,774", "1,722"], correctIndex: 0, explanation: "99,538 alpacas on 8,764 farms. 29,705 is the llama count, 9,774 the alpacas sold, and 1,722 Indiana's alpacas.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "How many llamas did the 2022 census count in the US?", options: ["99,538", "29,705", "3,136", "913"], correctIndex: 1, explanation: "29,705 llamas on 6,108 farms. 3,136 is the number of llamas sold, and 913 is Indiana's count.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "By about how much did the US alpaca count fall between the 2017 and 2022 censuses?", options: ["About 25 percent", "About 8 percent", "About 18 percent", "About 1 percent"], correctIndex: 2, explanation: "Alpacas fell by about 18 percent and llamas by about 25 percent between the 2017 and 2022 censuses.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "By about how much did the US llama count fall between the 2017 and 2022 censuses?", options: ["About 18 percent", "About 8 percent", "About 1 percent", "About 25 percent"], correctIndex: 3, explanation: "Llamas fell by about 25 percent, from a count that stood at 29,705 in 2022. Alpacas fell by about 18 percent.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "How many llamas did Indiana have in the 2022 census?", options: ["1,722 on 178 farms", "3,136 on 861 farms", "913 on 139 farms", "29,705 on 6,108 farms"], correctIndex: 2, explanation: "Indiana had 913 llamas on 139 farms and 1,722 alpacas on 178 farms. 3,136 is the number of llamas sold nationally, and 29,705 the national llama count.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "How many alpacas did Indiana have in the 2022 census?", options: ["1,722 on 178 farms", "913 alpacas on 139 farms", "9,774 on 1,804 farms", "3,278 alpacas on 108 farms"], correctIndex: 0, explanation: "Indiana had 1,722 alpacas on 178 farms and 913 llamas on 139 farms. 3,278 on 108 farms is Adams County's sheep.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "In 2022, how much did US farms receive for the alpacas they sold?", options: ["$3.6 million", "$14.3 million", "$28.7 million", "$1.43 million"], correctIndex: 1, explanation: "1,804 farms sold 9,774 alpacas for $14.3 million. $3.6 million is the llama figure, and $28.7 million is the value of the 2025 US wool clip.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "Why does this course state no US yak population?", options: ["Yaks are counted with bison", "Yak numbers are withheld as (D)", "The census has no yak code or yak row", "Yaks are counted only by FSIS"], correctIndex: 2, explanation: "The 2022 form has no yak code, yaks fall under Other livestock, and no published table has a yak row. With no federal count, the course gives no population.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "How does the 2022 census define \"Other livestock\"?", options: ["Livestock kept for fiber, not meat", "Any animal not sold in the census year", "Exotic animals inspected by FSIS", "Livestock without specific codes on the form"], correctIndex: 3, explanation: "The census defines it as all livestock not having specific codes on the 2022 report form. Yaks have no code, so they fall there.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "Which animal is named on the 2022 census form's Other livestock list?", options: ["Bison", "Yaks", "Vicunas", "Camels"], correctIndex: 0, explanation: "The list names alpacas, package bees, other bees, bison, deer, elk, laboratory animals, llamas, mink, rabbits and worms. Yaks, vicunas and camels are not named.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "Where does The Livestock Conservancy's 2026 priority list place the American yak?", options: ["Under camelids", "Under cattle", "Under sheep breeds", "It is not listed"], correctIndex: 1, explanation: "The 2026 conservation priority list includes the American yak under cattle, even though no federal count of yaks exists.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "Under what name does the 2022 census form list manure among the products a farm may sell?", options: ["Compost sold", "Litter sold", "Manure sold", "Dung sold"], correctIndex: 2, explanation: "The report form lists \"Manure sold\", code 4952, among the livestock products a farm may sell. A fiber animal is also a manure animal.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "In the Adams County, Indiana, example, how many farms produced wool in 2022?", options: ["108 farms", "3,278 farms", "15,016 farms", "23 farms"], correctIndex: 3, explanation: "Adams County had 108 farms with 3,278 sheep and lambs, and 23 farms producing 15,016 pounds of wool in 2022.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "How much wool did Adams County, Indiana, produce in 2022?", options: ["15,016 pounds", "3,278 pounds", "215,000 pounds", "1,501 pounds"], correctIndex: 0, explanation: "23 farms produced 15,016 pounds. 3,278 is the county's sheep and lambs, and 215,000 pounds is the whole state's 2025 wool.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "What does the census footnote on a county's wool production row say?", options: ["Data exclude every farm with fewer than 25 sheep", "Farms with production, not necessarily sold", "Data are estimates drawn from the January survey", "Data also include hair sheep shorn for comfort"], correctIndex: 1, explanation: "The row is footnoted \"Data are for farms with production, not necessarily sold.\" It measures wool produced, not wool sold.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "In a census table, what does \"(D)\" mean?", options: ["Data were damaged in processing", "Declined: the farm refused", "Withheld to protect individual farms", "Derived by NASS from the survey"], correctIndex: 2, explanation: "(D) means \"Withheld to avoid disclosing data for individual farms.\" The course computes nothing from such a cell.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "Which Indiana county-level census table gives a county's alpacas and llamas?", options: ["Table 13", "Table 27", "Table 32", "Table 23"], correctIndex: 3, explanation: "In Census Chapter 2, Table 23 gives each county's alpacas and llamas, and Table 13 its sheep, hair sheep and wool.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Sheep
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-sheep-needs",
      title: "4 · What a sheep needs",
      section: S2,
      recallContent: [
        {
          prompt: "How many alpacas and llamas did the 2022 census count in the US?",
          answer: "99,538 alpacas on 8,764 farms and 29,705 llamas on 6,108 farms, both down from 2017.",
        },
        {
          prompt: "Where in the census does a yak fall?",
          answer: "Under \"Other livestock\": the form has no yak code and no published table has a yak row.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a shepherd or a large-animal veterinarian.

Purdue Extension's guide to sheep well-being starts with company. Sheep have "a very strong flocking motivation" and show distress when isolated, so Purdue says to house them together (Erasmus, 2019, pp. 1, 2). One sheep is not a flock.

**Purdue's list** (Erasmus, 2019, pp. 1, 2):
- **Shearing.** "Remember that sheep with wool need to be shorn every year."
- **Predators.** Four ways to prevent predation: guard animals, fences, proper disposal of dead animals, and penning sheep at night.
- **Weather.** Shade and fresh water in heat; shelter for ewes lambing in winter or extreme weather, because lambs born outdoors in bad weather are at high risk of dying.
- **Feed.** High-quality feed, no moldy feed, and roughage.
- **Space.** Crowded or restrictive housing can produce wool pulling, in which sheep pull out, and sometimes eat, each other's wool.

**Wool sheep and hair sheep.** Wool sheep do not shed, so annual shearing is necessary; hair sheep shed naturally. The American Sheep Industry Association (ASI) suggests hair sheep to keepers who have trouble finding a shearer (ASI, 2021, p. 22). If you want yarn you want wool, and wool means a shearer every year.

**Learning normal.** Sheep are prey animals that may not show obvious signs of pain, injury or disease (Erasmus, 2019, p. 2), so a keeper learns what normal looks like. Purdue gives a normal temperature of 101.5 to 103.5 °F, about 12 to 15 breaths a minute, and 70 to 80 heartbeats a minute (Pezzanite et al., 2009, p. 1).

**Health is planned with a vet.** Purdue's checklist includes quarantining new additions for at least 30 days, clean and well-ventilated housing without drafts, a closed flock, and a working relationship with a veterinarian (Pezzanite et al., 2009, p. 12). Most contagious disease arrives with new animals: footrot "commonly appears on a farm when an infected sheep or goat is brought into the herd," and 5 to 10 percent of infected sheep become chronic carriers (pp. 1, 6). The clostridial vaccines are the only ones Purdue recommends "on a blanket basis for almost all sheep and goats"; every other vaccination program is developed for the individual flock (p. 2).

**Copper and selenium.** Sheep are especially sensitive to copper. Purdue says to "Be wary of beef and dairy products," to feed minerals formulated for sheep, and that copper toxicity is treated by a veterinarian (p. 11). Indiana, Kentucky and most surrounding states have selenium-deficient soils (p. 10).

**Parasites cost fiber.** External parasites "may damage the fleece," keds discolor wool and reduce the fleece's value, and shearing removes most adult keds (p. 5).

None of this tells you how to vaccinate, treat footrot or dose a mineral. Those are your veterinarian's calls.

:::reveal Why does Purdue say to house sheep together? ||| Sheep have "a very strong flocking motivation" and show distress when isolated from the flock.

:::reveal How long does Purdue's checklist say to quarantine new additions? ||| At least 30 days.

## Sources
- ${erasmus("Pages 1 and 2")}
- ${asiCare("Page 22")}
- ${as595("Pages 1, 2, 5, 6, 10, 11 and 12")}`,
    },
    {
      slug: "what-can-hurt-the-keeper",
      title: "5 · What can hurt the keeper: shared diseases, and a sheep that kills",
      section: S2,
      recallContent: [
        {
          prompt: "Name Purdue's four ways to prevent predation on sheep.",
          answer: "Guard animals, fences, proper disposal of dead animals, and penning sheep at night.",
        },
        {
          prompt: "Which vaccines does Purdue recommend for almost all sheep, and who builds the rest of a flock's program?",
          answer: "The clostridial vaccines. Every other program is developed for the individual flock, with a veterinarian.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a large-animal veterinarian, and a shepherd for the handling cases.

**Diseases that pass to people.** Purdue's sheep and goat health guide names two. Soremouth is contagious to humans, where it is called orf, so handlers wear gloves (Pezzanite et al., 2009, p. 4). And all the pathogens that cause abortion in sheep and goats can be transmitted to humans (p. 8). A second Purdue sheet, written for Purdue students, advises pregnant women to minimize exposure to uterine and placental discharges, "especially those of sheep", because of Q fever, and to avoid sheep of unknown or positive *Chlamydia psittaci* status (O'Neil & Latour, 2005, p. 2). That is a risk of lambing season, and a conversation for a doctor as well as a vet.

**Two deaths in the news.** Sheep are not usually thought of as dangerous. Two news reports show that one can kill a person.
- **Bolton, Massachusetts, December 2021.** The Associated Press reported that a 73-year-old volunteer at an animal therapy farm died after she was repeatedly rammed by a sheep. She was caring for livestock in a pen alone. The police chief said a sheep "charged at her and repeatedly rammed her," and that she "suffered extensive serious injuries and went into cardiac arrest" (Associated Press, 2021, paras. 1 to 3).
- **Waitākere, New Zealand, April 2024.** 1News reported that a couple aged 82 and 81 were found dead on a rural property "alongside a ram, which was later shot dead after attacking people." Police said: "We can confirm post mortem results indicate injuries consistent with an animal attack." A Federated Farmers spokesman said "hormones are all go in mating season, so they are more aggravated sometimes at this time of year," and that deaths due to farm animals were rare (1News Reporters, 2024). The deaths were referred to the coroner.

Two reports are not a statistic, and this course did not find a count of deaths caused by sheep. What they show is enough for a beginner: a ram, or any sheep that charges, can kill a person, and in the first case the person was alone in the pen. How to move, catch and work around a ram is learned from a shepherd, in the pen, not from a page.

:::reveal What is orf, and what does Purdue tell handlers to do about it? ||| Soremouth in humans: the virus is contagious to people, so handlers wear gloves.

:::reveal What did the Federated Farmers spokesman say about rams in mating season? ||| "hormones are all go in mating season, so they are more aggravated sometimes at this time of year." He added that deaths due to farm animals were rare.

## Sources
- ${as595("Pages 4 and 8")}
- ${AS570}
- ${AP_BOLTON}
- ${ONENEWS}`,
    },
    {
      slug: "scrapie-federal-and-indiana",
      title: "6 · Scrapie: the federal tag rule, and Indiana's stricter one",
      section: S2,
      recallContent: [
        {
          prompt: "Which sheep diseases or risks does Purdue say can pass to people?",
          answer: "Soremouth (orf in people); all the pathogens that cause abortion in sheep and goats; Q fever and Chlamydia psittaci, for pregnant women.",
        },
        {
          prompt: "In the Bolton case, how was the volunteer working when the sheep charged?",
          answer: "Alone, caring for livestock in a pen.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a large-animal veterinarian who works with Indiana BOAH's scrapie rules.

**The disease.** Scrapie is a fatal disease of the central nervous system of sheep and goats, with no treatment. Signs can take 2 to 5 years to appear, and apparently healthy infected animals can spread it (APHIS, 2026a; APHIS, 2019a, p. 1).

**The federal rule.** Every sexually intact sheep of any age, and every castrated sheep 18 months or older (shown by the second incisor), must be individually identified to its flock of birth before it moves or is commingled in interstate commerce. Some listed classes may move with group lot identification and an owner/hauler statement instead, among them animals in slaughter channels under 18 months (9 C.F.R. § 79.3(a)). A wether under 18 months is outside that federal rule. "Interstate commerce" includes a trip between two points in one state that passes through another state (§ 79.1). The federal guide says sheep "only need to be officially identified when leaving the premises or when being sold to another owner," and warns that some states are stricter (APHIS, 2019a, pp. 2, 3).

**Tags.** Official ear tags bear the official shield and go only in the ear. For wool sheep APHIS recommends the left ear, because metal tags can be struck by the shears. Its two documents disagree on where in the ear: "in the middle of the ear halfway between base and tip" (APHIS, 2019b, PDF p. 55) against "about a third of the way down from the head" (APHIS, 2019a, p. 3). Official tags may not be sold or given to another person. APHIS gives up to 100 free plastic flock ID tags to first-time participants until funds run out, at 1-866-USDA-TAG (APHIS, 2026b).

**Is it working?** In 2002 and 2003, 1 in 379 sheep sampled at US slaughter tested positive; since the last positive, fewer than 1 in 66,000, a fall of more than 99.4 percent. The last classical case was a sheep in 2021 and a goat in 2019, and the country must test for seven years without a positive to declare freedom, a window from January 28, 2021, to January 28, 2028 (APHIS, 2025). APHIS pays for testing up to 30 animals per flock per year and asks owners to submit sheep over 18 months found dead on the farm. About 30 percent of US sheep are genetically susceptible, and APHIS calls selecting genetically resistant breeding stock "One of the best ways to prevent scrapie" (APHIS, 2026a). It lists Indiana as a "Consistent" state (APHIS, 2026c).

**Indiana asks more.** Indiana's rule has the owner identify sheep to the flock of birth with official ID on change of ownership, before commingling with another flock, before an exhibition, and when moved to a market, with exceptions that include wethers under 18 months moved within the state (345 IAC 5-4-2(a), (b)). The Board of Animal Health (BOAH) flyer puts it simply: "all sheep/goats are required to have official eartags/identification before they leave the farm," the only exception being wethers younger than 18 months (BOAH, 2026a, PDF p. 3). No one may sell, transport or offer for sale a sheep that is not identified, or tamper with official identification (345 IAC 5-4-2(d), (g)). Also:
- A premises identification number is required before anyone buys, sells or exhibits livestock (345 IAC 1-2.5-5(a)).
- A scrapie flock ID is "Only needed if you have lambs or kids born at your premises" (BOAH & Purdue Extension Indiana 4-H, 2026).
- Sheep entering Indiana need official ID and a certificate of veterinary inspection issued within the 30 days before the move, with exceptions such as going directly to slaughter (345 IAC 5-5-1).
- Records are kept for five years, under both the federal guide and the Indiana rule (APHIS, 2019a, p. 4; 345 IAC 5-4-3(d)).

BOAH's toll-free line for a flock and premises ID is 1-877-747-3038, and a first order of tags through BOAH is up to 100 free (BOAH, 2026a, PDF pp. 3, 4). This course read Indiana's rule on the Legal Information Institute's copy, which gives no "current through" date, so check the official Indiana Administrative Code before relying on its wording here.

:::reveal Which sheep fall outside the federal scrapie identification rule? ||| A wether under 18 months. Every intact sheep of any age, and every castrated sheep 18 months or older, must be identified before interstate movement.

:::reveal Which ear does APHIS recommend for a wool sheep's tag, and why? ||| The left ear, because metal tags can be struck by the shears.

## Sources
- ${APHIS_SCRAPIE}
- ${aphisGuide("Pages 1 to 4")}
- ${APHIS_STANDARDS}
- ${APHIS_TAGS}
- ${APHIS_REPORT}
- ${APHIS_STATUS}
- ${cfr9("79.1, 79.3(a)", "79.3")}
- ${iac("345 Ind. Admin. Code 5-4-2(a), (b), (d), (g); 5-4-3(d); 5-5-1", "345-IAC-5-4-2")}
- ${iac("345 Ind. Admin. Code 1-2.5-5(a)", "345-IAC-1-2.5-5")}
- ${BOAH_FLYER}
- ${BOAH_4H}`,
    },
    {
      slug: "welfare-and-mulesing",
      title: "7 · Welfare: what the law covers, and the argument over mulesing",
      section: S2,
      recallContent: [
        {
          prompt: "What is scrapie, and is there a treatment?",
          answer: "A fatal disease of the central nervous system of sheep and goats. There is no treatment.",
        },
        {
          prompt: "Before which moves does Indiana require official ID on a sheep?",
          answer: "Change of ownership, commingling with another flock, an exhibition, and a move to a market.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a large-animal veterinarian.

**The federal Animal Welfare Act does not cover a fiber flock.** Its definition of "animal" excludes farm animals "used or intended for use as food or fiber" (7 U.S.C. § 2132(g); 9 C.F.R. § 1.1). This course did not read Indiana's animal cruelty statute, so it cannot say what Indiana welfare law requires of a shepherd. That is a question for your veterinarian or a lawyer.

**Mulesing.** Mulesing is the excision of skin from the breech of highly wrinkled Merino sheep to reduce the risk of flystrike. The Australian Veterinary Association (AVA) says the procedure "causes acute pain, distress and altered behaviour for up to 3 weeks" (AVA, 2026, Background). Its definition also covers non-surgical methods such as clips, freezing and intra-dermal injections (Definitions).

**The AVA's policy**, ratified on 16 July 2026 (points 1, 2, 4 and 5):
1. Mulesing should be phased out "as soon as a sustainable transition to flystrike-resistant sheep can be achieved."
2. A sudden ban is not advocated.
3. Meanwhile, non-surgical and non-painful procedures should be preferred wherever practical and effective.
4. Wherever mulesing is still done, the policy requires "mandatory multi-modal analgesia".

The AVA also states that in 2026 only about 25 percent of the wool sold at auction came from unmulesed sheep. That is the AVA's figure; this course did not read the auction data behind it.

**In the United States.** ASI states that "sheep have never been mulesed in the United States" (ASI, n.d.). That is the industry body's own statement, and this course found no independent source to check it against. This course also could not read the American Veterinary Medical Association's policy pages, which refused every fetch, so it says nothing about whether the AVMA has a policy on mulesing.

**Docking and castration.** ASI's position is that every effort should be made to dock tails and castrate before lambs are six weeks old, and that painful procedures on older animals should be done with analgesics or anesthetics under a veterinarian's direction. It also says: "Research does not clearly identify which methods of castration or tail docking ensure better welfare" (ASI, 2021, pp. 25, 26). Katahdin, Dorper and Shetland sheep have naturally short tails, so docking "may not be a part of every sheep management scheme" (p. 25). ASI describes its American Wool Assurance standards as voluntary, reflecting international standards such as the Five Freedoms (ASI, n.d.).

This lesson teaches what each body says, not how to do any procedure. Whether and how a lamb is docked or castrated is decided with your veterinarian.

:::reveal Does the federal Animal Welfare Act cover sheep kept for wool? ||| No. Its definition of "animal" excludes farm animals used or intended for use as food or fiber.

:::reveal What does the AVA require wherever mulesing is still performed? ||| "mandatory multi-modal analgesia", with appropriate technique.

## Sources
- ${USC_7_2132}
- ${cfr9("1.1, \"Animal\"", "1.1")}
- ${AVA}
- ${ASI_QA}
- ${asiCare("Pages 25 and 26")}`,
    },
    {
      slug: "breeds-and-shearers",
      title: "8 · Breeds for fiber, and finding a shearer",
      section: S2,
      recallContent: [
        {
          prompt: "Why does the Animal Welfare Act leave a fiber flock out?",
          answer: "Its definition of \"animal\" excludes farm animals used or intended for use as food or fiber.",
        },
        {
          prompt: "What did ASI say research does not clearly identify?",
          answer: "Which methods of castration or tail docking ensure better welfare.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a shepherd; and needs a practitioner: a sheep shearer, to confirm how Indiana keepers book shearing.

**Rare breeds.** The Livestock Conservancy keeps a priority list of breeds at risk. On its 2026 list, Navajo-Churro, Gulf Coast Native and Cotswold sheep are Critical: fewer than 200 annual US registrations and an estimated global population under 2,000. Leicester Longwool, Lincoln, Romeldale/CVM and Jacob (American) are Threatened (The Livestock Conservancy, 2026).

**Fineness varies by breed.** Deborah Robson's fiber profiles for the Conservancy give Romeldale's breed standard as 60s to 64s spinning counts, roughly 21 to 25 microns, and Leicester Longwool in the US as 32 to 38 microns (Robson, 2021). On the USDA scale, grade 64's is 20.60 to 22.04 microns, so Romeldale's 60s to 64s spans 20.60 to 24.94 (AMS, 1968, §§ 31.4, 31.6). A breed's range is not a grade, though: the USDA grades a lot of wool by its average plus a standard deviation (§ 31.0), as lesson 17 shows. These breed figures rest on one author, and no USDA breed-by-breed fiber data were found.

**Navajo-Churro.** Its fleece is double coated and low in lanolin, and The Livestock Conservancy says it "may be spun directly from the raw fleece" (The Livestock Conservancy, n.d.). Robson's profile gives the undercoat as 10 to 35 microns, most in the low 20s, the outercoat as 35 and up, and kemp as 65 and up (Robson, 2021). Lesson 22 reads the breed's history.

**Shearing is an appointment.** A wool sheep is shorn every year (lesson 4), and this course teaches shearing as an event the keeper arranges, not a skill it teaches. Purdue Extension News announced on February 25, 2026, a shearing school sponsored by the Indiana Sheep and Wool Market Development Program and hosted by the Indiana Sheep Association, on Saturday, March 14, at Purdue's Sheep Unit: $50 for beginners, capped at 20 beginners and five advanced participants. The unit's manager said, "There is a continuous need for new sheep shearers as the older generations retire" (O'Brien, 2026, paras. 1, 3, 6). That is his statement, and this course did not confirm that the school took place. ASI's advice to keepers who cannot find a shearer is to consider hair sheep (lesson 4). Read the other way round: if you want wool, find the shearer before you buy the sheep.

:::reveal Which three sheep breeds are Critical on The Livestock Conservancy's 2026 list? ||| Navajo-Churro, Gulf Coast Native and Cotswold.

:::reveal Why is a breed's micron range not the same thing as a USDA grade? ||| The USDA grades a lot of wool by its measured average and standard deviation. A breed's range only says where its fleeces tend to fall.

## Sources
- ${TLC_LIST}
- ${TLC_CHURRO}
- ${ROBSON}
- ${ams("§§ 31.0, 31.4 and 31.6, printed p. 1", 2)}
- ${shearSchool("Paragraphs 1, 3 and 6")}`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Sheep",
      section: S2,
      body: QUIZ_INTRO,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Why does Purdue say to house sheep together?", options: ["They have a strong flocking motivation", "Single sheep cannot be shorn safely", "Indiana law forbids keeping one sheep", "Grouped sheep need less feed each"], correctIndex: 0, explanation: "Purdue's AS-656-W says sheep have \"a very strong flocking motivation\" and show distress when isolated from the flock.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "What does Purdue's well-being guide say about sheep with wool?", options: ["They shed naturally each spring", "They need to be shorn every year", "They need shearing every 3 years", "They should be shorn only for sale"], correctIndex: 1, explanation: "\"Remember that sheep with wool need to be shorn every year.\" Hair sheep shed naturally; wool sheep do not.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Which is one of Purdue's four ways to prevent predation on sheep?", options: ["Shearing before summer", "Docking tails early", "Penning sheep at night", "Feeding minerals for sheep"], correctIndex: 2, explanation: "Purdue lists guard animals, fences, proper disposal of dead animals, and penning sheep at night.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Why does Purdue say to shelter ewes lambing in winter or extreme weather?", options: ["Cold weather stops ewes from producing milk", "Wet fleece cannot be sold after lambing", "Indiana's lambing rule requires a barn", "Outdoor lambs in bad weather risk dying"], correctIndex: 3, explanation: "Purdue: lambs born outdoors are at a high risk of dying when weather conditions are bad, so ewes lambing in winter or extreme weather get shelter.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Which housing condition can produce wool pulling?", options: ["Crowded or restrictive housing", "Housing with wide open drafts", "Pasture without any shade", "Bedding made of wood chips"], correctIndex: 0, explanation: "Purdue says sheep housed in crowded conditions or restrictive environments can develop wool pulling, pulling out and sometimes eating each other's wool.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Who does ASI suggest consider raising hair sheep?", options: ["Keepers in counties with no zoning", "Keepers who cannot find a shearer", "Keepers with flocks over 5,000", "Keepers who sell fleece to spinners"], correctIndex: 1, explanation: "Wool sheep do not shed, so annual shearing is necessary; hair sheep shed naturally. ASI suggests hair sheep to producers who have difficulty finding a shearer.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Why must a sheep keeper learn what a healthy sheep looks like?", options: ["Purdue requires a daily health log", "Scrapie tags record body temperature", "Sheep may not show obvious signs of pain", "Only healthy sheep may be shorn"], correctIndex: 2, explanation: "Purdue: sheep are prey animals that may not show obvious signs of pain, injury or disease, which makes problems hard to detect.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "What normal temperature range does Purdue give for sheep?", options: ["98.6 to 99.5 °F", "103.5 to 105.5 °F", "99.5 to 101.5 °F", "101.5 to 103.5 °F"], correctIndex: 3, explanation: "Purdue's AS-595-W gives 101.5 to 103.5 °F, with about 12 to 15 breaths and 70 to 80 heartbeats a minute.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "What normal heart rate does Purdue give for a sheep?", options: ["70 to 80 beats a minute", "12 to 15 beats a minute", "40 to 50 beats a minute", "120 to 140 beats a minute"], correctIndex: 0, explanation: "Purdue gives a heart rate of 70 to 80 beats a minute; 12 to 15 is the breathing rate.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "How long does Purdue's checklist say to quarantine new additions to a flock?", options: ["At least 7 days", "At least 30 days", "At least 18 months", "Until the first shearing"], correctIndex: 1, explanation: "Purdue's checklist, item 3: quarantine new additions to the herd for at least 30 days.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Which item is on Purdue's checklist for maintaining sheep health?", options: ["An open flock with frequent new stock", "Warm housing sealed against all air", "A closed flock", "Vaccinating only after an outbreak"], correctIndex: 2, explanation: "The checklist includes quarantine of at least 30 days, clean well-ventilated housing without drafts, a closed flock, and a working relationship with a veterinarian.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Which vaccines does Purdue recommend on a blanket basis for almost all sheep and goats?", options: ["The scrapie vaccines", "The footrot vaccines", "The soremouth vaccines", "The clostridial vaccines"], correctIndex: 3, explanation: "The clostridial vaccines are the only ones Purdue recommends on a blanket basis; every other program is developed for the individual flock.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "According to Purdue, how does most contagious disease reach a flock?", options: ["With new animals", "Through scrapie ear tags", "Through rainwater runoff", "Through hay from the field"], correctIndex: 0, explanation: "Purdue: most diseases of a contagious nature are introduced when new animals are added. Footrot commonly arrives with an infected sheep or goat brought into the herd.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "What share of sheep infected with footrot become chronic carriers, according to Purdue?", options: ["50 to 60 percent", "5 to 10 percent", "1 to 2 percent", "30 percent"], correctIndex: 1, explanation: "Purdue says 5 to 10 percent of infected sheep become chronic carriers of footrot.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Why does Purdue tell sheep keepers to be wary of beef and dairy products?", options: ["They carry the scrapie agent to sheep", "They hold too little selenium for sheep", "Sheep are especially sensitive to copper", "They contain ionophores that are toxic to sheep"], correctIndex: 2, explanation: "Sheep are especially sensitive to copper, and Purdue warns that beef and dairy products may contain high levels of it. Feed sheep minerals formulated for sheep.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "What does Purdue say about the soils of Indiana, Kentucky and most surrounding states?", options: ["They are copper-deficient", "They carry scrapie for years", "They are too high in selenium", "They are selenium-deficient"], correctIndex: 3, explanation: "Purdue: Indiana, Kentucky and most surrounding states are known to have selenium-deficient soils.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "What do keds do to a fleece, according to Purdue?", options: ["Discolor the wool and lower its value", "Felt the wool so it cannot be carded", "Add weight that buyers pay extra for", "Strip lanolin so the wool will not dye"], correctIndex: 0, explanation: "External parasites may damage the fleece; keds discolor the wool and reduce the fleece's value. Shearing removes most adult keds.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "What is soremouth called when people catch it?", options: ["Q fever", "Orf", "Scrapie", "Footrot"], correctIndex: 1, explanation: "Purdue: the soremouth virus is contagious to humans, and in people it is termed orf.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "What does Purdue tell handlers to wear when dealing with soremouth?", options: ["A respirator", "Ear protection", "Gloves", "Steel-toed boots"], correctIndex: 2, explanation: "Because the soremouth virus is contagious to humans, Purdue says handlers wear gloves.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Which sheep and goat pathogens does Purdue say can be transmitted to humans?", options: ["Only the clostridial bacteria found in vaccines", "None; sheep diseases do not reach people", "Only the scrapie agent, through meat", "All those that cause abortion in sheep and goats"], correctIndex: 3, explanation: "Purdue's AS-595-W: all the pathogens that cause abortion in sheep and goats can be transmitted to humans, so aborted fetuses and placentas are handled with care.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Which discharges does Purdue advise pregnant women to minimize exposure to?", options: ["Uterine and placental discharges", "Nasal discharges from soremouth", "Fleece grease during shearing", "Urine from dung piles"], correctIndex: 0, explanation: "AS-570-W advises pregnant women to minimize exposure to uterine and placental discharges, \"especially those of sheep\", because of Q fever.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Which disease does Purdue name when warning pregnant women about sheep birth fluids?", options: ["Orf", "Q fever", "Scrapie", "Footrot"], correctIndex: 1, explanation: "The warning about uterine and placental discharges, especially those of sheep, is about Q fever.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Which sheep does Purdue advise pregnant women to avoid?", options: ["Any ram at all during the mating season", "Hair sheep, because they shed close to people", "Sheep of unknown or positive C. psittaci status", "Wethers younger than 18 months of age"], correctIndex: 2, explanation: "AS-570-W advises pregnant women to avoid sheep of unknown or positive Chlamydia psittaci status.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "In the Bolton, Massachusetts, case of 2021, what killed a 73-year-old farm volunteer?", options: ["A llama that kicked her in a pen", "Q fever caught at a lambing", "A fall while shearing alone", "A sheep that repeatedly rammed her"], correctIndex: 3, explanation: "The Associated Press reported that she died after she was repeatedly rammed by a sheep while caring for livestock in a pen alone.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "What does the AP report say about how the Bolton volunteer was working?", options: ["Caring for livestock in a pen alone", "Shearing a ewe with a second worker", "Moving a ram with two farm staff", "Tagging lambs for a 4-H fair"], correctIndex: 0, explanation: "She was caring for livestock in a pen alone when a sheep \"charged at her and repeatedly rammed her,\" the police chief said.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "In the Waitākere, New Zealand, case of 2024, what animal was found beside the couple?", options: ["A llama", "A ram", "A guard dog", "A yak"], correctIndex: 1, explanation: "1News reported the couple were found alongside a ram, which was later shot dead after attacking people.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "What did New Zealand police say the post mortem results indicated?", options: ["Heart failure, with no injuries found on either", "Poisoning from moldy feed", "Injuries consistent with an animal attack", "Q fever from a lambing ewe"], correctIndex: 2, explanation: "Police said: \"We can confirm post mortem results indicate injuries consistent with an animal attack.\" The deaths were referred to the coroner.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Why did the Federated Farmers spokesman say rams can be more aggravated at some times of year?", options: ["Hunger at the end of winter", "Heat stress during summer", "Pain from a fresh shearing", "Hormones in mating season"], correctIndex: 3, explanation: "He said \"hormones are all go in mating season, so they are more aggravated sometimes at this time of year.\"", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "What did the Federated Farmers spokesman say about deaths caused by farm animals?", options: ["They were rare", "They were rising every year", "They mostly involved alpacas", "They were never caused by sheep"], correctIndex: 0, explanation: "He said deaths due to farm animals were rare, but mating season could make rams more volatile.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "What does lesson 5 conclude from the two news reports?", options: ["Rams attack only in mating season", "A charging sheep or ram can kill a person", "Sheep kill more people each year than cattle", "Only elderly keepers are at risk"], correctIndex: 1, explanation: "Two reports are not a statistic, and the course found no count of deaths. What they show is that a charging sheep or ram can kill a person.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Where does lesson 5 say a beginner should learn to move and catch a ram?", options: ["From this course's lessons", "From the census report form", "From a shepherd, in the pen", "From a scrapie tag guide"], correctIndex: 2, explanation: "How to move, catch and work around a ram is learned from a shepherd, in the pen, not from a page.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Besides a vet, who does lesson 5 say the pregnancy warning is a conversation for?", options: ["A shearer", "A zoning officer", "A county assessor", "A doctor"], correctIndex: 3, explanation: "The Q fever and Chlamydia psittaci warning is a risk of lambing season, and a conversation for a doctor as well as a vet.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "What kind of disease is scrapie?", options: ["A fatal central nervous system disease", "A skin infection treated with gloves", "A hoof disease that new animals carry in", "A parasite that discolors the fleece"], correctIndex: 0, explanation: "APHIS: scrapie is a fatal disease of the central nervous system of sheep and goats, with no treatment.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "How long can scrapie take to show signs?", options: ["2 to 5 weeks", "2 to 5 years", "30 days", "18 months exactly"], correctIndex: 1, explanation: "Signs can take 2 to 5 years to appear, and apparently healthy infected animals can spread the disease.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Is there a treatment for scrapie?", options: ["Yes, a clostridial vaccine", "Yes, shearing removes it", "No, it has no treatment", "Yes, if caught within 30 days"], correctIndex: 2, explanation: "APHIS: scrapie is fatal and has no treatment. It calls selecting genetically resistant breeding stock one of the best ways to prevent it.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Which sheep must be individually identified before interstate movement under the federal rule?", options: ["Only breeding ewes over 18 months that are sold", "Only sheep shown at fairs and exhibitions", "Only wethers younger than 18 months", "Intact sheep, and wethers 18 months or older"], correctIndex: 3, explanation: "9 CFR 79.3(a): every sexually intact sheep of any age, and every castrated sheep 18 months or older, must be identified to its flock of birth.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Which sheep falls outside the federal scrapie identification rule?", options: ["A wether under 18 months", "A ram of any age", "A ewe under 18 months", "A wether over 18 months"], correctIndex: 0, explanation: "A castrated male under 18 months is outside the federal rule. Intact sheep of any age are covered.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "How does the federal rule tell whether a castrated sheep is 18 months or older?", options: ["By its ear tag number", "By the second incisor", "By its fleece weight", "By its flock ID record"], correctIndex: 1, explanation: "The rule covers castrated sheep 18 months or older, as shown by the second incisor.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Under 9 CFR part 79, which trip counts as interstate commerce?", options: ["Any trip longer than 100 miles", "Any sale to a buyer living in the same county", "An in-state trip that crosses another state", "Only a trip to an out-of-state market"], correctIndex: 2, explanation: "9 CFR 79.1: interstate commerce includes a trip between two points in one state that passes through another state.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "When does the 2019 federal guide say sheep need official identification?", options: ["Only at their first shearing", "At birth, before they leave the ewe", "Only when they reach 30 days of age", "When leaving the premises or being sold"], correctIndex: 3, explanation: "The guide says sheep only need to be officially identified when leaving the premises or when being sold, and warns that some states are stricter.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Which ear does APHIS recommend for a wool sheep's official tag?", options: ["The left ear", "The right ear", "Either ear", "Both ears"], correctIndex: 0, explanation: "APHIS recommends the left ear for wool sheep, because metal tags can be struck by the shears.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Why does APHIS recommend a particular ear for a wool sheep's metal tag?", options: ["That ear has thinner cartilage", "Metal tags can be struck by the shears", "Fair judges read only that side", "The flock ID must face the herder"], correctIndex: 1, explanation: "For wool sheep APHIS recommends the left ear because metal tags can be struck by the shears.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "On where in the ear an official tag goes, what do APHIS's two documents do?", options: ["They agree on halfway", "They leave it to the vet", "They disagree", "They require the ear tip"], correctIndex: 2, explanation: "The program standards say \"in the middle of the ear halfway between base and tip\"; the 2019 guide says \"about a third of the way down from the head\".", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "May official scrapie tags be given to another person?", options: ["Yes, within the same county", "Yes, to a neighbor's flock", "Only to a 4-H member", "No, they may not be sold or given away"], correctIndex: 3, explanation: "The 2019 guide says official tags may not be sold or given to another person.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "How many free plastic flock ID tags does APHIS give a first-time participant, until funds run out?", options: ["Up to 100", "Up to 80", "Up to 30", "Up to 1,000"], correctIndex: 0, explanation: "The 2026 APHIS page offers up to 100 free plastic flock ID tags to first-time participants. The 2019 guide's \"up to 80\" is superseded.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "In 2002 and 2003, about how many sheep sampled at US slaughter tested positive for scrapie?", options: ["1 in 66,000", "1 in 379", "1 in 30", "1 in 3,790"], correctIndex: 1, explanation: "APHIS's progress report: 1 in 379 in 2002 and 2003, against fewer than 1 in 66,000 since the last positive, a fall of more than 99.4 percent.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Since the last positive, what share of sheep sampled at slaughter have tested positive?", options: ["About 1 in 379", "About 1 in 6,600", "Fewer than 1 in 66,000", "Exactly zero since 2002"], correctIndex: 2, explanation: "Fewer than 1 in 66,000 sampled, against 1 in 379 in 2002 and 2003. Positives continued until 2021, so it was not zero since 2002.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "When were the last classical scrapie cases in the US?", options: ["A sheep in 2019 and a goat in 2021", "A sheep and a goat in 2003", "A sheep and a goat in 2025", "A sheep in 2021 and a goat in 2019"], correctIndex: 3, explanation: "APHIS: the last classical scrapie positive was a sheep in 2021 and a goat in 2019.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "How long must the US test without a positive before declaring freedom from scrapie?", options: ["Seven years", "Five years", "Two years", "Ten years"], correctIndex: 0, explanation: "Seven years without a positive, a window from January 28, 2021, to January 28, 2028.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "How many animals per flock per year will APHIS pay to test for scrapie?", options: ["Up to 100", "Up to 30", "Up to 5", "Up to 379"], correctIndex: 1, explanation: "APHIS pays for testing of up to 30 animals per flock per year.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Which dead sheep does APHIS ask owners to submit for scrapie testing?", options: ["Lambs under 30 days old that die soon after birth", "Only sheep that die at a sale barn", "Sheep over 18 months found dead on the farm", "Any wether that dies before shearing"], correctIndex: 2, explanation: "APHIS asks owners to submit sheep over 18 months found dead or euthanized on the farm.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "What share of US sheep does APHIS say are genetically susceptible to scrapie?", options: ["About 3 percent", "About 99 percent", "About 60 percent", "About 30 percent"], correctIndex: 3, explanation: "About 30 percent of US sheep are genetically susceptible, and APHIS calls selecting resistant breeding stock one of the best ways to prevent scrapie.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "What does APHIS call selecting genetically resistant breeding stock?", options: ["One of the best ways to prevent scrapie", "The only legal way to prevent scrapie", "A practice banned in Indiana", "A treatment for infected sheep"], correctIndex: 0, explanation: "APHIS calls it \"One of the best ways to prevent scrapie,\" alongside a closed flock.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "How does APHIS list Indiana in its scrapie program?", options: ["As an Inconsistent state", "As a Consistent state", "As scrapie-free since 2003", "As outside the program"], correctIndex: 1, explanation: "APHIS's status page lists Indiana as a \"Consistent\" state in the scrapie program.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Before which move does Indiana's rule require official ID on a sheep?", options: ["Before any trip across a county line", "Before shearing on the home farm", "Before an exhibition in the state", "Before a vet visit with no sale"], correctIndex: 2, explanation: "345 IAC 5-4-2 requires official ID on change of ownership, before commingling with another flock, before an exhibition, and when moved to a market.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "What does the BOAH flyer say all sheep need before they leave the farm?", options: ["A certificate of veterinary inspection", "A scrapie test result", "A premises ID card", "Official eartags or identification"], correctIndex: 3, explanation: "BOAH's flyer: \"all sheep/goats are required to have official eartags/identification before they leave the farm.\"", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "What is the only exception the BOAH flyer gives to tagging sheep before they leave the farm?", options: ["Wethers younger than 18 months", "Ewes going straight to slaughter", "Rams kept for breeding at home", "Hair sheep that are never shorn"], correctIndex: 0, explanation: "The flyer's only exception is wethers younger than 18 months.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "When is an Indiana scrapie flock ID needed, according to BOAH?", options: ["Only if you sell wool to a mill", "Only if lambs or kids are born at your premises", "For every flock in Indiana, with or without births", "Only for flocks of 600 or more sheep"], correctIndex: 1, explanation: "BOAH: a scrapie flock ID is \"Only needed if you have lambs or kids born at your premises\"; in-and-out flocks without births do not need one.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Under Indiana's rule, what may no one do with a sheep that is not identified as required?", options: ["Shear it or sell its wool", "Keep it for more than 30 days", "Sell, transport or offer it for sale", "Show it to a veterinarian"], correctIndex: 2, explanation: "345 IAC 5-4-2(d): no one may sell, transport or offer for sale a sheep that is not identified as required.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "What does Indiana require before anyone buys, sells or exhibits livestock?", options: ["A county zoning permit", "A negative scrapie test for each animal", "A shearing certificate", "A premises identification number"], correctIndex: 3, explanation: "345 IAC 1-2.5-5(a) requires a premises identification number before anyone buys, sells or exhibits livestock.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Within how many days before the move must the veterinary certificate be issued for sheep entering Indiana?", options: ["30 days", "7 days", "18 months", "5 years"], correctIndex: 0, explanation: "Sheep entering Indiana need official ID and a certificate of veterinary inspection issued within the 30 days before the move.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "How long are scrapie records kept under both the federal guide and Indiana's rule?", options: ["Seven years", "Five years", "Two years", "Thirty days"], correctIndex: 1, explanation: "Records are kept for five years under the federal guide and under 345 IAC 5-4-3(d).", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Why does lesson 6 tell you to check the official Indiana Administrative Code?", options: ["The rule was repealed in 2021", "BOAH's own flyer contradicts the federal rule on tags", "Its copy of the rule had no current-through date", "Indiana has no scrapie rule of its own"], correctIndex: 2, explanation: "The course read 345 IAC on the Legal Information Institute's copy, which gives no \"current through\" date, so the official text should be checked.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Does the federal Animal Welfare Act cover sheep kept for wool?", options: ["Yes, it covers every farm animal in the country", "Only flocks of 600 or more", "Only sheep shown at fairs", "No, it excludes animals kept for food or fiber"], correctIndex: 3, explanation: "Its definition of \"animal\" excludes farm animals used or intended for use as food or fiber (7 U.S.C. 2132(g); 9 CFR 1.1).", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "Which Indiana law did this course not read, so it cannot say what Indiana welfare law requires of a shepherd?", options: ["The animal cruelty statute", "The scrapie rule, 345 IAC 5", "The right-to-farm statute", "The fence law, IC 32-26-9"], correctIndex: 0, explanation: "Lesson 7: the course did not read Indiana's animal cruelty statute. The scrapie rule, right to farm and the fence law are taught elsewhere in the course.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "Which sheep is mulesing done on, as the AVA describes it?", options: ["Hair sheep such as Katahdin", "Highly wrinkled Merino sheep", "Navajo-Churro sheep", "Wethers under 18 months"], correctIndex: 1, explanation: "Mulesing is the excision of skin from the breech of highly wrinkled Merino sheep to reduce the risk of flystrike.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "How long does the AVA say mulesing causes acute pain, distress and altered behavior?", options: ["Up to 3 days", "Up to 6 weeks", "Up to 3 weeks", "Up to 3 hours"], correctIndex: 2, explanation: "The AVA: mulesing \"causes acute pain, distress and altered behaviour for up to 3 weeks\".", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "What does the AVA's definition of mulesing also cover?", options: ["Tail docking with rubber rings", "Shearing the breech before lambing", "Crutching dung locks from the breech", "Non-surgical methods such as clips"], correctIndex: 3, explanation: "The AVA's definition covers non-surgical methods such as clips, freezing and intra-dermal injections, as well as surgery.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "Does the AVA's 2026 policy call for a sudden ban on mulesing?", options: ["No, it calls for a phase-out", "Yes, effective at once", "Yes, starting in 2028", "No, it endorses mulesing"], correctIndex: 0, explanation: "The policy calls for mulesing to be phased out as soon as a sustainable transition to flystrike-resistant sheep can be achieved, and does not advocate a sudden ban.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "What does the AVA require wherever mulesing is still done during the transition?", options: ["A veterinarian's written consent", "Mandatory multi-modal analgesia", "A full ban on wool sales", "Testing for scrapie first"], correctIndex: 1, explanation: "Policy point 5: where mulesing is performed, welfare impacts must be mitigated with appropriate technique and \"mandatory multi-modal analgesia\".", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "What share of wool sold at auction in 2026 does the AVA say came from unmulesed sheep?", options: ["About 75 percent", "About 99 percent", "About 25 percent", "About 5 percent"], correctIndex: 2, explanation: "The AVA states about 25 percent. The course did not read the auction data behind the figure, so it is taught as the AVA's.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "How does lesson 7 treat ASI's statement that sheep have never been mulesed in the US?", options: ["As a finding of federal law", "As an AVMA policy statement", "As a NASS survey result", "As ASI's own claim, not checked"], correctIndex: 3, explanation: "It is the industry body's own statement, and the course found no independent source to check it against.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "What does lesson 7 say about an AVMA policy on mulesing?", options: ["It could not read the AVMA pages", "The AVMA bans mulesing outright", "The AVMA endorses the AVA policy", "The AVMA requires analgesia"], correctIndex: 0, explanation: "The AVMA's policy pages refused every fetch, so the course says nothing about whether the AVMA has a mulesing policy.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "Before what age does ASI say tail docking and castration should be done whenever possible?", options: ["Six months", "Six weeks", "18 months", "Two weeks"], correctIndex: 1, explanation: "ASI: every effort should be made to do these procedures before lambs are 6 weeks old, and on older animals with analgesics or anesthetics under a veterinarian's direction.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "What does ASI say research does not clearly identify?", options: ["Whether yearly shearing causes sheep any pain at all", "Whether hair sheep need any shelter", "Which docking method ensures better welfare", "Whether mulesing reduces flystrike"], correctIndex: 2, explanation: "ASI: \"Research does not clearly identify which methods of castration or tail docking ensure better welfare.\"", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "Which breeds does ASI name as having naturally short tails?", options: ["Merino, Rambouillet and Lincoln", "Cotswold, Jacob and Romeldale", "Navajo-Churro and Gulf Coast", "Katahdin, Dorper and Shetland"], correctIndex: 3, explanation: "ASI names Katahdin, Dorper and Shetland, so docking \"may not be a part of every sheep management scheme\".", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "How does ASI describe its American Wool Assurance standards?", options: ["Voluntary", "Required by federal law", "Required by Indiana BOAH", "Set by the AVA"], correctIndex: 0, explanation: "ASI describes the American Wool Assurance standards as voluntary, reflecting international standards such as the Five Freedoms.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "Which sheep breeds are Critical on The Livestock Conservancy's 2026 list?", options: ["Leicester Longwool, Lincoln and Jacob (American)", "Navajo-Churro, Gulf Coast Native and Cotswold", "Merino, Rambouillet and Dorper", "Katahdin, Shetland and Romeldale"], correctIndex: 1, explanation: "On the 2026 list, Navajo-Churro, Gulf Coast Native and Cotswold are Critical; Leicester Longwool, Lincoln, Romeldale/CVM and Jacob (American) are Threatened.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "What does Critical mean on The Livestock Conservancy's list?", options: ["Fewer than 2,000 US registrations a year", "No registrations for five years", "Fewer than 200 US registrations a year", "Fewer than 200 animals in the world"], correctIndex: 2, explanation: "Critical means fewer than 200 annual US registrations and an estimated global population under 2,000.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "Which of these breeds is Threatened, not Critical, on the 2026 list?", options: ["Navajo-Churro", "Gulf Coast Native", "Cotswold", "Leicester Longwool"], correctIndex: 3, explanation: "Leicester Longwool is Threatened, with Lincoln, Romeldale/CVM and Jacob (American). Navajo-Churro, Gulf Coast Native and Cotswold are Critical.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "What micron range does Robson give for Leicester Longwool in the US?", options: ["32 to 38 microns", "21 to 25 microns", "10 to 35 microns", "17 to 19 microns"], correctIndex: 0, explanation: "Robson's profile gives Leicester Longwool in the US as 32 to 38 microns; Romeldale is roughly 21 to 25.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "What spinning counts does Romeldale's breed standard call for, per Robson?", options: ["80s to 90s", "60s to 64s", "36s to 40s", "46s to 50s"], correctIndex: 1, explanation: "Romeldale's standard calls for 60s to 64s, roughly 21 to 25 microns.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "On the USDA scale, what micron span does Romeldale's 60s to 64s cover?", options: ["17.70 to 19.14", "29.30 to 32.69", "20.60 to 24.94", "24.95 to 27.84"], correctIndex: 2, explanation: "Grade 64's starts at 20.60 and grade 60's ends at 24.94, so the span is 20.60 to 24.94.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "Why is a breed's micron range not a USDA grade?", options: ["USDA grades only Merino wool", "USDA grades by breed, not by microns", "USDA stopped grading wool entirely in 1968", "A grade uses a lot's average and deviation"], correctIndex: 3, explanation: "The USDA grades a lot of wool by its average fiber diameter plus its standard deviation. A breed's range only says where its fleeces tend to fall.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "What does The Livestock Conservancy say Navajo-Churro fleece may be?", options: ["Spun directly from the raw fleece", "Graded finer than 80's", "Shorn only once every third year, not yearly", "Used only for felting"], correctIndex: 0, explanation: "The fleece is double coated and low in lanolin, and the Conservancy says it \"may be spun directly from the raw fleece\".", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "What undercoat range does Robson give for Navajo-Churro?", options: ["35 microns and up, most near 40", "10 to 35 microns, most in the low 20s", "65 microns and up, as kemp", "17 to 19 microns, like Merino"], correctIndex: 1, explanation: "Robson: undercoat 10 to 35 microns, most in the low 20s; outercoat 35 and up; kemp 65 and up.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "How does this course treat shearing?", options: ["As a skill it teaches step by step", "As optional for wool sheep", "As an event the keeper arranges", "As a job for the county office"], correctIndex: 2, explanation: "Lesson 8: the course teaches shearing as an event the keeper arranges, not a skill it teaches.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "Who hosted the 2026 Indiana shearing school, per Purdue Extension News?", options: ["The Board of Animal Health", "The American Wool Council", "The Livestock Conservancy", "The Indiana Sheep Association"], correctIndex: 3, explanation: "The school was sponsored by the Indiana Sheep and Wool Market Development Program and hosted by the Indiana Sheep Association at Purdue's Sheep Unit.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "What did the Purdue Sheep Unit's manager say about shearers?", options: ["New ones are always needed as older ones retire", "There are more than enough of them in Indiana today", "Most now shear alpacas only", "They must be licensed by the state"], correctIndex: 0, explanation: "He said, \"There is a continuous need for new sheep shearers as the older generations retire.\"", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "What does lesson 8 say the course did not confirm about the 2026 shearing school?", options: ["That it cost $50", "That it took place", "Where it was held", "Who sponsored it"], correctIndex: 1, explanation: "The announcement gave the date, price, host and caps; the course did not confirm that the school took place.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "What does lesson 8 advise, reading ASI's hair-sheep advice the other way round?", options: ["Buy hair sheep if you want yarn", "Learn to shear your own sheep from the first day", "Find the shearer before buying the sheep", "Skip shearing in the first year"], correctIndex: 2, explanation: "ASI suggests hair sheep to keepers who cannot find a shearer. Read the other way: if you want wool, find the shearer before you buy the sheep.", sourceLessonSlug: "breeds-and-shearers" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Alpaca, llama and yak
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "alpaca-and-llama-needs",
      title: "9 · What an alpaca or llama needs",
      section: S3,
      recallContent: [
        {
          prompt: "What spinning counts and microns does Robson give for Romeldale?",
          answer: "60s to 64s, roughly 21 to 25 microns. On the USDA scale that spans 20.60 to 24.94.",
        },
        {
          prompt: "What does The Livestock Conservancy say Navajo-Churro fleece may be?",
          answer: "\"spun directly from the raw fleece\": it is double coated and low in lanolin.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a veterinarian who treats camelids, or an experienced alpaca and llama keeper.

**Herd animals.** The Merck Veterinary Manual says llamas and alpacas "do poorly if isolated"; the National Center for Appropriate Technology (NCAT) says they "should never be kept alone." A male kept apart should stay within sight of the others, and even visual access reduces stress (Wiedner, 2021, Housing; Gegner, 2000/2012, p. 7).

**Dung piles.** Camelids urinate and defecate on communal dung piles and, unless forage becomes very limited, will not graze around them, which tends to limit the spread of internal parasites (Wiedner, 2021, Housing).

**Fences keep predators out.** UMass Extension reports alpaca injuries and deaths from the dog next door or from stray dogs, and Merck notes that guard llamas "cannot successfully defend against dog packs, cougars, or bears" (UMass Extension, 2026a, Fencing; Wiedner, 2021). A news report shows what that looks like. In February 2019, NBC Bay Area reported that three alpacas at a school's learning farm in Vallejo, California, were mauled to death by a pair of neighborhood dogs. The two Huskies "dug their way under a fence and went after the alpacas then attacked some sheep, tearing off an ear on one of them." The dogs had caused trouble at the farm before (McSweeney, 2019).

**How high.** The advice differs. Merck gives 1.5 m (about 59 in) for llamas and 1.2 m (about 47 in) for alpacas; NCAT at least 48 inches, with many producers recommending 60; UMass a 5-foot non-climb fence. Barbed wire is not needed (Merck) or not recommended (NCAT), and cow fencing with large openings can trap an alpaca's head (Wiedner, 2021; Gegner, p. 7; UMass Extension, 2026a).

**How many per acre.** Not settled: NCAT gives three to five llamas or five to 10 alpacas per acre, UMass six alpacas per acre, both depending on pasture quality (Gegner, p. 6; UMass Extension, 2026a).

**Shelter.** The sources differ, so learn both. UMass says alpaca shelter need not be warm, only dry and out of the wind, and that alpacas "can even be left out all winter." NCAT says they "must be provided with natural or manmade shelter with adequate ventilation and space so that they may escape from heat, cold, and precipitation," and that "Depending on the climate, heating and cooling measures are also necessary" (UMass Extension, 2026a, Introduction; Gegner, p. 7).

**Feed.** Grass hay is the base. Merck says most adults hold condition on 10 to 14 percent crude-protein grass hay, eating about 1.8 to 2 percent of body weight a day as dry matter, and that legumes "may contribute to obesity" (Wiedner, 2021, Feeding). NCAT's table gives 8 to 10 percent crude protein for maintenance and says grass hays are better than alfalfa (Gegner, p. 6, Table 1).

**Two kinds of alpaca.** Huacaya fiber grows perpendicular to the body; suri fiber grows parallel, hanging in ringlets (Gegner, p. 3). The Alpaca Owners Association (AOA) gives processable lengths of 2 to 5.5 inches for huacaya and 2 to 7.5 inches for suri (AOA, 2021).

:::reveal In the Vallejo case, how did the dogs reach the alpacas? ||| The two Huskies dug their way under a fence.

:::reveal What does Merck put at the base of an adult camelid's diet, and what does it warn about legumes? ||| Grass hay of 10 to 14 percent crude protein; legumes "may contribute to obesity".

## Sources
- ${merck("\"Housing\"; \"Feeding\"; guard-llama figure caption")}
- ${ncat("Pages 3, 6 and 7")}
- ${UMASS_HOUSING}
- ${AOA}
- ${VALLEJO}`,
    },
    {
      slug: "camelid-health-and-indiana-rules",
      title: "10 · Camelid health warnings, and the rules in Indiana",
      section: S3,
      recallContent: [
        {
          prompt: "What fence heights do Merck, NCAT and UMass give for alpacas?",
          answer: "Merck 1.2 m (about 47 in); NCAT at least 48 inches, many producers recommending 60; UMass a 5-foot non-climb fence.",
        },
        {
          prompt: "What is the difference between huacaya and suri fiber?",
          answer: "Huacaya grows perpendicular to the body; suri grows parallel, hanging in ringlets.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a veterinarian who treats camelids, and someone who knows Indiana BOAH's camelid rules.

**Cattle feed can kill a camelid.** Ionophores such as monensin, "found in many cattle feeds, are highly toxic to camelids," and copper toxicity is also a concern (Wiedner, 2021, Feeding). Cattle feed is not camelid feed.

**No approved drugs.** No drugs are approved for llamas and alpacas in the United States, so all use is extralabel, and because camelids in North America can be food animals, drug withdrawal time matters (Wiedner, 2021, Pharmacology). Every drug decision is the veterinarian's.

**Heat.** Llamas and alpacas come from the dry, thin air of the South American high plains and mountains, and are in danger of heat stress in humid US summers. Signs include nasal flaring, open-mouthed breathing and drooling: cool the animal, then call a veterinarian, and schedule outdoor work for cooler times of day (Gegner, 2000/2012, pp. 7, 8; Wiedner, 2021, Sedation). A llama's health benefits from shearing where summers are hot (Herbert et al., 2026).

**Meningeal worm.** Its natural host is the white-tailed deer, and it passes through snails and slugs. It causes neurological disease that can kill llamas and alpacas. Purdue's diagnostic laboratory calls it endemic in eastern North America, and a definitive diagnosis needs a necropsy (Durkes, 2008; Duncan, 2000; Gegner, p. 8). Prevention is keeping deer out and clearing the thick ground cover that shelters snails and slugs. Purdue's two laboratory newsletters contradict each other on the drug side, one more reason the drug plan belongs to your veterinarian.

**Bringing one into Indiana.** A camelid entering Indiana needs a certificate of veterinary inspection completed within the 30 days before entry, with exceptions for animals going directly to an approved livestock facility or to immediate slaughter. Official identification is required for exhibition, and no test or vaccination is required (BOAH, n.d.). Indiana accepts an official ear tag, a tattoo, ISO electronic identification or digital photographs for camelids that must be identified (345 IAC 1-2.6-8), and its premises-ID rule exempts a premises associated only with camelids (345 IAC 1-2.5-5(b)). Which Indiana entry rule applies to a yak, this course did not find; ask BOAH.

**Animal encounters.** Under the Animal Welfare Act, dealers and exhibitors need a license, but the rule exempts trade in animals "used only for the purposes of food, feathers, skin, or fiber," and people who keep a total of eight or fewer farm-type animals, such as llamas and alpacas, for exhibition and are not otherwise required to obtain a license (9 C.F.R. § 2.1(a)(3)(vi), (vii)). How this applies to a farm that charges for animal encounters is not answered by what this course read.

**Confined feeding.** Indiana's confined-feeding head counts name cattle, swine, sheep, fowl and horses; alpacas, llamas and yaks are not named (IC 13-11-2-40). Lesson 25 reads that law.

:::reveal Why is cattle feed dangerous to a llama or alpaca? ||| Many cattle feeds contain ionophores such as monensin, which are highly toxic to camelids.

:::reveal What animal is the natural host of meningeal worm, and what carries it to a llama? ||| The white-tailed deer; it passes through snails and slugs.

## Sources
- ${merck("\"Feeding\"; \"Pharmacology\"; \"Sedation\"")}
- ${ncat("Pages 7 and 8")}
- ${UMASS_LLAMA}
- ${DURKES}
- ${DUNCAN}
- ${BOAH_CAMELID}
- ${iac("345 Ind. Admin. Code 1-2.6-8; 1-2.5-5(b)", "345-IAC-1-2.6-8")}
- ${cfr9("2.1(a)(1), (a)(3)(vi), (vii)", "2.1")}
- ${ic("13-11-2-40", 13)}`,
    },
    {
      slug: "camelid-fiber-and-grading",
      title: "11 · Camelid fiber, and who grades it",
      section: S3,
      recallContent: [
        {
          prompt: "Why is every drug use in a llama or alpaca extralabel?",
          answer: "No drugs are approved for llamas and alpacas in the United States.",
        },
        {
          prompt: "What are the signs of heat stress in a llama or alpaca, and the first two steps?",
          answer: "Nasal flaring, open-mouthed breathing and drooling. Cool the animal, then call a veterinarian.",
        },
      ],
      body: `> **Before release:** needs a practitioner: an alpaca fiber classer or grader, to confirm the sorting and grading steps.

**Llama fiber.** A llama's coat is double: fine fiber mixed with stiff guard hairs, which must be removed before the 4- to 7-inch fiber is knitted or woven, though they can stay in for rugs and ropes (Gegner, 2000/2012, p. 4).

**Alpaca guard hair: two sources disagree.** UMass says "The itchy coarser guard hairs are processed separately from the finer underdown." Penn State Extension says alpaca fiber is "composed exclusively of fine hair with no coarse guard hair as in llamas" (UMass Extension, 2026b; Van Saun, 2025). This course could not settle the disagreement from the sources it read.

**How much.** An adult alpaca of about 150 pounds produces about 4 pounds of high-quality fiber, under 20 microns, and an equal amount of coarser fiber a year, and alpacas bred for fiber are generally shorn once a year. Only the highest grades, finer than 20 microns, command higher prices (UMass Extension, 2026b; Gegner, p. 4).

**Shearers are scarce here too.** Sheep shearers sometimes shear alpacas and llamas, ASI lists shearers by state, and a keeper with only a few animals may find a shearer harder to get. An alpaca must be dry to be shorn (UMass Extension, 2026b). A llama is not generally shorn in one piece: the fleece is separated by quality as it comes off. Leave at least an inch for weather and sunburn; a llama typically needs 3 inches of undercoat for winter (Herbert et al., 2026).

**Quality starts in the pasture.** Keep pastures free of burrs and weed seed, avoid sawdust and wood-chip bedding, and skirt to remove unwanted matter (Gegner, p. 9; Lehmkuhler, 2022-2024, infographic Choice 3).

**No federal grade.** No US federal grade standard for alpaca, llama or yak fiber was found. The USDA grades are sheep-wool grades (lesson 1), and federal law reaches camelid fiber through labeling: a label may name alpaca or llama in place of "wool" if the percentage is given (15 U.S.C. § 68(b); 16 C.F.R. § 300.18(a)). "Cashmere" on a label is reserved for the dehaired undercoat of the cashmere goat averaging no more than 19 microns (16 C.F.R. § 300.19(a)(1)). What these labeling rules mean for yak fiber is not confirmed in this course.

**A voluntary standard.** The AOA publishes a US standard of seven grades by micron span, from Grade 0 (15.0 to 16.9) to Grade 6 (32.0 to 34.9). It treats a standard deviation of 3 or less as uniform, and deliberately gives the grades no trade names such as "baby" or "royal" (AOA, 2021). The International Committee for Animal Recording (ICAR) proposes four fineness classes (under 20, 20 to 25, 25 to 30, and over 30 microns) plus color, length and medullation. The two schemes share only the 20-micron break (ICAR, 2017, Table 1, p. 8).

**Who grades.** With no federal grader, one documented route is a trained private grader. In a SARE-funded Missouri project, a producer who had attended Olds College in Alberta "for certification as an alpaca fiber classer and grader" graded 410 fleeces for 14 producers (Gibson, n.d.).

**Check the arithmetic.** The same project says grading the whole 96-ounce fleece instead of the blanket alone gives "an additional 60 percent" of usable fiber. Its own figures are 40.8 and 69.6 ounces: 69.6 minus 40.8 is 28.8, and 28.8 divided by 40.8 is about 71 percent. A report can be right about the method and loose with its own number.

**Every step costs.** "Each step the fiber takes away from the animal adds a cost to the final product": a producer chooses between selling raw fiber, cleaning it, and further preparation at home or at a mill (Lehmkuhler, 2022-2024, infographic).

:::reveal Which break do the AOA and ICAR alpaca schemes share? ||| Only the 20-micron break.

:::reveal Grading a 96-ounce fleece raised usable fiber from 40.8 to 69.6 ounces. What percent increase is that? ||| About 71 percent (28.8 divided by 40.8), not the 60 percent the report states.

## Sources
- ${ncat("Pages 4 and 9")}
- ${UMASS_SHEARING}
- ${UMASS_LLAMA}
- ${PSU_ALPACA}
- ${sareYak("Infographic, heading line and Choice 3")}
- ${USC_15_68}
- ${cfr16("300.18(a); § 300.19(a)(1)")}
- ${AOA}
- ${ICAR}
- ${GIBSON}`,
    },
    {
      slug: "the-yak",
      title: "12 · The yak: down, heat, and a herd near Arcadia",
      section: S3,
      recallContent: [
        {
          prompt: "What do UMass and Penn State disagree about?",
          answer: "Alpaca guard hair. UMass says coarser guard hairs are processed separately; Penn State says alpaca fiber has no coarse guard hair as in llamas.",
        },
        {
          prompt: "How many grades does the AOA's US alpaca fiber standard have, and what trade names does it use?",
          answer: "Seven grades, Grade 0 to Grade 6, by micron span. It deliberately uses no trade names such as \"baby\" or \"royal\".",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a veterinarian or extension specialist who works with yaks; and needs a practitioner: the Woolly Yak Ranch & Winery (task 326), to supply and confirm how yak fiber is harvested.

**Down and hair.** A yak grows coarse outer hair and a fine down. The down grows before winter and would be shed in early summer if not harvested (Wiener et al., 2003, ch. 6; Sapkota et al., 2022, § 1). In a study of 60 Plateau yak reported by FAO, down was concentrated on the shoulder, back and rump, where the proportion of down was 60.7 to 63.9, and scarce on the belly (6.9) and foreleg (5.7) (Wiener et al., 2003, Table 6.30).

**Combing.** Combing before shearing raises the down harvest. FAO reports about 10 percent more down, and one study in which the down share rose from about 50 percent with shearing to 61 percent with combing, a gain of 11 points (ch. 6).

**Age.** Down's share of the fleece falls with age, from nearly 70 percent in one-year-old males to under 20 percent at six in one study, and females start to lose fiber when lactation begins (ch. 6, Table 6.28). Yak hair felts poorly because its scales lie close to the shaft, and its lanolin content is low (ch. 6).

This course gives no micron figures for yak down. The online FAO chapter that holds them lost its micron symbol, and the course will not print a number whose unit it has not checked against a print copy.

**Value.** In its homeland, yak fiber earns herders little compared with milk and meat. The North American breeders FAO surveyed for its 2003 book raised yak mainly for lean meat, with fiber "valued especially in some smaller herds" (ch. 6; ch. 11).

**Built for cold.** Sweat was detected only on a yak's muzzle, and FAO reports breathing rising above about 13 °C and yaks standing still in shade or water at 20 °C (ch. 4; Sapkota et al., 2022, § 1). A temperature-humidity index threshold of 52 is reported for yak, against 72 for cattle; at 65 percent humidity, air over 13 °C crosses it (Sapkota et al., 2022, § 4). Indianapolis's normal July mean is about 24 °C and its annual mean 12 °C, and six months a year average above 13 °C (NCEI, 2021). FAO gives yak country a hottest-month average not above 13 °C and an annual mean below 5 °C (ch. 4). Yet FAO's survey found "a significant proportion of the herds" in seasonally hot, low-altitude places, where possible heat stress "was mentioned but did not amount to a problem" (ch. 11). Hold both facts.

**Copper.** The North American keepers in FAO's survey all provided mineral blocks, some mentioning copper, and the herd at Whipsnade had recurring copper deficiency (ch. 11). For camelids the warning runs the other way, toxicity (lesson 10). No amounts are taught here.

**In North America.** Yak were sent to Canada for trials in 1909 and 1921. FAO's 2003 book estimated around 90 herds in the USA and Canada with "perhaps 2000 animals," and noted that their genetic base "might well be small" (ch. 1; ch. 11). That is a 2003 estimate. Since a 2021 rule made on the International Yak Association's petition, federal rules define yak as an "exotic animal" eligible for voluntary inspection (FSIS, 2021; 9 C.F.R. § 352.1). US yak research is new: a 2022 SARE-funded Kentucky project said information on fiber yield, breeding and forage performance was lacking, and on 12 evaluation forms from its 2023 conference, fiber and meat were the main reasons given for owning or wanting to own yaks (Lehmkuhler, 2022-2024). Its leader said yak husbandry needs more standardized US information (Nielson, 2023).

**A herd near Arcadia.** The Woolly Yak Ranch & Winery, near Arcadia in Hamilton County, Indiana, says on its own website that it grazes "our yaks and Babydoll sheep in our pecan orchard," and that "We will be offering raw yak and sheep wool fiber" (Woolly Yak Ranch & Winery, n.d.). Those are the ranch's own statements. This course has not visited and asserts nothing else about it.

:::reveal Why does combing a yak before shearing matter? ||| It raises the down harvest: FAO reports about 10 percent more down, and one study found the down share rose from about 50 to 61 percent.

:::reveal What temperature-humidity index threshold is reported for yak, against cattle? ||| 52 for yak, against 72 for cattle. At 65 percent humidity, air over 13 °C crosses it.

## Sources
- ${fao("Chapters 1 and 4; chapter 6, \"Fibre production and hides\", Tables 6.28 and 6.30; chapter 11, Part 3")}
- ${SAPKOTA}
- ${NOAA}
- ${FSIS}
- ${cfr9("352.1", "352.1")}
- ${sareYak("Abstract; final report")}
- ${UKY}
- ${RANCH}`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Alpaca, llama and yak",
      section: S3,
      body: QUIZ_INTRO,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does the Merck Veterinary Manual say llamas and alpacas do if isolated?", options: ["They do poorly", "They graze more evenly", "They grow finer fiber", "They guard the herd better"], correctIndex: 0, explanation: "Merck says llamas and alpacas \"do poorly if isolated\". They are herd animals.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What does NCAT say about keeping a llama or alpaca alone?", options: ["It is fine for guard llamas", "It should never be done", "It is fine for one season", "It is required for males"], correctIndex: 1, explanation: "NCAT: llamas and alpacas \"should never be kept alone.\"", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "If a male llama or alpaca must be kept apart, what do the sources advise?", options: ["Keep it at least a mile away", "Keep it out of sight to calm it", "Keep it within sight of the others", "House it with the cattle"], correctIndex: 2, explanation: "A separated male should stay within sight of the others; even visual access reduces stress.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "Where do llamas and alpacas urinate and defecate?", options: ["Anywhere they graze", "Only inside the shelter", "Along the fence line only", "On communal dung piles"], correctIndex: 3, explanation: "Merck: camelids use communal dung piles and, unless forage is very limited, will not graze around them.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "Why do communal dung piles tend to limit internal parasites in camelids?", options: ["Camelids will not graze around them", "The piles heat up enough to kill the worms", "Deer avoid the dung piles", "Snails cannot cross the piles"], correctIndex: 0, explanation: "Unless forage becomes very limited, camelids will not graze around their dung piles, which tends to limit the spread of internal parasites.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What does UMass Extension report as a cause of alpaca injuries and deaths?", options: ["Barbed wire on the top strand", "The dog next door, or stray dogs", "Wet weather at shearing", "Guard llamas kicking them"], correctIndex: 1, explanation: "UMass reports alpaca injuries and deaths from the dog next door or stray dogs, which is why fencing is mainly about keeping predators out.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "Which predators does Merck name that guard llamas cannot successfully defend against?", options: ["Hawks, owls and eagles", "Snails, slugs and deer", "Dog packs, cougars and bears", "Bobcats, foxes and raccoons"], correctIndex: 2, explanation: "Merck notes that guard llamas \"cannot successfully defend against dog packs, cougars, or bears\".", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "In the 2019 Vallejo, California, case, how many alpacas were killed?", options: ["One", "Seven", "Twelve", "Three"], correctIndex: 3, explanation: "NBC Bay Area reported that three alpacas at a school's learning farm were mauled to death by a pair of neighborhood dogs.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "In the Vallejo case, how did the dogs reach the alpacas?", options: ["They dug under a fence", "They jumped a 5-foot fence", "A gate was left open", "They broke through barbed wire"], correctIndex: 0, explanation: "The two Huskies \"dug their way under a fence and went after the alpacas\".", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "Besides the alpacas, which animals did the Vallejo dogs attack, per NBC Bay Area?", options: ["The farm's two guard llamas", "Some sheep, and they went after goats", "A flock of chickens and ducks", "A horse in the next paddock"], correctIndex: 1, explanation: "The dogs attacked some sheep, tearing off an ear on one, and also went after two goats.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What fence height does Merck give for llamas?", options: ["1.2 m, about 47 inches", "0.9 m, about 35 inches", "1.5 m, about 59 inches", "2.4 m, about 94 inches"], correctIndex: 2, explanation: "Merck gives 1.5 m for llamas and 1.2 m for alpacas.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What fence does UMass recommend for alpacas?", options: ["A 3-foot barbed wire fence", "A single electric wire", "Cow fencing with large openings", "A 5-foot non-climb fence"], correctIndex: 3, explanation: "UMass recommends a 5-foot non-climb fence. Cow fencing with large openings can trap an alpaca's head.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "Why can cow fencing with large openings be a problem for alpacas?", options: ["It can trap an alpaca's head", "It lets the alpaca's fleece felt", "It is illegal for camelids", "It conducts heat in summer"], correctIndex: 0, explanation: "Cow fencing with large openings can trap an alpaca's head.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What do Merck and NCAT say about barbed wire for llamas and alpacas?", options: ["Required on the top strand", "Not needed, or not recommended", "Needed against dog packs", "Required by Indiana law"], correctIndex: 1, explanation: "Merck says barbed wire is not needed; NCAT says it is not recommended.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "How many alpacas per acre does NCAT give, depending on pasture quality?", options: ["One to two", "Twenty to 30", "Five to 10", "Three to five"], correctIndex: 2, explanation: "NCAT gives three to five llamas or five to 10 alpacas per acre; UMass gives six alpacas per acre.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What does UMass say alpaca shelter must be?", options: ["Heated through the winter", "Fully enclosed with doors", "Built of masonry", "Dry and out of the wind"], correctIndex: 3, explanation: "UMass says alpaca shelter need not be warm, only dry and out of the wind, and that alpacas can even be left out all winter.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What does NCAT say about heating and cooling for llama and alpaca shelter?", options: ["Needed depending on the climate", "Never needed for any camelid", "Required by Indiana law for camelids", "Only heating is ever needed, never cooling"], correctIndex: 0, explanation: "NCAT: \"Depending on the climate, heating and cooling measures are also necessary.\" UMass takes a lighter view, so the lesson teaches both.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What does Merck put at the base of an adult camelid's diet?", options: ["Alfalfa hay", "Grass hay", "Cattle feed", "Corn silage"], correctIndex: 1, explanation: "Grass hay is the base: most adults hold condition on 10 to 14 percent crude-protein grass hay.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What does Merck warn legumes may contribute to in camelids?", options: ["Copper toxicity", "Meningeal worm", "Obesity", "Heat stress"], correctIndex: 2, explanation: "Merck says legumes \"may contribute to obesity\". NCAT also says grass hays are better than alfalfa.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "How does huacaya fiber grow, compared with suri?", options: ["Parallel, in ringlets", "Only on the neck", "In a double coat with kemp", "Perpendicular to the body"], correctIndex: 3, explanation: "Huacaya fiber grows perpendicular to the body; suri fiber grows parallel, hanging in ringlets.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "What processable length does the AOA give for suri fiber?", options: ["2 to 7.5 inches", "2 to 5.5 inches", "4 to 7 inches", "1 to 2 inches"], correctIndex: 0, explanation: "The AOA gives 2 to 7.5 inches for suri and 2 to 5.5 inches for huacaya.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "Why can cattle feed kill a camelid?", options: ["It carries meningeal worm larvae from deer", "It may contain ionophores such as monensin", "It is too low in copper", "It contains scrapie prions"], correctIndex: 1, explanation: "Merck: ionophores such as monensin, \"found in many cattle feeds, are highly toxic to camelids\".", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Why is every drug use in a llama or alpaca extralabel?", options: ["Drugs are banned for food animals", "Vets may not treat camelids", "No drugs are approved for them in the US", "Camelids are exotic under FSIS"], correctIndex: 2, explanation: "Merck: no drugs are approved for llamas and alpacas in the United States, so all use is extralabel.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Why does drug withdrawal time matter for camelids in North America?", options: ["Their fiber absorbs drugs", "They are sold at sale barns", "FSIS requires a 30-day wait", "They can be food animals"], correctIndex: 3, explanation: "Because camelids in North America can be food animals, drug withdrawal time matters.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Why are llamas and alpacas at risk of heat stress in humid US summers?", options: ["They come from dry, thin mountain air", "They are fed too much alfalfa", "Their fleece is too fine", "Their dung piles ferment"], correctIndex: 0, explanation: "NCAT: llamas and alpacas come from the dry, thin air of the South American high plains and mountains.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Which is a sign of heat stress in a llama or alpaca?", options: ["Shivering in the shade", "Open-mouthed breathing", "Constant grazing at noon", "A swollen, hot hoof"], correctIndex: 1, explanation: "Signs include nasal flaring, open-mouthed breathing and drooling.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "What should a keeper do first for a camelid showing heat stress?", options: ["Shear it at once, then feed it", "Give it cattle feed for energy", "Cool it, then call a veterinarian", "Move it into a closed barn"], correctIndex: 2, explanation: "Cool the animal, then call a veterinarian, and schedule outdoor work for cooler times of day.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "When does UMass say a llama's health benefits from shearing?", options: ["Only before a show", "Every three years", "Only in the spring of birth", "Where summers are hot"], correctIndex: 3, explanation: "UMass: a llama's health benefits from shearing where summers are hot.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "What is the natural host of meningeal worm?", options: ["The white-tailed deer", "The domestic dog", "The house cat", "The wild turkey"], correctIndex: 0, explanation: "Meningeal worm's natural host is the white-tailed deer; it passes through snails and slugs.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "What does Purdue's diagnostic lab say about meningeal worm in eastern North America?", options: ["It has been eradicated", "It is endemic there", "It is found only in Canada", "It affects only sheep"], correctIndex: 1, explanation: "Purdue's Animal Disease Diagnostic Laboratory calls it endemic in eastern North America.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "What does a definitive diagnosis of meningeal worm need?", options: ["A blood test", "A fleece sample", "A necropsy", "A fecal float"], correctIndex: 2, explanation: "A definitive diagnosis of meningeal worm needs a necropsy.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Which prevention steps does lesson 10 give for meningeal worm?", options: ["Vaccinate the whole herd every spring", "Shear every animal before the first frost", "Feed cattle minerals to camelids", "Keep deer out; clear thick ground cover"], correctIndex: 3, explanation: "Prevention is keeping deer out and clearing the thick ground cover that shelters snails and slugs.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Why does lesson 10 leave the meningeal worm drug plan to the veterinarian?", options: ["Purdue's two lab newsletters contradict", "No dewormer is sold for any kind of livestock", "Indiana bans dewormers for camelids", "The drug kills the fiber"], correctIndex: 0, explanation: "Purdue's two laboratory newsletters contradict each other on the drug side, one more reason the plan is the veterinarian's.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "What does a camelid need to enter Indiana?", options: ["A negative test for meningeal worm first", "A vet certificate from the last 30 days", "A scrapie flock ID number", "A tuberculosis vaccination"], correctIndex: 1, explanation: "BOAH: a certificate of veterinary inspection completed within the 30 days before entry, with exceptions for direct-to-slaughter or an approved facility.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Which tests or vaccinations does Indiana require for a camelid entering the state?", options: ["A tuberculosis test", "A rabies vaccination", "None", "A scrapie test"], correctIndex: 2, explanation: "BOAH's camelid entry page says no test or vaccination is required.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Which identification does Indiana accept for camelids that must be identified?", options: ["Only a USDA metal ear tag in the left ear", "Only a hot-iron brand", "Only a scrapie flock ID", "Ear tag, tattoo, ISO chip or photographs"], correctIndex: 3, explanation: "345 IAC 1-2.6-8 accepts an official ear tag, a tattoo, ISO electronic identification or digital photographs.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "What does Indiana's premises-ID rule do for a premises with only camelids?", options: ["It exempts it", "It requires two IDs", "It requires a CFO permit", "It treats it as a sheep farm"], correctIndex: 0, explanation: "345 IAC 1-2.5-5(b) exempts a premises associated only with camelids.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Which trade does the Animal Welfare Act licensing rule exempt?", options: ["Any animal sold at a county or state fair", "Animals used only for food or fiber", "Any animal under 18 months old", "Any animal kept by a 4-H member"], correctIndex: 1, explanation: "9 CFR 2.1 exempts trade in animals \"used only for the purposes of food, feathers, skin, or fiber\".", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "How many farm-type animals may a person keep for exhibition and still be exempt from Animal Welfare Act licensing?", options: ["Twenty or fewer", "Two or fewer", "Eight or fewer", "Fifty or fewer"], correctIndex: 2, explanation: "The rule exempts people who keep a total of eight or fewer such animals, such as llamas and alpacas, for exhibition and are not otherwise required to be licensed.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Which animals do Indiana's confined-feeding head counts not name?", options: ["Cattle and swine", "Sheep and fowl", "Horses and sheep", "Alpacas, llamas and yaks"], correctIndex: 3, explanation: "IC 13-11-2-40 names cattle, swine, sheep, fowl and horses. Alpacas, llamas and yaks are not named.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "What does lesson 10 say about which Indiana entry rule applies to a yak?", options: ["The course did not find it", "The camelid rule applies", "The sheep rule applies", "No rule; yaks enter freely"], correctIndex: 0, explanation: "The course did not find which BOAH entry rule covers a yak; that is a question for BOAH.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "What must happen to a llama's guard hairs before its fiber is knitted or woven?", options: ["They must be dyed first", "They must be removed", "They are spun in with it", "They are felted into it"], correctIndex: 1, explanation: "NCAT: a llama's stiff guard hairs must be removed before the fiber is knitted or woven.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "For what can llama guard hairs stay in, per NCAT?", options: ["Fine knitted scarves", "Garments for babies", "Rugs and ropes", "Lace-weight sock yarn"], correctIndex: 2, explanation: "Guard hairs can stay in for rugs and ropes.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What do UMass and Penn State disagree about?", options: ["Whether alpacas need to be shorn every year", "How fine huacaya fiber is", "Whether llamas have guard hair", "Whether alpacas have coarse guard hair"], correctIndex: 3, explanation: "UMass says coarser guard hairs are processed separately; Penn State says alpaca fiber has no coarse guard hair as in llamas.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What does lesson 11 do with the UMass and Penn State disagreement?", options: ["Reports it as unsettled", "Sides with Penn State's view", "Sides with UMass", "Leaves it out entirely"], correctIndex: 0, explanation: "The course could not settle the disagreement from the sources it read, so it teaches both.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "About how much high-quality fiber does a 150-pound adult alpaca produce a year?", options: ["About 1 pound", "About 4 pounds", "About 15 pounds", "About 40 pounds"], correctIndex: 1, explanation: "About 4 pounds of high-quality fiber, under 20 microns, and an equal amount of coarser fiber.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "How often are alpacas bred for fiber generally shorn?", options: ["Twice a year", "Every three years", "Once a year", "Once a month in summer"], correctIndex: 2, explanation: "Alpacas bred for fiber are generally shorn once a year.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "Which alpaca grades command higher prices, per NCAT?", options: ["Those coarser than 30 microns", "Any grade of suri fiber", "Any fleece over 5 pounds", "Only those finer than 20 microns"], correctIndex: 3, explanation: "NCAT: only the highest grades, finer than 20 microns, command higher prices.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What must be true of an alpaca before it is shorn?", options: ["It must be dry", "It must be fasted", "It must be sedated", "It must be tagged"], correctIndex: 0, explanation: "UMass: an alpaca must be dry to be shorn, the same rule USDA gives for sheep.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "According to UMass, who may find an alpaca shearer harder to get?", options: ["A keeper with a large herd", "A keeper with only a few animals", "A keeper with suri alpacas", "A keeper outside New England"], correctIndex: 1, explanation: "Shearers are scarce, and a keeper with only a few animals may find one harder to get.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "How is a llama's fleece handled as it is shorn?", options: ["Kept in one piece, like a sheep's", "Rolled flesh side out and tied", "Separated by quality as it comes off", "Washed on the animal first"], correctIndex: 2, explanation: "A llama is not generally shorn in one piece: the fleece is separated by quality as it comes off.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What does lesson 11 say to keep pastures free of, for fiber quality?", options: ["White clover", "Dung piles", "Tall fescue grass", "Burrs and weed seed"], correctIndex: 3, explanation: "Keep pastures free of burrs and weed seed, and avoid sawdust and wood-chip bedding.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "Which bedding does lesson 11 say to avoid for fiber animals?", options: ["Sawdust and wood chips", "Clean wheat straw", "Rubber stall mats", "Washed river sand"], correctIndex: 0, explanation: "NCAT and the SARE infographic: avoid sawdust and wood-chip bedding.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "Is there a US federal grade standard for alpaca, llama or yak fiber?", options: ["Yes, the AMS wool grades", "None was found", "Yes, the AOA standard", "Yes, in 16 CFR part 300"], correctIndex: 1, explanation: "No federal grade standard for camelid or yak fiber was found. The AMS grades are for sheep wool, the AOA standard is voluntary, and 16 CFR 300 is labeling.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "How does federal law reach alpaca and llama fiber?", options: ["Through grading", "Through a fiber tax", "Through labeling", "Through FSIS inspection"], correctIndex: 2, explanation: "Federal law reaches camelid fiber through the Wool Products Labeling Act and 16 CFR part 300.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "When may a label name alpaca or llama in place of \"wool\"?", options: ["When it is under 5 percent", "Only if no sheep wool is present", "Only for imported yarn", "When the percentage is given"], correctIndex: 3, explanation: "16 CFR 300.18(a): a label may name alpaca or llama in place of wool if the percentage is given.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What is \"cashmere\" on a label reserved for?", options: ["Cashmere goat undercoat, 19 microns or less", "Any fine undercoat, including yak down", "Any alpaca fiber finer than 20 microns", "Any goat hair that is finer than 25 microns"], correctIndex: 0, explanation: "16 CFR 300.19(a)(1): the dehaired undercoat of the cashmere goat, averaging no more than 19 microns.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What does lesson 11 say about how the labeling rules apply to yak fiber?", options: ["Yak must be labeled cashmere", "It is not confirmed", "Yak is labeled as wool", "Yak may not be sold in the US"], correctIndex: 1, explanation: "What the labeling rules mean for yak fiber is not confirmed in this course.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "How many grades does the AOA's US alpaca fiber standard have?", options: ["Sixteen", "Four", "Seven", "Ten"], correctIndex: 2, explanation: "Seven grades by micron span, Grade 0 to Grade 6. Sixteen is the USDA wool standard; four is ICAR's.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "Which names does the AOA standard deliberately not give its grades?", options: ["Numbers such as Grade 0 to 6", "Micron spans for each grade", "Ranges for standard deviation", "Trade names such as baby or royal"], correctIndex: 3, explanation: "The AOA deliberately gives its grades no trade names such as \"baby\" or \"royal\".", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "How many fineness classes does ICAR's guideline propose for alpaca fiber?", options: ["Four", "Seven", "Sixteen", "Two"], correctIndex: 0, explanation: "ICAR proposes four classes: under 20, 20 to 25, 25 to 30, and over 30 microns, plus color, length and medullation.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "Which break do the AOA and ICAR alpaca schemes share?", options: ["The 25-micron break", "The 20-micron break", "The 30-micron break", "The 15-micron break"], correctIndex: 1, explanation: "The two schemes share only the 20-micron break.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "In the SARE Missouri project, how many fleeces did the trained grader grade?", options: ["96 fleeces for 4 producers", "14 fleeces for 410 producers", "410 fleeces for 14 producers", "1,804 fleeces for 99 producers"], correctIndex: 2, explanation: "A producer certified as an alpaca fiber classer and grader graded 410 fleeces for 14 producers.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "Where had the Missouri grader trained as an alpaca fiber classer and grader?", options: ["Purdue University, Indiana", "Penn State Extension", "The AOA in Kentucky", "Olds College, Alberta"], correctIndex: 3, explanation: "The producer had attended Olds College, Alberta, \"for certification as an alpaca fiber classer and grader\".", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "A SARE report says grading the whole fleece gave an additional 60 percent of usable fiber, from 40.8 to 69.6 ounces. What do those figures give?", options: ["About 71 percent", "About 41 percent", "About 29 percent", "About 96 percent"], correctIndex: 0, explanation: "69.6 minus 40.8 is 28.8, and 28.8 divided by 40.8 is about 71 percent, not 60.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What does the SARE yak fiber infographic say each step away from the animal adds?", options: ["Value that always exceeds its cost", "A cost to the final product", "A step the mill must do", "Fiber weight lost to grease"], correctIndex: 1, explanation: "\"Each step the fiber takes away from the animal adds a cost to the final product.\"", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What two kinds of fiber does a yak grow?", options: ["Wool and kemp, like Navajo-Churro", "Suri ringlets and huacaya crimp", "Coarse outer hair and a fine down", "Guard hair only, with no down"], correctIndex: 2, explanation: "FAO and Sapkota et al.: a yak grows coarse outer hair and a fine down.", sourceLessonSlug: "the-yak" },
          { prompt: "When does yak down grow, and when would it be shed?", options: ["Grows in spring; shed in late autumn", "Grows all year round and is never shed at all", "Grows in summer; shed in winter", "Grows before winter; shed in early summer"], correctIndex: 3, explanation: "The down grows before winter and would be shed in early summer if not harvested.", sourceLessonSlug: "the-yak" },
          { prompt: "In the study FAO reports, where on a yak was down most concentrated?", options: ["Shoulder, back and rump", "Belly and foreleg", "Neck and tail", "Head and lower legs"], correctIndex: 0, explanation: "Down was concentrated on the shoulder, back and rump (60.7 to 63.9) and scarce on the belly and foreleg.", sourceLessonSlug: "the-yak" },
          { prompt: "What does combing a yak before shearing do, per FAO?", options: ["Lowers the down harvest", "Raises the down harvest", "Removes all the outer hair", "Prevents heat stress"], correctIndex: 1, explanation: "Combing before shearing raises the down harvest: FAO reports about 10 percent more down.", sourceLessonSlug: "the-yak" },
          { prompt: "In one study FAO reports, the down share rose from about 50 percent with shearing to what with combing?", options: ["51 percent", "70 percent", "61 percent", "90 percent"], correctIndex: 2, explanation: "From about 50 percent with shearing to 61 percent with combing, a gain of 11 points.", sourceLessonSlug: "the-yak" },
          { prompt: "What happens to the down share of a yak's fleece as the animal ages, in one study?", options: ["It rises steadily, from 20 to 70 percent by six", "It stays near 50 percent", "It doubles after the first year", "It falls, from near 70 to under 20 percent"], correctIndex: 3, explanation: "Down's share falls from nearly 70 percent in one-year-old males to under 20 percent at six.", sourceLessonSlug: "the-yak" },
          { prompt: "When do female yaks start to lose fiber, per FAO?", options: ["When lactation begins", "At their first shearing", "After age ten", "Only in hot climates"], correctIndex: 0, explanation: "FAO: females start to lose fiber when lactation begins.", sourceLessonSlug: "the-yak" },
          { prompt: "Why does yak hair felt poorly?", options: ["It carries too much lanolin", "Its scales lie close to the shaft", "It is shorter than 1 inch", "It is always combed, not shorn"], correctIndex: 1, explanation: "Yak hair felts poorly because its scales lie close to the shaft; its lanolin content is low.", sourceLessonSlug: "the-yak" },
          { prompt: "What does FAO say about the lanolin content of yak fiber?", options: ["It is high", "It is twice wool's", "It is low", "It cannot be measured"], correctIndex: 2, explanation: "FAO reports a low grease, or lanolin, content in yak fiber.", sourceLessonSlug: "the-yak" },
          { prompt: "Why does this course give no micron figures for yak down?", options: ["No study anywhere has yet measured yak down fiber", "Yak down is not sold in the US", "The figures are under copyright", "The online FAO chapter lost its micron symbol"], correctIndex: 3, explanation: "The course will not print a number whose unit it has not checked against a print copy of FAO's chapter.", sourceLessonSlug: "the-yak" },
          { prompt: "In its homeland, how does yak fiber compare as income with milk and meat?", options: ["It earns herders little", "It earns the most", "It earns about the same", "It is never sold"], correctIndex: 0, explanation: "FAO: in its homeland, yak fiber earns herders little compared with milk and meat.", sourceLessonSlug: "the-yak" },
          { prompt: "Why did the North American breeders FAO surveyed mainly raise yak?", options: ["For down fiber", "For lean meat", "For milk", "For draft work"], correctIndex: 1, explanation: "They raised yak mainly for lean meat, with fiber \"valued especially in some smaller herds\".", sourceLessonSlug: "the-yak" },
          { prompt: "What temperature-humidity index threshold is reported for yak?", options: ["72", "13", "52", "65"], correctIndex: 2, explanation: "Sapkota et al. report 52 for yak against 72 for cattle; at 65 percent humidity, air over 13 °C crosses it.", sourceLessonSlug: "the-yak" },
          { prompt: "What is Indianapolis's normal July mean temperature, per NOAA?", options: ["About 13 °C", "About 5 °C", "About 35 °C", "About 24 °C"], correctIndex: 3, explanation: "NOAA's 1991 to 2020 normals put the July mean at about 24 °C, with an annual mean of 12 °C.", sourceLessonSlug: "the-yak" },
          { prompt: "What did FAO's survey respondents say about heat stress in hot, low-altitude yak herds?", options: ["Mentioned, but not a problem", "The main cause of herd losses", "A reason the herds were sold", "Never mentioned at all"], correctIndex: 0, explanation: "Possible heat stress \"was mentioned but did not amount to a problem\", though Indianapolis summers are far warmer than yak country.", sourceLessonSlug: "the-yak" },
          { prompt: "Which mineral concern does FAO record for yaks?", options: ["Selenium, with toxicity seen", "Copper, with deficiency seen", "Copper, with toxicity seen", "Salt, with excess seen"], correctIndex: 1, explanation: "The North American keepers all provided mineral blocks, some mentioning copper, and the Whipsnade herd had recurring copper deficiency. Toxicity is the camelid warning.", sourceLessonSlug: "the-yak" },
          { prompt: "What did FAO's 2003 book estimate for yak in the USA and Canada?", options: ["About 9 herds, perhaps 200 animals", "About 900 herds, 20,000 animals", "About 90 herds, perhaps 2000 animals", "About 90 herds, 99,538 animals"], correctIndex: 2, explanation: "FAO estimated around 90 herds with \"perhaps 2000 animals\". It is a 2003 estimate; 99,538 is the 2022 US alpaca count.", sourceLessonSlug: "the-yak" },
          { prompt: "Since a 2021 FSIS rule, how do federal rules define yak?", options: ["As cattle, under mandatory federal inspection", "As a camelid for labeling", "As other livestock in the census", "An exotic animal, inspected voluntarily"], correctIndex: 3, explanation: "Federal rules define yak as an \"exotic animal\" eligible for voluntary inspection (9 CFR 352.1).", sourceLessonSlug: "the-yak" },
          { prompt: "Whose petition led to the 2021 FSIS yak rule?", options: ["The International Yak Association", "The American Sheep Industry Association", "The Alpaca Owners Association", "The Livestock Conservancy"], correctIndex: 0, explanation: "The rule was made on the International Yak Association's petition.", sourceLessonSlug: "the-yak" },
          { prompt: "What did the 2022 Kentucky SARE yak project say was lacking?", options: ["Buyers for yak meat anywhere in Kentucky", "Data on fiber yield and breeding", "Any yaks in North America", "A federal yak grade standard"], correctIndex: 1, explanation: "The project said information on fiber yield, breeding and forage performance was lacking.", sourceLessonSlug: "the-yak" },
          { prompt: "On the 2023 Kentucky conference forms, what were the main reasons for owning or wanting yaks?", options: ["Milk and draft work", "Tourism and shows", "Fiber and meat", "Manure and hides"], correctIndex: 2, explanation: "On 12 evaluation forms, fiber and meat were the main reasons given.", sourceLessonSlug: "the-yak" },
          { prompt: "What does the Woolly Yak Ranch & Winery's website say it grazes in its pecan orchard?", options: ["Its alpacas and llamas", "Its goats and Angora rabbits", "Its cattle and bison", "Its yaks and Babydoll sheep"], correctIndex: 3, explanation: "The ranch's own website says it grazes \"our yaks and Babydoll sheep in our pecan orchard\".", sourceLessonSlug: "the-yak" },
          { prompt: "How does lesson 12 treat what the Woolly Yak Ranch says about itself?", options: ["As the ranch's own statements", "As facts the course verified", "As findings from a site visit", "As a USDA inspection record"], correctIndex: 0, explanation: "The course has not visited and asserts nothing about the ranch beyond its own statements.", sourceLessonSlug: "the-yak" },
          { prompt: "What does the ranch's website say about yak and sheep fiber?", options: ["It sells only finished yarn", "It will be offering raw fiber", "It sells no fiber of any kind", "It ships fiber to a federal grader"], correctIndex: 1, explanation: "The site says \"We will be offering raw yak and sheep wool fiber\", in the future tense.", sourceLessonSlug: "the-yak" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Fleece to yarn
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "shearing-day",
      title: "13 · Shearing day, from the keeper's side",
      section: S4,
      recallContent: [
        {
          prompt: "Why does this course give no micron figures for yak down?",
          answer: "The online FAO chapter that holds them lost its micron symbol, and the unit has not been checked against a print copy.",
        },
        {
          prompt: "What did FAO's 2003 book estimate for yak in the USA and Canada?",
          answer: "Around 90 herds with \"perhaps 2000 animals\", with a genetic base that \"might well be small\".",
        },
      ],
      body: `> **Before release:** needs a practitioner: a sheep shearer, to confirm how a keeper prepares for shearing day today.

This lesson does not teach shearing. It teaches what the keeper does around it, from USDA leaflets of 1933 and 1977 and from current industry and extension advice.

**Dry wool only.** USDA has told growers since at least 1933 to shear only when the wool is dry. Damp wool goes moldy, its fibers rot and weaken, and water stains it brown in a way no scouring removes (Buck, 1933, p. [1]; Agricultural Marketing Service, 1977, "Points to remember" 1). An alpaca, too, must be dry to be shorn (lesson 11).

**A clean floor.** Shear on a clean surface: a clean board floor, burlap or an old carpet (Buck, 1933, p. [1]). Because crews travel from flock to flock, ASI advises producers to provide their own shearing floors and equipment, or to require the crew to disinfect theirs (ASI, 2021, p. 22).

**No second cuts.** A second cut leaves short fibers that lower the fleece's value. The advice is the same for sheep in 1933 and 1977 and for alpacas today (Buck, 1933; Agricultural Marketing Service, 1977; UMass Extension, 2026b).

**Tag first.** Remove dung locks and stained wool before shearing, and bag them separately (Buck, 1933; Agricultural Marketing Service, 1977).

**Hire the shearer.** Extension advice to a beginner who wants to sell wool is to hire a shearer, because "a poorly sheared fleece will not be saleable" (Weisman & Vyas, 2021, p. 2).

**The tag and the shears.** For wool sheep the official ear tag goes in the left ear, out of the way of the shears (lesson 6), and shearing removes most adult keds (Pezzanite et al., 2009, p. 5).

:::reveal Why shear only dry wool? ||| Damp wool goes moldy, its fibers rot and weaken, and water stains it brown in a way no scouring removes.

:::reveal What is wrong with a second cut? ||| It leaves short fibers that lower the fleece's value.

## Sources
- ${BUCK}
- ${BULLETIN10}
- ${asiCare("Page 22")}
- ${UMASS_SHEARING}
- ${ufifas("Page 2")}
- ${as595("Page 5")}`,
    },
    {
      slug: "skirting-and-packing-a-fleece",
      title: "14 · Skirting and packing a fleece",
      section: S4,
      recallContent: [
        {
          prompt: "On what surfaces did USDA's 1933 leaflet say to shear?",
          answer: "A clean surface: a clean board floor, burlap or an old carpet.",
        },
        {
          prompt: "Why does UF/IFAS tell a beginner who wants to sell wool to hire a shearer?",
          answer: "Because \"a poorly sheared fleece will not be saleable\".",
        },
      ],
      body: `> **Before release:** needs a practitioner: a shepherd or fiber producer who skirts fleeces.

**What skirting is.** The federal standard defines a "skirted fleece" as one "from which the belly, britch, and stained portions have been removed" (AMS, 1968, § 31.201(o)). Belly wool is often uneven, short, stained and low-yielding, and britch wool is usually the coarsest on the body (American Wool Council, 2021, glossary; Ward & Flores, 2025, pp. 6, 7). A 1942 federal school text also told Navajo students to separate the belly from the main fleece, to help in grading (Boyce, 1942, p. 90).

**How.** UF/IFAS Extension describes laying the fleece cut side down on a screen or table and removing hay, fecal matter, matted ends and the fleece edge by hand; a framed half-inch screen on sawhorses will do (Weisman & Vyas, 2021, p. 2).

**How much.** The US wool industry's code says skirting should be light: remove only inferior wool and keep all good fleece wool with the fleece (American Wool Council, 2021, pp. 77, 78). The Sheep Safety and Quality Assurance manual says heavily soiled parts "should be removed (skirted) at shearing time to increase value" (Maneotis et al., 2016, p. 20).

**Rolling and tying.** A fleece is rolled flesh side out: the 1933 leaflet, the 1977 bulletin and the 2021 industry code all say so (Buck, 1933; Agricultural Marketing Service, 1977; American Wool Council, 2021, p. 78). The tying advice changed. In 1933 USDA said to tie each fleece separately with paper twine. In 1977 it still said paper twine, but allowed a fleece of only 4 to 6 months' growth to be packed untied. The 2021 code says uniform skirted fleeces need not be tied (Buck, 1933; Agricultural Marketing Service, 1977, PDF p. 9; American Wool Council, 2021, p. 78).

**What never touches wool.** Never tie wool with sisal, jute or hemp twine, or bag it in jute: stray plant fibers "will not take a wool dye" (Buck, 1933), and non-wool fibers mixed with wool "cannot be removed, resulting in defective yarn or fabric" (American Wool Council, 2021, § 4.5). The 1977 bulletin adds baling wire and polypropylene to the twines not to use. The 2021 code treats poly as its own contaminant, mostly "picked up off the ground when sheep lay down" (§ 4.4), and plastic baling twine is the most common source of it, a defect "costly to remove" once the wool is cloth (Maneotis et al., 2016, p. 21). If sheep are marked, use scourable branding fluid (Agricultural Marketing Service, 1977; Maneotis et al., 2016, p. 21).

**Keep hair sheep apart.** Hair fibers in wool can make it unusable (American Wool Council, 2021, p. 74).

:::reveal What does the federal standard say a skirted fleece has had removed? ||| The belly, britch, and stained portions.

:::reveal Why must jute, sisal and hemp twine never touch wool? ||| Stray plant fibers will not take a wool dye, and non-wool fibers mixed with wool cannot be removed, which makes defective yarn or fabric.

## Sources
- ${ams("§ 31.201(o), printed p. 6", 7)}
- ${woolCode("Glossary; §§ 4.4 and 4.5; printed pp. 74, 77 and 78 (PDF pp. 76, 79 and 80)")}
- ${nmsu("Pages 6 and 7")}
- ${boyce("Printed p. 90 (PDF p. 111)")}
- ${ufifas("Page 2")}
- ${SSQA}
- ${BUCK}
- ${BULLETIN10}`,
    },
    {
      slug: "scouring-carding-and-spinning",
      title: "15 · Scouring, carding, combing, and on to spinning",
      section: S4,
      recallContent: [
        {
          prompt: "How does the 2021 wool code say a fleece should be skirted: lightly or heavily?",
          answer: "Lightly: remove only inferior wool and keep all good fleece wool with the fleece.",
        },
        {
          prompt: "How is a fleece rolled, by all three USDA and industry sources?",
          answer: "Flesh side out.",
        },
      ],
      body: `> **Before release:** needs a practitioner: a hand spinner, to confirm the washing, carding and plying steps for a learner today.

**Why scour.** Raw wool's natural wax and grease keep dye out, so it is scoured first (Furry & Viemont, 1935, p. 5; AMS, 1968, § 31.201(m)). Stained wool will not scour white, so it comes off before washing (Bureau of Home Economics, 1933, p. 2; Ward & Flores, 2025, pp. 6, 7).

**USDA's 1933 home method.** A Bureau of Home Economics leaflet on preparing raw wool at home for bedding gives a stock soap of sal-soda and neutral soap; at least three suds and three rinses; the first suds about 120 °F; about 6 gallons of suds per pound of raw wool; and no stirring, squeezing or washing machine, "as this causes matting" (Bureau of Home Economics, 1933, pp. 1, 2). It warns that the soda "will harm the wool after the protective grease coating has been removed," and that raw wool loses 45 to 65 percent of its weight in scouring and carding (p. 1). Sudden changes in water temperature make wool shrink and turn harsh, and wet wool is never wrung or twisted (Furry & Viemont, 1935, p. 5; California State Parks, 2008, p. 4).

**Carding.** Carding straightens the washed wool and removes small bits of chaff. Hand cards are slow, and most carding is now done by machine (Bureau of Home Economics, 1933, p. 2; Weisman & Vyas, 2021, p. 3). Hand carding makes a small roll, a rolag; machine carding makes a continuous untwisted strand, called card sliver or roving (California State Parks, 2008, p. 5; AMS, 1968, § 31.201(r)). Dyed wool of different colors can be carded together to blend them (Furry & Viemont, 1935, p. 5).

**Combing.** Combing separates short fibers and tangles from the long fibers and lays the long ones parallel. Scoured wool combed to remove the short fibers, the noils, is "wool top" (AMS, 1968, § 31.201(h); American Wool Council, 2021, glossary).

**Spinning.** A drop spindle is a tapering rod with a disk-shaped whorl; turning it twists the fibers, and the yarn winds onto it (National Park Service, 2015). *Making String* lesson 11, "Spindle, whorl and twister", teaches the mechanics. The National Park Service dates the spread of the spinning wheel to "about 800 years ago"; that is the Park Service's statement, and the page gives no source for it.

**Plying.** Plying twists two or more spun strands together. Singles are often woven, and plied yarns are generally used for knitting and crocheting (California State Parks, 2008, p. 13). The principle behind it, each twist laid against the last, is *Making String* lessons 2 and 7. From there the yarn goes to *Crocheting*.

:::reveal What did the 1933 leaflet forbid while washing wool, and why? ||| Stirring, squeezing or a washing machine, "as this causes matting".

:::reveal What is wool top? ||| Scoured wool combed to remove the short fibers (noils), leaving the long fibers parallel.

## Sources
- ${furry("Page 5", 9)}
- ${ams("§ 31.201(h), (m) and (r), printed p. 6", 7)}
- ${bhe("Typed pp. 1 and 2, read from the page images")}
- ${nmsu("Pages 6 and 7")}
- ${sutter("Pages 4, 5 and 13 of 23")}
- ${ufifas("Page 3")}
- ${woolCode("Glossary")}
- ${NPS_SPINDLE}`,
    },
    {
      slug: "natural-dyeing-1935",
      title: "16 · Natural dyeing, from a 1935 USDA bulletin",
      section: S4,
      recallContent: [
        {
          prompt: "How much weight does the 1933 leaflet say raw wool loses in scouring and carding?",
          answer: "45 to 65 percent.",
        },
        {
          prompt: "What does hand carding make, and what does machine carding make?",
          answer: "Hand carding makes a rolag, a small roll. Machine carding makes card sliver or roving, a continuous untwisted strand.",
        },
      ],
      body: `> **Before release:** needs a practitioner: a natural dyer, to confirm the safety framing and how the 1935 steps read today.

*Home Dyeing with Natural Dyes*, USDA Miscellaneous Publication No. 230, December 1935, was written by Margaret S. Furry and Bess M. Viemont of the Bureau of Home Economics. It reports tests on about 65 natural dye materials (Furry & Viemont, 1935, title page and p. 1). It is a federal work, and the scan is free to read in full.

**Safety first.** The bulletin's chrome recipe uses potassium dichromate. The European Union's harmonized classification labels that chemical "May cause cancer" and "Fatal if inhaled" (National Library of Medicine, n.d.). This course names the recipe only as history and tells no one to use it. The scanned bulletin also carries the National Agricultural Library's warning not to assume it reflects current knowledge.

**Weigh first.** Every recipe is per pound of wool or cotton, weighed dry before mordanting (pp. 5, 7).

**Mordants.** A mordant helps fix the color to the fiber. The bulletin's mordants were alum, chrome (potassium dichromate), copperas and tannin (pp. 5, 6). One dye can give different colors with different mordants: cochineal gives red with alum and purple with chrome (p. 6).

**Fiber and pot.** In 1935 USDA found wool the easiest fiber to dye, and cotton harder (pp. 2, 6). Iron kettles darken colors and tin kettles make them harsh, so the bulletin used enamelware or copper (p. 4).

**Two results.** On alum-mordanted wool, 10 ounces of dry Yellow Globe onion skins per pound gave a burnt orange of fair fastness (p. 27). Beets, blueberries, turmeric, red roses and pokeweed are among the materials USDA left out because their colors were not fast (p. 8).

**Testing fastness, the 1935 way.** Frame a sample under cardboard with a 2-inch window, set it in the sun for a few days, and compare (p. 2).

**Indigo and green.** Indigo needs no mordant. It is a vat dye: the cloth comes out greenish yellow and turns blue in the air (pp. 20, 21). Green is made by top-dyeing a clear yellow with blue, or indigo with yellow (p. 33). For who carried indigo knowledge across the Atlantic, see *Training the Colonizer* lesson 8, "Indigo: the blue that needed African knowledge".

:::reveal What does cochineal give with alum, and with chrome? ||| Red with alum, purple with chrome.

:::reveal Why does this course tell no one to use the bulletin's chrome recipe? ||| It uses potassium dichromate, which the EU's harmonized classification labels "May cause cancer" and "Fatal if inhaled".

## Sources
- ${furry("Title page (PDF p. 3); printed pp. 1, 2, 4 to 8, 20, 21, 27 and 33 (printed p. N = PDF p. N+4)", 3)}
- ${PUBCHEM}`,
    },
    {
      slug: "the-micron-grades",
      title: "17 · The micron grades",
      section: S4,
      recallContent: [
        {
          prompt: "What is a mordant, and name two of the 1935 bulletin's.",
          answer: "A substance that helps fix the color to the fiber. The bulletin used alum, chrome, copperas and tannin.",
        },
        {
          prompt: "How did the 1935 bulletin test a dye's fastness to light?",
          answer: "It framed a sample under cardboard with a 2-inch window, set it in the sun for a few days, and compared.",
        },
      ],
      body: `**What the standard grades.** USDA grades wool by average fiber diameter in microns. A micron is 1/1000 millimeter, or 1/25,400 inch. There are 16 grades, from "Finer than grade 80's" (17.69 or less) to "Coarser than grade 36's" (40.21 or more) (AMS, 1968, §§ 31.1 to 31.16, § 31.201(k)). The standard took effect December 21, 1968.

| Grade | Average diameter, microns | Maximum standard deviation |
|---|---|---|
| Finer than 80's | 17.69 or less | 3.59 |
| 80's | 17.70 to 19.14 | 4.09 |
| 70's | 19.15 to 20.59 | 4.59 |
| 64's | 20.60 to 22.04 | 5.19 |
| 62's | 22.05 to 23.49 | 5.89 |
| 60's | 23.50 to 24.94 | 6.49 |
| 58's | 24.95 to 26.39 | 7.09 |
| 56's | 26.40 to 27.84 | 7.59 |
| 54's | 27.85 to 29.29 | 8.19 |
| 50's | 29.30 to 30.99 | 8.69 |
| 48's | 31.00 to 32.69 | 9.09 |
| 46's | 32.70 to 34.39 | 9.59 |
| 44's | 34.40 to 36.19 | 10.09 |
| 40's | 36.20 to 38.09 | 10.69 |
| 36's | 38.10 to 40.20 | 11.19 |
| Coarser than 36's | 40.21 or more | none stated |

**Grade is fineness only.** Length, crimp, strength, elasticity, luster, hand and color are "quality"; breed, origin and preparation are "type" (§ 31.201(f)(1)).

**Too variable drops a grade.** A wool whose standard deviation exceeds the maximum for its grade is reduced to the next coarser grade (§ 31.0). The standard's own example: a measured average of 27.25 microns is 56's with a standard deviation of 6.72, but 54's with 7.80 (§ 31.204(b)(1)).

**Measurement wins.** Grade can be judged by inspection, against samples representative of the standards, or by measuring fibers; if the two disagree, measurement prevails (§ 31.202). Measuring projects fiber sections at 500 times magnification and measures at least 400 to 2,600 fibers, more for coarser grades (§ 31.204).

**Where the standard lives now.** It left the Code of Federal Regulations in the 1990s. AMS had not graded wool under it "for sometime" and decided to drop it, then reinstated it after nine comments said contracts and price reports relied on it; AMS now keeps it outside the CFR (Agricultural Marketing Service, 1997, pp. 43430, 43432; 7 C.F.R. pt. 31). It still works at the border: Customs grades imported wool dutiable at a rate per clean kilogram by the Secretary of Agriculture's standards (19 C.F.R. § 151.76(a)).

**Where "64's" comes from.** New Mexico State University explains the numbers as spinning counts: the number of 560-yard hanks a pound of clean wool would spin, so grade 80's would make 80 × 560 = 44,800 yards (Ward & Flores, 2025, p. 2). That is NMSU's explanation; the AMS standard itself does not give it.

**Two exercises.**
1. The standard's own worked example measures an average of 24.93 microns with a standard deviation of 6.16 (§ 31.204(a)(12)). Using the table, find the grade.
2. NMSU's guide prints the lower bound of the 70's range as 9.15. Compare it with the table and name the error.

:::reveal What grade is a wool averaging 24.93 microns with a standard deviation of 6.16? ||| 60's. The average falls in 23.50 to 24.94, and 6.16 is under that grade's maximum of 6.49, so it does not drop.

:::reveal What is wrong with NMSU's 9.15 as the lower bound of grade 70's? ||| A digit is missing. The AMS standard gives 19.15 to 20.59 microns.

## Sources
- ${ams("§§ 31.0 to 31.16, printed pp. 1 and 2; § 31.201(f)(1) and (k), printed p. 6; § 31.202, printed p. 7; § 31.204, printed pp. 8 to 13", 2)}
- ${AMS_1997}
- ${CFR_7_31}
- ${CFR_19_151}
- ${nmsu("Page 2; Table 1")}`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Fleece to yarn",
      section: S4,
      body: QUIZ_INTRO,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "When does USDA advice say to shear sheep?", options: ["Only when the wool is dry", "Only right after a rain", "Only in the first week of May", "Only after the wool is washed"], correctIndex: 0, explanation: "USDA has told growers since at least 1933 to shear only when the wool is dry.", sourceLessonSlug: "shearing-day" },
          { prompt: "What happens to wool shorn damp, per USDA's 1933 and 1977 leaflets?", options: ["It shrinks a little but stays strong", "It goes moldy and its fibers weaken", "It grades two grades finer", "It scours white more easily"], correctIndex: 1, explanation: "Damp wool goes moldy, and its fibers rot and weaken.", sourceLessonSlug: "shearing-day" },
          { prompt: "What does water staining do to a fleece, per USDA?", options: ["Bleaches it white, which raises its price at sale", "Washes out with one cold rinse", "Stains it brown in a way no scouring removes", "Adds weight buyers pay more for"], correctIndex: 2, explanation: "Water stains wool brown in a way no scouring removes, one more reason to shear only dry wool.", sourceLessonSlug: "shearing-day" },
          { prompt: "On what surfaces does the 1933 USDA leaflet say to shear?", options: ["Bare ground in the pasture, so dirt falls away", "A gravel pad that drains water", "Fresh straw spread over the dirt", "A clean board floor, burlap or old carpet"], correctIndex: 3, explanation: "Leaflet No. 92: shear on a clean surface, such as a clean board floor, burlap or an old carpet.", sourceLessonSlug: "shearing-day" },
          { prompt: "Why does ASI tell producers to provide their own shearing floors or have the crew disinfect theirs?", options: ["Crews travel from flock to flock", "Floors must be USDA certified", "Shearers charge less on clean floors", "Indiana law requires a permit"], correctIndex: 0, explanation: "Shearing crews move from flock to flock, so ASI advises a producer's own floor and equipment, or a disinfected one.", sourceLessonSlug: "shearing-day" },
          { prompt: "What does a second cut do to a fleece?", options: ["Raises its grade by evening out the length", "Leaves short fibers that lower its value", "Removes keds that discolor it", "Makes it easier to skirt"], correctIndex: 1, explanation: "A second cut leaves short fibers that lower the fleece's value.", sourceLessonSlug: "shearing-day" },
          { prompt: "Which animals does lesson 13 say the second-cut advice covers?", options: ["Only Merino sheep", "Only yaks, which are combed", "Sheep then, and alpacas today", "Only llamas shorn in pieces"], correctIndex: 2, explanation: "The advice is the same for sheep in 1933 and 1977 and for alpacas today (UMass).", sourceLessonSlug: "shearing-day" },
          { prompt: "What does tagging, or crutching, before shearing remove?", options: ["The belly and britch wool", "All the guard hairs", "The official ear tag", "Dung locks and stained wool"], correctIndex: 3, explanation: "Tag or crutch first: remove dung locks and stained wool before shearing. Belly and britch come off later, in skirting.", sourceLessonSlug: "shearing-day" },
          { prompt: "What happens to the dung locks removed before shearing?", options: ["They are bagged separately", "They go in with the fleece", "They are tied in with paper twine", "They are spun with the wool"], correctIndex: 0, explanation: "USDA's leaflets say to bag dung locks and stained wool separately.", sourceLessonSlug: "shearing-day" },
          { prompt: "Why does UF/IFAS tell a beginner who wants to sell wool to hire a shearer?", options: ["Shearing your own sheep breaks Indiana law", "A poorly sheared fleece will not sell", "Hired shearers grade the wool too", "Hired shearers pay the checkoff"], correctIndex: 1, explanation: "UF/IFAS: \"a poorly sheared fleece will not be saleable\".", sourceLessonSlug: "shearing-day" },
          { prompt: "Which ear does a wool sheep's official tag go in, to stay clear of the shears?", options: ["The right ear", "Either ear", "The left ear", "The tail fold"], correctIndex: 2, explanation: "APHIS recommends the left ear for wool sheep, because metal tags can be struck by the shears.", sourceLessonSlug: "shearing-day" },
          { prompt: "What does shearing remove, besides the fleece, per Purdue?", options: ["All internal parasites", "Meningeal worm larvae", "Every sign of footrot", "Most adult keds"], correctIndex: 3, explanation: "Purdue: shearing removes most adult keds, the parasites that discolor wool.", sourceLessonSlug: "shearing-day" },
          { prompt: "What does lesson 13 say it does not teach?", options: ["How to shear", "How to keep wool dry", "Why to tag first", "Where to shear"], correctIndex: 0, explanation: "Lesson 13 teaches what the keeper does around shearing, not shearing itself.", sourceLessonSlug: "shearing-day" },
          { prompt: "Which years' USDA wool leaflets does lesson 13 compare with current advice?", options: ["1968 and 1997", "1933 and 1977", "1935 and 1942", "1909 and 1921"], correctIndex: 1, explanation: "Leaflet No. 92 (1933) and Marketing Bulletin No. 10 (rev. 1977), set beside ASI and extension advice.", sourceLessonSlug: "shearing-day" },
          { prompt: "How does the federal standard define a skirted fleece?", options: ["Washed once in warm water with soap and alkali", "Combed to remove short noils", "Belly, britch and stained parts removed", "Graded and sorted by micron"], correctIndex: 2, explanation: "§ 31.201(o): a skirted fleece is one \"from which the belly, britch, and stained portions have been removed\".", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Why is belly wool usually skirted off?", options: ["It is always the finest wool on the sheep", "It carries the official ear tag", "It holds the most lanolin", "It is often uneven, short and stained"], correctIndex: 3, explanation: "Belly wool is often uneven, short, stained and low-yielding.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What does lesson 14 say about britch wool?", options: ["It is usually the coarsest on the body", "It is usually the finest wool on the body", "It is the only wool worth selling", "It must be tied in with jute"], correctIndex: 0, explanation: "The industry code and NMSU say britch wool is usually the coarsest on the body.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Why did a 1942 federal school text tell Navajo students to separate the belly from the fleece?", options: ["To sell it as mutton", "To help in grading", "To feed it to the goats", "To use it for dye tests"], correctIndex: 1, explanation: "Boyce's 1942 primer told students to separate the belly from the main fleece, to help in grading.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "How does UF/IFAS describe laying out a fleece to skirt it?", options: ["Cut side up, spread on the bare ground", "Hung from a line in the sun", "Cut side down on a screen or table", "Rolled tight in a jute sack"], correctIndex: 2, explanation: "UF/IFAS: lay the fleece cut side down on a screen or table and skirt by hand.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What can serve as a skirting table, per UF/IFAS?", options: ["A sheet of plywood laid flat on bare ground", "A jute sack over a barrel", "A pallet wrapped in plastic", "A framed half-inch screen on sawhorses"], correctIndex: 3, explanation: "A framed half-inch screen on sawhorses will do.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What does UF/IFAS say to remove when skirting?", options: ["Hay, fecal matter, matted ends and edges", "All the crimp and luster", "The lanolin, by hand", "Every fiber that is finer than 20 microns"], correctIndex: 0, explanation: "Skirting removes hay, fecal matter, matted ends and the fleece edge by hand.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "How heavily does the 2021 US wool industry code say to skirt?", options: ["Heavily: half the fleece", "Lightly: only inferior wool", "Not at all for any sale", "Down to the blanket only"], correctIndex: 1, explanation: "The code says skirting should be light: remove only inferior wool and keep all good fleece wool with the fleece.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What does the SSQA manual say about heavily soiled parts of a fleece?", options: ["Leave them in so the fleece weighs more", "Scour them with the rest", "Skirt them at shearing to raise value", "Sell them as mohair"], correctIndex: 2, explanation: "SSQA: heavily soiled parts \"should be removed (skirted) at shearing time to increase value\".", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "How is a fleece rolled, by the 1933 leaflet, the 1977 bulletin and the 2021 code?", options: ["Tip side out", "Belly wool out", "Loosely, unrolled", "Flesh side out"], correctIndex: 3, explanation: "All three say a fleece is rolled flesh side out.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What did USDA's 1933 leaflet say to tie each fleece with?", options: ["Paper twine", "Sisal twine", "Baling wire", "Jute cord"], correctIndex: 0, explanation: "In 1933 USDA said to tie each fleece separately with paper twine. Sisal and jute must never touch wool.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Which fleeces did the 1977 bulletin allow to be packed untied?", options: ["Fleeces heavier than 10 pounds", "Fleeces of only 4 to 6 months' growth", "Every fleece from a hair sheep", "Fleeces bound for any mill inside the state"], correctIndex: 1, explanation: "The 1977 bulletin still said paper twine, but allowed a fleece of only 4 to 6 months' growth to be packed untied.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What does the 2021 code say about tying uniform skirted fleeces?", options: ["Tie them with paper twine", "Tie them with sisal twine", "They need not be tied", "Tie them in pairs"], correctIndex: 2, explanation: "The 2021 code says uniform skirted fleeces need not be tied.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Why must sisal, jute and hemp twine never touch wool?", options: ["They make the fleece too heavy", "They raise the grade unfairly", "They carry scrapie from flock to flock", "Plant fibers will not take a wool dye"], correctIndex: 3, explanation: "Stray plant fibers \"will not take a wool dye\" (1933), and non-wool fibers mixed with wool cannot be removed (2021).", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What does the 2021 code say happens to non-wool fibers mixed with wool?", options: ["They cannot be removed", "They wash out in scouring", "They are combed out as noils", "They burn off in dyeing"], correctIndex: 0, explanation: "Non-wool fibers \"cannot be removed, resulting in defective yarn or fabric\".", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Which ties does the 1977 bulletin add to the list not to use on wool?", options: ["Paper twine and cotton string", "Baling wire and polypropylene", "Only paper twine", "Only cotton string"], correctIndex: 1, explanation: "The 1977 bulletin adds baling wire and polypropylene to the twines not to use; paper twine was the recommended tie.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Where does the 2021 code say most poly contamination is picked up?", options: ["From shearers' plastic gloves", "From the scouring soap", "Off the ground where sheep lie", "From ear tag plastic"], correctIndex: 2, explanation: "The code says poly is mostly \"picked up off the ground when sheep lay down\".", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What does the SSQA manual call the most common source of poly in wool?", options: ["Plastic ear tags", "Plastic feed bags", "Plastic shearing boards", "Plastic baling twine"], correctIndex: 3, explanation: "SSQA: plastic baling twine is the most common source, a defect costly to remove once the wool is cloth.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What should be used if sheep are marked?", options: ["Scourable branding fluid", "Oil-based paint", "Tar", "Permanent marker ink"], correctIndex: 0, explanation: "The 1977 bulletin and the SSQA manual both call for scourable branding fluid.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Why are hair sheep kept apart from wool sheep?", options: ["Hair sheep carry scrapie", "Hair fibers can make wool unusable", "Wool sheep tend to bully the hair sheep", "Hair sheep need more feed"], correctIndex: 1, explanation: "The 2021 code: hair fibers in wool can make it unusable.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Why is raw wool scoured before dyeing?", options: ["Its fibers are too white to take any color", "Scouring raises its grade", "Its natural wax and grease keep dye out", "It must lose its crimp first"], correctIndex: 2, explanation: "The 1935 bulletin: raw wool's natural wax and grease keep the dye out, so it is scoured first.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "Why does stained wool come off before washing?", options: ["It uses up the soap meant for the rest of the fleece", "It weighs too much to wash", "It must be sold as mohair", "Stained wool will not scour white"], correctIndex: 3, explanation: "Stained wool will not scour white, so it is removed before washing.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What was the 1933 Bureau of Home Economics method for preparing raw wool meant for?", options: ["Bedding", "Commercial yarn", "Show fleeces", "Mill sales"], correctIndex: 0, explanation: "Mimeograph 478R is titled How to Prepare Raw Wool at Home for Bedding.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "How many suds and rinses does the 1933 leaflet call for, at least?", options: ["One suds and one rinse", "Three suds and three rinses", "Two suds and five rinses", "Six suds and no rinses"], correctIndex: 1, explanation: "At least three suds and three rinses, the first suds about 120 °F.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "How much suds per pound of raw wool did the 1933 leaflet call for?", options: ["About 1 gallon", "About 60 gallons", "About 6 gallons", "About half a gallon"], correctIndex: 2, explanation: "About 6 gallons of suds per pound of raw wool.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "Why did the 1933 leaflet forbid stirring, squeezing or a washing machine?", options: ["They waste soap", "They lower the grade", "They break the staple", "They cause matting"], correctIndex: 3, explanation: "No stirring, squeezing or washing machine, \"as this causes matting\".", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What did the 1933 leaflet warn the soda does once the grease coating is gone?", options: ["It harms the wool", "It sets the dye", "It whitens the wool", "It softens the wool"], correctIndex: 0, explanation: "The soda \"will harm the wool after the protective grease coating has been removed\".", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "How much weight does raw wool lose in scouring and carding, per the 1933 leaflet?", options: ["5 to 10 percent", "45 to 65 percent", "80 to 90 percent", "About 20 percent"], correctIndex: 1, explanation: "Raw wool loses 45 to 65 percent of its weight in scouring and carding (read from the page image).", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What makes wool shrink and turn harsh, per the 1935 bulletin?", options: ["Rinsing in soft rainwater", "Drying it flat in shade", "Sudden changes in water temperature", "Washing it gently with a neutral soap"], correctIndex: 2, explanation: "Sudden changes in water temperature make wool shrink and turn harsh; wet wool is never wrung or twisted.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What does carding do to washed wool?", options: ["Twists it into a single yarn", "Removes all its short fibers", "Dyes it an even color", "Straightens it and removes chaff"], correctIndex: 3, explanation: "Carding straightens the washed wool and removes small bits of chaff. Removing short fibers is combing.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What does hand carding make?", options: ["A rolag", "Wool top", "Card sliver", "A skein"], correctIndex: 0, explanation: "Hand carding makes a small roll, a rolag. Machine carding makes card sliver or roving.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What does machine carding make?", options: ["A rolag", "Card sliver or roving", "Plied yarn, ready to knit", "Noils"], correctIndex: 1, explanation: "Machine carding makes a continuous untwisted strand, card sliver or roving.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "How can dyed wool of different colors be blended, per the 1935 bulletin?", options: ["By boiling it together", "By plying it after spinning", "By carding it together", "By skirting it on a screen"], correctIndex: 2, explanation: "Dyed wool of different colors can be carded together to blend them.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What does combing do that carding does not?", options: ["Twists the fibers into a single strand of yarn", "Washes out the grease", "Adds color to the fibers", "Removes short fibers, lays long ones parallel"], correctIndex: 3, explanation: "Combing separates the short fibers and tangles from the long fibers and lays the long ones parallel.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What is scoured wool combed to remove its short fibers called?", options: ["Wool top", "Card sliver", "A rolag", "Grease wool"], correctIndex: 0, explanation: "§ 31.201(h): scoured wool combed to remove the short fibers, the noils, is wool top.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What does the National Park Service say a drop spindle is?", options: ["A wheel that is turned by a foot treadle", "A tapering rod with a disk-shaped whorl", "A comb with two rows of teeth", "A frame for stretching yarn"], correctIndex: 1, explanation: "A drop spindle is a tapering rod with a disk-shaped whorl; turning it twists the fibers and the yarn winds onto it.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "How does lesson 15 treat the National Park Service's dating of the spinning wheel to about 800 years ago?", options: ["It is a date the AMS standard confirms", "It comes from the 1935 USDA bulletin", "It is NPS's statement, with no source", "It was measured by radiocarbon"], correctIndex: 2, explanation: "That is the Park Service's statement, and its page gives no source for it.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "Which yarns does the Sutter's Fort handbook say are generally used for knitting and crocheting?", options: ["Singles", "Unspun roving", "Wool top", "Plied yarns"], correctIndex: 3, explanation: "Singles are often woven; plied yarns are generally used for knitting and crocheting.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "Which Making String lessons teach twist laid against twist?", options: ["Lessons 2 and 7", "Lessons 11 and 12", "Lessons 1 and 19", "Lessons 4 and 5"], correctIndex: 0, explanation: "Making String lessons 2 and 7 teach the principle behind plying; lesson 11 teaches the spindle.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "Who wrote Home Dyeing with Natural Dyes (1935)?", options: ["George Washington Carver, at Tuskegee", "Margaret S. Furry and Bess M. Viemont", "W. M. Buck of the USDA", "The AMS Livestock Division"], correctIndex: 1, explanation: "USDA Miscellaneous Publication 230 was written by Margaret S. Furry and Bess M. Viemont of the Bureau of Home Economics.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "Why does this course tell no one to use the 1935 bulletin's chrome recipe?", options: ["Chrome gives only dull and fugitive colors", "Chrome is not sold any more", "Potassium dichromate may cause cancer", "Chrome works only on cotton"], correctIndex: 2, explanation: "The recipe uses potassium dichromate, which the EU's harmonized classification labels \"May cause cancer\" and \"Fatal if inhaled\".", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "Which hazard labels does the EU's harmonized classification give potassium dichromate?", options: ["Mild irritant to skin", "Harmful to bees only", "No hazard classification", "May cause cancer; fatal if inhaled"], correctIndex: 3, explanation: "PubChem gives the EU classification \"May cause cancer\" and \"Fatal if inhaled\".", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "How are the 1935 bulletin's dye recipes measured?", options: ["Per pound of fiber weighed dry", "Per gallon of dye bath", "Per skein, wet or dry", "Per yard of finished cloth, after weaving"], correctIndex: 0, explanation: "Every recipe is per pound of wool or cotton, weighed dry before mordanting.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "What does a mordant do?", options: ["Removes the grease from wool", "Helps fix the color to the fiber", "Bleaches the fiber before dyeing", "Thickens the dye bath"], correctIndex: 1, explanation: "A mordant helps fix the color to the fiber.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "Which were the 1935 bulletin's mordants?", options: ["Salt, vinegar, soda and lye", "Indigo, cochineal and onion", "Alum, chrome, copperas and tannin", "Alum, borax, bleach and lime"], correctIndex: 2, explanation: "The bulletin's mordants were alum, chrome (potassium dichromate), copperas and tannin.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "What color does cochineal give with alum, per the 1935 bulletin?", options: ["Purple", "Green", "Brown", "Red"], correctIndex: 3, explanation: "Cochineal gives red with alum and purple with chrome: one dye, different colors.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "Which did USDA find easier to dye in 1935, wool or cotton?", options: ["Wool", "Cotton", "Neither; they were equal", "It did not test cotton"], correctIndex: 0, explanation: "In 1935 USDA found wool the easiest fiber to dye and cotton harder.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "Why did the 1935 bulletin avoid iron and tin kettles?", options: ["Both of them rust when left in a dye bath", "Iron darkens and tin makes colors harsh", "Both are too heavy to lift", "Both cost too much in 1935"], correctIndex: 1, explanation: "Iron kettles darken colors and tin kettles make them harsh, so the bulletin used enamelware or copper.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "What did 10 ounces of dry Yellow Globe onion skins per pound give on alum-mordanted wool?", options: ["A bright blue of good fastness", "A clear red of poor fastness", "A burnt orange of fair fastness", "A green that faded in a day"], correctIndex: 2, explanation: "The bulletin reports a burnt orange of fair fastness.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "How did the 1935 bulletin test a dye's fastness to light?", options: ["A sample boiled for an hour", "A sample washed with lye", "A sample rubbed hard against white cloth", "A sample in sun under a 2-inch window"], correctIndex: 3, explanation: "Frame a sample under cardboard with a 2-inch window, set it in the sun for a few days, and compare.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "Does indigo need a mordant, per the 1935 bulletin?", options: ["No; it is a vat dye", "Yes, alum only", "Yes, chrome only", "Yes, alum and tannin"], correctIndex: 0, explanation: "Indigo needs no mordant; it is a vat dye.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "What color does indigo-dyed cloth show as it comes out of the vat?", options: ["Deep red, then purple in air", "Greenish yellow, then blue in air", "Blue at once, then gray", "White, then green in sunlight"], correctIndex: 1, explanation: "The cloth comes out greenish yellow and turns blue in the air.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "How does the 1935 bulletin make green?", options: ["Mix alum with copperas", "Use onion skins with chrome", "Top-dye a yellow with blue", "Boil indigo with beets"], correctIndex: 2, explanation: "Green is made by top-dyeing a clear yellow with blue, or indigo with yellow.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "What does the USDA wool standard grade by?", options: ["Staple length in inches", "Fleece weight in pounds", "Breed and region where it was grown", "Average fiber diameter in microns"], correctIndex: 3, explanation: "USDA grades wool by average fiber diameter in microns, with a maximum standard deviation for each grade.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "What is a micron, as the standard defines it?", options: ["1/1000 millimeter", "One thousandth of an inch", "1/100 millimeter", "1/25 inch"], correctIndex: 0, explanation: "§ 31.201(k): a micron is 1/1000 millimeter, or 1/25,400 inch.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "When did the USDA wool grade standard take effect?", options: ["August 13, 1997", "December 21, 1968", "January 30, 2026", "December 4, 1995"], correctIndex: 1, explanation: "The standard's cover gives its effective date, December 21, 1968.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "What average diameter is grade 80's?", options: ["19.15 to 20.59 microns", "17.69 microns or less", "17.70 to 19.14 microns", "20.60 to 22.04 microns"], correctIndex: 2, explanation: "Grade 80's is 17.70 to 19.14 microns; 17.69 or less is finer than 80's, and 19.15 to 20.59 is 70's.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "What is the finest USDA wool grade called?", options: ["Grade 100's", "Grade 36's", "Superfine grade 90's and up", "Finer than grade 80's"], correctIndex: 3, explanation: "The 16 grades run from \"Finer than grade 80's\" (17.69 or less) to \"Coarser than grade 36's\".", sourceLessonSlug: "the-micron-grades" },
          { prompt: "What average diameter puts wool in the coarsest USDA grade?", options: ["40.21 microns or more", "17.69 microns or less", "38.10 to 40.20 microns", "32.70 microns or more"], correctIndex: 0, explanation: "Coarser than grade 36's is 40.21 microns or more; 38.10 to 40.20 is grade 36's itself.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "What does grade measure, under the standard's definition?", options: ["Fineness, length and crimp", "Fineness only", "Breed and origin", "Luster and color"], correctIndex: 1, explanation: "§ 31.201(f)(1): grade is a numerical designation of fineness. Length, crimp, luster and color are \"quality\"; breed and origin are \"type\".", sourceLessonSlug: "the-micron-grades" },
          { prompt: "Under the standard, what are length, crimp, strength, luster and color called?", options: ["Grade", "Type", "Quality", "Yield"], correctIndex: 2, explanation: "They are \"quality\"; breed, origin and preparation are \"type\"; grade is fineness only.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "Under the standard, what are breed, origin and preparation called?", options: ["Quality", "Grade", "Sort", "Type"], correctIndex: 3, explanation: "Breed, origin and preparation are \"type\".", sourceLessonSlug: "the-micron-grades" },
          { prompt: "What happens to a wool whose standard deviation exceeds its grade's maximum?", options: ["It drops to the next coarser grade", "It rises up to the next finer grade", "It is ungraded and sold as hair", "It keeps its grade but is noted"], correctIndex: 0, explanation: "§ 31.0: it is reduced to the next coarser grade.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "In the standard's own example, what grade is 27.25 microns with a standard deviation of 7.80?", options: ["56's", "54's", "58's", "50's"], correctIndex: 1, explanation: "27.25 falls in 56's, but 7.80 exceeds 56's maximum of 7.59, so it drops to 54's.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "What grade is a wool averaging 24.93 microns with a standard deviation of 6.16?", options: ["58's", "62's", "60's", "64's"], correctIndex: 2, explanation: "24.93 is in 60's (23.50 to 24.94), and 6.16 is under that grade's maximum of 6.49.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "If grading by inspection and by measurement disagree, which prevails?", options: ["Inspection", "The buyer's choice", "The finer of the two", "Measurement"], correctIndex: 3, explanation: "§ 31.202: both are official, but if they differ, the grade determined by measurement prevails.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "How many fibers does the standard require measuring, at least, depending on grade?", options: ["400 to 2,600", "10 to 100", "40 to 260", "4,000 to 26,000"], correctIndex: 0, explanation: "At least 400 fibers for the finest grades and 2,600 for 36's and coarser.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "Why did AMS reinstate the wool standards after deciding to drop them in the 1990s?", options: ["Congress passed a new law that required them", "Contracts and price reports relied on them", "Customs had no other way to tax wool", "Sheep breeders sued the agency"], correctIndex: 1, explanation: "Nine comments said contracts and price reports relied on the standards, so AMS reinstated them outside the CFR.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "Where does AMS keep the wool grade standard today?", options: ["In 7 CFR part 31", "In 16 CFR part 300", "Outside the CFR", "In the census report form"], correctIndex: 2, explanation: "AMS keeps the standard outside the CFR; 7 CFR part 31 covers wool sample purchases, and 16 CFR 300 is labeling.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "How does US Customs use the Secretary of Agriculture's wool standards?", options: ["To label alpaca blends sold at retail", "To test wool for scrapie at the border", "To set the price of the US wool clip", "To grade imported wool for duty"], correctIndex: 3, explanation: "19 CFR 151.76(a): imported wool dutiable at a rate per clean kilogram is graded by the Secretary of Agriculture's standards.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "How does NMSU explain where numbers like 64's come from?", options: ["Spinning counts of 560-yard hanks per pound", "The micron count of the finest fiber in the lot", "The year the breed was registered", "The number of sheep in a sample lot"], correctIndex: 0, explanation: "NMSU: the number of 560-yard hanks a pound of clean wool would spin. The AMS standard itself does not give this.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "By NMSU's spinning-count explanation, how many yards would a pound of 80's clean wool spin?", options: ["4,480 yards", "44,800 yards", "8,000 yards", "560 yards"], correctIndex: 1, explanation: "80 hanks of 560 yards each is 44,800 yards.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "What error does lesson 17 find in NMSU's 70's range?", options: ["A swapped range: 20.59 to 19.15", "A wrong unit: inches for microns", "A missing digit: 9.15 for 19.15", "A missing grade: no 70's at all"], correctIndex: 2, explanation: "NMSU prints the lower bound as 9.15; the AMS standard gives 19.15 to 20.59.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "Which wool does the 2021 industry code say skirting should keep with the fleece?", options: ["Only the belly wool", "Only the britch wool", "None; it is all sorted", "All good fleece wool"], correctIndex: 3, explanation: "Skirting should be light: remove only inferior wool and keep all good fleece wool with the fleece.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Manure and waste wool
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-the-manure-carries",
      title: "18 · What fiber-animal manure carries",
      section: S5,
      recallContent: [
        {
          prompt: "What does \"grade\" measure in the USDA wool standard, and what does it leave out?",
          answer: "Fineness: average fiber diameter and its variation. Length, crimp, strength, luster, hand and color are \"quality\"; breed, origin and preparation are \"type\".",
        },
        {
          prompt: "What happens to a wool whose standard deviation is too high for its grade?",
          answer: "It is reduced to the next coarser grade.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): an extension educator or a Master Gardener.

*Manure and Compost* lessons 3 and 4 read the federal manure tables for sheep. This lesson adds what that course left out, for sheep, alpacas and llamas.

**The one federal sheep.** The only sheep in the NRCS manure tables is the feeder lamb, and the handbook adds: "In some cases, bedding may be a significant component of sheep waste." (NRCS, 2008, p. 4-22). Its "as transferred" table has rows for beef, poultry, dairy, equine and swine, and none for sheep, alpacas, llamas or yaks (p. 4-24). The handbook has no table for alpacas, llamas or yaks at all.

**Ontario's averages.** Ontario's provincial lab averages do include alpacas and llamas. As applied (Brown, 2021, pp. 4, 8):

| Manure | Dry matter, % | Nitrogen, % | Phosphorus, % | Potassium, % | Samples |
|---|---|---|---|---|---|
| Alpaca | 27.1 | 0.66 | 0.40 | 0.23 | 11 |
| Llama | 34.9 | 0.75 | 0.35 | 0.25 | 16 |
| Sheep (composite) | 32.8 | 0.88 | 0.32 | 0.85 | 101 |

**Same data, other units.** The University of Maryland republishes the alpaca and llama figures with phosphorus and potassium as oxides: alpaca 0.66 N, 0.92 P2O5 and 0.28 K2O; llama 0.75, 0.80 and 0.30, "as-is basis" (University of Maryland Extension, 2018). The nitrogen matches and the other two do not, because the units differ. Check which units a table uses before comparing two of them.

**How old is a book value?** The alpaca and llama lab analyses, sample counts included, are the same in Ontario's 2013 and 2021 factsheets; only the nutrient-value columns, repriced at 2021 fertilizer costs, changed (Brown, 2013, 2021). A number in a table can be one lab, a dozen samples and a decade old. Ontario's own instruction: "There can be large variations between manures, therefore taking a sample at the time of application for analysis is your best guide to nutrient availability." (Brown, 2021, p. 1). *Manure and Compost* lesson 15 teaches the test.

**Two bases.** "As excreted" in the NRCS tables means fresh, in confinement; "as-is" in Ontario's means as applied, at the listed dry matter (NRCS, 2008, p. 4-5; Brown, 2021, p. 1). They cannot be compared directly. On a dry-matter basis, alpaca, llama and sheep manure carry about 2.4, 2.1 and 2.7 percent nitrogen. Check one: 0.66 divided by 0.271 is about 2.4.

**Dung piles and sales.** Camelids urinate and defecate on communal dung piles (lesson 9), and the census lists "Manure sold" among the products a farm may sell (lesson 3).

**What this lesson cannot tell you.** No source this course read says what pathogens sheep, alpaca or llama manure carries. Until one is read, handle it by *Manure and Compost* section 2's general rules and your extension office's advice.

:::reveal Which sheep does the NRCS manure handbook give numbers for? ||| Only the feeder lamb. It adds that bedding may be a significant component of sheep waste.

:::reveal Why do Maryland's alpaca phosphorus and potassium figures differ from Ontario's, when the data are the same? ||| Maryland gives them as oxides (P2O5 and K2O); Ontario gives the elements. Only nitrogen is in the same units.

## Sources
- ${nrcs651("Printed pp. 4-5, 4-22 and 4-24 (PDF pp. 13, 30 and 32)", 30)}
- ${ONTARIO}
- ${ONTARIO_2013}
- ${MARYLAND}`,
    },
    {
      slug: "waste-wool-in-the-garden",
      title: "19 · Waste wool in the garden: what the research shows, and what it does not",
      section: S5,
      recallContent: [
        {
          prompt: "What does Ontario say is your best guide to the nutrients in a manure?",
          answer: "Taking a sample at the time of application for analysis.",
        },
        {
          prompt: "About how much nitrogen do alpaca, llama and sheep manure carry on a dry-matter basis?",
          answer: "About 2.4, 2.1 and 2.7 percent.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): an extension educator or a Master Gardener.

Wool too short, dirty or coarse to sell has been tested as a slow fertilizer. The core papers are by Valtcho Zheljazkov and colleagues. They are paywalled, and this course read only their abstracts.

**Slow release.** Uncomposted wool and hair wastes "decompose slowly under field or greenhouse conditions, and act as a slow release S, N, P, and K fertilizer" (Zheljazkov, 2005, abstract). S, N, P and K are sulfur, nitrogen, phosphorus and potassium.

**In pots.** One addition of 20 to 120 g of waste wool gave four harvests of Swiss chard and five of basil, with total yields 2 to 5 times (chard) and 1.6 to 5 times (basil) those of unamended pots (Zheljazkov et al., 2009, abstract). The comparison is with pots that got nothing, not with pots given another fertilizer.

**In a field.** Waste wool raised foxglove yields 1.7 to 3.5 times over two seasons. After two seasons and several harvests, some of the wool and hair in the pot and field experiments "retained their original structure" and "were not fully decomposed" (Zheljazkov et al., 2008, abstract).

**The researchers' own limit.** More work was needed "to avoid nitrate leaching into the ground water" and on other environmental end points "before specific recommendations for growers are provided." The crops tested were basil, thorn apple, peppermint, garden sage, Swiss chard, pot marigold, valerian and foxglove, and the 2008 paper names "nonedible high-value plants" (Zheljazkov, 2005; Zheljazkov et al., 2008, 2009, abstracts).

**Newer open studies.** More is not better: in a 2025 soybean pot study, wool pellets at 4 percent of the mix cut plant length by 20 percent (Nohutçu & Merah, 2025, abstract). Wool laid as a mulch helped in soils with a higher water capacity, but in sandy soil straw mulch did better (Juhos et al., 2023, abstract). In a 2026 pot study, wool pellets held water that plants could use and delayed water stress under drought by at least five days compared with compost; the authors say field studies are still needed (MacKintosh et al., 2026, abstract).

**What this course will not suggest.** No source it read addresses dung locks, fecal matter or parasite eggs in raw wool. So it does not suggest working raw wool into a vegetable bed.

:::reveal What were the waste-wool pot yields compared with? ||| Unamended pots, which got nothing: not pots given another fertilizer.

:::reveal In the 2025 soybean study, what did wool pellets at 4 percent of the mix do? ||| They cut plant length by 20 percent: more is not better.

## Sources
- ${ZH2005}
- ${ZH2009}
- ${ZH2008}
- ${NOHUTCU}
- ${JUHOS}
- ${MACKINTOSH}`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Manure and waste wool",
      section: S5,
      body: QUIZ_INTRO,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which sheep is the only one in the NRCS manure tables?", options: ["The feeder lamb", "The breeding ewe", "The pastured wether", "The mature ram"], correctIndex: 0, explanation: "The only sheep in the NRCS tables is the feeder lamb (Table 4-13).", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What does the NRCS handbook add about sheep waste?", options: ["It is never worth spreading", "Bedding may be a significant part of it", "It carries more nitrogen than poultry", "It must be composted by law"], correctIndex: 1, explanation: "\"In some cases, bedding may be a significant component of sheep waste.\" (p. 4-22)", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Which animals have rows in the NRCS \"as transferred\" manure table?", options: ["Sheep, alpacas, llamas and yaks", "Only sheep and goats", "Beef, poultry, dairy, equine and swine", "Every animal in the census"], correctIndex: 2, explanation: "The table has rows for beef, poultry, dairy, equine and swine, and none for sheep, alpacas, llamas or yaks.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Does the NRCS handbook have a manure table for alpacas, llamas or yaks?", options: ["Yes, for all three", "Only for alpacas", "Only for yaks", "No, it has none"], correctIndex: 3, explanation: "The NRCS handbook has no table for alpacas, llamas or yaks; Ontario's lab averages do cover alpacas and llamas.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Whose lab averages does lesson 18 use for alpaca and llama manure?", options: ["Ontario's provincial averages", "The NRCS handbook's Table 4-13 rows", "Purdue's AY-277 tables", "The 2022 census tables"], correctIndex: 0, explanation: "Ontario's factsheet 21-077 prints lab averages for alpacas (11 samples) and llamas (16).", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What dry matter does Ontario give for alpaca manure, as applied?", options: ["34.9 percent", "27.1 percent", "32.8 percent", "0.66 percent"], correctIndex: 1, explanation: "Alpaca 27.1 percent dry matter; llama 34.9; sheep composite 32.8.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What nitrogen percentage does Ontario give for alpaca manure, as applied?", options: ["0.75 percent", "0.88 percent", "0.66 percent", "2.7 percent"], correctIndex: 2, explanation: "Alpaca 0.66 percent nitrogen as applied; llama 0.75; sheep composite 0.88.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "On how many samples does Ontario's llama manure average rest?", options: ["11", "101", "6", "16"], correctIndex: 3, explanation: "Llama 16 samples; alpaca 11; sheep composite 101.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Which manure in Ontario's table has the most potassium, as applied?", options: ["Sheep, at 0.85 percent", "Alpaca, at 0.23 percent", "Llama, at 0.25 percent", "Alpaca, at 0.85 percent"], correctIndex: 0, explanation: "Sheep composite 0.85 percent potassium, against 0.23 for alpaca and 0.25 for llama.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "How does Maryland report alpaca and llama phosphorus and potassium?", options: ["As elements, P and K, like Ontario", "As oxides, P2O5 and K2O", "As dry-matter totals", "As pounds per ton"], correctIndex: 1, explanation: "Maryland republishes the figures with phosphorus and potassium as oxides, on an as-is basis.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Why do Maryland's alpaca phosphorus figures differ from Ontario's?", options: ["Maryland tested its own herds", "Ontario's samples were older", "Different units for the same data", "Maryland measured dry matter"], correctIndex: 2, explanation: "The data are the same; Maryland gives oxides and Ontario gives elements. Check units before comparing.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Which nutrient matches between Maryland's and Ontario's alpaca figures?", options: ["Phosphorus", "Potassium", "Sulfur", "Nitrogen"], correctIndex: 3, explanation: "Nitrogen matches (0.66); phosphorus and potassium differ because Maryland uses oxides.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What changed between Ontario's 2013 and 2021 factsheets for alpaca and llama manure?", options: ["Only the nutrient-value prices", "The lab analyses and sample counts", "The number of samples, from 11 to 16", "Nothing at all"], correctIndex: 0, explanation: "The lab analyses and sample counts are the same; only the nutrient-value columns, repriced at 2021 fertilizer costs, changed.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What does lesson 18 say a book value for manure can be?", options: ["Always current to the latest season", "One lab, a dozen samples and a decade old", "An average of every farm in the state", "A legal limit for spreading"], correctIndex: 1, explanation: "A number in a table can be one lab, a dozen samples and a decade old, which is why Ontario says to test.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What does Ontario call your best guide to a manure's nutrients?", options: ["The table average for the species", "The animal's feed label", "A sample taken at application", "The NRCS as-excreted row"], correctIndex: 2, explanation: "\"Taking a sample at the time of application for analysis is your best guide to nutrient availability.\"", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What does \"as excreted\" mean in the NRCS tables?", options: ["As applied to the field", "After a year of composting", "Dried to zero moisture", "Fresh, in confinement"], correctIndex: 3, explanation: "NRCS \"as excreted\" is fresh manure, in confinement; Ontario's \"as-is\" is as applied.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What does \"as-is\" mean in Ontario's manure table?", options: ["As applied, at the listed dry matter", "Fresh from the animal, before any storage", "Composted for 90 days", "Dried and ground"], correctIndex: 0, explanation: "\"As-is\" is as applied, at the listed dry matter, so it cannot be compared directly with NRCS \"as excreted\".", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "About how much nitrogen does alpaca manure carry on a dry-matter basis?", options: ["About 0.66 percent", "About 2.4 percent", "About 27.1 percent", "About 0.24 percent"], correctIndex: 1, explanation: "0.66 divided by 0.271 is about 2.4 percent. 0.66 is the as-applied figure.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Which of the three manures carries the most nitrogen on a dry-matter basis?", options: ["Alpaca, about 2.4 percent", "Llama, about 2.1 percent", "Sheep, about 2.7 percent", "Llama, about 2.7 percent"], correctIndex: 2, explanation: "On a dry-matter basis: sheep about 2.7, alpaca about 2.4, llama about 2.1 percent nitrogen.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "What pathogen source for sheep, alpaca or llama manure did this course read?", options: ["A CDC fact sheet", "An APHIS manure rule", "Purdue's AS-595-W", "None"], correctIndex: 3, explanation: "No source this course read says what pathogens these manures carry, so the lesson says so plainly.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Until a pathogen source is read, how does lesson 18 say to handle fiber-animal manure?", options: ["General rules and your extension office", "The AMS wool standard's skirting section", "The census report form", "A shearer's advice"], correctIndex: 0, explanation: "Handle it by Manure and Compost section 2's general rules and your extension office's advice.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Who wrote the core studies on waste wool as a fertilizer?", options: ["George Washington Carver", "Valtcho Zheljazkov and colleagues", "Margaret Furry and Bess Viemont", "The NRCS handbook team"], correctIndex: 1, explanation: "The three core papers (2005, 2008, 2009) are by Zheljazkov and colleagues.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "How much of the Zheljazkov papers did this course read?", options: ["The full texts", "None of them", "Abstracts only", "Only the tables"], correctIndex: 2, explanation: "The papers are paywalled, and the course read only their abstracts.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "How do uncomposted wool and hair wastes act in soil, per Zheljazkov (2005)?", options: ["As a fast-acting nitrogen fertilizer that burns", "As a weed killer that sterilizes soil", "As a lime that raises soil pH", "As a slow-release S, N, P and K fertilizer"], correctIndex: 3, explanation: "They \"decompose slowly under field or greenhouse conditions, and act as a slow release S, N, P, and K fertilizer\".", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "What do S, N, P and K stand for in Zheljazkov's abstract?", options: ["Sulfur, nitrogen, phosphorus, potassium", "Sodium, nitrogen, phosphorus and potash", "Salt, nitrate, phosphate, kalium", "Silica, neon, protein, keratin"], correctIndex: 0, explanation: "S, N, P and K are sulfur, nitrogen, phosphorus and potassium.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "In the 2009 pot study, how many harvests did one addition of waste wool give for basil?", options: ["Three", "Five", "One", "Eight"], correctIndex: 1, explanation: "Four harvests of Swiss chard and five of basil from one addition.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "In the 2009 pot study, total chard yields were how many times those of unamended pots?", options: ["1.6 to 5 times", "10 to 20 times", "2 to 5 times", "Half as much"], correctIndex: 2, explanation: "Chard 2 to 5 times and basil 1.6 to 5 times those of unamended pots.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "What were the 2009 pot yields compared with?", options: ["Pots given chemical fertilizer", "Pots given composted manure", "Pots given wool pellets", "Pots that got nothing"], correctIndex: 3, explanation: "The comparison is with unamended pots, not with pots given another fertilizer.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "How much waste wool did each pot get in the 2009 study?", options: ["20 to 120 g, added once", "2 to 12 g, added weekly", "1 to 2 kg, added once", "200 to 1,200 g, added yearly"], correctIndex: 0, explanation: "One addition of 20 to 120 g of waste wool.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "By how much did waste wool raise foxglove yields in the field over two seasons?", options: ["2 to 5 times", "1.7 to 3.5 times", "By 10 to 20 percent only", "Not at all"], correctIndex: 1, explanation: "The 2008 abstract reports foxglove yields 1.7 to 3.5 times higher over two seasons.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "What did some wool and hair look like after two seasons, per the 2008 abstract?", options: ["Gone without a trace", "Turned to pure nitrate", "Not fully decomposed", "Dyed by the soil"], correctIndex: 2, explanation: "Some of the wool and hair \"retained their original structure\" and \"were not fully decomposed\".", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "What did the researchers say was still needed before recommending waste wool to growers?", options: ["A federal grade for waste wool", "A new census code for wool waste", "Approval from the AMS", "Work on nitrate leaching"], correctIndex: 3, explanation: "More work was needed \"to avoid nitrate leaching into the ground water\" and on other environmental end points.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "Which plants does the 2008 paper name as its target?", options: ["Nonedible high-value plants", "Edible leafy greens", "Field corn and soybeans", "Pasture grasses for sheep"], correctIndex: 0, explanation: "The 2008 paper names \"nonedible high-value plants\".", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "Which of these crops was tested in the Zheljazkov studies?", options: ["Tomato", "Foxglove", "Sweet corn", "Lettuce"], correctIndex: 1, explanation: "The crops were basil, thorn apple, peppermint, garden sage, Swiss chard, pot marigold, valerian and foxglove.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "In a 2025 soybean pot study, what did wool pellets at 4 percent of the mix do?", options: ["Doubled the soybean yield", "Had no effect at all", "Cut plant length by 20 percent", "Raised salt stress by half"], correctIndex: 2, explanation: "Nohutçu and Merah report plant length cut by 20 percent at 4 percent pellets.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "What lesson does lesson 19 draw from the 2025 soybean study?", options: ["Wool cures salt stress", "Wool replaces compost", "Pellets beat raw wool", "More is not better"], correctIndex: 3, explanation: "At 4 percent of the mix, wool pellets cut plant length: more is not better.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "In which soil did straw mulch do better than wool mulch, per Juhos et al.?", options: ["Sandy soil", "Clay soil", "Peat soil", "Loam with high water capacity"], correctIndex: 0, explanation: "Wool mulch helped in soils with a higher water capacity; in sandy soil straw did better.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "In the 2026 pot study, how long did wool pellets delay drought stress compared with compost?", options: ["At least five weeks", "At least five days", "About one hour", "No delay at all"], correctIndex: 1, explanation: "MacKintosh et al. report at least five days' delay compared with compost.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "What do the 2026 wool-pellet study's authors say is still needed?", options: ["Pot studies", "A federal rule", "Field studies", "Nothing more"], correctIndex: 2, explanation: "The authors say field studies are still needed.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "Why does this course not suggest working raw wool into a vegetable bed?", options: ["Raw wool is illegal to use in a home garden", "Raw wool raises soil pH too far", "Raw wool attracts deer and snails", "No source covers dung or parasites in it"], correctIndex: 3, explanation: "No source it read addresses dung locks, fecal matter or parasite eggs in raw wool.", sourceLessonSlug: "waste-wool-in-the-garden" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: A history the records keep
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-reduction-in-the-federal-record",
      title: "20 · The Navajo livestock reduction, in the federal record",
      section: S6,
      recallContent: [
        {
          prompt: "What did Zheljazkov's 2005 abstract say uncomposted wool and hair wastes do in soil?",
          answer: "They \"decompose slowly under field or greenhouse conditions, and act as a slow release S, N, P, and K fertilizer\".",
        },
        {
          prompt: "Why does this course not suggest working raw wool into a vegetable bed?",
          answer: "No source it read addresses dung locks, fecal matter or parasite eggs in raw wool.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a historian of the Navajo livestock reduction, ideally a Diné scholar.

In the 1930s the federal government cut the number of sheep, goats and other livestock on the Navajo Reservation. This lesson reads what the government's own records say, and lesson 21 reads the voices those records carry. They are one side's documents, and that matters for every number below.

**Who and when.** The records tie the reduction to the administration of John Collier, Commissioner of Indian Affairs. A Soil Conservation Service report says Collier asked early in 1933 for an investigation of erosion on the reservation (Soil Conservation Service, 1940, p. 2), and in 1937 Collier reported to the Senate on "the total reduction across the last four years" (Office of Indian Affairs, 1937b, p. 13). The Mexican Springs Experiment Station was set up by an agreement of July 14, 1933, drawn up "With permission of the Navajo Tribal Council" (Soil Conservation Service, 1940, p. 2).

**The count.** By the Bureau of Animal Industry's dipping records, Navajo sheep units fell from 1,013,606 in 1933 to 801,406 in 1935 and 724,336 in 1936, about 28.5 percent in three years (U.S. Department of the Interior, 1936, p. 180; 1937, p. 213). A "sheep unit" counted grown sheep, rams and goats as one each and lambs and kids at two for one grown animal, and did not count cattle or horses. Other federal statements of the same years used larger totals, so any number depends on which count is meant (U.S. Department of the Interior, 1936, p. 180; Office of Indian Affairs, 1936, p. 15).

**Mostly goats, at first.** In 1936 the Indian Office's newsletter, in a bracketed note to its unsigned summary of Collier's Senate testimony, said the 1933 to 1935 net reduction was "principally made up of goats." In 1937 it said natural increase had left Navajo flocks "only 23,000 less sheep and 150,000 less goats than before reduction" (Office of Indian Affairs, 1936, p. 15; 1937b, p. 13).

**The range.** In 1937 Collier presented Soil Conservation Service figures putting the range at "some 900,000 sheep-units," which was 340,000 more than the conservative estimate of its capacity: a capacity of about 560,000 (Office of Indian Affairs, 1937b, p. 13).

**Paid, and enforced.** Collier said in 1937 that the reduction across four years, "for all of which the Navajos were paid," had been 350,000 sheep units (Office of Indian Affairs, 1937b, p. 13). That is the Commissioner's statement. This course found no prices paid in any record it read, and accounts of animals shot or left to die come from later secondary works it has not read, so it settles neither question. In December 1941 "every Navajo stockman on the Reservation was required by law to reduce his holdings to 350 sheep units" (Boyce, 1942, p. 106). The Interior Department reported in 1939 that "individual resistances" were "important and stubborn enough to call for the invocation of legal authority," and that the federal district court had supported it, without naming the case (U.S. Department of the Interior, 1939, p. 43).

**Tangled with a vote.** The Navajo voted down the Indian Reorganization Act in 1935. Collier wrote that a shift of 210 votes would have reversed the result, and that many had voted against it believing they were voting against stock reduction (Office of Indian Affairs, 1935, pp. 46, 47; 1937b, p. 13). *Tribal Nations and Indigenous Governance* lesson 8, "Allotment, and the Indian Reorganization Act of 1934", explains that Act.

:::reveal By the dipping records, how far did Navajo sheep units fall from 1933 to 1936? ||| From 1,013,606 to 724,336, about 28.5 percent in three years.

:::reveal How did a "sheep unit" count lambs and kids? ||| At two for one grown animal. Grown sheep, rams and goats counted as one each; cattle and horses were not counted.

## Sources
- ${scs("Printed p. 2 (PDF p. 7)")}
- ${iaw("(1935, July 15). A letter to the Navajo Tribe from Commissioner Collier.", "2(23), printed pp. 46 and 47 (PDF pp. 50 and 51)", "indiansat223193515unit")}
- ${iaw("(1936, June 15). The Senate hearing on Navajo boundaries.", "3(21), printed p. 15 (PDF p. 19)", "indiansatwor321193615unit")}
- ${iaw("(1937b, July 1). Senate sub-committee holds hearings on Navajo affairs.", "4(22), printed p. 13 (PDF p. 17)", "indiansatwork42219371unit")}
- ${interior(1936, "Printed p. 180 (PDF p. 202)", "annualreportofse00unit_6")}
- ${interior(1937, "Printed p. 213 (PDF p. 247)", "annualreportofse00unit_7")}
- ${interior(1939, "Printed p. 43 (PDF p. 75)", "annualreportofse00unit_9")}
- ${boyce("Printed p. 106 (PDF p. 129)")}`,
    },
    {
      slug: "navajo-voices-and-federal-framing",
      title: "21 · Navajo voices, and how the government framed them",
      section: S6,
      recallContent: [
        {
          prompt: "Who administered the reduction, according to the federal records?",
          answer: "John Collier, Commissioner of Indian Affairs.",
        },
        {
          prompt: "What holding limit did the law set for every Navajo stockman in December 1941?",
          answer: "350 sheep units.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a historian of the Navajo livestock reduction, ideally a Diné scholar.

**Navajo voices disagreed.** A delegation led by Jacob C. Morgan told a Senate subcommittee in June 1937 that it opposed "the sheep reduction program" and that range damage was "only temporary." Council delegate Dogol-Chee-Bikis told the subcommittee "Nobody on the reservation favors the reduction," but called it "the medicine of reduction" the range required (Office of Indian Affairs, 1937b, p. 13; 1937c, p. 40). Both statements reach us only through a government newsletter's summary. This course could not find the Senate hearing record itself.

**A critique, summarized by the government.** A 1937 critique, as the Indian Office's own newsletter summarized it, faulted early reductions for "the use of a percentage basis" that worked "hardship on the small owners" and left "the large owners practically unscathed" (Office of Indian Affairs, 1937a, pp. 43, 44). Collier himself wrote of "three arduous 'horizontal' reduction campaigns" (1937c, p. 3).

**Who wrote the rules.** Collier described the 1937 grazing regulations as "the product of the Navajo Council's grazing committee" (1937c, p. 3).

**An official's second thoughts.** J. M. Stewart, who signed as Director of Lands, wrote in 1938 that the Indian Office "did not have the facts fully developed" when it first pressed reduction. He also wrote that "it is said" some Navajo parents disciplined children by intimating that Collier "might appear on the scene" (Stewart, 1938, p. 17).

**The government's framing.** A 1942 federal school text told Navajo students that the program had been "bitterly opposed by some members of the tribe" and that "The Navajo people may well be proud of this achievement" (Boyce, 1942, p. 107). Read it beside the testimony above. It is the government's own account, written for Navajo students.

**What the records do not say.** No 1930s record this course read uses the word "Churro." The story that the reduction, or the breeding program in lesson 22, nearly destroyed the Navajo-Churro breed is told in later sources the course could not check, so it is not taught here as fact. The most important missing piece is the Senate hearing record, with the Navajo testimony in full.

:::reveal How do the 1937 Navajo statements to the Senate subcommittee reach us? ||| Only through a government newsletter's summary, Indians at Work. The hearing record itself was not found.

:::reveal Does any 1930s record this course read use the word "Churro"? ||| No. The link between the reduction and the Navajo-Churro breed rests on later sources the course could not check.

## Sources
- ${iaw("(1937a, April 15). New study of Navajo situation issued.", "4(17), printed pp. 43 and 44 (PDF pp. 47 and 48)", "indiansatwor417193715unit")}
- ${iaw("(1937b, July 1). Senate sub-committee holds hearings on Navajo affairs.", "4(22), printed p. 13 (PDF p. 17)", "indiansatwork42219371unit")}
- ${iaw("(1937c, July 15 to August 1). Collier, J., editorial; Navajo Tribal Council sends delegates to testify.", "4(23 to 24), printed pp. 3 and 40 (PDF pp. 9 and 46)", "indiansat423241937151unit")}
- ${STEWART}
- ${boyce("Printed p. 107 (PDF p. 130)")}`,
    },
    {
      slug: "the-sheep-themselves",
      title: "22 · The sheep themselves: a breeding program, Navajo-Churro, Gulf Coast Native",
      section: S6,
      recallContent: [
        {
          prompt: "What did council delegate Dogol-Chee-Bikis tell the Senate subcommittee in 1937?",
          answer: "\"Nobody on the reservation favors the reduction,\" though he called it \"the medicine of reduction\" the range required.",
        },
        {
          prompt: "How did the 1942 school text frame the reduction for Navajo students?",
          answer: "It said the program had been \"bitterly opposed by some members of the tribe\" and that the Navajo people \"may well be proud of this achievement\".",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a historian of the Navajo livestock reduction, ideally a Diné scholar, and a heritage-breed shepherd.

**A new sheep, by design.** A 1935 appropriation funded a sheep-breeding laboratory on the Navajo Reservation "to build up a breed of sheep adapted to Navajo climatic conditions, whose wool will be suited to the making of Navajo rugs and at the same time will be salable on the open market" (U.S. Department of the Interior, 1935, p. 126). The 1937 report gives the object of the Southwestern Range and Sheep-Breeding Laboratory at Wingate, New Mexico, as "a strain of sheep with a type of wool suitable for Navajo handicraft" that "also will produce more mutton than existing Navajo sheep." Wingate employed a Navajo weaver to test its wool grades for rugs, and in 1937 held 1,342 sheep, 629 of them ewes (U.S. Department of the Interior, 1937, p. 214). No record this course read says the 1935 laboratory and Wingate are the same, so they are cited separately.

**At Mexican Springs.** The fenced area's carrying capacity was estimated at 1,854 sheep units, against a former 3,700. The 1940 report says "500 are now purebred Rambouillets, and 500 are mixedbred Navajo sheep," and that the station expected "the ordinary Navajo sheep will be vastly improved over their present type" (Soil Conservation Service, 1940, pp. 5, 6).

**In the classroom.** The 1942 school text taught Navajo students that factories paid more for uniform wool than for "mixed-breed Navajo wool," and asked them to compare "long-haired Navajo wool" with "shorter-haired Rambouillet type wool" for shrinkage, and with shorter-haired wool for hand spinning (Boyce, 1942, p. 90).

**The sheep today.** The Livestock Conservancy says Navajo-Churro sheep are known to the Diné as Dibé dits'ozí, "long fleeced sheep" (The Livestock Conservancy, n.d.), and the breed is on its Critical list (lesson 8). The National Park Service keeps a flock of Churro sheep at Hubbell Trading Post (National Park Service, 2025). In 2005 an Agricultural Research Service scientist had 1,200 Navajo-Churro semen samples from 27 rams, toward a goal of 6,000 units (Elstein, 2005).

**Gulf Coast Native.** Gulf Coast Native sheep have two genetically distinct lines, Florida Native and Louisiana Native. A 2012 open-access study found the two lines farther apart (a genetic distance, FST, of 6.2 percent) than the average for closely related southern European breeds (4.2 percent), about 50 percent higher, and "sufficiently different to be considered separate breeds" (Kijas et al., 2012). The breed has adapted to an environment of high parasite loads (Kijas et al., 2012, Introduction). At the Agricultural Research Service center in Booneville, Arkansas, where Gulf Coast Natives are part of a crossbreeding program and the flock was gathered from 1994, the breed "fulfills two of Brown's three requirements: an ability to take the heat and unusually high resistance to parasite infestation" (Hays, 1996).

**Where it came from is not settled.** The 2012 study says the breed "is considered to have descended from the Spanish Churra," with no citation, and the 1996 article says its roots are "believed" to lie perhaps in Merino and Rambouillet sheep (Kijas et al., 2012; Hays, 1996). Treat any link to the Churro as a possibility only.

:::reveal What was the 1935 sheep-breeding laboratory meant to produce? ||| A breed adapted to Navajo climatic conditions, whose wool would suit Navajo rugs and also sell on the open market.

:::reveal Do the sources agree on where Gulf Coast Native sheep came from? ||| No. One says Spanish Churra, with no citation; another says perhaps Merino and Rambouillet. The origin is not settled.

## Sources
- ${interior(1935, "Printed p. 126 (PDF p. 136)", "annualreportofse00unit_5")}
- ${interior(1937, "Printed p. 214 (PDF p. 248)", "annualreportofse00unit_7")}
- ${scs("Printed pp. 5 and 6 (PDF pp. 13 and 15)")}
- ${boyce("Printed p. 90 (PDF p. 111)")}
- ${TLC_CHURRO}
- ${NPS_HUBBELL}
- ${ELSTEIN}
- ${KIJAS}
- ${HAYS}`,
    },
    {
      slug: "black-shepherds-and-what-is-missing",
      title: "23 · Black shepherds in the record, and what this course could not find",
      section: S6,
      recallContent: [
        {
          prompt: "What breeds made up the Mexican Springs demonstration flock in the 1940 report?",
          answer: "500 purebred Rambouillets and 500 mixedbred Navajo sheep.",
        },
        {
          prompt: "What do the Diné call Navajo-Churro sheep, according to The Livestock Conservancy?",
          answer: "Dibé dits'ozí, \"long fleeced sheep\".",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a historian of slavery and Southern agriculture.

**Shepherds who were enslaved.** In the 1930s the Federal Writers' Project interviewed formerly enslaved people, and several described herding sheep (Federal Writers' Project, 1941). The spellings below are the interviewers' transcriptions, quoted as printed:
- John Wells herded "five hundred head of sheep" in Texas (Vol. II, Arkansas pt. 7).
- William Moore spent most of his time "bein' a shepherd boy" (Vol. XVI, Texas pt. 3).
- Carey Davenport was "a sheep minder" (Vol. XVI, Texas pt. 1).
- Felix Haywood was "a sheep herder and cowpuncher" before and during the Civil War (Vol. XVI, Texas pt. 2).
- Henri Necaise "tended de sheep an' cows" (Vol. IX, Mississippi).

**The wool chain, under slavery.** Nicey Kinney, interviewed in Georgia, described sitting on the sheep's head while the wool was cut. The wool went to a factory to be carded; the children spun the thread, and her mother and the mistress wove the cloth (Vol. IV, Georgia pt. 3). That is the chain of section 4 and *Making String*, from shearing to cloth, done by enslaved people.

**What this course could not find.**
- **After 1865.** Nothing reliable on Black shepherds, in the West or the South, or on sheep programs at the 1890 land-grant universities. No NASS table this course fetched breaks sheep out by the race of the farmer. A 2024 cultural history of American sheep has a chapter on "Shepherds Enslaved and Free" (Bannor, 2024, ch. 4); this course has not read it.
- **The 1937 Senate record,** with Navajo testimony in full (lesson 21).
- **Prices and enforcement.** The prices paid for Navajo livestock, and which court case the 1939 report means (lesson 20).
- **Gulf Coast Native's past.** Its origin (lesson 22), and its role in Southern wool before the Second World War, which a 2017 Mississippi House resolution asserts without a source (Mississippi Legislature, 2017).

Saying what is missing is part of the history. Each gap is a place where a learner with library access could add to what this course knows.

:::reveal What did Nicey Kinney describe doing at shearing time? ||| Sitting on the sheep's head while the wool was cut. The children spun the thread and her mother and the mistress wove the cloth.

:::reveal What did this course find on Black shepherds after 1865? ||| Nothing reliable. The next reading is an unread 2024 book chapter, "Shepherds Enslaved and Free".

## Sources
- ${WPA}
- ${BANNOR}
- ${MS_HR62}`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · A history the records keep",
      section: S6,
      body: QUIZ_INTRO,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which Commissioner of Indian Affairs do the federal records tie the Navajo livestock reduction to?", options: ["John Collier", "J. M. Stewart", "G. A. Boyce", "Jacob C. Morgan"], correctIndex: 0, explanation: "The records tie the reduction to Commissioner John Collier's administration. Stewart was Director of Lands, Boyce wrote the 1942 primer, and Morgan led a Navajo delegation.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "When did Collier ask for an investigation of erosion on the Navajo Reservation, per the 1940 SCS report?", options: ["Late in 1941", "Early in 1933", "During the summer of 1937", "In 1909"], correctIndex: 1, explanation: "The Soil Conservation Service report says Collier asked early in 1933 for an investigation of erosion.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "How was the 1933 Mexican Springs agreement drawn up, per the SCS report?", options: ["By a direct order of the Senate subcommittee", "At the request of a Purdue scientist", "With permission of the Navajo Tribal Council", "Without any tribal involvement"], correctIndex: 2, explanation: "The agreement of July 14, 1933, was drawn up \"With permission of the Navajo Tribal Council\".", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "By the dipping records, how many Navajo sheep units were there in 1933?", options: ["724,336", "801,406", "350,000", "1,013,606"], correctIndex: 3, explanation: "1,013,606 in 1933, 801,406 in 1935, and 724,336 in 1936.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "By the dipping records, how many Navajo sheep units were there in 1936?", options: ["724,336", "1,013,606", "801,406", "560,000"], correctIndex: 0, explanation: "The count fell to 724,336 in 1936, about 28.5 percent below 1933.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "About how far did Navajo sheep units fall from 1933 to 1936, by the dipping records?", options: ["About 50 percent", "About 28.5 percent", "About 14 percent", "About 99 percent"], correctIndex: 1, explanation: "From 1,013,606 to 724,336 is about 28.5 percent in three years.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "Whose dipping records give the 1933 to 1936 Navajo sheep-unit counts?", options: ["The Soil Conservation Service", "The Census of Agriculture", "The Bureau of Animal Industry", "The Office of Indian Affairs"], correctIndex: 2, explanation: "The Interior Department's annual reports give the Bureau of Animal Industry's dipping records.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "How did a \"sheep unit\" in the dipping records count a grown goat?", options: ["As half of a grown sheep, by weight", "As two grown sheep", "It did not count goats", "As one, the same as a grown sheep"], correctIndex: 3, explanation: "Grown sheep, rams and goats counted as one sheep unit each.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "How did a \"sheep unit\" count lambs and kids?", options: ["Two of them as one grown animal", "Each one as a full sheep unit", "Not at all until weaned", "Five of them as one grown animal"], correctIndex: 0, explanation: "Lambs and kids counted at two for one grown animal.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "Which animals did the sheep-unit count in the dipping records leave out?", options: ["Goats and kids", "Cattle and horses", "Rams and ewes", "Lambs under a year"], correctIndex: 1, explanation: "The sheep-unit count did not count cattle or horses.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "Why does lesson 20 say any reduction number depends on which count is meant?", options: ["The Navajo kept no records", "The census counted every Navajo sheep twice over", "Federal statements used different totals", "Prices changed each year"], correctIndex: 2, explanation: "Other federal statements of the same years used larger totals than the dipping records, so a lesson names its count and never mixes them.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "What did a 1936 Indian Office note say the 1933 to 1935 net reduction was principally made up of?", options: ["Horses", "Cattle", "Rams", "Goats"], correctIndex: 3, explanation: "The bracketed note said the net reduction was \"principally made up of goats.\"", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "By 1937, what did the Indian Office newsletter say natural increase had left Navajo flocks?", options: ["23,000 less sheep and 150,000 less goats", "150,000 less sheep and 23,000 less goats", "No change in sheep or goats", "Twice the sheep and half the goats"], correctIndex: 0, explanation: "\"only 23,000 less sheep and 150,000 less goats than before reduction\".", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "What range capacity did the 1937 Soil Conservation Service figures imply?", options: ["About 900,000 sheep units", "About 560,000 sheep units", "About 1,013,606 sheep units", "About 350,000 sheep units"], correctIndex: 1, explanation: "Some 900,000 sheep units on the range was 340,000 more than its estimated capacity, so the capacity was about 560,000.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "How many sheep units did the 1937 SCS figures say the Navajo range carried?", options: ["Some 560,000", "Some 340,000", "Some 900,000", "Some 1,265,000"], correctIndex: 2, explanation: "Collier presented SCS figures putting the range at \"some 900,000 sheep-units\".", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "What did Collier say in 1937 about payment for the reduced livestock?", options: ["The Navajos were paid for none of it", "Only cattle owners were paid", "Payment would come after 1941", "The Navajos were paid for all of it"], correctIndex: 3, explanation: "Collier said the reduction across four years, \"for all of which the Navajos were paid,\" had been 350,000 sheep units.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "How does lesson 20 treat Collier's statement that the Navajos were paid?", options: ["As the Commissioner's statement", "As proven by the prices paid", "As a finding of the Senate", "As the tribal council's own view"], correctIndex: 0, explanation: "It is the Commissioner's statement; the course found no prices paid in any record it read.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "What does lesson 20 say about accounts of animals shot or left to die?", options: ["They are disproved outright by the federal records", "They come from secondary works it has not read", "They come from the 1937 Senate record", "They appear in the 1942 school text"], correctIndex: 1, explanation: "Those accounts come from later secondary works the course has not read, so it settles neither question.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "What holding limit did the law set for every Navajo stockman in December 1941?", options: ["35 sheep units", "1,000 sheep units", "350 sheep units", "600 sheep units"], correctIndex: 2, explanation: "Boyce's 1942 primer: every Navajo stockman was required by law to reduce his holdings to 350 sheep units.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "What did the Interior Department report in 1939 about resistance to the reduction?", options: ["It had stopped completely by early 1937, after talks", "The Senate ended the whole program because of it", "No resistance was ever recorded", "Legal authority was used, and a court supported it"], correctIndex: 3, explanation: "\"Individual resistances\" called for \"the invocation of legal authority,\" and the federal district court supported it.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "Which court case does the 1939 Interior report name?", options: ["None; it names no case", "County of Lake v. Pahl", "A Navajo Tribal Court case", "A Senate case from 1937"], correctIndex: 0, explanation: "The report does not name the case, which is on the course's list of gaps.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "In which year did the Navajo vote down the Indian Reorganization Act?", options: ["1934", "1935", "1937", "1941"], correctIndex: 1, explanation: "The Navajo voted the Act down in 1935.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "A shift of how many votes did Collier say would have reversed the 1935 Navajo vote on the Indian Reorganization Act?", options: ["21 votes", "2,100 votes", "210 votes", "350 votes"], correctIndex: 2, explanation: "Collier wrote that a shift of 210 votes would have reversed the result.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "Why did Collier say many Navajo voted against the Indian Reorganization Act?", options: ["They opposed the tribal council's grazing rules", "They wanted the Act's land allotments ended", "They were not allowed to vote on it", "They believed it was a vote against reduction"], correctIndex: 3, explanation: "Collier wrote that many voted against it believing they were voting against stock reduction.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "Which lesson of Tribal Nations and Indigenous Governance explains the Indian Reorganization Act?", options: ["Lesson 8", "Lesson 12", "Lesson 2", "Lesson 17"], correctIndex: 0, explanation: "Lesson 8, \"Allotment, and the Indian Reorganization Act of 1934\".", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "Who led the Navajo delegation that told a Senate subcommittee in June 1937 it opposed the sheep reduction program?", options: ["John Collier", "Jacob C. Morgan", "Dogol-Chee-Bikis", "J. M. Stewart"], correctIndex: 1, explanation: "A delegation led by Jacob C. Morgan opposed \"the sheep reduction program\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What did Morgan's delegation say about the range damage?", options: ["It was permanent", "It was caused by cattle", "It was only temporary", "It had never happened"], correctIndex: 2, explanation: "The delegation said range damage was \"only temporary\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What did council delegate Dogol-Chee-Bikis tell the subcommittee about the reservation's view of reduction?", options: ["Most families supported it", "Only the large owners opposed it", "The young favored it, the old did not", "Nobody on the reservation favors it"], correctIndex: 3, explanation: "He said \"Nobody on the reservation favors the reduction\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What did Dogol-Chee-Bikis nonetheless call the reduction?", options: ["The medicine of reduction", "A gift from Washington", "A temporary error", "The end of the Navajo"], correctIndex: 0, explanation: "He called it \"the medicine of reduction\" the range required.", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "How do the 1937 Navajo statements to the Senate subcommittee reach us?", options: ["Through the full printed Senate hearing record", "Through a government newsletter's summary", "Through recordings made at the hearing", "Through letters Morgan published"], correctIndex: 1, explanation: "Both reach us only through Indians at Work's summary; the course could not find the hearing record.", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What did a 1937 critique, as the Indian Office newsletter summarized it, fault early reductions for?", options: ["Paying too much per animal", "Starting with the cattle", "Using a percentage basis", "Leaving out the goats"], correctIndex: 2, explanation: "It faulted \"the use of a percentage basis\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "Who did the percentage basis work hardship on, per the 1937 critique?", options: ["The large owners", "The traders", "The weavers", "The small owners"], correctIndex: 3, explanation: "It worked \"hardship on the small owners\" and left \"the large owners practically unscathed\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "Whom did the 1937 critique say the percentage basis left practically unscathed?", options: ["The large owners", "The small owners", "The goat herders", "The weavers"], correctIndex: 0, explanation: "\"the large owners practically unscathed\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "Which word did Collier put in quotation marks for the three early reduction campaigns?", options: ["Vertical", "Horizontal", "Voluntary", "Temporary"], correctIndex: 1, explanation: "Collier wrote of \"three arduous 'horizontal' reduction campaigns\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "How did Collier describe the 1937 grazing regulations?", options: ["Rules written by the Soil Conservation Service", "An order of the federal district court", "The product of the council's grazing committee", "A Senate subcommittee's proposal"], correctIndex: 2, explanation: "\"the product of the Navajo Council's grazing committee\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "Who was J. M. Stewart, who wrote about the January 1938 council meeting?", options: ["A Navajo delegate to the tribal council", "A trader at Hubbell's post", "A Purdue extension agent", "Director of Lands, a federal officer"], correctIndex: 3, explanation: "Stewart signed as Director of Lands, a federal officer.", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What did Stewart write the Indian Office lacked when it first pressed reduction?", options: ["The facts, fully developed", "Money to pay for the stock", "Any legal authority at all", "Support from the Senate"], correctIndex: 0, explanation: "He wrote that the Indian Office \"did not have the facts fully developed\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What did Stewart write, as something \"it is said\", that some Navajo parents told children?", options: ["That every sheep would come back by spring", "That Collier might appear on the scene", "That the range would heal itself", "That the traders would buy them"], correctIndex: 1, explanation: "Some parents disciplined children by intimating that Collier \"might appear on the scene\".", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "For whom was the 1942 federal primer that framed the program written?", options: ["Senate staff", "Purdue farmers", "Navajo students", "Wool buyers in Boston"], correctIndex: 2, explanation: "Boyce's primer was a federal school text for Navajo students.", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What did the 1942 school text say the Navajo people may well be proud of?", options: ["Their weaving, not their sheep", "Their vote against the Act", "Their opposition to reduction", "This achievement, the reduction"], correctIndex: 3, explanation: "\"The Navajo people may well be proud of this achievement\", set beside the Navajo testimony as the government's framing.", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "Does any 1930s record this course read use the word \"Churro\"?", options: ["No", "Yes, in the 1935 report", "Yes, in Indians at Work", "Yes, in the 1942 primer"], correctIndex: 0, explanation: "No 1930s record read uses the word, so the link between the reduction and the breed is not taught as fact.", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What does lesson 21 call the most important missing piece of the record?", options: ["The dipping records", "The Senate hearing record", "The 1942 school text", "Collier's own editorials in Indians at Work"], correctIndex: 1, explanation: "The Senate hearing record, with the Navajo testimony in full, could not be found.", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "What was the 1935 sheep-breeding laboratory meant to build up?", options: ["A breed giving the fastest meat growth possible", "A pure Merino flock for export", "A breed suited to Navajo climate and rugs", "A breed that needs no shearing"], correctIndex: 2, explanation: "A breed adapted to Navajo climatic conditions, whose wool would suit Navajo rugs and also be salable on the open market.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "Besides Navajo rugs, what market was the 1935 laboratory's wool meant to suit?", options: ["Federal uniforms", "Only local traders", "Hand spinners in the East", "The open market"], correctIndex: 3, explanation: "Wool \"salable on the open market\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "Where was the Southwestern Range and Sheep-Breeding Laboratory?", options: ["Wingate, New Mexico", "Ganado, Arizona", "Booneville, Arkansas", "Window Rock, Arizona"], correctIndex: 0, explanation: "The 1937 Interior report places it at Wingate, New Mexico.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What did the 1937 report say the Wingate strain would produce besides rug wool?", options: ["More milk than existing Navajo goats", "More mutton than existing Navajo sheep", "Twice the wool of a Rambouillet", "A fleece with no kemp at all"], correctIndex: 1, explanation: "A strain with wool for Navajo handicraft that \"also will produce more mutton than existing Navajo sheep\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "Whom did the Wingate laboratory employ to test its wool grades for rugs?", options: ["A Boston wool buyer", "A Purdue grader", "A Navajo weaver", "A Senate auditor"], correctIndex: 2, explanation: "Wingate employed a Navajo weaver to test its wool grades for rugs.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "How many sheep did the Wingate laboratory hold in 1937?", options: ["629, with 1,342 ewes", "1,854, with 500 ewes", "3,700, with 1,000 ewes", "1,342, with 629 ewes"], correctIndex: 3, explanation: "In 1937 Wingate held 1,342 sheep, 629 of them ewes.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "Why does lesson 22 cite the 1935 laboratory and Wingate separately?", options: ["No record read says they are the same", "The 1935 one bred only goats", "One was a cattle station", "Wingate opened in 1942"], correctIndex: 0, explanation: "No record the course read says the 1935 laboratory and Wingate are the same place.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What carrying capacity was estimated for the fenced Mexican Springs area?", options: ["3,700 sheep units", "1,854 sheep units", "560,000 sheep units", "350 sheep units"], correctIndex: 1, explanation: "1,854 sheep units against a former 3,700.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What did the 1940 report say the Mexican Springs flock held?", options: ["1,000 sheep, all of them pure Navajo-Churro", "500 Merinos, 500 Lincolns", "500 Rambouillets, 500 mixedbred Navajo", "1,854 Rambouillets only"], correctIndex: 2, explanation: "\"500 are now purebred Rambouillets, and 500 are mixedbred Navajo sheep\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What did the Mexican Springs station expect would happen to the ordinary Navajo sheep?", options: ["Kept exactly as they were", "Sold off within a year", "Replaced by goats", "Vastly improved over their present type"], correctIndex: 3, explanation: "It expected \"the ordinary Navajo sheep will be vastly improved over their present type\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What did the 1942 text tell Navajo students factories paid more for?", options: ["Uniform wool", "Mixed-breed Navajo wool", "Long-haired wool", "Hand-spun yarn"], correctIndex: 0, explanation: "Factories paid more for uniform wool than for \"mixed-breed Navajo wool\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "Which wools did the 1942 text ask students to compare for shrinkage?", options: ["Merino and Lincoln", "Navajo and Rambouillet type", "Yak down and alpaca", "Navajo and Gulf Coast Native wool"], correctIndex: 1, explanation: "\"long-haired Navajo wool\" against \"shorter-haired Rambouillet type wool\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What does The Livestock Conservancy say the Diné call Navajo-Churro sheep?", options: ["Churra", "Merino", "Dibé dits'ozí", "Wingate"], correctIndex: 2, explanation: "Navajo-Churro sheep are known to the Diné as Dibé dits'ozí, \"long fleeced sheep\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What does Dibé dits'ozí mean, per The Livestock Conservancy?", options: ["Sheep of the mountains", "Sheep given by Spain", "Gray sheep of the desert", "Long fleeced sheep"], correctIndex: 3, explanation: "The Conservancy gives the meaning \"long fleeced sheep\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "Where does the National Park Service keep a flock of Churro sheep?", options: ["Hubbell Trading Post", "Sutter's Fort", "Mexican Springs station", "Wingate"], correctIndex: 0, explanation: "NPS keeps a flock of Churro sheep at Hubbell Trading Post. Sutter's Fort is a California state park.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "In 2005, how many Navajo-Churro semen samples had an ARS scientist collected?", options: ["6,000 from 270 rams", "1,200 from 27 rams", "120 from 2 rams", "27 from 1,200 rams"], correctIndex: 1, explanation: "1,200 samples from 27 rams, toward a goal of 6,000 units.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What goal did the ARS scientist have for Navajo-Churro semen units?", options: ["1,200 units", "600 units", "6,000 units", "60,000 units"], correctIndex: 2, explanation: "The goal was 6,000 units; 1,200 had been collected.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What two lines does the Gulf Coast Native sheep have?", options: ["Texas Native and Georgia Native, both coastal", "Spanish Churra and Merino", "Booneville and Wingate", "Florida Native and Louisiana Native"], correctIndex: 3, explanation: "Kijas et al. (2012) found two genetically distinct lines, Florida Native and Louisiana Native.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What did the 2012 study conclude about the two Gulf Coast Native lines?", options: ["Different enough to be separate breeds", "Genetically identical to each other in every test", "Both descended from Rambouillet", "Too inbred to survive"], correctIndex: 0, explanation: "They were \"sufficiently different to be considered separate breeds\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "Compared with closely related southern European breeds, how far apart were the two Gulf Coast lines?", options: ["About half as far", "About 50 percent farther", "Exactly as far", "About ten times as far apart"], correctIndex: 1, explanation: "A genetic distance of 6.2 percent against 4.2 percent, about 50 percent higher.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What environment has Gulf Coast Native adapted to, per the 2012 study?", options: ["High altitude and cold", "Dry desert range", "High parasite loads", "Snowy mountain pasture"], correctIndex: 2, explanation: "The breed has adapted to an environment of high parasite loads.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "At ARS Booneville, which of Brown's requirements did Gulf Coast Native meet?", options: ["Fine wool and fast growth", "Large size and twin lambs", "Cold tolerance and long wool", "Taking heat and resisting parasites"], correctIndex: 3, explanation: "It \"fulfills two of Brown's three requirements: an ability to take the heat and unusually high resistance to parasite infestation\".", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "What does lesson 22 say about where Gulf Coast Native sheep came from?", options: ["It is not settled", "It came from Merino only", "It came from Navajo-Churro", "Its origin is in the census"], correctIndex: 0, explanation: "One source says Spanish Churra with no citation; another says perhaps Merino and Rambouillet. The origin is not settled.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "Who interviewed formerly enslaved people about their lives in the 1930s?", options: ["The Census of Agriculture", "The Federal Writers' Project", "The Soil Conservation Service", "The Livestock Conservancy"], correctIndex: 1, explanation: "The Federal Writers' Project interviews were published as the Slave Narratives, held by the Library of Congress.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "Whose spellings are the narrators' words printed in, per lesson 23?", options: ["The narrators' own letters", "A modern editor's version", "The interviewers' transcriptions", "Standard spelling, corrected"], correctIndex: 2, explanation: "The spellings are the interviewers' transcriptions, quoted as printed.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "How many head of sheep did John Wells herd in Texas, in his interview?", options: ["Fifty", "Five thousand", "Fifteen", "Five hundred"], correctIndex: 3, explanation: "John Wells herded \"five hundred head of sheep\".", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "What did William Moore say he spent most of his time being?", options: ["A shepherd boy", "A weaver's helper", "A cowpuncher", "A wool carder"], correctIndex: 0, explanation: "William Moore spent most of his time \"bein' a shepherd boy\".", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "How did Carey Davenport describe his work?", options: ["A wool buyer", "A sheep minder", "A shearer for the whole county", "A goat herder"], correctIndex: 1, explanation: "Carey Davenport was \"a sheep minder\".", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "What was Felix Haywood before and during the Civil War?", options: ["A weaver and dyer", "A shearer and carder", "A sheep herder and cowpuncher", "A trader and a teamster on the roads"], correctIndex: 2, explanation: "The interview introduces Felix Haywood as \"a sheep herder and cowpuncher\" before and during the war.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "Which state's narratives include Henri Necaise, who \"tended de sheep an' cows\"?", options: ["Texas", "Georgia", "Arkansas", "Mississippi"], correctIndex: 3, explanation: "Henri Necaise is in Vol. IX, Mississippi.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "What did Nicey Kinney do while the wool was cut?", options: ["Sat on the sheep's head", "Held the sheep's legs", "Bagged the dung locks", "Rolled the fleece"], correctIndex: 0, explanation: "She described sitting on the sheep's head while the wool was cut.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "Where did the wool go to be carded, in Nicey Kinney's account?", options: ["To her mother's cards", "To a factory", "To a neighbor's wheel", "To the mistress's room"], correctIndex: 1, explanation: "The wool was sent to a factory to be carded; the children spun the thread at home.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "Who spun the thread, in Nicey Kinney's account?", options: ["Her mother", "The mistress", "The children", "A hired spinner"], correctIndex: 2, explanation: "The children spun the thread, and her mother and the mistress wove the cloth.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "What did this course find on Black shepherds after 1865?", options: ["A full NASS series by race", "An 1890 university program report", "A 1937 Senate study", "Nothing reliable"], correctIndex: 3, explanation: "Nothing reliable was found after 1865, in the West or the South; no NASS table fetched breaks sheep out by race.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "Which 2024 book chapter does lesson 23 name as the next reading?", options: ["\"Shepherds Enslaved and Free\"", "\"The Navajos and the Land\"", "\"A Hardy, Hairy Sheep\"", "\"Home Dyeing with Natural Dyes\""], correctIndex: 0, explanation: "Bannor's 2024 cultural history has a chapter on \"Shepherds Enslaved and Free\"; the course has not read it.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "What does lesson 23 say a 2017 Mississippi House resolution asserts without a source?", options: ["That Navajo-Churro came from Spanish settlers", "Gulf Coast Native's role in Southern wool", "The 1937 Senate testimony", "Wingate's 1937 flock size"], correctIndex: 1, explanation: "The resolution asserts the breed's role in Southern wool before the Second World War, without a source.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "Which gap does lesson 23 list for the Navajo reduction?", options: ["The dipping record counts", "Collier's name and title", "The prices paid for Navajo livestock", "The date of the 1935 vote on the Act"], correctIndex: 2, explanation: "The prices paid, and the court case the 1939 report means, are in no record the course read.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7: Indiana and the decision
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "money-time-and-help",
      title: "24 · Money, time, a vet and a shearer",
      section: S7,
      recallContent: [
        {
          prompt: "Name two formerly enslaved people whose WPA interviews describe herding sheep.",
          answer: "Any two of John Wells, William Moore, Carey Davenport, Felix Haywood and Henri Necaise.",
        },
        {
          prompt: "Name one gap this course says it could not fill in the history section.",
          answer: "Any one: Black shepherds after 1865; the 1937 Senate record; prices paid for Navajo livestock; the 1939 court case; Gulf Coast Native's origin.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): an extension educator or a shepherd.

**What a ewe costs.** Purdue's 2016 small-flock budget is for a 150-ewe meat flock lambing in January and February, priced from national estimates. It puts the total cost of one ewe unit at $257.38 a year and its wool at 9 pounds. At the budget's own $1.15 a pound, that wool brings about $10.35, about 4 percent of the cost (Munns et al., 2016, pp. 1, 2). A flock kept for yarn has to be costed on fiber prices, which this budget does not do. Its buildings and machinery for 150 ewes come to $16,500, including fencing at $100 an acre for 30 acres and $7,000 for barns, pens and feeders (p. 3, Table 2).

**What it takes in time.** Purdue's decision matrix puts sheep at about 5 labor hours per ewe unit a year, tended 2 to 3 times a week, with about 160 days and $159 of breeding stock to get in or out (Munns et al., 2015, p. 3, Table 2). For 92 ewe units that is 460 hours a year, roughly 9 hours a week. In Purdue's worked example, a couple with 40 acres and $25,000 ran the numbers and chose a cow-calf enterprise over sheep (p. 3). The tool is for deciding, not for promoting an animal.

**Find the vet first.** Many sheep and goat producers complain that they cannot find a veterinarian who is knowledgeable or interested in sheep and goats, and producers who coordinate in a region are more likely to attract one (Pezzanite et al., 2009, p. 2). Finding that vet is a task for before the sheep arrive.

**And the shearer.** The Purdue Sheep Unit's manager says new shearers are continually needed as older ones retire (O'Brien, 2026; lesson 8).

**A small levy.** Purdue Extension News reports that funds for the Indiana Sheep and Wool Market Development council are collected from the sale of all sheep in Indiana, at 0.5 percent of the net market price (O'Brien, 2026, final section). That is the news item's figure; this course did not find the rate in the statute.

**Camelids too.** Before buying a llama or alpaca, NCAT says, confirm with the zoning authority that the property is zoned for livestock, and note that moving camelids across state lines "can require considerable paperwork, testing, and vaccinations" (Gegner, 2000/2012, pp. 1, 2).

:::reveal In Purdue's 2016 budget, what share of a ewe unit's yearly cost does its wool cover? ||| About 4 percent: about $10.35 of wool (9 pounds at $1.15) against $257.38 of cost.

:::reveal What does NCAT say to confirm before buying a llama or alpaca? ||| With the zoning authority, that the property is zoned for livestock.

## Sources
- ${ec804("Pages 1, 2 (Table 1) and 3 (Table 2)")}
- ${EC800}
- ${as595("Page 2")}
- ${shearSchool("Paragraph 6; final section")}
- ${ncat("Pages 1 and 2")}`,
    },
    {
      slug: "indiana-law-a-keeper-meets",
      title: "25 · Indiana law a keeper meets",
      section: S7,
      recallContent: [
        {
          prompt: "In Purdue's worked example, what did the couple with 40 acres and $25,000 choose?",
          answer: "A cow-calf enterprise over sheep. The tool is for deciding, not for promoting an animal.",
        },
        {
          prompt: "What does Purdue say many sheep and goat producers cannot find?",
          answer: "A veterinarian who is knowledgeable or interested in sheep and goats.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): an Indiana land-use attorney or county plan commission staff.

**Zoning is local, and optional.** Indiana counties and towns may adopt zoning but need not. A zoning ordinance has the force of law and two parts, a text and a map, and a county must approve a comprehensive plan before it adopts one (Slack, 2000, p. 1; IC 36-7-4-202(a), -601(a)). The zoning statute lets the legislative body create agricultural and residential districts and regulate "the kind and intensity of uses" in each (IC 36-7-4-601(d)). The statute does not mention animals: it is the general power that an ordinance's animal-per-acre limits rest on. Purdue reported in 2017 that 82 of Indiana's 92 counties had adopted planning and zoning; its 2015 count was 81. Neither figure is current (Ebner & Hong, 2017, p. 2; Ebner et al., 2016, p. 2).

**Outside town is not outside the rules.** A town plan commission whose comprehensive plan provides for the area may exercise jurisdiction up to two miles into contiguous unincorporated land, after filing a description or map with the county recorder. For a plan first adopted after June 30, 2019, in a county that has its own plan and ordinance for that area, it also needs the county's approval (IC 36-7-4-205(c) to (f)). Living outside town limits does not settle whose rules apply.

**Confined feeding.** Indiana's confined-feeding law counts sheep only when confined: 45 days or more in a 12-month period, on ground where vegetation is not sustained over at least half the confinement area. At 600 or more sheep so confined, the farm is a confined feeding operation (CFO) and needs approval from the Indiana Department of Environmental Management (IDEM) before it operates, builds or expands (IC 13-11-2-39(a), -40; 327 IAC 19-2-3; IDEM, n.d.). So a flock on pasture is not a CFO by its numbers, but any animal feeding operation that causes a water pollution violation can be made subject to the CFO rules regardless of size (IC 13-11-2-40(3); Ebner & Hong, 2017, pp. 1, 2). IDEM's web summary mentions the 45-day test but not the vegetation test; the statute has both.

**Right to farm.** Under Indiana's right-to-farm statute, an agricultural operation that has run continuously for more than a year does not become a nuisance because the neighborhood changed around it, provided there is no significant change in the type of operation and it was not a nuisance when it began. The protection does not cover negligent operation. Changing from one kind of farming to another, or changing size or owner, is not a significant change (IC 32-30-6-9(a), (c), (d)). Whether that statute limits a county's zoning enforcement, as against a neighbor's nuisance suit, is not answered by anything this course read.

**Fences.** A lawful partition fence is one "sufficiently tight and strong to hold cattle, hogs, horses, mules, and sheep," such as a straight wire or board fence four feet high (IC 32-26-9-3(f)). Unless the county has an ordinance letting domestic animals run at large in that township, a person whose property a domestic animal enters can recover damages without proving a lawful fence (IC 32-26-2-2(b); Harrison & Spillers, 2004, p. 4). The keeper's duty is to keep the animals in.

**An existing farm use.** A county or town may not use zoning to end an agricultural nonconforming use that has been kept up for at least three years in a five-year period, may not restrict it, and may not require a variance, special exception, special use, contingent use or conditional use for it. It may still hold the use to state environmental and health laws and to every requirement that applies to conforming agricultural land (IC 36-7-4-616(e), (f)). Lesson 26 shows a court applying that limit.

:::reveal How many confined sheep make an Indiana farm a CFO, and what does "confined" require? ||| 600 or more, confined 45 days or more in a 12-month period on ground where vegetation is not sustained over at least half the area.

:::reveal Does right-to-farm protection cover a farm that is run negligently? ||| No. The protection does not cover negligent operation.

## Sources
- ${ID233}
- ${ic("36-7-4-202(a), -205(c) to (f), -601(a) and (d), -616(e) and (f)", 36)}
- ${ID488}
- ${CFO_REPORT}
- ${ic("13-11-2-39(a) and -40", 13)}
- ${iac("327 Ind. Admin. Code 19-2-3", "327-IAC-19-2-3")}
- ${IDEM_CFO}
- ${ic("32-30-6-9(a), (c), (d); 32-26-9-3(f); 32-26-2-2(b)", 32)}
- ${EC657}`,
    },
    {
      slug: "an-alpaca-case-and-three-ordinances",
      title: "26 · An Indiana alpaca case, and three ordinances near Arcadia",
      section: S7,
      recallContent: [
        {
          prompt: "How far into unincorporated land may a town plan commission's jurisdiction reach in Indiana?",
          answer: "Up to two miles into contiguous unincorporated land, under the conditions of IC 36-7-4-205.",
        },
        {
          prompt: "What does Indiana's statute say a lawful partition fence must hold?",
          answer: "Cattle, hogs, horses, mules and sheep: for example a straight wire or board fence four feet high.",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): an Indiana land-use attorney or county plan commission staff.

**County of Lake v. Pahl (2015).** In 2015 the Indiana Court of Appeals reversed a trial court and sent the case back with instructions to grant Lake County's petition for an injunction against the landowners, over alpacas raised for their fiber and manure (County of Lake v. Pahl, 2015, paras. 2, 5, 40). The parcel, 10.08 acres, had been rezoned from agricultural (A-1) to single-family residential (R-1) in 1995. The realtor's listing said "Ag-Res" and the assessor's record said "101 AG", but the buyers did not check with the Plan Commission (para. 3). The county ordinance allowed farm animals only on farms of 20 acres or more or on qualifying hobby farms, and the court held that subsection (f) of the agricultural nonconforming use statute limits the protection in subsection (e) (paras. 33, 34; lesson 25). A shearer came once a year, and the fiber went to a mill in trade for finished goods, or was sold to spinners or used in the owners' own products (paras. 5, 12).

**Three ordinances near Arcadia.** These are taught as a method, never as a verdict on any parcel. Hamilton County is split among nine planning jurisdictions, and its GIS layer names each office, including "Arcadia Building and Zoning" and the "Cicero/Jackson Plan Commission" alongside the county plan commission (Hamilton County, n.d.-a, n.d.-b).
- **Hamilton County's own ordinance,** on single-family and two-family residential lots: Article 22's table allows no farm animals on lots of 9,999 square feet or less, and 2 livestock per 40,000 square feet on lots of 40,000 square feet or more, so 4 on 80,000. Its use table permits livestock grazing in A-2, A-2S, A3, R1 and FLP and leaves R2 and R3 blank, which it defines as not permitted, while Article 22 says farm animals are a permitted use in single- and two-family areas. The two conflict; that is a question for the office, and neither reading is settled here (Hamilton County Plan Commission, 2023).
- **Cicero and Jackson Township:** no farm animal may be kept on less than 3 acres; sheep, alpacas and llamas each need 1 acre of fenced pasture; animals the ordinance does not list, a yak among them, are left to the zoning administrator (Town of Cicero & Jackson Township Plan Commission, 2015).
- **Tipton County** permits pasture and grazing in its Agricultural district, requires a special exception in Rural Residential, and expressly leaves "animals kept as pets or for hobby" out of that row. The ordinance applies only to unincorporated land outside any town's filed planning area, and its zoning administrator decides where an unlisted use belongs. Its confined-feeding rules still cite "IC 13-1-5.7 (d)", the pre-1996 number for today's IC 13-11-2-40, so a reader has to follow the recodification to find the current law (Tipton County, 2008).

The town of Arcadia's own ordinances are published on a site this course could not read, so it says nothing about Arcadia's rule.

:::reveal A realtor's listing says "Ag-Res". Is that the zoning? ||| No. In Pahl the listing said "Ag-Res" and the assessor said "101 AG", but the parcel was zoned R-1. The zoning is in the ordinance and its official map.

:::reveal How many sheep may a 3-acre Cicero/Jackson lot carry? ||| At most 3, and only if every acre were fenced pasture, since each sheep needs 1 fenced acre. In practice, fewer.

## Sources
- ${pahl("Paragraphs [2], [3], [5], [12], [33], [34] and [40]")}
- ${HAMILTON_GIS}
- ${HAMILTON_PAGES}
- ${HAMILTON_UDO}
- ${CICERO}
- ${TIPTON}`,
    },
    {
      slug: "find-your-county-rule",
      title: "27 · Find your county's rule",
      section: S7,
      lessonType: "assignment",
      body: `This assignment ends with the written rule that governs one named parcel, its date, and one question for the office that enforces it. It does not end with a yes or no from this course. Submit a short note with the eight answers below.

1. **Name the parcel.** An address or parcel ID where you could keep animals: your own land, or land you are considering.
2. **Find who zones it.** Start with the county plan commission's website or GIS map; in Hamilton County one GIS layer shows nine possible offices (Hamilton County, n.d.-a). Remember the two-mile rule and its conditions (lesson 25). If the county has no zoning, write that down and go to step 7.
3. **Find the district on the official map, not the tax record.** The Pahl buyers trusted a realtor's listing and an assessor code (County of Lake v. Pahl, 2015, para. 3). Tipton County says its electronic zone map, kept by the Building Commissioner, is the official one (Tipton County, 2008, § 301).
4. **Read three places in the ordinance.** The use-table row for livestock, grazing or farm animals; any animal-standards section; and the definitions of "farm animal", "livestock" and "hobby farm". Write down whether your animal is named. Sheep usually are, and alpacas and llamas sometimes; yaks were named in none of the ordinances this course read (lesson 26).
5. **Do the arithmetic.** Your lot size against the rule: for example, 2 livestock per 40,000 square feet in Hamilton County, or 3 acres minimum plus 1 fenced acre per sheep or alpaca in Cicero and Jackson Township. Sheep need company, and so do camelids (lessons 4, 9). If the rule allows only one animal, the answer is no.
6. **Check the date and the source.** Use the copy on the government's own website, and note its date. Summaries go stale: a Purdue factsheet on Hamilton County describes an ordinance that has since been repealed, and Purdue's own study tells readers to contact the plan director for the current text (Purdue Extension Community Development, n.d.).
7. **Add the statewide layer.** Confined 45 days or more in any 12 months, on ground without vegetation over at least half the area, at 600 or more sheep (lesson 25)? A lawful partition fence? For sheep, a premises ID and scrapie tags (lesson 6)?
8. **Write the office one question,** for the answer that is not in the text: an unlisted animal, a conflict between two sections, or whether an existing farm use counts as nonconforming. Ordinances are obtained from the plan commission office, and variances and special exceptions go to the board of zoning appeals (Burbrink, 2018; Kumar, 2017).

**What a strong answer shows.** The rule quoted exactly, with its section number and the date of the copy you read. An honest "the ordinance does not name alpacas; I asked the administrator" where that is what you found. And a question written so the office can answer it in a sentence.

## Sources
- ${HAMILTON_GIS}
- ${pahl("Paragraph [3]")}
- ${TIPTON}
- ${CFO_STUDY}
- ${ID511}
- ${ID228}`,
    },
    {
      slug: "should-you-keep-one",
      title: "28 · Should you keep one?",
      section: S7,
      recallContent: [
        {
          prompt: "In the find-your-county-rule assignment, why use the official zoning map rather than the tax record?",
          answer: "The tax record is not the zoning. The Pahl buyers trusted a listing that said \"Ag-Res\" and an assessor code, and the parcel was zoned R-1.",
        },
        {
          prompt: "Which three places in an ordinance does the assignment tell you to read?",
          answer: "The use-table row for livestock or farm animals; any animal-standards section; and the definitions of \"farm animal\", \"livestock\" and \"hobby farm\".",
        },
      ],
      body: `> **Before release:** needs a qualified reviewer (QR): a shepherd or an extension educator.

This course does not tell you to keep a fiber animal, or not to. It leaves you able to decide. Here are seven questions, each with what the course found.

1. **Land.** Is the parcel zoned for the animal, by the ordinance and its official map (lessons 26, 27)? Is there room for company, at least two sheep or two camelids (lessons 4, 9)? Under the Cicero and Jackson Township rule, that means 3 acres minimum and 1 fenced acre per sheep or alpaca.
2. **Time.** About 5 labor hours per ewe unit a year in Purdue's matrix, tended 2 to 3 times a week (lesson 24), plus the watching that teaches you what normal looks like (lesson 4).
3. **Money.** $257.38 a year per ewe unit in Purdue's 2016 meat-flock budget, against about $10.35 of wool at the budget's price (lesson 24). A yarn flock is costed on fiber prices, and no source this course read prices a fleece sold to a hand spinner (lesson 2).
4. **Law.** Scrapie tags and a premises ID for sheep (lesson 6); a certificate of veterinary inspection to bring a camelid into Indiana (lesson 10); your county's ordinance (lesson 27); a fence that keeps the animals in (lesson 25).
5. **A vet.** Found before the animals arrive, because many producers cannot find one who knows sheep (lesson 24), and because every vaccine plan and drug decision is theirs (lessons 4, 10).
6. **A shearer.** Booked every year for wool sheep and alpacas, and for llamas where summers are hot (lessons 8, 11).
7. **A market.** Who will buy the fiber, or what you will make with it. An Indiana fleece was worth about $2.85 at the 2025 commodity price (lesson 2), and each step the fiber takes away from the animal adds a cost (lesson 11).

If any answer is "I do not know yet," that is the next thing to find out, before the animals come rather than after.

:::reveal Name the seven questions this lesson asks before you keep a fiber animal. ||| Land, time, money, law, a vet, a shearer, and a market.

:::reveal Why is "room for company" part of the land question? ||| Sheep show distress when isolated, and llamas and alpacas should never be kept alone. A rule that allows only one animal is a no.

## Sources
- ${ec804("Pages 1 and 2")}
- ${EC800}
- ${erasmus("Pages 1 and 2")}
- ${ncat("Page 7")}
- ${CICERO}`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Indiana and the decision",
      section: S7,
      body: QUIZ_INTRO,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What flock does Purdue's 2016 sheep enterprise budget describe?", options: ["A 150-ewe meat flock lambing in winter", "A 20-ewe wool flock kept for hand spinners", "A 600-head confined feeding operation", "A 50-ewe dairy flock with no lambs"], correctIndex: 0, explanation: "EC-804-W budgets a 150 ewe-unit meat flock lambing in January and February, priced from national estimates.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "What total yearly cost does Purdue's 2016 budget give per ewe unit?", options: ["$10.35", "$257.38", "$159.00", "$16,500"], correctIndex: 1, explanation: "Total of all costs: $257.38 per ewe unit a year. $16,500 is buildings and machinery for 150 ewes.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "How much wool does Purdue's budget credit to one ewe unit?", options: ["5.7 pounds", "6.8 pounds", "9 pounds", "20 pounds"], correctIndex: 2, explanation: "The budget credits 9 pounds of wool per ewe unit. 5.7 and 6.8 are Indiana's and the US average fleeces.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "At the budget's own price of $1.15 a pound, about what is a ewe unit's wool worth?", options: ["About $2.85", "About $257.38", "About $28.70", "About $10.35"], correctIndex: 3, explanation: "9 pounds at $1.15 is about $10.35.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "About what share of a ewe unit's yearly cost does its wool cover in Purdue's budget?", options: ["About 4 percent", "About 40 percent", "About 14 percent", "About 65 percent"], correctIndex: 0, explanation: "About $10.35 of wool against $257.38 of cost is about 4 percent.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "Why does lesson 24 say a yarn flock needs its own costing?", options: ["The budget leaves out feed costs", "The budget does not use fiber prices", "Yarn flocks need no buildings or fencing at all", "Wool is not counted in the budget"], correctIndex: 1, explanation: "A flock kept for yarn has to be costed on fiber prices, which this meat-flock budget does not do.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "What do the budget's buildings and machinery for 150 ewes come to?", options: ["$7,000", "$3,000", "$16,500", "$257,380"], correctIndex: 2, explanation: "$16,500, including fencing at $100 an acre for 30 acres and $7,000 for barns, pens and feeders.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "About how many labor hours per ewe unit a year does Purdue's decision matrix give for sheep?", options: ["About 50", "About 160", "About 1", "About 5"], correctIndex: 3, explanation: "About 5 labor hours per ewe unit a year; 160 is the days to get in or out.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "How often are sheep tended, in Purdue's decision matrix?", options: ["2 to 3 times a week", "Once a month, in a single visit", "Every hour", "Once a season"], correctIndex: 0, explanation: "EC-800-W: sheep are tended 2 to 3 times a week.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "For 92 ewe units at Purdue's rate, about how many hours a week of labor is that?", options: ["About 46", "About 9", "About 92", "About 2"], correctIndex: 1, explanation: "92 units at 5 hours is 460 hours a year, roughly 9 hours a week.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "What did the couple with 40 acres and $25,000 choose in Purdue's worked example?", options: ["A 92-ewe sheep flock for wool and meat", "An alpaca herd", "A cow-calf enterprise", "A yak herd for fiber"], correctIndex: 2, explanation: "They ran the numbers and chose a cow-calf enterprise over sheep.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "What does lesson 24 say Purdue's decision tool is for?", options: ["Proving that sheep always pay their way", "Setting county zoning", "Pricing wool for sale", "Deciding, not promoting an animal"], correctIndex: 3, explanation: "The worked example chose cattle over sheep: the tool is for deciding, not for promoting an animal.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "What does Purdue say many sheep and goat producers cannot find?", options: ["A vet who knows sheep and goats", "A buyer who will pay for their lambs", "A county with zoning", "A mill for their wool"], correctIndex: 0, explanation: "Many producers complain they cannot find a veterinarian knowledgeable or interested in sheep and goats.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "What makes producers more likely to attract an interested veterinarian, per Purdue?", options: ["Keeping fewer than 25 sheep on pasture", "Coordinating with others in a region", "Joining a 4-H club", "Paying the 0.5 percent levy"], correctIndex: 1, explanation: "Producers who coordinate with others in a region are more likely to attract a vet interested in sheep and goats.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "What rate does Purdue Extension News give for the Indiana sheep market development levy?", options: ["5 percent of the gross price", "50 cents per head sold", "0.5 percent of the net market price", "1 percent of each year's wool sales only"], correctIndex: 2, explanation: "Funds are collected from the sale of all sheep in Indiana at 0.5 percent of the net market price, per the news item.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "How does lesson 24 treat the 0.5 percent levy rate?", options: ["As the rate in the statute", "As a federal checkoff", "As an IDEM fee", "As the news item's figure"], correctIndex: 3, explanation: "It is the news item's figure; the course did not find the rate in the statute.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "What does NCAT say to confirm before buying a llama or alpaca?", options: ["That the land is zoned for livestock", "That a shearer lives somewhere in the county", "That the animal is scrapie tagged", "That the hay is mostly alfalfa"], correctIndex: 0, explanation: "NCAT: confirm with the zoning authority that the property is zoned for livestock.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "Must an Indiana county adopt zoning?", options: ["Yes, every county must", "No; counties may, but need not", "Only counties over 50,000 people", "Only counties with a CFO"], correctIndex: 1, explanation: "Counties and towns may adopt zoning but need not (Purdue ID-233).", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What two parts does a zoning ordinance have, per Purdue?", options: ["A permit and a fee", "A survey and a census", "A text and a map", "A plan and a budget"], correctIndex: 2, explanation: "A zoning ordinance has the force of law and two parts, a text and a map.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What must an Indiana county approve before it adopts a zoning ordinance?", options: ["A CFO permit from IDEM", "A census of its farms", "A vote of every farmer", "A comprehensive plan"], correctIndex: 3, explanation: "IC 36-7-4: a county must approve a comprehensive plan before it adopts a zoning ordinance.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What does Indiana's zoning statute let the legislative body regulate in each district?", options: ["The kind and intensity of uses", "The price of farmland sold", "The breeds of livestock kept", "The number of shearers licensed"], correctIndex: 0, explanation: "IC 36-7-4-601(d): districts and \"the kind and intensity of uses\" in each.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "Does Indiana's zoning statute itself mention animals?", options: ["Yes, it sets two sheep per acre", "No; it gives a general power", "Yes, it bans yaks in towns", "Yes, it lists every species"], correctIndex: 1, explanation: "The statute does not mention animals; it is the general power an ordinance's animal-per-acre limits rest on.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "How many of Indiana's 92 counties had adopted planning and zoning, per Purdue in 2017?", options: ["92", "81", "82", "28"], correctIndex: 2, explanation: "Purdue reported 82 in 2017; its 2015 count was 81. Neither figure is current.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "How far into unincorporated land may an Indiana town plan commission's jurisdiction reach?", options: ["Up to 20 miles", "Up to half a mile", "The whole county", "Up to two miles"], correctIndex: 3, explanation: "IC 36-7-4-205: up to two miles into contiguous unincorporated land, under its conditions.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What must a town plan commission file before exercising jurisdiction outside town limits?", options: ["A description or map with the county recorder", "A petition signed by every landowner in the area", "A notice in the state register", "A permit from IDEM"], correctIndex: 0, explanation: "It must first file a description or map with the county recorder.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What extra step applies to a town plan first adopted after June 30, 2019, where the county has its own plan for the area?", options: ["A vote of the township", "The county's approval", "Approval from BOAH", "A federal permit"], correctIndex: 1, explanation: "For such a plan, the town also needs the county's approval.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "How long must sheep be confined in 12 months to count toward Indiana's CFO threshold?", options: ["30 days or more", "90 days or more", "45 days or more", "7 days or more"], correctIndex: 2, explanation: "IC 13-11-2-39: confined 45 days or more in a 12-month period.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "Besides time, what ground condition makes sheep \"confined\" under Indiana's CFO law?", options: ["A roof covering over half of the area", "A concrete floor", "A fence under four feet", "No vegetation over half the area"], correctIndex: 3, explanation: "Vegetation not sustained over at least half the confinement area.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "How many confined sheep make an Indiana farm a confined feeding operation?", options: ["600 or more", "300 or more", "60 or more", "6,000 or more"], correctIndex: 0, explanation: "IC 13-11-2-40: 600 or more sheep so confined.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What does a confined feeding operation need from IDEM before it operates, builds or expands?", options: ["A scrapie flock ID", "Approval", "A zoning variance", "A shearing permit"], correctIndex: 1, explanation: "A CFO needs IDEM approval before it operates, builds or expands.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "Can a small pasture flock ever be made subject to Indiana's CFO rules?", options: ["No, never, at any size below 600 head of sheep", "Only if it has yaks", "Yes, if it causes a water pollution violation", "Only in counties without zoning"], correctIndex: 2, explanation: "Any animal feeding operation that causes a water pollution violation can be made subject to the CFO rules regardless of size.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What does IDEM's web summary leave out that the CFO statute includes?", options: ["The 45-day test", "The 600-sheep count", "The IDEM approval step", "The vegetation test"], correctIndex: 3, explanation: "IDEM's summary mentions the 45-day test but not the vegetation test; the statute has both.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "How long must an agricultural operation have run before Indiana's right-to-farm protection applies?", options: ["More than a year", "More than ten years", "More than 30 days", "Since before 1995"], correctIndex: 0, explanation: "IC 32-30-6-9: an operation that has run continuously for more than a year.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "Does Indiana's right-to-farm protection cover a farm that is run negligently?", options: ["Yes, if it predates neighbors", "No", "Yes, after one year", "Only for sheep farms"], correctIndex: 1, explanation: "The protection does not cover negligent operation.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "Under the right-to-farm statute, is changing from one kind of farming to another a significant change?", options: ["Yes, it ends the protection", "Only if the new animal is a yak", "No, it is not a significant change", "Only after a county hearing"], correctIndex: 2, explanation: "Changing from one kind of farming to another, or changing size or owner, is not a significant change.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What question does lesson 25 say right to farm leaves unanswered?", options: ["Whether it covers sheep at all", "Whether it applies once a farm has run one year", "Whether neighbors can ever sue", "Whether it limits county zoning enforcement"], correctIndex: 3, explanation: "Whether the statute limits a county's zoning enforcement, as against a neighbor's nuisance suit, is not answered by anything the course read.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What does Indiana's statute say a lawful partition fence must hold?", options: ["Cattle, hogs, horses, mules and sheep", "Only cattle and horses", "Dogs, deer and coyotes", "Llamas, alpacas and yaks in every county"], correctIndex: 0, explanation: "IC 32-26-9-3(f): \"sufficiently tight and strong to hold cattle, hogs, horses, mules, and sheep\".", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What example of a lawful partition fence does the statute give?", options: ["Barbed wire, three strands", "Straight wire or board, four feet high", "Electric wire, two feet high, on wood posts", "Woven wire, six feet high"], correctIndex: 1, explanation: "Such as a straight wire or board fence four feet high.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "Unless a county lets animals run at large, what can a neighbor whose land your animal enters do?", options: ["Nothing at all, as long as your fence was lawful", "Keep the animal as their own", "Recover damages without proving a lawful fence", "Only call the county sheriff"], correctIndex: 2, explanation: "IC 32-26-2-2(b): the neighbor can recover damages without proving a lawful fence. The keeper's duty is to keep animals in.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "How long must an agricultural nonconforming use be kept up to be protected from termination by zoning?", options: ["One year in a ten-year period", "Ten years in a row", "Since the county's first plan", "Three years in a five-year period"], correctIndex: 3, explanation: "IC 36-7-4-616: at least three years in a five-year period.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What may a county still hold a protected nonconforming farm use to?", options: ["State environmental and health laws", "A new variance every year", "A ban on any livestock", "A special exception for each animal"], correctIndex: 0, explanation: "616(f): the use may still be held to state environmental and health laws and to every requirement for conforming agricultural land.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What did the Indiana Court of Appeals do in County of Lake v. Pahl (2015)?", options: ["Upheld the alpaca farm's right to farm the land", "Reversed and ordered an injunction granted", "Sent the case to the federal court", "Fined the county for bad zoning"], correctIndex: 1, explanation: "It reversed the trial court and sent the case back with instructions to grant Lake County's petition for an injunction.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "Why were the landowners in Pahl keeping alpacas, per the opinion?", options: ["For meat sold at a farm stand", "For a petting zoo", "For their fiber and manure", "For guard animals"], correctIndex: 2, explanation: "The alpacas were raised for their fiber and manure.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "How was the Pahl parcel zoned when the alpacas were kept?", options: ["A-1, agricultural", "A-2, agricultural, with a hobby farm", "B-1, business", "R-1, single-family residential"], correctIndex: 3, explanation: "The parcel had been rezoned from A-1 agricultural to R-1 single-family residential in 1995.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "How large was the Pahl parcel?", options: ["10.08 acres", "20 acres", "3 acres", "40 acres"], correctIndex: 0, explanation: "10.08 acres. The county ordinance required 20 acres or a qualifying hobby farm.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "What did the realtor's listing for the Pahl parcel say?", options: ["R-1", "Ag-Res", "101 AG", "Hobby farm"], correctIndex: 1, explanation: "The listing said \"Ag-Res\" and the assessor's record said \"101 AG\"; the zoning was R-1.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "What did the Pahl buyers fail to do, per the opinion?", options: ["Pay the county property tax on time", "Tag their alpacas", "Check with the Plan Commission", "Hire a shearer"], correctIndex: 2, explanation: "The buyers did not check with the Plan Commission.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "What did Lake County's ordinance require for farm animals?", options: ["3 acres and 1 fenced acre each", "2 animals per 40,000 square feet", "No farm animals in any district of the county", "20 acres or a qualifying hobby farm"], correctIndex: 3, explanation: "Farm animals only on farms of 20 acres or more or on qualifying hobby farms. The other figures are Cicero/Jackson's and Hamilton's.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "What did the court in Pahl hold about the agricultural nonconforming use statute?", options: ["Subsection (f) limits subsection (e)", "Subsection (e) overrides all zoning", "Neither subsection applies to alpacas", "The statute was repealed in 1995"], correctIndex: 0, explanation: "The court held that subsection (f) limits the protection in subsection (e).", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "How was the Pahl alpaca fiber used, per the opinion?", options: ["Burned as waste each spring after shearing", "Traded to a mill or sold to spinners", "Sold only to the county", "Graded and exported"], correctIndex: 1, explanation: "A shearer came once a year; the fiber went to a mill in trade for finished goods, or was sold to spinners or used in the owners' products.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "How many planning jurisdictions is Hamilton County split among?", options: ["Two", "Ninety-two", "Nine", "Twenty"], correctIndex: 2, explanation: "Hamilton County's GIS layer names nine planning jurisdictions.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "Which offices near Arcadia does Hamilton County's GIS layer name?", options: ["Tipton County and Lake County", "IDEM and BOAH", "The census and NASS", "Arcadia and Cicero/Jackson offices"], correctIndex: 3, explanation: "It names \"Arcadia Building and Zoning\" and the \"Cicero/Jackson Plan Commission\" alongside the county plan commission.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "On Hamilton County residential lots of 9,999 square feet or less, how many farm animals does Article 22 allow?", options: ["None", "Two", "Four", "One"], correctIndex: 0, explanation: "Article 22's table allows no farm animals on lots of 9,999 square feet or less.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "How many livestock per 40,000 square feet does Hamilton's Article 22 allow on lots of 40,000 square feet or more?", options: ["4", "2", "1", "6"], correctIndex: 1, explanation: "2 livestock per 40,000 square feet, so 4 on 80,000.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "What conflict does lesson 26 find in Hamilton County's ordinance?", options: ["The county's rule against the state's", "Arcadia against Cicero", "Article 22 against the use table", "The map against the census"], correctIndex: 2, explanation: "Article 22 permits farm animals in single- and two-family areas, while the use table leaves R2 and R3 blank, which it defines as not permitted.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "Under the Cicero and Jackson Township ordinance, what is the minimum lot for any farm animal?", options: ["1 acre", "20 acres", "40,000 square feet", "3 acres"], correctIndex: 3, explanation: "No farm animal may be kept on less than 3 acres.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "How much fenced pasture does Cicero and Jackson Township require for each sheep, alpaca or llama?", options: ["1 acre", "3 acres", "Half an acre", "5 acres"], correctIndex: 0, explanation: "Sheep, alpacas and llamas each need 1 acre of fenced pasture.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "Who decides about an animal, such as a yak, that the Cicero and Jackson ordinance does not list?", options: ["The county assessor", "The zoning administrator", "The state veterinarian", "The Purdue educator"], correctIndex: 1, explanation: "Unlisted animals are left to the zoning administrator.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "Where does Tipton County require a special exception for pasture and grazing?", options: ["In Agricultural", "In every district", "In Rural Residential", "Nowhere at all"], correctIndex: 2, explanation: "Pasture and grazing are permitted in Agricultural and need a special exception in Rural Residential.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "What outdated citation do Tipton County's CFO rules still use?", options: ["IC 13-11-2-40", "327 IAC 19-2-3", "IC 36-7-4-616", "IC 13-1-5.7 (d)"], correctIndex: 3, explanation: "\"IC 13-1-5.7 (d)\" is the pre-1996 number for today's IC 13-11-2-40.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "Why does lesson 26 say nothing about Arcadia's own animal rule?", options: ["Its ordinance site could not be read", "Arcadia has no zoning", "Arcadia bans all livestock", "Arcadia leaves every zoning question to Tipton"], correctIndex: 0, explanation: "Arcadia's ordinances are published on a site the course could not read.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "What does the find-your-county-rule assignment end with?", options: ["A yes or no answer given by this course itself", "The written rule, its date and a question", "A permit from the county", "A sale of your first animal"], correctIndex: 1, explanation: "It ends with the written rule for one parcel, its date, and one question for the office, not a yes or no from the course.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Where does step 2 of the assignment say to start finding who zones a parcel?", options: ["The census county table", "The tax assessor's record for the parcel", "The county plan commission's site or GIS", "The realtor's listing"], correctIndex: 2, explanation: "Start with the county plan commission's website or GIS map.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "If the county has no zoning, what does the assignment say to do?", options: ["Stop: no rules apply", "Ask BOAH for a zoning map", "Use the rule of the nearest county", "Write it down and go to step 7"], correctIndex: 3, explanation: "Write that down and go to step 7, the statewide layer.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Why does step 3 say to use the official zoning map, not the tax record?", options: ["The Pahl buyers trusted a listing and tax code", "Tax records show the soil types on a parcel only", "The map is cheaper to obtain", "The census replaced tax records"], correctIndex: 0, explanation: "The Pahl buyers trusted a realtor's listing and an assessor code, and the parcel was zoned R-1.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "What does Tipton County say is its official zone map?", options: ["The county assessor's printed paper map from 2008", "The Building Commissioner's electronic map", "The state's GIS layer", "Purdue's CFO factsheet map"], correctIndex: 1, explanation: "Tipton says the electronic zone map kept by the Building Commissioner is official.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Which three places in an ordinance does step 4 say to read?", options: ["Preamble, signatures and the closing index", "Fees, fines, appeal forms", "Use table, animal standards, definitions", "Map key, legend, scale bar"], correctIndex: 2, explanation: "The use-table row for livestock, any animal-standards section, and the definitions.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Which definitions does step 4 of the assignment name?", options: ["Fleece, wool and fiber", "Ewe, ram and wether", "Pasture, barn, pen and paddock area", "Farm animal, livestock and hobby farm"], correctIndex: 3, explanation: "Read the definitions of \"farm animal\", \"livestock\" and \"hobby farm\".", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Which animal was named in none of the ordinances this course read?", options: ["The yak", "The sheep", "The alpaca", "The llama"], correctIndex: 0, explanation: "Sheep usually are named, alpacas and llamas sometimes; yaks in none.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "In step 5, if the rule allows only one animal, what is the answer?", options: ["Yes, with a guard dog", "No, because the animal needs company", "Yes, if it is a wether", "Yes, but only for a single grazing season"], correctIndex: 1, explanation: "Sheep need company and so do camelids, so a rule allowing only one animal is a no.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Which copy of an ordinance does step 6 say to use?", options: ["Any copy found by a search", "A Purdue factsheet that summarizes the ordinance", "The government's own copy, with its date", "A realtor's printed copy"], correctIndex: 2, explanation: "Use the copy on the government's own website and note its date; summaries go stale.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "What does Purdue's CFO study tell readers to do for an ordinance's current text?", options: ["Read the 2015 factsheet", "Ask the county assessor", "Search a third-party site", "Contact the plan director"], correctIndex: 3, explanation: "Purdue's study tells readers to contact the plan director for the current text.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Which statewide checks does step 7 add for sheep?", options: ["Premises ID and scrapie tags", "A shearing license", "A wool sales permit", "A yearly census form"], correctIndex: 0, explanation: "Step 7 adds the CFO test, a lawful fence, and for sheep a premises ID and scrapie tags.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "In step 8, what kind of question should go to the office?", options: ["One the census can answer", "One the ordinance text does not answer", "One about the sale price", "One that is already answered in the use table"], correctIndex: 1, explanation: "Ask for the answer that is not in the text: an unlisted animal, a conflict, or a nonconforming use.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Where do variances and special exceptions go, per Purdue's guides?", options: ["The county assessor", "The state legislature", "The board of zoning appeals", "The Board of Animal Health"], correctIndex: 2, explanation: "Variances and special exceptions go to the board of zoning appeals (ID-511-W; ID-228-W).", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Where are zoning ordinances obtained, per Purdue's ID-511-W?", options: ["The county extension office", "The state library", "The census bureau", "The plan commission office"], correctIndex: 3, explanation: "Ordinances are obtained from the plan commission office.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "What does the assignment say a strong answer quotes?", options: ["The rule exactly, with section and date", "A summary of it written in your own words", "The realtor's description", "This course's lessons"], correctIndex: 0, explanation: "A strong answer quotes the rule exactly, with its section number and the date of the copy read.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "If the ordinance does not name alpacas, what does a strong answer report?", options: ["That alpacas are banned", "That fact, and the administrator's reply", "That alpacas are allowed", "Nothing; skip that step and move on to the next"], correctIndex: 1, explanation: "An honest \"the ordinance does not name alpacas; I asked the administrator\" where that is what was found.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "What does lesson 28 say this course leaves you able to do?", options: ["Shear your own flock", "Treat a sick ewe", "Decide for yourself", "Grade wool for sale"], correctIndex: 2, explanation: "The course does not tell you to keep a fiber animal, or not to; it leaves you able to decide.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "How many questions does lesson 28 ask before you keep a fiber animal?", options: ["Three", "Ten", "Sixteen", "Seven"], correctIndex: 3, explanation: "Land, time, money, law, a vet, a shearer, and a market.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "Which of these is one of lesson 28's seven questions?", options: ["A market for the fiber", "A breed show to enter", "A website for the farm", "A brand for the yarn"], correctIndex: 0, explanation: "The seventh question is a market: who will buy the fiber, or what you will make with it.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "Under the Cicero and Jackson Township rule, what do two sheep need at least?", options: ["1 acre, with no fencing", "3 acres, with 2 fenced acres", "2 acres, with 1 fenced acre", "10.08 acres, as in Pahl"], correctIndex: 1, explanation: "3 acres minimum, and 1 acre of fenced pasture per sheep, so 2 fenced acres for two.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "Why is room for company part of the land question in lesson 28?", options: ["Two animals pay the levy", "Every Indiana zoning ordinance requires pairs", "Sheep and camelids should not live alone", "Shearers charge per pair"], correctIndex: 2, explanation: "Sheep show distress when isolated, and llamas and alpacas should never be kept alone.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "What labor figure does lesson 28 carry over from Purdue's decision matrix?", options: ["About 5 hours per ewe a week", "About 50 hours per ewe a year", "About 1 hour per flock a year", "About 5 hours per ewe unit a year"], correctIndex: 3, explanation: "About 5 labor hours per ewe unit a year, tended 2 to 3 times a week.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "Against $257.38 of yearly cost per ewe unit, about how much wool value does lesson 28 set?", options: ["About $10.35", "About $102", "About $257", "About $28.70"], correctIndex: 0, explanation: "About $10.35 of wool at the budget's price.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "What does lesson 28 say no source this course read prices?", options: ["A ewe unit in Indiana", "A fleece sold to a hand spinner", "Wool at state averages", "A fenced acre in Hamilton"], correctIndex: 1, explanation: "A yarn flock is costed on fiber prices, and no source read prices a fleece sold to a hand spinner.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "What does lesson 28 list as a camelid's legal step into Indiana?", options: ["A scrapie flock ID number issued by BOAH", "A CFO permit from IDEM", "A certificate of veterinary inspection", "A Hamilton County license"], correctIndex: 2, explanation: "A certificate of veterinary inspection to bring a camelid into Indiana (lesson 10).", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "Why does lesson 28 say to find a vet before the animals arrive?", options: ["Vets must sign off on every single animal sale", "Vets set the zoning rules", "Vets shear the animals", "Many producers cannot find one for sheep"], correctIndex: 3, explanation: "Many producers cannot find a vet who knows sheep, and every vaccine plan and drug decision is the vet's.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "Which animals does lesson 28 say need a shearer booked every year?", options: ["Wool sheep and alpacas", "Hair sheep and yaks", "Only yaks", "Only hair sheep"], correctIndex: 0, explanation: "A shearer is booked every year for wool sheep and alpacas, and for llamas where summers are hot.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "When does lesson 28 add llamas to the shearing list?", options: ["Only before a sale", "Where summers are hot", "Every third year", "Never; llamas shed"], correctIndex: 1, explanation: "UMass: a llama's health benefits from shearing where summers are hot.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "What Indiana fleece value at the 2025 commodity price does lesson 28 recall?", options: ["About $9.52", "About $28.50", "About $2.85", "About $0.50"], correctIndex: 2, explanation: "About $2.85 for an Indiana fleece; $9.52 is the US average fleece.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "What does lesson 28 say to do if any answer is \"I do not know yet\"?", options: ["Buy the animals now and learn about it later", "Skip that question", "Ask the census office", "Find it out before the animals come"], correctIndex: 3, explanation: "That is the next thing to find out, before the animals come rather than after.", sourceLessonSlug: "should-you-keep-one" },
          { prompt: "Which lessons does lesson 28 point to for the zoning part of the land question?", options: ["Lessons 26 and 27", "Lessons 4 and 9", "Lessons 6 and 10", "Lessons 2 and 11"], correctIndex: 0, explanation: "The ordinance and its official map are lessons 26 and 27; company is lessons 4 and 9.", sourceLessonSlug: "should-you-keep-one" },
        ],
      },
    },
    {
      slug: "final-quiz",
      title: "Final quiz · Raising Animals for Yarn",
      section: S7,
      body: QUIZ_INTRO,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          { prompt: "Which law, rather than the wool grade standard, lets alpaca and llama fiber count as wool?", options: ["The Wool Products Labeling Act", "The Animal Welfare Act", "The scrapie rule, 9 CFR 79", "Indiana's right-to-farm statute, IC 32-30-6"], correctIndex: 0, explanation: "The grade standard defines wool as the fiber of sheep; the Wool Products Labeling Act lets wool include camel, alpaca, llama and vicuna fiber.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "Which of these is a job this course leaves to a veterinarian?", options: ["Reading the federal scrapie rule", "Giving a drug to an animal", "Finding a zoning map", "Comparing manure tables"], correctIndex: 1, explanation: "No lesson tells you how to give a drug or treat an animal; those belong to a veterinarian.", sourceLessonSlug: "fiber-as-a-crop" },
          { prompt: "How did Indiana's 2025 average fleece compare with the US average?", options: ["Heavier: 6.8 against 5.7 pounds", "The same: 6.8 pounds each", "Lighter: 5.7 against 6.8 pounds", "Heavier: 9 against 6.8 pounds"], correctIndex: 2, explanation: "NASS: Indiana averaged 5.7 pounds a fleece in 2025, the US 6.8.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "Which source would you read for a count of US farms with sheep, rather than an estimate?", options: ["The January NASS report", "Purdue's sheep budget", "The APHIS scrapie progress report", "The Census of Agriculture"], correctIndex: 3, explanation: "The yearly NASS report is a survey; the five-yearly Census of Agriculture is the count.", sourceLessonSlug: "the-us-flock-in-numbers" },
          { prompt: "Which animal has no code on the 2022 census report form?", options: ["The yak", "The alpaca", "The llama", "The bison"], correctIndex: 0, explanation: "Alpacas, llamas and bison have codes; the yak falls under Other livestock.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "What happened to US alpaca and llama counts between the 2017 and 2022 censuses?", options: ["Both rose", "Both fell", "Alpacas rose, llamas fell", "Neither changed"], correctIndex: 1, explanation: "Alpacas fell about 18 percent and llamas about 25 percent.", sourceLessonSlug: "alpacas-llamas-and-the-uncounted-yak" },
          { prompt: "Why can't a sheep keeper wait for a sheep to look sick before acting, per Purdue?", options: ["Sheep heal much faster than any keeper notices", "Indiana requires daily inspections", "Sheep may hide pain, injury or disease", "Sick sheep always shed their wool"], correctIndex: 2, explanation: "Sheep are prey animals that may not show obvious signs of pain, injury or disease, so a keeper learns what normal looks like.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "Which mineral warning does Purdue give sheep keepers?", options: ["Sheep need cattle minerals for selenium", "Sheep cannot use salt blocks", "Sheep need ionophores in feed", "Sheep are especially sensitive to copper"], correctIndex: 3, explanation: "Sheep are especially sensitive to copper; feed minerals formulated for sheep.", sourceLessonSlug: "what-a-sheep-needs" },
          { prompt: "How many news reports of people killed by sheep does lesson 5 present?", options: ["Two", "One", "Five", "Twelve"], correctIndex: 0, explanation: "Two: Bolton, Massachusetts (2021) and Waitākere, New Zealand (2024). Two reports are not a statistic.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Which disease does Purdue tie to sheep birth fluids when warning pregnant women?", options: ["Scrapie", "Q fever", "Footrot", "Meningeal worm"], correctIndex: 1, explanation: "Purdue advises pregnant women to minimize exposure to uterine and placental discharges, especially of sheep, because of Q fever.", sourceLessonSlug: "what-can-hurt-the-keeper" },
          { prompt: "Under Indiana's rule, when must a sheep carry official ID even if it never leaves the state?", options: ["Before its first shearing on the home farm, each year", "Before a vet visit with no sale", "Before it is commingled with another flock", "Before it turns 30 days old"], correctIndex: 2, explanation: "345 IAC 5-4-2 requires ID on change of ownership, before commingling, before an exhibition and when moved to a market.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Which rule text does lesson 6 say to check against the official Indiana code before relying on it?", options: ["9 CFR part 79, from eCFR", "The APHIS 2019 guide", "IC 13-11-2-40", "345 IAC, read on the LII copy"], correctIndex: 3, explanation: "The course read 345 IAC on the Legal Information Institute's copy, which has no \"current through\" date.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Which figures show scrapie's fall among sheep sampled at US slaughter?", options: ["1 in 379 then, under 1 in 66,000 now", "1 in 30 then, 1 in 379 now", "1 in 66,000 then, 1 in 379 now", "Half then, a quarter now"], correctIndex: 0, explanation: "1 in 379 in 2002 and 2003, fewer than 1 in 66,000 since the last positive.", sourceLessonSlug: "scrapie-federal-and-indiana" },
          { prompt: "Which body's mulesing policy does lesson 7 read?", options: ["The American Veterinary Medical Association", "The Australian Veterinary Association", "The American Sheep Industry Association", "The Livestock Conservancy"], correctIndex: 1, explanation: "The course reads the AVA's 2026 policy; the AVMA's pages could not be read.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "Who does lesson 7 say decides whether and how a lamb is docked or castrated?", options: ["The county zoning office", "The Animal Welfare Act", "You and your veterinarian", "The AVA's policy, ratified in 2026"], correctIndex: 2, explanation: "The lesson teaches what each body says, not a procedure; the decision is made with your veterinarian.", sourceLessonSlug: "welfare-and-mulesing" },
          { prompt: "Which Critical breed does lesson 8 say may be spun directly from the raw fleece?", options: ["Cotswold", "Gulf Coast Native", "Leicester Longwool", "Navajo-Churro"], correctIndex: 3, explanation: "The Livestock Conservancy says Navajo-Churro fleece, double coated and low in lanolin, may be spun directly from the raw fleece.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "Who said there is a continuous need for new sheep shearers?", options: ["The Purdue Sheep Unit's manager", "The AVA's president", "An APHIS veterinarian", "A BOAH officer who handles scrapie tags"], correctIndex: 0, explanation: "Purdue Extension News quoted the Sheep Unit's manager.", sourceLessonSlug: "breeds-and-shearers" },
          { prompt: "In both the UMass report and the Vallejo case, what killed alpacas?", options: ["Coyotes", "Dogs", "Heat stress", "Meningeal worm"], correctIndex: 1, explanation: "UMass reports deaths from the dog next door or stray dogs; in Vallejo, two Huskies dug under a fence.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "Which hay do both Merck and NCAT prefer for camelids?", options: ["Alfalfa hay", "Clover hay", "Grass hay", "Legume hay"], correctIndex: 2, explanation: "Grass hay is the base; NCAT says grass hays are better than alfalfa, and Merck warns legumes may contribute to obesity.", sourceLessonSlug: "alpaca-and-llama-needs" },
          { prompt: "Which ingredient found in many cattle feeds is highly toxic to camelids?", options: ["Selenium, a mineral", "Alfalfa, a legume", "Salt, a mineral", "Monensin, an ionophore"], correctIndex: 3, explanation: "Merck: ionophores such as monensin, found in many cattle feeds, are highly toxic to camelids.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Which wild animal should a camelid keeper keep out, to prevent meningeal worm?", options: ["White-tailed deer", "Coyotes", "Raccoons", "Wild turkeys"], correctIndex: 0, explanation: "The white-tailed deer is meningeal worm's natural host; keep deer out and clear ground cover for snails and slugs.", sourceLessonSlug: "camelid-health-and-indiana-rules" },
          { prompt: "Who sets the US alpaca fiber grades this course describes?", options: ["USDA, in its 1968 standard for grades of wool", "The Alpaca Owners Association, voluntarily", "FTC, in 16 CFR part 300", "ICAR, as a federal rule"], correctIndex: 1, explanation: "The AOA's standard is voluntary; no federal grade for alpaca fiber was found.", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "What does the SARE fiber infographic say adds cost to fiber?", options: ["Each pound of raw fleece sold", "Each grade finer than 20 microns", "Each step away from the animal", "Each year the animal is kept"], correctIndex: 2, explanation: "\"Each step the fiber takes away from the animal adds a cost to the final product.\"", sourceLessonSlug: "camelid-fiber-and-grading" },
          { prompt: "Why does lesson 12 say to hold both facts about yaks and heat?", options: ["Yaks sweat freely in heat", "FAO measured every herd in Indiana in 2003", "Yaks graze only at night", "Indiana summers are warm, yet herds coped"], correctIndex: 3, explanation: "Indianapolis is far warmer than yak country, yet FAO's survey found heat stress mentioned but not a problem in hot, low-altitude herds.", sourceLessonSlug: "the-yak" },
          { prompt: "How does the course treat the Woolly Yak Ranch's statement that it will offer raw fiber?", options: ["As the ranch's own statement", "As a fact it confirmed on a site visit", "As a federal record", "As false advertising"], correctIndex: 0, explanation: "Every ranch line is the ranch's own statement; the course has not visited.", sourceLessonSlug: "the-yak" },
          { prompt: "Which three things does lesson 13 say a keeper does around shearing?", options: ["Shear wet, on bare ground, tag after", "Shear dry, use a clean floor, tag first", "Shear damp, second-cut, bag together", "Shear dry, on gravel, skip tagging"], correctIndex: 1, explanation: "Shear only dry wool, on a clean surface, and tag dung locks first, bagging them separately.", sourceLessonSlug: "shearing-day" },
          { prompt: "Why should wool never be tied with sisal twine?", options: ["It cuts the fleece in transit", "It is banned by the 1968 AMS wool standard", "Its fibers will not take a wool dye", "It rots in damp storage"], correctIndex: 2, explanation: "Stray plant fibers will not take a wool dye and cannot be removed from yarn or fabric.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "Which side of a fleece faces out when it is rolled?", options: ["The tip side", "The belly side", "The britch side", "The flesh side"], correctIndex: 3, explanation: "USDA in 1933 and 1977 and the 2021 code all say to roll a fleece flesh side out.", sourceLessonSlug: "skirting-and-packing-a-fleece" },
          { prompt: "What order does section 4 follow from fleece to yarn?", options: ["Skirt, scour, card or comb, spin, ply", "Spin, scour, card, skirt, ply", "Card, skirt, ply, scour, spin", "Ply, spin, comb, scour, skirt"], correctIndex: 0, explanation: "Skirting, scouring, carding or combing, spinning, then plying.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "What separates combing from carding?", options: ["Combing adds twist to the fibers", "Combing removes the short fibers", "Combing washes out the grease", "Combing is done before scouring"], correctIndex: 1, explanation: "Combing removes short fibers and lays long ones parallel; carding straightens and removes chaff.", sourceLessonSlug: "scouring-carding-and-spinning" },
          { prompt: "Which 1935 mordant does this course refuse to recommend, and why?", options: ["Alum: it is fatal if inhaled", "Tannin: it dulls every color", "Chrome: it may cause cancer", "Copperas: it bleaches wool"], correctIndex: 2, explanation: "Chrome is potassium dichromate, labeled \"May cause cancer\" and \"Fatal if inhaled\".", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "Which dye needs no mordant, per the 1935 bulletin?", options: ["Cochineal", "Onion skins", "Turmeric", "Indigo"], correctIndex: 3, explanation: "Indigo is a vat dye and needs no mordant.", sourceLessonSlug: "natural-dyeing-1935" },
          { prompt: "Which is finer, grade 80's or grade 64's?", options: ["Grade 80's", "Grade 64's", "They are the same", "It depends on breed"], correctIndex: 0, explanation: "80's is 17.70 to 19.14 microns; 64's is 20.60 to 22.04. The higher count is finer.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "Which regulation still applies the USDA wool standard at the border?", options: ["16 CFR 300.19", "19 CFR 151.76", "9 CFR 79.3", "7 CFR 205.203"], correctIndex: 1, explanation: "19 CFR 151.76(a): Customs grades imported wool by the Secretary of Agriculture's standards.", sourceLessonSlug: "the-micron-grades" },
          { prompt: "Why must you check units before comparing two manure tables?", options: ["One may round to whole numbers only", "One may use metric tons, the other not", "One may give oxides, the other elements", "One may be from a census, not a lab"], correctIndex: 2, explanation: "Maryland gives phosphorus and potassium as oxides, Ontario as elements: same data, different numbers.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Which manure table lacks any sheep, alpaca, llama or yak row?", options: ["Ontario's 2021 factsheet", "Maryland's unusual livestock table", "Ontario's 2013 factsheet", "The NRCS as-transferred table"], correctIndex: 3, explanation: "The NRCS as-transferred table has beef, poultry, dairy, equine and swine only.", sourceLessonSlug: "what-the-manure-carries" },
          { prompt: "Which waste-wool finding comes from an open-access study rather than a paywalled abstract?", options: ["Wool pellets delayed drought stress", "Wool gave chard 2 to 5 times the yield", "Wool raised foxglove yields", "Wool acts as slow-release fertilizer"], correctIndex: 0, explanation: "MacKintosh et al. (2026) is CC BY; the yield and slow-release findings are from Zheljazkov's paywalled papers.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "Why does lesson 19 say the 2009 waste-wool yield figures need care?", options: ["They come from field plots, not pots", "They compare with unamended pots", "They were measured on yak wool", "They measure only nitrogen, not yield"], correctIndex: 1, explanation: "The comparison is with pots that got nothing, not with pots given another fertilizer.", sourceLessonSlug: "waste-wool-in-the-garden" },
          { prompt: "Which count does lesson 20 use for the 1933 to 1936 fall in Navajo sheep units?", options: ["The 1937 Senate subcommittee's tally", "The Navajo Tribal Council's own census", "The BAI dipping records", "The 2022 Census of Agriculture"], correctIndex: 2, explanation: "The Bureau of Animal Industry's dipping records, from the Interior annual reports; the lesson never mixes counts.", sourceLessonSlug: "the-reduction-in-the-federal-record" },
          { prompt: "Which source carries the 1937 Navajo testimony that lesson 21 quotes?", options: ["The Senate hearing record", "A Navajo newspaper", "The 1942 primer", "Indians at Work"], correctIndex: 3, explanation: "The testimony reaches us only through Indians at Work, a government newsletter.", sourceLessonSlug: "navajo-voices-and-federal-framing" },
          { prompt: "Which government goal does lesson 22 trace in the 1930s records?", options: ["Breeding a new sheep for rugs and market", "Restoring the Churro as a pure, separate breed", "Replacing all sheep with cattle", "Ending wool sales off the reservation"], correctIndex: 0, explanation: "The 1935 laboratory aimed at a breed for Navajo rugs and the open market; the 1937 report gives Wingate's object as rug wool and more mutton.", sourceLessonSlug: "the-sheep-themselves" },
          { prompt: "In which state's narratives do Felix Haywood, Carey Davenport and William Moore appear?", options: ["Georgia", "Texas", "Mississippi", "Arkansas"], correctIndex: 1, explanation: "All three are in Vol. XVI, the Texas narratives.", sourceLessonSlug: "black-shepherds-and-what-is-missing" },
          { prompt: "What did Purdue's worked example show about choosing an enterprise?", options: ["The couple chose yaks for fiber", "Sheep paid best on 40 acres", "The couple chose cattle over sheep", "Alpacas beat cattle and sheep"], correctIndex: 2, explanation: "A couple with 40 acres and $25,000 chose a cow-calf enterprise: the tool is for deciding.", sourceLessonSlug: "money-time-and-help" },
          { prompt: "Absent an at-large ordinance, whose duty is it to keep livestock off a neighbor's land in Indiana?", options: ["The neighbor's", "The county's", "The township's", "The keeper's"], correctIndex: 3, explanation: "A neighbor can recover damages without proving a lawful fence: the keeper's duty is to keep animals in.", sourceLessonSlug: "indiana-law-a-keeper-meets" },
          { prompt: "What lesson does the Pahl case teach a buyer?", options: ["Check the zoning with the plan commission", "Trust the realtor's listing if it says Ag-Res", "Trust the assessor's code", "Rely on right to farm"], correctIndex: 0, explanation: "The Pahl buyers trusted a listing and an assessor code and did not check with the Plan Commission.", sourceLessonSlug: "an-alpaca-case-and-three-ordinances" },
          { prompt: "Which step of the find-your-county-rule assignment adds the statewide layer?", options: ["Step 2", "Step 7", "Step 4", "Step 8"], correctIndex: 1, explanation: "Step 7 adds the CFO test, the fence law, and premises ID and scrapie tags for sheep.", sourceLessonSlug: "find-your-county-rule" },
          { prompt: "Which question in lesson 28 covers who will buy the fiber?", options: ["The money question", "The land question", "The market question", "The law question"], correctIndex: 2, explanation: "The seventh question, a market: who will buy the fiber, or what you will make with it.", sourceLessonSlug: "should-you-keep-one" },
        ],
      },
    },
  ],
};
