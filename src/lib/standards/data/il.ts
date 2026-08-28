// ─────────────────────────────────────────────────────────────────────────────
// ILLINOIS — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-il` was written FROM Illinois's own official sources (ilga.gov,
// elections.il.gov, ilsos.gov, illinoiscourts.gov, and the 1970 Constitution), so Illinois's
// civics flagship gets its 1:1 state-civics course.
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from ISBE's own record:
//   · ELA — INHERITED (verbatim). The Illinois State Board of Education adopted the Common Core
//     State Standards for ELA and mathematics on June 24, 2010, as the Illinois Learning
//     Standards ("New Illinois Learning Standards Incorporating the Common Core"), full
//     implementation 2013-14. Illinois incorporated the CCSS text verbatim under the same code
//     numbering, so ../shared/common-core-ela is adopted verbatim, no aliases. (Contrast Michigan
//     next door, whose document drops the "CCSS.ELA-Literacy" namespace and prints bare codes —
//     that one IS aliased. Illinois's document keeps the CCSS code style, so we do not alias it,
//     and — fetch-or-don't-cite — we did not separately transcribe the Illinois ELA document this
//     pass; the adoption is the well-documented 2010 verbatim incorporation.)
//   · Science — INHERITED (verbatim). Illinois was an NGSS lead state; ISBE adopted the Next
//     Generation Science Standards as the Illinois Learning Standards in science in January 2014
//     (effective February 27, 2014, full implementation 2016-17), using the NGSS
//     performance-expectation codes verbatim. ../shared/ngss is adopted verbatim, no aliases.
//   · Social science — BESPOKE. The Illinois Social Science Standards (adopted 2016, published
//     2017) are Illinois's own. Unlike Florida's course-benchmark system, these are
//     DISCIPLINARY-CONCEPT standards (SS.CV / SS.H / SS.EC / SS.G / SS.IS) — they name
//     "institutions", "constitutions", "participation", "globalization" in the abstract rather
//     than any state's structure. So the Illinois flagship's Illinois-specific lessons map onto
//     the civics-institution and participation concept standards, honestly as partial where a
//     standard reaches past one state's structure. Illinois's statutorily required semester of
//     high-school civics (Public Act 99-0434, 2015) is the natural home for state-civics-il, but
//     its content is set by statute, not coded standards — so we map to the coded SS.CV standards.
//
// Provenance: the Illinois Social Science Standards, Grades 9-12 (2017) were transcribed VERBATIM
// from the ISBE-published PDF (isbe.net/Documents/SS-Standards-9-12.pdf), fetched 2026-07-18. The
// PDF's plain-text layer extracted cleanly; every standard below was retrieved in full, none
// excluded for want of exact text. The document numbers standards SS.<discipline>.<n>.9-12; we
// cite them exactly as printed. RE-FETCHED 2026-08-28 from the same ISBE PDF when MONEY-02
// (Banking, and Who Has No Bank) made two of the six SS.EC.FL Financial Literacy standards
// claimable for the first time; the old blanket rejection of that sub-strand is rewritten as
// superseded rather than deleted, and the four still unclaimed are named individually.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const IL_SS = "https://www.isbe.net/Documents/SS-Standards-9-12.pdf";
const IL_SS_META = {
  publisher: "Illinois State Board of Education (ISBE)",
  version: "Illinois Learning Standards for Social Science, Grades 9-12 (2017)",
  // Re-fetched 2026-08-28 from the same ISBE PDF when the two SS.EC.FL claims were added.
  fetchedOn: "2026-08-28",
  sourceUrl: IL_SS,
} as const;

