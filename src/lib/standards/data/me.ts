// ─────────────────────────────────────────────────────────────────────────────
// MAINE — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-me` was written FROM Maine's own official sources (legislature.maine.gov,
// maine.gov/sos, courts.maine.gov, and the Maine Constitution of 1820), so Maine's civics flagship
// gets a genuine home: the Maine Learning Results Civics & Government strand's own Standard is about
// "the role of citizens in the community, Maine, the United States, and world," and Civics &
// Government 3 names "the political structures and civic responsibilities of the diverse historic and
// current cultures of Maine."
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from Maine's own record (Maine is a MIXED
// state — NGSS-adopting, but its ELA and social studies are Maine's own):
//   · Science — INHERITED (verbatim, no aliases). On April 19, 2019 Governor Mills signed LD 283,
//     adopting the Next Generation Science Standards as Maine's Science and Engineering standards;
//     the performance expectations are taken from NGSS. We compared HS-ESS3-1 in Maine's own printed
//     standards to the shared NGSS file and the performance-expectation text is IDENTICAL and the code
//     is the NGSS code, so ../shared/ngss is adopted verbatim. (Maine appends its own "Further
//     explanation" with Maine examples — the ski, fishing, and maple-sugar industries — but that
//     clarification is ancillary; the citable performance expectation matches.) This is not a science
//     course; see the note on the entry itself.
//   · ELA — BESPOKE, NOT aliased. Maine incorporated the Common Core in 2011, but the current Maine
//     Learning Results for English Language Arts/Literacy (Adopted 2020) REORGANIZE the content into
//     Maine's OWN four strands (Language, Speaking & Listening, Reading, Writing), each broken into
//     numbered Standards with Grades 9-Diploma performance expectations, and REWORD it (Maine folds
//     "literary" and "informational" reading into "various texts"). The codes and wording therefore
//     differ from the Common Core RH/RI/WHST codes, so — comparing the text, per the rule — we map
//     Maine's ELA as a bespoke own-framework and do NOT alias to ../shared/common-core-ela. We claim
//     the Grades 9-Diploma Reading and Writing standards the catalog's media-literacy, source-
//     evaluation, and research teaching genuinely meets.
//   · Social studies — BESPOKE. The Maine Learning Results for Social Studies (Revised 2019) are
//     Maine's own, organized into strands (Civics & Government, Economics, Geography, History), each
//     with a Grades 9-Diploma performance expectation broken into (F) Foundational and (D) Developing
//     indicators. We map the Civics & Government and History strands the catalog reaches; Economics and
//     Geography are deferred (see notClaimed).
//
// PROVENANCE: transcribed VERBATIM from the Maine DOE's own Maine Learning Results PDFs, retrieved
// 2026-07-19 — Social Studies (Civics & Government) 2019 and Social Studies (History) 2019 (the
// Grades 9-Diploma sections), both DOE-hosted at the sourceUrls below; and the Maine ELA/Literacy
// Standards (Adopted 2020, Grades 9-Diploma sections) from a byte-faithful district mirror of the same
// Maine DOE standards, with the canonical Maine DOE ELA page as the sourceUrl. In the Social Studies
// strands, each performance expectation's (F)/(D) indicators are transcribed inline; the source's "*"
// markers on certain History indicators (a civic-engagement flag, not part of the citable statement)
// are omitted, and the History F2 source typo "United State" is transcribed as printed.
// ─────────────────────────────────────────────────────────────────────────────

import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const ME_PUBLISHER = "Maine Department of Education (Maine DOE)";
const ME_CG_SOURCE =
  "https://www.maine.gov/doe/sites/maine.gov.doe/files/inline-files/Social%20Studies%20-%20MLR%20Social%20Studies%20(Civics%20%26%20Government)%202019%20-%2010.9.2025_0.pdf";
const ME_HIST_SOURCE =
  "https://www.maine.gov/doe/sites/maine.gov.doe/files/inline-files/Social%20Studies%20-%20MLR%20Social%20Studies%20(History)%202019%20-%2010.9.2025.pdf";
const ME_ELA_SOURCE = "https://www.maine.gov/doe/learning/standards/ela/learningstandards";

