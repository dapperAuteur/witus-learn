// ─────────────────────────────────────────────────────────────────────────────
// ARKANSAS — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ar` was written FROM Arkansas's own official sources (arkleg.state.ar.us,
// sos.arkansas.gov, arcourts.gov) — but note the flagship caveat in notClaimed: Arkansas's 2022
// Civics and U.S. Government standards are overwhelmingly FEDERAL, so the course's
// Arkansas-structure lessons map only where Arkansas's own standards actually reach.
//
// What Arkansas actually adopted (verified against DESE's own pages, not assumed):
//   · Social studies — the 2022 Approved Social Studies Standards (SBE approved December 2022;
//     full implementation required by 2024-25), published as per-course documents: Civics,
//     United States Government, Economics with Personal Finance, World Geography, World History
//     Since 1450, United States History Since 1929, African-American History, and more.
//   · ELA — the 2023 K-12 ELA Standards (fully implemented 2023-24). Grade-specific codes
//     (9.RC.13.RI style); Arkansas is not mapped through our shared Common Core file.
//   · Science — the Arkansas K-12 Science Standards (2016, course-based). NGSS-derived but
//     Arkansas's own: performance expectations carry AR course prefixes and Arkansas-specific
//     clarification statements, so we cite Arkansas's document, not the shared NGSS file.
//   · Health & PE — the 2019 Health & Safety and Physical Education Standards document, plus
//     stand-alone high-school PE course frameworks (Personal Fitness for Life, Recreational
//     Sports). The 2019 health standards print NO citable codes — see notClaimed.
//
// Provenance: unlike in.gov and azed.gov, dese.ade.arkansas.gov serves our tooling directly —
// every document below was fetched from DESE itself on 2026-07-16 and transcribed verbatim.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "AR",
  frameworks: [
    // ── Civics (Revised 2022) ──────────────────────────────────────────────
    {
      id: "ar-civics",
      subject: "Social Studies",
      name: "Civics — Arkansas Social Studies Academic Standards",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "Revised 2022",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://dese.ade.arkansas.gov/Files/AR_Civics_Standards_2022_LS.pdf",
      adoption:
        "Arkansas's required half-credit Civics course (grades 9-12), from the December 2022 standards revision (full implementation 2024-25). Codes are Knowledge and Skill Performance Expectations (C.2.CIV.1 style).",
      standards: [
        {
          code: "C.4.CIV.1",
          text: "Investigate various methods for creating federal, state, and local laws, including the legislative process, ballot initiatives, and referendums.",
          claimIds: ["civics.federal-bill-process", "civics.ar-bill-process", "civics.ar-initiative-flux"],
          coverage: "full",
          note: "All three named methods, at both levels the courses reach: the federal legislative process (an entire course), the Arkansas General Assembly's process with its simple-majority override, and Amendment 7's ballot initiatives and referendums — taught honestly, with the recently tightened petition rules flagged as in flux.",
        },
        {
          code: "C.3.CIV.13",
          text: "Analyze the election process in federal, state, and local governments including voter registration, primary elections, and general elections.",
          claimIds: ["civics.election-mechanics", "civics.ar-election-law", "civics.ar-get-involved"],
          coverage: "full",
          note: "Registration, primaries and caucuses, voting methods, counting and certifying get a full course; Arkansas's specifics (photo ID, no-excuse early voting but excuse-required mail voting, the 30-day registration deadline) get their own lesson.",
        },
        {
          code: "C.2.CIV.2",
          text: "Analyze the establishment and purposes of government and relate it to everyday life experiences including law enforcement, public schools, and city planning.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.local-government-layers",
            "civics.ar-local-government",
          ],
          coverage: "full",
          note: "The purposes of government are taught directly, and the everyday-life half is the local-government courses' method: what counties, cities, and special districts actually run — with Arkansas's own vocabulary (the county judge who is an executive, the quorum court that is a legislature).",
        },
        {
          code: "C.2.CIV.8",
          text: "Differentiate among delegated, implied (i.e., Necessary and Proper Clause), concurrent, and reserved powers (i.e., Tenth Amendment).",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "Taught by name, clause by clause: enumerated/delegated powers (Article I, § 8), implied powers through the Necessary and Proper Clause, reserved powers through the Tenth Amendment, and concurrent powers — with McCulloch v. Maryland confirming the implied-powers doctrine.",
        },
        {
          code: "C.2.CIV.9",
          text: "Analyze the reasons for checks and balances, separation of powers, and federalism within the Constitution to limit government power and protect individual liberty.",
          claimIds: ["civics.separation-checks-balances", "civics.federalism-why-split-power"],
          coverage: "full",
        },
        {
          code: "C.3.CIV.1",
          text: "Evaluate rights and responsibilities of citizens in the United States using the Bill of Rights and various Supreme Court decisions: free exercise of religion (Kennedy vs. Bremerton School District), freedom of speech (Brandenburg vs. Ohio), freedom of press (New York Times vs. United States), freedom of assembly (Bates vs. Little Rock).",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights", "civics.citizenship-responsibilities"],
          coverage: "partial",
          note: "Partial, and here is the exact line: rights ARE taught through the Bill of Rights and Supreme Court decisions — Brandenburg (which the standard names) plus Tinker, Mapp, Terry, T.L.O., Riley, and Carpenter as applicable rules, and responsibilities as practices. But three of the standard's four named cases (Kennedy, New York Times, Bates) are not taught by name.",
        },
        {
          code: "C.3.CIV.4",
          text: "Analyze the requirements to be a U.S. citizen, including naturalization and the different routes non-citizens can take to become citizens.",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "full",
          note: "The 14th Amendment, jus soli, citizenship through parents, and naturalization eligibility, step by step.",
        },
        {
          code: "C.3.CIV.8",
          text: "Examine the amendments to the U.S. Constitution in order to determine how the roles of citizens and the federal and state governments have changed over time: Bill of Rights, incorporation of states' rights into government, due process, citizenship and equal protection (14th Amendment), voting rights (e.g., 15th Amendment, 19th Amendment, 24th Amendment, 26th Amendment).",
          claimIds: [
            "civics.article-v-amendment",
            "civics.bill-of-rights-origin",
            "civics.us-citizenship-law",
            "rights.scotus-precedent",
          ],
          coverage: "partial",
          note: "Partial: the Bill of Rights, the key later amendments, and the 14th Amendment's citizenship clause are taught well, and precedent's expansion of rights is its own lesson. The incorporation doctrine and due process, which the standard names, are not taught in depth.",
        },
        {
          code: "C.4.CIV.3",
          text: "Analyze the role the U.S. Supreme Court has on the law-making process.",
          claimIds: ["civics.judicial-review-marbury", "rights.scotus-precedent"],
          coverage: "full",
          note: "Judicial review taught by name through Marbury, and how precedent — majority, concurrence, dissent — makes rules that bind future lawmaking.",
        },
        {
          code: "C.4.CIV.4",
          text: "Identify intended and unintended consequences of public policies.",
          claimIds: [
            "bvc.sugar-program-trade-barriers",
            "bvc.prohibition",
            "bvc.war-on-drugs-foreign-policy",
          ],
          coverage: "full",
          note: "Three public policies worked at depth, each with both columns: the U.S. sugar program (intended: stable domestic prices; unintended: ~$3.5bn/yr consumer cost), Prohibition (its results against its rhetoric), and the War on Drugs (the balloon effect is an unintended-consequences lesson by name).",
        },
      ],
    },

    // ── United States Government (Revised 2022) ────────────────────────────
    {
      id: "ar-usg",
      subject: "Social Studies",
      name: "United States Government — Arkansas Social Studies Academic Standards",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "Revised 2022",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://dese.ade.arkansas.gov/Files/AR_US_Government_Standards_2022_LS.pdf",
      adoption:
        "Arkansas's high-school U.S. Government course, from the December 2022 standards revision. As its name says, this course is FEDERAL — see notClaimed for what that means for our Arkansas Civics flagship.",
      standards: [
        {
          code: "C.2.USG.15",
          text: "Analyze the purposes of government as explained in the Preamble to the U.S. Constitution.",
          claimIds: ["civics.preamble-purposes"],
          coverage: "full",
          note: "The lesson works the Preamble clause by clause — establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare — as the purposes of the government the rest of the document builds.",
        },
        {
          code: "C.2.USG.16",
          text: "Evaluate the rationale for the organization of articles of the U.S. Constitution.",
          claimIds: ["civics.constitution-article-by-article"],
          coverage: "full",
        },
        {
          code: "C.2.USG.17",
          text: "Analyze the purposes of the Bill of Rights.",
          claimIds: ["civics.bill-of-rights-origin", "civics.bill-of-rights-overview"],
          coverage: "full",
        },
        {
          code: "C.2.USG.14",
          text: "Analyze the underlying causes and events that led the Founders to replace the Articles of Confederation with the U.S. Constitution, including Shays' Rebellion, the perceived weaknesses of the Articles of Confederation, and disputes between states.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "partial",
          note: "Partial: WHY the Articles failed and how that led to 1787 is taught directly. Shays' Rebellion and the interstate disputes, which the standard names as events, are not worked by name.",
        },
        {
          code: "C.2.USG.1",
          text: "Analyze the purpose, organization, powers, and function of the legislative branch of government, including the legislative process and the role of the Senate in giving states equal representation, using Article I of the Constitution and other primary and secondary sources.",
          claimIds: ["civics.federal-articles-i-iii", "civics.federal-bill-process"],
          coverage: "full",
          note: "Article I gets its own lessons, and the legislative process gets an entire course — committees, the Rules Committee, the filibuster, presentment, veto override.",
        },
        {
          code: "C.2.USG.2",
          text: "Analyze the purpose, organization, powers, and function of the executive branch of government, including the electoral college process, duties of the President, and supporting executive branch agencies using Article II of the Constitution and other primary and secondary sources.",
          claimIds: ["civics.federal-articles-i-iii", "civics.electoral-college"],
          coverage: "partial",
          note: "Partial: Article II and the Electoral College (mechanics AND original purpose) are taught thoroughly. The supporting executive-branch agencies the standard names are not covered in depth.",
        },
        {
          code: "C.2.USG.3",
          text: "Analyze the purpose, organization, powers, and function of the judicial branch of government, including judicial review and the origin and duties of the court system and Supreme Court, as outlined by Article III of the Constitution, Marbury vs. Madison, and other primary and secondary sources.",
          claimIds: ["civics.federal-judiciary-structure", "civics.judicial-review-marbury"],
          coverage: "full",
          note: "The federal judiciary from district courts to the Supreme Court, judicial review through Marbury by name, and the checks on the Court.",
        },
        {
          code: "C.2.USG.4",
          text: "Analyze the powers and responsibilities of the federal government: enumerated, implied, delegated, concurrent, reserved.",
          claimIds: ["civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "All five named power types are taught by name, with their textual hooks (Article I § 8; the Necessary and Proper Clause; the Tenth Amendment) and the case that confirmed implied powers.",
        },
        {
          code: "C.2.USG.5",
          text: "Analyze the reasons for and effectiveness of a system of checks and balances within the federal government.",
          claimIds: ["civics.separation-checks-balances"],
          coverage: "full",
        },
        {
          code: "C.2.USG.9",
          text: "Analyze the division of power and the relationships between federal and state government.",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "An entire course: why power is split, the Supremacy Clause and preemption, the Commerce Clause's reach, and where state and federal law actually interact.",
        },
        {
          code: "C.2.USG.11",
          text: "Examine the reasons and processes for amending the U.S. Constitution, including the role of Congress, state legislatures, and convention of the states (Article V).",
          claimIds: ["civics.article-v-amendment"],
          coverage: "full",
        },
        {
          code: "C.4.USG.1",
          text: "Analyze major U.S. Supreme Court decisions affecting our understanding of the U.S. Constitution, including Marbury vs. Madison and McCullah vs. Maryland.",
          claimIds: ["civics.judicial-review-marbury", "civics.federal-powers-taxonomy", "rights.landmark-cases"],
          coverage: "full",
          note: "Both named cases are taught as rules — Marbury (judicial review) and McCulloch v. Maryland (implied powers and supremacy) — plus the landmark rights cases a student can apply. The document prints the second case as 'McCullah vs. Maryland'; we transcribe codes and text verbatim, so that spelling is the standard's own.",
        },
        {
          code: "C.4.USG.2",
          text: "Explain ways the U.S. Constitution and U.S. Supreme Court decisions have defined, recognized, and protected or not protected civil liberties, due process, and equal protection from governmental intrusion over time.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent", "rights.limits-on-rights"],
          coverage: "partial",
          note: "Partial: civil liberties, their expansion by precedent, and the 'or not protected' half (when government may constitutionally limit rights, and why) are taught well. Due process and equal protection as doctrines are named in our lessons but not taught in depth.",
        },
      ],
    },

    // ── Economics with Personal Finance (Revised 2022) ─────────────────────
    {
      id: "ar-econ",
      subject: "Social Studies",
      name: "Economics with Personal Finance — Arkansas Social Studies Academic Standards",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "Revised 2022",
      fetchedOn: "2026-07-16",
      sourceUrl:
        "https://dese.ade.arkansas.gov/Files/AR_Economics_with_Personal_Finance_Standards_2022_LS.pdf",
      adoption:
        "Arkansas's high-school economics course, which bundles personal finance. We claim three economics standards and no personal-finance standard at all — the catalog does not teach personal finance.",
      standards: [
        {
          code: "E.5.ECON.2",
          text: "Explain ways in which current trends in globalization affect economic growth, labor markets, rights of individuals, the environment, technological advancement, and resource and income distribution in different nations.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: four of the standard's six lenses are worked deeply — labor markets (what NAFTA→USMCA did to organizing on both sides of the border), rights of individuals (the Rapid Response Mechanism), and resource and income distribution (who is paid what along commodity chains, and why producers stay poor). Technological advancement is not taught, and the environment only through climate forecasts.",
        },
        {
          code: "E.5.ECON.3",
          text: "Research the impact of international and national economic and political policies on global trade using a variety of sources from multiple perspectives (e.g., trade policies, tariffs, quotas, immigration laws, fiscal policy, regulations).",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial, with the distinction stated: the CONTENT is taught in depth (the sugar program's tariffs and quotas; a trade agreement's labor rules, including the cases the United States lost). But the standard's verb is RESEARCH, and student-run research is currently required only in the Coffee episode's project.",
        },
        {
          code: "E.3.ECON.5",
          text: "Evaluate intended and unintended consequences of government policies created to improve market outcomes (e.g., regulatory, participatory, supervisory, price floor, price ceiling, minimum wage).",
          claimIds: ["bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Partial: one policy family — the U.S. sugar program's price supports and import quotas — is evaluated properly, intended and unintended columns both. Price ceilings and the minimum wage, which the standard lists, are not taught.",
        },
      ],
    },

    // ── World Geography (Revised 2022) ─────────────────────────────────────
    {
      id: "ar-wg",
      subject: "Social Studies",
      name: "World Geography — Arkansas Social Studies Academic Standards",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "Revised 2022",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://dese.ade.arkansas.gov/Files/AR_World_Geography_Standards_2022_LS.pdf",
      adoption:
        "Arkansas's high-school geography course. This is the course the Commodity Map fits most completely in Arkansas.",
      standards: [
        {
          code: "G.3.WG.3",
          text: "Analyze various push-and pull factors that lead to migration and changes in these factors over time.",
          claimIds: ["history.jim-crow-and-long-shadow", "history.migration-streams-arrival"],
          coverage: "full",
          note: "The Great Migration course is push-and-pull by construction: what people fled (Jim Crow, taught for twelve lessons), what pulled (jobs, the Black press), and how the factors changed over time — through to the return migration.",
        },
        {
          code: "G.3.WG.5",
          text: "Examine varying attitudes among different cultures toward the uses of natural and human resources.",
          claimIds: ["bvc.traditional-vs-market-economies", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Taught directly and at length: reciprocity economies against market economies as two ways of valuing the same resources, and paired first-person accounts showing two cultures reading the same bean, forest, or plantation differently.",
        },
        {
          code: "G.3.WG.7",
          text: "Analyze changes in the environment and cultural characteristics of a place or region that influence spatial patterns of trade and land use over time.",
          claimIds: ["bvc.climate-change-forecasts", "bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "Climate change redrawing the growing belts — and with them, trade and land use — is analyzed with published forecasts, commodity by commodity.",
        },
        {
          code: "G.2.WG.1",
          text: "Investigate political, cultural, and economic relationships between places and regions using geographic representations and geospatial technologies.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.coffee-project-mapping"],
          coverage: "partial",
          note: "Partial: the geographic representations are the curriculum's signature (the Commodity Map, the Growing Belts, student-prepared maps and data tables). Geospatial TECHNOLOGIES in the GIS sense are not used.",
        },
        {
          code: "G.3.WG.2",
          text: "Analyze the effects of various influences on population distribution and migration on society (e.g., history, migration, physical environment, economy, politics, technology, climate, land use, resources).",
          claimIds: ["history.migration-streams-arrival", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial, at case-study depth: one migration — six million people — analyzed for its causes and its effects on society, including the urban political power it created. Not a general population-geography treatment.",
        },
        {
          code: "G.3.WG.8",
          text: "Evaluate the benefits of various locations in terms of natural, human, and capital resources.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: natural-resource geography is deep (why volcanic soil only; why the cacao belt is the narrowest), and the human/capital halves surface through where value-adding steps locate along the chain — but not as a named location-analysis framework.",
        },
        {
          code: "G.3.WG.10",
          text: "Examine the diffusion of a phenomenon and its impact on various regions of contact (e.g., spread of infectious disease, invasive plants, invasive animals).",
          claimIds: ["bvc.agricultural-hearths", "bvc.scott-county-epidemic"],
          coverage: "partial",
          note: "Partial: two diffusions worked properly — crops moving among regions from their agricultural hearths, and one epidemic (the 2015 Scott County HIV outbreak) in real depth. Not a survey of diffusion types.",
        },
      ],
    },

    // ── World History Since 1450 (Revised 2022) ────────────────────────────
    {
      id: "ar-wh",
      subject: "Social Studies",
      name: "World History Since 1450 — Arkansas Social Studies Academic Standards",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "Revised 2022",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://dese.ade.arkansas.gov/Files/AR_World_History_since_1450_Standards_2022_LS.pdf",
      adoption: "Arkansas's high-school world history course, from the December 2022 revision.",
      standards: [
        {
          code: "H.6.WH.13",
          text: "Analyze causes and consequences of voluntary and forced mass migration, including the efforts to reform such practices. This may include cultural practices, resource availability, the plantation system, urbanization, industrialization, conflict migration, and transatlantic abolitionism.",
          claimIds: [
            "bvc.conquest-columbian-exchange",
            "bvc.plantation-economy-resistance",
            "bvc.middle-passage-primary-sources",
          ],
          coverage: "full",
          note: "The standard's core and three of its named threads, all taught: forced mass migration (the transatlantic slave trade and the Middle Passage), the plantation system, and the reform efforts — transatlantic abolitionism through the sugar boycott's own pamphlets.",
        },
        {
          code: "H.6.WH.11",
          text: "Analyze the social, economic, and political ideas, including self-determination, liberty, and human rights, that influenced the 18th and 19th-century revolutions. This may include: American Revolution, French Revolution, Haitian Revolution, Latin American Wars for Independence, Norwegian War for Independence, Scottish Rebellion, United Irish Rebellion.",
          claimIds: ["bvc.haitian-revolution"],
          coverage: "partial",
          note: "Partial: ONE of the named revolutions — the Haitian Revolution — is taught in real depth, ideas included, through to the 1825 indemnity most curricula skip. The other named revolutions are not taught.",
        },
        {
          code: "H.6.WH.14",
          text: "Compare the social and economic impact of different labor systems in the Age of Revolutions.",
          claimIds: ["bvc.plantation-economy-resistance", "bvc.sugar-industry-impact"],
          coverage: "partial",
          note: "Partial: the plantation labor system and its social and economic impact are taught thoroughly for the era; the comparison against the era's other labor systems (free wage labor, serfdom) is not made systematically.",
        },
        {
          code: "H.6.WH.15",
          text: "Analyze the causes and effects of European imperialism and new patterns of colonization in Asia, Africa, and Latin America in the 19th century, including the impact of advancements in medicine, weaponry, and technology.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.opium-wars"],
          coverage: "partial",
          note: "Partial: causes and effects of 19th-century imperialism in Asia and Africa are taught in depth (the Opium Wars carry the Asia half), and Oceania beyond the standard's list. The medicine-weaponry-technology clause is not taught.",
        },
        {
          code: "H.6.WH.29",
          text: "Analyze the change and continuity in global power after World War II, including the growing rivalry between Communist and democratic governments in various regions: Africa, the Americas, Asia, Europe, Middle East.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Partial: the Communist-democratic rivalry is worked at depth in ONE region — Europe, through Poland: a workers' state, martial law, and the 1989 negotiation that ended it. The other named regions are not covered.",
        },
      ],
    },

    // ── United States History Since 1929 (Revised 2022) ────────────────────
    {
      id: "ar-ush",
      subject: "Social Studies",
      name: "United States History Since 1929 — Arkansas Social Studies Academic Standards",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "Revised 2022",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://dese.ade.arkansas.gov/Files/AR_US_History_since_1929_Standards_2022_LS.pdf",
      adoption:
        "Arkansas's high-school U.S. history course starts at 1929 — so our Gilded-Age and Progressive-Era labor history falls OUTSIDE its window (see notClaimed), and the pre-1929 chapters of the Great Migration map in African-American History instead.",
      standards: [
        {
          code: "H.5.USH.3",
          text: "Analyze the expanded role of the federal government's domestic interventions and fiscal policy in response to the Great Depression: New Deal legislation (e.g., Emergency Banking Relief Act, Agricultural Adjustment Act, Social Security Act, National Labor Relations Act), federal work relief agencies (e.g., Tennessee Valley Authority, Civilian Conservation Corps, Public Works Administration, Work Progress Administration), changing role of the federal government in the economy (e.g., social security, minimum wage).",
          claimIds: ["history.wagner-act"],
          coverage: "partial",
          note: "Partial: the National Labor Relations Act — named in the standard's first bullet — is taught in depth: what the Wagner Act created, and precisely who it excluded. The rest of the New Deal apparatus is not taught.",
        },
        {
          code: "H.5.USH.17",
          text: "Analyze the roles of individuals, groups, and events in securing civil rights during the mid-20th century: individuals (e.g., Dr. Martin Luther King, Jr., Malcolm X, Rosa Parks, Earl Warren, Thurgood Marshall, Cesar Chavez), groups (e.g., NAACP, Freedom Riders, Southern Christian Leadership Conference, Student Nonviolent Coordinating Committee), events (e.g., murder of Emmett Till, Brown vs. Board of Education, desegregation of Little Rock Central High School, passage of 24th Amendment, passage of Civil Rights Acts of 1964 and 1968, sit-ins, assassination of Martin Luther King, Jr.).",
          claimIds: ["history.labor-civil-rights", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial, from an angle most curricula skip: A. Philip Randolph through the 1968 Memphis sanitation strike (where Dr. King was assassinated — a named event), and the Black urban vote the Migration created. Most of the standard's named individuals, groups, and events are not taught individually.",
        },
        {
          code: "H.5.USH.27",
          text: "Examine the social and economic effects of globalization on the United States: trade agreements and organizations [e.g., European Union, North American Free Trade Agreement (NAFTA), World Trade Organization (WTO)], economic shifts due to international agreements (e.g., cheap labor, decline in American manufacturing, multinational corporations), increased immigration from Latin America, South Asia, and East Asia.",
          claimIds: ["history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: NAFTA and the economic shifts bullet (cheap labor, manufacturing decline) are worked in depth from the labor side, through to the USMCA's Rapid Response Mechanism. The EU, the WTO, and the immigration bullet are not taught.",
        },
      ],
    },

    // ── African-American History (Revised 2022) ────────────────────────────
    {
      id: "ar-aah",
      subject: "Social Studies",
      name: "African-American History — Arkansas Social Studies Academic Standards",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "Revised 2022",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://dese.ade.arkansas.gov/Files/AR_African_American_History_Standards_2022_LS.pdf",
      adoption:
        "Arkansas's high-school African-American History elective — the Arkansas course that actually NAMES the Great Migration, which the post-1929 U.S. History course cannot reach.",
      standards: [
        {
          code: "H.5.AAH.3",
          text: "Analyze social, economic, and political actions and achievements of African Americans in the early 20th century: Great Migration, military desegregation, growth of civil rights organizations (e.g., National Association for the Advancement of Colored People [NAACP]), other social, political, and labor organizations (e.g., Southern Tenant Farmers Union).",
          claimIds: [
            "history.migration-streams-arrival",
            "history.migration-civil-rights-politics",
            "history.harlem-renaissance-black-press",
          ],
          coverage: "partial",
          note: "Partial: the Great Migration — the standard's first bullet — is an entire course: routes, arrival cities, community institutions, the Black press as engine, and the politics the Migration created. Military desegregation and the named organizations are not taught in depth.",
        },
        {
          code: "H.4.AAH.5",
          text: "Analyze various experiences and responses to challenges of African American men and women from post-Reconstruction through the Jim Crow time period and early 20th century: art and entertainment (e.g., Harlem Renaissance), education (e.g., rising literacy rates, establishment of historically black colleges and universities, Booker T. Washington, W.E.B. Du Bois, Joseph Albert Booker), entrepreneurship (e.g., Samuel T. Wilcox, Robert Gordon, Annie Malone, Frederick and Charles Patterson, Maggie Lena Walker, Madam C. J. Walker), religion (e.g., growth of African Methodist Episcopal denomination [AME] and establishment of National Baptist Convention), political organizations and affiliations, segregation and discrimination (e.g., Jim Crow laws, Plessy vs. Ferguson, \"sundown towns\").",
          claimIds: ["history.jim-crow-and-long-shadow", "history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: two of the standard's threads are taught deeply — segregation and discrimination (the Jim Crow South as what people fled, and its long shadow) and art (the Harlem Renaissance and the New Negro). Education, entrepreneurship, and religion, with their named figures, are not taught.",
        },
        {
          code: "H.5.AAH.1",
          text: "Analyze change and continuity in the African American cultural identity, including the role of the Harlem Renaissance, in the area of art, music, film, literature, and dance.",
          claimIds: ["history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: the Harlem Renaissance and the New Negro identity are their own lesson, tied to the Migration that made them possible. The full arts survey (music, film, dance) is not taught.",
        },
        {
          code: "H.5.AAH.4",
          text: "Analyze the influence of key African Americans on political and social change since 1950 using primary and secondary sources: civil rights leaders (e.g., Malcolm X, Martin Luther King, Jr., Coretta Scott King, A. Philip Randolph, Rosa Parks, Daisy Bates, John Lewis), political leaders (e.g., Thurgood Marshall, Shirley Chisholm, Patricia Harris, Condelezza Rice, Barack Obama, Kamala Harris, Clarence Thomas, Ketanji Brown Jackson), military and science leaders (e.g., Marcelite Harris, Katherine Johnson, Colin Powell, William E. Ward, Lloyd Austin), education and thought leaders (e.g., Langston Hughes, Thomas Sowell, Zora Neale Hurston).",
          claimIds: ["history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: A. Philip Randolph — named in the standard — is taught in depth as the labor half of the civil-rights movement, with primary sources pointed to their real archives. The standard's many other named figures are not taught individually.",
        },
      ],
    },

    // ── ELA (2023 K-12 Standards) ──────────────────────────────────────────
    {
      id: "ar-ela",
      subject: "English/Language Arts",
      name: "2023 Arkansas K-12 English Language Arts Standards",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "2023 · fully implemented 2023-24",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://dese.ade.arkansas.gov/Files/AR_2023_K-12_ELA_Standards_LS_7.2023_LS.pdf",
      adoption:
        "Arkansas's own 2023 ELA standards, grade-specific (not grade-banded) — the codes below are Grade 9, 10, and 11 standards. Arkansas is not mapped through our shared Common Core file.",
      standards: [
        {
          code: "9.RC.13.RI",
          text: "Describe how an author uses rhetoric to advance the purpose, point of view, or perspective of a text.",
          claimIds: ["bvc.author-rhetoric-primary-texts"],
          coverage: "full",
        },
        {
          code: "10.RC.15.RI",
          text: "Evaluate the argument and supporting claims in a text, assessing the degree to which the reasoning is valid, the evidence is relevant and sufficient, and bias and fallacies are present.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.reefer-madness-language-of-fear"],
          coverage: "full",
          note: "'Bias and fallacies are present' is taught by name: Doubt Is Our Product, Peer Review Versus Press Release, the UK's khat ban against its own scientific advice, and the fear-rhetoric of Reefer Madness.",
        },
        {
          code: "10.RC.14.RI",
          text: "Compare accounts of a subject told in different mediums (e.g., a person's life story in both print and multimedia), determining which details are emphasized and/or omitted in each account.",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.whose-voice-absence",
            "bvc.nearest-green-oral-history",
          ],
          coverage: "partial",
          note: "Partial: 'emphasized and/or omitted' is exactly the Whose Voice method (a planter's account against Equiano and Prince; reading Austen for the sugar money she leaves out), and the Nathan Green lesson compares the written record against the oral one — genuinely different mediums. Multimedia accounts in the standard's modern sense are not analyzed.",
        },
        {
          code: "11.RC.14.RI",
          text: "Evaluate how content, style, and/or use of rhetorical devices contribute to the purpose, point of view, perspective, and overall effectiveness of a text.",
          claimIds: ["bvc.rhetoric-power-persuasion"],
          coverage: "full",
        },
        {
          code: "11.RC.16.RI",
          text: "Evaluate the premise, reasoning, and validity of an argument in texts, including works of public advocacy and U.S. seminal documents.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.author-rhetoric-primary-texts"],
          coverage: "full",
          note: "The primary texts worked are works of public advocacy by design: the abolitionist sugar-boycott pamphlets, Lin Zexu's letter, Torches of Freedom, Selling Prohibition.",
        },
        {
          code: "11.RC.15.RI",
          text: "Evaluate information presented in a variety of formats and from multiple sources, identifying the information that best answers a question or solves a problem.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: multi-source evaluation is modelled constantly, with a checkable bibliography — but the student performs it only in the Coffee episode's project.",
        },
        {
          code: "11.W.1.S",
          text: "Compose an argument about a complex topic: develop defensible and significant claims; distinguish alternate or opposing claims, assessing the strengths and weaknesses of each in a manner that anticipates the audience's knowledge and values; maintain a cohesive argumentative structure throughout; provide relevant commentary to connect claims to the reasons and evidence.",
          claimIds: ["bvc.coffee-project-argument-paper"],
          coverage: "partial",
          note: "Partial: the Coffee project's Option D asks for exactly this, opposing-claims section included. It is one optional project in one episode — not a writing programme, and we will not claim it is.",
        },
        {
          code: "11.W.13.R",
          text: "Conduct short and sustained research, synthesizing information from multiple sources to answer a question or solve a problem, narrowing or broadening the inquiry when appropriate.",
          claimIds: ["bvc.coffee-project-synthesis", "bvc.coffee-project-research-process"],
          coverage: "partial",
          note: "Partial, same reason: the graded 2-3 week research project exists only in the Coffee episode.",
        },
        {
          code: "11.W.14.R",
          text: "Assess the credibility and accuracy of sources, using scholarly databases when appropriate.",
          claimIds: ["bvc.coffee-project-sources-ethics", "bvc.source-evaluation-modelled"],
          coverage: "partial",
          note: "Partial: the project requires 3+ peer-reviewed sources, and source evaluation is modelled throughout — but assessed student performance of it exists only in the Coffee project.",
        },
      ],
    },

    // ── Science: Earth Science (Arkansas K-12 Science Standards, 2016) ─────
    {
      id: "ar-sci-es",
      subject: "Science",
      name: "Arkansas K-12 Science Standards — Earth Science",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "2016 · 2024 connection-boxes edition",
      fetchedOn: "2026-07-16",
      sourceUrl:
        "https://dese.ade.arkansas.gov/Files/Earth_Science_Standards_Connection_Boxex_2024_LS.pdf",
      adoption:
        "Arkansas's course-based science standards are built from the NRC Framework — NGSS-derived, but Arkansas's own: performance expectations carry course prefixes and Arkansas-specific clarification statements (this one suggests diamonds, novaculite, and bauxite as the resources). So we cite Arkansas's document, not our shared NGSS file. This is not a science course; we claim one standard, partially.",
      standards: [
        {
          code: "ES-ESS3-1",
          text: "Construct an explanation based on evidence for how the availability of natural resources, occurrence of natural hazards, and changes in climate have influenced human activity.",
          claimIds: ["bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Read this before relying on it: this is NOT a science course — no laboratory work, no investigations, no modelling. What it has is precisely this standard's content: resource availability and climate shaping what humans do and where, with published evidence. The lessons supply the evidence; the STUDENT constructs the explanation only in the Coffee project (Option B). It contributes to the performance expectation; it does not discharge it.",
        },
      ],
    },

    // ── PE: Personal Fitness for Life (Grades 9-12) ────────────────────────
    {
      id: "ar-pfl",
      subject: "Physical Education",
      name: "Personal Fitness for Life — Arkansas Physical Education Course Standards (Grades 9-12)",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "2019 standards family · PFL course codes",
      fetchedOn: "2026-07-16",
      sourceUrl:
        "https://dese.ade.arkansas.gov/Files/20201209134515_PE_9-12_Personal_Fitness_for_Life.pdf",
      adoption:
        "One of the four stand-alone courses that satisfy Arkansas's half-credit high-school PE requirement. An online course cannot demonstrate motor performance, so we claim knowledge- and planning-side standards only.",
      standards: [
        {
          code: "PFL.3.3",
          text: "Analyze and apply technology and/or social media as tools for supporting a healthy, active lifestyle.",
          claimIds: ["pe.wearable-tech-activity"],
          coverage: "full",
          note: "The course's literal premise: the learner uses a wearable (or just a phone) plus a daily log, every day for five weeks, to read and support their own activity habits.",
        },
        {
          code: "PFL.3.13",
          text: "Create and implement a habit modification plan and maintain a fitness portfolio that enhances a healthy, active lifestyle in college or career settings (e.g., assessment scores, goals for improvement, plan of activities for improvement, log of activities to reach goals, timeline for improvement).",
          claimIds: ["pe.fitness-plan-blueprint", "health.woop-goal-setting", "health.woop-obstacle-strategies"],
          coverage: "full",
          note: "Both named halves, by two courses: the habit modification plan is built with the best-evidenced method available (mental contrasting plus if-then plans), and the fitness portfolio — assessment scores, goals, activity plan, daily log, 90-day timeline — is the data course's capstone.",
        },
        {
          code: "PFL.3.2",
          text: "Evaluate the validity of claims made by commercial products and programs pertaining to fitness and a safe, healthy, active lifestyle (e.g., performance enhancements, safety equipment, pre-workouts, exercise gimmicks, proper gear for activity).",
          claimIds: ["health.health-product-claims"],
          coverage: "partial",
          note: "Partial: evaluating health-product and supplement marketing — and verifying a claim yourself — is taught well; the standard's fitness-specific examples (pre-workouts, gear) are not the worked cases.",
        },
      ],
    },

    // ── PE: Recreational Sports (Grades 9-12) ──────────────────────────────
    {
      id: "ar-rs",
      subject: "Physical Education",
      name: "Recreational Sports — Arkansas Physical Education Course Standards (Grades 9-12)",
      publisher: "Arkansas Department of Education, Division of Elementary & Secondary Education (DESE)",
      version: "2019 standards family · RS course codes",
      fetchedOn: "2026-07-16",
      sourceUrl: "https://dese.ade.arkansas.gov/Files/20210412105042_PE_9-12_Recreational_Sports.pdf",
      adoption:
        "Another of Arkansas's four stand-alone high-school PE credit courses — the one whose net/wall and target games our sport courses actually teach. Knowledge-side claims only.",
      standards: [
        {
          code: "RS.2.1",
          text: "Apply terminology associated with exercise and participation in selected individual performance activities, dance, net and wall games, target games, aquatics, and/or outdoor pursuits appropriately.",
          claimIds: ["pe.sport-strategy-knowledge"],
          coverage: "partial",
          note: "Partial, and read this before relying on it: the TERMINOLOGY (and the concepts and tactics behind it) is taught in genuine depth for net and wall games (tennis, pickleball) and target games (golf, croquet). The applying-in-participation half happens on a court or course an online class cannot observe, and dance, aquatics, and outdoor pursuits are not taught.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Arkansas mathematics standard.",
    },
    {
      heading: "The Arkansas Civics flagship's structure lessons have no Arkansas standard to cite.",
      body: "Arkansas Civics: How Your State Government Works teaches the 1874 constitution, the seven separately elected executives, the nonpartisan ELECTED Supreme Court (Amendment 80), and the quorum-court county system — from Arkansas's own official sources. But Arkansas's 2022 Civics and U.S. Government standards are overwhelmingly FEDERAL: we searched both documents and found no structure-of-Arkansas-government standard for those lessons to meet. The course backs the state halves of C.4.CIV.1 (lawmaking, initiatives) and C.3.CIV.13 (elections); the rest of its Arkansas content has no code to cite. The gap is in the standards, not the course.",
    },
    {
      heading: "Health — the 2019 standards print no citable codes, and the content does not match.",
      body: "Arkansas's 2019 Health & Safety standards are competency statements ('I can…') organized by domain and level, with no printed codes — and the Grades 9-12 objectives are content-domain statements (nutrition, alcohol/tobacco/drugs, disease prevention, mental health) that our health courses do not teach. Unlike Indiana and Arizona, whose health frameworks carry skill standards for evaluating health information and goal-setting, Arkansas gives our health claims no honest home. We cite none; the goal-setting and product-claims work maps through the PE course frameworks instead, where Arkansas DID write codes.",
    },
    {
      heading: "Personal finance — nothing.",
      body: "Arkansas bundles personal finance into its Economics course (Act 480/466 requirements). The catalog does not teach personal finance, so we claim no PF standard.",
    },
    {
      heading: "Arkansas Economics has no home for the reciprocity-economy content.",
      body: "The curriculum contrasts traditional (reciprocity) and market economies directly and at length, but E.3.ECON.1's allocation-method list (price, auction, lottery, first come, contest, fiat) has no gift/reciprocity entry, and no other 2022 Economics standard covers economic systems. That content maps in Arkansas through World Geography's G.3.WG.5 (attitudes toward resources) instead. E.3.ECON.6/7 (degrees of market competition) are rejected for the same reason as Indiana's market-structure standards: named in our lessons, never taught as a unit. E.5.ECON.1 (comparative advantage) is not taught by name.",
    },
    {
      heading: "Most of the Civics and U.S. Government standards we checked.",
      body: "C.2.CIV.1 and H.5.USH.1 (flag etiquette), C.2.CIV.3 (the seven-ideology comparison), C.2.CIV.4 (the Federalist Papers as rationale), C.3.CIV.2/3/5 (non-citizen roles, citizenship demographics, the Census), C.3.CIV.11 (Arkansas student-law topics), C.3.CIV.12/14/15/16 (parties, PACs, media influence, gerrymandering — our media-literacy course is consumer protection, not political media analysis), C.4.CIV.5/6 (intergovernmental policy conflict; criminal vs. civil law), C.3.USG.1-6 (Enlightenment thinkers and the Declaration as persuasive argument), C.2.USG.6/7/10/12/13 (the Cabinet, the bureaucracy, Full Faith and Credit, fiscal policy), and C.4.USG.3-6 (judicial philosophies and current-issues application) — the courses do not genuinely teach these, so we do not claim them.",
    },
    {
      heading: "U.S. History Since 1929 starts too late for half our labor history.",
      body: "The Gilded Age labor movement (the Knights, Haymarket, Homestead, Pullman), the Triangle fire, and the Great Migration's first decades all predate 1929, so Arkansas's U.S. History course cannot reach them — the window is the course's, not ours. Taft-Hartley (1947) and PATCO (1981) fall inside the window, but H.5.USH.20's policy list does not name labor policy and H.5.USH.22's Reagan-era list does not name PATCO, so we do not claim either. The Migration and Jim Crow map through African-American History, where Arkansas's standards name them.",
    },
    {
      heading: "World History standards we checked and rejected.",
      body: "H.6.WH.10 (industrialization's development and expansion), H.6.WH.21-24 (World War I and II, the Holocaust), H.6.WH.30-32 (Cold War interdependence, late-20th-century catastrophes and costs of war), and H.6.WH.34 (human-made and natural disasters) — case-study adjacency is not coverage, so we claim none of them.",
    },
    {
      heading: "PE performance and participation standards — all of them.",
      body: "Every PFL and RS standard that asks a student to DEMONSTRATE motor skill, participate, perform dance, or exhibit behavior during activity (all of Content Standard 1, the participation halves of Standard 3, Standards 4 and 5's in-activity conduct) is out of reach of an online course, however good its knowledge content. We claim knowledge- and planning-side standards only, and we say so on each entry.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Arkansas's closest frameworks (Computer Science, World Languages) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Arkansas claims this pass.",
    },
  ],
};
