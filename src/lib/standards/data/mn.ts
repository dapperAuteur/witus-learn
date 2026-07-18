// ─────────────────────────────────────────────────────────────────────────────
// MINNESOTA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-mn` was written FROM Minnesota's own official sources (leg.mn.gov,
// sos.mn.gov, mncourts.gov, and the 1858 Constitution), so Minnesota's civics flagship gets its
// 1:1 state-civics course, and this file gives it a genuine home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from MDE's own record:
//   · Social studies (Citizenship and Government) — BESPOKE. Minnesota writes its own social
//     studies standards; they are not Common Core. The 2021 K-12 Academic Standards in Social
//     Studies (adopted by the State Board / MDE, March 2024; full implementation 2026-27) carry a
//     Citizenship and Government strand (strand 1) whose high-school (grade band 9) benchmarks name
//     Minnesota's OWN government explicitly: 9.1.4.7 ("Explain the powers and operations of the
//     State of Minnesota government as defined in its constitution…") and 9.1.4.8 ("Explain the
//     powers and operations of local government in Minnesota") are a real home for the flagship's
//     Minnesota structure lessons, and the general U.S. civics ladder maps to the 9.1.4.1-9.1.4.5
//     federal/elections benchmarks. The catalog's media/source-literacy method maps VERBATIM to
//     9.1.1.3 (curate and evaluate sources and forms of political persuasion for validity, bias…).
//   · Mathematics — NOT Common Core, and nothing claimed. Minnesota is one of the few states that
//     did NOT adopt the Common Core for mathematics; it kept its own Minnesota Academic Standards in
//     Mathematics. Either way this catalog does no mathematics instruction. Published in notClaimed.
//   · English/Language Arts — INHERITED in 2010, SINCE REPLACED, so DEFERRED (not aliased).
//     Minnesota adopted the Common Core State Standards for ELA in their entirety in 2010 (adopted
//     into rule Nov. 2011, implemented 2012-13) — a genuine Common Core ELA state. BUT Minnesota has
//     since replaced them with its own 2020 Minnesota Academic Standards in English Language Arts
//     (adopted 2023, fully implemented 2025-26), which re-home literacy as "disciplinary literacies"
//     including a discrete "Literacy in History/Social Studies" section for grades 6-12. Because the
//     CURRENT Minnesota ELA standards are no longer a verbatim republication of the Common Core, we
//     do NOT alias ../shared/common-core-ela here (that would cite superseded standards); the 2020
//     ELA "Literacy in History/Social Studies" strand would carry the catalog's ELA strengths but is
//     deferred this pass (verbatim-or-nothing). Note: the media/source-evaluation skill is already
//     claimed, as a full alignment, through the Citizenship and Government benchmark 9.1.1.3, so no
//     meaningful coverage is lost by deferring ELA. Published in notClaimed.
//   · Science — Minnesota's OWN 2019 standards (NGSS-influenced, NOT the NGSS): BESPOKE, DEFERRED.
//     Minnesota adopted its own 2019 Minnesota Academic Standards in Science — influenced by, but not
//     a verbatim adoption of, the Next Generation Science Standards — so the shared ../shared/ngss
//     file does NOT apply here. The catalog's climate/resource content would find an analog in
//     Minnesota's Earth/environmental science benchmarks, but that is deferred this pass. Published
//     in notClaimed.
//
// Provenance: the high-school (grade band 9) Citizenship and Government benchmarks were transcribed
// VERBATIM from MDE's own "2021 K-12 Academic Standards in Social Studies: Citizenship and
// Government Strand Learning Progression" (the byte-faithful learning-progression PDF at the
// sourceUrl below, published by the Minnesota Department of Education), fetched 2026-07-18. Codes are
// cited exactly as printed (grade band . strand . anchor standard . benchmark — e.g. 9.1.4.7). ONE
// typographical note: the document prints the judicial-branch benchmark as "9.1.4.4." with a stray
// trailing period (every other code has none); we cite it as the code 9.1.4.4. Text is verbatim,
// including the document's own curly apostrophe in "government's". IMPLEMENTATION NOTE for teachers:
// these 2021 standards replace the 2011 Minnesota social studies standards, with full implementation
// in the 2026-27 school year; the finder tells teachers to confirm against their current
// requirements, and this framework's version/fetchedOn state exactly what we read and when.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const MN_SS =
  "https://education.mn.gov/mdeprod/idcplg?IdcService=GET_FILE&dDocName=PROD084450&RevisionSelectionMethod=latestReleased&Rendition=primary";

