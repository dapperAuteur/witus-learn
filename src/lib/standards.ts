// ─────────────────────────────────────────────────────────────────────────────
// Standards alignment for the Commodity Map curriculum.
//
// ⚠️ THE RULE THIS FILE LIVES BY — read before editing.
//
// Every entry below is a claim, made to teachers and to homeschooling parents who may file
// it with a state, about what a public education standard requires. A wrong or invented code
// is worse than no standards page at all. Therefore:
//
//   1. Every `code` and every `text` was FETCHED FROM THE PUBLISHER and transcribed verbatim.
//      `text` is the standard's own words — not a paraphrase, not a summary, not a memory.
//      If you cannot fetch it, you do not cite it. There is no "close enough".
//   2. Every alignment was checked against the ACTUAL LESSON CONTENT (content/bvc/*.csv),
//      not against a lesson title. A title is not evidence.
//   3. `coverage: "partial"` is not a weaker "full" — it is a promise that we looked and the
//      match is genuinely incomplete. Say WHY in `note`. Never round a partial up.
//   4. Standards get revised. FETCHED_ON is the day these were retrieved from the publisher;
//      it is rendered in the UI, and the UI tells the teacher to confirm against their own
//      jurisdiction's current requirements. Keep that date honest — if you edit an entry,
//      you re-fetched it, so update the date.
//
// Standards we CONSIDERED AND REJECTED (kept here so the next person does not "helpfully"
// re-add them — each was rejected because the curriculum does not genuinely teach it):
//   · Common Core MATHEMATICS (all) — the curriculum does no mathematics instruction.
//   · NGSS HS-ESS3-2/-3/-4/-6 — these require engineering design solutions and computational
//     simulations/representations. There are none anywhere in the curriculum.
//   · NGSS HS-ESS3-5 — students read published climate projections; they do not analyze
//     geoscience data or global climate model output. That is a different performance.
//   · Indiana E.4.1 (public goods / market failure) — public goods are never taught.
//   · Indiana E.4.2 (government taxes negative externalities, subsidizes positive ones) —
//     the curriculum DEFINES a negative externality (Ep 15) and explains the U.S. sugar
//     program (Ep 4), but never teaches corrective (Pigouvian) taxation as a policy tool.
//     The excise taxes it does mention (Ep 8, 10, 16) are revenue/price effects, not
//     externality correction. Close, but not the standard.
//   · Indiana E.3.2 (the four market structures) — named, never taught as a unit.
//   · Indiana USH.9.3 (media in the democratic process) — too thin to stand up.
//   · DC: Prohibition and mass incarceration — DC's 2023 social studies standards contain
//     NO standard on either (we searched the full document). So we cite none, even though
//     the curriculum teaches both. The absence is DC's, not ours.
//   · DC's ECONOMICS and GEOGRAPHY strands — these are un-coded "statements of practice" in
//     the 2023 document, not numbered standards. There is no code to cite, so we cite none.
// ─────────────────────────────────────────────────────────────────────────────

/** The day every code and every verbatim text below was retrieved from its publisher. */
export const STANDARDS_FETCHED_ON = "2026-07-13";

export type Coverage = "full" | "partial";

export interface StandardsFramework {
  id: string;
  /** The jurisdiction a teacher is answerable to. */
  jurisdiction: "Indiana" | "Washington, D.C.";
  /** The document's own title, as published. */
  name: string;
  publisher: string;
  /** The edition/year printed on the document itself. */
  version: string;
  /** Deep link to the document we actually read. */
  sourceUrl: string;
  /** How this framework came to apply in this jurisdiction, and anything a teacher must know. */
  adoption: string;
}

export interface StandardAlignment {
  frameworkId: string;
  /** The code exactly as printed in the source document. */
  code: string;
  /** The standard's text, transcribed verbatim from the source document. */
  text: string;
  /** Course slugs (seeded from content/bvc) whose lessons cover this standard. */
  courseSlugs: string[];
  /** The specific lessons that do the covering — this is the evidence for the claim. */
  lessons: string[];
  coverage: Coverage;
  /** Required when coverage is "partial": exactly what is and is not covered. */
  note?: string;
}

// ── Frameworks ───────────────────────────────────────────────────────────────
//
// Washington, D.C. does not have one homegrown set of standards. It adopted three separate
// frameworks, and a teacher there is answerable to whichever one covers the subject:
//   · Common Core (ELA/Math) — adopted July 2010 by the DC State Board of Education.
//   · NGSS (K-12 science) — adopted December 2013 by the DC State Board of Education.
//   · DC's OWN social studies standards — adopted June 2023 (there is no Common Core for
//     social studies; that subject was never part of it).
// Both adoptions are stated on OSSE's own service pages, linked below. Indiana, by contrast,
// is not a Common Core state (it repealed its adoption in 2014) and is not an NGSS state —
// it publishes its own Indiana Academic Standards, so its codes are entirely distinct.

