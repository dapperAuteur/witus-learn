// ─────────────────────────────────────────────────────────────────────────────
// MARYLAND — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-md` was written FROM Maryland's own official sources (mgaleg.maryland.gov,
// elections.maryland.gov, mdcourts.gov, and the 1867 Constitution), so Maryland's civics flagship
// gets its 1:1 state-civics course, and this file gives it a genuine home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from MSDE's own record:
//   · Social studies (High School American Government) — BESPOKE. Maryland publishes its own State
//     Standards in Social Studies (adopted by the State Board every eight years) and a High School
//     American Government Framework (revised June 2025) whose required course anchors the Maryland
//     Comprehensive Assessment Program (MCAP) Government End-of-Course exam. It is a genuine home
//     for a state's OWN government: GOV.2.1.a names "the Maryland General Assembly" explicitly, and
//     the legislative/executive/judicial structure indicators name "Federal and Maryland State
//     Government" in their assessment limits. The general U.S. civics ladder maps to the same
//     structure/origins indicators; the catalog's commodity-economics content maps to the Economic
//     Systems indicator.
//   · ELA — INHERITED, but ALIASED. Maryland adopted the Common Core State Standards for English
//     language arts as the Maryland College and Career Ready Standards (MCCRS). We fetched
//     Maryland's own document (the June 2023 "Maryland College and Career Ready Standards Framework
//     — Disciplinary Literacy, Reading Standards for Literacy in History/Social Studies, Grades
//     9-12") and compared the RH grade 11-12 standards we cite against it: the WORDING IS VERBATIM
//     CCSS, but Maryland prints the strands under the BARE codes (RH.11-12.6, RH.11-12.8,
//     RH.11-12.9, …) without the "CCSS.ELA-Literacy" web namespace the shared file carries. So we
//     adopt ../shared/common-core-ela's verbatim text and ALIAS each code to Maryland's printed
//     bare form (same call as Michigan; contrast Illinois, which keeps the CCSS code style). The
//     RI/WHST strands MCCRS adopts follow the same bare-code convention.
//   · Science — INHERITED (verbatim). Maryland was an NGSS LEAD STATE and adopted the Next
//     Generation Science Standards (2013) as the Maryland College and Career-Ready Standards for
//     Science — the NGSS performance expectations, using the NGSS codes verbatim (this is what the
//     MISA assesses). ../shared/ngss is adopted verbatim, no aliases.
//   · Mathematics — nothing (the catalog does no mathematics instruction).
//
// Provenance: the High School American Government indicators/objectives were transcribed VERBATIM
// from MSDE's own PDF (the sourceUrl below), fetched 2026-07-18. The marylandpublicschools.org PDF
// returns HTTP 403 to a plain automated fetch; we retrieved the SAME MSDE document with a standard
// browser user-agent and transcribed its text layer directly. Maryland codes indicators as
// GOV.<unit>.<indicator> and objectives as GOV.<unit>.<indicator>.<letter> (e.g. GOV.2.1.a); we
// cite at the OBJECTIVE level because the indicator stem ("The student will evaluate how the
// principles of government assist or impede the functioning of the [Legislative Branch] of
// government by:") is generic and shared across indicators, while the objective carries the
// specific, differentiated content. Curly apostrophes are preserved verbatim where the document
// uses them ("Court’s"). Maryland's American History/World History/Geography courses, and the
// Economic/Domestic/Foreign Policy indicators the catalog does not genuinely teach, are deferred —
// published in notClaimed.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const MD_GOV =
  "https://www.marylandpublicschools.org/about/Documents/DCAA/SocialStudies/Framework/AmericanGovernment-A.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "MD",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      // Maryland kept the CCSS text verbatim but prints the strands under the bare CCSS codes
      // (no "CCSS.ELA-Literacy" namespace), so each shared code is aliased to Maryland's printed
      // form. Verified against the RH strand of Maryland's own June 2023 Disciplinary Literacy
      // Framework; MCCRS adopts the full Common Core, and the RI/WHST strands use the same bare
      // codes.
      aliases: {
        "CCSS.ELA-Literacy.RH.11-12.6": "RH.11-12.6",
        "CCSS.ELA-Literacy.RH.11-12.8": "RH.11-12.8",
        "CCSS.ELA-Literacy.RH.11-12.9": "RH.11-12.9",
        "CCSS.ELA-Literacy.RI.11-12.6": "RI.11-12.6",
        "CCSS.ELA-Literacy.WHST.11-12.7": "WHST.11-12.7",
        "CCSS.ELA-Literacy.WHST.11-12.8": "WHST.11-12.8",
      },
      adoption:
        "Maryland adopted the Common Core State Standards for English language arts as the Maryland College and Career Ready Standards (MCCRS). Maryland's document reproduces the CCSS text VERBATIM but prints the strands under the bare CCSS codes (RH.11-12.6, RH.11-12.8, …) without the “CCSS.ELA-Literacy” web namespace, so the codes here are aliased to Maryland's printed form. We compared the Reading in History/Social Studies grade 11-12 standards against Maryland's own June 2023 Disciplinary Literacy Framework and the wording is identical. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "Maryland was an NGSS lead state and adopted the Next Generation Science Standards (2013) as the Maryland College and Career-Ready Standards for Science, using the NGSS codes verbatim — this is what the Maryland Integrated Science Assessment (MISA) measures. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── High School American Government (Maryland Social Studies Framework, June 2025) ──
    {
      id: "md-government",
      subject: "Social Studies",
      name: "Maryland Social Studies Framework — High School American Government (GOV)",
      publisher: "Maryland State Department of Education (MSDE) / Maryland State Board of Education",
      version:
        "High School American Government Framework, revised June 2025 · Maryland State Standards in Social Studies · MCAP Government End-of-Course assessment",
      fetchedOn: "2026-07-18",
      sourceUrl: MD_GOV,
      adoption:
        "Maryland's required High School American Government course is the anchor for the Maryland Civics flagship and the course assessed by the MCAP Government End-of-Course exam. Its structure indicators reach Maryland's OWN government explicitly — GOV.2.1.a names the Maryland General Assembly, and the legislative/executive/judicial structure indicators name “Federal and Maryland State Government” in their assessment limits — so a state's own structure has a genuine home. The general U.S. civics ladder maps to the Standard 1 structure/origins indicators, and the catalog's commodity-economics content maps to the Economic Systems indicator. Transcribed verbatim from the MSDE framework (see the file header for the provenance note); cited at the objective level (GOV.<unit>.<indicator>.<letter>).",
      standards: [
        // — Unit 1: Structure and Origins of Government (the founding + principles ladder) —
        {
          code: "GOV.1.2.d",
          text: "Analyzing how the Constitution reflects the basic principles and eliminated the weaknesses of the Articles of Confederation.",
          claimIds: ["civics.articles-to-constitution", "civics.constitution-article-by-article"],
          coverage: "full",
          note: "US Constitution 101 works exactly this: why the Articles of Confederation failed and how that produced the 1787 Constitution, analyzed article by article.",
        },
        {
          code: "GOV.1.3.a",
          text: "Describing how the Constitution structures the government and provides for separation of powers, checks and balances, and judicial review, in such a way as to limit governmental power in favor of the people.",
          claimIds: ["civics.separation-checks-balances", "civics.judicial-review-marbury"],
          coverage: "full",
          note: "Separation of powers, checks and balances, and judicial review (Marbury v. Madison) as limits on government are each taught by name.",
        },
        {
          code: "GOV.1.3.b",
          text: "Explaining how the delegated, reserved, concurrent, and denied powers of government are divided in federalism and shared between national and state levels.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.federalism-why-split-power"],
          coverage: "full",
          note: "The delegated/reserved/concurrent powers taxonomy and why federalism splits power between the national and state levels are taught directly.",
        },
        {
          code: "GOV.1.3.c",
          text: "Describing the formal process for amending the Constitution and why this process is necessary.",
          claimIds: ["civics.article-v-amendment"],
          coverage: "full",
        },
        {
          code: "GOV.1.4.b",
          text: "Identifying the rights in the Bill of Rights and how they protect individuals and limit the power of government.",
          claimIds: [
            "civics.bill-of-rights-overview",
            "civics.bill-of-rights-origin",
            "rights.limits-on-rights",
          ],
          coverage: "full",
          note: "The Bill of Rights as a document, what it protects, and the limits government may place on rights are each taught by name.",
        },
        // — Unit 2: The Legislative Branch (the flagship's Maryland General Assembly home) —
        {
          code: "GOV.2.1.a",
          text: "Describing the bicameral structure, powers, and organization of the United States Congress and the Maryland General Assembly.",
          claimIds: ["civics.md-state-structure", "civics.federal-articles-i-iii"],
          coverage: "full",
          note: "This is the flagship's primary home: the standard names the Maryland General Assembly, whose 141-member House of Delegates and 47-member Senate (and 90-day session) the Maryland course teaches in depth, beside Article I's Congress from the general ladder.",
        },
        {
          code: "GOV.2.1.b",
          text: "Comparing and contrasting the powers and responsibilities of local, state, and national legislative bodies.",
          claimIds: [
            "civics.local-government-layers",
            "civics.md-local-government",
            "civics.md-state-structure",
          ],
          coverage: "full",
          note: "Maryland's own legislature, its 23 counties (many home-rule charter counties), and the independent City of Baltimore are taught beside the general local/state/federal comparison.",
        },
        {
          code: "GOV.2.4.c",
          text: "Evaluating the Elastic Clause and how implied powers impact the function of government.",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "Implied powers and the Necessary and Proper (Elastic) Clause are taught by name through McCulloch v. Maryland and the powers taxonomy.",
        },
        {
          code: "GOV.2.5.a",
          text: "Describing how laws are made and the tools that assist and/or impede the process.",
          claimIds: ["civics.federal-bill-process", "civics.md-referendum"],
          coverage: "full",
          note: "The assessment limit names “Federal and Maryland State Government”: how a bill becomes a federal law and how a bill becomes a Maryland law (plus Maryland's petition-to-referendum citizen check) are both taught.",
        },
        // — Unit 3: The Executive Branch (the flagship's strong-budget-governor home) —
        {
          code: "GOV.3.1.a",
          text: "Describing the structure, power, and organization of the executive branch on the federal, state, and local levels.",
          claimIds: [
            "civics.md-state-structure",
            "civics.three-branches-federal",
            "civics.local-government-layers",
          ],
          coverage: "full",
          note: "Maryland's compact plural executive (joint-ticket Governor/Lt. Governor, separately elected Attorney General and Comptroller) is taught beside the federal executive and local government.",
        },
        {
          code: "GOV.3.2.a",
          text: "Determining how the nominating process, closed and open primaries, and general elections reflect the principles of representative democracy, consent of the governed, and majority rule.",
          claimIds: ["civics.election-mechanics"],
          coverage: "full",
          note: "Registration, primaries and caucuses, and how the vote is cast, counted, and certified are taught end to end.",
        },
        {
          code: "GOV.3.2.b",
          text: "Evaluating the utility of the Electoral College over time.",
          claimIds: ["civics.electoral-college"],
          coverage: "full",
          note: "The Electoral College's mechanics AND its original purpose and modern relevance are taught directly.",
        },
        {
          code: "GOV.3.3.a",
          text: "Comparing and contrasting the powers, roles, and responsibilities of local, state and national executives.",
          claimIds: [
            "civics.md-budget-power",
            "civics.md-state-structure",
            "civics.three-branches-federal",
          ],
          coverage: "full",
          note: "The flagship's headline fact lives here: Maryland's Governor and the nation's strongest executive budget power, compared against the federal and local executives.",
        },
        // — Unit 4: The Judicial Branch (the flagship's Maryland-courts home) —
        {
          code: "GOV.4.1.a",
          text: "Describing the structure, power, and organization of the judicial branch on the federal, state, and local levels.",
          claimIds: ["civics.md-courts", "civics.federal-judiciary-structure"],
          coverage: "full",
          note: "Maryland's own courts — the 2022-renamed Supreme Court of Maryland and its mixed appointment/retention/contested-election judicial selection — are taught beside the federal judiciary.",
        },
        {
          code: "GOV.4.2.d",
          text: "Analyzing how the Supreme Court’s decision in the case of Marbury v. Madison (1803) impacted limited government and checks and balances.",
          claimIds: ["civics.judicial-review-marbury"],
          coverage: "full",
          note: "Judicial review is taught by name through Marbury v. Madison, exactly the case this objective names.",
        },
        {
          code: "GOV.4.2.a",
          text: "Analyzing how the Supreme Court decisions in Miranda v. Arizona (1966), Tinker v. Des Moines (1969), and T. L.O. v New Jersey (1985) impacted individual liberty.",
          claimIds: ["rights.landmark-cases"],
          coverage: "partial",
          note: "Two of the three named cases — Tinker v. Des Moines and New Jersey v. T.L.O. — are taught by name as applicable rules in Know Your Rights (school speech, and the reasonable-suspicion school-search standard). Miranda v. Arizona is not a focus of the course, so this is partial.",
        },
        // — Unit 4: Criminal and Civil Law (the citizen's side of the courts) —
        {
          code: "GOV.4.4.a",
          text: "Describing the role of the courts in settling disputes between individuals.",
          claimIds: ["civics.jury-service"],
          coverage: "partial",
          note: "Jury Duty & the Courts teaches the citizen's side of the court system (the trial courts, the grand and petit jury, how disputes reach a verdict), but not the full civil-vs-criminal element taxonomy the indicator's other objectives (GOV.4.4.c/d) enumerate (torts, damages, plea bargaining, indictment, …), so this is partial.",
        },
        // — Unit 5: Economic Policy (the catalog's commodity economics) —
        {
          code: "GOV.5.1.a",
          text: "Explaining how traditional, command and market and mixed economies answer the basic economic questions of what to produce, how to produce and for whom to produce when resources are limited.",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "The commodity catalog contrasts a traditional (reciprocity) economy and a market economy directly and at length (Forest Wisdom / Kava / the Synthesis), answering the basic economic questions for each; it does not separately treat command and mixed economies, so this is partial.",
        },
        // — Unit 6: Domestic Policy (citizen participation) —
        {
          code: "GOV.6.1.b",
          text: "Evaluating the tools that individuals or groups may use to influence laws, government policies, and elections including referendum, acts of civil disobedience, voting, boycotts, financial contributions, digital communication, and voting drives.",
          claimIds: [
            "civics.md-get-involved",
            "civics.show-up-every-level",
            "civics.campaign-help",
            "civics.track-a-bill",
          ],
          coverage: "partial",
          note: "Several of the named tools are taught as practice — the referendum (Maryland's petition to referendum), voting, contacting legislators, showing up locally, and supporting a campaign lawfully — but acts of civil disobedience, boycotts, and PAC/financial-contribution strategy are not taught, so this is partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Maryland College and Career Ready Standards mathematics expectation.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Maryland was an NGSS lead state and adopted the NGSS verbatim (2013) as the Maryland College and Career-Ready Standards for Science, assessed by the MISA, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Maryland's nation-strongest executive budget power has no code of its own.",
      body: "The Maryland flagship's headline fact is that the Governor holds what many call the strongest executive budget authority in the nation (the General Assembly can generally only cut, not add). The American Government framework has no indicator naming this Maryland-specific feature; it is claimed here only through GOV.3.3.a (comparing local, state, and national executives), which it fits squarely, rather than as a standard of its own.",
    },
    {
      heading: "Maryland's referendum-without-initiative has no discrete indicator.",
      body: "Maryland's distinctive citizen tool is a petition to referendum (a veto of a passed law) with NO citizen initiative. The framework names “referendum” only inside the broad citizen-tools objectives (GOV.2.2.c and GOV.6.1.b, whose text is identical), not as a discrete standard; we claim it through GOV.2.5.a (how laws are made) and GOV.6.1.b, and publish the gap here.",
    },
    {
      heading: "Standard 6.0 (Skills and Processes / the Inquiry Arc) is not separately coded.",
      body: "The catalog's source-literacy method — evaluating a source's authority, origin, context, and corroborative value, and constructing evidence-based arguments — is exactly Maryland's Standard 6.0 inquiry skills, assessed by the Evidence Based Argument Set (EBAS). But the framework prints those as bulleted skills woven through every unit, NOT as GOV.<unit>.<indicator> codes, so there is no code to cite (fetch-a-code-or-don't-cite). The same method is claimed under Maryland's Common Core RH.11-12.6/8/9 (evaluating authors' points of view, premises, and evidence), which ARE coded.",
    },
    {
      heading: "The Economic, Domestic, and Foreign Policy indicators we checked and rejected.",
      body: "GOV.1.1 (comparing types of government worldwide) and GOV.1.2.a-c/e (English common law to the Enlightenment to the Declaration as named content); GOV.2.2 and GOV.2.3 (parties/interest-groups/lobbyists/PACs, reapportionment/redistricting/gerrymandering); GOV.3.4/3.5 (executive orders and crisis power, and the EPA/FDA/FTC/FCC/FAA regulatory agencies); GOV.4.3 (14th-Amendment due-process incorporation as named doctrine); GOV.5.2-5.4 (GDP/CPI, the business cycle, and fiscal/monetary policy); and GOV.6.2-6.5 and all of GOV.7 (regional policy, entitlements/public-health/education/technology policy, land-use/environmental policy, equity/civil-rights policy, and U.S. foreign policy and international organizations) — the courses do not genuinely teach these, or teach them too thinly to claim, so we do not claim them.",
    },
    {
      heading: "Maryland's American History, World History, and Geography courses — deferred.",
      body: "The American Government course is one of Maryland's high-school social studies courses. The catalog's commodity, colonial, labor, and civil-rights history and its commodity geography WOULD map to Maryland's High School United States History, World History, and Geography frameworks, as they do in other states, but we mapped the American Government framework this pass and defer the rest (verbatim-or-nothing) rather than cite text we have not transcribed and verified.",
    },
  ],
};