export const JURISDICTION: JurisdictionFile = {
  state: "MN",
  frameworks: [
    // ── High School Citizenship and Government (2021 MN Academic Standards in Social Studies) ──
    {
      id: "mn-civics",
      subject: "Social Studies",
      name: "Minnesota K-12 Academic Standards in Social Studies — Citizenship and Government, High School (9.1)",
      publisher: "Minnesota Department of Education (MDE) / State Board of Education",
      version:
        "2021 Minnesota K-12 Academic Standards in Social Studies (adopted March 2024; full implementation 2026-27) · Citizenship and Government strand, high school (grade band 9)",
      fetchedOn: "2026-07-18",
      sourceUrl: MN_SS,
      adoption:
        "Minnesota writes its own social studies standards (they are not Common Core). The 2021 Citizenship and Government strand is the anchor for the Minnesota Civics flagship: its high-school benchmarks 9.1.4.7 (the powers and operations of the State of Minnesota government) and 9.1.4.8 (local government in Minnesota) are a genuine home for a state's own structure, while the 9.1.4.1-9.1.4.5 benchmarks carry the general U.S. civics ladder and 9.1.1.3 carries the catalog's media/source-literacy method verbatim. Transcribed verbatim from MDE's own Citizenship and Government Strand Learning Progression (see the file header for the provenance and implementation notes). Benchmarks are coded grade-band.strand.anchor.benchmark — e.g. 9.1.4.7 is the high-school grade band, Citizenship and Government strand (1), Anchor Standard Four (Governmental Institutions and Processes), benchmark 7.",
      standards: [
        // — Anchor Standard Four: Governmental Institutions and Processes (the flagship's home + the federal ladder) —
        {
          code: "9.1.4.7",
          text: "Explain the powers and operations of the State of Minnesota government as defined in its constitution and its relationship with the federal government and Tribal governments.",
          claimIds: [
            "civics.mn-state-structure",
            "civics.mn-courts",
            "civics.mn-lawmaking",
            "civics.mn-dfl-nonpartisan",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "This is the flagship's primary home: Minnesota's own state structure (the 1858 Constitution, the plural executive, the 134-member House and 67-member Senate, the nonpartisan-ballot judiciary, and the 60-year nonpartisan-Legislature era) is taught in depth, and its relationship with the federal government is carried by the general federalism course. The standard also names Tribal governments, which the course does not cover — hence partial.",
        },
        {
          code: "9.1.4.8",
          text: "Explain the powers and operations of local government in Minnesota.",
          claimIds: ["civics.mn-local-government", "civics.local-government-layers"],
          coverage: "full",
          note: "Minnesota's own local government — 87 counties, active rural townships alongside home-rule cities, school and special districts, and the Twin Cities' Metropolitan Council — is taught directly, with the general local-government course carrying what local government handles and why it varies.",
        },
        {
          code: "9.1.4.1",
          text: "Evaluate federalism and the provisions of the U.S. Constitution, which delegate to the federal government the powers necessary to fulfill the purposes for which it was established. Distinguish between those powers and the powers retained by the people and the states.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.separation-checks-balances",
          ],
          coverage: "full",
          note: "Taught through the enumerated/implied/reserved/concurrent powers taxonomy (with McCulloch v. Maryland) and the federalism course's account of why power is split between the levels.",
        },
        {
          code: "9.1.4.2",
          text: "Analyze the purposes, organization, functions and processes of the legislative branch as enumerated in Article 1 of the U.S. Constitution.",
          claimIds: ["civics.federal-articles-i-iii", "civics.federal-bill-process"],
          coverage: "full",
          note: "Article I's structure and enumerated powers, and how a bill becomes a federal law, are taught end to end.",
        },
        {
          code: "9.1.4.3",
          text: "Analyze the purposes, organization, functions and processes of the executive branch as enumerated in Article 2 of the U.S. Constitution.",
          claimIds: ["civics.federal-articles-i-iii", "civics.three-branches-federal"],
          coverage: "full",
        },
        {
          code: "9.1.4.4",
          text: "Analyze the purposes, organization, functions and processes of the judicial branch as enumerated in Article 3 of the U.S. Constitution.",
          claimIds: [
            "civics.federal-articles-i-iii",
            "civics.federal-judiciary-structure",
            "civics.judicial-review-marbury",
          ],
          coverage: "full",
          note: "Article III's judiciary, the federal court structure, and judicial review through Marbury v. Madison are each taught by name. (The source prints this code as \"9.1.4.4.\" with a stray trailing period; the code is 9.1.4.4.)",
        },
        {
          code: "9.1.4.5",
          text: "Analyze how the United States political system is shaped by elections and the election process and procedures involved in voting.",
          claimIds: ["civics.mn-elections", "civics.election-mechanics", "civics.electoral-college"],
          coverage: "full",
          note: "The general elections course teaches registration, primaries, voting methods, counting, and the Electoral College; Minnesota's own election rules (same-day registration, absentee/early voting, county/city administration) are taught beside them.",
        },
        // — Anchor Standard One: Civic Skills (participation + the media/source-literacy method) —
        {
          code: "9.1.1.2",
          text: "Demonstrate the skills necessary to participate in the election process and evaluate how access to voting is impacted by law and application of law.",
          claimIds: [
            "civics.mn-turnout-registration",
            "civics.mn-elections",
            "civics.voter-registration",
            "civics.election-mechanics",
          ],
          coverage: "full",
          note: "A direct home for the flagship: Minnesota's Election-Day (same-day) registration is exactly \"how access to voting is impacted by law,\" and the general elections course teaches the participation skills (registering, voting methods, verifying your own rules).",
        },
        {
          code: "9.1.1.1",
          text: "Demonstrate civic skills that enable people to be informed on current issues in order to monitor and influence state, local tribal, national or international affairs.",
          claimIds: ["civics.mn-get-involved", "civics.show-up-every-level", "civics.track-a-bill"],
          coverage: "full",
          note: "Taught as practice — showing up where an issue is decided, tracking a live bill, and Minnesota's own levers (precinct caucuses, county boards, the Metropolitan Council, contacting St. Paul legislators).",
        },
        {
          code: "9.1.1.3",
          text: "Curate and evaluate various sources of information and forms of political persuasion, including digital, for validity, accuracy, ideology, emotional appeals, bias and prejudice.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.reading-ads-for-omission",
            "bvc.media-fallacies-recurring",
            "bvc.evaluate-claims-fallacies",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Reading each source and message for validity, bias, emotional appeal, and logical fallacy — the standard's exact skill — is the media-literacy method run across the catalog: ads, labels, and campaign language read for what they leave out.",
        },
        // — Anchor Standard Three: Rights and Responsibilities —
        {
          code: "9.1.3.6",
          text: "Explain the responsibilities and duties for all individuals in a republic.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service", "civics.voter-registration"],
          coverage: "full",
          note: "The responsibilities of citizenship are taught by name, and two of them — jury service and registering to vote — are taught as practiced duties (jury service is an entire course).",
        },
        {
          code: "9.1.3.7",
          text: "Explain how citizenship processes, requirements and duties are established by law. Evaluate the struggle for citizenship since the founding period.",
          claimIds: ["civics.us-citizenship-law", "civics.citizenship-responsibilities"],
          coverage: "partial",
          note: "The legal meaning of citizenship — the 14th Amendment, birthright, and naturalization eligibility and process — and the duties of citizenship are taught end to end; the standard's historical half (\"the struggle for citizenship since the founding period\") is lighter, so this is partial.",
        },
        {
          code: "9.1.3.1",
          text: "Compare rights in the U.S. Constitution and the Bill of Rights and subsequent amendments, the rights in the Constitution of the State of Minnesota, and the Universal Declaration of Human Rights.",
          claimIds: [
            "civics.bill-of-rights-origin",
            "civics.bill-of-rights-overview",
            "civics.article-v-amendment",
            "rights.landmark-cases",
          ],
          coverage: "partial",
          note: "The U.S. Bill of Rights, the later amendments (via Article V), and the landmark rights cases are taught by name; the two comparison anchors the standard adds — the Minnesota Constitution's own rights and the Universal Declaration of Human Rights — are not specifically taught, so this is partial.",
        },
        {
          code: "9.1.3.2",
          text: "Explain the scope and limits of rights protected by the First and Second Amendments. Explain changes created by legislative action and court interpretation.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights", "rights.scotus-precedent"],
          coverage: "partial",
          note: "The First Amendment is taught thoroughly — speech, religion, press, and assembly, with the landmark cases, the limits government may place on them, and how precedent changes them over time. The Second Amendment is not covered, so this is partial.",
        },
        {
          code: "9.1.3.3",
          text: "Explain the scope and limits of rights of the accused pretrial under the Fourth and Fifth Amendments. Explain changes created by legislative action and court interpretation.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "The Fourth Amendment is taught directly — searches, stops, reasonable suspicion, and digital privacy through Mapp, Terry, T.L.O., Riley, and Carpenter — with its limits. The Fifth Amendment's pretrial protections are not covered, so this is partial.",
        },
        // — Anchor Standard Five: Public Policy (the research-and-act project) —
        {
          code: "9.1.5.3",
          text: "Examine a public policy issue by defining the problem, developing alternative courses of action, evaluating the consequences of each alternative, selecting a course of action, and designing a plan to implement the action and resolve the problem.",
          claimIds: [
            "civics.track-a-bill",
            "bvc.coffee-project-research-process",
            "bvc.coffee-project-synthesis",
          ],
          coverage: "partial",
          note: "The full define-alternatives-select-and-plan cycle ships as a graded product only in the Coffee episode, whose topic is a commodity rather than a public-policy issue; tracking a live bill applies research to a policy issue but no single graded public-policy action product ships, so this is partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — Minnesota's OWN standards (NOT the Common Core): nothing claimed.",
      body: "Minnesota is one of the few states that did NOT adopt the Common Core for mathematics; it kept its own Minnesota Academic Standards in Mathematics. Either way, this catalog does no mathematics instruction, so it meets no Minnesota mathematics benchmark.",
    },
    {
      heading: "English/Language Arts — Common Core adopted in 2010, since REPLACED by Minnesota's own 2020 standards: deferred.",
      body: "Minnesota adopted the Common Core State Standards for English language arts in their entirety in 2010 (adopted into rule in 2011, implemented 2012-13) — a genuine Common Core ELA state. Since then Minnesota has REPLACED them with its own 2020 Minnesota Academic Standards in English Language Arts (adopted 2023, fully implemented 2025-26), which re-home literacy as \"disciplinary literacies\" including a discrete \"Literacy in History/Social Studies\" section for grades 6-12. Because the CURRENT Minnesota ELA standards are no longer a verbatim republication of the Common Core, we do NOT alias the shared Common Core ELA framework here — that would cite superseded standards. The catalog's ELA-literacy strengths (evaluating an author's point of view and evidence, analyzing rhetoric, sustained research with citation) would map to Minnesota's 2020 \"Literacy in History/Social Studies\" standards, but transcribing and verifying those verbatim is deferred this pass. Note: the media/source-evaluation skill is already claimed, as a full alignment, through the Citizenship and Government benchmark 9.1.1.3.",
    },
    {
      heading: "Science — Minnesota's OWN 2019 standards (NGSS-influenced, not the NGSS): deferred.",
      body: "Minnesota adopted its own 2019 Minnesota Academic Standards in Science, which are influenced by but are NOT a verbatim adoption of the Next Generation Science Standards, so the shared NGSS mapping this catalog uses in NGSS states does not apply in Minnesota. The catalog's climate/resource content (resources, hazards, and climate shaping human activity) would find an analog in Minnesota's Earth/environmental science benchmarks, but this pass mapped only the Citizenship and Government strand; Minnesota's science benchmarks are deferred (verbatim-or-nothing), not claimed unverified.",
    },
    {
      heading: "Tribal Nations (Anchor Standard Six, and the Tribal clauses of 9.1.4.7).",
      body: "Minnesota's Citizenship and Government strand has an entire Tribal Nations anchor standard (9.1.6.1-9.1.6.4) and threads Tribal governments through 9.1.4.7. Minnesota Civics teaches Minnesota's state and local structure but not the governments of Minnesota's eleven Tribal Nations, so 9.1.4.7 is claimed as partial and the Anchor Standard Six benchmarks are not claimed. The gap is in the course, not the standards.",
    },
    {
      heading: "Minnesota's DFL and nonpartisan-Legislature distinctives lack a discrete party benchmark.",
      body: "The flagship teaches the Democratic-Farmer-Labor Party and the 60-year (1913-1973) nonpartisan Legislature as headline Minnesota features. The Citizenship and Government strand's closest benchmark is 9.1.5.1 (the impact of political parties on elections and public policy), which the course does not otherwise satisfy, so those specifics are claimed only through 9.1.4.7 (the powers and operations of Minnesota government) rather than as a parties standard of their own. The high-turnout / same-day-registration signature IS claimed squarely, through 9.1.1.2 (how access to voting is impacted by law).",
    },
    {
      heading: "The founding-philosophy, rights-of-the-accused-at-trial, budget, foreign-policy, and public-opinion benchmarks we checked and rejected.",
      body: "9.1.2.1 (the founding-era natural-rights and social-contract philosophy as a named unit), 9.1.2.2 (the significance of democratic values to processes/elections as an abstraction), 9.1.2.3 (the individual-rights vs. general-welfare, majority vs. minority, and liberty vs. equality tensions), 9.1.3.4 (the rights of the accused at trial under the Sixth and Eighth Amendments), 9.1.3.5 (due process and equal protection under the 14th Amendment as civil-rights jurisprudence), 9.1.4.6 (the purposes, types and sources of laws and rules as a taxonomy), 9.1.4.9 (comparing the U.S. and Minnesota budgets), 9.1.4.10 / 9.1.4.11 (influencing U.S. foreign policy and the role of international law), and 9.1.5.1 / 9.1.5.2 (political parties, interest groups, media, and public opinion shaping public policy) — the courses do not genuinely teach these, or teach them too thinly to claim, so we do not claim them.",
    },
  ],
};
