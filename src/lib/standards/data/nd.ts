// ─────────────────────────────────────────────────────────────────────────────
// NORTH DAKOTA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-nd` was written FROM North Dakota's own official sources (ndlegis.gov, sos.nd.gov,
// ndcourts.gov, and the North Dakota Constitution of 1889), so the North Dakota civics flagship
// gets a genuine home. North Dakota's Social Studies Content Standards band grades 6-12 in broad
// ANCHOR standards with numbered benchmarks, and there is no single "North Dakota state government"
// benchmark; the flagship's North-Dakota-structure content therefore maps onto the benchmarks that
// name STATE and LOCAL government (C.6_12.2.4, C.6_12.2.5) and citizen influence and participation
// (C.6_12.4.1, C.6_12.4.3, C.6_12.4.5), and the Bank of North Dakota lands on the economics
// benchmark about the role of government in a market economy (E.6_12.4.2).
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from North Dakota's own record (North
// Dakota is MOSTLY BESPOKE — it writes its own standards across social studies, ELA, and science):
//   · Social studies — BESPOKE. The North Dakota Social Studies Content Standards (adopted August
//     2019) are North Dakota's own, written by North Dakota committees, using North Dakota's own
//     coding scheme (C=Civics & Government, E=Economics, G=Geography, WH=World History, US=United
//     States History; the "6_12" segment is the 6-12 grade band; a ♦ marks standards tied to North
//     Dakota Century Code 15.1-21 Curriculum and Testing). We map the Civics & Government, Economics,
//     Geography, United States History, and World History benchmarks the catalog genuinely reaches;
//     the rest are rejected in notClaimed. Codes are cited exactly as printed (C.6_12.2.5, etc.).
//   · ELA — CONSIDERED, NOT claimed this pass. North Dakota adopted its OWN English Language Arts
//     & Literacy standards (2023, North Dakota's own codes and wording — North Dakota is not mapped
//     through our shared Common Core file); we have not fetched and verified that document this pass,
//     and our rule is fetch-or-don't-cite, so ELA is deferred to notClaimed.
//   · Science — CONSIDERED, NOT claimed this pass. North Dakota's 2019 science standards are North
//     Dakota's own (NRC-Framework-derived, not adopted verbatim from NGSS); the catalog's one honest
//     science idea (resource availability and climate shaping human activity) would in principle map
//     to a North Dakota code, but we have not confirmed the verbatim North Dakota science text, and
//     verbatim-or-nothing means we will not alias the shared NGSS file to a North Dakota code we
//     could not check. Science is deferred until that verbatim text is in hand.
//
// PROVENANCE (social studies): transcribed VERBATIM from the NDDPI-published "North Dakota Social
// Studies Content Standards, Grades K-12" (August 2019; the document as reformatted in Revision 7,
// dated 2023-11-30 — the 6-12 Civics & Government, Economics, Geography, United States History, and
// World History sections), retrieved 2026-07-19 directly from the NDDPI canonical PDF at the
// sourceUrl below (extracted from the PDF's own text layer). Apostrophes are transcribed as the
// source's curly character. The ♦ NDCC-15.1-21 marker printed on C.6_12.1.3 and C.6_12.4.2 is a
// document annotation, not part of the standard's sentence, so it is described in the adoption note
// rather than appended to the verbatim text.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const ND_SS_SOURCE =
  "https://www.nd.gov/dpi/sites/www/files/documents/Academic%20Support/Rev7_2023.11.30_Social_Studies_Content%20Standards.pdf";
const ND_SS_PUBLISHER = "North Dakota Department of Public Instruction (NDDPI)";
const ND_SS_VERSION =
  "North Dakota Social Studies Content Standards, Grades K-12 (adopted August 2019; formatting Revision 7, 2023-11-30)";

