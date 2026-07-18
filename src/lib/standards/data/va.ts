// ─────────────────────────────────────────────────────────────────────────────
// VIRGINIA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-va` was written FROM Virginia's own official sources
// (law.lis.virginia.gov, elections.virginia.gov, vacourts.gov), so Virginia's civics
// anchor course gets its flagship home here.
//
// What Virginia actually adopted (verified against the Board-approved document itself, not assumed):
//   · History & Social Science — the Virginia Standards of Learning (SOL) are Virginia's OWN
//     framework (famously never Common Core / never NGSS). High-school civics is the Grade 12
//     "Virginia and United States Government" course, whose 2023 SOL use the GOVT.* prefix (a
//     content-neutral "Skills GOVT" strand plus GOVT.1-GOVT.14). GOVT.10 is titled "the state and
//     local governments as described in the Constitution of Virginia" — the one place a state SOL
//     names Virginia's own structure squarely — so the Virginia flagship's structure lessons have a
//     genuine home there (mapped full). The rest of the GOVT course is federal.
//   · English — Virginia writes its OWN English SOL. NOT fetched from an acceptable source this
//     pass; see notClaimed (fetch-or-don't-cite).
//   · Science — Virginia writes its OWN Science SOL (Virginia is NOT an NGSS state). Not fetched
//     this pass; see notClaimed.
//
// Provenance: the Virginia DOE portals (scorecard.doe.virginia.gov refuses our tooling; the DOE
// document server times out), so the GOVT standards were transcribed from a byte-faithful mirror of
// the Virginia Board of Education's own titled document, "History and Social Science Standards of
// Learning as Approved 4-20-23" (the 2023 SOL the Board adopted April 20, 2023; the file carries a
// "draft has not been edited for final publication" watermark, i.e. the adopted-text version),
// hosted by WUSA9 (https://interactive.wusa9.com/pdfs/Virginia-BOE-History-and-Social-Science-SOL-as-Approved-4-20-23.pdf),
// GOVT course on pages 61-65. `sourceUrl` points to the canonical Virginia DOE SOL page. Fetched
// 2026-07-18.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "VA",
  frameworks: [
    // ── Virginia and United States Government (2023 SOL) ───────────────────
    {
      id: "va-govt",
      subject: "Social Studies",
      name: "Virginia and United States Government — 2023 History and Social Science Standards of Learning",
      publisher: "Virginia Department of Education (VDOE) / Virginia Board of Education",
      version: "2023 · Board-approved April 20, 2023 (Grade 12 Government)",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://www.doe.virginia.gov/teaching-learning-assessment/k-12-standards-instruction/history-and-social-science/standards-of-learning",
      adoption:
        "Virginia's Grade 12 civics anchor course, defining the knowledge that enables citizens to participate in civic and economic life. The 2023 SOL use the GOVT.* prefix across a content-neutral Skills strand and GOVT.1-GOVT.14. The course is overwhelmingly about the federal system, but GOVT.10 names Virginia's own state and local government 'as described in the Constitution of Virginia', so the Virginia flagship course is mapped there (full). Sub-standards are cited by their printed letter (GOVT.10a); where a standard's clause is too short to stand alone, the stem is cited instead.",
      standards: [
        // ── State and Local Government (GOVT.10) — the Virginia flagship home ──
        {
          code: "GOVT.10a",
          text: "analyzing legislative, executive, and judicial branches",
          claimIds: [
            "civics.va-three-branches",
            "civics.va-governor-one-term",
            "civics.va-courts-legislature",
          ],
          coverage: "full",
          note: "Virginia's own three branches are taught in depth: the General Assembly (House of Delegates and Senate), the plural executive with the nation's only one-consecutive-term governor, and a judiciary whose judges are elected by the Legislature itself.",
        },
        {
          code: "GOVT.10b",
          text: "explaining the law-making process at the state and local levels",
          claimIds: ["civics.va-bill-process", "civics.va-constitution"],
          coverage: "full",
          note: "How a bill becomes a Virginia law — including the Governor's distinctive power to propose amendments and send a bill back — and, because Virginia has no citizen initiative, the two-sessions-plus-a-referendum path to amend the Constitution of Virginia.",
        },
        {
          code: "GOVT.10c",
          text: "examining the structure and powers of local governments (county, city, and town)",
          claimIds: ["civics.va-local-government"],
          coverage: "full",
          note: "Virginia's distinctive local map is the lesson: 95 counties plus 38 independent cities that belong to no county, and the town-versus-city distinction the standard names exactly.",
        },
        {
          code: "GOVT.10d",
          text: "analyzing the relationship between state and local governments and the roles of regional authorities, governing boards, and commissions",
          claimIds: ["civics.va-local-government"],
          coverage: "partial",
          note: "Partial: the state-local relationship is taught as Virginia's Dillon's Rule (localities have only the powers the state expressly grants), but the regional authorities, governing boards, and commissions the standard also names are not detailed.",
        },
        {
          code: "GOVT.10f",
          text: "investigating and explaining the ways individuals and groups exert influence on state and local governments",
          claimIds: ["civics.va-get-involved"],
          coverage: "full",
          note: "The flagship closes on exactly this: contacting your Delegate and Senator in the short Richmond session, showing up at county boards of supervisors and city councils, and running for reachable local offices.",
        },
        // ── Skills strand ──
        {
          code: "Skills GOVT c",
          text: "questioning and using inquiry to construct arguments using evidence from multiple sources",
          claimIds: ["bvc.coffee-project-argument-paper", "bvc.source-evaluation-modelled"],
          coverage: "partial",
          note: "Partial: multi-source argument construction is modelled throughout and required in the Coffee project's argument paper (with a counterargument section), but graded student practice is limited to that one project.",
        },
        {
          code: "Skills GOVT j",
          text: "contextualizing corroborating and evaluating sources for credibility, propaganda, and bias to determine patterns and trends in Virginia and United States government and politics",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.reading-ads-for-omission",
            "bvc.evaluate-claims-fallacies",
          ],
          coverage: "partial",
          note: "Partial: evaluating sources for credibility, propaganda, and bias is a BVC through-line (reading an ad for what it omits, an industry's manufactured doubt, weighing conflicting accounts against each other) — modelled in every episode, graded only in the Coffee project.",
        },
        // ── Foundations / democracy / Constitution (GOVT.1-4) ──
        {
          code: "GOVT.1c",
          text: "evaluating the foundational principles expressed in the Constitution of Virginia, the Declaration of Independence, Articles of Confederation, and the Constitution of the United States",
          claimIds: [
            "civics.articles-to-constitution",
            "civics.constitution-article-by-article",
            "civics.va-constitution",
          ],
          coverage: "partial",
          note: "Partial: why the Articles of Confederation failed and led to the 1787 Constitution, worked article by article, and Virginia's own Constitution of 1971 in the flagship; a document-by-document evaluation that also weighs the Declaration of Independence is not the frame.",
        },
        {
          code: "GOVT.2a",
          text: "explaining the concepts of popular sovereignty, natural rights, the rule of law, self-government and “consent of the governed”",
          claimIds: ["civics.preamble-purposes", "civics.constitution-article-by-article"],
          coverage: "partial",
          note: "Partial: 'we the people' and the consent of the governed are taught through the Preamble, and the rule of law through the Constitution worked article by article; a dedicated treatment of each named concept (popular sovereignty, natural rights, self-government) is not.",
        },
        {
          code: "GOVT.3b",
          text: "evaluating the purposes for government stated in the Preamble",
          claimIds: ["civics.preamble-purposes"],
          coverage: "full",
          note: "The Preamble is worked clause by clause as the purposes of government — the whole of the standard.",
        },
        {
          code: "GOVT.3c",
          text: "defining the structure and authority of the national government as outlined in Article I, Article II, and Article III",
          claimIds: ["civics.federal-articles-i-iii", "civics.constitution-article-by-article"],
          coverage: "full",
          note: "Articles I-III and the branch relationships they create are taught directly.",
        },
        {
          code: "GOVT.3d",
          text: "examining the differences between the powers and authority of state and national governments",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "Federalism worked in full: why power is split, and the enumerated/implied/reserved/concurrent taxonomy with McCulloch v. Maryland.",
        },
        {
          code: "GOVT.3e",
          text: "connecting the fundamental principles of checks and balances and separation of powers to the three branches of government",
          claimIds: ["civics.separation-checks-balances"],
          coverage: "full",
          note: "Separation of powers and checks and balances are taught head-on, tied to the three branches.",
        },
        {
          code: "GOVT.3f",
          text: "describing how the Bill of Rights affirms natural rights as something that precedes politics",
          claimIds: ["civics.bill-of-rights-overview", "civics.bill-of-rights-origin"],
          coverage: "full",
          note: "The Bill of Rights as a document and what it protects — taught both in the general rights course and the constitution course.",
        },
        {
          code: "GOVT.4e",
          text: "evaluating how the U.S. Constitution and the Bill of Rights protect freedoms and limit government",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.bill-of-rights-overview",
            "rights.limits-on-rights",
          ],
          coverage: "full",
          note: "Both halves: how the Constitution limits government (separation of powers, checks and balances) and how the Bill of Rights protects freedoms — including when government may and may not constitutionally limit a right.",
        },
        // ── Citizenship (GOVT.5, cited at the stem) ──
        {
          code: "GOVT.5",
          text: "The student will apply history and social science skills to explain the rights and responsibilities of United States Citizenship",
          claimIds: [
            "civics.us-citizenship-law",
            "civics.jury-service",
            "civics.election-mechanics",
            "civics.voter-registration",
            "civics.citizenship-responsibilities",
          ],
          coverage: "partial",
          note: "Partial: the responsibilities the catalog teaches as practice are strong — paths to citizenship (GOVT.5a), jury service (5c, an entire course), registering and voting (5d), and keeping informed (5f). Obeying the law and paying taxes, public service, personal fiscal responsibility, and Selective Service registration (5b, 5e, 5g, 5h) are not taught.",
        },
        // ── Elections (GOVT.6) ──
        {
          code: "GOVT.6c",
          text: "describing the nomination and election process, including the organization and evolving role of political parties and interest groups",
          claimIds: ["civics.election-mechanics"],
          coverage: "partial",
          note: "Partial: the nomination and election process (registration, primaries and caucuses, how you vote, counting and certifying) is taught thoroughly; the evolving role of parties and interest groups is not a systematic thread.",
        },
        {
          code: "GOVT.6d",
          text: "analyzing the influence of media coverage, campaign advertising, public opinion polls, social media, and digital communications",
          claimIds: [
            "bvc.media-fallacies-recurring",
            "media.marketing-omissions",
            "civics.campaign-help",
          ],
          coverage: "partial",
          note: "Partial: analyzing persuasion and advertising is a BVC strength (Torches of Freedom, reading ads for omission) and the campaign course teaches campaigning lawfully; political public-opinion polling and a general media-influence analysis are not the frame.",
        },
        {
          code: "GOVT.6e",
          text: "explaining the role of the Electoral College and the impact of reapportionment and redistricting on elections and governance",
          claimIds: ["civics.electoral-college", "civics.va-elections"],
          coverage: "partial",
          note: "Partial: the Electoral College's mechanics and purpose are taught in full, and Virginia's bipartisan Redistricting Commission is taught in the flagship; the general impact of reapportionment on governance is not worked.",
        },
        // ── Federal branches (GOVT.7-9) ──
        {
          code: "GOVT.7",
          text: "The student will apply history and social science skills to describe the scope and limits of the powers of the federal legislative branch of the U.S. government as delineated in Article I of the Constitution",
          claimIds: [
            "civics.federal-articles-i-iii",
            "civics.federal-bill-process",
            "civics.three-branches-federal",
          ],
          coverage: "partial",
          note: "Partial: Article I's structure and the complete federal lawmaking process (committees through veto override) are taught; the 'scope and limits' of the enumerated legislative powers are not treated systematically.",
        },
        {
          code: "GOVT.8",
          text: "The student will apply history and science skills to describe the powers of the executive branch of the U.S. government as delineated in Article II of the Constitution",
          claimIds: ["civics.three-branches-federal", "civics.federal-articles-i-iii"],
          coverage: "partial",
          note: "Partial: the executive branch is taught as one of the three federal branches and through Article II; how executive power has changed over time (the 20th/22nd/25th Amendments the standard names) is not worked. (Transcribed as printed, including the document's 'history and science skills'.)",
        },
        {
          code: "GOVT.9a",
          text: "describing the organization, jurisdiction, and proceedings of federal courts",
          claimIds: ["civics.federal-judiciary-structure"],
          coverage: "full",
          note: "The federal judiciary from district courts to the Supreme Court, its independence, and the checks on it.",
        },
        {
          code: "GOVT.9b",
          text: "explaining how the Marshall Court established the Supreme Court as an independent branch of government in Marbury v. Madison",
          claimIds: ["civics.judicial-review-marbury"],
          coverage: "full",
          note: "Judicial review is taught by name, through Marbury v. Madison.",
        },
        {
          code: "GOVT.9c",
          text: "describing how the Supreme Court decides cases",
          claimIds: ["rights.scotus-precedent", "civics.federal-judiciary-structure"],
          coverage: "full",
          note: "How the Court writes an opinion — majority, concurrence, dissent — and how precedent works and expands rights over time.",
        },
        // ── Civil liberties and civil rights (GOVT.11) ──
        {
          code: "GOVT.11b",
          text: "explaining the purpose of the Bill of Rights, with emphasis on First Amendment freedoms",
          claimIds: ["civics.bill-of-rights-overview", "rights.landmark-cases"],
          coverage: "full",
          note: "The Bill of Rights and the First Amendment freedoms — speech, religion, press, assembly — taught as landmark cases a student can apply (Tinker, Brandenburg), including at school and online.",
        },
        {
          code: "GOVT.11c",
          text: "analyzing the rights of the accused and due process of law expressed in the Bill of Rights and the Fourteenth Amendments",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial: the Fourth Amendment (searches, stops, and your digital life — Mapp, Terry, T.L.O., Riley, Carpenter) and the limits on rights are taught as applicable rules; a full rights-of-the-accused and due-process treatment is not.",
        },
        {
          code: "GOVT.11d",
          text: "explaining how the Supreme Court has applied most of the protections of the Bill of Rights to the states through a process of selective incorporation",
          claimIds: ["rights.scotus-precedent"],
          coverage: "partial",
          note: "Partial: how Supreme Court precedent expands rights over time is taught; 'selective incorporation' as a named doctrine is not.",
        },
        {
          code: "GOVT.11e",
          text: "evaluating the balance between individual liberties and the public interest",
          claimIds: ["rights.limits-on-rights"],
          coverage: "full",
          note: "When government may constitutionally limit a right, and why — time-place-manner, incitement, school speech, reasonable suspicion — is exactly this balance.",
        },
        {
          code: "GOVT.11f",
          text: "examining how civil liberties and civil rights are protected under the law",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial: how liberties are protected is taught through the landmark rights cases and the limits doctrine; a systematic civil-liberties-versus-civil-rights framework is not.",
        },
        // ── The United States in a changing world (GOVT.12-13) ──
        {
          code: "GOVT.12a",
          text: "describing the responsibilities of the national government for foreign policy and national security",
          claimIds: ["bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: foreign policy is taught through one deep case — the foreign-policy arm of the War on Drugs (Bolivia's model against U.S.-funded eradication, the Golden Crescent) — not as a general treatment of foreign-policy and national-security responsibilities.",
        },
        {
          code: "GOVT.12c",
          text: "examining the relationship of Virginia and the United States in the global economy, including trends in international trade",
          claimIds: [
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
            "bvc.sugar-program-trade-barriers",
            "bvc.growing-belts-resource-maps",
          ],
          coverage: "partial",
          note: "Partial: the United States in the global commodity economy is taught in real depth (value chains, the sugar program's trade barriers, the growing belts that drive trade); Virginia's specific role in the global economy is not.",
        },
        {
          code: "GOVT.13a",
          text: "evaluate the economic and political systems of capitalism, communism, Marxism, socialism, fascism, authoritarianism, and totalitarianism",
          claimIds: ["bvc.traditional-vs-market-economies", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: reciprocity economies against market economies (directly, at length) and a communist workers' state against the union that unmade it (Solidarność) are taught; a survey of all the named systems is not.",
        },
        {
          code: "GOVT.13c",
          text: "comparing and contrasting the role of government in capitalism and socialism as economic systems, including the role of government in each and individual economic freedoms",
          claimIds: ["bvc.traditional-vs-market-economies", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: the role of government in a market versus a command economy is taught through the reciprocity/market contrast and martial-law Poland; a systematic capitalism-versus-socialism comparison is not.",
        },
        {
          code: "GOVT.13e",
          text: "evaluating the factors that influence production and distribution of goods in a market system",
          claimIds: ["bvc.price-elasticity-demand", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: what moves prices (inelastic demand absorbing a price spike) and where goods can be produced (the growing belts) are taught through commodity markets; a general production-and-distribution unit is not.",
        },
        {
          code: "GOVT.13f",
          text: "explaining how competition and free enterprise influence the local, national, and global economies",
          claimIds: ["bvc.price-elasticity-demand", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: competition and value capture along real commodity chains are taught (the smile curve, who gets paid); a general free-enterprise treatment is not.",
        },
        // ── The role of government in the economy (GOVT.14) ──
        {
          code: "GOVT.14a",
          text: "explaining government’s limited but important role in free enterprise and how that affects individual economic freedoms",
          claimIds: ["bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Partial: government's role in a market is taught through the U.S. sugar program (quotas, price supports, tariffs); the effect on individual economic freedoms is implied, not worked.",
        },
        {
          code: "GOVT.14c",
          text: "evaluating government’s establishment and maintenance of the rules and institutions in which markets operate, including the establishment and enforcement of property rights, contracts, consumer rights, labor-management relations, environmental protection, and competition in the marketplace",
          claimIds: ["history.wagner-act", "history.gilded-age-labor", "bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Partial: labor-management relations (the Wagner Act's regime and who it excluded, the Gilded-Age fight that led there) and market rules (the sugar program) are worked; property rights, contracts, consumer rights, and environmental protection are not.",
        },
        {
          code: "GOVT.14g",
          text: "evaluating the trade-offs in government decisions",
          claimIds: ["bvc.sugar-program-trade-barriers", "bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: trade-offs in government decisions are taught through the sugar program (intended stable prices, unintended ~$3.5bn/yr consumer cost) and the War on Drugs (the balloon effect); not as a general decision-analysis method.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Virginia mathematics standard.",
    },
    {
      heading: "Virginia's English and Science SOL — deferred, not denied.",
      body: "Virginia writes its own English SOL and its own Science SOL (Virginia is NOT an NGSS state). Our rule is fetch-or-don't-cite: the Virginia DOE's standards portal refused our tooling this pass, so these courses carry no Virginia claims yet. The BVC rhetoric, media-literacy, and research-project work that maps to them elsewhere is real; it is the Virginia text we have not yet retrieved from an acceptable source. (The GOVT Skills strand does give our source-evaluation and argument work a genuine home — Skills GOVT c and j above.)",
    },
    {
      heading: "The civic-identity, comparative-systems, and money-in-politics objectives we do not teach.",
      body: "GOVT.2b-f and GOVT.4a-d (comparing forms of government; Tocqueville's five values; the mottos 'E Pluribus Unum' and 'In God We Trust'; the American Creed) ask for civic-identity content the catalog does not teach. GOVT.3a (The Federalist Papers #10 and #51), GOVT.1d (George Mason's Virginia Declaration of Rights, Jefferson's Statute for Religious Freedom, Madison's role in the Bill of Rights), GOVT.6a-b/6f (suffrage expansion, campaign finance, gerrymandering), GOVT.9d (originalism vs. judicial activism), GOVT.10e (partisan vs. nonpartisan offices), GOVT.13b/13d (Smith/Marx/Keynes/Hayek/Friedman/Sowell; the Bill of Rights vs. the Communist Manifesto), and GOVT.14b/14d-f (public goods, taxation, fiscal and monetary policy) are named but not genuinely taught, so we do not claim them.",
    },
    {
      heading: "GOVT.3g (the amendment process) — a real match we cannot cite as printed.",
      body: "GOVT.3g, 'explaining the amendment process', is a genuine match — the catalog teaches both Article V and Virginia's two-sessions-plus-a-referendum path. But the printed clause is under the ~40-character floor the isolation suite enforces to reject paraphrases, and we will not pad it. Virginia's amendment path is instead cited where it has longer standard text to attach to (GOVT.10b, GOVT.1c). The gap is in the citeable grain, not the lesson.",
    },
  ],
};
