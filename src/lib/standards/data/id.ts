// ─────────────────────────────────────────────────────────────────────────────
// IDAHO — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-id` was written FROM Idaho's own official sources (the Constitution of the State
// of Idaho, legislature.idaho.gov, isc.idaho.gov, and voteidaho.gov), so Idaho's civics flagship
// gets its 1:1 state-civics course, and this file gives it a home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from the Idaho SDE's own record:
//   · Social studies — BESPOKE. Idaho writes its own standards (not Common Core). The current
//     Idaho Content Standards K-12 Social Studies (created 04/23/2024, REVISED 11/20/2025) High
//     School American Government course names Idaho's OWN government explicitly in three places:
//     9-12.GOV.45 (state and local government "as described in the Constitution of the State of
//     Idaho"), 9-12.GOV.47 (local government — county, city, special district), and 9-12.GOV.54
//     (state administration of elections) — a genuine, near-1:1 home for the Idaho flagship's own-
//     structure, local-government, and elections lessons, while the federal branches / federalism /
//     citizenship benchmarks carry the general civics ladder. The media/misinformation and media-
//     influence-on-elections benchmarks (9-12.GOV.17, 9-12.GOV.52) carry the catalog's media/
//     source-literacy method.
//   · English/Language Arts — BESPOKE (NOT aliased). Idaho adopted the Common Core for ELA as the
//     Idaho Core, but the current Idaho Content Standards for English Language Arts/Literacy (dated
//     January 3, 2022) REORGANIZED the standards away from the Common Core strand/code structure
//     entirely: there is no longer a "Reading for Literacy in History/Social Studies (RH)",
//     "Reading Informational Text (RI)", or "Writing in History/Social Studies… (WHST)" strand, and
//     the grade band is printed "11/12", not "11-12". Idaho now organizes grades 11/12 under
//     Reading Comprehension (RC), Vocabulary Development (VD), Research (RS), Writing (W), Oral and
//     Digital Communications (ODC), and Grammar and Conventions (GC) strands with its own codes.
//     Because the RH/RI/WHST codes the shared ../shared/common-core-ela file carries DO NOT EXIST
//     in Idaho's current document, aliasing that file would misrepresent Idaho's standards. Instead
//     we transcribe Idaho's OWN verbatim literacy standards below (the Nonfiction Text, Textual
//     Evidence, Research, and Digital Communications standards that match the catalog's method).
//   · Science — Idaho's OWN 2018 Science standards, NOT NGSS-verbatim (Idaho notably revised and
//     removed climate/human-impact language from the NGSS during 2016-2018), so the one climate/
//     resource code this catalog could touch (the NGSS HS-ESS3-1 equivalent) is DEFERRED, not
//     aliased. See notClaimed. Mathematics — Common Core adopted as the Idaho Core; nothing claimed.
//
// Provenance: the High School American Government (9-12.GOV.*) standards were transcribed VERBATIM
// from the Idaho SDE's "Idaho Content Standards K-12 Social Studies" (created 04/23/2024, revised
// 11/20/2025) at ID_SS below; the literacy standards from the Idaho SDE's "Idaho Content Standards
// English Language Arts/Literacy" (January 3, 2022) at ID_ELA below — both fetched 2026-07-19. Both
// PDFs open in a browser but return their bytes to automated fetches only as a compressed stream;
// we downloaded each byte-faithfully from sde.idaho.gov and decoded the stream (the SDE's own
// document, not a mirror), and verified every mapped standard reads as clean English before use.
// 9-12.GOV.7's bulleted sub-list is rendered inline with "•" separators, preserving the exact
// words. Idaho renders apostrophes as curly typographic marks; the words are verbatim and rendered
// in that house style. Idaho cites ELA standards by grade band + strand + sub-strand + number
// (the document prints the strand prefix "11/12.RC-" and tags each sub-strand, e.g. "Nonfiction
// Text (NF)"); we cite them as e.g. 11/12.RC.NF.6d exactly so.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const ID_SS = "https://www.sde.idaho.gov/wp-content/uploads/2026/05/K-12-Social-Studies-Standards.pdf";
const ID_ELA = "https://www.sde.idaho.gov/wp-content/uploads/2025/09/Idaho-K-12-State-Standards-for-ELA-Literacy.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "ID",
  frameworks: [
    // ── High School American Government (Idaho Content Standards K-12 Social Studies, rev. 2025) ──
    {
      id: "id-government",
      subject: "Social Studies",
      name: "Idaho Content Standards K-12 Social Studies — High School American Government (9-12.GOV)",
      publisher: "Idaho State Department of Education / State Board of Education",
      version:
        "Idaho Content Standards K-12 Social Studies (created 04/23/2024, revised 11/20/2025) · High School American Government (9-12.GOV) standards",
      fetchedOn: "2026-07-19",
      sourceUrl: ID_SS,
      adoption:
        "Idaho writes its own social studies standards (not Common Core). The High School American Government course is the anchor for the Idaho Civics flagship: 9-12.GOV.45 (state and local government as described in the Constitution of the State of Idaho), 9-12.GOV.47 (local government — county, city, special district), and 9-12.GOV.54 (state administration of elections) are near-1:1 with the flagship's own-structure, local-government, and elections lessons, and the federal branches / federalism / citizenship benchmarks carry the general civics ladder. 9-12.GOV.17 and 9-12.GOV.52 (media/misinformation and media influence on elections) carry the catalog's media/source-literacy method. Transcribed verbatim from the Idaho SDE's 11/20/2025-revised standards (see the file header for provenance).",
      standards: [
        // — Idaho's own state and local government (the flagship's home) —
        {
          code: "9-12.GOV.45",
          text: "Explain the organization and powers of state and local government as described in the Constitution of the State of Idaho by analyzing legislative, executive, and judicial branches.",
          claimIds: [
            "civics.id-constitution",
            "civics.id-legislature-executive",
            "civics.id-courts",
            "civics.id-local-government",
          ],
          coverage: "full",
          note: "The flagship's primary home: Idaho's own government under the Constitution of the State of Idaho (1889) — the part-time citizen Legislature (35 districts, one senator and two representatives each), the plural executive (a separately elected Governor, Lieutenant Governor, Secretary of State, Controller, Treasurer, Attorney General, and Superintendent of Public Instruction), and the nonpartisan-election judiciary (the five-justice Supreme Court, the Court of Appeals, and the district courts) — is taught in depth, along with Idaho's counties, cities, and special districts.",
        },
        {
          code: "9-12.GOV.47",
          text: "Understand the structure, powers, and lawmaking process of local government (county, city, special district) by analyzing the relationships between state and local governments and the roles of regional authorities, governing boards, and commissions.",
          claimIds: ["civics.id-local-government", "civics.local-government-layers"],
          coverage: "full",
          note: "Near-1:1: Idaho's 44 counties (each under a three-member Board of County Commissioners), cities, and special districts — the standard's own three categories — are each taught, along with how those bodies make local rules and take part.",
        },
        {
          code: "9-12.GOV.54",
          text: "Explain the role of state governments in administering elections and compare different state’s voting rules and elections laws.",
          claimIds: ["civics.id-elections", "civics.election-mechanics"],
          coverage: "full",
          note: "Idaho's administration of its own elections — Election Day registration, the closed party primary, and the county-clerk machinery — is taught as Idaho's, and the general registration/primary/count mechanics and the verify-your-own-registration walkthrough carry the comparative piece.",
        },
        {
          code: "9-12.GOV.46",
          text: "Compare the lawmaking process at the national, state, and local level.",
          claimIds: ["civics.federal-bill-process", "civics.id-lawmaking", "civics.local-government-layers"],
          coverage: "full",
          note: "All three levels the standard names are taught: the federal lawmaking process end to end, how a bill becomes an Idaho law in the Legislature (with the citizen initiative as the second route), and how local bodies make rules.",
        },
        {
          code: "9-12.GOV.48",
          text: "Compare partisan and non-partisan offices and elections.",
          claimIds: ["civics.id-courts", "civics.id-elections"],
          coverage: "full",
          note: "Idaho's contrast is taught directly: its judges are chosen in nonpartisan elections, while its legislative and executive offices are filled through partisan elections (the closed party primary).",
        },
        // — Foundations of the American Political System (constitutional principles) —
        {
          code: "9-12.GOV.3",
          text: "Identify the strengths and weaknesses of the Articles of Confederation.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "full",
          note: "Why the Articles of Confederation failed and how that led to the 1787 Constitution is taught directly.",
        },
        {
          code: "9-12.GOV.6",
          text: "Describe the purposes and functions of government as outlined in the Preamble of the Constitution.",
          claimIds: ["civics.preamble-purposes"],
          coverage: "full",
          note: "The Preamble is worked clause by clause as the purposes of government.",
        },
        {
          code: "9-12.GOV.7",
          text: "Describe limited government within the Constitution, including: • Checks and balances • Popular sovereignty • Rule of law • Federalism • Separation of powers • Judicial review • Majority rule and protection of minority rights",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.judicial-review-marbury",
          ],
          coverage: "full",
          note: "The standard's list — checks and balances, popular sovereignty, rule of law, federalism, separation of powers, and judicial review — is taught directly through the Constitution course and Marbury v. Madison.",
        },
        {
          code: "9-12.GOV.8",
          text: "Describe the structure of the Constitution and the process to amend it.",
          claimIds: ["civics.constitution-article-by-article", "civics.article-v-amendment"],
          coverage: "full",
          note: "The Constitution is analyzed article by article, and Article V's amendment procedure is taught by name.",
        },
        {
          code: "9-12.GOV.9",
          text: "Analyze how the Bill of Rights limits the powers of the government and ensures individual rights.",
          claimIds: ["civics.bill-of-rights-origin", "civics.bill-of-rights-overview", "rights.limits-on-rights"],
          coverage: "full",
          note: "The Bill of Rights (Amendments I-X) as a document, what it protects, and when government may and may not limit a right are each taught.",
        },
        // — Function and Structure of the U.S. Political System (the general federal ladder) —
        {
          code: "9-12.GOV.30",
          text: "Analyze Article I and the 17th Amendment of the Constitution as they relate to the legislative branch, including eligibility for office, roles, duties, casework, length of terms, and election to office for representatives and senators.",
          claimIds: ["civics.federal-articles-i-iii", "civics.three-branches-federal"],
          coverage: "full",
          note: "Article I's structure — the two chambers, eligibility, terms, and election to office — is taught end to end in the Constitution and Civics courses.",
        },
        {
          code: "9-12.GOV.33",
          text: "Describe the process of how a bill becomes law.",
          claimIds: ["civics.federal-bill-process"],
          coverage: "full",
          note: "The complete federal lawmaking process — introduction, committee review, floor votes in both chambers, and presidential action through the veto override — is taught end to end.",
        },
        {
          code: "9-12.GOV.34",
          text: "Describe the powers of United States’ Congress, including appropriations, declaration of war, commerce, implied powers, confirmations, necessary and proper clauses, and powers of impeachment and oversight.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.federal-articles-i-iii"],
          coverage: "partial",
          note: "The commerce power, implied powers, and the Necessary and Proper Clause are taught by name through the enumerated/implied/reserved taxonomy and McCulloch v. Maryland; the appropriations, war, confirmation, impeachment, and oversight powers are not each a dedicated unit, so this is partial.",
        },
        {
          code: "9-12.GOV.35",
          text: "Analyze Article II of the Constitution as it relates to the executive branch, including appointments, oath of office, Commander-in-chief of the military, powers of the president, eligibility for office, succession (25th Amendment), executive orders, treaties, length of term (20th and 22nd Amendments).",
          claimIds: ["civics.federal-articles-i-iii", "civics.three-branches-federal", "civics.electoral-college"],
          coverage: "partial",
          note: "Article II's executive role, eligibility, and election to office (including the Electoral College) are taught; the standard's executive orders, treaties, succession under the 25th Amendment, and the 20th/22nd-Amendment term rules are not each a dedicated unit, so this is partial.",
        },
        {
          code: "9-12.GOV.37",
          text: "Explain the Electoral College system, and how it has evolved over time, and compare arguments for and against it.",
          claimIds: ["civics.electoral-college"],
          coverage: "full",
          note: "The Electoral College's mechanics and its original purpose and modern relevance — including the arguments for and against it — are taught directly.",
        },
        {
          code: "9-12.GOV.38",
          text: "Analyze Article III of the Constitution as it relates to judicial power, including the length of terms and the jurisdiction of the U.S. Supreme Court.",
          claimIds: ["civics.federal-judiciary-structure", "civics.federal-articles-i-iii"],
          coverage: "full",
          note: "Article III's judicial power, the federal judiciary from district courts to the Supreme Court, and the Court's jurisdiction are each taught.",
        },
        {
          code: "9-12.GOV.39",
          text: "Analyze the origin and evolution of the modern federal court structure including the Judiciary Act of 1789.",
          claimIds: ["civics.federal-judiciary-structure"],
          coverage: "partial",
          note: "The modern federal court structure — district courts, circuit courts of appeals, and the Supreme Court — is taught; the origin narrative and the Judiciary Act of 1789 by name are not, so this is partial.",
        },
        {
          code: "9-12.GOV.40",
          text: "Explain the processes of selection and confirmation of Supreme Court justices.",
          claimIds: ["civics.scotus-nomination-confirmation"],
          coverage: "full",
          note: "Article II advice-and-consent, the Judiciary Committee, and the simple-majority confirmation rule after 2013/2017 are taught by name.",
        },
        {
          code: "9-12.GOV.41",
          text: "Describe the Supreme Court’s role, established by Marbury vs. Madison, in determining the constitutionality of laws and acts of the legislative and executive branches.",
          claimIds: ["civics.judicial-review-marbury"],
          coverage: "full",
          note: "Judicial review is taught by name through the standard's own example, Marbury v. Madison.",
        },
        {
          code: "9-12.GOV.43",
          text: "Explain the functions, powers, interactions, and dynamic relationships among federal, state, local, and tribal governments including the roles of the 10th Amendment, McCulloch vs Maryland, Gibbons vs. Ogden, and evolution from dual federalism to cooperative federalism.",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy"],
          coverage: "partial",
          note: "Federalism, the Tenth Amendment's reserved powers, and McCulloch v. Maryland are taught by name; the tribal-government dimension, Gibbons v. Ogden, and the dual-to-cooperative-federalism evolution are not, so this is partial.",
        },
        // — Citizenship and Civic Participation —
        {
          code: "9-12.GOV.13",
          text: "Describe, at the national, state, and local level, what should be reasonably expected from any citizen or resident of the U.S. and explain why it is important for the well-being of the nation, including being informed on civic issues, serving in the military or alternative service, obeying the law, paying taxes, volunteering, and performing public service, respecting the rights of others, serving as a juror, and voting.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service", "civics.voter-registration"],
          coverage: "partial",
          note: "The rights and responsibilities of citizenship, jury service as an entire course, and registering and voting are each taught as practice; the standard's military/alternative-service and tax-paying duties are not dedicated units, so this is partial.",
        },
        {
          code: "9-12.GOV.16",
          text: "Explain the role and evolution of political parties in governing and in the recruitment/election of political candidates and the importance of and difference between primaries, caucuses, and general elections.",
          claimIds: ["civics.election-mechanics"],
          coverage: "partial",
          note: "The difference between primaries, caucuses, and general elections is taught directly; the role and historical evolution of political parties in governing and candidate recruitment is not, so this is partial.",
        },
        {
          code: "9-12.GOV.17",
          text: "Evaluate the role of the media/social media as a means of communicating information/misinformation and how it influences the importance of issues and public opinion.",
          claimIds: [
            "bvc.media-fallacies-recurring",
            "bvc.reading-ads-for-omission",
            "bvc.source-evaluation-modelled",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Reading media and messages for credibility, bias, and omission — the standard's exact skill — is the media-literacy method run in every episode, with a checkable bibliography published each time.",
        },
        {
          code: "9-12.GOV.18",
          text: "Describe the means that citizens use to responsibly participate in the political process, including campaigning, petitioning, demonstrating, running for office, lobbying, and voting.",
          claimIds: [
            "civics.campaign-help",
            "civics.run-for-office",
            "civics.show-up-every-level",
            "civics.voter-registration",
            "civics.ballot-measures-local-causes",
          ],
          coverage: "full",
          note: "The standard's own means — campaigning (helping a campaign lawfully), petitioning and ballot measures, running for office, showing up where issues are decided, and voting — are each taught end to end.",
        },
        {
          code: "9-12.GOV.19",
          text: "Explain the requirements to be considered a natural-born U.S. citizen, and describe the process of naturalization, including the knowledge required by the Naturalization Test.",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "full",
          note: "Birthright (natural-born) citizenship under the 14th Amendment and the naturalization process — eligibility step by step — are each taught in the dedicated Citizenship & Naturalization course.",
        },
        {
          code: "9-12.GOV.21",
          text: "Identify and be able to engage with key officials, both elected and appointed, in the legislative, executive, and judicial branches at the federal, state, and local levels.",
          claimIds: ["civics.show-up-every-level", "civics.id-get-involved", "civics.track-a-bill"],
          coverage: "partial",
          note: "Where and how to be heard at every level, tracking a live bill, and getting involved where you live in Idaho are taught as practice; a systematic map of every key elected and appointed official is not, so this is partial.",
        },
        {
          code: "9-12.GOV.22",
          text: "Distinguish between civil rights and civil liberties and how they are put into practice in our daily lives.",
          claimIds: ["civics.bill-of-rights-overview", "rights.limits-on-rights"],
          coverage: "partial",
          note: "The civil liberties in the Bill of Rights — speech, religion, press, assembly, and the Fourth Amendment — are taught in depth as they apply in daily life; the standard's explicit civil-rights-vs-civil-liberties distinction is not drawn as a named contrast, so this is partial.",
        },
        {
          code: "9-12.GOV.23",
          text: "Evaluate the Supreme Court’s interpretations of the freedoms articulated in the First Amendment, including Schenck v. United States, New York Times v. United States, Engel v. Vitale, Miller v. California, Tinker v. Des Moines, Texas v. Johnson, and Kennedy v. Bremerton.",
          claimIds: ["rights.landmark-cases"],
          coverage: "partial",
          note: "Tinker v. Des Moines — one of the standard's named cases — is taught as a rule a student can apply, and school and online speech are taught directly; the other named First-Amendment cases (Schenck, New York Times, Engel, Miller, Texas v. Johnson, Kennedy) are not each covered, so this is partial.",
        },
        {
          code: "9-12.GOV.24",
          text: "Evaluate the Supreme Court’s interpretations of freedoms in the Fourth through Eighth Amendments, including Mapp v. Ohio, Gideon v. Wainwright, and Miranda v. Arizona.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "The Fourth Amendment — searches, stops, and the digital-privacy line through Mapp, Terry, Riley, and Carpenter — is taught in depth; the standard's Fifth/Sixth-Amendment cases (Gideon, Miranda) are not, so this is partial.",
        },
        // — The American Electoral System —
        {
          code: "9-12.GOV.49",
          text: "Describe the evolution of voting (methods and process) and enfranchisement including key amendments (15th, 19th, 23rd, 24th, 26th) and laws (1965 Voting Rights Act) that have extended the right to vote to previously disenfranchised Americans.",
          claimIds: ["civics.election-mechanics", "civics.voter-registration"],
          coverage: "partial",
          note: "Voting methods and process — registration, primaries, how you vote, and counting — are taught in depth; the enfranchisement amendment history and the 1965 Voting Rights Act by name are not a dedicated unit, so this is partial.",
        },
        {
          code: "9-12.GOV.50",
          text: "Examine campaign finance laws and campaign funding and spending, including the impact of Supreme Court decisions, the nationalization of campaign financing, and the role of interest groups.",
          claimIds: ["civics.campaign-help"],
          coverage: "partial",
          note: "The everyday campaign-finance rules a supporter must follow — the donation limits and disclosure guardrails — are taught; the Supreme Court's campaign-finance jurisprudence and the nationalization of campaign money are not, so this is partial.",
        },
        {
          code: "9-12.GOV.51",
          text: "Describe the nomination and election process in American national and state elections, including the Electoral College.",
          claimIds: ["civics.election-mechanics", "civics.electoral-college"],
          coverage: "full",
          note: "The nomination-and-election process — registration, primaries and caucuses, how you vote, the count, and the Electoral College — is taught end to end.",
        },
        {
          code: "9-12.GOV.52",
          text: "Analyze the influence of political parties, media coverage, campaign advertising, interest groups, public opinion polls, social media, and digital communications on elections.",
          claimIds: ["bvc.media-fallacies-recurring", "bvc.reading-ads-for-omission", "media.misleading-statistics"],
          coverage: "partial",
          note: "The influence of media coverage, campaign advertising, social media, and digital communications on opinion — reading each message for what it leaves out — is the catalog's media-literacy method; the roles of political parties, interest groups, and public-opinion polling specifically are not covered, so this is partial.",
        },
        {
          code: "9-12.GOV.55",
          text: "Evaluate the challenges of the election process.",
          claimIds: ["civics.election-mechanics"],
          coverage: "partial",
          note: "The integrity machinery a challenge tests — counting, canvassing, and certifying the vote — is taught; a systematic survey of contemporary election-process challenges is not, so this is partial.",
        },
      ],
    },
    // ── Literacy for grades 11/12 (Idaho Content Standards for English Language Arts/Literacy, 2022) ──
    {
      id: "id-literacy",
      subject: "English/Language Arts",
      name: "Idaho Content Standards for English Language Arts/Literacy — Grades 11/12 (Reading Comprehension, Research, Oral & Digital Communications)",
      publisher: "Idaho State Department of Education / State Board of Education",
      version:
        "Idaho Content Standards for English Language Arts/Literacy (January 3, 2022) · Grades 11/12 · Reading Comprehension (RC), Research (RS), and Oral and Digital Communications (ODC) strands",
      fetchedOn: "2026-07-19",
      sourceUrl: ID_ELA,
      adoption:
        "Idaho adopted the Common Core for ELA as the Idaho Core, but its current (January 3, 2022) standards REORGANIZED the standards away from the Common Core RH/RI/WHST strand and code structure entirely, so these are transcribed VERBATIM from Idaho's own document rather than aliased to the shared Common Core file — the RH/RI/WHST codes no longer exist in Idaho. We claim no mathematics standards.",
      standards: [
        {
          code: "11/12.RC.NF.6b",
          text: "Evaluate various explanations of concepts and ideas and determine which explanation best accords with textual evidence, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
        },
        {
          code: "11/12.RC.NF.6c",
          text: "Evaluate the effectiveness of the structure(s) and rhetorical devices authors use in their exposition or argument, including whether the structure helps makes points clear, convincing, and engaging.",
          claimIds: ["bvc.rhetoric-power-persuasion", "bvc.author-rhetoric-primary-texts"],
          coverage: "full",
          note: "Analyzing how an author's style and structure make a text persuasive — the standard's exact skill — is done directly with effective primary texts.",
        },
        {
          code: "11/12.RC.NF.6d",
          text: "Analyze the hypotheses, data, analysis, and conclusions in an argument, verifying the data when possible and corroborating or challenging conclusions with other sources of information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "Corroborating or challenging an argument's conclusions with other information is the catalog's claims-and-evidence method, run against advertising, labels, and campaign language.",
        },
        {
          code: "11/12.RC.NF.6e",
          text: "Evaluate the premises and purposes in works of public advocacy.",
          claimIds: ["bvc.reading-ads-for-omission", "bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "Reading a work of public advocacy for its premises and purpose — what it is really arguing and what it leaves out — is the media-literacy method run in every episode.",
        },
        {
          code: "11/12.RC.TE.3",
          text: "Draw and cite strong and thorough evidence from grade-level texts to support claims and inferences, attending to important distinctions authors make and how those are supported, as well as any gaps or inconsistencies in accounts offered.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.source-evaluation-modelled"],
          coverage: "full",
          note: "Attending to the distinctions authors make and to the gaps or inconsistencies in their accounts — the standard's exact skill — is the whose-voice method: a planter's euphemism read against first-person accounts by formerly enslaved writers.",
        },
        {
          code: "11/12.ODC.DC.6",
          text: "Integrate multiple sources of information presented in diverse digital media to make informed decisions and solve problems, evaluating the credibility and accuracy of each source and noting any discrepancies among the data.",
          claimIds: ["bvc.source-evaluation-modelled", "media.marketing-omissions"],
          coverage: "full",
          note: "Integrating and weighing multiple digital sources for credibility and accuracy — the standard's exact skill — is the source-evaluation method modelled across the catalog and taught as an everyday consumer skill.",
        },
        {
          code: "11/12.RS.IP.1",
          text: "Conduct brief as well as multi-day research projects to take some action or share findings orally or in writing by formulating multiple interlocking research questions that span the field of inquiry in time and scope; gathering relevant information efficiently from a variety of authoritative sources, as well as from direct observation, interviews, and surveys; making distinctions about the strengths and limitations of each source in terms of the task, purpose, and audience, noting any discrepancies among the data; and following a standard approved format (e.g., APA, MLA, Chicago) for citations and bibliographies.",
          claimIds: [
            "bvc.coffee-project-synthesis",
            "bvc.coffee-project-sources-ethics",
            "bvc.coffee-project-research-process",
          ],
          coverage: "partial",
          note: "The Coffee episode ships a graded multi-week research project that gathers authoritative sources, weighs their strengths and limitations, and cites them in APA — squarely meeting this standard where it runs; only that one episode currently ships the graded project, so this is partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — Common Core adopted as the Idaho Core: nothing claimed.",
      body: "Idaho adopted the Common Core State Standards for mathematics as the Idaho Core, but this catalog does no mathematics instruction, so it meets no Idaho mathematics standard.",
    },
    {
      heading: "Science — Idaho's OWN 2018 standards (revised NGSS/climate language): deferred, not aliased.",
      body: "Idaho did not adopt the Next Generation Science Standards verbatim. During its 2016-2018 review, Idaho notably revised and removed climate-change and human-impact language from the NGSS-derived standards, so Idaho's HS Earth and Space Science standards are its own, not a byte-for-byte NGSS republication. Our rule is verbatim-or-nothing, so — unlike NGSS-verbatim states, which reuse the shared NGSS mapping — we do NOT alias the shared NGSS framework here and DEFER Idaho's science standards rather than cite text we have not confirmed matches. The catalog's climate/resource content (resources, hazards, and climate shaping human activity) would map to Idaho's Earth and Space Science standards; that is deferred, not denied.",
    },
    {
      heading: "English/Language Arts — Idaho reorganized away from Common Core, so NOT aliased.",
      body: "Idaho adopted the Common Core for ELA as the Idaho Core, but the current (January 3, 2022) Idaho Content Standards for English Language Arts/Literacy reorganized the standards entirely: the Common Core RH/RI/WHST strands and codes no longer exist, and grades 11/12 are organized under Reading Comprehension, Vocabulary Development, Research, Writing, Oral and Digital Communications, and Grammar and Conventions strands with Idaho's own codes. Aliasing the shared Common Core ELA framework would misrepresent Idaho's standards as codes it no longer uses, so we transcribe Idaho's own verbatim literacy standards in the id-literacy framework above.",
    },
    {
      heading: "Idaho's own state structure is taught more fully than any one code captures.",
      body: "Idaho Civics teaches the 1889 Constitution, the separately elected plural executive (Governor, Lieutenant Governor, Secretary of State, Controller, Treasurer, Attorney General, and Superintendent of Public Instruction), the nonpartisan-election judiciary and its Idaho Judicial Council vacancy process, the 35-district citizen Legislature, and the initiative, referendum, and recall reserved to the people — from Idaho's own sources. 9-12.GOV.45 (state and local government per the Idaho Constitution) hosts most of it, but Idaho's specific direct-democracy tools and judicial-selection design have no code of their own beyond that state-government benchmark.",
    },
    {
      heading: "Tribal governments and dual citizenship of American Indians (9-12.GOV.20, 9-12.GOV.44).",
      body: "Idaho's American Government course carries a dedicated benchmark on the dual citizenship of American Indians (9-12.GOV.20) and on tribal sovereignty and the federal trust responsibility with emphasis on Idaho's federally recognized tribes (9-12.GOV.44). Idaho Civics teaches Idaho's state and local structure but not tribal government, so these are not claimed. The gap is in the course, not the standards.",
    },
    {
      heading: "The Political Economy cluster (9-12.GOV.26-29) and the Economics course (9-12.EC.1-19).",
      body: "Idaho's American Government course includes a Political Economy cluster (free enterprise, market rules, taxation, and the Federal Reserve's monetary policy) and a separate high-school Economics course (9-12.EC.*). This catalog's economics content is world-history commodity economics (value chains, trade barriers, market vs. traditional economies) rather than U.S. political economy, public finance, or personal finance, so we do not claim the Political Economy benchmarks or the Economics course.",
    },
    {
      heading: "The political-science and history-of-government benchmarks we checked and rejected.",
      body: "9-12.GOV.1 (Enlightenment thinkers and classical influences on the Founding), 9-12.GOV.2 (the Declaration and grievances as named content), 9-12.GOV.4 (the Constitutional Convention, Great Compromise, and ratification debate), 9-12.GOV.5 (the Federalist Papers Essays 10 and 51 and the Anti-Federalist Papers), 9-12.GOV.10 (democracy vs. republic), 9-12.GOV.11 (shared American values), 9-12.GOV.12 (the Declaration's definition of ideal government), 9-12.GOV.14 (comparing political ideologies), 9-12.GOV.15 (federal and state roles in the Civil Rights Movement), 9-12.GOV.25 (the 14th-Amendment case list — Plessy, Roe, Dobbs, Loving, Obergefell, Brown, etc.), 9-12.GOV.31 (the census, redistricting, and Baker v. Carr), 9-12.GOV.32 (legislative leadership positions), 9-12.GOV.36 (executive departments and the administrative state), 9-12.GOV.42 (judicial philosophies — originalism, textualism, activism), 9-12.GOV.53 (reapportionment and redistricting), and 9-12.GOV.56-59 (comparative political systems, U.S. foreign policy, and the international system) — the courses do not genuinely teach these, or teach them too thinly to claim, so we do not claim them.",
    },
  ],
};
