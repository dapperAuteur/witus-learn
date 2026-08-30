// ─────────────────────────────────────────────────────────────────────────────
// OKLAHOMA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ok` was written FROM Oklahoma's own official sources (oklegislature.gov,
// elections.ok.gov, oscn.net, and the 1907 Constitution), so Oklahoma's civics flagship gets
// its 1:1 state-civics course.
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from OSDE's own record (Oklahoma is
// BESPOKE-heavy — it withdrew from the Common Core in 2014):
//   · Social studies — BESPOKE. The Oklahoma Academic Standards for Social Studies (adopted 2019)
//     are Oklahoma's own. The grade-12 United States Government course (code prefix USG) is the
//     anchor for the Oklahoma Civics flagship, and — unusually — it reaches Oklahoma's OWN civic
//     landscape explicitly: USG.3.3 names the relationships among "national, state, tribal, and
//     local governments" and USG.3.4 names tribal sovereignty and the Major Crimes Act (the exact
//     constitutional question McGirt v. Oklahoma, 2020, turned on), so the flagship's structure AND
//     tribal-sovereignty lessons have a genuine home. We also map the World History (WH), United
//     States History (USH), Economics (E), and World Human Geography (WG) courses from the same
//     document.
//   · Personal financial literacy — BESPOKE, and a SEPARATE DOCUMENT. Oklahoma does not file
//     personal finance inside the social studies standards; it publishes the Oklahoma Academic
//     Standards for Personal Financial Literacy, Grades 7-12 (2024) on its own, implementing the
//     fourteen areas of instruction the Passport to Financial Literacy Act of 2007 requires. Added
//     2026-08-29 and mapped at PFL.10 only; see that framework's own header for the whole story.
//   · ELA / Math — BESPOKE, and DEFERRED this pass. Oklahoma repealed its Common Core adoption in
//     2014 and writes its own Oklahoma Academic Standards for ELA and Math; our media-literacy,
//     source-evaluation, and BVC rhetoric work WOULD map to the OAS ELA reading-informational and
//     writing strands, but we have not yet fetched and verified the OAS ELA document. Fetch-or-
//     don't-cite: no ELA/Math claims this pass (published in notClaimed).
//   · Science — BESPOKE, and DEFERRED. Oklahoma's science standards (adopted 2020) are Oklahoma's
//     own, NGSS-INFLUENCED but not verbatim NGSS, so our shared NGSS file does NOT apply and we do
//     not blind-alias it. The one Earth-science-adjacent claim other states hang on HS-ESS3-1 is
//     deferred until the OAS Science document is fetched and verified (published in notClaimed).
//
// Provenance: the Oklahoma Academic Standards for Social Studies were transcribed VERBATIM from
// OSDE's own published PDF (the sourceUrl below), fetched 2026-07-19. The document's cover prints
// the title only, no year; OSDE's standards page identifies the current Social Studies standards
// as those adopted in 2019, so that is the version cited (labelled "adopted 2019" throughout, per
// the authoritative-values rule). Codes are cited exactly as printed: USG.<strand>.<n>, WH.<n>.<n>,
// USH.<n>.<n>, E.<n>.<n>, WG.<n>.<n>. Multi-part standards (sub-letters A, B, …) are cited by their
// parent code with the covered sub-part named in the note.
// Provenance (personal financial literacy): the 2024 Oklahoma Academic Standards for Personal
// Financial Literacy were transcribed VERBATIM from OSDE's own published PDF (that framework's
// sourceUrl), fetched 2026-08-29. Its cover, its running header and its PDF Title field all print
// the 2024 edition, so no version has to be inferred.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const OK_SS =
  "https://oklahoma.gov/content/dam/ok/en/osde/documents/services/standards-learning/social-studies/Oklahoma-Academic-Standards-for-Social-Studies.pdf";

