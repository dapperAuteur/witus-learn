// ─────────────────────────────────────────────────────────────────────────────
// INDIANA standards alignment. Read the rule in ./index.ts before editing.
//
// Provenance of every document cited below: www.in.gov refuses connections from our tooling at
// the IP level and media.doe.in.gov returns a Cloudflare 1020 block, so every IDOE document was
// retrieved through the Wayback Machine and transcribed from the archived PDF:
//   · IDOE social-studies index — snapshot 2026-06-01 (confirms which editions are current)
//   · U.S. Government (2023 PDF) — snapshot 2025-12-26
//   · U.S. History (2023 PDF), World History (2023 PDF), Economics (2026 PDF), Geography &
//     History of the World (2023 PDF), ELA 9-10 / 11-12 (2023 PDFs) — fetched 2026-07-13,
//     see the per-framework fetchedOn
//   · Grades K-12 Health & Wellness (2023 PDF) — snapshot 2025-08-30
//   · High School Physical Education (2023 PDF) — snapshot 2023-09-26; the PE index page
//     (snapshot 2026-06-01) still links exactly this document
//
// ⚠️ Two-editions problem, still open (see plans/user-tasks/82): IDOE's index lists BOTH a 2026
// and a 2023 column for every high-school social-studies course. For Economics both editions are
// stable in.gov PDFs and we cite the 2026 one; for U.S. Government the 2026 edition is published
// only as a Google Drive link as of retrieval, so we cite the durable 2023 in.gov PDF and flag
// the newer edition in the framework's adoption note.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionData, StandardAlignment, StandardsFramework } from "./types";

const FRAMEWORKS: StandardsFramework[] = [
  {
    id: "in-econ",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "Social Studies",
    name: "Indiana Academic Standards: Economics",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2026",
    fetchedOn: "2026-07-13",
    sourceUrl: "https://www.in.gov/doe/files/2026-Indiana-Academic-Standards-Economics.pdf",
    adoption:
      "IDOE currently publishes BOTH a 2026 and a 2023 edition of the Economics standards. We cite the 2026 edition because it is the newer of the two — but the text of some standards changed between them (E.1.6 gained “feudal, mercantile”, and Domains 6–8 were renumbered from E.6–E.8 to GE.6–GE.8). Confirm which edition your school year is being held to.",
  },
  {
    id: "in-usg",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "Social Studies",
    name: "Indiana Academic Standards: U.S. Government",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    fetchedOn: "2026-07-15",
    sourceUrl: "https://www.in.gov/doe/files/Indiana-Academic-Standards-U.S.-Government.pdf",
    adoption:
      "The high-school Government course — the framework most of our civics catalog answers to. IDOE's index also lists a 2026 edition, but as retrieved it is published only as a Google Drive link, so we cite the durable 2023 in.gov document. Confirm which edition your school year is being held to.",
  },
  {
    id: "in-ghw",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "Social Studies",
    name: "Indiana Academic Standards: Geography and History of the World",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    fetchedOn: "2026-07-13",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-geography-and-history-of-the-world.pdf",
    adoption:
      "The current edition IDOE links for this high-school course. This is the course the Commodity Map fits most completely.",
  },
  {
    id: "in-wh",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "Social Studies",
    name: "Indiana Academic Standards: World History and Civilization",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    fetchedOn: "2026-07-13",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-world-history-and-civilization.pdf",
    adoption: "The current edition IDOE links for this high-school course.",
  },
  {
    id: "in-ush",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "Social Studies",
    name: "Indiana Academic Standards: U.S. History",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    fetchedOn: "2026-07-13",
    sourceUrl: "https://www.in.gov/doe/files/Indiana-Academic-Standards-U.S.-History.pdf",
    adoption:
      "The current edition IDOE links for this high-school course. The Great Migration and labor-history courses map here; each entry says exactly which era standard it reaches and which halves it does not.",
  },
  {
    id: "in-hw",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "Health & Wellness",
    name: "Indiana Academic Standards: Grades K-12 Health & Wellness",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023 · Grades 9-12 indicators",
    fetchedOn: "2026-07-15",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-grades-k-12-health.pdf",
    adoption:
      "Indiana's Health & Wellness standards align to the National Health Education Standards: eight standards, each with grade-band indicators. The codes cited here are the Grades 9-12 (HS.*) indicators — the level a high-school course answers to.",
  },
  {
    id: "in-pe-hs",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "Physical Education",
    name: "Indiana Academic Standards: High School Physical Education",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    fetchedOn: "2026-07-15",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-high-school-physical-education.pdf",
    adoption:
      "Indiana's high-school PE standards align to the National Standards for K-12 Physical Education: five standards with course-level indicators (HSL1.* for PE I & II, HSL2.* for Elective PE). An online course cannot demonstrate motor performance, so we claim knowledge-side indicators only — each entry says so explicitly.",
  },
  {
    id: "in-ela-910",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "English/Language Arts",
    name: "Indiana Academic Standards: Grades 9-10 English/Language Arts",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    fetchedOn: "2026-07-13",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-grade-9-10-english_language-arts.pdf",
    adoption:
      "Indiana is not a Common Core state — it repealed its adoption in 2014 and writes its own ELA standards. These codes are Indiana's, and do not match Common Core's.",
  },
  {
    id: "in-ela-1112",
    state: "IN",
    jurisdiction: "Indiana",
    subject: "English/Language Arts",
    name: "Indiana Academic Standards: Grades 11-12 English/Language Arts",
    publisher: "Indiana Department of Education (IDOE)",
    version: "2023",
    fetchedOn: "2026-07-13",
    sourceUrl:
      "https://media.doe.in.gov/standards/indiana-academic-standards-grade-11-12-english_language-arts.pdf",
    adoption:
      "Indiana is not a Common Core state — it repealed its adoption in 2014 and writes its own ELA standards. These codes are Indiana's, and do not match Common Core's.",
  },
];

