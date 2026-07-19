// ─────────────────────────────────────────────────────────────────────────────
// OREGON — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-or` was written FROM Oregon's own official sources (oregonlegislature.gov,
// sos.oregon.gov, courts.oregon.gov, and the Oregon Constitution of 1859), so Oregon's civics
// flagship gets its 1:1 state-civics course, and this file gives it a genuine home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from ODE's own record:
//   · Social studies (High School Civics) — BESPOKE. Oregon publishes its own Social Science
//     Standards (there is no Common Core social-studies component). We mapped the 2024 Oregon
//     Social Science Standards, the State Board Adopted revision of the 2018 and 2021 (ethnic-
//     studies-integrated) standards, and the CURRENT version. Its High School Civics strand's
//     Political Institutions (HS.C.PI.3 "institutions, functions, and processes of government")
//     and Identity/Roles/Responsibilities (HS.C.IR.8 "the central ideas of the government of the
//     United States and Oregon") indicators name Oregon's OWN government explicitly, so the
//     flagship's Oregon-structure lessons (the Oregon System, vote-by-mail, no Lieutenant Governor,
//     the 30/60 Legislature, nonpartisan judges, land-use planning) have a genuine home. NOTE on
//     version: the task framed this as the 2018/2021 standards; we mapped the 2024 State Board
//     Adopted revision instead because it is the current adopted version and extracts cleanly and
//     verbatim (authoritative-values rule) — the "bespoke Oregon Social Sciences, HS Civics"
//     substance is unchanged.
//   · ELA — INHERITED but BESPOKE-CODED (not a clean shared alias). Oregon adopted the Common Core
//     State Standards for ELA in October 2010 and kept them through its June 2019 revision, the
//     "Oregon Standards for Literacy in History/Social Studies." We fetched Oregon's own grades
//     11-12 document and compared the RH/WHST standards we cite: 11-12.RH.8, 11-12.RH.9,
//     11-12.WHST.7, and 11-12.WHST.8 are WORD-FOR-WORD the CCSS text, but 11-12.RH.6 carries
//     Oregon's "*" revision marker and its wording differs ("differing PERSPECTIVES" where the
//     CCSS says "differing points of view"). Because Oregon revised RH.6 and prints all codes in a
//     grade-band-first form (11-12.RH.8), the shared ../shared/common-core-ela adoption (which is
//     all-or-nothing on its standard set and would render RH.6 with the unrevised CCSS text) does
//     NOT fit; we map Oregon's literacy standards as a BESPOKE framework quoting Oregon's document
//     verbatim (the four unrevised codes read identically to the CCSS, RH.6 reads as Oregon revised it).
//   · Science — INHERITED (verbatim text, ALIASED code). Oregon was an NGSS lead state and the State
//     Board of Education adopted the NGSS as Oregon's K-12 Science Standards (2014, re-adopted 2022).
//     We fetched Oregon's 2022 K-12 Science Standards and confirmed the Earth-and-Human-Activity
//     performance expectation is word-for-word the NGSS text, but Oregon prints the code with dots
//     (HS.ESS3.1) rather than the canonical NGSS hyphens (HS-ESS3-1), so ../shared/ngss is adopted
//     with a single code alias (HS-ESS3-1 -> HS.ESS3.1) and its verbatim text.
//   · Mathematics — nothing (the catalog does no mathematics instruction; Oregon's math is Common Core).
//
// Provenance: the High School Civics standards (HS.C.PI.* … HS.C.CE.*) were transcribed VERBATIM
// from the ODE-published "2024 Oregon Social Science Standards - FINAL" PDF (oregon.gov, State Board
// Adopted, last updated June 7, 2024), the "Civics (HS.C)" section (document pp. 70-73), fetched
// 2026-07-19. The grades 11-12 literacy standards were transcribed verbatim from the ODE "Oregon
// Standards for Literacy in History/Social Studies — Grades 11-12" PDF (June 2019). Both PDFs render
// as clean, directly extractable text (no subset-font decode was needed). Only the coded standard
// STATEMENT is cited; the "Examples include, but not limited to" bullet lists that follow each civics
// standard are the document's clarifying examples, not the standard, and are not quoted.
// ─────────────────────────────────────────────────────────────────────────────

import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const OR_SS =
  "https://www.oregon.gov/ode/educator-resources/standards/socialsciences/Documents/Final2024SocialScienceStandardsACCESSIBLE.pdf";
