// ─────────────────────────────────────────────────────────────────────────────
// MASSACHUSETTS — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ma` was written FROM Massachusetts's own official sources (malegislature.gov,
// sec.state.ma.us, mass.gov/courts, and the 1780 Massachusetts Constitution), so Massachusetts's
// civics flagship gets its 1:1 state-civics course, and — unusually — a real home in the standards.
//
// THE INHERIT-VS-BESPOKE CALL (made per framework, from DESE's own 2018 document, not assumed):
//   · Social studies — BESPOKE. Common Core never covered it, and the 2018 Massachusetts History
//     and Social Science Framework is Massachusetts's own. It is one of the strongest in the nation
//     for reaching a state's OWN government: the grade 8 Civics course "United States and
//     Massachusetts Government and Civic Life" (Topic 6) and the high-school United States
//     Government and Politics elective (Topic 2) name the "Massachusetts Constitution," the
//     "Commonwealth of Massachusetts," the General Court, the Supreme Judicial Court, and open town
//     meeting EXPLICITLY — so the flagship's Massachusetts-structure lessons are mapped as genuine
//     (not stretched) claims, unlike Arkansas/California/New York where the state's civics standards
//     were overwhelmingly federal.
//   · English language arts / literacy — BESPOKE (Common-Core–based but Massachusetts-revised, 2017).
//     Massachusetts adopted the Common Core in 2010 but revised it into its own 2017 ELA & Literacy
//     Framework, whose Literacy Standards for History and Social Science are embedded in this 2018
//     HSS framework. We COMPARED the grades 11–12 standards we cite against our shared Common Core
//     file: the three Reading standards (RCA-H.6/.8/.9) are word-for-word identical to CCSS
//     RH.11-12.6/.8/.9, but Massachusetts relabels the codes (RCA-H, not RH) and REVISED the writing
//     standards — WCA.8 prepends "When conducting research," to the CCSS WHST.11-12.8 text. Because
//     the text is not uniformly verbatim and Massachusetts prints its own codes, we map a bespoke
//     Massachusetts framework with Massachusetts's own codes and verbatim text rather than aliasing
//     the shared file. (We claim no mathematics standards.)
//   · Science — Massachusetts's Science and Technology/Engineering (STE) Standards are Massachusetts's
//     OWN (NGSS-influenced but not verbatim NGSS), and they live in a SEPARATE framework document we
//     did not fetch this pass. Our rule is fetch-or-don't-cite, so Massachusetts gets no science
//     claim; see notClaimed.
//
// Provenance: doe.mass.edu refuses connections from our tooling (HTTP 403), so the framework was
// retrieved through the Wayback Machine and transcribed from the archived copy of DESE's own titled
// PDF (Massachusetts Curriculum Framework for History and Social Science, Grades Pre-K to 12),
// fetched 2026-07-18:
//   · byte-faithful mirror: https://web.archive.org/web/20260628162903id_/https://www.doe.mass.edu/frameworks/hss/2018-12.pdf
//   · canonical DOE link (sourceUrl below): https://www.doe.mass.edu/frameworks/hss/2018-12.pdf
// CODES: the grade 8 course prints one bracket per topic ("[8.T6]") and numbers each standard, so we
// cite grade.topic.item ("8.T6.8"), DESE's own convention. The high-school electives print the
// framework tag once ("[GOV]", "[ECON]") and a topic tag per topic ("[T2]"), so we cite
// framework.topic.item ("GOV.T2.3"); the history courses print a combined topic tag ("[USII.T2]"),
// so we cite that plus the item ("USII.T2.1"). Standard text is transcribed verbatim, including the
// source document's own bracketed sub-bullets and one printed typo (8.T5.1, quoted as-is).
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const HSS_2018 = "https://www.doe.mass.edu/frameworks/hss/2018-12.pdf";
const PUBLISHER =
  "Massachusetts Department of Elementary and Secondary Education (DESE) / Board of Elementary and Secondary Education";

