// ─────────────────────────────────────────────────────────────────────────────
// KENTUCKY — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ky` was written FROM Kentucky's own official sources (legislature.ky.gov,
// sos.ky.gov, kycourts.gov, and the Kentucky Constitution of 1891), so Kentucky's civics flagship
// gets its 1:1 state-civics course, and this file gives it a genuine home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from KDE's own record:
//   · Social studies (High School Civics) — BESPOKE. Kentucky publishes the Kentucky Academic
//     Standards (KAS) for Social Studies (2019), an inquiry/C3-based framework that is Kentucky's
//     own (not Common Core, which never had a social-studies component). Its High School Civics
//     strand carries a dedicated "Kentucky Government" cluster (HS.C.KGO.1-3) that names Kentucky's
//     OWN constitution and government explicitly — so, unlike the abstract-concept states, the
//     flagship's Kentucky-structure lessons (the Constitution of 1891, the large plural executive,
//     the General Assembly's weak simple-majority-override veto, the nonpartisan elected judiciary,
//     no citizen initiative, 120 counties) have a genuine home, mapped there.
//   · Science — INHERITED (verbatim). Kentucky was an NGSS LEAD STATE (nextgenscience.org/kentucky)
//     and the Kentucky Board of Education adopted the Next Generation Science Standards as the
//     Kentucky Academic Standards for Science, using the NGSS performance-expectation codes
//     verbatim. We fetched Kentucky's own Earth Space Science course standards (KDE course 304611)
//     and confirmed HS-ESS3-1 is printed with the bare NGSS code and word-for-word identical text,
//     so ../shared/ngss is adopted verbatim, no aliases.
//   · ELA — BESPOKE, DEFERRED. Kentucky REPLACED its Common Core adoption with its own Kentucky
//     Academic Standards for Reading and Writing (2019), a post-Common-Core revision under
//     Kentucky's own organization, so the shared ../shared/common-core-ela mapping this catalog
//     uses in Common Core states does NOT apply here. Transcribing and verifying Kentucky's own
//     literacy standards verbatim is deferred this pass (verbatim-or-nothing). Published in notClaimed.
//   · Mathematics — nothing (the catalog does no mathematics instruction).
//
// Provenance: the High School Civics standards (HS.C.CP.* … HS.C.KGO.*, and the HS.C.I.* inquiry
// practices) were transcribed VERBATIM from the KDE-published "Kentucky Academic Standards for
// Social Studies" PDF (education.ky.gov, 2019), the "High School: Civics Standards" section
// (document pp. 141-147), fetched 2026-07-19. The PDF renders as clean, directly extractable text
// (no subset-font decode was needed). Only the coded standard STATEMENT is cited as the standard
// text; the "Disciplinary Clarifications" paragraphs that follow each standard are the document's
// explanatory support, not the standard, and are not quoted. Codes are cited exactly as printed
// (grade band HS, discipline C = Civics, then the strand abbreviation and number).
// ─────────────────────────────────────────────────────────────────────────────

