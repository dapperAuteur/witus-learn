// ─────────────────────────────────────────────────────────────────────────────
// WISCONSIN — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-wi` was written FROM Wisconsin's own official sources
// (legis.wisconsin.gov, elections.wi.gov, wicourts.gov, and the 1848 Constitution), so
// Wisconsin's civics flagship gets its 1:1 state-civics course, and this file gives it a home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from DPI's own record:
//   · Social studies — BESPOKE. Wisconsin writes its own standards; they are not Common Core.
//     The 2018 Wisconsin Standards for Social Studies (adopted by State Superintendent Tony Evers,
//     May 29, 2018; informed by the NCSS C3 Framework) organize six strands. Its Political Science
//     (PS) strand names Wisconsin's own government explicitly at high school: SS.PS3.c.h ("Evaluate
//     the structure and functions of governments at the local, state, tribal, national, and global
//     levels") is a real home for a state's own structure, while the SS.PS1/PS2 benchmarks carry the
//     founding/rights ladder. The catalog's media/source-literacy method maps VERBATIM to the
//     Inquiry (Inq) and History (Hist) source-analysis indicators (SS.Inq2.b.h, SS.Inq4.b.h,
//     SS.Hist4.d.h) — a purer home than the PS strand's media-in-government clause.
//   · Mathematics — Wisconsin's OWN, and nothing claimed. Wisconsin adopted the Common Core for math
//     in 2010 but has since written its own Wisconsin Standards for Mathematics. Either way this
//     catalog does no mathematics instruction. Published in notClaimed.
//   · English/Language Arts — INHERITED in 2010, SINCE REPLACED, so DEFERRED (not aliased).
//     Wisconsin adopted the Common Core State Standards for ELA in 2010 but has since replaced them
//     with its own Wisconsin Standards for English Language Arts, which are Wisconsin's own. Because
//     the CURRENT Wisconsin ELA standards are no longer a verbatim republication of the Common Core,
//     we do NOT alias ../shared/common-core-ela here (that would cite superseded standards); the
//     catalog's ELA strengths would map to Wisconsin's own ELA literacy standards but are deferred
//     this pass (verbatim-or-nothing). Note: the media/source-evaluation skill is already claimed, as
//     a full alignment, through the social studies Inquiry and History strands. Published in notClaimed.
//   · Science — NGSS-BASED but Wisconsin's OWN reorganization, NOT verbatim NGSS: BESPOKE, DEFERRED.
//     Wisconsin's 2017 Wisconsin Standards for Science are BASED ON the NGSS/the Framework for K-12
//     Science Education but Wisconsin reorganized and re-coded them into its own standards rather than
//     reproducing the NGSS performance expectations (e.g., HS-ESS3-1) verbatim. So the shared
//     ../shared/ngss file (which Michigan, an NGSS-verbatim state, adopts) does NOT apply here — we do
//     NOT alias it. The catalog's climate/resource content would map to Wisconsin's own Earth and
//     Space Science standards, but that is deferred this pass. Published in notClaimed.
//
// Provenance: the high-school (grade band 9-12) performance indicators were transcribed VERBATIM from
// DPI's own "Wisconsin Standards for Social Studies" (May 2018) PDF at the sourceUrl below, fetched
// 2026-07-18. Wisconsin codes are Discipline.ContentArea+Standard.LearningPriority.GradeBand — e.g.
// SS.PS3.c.h is the Social Studies discipline, Political Science strand standard 3, learning priority
// c, high-school grade band (the document states the high-school suffix is "h"). Where a single
// high-school cell prints multiple sentences/indicators, they are one coded performance indicator and
// are transcribed as one verbatim block. The document's curly apostrophe in "claim's" is preserved.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const WI_SS =
  "https://dpi.wi.gov/sites/default/files/imce/standards/New%20pdfs/2018_WI_Social_Studies_Standards.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "WI",
  frameworks: [
    // ── Political Science, Inquiry & History strands (2018 WI Standards for Social Studies, HS) ──
    {
      id: "wi-social-studies",
      subject: "Social Studies",
      name: "Wisconsin Standards for Social Studies (2018) — Political Science, Inquiry & History, High School",
      publisher: "Wisconsin Department of Public Instruction (DPI)",
      version:
        "Wisconsin Standards for Social Studies (May 2018) · Political Science (PS), Inquiry (Inq), and History (Hist) strands, high school (grade band 9-12, code suffix .h)",
      fetchedOn: "2026-07-18",
      sourceUrl: WI_SS,
      adoption:
        "Wisconsin writes its own social studies standards (informed by the NCSS C3 Framework — not Common Core). The 2018 Political Science strand is the anchor for the Wisconsin Civics flagship: SS.PS3.c.h (the structure and functions of governments at local, state, tribal, national, and global levels) is a genuine home for a state's own structure, and the Inquiry and History source-analysis indicators (SS.Inq2.b.h, SS.Inq4.b.h, SS.Hist4.d.h) carry the catalog's media/source-literacy method verbatim. Transcribed verbatim from DPI's own 2018 standards PDF (see the file header for provenance). Codes read Discipline.ContentArea+Standard.LearningPriority.GradeBand, and the high-school grade-band suffix is 'h'.",
      standards: [
        // — SS.PS3: powers and processes of political and civic institutions (the flagship's home) —
        {
          code: "SS.PS3.c.h",
          text: "Evaluate the structure and functions of governments at the local, state, tribal, national, and global levels. Evaluate the purpose of political institutions at the local, state, tribal, national, global, and supranational or non-government organization (NGO) levels distinguishing their roles, powers, and limitations.",
          claimIds: [
            "civics.wi-partial-veto",
            "civics.wi-legislature-courts",
            "civics.wi-lawmaking-recall",
            "civics.wi-local-government",
            "civics.wi-wisconsin-idea",
            "civics.three-branches-federal",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "This is the flagship's primary home: Wisconsin's own structure — the 1848 Constitution, the plural executive and its famous partial veto, the Legislature, the nonpartisan-ballot spring-elected judiciary, the recall, and 72-county/town-village-city local government — is taught in depth, alongside the federal three branches and federalism. The standard also reaches tribal, global, and supranational/NGO levels, which the course does not cover — hence partial.",
        },
        {
          code: "SS.PS3.a.h",
          text: "Create and evaluate solutions to increase voter participation. Evaluate their role in government at the local, state, tribal, and federal levels.",
          claimIds: ["civics.wi-get-involved", "civics.show-up-every-level", "civics.voter-registration"],
          coverage: "partial",
          note: "Evaluating one's own role in government at each level, and Wisconsin's own participation levers, are taught as practice; the standard's designed task of creating and evaluating solutions to increase voter participation is not run as a graded assignment, so this is partial.",
        },
        {
          code: "SS.PS3.b.h",
          text: "Evaluate the role of various types of media in elections and functions of government. Analyze how the United States political system is shaped by political parties, elections and the election process, including the caucus and primary systems and procedures involved in voting. Evaluate civic institutions and explain how competing interests impact societal change (e.g., lobbying, citizens groups, special interest groups).",
          claimIds: ["civics.election-mechanics", "civics.wi-elections"],
          coverage: "partial",
          note: "The election process — registration, primaries and caucuses, voting methods, counting — and Wisconsin's own election rules are taught in full; the standard's political-party, lobbying/interest-group, and media-in-government analysis is not, so this is partial.",
        },
        {
          code: "SS.PS3.d.h",
          text: "Evaluate the effectiveness of public policy actions and processes.",
          claimIds: ["civics.track-a-bill", "bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "A public policy's effectiveness is evaluated where the catalog carries one — the War on Drugs and its foreign-policy arm, and tracking a live bill — but not as a dedicated graded public-policy evaluation, so this is partial.",
        },
        // — SS.PS1: democratic principles and ideals (constitutionalism + founding) —
        {
          code: "SS.PS1.a.h",
          text: "Analyze how constitutionalism attempts to preserve fundamental societal values, protects individual freedoms and rights, promotes the general welfare, and responds to changing circumstances and beliefs by defining and limiting the powers of government. Analyze sources of governmental authority.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.preamble-purposes",
          ],
          coverage: "full",
          note: "Constitutionalism as limited government — separation of powers and checks and balances, the Preamble's purposes (including promoting the general welfare), and popular sovereignty as the source of authority — is taught article by article.",
        },
        {
          code: "SS.PS1.b.h",
          text: "Evaluate the work and actions of historically significant people and their contributions to the founding principles of the United States. Analyze the foundational ideas of United States government that are embedded in founding era documents. Analyze landmark Supreme Court decisions regarding how the Constitution and the Bill of Rights limit the government, protect individual rights, support the principle of majority rule while protecting the rights of the minority, and promotes the general welfare. Analyze the meaning and importance of rights in the Wisconsin Constitution, and compare or contrast to the United States Constitution.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
            "rights.landmark-cases",
            "rights.scotus-precedent",
          ],
          coverage: "partial",
          note: "The foundational ideas in the founding-era documents and the landmark Supreme Court decisions on how the Bill of Rights limits government and protects rights are taught by name; the biographies of 'historically significant people' and the rights in the Wisconsin Constitution (versus the U.S. Constitution) are not, so this is partial.",
        },
        // — SS.PS2: rights, privileges, and responsibilities —
        {
          code: "SS.PS2.a.h",
          text: "Critique the struggle for suffrage and citizenship since the founding period. Analyze the constitutional tension between protecting individual rights and promoting the general welfare and security of the country, as well as between majority rule and minority rights. Assess the impact of individuals, groups, and movements on the development of civil rights for different groups.",
          claimIds: ["rights.limits-on-rights", "rights.landmark-cases", "history.labor-civil-rights"],
          coverage: "partial",
          note: "The constitutional tension between individual rights and the general welfare is taught directly (when government may limit rights), and the history catalog carries the impact of movements on civil rights; a systematic critique of the suffrage-and-citizenship struggle since the founding is not a dedicated unit, so this is partial.",
        },
        {
          code: "SS.PS2.b.h",
          text: "Assess the difference in constitutional and legal protections for citizens vs. noncitizens. Demonstrate the skills necessary to participate in the election process (i.e., registering to vote, identifying and evaluating candidates and issues, and casting a ballot).",
          claimIds: ["civics.voter-registration", "civics.election-mechanics", "civics.us-citizenship-law"],
          coverage: "partial",
          note: "The election-participation skills the standard lists — registering, evaluating candidates and issues, and casting a ballot — are taught in full, and the legal meaning of citizenship is taught; a systematic assessment of the constitutional protections for citizens versus noncitizens is not, so this is partial.",
        },
        // — SS.Inq / SS.Hist: the source/media-literacy method (the catalog's signature) —
        {
          code: "SS.Inq2.b.h",
          text: "Analyze and weigh relevance of a source through a disciplinary lens to determine how the author, context, audience, and purpose affect the reliability, limitations, and usefulness of a source.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.whose-voice-differing-accounts",
            "bvc.reading-ads-for-omission",
            "bvc.evaluate-claims-fallacies",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Weighing a source by its author, context, audience, and purpose — the standard's exact skill — is the source-literacy method run across the catalog: each source and message read for reliability, bias, and omission.",
        },
        {
          code: "SS.Inq4.b.h",
          text: "Examine a claim’s strengths and weaknesses, including an evaluation of supporting evidence, taking into consideration cultural, social, economic, political, geographic, and historic influences that inform these perspectives.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Examining a claim's strengths and weaknesses and evaluating its evidence — including the perspectives that inform it — is taught directly, putting differing accounts of the same events side by side and testing each for its reasoning and evidence.",
        },
        {
          code: "SS.Hist4.d.h",
          text: "Analyze how the POV of the author can influence the content and intent of a primary or secondary source and identify whose voices may be left out.",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.whose-voice-absence",
            "bvc.author-rhetoric-primary-texts",
          ],
          coverage: "full",
          note: "Near-1:1 with the catalog's method: how an author's point of view shapes a source — a planter's euphemism against first-person accounts of formerly enslaved writers — and, explicitly, whose voices are left out of the record.",
        },
        {
          code: "SS.Inq5.a.h",
          text: "Explore opportunities, informed by the knowledge and methods of the social sciences, for personal or collaborative civic engagement with community, school, state, tribal, national, and/or global implications.",
          claimIds: ["civics.show-up-every-level", "civics.track-a-bill", "civics.wi-get-involved"],
          coverage: "full",
          note: "Civic engagement is taught as practice — showing up where an issue is decided, tracking a live bill, and Wisconsin's own levers (recall, local boards, contacting Madison legislators, running for office).",
        },
        {
          code: "SS.PS4.a.h",
          text: "Create arguments by researching and interpreting claims and counterclaims.",
          claimIds: [
            "bvc.coffee-project-argument-paper",
            "bvc.coffee-project-research-process",
            "bvc.evaluate-claims-fallacies",
          ],
          coverage: "partial",
          note: "Building an argument by researching and weighing claims and counterclaims is taught, but ships as a graded argument product only in the Coffee episode, so this is partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — Wisconsin's own standards: nothing claimed.",
      body: "Wisconsin adopted the Common Core for mathematics in 2010 but has since written its own Wisconsin Standards for Mathematics. Either way, this catalog does no mathematics instruction, so it meets no Wisconsin mathematics standard.",
    },
    {
      heading: "English/Language Arts — Common Core adopted in 2010, since REPLACED by Wisconsin's own standards: deferred.",
      body: "Wisconsin adopted the Common Core State Standards for English language arts in 2010 but has since replaced them with its own Wisconsin Standards for English Language Arts. Because the CURRENT Wisconsin ELA standards are no longer a verbatim republication of the Common Core, we do NOT alias the shared Common Core ELA framework here — that would cite superseded standards. The catalog's ELA-literacy strengths (evaluating an author's point of view and evidence, analyzing rhetoric, sustained research with citation) would map to Wisconsin's own ELA literacy standards, but transcribing and verifying those verbatim is deferred this pass. Note: the media/source-evaluation skill is already claimed, as a full alignment, through the social studies Inquiry and History strands (SS.Inq2.b.h, SS.Inq4.b.h, SS.Hist4.d.h).",
    },
    {
      heading: "Science — NGSS-BASED but Wisconsin's OWN reorganization, not verbatim NGSS: deferred.",
      body: "Wisconsin's 2017 Wisconsin Standards for Science are based on the NGSS and the Framework for K-12 Science Education, but Wisconsin reorganized and re-coded them into its own standards rather than reproducing the NGSS performance expectations verbatim. Unlike Michigan (which adopted the NGSS verbatim and therefore reuses the shared NGSS mapping), Wisconsin's are not a byte-for-byte NGSS republication, so we do NOT alias the shared NGSS framework. The catalog's climate/resource content (resources, hazards, and climate shaping human activity) would map to Wisconsin's own Earth and Space Science standards, but this pass mapped only the social studies strands; Wisconsin's science standards are deferred (verbatim-or-nothing), not claimed unverified.",
    },
    {
      heading: "Wisconsin's partial veto, recall, spring court elections, and 'Wisconsin Idea' have no discrete benchmark.",
      body: "The flagship teaches Wisconsin's uniquely powerful partial veto, its strong recall (and absence of a statewide initiative), its nationally watched nonpartisan spring Supreme Court elections, and 'the Wisconsin Idea' as headline features. The Political Science strand has no benchmark that names any of them individually, so they are claimed only through SS.PS3.c.h (the structure and functions of Wisconsin government) rather than as standards of their own.",
    },
    {
      heading: "Tribal, global, and supranational/NGO government (SS.PS3.c.h and across the PS strand).",
      body: "Wisconsin's Political Science strand threads tribal, global, and supranational/non-government-organization levels through SS.PS3.c.h and other benchmarks. Wisconsin Civics teaches Wisconsin's state and local structure and the federal level but not tribal, global, or NGO governance, so SS.PS3.c.h is claimed as partial and the tribal/global/NGO-specific reaches are not claimed. The gap is in the course, not the standards.",
    },
    {
      heading: "The advocacy-group, party, economics, and civic-skill benchmarks we checked and rejected.",
      body: "SS.PS2.c.h (the goals and methods of advocacy groups, the U.S. Supreme Court's restriction/expansion of group rights, and the UDHR and NGOs), SS.PS4.b.h (the effects of a specific historic political compromise), the political-party and lobbying/interest-group halves of SS.PS3.a.h and SS.PS3.b.h (claimed only partially), the SS.PS1 lower-grade-band and the SS.PS2 elementary/middle cells, and the entire Behavioral Sciences (BH), Economics (Econ), and Geography (Geog) strands and the rest of the History (Hist) strand — the courses do not genuinely teach these, or teach them too thinly to claim, so we do not claim them. (The commodity/labor/civil-rights history and commodity economics WOULD map to the Hist and Econ strands, as they do in other states, but those strands are deferred this pass.)",
    },
  ],
};