export const JURISDICTION: JurisdictionFile = {
  state: "ND",
  frameworks: [
    // ── Social Studies — 6-12 Civics & Government (C.6_12) ─────────────────
    {
      id: "nd-civics",
      subject: "Social Studies",
      name: "North Dakota Social Studies Content Standards — 6-12 Civics & Government (C.6_12)",
      publisher: ND_SS_PUBLISHER,
      version: `${ND_SS_VERSION} · 6-12 Civics & Government (C.6_12)`,
      fetchedOn: "2026-07-19",
      sourceUrl: ND_SS_SOURCE,
      adoption:
        "North Dakota's Civics & Government standards are its own (adopted August 2019). They band grades 6-12 in four broad anchor standards (C.6_12.1-4) with numbered benchmarks, so the North Dakota civics flagship — the Constitution of 1889, the two national 'onlys' (no voter registration; the state-owned Bank of North Dakota and Mill and Elevator), the Nonpartisan League, the biennial 94-Rep/47-Senator Legislative Assembly, the elected nonpartisan Supreme Court, strong direct democracy, and the 53 counties — maps onto the benchmarks that name state and local government and citizen influence and participation. Codes are cited exactly as printed; C.6_12.1.3 and C.6_12.4.2 carry the source's ♦ marker denoting standards tied to North Dakota Century Code 15.1-21 (Curriculum and Testing). Transcribed verbatim from the NDDPI Social Studies Content Standards (see the file header for provenance).",
      standards: [
        // — The flagship's home: benchmarks that name state and local government —
        {
          code: "C.6_12.2.5",
          text: "Explain the purposes, organization, powers, and processes of tribal and local governments.",
          claimIds: [
            "civics.nd-local-government",
            "civics.local-government-layers",
            "civics.show-up-every-level",
          ],
          coverage: "partial",
          note: "The flagship's primary local home: North Dakota LOCAL government is taught as North Dakota's own — the 53 counties with elected commissions and separately elected sheriff, auditor, treasurer, and state's attorney, active townships alongside incorporated cities, and school and special districts, plus how to show up at each. TRIBAL government — which the standard names, in a state home to five tribal nations — is not taught by this catalog.",
        },
        {
          code: "C.6_12.2.4",
          text: "Explain the relationship among federal, state, tribal, and local governmental powers.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.nd-legislature-courts",
            "civics.nd-local-government",
          ],
          coverage: "partial",
          note: "Partial: the federal-state-local relationship is taught in full — why power is split between nation and state, the enumerated-versus-reserved taxonomy, and North Dakota's own state structure (the Constitution of 1889, the biennial Legislative Assembly, the plural executive, and the elected courts). TRIBAL governmental powers and tribal sovereignty, which the standard also names, are not taught.",
        },
        {
          code: "C.6_12.2.3",
          text: "Analyze the structure, principles, and interpretation of the Constitution of the United States.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.preamble-purposes",
            "civics.separation-checks-balances",
            "civics.federal-articles-i-iii",
            "civics.judicial-review-marbury",
          ],
          coverage: "full",
          note: "The U.S. Constitution is worked article by article: the Preamble's purposes, separation of powers and checks and balances, the branches Articles I-III create, and judicial review (Marbury v. Madison) — the structure, principles, and interpretation the standard names.",
        },
        {
          code: "C.6_12.2.2",
          text: "Examine the role and purposes of government.",
          claimIds: ["civics.nd-bank-mill-npl", "civics.preamble-purposes"],
          coverage: "partial",
          note: "Partial: the purposes-of-government question is engaged directly, and with a North Dakota answer — the state-owned Bank of North Dakota and Mill and Elevator as a distinctive view of what government is for, alongside the Preamble's enumerated purposes. The guiding topics' comparative survey of ancient civilizations' founding governments (River Valley, Greek, Roman, Mesoamerican) is not the focus.",
        },
        {
          code: "C.6_12.1.3",
          text: "Evaluate the creation and impact of primary sources on political thought in the United States.",
          claimIds: [
            "civics.articles-to-constitution",
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
          ],
          coverage: "partial",
          note: "Partial: the founding primary sources are worked as documents that shaped U.S. political thought — the failure of the Articles of Confederation, the 1787 Constitution, and the Bill of Rights. The fuller genealogy the guiding topics list (Magna Carta, the Federalist and Anti-Federalist Papers, the Virginia and New Jersey Plans) is named, not each worked. (Carries the source's ♦ NDCC 15.1-21 marker.)",
        },
        {
          code: "C.6_12.3.1",
          text: "Describe and examine the amendments to the United States Constitution and their application in the United States.",
          claimIds: [
            "civics.bill-of-rights-origin",
            "civics.bill-of-rights-overview",
            "civics.article-v-amendment",
            "rights.landmark-cases",
          ],
          coverage: "full",
          note: "The amendments are taught end to end: the Bill of Rights and later amendments, the Article V process that creates them, and their application through the landmark cases.",
        },
        {
          code: "C.6_12.3.2",
          text: "Describe the impact of court cases on the rights and liberties of individuals.",
          claimIds: [
            "rights.landmark-cases",
            "rights.scotus-precedent",
            "rights.limits-on-rights",
            "civics.judicial-review-marbury",
          ],
          coverage: "full",
          note: "The impact of court cases on rights is taught as usable rules — the landmark cases (including Tinker v. Des Moines, which the standard's guiding topics name), how precedent expands rights over time, where the line on those rights falls, and judicial review as the Court's power.",
        },
        {
          code: "C.6_12.4.1",
          text: "Explain how citizens can influence government.",
          claimIds: [
            "civics.campaign-help",
            "civics.track-a-bill",
            "civics.nd-direct-democracy",
            "civics.nd-no-registration",
            "civics.ballot-measures-local-causes",
            "civics.run-for-office",
          ],
          coverage: "full",
          note: "Exactly the standard's guiding list: voting (North Dakota's no-registration system), running for office, petitioning, and the initiated measure, referendum, and recall that North Dakota's populist history makes an unusually consequential tool, plus helping a campaign lawfully and tracking a live bill.",
        },
        {
          code: "C.6_12.4.2",
          text: "Describe and evaluate the criteria and process for naturalization in the United States.",
          claimIds: ["civics.us-citizenship-law", "civics.citizenship-responsibilities"],
          coverage: "full",
          note: "An entire course walks the naturalization criteria and process — the citizenship test and pledge, the requirements, and the historic and present restrictions the standard names. (Carries the source's ♦ NDCC 15.1-21 marker.)",
        },
        {
          code: "C.6_12.4.3",
          text: "Explain how citizens’ personal and civic responsibilities are important to the preservation and improvement of United States constitutional republic.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
            "civics.nd-no-registration",
            "civics.nd-get-involved",
          ],
          coverage: "full",
          note: "The responsibilities the standard enumerates are taught as practices: voting (North Dakota edition — no registration, just acceptable ID), serving as a juror, staying informed and attentive to public issues, registering (elsewhere) and voting knowledgeably, and civic participation.",
        },
        {
          code: "C.6_12.4.4",
          text: "Identify bias and evaluate its role in media sources.",
          claimIds: [
            "bvc.media-fallacies-recurring",
            "bvc.reading-ads-for-omission",
            "bvc.source-evaluation-modelled",
            "bvc.reefer-madness-language-of-fear",
          ],
          coverage: "full",
          note: "Identifying bias across media sources is a spine of the catalog's media-literacy strand — reading advertising for what it omits, the recurring media fallacies, the language of fear in Reefer Madness, and source evaluation modelled step by step, covering the standard's broadcast, print, and social-media sources.",
        },
        {
          code: "C.6_12.4.5",
          text: "Demonstrate active participation in civic life.",
          claimIds: [
            "civics.show-up-every-level",
            "civics.campaign-help",
            "civics.nd-get-involved",
            "civics.ballot-measures-local-causes",
          ],
          coverage: "partial",
          note: "Partial: participation is taught as concrete practice — how to show up at every level, help a campaign lawfully, contact officials, and use North Dakota's initiative and referendum — but the standard asks the student to DEMONSTRATE participation, and the civic act itself is the learner's to perform beyond this online course.",
        },
      ],
    },

    // ── Social Studies — 6-12 Economics (E.6_12) ───────────────────────────
    {
      id: "nd-econ",
      subject: "Social Studies",
      name: "North Dakota Social Studies Content Standards — 6-12 Economics (E.6_12)",
      publisher: ND_SS_PUBLISHER,
      version: `${ND_SS_VERSION} · 6-12 Economics (E.6_12)`,
      fetchedOn: "2026-07-19",
      sourceUrl: ND_SS_SOURCE,
      adoption:
        "North Dakota's Economics standards (adopted August 2019) are its own. The commodity curriculum reaches the trade, price, government-role, and economic-systems benchmarks below; North Dakota's own state-owned bank and mill give the 'role of government in a market economy' benchmark a distinctive local case. The remaining Economics benchmarks (scarcity and factors of production, market institutions, macroeconomic measures, and four of the five Personal Finance benchmarks under E.6_12.7) are rejected in notClaimed; E.6_12.7.4 is claimed as a partial in its own framework below, which carries its own fetch date. Transcribed verbatim from the NDDPI Social Studies Content Standards.",
      standards: [
        {
          code: "E.6_12.6.1",
          text: "Describe how trade generates economic development and interdependence.",
          claimIds: [
            "bvc.value-chain-earnings",
            "bvc.growing-belts-resource-maps",
            "bvc.commodity-trap",
          ],
          coverage: "full",
          note: "How trade generates development and interdependence is the series' spine — real commodity value chains show who develops and who stays dependent, and the growing belts explain why trade follows climate and soil.",
        },
        {
          code: "E.6_12.6.2",
          text: "Analyze the benefits and costs for individuals, producers, and governments in international trade.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap", "bvc.sugar-program-trade-barriers"],
          coverage: "full",
          note: "The benefits and costs of international trade for producers and governments are worked through real chains — who captures value and who is caught in the commodity trap — and through the U.S. sugar program's quotas, tariffs, and price supports.",
        },
        {
          code: "E.6_12.4.2",
          text: "Evaluate the role of government in a market economy.",
          claimIds: [
            "bvc.sugar-program-trade-barriers",
            "civics.nd-bank-mill-npl",
            "bvc.traditional-vs-market-economies",
          ],
          coverage: "partial",
          note: "Partial, and with a North Dakota case: the role of government in a market economy is taught through the U.S. sugar program's quotas, tariffs, and price supports, and — uniquely for North Dakota — its own state-owned Bank of North Dakota and Mill and Elevator as public enterprises inside a market economy, set against the traditional-versus-market contrast. The standard's full fiscal and monetary policy (the Federal Reserve, expansionary/contractionary policy) is not covered.",
        },
        {
          code: "E.6_12.3.3",
          text: "Analyze the impact of the supply and demand on prices.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: the impact of demand on price is taught through a worked commodity case — a frost moving world coffee prices, and why inelastic demand absorbs the spike. The formal supply-and-demand treatment (schedules, curves, equilibrium) is not the method.",
        },
        {
          code: "E.6_12.2",
          text: "Compare and contrast how varying economic systems impact a nation and its citizens.",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial: the catalog contrasts traditional (reciprocity) economies against market economies directly and at length, and how each shapes a people's lives. The command/centrally-planned-versus-market contrast the benchmark's guiding topics center on (communism, socialism, capitalism) is not the comparison taught.",
        },
      ],
    },

    // ── Social Studies — 6-12 Economics, the Personal Finance strand ───────
    //
    // ITS OWN FRAMEWORK, FOR THE SAME REASON AS EVERY OTHER STATE IN THIS PASS: `fetchedOn` is
    // provenance rendered to teachers, this benchmark was read 2026-08-28, and nd-econ above was
    // read 2026-07-19. Folding it in would force a choice between backdating a fetch or restamping
    // entries nobody re-read.
    //
    // THIS SUPERSEDES A REJECTION. nd-econ's own adoption note and this file's notClaimed both said
    // "the full Personal Finance strand E.6_12.7" was not taught. One of its five benchmarks now is,
    // in part. Both are rewritten rather than left to contradict the data.
    //
    // ONE BENCHMARK OF FIVE, AND NOT THE STRAND. E.6_12.7 reads "Evaluate the elements of
    // responsible personal finance", and its five benchmarks are careers, taxes, financial goals,
    // credit and debt, and debt-avoidance strategies. Four of the five are squarely outside this
    // catalog. Claiming the strand statement would promise a teacher the whole of responsible
    // personal finance, which is exactly the widening the standards rule forbids.
    //
    // TWO TRANSCRIPTION NOTES, BOTH THE PUBLISHER'S AND BOTH PRESERVED.
    //   · The ♦ printed on every code in this strand is the document's own marker for content
    //     required by North Dakota Century Code 15.1-21. Following this file's existing convention
    //     (see the header note on C.6_12.1.3), it is described here rather than appended to the
    //     verbatim text, because it is a document annotation and not part of the sentence.
    //   · The strand's guiding-topics column for E.6_12.7.5 reads "FICA score". FICA is the payroll
    //     tax statute; the intended term is almost certainly FICO. That is a typo in North Dakota's
    //     published standard, not in this transcription. It is recorded here rather than quoted,
    //     because guiding topics are explicitly non-required and we claim against benchmark text.
    {
      id: "nd-econ-personal-finance",
      subject: "Social Studies",
      name: "North Dakota Social Studies Content Standards — 6-12 Economics, Personal Finance (E.6_12.7)",
      publisher: ND_SS_PUBLISHER,
      version: `${ND_SS_VERSION} · 6-12 Economics, Personal Finance strand (E.6_12.7)`,
      fetchedOn: "2026-08-29",
      sourceUrl: ND_SS_SOURCE,
      adoption:
        "North Dakota's Economics strand E.6_12.7, \"Evaluate the elements of responsible personal finance\", is required content under North Dakota Century Code 15.1-21 and is marked as such with a ♦ in the published document. Its five benchmarks cover career choices and standard of living, taxes, short- and long-term financial goals, the cost and benefits of credit and debt with the rights and responsibilities of borrowers, and strategies to avoid and manage debt. Two of the five are now claimed, both partially: the borrower-rights half of E.6_12.7.4, from MONEY-01 (`credit-decisions`) and MONEY-04 (`predatory-products`), and the tax half of E.6_12.7.2, added 2026-08-29 with MONEY-05 (`taxes-and-filing`). The other three, career choices, developing financial goals and developing debt strategies, are not taught here and are named on the notClaimed entry. The document's guiding-topics column is explicitly non-required (\"While not required, the writing committee feels that these are essential topics\"), so coverage here is judged against benchmark text alone. Re-read 2026-08-29 from the NDDPI file currently served, Revision 7 of 2023-11-30.",
      standards: [
        // — Added 2026-08-29 with MONEY-05 (`taxes-and-filing`), which is the second of the five
        //   benchmarks this catalog can reach. The strand statement E.6_12.7 itself stays
        //   unclaimed for the reason recorded in notClaimed: "evaluate the elements of responsible
        //   personal finance" promises a teacher the whole subject.
        {
          code: "E.6_12.7.2",
          text: "Evaluate the effect of taxes and other factors on income.",
          claimIds: ["money.payroll-tax-withholding", "money.refundable-credits-and-refund-timing"],
          coverage: "partial",
          note: "Partial, and the partiality is in the words \"other factors\" rather than in the word \"taxes\". THE TAX HALF IS TAUGHT IN DEPTH AND FROM THE STATUTE. On income coming in: federal income tax withholding is a duty 26 U.S.C. 3402(a)(1) places on the employer rather than on the worker, FICA is a separate tax under a separate chapter imposed by 26 U.S.C. 3101, only the first is credited back to the earner at filing under 26 U.S.C. 31(a)(1), and the course works gross pay to net pay by hand on a labelled pay statement so the effect is arithmetic rather than assertion. On income going the other way: 26 U.S.C. 6401(b)(1) deems the excess of a refundable credit over the tax to be an overpayment, which is the mechanism by which the tax system ADDS to a household's income rather than subtracting from it, and the earned income credit is taught as a wage subsidy conditioned on earnings under 26 U.S.C. 32(c)(2)(A). The course also teaches when that money actually arrives, from the 26 U.S.C. 6402(m) hold and the 6402(c) through (f) offsets. NOT COVERED, and named so the gap stays visible: the \"other factors\" clause, which is open-ended and which no course here systematically treats; the guiding-topics column's state and local deductions, since this catalog teaches no state or local tax at all; and the benchmark's verb where it is read as policy evaluation, because MONEY-05 states in three separate lessons that it gives no tax advice and makes no judgement about whether a rule is good. It analyses the effect; it does not recommend a response to it.",
        },
        {
          code: "E.6_12.7.4",
          text: "Analyze the cost and benefits of different types of credit and debt, and the rights and responsibilities of borrowers.",
          claimIds: [
            "money.borrower-rights-dispute",
            "money.adverse-action-notice",
            "money.who-may-read-the-file",
            "money.cost-of-credit-apr",
            "money.high-cost-credit-products",
            "money.cost-of-credit-fee-conversion",
            "money.rent-to-own-total-of-payments",
          ],
          coverage: "partial",
          note: "Partial, and less lopsided than it was before 2026-08-28, when MONEY-04 shipped. The benchmark's second clause, the rights of borrowers, is taught in far more depth than the benchmark asks: permissible purpose under 15 U.S.C. 1681b, the adverse action notice and its specific-principal-reasons requirement under ECOA and Regulation B, the dispute and reinvestigation right under 1681i, furnisher duties under 1681s-2, and the free file disclosure under 1681j. THE SYSTEMATIC SURVEY OF DIFFERENT TYPES OF CREDIT AND DEBT, which this entry previously named as missing, now exists: payday lending, vehicle title lending, rent-to-own, refund advances and overdraft, each read from a governing statute and each converted into one comparable unit by the 15 U.S.C. 1606(a)(2) method, so the cost side of the benchmark is met across products rather than in the abstract. STILL NOT covered: the benefits comparison as the benchmark frames it, compound against simple interest, and borrower RESPONSIBILITIES, which remain much thinner here than borrower rights.",
        },
      ],
    },

    // ── Social Studies — 6-12 Geography (G.6_12) ───────────────────────────
    {
      id: "nd-geo",
      subject: "Social Studies",
      name: "North Dakota Social Studies Content Standards — 6-12 Geography (G.6_12)",
      publisher: ND_SS_PUBLISHER,
      version: `${ND_SS_VERSION} · 6-12 Geography (G.6_12)`,
      fetchedOn: "2026-07-19",
      sourceUrl: ND_SS_SOURCE,
      adoption:
        "North Dakota's Geography standards (adopted August 2019) are built on the Five Themes of Geography. The Commodity Map's growing-belts, resource-map, human-environment, and colonial-cash-crop content reaches the physical-processes, human-environment, cultural-conflict, and migration benchmarks below; the geographic-tools and region/culture benchmarks are left in notClaimed. Transcribed verbatim from the NDDPI Social Studies Content Standards.",
      standards: [
        {
          code: "G.6_12.1.2",
          text: "Explain the factors that cause different types of climates and ecosystems, and their latitudes/locations.",
          claimIds: ["bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "This is the Growing Belts map itself: latitude band, elevation, and climate deciding where each commodity's ecosystem falls and why it can grow only there.",
        },
        {
          code: "G.6_12.1.3",
          text: "Identify how major ecosystems provide raw materials.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.climate-resources-shape-humans"],
          coverage: "full",
          note: "How ecosystems provide raw materials — soil fertility, growing season, and climate deciding which commodities a region can supply — is exactly the resource-map method.",
        },
        {
          code: "G.6_12.5",
          text: "Analyze how human beings are dependent upon, adapt to, and modify their environment to meet their needs.",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "Human-environment interaction is the curriculum's method: volcanic soil and altitude deciding what grows, climate shaping human activity, and people modifying land to produce — the dependence, adaptation, and modification the standard names.",
        },
        {
          code: "G.6_12.3.4",
          text: "Identify factors that contribute to conflict and cooperation between cultural groups from multiple perspectives.",
          claimIds: [
            "bvc.colonialism-persists-today",
            "bvc.imperialism-africa-asia-oceania",
            "bvc.commodity-trap",
          ],
          coverage: "full",
          note: "The standard's own factors — control of resources, imperialism, economic factors, and the distribution of wealth — are the plantation and colonial cash-crop systems the catalog traces across the Caribbean, West Africa, South Asia, and Oceania, and how those patterns persist today.",
        },
        {
          code: "G.6_12.2.3",
          text: "Explain the patterns, causes, and consequences of major human migrations.",
          claimIds: ["history.migration-streams-arrival", "history.migration-primary-sources"],
          coverage: "partial",
          note: "Partial, at case-study depth: the Great Migration is worked in full (the push and pull factors, the migration streams, and the archive that records them), but it is one migration, not a general treatment of world migration.",
        },
        {
          code: "G.6_12.5.2",
          text: "Analyze how human changes to the environment in one region or place can affect another.",
          claimIds: ["bvc.climate-change-forecasts"],
          coverage: "partial",
          note: "Partial: published climate forecasts and their cross-region implications for growers and production regions are analyzed in depth (coffee, cacao, kava, beer). The standard's broader scope (deforestation, carbon emissions, water rights) is touched through that commodity lens rather than worked as its own case.",
        },
      ],
    },

    // ── Social Studies — 6-12 United States History (US.6_12) ──────────────
    {
      id: "nd-us-history",
      subject: "Social Studies",
      name: "North Dakota Social Studies Content Standards — 6-12 United States History (US.6_12)",
      publisher: ND_SS_PUBLISHER,
      version: `${ND_SS_VERSION} · 6-12 United States History (US.6_12)`,
      fetchedOn: "2026-07-19",
      sourceUrl: ND_SS_SOURCE,
      adoption:
        "North Dakota's United States History standards (adopted August 2019) are coded by era: six anchor standards (US.6_12.1-6) are applied to each era through era-specific benchmarks (US.6_12.1-6.E<era>.<n>). We claim the source-analysis anchor and the era benchmarks the wider catalog's labor, migration, and prohibition history genuinely reaches; the remaining eras and benchmarks (the Revolution, Civil War and Reconstruction, the World Wars, the Cold War, and the post-1990 era) are not this catalog's focus and are left in notClaimed. Transcribed verbatim from the NDDPI Social Studies Content Standards.",
      standards: [
        {
          code: "US.6_12.1",
          text: "Analyze primary and secondary sources with attention to reliability, impact, and purpose.",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.source-evaluation-modelled",
            "history.migration-primary-sources",
          ],
          coverage: "full",
          note: "Analyzing sources for reliability, impact, and purpose is the catalog's 'Whose Voice' method and the Great Migration's archive work — a planter's account read against formerly enslaved writers, and every migration claim pointed to its real record.",
        },
        {
          code: "US.6_12.1-6.E3.1",
          text: "Explain the causes and consequences of the Industrial Revolution on American society.",
          claimIds: ["history.gilded-age-labor", "history.triangle-fire-debs"],
          coverage: "partial",
          note: "Partial: the Gilded Age labor movement and the Triangle Shirtwaist fire — the industrial era's consequences for working people that the guiding topics name (labor strikes, the Progressive-Era reforms) — are worked in depth. The Industrial Revolution's broader causes and technologies are not surveyed.",
        },
        {
          code: "US.6_12.1-6.E3.5",
          text: "Explain the political, social, and economic changes of the 1920s.",
          claimIds: ["bvc.prohibition", "history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: two defining 1920s changes are taught — national Prohibition (its politics and its unintended consequences) and the Harlem Renaissance and the Black press. The decade's broader economics and politics (consumer culture, the Red Scare, nativism) are not surveyed.",
        },
        {
          code: "US.6_12.1-6.E4.5",
          text: "Compare and contrast how different groups competed for equality and the effectiveness of various movements.",
          claimIds: ["history.migration-civil-rights-politics", "history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: the Civil Rights movement is taught through the political power the Great Migration built and through the labor-and-civil-rights alliance, but not as a full comparative survey of the equality movements the guiding topics list (the American Indian, Women's Rights, and Chicano movements).",
        },
        {
          code: "US.6_12.1-6.E2.1",
          text: "Analyze the impacts of social, religious, and/or cultural movements.",
          claimIds: ["bvc.plantation-economy-resistance", "bvc.prohibition"],
          coverage: "partial",
          note: "Partial: abolition and the resistance of enslaved people, and the temperance movement that produced Prohibition, are taught. The standard's fuller list (women's suffrage, the Second Great Awakening) is not.",
        },
      ],
    },

    // ── Social Studies — 6-12 World History (WH.6_12) ──────────────────────
    {
      id: "nd-world-history",
      subject: "Social Studies",
      name: "North Dakota Social Studies Content Standards — 6-12 World History (WH.6_12)",
      publisher: ND_SS_PUBLISHER,
      version: `${ND_SS_VERSION} · 6-12 World History (WH.6_12)`,
      fetchedOn: "2026-07-19",
      sourceUrl: ND_SS_SOURCE,
      adoption:
        "North Dakota's World History standards (adopted August 2019) are coded by era: six anchor standards (WH.6_12.1-6) applied through era benchmarks (WH.6_12.1-6.E<era>.<n>). The commodity curriculum's world history — agriculture and the first cities, the Columbian Exchange and imperialism, the Haitian Revolution, globalization, and cross-cultural source analysis — reaches the era benchmarks and skills anchors below. The science/technology and religion/ideology anchors are left in notClaimed. Transcribed verbatim from the NDDPI Social Studies Content Standards.",
      standards: [
        {
          code: "WH.6_12.1-6.E3.2",
          text: "Explain the global connections developed during this era because of exploration.",
          claimIds: [
            "bvc.conquest-columbian-exchange",
            "bvc.mesoamerica-colonization",
            "bvc.plantation-economy-resistance",
            "bvc.imperialism-africa-asia-oceania",
          ],
          coverage: "full",
          note: "The benchmark's own guiding topics — the effects of imperialism, the slave trade, and the Columbian Exchange — are the catalog's spine, traced through the plants those systems governed: conquest and the Columbian Exchange, the colonization of Mesoamerica, the plantation economy and the resistance to it, and imperialism across Africa, Asia, and Oceania.",
        },
        {
          code: "WH.6_12.1-6.E1.3",
          text: "Explain the impact of the development of agriculture on the social, cultural, and economic lives of individuals.",
          claimIds: ["bvc.agricultural-hearths", "bvc.beer-first-cities"],
          coverage: "full",
          note: "The development of agriculture and its social and economic consequences is taught directly — the agricultural hearths and the exchange of crops among regions, and how grain surpluses built the first cities.",
        },
        {
          code: "WH.6_12.1-6.E4.3",
          text: "Explain the social, cultural, or economic changes influenced by globalization.",
          claimIds: [
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
            "bvc.colonialism-persists-today",
            "history.nafta-usmca-labor",
          ],
          coverage: "full",
          note: "Globalization's economic changes are the series' subject — who captures value along global commodity chains, the commodity trap, how colonial patterns persist in present markets, and the NAFTA-to-USMCA cross-border labor order the guiding topics' 'global markets' and 'migration movements' name.",
        },
        {
          code: "WH.6_12.5",
          text: "Analyze causes and effects of global events in the past using primary and/or secondary sources.",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.opium-wars",
            "bvc.source-evaluation-modelled",
          ],
          coverage: "full",
          note: "Global events are analyzed from their sources — the Opium Wars and their long consequences for China, worked through the documentary record using the catalog's 'Whose Voice' source-analysis method.",
        },
        {
          code: "WH.6_12.1-6.E3.3",
          text: "Examine and explain the influence of revolutions on social and political aspects of individuals’ lives.",
          claimIds: ["bvc.haitian-revolution"],
          coverage: "partial",
          note: "Partial: the Haitian Revolution is worked in depth — through the 1825 French indemnity and Haiti's modern poverty — as a revolution that reshaped individuals' lives. The other revolutions the guiding topics list (the English, American, French, and Mexican Revolutions) are named, not each worked.",
        },
        {
          code: "WH.6_12.6",
          text: "Explain how past events connect to the present.",
          claimIds: ["bvc.colonialism-persists-today"],
          coverage: "full",
          note: "Connecting past to present is the catalog's method: how colonialism and imperialism persist and evolve in present-day commodity chains, debt, and trade.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no North Dakota mathematics standard.",
    },
    {
      heading: "English Language Arts — considered, deferred, not claimed this pass.",
      body: "North Dakota adopted its OWN English Language Arts & Literacy standards (2023), with North Dakota's own codes and wording — North Dakota is not mapped through our shared Common Core file. The catalog's media-literacy, rhetoric, and source-evaluation teaching would in principle map to North Dakota's grade-11/12 informational-reading and research standards, but we have not fetched and verified that document this pass. Our rule is fetch-or-don't-cite, so ELA is deferred until the verbatim North Dakota text is in hand.",
    },
    {
      heading: "Science — considered, deferred, not claimed this pass.",
      body: "North Dakota's 2019 science standards are North Dakota's own, derived from the NRC Framework rather than adopted verbatim from NGSS. The catalog's one honest science idea — resource availability and climate shaping human activity — would in principle map to a North Dakota science code, but verbatim-or-nothing means we will not alias the shared NGSS file to a North Dakota code we have not confirmed against North Dakota's own printed wording. Science is deferred until that verbatim text is retrieved.",
    },
    {
      heading: "North Dakota's own state structure is taught more fully than any one benchmark names.",
      body: "North Dakota Civics teaches the Constitution of 1889, the two national 'onlys' (the only state with no voter registration; the only state-owned bank, the Bank of North Dakota, plus a state-owned Mill and Elevator), the farmer-populist Nonpartisan League, the strong initiative/referendum/recall, the large plural executive, the part-time biennial 94-Representative/47-Senator Legislative Assembly capped at 80 days per biennium, the elected nonpartisan Supreme Court, and the 53 counties — all from North Dakota's own sources. The Civics & Government benchmarks that name state and local government (C.6_12.2.4, C.6_12.2.5) and citizen influence (C.6_12.4.1, C.6_12.4.3) host most of it, but North Dakota's standards are broad U.S.-system anchors, not a North-Dakota-government checklist, so its no-registration voting, its state bank, and its biennial Legislature have no benchmark of their own.",
    },
    {
      heading: "Civics benchmarks on political philosophy, forms of government, and British-colonial roots.",
      body: "Benchmarks the catalog's civics does not genuinely teach are not claimed: C.6_12.1.1 (evaluate the thoughts of major political philosophers — Locke, Hobbes, Montesquieu, Marx), C.6_12.1.2 (the influence of British and colonial history — Magna Carta, the English Bill of Rights, the Mayflower Compact), and C.6_12.2.1 (differentiate and compare forms and origins of governments — monarchy, oligarchy, fascism, theocracy). These are named in the constitution course as background, not worked as their own content.",
    },
    {
      heading: "Economics — the scarcity, institutions, macroeconomics, and Personal Finance strands.",
      body: "Beyond the trade, price, government-role, and economic-systems benchmarks claimed above, the Economics strand's other standards are not the substance of this catalog's commodity history and are left unclaimed: C-adjacent E.6_12.1 (scarcity, opportunity cost, and the factors of production), E.6_12.3.1/E.6_12.3.2 (the formal law of supply and demand, and perfect versus imperfect competition), E.6_12.4.1/E.6_12.4.3 (the stock market and financial institutions; the functions of money), and E.6_12.5 (macroeconomic measurements — GDP, inflation, unemployment). The Personal Finance strand used to be rejected here in full; see the entry below.",
    },
    {
      heading: "Personal Finance (E.6_12.7) — this rejection has been superseded, for one benchmark.",
      body: "Until 2026-08-28 this list rejected the entire ♦ NDCC 15.1-21 Personal Finance strand with the reason that the catalog does not teach it, and that was accurate. MONEY-01 now teaches how a consumer credit decision is made, and E.6_12.7.4 is claimed above as a partial, with the borrower-rights half taught in more depth than the benchmark asks and the cost side taught through the annual percentage rate. Its uncovered parts are named on the entry: the benefits comparison, the survey of types of credit and debt, compound against simple interest, and borrower responsibilities. SUPERSEDED AGAIN ON 2026-08-29, when MONEY-05 (`taxes-and-filing`) shipped: E.6_12.7.2, \"Evaluate the effect of taxes and other factors on income\", which this entry previously said was not in the catalog, is now claimed above as a partial. The tax half is taught from the Code, on both directions of the effect: what chapter 24 and chapter 21 take out of a paycheck and which of the two is credited back at filing, and how 26 U.S.C. 6401(b)(1) lets a refundable credit add to a household's income rather than only reduce its tax. What stays uncovered on that benchmark is named on its own entry: the open-ended \"other factors\" clause, state and local deductions, and the benchmark's verb where it is read as policy evaluation, which the course refuses because it gives no tax advice. The other three benchmarks are still not claimed and the reasons are specific rather than general. E.6_12.7.1 is career choices and standard of living, which is not in this catalog. E.6_12.7.3 asks students to develop short- and long-term financial goals, and E.6_12.7.5 asks them to develop strategies to avoid and manage debt; both are planning and behaviour, and MONEY-01 states in three separate lessons that it gives no financial advice, so claiming either would misdescribe what a teacher receives. E.6_12.7.5's guiding topics do name credit scores, which the course teaches at length, but guiding topics are the document's own explicitly non-required column and the benchmark's verb is not taught, so it is left unclaimed rather than stretched. The strand statement E.6_12.7 itself is deliberately not claimed, because \"evaluate the elements of responsible personal finance\" promises a teacher the whole subject.",
    },
    {
      heading: "Geography — the geographic-tools and region/culture benchmarks.",
      body: "The Geography strand's tool-and-inquiry benchmarks (G.6_12.4 — maps, globes, GIS/GPS, and the skills of geographic inquiry) and its region/culture benchmarks (G.6_12.3.1-3 — comparing cultures, analyzing regions, and how perception shapes places) are not the catalog's focus; where its content maps squarely — climate and resources deciding where commodities grow, and resource-driven conflict — it is claimed under the physical-processes, human-environment, and cultural-conflict benchmarks above rather than padded into these.",
    },
    {
      heading: "United States and World History — the eras and skills anchors not claimed above.",
      body: "North Dakota's history strands apply six skills anchors across five U.S. eras and four world eras. We claim only the source-analysis anchors and the specific era benchmarks the wider catalog genuinely reaches (labor and the Gilded Age, the Great Migration and Civil Rights, Prohibition, agriculture and the first cities, the Columbian Exchange and imperialism, the Haitian Revolution, and globalization). The Revolution and founding, the Civil War and Reconstruction, the World Wars and the Cold War, the post-1990 era, and the science/technology and religion/ideology anchors are not this catalog's focus and are left unclaimed rather than stretched.",
    },
    {
      heading: "North Dakota Studies, Sociology, and Psychology — nothing.",
      body: "North Dakota's Social Studies standards include a distinctive North Dakota Studies strand (state and tribal history — including the required 'North Dakota Tribal Government' study) and 6-12 Sociology and Psychology strands. This catalog teaches North Dakota's state government (the civics flagship) but not North Dakota's own history at these standards' depth, and it teaches no sociology or psychology, so these strands are not claimed.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "North Dakota's closest frameworks for these (its Computer Science and Cybersecurity standards and its world-languages standards) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no North Dakota claims this pass.",
    },
  ],
};
