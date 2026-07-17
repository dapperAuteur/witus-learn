// ─────────────────────────────────────────────────────────────────────────────
// FLORIDA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-fl` was written FROM Florida's own official sources (leg.state.fl.us,
// flsenate.gov, dos.fl.gov, flcourts.gov, and the Florida Constitution), so Florida's civics
// flagship gets its 1:1 state-civics course.
//
// Florida is a fully BESPOKE-standards state. It uses TWO home-grown systems, and has NEVER
// adopted the Common Core or NGSS:
//   · B.E.S.T. (Benchmarks for Excellent Student Thinking) — Florida's 2020 ELA and mathematics
//     standards, which replaced the Common-Core-derived "Florida Standards." Codes are Florida's
//     own (ELA.10.R.3.4 style).
//   · NGSSS (Next Generation Sunshine State Standards) — Florida's standards for science and
//     social studies. 🔴 NGSSS is NOT the Next Generation Science Standards (NGSS): despite the
//     similar name, NGSSS is Florida's own system and Florida is not an NGSS state.
//
// What Florida actually adopted (verified against the FLDOE-published standards text):
//   · Social studies — the NGSSS Social Studies standards, 2023 revision (Rule 6A-1.09401,
//     State Board of Education). High-school benchmarks are strand-coded: SS.912.CG (Civics &
//     Government, the 2021 civics revision carried into the 2023 document), SS.912.W (World
//     History), SS.912.A (American History), SS.912.AA (African American History, added in the
//     2023 revision), SS.912.G (Geography), SS.912.E (Economics).
//   · ELA — the 2020 B.E.S.T. ELA standards. Grade 10 (ELA.10) is used here as the representative
//     high-school grade; the codes are Florida's own.
//   · Science — Florida is NOT an NGSS state; it has its own NGSSS science standards (SC.912). We
//     did not fetch them this pass and the catalog has no laboratory science, so we make no
//     Florida science claim (fetch-or-don't-cite). Published in the notClaimed list below.
//
// The 2023 revision added the SS.912.AA African American History strand and was a politically live
// document. We cite its published benchmark text verbatim, dated (2023), and map only the
// benchmarks the catalog genuinely teaches — the transatlantic/triangular slave trade, the Great
// Migration, and the Harlem Renaissance — with no editorializing about the surrounding debate.
//
// Provenance — flrules.org and CPALMS are behind a bot wall our tooling cannot pass, and
// www.fldoe.org returns an Akamai "Access Denied" to automated fetches, so both standards
// documents were transcribed VERBATIM from Wayback Machine captures (snapshot IDs recorded),
// all fetched 2026-07-17:
//   · NGSSS Social Studies 2023 (fldoe .../6-4.pdf, Rule 6A-1.09401) —
//     Wayback snapshot 20260714113836 (2026-07-14).
//   · B.E.S.T. ELA 2020 (fldoe .../elabeststandardsfinal.pdf) —
//     Wayback snapshot 20250331002041 (2025-03-31).
// The sourceUrl on each framework is the live FLDOE document (it opens in a browser); the
// Wayback snapshot above is what we actually transcribed. Verbatim-or-nothing: every benchmark
// below was retrieved in full — none had to be excluded for want of exact text.
// (Three PDF-extraction artifacts were corrected to the true printed text: "responsibil ities" →
// "responsibilities", "fede ral" → "federal", "L' Ouverture" → "L'Ouverture".)
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const SS_2023 = "https://www.fldoe.org/core/fileparse.php/20653/urlt/6-4.pdf";
const BEST_ELA = "https://www.fldoe.org/core/fileparse.php/7539/urlt/elabeststandardsfinal.pdf";
const SS_ADOPTION_SUFFIX =
  "Transcribed verbatim from the FLDOE NGSSS Social Studies 2023 document (Rule 6A-1.09401), Wayback snapshot 20260714113836 (2026-07-14).";

