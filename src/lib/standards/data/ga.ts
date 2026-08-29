// ─────────────────────────────────────────────────────────────────────────────
// GEORGIA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ga` was written FROM Georgia's own official sources (the 1983 Georgia Constitution
// at sos.ga.gov, the General Assembly at legis.ga.gov, the Secretary of State, and the Judicial
// Branch). Like Ohio, Georgia's high-school American Government/Civics standard NAMES Georgia's own
// government — SSCG17 "the organization and powers of state and local government described in the
// Georgia Constitution" — so the flagship's structure lessons have a genuine home.
//
// WHICH GEORGIA STANDARDS ARE CURRENTLY IN FORCE (verified this pass, because Georgia is mid-
// transition and it matters):
//   · Social studies — the Georgia Standards of Excellence (GSE), Approved June 9, 2016 and
//     "Updated November 2, 2023" (the date printed on every page of the document we read). Georgia
//     has NOT replaced its social-studies GSE the way it replaced math and ELA, so the GSE is
//     current. High-school courses carry their own code prefixes: SSCG (American Government/Civics),
//     SSWH (World History), SSUSH (United States History), SSWG (World Geography), and the economics
//     course (SSEF/SSEMI/SSEMA/SSEIN/SSEPF). Each course is its own framework here.
//   · ELA — BESPOKE and NEW. Georgia's K-12 English Language Arts Standards (Approved May 2023)
//     took effect for SY2025-2026, REPLACING the Common Core-derived GSE ELA ("Georgia eliminates
//     the final remnants of Common Core"). We cite the CURRENT standards, not the retired GSE. They
//     are Georgia's own, restructured into Domains → Big Ideas → Standards (e.g., 9-12.T.C.2), so
//     Georgia is NOT mapped through our shared Common Core file.
//   · Science — Georgia Standards of Excellence for Science: Georgia's OWN, NOT NGSS (verified).
//     We did not fetch/transcribe them this pass; fetch-or-don't-cite, so Georgia carries no science
//     claim here and the climate/resource content maps to Georgia social studies instead (SSWG1,
//     SSWG5, SSWH16). See notClaimed.
//
// Provenance: gadoe.org / lor2.gadoe.org refuse connections from our tooling (ECONNREFUSED) and
// georgiastandards.org 302-redirects every document to its "sunset" page, and web.archive.org was
// unavailable this pass, so each Georgia document was transcribed from a faithful DISTRICT-MIRRORED
// copy of the state's own PDF (Cobb County's media library; identical GSE title page "Social Studies
// Georgia Standards of Excellence ... Approved June 9, 2016 • Updated November 2, 2023"), all fetched
// 2026-07-17. `sourceUrl` on each framework is the canonical Georgia DOE document a teacher can open
// in a browser.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "GA",
  frameworks: [
    // ── Social Studies: American Government/Civics (GSE, SSCG) ─────────────
    {
      id: "ga-sscg",
      subject: "Social Studies",
      name: "Georgia Standards of Excellence — American Government/Civics (SSCG)",
      publisher: "Georgia Department of Education",
      version: "GSE · Approved June 9, 2016 · Updated November 2, 2023",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://lor2.gadoe.org/gadoe/file/c0c0ad9a-d88e-4864-b49b-1302099da16a/1/Social-Studies-K-12-Georgia-Standards.pdf",
      adoption:
        "Georgia's required American Government/Civics course (course number 45.057), described by 18 standards (SSCG1-18) with lettered elements. SSCG17 names Georgia's own state and local government described in the Georgia Constitution — the home for the Georgia Civics flagship. We cite each standard's verbatim stem and state the covered elements in the note.",
      standards: [
        // — Georgia's own government (the flagship's home) —
        {
          code: "SSCG17",
          text: "Demonstrate knowledge of the organization and powers of state and local government described in the Georgia Constitution.",
          claimIds: [
            "civics.ga-local-government",
            "civics.ga-constitution-no-initiative",
            "civics.ga-three-branches",
            "civics.ga-courts",
            "civics.ga-bill-process",
            "civics.ga-get-involved",
          ],
          coverage: "partial",
          note: "Partial, and it is the flagship's home: the organization and powers of Georgia's state government (its three branches, its plural executive, its nonpartisan elected appellate courts, and how a bill becomes a Georgia law with the two-thirds veto override, all established by the Georgia Constitution) and element (a) the structure of local governments (Georgia's 159 counties and its cities) and (b) the state-local relationship are taught in depth. Element (e) — limitations citizens may exercise, which Georgia's standard lists as \"the initiative, referendum, and recall\" — is taught honestly as Georgia's ABSENCE of a statewide citizen initiative and the legislative-referral path that replaces it. Element (c) local revenue sources is not worked.",
        },
        // — Federal system (the general civics ladder) —
        {
          code: "SSCG4",
          text: "Demonstrate knowledge of the organization and powers of the national government.",
          claimIds: ["civics.three-branches-federal", "civics.federal-articles-i-iii", "civics.separation-checks-balances"],
          coverage: "full",
          note: "Both elements: the structure, powers, and limitations of the three branches as described in the Constitution, and the checks-and-balances/separation-of-powers relationship among them.",
        },
        {
          code: "SSCG5",
          text: "Demonstrate knowledge of the federal system of government described in the United States Constitution.",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy", "civics.article-v-amendment"],
          coverage: "full",
          note: "The federalism course and the powers course cover the state-national relationship, the enumerated/implied/concurrent/reserved powers taxonomy, the Supremacy Clause (through McCulloch v. Maryland), and the roles of Congress and the states in amending the Constitution.",
        },
        {
          code: "SSCG13",
          text: "Demonstrate knowledge of the operation of the judicial branch of government.",
          claimIds: [
            "civics.federal-judiciary-structure",
            "civics.scotus-nomination-confirmation",
            "civics.judicial-review-marbury",
            "rights.scotus-precedent",
          ],
          coverage: "full",
          note: "An entire course on the judicial branch covers the selection and approval of federal judges, the jurisdiction of the Supreme and federal courts, how the Court selects and decides cases, and judicial review through Marbury v. Madison; judicial activism versus restraint (element e) is the lightest element.",
        },
        {
          code: "SSCG16",
          text: "Analyze the difference between involuntary and voluntary participation in civic life.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service", "civics.voter-registration", "civics.ga-get-involved"],
          coverage: "full",
          note: "Both halves: the required participation the standard names — paying taxes and serving on a jury (an entire course) — and the voluntary participation — voting, public service, and staying informed. The Pledge of Allegiance (element c) is not taught.",
        },
        // — Partial / bounded federal —
        {
          code: "SSCG3",
          text: "Demonstrate knowledge of the framing and structure of the United States Constitution.",
          claimIds: [
            "civics.articles-to-constitution",
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "Partial: element (b) how the Constitution addressed the weaknesses of the Articles of Confederation and element (c) the fundamental principles (limited government, rule of law, federalism, separation of powers, checks and balances) are taught directly. The drafting compromises (a) and the Federalist/Anti-Federalist ratification debate (d) are not worked.",
        },
        {
          code: "SSCG1",
          text: "Compare and contrast various systems of government.",
          claimIds: ["civics.federalism-why-split-power", "civics.ga-constitution-no-initiative"],
          coverage: "partial",
          note: "Partial: the geographic distribution of power (unitary, confederal, federal) is taught through the federalism course, and the direct-versus-representative distinction (element d) is taught concretely — Georgia as a representative state with no citizen initiative. The authoritarian typology (b) and presidential-versus-parliamentary systems (c) are not taught.",
        },
        {
          code: "SSCG6",
          text: "Analyze the meaning and importance of each of the rights guaranteed under the Bill of Rights and how each is secured.",
          claimIds: ["civics.bill-of-rights-overview", "rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial, and the standard says \"each\": speech, religion, press, assembly, and the Fourth Amendment are taught deeply, as applicable rules with their landmark cases and limits. The remaining amendments are introduced but not worked at that depth.",
        },
        {
          code: "SSCG7",
          text: "Demonstrate knowledge of civil liberties and civil rights.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights", "civics.us-citizenship-law"],
          coverage: "partial",
          note: "Partial: civil liberties as protections against government action (element a) are taught as applicable rules, and the Fourteenth Amendment is taught for citizenship. The incorporation doctrine (c), the civil-rights-statute/Brown v. Board line (b), and how amendments extended the vote (d) are not worked.",
        },
        {
          code: "SSCG8",
          text: "Demonstrate knowledge of the legislative branch of government.",
          claimIds: ["civics.federal-bill-process", "civics.federal-articles-i-iii"],
          coverage: "partial",
          note: "Partial: the steps in the legislative process (element e) get an entire course, committees through veto override. The formal qualifications, the 17th Amendment, chamber powers, leadership and committees, and the lobbyist elements are not taught systematically.",
        },
        {
          code: "SSCG10",
          text: "Demonstrate knowledge of the executive branch of government.",
          claimIds: ["civics.electoral-college", "civics.federal-articles-i-iii"],
          coverage: "partial",
          note: "Partial: the role of the Electoral College in electing the President (element d) is taught in depth — mechanics and original purpose. The qualifications, term and succession, and the presidential-roles elements are not worked.",
        },
        {
          code: "SSCG14",
          text: "Demonstrate knowledge of the criminal justice process.",
          claimIds: ["rights.landmark-cases", "civics.jury-service"],
          coverage: "partial",
          note: "Partial: an individual's due-process rights (element a — the 4th, 5th, 6th, and 14th Amendments) are taught as applicable rules, and the courtroom/jury side of the process gets an entire course. Categorizing crimes and the sentencing elements are not taught.",
        },
        {
          code: "SSCG15",
          text: "Demonstrate knowledge of local, state, and national elections.",
          claimIds: ["civics.election-mechanics", "civics.campaign-help", "civics.ga-elections"],
          coverage: "partial",
          note: "Partial: the nomination and election process (element b) is taught thoroughly, with Georgia's own election rules (photo ID, advance voting, the majority runoff). The party history (a), campaign-finance (c-d), and media-influence (e) elements are not taught — our media-literacy work is consumer protection, not political-media analysis.",
        },
        {
          code: "SSCG18",
          text: "Examine how American ideals of freedom and democracy protect against the threats of totalitarian ideology.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Partial: one totalitarian system is worked in real depth — a communist workers' state and the union that unmade it (Poland, Solidarność through the 1989 negotiated exit), which covers the growth-and-decline element (e). The general democracy-versus-totalitarianism comparison and fascism are not taught.",
        },
        {
          code: "SSCG12",
          text: "Describe the tools used to carry out United States foreign policy, including diplomacy and treaties; economic, military, and humanitarian aid; and sanctions and military intervention.",
          claimIds: ["bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: U.S. foreign policy is taught through one arm — the War on Drugs' foreign-policy dimension (U.S.-funded eradication, aid, and intervention against source countries). The general diplomacy/treaties/sanctions toolkit is not taught.",
        },
      ],
    },

    // ── Social Studies: World History (GSE, SSWH) ──────────────────────────
    {
      id: "ga-sswh",
      subject: "Social Studies",
      name: "Georgia Standards of Excellence — World History (SSWH)",
      publisher: "Georgia Department of Education",
      version: "GSE · Approved June 9, 2016 · Updated November 2, 2023",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://lor2.gadoe.org/gadoe/file/c0c0ad9a-d88e-4864-b49b-1302099da16a/1/Social-Studies-K-12-Georgia-Standards.pdf",
      adoption:
        "Georgia's World History course (SSWH1-22). The BVC curriculum's exploration/Columbian-Exchange, imperialism, revolution, and Cold War content maps here — and Georgia's standards name the Opium Wars (SSWH16c) and Haiti (SSWH14b) explicitly.",
      standards: [
        {
          code: "SSWH10",
          text: "Analyze the causes and effects of exploration and expansion into the Americas, Africa, and Asia.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.mesoamerica-colonization", "bvc.plantation-economy-resistance"],
          coverage: "full",
          note: "Element (b) the Columbian Exchange and element (d) the Transatlantic Slave Trade's effects on Africa and the colonies are taught directly, through the commodities and societies (Maya, Aztec) that conquest remade.",
        },
        {
          code: "SSWH16",
          text: "Analyze the rise of nationalism and worldwide imperialism.",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.opium-wars",
            "bvc.colonialism-persists-today",
            "bvc.growing-belts-resource-maps",
          ],
          coverage: "full",
          note: "Element (b) imperialism in Africa and Asia and the influence of geography and natural resources is the cash-crop story the whole series tells, and element (c) anti-imperial resistance names the Opium Wars, which the drug-history curriculum teaches in depth.",
        },
        {
          code: "SSWH14b",
          text: "Identify the causes and results of the revolutions in England (1689), United States (1776), France (1789), Haiti (1791), and Latin America (1808-1825).",
          claimIds: ["bvc.haitian-revolution", "bvc.plantation-economy-resistance"],
          coverage: "partial",
          note: "Partial: this element (under SSWH14, Analyze the Age of Revolutions) names \"Haiti (1791)\" explicitly, and the Haitian Revolution is taught in real depth — through the 1825 French indemnity and Haiti's modern poverty. The England, United States, France, and Latin American revolutions are not the focus.",
        },
        {
          code: "SSWH20",
          text: "Demonstrate an understanding of the global social, economic, and political impact of the Cold War and decolonization from 1945 to 1989.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Partial: element (d) opposition movements to existing political systems is worked in real depth for one case — Poland's Solidarność, martial law, and the 1989 negotiated exit. The arms race, the Arab-Israeli conflict, and Asian/African decolonization are not taught.",
        },
        {
          code: "SSWH21",
          text: "Examine change and continuity in the world since the 1960s.",
          claimIds: ["history.poland-1989-democratization", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: element (b) the breakup of the Soviet bloc is taught through Poland's negotiated exit from communism and its shock-therapy price. The Khrushchev/Gorbachev reforms, the wider Soviet breakup, and the terrorism and women-leaders elements are not taught.",
        },
        {
          code: "SSWH22",
          text: "Analyze globalization in the contemporary world.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: element (b) global economic connections and multinational corporations are taught through commodity value chains and the NAFTA→USMCA trade order. The UN/OPEC/WTO institutional focus and the environmental-treaty element are not taught.",
        },
      ],
    },

    // ── Social Studies: United States History (GSE, SSUSH) ─────────────────
    {
      id: "ga-ssush",
      subject: "Social Studies",
      name: "Georgia Standards of Excellence — United States History (SSUSH)",
      publisher: "Georgia Department of Education",
      version: "GSE · Approved June 9, 2016 · Updated November 2, 2023",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://lor2.gadoe.org/gadoe/file/c0c0ad9a-d88e-4864-b49b-1302099da16a/1/Social-Studies-K-12-Georgia-Standards.pdf",
      adoption:
        "Georgia's U.S. History survey (SSUSH1-23). This catalog teaches U.S. history in specific places — the Gilded Age unions, the Great Migration, Prohibition, the Harlem Renaissance, the Wagner Act — not as a survey, so we claim only where the lessons genuinely land. Georgia's standards name \"the origins of the Great Migration\" and \"socialist Eugene Debs\" (SSUSH15b) explicitly.",
      standards: [
        {
          code: "SSUSH11",
          text: "Examine connections between the rise of big business, the growth of labor unions, and technological innovations.",
          claimIds: ["history.gilded-age-labor"],
          coverage: "full",
          note: "Element (e) — the origins, growth, influence, and tactics of labor unions including the American Federation of Labor — is exactly the unions course: the Knights and the AFL, Haymarket, Homestead, and Pullman.",
        },
        {
          code: "SSUSH13",
          text: "Evaluate efforts to reform American society and politics in the Progressive Era.",
          claimIds: ["history.triangle-fire-debs", "history.jim-crow-and-long-shadow"],
          coverage: "partial",
          note: "Partial: Progressive-Era labor reform is taught through the Triangle fire and what it changed, and the institutionalization of Jim Crow (element c's context) is taught. The muckrakers, the women's-reform, and conservation elements are not the focus.",
        },
        {
          code: "SSUSH15",
          text: "Analyze the origins and impact of U.S. involvement in World War I.",
          claimIds: ["history.migration-streams-arrival", "history.triangle-fire-debs"],
          coverage: "partial",
          note: "Partial: element (b) names \"the origins of the Great Migration\" and \"socialist Eugene Debs,\" both taught in depth. The neutrality-to-engagement, submarine-warfare, and Fourteen Points content is not taught.",
        },
        {
          code: "SSUSH16",
          text: "Investigate how political, economic, and cultural developments after WW I led to a shared national identity.",
          claimIds: ["bvc.prohibition", "history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: element (b) the Eighteenth Amendment (Prohibition — its causes, rhetoric, and results) and element (e) the Harlem Renaissance are taught in depth. The Red Scare, consumerism, and radio/film elements are not taught.",
        },
        {
          code: "SSUSH18",
          text: "Evaluate Franklin D. Roosevelt's New Deal as a response to the Great Depression and compare how governmental programs aided those in need.",
          claimIds: ["history.wagner-act"],
          coverage: "partial",
          note: "Partial: one New Deal program is taught in real depth — the Wagner Act (the National Labor Relations Act), what it created and who it deliberately excluded. The Social Security, relief-recovery-reform, and Eleanor Roosevelt elements are not taught.",
        },
        {
          code: "SSUSH21",
          text: "Analyze U.S. international and domestic policies including their influences on technological advancements and social changes during the Kennedy and Johnson administrations",
          claimIds: ["history.labor-civil-rights", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial: element (d) civil-rights groups and their tactics are taught from the labor angle most curricula skip — A. Philip Randolph to Memphis, and the unions' own colour bar. The specific King texts, Cesar Chavez, and the Cold War/Vietnam elements are not taught.",
        },
      ],
    },

    // ── Social Studies: World Geography (GSE, SSWG) ────────────────────────
    {
      id: "ga-sswg",
      subject: "Social Studies",
      name: "Georgia Standards of Excellence — World Geography (SSWG)",
      publisher: "Georgia Department of Education",
      version: "GSE · Approved June 9, 2016 · Updated November 2, 2023",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://lor2.gadoe.org/gadoe/file/c0c0ad9a-d88e-4864-b49b-1302099da16a/1/Social-Studies-K-12-Georgia-Standards.pdf",
      adoption:
        "Georgia's World Geography course (SSWG1-6). The BVC Commodity Map is this course's strongest home — Georgia's SSWG5e even names \"plantation farming in Africa and Central/South America\" as a global-trade-and-environment case.",
      standards: [
        {
          code: "SSWG1",
          text: "Explain why physical characteristics of place such as landforms, bodies of water, climate, and natural resources act as contributing factors to world settlement patterns.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.climate-resources-shape-humans"],
          coverage: "full",
          note: "Element (h) — the spatial distribution of natural resources and how it impacts global settlement — is the Commodity Map's method: climate, soil, and resources deciding where commodities grow, and the trade and settlement that follow.",
        },
        {
          code: "SSWG5",
          text: "Analyze human interactions with the world's environments.",
          claimIds: [
            "bvc.climate-resources-shape-humans",
            "bvc.value-chain-earnings",
            "bvc.plantation-economy-resistance",
            "bvc.climate-change-forecasts",
          ],
          coverage: "full",
          note: "Element (e) — how global trade systems impact environmental sustainability, with the standard's own example \"plantation farming in Africa and Central/South America\" — is the commodity curriculum exactly, and element (c) industrialization and natural-resource management is taught through the cash-crop systems and published climate forecasts.",
        },
        {
          code: "SSWG6",
          text: "Examine the spatial distribution of major economic systems and analyze the role geography plays in economic development.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap", "bvc.growing-belts-resource-maps", "bvc.war-on-drugs-foreign-policy"],
          coverage: "full",
          note: "Element (b) primary, secondary, and tertiary activities (resource extraction to services) is the value chain and the smile curve, and element (e) the impact of trade across international borders — including the standard's named illegal drug trade — is taught through the commodity chains and the War on Drugs.",
        },
        {
          code: "SSWG3",
          text: "Evaluate how cooperation and conflict among people influence the division and control of the earth's surface.",
          claimIds: ["bvc.colonialism-persists-today", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: element (c) post-colonial legacies and element (d) organizations of global power (the standard names USMCA) are touched through how colonial patterns persist and how the NAFTA→USMCA order works. The general political-boundary and sovereignty content is not taught.",
        },
        {
          code: "SSWG4",
          text: "Assess the characteristics, spatial distribution, and migration of human populations on the earth's surface.",
          claimIds: ["history.migration-streams-arrival", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial: element (c) push-and-pull migration factors and migration's impact are taught in depth through the Great Migration. The demographic-model (a) and natal-policy (b) elements are not taught.",
        },
      ],
    },

    // ── Social Studies: Economics (GSE, SSEF/SSEMI/SSEIN) ──────────────────
    {
      id: "ga-ssec",
      subject: "Social Studies",
      name: "Georgia Standards of Excellence — Economics/Business/Free Enterprise",
      publisher: "Georgia Department of Education",
      version: "GSE · Approved June 9, 2016 · Updated November 2, 2023",
      fetchedOn: "2026-08-28",
      sourceUrl:
        "https://lor2.gadoe.org/gadoe/file/718cd76e-7ea7-44a8-95bf-fd4047eb9cea/1/Social-Studies-Personal%20Finance-and-Economics-Georgia-Standards.pdf",
      adoption:
        "Georgia's economics course (Fundamentals SSEF, Microeconomics SSEMI, Macroeconomics SSEMA, International SSEIN, Personal Finance SSEPF), course code 45.061, effective from the 2022-2023 school year. The international-trade and economic-systems standards are where the commodity curriculum lands. Four Personal Finance standards were added on 2026-08-28: two when the banking course shipped, one (SSEPF2, for its reconciliation element only) when the cash-flow timing course did, and SSEPF10 when MONEY-04 (`predatory-products`) did. The SSEPF domain is no longer rejected wholesale, and notClaimed records which of the ten remain unclaimed. Re-fetched 2026-08-28 directly from the canonical lor2.gadoe.org PDF, which resolved this pass where it had refused connections in July 2026, so this framework's text is now transcribed from Georgia's own copy rather than a district mirror; SSEPF10 was transcribed from the same PDF on the same day.",
      standards: [
        {
          code: "SSEIN1",
          text: "Explain the benefits of international trade and the role of trade barriers.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps", "bvc.sugar-program-trade-barriers", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: element (b) how trade barriers create costs and benefits to consumers and producers is taught in depth (the U.S. sugar program's quotas, tariffs, and price supports), and who benefits and loses from trade is the series' spine. Comparative advantage (element a) is not taught as a formal term.",
        },
        {
          code: "SSEF3",
          text: "Analyze how economic systems influence the choices of individuals, businesses, and governments.",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial: the market-versus-non-market comparison is taught directly and at length — reciprocity economies against market economies. Georgia's element (a) frames the systems as command/market/mixed, and the courses teach the traditional/reciprocity contrast rather than command economies.",
        },
        {
          code: "SSEMI2",
          text: "Explain how the law of demand, the law of supply, and prices work to determine production and distribution in a market economy.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: taught through real commodity markets — a supply shock moving world coffee prices and why inelastic demand absorbs the spike. It is not a general supply-and-demand-graph unit.",
        },
        // — Personal Finance, re-fetched 2026-08-28 when MONEY-02 shipped. The SSEPF domain was
        //   rejected wholesale until then; two of its ten standards are now genuinely reachable and
        //   the notClaimed entry records the supersession rather than being deleted.
        // — Added 2026-08-28 when MONEY-03 (`cash-flow-timing`) shipped. ONE of SSEPF2's six
        //   elements, and the standard's own stem is expressly NOT claimed: Georgia frames SSEPF2
        //   as allocating income "through budgeting", and this catalog teaches no budgeting at all.
        //   Element (e) is nevertheless an unusually exact fit, because it asks for the mechanism
        //   (unposted transactions, weekend card activity, monthly auto-pay) rather than the habit.
        {
          code: "SSEPF2",
          text: "Analyze income as a scarce resource that can be allocated effectively through budgeting.",
          claimIds: [
            "money.account-reconciliation-and-posting",
            "money.payment-methods-and-clearing",
            "money.funds-availability-schedule",
          ],
          coverage: "partial",
          note: "Partial, and a teacher should read this note before planning against it, because ONE of the six elements is met and it is not the one the stem describes. THE STANDARD'S STEM IS NOT CLAIMED: MONEY-03 teaches no budgeting technique of any kind, on the record and in three separate lessons, so allocating income through budgeting is not taught here by anyone. WHAT IS TAUGHT IS ELEMENT (e), reconciling a checking account and accounting for transactions that have not been posted, and it is taught deeper than the element asks. The three examples Georgia names are each worked from their governing rule: a check, through the funds-availability schedule and the fact that a deposited credit is provisional until settlement is final (U.C.C. 4-201(a)); a weekend debit card transaction, through the definition of a business day as ten enumerated dates in 12 CFR 229.2 and through the separation of authorisation, posting and settlement into three dated events; and a monthly auto-pay, through 12 CFR 1005.10, which makes it a preauthorized electronic fund transfer carrying a three-business-day stop-payment window. The element's closing clause, how this helps avoid overdraft fees, is answered with the U.C.C. 4-303(b) permission to charge a day's items in any order, worked arithmetically, plus the 12 CFR 1030.11(a) statement totals that let a learner measure the result. NOT taught: elements (a) income types, (b) the Form 1040, (c) paystub components, (d) budget components and savings, and (f) net worth.",
        },
        {
          code: "SSEPF3",
          text: "Explain how the financial system channels funds from savers to investors.",
          claimIds: ["money.consumer-deposit-accounts", "money.unbanked-and-alternative-services"],
          coverage: "partial",
          note: "Partial, and element-specific. Element (b), comparing services offered by different financial institutions, is taught for banks, credit unions and the nonbank market (check cashers, money-transfer companies, prepaid issuers), priced from published fee schedules and a state regulator's cap; payday and title-pawn lenders are named in the standard and are not taught here. Element (c), comparing cash, debit cards, prepaid cards and mobile payment apps, is taught in full, with the Regulation E prepaid disclosure and the FDIC's usage data on how each is actually used; credit cards are not. The standard's headline about channelling funds from savers to investors, and elements (a), (d) and (e), are not taught.",
        },
        {
          code: "SSEPF9",
          text: "Explain ways consumers are protected by rules and regulations.",
          claimIds: [
            "money.consumer-financial-protection-mechanisms",
            "money.consumer-deposit-accounts",
            "money.cost-of-credit-fee-conversion",
            "money.unauthorized-transfer-recourse",
            "money.protected-class-rate-cap",
            "money.state-lending-rules-method",
          ],
          coverage: "partial",
          note: "Partial, and fuller since 2026-08-28 when MONEY-04 shipped. Element (a), how government agencies offer protection in banking, is taught directly and from the rules themselves: the FDIC and the NCUA on deposit and share insurance, and the regulations on account disclosure (12 CFR 1030.4), overdraft consent (12 CFR 1005.17) and prepaid disclosure (12 CFR 1005.18). BORROWING, which element (a) also names and which this entry previously left to later courses, is now taught: the Truth in Lending Act's disclosure of the annual percentage rate, the Department of Defense's 36 percent ceiling for covered servicemembers at 32 CFR 232.4, and the state licensing and rate statutes that actually govern small-dollar credit, with a public licence register as the check. Element (c) is met for TWO of the five instruments Georgia names, not one: the Fair Credit Reporting Act (through account screening, the adverse-action notice and the dispute right) and now the Truth in Lending Act, whose primary purpose is quoted from 15 U.S.C. 1601(a) and whose annual-rate computation is worked. The Electronic Fund Transfer Act and Regulation E are taught in depth as well, though Georgia's element (c) list is written with \"i.e.\" rather than \"e.g.\" and does not name them. Element (b) is partly met, through the CFPB complaint route and its published response times; the Better Business Bureau and direct-to-business methods the standard names are not compared. NOT TAUGHT: the Fair Debt Collection Practices Act, the Equal Housing Act, Dodd-Frank, and investing protection.",
        },
        // — Added 2026-08-28 when MONEY-04 (`predatory-products`) shipped. SSEPF10 was named in the
        //   notClaimed entry below as one of the eight the catalog did not teach; one of its four
        //   elements is now taught in depth and a second in part, so it moves out with its limits
        //   stated. Elements (a) and (d) are refused rather than stretched.
        {
          code: "SSEPF10",
          text: "Explain sources of and protection against identity theft.",
          claimIds: ["money.identity-theft-remedies", "money.unauthorized-transfer-recourse"],
          coverage: "partial",
          note: "Partial, and element by element. ELEMENT (c), the steps to take after becoming a victim, is taught in full and from the statute rather than as a checklist: freezing credit histories is the security freeze at 15 U.S.C. 1681c-1(i), free of charge, placed within one business day and lifted within one hour on a telephone or online request; alerting appropriate officials is the initial fraud alert at 1681c-1(a), which one call places in all three nationwide files for at least a year, the extended alert at 1681c-1(b), and the identity theft report obtained free through the Federal Trade Commission's own site; and the course adds the block at 1681c-2, which removes information resulting from an alleged identity theft within four business days of four named items. Replacement cards and password changes are covered only as the ordinary consequence of the Regulation E notice that ends a consumer's liability. ELEMENT (b) is partly met: monitoring your credit report is taught (MONEY-01 works the free annual file disclosure at 15 U.S.C. 1681j), and the course teaches the procedural rule that defeats a telephone impersonation, but shredding, email attachments, secure networks and social-media management are not taught. NOT TAUGHT AT ALL: element (a), the sources of identity theft as a taxonomy (dumpster diving, skimming, phishing, stealing, data breaches), and element (d), investment scams such as Ponzi schemes, pump and dumps and advance-fee scams. The course teaches no securities content of any kind, and a claim on (d) would be invented.",
        },
      ],
    },

    // ── ELA: Georgia's K-12 ELA Standards, Grades 9-12 (Approved May 2023) ─
    {
      id: "ga-ela",
      subject: "English/Language Arts",
      name: "Georgia's K-12 English Language Arts Standards — Grades 9-12",
      publisher: "Georgia Department of Education",
      version: "Approved May 2023 · in effect SY2025-2026",
      fetchedOn: "2026-07-17",
      sourceUrl: "https://gadoe.org/learning/english-language-arts/",
      adoption:
        "Georgia's NEW K-12 ELA standards (Approved May 2023) took effect for 2025-2026, replacing the Common Core-derived GSE ELA — so Georgia is NOT mapped through our shared Common Core file. The standards are grade-band (9-12), organized as Domains → Big Ideas → Standards; we cite the Texts-domain standards this catalog meets.",
      standards: [
        {
          code: "9-12.T.C.2",
          text: "Evaluate how authors' and/or speakers' perspectives influence texts and how circumstances shape their creation.",
          claimIds: ["bvc.author-rhetoric-primary-texts", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Author perspective is analyzed across the primary texts the curriculum works — abolitionist pamphlets, Lin Zexu's letter, Torches of Freedom — and the Whose Voice lessons put authors' differing accounts of the same events side by side.",
        },
        {
          code: "9-12.T.T.3",
          text: "Evaluate and apply argumentative techniques to enhance text's appeal to audiences or achieve specific purposes.",
          claimIds: ["bvc.rhetoric-power-persuasion", "bvc.author-rhetoric-primary-texts"],
          coverage: "full",
          note: "The persuasive primary texts are analyzed for exactly this — how style and content make an argument land — from the abolitionist sugar boycott to Lin Zexu's letter to Queen Victoria.",
        },
        {
          code: "9-12.T.C.1",
          text: "Analyze the impact of purpose and audience on a wide variety of texts.",
          claimIds: ["bvc.reading-ads-for-omission", "bvc.media-fallacies-recurring"],
          coverage: "full",
          note: "Reading ads and campaign language for their purpose and audience — what they include, exclude, and whom they target — runs through every BVC episode's media-literacy lesson.",
        },
        {
          code: "9-12.T.RA.1",
          text: "Conduct research, generating questions to guide investigations of complex topics of interest and using credible sources to support analyses.",
          claimIds: ["bvc.coffee-project-synthesis", "bvc.source-evaluation-modelled"],
          coverage: "partial",
          note: "Partial: the Coffee episode ships a graded 2-3 week research project requiring synthesis across credible sources, and source evaluation is modelled throughout. But the student conducts the research only in that one project.",
        },
        {
          code: "9-12.T.RA.2",
          text: "Reference parts of texts to address a specific topic or question and explore various sources of information to make connections across a broad range of topics.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Partial: multi-source evaluation and cross-source connections are modelled constantly and published as a checkable bibliography, and the Whose Voice lessons make connections across conflicting sources. Sustained student-run curation is prompted, not assessed.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Georgia mathematics standard.",
    },
    {
      heading: "Science — Georgia's own GSE Science (NOT NGSS), deferred not denied.",
      body: "We verified that Georgia's science standards are the Georgia Standards of Excellence for Science — Georgia's own, NOT the NGSS. We did not fetch and transcribe them this pass, and our rule is fetch-or-don't-cite, so Georgia carries no science claim here. The climate-and-resources content the NGSS states pick up through HS-ESS3-1 maps instead to Georgia social studies (World Geography SSWG1 and SSWG5, World History SSWH16). Georgia's high-school Environmental Science standards are the candidate home for a future pass.",
    },
    {
      heading: "American Government/Civics standards checked and rejected.",
      body: "SSCG2 (the political-philosophy genealogy — the Magna Carta through Hobbes, Locke, Rousseau, and Montesquieu, as named texts), SSCG9 (the impeachment and removal process), and SSCG11 (the federal bureaucracy, its departments and agencies, and the Cabinet) are not genuinely taught, so we do not claim them.",
    },
    {
      heading: "Economics — most of the personal-finance course, macroeconomics, and the market-structure standards.",
      body: "This entry used to reject the whole personal-finance domain, SSEPF1-10, on the ground that the catalog taught none of it. That changed on 2026-08-28 and the correction is recorded here rather than deleted: SSEPF3 (comparing financial institutions, and comparing cash, debit, prepaid and mobile payment), SSEPF9 (how consumers are protected by rules and regulations), SSEPF2 (claimed for element (e) alone, reconciling a checking account and accounting for unposted transactions) and SSEPF10 (sources of and protection against identity theft, on element (c) in full and (b) in part, with (a) and (d) expressly refused on its own entry) are now claimed, partially, and supersede the blanket rejection. SSEPF9 also grew the same day, reaching the borrowing half of element (a) and the Truth in Lending Act in element (c). SSEPF2 deserves its caveat here as well as on its own entry: Georgia's stem is about allocating income through BUDGETING, and this catalog teaches no budgeting technique at all, so five of that standard's six elements are not taught and the stem itself is not claimed. The remaining standards stay unclaimed and are named so the gap stays visible: SSEPF1 (major life decisions), SSEPF4 (interest rates), SSEPF5 (taxes), SSEPF6 (credit), SSEPF7 (insurance) and SSEPF8 (investing).",
    },
    {
      heading: "World and U.S. history beyond the mapped standards.",
      body: "Georgia's SSWH and SSUSH are full surveys. This catalog teaches world and U.S. history in specific places — exploration and the Columbian Exchange, imperialism and the Opium Wars, the Haitian Revolution, the Gilded Age unions, the Great Migration, Prohibition and the Harlem Renaissance, the Wagner Act, and Poland's exit from communism — not as surveys, so the remaining ancient/medieval, world-war, and U.S.-survey standards are not claimed.",
    },
    {
      heading: "The direct-democracy tools SSCG17e names — Georgia does not have the initiative.",
      body: "Georgia's own SSCG17e lists \"the initiative, referendum, and recall\" as limitations citizens may exercise on state and local government. But Georgia has NO statewide citizen initiative: the flagship teaches that absence and the legislative-referral path (a two-thirds vote of each house, then voter ratification) honestly, rather than describing a tool Georgia does not provide. So the standard is claimed (partial) for what Georgia's civics actually is, not padded to look like a direct-democracy state.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Georgia's closest frameworks (Computer Science, World Languages) have not been fetched and verified this pass. Our rule is fetch-or-don't-cite, so these courses carry no Georgia claims here.",
    },
  ],
};