export const JURISDICTION: JurisdictionFile = {
  state: "ME",
  adoptions: [
    {
      framework: NGSS,
      adoption:
        "On April 19, 2019 Governor Mills signed LD 283, adopting the Next Generation Science Standards as Maine's Science and Engineering standards within the Maine Learning Results; the performance expectations are taken from NGSS. HS-ESS3-1, the one performance expectation we cite, appears in Maine's own printed standards with the NGSS code and identical performance-expectation text, so the shared NGSS file is adopted verbatim with no aliases. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── Maine Learning Results for Social Studies (2019) — Civics & Government, Grades 9-Diploma ──
    {
      id: "me-civics",
      subject: "Social Studies",
      name: "Maine Learning Results for Social Studies — Civics & Government, Grades 9-Diploma",
      publisher: ME_PUBLISHER,
      version:
        "Maine Learning Results for Social Studies (Revised 2019) · Civics & Government strand · Grades 9-Diploma",
      fetchedOn: "2026-07-19",
      sourceUrl: ME_CG_SOURCE,
      adoption:
        "Maine's Civics & Government strand is the anchor for the Maine Civics flagship: its Standard is about political systems and 'the role of citizens in the community, Maine, the United States, and world.' Its two grades 9-Diploma performance expectations we claim (Civics & Government 1 and 2) host Maine's own government — the Constitution of 1820, the Governor-only statewide executive, ranked-choice voting, the citizen initiative and people's veto, the appointed judiciary, and town meeting — alongside the U.S. constitutional system and the participation lessons. Each is claimed partially: the standards also require comparison with the political systems and citizens of OTHER nations, which this domestic-structure catalog does not teach. Transcribed verbatim from the 2019 Maine DOE Social Studies (Civics & Government) standards (see the file header for provenance).",
      standards: [
        {
          code: "Civics & Government 1",
          text: "Students understand the ideals, purposes, principles, structures, and processes of constitutional government in the United States and in the American political system, as well as examples of other forms of government and political systems in the world by: (F) Explaining that the study of government includes the structures, functions, institutions, and forms of government. (D) Evaluating and comparing the relationship of citizens with government in the United States and other regions of the world. (F) Explaining how and why democratic institutions and interpretations of democratic ideals and constitutional principles change over time. (D) Evaluating current issues by applying democratic ideals and constitutional principles of government in the United States, including checks and balances, federalism, and consent of the governed as put forth in founding documents. (F) Describing the purpose, structures, and processes of the American political system. (D) Comparing the American political system with examples of political systems from other parts of the world.",
          claimIds: [
            "civics.me-constitution",
            "civics.me-executive",
            "civics.me-courts",
            "civics.me-direct-democracy",
            "civics.me-ranked-choice",
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.constitution-article-by-article",
            "civics.article-v-amendment",
          ],
          coverage: "partial",
          note: "The flagship's primary home: the structures and processes of constitutional government in the American political system are taught in full — the U.S. Constitution's checks and balances, federalism, and consent of the governed, how democratic principles change over time (the Article V amendment process), AND Maine's own political system (the Constitution of 1820, the Governor-only statewide executive, the appointed Law Court, ranked-choice voting, and the citizen initiative and people's veto). Partial because the standard's (D) indicators also require COMPARING the American system with the political systems of other parts of the world, which this catalog does not do.",
        },
        {
          code: "Civics & Government 2",
          text: "Students understand the constitutional and legal rights, the civic duties and responsibilities, and roles of citizens in a constitutional democracy and the role of citizens living under other forms of government in the world by: (F) Explaining the relationship between constitutional and legal rights, and civic duties and responsibilities in a constitutional democracy. (D) Comparing the rights, duties, and responsibilities of United States citizens with those of citizens from other nations. (F) Evaluating the relationship between the government and the individual as evident in the United States Constitution, the Bill of Rights, and landmark court cases. (F) Evaluating how people influence government and work for the common good, including voting, writing to legislators, performing community service, and engaging in civil disobedience. (D) Analyzing the constitutional principles and the roles of the citizen and the government in major laws or cases.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.bill-of-rights-overview",
            "rights.landmark-cases",
            "rights.scotus-precedent",
            "civics.judicial-review-marbury",
            "civics.voter-registration",
            "civics.show-up-every-level",
            "civics.track-a-bill",
            "civics.campaign-help",
            "civics.me-get-involved",
            "civics.me-local-electoral",
          ],
          coverage: "partial",
          note: "Rights, civic duties, and how people influence government are taught end to end: the relationship between the government and the individual through the Constitution, the Bill of Rights, and the landmark court cases, and the standard's own examples of civic action — voting, writing to legislators, community service — practiced Maine's way (same-day registration and ranked-choice voting, open town meeting, the citizen initiative and people's veto). Partial because the (D) indicators also require comparison with citizens of other nations, and the catalog does not teach civil disobedience as such.",
        },
      ],
    },

    // ── Maine Learning Results for Social Studies (2019) — History, Grades 9-Diploma ──
    {
      id: "me-history",
      subject: "Social Studies",
      name: "Maine Learning Results for Social Studies — History, Grades 9-Diploma",
      publisher: ME_PUBLISHER,
      version:
        "Maine Learning Results for Social Studies (Revised 2019) · History strand · Grades 9-Diploma",
      fetchedOn: "2026-07-19",
      sourceUrl: ME_HIST_SOURCE,
      adoption:
        "Maine's History strand asks students to 'draw on concepts and processes using primary and secondary sources from history to develop historical perspective.' The catalog's commodity, colonial, imperial, migration, labor, and civil-rights history exercises both of its grades 9-Diploma performance expectations on specific worked cases, each claimed partially with the reach stated. Transcribed verbatim from the 2019 Maine DOE Social Studies (History) standards.",
      standards: [
        {
          code: "History 1",
          text: "Students understand major eras, major enduring themes, and historic influences in United States and world history, including the roots of democratic philosophy, ideals, and institutions in the world by: (F1) Explaining that history includes the study of the past based on the examination of a variety of primary and secondary sources and how history can help one better understand and make informed decisions about the present and future. (F2) Analyzing and critiquing major historical eras: major enduring themes, turning points, events, consequences, and people in the history of the United States and the implications for the present and future. (F3) Tracing and critiquing the roots and evolution of democratic ideals and constitutional principles in the history of the United States using historical sources. (F4) Developing individual and collaborative decisions/plans by considering multiple points of view, weighing pros and cons, building on the ideas of others, and sharing information in an attempt to sway the opinions of others. (D1) Analyzing and critiquing varying interpretations of historic people, issues, or events, and explain how evidence from primary and secondary sources is used to support and/or refute different interpretations. (D2) Analyzing and critiquing major historical eras: major enduring themes, turning points, events, consequences, and people in the history of the world and the implications for the present and future. (D3) Tracing and critiquing the roots and evolution of democratic ideals and constitutional principles in the history of the world using historical sources. (D4) Making a decision related to the classroom, school, community, civic organization, Maine, United States, or international entity by applying appropriate and relevant social studies knowledge and skills, including research skills, ethical reasoning skills, and other relevant information.",
          claimIds: [
            "bvc.conquest-columbian-exchange",
            "bvc.imperialism-africa-asia-oceania",
            "bvc.opium-wars",
            "bvc.plantation-economy-resistance",
            "bvc.haitian-revolution",
            "history.gilded-age-labor",
            "bvc.whose-voice-differing-accounts",
            "bvc.nearest-green-oral-history",
            "bvc.middle-passage-primary-sources",
            "civics.articles-to-constitution",
          ],
          coverage: "partial",
          note: "Partial: major enduring themes and turning points in U.S. and world history are taught through deep worked cases — the conquest and Columbian Exchange, European imperialism and the Opium Wars, plantation slavery and the Haitian Revolution, Gilded Age industrialization and labor — and the standard's (D1) skill (critiquing varying interpretations, using primary and secondary sources to support or refute them) is taught directly through the documentary-versus-oral record and the Middle Passage's primary sources. The framework's decision/plan performance tasks (F4, D4) and a comprehensive survey of every era are not the course's arc.",
        },
        {
          code: "History 2",
          text: "Students understand historical aspects of unity and diversity in the United States, the world, and Native American communities by: (F1) Identifying and critiquing issues characterized by unity and diversity in the history of the United States and describing their effects, using primary and secondary sources. (F2) Identifying and analyzing major turning points and events in the history of Native Americans and various historical and recent immigrant groups in the United State, making use of primary and secondary sources. (D1) Identifying and critiquing issues characterized by unity and diversity in the history of other nations, and describing their effects, using primary and secondary sources. (D2) Making use of primary and secondary sources, identifying and analyzing major turning points and events in the history of world cultures as it pertains to various historical and recent migrant groups.",
          claimIds: [
            "history.migration-streams-arrival",
            "history.migration-primary-sources",
            "history.jim-crow-and-long-shadow",
            "history.labor-civil-rights",
            "history.migration-civil-rights-politics",
          ],
          coverage: "partial",
          note: "Partial: unity and diversity and the turning points in the history of immigrant and migrant groups in the United States are taught in depth through the Great Migration — its streams and arrival, its primary sources, Jim Crow and its long shadow, and the labor-to-civil-rights line — using primary and secondary sources as the standard requires. The standard's Native American history (F2) and the history of other nations' unity/diversity (D1) are not the catalog's worked cases. (The source's 'United State' in F2 is transcribed as printed.)",
        },
      ],
    },

    // ── Maine Learning Results for English Language Arts/Literacy (2020) — Grades 9-Diploma ──
    {
      id: "me-ela",
      subject: "English/Language Arts",
      name: "Maine Learning Results for English Language Arts/Literacy — Reading & Writing, Grades 9-Diploma",
      publisher: ME_PUBLISHER,
      version:
        "Maine Learning Results for English Language Arts/Literacy (Adopted 2020) · Reading & Writing · Grades 9-Diploma",
      fetchedOn: "2026-07-19",
      sourceUrl: ME_ELA_SOURCE,
      adoption:
        "Maine's ELA standards are Common-Core-derived but reorganized into Maine's own strands (Language, Speaking & Listening, Reading, Writing) and reworded, with the grade band Grades 9-Diploma. Because the codes and text are Maine's own, they are mapped here as a bespoke framework, NOT aliased to the shared Common Core file. We claim the grades 9-Diploma Reading standards on perspective/purpose, evaluating arguments and claims, and synthesizing multiple sources, and the Writing inquiry standard — the reading, source-evaluation, and research work the catalog genuinely does. The Writing inquiry standard is partial because only the Coffee project currently ships a graded research assignment. Transcribed verbatim from the Maine ELA/Literacy Standards, Grades 9-Diploma (see the file header for provenance).",
      standards: [
        {
          code: "Reading Standard 9 (Craft and Structure)",
          text: "Assess how perspective or purpose shapes the content and style of various texts. [Grades 9-Diploma] Analyze and evaluate how authors from various contexts (e.g. diverse, intersectional, multicultural, religious) use perspective and purpose to shape the intended content, style, and effect of various texts.",
          claimIds: ["bvc.rhetoric-power-persuasion", "bvc.author-rhetoric-primary-texts"],
          coverage: "full",
          note: "Analyzing and evaluating how an author's perspective and purpose shape a text's content, style, and effect is taught directly — an author's rhetoric worked through the primary texts, and how style and content give a text its persuasive power.",
        },
        {
          code: "Reading Standard 10 (Integration of Knowledge and Ideas)",
          text: "Evaluate the argument and specific claims in various texts. [Grades 9-Diploma] a. Evaluate the effectiveness of how authors use literary and/or rhetorical strategies to develop arguments in various texts. b. Evaluate the premises, claims, and/or conclusions in various texts, verifying the information when possible and corroborating or challenging conclusions with other sources of information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "Evaluating an author's premises, claims, and conclusions — and corroborating or challenging them with other sources, spotting the fallacies — is taught as a transferable skill, exactly the standard's (b) indicator.",
        },
        {
          code: "Reading Standard 11 (Integration of Knowledge and Ideas)",
          text: "Analyze and evaluate content presented in various texts (e.g. literary, historical, visual, artistic, quantitative, and technological). [Grades 9-Diploma] a. Evaluate and synthesize multiple sources of information and various texts (e.g., literary, visual, artistic, and quantitative) in order to achieve a specific purpose or to answer a question. b. Analyze how various authors or texts address similar themes or topics in order to build knowledge or to compare the approaches the authors take. c. Synthesize information from a range of sources (e.g., texts, experiments, simulations) into a coherent understanding of an idea or event, noting discrepancies among perspectives.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Synthesizing multiple sources 'noting discrepancies among perspectives' is the whole point of the Nathan Green lesson (the documentary record against the oral record) and of putting a planter's account against two first-person accounts by formerly enslaved writers.",
        },
        {
          code: "Writing Standard 1 (Inquiry to Build and Present Knowledge)",
          text: "Use an inquiry process to gather relevant, credible information/evidence from a variety of sources (e.g., print, digital, discussions, etc.) that build understanding of and lead to conclusions about a subject under investigation while avoiding plagiarism. [Grades 9-Diploma] a. Investigate self-generated questions by participating in sustained inquiry that builds increasingly complex knowledge or that solves a problem, refocusing inquiry and/or incorporating effective advanced searches as needed. b. Assess the credibility, accuracy, and usefulness of a variety of authoritative sources in order to synthesize relevant information that leads to logical, increasingly complex conclusions. c. Take organized notes that purposefully quote, summarize, and/or paraphrase a variety of sources while avoiding plagiarism and overreliance on any one source. d. Follow a standard format for citation (in-text and a list of sources) that applies to task, audience, and purpose.",
          claimIds: [
            "bvc.coffee-project-research-process",
            "bvc.coffee-project-sources-ethics",
            "bvc.coffee-project-synthesis",
          ],
          coverage: "partial",
          note: "Partial: the full inquiry process the standard names — sustained inquiry on a self-generated question, assessing authoritative sources, avoiding plagiarism and overreliance on any one source, and following a citation format (the catalog uses APA) — is taught and practiced in the Coffee project, but only that episode currently ships a graded research assignment.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Maine Learning Results mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Maine adopted the NGSS in 2019 (LD 283) as its Science and Engineering standards, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Maine's own state structure is taught more fully than any one Civics & Government indicator names.",
      body: "Maine Civics teaches the Constitution of 1820 and the split from Massachusetts, the Governor as the only statewide-elected official (with the Attorney General, Secretary of State, and Treasurer chosen by the Legislature), Maine as the first state to adopt ranked-choice voting and the constitutional nuance that limits it, the citizen initiative and the people's veto, the appointed Supreme Judicial Court ('Law Court'), the open town meeting and 16 counties, the unorganized territory, and the split of presidential electoral votes by district — all from Maine's own sources. Civics & Government 1 (the American political system) and 2 (how people influence government) host most of it, but the Maine Learning Results performance expectations are concept statements, not a Maine-government checklist, so ranked-choice voting, the people's veto, and the Legislature's election of the constitutional officers have no code of their own.",
    },
    {
      heading: "Civics & Government 3 (cultural diversity; Maine Native Americans) — considered, not the catalog's focus.",
      body: "Civics & Government 3 is about the political and civic aspects of cultural diversity — 'the political structures and civic responsibilities of the diverse historic and current cultures of Maine, including Maine Native Americans,' and of the United States and the world. The Maine flagship teaches Maine's political structures and a civic-action habit, but it does not teach the cultural-diversity and Maine Native American political history this standard centers, so we do not claim it. (The civic-action / community-service work it also names is claimed under Civics & Government 2, its honest home.)",
    },
    {
      heading: "The comparison-to-other-nations indicators across Civics & Government.",
      body: "Several Civics & Government (D) indicators require comparing the American political system, and the rights and duties of U.S. citizens, with those of OTHER nations and other forms of government in the world. This catalog's civics is domestic structure, rights, and participation, so the comparative-government half of Civics & Government 1 and 2 is the reason each is claimed partial rather than full.",
    },
    {
      heading: "The Economics and Geography strands — considered, deferred this pass.",
      body: "Maine's Social Studies Learning Results also carry Economics and Geography strands, and this catalog's commodity, trade, and resource-map content plausibly reaches parts of them. But we transcribe and verify one strand document at a time, and only the Civics & Government and History strands were fetched and confirmed verbatim this pass. Our rule is fetch-or-don't-cite, so Economics and Geography carry no Maine claims yet rather than being mapped from memory.",
    },
    {
      heading: "The ELA strands and grade bands outside the Reading/Writing claims above.",
      body: "Maine's ELA Learning Results run across four strands (Language, Speaking & Listening, Reading, Writing) and all grade bands. We claim only the Grades 9-Diploma Reading standards on perspective/purpose, evaluating arguments and claims, and synthesizing sources, and the Writing inquiry standard — the reading, source-evaluation, and research work the catalog genuinely does. The Language and Speaking & Listening strands, the earlier grade bands, and the Reading/Writing standards outside those claims are not separately mapped.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Maine's closest frameworks for these (its Technology / computer-science and world-languages Learning Results) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Maine claims this pass.",
    },
  ],
};
