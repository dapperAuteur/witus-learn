// ─────────────────────────────────────────────────────────────────────────────
// NEVADA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-nv` was written FROM Nevada's own official sources (leg.state.nv.us, nvsos.gov,
// nvcourts.gov, and the 1864 Constitution), so Nevada's civics flagship gets a genuine home:
// Nevada's 2018 Social Studies Standards carry a standard specifically comparing the U.S. and
// Nevada constitutions (SS.9-12.CE.19) and one on Nevada politics (SS.9-12.CE.18).
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from the Nevada Department of Education's own
// record (Nevada is INHERIT-heavy — the bespoke work is the single Civics & Economics course):
//   · ELA — INHERITED (verbatim, no aliases). The Nevada State Board of Education adopted the
//     Common Core State Standards in October 2010 as the Nevada Academic Content Standards (NVACS).
//     Nevada adopted the CCSS as published, so ../shared/common-core-ela is adopted verbatim,
//     keeping the canonical CCSS codes. We claim no mathematics standards.
//   · Science — INHERITED (verbatim). Nevada adopted the NGSS in February 2014 as the Nevada
//     Academic Content Standards for Science (NVACSS). HS-ESS3-1, the one performance expectation
//     we cite, is a standard NGSS PE, so ../shared/ngss is adopted verbatim. This is not a science
//     course; see the note on the entry itself.
//   · Social studies — BESPOKE. Nevada's Academic Content Standards for Social Studies (Revised
//     September 2018) are Nevada's own. The Grade 9-12 band has three courses — World History &
//     Geography (1300-Present), U.S. History (1877-Present), and Civics & Economics — each coded
//     SS.9-12.<strand>.<n> (WH / US / CE). We map all three; each is its own framework here (the
//     courses use distinct code prefixes, so codes stay unique within a framework). Nevada's
//     Civics & Economics course folds civics and economics into one; its NV-specific standards
//     (CE.18, CE.19, CE.51) host the flagship's own-state structure.
//
// PROVENANCE (social studies): the NVACS for Social Studies PDF at doe.nv.gov now resolves to a
// Next.js single-page-app shell (the department's site was rebuilt), so the document could not be
// fetched from that path. We transcribed VERBATIM from a byte-faithful Nevada state-government
// mirror of the SAME document — it was submitted as Exhibit EE to the 81st (2021) Nevada Assembly
// Committee on Education and archived at
// https://archive.leg.state.nv.us/Session/81st2021/Exhibits/Assembly/ED/AED692EE.pdf (48 pages,
// "Nevada Academic Content Standards for Social Studies, Revised September 2018"), fetched
// 2026-07-19. The sourceUrl below is the canonical DOE link. Nevada codes its standards
// SS.9-12.<strand>.<n>; we cite them exactly so. Nevada's document uses a curly apostrophe (’) in
// "Nevada’s"; transcribed verbatim.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const NV_SS =
  "https://doe.nv.gov/uploadedFiles/nde.doe.nv.gov/content/Standards_Instructional_Support/Nevada_Academic_Standards/Social_Studies/NVACSforSocialStudies.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "NV",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "The Nevada State Board of Education adopted the Common Core State Standards in October 2010 as the Nevada Academic Content Standards (NVACS). Nevada adopted the CCSS as published, so the shared Common Core ELA file is adopted verbatim, keeping the canonical CCSS codes; the text here is the CCSS publisher's verbatim wording (thecorestandards.org). We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "Nevada adopted the Next Generation Science Standards in February 2014 as the Nevada Academic Content Standards for Science (NVACSS), adopted by the Nevada State Board of Education. HS-ESS3-1, the one performance expectation we cite, is a standard NGSS PE, so the shared NGSS file is adopted verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── NVACS for Social Studies — Grade 9-12 Civics & Economics (2018) ────
    {
      id: "nv-civics-economics",
      subject: "Social Studies",
      name: "Nevada Academic Content Standards for Social Studies — Grade 9-12 Civics & Economics",
      publisher: "Nevada Department of Education (NDE) / Nevada State Board of Education",
      version: "Nevada Academic Content Standards for Social Studies, Revised September 2018 · Grade 9-12 Civics & Economics",
      fetchedOn: "2026-07-19",
      sourceUrl: NV_SS,
      adoption:
        "Nevada's Grade 9-12 Civics & Economics course is the anchor for the Nevada Civics flagship, folding civics and economics into one course (codes SS.9-12.CE.<n>). Two standards are specifically about Nevada — SS.9-12.CE.19 (compare the U.S. and Nevada constitutions) and SS.9-12.CE.18 (Nevada politics) — with SS.9-12.CE.51 on Nevada's economy; these host the flagship's own-state structure. The federal C-ladder (CE.27, .28, .29, .32, .33, .36) carries the general civics ladder, the Exchange/Markets and Global Economy standards (CE.43, .44, .52, .53) carry the commodity economics, and two inquiry standards (CE.3, .5) host the source-evaluation method. Transcribed verbatim from the NDE 2018 Social Studies Standards (see the file header for the mirror/provenance note).",
      standards: [
        // — Nevada-specific standards (the flagship's home) —
        {
          code: "SS.9-12.CE.19",
          text: "Compare and contrast the U.S. and Nevada constitutions.",
          claimIds: ["civics.nv-none-of-these-candidates", "civics.nv-direct-democracy"],
          coverage: "partial",
          note: "Partial: the flagship teaches Nevada's Constitution of 1864 and its distinctive features — the “None of These Candidates” statewide ballot option and the two-election rule for citizen constitutional amendments — set against the U.S. Constitution the general civics courses teach. A clause-by-clause compare-and-contrast of the two documents is not the course's method.",
        },
        {
          code: "SS.9-12.CE.18",
          text: "Analyze and evaluate current issues, major legislation, and policies in Nevada politics.",
          claimIds: ["civics.nv-gaming-taxes", "civics.nv-direct-democracy", "civics.nv-executive-legislature"],
          coverage: "partial",
          note: "Partial: Nevada's own politics are taught — gaming regulation and the no-income-tax structure, the two-election amendment rule, and the biennial 120-day citizen Legislature. The standard's “analyze and evaluate current issues” performance on live legislation is set up rather than assessed.",
        },
        {
          code: "SS.9-12.CE.51",
          text: "Analyze how national and global economic issues and systems impact Nevada’s economy.",
          claimIds: ["civics.nv-gaming-taxes"],
          coverage: "partial",
          note: "Partial: the flagship teaches how one industry — gaming and tourism — shapes Nevada's tax structure, budget, and institutions, and how the state's fortunes rise and fall with tourism. A general analysis of national and global economic systems' impact on Nevada is not.",
        },
        // — Federal C-ladder + citizenship (the general civics claims) —
        {
          code: "SS.9-12.CE.27",
          text: "Examine the roles and responsibilities of the three branches of government.",
          claimIds: ["civics.three-branches-federal", "civics.federal-articles-i-iii", "civics.nv-executive-legislature"],
          coverage: "full",
          note: "The purpose and structure of the three federal branches (Articles I-III) are taught directly, and the flagship adds Nevada's own branches — the plural executive, the biennial Legislature, and the elected judiciary.",
        },
        {
          code: "SS.9-12.CE.28",
          text: "Analyze the system of checks and balances and separation of powers historically and in current events.",
          claimIds: ["civics.separation-checks-balances"],
          coverage: "full",
          note: "Separation of powers and checks and balances are taught head-on as the design of the U.S. Constitution; the standard's application to specific current events is student work built on that content.",
        },
        {
          code: "SS.9-12.CE.29",
          text: "Analyze the legislative processes involved in the creation of laws and regulations at the local, state, and national levels.",
          claimIds: ["civics.federal-bill-process", "civics.nv-lawmaking", "civics.local-government-layers"],
          coverage: "partial",
          note: "Partial: the federal lawmaking process is taught end to end (committees through veto override) and Nevada's own biennial process is taught in the flagship; local lawmaking is introduced through what local government handles but not as a step-by-step process.",
        },
        {
          code: "SS.9-12.CE.32",
          text: "Evaluate how the U.S. Constitution establishes the powers and responsibilities of local, state, and tribal governments.",
          claimIds: ["civics.federalism-why-split-power", "civics.local-government-layers", "civics.nv-local-government"],
          coverage: "partial",
          note: "Partial: federalism — how the Constitution divides power between the national and state governments — and what state and local governments do (including Nevada's 16 counties plus Carson City) are taught. Tribal governments are not covered by these courses.",
        },
        {
          code: "SS.9-12.CE.33",
          text: "Analyze the collection and purpose of local, state, and federal taxes.",
          claimIds: ["civics.nv-gaming-taxes"],
          coverage: "partial",
          note: "Partial: the flagship teaches Nevada's distinctive tax structure — gaming taxes and fees plus tourism-related and sales taxes in place of a state personal income tax. A general treatment of the collection and purpose of local, state, and federal taxes is not.",
        },
        {
          code: "SS.9-12.CE.36",
          text: "Examine the structure of the U.S. justice system with special attention to due process protections, legal rights, and the judicial process in criminal and civil cases.",
          claimIds: ["civics.federal-judiciary-structure", "civics.jury-service", "rights.landmark-cases", "civics.nv-courts"],
          coverage: "partial",
          note: "Partial: the structure of the federal judiciary, the judicial process from the citizen's side (jury service in criminal and civil cases), the landmark rights cases, and Nevada's own elected courts are taught. The due process clause doctrine specifically is not taught in depth.",
        },
        {
          code: "SS.9-12.CE.24",
          text: "Analyze ways in which individuals can participate in the process of creating positive changes for their communities by taking informed civic action.",
          claimIds: [
            "civics.show-up-every-level",
            "civics.run-for-office",
            "civics.campaign-help",
            "civics.track-a-bill",
            "civics.nv-get-involved",
          ],
          coverage: "full",
          note: "Multiple concrete pathways for civic action are taught as practice: showing up at every level of government, running for office, helping a campaign lawfully, tracking a live bill, and Nevada's own on-ramps (same-day and automatic registration, mailed ballots, the initiative and referendum).",
        },
        {
          code: "SS.9-12.CE.23",
          text: "Evaluate the ways in which citizens or associations have used the Constitution to influence or take action to fight for civil liberties and social justice.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent"],
          coverage: "partial",
          note: "Partial: the landmark rights cases — citizens using the Constitution and the courts to expand civil liberties, and how precedent works — are taught as usable rules. A broader survey of associations' civil-rights and social-justice action is not.",
        },
        {
          code: "SS.9-12.CE.35",
          text: "Critique the historical debate surrounding majority rule vs. minority rights within the U.S.",
          claimIds: ["rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial: the substance of the majority-rule-versus-minority-rights tension — when government may constitutionally limit rights, and why — is taught through the rights curriculum. The historical debate itself, traced over time, is not.",
        },
        // — Exchange, markets, and the global economy (commodity economics) —
        {
          code: "SS.9-12.CE.43",
          text: "Analyze the determining factors that influence production and distribution in a market system.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: production and distribution are analyzed through real commodity value chains — where commodities grow and why, and who is paid what along the chain (the smile curve). A general market-system unit is not.",
        },
        {
          code: "SS.9-12.CE.44",
          text: "Explain how changes in supply and demand cause changes of goods, services, labor, credit, price, and foreign currencies.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: the supply-and-demand effect on price is taught through a worked commodity case — a Brazilian frost moving world coffee prices, and why inelastic demand absorbs the spike. The standard's fuller list (labor, credit, foreign currencies) is not worked.",
        },
        {
          code: "SS.9-12.CE.52",
          text: "Analyze how governments throughout the world influence international trade of goods and services.",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: government influence on trade is taught through worked cases — the U.S. sugar program's import quotas, price supports, and tariffs, and the NAFTA→USMCA trade agreement from the labor side. A general treatment of world trade policy is not.",
        },
        {
          code: "SS.9-12.CE.53",
          text: "Explain how globalization has impacted various aspects of economic growth, labor markets, rights of citizens, the environment, resources, and income distribution in different nations.",
          claimIds: ["history.nafta-usmca-labor", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: globalization's impact on labor markets and income distribution is taught through NAFTA→USMCA (the Rapid Response Mechanism and its limits) and the commodity trap's downstream value capture. The environmental and citizen-rights clauses are not worked.",
        },
        // — Inquiry standards: the source-evaluation method —
        {
          code: "SS.9-12.CE.3",
          text: "Gather relevant information from multiple sources representing a wide range of views while using the origin, authority, structure, context, and corroborative value of the sources to guide the selection.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Partial: multi-source evaluation using origin, authority, and corroborative value — differing accounts of the same event set side by side, with a checkable bibliography — is modeled throughout the BVC curriculum. The standard's full inquiry-selection process for a student's own research question is exercised only where a graded project runs.",
        },
        {
          code: "SS.9-12.CE.5",
          text: "Seek multiple media sources when investigating current issues and evaluate the credibility and reliability of each.",
          claimIds: ["bvc.source-evaluation-modelled", "media.misleading-statistics"],
          coverage: "partial",
          note: "Partial: evaluating the credibility and reliability of sources — reading messages for omission, fallacy, and misleading statistics, and checking claims against a bibliography — is the media-literacy method. Investigating a live current issue across multiple media sources is set up rather than assessed.",
        },
      ],
    },

    // ── NVACS for Social Studies — Grade 9-12 U.S. History (1877-Present) ──
    {
      id: "nv-us-history",
      subject: "Social Studies",
      name: "Nevada Academic Content Standards for Social Studies — Grade 9-12 U.S. History (1877-Present)",
      publisher: "Nevada Department of Education (NDE) / Nevada State Board of Education",
      version: "Nevada Academic Content Standards for Social Studies, Revised September 2018 · Grade 9-12 U.S. History (1877-Present)",
      fetchedOn: "2026-07-19",
      sourceUrl: NV_SS,
      adoption:
        "Nevada's Grade 9-12 U.S. History course (1877-Present), coded SS.9-12.US.<n>, spans the Gilded Age through the present. The BVC labor, migration, civil-rights, and trade history maps to its reform-movement, resistance, migration, and economic-policy standards. Nevada's own Nevada-history standards (SS.9-12.US.20-22), the war/diplomacy standards, and the identity/contributions standards are not claimed (see notClaimed). Transcribed verbatim from the NDE 2018 Social Studies Standards.",
      standards: [
        {
          code: "SS.9-12.US.14",
          text: "Evaluate the impact of individuals and reform movements on the struggle for greater civil rights and liberties.",
          claimIds: ["history.labor-civil-rights", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: the labor movement's reformers and the labor-to-civil-rights line — A. Philip Randolph, the Brotherhood of Sleeping Car Porters, and the March on Washington — are taught in depth. The full sweep of civil-rights reform movements is not.",
        },
        {
          code: "SS.9-12.US.16",
          text: "Interpret events from a variety of historical and cultural perspectives, including but not limited to: suffragettes, civil rights activists, nationalists, progressives, political activists, immigrant groups.",
          claimIds: ["bvc.whose-voice-differing-accounts", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial: events are interpreted from multiple perspectives through the “Whose Voice” method and the Great Migration's civil-rights politics. The standard's specific list of actors (suffragettes, progressives) is not each covered.",
        },
        {
          code: "SS.9-12.US.26",
          text: "Examine how and why diverse groups have been denied equality and opportunity, both institutionally and informally.",
          claimIds: ["history.jim-crow-and-long-shadow", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial: institutional denial of equality is taught through Jim Crow and its long shadow and the push factors of the Great Migration. A comprehensive survey across all diverse groups is not.",
        },
        {
          code: "SS.9-12.US.27",
          text: "Analyze how resistance movements organized and responded to oppression and infringement of civil liberties, and evaluate the impact of the responses.",
          claimIds: ["history.gilded-age-labor", "history.triangle-fire-debs", "history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: how resistance movements organized is taught in depth for the labor movement — the Knights, the AFL, Haymarket, Homestead, Pullman, the Triangle fire and Debs — and the labor-to-civil-rights line. Other resistance movements are not the worked cases.",
        },
        {
          code: "SS.9-12.US.41",
          text: "Analyze how diffusion of ideas, technologies, and cultural practices have influenced migration and immigration patterns and the distribution of human population.",
          claimIds: ["history.migration-streams-arrival", "history.migration-primary-sources", "history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: internal migration and population redistribution are taught in depth through the Great Migration — its streams and arrival, its primary sources, and the Harlem Renaissance it made possible. International immigration patterns are not the focus.",
        },
        {
          code: "SS.9-12.US.43",
          text: "Examine the effect of individuals, communities, businesses, and government on the economic policies and decisions of the U.S. over time.",
          claimIds: ["history.wagner-act", "history.taft-hartley-patco", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: government and organized labor's effect on economic policy is taught in depth — the Wagner Act, Taft-Hartley, and PATCO — as the advances and retreats of U.S. labor law. A general treatment of U.S. economic policy is not.",
        },
        {
          code: "SS.9-12.US.44",
          text: "Evaluate multiple factors that impact the U.S. economy over time, including but not limited to: trade, resources, labor, and monetary system.",
          claimIds: ["history.nafta-usmca-labor", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: two of the standard's named factors are taught in depth — trade (NAFTA→USMCA) and labor (the union movement's arc). Resources and the monetary system are not worked.",
        },
        {
          code: "SS.9-12.US.45",
          text: "Evaluate the U.S. role and response to globalization and the impact on the U.S. economy - including trade policy, embargoes, exchange rates, and trade agreements.",
          claimIds: ["history.nafta-usmca-labor", "bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Partial: trade agreements (NAFTA→USMCA) and trade policy (the U.S. sugar program's quotas and tariffs) are taught as worked cases. Embargoes and exchange rates are not.",
        },
      ],
    },

    // ── NVACS for Social Studies — Grade 9-12 World History & Geography ────
    {
      id: "nv-world-history",
      subject: "Social Studies",
      name: "Nevada Academic Content Standards for Social Studies — Grade 9-12 World History & Geography (1300-Present)",
      publisher: "Nevada Department of Education (NDE) / Nevada State Board of Education",
      version: "Nevada Academic Content Standards for Social Studies, Revised September 2018 · Grade 9-12 World History & Geography (1300-Present)",
      fetchedOn: "2026-07-19",
      sourceUrl: NV_SS,
      adoption:
        "Nevada's Grade 9-12 World History & Geography course (1300-Present), coded SS.9-12.WH.<n>. Its standards are framed as historical-thinking and thematic skills; the BVC commodity, colonial, labor, and Cold-War history exercises several of them on specific cases. Nevada's regime-change, war, religion, and identity standards are not claimed (see notClaimed). Transcribed verbatim from the NDE 2018 Social Studies Standards.",
      standards: [
        {
          code: "SS.9-12.WH.17",
          text: "Interpret historical events from a variety of historical and cultural perspectives, including but not limited to: capitalists vs. laborers, imperialists vs. indigenous groups, positions of power, class, race, ethnicity, and gender.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.imperialism-africa-asia-oceania", "bvc.plantation-economy-resistance"],
          coverage: "full",
          note: "Two of the standard's named framings are the curriculum's core method: imperialists versus indigenous groups (European imperialism seen from the perspective of the colonized) and capitalists versus laborers (the plantation economy and the labor movement), taught through the “Whose Voice” side-by-side reading of differing accounts.",
        },
        {
          code: "SS.9-12.WH.26",
          text: "Explore the positive and negative consequences of cultural interaction and diffusion.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.agricultural-hearths", "bvc.tea-trade-networks"],
          coverage: "partial",
          note: "Partial: cultural interaction and diffusion are taught through the Columbian Exchange (crops and diseases across the Atlantic, with its consequences for native populations), agricultural hearths and crop exchange, and commodity trade networks (the Tea Horse Road, the Maritime Silk Road). The standard's full breadth is not.",
        },
        {
          code: "SS.9-12.WH.31",
          text: "Examine various systems, laws, and policies of governance across world history, including but not limited to: feudalism, mercantilism, absolutism, fascism, communism, and constitutional democracy.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization", "bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial: two of the standard's named systems are taught in depth — communism and the transition to constitutional democracy, through Poland from Solidarność to the 1989 negotiated exit — and mercantilism appears through the colonial commodity systems. Feudalism, absolutism, and fascism are not taught.",
        },
        {
          code: "SS.9-12.WH.37",
          text: "Compare different economic and labor systems within and across societies.",
          claimIds: ["bvc.traditional-vs-market-economies", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: traditional (reciprocity) and market economies are contrasted directly and at length, and the labor system is taught through the union movement. A full comparison across the world's economic and labor systems is not.",
        },
        {
          code: "SS.9-12.WH.38",
          text: "Examine the ways in which trade, commerce, and industrialization impact individuals, groups, and nations.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: the impact of trade and commerce is taught through commodity value chains — where goods grow, how that distribution drives trade, who earns from it, and the commodity trap that keeps producers poor. Industrialization's broader impact is not the focus.",
        },
      ],
    },
    // ── NVACS for Social Studies — Grades 9-12 Financial Literacy (2018) ──────
    //
    // THIS FRAMEWORK SUPERSEDES A REJECTION. Until MONEY-01 (`credit-decisions`) shipped, this
    // file's notClaimed entry read "all of SS.9-12.FL" among the standards "not genuinely taught".
    // That was true and is no longer. The rejection is rewritten below rather than deleted, per the
    // house pattern, so a teacher can see that a gap was closed rather than quietly edited away.
    //
    // ONLY THREE OF THIRTEEN ARE CLAIMED, and only one at full coverage. Nevada's FL strand runs
    // FL.1 to FL.13 and covers taxes, savings planning, identity theft, investing, insurance,
    // careers, and Nevada-specific postsecondary financing programmes, none of which this catalog
    // teaches. FL.6 is the exception and it is an unusually exact fit: it names the credit report,
    // its use by lenders, employers and insurers (which is permissible purpose), and the borrower's
    // access and rights, which is the course's entire spine.
    //
    // TRANSCRIPTION NOTE, PRESERVED DELIBERATELY. Nevada's published document prints FL.7's code as
    // "SS.912.FL.7", without the hyphen every other code in the strand carries. That is a typo in
    // the state's own document. We do not claim FL.7, so the malformed code does not appear below;
    // it is recorded here so a later editor who finds it in the PDF knows it was seen and is not a
    // transcription error of ours. Nevada also prints a spaced hyphen, not a dash, in FL.4, FL.5
    // and FL.9 ("a personal financial plan - including a savings plan"); transcribed as printed.
    {
      id: "nv-financial-literacy",
      subject: "Social Studies",
      name: "Nevada Academic Content Standards for Social Studies — Grades 9-12 Financial Literacy",
      publisher: "Nevada Department of Education (NDE) / Nevada State Board of Education",
      version: "Nevada Academic Content Standards for Social Studies, Revised September 2018 · Grades 9-12 Financial Literacy",
      fetchedOn: "2026-08-28",
      sourceUrl: NV_SS,
      adoption:
        "Nevada files financial literacy inside social studies as its own Grades 9-12 strand, coded SS.9-12.FL.<n>, with content themes running from financial decision-making through savings and spending, credit and debt, insurance and investing, and college and career preparedness. MONEY-01 (`credit-decisions`) teaches the credit-and-debt theme's reporting half and nothing else in the strand, so exactly one standard is claimed in full and two in part. Transcribed verbatim 2026-08-28 from the NDE Social Studies standards PDF currently linked from the department's social studies page; the department's site has been rebuilt since the 2026-07-19 pass and the older upload path no longer serves the file.",
      standards: [
        {
          code: "SS.9-12.FL.6",
          text: "Explain the purpose of a credit report, how that report is used by lenders, employers and insurers, and the borrower's access, rights, and responsibilities related to a credit report.",
          claimIds: [
            "money.consumer-report-contents",
            "money.who-may-read-the-file",
            "money.borrower-rights-dispute",
            "money.adverse-action-notice",
          ],
          coverage: "full",
          note: "Full, and clause for clause. Purpose and contents of a consumer report come from the FCRA's own definition and its reporting-period limits at 15 U.S.C. 1681c(a); use by lenders, employers and insurers is exactly the permissible-purpose list at 1681b(a), which names those three separately; access is the free annual file disclosure at 1681j; and rights are the dispute and reinvestigation duty at 1681i, the furnisher duties at 1681s-2, and the adverse action notice under ECOA and Regulation B.",
        },
        {
          code: "SS.9-12.FL.3",
          text: "Locate and evaluate financial information from various sources.",
          claimIds: ["money.borrower-rights-dispute", "money.credit-score-as-model"],
          coverage: "partial",
          note: "Partial. The course teaches locating and evaluating ONE class of financial information thoroughly: obtaining your own consumer file through the statutory free disclosure, reading what the score disclosure must contain, and checking every claim about those rights against the statute rather than against a summary. It does not reach other source types — investment, insurance, or deposit-account disclosures — so the standard's word \"various\" is only partly met.",
        },
        {
          code: "SS.9-12.FL.5",
          text: "Analyze the costs and benefits of different types of credit and debt - including how to avoid and resolve debt problems.",
          claimIds: [
            "money.cost-of-credit-apr",
            "money.credit-access-constraint",
            "money.high-cost-credit-products",
            "money.cost-of-credit-fee-conversion",
            "money.rent-to-own-total-of-payments",
          ],
          coverage: "partial",
          note: "Partial, and fuller since 2026-08-28 when MONEY-04 shipped. The cost side is taught precisely, as the annual percentage rate that TILA requires so two offers can be ranked, with the statutory computation worked; the benefit side is MONEY-01's opening premise, the timing gap that credit closes. THE SURVEY OF DIFFERENT TYPES OF CREDIT AND DEBT, which this entry previously named as not covered, now exists: payday lending, vehicle title lending, rent-to-own, refund advances and overdraft, each priced from a governing statute and each expressed in the same unit so a learner can rank them. Still NOT covered: how to avoid and resolve debt problems, which is behavioural debt management the courses deliberately do not teach, and which MONEY-03 will carry.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Nevada Academic Content Standard for mathematics.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Nevada adopted the NGSS in February 2014 as the Nevada Academic Content Standards for Science, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Nevada's own Nevada-history and civics detail that no single code captures.",
      body: "The Civics & Economics and U.S. History courses each carry Nevada-history standards (SS.9-12.CE.18/19, SS.9-12.US.20-22). CE.18 and CE.19 host the flagship as partial, but the Nevada Civics course teaches more of Nevada's own structure than any one code captures — the “None of These Candidates” ballot option, the biennial 120-day Legislature, the two-election amendment rule, the Gaming Control Board and Gaming Commission, the no-income-tax structure, and Carson City's consolidated city-county status. US.20-22 (Nevada's history and the evolution of Nevada's economy from 1877) are Nevada-specific history the catalog does not teach.",
    },
    {
      heading: "The political-media standards.",
      body: "SS.9-12.CE.30 and SS.9-12.CE.31 (the roles of U.S. media in shaping policy and political discourse, and the role of special-interest groups, lobbyists, and PACs), and SS.9-12.US.34 (the effects of media in shaping public perception and policies), are political-media and interest-group analysis. Our media-literacy course is consumer protection — reading ads and claims for omission and fallacy — not political-media analysis, so we do not claim these; the source-evaluation skill they share is claimed instead under the inquiry standards SS.9-12.CE.3 and SS.9-12.CE.5.",
    },
    {
      heading: "The disciplinary-skill and civic-disposition standards we checked and rejected.",
      body: "The disciplinary-skill standards that ask students to construct compelling/supporting questions, construct and present their own arguments, participate in rigorous academic discussions, and take deliberative action (SS.9-12.CE.1, .2, .4, .6-.12, and their US/WH equivalents) are procedures the courses exercise but do not deliver as a unit. On the content side, the Civics & Economics standards on political identity and ideology, founding-document interpretation over time, international relations, gerrymandering and redistricting, political behavior of population centers, immigration's effect on politics, and comparative political systems (SS.9-12.CE.13, .15-.17, .20, .21, .25, .26, .34, .37-.42) and the National Economy standards (SS.9-12.CE.45-.50) are not genuinely taught, so we do not claim them.",
    },
    {
      heading: "Financial Literacy (SS.9-12.FL) — this rejection has been superseded, in part.",
      body: "Until 2026-08-28 this list said all of SS.9-12.FL was not genuinely taught, and that was accurate: the catalog had no personal-finance instruction at all. It now has one course, MONEY-01, on how a consumer credit decision is made, and three of the strand's thirteen standards are claimed above — SS.9-12.FL.6 in full, SS.9-12.FL.3 and SS.9-12.FL.5 in part, each with its limit stated on the entry. The other ten are still not claimed and the reasons are specific rather than general. SS.9-12.FL.2 is taxes and SS.9-12.FL.11 through .13 are careers and Nevada's own postsecondary financing programmes, none of which this catalog teaches. SS.9-12.FL.4 is developing a personal financial plan and a savings plan, and SS.9-12.FL.1 is developing financial goals; the course teaches how institutions decide, and it gives no financial advice and no planning instruction, so claiming a goal-setting or budgeting standard would misdescribe it. SS.9-12.FL.8 is identity theft and fraud, SS.9-12.FL.9 is investing and securities, and SS.9-12.FL.10 is insurance, three domains the course does not enter. SS.912.FL.7, whose code Nevada prints without the hyphen the rest of the strand carries, asks for a comparison of loan types with attention to compounding frequency, which the course does not teach either. Two of those gaps are on the roadmap rather than out of scope: MONEY-03 covers debt and collections and MONEY-04 covers predatory products, and this entry will shrink again when they ship.",
    },
    {
      heading: "Most World History & Geography and U.S. History standards.",
      body: "The World History & Geography standards not mapped above (SS.9-12.WH.13-16, .18-25, .27-36, .39, .40) and the U.S. History standards not mapped above (SS.9-12.US.13, .15, .17-25, .28-42) are content or historical-thinking standards the courses do not exercise cleanly enough to claim. Where the catalog's globalization content overlaps SS.9-12.WH.40 and SS.9-12.US.42, it is claimed once under the closest fit (CE.53 / US.45) rather than padded across every near-duplicate.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Nevada's closest frameworks (Computer Science, World Languages) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Nevada claims this pass.",
    },
  ],
};
