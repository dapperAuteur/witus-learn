// ─────────────────────────────────────────────────────────────────────────────
// MONTANA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-mt` (Montana Civics: How Your State Government Works) was written FROM Montana's
// own official sources (leg.mt.gov, sosmt.gov, courts.mt.gov, the 1972 Constitution), so Montana's
// civics flagship gets its 1:1 state-civics course. Montana is BESPOKE across the board — its ELA,
// science, AND social-studies standards are all Montana's OWN documents, distinctively shaped by
// the Indian Education for All (IEFA) constitutional mandate (Article X, Section 1(2) of the 1972
// Constitution). NONE of the three is a blind adoption of a shared framework.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from OPI's own documents:
//   · ELA — BESPOKE, NOT aliased to the shared Common Core. Montana's ELA/Literacy standards keep
//     the Common Core code NUMBERING (bare codes: RH.11-12.6, WHST.11-12.7 — no "CCSS.ELA-Literacy"
//     namespace, and the document never prints "CCSS"), which at first looks like Michigan (alias
//     the shared file). BUT we compared the TEXT and Montana REWROTE the standards to weave IEFA
//     into them: RH.11-12.6 reads "Evaluate authors', incorporating American Indian authors,
//     differing points of view…"; RH.11-12.8 adds "Include texts by and about American Indians.";
//     RH.11-12.9 adds "including American Indian sources". The text therefore is NOT verbatim
//     Common Core, so aliasing the shared file would misrepresent Montana. We transcribe Montana's
//     OWN text verbatim instead (bespoke framework below).
//   · Science — BESPOKE. Montana's 2016 Science Content Standards are Montana's own document,
//     three-dimensional and NGSS-influenced but written as Montana Administrative Rule with no NGSS
//     performance-expectation codes (the standards are bulleted under content-area + grade-band
//     headers), and they too carry IEFA (e.g., "investigate and explain how some American Indian
//     tribes use scientific knowledge and practices in managing natural resources"). We do NOT
//     alias the shared NGSS; we cite Montana's own bulleted Earth-and-Space-Science standards.
//   · Social studies — BESPOKE. The Montana Content Standards for Social Studies (adopted by the
//     Board of Public Education November 5, 2020; effective July 1, 2021; ARM New Rule IX for
//     grades 9-12) are four content areas (civics and government, economics, geography, history)
//     and are saturated with IEFA — tribal sovereignty, American Indian history, and "including
//     American Indians" clauses throughout. The civics-and-government area anchors the Montana
//     flagship; economics/geography/history host the BVC catalog. (Note: an earlier brief dated
//     these "2016" — that is wrong; the operative social-studies standards are the 2020/2021 rules.)
//
// IEFA is the load-bearing distinction here (see the notClaimed list): Montana Civics teaches
// Montana's OWN state government but NOT tribal governments, tribal sovereignty, or American Indian
// history, so every tribal/American-Indian-specific standard and standard-clause is faithfully
// REJECTED, not stretched.
//
// Provenance (all fetched 2026-07-19). OPI's LinkClick download tickets are unstable, so documents
// were retrieved from the opifiles.mt.gov file host:
//   · Social studies — the official 2021 machine-readable spreadsheet "2021 SS for Web.xlsx"
//     (opifiles.mt.gov/Portals/182/Page Files/K-12 Content Standards & Revision/Social Studies/),
//     "9-12 Grades" sheet; effective date read from its "Intro" sheet.
//   · ELA — Montana Content Standards for ELA, Grades 11-12 (MCS-ELA-11-12th.pdf, same host/ELA
//     folder).
//   · Science — K-12 Montana Science Standards, "Montana-Science-Content-Standards-2016.pdf"
//     (same host/Science folder), Ninth-Twelfth Grades Earth and Space Science.
// `sourceUrl` on each framework is the canonical OPI standards page. Montana's social-studies rule
// enumerates content areas (1)-(4) and lettered sub-standards (a), (b), …; we cite each as
// "(area)(letter)". Typographic apostrophes are normalized to straight quotes — words are verbatim.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const MT_SS = "https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/Social-Studies-Standards";
const MT_ELA = "https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/English-Language-Arts-Literacy-Standards";
const MT_SCI = "https://opi.mt.gov/Educators/Teaching-Learning/K-12-Content-Standards/Science-Standards";