const OK_PFL =
  "https://oklahoma.gov/content/dam/ok/en/osde/documents/services/literacy-policy-and-programs/oklahoma-academic-standards/2024-OAS-Personal-Financial-literacy-Standards.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "OK",
  frameworks: [
    // ── United States Government (USG) — the flagship's home ──────────────
    {
      id: "ok-usg",
      subject: "Social Studies",
      name: "Oklahoma Academic Standards for Social Studies — United States Government (USG)",
      publisher: "Oklahoma State Department of Education (OSDE)",
      version: "Oklahoma Academic Standards for Social Studies · adopted 2019 · United States Government",
      fetchedOn: "2026-07-19",
      sourceUrl: OK_SS,
      adoption:
        "Oklahoma's grade-12 United States Government course (USG) is the anchor for the Oklahoma Civics flagship. Two of its standards reach Oklahoma's own civic landscape directly — USG.3.3 names the national/state/tribal/local relationships and USG.3.4 names tribal sovereignty and the Major Crimes Act (the McGirt question) — so, unlike the abstract-concept states, the flagship's structure and tribal-sovereignty lessons have a genuine home. The federal branches, rights, and participation standards carry the general U.S. civics ladder. Transcribed verbatim from the OSDE 2019 Social Studies Standards (see the file header for provenance).",
      standards: [
        // — USG.2 Historical & philosophical foundations —
        {
          code: "USG.2.3",
          text: "Evaluate the necessity of a written constitution to set forth enumerated powers, to organize government, and to distribute powers among the three branches of government, the states, and the people.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.federal-powers-taxonomy",
          ],
          coverage: "full",
          note: "All three of the standard's distributions are taught: the Constitution worked article by article (enumerated powers, how it organizes government), the separation among the three branches, and the division between the states and the people through the powers taxonomy and federalism.",
        },
        {
          code: "USG.2.5",
          text: "Analyze the constitutional amendment process including the 27 amendments to the Constitution of the United States.",
          claimIds: ["civics.article-v-amendment"],
          coverage: "full",
          note: "Article V's amendment procedure and the key later amendments are taught head-on, including why the federal bar is set so high.",
        },
        // — USG.3 Fundamental principles of the American system —
        {
          code: "USG.3.3",
          text: "Summarize and explain the relationships and the responsibilities among national, state, tribal, and local governments.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.local-government-layers",
            "civics.ok-two-high-courts",
            "civics.ok-plural-executive",
            "civics.ok-legislature-initiative",
            "civics.ok-courts-merit-selection",
            "civics.ok-local-government",
            "civics.ok-tribal-nations",
          ],
          coverage: "full",
          note: "All four levels the standard names are addressed, and the STATE level is taught through Oklahoma's own government in depth — the two courts of last resort and merit-selected appellate judiciary, the large plural executive, and the term-limited 101/48-member Legislature. Oklahoma's USG course has no dedicated state-structure code (the split top bench, the plural executive, and Oklahoma's first-in-the-nation constitutional initiative have no code of their own), so those flagship lessons are cited here as part of the state level's responsibilities. The national/state relationship is taught through federalism, the local level through the local-government layers and Oklahoma's 77 counties, and the TRIBAL level through the flagship's sovereign-tribal-nations lesson — which is exactly why Oklahoma gets this claim where an abstract-concept state would not.",
        },
        {
          code: "USG.3.4",
          text: "Explain that tribal sovereignty is a tribal nation’s inherent power to self-govern, such as challenges made regarding the Major Crimes Act.",
          claimIds: ["civics.ok-tribal-nations"],
          coverage: "full",
          note: "Near-1:1 with the flagship: tribal sovereignty as a nation's inherent power to self-govern is taught directly, and the Major Crimes Act the standard names is the exact statute at issue in McGirt v. Oklahoma (2020), which the flagship teaches (flagged time-sensitive, as its implications are still being worked out).",
        },
        {
          code: "USG.3.6",
          text: "Explain how power is separated as well as shared under the American system including the A. system of separation of powers B. system of checks and balances C. principle of judicial review.",
          claimIds: ["civics.separation-checks-balances", "civics.judicial-review-marbury"],
          coverage: "full",
          note: "All three named systems are taught directly: separation of powers and checks and balances in the Constitution course, and judicial review by name through Marbury v. Madison.",
        },
        {
          code: "USG.4.2",
          text: "Examine the structure, functions, and authority exercised by the executive, legislative, and judicial branches of government.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
            "civics.federal-bill-process",
            "civics.federal-judiciary-structure",
            "civics.judicial-review-marbury",
            "civics.federal-powers-taxonomy",
          ],
          coverage: "partial",
          note: "Partial: the three branches and their Article I–III structure, the constitutional qualifications and composition (sub A), the legislative process end to end (sub B — an entire course), the judiciary, and two of the standard's named cases — Marbury v. Madison and McCulloch v. Maryland — are taught. The bureaucracy's role (sub C) and the three remaining named cases (United States v. Nixon, Bush v. Gore, Citizens United v. F.E.C.) are not.",
        },
        {
          code: "USG.4.1",
          text: "Explain the purposes of government expressed in the Preamble and how the Constitution of the United States preserves the core principles of American society.",
          claimIds: ["civics.three-branches-federal", "civics.constitution-article-by-article"],
          coverage: "partial",
          note: "Partial: the purposes of government and the Constitution's core principles are taught (the purpose-of-government lesson and the article-by-article analysis). The Preamble itself is not worked clause by clause as a text.",
        },
        {
          code: "USG.1.3",
          text: "Compare the advantages and disadvantages of the ways governmental power is distributed, shared and structured in unitary, federal and confederal systems in terms of effectiveness, prevention of abuse of power and responsiveness to the popular will.",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy"],
          coverage: "partial",
          note: "Partial: the FEDERAL system — why power is split, and how it is shared and structured — is taught in depth, including its role in preventing the abuse of power. The systematic comparison against UNITARY and CONFEDERAL systems the standard also asks for is not taught.",
        },
        {
          code: "USG.3.1",
          text: "Examine the American system of federalism and evaluate the changes that have occurred in the relationship between the states and the national government over time.",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy"],
          coverage: "partial",
          note: "Partial: federalism and the key expansions of national power over the states — McCulloch v. Maryland and the reach of the Commerce Clause — are taught directly. A systematic chronological survey of how the relationship changed over time is not.",
        },
        {
          code: "USG.3.2",
          text: "Analyze the system of federalism including the A. enumerated (express) powers B. implied powers C. powers denied to the national government D. reserved powers to the states E. concurrent powers.",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "partial",
          note: "Partial: four of the five named categories are taught by name in the powers taxonomy — enumerated (A), implied via the Necessary and Proper Clause (B), reserved to the states via the Tenth Amendment (D), and concurrent (E). The powers DENIED to the national government (C) are not taught as a category.",
        },
        {
          code: "USG.3.9",
          text: "Analyze the rights and liberties guaranteed to all citizens in the Bill of Rights and how they are protected at the state level through the doctrine of incorporation using the 14th Amendment.",
          claimIds: ["civics.bill-of-rights-overview", "rights.landmark-cases"],
          coverage: "partial",
          note: "Partial: the Bill of Rights and the rights it guarantees are taught as applicable rules with their landmark cases. HOW those rights come to bind the states — the incorporation doctrine through the 14th Amendment — is not taught in depth.",
        },
        {
          code: "USG.3.10",
          text: "Analyze historic and contemporary examples of landmark Supreme Court decisions which have addressed and clarified individual rights under the First Amendment, including A. Gitlow v. New York (1925) B. West Virginia v. Barnette (1943) C. Engel v. Vitale (1962) D. Tinker v. Des Moines (1969) E. Texas v. Johnson (1989).",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial: Tinker v. Des Moines (sub D) is taught by name, and the First Amendment freedoms — speech, religion, press, assembly, including at school and online — are taught as applicable rules with their limits. The other four named cases (Gitlow, Barnette, Engel, Texas v. Johnson) are not each worked.",
        },
        {
          code: "USG.3.11",
          text: "Analyze historic and contemporary examples of landmark Supreme Court cases which have specified individual rights of due process under the Constitution, including: A. Mapp v. Ohio (1961) B. Gideon v. Wainwright (1963) C. Miranda v. Arizona (1966) D. Roe v. Wade (1973) E. Furman v. Georgia (1972).",
          claimIds: ["rights.landmark-cases"],
          coverage: "partial",
          note: "Partial: Mapp v. Ohio (sub A) and the Fourth Amendment's due-process protections against unreasonable searches are taught as a rule a student can apply. The other four named cases (Gideon, Miranda, Roe, Furman) are not taught.",
        },
        {
          code: "USG.3.7",
          text: "Evaluate the importance of the rule of law on the purposes and functions of government; explain how the rule of law provides for the protection of individual liberties, including due process and equality under the law.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial: the protection-of-individual-liberties half is taught — the Fourth-Amendment due-process protections, and when government may and may not constitutionally limit rights. The rule of law and equality under the law as named principles are not worked head-on.",
        },
        // — USG.5 Civic participation (the participation ladder) —
        {
          code: "USG.5.1",
          text: "Define civic virtue and explain the individual’s duty and responsibility to participate in civic life by voting, serving on juries, volunteering within the community, running for office, serving on a political campaign, paying state and federal taxes prior to the April 15th annual deadline, and respecting legitimate authority.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
            "civics.campaign-help",
            "civics.run-for-office",
          ],
          coverage: "full",
          note: "Almost every named duty is taught as practice, not exhortation: voting (registration walkthroughs), jury service (an entire course), volunteering, serving on a political campaign lawfully (an entire course), running for office (an entire course), and the responsibilities lesson's coverage of taxes and respecting legitimate authority.",
        },
        {
          code: "USG.5.2",
          text: "Explain the naturalization process under the laws of the United States.",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "full",
          note: "The naturalization process is taught step by step, alongside the 14th Amendment and birthright citizenship.",
        },
        {
          code: "USG.5.3",
          text: "Analyze how our system of government provides citizens opportunities to monitor and influence the actions of the government and hold elected officials accountable.",
          claimIds: ["civics.track-a-bill", "civics.show-up-every-level", "civics.ok-get-involved"],
          coverage: "full",
          note: "Taught as practice: tracking a live bill and making your voice heard on it, showing up at the level where an issue is decided, and Oklahoma's own levers — the state's strong initiative, county commissions, and contacting legislators in Oklahoma City.",
        },
        {
          code: "USG.5.5",
          text: "Explain the steps of the electoral process including the components of local and national campaigns, the nominative process, and the Electoral College.",
          claimIds: ["civics.election-mechanics", "civics.electoral-college"],
          coverage: "full",
          note: "The electoral process is taught end to end — registration through counting and certification, primaries and the nomination process, and the Electoral College's mechanics and original purpose.",
        },
      ],
    },

    // ── World History (WH) ─────────────────────────────────────────────────
    {
      id: "ok-wh",
      subject: "Social Studies",
      name: "Oklahoma Academic Standards for Social Studies — World History (WH)",
      publisher: "Oklahoma State Department of Education (OSDE)",
      version: "Oklahoma Academic Standards for Social Studies · adopted 2019 · World History",
      fetchedOn: "2026-07-19",
      sourceUrl: OK_SS,
      adoption:
        "Oklahoma's high-school World History course. The colonial, imperial, commodity-trade, and Cold-War content of the BVC Commodity Map and the labor-history catalog maps onto its Global-Age, revolutions-and-imperialism, and post-war strands. Transcribed verbatim from the OSDE 2019 Social Studies Standards.",
      standards: [
        {
          code: "WH.2.3",
          text: "Analyze migration, settlement patterns, cultural diffusion, and the transformations caused by the competition for resources among European nations during the Age of Exploration.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "This is the curriculum's method: European competition for the resources that could only grow in certain places (the growing belts), the conquest of Mesoamerica and the Caribbean, and the Columbian Exchange as cultural and biological diffusion.",
        },
        {
          code: "WH.2.4",
          text: "Explain how slavery and the slave trade was used for the development and growth of colonial economies.",
          claimIds: ["bvc.plantation-economy-resistance", "bvc.conquest-columbian-exchange"],
          coverage: "full",
          note: "Taught directly through the plantation cash-crop systems: the transatlantic slave trade as the engine of the sugar and rum colonial economies, and the resistance to it.",
        },
        {
          code: "WH.3.5",
          text: "Explain the rationales for and consequences of imperialism on Asia, Africa, and the Americas, such as colonization and the exploitation of natural resources and peoples; summarize various efforts to resist imperialism.",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.colonialism-persists-today",
            "bvc.plantation-economy-resistance",
            "bvc.opium-wars",
          ],
          coverage: "full",
          note: "Both halves the standard asks for: the rationales and consequences of imperialism worked through the commodities that drove it (the exploitation of resources and peoples across Asia, Africa, and the Americas, and how those patterns persist today), and the efforts to resist it — from Maroon communities to the Opium Wars to revolution.",
        },
        {
          code: "WH.3.2",
          text: "Summarize the influence and global impact of emerging democratic ideals on the Latin American and Caribbean revolutions including Haiti and Mexico and the leadership of Simon Bolivar.",
          claimIds: ["bvc.haitian-revolution"],
          coverage: "partial",
          note: "Partial: ONE of the standard's named revolutions — Haiti's — is taught in real depth, through the 1825 indemnity and its long consequences. Mexico and the leadership of Simón Bolívar are not taught.",
        },
        {
          code: "WH.5.5",
          text: "Evaluate the people, events, and conditions leading to the end of the Cold War including the A. effects of Poland’s Solidarity Movement B. policies of the perestroika and glasnost C. fall of the Berlin Wall D. breakup of the Soviet Union.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Partial: sub A — the effects of Poland's Solidarity Movement — is taught in real depth, from a workers' state through martial law to the 1989 negotiated exit and its economic price. Perestroika and glasnost, the fall of the Berlin Wall, and the breakup of the Soviet Union (subs B–D) are not taught.",
        },
        {
          code: "WH.6.1",
          text: "Describe the ongoing impact of interdependence on the world’s economies resulting in the creation and growth of multinational organizations, international trade agreements, and the challenges faced by the global economy.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: global economic interdependence is taught through commodity value chains (who captures value, the commodity trap) and one international trade agreement worked in depth — NAFTA→USMCA and its labor consequences. Multinational organizations as institutions are not the worked subject.",
        },
        {
          code: "WH.6.3",
          text: "Describe the impact of trade and interdependence on cultural diffusion.",
          claimIds: ["bvc.tea-trade-networks", "bvc.conquest-columbian-exchange"],
          coverage: "partial",
          note: "Partial: trade as a vector of cultural diffusion is taught through the tea trade networks (the Tea Horse Road and Maritime Silk Road) and the Columbian Exchange. It is not a general treatment of trade-driven cultural diffusion.",
        },
      ],
    },

    // ── United States History (USH) ────────────────────────────────────────
    {
      id: "ok-ush",
      subject: "Social Studies",
      name: "Oklahoma Academic Standards for Social Studies — United States History (USH)",
      publisher: "Oklahoma State Department of Education (OSDE)",
      version: "Oklahoma Academic Standards for Social Studies · adopted 2019 · United States History",
      fetchedOn: "2026-07-19",
      sourceUrl: OK_SS,
      adoption:
        "Oklahoma's high-school United States History course. The labor-history, Great Migration, civil-rights, and NAFTA content maps onto its Gilded-Age, interwar, and Cold-War-to-present strands. These are broad multi-part standards; each entry below is partial and names in its note exactly which sub-part the catalog teaches. Transcribed verbatim from the OSDE 2019 Social Studies Standards.",
      standards: [
        {
          code: "USH.2.1",
          text: "Evaluate the transformation of American society, economy and politics during the American Industrial Revolution.",
          claimIds: ["history.gilded-age-labor", "history.triangle-fire-debs"],
          coverage: "partial",
          note: "Partial: sub E — the significance of the Labor Movement, naming the Pullman strikes, the Haymarket Riot, and Eugene V. Debs — is taught in depth (the Knights and the AFL, Haymarket, Homestead, Pullman, the Triangle fire, and Debs' socialist movement). The standard's robber-baron, invention, muckraker, suffrage/temperance, Plessy, and Booker T. Washington/DuBois sub-parts are not taught.",
        },
        {
          code: "USH.2.2",
          text: "Evaluate the rise and reforms of Populism and the Progressive Movement.",
          claimIds: ["bvc.prohibition"],
          coverage: "partial",
          note: "Partial: within sub C's list of Progressive-Era amendments, the Eighteenth Amendment (Prohibition) and its repeal are taught in depth — the movement's rhetoric, the Amendment, and the Volstead Act. The direct-primary/initiative/referendum/recall reforms (sub A), Bryan's Cross of Gold (sub B), and the other named amendments are not taught here.",
        },
        {
          code: "USH.3.2",
          text: "Evaluate the long-term impact of America’s entry into World War I on national politics, the economy, and society.",
          claimIds: [
            "history.migration-streams-arrival",
            "history.migration-civil-rights-politics",
            "history.jim-crow-and-long-shadow",
          ],
          coverage: "partial",
          note: "Partial: sub B names the Great Migration among the war's home-front effects, and the Great Migration is an entire course here — the Jim Crow push, the routes and arrival cities, and the Black urban vote and civil-rights politics it created. The standard's neutrality-to-engagement, First Red Scare, and Fourteen Points sub-parts are not taught.",
        },
        {
          code: "USH.4.1",
          text: "Examine the economic, political, and social transformations between the World Wars.",
          claimIds: ["history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: sub A's cultural expression — the significant impact of people of African descent as exhibited by the Harlem Renaissance — is taught (the Renaissance and the New Negro, tied to the Great Migration and the Black press). The Jazz Age, the Tulsa Race Riot, the Indian Citizenship Act, labor unrest, and easy-credit-boom sub-parts are not taught.",
        },
        {
          code: "USH.7.1",
          text: "Analyze the major events, personalities, tactics and effects of the Civil Rights Movement.",
          claimIds: ["history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: the labor half of the movement is taught — A. Philip Randolph from the Brotherhood of Sleeping Car Porters through the 1963 March on Washington to Memphis 1968, and the unions' own colour bar. The standard's Oklahoma cases (Ada Lois Sipuel Fisher, George McLaurin, Clara Luper's Oklahoma City lunch-counter sit-ins) and its named national leaders and events (Dr. King's I Have a Dream speech, Malcolm X, Brown, Montgomery, Selma) are not each worked.",
        },
        {
          code: "USH.8.5",
          text: "Describe and evaluate the influence of William J. Clinton’s presidency.",
          claimIds: ["history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: sub A's NAFTA is taught in depth from the labor side, through its renegotiation into the USMCA and the Rapid Response Mechanism. The NATO interventions in the former Yugoslavia and the political impact of Clinton's impeachment (subs A and B) are not taught.",
        },
      ],
    },

    // ── Economics (E) ──────────────────────────────────────────────────────
    {
      id: "ok-econ",
      subject: "Social Studies",
      name: "Oklahoma Academic Standards for Social Studies — Economics (E)",
      publisher: "Oklahoma State Department of Education (OSDE)",
      version: "Oklahoma Academic Standards for Social Studies · adopted 2019 · Economics",
      fetchedOn: "2026-07-19",
      sourceUrl: OK_SS,
      adoption:
        "Oklahoma's high-school Economics course is overwhelmingly personal-finance and macroeconomics (money supply, banking, interest rates, GDP, the Federal Reserve) — content this catalog does not teach. The two claims below are its price-and-market standards, worked through the BVC commodity markets; the rest is published in notClaimed. Transcribed verbatim from the OSDE 2019 Social Studies Standards.",
      standards: [
        {
          code: "E.3.1",
          text: "Analyze how price and non-price factors affect the demand and supply of goods and services available in the marketplace.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: taught through real commodity markets — a frost in Brazil moving world coffee prices, and why inelastic demand absorbs the spike. It is not a general supply-and-demand unit with curve-shifting exercises.",
        },
        {
          code: "E.3.2",
          text: "Explain what causes shortages and surpluses including government-imposed price floors, price ceilings, and other government regulations and the impact they have on prices and people’s decisions to buy or sell.",
          claimIds: ["bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Partial: government intervention in prices is worked through one deep case — the U.S. sugar program's price supports, import quotas, and tariffs, and the consumer cost they impose. Price floors and ceilings as general mechanisms are not taught.",
        },
      ],
    },

    // ── World Human Geography (WG) ─────────────────────────────────────────
    {
      id: "ok-wg",
      subject: "Social Studies",
      name: "Oklahoma Academic Standards for Social Studies — World Human Geography (WG)",
      publisher: "Oklahoma State Department of Education (OSDE)",
      version: "Oklahoma Academic Standards for Social Studies · adopted 2019 · World Human Geography",
      fetchedOn: "2026-07-19",
      sourceUrl: OK_SS,
      adoption:
        "Oklahoma's high-school World Human Geography course. The Great Migration and the BVC growing-belts/agricultural-diffusion content map onto its migration and agricultural-land-use strands. Transcribed verbatim from the OSDE 2019 Social Studies Standards.",
      standards: [
        {
          code: "WG.2.2",
          text: "Describe and summarize the push and pull theory of migration and its impact on human capital and demographic transitions including the research of major voluntary and involuntary migrations.",
          claimIds: ["history.migration-streams-arrival", "history.jim-crow-and-long-shadow"],
          coverage: "partial",
          note: "Partial: the Great Migration is taught as a push-pull migration in depth — Jim Crow and violence pushing, northern jobs and the Black press pulling, and the demographic transformation of the arrival cities. The general theory and the survey of other major world migrations are not taught.",
        },
        {
          code: "WG.5.1",
          text: "Examine the origin and diffusion of agriculture including the Agricultural Revolutions and the Green Revolution.",
          claimIds: ["bvc.agricultural-hearths"],
          coverage: "partial",
          note: "Partial: the diffusion of crops among world regions — the agricultural hearths and how commodities spread — is taught. The Agricultural Revolutions and the Green Revolution as named events are not.",
        },
        {
          code: "WG.5.2",
          text: "Describe and summarize the characteristics of modern commercial agriculture including major production regions, variations within major zones, and effects of markets.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: the world's commodity growing regions — climate and soil deciding where coffee, tea, cacao, and sugar can grow — and the markets that move them (who is paid what along the chain) are taught in depth. A general treatment of commercial agriculture is not.",
        },
      ],
    },

    // ── Personal Financial Literacy (PFL) — a SEPARATE Oklahoma document ───
    //
    // NEW FRAMEWORK, added 2026-08-29. Oklahoma does not file personal finance inside the social
    // studies standards mapped above. It publishes a standalone document, the Oklahoma Academic
    // Standards for Personal Financial Literacy, Grades 7-12, which implements the fourteen areas
    // of instruction the Passport to Financial Literacy Act of 2007 (70 O.S. § 11-103.6h) requires.
    // Nothing in this file cited it before, so no framework id collision is possible here.
    //
    // WHY IT WAS MISSED. A research sweep fetched PFL.10 on 2026-08-28, the day MONEY-06
    // (`housing-decisions`) shipped, but that sweep's report never reached the authoring agent, so
    // the course went out claiming Texas and Illinois housing standards and not Oklahoma's. The
    // document was RE-FETCHED FROM OSDE on 2026-08-29 before this entry was written, per rule 1:
    // a saved transcription is not a fetch. The re-fetch matched the saved text exactly, including
    // the document's own inconsistent code punctuation (PFL.10.1 carries a dot between the strand
    // and the objective; PFL 10.2 and PFL 10.3 do not, and the same document prints its fourth
    // standard as "PFL 4."). Codes are transcribed as printed, quirk included.
    //
    // ONE STANDARD OF FOURTEEN. PFL.10 is the housing standard and it is the only one this file
    // claims. The other thirteen are earning income, taxes, banking and financial services,
    // managing an account, saving and investing, retirement, borrowing, interest and credit cards,
    // fraud and identity theft, insurance, gambling, bankruptcy and charitable giving. Several sit
    // close to other courses in the same money series, but this document has not been analysed
    // against those courses, so none of them is claimed here. See notClaimed.
    {
      id: "ok-personal-financial-literacy",
      subject: "Social Studies",
      name: "Oklahoma Academic Standards for Personal Financial Literacy (PFL), Grades 7-12",
      publisher: "Oklahoma State Department of Education (OSDE)",
      version:
        "Oklahoma Academic Standards for Personal Financial Literacy · 2024 · Grades 7-12 (Passport to Financial Literacy Act of 2007, 70 O.S. § 11-103.6h)",
      fetchedOn: "2026-08-29",
      sourceUrl: OK_PFL,
      adoption:
        "Oklahoma requires personal financial literacy of every graduate under the Passport to Financial Literacy Act of 2007, and OSDE publishes the standards for it as their own grades 7-12 document rather than as a strand of the social studies standards mapped elsewhere in this file. Fourteen standards, PFL.1 through PFL.14, cover the fourteen areas of instruction the Act names. This catalog reaches exactly one of them: PFL.10, the renting-versus-buying standard, through MONEY-06 (`housing-decisions`). It is claimed as partial, because the standard's own sentence is met end to end while three specific things its objectives name are not taught: a menu of housing options matched to needs and wants, a lease's grace period, late fees and utilities, and the fixed against adjustable-rate mortgage distinction. The other thirteen standards are not claimed and notClaimed names each one.",
      standards: [
        {
          code: "PFL.10",
          text: "The student will explain and compare the costs and benefits of renting versus buying a home.",
          claimIds: [
            "money.rent-versus-buy-comparison",
            "money.tenancy-and-the-governing-state-law",
            "money.mortgage-mechanics-and-disclosures",
          ],
          coverage: "partial",
          note: "Partial, and the partiality sits in the objectives rather than in the standard. PFL.10's own sentence is what MONEY-06's fourth section does end to end: the two payments compared component by component in the same units over a stated horizon, the transaction costs at both ends counted from the Closing Disclosure's own prescribed sections rather than estimated, and a sensitivity step where the learner changes one assumption at a time. OBJECTIVE BY OBJECTIVE, so a teacher planning against this standard knows exactly what arrives. PFL.10.1, the advantages and disadvantages of renting versus buying: the advantages-and-disadvantages half is taught, including the risk transfer a tenant buys and the fact that only the principal component of a mortgage payment accrues to the payer, worked arithmetically rather than asserted. NOT taught is that objective's stated method, comparing how various housing options meet different needs and wants, because the course compares two tenures rather than a menu of housing types and it answers no rent-or-buy question at all. PFL 10.2, the elements and terms of a standard lease agreement: the lease is taught as the governing contract with the state statute supplying every term it leaves out, and the deposit is worked in full from one labelled state's section (A.R.S. § 33-1321 on the cap, on the default that any fee not designated nonrefundable is refundable, and on the fourteen-day itemisation clock, plus § 33-1368 on the five-day notices). Of the five elements Oklahoma names in its parenthetical the course reaches the deposit and the due date; GRACE PERIOD, LATE FEES AND UTILITIES ARE NOT TAUGHT. PFL 10.3, financial considerations when purchasing a place to live: sub-item B is taught in depth, with the down payment separated from the closing costs it is constantly confused with, the escrow account named from RESPA's own purposes at 12 U.S.C. § 2601(b)(3), property taxes and lender-required insurance treated as costs of holding that buy no ownership stake, the prepayment penalty as a term 12 CFR § 1026.37 requires the Loan Estimate to state, and an amortisation table generated by hand rather than shown. SUB-ITEM A IS THE GAP: the course lists no types of lenders and does not teach the fixed against adjustable-rate distinction Oklahoma calls for by name.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Oklahoma Academic Standards mathematics standard.",
    },
    {
      heading: "Personal Financial Literacy — one standard of fourteen, and the other thirteen named.",
      body: "Oklahoma publishes its personal financial literacy standards as their own grades 7-12 document under the Passport to Financial Literacy Act of 2007, and until 2026-08-29 this file did not cite that document at all. It now claims exactly one of the fourteen standards, PFL.10 on renting versus buying, as a partial, with the three things its objectives ask for and the course does not deliver named in that entry. The other thirteen are not claimed, and the reasons split into two kinds that must not be blurred together. NOT TAUGHT ANYWHERE IN THIS CATALOG: PFL.1 (earning an income and managing it), PFL.2 (local, state and federal taxes), PFL.5 (saving and investing), PFL.6 (planning for retirement), PFL.11 (insurance as risk management), PFL.12 (the financial impact of gambling), PFL.13 (bankruptcy) and PFL.14 (charitable giving). NOT YET ANALYSED, which is a different thing and is said plainly rather than rounded into a claim: PFL.3 (banks and other financial service providers, whose objective PFL 3.3 names banked and unbanked individuals in those words), PFL.4 (managing and reconciling a bank account), PFL.7 (the process and responsibilities of borrowing, whose objective PFL 7.1 sub-item B names mortgages among credit products), PFL.8 (interest, credit cards and online commerce) and PFL.9 (consumer fraud and identity theft). Courses in this catalog's money series teach material in that territory and are mapped onto other states' personal-finance frameworks, but nobody has yet read those courses against Oklahoma's own PFL text, so nothing is claimed against these five. Claiming them on the strength of a family resemblance to another state's standard is exactly the padding this list exists to prevent.",
    },
    {
      heading: "English Language Arts — deferred, not denied (fetch-or-don't-cite).",
      body: "Oklahoma repealed its Common Core adoption in 2014 and writes its own Oklahoma Academic Standards for ELA. The catalog's media-literacy, source-evaluation, and BVC rhetoric work WOULD map to the OAS ELA reading-informational and writing strands, as it does to other states' ELA standards. But we have not yet fetched and verified the OAS ELA document, and our rule is fetch-or-don't-cite, so Oklahoma carries no ELA claims this pass.",
    },
    {
      heading: "Science — deferred, and NOT a blind NGSS alias.",
      body: "Oklahoma's science standards (adopted 2020) are Oklahoma's own — NGSS-influenced but not verbatim NGSS — so our shared NGSS file does not apply and we will not alias it. The one Earth-science-adjacent claim other states hang on HS-ESS3-1 (climate and resource availability shaping human activity) is deferred until the OAS Science document is fetched and its wording verified against Oklahoma's own codes. There is no laboratory work, investigation, or modelling in this catalog either way.",
    },
    {
      heading: "USG.6 — the public-policy-formation strand.",
      body: "USG.6.1–6.4 (the federal budget process, fiscal and monetary policy, and the formulation of domestic and foreign policy, national defense, and participation in international organizations) are not genuinely taught by these courses.",
    },
    {
      heading: "USG.5.4 — political parties, interest groups, and media.",
      body: "USG.5.4 analyzes the role of political parties, interest groups, mass media, public opinion, and campaign funding in the political process. Our media-literacy course is consumer protection, not political-media analysis, and we do not teach parties, interest groups, or public opinion as named content — so we do not claim it. (How-to-Help-a-Campaign's coverage of the legal guardrails on campaign money is a thin, one-sided overlap we will not stretch into this standard.)",
    },
    {
      heading: "The USG foundations and federalism standards we checked and rejected.",
      body: "USG.1.1/1.2 (limited vs. unlimited governments), USG.1.4 (the role of government in market vs. command systems), USG.2.1 (the Magna Carta, Mayflower Compact, and English Bill of Rights as founding documents — our Constitution course starts from the Articles of Confederation, not these), USG.2.2 (inalienable rights and the Declaration's grievances as named content), USG.2.4 (the Federalist Papers and Anti-Federalists as texts), USG.3.5 (how the Commerce Clause established the constitutional relationship with Indian tribes — the flagship teaches tribal sovereignty and McGirt, which we DO claim via USG.3.4, but not the Commerce Clause's specific role in tribal relations), and USG.3.8 (popular sovereignty and majority rule vs. minority rights as named concepts) — the courses do not genuinely teach these.",
    },
    {
      heading: "Oklahoma's economic-systems standard has no home for the reciprocity economy.",
      body: "The curriculum contrasts traditional (reciprocity) and market economies directly and at length, but Oklahoma's E.2.1 compares MARKET, COMMAND, and MIXED systems — it does not name traditional or reciprocity economies, and we do not teach command economies. So, as in Arizona and California, the reciprocity-vs-market content has no economic-systems standard to meet. The gap is in the standards, not the lessons.",
    },
    {
      heading: "Most of the Economics, USH, WH, and WG strands.",
      body: "Oklahoma's Economics course is overwhelmingly personal finance and macroeconomics (money supply, banking, interest rates, GDP, the Federal Reserve — E.1, E.2.2–E.2.5, E.4–E.13), which this catalog does not teach. Across United States History, World History, and World Human Geography we claim only the strands with genuine lesson evidence (named in the frameworks above) and leave the many strands the catalog does not cover — the World Wars, the New Deal's named agencies, the Middle East and China strands, the industrialization-and-development geography strands, and the rest — unclaimed. Oklahoma History (OKH), Psychology, and Sociology are not claimed at all.",
    },
    {
      heading: "Oklahoma's own state structure is taught more fully than any one code captures.",
      body: "Oklahoma Civics teaches the two courts of last resort (the civil Supreme Court and the Court of Criminal Appeals — a feature shared only with Texas), the large plural executive and the elected Corporation Commission, the 101/48-member Legislature with term limits, Oklahoma's first-in-the-nation constitutional initiative and referendum, merit selection with retention, and 38+ sovereign tribal nations — from Oklahoma's own sources. Oklahoma's USG course has no dedicated state-structure standard, so USG.3.3 (relationships and responsibilities among the levels of government) and USG.3.4 (tribal sovereignty) are the generous homes we cite this content under; the split top bench, the plural executive, and the direct-democracy 'first' have no USG code of their OWN, and the elected Corporation Commission is not separately citable.",
    },
  ],
};
