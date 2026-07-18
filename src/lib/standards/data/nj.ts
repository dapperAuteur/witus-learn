// ─────────────────────────────────────────────────────────────────────────────
// NEW JERSEY — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-nj` was written FROM New Jersey's own official sources (njleg.gov, nj.gov/state,
// njcourts.gov, the 1947 Constitution). Unlike California or Arkansas — whose Grade 12 civics
// standards are overwhelmingly FEDERAL — New Jersey's 2020 Social Studies standards NAME the
// New Jersey Constitution (of 1776 and of 1947) explicitly (6.1.12.CivicsPI.2.a and .13.a), so the
// flagship's constitutional-history lessons have a genuine state code to cite. New Jersey's
// signature is a deliberately STRONG governor (most officials appointed, not elected) and the
// ABSENCE of direct democracy (no citizen initiative); the flagship's finer structure — the 2010
// Lieutenant Governor, the appointed judiciary's tenure to 70, the county-commissioner renaming —
// is taught but has no dedicated NJ code (see notClaimed).
//
// THE INHERIT-VS-BESPOKE CALL (the point of this state), made per framework from the NJDOE's own
// documents rather than assumed:
//   · Science — INHERITED (verbatim). New Jersey adopted the Next Generation Science Standards in
//     July 2014 as the New Jersey Student Learning Standards for Science (NJSLS-Science). New Jersey
//     was an NGSS lead state and uses the NGSS codes verbatim (including HS-ESS3-1). Verbatim
//     adoption of ../shared/ngss is honest. This is not a science course; see the entry's note.
//   · ELA — BESPOKE (New Jersey's own 2023 codes). New Jersey's ELA is Common Core-DERIVED but
//     revised and RENAMED. The 2023 NJSLS-ELA reorganized ELA into New Jersey's own code scheme
//     (RI.PP, RI.AA, RI.MF, RI.CT, W.WR, W.SE, coded by concept and grade band) and DROPPED the
//     Common Core RH/WHST literacy-in-history strand and the RI.11-12 numbering entirely — we
//     fetched the document and confirmed those codes are gone. The TEXT is CC-derived (W.WR.11-12.5
//     and W.SE.11-12.6 are near-verbatim recodings of CC WHST.11-12.7/.8; RI.AA.11-12.7 and
//     RI.MF.11-12.6 are revised RH.11-12.8/.9; RI.PP.11-12.5 is a revised RI.11-12.6), but because
//     New Jersey renamed every code AND revised some wording, aliasing the shared Common Core file
//     would be dishonest — it would print CC codes New Jersey no longer uses and CC text New Jersey
//     revised. So we transcribe New Jersey's own verbatim 2023 grades 11-12 ELA codes, exactly as
//     Pennsylvania does with its PA Core ELA. We claim no mathematics standards.
//   · Social studies — BESPOKE. Common Core never covered it. New Jersey's 2020 Student Learning
//     Standards for Social Studies are New Jersey's own, coded
//     6.<Standard>.<Grade>.<DisciplinaryConcept>.<Number>[.<letter>] (6.1.12.CivicsPI.2.a): 6.1 is
//     U.S. History, 6.2 is World History/Global Studies, 6.3 is Active Citizenship in the 21st
//     Century. DOCUMENTED ERRATUM: the official 2020 document prints TWO different performance
//     expectations under code 6.2.12.EconGE.1.a (one on China/Japan, one on essential commodities);
//     we cite the commodities one and flag the duplication on the entry so a filer isn't confused.
//
// Provenance: nj.gov served the Social Studies PDF directly (982KB, extracted locally and
// transcribed verbatim) — fetched 2026-07-18:
//   · 2020 NJSLS Social Studies (by Standard) —
//     nj.gov/education/standards/socst/docs/2020NJSLS-SS_by_Standard.pdf
// The NJDOE's own titled "New Jersey Student Learning Standards English Language Arts (NJSLS-ELA)"
// PDF was extracted from a byte-faithful district mirror (resources.finalsite.net/.../2023_NJSLS_ELA.pdf,
// its first page bears the NJDOE title block); the sourceUrl below is the canonical NJDOE ELA page.
// ─────────────────────────────────────────────────────────────────────────────