const OR_ELA =
  "https://www.oregon.gov/ode/educator-resources/standards/ELA/Documents/Grades%2011-12%20History%20and%20Social%20Studies%20-%20FINAL.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "OR",
  adoptions: [
    {
      framework: NGSS,
      // Oregon prints the NGSS performance expectations with dot-delimited codes (HS.ESS3.1); the
      // text is verbatim NGSS, so the one shared code is aliased to Oregon's printed form.
      aliases: { "HS-ESS3-1": "HS.ESS3.1" },
      adoption:
        "Oregon was an NGSS lead state and the State Board of Education adopted the Next Generation Science Standards as Oregon's K-12 Science Standards (2014, re-adopted 2022). Oregon's 2022 K-12 Science Standards print the performance expectations with dot-delimited codes (HS.ESS3.1) but the text is word-for-word the NGSS, so the shared NGSS code is aliased to Oregon's printed form. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── High School Civics (2024 Oregon Social Science Standards) ──
    {
      id: "or-civics",
      subject: "Social Studies",
      name: "2024 Oregon Social Science Standards — High School Civics (HS.C)",
      publisher: "Oregon Department of Education (ODE) / State Board of Education",
      version: "2024 Oregon Social Science Standards (State Board Adopted, June 7, 2024) · High School Civics",
      fetchedOn: "2026-07-19",
      sourceUrl: OR_SS,
      adoption:
        "Oregon's High School Civics standards are the anchor for the Oregon Civics flagship. The Oregon Social Science Standards are Oregon's own (there is no Common Core social-studies component); we mapped the 2024 State Board Adopted revision, the current version. Its Political Institutions (HS.C.PI) and Identity/Roles/Responsibilities (HS.C.IR) concepts name the government of Oregon explicitly (HS.C.PI.3, HS.C.IR.8), giving the flagship's Oregon-structure lessons a home, and its Democratic Principles (HS.C.DP) and Civic Engagement (HS.C.CE) concepts carry voting and civic participation. Transcribed verbatim from the ODE 2024 standards (see the file header for the provenance and version note). Codes are cited as HS.C.<concept>.<n> exactly as printed.",
      standards: [
        // — Political Institutions (C.PI) —
        {
          code: "HS.C.PI.2",
          text: "Compare and contrast the United States republican form of government to direct democracy, theocracy, oligarchy, authoritarianism, and monarchy.",
          claimIds: ["civics.or-oregon-system", "civics.or-lawmaking-walkout"],
          coverage: "partial",
          note: "The contrast the flagship makes squarely — a representative (republican) legislature versus DIRECT democracy, the citizen initiative and referendum Oregon invented — is taught in depth. The standard's other comparisons (theocracy, oligarchy, authoritarianism, monarchy) are not the course's focus, so this is partial.",
        },
        {
          code: "HS.C.PI.3",
          text: "Examine and compare institutions, functions, and processes of government.",
          claimIds: [
            "civics.or-executive-legislature",
            "civics.or-courts-local",
            "civics.or-lawmaking-walkout",
            "civics.local-government-layers",
            "civics.three-branches-federal",
          ],
          coverage: "partial",
          note: "This is a primary home for the flagship: Oregon's own institutions, functions, and processes — the plural executive with no Lieutenant Governor, the 30/60 Legislative Assembly and how it makes law, the nonpartisan judiciary, and county/city/special-district local government — are taught in depth, alongside the federal three branches. The standard's examples also include TRIBAL government, which the course does not cover, so this is partial.",
        },
        {
          code: "HS.C.PI.5",
          text: "Explore and explain the historical evolution of the debate over the role, function, and size of the federal branches of government.",
          claimIds: [
            "civics.federal-powers-taxonomy",
            "civics.federalism-why-split-power",
            "civics.separation-checks-balances",
          ],
          coverage: "partial",
          note: "The substance of the debate — the enumerated/implied/reserved powers taxonomy, the Necessary and Proper Clause, federalism, and separation of powers with checks and balances — is taught. The standard's fuller ask, the HISTORICAL EVOLUTION of that debate over time, is broader than the catalog delivers, so this is partial.",
        },
        {
          code: "HS.C.PI.6",
          text: "Analyze and evaluate a landmark United States Supreme Court case addressing principles of federalism.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.judicial-review-marbury"],
          coverage: "full",
          note: "Taught directly through McCulloch v. Maryland (1819), the landmark federalism case on implied powers and supremacy, and Marbury v. Madison for the Court's power of judicial review.",
        },
        {
          code: "HS.C.PI.7",
          text: "Compare core documents associated with the protection of individual rights.",
          claimIds: ["civics.bill-of-rights-overview", "civics.bill-of-rights-origin", "rights.limits-on-rights"],
          coverage: "partial",
          note: "The U.S. Bill of Rights — its origin, what it protects, and the limits courts have placed on those rights — is taught directly. The standard's other named documents (the 14th Amendment, Article I of the Oregon Constitution, Title VI/IX, and the international human-rights covenants) are not all covered, so this is partial.",
        },
        // — Identity, Roles, and Responsibilities (C.IR) —
        {
          code: "HS.C.IR.8",
          text: "Using primary sources from multiple perspectives, discuss and debate the central ideas of the government of the United States and Oregon.",
          claimIds: [
            "civics.or-oregon-system",
            "civics.constitution-article-by-article",
            "civics.federalism-why-split-power",
            "civics.separation-checks-balances",
          ],
          coverage: "partial",
          note: "The central ideas the standard names — popular sovereignty (Oregon's direct democracy), constitutionalism, republicanism, federalism, and individual rights — are taught for both the United States and Oregon. The standard's tribal-sovereignty idea and its primary-source discuss-and-debate exercise are not fully delivered, so this is partial.",
        },
        {
          code: "HS.C.IR.9",
          text: "Describe the civic behaviors that promote and strengthen a pluralistic democracy.",
          claimIds: [
            "civics.or-get-involved",
            "civics.citizenship-responsibilities",
            "civics.show-up-every-level",
            "civics.run-for-office",
          ],
          coverage: "full",
          note: "The civic behaviors the standard lists — voting, joining an organization and participating in the community, holding public office, and volunteering — are taught end to end and in Oregon's own terms (vote-by-mail, reading ballot measures, showing up at local boards, and running for office).",
        },
        // — Democratic Principles (C.DP) —
        {
          code: "HS.C.DP.13",
          text: "Argue and defend positions on contemporary issues in which foundational ideas or values are in tension.",
          claimIds: ["civics.electoral-college", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Two of the standard's own tensions are taught directly: the popular vote versus the Electoral College (its mechanics and original purpose), and majority rule versus individual rights (the limits the Constitution places on rights). The standard's argue-and-defend exercise across the full list of tensions is prompted more than run as a graded task, so this is partial.",
        },
        {
          code: "HS.C.DP.16",
          text: "Identify the requirements and process for voting.",
          claimIds: ["civics.or-vote-by-mail", "civics.voter-registration", "civics.election-mechanics"],
          coverage: "full",
          note: "The requirements and process for voting — citizenship, age, and residency; registration; mail and in-person ballots; and counting and certification — are taught directly, including Oregon's own all-mail ballots and automatic (Motor Voter) registration.",
        },
        // — Civic Engagement (C.CE) —
        {
          code: "HS.C.CE.17",
          text: "Explain how active citizens and political or social movements can affect the lawmaking process locally, nationally, and internationally.",
          claimIds: [
            "civics.or-lawmaking-walkout",
            "civics.track-a-bill",
            "civics.show-up-every-level",
            "civics.or-get-involved",
          ],
          coverage: "partial",
          note: "Affecting lawmaking locally and nationally is taught as practice — tracking a live bill, showing up where an issue is decided, and, in Oregon, citizens directly making law through the initiative and referendum. The standard's 'internationally' reach is not covered, so this is partial.",
        },
        {
          code: "HS.C.CE.18",
          text: "Identify and assess the planning and methods groups facing discrimination used to achieve access to voting, as well as expansion of rights and liberties from 1865 to the present.",
          claimIds: [
            "history.labor-civil-rights",
            "history.migration-civil-rights-politics",
            "history.gilded-age-labor",
          ],
          coverage: "partial",
          note: "Two of the movements the standard names — the labor movement and the civil-rights movement, from Reconstruction to the present — are taught in depth (the Gilded-Age unions, the labor-and-civil-rights alliance, and the Great Migration's civil-rights politics). The standard's full 1865-to-present range across every named group is broader than the catalog, so this is partial.",
        },
      ],
    },
    // ── Grades 11-12 Literacy in History/Social Studies (Common Core, Oregon 2019) ──
    {
      id: "or-ela-literacy",
      subject: "English/Language Arts",
      name: "Oregon Standards for Literacy in History/Social Studies — Grades 11-12 (RH/WHST)",
      publisher: "Oregon Department of Education (ODE)",
      version: "Oregon Standards for English Language Arts and Literacy, June 2019 · Grades 11-12 History/Social Studies",
      fetchedOn: "2026-07-19",
      sourceUrl: OR_ELA,
      adoption:
        "Oregon adopted the Common Core State Standards for ELA in October 2010 and kept them through its June 2019 revision, the Oregon Standards for Literacy in History/Social Studies. Oregon prints the codes grade-band-first (11-12.RH.8) and marks any change from the original CCSS with an asterisk. We transcribed Oregon's grades 11-12 document verbatim: 11-12.RH.8, 11-12.RH.9, 11-12.WHST.7, and 11-12.WHST.8 read word-for-word as the CCSS, and 11-12.RH.6 carries Oregon's asterisk revision (Oregon writes 'differing perspectives' where the CCSS wrote 'differing points of view'). We claim no mathematics standards.",
      standards: [
        {
          code: "11-12.RH.6",
          text: "Evaluate authors' differing perspectives on the same historical event or issue by assessing the authors' claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "The strongest single literacy alignment: Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, teaching the student to assess each author's claims and evidence. (Oregon revised this standard from the CCSS 'differing points of view' to 'differing perspectives'; the text above is Oregon's.)",
        },
        {
          code: "11-12.RH.8",
          text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
        },
        {
          code: "11-12.RH.9",
          text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
        },
        {
          code: "11-12.WHST.7",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded research assignment. Where it runs, it meets this standard squarely.",
        },
        {
          code: "11-12.WHST.8",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "Partial, same reason as 11-12.WHST.7.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Oregon (Common Core) mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Oregon was an NGSS lead state and adopted the NGSS as its K-12 Science Standards (2014, re-adopted 2022), so our one honest science claim — HS.ESS3.1 (the NGSS HS-ESS3-1, aliased to Oregon's dot-delimited code), partial — comes through the shared NGSS mapping with the limit stated on the entry (verified against Oregon's 2022 K-12 Science Standards). There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Oregon's own state structure is taught more fully than HS.C.PI.3 / HS.C.IR.8 capture.",
      body: "Those two indicators name Oregon's own government and are the flagship's home, but Oregon's most distinctive facts — the Oregon System (the citizen initiative and referendum Oregon invented in 1902), all-mail voting and automatic 'Motor Voter' registration (national firsts), the ABSENCE of a Lieutenant Governor (the Secretary of State succeeds the Governor), the two-thirds-quorum legislative WALKOUT, the nonpartisan judiciary, and the SB 100 statewide land-use planning system with urban growth boundaries — are folded into those indicators rather than each having a code of its own.",
    },
    {
      heading: "The founding-philosophy, tribal, political-media, and foreign-policy Civics indicators we checked and rejected.",
      body: "HS.C.PI.1 (early governments — Athenian democracy, Roman republicanism, Enlightenment ideals, the Haudenosaunee Confederacy — influential on U.S. structure), HS.C.PI.4 (the government-to-government relationship between Oregon and the nine federally recognized tribal governments), HS.C.IR.10 (how political parties, interest groups, corporations, and mass media influence beliefs and policy — our media literacy is consumer/source literacy, not political-media analysis), and HS.C.IR.11 (the branches and agencies responsible for U.S. foreign policy) — the courses do not genuinely teach these, so we do not claim them.",
    },
    {
      heading: "The equity/discrimination Democratic-Principles indicators we checked and rejected.",
      body: "HS.C.DP.12 (efforts by traditionally underrepresented groups' organizations — NOW, the Black Panther Party, La Raza Unida, and others — to narrow the gap between American ideals and reality; the labor and civil-rights movements this catalog DOES teach are claimed under HS.C.CE.18, but the specific organizational roster and framing are not the course's content), HS.C.DP.14 (the existence and perpetuation of contemporary discrimination and inequity across employment, healthcare, environment, and education), and HS.C.DP.15 (the exclusionary language and intent of the Oregon and U.S. Constitutions — including Oregon's own exclusion clauses — and the process for expanding civil rights) — the catalog does not teach these as the standards require, so we do not claim them.",
    },
    {
      heading: "The past-versus-present public-opinion indicator (HS.C.CE.19).",
      body: "HS.C.CE.19 asks students to compare a past public-policy debate with a contemporary one and evaluate the role of political parties, interest groups, social movements, and media in influencing public opinion. The catalog teaches labor and other policy history in depth, but the standard's core — analyzing how parties, interest groups, and media shape PUBLIC OPINION — is political-media analysis the catalog does not deliver, so we do not claim it.",
    },
    {
      heading: "Oregon's other ELA strands, and its other Social Science domains — deferred.",
      body: "We mapped Oregon's grades 11-12 Literacy in History/Social Studies (RH/WHST) standards, which cover the catalog's source-evaluation and research strengths. Oregon's Reading-Informational-Text (RI) and Reading in Science/Technical Subjects (RST) strands live in separate documents and are deferred this pass (verbatim-or-nothing). Likewise, the 2024 Oregon Social Science Standards also carry Geography, Economics, and History domains; the catalog's commodity, colonial, labor, and civil-rights history and its commodity economics WOULD map to those, as in other states, but we mapped the High School Civics strand this pass and defer the rest.",
    },
  ],
};
