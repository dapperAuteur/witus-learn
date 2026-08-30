// ─────────────────────────────────────────────────────────────────────────────
// PENNSYLVANIA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-pa` was written FROM Pennsylvania's own official sources (legis.state.pa.us,
// pacourts.us, dced.pa.gov, pa.gov/vote) — and unlike California or New York, Pennsylvania's
// Civics and Government standards NAME the Pennsylvania Constitution explicitly (5.1.12.D, E), so
// the flagship's constitution and rights lessons have a genuine code. The rest of its distinctive
// structure has no code — see notClaimed.
//
// THE INHERIT-VS-BESPOKE CALL (the point of this state), made per framework, from Pennsylvania's
// own documents rather than assumed:
//   · ELA — BESPOKE, but for a subtle reason worth stating. Pennsylvania's Core Standards for
//     Reading and Writing in History and Social Studies (the 8.5/8.6 strand, PA Core, 2012/2014)
//     are a VERBATIM recoding of Common Core: we fetched PA's own document and compared every
//     standard we cite. PA's CC.8.5.11-12.F is word-for-word Common Core RH.11-12.6 — it KEEPS the
//     word "differing" that New York dropped — and CC.8.5.11-12.H/.I and CC.8.6.11-12.F/.G are
//     verbatim RH.11-12.8/.9 and WHST.11-12.7/.8. Aliasing the shared Common Core file to PA's
//     codes would therefore be honest for these FIVE. We map bespoke anyway, for two reasons:
//     Pennsylvania renamed every code (so the page should show PA's codes, not Common Core's), and
//     the shared file also bundles the general-ELA RI.11-12.6 (rhetoric) standard, which PA
//     REVISED in its Core ELA (CC.1.2.11-12.D reads differently) — importing the shared framework
//     would drag a standard PA changed onto the page under a Common Core code. So we transcribe
//     PA's own verbatim History/Social-Studies literacy codes and leave the revised RI standard
//     unclaimed. We claim no mathematics standards.
//   · Science — NOT CLAIMED. Pennsylvania did NOT adopt the NGSS. Its new STEELS standards
//     (Science, Technology & Engineering, Environmental Literacy & Sustainability; in force July
//     2025) are Pennsylvania's own, NGSS-informed but not NGSS. Because this is not a science
//     course and we have not transcribed a STEELS earth-science standard, we claim no Pennsylvania
//     science standard; the catalog's resource-and-climate content is claimed instead under
//     Pennsylvania's Geography standards (7.4.12.A), where it genuinely belongs. See notClaimed.
//   · Social studies — BESPOKE. Common Core never covered it. Pennsylvania's Academic Standards
//     for Civics and Government, Economics, Geography, and History (the June 1, 2009 FINAL
//     Secondary standards) remain the standards officially in force (a revision has been discussed
//     for years but not adopted as of 2026). Codes are Standard.Grade.Indicator (5.3.12.E); the
//     grade-12 indicators are the high-school anchors, transcribed verbatim.
//   · Personal finance — BESPOKE, and BRAND NEW. Pennsylvania had no personal finance standards at
//     all until the State Board approved final-form 22 Pa. Code Chapter 4, Appendix F on
//     12 September 2024. They are grade-banded K-12, coded 17.<area>.<band>.<letter>, and this file
//     did not cite them until 2026-08-29. Two grades 9 to 12 expectations are claimed; see that
//     framework's own header.
//
// Provenance: pdesas.org served every document directly (no Wayback needed) — all fetched
// 2026-07-17:
//   · PA Core Reading in History and Social Studies (8.5) —
//     static.pdesas.org/content/documents/PA_Common_Core_Standards_for_Reading_in_History_and_Social_Studies_8-7-12.pdf
//   · PA Core Writing in History and Social Studies (8.6) — the matching Writing PDF
//   · Academic Standards for Civics and Government / Economics / Geography / History (Secondary,
//     June 1, 2009) — static.pdesas.org/content/documents/Academic_Standards_for_<subject>_(Secondary).pdf
// Provenance (personal finance): the final-form Appendix F PDF the State Board publishes on pa.gov
// (that framework's sourceUrl), fetched 2026-08-29. Its file metadata carries a Word creation date
// of 12 September 2024, matching the approval date printed in every page footer.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "PA",
  frameworks: [
    // ── Civics and Government (Secondary, Grade 12) ────────────────────────
    {
      id: "pa-ss-civics",
      subject: "Social Studies",
      name: "Pennsylvania Academic Standards for Civics and Government — Grade 12",
      publisher: "Pennsylvania Department of Education / State Board of Education",
      version: "June 1, 2009 (Secondary)",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://static.pdesas.org/content/documents/Academic_Standards_for_Civics_and_Government_(Secondary).pdf",
      adoption:
        "Pennsylvania's high-school civics standards, coded Standard.Grade.Indicator (5.3.12.E). Two of them — 5.1.12.D and 5.1.12.E — name the Pennsylvania Constitution among their source documents, which is where the Pennsylvania Civics flagship lands. Context: Pennsylvania's Act 35 of 2018 also requires school entities to give students a locally-developed U.S. history/government/civics assessment (which may be the U.S. Citizenship Test) at least once in grades 7-12 — the naturalization/citizenship content the citizenship course teaches.",
      standards: [
        {
          code: "5.3.12.E",
          text: "Evaluate the fairness and effectiveness of the United States electoral processes, including the electoral college.",
          claimIds: ["civics.electoral-college", "civics.election-mechanics", "civics.pa-elections"],
          coverage: "full",
          note: "The Electoral College — which this standard names — is taught in depth (mechanics and original purpose), alongside how registration, primaries, and vote-counting work, and Pennsylvania's own electoral process (Act 77 mail voting, closed primaries) through the flagship.",
        },
        {
          code: "5.3.12.F",
          text: "Analyze landmark United States Supreme Court interpretations of the Constitution and its Amendments.",
          claimIds: [
            "rights.landmark-cases",
            "civics.judicial-review-marbury",
            "rights.scotus-precedent",
            "civics.federal-judiciary-structure",
          ],
          coverage: "full",
          note: "Landmark cases are taught as rules a student can apply — Marbury (judicial review), Tinker, Brandenburg, Mapp, and how precedent expands rights — alongside the judiciary's structure.",
        },
        {
          code: "5.1.12.D",
          text: "Evaluate state and federal powers based on significant documents and other critical sources.",
          claimIds: [
            "civics.federal-powers-taxonomy",
            "civics.federalism-why-split-power",
            "civics.pa-constitution",
          ],
          coverage: "full",
          note: "State and federal powers are taught by name (enumerated/delegated, implied, reserved, concurrent) through McCulloch and the founding documents. The standard's document list names the Pennsylvania Constitution, which the flagship teaches directly.",
        },
        {
          code: "5.1.12.E",
          text: "Analyze and assess the rights of people as written in the PA Constitution and the US Constitution.",
          claimIds: ["civics.bill-of-rights-overview", "rights.landmark-cases", "civics.pa-constitution"],
          coverage: "full",
          note: "The federal Bill of Rights is taught as applicable rules with its landmark cases, and the flagship teaches Pennsylvania's own Article I Declaration of Rights — which in places protects more than the federal document (the Environmental Rights Amendment) — exactly the PA-and-US comparison the standard asks for.",
        },
        {
          code: "5.2.12.D",
          text: "Evaluate and demonstrate what makes competent and responsible citizens.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.campaign-help",
            "civics.show-up-every-level",
            "civics.pa-get-involved",
          ],
          coverage: "full",
          note: "Responsible citizenship is taught as practice — the responsibilities lesson, helping a campaign lawfully, showing up at every level of government, and Pennsylvania's own get-involved lesson (townships and boroughs, because there is no citizen initiative).",
        },
        {
          code: "5.3.12.A",
          text: "Analyze the changes in power and authority among the three branches of government over time.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.three-branches-federal",
            "civics.pa-three-branches",
          ],
          coverage: "partial",
          note: "Partial: the three branches and the checks and balances between them are taught directly, federally and (through the flagship) in Pennsylvania's own structure — the largest full-time legislature and its partly-plural executive. The standard's specific focus on how power has SHIFTED among the branches over time is not a course focus.",
        },
        {
          code: "5.1.12.A",
          text: "Analyze the sources, purposes, functions of law, and how the rule of law protects individual rights and promotes the common good.",
          claimIds: ["civics.constitution-article-by-article", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial: the Constitution's purposes (analyzed article by article) and how the rule of law both protects and constitutionally limits rights are taught. The standard's broader jurisprudential sweep (the sources and functions of law generally) is not worked systematically.",
        },
        {
          code: "5.1.12.B",
          text: "Employ historical examples and political philosophy to evaluate the major arguments advanced for the necessity of government.",
          claimIds: ["civics.three-branches-federal"],
          coverage: "partial",
          note: "Partial: the purpose of government is taught as the opener of the federal civics course. The standard's political-philosophy method (evaluating competing arguments for government's necessity) is not itself a unit.",
        },
        {
          code: "5.2.12.A",
          text: "Evaluate an individual's civil rights, responsibilities and obligations in various contemporary governments.",
          claimIds: ["civics.citizenship-responsibilities", "rights.limits-on-rights", "civics.jury-service"],
          coverage: "partial",
          note: "Partial: an individual's civil rights, and the obligations that come with them (jury service is an entire course; obeying laws and paying taxes a lesson), are taught for the United States. The comparison across “various contemporary governments” is not.",
        },
        {
          code: "5.3.12.D",
          text: "Evaluate the roles of political parties, interest groups, and mass media in politics and public policy.",
          claimIds: ["civics.election-mechanics", "media.marketing-omissions"],
          coverage: "partial",
          note: "Partial: how parties and primaries work is taught, as is reading media for omission and reliability. The standard's focus on interest groups and mass media in shaping public policy specifically is not the courses' angle.",
        },
        {
          code: "5.3.12.H",
          text: "Evaluate the role of mass media in setting public agenda and influencing political life.",
          claimIds: ["media.marketing-omissions", "bvc.evaluate-claims-fallacies"],
          coverage: "partial",
          note: "Partial: critically evaluating media claims — reading for omission, spotting misleading statistics, identifying fallacies — is taught as a consumer skill. The standard's agenda-setting and political-influence framing is not worked directly.",
        },
        {
          code: "5.4.12.B",
          text: "Evaluate the effectiveness of foreign policy tools in various current issues confronting the United States (e.g., diplomacy, economic aid, military aid, sanctions, treaties).",
          claimIds: ["bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: one foreign-policy tool set — the War on Drugs' foreign arm, U.S.-funded eradication and the aid behind it — is taught in depth. The wider toolkit of diplomacy, sanctions, and treaties across current issues is not.",
        },
      ],
    },

    // ── Economics (Secondary, Grade 12) ────────────────────────────────────
    {
      id: "pa-ss-econ",
      subject: "Social Studies",
      name: "Pennsylvania Academic Standards for Economics — Grade 12",
      publisher: "Pennsylvania Department of Education / State Board of Education",
      version: "June 1, 2009 (Secondary)",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://static.pdesas.org/content/documents/Academic_Standards_for_Economics_(Secondary).pdf",
      adoption:
        "Pennsylvania's high-school economics standards, coded 6.Standard.Grade.Indicator. We claim no personal-finance standards.",
      standards: [
        {
          code: "6.3.12.D",
          text: "Evaluate the role that governments play in international trade.",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: government's role in trade is taught through two worked cases — the U.S. sugar program's quotas and tariffs, and NAFTA→USMCA's labor rules and their limits. A general treatment is not attempted.",
        },
        {
          code: "6.3.12.B",
          text: "Assess the government's role in regulating and stabilizing the state and national economy.",
          claimIds: ["history.wagner-act", "history.gilded-age-labor", "history.taft-hartley-patco"],
          coverage: "partial",
          note: "Partial: one arena of economic regulation — labor law, the Wagner Act and its rollback in Taft-Hartley and PATCO — is taught in depth as government shifting the balance between workers and employers. The wider regulatory and stabilization apparatus is not.",
        },
        {
          code: "6.4.12.A",
          text: "Evaluate the comparative advantage of nations in the production of goods and services.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: where commodities are produced and why, and who is paid what along the value chain (the smile curve), is the Commodity Map's spine. The formal comparative-advantage framework, by name, is not taught.",
        },
        {
          code: "6.4.12.B",
          text: "Assess the growth and impact of international trade around the world.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: the impact of commodity trade — who captures the value and why producers stay poor while value accrues downstream — is taught in depth. A general assessment of trade's growth is not.",
        },
        {
          code: "6.2.12.D",
          text: "Predict how changes in supply and demand affect equilibrium price and quantity sold.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: supply and demand are taught through real commodity markets — a frost in Brazil moving world coffee prices, and why inelastic demand absorbs the spike — not as equilibrium curve-shifting exercises.",
        },
      ],
    },

    // ── Geography (Secondary, Grade 12) ────────────────────────────────────
    {
      id: "pa-ss-geo",
      subject: "Social Studies",
      name: "Pennsylvania Academic Standards for Geography — Grade 12",
      publisher: "Pennsylvania Department of Education / State Board of Education",
      version: "June 1, 2009 (Secondary)",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://static.pdesas.org/content/documents/Academic_Standards_for_Geography_(Secondary).pdf",
      adoption:
        "Pennsylvania's high-school geography standards, coded 7.Standard.Grade.Indicator. This is the honest home for the Commodity Map's resource-distribution and climate content, since Pennsylvania has no NGSS science standard to cite.",
      standards: [
        {
          code: "7.1.12.A",
          text: "Use geographic tools to analyze information about the interaction between people, places, and the environment.",
          claimIds: ["bvc.coffee-project-mapping", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: the Coffee project has students prepare their own maps and data tables, and the Commodity and Growing-Belts maps analyze where commodities grow and why. The standard's full range of geographic tools is not surveyed.",
        },
        {
          code: "7.4.12.A",
          text: "Analyze the global effects of changes in the physical systems.",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.climate-change-forecasts"],
          coverage: "partial",
          note: "Partial: how changes in climate reshape where commodities can grow — and the published forecasts of that shift for coffee, cacao, and kava growers — is taught with the evidence supplied. It is one worked thread through the physical-systems changes the standard names, not a survey of them.",
        },
      ],
    },

    // ── History (Secondary, Grade 12) ──────────────────────────────────────
    {
      id: "pa-ss-history",
      subject: "Social Studies",
      name: "Pennsylvania Academic Standards for History — Grade 12",
      publisher: "Pennsylvania Department of Education / State Board of Education",
      version: "June 1, 2009 (Secondary)",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://static.pdesas.org/content/documents/Academic_Standards_for_History_(Secondary).pdf",
      adoption:
        "Pennsylvania's high-school U.S. History (8.3) and World History (8.4) standards. These are ANALYTICAL standards organized by broad content categories (each carries a bulleted list such as “Working conditions,” “Commerce and industry,” “Ethnicity and race”) rather than by specific events, so we align at the content-category the standard names and say which category the note rests on.",
      standards: [
        {
          code: "8.3.12.D",
          text: "Evaluate how conflict and cooperation among groups and organizations in the U.S. have influenced the growth and development of the world.",
          claimIds: [
            "history.gilded-age-labor",
            "history.labor-civil-rights",
            "history.migration-streams-arrival",
            "history.jim-crow-and-long-shadow",
          ],
          coverage: "partial",
          note: "Partial: the standard's named content categories include “Working conditions,” “Ethnicity and race,” and “Immigration,” and the catalog teaches all three in depth — the labor movement, the labor half of the civil-rights movement, and the Great Migration out of the Jim Crow South. “Military conflict” and “Economic stability” are not the courses' subject.",
        },
        {
          code: "8.4.12.D",
          text: "Evaluate how conflict and cooperation among groups and organizations have impacted the development of the world today, including its effects on Pennsylvania.",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.plantation-economy-resistance",
            "history.solidarnosc-cold-war",
          ],
          coverage: "partial",
          note: "Partial: world conflict and cooperation are taught through imperial and colonial systems and the resistance to them, and through the Cold War's end in Poland. The standard's “effects on Pennsylvania” framing is not addressed by these courses.",
        },
        {
          code: "8.3.12.C",
          text: "Evaluate how continuity and change in U.S. history are interrelated with the world.",
          claimIds: ["bvc.value-chain-earnings", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: of this standard's named categories, “Commerce and industry” is taught in depth — commodity value chains and the industrial labor movement, both tied to the wider world. The other categories (belief systems, technology, geography, social organizations) are not the focus.",
        },
        {
          code: "8.4.12.C",
          text: "Evaluate how continuity and change have impacted the world today.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "Partial: “Commerce and industry” — the Columbian exchange, conquest, and how colonialism persists and evolves in the present — is taught in depth. The standard's other content categories are not covered.",
        },
      ],
    },

    // ── Reading and Writing in History and Social Studies (PA Core, Grades 11-12) ──
    {
      id: "pa-ela",
      subject: "English/Language Arts",
      name: "Pennsylvania Core Standards for Reading and Writing in History and Social Studies — Grades 11-12",
      publisher: "Pennsylvania Department of Education / State Board of Education",
      version: "PA Core · Grades 11-12",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://static.pdesas.org/content/documents/PA_Common_Core_Standards_for_Reading_in_History_and_Social_Studies_8-7-12.pdf",
      adoption:
        "Pennsylvania's PA Core content-area literacy strand (8.5 Reading, 8.6 Writing) — a verbatim recoding of Common Core's RH/WHST standards. We verified each against the shared Common Core text and it matches word for word (PA keeps “differing” in CC.8.5.11-12.F, unlike New York); we map Pennsylvania's own codes. This history/social-studies catalog does not touch the science/technical (3.5/3.6) literacy strand, and Pennsylvania's revised general-ELA rhetoric standard (CC.1.2.11-12.D) is not claimed (see the file header).",
      standards: [
        {
          code: "CC.8.5.11-12.F",
          text: "Evaluate authors’ differing points of view on the same historical event or issue by assessing the authors’ claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "The strongest single ELA alignment. Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims and evidence.",
        },
        {
          code: "CC.8.5.11-12.H",
          text: "Evaluate an author’s premises, claims, and evidence by corroborating or challenging them with other information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
        },
        {
          code: "CC.8.5.11-12.I",
          text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
        },
        {
          code: "CC.8.5.11-12.C",
          text: "Evaluate various explanations for actions or events and determine which explanation best accords with textual evidence, acknowledging where the text leaves matters uncertain.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Partial: evaluating competing accounts of the same events against their evidence is the Whose Voice method. The standard's “acknowledging where the text leaves matters uncertain” is not itself a focus of the lessons.",
        },
        {
          code: "CC.8.6.11-12.F",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded research assignment. Where it runs, it meets this standard squarely.",
        },
        {
          code: "CC.8.6.11-12.G",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "Partial, same reason as CC.8.6.11-12.F: the Coffee project's Options B and C require gathering authoritative sources with an APA bibliography, but it is the only graded assignment currently shipping.",
        },
      ],
    },

    // ── Academic Standards for Personal Finance (17.x) — NEW REGULATION, 2024 ──
    //
    // NEW FRAMEWORK, added 2026-08-29. Pennsylvania's four frameworks above are the 2009 secondary
    // standards and the PA Core literacy standards. None of them is personal finance, because until
    // 2024 Pennsylvania had no personal finance standards at all. The State Board approved these on
    // 12 September 2024 as final-form 22 Pa. Code Chapter 4, Appendix F (Reg. #006-354). Nothing in
    // this file cited Appendix F before, so no framework id collision is possible here.
    //
    // WHY IT WAS MISSED. A research sweep fetched 17.3.9-12.J on 2026-08-28, the day MONEY-06
    // (`housing-decisions`) shipped, but that sweep's report never reached the authoring agent. The
    // document was RE-FETCHED FROM pa.gov on 2026-08-29 before this entry was written, per rule 1:
    // a saved transcription is not a fetch. Both codes below matched the saved text exactly.
    //
    // A COVER WORTH RECORDING, because it looks like an error and is not. The cover prints
    // "January SEPTEMBER 2024" as running text, the struck-through-then-replaced month left visible
    // in the final form. Every page footer carries "Final-form 22 Pa. Code Chapter 4, Appendix F
    // (Reg. #006-354) / As approved by the State Board of Education on September 12, 2024", which is
    // the date cited in `version`.
    //
    // WHY 17.3.9-12.J IS AN UNUSUALLY CLEAN CLAIM. The standards are printed as a grade-banded
    // table, four columns wide: Kindergarten to Grade 2, Grades 3 to 5, Grades 6 to 8, Grades 9 to
    // 12. In the "Major life purchases" row the first three cells each print "Intentionally blank",
    // so the housing decision is a HIGH-SCHOOL-ONLY expectation with no younger-grade ladder behind
    // it. A course that meets it meets the whole of what Pennsylvania asks on this topic.
    {
      id: "pa-personal-finance",
      subject: "Social Studies",
      name: "Pennsylvania Academic Standards for Personal Finance — Grades 9 to 12 (22 Pa. Code Ch. 4, App. F)",
      publisher: "Pennsylvania Department of Education / State Board of Education",
      version:
        "Final-form 22 Pa. Code Chapter 4, Appendix F (Reg. #006-354) · approved by the State Board of Education September 12, 2024",
      fetchedOn: "2026-08-29",
      sourceUrl:
        "https://www.pa.gov/content/dam/copapwp-pagov/en/stateboard/documents/about-the-board/board-actions/2024/personal%20finance%20standards.pdf",
      adoption:
        "Pennsylvania had no personal finance standards until the State Board approved these in September 2024 as Appendix F of 22 Pa. Code Chapter 4, so they sit apart from the 2009 secondary standards mapped elsewhere in this file. Six areas are numbered 17.1 through 17.6: Personal Finance Fundamentals, Income, Spending, Saving and Investing, Risk and Insurance, and Credit. This catalog reaches two of the grades 9 to 12 expectations, both through MONEY-06 (`housing-decisions`). 17.3.9-12.J, the housing decision, is met in full and is the single best fit for this course in any state's framework, since Pennsylvania's own sentence names the three things the course does: comparing renting and buying, counting upfront and ongoing costs, and the process of obtaining a mortgage or a lease. 17.6.9-12.D is claimed as a partial because it pairs home purchases with higher education, and this catalog teaches nothing about paying for college. Everything else in Appendix F is unclaimed and notClaimed names the areas.",
      standards: [
        {
          code: "17.3.9-12.J",
          text: "Analyze a housing decision, including comparing renting and buying, upfront and ongoing costs, and the process of obtaining a mortgage or a lease.",
          claimIds: [
            "money.rent-versus-buy-comparison",
            "money.mortgage-mechanics-and-disclosures",
            "money.tenancy-and-the-governing-state-law",
          ],
          coverage: "full",
          note: "Full, and each of the standard's three named components has a section of the course behind it. COMPARING RENTING AND BUYING: built in the same units over a stated horizon, with the slogan version taken apart first (what a rent payment actually buys, including the risk transfer, against the single component of a mortgage payment that accrues to the payer), then rebuilt as a seven-line procedure the learner runs with their own assumptions and a sensitivity step. UPFRONT AND ONGOING COSTS: the upfront side is counted from the Closing Disclosure's own prescribed sections rather than estimated, with the down payment separated from closing costs because it is a transfer into the asset and not a cost; the ongoing side is property tax, lender-required insurance, maintenance and association dues on the owning side against rent and its term on the renting side. THE PROCESS OF OBTAINING A MORTGAGE OR A LEASE: the mortgage side is taught from the rules that time it, including the closed six-item definition of an application at 12 CFR § 1026.2(a)(3)(ii), the Loan Estimate deadlines at § 1026.19(e)(1)(iii), the three-business-day Closing Disclosure receipt rule at § 1026.19(f)(1)(ii)(A) and the good faith tolerances at § 1026.19(e)(3). The standard's verb is analyze rather than decide, which matters here: the course analyses the decision in full and deliberately answers no rent-or-buy question, so it meets the standard as written. On the lease side the course teaches the lease as the governing contract and the method for finding the state statute behind it, worked on one labelled state, rather than a tenant screening and application walkthrough; since Pennsylvania writes the clause disjunctively, the mortgage side carries the obtaining verb on its own.",
        },
        {
          code: "17.6.9-12.D",
          text: "Analyze the use of loans to finance higher education and home purchases, how they are obtained, and options for paying them back.",
          claimIds: ["money.mortgage-mechanics-and-disclosures"],
          coverage: "partial",
          note: "Partial, and the gap is one of the standard's two purposes rather than one of its verbs. HOME PURCHASES, taught in full: a mortgage separated into the note and the security instrument that secures it, recording, term and escrow named from RESPA's own purposes at 12 U.S.C. § 2601(b)(3). HOW THEY ARE OBTAINED, taught in full: the six pieces of information that constitute an application at 12 CFR § 1026.2(a)(3)(ii) and the clock they start, the Loan Estimate's prescribed contents at § 1026.37 read heading by heading, and the Closing Disclosure with the three-business-day rule and the tolerances that make an estimate mean something. OPTIONS FOR PAYING THEM BACK, taught in part: the four steps that generate an amortisation schedule are run by hand, the term is shown to move the payment one way and the total interest the other, and prepayment is taught as a disclosed term rather than a courtesy, with the prepayment penalty and balloon payment statements the Loan Estimate must print. What the course does NOT teach on that clause is refinancing, or what happens when repayment goes wrong. HIGHER EDUCATION IS THE REAL GAP AND IT IS TOTAL: this catalog teaches nothing about student loans, tuition, aid or repayment plans, so half of what Pennsylvania names here has no course behind it. A teacher planning against 17.6.9-12.D gets the home-purchase half and must supply the education half from elsewhere.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Pennsylvania Core mathematics standard.",
    },
    {
      heading: "Science — nothing, and here is exactly why.",
      body: "Pennsylvania did NOT adopt the NGSS. Its standards in force are the STEELS standards (Science, Technology & Engineering, Environmental Literacy & Sustainability, effective July 2025), which are Pennsylvania's own — so, unlike California, New York, and D.C., there is no shared NGSS performance expectation to adopt here. This is also not a science course (no lab work, no investigation, no modelling). The catalog's resource-availability and climate-change content is claimed instead under Pennsylvania's Geography standard 7.4.12.A, where it honestly belongs.",
    },
    {
      heading: "The Pennsylvania Civics flagship's distinctive structure has mostly no code to cite.",
      body: "Pennsylvania Civics: How Your State Government Works teaches the nation's largest full-time state legislature (a 203-member House and 50-member Senate), the elected-then-retained judiciary (partisan election to 10-year terms, then nonpartisan yes/no retention, with the Superior and Commonwealth intermediate courts), how a bill becomes a Pennsylvania law (the three-considerations rule, the two-thirds override, and the Governor's line-item veto on appropriations), and Pennsylvania's 67 counties with their ACTIVE township layer — Pennsylvania does NOT abolish townships — under home-rule and code municipalities. Pennsylvania's 2009 Civics standards reach the Commonwealth's own constitution and rights (5.1.12.D, 5.1.12.E) and general electoral processes (5.3.12.E), which the course backs, but the legislature's size, the elected judiciary, the state lawmaking process, and the township layer have no Pennsylvania-specific code. The gap is in the standards, not the course.",
    },
    {
      heading: "Act 77 mail-in voting and Pennsylvania's other election specifics.",
      body: "The flagship teaches Act 77 no-excuse mail-in voting (struck down then upheld in McLinko v. Department of State, 2022), closed primaries, first-time-voter ID, and the 15-day registration deadline with no same-day registration. Pennsylvania's Civics standards name only “United States electoral processes” (5.3.12.E), with no Pennsylvania-specific election standard, so we claim Pennsylvania's own rules only through that general standard and the flagship. The specifics have no code.",
    },
    {
      heading: "The Opium Wars and the Haitian Revolution — Pennsylvania's history standards are too abstract to name them.",
      body: "The catalog teaches both in depth. Pennsylvania's 2009 History standards are analytical standards organized by broad categories (“conflict and cooperation,” “continuity and change”) rather than by specific events, so — unlike Washington, D.C., whose standards name them explicitly — there is no Pennsylvania standard that names the Opium Wars or the Haitian Revolution to cite. We claim the world-history content only through the broad 8.4 categories, and mark those partial.",
    },
    {
      heading: "Personal finance — this heading has been superseded, and here is what replaced it.",
      body: "Until 2026-08-29 the Economics rejection below was headed \"Personal finance and most of the Economics framework\", which was accurate when it was written and is not any more. Two things changed. Pennsylvania now HAS personal finance standards: the State Board approved 22 Pa. Code Chapter 4, Appendix F on 12 September 2024, six areas numbered 17.1 through 17.6, which did not exist when the 2009 Economics framework was mapped. And this catalog now teaches MONEY-06 (`housing-decisions`), which meets 17.3.9-12.J in full and part of 17.6.9-12.D; both are claimed above. The rest of Appendix F is still not claimed, and the areas are named so the gap stays visible: 17.1 Personal Finance Fundamentals (goal setting, decision making, financial institutions), 17.2 Income (careers, wages, benefits, payroll deductions), 17.4 Saving and Investing, 17.5 Risk and Insurance, and the rest of 17.6 Credit beyond the home-loan clause. Within 17.3 Spending, only the Major life purchases housing expectation is claimed; the budgeting, payment method, bill paying, vehicle, sales and property tax and charitable giving expectations are not taught. Courses in the same money series reach some of this and are mapped onto other states' personal-finance frameworks, but Appendix F has not been read against them, so nothing is claimed before it is checked.",
    },
    {
      heading: "Most of the Grade 12 Economics framework.",
      body: "Scarcity and opportunity cost as named concepts (6.1), market competition and economic indicators (6.2.A-C, E, F), public goods and taxation policy (6.3.A, C), and the multinational-corporation and technology standards (6.4.C, D) were checked against the Grade 12 Economics framework and are not genuinely taught by these courses. We claim only the economic-systems, government-in-trade, labor-regulation, comparative-advantage, and supply-and-demand standards the catalog actually reaches.",
    },
    {
      heading: "The general-ELA rhetoric standard, and the science/technical literacy strand.",
      body: "Pennsylvania revised Common Core's RI.11-12.6 (rhetoric) in its general Core ELA (CC.1.2.11-12.D reads differently), so we do not claim it — the catalog's honest, verbatim literacy home is the History/Social-Studies strand (8.5/8.6) mapped above. Pennsylvania's Reading and Writing in Science and Technical Subjects (3.5/3.6) strand is likewise not claimed by this history-and-economics catalog.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Pennsylvania's relevant frameworks for these (Business, Computer and Information Technology; World Languages) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Pennsylvania claims this pass.",
    },
  ],
};