export const JURISDICTION: JurisdictionFile = {
  state: "MA",
  frameworks: [
    // ── Grade 8 Civics: United States and Massachusetts Government and Civic Life ──
    {
      id: "ma-grade8-civics",
      subject: "Social Studies",
      name: "History and Social Science Framework — Grade 8: United States and Massachusetts Government and Civic Life (Civics)",
      publisher: PUBLISHER,
      version: "2018 Massachusetts Curriculum Framework (adopted June 2018)",
      fetchedOn: "2026-07-18",
      sourceUrl: HSS_2018,
      adoption:
        "Massachusetts requires a full-year grade 8 Civics course, and a student-led civics project, under Chapter 296 of the Acts of 2018. This is where Massachusetts Civics — the flagship, written from Massachusetts's own sources — is mapped, especially Topic 6 (the structure of Massachusetts state and local government), which names the Commonwealth's own institutions. The federal-government topics are mapped to the general civics ladder. Codes are cited grade.topic.item (8.T6.8), DESE's own convention.",
      standards: [
        {
          code: "8.T6.8",
          text: "Explain the leadership structure of the government of the Commonwealth of Massachusetts and the function of each branch a. the executive branch (governor and agencies) b. the legislative branch (state representatives and state senators) c. courts of law (Supreme Judicial Court, lower court system)",
          claimIds: ["civics.ma-state-structure", "civics.ma-courts-appointed"],
          coverage: "full",
          note: "This is the flagship's home: Massachusetts's own three branches — the General Court (a 160-member House and a 40-member Senate), the plural executive, and the Supreme Judicial Court with its appoint-and-confirm-by-the-Governor's-Council judiciary — are taught in depth as Massachusetts's.",
        },
        {
          code: "8.T6.10",
          text: "Explain the major components of local government in Massachusetts, including the roles and functions of mayors, city councils, and school committees in cities; town managers, select boards, representative and open town meetings and school committees, in towns, and courts and sheriff’s departments in counties.",
          claimIds: ["civics.ma-local-government", "civics.local-government-layers"],
          coverage: "full",
          note: "Massachusetts local government is taught as Massachusetts's: mayors and city councils, town managers and select boards, representative and open town meeting, and the county layer — with the flagship adding the distinctive story of the county governments abolished around 1997–2000.",
        },
        {
          code: "8.T6.1",
          text: "Compare and contrast the functions of state government and national government.",
          claimIds: ["civics.federalism-why-split-power", "civics.local-government-layers"],
          coverage: "full",
          note: "The division of functions between state and nation is taught head-on in a dedicated federalism course, and the responsibilities of state and local government get their own lessons.",
        },
        {
          code: "8.T6.2",
          text: "Describe provisions of the United States Constitution and the Massachusetts Constitution that define and distribute powers and authority of the federal or state government.",
          claimIds: ["civics.ma-constitution", "civics.separation-checks-balances"],
          coverage: "partial",
          note: "The Massachusetts Constitution of 1780 is taught as the document that structures the Commonwealth's government, alongside separation of powers and checks and balances. But a systematic walk through the specific constitutional provisions that distribute each power is not assembled here.",
        },
        {
          code: "8.T6.5",
          text: "Explain why the Tenth Amendment to the United States Constitution is important to state government and identify the powers granted to states by the Tenth Amendment and the limits to state government outlined in it.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.federalism-why-split-power"],
          coverage: "full",
          note: "The Tenth Amendment and reserved powers are taught by name as part of the powers taxonomy, in the course that works why power is divided between state and nation.",
        },
        {
          code: "8.T2.2",
          text: "Analyze the weaknesses of the national government under the Articles of Confederation; and describe the crucial events (e.g., Shays’ Rebellion) leading to the Constitutional Convention.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "full",
          note: "Why the Articles of Confederation failed and how that led to the 1787 Constitution is taught as its own lesson.",
        },
        {
          code: "8.T2.5",
          text: "Summarize the Preamble and each article in the Constitution, and the rights enumerated in the Bill of Rights; explain the reasons for the addition of the Bill of Rights to the Constitution in 1791.",
          claimIds: [
            "civics.preamble-purposes",
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
          ],
          coverage: "full",
          note: "The Preamble is worked clause by clause, the Constitution is analyzed article by article, and the Bill of Rights is taught as a document with its 1791 origin.",
        },
        {
          code: "8.T3.1",
          text: "Distinguish the three branches of government (separation of powers): • Congress as the legislative branch • the Presidency and the executive agencies as the executive branch and • the Supreme Court and other federal inferior courts as the judicial branch",
          claimIds: ["civics.three-branches-federal", "civics.separation-checks-balances"],
          coverage: "full",
          note: "The three federal branches and the separation of powers among them are taught directly.",
        },
        {
          code: "8.T3.4",
          text: "Explain the process of elections in the legislative and executive branches and the process of nomination/confirmation of individuals in the judicial and executive branches.",
          claimIds: [
            "civics.election-mechanics",
            "civics.electoral-college",
            "civics.scotus-nomination-confirmation",
          ],
          coverage: "full",
          note: "Elections mechanics (including the Electoral College) and the Article II nomination-and-confirmation of judges and agency heads are both taught in depth.",
        },
        {
          code: "8.T4.1",
          text: "Explain the different ways one becomes a citizen of the United States.",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "full",
          note: "Birthright citizenship (the 14th Amendment, jus soli), citizenship through parents, and naturalization eligibility are taught as the legal ways one becomes a citizen.",
        },
        {
          code: "8.T4.2",
          text: "Describe the rights and responsibilities of citizens (e.g., voting, serving as a juror, paying taxes, serving in the military, running for and holding elected office) as compared to non-citizens.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service"],
          coverage: "full",
          note: "The responsibilities the standard names are taught as practices: voting, jury service (an entire course), staying informed, and running for office.",
        },
        {
          code: "8.T5.5",
          text: "Explain the principle of judicial review established in Marbury v. Madison (1803) and explain how cases come before the Supreme Court, how cases are argued, and how the Court issues decisions and dissents.",
          claimIds: [
            "civics.judicial-review-marbury",
            "civics.federal-judiciary-structure",
            "rights.scotus-precedent",
          ],
          coverage: "full",
          note: "Judicial review through Marbury v. Madison, how cases reach the Court, and how majority, concurrence, and dissent are written are all taught directly.",
        },
        {
          code: "8.T5.6",
          text: "Research, analyze, and report orally or in writing on one area (a, b, or c, below) in which Supreme Court decisions have made significant changes over time in citizens’ lives.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent"],
          coverage: "partial",
          note: "The standard's own case menu names Tinker v. Des Moines and Mapp v. Ohio, which the Know Your Rights course teaches as applicable rules, along with how precedent expands rights over time. Most of the other enumerated cases are different ones, so we claim the case-application skill, not the full menu.",
        },
        {
          code: "8.T7.5",
          text: "Explain methods for evaluating information and opinion in print and online media (e.g., determining the credibility of news articles; analyzing the messages of editorials and op-ed commentaries; assessing the validity of claims and sufficiency of evidence).",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.evaluate-claims-fallacies",
            "bvc.reading-ads-for-omission",
          ],
          coverage: "partial",
          note: "The skill the standard asks for — determining source credibility and assessing the validity of claims and the sufficiency of evidence — is a recurring method across the curriculum, and a checkable bibliography is published. But it is practiced on advertising, marketing, and historical primary sources rather than on news articles and editorials specifically.",
        },
      ],
    },

    // ── High School Elective: United States Government and Politics [GOV] ──
    {
      id: "ma-us-government",
      subject: "Social Studies",
      name: "History and Social Science Framework — High School Elective: United States Government and Politics",
      publisher: PUBLISHER,
      version: "2018 Massachusetts Curriculum Framework (adopted June 2018)",
      fetchedOn: "2026-07-18",
      sourceUrl: HSS_2018,
      adoption:
        "Massachusetts's full-year United States Government and Politics elective builds on the grade 8 Civics course. Its Topic 2 (purposes, principles, and institutions of government) again names the Massachusetts Constitution, Massachusetts town and city government, and the Massachusetts courts explicitly, giving the flagship a second home. Codes are cited framework.topic.item (GOV.T2.3).",
      standards: [
        {
          code: "GOV.T2.3",
          text: "Explain the difference between a town and a city form of government in Massachusetts, including the difference between a representative and an open-town meeting.",
          claimIds: ["civics.ma-local-government"],
          coverage: "full",
          note: "The town-versus-city forms and the difference between representative and open town meeting are exactly the flagship's Massachusetts local-government lesson.",
        },
        {
          code: "GOV.T2.6",
          text: "Explain the functions of the courts of law in the governments of the United States and the state of Massachusetts with emphasis on the principles of judicial review and an independent judiciary.",
          claimIds: [
            "civics.ma-courts-appointed",
            "civics.federal-judiciary-structure",
            "civics.judicial-review-marbury",
          ],
          coverage: "full",
          note: "The Massachusetts courts (the Supreme Judicial Court and the appoint-confirm-serve-to-70 judiciary that keeps judges independent of elections) are taught as Massachusetts's, beside the federal judiciary and judicial review.",
        },
        {
          code: "GOV.T2.2",
          text: "Identify and describe provisions of the United States Constitution and the Massachusetts Constitution that define and distribute powers and authority of the federal or state government.",
          claimIds: ["civics.ma-state-structure", "civics.ma-constitution", "civics.separation-checks-balances"],
          coverage: "partial",
          note: "The Massachusetts Constitution and the Commonwealth's own structure (the General Court, the plural executive) are taught, alongside separation of powers. The clause-by-clause identification of every power-distributing provision is not attempted.",
        },
        {
          code: "GOV.T2.1",
          text: "Compare and contrast governments that are unitary, confederate, and federal.",
          claimIds: ["civics.federalism-why-split-power"],
          coverage: "full",
          note: "Why the United States is federal rather than unitary or confederate is taught head-on, with the founding cases.",
        },
        {
          code: "GOV.T1.6",
          text: "Using founding documents of the United States and Massachusetts, research, analyze and interpret central ideas on government, including popular sovereignty, constitutionalism, republicanism, federalism, individual rights, the social contract and natural rights.",
          claimIds: ["civics.ma-constitution", "civics.constitution-article-by-article", "civics.federalism-why-split-power"],
          coverage: "partial",
          note: "The central ideas the standard names — popular sovereignty, constitutionalism, federalism, individual rights, natural rights — are taught, using the U.S. and Massachusetts constitutions. The open-ended research-and-interpret performance across a document set is a classroom task the online course prompts rather than assesses.",
        },
        {
          code: "GOV.T2.9",
          text: "Examine the constitutional principles of federalism, separation of powers among three branches of government, the system of checks and balances, republican government, representative democracy, and popular sovereignty. Analyze and evaluate one United States Supreme Court case that addresses these principles, and make an argument orally, in writing, or in a multimedia presentation, for either the majority or dissenting opinion in the case and explain what the case demonstrates about the relationship between the branches of government.",
          claimIds: ["civics.separation-checks-balances", "civics.judicial-review-marbury", "civics.federal-powers-taxonomy"],
          coverage: "partial",
          note: "The constitutional principles the standard names are taught directly, and landmark cases (Marbury, McCulloch) are taught as rules a student can apply. The graded case-argument performance for a majority or dissenting opinion is a classroom product the online course does not assess.",
        },
        {
          code: "GOV.T3.2",
          text: "Research, analyze, and present orally, in writing or through a multimedia presentation the historical context of two Supreme Court decisions on a topic related to individual rights and what the respective decisions demonstrate about how the protection of individual rights has evolved over time. Cite textual evidence to summarize key perspectives in the decisions and provide historical context for the particular decisions cited. Cases may include: Whitney v. California (1927), Stromberg v. California (1931), Near v. Minnesota (1931), Brandenburg v. Ohio (1969), Texas v. Johnson (1989), and Reno v. American Civil Liberties Union (1997)",
          claimIds: ["rights.scotus-precedent", "rights.landmark-cases"],
          coverage: "partial",
          note: "Brandenburg v. Ohio, in the standard's own case menu, is taught in Know Your Rights as an applicable rule, and how precedent expands rights over time is taught directly. The two-decision comparison performance and most of the other enumerated cases are not covered.",
        },
        {
          code: "GOV.T4.5",
          text: "Analyze current research on the impact of media on civic discourse and the importance of an informed citizenry that determines the credibility of sources and claims and exercises other sound media literacy skills.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.evaluate-claims-fallacies", "bvc.media-fallacies-recurring"],
          coverage: "partial",
          note: "Determining the credibility of sources and claims, and other media-literacy skills, are taught throughout the curriculum. But the practice is anchored in consumer marketing and advertising rather than in the civic and political-media discourse this standard targets.",
        },
      ],
    },

    // ── High School Elective: Economics [ECON] ──
    {
      id: "ma-economics",
      subject: "Social Studies",
      name: "History and Social Science Framework — High School Elective: Economics",
      publisher: PUBLISHER,
      version: "2018 Massachusetts Curriculum Framework (adopted June 2018)",
      fetchedOn: "2026-07-18",
      sourceUrl: HSS_2018,
      adoption:
        "Massachusetts's Economics elective is filed in the social studies department. The BVC commodity series supplies four of its standards — economic systems, price elasticity, trade barriers, and the free-trade debate — through real commodity markets. Codes are cited framework.topic.item (ECON.T7.3).",
      standards: [
        {
          code: "ECON.T1.7",
          text: "Compare and contrast how the various economic systems (traditional, market, command, mixed) try to answer the questions: What to produce? How to produce it? And for whom to produce it?",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Traditional (reciprocity) economies are contrasted with market economies directly and at length. The command and mixed systems the standard also names are reached only through the Poland case, not surveyed as economic systems.",
        },
        {
          code: "ECON.T2.10",
          text: "Use concepts of price elasticity of demand and supply to explain and predict changes in quantity as price changes.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Price elasticity of demand is taught explicitly — inelastic coffee demand absorbing a sharp price spike — but as one concept in context, not a full elasticity unit covering the supply side with schedules and graphs.",
        },
        {
          code: "ECON.T7.3",
          text: "Define trade barriers, such as quotas and tariffs.",
          claimIds: ["bvc.sugar-program-trade-barriers"],
          coverage: "full",
          note: "Trade barriers are taught concretely through the U.S. sugar program — its import quotas, price supports, and tariffs — worked in detail with its consumer cost.",
        },
        {
          code: "ECON.T7.8",
          text: "Evaluate the arguments for and against free trade.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap", "bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Who wins and who loses from global trade is the series' spine — value captured downstream, the commodity trap, and a protected market's costs. But it is taught as distribution and power along real commodity chains rather than as the formal for-and-against free-trade debate the standard frames.",
        },
      ],
    },

    // ── High School: United States History I [USI] ──
    {
      id: "ma-us-history-i",
      subject: "Social Studies",
      name: "History and Social Science Framework — High School: United States History I",
      publisher: PUBLISHER,
      version: "2018 Massachusetts Curriculum Framework (adopted June 2018)",
      fetchedOn: "2026-07-18",
      sourceUrl: HSS_2018,
      adoption:
        "United States History I runs from the colonial period to circa 1920. Its Topic 6 (industry and immigration) is where the catalog's Gilded Age labor history maps. Codes are cited as the document's combined topic tag plus item (USI.T6.2).",
      standards: [
        {
          code: "USI.T6.2",
          text: "Make connections among the important consequences of the Industrial Revolution (e.g., economic growth and the rise of big business; environmental impact of industries; the expansion of cities; the emergence of labor unions such as the Knights of Labor and the American Federation of Labor under Samuel Gompers; workers’ distrust of monopolies; the rise of the Populist Party under the leadership of William Jennings Bryan or the rise of the Socialist Party under Eugene Debs).",
          claimIds: ["history.gilded-age-labor", "history.triangle-fire-debs"],
          coverage: "partial",
          note: "The emergence of labor unions the standard names — the Knights of Labor, the AFL under Gompers, and the socialist movement under Debs — is taught in real depth (Haymarket, Homestead, Pullman, the Triangle fire). The strand's other consequences (big business, environmental impact, the Populist Party) are not this catalog's subject.",
        },
      ],
    },

    // ── High School: United States History II [USII] ──
    {
      id: "ma-us-history-ii",
      subject: "Social Studies",
      name: "History and Social Science Framework — High School: United States History II",
      publisher: PUBLISHER,
      version: "2018 Massachusetts Curriculum Framework (adopted June 2018)",
      fetchedOn: "2026-07-18",
      sourceUrl: HSS_2018,
      adoption:
        "United States History II covers the 20th and 21st centuries. Its Topic 2 (modernity in the United States) names Prohibition, the Harlem Renaissance, and the first Great Migration among the trends of the early 20th century — all taught in the catalog. Codes are cited as the combined topic tag plus item (USII.T2.1).",
      standards: [
        {
          code: "USII.T2.1",
          text: "Analyze primary sources (e.g., documents, audio or film recordings, works of art and artifacts), to develop an argument about how the conflict between traditionalism and modernity manifested itself in the major societal trends and events in first two decades of the 20th century.",
          claimIds: [
            "bvc.prohibition",
            "history.harlem-renaissance-black-press",
            "history.migration-streams-arrival",
          ],
          coverage: "partial",
          note: "Three of the standard's named early-20th-century trends are taught in depth — Prohibition (its causes, rhetoric, and results), the Harlem Renaissance and the Black press, and the first Great Migration — through primary sources. The full traditionalism-versus-modernity survey the standard frames (the Red Scare, the Scopes Trial, the eugenics movement) is not attempted.",
        },
      ],
    },

    // ── High School: World History II [WHII] ──
    {
      id: "ma-world-history-ii",
      subject: "Social Studies",
      name: "History and Social Science Framework — High School: World History II",
      publisher: PUBLISHER,
      version: "2018 Massachusetts Curriculum Framework (adopted June 2018)",
      fetchedOn: "2026-07-18",
      sourceUrl: HSS_2018,
      adoption:
        "World History II (c. 1800 to the present) is where the BVC series' colonial and commodity history maps — the transatlantic slave trade and plantation economies, and 19th-century imperialism including the opium trade between India and China. Codes are cited as the combined topic tag plus item (WHII.T3.3).",
      standards: [
        {
          code: "WHII.T3.3",
          text: "Analyze the impact of Western imperialism in Asia, Africa, and Latin America.",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.opium-wars",
            "bvc.colonialism-persists-today",
          ],
          coverage: "partial",
          note: "European imperialism is analyzed through the commodities it moved — including the British East India Company's opium trade between India and China, which the standard names — and how colonial patterns persist today. The full continent-by-continent survey (India, Japan, all of Africa, Latin America) is not attempted.",
        },
        {
          code: "WHII.T3.2",
          text: "Describe the causes of 19th century European global imperialism.",
          claimIds: [
            "bvc.conquest-columbian-exchange",
            "bvc.plantation-economy-resistance",
            "bvc.imperialism-africa-asia-oceania",
          ],
          coverage: "partial",
          note: "The standard's own sub-cause — the importance of slavery and slave-generated capital, and the sugar and coffee plantations of the Americas — is taught in depth, along with the resistance to the plantation economy. The wider set of imperial causes (Social Darwinism, missionary conversion, strategic advantage) is only touched.",
        },
      ],
    },

    // ── Grades 11–12 Literacy Standards for History and Social Science [RCA-H / WCA] ──
    {
      id: "ma-ela-literacy-1112",
      subject: "English/Language Arts",
      name: "History and Social Science Framework — Grades 11–12 Reading and Writing Standards for Literacy in the Content Areas: History and Social Science",
      publisher: PUBLISHER,
      version: "2018 HSS Framework, drawn from the 2017 Massachusetts ELA & Literacy Framework (grades 11–12)",
      fetchedOn: "2026-07-18",
      sourceUrl: HSS_2018,
      adoption:
        "Massachusetts revised the Common Core into its own 2017 ELA & Literacy Framework; its grades 11–12 Literacy Standards for History and Social Science are embedded in this HSS framework under the tags [RCA-H] (reading) and [WCA] (writing). The three reading standards we cite are word-for-word identical to the Common Core, but Massachusetts prints its own codes and revised the writing standards (WCA.8 adds a lead-in), so we map Massachusetts's own codes and verbatim text. Codes are cited as the document's tag plus item number for the grades 11–12 band (RCA-H.6).",
      standards: [
        {
          code: "RCA-H.6",
          text: "Evaluate authors’ differing points of view on the same historical event or issue by assessing the authors’ claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "The strongest single alignment on this page. The Whose Voice lessons put a planter's account directly against two first-person accounts by formerly enslaved writers, and teach the student to assess each author's claims and evidence.",
        },
        {
          code: "RCA-H.8",
          text: "Evaluate an author’s premises, claims, and evidence by corroborating or challenging them with other information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "Evaluating arguments and evidence by corroborating or challenging them is taught by name — from Doubt Is Our Product to the ban against the evidence on khat.",
        },
        {
          code: "RCA-H.9",
          text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the lesson teaches why oral history is a legitimate scholarly method for resolving that.",
        },
        {
          code: "WCA.7",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Only the Coffee episode currently ships a graded research project. Where it runs, it meets this standard squarely; we do not claim a sustained research programme across the catalog.",
        },
        {
          code: "WCA.8",
          text: "When conducting research, gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "The Coffee project requires authoritative sources, an APA bibliography, and source ethics. Only that one episode currently ships such a project, so we claim it for what it is. (Massachusetts's own revision prepends “When conducting research,” to the Common Core wording; text transcribed verbatim.)",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "The flagship's most distinctive Massachusetts facts have no Massachusetts code to cite.",
      body: "Massachusetts Civics teaches, from the Commonwealth's own sources, the elected Governor's Council that confirms judicial appointments, the appoint-and-serve-to-70 judiciary with no judicial elections, the INDIRECT initiative and the right of free petition, the 2022 VOTES Act's voting on-ramps, and the county governments abolished around 1997–2000. The 2018 framework reaches Massachusetts's government better than most states' standards do — Topic 6 (grade 8) and Topic 2 (US Government elective) name the General Court, the Supreme Judicial Court, town and city government, and the Massachusetts Constitution — but it does not name the Governor's Council, the indirect initiative, the free petition, the VOTES Act, or the county abolition, so those flagship lessons carry no code. The gap is in the standards, not the course.",
    },
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Massachusetts mathematics standard.",
    },
    {
      heading: "Science — Massachusetts's STE Standards are Massachusetts's own, and we did not fetch them.",
      body: "Massachusetts's Science and Technology/Engineering (STE) Standards are the Commonwealth's own — NGSS-influenced but not verbatim NGSS — and they live in a separate framework document we did not retrieve this pass. This catalog has no laboratory work, investigation, or modelling, and our rule is fetch-or-don't-cite, so Massachusetts gets no science claim — unlike California, where we fetched the document and confirmed a verbatim NGSS performance expectation.",
    },
    {
      heading: "Topic 1 of grade 8 Civics, and the philosophical/ancient foundations.",
      body: "Grade 8 Topic 1 (the philosophical foundations of the U.S. political system: ancient Athens and Rome, the Enlightenment, British antecedents, the Iroquois Confederacy) and the parallel foundations material in the US Government elective are not what this catalog teaches, so they are not claimed.",
    },
    {
      heading: "The federal-heavy and Massachusetts-history strands we checked and did not claim.",
      body: "Grade 8 Topics 3 (institutions), 4 (rights and responsibilities), and 5 (amendments and Supreme Court cases) contain many standards beyond the ones listed above — the detailed committee-and-procedure sub-bullets, political-party organization, public-service careers, the specific 14th/19th/26th Amendment items, and the full landmark-case menus — that the courses do not genuinely teach as written. In the electives, Government Topics 4 (parties, PACs, campaign finance) and 5 (foreign affairs and international organizations), and Economics Topics 3–6 (market structures, the role of government, national performance, money and financial institutions) and Personal Financial Literacy, are not claimed. And US History I/II and World History II contain far more than the labor, Prohibition, migration, and imperialism standards we map (the World Wars, the Cold War as a whole, Reconstruction, the New Deal apparatus, the civil-rights movement's full arc). The reject list is the evidence the map was not padded.",
    },
    {
      heading: "The ELA reading/writing strands beyond the five literacy standards mapped.",
      body: "The grades 11–12 Literacy Standards for History and Social Science include reading standards 1–5, 7, and 10, writing standards 1–6, 9, and 10, and the full Speaking and Listening strand, plus the grades 6–8 and 9–10 bands. We map only the five (RCA-H.6/.8/.9, WCA.7/.8) the catalog genuinely teaches, and the two writing standards only as partial because a sustained composition programme is met by the single Coffee project.",
    },
  ],
};
