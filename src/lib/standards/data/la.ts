// ─────────────────────────────────────────────────────────────────────────────
// LOUISIANA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-la` was written FROM Louisiana's own official sources (legis.la.gov, sos.la.gov,
// lasc.org), so Louisiana's own-government content has a genuine home. The 2022 Louisiana Student
// Standards for Social Studies High School Civics course names Louisiana's own government in three
// student expectations — C.9.i (the Louisiana State Constitution over time, compared with the U.S.
// Constitution), C.9.j (Civil Law, the Napoleonic Code, and Louisiana's system of laws), and
// C.11.k (local and parish governments, police juries, home rule charters) — and the Louisiana
// flagship maps onto them 1:1.
//
// INHERIT vs ALIAS vs BESPOKE — the reasoning, from Louisiana's own record:
//   · Social Studies — BESPOKE. Louisiana writes its own standards; the 2022 LSSSS High School
//     Civics course uses Louisiana's own codes (the practice standards 9-12.SP1-3, then the course
//     standards C.1-C.14 with lettered sub-parts). It is NOT a shared framework we alias; it is
//     Louisiana's own document, cited verbatim, element by element where the element is itself a
//     full student expectation.
//   · ELA / Mathematics — BESPOKE, and DEFERRED this pass. Louisiana REPLACED Common Core with
//     its own Louisiana Student Standards for ELA (2019) and Mathematics (2016). They may be
//     Common-Core-DERIVED, but the rule is compare-before-aliasing: we have NOT fetched and
//     compared those documents this pass, so we neither cite nor alias them — no blind alias to the
//     shared Common Core file. (This catalog does no mathematics instruction regardless.)
//   · Science — BESPOKE, and DEFERRED this pass. Louisiana's science standards (the 2017 Louisiana
//     Student Standards for Science) are NGSS-BASED but are Louisiana's OWN document. Our rule is
//     compare-before-aliasing: we have not fetched the Louisiana science document to confirm the
//     codes and text match our shared NGSS file, so we do NOT alias Louisiana onto shared NGSS.
//     The gap is published in notClaimed, not hidden.
//
// CITATION FORMAT: codes are transcribed exactly as printed (C.9.b, C.9.i, C.11.k, …). Where a
// lettered sub-part is itself a complete student expectation we cite it at that element level; for
// the two source-analysis standards (C.6, C.7) whose stem introduces a lettered list, the `text`
// is the stem plus its printed sub-points, joined verbatim.
//
// Provenance: the 2022 K-12 Louisiana Student Standards for Social Studies PDF was retrieved from
// the Louisiana Department of Education (doe.louisiana.gov) and the High School Civics course was
// transcribed from its pages (document pages 42-46); fetched 2026-07-19.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const LA_SS_SOURCE =
  "https://doe.louisiana.gov/docs/default-source/academic-curriculum/k-12-louisiana-student-standards-for-social-studies.pdf?sfvrsn=df396518_2";

