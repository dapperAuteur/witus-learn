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
];

const byId = new Map(COURSE_CLAIMS.map((c) => [c.id, c]));

/** Look up a claim; throwing on a bad id makes a typo'd reference fail loudly at load time. */
export function getClaim(id: string): CourseClaim {
  const c = byId.get(id);
  if (!c) throw new Error(`standards: unknown course claim "${id}"`);
  return c;
}
