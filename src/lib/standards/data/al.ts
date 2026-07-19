// ─────────────────────────────────────────────────────────────────────────────
// ALABAMA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-al` was written FROM Alabama's own official sources (legislature.state.al.us,
// sos.alabama.gov, judicial.alabama.gov), so Alabama's own-government content has a genuine home:
// the 2010 Course of Study's grade-12 United States Government Standard 5 names "the Constitution
// of Alabama of 1901" and directs a comparison of state and local governments, and that is where
// the Alabama flagship is mapped 1:1.
//
// INHERIT vs ALIAS vs BESPOKE — the reasoning, from Alabama's own record:
//   · Social Studies — BESPOKE. Alabama writes its own standards. The 2010 Alabama Course of
//     Study: Social Studies is one K-12 document; its high-school program is a set of one-credit
//     and half-credit COURSES, each with content standards numbered 1..N. We cite the two required
//     grade-12 half-credit courses — United States Government and Economics — because those are
//     where this catalog's civics ladder and BVC economics/history actually land. Alabama is NOT
//     mapped through any shared (Common Core / NGSS) file — it adopts none for social studies.
//   · ELA / Mathematics / Science — BESPOKE, and DEFERRED this pass (fetch-or-don't-cite).
//     Alabama replaced Common Core years ago and writes its own ELA (2021 Course of Study) and
//     Mathematics (2019 Course of Study); it is NOT an NGSS state — its science is the 2015
//     Alabama Course of Study: Science, built from the NRC Framework with Alabama's own codes.
//     Those documents have not been fetched and transcribed yet, so — per the rule — they carry no
//     Alabama claims here. The gap is published loudly in notClaimed, not hidden.
//
// CITATION FORMAT (disclosed): the 2010 Course of Study prints content standards as bare numbers
// (1., 2., 3., …) inside each named course, with the four strand letters (E=Economics,
// G=Geography, H=History, CG=Civics and Government) in the margin. To make each code unique and
// legible in the finder we cite it as the course abbreviation plus the printed number — USG.N for
// United States Government, ECON.N for Economics — and the `text` is the standard's lead sentence
// transcribed verbatim from the document. A teacher can find "United States Government, standard N"
// in the 2010 Course of Study to confirm.
//
// Provenance: the 2010 Alabama Course of Study: Social Studies PDF was retrieved from Alabama's
// own alabamaachieves.org (ALSDE) and transcribed from pages 73-80 (the grade-12 United States
// Government and Economics courses); fetched 2026-07-19.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const AL_SS_SOURCE =
  "https://www.alabamaachieves.org/wp-content/uploads/2021/03/2010-Alabama-Social-Studies-Course-of-Study.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "AL",
  frameworks: [
    // ── United States Government (Grade 12, one-semester required course) ───
    {
      id: "al-usgov",
      subject: "Social Studies",
      name: "Alabama Course of Study: Social Studies — United States Government (Grade 12)",
      publisher: "Alabama State Department of Education (ALSDE)",
      version: "2010",
      fetchedOn: "2026-07-19",
      sourceUrl: AL_SS_SOURCE,
      adoption:
        "Alabama writes its own social-studies standards. United States Government is a one-semester course required of every Grade 12 student; its content standards are numbered 1-15 in the 2010 Course of Study. We cite each as USG.N (the printed number), with the text transcribed verbatim. The Alabama flagship (state-civics-al) is mapped 1:1 onto Standard 5, the one standard that names Alabama's own government (\"the Constitution of Alabama of 1901\").",
      standards: [
        {
          code: "USG.2",
          text: "Summarize the significance of the First and Second Continental Congresses, the Declaration of Independence, Shays' Rebellion, and the Articles of Confederation of 1781 on the writing and ratification of the Constitution of the United States of 1787 and the Bill of Rights of 1791.",
          claimIds: ["civics.articles-to-constitution", "civics.bill-of-rights-origin"],
          coverage: "partial",
          note: "Partial: why the Articles of Confederation failed and how that produced the 1787 Constitution and the Bill of Rights is taught squarely (US Constitution 101). The Continental Congresses, the Declaration of Independence, and Shays' Rebellion the standard also names are not taught as their own content.",
        },
        {
          code: "USG.3",
          text: "Analyze major features of the Constitution of the United States and the Bill of Rights for purposes, organization, functions, and principles, including rule of law, federalism, limited government, popular sovereignty, judicial review, separation of powers, and checks and balances.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.article-v-amendment",
            "civics.bill-of-rights-origin",
            "civics.judicial-review-marbury",
          ],
          coverage: "full",
          note: "The named principles are the spine of the civics ladder: the Constitution worked article by article, separation of powers and checks and balances, federalism, the Article V amendment process, the Bill of Rights, and judicial review through Marbury v. Madison.",
        },
        {
          code: "USG.4",
          text: "Explain how the federal system of the United States divides powers between national and state governments.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.separation-checks-balances",
          ],
          coverage: "partial",
          note: "Partial: how power is divided is taught in full (State vs Federal Power: enumerated, implied, reserved, and concurrent powers, with McCulloch v. Maryland). The standard's sub-points on obligations to the states, admitting new states, cooperative federalism, and interstate relations are not treated systematically.",
        },
        {
          code: "USG.5",
          text: "Compare specific functions, organizations, and purposes of local and state governments, including implementing fiscal and monetary policies, ensuring personal security, and regulating transportation.",
          claimIds: [
            "civics.al-constitution-home-rule",
            "civics.al-plural-executive",
            "civics.al-legislature-courts",
            "civics.al-lawmaking-amendments",
            "civics.al-local-government",
            "civics.local-government-layers",
          ],
          coverage: "partial",
          note: "This is Alabama's own-government standard, and it is where the Alabama flagship lands 1:1: the 1901 constitution the standard names by title, weak home rule, the large plural executive, the Legislature, the partisan-elected judiciary, Alabama's lawmaking and amendment path, and its 67 counties. Partial because the standard's named functions (fiscal and monetary policy, ensuring personal security, regulating transportation) and the influence of special-interest groups are not the lessons' focus.",
        },
        {
          code: "USG.6",
          text: "Analyze the expansion of suffrage for its effect on the political system of the United States, including suffrage for non-property owners, women, African Americans, and persons eighteen years of age.",
          claimIds: [
            "history.jim-crow-and-long-shadow",
            "history.migration-civil-rights-politics",
          ],
          coverage: "partial",
          note: "Partial: the denial of the vote under Jim Crow (what the Great Migration fled) and the Black urban electorate the Migration created, with its civil-rights politics, are taught in depth. A systematic account of suffrage expansion for women, non-property owners, and eighteen-year-olds, and the standard's Selma-to-Montgomery March and Voting Rights Act of 1965 examples, is not covered.",
        },
        {
          code: "USG.7",
          text: "Describe the process of local, state, and national elections, including the organization, role, and constituency of political parties.",
          claimIds: [
            "civics.election-mechanics",
            "civics.electoral-college",
            "civics.al-elections-involved",
          ],
          coverage: "partial",
          note: "Partial: national and state election procedures are taught thoroughly (registration through counting and certifying, the Electoral College) with an Alabama-specific lesson on photo ID, absentee rules, and voting on many amendments. The organization, role, and constituency of political PARTIES the standard names is not taught.",
        },
        {
          code: "USG.11",
          text: "Evaluate constitutional provisions of the legislative branch of the government of the United States, including checks by the legislative branch on other branches of government.",
          claimIds: [
            "civics.federal-articles-i-iii",
            "civics.federal-bill-process",
            "civics.separation-checks-balances",
          ],
          coverage: "partial",
          note: "Partial: the constitutional provisions of the legislative branch, its checks on the other branches, and the whole legislative process from a bill's presentation to presidential action are taught in full (US Civics 101; How a Bill Becomes Law). The standard's sub-points on Congressional leadership hierarchy (Speaker, President Pro Tempore, whips) and committee types are not the lessons' focus.",
        },
        {
          code: "USG.12",
          text: "Evaluate constitutional provisions of the executive branch of the government of the United States, including checks by the executive branch on other branches of government and powers, duties as head of state and head of government, the electoral process, and the Twenty-fifth Amendment.",
          claimIds: [
            "civics.federal-articles-i-iii",
            "civics.separation-checks-balances",
            "civics.electoral-college",
          ],
          coverage: "partial",
          note: "Partial: the executive branch's constitutional provisions, its checks on the other branches, and the electoral process (the Electoral College) are taught. The standard's informal presidential powers, White House staff and Cabinet, and the Twenty-fifth Amendment are not treated as their own content.",
        },
        {
          code: "USG.13",
          text: "Evaluate constitutional provisions of the judicial branch of government of the United States, including checks by the judicial branch on other branches of government, limits on judicial power, and the process by which cases are argued before the United States Supreme Court.",
          claimIds: [
            "civics.federal-judiciary-structure",
            "civics.judicial-review-marbury",
            "civics.scotus-nomination-confirmation",
            "rights.landmark-cases",
            "rights.scotus-precedent",
          ],
          coverage: "full",
          note: "The federal judiciary's structure and independence, the checks on it, how justices are nominated and confirmed, how a case reaches the Court, the impact of landmark cases on constitutional interpretation (Marbury and Tinker among them), and how precedent works are taught across The Supreme Court & the Judicial Branch, US Civics 101, and Know Your Rights.",
        },
        {
          code: "USG.14",
          text: "Describe the role of citizens in American democracy, including the meaning, rights, and responsibilities of citizenship; due process and other rights guaranteed by the Constitution of the United States; and participation in the election process.",
          claimIds: [
            "civics.us-citizenship-law",
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
            "rights.limits-on-rights",
            "civics.federalism-why-split-power",
          ],
          coverage: "full",
          note: "The meaning, rights, and responsibilities of citizenship (Citizenship & Naturalization Basics), due process and the constitutional rights and their limits (Know Your Rights), jury service (an entire course), and participation through registering and voting are all taught as practice.",
        },
        {
          code: "USG.15",
          text: "Explain the role and consequences of domestic and foreign policy decisions, including scientific and technological advancements and humanitarian, cultural, economic, and political changes.",
          claimIds: [
            "bvc.war-on-drugs-foreign-policy",
            "bvc.sugar-program-trade-barriers",
          ],
          coverage: "partial",
          note: "Partial: specific domestic and foreign policy decisions and their consequences are analyzed in depth — the War on Drugs (including its foreign-policy arm and the balloon effect) and the U.S. sugar program (import quotas, tariffs, price supports, and their cost). The standard's grand foreign-policy doctrines (isolationism versus internationalism, containment, détente, the war on terrorism) are not taught.",
        },
      ],
    },

    // ── Economics (Grade 12, one-semester required course) ─────────────────
    {
      id: "al-econ",
      subject: "Social Studies",
      name: "Alabama Course of Study: Social Studies — Economics (Grade 12)",
      publisher: "Alabama State Department of Education (ALSDE)",
      version: "2010",
      fetchedOn: "2026-07-19",
      sourceUrl: AL_SS_SOURCE,
      adoption:
        "Economics is a one-semester course required of every Grade 12 student; its content standards are numbered 1-12 in the 2010 Course of Study. We cite each as ECON.N (the printed number), text transcribed verbatim. This is not an economics course; we claim the standards the BVC commodity, trade, and labor curriculum genuinely reaches, each with an honest coverage note.",
      standards: [
        {
          code: "ECON.3",
          text: "Describe different economic systems used to allocate scarce goods and services.",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial: traditional (reciprocity) economies are contrasted with market economies directly and at length. The command and mixed systems the standard also names, and the three basic economic questions, are not taught.",
        },
        {
          code: "ECON.4",
          text: "Describe the role of government in a market economy, including promoting and securing competition, protecting private property rights, promoting equity, providing public goods and services, resolving externalities and other market failures, and stabilizing growth in the economy.",
          claimIds: ["bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Partial: government intervention in a market is worked through one detailed case — the U.S. sugar program's import quotas, price supports, and tariffs, and their roughly $3.5bn/yr consumer cost. The other government roles the standard lists (property rights, public goods, externalities, stabilization) are not taught.",
        },
        {
          code: "ECON.6",
          text: "Describe how specialization and voluntary exchange between buyers and sellers lead to mutually beneficial outcomes.",
          claimIds: ["bvc.price-elasticity-demand", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: supply, demand, and price are taught through real commodity markets — inelastic coffee demand absorbing a price spike, and who is paid what along the value chain. It is not the general supply-and-demand, market-clearing-price unit the standard's circular-flow sub-points describe.",
        },
        {
          code: "ECON.8",
          text: "Explain the impact of the labor market on the United States' economy.",
          claimIds: [
            "history.gilded-age-labor",
            "history.wagner-act",
            "history.taft-hartley-patco",
            "history.nafta-usmca-labor",
            "bvc.value-chain-earnings",
          ],
          coverage: "partial",
          note: "Partial: the standard's sub-point 'Tracing the history of labor unions and methods of contract negotiation' is taught in real depth (The History of Unions, from the Gilded Age through the Wagner Act, Taft-Hartley, and PATCO; the NAFTA-to-USMCA labor order). The general labor-market mechanics the standard leads with (how supply and demand set wages, unemployment and inflation) are not taught.",
        },
        {
          code: "ECON.12",
          text: "Explain why individuals, businesses, and governments trade goods and services in the global economy.",
          claimIds: [
            "bvc.sugar-program-trade-barriers",
            "bvc.value-chain-earnings",
            "bvc.growing-belts-resource-maps",
            "bvc.commodity-trap",
          ],
          coverage: "partial",
          note: "Partial: why nations trade (the growing belts decide where commodities can grow, so trade follows), the advantages and disadvantages of global trade (the commodity trap and who captures value), and trade barriers (the sugar program's quotas, tariffs, and subsidies, and why countries impose them) are all worked. The comparative-advantage and exchange-rate mechanics the standard also names are not taught.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Alabama mathematics standard (the 2019 Alabama Course of Study: Mathematics, Alabama's own, not Common Core).",
    },
    {
      heading: "English Language Arts — deferred, not denied.",
      body: "Alabama writes its own ELA standards (the 2021 Alabama Course of Study: English Language Arts, adopted after Alabama left Common Core). This catalog's media-literacy, rhetoric, argument-writing, and source-evaluation teaching would map to Alabama ELA — but our rule is fetch-or-don't-cite, and that document has not been retrieved and transcribed this pass, so we make no Alabama ELA claim yet.",
    },
    {
      heading: "Science — deferred, not denied. Alabama is NOT an NGSS state.",
      body: "Alabama's science standards are the 2015 Alabama Course of Study: Science, built from the National Research Council Framework with Alabama's own codes — NOT the Next Generation Science Standards. We did not assume otherwise. That document has not been fetched and transcribed this pass, so we make no Alabama science claim; when it is, the two Earth-science claims used elsewhere (resources, hazards, and climate shaping human activity) would be the candidates.",
    },
    {
      heading: "United States Government standards we checked and do NOT claim.",
      body: "USG.1 (historical and philosophical origins — the Magna Carta, Hobbes, Locke, Montesquieu, and comparing limited and unlimited governments), USG.8 (special-interest groups, PACs, and Buckley v. Valeo), USG.9 (the media's impact on the political and election process — our media-literacy work is consumer protection, not political-media analysis), and USG.10 (the role of political parties) are not genuinely taught by these courses, so we do not claim them.",
    },
    {
      heading: "Economics standards we checked and do NOT claim.",
      body: "ECON.1 and ECON.2 (scarcity, opportunity cost, and rational decision making as named concepts), ECON.5 (standard of living and productivity), ECON.7 (the organization and role of business, firm types, and market structures), ECON.9 (GDP, CPI, inflation, and unemployment measurement), ECON.10 (the Federal Reserve and monetary policy), and ECON.11 (fiscal policy, deficits, and the national debt) are financial- and macro-economics content this catalog does not teach.",
    },
    {
      heading: "Health and Physical Education — out of scope for Social Studies this pass.",
      body: "Alabama publishes its own Health Education and Physical Education courses of study. This catalog's dental-health, body-data, and sport-knowledge courses could map to them, but those documents were not fetched this pass; per fetch-or-don't-cite we make no Alabama health or PE claim yet.",
    },
  ],
};