export const JURISDICTION: JurisdictionFile = {
  state: "LA",
  frameworks: [
    // ── High School Civics (2022 Louisiana Student Standards for Social Studies) ──
    {
      id: "la-civics",
      subject: "Social Studies",
      name: "Louisiana Student Standards for Social Studies — High School Civics",
      publisher: "Louisiana Department of Education (LDOE)",
      version: "2022",
      fetchedOn: "2026-07-19",
      sourceUrl: LA_SS_SOURCE,
      adoption:
        "Louisiana writes its own social-studies standards (implemented 2023-24). High School Civics is a required course; its student expectations are coded C.1-C.14 with lettered sub-parts, plus the practice standards C.6/C.7. We cite the codes exactly as printed and map the Louisiana flagship (state-civics-la) 1:1 onto the three expectations that name Louisiana's own government: C.9.i, C.9.j, and C.11.k.",
      standards: [
        // — Source analysis / disciplinary skills —
        {
          code: "C.6",
          text: "Use a variety of primary and secondary sources to: a. Analyze social studies content. b. Evaluate claims, counterclaims, and evidence. c. Compare and contrast multiple sources and accounts. d. Explain how the availability of sources affects historical interpretations.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.whose-voice-differing-accounts",
            "bvc.evaluate-claims-fallacies",
            "history.migration-primary-sources",
          ],
          coverage: "partial",
          note: "Partial: the curriculum models exactly this — evaluating claims and counterclaims, reading authors' differing accounts of the same events against each other (Whose Voice), and turning source availability into a limitations-of-evidence lesson. But sustained STUDENT-run source analysis is prompted (the Coffee project), not assessed course-wide.",
        },
        {
          code: "C.7",
          text: "Construct and express claims that are supported with relevant evidence from primary and/or secondary sources, social studies content knowledge, and clear reasoning and explanations to: a. Demonstrate an understanding of social studies content. b. Compare and contrast content and viewpoints. c. Analyze causes and effects. d. Evaluate counterclaims.",
          claimIds: ["bvc.coffee-project-argument-paper", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: the Coffee project's Option D asks for precisely this — an evidence-based argument with a required counterargument (counterclaim) section — but it is one optional project in one episode, not a course-wide writing program.",
        },
        // — Foundations of U.S. government —
        {
          code: "C.8.a",
          text: "Describe the purpose of government and competing ideas about the role of government in a society.",
          claimIds: ["civics.three-branches-federal"],
          coverage: "partial",
          note: "Partial: the purpose of government is taught head-on (US Civics 101, Lesson 1). The 'competing ideas about the role of government' the expectation also names are not developed as their own content.",
        },
        {
          code: "C.8.d",
          text: "Analyze the foundational documents and ideas of the United States government and its formation, including Magna Carta, the Mayflower Compact, Enlightenment philosophies, English Bill of Rights, Declaration of Independence, the Articles of the Confederation, the Constitution of the United States of America and the Bill of Rights, and the Federalist papers, and their role and importance in the origin and development of the nation.",
          claimIds: [
            "civics.articles-to-constitution",
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
          ],
          coverage: "partial",
          note: "Partial: the Articles of Confederation's failure, the 1787 Constitution it produced, and the Bill of Rights are taught in full (US Constitution 101). The earlier documents the expectation lists (Magna Carta, the Mayflower Compact, the English Bill of Rights) and the Federalist papers are not taught as their own content.",
        },
        {
          code: "C.8.g",
          text: "Evaluate the fundamental principles and concepts of the U.S. government including Creator-endowed unalienable rights of the people, due process, equal justice under the law, equal protection, federalism, frequent and free elections in a representative government, individual responsibility, individual rights, limited government, private property rights, popular sovereignty, right to privacy, rule of law, the supremacy clause, and the separation of powers with checks and balances.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "rights.limits-on-rights",
          ],
          coverage: "partial",
          note: "Partial: the structural principles are taught in full — federalism, separation of powers with checks and balances, limited government, popular sovereignty, rule of law, and the supremacy clause (through McCulloch v. Maryland). The rights-side principles the expectation lists (due process, equal protection, right to privacy) are taught through the rights courses, not as a principles survey.",
        },
        // — Structure and functions of U.S. government —
        {
          code: "C.9.a",
          text: "Compare and contrast the powers and responsibilities of local, state, tribal (including the Chitimacha Tribe of Louisiana, the Coushatta Tribe of Louisiana, the Jena Band of Choctaw Indians, and the Tunica-Biloxi Indian Tribe), and federal governments, and explain how each is financed, how they interact with each other, and how citizens interact with and within each of them.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.local-government-layers",
          ],
          coverage: "partial",
          note: "Partial: the local, state, and federal levels and how power is divided among them are taught in full (State vs Federal Power; US, State & Local Government). TRIBAL government — which the expectation names, listing four Louisiana tribes — and government finance are not taught.",
        },
        {
          code: "C.9.b",
          text: "Explain the structure and processes of the U.S. government as outlined in the U.S. Constitution, including the branches of government; federalism; how a bill becomes a law at the federal level; and the process for amending the U.S. Constitution.",
          claimIds: [
            "civics.federal-articles-i-iii",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.federal-bill-process",
            "civics.article-v-amendment",
          ],
          coverage: "full",
          note: "This is the core of the civics ladder: the three branches and their relationships (US Constitution 101; US Civics 101), federalism, the complete federal lawmaking process (How a Bill Becomes Law), and the Article V amendment process.",
        },
        {
          code: "C.9.c",
          text: "Analyze the structure, powers, and functions of the legislative branch of the U.S. federal government, including rules of operations of Congress; checks on the other branches of government; powers of the legislative branch such as those to make laws, declare war, tax and spend; and duties of representatives, senators, leadership (Speaker of the House, the Senate President Pro Tempore, majority and minority leaders, party whips), committees, and commissions.",
          claimIds: [
            "civics.federal-articles-i-iii",
            "civics.federal-bill-process",
            "civics.separation-checks-balances",
          ],
          coverage: "partial",
          note: "Partial: the legislative branch's powers, its checks on the other branches, and the whole lawmaking process (committees through presidential action) are taught in full. The Congressional leadership hierarchy the expectation names (Speaker, President Pro Tempore, whips) is not the lessons' focus.",
        },
        {
          code: "C.9.e",
          text: "Analyze the structure, powers, and functions of the judicial branch of the U.S. federal government, including checks on the other branches of government; powers of the judicial branch such as those to interpret laws and decide the constitutionality of laws; nomination and appointment process of federal judges, origin of judicial review; and significance of stare decisis.",
          claimIds: [
            "civics.federal-judiciary-structure",
            "civics.judicial-review-marbury",
            "civics.scotus-nomination-confirmation",
            "rights.scotus-precedent",
          ],
          coverage: "full",
          note: "The Supreme Court & the Judicial Branch teaches every element: the judiciary's structure and independence, judicial review through Marbury v. Madison, the nomination and confirmation of federal judges, and how precedent (stare decisis) works and expands rights over time.",
        },
        {
          code: "C.9.f",
          text: "Evaluate the reasoning for Supreme Court decisions and their political, social, and economic effects, including Marbury v. Madison (1803); McCulloch v. Maryland (1819); Cherokee Nation v. Georgia (1831); Dred Scott v. Sandford (1857); Plessy v. Ferguson (1896); Schenck v. United States (1919); Korematsu v. United States (1944); Brown v. Board of Education (1954); Baker v. Carr (1962); Engel v. Vitale (1962); Gideon v. Wainwright (1963); Miranda v. Arizona (1966); Loving v. Virginia (1967); Tinker v. Des Moines (1969); New York Times Co. v. United States (1971); Wisconsin v. Yoder (1972); Roe v. Wade (1973); United States v. Nixon (1974); Shaw v. Reno (1993); United States v. Lopez (1995); Bush v. Gore (2000); McDonald v. Chicago (2010); Citizens United v. Federal Election Commission (2010).",
          claimIds: ["rights.landmark-cases", "civics.judicial-review-marbury", "rights.scotus-precedent"],
          coverage: "partial",
          note: "Partial: several of the listed cases are taught as rules a student can apply — Marbury v. Madison, McCulloch v. Maryland, and Tinker v. Des Moines among them — and how precedent works. The full landmark list the expectation names (Dred Scott, Plessy, Korematsu, Roe, Citizens United, and more) is not covered case by case.",
        },
        {
          code: "C.9.i",
          text: "Analyze continuity and change in the Louisiana State Constitution over time, and compare and contrast the Louisiana State Constitutions and the U.S. Constitution.",
          claimIds: ["civics.la-constitution-branches", "civics.la-lawmaking-amendments"],
          coverage: "partial",
          note: "This is one of Louisiana's own-government expectations, and the flagship lands on it: the Constitution of 1974 (Louisiana's eleventh), its three branches and plural executive, and how Louisiana amends its constitution. Partial because a systematic comparison across all of Louisiana's earlier constitutions and clause-by-clause against the U.S. Constitution is not the lesson's aim.",
        },
        {
          code: "C.9.j",
          text: "Explain the historical connections between Civil Law, the Napoleonic Code, and Louisiana's system of laws.",
          claimIds: ["civics.la-civil-law"],
          coverage: "full",
          note: "This is Louisiana Civics, Lesson 1 exactly: Louisiana as the only civil-law state, its Civil Code descended from the French and Spanish (Napoleonic) tradition, and the distinctive legal vocabulary (parishes, usufruct, forced heirship) that follows from it.",
        },
        // — Civil rights and civil liberties —
        {
          code: "C.10.a",
          text: "Explain how the U.S. Constitution protects individual liberties and rights.",
          claimIds: ["civics.bill-of-rights-overview", "rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "full",
          note: "Know Your Rights teaches what the Bill of Rights protects, the landmark cases as applicable rules, and when government may and may not limit those rights.",
        },
        {
          code: "C.10.b",
          text: "Analyze the rights enumerated in the Bill of Rights and their application to historical and current issues.",
          claimIds: ["civics.bill-of-rights-origin", "rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "full",
          note: "The Bill of Rights is taught as a document and then applied issue by issue — speech, religion, press, assembly, and the Fourth Amendment in a digital age — through Tinker, Brandenburg, Mapp, Terry, T.L.O., Riley, and Carpenter.",
        },
        {
          code: "C.10.c",
          text: "Evaluate restrictions and expansions of civil liberties and civil rights in the United States and the role of the legislative, executive, and judicial branches of the government in related events and developments over time, including the Thirteenth, Fourteenth, and Fifteenth Amendments; Plessy v. Ferguson (1896); the Espionage and Sedition Acts; Schenck v. United States (1919); the Nineteenth Amendment; Executive Order 9066; Executive Order 10730; Brown v. Board of Education (1954); the Civil Rights Act of 1964; the Voting Rights Act of 1965; the Twenty-Fourth Amendment; and Twenty-Sixth Amendment.",
          claimIds: [
            "history.jim-crow-and-long-shadow",
            "history.migration-civil-rights-politics",
            "rights.landmark-cases",
          ],
          coverage: "partial",
          note: "Partial: the denial and expansion of civil rights is taught in depth through the Great Migration — the Jim Crow South people fled and the Black urban electorate and civil-rights politics the Migration created — and some rights cases as rules. The specific amendments and cases the expectation lists (the Reconstruction Amendments, Plessy, the Nineteenth Amendment, the 1964 and 1965 Acts) are not each covered.",
        },
        // — Political processes and participation —
        {
          code: "C.11.a",
          text: "Analyze the duties and responsibilities of citizens in the United States, including paying taxes, serving on a jury, obeying the law, voting, and Selective Service registration.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service", "civics.voter-registration"],
          coverage: "partial",
          note: "Partial: the core duties are taught as practice — jury service (an entire course), voting and registration, and the responsibilities of citizenship. Paying taxes and Selective Service registration, which the expectation also names, are not taught.",
        },
        {
          code: "C.11.b",
          text: "Describe U.S. citizenship requirements and the naturalization process in the United States.",
          claimIds: ["civics.us-citizenship-law", "civics.citizenship-responsibilities"],
          coverage: "full",
          note: "Citizenship & Naturalization Basics teaches exactly this: who is a citizen (birthright and the 14th Amendment), the naturalization eligibility and process, and the rights and responsibilities that follow.",
        },
        {
          code: "C.11.d",
          text: "Explain rules governing campaign finance and spending and their effects on the outcomes of local, state, and federal elections.",
          claimIds: ["civics.campaign-help"],
          coverage: "partial",
          note: "Partial: How to Help a Campaign teaches the campaign-finance rules from the participant's side — donating and volunteering lawfully within the guardrails. A systematic analysis of campaign-finance law and its effects on election outcomes is not taught.",
        },
        {
          code: "C.11.e",
          text: "Explain election processes at the local, state, and federal levels, including qualifications and procedures for voting; qualifications and terms for offices; the primary system; public hearings and forums; petition, initiative, referendum, and recall; and amendments related to elections and voting.",
          claimIds: [
            "civics.election-mechanics",
            "civics.la-jungle-primary",
            "civics.la-lawmaking-amendments",
            "civics.la-courts-elections-involved",
          ],
          coverage: "partial",
          note: "Partial: national and state election procedures are taught (registration through counting), and Louisiana's own primary is worked in depth — the 'jungle primary,' Louisiana's amendment-only path with no citizen initiative, and how Louisiana elects its judges and administers voting. The general petition/initiative/referendum/recall menu is taught as Louisiana's version (which lacks the initiative), not comparatively across states.",
        },
        {
          code: "C.11.f",
          text: "Evaluate the purpose, structure, and function of the Electoral College, including how it aims to ensure representation for less populated states.",
          claimIds: ["civics.electoral-college"],
          coverage: "full",
          note: "Voting & Elections 101 teaches both halves the expectation names: how the Electoral College works, and why it exists — including its aim of representation for less populated states.",
        },
        {
          code: "C.11.k",
          text: "Describe local and parish governments in Louisiana, including police juries and home rule charters.",
          claimIds: ["civics.la-parishes", "civics.la-courts-elections-involved"],
          coverage: "full",
          note: "This is Louisiana Civics, Lesson 5 exactly: Louisiana's 64 parishes (not counties), the traditional Police Jury and the parish-president-and-council home-rule-charter alternative, and consolidated city-parish governments such as New Orleans and Baton Rouge.",
        },
        // — Foreign and domestic policy —
        {
          code: "C.12.b",
          text: "Analyze the development, implementation, and consequences of U.S. foreign and domestic policies over time, including how U.S. policies are influenced by other countries and how they influence political debates.",
          claimIds: [
            "bvc.war-on-drugs-foreign-policy",
            "bvc.sugar-program-trade-barriers",
            "bvc.prohibition",
          ],
          coverage: "partial",
          note: "Partial: specific domestic and foreign policies and their consequences are analyzed in depth — the War on Drugs (including its foreign-policy arm and the balloon effect), the U.S. sugar program, and Prohibition. This is not a general survey of U.S. policy across the fields the expectation lists.",
        },
        {
          code: "C.12.d",
          text: "Explain the origins and purpose of international organizations and agreements, including the United Nations, NATO, NAFTA, and USMCA; and analyze how the United States and member nations work to cooperate politically and economically.",
          claimIds: ["history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: NAFTA and its successor the USMCA are taught in real depth from the labor side (the Rapid Response Mechanism and its limits). The United Nations and NATO the expectation also names are not taught.",
        },
        // — Economics in a global context —
        {
          code: "C.13.b",
          text: "Compare and contrast capitalism and socialism as economic systems.",
          claimIds: ["bvc.traditional-vs-market-economies", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: two comparisons are taught — traditional (reciprocity) economies against market economies, directly and at length, and a communist workers' state against the independent union that unmade it (Poland, 1980-1989). A textbook capitalism-versus-socialism definition is not the frame.",
        },
        {
          code: "C.13.d",
          text: "Analyze the role of government institutions in developing and implementing economic policies, and explain the effects of government policies on market outcomes, including both intended and unintended consequences.",
          claimIds: ["bvc.sugar-program-trade-barriers", "bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: the intended-and-unintended-consequences frame is worked through real policies — the U.S. sugar program (intended: stable prices; unintended: a multibillion-dollar consumer cost) and the War on Drugs (the balloon effect as an unintended-consequences lesson by name). It is not a general treatment of economic-policy institutions.",
        },
        {
          code: "C.13.g",
          text: "Explain the effects of specialization and trade on the production, distribution, and consumption of goods and services for individuals, businesses, and societies.",
          claimIds: [
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
            "bvc.growing-belts-resource-maps",
          ],
          coverage: "partial",
          note: "Partial: the effects of trade on production, distribution, and whole societies are the series' spine — who is paid what along commodity value chains, the commodity trap, and the growing belts that make regions specialize. The formal 'specialization and comparative advantage' vocabulary is not taught by name.",
        },
      ],
    },

    // ── High School Civics — C.14, personal financial literacy ─────────────
    //
    // ITS OWN FRAMEWORK, WITH ITS OWN fetchedOn, for the reason every state in this pass uses: the
    // framework above was read 2026-07-18 and this expectation on 2026-08-28, when MONEY-01
    // (`credit-decisions`) made any of C.14 claimable. `fetchedOn` is rendered to teachers as
    // provenance, so restamping entries nobody re-read would corrupt the cheapest fact in the file.
    //
    // THIS SUPERSEDES A REJECTION. This file's notClaimed said "all of C.14 (personal financial
    // literacy)" was not genuinely taught. One of its five sub-parts now is, in part.
    //
    // ONE SUB-PART, PARTIAL, AND EXPRESSLY NOT THE C.14 STEM. Louisiana's C.14 stem reads "Apply
    // economic principles to make sound personal financial decisions, including in regards to
    // income, money management, spending and credit, and savings and investing." Of those five
    // named domains this course teaches exactly one, spending and credit. Claiming the stem would
    // promise a Louisiana teacher four things they would not get, which is precisely the widening
    // the standards rule forbids. Louisiana produced NO full claim anywhere in C.14, and that is the
    // honest result rather than a gap in the analysis.
    {
      id: "la-civics-personal-finance",
      subject: "Social Studies",
      name: "Louisiana Student Standards for Social Studies — High School Civics, C.14",
      publisher: "Louisiana Department of Education (LDOE)",
      version: "2022 K-12 Louisiana Student Standards for Social Studies (document footer: Updated 7/10/2026)",
      fetchedOn: "2026-08-28",
      sourceUrl: LA_SS_SOURCE,
      adoption:
        "Louisiana files personal financial literacy inside its required High School Civics course, as standard C.14 with five lettered sub-parts running from career earning potential through applying financial data, the benefits and risks of credit, comparing financial services across institutions, and creating a budget. MONEY-01 (`credit-decisions`) reaches part of C.14.c and MONEY-03 (`cash-flow-timing`) part of C.14.b, so Louisiana carries two partial claims and no full one. The C.14 stem is not claimed, and C.14.e, creating a budget, is a deliberate refusal rather than a gap. Re-read 2026-08-28 from the LDOE PDF, whose footer at that date read \"Updated 7/10/2026\" — the freshest publisher document of the nine jurisdictions re-fetched this pass.",
      standards: [
        {
          code: "C.14.c",
          text: "Explain the benefits and risks of using credit and examine the various uses.",
          claimIds: [
            "money.cost-of-credit-apr",
            "money.credit-access-constraint",
            "money.consumer-report-contents",
            "money.adverse-action-notice",
          ],
          coverage: "partial",
          note: "Partial, on the standard's trailing clause. Benefits and risks are squarely taught: the benefit is the timing gap credit is bought to close, and the risks are what the course spends most of its length on, namely the record a decision is made from, how long each adverse item may be reported, what a scoring model does with the file, and what a refusal must disclose. NOT covered: examining the VARIOUS USES of credit. The course does not survey mortgage, auto, card or installment products, and those belong to MONEY-04 and MONEY-06. A teacher planning against C.14.c gets the benefits-and-risks half and will have to supply the product survey.",
        },
        // — Added 2026-08-28 when MONEY-03 (`cash-flow-timing`) shipped. Two of the four real-life
        //   situations C.14.b names are now taught; two are not, and C.14.e, creating a budget,
        //   remains the sub-part this catalog will not claim at all.
        {
          code: "C.14.b",
          text: "Apply given financial data to real life situations such as balancing a checking account, reading bank and credit card statements, purchasing major goods, and avoiding consumer fraud.",
          claimIds: [
            "money.account-reconciliation-and-posting",
            "money.funds-availability-schedule",
            "money.payment-methods-and-clearing",
            "money.deposit-timing-disclosures-and-recourse",
          ],
          coverage: "partial",
          note: "Partial, and the split runs cleanly through the standard's own list of four situations. TAUGHT: balancing a checking account, and reading a BANK statement. Both are worked from the rules that produce the numbers rather than as a clerical drill, which is what makes the standard's verb, applying given financial data, do real work. A learner separates the date a deposit lands from the date it becomes usable (12 CFR 229.10, 229.12, 229.13 and the cut-off hour at 229.19(a)), separates authorisation from posting from settlement, finds the account agreement's own definitions of available and ledger balance, identifies each preauthorized debit and its stop-payment window (12 CFR 1005.10), and reads the overdraft and returned-item totals Truth in Savings requires on the statement (12 CFR 1030.11(a)). The capstone is that exercise done once on the learner's own documents. NOT TAUGHT: reading a CREDIT CARD statement, which belongs to MONEY-01 and MONEY-04 and is not in this course; purchasing major goods, which this course does not touch; and avoiding consumer fraud, which is MONEY-04's subject. A teacher planning against C.14.b gets the two deposit-account situations in depth and will have to supply the other two.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Louisiana mathematics standard (the Louisiana Student Standards for Mathematics, Louisiana's own since it replaced Common Core).",
    },
    {
      heading: "English Language Arts — deferred, and deliberately NOT aliased.",
      body: "Louisiana replaced Common Core with its own Louisiana Student Standards for ELA. Those standards may be Common-Core-derived, but our rule is compare-before-aliasing: we have not fetched and compared the Louisiana ELA document this pass, so we do NOT alias Louisiana onto the shared Common Core file, and we make no Louisiana ELA claim yet. The catalog's media-literacy, rhetoric, and argument-writing teaching would be the candidates when it is fetched.",
    },
    {
      heading: "Science — deferred, and deliberately NOT aliased. Louisiana's science is Louisiana's own.",
      body: "Louisiana's science standards (the 2017 Louisiana Student Standards for Science) are NGSS-BASED, but they are Louisiana's own document with Louisiana's own adoption. Blind-aliasing Louisiana onto our shared NGSS file without confirming the codes and text match would violate the rule, so we have not done it; the two Earth-science claims used elsewhere would be the candidates once the Louisiana document is fetched and compared.",
    },
    {
      heading: "Civics expectations we checked and do NOT claim.",
      body: "C.8.b/c/e/f (comparing systems of government, the Enlightenment philosophers, ratification debates, and natural-rights theory), C.9.d (the executive branch's Cabinet, executive orders, and the 'bully pulpit'), C.9.g/h (constructionist interpretation by name; how governments raise and allocate revenue), C.10.d (equal protection and due process doctrine), C.11.c/g/h/i/j (political parties and interest groups; gerrymandering and turnout; the media's effect on politics — our media-literacy work is consumer protection, not political-media analysis; Louisiana's congressional redistricting), C.12.a/c/e (the policy-fields survey; U.S. interactions with other nations; post-WWII international law), and C.13.a/c/e/f (Adam Smith and the invisible hand; government-regulation perspectives; market structures and factors of production) are not genuinely taught by these courses, so we do not claim them. All of C.14 used to be rejected here too; see the entry below.",
    },
    {
      heading: "Personal financial literacy (C.14) — this rejection has been superseded, in part.",
      body: "Until 2026-08-28 this file rejected all of C.14, personal financial literacy, on the ground that the catalog taught none of it. That was accurate then and is not now, and the correction is recorded here rather than deleted so a Louisiana teacher can see what changed. Two of the five sub-parts are claimed above, both partially: C.14.c, the benefits and risks of using credit, added when MONEY-01 shipped, and C.14.b, applying given financial data, added when MONEY-03 shipped, and each carries its limit on its own entry. THE C.14 STEM IS STILL NOT CLAIMED and will not be until the catalog earns it: Louisiana's stem names income, money management, spending and credit, and savings and investing, and claiming it would promise a teacher four domains this catalog does not deliver. Three sub-parts remain unclaimed and are named so the gap stays visible. C.14.a is the relationship between education, training and career options and future earning potential, which no course here teaches. C.14.d compares financial services across institutions, and although MONEY-02 prices bank, credit union and nonbank services against each other, it was not written against this code and is not claimed for it this pass. C.14.e is creating a budget, and that one is a deliberate and probably permanent refusal rather than a backlog item: MONEY-03 states in three separate lessons that it gives no financial advice, and it teaches cash-flow TIMING precisely because budgeting has no mechanism, no decision-maker and no recourse to teach from. Nothing here is claimed before it is taught.",
    },
  ],
};
