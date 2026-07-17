// ─────────────────────────────────────────────────────────────────────────────
// ARIZONA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-az` was written FROM Arizona's own official sources (azleg.gov, azsos.gov,
// azcourts.gov), so Arizona's civics anchor standards get their 1:1 state-civics course.
//
// What Arizona actually adopted (verified against ADE's own pages, not assumed):
//   · Social studies — the 2018 Arizona History and Social Science Standards (one K-12 document;
//     high-school codes are anchor standards: HS.SP*, HS.C*, HS.E*, HS.G*, HS.H*).
//   · ELA — Arizona writes its OWN ELA standards (the 2016 "Final" grade-band documents are what
//     ADE's ELA page links today). Codes are Arizona's; Arizona is NOT mapped through the shared
//     Common Core file.
//   · Science — Arizona is NOT an NGSS state. The 2018 Arizona Science Standards (modified
//     12/22/21) are built from the NRC Framework; codes are Arizona's own (HS.E1U3.14 style).
//   · Health — the Arizona Health Standards, approved Spring 2010 (Strand/Concept/PO, grade-band
//     columns; the 9-12 column is cited here).
//   · PE — the Arizona Physical Education Standards, adopted May 2015 (SHAPE-style codes
//     S1-S5 with high-school outcomes .L1/.L2).
//
// Provenance: www.azed.gov and cms.azed.gov refuse connections from our tooling (HTTP 403), so
// every ADE document was retrieved through the Wayback Machine and transcribed from the archived
// copy — all fetched 2026-07-16:
//   · History & Social Science PDF — snapshot 2026-03-14 (20260314051455)
//   · ELA 9-10 / 11-12 2016 Final (Word) — snapshot 2026-03-14 (20260314055021)
//   · Science complete-set PDF — snapshot 2026-03-14 (20260314063724)
//   · Health Performance Objectives PDF — snapshot 2026-03-14 (20260314070944)
//   · High School PE PDF — snapshot 2026-03-14 (20260314054447)
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "AZ",
  frameworks: [
    // ── History and Social Science (2018, modified 8/23/19) ────────────────
    {
      id: "az-hss",
      subject: "Social Studies",
      name: "Arizona History and Social Science Standards",
      publisher: "Arizona Department of Education (ADE)",
      version: "2018 · modified 8/23/19",
      fetchedOn: "2026-07-16",
      sourceUrl:
        "https://www.azed.gov/sites/default/files/2023/03/2018%20History%20and%20Social%20Science%20Standards%20_Update8.23.19.pdf",
      adoption:
        "Arizona's one K-12 social-studies document. Unlike Indiana's per-course standards, Arizona's high-school codes are ANCHOR standards (Civics, Economics, Geography, History, and Disciplinary Skills), and LEAs build their courses from them — so one anchor can be met across several of our courses. Arizona requires all twenty-one anchor standards be taught by graduation.",
      standards: [
        // — Civics —
        {
          code: "HS.C3.2",
          text: "Analyze the origins, functions, and structures of government at the national, state, local, and tribal levels and compare with other systems of government.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.az-three-branches",
            "civics.az-local-government",
            "civics.local-government-layers",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "Partial, and the missing piece matters in Arizona: national, state (Arizona's own three branches), and local government are taught thoroughly, and federal-state structure gets its own course. TRIBAL government — which the standard names, in the state with 20+ federally recognized tribes — is not taught, and the comparison with other systems of government is not systematic.",
        },
        {
          code: "HS.C3.1",
          text: "Examine how the United States Constitution established a system of government that has powers, responsibilities, and limits and analyze how those powers, responsibilities, and limits have changed over time.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.article-v-amendment",
            "rights.scotus-precedent",
          ],
          coverage: "full",
          note: "Both halves: the Constitution is worked article by article (powers, responsibilities, limits), and the changed-over-time half is taught through Article V, the key later amendments, and how Supreme Court precedent expands rights.",
        },
        {
          code: "HS.C2.1",
          text: "Explain the importance of individual participation in civic and political institutions.",
          claimIds: [
            "civics.campaign-help",
            "civics.show-up-every-level",
            "civics.track-a-bill",
            "civics.az-get-involved",
            "civics.ballot-measures-local-causes",
          ],
          coverage: "full",
          note: "Participation is taught as practice, not exhortation: helping a campaign lawfully, tracking a live bill, showing up at every level — with an Arizona-specific lesson on the direct-democracy tools that make individual participation unusually consequential here.",
        },
        {
          code: "HS.C2.3",
          text: "Evaluate the evolution of ideals and rights established in historical documents, legislation, executive actions, and court cases.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent", "civics.bill-of-rights-origin"],
          coverage: "partial",
          note: "Partial: the historical-documents and court-cases halves are strong (the Bill of Rights as a document; Tinker through Carpenter as applicable rules; how precedent expands rights). The evolution of rights through LEGISLATION and EXECUTIVE ACTIONS is not taught systematically.",
        },
        {
          code: "HS.C2.4",
          text: "Analyze the responsibilities of citizens.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
          ],
          coverage: "full",
          note: "Responsibilities are taught as practices: voting, jury service (an entire course), staying informed, and civic participation.",
        },
        {
          code: "HS.C4.1",
          text: "Evaluate multiple procedures for making governmental decisions in all three branches and at the local, state, tribal, national, and international levels in terms of the civic purpose achieved.",
          claimIds: [
            "civics.federal-bill-process",
            "civics.az-bill-process",
            "civics.az-constitution-direct-democracy",
            "civics.az-courts-county-size",
          ],
          coverage: "partial",
          note: "Partial: the procedures ARE evaluated by civic purpose — Arizona's two lawmaking routes (the Legislature, and the initiative the Progressive-Era framers added to bypass it), the Voter Protection Act's purpose, and merit selection versus judicial election (insulating the busiest courts from campaign politics), alongside the full federal bill process. The tribal and international levels the standard names are not taught.",
        },
        {
          code: "HS.C4.2",
          text: "Evaluate local, state, national, and international policies in terms of intended and unintended outcomes and related consequences.",
          claimIds: [
            "bvc.sugar-program-trade-barriers",
            "bvc.prohibition",
            "bvc.war-on-drugs-foreign-policy",
          ],
          coverage: "partial",
          note: "Partial: NATIONAL and INTERNATIONAL policies are evaluated in real depth — the U.S. sugar program (intended: stable prices; unintended: ~$3.5bn/yr consumer cost), Prohibition, and the War on Drugs (the balloon effect is an unintended-consequences lesson by name). Local and state policies are not evaluated this way.",
        },
        {
          code: "HS.C4.3",
          text: "Explain the procedures for elections at the local, state, tribal, and national levels.",
          claimIds: ["civics.election-mechanics", "civics.electoral-college", "civics.az-election-law"],
          coverage: "partial",
          note: "Partial: national and Arizona election procedures are taught thoroughly (registration through certification, the Electoral College, the AEVL). Tribal election procedures are not taught, and local procedures are handled by teaching students to verify their own county's rules.",
        },
        // — Economics —
        {
          code: "HS.E3.2",
          text: "Evaluate how numerous factors and conditions influence market prices.",
          claimIds: ["bvc.price-elasticity-demand", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: what moves prices is taught through commodity markets — supply shocks, inelastic demand absorbing a ~70% coffee price spike, market structure along the chain. It is not a general markets-and-pricing unit.",
        },
        {
          code: "HS.E5.1",
          text: "Evaluate the advantages and disadvantages of global trade.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "full",
          note: "Evaluating who wins and loses from global trade is the series' spine: 21 episodes trace the advantages (market access, income) and the disadvantages (the commodity trap, value captured downstream) through real chains, and test the pattern.",
        },
        {
          code: "HS.E5.3",
          text: "Explain why nations chose to trade and how it is regulated.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.sugar-program-trade-barriers"],
          coverage: "full",
          note: "Both halves: WHY nations trade (the growing belts — climate and soil decide where commodities can grow, so trade follows) and HOW it is regulated (the U.S. sugar program's import quotas, tariffs, and price supports, worked in detail).",
        },
        // — Geography —
        {
          code: "HS.G1.1",
          text: "Use geographic data to explain and analyze relationships between locations of place and regions.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.coffee-project-mapping"],
          coverage: "full",
          note: "The Commodity Map itself is this standard: every episode pinned at its origin, the Growing Belts map by latitude band and country, and the Coffee project has the student prepare maps and data tables of their own.",
        },
        {
          code: "HS.G2.1",
          text: "Analyze interactions within and between human and physical systems.",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "Human-environment interaction is the curriculum's method: volcanic soil and altitude deciding what grows, climate change redrawing the map, karst limestone shaping bourbon — physical systems shaping human activity and back.",
        },
        {
          code: "HS.G2.2",
          text: "Evaluate how political and economic decisions throughout time have influenced cultural and environmental characteristics of various places and regions.",
          claimIds: [
            "bvc.colonialism-persists-today",
            "bvc.conquest-columbian-exchange",
            "bvc.imperialism-africa-asia-oceania",
          ],
          coverage: "full",
          note: "Taught through the plantation and colonial cash-crop systems: political and economic decisions (conquest, the triangular trade, imperial monopolies) remaking the environments and cultures of the Caribbean, West Africa, South Asia, and Oceania — and how those decisions persist today.",
        },
        {
          code: "HS.G3.1",
          text: "Analyze the reciprocal nature of how historical events and the diffusion of ideas, technologies, and cultural practices have influenced migration patterns and the distribution of human population.",
          claimIds: ["history.migration-streams-arrival", "bvc.agricultural-hearths"],
          coverage: "partial",
          note: "Partial, at case-study depth: the Great Migration (six million people, the events that pushed and the Black press that pulled, and the urban population distribution it created) and the diffusion of crops among regions. Not a general treatment of world migration.",
        },
        {
          code: "HS.G3.3",
          text: "Evaluate the influence of long-term climate variability on human migration and settlement patterns, resource use, and land uses at local-to-global scales.",
          claimIds: ["bvc.climate-change-forecasts"],
          coverage: "partial",
          note: "Partial: published climate forecasts and their implications for growers, land use, and production regions are analyzed in depth (coffee, cacao, kava, beer). Climate-driven human MIGRATION is touched, not worked.",
        },
        {
          code: "HS.G4.2",
          text: "Analyze patterns of global power and influence in respect to trade, demographics, politics, and resource availability and use.",
          claimIds: ["bvc.colonialism-persists-today", "bvc.commodity-trap", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: global power is analyzed through trade, politics, and resource availability (who captures value, how colonial patterns persist, why producers stay poor). The DEMOGRAPHICS lens the standard also names is not taught.",
        },
        // — History —
        {
          code: "HS.H1.3",
          text: "Evaluate the consequences that resulted from civilizational and cultural interactions.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.mesoamerica-colonization"],
          coverage: "full",
          note: "The consequences of conquest and colonization — the Columbian Exchange, the transatlantic slave trade, the effects on Maya and Aztec society — are taught directly, through the plants those societies governed.",
        },
        {
          code: "HS.H1.7",
          text: "Analyze how technological innovation and trade has affected economic development and transformed societies.",
          claimIds: ["bvc.tea-trade-networks", "bvc.beer-first-cities"],
          coverage: "partial",
          note: "Partial: the TRADE half is deep (the Tea Horse Road and Maritime Silk Road; grain trade and the first cities). Technological innovation as a driver is not taught head-on.",
        },
        {
          code: "HS.H2.3",
          text: "Evaluate the short- and long- term impacts of conflicts and their resolutions.",
          claimIds: ["bvc.opium-wars", "bvc.haitian-revolution", "history.solidarnosc-cold-war"],
          coverage: "full",
          note: "Three conflicts worked at real depth, each with both time horizons: the Opium Wars (and their long consequences for China), the Haitian Revolution (through the 1825 indemnity and Haiti's modern poverty), and martial-law Poland (through the 1989 negotiated resolution and its price).",
        },
        {
          code: "HS.H3.3",
          text: "Compare the ways in which economic philosophies influenced political, economic, and social developments.",
          claimIds: ["bvc.traditional-vs-market-economies", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: two comparisons are taught well — reciprocity economies against market economies (directly, at length), and a communist workers' state against the union that unmade it. Not a survey of economic philosophies.",
        },
        {
          code: "HS.H3.5",
          text: "Explain how different labor systems developed and affected societies over time.",
          claimIds: [
            "bvc.plantation-economy-resistance",
            "history.gilded-age-labor",
            "history.wagner-act",
            "history.nafta-usmca-labor",
          ],
          coverage: "full",
          note: "Labor systems over time is what this catalog does best: enslaved plantation labor and the resistance to it, industrial wage labor and the union movement, the Wagner Act's legal regime and who it excluded, and the NAFTA→USMCA cross-border labor order.",
        },
        {
          code: "HS.H4.1",
          text: "Examine how historically marginalized groups have affected change on political and social institutions.",
          claimIds: [
            "history.migration-civil-rights-politics",
            "history.labor-civil-rights",
            "bvc.plantation-economy-resistance",
            "history.harlem-renaissance-black-press",
          ],
          coverage: "full",
          note: "Taught as agency, not victimhood: the Black urban vote the Great Migration created, Randolph to Memphis, the Maroons and the Haitian Revolution, and the Black press as an engine of change.",
        },
        {
          code: "HS.H4.3",
          text: "Examine how access to information and technology has been used to influence society.",
          claimIds: ["history.harlem-renaissance-black-press", "bvc.media-fallacies-recurring"],
          coverage: "partial",
          note: "Partial: one deep case — the Chicago Defender, smuggled south, as information access that moved a million people — plus a media-literacy lesson in every BVC episode on how ads and campaigns use information to influence. Not a general information-technology history.",
        },
        // — Disciplinary Skills and Processes —
        {
          code: "HS.SP2.2",
          text: "Analyze the ways in which perspective shapes recorded history.",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.nearest-green-oral-history",
            "bvc.whose-voice-absence",
          ],
          coverage: "full",
          note: "This is the Whose Voice method: a planter's account read against Equiano and Mary Prince, the documentary record read against the oral record that preserved Nathan Green, and reading a text for what it leaves out.",
        },
        {
          code: "HS.SP3.3",
          text: "Analyze the relationship between primary sources and the secondary interpretations made from them including possible limitations in various kinds of evidence and differing secondary interpretations.",
          claimIds: ["history.migration-primary-sources", "bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Partial: the curriculum models this constantly — every Great Migration lesson points to its real archive, and a widely repeated unsupported statistic becomes a limitations-of-evidence lesson — but sustained student-run source analysis is prompted, not assessed.",
        },
        {
          code: "HS.SP3.6",
          text: "Construct and present arguments using precise and knowledgeable claims, with evidence from multiple sources, while acknowledging counterclaims and evidentiary weaknesses.",
          claimIds: ["bvc.coffee-project-argument-paper"],
          coverage: "partial",
          note: "Partial: the Coffee project's Option D requires exactly this, counterargument section included — but it is one optional project in one episode, so we will not claim a writing programme.",
        },
      ],
    },

    // ── ELA Grades 9-10 (2016) — Arizona's own codes, NOT Common Core ──────
    {
      id: "az-ela-910",
      subject: "English/Language Arts",
      name: "Arizona's English Language Arts Standards — 9-10th Grade",
      publisher: "Arizona Department of Education (ADE)",
      version: "2016 Final",
      fetchedOn: "2026-07-16",
      sourceUrl:
        "https://www.azed.gov/sites/default/files/2017/05/9-10th%20Grades%20ELA%202016%20Final.docx",
      adoption:
        "Arizona writes its own ELA standards; ADE's ELA page links these 2016 'Final' grade-band documents as current. The codes are Arizona's own — Arizona is not mapped through our shared Common Core file.",
      standards: [
        {
          code: "9-10.RI.6",
          text: "Determine an author's point of view or purpose in a text and analyze how an author uses rhetoric to advance that point of view or purpose.",
          claimIds: ["bvc.author-rhetoric-primary-texts"],
          coverage: "full",
        },
        {
          code: "9-10.RI.7",
          text: "Analyze various accounts of a subject told in different mediums (e.g., a person's life story in both print and multimedia), determining which details are emphasized in each account.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.nearest-green-oral-history"],
          coverage: "partial",
          note: "Partial: the accounts-against-accounts work is strong (Beckford against Equiano and Prince; the written record against the oral record on Nathan Green — genuinely different mediums). Multimedia accounts in the standard's modern sense are not analyzed.",
        },
        {
          code: "9-10.RI.8",
          text: "Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is valid and the evidence is relevant and sufficient; identify false statements and fallacious reasoning.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.reefer-madness-language-of-fear"],
          coverage: "full",
        },
      ],
    },

    // ── ELA Grades 11-12 (2016) ────────────────────────────────────────────
    {
      id: "az-ela-1112",
      subject: "English/Language Arts",
      name: "Arizona's English Language Arts Standards — 11-12th Grade",
      publisher: "Arizona Department of Education (ADE)",
      version: "2016 Final",
      fetchedOn: "2026-07-16",
      sourceUrl:
        "https://www.azed.gov/sites/default/files/2017/05/11-12th%20Grades%20ELA%202016%20Final.docx",
      adoption:
        "Arizona writes its own ELA standards; ADE's ELA page links these 2016 'Final' grade-band documents as current. The codes are Arizona's own — Arizona is not mapped through our shared Common Core file.",
      standards: [
        {
          code: "11-12.RI.6",
          text: "Determine an author's point of view or purpose in a text in which the rhetoric is particularly effective, analyzing how style and content contribute to the effectiveness of the text.",
          claimIds: ["bvc.rhetoric-power-persuasion"],
          coverage: "full",
        },
        {
          code: "11-12.RI.8",
          text: "Delineate and evaluate the rhetorical effectiveness of the authors' reasoning, premises, purpose, and argument in seminal U.S. and world texts.",
          claimIds: ["bvc.author-rhetoric-primary-texts", "bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "The primary texts worked are seminal and rhetorical by design: the abolitionist sugar-boycott pamphlets, Lin Zexu's letter to Queen Victoria, Torches of Freedom, Selling Prohibition.",
        },
        {
          code: "11-12.RI.7",
          text: "Integrate and evaluate multiple sources of information presented in different media or formats (e.g., visually, quantitatively) as well as in print in order to address a question or solve a problem.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: the curriculum models multi-source evaluation constantly and publishes a checkable bibliography, but the student is required to perform it only in the Coffee episode's project.",
        },
        {
          code: "11-12.SL.2",
          text: "Integrate multiple sources of information presented in diverse media and formats in order to make informed decisions and propose solutions, while evaluating the credibility and accuracy of each source and noting any discrepancies.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.nearest-green-oral-history"],
          coverage: "partial",
          note: "Partial: 'noting any discrepancies' is the Nathan Green lesson's whole point — the documentary and oral records disagree, and the episode teaches how to resolve that. But this is a speaking-and-listening standard, and the discussion half happens in a classroom we don't run.",
        },
        {
          code: "11-12.W.1",
          text: "Write arguments to support claims in an analysis of substantive topics or texts, using valid reasoning and relevant and sufficient evidence.",
          claimIds: ["bvc.coffee-project-argument-paper"],
          coverage: "partial",
          note: "Partial: the Coffee project's Option D asks for exactly this (a thesis, primary sources, and a required counterargument section). It is one optional project in one episode — not a writing programme. Transcribed from the standard's lead sentence; sub-parts a-e detail the same expectations.",
        },
        {
          code: "11-12.W.7",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded 2-3 week research project. Where it runs, it meets this standard squarely.",
        },
        {
          code: "11-12.W.8",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics", "bvc.coffee-project-research-process"],
          coverage: "partial",
          note: "Partial, same reason: the project demands authoritative sources and APA citation, but only the Coffee episode currently ships one.",
        },
      ],
    },

    // ── Science (2018, modified 12/22/21) — NOT NGSS ───────────────────────
    {
      id: "az-sci",
      subject: "Science",
      name: "Arizona Science Standards",
      publisher: "Arizona Department of Education (ADE)",
      version: "2018 · modified 12/22/21",
      fetchedOn: "2026-07-16",
      sourceUrl:
        "https://www.azed.gov/sites/default/files/2022/03/Complete%20Set%20of%20Standards%20Doc%203_29_22.pdf",
      adoption:
        "Arizona is NOT an NGSS state: its 2018 standards were built from the NRC Framework for K-12 Science Education with Arizona's own codes, so our shared NGSS file does not apply here — we checked the Arizona document itself. This is not a science course; we claim two Earth-science standards, partially, and say exactly why on each.",
      standards: [
        {
          code: "Essential HS.E1U3.14",
          text: "Engage in argument from evidence about the availability of natural resources, occurrence of natural hazards, changes in climate, and human activity and how they influence each other.",
          claimIds: ["bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Read this before relying on it: this is NOT a science course — no laboratory work, no investigations, no modelling. What it has is the standard's substance: resources, hazards, and climate shaping human activity (and back), with published evidence. The engage-in-argument performance happens only in the Coffee project. This contributes to Arizona's assessed essential standard; it does not discharge it.",
        },
        {
          code: "Plus HS+E.E1U3.9",
          text: "Construct an explanation, based on evidence, for how the availability of natural resources, occurrence of natural hazards, and changes in climate have influenced human activity.",
          claimIds: ["bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Arizona's plus standard for an Earth-and-space course, nearly word for word the content the curriculum supplies. Same honest limit as above: the lessons supply the evidence; the STUDENT constructs the explanation only in the Coffee project (Option B).",
        },
      ],
    },

    // ── Health (Approved Spring 2010, Grades 9-12 POs) ─────────────────────
    {
      id: "az-health",
      subject: "Health & Wellness",
      name: "Arizona Health Standards",
      publisher: "Arizona Department of Education — Health and Nutrition Services",
      version: "Approved Spring 2010 · Grades 9-12 performance objectives",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://cms.azed.gov/home/GetDocumentFile?id=596cfb0f3217e111c068a324",
      adoption:
        "Arizona's health standards (approved Spring 2010) are organized as Strands 1-8 with Concepts and grade-band Performance Objectives; the document prints no compact codes, so we cite each PO by its printed Strand/Concept/PO position, Grades 9-12 column.",
      standards: [
        {
          code: "Strand 1 · Concept 1 · PO 1 (9-12)",
          text: "Predict how healthy behaviors can affect health status.",
          claimIds: ["health.oral-health-behaviors", "health.tracker-behavior-metrics"],
          coverage: "partial",
          note: "Partial: the behavior-to-health link is taught rigorously in two domains — oral health (evidence graded honestly) and tracker-measured lifestyle metrics. Other behavior domains the strand spans (substance use, sexual health, safety) are not taught.",
        },
        {
          code: "Strand 3 · Concept 1 · PO 1 (9-12)",
          text: "Evaluate the validity of health information, products, and services.",
          claimIds: ["health.evaluate-dental-evidence", "health.health-product-claims"],
          coverage: "full",
          note: "Taught explicitly on both fronts the PO names: information (evidence hierarchies, Cochrane reviews, myths debunked) and products/services (how health and supplement marketing dodges the legal line, and how to verify a claim yourself).",
        },
        {
          code: "Strand 6 · Concept 2 · PO 1 (9-12)",
          text: "Develop a plan to attain a personal health goal that addresses strengths, needs, and risks.",
          claimIds: ["health.blueprint-goal-plan", "health.woop-goal-setting"],
          coverage: "full",
          note: "Both courses have the learner actually do this: one builds a data-grounded 90-day blueprint from five weeks of the learner's own data; the other writes the plan with mental contrasting plus implementation intentions — the obstacle (risk) step is the method's core.",
        },
        {
          code: "Strand 6 · Concept 2 · PO 2 (9-12)",
          text: "Implement strategies and monitor progress in achieving a personal health goal.",
          claimIds: ["health.n-of-1-implement-adjust", "health.woop-obstacle-strategies"],
          coverage: "full",
          note: "The implement-monitor-adjust cycle is the course method: daily logging, baselines and moving averages, and iterating the N-of-1 experiment on the learner's own data — with if-then plans as the implementation strategy.",
        },
      ],
    },

    // ── Physical Education (Adopted May 2015, High School) ─────────────────
    {
      id: "az-pe-hs",
      subject: "Physical Education",
      name: "Arizona Physical Education Standards — High School",
      publisher: "Arizona Department of Education (ADE)",
      version: "Adopted May 2015",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://cms.azed.gov/home/GetDocumentFile?id=577545cbaadebe0e1480214b",
      adoption:
        "Arizona's five PE standards with high-school outcomes (S1-S5, Level 1/Level 2). An online course cannot demonstrate motor performance, so we claim knowledge- and planning-side outcomes only — each entry says so explicitly.",
      standards: [
        {
          code: "S3.H2.L2",
          text: "Analyzes and applies technology and social media as tools for supporting a healthy, active lifestyle.",
          claimIds: ["pe.wearable-tech-activity"],
          coverage: "full",
          note: "This outcome is the course's literal premise: the learner uses a wearable (or just a phone) plus a daily log, every day for five weeks, to read and support their own activity habits.",
        },
        {
          code: "S3.H11.L2",
          text: "Develops and maintains a fitness portfolio (e.g., assessment scores, goals for improvement , plan of activities for improvement, log of activities being done to reach goals, timeline for improvement).",
          claimIds: ["pe.fitness-plan-blueprint"],
          coverage: "full",
          note: "The capstone IS this portfolio: baseline assessment, goals, an activity plan, a daily log, and a 90-day timeline, all built from the learner's own data. (Transcribed as printed, including the document's spacing around 'improvement ,'.)",
        },
        {
          code: "S3.H2.L1",
          text: "Evaluates the validity of claims made by commercial products and programs pertaining to fitness and a healthy, active lifestyle.",
          claimIds: ["health.health-product-claims"],
          coverage: "partial",
          note: "Partial: evaluating health-product and supplement marketing claims — and verifying a claim yourself — is taught well; fitness PROGRAMS specifically (gym plans, training systems) are not the worked examples.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Arizona mathematics standard.",
    },
    {
      heading: "Science — two partial claims, no more.",
      body: "Arizona is not an NGSS state; we verified that against the 2018 Arizona Science Standards document itself rather than assuming it. There is no laboratory work, no investigation, and no modelling in this catalog, so we claim exactly two Earth-science standards, partially, and explain the limit on each entry.",
    },
    {
      heading: "HS.C2.5 — the Arizona-rights comparison our Arizona course does not make.",
      body: "HS.C2.5 asks students to compare the rights guaranteed in the Arizona Constitution to those in the U.S. Constitution. Arizona Civics teaches Arizona's structure and direct democracy, not a clause-by-clause rights comparison — so despite being our Arizona flagship, it does not meet this standard and we do not claim it. HS.C2.6 (contributions of individuals and groups, including Arizonans) is likewise not taught.",
    },
    {
      heading: "Most of the Civics and Economics anchors we checked.",
      body: "HS.C1.1-C1.4 (civic virtues and deliberative processes as named content), HS.C2.2, HS.C3.3 (parties, interest groups, and media's impact on institutions — our media-literacy course is consumer protection, not political media analysis), HS.C3.4 (international order), HS.C4.4-C4.7 (public-policy decision analysis and in-classroom deliberation), all of HS.E1 (financial literacy), HS.E2 (scarcity and incentives as named concepts), HS.E3.1/E3.3/E3.4, HS.E4 (the domestic economy, fiscal and monetary policy), and HS.E5.2/E5.4 — the courses do not genuinely teach these, so we do not claim them.",
    },
    {
      heading: "Arizona's Economics anchors have no economic-systems standard.",
      body: "The curriculum contrasts traditional (reciprocity) and market economies directly and at length, but Arizona's high-school Economics anchors (HS.E1-E5) contain no economic-systems standard for it to meet — the closest homes are financial literacy and market mechanics. The gap is in the standards, not the lessons.",
    },
    {
      heading: "Arizona's 2016 ELA standards have no media-bias standard.",
      body: "Indiana's 9-10.CC.8 and 11-12.CC.8 (analyze bias in media; analyze media's impact on the public) are where our media-literacy work maps. Arizona's 2016 ELA standards contain no comparable standard — we searched the 9-10 and 11-12 documents. The closest, 11-12.SL.2, is about integrating sources, and we claim it for what it is. The gap is in the standards, not the lessons.",
    },
    {
      heading: "PE Standard 2 — no honest home for the sport-strategy courses.",
      body: "Arizona's high-school Standard 2 outcomes are specific: dance forms (S2.H1.L1, S2.H4), biomechanics vocabulary (S2.H2), practice planning (S2.H3), and the historical role of games in society (S2.H1.L2). None of them is the concepts-strategies-tactics knowledge our golf, tennis, football, pickleball, lacrosse, and croquet courses teach in depth, so — unlike Indiana, whose HSL1.2.1.A names exactly that — Arizona gets no Standard 2 claim. And every outcome that asks a student to DEMONSTRATE motor skill or participate is out of reach of an online course; we claim knowledge-side outcomes only.",
    },
    {
      heading: "Health strands beyond 1, 3, and 6.",
      body: "Strand 2 (analyzing influences), Strand 4 (interpersonal communication), Strand 5 (decision-making), Strand 7 (practicing health behaviors, as observed practice), and Strand 8 (advocacy) were checked against the Grades 9-12 performance objectives and are not genuinely taught by these courses. Strand 6 Concept 2 PO 3 (a long-term personal health plan) was considered and rejected: the blueprint is a 90-day plan, and we will not stretch '90 days' into 'long-term'.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Arizona's closest frameworks (Computer Science, World and Native Languages, Educational Technology) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Arizona claims this pass.",
    },
  ],
};
