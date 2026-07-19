// ─────────────────────────────────────────────────────────────────────────────
// MISSISSIPPI — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ms` was written FROM Mississippi's own official sources (legislature.ms.gov,
// sos.ms.gov, courts.ms.gov, and the Mississippi Constitution of 1890), so Mississippi's civics
// flagship gets its 1:1 state-civics course, and this file gives it a home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from MDE's own record:
//   · Social studies — BESPOKE. Mississippi writes its own standards: the 2018 Mississippi College-
//     and Career-Readiness Standards for the Social Studies. Its required US Government course
//     (USG.1-7) is FEDERAL and carries the general civics ladder, but Mississippi's OWN government
//     gets a dedicated home in the Mississippi Studies course: MS.10 ("Analyze the structure and
//     function of local and state government in Mississippi") is a genuine 1:1 anchor for the
//     flagship's own-structure lessons (the 1890 constitution, the unusually powerful Lieutenant
//     Governor, the 82-county board-of-supervisors layer, the nonpartisan elected judiciary). The
//     catalog's media/source-literacy method maps to the US Government course's media-evaluation
//     objectives (USG.6.7 and USG.6.8).
//   · English/Language Arts — Common-Core-DERIVED but MISSISSIPPI REVISED at least one code, so
//     BESPOKE (NOT aliased). Mississippi adopted the Common Core as the MS CCRS. We compared the six
//     literacy codes this catalog touches against Mississippi's own 2025 MS CCRS for Literacy and
//     Writing byte for byte: RH.11-12.8, RH.11-12.9, WHST.11-12.7, and WHST.11-12.8 are VERBATIM
//     identical to the shared Common Core file, but RH.11-12.6 is Mississippi's revised wording
//     ("Evaluate AUTHOR'S differing points of view…" where Common Core reads "Evaluate AUTHORS'
//     differing points of view…"). Because MS diverges on RH.11-12.6, we do NOT alias
//     ../shared/common-core-ela; instead we transcribe Mississippi's OWN verbatim literacy standards
//     below. RI.11-12.6 lives in Mississippi's separate ELA-teacher document and is deferred this
//     pass (see notClaimed).
//   · Science — MISSISSIPPI'S OWN (2018 Mississippi College- and Career-Readiness Standards for
//     Science), NOT NGSS: nothing aliased. See notClaimed.
//   · Mathematics — Common-Core-derived MS CCRS; nothing claimed (no math instruction).
//
// Provenance: the US Government (USG.1-7) and Mississippi Studies (MS.10) STANDARD competency
// sentences were transcribed VERBATIM from MDE's "2018 Mississippi College- and Career-Readiness
// Standards for the Social Studies" at MS_SS below; the literacy standards from MDE's "2025 MS CCRS
// for Literacy and Writing" at MS_ELA below — both fetched 2026-07-19. mdek12.org returns HTTP 403
// to automated fetches but serves the SAME document bytes to a normal browser request; we retrieved
// the bytes that way and verified every mapped standard reads as clean English before use. The coded
// text is the STANDARD (competency) sentence; the document's numbered OBJECTIVE(S) beneath each are
// its elements and are referenced in the notes, not transcribed as the standard text. Mississippi's
// "(Strands: …)" tag printed after each competency is document metadata, not part of the standard.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const MS_SS =
  "https://www.mdek12.org/sites/default/files/Page_Docs/FINAL-2018-Mississippi-CCR%20Social-Studies-Standards.pdf";
