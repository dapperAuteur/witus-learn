// Common Core ELA/Literacy — a SHARED framework, mapped once. States that adopted Common Core
// (41 states + D.C. at peak) reference this from their data/<state>.ts via `adoptions`, either
// verbatim or with local code aliases — the mapping is never redone per state. Indiana is NOT
// one of them (it repealed its adoption in 2014 and writes its own ELA codes; see data/in.ts).
//
// Fetched 2026-07-13 from thecorestandards.org (the RH/RI/WHST strands this catalog touches).

import type { SharedFramework } from "../types";

export const COMMON_CORE_ELA: SharedFramework = {
  id: "ccss-ela",
  subject: "English/Language Arts",
  name: "Common Core State Standards for English Language Arts & Literacy",
  publisher: "Common Core State Standards Initiative",
  version: "Grades 11-12",
  sourceUrl: "https://www.thecorestandards.org/ELA-Literacy/RH/11-12/",
  fetchedOn: "2026-07-13",
  standards: [
    {
      code: "CCSS.ELA-Literacy.RH.11-12.6",
      text: "Evaluate authors' differing points of view on the same historical event or issue by assessing the authors' claims, reasoning, and evidence.",
      claimIds: [
        "bvc.whose-voice-differing-accounts",
        "dragons.document-as-decisions",
        "dragons.hold-a-dispute-open",
      ],
      coverage: "full",
      note: "The strongest single alignment on this page. Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims and evidence. Monsters at the Edge of the Map runs the same assessment on documents rather than testimony: three contemporary map genres set against each other, then the reasons (cost, buyer, argument, inheritance) an element appears at all.",
    },
    {
      code: "CCSS.ELA-Literacy.RH.11-12.8",
      text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information.",
      claimIds: [
        "bvc.evaluate-claims-fallacies",
        "catalog.test-a-historical-claim",
        "dragons.repetition-is-not-corroboration",
      ],
      coverage: "full",
      note: "The BVC value-chain course teaches fallacy-spotting; the route series, the labor and precolonial courses, and Afrocentricity make testing a claim against its sources (corroborating, challenging, or downgrading it) the explicit method of the course. Monsters at the Edge of the Map adds the corroboration half directly: it teaches that repeated claims count only when their sources are independent, and drills tracing a claim back to its earliest form.",
    },
    {
      code: "CCSS.ELA-Literacy.RH.11-12.9",
      text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
      claimIds: [
        "bvc.nearest-green-oral-history",
        "bvc.whose-voice-absence",
        "catalog.cited-primary-secondary-synthesis",
      ],
      coverage: "partial",
      note: "Full in the BVC Nathan Green lesson, where the documentary and oral records openly disagree. Partial across the catalog-wide claim: every one of those courses integrates cited primary and secondary sources into a coherent account (the standard's first clause), and the route, labor, and contested-scholarship courses also foreground where the sources disagree, but the narrative histories (bathing, hoodoo) integrate sources without making discrepancy-resolution a systematic exercise.",
    },
    {
      code: "CCSS.ELA-Literacy.RI.11-12.6",
      text: "Determine an author's point of view or purpose in a text in which the rhetoric is particularly effective, analyzing how style and content contribute to the power, persuasiveness or beauty of the text.",
      claimIds: ["bvc.rhetoric-power-persuasion"],
      coverage: "full",
    },
    {
      code: "CCSS.ELA-Literacy.WHST.11-12.7",
      text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
      claimIds: ["bvc.coffee-project-synthesis", "catalog.research-a-primary-record"],
      coverage: "full",
      note: "The Coffee episode ships a graded assignment; the route series and the positive-track courses each close with a research capstone (find a listing, write one firm, test one connection) in which the student runs a self-directed inquiry and synthesizes multiple sources.",
    },
    {
      code: "CCSS.ELA-Literacy.WHST.11-12.8",
      text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
      claimIds: ["bvc.coffee-project-sources-ethics", "catalog.research-a-primary-record"],
      coverage: "full",
      note: "The route and positive-track capstones require the student to locate a primary record, corroborate it across independent sources, weigh each source's limits, and write it up with citations: the whole of this standard.",
    },
  ],
};
