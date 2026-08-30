// ─────────────────────────────────────────────────────────────────────────────
// OHIO — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-oh` was written FROM Ohio's own official sources (the Ohio Constitution and
// Revised Code at codes.ohio.gov, the Ohio General Assembly, ohiosos.gov, and the Ohio judicial
// branch). Unlike Arkansas and California, Ohio's high-school AMERICAN GOVERNMENT standards name
// Ohio's own government explicitly — Content Statement 16 ("the Ohio Constitution ... was changed
// in 1851") and Content Statement 17 (individuals assist state and local governments) — so the
// Ohio flagship's structure lessons get a genuine 1:1 home, mapped as full.
//
// What Ohio actually adopted (verified against the Adopted-2018/2017 documents themselves):
//   · Social studies — Ohio's Learning Standards for Social Studies, adopted February 2018. One
//     document; the six high-school courses (American History, American Government, Modern World
//     History, Economics and Financial Literacy, Contemporary World Issues, World Geography) are
//     framework-organized by Themes → Topics → numbered CONTENT STATEMENTS. Each course reuses
//     the numbers 1..N, so each course is its own framework here (codes stay unique per framework).
//   · ELA — Ohio writes its OWN standards: Ohio's Learning Standards for English Language Arts,
//     adopted 2017. The codes are Ohio's (RI.9-10.x / RI.11-12.x) and the wording is Ohio's own
//     2017 revision (e.g., RI.9-10.2 is split into sub-parts a/b), so Ohio is NOT mapped through
//     our shared Common Core file — this framework is bespoke.
//   · Science — Ohio is NOT an NGSS state (Ohio's Learning Standards for Science, adopted 2018,
//     are Ohio's own). We claim NOTHING in Ohio science, on purpose: Ohio publishes its high-school
//     science courses (Environmental Science, Physical Geology, Biology, Chemistry, Physics) as
//     bare TOPIC OUTLINES (e.g., "ENV.GP.3: Climate change"), with the full content statements
//     "being updated ... once the revised Model Curriculum is adopted." Only Ohio's K-8 grades
//     carry full-sentence content statements, at the wrong grade level for this catalog. Verbatim-
//     or-nothing: with no citable high-school science sentence, the climate-and-resources content
//     maps to Ohio social studies (Modern World History CS 28, Contemporary World Issues CS 11,
//     World Geography CS 4) instead. See notClaimed.
//
// Provenance: education.ohio.gov refuses connections from our tooling (DNS unresolvable, same as
// Arizona/California's ADE/CDE), and web.archive.org was unavailable this pass, so each Ohio
// document was transcribed from a faithful DISTRICT-MIRRORED copy of the Ohio Department of
// Education's own Adopted PDF (identical title page, "OHIO'S LEARNING STANDARDS | ... | ADOPTED
// 2018/2017"), all fetched 2026-07-17. `sourceUrl` on each framework is the canonical ODE PDF a
// teacher can open in a browser; the mirrors read this pass were:
//   · Social Studies (Adopted 2018) — resources.finalsite.net/.../HSSocialStudiesLearningStandards.pdf
//   · ELA Reading Informational Text (Adopted 2017) — resources.finalsite.net/.../ELA-Learning-StandardsInformationalText.pdf
//   · Science (Adopted 2018) — resources.finalsite.net/.../scifinalstandards121018.pdf (verified topic-outline format)
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "OH",
  frameworks: [
    // ── Social Studies: American Government (Adopted 2018) ──────────────────
    {
      id: "oh-ss-amgov",
      subject: "Social Studies",
      name: "Ohio's Learning Standards for Social Studies — American Government",
      publisher: "Ohio Department of Education (and Workforce)",
      version: "Adopted February 2018",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies_01-2019.pdf.aspx?lang=en-US",
      adoption:
        "Ohio requires one-half unit of American Government for graduation, and its end-of-course exam is aligned to this course. The standards are organized as Themes → Topics → numbered Content Statements; the course reuses the numbers 1..21, so it is its own framework here. Two content statements name Ohio's own government (CS 16 the Ohio Constitution; CS 17 assisting state and local governments), which is where the Ohio Civics flagship maps.",
      standards: [
        // — Ohio's own government (the flagship's 1:1 home) —
        {
          code: "American Government · Content Statement 16",
          text: "As a framework for the state, the Ohio Constitution has similarities and differences to the federal Constitution; it was changed in 1851 to address difficulties governing the state.",
          claimIds: [
            "civics.oh-constitution-direct-democracy",
            "civics.oh-three-branches",
            "civics.oh-courts",
            "civics.oh-bill-process",
          ],
          coverage: "full",
          note: "The Ohio flagship IS this standard: the 1851 constitution and its 1912 direct-democracy makeover, and how Ohio's framework differs from the federal one — a plural executive (a joint-ticket Governor/Lieutenant Governor beside a separately-elected AG, Secretary of State, Auditor, and Treasurer), an elected judiciary, and the distinctive three-fifths veto override.",
        },
        {
          code: "American Government · Content Statement 17",
          text: "Individuals in Ohio have a responsibility to assist state and local governments as they address relevant and often controversial problems that directly affect their communities.",
          claimIds: [
            "civics.oh-get-involved",
            "civics.oh-local-government",
            "civics.oh-elections",
          ],
          coverage: "full",
          note: "Taught as practice, Ohio edition: getting involved at the county, city/village, township, and special-district level, using Ohio's real citizen initiative and referendum, and voting Ohio's now party-labeled judicial races — grounded in Ohio's 88 counties and its municipal home rule.",
        },
        // — Federal system —
        {
          code: "American Government · Content Statement 5",
          text: "As the supreme law of the land, the U.S. Constitution incorporates basic principles that help define the government of the United States as a federal republic including its structure, powers and relationship with the governed.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
          ],
          coverage: "full",
          note: "The Constitution is worked article by article for structure and powers, with dedicated courses on separation of powers and checks and balances, on federalism, and on the enumerated/implied/reserved/concurrent powers taxonomy.",
        },
        {
          code: "American Government · Content Statement 7",
          text: "Constitutional government in the United States has changed over time as a result of amendments to the U.S. Constitution, Supreme Court decisions, legislation and informal practices.",
          claimIds: ["civics.article-v-amendment", "rights.scotus-precedent", "rights.landmark-cases"],
          coverage: "full",
          note: "All three of the standard's named engines are taught: Article V amendment and the key later amendments, how Supreme Court precedent expands rights over time, and the landmark cases as applicable rules.",
        },
        {
          code: "American Government · Content Statement 12",
          text: "Law and public policy are created and implemented by three branches of government; each functions with its own set of powers and responsibilities.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
            "civics.oh-three-branches",
          ],
          coverage: "full",
          note: "The three federal branches and their Article I-III powers are taught directly, alongside Ohio's own three branches.",
        },
        {
          code: "American Government · Content Statement 13",
          text: "The political process creates a dynamic interaction among the three branches of government in addressing current issues.",
          claimIds: ["civics.separation-checks-balances", "civics.federal-articles-i-iii"],
          coverage: "full",
          note: "The interaction among the branches is exactly the checks-and-balances material: how each branch checks the others in the Articles I-III design.",
        },
        {
          code: "American Government · Content Statement 14",
          text: "In the United States, people have rights that protect them from undue governmental interference. Rights carry responsibilities that help define how people use their rights and that require respect for the rights of others.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights", "civics.citizenship-responsibilities"],
          coverage: "full",
          note: "Both halves: rights as applicable rules (the landmark cases) and their limits (when government may constitutionally limit a right, and why), paired with the responsibilities of citizenship.",
        },
        {
          code: "American Government · Content Statement 1",
          text: "Opportunities for civic engagement within the structures of government are made possible through political and public policy processes.",
          claimIds: [
            "civics.campaign-help",
            "civics.show-up-every-level",
            "civics.track-a-bill",
            "civics.oh-get-involved",
          ],
          coverage: "full",
          note: "Civic engagement is taught as practice: helping a campaign lawfully, tracking a live bill, showing up at every level, with an Ohio-specific lesson on doing it here.",
        },
        {
          code: "American Government · Content Statement 3",
          text: "Issues can be analyzed through the critical use of credible sources.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.evaluate-claims-fallacies", "civics.track-a-bill"],
          coverage: "full",
          note: "Source evaluation is modelled constantly and published as a checkable bibliography, arguments and evidence are evaluated for fallacious reasoning, and tracking a bill teaches sourcing a live issue.",
        },
        {
          code: "American Government · Content Statement 19",
          text: "Individuals and organizations play a role within federal, state and local governments in helping to determine public (domestic and foreign) policy.",
          claimIds: [
            "civics.show-up-every-level",
            "civics.oh-get-involved",
            "civics.campaign-help",
            "civics.ballot-measures-local-causes",
          ],
          coverage: "full",
          note: "Where and how to be heard at every level, Ohio edition included, plus helping ballot measures and local causes.",
        },
        // — Partial / bounded federal —
        {
          code: "American Government · Content Statement 8",
          text: "The Bill of Rights was drafted in response to the national debate over the ratification of the Constitution of the United States.",
          claimIds: ["civics.bill-of-rights-origin", "civics.constitution-article-by-article"],
          coverage: "partial",
          note: "Partial: the Bill of Rights is taught as a document (Amendments I-X) and the Constitution is worked article by article, but the ratification-debate origin the standard emphasizes is touched, not worked as its own study.",
        },
        {
          code: "American Government · Content Statement 9",
          text: "The constitutional amendments known collectively as the Reconstruction Amendments extended new constitutional protections to African Americans, though the struggle to fully achieve equality would continue.",
          claimIds: ["civics.us-citizenship-law", "history.jim-crow-and-long-shadow"],
          coverage: "partial",
          note: "Partial: the Fourteenth Amendment's birthright-citizenship clause is taught directly, and the continued struggle is taught through Jim Crow and its long shadow. The Thirteenth and Fifteenth Amendments and a full Reconstruction-Amendments treatment are not worked.",
        },
        {
          code: "American Government · Content Statement 11",
          text: "Constitutional amendments have altered provisions for the structure and functions of the federal government.",
          claimIds: ["civics.article-v-amendment"],
          coverage: "partial",
          note: "Partial: the amendment process and several key later amendments are taught, but a systematic survey of how amendments restructured the federal government is not.",
        },
        {
          code: "American Government · Content Statement 15",
          text: "Historically, the United States has struggled with majority rule and the extension of minority rights. As a result of this struggle, the government has increasingly extended civil rights to marginalized groups and broadened opportunities for participation.",
          claimIds: ["rights.limits-on-rights", "rights.scotus-precedent", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial: the majority-rule-versus-minority-rights tension is taught (when rights may be limited, how precedent expands them) and the Great Migration lesson shows the extension of participation to a marginalized group. It is not a systematic survey of civil-rights expansion.",
        },
        {
          code: "American Government · Content Statement 4",
          text: "The processes of persuasion, compromise, consensus building and negotiation contribute to the democratic process.",
          claimIds: ["civics.federal-bill-process", "civics.oh-bill-process"],
          coverage: "partial",
          note: "Partial: compromise and negotiation are taught inside the lawmaking process (committees, conference committees, veto and override) at both the federal and Ohio levels, but persuasion and consensus-building are not taught as named skills.",
        },
        {
          code: "American Government · Content Statement 18",
          text: "A variety of entities within the three branches of government, at all levels, address public policy issues that arise in domestic and international affairs.",
          claimIds: ["civics.local-government-layers", "civics.oh-local-government", "civics.federal-bill-process"],
          coverage: "partial",
          note: "Partial: what local, state, and federal bodies handle is taught (the local-government layers, Ohio's own, and the federal lawmaking process), but public-policy analysis across domestic and international affairs is not a systematic unit.",
        },
        {
          code: "American Government · Content Statement 20",
          text: "The federal government uses spending and tax policy to maintain economic stability and foster economic growth. Regulatory actions carry economic costs and benefits.",
          claimIds: ["bvc.sugar-program-trade-barriers", "bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: the regulatory-costs-and-benefits half is taught through worked policies — the U.S. sugar program's costs, the War on Drugs' unintended consequences. General fiscal (spending and tax) policy for economic stability is not taught.",
        },
      ],
    },

    // ── Social Studies: American History (Adopted 2018) ────────────────────
    {
      id: "oh-ss-amhist",
      subject: "Social Studies",
      name: "Ohio's Learning Standards for Social Studies — American History",
      publisher: "Ohio Department of Education (and Workforce)",
      version: "Adopted February 2018",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies_01-2019.pdf.aspx?lang=en-US",
      adoption:
        "Ohio's required one-half-unit American History course (1877 to the present), also carrying a state end-of-course exam. Content statements are numbered 1..33; this catalog teaches U.S. history in spots (labor, the Great Migration, Prohibition, the New Deal's labor law), not as a full survey, so we claim only where the lessons genuinely land.",
      standards: [
        {
          code: "American History · Content Statement 9",
          text: "The rise of industrialization led to a rapidly expanding workforce. Labor organizations grew amidst unregulated working conditions, laissez-faire policies toward big business, and violence toward supporters of organized labor.",
          claimIds: ["history.gilded-age-labor", "history.triangle-fire-debs"],
          coverage: "full",
          note: "The Gilded Age labor movement is taught in depth: the Knights and the AFL, Haymarket, Homestead and Pullman (and the violence used against organized labor), and the Triangle fire.",
        },
        {
          code: "American History · Content Statement 12",
          text: "Following Reconstruction, old political and social structures reemerged and racial discrimination was institutionalized.",
          claimIds: ["history.jim-crow-and-long-shadow"],
          coverage: "full",
          note: "The institutionalization of racial discrimination — the Jim Crow South people fled — is taught directly, together with its long shadow.",
        },
        {
          code: "American History · Content Statement 18",
          text: "Movements such as the Harlem Renaissance, African-American migration, women's suffrage and Prohibition all contributed to social change.",
          claimIds: ["history.harlem-renaissance-black-press", "history.migration-streams-arrival", "bvc.prohibition"],
          coverage: "partial",
          note: "Partial: three of the standard's four named movements are taught in depth — the Harlem Renaissance, the African-American Great Migration, and Prohibition (causes, rhetoric, and results). Women's suffrage is not taught.",
        },
        {
          code: "American History · Content Statement 19",
          text: "The Great Depression was caused, in part, by the federal government's monetary policies, stock market speculation, and increasing consumer debt. The role of the federal government expanded as a result of the Great Depression.",
          claimIds: ["history.wagner-act"],
          coverage: "partial",
          note: "Partial: the federal-role-expanded half is taught through one New Deal statute in real depth — the Wagner Act, what it created and who it excluded. The causes of the Depression are not taught.",
        },
        {
          code: "American History · Content Statement 27",
          text: "Following World War II, the United States experienced a struggle for racial and gender equality and the extension of civil rights.",
          claimIds: ["history.labor-civil-rights", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial: the racial-equality struggle is taught from the labor angle most curricula skip — A. Philip Randolph to Memphis, and the Black urban vote the Migration created. Gender equality is not taught.",
        },
      ],
    },

    // ── Social Studies: Modern World History (Adopted 2018) ─────────────────
    {
      id: "oh-ss-mwh",
      subject: "Social Studies",
      name: "Ohio's Learning Standards for Social Studies — Modern World History",
      publisher: "Ohio Department of Education (and Workforce)",
      version: "Adopted February 2018",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies_01-2019.pdf.aspx?lang=en-US",
      adoption:
        "Ohio's world-history course (1600 to the present); world history and civilization is a graduation requirement. Content statements are numbered 1..28. The BVC curriculum's imperialism, revolution, Cold War, and sustainability content maps here.",
      standards: [
        {
          code: "Modern World History · Content Statement 10",
          text: "Imperialism involved land acquisition, extraction of raw materials, spread of Western values and direct political control.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.colonialism-persists-today"],
          coverage: "full",
          note: "Imperialism is taught through the commodities it ran — land, raw-material extraction, and political control across Africa, Asia, and Oceania — and how those patterns persist today.",
        },
        {
          code: "Modern World History · Content Statement 11",
          text: "The consequences of imperialism were viewed differently by the colonizers and the colonized.",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.whose-voice-differing-accounts",
            "bvc.plantation-economy-resistance",
          ],
          coverage: "full",
          note: "Both perspectives, which is the curriculum's Whose Voice method: first-person accounts on each side put side by side, and the resistance — from Maroon communities to revolution.",
        },
        {
          code: "Modern World History · Content Statement 9",
          text: "Imperial expansion had political, economic and social roots.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "Partial: the economic roots are taught in depth through the cash-crop and plantation systems; the political and social roots of imperial expansion are treated less systematically.",
        },
        {
          code: "Modern World History · Content Statement 7",
          text: "The American and French Revolutions influenced Latin American revolutions for independence.",
          claimIds: ["bvc.haitian-revolution"],
          coverage: "partial",
          note: "Partial: one such revolution is taught in real depth — the Haitian Revolution, through to the 1825 French indemnity and Haiti's modern poverty. The broader wave of Latin American independence is not taught.",
        },
        {
          code: "Modern World History · Content Statement 22",
          text: "The break-up of the Soviet Union ended the Cold War and created challenges for its former allies, the former Soviet republics, Europe, the United States and the non-aligned world.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Partial: the end of the Cold War in Eastern Europe is taught in depth for one country — Poland, from Solidarność through martial law to the 1989 negotiated exit and its economic price. The wider break-up of the USSR is not taught.",
        },
        {
          code: "Modern World History · Content Statement 28",
          text: "Environmental concerns, impacted by population growth and heightened by international competition for the world's energy supplies, have resulted in a new environmental consciousness and a movement for the sustainability of the world's resources.",
          claimIds: ["bvc.climate-change-forecasts", "bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Partial: published climate forecasts and their implications for growers and production regions are analyzed in depth, and resource availability shaping human activity is the curriculum's method. It is not a general treatment of the sustainability movement. (This is where Ohio's climate/resource content lives, because Ohio's high-school science standards carry no citable content statement — see notClaimed.)",
        },
      ],
    },

    // ── Social Studies: Economics and Financial Literacy (Adopted 2018) ─────
    {
      id: "oh-ss-econ",
      subject: "Social Studies",
      name: "Ohio's Learning Standards for Social Studies — Economics and Financial Literacy",
      publisher: "Ohio Department of Education (and Workforce)",
      version: "Adopted February 2018",
      fetchedOn: "2026-08-29",
      sourceUrl:
        "https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies_01-2019.pdf.aspx?lang=en-US",
      adoption:
        "Ohio's economics course, content statements 1..25. Most of the course is personal financial literacy (working, saving, investing, credit, insurance) that this catalog does not teach — but CS 4 gives the reciprocity-versus-market-economies content the economic-systems home Arizona and California lacked, and the trade standards are strong. Re-fetched from the same ODE PDF on 2026-08-29, when MONEY-07 (`retirement-accounts`) shipped and brought this file its FIRST personal-finance claim, CS 18, honestly as a partial: the cost half of that standard is taught in real depth and the investing half is not taught at all.",
      standards: [
        // — Added 2026-08-29 when MONEY-07 (`retirement-accounts`) shipped. This is the first
        //   personal-finance claim in the Ohio file, and it is deliberately the ONLY one taken from
        //   the saving-and-investing topic. CS 16, CS 17 and CS 19 were read in the same PDF on the
        //   same day and refused: 16 and 17 are about saving building wealth and buffering
        //   hardship, which is a savings-behaviour claim this catalog does not make, and 19 names
        //   banks, brokerages and insurance companies providing access to certificates of deposit,
        //   stocks, bonds and mutual funds, none of which MONEY-07 teaches.
        {
          code: "Economics and Financial Literacy · Content Statement 18",
          text: "Different costs and benefits are associated with saving and investing alternatives.",
          claimIds: [
            "money.retirement-account-costs",
            "money.retirement-tax-timing",
            "money.retirement-plan-terms",
          ],
          coverage: "partial",
          note: "Partial, and the split runs straight down the middle of the standard's own phrase. THE COST SIDE IS TAUGHT IN DEPTH, and taught from the rule that produces the numbers rather than as a generality: 29 CFR 2550.404a-5 requires a participant-directed plan to disclose each designated alternative's total annual operating expenses BOTH as a percentage and as a dollar amount for each 1,000 dollars invested, to separate plan-wide administrative expenses from individual expenses, to report at least quarterly the dollar amount actually charged with a description of the services it bought, and to state in the plan's own words that the cumulative effect of fees can substantially reduce the growth of a participant's account. The course then works that arithmetic on a labelled hypothetical with growth stripped out entirely, so the shape of a percentage-of-assets cost is visible without any rate of return being implied. THE ALTERNATIVES COMPARED ARE ACCOUNT TYPES, NOT INVESTMENTS: traditional against Roth treatment as a tax-timing trade (26 U.S.C. 219(a) against 408A), an employer plan against an individual account including the active-participant rule at 219(g) that links the two, and the employer match read as compensation carried on a vesting schedule. NOT TAUGHT AT ALL, and a teacher planning the rest of CS 18 must supply it: risk, return, diversification, and every investment product. MONEY-07 says in prose in three separate lessons that it gives no financial advice, names no product or provider, and projects no return.",
        },
        {
          code: "Economics and Financial Literacy · Content Statement 4",
          text: "Different economic systems (traditional, market, command, and mixed) utilize different methods to allocate limited resources.",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "full",
          note: "Directly and at length: traditional (reciprocity) economies contrasted with market economies, the exact economic-systems comparison Arizona's and California's high-school standards had no home for.",
        },
        {
          code: "Economics and Financial Literacy · Content Statement 8",
          text: "Economic policy decisions made by governments result in both intended and unintended consequences.",
          claimIds: ["bvc.sugar-program-trade-barriers", "bvc.prohibition", "bvc.war-on-drugs-foreign-policy"],
          coverage: "full",
          note: "Intended and unintended consequences are taught by name: the U.S. sugar program (stable prices, ~$3.5bn/yr consumer cost), Prohibition, and the War on Drugs' balloon effect.",
        },
        {
          code: "Economics and Financial Literacy · Content Statement 10",
          text: "Government actions, such as tariffs, quotas, subsidies, trade agreements and membership in multinational economic organizations, significantly impact international trade.",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "full",
          note: "Worked in detail: the sugar program's import quotas, tariffs, and price supports, and the NAFTA→USMCA trade agreement from the labor side.",
        },
        {
          code: "Economics and Financial Literacy · Content Statement 9",
          text: "When regions and nations use comparative advantage to produce at the lowest cost and then trade with others, production, consumption and interdependence increase.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: the geography of who produces what and who gains from trade is the series' spine, but comparative advantage as a formal framework is not taught by name.",
        },
        {
          code: "Economics and Financial Literacy · Content Statement 5",
          text: "Markets exist when consumers and producers interact. When supply or demand changes, market prices adjust. Those adjustments send signals and provide incentives to consumers and producers to change their own decisions.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: taught through real commodity markets — a supply shock moving world coffee prices and why inelastic demand absorbs the spike. It is not a general supply-and-demand unit.",
        },
      ],
    },

    // ── Social Studies: Contemporary World Issues (Adopted 2018) ────────────
    {
      id: "oh-ss-cwi",
      subject: "Social Studies",
      name: "Ohio's Learning Standards for Social Studies — Contemporary World Issues",
      publisher: "Ohio Department of Education (and Workforce)",
      version: "Adopted February 2018",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies_01-2019.pdf.aspx?lang=en-US",
      adoption:
        "Ohio's issues-based elective, content statements 1..22. CS 3 is a genuine media-literacy standard — the home for the curriculum's media-literacy work — and the Global Economy topic anchors the trade content.",
      standards: [
        {
          code: "Contemporary World Issues · Content Statement 3",
          text: "Individuals can evaluate media messages that are constructed using particular tools, characteristics and conventions for unique purposes. Different communication methods affect how people define and act on issues.",
          claimIds: [
            "bvc.media-fallacies-recurring",
            "bvc.reading-ads-for-omission",
            "bvc.reefer-madness-language-of-fear",
            "media.marketing-omissions",
          ],
          coverage: "full",
          note: "Media literacy runs through every BVC episode — reading ads for what they omit, the language of fear in drug-policy media — plus a dedicated marketing-deconstruction course on the tools and conventions of persuasion.",
        },
        {
          code: "Contemporary World Issues · Content Statement 19",
          text: "The global economy creates advantages and disadvantages for different segments of the world's population.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "full",
          note: "Who wins and loses from global trade is the series' spine: value-chain earnings and the commodity trap traced through real chains.",
        },
        {
          code: "Contemporary World Issues · Content Statement 20",
          text: "Trade agreements, multinational organizations, embargoes and protectionism impact markets.",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "full",
          note: "Protectionism (the sugar program) and trade agreements (NAFTA→USMCA) are both taught as worked cases with their market effects.",
        },
        {
          code: "Contemporary World Issues · Content Statement 21",
          text: "The distribution of wealth and economic power among countries changes over time.",
          claimIds: ["bvc.colonialism-persists-today", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: how value accrues downstream and how colonial economic patterns persist is taught in depth, but a systematic account of shifting global economic power is not.",
        },
        {
          code: "Contemporary World Issues · Content Statement 22",
          text: "The global economy creates interdependence so that economic circumstances in one country impact events in other countries.",
          claimIds: ["bvc.value-chain-earnings", "bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: interdependence is taught through commodity chains and price shocks that cross borders, not as a general macroeconomic treatment.",
        },
        {
          code: "Contemporary World Issues · Content Statement 11",
          text: "Decisions about human activities made by individuals and societies have implications for both current and future generations, including intended and unintended consequences.",
          claimIds: ["bvc.climate-change-forecasts", "bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Partial: climate forecasts and resource use shaping human activity are analyzed in depth for growers and production regions; a general sustainability-and-future-generations framework is not taught.",
        },
      ],
    },

    // ── Social Studies: World Geography (Adopted 2018) ─────────────────────
    {
      id: "oh-ss-geo",
      subject: "Social Studies",
      name: "Ohio's Learning Standards for Social Studies — World Geography",
      publisher: "Ohio Department of Education (and Workforce)",
      version: "Adopted February 2018",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies/Ohio-s-Learning-Standards-for-Social-Studies_01-2019.pdf.aspx?lang=en-US",
      adoption:
        "Ohio's geography elective, content statements 1..19. The BVC Commodity Map — commodities mapped where they grow and the trade that follows — is this course's strongest home.",
      standards: [
        {
          code: "World Geography · Content Statement 10",
          text: "Activities and patterns of trade and communication create interdependence among countries in different regions (e.g., seed corn grown in Iowa and planted in South America, high-definition televisions manufactured in Japan and viewed in the United States, news outlets from many countries available around the world via the Internet, instant access to data affects stock markets in different countries).",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.value-chain-earnings", "bvc.tea-trade-networks"],
          coverage: "full",
          note: "The Commodity Map is this standard: where commodities grow, the trade networks that move them (the Tea Horse Road, the Maritime Silk Road), and the interdependence that follows.",
        },
        {
          code: "World Geography · Content Statement 4",
          text: "Human societies use a variety of strategies to adapt to the opportunities and constraints presented by the physical environment (e.g., farming in flood plains and terraced farming, building hydroelectric plants by waterfalls and constructing hydroelectric dams, using solar panels as heat source and using extra insulation to retain heat).",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: human-environment interaction is the curriculum's method — volcanic soil and altitude deciding what grows, karst limestone shaping bourbon, climate redrawing the map. The standard's specific adaptation examples are not surveyed.",
        },
        {
          code: "World Geography · Content Statement 8",
          text: "Physical, cultural, economic, and political factors contribute to human migrations (e.g., drought, religious conflicts, job opportunities, immigration laws).",
          claimIds: ["history.migration-streams-arrival", "bvc.climate-change-forecasts"],
          coverage: "partial",
          note: "Partial: one migration is worked in depth — the Great Migration's push-and-pull factors, streams, and arrival cities — plus climate pressure on growing regions. It is not a general treatment of world migration.",
        },
        {
          code: "World Geography · Content Statement 9",
          text: "Human migrations impact physical and human systems (e.g., stress on food supplies in refugee camps, removal of natural obstacles to movement, harvest productivity and migrant labor, calls for an official language in countries with high immigration, reduction in city tax revenues due to urban emigration).",
          claimIds: ["history.migration-civil-rights-politics", "history.migration-streams-arrival"],
          coverage: "partial",
          note: "Partial: the human-systems impact is taught for one case — the Black urban populations and civil-rights politics the Great Migration created. The physical-systems impacts the standard lists are not taught.",
        },
        {
          code: "World Geography · Content Statement 12",
          text: "The characteristics of regions change over time and there are consequences related to those changes (e.g., industrial belt to rust belt, pristine locations to tourist attractions, colony to independent state).",
          claimIds: ["bvc.colonialism-persists-today", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: two of the standard's own examples are taught — colony to independent state (the Haitian Revolution and the persistence of colonial patterns) and the industrial belt (the Gilded Age industrial economy). It is not a general treatment of regional change.",
        },
      ],
    },

    // ── ELA: Reading Informational Text (Adopted 2017) — Ohio's own codes ──
    {
      id: "oh-ela-ri",
      subject: "English/Language Arts",
      name: "Ohio's Learning Standards for English Language Arts — Reading Informational Text (Grades 9-12)",
      publisher: "Ohio Department of Education (and Workforce)",
      version: "Adopted 2017",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://education.ohio.gov/getattachment/Topics/Learning-in-Ohio/English-Language-Art/English-Language-Arts-Standards/ELA-Learning-Standards-2017.pdf.aspx?lang=en-US",
      adoption:
        "Ohio writes its own ELA standards (adopted 2017); the Reading Informational Text strand carries Ohio's RI.9-10.x / RI.11-12.x codes in Ohio's own 2017 wording (e.g., RI.9-10.2 is split into sub-parts a/b), so Ohio is not mapped through our shared Common Core file. We cite the grade-9-10 and grade-11-12 reading standards this catalog genuinely meets.",
      standards: [
        {
          code: "RI.9-10.6",
          text: "Determine an author's perspective or purpose in a text and analyze how an author uses rhetoric to advance that perspective or purpose.",
          claimIds: ["bvc.author-rhetoric-primary-texts"],
          coverage: "full",
          note: "Author perspective and rhetoric are analyzed in the primary texts the curriculum works — abolitionist sugar-boycott pamphlets, Lin Zexu's letter, Torches of Freedom, Selling Prohibition.",
        },
        {
          code: "RI.11-12.6",
          text: "Determine an author's perspective or purpose in a text in which the rhetoric is particularly effective, analyzing how style and content contribute to the power, persuasiveness, or beauty of the text.",
          claimIds: ["bvc.rhetoric-power-persuasion"],
          coverage: "full",
          note: "The primary texts worked are seminal and rhetorical by design, analyzed for how style and content make them persuasive.",
        },
        {
          code: "RI.9-10.8",
          text: "Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is valid and the evidence is relevant and sufficient; identify false statements and fallacious reasoning.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.reefer-madness-language-of-fear"],
          coverage: "full",
          note: "Arguments and evidence are evaluated for validity and false statements directly — Doubt Is Our Product, peer review versus press release, and the language of fear in drug-policy media.",
        },
        {
          code: "RI.11-12.8",
          text: "Delineate and evaluate the reasoning in seminal U.S. texts and the premises, purposes, and arguments in works of public advocacy (e.g., The Federalist, presidential addresses).",
          claimIds: ["bvc.author-rhetoric-primary-texts", "bvc.evaluate-claims-fallacies"],
          coverage: "full",
          note: "The works of public advocacy worked are exactly this: Lin Zexu's letter to Queen Victoria, the abolitionist boycott pamphlets, Torches of Freedom — each delineated for premises, purpose, and argument.",
        },
        {
          code: "RI.9-10.7",
          text: "Analyze various accounts of a subject told in different mediums (e.g., a person's life story in both print and multimedia), determining which details are emphasized in each account.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.nearest-green-oral-history"],
          coverage: "partial",
          note: "Partial: accounts-against-accounts is strong (a planter's account against Equiano and Prince; the documentary record against the oral record on Nathan Green — genuinely different mediums). Multimedia accounts in the standard's modern sense are not analyzed.",
        },
        {
          code: "RI.11-12.7",
          text: "Integrate and evaluate multiple sources of information presented in different media or formats (e.g., visually, quantitatively) as well as in words in order to address a question or solve a problem.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: multi-source evaluation is modelled constantly and published as a checkable bibliography, but the student is required to integrate sources to solve a problem only in the Coffee episode's project.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Ohio mathematics standard.",
    },
    {
      heading: "Science — nothing, on purpose (and Ohio is not an NGSS state).",
      body: "We verified against Ohio's own 2018 science document rather than assuming: Ohio writes its own science standards, not NGSS. But Ohio publishes its HIGH-SCHOOL science courses (Environmental Science, Physical Geology, Biology, Chemistry, Physics) as bare topic outlines — for example the entire climate item reads only \"ENV.GP.3: Climate change\" — with the full content statements \"being updated ... once the revised Model Curriculum is adopted.\" Only Ohio's K-8 grades carry full-sentence content statements, at the wrong grade level for this adult catalog. Our rule is verbatim-or-nothing and the finder rejects standard text under ~40 characters, so there is no citable Ohio high-school science standard to map. The climate-and-resources content the NGSS states pick up through HS-ESS3-1 maps instead to Ohio social studies (Modern World History CS 28, Contemporary World Issues CS 11, World Geography CS 4).",
    },
    {
      heading: "American Government standards checked and rejected.",
      body: "CS 2 (political parties, interest groups, and the media as civic-involvement channels — our media-literacy work is consumer protection, not political-media analysis), CS 6 (the Federalist and Anti-Federalist Papers framing the ratification debate, as texts), CS 10 (the suffrage amendments as civil-rights extensions, taught as constitutional law), and CS 21 (the Federal Reserve and monetary policy) are not genuinely taught, so we do not claim them.",
    },
    {
      heading: "Economics — the financial-literacy half, superseded in part now that one cost standard is taught.",
      body: "This entry used to reject the whole financial-literacy half of Ohio's economics course. That changed on 2026-08-29 and the correction is recorded here rather than deleted: CS 18, different costs and benefits associated with saving and investing alternatives, is now claimed as a partial, on its cost half only, and its own entry says exactly what is and is not covered. Everything else in that half stays unclaimed and is named so the gap stays visible. Working and earning (CS 11-12), the personal-finance planning standards (CS 13-15), the rest of saving and investing (CS 16, 17 and 19), credit and debt (CS 20-22), risk management and insurance (CS 23-25), and the economic-data and market-competition standards (CS 1-3, 6-7) were all checked and are not taught. CS 19 is the sharpest refusal of the set: it asks how banks, brokerages and insurance companies provide access to certificates of deposit, stocks, bonds and mutual funds, and this catalog teaches no investment product of any kind. CS 22, consumer protection laws providing financial safeguards, is a genuine candidate that several courses in the personal-money series could back, and it is left unclaimed here only because no pass has yet done that analysis for Ohio; that is a deferral rather than a judgement. Ohio's CS 4, by contrast, is the economic-systems standard Arizona and California lacked, and we claim it.",
    },
    {
      heading: "American History beyond the labor, migration, Prohibition, and New Deal-labor standards.",
      body: "American History is a 1877-to-present survey (Content Statements 1-33). This catalog teaches U.S. history in specific places — the Gilded Age labor movement, Jim Crow, the Great Migration and Harlem Renaissance, Prohibition, and the Wagner Act — not as a survey, so the imperialism/foreign-affairs, world-war, Cold War, and post-Cold War content statements are not claimed.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Ohio's closest frameworks (Computer Science, World Languages, Technology) have not been fetched and verified this pass. Our rule is fetch-or-don't-cite, so these courses carry no Ohio claims here.",
    },
  ],
};
