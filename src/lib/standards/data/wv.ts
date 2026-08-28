// ─────────────────────────────────────────────────────────────────────────────
// WEST VIRGINIA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-wv` was written FROM West Virginia's own official sources
// (wvlegislature.gov, sos.wv.gov, courtswv.gov, and the West Virginia Constitution of 1872), so
// the West Virginia civics flagship gets a genuine home: the WVCCRS Civics standards SS.C.13 (the
// "local, state and national judicial systems") and SS.C.20 ("decisions and policies of state and
// local government" and "structure of local government") are explicitly STATE-and-LOCAL, and SS.C.1
// asks students to "actively participate ... through community service."
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from West Virginia's own record (West
// Virginia is a MIXED / mostly-BESPOKE state — it adopted THEN REPEALED the Common Core in 2015-16):
//   · Social studies — BESPOKE. West Virginia's College- and Career-Readiness Standards for Social
//     Studies (WVBE Policy 2520.4) are West Virginia's own. The Civics course — a "culminating U.S.
//     Studies class" and the state's civics capstone — carries standards coded SS.C.1 through SS.C.43
//     across Civics, Economics, Personal Finance and Geography, AS THAT DOCUMENT NUMBERED THEM IN
//     2016. ⚠️ The numbering has since changed: the rule effective July 1, 2025 runs the Civics
//     course to SS.C.37 only, re-uses SS.C.30-31 for ECONOMICS and SS.C.32-37 for GEOGRAPHY, and
//     moves the ten Personal Finance standards to Appendix A as unprefixed items 1-10. See the
//     Appendix A framework below, which is the only part of this file re-fetched under the current
//     rule; the SS.C entries here still cite the 2016 document and are flagged in a research check.
//     across Civics (SS.C.1-22), Economics (SS.C.23-29), Personal Finance (SS.C.30-39), and Geography
//     (SS.C.40-43). We map the Civics standards, two Economics standards, and (from 2026-08-28) one
//     Personal Finance standard the catalog genuinely reaches; the rest are rejected in notClaimed.
//     Codes are cited exactly as printed (SS.C.1, SS.C.13, etc.).
//   · ELA — BESPOKE, NOT aliased. West Virginia adopted the Common Core in 2010 but REPEALED it in
//     2015 (WVBE re-authored the standards; the "Next Generation" name was dropped and the CCSS
//     numbering abandoned). West Virginia's English Language Arts standards now use West Virginia's
//     OWN codes (ELA.11.x, not CCSS.ELA-Literacy.RH.11-12.x) and West Virginia's own wording, so we
//     compared the text and map them as a BESPOKE own-framework — we do NOT alias to ../shared/
//     common-core-ela even where a West Virginia standard's wording runs close to a CCSS one (ELA.11.26
//     / .27 echo WHST.11-12.7 / .8 nearly verbatim, but the framework is West Virginia's, the code is
//     West Virginia's, and West Virginia repudiated the Common Core — so it is cited on West Virginia's
//     own terms). We claim the grade-11 informational-reading, argument-writing, and research standards
//     the catalog's media-literacy and source-evaluation teaching actually meets.
//   · Science — CONSIDERED, NOT claimed this pass. West Virginia's science standards (WVBE Policy
//     2520.3C, adopted 2021) are NGSS-derived but printed with West Virginia's own codes and page
//     layout; the only West Virginia-hosted / regulatory copies we could retrieve are image-only
//     scans that do not yield extractable, byte-faithful text. Our rule is fetch-or-don't-cite and
//     verbatim-or-nothing: we will not alias the shared NGSS file to a West Virginia code we could not
//     confirm against West Virginia's own printed text, nor transcribe from a scan we cannot read
//     exactly. Science is deferred to notClaimed until the verbatim West Virginia text is retrieved.
//
// PROVENANCE (social studies): transcribed VERBATIM from the WVDE-published "College & Career
// Readiness Standards — West Virginia Resource Booklet for Social Studies, Grades 6-12" (the Civics
// course section, pp. 33-35), retrieved 2026-07-19 from the byte-faithful copy hosted by the West
// Virginia social-studies educators' site (wvsocialstudies.com/wp-content/uploads/2019/10/
// ccrs-6-12-social-studies-resource-booklet.pdf) because the WVDE canonical PDF at the sourceUrl
// below returned HTTP 404 to automated fetches. The sourceUrl is the canonical WVDE link. Bulleted
// sub-lists in SS.C.5 and SS.C.17 are transcribed inline with the source's "•" markers; SS.C.5's
// final "principles" bullet is missing its closing parenthesis in the source and is transcribed as
// printed (a source typo left untouched). RE-FETCHED 2026-08-28 from the same mirror when SS.C.38
// was added, which is why the social-studies framework's fetchedOn now carries that date: MONEY-02
// (Banking, and Who Has No Bank) made the first Personal Finance standard claimable, and the
// blanket SS.C.30-39 rejection was rewritten as superseded rather than deleted.
// PROVENANCE (ELA): transcribed VERBATIM from the West
// Virginia English Language Arts Standards, Grades 9-12 (Grade 11 section), retrieved 2026-07-19 from
// a byte-faithful district mirror (Marion County Schools) of the WVBE Policy 2520.1A standards; the
// sourceUrl is the canonical WVDE ELA link.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const WV_SS_SOURCE =
  "https://wvde.us/sites/default/files/2018/10/wvccr_socialstudies_6-12-revised.pdf";