import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "NJ",
  adoptions: [
    {
      framework: NGSS,
      adoption:
        "New Jersey adopted the Next Generation Science Standards in July 2014 as the New Jersey Student Learning Standards for Science (NJSLS-Science). New Jersey was an NGSS lead state and uses the NGSS codes verbatim (including HS-ESS3-1). This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── ELA: Reading & Writing (NJSLS-ELA 2023, Grades 11-12) ──────────────
    {
      id: "nj-ela",
      subject: "English/Language Arts",
      name: "New Jersey Student Learning Standards for English Language Arts — Grades 11-12",
      publisher: "New Jersey Department of Education (NJDOE)",
      version: "2023 (NJSLS-ELA)",
      fetchedOn: "2026-07-18",
      sourceUrl: "https://www.nj.gov/education/standards/ela/",
      adoption:
        "New Jersey's 2023 NJSLS-ELA is Common Core-derived but revised and renamed: it reorganized ELA into New Jersey's own concept codes (RI.PP, RI.AA, RI.MF, RI.CT, W.WR, W.SE) and dropped the Common Core RH/WHST literacy-in-history strand and the RI.11-12 numbering. We transcribe New Jersey's own verbatim grades 11-12 Reading (Informational) and Writing codes — not the shared Common Core file — because New Jersey renamed every code and revised some wording.",
      standards: [
        {
          code: "RI.PP.11–12.5",
          text: "Analyze an author’s purpose in a text distinguishing what is directly stated in a text or through rhetoric, analyzing how style and content convey information and advance a point of view.",
          claimIds: ["bvc.rhetoric-power-persuasion"],
          coverage: "full",
          note: "New Jersey's revised version of Common Core RI.11-12.6. Determining an author's purpose in a text where the rhetoric is doing the work — how style and content advance a point of view — is taught directly through the reading-the-ads and rhetoric lessons.",
        },
        {
          code: "RI.AA.11–12.7",
          text: "Describe and evaluate the reasoning in seminal U.S. and global texts, and the premises, purposes, and arguments in these works.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "New Jersey's version of Common Core RH.11-12.8. Evaluating an author's premises, claims, and reasoning — corroborating or challenging them — is taught as a transferable skill.",
        },
        {
          code: "RI.MF.11–12.6",
          text: "Synthesize complex information across multiple sources and formats to develop ideas, resolve conflicting information, or develop an interpretation that goes beyond explicit text information (e.g., express a personal point of view, new interpretation of the concept).",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "New Jersey's version of Common Core RH.11-12.9. “Resolve conflicting information” across sources is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
        },
        {
          code: "RI.CT.11–12.8",
          text: "Analyze and reflect on (e.g., practical knowledge, historical/cultural context, and background knowledge) documents of historical and scientific significance for their purposes, including primary source documents relevant to U.S. and/or global history and texts proposing scientific or technical advancements.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Analyzing primary-source documents of historical significance for their purpose is the Whose Voice method: a planter's euphemism and passive voice set against two first-person accounts by formerly enslaved writers.",
        },
        {
          code: "W.WR.11–12.5",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "New Jersey's near-verbatim recoding of Common Core WHST.11-12.7. Partial: only the Coffee episode currently ships a graded research assignment. Where it runs, it meets this standard squarely.",
        },
        {
          code: "W.SE.11–12.6",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation (MLA or APA Style Manuals).",
          claimIds: ["bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "New Jersey's near-verbatim recoding of Common Core WHST.11-12.8. Partial, same reason as W.WR.11-12.5: the Coffee project's graded options require gathering authoritative sources with an APA bibliography, but it is the only graded assignment currently shipping.",
        },
      ],
    },

    // ── Social Studies 6.1: U.S. History — America in the World (Grade 12) ──
    {
      id: "nj-ss-us",
      subject: "Social Studies",
      name: "New Jersey Student Learning Standards for Social Studies — 6.1 U.S. History: America in the World, by the End of Grade 12",
      publisher: "New Jersey Department of Education (NJDOE)",
      version: "2020 (NJSLS-Social Studies)",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://www.nj.gov/education/standards/socst/docs/2020NJSLS-SS_by_Standard.pdf",
      adoption:
        "New Jersey's Grade 12 U.S. History standards. Two Civics performance expectations name the New Jersey Constitution directly (6.1.12.CivicsPI.2.a, .13.a), which is where the New Jersey Civics flagship's constitutional-history lessons land; the federal civics content is claimed through the founding-era Civics standards, and the Commodity Map's U.S.-side geography and the Great Migration through the Economics and Geography standards.",
      standards: [
        {
          code: "6.1.12.CivicsPI.2.a",
          text: "Prepare and articulate a point of view about the importance of individual rights, separation of powers, and governmental structure in New Jersey's 1776 constitution and the United States Constitution.",
          claimIds: [
            "civics.nj-constitution",
            "civics.separation-checks-balances",
            "civics.nj-strong-governor",
          ],
          coverage: "partial",
          note: "One of the two New Jersey-naming anchors. Separation of powers and governmental structure are taught federally (US Constitution 101) and, for New Jersey, through the flagship's constitutional history (1776, 1844, 1947) and its strong-governor structure. Partial: the standard's specific hook is the 1776 constitution, which the flagship mentions rather than works in depth.",
        },
        {
          code: "6.1.12.CivicsPR.2.a",
          text: "Use primary sources to explain how judicial review made the Supreme Court an influential branch of government and construct an argument regarding the continuing impact of the Supreme Court today.",
          claimIds: [
            "civics.judicial-review-marbury",
            "civics.federal-judiciary-structure",
            "rights.scotus-precedent",
          ],
          coverage: "full",
          note: "Judicial review is taught by name through Marbury v. Madison, alongside the federal judiciary's structure and how Supreme Court precedent continues to shape rights today.",
        },
        {
          code: "6.1.12.CivicsPI.13.a",
          text: "Craft an argument as to the effectiveness of the New Jersey Constitution of 1947, New Jersey Supreme Court decisions (i.e., Hedgepeth and Williams v. Trenton Board of Education), and New Jersey's laws in eliminating segregation and discrimination.",
          claimIds: ["civics.nj-constitution", "civics.nj-legislature-courts"],
          coverage: "partial",
          note: "Partial, and the distinction matters: the shared element is the New Jersey Constitution of 1947 and the New Jersey Supreme Court, which the flagship teaches (the 1947 rewrite, the seven-member Court, tenure to 70). The standard's specific subject — the Constitution's effectiveness in eliminating segregation and discrimination — is NOT taught by the flagship.",
        },
        {
          code: "6.1.12.CivicsPD.2.a",
          text: "Compare and contrast the arguments of Federalists and Anti-Federalists during the ratification debates and assess their continuing relevance.",
          claimIds: ["civics.articles-to-constitution", "civics.bill-of-rights-origin"],
          coverage: "partial",
          note: "Partial: the framing of the Constitution (why the Articles failed) and the Bill of Rights the Anti-Federalists demanded are taught as documents. A dedicated Federalist/Anti-Federalist debate unit, assessing continuing relevance, is not.",
        },
        {
          code: "6.1.12.GeoGI.1.a",
          text: "Explain how geographic variations impacted economic development in the New World, and its role in promoting trade with global markets (e.g., climate, soil conditions, other natural resources).",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Partial: how climate, soils, and natural resources decide where commodities grow and how they enter global trade is the Commodity Map's spine. The standard's full New-World economic-development frame is one thread through it, not a survey.",
        },
        {
          code: "6.1.12.EconGE.6.a",
          text: "Determine the role geography played in gaining access to raw materials and finding new global markets to promote trade.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: how geography governs access to raw materials and global markets — and who captures the value along the chain — is taught in depth through the commodities themselves.",
        },
        {
          code: "6.1.12.EconNE.8.a",
          text: "Analyze the push-pull factors that led to the Great Migration.",
          claimIds: ["history.migration-streams-arrival"],
          coverage: "full",
          note: "The Great Migration's push and pull factors — the Jim Crow South and the wartime Northern labor demand — are exactly what the Great Migration course teaches.",
        },
      ],
    },

    // ── Social Studies 6.2: World History / Global Studies (Grade 12) ──────
    {
      id: "nj-ss-world",
      subject: "Social Studies",
      name: "New Jersey Student Learning Standards for Social Studies — 6.2 World History/Global Studies, by the End of Grade 12",
      publisher: "New Jersey Department of Education (NJDOE)",
      version: "2020 (NJSLS-Social Studies)",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://www.nj.gov/education/standards/socst/docs/2020NJSLS-SS_by_Standard.pdf",
      adoption:
        "New Jersey's Grade 12 World History standards are an unusually close match for the Commodity Map: they name essential commodities (sugar, cotton), mercantilism, imperialism, the Atlantic slave trade, the Columbian exchange, and the lingering effects of colonialism explicitly.",
      standards: [
        {
          code: "6.2.12.EconGE.1.a",
          text: "Trace the movement of essential commodities (e.g., sugar, cotton) from Asia to Europe to America, and determine the impact trade on the New World's economy and society.",
          claimIds: ["bvc.sugar-industry-impact", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "The single closest match in the New Jersey document — it names commodity trade directly. Partial: of the commodities the standard names, the sugar industry is taught thoroughly; cotton is not a Commodity Map episode. ERRATUM: New Jersey's 2020 document prints a second, different performance expectation (on the economic policies of China and Japan) under this same code 6.2.12.EconGE.1.a; the text above is the commodities one.",
        },
        {
          code: "6.2.12.HistoryCC.3.c",
          text: "Analyze the impact of the policies of different European colonizers on indigenous societies and explain the responses of these societies to imperialistic rule.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.plantation-economy-resistance"],
          coverage: "full",
          note: "Both halves: colonizer policies AND the responses to them — from Maroon communities to revolution and abolition — are taught in depth, through the commodities those systems ran.",
        },
        {
          code: "6.2.12.HistoryCC.1.f",
          text: "Assess the political, social, and economic impact of the interactions between indigenous peoples and colonizers over different time periods (e.g., Columbian Exchange, forced labor, slave trade and slavery practices, spread of disease, lingering effects on cultures).",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.mesoamerica-colonization"],
          coverage: "partial",
          note: "Partial: the Columbian exchange, conquest, and the colonization of Mesoamerica (Maya and Aztec) through the plants those societies governed are taught in depth. The standard's full sweep of every named interaction is broader than the courses.",
        },
        {
          code: "6.2.12.HistoryCC.1.b",
          text: "Analyze various motivations for the Atlantic slave trade and the impact on Europeans, Africans, and Americans.",
          claimIds: ["bvc.middle-passage-primary-sources", "bvc.plantation-economy-resistance"],
          coverage: "partial",
          note: "Partial: the plantation economy and the Middle Passage (through primary-source accounts by formerly enslaved writers) are taught in depth. The standard's economic analysis of the trade's motivations is reached through the commodities, not surveyed on its own.",
        },
        {
          code: "6.2.12.EconGE.1.b",
          text: "Assess the role of mercantilism in stimulating European expansion through trade, conquest, and colonization.",
          claimIds: ["bvc.conquest-columbian-exchange"],
          coverage: "partial",
          note: "Partial: conquest and colonization as engines of European expansion are taught through the commodities and the Columbian exchange. The formal concept of mercantilism, by name, is not a unit.",
        },
        {
          code: "6.2.12.EconGE.3.c",
          text: "Compare the impact of imperialism on economic development in Africa, Asia, and Latin America regarding barriers or opportunities for future development and political independence.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: imperialism's economic legacy — the commodity trap that keeps producing regions poor while value accrues downstream — is taught in depth across Africa, Asia, and Latin America. A formal comparison of development barriers is not attempted.",
        },
        {
          code: "6.2.12.EconGE.3.b",
          text: "Construct a claim based on evidence regarding on the interrelationships between the Industrial Revolution, nationalism, competition for global markets, imperialism, and natural resources in different regions of the world.",
          claimIds: ["bvc.imperialism-africa-asia-oceania"],
          coverage: "partial",
          note: "Partial: the link between industrial economies, the competition for global markets, and imperial expansion for natural resources is taught through the cash-crop systems. (The standard's wording, including “regarding on,” is transcribed verbatim from the New Jersey document.)",
        },
        {
          code: "6.2.12.HistoryUP.3.a",
          text: "Analyze the extent to which racism was both a cause and consequence of imperialism and evaluate the impact of imperialism from multiple perspectives.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Partial: imperialism from multiple perspectives — the colonizers' and the colonized — is exactly the Whose Voice method applied to empire. The standard's specific cause-and-consequence analysis of racism is touched, not systematized.",
        },
        {
          code: "6.2.12.GeoHE.1.a",
          text: "Determine the role of natural resources, climate, and topography in European exploration, colonization, and settlement patterns.",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: how resources and climate shaped where colonizers went and what they grew is taught through the growing belts and the resource maps. A general geographic treatment of settlement is not.",
        },
        {
          code: "6.2.12.HistoryCC.5.d",
          text: "Relate the lingering effects of colonialism to the efforts of Latin American, African, and Asian nations to build stable economies and national identities.",
          claimIds: ["bvc.colonialism-persists-today", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: how colonialism persists and evolves in the present — the commodity trap, and why producer nations struggle to move up the value chain — is taught in depth. The national-identity strand is not the courses' focus.",
        },
        {
          code: "6.2.12.CivicsPD.3.a",
          text: "Cite evidence describing how and why various ideals became driving forces for reforms and revolutions in Latin America and across the world (e.g., liberty, popular sovereignty, natural rights, democracy, nationalism).",
          claimIds: ["bvc.haitian-revolution"],
          coverage: "partial",
          note: "Partial: one Atlantic revolution is taught in real depth — the Haitian Revolution, including the 1825 French indemnity and the line from it to Haiti's poverty today. The standard's broader survey of Latin American and world revolutions is not the course's scope, and it does not name Haiti.",
        },
      ],
    },

    // ── Social Studies 6.3: Active Citizenship in the 21st Century (Gr. 12) ─
    {
      id: "nj-ss-active",
      subject: "Social Studies",
      name: "New Jersey Student Learning Standards for Social Studies — 6.3 Active Citizenship in the 21st Century, by the End of Grade 12",
      publisher: "New Jersey Department of Education (NJDOE)",
      version: "2020 (NJSLS-Social Studies)",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://www.nj.gov/education/standards/socst/docs/2020NJSLS-SS_by_Standard.pdf",
      adoption:
        "New Jersey's Grade 12 Active Citizenship standards are project-and-action oriented — developing a plan, comparing case studies — which is where the flagship's take-part content and the Commodity Map's labor/human-rights content land.",
      standards: [
        {
          code: "6.3.12.CivicsHR.1",
          text: "Compare current case studies involving slavery, child labor, or other unfair labor practices in the United States with those of other nations and evaluate the extent to which these human rights violations are a universal problem.",
          claimIds: ["bvc.plantation-economy-resistance", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: the plantation-slavery system and the U.S. labor movement's fight against unfair labor practices are taught in depth. The standard's comparative, current-case-study method across nations is not the courses' structure.",
        },
        {
          code: "6.3.12.CivicsPD.1",
          text: "Develop plan for public accountability and transparency in government related to a particular issue(s) and share the plan with appropriate government officials.",
          claimIds: ["civics.nj-elections-involved", "civics.show-up-every-level", "civics.track-a-bill"],
          coverage: "partial",
          note: "Partial: taking part where you live — showing up at every level of government, tracking a live bill and making your voice heard, and New Jersey's own take-part routes — is taught. Producing a formal accountability plan and sharing it with officials is the assignment shape the standard names, which the courses teach the ingredients for rather than assign.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no New Jersey mathematics standard.",
    },
    {
      heading: "Science — almost nothing.",
      body: "There is no laboratory work, no investigation and no scientific modelling here. New Jersey adopted the NGSS verbatim (as NJSLS-Science, 2014), and we claim a single NGSS performance expectation, partially, explaining exactly why on the entry itself. It is not a science course and we will not sell it as one.",
    },
    {
      heading: "The flagship's distinctive New Jersey structure has mostly no code to cite.",
      body: "New Jersey Civics teaches the deliberately strong Governor (who appoints the Attorney General, Secretary of State, and Treasurer rather than voters electing them), the Lieutenant Governor created only in 2010, the appointed judiciary that earns tenure to age 70, the 40-district Legislature on its 2-4-4 Senate cycle, the absence of any citizen initiative, and the 21 counties whose boards were renamed from “Chosen Freeholders” to “county commissioners” in 2020-2021. New Jersey's 2020 standards reach the New Jersey Constitution of 1776 and 1947 (6.1.12.CivicsPI.2.a, .13.a), which the flagship backs, but the strong-governor design, the appointed judiciary, the no-initiative rule, and the county renaming have no New Jersey-specific code. The gap is in the standards, not the course.",
    },
    {
      heading: "The Opium Wars, the sugar-vs-other-commodities split, and the War on Drugs.",
      body: "The catalog teaches the Opium Wars and the War on Drugs in depth, and covers sugar thoroughly. New Jersey's world-history standard names sugar and cotton (6.2.12.EconGE.1.a), so we claim the sugar content there — but it does not name the Opium Wars, and New Jersey's Active Citizenship history standards reach contemporary drug policy only through the broad “current foreign policy issue” framing (6.3.12.HistoryCA.12), which the courses do not squarely meet. We leave those unclaimed rather than stretch.",
    },
    {
      heading: "The Amistad and climate-change teaching mandates.",
      body: "New Jersey law requires the Amistad curriculum (the history of the African slave trade and of African Americans) and climate-change education across subjects. These are instructional mandates layered onto the standards, not separate coded standards, so there is no distinct code to cite; the catalog's slavery, abolition, and climate content is claimed through the coded 6.1/6.2 standards above.",
    },
    {
      heading: "The wider catalog — health, PE, AI-literacy, and languages.",
      body: "New Jersey's relevant frameworks for these (Comprehensive Health and Physical Education; Computer Science and Design Thinking; World Languages) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no New Jersey claims this pass.",
    },
  ],
};