export const JURISDICTION: JurisdictionFile = {
  state: "MT",
  frameworks: [
    // ── Montana Content Standards for Social Studies — Grades 9-12 (New Rule IX) ──
    {
      id: "mt-social-studies",
      subject: "Social Studies",
      name: "Montana Content Standards for Social Studies — Grades 9-12 (Civics and Government, Economics, Geography, History)",
      publisher: "Montana Office of Public Instruction (OPI) / Board of Public Education",
      version: "Adopted November 5, 2020 · effective July 1, 2021 · Administrative Rules of Montana, New Rule IX (Grades 9-12)",
      fetchedOn: "2026-07-19",
      sourceUrl: MT_SS,
      adoption:
        "Montana's 2020/2021 social-studies rule states the grades 9-12 standards as four content areas — (1) civics and government, (2) economics, (3) geography, (4) history — each a lettered list of expectations. The civics-and-government area anchors the Montana Civics flagship; economics, geography, and history host the BVC commodity, colonial, and labor catalog. The standards are saturated with Indian Education for All (tribal sovereignty, American Indian history, “including American Indians” clauses); Montana Civics does not teach tribal governments or American Indian history, so those standards and clauses are rejected in the notClaimed list, not stretched. Codes are the rule's own “(area)(letter)”.",
      standards: [
        // — Civics and government (1) —
        {
          code: "Civics & Government, Grades 9-12 — (1)(a)",
          text: "analyze and evaluate the ideas and principles contained in the foundational documents of the United States, and explain how they establish a system of government that has powers, responsibilities, and limits",
          claimIds: ["civics.federal-articles-i-iii", "civics.separation-checks-balances", "civics.constitution-article-by-article"],
          coverage: "full",
          note: "The U.S. foundational documents and the system of powers, responsibilities, and limits they establish are taught article by article in the general civics courses — Articles I-III, separation of powers, and checks and balances. (This standard names the United States' documents; the Montana flagship's own-state material — the 1972 Constitution — maps under (1)(i) and (1)(j).)",
        },
        {
          code: "Civics & Government, Grades 9-12 — (1)(i)",
          text: "evaluate government procedures for making decisions at the local, state, national, tribal, and international levels",
          claimIds: ["civics.mt-direct-democracy", "civics.mt-legislature", "civics.mt-executive-courts", "civics.federal-bill-process"],
          coverage: "partial",
          note: "Partial: Montana's own decision-making procedures are taught in real depth — the biennial 90-day Legislature, how a bill becomes a Montana law (with the amendatory veto and the mail-poll override), the initiative and referendum, and the nonpartisan judiciary — alongside the full federal bill process. The tribal and international levels the standard also names are not taught.",
        },
        {
          code: "Civics & Government, Grades 9-12 — (1)(e)",
          text: "evaluate how citizens and institutions address social and political problems at the local, state, tribal, national, and/or international levels",
          claimIds: ["civics.mt-get-involved", "civics.mt-legislature", "civics.mt-local-government", "civics.show-up-every-level", "civics.track-a-bill"],
          coverage: "partial",
          note: "Partial: how Montanans and their institutions address problems is taught as practice — the citizen Legislature, Montana's county commissions and local boards, showing up and tracking a live bill, and using the initiative — at the local and state levels. The tribal, national, and international levels are not all covered.",
        },
        {
          code: "Civics & Government, Grades 9-12 — (1)(j)",
          text: "analyze historical, contemporary, and emerging means of changing societies, promoting the common good, and protecting rights",
          claimIds: ["civics.mt-direct-democracy", "civics.mt-constitution", "civics.ballot-measures-local-causes"],
          coverage: "partial",
          note: "Partial: the means of changing society are taught through Montana's strong direct democracy (initiative and referendum, used for term limits and more) and its 1972 constitution's rights that protect people (the clean-and-healthful-environment, privacy, and right-to-know guarantees). It is not a general survey of historical and emerging social-change movements.",
        },
        // — Economics (2) —
        {
          code: "Economics, Grades 9-12 — (2)(f)",
          text: "evaluate benefits, costs, and possible outcomes of government policies to influence market outcomes",
          claimIds: ["bvc.sugar-program-trade-barriers", "bvc.prohibition", "bvc.war-on-drugs-foreign-policy"],
          coverage: "full",
          note: "Government policies that shape markets are evaluated for benefits, costs, and outcomes in real depth: the U.S. sugar program's quotas and tariffs (stable prices vs. a multi-billion-dollar consumer cost), Prohibition, and the War on Drugs and its balloon effect.",
        },
        {
          code: "Economics, Grades 9-12 — (2)(c)",
          text: "analyze the ways in which pressures and incentives influence what is produced and distributed in a market system",
          claimIds: ["bvc.price-elasticity-demand", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: what gets produced and distributed is taught through real commodity markets — climate and soil deciding where crops can grow, supply shocks and inelastic demand moving prices — rather than as a general markets unit.",
        },
        {
          code: "Economics, Grades 9-12 — (2)(d)",
          text: "evaluate the extent to which competition among producers, among consumers, and among laborers exists in specific markets",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: competition in specific markets is evaluated along real commodity chains — who captures value, why producers stay poor in the commodity trap — but not as a systematic market-structure unit across producers, consumers, and laborers.",
        },
        // — Geography (3) —
        {
          code: "Geography, Grades 9-12 — (3)(b)",
          text: "use geographic data to analyze variations in the spatial patterns of cultural and environmental characteristics at multiple scales",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.coffee-project-mapping"],
          coverage: "full",
          note: "The Commodity Map is this standard: every episode pinned at its origin, the Growing Belts analyzed by latitude band and country, and the Coffee project has the student prepare maps and data tables of spatial patterns at multiple scales.",
        },
        {
          code: "Geography, Grades 9-12 — (3)(d)",
          text: "analyze relationships and interactions within and between human and physical systems to explain reciprocal influences that occur among them, including American Indians",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: reciprocal human-physical interaction is the curriculum's method — volcanic soil and altitude deciding what grows, climate change redrawing the growing belts. The standard's American Indian focus is not taught.",
        },
        {
          code: "Geography, Grades 9-12 — (3)(g)",
          text: "evaluate the influence of long-term climate variability on human migration and settlement patterns, resource use, and land uses at local-to-global scales",
          claimIds: ["bvc.climate-change-forecasts"],
          coverage: "partial",
          note: "Partial: published climate forecasts and their implications for growers, land use, and production regions are analyzed in depth (coffee, cacao, kava, beer). Climate-driven human migration is touched, not worked.",
        },
        // — History (4) —
        {
          code: "History, Grades 9-12 — (4)(h)",
          text: "analyze the ways in which the perspectives of those writing history shaped the history they produced",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "This is the Whose Voice method: a planter's euphemism and passive voice read against two first-person accounts by formerly enslaved writers, and reading a text for what its author leaves out — perspective shaping the record, taught directly.",
        },
        {
          code: "History, Grades 9-12 — (4)(i)",
          text: "evaluate how historiography is influenced by perspective and available historical sources",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "The Nathan Green lesson is historiography by name: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that — perspective and available sources shaping the history produced.",
        },
        {
          code: "History, Grades 9-12 — (4)(k)",
          text: "evaluate the limitations, biases, and credibility of various sources, especially regarding misinformation and stereotypes",
          claimIds: ["bvc.evaluate-claims-fallacies", "history.migration-primary-sources", "media.misleading-statistics"],
          coverage: "partial",
          note: "Partial: source credibility and limitations are worked constantly — a widely repeated unsupported statistic becomes a limitations-of-evidence lesson, and the media-literacy method reads claims for fallacy and misleading numbers. Stereotypes as a named focus are not taught.",
        },
        {
          code: "History, Grades 9-12 — (4)(b)",
          text: "analyze change and continuity in historical eras in US and world history",
          claimIds: ["history.gilded-age-labor", "history.wagner-act", "history.nafta-usmca-labor", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "Partial: change and continuity is traced for the arc of American labor (the Gilded Age through the Wagner Act to NAFTA/USMCA) and for how colonial cash-crop systems persist into the present — genuine, though not a general survey of eras.",
        },
        {
          code: "History, Grades 9-12 — (4)(c)",
          text: "identify ways in which people and groups exercise agency in difficult historical, contemporary, and tribal contexts",
          claimIds: ["bvc.plantation-economy-resistance", "history.labor-civil-rights", "history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: agency in difficult contexts is taught as the curriculum's throughline — the Maroons and plantation resistance, Randolph to Memphis, the Black press as an engine of change. The standard's tribal contexts are not taught.",
        },
        {
          code: "History, Grades 9-12 — (4)(d)",
          text: "analyze multiple, and complex causal factors that have shaped major events in US and world history, including American Indian history",
          claimIds: ["bvc.opium-wars", "bvc.haitian-revolution", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: complex causation is worked for major events — the Opium Wars, the Haitian Revolution, martial-law Poland — with intended and unintended consequences. The standard's American Indian history is not taught.",
        },
      ],
    },

    // ── Montana Content Standards for ELA and Literacy — Grades 11-12 (bespoke; IEFA-woven) ──
    {
      id: "mt-ela-1112",
      subject: "English/Language Arts",
      name: "Montana Content Standards for English Language Arts and Literacy — Grades 11-12 (Literacy in History/Social Studies and Writing)",
      publisher: "Montana Office of Public Instruction (OPI)",
      version: "Grades 11-12 · Montana Content Standards for ELA and Literacy",
      fetchedOn: "2026-07-19",
      sourceUrl: MT_ELA,
      adoption:
        "Montana keeps the Common Core code numbering (bare codes: RH.11-12.6, WHST.11-12.7 — no “CCSS” namespace) but REWROTE the standard text to weave in Indian Education for All, so these are Montana's own words, not verbatim Common Core, and are transcribed as printed rather than aliased to the shared file. Where Montana's IEFA additions (American Indian authors/sources/texts) are part of the standard, the catalog does not meet them, and the coverage note says so. We claim no mathematics standards.",
      standards: [
        {
          code: "RH.11-12.6",
          text: "Evaluate authors', incorporating American Indian authors, differing points of view on the same historical event or issue by assessing the authors' claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Partial because of Montana's IEFA addition: the standard's core — evaluating authors' differing points of view by assessing their claims, reasoning, and evidence — is the Whose Voice method's exact skill (a planter's account against Equiano and Mary Prince). But Montana's inserted requirement to incorporate American Indian authors is not met by these texts.",
        },
        {
          code: "RH.11-12.8",
          text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information. Include texts by and about American Indians.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "partial",
          note: "Partial: corroborating or challenging an author's premises, claims, and evidence with other information is taught directly. Montana's added sentence — include texts by and about American Indians — is not met.",
        },
        {
          code: "RH.11-12.9",
          text: "Integrate information from diverse sources, including American Indian sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "partial",
          note: "Partial: “noting discrepancies among sources” is the Nathan Green lesson's whole point — the documentary and oral records disagree and the episode resolves it. Montana's added requirement of American Indian sources is not met.",
        },
        {
          code: "RH.11-12.7",
          text: "Integrate and evaluate multiple sources of information presented in diverse formats and media (e.g., visually, quantitatively, as well as in words) in order to address a question or solve a problem.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: the curriculum models multi-source, multi-format evaluation constantly and publishes a checkable bibliography, but the student is required to perform it only in the Coffee episode's project.",
        },
        {
          code: "WHST.11-12.7",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded research project. Where it runs, it meets this standard squarely. (This standard is verbatim Common Core; Montana added no IEFA text here.)",
        },
      ],
    },

    // ── Montana Science Content Standards — Grades 9-12 Earth and Space Science (2016, bespoke) ──
    {
      id: "mt-science",
      subject: "Science",
      name: "Montana Science Content Standards — Grades 9-12 (Earth and Space Science)",
      publisher: "Montana Office of Public Instruction (OPI)",
      version: "2016 · Ninth through Twelfth Grades, Earth and Space Science",
      fetchedOn: "2026-07-19",
      sourceUrl: MT_SCI,
      adoption:
        "Montana's 2016 science standards are Montana's own document — three-dimensional and NGSS-influenced but written as Montana rule with no NGSS performance-expectation codes (the standards are bulleted under content-area and grade-band headers) — so we do NOT alias the shared NGSS; we cite Montana's own Earth-and-Space-Science bullets. This is not a science course; we claim two Earth-science standards, partially, and say why on each.",
      standards: [
        {
          code: "Earth and Space Science, Grades 9-12 — natural resources, hazards, and climate and human activity",
          text: "construct an explanation based on evidence for how the availability of natural resources, occurrence of natural hazards, and changes in climate have influenced human activity",
          claimIds: ["bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Read this before relying on it: this is NOT a science course — no laboratory work, no investigations, no modelling. What it has is the standard's substance: resource availability, hazards, and climate shaping human activity, with published evidence. The STUDENT constructs the explanation only in the Coffee project (Option B); this contributes to Montana's standard, it does not discharge it.",
        },
        {
          code: "Earth and Space Science, Grades 9-12 — evidence-based climate forecast",
          text: "analyze geoscience data and the results from global climate models to make an evidence-based forecast of the current rate of global or regional climate change and associated future impacts to Earth systems",
          claimIds: ["bvc.climate-change-forecasts"],
          coverage: "partial",
          note: "Partial: published climate forecasts and their implications for growing regions are analyzed in depth (coffee, cacao, kava, beer). The standard's own analysis of geoscience data and global climate models is not performed by the student — the lessons work from the published forecasts.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Indian Education for All — Montana's constitutional mandate, which this catalog does not teach.",
      body: "Montana's 1972 Constitution (Article X, Section 1(2)) commits the state, in its educational goals, to “the preservation of [American Indians'] cultural integrity,” and the Indian Education for All Act (1999) carries that into every subject. It is woven through the standards we mapped: civics-and-government (1)(g) (“explain the foundations and complexity of sovereignty for federally recognized tribes in Montana”), the “including American Indians / American Indian history / tribal contexts” clauses in economics (2)(a), geography (3)(d), and history (4)(c), (4)(d), (4)(e), and (4)(j), the American Indian author/source requirements added to the ELA literacy standards, and a science standard on American Indian tribes' management of natural resources. Montana Civics teaches Montana's OWN state government, and the BVC catalog teaches world, U.S., colonial, and labor history — but neither teaches tribal governments, tribal sovereignty, or American Indian history. So every tribal/American-Indian-specific standard and standard-clause is NOT claimed, and the IEFA-modified literacy standards we do claim are marked partial with the American Indian requirement called out. The gap is in the catalog, not the standards.",
    },
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Montana mathematics standard.",
    },
    {
      heading: "Montana's own state government has thin coverage in the 9-12 standards.",
      body: "Montana Civics teaches the 1972 Constitution (environment, privacy, right to know), the biennial 90-day citizen Legislature, the plural executive, the nonpartisan elected judiciary, the initiative and referendum, and the 56 counties — from Montana's own sources. But the grades 9-12 civics-and-government standards are federal, comparative, and tribal in emphasis; they contain no “describe your state's government structure” expectation at high school, so the flagship's Montana-structure lessons map only where (1)(e), (1)(i), and (1)(j) reach. The depth is in the course, not the standards.",
    },
    {
      heading: "Civics-and-government expectations we checked and rejected.",
      body: "Beyond the tribal-sovereignty standard (1)(g), we do not claim (1)(b) (constitutions, laws, treaties, and international agreements on relationships), (1)(c) (international agreements on world issues), (1)(d) (applying civic virtues when working with others, a disposition), (1)(f) (comparing the U.S. system to international systems), (1)(h) (deliberative processes), (1)(k) (market, media, and group influences on civic virtues — our media literacy is consumer protection, not political-media analysis), or (1)(l) (ensuring civil rights across levels) — the courses do not genuinely teach these.",
    },
    {
      heading: "Economics, geography, and history expectations we checked and rejected.",
      body: "Economics (2)(a) (IEFA), (2)(b), (2)(e), (2)(g)-(2)(i) (economic cycles, indicators, and monetary and fiscal policy) are not taught — the BVC economics is microeconomic and trade-focused. Geography (3)(a), (3)(c), (3)(e), (3)(f), and (3)(h) are not the worked material. History (4)(a), (4)(e) (IEFA), (4)(f), (4)(g), (4)(j) (IEFA), (4)(l), (4)(m), and (4)(n) (a sustained source-based argument-writing programme) are not genuinely taught; the Coffee project reaches (4)(m)/(4)(n) only as one optional project.",
    },
    {
      heading: "Science — two partial claims, no more.",
      body: "Montana's 2016 science standards are Montana's own, not the NGSS, and this catalog has no laboratory work, no investigation, and no modelling — so we claim exactly two Earth-and-Space-Science standards, partially, and explain the limit on each. The IEFA science standard (American Indian tribes' management of natural resources) is not taught.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Montana's closest frameworks (Computer Science, World Languages) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Montana claims this pass.",
    },
  ],
};