export const JURISDICTION: JurisdictionFile = {
  state: "FL",
  frameworks: [
    // ── Civics & Government SS.912.CG (NGSSS 2023) ─────────────────────────
    {
      id: "fl-civics-government",
      subject: "Social Studies",
      name: "NGSSS Social Studies — Civics & Government, High School (SS.912.CG)",
      publisher: "Florida Department of Education (FLDOE) / State Board of Education",
      version: "NGSSS 2023 revision · Rule 6A-1.09401",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_2023,
      adoption:
        "Florida's high-school United States Government course uses the SS.912.CG (Civics & Government) benchmarks. They are overwhelmingly about the FEDERAL system; three name state and local government explicitly — CG.3.15, CG.3.10, and CG.2.9 — and that is where Florida Civics (the flagship, written from Florida's own sources) is mapped, alongside the general civics ladder. Florida's dedicated state-and-local civics is concentrated in Grade 7 Civics (SS.7.CG, middle school), which we have not fetched; see notClaimed. " +
        SS_ADOPTION_SUFFIX,
      standards: [
        {
          code: "SS.912.CG.1.4",
          text: "Analyze how the ideals and principles expressed in the founding documents shape America as a constitutional republic.",
          claimIds: ["civics.constitution-article-by-article", "civics.articles-to-constitution"],
          coverage: "full",
        },
        {
          code: "SS.912.CG.1.5",
          text: "Explain how the U.S. Constitution and its amendments uphold the following political principles: checks and balances, consent of the governed, democracy, due process of law, federalism, individual rights, limited government, representative government, republicanism, rule of law and separation of powers.",
          claimIds: ["civics.separation-checks-balances", "civics.federalism-why-split-power"],
          coverage: "full",
          note: "Separation of powers, checks and balances, and federalism are taught head-on, and a dedicated course works why power is divided between state and nation.",
        },
        {
          code: "SS.912.CG.2.2",
          text: "Explain the importance of political and civic participation to the success of the United States' constitutional republic.",
          claimIds: ["civics.campaign-help", "civics.show-up-every-level", "civics.fl-get-involved"],
          coverage: "full",
        },
        {
          code: "SS.912.CG.2.3",
          text: "Explain the responsibilities of citizens at the local, state and national levels.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service"],
          coverage: "full",
          note: "Responsibilities are taught as practices — voting, jury service (an entire course), staying informed, paying taxes — at every level.",
        },
        {
          code: "SS.912.CG.2.7",
          text: "Analyze the impact of civic engagement as a means of preserving or reforming institutions.",
          claimIds: ["civics.track-a-bill", "civics.fl-get-involved", "civics.ballot-measures-local-causes"],
          coverage: "full",
          note: "Civic engagement is taught as practice: tracking a live bill, helping ballot measures and local causes, and showing up to reform the institutions you live under.",
        },
        {
          code: "SS.912.CG.2.9",
          text: "Explain the process and procedures of elections at the state and national levels.",
          claimIds: ["civics.fl-elections", "civics.election-mechanics", "civics.electoral-college"],
          coverage: "partial",
          note: "National election procedures are taught end to end (registration, primaries, voting methods, counting, the Electoral College) and Florida's own procedures are taught as Florida's (closed primaries, voter ID, the SB 90/SB 524 mail-ballot rules, the 29-day deadline). What is not attempted is a comprehensive survey of every other state's procedures.",
        },
        {
          code: "SS.912.CG.2.11",
          text: "Evaluate political communication for bias, factual accuracy, omission and emotional appeal.",
          claimIds: [
            "bvc.reading-ads-for-omission",
            "bvc.source-evaluation-modelled",
            "bvc.media-fallacies-recurring",
            "bvc.evaluate-claims-fallacies",
          ],
          coverage: "full",
          note: "Reading a message for bias, omission, and emotional appeal is the media-literacy method run in every episode — ads, labels, and campaign language read for what they leave out, and the fallacies named.",
        },
        {
          code: "SS.912.CG.3.2",
          text: "Explain how the U.S. Constitution safeguards and limits individual rights.",
          claimIds: ["civics.bill-of-rights-origin", "rights.limits-on-rights"],
          coverage: "full",
          note: "Both halves: the Bill of Rights as a document, and when government may constitutionally limit rights (time-place-manner, incitement, school speech, reasonable suspicion).",
        },
        {
          code: "SS.912.CG.3.3",
          text: "Analyze the structures, functions and processes of the legislative branch as described in Article I of the U.S. Constitution.",
          claimIds: ["civics.federal-bill-process", "civics.federal-articles-i-iii"],
          coverage: "full",
        },
        {
          code: "SS.912.CG.3.6",
          text: "Explain expressed, implied, concurrent and reserved powers in the U.S. Constitution.",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "The powers taxonomy is taught by name — expressed/enumerated, implied (Necessary and Proper Clause), concurrent, and reserved (Tenth Amendment) — with McCulloch v. Maryland.",
        },
        {
          code: "SS.912.CG.3.7",
          text: "Analyze the structures, functions and processes of the judicial branch as described in Article III of the U.S. Constitution.",
          claimIds: ["civics.federal-judiciary-structure"],
          coverage: "full",
        },
        {
          code: "SS.912.CG.3.8",
          text: "Describe the purpose and function of judicial review in the American constitutional government.",
          claimIds: ["civics.judicial-review-marbury"],
          coverage: "full",
          note: "Judicial review is taught by name, through Marbury v. Madison.",
        },
        {
          code: "SS.912.CG.3.10",
          text: "Analyze the levels and responsibilities of state and federal courts.",
          claimIds: ["civics.fl-courts", "civics.federal-judiciary-structure"],
          coverage: "partial",
          note: "The federal court system and Florida's own courts are both taught: Florida's split selection — merit selection plus retention for the appellate courts, nonpartisan elections for the trial courts. A full analysis of every level of both systems is not attempted.",
        },
        {
          code: "SS.912.CG.3.11",
          text: "Evaluate how landmark Supreme Court decisions affect law, liberty and the interpretation of the U.S. Constitution.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent"],
          coverage: "partial",
          note: "Our Know Your Rights course teaches landmark rulings as applicable rules — Tinker, Brandenburg, Mapp, Terry, T.L.O., Riley, Carpenter — and how precedent expands rights. Mapp v. Ohio is the direct overlap; the benchmark's own case list (Marbury, McCulloch, Dred Scott, Plessy, Brown, Gideon, Miranda, Korematsu, In re Gault, Nixon, Bakke, Hazelwood, Heller) is largely different.",
        },
        {
          code: "SS.912.CG.3.12",
          text: "Analyze the concept of federalism in the United States and its role in establishing the relationship between the state and national governments.",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy"],
          coverage: "full",
        },
        {
          code: "SS.912.CG.3.15",
          text: "Explain how citizens are affected by the local, state and national governments.",
          claimIds: [
            "civics.fl-state-structure",
            "civics.fl-local-government",
            "civics.local-government-layers",
            "civics.three-branches-federal",
          ],
          coverage: "partial",
          note: "This is the flagship's home in the US Government course: Florida's own state structure (the 1968 constitution, the plural executive of Governor plus Cabinet, the CRC and 60% amendment rule) and Florida local government (67 counties, charter vs. non-charter, no townships) are taught in depth, alongside the federal branches. But the standard asks how citizens are affected across all three levels systematically, which is not fully assembled here.",
        },
      ],
    },

    // ── World History SS.912.W (NGSSS 2023) ────────────────────────────────
    {
      id: "fl-world-history",
      subject: "Social Studies",
      name: "NGSSS Social Studies — World History, High School (SS.912.W)",
      publisher: "Florida Department of Education (FLDOE) / State Board of Education",
      version: "NGSSS 2023 revision · Rule 6A-1.09401",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_2023,
      adoption:
        "World History is where the BVC series' colonial and commodity history maps — the Columbian Exchange, the trans-Atlantic slave trade, European imperialism, 19th-century China, and the fall of communism. " +
        SS_ADOPTION_SUFFIX,
      standards: [
        {
          code: "SS.912.W.4.12",
          text: "Evaluate the scope and impact of the Columbian Exchange on Europe, Africa, Asia, and the Americas.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.agricultural-hearths"],
          coverage: "full",
          note: "The Columbian Exchange is taught directly through the plants that moved — cacao, sugar, and the exchange of crops among the New World and the Old.",
        },
        {
          code: "SS.912.W.4.15",
          text: "Explain the origins, developments, and impact of the trans-Atlantic slave trade between West Africa and the Americas.",
          claimIds: [
            "bvc.conquest-columbian-exchange",
            "bvc.plantation-economy-resistance",
            "bvc.middle-passage-primary-sources",
            "bvc.imperialism-africa-asia-oceania",
          ],
          coverage: "full",
          note: "The trans-Atlantic slave trade, the triangular trade, the Middle Passage, and the plantation economies it fed — with first-person accounts by formerly enslaved writers — are taught in depth.",
        },
        {
          code: "SS.912.W.6.6",
          text: "Analyze the causes and effects of imperialism.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.colonialism-persists-today"],
          coverage: "full",
          note: "European imperialism upon indigenous peoples in Africa, Asia, and Oceania is analyzed through the commodities it moved, and how colonial patterns persist today.",
        },
        {
          code: "SS.912.W.6.7",
          text: "Identify major events in China during the 19th and early 20th centuries related to imperialism.",
          claimIds: ["bvc.opium-wars"],
          coverage: "full",
          note: "The Opium Wars — the defining event of 19th-century imperialism in China — are taught in depth, including Lin Zexu's letter and the wars' long consequences for China.",
        },
        {
          code: "SS.912.W.5.7",
          text: "Describe the causes and effects of 19th Latin American and Caribbean independence movements led by people including Bolivar, de San Martin, and L'Ouverture.",
          claimIds: ["bvc.haitian-revolution"],
          coverage: "partial",
          note: "The Haitian Revolution led by Toussaint L'Ouverture is taught in depth — directly shaped by the French Revolution — including the 1825 indemnity and its consequences for Haiti today. Bolívar and de San Martín, the standard's other leaders, are not the focus.",
        },
        {
          code: "SS.912.W.8.5",
          text: "Identify the factors that led to the decline and fall of communism in the Soviet Union and Eastern Europe.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Poland's Solidarność is worked in real depth — a communist workers' state undone by the union it could not absorb, the 1989 negotiated end, and its shock-therapy price. The standard spans the whole Eastern Bloc and the Soviet Union, which we do not survey.",
        },
        {
          code: "SS.912.W.9.6",
          text: "Analyze the rise of regional trade blocs such as the European Union and NAFTA, and predict the impact of increased globalization in the 20th and 21st centuries.",
          claimIds: ["history.nafta-usmca-labor", "bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "partial",
          note: "NAFTA, which the standard names, is taught from the labor side through its USMCA successor, and globalization's winners and losers are traced through real commodity chains. The European Union and the standard's predictive task are not covered.",
        },
      ],
    },

    // ── American History SS.912.A (NGSSS 2023) ─────────────────────────────
    {
      id: "fl-american-history",
      subject: "Social Studies",
      name: "NGSSS Social Studies — American History, High School (SS.912.A)",
      publisher: "Florida Department of Education (FLDOE) / State Board of Education",
      version: "NGSSS 2023 revision · Rule 6A-1.09401",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_2023,
      adoption:
        "American History is where the catalog's labor and civil-rights history maps — the labor movement of the industrial era, the civil-rights freedom movements, and the U.S. in the global economy. " +
        SS_ADOPTION_SUFFIX,
      standards: [
        {
          code: "SS.912.A.3.9",
          text: "Examine causes, course, and consequences of the labor movement in the late 19th and early 20th centuries.",
          claimIds: ["history.gilded-age-labor", "history.triangle-fire-debs"],
          coverage: "full",
          note: "This is the History of Unions course's core era: the Knights and the AFL, Haymarket, Homestead, Pullman, Eugene Debs, and the 1911 Triangle fire.",
        },
        {
          code: "SS.912.A.5.7",
          text: "Examine the freedom movements that advocated civil rights for African Americans, Latinos, Asians, and women.",
          claimIds: ["history.migration-civil-rights-politics", "history.labor-civil-rights"],
          coverage: "partial",
          note: "The Black urban vote the Great Migration created and the labor half of the civil-rights movement (Randolph to Memphis) are taught as agency and political change. The Latino, Asian, and women's freedom movements the standard also names are not this catalog's subject.",
        },
        {
          code: "SS.912.A.7.5",
          text: "Compare nonviolent and violent approaches utilized by groups (African Americans, women, Native Americans, Hispanics) to achieve civil rights.",
          claimIds: ["history.labor-civil-rights"],
          coverage: "partial",
          note: "The labor half of the civil-rights movement — Randolph to Memphis, and unions' own colour bar — is taught. A full comparison of nonviolent and violent approaches across all the groups the standard names is not attempted.",
        },
        {
          code: "SS.912.A.7.14",
          text: "Review the role of the United States as a participant in the global economy (trade agreements, international competition, impact on American labor, environmental concerns).",
          claimIds: ["history.nafta-usmca-labor"],
          coverage: "partial",
          note: "The impact on American labor of a major trade agreement, which the standard names, is taught in depth — NAFTA→USMCA, the Rapid Response Mechanism and its limits. The broader survey of U.S. participation in the global economy is not.",
        },
      ],
    },

    // ── African American History SS.912.AA (NGSSS 2023 — added in the 2023 revision) ──
    {
      id: "fl-african-american-history",
      subject: "Social Studies",
      name: "NGSSS Social Studies — African American History, High School (SS.912.AA)",
      publisher: "Florida Department of Education (FLDOE) / State Board of Education",
      version: "NGSSS 2023 revision (strand added 2023) · Rule 6A-1.09401",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_2023,
      adoption:
        "The SS.912.AA African American History strand was added in Florida's 2023 social studies revision. We cite its published benchmark text verbatim and map only the benchmarks the catalog genuinely teaches — the triangular/trans-Atlantic slave trade, the Great Migration, and the Harlem Renaissance. " +
        SS_ADOPTION_SUFFIX,
      standards: [
        {
          code: "SS.912.AA.1.3",
          text: "Analyze the reciprocal roles of the Triangular Trade routes between Africa and the western hemisphere, Africa and Europe, and Europe and the western hemisphere.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.plantation-economy-resistance"],
          coverage: "full",
          note: "The triangular trade and the Middle Passage are taught directly through the sugar and rum commodity chains that ran it.",
        },
        {
          code: "SS.912.AA.3.9",
          text: "Examine the various factors that led to and the consequences of the Great Migration.",
          claimIds: [
            "history.migration-streams-arrival",
            "history.jim-crow-and-long-shadow",
            "history.migration-civil-rights-politics",
          ],
          coverage: "full",
          note: "The Great Migration is an entire course: the Jim Crow South people fled, the routes and arrival cities, the Black press that pulled them north, and the urban political power it created.",
        },
        {
          code: "SS.912.AA.2.13",
          text: "Explain how the rise of cash crops accelerated the growth of the domestic slave trade in the United States.",
          claimIds: ["bvc.plantation-economy-resistance", "bvc.sugar-industry-impact"],
          coverage: "partial",
          note: "The cash-crop plantation economy and its dependence on enslaved labor is taught in depth through sugar and rum. The specifically DOMESTIC (interstate) U.S. slave trade the benchmark names is not the catalog's focus — its lens is the Atlantic and Caribbean plantation world.",
        },
        {
          code: "SS.912.AA.3.10",
          text: "Describe the Harlem Renaissance and examine contributions from African American artists, musicians and writers and their lasting influence on American culture.",
          claimIds: ["history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "The Harlem Renaissance and the New Negro, and the Black press as an engine of the Migration, are taught. A survey of the specific artists, musicians, and writers the benchmark asks for is touched, not completed.",
        },
      ],
    },

    // ── Geography SS.912.G (NGSSS 2023) ────────────────────────────────────
    {
      id: "fl-geography",
      subject: "Social Studies",
      name: "NGSSS Social Studies — Geography, High School (SS.912.G)",
      publisher: "Florida Department of Education (FLDOE) / State Board of Education",
      version: "NGSSS 2023 revision · Rule 6A-1.09401",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_2023,
      adoption:
        "Florida's high-school Geography strand is compact and tool-focused. Three benchmarks host the BVC Commodity Map's climate-and-place, migration, and globalization work; the resource-and-economic geography the map does best is carried more by the Economics and World History strands here. " +
        SS_ADOPTION_SUFFIX,
      standards: [
        {
          code: "SS.912.G.3.2",
          text: "Use geographic terms and tools to explain how weather and climate influence the natural character of a place.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.climate-resources-shape-humans"],
          coverage: "full",
          note: "This is the Growing Belts map: climate and latitude deciding where each commodity can grow, and climate change redrawing that map.",
        },
        {
          code: "SS.912.G.4.2",
          text: "Use geographic terms and tools to analyze the push/pull factors contributing to human migration within and among places.",
          claimIds: ["history.migration-streams-arrival"],
          coverage: "partial",
          note: "Taught at case-study depth through the Great Migration — the push of the Jim Crow South and the pull of the Black press and northern jobs. Not a general treatment of migration.",
        },
        {
          code: "SS.912.G.4.4",
          text: "Use geographic terms and tools to analyze case studies of issues in globalization.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Globalization is analyzed through real commodity case studies — who captures value along the chain, and the commodity trap — rather than as a general survey.",
        },
      ],
    },

    // ── Economics SS.912.E (NGSSS 2023) ────────────────────────────────────
    {
      id: "fl-economics",
      subject: "Social Studies",
      name: "NGSSS Social Studies — Economics, High School (SS.912.E)",
      publisher: "Florida Department of Education (FLDOE) / State Board of Education",
      version: "NGSSS 2023 revision · Rule 6A-1.09401",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_2023,
      adoption:
        "The BVC series supplies three Economics benchmarks through real commodity markets — economic systems, price behavior, and trade barriers. " +
        SS_ADOPTION_SUFFIX,
      standards: [
        {
          code: "SS.912.E.1.3",
          text: "Compare how the various economic systems (traditional, market, command, mixed) answer the questions: (1) What to produce?; (2) How to produce?; and (3) For whom to produce?",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "full",
          note: "Traditional (reciprocity) and market economies — both named in the benchmark — are contrasted directly and at length through the kava and forest-wisdom episodes.",
        },
        {
          code: "SS.912.E.3.3",
          text: "Discuss the effect of barriers to trade and why nations sometimes erect barriers to trade or establish free trade zones.",
          claimIds: [
            "bvc.sugar-program-trade-barriers",
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
          ],
          coverage: "full",
          note: "The U.S. sugar program's import quotas, tariffs, and price supports are worked in detail as a trade barrier, with its consumer cost, alongside the benefits and costs of trade along real chains.",
        },
        {
          code: "SS.912.E.1.4",
          text: "Define supply, demand, quantity supplied, and quantity demanded; graphically illustrate situations that would cause changes in each, and demonstrate how the equilibrium price of a product is determined by the interaction of supply and demand in the market place.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Price elasticity of demand is taught explicitly — inelastic coffee demand absorbing a sharp price spike — but this is one concept in context, not the full supply-and-demand graphing the benchmark requires.",
        },
      ],
    },

    // ── B.E.S.T. ELA — Grade 10 (2020) ─────────────────────────────────────
    {
      id: "fl-best-ela-10",
      subject: "English/Language Arts",
      name: "B.E.S.T. English Language Arts — Grade 10 (ELA.10)",
      publisher: "Florida Department of Education (FLDOE) / State Board of Education",
      version: "B.E.S.T. Standards · 2020",
      fetchedOn: "2026-07-17",
      sourceUrl: BEST_ELA,
      adoption:
        "Florida's 2020 B.E.S.T. ELA standards replaced the Common-Core-derived Florida Standards; the codes are Florida's own. Grade 10 (ELA.10) is used here as the representative high-school grade — its reading, rhetoric, and communication benchmarks are where the catalog's media literacy, rhetoric, argument, and research work maps. Other grades carry parallel benchmarks; see notClaimed. Transcribed verbatim from the FLDOE B.E.S.T. ELA document, Wayback snapshot 20250331002041 (2025-03-31).",
      standards: [
        {
          code: "ELA.10.R.3.4",
          text: "Analyze an author's use of rhetoric in a text.",
          claimIds: [
            "bvc.rhetoric-power-persuasion",
            "bvc.evaluate-claims-fallacies",
            "bvc.reefer-madness-language-of-fear",
          ],
          coverage: "full",
          note: "Rhetoric is analyzed in real primary texts — Lin Zexu's letter, the abolitionist sugar-boycott pamphlets, Torches of Freedom, and fear-based drug-policy media.",
        },
        {
          code: "ELA.10.R.2.3",
          text: "Analyze an author's choices in establishing and achieving purpose(s) in historical American speeches and essays.",
          claimIds: ["bvc.author-rhetoric-primary-texts"],
          coverage: "full",
          note: "Author purpose and rhetoric are analyzed in effective historical American texts — the abolitionist sugar boycott, Torches of Freedom, Selling Prohibition.",
        },
        {
          code: "ELA.10.R.2.4",
          text: "Compare the development of two opposing arguments on the same topic, evaluating the effectiveness and validity of the claims, and analyzing the ways in which the authors use the same information to achieve different ends.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "The Whose Voice method is exactly this — a planter's account read against Equiano and Mary Prince, two ways of seeing the same bean — with the validity of each claim assessed.",
        },
        {
          code: "ELA.10.C.1.3",
          text: "Write to argue a position, supporting claims using logical reasoning and credible evidence from multiple sources, rebutting counterclaims with relevant evidence, using a logical organizational structure, elaboration, purposeful transitions, and maintaining a formal and objective tone.",
          claimIds: ["bvc.coffee-project-argument-paper"],
          coverage: "partial",
          note: "The Coffee project's Option D asks for exactly this — a thesis, credible sources, and a required counterargument section (rebutting counterclaims). It is one optional project in one episode, not a writing programme.",
        },
        {
          code: "ELA.10.C.4.1",
          text: "Conduct research to answer a question, refining the scope of the question to align with findings and synthesizing information from multiple reliable and valid sources.",
          claimIds: [
            "bvc.coffee-project-synthesis",
            "bvc.coffee-project-research-process",
            "bvc.coffee-project-sources-ethics",
          ],
          coverage: "partial",
          note: "The Coffee project is a graded 2-3 week research project that synthesizes multiple authoritative sources with an APA bibliography. Only the Coffee episode currently ships one, so we claim it for what it is.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Florida B.E.S.T. mathematics standard and no NGSSS mathematics standard.",
    },
    {
      heading: "Science — Florida is NOT an NGSS state (NGSSS ≠ NGSS), and we did not fetch its science standards.",
      body: "Despite the similar name, the Next Generation Sunshine State Standards are Florida's own system, not the Next Generation Science Standards. Florida's science standards (SC.912) are bespoke. This catalog has no laboratory work, and we did not fetch the Florida science standards this pass, so — by our fetch-or-don't-cite rule — Florida gets no science claim.",
    },
    {
      heading: "Grade 7 Civics (SS.7.CG) — where the flagship's fullest home lives, not yet fetched.",
      body: "Florida concentrates its dedicated state-and-local civics instruction in the middle-school Grade 7 Civics course (SS.7.CG), which culminates in the statewide Civic Literacy assessment. That is the natural 1:1 home for Florida Civics. We mapped the flagship into the high-school Civics & Government benchmarks that name state and local government (CG.3.15, CG.3.10, CG.2.9) this pass, honestly as partial, and defer SS.7.CG to a later pass rather than cite standards we have not read.",
    },
    {
      heading: "Florida's distinctive direct democracy has no benchmark of its own.",
      body: "Central flagship lessons — the once-every-20-years Constitution Revision Commission, the citizen-initiative petition, and the 60% supermajority any amendment needs — are what make Florida's constitution unusual. But the SS.912.CG benchmarks are federal-focused and contain no state-constitution-amendment or initiative/referendum benchmark, so those lessons map only obliquely (via CG.2.7, civic engagement). The gap is in the standards, not the lessons.",
    },
    {
      heading: "Most of the Civics & Government federal-heavy standards.",
      body: "CG.1.1-1.3 (founding philosophy, Enlightenment, and the Federalist Papers as named content), CG.2.1 (constitutional provisions on citizenship), CG.2.4-2.6 (balancing rights, government restrictions, and the expansion of civil rights — touched only through history), CG.2.8/2.10/2.12/2.13 (parties, interest groups, media, and voter turnout as political-science content — our media literacy is consumer protection, not political-media analysis), CG.3.1 (ideologies that conflict with democracy), CG.3.4-3.5 (the executive branch and regulatory agencies), CG.3.9/3.13/3.14 (judges vs. other officials, interstate disputes, judicial decision-making), and CG.4.x (U.S. foreign policy) — the courses do not genuinely teach these, so we do not claim them.",
    },
    {
      heading: "The landmark-cases overlap is thin, and we say so.",
      body: "CG.3.11 enumerates Marbury, McCulloch, Dred Scott, Plessy, Brown, Gideon, Miranda, Korematsu, Mapp, In re Gault, U.S. v. Nixon, Bakke, Hazelwood, and Heller. Our Know Your Rights course teaches Tinker, Brandenburg, Mapp, Terry, T.L.O., Riley, and Carpenter as applicable rules — Mapp is the only direct overlap. We claim the case-application skill as partial and do not pretend to cover this benchmark's specific case list.",
    },
    {
      heading: "The African American History strand is claimed only where the catalog genuinely teaches it.",
      body: "SS.912.AA is a 100+ benchmark strand spanning African kingdoms and the origins of slavery, the full arc of enslavement and resistance, Reconstruction, and the entire civil-rights and post-1968 story. We claim four benchmarks — the triangular/trans-Atlantic slave trade (AA.1.3), cash crops and slavery (AA.2.13, partial), the Great Migration (AA.3.9), and the Harlem Renaissance (AA.3.10, partial) — because the catalog's commodity, slave-trade, and Great Migration content genuinely covers them. The rest of the strand is not taught here, and we do not stretch to claim it.",
    },
    {
      heading: "The rest of World History, American History, Geography, and Economics we checked.",
      body: "We read the high-school benchmarks of each strand and claim only what the catalog genuinely teaches. The surveys of the ancient and classical world, the World Wars, the American political eras, monetary and fiscal policy, market structures, and the many tool-and-skill benchmarks not listed above are not claimed. The reject list is the evidence the map was not padded.",
    },
    {
      heading: "B.E.S.T. ELA grades 6-9 and 11-12.",
      body: "We mapped Grade 10 (ELA.10) as the representative high-school grade; grades 6-9 and 11-12 carry parallel reading, rhetoric, and communication benchmarks we did not separately transcribe. And the B.E.S.T. ELA composition benchmarks are met only by the Coffee project — one optional project in one episode — so the argument and research standards are claimed as partial, never a full writing programme.",
    },
  ],
};
