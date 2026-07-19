// ─────────────────────────────────────────────────────────────────────────────
// UTAH — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ut` was written FROM Utah's own official sources (le.utah.gov,
// vote.utah.gov / elections, utcourts.gov, and the 1896 Constitution), so Utah's civics flagship
// gets its 1:1 state-civics course.
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from USBE's own record (Utah is MIXED
// inherit + bespoke):
//   · Social studies — BESPOKE. Utah's United States Government and Citizenship course (Utah Core
//     Standards for Social Studies, revised September 2016) is Utah's own. It is the anchor for the
//     Utah Civics flagship; its DISTRIBUTION OF POWER strand (U.S. GOV Standard 3.x) reaches Utah's
//     own state and local government, and Standard 3.3 ("how and why people organize to
//     participate... developing political affiliations, joining political parties") is a genuine home
//     for Utah's distinctive dual-path (caucus-convention OR signature) nomination system.
//   · ELA — INHERITED (Common Core), but PARTIAL. Utah adopted the Common Core State Standards for
//     ELA. We compared the strands this catalog touches against Utah's own current documents:
//       – the DISCIPLINARY-LITERACY strands (Reading and Writing for Literacy in History/Social
//         Studies, grades 11-12) are VERBATIM CCSS — RH.11-12.6/8/9 and WHST.11-12.7/8 read
//         word-for-word identical — so they are mapped below as OWN frameworks with Utah's codes.
//       – BUT Utah's 2023 ELA revision REWORDED the main reading-informational strand: the old
//         RI.11-12.6 (author's point of view / effective rhetoric) is now Utah's 11-12.R.11 with
//         different wording, so the shared file's RI.11-12.6 is NOT verbatim in Utah and we do not
//         claim it. Because Utah adopts only a verbatim SUBSET of the shared Common Core ELA file,
//         we cite the literacy strands as OWN frameworks here rather than adopting the shared file
//         wholesale (which would drag in the diverged RI standard).
//   · Math — INHERITED (Common Core), but this catalog teaches no mathematics (notClaimed).
//   · Science — BESPOKE. Utah's SEEd Standards are Utah's own — NGSS-influenced but reorganized,
//     NOT verbatim NGSS — so our shared NGSS file does NOT apply and we do not blind-alias it. The
//     one Earth-science-adjacent claim is deferred until the SEEd document is fetched and verified
//     (published in notClaimed).
//
// Provenance: the Utah Core Standards for the United States Government and Citizenship course were
// transcribed VERBATIM, fetched 2026-07-19. The canonical USBE PDF (the ut-usg sourceUrl below)
// uses a subset-font encoding that does not decode to clean text under automated extraction (the
// same problem as Michigan's michigan.gov PDF); its cover decodes to "Utah State Board of
// Education · Revised September 2016". The verbatim text was transcribed from the SAME standards as
// published on USBE's official curriculum network, the Utah Education Network (uen.org), which
// renders clean text and was cross-checked against the decoded PDF (strand names, USG Standard 5.2,
// USG Standard 3.2, and USG Standard 1.1 all matched). The ELA literacy strands were likewise read
// from UEN (courseNum 6320 Reading, 6350 Writing) and compared against the shared Common Core file.
// Utah labels the government standards "U.S. GOV Standard <strand>.<n>"; we cite them exactly so.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const UT_USG =
  "https://schools.utah.gov/curr/socialstudies/utah_core_standards/UtahCoreStandardsforSocialStudiesUnitedStatesGovernmentCitizenship.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "UT",
  frameworks: [
    // ── United States Government and Citizenship — the flagship's home ─────
    {
      id: "ut-usg",
      subject: "Social Studies",
      name: "Utah Core Standards for Social Studies — United States Government and Citizenship",
      publisher: "Utah State Board of Education (USBE)",
      version: "Utah Core Standards for Social Studies · revised September 2016 · U.S. Government and Citizenship",
      fetchedOn: "2026-07-19",
      sourceUrl: UT_USG,
      adoption:
        "Utah's United States Government and Citizenship course (recommended for seniors) is the anchor for the Utah Civics flagship. Its FOUNDATIONAL PRINCIPLES and DISTRIBUTION OF POWER strands carry the general federal civics ladder, its CIVIL LIBERTIES strand carries the rights work, and Standard 3.3 (how and why people organize to participate) is a genuine home for Utah's distinctive dual-path nomination system. Transcribed verbatim from USBE's standards as published on the Utah Education Network (see the file header for the subset-font/provenance note); the canonical USBE PDF is the sourceUrl.",
      standards: [
        // — Strand 1: FOUNDATIONAL PRINCIPLES —
        {
          code: "U.S. GOV Standard 1.2",
          text: "Students will describe the structure of the United States' form of government as a compound constitutional republic, including the ideas of federalism; checks and balances; separation of powers; commerce, elastic, and supremacy clauses; popular sovereignty; and limited government.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
          ],
          coverage: "partial",
          note: "Partial: most of the named elements are taught directly — federalism, checks and balances, separation of powers, and the commerce, elastic (Necessary and Proper), and supremacy clauses through McCulloch v. Maryland and the powers taxonomy. Popular sovereignty and limited government as named concepts are not worked head-on.",
        },
        {
          code: "U.S. GOV Standard 1.3",
          text: "Students will explain the organization, functions, and processes of the United States government, such as the purpose of the President's cabinet, the function of judicial review, and how a bill becomes a law, and apply that understanding to current issues.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.judicial-review-marbury",
            "civics.federal-bill-process",
          ],
          coverage: "partial",
          note: "Partial: two of the standard's three named examples are taught in depth — the function of judicial review (through Marbury v. Madison) and how a bill becomes a law (an entire course). The purpose of the President's cabinet is not taught, and the apply-to-current-issues performance is prompted, not assessed.",
        },
        {
          code: "U.S. GOV Standard 1.1",
          text: "Students will explain how documents, challenges, events, and ideas such as the rule of law, the social contract, compromise, the Declaration of Independence, the Articles of Confederation, Shays' Rebellion, and the Federalist Papers significantly influenced the United States Constitution.",
          claimIds: ["civics.articles-to-constitution", "civics.constitution-article-by-article"],
          coverage: "partial",
          note: "Partial: the Articles of Confederation the standard names — why they failed and how that produced the 1787 Constitution — are taught, and the Constitution is then worked article by article. The rule of law, the social contract, the Declaration of Independence, Shays' Rebellion, and the Federalist Papers as named influences are not each worked.",
        },
        // — Strand 2: CIVIL LIBERTIES, CIVIL RIGHTS, AND RESPONSIBILITIES —
        {
          code: "U.S. GOV Standard 2.3",
          text: "Students will explain the purpose and importance of fulfilling civic responsibilities, including serving on juries; voting; serving on boards, councils, and commissions; remaining well-informed; contacting elected officials; and other duties associated with active citizenship.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
            "civics.show-up-every-level",
            "civics.ut-get-involved",
          ],
          coverage: "full",
          note: "Every named responsibility is taught as practice: jury service (an entire course), voting, serving on and showing up at boards, councils, and commissions (with Utah's own on-ramps — caucuses, county councils, school boards), staying well-informed, and contacting elected officials.",
        },
        {
          code: "U.S. GOV Standard 2.1",
          text: "Students will use historic and modern case studies, including Supreme Court cases, amendment initiatives, and legislation to trace the application of civil liberties, civil rights, and responsibilities spelled out in the Constitution, the Bill of Rights, and other amendments.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent", "civics.bill-of-rights-overview"],
          coverage: "full",
          note: "The standard's core method — tracing the application of civil liberties and rights through historic and modern Supreme Court cases — is exactly the rights curriculum: Tinker, Brandenburg, Mapp, Terry, T.L.O., Riley, and Carpenter as applicable rules, how precedent expands rights over time, and the Bill of Rights as the document those rights are spelled out in.",
        },
        {
          code: "U.S. GOV Standard 2.2",
          text: "Students will examine various perspectives on a current rights-related issue; take a position; defend that position using the Constitution and Bill of Rights, historical precedents, Supreme Court decisions, and other relevant resources; and share that position, when possible, with relevant stakeholders.",
          claimIds: ["rights.limits-on-rights", "rights.landmark-cases"],
          coverage: "partial",
          note: "Partial: the rights knowledge to take and defend a position is taught in depth — when government may and may not constitutionally limit rights, and the landmark cases and precedents to reason from. The examine-perspectives, take-a-position, and share-with-stakeholders performance happens in a classroom we do not run.",
        },
        // — Strand 3: DISTRIBUTION OF POWER —
        {
          code: "U.S. GOV Standard 3.1",
          text: "Students will explain the distribution of power among national, state, tribal, and local governments in order to identify how needs are met by governance systems.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.local-government-layers",
            "civics.ut-statehood-executive",
            "civics.ut-legislature",
            "civics.ut-courts-merit",
          ],
          coverage: "partial",
          note: "Partial: the national/state distribution is taught through federalism and the powers taxonomy, the local level through the local-government layers, and the STATE level through Utah's own government in depth — the plural executive, the 45-day citizen Legislature, and the merit-selected judiciary (Utah's course has no dedicated state-structure code, so these flagship lessons are cited here). The TRIBAL level the standard names is not taught.",
        },
        {
          code: "U.S. GOV Standard 3.2",
          text: "Students will explain the role that local elected officers fulfill, such as mayors, council members, auditors, treasurers, surveyors, assessors, recorders, clerks, sheriffs, county commissioners, and district or county attorneys and how local government roles differ from state and federal roles.",
          claimIds: ["civics.local-government-layers", "civics.ut-local-government"],
          coverage: "partial",
          note: "Partial: what local government handles, and how it differs from state and federal roles, is taught — including Utah's own layers (29 counties governed by commissions or councils, cities and towns, and school and special districts). The full roster of named local officers (surveyors, assessors, recorders, and the rest) is not each worked.",
        },
        {
          code: "U.S. GOV Standard 3.3",
          text: "Students will explain the processes and motivations for how and why people organize to participate in civic society, such as developing political affiliations, joining political parties, and supporting special interest groups and other non-governmental or non-partisan civic organizations, and evaluate the political impact of those affiliations.",
          claimIds: ["civics.ut-dual-path", "civics.ut-get-involved"],
          coverage: "partial",
          note: "Partial: how and why Utahns organize to participate is taught squarely through Utah's dual-path system — precinct caucuses, party conventions and delegates, and signature petitions — a genuine case of developing political affiliations and joining parties to shape nominations. Evaluating the political impact of special-interest-group affiliations more broadly is not taught.",
        },
        {
          code: "U.S. GOV Standard 3.4",
          text: "Students will use data to evaluate election results and explain election processes and strategies.",
          claimIds: ["civics.election-mechanics", "civics.ut-elections-mail"],
          coverage: "partial",
          note: "Partial: election processes and strategies are taught — the general mechanics from registration through counting and certification, and Utah's own all-mail system and dual-path nomination strategy. Using DATA to evaluate election results is not a taught skill.",
        },
        // — Strand 5: THE U.S. AND OUR RELATIONSHIP TO THE WORLD —
        {
          code: "U.S. GOV Standard 5.3",
          text: "Students will evaluate how global economic interdependence and international trade policies affect the economy of the United States.",
          claimIds: [
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
            "history.nafta-usmca-labor",
            "bvc.sugar-program-trade-barriers",
          ],
          coverage: "partial",
          note: "Partial: global economic interdependence and specific trade policies are taught in depth — commodity value chains and the commodity trap, the U.S. sugar program (whose import quotas and price supports cost U.S. consumers), and NAFTA→USMCA's effect on U.S. labor. A general treatment of interdependence's effect on the U.S. economy is not.",
        },
        {
          code: "U.S. GOV Standard 5.2",
          text: "Students will analyze the justification for, and effectiveness of, specific foreign policy positions, such as military intervention, isolationism, alliance formation, economic sanctions, or other security measures.",
          claimIds: ["bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: taught through one worked case — U.S. drug-war foreign policy as a security measure, its justifications and effectiveness including the balloon effect of source-country interdiction. The standard's other named positions (military intervention, isolationism, alliance formation, economic sanctions) are not each worked.",
        },
      ],
    },

    // ── ELA — Reading for Literacy in History/Social Studies (verbatim CCSS) ─
    {
      id: "ut-lit-reading",
      subject: "English/Language Arts",
      name: "Utah Core Standards — Reading for Literacy in History/Social Studies (Grades 11-12)",
      publisher: "Utah State Board of Education (USBE)",
      version: "Utah Core Standards for ELA & Literacy · Grades 11-12 · Reading for Literacy in History/Social Studies",
      fetchedOn: "2026-07-19",
      sourceUrl: "https://www.uen.org/core/core.do?courseNum=6320",
      adoption:
        "Utah adopted the Common Core State Standards for ELA. The disciplinary-literacy Reading strand (Literacy in History/Social Studies, grades 11-12) is VERBATIM CCSS — we compared standards 6, 8, and 9 against Utah's current document (USBE's Utah Education Network) and each reads word-for-word identical to the shared Common Core file. We cite them under Utah's codes as an OWN framework because Utah's 2023 ELA revision reworded the separate reading-informational standard (the old RI.11-12.6), so Utah adopts only a verbatim SUBSET of the shared file — see notClaimed. We claim no mathematics standards.",
      standards: [
        {
          code: "RH.11-12.6",
          text: "Evaluate authors' differing points of view on the same historical event or issue by assessing the authors' claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims and evidence.",
        },
        {
          code: "RH.11-12.8",
          text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
        },
        {
          code: "RH.11-12.9",
          text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
        },
      ],
    },

    // ── ELA — Writing for Literacy in History/Social Studies (verbatim CCSS) ─
    {
      id: "ut-lit-writing",
      subject: "English/Language Arts",
      name: "Utah Core Standards — Writing for Literacy in History/Social Studies (Grades 11-12)",
      publisher: "Utah State Board of Education (USBE)",
      version: "Utah Core Standards for ELA & Literacy · Grades 11-12 · Writing for Literacy in History/Social Studies",
      fetchedOn: "2026-07-19",
      sourceUrl: "https://www.uen.org/core/core.do?courseNum=6350",
      adoption:
        "Utah's disciplinary-literacy Writing strand (Literacy in History/Social Studies, grades 11-12) is VERBATIM CCSS — we compared standards 7 and 8 against Utah's current document (USBE's Utah Education Network) and each reads word-for-word identical to the shared Common Core file. Cited under Utah's codes as an OWN framework (see the reading framework's note and notClaimed for why the shared file is not adopted wholesale).",
      standards: [
        {
          code: "WHST.11-12.7",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded research project. Where it runs, it meets this standard squarely.",
        },
        {
          code: "WHST.11-12.8",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "Partial, same reason as WHST.11-12.7: the Coffee project demands authoritative sources and APA citation, but it is the one graded research project the catalog currently ships.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "Utah adopted the Common Core State Standards for mathematics, but this catalog does no mathematics instruction, so it meets no Utah Core mathematics standard.",
    },
    {
      heading: "The main ELA reading-informational strand — Utah's 2023 revision diverged from the shared file.",
      body: "Utah adopted the Common Core for ELA, and its disciplinary-literacy strands (RH.11-12.6/8/9 and WHST.11-12.7/8) are verbatim CCSS and mapped above. But Utah's 2023 ELA revision replaced the old reading-informational standard RI.11-12.6 (an author's point of view where the rhetoric is particularly effective) with a reworded standard, Utah's 11-12.R.11, whose text is different. Our rhetoric-of-persuasion work (bvc.rhetoric-power-persuasion) therefore has no verbatim Utah home and is not claimed here; it maps to the disciplinary-literacy standards we do cite, not the general reading-informational strand.",
    },
    {
      heading: "Science — Utah's SEEd Standards are Utah's own, not verbatim NGSS (deferred).",
      body: "Utah teaches its own SEEd (Science with Engineering Education) Standards — NGSS-influenced but reorganized, and NOT verbatim NGSS — so our shared NGSS file does not apply and we will not alias it. The one Earth-science-adjacent claim other states hang on HS-ESS3-1 (climate and resource availability shaping human activity) is deferred until the SEEd document is fetched and its wording verified against Utah's own codes. There is no laboratory work, investigation, or modelling in this catalog either way.",
    },
    {
      heading: "U.S. GOV Standard 3.5, 3.6 — the cabinet and administrative rulemaking.",
      body: "Standard 3.5 (how the individual roles of the President's cabinet meet various purposes) and Standard 3.6 (how the administrative rule-making process functions within the federal system) are not genuinely taught by these courses.",
    },
    {
      heading: "Strand 4 — FISCAL POLICIES AND DECISIONS.",
      body: "Standards 4.1–4.3 (the fiscal decisions governmental agencies make and their guiding economic philosophies, the revenue streams and taxes that fund government, and proposing and defending a budget) are not taught. This catalog does no public-finance or personal-finance instruction.",
    },
    {
      heading: "U.S. GOV Standard 5.1 and 5.4 — foreign-policy structure and the global-issue argument.",
      body: "Standard 5.1 (the constitutional process of creating foreign policy and the structures — the Department of State, treaties, agreements, alliances — through which the federal government interacts with foreign governments) is not taught. Standard 5.4 (craft an argument for an appropriate role for the United States in a global economic, environmental, or social issue such as humanitarian aid, migration, pandemics, or wildlife habitat) is not claimed: the Coffee project's argument paper is on a global commodity issue, not framed as the United States' role, so we will not stretch it into this standard.",
    },
    {
      heading: "U.S. GOV Standard 3.3's interest-group half, and the party/lobbying content.",
      body: "We claim Standard 3.3 for how Utahns organize through the dual-path caucus-and-signature system, but not for its interest-group half: political parties as institutions, special-interest groups, lobbying, and evaluating the political impact of those affiliations are not taught (our media-literacy work is consumer protection, not political-media analysis).",
    },
    {
      heading: "Tribal governments (U.S. GOV Standard 3.1).",
      body: "Standard 3.1 names the distribution of power among national, state, tribal, and local governments, and the course preface notes American Indian tribal governments' unique relationship. Utah Civics teaches Utah's state and local structure but not tribal governments, so Standard 3.1 is claimed as partial and the tribal dimension is not claimed. The gap is in the course, not the standards.",
    },
    {
      heading: "Utah's own state structure is taught more fully than any one code captures.",
      body: "Utah Civics teaches the dual-path (caucus-convention or signature) nomination system, the 1896 statehood story (polygamy banned, women's suffrage from the start), the joint-ticket Governor and Lieutenant Governor (the latter as chief elections officer), the 45-day part-time Legislature, merit selection with a Judicial Performance Evaluation Commission, and all-mail elections — from Utah's own sources. Utah's government course has no dedicated state-structure standard, so Standards 3.1, 3.3, and 3.4 are the generous homes we cite this content under; the 45-day session, the plural executive, and the performance-evaluation-aided retention have no code of their own.",
    },
  ],
};
