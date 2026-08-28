// ─────────────────────────────────────────────────────────────────────────────
// TEXAS — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-tx` was written FROM Texas's own official sources (capitol.texas.gov,
// tlc.texas.gov, txcourts.gov, sos.state.tx.us / votetexas.gov), so Texas's civics flagship
// gets its 1:1 state-civics course.
//
// Texas is a fully BESPOKE-standards state: it writes the Texas Essential Knowledge and Skills
// (TEKS) for every subject and has NEVER adopted the Common Core or the Next Generation Science
// Standards. So nothing here is mapped through our shared Common Core / NGSS files — every code
// below is Texas's own, transcribed verbatim from the TEKS.
//
// What Texas actually adopted (verified against the TEA-published rule text, not assumed):
//   · Social studies — 19 TAC Chapter 113. The high-school courses (US History §113.41, World
//     History §113.42, World Geography §113.43, US Government §113.44, Economics §113.31) were
//     revised by the SBOE in November 2022 to align with Senate Bill 3 (87th Legislature, 2nd
//     Called Session) and are "Adopted 2022," effective August 1, 2024 (2024-2025 school year).
//     Each section's own "Source" line confirms: amended to be effective August 1, 2024,
//     48 TexReg 842. (A separate 2025 SBOE review cycle is under way but not yet effective.)
//   · English language arts — 19 TAC Chapter 110. Texas writes its own ELA TEKS (English I-IV,
//     §110.36-39, "Adopted 2017," amended effective August 1, 2019); the codes are Texas's own.
//   · Health — 19 TAC Chapter 115 (Health I §115.38, "Adopted 2020," effective August 1, 2022).
//   · Physical education — 19 TAC Chapter 116 (§116.62 and §116.64, "Adopted 2020," effective
//     August 1, 2022).
//   · Science — Texas is NOT an NGSS state; it has its own science TEKS (19 TAC Chapter 112). We
//     did not fetch it this pass and the catalog has no laboratory science, so we make no Texas
//     science claim (fetch-or-don't-cite). Published in the notClaimed list below.
//
// Provenance: transcribed verbatim from the TEA "SBOE rules (TAC) currently in effect" PDFs,
// all fetched 2026-07-17:
//   · Social studies Subchapter C (§113.31, §113.41-44) — ch113c.pdf (August 2024 Update)
//   · English Subchapter C (§110.36-39)                 — ch110c.pdf (August 2020 Update)
//   · Health Subchapter C (§115.38-40)                  — ch115c.pdf (August 2022 Update)
//   · Physical Education Subchapter C (§116.62-64)       — ch116c.pdf (August 2022 Update)
// (texreg.sos.state.tx.us — the Secretary of State's TAC portal — has migrated to a JavaScript
// application our tooling cannot read, so the authoritative TEA "currently in effect" PDFs were
// used and each section's TexReg "Source" citation was checked to confirm the adopted version.)
//
// RE-FETCHED 2026-08-28 (ch113c.pdf again) when MONEY-02, Banking and Who Has No Bank, made the
// first personal-finance standards claimable. Two additions in §113.31 (the Economics course's own
// personal-financial-literacy strand at (d)(16)) and a NEW framework for §113.49, the standalone
// Personal Financial Literacy elective, which had no framework at all because it had nothing to
// claim. The blanket "does no personal-finance instruction" rejection is rewritten as superseded
// rather than deleted, and it now names every statement still unclaimed.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const SS_SUBCH_C =
  "https://tea.texas.gov/laws-and-rules/sboe-rules-tac/sboe-tac-currently-effect/ch113c.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "TX",
  frameworks: [
    // ── United States Government §113.44 (Adopted 2022) ────────────────────
    {
      id: "tx-us-government",
      subject: "Social Studies",
      name: "TEKS for Social Studies — United States Government (§113.44)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One-Half Credit · Adopted 2022 · effective August 1, 2024 (19 TAC ch. 113, subch. C)",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_SUBCH_C,
      adoption:
        "Texas's required one-semester United States Government course is the culmination of its K-12 civic and governmental content. Its standards are overwhelmingly about the FEDERAL system; two, however — (d)(7)(H) comparing national, state, and local governments and (d)(9)(A) methods of filling offices at all three levels — name state and local government explicitly, and that is where Texas Civics (the flagship, written from Texas's own sources) is mapped, alongside the general civics ladder. Texas's dedicated STATE-government instruction sits in Grade 7 Texas History (§113.20, middle school), which we have not fetched; see notClaimed.",
      standards: [
        {
          code: "§113.44(d)(6)(B)",
          text: "explain how the federal government serves the purposes set forth in the Preamble to the U.S. Constitution;",
          claimIds: ["civics.preamble-purposes", "civics.constitution-article-by-article"],
          coverage: "full",
          note: "The Preamble is worked clause by clause as the purposes of government, and the Constitution is analyzed article by article.",
        },
        {
          code: "§113.44(d)(6)(D)",
          text: "evaluate constitutional provisions for limiting the role of government, including republicanism, checks and balances, federalism, separation of powers, popular sovereignty, and individual rights;",
          claimIds: ["civics.separation-checks-balances", "civics.federalism-why-split-power"],
          coverage: "full",
          note: "Separation of powers, checks and balances, and federalism are taught head-on, and a dedicated course works why power is divided between state and nation.",
        },
        {
          code: "§113.44(d)(6)(E)",
          text: "describe the constitutionally prescribed procedures by which the U.S. Constitution can be changed and analyze the role of the amendment process in a constitutional government; and",
          claimIds: ["civics.article-v-amendment"],
          coverage: "full",
        },
        {
          code: "§113.44(d)(7)(A)",
          text: "analyze the structure and functions of the legislative branch of government, including the bicameral structure of Congress, the role of committees, and the procedure for enacting laws;",
          claimIds: ["civics.federal-bill-process", "civics.federal-articles-i-iii"],
          coverage: "full",
        },
        {
          code: "§113.44(d)(7)(C)",
          text: "analyze the structure and functions of the judicial branch of government, including the federal court system, types of jurisdiction, and judicial review;",
          claimIds: ["civics.federal-judiciary-structure", "civics.judicial-review-marbury"],
          coverage: "full",
        },
        {
          code: "§113.44(d)(7)(E)",
          text: "explain how provisions of the U.S. Constitution provide for checks and balances among the three branches of government;",
          claimIds: ["civics.separation-checks-balances", "civics.three-branches-federal"],
          coverage: "full",
        },
        {
          code: "§113.44(d)(7)(H)",
          text: "compare the structures, functions, and processes of national, state, and local governments in the U.S. federal system.",
          claimIds: [
            "civics.tx-state-structure",
            "civics.tx-local-government",
            "civics.local-government-layers",
            "civics.three-branches-federal",
          ],
          coverage: "partial",
          note: "This is the flagship's home in the US Government course: Texas's own state structure (the 1876 constitution, the plural executive, the biennial part-time legislature) and Texas local government (254 counties, the commissioners court, no townships, home-rule cities) are taught in depth, alongside the federal branches. But the standard asks students to COMPARE all three levels systematically, and that side-by-side comparison across national, state, and local is not fully assembled here.",
        },
        {
          code: "§113.44(d)(8)(A)",
          text: "explain why the Founding Fathers created a distinctly new form of federalism and adopted a federal system of government instead of a unitary system;",
          claimIds: ["civics.federalism-why-split-power"],
          coverage: "full",
        },
        {
          code: "§113.44(d)(8)(B)",
          text: "categorize government powers as national, state, or shared;",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "The powers taxonomy is taught by name — enumerated/delegated, implied, reserved (Tenth Amendment), and concurrent — with McCulloch v. Maryland, which is exactly national/state/shared.",
        },
        {
          code: "§113.44(d)(9)(A)",
          text: "identify different methods of filling public offices, including elected and appointed offices at the local, state, and national levels;",
          claimIds: ["civics.tx-courts-elected", "civics.scotus-nomination-confirmation"],
          coverage: "partial",
          note: "Two methods are taught in real depth: Texas's partisan election of its judges (both high courts, six-year terms) and the federal Article II appointment-and-confirmation of judges and justices. A systematic survey of every method of filling every office at all three levels is not attempted.",
        },
        {
          code: "§113.44(d)(9)(B)",
          text: "explain the process of electing the president of the United States and analyze the Electoral College; and",
          claimIds: ["civics.electoral-college"],
          coverage: "full",
          note: "Both halves the standard names: how the Electoral College works, and its original purpose and modern relevance, are taught as separate lessons.",
        },
        {
          code: "§113.44(d)(12)(C)",
          text: "identify the freedoms and rights protected and secured by each amendment in the Bill of Rights;",
          claimIds: ["civics.bill-of-rights-origin", "civics.bill-of-rights-overview", "rights.landmark-cases"],
          coverage: "full",
        },
        {
          code: "§113.44(d)(12)(E)",
          text: "analyze U.S. Supreme Court interpretations of rights guaranteed by the U.S. Constitution in selected cases, including Engel v. Vitale, Schenck v. United States, Texas v. Johnson, Miranda v. Arizona, Gideon v. Wainwright, Mapp v. Ohio, and Roe v. Wade;",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent"],
          coverage: "partial",
          note: "Our Know Your Rights course teaches how to apply landmark Supreme Court rulings as rules — Tinker, Brandenburg, Mapp, Terry, T.L.O., Riley, and Carpenter — and how precedent expands rights over time. Mapp v. Ohio is the direct overlap; most of the specific cases this standard enumerates (Engel, Schenck, Texas v. Johnson, Miranda, Gideon, Roe) are different ones, so we claim the skill, not the exact case list.",
        },
        {
          code: "§113.44(d)(13)(B)",
          text: "explain the responsibilities, duties, and obligations of citizenship such as being well informed about civic affairs, serving in the military, voting, serving on a jury, observing the laws, paying taxes, and serving the public good; and",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service"],
          coverage: "full",
          note: "Responsibilities are taught as practices, not exhortation: voting, jury service (an entire course), staying informed, and civic participation.",
        },
        {
          code: "§113.44(d)(13)(C)",
          text: "describe the voter registration process and the criteria for voting in elections.",
          claimIds: ["civics.voter-registration", "civics.election-mechanics", "civics.tx-elections"],
          coverage: "full",
          note: "The general registration process is taught, and Texas's own criteria — strict photo ID with a Reasonable Impediment Declaration fallback, and the ~30-day (no same-day) registration deadline — are taught as Texas's.",
        },
        {
          code: "§113.44(d)(14)(A)",
          text: "analyze the effectiveness of various methods of participation in the political process at local, state, and national levels;",
          claimIds: [
            "civics.campaign-help",
            "civics.show-up-every-level",
            "civics.track-a-bill",
            "civics.tx-get-involved",
          ],
          coverage: "full",
          note: "Participation is taught as practice at every level — helping a campaign lawfully, tracking a live bill, showing up locally — with a Texas lesson on where an engaged Texan pushes given the biennial clock and the absence of a citizen initiative.",
        },
        {
          code: "§113.44(d)(15)(B)",
          text: "analyze the importance of the First Amendment rights of petition, assembly, speech, and press and the Second Amendment right to keep and bear arms.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "The First Amendment rights the standard names — speech, press, assembly, petition — are taught thoroughly, including at school and online and with the constitutional limits on each. The Second Amendment right to keep and bear arms is not taught.",
        },
        {
          code: "§113.44(d)(19)(D)",
          text: "analyze and evaluate a variety of historical and contemporary sources for validity of information, arguments, counterarguments, credibility, accuracy, bias, propaganda, point of view, and frame of reference;",
          claimIds: [
            "bvc.reading-ads-for-omission",
            "bvc.source-evaluation-modelled",
            "bvc.media-fallacies-recurring",
            "bvc.evaluate-claims-fallacies",
          ],
          coverage: "full",
          note: "Source evaluation for bias, propaganda, and reliability is a recurring method across the curriculum — reading ads and campaign language for what they leave out, and a published, checkable bibliography.",
        },
      ],
    },

    // ── World Geography Studies §113.43 (Adopted 2022) ─────────────────────
    {
      id: "tx-world-geography",
      subject: "Social Studies",
      name: "TEKS for Social Studies — World Geography Studies (§113.43)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One Credit · Adopted 2022 · effective August 1, 2024 (19 TAC ch. 113, subch. C)",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_SUBCH_C,
      adoption:
        "World Geography Studies is where the BVC Commodity Map maps most fully: the course examines people, places, and environments and how location shapes economic activity in different economic systems — exactly the curriculum's spine. Codes are Texas's own TEKS, transcribed verbatim.",
      standards: [
        {
          code: "§113.43(d)(4)(A)",
          text: "explain how elevation, latitude, wind systems, ocean currents, position on a continent, and mountain barriers influence temperature, precipitation, and distribution of climate regions;",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.climate-resources-shape-humans"],
          coverage: "full",
          note: "This is the Growing Belts map exactly: latitude, altitude, and climate deciding where each commodity can grow, taught as the reason trade follows.",
        },
        {
          code: "§113.43(d)(8)(A)",
          text: "compare ways that humans depend on, adapt to, and modify the physical environment, including the influences of culture and technology;",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "Human-environment interaction is the method: volcanic soil and altitude deciding what grows, karst limestone shaping bourbon, climate change redrawing the map.",
        },
        {
          code: "§113.43(d)(10)(A)",
          text: "describe the forces that determine the distribution of goods and services in traditional, free enterprise, socialist, and communist economic systems;",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Traditional (reciprocity) economies are contrasted with market economies directly and at length. The socialist and communist systems the standard also names are touched only through the Poland (Solidarność) case, not surveyed as economic systems here.",
        },
        {
          code: "§113.43(d)(10)(D)",
          text: "compare global trade patterns over time and analyze the implications of globalization, including outsourcing and free trade zones.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "full",
          note: "Evaluating who wins and loses from global trade is the series' spine — 21 episodes trace market access and income against the commodity trap and value captured downstream, and test the pattern.",
        },
        {
          code: "§113.43(d)(11)(C)",
          text: "assess how changes in climate, resources, and infrastructure (technology, transportation, and communication) affect the location and patterns of economic activities;",
          claimIds: ["bvc.climate-change-forecasts", "bvc.climate-resources-shape-humans"],
          coverage: "full",
          note: "Published climate forecasts and their implications for where coffee, cacao, kava, and barley can be grown are analyzed in depth — climate redrawing the map of production.",
        },
        {
          code: "§113.43(d)(12)(A)",
          text: "analyze how the creation, distribution, and management of key natural resources affects the location and patterns of movement of products, money, and people;",
          claimIds: [
            "bvc.growing-belts-resource-maps",
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
          ],
          coverage: "full",
          note: "The whole curriculum follows a resource from where it can grow through who captures its value along the chain — resources driving the movement of products, money, and people.",
        },
        {
          code: "§113.43(d)(1)(B)",
          text: "trace the spatial diffusion of phenomena such as the Columbian Exchange or the diffusion of American popular culture and describe the effects on regions of contact;",
          claimIds: ["bvc.agricultural-hearths", "bvc.conquest-columbian-exchange"],
          coverage: "partial",
          note: "The Columbian Exchange the standard names is taught directly, and the diffusion of crops among regions is a recurring theme. The diffusion of American popular culture, the standard's other example, is not the curriculum's subject.",
        },
        {
          code: "§113.43(d)(18)(C)",
          text: "identify examples of cultures that maintain traditional ways, including traditional economies;",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "full",
          note: "The reciprocity economies of the kava and forest-wisdom episodes are exactly this — traditional economies studied as living systems against the market.",
        },
        {
          code: "§113.43(d)(7)(B)",
          text: "explain how physical geography and push and pull forces, including political, economic, social, and environmental conditions, affect the routes and flows of human migration;",
          claimIds: ["history.migration-streams-arrival"],
          coverage: "partial",
          note: "Taught at case-study depth through the Great Migration — the push of the Jim Crow South and the pull of the Black press and northern jobs, and the routes and railroads of the three streams. Not a general treatment of world migration.",
        },
        {
          code: "§113.43(d)(23)(B)",
          text: "plan, organize, and complete a research project that involves asking geographic questions; acquiring, organizing, and analyzing information; answering questions; and communicating results;",
          claimIds: [
            "bvc.coffee-project-synthesis",
            "bvc.coffee-project-mapping",
            "bvc.coffee-project-research-process",
          ],
          coverage: "partial",
          note: "The Coffee episode's graded 2-3 week project is exactly this: it has the student ask a geographic question, prepare maps and data tables, and communicate results. It is one optional project in one episode, so we will not claim a research programme.",
        },
      ],
    },

    // ── World History Studies §113.42 (Adopted 2022) ───────────────────────
    {
      id: "tx-world-history",
      subject: "Social Studies",
      name: "TEKS for Social Studies — World History Studies (§113.42)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One Credit · Adopted 2022 · effective August 1, 2024 (19 TAC ch. 113, subch. C)",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_SUBCH_C,
      adoption:
        "World History Studies is where the BVC series' colonial and commodity history maps — conquest and the Columbian Exchange, the Atlantic slave trade, European imperialism, and the collapse of communism. Codes are Texas's own TEKS, transcribed verbatim.",
      standards: [
        {
          code: "§113.42(d)(7)(B)",
          text: "explain the impact of the Columbian Exchange;",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.agricultural-hearths"],
          coverage: "full",
          note: "The Columbian Exchange is taught directly through the plants that moved — cacao, sugar, and the exchange of crops among the New World and the Old.",
        },
        {
          code: "§113.42(d)(7)(C)",
          text: "explain the impact of the Atlantic slave trade on West Africa and the Americas;",
          claimIds: [
            "bvc.conquest-columbian-exchange",
            "bvc.plantation-economy-resistance",
            "bvc.middle-passage-primary-sources",
            "bvc.imperialism-africa-asia-oceania",
          ],
          coverage: "full",
          note: "The transatlantic slave trade, the triangular trade, the Middle Passage, and the plantation economies it fed — with first-person accounts by formerly enslaved writers — are taught in depth.",
        },
        {
          code: "§113.42(d)(8)(C)",
          text: "explain the major characteristics and impact of European imperialism;",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.colonialism-persists-today",
            "bvc.opium-wars",
          ],
          coverage: "full",
          note: "European imperialism upon indigenous peoples in Africa, Asia, and Oceania is analyzed through the commodities it moved — including the Opium Wars — and how colonial patterns persist today.",
        },
        {
          code: "§113.42(d)(6)(A)",
          text: "compare the major political, economic, social, and cultural developments of the Maya, Inca, and Aztec civilizations and explain how prior civilizations influenced their development; and",
          claimIds: ["bvc.mesoamerica-colonization"],
          coverage: "partial",
          note: "Maya and Aztec society is taught through the plants those societies governed (cacao as currency and sacrament; pulque and its Aztec governance), along with the impact of European colonization. The Inca, which the standard also names, are not covered.",
        },
        {
          code: "§113.42(d)(9)(C)",
          text: "trace the influence of the American and French revolutions on Latin America, including the role of Simón Bolivar; and",
          claimIds: ["bvc.haitian-revolution"],
          coverage: "partial",
          note: "The Haitian Revolution is taught in depth — directly shaped by the French Revolution — including the 1825 indemnity and its consequences for Haiti today. Simón Bolívar and the broader Latin American independence wars the standard names are not the focus.",
        },
        {
          code: "§113.42(d)(13)(D)",
          text: "explain the roles of modern world leaders, including Ronald Reagan, Mikhail Gorbachev, Lech Walesa, and Pope John Paul II, in the collapse of communism in Eastern Europe and the Soviet Union;",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Poland's Solidarność is worked in real depth — Lech Wałęsa, martial law, and the 1989 negotiated end of the communist state and its economic price. The standard also names Reagan, Gorbachev, and John Paul II across the whole Eastern Bloc, which we do not survey.",
        },
        {
          code: "§113.42(d)(17)(E)",
          text: "explain why communist command economies collapsed in competition with free market economies at the end of the 20th century.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Taught through one command economy in depth — a communist workers' state undone by the union it could not absorb, and the shock-therapy price of the market transition. Not a general account of why command economies failed everywhere.",
        },
        {
          code: "§113.42(d)(28)(C)",
          text: "analyze primary and secondary sources to determine frame of reference, historical context, and point of view;",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.nearest-green-oral-history",
            "history.migration-primary-sources",
          ],
          coverage: "full",
          note: "The Whose Voice method is exactly this — a planter's account read against Equiano and Mary Prince, the documentary record read against the oral record that preserved Nathan Green, every Great Migration lesson pointed at its archive.",
        },
      ],
    },

    // ── United States History Studies Since 1877 §113.41 (Adopted 2022) ────
    {
      id: "tx-us-history",
      subject: "Social Studies",
      name: "TEKS for Social Studies — United States History Studies Since 1877 (§113.41)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One Credit · Adopted 2022 · effective August 1, 2024 (19 TAC ch. 113, subch. C)",
      fetchedOn: "2026-07-17",
      sourceUrl: SS_SUBCH_C,
      adoption:
        "United States History Studies Since 1877 is where the catalog's American labor, migration, and civil-rights history maps — the union movement, the Great Migration, the civil-rights era, NAFTA, and Prohibition. Codes are Texas's own TEKS, transcribed verbatim.",
      standards: [
        {
          code: "§113.41(d)(13)(A)",
          text: "analyze the causes and effects of changing demographic patterns resulting from migration within the United States, including western expansion, rural to urban, the Great Migration, and the Rust Belt to the Sun Belt; and",
          claimIds: ["history.migration-streams-arrival", "history.jim-crow-and-long-shadow"],
          coverage: "full",
          note: "The Great Migration, which the standard names, is taught end to end: the Jim Crow South people fled, the routes and arrival cities, and the urban population it created.",
        },
        {
          code: "§113.41(d)(3)(B)",
          text: "analyze economic issues such as industrialization, the growth of railroads, the growth of labor unions, farm issues, the cattle industry boom, the growth of entrepreneurship, and the pros and cons of big business; and",
          claimIds: ["history.gilded-age-labor", "history.triangle-fire-debs", "history.wagner-act"],
          coverage: "partial",
          note: "The growth of labor unions the standard names is taught in real depth — the Knights and the AFL, Haymarket, Homestead, Pullman, the Triangle fire, and the Wagner Act. The other economic issues the strand bundles (railroads, farm issues, the cattle boom, big business) are not this catalog's subject.",
        },
        {
          code: "§113.41(d)(17)(E)",
          text: "describe the dynamic relationship between U.S. international trade policies and the U.S. free enterprise system such as the Organization of Petroleum Exporting Countries (OPEC) oil embargo, the General Agreement on Tariffs and Trade (GATT), and the North American Free Trade Agreement (NAFTA).",
          claimIds: ["history.nafta-usmca-labor"],
          coverage: "partial",
          note: "NAFTA, which the standard names, is taught from the labor side through its USMCA successor — the Rapid Response Mechanism and its limits. OPEC and GATT, the strand's other examples, are not covered.",
        },
        {
          code: "§113.41(d)(9)(I)",
          text: "evaluate changes in the United States that have resulted from the civil rights movement, including increased participation of minorities in the political process; and",
          claimIds: ["history.migration-civil-rights-politics", "history.labor-civil-rights"],
          coverage: "partial",
          note: "The Black urban vote the Great Migration created and the labor half of the civil-rights movement (Randolph to Memphis) are taught as agency and political change. A full account of the movement's every outcome is not attempted here.",
        },
        {
          code: "§113.41(d)(24)(B)",
          text: "describe the impacts of cultural movements in art, music, and literature such as Tin Pan Alley, the Harlem Renaissance, the Beat Generation, rock and roll, the Chicano Mural Movement, and country and western music on American society; and",
          claimIds: ["history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "The Harlem Renaissance, which the standard names, is taught as the New Negro and the Black press as an engine of the Migration. The other movements the strand lists are not covered.",
        },
        {
          code: "§113.41(d)(10)(E)",
          text: "describe significant societal issues of this time period such as the War on Drugs and the AIDS epidemic.",
          claimIds: ["bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "The War on Drugs, which the standard names, is covered in depth including its foreign-policy arm (Bolivia's coca model against U.S.-funded eradication, the balloon effect). The AIDS epidemic is worked as one HIV outbreak (Scott County, Indiana) rather than the national epidemic.",
        },
        {
          code: "§113.41(d)(28)(D)",
          text: "evaluate a variety of historical and contemporary sources for validity, credibility, bias, and accuracy;",
          claimIds: [
            "bvc.reading-ads-for-omission",
            "bvc.media-fallacies-recurring",
            "history.migration-primary-sources",
            "bvc.source-evaluation-modelled",
          ],
          coverage: "full",
          note: "Evaluating sources for bias and reliability is a recurring method — reading ads and campaign language for omission, and turning an unsupported statistic into a limitations-of-evidence lesson.",
        },
      ],
    },

    // ── Economics with Emphasis on the Free Enterprise System §113.31 ──────
    {
      id: "tx-economics",
      subject: "Social Studies",
      name: "TEKS for Social Studies — Economics with Emphasis on the Free Enterprise System (§113.31)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One-Half Credit · Adopted 2022 · effective August 1, 2024 (19 TAC ch. 113, subch. C)",
      fetchedOn: "2026-08-28",
      sourceUrl: SS_SUBCH_C,
      adoption:
        "Texas's required Economics course is filed in the social studies department (recommended for Grade 12), and it incorporates instruction in personal financial literacy by its own terms. The BVC series supplies three of its standards — price behavior, trade and trade barriers, and evaluating economic sources — through real commodity markets; two more, both in the personal-financial-literacy strand at §113.31(d)(16), were added on 2026-08-28 when the banking course shipped. Re-fetched from the TEA-published chapter PDF on that date. Codes are Texas's own TEKS, transcribed verbatim.",
      standards: [
        {
          code: "§113.31(d)(3)(B)",
          text: "compare the effects of free trade and trade barriers on economic activities, including the benefits and costs of participating in international trade; and",
          claimIds: [
            "bvc.sugar-program-trade-barriers",
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
          ],
          coverage: "full",
          note: "Both halves: the U.S. sugar program's import quotas, tariffs, and price supports (a trade barrier worked in detail, with its consumer cost) and the benefits and costs of trade traced along real commodity chains.",
        },
        {
          code: "§113.31(d)(2)(A)",
          text: "understand the effect of changes in price on the quantity demanded and quantity supplied;",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Price elasticity of demand is taught explicitly — inelastic coffee demand absorbing a sharp price spike — but this is one concept in context, not a full supply-and-demand unit with schedules and graphs.",
        },
        {
          code: "§113.31(d)(21)(D)",
          text: "analyze and evaluate a variety of economic information from primary and secondary sources for validity, credibility, accuracy, bias, propaganda, point of view, and frame of reference;",
          claimIds: ["bvc.reading-ads-for-omission", "bvc.source-evaluation-modelled"],
          coverage: "partial",
          note: "Reading economic and marketing sources for bias and omission is taught throughout, and a checkable bibliography is published — but the practice is modelled by the curriculum more than assessed as student-run economic-source analysis.",
        },
        // — The personal-financial-literacy strand of the Economics course, re-fetched 2026-08-28
        //   when MONEY-02 shipped. §113.31(d)(16)(D) is the closest fit to a course in this catalog
        //   of any standard in fifty-one jurisdictions: it asks for exactly the four things the
        //   banking course teaches, in the order it teaches them.
        {
          code: "§113.31(d)(16)(D)",
          text: "examine the types of accounts available to consumers from financial institutions and the risks, monetary costs, and benefits of maintaining these accounts.",
          claimIds: [
            "money.consumer-deposit-accounts",
            "money.unbanked-and-alternative-services",
            "money.consumer-financial-protection-mechanisms",
          ],
          coverage: "full",
          note: "Every element of the student expectation, from the rules rather than from a summary. The TYPES: checking, savings, money market deposit accounts and time deposits at banks and credit unions, prepaid accounts under Regulation E, and the nonbank substitutes households actually use. The RISKS: what federal deposit and share insurance covers and what it does not, why a Treasury security sits outside it, and why prepaid coverage is conditional rather than automatic. The MONETARY COSTS: the Truth in Savings disclosure a consumer may demand before opening, the minimum-balance waiver read as a price, and the overdraft opt-in and its boundary. The BENEFITS: automatic insured coverage, and the payment functions the course prices against every alternative.",
        },
        {
          code: "§113.31(d)(16)(A)",
          text: "explain the functions of financial institutions and how they affect households and businesses;",
          claimIds: ["money.consumer-deposit-accounts", "money.unbanked-and-alternative-services"],
          coverage: "partial",
          note: "Partial, and it is the household half. What a bank does with a deposit, what deposit and share insurance are for, how account pricing falls on households of different balances, and what happens to a household with no account at all are all taught, with the FDIC's own survey supplying the distribution. The effect on BUSINESSES, and the capital-formation framing the surrounding knowledge-and-skills statement carries at (16)(B) and (16)(C), are not taught.",
        },
      ],
    },

    // ── Personal Financial Literacy §113.49 (One-Half Credit, Adopted 2016) ──
    // NEW 2026-08-28. This whole course was rejected in the July 2026 pass with the sentence
    // "It also does no personal-finance instruction", which was true then. One student expectation
    // is now genuinely taught, so the framework exists rather than the course being unrepresented.
    {
      id: "tx-personal-financial-literacy",
      subject: "Social Studies",
      name: "TEKS for Social Studies — Personal Financial Literacy (§113.49)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One-Half Credit · Adopted 2016 (19 TAC ch. 113, subch. C · August 2024 update)",
      fetchedOn: "2026-08-28",
      sourceUrl: SS_SUBCH_C,
      adoption:
        "Texas's standalone Personal Financial Literacy elective, recommended for Grades 10-12 and taught in the social studies department. Its fifteen knowledge-and-skills statements run from goal setting through credit, insurance, estate planning and paying for college, and this catalog reaches one of them. Texas states its own reading rule at §113.49(b)(7): statements containing the word \"including\" reference content that must be mastered, while those containing \"such as\" are illustrative examples. The claim below relies on that rule. Codes are Texas's own TEKS, transcribed verbatim.",
      standards: [
        {
          code: "§113.49(c)(4)(C)",
          text: "compare total costs of alternative methods of payment such as rent-to-own, store credit, installment agreements, cash, bank credit card, and debit card; and",
          claimIds: ["money.unbanked-and-alternative-services", "money.consumer-deposit-accounts"],
          coverage: "partial",
          note: "Partial, and the partiality is about which methods rather than about the skill. Comparing the TOTAL cost of alternative methods of payment is the whole of the banking course's fifth section, done from published prices: a postal money order fee schedule, a state regulator's check-casher fee cap, a prepaid account's pre-acquisition short form, and the account disclosures a depository institution must provide. Because §113.49(b)(7) makes a \"such as\" list illustrative, the comparison need not use Texas's examples, and it does not: cash and debit card are covered, and prepaid cards, nonbank payment apps, money orders and check cashing stand in for the rest. Rent-to-own, store credit, installment agreements and bank credit cards are NOT taught here and belong to later courses in the same series.",
        },
      ],
    },

    // ── Personal Financial Literacy §113.49 (Adopted 2016) ─────────────────
    //
    // WHICH SECTION IS ACTUALLY IN EFFECT, because this is easy to get wrong and the file used to
    // imply otherwise. TWO Texas personal-finance courses sit side by side in Subchapter C and both
    // are currently in effect:
    //   · §113.49 Personal Financial Literacy (One-Half Credit), Adopted 2016. Source line:
    //     "The provisions of this §113.49 adopted to be effective August 22, 2016, 41 TexReg 2491."
    //   · §113.76 Personal Financial Literacy and Economics (One-Half Credit). Source line:
    //     "The provisions of this §113.76 adopted to be effective August 1, 2022, 47 TexReg 4511."
    // §113.76(b) provides that a student may not be awarded credit for both. We map §113.49 only,
    // because that is the section this file's rejection named and the one we transcribed; §113.76
    // has NOT been fetched and carries no claim (fetch-or-do-not-cite). Note also that the
    // "effective August 1, 2024, 48 TexReg 842" adoption line belongs to §113.31, not to §113.49.
    //
    // THIS SUPERSEDES A REJECTION. Until 2026-08-28 this file said the catalog "does no
    // personal-finance instruction", so neither §113.49 nor the §113.31 personal-finance strands
    // were claimed. MONEY-01 (`credit-decisions`) changes that for exactly one knowledge-and-skills
    // statement, (c)(9), which is about credit worthiness and the credit report. The rejection is
    // rewritten below rather than deleted.
    //
    // TWO OF SIXTEEN STATEMENTS, AND THAT RATIO IS THE HONEST PART. §113.49 is overwhelmingly a
    // saving, investing, insurance, retirement and college-financing course: (c)(1) through (c)(8),
    // (c)(11) through (c)(16) are budgeting, paychecks, consumption decisions, saving strategies,
    // investment options, retirement, risk, insurance, fraud, estate planning and paying for
    // college, none of which this catalog teaches. The two courses intersect at (c)(9) and at one
    // sub-expectation of (c)(10). Do not widen these to make the coverage look fuller.
    {
      id: "tx-personal-financial-literacy",
      subject: "Social Studies",
      name: "TEKS for Social Studies — Personal Financial Literacy (§113.49)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One-Half Credit · Adopted 2016 · effective August 22, 2016, 41 TexReg 2491 (19 TAC ch. 113, subch. C)",
      fetchedOn: "2026-08-28",
      sourceUrl: SS_SUBCH_C,
      adoption:
        "Texas's standalone half-credit Personal Financial Literacy course, filed in social studies at Chapter 113 alongside Economics and US Government, and distinct from the §113.76 Personal Financial Literacy and Economics course adopted in 2022 (a student may not receive credit for both). Its sixteen knowledge-and-skills statements run from earning and spending through saving and investing, credit and borrowing, insuring and protecting, and paying for postsecondary education. MONEY-01 (`credit-decisions`) meets the credit-worthiness statement (c)(9) and part of (c)(10)(A), and none of the rest. Transcribed verbatim 2026-08-28 from the TEA \"currently in effect\" social studies Subchapter C PDF, whose page footer reads \"High School §113.C. — August 2024 Update\".",
      standards: [
        {
          code: "§113.49(c)(9)(B)",
          text: "describe how to access and interpret a sample credit report and score;",
          claimIds: [
            "money.consumer-report-contents",
            "money.credit-score-as-model",
            "money.borrower-rights-dispute",
          ],
          coverage: "full",
          note: "Full, on both verbs. Access is the statutory free file disclosure at 15 U.S.C. 1681j and the centralized source Regulation V requires, taught to the floor rather than to a vendor's current offer. Interpretation is the whole middle of the course: what a consumer report is in the FCRA's own definition, what may appear in it and for how long under 1681c(a), and what a score is, which the statute defines as a modelled prediction rather than a measurement, disclosed with its range, its date, its provider and up to four key factors.",
        },
        {
          code: "§113.49(c)(9)(C)",
          text: "describe the importance of monitoring credit reports regularly and addressing mistakes;",
          claimIds: ["money.borrower-rights-dispute", "money.adverse-action-notice"],
          coverage: "full",
          note: "Full. Addressing mistakes is taught as the statutory procedure rather than as general advice: the dispute and reinvestigation duty at 15 U.S.C. 1681i, with its thirty-day clock running from receipt and its five-business-day notice to the furnisher; the furnisher's own investigation duty at 1681s-2(b); and the rule that an item which cannot be verified is deleted on the same terms as one proved false. Monitoring is the free annual disclosure, plus the additional free copy an adverse action notice must tell a consumer about.",
        },
        {
          code: "§113.49(c)(9)(A)",
          text: "discuss how character, capacity, and collateral can adversely or positively impact an individual's credit rating and the ability to obtain credit;",
          claimIds: ["money.credit-score-as-model", "money.credit-access-constraint"],
          coverage: "partial",
          note: "Partial. The course teaches at length what data actually feeds a credit rating and how it reaches a score, and it treats capacity as the timing constraint that drives borrowing in the first place. It does not use the three-Cs framing by name, and it does not teach collateral at all, which is a secured-lending concept the course does not reach. A teacher expecting the traditional three-Cs vocabulary will not find it here.",
        },
        {
          code: "§113.49(c)(9)(E)",
          text: "appraise the impact of borrowing decisions on credit score, including consequences of poor credit management and bankruptcy.",
          claimIds: ["money.consumer-report-contents", "money.credit-score-as-model"],
          coverage: "partial",
          note: "Partial. The course covers what adverse items are, how long each may be reported under 15 U.S.C. 1681c(a) including the ten-year period for a case under title 11, and how the file feeds the model. It refuses the rest of the standard on principle: it promises no outcome in points and gives no borrowing strategy, because it prints no claim that any step will move any future score. So the mechanism is taught and the appraisal of decisions is not.",
        },
        {
          code: "§113.49(c)(10)(A)",
          text: "examine the components of the cost of borrowing, including annual percentage rate (APR), fixed versus variable interest, length of term, grace period, and additional fees such as late payment, cash advance, and prepayment penalties;",
          claimIds: ["money.cost-of-credit-apr"],
          coverage: "partial",
          note: "Partial, and precisely on the first named component. The annual percentage rate is taught from the Truth in Lending Act's own purpose (disclosure so a consumer can compare more readily) and computed from the statutory open-end formula at 15 U.S.C. 1606(a)(2), with the closed-end actuarial method named. The rest of the standard's list — fixed against variable interest, length of term, grace period, and the fee taxonomy — is not taught here and is scheduled for MONEY-04.",
        },
      ],
    },

    // ── English Language Arts and Reading, English II §110.37 (Adopted 2017) ─
    {
      id: "tx-ela-english-ii",
      subject: "English/Language Arts",
      name: "TEKS for English Language Arts and Reading — English II (§110.37)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One Credit · Adopted 2017 · amended effective August 1, 2019 (19 TAC ch. 110, subch. C)",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://tea.texas.gov/laws-and-rules/sboe-rules-tac/sboe-tac-currently-effect/ch110c.pdf",
      adoption:
        "Texas writes its own ELA TEKS (English I-IV); the codes are Texas's own, never Common Core. English II (grade 10) is used here as the representative high-school course — its author's-craft, response, and inquiry strands are where the catalog's media literacy, rhetoric, and research work maps. English I, III, and IV carry parallel standards; see notClaimed.",
      standards: [
        {
          code: "§110.37(c)(11)(G)",
          text: "examine sources for: (i) credibility and bias, including omission; and (ii) faulty reasoning such as incorrect premise, hasty generalizations, and either-or;",
          claimIds: [
            "bvc.reading-ads-for-omission",
            "bvc.source-evaluation-modelled",
            "bvc.media-fallacies-recurring",
            "bvc.evaluate-claims-fallacies",
          ],
          coverage: "full",
          note: "Reading a text for bias including omission is the media-literacy method run in every episode, and identifying fallacious reasoning is taught by name (Reefer Madness, Doubt Is Our Product).",
        },
        {
          code: "§110.37(c)(8)(G)",
          text: "analyze the purpose of rhetorical devices such as appeals, antithesis, parallelism, and shifts and the effects of logical fallacies.",
          claimIds: [
            "bvc.rhetoric-power-persuasion",
            "bvc.evaluate-claims-fallacies",
            "bvc.reefer-madness-language-of-fear",
          ],
          coverage: "full",
          note: "Rhetorical devices and fallacies are analyzed in real primary texts — Lin Zexu's letter, the abolitionist sugar-boycott pamphlets, Torches of Freedom, and fear-based drug-policy media.",
        },
        {
          code: "§110.37(c)(8)(A)",
          text: "analyze the author's purpose, audience, and message within a text;",
          claimIds: ["bvc.author-rhetoric-primary-texts"],
          coverage: "full",
        },
        {
          code: "§110.37(c)(5)(J)",
          text: "defend or challenge the authors' claims using relevant text evidence.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Authors' differing accounts of the same events are put side by side and their evidence assessed — the reader is taught to defend or challenge each claim.",
        },
        {
          code: "§110.37(c)(7)(E)",
          text: "analyze characteristics and structural elements of argumentative texts such as: (i) clear arguable claim, appeals, and convincing conclusion; (ii) various types of evidence and treatment of counterarguments, including concessions and rebuttals; and (iii) identifiable audience or reader; and",
          claimIds: ["bvc.coffee-project-argument-paper", "bvc.evaluate-claims-fallacies"],
          coverage: "partial",
          note: "Argumentative structure — claim, evidence, and a required counterargument section — is exactly the Coffee project's Option D, and arguments are evaluated for validity throughout. But the composing side is one optional project in one episode, not a writing programme.",
        },
        {
          code: "§110.37(c)(11)(H)",
          text: "display academic citations, including for paraphrased and quoted text, and use source materials ethically to avoid plagiarism; and",
          claimIds: ["bvc.coffee-project-sources-ethics", "bvc.coffee-project-research-process"],
          coverage: "partial",
          note: "The Coffee project requires authoritative sources, an APA bibliography, and interview ethics (informed consent). Only the Coffee episode currently ships such a project, so we claim it for what it is.",
        },
      ],
    },

    // ── Health I §115.38 (Adopted 2020) ────────────────────────────────────
    {
      id: "tx-health-i",
      subject: "Health & Wellness",
      name: "TEKS for Health Education — Health I (§115.38)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One-Half Credit · Adopted 2020 · effective August 1, 2022 (19 TAC ch. 115, subch. C)",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://tea.texas.gov/laws-and-rules/sboe-rules-tac/sboe-tac-currently-effect/ch115c.pdf",
      adoption:
        "Texas's Health I standards span nutrition, mental health, substance use, safety, and reproductive health — most of which this catalog does not teach. Two health-literacy standards, and one on decision-making, are the honest matches; the rest are in notClaimed.",
      standards: [
        {
          code: "§115.38(c)(1)(A)",
          text: "analyze health information based on health-related standards;",
          claimIds: ["health.evaluate-dental-evidence", "health.health-product-claims"],
          coverage: "partial",
          note: "Evaluating health information is taught rigorously in two domains — dental-health evidence (evidence hierarchies, Cochrane reviews, myths debunked) and health-product/supplement marketing claims. The broader personal- and community-health scope of the strand is not this catalog's subject.",
        },
        {
          code: "§115.38(c)(1)(C)",
          text: "discuss the importance of early detection and warning signs that prompt individuals of all ages to seek health care.",
          claimIds: ["health.dental-care-access"],
          coverage: "partial",
          note: "What a regular dental checkup catches, and the mouth-body evidence, is taught honestly as one early-detection case. General early-detection across conditions is not covered.",
        },
        {
          code: "§115.38(c)(3)",
          text: "explain and demonstrate decision-making skills based on health information.",
          claimIds: [
            "health.blueprint-goal-plan",
            "health.woop-goal-setting",
            "health.n-of-1-implement-adjust",
          ],
          coverage: "partial",
          note: "Two courses have the learner actually do this on their own data — a 90-day health blueprint and a WOOP plan with if-then implementation intentions — which is decision-making based on health information. The strand's framing (a healthy self-concept) is broader than what the courses target.",
        },
      ],
    },

    // ── Physical Education §116.62 & §116.64 (Adopted 2020) ─────────────────
    {
      id: "tx-physical-education",
      subject: "Physical Education",
      name: "TEKS for Physical Education — Lifetime Fitness and Wellness Pursuits (§116.62) & Skill-Based Lifetime Activities (§116.64)",
      publisher: "Texas Education Agency (TEA) / State Board of Education (SBOE)",
      version: "One Credit each · Adopted 2020 · effective August 1, 2022 (19 TAC ch. 116, subch. C)",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://tea.texas.gov/laws-and-rules/sboe-rules-tac/sboe-tac-currently-effect/ch116c.pdf",
      adoption:
        "Texas's high-school PE courses. An online course cannot demonstrate motor competency, so we claim knowledge- and planning-side outcomes only — each entry says so. Codes are Texas's own TEKS, transcribed verbatim.",
      standards: [
        {
          code: "§116.62(c)(3)(H)",
          text: "select and use appropriate technology tools to evaluate, monitor, and improve health-related fitness;",
          claimIds: ["pe.wearable-tech-activity"],
          coverage: "full",
          note: "This is the course's literal premise: the learner uses a wearable (or a phone) plus a daily log, every day for five weeks, to read and support their own activity.",
        },
        {
          code: "§116.62(c)(3)(I)",
          text: "design and implement a personal fitness program that includes health-related fitness components;",
          claimIds: ["pe.fitness-plan-blueprint", "health.blueprint-goal-plan"],
          coverage: "full",
          note: "The capstone is exactly this: a baseline assessment, goals, an activity plan, a daily log, and a 90-day timeline, all built from the learner's own data.",
        },
        {
          code: "§116.62(c)(5)(E)",
          text: "evaluate consumer issues and trends related to physical fitness such as marketing claims promoting fitness and nutritional products, services, and supplements;",
          claimIds: ["health.health-product-claims"],
          coverage: "full",
          note: "Evaluating fitness- and supplement-marketing claims, and verifying a claim yourself, is taught directly.",
        },
        {
          code: "§116.64(c)(2)(C)",
          text: "describe appropriate practice procedures to improve skill and strategy in a sport;",
          claimIds: ["pe.sport-strategy-knowledge"],
          coverage: "partial",
          note: "The concepts, strategies, and tactics of a sport are taught in depth across golf, tennis, football, pickleball, lacrosse, and croquet. But most of this section's outcomes ask a student to DEMONSTRATE motor competency, which an online course cannot; we claim the knowledge side only.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics and Personal Financial Literacy — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Texas mathematics TEKS. The personal-finance half of this entry has been superseded; see the entry below.",
    },
    {
      heading: "Mathematics — nothing. Personal Financial Literacy — three of many, now that banking is taught.",
      body: "This catalog does no mathematics instruction, so it meets no Texas mathematics TEKS, and that half is unchanged. The other half used to read that the catalog does no personal-finance instruction, so neither the Personal Financial Literacy strands of Economics (§113.31(d)(15)-(20)) nor the standalone Personal Financial Literacy course (§113.49) was claimed. That changed on 2026-08-28 and the correction is recorded here rather than deleted. Now claimed: §113.31(d)(16)(D) in full (types of consumer accounts and their risks, costs and benefits), §113.31(d)(16)(A) in part (the functions of financial institutions, household half only), and §113.49(c)(4)(C) in part (comparing total costs of alternative methods of payment). Still not claimed, and named so the gap stays visible: §113.31(d)(15) (types of business ownership), (16)(B) and (16)(C) (capital formation, and interest and risk in allocating savings), (17) (investing, savings programmes, reconciling a checking account, loans, borrowing and credit scores), (18) (credit card debt, bankruptcy, insurance, charitable giving), (19) (renting against buying a home), and (20) (paying for postsecondary education). In §113.49, the other fourteen knowledge-and-skills statements are not claimed. Nothing is claimed before it is taught.",
    },
    {
      heading: "Science — Texas is NOT an NGSS state, and we did not fetch its science TEKS.",
      body: "Texas writes its own science TEKS (19 TAC Chapter 112), not the Next Generation Science Standards. This catalog has no laboratory work, investigations, or modelling, and we did not fetch the Texas science standards this pass. Our rule is fetch-or-don't-cite, so Texas gets no science claim — unlike Arizona, where we fetched the document and found two Earth-science partials.",
    },
    {
      heading: "Personal Financial Literacy (§113.49, §113.31(d)(15)-(20)) — this rejection has been superseded, in part.",
      body: "Until 2026-08-28 this file told a Texas teacher, in the catalog's own words, that it did no personal-finance instruction at all, and that neither §113.49 nor the Economics personal-finance strands were claimed. That was accurate then and is not now. MONEY-01 teaches how a consumer credit decision is made, from the Fair Credit Reporting Act, the Equal Credit Opportunity Act and Regulation B, and five §113.49 standards are claimed above: (c)(9)(B) and (c)(9)(C) in full, (c)(9)(A), (c)(9)(E) and (c)(10)(A) in part, each with its limit stated on its own entry. What remains unclaimed is most of the course, and the reasons are specific. Knowledge and skills statements (c)(1) through (c)(3) are financial goals, income statements, budgets, balance sheets and paycheck components; (c)(4) is consumption decisions including renting against buying and payment methods; (c)(5) through (c)(7) are saving, investing and retirement; (c)(8) is a survey of credit sources and types, which the course does not attempt; (c)(11) and (c)(12) are risk management and insurance; (c)(13) is fraud, scams and identity theft; (c)(14) is estate planning; and (c)(15) and (c)(16) are postsecondary education costs and how to pay for them. None of that is taught here, and the course states in three separate lessons that it gives no financial advice, so a budgeting or investing claim would misdescribe it. Inside Economics, the §113.31(d)(15)-(20) personal-finance strands remain unclaimed for the same reason: (d)(15) is business ownership forms, (d)(16) is financial institutions and capital formation, (d)(17) is investing and checking accounts, (d)(18) is credit-card debt, bankruptcy and insurance decisions, (d)(19) is renting against buying a home, and (d)(20) is paying for college. Two of the strand's sub-expectations, (d)(17)(E) on the responsibilities and obligations of borrowing and (d)(17)(F) on understanding one's credit score, come closest, and they were read and declined: (F) pairs understanding with developing strategies to become a low-risk borrower, which is exactly the advice this course refuses to give, and (E) asks for the obligations rather than their consequences. A separate section, §113.76 Personal Financial Literacy and Economics, was adopted effective August 1, 2022 and is also currently in effect; it has not been fetched and carries no claim, per fetch-or-do-not-cite.",
    },
    {
      heading: "Grade 7 Texas History (§113.20) — where the flagship's fullest home lives, not yet fetched.",
      body: "Texas's dedicated instruction on the Texas Constitution, the plural executive, Texas's courts, and Texas local government sits in Grade 7 Texas History (§113.20, Subchapter B, middle school). That is the natural 1:1 home for Texas Civics. We mapped the flagship into the high-school United States Government course's national/state/local comparison standards ((d)(7)(H), (d)(9)(A)) this pass, honestly as partial, and defer §113.20 to a later pass rather than cite standards we have not read.",
    },
    {
      heading: "Texas has no citizen-initiative standard, because Texas has no citizen initiative.",
      body: "A distinctive flagship lesson is that Texas has NO statewide citizen initiative — only the Legislature may propose constitutional amendments. Arizona's and California's standards reward teaching their direct-democracy tools; Texas's do not, because there is nothing of the kind to teach. So that lesson, though central to understanding Texas, maps to no TEKS and we claim none for it. The gap is in Texas's government, correctly reflected in its standards.",
    },
    {
      heading: "Most of the United States Government federal-heavy standards.",
      body: "§113.44(d)(1) (founding philosophy and individuals as named content), (d)(2) (parties, interest groups, and media affecting public policy — our media-literacy work is consumer protection, not political-media analysis), (d)(3) (geography of districts, gerrymandering, Baker v. Carr), (d)(4)-(5) (government and the free enterprise economy, fiscal policy, international trade set by the branches), (d)(10) (political parties and the two-party system), (d)(11) (comparing the U.S. to other political systems as named content), (d)(16)-(18) (government policy and culture; science, technology, and government) — the courses do not genuinely teach these as the standard requires, so we do not claim them.",
    },
    {
      heading: "The landmark-cases overlap is thin, and we say so.",
      body: "Our Know Your Rights course teaches Tinker, Brandenburg, Mapp, Terry, T.L.O., Riley, and Carpenter as applicable rules. The US Government standard §113.44(d)(12)(E) enumerates Engel, Schenck, Texas v. Johnson, Miranda, Gideon, Mapp, and Roe — Mapp is the only direct overlap (Tinker appears separately in US History §113.41(d)(20)(A)). We claim the case-application skill as partial and do not pretend to cover this standard's specific case list.",
    },
    {
      heading: "The rest of World History, US History, World Geography, and Economics we checked.",
      body: "We read the full knowledge-and-skills of each social studies course and claim only the standards the catalog genuinely teaches. The surveys of Renaissance/Reformation, the World Wars, the Cold War as a whole, the American political eras, monetary and fiscal policy, market structures, and the many social studies skills sub-standards not listed above are not claimed. The reject list is the evidence the map was not padded.",
    },
    {
      heading: "English I, III, and IV; and the ELA composition strand as a programme.",
      body: "We mapped English II (§110.37) as the representative course; English I (§110.36), III (§110.38), and IV (§110.39) carry parallel author's-craft, response, and inquiry standards we did not separately transcribe. And the composition strand's sustained writing expectations are met only by the Coffee project — one optional project in one episode — so we claim the argument and research standards as partial, never a full writing programme.",
    },
    {
      heading: "Health strands beyond health literacy and decision-making.",
      body: "Health I (§115.38) mental- and social-emotional health, healthy eating and physical activity as named content, injury and violence prevention, alcohol/tobacco/other drugs, and reproductive and sexual health were checked and are not genuinely taught by these courses. We claim only the two health-literacy standards and the decision-making standard, all partial.",
    },
    {
      heading: "Physical Education motor-demonstration outcomes.",
      body: "Every PE outcome that asks a student to DEMONSTRATE or PARTICIPATE in physical activity (competency in target, striking/fielding, fitness, rhythmic, and innovative activities; officiating; skill performance) is out of reach of an online course. We claim only the technology, personal-fitness-planning, consumer-evaluation, and sport-strategy KNOWLEDGE outcomes, and say so on each.",
    },
  ],
};
