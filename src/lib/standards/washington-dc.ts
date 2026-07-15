// ─────────────────────────────────────────────────────────────────────────────
// WASHINGTON, D.C. standards alignment. Read the rule in ./index.ts before editing.
//
// D.C. does not have one homegrown set of standards. It adopted three separate frameworks, and a
// teacher there is answerable to whichever one covers the subject:
//   · Common Core (ELA/Math) — adopted July 2010 by the DC State Board of Education.
//   · NGSS (K-12 science) — adopted December 2013 by the DC State Board of Education.
//   · DC's OWN social studies standards — adopted June 2023 (there is no Common Core for
//     social studies; that subject was never part of it).
// Both adoptions are stated on OSSE's own service pages, linked below. This mapping currently
// covers the Commodity Map curriculum only; the wider-catalog pass done for Indiana has not been
// done for D.C. yet.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionData, StandardAlignment, StandardsFramework } from "./types";

const FRAMEWORKS: StandardsFramework[] = [
  {
    id: "dc-ccss-ela",
    state: "DC",
    jurisdiction: "Washington, D.C.",
    subject: "English/Language Arts",
    name: "Common Core State Standards for English Language Arts & Literacy",
    publisher: "Common Core State Standards Initiative",
    version: "Grades 11-12",
    fetchedOn: "2026-07-13",
    sourceUrl: "https://www.thecorestandards.org/ELA-Literacy/RH/11-12/",
    adoption:
      "OSSE states that “In July 2010, the District of Columbia adopted the Common Core State Standards” for reading and mathematics. The literacy-in-history/social-studies (RH) and writing-in-history (WHST) strands are the ones this curriculum touches. We claim no mathematics standards.",
  },
  {
    id: "dc-ngss",
    state: "DC",
    jurisdiction: "Washington, D.C.",
    subject: "Science",
    name: "Next Generation Science Standards (NGSS)",
    publisher: "NGSS Lead States / nextgenscience.org",
    version: "HS-ESS3 Earth and Human Activity",
    fetchedOn: "2026-07-13",
    sourceUrl: "https://www.nextgenscience.org/dci-arrangement/hs-ess3-earth-and-human-activity",
    adoption:
      "OSSE states that “In Dec. 2013, the Next Generation Science Standards were adopted by DC State Board of Education as the new K-12 Science Standards for the District of Columbia Schools.” This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
  },
  {
    id: "dc-ss",
    state: "DC",
    jurisdiction: "Washington, D.C.",
    subject: "Social Studies",
    name: "Washington, DC K-12 Social Studies Standards",
    publisher: "Office of the State Superintendent of Education (OSSE)",
    version: "June 2023",
    fetchedOn: "2026-07-13",
    sourceUrl:
      "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Adopted%20Standards.pdf",
    adoption:
      "Common Core never covered social studies, so DC wrote its own. These are the high-school course codes: WH1 (World History I), WH2 (World History II), US2 (US History II).",
  },
];

const ALIGNMENTS: StandardAlignment[] = [
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
    lessons: [
      "Ep 4 · The Sugar Islands",
      "Ep 4 · From New Guinea to the New World",
      "Ep 11 · Waste-Product Economics",
    ],
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

export const WASHINGTON_DC: JurisdictionData = {
  state: "DC",
  frameworks: FRAMEWORKS,
  alignments: ALIGNMENTS,
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This curriculum does no mathematics instruction, so it meets no Common Core mathematics standard.",
    },
    {
      heading: "Science — almost nothing.",
      body: "There is no laboratory work, no investigation and no scientific modelling here. We claim a single NGSS performance expectation, partially, and we explain exactly why on the entry itself. It is not a science course and we will not sell it as one.",
    },
    {
      heading: "Prohibition and mass incarceration.",
      body: "The curriculum teaches both. D.C.'s 2023 social studies standards contain no standard on either (we searched the full document), so there is nothing for us to cite. The gap is in the standards, not the lessons.",
    },
    {
      heading: "D.C.'s economics and geography strands.",
      body: "In the 2023 document these are un-numbered “statements of practice”, not coded standards. There is no code to cite, so we cite none — even though the economics content lines up well.",
    },
    {
      heading: "The wider catalog — not yet mapped for D.C.",
      body: "The civics, U.S. history, health, and PE mapping done for Indiana has not been repeated against D.C.'s frameworks yet. D.C. currently carries the Commodity Map alignment only; the catalog-wide pass is queued.",
    },
  ],
};