export const FRAMEWORKS: StandardsFramework[] = [
  {
    id: "in-econ",
    jurisdiction: "Indiana",
    name: "Indiana Academic Standards: Economics",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2026",
    sourceUrl: "https://www.in.gov/doe/files/2026-Indiana-Academic-Standards-Economics.pdf",
    adoption:
      "IDOE currently publishes BOTH a 2026 and a 2023 edition of the Economics standards. We cite the 2026 edition because it is the newer of the two — but the text of some standards changed between them (E.1.6 gained “feudal, mercantile”, and Domains 6–8 were renumbered from E.6–E.8 to GE.6–GE.8). Confirm which edition your school year is being held to.",
  },
  {
    id: "in-ghw",
    jurisdiction: "Indiana",
    name: "Indiana Academic Standards: Geography and History of the World",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-geography-and-history-of-the-world.pdf",
    adoption:
      "The current edition IDOE links for this high-school course. This is the course the Commodity Map fits most completely.",
  },
  {
    id: "in-wh",
    jurisdiction: "Indiana",
    name: "Indiana Academic Standards: World History and Civilization",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-world-history-and-civilization.pdf",
    adoption: "The current edition IDOE links for this high-school course.",
  },
  {
    id: "in-ush",
    jurisdiction: "Indiana",
    name: "Indiana Academic Standards: U.S. History",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    sourceUrl: "https://www.in.gov/doe/files/Indiana-Academic-Standards-U.S.-History.pdf",
    adoption:
      "The current edition IDOE links for this high-school course. Our overlap with it is small and we say so — most of this curriculum is world history, not U.S. history.",
  },
  {
    id: "in-ela-910",
    jurisdiction: "Indiana",
    name: "Indiana Academic Standards: Grades 9-10 English/Language Arts",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-grade-9-10-english_language-arts.pdf",
    adoption:
      "Indiana is not a Common Core state — it repealed its adoption in 2014 and writes its own ELA standards. These codes are Indiana's, and do not match Common Core's.",
  },
  {
    id: "in-ela-1112",
    jurisdiction: "Indiana",
    name: "Indiana Academic Standards: Grades 11-12 English/Language Arts",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-grade-11-12-english_language-arts.pdf",
    adoption:
      "Indiana is not a Common Core state — it repealed its adoption in 2014 and writes its own ELA standards. These codes are Indiana's, and do not match Common Core's.",
  },
  {
    id: "dc-ccss-ela",
    jurisdiction: "Washington, D.C.",
    name: "Common Core State Standards for English Language Arts & Literacy",
    publisher: "Common Core State Standards Initiative",
    version: "Grades 11-12",
    sourceUrl: "https://www.thecorestandards.org/ELA-Literacy/RH/11-12/",
    adoption:
      "OSSE states that “In July 2010, the District of Columbia adopted the Common Core State Standards” for reading and mathematics. The literacy-in-history/social-studies (RH) and writing-in-history (WHST) strands are the ones this curriculum touches. We claim no mathematics standards.",
  },
  {
    id: "dc-ngss",
    jurisdiction: "Washington, D.C.",
    name: "Next Generation Science Standards (NGSS)",
    publisher: "NGSS Lead States / nextgenscience.org",
    version: "HS-ESS3 Earth and Human Activity",
    sourceUrl: "https://www.nextgenscience.org/dci-arrangement/hs-ess3-earth-and-human-activity",
    adoption:
      "OSSE states that “In Dec. 2013, the Next Generation Science Standards were adopted by DC State Board of Education as the new K-12 Science Standards for the District of Columbia Schools.” This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
  },
  {
    id: "dc-ss",
    jurisdiction: "Washington, D.C.",
    name: "Washington, DC K-12 Social Studies Standards",
    publisher: "Office of the State Superintendent of Education (OSSE)",
    version: "June 2023",
    sourceUrl:
      "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Adopted%20Standards.pdf",
    adoption:
      "Common Core never covered social studies, so DC wrote its own. These are the high-school course codes: WH1 (World History I), WH2 (World History II), US2 (US History II).",
  },
];

// ── Alignments ───────────────────────────────────────────────────────────────

