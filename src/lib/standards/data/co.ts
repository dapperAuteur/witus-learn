// ─────────────────────────────────────────────────────────────────────────────
// COLORADO — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-co` was written FROM Colorado's own official sources (leg.colorado.gov,
// sos.state.co.us, coloradojudicial.gov, and the 1876 Constitution), so Colorado's civics flagship
// gets its 1:1 state-civics course, and this file gives it a genuine home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from CDE's own record:
//   · Social studies (High School Civics) — BESPOKE. Colorado writes its OWN standards (the 2020
//     Colorado Academic Standards, a 2020 revision). Social Studies Standard 4 is Civics, with three
//     high-school Grade Level Expectations (SS.HS.4.1–4.3) and lettered Evidence Outcomes. Unlike
//     Maryland's (which names the "Maryland General Assembly"), Colorado's civics standard is
//     CONCEPT-based — it names "American government" and "various levels of government," NOT
//     Colorado's own institutions — so this is an abstract-concept mapping (as in Illinois/Ohio):
//     the Colorado flagship's Colorado-specific lessons are mapped as genuine INSTANCES of the
//     generic outcomes (Colorado's initiative/referendum/recall and TABOR are exactly "individuals
//     and groups using the structure and functions of various levels of government to shape policy,"
//     SS.HS.4.1.b). The general U.S. civics ladder maps to the same outcomes.
//   · ELA — BESPOKE, DEFERRED. Colorado writes its OWN Reading, Writing, and Communicating (RWC)
//     standards under Colorado codes, NOT the Common Core, so the shared ../shared/common-core-ela
//     file does NOT apply here (contrast Maryland, which adopted the CC as the MCCRS). The catalog's
//     ELA-literacy strengths would map to Colorado's own RWC reading/writing expectations, but
//     transcribing and verifying those verbatim is deferred this pass. Published in notClaimed.
//   · Science — BESPOKE (NOT a blind NGSS alias), DEFERRED. Colorado's 2020 science standards are
//     Colorado's OWN — NGSS-INFLUENCED but written under Colorado codes, not the NGSS performance
//     expectations adopted verbatim — so we do NOT alias to ../shared/ngss (which would misstate the
//     provenance). The catalog's one honest science touch (resources/climate shaping human activity)
//     would find an analog in Colorado's Earth-systems evidence outcomes, but that is deferred this
//     pass. Published in notClaimed.
//   · Mathematics — nothing (the catalog does no mathematics instruction).
//
// Provenance: the High School Civics Evidence Outcomes were transcribed VERBATIM from CDE's own
// "2020 Colorado Academic Standards — Social Studies (P-12)" booklet, fetched 2026-07-18 from the
// sourceUrl below (which serves the PDF directly). Colorado prints the Grade Level Expectation code
// as SS.HS.4.<n> and letters the Evidence Outcomes beneath it (a, b, c…); we cite at the
// evidence-outcome level using Colorado's composed form SS.HS.4.<n>.<letter> (e.g. SS.HS.4.2.b),
// analogous to how Maryland's objectives are coded. Text is transcribed exactly as printed.
// Colorado's High School History, Geography, and Economics standards (Standards 1–3), which the
// catalog's commodity/colonial/labor history and commodity economics WOULD map to, are deferred —
// published in notClaimed.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const CO_SS = "https://www.cde.state.co.us/cosocialstudies/2020cas-ss-p12";