export const JURISDICTION: JurisdictionFile = {
  state: "IL",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "The Illinois State Board of Education adopted the Common Core State Standards for English language arts and mathematics on June 24, 2010, as the Illinois Learning Standards (the “New Illinois Learning Standards Incorporating the Common Core”), with full implementation in 2013-14. Illinois incorporated the CCSS text verbatim under the same code numbering, so the RH/RI/WHST literacy strands this catalog touches are Illinois's ELA standards. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "Illinois was an NGSS lead state. ISBE adopted the Next Generation Science Standards as the Illinois Learning Standards in science in January 2014 (effective February 27, 2014, full implementation 2016-17), using the NGSS performance-expectation codes verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── Civics SS.CV (Illinois Social Science Standards, 9-12) ─────────────
    {
      id: "il-civics",
      subject: "Social Studies",
      name: "Illinois Learning Standards for Social Science — Civics, High School (SS.CV)",
      ...IL_SS_META,
      adoption:
        "Illinois's high-school Civics strand states disciplinary concepts, not course benchmarks — no standard names a state's structure. The Illinois Civics flagship (written from Illinois's own sources) therefore maps onto the institution and participation standards (SS.CV.1, SS.CV.2, SS.CV.3), and the general U.S. civics ladder onto the constitutional-system standards (SS.CV.4, SS.CV.7, SS.CV.10). Illinois's own structure — the plural executive, the Cutback Amendment, home rule — has no code that names it; see notClaimed.",
      standards: [
        {
          code: "SS.CV.1.9-12",
          text: "Distinguish the rights, roles, powers, and responsibilities of individuals and institutions in the political system.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.il-state-structure",
            "civics.il-courts",
            "civics.il-home-rule",
            "civics.citizenship-responsibilities",
          ],
          coverage: "full",
          note: "The roles and powers of institutions are taught head-on at both levels: the federal three branches, and Illinois's own institutions — the plural executive of six statewide officers, the General Assembly, the partisan-elected courts, and Illinois's strong home-rule local governments — beside citizens' own roles and responsibilities.",
        },
        {
          code: "SS.CV.2.9-12",
          text: "Evaluate the opportunities and limitations of participation in elections, voting, and electoral process.",
          claimIds: [
            "civics.il-elections",
            "civics.il-get-involved",
            "civics.il-initiative",
            "civics.election-mechanics",
            "civics.voter-registration",
            "civics.campaign-help",
          ],
          coverage: "full",
          note: "Participation is taught as practice — Illinois's own on-ramps (same-day and automatic registration, no-excuse vote-by-mail) and the general election ladder — and the standard's “limitations” land squarely on Illinois's uniquely narrow initiative, the only thing citizens may put on the ballot themselves.",
        },
        {
          code: "SS.CV.3.9-12",
          text: "Analyze the impact of constitutions, laws, and agreements on the maintenance of order, justice, equality and liberty.",
          claimIds: [
            "civics.il-state-structure",
            "civics.constitution-article-by-article",
            "civics.articles-to-constitution",
            "rights.landmark-cases",
            "rights.limits-on-rights",
          ],
          coverage: "partial",
          note: "Constitutions and laws are analyzed directly — Illinois's 1970 Constitution and the U.S. Constitution as a document, with landmark cases as applied rules balancing liberty and order. The standard's “agreements” (treaties and compacts) are not the courses' subject.",
        },
        {
          code: "SS.CV.4.9-12",
          text: "Explain how the US Constitution established a system of government that has powers, responsibilities, and limits that have changed over time and are still contested while promoting the common good and protecting rights.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federal-powers-taxonomy",
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
            "civics.federalism-why-split-power",
          ],
          coverage: "full",
          note: "The U.S. Constitution ladder's core: separation of powers and checks and balances, the enumerated/implied/reserved/concurrent powers taxonomy, federalism, and the Bill of Rights as a limit on government — taught as a living, contested system.",
        },
        {
          code: "SS.CV.7.9-12",
          text: "Describe the concepts and principles that are inherent to American Constitutional Democracy.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.preamble-purposes",
            "civics.bill-of-rights-overview",
          ],
          coverage: "full",
        },
        {
          code: "SS.CV.8.9-12",
          text: "Analyze how individuals use and challenge laws to address a variety of public issues.",
          claimIds: ["civics.track-a-bill", "rights.landmark-cases", "rights.limits-on-rights", "history.labor-civil-rights"],
          coverage: "partial",
          note: "How individuals use and challenge laws is taught by example — invoking rights through the landmark-case line, tracking a live bill, and the labor and civil-rights movements' use of law and protest — not as a general survey of every avenue.",
        },
        {
          code: "SS.CV.9.9-12",
          text: "Evaluate public policies in terms of intended and unintended outcomes and related consequences.",
          claimIds: ["civics.track-a-bill", "bvc.war-on-drugs-foreign-policy", "bvc.scott-county-epidemic"],
          coverage: "partial",
          note: "Taught through one worked domain — drug policy — evaluated for unintended consequences: the War on Drugs' foreign-policy and incarceration effects, and how a needle-exchange ban helped drive the Scott County HIV outbreak. Not a general public-policy-analysis unit.",
        },
        {
          code: "SS.CV.10.9-12",
          text: "Explain the role of compromise and deliberation in the legislative process.",
          claimIds: ["civics.federal-bill-process", "civics.track-a-bill"],
          coverage: "full",
          note: "The federal bill-to-law process is taught end to end — committee filter, floor deliberation, conference reconciliation, veto and override, the compromise the standard names — with a companion lesson tracking a live bill through it.",
        },
      ],
    },

    // ── History SS.H (Illinois Social Science Standards, 9-12) ─────────────
    {
      id: "il-history",
      subject: "Social Studies",
      name: "Illinois Learning Standards for Social Science — History, High School (SS.H)",
      ...IL_SS_META,
      adoption:
        "Illinois's History strand is stated as historical-thinking concepts (causation, sources, the struggle for justice) rather than an era survey, which is where the catalog's commodity, labor, civil-rights, and Cold-War history maps.",
      standards: [
        {
          code: "SS.H.1.9-12",
          text: "Evaluate how historical developments were shaped by time and place as well as broader historical contexts.",
          claimIds: [
            "bvc.growing-belts-resource-maps",
            "bvc.climate-resources-shape-humans",
            "bvc.conquest-columbian-exchange",
            "bvc.agricultural-hearths",
          ],
          coverage: "partial",
          note: "Taught as the series' method — how climate, latitude, and place shaped where commodities grew and what happened there (the Columbian Exchange, the agricultural hearths) — that lens applied to commodity history, not a general survey of causation.",
        },
        {
          code: "SS.H.3.9-12",
          text: "Evaluate the methods utilized by people and institutions to promote change.",
          claimIds: [
            "history.gilded-age-labor",
            "history.solidarnosc-cold-war",
            "bvc.plantation-economy-resistance",
            "bvc.haitian-revolution",
          ],
          coverage: "full",
          note: "The methods of change are taught in depth: the Gilded Age labor movement's strikes and organizing, Solidarność undoing a communist state, and resistance to slavery from Maroon communities to the Haitian Revolution.",
        },
        {
          code: "SS.H.7.9-12",
          text: "Identify the role of individuals, groups, and institutions in people’s struggle for safety, freedom, equality and justice.",
          claimIds: [
            "history.labor-civil-rights",
            "history.gilded-age-labor",
            "bvc.plantation-economy-resistance",
            "bvc.haitian-revolution",
            "history.migration-civil-rights-politics",
          ],
          coverage: "full",
          note: "Directly the catalog's spine: A. Philip Randolph and the labor half of the civil-rights movement, the industrial labor movement, enslaved people's resistance and the Haitian Revolution, and the Great Migration's political power.",
        },
        {
          code: "SS.H.8.9-12",
          text: "Analyze key historical events and contributions of individuals through a variety of perspectives, including those of historically underrepresented groups.",
          claimIds: ["bvc.middle-passage-primary-sources", "history.harlem-renaissance-black-press", "bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Underrepresented perspectives are centered — formerly enslaved writers (Equiano, Mary Prince) on the Middle Passage and plantation, the Harlem Renaissance and the Black press — but as commodity and labor history, not a comprehensive multi-perspective survey.",
        },
        {
          code: "SS.H.9.9-12",
          text: "Analyze the relationship between historical sources and the secondary interpretations made from them.",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.nearest-green-oral-history",
            "bvc.source-evaluation-modelled",
            "bvc.whose-voice-absence",
          ],
          coverage: "full",
          note: "Exactly the Whose Voice method: primary accounts read against each other and against the secondary record, and the Nathan “Nearest” Green lesson teaching why the oral and documentary records diverge — source and interpretation held apart on purpose.",
        },
        {
          code: "SS.H.10.9-12",
          text: "Analyze the causes and effects of global conflicts and economic crises.",
          claimIds: ["bvc.opium-wars", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Taught through two worked cases — the Opium Wars and their long consequences for China, and the Cold War's end in Poland — rather than as a survey of global conflicts and crises.",
        },
      ],
    },

    // ── Economics SS.EC (Illinois Social Science Standards, 9-12) ──────────
    {
      id: "il-economics",
      subject: "Social Studies",
      name: "Illinois Learning Standards for Social Science — Economics and Financial Literacy, High School (SS.EC)",
      ...IL_SS_META,
      adoption:
        "The BVC series supplies the Economics strand through real commodity markets — scarcity and incentives, market regulation, trade, and globalization. Illinois's Financial Literacy sub-strand (SS.EC.FL) was rejected wholesale until 2026-08-28, when the banking course made two of its six standards genuinely reachable; the other four are still not taught and notClaimed names each one.",
      standards: [
        {
          code: "SS.EC.1.9-12",
          text: "Analyze how scarcity and incentives influence choices to consume or produce for different individuals and groups.",
          claimIds: ["bvc.traditional-vs-market-economies", "bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Scarcity and incentives are taught through real commodity markets — reciprocity versus market economies, and inelastic coffee demand absorbing a price spike — not as a general choice-and-incentives unit.",
        },
        {
          code: "SS.EC.5.9-12",
          text: "Analyze the ways in which competition and government regulation influence what is produced and distributed in a market system.",
          claimIds: ["bvc.sugar-program-trade-barriers", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Worked through the U.S. sugar program — how quotas, tariffs, and price supports reshape what is grown, imported, and sold, and who captures the value. One case, not a general treatment of market structure.",
        },
        {
          code: "SS.EC.9.9-12",
          text: "Analyze the role of comparative advantage in global trade of goods and services.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "The geography of who produces what and who earns from it is the series' spine (coffee, sugar, chocolate), but comparative advantage as a named formal model is not taught.",
        },
        {
          code: "SS.EC.10.9-12",
          text: "Explain how globalization trends and policies affect social, political, and economic conditions in different nations.",
          claimIds: ["bvc.commodity-trap", "bvc.colonialism-persists-today", "history.nafta-usmca-labor"],
          coverage: "full",
          note: "Globalization's effects are traced through real chains — the commodity trap that keeps producing nations poor, how colonial patterns persist, and NAFTA→USMCA's effect on labor on both sides of the border.",
        },
        // — Financial Literacy (SS.EC.FL), re-fetched 2026-08-28 when MONEY-02 shipped. The whole
        //   six-standard sub-strand was rejected until then; two are now genuinely reachable.
        {
          code: "SS.EC.FL.2.9-12",
          text: "Explain how to make informed financial decisions by collecting information, planning, and budgeting.",
          claimIds: [
            "money.consumer-financial-protection-mechanisms",
            "money.consumer-deposit-accounts",
          ],
          coverage: "partial",
          note: "Partial: the collecting-information half is the banking course's spine, and it is taught as a set of enforceable rights rather than as a habit. A learner leaves able to obtain account disclosures before opening an account and on request (12 CFR 1030.4), read a prepaid account's fees before acquiring it (12 CFR 1005.18), and obtain their own consumer file from a deposit-screening agency free once every twelve months (15 U.S.C. 1681j). Planning and budgeting are not taught here and are left to another course in the same series.",
        },
        {
          code: "SS.EC.FL.4.9-12",
          text: "Analyze costs and benefits of different credit and payment options for goods and services, the role of lenders, and interest.",
          claimIds: ["money.unbanked-and-alternative-services", "money.consumer-deposit-accounts"],
          coverage: "partial",
          note: "Partial, and it is the payment half. The costs and benefits of paying by cash, debit card, prepaid card, nonbank payment app, money order and check casher are analysed against each other from published prices (a postal fee schedule, a state regulator's fee cap, and the account disclosures a bank must provide), including the non-price properties that decide the comparison: predictability, when funds become available, and whether a minimum balance applies. Credit options, the role of lenders, and interest are not taught here.",
        },
      ],
    },

    // ── Geography SS.G (Illinois Social Science Standards, 9-12) ───────────
    {
      id: "il-geography",
      subject: "Social Studies",
      name: "Illinois Learning Standards for Social Science — Geography, High School (SS.G)",
      ...IL_SS_META,
      adoption:
        "The BVC Commodity Map's climate-and-place, migration, and globalization work maps onto Illinois's human- and environmental-geography standards.",
      standards: [
        {
          code: "SS.G.8.9-12",
          text: "Evaluate how short and long term climate variability impacts human migration and settlement patterns, resource use and land uses.",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.climate-change-forecasts", "bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "This is the Growing Belts map: climate and latitude deciding where each commodity can grow and be settled, and climate change redrawing that map for coffee, cacao, and more.",
        },
        {
          code: "SS.G.6.9-12",
          text: "Analyze how historical events and the diffusion of ideas, technologies, and cultural practices have influenced migration patterns and the distribution of human population.",
          claimIds: ["history.migration-streams-arrival", "bvc.agricultural-hearths"],
          coverage: "partial",
          note: "Taught at case depth through the Great Migration — its streams and arrival cities — and the diffusion of crops from their agricultural hearths. Not a general treatment of migration and population.",
        },
        {
          code: "SS.G.11.9-12",
          text: "Explain how globalization impacts the cultural, political, economic, and environmental characteristics of a place or region.",
          claimIds: ["bvc.commodity-trap", "bvc.value-chain-earnings", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "Globalization's economic and political imprint on producing regions is taught through commodity case studies — value capture along the chain and the commodity trap — rather than a full four-characteristics analysis.",
        },
        {
          code: "SS.G.12.9-12",
          text: "Evaluate how competition for scarce natural resources contributes to conflict and cooperation within and among countries.",
          claimIds: ["bvc.opium-wars", "bvc.imperialism-africa-asia-oceania", "bvc.colonialism-persists-today"],
          coverage: "full",
          note: "Competition for commodities as a driver of conflict is taught directly — European imperialism run through cash crops, and the Opium Wars fought over trade — with the colonial patterns that outlast them.",
        },
      ],
    },

    // ── Inquiry Skills SS.IS (Illinois Social Science Standards, 9-12) ─────
    {
      id: "il-inquiry",
      subject: "Social Studies",
      name: "Illinois Learning Standards for Social Science — Inquiry Skills, High School (SS.IS)",
      ...IL_SS_META,
      adoption:
        "Illinois threads Inquiry Skills through every social-science discipline; the catalog's media-literacy method and the Coffee project's sourced research map onto the source-evaluation and evidence standards.",
      standards: [
        {
          code: "SS.IS.4.9-12",
          text: "Gather and evaluate information from multiple sources while considering the origin, credibility, point of view, authority, structure, context, and corroborative value of the sources.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.reading-ads-for-omission", "bvc.coffee-project-sources-ethics", "media.marketing-omissions"],
          coverage: "full",
          note: "Source evaluation — origin, credibility, point of view, corroboration — is modelled in every media-literacy episode and required in the Coffee project's sourced, cited research.",
        },
        {
          code: "SS.IS.5.9-12",
          text: "Identify evidence that draws information from multiple sources to revise or strengthen claims.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Building and testing claims against multiple sources is taught through the fallacy-and-evidence lessons and the Coffee project's synthesis. Only the Coffee episode ships the graded version.",
        },
        {
          code: "SS.IS.6.9-12",
          text: "Construct and evaluate explanations and arguments using multiple sources and relevant, verified information.",
          claimIds: ["bvc.coffee-project-argument-paper", "bvc.coffee-project-synthesis", "bvc.author-rhetoric-primary-texts"],
          coverage: "partial",
          note: "The Coffee project's argument paper asks for exactly this — a thesis defended from verified, cited sources with a counterargument — but it is one optional project in one episode, not a programme.",
        },
      ],
    },

    // ── Financial Literacy (SS.9-12.EC.FL), the CURRENT edition ────────────
    //
    // ⚠️ THE CODES IN THIS FILE'S OLD REJECTION WERE FROM A RETIRED EDITION, AND THAT IS THE
    // FINDING WORTH THE MOST HERE. Until 2026-08-28 this file's notClaimed named a "six-standard
    // Financial Literacy sub-strand ... SS.EC.FL.1-6". Those codes are the 2017 printing
    // (isbe.net/Documents/SS-Standards-9-12.pdf, footer "1 May 2017"), which the other frameworks in
    // this file still cite for their own entries. ISBE's CURRENT document — the one linked from its
    // standards page, adopted for implementation in 2022-2023 and updated 05/05/2025 — renumbered
    // the strand to SS.9-12.EC.FL.<n>, EXTENDED it from six standards to nine, rewrote the text of
    // every one, and marks FL.6 "No standard." So `SS.EC.FL.1-6.9-12` no longer exists as a live
    // code set, and a rejection naming it was citing a retired edition to teachers.
    //
    // ONLY THE FL STRAND IS RE-FETCHED HERE. The rest of this file's Illinois entries still cite the
    // 2017 document and were not re-read this pass; whether the SS.CV, SS.EC, SS.G, SS.H and SS.IS
    // codes also moved in the current edition is a REAL open question and it is filed as a research
    // check (`il-social-science-2022-edition`) rather than silently assumed either way. Fixing the
    // whole file is a separate job from shipping this course, and guessing is worse than flagging.
    //
    // TWO OF NINE, BOTH PARTIAL, NO FULL. Illinois's current FL strand is written around individual
    // circumstance, structural constraint and disparate impact, which suits this course better than
    // most states' strands do; but every one of its standards bundles that framing with budgeting,
    // saving, investing, inflation or policy analysis the course does not teach. There is no honest
    // full claim in it.
    //
    // TRANSCRIPTION NOTE, PRESERVED. ISBE's published PDF prints FL.2's code as "S.9-12.EC.FL.2",
    // with a single S, for that one code alone. It is a typo in the state's document. We do not
    // claim FL.2, so the malformed code does not appear below; it is recorded here so a later
    // editor who meets it in the PDF knows it was seen.
    {
      id: "il-financial-literacy",
      subject: "Social Studies",
      name: "Illinois Learning Standards for Social Science — Financial Literacy, High School (SS.9-12.EC.FL)",
      publisher: "Illinois State Board of Education (ISBE)",
      version: "Illinois Learning Standards for Social Science (adopted for implementation 2022-2023; document updated 05/05/2025)",
      fetchedOn: "2026-08-28",
      sourceUrl: "https://www.isbe.net/Documents/IL-Social-Science-Standards.pdf",
      adoption:
        "Illinois files financial literacy as a sub-strand of high-school Economics. Its CURRENT edition, which supersedes the 2017 SS.EC.FL.1-6 codes the rest of this file's rejection used to cite, runs SS.9-12.EC.FL.1 through .9, with FL.6 printed as \"No standard.\" The strand is distinctive in the set: it repeatedly asks about factors outside an individual's control, access to capital, and the disparate impact of banking, credit and mortgage-lending policy, which is closer to what MONEY-01 (`credit-decisions`) teaches than any other state's personal-finance strand. Even so, every standard pairs that framing with budgeting, saving, investing, inflation or forward-looking policy analysis the course does not deliver, so both claims below are partial and there is no full one. Transcribed verbatim 2026-08-28 from the document ISBE currently links.",
      standards: [
        {
          code: "SS.9-12.EC.FL.9",
          text: "Evaluate the disparate impact of government and private business policies related to banking, credit, and mortgage lending in one's own and others' contexts while using current economic indicators to analyze or propose future policies.",
          claimIds: [
            "money.credit-discrimination-and-recourse",
            "money.credit-access-constraint",
            "money.who-may-read-the-file",
            "money.fair-housing-and-valuation",
            "money.mortgage-mechanics-and-disclosures",
          ],
          coverage: "partial",
          note: "Partial, and the strongest fit in the Illinois strand. Disparate impact in credit is core content: the Equal Credit Opportunity Act's prohibited bases and their reach over any aspect of a credit transaction, why a required statement of specific reasons is what makes that prohibition testable at all, how a thin or absent file forecloses access regardless of conduct, and the catalog's own history of a federal credit gate operated by neighbours under a character test. The mortgage-lending clause of this standard, which MONEY-01 could not reach, was filled on 2026-08-28 by MONEY-06 (`housing-decisions`): the Fair Housing Act's coverage of residential real estate-related transactions including appraising, HUD's parallel rule reaching a person who uses a valuation they should know is tainted, the racially restrictive covenant as a document still in the county land records, and the congressional finding in the Home Mortgage Disclosure Act that some depository institutions contributed to the decline of certain geographic areas by failing to lend to qualified applicants. That finding is why this clause of the standard is answerable from a statute rather than from an assertion. STILL NOT covered, and the reason the entry remains partial: the second half of the standard asks students to use current economic indicators to analyze or propose future policies, which is macroeconomic and policy-design work no course in this series does. This entry's text was re-fetched from the ISBE document on 2026-08-28 and is unchanged.",
        },
        {
          code: "SS.9-12.EC.FL.4",
          text: "Analyze costs and benefits of different credit and payment options for goods and services, the role of lenders and interest, and the impact of each on individuals and multiple communities.",
          claimIds: [
            "money.cost-of-credit-apr",
            "money.adverse-action-notice",
            "money.credit-access-constraint",
            "money.high-cost-credit-products",
            "money.cost-of-credit-fee-conversion",
            "money.rent-to-own-total-of-payments",
          ],
          coverage: "partial",
          note: "Partial, and it got fuller on 2026-08-28 when MONEY-04 shipped. The role of lenders is MONEY-01's subject: how a lender reaches a credit decision, what it must disclose, and what recourse follows. Interest and cost are taught through the annual percentage rate as the standardized figure the Truth in Lending Act requires so two offers can be ranked, with the statutory computation worked. THE BREADTH THIS ENTRY PREVIOUSLY SAID WAS MISSING, a survey of DIFFERENT credit options, now exists: payday lending, vehicle title lending, rent-to-own, refund advances and overdraft, each priced from the statute that governs it and each converted into the same unit so they can be set beside one another. The impact on individuals and multiple communities is reached through the exclusion history the catalog already carries and through the enforcement record, which names populations rather than asserting them. NOT covered: a survey of PAYMENT options, which is MONEY-02's rather than this pair's, and credit cards, which nothing in this catalog teaches.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Illinois Common Core (Illinois Learning Standards) mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Illinois adopted the NGSS verbatim (January 2014) as its science standards, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Financial Literacy — this rejection has been superseded, and its codes were also out of date.",
      body: "Until 2026-08-28 this entry said Illinois's Economics strand carried a six-standard Financial Literacy sub-strand and that the catalog claimed none of SS.EC.FL.1-6. Two things were wrong with that by then. First, the catalog now teaches one personal-finance course, MONEY-01, on how a consumer credit decision is made. Second, and more seriously, SS.EC.FL.1-6 are the codes of the 2017 printing; ISBE's current document, adopted for implementation in 2022-2023, renumbered the strand to SS.9-12.EC.FL, extended it from six standards to nine, rewrote the text of every one, and prints FL.6 as \"No standard.\" Two of the nine are claimed above, SS.9-12.EC.FL.9 and SS.9-12.EC.FL.4, both as partials with their gaps named. FL.9's mortgage-lending clause, which the credit course could not reach and which this entry previously deferred to a course that did not yet exist, was filled on 2026-08-28 when MONEY-06 (`housing-decisions`) shipped; the standard stays partial because its economic-indicators half is still not taught. The other seven are not claimed. FL.3 is time, interest rates and inflation over a saving lifetime, and FL.5 is diversified investment risk and return; both are outside this catalog. FL.1 (costs and benefits subject to factors outside one's control) and FL.7 (cognitive biases, environmental influences and access to resources in financial decision-making) each contain a clause the course genuinely teaches, the structural constraint on access, but each also asks for a decision-making method the course does not deliver, so they are left unclaimed rather than stretched to a thin partial. FL.2 is information-gathering, planning and budgeting; the course teaches the first and refuses the other two, since it gives no financial advice. FL.8 is risk disposition and opportunity recognition, which the course does not teach at all. FL.6 has no standard to claim. ONE OPEN QUESTION, FILED RATHER THAN GUESSED: only the FL strand was re-fetched this pass, so the SS.CV, SS.EC, SS.G, SS.H and SS.IS codes elsewhere in this file still cite the 2017 document and may have moved in the same revision. That is recorded as a research check rather than assumed either way.",
    },
    {
      heading: "Financial Literacy (SS.EC.FL) — two of six, now that banking is taught.",
      body: "This entry used to say the catalog taught no personal finance and claimed none of SS.EC.FL.1-6. That is no longer true, and the correction is recorded here rather than deleted so a teacher can see what changed. As of 2026-08-28, SS.EC.FL.2 (making informed financial decisions by collecting information) and SS.EC.FL.4 (the costs and benefits of payment options) are claimed, partially, and supersede the blanket rejection. Four remain unclaimed and are named so the gap stays visible: SS.EC.FL.1 (strategies to increase income), SS.EC.FL.3 (time, interest rates and inflation on saving), SS.EC.FL.5 (risks and rates of return of diversified investments), and SS.EC.FL.6 (the costs and benefits of insurance). Nothing here claims the budgeting half of FL.2 or the credit and interest halves of FL.4, both of which belong to later courses in the same series and none of which is claimed before it is taught.",
    },
    {
      heading: "The Illinois Civics flagship's Illinois-specific structure has no Illinois code to cite.",
      body: "Illinois Civics teaches the 1970 Constitution, the plural executive (uniquely both a Comptroller and a Treasurer), the partisan-elected Supreme Court, the uniquely narrow Legislative-Article initiative and the 1980 Cutback Amendment, and one of the nation's strongest home-rule traditions — from Illinois's own official sources. But the 2017 Social Science Standards are DISCIPLINARY CONCEPTS: no standard names a state's structure, so these lessons map only onto the abstract institution and participation standards (SS.CV.1, SS.CV.2, SS.CV.3). The gap is in the standards, not the course.",
    },
    {
      heading: "Civics standards we checked and rejected.",
      body: "SS.CV.5 (civic dispositions and diverse perspectives as a named concept) and SS.CV.6 (political parties, the media, and public interest groups — our media literacy is consumer protection, not political-media analysis) are not genuinely taught, so we do not claim them.",
    },
    {
      heading: "The disciplinary standards we read and did not claim.",
      body: "Across History, Economics, and Geography we claim only the concept standards the catalog genuinely teaches. SS.H.2/4/5/6/11/12, SS.EC.2-4/6-8, and SS.G.1-5/7/9/10 were checked and not claimed — the change-and-continuity, market-mechanics, macroeconomic-indicator, mapping-tool, and culture standards are not this catalog's subject. The reject list is the evidence the map was not padded.",
    },
  ],
};
