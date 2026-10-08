import type { AuthoredCourse } from "./authored-course";

// "Manure and Compost" (Farm & Garden, also listed under Science & Math). Slug: `manure-and-compost`.
// Series `the-calorie-loop` ("The Calorie Loop"), the first course in it. NO series code yet:
// `check-series-codes` forbids coding a "00" that is the only course in its series, so the code LOOP
// (LOOP-00 for this course) is added when the second course in the series ships.
//
// RESEARCH TIER 2 (docs/course-method/README.md): pathogens, food safety and two federal rules. The
// rubric sends health, safety and law to Tier 2 whatever the score.
// Brief:   plans/future-courses/farm-and-garden/2026-10-05-manure-and-compost-brief.md
//          (approved by BAM 2026-10-06; his answers are in its section 8 and override earlier sections).
// Dossier: plans/future-courses/farm-and-garden/2026-10-06-manure-and-compost-dossier.md
//          Its section 4 and the VERIFIED lines of its section 2 are the ONLY facts any lesson asserts.
//          Numbers are quoted exactly as the dossier gives them, in the same units and on the same basis.
// Visibility: PUBLIC, BAM's decision 2026-10-06. Free by default (no price set here).
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, free to host: the NRCS handbook chapters (Part 651 ch. 4; Part 637 ch. 2), the CFR
//    (7 CFR 205.203; 21 CFR 112.53 to 112.56; 40 CFR 503 app. B), the CDC pages, the 2005 NRCS and
//    Fairbanks SWCD dog-waste fact sheet (TEXT only: its illustrations are by Ellen Million and Noël
//    Bell and are not hosted), Carver's 1905 and 1936 bulletins (NAL: not in copyright; the 1936 one
//    carries no notice), King (Project Gutenberg 5350) and Darwin (Project Gutenberg 2355). Part 637's
//    Appendix 2A table is "adapted from" NRAES-54: its numbers are used, the table is not hosted as an
//    image. Part 651's dairy, beef, swine and poultry tables draw on ASAE D384.2 (2005); its veal, lamb
//    and rabbit tables are adapted from the 1992 AWMFH, and every lesson that uses them says so.
//  - Tier B, cite and link, never rehost: Purdue Extension (ID-182-W, The Scoop on Poop, HO-71-W,
//    HO-324-W, ABE-166-W, ID-101, AY-277, FS-44-W, the county-office and transformation pages), Iowa
//    State Extension, IDEM, the OISC copies of 355 IAC 7, 8 and 10 (quote and link, do not host), the
//    Extension Foundation list, and NGSS.
//  - BAM's purchased books (Mollison, Perma-culture Two, the No Grid book, the Reese books) are NOT
//    used as sources, are not quoted or paraphrased, and do not appear in the course text (gate A4).
//
// INDIANA ANCHORING (BAM's answer 2, 2026-10-06). Section 4 is built from Purdue Extension's guides and
// the Indiana rules (355 IAC 8, IDEM), and lesson 17 is an assignment: find your county office, name
// its horticulture or agriculture educator, find its compost guidance. Purdue announced on 2026-06-18
// a move to 12 regions; whether each county keeps its own educator is UNVERIFIED, so the assignment
// accepts a regional educator. Learners outside Indiana use the Extension Foundation's state list.
//
// STANDARDS PLAN (the orchestrator adds the mapping in src/lib/standards/ in this branch): NGSS
// 5-LS2-1 and MS-LS2-3 ("develop a model ..."), claimed PARTIAL, with the learner-built model in
// lesson 22 (`build-your-own-loop`) as the modelling evidence and lessons 1 and 9 as the matter
// cycling content; HS-LS2-3 (aerobic versus anaerobic conditions) from lessons 9, 10 and 12, also
// partial. HS-LS2-4 is NOT claimed: the course does not teach trophic-level energy.
//
// REVIEWER: BAM is finding a Master Gardener or an extension educator to read the course. The hold
// reason names them before the course is vetted (rubric gate E3, in spirit, for a practice course).
//
// STRUCTURE. The brief's draft had seven sections (0 to 6) plus a 4a. Section 0 ("What a loop is") is
// merged into section 1 as its first lesson, and 4a ("Find your extension office") into section 4 as
// its last lesson, because on their own each was too thin to carry a 40-question pool without trivia.
// Six sections remain; each teaching section has its own quiz, and section 6 carries the final.
//
// WHAT THIS COURSE DELIBERATELY DOES NOT TEACH, and every refusal is content, not a disclaimer:
//  1. Composting human waste. It is regulated (21 CFR 112.53) and out of scope; lesson 8 says so and
//     points to off-grid-survival's sanitation lesson.
//  2. Husbandry, and any composting system larger than a home one. Farm-scale composting (Part 637,
//     dead-animal composting) is described as what a farm does, never as a how-to.
//  3. A home application rate in pounds per square foot. No source in the dossier gives one; the course
//     teaches the soil test and sends the learner to their extension office instead.
//  4. Any statement of which growers each federal rule legally covers. That was not verified, so the
//     federal rules are taught as benchmarks, and Indiana's own thresholds as the concrete test.
//  5. The 90 and 120 days as food-safety law. They are the organic rule's intervals, and FDA's produce
//     safety rule leaves its matching paragraph "[Reserved]". Both are taught side by side.
//
// House style, matching keeping-a-house-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; recallContent on each teaching lesson after the first, quizzing the lesson
// before it; an APA 7 `## Sources` block on every lesson, each entry with its locator (printed page AND
// PDF page where they differ, the CFR paragraph, the table number, the chapter); a quiz per teaching
// section pooled to the Tier 0 density target, serving 5, passing 80, shuffled; a final pooling 40+
// and serving 10, placed LAST. Correct options are written SHORT and distractors specific and longer,
// so check-longest-option passes by construction. No em or en dashes anywhere, including inside
// quotations: where a source's sentence carries one (the NRCS "wrung-out sponge" line, CDC's day and
// week ranges), the quotation is cut and the rest is given in the course's own words.

/** Short safety note at the top of every lesson that touches pathogens or application. */
const SAFETY = `> **Safety note.** This lesson is educational. Your extension office, local rules and any product label come before it. Wear gloves when you handle manure, compost or garden soil, and wash your hands afterward.`;

// ── Source helpers. Locators follow the dossier's page offsets. ──────────────────────────────────
const NRCS_651_URL = "https://directives.nrcs.usda.gov/sites/default/files2/1712930943/17165.pdf";
const NRCS_637_URL =
  "https://directives.nrcs.usda.gov/sites/default/files2/1720464003/Chapter%202%20-%20Composting.pdf";
const DOG_WASTE_URL =
  "https://www.epa.gov/system/files/documents/2026-06/usda-fact-sheet-composting-dog-waste-2005-12.pdf";

/** NRCS Part 651 ch. 4. Printed page 4-N is PDF page N+8. */
const nrcs651 = (loc: string, pdfPage: number) =>
  `U.S. Department of Agriculture, Natural Resources Conservation Service. (2008). *Agricultural waste characteristics* (Part 651, Agricultural Waste Management Field Handbook, Chapter 4; 210-VI-AWMFH). Its dairy, beef, swine and poultry tables draw on ASAE D384.2 (2005); its veal, lamb and rabbit tables are adapted from the 1992 AWMFH. ${loc}. ${NRCS_651_URL}#page=${pdfPage}`;
/** NRCS Part 637 ch. 2. Printed page 2-N is PDF page N+8; page 2A-1 is PDF page 87. */
const nrcs637 = (loc: string, pdfPage: number) =>
  `U.S. Department of Agriculture, Natural Resources Conservation Service. (2010). *Composting* (Part 637, National Engineering Handbook, Chapter 2; 210-VI-NEH, Amend. 40). ${loc}. ${NRCS_637_URL}#page=${pdfPage}`;
/** The 2005 dog-waste fact sheet. Printed page = PDF page minus 2. */
const dogWaste = (loc: string, pdfPage: number) =>
  `U.S. Department of Agriculture, Natural Resources Conservation Service, & Fairbanks Soil and Water Conservation District. (2005). *Composting dog waste*. ${loc}. ${DOG_WASTE_URL}#page=${pdfPage}`;
const ORGANIC = (para: string) =>
  `Soil fertility and crop nutrient management practice standard, 7 C.F.R. § 205.203${para} (2025). https://www.ecfr.gov/current/title-7/section-205.203`;
const PRODUCE = (section: string, para: string) =>
  `Standards for the growing, harvesting, packing, and holding of produce for human consumption, 21 C.F.R. § ${section}${para} (2025). https://www.ecfr.gov/current/title-21/section-${section}`;
const BIOSOLIDS =
  "Pathogen treatment processes, 40 C.F.R. pt. 503, app. B, paragraphs A.4 and B.1 (2026). https://www.ecfr.gov/current/title-40/part-503/appendix-Appendix%20B%20to%20Part%20503";
const CDC_TOXO =
  "Centers for Disease Control and Prevention. (2024a, January 30). *Preventing toxoplasmosis*. https://www.cdc.gov/toxoplasmosis/prevention/index.html";
const CDC_TOXOCARA =
  "Centers for Disease Control and Prevention. (2024b, April 19). *How toxocariasis spreads*. https://www.cdc.gov/toxocariasis/spreads/index.html";
const IOWA =
  "Fillius, D., Rindels, S., & Steil, A. (2023). *Using manure in the home garden*. Iowa State University Extension and Outreach. https://yardandgarden.extension.iastate.edu/how-to/using-manure-home-garden";
const ID182 = (loc: string) =>
  `Lerner, B. R. (2020). *Managing yard wastes: Clippings and compost* (ID-182-W). Purdue Extension. ${loc}. https://www.extension.purdue.edu/extmedia/ID/ID-182.pdf`;
const SCOOP =
  "Lerner, R. (2006, rev. 2017). *The scoop on poop*. Purdue Consumer Horticulture. https://www.purdue.edu/hla/sites/yardandgarden/the-scoop-on-poop/";
const HO71 = (loc: string) =>
  `Daniel, K., Lerner, R., & Ackerson, J. (2018). *Collecting soil samples for testing* (HO-71-W). Purdue Extension. ${loc}. https://www.extension.purdue.edu/extmedia/HO/HO-71-W.pdf`;
const HO324 =
  "Meyers, S., Lerner, R., & Emanuel, C. (2020). *Cover crops in the home garden* (HO-324-W). Purdue Extension. Pages 1 and 5. https://www.extension.purdue.edu/extmedia/HO/HO-324-W.pdf";
/** ABE-166-W: every use in this course is the title or the "several-fold" sentence, both on page 1. */
const ABE166 =
  "Ni, J.-Q., & Lim, T. T. (2022, updated 2023). *Manure characteristics, testing, and sampling* (ABE-166-W). Purdue Extension. Page 1. https://www.extension.purdue.edu/extmedia/ABE/ABE-166-W.pdf";
/** ID-101 is an unpaginated HTML page, so the locator is its section heading. */
const ID101 = (loc: string) =>
  `Sutton, A. L., Jones, D. D., Joern, B. C., & Huber, D. M. (1994). *Animal manure as a plant nutrient resource* (ID-101). Purdue Cooperative Extension Service. ${loc}. https://www.extension.purdue.edu/extmedia/id/id-101.html`;
/** AY-277 is an unpaginated HTML page, so the locator is its section heading. */
const AY277 = (loc: string) =>
  `Joern, B. C., & Brichford, S. L. (1993). *Calculating manure and manure nutrient application rates* (AY-277). Purdue Cooperative Extension Service. ${loc}. https://www.extension.purdue.edu/extmedia/ay/ay-277.html`;
const FS44 =
  "VanNorman, C., & Feng, Y. (2020). *Food safety implications for raising backyard poultry* (FS-44-W). Purdue Extension. Page 3. https://www.extension.purdue.edu/extmedia/FS/FS-44-W.pdf";
const IAC8 = (loc: string) =>
  `Office of Indiana State Chemist. (n.d.-a). *Fertilizer material use, distribution, and recordkeeping*, 355 Ind. Admin. Code 8 (OISC copy of the 2018 readoption). ${loc}. https://www.oisc.purdue.edu/fertilizer/pdf/A00080.pdf`;
const IAC7 =
  "Office of Indiana State Chemist. (n.d.-b). [Certification of fertilizer applicators and users of confined feeding operation manure], 355 Ind. Admin. Code 7 (OISC copy). Section 7-1-2. https://www.oisc.purdue.edu/fertilizer/pdf/A00070.pdf";
const IDEM_COMPOST =
  "Indiana Department of Environmental Management. (n.d.-a). *Yard waste and composting facilities*. https://www.in.gov/idem/waste/waste-industries/yard-waste-and-composting-facilities";
const IDEM_CFO =
  "Indiana Department of Environmental Management. (n.d.-b). *About confined feeding operations*. https://www.in.gov/idem/cfo/about-confined-feeding-operations";
const IDEM_CFO_MANURE =
  "Indiana Department of Environmental Management. (n.d.-c). *CFO manure management*. https://www.in.gov/idem/cfo/manure-management/";
const CARVER_1905 = (loc: string) =>
  `Carver, G. W. (1905). *How to build up worn out soils* (Bulletin No. 6). Tuskegee Normal and Industrial Institute Experiment Station. ${loc}. https://archive.org/details/CAT31355455`;
const CARVER_1936 = (loc: string) =>
  `Carver, G. W. (1936). *How to build up and maintain the virgin fertility of our soils* (Bulletin No. 42). Tuskegee Institute Press. ${loc}. https://archive.org/details/CAT31355516`;
const KING =
  "King, F. H. (1911). *Farmers of forty centuries; or, permanent agriculture in China, Korea and Japan*. Project Gutenberg 5350. Chapter IX, \"The Utilization of Waste\", including Figs. 116 and 117. https://www.gutenberg.org/ebooks/5350";
const DARWIN = (loc: string) =>
  `Darwin, C. (1881). *The formation of vegetable mould, through the action of worms*. Project Gutenberg 2355. ${loc}. https://www.gutenberg.org/ebooks/2355`;
const PURDUE_COUNTY =
  "Purdue Extension. (n.d.-a). *County office*. https://extension.purdue.edu/about/county-office.html";
const PURDUE_TRANSFORM =
  "Purdue Extension. (n.d.-b). *Transformation*. https://extension.purdue.edu/about/transformation.html";
const PURDUE_REGIONS =
  "Purdue Extension. (2026, June 18). *Purdue Extension announces regional operations leaders*. https://extension.purdue.edu/news/2026/06/purdue-extension-announces-regional-operations-leaders.html";
const EXT_FOUNDATION =
  "Extension Foundation. (n.d.). *Find Cooperative Extension in your state*. https://extension.org/find-cooperative-extension-in-your-state/";

const S1 = "Section 1 · The loop, and manure animal by animal";
const S2 = "Section 2 · What could be in it";
const S3 = "Section 3 · Making it safe: composting";
const S4 = "Section 4 · Using it: how much, where, when (Indiana)";
const S5 = "Section 5 · Where the practice came from";
const S6 = "Section 6 · Your own loop";