const WV_SS_PUBLISHER =
  "West Virginia Department of Education (WVDE) / West Virginia Board of Education";
const WV_ELA_SOURCE = "https://wvde.us/middle-secondary-learning/ela/";

export const JURISDICTION: JurisdictionFile = {
  state: "WV",
  frameworks: [
    // ── WV College- and Career-Readiness Standards for Social Studies — Civics ──
    {
      id: "wv-civics",
      subject: "Social Studies",
      name: "West Virginia College- and Career-Readiness Standards for Social Studies — Civics (SS.C)",
      publisher: WV_SS_PUBLISHER,
      version:
        "West Virginia College- and Career-Readiness Standards for Social Studies, Grades 6-12 (WVBE Policy 2520.4) · Civics course (SS.C)",
      fetchedOn: "2026-08-28",
      sourceUrl: WV_SS_SOURCE,
      adoption:
        "West Virginia's Civics course is its civics capstone — a 'culminating U.S. Studies class,' with a U.S. Studies course as prerequisite. Its standards are West Virginia's own (WVBE Policy 2520.4). Two of them are explicitly state-and-local — SS.C.13 (the local, state and national judicial systems) and SS.C.20 (how state and local government impact citizens, and the structure of local government) — so, alongside SS.C.1 (participatory citizenship through community service), the West Virginia flagship's own-government content (the Constitution of 1872, the plural executive with no Lieutenant Governor, the 100-Delegate/34-Senator Legislature, the 2015 switch to nonpartisan judicial elections and the 2022 Intermediate Court of Appeals, the 55 counties) has a genuine home, mapped here. The federal-ladder standards carry the general civics claims; two Economics standards carry the catalog's commodity-price and free-market cases. Transcribed verbatim from the WVDE Social Studies resource booklet (see the file header for provenance).",
      standards: [
        // — The flagship's home: standards that name state and local government —
        {
          code: "SS.C.20",
          text: "Examine how decisions and policies of state and local government impact the lives of citizens—such as local issues and problems, structure of local government (e.g., differences in incorporation, providing public services and mayoral styles), zoning and annexation, land use and urban sprawl, and ordinances and jurisdiction.",
          claimIds: [
            "civics.wv-origin-constitution",
            "civics.wv-executive",
            "civics.wv-legislature",
            "civics.wv-lawmaking",
            "civics.wv-local-government",
            "civics.local-government-layers",
            "civics.show-up-every-level",
          ],
          coverage: "full",
          note: "The flagship's primary home: this is the one Civics standard about how STATE and LOCAL government works and touches citizens' lives, and West Virginia's own government is taught in full — the Constitution of 1872 and the state's singular Civil-War origin, the plural executive with no Lieutenant Governor, the 100-Delegate/34-Senator part-time Legislature and how a West Virginia bill becomes law, and the 55 counties with their elected commissions. The standard's enumerated local-policy examples (zoning, annexation, land use) are illustrative and not each worked as their own case; the structure and impact the standard's stem names are taught end to end.",
        },
        {
          code: "SS.C.13",
          text: "Compare and contrast the original and appellate jurisdictions of local, state and national judicial systems to show how America’s court system addresses criminal and civil cases.",
          claimIds: ["civics.federal-judiciary-structure", "civics.wv-courts", "civics.jury-service"],
          coverage: "full",
          note: "Both the state and national judicial systems the standard names are taught: the federal judiciary's structure and the citizen's side of it (jury service, criminal vs. civil cases), and West Virginia's own courts — the original/appellate split made concrete by West Virginia's 2022 creation of an Intermediate Court of Appeals below the Supreme Court of Appeals, and the 2015 switch to nonpartisan judicial elections.",
        },
        {
          code: "SS.C.1",
          text: "Strive to become vigilant, informed citizens who actively participate in the preservation and improvement of American government through community service and service-learning (e.g., individual service projects, patriotic events, mock trials, group initiatives, community volunteerism).",
          claimIds: [
            "civics.wv-get-involved",
            "civics.show-up-every-level",
            "civics.citizenship-responsibilities",
            "civics.campaign-help",
          ],
          coverage: "full",
          note: "Participatory citizenship is taught as practice, West Virginia edition: registering and voting (early and absentee, with ID, via county clerks — confirm at sos.wv.gov), showing up at county commissions, city and town councils, and county boards of education, contacting legislators during the short 60-day session, and helping a campaign lawfully.",
        },
        // — The federal ladder: the Constitution, rights, courts, elections —
        {
          code: "SS.C.2",
          text: "Explore social contracts and the establishment of the rule of law, and evaluate how limited government and the rule of law protect individual rights.",
          claimIds: [
            "civics.preamble-purposes",
            "civics.separation-checks-balances",
            "civics.bill-of-rights-overview",
          ],
          coverage: "full",
          note: "The rule of law, limited government, and how they protect individual rights are the constitution course's spine: the Preamble's purposes, separation of powers and checks and balances as the structure that limits government, and the Bill of Rights as the protection of the individual.",
        },
        {
          code: "SS.C.3",
          text: "Demonstrate that the purpose of American government is the protection of personal, political and economic rights of citizens as evidenced by the Declaration of Independence, the U. S. Constitution, Constitutional Amendments and the ideas of those involved in the establishment of American government.",
          claimIds: [
            "civics.preamble-purposes",
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
          ],
          coverage: "full",
          note: "That the purpose of American government is the protection of rights is taught squarely — the Preamble worked clause by clause, the Constitution analyzed article by article, and the Bill of Rights as the document that secures those rights. The Declaration of Independence itself is background context rather than its own lesson.",
        },
        {
          code: "SS.C.5",
          text: "Examine and analyze the contributing factors to the drafting of the Declaration of Independence and the U.S. Constitution: • leaders and philosophers (e.g., John Locke, James Madison, Thomas Jefferson, and John Adams) • events (e.g., Glorious Revolution, Reformation and Enlightenment) • documents (e.g., English Bill of Rights, Petition of Right and Magna Carta) • classical periods (e.g., eras of Greece and Rome) • principles (e.g., popular sovereignty, federalism, limited government, separation of powers, checks and balances, civil liberties, and rule of law",
          claimIds: [
            "civics.articles-to-constitution",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "Partial: the principles bullet — popular sovereignty, federalism, limited government, separation of powers, checks and balances, and the rule of law — is taught in full through why the Articles of Confederation failed and the structure the 1787 Constitution built. The genealogy of philosophers, events, and documents (Locke, the Glorious Revolution, Magna Carta) is named but not each worked as its own case. (The source omits the closing parenthesis on the final bullet; transcribed as printed.)",
        },
        {
          code: "SS.C.6",
          text: "Examine the compromises of the Constitutional Convention and how those decisions were characterized in the Federalist and the Anti-Federalist papers.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "partial",
          note: "Partial: the road from the failed Articles of Confederation to the 1787 Constitution is taught, but the specific Convention compromises (the Great Compromise, the three-fifths clause) and the Federalist / Anti-Federalist debate are not worked individually.",
        },
        {
          code: "SS.C.7",
          text: "Evaluate the elements in the U.S. Constitution that make it a living document with democratic principles that are modified and expanded to meet the changing needs of society.",
          claimIds: ["civics.article-v-amendment", "rights.scotus-precedent", "rights.landmark-cases"],
          coverage: "full",
          note: "The Constitution as a living document is taught through the mechanisms that change it: the Article V amendment process and how Supreme Court precedent expands rights over time through the landmark cases.",
        },
        {
          code: "SS.C.8",
          text: "Investigate the system of government created by the Preamble, Seven Articles, the Bill of Rights and other Amendments of the U.S. Constitution to evaluate how the framework for American society is provided.",
          claimIds: [
            "civics.preamble-purposes",
            "civics.constitution-article-by-article",
            "civics.federal-articles-i-iii",
            "civics.bill-of-rights-origin",
          ],
          coverage: "full",
          note: "This is the constitution course's whole arc: the Preamble, the seven Articles (I-III and the branch relationships they create), and the Bill of Rights and later amendments, analyzed as the framework for American society.",
        },
        {
          code: "SS.C.9",
          text: "Analyze how the U.S. Constitution defines federalism and outlines a structure for the United States government.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
          ],
          coverage: "full",
          note: "Federalism and the structure of the federal government are taught directly — why power is split between state and nation, and the three branches the Articles create.",
        },
        {
          code: "SS.C.10",
          text: "Analyze the protection of liberties in the Bill of Rights and their expansion through judicial review and the gradual incorporation of those rights by the Fourteenth Amendment.",
          claimIds: [
            "civics.bill-of-rights-overview",
            "rights.landmark-cases",
            "rights.scotus-precedent",
            "civics.judicial-review-marbury",
            "civics.us-citizenship-law",
          ],
          coverage: "full",
          note: "Every element the standard names is taught: the Bill of Rights' protections, judicial review (Marbury v. Madison), the landmark cases that expand rights over time, and the Fourteenth Amendment (whose citizenship and incorporation role is taught in the citizenship course).",
        },
        {
          code: "SS.C.11",
          text: "Analyze how the freedoms of speech and press in a democratic society enable citizens to develop informed opinions, express their views, shape public policy and monitor government actions.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "full",
          note: "The freedoms of speech and press are taught as usable rules through the landmark speech and press cases (Tinker, Brandenburg) and where the line falls — exactly the standard's 'develop informed opinions, express their views, monitor government' purpose.",
        },
        {
          code: "SS.C.12",
          text: "Determine how conflicts between the rights of citizens and society’s need for order can be resolved while preserving both liberty and safety.",
          claimIds: ["rights.limits-on-rights"],
          coverage: "full",
          note: "When government may constitutionally limit rights, and why — time-place-manner, incitement, school speech, reasonable suspicion — is precisely the standard's conflict between liberty and the need for order.",
        },
        {
          code: "SS.C.14",
          text: "Apply the concepts of legal precedent through past and present landmark Supreme Court cases, interpretations of the U.S. Constitution by the Supreme Court and the impact of these decisions on American society.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent", "civics.judicial-review-marbury"],
          coverage: "full",
          note: "Legal precedent is taught as a rule the student can apply — the landmark Supreme Court cases, how precedent works and expands, and judicial review as the Court's power to interpret the Constitution.",
        },
        {
          code: "SS.C.15",
          text: "Develop an understanding of the American legal system through examining existing ordinances, statutes and Federal Acts, exploring the differences between criminal and civil law and determining the legal obligations and liabilities of American citizenship.",
          claimIds: ["civics.jury-service", "civics.citizenship-responsibilities"],
          coverage: "partial",
          note: "Partial: the criminal-versus-civil distinction and a citizen's legal obligations are taught through jury service (the citizen's side of the court system) and the responsibilities of citizenship. The systematic survey of ordinances, statutes, and Federal Acts is not the course's focus.",
        },
        {
          code: "SS.C.17",
          text: "Assess the influence of the media on public opinion and on the decisions of elected officials and the bureaucracy: • bias in reporting and editorials • push-pull polls and selective reporting of citizen opinions • advertising and campaign ads • reporting news out of context",
          claimIds: [
            "bvc.reading-ads-for-omission",
            "bvc.media-fallacies-recurring",
            "bvc.reefer-madness-language-of-fear",
            "bvc.source-evaluation-modelled",
          ],
          coverage: "full",
          note: "Media influence on public opinion is a spine of the catalog's media-literacy strand — reading advertising for what it omits, the recurring media fallacies, the language of fear in Reefer Madness, and source evaluation modelled step by step, covering the standard's bias, advertising, and out-of-context bullets squarely.",
        },
        {
          code: "SS.C.19",
          text: "Assess how factors such as campaign finance, participation of the electorate, and demographic factors influence the outcome of elections.",
          claimIds: ["civics.campaign-help", "civics.election-mechanics"],
          coverage: "partial",
          note: "Partial: campaign participation and its legal guardrails (including the money rules) and how elections are run and won are taught through How to Help a Campaign and Voting & Elections 101. The demographic-factors analysis the standard also names is not the focus.",
        },
        {
          code: "SS.C.22",
          text: "Compare and contrast the values, ideals and principles that are the foundation of a democratic republic and the role citizens play in a constitutional democracy, to the theories and practices of non-democratic governments (e.g. socialism found in communism and nationalism found in fascism).",
          claimIds: ["civics.preamble-purposes", "civics.citizenship-responsibilities"],
          coverage: "partial",
          note: "Partial: the values and principles of a democratic republic and the citizen's role in it are taught in depth. The systematic comparison to non-democratic systems (communism, fascism) that the standard also requires is not part of this catalog.",
        },
        // — Economics standards the commodity content genuinely reaches —
        {
          code: "SS.C.25",
          text: "Explain how supply and demand affects prices, profits, and availability of goods and services.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: how demand affects price is taught through a worked commodity case — a Brazilian frost moving world coffee prices, and why inelastic demand absorbs the spike. The formal supply-and-demand treatment (schedules, equilibrium) is not the method.",
        },
        {
          code: "SS.C.26",
          text: "Debate the role of government in a free-market economy.",
          claimIds: ["bvc.sugar-program-trade-barriers", "bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial: the role of government in a market economy is taught through a concrete case — the U.S. sugar program's quotas, price supports, and tariffs — set against the contrast between traditional (reciprocity) and free-market economies. The course does not stage the standard's open debate as an assessed exercise.",
        },
        // — The first Personal Finance standard this catalog can honestly claim (2026-08-28).
        //   Until MONEY-02 shipped, the whole SS.C.30-39 strand sat in notClaimed with the words
        //   "meets none of these standards." That entry is now rewritten as superseded, not deleted.
        {
          code: "SS.C.38",
          text: "Utilize traditional and online banking services as well as examining fees, services and hidden costs of checking, savings, debit cards, Certificates of Deposit, etc.",
          claimIds: [
            "money.consumer-deposit-accounts",
            "money.consumer-financial-protection-mechanisms",
          ],
          coverage: "partial",
          note: "Partial, and the examining half is the strong half. Fees, services and costs of checking and savings accounts are worked from the disclosure rule that requires them (12 CFR 1030.4, before opening and on request, including the conditions under which a fee may be imposed); debit-card overdraft is taught from the Regulation E opt-in and its boundary; certificates of deposit appear as an insured time deposit; and the FDIC's own data on teller against mobile access supplies the traditional-and-online contrast. Two gaps, stated plainly: certificates of deposit are not taught as a savings instrument with a return, and 'utilize' as a hands-on exercise on a live account is beyond a self-paced course, which teaches the documents instead.",
        },
      ],
    },

    // ── Policy 2520.4 Appendix A — Personal Finance (effective July 1, 2025) ──
    //
    // ⚠️ THE BIGGEST CORRECTION IN THIS PASS, AND IT IS NOT ABOUT THIS COURSE. This file's header
    // and its notClaimed both said West Virginia's Civics course carries a Personal Finance strand
    // at SS.C.30 through SS.C.39, and that the catalog met none of it. Under the CURRENT rule that
    // is not merely stale, it is WRONG in a way that would mislead a teacher:
    //   · The current Civics course runs SS.C.1 through SS.C.37 ONLY. SS.C.38 and SS.C.39 do not
    //     exist anywhere in the rule.
    //   · SS.C.30 and SS.C.31 are now ECONOMICS standards ("Identify economic influences that impact
    //     business climate on the local, regional, and global level" and "Track the evolution of
    //     currency throughout history to facilitate the exchange of goods and services"), and
    //     SS.C.32 through SS.C.37 are GEOGRAPHY. So a claim or a rejection filed against SS.C.30
    //     today points at a completely different subject than it did.
    //   · The ten personal-finance standards were MOVED to Appendix A of the rule and renumbered
    //     1 through 10 with no code prefix at all.
    // The governing instrument is W. Va. 126CSR44D (Policy 2520.4), filed July 8, 2024 and EFFECTIVE
    // JULY 1, 2025, which by its own terms amends and repeals the June 9, 2016 version this file's
    // other entries were transcribed from. The rule explains the move: "A personal finance
    // graduation requirement, Personal Finance (CTE course code 1451), became effective with the
    // 2024-2025 freshman cohort. ... Until counties implement a stand-alone Personal Finance course,
    // counties must embed the Personal Finance standards found in Appendix A into Civics and/or Dual
    // Credit/AP® Government and Politics."
    //
    // WHAT THIS FRAMEWORK DOES AND DOES NOT FIX. It maps the two Appendix A items MONEY-01
    // (`credit-decisions`) genuinely reaches, and it corrects the record about where personal
    // finance now lives. It does NOT re-verify the SS.C civics and economics entries above, which
    // still cite the 2016 document; whether their codes and text survived the 2025 amendment is a
    // real open question and it is filed as a research check (`wv-2520-4-2025-renumbering`) rather
    // than assumed. The superseded 2016 text of SS.C.30-39 could not be obtained from West
    // Virginia's own publisher at all (the Secretary of State's CSR reader returns only the 2009
    // predecessor), so NO text is transcribed under those retired codes, per fetch-or-do-not-cite.
    //
    // THE CODE FIELD IS A CONSTRUCTED LOCATOR, AND THAT IS DELIBERATE. The publisher numbers these
    // items "1." through "10." with NO code prefix, so there is no code as printed to transcribe.
    // A bare "7" would be meaningless to a teacher and would collide with any future numbering, so
    // the locator names the appendix. The TEXT below is verbatim; only the locator is ours.
    //
    // SOURCE FORMAT NOTE. The PDF at the policy URL is a 59-page SCAN with no text layer. The
    // verbatim text below was transcribed from the machine-readable DOCX the same WVBE policy
    // viewer serves at that URL with `&alt=1`. Same policy, same words, readable encoding.
    {
      id: "wv-personal-finance-appendix-a",
      subject: "Social Studies",
      name: "West Virginia College- and Career-Readiness Standards for Social Studies — Appendix A, Personal Finance",
      publisher: WV_SS_PUBLISHER,
      version:
        "W. Va. 126CSR44D, WVBE Policy 2520.4 · filed July 8, 2024, effective July 1, 2025 · Appendix A, Personal Finance (items 1-10)",
      fetchedOn: "2026-08-28",
      sourceUrl: "https://wveis.k12.wv.us/wvboe/policies/policy.php?p=2520.4",
      adoption:
        "West Virginia moved its ten personal-finance standards out of the Civics course's numbered sequence and into Appendix A of Policy 2520.4, where they are printed as items 1 through 10 with no code prefix. The rule requires counties to embed them into Civics and/or Dual Credit and AP Government and Politics until a stand-alone Personal Finance course (CTE course code 1451, a graduation requirement from the 2024-2025 freshman cohort) is implemented; their permanent home will be the CTE policy, 126CSR44M. Of the ten, MONEY-01 (`credit-decisions`) reaches part of two: item 7 on consumer debt, through the annual percentage rate that makes offers comparable, and item 8's consumer-rights half. The other eight are postsecondary cost, income and lifestyle, careers, workforce preparedness, bankruptcy, taxes, banking services, and investing and insurance, none of which this catalog teaches.",
      standards: [
        {
          code: "Appendix A, item 7",
          text: "Examine the advantages and disadvantages of different types of consumer debt to make sound financial decisions (e.g., home loans, credit card debt, automobile loans, pay-day loans, and rent-to-own).",
          claimIds: ["money.cost-of-credit-apr", "money.credit-access-constraint"],
          coverage: "partial",
          note: "Partial, and narrowly. The course supplies the tool this standard needs, which is the annual percentage rate as the standardized figure the Truth in Lending Act requires so two offers stated in different units can be ranked, with the statutory computation worked so a learner can perform it. It does NOT survey the debt products the standard enumerates: home loans, credit cards, automobile loans, payday loans and rent-to-own are the subjects of MONEY-04 and MONEY-06, not of this course. A teacher planning against item 7 gets the comparison method and none of the product catalog.",
        },
        {
          code: "Appendix A, item 8",
          text: "Develop the knowledge and practices of a savvy consumer who knows consumer rights and responsibilities, can identify and avoid fraudulent practices and guard against identify theft.",
          claimIds: [
            "money.borrower-rights-dispute",
            "money.adverse-action-notice",
            "money.credit-discrimination-and-recourse",
            "money.who-may-read-the-file",
          ],
          coverage: "partial",
          note: "Partial on a clean split. The consumer-rights half is the course's core and is taught from the statutes rather than as general awareness: who may lawfully obtain your file under 15 U.S.C. 1681b, what a refusal must tell you under ECOA and Regulation B, the dispute and reinvestigation right under 1681i with its deadlines, the furnisher's own duties under 1681s-2, and the free annual file disclosure under 1681j. The course teaches NOTHING about identifying and avoiding fraudulent practices or guarding against identity theft, which is the standard's second half. (West Virginia's published text reads \"identify theft\"; the intended term is plainly identity theft, and the typo is the publisher's, transcribed here as printed.)",
        },
      ],
    },

    // ── WV College- and Career-Readiness Standards for English Language Arts — Grade 11 ──
    {
      id: "wv-ela-11",
      subject: "English/Language Arts",
      name: "West Virginia College- and Career-Readiness Standards for English Language Arts — Grade 11 (ELA.11)",
      publisher: WV_SS_PUBLISHER,
      version:
        "West Virginia College- and Career-Readiness Standards for English Language Arts (WVBE Policy 2520.1A) · Grade 11 (ELA.11)",
      fetchedOn: "2026-07-19",
      sourceUrl: WV_ELA_SOURCE,
      adoption:
        "West Virginia adopted the Common Core in 2010 but REPEALED it in 2015 and re-authored its English Language Arts standards under West Virginia's own codes (ELA.<grade>.<n>) and wording. These are therefore mapped as a bespoke West Virginia framework — NOT aliased to the shared Common Core ELA file — even where a West Virginia standard's wording runs close to a Common Core one, because the framework, the numbering, and the state's decision to leave the Common Core are West Virginia's own. We claim the grade-11 informational-reading, argument-writing, and research standards the catalog's media-literacy and source-evaluation teaching genuinely meets; the argument and research standards are partial because only the Coffee project currently ships a graded assignment. Transcribed verbatim from the West Virginia ELA Standards, Grades 9-12 (see the file header for provenance).",
      standards: [
        {
          code: "ELA.11.12",
          text: "Determine an author’s point of view or purpose in an informational text in which the rhetoric is particularly effective, analyzing how style and content contribute to the power, persuasiveness, or beauty of the text.",
          claimIds: ["bvc.rhetoric-power-persuasion"],
          coverage: "full",
          note: "Determining an author's point of view where the rhetoric is particularly effective is taught directly — how style and content give a text its persuasive power — the strongest single alignment on this page.",
        },
        {
          code: "ELA.11.15",
          text: "Integrate and evaluate multiple sources of information presented in different media or formats as well as in words in order to address a question or solve a problem.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Integrating and evaluating multiple sources — the documentary record against the oral record in the Nathan Green lesson, and a planter's account against two first-person accounts by formerly enslaved writers — is exactly this standard, including noting where the sources disagree.",
        },
        {
          code: "ELA.11.16",
          text: "Delineate and evaluate the reasoning in influential U.S. informational texts, including the application of constitutional principles and the premises, purposes, and arguments in works of public advocacy.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "Delineating and evaluating an author's premises, claims, and reasoning — and spotting the fallacies — is taught as a transferable skill on real advocacy and informational texts.",
        },
        {
          code: "ELA.11.20",
          text: "Write arguments to support claims in an analysis of substantive topics or texts, using valid reasoning and relevant and sufficient evidence.",
          claimIds: ["bvc.coffee-project-argument-paper", "bvc.evaluate-claims-fallacies"],
          coverage: "partial",
          note: "Partial: writing an evidence-based argument is taught, and evaluating claims and reasoning is taught throughout, but only the Coffee episode currently ships a graded argument paper. Where it runs, it meets this standard squarely.",
        },
        {
          code: "ELA.11.26",
          text: "Conduct short, as well as more sustained, research projects to answer a question, (including a self-generated question), or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis", "bvc.coffee-project-research-process"],
          coverage: "partial",
          note: "Partial: the research-project standard is met by the Coffee episode's graded project — a sustained inquiry synthesizing multiple sources — but only that episode currently ships the assignment.",
        },
        {
          code: "ELA.11.27",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation (MLA or APA).",
          claimIds: ["bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "Partial: gathering from multiple authoritative sources, assessing each, avoiding plagiarism and following a citation format (the catalog uses APA) is taught and practiced in the Coffee project, the one episode that currently ships a graded assignment.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no West Virginia College- and Career-Readiness mathematics standard.",
    },
    {
      heading: "Science — considered, deferred, not claimed this pass.",
      body: "West Virginia's science standards (WVBE Policy 2520.3C, adopted 2021) are NGSS-derived, so the catalog's one honest science idea — resource availability and climate shaping human activity (the substance of NGSS HS-ESS3-1) — would in principle map to a West Virginia science code. But the West Virginia-hosted and regulatory copies we could retrieve are image-only scans with no extractable, byte-faithful text, and our rule is verbatim-or-nothing. We will not alias the shared NGSS file to a West Virginia code we could not confirm against West Virginia's own printed wording, nor transcribe from a scan we cannot read exactly. Science is deferred until that verbatim text is in hand.",
    },
    {
      heading: "West Virginia's own state structure is taught more fully than any one Civics standard names.",
      body: "West Virginia Civics teaches the state's singular origin (the only state formed by breaking away from another, its pro-Union western counties splitting from Virginia in 1863) and its Constitution of 1872, the plural executive with no Lieutenant Governor (the Senate President succeeds the Governor) and its weak veto, the 100-Delegate/34-Senator part-time Legislature and its 60-day session, the 2015 switch to nonpartisan judicial elections and the 2022 Intermediate Court of Appeals, the absence of any statewide citizen initiative, and the 55 counties — all from West Virginia's own sources. SS.C.20 (state and local government) and SS.C.13 (state judicial systems) host most of it, but the WVCCRS Civics standards are U.S.-system concept statements, not a West-Virginia-government checklist, so West Virginia's origin story, its plural executive, and its recent court changes have no code of their own.",
    },
    {
      heading: "The Civics standards on parties, interest groups, and world affairs.",
      body: "Standards the catalog's civics does not genuinely teach are not claimed: SS.C.4 (collaboratively build a model to defend the American Republic — a classroom performance task), SS.C.16 (the evolution and function of the two-party system), SS.C.18 (the impact of special interest groups on public policy), and SS.C.21 (cooperation, competition, and conflict among nations — the United Nations, international treaties, terrorism). The catalog's civics is domestic structure, rights, and participation, so these are left unclaimed.",
    },
    {
      heading: "Personal Finance — this rejection has been superseded, and its codes no longer mean what it said.",
      body: "Until 2026-08-28 this entry said West Virginia's Civics course carried a full Personal Finance strand at SS.C.30-39 and that the catalog met none of it. Both halves needed correcting. On the codes: under W. Va. 126CSR44D as filed July 8, 2024 and effective July 1, 2025, the Civics course runs SS.C.1 through SS.C.37 only, SS.C.38 and SS.C.39 do not exist, SS.C.30 and SS.C.31 are now ECONOMICS standards and SS.C.32-37 are GEOGRAPHY, and the ten personal-finance standards were moved to Appendix A of the rule and renumbered 1 through 10 with no code prefix. A rejection filed against SS.C.30 today would point at a standard about business climate, not about money management. On the substance: the catalog now teaches one personal-finance course, MONEY-01, and two Appendix A items are claimed above as partials, item 7 through the annual percentage rate and item 8 on its consumer-rights half, each with its gap named. The other eight are still not claimed and the reasons are specific. Items 1 through 4 are postsecondary cost, income and lifestyle against education, career expectations, and workforce preparedness including resumes and mock interviews; item 5 is bankruptcy; item 6 is completing income tax forms; item 9 is banking services and account fees; item 10 is investing and insurance. None of that is in this catalog, and MONEY-01 states in three separate lessons that it gives no financial advice, so a budgeting or investing claim would misdescribe it. TWO THINGS THIS PASS COULD NOT SETTLE, recorded rather than assumed: the superseded 2016 text of SS.C.30-39 could not be obtained from West Virginia's own publisher, so nothing is transcribed under those retired codes; and whether the SS.C civics and economics codes claimed elsewhere in this file also moved in the 2025 amendment has not been re-verified and is filed as a research check."
    },
    {
      heading: "Personal Finance (SS.C.30-39) — one of ten, now that banking is taught.",
      body: "This entry used to read that the catalog taught none of West Virginia's Personal Finance strand. That is no longer true and the correction is recorded here rather than deleted, so a teacher can see what changed. SS.C.38 (banking services, and the fees, services and hidden costs of checking, savings, debit cards and certificates of deposit) is now claimed, partially, and supersedes the old blanket rejection. The other nine remain unclaimed and are named so the gap stays visible: SS.C.30 (the cost of postsecondary education), SS.C.31 (income, lifestyle and career against education and aid decisions), SS.C.32 (careers and lifelong earning potential), SS.C.33 (workforce preparedness, resumes and interviews), SS.C.34 (the causes of bankruptcy), SS.C.35 (completing federal and state income tax forms), SS.C.36 (types of consumer debt), SS.C.37 (consumer rights, fraudulent practices and identity theft), and SS.C.39 (investments and insurance). Later courses in the same series are planned to reach several of these; none is claimed before it is taught.",
    },
    {
      heading: "Geography (SS.C.40-43) — checked, thin overlap, not claimed.",
      body: "The Civics course's Geography strand (census and demographic analysis, geopolitical research, sustainable development, and geographic information systems) is human-environment and spatial geography. The catalog's growing-belts, resource-map, and climate content is geographic in flavor, but its overlap with these specific standards is adjacency-level at best; where that content maps squarely — how trade and commodities distribute wealth and shape economies — it is claimed under the Economics standards instead, not padded into Geography.",
    },
    {
      heading: "The remaining Economics standards (SS.C.23, 24, 27, 28, 29).",
      body: "Beyond SS.C.25 (supply and demand affecting price) and SS.C.26 (the role of government in a free market), the Economics strand's other standards — opportunity cost and scarcity, allocating the factors of production, the household/business/government circular flow, local-to-global business climate, and the historical evolution of currency — are not the substance of this catalog's commodity history, so they are left unclaimed rather than stretched.",
    },
    {
      heading: "The ELA grades 9, 10, and 12 standards, and the grade-11 standards outside the reading/writing/research claims above.",
      body: "West Virginia's ELA standards run across four grade bands (ELA.9, ELA.10, ELA.11, ELA.12). We claim only the grade-11 informational-reading, argument-writing, and research standards the catalog's media-literacy and source-evaluation teaching genuinely meets. The literature strands, the language and speaking/listening strands, and the near-identical standards in the other grade bands are not separately claimed, to avoid mapping the same teaching against four grades' worth of duplicate codes.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "West Virginia's closest frameworks for these (its Technology and Computer Science standards, WVBE Policy 2520.14, and its world-languages standards) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no West Virginia claims this pass.",
    },
  ],
};