import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const KY_SS =
  "https://www.education.ky.gov/curriculum/standards/kyacadstand/Documents/Kentucky_Academic_Standards_for_Social_Studies.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "KY",
  adoptions: [
    {
      framework: NGSS,
      adoption:
        "Kentucky was a lead state for the Next Generation Science Standards and the Kentucky Board of Education adopted the NGSS as the Kentucky Academic Standards for Science, using the NGSS performance-expectation codes verbatim. We verified HS-ESS3-1 against Kentucky's own Earth Space Science course standards (KDE course 304611) and it is printed with the bare NGSS code and identical text. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── High School Civics (Kentucky Academic Standards for Social Studies, 2019) ──
    {
      id: "ky-civics",
      subject: "Social Studies",
      name: "Kentucky Academic Standards for Social Studies — High School Civics (C)",
      publisher: "Kentucky Department of Education (KDE)",
      version: "Kentucky Academic Standards (KAS) for Social Studies, 2019 · High School Civics",
      fetchedOn: "2026-07-19",
      sourceUrl: KY_SS,
      adoption:
        "Kentucky's High School Civics standards are the anchor for the Kentucky Civics flagship. The KAS for Social Studies (2019) is Kentucky's own inquiry/C3-based framework, and its Kentucky Government cluster (HS.C.KGO.1-3) names Kentucky's OWN constitution and government explicitly, giving the flagship's Kentucky-structure lessons a genuine home; the federal Civic and Political Institutions (HS.C.CP), Roles and Responsibilities (HS.C.RR), and Processes, Rules and Laws (HS.C.PR) clusters carry the general U.S. civics ladder, and the Using Evidence (HS.C.I.UE) inquiry strand is where the catalog's source-literacy method maps. Transcribed verbatim from the KDE 2019 Social Studies standards (see the file header for the provenance note). Codes are cited as HS.C.<strand>.<n> exactly as printed.",
      standards: [
        // — Kentucky Government (HS.C.KGO): the flagship's home —
        {
          code: "HS.C.KGO.1",
          text: "Explain how the Kentucky Constitution embodies the principles of rule of law, popular sovereignty, separation of powers and checks and balances.",
          claimIds: [
            "civics.ky-commonwealth",
            "civics.ky-plural-executive",
            "civics.ky-general-assembly",
            "civics.ky-nonpartisan-judiciary",
            "civics.ky-lawmaking-no-initiative",
          ],
          coverage: "full",
          note: "This is the flagship's primary home: Kentucky's own government under its Constitution of 1891 — the large plural executive of separately elected officials, the General Assembly (100-member House, 38-member Senate) with a weak simple-majority-override veto, the nonpartisan elected judiciary, and lawmaking with no citizen initiative — is taught in depth from Kentucky's own sources.",
        },
        {
          code: "HS.C.KGO.2",
          text: "Compare Kentucky's government to other states and to the federal government.",
          claimIds: [
            "civics.ky-commonwealth",
            "civics.ky-general-assembly",
            "civics.ky-nonpartisan-judiciary",
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
          ],
          coverage: "full",
          note: "The course compares Kentucky to other states and the federal level throughout: odd-year statewide elections (like Virginia and New Jersey), the weak simple-majority veto override (like Tennessee, Alabama, and West Virginia), nonpartisan judicial elections (versus Alabama's partisan ones), 120 counties (third-most, versus Texas and Georgia), and no citizen initiative — set inside the federal enumerated/reserved-powers frame.",
        },
        {
          code: "HS.C.KGO.3",
          text: "Describe how active citizens can affect change in their communities and Kentucky.",
          claimIds: [
            "civics.ky-get-involved",
            "civics.ky-local-government",
            "civics.show-up-every-level",
            "civics.local-government-layers",
          ],
          coverage: "full",
          note: "Taught end to end and in Kentucky's own terms: registering and voting (photo ID with alternatives, expanded early voting, odd-year statewide races), showing up at the fiscal court, county judge/executive, city council, and school board, contacting the two Frankfort legislators during the short session, and running for local office.",
        },
        // — Civic and Political Institutions (HS.C.CP): the constitutional ladder —
        {
          code: "HS.C.CP.1",
          text: "Explain how the Constitution of the United States embodies the principles of rule of law, popular sovereignty, republicanism, federalism, separation of powers and checks and balances to promote general welfare.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.preamble-purposes",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
          ],
          coverage: "full",
          note: "The Constitution's structural principles — the Preamble's purposes, the article-by-article design, separation of powers and checks and balances, and federalism — are taught directly.",
        },
        {
          code: "HS.C.CP.2",
          text: "Analyze legislative, executive and judicial branch decisions in terms of constitutionality and impact on citizens and states.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.judicial-review-marbury",
            "rights.scotus-precedent",
            "civics.federal-powers-taxonomy",
          ],
          coverage: "partial",
          note: "The three branches, judicial review through Marbury v. Madison, reliance on precedent, and the federal powers taxonomy are taught. The standard's fuller ask — analyzing a running body of branch decisions (the clarification names Berea College v. Kentucky and Brown v. Board) for constitutionality and impact over time — is broader than the catalog delivers, so this is partial.",
        },
        {
          code: "HS.C.CP.4",
          text: "Evaluate how the U.S. judicial system is designed to uphold equality before the law, due process and inalienable rights.",
          claimIds: [
            "civics.federal-judiciary-structure",
            "rights.landmark-cases",
            "rights.limits-on-rights",
            "civics.bill-of-rights-overview",
          ],
          coverage: "partial",
          note: "The judiciary's structure, the Bill of Rights, and landmark cases with their limits (Tinker, Mapp, Terry, T.L.O.) are taught as applicable rules. The single evaluation the standard asks for — how the system as a whole is designed to uphold equality, due process, and inalienable rights — is assembled across courses rather than delivered as one graded analysis, so this is partial.",
        },
        // — Roles and Responsibilities of a Citizen (HS.C.RR) —
        {
          code: "HS.C.RR.1",
          text: "Evaluate the civic responsibilities of individuals within a society.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service"],
          coverage: "full",
          note: "The responsibilities of citizenship — voting, obeying the law, paying taxes, and serving on a jury (jury service is an entire course) — are taught directly.",
        },
        {
          code: "HS.C.RR.2",
          text: "Explain how active citizens can affect the lawmaking process locally, nationally and internationally.",
          claimIds: ["civics.track-a-bill", "civics.show-up-every-level", "civics.ky-get-involved"],
          coverage: "partial",
          note: "Affecting lawmaking locally and nationally — tracking a live bill, being heard on it, and showing up at the level where an issue is decided — is taught as practice. The standard's 'internationally' reach is not covered, so this is partial.",
        },
        // — Civic Virtues and Democratic Principles (HS.C.CV) —
        {
          code: "HS.C.CV.3",
          text: "Analyze the impact of the efforts of individuals and reform movements on the expansion of civil rights and liberties locally, nationally and internationally.",
          claimIds: [
            "history.gilded-age-labor",
            "history.labor-civil-rights",
            "history.migration-civil-rights-politics",
          ],
          coverage: "partial",
          note: "The reform movements the standard's clarification names — the labor movement and the civil-rights movement — are taught in depth (the Gilded-Age unions, the labor-and-civil-rights alliance, the Great Migration's civil-rights politics). The standard's 'internationally' scope and its formal civics-inquiry framing are not the courses' focus, so this is partial.",
        },
        // — Processes, Rules and Laws (HS.C.PR) —
        {
          code: "HS.C.PR.1",
          text: "Analyze the role of the three branches of government in the lawmaking process.",
          claimIds: [
            "civics.federal-bill-process",
            "civics.three-branches-federal",
            "civics.separation-checks-balances",
          ],
          coverage: "full",
          note: "How a bill becomes law and each branch's role in it — Congress drafting, the executive's veto and enforcement, and the judiciary's review — are taught end to end.",
        },
        {
          code: "HS.C.PR.3",
          text: "Evaluate intended and unintended consequences of public policies locally, nationally and internationally.",
          claimIds: ["bvc.prohibition", "bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "The standard's own headline example — Prohibition (the 18th Amendment) and its unintended consequences (black markets, lost distilling and brewing jobs) — is taught directly, as is the War on Drugs' policy fallout. The standard's wider policy-evaluation inquiry across many policy areas is not run as a graded exercise, so this is partial.",
        },
        // — Inquiry: Using Evidence (HS.C.I.UE) — the catalog's source-literacy strength —
        {
          code: "HS.C.I.UE.1",
          text: "Evaluate the credibility of multiple sources representing a variety of perspectives relevant to compelling and/or supporting questions in civics.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.whose-voice-differing-accounts",
            "bvc.evaluate-claims-fallacies",
            "bvc.media-fallacies-recurring",
          ],
          coverage: "full",
          note: "Evaluating sources of differing perspectives for credibility — the standard's exact skill — is the catalog's signature method: differing first-person accounts weighed against each other, claims tested for fallacy, and media read for what it omits.",
        },
        {
          code: "HS.C.I.UE.2",
          text: "Gather information and evidence from credible sources representing a variety of perspectives relevant to compelling and/or supporting questions in civics.",
          claimIds: ["bvc.coffee-project-research-process", "bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "Gathering evidence from credible, varied sources is taught and practiced in the Coffee research project, which is the one episode currently shipping a graded research assignment, so this is partial.",
        },
        {
          code: "HS.C.I.UE.3",
          text: "Use appropriate evidence to construct and revise claims and counterclaims relevant to compelling and/or supporting questions in civics.",
          claimIds: ["bvc.coffee-project-argument-paper", "bvc.evaluate-claims-fallacies"],
          coverage: "partial",
          note: "Constructing and revising claims from evidence is taught, and the Coffee project's argument paper runs it as a graded task, but only that episode currently ships the assignment, so this is partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Kentucky Academic Standards for Mathematics standard.",
    },
    {
      heading: "English/Language Arts — Kentucky's OWN post-Common-Core standards: deferred.",
      body: "Kentucky replaced its earlier Common Core adoption with its own Kentucky Academic Standards for Reading and Writing (2019), a post-Common-Core revision under Kentucky's own organization. The shared Common Core ELA mapping this catalog uses in Common Core states does NOT apply in Kentucky. The catalog's ELA-literacy strengths — evaluating an author's point of view and evidence, analyzing rhetoric, and sustained research with citation — would map to Kentucky's own reading and writing standards, but transcribing and verifying those verbatim is deferred this pass (verbatim-or-nothing) and published here rather than claimed unverified.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Kentucky was an NGSS lead state and adopted the NGSS verbatim as the Kentucky Academic Standards for Science, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry (verified against Kentucky's own Earth Space Science course standards). There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Kentucky's own state structure is taught more fully than HS.C.KGO.1-3 capture.",
      body: "The Kentucky Government cluster (HS.C.KGO.1-3) is the flagship's home, but Kentucky's most distinctive facts — the odd-numbered-year statewide election cycle, the comparatively WEAK gubernatorial veto (a simple-majority override), the fully nonpartisan elected judiciary with 8-year Supreme Court terms, the 120 counties (third-most of any state) and Louisville Metro consolidation, and the ABSENCE of a citizen initiative (amendments proposed by a three-fifths General Assembly vote and ratified by voters) — are folded into those three indicators rather than each having a code of its own.",
    },
    {
      heading: "The founding-philosophy and political-science Civics indicators we checked and rejected.",
      body: "HS.C.CP.3 (comparing forms of government and how each maintains order and interacts within the international community), HS.C.CV.1 (how classical republicanism, natural rights philosophy, and English common law influenced the Founders), HS.C.CV.2 (the abstract expansion of civic virtues, democratic principles, and human rights influencing individuals and groups), HS.C.PR.2 (the role of elections, bureaucracy, political parties, interest groups, and media in shaping public policy — our media literacy is consumer/source literacy, not political-media analysis), and HS.C.PR.4 (comparing the domestic and foreign policies of the United States and other countries) — the courses do not genuinely teach these, or teach them too thinly to claim, so we do not claim them.",
    },
    {
      heading: "The civics inquiry PRACTICES we did not claim (only the 'Using Evidence' strand is claimed).",
      body: "The KAS civics standards weave the C3 inquiry practices through the discipline: HS.C.I.Q.1-2 (generating compelling and supporting questions) and HS.C.I.CC.1-3 (engaging in civil discussion and reaching consensus, constructing arguments and public communications, and proposing a solution or action plan). These are run as classroom inquiry the catalog does not deliver as graded work, so we do not claim them. The one inquiry strand where the catalog genuinely delivers — Using Evidence (HS.C.I.UE.1-3: evaluating source credibility, gathering evidence, and constructing and revising claims) — is claimed above.",
    },
    {
      heading: "Kentucky's other Social Studies disciplines — Economics, Geography, and History — deferred.",
      body: "The KAS for Social Studies (2019) also carries high-school Economics, Geography, and U.S./World History disciplines. The catalog's commodity, colonial, labor, civil-rights, and Cold-War history and its commodity economics WOULD map to those strands, as they do in other states, but we mapped the High School Civics strand this pass and defer the rest rather than cite text we did not transcribe this pass (verbatim-or-nothing).",
    },
  ],
};
