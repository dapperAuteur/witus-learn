// ─────────────────────────────────────────────────────────────────────────────
// SOUTH CAROLINA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-sc` was written FROM South Carolina's own official sources (scstatehouse.gov,
// scvotes.gov, sccourts.org, and the Constitution of 1895), so South Carolina's civics flagship
// gets its 1:1 state-civics course, and this file gives it a genuine home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from the SC DOE's own record:
//   · Social studies (grade-12 United States Government) — BESPOKE. South Carolina publishes the
//     South Carolina Social Studies College- and Career-Ready Standards (2019), a discrete grade-12
//     United States Government course whose indicator USG.2.CC ("Explain how governments in South
//     Carolina are organized and how they function in the American constitutional government") names
//     South Carolina's OWN government explicitly, so — unlike the abstract-concept states — the
//     flagship's South-Carolina-structure lessons (the legislative state, the legislature electing
//     judges, the large plural executive, no citizen initiative) have a genuine home, mapped there.
//   · ELA — BESPOKE, DEFERRED. South Carolina WITHDREW from the Common Core in 2015 and adopted its
//     own South Carolina College- and Career-Ready Standards for English Language Arts. So the shared
//     ../shared/common-core-ela mapping this catalog uses in Common Core states does NOT apply here.
//     The catalog's literacy strengths would map to South Carolina's own reading/writing inquiry
//     standards, but transcribing and verifying those verbatim is deferred this pass. Published in
//     notClaimed.
//   · Mathematics — nothing (the catalog does no mathematics instruction).
//   · Science — BESPOKE (NOT NGSS), DEFERRED. South Carolina adopted its own South Carolina Academic
//     Standards and Performance Indicators for Science (2021), NOT the Next Generation Science
//     Standards, so the shared ../shared/ngss file does NOT apply here. Published in notClaimed.
//
// Provenance: the grade-12 United States Government indicators (USG.1.ER … USG.4.IP) were transcribed
// VERBATIM from the SC DOE-published "South Carolina Social Studies College- and Career-Ready
// Standards" PDF (ed.sc.gov, 2019), the "United States Government Standards" section (document
// pp. 122–126), fetched 2026-07-18. The PDF renders as clean, directly extractable text (no
// subset-font decode was needed). Only the bold indicator STATEMENT is cited as the standard text;
// the "This indicator was developed to encourage inquiry into…" paragraphs that follow each
// indicator are the document's explanatory commentary, not the standard, and are not quoted. Codes
// are cited exactly as printed, including the en-dash in "Articles I–III" and the four skill suffixes
// ER/IN/CC/IP defined in the course's "Deconstructed Skills" table.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const SC_SS =
  "https://ed.sc.gov/instruction/standards/social-studies/standards/2019-south-carolina-social-studies-college-and-career-ready-standards/";

