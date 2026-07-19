// ─────────────────────────────────────────────────────────────────────────────
// IOWA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ia` was written FROM Iowa's own official sources (legis.iowa.gov,
// sos.iowa.gov, iowacourts.gov, and the Iowa Constitution of 1857), so Iowa's civics flagship
// gets its 1:1 state-civics course, and this file gives it a home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from the Iowa DOE's own record:
//   · Social studies — BESPOKE. Iowa writes its own standards (C3-informed, not Common Core). The
//     current Iowa Academic Standards for Social Studies (January 2026 revision) High School
//     Civics/Government course names Iowa's OWN government explicitly and in three places:
//     SS.9-12.Gov.18 (the government of the State of Iowa), SS.9-12.Gov.20 (Iowa's local
//     governments), and SS.9-12.Gov.13 (Iowa election law, absentee voting, the Iowa Caucuses, and
//     redistricting) — a genuine, near-1:1 home for the Iowa flagship's most distinctive lessons,
//     while the federal branch/federalism/citizenship benchmarks (Gov.4/6/7/8/9/14/17) carry the
//     general civics ladder. The catalog's media/source-literacy method maps to the High School
//     Inquiry strand's source-evaluation anchors (SS.9-12.3, SS.9-12.4) — SS.9-12.4 (evaluate the
//     purpose and credibility of sources; lateral reading; filter bubbles) is near-1:1.
//   · English/Language Arts — Common-Core-DERIVED but IOWA REVISED, so BESPOKE (NOT aliased). Iowa
//     adopted the Common Core for ELA as the Iowa Core, but the CURRENT Iowa Academic Standards for
//     English Language Arts (State Board of Education, June 20, 2024) revised some codes. We compared
//     the six literacy codes this catalog touches against Iowa's own 2024 document byte for byte:
//     RH.11-12.6, RH.11-12.8, and RH.11-12.9 are VERBATIM identical to the shared Common Core file,
//     but RI.11-12.6 (Iowa says "power, persuasiveness, or ARTISTRY of the text" where Common Core
//     says "…or BEAUTY of the text") and WHST.11-12.8 (Iowa says "multiple CREDIBLE primary and
//     secondary print and digital sources… including RECOGNITION OF BIAS" where Common Core says
//     "multiple AUTHORITATIVE… sources") are Iowa's revised wording. Because two of the six diverge,
//     we do NOT alias ../shared/common-core-ela (that would misrepresent Iowa's revised codes as
//     verbatim Common Core). Instead we transcribe Iowa's OWN verbatim literacy standards below.
//   · Science — NGSS-BASED (Iowa was a 2015 Lead State) but with DOCUMENTED IOWA REVISIONS, so the
//     one climate/resource NGSS code this catalog could touch (HS-ESS3-1) is DEFERRED, not aliased.
//     See notClaimed.
//   · Mathematics — Common Core adopted as the Iowa Core; nothing claimed (no math instruction). The
//     one nuance (two statistics codes Iowa cross-references on Gov.13) is published in notClaimed.
//
// Provenance: the High School Civics/Government (SS.9-12.Gov.*) and High School Inquiry (SS.9-12.*)
// standards were transcribed VERBATIM from the Iowa DOE's "Iowa Academic Standards for Social
// Studies" (January 2026) at IA_SS below; the literacy standards from the Iowa DOE's "Iowa Academic
// Standards for English Language Arts" (2024) at IA_ELA below — both fetched 2026-07-19. Both PDFs
// open in a browser but return their bytes to automated fetches only as a compressed stream; we
// decoded the stream and verified every mapped standard reads as clean English before use. The
// coded standard text is the anchor-standard SENTENCE; the document's "Must include / May include"
// disciplinary clarifications are examples, not the standard, and are not transcribed as the text.
// Iowa apostrophes are inconsistent in the source (straight in Gov.7, curly in Gov.20); the words
// are verbatim and rendered in the codebase's typographic-apostrophe house style.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const IA_SS = "https://educate.iowa.gov/media/5527/download?inline=";
const IA_ELA = "https://educate.iowa.gov/media/8158/download?inline=";

