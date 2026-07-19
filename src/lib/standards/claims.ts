// ─────────────────────────────────────────────────────────────────────────────
// COURSE CLAIMS — the course-side half of the standards map, analyzed ONCE.
//
// Each entry states one thing the catalog genuinely teaches, with the lessons as evidence.
// Jurisdiction files (data/<state>.ts) map their codes onto these ids; they never restate
// course evidence. That is what makes state #3 through #51 cheap: mapping Arizona is reading
// ARIZONA'S documents, not re-reading the catalog.
//
// Rules (same spirit as index.ts):
//   · A claim was verified against ACTUAL lesson content (content/bvc/*.csv and
//     scripts/data/*-course.ts), not lesson titles. A title is not evidence.
//   · Course slugs must match their seed registration exactly (the test suite guards this).
//   · Keep claims small and specific. A state standard that is only partly backed should say
//     so in ITS coverage/note — never widen a claim to make a standard look fuller.
// ─────────────────────────────────────────────────────────────────────────────

import type { CourseClaim } from "./types";

export const COURSE_CLAIMS: CourseClaim[] = [
  // ══ BVC Commodity Map curriculum ════════════════════════════════════════════
  {
    id: "bvc.value-chain-earnings",
    claim: "Traces who is paid what along commodity value chains, and names the smile-curve pattern.",
    courseSlugs: ["coffee", "tea", "chocolate", "tequila-mezcal", "the-toast", "full-spectrum"],
    lessons: [
      "Ep 1 · Follow the Money: Bean to Cup",
      "Ep 2 · Who Gets Paid, Tea and Coffee Compared",
      "Ep 3 · The Commodity Trap",
      "Ep 12 · The Jimador's Share",
      "Ep 14 · Pattern 3: Labor Captures the Smallest Share (the smile curve)",
      "Ep 21 · The Smile Curve, Confirmed",
    ],
  },
  {
    id: "bvc.sugar-program-trade-barriers",
    claim: "Works the U.S. sugar program: import quotas, price supports, tariffs, and their cost.",
    courseSlugs: ["sugar"],
    lessons: ["Ep 4 · The Hidden Costs of Cheap Sugar"],
  },
  {
    id: "bvc.traditional-vs-market-economies",
    claim: "Contrasts traditional (reciprocity) and market economies directly and at length.",
    courseSlugs: ["forest-wisdom", "kava", "synthesis"],
    lessons: [
      "Ep 5 · The Reciprocity Economy",
      "Ep 6 · Ceremony Meets the Market",
      "Ep 7 · Two Ways of Doing Economics",
    ],
  },
  {
    id: "bvc.price-elasticity-demand",
    claim: "Teaches price elasticity of demand explicitly (inelastic coffee demand under a price spike).",
    courseSlugs: ["coffee", "sugar"],
    lessons: [
      "Ep 1 · Price Shocks and Why You Keep Buying",
      "Ep 4 · From Luxury to the Cheapest Calorie",
    ],
  },
  {
    id: "bvc.growing-belts-resource-maps",
    claim: "Maps where commodities grow and why, and how that distribution drives trade.",
    courseSlugs: ["coffee", "tea", "chocolate", "sugar", "forest-wisdom", "kava"],
    lessons: [
      "The Commodity Map itself — every episode pinned at its origin",
      "The Growing Belts map — production regions by latitude band and country",
      "Ep 1 · The Coffee Belt: Where Coffee Grows and Why",
      "Ep 3 · The Cacao Tree and the Narrowest Belt",
      "Ep 6 · Why Volcanic Soil Only",
    ],
  },
  {
    id: "bvc.agricultural-hearths",
    claim: "Teaches agricultural hearths and the exchange of crops among regions.",
    courseSlugs: ["coffee", "tea", "chocolate", "sugar"],
    lessons: [
      "Ep 1 · The Coffee Belt: Where Coffee Grows and Why",
      "Ep 2 · The Tea Plant and Its Climate Zones",
      "Ep 3 · The Big Producers and the Cacao Varieties",
      "Ep 4 · From New Guinea to the New World",
    ],
  },
  {
    id: "bvc.climate-change-forecasts",
    claim: "Analyzes published climate-change forecasts and their implications for growers.",
    courseSlugs: ["coffee", "chocolate", "kava", "beer"],
    lessons: [
      "Ep 1 · Climate Change Is Redrawing the Map",
      "Ep 3 · A Two-Degree Threat",
      "Ep 6 · Islands Under Pressure",
      "Ep 8 · Beer Geography Is Shifting",
    ],
  },
  {
    id: "bvc.colonialism-persists-today",
    claim: "Shows how colonialism and imperialism persist and evolve in the present.",
    courseSlugs: ["chocolate", "forest-wisdom", "synthesis", "rum"],
    lessons: [
      "Ep 3 · Conquest and the Great Reversal",
      "Ep 5 · How Coca-Cola Got Its Name (biopiracy)",
      "Ep 7 · The Same Story, Six Times",
      "Ep 11 · The Debt of Freedom (the 1825 French indemnity and Haiti's modern poverty)",
    ],
  },
  {
    id: "bvc.scott-county-epidemic",
    claim: "Works one epidemic in depth: the 2015 Scott County, Indiana HIV outbreak and harm reduction.",
    courseSlugs: ["opioids"],
    lessons: ["Ep 17 · The Scott County Lesson", "Ep 17 · Treatment Versus Punishment"],
  },
  {
    id: "bvc.coffee-project-mapping",
    claim: "Has the student prepare maps and data tables (the Coffee episode's graded project).",
    courseSlugs: ["coffee"],
    lessons: [
      "Ep 1 · Assignment, Option A — map the supply chain of 3 items from your morning routine",
      "Ep 1 · Assignment, Option B — Coffee Belt climate report, with maps and data tables",
    ],
  },
  {
    id: "bvc.commodity-trap",
    claim: "Explains the economic processes keeping commodity producers poor while value accrues downstream.",
    courseSlugs: ["chocolate", "synthesis", "full-spectrum"],
    lessons: [
      "Ep 3 · The Commodity Trap",
      "Ep 7 · Who Captures the Value",
      "Ep 21 · The Smile Curve, Confirmed",
    ],
  },
  {
    id: "bvc.conquest-columbian-exchange",
    claim: "Teaches the consequences of conquest and colonization: the transatlantic slave trade, the Columbian Exchange, effects on native populations.",
    courseSlugs: ["chocolate", "sugar", "rum", "tequila-mezcal", "tobacco"],
    lessons: [
      "Ep 3 · Conquest and the Great Reversal",
      "Ep 4 · The Triangular Trade and the Middle Passage",
      "Ep 11 · The Triangular Trade",
      "Ep 12 · Burning the Books (the destruction of the Mesoamerican codices)",
      "Ep 15 · From Sacred to Commodity",
    ],
  },
  {
    id: "bvc.imperialism-africa-asia-oceania",
    claim: "Analyzes European imperialism upon indigenous peoples in Africa, Asia, and Oceania.",
    courseSlugs: ["tea", "forest-wisdom", "kava", "opioids", "khat"],
    lessons: [
      "Ep 2 · Who Grows the Tea (colonial and plantation labour)",
      "Ep 5 · Whose Knowledge Is It",
      "Ep 6 · Kava Governs",
      "Ep 17 · The Opium Wars",
      "Ep 20 · The Ban Against the Evidence",
    ],
  },
  {
    id: "bvc.tea-trade-networks",
    claim: "Maps and analyzes the Tea Horse Road and the Maritime Silk Road through one commodity.",
    courseSlugs: ["tea"],
    lessons: ["Ep 2 · The Roads Tea Traveled"],
  },
  {
    id: "bvc.beer-first-cities",
    claim: "Makes the grain-to-cities argument for the transition to civilization, via the Code of Hammurabi.",
    courseSlugs: ["beer"],
    lessons: ["Ep 8 · Liquid Bread and the First Cities (the Code of Hammurabi, c. 1754 BCE, legislates beer)"],
  },
  {
    id: "bvc.wine-power-sacred",
    claim: "Teaches wine's role in early complex societies, power, and ritual.",
    courseSlugs: ["wine"],
    lessons: ["Ep 9 · Wine, Power, and the Sacred"],
  },
  {
    id: "bvc.prohibition",
    claim: "Teaches Prohibition: its causes, its rhetoric, and its results.",
    courseSlugs: ["beer"],
    lessons: [
      "Ep 8 · Prohibition, the Experiment That Failed",
      "Ep 8 · Selling Prohibition (the rhetoric that drove the movement)",
    ],
  },
  {
    id: "bvc.reading-ads-for-omission",
    claim: "Teaches reading media for bias via inclusion/exclusion of information and source reliability.",
    courseSlugs: ["coffee", "tea", "chocolate", "sugar", "rum", "tobacco"],
    lessons: [
      "Ep 1 · Reading a Coffee Ad",
      "Ep 2 · Reading a Tea Ad",
      "Ep 3 · Reading a Chocolate Ad",
      "Ep 4 · Whose Voice Tells the Story (reading a text for what it leaves out)",
      "Ep 11 · Tiki and the Tropical Paradise",
      "Ep 15 · The Language of Doubt",
    ],
  },
  {
    id: "bvc.author-rhetoric-primary-texts",
    claim: "Analyzes author perspective and rhetoric in effective primary texts.",
    courseSlugs: ["sugar", "beer", "tobacco", "opioids"],
    lessons: [
      "Ep 4 · Blood-Sweetened Luxury (the abolitionist sugar boycott)",
      "Ep 8 · Selling Prohibition",
      "Ep 15 · Torches of Freedom",
      "Ep 17 · Lin Zexu's Letter (using Britain's own values against its opium policy)",
    ],
  },
  {
    id: "bvc.evaluate-claims-fallacies",
    claim: "Evaluates arguments and evidence, identifying false statements and fallacious reasoning.",
    courseSlugs: ["tobacco", "psychedelics", "khat"],
    lessons: [
      "Ep 15 · Doubt Is Our Product",
      "Ep 19 · Peer Review Versus Press Release",
      "Ep 20 · The Ban Against the Evidence (the UK banning khat against its own scientific advice)",
    ],
  },
  {
    id: "bvc.reefer-madness-language-of-fear",
    claim: "Analyzes fear-based rhetoric and fallacies in drug-policy media.",
    courseSlugs: ["cannabis"],
    lessons: ["Ep 16 · Reefer Madness and the Language of Fear"],
  },
  {
    id: "bvc.source-evaluation-modelled",
    claim: "Models multi-source evaluation constantly and publishes a checkable bibliography.",
    courseSlugs: ["psychedelics", "coffee"],
    lessons: [
      "Ep 19 · Peer Review Versus Press Release",
      "Every course's Sources bibliography, with per-claim verification",
    ],
  },
  {
    id: "bvc.media-fallacies-recurring",
    claim: "Runs a media-literacy lesson in every episode: ads, labels, and campaign language.",
    courseSlugs: ["coffee", "chocolate", "beer", "tobacco", "cannabis", "coca"],
    lessons: [
      "Ep 1 · Reading a Coffee Ad",
      "Ep 3 · Reading a Chocolate Ad",
      "Ep 8 · Reading a Craft Beer Label",
      "Ep 15 · Torches of Freedom",
      "Ep 16 · Reefer Madness and the Language of Fear",
      "Ep 18 · Just Say No",
    ],
  },
  {
    id: "bvc.nearest-green-oral-history",
    claim: "Teaches oral history as a scholarly method for resolving discrepancies among sources.",
    courseSlugs: ["whiskey"],
    lessons: ["Ep 10 · The Oral History That Survived (recovering Nathan “Nearest” Green's erased role)"],
  },
  {
    id: "bvc.whose-voice-differing-accounts",
    claim: "Puts authors' differing accounts of the same events side by side and assesses their evidence.",
    courseSlugs: ["sugar", "chocolate", "forest-wisdom", "coca"],
    lessons: [
      "Ep 4 · Whose Voice Tells the Story — Beckford (1790) against Equiano (1789) and Mary Prince (1831) on the same plantation world",
      "Ep 3 · Two Ways of Seeing a Bean",
      "Ep 5 · Two Ways of Knowing",
      "Ep 18 · Whose Voice",
    ],
  },
  {
    id: "bvc.whose-voice-absence",
    claim: "Teaches reading a text for what it leaves out, against first-person accounts.",
    courseSlugs: ["sugar"],
    lessons: ["Ep 4 · Whose Voice Tells the Story"],
  },
  {
    id: "bvc.rhetoric-power-persuasion",
    claim: "Analyzes how style and content make particular texts persuasive.",
    courseSlugs: ["sugar", "tobacco", "opioids", "cannabis"],
    lessons: [
      "Ep 4 · Blood-Sweetened Luxury",
      "Ep 15 · Torches of Freedom",
      "Ep 17 · Lin Zexu's Letter",
      "Ep 16 · Three Sentences, Three Policies",
    ],
  },
  {
    id: "bvc.coffee-project-synthesis",
    claim: "Ships a graded 2–3 week research project requiring synthesis across sources.",
    courseSlugs: ["coffee"],
    lessons: ["Ep 1 · Assignment — all four options are 2–3 week research projects requiring synthesis across sources"],
  },
  {
    id: "bvc.coffee-project-argument-paper",
    claim: "Requires an argument paper with a counterargument section (project Option D).",
    courseSlugs: ["coffee"],
    lessons: [
      "Ep 1 · Assignment, Option D — a 1,200–1,500 word research paper with a required counterargument section",
    ],
  },
  {
    id: "bvc.coffee-project-research-process",
    claim: "Requires a real research process with peer-reviewed sources and APA citation.",
    courseSlugs: ["coffee"],
    lessons: [
      "Ep 1 · Assignment, Option B — climate-vulnerability report, 3+ peer-reviewed sources, APA bibliography",
      "Ep 1 · Assignment, Option D — primary-source research paper with an APA bibliography",
    ],
  },
  {
    id: "bvc.coffee-project-sources-ethics",
    claim: "Requires gathering authoritative sources and practicing interview ethics (project Options B/C).",
    courseSlugs: ["coffee"],
    lessons: [
      "Ep 1 · Assignment, Option B — 3+ peer-reviewed sources and an APA bibliography",
      "Ep 1 · Assignment, Option C — interview ethics: informed consent, right to review",
    ],
  },
  {
    id: "bvc.climate-resources-shape-humans",
    claim: "Supplies the evidence for how resources, hazards, and climate shape human activity.",
    courseSlugs: ["coffee", "chocolate", "kava", "whiskey"],
    lessons: [
      "Ep 1 · Climate Change Is Redrawing the Map",
      "Ep 3 · A Two-Degree Threat",
      "Ep 6 · Why Volcanic Soil Only",
      "Ep 10 · Karst Limestone and Bourbon",
      "Ep 1 · Assignment, Option B — assess a producing country's climate viability and defend the assessment",
    ],
  },
  {
    id: "bvc.plantation-economy-resistance",
    claim: "Teaches the plantation economy and the resistance to it, both halves.",
    courseSlugs: ["sugar", "rum"],
    lessons: [
      "Ep 4 · The Triangular Trade and the Middle Passage",
      "Ep 4 · Resistance and Revolution",
      "Ep 11 · The Maroons",
      "Ep 11 · The Haitian Revolution",
    ],
  },
  {
    id: "bvc.haitian-revolution",
    claim: "Teaches the Haitian Revolution including the 1825 indemnity and its modern consequences.",
    courseSlugs: ["rum"],
    lessons: [
      "Ep 11 · The Haitian Revolution",
      "Ep 11 · The Debt of Freedom",
      "Ep 11 · The Black Jacobins (C.L.R. James)",
    ],
  },
  {
    id: "bvc.opium-wars",
    claim: "Teaches the Opium Wars, their impact on China, and their global consequences.",
    courseSlugs: ["opioids"],
    lessons: ["Ep 17 · The Opium Wars", "Ep 17 · Lin Zexu's Letter"],
  },
  {
    id: "bvc.sugar-industry-impact",
    claim: "Evaluates the sugar industry's impact on societies and individuals, 16th–18th centuries.",
    courseSlugs: ["sugar", "rum"],
    lessons: [
      "Ep 4 · The Sugar Islands",
      "Ep 4 · From New Guinea to the New World",
      "Ep 11 · Waste-Product Economics",
    ],
  },
  {
    id: "bvc.mesoamerica-colonization",
    claim: "Covers Maya and Aztec society and the impact of European colonization, through the plants those societies governed.",
    courseSlugs: ["chocolate", "tequila-mezcal"],
    lessons: [
      "Ep 3 · Food of the Gods (cacao as Maya/Aztec currency and sacrament)",
      "Ep 3 · Conquest and the Great Reversal",
      "Ep 12 · The Sacred Plant (Aztec governance of pulque)",
      "Ep 12 · Burning the Books",
    ],
  },
  {
    id: "bvc.middle-passage-primary-sources",
    claim: "Teaches the Middle Passage and evaluates primary-source accounts by formerly enslaved writers.",
    courseSlugs: ["sugar"],
    lessons: [
      "Ep 4 · The Triangular Trade and the Middle Passage",
      "Ep 4 · Whose Voice Tells the Story (Equiano, 1789; Mary Prince, 1831)",
    ],
  },
  {
    id: "bvc.war-on-drugs-foreign-policy",
    claim: "Covers the War on Drugs in depth, including its foreign-policy arm.",
    courseSlugs: ["coca", "opioids", "cannabis"],
    lessons: [
      "Ep 18 · Bolivia's Bet (Bolivia's legal coca model against U.S.-funded eradication)",
      "Ep 18 · The Balloon Effect",
      "Ep 17 · Where the Poppy Grows (Afghanistan and the Golden Crescent)",
      "Ep 16 · The Justice Gap",
    ],
  },

  // ══ Civics & government catalog ═══════════════════════════════════════════
  {
    id: "civics.preamble-purposes",
    claim: "Works the Preamble clause by clause as the purposes of government.",
    courseSlugs: ["us-constitution-101"],
    lessons: ["US Constitution 101, Lesson 2 · The Preamble: who, and why"],
  },
  {
    id: "civics.articles-to-constitution",
    claim: "Teaches why the Articles of Confederation failed and how that led to the 1787 Constitution.",
    courseSlugs: ["us-constitution-101"],
    lessons: ["US Constitution 101, Lesson 1 · Why a constitution? From the Articles of Confederation"],
  },
  {
    id: "civics.bill-of-rights-origin",
    claim: "Teaches the Bill of Rights (Amendments I–X) as a document.",
    courseSlugs: ["us-constitution-101"],
    lessons: ["US Constitution 101, Lesson 8 · The Bill of Rights (Amendments I to X)"],
  },
  {
    id: "civics.constitution-article-by-article",
    claim: "Analyzes the Constitution article by article for ideas on government, rights, and the common good.",
    courseSlugs: ["us-constitution-101"],
    lessons: ["US Constitution 101, Lessons 2-9 · the Constitution analyzed article by article"],
  },
  {
    id: "civics.bill-of-rights-overview",
    claim: "Introduces what the Bill of Rights is and what it protects.",
    courseSlugs: ["know-your-rights"],
    lessons: ["The Bill of Rights: Know Your Rights, Lesson 1 · What is the Bill of Rights?"],
  },
  {
    id: "civics.separation-checks-balances",
    claim: "Teaches separation of powers, checks and balances, and federalism in the U.S. Constitution.",
    courseSlugs: ["us-constitution-101"],
    lessons: [
      "US Constitution 101, Lesson 6 · Separation of powers and checks & balances",
      "US Constitution 101, Lesson 7 · Federalism: state and federal power",
    ],
  },
  {
    id: "civics.federalism-why-split-power",
    claim: "Teaches federalism and why power is divided, with the founding cases.",
    courseSlugs: ["state-vs-federal"],
    lessons: ["State vs Federal Power, Lesson 1 · What is federalism, and why split power at all?"],
  },
  {
    id: "civics.in-three-branches",
    claim: "Teaches Indiana's three branches, including its deliberately weak governor.",
    courseSlugs: ["state-civics-in"],
    lessons: ["Indiana Civics, Lesson 2 · The three branches, and Indiana's deliberately weak governor"],
  },
  {
    id: "civics.three-branches-federal",
    claim: "Teaches the purpose of government and the three federal branches.",
    courseSlugs: ["us-civics-101"],
    lessons: ["US Civics 101, Lesson 1 · Purpose of government and the three branches"],
  },
  {
    id: "civics.federal-articles-i-iii",
    claim: "Teaches Articles I–III and the branch relationships they create.",
    courseSlugs: ["us-constitution-101"],
    lessons: ["US Constitution 101, Lessons 3-6 · Articles I-III and checks & balances"],
  },
  {
    id: "civics.federal-bill-process",
    claim: "Teaches the complete federal lawmaking process, committees through veto override.",
    courseSlugs: ["how-a-bill-becomes-law", "us-civics-101"],
    lessons: [
      "How a Bill Becomes Law (Federal) · the whole course, introduction to public law",
      "US Civics 101, Lesson 3 · How a bill becomes a law",
    ],
  },
  {
    id: "civics.in-bill-process",
    claim: "Teaches how a bill becomes an Indiana law in the General Assembly.",
    courseSlugs: ["state-civics-in"],
    lessons: ["Indiana Civics, Lesson 4 · How a bill becomes an Indiana law"],
  },
  {
    id: "civics.article-v-amendment",
    claim: "Teaches Article V amendment procedure and why the federal bar is so high.",
    courseSlugs: ["us-constitution-101"],
    lessons: ["US Constitution 101, Lesson 9 · Changing the Constitution: Article V and key later amendments"],
  },
  {
    id: "civics.in-constitution-amendment",
    claim: "Teaches who may propose Indiana constitutional amendments (the General Assembly only; no citizen initiative).",
    courseSlugs: ["state-civics-in"],
    lessons: [
      "Indiana Civics, Lesson 1 · Indiana's constitution: the 1851 rulebook",
      "Indiana Civics, Lesson 6 · Elections in Indiana (no statewide citizen initiative)",
    ],
  },
  {
    id: "civics.federal-judiciary-structure",
    claim: "Teaches the federal judiciary's structure, independence, and the checks on it.",
    courseSlugs: ["supreme-court-judicial-branch"],
    lessons: [
      "The Supreme Court & the Judicial Branch, Lesson 1 · The federal judiciary: from district courts to the Supreme Court",
      "The Supreme Court & the Judicial Branch, Lesson 7 · Checks on the Court",
    ],
  },
  {
    id: "civics.scotus-nomination-confirmation",
    claim: "Teaches how federal judges and Supreme Court justices are nominated and confirmed: Article II advice-and-consent, the Judiciary Committee, and the simple-majority rule after 2013/2017.",
    courseSlugs: ["supreme-court-judicial-branch"],
    lessons: [
      "The Supreme Court & the Judicial Branch, Lesson 2 · How a judge gets there: nomination and confirmation",
    ],
  },
  {
    id: "civics.judicial-review-marbury",
    claim: "Teaches judicial review by name, through Marbury v. Madison.",
    courseSlugs: ["us-civics-101"],
    lessons: ["US Civics 101, Lesson 4 · The courts and judicial review (Marbury v. Madison)"],
  },
  {
    id: "civics.in-courts-merit-selection",
    claim: "Teaches Indiana's merit-selection-plus-retention court design.",
    courseSlugs: ["state-civics-in"],
    lessons: ["Indiana Civics, Lesson 3 · Indiana's courts: merit selection + retention"],
  },
  {
    id: "civics.election-mechanics",
    claim: "Teaches election law and systems: registration, primaries, voting methods, counting and certifying.",
    courseSlugs: ["voting-elections-101"],
    lessons: [
      "Voting & Elections 101, Lessons 1-3 · registration, primaries and caucuses, how you vote",
      "Voting & Elections 101, Lesson 7 · Counting, canvassing, and certifying the vote",
      "Voting & Elections 101, Lesson 8 · Verify your own registration and rules",
    ],
  },
  {
    id: "civics.in-election-law",
    claim: "Teaches Indiana's election specifics: photo ID (Crawford), excuse-required mail voting.",
    courseSlugs: ["state-civics-in"],
    lessons: ["Indiana Civics, Lesson 6 · Elections in Indiana: strict photo ID, excuse-required mail voting"],
  },
  {
    id: "civics.electoral-college",
    claim: "Teaches the Electoral College's mechanics AND its original purpose and modern relevance.",
    courseSlugs: ["voting-elections-101"],
    lessons: [
      "Voting & Elections 101, Lesson 4 · The Electoral College: how it works",
      "Voting & Elections 101, Lesson 5 · Why the Electoral College exists",
    ],
  },
  {
    id: "civics.in-local-government",
    claim: "Teaches Indiana's local government as Indiana's: 92 counties, 1,000+ townships.",
    courseSlugs: ["state-civics-in"],
    lessons: [
      "Indiana Civics, Lesson 5 · Local government in Indiana: 92 counties and 1,000+ townships",
      "Indiana Civics, Lesson 8 · Get involved where you live in Indiana",
    ],
  },
  {
    id: "civics.local-government-layers",
    claim: "Teaches what local government handles, why it varies, and the special districts people forget.",
    courseSlugs: ["us-state-local-government"],
    lessons: [
      "US, State & Local Government, Lesson 5 · What LOCAL government handles (and why it VARIES)",
      "US, State & Local Government, Lesson 7 · The governments you forget: special districts & boards",
    ],
  },
  {
    id: "civics.us-citizenship-law",
    claim: "Teaches the legal meaning of U.S. citizenship: the 14th Amendment, jus soli, naturalization eligibility.",
    courseSlugs: ["citizenship-naturalization"],
    lessons: [
      "Citizenship & Naturalization Basics, Lesson 1 · Who is a U.S. citizen? Birthright and the 14th Amendment",
      "Citizenship & Naturalization Basics, Lesson 3 · Becoming a citizen: naturalization eligibility",
    ],
  },
  {
    id: "civics.citizenship-responsibilities",
    claim: "Teaches the rights and responsibilities of citizenship.",
    courseSlugs: ["citizenship-naturalization"],
    lessons: ["Citizenship & Naturalization Basics, Lesson 7 · Rights and responsibilities of citizenship"],
  },
  {
    id: "civics.jury-service",
    claim: "Teaches jury service end to end, as the citizen's side of the court system.",
    courseSlugs: ["jury-duty-courts"],
    lessons: ["Jury Duty & the Courts · the whole course (the citizen's side of the court system)"],
  },
  {
    id: "civics.voter-registration",
    claim: "Teaches registering to vote as a practiced responsibility.",
    courseSlugs: ["voting-elections-101"],
    lessons: ["Voting & Elections 101, Lesson 1 · Registering to vote"],
  },
  {
    id: "rights.landmark-cases",
    claim: "Teaches the landmark rights cases as rules a student can apply: Tinker, Brandenburg, Mapp, Terry, T.L.O., Riley, Carpenter.",
    courseSlugs: ["know-your-rights"],
    lessons: [
      "Know Your Rights, Lessons 2-5 · speech, religion, press, assembly — including at school and online",
      "Know Your Rights, Lessons 6-8 · the 4th Amendment: searches, stops, and your digital life",
    ],
  },
  {
    id: "rights.scotus-precedent",
    claim: "Teaches how Supreme Court precedent works and expands rights over time.",
    courseSlugs: ["supreme-court-judicial-branch"],
    lessons: [
      "The Supreme Court & the Judicial Branch, Lesson 5 · Writing the opinion: majority, concurrence, dissent, and precedent",
    ],
  },
  {
    id: "rights.limits-on-rights",
    claim: "Teaches when government may constitutionally limit rights, and why: time-place-manner, incitement, school speech, reasonable suspicion.",
    courseSlugs: ["know-your-rights"],
    lessons: [
      "Know Your Rights, Lesson 2 · Freedom of speech: what's protected, and what isn't",
      "Know Your Rights, Lesson 5 · Speech and religion at school, and online",
      "Know Your Rights, Lesson 7 · Police stops, reasonable suspicion, and your privacy",
    ],
  },
  {
    id: "civics.campaign-help",
    claim: "Teaches supporting a campaign lawfully: volunteering, donating, canvassing, the guardrails.",
    courseSlugs: ["help-a-campaign"],
    lessons: [
      "How to Help a Campaign · the whole course (volunteering, donating, canvassing — with the legal guardrails)",
    ],
  },
  {
    id: "civics.ballot-measures-local-causes",
    claim: "Teaches helping ballot measures and local causes.",
    courseSlugs: ["help-a-campaign"],
    lessons: ["How to Help a Campaign, Lesson 10 · Helping ballot measures and local causes"],
  },
  {
    id: "civics.show-up-every-level",
    claim: "Teaches where and how to be heard at every level of government.",
    courseSlugs: ["us-state-local-government"],
    lessons: ["US, State & Local Government, Lesson 8 · Where to show up and be heard, at every level"],
  },
  {
    id: "civics.track-a-bill",
    claim: "Teaches tracking a live bill and making your voice heard on it.",
    courseSlugs: ["how-a-bill-becomes-law"],
    lessons: ["How a Bill Becomes Law, Lesson 8 · Tracking a bill and making your voice heard"],
  },
  {
    id: "civics.in-get-involved",
    claim: "Teaches getting involved where you live, Indiana edition.",
    courseSlugs: ["state-civics-in"],
    lessons: ["Indiana Civics, Lesson 8 · Get involved where you live in Indiana"],
  },
  {
    id: "civics.run-for-office",
    claim: "Teaches running for office: eligibility, ballot access, money rules, and after Election Day.",
    courseSlugs: ["how-to-run-for-office"],
    lessons: [
      "How to Run for Office · the whole course (eligibility, ballot access, money rules, and after Election Day)",
    ],
  },

  // ── State civics: Arizona (state-civics-az was written FROM Arizona's own sources) ──
  {
    id: "civics.az-constitution-direct-democracy",
    claim: "Teaches Arizona's 1912 constitution and its strong direct democracy: initiative, referendum, and recall.",
    courseSlugs: ["state-civics-az"],
    lessons: [
      "Arizona Civics, Lesson 1 · Arizona's constitution and its strong direct democracy",
      "Arizona Civics, Lesson 4 · How voters make law directly (the initiative route)",
      "Arizona Civics, Lesson 6 · The Voter Protection Act (Prop 105, 1998)",
    ],
  },
  {
    id: "civics.az-three-branches",
    claim: "Teaches Arizona's three branches: 30 shared districts (one senator, two representatives each), the two-thirds veto override, and the Prop 131 Lieutenant Governor transition.",
    courseSlugs: ["state-civics-az"],
    lessons: [
      "Arizona Civics, Lesson 2 · The three branches of Arizona government",
      "Arizona Civics, Lesson 7 · The Lieutenant Governor: a change in progress (Prop 131, 2022)",
    ],
  },
  {
    id: "civics.az-courts-county-size",
    claim: "Teaches Arizona's split judicial selection: merit selection plus retention in large counties, elected judges in small ones.",
    courseSlugs: ["state-civics-az"],
    lessons: ["Arizona Civics, Lesson 3 · Arizona's courts: merit selection depends on county size"],
  },
  {
    id: "civics.az-bill-process",
    claim: "Teaches how a bill becomes an Arizona law, and the voter initiative as Arizona's second lawmaking route.",
    courseSlugs: ["state-civics-az"],
    lessons: [
      "Arizona Civics, Lesson 4 · How a bill becomes an Arizona law (and how voters do it directly)",
    ],
  },
  {
    id: "civics.az-local-government",
    claim: "Teaches Arizona local government as Arizona's: 15 counties under elected Boards of Supervisors, cities and towns, no townships.",
    courseSlugs: ["state-civics-az"],
    lessons: [
      "Arizona Civics, Lesson 5 · Local government in Arizona: 15 counties, no townships",
      "Arizona Civics, Lesson 8 · Get involved where you live in Arizona (county and city/town)",
    ],
  },
  {
    id: "civics.az-election-law",
    claim: "Teaches Arizona's election specifics: the Active Early Voting List and the Voter Protection Act (Prop 105, 1998).",
    courseSlugs: ["state-civics-az"],
    lessons: [
      "Arizona Civics, Lesson 6 · Elections in Arizona: early voting and the Voter Protection Act",
    ],
  },
  {
    id: "civics.az-get-involved",
    claim: "Teaches getting involved where you live, Arizona edition — including the direct-democracy tools.",
    courseSlugs: ["state-civics-az"],
    lessons: ["Arizona Civics, Lesson 8 · Get involved where you live in Arizona"],
  },

  // ── State civics: Arkansas (state-civics-ar was written FROM Arkansas's own sources) ──
  // NOTE: Arkansas's 2022 Civics and U.S. Government standards are overwhelmingly FEDERAL.
  // The flagship's Arkansas-structure lessons (the 1874 constitution, the seven elected
  // executives, the nonpartisan elected Supreme Court) have no Arkansas standard to cite, so
  // they carry no claim here — data/ar.ts publishes that gap in its notClaimed list.
  {
    id: "civics.ar-bill-process",
    claim: "Teaches how a bill becomes an Arkansas law in the General Assembly, and the Amendment 7 petition route beside it.",
    courseSlugs: ["state-civics-ar"],
    lessons: ["Arkansas Civics, Lesson 4 · How a bill becomes an Arkansas law"],
  },
  {
    id: "civics.ar-local-government",
    claim: "Teaches Arkansas local government as Arkansas's: 75 counties run by a county judge and a quorum court of JPs, no townships.",
    courseSlugs: ["state-civics-ar"],
    lessons: [
      "Arkansas Civics, Lesson 5 · Local government in Arkansas: 75 counties, quorum courts, no townships",
      "Arkansas Civics, Lesson 8 · Get involved where you live in Arkansas (quorum court and city council)",
    ],
  },
  {
    id: "civics.ar-election-law",
    claim: "Teaches Arkansas's election specifics: photo ID, no-excuse early voting but excuse-required mail voting, and the 30-day registration deadline.",
    courseSlugs: ["state-civics-ar"],
    lessons: ["Arkansas Civics, Lesson 6 · Elections in Arkansas: ID, early voting, and a 30-day deadline"],
  },
  {
    id: "civics.ar-initiative-flux",
    claim: "Teaches Amendment 7's initiative and referendum, and that Arkansas's petition rules were recently tightened and remain in flux.",
    courseSlugs: ["state-civics-ar"],
    lessons: [
      "Arkansas Civics, Lesson 7 · The citizen initiative: recently tightened & in flux (flagged)",
    ],
  },
  {
    id: "civics.ar-get-involved",
    claim: "Teaches getting involved where you live, Arkansas edition.",
    courseSlugs: ["state-civics-ar"],
    lessons: ["Arkansas Civics, Lesson 8 · Get involved where you live in Arkansas"],
  },

  // ── State civics: California (state-civics-ca was written FROM California's own sources) ──
  // NOTE: like Arkansas, California's Grade 12 Principles of American Democracy standards are
  // overwhelmingly FEDERAL. The flagship's structure lessons (the plural executive, the 120-seat
  // Legislature, the top-two primary, AB 37's universal mail ballots) have no California standard
  // to cite, so they carry no claim here — data/ca.ts publishes that gap in its notClaimed list.
  // California's standards reach state government only through the comparative 12.7 lens
  // (lawmaking, courts, local responsibilities) and direct democracy through 12.6.5.
  {
    id: "civics.ca-constitution-direct-democracy",
    claim: "Teaches California's 1879 constitution and its Article II direct democracy — the initiative, referendum, and recall added in 1911 — in working detail, including the turnout-dependent signature thresholds.",
    courseSlugs: ["state-civics-ca"],
    lessons: [
      "California Civics, Lesson 1 · California's constitution: the 1879 rulebook and direct democracy",
      "California Civics, Lesson 6 · Elections in California (the citizen initiative and its thresholds)",
      "California Civics, Lesson 7 · Direct democracy in depth: initiative, referendum, recall",
    ],
  },
  {
    id: "civics.ca-courts",
    claim: "Teaches California's appoint-confirm-retain selection for appellate justices (Governor, Commission on Judicial Appointments, yes/no retention elections) and the three-tier court system with Superior Courts in all 58 counties.",
    courseSlugs: ["state-civics-ca"],
    lessons: ["California Civics, Lesson 3 · California's courts: appoint, confirm, then retention"],
  },
  {
    id: "civics.ca-bill-process",
    claim: "Teaches how a bill becomes a California law: the committee filter, the two-thirds veto override, and the Governor's line-item veto on appropriations.",
    courseSlugs: ["state-civics-ca"],
    lessons: ["California Civics, Lesson 4 · How a bill becomes a California law"],
  },
  {
    id: "civics.ca-local-government",
    claim: "Teaches California local government as California's: 58 counties under elected Boards of Supervisors, charter versus general-law cities (home rule), thousands of special districts, and no townships.",
    courseSlugs: ["state-civics-ca"],
    lessons: [
      "California Civics, Lesson 5 · Local government in California: 58 counties, charter cities, NO townships",
      "California Civics, Lesson 8 · Get involved where you live in California (county, city, special district)",
    ],
  },
  {
    id: "civics.ca-election-law",
    claim: "Teaches California's election specifics: automatic (Motor Voter) and same-day registration, a mail ballot for every active voter (AB 37, 2021), and the top-two primary (Prop 14, 2010).",
    courseSlugs: ["state-civics-ca"],
    lessons: [
      "California Civics, Lesson 6 · Elections in California: automatic & same-day registration, mail ballots for all",
    ],
  },
  {
    id: "civics.ca-get-involved",
    claim: "Teaches getting involved where you live, California edition — including the direct-democracy tools.",
    courseSlugs: ["state-civics-ca"],
    lessons: ["California Civics, Lesson 8 · Get involved where you live in California"],
  },

  // ── State civics: New York (state-civics-ny was written FROM New York's own sources) ──
  // NOTE: like California, New York's Grade 12 Participation in Government framework is largely
  // FEDERAL. The flagship's structure lessons (the inverted court NAMES — "Supreme Court" is the
  // trial court — the plural executive, the 62 counties with New York City's five borough-counties,
  // the automatic 20-year constitutional-convention question, and the absence of a statewide
  // citizen initiative) have no New York Social Studies code to cite, so they carry no claim here —
  // data/ny.ts publishes that gap in its notClaimed list. New York's framework reaches state
  // government through 12.G1b/12.G1c (state constitutions and checks and balances "at all levels"),
  // 12.G4d (which names New York's party system explicitly), and the public-policy standards.
  {
    id: "civics.ny-constitution-amendment",
    claim: "Teaches New York's 1894 constitution and its demanding amendment path (Article XIX: passage by two successive, separately-elected Legislatures then a voter referendum), the automatic 20-year constitutional-convention question, and the absence of any statewide citizen initiative.",
    courseSlugs: ["state-civics-ny"],
    lessons: [
      "New York Civics, Lesson 1 · New York's constitution: the 1894 rulebook (Article XIX amendment path and the 20-year convention question)",
      "New York Civics, Lesson 6 · Elections in New York (no statewide citizen initiative)",
    ],
  },
  {
    id: "civics.ny-three-branches",
    claim: "Teaches New York's three branches as New York's: a 150-member Assembly and 63-member Senate, and a plural executive whose Attorney General and Comptroller are elected separately from the Governor.",
    courseSlugs: ["state-civics-ny"],
    lessons: ["New York Civics, Lesson 2 · The three branches, and New York's plural executive"],
  },
  {
    id: "civics.ny-courts",
    claim: "Teaches New York's inverted court names (the “Supreme Court” is the trial court; the “Court of Appeals” is the highest court) and the appointment of Court of Appeals judges by the Governor from the Commission on Judicial Nomination's list, with State Senate confirmation.",
    courseSlugs: ["state-civics-ny"],
    lessons: ["New York Civics, Lesson 3 · New York's courts: the inverted-names gotcha"],
  },
  {
    id: "civics.ny-bill-process",
    claim: "Teaches how a bill becomes a New York law: the committee filter, the two-thirds veto override, and New York's unusually powerful executive budget.",
    courseSlugs: ["state-civics-ny"],
    lessons: ["New York Civics, Lesson 4 · How a bill becomes a New York law"],
  },
  {
    id: "civics.ny-local-government",
    claim: "Teaches New York local government as New York's: 62 counties (five of them the boroughs of New York City), strong home rule, and cities, towns, villages, and special districts.",
    courseSlugs: ["state-civics-ny"],
    lessons: [
      "New York Civics, Lesson 5 · Local government in New York: 62 counties and strong home rule",
      "New York Civics, Lesson 8 · Get involved where you live in New York",
    ],
  },
  {
    id: "civics.ny-elections",
    claim: "Teaches New York's election specifics: early in-person voting, no-excuse early mail voting (Early Mail Voter Act, in effect for 2024) alongside excuse-required absentee ballots, closed party primaries, and no statewide citizen initiative.",
    courseSlugs: ["state-civics-ny"],
    lessons: [
      "New York Civics, Lesson 6 · Elections in New York: early voting, closed primaries, no initiative",
      "New York Civics, Lesson 7 · Two New York rules that recently changed (no-excuse early mail voting; the Governor/Lieutenant-Governor joint ticket)",
    ],
  },
  {
    id: "civics.ny-get-involved",
    claim: "Teaches getting involved where you live, New York edition — state legislators, county/city/town/village boards, and the statewide ballot proposals including the 20-year convention question.",
    courseSlugs: ["state-civics-ny"],
    lessons: ["New York Civics, Lesson 8 · Get involved where you live in New York"],
  },

  // ── State civics: Pennsylvania (state-civics-pa was written FROM Pennsylvania's own sources) ──
  // NOTE: Pennsylvania's 2009 Civics and Government standards reach the Commonwealth's own
  // government better than most — 5.1.12.D and 5.1.12.E explicitly name the "Pennsylvania
  // Constitution" — so the flagship's constitution and rights lessons have a genuine code. But the
  // rest of its distinctive structure (the nation's largest full-time legislature, the elected-
  // then-retained judiciary, the 67 counties with an ACTIVE township layer Pennsylvania does not
  // abolish, and Act 77 no-excuse mail voting) has no Pennsylvania-specific code — data/pa.ts
  // publishes that gap in its notClaimed list.
  {
    id: "civics.pa-constitution",
    claim: "Teaches Pennsylvania's 1968 constitution and its two-consecutive-sessions amendment path with no citizen initiative, and its strong Article I Declaration of Rights (which in places protects more than the federal Bill of Rights, including the Environmental Rights Amendment).",
    courseSlugs: ["state-civics-pa"],
    lessons: [
      "Pennsylvania Civics, Lesson 1 · Pennsylvania's constitution: the 1968 rulebook and a two-session amendment path (Article XI; the Declaration of Rights)",
    ],
  },
  {
    id: "civics.pa-three-branches",
    claim: "Teaches Pennsylvania's three branches as Pennsylvania's: a 203-member House and 50-member Senate (the largest full-time state legislature in the nation), the elected-then-retained judiciary (Superior and Commonwealth intermediate courts), and a partly-plural executive (joint-ticket Governor/Lieutenant Governor; separately elected Attorney General, Auditor General, and Treasurer).",
    courseSlugs: ["state-civics-pa"],
    lessons: [
      "Pennsylvania Civics, Lesson 2 · The three branches: the joint-ticket Governor and the biggest legislature in the nation",
      "Pennsylvania Civics, Lesson 3 · Pennsylvania's courts: elected, then retained",
    ],
  },
  {
    id: "civics.pa-elections",
    claim: "Teaches Pennsylvania's election specifics: Act 77 no-excuse mail-in voting (struck down then upheld in McLinko, 2022), closed primaries, voter ID for first-time voters, a 15-day registration deadline with no same-day registration, and no citizen initiative.",
    courseSlugs: ["state-civics-pa"],
    lessons: [
      "Pennsylvania Civics, Lesson 6 · Elections in Pennsylvania: Act 77 mail-in voting, closed primaries, voter ID",
    ],
  },
  {
    id: "civics.pa-get-involved",
    claim: "Teaches getting involved where you live, Pennsylvania edition — legislators, and especially the township supervisors, borough or city council, and county commissioners, because Pennsylvania has no citizen initiative.",
    courseSlugs: ["state-civics-pa"],
    lessons: ["Pennsylvania Civics, Lesson 7 · Get involved where you live in Pennsylvania"],
  },
  // ── State civics: Texas (state-civics-tx was written FROM Texas's own sources) ──
  // NOTE: Texas's high-school civics anchor is the United States Government course (§113.44),
  // whose standards are overwhelmingly about the FEDERAL system. Two of them, however, name state
  // and local government explicitly — (d)(7)(H) "compare the structures, functions, and processes
  // of national, state, and local governments" and (d)(9)(A) filling elected and appointed offices
  // at the local, state, and national levels — so unlike Arkansas and California, the Texas
  // flagship's Texas-structure lessons DO have a home, mapped there as partial. Texas's dedicated
  // state-government instruction lives in Grade 7 Texas History (§113.20, middle school), which we
  // have not fetched this pass; data/tx.ts publishes that gap in its notClaimed list.
  {
    id: "civics.tx-state-structure",
    claim: "Teaches Texas's long, much-amended 1876 constitution; its distinctive plural executive (a deliberately limited governor sharing power with a separately-elected Lieutenant Governor, Attorney General, Comptroller, Land Commissioner, and Agriculture Commissioner); a part-time legislature meeting only in odd-numbered years (a 150-member House and a 31-member Senate); and how a bill becomes a Texas law, including the two-thirds veto override.",
    courseSlugs: ["state-civics-tx"],
    lessons: [
      "Texas Civics, Lesson 1 · Texas's constitution: the long, much-amended 1876 rulebook",
      "Texas Civics, Lesson 2 · The three branches and Texas's plural executive",
      "Texas Civics, Lesson 4 · How a bill becomes a Texas law and the biennial session",
    ],
  },
  {
    id: "civics.tx-courts-elected",
    claim: "Teaches Texas's bifurcated high courts (a Supreme Court for civil cases and a Court of Criminal Appeals for criminal cases) and its partisan election of judges to six-year terms.",
    courseSlugs: ["state-civics-tx"],
    lessons: ["Texas Civics, Lesson 3 · Texas's courts: two high courts, partisan-elected judges"],
  },
  {
    id: "civics.tx-local-government",
    claim: "Teaches Texas local government as Texas's: 254 counties (the most of any state) run by a commissioners court, no townships, and home-rule versus general-law cities.",
    courseSlugs: ["state-civics-tx"],
    lessons: [
      "Texas Civics, Lesson 5 · Local government in Texas: 254 counties, no townships",
      "Texas Civics, Lesson 7 · Get involved where you live in Texas",
    ],
  },
  {
    id: "civics.tx-elections",
    claim: "Teaches Texas's election specifics: strict photo voter ID with a Reasonable Impediment Declaration fallback, no same-day registration (a ~30-day deadline), and no statewide citizen initiative.",
    courseSlugs: ["state-civics-tx"],
    lessons: [
      "Texas Civics, Lesson 6 · Elections in Texas: strict photo ID, no same-day registration, no initiative",
    ],
  },
  {
    id: "civics.tx-get-involved",
    claim: "Teaches getting involved where you live, Texas edition — mindful of the biennial legislative clock and the absence of a statewide citizen initiative.",
    courseSlugs: ["state-civics-tx"],
    lessons: ["Texas Civics, Lesson 7 · Get involved where you live in Texas"],
  },

  // ── State civics: Florida (state-civics-fl was written FROM Florida's own sources) ──
  // NOTE: Florida's high-school civics anchor is the United States Government course, which uses
  // the SS.912.CG (Civics & Government) benchmarks. Like Texas's, they are overwhelmingly about
  // the FEDERAL system; three name state and local government explicitly — CG.3.15 (how citizens
  // are affected by local, state, and national governments), CG.3.10 (levels and responsibilities
  // of state and federal courts), and CG.2.9 (elections at the state and national levels) — and
  // that is where the Florida flagship is mapped, as partial. Florida's dedicated state-and-local
  // civics is concentrated in Grade 7 Civics (SS.7.CG, middle school), not fetched this pass;
  // data/fl.ts publishes that in its notClaimed list.
  {
    id: "civics.fl-state-structure",
    claim: "Teaches Florida's 1968-revision constitution and its many amendment paths (including the once-every-20-years Constitution Revision Commission that places proposals directly on the ballot, and the 60% supermajority added in 2006); its plural executive (a Governor plus a separately-elected Cabinet — Attorney General, Chief Financial Officer, and Commissioner of Agriculture); a 120-member House and a 40-member Senate; and how a bill becomes a Florida law in a 60-day session, with a two-thirds veto override.",
    courseSlugs: ["state-civics-fl"],
    lessons: [
      "Florida Civics, Lesson 1 · Florida's constitution: the 1968 rewrite and its many amendment paths",
      "Florida Civics, Lesson 2 · The Constitution Revision Commission: Florida's once-in-20-years wildcard",
      "Florida Civics, Lesson 3 · The three branches, and Florida's plural executive (Governor + Cabinet)",
      "Florida Civics, Lesson 5 · How a bill becomes a Florida law",
    ],
  },
  {
    id: "civics.fl-courts",
    claim: "Teaches Florida's split judicial selection: merit selection plus yes/no retention votes for the Supreme Court and District Courts of Appeal, and nonpartisan contested elections for circuit and county (trial) judges.",
    courseSlugs: ["state-civics-fl"],
    lessons: ["Florida Civics, Lesson 4 · Florida's courts: merit selection + retention for the top courts"],
  },
  {
    id: "civics.fl-local-government",
    claim: "Teaches Florida local government as Florida's: 67 counties split into charter (broad home rule) and non-charter counties, municipalities (city/town/village), and no townships.",
    courseSlugs: ["state-civics-fl"],
    lessons: [
      "Florida Civics, Lesson 6 · Local government in Florida: 67 counties, charter vs. non-charter, and NO townships",
      "Florida Civics, Lesson 9 · Get involved where you live in Florida",
    ],
  },
  {
    id: "civics.fl-elections",
    claim: "Teaches Florida's election specifics: closed primaries (with the universal-primary exception), voter ID, vote-by-mail rules tightened by SB 90 (2021) and SB 524 (2022), a 29-day registration deadline, and the citizen initiative (about 8% of the last presidential vote spread across half the congressional districts, Florida Supreme Court review, then 60% at the polls).",
    courseSlugs: ["state-civics-fl"],
    lessons: [
      "Florida Civics, Lesson 7 · Elections in Florida: closed primaries, voter ID, and recently tightened mail voting",
      "Florida Civics, Lesson 8 · The citizen initiative: putting an amendment on the ballot yourself",
    ],
  },
  {
    id: "civics.fl-get-involved",
    claim: "Teaches getting involved where you live, Florida edition — the Legislature's 60-day session, the ballot (initiatives and amendments), and county and municipal government.",
    courseSlugs: ["state-civics-fl"],
    lessons: ["Florida Civics, Lesson 9 · Get involved where you live in Florida"],
  },

  // ── State civics: Ohio (state-civics-oh was written FROM Ohio's own sources) ──
  // NOTE: unlike Arkansas and California, Ohio's high-school AMERICAN GOVERNMENT standards NAME
  // Ohio's own government explicitly — Content Statement 16 ("the Ohio Constitution ... was changed
  // in 1851") and Content Statement 17 (individuals assist state and local governments) — so the
  // Ohio flagship's structure lessons have a genuine 1:1 home, mapped as full. Ohio's high-school
  // science standards, by contrast, gave the climate/resource content NO home (Ohio publishes its
  // high-school science courses as bare topic outlines, not citable content statements — see
  // data/oh.ts notClaimed), so that content maps to Ohio social studies instead.
  {
    id: "civics.oh-constitution-direct-democracy",
    claim: "Teaches Ohio's 1851 constitution and the strong direct democracy its 1912 amendments added — the citizen initiative and referendum, with a citizen constitutional amendment still passing on a simple majority after voters rejected the 2023 Issue 1 attempt to raise the bar to 60%.",
    courseSlugs: ["state-civics-oh"],
    lessons: [
      "Ohio Civics, Lesson 1 · Ohio's constitution: the 1851 rulebook and its 1912 makeover (the initiative and referendum)",
      "Ohio Civics, Lesson 6 · Elections in Ohio (the citizen initiative/referendum and the failed 2023 Issue 1)",
      "Ohio Civics, Lesson 7 · Four Ohio rules that recently changed (the simple-majority amendment bar survived)",
    ],
  },
  {
    id: "civics.oh-three-branches",
    claim: "Teaches Ohio's three branches: a 99-member House and 33-member Senate, and a plural executive whose Governor and Lieutenant Governor run on a joint ticket while the Attorney General, Secretary of State, Auditor, and Treasurer are elected separately.",
    courseSlugs: ["state-civics-oh"],
    lessons: ["Ohio Civics, Lesson 2 · The three branches, and Ohio's plural executive"],
  },
  {
    id: "civics.oh-courts",
    claim: "Teaches Ohio's elected judiciary — Supreme Court and Court of Appeals judges chosen in popular elections — and the 2021 change (SB 80) that put party labels on the general-election ballot for the top courts starting in 2022.",
    courseSlugs: ["state-civics-oh"],
    lessons: ["Ohio Civics, Lesson 3 · Ohio's courts: elected judges, and a 2021 ballot change"],
  },
  {
    id: "civics.oh-bill-process",
    claim: "Teaches how a bill becomes an Ohio law, including Ohio's distinctive three-fifths (not two-thirds) veto override.",
    courseSlugs: ["state-civics-oh"],
    lessons: ["Ohio Civics, Lesson 4 · How a bill becomes an Ohio law: the 3/5 override"],
  },
  {
    id: "civics.oh-local-government",
    claim: "Teaches Ohio local government as Ohio's: 88 counties, strong municipal home rule (Article XVIII, 1912), an active township layer, and special districts.",
    courseSlugs: ["state-civics-oh"],
    lessons: [
      "Ohio Civics, Lesson 5 · Local government in Ohio: 88 counties, home rule, townships",
      "Ohio Civics, Lesson 8 · Get involved where you live in Ohio",
    ],
  },
  {
    id: "civics.oh-elections",
    claim: "Teaches Ohio's election specifics: photo voter ID since 2023 (HB 458), no-excuse early and absentee voting, a roughly 30-day registration deadline, and the citizen initiative/referendum — including the August 2023 Issue 1 that failed to raise the amendment bar to 60%.",
    courseSlugs: ["state-civics-oh"],
    lessons: [
      "Ohio Civics, Lesson 6 · Elections in Ohio: photo ID (2023), early voting, and the ballot initiative",
      "Ohio Civics, Lesson 7 · Four Ohio rules that recently changed",
    ],
  },
  {
    id: "civics.oh-get-involved",
    claim: "Teaches getting involved where you live, Ohio edition — legislators and bill-tracking, the citizen initiative and referendum, county/city/village/township and special-district boards, and voting Ohio's now party-labeled judicial races.",
    courseSlugs: ["state-civics-oh"],
    lessons: ["Ohio Civics, Lesson 8 · Get involved where you live in Ohio"],
  },

  // ── State civics: Georgia (state-civics-ga was written FROM Georgia's own sources) ──
  // NOTE: like Ohio, Georgia's high-school American Government/Civics standards NAME Georgia's own
  // government — SSCG17 "the organization and powers of state and local government described in the
  // Georgia Constitution" — so the Georgia flagship's structure lessons have a genuine home. The
  // catch Georgia's own standard writes in: SSCG17e names "the initiative, referendum, and recall"
  // as citizen limitations on government, and the honest Georgia answer the flagship teaches is that
  // Georgia has NO statewide citizen initiative — change runs through the legislature, then the voters.
  {
    id: "civics.ga-constitution-no-initiative",
    claim: "Teaches Georgia's 1983 constitution and why Georgia has NO statewide citizen initiative — a constitutional amendment is proposed only by a two-thirds vote of each house of the General Assembly (or a constitutional convention) and then ratified by the voters, never by citizen petition.",
    courseSlugs: ["state-civics-ga"],
    lessons: [
      "Georgia Civics, Lesson 1 · Georgia's constitution: the 1983 rulebook, and no citizen initiative",
      "Georgia Civics, Lesson 7 · Why Georgia has no ballot initiative, and how change actually happens",
    ],
  },
  {
    id: "civics.ga-three-branches",
    claim: "Teaches Georgia's three branches: a 180-member House and 56-member Senate, and a plural executive whose Lieutenant Governor is elected independently of the Governor (can be from a different party) and presides over the State Senate, alongside a separately-elected Attorney General, Secretary of State, and several commissioners.",
    courseSlugs: ["state-civics-ga"],
    lessons: ["Georgia Civics, Lesson 2 · The three branches, and Georgia's plural executive"],
  },
  {
    id: "civics.ga-courts",
    claim: "Teaches Georgia's appellate courts — a nine-justice Supreme Court and a fifteen-judge Court of Appeals — chosen in NONPARTISAN statewide elections to six-year terms, with the Governor filling mid-term vacancies.",
    courseSlugs: ["state-civics-ga"],
    lessons: ["Georgia Civics, Lesson 3 · Georgia's courts: nonpartisan elections for the appellate bench"],
  },
  {
    id: "civics.ga-bill-process",
    claim: "Teaches how a bill becomes a Georgia law — including the constitutional-majority floor vote and the two-thirds veto override — and that a constitutional amendment skips the Governor's desk and goes straight to the voters.",
    courseSlugs: ["state-civics-ga"],
    lessons: ["Georgia Civics, Lesson 4 · How a bill becomes a Georgia law"],
  },
  {
    id: "civics.ga-local-government",
    claim: "Teaches Georgia local government as Georgia's: 159 counties (the second-most of any state, after Texas), home rule, consolidated city-county governments like Columbus-Muscogee and Athens-Clarke, and NO townships.",
    courseSlugs: ["state-civics-ga"],
    lessons: [
      "Georgia Civics, Lesson 5 · Local government in Georgia: 159 counties (2nd-most), home rule, NO townships",
      "Georgia Civics, Lesson 8 · Get involved where you live in Georgia",
    ],
  },
  {
    id: "civics.ga-elections",
    claim: "Teaches Georgia's election specifics: photo voter ID, in-person early (advance) voting, no-excuse absentee-by-mail with the SB 202 (2021) changes, and the distinctive majority-vote RUNOFF that sends the top two candidates to a second election when no one wins an outright majority.",
    courseSlugs: ["state-civics-ga"],
    lessons: [
      "Georgia Civics, Lesson 6 · Elections in Georgia: photo ID, early voting, absentee-by-mail, and the majority runoff",
    ],
  },
  {
    id: "civics.ga-get-involved",
    claim: "Teaches getting involved where you live, Georgia edition — because Georgia has no citizen initiative, persuading legislators is the key lever, alongside county commissions and city councils, the nonpartisan judicial races, and coming back to vote the runoff.",
    courseSlugs: ["state-civics-ga"],
    lessons: ["Georgia Civics, Lesson 8 · Get involved where you live in Georgia"],
  },
  // ── State civics: Illinois (state-civics-il was written FROM Illinois's own sources) ──
  // NOTE: Illinois's high-school Social Science Standards (2017) are DISCIPLINARY-CONCEPT
  // standards (SS.CV.1-10), not course benchmarks — they name "constitutions", "institutions",
  // "elections", and "participation" in the abstract rather than any state's structure. So the
  // Illinois flagship's Illinois-specific lessons map onto the civics-institution and
  // participation concept standards (SS.CV.1, SS.CV.2, SS.CV.3), honestly as partial where the
  // standard reaches past what one state's structure covers. See data/il.ts.
  {
    id: "civics.il-state-structure",
    claim: "Teaches Illinois's modern Constitution of 1970 (in effect July 1, 1971); its plural executive of six separately elected statewide officers — uniquely BOTH a Comptroller and a Treasurer, plus a Governor and Lieutenant Governor who since 2014 run on a joint ticket; a General Assembly of 118 representatives and 59 senators; and the Governor's amendatory and line-item vetoes with a three-fifths override.",
    courseSlugs: ["state-civics-il"],
    lessons: [
      "Illinois Civics, Lesson 1 · Illinois's modern Constitution of 1970",
      "Illinois Civics, Lesson 2 · Illinois's plural executive: six statewide officers",
      "Illinois Civics, Lesson 3 · The General Assembly and the partisan-elected Supreme Court",
    ],
  },
  {
    id: "civics.il-courts",
    claim: "Teaches Illinois's openly PARTISAN elected judiciary: a seven-justice Supreme Court elected from judicial districts (three from Cook County) to 10-year terms, then kept by a nonpartisan retention vote needing 60% to stay, with appellate and circuit judges elected the same way.",
    courseSlugs: ["state-civics-il"],
    lessons: ["Illinois Civics, Lesson 3 · The General Assembly and the partisan-elected Supreme Court"],
  },
  {
    id: "civics.il-initiative",
    claim: "Teaches Illinois's uniquely NARROW citizen initiative — usable only to amend the Legislative Article (the structure of the General Assembly), not ordinary laws or other amendments — and its model case, the 1980 Cutback Amendment that shrank the House from 177 to 118 and ended cumulative voting in multi-member districts.",
    courseSlugs: ["state-civics-il"],
    lessons: ["Illinois Civics, Lesson 4 · The limited citizen initiative and the 1980 Cutback Amendment"],
  },
  {
    id: "civics.il-home-rule",
    claim: "Teaches Illinois as one of the strongest HOME-RULE states — the deliberate opposite of Dillon's Rule, where units over 25,000 people are automatically home rule and start with broad power unless the state limits them — across 102 counties, including a home-rule Cook County, plus townships and among the most special districts of any state.",
    courseSlugs: ["state-civics-il"],
    lessons: ["Illinois Civics, Lesson 5 · Home rule and local government (the opposite of Dillon's Rule)"],
  },
  {
    id: "civics.il-elections",
    claim: "Teaches Illinois's expanded voter access — same-day (Election-Day) registration, automatic registration, no-excuse vote-by-mail with a permanent list, early voting, and online registration — administered locally by county clerks and some city election boards, with a standing flag to confirm current rules at elections.il.gov.",
    courseSlugs: ["state-civics-il"],
    lessons: ["Illinois Civics, Lesson 6 · Elections and how to take part"],
  },
  {
    id: "civics.il-get-involved",
    claim: "Teaches getting involved where you live, Illinois edition — registering and voting (even on Election Day), showing up at home-rule local meetings, contacting your Springfield legislators, using the state's one narrow initiative lever, and running for local office.",
    courseSlugs: ["state-civics-il"],
    lessons: ["Illinois Civics, Lesson 6 · Elections and how to take part"],
  },

  // ── State civics: Michigan (state-civics-mi was written FROM Michigan's own sources) ──
  // NOTE: Michigan's 2019 Social Studies Standards DO include a High School Civics course with a
  // dedicated "Structure and Functions of State, Local, and Tribal Governments" cluster (C3.2),
  // so unlike Illinois's abstract concept standards, the Michigan flagship's Michigan-structure
  // lessons have a genuine home: C3.2.3 (how state/local governments are organized) and C3.2.6
  // (referendums, initiatives, and recall) are near-1:1. See data/mi.ts.
  {
    id: "civics.mi-state-structure",
    claim: "Teaches Michigan's Constitution of 1963 (effective January 1, 1964); a Legislature of 38 senators (4-year terms) and 110 representatives (2-year terms) under the 12-year combined term limit of Proposal 1 of 2022; an executive of a Governor and joint-ticket Lieutenant Governor, a separately elected Secretary of State and Attorney General, and a Governor-appointed Treasurer; how a bill becomes a Michigan law; and the line-item veto with a two-thirds override.",
    courseSlugs: ["state-civics-mi"],
    lessons: [
      "Michigan Civics, Lesson 1 · Michigan's Constitution of 1963 and its direct democracy",
      "Michigan Civics, Lesson 2 · The three branches of Michigan government",
      "Michigan Civics, Lesson 4 · How a bill becomes a Michigan law",
    ],
  },
  {
    id: "civics.mi-courts",
    claim: "Teaches Michigan's distinctive judicial selection: a seven-justice Supreme Court elected to 8-year terms on a NONPARTISAN ballot, yet nominated by the political parties at their conventions — a 'partisan nomination, nonpartisan election' hybrid — with nonpartisan-ballot Court of Appeals and trial judges and gubernatorial appointment to fill mid-term vacancies.",
    courseSlugs: ["state-civics-mi"],
    lessons: ["Michigan Civics, Lesson 3 · How Michigan chooses its judges (the nonpartisan-ballot quirk)"],
  },
  {
    id: "civics.mi-redistricting",
    claim: "Teaches Michigan's Independent Citizens Redistricting Commission — created by Proposal 2 of 2018 to draw the state House, state Senate, and U.S. Congressional maps — a body of 13 randomly selected citizens (four Democratic, four Republican, five affiliated with neither) that excludes politicians and lobbyists and works in public, a national first that moved map-drawing out of the Legislature.",
    courseSlugs: ["state-civics-mi"],
    lessons: ["Michigan Civics, Lesson 5 · Redistricting: Michigan's Independent Citizens Redistricting Commission"],
  },
  {
    id: "civics.mi-direct-democracy",
    claim: "Teaches Michigan's strong direct democracy — the constitutional initiative (including the quirk that a citizen 'initiated law' goes to the Legislature first, which may enact it as written before it would reach the ballot), the referendum to reject a statute, and the recall of most elected officials — as tools that make the voters themselves a lawmaking body.",
    courseSlugs: ["state-civics-mi"],
    lessons: [
      "Michigan Civics, Lesson 1 · Michigan's Constitution of 1963 and its direct democracy",
      "Michigan Civics, Lesson 4 · How a bill becomes a Michigan law",
      "Michigan Civics, Lesson 8 · How to take part where you live",
    ],
  },
  {
    id: "civics.mi-elections",
    claim: "Teaches Michigan's voter-approved election access: no-reason absentee voting and automatic and same-day registration (Proposal 3 of 2018), and nine days of early in-person voting, state-funded absentee postage, secure drop boxes, and a photo-ID-or-affidavit rule (Proposal 2 of 2022), run by more than 1,500 local city and township clerks, with a standing flag to confirm current rules at michigan.gov/sos.",
    courseSlugs: ["state-civics-mi"],
    lessons: ["Michigan Civics, Lesson 6 · Elections and voting in Michigan"],
  },
  {
    id: "civics.mi-local-government",
    claim: "Teaches Michigan local government as Michigan's: 83 counties run by an elected Board of Commissioners with separately elected sheriff, clerk, treasurer, prosecutor, and register of deeds; strong general-law and charter townships governing every area outside a city; home-rule cities under the Home Rule City Act of 1909; villages; and special and school districts.",
    courseSlugs: ["state-civics-mi"],
    lessons: ["Michigan Civics, Lesson 7 · Local government: counties, cities, villages, and townships"],
  },
  {
    id: "civics.mi-get-involved",
    claim: "Teaches getting involved where you live, Michigan edition — registering and voting with the state's full menu of options, contacting your legislators while bills are in committee, showing up at local boards, using citizen initiative/referendum/recall petitions, applying to serve on boards (including the redistricting commission), and running for local office.",
    courseSlugs: ["state-civics-mi"],
    lessons: ["Michigan Civics, Lesson 8 · How to take part where you live"],
  },
  // ── State civics: North Carolina (state-civics-nc was written FROM North Carolina's own sources) ──
  // NOTE: North Carolina's high-school civics anchor is the graduation-required "Founding Principles
  // of the United States of America and North Carolina: Civic Literacy" course (NCDPI 4318), whose
  // 2021 standards weave North Carolina explicitly through several otherwise federal-facing objectives —
  // CL.C&G.4.1 and CL.C&G.4.3 name "the United States and North Carolina" judicial systems and
  // constitutions, CL.C&G.2.2 / CL.C&G.2.3 reach federalism and the types of local government, and
  // CL.C&G.3.7 reaches elections "at the national, state, and local levels" — so unlike Arkansas and
  // California, the North Carolina flagship's structure lessons DO have a home, mapped there as partial
  // (the North Carolina half is taught; the federal half lives in the general civics catalog).
  {
    id: "civics.nc-constitution",
    claim: "Teaches North Carolina's 1971 (third) constitution and its amendment path — the General Assembly proposes by a three-fifths vote of each house, then the voters ratify — and that North Carolina has no citizen initiative.",
    courseSlugs: ["state-civics-nc"],
    lessons: [
      "North Carolina Civics, Lesson 1 · North Carolina's 1971 constitution, and no citizen initiative",
    ],
  },
  {
    id: "civics.nc-council-of-state",
    claim: "Teaches North Carolina's plural elected executive — the Council of State, ten separately-elected statewide officers — and a General Assembly of a 120-member House and a 50-member Senate.",
    courseSlugs: ["state-civics-nc"],
    lessons: ["North Carolina Civics, Lesson 2 · The three branches, and the Council of State"],
  },
  {
    id: "civics.nc-courts",
    claim: "Teaches that North Carolina elects its appellate judges (the Supreme Court and the Court of Appeals) in PARTISAN statewide races to 8-year terms, not by merit selection and not in nonpartisan races.",
    courseSlugs: ["state-civics-nc"],
    lessons: [
      "North Carolina Civics, Lesson 3 · North Carolina's courts: appellate judges elected in PARTISAN races",
    ],
  },
  {
    id: "civics.nc-local-government",
    claim: "Teaches North Carolina local government as North Carolina's: 100 counties under elected Boards of Commissioners, limited home rule (a Dillon's Rule state), municipalities, and no townships.",
    courseSlugs: ["state-civics-nc"],
    lessons: [
      "North Carolina Civics, Lesson 5 · Local government: 100 counties, limited home rule, no townships",
      "North Carolina Civics, Lesson 8 · Get involved where you live in North Carolina",
    ],
  },
  {
    id: "civics.nc-elections",
    claim: "Teaches North Carolina's election specifics: early one-stop voting with same-day registration, no-excuse absentee voting, a 25-day regular registration deadline, and the heavily-litigated photo voter-ID requirement (SB 824).",
    courseSlugs: ["state-civics-nc"],
    lessons: [
      "North Carolina Civics, Lesson 6 · Elections in NC: early one-stop voting, no-excuse absentee, 25-day deadline",
      "North Carolina Civics, Lesson 7 · Photo voter ID: recently in effect after litigation",
    ],
  },
  {
    id: "civics.nc-get-involved",
    claim: "Teaches getting involved where you live, North Carolina edition — and why the General Assembly is the main lever for changing state law (no citizen initiative and a comparatively limited veto).",
    courseSlugs: ["state-civics-nc"],
    lessons: ["North Carolina Civics, Lesson 8 · Get involved where you live in North Carolina"],
  },

  // ── State civics: Virginia (state-civics-va was written FROM Virginia's own sources) ──
  // NOTE: Virginia's high-school civics anchor is the "Virginia and United States Government" course
  // (GOVT), whose 2023 SOL reach Virginia's own government squarely through GOVT.10 ("the state and
  // local governments as described in the Constitution of Virginia") — so, better than most, the
  // Virginia flagship's structure lessons have a genuine home there (GOVT.10a-d, GOVT.10f), mapped
  // full. The rest of the GOVT course is federal, mapped to the general civics catalog; data/va.ts
  // publishes the gaps.
  {
    id: "civics.va-constitution",
    claim: "Teaches Virginia's Constitution of 1971 (its seventh), the meaning of 'Commonwealth,' and its deliberately slow amendment path — passage by two separately-elected General Assemblies then a voter referendum — with no citizen initiative.",
    courseSlugs: ["state-civics-va"],
    lessons: [
      "Virginia Civics, Lesson 1 · Virginia's constitution and 'the Commonwealth'",
      "Virginia Civics, Lesson 5 · How a bill becomes a Virginia law (and why there's no citizen initiative)",
    ],
  },
  {
    id: "civics.va-three-branches",
    claim: "Teaches Virginia's General Assembly (a 100-member House of Delegates and a 40-member Senate, the oldest continuous law-making body in the New World) and its three separately-elected statewide executives — Governor, Lieutenant Governor, and Attorney General.",
    courseSlugs: ["state-civics-va"],
    lessons: ["Virginia Civics, Lesson 2 · The three branches of Virginia government"],
  },
  {
    id: "civics.va-governor-one-term",
    claim: "Teaches Virginia's unique rule that the Governor may not serve two consecutive terms — the only state with this bar — though a former Governor may return after sitting out.",
    courseSlugs: ["state-civics-va"],
    lessons: ["Virginia Civics, Lesson 3 · The Governor who cannot serve two terms in a row"],
  },
  {
    id: "civics.va-courts-legislature",
    claim: "Teaches that Virginia's judges are elected by the General Assembly (the Legislature) — Supreme Court of Virginia justices to 12-year terms — one of only two states (with South Carolina) to choose judges this way.",
    courseSlugs: ["state-civics-va"],
    lessons: ["Virginia Civics, Lesson 4 · How Virginia chooses its judges (elected by the Legislature)"],
  },
  {
    id: "civics.va-bill-process",
    claim: "Teaches how a bill becomes a Virginia law, including the Governor's distinctive power to propose amendments and send a bill back to the Assembly, and the two-thirds veto override.",
    courseSlugs: ["state-civics-va"],
    lessons: ["Virginia Civics, Lesson 5 · How a bill becomes a Virginia law (and why there's no citizen initiative)"],
  },
  {
    id: "civics.va-local-government",
    claim: "Teaches Virginia local government as Virginia's: a Dillon's Rule state of 95 counties PLUS 38 independent cities that belong to no county (most of the nation's independent cities), with the town-versus-city distinction.",
    courseSlugs: ["state-civics-va"],
    lessons: ["Virginia Civics, Lesson 6 · Local government: Dillon's Rule and Virginia's independent cities"],
  },
  {
    id: "civics.va-elections",
    claim: "Teaches Virginia's election specifics: odd-year statewide races (the year after each presidential election), no-excuse early voting, changing voter-ID rules, and the bipartisan Virginia Redistricting Commission.",
    courseSlugs: ["state-civics-va"],
    lessons: ["Virginia Civics, Lesson 7 · Elections, redistricting, and how to take part"],
  },
  {
    id: "civics.va-get-involved",
    claim: "Teaches getting involved where you live, Virginia edition — the short Richmond session, county boards of supervisors, city councils, and Dillon's-Rule advocacy at both the local and state levels.",
    courseSlugs: ["state-civics-va"],
    lessons: ["Virginia Civics, Lesson 7 · Elections, redistricting, and how to take part"],
  },
  // ── State civics: Washington (state-civics-wa was written FROM Washington's own sources) ──
  // Unlike California or Arkansas, Washington's HIGH-SCHOOL Civics standard C2.11-12.2 explicitly
  // names "Washington state" constitutions, so the flagship's Washington-structure lessons have a
  // genuine state code to cite (see data/wa.ts). Washington is a strong direct-democracy, all-mail,
  // top-two-primary, plural-executive state; the flagship teaches all four.
  {
    id: "civics.wa-constitution-direct-democracy",
    claim: "Teaches Washington's Constitution of 1889 and its strong direct democracy — the Initiative to the People and the Initiative to the Legislature (a distinction unique to a handful of states), the referendum, and the recall — as the through-line that makes voters a lawmaking body.",
    courseSlugs: ["state-civics-wa"],
    lessons: [
      "Washington Civics, Lesson 1 · Washington's Constitution of 1889 and its direct democracy",
    ],
  },
  {
    id: "civics.wa-plural-executive",
    claim: "Teaches Washington's 'plural' executive: nine separately elected statewide officials (Governor, Lieutenant Governor, Secretary of State, Attorney General, Treasurer, Auditor, Superintendent of Public Instruction, Commissioner of Public Lands, and Insurance Commissioner), so executive power is divided rather than concentrated in the Governor.",
    courseSlugs: ["state-civics-wa"],
    lessons: [
      "Washington Civics, Lesson 2 · Washington's 'plural' executive: nine elected statewide officials",
    ],
  },
  {
    id: "civics.wa-courts-legislature",
    claim: "Teaches Washington's nonpartisan elected judiciary (a nine-justice Supreme Court elected to 6-year terms) and its Legislature — 49 senators and 98 representatives from 49 shared districts, each electing one senator and two representatives — plus the Governor's line-item veto and the two-thirds override.",
    courseSlugs: ["state-civics-wa"],
    lessons: ["Washington Civics, Lesson 3 · The courts and the Legislature"],
  },
  {
    id: "civics.wa-bill-process",
    claim: "Teaches Washington's two roads to law: a bill through the Legislature, or the voters directly via an Initiative to the People, an Initiative to the Legislature, or a referendum.",
    courseSlugs: ["state-civics-wa"],
    lessons: ["Washington Civics, Lesson 4 · How a bill becomes a Washington law"],
  },
  // NOTE: Washington's all-mail voting and top-two primary (flagship Lesson 5) are the state's most
  // distinctive civics content, but Washington's HS Civics standards have no discrete
  // election-administration standard, so — like the Arkansas/California flagships' uncited structure
  // — that lesson carries NO claim here; data/wa.ts publishes the gap in its notClaimed list.
  {
    id: "civics.wa-local-and-taxes",
    claim: "Teaches Washington's local government (39 counties, home-rule charter counties and code cities, special districts) and its distinctive, contested tax structure (no personal state income tax under the constitution's uniformity clause; the 2021 capital-gains tax upheld in 2023), flagging the tax question as actively litigated.",
    courseSlugs: ["state-civics-wa"],
    lessons: ["Washington Civics, Lesson 6 · Taxes, local government, and how to take part"],
  },
  {
    id: "civics.wa-get-involved",
    claim: "Teaches taking part in Washington: voting the ballot mailed to you, using the state's unusually open initiative and referendum on-ramps, showing up at county/city/school-board/port-district meetings, contacting your one senator and two representatives, and running locally.",
    courseSlugs: ["state-civics-wa"],
    lessons: ["Washington Civics, Lesson 6 · Taxes, local government, and how to take part"],
  },

  // ── State civics: New Jersey (state-civics-nj was written FROM New Jersey's own sources) ──
  // Unlike California or Arkansas, New Jersey's 2020 Social Studies standards NAME the New Jersey
  // Constitution (of 1776 and of 1947), so the flagship's constitutional-history lessons have a
  // genuine state code to cite (6.1.12.CivicsPI.2.a and .13.a — see data/nj.ts). New Jersey's
  // signature is a deliberately STRONG governor and the ABSENCE of direct democracy.
  {
    id: "civics.nj-constitution",
    claim: "Teaches New Jersey's Constitution of 1947 — its third, after 1776 and 1844 — whose signature achievement was to streamline and strengthen the executive branch, the through-line of New Jersey civics.",
    courseSlugs: ["state-civics-nj"],
    lessons: ["New Jersey Civics, Lesson 1 · New Jersey's Constitution of 1947"],
  },
  {
    id: "civics.nj-strong-governor",
    claim: "Teaches why New Jersey's Governor is considered one of the strongest in the nation — the Governor APPOINTS the Attorney General, Secretary of State, Treasurer, and most top officials (with Senate confirmation) rather than voters electing them — and why New Jersey had no Lieutenant Governor until 2010 (now a joint ticket).",
    courseSlugs: ["state-civics-nj"],
    lessons: [
      "New Jersey Civics, Lesson 2 · New Jersey's powerful Governor (and the 2010 Lieutenant Governor)",
    ],
  },
  {
    id: "civics.nj-legislature-courts",
    claim: "Teaches New Jersey's Legislature (40 senators and 80 Assembly members from 40 shared districts, each electing one senator and two Assembly members, on the '2-year, 4-year, 4-year' Senate cycle) and its APPOINTED judiciary — Governor nominates, Senate confirms, an initial 7-year term then tenure to age 70 — with the seven-member Supreme Court and the 'senatorial courtesy' custom.",
    courseSlugs: ["state-civics-nj"],
    lessons: ["New Jersey Civics, Lesson 3 · The Legislature and the appointed judiciary"],
  },
  // NOTE: New Jersey's state lawmaking process and no-initiative rule (flagship Lesson 4) and its
  // 21-county / Faulkner-Act home-rule structure (Lesson 5) are taught, but New Jersey's 2020
  // Social Studies standards have no state-lawmaking or local-government-structure code at grade 12,
  // so — like the Arkansas/California flagships' uncited structure — those lessons carry NO claim
  // here; data/nj.ts publishes the gap in its notClaimed list.
  {
    id: "civics.nj-elections-involved",
    claim: "Teaches New Jersey's odd-year gubernatorial elections (like Virginia, separate from the presidential cycle), its expanded access (in-person early voting added 2021 alongside vote-by-mail), county-administered rules, and how to take part where you live.",
    courseSlugs: ["state-civics-nj"],
    lessons: ["New Jersey Civics, Lesson 6 · Elections and how to take part"],
  },
  // ── State civics: Massachusetts (state-civics-ma was written FROM Massachusetts's own sources) ──
  // NOTE: Massachusetts's 2018 History and Social Science Framework is one of the strongest in the
  // nation for reaching a state's OWN government: the grade 8 Civics course (Topic 6) and the US
  // Government and Politics elective (Topic 2) name the "Massachusetts Constitution," the
  // "Commonwealth of Massachusetts," the General Court, the Supreme Judicial Court, and open town
  // meeting EXPLICITLY, so the flagship's Massachusetts-structure lessons have genuine codes to
  // cite. But the flagship's most distinctive facts — the elected Governor's Council's confirmation
  // role, the appoint-and-serve-to-70 judiciary with no judicial elections, the INDIRECT initiative
  // and the right of free petition, the 2022 VOTES Act, and the counties whose governments were
  // abolished around 1997–2000 — have no Massachusetts-specific code, and data/ma.ts publishes that
  // gap in its notClaimed list.
  {
    id: "civics.ma-constitution",
    claim:
      "Teaches Massachusetts's Constitution of 1780 — the oldest functioning written constitution in the world, principally drafted by John Adams and still in force — and that the Commonwealth's own constitution (with its Article I Declaration of Rights) sits alongside the U.S. Constitution as a source of powers and rights.",
    courseSlugs: ["state-civics-ma"],
    lessons: [
      "Massachusetts Civics, Lesson 1 · The Constitution of 1780, the world's oldest functioning one",
    ],
  },
  {
    id: "civics.ma-state-structure",
    claim:
      "Teaches Massachusetts's three branches as Massachusetts's: the bicameral General Court (a 160-member House and a 40-member Senate), a plural executive (a joint-ticket Governor and Lieutenant Governor with a separately elected Attorney General, Secretary of the Commonwealth, Treasurer, and Auditor, plus the elected Governor's Council), the two-thirds veto override, and the Supreme Judicial Court.",
    courseSlugs: ["state-civics-ma"],
    lessons: [
      "Massachusetts Civics, Lesson 2 · The three branches and the 'General Court'",
      "Massachusetts Civics, Lesson 3 · The Governor's Council and how Massachusetts picks judges",
    ],
  },
  {
    id: "civics.ma-courts-appointed",
    claim:
      "Teaches Massachusetts's distinctive judicial selection: the Governor nominates, the elected eight-member Governor's Council confirms, and a judge then serves until mandatory retirement at age 70 — with no judicial elections and no fixed re-appointment.",
    courseSlugs: ["state-civics-ma"],
    lessons: [
      "Massachusetts Civics, Lesson 3 · The Governor's Council and how Massachusetts picks judges",
    ],
  },
  {
    id: "civics.ma-local-government",
    claim:
      "Teaches Massachusetts local government as Massachusetts's: the town-meeting tradition (open town meeting, where any registered voter votes directly on the town budget and bylaws), strong home rule, cities and towns, and the state's 14 counties — several of whose county governments were abolished around 1997–2000.",
    courseSlugs: ["state-civics-ma"],
    lessons: [
      "Massachusetts Civics, Lesson 5 · Local government: towns, cities, and Massachusetts's shrinking counties",
      "Massachusetts Civics, Lesson 6 · Elections and how to take part",
    ],
  },

  // ── State civics: Tennessee (state-civics-tn was written FROM Tennessee's own sources) ──
  // NOTE: Tennessee's 2019 Academic Standards for Social Studies include a dedicated "Tennessee
  // State and Local Government" strand in the required United States Government and Civics course
  // (GC.28–GC.30), so the flagship's Tennessee-structure lessons have genuine codes to cite. But
  // the flagship's most distinctive facts — the Attorney General appointed by the state Supreme
  // Court (unique in the nation), the Senate Speaker who holds the title "Lieutenant Governor," the
  // Secretary of State/Treasurer/Comptroller elected by the Legislature, the weak simple-majority
  // veto override, the "Tennessee Plan" judiciary, the ABSENCE of a citizen initiative, and
  // Tennessee's photo-ID / excuse-required-absentee voting rules — are not separately coded, so
  // data/tn.ts publishes that gap in its notClaimed list.
  {
    id: "civics.tn-state-structure",
    claim:
      "Teaches Tennessee's three branches as Tennessee's: the General Assembly (a 99-member House and a 33-member Senate); a highly unusual executive in which the Governor is the only statewide-elected official, the Senate Speaker holds the title “Lieutenant Governor,” the Secretary of State, Treasurer, and Comptroller are elected by the Legislature, and — uniquely in the nation — the Attorney General is appointed by the state Supreme Court; the weak simple-majority veto override; and the “Tennessee Plan” appointment-then-retention judiciary.",
    courseSlugs: ["state-civics-tn"],
    lessons: [
      "Tennessee Civics, Lesson 1 · Tennessee's Constitution of 1870 (and its hard-to-amend rule)",
      "Tennessee Civics, Lesson 2 · Tennessee's unusual executive: one elected officer, and a Speaker called 'Lieutenant Governor'",
      "Tennessee Civics, Lesson 3 · The General Assembly and the 'Tennessee Plan' for judges",
    ],
  },
  {
    id: "civics.tn-local-government",
    claim:
      "Teaches Tennessee local government as Tennessee's: 95 counties under an elected county commission and a county mayor, cities and towns with optional home rule, and the consolidated metropolitan city-county governments (most famously Metro Nashville-Davidson County).",
    courseSlugs: ["state-civics-tn"],
    lessons: [
      "Tennessee Civics, Lesson 5 · Local government: 95 counties, cities, and metro government",
    ],
  },

  // ── State civics: Missouri (state-civics-mo was written FROM Missouri's own sources) ──
  // NOTE: Missouri's high-school Government course (Missouri Learning Standards for Social Studies,
  // 2016) reaches Missouri's OWN government explicitly through 9-12.GV.3.GS.F ("Compare the
  // structure and functions of local, state and federal governments"), so — unlike the abstract-
  // concept states — the Missouri flagship's structure lessons have a genuine home, mapped there.
  // Missouri withdrew from the Common Core, so its ELA/Math are Missouri-specific and its science is
  // Missouri's own (not NGSS); data/mo.ts publishes those as deferred gaps, not denials.
  {
    id: "civics.mo-missouri-plan",
    claim:
      "Teaches the 'Missouri Plan' — Missouri's nationally-copied merit-selection-plus-retention method of choosing judges (a nonpartisan nominating commission sends the Governor a short list of the most qualified, the Governor appoints from that list, and the judge then faces voters in periodic nonpartisan yes/no retention elections), adopted by Missouri voters in 1940 and since copied in some form by many states.",
    courseSlugs: ["state-civics-mo"],
    lessons: [
      "Missouri Civics, Lesson 1 · The 'Missouri Plan': merit selection plus retention (adopted 1940)",
      "Missouri Civics, Lesson 5 · The yes/no retention vote you cast on many Missouri judges",
    ],
  },
  {
    id: "civics.mo-state-structure",
    claim:
      "Teaches Missouri's three branches as Missouri's: the Constitution of 1945 (its fourth); a plural executive of six separately-elected statewide officers (Governor, Lieutenant Governor, Secretary of State, State Auditor, State Treasurer, and Attorney General, who can be of different parties and check one another); a General Assembly of a 163-member House (2-year terms) and a 34-member Senate (4-year terms) under an 8-year-per-chamber term limit; how a bill becomes a Missouri law; and the two-thirds veto override.",
    courseSlugs: ["state-civics-mo"],
    lessons: [
      "Missouri Civics, Lesson 2 · Missouri's plural executive: six statewide officers",
      "Missouri Civics, Lesson 3 · The General Assembly and how a bill becomes law",
    ],
  },
  {
    id: "civics.mo-direct-democracy",
    claim:
      "Teaches Missouri's citizen tools of direct democracy — the initiative (used to place a statute OR a constitutional amendment on the ballot) and the referendum (used to reject a law the General Assembly passed) — as a real, regularly-used second lawmaking route beside the Legislature.",
    courseSlugs: ["state-civics-mo"],
    lessons: [
      "Missouri Civics, Lesson 3 · Initiative and referendum: the citizen's second lawmaking route",
      "Missouri Civics, Lesson 5 · Using the initiative and referendum where you live",
    ],
  },
  {
    id: "civics.mo-local-government",
    claim:
      "Teaches Missouri local government as Missouri's: 114 counties (governed by an elected county commission plus separately-elected sheriff, clerk, collector, assessor, and prosecutor, some under home-rule charters) PLUS the independent City of St. Louis, which belongs to no county (it separated from St. Louis County in 1876), so 'the City' and 'the County' of St. Louis are two separate governments.",
    courseSlugs: ["state-civics-mo"],
    lessons: [
      "Missouri Civics, Lesson 4 · Local government: 114 counties and the independent City of St. Louis",
      "Missouri Civics, Lesson 5 · Show up locally (remember St. Louis City and County are separate)",
    ],
  },
  {
    id: "civics.mo-elections",
    claim:
      "Teaches Missouri's election specifics — a photo-ID requirement for in-person voting (with provisional-ballot fallbacks), in-person absentee/early voting, and absentee voting under certain conditions, all administered by county clerks and election boards — flagged as time-sensitive and pointing to sos.mo.gov for the current rules.",
    courseSlugs: ["state-civics-mo"],
    lessons: [
      "Missouri Civics, Lesson 5 · Elections in Missouri: photo ID, absentee/early voting, county administration",
    ],
  },
  {
    id: "civics.mo-get-involved",
    claim:
      "Teaches getting involved where you live, Missouri edition — registering and voting, circulating an initiative or referendum, showing up at county commissions, city councils, and school boards, contacting your one Representative and one Senator in Jefferson City, researching the judicial retention votes on your ballot, and running for local office.",
    courseSlugs: ["state-civics-mo"],
    lessons: ["Missouri Civics, Lesson 5 · Elections and how to take part in Missouri"],
  },

  // ── State civics: Maryland (state-civics-md was written FROM Maryland's own sources) ──
  // NOTE: Maryland's required High School American Government course (Maryland Social Studies
  // Framework, June 2025) reaches Maryland's OWN government explicitly — GOV.2.1.a names "the
  // Maryland General Assembly," and the legislative/executive/judicial structure indicators name
  // "Federal and Maryland State Government" in their assessment limits — so the Maryland flagship's
  // structure lessons have a genuine home, mapped there rather than to abstract concepts. Maryland
  // adopted the Common Core (as the Maryland College and Career Ready Standards) for ELA and, as an
  // NGSS lead state, the NGSS for science; data/md.ts adopts both from ../shared and publishes math
  // as unclaimed. The flagship's most distinctive fact — Maryland's nation-strongest executive
  // budget power — has no code of its own; it is claimed through the executive-comparison indicator
  // (GOV.3.3.a) and published in md.ts's notClaimed list.
  {
    id: "civics.md-budget-power",
    claim:
      "Teaches Maryland's most distinctive civic feature — the extraordinary budget power of its Governor, widely described as the strongest gubernatorial budget authority in the nation: under Maryland's executive-budget system (in the Constitution since 1916) the Governor proposes the budget and the General Assembly can generally only CUT or reduce items, not add new spending or move money to new purposes, which makes the Governor unusually dominant over state finances.",
    courseSlugs: ["state-civics-md"],
    lessons: [
      "Maryland Civics, Lesson 1 · Maryland's Governor: the strongest budget power in the nation",
    ],
  },
  {
    id: "civics.md-state-structure",
    claim:
      "Teaches Maryland's three branches as Maryland's: the Constitution of 1867 (its fourth); a compact plural executive (a joint-ticket Governor and Lieutenant Governor with a separately elected Attorney General and Comptroller, while the Secretary of State is appointed by the Governor and the Treasurer is elected by the General Assembly); a bicameral General Assembly of a 141-member House of Delegates and a 47-member Senate serving 4-year terms in a fixed 90-day annual session; and the three-fifths veto override.",
    courseSlugs: ["state-civics-md"],
    lessons: ["Maryland Civics, Lesson 2 · The executive and the General Assembly"],
  },
  {
    id: "civics.md-courts",
    claim:
      "Teaches Maryland's courts as Maryland's, including the 2022 renaming voters approved: the highest court became the “Supreme Court of Maryland” (before 2022 the Court of Appeals) and the intermediate court the “Appellate Court of Maryland”; appellate judges are appointed by the Governor (advised by a nominating commission) with Senate confirmation and then face yes/no retention elections, while Circuit Court trial judges run in contested elections — a blend of merit appointment and election.",
    courseSlugs: ["state-civics-md"],
    lessons: ["Maryland Civics, Lesson 3 · Maryland's courts and a 2022 name change"],
  },
  {
    id: "civics.md-referendum",
    claim:
      "Teaches Maryland's distinctive citizen check — the “petition to referendum,” by which voters gather signatures to suspend a law the General Assembly just passed and put it to a statewide vote — and that Maryland has NO citizen initiative to propose new laws, so the citizen power here is a veto (reject a law), not an initiative (start one); taught alongside how a bill becomes a Maryland law and the three-fifths veto override.",
    courseSlugs: ["state-civics-md"],
    lessons: [
      "Maryland Civics, Lesson 4 · How a bill becomes law, and Maryland's referendum (but no initiative)",
    ],
  },
  {
    id: "civics.md-local-government",
    claim:
      "Teaches Maryland local government as Maryland's: 23 counties (many of them home-rule “charter” counties like Montgomery and Baltimore County, with elected councils and county executives) PLUS the independent City of Baltimore, which belongs to no county and is a county-equivalent with its own government — so Baltimore City and Baltimore County are two separate governments.",
    courseSlugs: ["state-civics-md"],
    lessons: [
      "Maryland Civics, Lesson 5 · Local government, independent Baltimore, and how to take part",
    ],
  },
  {
    id: "civics.md-get-involved",
    claim:
      "Teaches taking part where you live, Maryland edition — registering and voting with Maryland's early in-person voting, no-excuse mail-in ballots, and same-day registration; joining a petition to referendum to challenge a new law; showing up at county councils, city councils, and school boards; contacting your Annapolis Delegates and Senator; and running for local office — flagged as time-sensitive and pointing to elections.maryland.gov.",
    courseSlugs: ["state-civics-md"],
    lessons: [
      "Maryland Civics, Lesson 5 · Local government, independent Baltimore, and how to take part",
    ],
  },

  // ── State civics: Colorado (state-civics-co was written FROM Colorado's own sources) ──
  // NOTE: Colorado's High School Civics standard (2020 Colorado Academic Standards, Social Studies
  // Standard 4) is CONCEPT-based — like Illinois's and Ohio's abstract standards, it names "American
  // government" and "various levels of government" rather than Colorado's own, so the Colorado
  // flagship's Colorado-specific lessons (TABOR, the initiative/referendum/recall, the GAVEL
  // amendment, merit-selection judges, all-mail elections, Denver/Broomfield city-counties) map as
  // genuine INSTANCES of those generic outcomes (e.g. SS.HS.4.1.b "use the structure and functions
  // of various levels of government to shape policy" is exactly what Colorado's direct democracy
  // does). Colorado writes its OWN ELA (Reading, Writing, and Communicating) and its OWN science
  // (NGSS-influenced, not adopted verbatim), so — unlike Maryland — there is no shared framework to
  // adopt; both are deferred in data/co.ts's notClaimed, fetch-and-verify-or-don't-cite. The
  // flagship's signature fact, TABOR, has no code of its own and is claimed through SS.HS.4.1.b.
  {
    id: "civics.co-direct-democracy",
    claim:
      "Teaches Colorado as a state where the voters are themselves a lawmaking body: the Constitution of 1876 (Colorado is the “Centennial State,” admitted in the nation's 100th year) and the direct-democracy tools added in 1910 — the initiative (used to enact a statute OR a constitutional amendment straight at the ballot, making Colorado's constitution one of the most frequently amended in the nation), the referendum (to reject a law the Legislature passed), and the recall (to remove an elected official before the term ends).",
    courseSlugs: ["state-civics-co"],
    lessons: [
      "Colorado Civics, Lesson 1 · Colorado's Constitution of 1876 and its direct democracy",
    ],
  },
  {
    id: "civics.co-tabor",
    claim:
      "Teaches Colorado's signature constitutional rule, the Taxpayer's Bill of Rights (TABOR, passed by citizen initiative in 1992): state and local governments cannot raise a tax, impose a new tax, or increase a rate without a direct vote of the people, and revenue collected above a formula-based cap (roughly inflation plus population growth) must generally be refunded to taxpayers unless voters agree to keep it (“de-Brucing”) — making the voters the gatekeepers of taxation and spending.",
    courseSlugs: ["state-civics-co"],
    lessons: [
      "Colorado Civics, Lesson 4 · TABOR: the Taxpayer's Bill of Rights (Colorado's signature rule)",
      "Colorado Civics, Lesson 5 · How a bill becomes a Colorado law",
    ],
  },
  {
    id: "civics.co-state-structure",
    claim:
      "Teaches Colorado's three branches as Colorado's: a General Assembly of a 35-member Senate (4-year terms) and a 65-member House (2-year terms), each capped at 8 consecutive years, under the distinctive “GAVEL” amendment (1988) that guarantees every bill a committee hearing; a joint-ticket Governor and Lieutenant Governor with a separately elected Secretary of State, Attorney General, and Treasurer; a two-thirds veto override plus the line-item veto on appropriations; and how a bill becomes a Colorado law by two routes — the Legislature, or the voters directly.",
    courseSlugs: ["state-civics-co"],
    lessons: [
      "Colorado Civics, Lesson 2 · The three branches of Colorado government",
      "Colorado Civics, Lesson 5 · How a bill becomes a Colorado law",
    ],
  },
  {
    id: "civics.co-courts",
    claim:
      "Teaches how Colorado chooses its judges — merit selection followed by retention (often called the “Missouri Plan”): a nonpartisan nominating commission sends the Governor a short list of the most qualified, the Governor must appoint from that list, and the judge then faces the voters in nonpartisan yes/no retention elections (Colorado Supreme Court justices on 10-year terms), blending professional vetting with public accountability and avoiding big-money contested judicial races.",
    courseSlugs: ["state-civics-co"],
    lessons: [
      "Colorado Civics, Lesson 3 · How Colorado chooses its judges (merit selection + retention)",
    ],
  },
  {
    id: "civics.co-elections",
    claim:
      "Teaches Colorado's elections as Colorado's: since 2013 a ballot is mailed to every registered voter for every election, paired with same-day and automatic voter registration and 16/17-year-old pre-registration, returnable by mail, drop box, or voter service center; and the independent redistricting commissions (Amendments Y and Z of 2018, made of Democrats, Republicans, and unaffiliated members) that draw Colorado's congressional and legislative maps instead of the Legislature.",
    courseSlugs: ["state-civics-co"],
    lessons: ["Colorado Civics, Lesson 6 · Elections, local government, and how to take part"],
  },
  {
    id: "civics.co-local-government",
    claim:
      "Teaches Colorado local government as Colorado's: 64 counties governed by elected boards of county commissioners, home-rule cities and counties that write their own charters, the unusual consolidated city-and-county governments of Denver and Broomfield, and special districts (schools, water, fire, transit) — each of which, under TABOR, needs voter approval to raise taxes.",
    courseSlugs: ["state-civics-co"],
    lessons: ["Colorado Civics, Lesson 6 · Elections, local government, and how to take part"],
  },
  {
    id: "civics.co-get-involved",
    claim:
      "Teaches taking part where you live, Colorado edition — voting the ballot mailed to you (tracking it at sos.state.co.us), signing, circulating, or filing an initiative or referendum, showing up at county commissions, city councils, and school boards (where TABOR tax questions come to you on the ballot), testifying on a bill the GAVEL rule guarantees will be heard, and running for local office.",
    courseSlugs: ["state-civics-co"],
    lessons: ["Colorado Civics, Lesson 6 · Elections, local government, and how to take part"],
  },
  // ── State civics: Minnesota (state-civics-mn was written FROM Minnesota's own sources) ──
  // NOTE: Minnesota's 2021 K-12 Academic Standards in Social Studies (Citizenship and Government
  // strand, high school) name Minnesota's OWN government explicitly — 9.1.4.7 ("the powers and
  // operations of the State of Minnesota government as defined in its constitution") and 9.1.4.8
  // ("the powers and operations of local government in Minnesota") — so, like Michigan and Missouri
  // and unlike the abstract-concept states, the Minnesota flagship's structure lessons have a
  // genuine home. Minnesota is a notable framework case: it did NOT adopt the Common Core for MATH
  // (it kept its own math standards), and its once-Common-Core ELA has since been replaced by
  // Minnesota's own 2020 ELA standards; data/mn.ts publishes those as deferred gaps, not denials.
  {
    id: "civics.mn-turnout-registration",
    claim:
      "Teaches Minnesota's participatory signature: it frequently leads the nation in voter turnout, powered by being an early adopter of Election-Day (same-day) voter registration (adopted 1974), which lets an eligible Minnesotan register and vote at the polls on the same day, paired with no-excuse early/absentee voting.",
    courseSlugs: ["state-civics-mn"],
    lessons: ["Minnesota Civics, Lesson 1 · Why Minnesota leads the nation in voter turnout"],
  },
  {
    id: "civics.mn-dfl-nonpartisan",
    claim:
      "Teaches two Minnesota political distinctives: the uniquely named Democratic-Farmer-Labor Party (DFL), the main left-of-center party, formed by a 1944 merger of the Minnesota Democratic Party and the Farmer-Labor Party; and that Minnesota ran an officially NONPARTISAN Legislature for 60 years (1913 to 1973), with legislators serving without party labels, before returning to a partisan Legislature in 1973.",
    courseSlugs: ["state-civics-mn"],
    lessons: [
      "Minnesota Civics, Lesson 2 · Two Minnesota distinctives: the DFL and a nonpartisan legislature (1913 to 1973)",
    ],
  },
  {
    id: "civics.mn-state-structure",
    claim:
      "Teaches Minnesota's three branches as Minnesota's: the Constitution of 1858; a plural executive of a joint-ticket Governor and Lieutenant Governor plus a separately elected Attorney General, Secretary of State, and State Auditor; a Legislature of a 134-member House (2-year terms) and a 67-member Senate (mostly 4-year terms); and the Governor's veto and line-item veto with a two-thirds override.",
    courseSlugs: ["state-civics-mn"],
    lessons: ["Minnesota Civics, Lesson 3 · The executive and the Legislature"],
  },
  {
    id: "civics.mn-courts",
    claim:
      "Teaches Minnesota's judiciary — district courts up through the Court of Appeals and a seven-justice Minnesota Supreme Court, with judges elected on a NONPARTISAN ballot to 6-year terms, yet in practice most first reach the bench by gubernatorial appointment to fill a vacancy and then run as incumbents.",
    courseSlugs: ["state-civics-mn"],
    lessons: ["Minnesota Civics, Lesson 3 · The executive and the Legislature"],
  },
  {
    id: "civics.mn-lawmaking",
    claim:
      "Teaches how a bill becomes a Minnesota law and that Minnesota has NO statewide citizen initiative — the Legislature and Governor make the law, and citizens only ratify amendments the Legislature refers, under Minnesota's strict rule that an amendment needs a majority of everyone voting in the election, so leaving the question blank effectively counts as a 'no.'",
    courseSlugs: ["state-civics-mn"],
    lessons: ["Minnesota Civics, Lesson 4 · How a bill becomes a Minnesota law"],
  },
  {
    id: "civics.mn-local-government",
    claim:
      "Teaches Minnesota local government as Minnesota's: 87 counties governed by elected county boards of commissioners plus separately elected officials; active rural townships alongside incorporated cities (larger cities under home-rule charters); school and special districts; and the distinctive Metropolitan Council governing regional planning and transit in the Twin Cities area.",
    courseSlugs: ["state-civics-mn"],
    lessons: ["Minnesota Civics, Lesson 5 · Local government and how to take part"],
  },
  {
    id: "civics.mn-elections",
    claim:
      "Teaches Minnesota's election specifics — same-day (Election-Day) registration, no-excuse absentee/early voting, and (unlike some states) no strict photo-ID requirement — administered by county and city election officials, with a standing flag to confirm current rules at sos.mn.gov.",
    courseSlugs: ["state-civics-mn"],
    lessons: [
      "Minnesota Civics, Lesson 1 · Why Minnesota leads the nation in voter turnout",
      "Minnesota Civics, Lesson 5 · Local government and how to take part",
    ],
  },
  {
    id: "civics.mn-get-involved",
    claim:
      "Teaches getting involved where you live, Minnesota edition — registering and voting even on Election Day, taking part in Minnesota's precinct caucuses, showing up at county boards, city councils, township meetings, and (in the Twin Cities) the Metropolitan Council, contacting your one Representative and one Senator in St. Paul, and running for local office.",
    courseSlugs: ["state-civics-mn"],
    lessons: ["Minnesota Civics, Lesson 5 · Local government and how to take part"],
  },

  // ── State civics: Wisconsin (state-civics-wi was written FROM Wisconsin's own sources) ──
  // NOTE: Wisconsin writes its OWN social studies standards (the 2018 Wisconsin Standards for
  // Social Studies, informed by the C3 Framework — not Common Core). Its Political Science (PS)
  // strand names the structure and functions of state government explicitly at high school:
  // SS.PS3.c.h ("Evaluate the structure and functions of governments at the local, state, tribal,
  // national, and global levels") is a genuine home for the Wisconsin flagship's own-structure
  // lessons, and the strand's Inquiry (Inq) and History (Hist) source-analysis indicators carry the
  // catalog's media/source-literacy method. data/wi.ts publishes the ELA/science/math gaps.
  {
    id: "civics.wi-wisconsin-idea",
    claim:
      "Teaches Wisconsin's Progressive-Era civic identity — a 'laboratory of democracy' under its Constitution of 1848 that pioneered reforms later copied nationwide (an early state income tax in 1911, workers' compensation, the direct primary) — and 'the Wisconsin Idea': the principle that the boundaries of the university are the boundaries of the state, so state government and the University of Wisconsin put expertise to work for all residents.",
    courseSlugs: ["state-civics-wi"],
    lessons: ["Wisconsin Civics, Lesson 1 · The 'Wisconsin Idea': a laboratory of democracy"],
  },
  {
    id: "civics.wi-partial-veto",
    claim:
      "Teaches Wisconsin's plural executive (a Governor and Lieutenant Governor, plus a separately elected Attorney General, Secretary of State, State Treasurer, and the nonpartisan Superintendent of Public Instruction) and its uniquely powerful PARTIAL (line-item) VETO, which historically let the Governor strike individual parts of spending items — even words, letters, or digits (the 'Frankenstein' / 'Vanna White' veto) — a power since narrowed by constitutional amendments.",
    courseSlugs: ["state-civics-wi"],
    lessons: ["Wisconsin Civics, Lesson 2 · The executive and Wisconsin's uniquely powerful partial veto"],
  },
  {
    id: "civics.wi-legislature-courts",
    claim:
      "Teaches Wisconsin's Legislature (a 99-member Assembly on 2-year terms and a 33-member Senate on 4-year terms, with no term limits) and its judiciary: a seven-justice Supreme Court and the lower courts elected on a NONPARTISAN ballot in low-turnout SPRING elections (10-year terms, one seat most years) that have become some of the most expensive and closely watched in the country.",
    courseSlugs: ["state-civics-wi"],
    lessons: ["Wisconsin Civics, Lesson 3 · The Legislature and Wisconsin's high-profile Supreme Court elections"],
  },
  {
    id: "civics.wi-lawmaking-recall",
    claim:
      "Teaches how a bill becomes a Wisconsin law and Wisconsin's unusual mix of direct-democracy powers: NO statewide citizen initiative (amendments are proposed by the Legislature in two consecutive sessions, then ratified by voters), but a strong RECALL that lets voters petition to force a recall election of elected officials — used in a nationally famous 2012 gubernatorial recall.",
    courseSlugs: ["state-civics-wi"],
    lessons: ["Wisconsin Civics, Lesson 4 · How a bill becomes law, the strong recall, and no initiative"],
  },
  {
    id: "civics.wi-local-government",
    claim:
      "Teaches Wisconsin local government as Wisconsin's: 72 counties governed by elected county boards of supervisors (larger counties, like Milwaukee, also with an elected county executive); a distinction between rural general-purpose 'towns' and incorporated villages and cities under a strong home-rule tradition; and school and special districts.",
    courseSlugs: ["state-civics-wi"],
    lessons: ["Wisconsin Civics, Lesson 5 · Local government and how to take part"],
  },
  {
    id: "civics.wi-elections",
    claim:
      "Teaches Wisconsin's election specifics — same-day (Election-Day) registration, early in-person absentee voting, and a photo-ID requirement — administered at the municipal level by more than 1,800 city, village, and town clerks, with a standing flag to confirm current rules at elections.wi.gov, and a reminder not to skip the consequential spring elections.",
    courseSlugs: ["state-civics-wi"],
    lessons: ["Wisconsin Civics, Lesson 5 · Local government and how to take part"],
  },
  {
    id: "civics.wi-get-involved",
    claim:
      "Teaches getting involved where you live, Wisconsin edition — registering and voting (including on Election Day, with photo ID) and not skipping the spring elections where judicial and local races are decided, using Wisconsin's strong recall, showing up at county boards and city/village/town and school-board meetings, contacting your one Assembly member and one Senator in Madison, and running for local office.",
    courseSlugs: ["state-civics-wi"],
    lessons: ["Wisconsin Civics, Lesson 5 · Local government and how to take part"],
  },
  // ── State civics: Connecticut (state-civics-ct was written FROM Connecticut's own sources) ──
  // NOTE: Connecticut's Social Studies Frameworks (2015) High School Civics and Government course is
  // built on the C3 inquiry arc, but its lead standard CIV 9–12.1 names "local, state, tribal,
  // national, and international" institutions explicitly — so, unlike the abstract-concept states,
  // the Connecticut flagship's own-government lessons (its abolished counties, its town-based local
  // layer, its legislative appointment of judges) have a genuine home, mapped there. Connecticut is
  // INHERIT-heavy: it adopted the Common Core (as the "CT Core Standards", 2010) for ELA and the
  // NGSS (2015) for science, so data/ct.ts adopts the two shared frameworks and maps only the
  // bespoke social-studies frame here.
  {
    id: "civics.ct-constitution-state",
    claim:
      "Teaches Connecticut as 'The Constitution State' — the Fundamental Orders of 1639 (often called one of the first written constitutions to frame a government by the consent of the governed), the modern Constitution of 1965 (following the colonial charter and an 1818 constitution), and that Connecticut became the 5th state on January 9, 1788.",
    courseSlugs: ["state-civics-ct"],
    lessons: [
      "Connecticut Civics, Lesson 1 · 'The Constitution State' and the Fundamental Orders of 1639",
    ],
  },
  {
    id: "civics.ct-no-counties",
    claim:
      "Teaches Connecticut's most distinctive structural feature: it ABOLISHED county government entirely in 1960, leaving a two-tier system of the state plus 169 towns, with the eight historic counties surviving only as geographic reference areas and nine 'planning regions' serving as county-equivalents for federal statistical purposes only (never as general-purpose governments).",
    courseSlugs: ["state-civics-ct"],
    lessons: [
      "Connecticut Civics, Lesson 2 · Connecticut abolished county government (1960)",
    ],
  },
  {
    id: "civics.ct-executive-legislature",
    claim:
      "Teaches Connecticut's executive and legislative branches as Connecticut's: a plural executive (the Governor and Lieutenant Governor nominated separately but running together, plus a separately elected Secretary of the State, Treasurer, Comptroller, and Attorney General, all on 4-year terms with no term limits) and the General Assembly (a 151-member House and a 36-member Senate, both on 2-year terms), with a two-thirds veto override.",
    courseSlugs: ["state-civics-ct"],
    lessons: [
      "Connecticut Civics, Lesson 3 · The executive and the General Assembly",
    ],
  },
  {
    id: "civics.ct-courts-legislative-appointment",
    claim:
      "Teaches Connecticut's distinctive judicial selection: judges are NOT elected in campaigns — a Judicial Selection Commission screens candidates, the Governor nominates from that list, and the General Assembly (the Legislature) appoints the judge to an 8-year renewable term, with a 7-justice Connecticut Supreme Court at the top.",
    courseSlugs: ["state-civics-ct"],
    lessons: [
      "Connecticut Civics, Lesson 4 · How Connecticut picks its judges, and how a bill becomes law",
    ],
  },
  {
    id: "civics.ct-lawmaking-no-initiative",
    claim:
      "Teaches how a bill becomes a Connecticut law (introduction, Connecticut's efficiency-minded joint committees shared by both chambers, floor votes, and the Governor's signature/veto/line-item veto) and that Connecticut has NO statewide citizen initiative: amendments are proposed by the General Assembly and ratified by the voters, so the citizen role is ratification, not initiation.",
    courseSlugs: ["state-civics-ct"],
    lessons: [
      "Connecticut Civics, Lesson 4 · How Connecticut picks its judges, and how a bill becomes law",
    ],
  },
  {
    id: "civics.ct-towns",
    claim:
      "Teaches Connecticut local government as Connecticut's: because there are no counties, the TOWN is the workhorse — 169 towns, many small ones still governed by a town meeting and a board of selectmen, larger ones by mayor-council or council-manager forms, handling schools, police, roads, and zoning, with regional councils of governments coordinating some services but never acting as general-purpose governments.",
    courseSlugs: ["state-civics-ct"],
    lessons: [
      "Connecticut Civics, Lesson 5 · Town government and how to take part",
    ],
  },
  {
    id: "civics.ct-get-involved",
    claim:
      "Teaches getting involved where you live, Connecticut edition — using Connecticut's newly expanded voting access (early in-person voting used starting in 2024 and no-excuse absentee voting, administered by town registrars), showing up at the town meeting, board of selectmen or town/city council and the local board of education, contacting your one Representative and one Senator in Hartford, weighing in on amendments and constitutional conventions, and running for local office.",
    courseSlugs: ["state-civics-ct"],
    lessons: [
      "Connecticut Civics, Lesson 5 · Town government and how to take part",
    ],
  },

  // ── State civics: South Carolina (state-civics-sc was written FROM SC's own sources) ──
  // NOTE: South Carolina's grade-12 United States Government course (SC Social Studies College- and
  // Career-Ready Standards, 2019) reaches South Carolina's OWN government explicitly through USG.2.CC
  // ("Explain how governments in South Carolina are organized and how they function in the American
  // constitutional government"), so — unlike the abstract-concept states — the South Carolina
  // flagship's structure lessons have a genuine home, mapped there. South Carolina withdrew from the
  // Common Core (2015), so its ELA/Math are South Carolina's own (SC College- and Career-Ready
  // Standards) and its science is South Carolina's own (2021, not NGSS); data/sc.ts publishes those
  // as deferred gaps, not denials. South Carolina is BESPOKE-heavy.
  {
    id: "civics.sc-legislative-state",
    claim:
      "Teaches South Carolina as the classic 'legislative state': the Constitution of 1895 (its seventh) deliberately created a very weak Governor and concentrated authority in the General Assembly, a legacy still visible today — most strikingly that the Legislature elects the state's judges (South Carolina and Virginia are the only two states that do). South Carolina became the 8th state on May 23, 1788.",
    courseSlugs: ["state-civics-sc"],
    lessons: [
      "South Carolina Civics, Lesson 1 · The 'legislative state': where the General Assembly long ruled",
    ],
  },
  {
    id: "civics.sc-plural-executive",
    claim:
      "Teaches South Carolina's unusually large plural executive as a legacy of the weak-governor design: voters separately elect the Governor (with the Lieutenant Governor on the same ticket since 2018), Attorney General, Secretary of State, State Treasurer, Comptroller General, Superintendent of Education, and Commissioner of Agriculture, so the Governor has historically not controlled the executive branch; recent reforms (the joint ticket, making the Adjutant General a gubernatorial appointment) have strengthened the office, with a two-thirds veto override.",
    courseSlugs: ["state-civics-sc"],
    lessons: [
      "South Carolina Civics, Lesson 2 · A large plural executive (a legacy of the weak governor)",
    ],
  },
  {
    id: "civics.sc-legislature-elects-judges",
    claim:
      "Teaches South Carolina's defining judicial feature: the General Assembly ELECTS the state's judges (South Carolina and Virginia are the only two states that do) after a Judicial Merit Selection Commission screens candidates for qualifications, with a 5-justice South Carolina Supreme Court elected to 10-year terms — so South Carolina's judges answer to the legislators for re-election, not to the voters or the Governor.",
    courseSlugs: ["state-civics-sc"],
    lessons: [
      "South Carolina Civics, Lesson 3 · How South Carolina picks its judges (the Legislature elects them)",
    ],
  },
  {
    id: "civics.sc-lawmaking-no-initiative",
    claim:
      "Teaches how a bill becomes a South Carolina law (introduction, committee, floor votes in both chambers — with the Senate's strong filibuster tradition — and the Governor's signature/veto/line-item veto with a two-thirds override), that the General Assembly is a 124-member House on 2-year terms and a 46-member Senate on 4-year terms, and that South Carolina has NO citizen initiative: amendments run through the General Assembly (proposed by a two-thirds vote), are ratified by voters, and then RE-RATIFIED by the Legislature, a distinctive extra step.",
    courseSlugs: ["state-civics-sc"],
    lessons: [
      "South Carolina Civics, Lesson 4 · How a bill becomes a South Carolina law",
    ],
  },
  {
    id: "civics.sc-local-government",
    claim:
      "Teaches South Carolina local government as South Carolina's: 46 counties governed by elected county councils (which gained self-governing power under the Home Rule Act of 1975, easing the legislative-state control of local matters) plus separately elected sheriff, clerk, auditor, and treasurer; municipalities with council forms; and a legacy of many school and special-purpose districts from the legislative-state era.",
    courseSlugs: ["state-civics-sc"],
    lessons: [
      "South Carolina Civics, Lesson 5 · Local government and how to take part",
    ],
  },
  {
    id: "civics.sc-get-involved",
    claim:
      "Teaches getting involved where you live, South Carolina edition — registering and voting with photo ID, early in-person voting, and qualifying-reason absentee voting administered by county election offices (scvotes.gov), showing up at county councils, city councils, and school boards (which decide more locally since Home Rule), contacting your one Representative and one Senator in Columbia, watching the General Assembly's judicial elections, and running for local office.",
    courseSlugs: ["state-civics-sc"],
    lessons: [
      "South Carolina Civics, Lesson 5 · Local government and how to take part",
    ],
  },

  // ── State civics: Kentucky (state-civics-ky was written FROM Kentucky's own sources) ──
  // Kentucky's KAS for Social Studies (2019) carries a dedicated "Kentucky Government" strand whose
  // HS.C.KGO.1-3 indicators name Kentucky's OWN constitution and government explicitly, so — unlike
  // the abstract-concept states — the Kentucky flagship's Kentucky-structure lessons have a genuine
  // 1:1 home, mapped in data/ky.ts. state-civics-ky was written from legislature.ky.gov, sos.ky.gov,
  // kycourts.gov, and the Kentucky Constitution of 1891.
  {
    id: "civics.ky-commonwealth",
    claim:
      "Teaches Kentucky's civic identity: it is one of only four states officially called a 'Commonwealth' (with Virginia, Massachusetts, and Pennsylvania), became the 15th state on June 1, 1792 (the first west of the Appalachians), and governs under its Constitution of 1891 (its fourth); it elects its Governor and statewide officers in ODD-numbered years off the presidential cycle (like Virginia and New Jersey); and it has 120 counties, the third-most of any state (behind only Texas and Georgia), so county government is an unusually large part of Kentucky civic life.",
    courseSlugs: ["state-civics-ky"],
    lessons: [
      "Kentucky Civics, Lesson 1 · A Commonwealth of odd-year elections and 120 counties",
    ],
  },
  {
    id: "civics.ky-plural-executive",
    claim:
      "Teaches Kentucky's large plural executive: the Governor and Lieutenant Governor run together on a joint ticket, while voters separately elect the Secretary of State (who runs elections), the Attorney General, the State Treasurer, the State Auditor, and the Commissioner of Agriculture, each to 4-year terms — so, like many states, Kentucky can end up with a Governor of one party and other statewide officers of another, checking one another.",
    courseSlugs: ["state-civics-ky"],
    lessons: [
      "Kentucky Civics, Lesson 2 · The executive and the General Assembly",
    ],
  },
  {
    id: "civics.ky-general-assembly",
    claim:
      "Teaches the Kentucky General Assembly: a part-time citizen legislature meeting in Frankfort — a 100-member House on 2-year terms and a 38-member Senate on 4-year terms, with short annual sessions (a longer 60-day session in even years, a shorter 30-day session in odd years) — and Kentucky's comparatively WEAK gubernatorial veto, which the General Assembly can override with a simple majority (like Tennessee, Alabama, and West Virginia), plus the Governor's line-item veto on appropriations.",
    courseSlugs: ["state-civics-ky"],
    lessons: [
      "Kentucky Civics, Lesson 2 · The executive and the General Assembly",
    ],
  },
  {
    id: "civics.ky-nonpartisan-judiciary",
    claim:
      "Teaches how Kentucky picks its judges: on a NONPARTISAN ballot, with no party label next to their names (a contrast with, say, Alabama's partisan judicial elections) — the Supreme Court of Kentucky has 7 justices elected from districts to 8-year terms, and Court of Appeals, Circuit, and District judges are likewise elected nonpartisan; mid-term vacancies are filled by the Governor from a Judicial Nominating Commission's list, and that appointee then stands for election.",
    courseSlugs: ["state-civics-ky"],
    lessons: [
      "Kentucky Civics, Lesson 3 · How Kentucky picks its judges, and how a bill becomes law",
    ],
  },
  {
    id: "civics.ky-lawmaking-no-initiative",
    claim:
      "Teaches how a bill becomes a Kentucky law (introduction in the House or Senate during the short annual session, committee review, floor votes in both chambers, then the Governor's signature, weak simple-majority-override veto, or line-item veto) and that Kentucky has NO statewide citizen initiative: citizens cannot put a statute or amendment on the ballot by petition; constitutional amendments are proposed by the General Assembly (by a three-fifths vote) and then ratified by the voters, so the citizen's role is ratification, not initiation.",
    courseSlugs: ["state-civics-ky"],
    lessons: [
      "Kentucky Civics, Lesson 3 · How Kentucky picks its judges, and how a bill becomes law",
    ],
  },
  {
    id: "civics.ky-local-government",
    claim:
      "Teaches Kentucky local government as Kentucky's: 120 counties (the third-most of any state), each run by an elected county judge/executive and a fiscal court of magistrates or commissioners, plus other elected county officials (sheriff, clerk, jailer, property valuation administrator); size-classified cities providing municipal services; and Louisville's consolidation with Jefferson County into a single 'Louisville Metro' government — with so many counties, county government is unusually prominent in daily life.",
    courseSlugs: ["state-civics-ky"],
    lessons: [
      "Kentucky Civics, Lesson 4 · Local government and how to take part",
    ],
  },
  {
    id: "civics.ky-get-involved",
    claim:
      "Teaches getting involved where you live, Kentucky edition — registering and voting (bringing photo ID with alternatives, using recently expanded early in-person voting, checking status at sos.ky.gov/elect.ky.gov, and remembering Kentucky's big statewide races fall in ODD years), showing up at the fiscal court, county judge/executive, city council, and school board (county government is especially reachable in Kentucky), contacting your one Representative and one Senator in Frankfort during the short session, and running for local office.",
    courseSlugs: ["state-civics-ky"],
    lessons: [
      "Kentucky Civics, Lesson 4 · Local government and how to take part",
    ],
  },

  // ── State civics: Oregon (state-civics-or was written FROM Oregon's own sources) ──
  // Oregon's 2024 Social Science Standards (State Board Adopted, the current revision of the
  // 2018/2021 standards) carry a High School Civics strand whose HS.C.PI.3 and HS.C.IR.8 name the
  // government of Oregon explicitly and whose HS.C.IR.9/DP.16/CE.17 cover Oregon's own civic
  // participation (vote-by-mail, the Oregon System), so the Oregon flagship's Oregon-structure
  // lessons have a genuine home, mapped in data/or.ts. state-civics-or was written from
  // oregonlegislature.gov, sos.oregon.gov, courts.oregon.gov, and the Oregon Constitution of 1859.
  {
    id: "civics.or-oregon-system",
    claim:
      "Teaches 'the Oregon System': Oregon governs under its Constitution of 1859 (statehood February 14, 1859, the 33rd state) and in 1902 amended it to add the citizen INITIATIVE and REFERENDUM — the power for citizens to make and repeal laws directly at the ballot — a package so influential that states across the country copied it in the Progressive Era; Oregon's direct-democracy tools are the initiative (a statute or constitutional amendment), the referendum (reject a law the Legislature passed, or vote on one it refers), and the recall.",
    courseSlugs: ["state-civics-or"],
    lessons: [
      "Oregon Civics, Lesson 1 · The 'Oregon System': how Oregon gave the nation direct democracy",
    ],
  },
  {
    id: "civics.or-vote-by-mail",
    claim:
      "Teaches Oregon's two national 'firsts' in how people vote: it was the FIRST state to conduct all its elections entirely by mail (approved by initiative in 1998, the model Washington and Colorado later followed), and in 2016 it became the first state to launch automatic voter registration ('Oregon Motor Voter'), which registers eligible residents when they interact with the DMV, with a chance to opt out; both spread to other states and are administered by county clerks (confirm current rules at sos.oregon.gov).",
    courseSlugs: ["state-civics-or"],
    lessons: [
      "Oregon Civics, Lesson 2 · Oregon went first: all-mail voting and automatic registration",
    ],
  },
  {
    id: "civics.or-executive-legislature",
    claim:
      "Teaches Oregon's plural executive and Legislative Assembly: voters elect the Governor, Secretary of State, State Treasurer, and Attorney General separately, but Oregon has NO Lieutenant Governor, so the separately elected Secretary of State is first in line to succeed the Governor (and has become Governor on a vacancy); the Legislature is a citizen body meeting in Salem — a 60-member House on 2-year terms and a 30-member Senate on 4-year terms — and the Governor's veto (including a line-item veto on appropriations) is overridden by a two-thirds vote of each chamber.",
    courseSlugs: ["state-civics-or"],
    lessons: [
      "Oregon Civics, Lesson 3 · The executive (no Lieutenant Governor) and the Legislature",
    ],
  },
  {
    id: "civics.or-lawmaking-walkout",
    claim:
      "Teaches that Oregon makes law two ways — through the Legislature (introduction, committee, floor votes in both chambers, and the Governor's signature or veto) or directly by the voters through the Oregon System (initiative and referendum) — and a distinctive Oregon wrinkle: because Oregon requires a two-thirds quorum to do business, a minority of legislators can block action by WALKING OUT and denying quorum, a high-profile tactic (a 2022 ballot measure now disqualifies legislators with many unexcused absences from re-election).",
    courseSlugs: ["state-civics-or"],
    lessons: [
      "Oregon Civics, Lesson 4 · How a bill becomes an Oregon law",
    ],
  },
  {
    id: "civics.or-courts-local",
    claim:
      "Teaches how Oregon picks its judges and governs locally: judges are elected on a NONPARTISAN ballot (the 7-justice Oregon Supreme Court to 6-year terms, with the Governor filling mid-term vacancies), and local government runs through 36 counties governed by elected boards of commissioners (many under home-rule charters), cities, and special districts; Oregon is also nationally known for its statewide LAND-USE PLANNING system (Senate Bill 100, 1973), which requires cities to draw urban growth boundaries that concentrate development inside cities and protect surrounding farmland and forests from sprawl.",
    courseSlugs: ["state-civics-or"],
    lessons: [
      "Oregon Civics, Lesson 5 · Nonpartisan judges, counties, and Oregon's famous land-use planning",
    ],
  },
  {
    id: "civics.or-get-involved",
    claim:
      "Teaches getting involved where you live, Oregon edition — voting (a ballot is mailed to every registered voter, and most residents are already automatically registered, so participating means marking and returning the ballot by mail or drop box by Election Day), reading the many initiatives and referendums on each ballot, starting a measure by signing or circulating an initiative or referendum, showing up at county commissions, city councils, and school boards (land-use and growth decisions are especially active), contacting your one Representative and one Senator in Salem, and running for local office.",
    courseSlugs: ["state-civics-or"],
    lessons: [
      "Oregon Civics, Lesson 6 · How to take part where you live",
    ],
  },
  // ── State civics: Oklahoma (state-civics-ok was written FROM Oklahoma's own sources) ──
  // NOTE: Oklahoma's grade-12 United States Government course (Oklahoma Academic Standards for
  // Social Studies, adopted 2019) reaches Oklahoma's OWN government explicitly — USG.3.3 names the
  // relationships among "national, state, tribal, and local governments" and USG.3.4 names tribal
  // sovereignty and the Major Crimes Act (the constitutional question at the heart of McGirt, 2020) —
  // so, unlike the abstract-concept states, the Oklahoma flagship's structure AND tribal-sovereignty
  // lessons have a genuine home. Oklahoma withdrew from the Common Core (2014), so its ELA/Math are
  // Oklahoma's own (Oklahoma Academic Standards) and its science is Oklahoma's own (2020, NGSS-
  // influenced, not verbatim NGSS); data/ok.ts publishes those as deferred gaps, not denials.
  // Oklahoma is BESPOKE-heavy.
  {
    id: "civics.ok-two-high-courts",
    claim:
      "Teaches Oklahoma's most distinctive structural choice: it is one of only TWO states (with Texas) with two separate courts of last resort — the nine-justice Oklahoma Supreme Court is final for CIVIL cases and the five-judge Court of Criminal Appeals is final for CRIMINAL cases, with no appeal from one to the other — under Oklahoma's long, Progressive-Era Constitution of 1907 (Oklahoma became the 46th state on November 16, 1907).",
    courseSlugs: ["state-civics-ok"],
    lessons: [
      "Oklahoma Civics, Lesson 1 · Two highest courts: Oklahoma's split top bench",
    ],
  },
  {
    id: "civics.ok-plural-executive",
    claim:
      "Teaches Oklahoma's large plural executive as a legacy of its Progressive-Era distrust of concentrated power: voters separately elect the Governor and Lieutenant Governor (who can be of different parties), the Attorney General, State Treasurer, State Auditor and Inspector, Superintendent of Public Instruction, Commissioner of Labor, Insurance Commissioner, and the three-member elected Corporation Commission that regulates utilities (and historically oil and gas) — so executive power is widely divided among independently elected officers, with the Secretary of State a notable Governor-appointed exception; statewide officers serve four-year terms with term limits.",
    courseSlugs: ["state-civics-ok"],
    lessons: [
      "Oklahoma Civics, Lesson 2 · One of the largest elected executives in the nation",
    ],
  },
  {
    id: "civics.ok-legislature-initiative",
    claim:
      "Teaches how a bill becomes an Oklahoma law (introduction, committee, floor votes in both chambers, and the Governor's signature, veto with a two-thirds override, or line-item veto of appropriations), that the Oklahoma Legislature is a 101-member House on two-year terms and a 48-member Senate on four-year terms meeting in limited annual sessions with a combined 12-year term limit, and Oklahoma's strong direct democracy: Oklahoma was the FIRST state to include the initiative and referendum in its original constitution (1907), letting citizens put a statute or a constitutional amendment on the ballot or reject a law the Legislature passed.",
    courseSlugs: ["state-civics-ok"],
    lessons: [
      "Oklahoma Civics, Lesson 3 · The Legislature and Oklahoma's strong direct democracy",
    ],
  },
  {
    id: "civics.ok-courts-merit-selection",
    claim:
      "Teaches how Oklahoma picks its appellate judges: the 'Missouri Plan' merit selection, in which a Judicial Nominating Commission sends the Governor a list, the Governor appoints, and the judge later faces nonpartisan yes/no retention elections (many district trial judges, by contrast, are elected on nonpartisan ballots).",
    courseSlugs: ["state-civics-ok"],
    lessons: [
      "Oklahoma Civics, Lesson 4 · Merit-selection judges, sovereign tribal nations, and getting involved",
    ],
  },
  {
    id: "civics.ok-tribal-nations",
    claim:
      "Teaches that Oklahoma's civic landscape is inseparable from sovereign tribal nations: much of the state was 'Indian Territory' before statehood, it today includes 38+ federally recognized tribal nations with their own constitutions, courts, and laws, and — flagged as time-sensitive and still being worked out — the U.S. Supreme Court's McGirt v. Oklahoma (2020) held that a large part of eastern Oklahoma remains a tribal reservation for purposes of certain criminal jurisdiction, so tribal sovereignty is a central, active question of Oklahoma governance.",
    courseSlugs: ["state-civics-ok"],
    lessons: [
      "Oklahoma Civics, Lesson 4 · Merit-selection judges, sovereign tribal nations, and getting involved",
    ],
  },
  {
    id: "civics.ok-local-government",
    claim:
      "Teaches Oklahoma local government as Oklahoma's: 77 counties running local services alongside municipalities (city councils) and school boards, with the flagship pointing learners to their own county's public meetings.",
    courseSlugs: ["state-civics-ok"],
    lessons: [
      "Oklahoma Civics, Lesson 4 · Merit-selection judges, sovereign tribal nations, and getting involved",
    ],
  },
  {
    id: "civics.ok-get-involved",
    claim:
      "Teaches getting involved where you live, Oklahoma edition — registering and voting (early in-person and absentee voting with ID, administered by county election boards, flagged time-sensitive and pointing to elections.ok.gov), using Oklahoma's strong and frequently used initiative, showing up at county commissions, city councils, and school boards, learning tribal governance where a nation's boundaries reach, contacting legislators in Oklahoma City, and running for reachable local office.",
    courseSlugs: ["state-civics-ok"],
    lessons: [
      "Oklahoma Civics, Lesson 4 · Merit-selection judges, sovereign tribal nations, and getting involved",
    ],
  },

  // ── State civics: Utah (state-civics-ut was written FROM Utah's own sources) ──
  // NOTE: Utah's United States Government and Citizenship course (Utah Core Standards for Social
  // Studies, revised September 2016) reaches Utah's own government mainly through its DISTRIBUTION
  // OF POWER strand — U.S. GOV Standard 3.1 (power among national/state/tribal/local) and 3.2 (local
  // elected officers) — plus the civic-responsibilities standard (2.3) and the "how people organize
  // to participate" standard (3.3), which is a genuine home for Utah's distinctive dual-path
  // (caucus-convention OR signature) nomination system. Utah is MIXED inherit+bespoke: it adopted
  // the Common Core for ELA/Math (its disciplinary-literacy strands are verbatim; see data/ut.ts),
  // while its Social Studies and its SEEd science are Utah's own.
  {
    id: "civics.ut-dual-path",
    claim:
      "Teaches Utah's most distinctive election feature: since 2014 a candidate reaches the party primary ballot by a 'dual path' — EITHER the traditional caucus-and-convention route (precinct caucuses elect delegates who vote at a party convention) OR by gathering a set number of voter signatures, or both — a compromise (the 'Count My Vote' citizen effort and the Legislature's SB54) that few states use and that has been litigated ever since, so the flagship points learners to vote.utah.gov for current rules.",
    courseSlugs: ["state-civics-ut"],
    lessons: [
      "Utah Civics, Lesson 1 · Utah's dual-path ballot access: caucus-convention OR signatures",
    ],
  },
  {
    id: "civics.ut-statehood-executive",
    claim:
      "Teaches Utah's 1896 statehood (admitted only after its constitution permanently banned polygamy and affirmed separation of church and state, religious freedom, and — from the start — women's suffrage) and its plural executive: the Governor and Lieutenant Governor run together on a joint ticket (the Lieutenant Governor also serving as Utah's chief elections officer), with the Attorney General, State Auditor, and State Treasurer separately elected to four-year terms.",
    courseSlugs: ["state-civics-ut"],
    lessons: [
      "Utah Civics, Lesson 2 · Statehood, and Utah's plural executive",
    ],
  },
  {
    id: "civics.ut-legislature",
    claim:
      "Teaches Utah's part-time citizen Legislature — a 75-member House on two-year terms and a 29-member Senate on four-year terms that meets for a short annual session of just 45 calendar days — how a bill becomes a Utah law (introduction, committee, floor votes, and the Governor's signature, two-thirds override, or line-item veto of appropriations), and Utah's citizen initiative and referendum, whose balance with the Legislature is an active civic question.",
    courseSlugs: ["state-civics-ut"],
    lessons: [
      "Utah Civics, Lesson 3 · A 45-day citizen Legislature and how a bill becomes law",
    ],
  },
  {
    id: "civics.ut-courts-merit",
    claim:
      "Teaches how Utah chooses its judges: the 'Missouri Plan' merit selection in which a Judicial Nominating Commission sends the Governor a list, the Governor appoints, the Senate confirms, and the judge later faces a nonpartisan yes/no retention election — with Utah's distinctive Judicial Performance Evaluation Commission publishing evaluations to aid retention voters, and a five-justice Utah Supreme Court on ten-year terms.",
    courseSlugs: ["state-civics-ut"],
    lessons: [
      "Utah Civics, Lesson 4 · How Utah picks its judges, and its all-mail elections",
    ],
  },
  {
    id: "civics.ut-elections-mail",
    claim:
      "Teaches Utah's all-mail elections: every active registered voter is mailed a ballot, returnable by mail or drop box, with in-person options and same-day registration also available, administered by county clerks — flagged as time-sensitive and pointing to vote.utah.gov for current deadlines and rules.",
    courseSlugs: ["state-civics-ut"],
    lessons: [
      "Utah Civics, Lesson 4 · How Utah picks its judges, and its all-mail elections",
    ],
  },
  {
    id: "civics.ut-local-government",
    claim:
      "Teaches Utah local government as Utah's: 29 counties governed by elected commissions or councils (some restructured by charter) with other elected county officers, cities and towns providing municipal services under mayor-council or council-manager forms, and school and special districts.",
    courseSlugs: ["state-civics-ut"],
    lessons: [
      "Utah Civics, Lesson 5 · Local government and how to take part",
    ],
  },
  {
    id: "civics.ut-get-involved",
    claim:
      "Teaches getting involved where you live, Utah edition — registering and voting by Utah's mailed ballot (with same-day registration), attending your neighborhood precinct caucus to become a delegate, gathering or signing nominating-petition signatures, using the initiative and referendum, showing up at county commissions, city councils, and school boards, contacting your one Representative and one Senator (timed to the short 45-day session), and running for reachable local office.",
    courseSlugs: ["state-civics-ut"],
    lessons: [
      "Utah Civics, Lesson 5 · Local government and how to take part",
    ],
  },

  // ── State civics: Kansas (state-civics-ks was written FROM Kansas's own sources) ──
  // NOTE: Kansas's standards are UNUSUAL. The Kansas Standards for History, Government, and Social
  // Studies (2013) are deliberately SKILLS-not-content: five thematic Standards (1 Choices have
  // consequences … 5 Relationships … are dynamic), each with four benchmarks (x.1 recognize/evaluate,
  // x.2 analyze/draw conclusions, x.3 investigate/connect to contemporary issues, x.4 use/apply). The
  // HS United States Government course (Kansas Course Code 04151) applies those same benchmarks; its
  // document says outright that "state assessments will focus on the Standards and Benchmarks, not
  // specific content." So Kansas's OWN structural facts (its plural executive, 125/40 Legislature,
  // merit-selection Supreme Court, absence of a citizen initiative, strong home rule, 105 counties)
  // are the CONTENT through which the benchmarks are exercised, not standards in their own right —
  // the flagship teaches them in depth as the vehicle for the benchmark skills. Kansas KEPT the
  // Common Core (unlike Oklahoma): its ELA/Math are the Kansas College and Career Ready Standards
  // (KCCRS = Common Core, verbatim) and its science is NGSS, verbatim (adopted 2013). data/ks.ts
  // adopts the shared Common Core ELA (aliased to Kansas's bare codes) and the shared NGSS. MIXED.
  {
    id: "civics.ks-bleeding-kansas-wyandotte",
    claim:
      "Teaches Kansas's dramatic founding: 'Bleeding Kansas,' the violent 1850s struggle (touched off by the Kansas-Nebraska Act of 1854 and 'popular sovereignty') over whether Kansas would enter the Union free or slave, an era that helped spark the Civil War; that Kansans wrote four rival constitutions during the fight and the free-state Wyandotte Constitution of 1859 prevailed, admitting Kansas as a free state (the 34th) on January 29, 1861; and that this same Wyandotte Constitution is still in force today (heavily amended), so Kansas's founding document is a direct product of the fight over slavery.",
    courseSlugs: ["state-civics-ks"],
    lessons: [
      "Kansas Civics, Lesson 1 · 'Bleeding Kansas' and the free-state Wyandotte Constitution",
    ],
  },
  {
    id: "civics.ks-plural-executive",
    claim:
      "Teaches Kansas's plural executive: the Governor and Lieutenant Governor run together on a joint ticket, while voters separately elect the Secretary of State (who runs elections), the Attorney General, the State Treasurer, and the Commissioner of Insurance — so Kansas can have a Governor of one party and other statewide officers of another, and they can check one another; statewide officers serve four-year terms.",
    courseSlugs: ["state-civics-ks"],
    lessons: [
      "Kansas Civics, Lesson 2 · The executive and the Legislature",
    ],
  },
  {
    id: "civics.ks-legislature",
    claim:
      "Teaches the Kansas Legislature — a part-time citizen body meeting in Topeka with a 125-member House (two-year terms) and a 40-member Senate (four-year terms) — and how a bill becomes a Kansas law (introduction, committee, floor votes in both chambers, and the Governor's signature, veto with a two-thirds override of each chamber, or line-item veto of appropriations).",
    courseSlugs: ["state-civics-ks"],
    lessons: [
      "Kansas Civics, Lesson 2 · The executive and the Legislature",
      "Kansas Civics, Lesson 3 · How Kansas picks its Supreme Court, and why there's no initiative",
    ],
  },
  {
    id: "civics.ks-courts-merit-selection",
    claim:
      "Teaches how Kansas chooses its seven-justice Supreme Court: the 'Missouri Plan' merit selection, in which a Supreme Court Nominating Commission of lawyers and citizens sends the Governor a short list, the Governor appoints from it, and the justice later faces voters in a nonpartisan yes/no retention election — flagged as time-sensitive because Kansas has repeatedly debated changing the method (e.g., to Senate-confirmed appointments or partisan elections), with Court of Appeals judges appointed by the Governor with Senate confirmation and many district (trial) judges elected.",
    courseSlugs: ["state-civics-ks"],
    lessons: [
      "Kansas Civics, Lesson 3 · How Kansas picks its Supreme Court, and why there's no initiative",
    ],
  },
  {
    id: "civics.ks-no-initiative",
    claim:
      "Teaches Kansas's distinctive absence of direct democracy: unlike its plains and western neighbors (Colorado, Nebraska, the Dakotas), Kansas has NO statewide citizen initiative — citizens cannot put a statute or amendment on the ballot by petition; constitutional amendments are proposed by the Legislature (a two-thirds vote of each chamber) and then ratified by the voters, so the citizen role is ratification, not initiation, and the ballot questions Kansans see are ones the Legislature chose to refer.",
    courseSlugs: ["state-civics-ks"],
    lessons: [
      "Kansas Civics, Lesson 3 · How Kansas picks its Supreme Court, and why there's no initiative",
    ],
  },
  {
    id: "civics.ks-home-rule",
    claim:
      "Teaches Kansas's strong home rule: the Kansas Constitution grants cities and counties substantial authority to manage their own local affairs without asking the Legislature for permission on every matter, making Kansas localities comparatively self-governing (a contrast with weak-home-rule states).",
    courseSlugs: ["state-civics-ks"],
    lessons: [
      "Kansas Civics, Lesson 4 · Home rule, local government, and how to take part",
    ],
  },
  {
    id: "civics.ks-local-government",
    claim:
      "Teaches Kansas local government as Kansas's own: 105 counties governed by elected boards of county commissioners (plus other elected county officials — sheriff, clerk, treasurer, register of deeds), cities classified by size providing municipal services under home rule, townships in rural areas, and school and special districts.",
    courseSlugs: ["state-civics-ks"],
    lessons: [
      "Kansas Civics, Lesson 4 · Home rule, local government, and how to take part",
    ],
  },
  {
    id: "civics.ks-get-involved",
    claim:
      "Teaches getting involved where you live, Kansas edition — registering and voting with photo ID and advance/early voting administered by county election officers (flagged time-sensitive, pointing to sos.ks.gov), showing up at the county commission, city council, and school board that home rule empowers to decide much without Topeka, reading the Legislature-referred amendments carefully (since Kansans cannot start ballot measures), contacting your one Representative and one Senator, and running for reachable local office.",
    courseSlugs: ["state-civics-ks"],
    lessons: [
      "Kansas Civics, Lesson 4 · Home rule, local government, and how to take part",
    ],
  },

  // ── State civics: Nebraska (state-civics-ne was written FROM Nebraska's own sources) ──
  // NOTE: Nebraska is a notable NON-adopter of the Common Core — its ELA and Math College and Career
  // Ready Standards are Nebraska's OWN, and its 2017 science standards are Nebraska's own (NGSS-
  // influenced, not verbatim NGSS) — so unlike Kansas we adopt NO shared framework here (data/ne.ts
  // publishes ELA/Math/Science as deferred gaps, not denials). Nebraska is BESPOKE-heavy. The
  // Nebraska Social Studies Standards (2019, approved Nov 8, 2019) ARE content-bearing (unlike
  // Kansas's skills-only design): the High School Civics standard SS HS.1.1.e ("Analyze the
  // foundation, structures, and functions of state government and its outcomes") explicitly names
  // "bicameral/unicameral" in its own example list, so the state-civics-ne flagship's headline —
  // Nebraska's one-house, officially nonpartisan Unicameral — gets a genuine 1:1 home, alongside its
  // local-government (SS HS.1.1.d) and civic-participation (SS HS.1.2.a/c) standards.
  {
    id: "civics.ne-unicameral",
    claim:
      "Teaches the fact that defines Nebraska government: it has the ONLY unicameral (single-house) legislature in the United States, and the only OFFICIALLY NONPARTISAN one — its 49 members are called Senators (one per district, four-year terms, limited to two consecutive terms), they appear on the ballot with no party label, and leadership and committee chairs are chosen by the members rather than by party; Nebraskans adopted 'the Unicameral' by ballot initiative in 1934 (championed by U.S. Senator George W. Norris, who argued a single nonpartisan house would be cheaper, more transparent, and less prone to backroom deals), effective 1937.",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 1 · The Unicameral: one house, no party labels",
    ],
  },
  {
    id: "civics.ne-lawmaking",
    claim:
      "Teaches how a bill becomes law in a one-house legislature: a distinctive Nebraska rule guarantees EVERY bill introduced a public hearing where any citizen may testify; because there is no second chamber, each bill is debated in three separate stages (General File, Select File, Final Reading); there is no conference committee to reconcile two versions; and the Governor may sign, veto, or line-item veto appropriations, with the Unicameral overriding a veto by a three-fifths vote (30 of 49 senators) — single-house deliberation that replaces the role a second chamber would play.",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 2 · How a bill becomes law in a one-house legislature",
    ],
  },
  {
    id: "civics.ne-direct-democracy",
    claim:
      "Teaches Nebraska's strong direct democracy, the citizen backstop paired with its one-house Legislature (tools added in 1912): the initiative (put a statute or constitutional amendment on the ballot by petition), the referendum (veto a law the Legislature passed), and recall for many local offices.",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 2 · How a bill becomes law in a one-house legislature",
    ],
  },
  {
    id: "civics.ne-executive",
    claim:
      "Teaches Nebraska's executive branch: the Governor and Lieutenant Governor run together on a joint ticket, while voters separately elect the Secretary of State, Attorney General, State Treasurer, and State Auditor, and Nebraska also directly elects several boards — the Public Service Commission, the State Board of Education, and the University Board of Regents.",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 3 · The executive and how Nebraska picks its judges",
    ],
  },
  {
    id: "civics.ne-courts-merit-selection",
    claim:
      "Teaches how Nebraska chooses its judges: the 'Missouri Plan' merit selection followed by retention — a nonpartisan judicial nominating commission vets applicants and sends the Governor a short list, the Governor appoints from it, and the judge later faces voters in a nonpartisan yes/no retention election; the Nebraska Supreme Court has seven members (a Chief Justice plus six justices from districts), keeping judges out of partisan campaigns.",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 3 · The executive and how Nebraska picks its judges",
    ],
  },
  {
    id: "civics.ne-public-power",
    claim:
      "Teaches a Nebraska first: it is the ONLY state in the nation where ALL electricity is publicly owned — there are no private, for-profit electric utilities; power is delivered by public power districts, municipal utilities, and cooperatives governed by ELECTED boards (a legacy of Nebraska's early-20th-century public-power movement associated with George Norris), so a Nebraskan's electricity provider is a government or cooperative body whose board they can vote for, and rates and policy are set by boards they elect.",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 4 · Two more Nebraska firsts: public power and split electoral votes",
    ],
  },
  {
    id: "civics.ne-split-electoral",
    claim:
      "Teaches that Nebraska is one of only two states (with Maine) that SPLITS its presidential electoral votes by congressional district rather than winner-take-all: two electors go to the statewide winner and one elector goes to the winner of each congressional district, which is why Nebraska's Omaha-based 'blue dot' district can send a single electoral vote to a different candidate than the rest of the state — flagged time-sensitive because proposals to switch to winner-take-all surface periodically.",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 4 · Two more Nebraska firsts: public power and split electoral votes",
    ],
  },
  {
    id: "civics.ne-local-government",
    claim:
      "Teaches Nebraska local government as Nebraska's own: 93 counties, most governed by an elected county board (of commissioners or supervisors) plus separately elected officials (sheriff, clerk, treasurer, attorney, assessor); cities and villages classified by size (Omaha and Lincoln hold home-rule charters); elected public-power district boards; natural resources districts (NRDs), a Nebraska innovation for managing water and soil by watershed; and school districts.",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 5 · Local government and how to take part",
    ],
  },
  {
    id: "civics.ne-get-involved",
    claim:
      "Teaches getting involved where you live, Nebraska edition — registering and voting (including for the public-power and NRD boards that set electricity and water policy, with a voter photo-ID requirement added by initiative in 2022, flagged time-sensitive and pointing to sos.nebraska.gov), testifying at the Unicameral (where every bill gets a public hearing, an unusually open door), using the strong initiative and referendum, contacting your single state senator, and running for reachable local office (school board, city council, county board, NRD, and public-power boards).",
    courseSlugs: ["state-civics-ne"],
    lessons: [
      "Nebraska Civics, Lesson 5 · Local government and how to take part",
    ],
  },

  // ── Federalism powers taxonomy (used by states whose standards name it) ──
  {
    id: "civics.federal-powers-taxonomy",
    claim: "Teaches the powers taxonomy by name: enumerated/delegated, implied (Necessary and Proper Clause), reserved (Tenth Amendment), and concurrent powers — with McCulloch v. Maryland.",
    courseSlugs: ["state-vs-federal"],
    lessons: [
      "State vs Federal Power, Lesson 2 · Three kinds of power: enumerated, implied, reserved",
      "State vs Federal Power, Lesson 3 · The enumerated powers: Article I, § 8 (the Necessary and Proper Clause)",
      "State vs Federal Power, Lesson 6 · Concurrent powers: what both levels share",
      "State vs Federal Power, Lesson 7 · McCulloch v. Maryland (1819): implied powers and supremacy",
    ],
  },

  // ══ History catalog ═════════════════════════════════════════════════════════
  {
    id: "history.gilded-age-labor",
    claim: "Teaches the Gilded Age labor movement: the Knights, the AFL, Haymarket, Homestead, Pullman.",
    courseSlugs: ["history-of-unions"],
    lessons: [
      "The History of Unions, Lesson 4 · Two ideas about who a union is for: the Knights and the AFL",
      "The History of Unions, Lesson 5 · Haymarket, 1886",
      "The History of Unions, Lesson 6 · Homestead, Pullman, and the weapon that actually broke strikes",
    ],
  },
  {
    id: "history.jim-crow-and-long-shadow",
    claim: "Teaches the Jim Crow South — the denial of rights people fled — and its effects in future years.",
    courseSlugs: ["great-migration"],
    lessons: [
      "The Great Migration, Lesson 2 · The Jim Crow South: what people were fleeing",
      "The Great Migration, Lesson 12 · The long shadow — and the return",
    ],
  },
  {
    id: "history.harlem-renaissance-black-press",
    claim: "Teaches the Harlem Renaissance, the New Negro, and the Black press as an engine of the Migration.",
    courseSlugs: ["great-migration"],
    lessons: [
      "The Great Migration, Lesson 6 · The Black press as engine: the Chicago Defender",
      "The Great Migration, Lesson 7 · The Harlem Renaissance & the New Negro",
    ],
  },
  {
    id: "history.triangle-fire-debs",
    claim: "Teaches Progressive-Era labor: the Triangle fire and Debs' socialist movement.",
    courseSlugs: ["history-of-unions"],
    lessons: [
      "The History of Unions, Lesson 8 · The Triangle fire, 1911 — and what it actually changed",
      "The History of Unions, Lesson 6 · Homestead, Pullman (Eugene Debs and the socialist movement)",
    ],
  },
  {
    id: "history.migration-streams-arrival",
    claim: "Teaches the Great Migration's routes, arrival cities, and community institutions.",
    courseSlugs: ["great-migration"],
    lessons: [
      "The Great Migration, Lesson 4 · Routes and railroads: the three streams",
      "The Great Migration, Lesson 5 · Arrival: Chicago, Detroit, New York, and the Pacific Northwest",
      "The Great Migration, Lesson 9 · Faith, family & mutual aid",
    ],
  },
  {
    id: "history.wagner-act",
    claim: "Teaches the Wagner Act, what it created, and precisely who it excluded.",
    courseSlugs: ["history-of-unions"],
    lessons: [
      "The History of Unions, Lesson 9 · 1935: the year organizing became a right (the Wagner Act)",
      "The History of Unions, Lesson 10 · The hole in the law: who the Wagner Act left out",
    ],
  },
  {
    id: "history.migration-civil-rights-politics",
    claim: "Teaches the Black urban vote the Migration created and its civil-rights politics.",
    courseSlugs: ["great-migration"],
    lessons: ["The Great Migration, Lesson 11 · Politics & civil rights"],
  },
  {
    id: "history.labor-civil-rights",
    claim: "Teaches the labor half of the civil-rights movement: Randolph to Memphis, and unions' own colour bar.",
    courseSlugs: ["history-of-unions"],
    lessons: [
      "The History of Unions, Lesson 16 · The colour bar: unions' own history of exclusion",
      "The History of Unions, Lesson 17 · Randolph to Memphis: the labor half of the civil-rights movement",
    ],
  },
  {
    id: "history.nafta-usmca-labor",
    claim: "Teaches NAFTA→USMCA from the labor side, including the Rapid Response Mechanism and its limits.",
    courseSlugs: ["labor-mexico"],
    lessons: [
      "Mexico, Lesson 7 · Mexico rewrites its labor law — and the 68-year gap that explains why",
      "Mexico, Lesson 10 · The Rapid Response Mechanism: an international labor rule with teeth",
      "Mexico, Lesson 12 · The limits, honestly: the cases the United States lost",
    ],
  },
  {
    id: "history.taft-hartley-patco",
    claim: "Teaches the rollback of New Deal labor law: Taft-Hartley 1947 and PATCO 1981.",
    courseSlugs: ["history-of-unions"],
    lessons: [
      "The History of Unions, Lesson 13 · Taft-Hartley, 1947: what the law took back",
      "The History of Unions, Lesson 14 · PATCO, 1981 — and reading the decline honestly",
    ],
  },
  {
    id: "history.migration-primary-sources",
    claim: "Points every lesson to a real archive and turns an unsupported statistic into a limitations-of-evidence lesson.",
    courseSlugs: ["great-migration"],
    lessons: [
      "The Great Migration · every lesson carries a primary-source pointer to its real archive",
      "The Great Migration, Lesson 5 · Arrival (the Philadelphia “500% growth” claim, checked against the raw census figures it fails)",
    ],
  },
  {
    id: "history.solidarnosc-cold-war",
    claim: "Teaches the Cold War's end in Eastern Europe through Poland: Solidarność, martial law, 1989.",
    courseSlugs: ["labor-poland"],
    lessons: [
      "Poland: Solidarność, Lesson 3 · A workers' state with a worker problem",
      "Poland: Solidarność, Lesson 7 · 13 December 1981: the state answers (martial law)",
      "Poland: Solidarność, Lesson 8 · 1989: a union negotiates a state out of existence",
    ],
  },
  {
    id: "history.poland-1989-democratization",
    claim: "Teaches Poland's 1989 democratization and its economic price (shock therapy).",
    courseSlugs: ["labor-poland"],
    lessons: [
      "Poland: Solidarność, Lesson 8 · 1989: a union negotiates a state out of existence",
      "Poland: Solidarność, Lesson 9 · What winning cost: shock therapy",
    ],
  },

  // ══ Health & wellness catalog ═══════════════════════════════════════════════
  {
    id: "health.oral-health-behaviors",
    claim: "Teaches oral-health behaviors tied to their measured effects, with the evidence graded honestly.",
    courseSlugs: ["dental-health-101"],
    lessons: [
      "Dental Health 101, Lessons 2-5 · brushing, flossing, fluoride, and diet — each tied to its measured effect",
    ],
  },
  {
    id: "health.tracker-behavior-metrics",
    claim: "Teaches reading behaviors against your own resting heart rate, steps, sleep, and activity.",
    courseSlugs: ["read-your-bodys-data"],
    lessons: [
      "Read Your Body's Data · the whole course: behaviors read against your own resting heart rate, steps, sleep, and activity",
    ],
  },
  {
    id: "health.dental-care-access",
    claim: "Analyzes what regular dental care catches, and the mouth-body evidence, honestly bounded.",
    courseSlugs: ["dental-health-101"],
    lessons: [
      "Dental Health 101, Lesson 6 · Regular dental visits: what a checkup actually catches",
      "Dental Health 101, Lessons 7-9 · the mouth-body connection: gum disease, diabetes, and heart disease",
    ],
  },
  {
    id: "health.evaluate-dental-evidence",
    claim: "Teaches evaluating health information: evidence hierarchies, Cochrane reviews, myths debunked.",
    courseSlugs: ["dental-health-101"],
    lessons: [
      "Dental Health 101, Lesson 3 · Flossing and interdental cleaning: what the evidence actually shows",
      "Dental Health 101, Lesson 10 · Common dental myths, debunked",
    ],
  },
  {
    id: "health.health-product-claims",
    claim: "Teaches evaluating health-product and supplement marketing, and verifying claims yourself.",
    courseSlugs: ["spotting-misleading-marketing"],
    lessons: [
      "Spotting Misleading Marketing, Lesson 7 · Health, supplements, and “structure/function” claims",
      "Spotting Misleading Marketing, Lesson 10 · How to verify a claim (and follow the money)",
    ],
  },
  {
    id: "health.blueprint-goal-plan",
    claim: "Has the learner build a data-grounded 90-day personal health blueprint as the capstone.",
    courseSlugs: ["read-your-bodys-data"],
    lessons: [
      "Read Your Body's Data · The Capstone: My Health Blueprint (a 90-day plan built from five weeks of your own data)",
    ],
  },
  {
    id: "health.woop-goal-setting",
    claim: "Walks the learner through setting a goal and writing the plan with mental contrasting + implementation intentions.",
    courseSlugs: ["woop-science-of-doing-it"],
    lessons: [
      "WOOP, Lesson 16 · The four steps: wish, outcome, obstacle, plan",
      "WOOP, Lesson 17 · Your turn: run it, now, on the goal you wrote down in Lesson 1",
    ],
  },
  {
    id: "health.woop-obstacle-strategies",
    claim: "Teaches obstacle-first strategies (mental contrasting, if-then plans) with trial evidence including health behaviors.",
    courseSlugs: ["woop-science-of-doing-it"],
    lessons: [
      "WOOP, Lesson 7 · The obstacle is inside you (this is where most people fail)",
      "WOOP, Lesson 13 · How to write an if-then that actually fires",
      "WOOP, Lesson 18 · The six ways people run it wrong",
    ],
  },
  {
    id: "health.n-of-1-implement-adjust",
    claim: "Has the learner implement, analyze, and adjust a plan via an N-of-1 experiment on their own data.",
    courseSlugs: ["read-your-bodys-data"],
    lessons: [
      "Read Your Body's Data · What an N-of-1 Experiment Is / Designing Your N-of-1",
      "Read Your Body's Data · Analyzing Results and Iterating",
      "Read Your Body's Data · Your System Architecture: Triggers, Logging, Review",
    ],
  },

  // ══ Physical education catalog ══════════════════════════════════════════════
  {
    id: "pe.sport-strategy-knowledge",
    claim: "Teaches sport concepts, principles, strategies, terminology, and tactics in depth, sport by sport.",
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
  },
  {
    id: "pe.wearable-tech-activity",
    claim: "Has the learner apply wearables and a daily log to support their own activity habits.",
    courseSlugs: ["read-your-bodys-data"],
    lessons: [
      "Read Your Body's Data · Pick Your Device and Where to Log It",
      "Read Your Body's Data · Setting Up Your Device and a Baseline Protocol",
      "Read Your Body's Data · Intensity Minutes: The Strongest Longevity Metric",
    ],
  },
  {
    id: "pe.fitness-plan-blueprint",
    claim: "Has the learner design and implement a fitness plan: assessment, goals, activities, log, 90-day timeline.",
    courseSlugs: ["read-your-bodys-data"],
    lessons: [
      "Read Your Body's Data · Designing Your N-of-1",
      "Read Your Body's Data · The Capstone: My Health Blueprint (assessment, goals, activities, log, 90-day timeline)",
    ],
  },

  // ══ Media literacy catalog ══════════════════════════════════════════════════
  {
    id: "media.marketing-omissions",
    claim: "Teaches omission, disclosure, and source reliability as everyday consumer skills.",
    courseSlugs: ["spotting-misleading-marketing"],
    lessons: [
      "Spotting Misleading Marketing, Lesson 3 · Weasel words and what the fine print takes back",
      "Spotting Misleading Marketing, Lesson 5 · Fake reviews, astroturfing, and undisclosed #ads",
    ],
  },
  {
    id: "media.misleading-statistics",
    claim: "Teaches named persuasion tactics, cherry-picked statistics, and truncated charts.",
    courseSlugs: ["spotting-misleading-marketing"],
    lessons: [
      "Spotting Misleading Marketing, Lesson 8 · Misleading statistics and charts",
      "Spotting Misleading Marketing, Lesson 4 · Fake urgency, fake scarcity, and fake discounts",
    ],
  },

  // ── State civics: Alabama (state-civics-al was written FROM Alabama's own sources) ──
  // NOTE: Alabama's grade-12 United States Government course (2010 Alabama Course of Study:
  // Social Studies) reaches Alabama's OWN government explicitly through Standard 5, which directs
  // students to compare state and local governments and, by name, to analyze "the Constitution of
  // Alabama of 1901" — so, unlike the abstract-concept states, the Alabama flagship's structure
  // lessons have a genuine home, mapped there. Alabama writes its OWN ELA, mathematics, and science
  // standards (it is NOT a Common Core or NGSS state); data/al.ts publishes those subjects as
  // deferred gaps (fetch-or-don't-cite), not denials. Alabama is BESPOKE-heavy.
  {
    id: "civics.al-constitution-home-rule",
    claim:
      "Teaches Alabama's Constitution of 1901 — which grew into the longest constitution in the world, with more than 900 (often local) amendments — and the 2022 recompiled 'Constitution of Alabama 2022' that removed racist language and reorganized the text, explaining that Alabama's weak-home-rule tradition centralized power in the Montgomery Legislature so that even local matters often required statewide constitutional amendments.",
    courseSlugs: ["state-civics-al"],
    lessons: [
      "Alabama Civics, Lesson 1 · The longest constitution in the world (and the 2022 recompile)",
      "Alabama Civics, Lesson 2 · Weak home rule and Alabama's large plural executive",
    ],
  },
  {
    id: "civics.al-plural-executive",
    claim:
      "Teaches Alabama's large plural executive — the Governor, a separately elected Lieutenant Governor (who can be of a different party), Attorney General, Secretary of State, Treasurer, Auditor, and Commissioner of Agriculture and Industries, plus the elected Public Service Commission and State Board of Education — and its comparatively weak governor's veto, which the Legislature can override with only a simple majority.",
    courseSlugs: ["state-civics-al"],
    lessons: [
      "Alabama Civics, Lesson 2 · Weak home rule and Alabama's large plural executive",
    ],
  },
  {
    id: "civics.al-legislature-courts",
    claim:
      "Teaches Alabama's Legislature (a 105-member House of Representatives and a 35-member Senate, all on 4-year terms) and its openly PARTISAN elected judiciary: the 9-justice Supreme Court of Alabama and two separate intermediate appellate courts (the Court of Civil Appeals and the Court of Criminal Appeals), all elected statewide with party labels on the ballot to 6-year terms.",
    courseSlugs: ["state-civics-al"],
    lessons: [
      "Alabama Civics, Lesson 3 · The Legislature and Alabama's partisan-elected judiciary",
    ],
  },
  {
    id: "civics.al-lawmaking-amendments",
    claim:
      "Teaches how a bill becomes an Alabama law (introduction, committee, floor votes in both chambers, then the Governor's signature or weak veto) and that Alabama has no statewide citizen initiative, so constitutional amendments are proposed by the Legislature and ratified by voters — which, given weak home rule, is why Alabamians vote on so many (often local) amendments.",
    courseSlugs: ["state-civics-al"],
    lessons: [
      "Alabama Civics, Lesson 3 · The Legislature and Alabama's partisan-elected judiciary",
    ],
  },
  {
    id: "civics.al-local-government",
    claim:
      "Teaches Alabama local government as Alabama's: 67 counties governed by elected county commissions (plus separately elected sheriff, probate judge, and tax officials), cities and towns, and school systems — but limited by weak home rule, so counties often need state legislative action or a constitutional amendment for many local decisions.",
    courseSlugs: ["state-civics-al"],
    lessons: [
      "Alabama Civics, Lesson 4 · Local government and how to take part",
    ],
  },
  {
    id: "civics.al-elections-involved",
    claim:
      "Teaches Alabama's election specifics (a photo-ID requirement and comparatively restrictive, generally excuse-required absentee voting, administered by county officials and confirmed at sos.alabama.gov) and how to take part where you live: watching your legislative delegation because weak home rule sends local matters to Montgomery, reading the many amendments on the ballot, and showing up at county commissions, city councils, and school boards.",
    courseSlugs: ["state-civics-al"],
    lessons: [
      "Alabama Civics, Lesson 4 · Local government and how to take part",
    ],
  },

  // ── State civics: Louisiana (state-civics-la was written FROM Louisiana's own sources) ──
  // NOTE: Louisiana's High School Civics course (2022 Louisiana Student Standards for Social
  // Studies) reaches Louisiana's OWN government explicitly and in three places — C.9.i (the
  // Louisiana State Constitution over time, compared with the U.S. Constitution), C.9.j (the
  // historical connection between Civil Law, the Napoleonic Code, and Louisiana's system of laws),
  // and C.11.k (local and parish governments, police juries, and home rule charters) — so the
  // Louisiana flagship's most distinctive lessons map 1:1. Louisiana replaced Common Core with its
  // own Louisiana Student Standards for ELA and Mathematics, and its science is Louisiana's own
  // (2017, NGSS-BASED but Louisiana's own document); data/la.ts publishes those as deferred gaps —
  // NOT blind-aliased to any shared framework without a text comparison. Louisiana is BESPOKE-heavy.
  {
    id: "civics.la-civil-law",
    claim:
      "Teaches Louisiana's defining difference: it is the only U.S. state whose legal system is built on CIVIL LAW (the French and Spanish, ultimately Roman/Napoleonic, tradition organized in a Civil Code) rather than English common law, with distinctive vocabulary — parishes, usufruct, forced heirship — that traces to its French and Spanish colonial past. Louisiana became the 18th state on April 30, 1812.",
    courseSlugs: ["state-civics-la"],
    lessons: [
      "Louisiana Civics, Lesson 1 · Louisiana's defining difference: a civil-law state",
    ],
  },
  {
    id: "civics.la-constitution-branches",
    claim:
      "Teaches Louisiana's Constitution of 1974 (its eleventh) and its three branches: a bicameral Legislature of 105 representatives and 39 senators on 4-year terms with a three-consecutive-term (12-year) limit, a plural executive of seven separately elected statewide officials (Governor, Lieutenant Governor, Secretary of State, Attorney General, Treasurer, and the Commissioners of Agriculture and Forestry and of Insurance), and a Governor whose veto the Legislature overrides by a two-thirds vote of each chamber.",
    courseSlugs: ["state-civics-la"],
    lessons: [
      "Louisiana Civics, Lesson 2 · The Constitution of 1974 and the three branches",
    ],
  },
  {
    id: "civics.la-jungle-primary",
    claim:
      "Teaches Louisiana's 'jungle primary' (the open primary): all candidates of every party appear on one ballot in the first round, a candidate who wins an outright majority takes the office with no runoff, and otherwise the top two finishers advance to a runoff even if they belong to the same party — unlike Washington's or California's top-two, where two candidates always advance.",
    courseSlugs: ["state-civics-la"],
    lessons: [
      "Louisiana Civics, Lesson 3 · Louisiana's 'jungle primary' (the open primary)",
    ],
  },
  {
    id: "civics.la-lawmaking-amendments",
    claim:
      "Teaches how a bill becomes a Louisiana law (introduction, committee, floor votes in both chambers, then the Governor's signature, veto, or line-item veto, with a two-thirds override and even a veto-override session) and that Louisiana has no general citizen initiative, so only constitutional amendments — proposed by a two-thirds vote of each chamber — reach voters for ratification, which they do often.",
    courseSlugs: ["state-civics-la"],
    lessons: [
      "Louisiana Civics, Lesson 4 · How a bill becomes a Louisiana law",
    ],
  },
  {
    id: "civics.la-parishes",
    claim:
      "Teaches Louisiana local government as Louisiana's: 64 PARISHES rather than counties (the only state to use the term, a legacy of its French and Spanish Catholic colonial past), governed by a traditional Police Jury or by a parish president and council under a home-rule charter, with consolidated city-parish governments such as New Orleans and Baton Rouge.",
    courseSlugs: ["state-civics-la"],
    lessons: [
      "Louisiana Civics, Lesson 5 · Parishes: Louisiana's counties by another name",
    ],
  },
  {
    id: "civics.la-courts-elections-involved",
    claim:
      "Teaches how Louisiana elects its judges (including a 7-justice Supreme Court elected from geographic districts to 10-year terms, using the same open-primary format) and its voting rules (ID with a fallback affidavit, early in-person voting, and qualifying-reason absentee voting administered by the Secretary of State and parish Registrars of Voters), and how to take part where you live through police juries, parish councils, city councils, and school boards.",
    courseSlugs: ["state-civics-la"],
    lessons: [
      "Louisiana Civics, Lesson 6 · Judges, voting, and how to take part",
    ],
  },
  // ── State civics: Iowa (state-civics-ia was written FROM Iowa's own sources) ──
  // NOTE: Iowa writes its OWN social studies standards (the Iowa Academic Standards for Social
  // Studies, current January 2026 revision, C3-informed — not Common Core). Its High School
  // Civics/Government course names Iowa's own government explicitly and in three places —
  // SS.9-12.Gov.18 (the government of the State of Iowa), SS.9-12.Gov.20 (Iowa's local governments),
  // and SS.9-12.Gov.13 (Iowa election law, absentee voting, the Iowa Caucuses, and redistricting) —
  // so the Iowa flagship's most distinctive lessons map 1:1. data/ia.ts gives them a home and also
  // transcribes Iowa's own literacy (ELA) standards VERBATIM (Iowa revised some Common Core codes, so
  // they are NOT blind-aliased to the shared framework). Iowa is INHERIT-heavy with a bespoke frame.
  {
    id: "civics.ia-caucuses",
    claim:
      "Teaches Iowa's precinct caucuses — neighborhood party meetings (not ballot primaries) that traditionally opened the presidential nominating season 'first in the nation,' giving a small farm state outsized, face-to-face retail-campaign influence — while flagging that the nominating calendar has recently shifted, so exact 'first' status varies by party and year (confirm at sos.iowa.gov). Iowa governs under its Constitution of 1857 and became the 29th state on December 28, 1846.",
    courseSlugs: ["state-civics-ia"],
    lessons: [
      "Iowa Civics, Lesson 1 · The Iowa caucuses: going first in presidential politics",
    ],
  },
  {
    id: "civics.ia-redistricting",
    claim:
      "Teaches Iowa's nationally admired nonpartisan redistricting: the nonpartisan Legislative Services Agency (LSA) draws Iowa's legislative and congressional maps on neutral criteria (equal population, compact districts, respect for county and city lines) and is forbidden from considering past election results, incumbents' addresses, or party registration; the Legislature then votes the maps up or down — a model widely cited for reducing gerrymandering.",
    courseSlugs: ["state-civics-ia"],
    lessons: [
      "Iowa Civics, Lesson 2 · Iowa's nonpartisan redistricting: a national model",
    ],
  },
  {
    id: "civics.ia-executive-legislature",
    claim:
      "Teaches Iowa's plural executive (the Governor and Lieutenant Governor on a joint ticket, plus a separately elected Secretary of State, Attorney General, State Treasurer, State Auditor, and Secretary of Agriculture — a fitting office for a major farm state, all on 4-year terms) and the Iowa General Assembly (a 100-member House on 2-year terms and a 50-member Senate on 4-year terms), with the Governor's strong item veto on appropriations and a two-thirds override.",
    courseSlugs: ["state-civics-ia"],
    lessons: [
      "Iowa Civics, Lesson 3 · The executive and the General Assembly",
    ],
  },
  {
    id: "civics.ia-judiciary",
    claim:
      "Teaches Iowa's merit-selection judiciary (the 'Missouri Plan'): a State Judicial Nominating Commission screens applicants and sends the Governor a list, the Governor appoints, and the judge later faces voters in a nonpartisan yes/no retention election; the Iowa Supreme Court has 7 justices, and Iowa's 2010 removal of three justices showed retention votes are real.",
    courseSlugs: ["state-civics-ia"],
    lessons: [
      "Iowa Civics, Lesson 3 · The executive and the General Assembly",
    ],
  },
  {
    id: "civics.ia-lawmaking",
    claim:
      "Teaches how a bill becomes an Iowa law (introduction, committee, floor votes in both chambers, then the Governor's signature, veto with a two-thirds override, or item veto of appropriations) and that Iowa has NO statewide citizen initiative for general laws — an unusual gap: constitutional amendments must be passed by two consecutive General Assemblies and then ratified by the voters.",
    courseSlugs: ["state-civics-ia"],
    lessons: [
      "Iowa Civics, Lesson 4 · How a bill becomes law, local government, and getting involved",
    ],
  },
  {
    id: "civics.ia-local-government",
    claim:
      "Teaches Iowa local government as Iowa's: 99 counties (a famously large number for the state's size) governed by elected boards of supervisors and other elected county officials, cities under a strong home-rule tradition, townships and special districts, and locally run school districts.",
    courseSlugs: ["state-civics-ia"],
    lessons: [
      "Iowa Civics, Lesson 4 · How a bill becomes law, local government, and getting involved",
    ],
  },
  {
    id: "civics.ia-elections",
    claim:
      "Teaches Iowa's election specifics — early/absentee voting and a voter-ID requirement, administered by county auditors, with early-voting windows and deadlines adjusted in recent years — and a standing flag to confirm the current rules at sos.iowa.gov before voting.",
    courseSlugs: ["state-civics-ia"],
    lessons: [
      "Iowa Civics, Lesson 4 · How a bill becomes law, local government, and getting involved",
    ],
  },
  {
    id: "civics.ia-get-involved",
    claim:
      "Teaches getting involved where you live, Iowa edition — attending your precinct caucus (a hands-on way to shape party business and, in presidential years, register a preference), registering and voting under current sos.iowa.gov rules, showing up at county boards of supervisors, city councils, and school boards, contacting your one Representative and one Senator in Des Moines, and running for local office.",
    courseSlugs: ["state-civics-ia"],
    lessons: [
      "Iowa Civics, Lesson 4 · How a bill becomes law, local government, and getting involved",
    ],
  },
  // ── State civics: Mississippi (state-civics-ms was written FROM Mississippi's own sources) ──
  // NOTE: Mississippi's College- and Career-Readiness Standards for the Social Studies (2018) reach
  // Mississippi's OWN government explicitly in the Mississippi Studies course: MS.10 ("Analyze the
  // structure and function of local and state government in Mississippi") is a genuine 1:1 home for
  // the Mississippi flagship's own-structure lessons (the 1890 constitution, the powerful Lieutenant
  // Governor, the 82-county board-of-supervisors layer, the nonpartisan elected judiciary). The
  // required US Government course (USG.1-7) is FEDERAL and carries the general civics ladder, with a
  // media-literacy home at USG.6.7/6.8. data/ms.ts also transcribes Mississippi's own literacy (ELA)
  // standards VERBATIM (Common-Core-derived, but MS revised RH.11-12.6, so NOT blind-aliased). MS is
  // BESPOKE-leaning.
  {
    id: "civics.ms-recent-changes",
    claim:
      "Teaches that Mississippi's rules and symbols changed recently: in 2020 voters approved a constitutional amendment removing an 1890 Jim Crow-era rule that required a candidate for Governor or statewide office to win BOTH a majority of the popular vote AND a majority of the 122 state House districts (or the House would choose the winner), replacing it with a popular-majority-or-runoff system; and in 2020 Mississippi retired the last U.S. state flag carrying the Confederate battle emblem and voters approved a new 'In God We Trust'/Magnolia flag. Mississippi became the 20th state on December 10, 1817, and still governs under its much-amended Constitution of 1890.",
    courseSlugs: ["state-civics-ms"],
    lessons: [
      "Mississippi Civics, Lesson 1 · A state that changed: the 2020 election rule and the new flag",
    ],
  },
  {
    id: "civics.ms-executive",
    claim:
      "Teaches Mississippi's large plural executive (a Governor and a separately elected Lieutenant Governor — who can be from a different party — plus a separately elected Secretary of State, Attorney General, Treasurer, Auditor, Insurance Commissioner, and Commissioner of Agriculture and Commerce, and the elected Public Service and Transportation Commissions) and that Mississippi's Lieutenant Governor is one of the most powerful in the nation, presiding over the state Senate and strongly controlling its committees, calendar, and which bills advance; statewide officers serve 4-year terms elected in odd-numbered years (for example 2023 and 2027).",
    courseSlugs: ["state-civics-ms"],
    lessons: [
      "Mississippi Civics, Lesson 2 · A large plural executive and an unusually powerful Lieutenant Governor",
    ],
  },
  {
    id: "civics.ms-legislature-initiative",
    claim:
      "Teaches Mississippi's Legislature (a 122-member House of Representatives and a 52-member Senate, all on 4-year terms, with the Lieutenant Governor wielding strong influence over the Senate) and how a bill becomes a Mississippi law, and that Mississippi's citizen ballot-initiative process is currently NOT in effect: its formula required signatures gathered equally from five congressional districts, but Mississippi dropped to four U.S. House seats after the 2000 census, so in May 2021 the Mississippi Supreme Court ruled the entire initiative process invalid until the Legislature and voters adopt a fix.",
    courseSlugs: ["state-civics-ms"],
    lessons: [
      "Mississippi Civics, Lesson 3 · The Legislature, and why Mississippi's initiative doesn't work right now",
    ],
  },
  {
    id: "civics.ms-judiciary",
    claim:
      "Teaches how Mississippi picks its judges: it ELECTS them on a NONPARTISAN ballot (no party label appears next to their names), with a 9-justice Mississippi Supreme Court elected from districts to 8-year terms, and Court of Appeals, Circuit, and Chancery judges likewise elected nonpartisan; when a seat opens mid-term the Governor appoints a replacement who then stands for election.",
    courseSlugs: ["state-civics-ms"],
    lessons: [
      "Mississippi Civics, Lesson 4 · Judges, local government, and how to take part",
    ],
  },
  {
    id: "civics.ms-local-government",
    claim:
      "Teaches Mississippi local government as Mississippi's: 82 counties, each governed by an elected board of supervisors from five supervisor districts (or 'beats'), plus other elected county officials (sheriff, chancery and circuit clerks, tax officials), with cities and towns providing municipal services and school and special districts rounding out local government.",
    courseSlugs: ["state-civics-ms"],
    lessons: [
      "Mississippi Civics, Lesson 4 · Judges, local government, and how to take part",
    ],
  },
  {
    id: "civics.ms-elections",
    claim:
      "Teaches Mississippi's election specifics — a photo-ID requirement and comparatively limited early/absentee options (an excuse is generally required for absentee, and Mississippi has been slower than many states to adopt no-excuse early voting), administered by county election officials, with big elections falling in odd years — and a standing flag to confirm the current rules at sos.ms.gov before voting.",
    courseSlugs: ["state-civics-ms"],
    lessons: [
      "Mississippi Civics, Lesson 4 · Judges, local government, and how to take part",
    ],
  },
  {
    id: "civics.ms-get-involved",
    claim:
      "Teaches getting involved where you live, Mississippi edition — registering and voting with photo ID (checking absentee eligibility and Mississippi's odd-year calendar at sos.ms.gov), showing up at your county board of supervisors, city council, and school board, contacting your one Representative and one Senator in Jackson, watching for a legislative fix that would restore the citizen initiative, and running for local office.",
    courseSlugs: ["state-civics-ms"],
    lessons: [
      "Mississippi Civics, Lesson 4 · Judges, local government, and how to take part",
    ],
  },

  // ── State civics: New Mexico (state-civics-nm was written FROM New Mexico's own sources) ──
  // New Mexico's 2022 Social Studies Standards (bespoke, effective 2023) give the flagship a
  // genuine home: 9-12.Civ.29 ("Explain the unique features and processes of New Mexico's
  // constitution"), 9-12.Civ.30 (the contributions of New Mexico's diverse populations to its
  // government), and 9-12.Civ.31 (challenges and opportunities among New Mexico's government
  // entities) are near-1:1 with the flagship's bilingual-constitution, diverse-populations, and
  // state-structure lessons. The federal ladder + citizenship standards carry the general civics
  // claims. All mapped in data/nm.ts.
  {
    id: "civics.nm-bilingual-constitution",
    claim:
      "Teaches New Mexico's 1912 constitution and its special protections for Spanish-speaking citizens — the right to vote, hold office, serve on juries, and receive an equal education regardless of ability to read or write English or Spanish — making New Mexico effectively the most bilingual state.",
    courseSlugs: ["state-civics-nm"],
    lessons: [
      "New Mexico Civics, Lesson 1 · New Mexico's bilingual constitution and its cultures",
    ],
  },
  {
    id: "civics.nm-tribal-nations",
    claim:
      "Teaches the sovereign tribal nations within New Mexico — 19 Pueblos plus the Navajo Nation and Apache tribes — as governments with their own laws and courts, an essential part of the state's civic landscape.",
    courseSlugs: ["state-civics-nm"],
    lessons: [
      "New Mexico Civics, Lesson 1 · New Mexico's bilingual constitution and its cultures",
      "New Mexico Civics, Lesson 4 · How a bill becomes law, local government, and getting involved",
    ],
  },
  {
    id: "civics.nm-unpaid-legislature",
    claim:
      "Teaches New Mexico's Legislature — the only fully volunteer (unpaid) state legislature in the nation — with a 70-member House and 42-member Senate that alternates a 60-day session in odd years and a 30-day budget session in even years.",
    courseSlugs: ["state-civics-nm"],
    lessons: [
      "New Mexico Civics, Lesson 2 · The only unpaid legislature in the nation",
    ],
  },
  {
    id: "civics.nm-executive",
    claim:
      "Teaches New Mexico's plural executive: the Governor and Lieutenant Governor, the Secretary of State, the Attorney General, the State Treasurer, the State Auditor, and the Commissioner of Public Lands, all serving 4-year terms with term limits.",
    courseSlugs: ["state-civics-nm"],
    lessons: [
      "New Mexico Civics, Lesson 3 · The executive and how New Mexico picks its judges",
    ],
  },
  {
    id: "civics.nm-courts",
    claim:
      "Teaches New Mexico's distinctive hybrid judicial selection — a nominating commission and gubernatorial appointment, then a partisan election, then nonpartisan yes/no retention — and its 5-justice Supreme Court.",
    courseSlugs: ["state-civics-nm"],
    lessons: [
      "New Mexico Civics, Lesson 3 · The executive and how New Mexico picks its judges",
    ],
  },
  {
    id: "civics.nm-lawmaking",
    claim:
      "Teaches how a bill becomes a New Mexico law, the Governor's line-item veto and the two-thirds override, and that New Mexico has no statewide citizen initiative — constitutional amendments are referred by the Legislature to the voters, with the language-rights provisions especially hard to amend.",
    courseSlugs: ["state-civics-nm"],
    lessons: [
      "New Mexico Civics, Lesson 4 · How a bill becomes law, local government, and getting involved",
    ],
  },
  {
    id: "civics.nm-local-government",
    claim:
      "Teaches New Mexico local government as New Mexico's: 33 counties governed by elected county commissions, plus cities, towns, and villages, alongside the sovereign tribal nations that govern their own lands.",
    courseSlugs: ["state-civics-nm"],
    lessons: [
      "New Mexico Civics, Lesson 4 · How a bill becomes law, local government, and getting involved",
    ],
  },
  {
    id: "civics.nm-get-involved",
    claim:
      "Teaches getting involved where you live, New Mexico edition — registering and voting (including same-day registration), serving in the unpaid Legislature as civic volunteering, and showing up at county commissions, councils, school boards, and tribal governments.",
    courseSlugs: ["state-civics-nm"],
    lessons: [
      "New Mexico Civics, Lesson 4 · How a bill becomes law, local government, and getting involved",
    ],
  },

  // ── State civics: Nevada (state-civics-nv was written FROM Nevada's own sources) ──
  // Nevada's 2018 Social Studies Standards fold civics into ONE Grade 9-12 "Civics & Economics"
  // course (codes SS.9-12.CE.<n>). Two standards are specifically about Nevada — SS.9-12.CE.19
  // ("Compare and contrast the U.S. and Nevada constitutions") and SS.9-12.CE.18 (Nevada politics)
  // — plus SS.9-12.CE.51 (Nevada's economy), giving the flagship its own-state home for the 1864
  // "Battle Born" constitution, the "None of These Candidates" ballot, gaming regulation and the
  // no-income-tax structure, the biennial Legislature, and the two-election amendment rule. The
  // federal C-ladder standards carry the general civics claims. All mapped in data/nv.ts.
  {
    id: "civics.nv-none-of-these-candidates",
    claim:
      "Teaches Nevada's “None of These Candidates” — a statewide-ballot protest option (since 1976) found in no other state, and the fact that it is non-binding: even if it wins the most votes, the highest-finishing actual candidate still takes office. Also teaches Nevada's Constitution of 1864 and the “Battle Born” story.",
    courseSlugs: ["state-civics-nv"],
    lessons: [
      "Nevada Civics, Lesson 1 · “None of These Candidates”: a ballot option found only in Nevada",
    ],
  },
  {
    id: "civics.nv-gaming-taxes",
    claim:
      "Teaches Nevada's gaming (casino) regulation — the Gaming Control Board and the Gaming Commission — and how gaming taxes and tourism revenue let Nevada operate with no state personal income tax.",
    courseSlugs: ["state-civics-nv"],
    lessons: [
      "Nevada Civics, Lesson 2 · Gaming regulation and why Nevada has no income tax",
    ],
  },
  {
    id: "civics.nv-executive-legislature",
    claim:
      "Teaches Nevada's plural executive (a separately elected Governor and Lieutenant Governor, Secretary of State, Attorney General, Treasurer, and Controller) and its part-time, biennial Legislature — a 42-member Assembly and 21-member Senate that meets only in odd-numbered years for a constitutionally limited 120 days, with term limits.",
    courseSlugs: ["state-civics-nv"],
    lessons: [
      "Nevada Civics, Lesson 3 · The executive and a Legislature that meets every other year",
    ],
  },
  {
    id: "civics.nv-courts",
    claim:
      "Teaches Nevada's elected judiciary — judges chosen on a nonpartisan ballot to 6-year terms — with a Court of Appeals and a 7-justice Nevada Supreme Court.",
    courseSlugs: ["state-civics-nv"],
    lessons: [
      "Nevada Civics, Lesson 3 · The executive and a Legislature that meets every other year",
    ],
  },
  {
    id: "civics.nv-direct-democracy",
    claim:
      "Teaches Nevada's initiative and referendum, and its distinctive two-election rule: a citizen-initiated constitutional amendment must be approved by the voters in two consecutive general elections before it takes effect.",
    courseSlugs: ["state-civics-nv"],
    lessons: [
      "Nevada Civics, Lesson 4 · Direct democracy: the two-election rule for citizen amendments",
    ],
  },
  {
    id: "civics.nv-lawmaking",
    claim:
      "Teaches how a bill becomes a Nevada law in the biennial session — introduction, committee, floor votes, and the Governor's sign/veto with a two-thirds override — alongside the citizen initiative and referendum as a lawmaking backstop.",
    courseSlugs: ["state-civics-nv"],
    lessons: [
      "Nevada Civics, Lesson 4 · Direct democracy: the two-election rule for citizen amendments",
    ],
  },
  {
    id: "civics.nv-local-government",
    claim:
      "Teaches Nevada local government as Nevada's: 16 counties plus Carson City (an independent consolidated city-county), county-based school districts, and municipal cities and towns.",
    courseSlugs: ["state-civics-nv"],
    lessons: [
      "Nevada Civics, Lesson 5 · Local government and how to take part",
    ],
  },
  {
    id: "civics.nv-get-involved",
    claim:
      "Teaches getting involved where you live, Nevada edition — registering and voting (including same-day and automatic registration and mailed ballots to active voters), using the initiative and referendum, showing up at county commissions and city councils, and running for local office.",
    courseSlugs: ["state-civics-nv"],
    lessons: [
      "Nevada Civics, Lesson 5 · Local government and how to take part",
    ],
  },

  // ── State civics: New Hampshire (state-civics-nh was written FROM New Hampshire's own sources) ──
  // New Hampshire's K-12 Social Studies Curriculum Framework (June 2006) is example-based and
  // abstract, but its Civics strand names the NEW HAMPSHIRE Constitution and the New Hampshire
  // judicial system EXPLICITLY (SS:CV:12:2.1, SS:CV:12:2.3) — so, unlike the purely-federal states,
  // the New Hampshire flagship's own-government lessons (the 400-member citizen House, the elected
  // Executive Council, the appointed-to-70 judiciary, the town meeting) have a genuine home, mapped
  // in data/nh.ts. New Hampshire is INHERIT-heavy: it adopted the Common Core (as the "NH College
  // and Career Ready Standards", 2010) for ELA and the NGSS (2016) for science, so data/nh.ts adopts
  // the two shared frameworks and maps the bespoke 2006 social-studies frame (Civics, US/NH History,
  // World History, Economics) here.
  {
    id: "civics.nh-constitution",
    claim:
      "Teaches New Hampshire as “Live Free or Die” — the Constitution of 1784 (the second-oldest U.S. state constitution still in effect, after Massachusetts), whose Part First is a Bill of Rights — and that New Hampshire was the 9th and DECIDING state to ratify the U.S. Constitution on June 21, 1788, the ratification that put the Constitution into effect.",
    courseSlugs: ["state-civics-nh"],
    lessons: [
      "New Hampshire Civics, Lesson 1 · “Live Free or Die”: the 1784 Constitution and the 9th state",
    ],
  },
  {
    id: "civics.nh-general-court",
    claim:
      "Teaches New Hampshire's Legislature — the General Court — as New Hampshire's: a 400-member House of Representatives (one of the largest legislative bodies in the English-speaking world, roughly one representative per 3,300 residents, the most accessible representation in the nation) and a 24-member Senate, with legislators paid $100 a year, making it a genuinely citizen, near-volunteer legislature; both chambers serve 2-year terms.",
    courseSlugs: ["state-civics-nh"],
    lessons: [
      "New Hampshire Civics, Lesson 2 · The 400-member House: a citizen Legislature",
    ],
  },
  {
    id: "civics.nh-executive-council",
    claim:
      "Teaches New Hampshire's distinctive executive: the Governor serves a 2-year term (one of only two states, with Vermont) and there is NO Lieutenant Governor (the Senate President is next in line), and the Governor SHARES executive power with an elected five-member Executive Council that must approve state contracts, gubernatorial nominations and appointments (including judges), and pardons — a check on the executive found in almost no other state.",
    courseSlugs: ["state-civics-nh"],
    lessons: [
      "New Hampshire Civics, Lesson 3 · The Executive Council and how New Hampshire picks its judges",
    ],
  },
  {
    id: "civics.nh-courts",
    claim:
      "Teaches New Hampshire's judiciary as New Hampshire's: judges are NOT elected — the Governor nominates and the elected Executive Council confirms them, and they serve to a mandatory retirement age of 70 — with a 5-member New Hampshire Supreme Court at the top that also issues advisory opinions to the Legislature and Governor on the constitutionality of proposed action.",
    courseSlugs: ["state-civics-nh"],
    lessons: [
      "New Hampshire Civics, Lesson 3 · The Executive Council and how New Hampshire picks its judges",
    ],
  },
  {
    id: "civics.nh-first-primary",
    claim:
      "Teaches New Hampshire's first-in-the-nation presidential primary — protected by a state law that directs the Secretary of State to set the date at least seven days before any similar contest — as the state's signature civic tradition and a central part of how the nation chooses its presidents.",
    courseSlugs: ["state-civics-nh"],
    lessons: [
      "New Hampshire Civics, Lesson 4 · How a bill becomes law, and the first-in-the-nation primary",
    ],
  },
  {
    id: "civics.nh-lawmaking",
    claim:
      "Teaches how a bill becomes a New Hampshire law in the General Court (introduction, committee, floor votes in both chambers, and the Governor's signature or veto with a two-thirds override) and that New Hampshire has NO statewide citizen initiative or referendum: constitutional amendments are proposed by three-fifths of the Legislature or by a constitutional convention (the voters are asked every ten years whether to hold one) and then ratified by a two-thirds vote of the people.",
    courseSlugs: ["state-civics-nh"],
    lessons: [
      "New Hampshire Civics, Lesson 4 · How a bill becomes law, and the first-in-the-nation primary",
    ],
  },
  {
    id: "civics.nh-town-meeting",
    claim:
      "Teaches New Hampshire local government as New Hampshire's: the annual town meeting — direct democracy in which residents vote the town and school budgets and the warrant articles themselves (with the SB 2 official-ballot referendum as the alternative many towns have adopted) — alongside 10 counties with a limited role, plus cities and school districts, all funded heavily by the local property tax, since New Hampshire levies no broad-based personal income tax on wages and no general sales tax (the “New Hampshire Advantage”).",
    courseSlugs: ["state-civics-nh"],
    lessons: [
      "New Hampshire Civics, Lesson 5 · Town meeting, local government, and how to take part",
    ],
  },
  {
    id: "civics.nh-get-involved",
    claim:
      "Teaches getting involved where you live, New Hampshire edition — registering to vote (including Election-Day registration) and voting in the first-in-the-nation primary, speaking and voting at your annual town meeting, showing up at the select board or city council and the school board, contacting your state representative (with 400 House members, among the easiest legislators in the country to reach), and running for the House yourself.",
    courseSlugs: ["state-civics-nh"],
    lessons: [
      "New Hampshire Civics, Lesson 5 · Town meeting, local government, and how to take part",
    ],
  },
];

const byId = new Map(COURSE_CLAIMS.map((c) => [c.id, c]));

/** Look up a claim; throwing on a bad id makes a typo'd reference fail loudly at load time. */
export function getClaim(id: string): CourseClaim {
  const c = byId.get(id);
  if (!c) throw new Error(`standards: unknown course claim "${id}"`);
  return c;
}
