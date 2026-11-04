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
//   · 2026-11-03: www.in.gov answered directly. The social-studies index and the 2023 U.S. History,
//     U.S. Government and Grade 4 PDFs were fetched from in.gov itself, every existing code's text
//     in those three frameworks was re-checked word for word against them, and the Indiana
//     site-course claims (indiana.* in claims.ts) were added. The 2026 U.S. History and U.S.
//     Government PDFs were fetched the same day only to say what changes in that edition.
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
      fetchedOn: "2026-11-03",
      sourceUrl: "https://www.in.gov/doe/files/Indiana-Academic-Standards-U.S.-Government.pdf",
      adoption:
        "The high-school Government course — the framework most of our civics catalog answers to. IDOE's index lists a 2023 and a 2026 edition side by side. The codes here are the 2023 edition's. The 2026 edition renumbers several of them (for example, the organization of state and local governments in Indiana is USG.3.13 there, not USG.3.12) and drops the Benjamin Harrison standard, USG.3.9. Confirm which edition your school year is being held to.",
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
            "indiana.fort-harrison-federalism",
          ],
          coverage: "partial",
          note: "Partial: three of the four named principles — federalism, separation of powers, checks and balances — are taught thoroughly, with examples in both the United States government and Indiana's. “Republican government” is not taught as a named principle. Fort Harrison: The Federal Footprint adds an Indiana example of federalism only: a federal Army post inside Indiana that the county could not tax (the Enclave Clause and McCulloch v. Maryland), and what changed when the ground passed to state and local owners.",
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
          claimIds: [
            "civics.article-v-amendment",
            "civics.in-constitution-amendment",
            "indiana.mudsock-tax-cap-amendment",
          ],
          coverage: "partial",
          note: "Partial: Article V is taught in full, including why the federal bar is so high. On the Indiana side the civics course teaches who may propose amendments (only the General Assembly — Indiana has no citizen initiative), and Mudsock: How a Rivalry Marks a Boundary works the rest of the procedure through one real case: the property-tax-cap amendment, passed in 2008, passed again by a separately elected General Assembly in 2010, then ratified by the voters in November 2010. Why Indiana's procedure is hard to complete is shown by that case, not analyzed in general.",
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
          code: "USG.3.9",
          text: "Analyze the election of Benjamin Harrison, his approach to the presidency, his relationship to the legislative branch, and his re-election defeat, considering the effects of party politics and public opinion.",
          claimIds: ["indiana.harrison-presidency"],
          coverage: "partial",
          note: "Partial: the 1888 election (an Electoral College win while losing the popular vote, the 'blocks of five' circular), his approach to the office and his relationship with a Congress his own party held are analyzed through one question, voting rights and the 1890 federal elections bill, with party politics and public opinion throughout. His 1892 defeat is reported but not analyzed, and the tariff, silver and foreign policy are left out on purpose. This standard is in the 2023 edition only; the 2026 edition has no Harrison standard.",
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
      fetchedOn: "2026-11-03",
      sourceUrl: "https://www.in.gov/doe/files/Indiana-Academic-Standards-U.S.-History.pdf",
      adoption:
        "The 2023 edition, which IDOE's index lists beside a 2026 edition. The Great Migration, labor-history and Indiana site courses map here; each entry says exactly which era standard it reaches and which halves it does not. The 2026 edition renumbers the era standards, has no separate Historical Thinking domain (USH.10.x here) and no Benjamin Harrison standard (USH.2.6 here), so confirm which edition your school year is being held to.",
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
          claimIds: [
            "history.jim-crow-and-long-shadow",
            "history.separate-but-equal-in-public-funding",
          ],
          coverage: "partial",
          note: "Partial: the standard's second sentence — the denial of African American rights in the South and its effects in future years — is the course's core, taught for twelve lessons, and The Match adds the first sentence's development half from the statute side: 7 U.S.C. § 323, enacted in 1890, deemed a state compliant if it maintained separate colleges and divided the funds equitably, six years before the Supreme Court adopted the doctrine, with the effects in future years traced through the funding record to the present. The case-law development culminating in Plessy is still referenced rather than analyzed case by case.",
        },
        {
          code: "USH.2.6",
          text: "Describe and assess the contribution of Benjamin Harrison to national policies on environmental protection, business regulation, immigration, and civil rights.",
          claimIds: ["indiana.harrison-civil-rights-and-immigration-record"],
          coverage: "partial",
          note: "Partial: two of the four policy areas. Civil rights is the course's core (his messages on the ballot, the elections and Blair bills, his appointments, his 1892 call for anti-lynching legislation), and immigration is taught through the Geary Act he signed in 1892. Environmental protection is not taught, and business regulation (the Sherman Act, the McKinley Tariff) is left out on purpose. This standard is in the 2023 edition only.",
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
          claimIds: ["history.wagner-act", "history.federal-farm-programs-and-local-administration"],
          coverage: "partial",
          note: "Partial: two of the standard's four areas. The LABOR effect — the Wagner Act, what it created, and precisely who it excluded — is taught in depth, including its long-term consequences. The AGRICULTURE effect is taught through one Second New Deal instrument specifically: section 8(b) of the Soil Conservation and Domestic Allotment Act of 1935, which created the state, county and community committees that administer federal farm programs, and whose long-term effect is that those committees still run conservation and price-support programs today, still elected by producers, at 16 U.S.C. § 590h(b)(5). The standard's remaining two areas, social welfare and banking, are not taught.",
        },
        {
          code: "USH.6.1",
          text: "Describe the challenges involved with the enforcement of desegregation directives in Brown v. Board of Education of Topeka (1954). (E)",
          claimIds: ["indiana.gym-desegregation-enforcement"],
          coverage: "partial",
          note: "Partial: one Northern district, worked from the 1971 federal opinion. The Gym and the Color Line teaches how the Indianapolis school board kept its schools segregated after 1954 (optional attendance zones, boundary changes, transfer rules) and how the federal suit filed in 1968 was enforced, through inter-district busing from 1981 to 2016. Brown itself is mentioned rather than taught, and Brown II and Southern massive resistance are not covered.",
        },
        {
          code: "USH.7.1",
          text: "Explain the efforts of groups of African Americans, Native Americans, Hispanic Americans, and women to assert their social and civic rights in the years following World War II. (E)",
          claimIds: [
            "history.migration-civil-rights-politics",
            "history.labor-civil-rights",
            "indiana.belmont-postwar-rights-claims",
          ],
          coverage: "partial",
          note: "Partial: African American civil-rights organizing is covered from an angle most curricula skip — the Black urban vote the Migration created, and A. Philip Randolph through the 1968 Memphis sanitation strike. Belmont Beach and the City's Water adds the fight for public water, case by case from 1949 to 1968: Gary, Anacostia, St. Louis, the Swope Park suit and its 1953 opinion, Coney Island, the Rainbow Beach and Biloxi wade-ins, Glen Echo and Gwynn Oak, and in Indianapolis the 1962 NAACP Youth picket at Riverside. The standard also names Native Americans, Hispanic Americans, and women, none of whom are covered here.",
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
          claimIds: [
            "history.migration-primary-sources",
            "history.land-record-primary-sources",
            "indiana.belmont-sources-and-limits",
            "indiana.avenue-evidence-limits",
            "indiana.gym-court-opinions-as-sources",
            "indiana.racetracks-evidence",
            "indiana.mudsock-sources",
            "indiana.fort-harrison-sources",
            "indiana.fox-lake-conflicting-records",
          ],
          coverage: "partial",
          note: "Partial: sources are pointed to their actual archives (National Archives, Census Bureau, the Schomburg Center) rather than quoted from memory, and the course turns a widely repeated but unsupported statistic into an explicit limitations-of-evidence lesson. Sustained student-run source analysis is prompted by activities but not assessed. Reading a Land Description reaches the standard through land records: learners read the Land Ordinance of 1785 clause by clause, a 1775 deed from eleven Piankeshaw chiefs, and a surveyor's own field entry, each beside a secondary account (White's 1983 BLM history, Wilson's 1916 article), and two conflicts are taught as limitations of the evidence rather than settled by guessing: the year Freeman surveyed the Vincennes Tract (1803 in White, 1802-3 in Wilson) and the year the Vincennes land office opened (two different years on the state archives' own page). Partial there too: the sources are land records only, and the analysis is assessed by quiz rather than by a student-written argument. The Indiana site courses each work the standard on one place, and the split matters: The Gym and the Color Line and Fort Harrison: The Federal Footprint have the learner read primary sources directly (court opinions; HABS records, a 1938 newsletter and Library of Congress photographs) and correct a secondary source against them. Belmont Beach, Indiana Avenue, Two Racetracks, Mudsock and Fox Lake teach the limits of evidence thoroughly (conflicting counts, a secondary source cited by a nomination, an account resting on one historian), but most of their primary sources are read as a National Register nomination or a secondary account quotes them, and each course says so; the primary records it could not open are listed for the learner to find.",
        },
        {
          code: "USH.10.1",
          text: "Cultivate historical thinking, including the ability to evaluate competing explanations for historical change.",
          claimIds: ["indiana.avenue-competing-explanations"],
          coverage: "partial",
          note: "Partial: one historical change, evaluated well. Indiana Avenue: A District and What Replaced It weighs three explanations for the loss of the Avenue's buildings (the interstate, blight designation with university land assembly, and Unigov) and rules one out by chronology. It is one change in one city, not a general course in historical thinking.",
        },
        {
          code: "USH.10.3",
          text: "Analyze multiple, unexpected, and complex causes and effects of events in the past.",
          claimIds: ["indiana.racetracks-multiple-causes"],
          coverage: "partial",
          note: "Partial: Two Racetracks treats exclusion from the Indianapolis 500 as several separate gates (license, entry approval, membership, venue, capital) and analyzes the 42 years between 1949 and the first Black starter in 1991 through four possible causes. It declines to rank them because the record does not support a ranking, so the analysis stops short of a causal conclusion.",
        },
        {
          code: "USH.10.4",
          text: "Assess competing historical interpretations of a particular historical moment, event, or change.",
          claimIds: ["indiana.harrison-compromise-of-1890", "indiana.belmont-competing-readings"],
          coverage: "partial",
          note: "Partial: two courses, one moment each. The President's House separates the established record of January 22, 1891 from the contested 'Compromise of 1890' interpretation and weighs four historians on it. Belmont Beach and the City's Water sets two readings of why Indianapolis allowed the beach (the Friends of Belmont Beach's environmental-racism reading of motive, the nomination's cautious reading of cause) and two versions of the 1927 country-club episode side by side, and leaves them open with their owners rather than choosing. Neither is a survey of historiography.",
        },
      ],
    },

    // ── Grade 4 Social Studies (2023) ──────────────────────────────────────
    {
      id: "in-g4ss",
      subject: "Social Studies",
      name: "Indiana Academic Standards: Grade 4 Social Studies",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-11-03",
      sourceUrl: "https://www.in.gov/doe/files/Indiana-Academic-Standards-Grade-4-Social-Studies.pdf",
      adoption:
        "The 2023 edition, as printed on the document itself. IDOE's social-studies page also lists a 2026 edition for Grade 4, published only as a Google Drive link; it has not been fetched, so confirm which edition your school year is held to. Every course mapped here is written for high school and adults, so a Grade 4 teacher would draw on its Indiana lessons and adapt them rather than assign the course as it stands; each entry names the lessons to start from.",
      standards: [
        {
          code: "4.H.4",
          text: "Summarize and explain the significance of key documents in Indiana’s development from a United States territory to statehood.",
          claimIds: ["civics.land-ordinance-and-northwest-ordinance"],
          coverage: "partial",
          note: "Partial. The standard's examples are the Land Ordinance of 1784, the Northwest Ordinance (1787), and the 1816 Indiana Constitution. Reading a Land Description teaches the Land Ordinance of 1785 from its own text and the Northwest Ordinance's provisions and significance (lesson 3), and what each gave Indiana: its survey grid, and its path to statehood on an equal footing. It mentions the 1784 committee draft only as the plan the 1785 Ordinance revised, and it does not teach the 1816 Indiana Constitution. The course is written for adults, so a Grade 4 teacher would adapt it rather than assign it.",
        },
        {
          code: "4.H.5",
          text: "Explain the roles of various individuals, groups, and movements in the social conflicts leading to the Civil War. (E)",
          claimIds: ["indiana.ohio-underground-railroad"],
          coverage: "partial",
          note: "Partial: the Underground Railroad in southern Indiana, and who led and risked it. The Ohio and the Line teaches the river as the legal line between free Indiana and slave-state Kentucky and the networks George DeBaptiste and Elijah Anderson organized from Madison. It does not teach the standard's other examples (Levi and Catharine Coffin, organized abolition and anti-slavery societies, the Liberia colonization movement) or how these conflicts led to the Civil War.",
        },
        {
          code: "4.H.8",
          text: "Describe the participation of Indiana citizens in World War I and World War II. (E)",
          claimIds: ["indiana.fort-harrison-two-wars"],
          coverage: "partial",
          note: "Partial: Indiana's part in both wars through one Army post: the 1917 officer training camps and the Lilly-funded Base Hospital 32, staffed by local doctors and nurses, in World War I; the induction and reception center and the prisoner-of-war camp in World War II. The standard's home-front examples (victory gardens, rationing, the steel mills, Ernie Pyle) are not taught.",
        },
        {
          code: "4.H.9",
          text: "Identify and describe important events and movements that changed life in Indiana in the early twentieth century.",
          claimIds: ["indiana.belmont-early-twentieth-century"],
          coverage: "partial",
          note: "Partial: two events, in one Indianapolis neighborhood. Belmont Beach and the City's Water describes the Great Flood of 1913 and the levee built after it, and the Black population growth of the Great Migration years on the near west side, one of the standard's own examples. Women's suffrage, the Great Depression and the two world wars are not taught as Indiana events.",
        },
        {
          code: "4.H.11",
          text: "Identify and describe important events and movements that changed life in Indiana from the mid-twentieth century to the present.",
          claimIds: ["indiana.belmont-civil-rights-in-indianapolis", "indiana.avenue-midcentury-change", "indiana.gym-school-integration-indianapolis"],
          coverage: "partial",
          note: "Partial: the standard's first example, the Civil Rights Movement and school integration in Indiana, is taught in depth, but in Indianapolis only. Belmont Beach and the City's Water covers how the city desegregated its public water (the 1962 NAACP Youth picket at Riverside, the 1974 suit against a private club) and the 2008 renaming of Belmont Park for Rev. Mozel Sanders; The Gym and the Color Line covers school integration from the 1949 statute to busing from 1981 to 2016; Indiana Avenue covers blight clearance, the university land purchases of the 1960s and Unigov in 1970. The Korean War, Asian and Hispanic immigration, advanced manufacturing and the life sciences are not taught.",
        },
        {
          code: "4.H.13",
          text: "Create and interpret timelines that show relationships among people, events, and movements in the history of Indiana.",
          claimIds: ["indiana.avenue-chronology"],
          coverage: "partial",
          note: "Partial: Indiana Avenue has the learner interpret a dated Indianapolis chronology (1945 to 1983) to test whether a cause comes before its effect, then build a dated table of their own. The timelines are tables for one city, not drawn timelines of statewide history.",
        },
        {
          code: "4.H.14",
          text: "Construct a brief narrative about an event in Indiana history using primary and secondary sources.",
          claimIds: ["indiana.belmont-sourced-narrative", "indiana.racetracks-sourced-narrative", "indiana.fox-lake-sourced-narrative"],
          coverage: "partial",
          note: "Partial: each of three courses ends on a sourced nonfiction assignment that can be an Indiana event (the 1936 opening of Belmont Beach, the 1931 Gold and Glory Sweepstakes, a Fox Lake decision). They are 800 to 1,300 words, not brief, they also allow subjects that are not events or not in Indiana, and the primary sources are often available only as a nomination quotes them, which each assignment says to mark.",
        },
        {
          code: "4.E.5",
          text: "Identify entrepreneurs who have influenced Indiana and the local community.",
          claimIds: ["indiana.fox-lake-entrepreneurs"],
          coverage: "partial",
          note: "Partial: Fox Lake names the Black business people who built the resort and what each built or ran (Carl Wilson Sr. of Fort Wayne, contractor John A. Roberts, the hotel run by Mary Frances Fleming and Mabel Van Cleave, the Mar-Fran motel, the Pryors' inn). It identifies them; it does not teach profit as an incentive, and it says no source shows whether the land company made money.",
        },
        {
          code: "4.E.7",
          text: "Identify important goods and services provided by state and local governments by giving examples of how state and local tax revenues are used. (E)",
          claimIds: ["indiana.mudsock-tax-services"],
          coverage: "full",
          note: "Covered with real Hamilton County examples: what a household gets for a new municipal levy on annexation (stormwater management, road repair and snow removal, police patrol), where school referendum dollars go, and state tuition support per student. The course is written for high school and adults, so a Grade 4 teacher would adapt the examples.",
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

    // ── Mathematics, Grade 5 (2023) — fetched 2026-10-14 ────────────────────
    // Indiana writes its own mathematics standards (it is not a Common Core math state), so these
    // are own-frameworks, transcribed from IDOE's 2023 grade PDFs linked on its Mathematics page.
    {
      id: "in-math-5",
      subject: "Mathematics",
      name: "2023 Indiana Academic Standards: Grade 5 Mathematics",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-10-14",
      sourceUrl: "https://media.doe.in.gov/standards/indiana-academic-standards-grade-5-mathematics.pdf",
      adoption:
        "Indiana's own 2023 mathematics standards, required to be taught; IDOE shades the standards it identifies as essential for mastery and marks them “E.” One course claims here, Map and Compass, which grades its computations by multiple choice and practices, but does not grade, the hand work of plotting on a map.",
      standards: [
        {
          code: "5.CA.11",
          text: "Represent real-world problems and equations by graphing ordered pairs in the first quadrant of the coordinate plane, and interpret coordinate values of points in the context of the situation.",
          claimIds: ["catalog.utm-first-quadrant-coordinates"],
          coverage: "partial",
          note: "PARTIAL. Interpreting coordinates in context is taught and graded: Map and Compass lesson 11 treats the UTM grid as a first-quadrant plane (easting as x, northing as y, both positive because of the false origin) and reads what a coordinate says about the ground, such as 46,000 m east of the zone's central meridian, or one point 1,300 m east and 400 m north of another. Graphing is practiced but not graded: lesson 34 plots a GPS fix on the map, assessed only by multiple choice on its arithmetic. Graphing equations is not taught at all.",
        },
      ],
    },

    // ── Mathematics, Grade 7 (2023) — fetched 2026-10-14 ────────────────────
    {
      id: "in-math-7",
      subject: "Mathematics",
      name: "2023 Indiana Academic Standards: Grade 7 Mathematics",
      publisher: "Indiana Department of Education (IDOE)",
      version: "2023",
      fetchedOn: "2026-10-14",
      sourceUrl: "https://media.doe.in.gov/standards/indiana-academic-standards-grade-7-mathematics.pdf",
      adoption:
        "Indiana's own 2023 mathematics standards, required to be taught. One course claims here, Map and Compass, which grades its scale computations by multiple choice and does not ask the student to make a scale drawing.",
      standards: [
        {
          code: "7.GM.1",
          text: "Solve real-world and other mathematical problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing. Create a scale drawing by using proportional reasoning.",
          claimIds: ["catalog.map-scale-actual-distance"],
          coverage: "partial",
          note: "PARTIAL: computing actual lengths and areas from a scale drawing is taught and graded; creating a scale drawing is not. Map and Compass lesson 7 uses a 1:24,000 topographic map as the scale drawing (3.5 in is 7,000 ft; 6.2 cm is 1,488 m; 1,200 m on the ground is 5 cm on the map; a 1,000 m grid square is 1 km², about 247 acres), and lessons 8 and 34 apply the same arithmetic to slope and to plotting. The student never draws one.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims, so a teacher can
  // see we did not pad the map, and so the next editor does not "helpfully" re-add them.
  notClaimed: [
    {
      heading: "Mathematics — two grade-level standards, both partial, and nothing else.",
      body: "Map and Compass is the only course here that teaches mathematics an Indiana standard names: reading coordinates on a first-quadrant grid (5.CA.11) and computing ground lengths and areas from a map's scale (7.GM.1). Both are partial, because the course grades its computations by multiple choice and never grades the hand work the standards also ask for: graphing equations and points, and creating a scale drawing. It claims no other Indiana mathematics standard; Surveying: How Land Gets Measured claims only the Common Core HSN-Q.A.3 reporting judgment, which this file does not adopt for Indiana, so it is not shown here; the rest of this catalog does no mathematics instruction an Indiana standard names.",
    },
    {
      heading: "Science — almost nothing.",
      body: "There is no laboratory work, no investigation and no scientific modelling here. Indiana is not an NGSS state; we checked and claim no Indiana science standard. (Our partial NGSS claims are shown only for the jurisdictions that adopted the NGSS.)",
    },
    {
      heading: "Most of the U.S. Government standards we checked.",
      body: "USG.1.4 (types of government: monarchy, oligarchy, totalitarianism, anarchy), USG.1.5 (unitary vs confederate vs federal), USG.1.6 (constitutionalism, rule of law, limited government, popular sovereignty as named principles), USG.2.2 (compromise at the Constitutional Convention), USG.2.4-2.6 (founding ideas, civic identity, and civic values as a set), USG.3.1 (the four-part characterization of U.S. government), USG.3.3 (enumerated/implied/DENIED powers in BOTH constitutions — our course teaches enumerated/implied/reserved/concurrent, U.S. only), USG.3.10 (political parties' progression and ideologies), USG.3.13 (media influence on public opinion — our media-literacy course is consumer protection, not political media analysis), all of USG.4 (foreign affairs), and USG.5.8 — the courses do not genuinely teach these, so we do not claim them.",
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
      heading: "Indiana site courses: government standards a civics course already covers in full.",
      body: "The courses on Indiana places (Belmont Beach, Indiana Avenue, the Attucks gym, the two racetracks, Mudsock, Fort Harrison, Fox Lake) each show, for one place, which state and local bodies decided what and how that shaped residents' lives, which is part of USG.3.12; Belmont Beach and Mudsock also show citizen and interest-group action reaching local government (USG.5.5), The President's House traces a federal bill's death (USG.3.5), Mudsock teaches local referendum law (USG.3.8), and The Gym and the Color Line reads Milliken v. Bradley (USG.5.3). This page shows one coverage level per standard, and those five are marked Covered because a civics course teaches each in full. Listing a site course under them would tell you that course covers the whole standard, and none of them does, so they are not listed there. Use the civics courses for those standards and the site courses as Indiana examples.",
    },
    {
      heading: "Indiana site courses: era standards considered and not claimed.",
      body: "Belmont Beach and the City's Water: USH.3.6 (one lesson on the Great Migration's arrival on the west side, too thin for the standard's three migrant streams), USH.5.4 (the 1943 Detroit riot is taught as a park case, not as wartime experience), USH.7.2 (the course compares how claims to public water were made, by entering, suing and wading in, but not the philosophies the standard names), USH.10.5 (its assignment is a sourced narrative, not an argument about historical change), and USG.5.3 (Kansas City v. Williams is an appellate opinion, not a Supreme Court case). Two Racetracks: 4.H.10 and 4.E.5 (the Speedway's founders and the town's manufacturers are named, not taught). Fox Lake: 4.H.11 (it shows one effect of the 1964 Civil Rights Act on a resort, not the movement) and 4.H.13 (its dated tables cover one resort, not Indiana's history). The Wabash Headwaters: 4.G.2 and 4.G.7 (one sentence locates the river; its role in settlement is not taught). Fort Harrison: USH.5.4 and USH.4.6 (a 1942 photograph series and an all-Black CCC company are documented, not analyzed as wartime or New Deal policy).",
    },
    {
      heading: "Grade 8, Indiana Studies, content-area literacy and science: not yet mapped for the site courses.",
      body: "The Ohio and the Line (the Underground Railroad at Madison) and Fort Harrison (federal, state and local roles in an economy) have candidate Grade 8 matches, and every Indiana site course would fit the high-school Indiana Studies elective and Indiana's own content-area literacy standards for history, the Indiana counterpart of the Common Core literacy standards these courses carry in other states. Grade 8 has not been added as a framework yet; Indiana Studies is published only as a Google Drive link; and the 2020 content-area literacy document is not linked from IDOE's current social-studies page, so whether it still applies has not been confirmed. Belmont Beach's sewage and river-safety history was not checked against Indiana's environmental science standards. None of these is claimed until it is fetched and checked.",
    },
    {
      heading: "E.4.1, E.4.2, E.3.2, USH.9.3 — the Commodity Map rejections, still rejected.",
      body: "Public goods are never taught; corrective (Pigouvian) taxation is never taught as a policy tool; the four market structures are named, never taught as a unit; and “media in the democratic process” is too thin to stand up. See the source file for the full reasoning.",
    },
  ],
};