const ALIGNMENTS: StandardAlignment[] = [
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

  // ── Indiana · U.S. Government (2023) ───────────────────────────────────────
  // Fetched 2026-07-15 (Wayback snapshot 2025-12-26 of the 2023 in.gov PDF). Every claim below
  // was checked against actual lesson content in scripts/data/*, not lesson titles.
  {
    frameworkId: "in-usg",
    code: "USG.1.3",
    text: "Interpret and analyze the purposes and functions of government found in the Preamble of the United States Constitution. (E)",
    courseSlugs: ["us-constitution-101"],
    lessons: ["US Constitution 101, Lesson 2 · The Preamble: who, and why"],
    coverage: "full",
    note: "The lesson works the Preamble clause by clause — establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare — as the purposes of the government the rest of the document builds.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.2.1",
    text: "Summarize the colonial, revolutionary, and Founding-era experiences and events that led to the writing, ratification, and implementation of the United States Constitution (1787) and Bill of Rights (1791).",
    courseSlugs: ["us-constitution-101"],
    lessons: [
      "US Constitution 101, Lesson 1 · Why a constitution? From the Articles of Confederation",
      "US Constitution 101, Lesson 8 · The Bill of Rights (Amendments I to X)",
    ],
    coverage: "partial",
    note: "Partial: the Founding-era half is covered — why the Articles of Confederation failed and how that led to the 1787 Constitution and the Bill of Rights. The colonial and revolutionary experiences before that are not taught.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.2.3",
    text: "Analyze and interpret central ideas on government, individual rights, and the common good in founding documents of the United States. (E)",
    courseSlugs: ["us-constitution-101", "know-your-rights"],
    lessons: [
      "US Constitution 101, Lessons 2-9 · the Constitution analyzed article by article",
      "The Bill of Rights: Know Your Rights, Lesson 1 · What is the Bill of Rights?",
    ],
    coverage: "partial",
    note: "Partial: the Constitution and the Bill of Rights — two founding documents — are analyzed clause by clause for ideas on government, rights, and the common good. The Declaration of Independence and other founding-era documents are not treated in depth.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.3.2",
    text: "Explain the constitutional principles of federalism, separation of powers, the system of checks and balances, and republican government. Provide examples of these principles in the governments of the United States and Indiana. (E)",
    courseSlugs: ["us-constitution-101", "state-vs-federal", "state-civics-in", "us-civics-101"],
    lessons: [
      "US Constitution 101, Lesson 6 · Separation of powers and checks & balances",
      "US Constitution 101, Lesson 7 · Federalism: state and federal power",
      "State vs Federal Power, Lesson 1 · What is federalism, and why split power at all?",
      "Indiana Civics, Lesson 2 · The three branches, and Indiana's deliberately weak governor",
    ],
    coverage: "partial",
    note: "Partial: three of the four named principles — federalism, separation of powers, checks and balances — are taught thoroughly, with examples in both the United States government and Indiana's. “Republican government” is not taught as a named principle.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.3.4",
    text: "Explain the relationships among branches of the United States government and Indiana government, which involve separation and sharing of powers as a means to limited government. (E)",
    courseSlugs: ["us-civics-101", "us-constitution-101", "state-civics-in"],
    lessons: [
      "US Civics 101, Lesson 1 · Purpose of government and the three branches",
      "US Constitution 101, Lessons 3-6 · Articles I-III and checks & balances",
      "Indiana Civics, Lesson 2 · The three branches, and Indiana's deliberately weak governor",
    ],
    coverage: "full",
    note: "Both halves are covered: the federal branches and their checks on each other, and Indiana's own three branches — including how Indiana's constitution deliberately weakens its governor relative to its General Assembly.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.3.5",
    text: "Explain how a bill becomes law in the legislative process of the United States and the state of Indiana. (E)",
    courseSlugs: ["how-a-bill-becomes-law", "state-civics-in", "us-civics-101"],
    lessons: [
      "How a Bill Becomes Law (Federal) · the whole course, introduction to public law",
      "Indiana Civics, Lesson 4 · How a bill becomes an Indiana law",
      "US Civics 101, Lesson 3 · How a bill becomes a law",
    ],
    coverage: "full",
    note: "Both legislatures the standard names are covered: the federal process gets an entire course (committees, the Rules Committee, the filibuster, presentment, veto override), and the Indiana General Assembly's process gets its own lesson.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.3.6",
    text: "Describe the procedures for amending the United States and Indiana Constitutions, and analyze why it is so difficult to amend these Constitutions.",
    courseSlugs: ["us-constitution-101", "state-civics-in"],
    lessons: [
      "US Constitution 101, Lesson 9 · Changing the Constitution: Article V and key later amendments",
      "Indiana Civics, Lesson 1 · Indiana's constitution: the 1851 rulebook",
      "Indiana Civics, Lesson 6 · Elections in Indiana (no statewide citizen initiative)",
    ],
    coverage: "partial",
    note: "Partial: Article V is taught in full, including why the federal bar is so high. On the Indiana side the course teaches who may propose amendments (only the General Assembly — Indiana has no citizen initiative) but not the full two-session-plus-ratification procedure.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.3.7",
    text: "Analyze the functions of the judicial branch of the United States and Indiana governments with emphasis on the principles of due process, judicial review, and an independent judiciary. (E)",
    courseSlugs: ["supreme-court-judicial-branch", "us-civics-101", "state-civics-in"],
    lessons: [
      "The Supreme Court & the Judicial Branch, Lesson 1 · The federal judiciary: from district courts to the Supreme Court",
      "The Supreme Court & the Judicial Branch, Lesson 7 · Checks on the Court",
      "US Civics 101, Lesson 4 · The courts and judicial review (Marbury v. Madison)",
      "Indiana Civics, Lesson 3 · Indiana's courts: merit selection + retention",
    ],
    coverage: "partial",
    note: "Partial: judicial review (Marbury, taught by name) and judicial independence (life tenure federally; Indiana's merit-selection-plus-retention design) are covered well, for both court systems. Due process is named but not taught in depth — a teacher must cover it elsewhere.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.3.8",
    text: "Explain the electoral process in terms of election laws and election systems on the national, state, and local level. (E)",
    courseSlugs: ["voting-elections-101", "state-civics-in"],
    lessons: [
      "Voting & Elections 101, Lessons 1-3 · registration, primaries and caucuses, how you vote",
      "Voting & Elections 101, Lesson 7 · Counting, canvassing, and certifying the vote",
      "Voting & Elections 101, Lesson 8 · Verify your own registration and rules",
      "Indiana Civics, Lesson 6 · Elections in Indiana: strict photo ID, excuse-required mail voting",
    ],
    coverage: "full",
    note: "National election law and systems get a full course; Indiana's specifics (photo ID and Crawford v. Marion County, excuse-required absentee voting) get their own lesson. Local variation is handled the honest way — the course teaches students to verify their own county's rules.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.3.11",
    text: "Explain and evaluate the original purpose and role of the Electoral College and its relevance today. (E)",
    courseSlugs: ["voting-elections-101"],
    lessons: [
      "Voting & Elections 101, Lesson 4 · The Electoral College: how it works",
      "Voting & Elections 101, Lesson 5 · Why the Electoral College exists",
    ],
    coverage: "full",
    note: "Both halves of the standard, by design: one lesson on mechanics (538 electors, 270 to win, winner-take-all, faithless electors), one on the original purpose and the modern debate over its relevance.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.3.12",
    text: "Explain the organization of state and local governments in Indiana and analyze how they affect the lives of citizens.",
    courseSlugs: ["state-civics-in", "us-state-local-government"],
    lessons: [
      "Indiana Civics, Lesson 5 · Local government in Indiana: 92 counties and 1,000+ townships",
      "Indiana Civics, Lesson 8 · Get involved where you live in Indiana",
      "US, State & Local Government, Lesson 5 · What LOCAL government handles (and why it VARIES)",
      "US, State & Local Government, Lesson 7 · The governments you forget: special districts & boards",
    ],
    coverage: "full",
    note: "Indiana's structure is taught as Indiana's — its 1851 constitution, 92 counties, township government — not as a generic template, and both courses connect each layer to what it does to a resident's daily life.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.5.1",
    text: "Define the legal meaning of citizenship in the United States, identify the requirements for citizenship in the United States and residency in Indiana, and differentiate between the criteria used for attaining both. (E)",
    courseSlugs: ["citizenship-naturalization"],
    lessons: [
      "Citizenship & Naturalization Basics, Lesson 1 · Who is a U.S. citizen? Birthright and the 14th Amendment",
      "Citizenship & Naturalization Basics, Lesson 3 · Becoming a citizen: naturalization eligibility",
    ],
    coverage: "partial",
    note: "Partial: the U.S.-citizenship half is thorough — the 14th Amendment, jus soli, citizenship through parents, and naturalization requirements step by step. Indiana's residency criteria, which the standard also names, are not taught.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.5.2",
    text: "Analyze the roles and responsibilities of citizens in Indiana and the United States.",
    courseSlugs: [
      "citizenship-naturalization",
      "jury-duty-courts",
      "voting-elections-101",
      "state-civics-in",
    ],
    lessons: [
      "Citizenship & Naturalization Basics, Lesson 7 · Rights and responsibilities of citizenship",
      "Jury Duty & the Courts · the whole course (the citizen's side of the court system)",
      "Voting & Elections 101, Lesson 1 · Registering to vote",
      "Indiana Civics, Lesson 8 · Get involved where you live in Indiana",
    ],
    coverage: "full",
    note: "The responsibilities are taught as practices, not a list: voting, jury service (an entire course), and civic participation — with an Indiana-specific lesson on where to show up.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.5.3",
    text: "Identify and describe the civil and constitutional rights found in the United States Constitution and Bill of Rights, describe how they are expanded by decisions of the United States Supreme Court. Analyze and evaluate landmark cases of the Supreme Court concerning civil rights and liberties of individuals. (E)",
    courseSlugs: ["know-your-rights", "supreme-court-judicial-branch"],
    lessons: [
      "Know Your Rights, Lessons 2-5 · speech, religion, press, assembly — including at school and online",
      "Know Your Rights, Lessons 6-8 · the 4th Amendment: searches, stops, and your digital life",
      "The Supreme Court & the Judicial Branch, Lesson 5 · Writing the opinion: majority, concurrence, dissent, and precedent",
    ],
    coverage: "full",
    note: "The landmark-case work is real, not name-dropping: Tinker, Brandenburg, Mapp, Terry, New Jersey v. T.L.O., Riley, and Carpenter are each taught as a rule a student can apply, and the companion course explains how precedent expands rights over time.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.5.4",
    text: "Identify when it is constitutional for our government to limit the rights of individuals and explain the reasons why the government would want to do this. (E)",
    courseSlugs: ["know-your-rights"],
    lessons: [
      "Know Your Rights, Lesson 2 · Freedom of speech: what's protected, and what isn't",
      "Know Your Rights, Lesson 5 · Speech and religion at school, and online",
      "Know Your Rights, Lesson 7 · Police stops, reasonable suspicion, and your privacy",
    ],
    coverage: "full",
    note: "The limits are the course's method: time-place-and-manner rules, incitement (imminent lawless action), the school-speech cases, and the reasonable-suspicion standard — each with the government's reason for the limit.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.5.5",
    text: "Explain and give examples of important citizen actions that can impact local, state, and federal government as individuals and members of interest groups.",
    courseSlugs: [
      "help-a-campaign",
      "us-state-local-government",
      "how-a-bill-becomes-law",
      "state-civics-in",
    ],
    lessons: [
      "How to Help a Campaign · the whole course (volunteering, donating, canvassing — with the legal guardrails)",
      "US, State & Local Government, Lesson 8 · Where to show up and be heard, at every level",
      "How a Bill Becomes Law, Lesson 8 · Tracking a bill and making your voice heard",
      "Indiana Civics, Lesson 8 · Get involved where you live in Indiana",
    ],
    coverage: "full",
  },
  {
    frameworkId: "in-usg",
    code: "USG.5.6",
    text: "Explain how citizens in the United States participate in public elections as voters and supporters of candidates for public office. (E)",
    courseSlugs: ["voting-elections-101", "help-a-campaign"],
    lessons: [
      "Voting & Elections 101 · the whole course (the voter's side)",
      "How to Help a Campaign · the whole course (the supporter's side)",
    ],
    coverage: "full",
    note: "The two halves of the standard are two courses: one on participating as a voter, one on supporting candidates — including the campaign-finance and coordination rules a volunteer must know.",
  },
  {
    frameworkId: "in-usg",
    code: "USG.5.7",
    text: "Describe opportunities available to individuals to contribute to the well-being of their communities and participate responsibly in the political process at local, state, and national levels of government.",
    courseSlugs: ["how-to-run-for-office", "help-a-campaign", "us-state-local-government"],
    lessons: [
      "How to Run for Office · the whole course (eligibility, ballot access, money rules, and after Election Day)",
      "How to Help a Campaign, Lesson 10 · Helping ballot measures and local causes",
      "US, State & Local Government, Lesson 8 · Where to show up and be heard, at every level",
    ],
    coverage: "full",
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
  {
    frameworkId: "in-wh",
    code: "WH.6.6",
    text: "Explain the causes and consequences of the Cold War, and describe the role it played in ethnic or nationalistic conflicts in various parts of the world.",
    courseSlugs: ["labor-poland"],
    lessons: [
      "Poland: Solidarność, Lesson 3 · A workers' state with a worker problem",
      "Poland: Solidarność, Lesson 7 · 13 December 1981: the state answers (martial law)",
      "Poland: Solidarność, Lesson 8 · 1989: a union negotiates a state out of existence",
    ],
    coverage: "partial",
    note: "Partial: the Cold War's END in Eastern Europe is worked in real depth through one country — Solidarność, martial law, and the 1989 Round Table that negotiated communism out of power in Poland. The Cold War's causes and its global course are not taught.",
  },
  {
    frameworkId: "in-wh",
    code: "WH.6.10",
    text: "Describe and analyze the global expansion of democracy and globalization in the late 20th century.",
    courseSlugs: ["labor-poland", "labor-mexico"],
    lessons: [
      "Poland: Solidarność, Lesson 8 · 1989: a union negotiates a state out of existence",
      "Poland: Solidarność, Lesson 9 · What winning cost: shock therapy",
      "Mexico, Lesson 7 · Mexico rewrites its labor law — and the 68-year gap that explains why",
      "Mexico, Lesson 10 · The Rapid Response Mechanism: an international labor rule with teeth",
    ],
    coverage: "partial",
    note: "Partial: two case studies, worked deeply — democratization (Poland's 1989 transition and its economic price) and globalization (NAFTA→USMCA and what a trade deal did to Mexican and U.S. labor law). It is case-study depth, not a global survey.",
  },

  // ── Indiana · U.S. History (2023) ──────────────────────────────────────────
  {
    frameworkId: "in-ush",
    code: "USH.2.4",
    text: "Summarize the impact industrialization and immigration had on social movements of the era, including the contributions of specific individuals and groups.",
    courseSlugs: ["history-of-unions"],
    lessons: [
      "The History of Unions, Lesson 4 · Two ideas about who a union is for: the Knights and the AFL",
      "The History of Unions, Lesson 5 · Haymarket, 1886",
      "The History of Unions, Lesson 6 · Homestead, Pullman, and the weapon that actually broke strikes",
    ],
    coverage: "partial",
    note: "Partial: ONE social movement of the era — the labor movement — is taught thoroughly, with the specific individuals and groups the standard asks for (the Knights of Labor, the AFL, Debs and Pullman). Other movements of the era (populism, temperance) are not taught.",
  },
  {
    frameworkId: "in-ush",
    code: "USH.2.5",
    text: "Analyze the development of “separate but equal” policies culminating in the Plessy v. Ferguson (1896) case. Explain the historical significance of the denial of African American rights in the South and the effects of these policies in future years. (E)",
    courseSlugs: ["great-migration"],
    lessons: [
      "The Great Migration, Lesson 2 · The Jim Crow South: what people were fleeing",
      "The Great Migration, Lesson 12 · The long shadow — and the return",
    ],
    coverage: "partial",
    note: "Partial: the standard's second sentence — the denial of African American rights in the South and its effects in future years — is the course's core, taught for twelve lessons. The first sentence's case-law development culminating in Plessy is referenced, not analyzed case by case.",
  },
  {
    frameworkId: "in-ush",
    code: "USH.3.4",
    text: "Explain the importance of social and cultural movements within the Progressive Era, including significant individuals/groups such as Booker T. Washington, Ida B. Wells, W.E.B. DuBois, NAACP, muckrakers, and Upton Sinclair, and including movements such as the Harlem Renaissance, Women's Suffrage, labor movements, and socialist movement. (E)",
    courseSlugs: ["great-migration", "history-of-unions"],
    lessons: [
      "The Great Migration, Lesson 6 · The Black press as engine: the Chicago Defender",
      "The Great Migration, Lesson 7 · The Harlem Renaissance & the New Negro",
      "The History of Unions, Lesson 8 · The Triangle fire, 1911 — and what it actually changed",
      "The History of Unions, Lesson 6 · Homestead, Pullman (Eugene Debs and the socialist movement)",
    ],
    coverage: "partial",
    note: "Partial: of the movements the standard names, the Harlem Renaissance, the labor movement, and the socialist movement (through Debs) are taught in depth, and the NAACP appears in context. Women's Suffrage and the named individuals Washington, Wells, and DuBois are not taught — do not present this as covering USH.3.4 whole.",
  },
  {
    frameworkId: "in-ush",
    code: "USH.3.6",
    text: "Describe the experiences of migrants from Europe, Asia, and the southern United States as they encountered and interacted with their new communities.",
    courseSlugs: ["great-migration"],
    lessons: [
      "The Great Migration, Lesson 4 · Routes and railroads: the three streams",
      "The Great Migration, Lesson 5 · Arrival: Chicago, Detroit, New York, and the Pacific Northwest",
      "The Great Migration, Lesson 9 · Faith, family & mutual aid",
    ],
    coverage: "partial",
    note: "Partial: the southern-United-States third of the standard is the entire course — six million migrants, their routes, and what arrival actually looked like, city by city. The experiences of European and Asian migrants are not taught.",
  },
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
  {
    frameworkId: "in-ush",
    code: "USH.4.7",
    text: "Explain the long-term effects of the Second New Deal, including its effects on agriculture, labor, social welfare, and banking. (E)",
    courseSlugs: ["history-of-unions"],
    lessons: [
      "The History of Unions, Lesson 9 · 1935: the year organizing became a right (the Wagner Act)",
      "The History of Unions, Lesson 10 · The hole in the law: who the Wagner Act left out",
    ],
    coverage: "partial",
    note: "Partial: the LABOR effect — the Wagner Act, what it created, and precisely who it excluded — is taught in depth, including its long-term consequences. The standard's other three areas (agriculture, social welfare, banking) are not taught.",
  },
  {
    frameworkId: "in-ush",
    code: "USH.7.1",
    text: "Explain the efforts of groups of African Americans, Native Americans, Hispanic Americans, and women to assert their social and civic rights in the years following World War II. (E)",
    courseSlugs: ["great-migration", "history-of-unions"],
    lessons: [
      "The Great Migration, Lesson 11 · Politics & civil rights",
      "The History of Unions, Lesson 16 · The colour bar: unions' own history of exclusion",
      "The History of Unions, Lesson 17 · Randolph to Memphis: the labor half of the civil-rights movement",
    ],
    coverage: "partial",
    note: "Partial: African American civil-rights organizing is covered from an angle most curricula skip — the Black urban vote the Migration created, and A. Philip Randolph through the 1968 Memphis sanitation strike. The standard also names Native Americans, Hispanic Americans, and women, none of whom are covered here.",
  },
  {
    frameworkId: "in-ush",
    code: "USH.8.5",
    text: "Analyze the impact of globalization on U.S. culture and U.S. economic, political, and foreign policy, including the North American Free Trade Agreement (NAFTA).",
    courseSlugs: ["labor-mexico"],
    lessons: [
      "Mexico, Lesson 7 · Mexico rewrites its labor law — and the 68-year gap that explains why",
      "Mexico, Lesson 10 · The Rapid Response Mechanism: an international labor rule with teeth",
      "Mexico, Lesson 12 · The limits, honestly: the cases the United States lost",
    ],
    coverage: "partial",
    note: "Partial: the NAFTA→USMCA thread is worked in depth from the labor side — what the trade deal did to wages and organizing on both sides of the border, and how the USMCA's Rapid Response Mechanism changed U.S. trade policy. Globalization's broader effects on U.S. culture and foreign policy are not taught.",
  },
  {
    frameworkId: "in-ush",
    code: "USH.9.1",
    text: "Explain the origins of legislation which began to unravel the work of the New Deal and the Great Society, including reforms in the areas of welfare, public housing, Social Security, and labor. (E)",
    courseSlugs: ["history-of-unions"],
    lessons: [
      "The History of Unions, Lesson 13 · Taft-Hartley, 1947: what the law took back",
      "The History of Unions, Lesson 14 · PATCO, 1981 — and reading the decline honestly",
    ],
    coverage: "partial",
    note: "Partial: the LABOR area only — Taft-Hartley as the direct rollback of the Wagner Act, and PATCO as the turning point in enforcement. Welfare, public housing, and Social Security reform are not taught.",
  },
  {
    frameworkId: "in-ush",
    code: "USH.10.2",
    text: "Locate and analyze primary sources and secondary sources related to an event or issue of the past; discover possible limitations in various kinds of historical evidence and differing secondary opinions.",
    courseSlugs: ["great-migration"],
    lessons: [
      "The Great Migration · every lesson carries a primary-source pointer to its real archive",
      "The Great Migration, Lesson 5 · Arrival (the Philadelphia “500% growth” claim, checked against the raw census figures it fails)",
    ],
    coverage: "partial",
    note: "Partial: sources are pointed to their actual archives (National Archives, Census Bureau, the Schomburg Center) rather than quoted from memory, and the course turns a widely repeated but unsupported statistic into an explicit limitations-of-evidence lesson. Sustained student-run source analysis is prompted by activities but not assessed.",
  },

  // ── Indiana · Health & Wellness (2023, Grades 9-12 indicators) ─────────────
  {
    frameworkId: "in-hw",
    code: "HS.1.1",
    text: "Predict how behaviors can impact personal health.",
    courseSlugs: ["dental-health-101", "read-your-bodys-data"],
    lessons: [
      "Dental Health 101, Lessons 2-5 · brushing, flossing, fluoride, and diet — each tied to its measured effect",
      "Read Your Body's Data · the whole course: behaviors read against your own resting heart rate, steps, sleep, and activity",
    ],
    coverage: "partial",
    note: "Partial: the behavior-to-health link is taught rigorously in two domains — oral health (with the evidence graded honestly) and tracker-measured lifestyle metrics. This is not a comprehensive health course; other behavior domains (substance use, sexual health, safety) are not taught.",
  },
  {
    frameworkId: "in-hw",
    code: "HS.1.5",
    text: "Analyze the relationship between access to health care and personal health.",
    courseSlugs: ["dental-health-101"],
    lessons: [
      "Dental Health 101, Lesson 6 · Regular dental visits: what a checkup actually catches",
      "Dental Health 101, Lessons 7-9 · the mouth-body connection: gum disease, diabetes, and heart disease",
    ],
    coverage: "partial",
    note: "Partial: one kind of care access — regular dental care — analyzed properly, including what early detection catches and what the systemic-health evidence does and does not show. Health-care access in general is not taught.",
  },
  {
    frameworkId: "in-hw",
    code: "HS.3.1",
    text: "Evaluate the validity of health information, products and services.",
    courseSlugs: ["dental-health-101", "spotting-misleading-marketing"],
    lessons: [
      "Dental Health 101, Lesson 3 · Flossing and interdental cleaning: what the evidence actually shows",
      "Dental Health 101, Lesson 10 · Common dental myths, debunked",
      "Spotting Misleading Marketing, Lesson 7 · Health, supplements, and “structure/function” claims",
      "Spotting Misleading Marketing, Lesson 10 · How to verify a claim (and follow the money)",
    ],
    coverage: "full",
    note: "The skill is taught explicitly on both fronts the standard names: information (evidence hierarchies, systematic reviews and Cochrane, read against popular myths) and products/services (how health and supplement marketing dodges the legal line, and how to verify a claim yourself).",
  },
  {
    frameworkId: "in-hw",
    code: "HS.6.2",
    text: "Develop a personal health goal and a plan to achieve it.",
    courseSlugs: ["read-your-bodys-data", "woop-science-of-doing-it"],
    lessons: [
      "Read Your Body's Data · The Capstone: My Health Blueprint (a 90-day plan built from five weeks of your own data)",
      "WOOP, Lesson 16 · The four steps: wish, outcome, obstacle, plan",
      "WOOP, Lesson 17 · Your turn: run it, now, on the goal you wrote down in Lesson 1",
    ],
    coverage: "full",
    note: "Both courses have the learner actually do this, not read about it: one builds a data-grounded 90-day health blueprint as its capstone; the other walks the learner through setting the goal and writing the plan with the best-evidenced method available (mental contrasting with implementation intentions).",
  },
  {
    frameworkId: "in-hw",
    code: "HS.6.3",
    text: "Analyze and develop strategies to overcome barriers to achieving the personal health goal.",
    courseSlugs: ["woop-science-of-doing-it"],
    lessons: [
      "WOOP, Lesson 7 · The obstacle is inside you (this is where most people fail)",
      "WOOP, Lesson 13 · How to write an if-then that actually fires",
      "WOOP, Lesson 18 · The six ways people run it wrong",
    ],
    coverage: "full",
    note: "Overcoming obstacles is not a unit of this course — it is the course: mental contrasting surfaces the barrier, and implementation intentions (if-then plans) are the strategy, taught with the trial evidence (including the health-behavior trials) and its honest effect size.",
  },
  {
    frameworkId: "in-hw",
    code: "HS.6.4",
    text: "Implement and analyze the plan and adjust it, as needed, to achieve the personal health goal.",
    courseSlugs: ["read-your-bodys-data"],
    lessons: [
      "Read Your Body's Data · What an N-of-1 Experiment Is / Designing Your N-of-1",
      "Read Your Body's Data · Analyzing Results and Iterating",
      "Read Your Body's Data · Your System Architecture: Triggers, Logging, Review",
    ],
    coverage: "full",
    note: "The course's method is exactly this cycle: implement (log daily), analyze (baselines, moving averages, signal vs noise), and adjust (iterate the N-of-1 experiment) — run on the learner's own data.",
  },

  // ── Indiana · High School Physical Education (2023) ─────────────────────────
  {
    frameworkId: "in-pe-hs",
    code: "HSL1.2.1.A",
    text: "The physically literate individual applies knowledge of concepts, principles, strategies, terminology, and tactics related to movement and performance.",
    courseSlugs: [
      "golf-play-know-work",
      "tennis",
      "football",
      "pickleball",
      "lacrosse-creators-game",
      "croquet",
    ],
    lessons: [
      "Golf, Lessons 16-21 · course management, reading the shot, the World Handicap System",
      "Tennis, Lessons 13-17 · the first four shots, Serve +1, court geometry",
      "Football, Lessons 15-18 · formations, pressing, and watching a match like an analyst",
      "Pickleball, Lessons 11-14 · geometry, the third shot, dinking",
      "Lacrosse, Lessons 11-15 · the five fundamentals, offense, defense, transition",
      "Croquet, Lessons 14-15 · the four-ball break and the leave",
    ],
    coverage: "partial",
    note: "Partial, and read this before you rely on it: these courses teach the KNOWLEDGE half of this indicator — concepts, principles, strategies, terminology, and tactics — in genuine depth, sport by sport. The applying-in-performance half happens on a course, court, or pitch, which an online course cannot observe or assess. We claim no PE Standard 1 (motor competency) indicator at all.",
  },
  {
    frameworkId: "in-pe-hs",
    code: "HSL2.3.1.A",
    text: "Applies technology (such as wearable devices, mobile device apps, and/or social media tools) to support physical activity and lifetime fitness habits.",
    courseSlugs: ["read-your-bodys-data"],
    lessons: [
      "Read Your Body's Data · Pick Your Device and Where to Log It",
      "Read Your Body's Data · Setting Up Your Device and a Baseline Protocol",
      "Read Your Body's Data · Intensity Minutes: The Strongest Longevity Metric",
    ],
    coverage: "full",
    note: "This Elective PE indicator is the course's literal premise: the learner uses a wearable (or just a phone) plus a daily log, every day for five weeks, to read and support their own activity habits.",
  },
  {
    frameworkId: "in-pe-hs",
    code: "HSL1.3.5.A",
    text: "Designs and implements a personal fitness and nutrition plan (assessment scores, goals for improvement, plan of activities for improvement, log of activities to reach goals, timeline for improvement).",
    courseSlugs: ["read-your-bodys-data"],
    lessons: [
      "Read Your Body's Data · Designing Your N-of-1",
      "Read Your Body's Data · The Capstone: My Health Blueprint (assessment, goals, activities, log, 90-day timeline)",
    ],
    coverage: "partial",
    note: "Partial: the FITNESS plan is real and complete — baseline assessment, goals, an activity plan, a daily log, and a 90-day timeline, all from the learner's own data. The NUTRITION half of the indicator is not taught.",
  },

  // ── Indiana · ELA Grades 9-10 (2023) ───────────────────────────────────────
  {
    frameworkId: "in-ela-910",
    code: "9-10.CC.8",
    text: "Analyze bias in media through the inclusion or exclusion of information and reliability of the source from visual and verbal messages to achieve a desired result.",
    courseSlugs: [
      "coffee",
      "tea",
      "chocolate",
      "sugar",
      "rum",
      "tobacco",
      "spotting-misleading-marketing",
    ],
    lessons: [
      "Ep 1 · Reading a Coffee Ad",
      "Ep 2 · Reading a Tea Ad",
      "Ep 3 · Reading a Chocolate Ad",
      "Ep 4 · Whose Voice Tells the Story (reading a text for what it leaves out)",
      "Ep 11 · Tiki and the Tropical Paradise",
      "Ep 15 · The Language of Doubt",
      "Spotting Misleading Marketing, Lesson 3 · Weasel words and what the fine print takes back",
      "Spotting Misleading Marketing, Lesson 5 · Fake reviews, astroturfing, and undisclosed #ads",
    ],
    coverage: "full",
    note: "“Inclusion or exclusion of information” is taught by name: Ep 4 teaches reading for absence, using Jane Austen's silence about where the Mansfield Park sugar money comes from, and the marketing course teaches omission, disclosure, and source reliability as everyday consumer skills.",
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
    courseSlugs: [
      "coffee",
      "chocolate",
      "beer",
      "tobacco",
      "cannabis",
      "coca",
      "spotting-misleading-marketing",
    ],
    lessons: [
      "Ep 1 · Reading a Coffee Ad",
      "Ep 3 · Reading a Chocolate Ad",
      "Ep 8 · Reading a Craft Beer Label",
      "Ep 15 · Torches of Freedom",
      "Ep 16 · Reefer Madness and the Language of Fear",
      "Ep 18 · Just Say No",
      "Spotting Misleading Marketing, Lesson 8 · Misleading statistics and charts",
      "Spotting Misleading Marketing, Lesson 4 · Fake urgency, fake scarcity, and fake discounts",
    ],
    coverage: "full",
    note: "A media-literacy lesson recurs in every single episode of the BVC series, and the marketing course adds the consumer-protection half: named persuasion tactics, cherry-picked statistics, and truncated charts.",
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
];

export const INDIANA: JurisdictionData = {
  state: "IN",
  frameworks: FRAMEWORKS,
  alignments: ALIGNMENTS,
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
