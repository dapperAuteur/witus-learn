// ─────────────────────────────────────────────────────────────────────────────
// SOUTH DAKOTA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-sd` was written FROM South Dakota's own official sources (the SD DOE Social
// Studies Standards, sdlegislature.gov, sdsos.gov, and ujs.sd.gov), so South Dakota's civics
// flagship gets its 1:1 state-civics course.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from the SD DOE's own record:
//   · Social studies — BESPOKE, and unusually content-bearing. The South Dakota Social Studies
//     Standards, adopted April 17, 2023, are South Dakota's own. They carry a full 9th-12th grade
//     "United States Government/American Civics" course (anchor codes 9-12.C.1 … 9-12.C.18, each
//     with lettered indicators). It is the anchor for the South Dakota Civics flagship, and — unlike
//     Arkansas's or California's overwhelmingly FEDERAL civics standards — its anchor 9-12.C.17 is
//     entirely about SOUTH DAKOTA and Native American government and politics, giving the flagship's
//     South Dakota-structure lessons a genuine 1:1 home (9-12.C.17.B state government, .C local
//     government, .D state/local elections, .E the nine federally recognized tribal governments, .F
//     the federal-state-local-tribal relationship). The federal civics ladder maps to 9-12.C.5-7,
//     the media-literacy method to 9-12.C.16.D, and the commodity-economics content to the two
//     economics indicators in 9-12.C.13.
//   · ELA — SOUTH DAKOTA'S OWN (Common-Core-derived, but NOT blind-aliased). South Dakota adopted
//     the Common Core in 2010 but has revised its own English Language Arts standards since; the
//     current SD ELA standards are South Dakota's own document, so the rule is compare-before-
//     aliasing. South Dakota's own reading/writing standards were not fetched-and-verified this pass,
//     so — verbatim-or-nothing — we DEFER them (published in notClaimed) rather than assume the
//     shared Common Core ELA text still matches South Dakota's printed standards. The catalog's
//     source-evaluation and media-literacy work is instead claimed against South Dakota's own civics
//     media-literacy standard, 9-12.C.16.D.
//   · Math — SOUTH DAKOTA'S OWN (Common-Core-derived); and this catalog teaches no mathematics
//     anyway (notClaimed).
//   · Science — SOUTH DAKOTA'S OWN. The South Dakota Science Standards (2015) are NGSS-BASED but
//     South Dakota's own document, so the shared ngss file is NOT blind-aliased; deferred
//     fetch-and-compare-or-don't-cite (published in notClaimed).
//
// Provenance: the 9th-12th grade United States Government/American Civics standards and their
// lettered indicators were transcribed VERBATIM from the SD-DOE-published "South Dakota Social
// Studies Standards" (adopted April 17, 2023), fetched 2026-07-19 from the canonical SD DOE PDF
// (the sourceUrl below), which renders clean text (extracted deterministically); every indicator
// mapped below was verified to read as clean English before use. South Dakota cites these standards
// as "9-12.C.<anchor>.<letter>" (e.g., 9-12.C.17.B); we cite them exactly so. The single-letter
// discipline tags printed at the END of each indicator in the source (C = Civics, H = History,
// E = Economics, and combinations such as HC/CE/HCE) mark South Dakota's cross-discipline
// integration; they are NOT part of the code or of the standard's text and are excluded here.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const SD_SS = "https://doe.sd.gov/contentstandards/documents/SS-Standards-2023.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "SD",
  frameworks: [
    // ── 9th-12th Grade United States Government/American Civics (SD Social Studies Standards, 2023) ──
    {
      id: "sd-civics",
      subject: "Social Studies",
      name: "South Dakota Social Studies Standards — 9th-12th Grade United States Government/American Civics",
      publisher: "South Dakota Department of Education (SD DOE) / South Dakota Board of Education Standards",
      version: "South Dakota Social Studies Standards, adopted April 17, 2023 · 9-12 United States Government/American Civics",
      fetchedOn: "2026-07-19",
      sourceUrl: SD_SS,
      adoption:
        "South Dakota's 9th-12th grade United States Government/American Civics course is the anchor for the South Dakota Civics flagship. South Dakota writes its own social studies standards (adopted April 17, 2023), and this course is content-bearing: its anchor 9-12.C.17 is entirely about South Dakota and Native American government and politics — a genuine 1:1 home for South Dakota's own state, local, and tribal government — while 9-12.C.5-7 host the general federal civics ladder, 9-12.C.16 hosts elections, participation, and media literacy, and 9-12.C.13 hosts two market-economics indicators. Transcribed verbatim from the SD DOE 2023 document (see the file header for the provenance note). The founding-philosophy, primary-source-reading, slavery, Civil War, Progressivism, and foreign-policy content that fills much of this course is published as loudly in notClaimed as the claims below.",
      standards: [
        // — 9-12.C.17 South Dakota and Native American government and politics (the flagship's home) —
        {
          code: "9-12.C.17.B",
          text: "The student explains the structure of the South Dakota state government, the function of its branches, and the requirements and responsibilities of elected officials based on the current South Dakota Constitution.",
          claimIds: [
            "civics.sd-three-branches",
            "civics.sd-courts",
            "civics.sd-bill-process",
            "civics.sd-constitution-direct-democracy",
          ],
          coverage: "full",
          note: "The flagship's primary home: South Dakota's own state government is taught in depth — the 1889 constitution, the 35-district Legislature (a 35-seat Senate and a 70-seat House, each district electing one senator and two representatives), the plural executive (a joint-ticket Governor and Lieutenant Governor with a separately elected Attorney General, Secretary of State, Auditor, Treasurer, and Commissioner of School and Public Lands), and the merit-selected-then-retained Supreme Court.",
        },
        {
          code: "9-12.C.17.C",
          text: "The student explains the structure of the local government in whose jurisdiction the school is located.",
          claimIds: ["civics.sd-local-government", "civics.local-government-layers"],
          coverage: "full",
          note: "South Dakota local government is taught as South Dakota's own: its 66 counties, the organized civil townships that survive across much of the eastern part of the state, and cities and towns — and the general layer of special districts and boards people forget.",
        },
        {
          code: "9-12.C.17.D",
          text: "The student explains the election process at the state and local levels of government in South Dakota, including the importance of frequent and fair elections.",
          claimIds: ["civics.sd-elections", "civics.sd-get-involved"],
          coverage: "full",
          note: "South Dakota's state and local elections are taught as South Dakota's — its first-in-the-nation citizen initiative and referendum, no-excuse absentee voting, and the photo-ID request at the polls — with the standing advice to confirm current rules with the Secretary of State.",
        },
        {
          code: "9-12.C.17.E",
          text: "The student explains the constitutions, structure, and function of various tribal governments within South Dakota, including the nine federally recognized tribes of South Dakota.",
          claimIds: ["civics.sd-tribal-governments"],
          coverage: "full",
          note: "A distinctive South Dakota civics topic taught directly: the constitutions, structure, and function of the nine federally recognized tribal governments within South Dakota.",
        },
        {
          code: "9-12.C.17.F",
          text: "The student explains the relationship, both historical and at present, between various levels of government within South Dakota, including between federal, state, local, and tribal governments.",
          claimIds: ["civics.sd-tribal-governments", "civics.federalism-why-split-power", "civics.sd-local-government"],
          coverage: "full",
          note: "The federal-state-local-tribal relationship the standard names is taught through federalism (why power is split among levels) and the South Dakota tribal-and-local-government lesson.",
        },
        {
          code: "9-12.C.17.A",
          text: "The student tells the story of how South Dakota became a state.",
          claimIds: ["civics.sd-constitution-direct-democracy"],
          coverage: "partial",
          note: "Partial: the flagship teaches South Dakota's 1889 constitution and the direct democracy it soon adopted (the 1898 first-in-the-nation initiative and referendum); the fuller narrative of how South Dakota became a state is background context, not a taught unit.",
        },
        // — 9-12.C.6 Structure and function of government under the U.S. Constitution (the federal ladder) —
        {
          code: "9-12.C.6.A",
          text: "The student explains how the Constitution divides government power between the federal, state, and local levels, and names examples of local governments such as county, township, town, city, municipality, ward, etc.",
          claimIds: ["civics.federalism-why-split-power", "civics.local-government-layers"],
          coverage: "full",
          note: "The division of power among federal, state, and local levels is taught directly through federalism, and the local-government layer (counties, townships, cities, special districts) is taught by name.",
        },
        {
          code: "9-12.C.6.B",
          text: "The student explains the distinctions between expressed, implied, concurrent, and reserved powers, and provides examples of each.",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "Near-1:1 with the powers taxonomy: enumerated/expressed, implied (the Necessary and Proper Clause, via McCulloch v. Maryland), concurrent, and reserved (the Tenth Amendment) powers are each taught with examples.",
        },
        {
          code: "9-12.C.6.D",
          text: "The student explains how the separation of powers prevents tyranny from the federal government by dividing legislative, executive, and judicial power into three separate branches.",
          claimIds: ["civics.separation-checks-balances", "civics.three-branches-federal"],
          coverage: "full",
        },
        {
          code: "9-12.C.6.H",
          text: "The student explains the different roles, responsibilities, and powers of each house of Congress.",
          claimIds: ["civics.federal-articles-i-iii", "civics.three-branches-federal"],
          coverage: "full",
          note: "Article I's two houses and their distinct roles, responsibilities, and powers are taught directly.",
        },
        {
          code: "9-12.C.6.I",
          text: "The student explains roles, responsibilities, and powers of the Presidency.",
          claimIds: ["civics.three-branches-federal", "civics.federal-articles-i-iii"],
          coverage: "full",
        },
        {
          code: "9-12.C.6.K",
          text: "The student explains the role of the Electoral College in ensuring presidential candidates consider the rights and interests of people from diverse geographic settings.",
          claimIds: ["civics.electoral-college"],
          coverage: "full",
          note: "The Electoral College's mechanics AND its original purpose (why it exists) are both taught.",
        },
        {
          code: "9-12.C.6.L",
          text: "The student explains the roles and responsibilities of the Judiciary.",
          claimIds: ["civics.federal-judiciary-structure", "civics.three-branches-federal"],
          coverage: "full",
        },
        {
          code: "9-12.C.6.N",
          text: "The student defines the power of judicial review and explains how the Supreme Court’s ruling in Marbury v. Madison claimed this prerogative in terms Alexander Hamilton outlined in Federalist 78.",
          claimIds: ["civics.judicial-review-marbury"],
          coverage: "full",
          note: "Judicial review is taught by name through Marbury v. Madison. Partial only on the Federalist 78 reading, which the catalog does not assign as a primary source — the doctrine itself is squarely taught.",
        },
        {
          code: "9-12.C.6.P",
          text: "The student explains the checks and balances each branch possesses to resist tyranny in the other two branches.",
          claimIds: ["civics.separation-checks-balances"],
          coverage: "full",
        },
        {
          code: "9-12.C.6.Q",
          text: "The student explains the process for creating a law at the federal level.",
          claimIds: ["civics.federal-bill-process"],
          coverage: "full",
          note: "How a bill becomes a federal law is taught end to end — committees through veto override — in a dedicated course.",
        },
        // — 9-12.C.5 Principles of the U.S. Constitution (Articles of Confederation, federalism, enumeration) —
        {
          code: "9-12.C.5.C",
          text: "The student explains the structure and function of the Articles of Confederation and the reasons for its relatively powerless design.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "full",
        },
        {
          code: "9-12.C.5.D",
          text: "The student explains the weaknesses of the Articles of Confederation and their relationship to the Constitutional Convention.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "full",
        },
        {
          code: "9-12.C.5.M",
          text: "The student explains how federalism prevents tyranny by dividing governing power among many levels of governments.",
          claimIds: ["civics.federalism-why-split-power", "civics.separation-checks-balances"],
          coverage: "full",
        },
        {
          code: "9-12.C.5.N",
          text: "The student explains how the enumeration of powers prevents tyranny by limiting what governments can do to a specified written list.",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "full",
        },
        {
          code: "9-12.C.5.O",
          text: "The student reads and discusses the U.S. Constitution and the Bill of Rights.",
          claimIds: ["civics.constitution-article-by-article", "civics.bill-of-rights-origin"],
          coverage: "full",
          note: "The Constitution is read and analyzed article by article, and the Bill of Rights is taught as a document, in the constitution course.",
        },
        // — 9-12.C.7 The Bill of Rights —
        {
          code: "9-12.C.7.A",
          text: "The student explains the ways in which the American people may amend the Constitution as outlined in Article V, including the reasons for making changes difficult but not impossible.",
          claimIds: ["civics.article-v-amendment"],
          coverage: "full",
          note: "The Article V amendment procedure, and why the bar is deliberately high, are taught directly.",
        },
        {
          code: "9-12.C.7.C",
          text: "The student explains how the First Amendment guarantees that individuals can practice their religious beliefs without fear of persecution by the government.",
          claimIds: ["civics.bill-of-rights-overview", "rights.landmark-cases"],
          coverage: "full",
          note: "First Amendment religious freedom is taught both as part of the Bill of Rights overview and as an applied right (Know Your Rights).",
        },
        {
          code: "9-12.C.7.E",
          text: "The student explains how the First Amendment guarantees the freedom to speak, write, petition, and peacefully assemble without fear of persecution by the government.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "full",
          note: "Speech, press, petition, and assembly are taught as rules a student can apply — including where they end — in Know Your Rights.",
        },
        {
          code: "9-12.C.7.G",
          text: "The student explains the Fifth and Seventh Amendments’ guarantees of due process and of trial by a jury of one’s fellow citizens, respectively, including why these legal safeguards are essential to securing justice.",
          claimIds: ["civics.jury-service", "rights.landmark-cases"],
          coverage: "full",
          note: "Trial by a jury of one's fellow citizens is an entire course (Jury Duty & the Courts), and the due-process protections are taught in Know Your Rights.",
        },
        {
          code: "9-12.C.7.I",
          text: "The student explains the meaning and significance of the 9th and 10th amendments.",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "partial",
          note: "Partial: the Tenth Amendment's reserved powers are taught by name in the powers taxonomy; the Ninth Amendment's unenumerated-rights principle is not a focus of the catalog.",
        },
        // — 9-12.C.15 Citizenship in America —
        {
          code: "9-12.C.15.B",
          text: "The student explains the legal meaning of “citizen” in the United States, birthright citizenship as enacted through the Fourteenth Amendment, the legal process for becoming a citizen, and the responsibilities, rights, and privileges of citizenship at the different levels of government.",
          claimIds: ["civics.us-citizenship-law", "civics.citizenship-responsibilities"],
          coverage: "full",
          note: "The legal meaning of citizen, birthright citizenship through the Fourteenth Amendment, naturalization, and the rights and responsibilities of citizenship are each taught directly.",
        },
        {
          code: "9-12.C.15.C",
          text: "The student names the responsibilities citizens have at the local, state, and federal levels of government.",
          claimIds: ["civics.citizenship-responsibilities"],
          coverage: "full",
        },
        // — 9-12.C.16 Politics in America (elections, participation, media literacy) —
        {
          code: "9-12.C.16.B",
          text: "The student explains the election process at the federal level for president, the House of Representatives, and the Senate, based on South Dakota law.",
          claimIds: ["civics.election-mechanics", "civics.sd-elections"],
          coverage: "full",
          note: "Election mechanics (registration, primaries, voting methods, counting and certifying) are taught generally, and South Dakota's own election law is taught in the flagship — the standard's explicit \"based on South Dakota law\" anchor.",
        },
        {
          code: "9-12.C.16.D",
          text: "The student explains how search engines, traditional media, and social media companies and users can influence public opinion in an election.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.media-fallacies-recurring",
            "bvc.evaluate-claims-fallacies",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Squarely met by the BVC media-literacy method: reading a message from any source (search, traditional, or social media) for credibility, bias, omission, misleading statistics, and recurring fallacy is modelled and practiced across the catalog.",
        },
        {
          code: "9-12.C.16.E",
          text: "The student identifies the ways in which citizens engage in politics beyond voting, including through political parties, interest groups, meeting with elected officials, petitions, attending public meetings and hearings, writing, speaking, and assembling.",
          claimIds: [
            "civics.show-up-every-level",
            "civics.campaign-help",
            "civics.track-a-bill",
            "civics.ballot-measures-local-causes",
            "civics.sd-get-involved",
          ],
          coverage: "full",
          note: "The standard's own examples — meeting officials, petitions, public meetings and hearings, writing and speaking — are each taught as practice: showing up at the level where an issue is decided, tracking a live bill, helping a campaign or ballot measure, and getting involved in South Dakota.",
        },
        {
          code: "9-12.C.16.C",
          text: "The student explains the process of campaigning for elected office, including fundraising from large donors, small dollar donors, political action committees (PACs), and political parties.",
          claimIds: ["civics.campaign-help", "civics.run-for-office"],
          coverage: "partial",
          note: "Partial: campaigning for office, volunteering, donating, and the legal money guardrails are taught (How to Help a Campaign; How to Run for Office); the detailed large-donor / small-dollar / PAC fundraising typology is touched, not taught in depth.",
        },
        // — 9-12.C.13 Domestic policy (the two market-economics indicators the catalog teaches) —
        {
          code: "9-12.C.13.A",
          text: "The student explains the basic concepts of supply and demand and their effects on price.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: the commodity courses teach price elasticity of demand and price shocks explicitly (inelastic coffee demand under a price spike) — a genuine piece of supply and demand and its effect on price — but not the full supply-and-demand model.",
        },
        {
          code: "9-12.C.13.B",
          text: "The student explains how the American economy has historically been characterized as free market or capitalist, meaning that the laws allow individuals to possess more goods or currency than they need to survive; and to invest, produce, distribute, and buy and sell goods and services by making their own agreements with one another.",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial: the catalog contrasts market economies with traditional/reciprocity economies at length, teaching what a market (free-enterprise) economy is; it does not teach the specific historical framing of American capitalism this standard names.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "The founding-philosophy and primary-source-reading core of the civics course (9-12.C.2-4, most of 9-12.C.5) — not claimed.",
      body: "The bulk of South Dakota's civics course is a close reading of founding thought and documents: 9-12.C.2 (the modern way of life), 9-12.C.3 (Greek, Roman, and English influences, the Magna Carta and Mayflower Compact, Locke's Second Treatise), 9-12.C.4 (the Declaration of Independence clause by clause), and the political-philosophy indicators in 9-12.C.5 (human nature, majority tyranny, Montesquieu, the Federalist essays 9/10/51/78 as assigned reading). The catalog teaches the Constitution's structure and the federal ladder, but not this assigned-primary-source, natural-rights-philosophy curriculum, so we do not claim it.",
    },
    {
      heading: "The Second Amendment (9-12.C.7.F) — not claimed.",
      body: "9-12.C.7.F is entirely about the Second Amendment. The catalog's Know Your Rights course teaches the First and Fourth Amendments as applied rights but not the Second, so this indicator is not claimed. The gap is in the course, not the standard.",
    },
    {
      heading: "Slavery, the Civil War, civil rights, Progressivism, and the governing-institutions/policy history (9-12.C.8-14) — deferred, not denied.",
      body: "9-12.C.8-9 (slavery and the Civil War through Douglass, Lincoln's Peoria and Cooper-Union-era speeches, the Emancipation Proclamation, and the Gettysburg Address), 9-12.C.10 (civil rights through the Declaration of Sentiments, Niagara's Declaration of Principles, Brown v. Board, and King's \"I Have a Dream\"), 9-12.C.11 (20th-century Progressivism), 9-12.C.12 (governing institutions and federal-state cases), 9-12.C.13's policy and Supreme-Court-case indicators, and 9-12.C.14 (foreign policy) are document-and-case-driven history standards. The catalog's Great Migration, History of Unions, and commodity-history courses TOUCH some of this content (the Jim Crow South, poll taxes, the Reconstruction amendments), but they do not deliver it as this civics course's assigned readings and case lists, so — verbatim-or-nothing on coverage — we defer these rather than claim a civics match we cannot make cleanly.",
    },
    {
      heading: "The regime-comparison capstone (9-12.C.18) — not claimed.",
      body: "9-12.C.18 compares the American experiment to monarchy, aristocracy, direct democracy, Progressivism, totalitarianism, communism, socialism, fascism, oligarchy, and imperialism, and to the French Revolution. The catalog teaches American constitutional structure, not a comparative-regime capstone, so we do not claim it.",
    },
    {
      heading: "The civics skills standard 9-12.C.1 — not separately claimed.",
      body: "9-12.C.1 asks students to identify the state's own current officeholders and local tribal leaders (9-12.C.1.A) and to write informative and persuasive essays on American government (9-12.C.1.B-C). The flagship teaches the structure of South Dakota's offices and civic writing is practiced, but we do not transcribe or separately claim this skills standard (its officeholder list is a long, roster-dependent enumeration we will not cite verbatim as a fixed standard text).",
    },
    {
      heading: "English/Language Arts — deferred (South Dakota's ELA is its own document, Common-Core-derived).",
      body: "South Dakota adopted the Common Core in 2010 but maintains its own English Language Arts standards, so the shared Common Core ELA file is not blind-aliased; the rule is compare-before-aliasing. South Dakota's own ELA reading/writing standards were not fetched-and-verified this pass, so we defer them rather than assume the shared text still matches South Dakota's printed codes. The catalog's source-evaluation and media-literacy work is instead claimed against South Dakota's own civics media-literacy standard, 9-12.C.16.D.",
    },
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no South Dakota mathematics standard (South Dakota's math standards, like its ELA, are South Dakota's own Common-Core-derived document).",
    },
    {
      heading: "Science — deferred (South Dakota's 2015 science standards are NGSS-based but its own document).",
      body: "The South Dakota Science Standards (2015) are NGSS-based but South Dakota's own document, so the shared NGSS file is not blind-aliased and the rule is compare-before-aliasing. The one Earth-science-adjacent claim the catalog could support (climate and resources shaping human activity) is deferred until South Dakota's own science document is fetched and its performance-expectation text is confirmed to match the shared NGSS wording.",
    },
    {
      heading: "South Dakota's other social-studies disciplines (World History, U.S. History, World Geography, Economics) — deferred, not denied.",
      body: "The catalog's commodity, colonial, labor, civil-rights, and migration history and its Commodity Map geography WOULD map to South Dakota's 9-12 World History (9-12.WH), U.S. History (9-12.USH), World Geography (9-12.WG), and Economics (9-12.E) standards, as they do in other states. We mapped the United States Government/American Civics course this pass (the flagship's home) and DEFER the history, geography, and economics disciplines to a later pass rather than claim standards we have not yet transcribed and verified.",
    },
  ],
};