const MS_ELA = "https://mdek12.org/wp-content/uploads/sites/38/2025/05/2025-MS-CCRS-for-Literacy-and-Writing.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "MS",
  frameworks: [
    // ── US Government + Mississippi Studies (2018 MS CCRS for the Social Studies, high school) ──
    {
      id: "ms-social-studies",
      subject: "Social Studies",
      name: "Mississippi College- and Career-Readiness Standards for the Social Studies (2018) — US Government and Mississippi Studies",
      publisher: "Mississippi Department of Education (MDE)",
      version:
        "2018 Mississippi College- and Career-Readiness Standards for the Social Studies · US Government course (USG) and the Mississippi Studies course (MS.10)",
      fetchedOn: "2026-07-19",
      sourceUrl: MS_SS,
      adoption:
        "Mississippi writes its own social studies standards. The Mississippi Studies course's MS.10 (the structure and function of local and state government in Mississippi) is the anchor for the Mississippi Civics flagship — a genuine 1:1 home for its own-structure lessons — while the required US Government course (USG.1-7) is federal and carries the general civics ladder. The media-literacy method maps to the US Government course's media-evaluation objectives (USG.6.7, USG.6.8). Transcribed verbatim from MDE's 2018 standards (see the file header for provenance). The coded text is the standard's competency sentence; the numbered objectives beneath it are its elements, referenced in the notes.",
      standards: [
        // — Mississippi Studies: MS.10 (the flagship's own-government home) —
        {
          code: "MS.10",
          text: "Analyze the structure and function of local and state government in Mississippi.",
          claimIds: [
            "civics.ms-recent-changes",
            "civics.ms-executive",
            "civics.ms-legislature-initiative",
            "civics.ms-judiciary",
            "civics.ms-local-government",
            "civics.ms-get-involved",
            "civics.citizenship-responsibilities",
          ],
          coverage: "full",
          note: "The flagship's primary home: Mississippi's own government — the 1890 constitution, the three branches of state government (the Legislature, the plural executive with its unusually powerful Lieutenant Governor, and the nonpartisan elected judiciary), the 82-county board-of-supervisors local layer, and the rights and responsibilities of Mississippi citizenship (MS.10 objectives 1-4) — is taught in depth.",
        },
        // — US Government (USG): the general federal civics ladder —
        {
          code: "USG.3",
          text: "Differentiate the basic organization of the US government and explain the function of each branch of the US government.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
            "civics.federal-bill-process",
            "civics.federal-judiciary-structure",
            "civics.judicial-review-marbury",
            "civics.separation-checks-balances",
          ],
          coverage: "full",
          note: "The three branches and their functions, checks and balances, the federal courts' organization and jurisdiction, and judicial review (USG.3 objective 10 names Marbury v. Madison) are taught end to end across the general civics courses.",
        },
        {
          code: "USG.4",
          text: "Analyze of the role of federalism in addressing the distribution of power between the national, state and local governments.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.separation-checks-balances",
            "civics.ms-executive",
            "civics.ms-local-government",
          ],
          coverage: "full",
          note: "Federalism and the reserved/concurrent powers taxonomy (USG.4 names the Ninth and Tenth Amendments) are taught directly, and the standard's state-and-local responsibilities and revenue are taught as Mississippi's own state and county governments. (\"Analyze of the role\" is transcribed verbatim from the source.)",
        },
        {
          code: "USG.7",
          text: "Describe and evaluate the role, rights, and responsibility of a citizen in the American democracy.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.us-citizenship-law",
            "civics.jury-service",
            "civics.voter-registration",
            "civics.election-mechanics",
            "civics.run-for-office",
            "rights.landmark-cases",
            "civics.ms-elections",
            "civics.ms-get-involved",
            "civics.show-up-every-level",
          ],
          coverage: "full",
          note: "The citizen's rights and responsibilities the standard lists — voting, serving as a juror, running for office, naturalization (USG.7 objective 11), the Bill of Rights, influencing state and local government, and voter turnout / the Electoral College — are each taught, including Mississippi's own elections and get-involved levers.",
        },
        {
          code: "USG.2",
          text: "Evaluate the foundational American political principles and the historical events, documents and philosophical ideas that shaped the formation of the United States.",
          claimIds: [
            "civics.articles-to-constitution",
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.bill-of-rights-origin",
          ],
          coverage: "partial",
          note: "The failure of the Articles of Confederation and the move to the 1787 Constitution, separation of powers and checks and balances, federalism, and the Bill of Rights are taught; the standard's Athenian/Roman origins, the Magna Carta, Hobbes/Locke/Montesquieu, and the Federalist Papers by number are not taught by name, so this is partial.",
        },
        {
          code: "USG.5",
          text: "Compare and contrast civil rights and civil liberties and explain how each have been interpreted and amended throughout American history.",
          claimIds: [
            "civics.bill-of-rights-overview",
            "civics.bill-of-rights-origin",
            "rights.landmark-cases",
            "rights.scotus-precedent",
            "rights.limits-on-rights",
            "civics.judicial-review-marbury",
          ],
          coverage: "partial",
          note: "The Bill of Rights, First Amendment freedoms, when government may limit rights, and landmark rights cases are taught; the standard's full case list (Plessy, Brown, Miranda, Bakke, Adarand, VMI), selective incorporation as a concept, and the Warren/Rehnquist-court analysis are not all covered, so this is partial.",
        },
        {
          code: "USG.6",
          text: "Describe the role and function of linkage institutions such as the media, interest groups, political parties, and political action committees, on the citizens and federal government.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.reading-ads-for-omission",
            "bvc.evaluate-claims-fallacies",
            "media.misleading-statistics",
          ],
          coverage: "partial",
          note: "Claimed only through the media-evaluation objectives: USG.6 objective 7 (\"Evaluate the responsibility of the citizens to thoughtfully evaluate evidence presented by media and interest groups\") and objective 8 (the role of journalism, internet vs. traditional media) are near-1:1 with the catalog's media-literacy method. The rest of USG.6 (parties, PACs, campaign finance, interest-group agendas) is not taught, so this is partial.",
        },
      ],
    },
    // ── Literacy in History/Social Studies & Writing, grades 11-12 (2025 MS CCRS) ──
    {
      id: "ms-literacy",
      subject: "English/Language Arts",
      name: "Mississippi College- and Career-Readiness Standards for Literacy and Writing (2025) — Literacy in History/Social Studies, Grades 11-12",
      publisher: "Mississippi Department of Education (MDE)",
      version:
        "2025 MS CCRS for Literacy and Writing · Reading for Literacy in History/Social Studies (RH) and Writing for Literacy in History/Social Studies, Science & Technical Subjects (WHST), grades 11-12",
      fetchedOn: "2026-07-19",
      sourceUrl: MS_ELA,
      adoption:
        "Mississippi adopted the Common Core for ELA as the MS CCRS, but revised at least one of the literacy codes this catalog touches, so these are transcribed VERBATIM from Mississippi's own 2025 document rather than aliased to the shared Common Core file. RH.11-12.8, RH.11-12.9, WHST.11-12.7, and WHST.11-12.8 are identical to Common Core; RH.11-12.6 is Mississippi's revised wording (see the file header). We claim no mathematics standards.",
      standards: [
        {
          code: "RH.11-12.6",
          text: "Evaluate author's differing points of view on the same historical event or issue by assessing the authors' claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "The strongest single alignment on this page. Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims, reasoning, and evidence. MISSISSIPPI-REVISED wording: MS opens \"Evaluate author's differing points of view…\" (singular) where the Common Core reads \"Evaluate authors' differing…\" (plural) — this divergence is why the shared Common Core file is not aliased here.",
        },
        {
          code: "RH.11-12.8",
          text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "Mississippi's text is verbatim identical to the Common Core code.",
        },
        {
          code: "RH.11-12.9",
          text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that. Mississippi's text is verbatim identical to the Common Core code.",
        },
        {
          code: "WHST.11-12.7",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded research assignment. Where it runs, it meets this standard squarely. Mississippi's text is verbatim identical to the Common Core code.",
        },
        {
          code: "WHST.11-12.8",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics", "bvc.source-evaluation-modelled"],
          coverage: "partial",
          note: "Partial, same reason as WHST.11-12.7: the graded gathering-and-citing product ships only in the Coffee episode. Mississippi's text is verbatim identical to the Common Core code.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — Common-Core-derived MS CCRS: nothing claimed.",
      body: "Mississippi adopted the Common Core for mathematics as the MS College- and Career-Readiness Standards, but this catalog does no mathematics instruction, so it meets no Mississippi mathematics standard.",
    },
    {
      heading: "Science — Mississippi's own 2018 standards (NOT NGSS): nothing claimed.",
      body: "Mississippi did NOT adopt the Next Generation Science Standards; its science standards are Mississippi's own (the 2018 Mississippi College- and Career-Readiness Standards for Science). So the shared NGSS framework (which NGSS states adopt) does not apply here and is not aliased. This catalog has no laboratory work, investigation, or scientific modeling, and its climate/resource content would at most map to Mississippi's own Earth/Environmental science standards — deferred this pass, not claimed unverified.",
    },
    {
      heading: "English/Language Arts RI.11-12.6 — in Mississippi's separate ELA document: deferred.",
      body: "The catalog's rhetoric/persuasion strength (analyzing how style and content make a text persuasive) maps to RI.11-12.6 (Reading Informational Text). That code lives in Mississippi's separate ELA-teacher standards document rather than the 2025 MS CCRS for Literacy and Writing we transcribed here, so we did not verify its verbatim Mississippi wording this pass. Verbatim-or-nothing: it is deferred, not aliased.",
    },
    {
      heading: "Mississippi's Lieutenant Governor, struck-down initiative, and 2020 changes have no discrete benchmark.",
      body: "The flagship teaches Mississippi's unusually powerful Lieutenant Governor, its ballot-initiative process struck down in 2021 (the five-congressional-district signature formula that became impossible after Mississippi dropped to four U.S. House seats), the 2020 removal of the Jim Crow-era statewide-election rule, and the 2020 adoption of a new state flag as headline features. Mississippi's MS.10 standard names none of them individually (it says only \"the structure and function of local and state government in Mississippi\"), so they are claimed through MS.10 rather than as standards of their own.",
    },
    {
      heading: "The abstract-concept and linkage-institution benchmarks we checked and rejected.",
      body: "USG.1 (the basic concepts of democracy — the worth and dignity of the individual, equality under law, majority rule vs. minority rights, compromise) is too abstract to claim as a dedicated unit, and the party / PAC / campaign-finance / interest-group core of USG.6 is not taught (USG.6 is claimed only partially, through its two media-evaluation objectives). The courses do not genuinely teach these, so we do not claim them.",
    },
    {
      heading: "Mississippi's US History, World History, Economics, Geography, and Mississippi Studies history strands — deferred, not denied.",
      body: "The catalog's commodity, colonial, labor, civil-rights, and Cold-War history and its commodity economics WOULD map to Mississippi's US History, World History, Economics, and Geography courses and to the history strands of the Mississippi Studies course (MS.1-9, MS.11, MS.12), as they do in other states. Those strands were not transcribed this pass; they are deferred (verbatim-or-nothing), not claimed unverified. This pass mapped the US Government course, the Mississippi Studies government standard (MS.10), and the grades 11-12 literacy standards.",
    },
  ],
};