export const JURISDICTION: JurisdictionFile = {
  state: "CO",
  frameworks: [
    // ── High School Civics (2020 Colorado Academic Standards, Social Studies Standard 4) ──
    {
      id: "co-civics",
      subject: "Social Studies",
      name: "Colorado Academic Standards — Social Studies, High School Standard 4: Civics (SS.HS.4)",
      publisher: "Colorado Department of Education (CDE) / Colorado State Board of Education",
      version:
        "2020 Colorado Academic Standards for Social Studies · High School, Standard 4 (Civics), Grade Level Expectations SS.HS.4.1–4.3",
      fetchedOn: "2026-07-18",
      sourceUrl: CO_SS,
      adoption:
        "Colorado's High School Civics standard (2020 Colorado Academic Standards, Social Studies Standard 4) is the anchor for the Colorado Civics flagship. The standard is concept-based — it names “American government” and “various levels of government,” not Colorado's own institutions — so the Colorado flagship's Colorado-specific content (TABOR, the initiative/referendum/recall, the GAVEL amendment, merit-selection judges, all-mail elections, and the Denver/Broomfield consolidated city-counties) is mapped as genuine INSTANCES of these generic Evidence Outcomes, alongside the general U.S. civics ladder. Transcribed verbatim from CDE's 2020 CAS Social Studies P-12 booklet (see the file header for the provenance note); cited at the evidence-outcome level (SS.HS.4.<n>.<letter>).",
      standards: [
        // — GLE SS.HS.4.1: research and formulate positions to participate in a civil society —
        {
          code: "SS.HS.4.1.b",
          text: "Evaluate how individuals and groups can effectively use the structure and functions of various levels of government to shape policy.",
          claimIds: [
            "civics.co-direct-democracy",
            "civics.co-tabor",
            "civics.show-up-every-level",
          ],
          coverage: "full",
          note: "This is the flagship's home for Colorado's direct democracy: the initiative and referendum (and TABOR, passed by citizen initiative) are exactly individuals and groups using the structure of government to shape policy — Colorado citizens are themselves a lawmaking body.",
        },
        {
          code: "SS.HS.4.1.c",
          text: "Explain the roles and influence of individuals, groups, and the press as checks on governmental practices. For example: direct contact with elected officials, participation in civic organizations, use of social media, and attendance at local governance meetings.",
          claimIds: ["civics.co-get-involved", "civics.show-up-every-level"],
          coverage: "partial",
          note: "The example behaviors — direct contact with elected officials and attendance at local governance meetings (county commissions, city councils, school boards) — are taught as practice; the outcome's separate emphasis on “the press” as a check is not a focus of the course, so this is partial.",
        },
        {
          code: "SS.HS.4.1.d",
          text: "Identify which level of government is appropriate for various policies and demonstrate an ability to appropriately engage individually and/or in groups with that level of government.",
          claimIds: [
            "civics.co-local-government",
            "civics.local-government-layers",
            "civics.show-up-every-level",
          ],
          coverage: "full",
          note: "Which level of government handles what (Colorado's 64 counties, home-rule and consolidated city-counties, and special districts) and how to engage that level are taught directly.",
        },
        // — GLE SS.HS.4.2: purposes, roles and limitations of the structures/functions of government —
        {
          code: "SS.HS.4.2.a",
          text: "Describe the origins, foundations, purposes, and limitations of government and include the contribution of key philosophers, American historical figures and documents.",
          claimIds: ["civics.constitution-article-by-article", "civics.articles-to-constitution"],
          coverage: "partial",
          note: "The origins, foundations, purposes, and founding documents of government are taught in US Constitution 101 (why the Articles failed, the Constitution article by article); the outcome's required “contribution of key philosophers” (Locke, Montesquieu, etc.) is not a named focus, so this is partial.",
        },
        {
          code: "SS.HS.4.2.b",
          text: "Identify the structure, function, and roles of current members of American government and their relationship to democratic values.",
          claimIds: ["civics.co-state-structure", "civics.three-branches-federal"],
          coverage: "full",
          note: "Colorado's own three branches (the 35/65 General Assembly under GAVEL and term limits, the plural executive) are taught beside the three federal branches — the structure, function, and roles of the members of government.",
        },
        {
          code: "SS.HS.4.2.d",
          text: "Analyze the role of the founding documents of the United States and the evolution of their interpretation through governmental action and court cases. For example: the Declaration of Independence, the Constitution, the Federalist Papers, and the Bill of Rights.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
            "civics.judicial-review-marbury",
          ],
          coverage: "full",
          note: "The Constitution and the Bill of Rights as documents, and the evolution of their interpretation through court cases (judicial review via Marbury v. Madison), are taught by name; the Federalist Papers are an illustrative example the outcome lists, not a required single text.",
        },
        {
          code: "SS.HS.4.2.e",
          text: "Understand the role of the American judicial system and evaluate the effectiveness of the justice system in protecting life, liberty, and property for all persons in the United States.",
          claimIds: ["civics.co-courts", "civics.federal-judiciary-structure"],
          coverage: "partial",
          note: "The role and structure of the federal judiciary and of Colorado's own courts (merit selection plus retention) are taught; the course does not run the outcome's full evaluation of “the effectiveness of the justice system in protecting life, liberty, and property for all persons,” so this is partial.",
        },
        // — GLE SS.HS.4.3: political institutions that link the people to the government —
        {
          code: "SS.HS.4.3.a",
          text: "Assess how members of a civil society can impact public policy on local, state, tribal, national, or international issues. For example: voting, participation in primaries and general elections, and contact with elected officials.",
          claimIds: [
            "civics.co-elections",
            "civics.election-mechanics",
            "civics.co-get-involved",
          ],
          coverage: "full",
          note: "The named channels — voting, primaries and general elections, and contact with elected officials — are taught both generally and as Colorado's own (the all-mail ballot, same-day and automatic registration, and contacting your Denver legislators).",
        },
        {
          code: "SS.HS.4.3.d",
          text: "Analyze how court decisions, legislative debates, and various groups have helped to preserve, develop, interpret, and limit the individual rights and ideals of the American system of government.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent"],
          coverage: "partial",
          note: "How court decisions preserve, develop, and limit individual rights is taught through the landmark rights cases and how precedent works (Know Your Rights; The Supreme Court & the Judicial Branch); the outcome's “legislative debates and various groups” strand is not a focus, so this is partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Colorado Academic Standards mathematics expectation.",
    },
    {
      heading: "Science — Colorado's OWN standards (NGSS-influenced, not adopted verbatim): deferred, not denied.",
      body: "Colorado's 2020 science standards are Colorado's own — influenced by the NGSS framework but written under Colorado's own codes, NOT the NGSS performance expectations adopted verbatim — so the shared NGSS mapping this catalog uses in true NGSS-adopting states (Maryland, Michigan) does NOT apply in Colorado, and we do not blind-alias to it. The catalog's one honest science touch (resource availability and climate shaping human activity) would find an analog in Colorado's Earth-systems evidence outcomes, but this pass mapped only the High School Civics standard; Colorado's science standards are deferred (verbatim-or-nothing), not claimed unverified.",
    },
    {
      heading: "English/Language Arts — Colorado's OWN Reading, Writing, and Communicating standards: deferred.",
      body: "Colorado writes its own Reading, Writing, and Communicating (RWC) standards under Colorado-specific codes, NOT the Common Core (contrast Maryland, which adopted the CC as the MCCRS). The catalog's ELA-literacy strengths — evaluating an author's point of view and evidence, analyzing rhetoric, and sustained research with citation, which we map VERBATIM to the Common Core RH/RI/WHST strands in states that adopted them — would map to Colorado's own high-school RWC reading and writing expectations, but transcribing and verifying those verbatim is deferred this pass and published here rather than claimed unverified.",
    },
    {
      heading: "Colorado's signature feature, TABOR, has no code of its own.",
      body: "The Colorado flagship's headline fact is the Taxpayer's Bill of Rights (TABOR): voters must approve any tax increase, and revenue above a cap is refunded. Colorado's concept-based civics standard names no TABOR-specific outcome; it is claimed here only through SS.HS.4.1.b (individuals and groups using the structure of government to shape policy), which it fits squarely as Colorado's most consequential use of direct democracy, rather than as a standard of its own.",
    },
    {
      heading: "The concept-based civics outcomes we checked and rejected.",
      body: "SS.HS.4.1.a (engage in civil discourse as a named skill), SS.HS.4.2.c (the inherent competition among democratic values), SS.HS.4.2.f (how current global issues impact American foreign policy), SS.HS.4.2.g (compare other systems of government — authoritarian/parliamentary), SS.HS.4.3.b (parties, interest groups, suffrage, and social movements), SS.HS.4.3.c (PACs, campaign finance, and the Federal Election Commission), and SS.HS.4.3.e (participation in other systems of government) — the courses do not genuinely teach these, or teach them too thinly to claim, so we do not claim them.",
    },
    {
      heading: "Colorado's History, Geography, and Economics standards — deferred.",
      body: "Colorado's High School Social Studies has four standards; we mapped Standard 4 (Civics) this pass. The catalog's commodity, colonial, labor, and civil-rights history, its commodity geography, and its commodity economics WOULD map to Colorado's High School Standard 1 (History), Standard 2 (Geography), and Standard 3 (Economics) evidence outcomes, as they do in other states, but we defer those (verbatim-or-nothing) rather than cite text we have not transcribed and verified this pass.",
    },
  ],
};