export const ALIGNMENTS: StandardAlignment[] = [
  // ── Indiana · Economics (2026) ─────────────────────────────────────────────
  {
    frameworkId: "in-econ",
    code: "E.2.6",
    text: "Analyze the earnings of workers in different industries using factors such as product value, worker productivity, and market structure.",
    courseSlugs: ["coffee", "tea", "chocolate", "tequila-mezcal", "the-toast", "full-spectrum"],
    lessons: [
      "Ep 1 · Follow the Money: Bean to Cup",
      "Ep 2 · Who Gets Paid, Tea and Coffee Compared",
      "Ep 3 · The Commodity Trap",
      "Ep 12 · The Jimador's Share",
      "Ep 14 · Pattern 3: Labor Captures the Smallest Share (the smile curve)",
      "Ep 21 · The Smile Curve, Confirmed",
    ],
    coverage: "full",
    note: "This is the curriculum's spine. Every episode traces who is paid what along one commodity's chain, and the series names the pattern (the smile curve) and tests it across all 21 episodes.",
  },
  {
    frameworkId: "in-econ",
    code: "GE.8.1",
    text: "Define and explain the impact of trade barriers, such as quotas and tariffs, and analyze why countries erect them.",
    courseSlugs: ["sugar"],
    lessons: ["Ep 4 · The Hidden Costs of Cheap Sugar"],
    coverage: "full",
    note: "The lesson works the U.S. sugar program specifically: import quotas, price supports and tariffs, why they exist, and the roughly $3.5bn/yr they cost consumers by holding U.S. prices ~40% above world prices (Congressional Budget Office, 2023). IDOE's 2023 edition numbers this same standard E.8.1; the 2026 edition prints it as GE.8.1.",
  },
  {
    frameworkId: "in-econ",
    code: "E.1.6",
    text: "Describe and compare the various economic systems (i.e., traditional, market, command, mixed, feudal, mercantile) and explain their strengths and weaknesses.",
    courseSlugs: ["forest-wisdom", "kava", "synthesis"],
    lessons: [
      "Ep 5 · The Reciprocity Economy",
      "Ep 6 · Ceremony Meets the Market",
      "Ep 7 · Two Ways of Doing Economics",
    ],
    coverage: "partial",
    note: "Partial, and deliberately so: the curriculum contrasts TRADITIONAL and MARKET economies directly and at length (and touches the mercantile system through the triangular trade). It does not teach command, mixed, or feudal systems. A teacher using this for E.1.6 must cover those three elsewhere.",
  },
  {
    frameworkId: "in-econ",
    code: "E.2.5",
    text: "Describe how price elasticity of supply and price elasticity of demand send signals to buyers and sellers.",
    courseSlugs: ["coffee", "sugar"],
    lessons: [
      "Ep 1 · Price Shocks and Why You Keep Buying",
      "Ep 4 · From Luxury to the Cheapest Calorie",
    ],
    coverage: "partial",
    note: "Partial: price elasticity of DEMAND is taught explicitly and well (coffee's inelastic demand absorbing a ~70% price spike). Price elasticity of SUPPLY is not taught as a named concept.",
  },

  // ── Indiana · Geography and History of the World (2023) ─────────────────────
  {
    frameworkId: "in-ghw",
    code: "GHW.8.1",
    text: "Use maps to show the location and distribution of Earth's resources, and analyze how this distribution affects trade between and among countries and regions.",
    courseSlugs: ["coffee", "tea", "chocolate", "sugar", "forest-wisdom", "kava"],
    lessons: [
      "The Commodity Map itself — every episode pinned at its origin",
      "The Growing Belts map — production regions by latitude band and country",
      "Ep 1 · The Coffee Belt: Where Coffee Grows and Why",
      "Ep 3 · The Cacao Tree and the Narrowest Belt",
      "Ep 6 · Why Volcanic Soil Only",
    ],
    coverage: "full",
    note: "This standard is, almost word for word, what the Commodity Map is for.",
  },
  {
    frameworkId: "in-ghw",
    code: "GHW.1.2",
    text: "Analyze agricultural hearths and exchanges of crops among regions. Evaluate the impact of agriculture on the subsequent development of cultural hearths in various regions of the world.",
    courseSlugs: ["coffee", "tea", "chocolate", "sugar"],
    lessons: [
      "Ep 1 · The Coffee Belt: Where Coffee Grows and Why",
      "Ep 2 · The Tea Plant and Its Climate Zones",
      "Ep 3 · The Big Producers and the Cacao Varieties",
      "Ep 4 · From New Guinea to the New World",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-ghw",
    code: "GHW.12.1",
    text: "Analyze global climate change forecasts for different parts of Earth and the implications of these changes for humans.",
    courseSlugs: ["coffee", "chocolate", "kava", "beer"],
    lessons: [
      "Ep 1 · Climate Change Is Redrawing the Map",
      "Ep 3 · A Two-Degree Threat",
      "Ep 6 · Islands Under Pressure",
      "Ep 8 · Beer Geography Is Shifting",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-ghw",
    code: "GHW.4.1",
    text: "Analyze and assess ways that colonialism and imperialism have persisted and continue to evolve in the contemporary world.",
    courseSlugs: ["chocolate", "forest-wisdom", "synthesis", "rum"],
    lessons: [
      "Ep 3 · Conquest and the Great Reversal",
      "Ep 5 · How Coca-Cola Got Its Name (biopiracy)",
      "Ep 7 · The Same Story, Six Times",
      "Ep 11 · The Debt of Freedom (the 1825 French indemnity and Haiti's modern poverty)",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-ghw",
    code: "GHW.9.3",
    text: "Distinguish and assess the human and physical factors associated with the spread of selected epidemics and/or pandemics over time, and propose strategies for limiting the spread of diseases.",
    courseSlugs: ["opioids"],
    lessons: ["Ep 17 · The Scott County Lesson", "Ep 17 · Treatment Versus Punishment"],
    coverage: "partial",
    note: "Partial: one epidemic, worked in real depth — the 2015 Scott County, Indiana HIV outbreak, its human and structural causes, and harm reduction as the strategy for limiting spread (roughly 200:1 in favour of prevention over treatment cost). The standard says “epidemics and/or pandemics”; a teacher wanting breadth will want a second case.",
  },
  {
    frameworkId: "in-ghw",
    code: "GHW.8.2",
    text: "Prepare graphic representations, such as maps, tables, and timelines, to describe the global movement of goods and services between and among countries and world regions over time. Analyze and assess the patterns and networks of economic interdependence or lack of interdependence.",
    courseSlugs: ["coffee"],
    lessons: [
      "Ep 1 · Assignment, Option A — map the supply chain of 3 items from your morning routine",
      "Ep 1 · Assignment, Option B — Coffee Belt climate report, with maps and data tables",
    ],
    coverage: "partial",
    note: "Partial, and the distinction matters: the curriculum SHOWS these maps everywhere, but this standard asks the STUDENT to prepare them. That student-produced work exists only in the Coffee episode's project, which is the one episode that currently ships a graded assignment.",
  },
  {
    frameworkId: "in-ghw",
    code: "GHW.6.4",
    text: "Compare and contrast the impact of the Industrial Revolution on developed countries with the economic processes acting upon less developed and developing countries in the contemporary world.",
    courseSlugs: ["chocolate", "synthesis", "full-spectrum"],
    lessons: [
      "Ep 3 · The Commodity Trap",
      "Ep 7 · Who Captures the Value",
      "Ep 21 · The Smile Curve, Confirmed",
    ],
    coverage: "partial",
    note: "Partial: the “economic processes acting upon less developed and developing countries” half is covered thoroughly (why cacao farmers stay poor while the chocolate market grows). The Industrial Revolution itself is not taught head-on, so the comparison is one-sided without additional material.",
  },

  // ── Indiana · World History and Civilization (2023) ─────────────────────────
  {
    frameworkId: "in-wh",
    code: "WH.4.4",
    text: "Explain consequences of the conquests and colonization as a result of the worldwide voyages of exploration, including the transatlantic slave trade, Columbian Exchange, and the effects on native populations in the Americas.",
    courseSlugs: ["chocolate", "sugar", "rum", "tequila-mezcal", "tobacco"],
    lessons: [
      "Ep 3 · Conquest and the Great Reversal",
      "Ep 4 · The Triangular Trade and the Middle Passage",
      "Ep 11 · The Triangular Trade",
      "Ep 12 · Burning the Books (the destruction of the Mesoamerican codices)",
      "Ep 15 · From Sacred to Commodity",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-wh",
    code: "WH.5.5",
    text: "Analyze the causes and consequences of European imperialism upon the indigenous peoples of Africa, Asia, and Oceania.",
    courseSlugs: ["tea", "forest-wisdom", "kava", "opioids", "khat"],
    lessons: [
      "Ep 2 · Who Grows the Tea (colonial and plantation labour)",
      "Ep 5 · Whose Knowledge Is It",
      "Ep 6 · Kava Governs",
      "Ep 17 · The Opium Wars",
      "Ep 20 · The Ban Against the Evidence",
    ],
    coverage: "full",
    note: "All three regions the standard names are covered: Africa (Ep 5, Ep 20), Asia (Ep 2, Ep 17), Oceania (Ep 6).",
  },
  {
    frameworkId: "in-wh",
    code: "WH.3.1",
    text: "Analyze the impact of trade networks, such as the Silk Road and Indian Ocean trade network.",
    courseSlugs: ["tea"],
    lessons: ["Ep 2 · The Roads Tea Traveled"],
    coverage: "partial",
    note: "Partial: the episode maps and analyses the Tea Horse Road and the Maritime Silk Road, and why the route still matters. It is a trade-network lesson told through one commodity — it is not a general treatment of the Silk Road or the Indian Ocean network.",
  },
  {
    frameworkId: "in-wh",
    code: "WH.1.1",
    text: "Describe and evaluate social, cultural, and economic changes of small agriculture communities which led to the development of large agricultural settlements, such as the movement from hunting and gathering societies to civilization.",
    courseSlugs: ["beer"],
    lessons: ["Ep 8 · Liquid Bread and the First Cities"],
    coverage: "partial",
    note: "Partial: the episode makes the grain-to-cities argument and grounds it in the Code of Hammurabi (c. 1754 BCE), which legislates beer. It approaches the transition to civilization through one commodity rather than surveying it.",
  },

  // ── Indiana · U.S. History (2023) ──────────────────────────────────────────
  {
    frameworkId: "in-ush",
    code: "USH.4.2",
    text: "Assess the causes of the resurgence of social movements, reform movements, and vigilante groups, including the Ku Klux Klan, the Red Scare, and Prohibition.",
    courseSlugs: ["beer"],
    lessons: [
      "Ep 8 · Prohibition, the Experiment That Failed",
      "Ep 8 · Selling Prohibition (the rhetoric that drove the movement)",
    ],
    coverage: "partial",
    note: "Partial, and only one third of it: Prohibition is covered — its causes, its rhetoric and its results. The Ku Klux Klan and the Red Scare are not taught. Do not present this as covering USH.4.2 whole.",
  },

  // ── Indiana · ELA Grades 9-10 (2023) ───────────────────────────────────────
  {
    frameworkId: "in-ela-910",
    code: "9-10.CC.8",
    text: "Analyze bias in media through the inclusion or exclusion of information and reliability of the source from visual and verbal messages to achieve a desired result.",
    courseSlugs: ["coffee", "tea", "chocolate", "sugar", "rum", "tobacco"],
    lessons: [
      "Ep 1 · Reading a Coffee Ad",
      "Ep 2 · Reading a Tea Ad",
      "Ep 3 · Reading a Chocolate Ad",
      "Ep 4 · Whose Voice Tells the Story (reading a text for what it leaves out)",
      "Ep 11 · Tiki and the Tropical Paradise",
      "Ep 15 · The Language of Doubt",
    ],
    coverage: "full",
    note: "“Inclusion or exclusion of information” is taught by name: Ep 4 teaches reading for absence, using Jane Austen's silence about where the Mansfield Park sugar money comes from.",
  },
  {
    frameworkId: "in-ela-910",
    code: "9-10.RC.6",
    text: "Determine an author's perspective or purpose in a text, and analyze how an author uses rhetoric to advance that perspective or purpose.",
    courseSlugs: ["sugar", "beer", "tobacco", "opioids"],
    lessons: [
      "Ep 4 · Blood-Sweetened Luxury (the abolitionist sugar boycott)",
      "Ep 8 · Selling Prohibition",
      "Ep 15 · Torches of Freedom",
      "Ep 17 · Lin Zexu's Letter",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-ela-910",
    code: "9-10.RC.7",
    text: "Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is valid and the evidence is relevant and sufficient; identify false statements and fallacious reasoning.",
    courseSlugs: ["tobacco", "cannabis", "psychedelics", "khat"],
    lessons: [
      "Ep 15 · Doubt Is Our Product",
      "Ep 16 · Reefer Madness and the Language of Fear",
      "Ep 19 · Peer Review Versus Press Release",
      "Ep 20 · The Ban Against the Evidence",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-ela-910",
    code: "9-10.CC.5",
    text: "Analyze multiple sources of information presented in diverse media and formats while evaluating the credibility and accuracy of each source.",
    courseSlugs: ["psychedelics", "coffee"],
    lessons: [
      "Ep 19 · Peer Review Versus Press Release",
      "Every course's Sources bibliography, with per-claim verification",
    ],
    coverage: "partial",
    note: "Partial: the curriculum models source evaluation constantly and publishes its own bibliography for students to check. But sustained student-run source evaluation is assessed only in the Coffee project.",
  },

  // ── Indiana · ELA Grades 11-12 (2023) ──────────────────────────────────────
  {
    frameworkId: "in-ela-1112",
    code: "11-12.CC.8",
    text: "Analyze the impact of the media on the public, including identifying and analyzing rhetorical and logical fallacies.",
    courseSlugs: ["coffee", "chocolate", "beer", "tobacco", "cannabis", "coca"],
    lessons: [
      "Ep 1 · Reading a Coffee Ad",
      "Ep 3 · Reading a Chocolate Ad",
      "Ep 8 · Reading a Craft Beer Label",
      "Ep 15 · Torches of Freedom",
      "Ep 16 · Reefer Madness and the Language of Fear",
      "Ep 18 · Just Say No",
    ],
    coverage: "full",
    note: "A media-literacy lesson recurs in every single episode of the series; these are six of them.",
  },
  {
    frameworkId: "in-ela-1112",
    code: "11-12.RC.7",
    text: "Determine an author's perspective or purpose in a text in which the rhetoric is particularly effective (e.g., appeals to both friendly and hostile audiences, anticipates and addresses reader concerns and counterclaims), and analyze how style and content contribute to the power and persuasiveness of the text.",
    courseSlugs: ["sugar", "beer", "tobacco", "opioids"],
    lessons: [
      "Ep 4 · Blood-Sweetened Luxury",
      "Ep 8 · Selling Prohibition",
      "Ep 15 · Torches of Freedom",
      "Ep 17 · Lin Zexu's Letter (using Britain's own values against its opium policy)",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-ela-1112",
    code: "11-12.RC.8",
    text: "Delineate and evaluate the arguments and specific claims in U.S. and world texts, assessing whether the reasoning is valid and the evidence is relevant and sufficient; analyze the impact of false statements and fallacious reasoning.",
    courseSlugs: ["tobacco", "psychedelics", "khat"],
    lessons: [
      "Ep 15 · Doubt Is Our Product",
      "Ep 19 · Peer Review Versus Press Release",
      "Ep 20 · The Ban Against the Evidence (the UK banning khat against its own scientific advice)",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-ela-1112",
    code: "11-12.RC.9",
    text: "Synthesize and evaluate multiple sources of information presented in different mediums in order to address a question or solve a problem.",
    courseSlugs: ["coffee", "whiskey"],
    lessons: [
      "Ep 10 · The Oral History That Survived",
      "Ep 1 · Assignment — all four options require synthesis across sources",
    ],
    coverage: "partial",
    note: "Partial: the skill is modelled throughout, but the student is required to perform it only in the Coffee episode's project.",
  },
  {
    frameworkId: "in-ela-1112",
    code: "11-12.W.1",
    text: "Write arguments in a variety of forms that: a. Introduce precise claim(s), establish the significance of the claim(s), distinguish the claim(s) from alternate or opposing claims, and create an organization that logically sequences claim(s), counterclaims, reasons, and evidence. b. Use rhetorical strategies to enhance the effectiveness of the claim. c. Develop claim(s) and counterclaims fairly and thoroughly, supplying the most relevant evidence for each while pointing out the strengths and limitations of both in a manner that anticipates the audience's knowledge level, concerns, values, and possible biases. d. Use effective and varied transitions as well as varied syntax to link the major sections of the text, create cohesion, and clarify the relationships between claim(s) and reasons, between reasons and evidence, and between claim(s) and counterclaims. e. Establish and maintain a consistent style and tone appropriate for the purpose and audience. f. Provide a concluding statement or section that follows and supports the argument presented.",
    courseSlugs: ["coffee"],
    lessons: [
      "Ep 1 · Assignment, Option D — a 1,200–1,500 word research paper with a required counterargument section",
    ],
    coverage: "partial",
    note: "Partial: the Coffee project's Option D asks for exactly this (a thesis, primary sources, and a counterargument section addressing the strongest objection). But it is ONE optional project in ONE episode — this is not yet a writing programme, and we will not claim it is.",
  },
  {
    frameworkId: "in-ela-1112",
    code: "11-12.W.5",
    text: "Conduct more sustained research assignments and tasks to build knowledge about the research process and the topic understudy. a. Formulate an inquiry question and refine and narrow the focus as research evolves. b. Gather relevant information from multiple types of authoritative sources, using advanced searches effectively, and annotate sources. c. Assess the strengths and limitations of each source in terms of the task, purpose, and audience. d. Synthesize and integrate information into the text selectively to maintain the flow of ideas. e. Avoid plagiarism and over reliance on any one source and follow a standard format (e.g., MLA, APA) for citation. f. Present information, choosing from a variety of formats.",
    courseSlugs: ["coffee"],
    lessons: [
      "Ep 1 · Assignment, Option B — climate-vulnerability report, 3+ peer-reviewed sources, APA bibliography",
      "Ep 1 · Assignment, Option D — primary-source research paper with an APA bibliography",
    ],
    coverage: "partial",
    note: "Partial, same reason: the project demands a real research process with APA citation, but only the Coffee episode currently ships one.",
  },

  // ── Washington, D.C. · Common Core ELA/Literacy ─────────────────────────────
  {
    frameworkId: "dc-ccss-ela",
    code: "CCSS.ELA-Literacy.RH.11-12.6",
    text: "Evaluate authors' differing points of view on the same historical event or issue by assessing the authors' claims, reasoning, and evidence.",
    courseSlugs: ["sugar", "chocolate", "forest-wisdom", "coca"],
    lessons: [
      "Ep 4 · Whose Voice Tells the Story — Beckford (1790) against Equiano (1789) and Mary Prince (1831) on the same plantation world",
      "Ep 3 · Two Ways of Seeing a Bean",
      "Ep 5 · Two Ways of Knowing",
      "Ep 18 · Whose Voice",
    ],
    coverage: "full",
    note: "The strongest single alignment on this page. Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims and evidence.",
  },
  {
    frameworkId: "dc-ccss-ela",
    code: "CCSS.ELA-Literacy.RH.11-12.8",
    text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information.",
    courseSlugs: ["tobacco", "psychedelics", "khat"],
    lessons: [
      "Ep 15 · Doubt Is Our Product",
      "Ep 19 · Peer Review Versus Press Release",
      "Ep 20 · The Ban Against the Evidence",
    ],
    coverage: "full",
  },
  {
    frameworkId: "dc-ccss-ela",
    code: "CCSS.ELA-Literacy.RH.11-12.9",
    text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
    courseSlugs: ["whiskey", "sugar"],
    lessons: [
      "Ep 10 · The Oral History That Survived (recovering Nathan “Nearest” Green's erased role)",
      "Ep 4 · Whose Voice Tells the Story",
    ],
    coverage: "full",
    note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
  },
  {
    frameworkId: "dc-ccss-ela",
    code: "CCSS.ELA-Literacy.RI.11-12.6",
    text: "Determine an author's point of view or purpose in a text in which the rhetoric is particularly effective, analyzing how style and content contribute to the power, persuasiveness or beauty of the text.",
    courseSlugs: ["sugar", "tobacco", "opioids", "cannabis"],
    lessons: [
      "Ep 4 · Blood-Sweetened Luxury",
      "Ep 15 · Torches of Freedom",
      "Ep 17 · Lin Zexu's Letter",
      "Ep 16 · Three Sentences, Three Policies",
    ],
    coverage: "full",
  },
  {
    frameworkId: "dc-ccss-ela",
    code: "CCSS.ELA-Literacy.WHST.11-12.7",
    text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
    courseSlugs: ["coffee"],
    lessons: ["Ep 1 · Assignment — all four options are 2–3 week research projects"],
    coverage: "partial",
    note: "Partial: only the Coffee episode currently ships a graded assignment. Where it runs, it meets this standard squarely.",
  },
  {
    frameworkId: "dc-ccss-ela",
    code: "CCSS.ELA-Literacy.WHST.11-12.8",
    text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
    courseSlugs: ["coffee"],
    lessons: [
      "Ep 1 · Assignment, Option B — 3+ peer-reviewed sources and an APA bibliography",
      "Ep 1 · Assignment, Option C — interview ethics: informed consent, right to review",
    ],
    coverage: "partial",
    note: "Partial, same reason as WHST.11-12.7.",
  },

  // ── Washington, D.C. · NGSS ────────────────────────────────────────────────
  {
    frameworkId: "dc-ngss",
    code: "HS-ESS3-1",
    text: "Construct an explanation based on evidence for how the availability of natural resources, occurrence of natural hazards, and changes in climate have influenced human activity.",
    courseSlugs: ["coffee", "chocolate", "kava", "whiskey"],
    lessons: [
      "Ep 1 · Climate Change Is Redrawing the Map",
      "Ep 3 · A Two-Degree Threat",
      "Ep 6 · Why Volcanic Soil Only",
      "Ep 10 · Karst Limestone and Bourbon",
      "Ep 1 · Assignment, Option B — assess a producing country's climate viability and defend the assessment",
    ],
    coverage: "partial",
    note: "Read this one carefully before you rely on it. This is NOT a science course — it has no laboratory work, no investigations and no scientific modelling. What it does have is precisely the content of HS-ESS3-1: resource availability and climate change shaping what humans do and where. The lessons supply the evidence; the STUDENT constructs the explanation only in the Coffee project (Option B). If your science requirement is assessed on the three-dimensional NGSS performance, this contributes to it — it does not discharge it.",
  },

  // ── Washington, D.C. · DC Social Studies (June 2023) ────────────────────────
  {
    frameworkId: "dc-ss",
    code: "WH2.15",
    text: "Compare different forms of European colonization and enslavement, such as in plantation-based societies and economies across the Americas and the Caribbean, and resistance to such enslavement.",
    courseSlugs: ["sugar", "rum"],
    lessons: [
      "Ep 4 · The Triangular Trade and the Middle Passage",
      "Ep 4 · Resistance and Revolution",
      "Ep 11 · The Maroons",
      "Ep 11 · The Haitian Revolution",
    ],
    coverage: "full",
    note: "Both halves of the standard are covered: the plantation economy itself, and resistance to it (Maroon communities, the Haitian Revolution, revolt and abolition).",
  },
  {
    frameworkId: "dc-ss",
    code: "WH2.40",
    text: "Analyze the social, political and economic factors that contributed to the Haitian Revolution, and evaluate the impact of the Haitian revolution on Haiti and global events.",
    courseSlugs: ["rum"],
    lessons: [
      "Ep 11 · The Haitian Revolution",
      "Ep 11 · The Debt of Freedom",
      "Ep 11 · The Black Jacobins (C.L.R. James)",
    ],
    coverage: "full",
    note: "Including the standard's second half, which most curricula skip: the 1825 French indemnity, and the line from it to Haiti's poverty today.",
  },
  {
    frameworkId: "dc-ss",
    code: "WH2.53",
    text: "Analyze the Opium Wars' impact on China's political, economic and social systems, and evaluate the global consequences of the Opium Wars.",
    courseSlugs: ["opioids"],
    lessons: ["Ep 17 · The Opium Wars", "Ep 17 · Lin Zexu's Letter"],
    coverage: "full",
  },
  {
    frameworkId: "dc-ss",
    code: "WH2.37",
    text: "Evaluate the impact of the silver trade, spice trade, cotton trade and sugar industry on different societies and individuals during the 16th, 17th and 18th centuries.",
    courseSlugs: ["sugar", "rum"],
    lessons: ["Ep 4 · The Sugar Islands", "Ep 4 · From New Guinea to the New World", "Ep 11 · Waste-Product Economics"],
    coverage: "partial",
    note: "Partial: of the four trades the standard names, this curriculum covers the SUGAR INDUSTRY — thoroughly. It does not teach the silver, spice or cotton trades.",
  },
  {
    frameworkId: "dc-ss",
    code: "WH2.13",
    text: "Analyze government structures, technological innovations and geographical features of empires and city states across the Americas to evaluate the drastic impact of European colonization on Indigenous societies, including the Aztec and Incan Empires.",
    courseSlugs: ["chocolate", "tequila-mezcal"],
    lessons: [
      "Ep 3 · Food of the Gods (cacao as Maya/Aztec currency and sacrament)",
      "Ep 3 · Conquest and the Great Reversal",
      "Ep 12 · The Sacred Plant (Aztec governance of pulque)",
      "Ep 12 · Burning the Books",
    ],
    coverage: "partial",
    note: "Partial: Mesoamerica (Maya and Aztec) is covered in real depth, through the plants those societies governed. The Incan Empire is not covered, and the standard names it explicitly.",
  },
  {
    frameworkId: "dc-ss",
    code: "WH2.18",
    text: "Evaluate primary source accounts of the Middle Passage to analyze the dehumanizing experience forced upon enslaved people and the ways in which individuals worked to maintain humanity and dignity in the face of mass atrocity.",
    courseSlugs: ["sugar"],
    lessons: [
      "Ep 4 · The Triangular Trade and the Middle Passage",
      "Ep 4 · Whose Voice Tells the Story (Equiano, 1789; Mary Prince, 1831)",
    ],
    coverage: "partial",
    note: "Partial, and the distinction is worth being exact about: the episode teaches the Middle Passage, and it does evaluate primary-source accounts by formerly enslaved writers (Equiano, Prince). But that primary-source work centres plantation labour rather than the crossing itself. The Middle Passage is taught from secondary sources.",
  },
  {
    frameworkId: "dc-ss",
    code: "WH1.15",
    text: "Analyze the role of agricultural, technological and cultural innovations in the emergence and maintenance of early complex societies between 10,000 BCE and 500 BCE.",
    courseSlugs: ["beer", "wine"],
    lessons: [
      "Ep 8 · Liquid Bread and the First Cities (the Code of Hammurabi, c. 1754 BCE, legislates beer)",
      "Ep 9 · Wine, Power, and the Sacred",
    ],
    coverage: "partial",
    note: "Partial: fermentation is used as the way into early complex societies, and it falls inside the standard's window. It is one thread through that period, not a survey of it.",
  },
  {
    frameworkId: "dc-ss",
    code: "US2.79",
    text: "Evaluate the effort of American foreign policy to meet humanitarian goals, further economic interests, and increase domestic security, including the War on Drugs and the invasion of Afghanistan during the Global War on Terror.",
    courseSlugs: ["coca", "opioids", "cannabis"],
    lessons: [
      "Ep 18 · Bolivia's Bet (Bolivia's legal coca model against U.S.-funded eradication)",
      "Ep 18 · The Balloon Effect",
      "Ep 17 · Where the Poppy Grows (Afghanistan and the Golden Crescent)",
      "Ep 16 · The Justice Gap",
    ],
    coverage: "partial",
    note: "Partial: the War on Drugs half is covered in depth, including its foreign-policy arm. The invasion of Afghanistan and the Global War on Terror are not taught — the curriculum reaches Afghanistan through opium geography, not through the war.",
  },
];

// ── Derived helpers (pure — the unit suite exercises these with no DB) ────────

/** Every course slug any standard depends on. The page asks the DB which of these THIS tenant has. */
export function allAlignedCourseSlugs(): string[] {
  return [...new Set(ALIGNMENTS.flatMap((a) => a.courseSlugs))];
}

/** A course as resolved from THIS tenant's catalog (mirrors db/queries/standards.AlignedCourse). */
export interface AlignedCourseLike {
  id: string;
  title: string;
  slug: string;
}

export interface ScopedAlignment extends StandardAlignment {
  /** The subset of this standard's courses that THIS tenant actually publishes. */
  courses: AlignedCourseLike[];
}

export interface ScopedFramework {
  framework: StandardsFramework;
  alignments: ScopedAlignment[];
}

/**
 * Narrow the full alignment table down to what THIS tenant can honestly claim.
 *
 * The tenant boundary: `available` is the set of courses the caller resolved from the DB with
 * a tenant-scoped query. A standard survives only if at least one of its courses is in that
 * set, and it is then rewritten to name ONLY those courses. So a tenant that shares just
 * Season 1 (Learn.WitUS, ElementaryMBA) can never surface a Season 2/3 standard, and never
 * links a course it does not have — the tenant's own catalog decides what it may claim.
 */
export function scopeAlignments(available: Map<string, AlignedCourseLike>): ScopedFramework[] {
  const scoped: ScopedAlignment[] = [];

  for (const a of ALIGNMENTS) {
    const courses = a.courseSlugs
      .map((slug) => available.get(slug))
      .filter((c): c is AlignedCourseLike => c !== undefined);
    if (courses.length === 0) continue;
    scoped.push({ ...a, courses });
  }

  // Keep the declared framework order, and show "full" before "partial" within a framework so a
  // teacher reads the strongest claims first — never the other way round.
  return FRAMEWORKS.map((framework) => ({
    framework,
    alignments: scoped
      .filter((a) => a.frameworkId === framework.id)
      .sort((a, b) => (a.coverage === b.coverage ? 0 : a.coverage === "full" ? -1 : 1)),
  })).filter((g) => g.alignments.length > 0);
}

/** Counts for the page's summary line. Derived, never typed in by hand. */
export function summarizeStandards(groups: ScopedFramework[]): {
  total: number;
  full: number;
  partial: number;
  frameworks: number;
  jurisdictions: number;
} {
  const all = groups.flatMap((g) => g.alignments);
  return {
    total: all.length,
    full: all.filter((a) => a.coverage === "full").length,
    partial: all.filter((a) => a.coverage === "partial").length,
    frameworks: groups.length,
    jurisdictions: new Set(groups.map((g) => g.framework.jurisdiction)).size,
  };
}

/** A plain-text rendering a reporting homeschooler can paste into a filing. */
export function toPlainText(groups: ScopedFramework[], brand: string): string {
  const lines: string[] = [
    `Standards alignment — ${brand}`,
    `Mapped by ${brand} against the published standards as retrieved on ${STANDARDS_FETCHED_ON}.`,
    `Standards are revised; confirm against your jurisdiction's current requirements.`,
    "",
  ];

  for (const { framework, alignments } of groups) {
    lines.push(`${framework.jurisdiction} — ${framework.name} (${framework.version})`);
    lines.push(`Publisher: ${framework.publisher}`);
    lines.push(`Source: ${framework.sourceUrl}`);
    lines.push("");
    for (const a of alignments) {
      lines.push(`  ${a.code} [${a.coverage.toUpperCase()}]`);
      lines.push(`    ${a.text}`);
      lines.push(`    Covered by: ${a.courses.map((c) => c.title).join("; ")}`);
      for (const l of a.lessons) lines.push(`      - ${l}`);
      if (a.note) lines.push(`    Note: ${a.note}`);
      lines.push("");
    }
  }
  return lines.join("\n");
}