export const JURISDICTION: JurisdictionFile = {
  state: "IA",
  frameworks: [
    // ── High School Civics/Government + Inquiry (Iowa Academic Standards for Social Studies, 2026) ──
    {
      id: "ia-civics",
      subject: "Social Studies",
      name: "Iowa Academic Standards for Social Studies (January 2026) — High School Civics/Government and Inquiry",
      publisher: "Iowa Department of Education / State Board of Education",
      version:
        "Iowa Academic Standards for Social Studies (January 2026) · High School Civics/Government (SS.9-12.Gov) and High School Inquiry (SS.9-12) standards",
      fetchedOn: "2026-07-19",
      sourceUrl: IA_SS,
      adoption:
        "Iowa writes its own social studies standards (C3-informed, not Common Core). The High School Civics/Government course is the anchor for the Iowa Civics flagship: SS.9-12.Gov.18 (the government of the State of Iowa), SS.9-12.Gov.20 (Iowa's local governments), and SS.9-12.Gov.13 (the electoral process and Iowa election law) are near-1:1 with the flagship's own-structure, local-government, caucus, redistricting, and voting lessons, and the federal branch/federalism/citizenship benchmarks carry the general civics ladder. The High School Inquiry strand's source-evaluation anchors (SS.9-12.3, SS.9-12.4) carry the catalog's media/source-literacy method. Transcribed verbatim from the Iowa DOE's January 2026 standards (see the file header for provenance). The coded text is the anchor-standard sentence; the document's Must-include/May-include clarifications are examples, not the standard.",
      standards: [
        // — State and Local Government of Iowa (the flagship's home) —
        {
          code: "SS.9-12.Gov.18",
          text: "Identify the function, duties, and authority of the government of the state of Iowa.",
          claimIds: [
            "civics.ia-executive-legislature",
            "civics.ia-judiciary",
            "civics.ia-lawmaking",
          ],
          coverage: "full",
          note: "The flagship's primary home: Iowa's own state government — the Constitution of 1857, the plural executive (Governor and Lieutenant Governor on a joint ticket, plus a separately elected Secretary of State, Attorney General, Treasurer, Auditor, and Secretary of Agriculture), the General Assembly (100-member House, 50-member Senate), and the merit-selection-plus-retention judiciary (the 7-justice Iowa Supreme Court) — is taught in depth.",
        },
        {
          code: "SS.9-12.Gov.20",
          text: "Identify the functions and organizational structures of Iowa's local governments.",
          claimIds: [
            "civics.ia-local-government",
            "civics.ia-get-involved",
            "civics.local-government-layers",
          ],
          coverage: "full",
          note: "Near-1:1: Iowa's 99 counties (elected boards of supervisors and other county officials), cities under home rule, townships, special districts, and locally run school boards are each taught, along with how to take part at each level.",
        },
        {
          code: "SS.9-12.Gov.13",
          text: "Analyze the electoral process and election systems in the United States, specifically Iowa election law including registration requirements, paper ballots, and absentee voting.",
          claimIds: [
            "civics.ia-caucuses",
            "civics.ia-redistricting",
            "civics.ia-elections",
            "civics.electoral-college",
            "civics.election-mechanics",
            "civics.voter-registration",
          ],
          coverage: "full",
          note: "The flagship's most distinctive material lands here: the Iowa Caucuses (named in the standard's clarification), Iowa's registration, absentee/early-voting, and county-auditor administration, and — under the standard's redistricting clarification — Iowa's nonpartisan Legislative Services Agency maps, a national anti-gerrymandering model. The Electoral College and the general registration/primary/count mechanics are taught in the general voting courses.",
        },
        // — Foundations of American Government (constitutional principles) —
        {
          code: "SS.9-12.Gov.3",
          text: "Analyze important founding and historical documents to the United States and the State of Iowa.",
          claimIds: [
            "civics.articles-to-constitution",
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
          ],
          coverage: "partial",
          note: "The Declaration of Independence, the U.S. Constitution, and the Bill of Rights are taught article by article, and the Iowa Constitution of 1857 is taught in the flagship; the standard's other named documents (Magna Carta, Mayflower Compact, the Federalist and Anti-Federalist Papers) are not taught by name, so this is partial.",
        },
        {
          code: "SS.9-12.Gov.4",
          text: "Analyze the underlying principles established by the United States Constitution.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.constitution-article-by-article",
            "civics.federalism-why-split-power",
            "civics.preamble-purposes",
            "civics.article-v-amendment",
          ],
          coverage: "full",
          note: "The rule of law, checks and balances, federalism, limited government, popular sovereignty, republicanism, separation of powers, and the power to amend — the principles the standard lists — are taught directly through the Constitution course.",
        },
        // — Branches of Government (the general federal ladder) —
        {
          code: "SS.9-12.Gov.6",
          text: "Analyze the function, duties, and authority of the legislative branch, including the process of lawmaking and the power of the purse.",
          claimIds: [
            "civics.federal-articles-i-iii",
            "civics.federal-bill-process",
            "civics.three-branches-federal",
          ],
          coverage: "full",
          note: "Article I's structure and how a bill becomes law — introduction, committee review, floor votes in both chambers, and presidential action — are taught end to end.",
        },
        {
          code: "SS.9-12.Gov.7",
          text: "Analyze the function, duties, and authority of the executive branch, including the scope of presidential powers, executive orders, executive agreements, and the president's role in foreign and domestic policy.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
            "civics.electoral-college",
          ],
          coverage: "partial",
          note: "Article II's executive role and the Electoral College are taught; the standard's executive orders, executive agreements, the federal bureaucracy's structure, and the president's foreign-policy role are not a dedicated unit, so this is partial.",
        },
        {
          code: "SS.9-12.Gov.8",
          text: "Analyze the function, duties, and authority of the judicial branch, including the power of judicial review and interpretation of laws.",
          claimIds: [
            "civics.federal-judiciary-structure",
            "civics.judicial-review-marbury",
            "civics.scotus-nomination-confirmation",
            "rights.landmark-cases",
          ],
          coverage: "full",
          note: "The federal judiciary's structure, the nomination-and-confirmation process, judicial review through Marbury v. Madison, and landmark rights cases are each taught by name.",
        },
        {
          code: "SS.9-12.Gov.9",
          text: "Assess how the United States federal system divides powers between national and state governments.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.ia-executive-legislature",
            "civics.ia-local-government",
          ],
          coverage: "full",
          note: "Federalism and the enumerated/implied/reserved powers taxonomy are taught directly, and the standard's state-and-local functions are taught as Iowa's own (the state government and the 99-county/city/school-board layer).",
        },
        // — Political participation and public office —
        {
          code: "SS.9-12.Gov.10",
          text: "Analyze the basic requirements and responsibilities to serve in public office.",
          claimIds: ["civics.run-for-office"],
          coverage: "full",
          note: "Eligibility, ballot access, terms, and the money rules the standard lists are taught end to end in the running-for-office course.",
        },
        // — Citizenship and Civic Responsibilities —
        {
          code: "SS.9-12.Gov.14",
          text: "Analyze the role of citizens in the U.S. political system, with attention to the definition of who is a citizen, the expansion of that definition over time.",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "partial",
          note: "Who is a citizen — the 14th Amendment, birthright citizenship, and naturalization eligibility — is taught directly; a systematic history of the expansion of citizenship over time is not a dedicated unit, so this is partial.",
        },
        {
          code: "SS.9-12.Gov.17",
          text: "Analyze the rights, liberties, duties, and responsibilities of citizens of the United States and the state of Iowa.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
            "rights.landmark-cases",
            "civics.ia-get-involved",
          ],
          coverage: "partial",
          note: "The rights and liberties in the Bill of Rights, the duty of jury service, the right to vote (including Iowa's own rules), and contacting a government official are each taught; the standard's Selective Service registration duty is not, so this is partial.",
        },
        // — High School Inquiry: the source/media-literacy method (the catalog's signature) —
        {
          code: "SS.9-12.3",
          text: "Gather relevant information from multiple sources representing a wide range of views while using the origin, authority, structure, context, and corroborative value of the sources to guide the selection.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.whose-voice-differing-accounts",
            "bvc.coffee-project-sources-ethics",
          ],
          coverage: "full",
          note: "Gathering from multiple sources and weighing each by origin, authority, context, and corroboration — the standard's exact skill — is the source-evaluation method run across the catalog, with a checkable bibliography published each time.",
        },
        {
          code: "SS.9-12.4",
          text: "Evaluate the purpose and credibility of sources by examining how experts view the source.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.reading-ads-for-omission",
            "bvc.evaluate-claims-fallacies",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Near-1:1 with the catalog's method: the standard's clarification (purpose taxonomy — inform/persuade/sell/propaganda — lateral reading, and filter bubbles) is the media-literacy skill run in every episode, reading each source and message for credibility, bias, and omission.",
        },
        {
          code: "SS.9-12.5",
          text: "Refine claims and counterclaims that are supported with relevant, credible evidence gathered through research and investigation.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.coffee-project-argument-paper"],
          coverage: "partial",
          note: "Evaluating claims and their evidence is taught throughout; a refined claim-and-counterclaim product supported by researched evidence ships as a graded assignment only in the Coffee episode, so this is partial.",
        },
        {
          code: "SS.9-12.7",
          text: "Construct clear and coherent arguments that support a specific claim, using relevant evidence and reasoning from multiple credible sources to substantiate the claim.",
          claimIds: ["bvc.coffee-project-synthesis", "bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "Constructing an argument that synthesizes multiple credible sources is taught, but ships as a graded argument product only in the Coffee episode, so this is partial.",
        },
        {
          code: "SS.9-12.8",
          text: "Apply a range of deliberative and democratic strategies and procedures to make decisions and engage in their classrooms, schools, and communities.",
          claimIds: [
            "civics.show-up-every-level",
            "civics.ia-get-involved",
            "bvc.evaluate-claims-fallacies",
          ],
          coverage: "partial",
          note: "The standard's civic-engagement clarification (a healthy news diet of multiple credible sources, the impact of misinformation, and showing up where issues are decided) is taught as practice — Iowa's own levers (caucus, county boards, contacting Des Moines legislators, running locally); the designed graded deliberation is prompted, not run as an assignment, so this is partial.",
        },
      ],
    },
    // ── Literacy in History/Social Studies & Writing, grades 11-12 (Iowa ELA Standards, 2024) ──
    {
      id: "ia-literacy",
      subject: "English/Language Arts",
      name: "Iowa Academic Standards for English Language Arts (2024) — Literacy in History/Social Studies and Writing, Grades 11-12",
      publisher: "Iowa Department of Education / State Board of Education",
      version:
        "Iowa Academic Standards for English Language Arts (State Board of Education, June 20, 2024) · Reading for Literacy in History/Social Studies (RH), Reading Informational Text (RI), and Writing for Literacy in History/Social Studies, Science & Technical Subjects (WHST), grades 11-12",
      fetchedOn: "2026-07-19",
      sourceUrl: IA_ELA,
      adoption:
        "Iowa adopted the Common Core for ELA as the Iowa Core, but its current (2024) standards revised some codes, so these are transcribed VERBATIM from Iowa's own document rather than aliased to the shared Common Core file. RH.11-12.6, RH.11-12.8, and RH.11-12.9 are identical to Common Core; RI.11-12.6 and WHST.11-12.8 are Iowa's revised wording (see the file header). We claim no mathematics standards.",
      standards: [
        {
          code: "RH.11-12.6",
          text: "Evaluate authors' differing points of view on the same historical event or issue by assessing the authors' claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "The strongest single alignment on this page. Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims, reasoning, and evidence. Iowa's text is verbatim identical to the Common Core code.",
        },
        {
          code: "RH.11-12.8",
          text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "Iowa's text is verbatim identical to the Common Core code.",
        },
        {
          code: "RH.11-12.9",
          text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that. Iowa's text is verbatim identical to the Common Core code.",
        },
        {
          code: "RI.11-12.6",
          text: "Determine an author's point of view or purpose in a text in which the rhetoric is particularly effective, analyzing how style and content contribute to the power, persuasiveness, or artistry of the text.",
          claimIds: ["bvc.rhetoric-power-persuasion"],
          coverage: "full",
          note: "IOWA-REVISED wording: Iowa ends this standard “…power, persuasiveness, or artistry of the text,” where the Common Core reads “…or beauty of the text.” Transcribed from Iowa's own 2024 document — this divergence is why the shared Common Core file is not aliased here.",
        },
        {
          code: "WHST.11-12.7",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded research assignment. Where it runs, it meets this standard squarely.",
        },
        {
          code: "WHST.11-12.8",
          text: "Gather relevant information from multiple credible primary and secondary print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience, including recognition of bias; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics", "bvc.source-evaluation-modelled"],
          coverage: "partial",
          note: "IOWA-REVISED wording: Iowa says “multiple credible primary and secondary print and digital sources… including recognition of bias,” where the Common Core reads “multiple authoritative… sources” without the bias clause. The bias clause maps well to the catalog's source-evaluation method; the graded gathering-and-citing product ships only in the Coffee episode, so this is partial. This divergence is why the shared Common Core file is not aliased here.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — Common Core adopted as the Iowa Core: nothing claimed.",
      body: "Iowa adopted the Common Core State Standards for mathematics as the Iowa Core, but this catalog does no mathematics instruction, so it meets no Iowa mathematics standard. One nuance: Iowa's own Civics/Government standard SS.9-12.Gov.13 cross-references two statistics codes — A1.S-ID.C.9 (“Distinguish between correlation and causation”) and ST.S-IC.B.6 (“Evaluate reports based on data”) — that lightly touch the catalog's misleading-statistics media literacy. But the catalog does no mathematics instruction and does not run the statistical analysis those codes require, so we do not claim them.",
    },
    {
      heading: "Science — NGSS-BASED (Iowa was a 2015 Lead State) but with documented Iowa revisions: deferred.",
      body: "Iowa's State Board of Education adopted the Next Generation Science Standards in August 2015, having helped write them as a Lead State Partner. But Iowa's science standards have documented later revisions (notably to climate-related expectations), so — unlike Michigan, which adopted the NGSS verbatim and reuses the shared NGSS mapping — we could not confirm within this pass that Iowa's HS-ESS3-1 (the one climate/resource expectation this catalog could touch) is a byte-for-byte NGSS republication. Our rule is verbatim-or-nothing, so we do NOT alias the shared NGSS framework here and DEFER Iowa's science standards rather than cite text we have not cleanly verified. The catalog's climate/resource content (resources, hazards, and climate shaping human activity) would map to Iowa's Earth and Space Science standards; that is deferred, not denied.",
    },
    {
      heading: "English/Language Arts — Common-Core-derived but Iowa revised, so NOT aliased.",
      body: "Iowa adopted the Common Core for ELA as the Iowa Core, but the current (2024) Iowa Academic Standards for English Language Arts revised some codes. Of the six literacy codes this catalog touches, RH.11-12.6/8/9 are verbatim identical to the shared Common Core file, but RI.11-12.6 (“…or artistry of the text” vs Common Core's “…or beauty of the text”) and WHST.11-12.8 (“multiple credible primary and secondary… including recognition of bias” vs Common Core's “multiple authoritative… sources”) are Iowa's own revised wording. Because two of the six diverge, we do not alias the shared Common Core ELA framework — that would misrepresent Iowa's revised codes as verbatim Common Core. We instead transcribe Iowa's own verbatim literacy standards in the ia-literacy framework above.",
    },
    {
      heading: "Iowa's caucuses, nonpartisan redistricting, and Missouri-Plan judiciary have no discrete benchmark.",
      body: "The flagship teaches the Iowa Caucuses, Iowa's nonpartisan Legislative Services Agency redistricting, and its merit-selection-plus-retention judiciary as headline features. The Iowa Caucuses are named only in the clarification of SS.9-12.Gov.13, and redistricting/gerrymandering appear only in that standard's “May include” list; the Missouri-Plan judiciary sits inside SS.9-12.Gov.18 (the state government) rather than as a benchmark of its own. So they are claimed through Gov.13 and Gov.18 rather than as standards in their own right.",
    },
    {
      heading: "The sovereign Meskwaki Nation tribal government (SS.9-12.Gov.19).",
      body: "Iowa's Civics/Government course carries a dedicated benchmark on the sovereign Meskwaki Nation's tribal government — the Meskwaki Tribal Constitution, Council, and Court, and the Settlement's status as privately purchased land rather than a federal reservation. Iowa Civics teaches Iowa's state and local structure but not tribal government, so SS.9-12.Gov.19 is not claimed. The gap is in the course, not the standards.",
    },
    {
      heading: "The political-science and civic-virtue benchmarks we checked and rejected.",
      body: "SS.9-12.Gov.1 (origins of government and alternative systems, including crimes against humanity by communist regimes), SS.9-12.Gov.2 (Enlightenment philosophers and the Federalist/Anti-Federalist Papers as named content), SS.9-12.Gov.5 (government's role in maintaining order through safety/morality/health laws), SS.9-12.Gov.11 (patterns of political action and activism), SS.9-12.Gov.12 (intermediary institutions — interest groups, parties, media, campaigns, political socialization), SS.9-12.Gov.15 (biographies of exemplary Iowans and Americans who promoted civic virtue), SS.9-12.Gov.16 (civic virtue as a named concept), and the inquiry-mechanics anchors SS.9-12.1, SS.9-12.2, and SS.9-12.6 (developing compelling/supporting questions and constructing sequenced responses) — the courses do not genuinely teach these, or teach them too thinly to claim, so we do not claim them.",
    },
  ],
};
