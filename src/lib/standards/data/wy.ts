// ─────────────────────────────────────────────────────────────────────────────
// WYOMING — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-wy` was written FROM Wyoming's own official sources (wyoleg.gov, sos.wyo.gov,
// courts.state.wy.us, and the 1889 Wyoming Constitution), so Wyoming's civics flagship gets its
// 1:1 state-civics course.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from WDE's own record (edu.wyoming.gov):
//   · ELA — INHERITED, but ALIASED. Wyoming adopted the Common Core State Standards for English
//     Language Arts wholesale: the 2011/2012 "Wyoming Language Arts Content and Performance
//     Standards" document IS the CCSS ELA document, and its own front matter states plainly that
//     "no content or formatting changes will be made in their adoption for Wyoming students." We
//     fetched Wyoming's document and confirmed every RH/RI/WHST grade 11-12 strand we cite is
//     present VERBATIM. Wyoming prints the bare CCSS codes (RH.11-12.6, WHST.11-12.7, … — the
//     document's own convention: "RI.4.3 … stands for Reading, Informational Text, grade 4,
//     standard 3") without the "CCSS.ELA-Literacy" web namespace the shared file carries, so we
//     adopt ../shared/common-core-ela's verbatim text and ALIAS each code to Wyoming's printed
//     bare form (the Michigan pattern).
//   · Science — INHERITED (verbatim). Wyoming's 2016 Science Content and Performance Standards are
//     built on the NGSS ("NGSS Lead States (2013). Next Generation Science Standards: For States,
//     By States."). HS-ESS3-1 is printed with the NGSS code verbatim and its text is identical to
//     the national performance expectation, so ../shared/ngss is adopted verbatim, no aliases.
//   · Social studies — BESPOKE. Wyoming's Social Studies Content and Performance Standards (2014
//     with 2018 Additions) are Wyoming's own, saturated with Indian Education for All / Wind River
//     content. Crucially, and unlike Arkansas/California/New York, the high-school benchmark
//     SS12.1.5 explicitly requires understanding the structure of the WYOMING Constitution, so the
//     Wyoming flagship's state-structure lessons have a genuine home. data/wy.ts maps this
//     bespoke document and adopts the two shared frameworks above.
//
// Provenance: all three documents were fetched 2026-07-19 from edu.wyoming.gov and transcribed
// VERBATIM. The high-school benchmarks live in a four-column (K-2 / 3-5 / 6-8 / Grade 12) grade-band
// table; the "Upon Graduation / Grade 12" column (codes SS12.<standard>.<benchmark>) was isolated by
// its column geometry and every benchmark verified to read as clean, sensible English before use.
// Wyoming's tribal-sovereignty sub-benchmarks (the .a codes, e.g. SS12.1.1.a, SS12.1.5.a) and the
// culture standard are published in notClaimed — this catalog does not teach them.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const WY_SS =
  "https://edu.wyoming.gov/wp-content/uploads/2024/08/Social-Studies-Standards-20142018-additions_FINAL.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "WY",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      // Wyoming reproduces the CCSS text verbatim but prints the bare CCSS codes without the
      // "CCSS.ELA-Literacy" web namespace, so each shared code is aliased to Wyoming's printed form.
      aliases: {
        "CCSS.ELA-Literacy.RH.11-12.6": "RH.11-12.6",
        "CCSS.ELA-Literacy.RH.11-12.8": "RH.11-12.8",
        "CCSS.ELA-Literacy.RH.11-12.9": "RH.11-12.9",
        "CCSS.ELA-Literacy.RI.11-12.6": "RI.11-12.6",
        "CCSS.ELA-Literacy.WHST.11-12.7": "WHST.11-12.7",
        "CCSS.ELA-Literacy.WHST.11-12.8": "WHST.11-12.8",
      },
      adoption:
        "Wyoming adopted the Common Core State Standards for English Language Arts as the 2011/2012 Wyoming Language Arts Content and Performance Standards; the document's own front matter states that no content or formatting changes would be made in the adoption for Wyoming students, and we confirmed the RH/RI/WHST grade 11-12 strands we cite are present verbatim. Wyoming prints the bare CCSS codes (RH.11-12.6, WHST.11-12.7, …) without the “CCSS.ELA-Literacy” web namespace, so the codes here are aliased to Wyoming's printed form. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "Wyoming's 2016 Science Content and Performance Standards are built on the NGSS (NGSS Lead States, 2013), and HS-ESS3-1 is printed with the NGSS code and text verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── Wyoming Social Studies Content and Performance Standards (2014 w/ 2018 Additions) ──
    {
      id: "wy-social-studies",
      subject: "Social Studies",
      name: "Wyoming Social Studies Content and Performance Standards",
      publisher: "Wyoming Department of Education (WDE)",
      version: "2014 with 2018 Additions · High School (Grade 12) band",
      fetchedOn: "2026-07-19",
      sourceUrl: WY_SS,
      adoption:
        "Wyoming's bespoke K-12 social-studies document. High-school benchmarks are coded SS12.<standard>.<benchmark> under the “Upon Graduation / Grade 12” column of a four-column grade-band table. Six content standards: (1) Citizenship, Government, and Democracy; (2) Culture and Cultural Diversity; (3) Production, Distribution, and Consumption; (4) Time, Continuity, and Change; (5) People, Places, and Environments; (6) Technology, Literacy, and Global Connections. SS12.1.5 (structures of both the U.S. and Wyoming Constitutions) is the Wyoming flagship's home. The document's Wind River / tribal-sovereignty sub-benchmarks (the .a codes) and its Culture standard are not taught by this catalog and are published in notClaimed.",
      standards: [
        // — Standard 1: Citizenship, Government, and Democracy —
        {
          code: "SS12.1.5",
          text: "Demonstrate an understanding of the structures of both the United States and Wyoming Constitutions.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.separation-checks-balances",
            "civics.constitution-article-by-article",
            "civics.wy-equality-state",
            "civics.wy-executive",
            "civics.wy-legislature-tax",
            "civics.wy-courts",
            "civics.wy-bill-process",
            "civics.wy-direct-democracy",
          ],
          coverage: "full",
          note: "The strongest alignment on this page and the flagship's home: Wyoming Civics teaches the structure of the Wyoming Constitution in depth — the 1889 constitution, the five-officer plural executive with NO lieutenant governor, the part-time 62/31 Legislature, the Missouri-Plan judiciary, and direct democracy — and the general Civics courses teach the U.S. Constitution's three-branch structure and separation of powers. Both constitutions the standard names are genuinely taught.",
        },
        {
          code: "SS12.1.1",
          text: "Analyze unique freedoms, rights, and responsibilities of living in a democratic society and explain their interrelationships.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
            "civics.wy-equality-state",
          ],
          coverage: "partial",
          note: "Partial: the rights and responsibilities of citizenship — voting, jury service (an entire course), staying informed — are taught as practice, and Wyoming Civics adds the state's founding equal-political-rights identity. But the standard's analytic task (explaining the interrelationships among freedoms, rights, and responsibilities) is taught as content, not as a graded analysis.",
        },
        {
          code: "SS12.1.2",
          text: "Explain and/or demonstrate how to participate in the political process and form personal opinions. (i.e., tribal, local, state, and national elections).",
          claimIds: [
            "civics.wy-get-involved",
            "civics.wy-direct-democracy",
            "civics.show-up-every-level",
            "civics.campaign-help",
            "civics.track-a-bill",
          ],
          coverage: "partial",
          note: "Partial: participation is taught as practice — Wyoming's get-involved lesson (registering and voting, showing up locally, contacting legislators, running for office) plus the general courses' campaign help, bill tracking, and showing up at every level. The TRIBAL elections the standard names are not taught.",
        },
        {
          code: "SS12.1.3",
          text: "Analyze the historical development of the United States Constitution and treaties (e.g., 1868 Fort Bridger Treaty) and how they have shaped the United States and Wyoming Government (tribal, local, state, federal).",
          claimIds: ["civics.constitution-article-by-article", "civics.wy-local-government"],
          coverage: "partial",
          note: "Partial: the U.S. Constitution is worked article by article in the general courses, and Wyoming's own government (counties, cities, districts) is taught in Wyoming Civics. The TREATIES half the standard names — the 1868 Fort Bridger Treaty and how treaties shaped tribal and Wyoming government — is not taught.",
        },
        // — Standard 3: Production, Distribution, and Consumption (Economics) —
        {
          code: "SS12.3.1",
          text: "Analyze the impact of supply, demand, scarcity, prices, incentives, competition, and profits on what is produced, distributed, and consumed.",
          claimIds: ["bvc.price-elasticity-demand", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: what moves prices — supply shocks, inelastic demand absorbing a ~70% coffee price spike, competition and margins along the chain — is taught through real commodity markets, not as a general microeconomics unit.",
        },
        {
          code: "SS12.3.2",
          text: "Analyze and evaluate how people organize for the production, distribution, and consumption of goods and services in various economic systems (e.g., capitalism, communism, and socialism).",
          claimIds: ["bvc.traditional-vs-market-economies", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: reciprocity economies against market economies is taught directly and at length, and a communist workers' state against the union that unmade it (Solidarity). A systematic survey of capitalism, communism, and socialism as named systems is not taught.",
        },
        {
          code: "SS12.3.3",
          text: "Analyze and evaluate the impact of current and emerging technologies at the micro and macroeconomic levels (e.g., jobs, education, trade, and infrastructure) and their impact on global economic interdependence.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: global economic interdependence is the series' spine — who captures value along global commodity chains, and why producing regions stay poor (the commodity trap). The technology-as-driver half the standard leads with is not the focus.",
        },
        // — Standard 4: Time, Continuity, and Change (History) —
        {
          code: "SS12.4.1",
          text: "Describe patterns of change (cause and effect) and evaluate how past events impacted future events and the modern world.",
          claimIds: [
            "bvc.colonialism-persists-today",
            "bvc.conquest-columbian-exchange",
            "history.gilded-age-labor",
          ],
          coverage: "full",
          note: "Cause-and-effect from past to present is the catalog's method: conquest and the Columbian Exchange, the colonial cash-crop systems whose patterns persist today, and industrial-era labor shaping the modern world.",
        },
        {
          code: "SS12.4.2",
          text: "Analyze the development and impact of tools and technology and how it shaped history and influenced the modern world.",
          claimIds: ["bvc.tea-trade-networks", "bvc.beer-first-cities"],
          coverage: "partial",
          note: "Partial: the trade-network and grain-and-first-cities stories are deep, but technological innovation as a driver in its own right is not taught head-on.",
        },
        {
          code: "SS12.4.4",
          text: "Describe the historical interactions between and among individuals, groups, and/or institutions (e.g., family, neighborhood, political, economic, religious, social, cultural, and workplace) and their impact on significant historical event",
          claimIds: [
            "bvc.plantation-economy-resistance",
            "history.labor-civil-rights",
            "history.migration-streams-arrival",
          ],
          coverage: "partial",
          note: "Partial: interactions among groups and institutions are taught through the plantation system and its resistance, the labor and civil-rights movements, and the Great Migration — case studies, not a general treatment.",
        },
        {
          code: "SS12.4.5",
          text: "Using primary and secondary sources, apply historical research methods to interpret and evaluate important historical events from multiple perspectives.",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.nearest-green-oral-history",
            "history.migration-primary-sources",
          ],
          coverage: "full",
          note: "This is the Whose Voice method: primary and secondary sources read against each other from multiple perspectives — a planter's account against Equiano and Mary Prince, the documentary record against the oral record that preserved Nathan Green, and every Great Migration lesson pointing to its real archive.",
        },
        // — Standard 5: People, Places, and Environments (Geography) —
        {
          code: "SS12.5.1",
          text: "Use geographic tools and reference materials to interpret, analyze, evaluate, and synthesize historical and geographic data to demonstrate an understanding of global patterns and interconnectedness.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.coffee-project-mapping"],
          coverage: "full",
          note: "The Commodity Map itself is this standard: every episode pinned at its origin, the Growing Belts mapped by latitude band and country, and the Coffee project has the student prepare their own maps and data tables — geographic tools used to reveal global patterns and interconnectedness.",
        },
        {
          code: "SS12.5.2",
          text: "Describe regionalization and analyze how physical characteristics distinguish a place, influence human trends, political and economic development, and solve immediate and long-range problems.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Partial: physical characteristics — climate, soil, altitude — distinguishing a place and shaping its economic development is the growing-belts method. “Regionalization” as a named concept and the problem-solving half are not the framing.",
        },
        {
          code: "SS12.5.4",
          text: "Analyze how environmental changes and modifications positively and negatively affect communities, tribes and the world both economically and socially.",
          claimIds: ["bvc.climate-change-forecasts", "bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Partial: published climate forecasts and their economic and social effects on growing regions and communities are analyzed in depth (coffee, cacao, kava, beer). Environmental modification broadly, and tribal-specific effects, are not taught.",
        },
        // — Standard 6: Technology, Literacy, and Global Connections (Core Literacy) —
        {
          code: "SS12.6.2",
          text: "Assess the extent to which the reasoning and evidence in a text supports the author's claims.",
          claimIds: [
            "bvc.evaluate-claims-fallacies",
            "bvc.source-evaluation-modelled",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Assessing whether an author's reasoning and evidence actually support the claim — spotting fallacies and misleading statistics — is the media-literacy skill run in every BVC episode: ads, labels, and campaign language read for what they leave out.",
        },
        {
          code: "SS12.6.1",
          text: "Analyze, evaluate, and/or synthesize multiple sources of information in diverse formats and media in order to address a question or solve a problem.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: multi-source evaluation is modeled constantly and a checkable bibliography is published, but the student is required to perform the synthesis only in the Coffee episode's project.",
        },
        {
          code: "SS12.6.4",
          text: "Evaluate and integrate accurate, sufficient, and relevant information from primary and secondary sources to support writing",
          claimIds: ["bvc.coffee-project-sources-ethics", "bvc.coffee-project-argument-paper"],
          coverage: "partial",
          note: "Partial: the Coffee project's Option D requires exactly this — authoritative primary and secondary sources, APA citation, and an argument paper with a counterargument section. It is one optional project in one episode, so we will not claim a writing programme.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Wyoming Common Core mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Wyoming's 2016 Science standards are built on the NGSS, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "The Wind River / tribal-sovereignty sub-benchmarks (every .a code).",
      body: "Wyoming's social-studies standards are saturated with Indian Education for All: SS12.1.1.a (comparing tribal-member and citizen rights on the Wind River Indian Reservation), SS12.1.3.a (governance of the Indigenous Tribes of Wyoming through Congressional Acts and Supreme Court decisions — the Marshall Trilogy, U.S. v. Shoshone Tribe of Indians), SS12.1.5.a (the inherent powers of Wyoming's tribes), SS12.2.1.a-2.4.a, SS12.4.1.a/4.4.a/4.5.a, and SS12.5.2.a/5.3.a. These are specific, sovereign, Wyoming-tribal content — the Eastern Shoshone and Northern Arapaho, treaties, boarding schools, land cessions — that this catalog does not teach. We claim none of them.",
    },
    {
      heading: "Standard 2 — Culture and Cultural Diversity — nothing.",
      body: "SS12.2.1-2.2.4 ask students to analyze how groups meet human needs and express culture, and to evaluate cultural assimilation and preservation in Wyoming, the United States, and the world — the standard is anchored in Wyoming's own and Indigenous cultural life. The catalog does not teach this, so we claim no Standard 2 benchmark.",
    },
    {
      heading: "SS12.1.4 — the U.S. civil and criminal legal systems.",
      body: "SS12.1.4 asks students to demonstrate an understanding of, and distinguish between, the United States civil and criminal legal systems at the federal, state, and tribal levels. The Civics courses teach jury service and the judiciary's structure, but not the civil-vs-criminal-systems distinction the standard names, so we do not claim it.",
    },
    {
      heading: "The economics and history benchmarks we checked and rejected.",
      body: "SS12.3.4 (how financial and government institutions make economic decisions — banking, investment, credit, regulation, debt; the catalog teaches no financial literacy), SS12.3.5 (how values and beliefs influence micro/macroeconomic decisions), and SS12.4.3 (given a current event, critique the actors and hypothesize how it would have played out in another country — not this catalog's method) are not genuinely taught, so we do not claim them.",
    },
    {
      heading: "SS12.5.3 and SS12.6.3 — sense of place, and digital production.",
      body: "SS12.5.3 asks how conflict, demographics, movement, trade, and technology affect humans' “sense of place” — the catalog teaches trade and movement, but not sense of place as the geographic object of study, so we do not claim it. SS12.6.3 (use digital tools to research, design, and present social studies concepts, per the ISTE student standards) is a production standard the catalog does not deliver.",
    },
    {
      heading: "Wyoming's own state structure is taught more fully than any one code captures.",
      body: "Wyoming Civics teaches the 1889 constitution's equal-political-rights founding, the five-officer plural executive with no lieutenant governor (the Secretary of State succeeds the Governor), the part-time citizen Legislature and its short biennial sessions, the absence of a state income tax, the Missouri-Plan judiciary, direct democracy with high thresholds, and the 23 counties — from Wyoming's own sources. SS12.1.5 (structures of both constitutions) hosts most of it, but the succession quirk, the no-income-tax fact, and the initiative's high thresholds have no code of their own.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Wyoming's other frameworks (Computer Science, World Languages) have not been fetched and verified against these courses yet. Our rule is fetch-or-don't-cite, so these courses carry no Wyoming claims this pass.",
    },
  ],
};