export const JURISDICTION: JurisdictionFile = {
  state: "SC",
  frameworks: [
    // ── Grade 12 United States Government (SC Social Studies CCR Standards, 2019) ──
    {
      id: "sc-us-government",
      subject: "Social Studies",
      name: "South Carolina Social Studies College- and Career-Ready Standards — United States Government (USG, grade 12)",
      publisher: "South Carolina Department of Education (SC DOE)",
      version:
        "South Carolina Social Studies College- and Career-Ready Standards, 2019 · United States Government course (grade 12)",
      fetchedOn: "2026-07-18",
      sourceUrl: SC_SS,
      adoption:
        "South Carolina's required grade-12 United States Government course is the anchor for the South Carolina Civics flagship. South Carolina withdrew from the Common Core, so these Social Studies standards are South Carolina's own, and USG.2.CC (how governments in South Carolina are organized and function) is a genuine home for a state's own structure. Transcribed verbatim from the SC DOE 2019 standards (see the file header for the provenance note). The indicators are coded USG.<standard>.<skill>, where the skill suffix is one of ER (Establish Relationships), IN (Interpret), CC (Communicate and Conclude), or IP (Informed Participation) — e.g. USG.2.CC is Standard 2 (Government Structure), the Communicate-and-Conclude indicator.",
      standards: [
        // — Standard 2: Government Structure (the flagship's home + the federal ladder) —
        {
          code: "USG.2.CC",
          text: "Explain how governments in South Carolina are organized and how they function in the American constitutional government.",
          claimIds: [
            "civics.sc-legislative-state",
            "civics.sc-plural-executive",
            "civics.sc-legislature-elects-judges",
            "civics.sc-lawmaking-no-initiative",
            "civics.sc-local-government",
            "civics.local-government-layers",
            "civics.federalism-why-split-power",
          ],
          coverage: "full",
          note: "This is the flagship's primary home: South Carolina's own government — the legislative state and its Constitution of 1895, the large plural executive, the General Assembly electing the judges, how a bill becomes a South Carolina law with no citizen initiative, and its 46 counties under Home Rule — is taught in depth, and how those state and local governments sit inside the federal constitutional system is carried by the general civics catalog.",
        },
        {
          code: "USG.2.ER",
          text: "Explain the authority, organization, purposes, and responsibilities of the three branches of government as enumerated in Articles I–III in the Constitution.",
          claimIds: [
            "civics.federal-articles-i-iii",
            "civics.three-branches-federal",
            "civics.separation-checks-balances",
          ],
          coverage: "full",
          note: "Articles I-III, the three branches, their specific powers, and how they interact and check one another are taught end to end.",
        },
        {
          code: "USG.2.IN",
          text: "Analyze how power and responsibility are distributed, shared, and limited in the American constitutional government.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.bill-of-rights-overview",
          ],
          coverage: "full",
          note: "The distribution, sharing, and limiting of power — separation of powers and checks and balances, federalism and the enumerated/implied/reserved/concurrent powers taxonomy, and the Bill of Rights as a limit on government — is taught by name.",
        },
        {
          code: "USG.2.IP",
          text: "Synthesize why the rule of law has a central place in American society and the impact it has on the American political system.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.judicial-review-marbury",
            "rights.limits-on-rights",
          ],
          coverage: "partial",
          note: "The rule of law is taught through its working parts — the Constitution as the supreme rule, judicial review through Marbury v. Madison, and the constitutional limits on what government may do to rights. The single synthesized argument the standard asks for ('why the rule of law has a central place') is assembled across courses rather than delivered as one graded synthesis, so this is partial.",
        },
        // — Standard 1: Foundations of Democracy (the founding ladder) —
        {
          code: "USG.1.IN",
          text: "Interpret founding documents and principles that led to the creation of the American constitutional democracy.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.preamble-purposes",
            "civics.articles-to-constitution",
          ],
          coverage: "partial",
          note: "The founding documents that framed the government — the Preamble and the Constitution article by article, and why the Articles of Confederation gave way to the 1787 Constitution — are interpreted directly. The Declaration of Independence and the Enlightenment principles behind them are touched more lightly, so this is partial.",
        },
        {
          code: "USG.1.IP",
          text: "Investigate and communicate the importance of constitutional principles and fundamental values and apply them in abstract and real world situations.",
          claimIds: ["civics.constitution-article-by-article", "civics.article-v-amendment"],
          coverage: "partial",
          note: "Constitutional principles and the Constitution as a living document capable of being altered over time (Article V) are taught. The standard's applied half — applying the principles to abstract and real-world situations as a student exercise — is prompted more than it is run as a graded task, so this is partial.",
        },
        // — Standard 3: The Political Process (lawmaking + elections) —
        {
          code: "USG.3.IP",
          text: "Explain how the electoral process works in federal elections and the effects those elections have on U.S. government.",
          claimIds: ["civics.election-mechanics", "civics.electoral-college", "civics.voter-registration"],
          coverage: "partial",
          note: "The electoral process is taught in working detail — registration, primaries, how you vote, counting and certifying, and the Electoral College's mechanics and purpose. The standard's historical half (the struggles over the extension of suffrage and federal campaign/electoral rules) is thinner, so this is partial.",
        },
        {
          code: "USG.3.ER",
          text: "Describe the policy making process in the American constitutional government.",
          claimIds: ["civics.federal-bill-process", "civics.track-a-bill"],
          coverage: "partial",
          note: "The core of policy making — how a bill becomes law, and tracking a live bill and being heard on it — is taught as practice. The standard's wider policy-network frame (interest groups, parties, and domestic/economic/foreign-policy networks) is not the course's focus, so this is partial.",
        },
        // — Standard 4: Citizenship (the civic half) —
        {
          code: "USG.4.IP",
          text: "Describe and evaluate the ways citizens can participate in the political process at the local, state, national, and global levels.",
          claimIds: [
            "civics.sc-get-involved",
            "civics.show-up-every-level",
            "civics.track-a-bill",
            "civics.citizenship-responsibilities",
            "civics.jury-service",
          ],
          coverage: "full",
          note: "Participation is taught end to end and includes South Carolina's own levers: registering and voting with photo ID, showing up at county councils, city councils, and school boards, contacting the Columbia legislators, watching the General Assembly's judicial elections, jury service, and running for local office.",
        },
        {
          code: "USG.4.ER",
          text: "Describe the criteria and process for immigration to and citizenship in the U.S., and explain how the U.S. has expanded and limited the concept of citizenship over time.",
          claimIds: ["civics.us-citizenship-law", "civics.citizenship-responsibilities"],
          coverage: "partial",
          note: "The criteria and process for U.S. citizenship — birthright and the 14th Amendment, naturalization eligibility, and the rights and responsibilities of citizenship — are taught directly. The standard's historical half (how the U.S. has expanded and limited citizenship over time) is thinner, so this is partial.",
        },
        {
          code: "USG.4.IN",
          text: "Distinguish between various economic, personal, and political rights of citizens in the U.S., and how these rights can sometimes conflict with each other.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights", "civics.bill-of-rights-overview"],
          coverage: "partial",
          note: "The personal and political rights the Constitution protects, and how those rights are limited and can conflict, are taught as applicable rules (Tinker, Mapp, Terry, T.L.O., and the limits on speech). The 'economic rights' strand the standard also names is not a focus, so this is partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no South Carolina College- and Career-Ready mathematics standard.",
    },
    {
      heading: "English/Language Arts — South Carolina's OWN standards (after the Common Core exit): deferred.",
      body: "South Carolina withdrew from the Common Core in 2015 and adopted its own South Carolina College- and Career-Ready Standards for English Language Arts, under South Carolina-specific codes. The shared Common Core ELA mapping this catalog uses in Common Core states does NOT apply in South Carolina. The catalog's ELA-literacy strengths — evaluating an author's point of view and evidence, analyzing rhetoric, and sustained research with citation — would map to South Carolina's own reading and writing inquiry standards, but transcribing and verifying those verbatim is deferred this pass (verbatim-or-nothing) and published here rather than claimed unverified.",
    },
    {
      heading: "Science — South Carolina's OWN standards (not the NGSS): deferred, not denied.",
      body: "South Carolina adopted its own South Carolina Academic Standards and Performance Indicators for Science (2021), NOT the Next Generation Science Standards, so the shared NGSS mapping this catalog uses in NGSS states does not apply in South Carolina. The catalog's climate/resource content would find an analog in South Carolina's Earth/environmental-science standards, but this pass mapped only the United States Government course; South Carolina's science standards are deferred (verbatim-or-nothing), not claimed unverified.",
    },
    {
      heading: "South Carolina's own state structure is taught more fully than USG.2.CC captures.",
      body: "USG.2.CC ('how governments in South Carolina are organized and how they function') is the one indicator that names South Carolina's own government, and it is the flagship's home. But South Carolina's most distinctive facts — the General Assembly ELECTING the judges (shared only with Virginia), the 1895 weak-governor design, the unusually large plural executive of separately elected officials, the ABSENCE of a citizen initiative, and the distinctive re-ratification step for amendments — are all folded into that single indicator rather than each having a code of its own.",
    },
    {
      heading: "The founding-philosophy and political-science Government indicators we checked and rejected.",
      body: "USG.1.ER (the philosophical influences on core political principles — Greek democracy, Roman republicanism, and the Enlightenment thinkers), USG.1.CC (the major debates and compromises underlying the formation and ratification of the Constitution — the Convention's bargains), USG.3.IN (how American political beliefs and ideological trends are formed by founding principles, core values, and changing demographics), USG.3.CC (the role of linkage institutions — media, interest groups, and political parties — in shaping the public agenda; our media literacy is consumer/source literacy, not political-media analysis), and USG.4.CC (contemporary equal-protection issues, social movements, and landmark civil-rights legislation) — the United States Government course and the general civics catalog do not genuinely teach these, or teach them too thinly to claim, so we do not claim them.",
    },
    {
      heading: "South Carolina's other Social Studies courses — deferred.",
      body: "The grade-12 United States Government course is one of several in the 2019 Social Studies standards (which also include United States History, World History, Economics, and Geography courses). The catalog's commodity, colonial, labor, and civil-rights history and its commodity economics WOULD map to the US/World History and Economics courses, as they do in other states, but we mapped the United States Government course this pass and defer the rest rather than cite text we did not transcribe this pass.",
    },
    {
      heading: "The United States Government 'Deconstructed Skills' (the ER/IN/CC/IP skill framework).",
      body: "Standard 1's 'Deconstructed Skills' table defines the four cross-cutting skills (Establish Relationships, Interpret, Communicate and Conclude, Informed Participation) that the numbered indicators exercise. The catalog's source-literacy method — analyzing primary and secondary sources, and detecting bias in media and political cartoons — aligns well with the Interpret and Communicate-and-Conclude skill descriptors, but those are the course's skill framework, not coded content standards, so we cite the content indicators (USG.n.x) rather than the skill descriptors.",
    },
  ],
};
