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
// cite them exactly as printed.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const IL_SS = "https://www.isbe.net/Documents/SS-Standards-9-12.pdf";
const IL_SS_META = {
  publisher: "Illinois State Board of Education (ISBE)",
  version: "Illinois Learning Standards for Social Science, Grades 9-12 (2017)",
  fetchedOn: "2026-07-18",
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
        "The BVC series supplies the Economics strand through real commodity markets — scarcity and incentives, market regulation, trade, and globalization. Illinois's Financial Literacy sub-strand (SS.EC.FL) is not taught here; see notClaimed.",
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
      heading: "Financial Literacy (SS.EC.FL) — nothing.",
      body: "Illinois's Economics strand carries a six-standard Financial Literacy sub-strand (income strategies, budgeting, interest and inflation, credit, investing, insurance). This catalog teaches no personal finance, so it claims none of SS.EC.FL.1-6.",
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
