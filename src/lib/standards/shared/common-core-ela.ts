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
      claimIds: ["bvc.whose-voice-differing-accounts"],
      coverage: "full",
      note: "The strongest single alignment on this page. Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims and evidence.",
    },
    {
      code: "CCSS.ELA-Literacy.RH.11-12.8",
      text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information.",
      claimIds: ["bvc.evaluate-claims-fallacies"],
      coverage: "full",
    },
    {
      code: "CCSS.ELA-Literacy.RH.11-12.9",
      text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
      claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
      coverage: "full",
      note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
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
      claimIds: ["bvc.coffee-project-synthesis"],
      coverage: "partial",
      note: "Partial: only the Coffee episode currently ships a graded assignment. Where it runs, it meets this standard squarely.",
    },
    {
      code: "CCSS.ELA-Literacy.WHST.11-12.8",
      text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
      claimIds: ["bvc.coffee-project-sources-ethics"],
      coverage: "partial",
      note: "Partial, same reason as WHST.11-12.7.",
    },
  ],
};
