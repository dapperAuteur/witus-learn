// ─────────────────────────────────────────────────────────────────────────────
// CONNECTICUT — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ct` was written FROM Connecticut's own official sources (cga.ct.gov,
// portal.ct.gov/sots, jud.ct.gov, and the Constitution of 1965), so Connecticut's civics
// flagship gets its 1:1 state-civics course, and this file gives it a genuine home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from the CT SDE's own record:
//   · ELA — INHERITED (verbatim). Connecticut adopted the Common Core State Standards in 2010 and
//     implements them as the "Connecticut Core Standards" (CT Core Standards). Connecticut did NOT
//     renumber the standards — the CT SDE republishes the CCSS themselves under the CCSS codes — so
//     ../shared/common-core-ela is adopted VERBATIM, with NO code aliases (contrast Michigan, which
//     kept the CCSS text but printed the bare RH.11-12.6 form and therefore aliases). We claim only
//     the RH/RI/WHST literacy-in-history/writing-in-history strands this catalog touches, and no
//     mathematics.
//   · Science — INHERITED (verbatim). The Connecticut State Board of Education adopted the Next
//     Generation Science Standards in 2015 as the state's K-12 science standards, using the NGSS
//     codes verbatim. ../shared/ngss is adopted verbatim, no aliases. This is not a science course,
//     so exactly one performance expectation (HS-ESS3-1) is claimed, partially — see the note on it.
//   · Social studies — BESPOKE. Connecticut's Elementary and Secondary Social Studies Frameworks
//     (2015), grounded in the College, Career, and Civic Life (C3) Framework's inquiry arc, publish
//     a High School "Civics and Government" course. Its Civics (CIV 9–12) dimension is Connecticut's
//     own, and — unlike the abstract-concept states — CIV 9–12.1 names "local, state, tribal,
//     national, and international" institutions explicitly, so the flagship's Connecticut-structure
//     lessons (abolished counties, the town as the local workhorse, legislative appointment of
//     judges) have a genuine home, mapped there.
//
// Provenance: the High School Civics and Government CIV 9–12 standards were transcribed VERBATIM
// from the CT SDE-published "Connecticut Elementary and Secondary Social Studies Frameworks" PDF
// (portal.ct.gov/-/media/sde/social-studies/ssframeworks.pdf), the HIGH SCHOOL — CIVICS AND
// GOVERNMENT section, Dimension 2, the CIVICS block (framework pp. 107–108), fetched 2026-07-18.
// The PDF renders as clean, directly extractable text (no subset-font decode was needed). Codes are
// cited exactly as printed, including the document's en-dash grade band ("CIV 9–12.1"). The un-coded
// Dimension-1 "Themes / Content" bullets and the interdisciplinary HIST/ECO/GEO standards embedded
// in the Civics course are NOT coded civics standards for our purpose and are deferred (see
// notClaimed). NOTE: Connecticut adopted NEW K-12 Social Studies Standards in October 2023; this
// pass maps the 2015 C3 Frameworks (the document that carries the discrete HS Civics and Government
// course), and the 2023 standards are flagged in notClaimed as a separate future re-map.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const CT_SS = "https://portal.ct.gov/-/media/sde/social-studies/ssframeworks.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "CT",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "Connecticut adopted the Common Core State Standards for English language arts and mathematics in 2010 and implements them as the Connecticut Core Standards (CT Core Standards). Connecticut did not renumber the standards — the CT SDE republishes the CCSS under the CCSS codes — so this framework is adopted verbatim with no aliases. The literacy-in-history/social-studies (RH), informational-reading (RI), and writing-in-history (WHST) grade 11-12 strands are the ones this catalog touches. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "The Connecticut State Board of Education adopted the Next Generation Science Standards in 2015 as the state's K-12 science standards, using the NGSS codes verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── High School Civics and Government (CT Social Studies Frameworks, 2015 · C3) ──
    {
      id: "ct-civics",
      subject: "Social Studies",
      name: "Connecticut Elementary and Secondary Social Studies Frameworks — High School Civics and Government (CIV 9–12)",
      publisher: "Connecticut State Department of Education (CT SDE)",
      version:
        "Connecticut Elementary and Secondary Social Studies Frameworks, 2015 (C3-based) · High School Civics and Government course, Civics dimension",
      fetchedOn: "2026-07-18",
      sourceUrl: CT_SS,
      adoption:
        "Connecticut's High School Civics and Government course is the anchor for the Connecticut Civics flagship. Built on the C3 inquiry arc, its lead standard CIV 9–12.1 names local, state, tribal, national, and international institutions explicitly, so — unlike states whose civics standards are purely federal-and-abstract — Connecticut's own structure (its abolished counties, its town-based local layer, its legislative appointment of judges) has a genuine home, mapped there. Transcribed verbatim from the CT SDE Frameworks PDF (see the file header for the provenance note). Codes are cited as printed: CIV <grade band>.<indicator> (e.g. CIV 9–12.1).",
      standards: [
        // — Civic and Political Institutions (the flagship's home + the general federal ladder) —
        {
          code: "CIV 9–12.1",
          text: "Distinguish the powers and responsibilities of local, state, tribal, national, and international civic and political institutions.",
          claimIds: [
            "civics.ct-executive-legislature",
            "civics.ct-towns",
            "civics.ct-no-counties",
            "civics.local-government-layers",
            "civics.federalism-why-split-power",
            "civics.separation-checks-balances",
          ],
          coverage: "partial",
          note: "This is the flagship's primary home: Connecticut's own institutions — the plural executive and General Assembly, and the town as the workhorse of local government in a state with NO county governments — are taught in depth, and the local/state/national distribution and limiting of power is carried by the general civics catalog. The standard also names TRIBAL and INTERNATIONAL institutions, which the course does not cover — hence partial.",
        },
        {
          code: "CIV 9–12.4",
          text: "Explain how the U.S. Constitution establishes a system of government that has powers, responsibilities, and limits that have changed over time and that are still contested.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
          ],
          coverage: "full",
          note: "The Constitution's system — its enumerated powers, its limits (separation of powers, checks and balances, federalism), and how those have changed and remain contested — is taught article by article.",
        },
        {
          code: "CIV 9–12.3",
          text: "Analyze the impact of constitutions, laws, treaties, and international agreements on the maintenance of national and international order.",
          claimIds: ["civics.ct-constitution-state", "civics.constitution-article-by-article"],
          coverage: "partial",
          note: "Constitutions and laws — Connecticut's own (the Fundamental Orders of 1639 and the Constitution of 1965) and the U.S. Constitution — are analyzed for how they order government. Treaties, international agreements, and the international-order half of the standard are not covered — hence partial.",
        },
        {
          code: "CIV 9–12.2",
          text: "Analyze the role of citizens in the U.S. political system, with attention to various theories of democracy, changes in Americans’ participation over time, and alternative models from other countries, past and present.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.voter-registration",
            "civics.ct-get-involved",
          ],
          coverage: "partial",
          note: "The role of the citizen — the rights and responsibilities of citizenship, and participation as a practiced habit (registering and voting, showing up locally) — is taught. The comparative half (competing theories of democracy and alternative models from other countries) is not — hence partial.",
        },
        // — Processes, Rules, and Laws (lawmaking + judicial selection + civic action) —
        {
          code: "CIV 9–12.11",
          text: "Evaluate multiple procedures for making governmental decisions at the local, state, national, and international levels in terms of the civic purposes achieved.",
          claimIds: [
            "civics.ct-lawmaking-no-initiative",
            "civics.ct-courts-legislative-appointment",
            "civics.federal-bill-process",
          ],
          coverage: "partial",
          note: "Multiple decision-making procedures are taught and compared: Connecticut's own lawmaking through joint committees, its distinctive legislative APPOINTMENT of judges (and its absence of a citizen initiative), and the federal lawmaking process. The international level the standard also names is not covered — hence partial.",
        },
        {
          code: "CIV 9–12.12",
          text: "Analyze how people use and challenge local, state, national, and international laws to address a variety of public issues.",
          claimIds: ["civics.track-a-bill", "civics.show-up-every-level", "civics.ct-get-involved"],
          coverage: "partial",
          note: "Using the law to address public issues is taught as practice — tracking a live bill, showing up at the level where an issue is decided, and Connecticut's own levers (the town meeting, contacting the Hartford legislators). The litigation ('challenge') half and the international level are not the course's focus — hence partial.",
        },
        {
          code: "CIV 9–12.5",
          text: "Evaluate citizens’ and institutions’ effectiveness in addressing social and political problems at the local, state, tribal, national, and/or international level.",
          claimIds: ["civics.ct-get-involved", "civics.show-up-every-level", "civics.track-a-bill"],
          coverage: "partial",
          note: "Citizen effectiveness at the local and state level — showing up where decisions are made and tracking a bill — is taught as practice. A systematic evaluation of institutions' effectiveness, and the tribal/national/international levels, are not — hence partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Connecticut Core Standards (Common Core) mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Connecticut adopted the NGSS in 2015 as its K-12 science standards, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry itself. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Connecticut's own state structure is taught more fully than any one code captures.",
      body: "Connecticut Civics teaches the Fundamental Orders of 1639 and the Constitution of 1965, the 1960 ABOLITION of county government (a two-tier state-plus-169-towns system found in only a couple of states), the legislative APPOINTMENT of judges (a Judicial Selection Commission screens, the Governor nominates, the General Assembly appoints to 8-year terms), the absence of a statewide citizen initiative, and the recent rollout of early in-person voting (2024) and no-excuse absentee voting — all from Connecticut's own sources. CIV 9–12.1 (powers of local/state institutions) hosts most of the structure, but the Frameworks are C3 CONCEPT standards, not a Connecticut-government checklist, so none of these distinctive Connecticut facts has a code of its own.",
    },
    {
      heading: "The Civics standards we checked and rejected.",
      body: "CIV 9–12.6 (critique relationships among governments, civil societies, and economic markets), CIV 9–12.7 (apply civic virtues when working with others), CIV 9–12.8 (evaluate systems that promote civic virtues in different contexts, times, and places), CIV 9–12.9 (use appropriate deliberative processes in multiple settings), CIV 9–12.10 (the roles of personal interests and perspectives on civic virtues, democratic principles, constitutional rights, and human rights), CIV 9–12.13 (evaluate public policies for intended and unintended outcomes), and CIV 9–12.14 (analyze historical, contemporary, and emerging means of changing societies and protecting rights) — the courses either do not genuinely teach these or teach them too thinly to claim, so we do not claim them.",
    },
    {
      heading: "Connecticut's Dimension-1 inquiry standards and the interdisciplinary HIST/ECO/GEO standards.",
      body: "The Frameworks organize each course into the C3 inquiry arc. Dimension 1 (the inquiry skills — developing questions, evaluating sources, communicating conclusions, taking informed action) and the HISTORY, ECONOMICS, and GEOGRAPHY disciplinary standards that appear inside the High School Civics and Government course (HIST 9–12.x, ECO 9–12.x, GEO 9–12.x) are not the civics-content standards we mapped this pass. The catalog's source-literacy method and its commodity history/economics WOULD map to some of them, as they do in other states, but we mapped the CIVICS (CIV 9–12) dimension and defer the rest rather than over-claim.",
    },
    {
      heading: "Connecticut's 2023 Social Studies Standards — a future re-map.",
      body: "Connecticut adopted new K-12 Social Studies Standards in October 2023 (a distinct document from the 2015 C3 Frameworks mapped here). This pass cites the 2015 Frameworks, which carry the discrete High School Civics and Government course; the 2023 standards are queued for a separate verbatim re-map. As the finder always advises, confirm against your jurisdiction's current requirements.",
    },
  ],
};