export const MANURE_AND_COMPOST_COURSE: AuthoredCourse = {
  title: "Manure and Compost",
  description:
    "Four questions about any pile of manure or compost: what is in it, what could be in it, how to make it safe, and how much to put where and when. This course answers them from the documents that set the numbers: the USDA Natural Resources Conservation Service's manure tables and composting chapter, the federal organic rule (7 CFR 205.203), FDA's produce safety rule (21 CFR part 112), CDC's guidance on two parasites, and Purdue Extension's guides for Indiana gardens. It reads the two federal rules side by side, so you can see that the familiar 90 and 120 days come from the organic rule while FDA's rule leaves that interval blank. It explains why dog, cat and pig manure stay out of a food garden, what 131 °F for three days actually asks of a pile, and how to find your own extension office. It reads George Washington Carver's 1905 and 1936 bulletins, F. H. King and Charles Darwin as primary sources. And it ends with you building a model of your own loop, on a balcony, a backyard or an acre. Educational only: your extension office and your local rules come first.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: The loop, and manure animal by animal
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-loop-is",
      title: "1 · What a loop is, and the two rules this course reads",
      section: S1,
      body: `In the introduction to his 1881 book on earthworms, Charles Darwin wrote a sentence worth reading slowly: "all the vegetable mould over the whole country has passed many times through, and will again pass many times through, the intestinal canals of worms" (Darwin, 1881, Introduction).

The soil under a garden has been through an animal's gut, many times. Matter does not travel one way from soil to plate. It goes around.

**The loop in four steps.** Follow the nutrients.

1. **Feed goes into an animal.** A Purdue bulletin on manure rates puts a number on what comes back out: "livestock excrete 70-80 percent of the nitrogen, 60-85 percent of the phosphorus, and 80-90 percent of the potassium fed to them" (Joern & Brichford, 1993).
2. **So manure carries most of it.** Another Purdue bulletin's title says what that makes manure: *Animal manure as a plant nutrient resource* (Sutton et al., 1994).
3. **Decomposers break it down.** The USDA Natural Resources Conservation Service (NRCS) defines the managed version: "Composting is the controlled aerobic decomposition of organic matter by microorganisms into a stable, humus-like soil amendment" (NRCS, 2010, p. 2-1). Aerobic means with oxygen; FDA's produce rule writes "aerobic (i.e., oxygenated)" (21 C.F.R. § 112.54(b)(1)). Outside a compost pile, Darwin's worms pass the soil itself through their guts.
4. **The soil feeds the next crop**, and the crop feeds the next animal or person.

**The loop leaks.** Nitrogen can leave as ammonia gas soon after manure is spread (Sutton et al., 1994), and ammonia can leach out of a compost pile into water (NRCS, 2010, p. 2-8). Sections 3 and 4 show both, and link to the two river courses that follow that water downstream.

**The four questions.** For any pile of manure or compost, this course teaches you to ask: what is in it, what could be in it, how do you make it safe, and how much goes where, and when.

**The two rules.** Two federal documents set the numbers people quote most, and they do not agree.

- The organic rule says raw manure must be composted unless it goes on a crop not meant for people, or is worked into the soil at least 120 days before harvest when the edible part touches the soil, or 90 days when it does not (7 C.F.R. § 205.203(c)(1)).
- FDA's produce safety rule has a paragraph where the waiting time would go for untreated manure applied in a way that minimizes contact with the crop. It reads "[Reserved]" (21 C.F.R. § 112.56(a)(1)(i)). For untreated manure kept from touching the crop during or after spreading, the next paragraph says "0 days" (21 C.F.R. § 112.56(a)(1)(ii)).

So "wait 90 or 120 days" is the organic rule's number. FDA's food-safety rule has set no number there. Section 4 reads both.

**What this course leaves out.** Raising animals. Composting human waste, which is regulated (21 C.F.R. § 112.53) and gets one lesson explaining why it is out of scope. Anything bigger than a home compost system. This is the first course in a series called The Calorie Loop; courses on trees and on raising animals are planned for it.

:::reveal Where do the 90-day and 120-day manure intervals come from? ||| The organic rule, 7 CFR 205.203(c)(1). For untreated manure applied in a way that minimizes contact with the crop, FDA's produce safety rule leaves the matching interval "[Reserved]" in 21 CFR 112.56(a)(1)(i).

:::reveal What share of the nitrogen fed to livestock comes back out in manure, according to Purdue's AY-277? ||| 70 to 80 percent. The same bulletin gives 60 to 85 percent for phosphorus and 80 to 90 percent for potassium.

## Sources
- ${DARWIN("Introduction")}
- ${AY277("Opening paragraph, before the heading \"Determining Manure Nutrient Content\"")}
- ${ID101("Title; section \"Method of Land Application\", after Table 2")}
- ${nrcs637("Printed pp. 2-1 and 2-8 (PDF pp. 9 and 16)", 9)}
- ${ORGANIC("(c)(1)")}
- ${PRODUCE("112.54", "(b)(1)")}
- ${PRODUCE("112.56", "(a)(1)")}
- ${PRODUCE("112.53", "")}`,
    },
    {
      slug: "as-excreted",
      title: "2 · \"As excreted\": what the manure tables measure",
      section: S1,
      recallContent: [
        {
          prompt: "Name the four steps of the loop from lesson 1.",
          answer:
            "Feed goes into an animal; most of its nitrogen, phosphorus and potassium comes back out in manure; decomposers break the manure down; the soil feeds the next crop.",
        },
        {
          prompt: "What does FDA's produce safety rule say in the place where a waiting time would go for untreated manure applied in a way that minimizes contact with the crop?",
          answer: "\"[Reserved]\" (21 CFR 112.56(a)(1)(i)). No interval is set.",
        },
      ],
      body: `A free federal set of manure numbers sits in one chapter of an NRCS field handbook, *Agricultural Waste Characteristics* (NRCS, 2008). Its tables give pounds of manure, moisture, and nutrients for cattle, swine, poultry, lambs and horses. The handbook takes most of them from an engineering standard, ASAE D384.2 (2005). Before reading a single row, learn the three rules for reading any of them.

**Rule 1: the numbers describe manure the moment it leaves the animal.** The handbook's definition: "The term as excreted refers to feces and urine prior to any changes due to dilution water addition, drying, volatilization, or other physical, chemical, or biological processes" (NRCS, 2008, p. 4-5). Volatilization means escaping as a gas; Purdue uses the word for ammonia leaving freshly spread manure (Sutton et al., 1994). So the tables describe nothing you will shovel. A pile that has sat, dried, been rained on or composted is a different material.

How different? The handbook says beef feedlot manure's moisture "drops significantly over time from its as excreted 90 percent to about 30 percent" (NRCS, 2008, p. 4-15).

**Rule 2: most rows are per 1,000 pounds of animal, not per animal.** "A 1,000-pound AU is 1,000 pounds of live weight, not an individual animal. For example, a 1,400-pound Holstein cow is 1.4 AU" (NRCS, 2008, p. 4-8). AU is an animal unit.

You can check the two bases against each other. Table 4-5 gives a lactating dairy cow producing 75 pounds of milk a day 108 pounds of manure per day per 1,000 pounds. Its per-animal table gives a 1,375-pound lactating cow 148 pounds a day. Multiply: 108 × 1.375 is about 148.5. The two tables agree.

**Rule 3: know what the tables leave out.** "Not considered is manure produced by livestock and poultry on pasture or range" (NRCS, 2008, p. 4-9). A cow on grass is outside them. The veal and sheep values are older, "from the 1992 version of the AWMFH" (p. 4-10).

**Book values are a starting point.** A Purdue bulletin warns: "Using book values for manure nutrient estimations can be problematic because measured farm data can vary widely, from a small percentage to several-fold" (Ni & Lim, 2022, p. 1). The handbook itself says that using one of its tables (table 4-16) to set field-specific application rates for a single year's nutrient plan "would be a misuse of the data" (NRCS, 2008, p. 4-23).

So use the tables to compare animals and to know roughly what kind of material you have. Use a test to learn what is in your own pile.

:::reveal What does "as excreted" mean in the NRCS tables? ||| Feces and urine before any dilution, drying, volatilization or other change. The tables describe manure as it leaves the animal, not a pile that has sat.

:::reveal A 1,400-pound Holstein cow counts as how many animal units, and why? ||| 1.4, because an animal unit is 1,000 pounds of live weight, not one animal.

## Sources
- ${nrcs651("Printed pp. 4-5, 4-8 to 4-10, 4-13 (Table 4-5), 4-15 and 4-23 (section 651.0404); PDF pp. 13, 16 to 18, 21, 23 and 31", 13)}
- ${ABE166}
- ${ID101("Section \"Method of Land Application\", after Table 2")}`,
    },
    {
      slug: "manure-animal-by-animal",
      title: "3 · Manure, animal by animal",
      section: S1,
      recallContent: [
        {
          prompt: "What does \"as excreted\" mean in the NRCS manure tables?",
          answer:
            "Feces and urine before any dilution, drying, volatilization or other change: manure as it leaves the animal, not a pile that has sat.",
        },
        {
          prompt: "Why does Purdue's ABE-166-W warn against relying on book values?",
          answer: "Measured farm data can vary widely, from a small percentage to several-fold, so a test of your own manure beats a table.",
        },
      ],
      body: `Here are rows from the NRCS tables (NRCS, 2008). Most draw on ASAE D384.2 (2005); the feeder lamb row is older, adapted from the 1992 version of the handbook (p. 4-22). Every figure is pounds per day per 1,000 pounds of animal, as excreted.

| Animal (NRCS table) | Manure | Nitrogen | Phosphorus | Potassium |
|---|---|---|---|---|
| Dairy cow, lactating, 75 lb milk a day (4-5) | 108 | 0.71 | 0.12 | 0.33 |
| Beef cow in confinement (4-8) | 104 | 0.35 | 0.08 | 0.25 |
| Growing beef calf, 450 to 750 lb (4-8) | 77 | 0.45 | 0.08 | 0.29 |
| Gestating sow (4-10) | 25 | 0.16 | 0.05 | 0.11 |
| Lactating sow (4-10) | 59 | 0.45 | 0.13 | 0.28 |
| Laying hens (4-11) | 57 | 1.1 | 0.33 | 0.39 |
| Broilers (4-11) | 88 | 0.96 | 0.28 | 0.54 |
| Ducks (4-11) | 102 | 1 | 0.35 | 0.50 |
| Feeder lamb (4-13) | 40 | 0.45 | 0.07 | 0.30 |
| Horse, sedentary (4-14) | 51 | 0.18 | 0.026 | 0.05 |
| Horse, exercised (4-14) | 52 | 0.31 | 0.066 | 0.19 |

**Read across a row.** A laying-hen flock weighing 1,000 pounds in total puts out 57 pounds of manure a day, carrying 1.1 pounds of nitrogen.

**Read down the nitrogen column.** Laying hens lead at 1.1. A sedentary horse gives 0.18. That is about six times as much nitrogen per 1,000 pounds of animal per day from the hens.

**The same animal changes with what it is doing.** A lactating sow gives 0.45 pounds of nitrogen against 0.16 for a gestating sow. An exercised horse gives 0.31 against 0.18 for a sedentary one. On the per-animal basis, a 1,375-pound lactating dairy cow gives 0.97 pounds of nitrogen a day and a 1,660-pound dry cow 0.50. The horse rows "apply to horses 18 months of age or older that are not pregnant or lactating" (NRCS, 2008, p. 4-22).

**Most of it is water.** The tables print moisture as a percent of the wet weight: dairy 87, beef cow 88, horse 85, laying hens 75, lamb 75. For these five, three quarters or more of the fresh manure, by weight, is water.

**A table is not a recommendation.** The pig rows are here because the handbook describes what pigs produce. Section 2 shows why pig manure still stays out of a home vegetable garden.

**Carbon matters too.** The lamb and rabbit tables also print a carbon to nitrogen ratio: 10 for lamb and 16 for rabbit. Section 3 explains why that ratio decides how a pile behaves.

:::reveal Per 1,000 pounds of animal per day, which gives more nitrogen, laying hens or a sedentary horse, and by roughly how much? ||| Laying hens, at 1.1 pounds against 0.18: about six times as much.

:::reveal Two horses weigh the same, yet the tables give them different nitrogen figures. Why? ||| One is sedentary and one is exercised. What the animal is doing changes what comes out: 0.31 pounds of nitrogen a day for the exercised horse against 0.18.

## Sources
- ${nrcs651("Table 4-5 on printed p. 4-13 (PDF p. 21); Table 4-8 on p. 4-15 (PDF p. 23); Table 4-10 on p. 4-17 (PDF p. 25); Table 4-11 on pp. 4-19 to 4-20 (PDF pp. 27 to 28); Tables 4-13 and 4-14 on p. 4-22 (PDF p. 30); Table 4-15 on p. 4-23 (PDF p. 31)", 21)}`,
    },
    {
      slug: "the-animals-the-tables-skip",
      title: "4 · Sheep, rabbits, and the animals the tables skip",
      section: S1,
      recallContent: [
        {
          prompt: "Per 1,000 pounds of animal per day, which animal in lesson 3's table gives the most nitrogen?",
          answer: "Laying hens, at 1.1 pounds, about six times the 0.18 of a sedentary horse.",
        },
        {
          prompt: "Roughly how much of fresh manure, by weight, is water?",
          answer: "Three quarters or more: the tables give 75 to 88 percent moisture for hens, lamb, horse, dairy and beef.",
        },
      ],
      body: `${SAFETY}

The NRCS tables are a free federal reference, and they have gaps. Knowing where the gaps are keeps you from trusting a number that was never measured.

**Sheep means one kind of sheep.** "As excreted manure characteristics for sheep are limited to those for the feeder lamb" (NRCS, 2008, p. 4-22). A ewe or a ram is not in the table. The lamb row gives 40 pounds of manure a day per 1,000 pounds, 75 percent moisture, 0.45 pounds of nitrogen, and a carbon to nitrogen ratio of 10.

**Rabbit means feces only.** "The properties refer only to the feces; no urine has been included. Reliable information on daily production of rabbit manure, feces, or urine is not available" (NRCS, 2008, p. 4-23). So the rabbit table tells you what rabbit droppings are like, and nothing about how much a rabbit makes.

**Check the units before you trust a decimal.** The rabbit table's dry-basis column prints fractions, not percents: its volatile solids (0.86) and fixed solids (0.14) add up to 1.00. Read that way, its nitrogen entry of 0.03 means about 3 percent of the dry matter. Read as "0.03 percent", it would be a hundred times too small. A quick test for any table: does the column add to 1 or to 100?

**The animals with no table at all.** There is no NRCS table for goats, alpacas, llamas or yaks, and none for dogs or cats. If you keep any of these, the honest position is that this handbook has no number for you.

**What to do instead: test.** Purdue Extension publishes a bulletin on exactly this, *Manure characteristics, testing, and sampling* (Ni & Lim, 2022), and its warning from lesson 2 applies here with more force: book values can be off by several-fold even for animals that do have a table.

One line from Purdue's bulletin on application rates belongs on every farm wall: "Do not enter a pit to collect the manure sample" (Joern & Brichford, 1993). A manure pit is a farm structure, and the instruction is plain.

**A quick checklist before you use any number.**

1. Which animal, and is it in a table at all?
2. What stage: growing, lactating, sedentary, exercised?
3. As excreted, or aged, dried or composted?
4. A book value, or a test of your own manure?

:::reveal The rabbit table prints nitrogen as 0.03 in a dry-basis column. What does that mean? ||| About 3 percent of the dry matter. The column is printed as fractions: volatile solids 0.86 and fixed solids 0.14 add to 1.00.

:::reveal Which small-farm animals have no NRCS manure table at all? ||| Goats, alpacas, llamas and yaks, and also dogs and cats. For alpacas and llamas, extension services publish lab averages from Ontario samples (the University of Maryland table below); for the others, a test of your own manure is the number to use.

## Sources
- ${nrcs651("Printed pp. 4-22 and 4-23 (PDF pp. 30 and 31); Tables 4-13 and 4-15", 30)}
- ${ABE166}
- ${AY277("Section \"Determining Manure Nutrient Content\", subsection \"Collecting a manure sample\"")}
- University of Maryland Extension, Agricultural Nutrient Management Program. (2018, August 8). *Average nutrient content of manure from various unusual livestock types* [One-page table; source line: Ontario Ministry of Agriculture and Food Factsheet 13-043, 2013]. Rows "Llama" and "Alpaca". https://extension.umd.edu/sites/extension.umd.edu/files/2021-04/Unusual%20Livestock%20Manure%20Nutrient%20Content%20%281%29.pdf`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The loop and the manure tables",
      section: S1,
      body: "Questions are drawn at random from this section's pool, so a retake asks different ones. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What did Darwin say has passed many times through the intestinal canals of worms?", options: ["Only the manure that grazing animals leave on the surface of pasture", "The seeds of weeds, which worms carry down below the reach of a plough", "Only the subsoil", "All the vegetable mould"], correctIndex: 3, explanation: "Darwin's introduction says all the vegetable mould over the whole country has passed many times, and will again pass many times, through the intestinal canals of worms. Lesson 1 uses it to show that matter goes around rather than one way.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "According to Purdue's AY-277, what share of the nitrogen fed to livestock do they excrete?", options: ["10 to 20 percent, since most nitrogen is built into muscle and milk", "About half, with the rest lost as ammonia before the manure lands", "5 percent", "70 to 80 percent"], correctIndex: 3, explanation: "AY-277 says livestock excrete 70 to 80 percent of the nitrogen fed to them, which is why manure carries most of what the animal ate back toward the soil.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "AY-277 gives which range for the share of fed potassium that livestock excrete?", options: ["60 to 85 percent, which is the range the bulletin gives for nitrogen", "80 to 90 percent", "30 to 40 percent, because potassium leaves the animal mostly in milk", "100 percent"], correctIndex: 1, explanation: "AY-277: 70 to 80 percent of the nitrogen, 60 to 85 percent of the phosphorus, and 80 to 90 percent of the potassium fed to livestock comes back out.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "What does the title of Purdue's 1994 bulletin ID-101 call animal manure?", options: ["A plant nutrient resource", "A regulated waste that must be hauled to a licensed landfill", "A source of organic matter with no measurable nutrient value", "A pollutant"], correctIndex: 0, explanation: "The bulletin is titled Animal Manure as a Plant Nutrient Resource. Lesson 1 uses the title to name manure's place in the loop.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "In the NRCS definition, composting is decomposition carried out by what?", options: ["Earthworms working the material into a finished layer of castings", "Chemical oxidation driven by sunlight on the surface of the pile", "Insects", "Microorganisms"], correctIndex: 3, explanation: "The NRCS defines composting as the controlled aerobic decomposition of organic matter by microorganisms into a stable, humus-like soil amendment.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "The NRCS definition calls composting \"aerobic\". What does that mean?", options: ["With oxygen", "Without oxygen, sealed under a tarp so that gases build up", "Kept wet enough that water fills every space in the pile", "In a closed bin"], correctIndex: 0, explanation: "Aerobic means oxygenated. FDA's produce rule writes it out as \"aerobic (i.e., oxygenated)\".", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "What does composting produce, in the NRCS definition?", options: ["A liquid fertilizer drained from the bottom of the pile and bottled for sale", "A sterile powder with no living organisms of any kind left in it", "Methane for heating", "A stable, humus-like soil amendment"], correctIndex: 3, explanation: "The definition ends \"into a stable, humus-like soil amendment\": the matter changes form and goes back into the loop.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Which document sets the 120-day and 90-day manure intervals?", options: ["FDA's produce safety rule, 21 CFR 112.56, as its food-safety waiting period", "The NRCS Agricultural Waste Management Field Handbook, chapter 4 tables", "An Iowa statute", "The organic rule, 7 CFR 205.203"], correctIndex: 3, explanation: "The intervals are in 7 CFR 205.203(c)(1), the organic rule. FDA's produce rule leaves its matching paragraph \"[Reserved]\".", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "What does 21 CFR 112.56(a)(1)(i) say about the waiting time for untreated manure applied in a way that minimizes contact with the crop?", options: ["120 days before harvest for any crop whose edible part touches soil", "90 days before harvest, the same as the organic rule's shorter interval", "\"[Reserved]\": no number is set", "0 days"], correctIndex: 2, explanation: "The paragraph reads \"[Reserved]\". It exists, and it holds no interval. The 0 days figure belongs to the next paragraph, for untreated manure that does not contact the crop at all.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "For untreated manure kept from touching the crop during or after spreading, what interval does FDA's produce rule set?", options: ["120 days, the organic rule's interval for crops touching soil", "0 days", "90 days, the organic rule's interval for crops off the soil", "\"[Reserved]\", the same blank as the paragraph before it"], correctIndex: 1, explanation: "21 CFR 112.56(a)(1)(ii) says 0 days. The \"[Reserved]\" paragraph, (a)(1)(i), covers untreated manure applied in a way that minimizes contact with the crop.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Under the organic rule, raw manure needs neither composting nor a waiting interval when it goes on land used for what?", options: ["Any crop, as long as the soil was tested within the last three years", "Any vegetable, as long as the manure is less than one week old", "Lawns only", "A crop not meant for people"], correctIndex: 3, explanation: "205.203(c)(1)(i): raw manure need not be composted when applied to land used for a crop not intended for human consumption.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Under the organic rule, a crop whose edible part touches the soil needs raw manure worked in how long before harvest?", options: ["At least 90 days, the interval for crops whose edible part stays off the soil", "At least six months, counted from the last time the manure was turned", "At least 120 days", "30 days"], correctIndex: 2, explanation: "205.203(c)(1)(ii) says not less than 120 days before harvest when the edible portion has direct contact with the soil surface or soil particles. Six months is Purdue's composting advice, a different document.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Why does this course say \"wait 90 or 120 days\" is not a federal food-safety law?", options: ["Congress repealed both intervals when it passed the produce safety rule", "The intervals apply only to manure from pigs, dogs and cats", "FDA's rule set no number there", "It is a state rule"], correctIndex: 2, explanation: "The 90 and 120 days are the organic rule's intervals. FDA's food-safety rule for produce has a paragraph where the interval would go, and it reads \"[Reserved]\".", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Which of these does this course leave out on purpose?", options: ["Reading the NRCS manure tables row by row and checking their units", "Composting human waste", "The organic rule's 90 and 120 day intervals and what each one covers", "Soil testing"], correctIndex: 1, explanation: "Human waste is regulated under 21 CFR 112.53 and is out of scope. The tables, the intervals and soil testing are all taught.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Why is composting human waste out of scope in this course?", options: ["No society has ever returned it to fields, so there is no record to teach from", "The organic rule's 120-day interval already covers it in full", "It has no nitrogen", "It is regulated (21 CFR 112.53)"], correctIndex: 3, explanation: "Lesson 1 names 21 CFR 112.53. Section 5 even reads a historical account of human waste on fields, as history, which is why the claim that no society has ever returned it to fields is wrong.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "This course is the first in which series?", options: ["Farm and Garden Basics, a three-part introduction for new growers", "The Nutrient Cycle, a series of laboratory science courses", "The Calorie Loop", "Compost 101"], correctIndex: 2, explanation: "Lesson 1 says this is the first course in a series called The Calorie Loop, with courses on trees and on raising animals planned for it.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Which two ways does lesson 1 say nitrogen can leak out of the loop?", options: ["Only in crops sold off the farm, never into the air or into water", "Through worms carrying it down below the root zone into bedrock", "As ammonia gas, and in water", "As smoke"], correctIndex: 2, explanation: "Ammonia can leave soon after manure is spread, and ammonia can leach out of a compost pile into ground or surface water.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "In the loop, what does manure carry back toward the soil?", options: ["Most of the nutrients that were fed", "Only water and fiber, because animals keep almost all of the nutrients they eat", "Mainly carbon, because animals breathe out the nitrogen in their feed", "Only carbon"], correctIndex: 0, explanation: "Purdue's AY-277 puts the excreted share at 70 to 80 percent of the nitrogen, 60 to 85 percent of the phosphorus and 80 to 90 percent of the potassium fed.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Which of these is one of the four questions this course teaches you to ask about any pile?", options: ["How much would it sell for at a farmers' market this season?", "Which neighbor produced it, and do they hold a permit for it?", "Who owns it?", "What could be in it?"], correctIndex: 3, explanation: "The four questions: what is in it, what could be in it, how do you make it safe, and how much goes where, and when.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "In the NRCS tables, \"as excreted\" describes manure at what point?", options: ["After it has aged for six months in a covered pile", "After drying to the 30 percent moisture typical of a feedlot pen surface", "Before any change after leaving the animal", "After composting"], correctIndex: 2, explanation: "The definition: feces and urine prior to any changes due to dilution water addition, drying, volatilization, or other physical, chemical, or biological processes.", sourceLessonSlug: "as-excreted" },
          { prompt: "Which of these does the \"as excreted\" definition exclude?", options: ["Urine, since the tables count only the solid feces an animal drops", "Drying and added water", "Feces, since the tables count only urine collected from the stalls", "Nothing at all"], correctIndex: 1, explanation: "As excreted is feces and urine together, before dilution water, drying, volatilization or any other change.", sourceLessonSlug: "as-excreted" },
          { prompt: "What does \"volatilization\" mean in the manure definition?", options: ["Escaping as a gas", "Freezing solid during a cold Indiana winter and thawing again", "Being washed off a field by heavy spring rain into a ditch", "Decay by worms"], correctIndex: 0, explanation: "Volatilization means escaping as a gas. Purdue uses the word for ammonia leaving freshly spread manure.", sourceLessonSlug: "as-excreted" },
          { prompt: "What happens to beef feedlot manure's moisture over time, according to the NRCS handbook?", options: ["It falls from about 90 to about 30 percent", "It rises from about 30 to about 90 percent as rain soaks into the pen floor", "It stays at 90 percent, because manure on a feedlot seals itself against drying", "It doubles"], correctIndex: 0, explanation: "The handbook says feedlot moisture drops significantly over time from its as excreted 90 percent to about 30 percent, which is why a table row does not describe a pile that has sat.", sourceLessonSlug: "as-excreted" },
          { prompt: "What is an animal unit (AU) in the NRCS tables?", options: ["One adult animal of any species, whatever it happens to weigh", "The manure one animal produces in a single 24-hour day", "One ton of manure", "1,000 pounds of live weight"], correctIndex: 3, explanation: "The handbook: a 1,000-pound AU is 1,000 pounds of live weight, not an individual animal.", sourceLessonSlug: "as-excreted" },
          { prompt: "How many animal units is a 1,400-pound Holstein cow?", options: ["1, because every adult cow counts as one unit however heavy she is", "14, one unit for each 100 pounds of live weight", "1.4", "0.7"], correctIndex: 2, explanation: "1,400 pounds divided by 1,000 pounds per AU is 1.4 AU. The handbook uses exactly this example.", sourceLessonSlug: "as-excreted" },
          { prompt: "Most NRCS manure rows are given on what basis?", options: ["Per animal per year, averaged across every age and breed in the herd", "Per acre of pasture the animals graze over a full season", "Per ton of feed", "Per day per 1,000 pounds of animal"], correctIndex: 3, explanation: "Most rows are pounds per day per 1,000 pounds of animal, as excreted. Table 4-5 also gives a per-animal version.", sourceLessonSlug: "as-excreted" },
          { prompt: "Table 4-5 gives a lactating cow 108 pounds of manure a day per 1,000 pounds; the per-animal table gives a 1,375-pound cow 148 pounds. What does 108 × 1.375 show?", options: ["The per-animal table overstates manure by about a third and should be ignored", "Larger cows produce less manure per pound of body weight than small ones", "One table is per week", "The two tables agree"], correctIndex: 3, explanation: "108 × 1.375 is about 148.5, which matches the 148 the per-animal table prints. The two bases describe the same cow.", sourceLessonSlug: "as-excreted" },
          { prompt: "On the per-1,000-pound basis, a table gives 108 pounds a day. How much would a 500-pound animal of the same kind produce on that basis?", options: ["54 pounds", "108 pounds, because the figure is per animal whatever its weight", "216 pounds, because smaller animals produce more per pound", "500 pounds"], correctIndex: 0, explanation: "500 pounds is 0.5 animal units, and 0.5 × 108 is 54. The basis is weight, not head count.", sourceLessonSlug: "as-excreted" },
          { prompt: "Which manure does the NRCS chapter say it does not consider?", options: ["Manure on pasture or range", "Manure from lactating dairy cows housed in freestall barns", "Manure from laying hens kept in confinement buildings", "Horse manure"], correctIndex: 0, explanation: "The handbook: \"Not considered is manure produced by livestock and poultry on pasture or range.\" A cow on grass is outside the tables.", sourceLessonSlug: "as-excreted" },
          { prompt: "For which animals do the NRCS tables give pounds of manure, moisture and nutrients?", options: ["Goats, alpacas, llamas and yaks, the usual small-farm animals", "Dogs and cats, along with every kind of farm livestock", "Cattle, swine, poultry, lambs, horses", "Every kind of livestock"], correctIndex: 2, explanation: "Lesson 2 names cattle, swine, poultry, lambs and horses. Lesson 4 shows the gaps: no table for goats, alpacas, llamas, yaks, dogs or cats, and no daily pounds for rabbits.", sourceLessonSlug: "as-excreted" },
          { prompt: "Where do the NRCS chapter's veal and sheep values come from?", options: ["A 2008 survey of Indiana sheep farms carried out by Purdue Extension", "The organic rule's appendix on the composition of raw manure", "The 1992 version of the handbook", "ASAE D384.2 only"], correctIndex: 2, explanation: "The handbook says the veal and sheep values are from the 1992 version of the AWMFH, older than the rest of the chapter.", sourceLessonSlug: "as-excreted" },
          { prompt: "Which engineering standard do most of the NRCS manure tables draw on?", options: ["The organic rule's compost standard in 7 CFR 205.203(c)(2)", "FDA's microbial standards for compost in 21 CFR 112.55(b)", "NRAES-54", "ASAE D384.2 (2005)"], correctIndex: 3, explanation: "Most of the handbook's manure tables draw on ASAE D384.2 (2005); the veal, lamb and rabbit tables are from the 1992 AWMFH. NRAES-54 is the source of a different table, the composting chapter's Table 2A-1.", sourceLessonSlug: "as-excreted" },
          { prompt: "What does Purdue's ABE-166-W say about book values for manure nutrients?", options: ["They are accurate to within 5 percent for any animal in the tables", "Farm data can differ several-fold", "They overstate nutrients for poultry and are exact for cattle", "They apply only in Indiana"], correctIndex: 1, explanation: "ABE-166-W: using book values can be problematic because measured farm data can vary widely, from a small percentage to several-fold.", sourceLessonSlug: "as-excreted" },
          { prompt: "What does the NRCS handbook call using table 4-16 to set field-specific application rates for one year's nutrient plan?", options: ["The method the handbook recommends for every farm nutrient plan", "Acceptable only on farms with fewer than 300 head of cattle", "Required", "A misuse of the data"], correctIndex: 3, explanation: "Section 651.0404 says that use \"would be a misuse of the data.\" The tables compare; they do not set a field's rate.", sourceLessonSlug: "as-excreted" },
          { prompt: "According to lesson 2, what are the NRCS tables good for?", options: ["Setting exact application rates for a single field in a single year", "Comparing animals", "Proving to an inspector that a compost pile reached 131 °F", "Replacing a soil test"], correctIndex: 1, explanation: "Use the tables to compare animals and to know roughly what material you have; use a test to learn what is in your own pile.", sourceLessonSlug: "as-excreted" },
          { prompt: "Why do the NRCS numbers not describe a manure pile that has sat in your yard?", options: ["It has changed since it left the animal", "The tables were measured only on animals kept outside the United States", "Backyard manure always holds more nitrogen than farm manure by law", "The tables measure urine only"], correctIndex: 0, explanation: "The tables are as excreted. Drying, added water, gas loss and composting all change a pile, as the feedlot's fall from 90 to 30 percent moisture shows.", sourceLessonSlug: "as-excreted" },
          { prompt: "In lesson 3's table, which animal gives the most nitrogen per 1,000 pounds per day?", options: ["Laying hens", "A lactating dairy cow giving 75 pounds of milk a day", "A beef cow kept in confinement through the winter", "A sedentary horse"], correctIndex: 0, explanation: "Laying hens lead the nitrogen column at 1.1 pounds per day per 1,000 pounds of birds.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Laying hens give 1.1 pounds of nitrogen per 1,000 pounds per day and a sedentary horse 0.18. Roughly how many times as much is that?", options: ["About twice as much, once the horse's larger body is taken into account", "About six times", "About sixty times, because hens excrete urine and feces together", "About a third as much"], correctIndex: 1, explanation: "1.1 divided by 0.18 is about 6. The per-1,000-pound basis already accounts for body size.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "How much manure does a 1,000-pound laying-hen flock produce per day, as excreted?", options: ["108 pounds, the same as a lactating dairy cow on the same basis", "1.1 pounds in total, which is the flock's whole daily output", "57 pounds", "5.7 pounds"], correctIndex: 2, explanation: "The hen row: 57 pounds of manure a day per 1,000 pounds of birds, carrying 1.1 pounds of nitrogen.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Which pair shows that one kind of animal changes its output with what it is doing?", options: ["Ducks and laying hens kept together on the same small farm", "A beef cow and a dairy cow that happen to weigh the same", "Lactating and gestating sows", "Ducks and turkeys"], correctIndex: 2, explanation: "A lactating sow gives 0.45 pounds of nitrogen against 0.16 for a gestating sow: same animal, different stage.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Per 1,000 pounds per day, how does a lactating sow's nitrogen compare with a gestating sow's?", options: ["0.16 against 0.45, since a nursing sow eats less than a pregnant one", "The same 0.45, because the tables do not separate sows by stage", "1.1 against 0.18", "0.45 against 0.16"], correctIndex: 3, explanation: "Table 4-10 gives 0.45 pounds for the lactating sow and 0.16 for the gestating sow.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Per 1,000 pounds per day, how much manure does a lactating sow make, against 25 pounds for a gestating sow?", options: ["59 pounds", "25 pounds, the same as a gestating sow of equal weight", "108 pounds, the figure for a lactating dairy cow", "0.45 pounds, which is the lactating sow's nitrogen figure"], correctIndex: 0, explanation: "Table 4-10: 59 pounds of manure for the lactating sow and 25 for the gestating sow. Stage changes the amount as well as the nitrogen.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "How much nitrogen per 1,000 pounds per day does lesson 3's table give for broilers?", options: ["1.1 pounds, the figure for laying hens", "88 pounds, which is the broilers' manure figure", "0.18 pounds, the figure for a sedentary horse", "0.96 pounds"], correctIndex: 3, explanation: "Broilers: 88 pounds of manure and 0.96 pounds of nitrogen a day per 1,000 pounds of birds. Laying hens give 1.1.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "An exercised horse gives how much nitrogen per 1,000 pounds per day, against 0.18 for a sedentary one?", options: ["0.18, since exercise changes manure volume but not its nitrogen", "0.31", "1.1, the same as a laying-hen flock of equal total weight", "0.05"], correctIndex: 1, explanation: "Table 4-14: 0.31 pounds of nitrogen for the exercised horse and 0.18 for the sedentary horse.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Which horses do the NRCS horse values apply to?", options: ["18 months or older, not pregnant or lactating", "Foals under six months that are still nursing from their mothers", "Only racehorses in training at a licensed race track", "Any horse"], correctIndex: 0, explanation: "The handbook: the values apply to horses 18 months of age or older that are not pregnant or lactating.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Per animal, how much nitrogen does a 1,375-pound lactating dairy cow give per day, against a 1,660-pound dry cow?", options: ["0.50 against 0.97 pounds, since the heavier dry cow eats more", "0.71 against 0.71 pounds, because both are measured per 1,000 pounds", "0.31 against 0.18", "0.97 against 0.50 pounds"], correctIndex: 3, explanation: "On the per-animal basis the lactating cow gives 0.97 pounds and the dry cow 0.50, even though the dry cow is heavier.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "What moisture do the tables give for fresh dairy manure, as a percent of the wet weight?", options: ["30 percent, about what dairy manure reaches after a season in a barn", "50 percent, roughly the same as finished compost", "87 percent", "8.7 percent"], correctIndex: 2, explanation: "Dairy manure as excreted is 87 percent moisture, wet basis. The 30 percent figure in lesson 2 is beef feedlot manure after drying.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "For the five animals whose moisture lesson 3 lists, how much of fresh manure by weight is water?", options: ["About a tenth, since most of the weight is undigested fiber", "Three quarters or more", "About a third, the same as feedlot manure after it dries", "About half"], correctIndex: 1, explanation: "Dairy 87, beef cow 88, horse 85, laying hens 75 and lamb 75 percent: three quarters or more is water.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Why do the NRCS tables have swine rows, if pig manure stays out of home gardens?", options: ["Federal law requires every gardener to try pig manure before any other", "Tables describe; they do not recommend", "Pig manure is the safest of all manures for vegetable beds", "The rows are outdated"], correctIndex: 1, explanation: "The handbook describes what pigs produce. Section 2 shows why Purdue and Iowa State still keep pig manure out of gardens and compost piles.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Which pair of NRCS tables both print a carbon to nitrogen ratio?", options: ["Dairy (87) and beef (88), printed in the column beside moisture", "Laying hens (1.1) and broilers (0.96), printed beside nitrogen", "Horse and duck", "Lamb (10) and rabbit (16)"], correctIndex: 3, explanation: "The lamb table gives C:N 10 and the rabbit table C:N 16. Section 3 explains why the ratio decides how a pile behaves.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "How much manure per 1,000 pounds per day do the tables give for ducks?", options: ["57 pounds, the same as laying hens because both are poultry", "102 pounds", "1 pound, which is the duck figure in the manure column", "25 pounds"], correctIndex: 1, explanation: "Ducks: 102 pounds of manure a day per 1,000 pounds, with 1 pound of nitrogen.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Which growing animal does Table 4-8 list alongside the beef cow in confinement?", options: ["A dairy heifer of about 1,000 pounds being raised for milking", "A breeding bull of more than 2,000 pounds", "A feeder lamb", "A calf of 450 to 750 pounds"], correctIndex: 3, explanation: "Table 4-8 gives a growing beef calf of 450 to 750 pounds: 77 pounds of manure and 0.45 pounds of nitrogen a day per 1,000 pounds.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "What do the figures in lesson 3's nitrogen column measure?", options: ["Pounds per day per 1,000 pounds", "Percent of the manure's dry weight, printed as a fraction of 1.00", "Pounds per animal per year, whatever the animal weighs", "Parts per million"], correctIndex: 0, explanation: "Every figure in the table, manure and nutrients alike, is pounds per day per 1,000 pounds of animal, as excreted.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "A beef cow in confinement and a lactating dairy cow make similar manure per 1,000 pounds (104 and 108). How do their nitrogen figures compare?", options: ["Dairy 0.71, beef 0.35", "Beef 0.71 and dairy 0.35, because beef cattle are fed more grain", "Both 0.71, since similar manure weight means similar nitrogen", "Both 1.1"], correctIndex: 0, explanation: "Similar pounds of manure do not mean similar nitrogen: the dairy cow gives 0.71 and the beef cow 0.35.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "Which sheep do the NRCS as-excreted values cover?", options: ["Ewes and rams of every breed, in confinement or on pasture", "Dairy sheep, whose milk is recorded alongside the manure", "All sheep", "Only the feeder lamb"], correctIndex: 3, explanation: "The handbook: as excreted characteristics for sheep are limited to those for the feeder lamb.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "What does the NRCS rabbit table describe?", options: ["Urine only, collected from hutch trays over a full week", "Feces and urine together, as excreted, like every other table", "Feces only, no urine", "Bedding"], correctIndex: 2, explanation: "The handbook: the properties refer only to the feces; no urine has been included.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "What does the NRCS handbook say about how much manure a rabbit produces each day?", options: ["About 57 pounds per 1,000 pounds, the same as a laying-hen flock", "Exactly 0.03 pounds per rabbit, the figure in the nitrogen column", "40 pounds", "Reliable data is not available"], correctIndex: 3, explanation: "Reliable information on daily production of rabbit manure, feces or urine is not available. The table describes what droppings are like, not how much.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "The rabbit table's dry-basis column gives nitrogen as 0.03. What does that mean?", options: ["0.03 percent of dry matter, a few hundredths of a percent", "0.03 pounds per day per 1,000 pounds of rabbit", "About 3 percent of dry matter", "3 pounds a day"], correctIndex: 2, explanation: "The column is printed as fractions: volatile solids 0.86 and fixed solids 0.14 add to 1.00. So 0.03 is about 3 percent of the dry matter.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "How can you tell the rabbit dry-basis column is printed as fractions?", options: ["Its parts add to 1.00", "Every value in the column is larger than 100", "The table prints each value in a separate color", "It says so"], correctIndex: 0, explanation: "Volatile solids 0.86 plus fixed solids 0.14 equals 1.00. A percent column would add to 100.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "The rabbit table gives volatile solids of 0.86 on a dry basis. What does it give for fixed solids?", options: ["0.86, the same figure as the volatile solids", "0.14", "1.86, so that the two parts add to more than one", "0.03, the figure in the nitrogen column"], correctIndex: 1, explanation: "Fixed solids are 0.14, and 0.86 plus 0.14 is 1.00, which is how you know the column is printed as fractions.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "What quick test does lesson 4 give for any column of decimals?", options: ["Does it add to 1 or to 100?", "Multiply every value by the animal's weight in pounds before reading it", "Compare it with the organic rule's 90 and 120 day intervals", "Divide it by 35"], correctIndex: 0, explanation: "Checking whether a column sums to 1 or to 100 tells you whether it is printed as fractions or percents.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "Which animals have no NRCS manure table at all?", options: ["Laying hens and broilers, which are covered in a separate handbook", "Lactating dairy cows, whose values were dropped in 2008", "Goats and alpacas", "Horses"], correctIndex: 2, explanation: "There is no NRCS table for goats, alpacas, llamas or yaks, and none for dogs or cats.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "If you keep llamas or yaks, what does lesson 4 say is the honest position?", options: ["Use the dairy cow row, since all large grazing animals are alike", "Use the horse row and multiply it by 1.4 animal units", "The handbook has no number for you", "Assume zero nitrogen"], correctIndex: 2, explanation: "No table exists for those animals. Borrowing another animal's row would be a guess dressed as a number.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "What does lesson 4 recommend for an animal that has no table?", options: ["Test the manure", "Average every row in the NRCS tables and use the result", "Ask the feed store for the manufacturer's manure value", "Judge it by color"], correctIndex: 0, explanation: "Purdue publishes a bulletin on manure testing and sampling, and book values can be off several-fold even for animals with a table.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "What does Purdue's AY-277 say about sampling manure from a pit?", options: ["Enter only with a partner holding a rope at the pit's edge", "Do not enter the pit", "Enter only after the pit has been stirred for at least an hour", "Sample only in winter"], correctIndex: 1, explanation: "AY-277: \"Do not enter a pit to collect the manure sample.\" A manure pit is a farm structure, and the instruction is plain.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "Why is the NRCS lamb row not enough for a farm that keeps ewes?", options: ["Ewes are not in it", "Ewes produce exactly twice the lamb row's values, by rule", "The lamb row was measured on ewes, so lambs are the missing ones", "It covers them fully"], correctIndex: 0, explanation: "Sheep values are limited to the feeder lamb. A ewe or a ram is not in the table.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "Which question belongs on lesson 4's checklist before you use any manure number?", options: ["As excreted, or aged?", "What price did the farmer charge per truckload of manure?", "How many miles was the manure driven before delivery?", "Who delivered it?"], correctIndex: 0, explanation: "The checklist: which animal and is it in a table; what stage; as excreted or aged, dried or composted; a book value or your own test.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "What carbon to nitrogen ratio does the lamb row give?", options: ["16, the ratio printed in the rabbit table", "30, the ratio for horse manure in Table 2A-1", "10", "75"], correctIndex: 2, explanation: "The lamb table gives C:N 10. The rabbit table gives 16, and Table 2A-1 gives horse manure 30.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "Which Purdue bulletin title tells you Purdue publishes guidance on testing manure?", options: ["Collecting soil samples for testing, the 2018 bulletin HO-71-W", "Managing yard wastes: Clippings and compost, the guide ID-182-W", "The Scoop on Poop", "Manure characteristics, testing, and sampling"], correctIndex: 3, explanation: "ABE-166-W is Manure Characteristics, Testing, and Sampling. HO-71-W is about soil samples, ID-182-W about yard waste.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "Why does the several-fold warning about book values matter even more for goats and alpacas?", options: ["They have no table at all", "Their manure is always far richer in nitrogen than any cattle manure", "The NRCS tested them and found the most variable results of any animal", "They are small"], correctIndex: 0, explanation: "Book values can be off several-fold for animals that do have a table. For animals with none, there is no book value to be off from.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "Reading the rabbit figure 0.03 as \"0.03 percent\" would make it wrong by what factor?", options: ["A hundred times too small", "Ten times too large, since fractions always overstate percents", "Not wrong, because 0.03 and 0.03 percent mean the same thing", "Twice too small"], correctIndex: 0, explanation: "0.03 as a fraction is 3 percent. Read as 0.03 percent, it is a hundredth of that.", sourceLessonSlug: "the-animals-the-tables-skip" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: What could be in it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "dogs-cats-and-pigs",
      title: "5 · Dog, cat and pig manure: the ones that stay out",
      section: S2,
      recallContent: [
        {
          prompt: "What does the rabbit table's nitrogen entry of 0.03 mean, and why?",
          answer:
            "About 3 percent of the dry matter. The dry-basis column is printed as fractions: volatile solids 0.86 and fixed solids 0.14 add to 1.00.",
        },
        {
          prompt: "Which animals have no NRCS manure table at all?",
          answer: "Goats, alpacas, llamas, yaks, dogs and cats.",
        },
      ],
      body: `${SAFETY}

Three manures come with the same instruction from the extension guides this course read: keep them out of the food garden, and out of the compost pile too.

**Iowa State.** "Do not use cat, dog, or pig manures in gardens or compost piles. Some of the parasites found in these manures may survive and remain infectious for people" (Fillius et al., 2023). The "may" is the guide's own word. It does not say every pile will carry them. It says the risk is real enough to rule the manures out.

**Purdue, for Indiana gardens.** "Manure from pigs, dogs and cats should not be used at all in gardens or compost" (Lerner, 2006, rev. 2017).

**Purdue's compost guide.** "Because of the danger of disease transmission, human and pet feces should not be composted" (Lerner, 2020, p. 2).

Three documents, two universities, and on dogs and cats one answer. When independent sources agree this plainly, a course does not need to soften it.

**"But I will compost it first."** That is the natural objection, and Purdue's compost guide answers it in one sentence: "Finished compost is free of pests and weed seeds only if it has been properly mixed and uniformly heated" (Lerner, 2020, p. 4). Section 3 shows what "uniformly heated" takes. Lesson 6 shows how high one study had to go for dog waste.

**What about pig manure on a farm?** Lesson 3's table has swine rows, because the NRCS handbook describes what pigs produce. A description is not a recommendation for a home vegetable bed, and both Purdue and Iowa State say keep pig manure out of gardens and compost piles.

**Then where does pet waste go?** CDC's advice, in lesson 7, is to pick it up daily and bury it or bag it for the trash (Centers for Disease Control and Prevention [CDC], 2024b). The extension guides add the part that matters for a gardener: not into the garden and not into the compost pile.

**A habit to build.** When you take manure from someone else, ask which animal it came from. A pile of mixed manure from a farm with dogs on it is a question, not an answer.

:::reveal Which three manures do Iowa State and Purdue both say to keep out of gardens and compost piles? ||| Dog, cat and pig.

:::reveal Why is "I will compost it first" not enough for dog or cat waste in a home heap? ||| Purdue says pet feces should not be composted at all, and its compost guide warns that finished compost is free of pests only if it was properly mixed and uniformly heated, which nobody can assume of a home heap.

## Sources
- ${IOWA}
- ${SCOOP}
- ${ID182("Pages 2 and 4")}
- ${CDC_TOXOCARA}`,
    },
    {
      slug: "the-fairbanks-dog-waste-study",
      title: "6 · The Fairbanks dog-waste study: what it allows, and what it forbids",
      section: S2,
      recallContent: [
        {
          prompt: "Quote or paraphrase Purdue's rule on pig, dog and cat manure.",
          answer: "Manure from pigs, dogs and cats should not be used at all in gardens or compost (The Scoop on Poop).",
        },
        {
          prompt: "What does Purdue's compost guide say finished compost needs before it is free of pests and weed seeds?",
          answer: "To have been properly mixed and uniformly heated.",
        },
      ],
      body: `${SAFETY}

The best evidence on composting dog waste comes from people who tried to do it well. In December 2005 the USDA Natural Resources Conservation Service and the Fairbanks Soil and Water Conservation District published a fact sheet, *Composting Dog Waste*, based on a 1991 Fairbanks study (NRCS & Fairbanks SWCD, 2005). It is the only study of the practice this course found, and it still draws a hard line.

**What it allows.** "Dog waste compost can be used as a soil additive for revegetation, lawn establishment, and planting beds" (NRCS & Fairbanks SWCD, 2005, p. 1).

**What it forbids.** The very next sentence: "It should not be used on crops grown for human consumption" (p. 1).

Read those two together. The authors worked out a method and still ruled out food. That line was drawn by people who had done the work.

**How hot.** "Compost must reach 145ºF for several days to destroy pathogens" (p. 4). Compare that with section 3, where both federal composting processes use 131 °F. The dog-waste sheet asks for more heat, for several days.

**Why.** "The primary agents for disease are roundworm eggs" (p. 6). Lesson 7 shows what CDC's page on Toxocara, a roundworm of dogs and cats, says about how long its eggs survive in the environment.

**Cats.** A note on the first page: "Cat and other pet wastes were not studied." And: "We do not recommend adding cat waste or cat litter to your compost" (p. 1, note 2). So the one study that tested dog waste did not test cat waste, and its authors say leave cat waste and litter out.

**Reading it yourself.** A copy is hosted on the EPA website (linked below). Its drawings are by Ellen Million and Noël Bell; this course links to the sheet rather than reproducing them.

:::reveal Where does the 2005 dog-waste fact sheet say its compost may and may not be used? ||| It may be used for revegetation, lawn establishment and planting beds. It should not be used on crops grown for human consumption.

:::reveal What temperature does the sheet say compost must reach to destroy pathogens, and how does that compare with the federal processes? ||| 145 °F for several days, higher than the 131 °F both federal composting processes use.

## Sources
- ${dogWaste("Printed pp. 1, 4 and 6 (PDF pp. 3, 6 and 8); note 2 on p. 1", 3)}`,
    },
    {
      slug: "toxoplasma-and-toxocara",
      title: "7 · Toxoplasma and Toxocara: what CDC tells gardeners",
      section: S2,
      recallContent: [
        {
          prompt: "What did the 2005 dog-waste sheet allow its compost to be used for, and what did it rule out?",
          answer: "Revegetation, lawn establishment and planting beds; never crops grown for human consumption.",
        },
        {
          prompt: "How hot did the dog-waste sheet say compost must get, and what did it name as the main disease agent?",
          answer: "145 °F for several days; roundworm eggs.",
        },
      ],
      body: `${SAFETY}

CDC's pages on two parasites, Toxoplasma and Toxocara, are short and practical. Each gives a timing, and the timing explains the advice.

**Toxoplasma, which cats shed in their feces.** CDC's prevention page tells gardeners to "Wear gloves when gardening or touching soil or sand that cat feces containing Toxoplasma may have contaminated" (CDC, 2024a). It also says:

- "Change the cat litter box daily."
- "Cover outdoor sandboxes."
- "Rinse fruit and vegetables under running water."

The reason for "daily" is the timing. CDC says the parasite "does not become infectious until" one to five days after a cat sheds it in its feces (CDC, 2024a). Clear the box every day and you remove it before it can infect.

**Toxocara: the eggs that wait.** CDC's page on how toxocariasis spreads uses the same name the dog-waste sheet in lesson 6 used: people are infected when they "accidentally consume dirt or food contaminated with roundworm eggs," which "get into the soil through animal waste, typically from dogs and cats" (CDC, 2024b). It gives the opposite timing. The eggs need two to four weeks in the environment before they can cause infection, and then they survive "for months, or even years" (CDC, 2024b). Its advice: "Pet waste should be picked up daily and buried or bagged and disposed of in the trash."

**Two timings, two lessons.**

| Parasite | Timing CDC gives | What it means for you |
|---|---|---|
| Toxoplasma | Infectious one to five days after shedding | Clear litter daily, before it becomes infectious |
| Toxocara | Two to four weeks to become infective, then months or years of survival | Pick up waste daily; soil where pets go stays a concern long after |

**For a gardener, the habits follow.** Wear gloves in soil cats may have used. Cover a sandbox so cats do not use it. Rinse produce under running water. Keep pet waste out of the beds and out of the compost, as lessons 5 and 6 said. And notice that the eggs' survival for months or years is why "it was a while ago" is not a reason to plant food where pet waste was left.

:::reveal Why does CDC say to change a cat's litter box daily? ||| Because Toxoplasma does not become infectious until one to five days after a cat sheds it, so daily changing removes it before it can infect.

:::reveal How long can the eggs on CDC's toxocariasis page survive in the environment? ||| Months, or even years, after taking two to four weeks to become able to cause infection.

## Sources
- ${CDC_TOXO}
- ${CDC_TOXOCARA}`,
    },
    {
      slug: "human-waste-butchering-water-and-cool-patches",
      title: "8 · Human waste, butchering water, and the cool patch",
      section: S2,
      recallContent: [
        {
          prompt: "Why does CDC say to change a cat's litter box daily?",
          answer: "Toxoplasma does not become infectious until one to five days after a cat sheds it, so a daily change removes it first.",
        },
        {
          prompt: "How long can the eggs on CDC's toxocariasis page survive in the environment?",
          answer: "Months, or even years, after two to four weeks to become infective.",
        },
      ],
      body: `${SAFETY}

This lesson draws three more lines: one set by federal law, one by a Purdue bulletin, and one inside the compost pile itself.

**Human waste: regulated, and out of scope.** FDA's produce safety rule says it in one sentence: "You may not use human waste for growing covered produce, except sewage sludge biosolids used in accordance with" EPA's biosolids rule, 40 CFR part 503, subpart D (21 C.F.R. § 112.53). This course does not teach composting human waste. The one exception runs through a separate EPA rule with its own treatment processes (section 3 compares them with compost). Section 5 reads a historical account of human waste used on fields, as history and not as a method.

If your interest is sanitation when the plumbing fails, *Off-Grid & Emergency Survival* has a lesson on exactly that: lesson 15, "Sanitation: human waste when plumbing fails".

**Butchering water: never onto the garden.** Purdue's bulletin on food safety and backyard poultry says the wastewater from butchering birds should go in a compost pile or, if there is a small amount, a sewer system, and adds: "Make sure that the wastewater is not used to water your fruit and vegetable garden" (VanNorman & Feng, 2020, p. 3).

**The cool patch: why a hot pile can still carry pathogens.** The NRCS composting chapter says "Most pathogens originating from animals cannot survive above the 130 to 160 degrees Fahrenheit temperature range" (NRCS, 2010, p. 2-26). The catch is that a pile is not one temperature. Two warnings from the same pages:

- When a pile is turned, "the innermost layer is recontaminated with pathogens from the outermost layer" (pp. 2-26 to 2-27).
- Aerated static piles leave "cool patches" that "contain pathogenic organisms that can survive" (pp. 2-26 to 2-27).

So a thermometer reading of 150 °F at the center tells you about the center. The outside of the pile and any cool patch may never have got there.

**The never list, so far.**

| Never | Source |
|---|---|
| Dog, cat or pig manure in a food garden or compost pile | Iowa State; Purdue |
| Cat waste or cat litter in compost | NRCS and Fairbanks SWCD, 2005 |
| Human waste on covered produce, outside the biosolids exception | 21 CFR 112.53 |
| Butchering wastewater as garden water | Purdue FS-44-W |

:::reveal What does 21 CFR 112.53 say about human waste? ||| You may not use it for growing covered produce, except sewage sludge biosolids used under 40 CFR part 503, subpart D.

:::reveal Why can a pile that got hot at the center still carry pathogens? ||| Its outer layer and any cool patches may never have reached killing temperature, and turning brings that outer material into the center.

## Sources
- ${PRODUCE("112.53", "")}
- ${FS44}
- ${nrcs637("Section 637.0206, printed pp. 2-26 to 2-27 (PDF pp. 34 to 35)", 34)}`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · What could be in it",
      section: S2,
      body: "Questions are drawn at random from this section's pool, so a retake asks different ones. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which three manures do Iowa State and Purdue both say to keep out of gardens and compost piles?", options: ["Horse, rabbit and sheep, because of the weed seeds and fiber they carry", "Dog, cat and pig", "Chicken, duck and turkey, because poultry manure is too high in nitrogen", "Cow, goat and llama"], correctIndex: 1, explanation: "Iowa State: do not use cat, dog, or pig manures in gardens or compost piles. Purdue: manure from pigs, dogs and cats should not be used at all in gardens or compost.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "What reason does Iowa State give for keeping cat, dog and pig manure out of gardens?", options: ["Their nitrogen burns seedlings faster than any other manure can", "Parasites may survive and infect people", "They carry weed seeds that sprout after the first heavy rain", "The smell"], correctIndex: 1, explanation: "Iowa State: some of the parasites found in these manures may survive and remain infectious for people.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Iowa State says the parasites \"may\" survive. How does lesson 5 read that word?", options: ["The guide's authors were unsure whether such parasites exist at all", "Every pile of that manure is certain to carry live parasites", "The risk is real enough to rule them out", "It is a misprint"], correctIndex: 2, explanation: "The \"may\" is the guide's own hedge. It does not claim every pile carries parasites; it says the risk is real enough to keep these manures out.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "What does Purdue's \"The Scoop on Poop\" say about pig, dog and cat manure?", options: ["Fine in compost if the pile is turned twice a month for a full season", "Fine on flower beds, though not within 90 days of a vegetable harvest", "Not to use it at all in gardens or compost", "Use it sparingly"], correctIndex: 2, explanation: "The page says manure from pigs, dogs and cats should not be used at all in gardens or compost.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Why does Purdue's compost guide say human and pet feces should not be composted?", options: ["The danger of disease transmission", "They hold too much carbon for a home pile to heat properly", "Indiana law bans composting any animal manure at home", "The smell"], correctIndex: 0, explanation: "ID-182-W: \"Because of the danger of disease transmission, human and pet feces should not be composted.\" Indiana's IDEM in fact exempts home composting from registration (lesson 16).", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "What does Purdue's compost guide say finished compost needs before it is free of pests and weed seeds?", options: ["Six months of curing under a tarp, whatever temperature it reached", "Proper mixing and uniform heating", "A worm bin stage after the hot phase, to finish the job", "Direct sunlight"], correctIndex: 1, explanation: "ID-182-W: finished compost is free of pests and weed seeds only if it has been properly mixed and uniformly heated.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Why is \"I will compost it first\" not enough for dog waste in a home heap?", options: ["Composting dog waste is illegal in every state of the union", "Uniform heating cannot be assumed", "Dog waste has no nutrients worth the effort of composting", "It is enough"], correctIndex: 1, explanation: "Purdue says pet feces should not be composted, and a home heap cannot be assumed to have been properly mixed and uniformly heated.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Lesson 3's NRCS tables include swine rows. What do Purdue and Iowa State still say about pig manure?", options: ["Use it only on root crops, worked in 120 days before harvest", "Use it freely, since the NRCS tables list it as a standard manure", "Compost it twice", "Keep it out of gardens and compost"], correctIndex: 3, explanation: "A table describes what pigs produce; it does not recommend pig manure for a vegetable bed. Both extension guides rule it out.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Where does CDC say pet waste should go?", options: ["Into the compost pile, turned in at least five times", "Buried, or bagged for the trash", "Spread thin on a lawn so that sunlight can break it down", "Down a storm drain"], correctIndex: 1, explanation: "CDC: pet waste should be picked up daily and buried or bagged and disposed of in the trash.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "What do the extension guides add to CDC's pet-waste advice, for a gardener?", options: ["Only into a compost pile that holds 131 °F for three days", "Only around fruit trees, and never around vegetables", "Bag it twice", "Not into the garden or the compost"], correctIndex: 3, explanation: "Purdue and Iowa State both keep dog and cat waste out of gardens and compost piles, whatever the pile's temperature.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "You are offered mixed manure from a farm that also keeps dogs. What does lesson 5 suggest?", options: ["Accept it, since mixing averages out any risk from the dogs", "Ask which animal it came from", "Accept it once it has sat for a week in full sun", "Refuse all manure"], correctIndex: 1, explanation: "Lesson 5: a pile of mixed manure from a farm with dogs on it is a question, not an answer. Ask what went into it.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Which statement best sums up lesson 5's evidence on dog, cat and pig manure?", options: ["One guide bans them, but the others say a hot pile makes them safe", "The guides disagree, so the choice is left to each gardener", "No guide addresses it", "Independent guides agree: keep them out"], correctIndex: 3, explanation: "Three documents from two universities give the same instruction on dogs and cats, and two of them on pigs.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Which sentence comes from Purdue's compost guide?", options: ["Pet feces may be composted once the pile reaches 145 °F", "Dog feces are safe in compost but cat feces are not", "Compost all manures", "Human and pet feces should not be composted"], correctIndex: 3, explanation: "ID-182-W, page 2. The 145 °F figure comes from a different document, the 2005 dog-waste fact sheet.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Which manure do both extension guides rule out of gardens even though the NRCS has a table for it?", options: ["Pig", "Horse, because of the weed seeds that survive in its manure", "Dairy cow, because of its high moisture of 87 percent", "Rabbit"], correctIndex: 0, explanation: "The NRCS has swine tables. Purdue and Iowa State still keep pig manure out of gardens and compost piles.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Who published the 2005 fact sheet Composting Dog Waste?", options: ["The EPA alone, as part of a national pet-waste campaign", "Purdue Extension, for Indiana dog owners and kennels", "NRCS and the Fairbanks SWCD", "CDC"], correctIndex: 2, explanation: "The USDA Natural Resources Conservation Service and the Fairbanks Soil and Water Conservation District. The EPA website hosts the copy this course links to.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "The 2005 dog-waste fact sheet was based on a study from which year?", options: ["1991", "2005, the year the fact sheet itself was published", "1936, the year of Carver's compost bulletin", "2023"], correctIndex: 0, explanation: "The sheet is based on a 1991 Fairbanks study.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "Where does the sheet say dog waste compost can be used?", options: ["Vegetable gardens, if worked in 120 days before harvest", "Any food crop, once the pile has reached 145 °F", "Nowhere", "Revegetation, lawns and planting beds"], correctIndex: 3, explanation: "Page 1: dog waste compost can be used as a soil additive for revegetation, lawn establishment, and planting beds.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "What does the sheet say about crops grown for human consumption?", options: ["Its compost may be used on them after a 90 day wait", "Its compost may go on fruit trees but not on vegetables", "Nothing", "Its compost should not be used on them"], correctIndex: 3, explanation: "Page 1, the sentence after the allowed uses: it should not be used on crops grown for human consumption.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "Why does lesson 6 treat the sheet's food-crop line as strong evidence?", options: ["People who did the work still drew it", "It was written into federal law by the organic rule in 2005", "The study found dog waste had no nutrients worth using", "It is not strong evidence"], correctIndex: 0, explanation: "The authors worked out a method for composting dog waste and still ruled out food. The line was drawn by people who had done the work.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "What temperature does the sheet say compost must reach to destroy pathogens?", options: ["145 °F for several days", "131 °F for 3 days, the same as both federal processes", "170 °F for an hour, the organic rule's upper limit", "98 °F"], correctIndex: 0, explanation: "Page 4: compost must reach 145 °F for several days to destroy pathogens.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "How does the sheet's temperature compare with the federal composting processes?", options: ["Higher than their 131 °F", "Lower than their 170 °F floor, and so easier to reach", "The same as their 131 °F, simply written in Celsius", "Not comparable"], correctIndex: 0, explanation: "The dog-waste sheet asks for 145 °F for several days. Both federal processes in section 3 use 131 °F (55 °C).", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "What does the sheet name as the primary agents for disease in dog waste?", options: ["Salmonella bacteria from the dogs' raw food diets", "Fungal spores that survive above 180 °F", "Roundworm eggs", "Toxoplasma"], correctIndex: 2, explanation: "Page 6: the primary agents for disease are roundworm eggs.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "What does the sheet say about cat waste?", options: ["Not studied; not recommended for compost", "Studied, and found safe at 145 °F just like dog waste", "Studied, and found safe for planting beds only", "Better than dog waste"], correctIndex: 0, explanation: "Note 2 on page 1: cat and other pet wastes were not studied, and the authors do not recommend adding cat waste or cat litter to compost.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "What does the sheet say about cat litter?", options: ["Do not add it to compost", "Add it as the carbon layer, since litter is mostly clay", "Add it only after it has dried out for a week", "Burn it first"], correctIndex: 0, explanation: "The authors do not recommend adding cat waste or cat litter to your compost.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "Why does this course link to the dog-waste sheet rather than reproduce its drawings?", options: ["They are by named illustrators", "The drawings show methods that federal law now bans", "The sheet has no drawings, only tables of temperatures", "To save space"], correctIndex: 0, explanation: "The drawings are by Ellen Million and Noël Bell. The text is a federal work; the illustrations are credited and linked, not hosted.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "Which use would the 2005 dog-waste sheet rule out?", options: ["Seeding a bare slope to stop erosion after construction", "A tomato bed", "Establishing a new lawn in a backyard", "A flower bed"], correctIndex: 1, explanation: "Revegetation, lawns and planting beds are allowed. A tomato is a crop grown for human consumption, which the sheet rules out.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "What is the one study of composting dog waste that this course found?", options: ["A 2023 Iowa State trial on backyard compost bins", "A 1991 Fairbanks study", "A 1905 Tuskegee bulletin on worn-out soils", "A CDC survey"], correctIndex: 1, explanation: "The 2005 NRCS and Fairbanks SWCD fact sheet is based on a 1991 Fairbanks study, the only study of the practice the course found.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "What does CDC tell gardeners to wear when touching soil that cat feces may have contaminated?", options: ["Gloves", "A dust mask rated for mold spores and fine particles", "Rubber boots, washed in bleach after every session", "Sunscreen"], correctIndex: 0, explanation: "CDC: wear gloves when gardening or touching soil or sand that cat feces containing Toxoplasma may have contaminated.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "How often does CDC say to change a cat litter box?", options: ["Daily", "Weekly, after the litter has had time to dry out", "Every two to four weeks, before any eggs mature", "Monthly"], correctIndex: 0, explanation: "CDC: change the cat litter box daily. Two to four weeks is the Toxocara egg timing, a different parasite.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "Why does CDC say to change the litter box daily?", options: ["Cats will refuse to use a box that has been used even once", "Toxocara eggs need two to four weeks to mature in litter", "It is not infectious for 1 to 5 days", "To control odor"], correctIndex: 2, explanation: "Toxoplasma does not become infectious until one to five days after a cat sheds it, so a daily change removes it first.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "What does CDC say about outdoor sandboxes?", options: ["Replace the sand every spring with sterilized play sand", "Move them at least 50 feet from any vegetable garden", "Cover them", "Rake them weekly"], correctIndex: 2, explanation: "CDC's toxoplasmosis prevention page: cover outdoor sandboxes.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "What does CDC say to do with fruit and vegetables?", options: ["Soak them overnight in a weak bleach solution", "Peel every one, because rinsing does not help", "Rinse them under running water", "Freeze them"], correctIndex: 2, explanation: "CDC: rinse fruit and vegetables under running water.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "How long do the eggs on CDC's toxocariasis page need in the environment before they can cause infection?", options: ["One to five days, the same as Toxoplasma", "Six months, the same as Purdue's composting time", "Two to four weeks", "Ten years"], correctIndex: 2, explanation: "CDC says it takes two to four weeks in the environment for the eggs to develop enough to cause infection.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "How long can those eggs survive in the environment?", options: ["A day or two in sunlight, and then they die", "Exactly 120 days, matching the organic rule's longer interval", "Months, or even years", "One winter"], correctIndex: 2, explanation: "CDC: the eggs survive for months, or even years.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "What does CDC's toxocariasis page say should happen to pet waste?", options: ["Left to dry, then raked into the garden in the fall", "Put in a worm bin, which destroys the eggs", "Picked up daily, buried or bagged", "Hosed away"], correctIndex: 2, explanation: "CDC: pet waste should be picked up daily and buried or bagged and disposed of in the trash.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "Which parasite becomes infectious one to five days after a cat sheds it?", options: ["Toxoplasma", "Toxocara, whose eggs mature over two to four weeks", "Salmonella, counted in the produce rule's standards", "Roundworm"], correctIndex: 0, explanation: "That timing is CDC's for Toxoplasma. Toxocara eggs take two to four weeks.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "Why does lesson 7 say \"it was a while ago\" is no reason to plant food where pet waste was left?", options: ["CDC bans growing food anywhere a pet has ever been", "The parasite grows stronger each year it stays in soil", "It is a good reason", "The eggs can survive for years"], correctIndex: 3, explanation: "Toxocara eggs survive for months, or even years, so old pet waste is not gone just because time has passed.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "Which timing explains daily litter changes, and which explains long-lasting soil risk?", options: ["Toxocara for both, since its eggs mature fastest of all", "Toxoplasma for both, since it lasts for years in soil", "Toxoplasma; then Toxocara", "Neither"], correctIndex: 2, explanation: "Toxoplasma turns infectious in one to five days, so clear litter daily. Toxocara eggs mature over weeks and then last months or years in soil.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "CDC's gardening advice on Toxoplasma is aimed at soil contaminated by what?", options: ["Dog feces left on lawns and walkways", "Cat feces", "Pig manure from a backyard pen", "Bird droppings"], correctIndex: 1, explanation: "The advice is about soil or sand that cat feces containing Toxoplasma may have contaminated.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "Which habit from lesson 7 protects a gardener from both parasites?", options: ["Keeping pet waste out of beds", "Planting only crops whose edible part grows above the soil", "Waiting 90 days after any pet visit before harvesting", "Watering more"], correctIndex: 0, explanation: "Keeping pet waste out of the beds and the compost is the extension guides' rule from lessons 5 and 6, and it removes the source of both parasites. Daily pickup, gloves and rinsing produce come from CDC's two pages.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "What does 21 CFR 112.53 say about human waste?", options: ["Allowed on covered produce if composted for 15 days with five turnings", "Barred for covered produce, except biosolids", "Allowed on any crop once it has aged 120 days in the soil", "Allowed with a county permit"], correctIndex: 1, explanation: "112.53: you may not use human waste for growing covered produce, except sewage sludge biosolids used in accordance with 40 CFR part 503, subpart D.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "Under 21 CFR 112.53, human waste may be used on covered produce only as what?", options: ["Compost that reached 145 °F for several days, as for dog waste", "Raw material in a windrow turned at least five times", "Biosolids under 40 CFR 503", "Mulch"], correctIndex: 2, explanation: "The one exception is sewage sludge biosolids used under EPA's rule, 40 CFR part 503, subpart D.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "Why does this course not teach composting human waste?", options: ["No source in the course mentions human waste at all", "It is regulated and out of scope", "The organic rule's 120 days already makes it safe", "The smell"], correctIndex: 1, explanation: "21 CFR 112.53 regulates it, and its one exception runs through a separate EPA rule. Section 5 does mention it, in King's account, as history.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "Which course does lesson 8 point to for sanitation when the plumbing fails?", options: ["The River and the Watershed, its lesson 10 on nitrogen", "Off-Grid & Emergency Survival", "The Match, its lesson 3 on capacity grants", "Who Gets the Credit"], correctIndex: 1, explanation: "Off-Grid & Emergency Survival, lesson 15, \"Sanitation: human waste when plumbing fails\".", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "What does Purdue's FS-44-W say butchering wastewater must not be used for?", options: ["Adding to a compost pile, since it carries blood and fat", "Wetting down a dusty driveway in summer", "Anything", "Watering the fruit and vegetable garden"], correctIndex: 3, explanation: "FS-44-W points the wastewater toward a compost pile and adds: make sure it is not used to water your fruit and vegetable garden.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "Where does FS-44-W point butchering wastewater?", options: ["Into a storm drain, which carries it away from food", "Toward a compost pile", "Onto the lawn, spread thin in direct sun", "Into a well"], correctIndex: 1, explanation: "Purdue's bulletin points the wastewater toward a compost pile, or a sewer system for a small amount, never onto the garden.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "What does the NRCS chapter say about most pathogens from animals above 130 to 160 °F?", options: ["Most double in number, because heat speeds up their growth", "All of them survive until the pile passes 180 °F", "Nobody knows", "Most cannot survive"], correctIndex: 3, explanation: "NRCS: most pathogens originating from animals cannot survive above the 130 to 160 degrees Fahrenheit temperature range.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "What does the NRCS chapter say happens to the innermost layer when a pile is turned?", options: ["Outer pathogens recontaminate it", "It cools below 50 °F and stops decomposing for a week", "It dries below 15 percent moisture and becomes sterile", "Nothing"], correctIndex: 0, explanation: "Turning means the innermost layer is recontaminated with pathogens from the outermost layer.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "What does the NRCS chapter say about cool patches in aerated static piles?", options: ["They are where the greatest number of pathogens are killed", "They are where the worms finish off the composting", "Pathogens there can survive", "They never occur"], correctIndex: 2, explanation: "Aerated static piles leave cool patches that contain pathogenic organisms that can survive.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "A thermometer reads 150 °F at a pile's center. What does that reading tell you?", options: ["That every part of the pile, outside included, is now safe", "That the pile has met both federal compost processes", "Nothing", "The center's temperature"], correctIndex: 3, explanation: "The outer layer and any cool patch may never have got that hot. One center reading says nothing about time, turning or the rest of the pile.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "Which of these is on lesson 8's never list?", options: ["Butchering water on the garden", "Horse manure in a compost pile built with leaves", "Grass clippings mixed into a hot pile", "Straw"], correctIndex: 0, explanation: "The never list: dog, cat or pig manure in a food garden or compost; cat waste or litter in compost; human waste on covered produce outside the biosolids exception; butchering wastewater as garden water.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "Which source puts cat waste and cat litter on the never list for compost?", options: ["21 CFR 112.53, the produce rule's human-waste paragraph", "Purdue's FS-44-W on backyard poultry", "Darwin", "The 2005 NRCS and Fairbanks sheet"], correctIndex: 3, explanation: "The dog-waste fact sheet's note 2: the authors do not recommend adding cat waste or cat litter to compost.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "Section 5 reads King's account of human waste on fields. How does lesson 8 frame it?", options: ["As a method the produce rule now encourages for home gardens", "As proof that human waste is safe after 120 days", "As fiction", "As history, not a method"], correctIndex: 3, explanation: "Lesson 8 says section 5 reads that account as history and not as a method. Human waste stays out of scope.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "What does lesson 8 mean by \"the cool patch\"?", options: ["A shaded corner of the garden where manure dries slowly", "A pile kept below body temperature on purpose, as at Nara", "A frozen field", "Part of a pile that never got hot"], correctIndex: 3, explanation: "A cool patch is a part of a pile that stays below killing temperature, where the NRCS chapter says pathogens can survive.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Making it safe: composting
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-composting-is",
      title: "9 · What composting is: carbon, nitrogen, water and air",
      section: S3,
      recallContent: [
        {
          prompt: "What does 21 CFR 112.53 say about human waste?",
          answer:
            "You may not use human waste for growing covered produce, except sewage sludge biosolids used under 40 CFR part 503, subpart D.",
        },
        {
          prompt: "Why can a pile that read hot at the center still carry pathogens?",
          answer:
            "The outer layer and cool patches may never have got hot enough, and turning brings outer material into the center.",
        },
      ],
      body: `${SAFETY}

Start with the NRCS definition from lesson 1 and read it word by word: "Composting is the controlled aerobic decomposition of organic matter by microorganisms into a stable, humus-like soil amendment" (NRCS, 2010, p. 2-1).

- **Controlled:** someone manages it. A heap left alone is decomposing, but nobody is controlling it.
- **Aerobic:** with oxygen. FDA's produce rule glosses the word for you: "aerobic (i.e., oxygenated)" (21 C.F.R. § 112.54(b)(1)).
- **Microorganisms:** living decomposers do the work. Manure and plant waste are what they break down.
- **Stable, humus-like soil amendment:** the matter is not destroyed. It changes form and goes back into the loop as something soil can use.

Four things decide whether those microorganisms thrive: carbon, nitrogen, water and air.

**Carbon to nitrogen (C:N).** Three sources, three overlapping windows:

| Source | Starting C:N |
|---|---|
| NRCS composting chapter | "20:1 to 40:1 for rapid composting" (p. 2-2) |
| The organic rule | "between 25:1 and 40:1" (7 C.F.R. § 205.203(c)(2)(i)) |
| Purdue's compost guide | "approximately 30:1" (Lerner, 2020, p. 2) |

The NRCS chapter adds that "C:N ratios as low as 14:1 also compost well and are practical for composting animal mortalities" (p. 2-8).

**What goes wrong at each end.** Too much carbon, and "nitrogen availability is the limiting factor" (p. 2-8): the pile is slow. Too little carbon, and ammonia is lost; it may "leach out of the pile and potentially contaminate ground or surface water" (p. 2-8). That second failure is where the loop leaks into a river.

**Water.** Moisture "ideally should be 60 percent after the ingredients are mixed" (p. 2-2). The chapter describes 50 to 70 percent moisture as one that "feels damp but not soggy" and compares it to a wrung-out sponge. Elsewhere it gives a range: "generally recommended to be in the range of 40 to 65 percent. Below 15 percent moisture, microbial activity ceases altogether" (p. 2-11).

**pH.** Mostly it looks after itself: "pH is often self-regulating between 6 to 7.5" (p. 2-2).

**Air.** Aerobic means oxygen has to reach the microorganisms. Lesson 10 shows what happens in the parts of a pile where it does not.

:::reveal What happens to a pile with too little carbon for its nitrogen? ||| It loses nitrogen as ammonia, which can leach out of the pile and potentially contaminate ground or surface water.

:::reveal How does the NRCS chapter describe the right moisture by feel? ||| Damp but not soggy, like a wrung-out sponge, at roughly 50 to 70 percent moisture.

## Sources
- ${nrcs637("Printed pp. 2-1, 2-2, 2-8 and 2-11 (PDF pp. 9, 10, 16 and 19)", 9)}
- ${ORGANIC("(c)(2)(i)")}
- ${PRODUCE("112.54", "(b)(1)")}
- ${ID182("Page 2")}`,
    },
    {
      slug: "heat-oxygen-and-time",
      title: "10 · Heat, oxygen and time: the stages of a pile",
      section: S3,
      recallContent: [
        {
          prompt: "Give the starting C:N windows from the NRCS chapter, the organic rule and Purdue.",
          answer: "NRCS 20:1 to 40:1; the organic rule 25:1 to 40:1; Purdue about 30:1.",
        },
        {
          prompt: "What happens below 15 percent moisture?",
          answer: "Microbial activity ceases altogether (NRCS chapter, p. 2-11).",
        },
      ],
      body: `${SAFETY}

A working pile changes temperature in a pattern, and the pattern is your evidence that it is working.

**The stages, by temperature** (NRCS, 2010, pp. 2-3 to 2-5):

| Stage | Temperature |
|---|---|
| Psychrophilic | below 50 °F |
| Mesophilic | 50 to 105 °F |
| Thermophilic | above 105 °F ("between 105 and 160") |
| Curing | back below 105 °F |

The chapter says the thermophilic stage is reached in "2 to 3 days" (p. 2-3). That heat is "necessary for the destruction of pathogens, fly larvae, and weed seeds" (p. 2-3). The peak is "about 130 to 160 degrees Fahrenheit", and the thermophilic stage lasts "10 to 60 days" (p. 2-4).

**Hotter is not always better.** "Fungi also cannot survive above a temperature of 140 degrees Fahrenheit" (p. 2-5). Above 170 °F, the pile "is unable to control its temperature" (p. 2-21).

**What heat kills, and what it does not.** "Most pathogens originating from animals cannot survive above the 130 to 160 degrees Fahrenheit temperature range". But some fungal plant pathogens "can withstand temperatures above 180 degrees Fahrenheit". And the chapter names how anyone checks: "temperature and time are the main indicators used to verify optimal pathogen destruction" (all pp. 2-26 to 2-27).

**Aerobic and anaerobic.** Composting is aerobic by definition. Where oxygen does not reach, decomposition still happens, but differently, and the thermometer shows it: cold spots "indicate sites of anaerobic decomposition" (p. 2-20). A passive pile, one that is built and left, has the same weakness: "this method is slow, and the potential for development of anaerobic conditions is greater" (p. 2-37).

**Reading the evidence.** Suppose you push a long thermometer into a pile on day 3:

| Spot | Reading | What the chapter lets you conclude |
|---|---|---|
| Center | 140 °F | Thermophilic: the aerobic process is running |
| One corner | 85 °F | A cold spot: possibly anaerobic, or too dry (below 15 percent moisture, activity stops) |
| Top surface | 70 °F | The outer layer, which turning will carry inward (lesson 8) |

None of this needs a laboratory. A pile that heats into the thermophilic range within days, throughout, is giving you evidence of aerobic decomposition. A cold spot in a pile that is otherwise hot is evidence that something there, air or water, is wrong.

:::reveal What does a cold spot inside an active pile indicate, according to the NRCS chapter? ||| A site of anaerobic decomposition.

:::reveal Why is a pile above 170 °F a problem rather than a success? ||| The chapter says that above 170 °F the pile is unable to control its temperature, and the organic rule's process tops out at 170 °F.

## Sources
- ${nrcs637("Printed pp. 2-3 to 2-5 (PDF pp. 11 to 13); pp. 2-20 to 2-21 (PDF pp. 28 to 29); section 637.0206, pp. 2-26 to 2-27 (PDF pp. 34 to 35); p. 2-37 (PDF p. 45)", 11)}
- ${ORGANIC("(c)(2)(ii)")}`,
    },
    {
      slug: "two-federal-compost-processes",
      title: "11 · Two federal recipes for a safe compost process",
      section: S3,
      recallContent: [
        {
          prompt: "Name the four temperature stages of a compost pile in order.",
          answer: "Psychrophilic (below 50 °F), mesophilic (50 to 105 °F), thermophilic (above 105 °F), then curing below 105 °F.",
        },
        {
          prompt: "What does the NRCS chapter say are the main indicators used to verify pathogen destruction?",
          answer: "Temperature and time.",
        },
      ],
      body: `${SAFETY}

Two federal rules describe a compost process for manure, and a third rule, EPA's for biosolids, defines two more. Read them as recipes.

**The organic rule** (7 C.F.R. § 205.203(c)(2)). The compost must have:

- "(i) Established an initial C:N ratio of between 25:1 and 40:1; and"
- "(ii) Maintained a temperature of between 131 °F and 170 °F for 3 days using an in-vessel or static aerated pile system; or"
- "(iii)" the same temperature "for 15 days using a windrow composting system, during which period, the materials must be turned a minimum of five times."

**FDA's produce safety rule** (21 C.F.R. § 112.54(b)) starts from a result, not a recipe. It requires a process "validated to satisfy the microbial standard in § 112.55(b)", then gives two composting processes as "examples" that meet that standard:

- "(1) Static composting that maintains aerobic (i.e., oxygenated) conditions at a minimum of 131 °F (55 °C) for 3 consecutive days and is followed by adequate curing"
- "(2) Turned composting" at 131 °F (55 °C) "for 15 days (which do not have to be consecutive), with a minimum of five turnings, and is followed by adequate curing."

**Side by side.**

| | Organic rule | Produce safety rule |
|---|---|---|
| Temperature | 131 to 170 °F | at least 131 °F (55 °C) |
| Static or in-vessel | 3 days | 3 consecutive days, aerobic, then adequate curing |
| Turned (windrow) | 15 days, at least five turnings | 15 days, need not be consecutive, at least five turnings, then adequate curing |
| What the rule sets | the process itself, plus a starting C:N of 25:1 to 40:1 | a microbial standard (below); these two processes are examples that meet it |

**The standard the examples meet.** Section 112.55(b) sets the standard a produce-rule process must be validated to meet: Salmonella below the detection limit (3 MPN per 4 grams) "and less than 1,000 MPN fecal coliforms per gram" (21 C.F.R. § 112.55(b)). MPN means most probable number, the unit the counts are given in (21 C.F.R. § 112.55(a)(2)).

**EPA's two processes for biosolids** (40 C.F.R. pt. 503, app. B). One, called PSRP, holds 40 °C for five days with four hours above 55 °C. The other, PFRP, holds 55 °C for three days (in-vessel or static aerated) or 15 days with five turnings (windrow). The NRCS chapter gives the PSRP in Fahrenheit as "104 degrees Fahrenheit or higher for 5 days with at least 4 hours of that 5 days with temperatures 131 degrees Fahrenheit or higher", says it "is sufficient for compost used on traditional row crops", and says that "when the compost is used on vegetable crops" the PFRP "should be used". It notes the organic standard "is similar to the PFRP method" (NRCS, 2010, pp. 2-33 to 2-35).

**One number runs through all of them: 131 °F, which is 55 °C.**

**What finished compost looks like**, per the same NRCS pages: moisture of "30 to 50 percent" and pH of "6 to 8".

:::reveal What temperature appears in every federal process in this lesson? ||| 131 °F, which is 55 °C.

:::reveal Name one thing the produce safety rule's composting processes require that the organic rule's (c)(2) does not mention. ||| Adequate curing after the hot phase. Its turned process also allows the 15 days to be non-consecutive.

## Sources
- ${ORGANIC("(c)(2)")}
- ${PRODUCE("112.54", "(b)")}
- ${PRODUCE("112.55", "(a)(2) and (b)")}
- ${BIOSOLIDS}
- ${nrcs637("Section 637.0209(g), printed pp. 2-33 to 2-35 (PDF pp. 41 to 43)", 41)}`,
    },
    {
      slug: "turning-cold-heaps-and-worms",
      title: "12 · Turning, cold heaps, and worms",
      section: S3,
      recallContent: [
        {
          prompt: "State the organic rule's two compost processes.",
          answer:
            "A starting C:N of 25:1 to 40:1, then 131 to 170 °F for 3 days in-vessel or static aerated, or for 15 days in a windrow turned at least five times.",
        },
        {
          prompt: "What microbial standards must the produce rule's compost meet?",
          answer: "Salmonella below the detection limit (3 MPN per 4 grams) and fewer than 1,000 MPN fecal coliforms per gram.",
        },
      ],
      body: `${SAFETY}

Lesson 11 gave the recipes. This lesson is about the gap between those recipes and a heap in a backyard.

**Why turning matters, and why it is not enough by itself.** Turning puts outside material in the middle. The NRCS chapter's warning cuts the other way too: when a pile is turned, "the innermost layer is recontaminated with pathogens from the outermost layer" (NRCS, 2010, pp. 2-26 to 2-27). One hot reading after one turn proves little. Both federal turned processes count days and turnings together: 15 days, at least five turnings, at 131 °F or above. And the chapter's own test, from lesson 10, is temperature and time.

**Static piles have their own weak spot.** Aerated static piles leave "cool patches" that "contain pathogenic organisms that can survive" (pp. 2-26 to 2-27).

**Passive piles are slow.** A pile built and left alone: "this method is slow, and the potential for development of anaerobic conditions is greater" (p. 2-37).

**Purdue's home method.** Purdue's compost guide gives a home recipe (Lerner, 2020, p. 3):

- a nitrogen layer of "1-2 inches of animal manure";
- a heap of "4-5 feet", which should reach 130 to 160 °F in the center;
- turn it "at least once or twice a month".

And the sentence that matters most: "Finished compost is free of pests and weed seeds only if it has been properly mixed and uniformly heated" (p. 4).

**Put the two side by side.** Purdue's home schedule turns once or twice a month. The federal turned process turns at least five times in 15 days. Purdue's schedule is a home method. It is not either federal process, and unless you have measured it, you cannot call its manure treated. Treat manure that went through a cold or slow heap as raw, and use the timing rules in section 4.

**Worms.** The NRCS chapter is blunt about what a worm bin is: "Vermiculture is worm farming, not composting at all", with "little or no pathogen or weed seed reduction", and "There is no need to add worms to compost" (p. 2-7). Worms build soil, as Darwin showed (section 5). They do not make manure safe.

**Farm composting you will only read about.** The same chapter covers composting dead animals as a farm practice (section 637.0213, p. 2-52), and notes C:N ratios as low as 14:1 are practical for it (p. 2-8). This course does not teach it.

:::reveal Does adding worms make a pile safer? ||| No. The NRCS chapter calls vermiculture worm farming, not composting, with little or no pathogen or weed seed reduction, and says there is no need to add worms to compost.

:::reveal How often does Purdue's home compost guide say to turn the heap, and how does that compare with the federal turned process? ||| At least once or twice a month, against at least five turnings in 15 days.

## Sources
- ${nrcs637("Section 637.0206, printed pp. 2-26 to 2-27 (PDF pp. 34 to 35); p. 2-7 (PDF p. 15); p. 2-8 (PDF p. 16); p. 2-37 (PDF p. 45); section 637.0213, p. 2-52 (PDF p. 60)", 34)}
- ${ID182("Pages 3 and 4")}`,
    },
    {
      slug: "mixing-a-pile-with-table-2a-1",
      title: "13 · Mixing a pile with Table 2A-1",
      section: S3,
      recallContent: [
        {
          prompt: "Why can turning a pile recontaminate it?",
          answer: "The NRCS chapter says turning recontaminates the innermost layer with pathogens from the outermost layer.",
        },
        {
          prompt: "What does the NRCS chapter say about worm bins and pathogens?",
          answer: "Vermiculture is worm farming, not composting, with little or no pathogen or weed seed reduction.",
        },
      ],
      body: `${SAFETY}

The NRCS chapter's Appendix 2A has a table, "Typical characteristics of selected raw materials", adapted from the *On-Farm Composting Handbook* (NRAES-54). It gives a C:N ratio for many raw materials, and the moisture of most of those (NRCS, 2010, pp. 2A-5 to 2A-7). Here are the ones a garden or small farm is likely to have.

| Material | C:N | Moisture, % wet |
|---|---|---|
| Laying hen manure | 6 (range 3 to 10) | 69 |
| Broiler litter | 14 | 37 |
| Swine manure | 14 | 80 |
| Food waste | 14 to 16 | |
| Sheep manure | 16 | 69 |
| Legume hay | 16 | |
| Grass clippings | 17 (range 9 to 25) | 82 |
| Cattle manure | 19 (range 11 to 30) | 81 |
| Vegetable produce | 19 | |
| Horse manure | 30 (range 22 to 50) | 72 |
| Fruit wastes | 40 | |
| Leaves | 54 (range 40 to 80) | 38 |
| Corn stalks | 60 to 73 | |
| Straw | 80 (range 48 to 150) | |
| Sawdust | 442 (range 200 to 750) | |
| Corrugated cardboard | 563 | |

**Reading it.** Horse manure, at 30, sits inside the organic rule's 25:1 to 40:1 window on its own. Laying hen manure, at 6, is far below even the 14:1 the chapter calls practical for mortalities. A pile built on hen manure needs a lot of high-carbon partner: leaves at 54, straw at 80, sawdust at 442. Purdue's guide gives the same picture in rougher form: livestock manure 10 to 30:1, leaves 40 to 80:1 (Lerner, 2020, p. 2).

**Moisture pairs too.** Hen manure at 69 percent and leaves at 38 percent pull toward each other, and the chapter's target is about 60 percent after mixing (lesson 9).

**Why you cannot just average the ratios.** A C:N ratio is carbon divided by nitrogen. Two materials can share a ratio and hold very different amounts of nitrogen, so the ratio of a mix depends on how much carbon and nitrogen each part actually carries, not only on its ratio. The table tells you which partner to reach for and in which direction. An exact mix needs the nitrogen content of your own materials, which is what a manure test gives you (lesson 4).

**The thermometer is the check.** Mix toward the window, build the pile, and watch it: a good mix reaches the thermophilic stage in two to three days (lesson 10). If it does not, the C:N, the moisture or the air is off.

:::reveal Which common manure in Table 2A-1 already sits inside the organic rule's 25:1 to 40:1 window? ||| Horse manure, at a C:N of 30.

:::reveal Why can you not find a mix's C:N by averaging the ratios of its parts? ||| Because the ratio alone does not tell you how much nitrogen each part holds. The mix depends on the actual carbon and nitrogen in each material.

## Sources
- ${nrcs637("Appendix 2A, Table 2A-1, printed pp. 2A-5 to 2A-7 (PDF pp. 91 to 93); adapted in the chapter from the On-Farm Composting Handbook (NRAES-54)", 91)}
- ${ID182("Page 2, Table 1")}`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Making it safe",
      section: S3,
      body: "Questions are drawn at random from this section's pool, so a retake asks different ones. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "In the NRCS definition, what does the word \"controlled\" tell you about composting?", options: ["It happens only inside a sealed industrial vessel", "It is licensed by the state environmental agency", "Someone manages it", "It is fast"], correctIndex: 2, explanation: "Controlled means managed. A heap left alone is decomposing, but nobody is controlling it.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What does FDA's produce rule write directly after the word \"aerobic\"?", options: ["(i.e., kept below 105 °F throughout the process)", "(i.e., turned at least five times in 15 days)", "(i.e., oxygenated)", "(i.e., covered)"], correctIndex: 2, explanation: "21 CFR 112.54(b)(1) says \"aerobic (i.e., oxygenated)\", which is the plainest gloss of the word you will find.", sourceLessonSlug: "what-composting-is" },
          { prompt: "In composting, what happens to the matter in manure and plant waste?", options: ["It is destroyed by the heat, leaving only water vapor and ash", "It changes form", "It all escapes as ammonia gas within the first 24 hours", "It stays unchanged"], correctIndex: 1, explanation: "The NRCS definition ends with \"a stable, humus-like soil amendment\": the matter changes form and goes back into the loop.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What starting C:N does the NRCS chapter give for rapid composting?", options: ["25:1 to 40:1, the window written into the organic rule", "About 30:1, the single figure in Purdue's compost guide", "6:1", "20:1 to 40:1"], correctIndex: 3, explanation: "NRCS p. 2-2: an initial C:N of 20:1 to 40:1 for rapid composting. The organic rule says 25:1 to 40:1, and Purdue about 30:1.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What starting C:N does the organic rule require?", options: ["Between 20:1 and 40:1, as the NRCS chapter gives for rapid composting", "Exactly 30:1, the figure Purdue's guide calls ideal", "Between 25:1 and 40:1", "Under 14:1"], correctIndex: 2, explanation: "7 CFR 205.203(c)(2)(i): an initial C:N ratio of between 25:1 and 40:1.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What does Purdue's compost guide call the ideal C:N?", options: ["About 14:1, which the NRCS chapter calls practical for mortalities", "About 54:1, the ratio Table 2A-1 gives for leaves", "100:1", "About 30:1"], correctIndex: 3, explanation: "ID-182-W: the ideal ratio of carbon to nitrogen is approximately 30:1.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What does the NRCS chapter say about C:N ratios as low as 14:1?", options: ["They also compost well", "They cannot compost at all, because the carbon runs out at once", "They are banned under the organic rule for any manure", "They need worms"], correctIndex: 0, explanation: "NRCS p. 2-8: C:N ratios as low as 14:1 also compost well and are practical for composting animal mortalities.", sourceLessonSlug: "what-composting-is" },
          { prompt: "For what does the NRCS chapter say ratios as low as 14:1 are practical?", options: ["Sawdust and cardboard, which hold far more carbon than nitrogen", "Leaves and straw gathered in the autumn", "Newsprint", "Composting animal mortalities"], correctIndex: 3, explanation: "The chapter names animal mortalities. Dead-animal composting is a farm practice this course describes but does not teach.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What happens when a pile has too much carbon for its nitrogen?", options: ["Nitrogen limits it, so it is slow", "It overheats past 170 °F and loses control of its temperature", "Ammonia leaches out of it into ground and surface water", "It gets too wet"], correctIndex: 0, explanation: "NRCS p. 2-8: with too much carbon, nitrogen availability is the limiting factor. Ammonia loss is the opposite problem, too little carbon.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What happens when a pile has too little carbon for its nitrogen?", options: ["Nitrogen availability becomes the factor that limits the pile", "The pile drops below 15 percent moisture and stops", "It gets heavier", "Ammonia is lost"], correctIndex: 3, explanation: "With too little carbon, ammonia is lost and may leach out of the pile.", sourceLessonSlug: "what-composting-is" },
          { prompt: "Where can ammonia from a pile short of carbon end up, according to the NRCS chapter?", options: ["Locked into the finished compost as a stable solid", "Inside the worms, which store it for later", "In ground or surface water", "In the soil test"], correctIndex: 2, explanation: "NRCS p. 2-8: it may leach out of the pile and potentially contaminate ground or surface water. That is where the loop leaks into a river.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What moisture does the NRCS chapter call ideal after the ingredients are mixed?", options: ["15 percent, the point at which microbes do their best work", "90 percent, the moisture of fresh feedlot manure", "60 percent", "30 percent"], correctIndex: 2, explanation: "NRCS p. 2-2: moisture ideally should be 60 percent after the ingredients are mixed. Below 15 percent, activity stops.", sourceLessonSlug: "what-composting-is" },
          { prompt: "How does the NRCS chapter describe 50 to 70 percent moisture by feel?", options: ["Dripping when squeezed, like a soaked bath towel", "Dry and dusty, like potting mix from a new bag", "Frozen", "Damp but not soggy"], correctIndex: 3, explanation: "The chapter says it feels damp but not soggy, and compares it to a wrung-out sponge.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What happens to a pile below 15 percent moisture?", options: ["Composting speeds up as the pile heats past 160 °F", "Every pathogen in it dies within one day", "Worms move in", "Microbial activity ceases"], correctIndex: 3, explanation: "NRCS p. 2-11: below 15 percent moisture, microbial activity ceases altogether.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What moisture range does the NRCS chapter generally recommend?", options: ["10 to 15 percent, dry enough that nothing can grow", "80 to 95 percent, wet enough to keep the pile saturated", "40 to 65 percent", "100 percent"], correctIndex: 2, explanation: "NRCS p. 2-11: generally recommended to be in the range of 40 to 65 percent.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What does the NRCS chapter say about pH in a compost pile?", options: ["It must be raised to 9 with lime before any pile will heat", "Often self-regulating, 6 to 7.5", "It must be lowered to 4 with sulfur to kill pathogens", "It is irrelevant"], correctIndex: 1, explanation: "NRCS p. 2-2: pH is often self-regulating between 6 to 7.5.", sourceLessonSlug: "what-composting-is" },
          { prompt: "What temperature range is the mesophilic stage?", options: ["Below 50 °F, where decomposition is slowest", "Above 105 °F, where the pathogens are destroyed", "50 to 105 °F", "131 to 170 °F"], correctIndex: 2, explanation: "NRCS: psychrophilic below 50 °F, mesophilic 50 to 105 °F, thermophilic above 105 °F.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "Above what temperature does the thermophilic stage begin?", options: ["105 °F", "131 °F, the floor of both federal compost processes", "50 °F, the boundary of the psychrophilic stage", "170 °F"], correctIndex: 0, explanation: "The thermophilic stage is above 105 °F; page 2-5 puts it between 105 and 160 °F. 131 °F is a rule's minimum, not a stage boundary.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "How soon does the NRCS chapter say the thermophilic stage is reached?", options: ["In 10 to 60 days, the time the thermophilic stage lasts", "In six months, the time Purdue says to compost manure", "In 2 to 3 days", "In one hour"], correctIndex: 2, explanation: "NRCS p. 2-3: the thermophilic stage is reached in 2 to 3 days. It then lasts 10 to 60 days.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "What does the NRCS chapter say thermophilic heat is necessary for?", options: ["Destroying pathogens, larvae and seeds", "Drying the pile below 15 percent so that it can be bagged", "Keeping a worm population active through the winter", "Darkening it"], correctIndex: 0, explanation: "NRCS p. 2-3: the heat is necessary for the destruction of pathogens, fly larvae, and weed seeds.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "What peak temperature does the NRCS chapter give for a pile?", options: ["About 180 to 200 °F, hot enough to kill every fungus", "About 98 °F, close to body temperature", "212 °F", "About 130 to 160 °F"], correctIndex: 3, explanation: "NRCS p. 2-4: the peak is about 130 to 160 degrees Fahrenheit.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "How long does the thermophilic stage last, according to the NRCS chapter?", options: ["10 to 60 days", "2 to 3 days, the time it takes to reach that stage", "Exactly 15 days, the length of the turned federal process", "One year"], correctIndex: 0, explanation: "NRCS p. 2-4: the thermophilic stage lasts 10 to 60 days, then curing begins below 105 °F.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "During curing, where is the pile's temperature?", options: ["Above 160 °F, the hottest stage of the whole process", "Exactly 131 °F, held for three days", "Below 105 °F", "Below freezing"], correctIndex: 2, explanation: "Curing follows the thermophilic stage, back below 105 °F.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "Above what temperature does the NRCS chapter say fungi cannot survive?", options: ["105 °F, where the thermophilic stage begins", "140 °F", "180 °F, the point some fungal plant pathogens withstand", "50 °F"], correctIndex: 1, explanation: "NRCS p. 2-5: fungi also cannot survive above a temperature of 140 degrees Fahrenheit.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "What does the NRCS chapter say about a pile above 170 °F?", options: ["It cannot control its temperature", "It has passed every pathogen standard and can be used at once", "It is curing and should be left alone for a month", "It is ideal"], correctIndex: 0, explanation: "NRCS p. 2-21: above 170 °F the pile is unable to control its temperature. The organic rule's process tops out at 170 °F.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "Which pathogens does the NRCS chapter say can withstand temperatures above 180 °F?", options: ["Most pathogens from animals, which the heat cannot reach", "Some fungal plant pathogens", "The roundworm eggs named in the dog-waste fact sheet", "None"], correctIndex: 1, explanation: "Most animal pathogens cannot survive above 130 to 160 °F, but some fungal plant pathogens can withstand temperatures above 180 °F.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "What does the NRCS chapter call the main indicators used to verify pathogen destruction?", options: ["Color and smell, judged by an experienced composter", "Weight loss and pile height, measured every week", "Temperature and time", "pH alone"], correctIndex: 2, explanation: "NRCS: temperature and time are the main indicators used to verify optimal pathogen destruction.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "What does a cold spot inside an active pile indicate, according to the NRCS chapter?", options: ["Finished compost, ready to spread on a vegetable bed", "Anaerobic decomposition", "Too much carbon, which always makes a pile run cold", "Worm activity"], correctIndex: 1, explanation: "NRCS p. 2-20: cold spots indicate sites of anaerobic decomposition.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "What does the NRCS chapter say about passive piles?", options: ["Slow, with more risk of anaerobic zones", "Fast, because nobody disturbs the microorganisms at work", "Safe for manure, since waiting meets the organic rule", "Odorless"], correctIndex: 0, explanation: "NRCS p. 2-37: this method is slow, and the potential for development of anaerobic conditions is greater.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "On day 3 a pile reads 140 °F at the center. What does that suggest?", options: ["The pile has met the produce rule and is ready for vegetables", "The aerobic process is running", "The pile is too wet and has gone anaerobic in the middle", "Nothing"], correctIndex: 1, explanation: "140 °F is thermophilic, reached in the 2 to 3 days the chapter describes. One reading does not show the time a federal process needs.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "A corner of an otherwise hot pile reads 85 °F. Which two causes does lesson 10 let you consider?", options: ["Too much nitrogen, or too many worms in that corner", "Too little air, or too dry", "A faulty thermometer, or a pile above 170 °F", "Sunlight"], correctIndex: 1, explanation: "Cold spots indicate anaerobic decomposition, and below 15 percent moisture microbial activity stops. Check air and water.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "Why does lesson 10 treat the temperature pattern as evidence?", options: ["The organic rule requires a daily photograph of the thermometer", "It shows whether the pile is working", "Heat alone proves the compost passed 112.55's microbial test", "It does not"], correctIndex: 1, explanation: "A pile that heats into the thermophilic range within days, throughout, is evidence of aerobic decomposition; a cold spot is evidence of a problem.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "In what order do a pile's temperature stages run as it heats and cools?", options: ["Thermophilic, mesophilic, then psychrophilic as the pile freezes", "Mesophilic, thermophilic, curing", "Curing first, then the hot stage, then mesophilic", "All at once"], correctIndex: 1, explanation: "A pile warms through the mesophilic range (50 to 105 °F) into the thermophilic stage (above 105 °F), then cures back below 105 °F.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "Under the organic rule, how long must an in-vessel or static aerated pile hold 131 to 170 °F?", options: ["15 days, with the materials turned at least five times", "120 days, the same as the raw-manure interval", "3 days", "1 day"], correctIndex: 2, explanation: "205.203(c)(2)(ii): between 131 °F and 170 °F for 3 days using an in-vessel or static aerated pile system.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "Under the organic rule, how long must a windrow hold temperature, and how often is it turned?", options: ["3 days, with no turning required at all", "15 days, with one turning at the midpoint", "15 days, turned five times", "90 days"], correctIndex: 2, explanation: "205.203(c)(2)(iii): 15 days in a windrow system, turned a minimum of five times.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What upper temperature limit does the organic rule set for its compost processes?", options: ["170 °F", "131 °F, which is in fact the rule's minimum", "145 °F, the figure in the dog-waste fact sheet", "212 °F"], correctIndex: 0, explanation: "The organic rule's range is between 131 °F and 170 °F. The produce rule sets a minimum only.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "Besides 131 °F for 3 consecutive days, what does the produce rule's static process require?", options: ["A starting C:N of 25:1 to 40:1, checked by a laboratory", "Aerobic conditions, then curing", "A windrow turned five times in those three days", "A county permit"], correctIndex: 1, explanation: "112.54(b)(1): static composting that maintains aerobic (i.e., oxygenated) conditions at a minimum of 131 °F for 3 consecutive days, followed by adequate curing.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "How does the produce rule's turned process count its 15 days?", options: ["They must be 15 days in a row, restarting after any cold day", "They count only days spent above 170 °F", "As weeks", "They need not be consecutive"], correctIndex: 3, explanation: "112.54(b)(2): 131 °F for 15 days (which do not have to be consecutive), with a minimum of five turnings.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "Which requirement appears in the organic rule's (c)(2) but not in the produce rule's two processes as quoted?", options: ["A minimum of five turnings for the windrow method", "A temperature of at least 131 °F", "A starting C:N", "Curing"], correctIndex: 2, explanation: "The organic rule sets an initial C:N of 25:1 to 40:1. Both rules set 131 °F and five turnings; curing appears only in the produce rule.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What does the produce rule require after both of its composting processes?", options: ["Adequate curing", "A second hot phase at 170 °F for one full day", "Bagging and labeling with a guaranteed analysis", "Worms"], correctIndex: 0, explanation: "Both 112.54(b)(1) and (b)(2) end with \"followed by adequate curing\".", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What does 21 CFR 112.55(b) set?", options: ["Microbial standards", "The 90 and 120 day intervals for raw manure", "Setback distances from wells and property lines", "Turning schedules"], correctIndex: 0, explanation: "112.55(b) sets microbial standards: Salmonella below detection and fewer than 1,000 MPN fecal coliforms per gram.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What fecal coliform level does 112.55(b) allow?", options: ["Fewer than 3 MPN per 4 grams, the Salmonella limit", "Up to one million per gram after curing", "Fewer than 1,000 MPN per gram", "Any level"], correctIndex: 2, explanation: "112.55(b): less than 1,000 MPN fecal coliforms per gram.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What does 112.55(b) require for Salmonella?", options: ["Below detection (3 MPN per 4 g)", "Fewer than 1,000 MPN per gram, the same as fecal coliforms", "No limit, since heat always destroys it", "Ten per gram"], correctIndex: 0, explanation: "Salmonella must be below the detection limit of 3 MPN per 4 grams.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What does MPN stand for in the produce rule's microbial standards?", options: ["Most probable number", "Minimum pathogen number, the lowest count a lab will report", "Manure per nitrogen, a ratio from the NRCS tables", "Microbes per milliliter"], correctIndex: 0, explanation: "MPN is most probable number, the unit the counts are given in.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "In EPA's biosolids rule, what does the PFRP require of a static aerated or in-vessel pile?", options: ["55 °C for three days", "40 °C for five days with four hours above 55 °C", "55 °C for 15 days with no turning at all", "100 °C"], correctIndex: 0, explanation: "PFRP: 55 °C for three days in-vessel or static aerated, or 15 days with five turnings in a windrow. The 40 °C version is PSRP.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "Which process does the NRCS chapter say should be used when compost goes on vegetable crops?", options: ["PSRP, which the chapter calls sufficient for vegetables", "PFRP", "Vermiculture, which it calls the gentlest method", "None"], correctIndex: 1, explanation: "The chapter says PSRP is sufficient for traditional row crops, but on vegetable crops PFRP should be used.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What does the NRCS chapter say about the organic standard and PFRP?", options: ["The organic standard is far weaker, closer to PSRP", "The organic standard forbids PFRP compost on organic farms", "They are similar", "No relation"], correctIndex: 2, explanation: "The chapter says the organic standard is similar to the PFRP method.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "Which number appears in every federal process in lesson 11?", options: ["170 °F, the top of every process's temperature range", "145 °F, the pathogen temperature in all of them", "105 °F", "131 °F (55 °C)"], correctIndex: 3, explanation: "The organic rule, the produce rule and EPA's PSRP and PFRP all use 131 °F, which is 55 °C.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What moisture should finished compost have, according to the NRCS chapter?", options: ["60 percent, the target for a freshly mixed pile", "30 to 50 percent", "Below 15 percent, so that nothing can grow in it", "90 percent"], correctIndex: 1, explanation: "NRCS section 637.0209(g): finished moisture of 30 to 50 percent and pH of 6 to 8.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "What pH does the NRCS chapter give for finished compost?", options: ["4 to 5, acid enough to keep weeds from sprouting", "9 to 10, alkaline from the lime added during mixing", "6 to 8", "Exactly 7"], correctIndex: 2, explanation: "NRCS section 637.0209(g): pH of 6 to 8.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "Why does one hot reading after one turn prove little?", options: ["Thermometers read 20 degrees high in fresh manure", "The organic rule accepts only readings taken at night", "It proves a lot", "Turning recontaminates the core"], correctIndex: 3, explanation: "Turning moves outer material inward, recontaminating the innermost layer. The chapter's test is temperature and time, not one reading.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "Both federal turned processes count which two things together?", options: ["Pounds of manure and pounds of carbon added each day", "Days and turnings", "The pile's height and width in feet", "Color and smell"], correctIndex: 1, explanation: "Both say 15 days at 131 °F or above with at least five turnings.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "In Purdue's home method, how thick is the nitrogen layer of animal manure?", options: ["6 to 8 inches, the depth Purdue gives for soil samples", "4 to 5 feet, the height of the whole heap", "Half an inch", "1 to 2 inches"], correctIndex: 3, explanation: "ID-182-W: a nitrogen layer of 1 to 2 inches of animal manure.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "How tall does Purdue's compost guide say a home heap should be?", options: ["1 to 2 inches, the depth of each manure layer", "10 to 15 feet, so that it can pass 170 °F", "Knee high", "4 to 5 feet"], correctIndex: 3, explanation: "ID-182-W: a heap of 4 to 5 feet, which should reach 130 to 160 °F in the center.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "What center temperature should Purdue's home heap reach?", options: ["Below 105 °F, so that the manure keeps its value", "Above 180 °F, to kill fungal plant pathogens", "98 °F", "130 to 160 °F"], correctIndex: 3, explanation: "ID-182-W: a 4 to 5 foot heap should reach 130 to 160 °F in the center.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "How often does Purdue's compost guide say to turn the heap?", options: ["At least five times in 15 days, as the federal turned process requires", "Never, because turning recontaminates the center", "At least once or twice a month", "Daily"], correctIndex: 2, explanation: "ID-182-W: turn at least once or twice a month. The federal turned process is five turnings in 15 days.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "Why can you not call manure from a heap on Purdue's schedule \"treated\" without measuring?", options: ["Purdue's guide bans manure from home compost heaps", "A heap of 4 to 5 feet can never pass 105 °F", "It runs neither federal process", "You can"], correctIndex: 2, explanation: "Purdue's schedule is a home method. Treated means a measured process, such as 131 °F for 3 consecutive days, aerated static or in-vessel, or 15 days with five turnings.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "How should you treat manure that went through a cold or slow heap?", options: ["As raw, with section 4's timing", "As treated, since any composting removes the need to wait", "As finished compost, safe for growing crops at once", "As trash"], correctIndex: 0, explanation: "Lesson 12: treat manure that went through a cold or slow heap as raw, and use the timing rules in section 4.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "What does the NRCS chapter call vermiculture?", options: ["The fastest form of composting, faster than any windrow", "A process equal to PFRP for vegetable crops", "Worm farming, not composting", "Illegal"], correctIndex: 2, explanation: "NRCS p. 2-7: vermiculture is worm farming, not composting at all.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "How much pathogen reduction does a worm bin give, according to the NRCS chapter?", options: ["Complete, once the worms have passed the material twice", "About the same as 131 °F for three days", "Little or none", "Most of it"], correctIndex: 2, explanation: "NRCS p. 2-7: there is little or no pathogen or weed seed reduction.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "Does the NRCS chapter say worms should be added to compost?", options: ["Yes, at least one pound of worms per cubic yard of pile", "Yes, but only after the thermophilic stage has ended", "Only in winter", "There is no need"], correctIndex: 3, explanation: "NRCS p. 2-7: there is no need to add worms to compost.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "What do Darwin's worms and the NRCS chapter's worm-farming line tell you together?", options: ["Worms make manure safe, which is why Darwin praised them", "Worms build soil, not safety", "Worms are useless and should be removed from beds", "Nothing"], correctIndex: 1, explanation: "Darwin shows worms forming soil; the NRCS chapter says worm farming does little or nothing to reduce pathogens. Both are true.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "Which farm practice does NRCS section 637.0213 cover that this course does not teach?", options: ["Building steel drum composters from used tanks", "Spreading biosolids on hay fields in winter", "Composting dead animals", "Raising worms"], correctIndex: 2, explanation: "Section 637.0213 covers composting animal mortalities as a farm practice. This course describes it and does not teach it.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "What weakness do aerated static piles have, according to lesson 12?", options: ["They always overheat past 170 °F within one day", "They cannot be built with manure under the organic rule", "None", "Cool patches where pathogens survive"], correctIndex: 3, explanation: "The NRCS chapter: aerated static piles leave cool patches that contain pathogenic organisms that can survive.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "Purdue turns once or twice a month; the federal turned process turns five times in 15 days. What follows?", options: ["Purdue's heap meets the federal process once it reaches 130 °F", "A Purdue heap is a home method", "The federal process applies only to heaps under 4 feet tall", "They are the same"], correctIndex: 1, explanation: "A heap on Purdue's schedule is not running either federal process, so its manure is not treated unless a measured process says so.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "Where does the NRCS chapter's Table 2A-1 come from?", options: ["Reproduced from ASAE D384.2, like the manure tables", "Adapted from NRAES-54", "Measured by Purdue Extension in Indiana gardens", "The organic rule"], correctIndex: 1, explanation: "Table 2A-1 is adapted from the On-Farm Composting Handbook (NRAES-54). ASAE D384.2 is the source of most of the Part 651 manure tables.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "What C:N does Table 2A-1 give for laying hen manure?", options: ["6", "30, the ratio it gives for horse manure", "54, the ratio it gives for leaves", "16"], correctIndex: 0, explanation: "Laying hen manure: C:N 6, range 3 to 10, moisture 69 percent.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "Which manure in Table 2A-1 sits inside the organic rule's 25:1 to 40:1 window on its own?", options: ["Laying hen manure (6), once it has dried in the coop", "Horse manure (30)", "Swine manure (14), the same as broiler litter", "Sheep (16)"], correctIndex: 1, explanation: "Horse manure's C:N of 30 (range 22 to 50) is inside the window without a partner.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "A pile built mostly on hen manure needs what?", options: ["More hen manure, to raise its nitrogen even further", "More water, to bring it up to 90 percent moisture", "A high-carbon partner", "Worms"], correctIndex: 2, explanation: "At C:N 6, hen manure needs leaves (54), straw (80) or sawdust (442) to reach the window.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "Which of these has the highest C:N in Table 2A-1?", options: ["Grass clippings, at 17 in the same table", "Sawdust (442)", "Food waste, at 14 to 16 in the same table", "Leaves (54)"], correctIndex: 1, explanation: "Sawdust is 442 (range 200 to 750). Leaves are 54, grass clippings 17, food waste 14 to 16.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "What C:N does Table 2A-1 give for leaves?", options: ["17 (range 9 to 25), the figure for grass clippings", "6 (range 3 to 10), the figure for laying hen manure", "54 (range 40 to 80)", "442"], correctIndex: 2, explanation: "Leaves: C:N 54, range 40 to 80, moisture 38 percent.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "Why do leaves at 38 percent moisture pair well with hen manure at 69 percent?", options: ["Both are below 15 percent and need water added first", "Wet and dry materials never decompose separately", "They pull toward 60 percent", "They do not"], correctIndex: 2, explanation: "The chapter's target is about 60 percent after mixing, and one wet and one dry material move a mix toward it.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "Why can you not find a mix's C:N by averaging the ratios of its parts?", options: ["C:N ratios can only be added together, never averaged", "Ratios hide how much nitrogen each holds", "The organic rule forbids calculating the ratio of a mix", "You can"], correctIndex: 1, explanation: "Two materials can share a ratio and hold very different amounts of nitrogen, so the mix depends on the actual carbon and nitrogen in each part.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "What gives you the nitrogen content you need for an exact mix?", options: ["The NRCS lamb row, which applies to every manure", "A test of your own materials", "The C:N ratio alone, read straight from Table 2A-1", "A guess"], correctIndex: 1, explanation: "The table tells you which partner to reach for and in which direction. An exact mix needs the nitrogen content of your own materials.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "How does lesson 13 say you check whether a mix worked?", options: ["Weigh the pile daily and look for a 50 percent loss", "Send a sample to the state chemist before building", "Smell it", "Watch the thermometer"], correctIndex: 3, explanation: "A good mix reaches the thermophilic stage in two to three days. If it does not, the C:N, the moisture or the air is off.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "What C:N does Table 2A-1 give for cattle manure?", options: ["30 (range 22 to 50), the figure for horse manure", "80 (range 48 to 150), the figure for straw", "6", "19 (range 11 to 30)"], correctIndex: 3, explanation: "Cattle manure: C:N 19, range 11 to 30, moisture 81 percent.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "Which C:N range does Purdue's compost guide give for livestock manure?", options: ["10 to 30:1", "40 to 80:1, the range it gives for leaves", "200 to 750:1, the range for sawdust in Table 2A-1", "Exactly 30:1"], correctIndex: 0, explanation: "ID-182-W's Table 1: livestock manure 10 to 30:1, leaves 40 to 80:1.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "Why is laying hen manure alone a poor compost pile?", options: ["Its C:N of 6 is far too low", "Its moisture of 69 percent is far too dry to compost", "Its C:N of 54 is far too high to heat", "It is too light"], correctIndex: 0, explanation: "At 6 it sits below even the 14:1 the chapter calls practical for mortalities, and far below every window for a pile.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "What C:N does Table 2A-1 give for straw?", options: ["19, the same as vegetable produce", "6, the same as laying hen manure", "1", "80 (range 48 to 150)"], correctIndex: 3, explanation: "Straw: C:N 80, range 48 to 150. A strong carbon partner for a nitrogen-rich manure.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "A mix does not reach the thermophilic stage in two to three days. What does lesson 13 say to suspect?", options: ["The thermometer, which should be replaced every season", "The weather, which no mix can overcome", "Nothing", "The C:N, moisture or air"], correctIndex: 3, explanation: "A good mix heats within two to three days. If it does not, one of the three conditions is off.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Using it: how much, where, when (Indiana)
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "when-to-spread",
      title: "14 · When to spread: the organic rule, the produce rule, and Purdue",
      section: S4,
      recallContent: [
        {
          prompt: "Which common manure in Table 2A-1 already sits inside the organic rule's C:N window on its own?",
          answer: "Horse manure, at 30 (the window is 25:1 to 40:1).",
        },
        {
          prompt: "How soon should a good mix reach the thermophilic stage?",
          answer: "In two to three days.",
        },
      ],
      body: `${SAFETY}

This is the lesson where the two rules from lesson 1 meet, along with the guidance an Indiana gardener actually has.

**The organic rule** (7 C.F.R. § 205.203(c)(1)). Raw manure "must be composted unless it is":

- "(i) Applied to land used for a crop not intended for human consumption;"
- "(ii) Incorporated into the soil not less than 120 days prior to the harvest of a product whose edible portion has direct contact with the soil surface or soil particles;"
- "(iii)" incorporated "not less than 90 days prior to the harvest of a product whose edible portion does not have direct contact" with the soil.

So a carrot, whose edible part grows in the soil, falls under 120 days. An ear of sweet corn on the stalk falls under 90.

**FDA's produce safety rule** (21 C.F.R. § 112.56(a)). For untreated manure applied in a way that minimizes contact with the crop, the waiting interval in paragraph (a)(1)(i) reads "[Reserved]". For untreated manure applied so that it does not contact the crop during or after application, paragraph (a)(1)(ii) says "0 days". For treated material, the paragraphs that follow also say "0 days".

"[Reserved]" means the paragraph exists and holds no number. FDA has not set that interval.

**So say it precisely.** The 90 and 120 days are the organic rule's intervals. They are not a federal food-safety law. FDA's food-safety rule for produce left that line blank.

**Iowa State** gives the same two numbers as advice: "Manure should be applied at least 120 days before harvesting any vegetables that come into contact with soil and 90 days for other vegetables" (Fillius et al., 2023).

**Purdue**, for Indiana gardens, says something different: "Manure should be composted for a minimum of six months to reduce the risk of contamination. If fresh manure must be applied, do so during the previous fall." And: "Do not apply manure to actively growing fruits or vegetables" (Lerner, 2006, rev. 2017). Purdue's page gives no 90 or 120 day figure.

**All four, side by side.**

| Source | What it says | What kind of document |
|---|---|---|
| 7 CFR 205.203(c)(1) | Compost raw manure, or work it in 120 days before harvest (edible part touches soil) or 90 days (it does not) | Federal organic rule |
| 21 CFR 112.56(a)(1)(i) | "[Reserved]": no interval set | FDA produce safety rule |
| Iowa State, 2023 | 120 days and 90 days | Extension advice |
| Purdue, The Scoop on Poop | Compost at least six months; fresh manure only the previous fall; never on actively growing fruits or vegetables | Indiana extension advice |

For an Indiana home garden, Purdue's advice is the local guidance, and lesson 17 sends you to the office that wrote it. The federal rules are the benchmarks that tell you where the familiar numbers come from.

:::reveal In 21 CFR 112.56(a)(1)(i), what is the waiting interval for untreated manure applied in a way that minimizes contact with the crop? ||| None is set. The paragraph reads "[Reserved]".

:::reveal What three things does Purdue's "The Scoop on Poop" say about timing? ||| Compost manure for at least six months; if fresh manure must be used, apply it the previous fall; never apply manure to actively growing fruits or vegetables.

## Sources
- ${ORGANIC("(c)(1)")}
- ${PRODUCE("112.56", "(a)")}
- ${IOWA}
- ${SCOOP}`,
    },
    {
      slug: "test-before-you-spread",
      title: "15 · Test before you spread",
      section: S4,
      recallContent: [
        {
          prompt: "Where do the 90-day and 120-day intervals come from, and what does FDA's produce rule say in the matching place?",
          answer: "The organic rule, 7 CFR 205.203(c)(1). FDA's 21 CFR 112.56(a)(1)(i) reads \"[Reserved]\".",
        },
        {
          prompt: "What is Purdue's timing advice for manure in a home garden?",
          answer: "Compost it at least six months; apply fresh manure only the previous fall; never on actively growing fruits or vegetables.",
        },
      ],
      body: `${SAFETY}

"How much manure should I use?" has no honest one-number answer, and Purdue's soil-testing bulletin says why on its first page: "Applying too much fertilizer, lime, sulfur, and even organic matter, manures, and the like can lead to problems" (Daniel et al., 2018, p. 1). The answer starts with a test.

**Testing your soil, the Purdue way** (Daniel et al., 2018, pp. 3 to 5):

- **How often:** "You should test your soil every three to five years."
- **When:** late summer or early fall.
- **How deep:** for a garden, 6 to 8 inches.
- **How many cores:** 10 to 15 for a large area.
- **How much to send:** "1 pint of soil per area".
- **Where:** a private lab from the list kept by the Purdue Plant and Pest Diagnostic Laboratory.

**The Indiana surprise.** The same bulletin says "most Indiana gardens have a soil pH that is already near neutral, if not slightly alkaline. So, applying lime will not help (and may hurt)" (p. 3). Liming out of habit can do harm here. The test tells you which kind of garden you have.

**Testing the manure.** Lesson 2's warning applies: book values can be off "from a small percentage to several-fold" (Ni & Lim, 2022, p. 1). Purdue publishes a whole bulletin on calculating manure application rates (Joern & Brichford, 1993). This course does not reproduce its method; your extension office is the place to ask about it.

**The first day matters.** "Most ammonia volatilization occurs within the first 24 hours after surface application" (Sutton et al., 1994, "Method of Land Application" section). For manure left on the surface, most of the ammonia lost to the air goes in that first day.

**Cover crops: the other half.** Purdue's home-garden bulletin on cover crops notes that they are "Also known as 'green manure'" (Meyers et al., 2020, p. 1). It also warns that grass cover crops, with their high C:N, "can temporarily deplete nitrogen" (p. 5). That is the same pattern as lesson 9's pile with too much carbon, where "nitrogen availability is the limiting factor" (NRCS, 2010, p. 2-8).

**A short testing plan for a backyard.**

1. Late summer: take 10 to 15 cores, 6 to 8 inches deep, across the garden.
2. Send a pint per area to a lab on the Purdue list.
3. Read the pH before buying lime.
4. Retest in three to five years.

:::reveal How often does Purdue say to test garden soil, and when in the year? ||| Every three to five years, in late summer or early fall.

:::reveal Why might lime hurt an Indiana garden? ||| Purdue says most Indiana gardens are already near neutral or slightly alkaline, so lime will not help and may hurt. A soil test tells you which you have.

## Sources
- ${HO71("Pages 1, 3, 4 and 5")}
- ${ABE166}
- ${AY277("Whole bulletin; method under the heading \"Calculating Application Rates\"")}
- ${ID101("Section \"Method of Land Application\", after Table 2")}
- ${HO324}
- ${nrcs637("Printed p. 2-8 (PDF p. 16)", 16)}`,
    },
    {
      slug: "too-much-indiana-rules-and-the-river",
      title: "16 · Too much: frozen ground, Indiana's thresholds, and the river",
      section: S4,
      recallContent: [
        {
          prompt: "Give Purdue's soil-testing basics for a garden: how often, when, how deep, how many cores.",
          answer: "Every three to five years; late summer or early fall; 6 to 8 inches; 10 to 15 cores for a large area.",
        },
        {
          prompt: "When does most ammonia loss happen after manure is spread on the surface?",
          answer: "Within the first 24 hours.",
        },
      ],
      body: `${SAFETY}

Nitrogen and phosphorus that leave a field do not disappear. Two courses in this catalog follow them downstream: *What the River Carries*, lesson 1, "Cause and effect, a thousand miles apart", traces nutrients from Midwestern farmland to a low-oxygen zone in the Gulf of Mexico, and *The River and the Watershed*, lesson 10, "A thousand miles of nitrogen", covers cover crops, buffer strips and fertilizer timing. This lesson is the upstream end: the rules that keep manure on the field.

**Frozen ground.** Purdue's manure bulletin: "Do not apply to frozen land with slopes greater than 2% unless there is a vegetative cover crop" (Sutton et al., 1994, "Applying Manure to the Land" section).

**Indiana's fertilizer-material rule, 355 IAC 8.** It applies to anyone who uses or distributes "fertilizer material for the purposes of producing an agricultural crop" (355 IAC 8-1-2(a)). Three definitions make it reach a gardener:

- Fertilizer material "includes unmanipulated animal and vegetable manures" (8-2-9).
- An agricultural crop is plants "produced primarily for sale, consumption" by humans or animals (8-2-2). Turf, trees and ornamentals are not.
- But the rule "does not apply to any person who uses or distributes less than ten (10) cubic yards or four thousand (4,000) gallons of fertilizer material in a calendar year" (8-1-2(b)).

So a vegetable gardener is growing an agricultural crop, and is outside the rule only by staying under 10 cubic yards a year.

**Above that threshold.** The rule requires an application plan and bars applying to surface water, to saturated ground, or from a public road. For solid manure or compost spread on the surface, its Table 1 sets distances: 500 feet from public water supply wells; 50 feet from surface waters, sinkholes, wells and drainage inlets; 10 feet from property lines and public roads. On frozen or snow-covered ground: not within 200 feet of surface water, not in a floodway, no more than 50 percent of the agronomic rate, and not on slopes over 2 percent without 40 percent residue or a cover crop (355 IAC 8-3, 8-3-4). These figures come from the Office of Indiana State Chemist's copy of the rule as readopted in 2018; check the current rule before relying on them.

**Large farms.** IDEM defines a confined feeding operation as "300 or more cattle, 600 or more swine or sheep, 30,000 or more poultry" or 500 horses in confinement, confined at least 45 days a year. CFO manure is governed under 327 IAC 19; manure that is sold, mixed, or of unknown source falls under 355 IAC 8 (Indiana Department of Environmental Management [IDEM], n.d.-b, n.d.-c). A separate rule, 355 IAC 7, requires certification for for-hire applicators and for users of CFO manure, exempting users of less than 10 cubic yards or 4,000 gallons of it.

**Your compost pile.** IDEM exempts from registration "Composting at one's property vegetative matter and other types of organic material that are generated by the person's activities", and "A composting operation in an area less than 300 square feet" (IDEM, n.d.-a).

:::reveal Under 355 IAC 8, what keeps an Indiana vegetable gardener outside the fertilizer-material rule? ||| Volume. The rule does not apply to anyone who uses less than 10 cubic yards or 4,000 gallons of fertilizer material, manure included, in a calendar year.

:::reveal When does IDEM's registration requirement not apply to home composting? ||| When you compost organic material generated by your own activities on your own property, or the operation covers less than 300 square feet.

## Sources
- ${ID101("Section \"Applying Manure to the Land\"")}
- ${IAC8("Sections 8-1-2, 8-2-2, 8-2-9, 8-3 (Table 1) and 8-3-4")}
- ${IAC7}
- ${IDEM_COMPOST}
- ${IDEM_CFO}
- ${IDEM_CFO_MANURE}`,
    },
    {
      slug: "find-your-extension-office",
      title: "17 · Find your extension office",
      section: S4,
      lessonType: "assignment",
      body: `Purdue's soil-testing bulletin tells you to "check with the Purdue Extension office in your county" (Daniel et al., 2018, p. 5). This assignment is that step, done once, so the answer is on paper when you need it.

**Indiana.** Purdue Extension "connects all 92 Indiana counties", and its county-office page has a selector for finding yours (Purdue Extension, n.d.-a). The office locator address printed in the soil-testing bulletin now returns an error page, which is a small lesson in itself: guidance carries a date, and so does every link in it.

As an example, here is how the Marion County office was listed when this course was written in October 2026: (317) 275-9305, marionces@purdue.edu, 1202 E 38th Street, Discovery Hall Suite 201, Indianapolis 46205.

**A change in 2026.** On 18 June 2026, Purdue announced that Extension "will transform to a statewide organizational structure with 12 regions with a county level 4-H presence" (Purdue Extension, 2026; see also Purdue Extension, n.d.-b). This course could not confirm whether every county keeps its own agriculture or horticulture educator after the change. So the person who answers you may be a regional educator. That is fine, and this assignment accepts it.

**Outside Indiana.** The Extension Foundation keeps a list of Cooperative Extension by state, naming each state's land-grant institutions, including the 1890 institutions such as Tuskegee and Alabama A&M (Extension Foundation, n.d.). Start there, then follow your state's link to its county directory.

**The assignment.** Submit a short note with these six answers.

1. **Your office.** Its name, and how you found it (Purdue's selector, the Extension Foundation list, or another route).
2. **Your educator.** The name and title of the person who handles horticulture or agriculture for your county, or the regional educator who covers it. Use only what the office publishes.
3. **Its guidance.** The title, date and web address of the guide the office gives on compost or manure: its own, or the Purdue Extension or state Extension guide it points you to.
4. **Its timing.** Quote exactly what that guide says about when to apply manure. Is it Purdue's six months and previous fall, the 90 and 120 days that Iowa State gives, or something else? Say which, from lesson 14.
5. **Its soil test.** How the office tells you to get a soil test, and the lab it points to.
6. **Your question.** One question you would ask this educator about your own plan. Keep it; lesson 22 uses it.

**What a strong answer shows.** An exact quotation with its date, not a summary. An honest "the county page lists no horticulture educator; the regional page names this person" where that is what you found. And a note of anything that disagreed with this course, because your office is the one that knows your county.

## Sources
- ${HO71("Page 5 (the referral to your county office and the printed office-locator address)")}
- ${PURDUE_COUNTY}
- ${PURDUE_TRANSFORM}
- ${PURDUE_REGIONS}
- ${EXT_FOUNDATION}`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · How much, where, when",
      section: S4,
      body: "Questions are drawn at random from this section's pool, so a retake asks different ones. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Under the organic rule, raw manure must be composted unless which of these applies?", options: ["It goes on a crop not meant for people", "It comes from an animal fed only certified organic feed", "It has sat in an open pile for at least 30 days", "It is dry"], correctIndex: 0, explanation: "205.203(c)(1)(i): unless it is applied to land used for a crop not intended for human consumption (or meets one of the two intervals).", sourceLessonSlug: "when-to-spread" },
          { prompt: "A carrot's edible part grows in the soil. Under the organic rule, how long before harvest must raw manure be worked in?", options: ["At least 90 days, since the carrot's leaves stand above the soil", "At least 120 days", "At least six months, the time Purdue gives for composting", "14 days"], correctIndex: 1, explanation: "The edible portion has direct contact with the soil, so 205.203(c)(1)(ii) applies: not less than 120 days before harvest.", sourceLessonSlug: "when-to-spread" },
          { prompt: "An ear of sweet corn grows on the stalk. Which organic-rule interval applies?", options: ["At least 120 days, because the corn's roots touch the soil", "None, because the rule treats corn as a grain and not a crop", "At least 90 days", "One year"], correctIndex: 2, explanation: "The edible portion does not touch the soil, so 205.203(c)(1)(iii) applies: not less than 90 days before harvest. Roots do not count; the edible portion does.", sourceLessonSlug: "when-to-spread" },
          { prompt: "What word does the organic rule use for working manure into the soil before the 90 or 120 days begin?", options: ["Broadcast, the word Carver used for spreading by hand", "Top-dressed, meaning spread over the surface only", "Incorporated", "Buried"], correctIndex: 2, explanation: "205.203(c)(1)(ii) and (iii): incorporated into the soil not less than 120 or 90 days prior to harvest.", sourceLessonSlug: "when-to-spread" },
          { prompt: "What does 21 CFR 112.56(a)(1)(ii) say for untreated manure applied so that it does not contact the crop during or after application?", options: ["120 days, the organic rule's longer interval", "\"[Reserved]\", the same as the paragraph before it", "90 days", "0 days"], correctIndex: 3, explanation: "Paragraph (a)(1)(ii): 0 days. The \"[Reserved]\" paragraph is (a)(1)(i), for untreated manure applied in a way that minimizes contact.", sourceLessonSlug: "when-to-spread" },
          { prompt: "What does 21 CFR 112.56 say for treated material?", options: ["\"[Reserved]\", the same as the untreated paragraph", "0 days", "15 days, the length of the turned compost process", "120 days"], correctIndex: 1, explanation: "The paragraphs for treated material also say 0 days.", sourceLessonSlug: "when-to-spread" },
          { prompt: "What does \"[Reserved]\" mean in a CFR paragraph?", options: ["The number is confidential and given only to certified growers", "The interval is the same as the organic rule's 120 days", "Left blank by a printing error", "It holds no number"], correctIndex: 3, explanation: "The paragraph exists and is empty: FDA has not set that interval.", sourceLessonSlug: "when-to-spread" },
          { prompt: "Which statement about the 90 and 120 days is accurate?", options: ["They are FDA's food-safety waiting periods for all produce in the country", "They are Purdue's rules for every Indiana home garden", "They are state laws", "They come from the organic rule"], correctIndex: 3, explanation: "The 90 and 120 days are in 7 CFR 205.203(c)(1). FDA's food-safety rule left its matching paragraph blank, and Purdue gives different advice.", sourceLessonSlug: "when-to-spread" },
          { prompt: "What does Iowa State's guide advise about manure timing?", options: ["120 days, or 90 for other vegetables", "Six months of composting, with fresh manure only in the fall", "Zero days, since FDA has set no interval", "One year"], correctIndex: 0, explanation: "Iowa State: at least 120 days before harvesting vegetables that contact soil, and 90 days for other vegetables.", sourceLessonSlug: "when-to-spread" },
          { prompt: "How long does Purdue's \"The Scoop on Poop\" say to compost manure?", options: ["At least 120 days for root crops and 90 days for others", "At least 15 days, turned five times", "At least six months", "One week"], correctIndex: 2, explanation: "Purdue: manure should be composted for a minimum of six months to reduce the risk of contamination.", sourceLessonSlug: "when-to-spread" },
          { prompt: "If fresh manure must be used, when does Purdue say to apply it?", options: ["Two weeks before planting, worked in deeply", "In midsummer, around actively growing plants", "At harvest", "The previous fall"], correctIndex: 3, explanation: "Purdue: if fresh manure must be applied, do so during the previous fall.", sourceLessonSlug: "when-to-spread" },
          { prompt: "What does Purdue say about applying manure to actively growing fruits or vegetables?", options: ["Only if it is worked in 90 days before harvest", "Only if it is composted manure from a hot pile", "Water it in", "Do not"], correctIndex: 3, explanation: "Purdue: do not apply manure to actively growing fruits or vegetables.", sourceLessonSlug: "when-to-spread" },
          { prompt: "Does Purdue's \"The Scoop on Poop\" give a 90 or 120 day figure?", options: ["Yes, 120 days for crops touching soil and 90 days for others", "No", "Yes, but only for manure from pigs", "Yes, 60 days"], correctIndex: 1, explanation: "Purdue's page gives six months of composting, the previous fall for fresh manure, and never on growing crops. It gives no 90 or 120 day figure.", sourceLessonSlug: "when-to-spread" },
          { prompt: "Why does lesson 14 say an Indiana home gardener should start with Purdue's advice?", options: ["It is the local guidance", "Purdue's advice is federal law for gardens in Indiana", "The federal rules forbid home gardens in Indiana", "It is the shortest"], correctIndex: 0, explanation: "Purdue's advice is the local extension guidance, and lesson 17 sends you to the office that wrote it.", sourceLessonSlug: "when-to-spread" },
          { prompt: "What role does lesson 14 give the two federal rules for a home gardener?", options: ["Binding duties that an inspector checks every season", "Irrelevant history with no bearing on any garden", "Tax rules", "Benchmarks"], correctIndex: 3, explanation: "The federal rules are the benchmarks that tell you where the familiar numbers come from.", sourceLessonSlug: "when-to-spread" },
          { prompt: "Which kind of document is 21 CFR 112.56?", options: ["FDA's produce safety rule", "USDA's organic rule, the source of the 90 and 120 days", "Purdue's extension guidance for Indiana gardens", "An NRCS table"], correctIndex: 0, explanation: "21 CFR part 112 is FDA's produce safety rule. The organic rule is 7 CFR 205.203.", sourceLessonSlug: "when-to-spread" },
          { prompt: "Which source gives the organic rule's two numbers as garden advice?", options: ["Purdue's Scoop on Poop, written for Indiana gardens", "FDA's produce safety rule, 21 CFR 112.56", "Carver's 1936 bulletin", "Iowa State's guide"], correctIndex: 3, explanation: "Iowa State's Using Manure in the Home Garden gives 120 and 90 days. Purdue gives six months and the previous fall.", sourceLessonSlug: "when-to-spread" },
          { prompt: "A neighbor says \"the law says wait 120 days\". What is the precise correction?", options: ["Correct: FDA requires 120 days for every food crop", "Wrong: the law says 90 days for every crop", "That is the organic rule's interval", "No such number exists"], correctIndex: 2, explanation: "120 days is the organic rule's interval for crops whose edible part touches soil. FDA's produce rule set no number there.", sourceLessonSlug: "when-to-spread" },
          { prompt: "What does Purdue's HO-71-W say on its first page can lead to problems?", options: ["Too much fertilizer, lime or manure", "Testing soil more than once in any ten-year period", "Sampling in the fall instead of in the spring", "Too little water"], correctIndex: 0, explanation: "HO-71-W p. 1: applying too much fertilizer, lime, sulfur, and even organic matter, manures, and the like can lead to problems.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "How often does HO-71-W say to test garden soil?", options: ["Every spring, before the first manure goes on", "Every three to five years", "Once, when the garden is first dug", "Monthly"], correctIndex: 1, explanation: "HO-71-W p. 3: you should test your soil every three to five years.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "When in the year does HO-71-W say to sample?", options: ["Midwinter, when the ground is frozen and undisturbed", "Late summer or early fall", "Right after spreading manure, to measure what went on", "At planting"], correctIndex: 1, explanation: "HO-71-W p. 3: late summer or early fall.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "How deep should garden soil samples be, according to HO-71-W?", options: ["6 to 8 inches", "1 to 2 inches, the depth of a manure layer", "4 to 5 feet, the height of a compost heap", "1 foot"], correctIndex: 0, explanation: "HO-71-W p. 3: for gardens, 6 to 8 inches deep.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "How many cores does HO-71-W suggest for a large area?", options: ["10 to 15", "1, taken from the very center of the bed", "100, one for every square foot", "3"], correctIndex: 0, explanation: "HO-71-W p. 4: 10 to 15 cores for a large area.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "How much soil does HO-71-W say to send per area?", options: ["1 gallon, so that the lab can run every test twice", "1 teaspoon, since labs need very little", "1 pound", "1 pint"], correctIndex: 3, explanation: "HO-71-W p. 5: 1 pint of soil per area.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "Where does HO-71-W point you for a soil lab?", options: ["The Office of Indiana State Chemist, which tests every garden free", "The county assessor's office", "Any hardware store", "The Purdue PPDL's list of labs"], correctIndex: 3, explanation: "HO-71-W p. 5: private labs from the list kept by the Purdue Plant and Pest Diagnostic Laboratory.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "What does HO-71-W say about most Indiana garden soils?", options: ["Strongly acid, so lime should go on every single year", "Too sandy to hold any nutrients from manure", "Frozen", "Near neutral or slightly alkaline"], correctIndex: 3, explanation: "HO-71-W p. 3: most Indiana gardens have a soil pH that is already near neutral, if not slightly alkaline.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "Why may lime hurt an Indiana garden?", options: ["Lime reacts with manure to make a gas that kills seedlings", "Indiana law bans lime on vegetable gardens", "It never can", "The soil is often near neutral already"], correctIndex: 3, explanation: "Purdue: applying lime will not help (and may hurt), because most Indiana gardens are near neutral or slightly alkaline.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "Why does lesson 15 say to read your soil test before buying lime?", options: ["To learn which garden you have", "The lab sells lime at a discount once you have tested", "Lime must be tested for lead before it can be used", "It does not"], correctIndex: 0, explanation: "Liming out of habit can do harm in Indiana. The test tells you whether yours is one of the gardens that needs it.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "According to ID-101, when does most ammonia volatilization happen after manure is spread on the surface?", options: ["After a week, once the manure has dried out", "Within the first 24 hours", "Only in spring, once the soil has warmed up", "Never"], correctIndex: 1, explanation: "ID-101: most ammonia volatilization occurs within the first 24 hours after surface application.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "Which Purdue bulletin is devoted to calculating manure application rates?", options: ["AY-277", "HO-324-W, the bulletin on cover crops in home gardens", "FS-44-W, the bulletin on backyard poultry food safety", "ID-182-W"], correctIndex: 0, explanation: "AY-277 is Calculating Manure and Manure Nutrient Application Rates. This course does not reproduce its method.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "What does HO-324-W say cover crops are also known as?", options: ["Brown manure, because they add carbon to soil", "Living mulch, the NRCS term for a windrow", "Fallow", "Green manure"], correctIndex: 3, explanation: "HO-324-W: cover crops, also known as \"green manure\".", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "What does HO-324-W warn about grass cover crops with a high C:N?", options: ["They can temporarily deplete nitrogen", "They add more nitrogen than any manure in Table 2A-1", "They raise soil pH enough to replace lime entirely", "They attract cats"], correctIndex: 0, explanation: "HO-324-W: high-C:N grass covers can temporarily deplete nitrogen.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "A grass cover crop temporarily depleting nitrogen echoes which pattern from lesson 9?", options: ["Too little carbon, which drives ammonia out of a pile", "Too much moisture, which makes a pile go anaerobic", "Too much carbon", "Too much heat"], correctIndex: 2, explanation: "In lesson 9, a pile with too much carbon is limited by nitrogen availability. The cover crop shows the same pattern in soil.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "Why does this course give no single rate for how much manure to use?", options: ["Any amount of manure is safe in a home garden", "The sources tie it to tests", "Federal law forbids publishing manure rates", "Rates are secret"], correctIndex: 1, explanation: "Purdue warns that too much can lead to problems and starts with a soil test; book values for manure can be off several-fold.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "In lesson 15's backyard testing plan, what do you read before buying lime?", options: ["The soil test's pH", "The label on the lime bag, which states what your soil needs", "The NRCS manure tables for your animals", "The forecast"], correctIndex: 0, explanation: "Step 3 of the plan: read the pH before buying lime.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "What does ID-101 say about frozen land with slopes greater than 2 percent?", options: ["Spread freely, since frozen soil holds manure in place", "Do not spread without a cover crop", "Spread half the usual amount, then plow it in", "Spread twice"], correctIndex: 1, explanation: "ID-101: do not apply to frozen land with slopes greater than 2% unless there is a vegetative cover crop.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Which lesson of What the River Carries traces nutrients from farmland to a low-oxygen zone in the Gulf of Mexico?", options: ["A thousand miles of nitrogen, the tenth lesson of The River and the Watershed", "Cause and effect, a thousand miles apart", "What a capacity grant is, and the machine it built", "Problems with no author"], correctIndex: 1, explanation: "What the River Carries, lesson 1, \"Cause and effect, a thousand miles apart\". The River and the Watershed's lesson 10 covers cover crops, buffer strips and fertilizer timing.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Who does Indiana's 355 IAC 8 apply to?", options: ["Only companies that sell more than 100 tons of fertilizer a year", "Users of fertilizer for agricultural crops", "Only farms registered with IDEM as confined feeding operations", "Everyone"], correctIndex: 1, explanation: "355 IAC 8-1-2(a): any person that uses or distributes fertilizer material for the purposes of producing an agricultural crop.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Does 355 IAC 8 count manure as fertilizer material?", options: ["No, manure is regulated only by IDEM under 327 IAC 19", "Only composted manure, never raw manure", "Yes, unmanipulated manure included", "Only liquid"], correctIndex: 2, explanation: "355 IAC 8-2-9: fertilizer material includes unmanipulated animal and vegetable manures.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "How does 355 IAC 8 define an agricultural crop?", options: ["Plants grown mainly for sale or consumption", "Any plant at all, including lawns, trees and ornamentals", "Only crops sold at a licensed market", "Corn and soybeans"], correctIndex: 0, explanation: "355 IAC 8-2-2: plants produced primarily for sale, consumption by humans or animals. Turf, trees and ornamentals are not.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Which of these is not an agricultural crop under 355 IAC 8?", options: ["Tomatoes grown in a backyard for the family to eat", "Hay grown to feed the farm's own horses", "Turf", "Sweet corn"], correctIndex: 2, explanation: "Turf, trees and ornamentals are outside the definition. Food grown for people or animals is inside it.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "What keeps an Indiana vegetable gardener outside 355 IAC 8?", options: ["Using under 10 cubic yards a year", "Growing food only for the household and never for sale", "Using only manure from their own animals", "Living in a city"], correctIndex: 0, explanation: "A vegetable garden grows an agricultural crop, so the gardener is outside the rule only by staying under 10 cubic yards or 4,000 gallons a year.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "What liquid volume does 355 IAC 8's threshold allow in a calendar year?", options: ["Under 10,000 gallons, matching the CFO rule's threshold", "Under 400 gallons, about one small tank", "No limit", "Under 4,000 gallons"], correctIndex: 3, explanation: "355 IAC 8-1-2(b): less than ten cubic yards or four thousand gallons of fertilizer material in a calendar year.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Above the threshold, what does 355 IAC 8 require before spreading?", options: ["An application plan", "A federal organic certificate for the whole farm", "A soil test from a Purdue lab every month", "Nothing"], correctIndex: 0, explanation: "355 IAC 8-3 requires an application plan and bars applying to surface water, to saturated ground, or from a public road.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "In the OISC copy of 355 IAC 8's Table 1, how far must surface-applied solid manure stay from a public water supply well?", options: ["500 feet", "50 feet, the distance for surface waters and sinkholes", "10 feet, the distance for property lines", "5,000 feet"], correctIndex: 0, explanation: "Table 1: public water supply wells 500 feet. Lesson 16 says to check the current rule before relying on these figures.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "In the same table, how far from property lines and public roads?", options: ["10 feet", "500 feet, the distance for public water supply wells", "50 feet, the distance for drainage inlets", "1 mile"], correctIndex: 0, explanation: "Table 1: property lines and public roads 10 feet.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "In the same table, how far from surface waters, sinkholes, wells and drainage inlets?", options: ["200 feet, the frozen-ground distance from surface water", "10 feet, the distance for public roads", "1,000 feet", "50 feet"], correctIndex: 3, explanation: "Table 1: surface waters, sinkholes, wells and drainage inlets 50 feet.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "On frozen or snow-covered ground, how much of the agronomic rate may be applied under 355 IAC 8-3-4?", options: ["The full agronomic rate, since frozen ground holds manure", "No more than 50 percent", "Twice the agronomic rate, to make up for losses", "None at all"], correctIndex: 1, explanation: "355 IAC 8-3-4: no more than 50 percent of the agronomic rate, among other limits.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "On frozen or snow-covered ground, how far from surface water must application stay?", options: ["At least 10 feet, the same as a property line", "At least 500 feet, the public well distance", "At least 200 feet", "No limit"], correctIndex: 2, explanation: "355 IAC 8-3-4: not within 200 feet of surface water, not in a floodway, and not on slopes over 2 percent without residue or cover.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Why does lesson 16 tell you to check the current rule before relying on its setback figures?", options: ["They come from a 2018 OISC copy", "The setbacks change every month with the weather", "Purdue disagrees with every figure in the rule", "No reason"], correctIndex: 0, explanation: "The figures are from the Office of Indiana State Chemist's copy of the rule as readopted in 2018, so the current text should be checked.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Which herd size makes a confined feeding operation under IDEM?", options: ["30 or more cattle kept on pasture all year round", "3,000 or more laying hens in one barn", "300 or more cattle", "One horse"], correctIndex: 2, explanation: "IDEM: 300 or more cattle, 600 or more swine or sheep, 30,000 or more poultry, or 500 horses in confinement.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "How many days a year must animals be confined for an operation to count as a CFO?", options: ["At least 365, every day of the year", "At least 120, the same as the organic interval", "At least 1", "At least 45"], correctIndex: 3, explanation: "IDEM: confined at least 45 days a year.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Which rule governs manure that is sold, mixed, or of unknown source?", options: ["327 IAC 19, the rule for manure from confined feeding operations", "355 IAC 8", "21 CFR 112.53, the produce rule's human-waste paragraph", "None"], correctIndex: 1, explanation: "CFO manure falls under 327 IAC 19; manure that is sold, mixed or of unknown source falls under 355 IAC 8.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "What does 355 IAC 7 require?", options: ["A permit from IDEM for every backyard compost pile anywhere in Indiana", "Organic certification for any farm that spreads manure on food crops", "Certification for hired and CFO-manure applicators", "Yearly soil tests"], correctIndex: 2, explanation: "355 IAC 7 requires certification for for-hire applicators and for users of CFO manure, exempting users of less than 10 cubic yards or 4,000 gallons of it.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Which home compost pile does IDEM exempt from registration?", options: ["Any pile of any size, as long as it holds no manure", "One under 300 square feet", "Only piles inspected by a Purdue educator each year", "None"], correctIndex: 1, explanation: "IDEM exempts a composting operation in an area less than 300 square feet, and composting at your own property of material from your own activities.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "Where does Purdue's soil-testing bulletin tell you to check?", options: ["The Office of Indiana State Chemist's fertilizer division", "The Indiana Department of Environmental Management", "Your county's Purdue Extension office", "A garden center"], correctIndex: 2, explanation: "HO-71-W: check with the Purdue Extension office in your county. Lesson 17's assignment is that step.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "How many Indiana counties does Purdue Extension say it connects?", options: ["All 92", "12, one for each region in the new structure", "50, one for each state in the country", "6"], correctIndex: 0, explanation: "Purdue Extension connects all 92 Indiana counties.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "What did Purdue Extension announce on 18 June 2026?", options: ["The closing of every county office in the state", "A merger with the Office of Indiana State Chemist", "New soil labs", "A move to 12 regions"], correctIndex: 3, explanation: "Purdue Extension will transform to a statewide organizational structure with 12 regions with a county level 4-H presence.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "After that change, who might answer when you contact Extension?", options: ["Nobody, because county offices no longer take questions", "An FDA inspector assigned to your county", "A 4-H member", "A regional educator"], correctIndex: 3, explanation: "Whether every county keeps its own agriculture or horticulture educator was not confirmed, so the person who answers may be regional.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "What does Purdue's announcement say remains at the county level?", options: ["A horticulture educator in every county, guaranteed", "A soil-testing laboratory in every county", "Nothing", "A 4-H presence"], correctIndex: 3, explanation: "The announcement names a county level 4-H presence. It does not promise a horticulture educator in every county.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "Why does lesson 17's assignment accept a regional educator?", options: ["Regional educators are the only staff allowed to discuss manure", "Every county office was closed on 18 June 2026 by the announcement", "County staffing after the change is unconfirmed", "It does not"], correctIndex: 2, explanation: "The course could not confirm whether every county keeps its own educator after the move to 12 regions.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "What happened to the office locator address printed in HO-71-W?", options: ["It now redirects to the Office of Indiana State Chemist", "It now returns an error page", "It now lists only the 12 regional offices", "It still works"], correctIndex: 1, explanation: "The printed locator address now returns an error. Purdue's county-office page has the current selector.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "What lesson does that broken locator address teach?", options: ["Purdue no longer publishes soil-testing advice at all", "Printed bulletins are always more reliable than websites", "Guidance and links carry dates", "Nothing"], correctIndex: 2, explanation: "Guidance carries a date, and so does every link in it. Record the date of whatever you find.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "Outside Indiana, where does lesson 17 send you first?", options: ["The NRCS Agricultural Waste Management Field Handbook", "The Federal Register's list of produce farms", "Purdue", "The Extension Foundation's state list"], correctIndex: 3, explanation: "The Extension Foundation's Find Cooperative Extension in Your State lists each state's land-grant institutions.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "Which 1890 institutions does lesson 17 name from the Extension Foundation list?", options: ["Purdue and Iowa State, the two guides quoted in section 4", "Cornell and Maryland, two northeastern universities", "Tuskegee and Alabama A&M", "Harvard"], correctIndex: 2, explanation: "The list includes the 1890 institutions, such as Tuskegee and Alabama A&M.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "In the assignment, what should your answer about manure timing contain?", options: ["An exact quotation with its date", "A summary in your own words, leaving out the date", "The organic rule's 120 days, whatever the guide says", "A guess"], correctIndex: 0, explanation: "Quote exactly what the guide says about when to apply manure, with its date, and say whether it matches Purdue, Iowa State or neither.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "The county page lists no horticulture educator. What does a strong answer do?", options: ["Invent a name so that the answer looks complete", "Say so, and name the regional one", "Skip the question, since it cannot be answered", "Use Marion County's"], correctIndex: 1, explanation: "An honest \"the county page lists no horticulture educator; the regional page names this person\" is what a strong answer looks like.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "Your office's guidance disagrees with this course. What does lesson 17 ask you to do?", options: ["Ignore the office, since this course cites federal rules", "Report the office to the State Chemist", "Delete it", "Note the disagreement"], correctIndex: 3, explanation: "Your office is the one that knows your county. A strong answer notes anything that disagreed with the course.", sourceLessonSlug: "find-your-extension-office" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Where the practice came from
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "carver-1905",
      title: "18 · Carver, 1905: ditches, muck, and manure in the drill",
      section: S5,
      recallContent: [
        {
          prompt: "Under 355 IAC 8, what keeps an Indiana vegetable gardener outside the fertilizer-material rule?",
          answer: "Using less than 10 cubic yards or 4,000 gallons of fertilizer material, manure included, in a calendar year.",
        },
        {
          prompt: "After Purdue's 2026 change, who might answer when you contact Extension, and why?",
          answer:
            "Possibly a regional educator: Purdue announced a move to 12 regions, and whether every county keeps its own agriculture or horticulture educator was not confirmed.",
        },
      ],
      body: `In April 1905, George Washington Carver published Bulletin No. 6 of the experiment station at the Tuskegee Normal and Industrial Institute: *How to Build Up Worn Out Soils* (Carver, 1905, p. 3). Read it as a primary source: what a working agricultural scientist did on tired land, in his own words.

A note before you open it. The scanned copy comes from the National Agricultural Library, whose cover note says: "Do not assume content reflects current scientific knowledge, policies, or practices." That is true of every historical bulletin in this section, and it is why section 3's rules come first.

**Organic matter into the gullies.** Carver describes filling washed-out ditches: "we therefore began to fill the ditches with pine tops, hay, bark, old cotton stalks, leaves, etc., in fact, rubbish of any kind that would decay and ultimately make soil" (p. 4). That is the loop at the scale of a field: plant waste put back, so that it decays into soil.

**Manure in the drill.** For one crop, 800 pounds of muriate of potash and 800 pounds of acid phosphate were "thoroughly mixed with two tons of well-rotted barn-yard manure" and put in the drill, the seed row (p. 7). Notice "well-rotted": he was not using fresh manure.

**Manure broadcast.** Elsewhere: "Four tons of barn-yard manure per acre were broadcasted and plowed in" (p. 12).

**What he concluded.** Among his numbered conclusions: "2. That swamp muck and leaf mould are valuable as a fertilizer and should be used whenever they can be gotten easily" (p. 15).

**What the bulletin does not contain.** There is no compost-pile instruction in it. That comes 31 years later, in lesson 19.

**Why this matters to the catalog.** *Who Gets the Credit*, lesson 17, "Five claims that do not survive checking", takes apart the claim that Carver invented peanut butter, and points to his real work in soil restoration and crop rotation. This bulletin is that work, in his own words and with his own numbers.

**Reading it yourself.** The printed page numbers run two behind the scan: printed page 4 is page 6 of the file. The sources below give both for every passage quoted here.

:::reveal What did Carver put into washed-out ditches in 1905, and why? ||| Pine tops, hay, bark, old cotton stalks, leaves and other rubbish that would decay and ultimately make soil.

:::reveal What kind of manure did Carver mix with potash and phosphate for the drill? ||| Well-rotted barnyard manure, two tons of it, with 800 pounds each of muriate of potash and acid phosphate.

## Sources
- ${CARVER_1905("Printed pp. 3, 4, 7, 12 and 15 (PDF pp. 5, 6, 9, 14 and 17); National Agricultural Library cover note")}`,
    },
    {
      slug: "carver-1936-and-fire-fang",
      title: "19 · Carver, 1936: the compost pen, and the \"fire fang\" caution",
      section: S5,
      recallContent: [
        {
          prompt: "What did Carver's 1905 bulletin conclude about swamp muck and leaf mould?",
          answer: "That they are valuable as a fertilizer and should be used whenever they can be gotten easily.",
        },
        {
          prompt: "What does the 1905 bulletin NOT contain?",
          answer: "Any compost-pile instruction.",
        },
      ],
      body: `In October 1936 Carver published Bulletin No. 42, *How to Build Up and Maintain the Virgin Fertility of Our Soils* (Carver, 1936, cover). Thirty-one years after Bulletin No. 6, some advice is the same and one piece is new.

**The same.** Ditches "should be filled with pine tops, bark, leaves, and organic rubbish of any kind that will decay and ultimately make soil" (p. 5).

**His view of manure.** "No fertilizer or system of fertilization to date has been found that will build up the land as effectively, cheaply, and permanently as farmyard manures" (p. 7).

**New: the compost pile.** "A year-round compost pile is absolutely essential and can be had with little labor and practically no cash outlay" (p. 7). His method is a pen, built in layers: "Spread two wagon-loads of muck and leaves over the bottom of the pen; then one load of barnyard manure; build up in this way until the pen is full" (p. 7). He lists more to add: ashes, old plaster, waste lime, rags, paper, and "Bones beaten up fine are also excellent" (p. 7). He advises applying "20 tons to the acre on medium land, and 25 tons to the acre on very poor land" (p. 8).

**The caution.** Then, on page 8: "Caution: Do not allow this compost-heap to become hot enough for steam to rise from it ('fire fang'), as you will lose much of the value of the manure."

**Set that against today's rules.** Both federal compost processes in lesson 11 require at least 131 °F. Carver warns against a heap hot enough to steam. Is one of them wrong?

Read what each is for.

- **Carver's stated purpose** is the manure's value as fertilizer. He says heat loses "much of the value of the manure". He does not say what is lost, and this course will not guess for him.
- **Today's processes** are for pathogens. The NRCS chapter says the heat is "necessary for the destruction of pathogens, fly larvae, and weed seeds", and that "temperature and time are the main indicators used to verify optimal pathogen destruction" (NRCS, 2010, pp. 2-3, 2-26 to 2-27).

What changed between 1936 and now is the question being asked. The produce rule's processes and microbial standards (21 C.F.R. §§ 112.54(b), 112.55(b)) measure pathogen reduction. Carver's caution measures fertilizer value. A gardener today, putting manure near food, follows the pathogen rules, and can still take Carver's point that a pile has more than one job.

Notice also what cannot be lined up: Carver gives no temperature. "Steam rising" is an observation, not a thermometer reading, so there is no honest way to say whether his fire fang sits above or below 131 °F.

**One table to look at, not to use.** Page 8 also prints a table headed "Composition of 1,000 Pounds of Fresh Excrements", with rows for cow, hog, sheep, horse, hen, duck and goose. It describes fresh manure, not the finished compost. Its units do not agree with each other, so this course quotes no number from it. Look at it as an artifact of its time.

:::reveal What did Carver's 1936 "fire fang" caution warn against, and why? ||| Letting the compost heap get hot enough for steam to rise, because, he said, you would lose much of the value of the manure.

:::reveal Why do today's composting rules require at least 131 °F when Carver warned against a steaming heap? ||| They answer a different question: pathogen destruction, verified by temperature and time. Carver's caution was about keeping the manure's value as fertilizer.

## Sources
- ${CARVER_1936("Cover, dated October 1936 (unnumbered, PDF p. 3); printed pp. 5, 7 and 8 (PDF pp. 7, 9 and 10)")}
- ${nrcs637("Printed p. 2-3 (PDF p. 11); section 637.0206, pp. 2-26 to 2-27 (PDF pp. 34 to 35)", 11)}
- ${PRODUCE("112.54", "(b)")}
- ${PRODUCE("112.55", "(b)")}`,
    },
    {
      slug: "king-darwin-and-the-extension-service",
      title: "20 · King's compost house, Darwin's worms, and who carried the advice",
      section: S5,
      recallContent: [
        {
          prompt: "How did Carver build his 1936 compost pen?",
          answer: "In layers: two wagon-loads of muck and leaves, then one load of barnyard manure, repeated until the pen was full.",
        },
        {
          prompt: "Why does this course quote no number from the table on page 8 of Carver's 1936 bulletin?",
          answer: "Its units do not agree with each other, so it is shown as an artifact, not used as data.",
        },
      ],
      body: `Two older books stand behind this course, and one small line of print explains who carried their kind of advice to farmers.

**King, 1911.** F. H. King's *Farmers of Forty Centuries* describes farming in China, Korea and Japan. In chapter IX, "The Utilization of Waste", he writes: "One of the most remarkable agricultural practices adopted by any civilized people is the centuries-long and well nigh universal conservation and utilization of all human waste in China, Korea and Japan, turning it to marvelous account in the maintenance of soil fertility and in the production of food" (King, 1911, ch. IX).

Read it as history. Lesson 8 explained why human waste is regulated and out of scope here: FDA's produce safety rule says you may not use it for growing covered produce, except sewage sludge biosolids used under EPA's biosolids rule (21 C.F.R. § 112.53).

**The Nara compost house.** In the same chapter King describes a compost house (his Figs. 116 and 117). "Water is added sufficient to keep the whole saturated and to maintain the temperature below that of the body", and the stacks stand "five weeks in summer, seven weeks in winter".

Compare it with section 3. The NRCS chapter wants moisture of about 60 percent, "damp but not soggy", and puts the thermophilic stage above 105 °F. King's house was kept saturated and below body temperature. It is a different process from the hot, aerobic compost the federal rules describe, and nothing in this course treats it as a method.

**Darwin, 1881.** Lesson 1 opened with Darwin's sentence on vegetable mould passing through the guts of worms. His conclusion goes further: "It may be doubted whether there are many other animals which have played so important a part in the history of the world, as have these lowly organized creatures" (Darwin, 1881, ch. VII).

Hold that next to lesson 12. Darwin shows worms building soil. The NRCS chapter says worm farming does little or nothing to reduce pathogens. Both are true, and they answer different questions.

**Who carried the advice.** At the foot of Purdue's 1994 manure bulletin is a line of print: "Issued in furtherance of the acts of May 8 and June 30, 1914" (Sutton et al., 1994). The May 8, 1914 act is the Smith-Lever Act, which built the Cooperative Extension Service. *The Match*, lesson 3, "What a capacity grant is, and the machine it built", tells how Congress built that machine. Carver's bulletins came from Tuskegee; Purdue's come from its extension service; and the Extension Foundation's state list today names Tuskegee among the land-grant institutions (lesson 17).

| Source | What it is good for | What it is not |
|---|---|---|
| Carver, 1905 and 1936 | How an agricultural scientist built up worn land with organic matter and manure | Current food-safety guidance |
| King, 1911 | A record of waste returned to fields in East Asia | A method this course teaches |
| Darwin, 1881 | Worms as soil makers | Evidence that worms sanitize manure |

:::reveal How did King's Nara compost house differ from the compost the federal rules describe? ||| It was kept saturated and below body temperature, while the federal processes require at least 131 °F and the NRCS chapter wants damp but not soggy.

:::reveal What does the line "Issued in furtherance of the acts of May 8 and June 30, 1914" on a Purdue bulletin point to? ||| The Smith-Lever Act of May 8, 1914, which built the Cooperative Extension Service that publishes such bulletins.

## Sources
- ${KING}
- ${DARWIN("Introduction; Chapter VII, Conclusion")}
- ${ID101("Colophon at the foot of the page, after \"New 5/94\"")}
- ${nrcs637("Printed pp. 2-2, 2-3 and 2-7 (PDF pp. 10, 11 and 15)", 10)}
- ${PRODUCE("112.53", "")}
- ${EXT_FOUNDATION}`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Where the practice came from",
      section: S5,
      body: "Questions are drawn at random from this section's pool, so a retake asks different ones. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What date does Carver's Bulletin No. 6 carry?", options: ["October 1936, the date of his compost bulletin", "May 1914, the month of the Smith-Lever Act", "April 1905", "1881"], correctIndex: 2, explanation: "Bulletin No. 6 is dated April 1905 (printed p. 3, PDF p. 5). Bulletin No. 42 is dated October 1936 on its cover (PDF p. 3).", sourceLessonSlug: "carver-1905" },
          { prompt: "Which institution's experiment station issued Bulletin No. 6?", options: ["Tuskegee Normal and Industrial Institute", "Purdue University's agricultural experiment station in Indiana", "The USDA Natural Resources Conservation Service in Washington", "Iowa State"], correctIndex: 0, explanation: "How to Build Up Worn Out Soils was Bulletin No. 6 of the Tuskegee Normal and Industrial Institute Experiment Station.", sourceLessonSlug: "carver-1905" },
          { prompt: "What did Carver put into washed-out ditches in 1905?", options: ["Raw dog and cat waste, buried deep to keep it away from crops", "Pine tops, hay, bark, leaves", "Crushed limestone, to raise the soil's pH before planting", "Sand"], correctIndex: 1, explanation: "Printed p. 4: pine tops, hay, bark, old cotton stalks, leaves, and rubbish of any kind that would decay and ultimately make soil.", sourceLessonSlug: "carver-1905" },
          { prompt: "Why did Carver fill the ditches with that material?", options: ["To stop cattle from wandering across the fields at night", "To hide the gullies from the county tax assessor", "To burn it", "So it would decay into soil"], correctIndex: 3, explanation: "He chose rubbish of any kind that would decay and ultimately make soil: the loop at the scale of a field.", sourceLessonSlug: "carver-1905" },
          { prompt: "What did Carver mix with muriate of potash and acid phosphate for the drill?", options: ["Fresh poultry manure straight from the henhouse", "Swamp muck dug out the same morning", "Well-rotted barnyard manure", "Wood ash"], correctIndex: 2, explanation: "Printed p. 7: 800 pounds each of muriate of potash and acid phosphate, thoroughly mixed with two tons of well-rotted barnyard manure.", sourceLessonSlug: "carver-1905" },
          { prompt: "How much manure went into that drill mix?", options: ["Twenty tons, the rate in his 1936 bulletin", "Two tons", "Four tons, the amount he broadcast per acre", "Two pounds"], correctIndex: 1, explanation: "Two tons of well-rotted barnyard manure, with 800 pounds each of potash and phosphate.", sourceLessonSlug: "carver-1905" },
          { prompt: "What does the word \"well-rotted\" tell you about the manure Carver put in the drill?", options: ["It had been composted at 131 °F for three days", "It came only from the farm's horses", "It was wet", "It was not fresh"], correctIndex: 3, explanation: "Well-rotted means aged. The 131 °F processes came much later and are not what Carver describes.", sourceLessonSlug: "carver-1905" },
          { prompt: "How much barnyard manure per acre does Bulletin No. 6 say was broadcast and plowed in?", options: ["Two tons, the amount in the drill mix with potash", "Twenty-five tons, his 1936 rate for very poor land", "Four tons", "Forty tons"], correctIndex: 2, explanation: "Printed p. 12: four tons of barnyard manure per acre were broadcasted and plowed in.", sourceLessonSlug: "carver-1905" },
          { prompt: "What did Carver conclude in 1905 about swamp muck and leaf mould?", options: ["Valuable as fertilizer", "Harmful, because they carry weed seeds into the field", "Useless, because they hold no nitrogen at all", "Only for pasture"], correctIndex: 0, explanation: "Conclusion 2, printed p. 15: swamp muck and leaf mould are valuable as a fertilizer and should be used whenever they can be gotten easily.", sourceLessonSlug: "carver-1905" },
          { prompt: "What does the 1905 bulletin not contain?", options: ["Any mention of barnyard manure at all", "Any numbered conclusions at its end", "A compost-pile instruction", "A date"], correctIndex: 2, explanation: "There is no compost-pile instruction in Bulletin No. 6. That comes in 1936, in Bulletin No. 42.", sourceLessonSlug: "carver-1905" },
          { prompt: "What does the National Agricultural Library's cover note on the scan warn?", options: ["That the bulletin is still under copyright and may not be shared", "That Carver did not write the bulletin himself", "Nothing", "It may not reflect current knowledge"], correctIndex: 3, explanation: "The note: do not assume content reflects current scientific knowledge, policies, or practices. That is why section 3's rules come first.", sourceLessonSlug: "carver-1905" },
          { prompt: "Which catalog lesson corrects the claim that Carver invented peanut butter?", options: ["Cause and effect, a thousand miles apart, in What the River Carries", "What a capacity grant is, and the machine it built, in The Match", "Five claims that do not survive checking", "None"], correctIndex: 2, explanation: "Who Gets the Credit, lesson 17, \"Five claims that do not survive checking\".", sourceLessonSlug: "carver-1905" },
          { prompt: "What real work of Carver's does that lesson point to?", options: ["The invention of peanut butter and its first patent", "Soil restoration and crop rotation", "A treatment for toxoplasmosis in farm cats", "Steam engines"], correctIndex: 1, explanation: "It points to his work on soil restoration and crop rotation. Bulletin No. 6 is that work in his own words and numbers.", sourceLessonSlug: "carver-1905" },
          { prompt: "Printed page 4 of Bulletin No. 6 is which page of the scan?", options: ["Page 6", "Page 2, since the scan drops the cover and the title page", "Page 4, since the scan matches the print exactly", "Page 40"], correctIndex: 0, explanation: "The printed page numbers run two behind the scan: printed page 4 is page 6 of the file.", sourceLessonSlug: "carver-1905" },
          { prompt: "Why does lesson 18 read Bulletin No. 6 as a primary source?", options: ["It is Carver's own account", "It is the current federal standard for composting manure", "Purdue wrote it with Carver in 1994", "It is short"], correctIndex: 0, explanation: "It records what a working agricultural scientist did on tired land, in his own words.", sourceLessonSlug: "carver-1905" },
          { prompt: "When did Carver publish Bulletin No. 42?", options: ["October 1936", "April 1905, the date of Bulletin No. 6", "May 1914, when the Smith-Lever Act passed", "2005"], correctIndex: 0, explanation: "How to Build Up and Maintain the Virgin Fertility of Our Soils, Bulletin No. 42, is dated October 1936 on its cover (PDF p. 3).", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "Which advice from 1905 does the 1936 bulletin repeat?", options: ["Fill ditches with organic rubbish", "Put manure only on growing fruits and vegetables", "Keep the compost heap steaming hot all year", "Burn all leaves"], correctIndex: 0, explanation: "Printed p. 5: ditches should be filled with pine tops, bark, leaves, and organic rubbish of any kind that will decay and ultimately make soil.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "How does the 1936 bulletin rank farmyard manures?", options: ["Second to commercial fertilizer in every respect", "Useful only on very poor land, never on medium land", "Dangerous", "Nothing builds land as well"], correctIndex: 3, explanation: "Printed p. 7: no fertilizer or system of fertilization to date has been found that will build up the land as effectively, cheaply, and permanently as farmyard manures.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What did Carver say about a year-round compost pile?", options: ["Optional, for farms that can afford hired labor", "Forbidden near a well or a spring", "Absolutely essential", "Too costly"], correctIndex: 2, explanation: "Printed p. 7: a year-round compost pile is absolutely essential and can be had with little labor and practically no cash outlay.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What did Carver say a year-round compost pile costs in cash?", options: ["Practically nothing", "About as much as a ton of commercial fertilizer", "A full season of hired labor every year", "A new barn"], correctIndex: 0, explanation: "Little labor and practically no cash outlay.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "How did Carver build his compost pen?", options: ["One big heap of fresh manure, kept wet and covered with boards", "Manure alone, turned at least five times over fifteen days", "Layers: muck and leaves, then manure", "Leaves only"], correctIndex: 2, explanation: "Printed p. 7: two wagon-loads of muck and leaves over the bottom of the pen, then one load of barnyard manure, building up this way until the pen is full.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "In Carver's pen, how many wagon-loads of muck and leaves go under each load of manure?", options: ["One, so that the layers are equal in volume", "Five, matching the five turnings in today's rules", "Two", "Ten"], correctIndex: 2, explanation: "Two wagon-loads of muck and leaves, then one load of barnyard manure.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "Which of these did Carver list as additions to the pen?", options: ["Ashes and old plaster", "Dog waste and cat litter from the household", "Butchering wastewater from the poultry yard", "Sawdust"], correctIndex: 0, explanation: "Printed p. 7: ashes, old plaster, waste lime, rags, paper, and bones beaten up fine.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What did Carver say about bones in the compost?", options: ["Never add them, since they draw dogs to the pile", "Beaten fine, they are excellent", "Burn them first and add only the blackened ash", "Sell them"], correctIndex: 1, explanation: "\"Bones beaten up fine are also excellent\" (printed p. 7).", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What application rate did Carver give for medium land?", options: ["25 tons to the acre, his rate for very poor land", "20 tons to the acre", "Four tons to the acre, the 1905 broadcast rate", "1 ton"], correctIndex: 1, explanation: "Printed p. 8: 20 tons to the acre on medium land, and 25 tons to the acre on very poor land.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What application rate did Carver give for very poor land?", options: ["20 tons to the acre, his rate for medium land", "Two tons, the 1905 drill mix", "25 tons to the acre", "100 tons"], correctIndex: 2, explanation: "Printed p. 8: 25 tons to the acre on very poor land.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What did Carver's \"fire fang\" caution warn against?", options: ["A heap too cold to break down the leaves by spring", "A heap built too close to the farmhouse", "Rain", "A heap hot enough to steam"], correctIndex: 3, explanation: "Printed p. 8: do not allow this compost-heap to become hot enough for steam to rise from it (\"fire fang\").", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What reason did Carver give for the fire-fang caution?", options: ["The steam could set the barn alight", "Hot compost kills every earthworm in it", "The smell", "Value is lost from the manure"], correctIndex: 3, explanation: "His stated reason: you will lose much of the value of the manure.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What does Carver leave unstated about fire fang?", options: ["Whether a steaming heap is good or bad for the manure", "That the caution applies to his compost heap", "Its name", "What exactly is lost"], correctIndex: 3, explanation: "He says much of the value is lost but not what it is, and the course does not guess for him.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "Why can Carver's fire fang not be lined up with 131 °F?", options: ["He measured in Celsius, and the rules use Fahrenheit", "He gives no temperature", "131 °F is cooler than any heap can get", "It can"], correctIndex: 1, explanation: "\"Steam rising\" is an observation, not a thermometer reading, so there is no honest way to say whether his fire fang sits above or below 131 °F.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What question do today's 131 °F processes answer?", options: ["Keeping the manure's full value as fertilizer, as Carver wanted", "How many tons to spread per acre of poor land", "Pathogen destruction", "Color"], correctIndex: 2, explanation: "The NRCS chapter: heat is necessary for the destruction of pathogens, and temperature and time verify it.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What does lesson 19 say changed between 1936 and now?", options: ["The question being asked", "The temperature at which manure turns into soil", "The chemistry of manure itself", "Nothing"], correctIndex: 0, explanation: "Carver's caution measures fertilizer value; the produce rule's processes and microbial standards measure pathogen reduction.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What should a gardener putting manure near food follow today?", options: ["Carver's caution, keeping the heap below steaming", "Whichever source gives the higher tonnage", "The pathogen rules", "Nothing"], correctIndex: 2, explanation: "Near food, the pathogen rules govern. Carver's point about value can still be taken alongside them.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "Why does this course quote no number from the table on page 8 of the 1936 bulletin?", options: ["The table is still under copyright", "The page is missing from the scan", "Its units do not agree", "It is too long"], correctIndex: 2, explanation: "The table's units do not agree with each other, so it is shown as an artifact of its time, not used as data.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What does lesson 19 say a gardener can still take from Carver's caution?", options: ["That composting at 131 °F is always a mistake for food", "A pile has more than one job", "That manure should never be composted, only spread fresh", "Nothing"], correctIndex: 1, explanation: "Follow the pathogen rules near food, and keep Carver's point that a pile also has a fertilizer job.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "What are Carver's fire-fang caution and today's 131 °F rule each measuring?", options: ["Both measure pathogens, so one of them must be wrong", "Both measure fertilizer value, so they agree exactly", "Neither", "Value; then pathogens"], correctIndex: 3, explanation: "Carver's caution is about the manure's value as fertilizer; the 131 °F processes are about pathogen destruction. Both were right for their purposes.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "Which countries does King's Farmers of Forty Centuries describe?", options: ["India, Egypt and Persia, along the old trade routes", "England, France and the Low Countries", "China, Korea and Japan", "Mexico"], correctIndex: 2, explanation: "The book's full title: Farmers of Forty Centuries; or, Permanent Agriculture in China, Korea and Japan.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "In chapter IX, which practice does King call one of the most remarkable?", options: ["Burning crop stubble every autumn before plowing", "Spreading river silt on rice paddies each spring", "Terracing", "Returning human waste to fields"], correctIndex: 3, explanation: "King: the centuries-long and well nigh universal conservation and utilization of all human waste in China, Korea and Japan.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "Which U.S. rule today bars human waste on covered produce, outside the biosolids exception?", options: ["7 CFR 205.203(c)(1), the organic rule's interval paragraph", "355 IAC 8, Indiana's fertilizer-material rule", "None", "21 CFR 112.53"], correctIndex: 3, explanation: "Lesson 20 reads King as history and points back to 21 CFR 112.53 and lesson 8.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "How wet did King say the Nara compost house was kept?", options: ["Damp but not soggy, like a wrung-out sponge", "Bone dry, below 15 percent moisture", "Frozen", "Saturated"], correctIndex: 3, explanation: "Water is added sufficient to keep the whole saturated. Damp but not soggy is the NRCS chapter's target, a different process.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "At what temperature did King say the Nara compost house was kept?", options: ["Above 131 °F for three days, as today's rules require", "Above 170 °F, past the organic rule's upper limit", "Below body temperature", "Freezing"], correctIndex: 2, explanation: "King: water is added to maintain the temperature below that of the body.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "How long did the Nara compost stacks stand in summer?", options: ["Five weeks", "Seven weeks, the figure King gives for winter", "Six months, Purdue's composting time", "One day"], correctIndex: 0, explanation: "Five weeks in summer, seven weeks in winter.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "How long did the Nara compost stacks stand in winter?", options: ["Five weeks, the figure King gives for summer", "120 days, the organic rule's interval", "Ten years", "Seven weeks"], correctIndex: 3, explanation: "Five weeks in summer, seven weeks in winter.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "How does the Nara compost house compare with the compost the federal rules describe?", options: ["Hotter and drier, reaching the thermophilic stage faster", "The same in temperature, moisture and time", "Wetter and cooler", "Unknown"], correctIndex: 2, explanation: "Saturated and below body temperature, against the NRCS chapter's damp-but-not-soggy and the rules' 131 °F.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "Why does the Nara house fall short of the thermophilic stage?", options: ["Saturated piles always rise above 170 °F", "Body temperature is under 105 °F", "King measured it only in a cold Japanese winter", "It does not"], correctIndex: 1, explanation: "The NRCS chapter puts the thermophilic stage above 105 °F, and King kept the house below body temperature.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "What did Darwin say about worms in his conclusion?", options: ["Worms damage soil and should be removed from gardens", "Worms are the main cause of disease in manure", "Few animals mattered more to history", "Nothing"], correctIndex: 2, explanation: "Darwin, chapter VII: it may be doubted whether there are many other animals which have played so important a part in the history of the world.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "What do Darwin and the NRCS chapter say together about worms?", options: ["Sanitizers, which is why a worm bin is safe for pet waste", "Soil makers, not sanitizers", "Neither, since both dismiss worms entirely", "Both"], correctIndex: 1, explanation: "Darwin shows worms building soil; the NRCS chapter says worm farming does little or nothing to reduce pathogens.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "What line of print sits at the foot of Purdue's 1994 manure bulletin?", options: ["Printed under the authority of the federal organic rule", "Approved by the Office of Indiana State Chemist", "Issued in furtherance of the 1914 acts", "Copyright Purdue"], correctIndex: 2, explanation: "\"Issued in furtherance of the acts of May 8 and June 30, 1914.\"", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "Which act of May 8, 1914 does that line point to?", options: ["An act setting the organic rule's 90 and 120 day intervals", "The produce safety rule, 21 CFR part 112", "The Homestead Act", "The Smith-Lever Act"], correctIndex: 3, explanation: "The May 8, 1914 act is the Smith-Lever Act, which built the Cooperative Extension Service.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "What did the Smith-Lever Act build, according to lesson 20?", options: ["The National Organic Program and its 90 day rule", "The Cooperative Extension Service", "The NRCS manure tables", "Purdue"], correctIndex: 1, explanation: "Smith-Lever built the Cooperative Extension Service, which publishes bulletins like Purdue's.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "Which catalog lesson tells how Congress built the extension machine?", options: ["Five claims that do not survive checking, lesson 17 of Who Gets the Credit", "A thousand miles of nitrogen, lesson 10 of The River and the Watershed", "What a capacity grant is, and the machine it built", "Sanitation"], correctIndex: 2, explanation: "The Match, lesson 3, \"What a capacity grant is, and the machine it built\".", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "Where did Carver's bulletins come from?", options: ["Purdue's extension service, which printed them in Indiana", "The NRCS, as chapters of its field handbook", "Iowa State", "Tuskegee"], correctIndex: 3, explanation: "Bulletin No. 6 came from the Tuskegee Normal and Industrial Institute Experiment Station and Bulletin No. 42 from the Tuskegee Institute Press; Purdue's bulletins come from its extension service.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "Which source in lesson 20's table is good evidence that worms sanitize manure?", options: ["None of them", "Darwin, 1881, whose book shows worms make manure safe", "King, 1911, whose Nara house used worms to sanitize waste", "Carver, 1936"], correctIndex: 0, explanation: "The table lists Darwin as good for worms as soil makers and explicitly not as evidence that worms sanitize manure.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Your own loop (carries the final)
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "which-rule-applies-to-you",
      title: "21 · Which rule applies to you",
      section: S6,
      recallContent: [
        {
          prompt: "How did King's Nara compost house differ from the compost the federal rules describe?",
          answer: "It was kept saturated and below body temperature; the federal processes require at least 131 °F, and the NRCS chapter wants damp but not soggy.",
        },
        {
          prompt: "What do Carver's fire-fang caution and today's 131 °F rule each protect?",
          answer: "Carver's protects the manure's value as fertilizer; the 131 °F rule is about pathogen destruction.",
        },
      ],
      body: `${SAFETY}

Everything so far comes together in one question: for your own place, which rule or guidance applies?

**An honest frame first.** This course did not verify which growers each federal rule legally covers. So it treats the organic rule (7 C.F.R. § 205.203) and FDA's produce safety rule (21 C.F.R. part 112) as benchmarks you measure your practice against, not as a statement of your legal duties. In Indiana, two state tests are concrete, and your extension office (lesson 17) can answer the rest.

**Six questions, in order.**

1. **Where does the manure come from?** Your own animals; a neighbor's; a large farm; a bag or a truck of unknown origin. CFO manure is governed under 327 IAC 19, while manure that is sold, mixed or of unknown source falls under 355 IAC 8 (lesson 16).
2. **How much in a year?** Under 10 cubic yards or 4,000 gallons, 355 IAC 8 does not apply to you. Over it, the setbacks and frozen-ground limits in lesson 16 apply if you grow an agricultural crop (8-2-2), which a vegetable garden is and a lawn, tree or flower bed is not.
3. **Where is your compost, and how big?** Your own material on your own property, or a pile under 300 square feet, is exempt from IDEM registration.
4. **Is any of it on the never list?** Dog, cat or pig manure; cat litter; human waste; butchering water as garden water (lessons 5 to 8).
5. **Is your compost "treated", or raw?** Only a measured process counts: 131 °F for 3 consecutive days in an aerated static pile or an in-vessel system, or 15 days with five turnings, as lesson 11 set out. A cold heap, a passive pile or a worm bin is raw for this purpose.
6. **What do you grow, and when do you harvest?** Purdue's guidance: compost at least six months; fresh manure only the previous fall; never on actively growing fruits or vegetables. The benchmarks: the organic rule's 120 and 90 days, and the produce rule's "[Reserved]".

**Three sketches.**

**A balcony.** A worm bin for kitchen scraps and a few containers. No manure, so most of the questions above do not arise. Remember lesson 12: a worm bin does little or nothing to reduce pathogens, so it is no place for pet waste.

**A backyard with six hens.** Hen manure has a C:N of 6 (Table 2A-1), so it needs high-carbon partners such as leaves (54) or straw (80). Use Purdue's home method from lesson 12, and either measure a hot process or treat the result as raw and follow Purdue's timing. No dog waste in the pile.

**An acre with one horse and a vegetable garden.** Horse manure, at C:N 30, already sits in the organic rule's window. The volume question is real here. The NRCS table gives a sedentary horse 51 pounds of manure a day per 1,000 pounds, as excreted. For a 1,000-pound horse that is 51 × 365 = 18,615 pounds a year. Whether that is more than 10 cubic yards depends on how dense it is and what is mixed with it, which this course did not verify. Ask your extension office before you assume you are under the threshold.

**A testing plan, from lesson 15.** Late summer or early fall; 10 to 15 cores for a large area, 6 to 8 inches deep; a pint per area to a lab on the Purdue list; every three to five years.

:::reveal In Indiana, what single number decides whether 355 IAC 8 applies to a home food grower using manure? ||| The volume: 10 cubic yards (or 4,000 gallons) of fertilizer material a year, since a food garden grows an agricultural crop.

:::reveal Why does this course treat the two federal rules as benchmarks rather than as your legal duties? ||| Because it did not verify which growers each federal rule legally covers. Indiana's own thresholds are the concrete tests, and the extension office answers the rest.

## Sources
- ${ORGANIC("(c)(1) and (c)(2)")}
- ${PRODUCE("112.56", "(a)")}
- ${IAC8("Sections 8-1-2 and 8-3")}
- ${IDEM_COMPOST}
- ${IDEM_CFO_MANURE}
- ${SCOOP}
- ${nrcs637("Appendix 2A, Table 2A-1, printed pp. 2A-5 to 2A-7 (PDF pp. 91 to 93)", 91)}
- ${nrcs651("Table 4-14 on printed p. 4-22 (PDF p. 30)", 30)}
- ${HO71("Pages 3 to 5")}`,
    },
    {
      slug: "build-your-own-loop",
      title: "22 · Build your own loop",
      section: S6,
      lessonType: "assignment",
      body: `${SAFETY}

This is the course's capstone. You will build a model of the loop on your own ground: a drawing with a written key that shows how matter moves among the plants, the animals, the decomposers and the soil, and where it leaks out. A real place is best. If you have none yet, pick one of lesson 21's three sketches and make it yours.

**Step 1: draw the boundary.** Draw a line around your system: the beds, the pile or bin, any animals, the house. Everything inside the line is your loop. Then list what crosses the line coming in (feed, bought compost, a neighbor's leaves, manure from a farm) and going out (food you eat or give away, water that drains off, ammonia to the air).

**Step 2: draw the boxes.** Put in a box for each of these:

- **Plants:** your crops.
- **Animals:** your hens, horse or rabbits, and you. Your own waste stays out of this loop (lesson 8): draw it leaving the boundary, never going into the pile or the beds.
- **Decomposers:** the microorganisms in your compost pile (lesson 9) and the worms in your soil or bin (lessons 12 and 20).
- **Soil:** your beds.

**Step 3: draw the arrows, and label each one with the matter it carries.** Feed into an animal. Manure out of it (Purdue: most of the nitrogen, phosphorus and potassium fed comes back out, lesson 1). Scraps and manure into the pile. Finished compost into the beds. Harvest out of the beds.

**Step 4: annotate every manure.** For each one: which animal; its NRCS row, or "no table: test" (lessons 3 and 4); its C:N from Table 2A-1 and its partner material (lesson 13).

**Step 5: mark the process.** Hot pile, cold heap, passive pile or worm bin. For a hot pile, add a thermometer log: date, center and edge readings, turnings, and whether it reached 131 °F for 3 consecutive days aerated static or in-vessel, or 15 days with five turnings (lessons 10 and 11). Anything else is raw for timing purposes.

**Step 6: mark the timing.** For each bed, the harvest date, and the rule you follow: Purdue's six months, previous fall, never on growing crops; with the organic rule's 120 and 90 days beside it as the benchmark (lesson 14).

**Step 7: mark the leaks.** Where could nitrogen leave? Ammonia in the first 24 hours after surface spreading (lesson 15); ammonia leaching from a pile short of carbon (lesson 9); a frozen slope (lesson 16). Draw an arrow off the page for each, toward the river that *What the River Carries* follows.

**Step 8: mark the never list.** Write down what will never enter your loop, and why (lessons 5 to 8).

**Step 9: mark the rules and the tests.** Your 355 IAC 8 volume answer and IDEM answer (lessons 16 and 21); your soil testing plan (lesson 15); your extension office's guidance and your question from lesson 17.

**Step 10: revise.** Pick one arrow you would change after a season, or after reading your soil test, and explain why, naming the lesson that tells you so.

**What to submit.** A photo of the drawing, and a key of no more than one page.

**What a strong model shows.** A boundary that names what crosses it. Arrows that carry named matter, not vague "nutrients". At least one leak, drawn honestly. A never list with reasons. A timing rule with its source. And a revision that changes something real, because a model you never revise is a picture.

## Sources
- ${AY277("Opening paragraph, before the heading \"Determining Manure Nutrient Content\"")}
- ${nrcs637("Printed pp. 2-1 and 2-8 (PDF pp. 9 and 16); Table 2A-1 (PDF pp. 91 to 93)", 9)}
- ${ID101("Sections \"Method of Land Application\" and \"Applying Manure to the Land\"")}
- ${ORGANIC("(c)(1) and (c)(2)")}
- ${SCOOP}
- ${HO71("Pages 3 to 5")}`,
    },
    {
      slug: "final-quiz",
      title: "Final quiz · Your whole loop",
      section: S6,
      body: "Ten questions drawn at random from a pool that covers the whole course, so a retake asks different ones. Pass at 80 percent. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          { prompt: "Why does lesson 21 treat the two federal rules as benchmarks rather than as your legal duties?", options: ["Federal rules never apply to anyone who grows food at home", "Indiana has opted out of both federal rules", "Their coverage was not verified", "They are outdated"], correctIndex: 2, explanation: "The course did not verify which growers each federal rule legally covers, so it measures practice against them and uses Indiana's own thresholds as the concrete tests.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "In Indiana, which two state tests does lesson 21 call concrete?", options: ["355 IAC 8's volume, and IDEM's exemption", "The organic rule's 120 days and FDA's \"[Reserved]\" paragraph", "The NRCS animal unit and the ASAE D384.2 standard", "Soil pH"], correctIndex: 0, explanation: "The 10 cubic yard threshold of 355 IAC 8 and IDEM's registration exemption for home composting are the Indiana tests.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "Your compost pile covers 200 square feet and holds only your own yard and kitchen material. What does IDEM require?", options: ["Registration, since every pile over 100 square feet needs it", "A permit from the State Chemist under 355 IAC 8", "No registration", "Weekly inspection"], correctIndex: 2, explanation: "Both exemptions apply: material from your own activities composted at your property, and an operation under 300 square feet.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "You bring in a truckload of manure of unknown origin. Which Indiana rule covers it if you pass the volume threshold?", options: ["327 IAC 19, the rule for confined feeding operation manure", "355 IAC 8", "21 CFR 112.53, the produce rule's human-waste paragraph", "None"], correctIndex: 1, explanation: "Manure that is sold, mixed or of unknown source falls under 355 IAC 8; CFO manure falls under 327 IAC 19.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "Which compost counts as \"treated\" under lesson 21's fifth question?", options: ["Any heap that has sat outdoors for at least one full winter", "Measured: 131 °F for 3 days, aerated", "Worm castings from a bin that was fed manure", "Bagged mulch"], correctIndex: 1, explanation: "Only a measured process counts: 131 °F for 3 consecutive days in an aerated static pile or an in-vessel system, or 15 days with five turnings. A cold heap, a passive pile or a worm bin is raw for this purpose.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "In lesson 21's backyard sketch with six hens, what does the hen manure need?", options: ["More nitrogen from a second manure such as swine", "Nothing, since its C:N of 6 is inside every window", "High-carbon partners", "Lime"], correctIndex: 2, explanation: "Hen manure's C:N is 6 (Table 2A-1), so it needs partners such as leaves (54) or straw (80).", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "In lesson 21's balcony sketch, why is a worm bin no place for pet waste?", options: ["Worms do little to reduce pathogens", "Pet waste kills composting worms within a single day", "Worm bins must be registered with IDEM", "It is fine"], correctIndex: 0, explanation: "The NRCS chapter: vermiculture gives little or no pathogen reduction. And pet waste stays out of compost in any case.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "A sedentary 1,000-pound horse makes 51 pounds of manure a day, as excreted. How much is that in a year?", options: ["18,615 pounds", "5,100 pounds, which is 51 pounds times 100 days", "51 pounds, because the table figure is per year", "365 pounds"], correctIndex: 0, explanation: "51 × 365 = 18,615 pounds a year, as excreted, on the NRCS table's per-1,000-pound basis.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "Why can lesson 21 not say whether one horse's manure passes 10 cubic yards a year?", options: ["355 IAC 8 measures solid manure only by weight, never by volume", "Horses are exempt from every Indiana manure rule by statute", "Its density and mix were not verified", "It can"], correctIndex: 2, explanation: "Converting pounds to cubic yards depends on how dense the manure is and what is mixed with it. Ask your extension office before assuming you are under the threshold.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "Under lesson 21's sixth question, what timing does Purdue give for an Indiana garden?", options: ["120 days for soil-contact crops and 90 for all others, as the law requires", "Zero days for any manure, since FDA left its interval blank", "One year", "Six months; previous fall; never on growing crops"], correctIndex: 3, explanation: "Purdue: compost at least six months; fresh manure only the previous fall; never on actively growing fruits or vegetables. The 120 and 90 days are the organic rule's benchmarks.", sourceLessonSlug: "which-rule-applies-to-you" },
          { prompt: "What is the first step of the capstone model in lesson 22?", options: ["Send a manure sample to a lab for testing", "Draw the boundary", "Buy a compost thermometer and log readings", "Pick a crop"], correctIndex: 1, explanation: "Step 1: draw a line around your system, then list what crosses it coming in and going out.", sourceLessonSlug: "build-your-own-loop" },
          { prompt: "In step 2, which boxes does the model include?", options: ["Plants, animals, decomposers, soil", "Inputs, outputs and profit, as in a farm budget", "Producers of manure only, with no plants shown", "Rules"], correctIndex: 0, explanation: "The four boxes: plants (your crops), animals (including you), decomposers (microorganisms and worms) and soil.", sourceLessonSlug: "build-your-own-loop" },
          { prompt: "Which decomposers does the model name?", options: ["Fungi only, because bacteria cannot live above 105 °F", "Cats and dogs, which break down kitchen scraps", "Microorganisms and worms", "None"], correctIndex: 2, explanation: "The microorganisms in the compost pile (lesson 9) and the worms in your soil or bin (lessons 12 and 20).", sourceLessonSlug: "build-your-own-loop" },
          { prompt: "What must each arrow in the model carry?", options: ["A dollar value for whatever moves along it", "The date on which the arrow was first drawn", "Nothing", "A label naming the matter"], correctIndex: 3, explanation: "Step 3: label each arrow with the matter it carries, such as feed, manure, scraps, compost or harvest.", sourceLessonSlug: "build-your-own-loop" },
          { prompt: "For a hot pile, what does step 5 ask you to log?", options: ["The color of the pile each morning at sunrise", "The weight of the pile after every rain", "Temperatures, turnings and days", "Nothing"], correctIndex: 2, explanation: "A thermometer log: date, center and edge readings, turnings, and whether it reached 131 °F for 3 consecutive days aerated static or in-vessel, or 15 days with five turnings.", sourceLessonSlug: "build-your-own-loop" },
          { prompt: "Which of these is a leak step 7 asks you to draw?", options: ["Ammonia after surface spreading", "Carbon dioxide from the gardener's own breath", "Heat lost from the house in winter", "None"], correctIndex: 0, explanation: "Step 7 names ammonia in the first 24 hours after surface spreading, ammonia leaching from a pile short of carbon, and a frozen slope.", sourceLessonSlug: "build-your-own-loop" },
          { prompt: "Why does a strong model include a revision?", options: ["The course requires two drawings for a passing grade", "The first drawing must always be wrong", "It need not", "A model never revised is a picture"], correctIndex: 3, explanation: "Step 10 asks you to change one arrow after a season or a soil test, naming the lesson that tells you so.", sourceLessonSlug: "build-your-own-loop" },
          { prompt: "What does step 1 ask you to list beside the boundary?", options: ["What crosses it, in and out", "The names of every neighbor whose land touches yours", "The price of each input bought that year", "The weather"], correctIndex: 0, explanation: "Inputs such as feed, bought compost or a neighbor's leaves; outputs such as food, drainage water and ammonia.", sourceLessonSlug: "build-your-own-loop" },
          { prompt: "A table row says 0.45 pounds of nitrogen. What else must you know before you use it?", options: ["Its basis: per day per 1,000 pounds", "The color of the manure, which reveals its nitrogen", "Nothing, since every row is per animal per year", "The breed"], correctIndex: 0, explanation: "Most NRCS rows are per day per 1,000 pounds of animal, as excreted. Without the basis, the number cannot be used.", sourceLessonSlug: "as-excreted" },
          { prompt: "Feedlot manure falls from 90 to about 30 percent moisture over time. What does that show?", options: ["That the NRCS tables are wrong for feedlots and should be ignored", "That manure gains nitrogen as it dries", "Nothing", "A pile changes after excretion"], correctIndex: 3, explanation: "The tables describe manure as excreted. A pile that has sat is a different material.", sourceLessonSlug: "as-excreted" },
          { prompt: "You keep goats. What number does the NRCS handbook give for their manure?", options: ["None", "The dairy cow's 108 pounds, since goats are also ruminants", "The lamb's 40 pounds, since goats and sheep share a table", "57 pounds"], correctIndex: 0, explanation: "There is no NRCS table for goats, so a test of your own manure is the number to use.", sourceLessonSlug: "the-animals-the-tables-skip" },
          { prompt: "What point do Darwin's sentence and AY-277's percentages share?", options: ["Manure is waste that leaves the farm for good", "Matter goes around, not one way", "Worms create nitrogen out of nothing", "Soil never changes"], correctIndex: 1, explanation: "Soil passes through worms again and again, and most of what an animal is fed comes back out in its manure.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "Which of these is a step in lesson 1's loop?", options: ["Manure is hauled away and never returns to soil", "Plants turn soil straight into manure", "Decomposers break manure down", "Rain makes nitrogen"], correctIndex: 2, explanation: "Feed into an animal; most of its nutrients out in manure; decomposers break it down; the soil feeds the next crop.", sourceLessonSlug: "what-a-loop-is" },
          { prompt: "An exercised horse gives 0.31 pounds of nitrogen and a sedentary one 0.18. What does that teach about book values?", options: ["The tables are unreliable for every horse", "Stage and use change the number", "Exercised horses eat less than sedentary ones", "Nothing"], correctIndex: 1, explanation: "What the animal is doing changes what comes out. A book value fits only the animal it describes.", sourceLessonSlug: "manure-animal-by-animal" },
          { prompt: "A neighbor's dog-waste compost reached 145 °F for several days. Can it go on your lettuce?", options: ["Yes, since 145 °F is above the 131 °F federal floor", "Yes, after 90 days, the organic rule's shorter interval", "No", "Only if rinsed"], correctIndex: 2, explanation: "The 2005 sheet says dog waste compost should not be used on crops grown for human consumption, whatever temperature it reached.", sourceLessonSlug: "the-fairbanks-dog-waste-study" },
          { prompt: "Your cat uses the vegetable bed. Which CDC advice applies most directly?", options: ["Change the bed's soil every five days", "Compost the soil at 131 °F before planting", "Gloves, and rinse the produce", "Nothing"], correctIndex: 2, explanation: "CDC: wear gloves when touching soil that cat feces may have contaminated, and rinse fruit and vegetables under running water.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "Which source in section 2 is a federal regulation?", options: ["Purdue's FS-44-W bulletin on backyard poultry", "Iowa State's Using Manure in the Home Garden", "21 CFR 112.53", "CDC"], correctIndex: 2, explanation: "21 CFR 112.53 is part of FDA's produce safety rule. The others are extension guidance and public health advice.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "You butcher three chickens. Where does the wastewater go?", options: ["Toward the compost, not the garden", "Onto the vegetable garden as free fertilizer", "Into the worm bin to feed the worms", "Into the rain barrel for the lettuce bed"], correctIndex: 0, explanation: "Purdue's FS-44-W says butchering wastewater goes in a compost pile or, if the amount is small, a sewer system, and must never water the fruit and vegetable garden.", sourceLessonSlug: "human-waste-butchering-water-and-cool-patches" },
          { prompt: "Pig manure is in the NRCS tables, and Purdue says keep it out of gardens. Which reading is right?", options: ["The tables overrule Purdue, so pig manure is fine", "Purdue overrules the tables, so the tables are wrong", "Both are true", "Neither"], correctIndex: 2, explanation: "A table describes what pigs produce; it does not recommend pig manure for a vegetable bed.", sourceLessonSlug: "dogs-cats-and-pigs" },
          { prompt: "Which parasite's timing makes old pet waste a lasting soil concern?", options: ["Toxoplasma, which turns infectious in one to five days", "Salmonella, counted in MPN per 4 grams", "Toxocara", "None"], correctIndex: 2, explanation: "Toxocara eggs take two to four weeks to become infective and then survive for months, or even years.", sourceLessonSlug: "toxoplasma-and-toxocara" },
          { prompt: "Your pile hit 135 °F once at the center and was never measured again. Is its manure treated?", options: ["Yes, since it passed 131 °F, the federal floor", "No", "Yes, if it was turned at least once afterward", "Only for lettuce"], correctIndex: 1, explanation: "Both federal processes need time as well as temperature: 3 consecutive days, aerated static or in-vessel, or 15 days with five turnings. One reading is not a process.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "Which pile meets the organic rule's windrow process?", options: ["3 days at 120 °F with a single turning on the second day", "15 days at 180 °F with no turning, so the core stays hot", "15 days at 131 to 170 °F, five turns", "A worm bin"], correctIndex: 2, explanation: "205.203(c)(2)(iii): 131 to 170 °F for 15 days in a windrow, turned a minimum of five times.", sourceLessonSlug: "two-federal-compost-processes" },
          { prompt: "A pile is losing ammonia. What does the NRCS chapter say it is short of?", options: ["Carbon", "Nitrogen, which the ammonia shows is running out", "Water, since ammonia only forms in a dry pile", "Worms"], correctIndex: 0, explanation: "With too little carbon for its nitrogen, a pile loses ammonia, which may leach into ground or surface water.", sourceLessonSlug: "what-composting-is" },
          { prompt: "You mix hen manure (C:N 6) with straw (C:N 80). What tells you whether you got it right?", options: ["The plain average of 6 and 80, which comes to 43", "Heat within two to three days", "The color of the straw after it has sat for a week", "Nothing"], correctIndex: 1, explanation: "Averaging ratios does not give a mix's C:N. The thermometer is the check: a good mix turns thermophilic in two to three days.", sourceLessonSlug: "mixing-a-pile-with-table-2a-1" },
          { prompt: "Which statement about worm bins and manure is accurate?", options: ["Worm bins meet the produce rule's static composting process", "Worms raise a pile to 131 °F", "Worm bins do not sanitize it", "Worms are banned"], correctIndex: 2, explanation: "The NRCS chapter: vermiculture is worm farming, not composting, with little or no pathogen or weed seed reduction.", sourceLessonSlug: "turning-cold-heaps-and-worms" },
          { prompt: "A pile reads 175 °F. What does the NRCS chapter say about it?", options: ["It has passed the PFRP and is ready for vegetables", "It is curing and should be left alone", "It cannot control its temperature", "It is ideal"], correctIndex: 2, explanation: "Above 170 °F the pile is unable to control its temperature, and the organic rule's process tops out at 170 °F.", sourceLessonSlug: "heat-oxygen-and-time" },
          { prompt: "You want to spread fresh manure around growing tomatoes in July. What does Purdue say?", options: ["Go ahead, if harvest is more than 90 days away", "Go ahead, if the manure has sat for a week", "Do not", "Water it in"], correctIndex: 2, explanation: "Purdue: do not apply manure to actively growing fruits or vegetables. Fresh manure goes on the previous fall.", sourceLessonSlug: "when-to-spread" },
          { prompt: "Which paragraph shows FDA has set no waiting interval for untreated manure applied to minimize contact?", options: ["21 CFR 112.56(a)(1)(i)", "7 CFR 205.203(c)(1), the organic rule's interval paragraph", "355 IAC 8-3-4, Indiana's frozen-ground rule", "HO-71-W"], correctIndex: 0, explanation: "112.56(a)(1)(i) reads \"[Reserved]\". 205.203(c)(1) is where the 90 and 120 days live.", sourceLessonSlug: "when-to-spread" },
          { prompt: "Your Indiana garden's soil test comes back slightly alkaline. Should you add lime?", options: ["Yes, because lime always improves Indiana soil", "Yes, at the agronomic rate allowed on frozen ground", "No", "Only in spring"], correctIndex: 2, explanation: "Purdue: most Indiana gardens are near neutral or slightly alkaline, and lime will not help (and may hurt).", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "You spread manure on the surface on Monday morning. When does most of its ammonia loss happen?", options: ["Next month, once the manure has dried out", "By Tuesday morning", "Next spring, when the soil warms", "Never"], correctIndex: 1, explanation: "ID-101: most ammonia volatilization occurs within the first 24 hours after surface application.", sourceLessonSlug: "test-before-you-spread" },
          { prompt: "You use 12 cubic yards of manure a year on a vegetable garden in Indiana. What follows under 355 IAC 8?", options: ["Nothing, since home gardens are always exempt", "Only IDEM's composting rule applies", "The rule applies to you", "Organic certification"], correctIndex: 2, explanation: "A vegetable garden grows an agricultural crop, and 12 cubic yards is over the 10 cubic yard threshold.", sourceLessonSlug: "too-much-indiana-rules-and-the-river" },
          { prompt: "What does Purdue's 2026 move to 12 regions mean for lesson 17's assignment?", options: ["The assignment can no longer be done in Indiana", "A regional educator may answer", "Only Marion County residents may complete it", "Nothing"], correctIndex: 1, explanation: "Whether every county keeps its own educator was not confirmed, so the assignment accepts a regional educator.", sourceLessonSlug: "find-your-extension-office" },
          { prompt: "Carver's 1905 drill mix used well-rotted manure, and his 1936 pen built compost. What do both show?", options: ["Organic matter rebuilding soil", "That Carver opposed using manure on cotton land", "That Carver invented peanut butter", "Nothing"], correctIndex: 0, explanation: "Both bulletins put plant waste and manure back into worn land. The peanut butter story is a myth corrected in Who Gets the Credit.", sourceLessonSlug: "carver-1905" },
          { prompt: "Carver warned against a steaming heap; today's rules require 131 °F. Which guides a vegetable garden today?", options: ["Carver's caution, since he was a soil scientist", "Neither, since compost should not be used near food", "The 131 °F rule", "Both equally"], correctIndex: 2, explanation: "Near food, the pathogen rules govern. Carver's caution was about fertilizer value, a different question.", sourceLessonSlug: "carver-1936-and-fire-fang" },
          { prompt: "Why is King's Nara compost house not a method this course teaches?", options: ["It ran wet and cool", "It ran hotter than 170 °F, past any safe limit", "King described it as fiction in his preface", "It is"], correctIndex: 0, explanation: "King's house was saturated and below body temperature. The federal rules require hot composting at 131 °F or more, and the NRCS chapter wants damp but not soggy.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "Which statement about Darwin and worms is accurate?", options: ["Darwin proved that worms destroy pathogens in manure", "Worms are pests that ruin vegetable mould", "Worms pass soil through their guts", "Worms live only in tropical soils"], correctIndex: 2, explanation: "Darwin: all the vegetable mould has passed many times through the intestinal canals of worms.", sourceLessonSlug: "king-darwin-and-the-extension-service" },
          { prompt: "Why does lesson 18 send you to Who Gets the Credit?", options: ["It teaches composting at 131 °F step by step", "It reprints Bulletin No. 6 in full", "No reason", "It corrects a Carver myth"], correctIndex: 3, explanation: "Lesson 17 of Who Gets the Credit corrects the peanut butter claim and points to Carver's real work in soil restoration and crop rotation.", sourceLessonSlug: "carver-1905" },
        ],
      },
    },
  ],
};
