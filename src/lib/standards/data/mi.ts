// ─────────────────────────────────────────────────────────────────────────────
// MICHIGAN — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-mi` was written FROM Michigan's own official sources (legislature.mi.gov,
// michigan.gov/sos, courts.michigan.gov, and the 1963 Constitution), so Michigan's civics
// flagship gets its 1:1 state-civics course.
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from MDE's own record:
//   · ELA — INHERITED, but ALIASED (this is the point of Michigan). Michigan adopted the Common
//     Core State Standards for ELA as the "Michigan K-12 Standards for English Language Arts",
//     approved by the State Board of Education in 2010. We fetched Michigan's own ELA document
//     and compared the RH/RI/WHST grade 11-12 standards we cite against it: the WORDING IS
//     VERBATIM CCSS, but Michigan's document prints the strands under the BARE codes
//     (RH.11-12.6, WHST.11-12.7, …) without the "CCSS.ELA-Literacy" web namespace the shared file
//     carries. So we adopt ../shared/common-core-ela's verbatim text and ALIAS each code to
//     Michigan's printed form. (Contrast Illinois next door, whose document keeps the CCSS code
//     style — that one is verbatim with no aliases.)
//   · Science — INHERITED (verbatim). Michigan was an NGSS lead state (two MSU professors led NGSS
//     writing teams). The State Board of Education adopted the Michigan Science Standards on
//     November 10, 2015 — the NGSS performance expectations, using the NGSS codes verbatim.
//     ../shared/ngss is adopted verbatim, no aliases.
//   · Social studies — BESPOKE. Michigan's 2019 K-12 Social Studies Standards are Michigan's own,
//     and — unlike Illinois's abstract concept standards — the High School Civics course carries a
//     dedicated "Structure and Functions of State, Local, and Tribal Governments" cluster (C3.2),
//     so the Michigan flagship's Michigan-structure lessons have a genuine home (C3.2.3, C3.2.6).
//
// Provenance: the Michigan K-12 Standards for Social Studies (2019), High School Civics, were
// transcribed VERBATIM from the MDE-published document, fetched 2026-07-18. The michigan.gov PDF
// (the sourceUrl below) opens in a browser but returns HTTP 403 to automated fetches; we
// transcribed from a copy of the SAME MDE document served at
// misocialstudies.org/Standards/HSCivics.pdf. That PDF uses a subset-font encoding that offsets
// glyphs by a fixed amount; the Civics strand was decoded (a deterministic per-font glyph shift)
// and EVERY standard mapped below was verified to read as clean, sensible English before use. The
// Michigan ELA comparison was made against the michigan.gov ELA document via its Wayback capture,
// snapshot 20250430151740 (2025-04-30). Michigan cites HS Civics standards as C<strand>.<cluster>.
// <n> (e.g. C3.2.3); we cite them exactly so. Michigan's era-based World/US History and Economics
// strands are deferred this pass (their multi-column layout risks non-verbatim transcription) —
// published in notClaimed, fetch-and-verify-or-don't-cite.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const MI_SS = "https://www.michigan.gov/-/media/Project/Websites/mde/Academic-Standards/Social_Studies_Standards.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "MI",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      // Michigan renamed the codes (dropped the "CCSS.ELA-Literacy" namespace) but kept the text
      // verbatim, so each shared code is aliased to Michigan's printed bare form.
      aliases: {
        "CCSS.ELA-Literacy.RH.11-12.6": "RH.11-12.6",
        "CCSS.ELA-Literacy.RH.11-12.8": "RH.11-12.8",
        "CCSS.ELA-Literacy.RH.11-12.9": "RH.11-12.9",
        "CCSS.ELA-Literacy.RI.11-12.6": "RI.11-12.6",
        "CCSS.ELA-Literacy.WHST.11-12.7": "WHST.11-12.7",
        "CCSS.ELA-Literacy.WHST.11-12.8": "WHST.11-12.8",
      },
      adoption:
        "Michigan adopted the Common Core State Standards for English language arts as the Michigan K-12 Standards for English Language Arts, approved by the State Board of Education in 2010. Michigan's document reproduces the CCSS text VERBATIM but prints the strands under the bare CCSS codes (RH.11-12.6, WHST.11-12.7, …) without the “CCSS.ELA-Literacy” web namespace, so the codes here are aliased to Michigan's printed form. We compared the RH/RI/WHST grade 11-12 standards against Michigan's own document (Wayback snapshot 20250430151740, 2025-04-30) and the wording is identical. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "Michigan was an NGSS lead state. The State Board of Education adopted the Michigan Science Standards on November 10, 2015 — the NGSS performance expectations, using the NGSS codes verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── High School Civics (Michigan K-12 Social Studies Standards, 2019) ──
    {
      id: "mi-civics",
      subject: "Social Studies",
      name: "Michigan K-12 Standards for Social Studies — High School Civics (C)",
      publisher: "Michigan Department of Education (MDE) / State Board of Education",
      version: "Michigan K-12 Social Studies Standards, 2019 · High School Civics",
      fetchedOn: "2026-07-18",
      sourceUrl: MI_SS,
      adoption:
        "Michigan's High School Civics course is the anchor for the Michigan Civics flagship. Its C3.2 cluster (Structure and Functions of State, Local, and Tribal Governments) is a genuine home for a state's own structure — C3.2.3 and C3.2.6 are near-1:1 with the flagship — and the federal C3.1 and citizenship C6 clusters carry the general U.S. civics ladder. Transcribed verbatim from the MDE 2019 Social Studies Standards (see the file header for the decode/provenance note).",
      standards: [
        // — C3.2 Structure and Functions of State, Local, and Tribal Governments (the flagship's home) —
        {
          code: "C3.2.3",
          text: "Describe how state, local, and tribal governments are organized, their major responsibilities, and how they affect the lives of people residing in their jurisdictions.",
          claimIds: ["civics.mi-state-structure", "civics.mi-local-government", "civics.local-government-layers"],
          coverage: "partial",
          note: "This is the flagship's primary home: Michigan's own state structure (the 1963 Constitution, the Legislature, the executive, the nonpartisan-ballot judiciary) and Michigan local government (83 counties, strong townships, home-rule cities under the 1909 Act) are taught in depth. The standard also names TRIBAL governments, which the course does not cover — hence partial.",
        },
        {
          code: "C3.2.6",
          text: "Describe and evaluate referendums, initiatives, and recall as mechanisms used to influence state and local government. Use a case study to examine the impact of one such listed mechanism.",
          claimIds: ["civics.mi-direct-democracy", "civics.mi-redistricting", "civics.ballot-measures-local-causes"],
          coverage: "full",
          note: "Near-1:1 with the flagship's headline: Michigan's initiative, referendum, and recall are each taught, and the standard's “case study” is delivered by the Independent Citizens Redistricting Commission — a constitutional initiative (Proposal 2 of 2018) that reshaped how Michigan governs itself.",
        },
        {
          code: "C3.2.1",
          text: "Describe limits the U.S. Constitution places on powers of the states and on the federal government’s power over the states.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.federalism-why-split-power"],
          coverage: "full",
          note: "The Tenth Amendment's reserved powers and the limits on each level are taught directly in the powers-taxonomy and federalism courses.",
        },
        {
          code: "C3.2.2",
          text: "Explain interactions and tensions among federal, state, and local governments using the necessary and proper clause, the Commerce Clause, and the Tenth Amendment.",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "The Necessary and Proper Clause, the Commerce Clause's reach, and the Tenth Amendment are taught by name through McCulloch v. Maryland and the enumerated/implied/reserved powers taxonomy.",
        },
        // — C3.1 Structure, Functions, Powers, and Limits of Federal Government (the general ladder) —
        {
          code: "C3.1.1",
          text: "Identify and describe the purposes, organization, powers, processes, and election of the legislative branch as enumerated in Article I of the Constitution.",
          claimIds: ["civics.federal-articles-i-iii", "civics.federal-bill-process"],
          coverage: "full",
          note: "Article I's structure, the enumerated powers, and how a bill becomes law are taught end to end.",
        },
        {
          code: "C3.1.2",
          text: "Identify and describe the purposes, organization, powers, processes, and election of the executive branch as enumerated in Article II of the Constitution.",
          claimIds: ["civics.federal-articles-i-iii", "civics.three-branches-federal", "civics.electoral-college"],
          coverage: "full",
          note: "Article II's executive powers and the election to office — including the Electoral College's mechanics and original purpose — are taught directly.",
        },
        {
          code: "C3.1.3",
          text: "Identify and describe the purposes, organization, powers, processes, and appointment or election of the judicial branch as enumerated in Article III of the Constitution and as established in Marbury v. Madison.",
          claimIds: ["civics.federal-judiciary-structure", "civics.judicial-review-marbury", "civics.scotus-nomination-confirmation"],
          coverage: "full",
          note: "Article III's judiciary, the nomination-and-confirmation process, and judicial review through Marbury v. Madison are each taught by name.",
        },
        {
          code: "C3.1.4",
          text: "Examine and evaluate the effectiveness the role of separation of powers and checks and balances in regard to the distribution of power and authority between the three branches of government.",
          claimIds: ["civics.separation-checks-balances"],
          coverage: "full",
        },
        {
          code: "C3.1.5",
          text: "Analyze the various levels and responsibilities in the federal and state judicial systems and explain the relationships among them.",
          claimIds: ["civics.federal-judiciary-structure", "civics.mi-courts"],
          coverage: "full",
          note: "Both systems the standard names are taught: the federal judiciary's three tiers, and Michigan's own courts — the nonpartisan-ballot-but-party-nominated Supreme Court, the Court of Appeals, and the trial courts.",
        },
        {
          code: "C3.1.7",
          text: "Identify and explain how Supreme Court decisions and provisions in the U.S. Constitution have impacted the power of the federal government.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.judicial-review-marbury"],
          coverage: "full",
          note: "Taught through the standard's own example — McCulloch v. Maryland, implied powers, and the enumerated/implied/reserved taxonomy that defines federal power.",
        },
        // — C3.3 Additional Actors and Influences (media literacy) —
        {
          code: "C3.3.7",
          text: "Analyze the credibility and validity of various forms of political communication.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.reading-ads-for-omission",
            "bvc.media-fallacies-recurring",
            "bvc.evaluate-claims-fallacies",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Reading a message for credibility, bias, omission, and logical fallacy — the standard's exact skill — is the media-literacy method run in every episode: ads, labels, and campaign language read for what they leave out.",
        },
        // — C6 Citizenship and Civic Participation —
        {
          code: "C6.1.1",
          text: "Describe and evaluate the requirements and process for becoming a citizen of the United States.",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "full",
          note: "The 14th Amendment, citizenship through birth and through parents, and naturalization eligibility step by step are taught directly.",
        },
        {
          code: "C6.1.2",
          text: "Explain how the United States has limited and expanded citizenship over time.",
          claimIds: ["civics.citizenship-limited-and-expanded"],
          coverage: "full",
          note: "The standard's own examples are legislation and constitutional amendments, and both are the substance of the lessons: citizenship conferred on Puerto Rico in 1917, the Virgin Islands in 1927 and 1932, Guam in 1950 and the Northern Marianas by the 1976 Covenant, never conferred on American Samoa, and the Fourteenth Amendment question litigated in Fitisemanu v. United States.",
        },
        {
          code: "C6.1.3",
          text: "Compare and contrast rights and representation among U.S. people and citizens living in states, territories, federal districts, and on tribally governed land.",
          claimIds: [
            "civics.territorial-representation",
            "civics.territorial-status-doctrine",
            "civics.citizenship-limited-and-expanded",
          ],
          coverage: "partial",
          note: "Near-1:1 on the standard's own named examples for states, territories and the federal district: the District of Columbia, Guam, Puerto Rico, the Northern Mariana Islands, the U.S. Virgin Islands and American Samoa are each taught by name, with the Delegates, the Resident Commissioner's four-year term, the Senate's total absence, and the Twenty-Third Amendment's capped electors. PARTIAL because the standard also names TRIBAL GOVERNMENTS, and this course deliberately refuses to teach tribal sovereignty, handing it to `tribal-nations-governance` and giving the comparison one careful lesson instead of a claim.",
        },
        {
          code: "C6.2.1",
          text: "Using examples, explain the rights and responsibilities of U.S. citizens as well all people living in the United States.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service", "civics.voter-registration", "civics.mi-elections"],
          coverage: "full",
          note: "The standard's own examples — voting, serving as a juror — are taught as practice: jury service is an entire course, and voting is taught both generally (registration walkthroughs) and as Michigan's own voter-access rules (no-reason absentee, automatic and same-day registration, early voting).",
        },
        {
          code: "C6.4.3",
          text: "Identify and describe a local, state, national, or international public policy issue; research and evaluate multiple solutions; analyze the consequences of each solution and propose, defend, and take relevant action to address or resolve the issue.",
          claimIds: ["civics.track-a-bill", "civics.mi-get-involved", "civics.show-up-every-level"],
          coverage: "partial",
          note: "Civic action is taught as practice — tracking a live bill, showing up at the level where an issue is decided, and Michigan's own levers (petitions, public comment). The standard's full research-propose-defend-take-action project is prompted, not run as a graded assignment.",
        },
        {
          code: "C6.4.4",
          text: "Equip students with the skills and knowledge to explore multiple pathways for knowledgeable, civic engagement through simulations and/or real-world opportunities for involvement.",
          claimIds: ["civics.mi-get-involved", "civics.run-for-office", "civics.campaign-help", "civics.show-up-every-level"],
          coverage: "full",
          note: "Multiple real-world pathways are taught end to end: registering and voting with Michigan's options, helping a campaign lawfully, showing up at local boards, and running for office yourself.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Michigan Common Core (Michigan K-12) mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Michigan adopted the NGSS verbatim as the Michigan Science Standards (November 10, 2015), so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Michigan's World History, U.S. History, Economics, and Geography strands — deferred, not denied.",
      body: "The catalog's commodity, colonial, labor, civil-rights, and Cold-War history and its commodity economics WOULD map to Michigan's high-school World History (WHG), U.S. History (USHG), Economics (E), and Geography (G) strands, as they do in other states. But those strands sit in the 2019 document's multi-column, era-based layout, and the PDF's subset-font encoding makes clean verbatim transcription of that layout unreliable. Our rule is verbatim-or-nothing, so we mapped the High School Civics strand (which decoded cleanly and was verified) this pass and DEFER the other social-studies strands rather than risk citing text we cannot cleanly verify.",
    },
    {
      heading: "C6.1.2 and C6.1.3 were rejected in July 2026 and are now CLAIMED, because the catalog changed.",
      body: "The 2026-07-18 pass rejected both on the ground that no course genuinely taught the expansion of citizenship or territorial representation. That was true then. `territories-and-representation` (Not a State) shipped afterward and teaches exactly this material from primary federal sources, so both codes are now claimed: C6.1.2 in full, C6.1.3 as PARTIAL because its named examples include tribal governments, which that course deliberately declines to teach. The rejection is recorded here rather than deleted, so the change is visible.",
    },
    {
      heading: "Tribal governments (C3.2.3, C3.2.4).",
      body: "Michigan's C3.2 cluster names tribal governments and tribal sovereignty (C3.2.4 is entirely about it). Michigan Civics teaches Michigan's state and local structure but not tribal governments, so C3.2.3 is claimed as partial and C3.2.4 is not claimed. The gap is in the course, not the standards.",
    },
    {
      heading: "Michigan's own state structure is taught more fully than any one code captures.",
      body: "Michigan Civics teaches the 1963 Constitution, the nonpartisan-ballot-but-party-nominated Supreme Court, the joint-ticket Lieutenant Governor with a separately elected Secretary of State and Attorney General, term limits (Proposal 1 of 2022), and the Independent Citizens Redistricting Commission — from Michigan's own sources. C3.2.3 (how state/local governments are organized) and C3.2.6 (initiative/referendum/recall) host most of it, but the judicial-selection quirk and the redistricting commission's design have no code of their own beyond the direct-democracy mechanism that created it.",
    },
    {
      heading: "The federal-heavy and political-science civics standards we checked and rejected.",
      body: "C1.1.1-1.1.4 (political philosophy and systems of government), C2.1.1-2.1.3 (the founding debates and origins as named content), C2.2.1-2.2.3 (the Democratic Values ↔ Constitutional Principles pairing), C3.1.6 (federal revenue and expenditure), C3.3.1-3.3.6 (interest groups, parties, public opinion, campaigns, NGOs, and media types — our media literacy is consumer protection, not political-media analysis), all of C4 (the Bill of Rights and civil-rights case lists — touched only through Know Your Rights, a thin overlap), all of C5 (U.S. foreign policy and international institutions), C6.3.1 (civic dispositions as a named concept), and C6.4.1/6.4.2 (the pursuit of Democratic Values and a survey of civil disobedience and social movements) — the courses do not genuinely teach these, so we do not claim them.",
    },
  ],
};
