// ─────────────────────────────────────────────────────────────────────────────
// INDIANA — codes → course claims. Read the rule in ../index.ts before editing.
// The flagship of the pattern: `state-civics-in` was written FROM Indiana's own materials, so
// Indiana's Government standards get their 1:1 state-civics course; the other 50 state-civics
// courses will do the same for their states.
//
// Provenance of every document cited below: www.in.gov refuses connections from our tooling at
// the IP level and media.doe.in.gov returns a Cloudflare 1020 block, so every IDOE document was
// retrieved through the Wayback Machine and transcribed from the archived PDF:
//   · IDOE social-studies index — snapshot 2026-06-01 (confirms which editions are current)
//   · U.S. Government (2023 PDF) — snapshot 2025-12-26, fetched 2026-07-15
//   · Grades K-12 Health & Wellness (2023 PDF) — snapshot 2025-08-30, fetched 2026-07-15
//   · High School Physical Education (2023 PDF) — snapshot 2023-09-26, fetched 2026-07-15; the
//     PE index page (snapshot 2026-06-01) still links exactly this document
//   · Economics (2026), Geography & History of the World (2023), World History (2023),
//     U.S. History (2023), ELA 9-10 / 11-12 (2023) — fetched 2026-07-13 (see per-framework dates)
//
// ⚠️ Two-editions problem, still open (see plans/user-tasks/82): IDOE's index lists BOTH a 2026
// and a 2023 column for every high-school social-studies course. For Economics both editions are
// stable in.gov PDFs and we cite the 2026 one; for U.S. Government the 2026 edition is published
// only as a Google Drive link as of retrieval, so we cite the durable 2023 in.gov PDF and flag
// the newer edition in the framework's adoption note.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "IN",
  frameworks: [
    // ── Economics (2026) ───────────────────────────────────────────────────
    {
      id: "in-econ",
      subject: "Social Studies",
      name: "Indiana Academic Standards: Economics",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2026",
      fetchedOn: "2026-07-13",
      sourceUrl: "https://www.in.gov/doe/files/2026-Indiana-Academic-Standards-Economics.pdf",
      adoption:
        "IDOE currently publishes BOTH a 2026 and a 2023 edition of the Economics standards. We cite the 2026 edition because it is the newer of the two — but the text of some standards changed between them (E.1.6 gained “feudal, mercantile”, and Domains 6–8 were renumbered from E.6–E.8 to GE.6–GE.8). Confirm which edition your school year is being held to.",
      standards: [
        {
          code: "E.2.6",
          text: "Analyze the earnings of workers in different industries using factors such as product value, worker productivity, and market structure.",
          claimIds: ["bvc.value-chain-earnings"],
          coverage: "full",
          note: "This is the curriculum's spine. Every episode traces who is paid what along one commodity's chain, and the series names the pattern (the smile curve) and tests it across all 21 episodes.",
        },
        {
          code: "GE.8.1",
          text: "Define and explain the impact of trade barriers, such as quotas and tariffs, and analyze why countries erect them.",
          claimIds: ["bvc.sugar-program-trade-barriers"],
          coverage: "full",
          note: "The lesson works the U.S. sugar program specifically: import quotas, price supports and tariffs, why they exist, and the roughly $3.5bn/yr they cost consumers by holding U.S. prices ~40% above world prices (Congressional Budget Office, 2023). IDOE's 2023 edition numbers this same standard E.8.1; the 2026 edition prints it as GE.8.1.",
        },
        {
          code: "E.1.6",
          text: "Describe and compare the various economic systems (i.e., traditional, market, command, mixed, feudal, mercantile) and explain their strengths and weaknesses.",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial, and deliberately so: the curriculum contrasts TRADITIONAL and MARKET economies directly and at length (and touches the mercantile system through the triangular trade). It does not teach command, mixed, or feudal systems. A teacher using this for E.1.6 must cover those three elsewhere.",
        },
        {
          code: "E.2.5",
          text: "Describe how price elasticity of supply and price elasticity of demand send signals to buyers and sellers.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: price elasticity of DEMAND is taught explicitly and well (coffee's inelastic demand absorbing a ~70% price spike). Price elasticity of SUPPLY is not taught as a named concept.",
        },
      ],
    },

    // ── U.S. Government (2023) — fetched 2026-07-15, Wayback snapshot 2025-12-26 ──
    {
      id: "in-usg",
      subject: "Social Studies",
      name: "Indiana Academic Standards: U.S. Government",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-07-15",
      sourceUrl: "https://www.in.gov/doe/files/Indiana-Academic-Standards-U.S.-Government.pdf",
      adoption:
        "The high-school Government course — the framework most of our civics catalog answers to. IDOE's index also lists a 2026 edition, but as retrieved it is published only as a Google Drive link, so we cite the durable 2023 in.gov document. Confirm which edition your school year is being held to.",
      standards: [
        {
          code: "USG.1.3",
          text: "Interpret and analyze the purposes and functions of government found in the Preamble of the United States Constitution. (E)",
          claimIds: ["civics.preamble-purposes"],
          coverage: "full",
          note: "The lesson works the Preamble clause by clause — establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare — as the purposes of the government the rest of the document builds.",
        },
        {
          code: "USG.2.1",
          text: "Summarize the colonial, revolutionary, and Founding-era experiences and events that led to the writing, ratification, and implementation of the United States Constitution (1787) and Bill of Rights (1791).",
          claimIds: ["civics.articles-to-constitution", "civics.bill-of-rights-origin"],
          coverage: "partial",
          note: "Partial: the Founding-era half is covered — why the Articles of Confederation failed and how that led to the 1787 Constitution and the Bill of Rights. The colonial and revolutionary experiences before that are not taught.",
        },
        {
          code: "USG.2.3",
          text: "Analyze and interpret central ideas on government, individual rights, and the common good in founding documents of the United States. (E)",
          claimIds: ["civics.constitution-article-by-article", "civics.bill-of-rights-overview"],
          coverage: "partial",
          note: "Partial: the Constitution and the Bill of Rights — two founding documents — are analyzed clause by clause for ideas on government, rights, and the common good. The Declaration of Independence and other founding-era documents are not treated in depth.",
        },
        {
          code: "USG.3.2",
          text: "Explain the constitutional principles of federalism, separation of powers, the system of checks and balances, and republican government. Provide examples of these principles in the governments of the United States and Indiana. (E)",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.in-three-branches",
          ],
          coverage: "partial",
          note: "Partial: three of the four named principles — federalism, separation of powers, checks and balances — are taught thoroughly, with examples in both the United States government and Indiana's. “Republican government” is not taught as a named principle.",
        },
        {
          code: "USG.3.4",
          text: "Explain the relationships among branches of the United States government and Indiana government, which involve separation and sharing of powers as a means to limited government. (E)",
          claimIds: [
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
            "civics.in-three-branches",
          ],
          coverage: "full",
          note: "Both halves are covered: the federal branches and their checks on each other, and Indiana's own three branches — including how Indiana's constitution deliberately weakens its governor relative to its General Assembly.",
        },
        {
          code: "USG.3.5",
          text: "Explain how a bill becomes law in the legislative process of the United States and the state of Indiana. (E)",
          claimIds: ["civics.federal-bill-process", "civics.in-bill-process"],
          coverage: "full",
          note: "Both legislatures the standard names are covered: the federal process gets an entire course (committees, the Rules Committee, the filibuster, presentment, veto override), and the Indiana General Assembly's process gets its own lesson.",
        },
        {
          code: "USG.3.6",
          text: "Describe the procedures for amending the United States and Indiana Constitutions, and analyze why it is so difficult to amend these Constitutions.",
          claimIds: ["civics.article-v-amendment", "civics.in-constitution-amendment"],
          coverage: "partial",
          note: "Partial: Article V is taught in full, including why the federal bar is so high. On the Indiana side the course teaches who may propose amendments (only the General Assembly — Indiana has no citizen initiative) but not the full two-session-plus-ratification procedure.",
        },
        {
          code: "USG.3.7",
          text: "Analyze the functions of the judicial branch of the United States and Indiana governments with emphasis on the principles of due process, judicial review, and an independent judiciary. (E)",
          claimIds: [
            "civics.federal-judiciary-structure",
            "civics.judicial-review-marbury",
            "civics.in-courts-merit-selection",
          ],
          coverage: "partial",
          note: "Partial: judicial review (Marbury, taught by name) and judicial independence (life tenure federally; Indiana's merit-selection-plus-retention design) are covered well, for both court systems. Due process is named but not taught in depth — a teacher must cover it elsewhere.",
        },
        {
          code: "USG.3.8",
          text: "Explain the electoral process in terms of election laws and election systems on the national, state, and local level. (E)",
          claimIds: ["civics.election-mechanics", "civics.in-election-law"],
          coverage: "full",
          note: "National election law and systems get a full course; Indiana's specifics (photo ID and Crawford v. Marion County, excuse-required absentee voting) get their own lesson. Local variation is handled the honest way — the course teaches students to verify their own county's rules.",
        },
        {
          code: "USG.3.11",
          text: "Explain and evaluate the original purpose and role of the Electoral College and its relevance today. (E)",
          claimIds: ["civics.electoral-college"],
          coverage: "full",
          note: "Both halves of the standard, by design: one lesson on mechanics (538 electors, 270 to win, winner-take-all, faithless electors), one on the original purpose and the modern debate over its relevance.",
        },
        {
          code: "USG.3.12",
          text: "Explain the organization of state and local governments in Indiana and analyze how they affect the lives of citizens.",
          claimIds: ["civics.in-local-government", "civics.local-government-layers"],
          coverage: "full",
          note: "Indiana's structure is taught as Indiana's — its 1851 constitution, 92 counties, township government — not as a generic template, and both courses connect each layer to what it does to a resident's daily life.",
        },
        {
          code: "USG.5.1",
          text: "Define the legal meaning of citizenship in the United States, identify the requirements for citizenship in the United States and residency in Indiana, and differentiate between the criteria used for attaining both. (E)",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "partial",
          note: "Partial: the U.S.-citizenship half is thorough — the 14th Amendment, jus soli, citizenship through parents, and naturalization requirements step by step. Indiana's residency criteria, which the standard also names, are not taught.",
        },
        {
          code: "USG.5.2",
          text: "Analyze the roles and responsibilities of citizens in Indiana and the United States.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
            "civics.in-get-involved",
          ],
          coverage: "full",
          note: "The responsibilities are taught as practices, not a list: voting, jury service (an entire course), and civic participation — with an Indiana-specific lesson on where to show up.",
        },
        {
          code: "USG.5.3",
          text: "Identify and describe the civil and constitutional rights found in the United States Constitution and Bill of Rights, describe how they are expanded by decisions of the United States Supreme Court. Analyze and evaluate landmark cases of the Supreme Court concerning civil rights and liberties of individuals. (E)",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent"],
          coverage: "full",
          note: "The landmark-case work is real, not name-dropping: Tinker, Brandenburg, Mapp, Terry, New Jersey v. T.L.O., Riley, and Carpenter are each taught as a rule a student can apply, and the companion course explains how precedent expands rights over time.",
        },
        {
          code: "USG.5.4",
          text: "Identify when it is constitutional for our government to limit the rights of individuals and explain the reasons why the government would want to do this. (E)",
          claimIds: ["rights.limits-on-rights"],
          coverage: "full",
          note: "The limits are the course's method: time-place-and-manner rules, incitement (imminent lawless action), the school-speech cases, and the reasonable-suspicion standard — each with the government's reason for the limit.",
        },
        {
          code: "USG.5.5",
          text: "Explain and give examples of important citizen actions that can impact local, state, and federal government as individuals and members of interest groups.",
          claimIds: [
            "civics.campaign-help",
            "civics.show-up-every-level",
            "civics.track-a-bill",
            "civics.in-get-involved",
          ],
          coverage: "full",
        },
        {
          code: "USG.5.6",
          text: "Explain how citizens in the United States participate in public elections as voters and supporters of candidates for public office. (E)",
          claimIds: ["civics.election-mechanics", "civics.electoral-college", "civics.campaign-help"],
          coverage: "full",
          note: "The two halves of the standard are two courses: one on participating as a voter, one on supporting candidates — including the campaign-finance and coordination rules a volunteer must know.",
        },
        {
          code: "USG.5.7",
          text: "Describe opportunities available to individuals to contribute to the well-being of their communities and participate responsibly in the political process at local, state, and national levels of government.",
          claimIds: [
            "civics.run-for-office",
            "civics.ballot-measures-local-causes",
            "civics.show-up-every-level",
          ],
          coverage: "full",
        },
      ],
    },

    // ── Geography and History of the World (2023) ──────────────────────────
    {
      id: "in-ghw",
      subject: "Social Studies",
      name: "Indiana Academic Standards: Geography and History of the World",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-07-13",
      sourceUrl:
        "https://media.doe.in.gov/standards/indiana-academic-standards-geography-and-history-of-the-world.pdf",
      adoption:
        "The current edition IDOE links for this high-school course. This is the course the Commodity Map fits most completely.",
      standards: [
        {
          code: "GHW.8.1",
          text: "Use maps to show the location and distribution of Earth's resources, and analyze how this distribution affects trade between and among countries and regions.",
          claimIds: ["bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "This standard is, almost word for word, what the Commodity Map is for.",
        },
        {
          code: "GHW.1.2",
          text: "Analyze agricultural hearths and exchanges of crops among regions. Evaluate the impact of agriculture on the subsequent development of cultural hearths in various regions of the world.",
          claimIds: ["bvc.agricultural-hearths"],
          coverage: "full",
        },
        {
          code: "GHW.12.1",
          text: "Analyze global climate change forecasts for different parts of Earth and the implications of these changes for humans.",
          claimIds: ["bvc.climate-change-forecasts"],
          coverage: "full",
        },
        {
          code: "GHW.4.1",
          text: "Analyze and assess ways that colonialism and imperialism have persisted and continue to evolve in the contemporary world.",
          claimIds: ["bvc.colonialism-persists-today"],
          coverage: "full",
        },
        {
          code: "GHW.9.3",
          text: "Distinguish and assess the human and physical factors associated with the spread of selected epidemics and/or pandemics over time, and propose strategies for limiting the spread of diseases.",
          claimIds: ["bvc.scott-county-epidemic"],
          coverage: "partial",
          note: "Partial: one epidemic, worked in real depth — the 2015 Scott County, Indiana HIV outbreak, its human and structural causes, and harm reduction as the strategy for limiting spread (roughly 200:1 in favour of prevention over treatment cost). The standard says “epidemics and/or pandemics”; a teacher wanting breadth will want a second case.",
        },
        {
          code: "GHW.8.2",
          text: "Prepare graphic representations, such as maps, tables, and timelines, to describe the global movement of goods and services between and among countries and world regions over time. Analyze and assess the patterns and networks of economic interdependence or lack of interdependence.",
          claimIds: ["bvc.coffee-project-mapping"],
          coverage: "partial",
          note: "Partial, and the distinction matters: the curriculum SHOWS these maps everywhere, but this standard asks the STUDENT to prepare them. That student-produced work exists only in the Coffee episode's project, which is the one episode that currently ships a graded assignment.",
        },
        {
          code: "GHW.6.4",
          text: "Compare and contrast the impact of the Industrial Revolution on developed countries with the economic processes acting upon less developed and developing countries in the contemporary world.",
          claimIds: ["bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: the “economic processes acting upon less developed and developing countries” half is covered thoroughly (why cacao farmers stay poor while the chocolate market grows). The Industrial Revolution itself is not taught head-on, so the comparison is one-sided without additional material.",
        },
      ],
    },

    // ── World History and Civilization (2023) ──────────────────────────────
    {
      id: "in-wh",
      subject: "Social Studies",
      name: "Indiana Academic Standards: World History and Civilization",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-07-13",
      sourceUrl:
        "https://media.doe.in.gov/standards/indiana-academic-standards-world-history-and-civilization.pdf",
      adoption: "The current edition IDOE links for this high-school course.",
      standards: [
        {
          code: "WH.4.4",
          text: "Explain consequences of the conquests and colonization as a result of the worldwide voyages of exploration, including the transatlantic slave trade, Columbian Exchange, and the effects on native populations in the Americas.",
          claimIds: ["bvc.conquest-columbian-exchange"],
          coverage: "full",
        },
        {
          code: "WH.5.5",
          text: "Analyze the causes and consequences of European imperialism upon the indigenous peoples of Africa, Asia, and Oceania.",
          claimIds: ["bvc.imperialism-africa-asia-oceania"],
          coverage: "full",
          note: "All three regions the standard names are covered: Africa (Ep 5, Ep 20), Asia (Ep 2, Ep 17), Oceania (Ep 6).",
        },
        {
          code: "WH.3.1",
          text: "Analyze the impact of trade networks, such as the Silk Road and Indian Ocean trade network.",
          claimIds: ["bvc.tea-trade-networks"],
          coverage: "partial",
          note: "Partial: the episode maps and analyses the Tea Horse Road and the Maritime Silk Road, and why the route still matters. It is a trade-network lesson told through one commodity — it is not a general treatment of the Silk Road or the Indian Ocean network.",
        },
        {
          code: "WH.1.1",
          text: "Describe and evaluate social, cultural, and economic changes of small agriculture communities which led to the development of large agricultural settlements, such as the movement from hunting and gathering societies to civilization.",
          claimIds: ["bvc.beer-first-cities"],
          coverage: "partial",
          note: "Partial: the episode makes the grain-to-cities argument and grounds it in the Code of Hammurabi (c. 1754 BCE), which legislates beer. It approaches the transition to civilization through one commodity rather than surveying it.",
        },
        {
          code: "WH.6.6",
          text: "Explain the causes and consequences of the Cold War, and describe the role it played in ethnic or nationalistic conflicts in various parts of the world.",
          claimIds: ["history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: the Cold War's END in Eastern Europe is worked in real depth through one country — Solidarność, martial law, and the 1989 Round Table that negotiated communism out of power in Poland. The Cold War's causes and its global course are not taught.",
        },
        {
          code: "WH.6.10",
          text: "Describe and analyze the global expansion of democracy and globalization in the late 20th century.",
          claimIds: ["history.poland-1989-democratization", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: two case studies, worked deeply — democratization (Poland's 1989 transition and its economic price) and globalization (NAFTA→USMCA and what a trade deal did to Mexican and U.S. labor law). It is case-study depth, not a global survey.",
        },
      ],
    },

    // ── U.S. History (2023) ────────────────────────────────────────────────
    {
      id: "in-ush",
      subject: "Social Studies",
      name: "Indiana Academic Standards: U.S. History",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-07-13",
      sourceUrl: "https://www.in.gov/doe/files/Indiana-Academic-Standards-U.S.-History.pdf",
      adoption:
        "The current edition IDOE links for this high-school course. The Great Migration and labor-history courses map here; each entry says exactly which era standard it reaches and which halves it does not.",
      standards: [
        {
          code: "USH.2.4",
          text: "Summarize the impact industrialization and immigration had on social movements of the era, including the contributions of specific individuals and groups.",
          claimIds: ["history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: ONE social movement of the era — the labor movement — is taught thoroughly, with the specific individuals and groups the standard asks for (the Knights of Labor, the AFL, Debs and Pullman). Other movements of the era (populism, temperance) are not taught.",
        },
        {
          code: "USH.2.5",
          text: "Analyze the development of “separate but equal” policies culminating in the Plessy v. Ferguson (1896) case. Explain the historical significance of the denial of African American rights in the South and the effects of these policies in future years. (E)",
          claimIds: ["history.jim-crow-and-long-shadow"],
          coverage: "partial",
          note: "Partial: the standard's second sentence — the denial of African American rights in the South and its effects in future years — is the course's core, taught for twelve lessons. The first sentence's case-law development culminating in Plessy is referenced, not analyzed case by case.",
        },
        {
          code: "USH.3.4",
          text: "Explain the importance of social and cultural movements within the Progressive Era, including significant individuals/groups such as Booker T. Washington, Ida B. Wells, W.E.B. DuBois, NAACP, muckrakers, and Upton Sinclair, and including movements such as the Harlem Renaissance, Women's Suffrage, labor movements, and socialist movement. (E)",
          claimIds: ["history.harlem-renaissance-black-press", "history.triangle-fire-debs"],
          coverage: "partial",
          note: "Partial: of the movements the standard names, the Harlem Renaissance, the labor movement, and the socialist movement (through Debs) are taught in depth, and the NAACP appears in context. Women's Suffrage and the named individuals Washington, Wells, and DuBois are not taught — do not present this as covering USH.3.4 whole.",
        },
        {
          code: "USH.3.6",
          text: "Describe the experiences of migrants from Europe, Asia, and the southern United States as they encountered and interacted with their new communities.",
          claimIds: ["history.migration-streams-arrival"],
          coverage: "partial",
          note: "Partial: the southern-United-States third of the standard is the entire course — six million migrants, their routes, and what arrival actually looked like, city by city. The experiences of European and Asian migrants are not taught.",
        },
        {
          code: "USH.4.2",
          text: "Assess the causes of the resurgence of social movements, reform movements, and vigilante groups, including the Ku Klux Klan, the Red Scare, and Prohibition.",
          claimIds: ["bvc.prohibition"],
          coverage: "partial",
          note: "Partial, and only one third of it: Prohibition is covered — its causes, its rhetoric and its results. The Ku Klux Klan and the Red Scare are not taught. Do not present this as covering USH.4.2 whole.",
        },
        {
          code: "USH.4.7",
          text: "Explain the long-term effects of the Second New Deal, including its effects on agriculture, labor, social welfare, and banking. (E)",
          claimIds: ["history.wagner-act"],
          coverage: "partial",
          note: "Partial: the LABOR effect — the Wagner Act, what it created, and precisely who it excluded — is taught in depth, including its long-term consequences. The standard's other three areas (agriculture, social welfare, banking) are not taught.",
        },
        {
          code: "USH.7.1",
          text: "Explain the efforts of groups of African Americans, Native Americans, Hispanic Americans, and women to assert their social and civic rights in the years following World War II. (E)",
          claimIds: ["history.migration-civil-rights-politics", "history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: African American civil-rights organizing is covered from an angle most curricula skip — the Black urban vote the Migration created, and A. Philip Randolph through the 1968 Memphis sanitation strike. The standard also names Native Americans, Hispanic Americans, and women, none of whom are covered here.",
        },
        {
          code: "USH.8.5",
          text: "Analyze the impact of globalization on U.S. culture and U.S. economic, political, and foreign policy, including the North American Free Trade Agreement (NAFTA).",
          claimIds: ["history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: the NAFTA→USMCA thread is worked in depth from the labor side — what the trade deal did to wages and organizing on both sides of the border, and how the USMCA's Rapid Response Mechanism changed U.S. trade policy. Globalization's broader effects on U.S. culture and foreign policy are not taught.",
        },
        {
          code: "USH.9.1",
          text: "Explain the origins of legislation which began to unravel the work of the New Deal and the Great Society, including reforms in the areas of welfare, public housing, Social Security, and labor. (E)",
          claimIds: ["history.taft-hartley-patco"],
          coverage: "partial",
          note: "Partial: the LABOR area only — Taft-Hartley as the direct rollback of the Wagner Act, and PATCO as the turning point in enforcement. Welfare, public housing, and Social Security reform are not taught.",
        },
        {
          code: "USH.10.2",
          text: "Locate and analyze primary sources and secondary sources related to an event or issue of the past; discover possible limitations in various kinds of historical evidence and differing secondary opinions.",
          claimIds: ["history.migration-primary-sources"],
          coverage: "partial",
          note: "Partial: sources are pointed to their actual archives (National Archives, Census Bureau, the Schomburg Center) rather than quoted from memory, and the course turns a widely repeated but unsupported statistic into an explicit limitations-of-evidence lesson. Sustained student-run source analysis is prompted by activities but not assessed.",
        },
      ],
    },

    // ── Health & Wellness (2023, Grades 9-12 indicators) ───────────────────
    {
      id: "in-hw",
      subject: "Health & Wellness",
      name: "Indiana Academic Standards: Grades K-12 Health & Wellness",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023 · Grades 9-12 indicators",
      fetchedOn: "2026-07-15",
      sourceUrl:
        "https://media.doe.in.gov/standards/indiana-academic-standards-grades-k-12-health.pdf",
      adoption:
        "Indiana's Health & Wellness standards align to the National Health Education Standards: eight standards, each with grade-band indicators. The codes cited here are the Grades 9-12 (HS.*) indicators — the level a high-school course answers to.",
      standards: [
        {
          code: "HS.1.1",
          text: "Predict how behaviors can impact personal health.",
          claimIds: ["health.oral-health-behaviors", "health.tracker-behavior-metrics"],
          coverage: "partial",
          note: "Partial: the behavior-to-health link is taught rigorously in two domains — oral health (with the evidence graded honestly) and tracker-measured lifestyle metrics. This is not a comprehensive health course; other behavior domains (substance use, sexual health, safety) are not taught.",
        },
        {
          code: "HS.1.5",
          text: "Analyze the relationship between access to health care and personal health.",
          claimIds: ["health.dental-care-access"],
          coverage: "partial",
          note: "Partial: one kind of care access — regular dental care — analyzed properly, including what early detection catches and what the systemic-health evidence does and does not show. Health-care access in general is not taught.",
        },
        {
          code: "HS.3.1",
          text: "Evaluate the validity of health information, products and services.",
          claimIds: ["health.evaluate-dental-evidence", "health.health-product-claims"],
          coverage: "full",
          note: "The skill is taught explicitly on both fronts the standard names: information (evidence hierarchies, systematic reviews and Cochrane, read against popular myths) and products/services (how health and supplement marketing dodges the legal line, and how to verify a claim yourself).",
        },
        {
          code: "HS.6.2",
          text: "Develop a personal health goal and a plan to achieve it.",
          claimIds: ["health.blueprint-goal-plan", "health.woop-goal-setting"],
          coverage: "full",
          note: "Both courses have the learner actually do this, not read about it: one builds a data-grounded 90-day health blueprint as its capstone; the other walks the learner through setting the goal and writing the plan with the best-evidenced method available (mental contrasting with implementation intentions).",
        },
        {
          code: "HS.6.3",
          text: "Analyze and develop strategies to overcome barriers to achieving the personal health goal.",
          claimIds: ["health.woop-obstacle-strategies"],
          coverage: "full",
          note: "Overcoming obstacles is not a unit of this course — it is the course: mental contrasting surfaces the barrier, and implementation intentions (if-then plans) are the strategy, taught with the trial evidence (including the health-behavior trials) and its honest effect size.",
        },
        {
          code: "HS.6.4",
          text: "Implement and analyze the plan and adjust it, as needed, to achieve the personal health goal.",
          claimIds: ["health.n-of-1-implement-adjust"],
          coverage: "full",
          note: "The course's method is exactly this cycle: implement (log daily), analyze (baselines, moving averages, signal vs noise), and adjust (iterate the N-of-1 experiment) — run on the learner's own data.",
        },
      ],
    },

    // ── High School Physical Education (2023) ──────────────────────────────
    {
      id: "in-pe-hs",
      subject: "Physical Education",
      name: "Indiana Academic Standards: High School Physical Education",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-07-15",
      sourceUrl:
        "https://media.doe.in.gov/standards/indiana-academic-standards-high-school-physical-education.pdf",
      adoption:
        "Indiana's high-school PE standards align to the National Standards for K-12 Physical Education: five standards with course-level indicators (HSL1.* for PE I & II, HSL2.* for Elective PE). An online course cannot demonstrate motor performance, so we claim knowledge-side indicators only — each entry says so explicitly.",
      standards: [
        {
          code: "HSL1.2.1.A",
          text: "The physically literate individual applies knowledge of concepts, principles, strategies, terminology, and tactics related to movement and performance.",
          claimIds: ["pe.sport-strategy-knowledge"],
          coverage: "partial",
          note: "Partial, and read this before you rely on it: these courses teach the KNOWLEDGE half of this indicator — concepts, principles, strategies, terminology, and tactics — in genuine depth, sport by sport. The applying-in-performance half happens on a course, court, or pitch, which an online course cannot observe or assess. We claim no PE Standard 1 (motor competency) indicator at all.",
        },
        {
          code: "HSL2.3.1.A",
          text: "Applies technology (such as wearable devices, mobile device apps, and/or social media tools) to support physical activity and lifetime fitness habits.",
          claimIds: ["pe.wearable-tech-activity"],
          coverage: "full",
          note: "This Elective PE indicator is the course's literal premise: the learner uses a wearable (or just a phone) plus a daily log, every day for five weeks, to read and support their own activity habits.",
        },
        {
          code: "HSL1.3.5.A",
          text: "Designs and implements a personal fitness and nutrition plan (assessment scores, goals for improvement, plan of activities for improvement, log of activities to reach goals, timeline for improvement).",
          claimIds: ["pe.fitness-plan-blueprint"],
          coverage: "partial",
          note: "Partial: the FITNESS plan is real and complete — baseline assessment, goals, an activity plan, a daily log, and a 90-day timeline, all from the learner's own data. The NUTRITION half of the indicator is not taught.",
        },
      ],
    },

    // ── ELA Grades 9-10 (2023) — Indiana's own codes, NOT Common Core ──────
    {
      id: "in-ela-910",
      subject: "English/Language Arts",
      name: "Indiana Academic Standards: Grades 9-10 English/Language Arts",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-07-13",
      sourceUrl:
        "https://media.doe.in.gov/standards/indiana-academic-standards-grade-9-10-english_language-arts.pdf",
      adoption:
        "Indiana is not a Common Core state — it repealed its adoption in 2014 and writes its own ELA standards. These codes are Indiana's, and do not match Common Core's.",
      standards: [
        {
          code: "9-10.CC.8",
          text: "Analyze bias in media through the inclusion or exclusion of information and reliability of the source from visual and verbal messages to achieve a desired result.",
          claimIds: ["bvc.reading-ads-for-omission", "media.marketing-omissions"],
          coverage: "full",
          note: "“Inclusion or exclusion of information” is taught by name: Ep 4 teaches reading for absence, using Jane Austen's silence about where the Mansfield Park sugar money comes from, and the marketing course teaches omission, disclosure, and source reliability as everyday consumer skills.",
        },
        {
          code: "9-10.RC.6",
          text: "Determine an author's perspective or purpose in a text, and analyze how an author uses rhetoric to advance that perspective or purpose.",
          claimIds: ["bvc.author-rhetoric-primary-texts"],
          coverage: "full",
        },
        {
          code: "9-10.RC.7",
          text: "Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is valid and the evidence is relevant and sufficient; identify false statements and fallacious reasoning.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.reefer-madness-language-of-fear"],
          coverage: "full",
        },
        {
          code: "9-10.CC.5",
          text: "Analyze multiple sources of information presented in diverse media and formats while evaluating the credibility and accuracy of each source.",
          claimIds: ["bvc.source-evaluation-modelled"],
          coverage: "partial",
          note: "Partial: the curriculum models source evaluation constantly and publishes its own bibliography for students to check. But sustained student-run source evaluation is assessed only in the Coffee project.",
        },
      ],
    },

    // ── ELA Grades 11-12 (2023) ────────────────────────────────────────────
    {
      id: "in-ela-1112",
      subject: "English/Language Arts",
      name: "Indiana Academic Standards: Grades 11-12 English/Language Arts",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-07-13",
      sourceUrl:
        "https://media.doe.in.gov/standards/indiana-academic-standards-grade-11-12-english_language-arts.pdf",
      adoption:
        "Indiana is not a Common Core state — it repealed its adoption in 2014 and writes its own ELA standards. These codes are Indiana's, and do not match Common Core's.",
      standards: [
        {
          code: "11-12.CC.8",
          text: "Analyze the impact of the media on the public, including identifying and analyzing rhetorical and logical fallacies.",
          claimIds: ["bvc.media-fallacies-recurring", "media.misleading-statistics"],
          coverage: "full",
          note: "A media-literacy lesson recurs in every single episode of the BVC series, and the marketing course adds the consumer-protection half: named persuasion tactics, cherry-picked statistics, and truncated charts.",
        },
        {
          code: "11-12.RC.7",
          text: "Determine an author's perspective or purpose in a text in which the rhetoric is particularly effective (e.g., appeals to both friendly and hostile audiences, anticipates and addresses reader concerns and counterclaims), and analyze how style and content contribute to the power and persuasiveness of the text.",
          claimIds: ["bvc.author-rhetoric-primary-texts"],
          coverage: "full",
        },
        {
          code: "11-12.RC.8",
          text: "Delineate and evaluate the arguments and specific claims in U.S. and world texts, assessing whether the reasoning is valid and the evidence is relevant and sufficient; analyze the impact of false statements and fallacious reasoning.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
        },
        {
          code: "11-12.RC.9",
          text: "Synthesize and evaluate multiple sources of information presented in different mediums in order to address a question or solve a problem.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: the skill is modelled throughout, but the student is required to perform it only in the Coffee episode's project.",
        },
        {
          code: "11-12.W.1",
          text: "Write arguments in a variety of forms that: a. Introduce precise claim(s), establish the significance of the claim(s), distinguish the claim(s) from alternate or opposing claims, and create an organization that logically sequences claim(s), counterclaims, reasons, and evidence. b. Use rhetorical strategies to enhance the effectiveness of the claim. c. Develop claim(s) and counterclaims fairly and thoroughly, supplying the most relevant evidence for each while pointing out the strengths and limitations of both in a manner that anticipates the audience's knowledge level, concerns, values, and possible biases. d. Use effective and varied transitions as well as varied syntax to link the major sections of the text, create cohesion, and clarify the relationships between claim(s) and reasons, between reasons and evidence, and between claim(s) and counterclaims. e. Establish and maintain a consistent style and tone appropriate for the purpose and audience. f. Provide a concluding statement or section that follows and supports the argument presented.",
          claimIds: ["bvc.coffee-project-argument-paper"],
          coverage: "partial",
          note: "Partial: the Coffee project's Option D asks for exactly this (a thesis, primary sources, and a counterargument section addressing the strongest objection). But it is ONE optional project in ONE episode — this is not yet a writing programme, and we will not claim it is.",
        },
        {
          code: "11-12.W.5",
          text: "Conduct more sustained research assignments and tasks to build knowledge about the research process and the topic understudy. a. Formulate an inquiry question and refine and narrow the focus as research evolves. b. Gather relevant information from multiple types of authoritative sources, using advanced searches effectively, and annotate sources. c. Assess the strengths and limitations of each source in terms of the task, purpose, and audience. d. Synthesize and integrate information into the text selectively to maintain the flow of ideas. e. Avoid plagiarism and over reliance on any one source and follow a standard format (e.g., MLA, APA) for citation. f. Present information, choosing from a variety of formats.",
          claimIds: ["bvc.coffee-project-research-process"],
          coverage: "partial",
          note: "Partial, same reason: the project demands a real research process with APA citation, but only the Coffee episode currently ships one.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims, so a teacher can
  // see we did not pad the map, and so the next editor does not "helpfully" re-add them.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Indiana mathematics standard.",
    },
    {
      heading: "Science — almost nothing.",
      body: "There is no laboratory work, no investigation and no scientific modelling here. Indiana is not an NGSS state; we checked and claim no Indiana science standard. (Our one partial NGSS claim is for Washington, D.C., where NGSS applies.)",
    },
    {
      heading: "Most of the U.S. Government standards we checked.",
      body: "USG.1.4 (types of government: monarchy, oligarchy, totalitarianism, anarchy), USG.1.5 (unitary vs confederate vs federal), USG.1.6 (constitutionalism, rule of law, limited government, popular sovereignty as named principles), USG.2.2 (compromise at the Constitutional Convention), USG.2.4-2.6 (founding ideas, civic identity, and civic values as a set), USG.3.1 (the four-part characterization of U.S. government), USG.3.3 (enumerated/implied/DENIED powers in BOTH constitutions — our course teaches enumerated/implied/reserved/concurrent, U.S. only), USG.3.9 (Benjamin Harrison), USG.3.10 (political parties' progression and ideologies), USG.3.13 (media influence on public opinion — our media-literacy course is consumer protection, not political media analysis), all of USG.4 (foreign affairs), and USG.5.8 — the courses do not genuinely teach these, so we do not claim them.",
    },
    {
      heading: "Indiana Economics has no standard on unions.",
      body: "We checked the 2026 Economics document (and the 2023 edition) for the labor-history courses: Indiana's Economics standards contain no standard on labor unions or collective bargaining, so we cite none. The absence is in the standards, not the lessons.",
    },
    {
      heading: "USH.8.6 (deindustrialization) for the unions course.",
      body: "The History of Unions reads union decline honestly (PATCO, automation vs. trade) but does not teach the causes and consequences of deindustrialization as such. Close, but not the standard.",
    },
    {
      heading: "PE performance standards — all of them.",
      body: "Every indicator that asks a student to DEMONSTRATE motor skill, participate, or exhibit behavior during physical activity (all of Standard 1, the participation indicators of Standard 3, and Standard 4's etiquette-in-play) is out of reach of an online course, however good its knowledge content. We claim knowledge-side indicators only.",
    },
    {
      heading: "Health standards for the marketing course beyond HS.3.1.",
      body: "HS.2.3 (evaluate the effect of media and social media on health behaviors) was considered: Spotting Misleading Marketing evaluates marketing claims about health products, which is HS.3.1's skill, not an analysis of media's effect on health behavior. We claim the one that fits.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Indiana's closest frameworks (K-12 Computer Science, World Languages, Employability Skills) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Indiana claims this pass. They are queued for a later mapping pass.",
    },
    {
      heading: "E.4.1, E.4.2, E.3.2, USH.9.3 — the Commodity Map rejections, still rejected.",
      body: "Public goods are never taught; corrective (Pigouvian) taxation is never taught as a policy tool; the four market structures are named, never taught as a unit; and “media in the democratic process” is too thin to stand up. See the source file for the full reasoning.",
    },
  ],
};
