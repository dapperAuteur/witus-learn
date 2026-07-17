// ─────────────────────────────────────────────────────────────────────────────
// NEW YORK — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ny` was written FROM New York's own official sources (nysenate.gov,
// nyassembly.gov, nycourts.gov, cjn.ny.gov, dos.ny.gov, elections.ny.gov) — but note the flagship
// caveat in notClaimed: New York's Grade 12 Participation in Government framework is largely
// FEDERAL, so the course's New-York-structure lessons map only where New York's own framework
// actually reaches (12.G1b state constitutions, 12.G4d which names New York, and the public-policy
// standards).
//
// THE INHERIT-VS-BESPOKE CALL (the point of this state), made per framework, from NYSED's own
// documents rather than assumed:
//   · ELA — BESPOKE. New York adopted the Common Core in 2011 and then REVISED it into the Next
//     Generation Learning Standards (Board of Regents, September 2017). We fetched NY's own
//     "Next Generation Grades 6-12 Literacy Standards in History/Social Studies, Science, and
//     Technical Subjects (Revised 2017)" and compared it to the shared Common Core file. New York
//     RENUMBERED the content-literacy standards — Common Core's RH.11-12.6/WHST.11-12.7/.8 print
//     here as grade-banded RH6 / WHST5 / WHST6 — AND REVISED several: NY's RH6 drops Common Core's
//     word "differing" ("Evaluate authors' points of view…"), NY's WHST5 adds "analyze a topic,"
//     and NY's WHST6 adds a "discipline-specific criteria used in the social sciences or sciences"
//     clause. RH8 and RH9 happen to be verbatim-identical to Common Core, but the framework as a
//     whole diverged in both codes and text, so ALIASING the shared file would misrepresent both.
//     We therefore map New York's own verbatim literacy text; we do not adopt the shared Common
//     Core file for New York. We claim no mathematics standards.
//   · Science — INHERITED. New York adopted the Next Generation Science Standards as the New York
//     State P-12 Science Learning Standards (NYSSLS, adopted December 2016). We fetched NYSED's
//     High School science document and HS-ESS3-1's performance-expectation text is verbatim NGSS
//     ("Construct an explanation based on evidence for how the availability of natural resources,
//     occurrence of natural hazards, and changes in climate have influenced human activity."), so
//     we adopt the shared NGSS file. This is not a science course; see the note on the entry.
//   · Social studies — BESPOKE. Common Core never covered it, and New York's own K-12 Social
//     Studies Framework (Grades 9-12) is New York's. It is organized as grade-level courses (Global
//     History and Geography I & II, United States History and Government, and the two Grade 12
//     half-year courses Participation in Government and Economics), with Key Ideas and Conceptual
//     Understandings coded by grade (9.10, 10.4, 11.5, 12.G4, 12.E2). We map the Conceptual
//     Understanding (the coded standard), transcribed verbatim; the "Students will…" Content
//     Specifications beneath each are the framework's own detail, not restated here.
//
// Provenance: nysed.gov served every document directly (no Wayback needed) — all fetched
// 2026-07-17:
//   · Next Generation Grades 6-12 Literacy Standards (Revised 2017) —
//     /programs/standards-instruction/nys-next-generation-literacy-standards-grades-6-12.pdf
//   · Grades 9-12 Social Studies Framework —
//     /programs/curriculum-instruction/ss-framework-9-12.pdf
//   · P-12 Science Learning Standards, High School (HS-ESS3-1 adoption verified) —
//     /programs/standards-instruction/hs-science-learning-standards.pdf
// ─────────────────────────────────────────────────────────────────────────────

import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "NY",
  adoptions: [
    {
      framework: NGSS,
      adoption:
        "New York adopted the Next Generation Science Standards as the New York State P-12 Science Learning Standards (NYSSLS), adopted by the Board of Regents in December 2016. We fetched NYSED's High School science document: the one performance expectation we cite, HS-ESS3-1 (which NYSSLS titles “Global Impacts on Human Activity”), carries the NGSS text verbatim, so it comes through the shared NGSS mapping with the limit stated on the entry. This is not a science course.",
    },
  ],
  frameworks: [
    // ── Global History and Geography I (Grade 9) ───────────────────────────
    {
      id: "ny-ss-global9",
      subject: "Social Studies",
      name: "New York State K-12 Social Studies Framework — Grade 9: Global History and Geography I",
      publisher: "New York State Education Department (NYSED) / Board of Regents",
      version: "Grades 9-12 Framework",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://www.nysed.gov/sites/default/files/programs/curriculum-instruction/ss-framework-9-12.pdf",
      adoption:
        "New York's first year of high-school global history. Standards are cited as the framework prints them: grade.KeyIdea.letter (9.10b), the Conceptual Understanding transcribed verbatim.",
      standards: [
        {
          code: "9.10c",
          text: "The decimation of indigenous populations in the Americas influenced the growth of the Atlantic slave trade. The trade of enslaved peoples resulted in exploitation, death, and the creation of wealth.",
          claimIds: [
            "bvc.plantation-economy-resistance",
            "bvc.sugar-industry-impact",
            "bvc.middle-passage-primary-sources",
          ],
          coverage: "partial",
          note: "Partial: the labor-demand-to-slave-trade link this standard names is taught in depth through the sugar economy — the demand for sugar labor driving the Atlantic slave trade, and the Middle Passage. The framework's Content Specifications also ask for silver mining and the European/African roles in building the trade, which the courses do not work systematically.",
        },
        {
          code: "9.10b",
          text: "Transatlantic exploration led to the Encounter, colonization of the Americas, and the Columbian exchange.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.agricultural-hearths"],
          coverage: "partial",
          note: "Partial: the Columbian exchange itself — the exchange of crops and animals across the world, taught through the commodities that moved — is covered. The standard's exploration, disease, and comparative-demography specifications are not the courses' focus.",
        },
        {
          code: "9.10d",
          text: "European colonization in the Americas and trade interactions with Africa led to instability, decline, and near destruction of once-stable political and cultural systems.",
          claimIds: ["bvc.mesoamerica-colonization"],
          coverage: "partial",
          note: "Partial: Mesoamerica (Maya and Aztec) and the impact of Spanish colonization are taught in real depth, through the plants those societies governed. The standard's Content Specifications name the Inca as well, and the Inca are not covered.",
        },
      ],
    },

    // ── Global History and Geography II (Grade 10) ─────────────────────────
    {
      id: "ny-ss-global10",
      subject: "Social Studies",
      name: "New York State K-12 Social Studies Framework — Grade 10: Global History and Geography II",
      publisher: "New York State Education Department (NYSED) / Board of Regents",
      version: "Grades 9-12 Framework",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://www.nysed.gov/sites/default/files/programs/curriculum-instruction/ss-framework-9-12.pdf",
      adoption:
        "New York's second year of global history (1750–present). The imperialism Key Idea (10.4) is the strongest home for the Commodity Map's imperial-and-colonial lessons.",
      standards: [
        {
          code: "10.4a",
          text: "European industrialized states and Japan sought to play a dominant role in the world and to control natural resources for political, economic, and cultural reasons.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: imperial control of natural resources across Africa and Asia is exactly the Commodity Map's method — the cash-crop and resource systems the imperial powers ran, taught from multiple perspectives. The standard's specific direct/indirect-rule case list (South Africa, Congo, India, Indochina, China) is not worked territory by territory.",
        },
        {
          code: "10.4b",
          text: "Those who faced being colonized engaged in varying forms of resistance and adaptation to colonial rule with varying degrees of success.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.plantation-economy-resistance"],
          coverage: "partial",
          note: "Partial: resistance to imperial and colonial systems is taught — from Maroon communities to revolution and abolition — but the standard's named African and Chinese examples (Zulu, Ethiopia, Taiping/Boxer Rebellions) are not the courses' cases.",
        },
      ],
    },

    // ── United States History and Government (Grade 11) ────────────────────
    {
      id: "ny-ss-us",
      subject: "Social Studies",
      name: "New York State K-12 Social Studies Framework — Grade 11: United States History and Government",
      publisher: "New York State Education Department (NYSED) / Board of Regents",
      version: "Grades 9-12 Framework",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://www.nysed.gov/sites/default/files/programs/curriculum-instruction/ss-framework-9-12.pdf",
      adoption:
        "New York's required 11th-grade U.S. history course. Key Ideas are cited grade.KeyIdea (11.5), Conceptual Understandings grade.KeyIdea.letter (11.5b), transcribed verbatim.",
      standards: [
        {
          code: "11.5b",
          text: "Rapid industrialization and urbanization created significant challenges and societal problems that were addressed by a variety of reform efforts.",
          claimIds: [
            "history.gilded-age-labor",
            "history.triangle-fire-debs",
            "bvc.prohibition",
          ],
          coverage: "partial",
          note: "Partial: two of this Key Idea's named reform efforts are taught at real depth — the 1870-1920 union movement (the Knights, the AFL, the ARU, the ILGWU through the Triangle fire) and the temperance/prohibition movement leading to the Eighteenth Amendment. The standard also spans the Grange and Populists, woman's suffrage, and the wider Progressive reforms, which the courses do not cover.",
        },
        {
          code: "11.6c",
          text: "World War I had important social, political, and economic effects on American society.",
          claimIds: ["history.migration-streams-arrival", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial: the Great Migration — one of this standard's named effects — is an entire course, from the streams and arrival cities to the Black urban vote it created. The standard's other WWI effects (mobilization, Schenck v. United States, the Red Scare) are not taught.",
        },
        {
          code: "11.7a",
          text: "The 1920s was a time of cultural change in the country, characterized by clashes between modern and traditional values.",
          claimIds: ["bvc.prohibition"],
          coverage: "partial",
          note: "Partial: the impact of Prohibition on American society — one of this standard's named topics — is taught as passed and as experienced. The Roaring Twenties, the Quota Acts, the Klan's resurgence, and the Scopes trial are not.",
        },
        {
          code: "11.7b",
          text: "African Americans continued to struggle for social and economic equality while expanding their own thriving and unique culture.  African American cultural achievements were increasingly integrated into national culture.",
          claimIds: ["history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: the Harlem Renaissance and its integration into national culture are their own lesson, tied to the Black press and the Great Migration that made them possible. The standard's Black-nationalism specification (Marcus Garvey) is not worked.",
        },
        {
          code: "11.7c",
          text: "For many Americans, the 1920s was a time of prosperity.  However, underlying economic problems, reflected in the stock market crash of 1929, led to the Great Depression. President Franklin D. Roosevelt's responses to the Great Depression increased the role of the federal government.",
          claimIds: ["history.wagner-act"],
          coverage: "partial",
          note: "Partial: one of the New Deal's key legislative initiatives — the National Labor Relations Act (the Wagner Act) — is taught in depth, including who it deliberately excluded. The 1920s prosperity, the crash, and the rest of the New Deal apparatus are not taught.",
        },
        {
          code: "11.4a",
          text: "Between 1865 and 1900, constitutional rights were extended to African Americans.  However, their ability to exercise these rights was undermined by individuals, groups, and government institutions.",
          claimIds: ["history.jim-crow-and-long-shadow"],
          coverage: "partial",
          note: "Partial: the undermining half — the Jim Crow South that the Great Migration fled — is taught in depth. The standard's Reconstruction content (the 13th/14th/15th amendments, the Freedmen's Bureau, Plessy v. Ferguson) is not worked.",
        },
        {
          code: "11.9d",
          text: "A combination of factors contributed to the end of the Cold War, including American policies and Soviet economic and political problems that led to the loss of Soviet control over Eastern Europe.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Partial: the loss of Soviet control over Eastern Europe is taught in real depth for ONE country — Poland, from Solidarność and martial law through the 1989 negotiated exit and its economic price. The Berlin Wall and the wider collapse are not the courses' subject.",
        },
        {
          code: "11.10a",
          text: "After World War II, long-term demands for equality by African Americans led to the civil rights movement. The efforts of individuals, groups, and institutions helped to redefine African American civil rights, though numerous issues remain unresolved.",
          claimIds: ["history.labor-civil-rights", "history.migration-civil-rights-politics"],
          coverage: "partial",
          note: "Partial, from the angle most curricula skip: the labor half of the movement — A. Philip Randolph from the Brotherhood of Sleeping Car Porters to the 1963 March on Washington he architected to Memphis 1968 — is taught in depth, alongside the Migration's civil-rights politics. The standard's named figures, groups, and cases (King, Malcolm X, NAACP, SCLC, SNCC, Brown v. Board) are not worked individually.",
        },
      ],
    },

    // ── Participation in Government and Civics (Grade 12) ───────────────────
    {
      id: "ny-ss-gov",
      subject: "Social Studies",
      name: "New York State K-12 Social Studies Framework — Grade 12: Participation in Government and Civics",
      publisher: "New York State Education Department (NYSED) / Board of Regents",
      version: "Grades 9-12 Framework",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://www.nysed.gov/sites/default/files/programs/curriculum-instruction/ss-framework-9-12.pdf",
      adoption:
        "New York's one-semester 12th-grade civics course. Its Key Ideas are coded 12.G (Government) with lettered Conceptual Understandings (12.G4d). The framework is overwhelmingly FEDERAL; where it reaches New York's own state government (12.G1b, 12.G4d, the public-policy standards) the New York Civics flagship carries it. See notClaimed for the New-York-specific structure that has no code.",
      standards: [
        {
          code: "12.G1c",
          text: "Limited government is achieved through the separation of powers between three different branches. The system of checks and balances is part of this limited government structure at all levels of government.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.three-branches-federal",
            "civics.ny-three-branches",
          ],
          coverage: "full",
          note: "Taught directly at the federal level (separation of powers and checks and balances get their own lesson), and the standard's “at all levels of government” is met at the state level by the New York Civics flagship's three-branches lesson.",
        },
        {
          code: "12.G1e",
          text: "The powers not delegated specifically in the Constitution are reserved to the states. Though the powers and responsibilities of the federal government have expanded over time, there is an ongoing debate over this shift in power and responsibility.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.federalism-why-split-power"],
          coverage: "full",
          note: "Reserved powers (the Tenth Amendment) and the enumerated/implied/concurrent taxonomy are taught by name, and the debate over the federal government's expanding reach is taught through McCulloch v. Maryland and the Commerce Clause.",
        },
        {
          code: "12.G1f",
          text: "The Constitution includes a clearly defined and intentionally rigorous process for amendment.  This process requires state and federal participation, and allows the Constitution to evolve and change.",
          claimIds: ["civics.article-v-amendment"],
          coverage: "full",
        },
        {
          code: "12.G2b",
          text: "The Constitution aims to protect, among other freedoms, individual and group rights to freedom of speech, freedom of the press, freedom of assembly, freedom of petition, and freedom of religion. The extent to which these ideals exist in practice and how these protections should be applied in a changing world continues to be an issue of ongoing civic debate.",
          claimIds: ["civics.bill-of-rights-overview", "rights.landmark-cases", "rights.limits-on-rights"],
          coverage: "full",
          note: "Speech, press, assembly, petition, and religion are all taught as applicable rules with their landmark cases (Tinker, Brandenburg) and their limits — exactly the freedoms this standard names.",
        },
        {
          code: "12.G2c",
          text: "An independent judicial system is an integral part of the process that interprets and defends citizens' freedoms and rights. Issues pertaining to the flexibility of judicial interpretation and the impartiality of justices in practice are continued sources of public debate.",
          claimIds: ["civics.federal-judiciary-structure", "rights.scotus-precedent", "civics.ny-courts"],
          coverage: "full",
          note: "The federal judiciary's structure and independence, and how precedent works, are taught directly; the New York Civics flagship adds New York's own courts (the inverted names and the appoint-confirm path to the Court of Appeals).",
        },
        {
          code: "12.G2e",
          text: "Rights are not absolute; they vary with legal status, with location (as in schools and workplaces), and with circumstance. The different statuses of United States residency bring with them specific protections, rights, and responsibilities. Minors have specific rights in school, in the workplace, in the community, and in the family. The extension of rights across location, circumstance, age, and legal status is a subject of civic discourse.",
          claimIds: ["rights.limits-on-rights"],
          coverage: "full",
          note: "When and why government may constitutionally limit rights — time-place-manner, school speech, reasonable suspicion — is taught head-on, including how rights vary by location such as schools, which the standard names.",
        },
        {
          code: "12.G2d",
          text: "The definition of civil rights has broadened over the course of United States history, and the number of people and groups legally ensured of these rights has also expanded. However, the degree to which rights extend equally and fairly to all (e.g., race, class, gender, sexual orientation) is a continued source of civic contention.",
          claimIds: ["rights.scotus-precedent", "rights.landmark-cases"],
          coverage: "partial",
          note: "Partial: how Supreme Court precedent expands rights over time is taught through the landmark-case line. The standard's specific broadening across race, class, gender, and sexual orientation is not a course focus.",
        },
        {
          code: "12.G3a",
          text: "Citizens should be informed about rights and freedoms, and committed to balancing personal liberties with a social responsibility to others.",
          claimIds: ["civics.citizenship-responsibilities"],
          coverage: "full",
        },
        {
          code: "12.G3b",
          text: "The right to vote, a cornerstone of democracy, is the most direct way for citizens to participate in the government. A citizen must register to vote, and may register as a party member or select the status of independent.",
          claimIds: ["civics.voter-registration", "civics.election-mechanics", "civics.ny-elections"],
          coverage: "full",
          note: "Registering to vote is taught as a practiced responsibility, and the New York Civics flagship adds New York's own party-enrollment rule — the standard's register-as-party-or-independent — through the closed primary.",
        },
        {
          code: "12.G3c",
          text: "Citizens have opportunities to both participate in and influence their communities and country.  Citizens contribute to government processes through legal obligations such as obeying laws, paying taxes, serving on juries, and registering for selective service.",
          claimIds: ["civics.jury-service", "civics.citizenship-responsibilities"],
          coverage: "full",
          note: "Jury service — one of the standard's named obligations — is an entire course, and the responsibilities lesson covers obeying laws, paying taxes, and the rest.",
        },
        {
          code: "12.G3d",
          text: "Citizens have the right to represent their locality, state, or country as elected officials. Candidates develop a campaign, when they decide to seek public office.",
          claimIds: ["civics.run-for-office"],
          coverage: "full",
          note: "Running for office — eligibility, ballot access, money rules, and developing a campaign — is an entire course, which is exactly the standard's develop-a-campaign clause.",
        },
        {
          code: "12.G4a",
          text: "Depending on the level of government and type of election, there are different processes and mechanisms within the United States electoral and representational systems, including the electoral college and winner-take all systems. Advantages and drawbacks of election processes and mechanisms continue to be an issue of ongoing debate in the United States.",
          claimIds: ["civics.electoral-college", "civics.election-mechanics"],
          coverage: "full",
          note: "The Electoral College — which this standard names — is taught in depth, both its mechanics and its original purpose, alongside how primaries and the wider election machinery work.",
        },
        {
          code: "12.G4c",
          text: "In addition to voting, there are many ways in which citizens can participate in the electoral process. These include joining a political organization, donating money, and doing volunteer work on a political campaign.",
          claimIds: ["civics.campaign-help"],
          coverage: "full",
          note: "Supporting a campaign lawfully — volunteering, donating, canvassing, with the legal guardrails — is an entire course, exactly the standard's list.",
        },
        {
          code: "12.G4e",
          text: "Citizens participate in civic life through volunteerism and advocacy, including efforts such as contacting elected officials, signing/organizing petitions, protesting, canvassing, and participating in/organizing boycotts.",
          claimIds: [
            "civics.show-up-every-level",
            "civics.campaign-help",
            "civics.track-a-bill",
            "civics.ny-get-involved",
          ],
          coverage: "full",
          note: "Contacting officials, canvassing, tracking a live bill, and showing up at every level are taught as practice — federally and, through the New York Civics flagship, in New York.",
        },
        {
          code: "12.G4d",
          text: "The United States and New York have political party systems, and the political parties represent specific political, economic, and social philosophies.  Debate over the role and influence of political parties continues, although they play a significant role in United States elections and politics.  The role of political parties and the platforms they represent varies between states in the United States.",
          claimIds: ["civics.ny-elections", "civics.election-mechanics"],
          coverage: "partial",
          note: "Partial: this standard explicitly names New York, and the New York Civics flagship teaches New York's own party system — the closed primary and long party-enrollment lead time — alongside how primaries work generally. The standard's focus on party philosophies and platforms is not the courses' subject.",
        },
        {
          code: "12.G1b",
          text: "The Constitution created a unique political system that distributes powers and responsibilities among three different branches of government at the federal level and between state and federal governments. State constitutions address similar structures and responsibilities for their localities.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.ny-constitution-amendment",
            "civics.ny-local-government",
          ],
          coverage: "partial",
          note: "Partial: federalism — the split of power between state and federal governments — is taught directly, and the standard's “State constitutions address … their localities” is met by the New York Civics flagship (New York's 1894 constitution and its 62 counties, cities, towns, and villages). The federal three-branch distribution is taught elsewhere in this framework.",
        },
        {
          code: "12.G5a",
          text: "Each level of government has its own process of shaping, implementing, amending, and enforcing public policy. Customarily the executive branch will outline its plan and agenda in an executive address to the legislative body.",
          claimIds: [
            "civics.federal-bill-process",
            "civics.ny-bill-process",
            "civics.local-government-layers",
          ],
          coverage: "partial",
          note: "Partial: the federal and New York lawmaking processes are taught in genuine procedural depth (committees through veto override; New York's two-thirds override and powerful executive budget), and what local government handles is taught. The standard's executive-address and policy-implementation framing is not worked systematically.",
        },
        {
          code: "12.G5d",
          text: "Active and engaged citizens must be effective media consumers in order to be able to find, monitor, and evaluate information on political issues. The media have different venues,  which have particular strengths and serve distinct and shared purposes. Knowing how to critically evaluate a media source is fundamental to being an informed citizen.",
          claimIds: ["media.marketing-omissions", "bvc.evaluate-claims-fallacies"],
          coverage: "partial",
          note: "Partial: critically evaluating a media source — reading for omission and source reliability, spotting misleading claims and statistics — is taught as a consumer skill. The standard's specific focus on political-issue media is not the courses' angle.",
        },
      ],
    },

    // ── Economics, the Enterprise System, and Finance (Grade 12) ───────────
    {
      id: "ny-ss-econ",
      subject: "Social Studies",
      name: "New York State K-12 Social Studies Framework — Grade 12: Economics, the Enterprise System, and Finance",
      publisher: "New York State Education Department (NYSED) / Board of Regents",
      version: "Grades 9-12 Framework",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://www.nysed.gov/sites/default/files/programs/curriculum-instruction/ss-framework-9-12.pdf",
      adoption:
        "New York's one-semester 12th-grade economics course, coded 12.E with lettered Conceptual Understandings. We claim no personal-finance (12.E1) or macroeconomic-measurement (12.E4a-c) standards.",
      standards: [
        {
          code: "12.E3b",
          text: "The government's evolving role in protecting property rights, regulating working conditions, protecting the right to bargain collectively, and reducing discrimination in the workplace has attempted to balance the power between workers and employers. This role shifts in response to government's need to stimulate the economy balanced against the need to curb abusive business practices.",
          claimIds: [
            "history.wagner-act",
            "history.gilded-age-labor",
            "history.taft-hartley-patco",
            "history.labor-civil-rights",
          ],
          coverage: "partial",
          note: "Partial: the right to bargain collectively — the Wagner Act, its rollback in Taft-Hartley and PATCO, and the shifting balance between workers and employers — is the History of Unions course's spine, and unions' own record of workplace discrimination is taught too. Property rights and the wider anti-discrimination law are not worked.",
        },
        {
          code: "12.E2c",
          text: "Businesses choose what to supply in the product market, based on product market prices, available technology, and prices of factors of production. The prices of those factors are determined based on supply and demand in the factor market.  The supply and demand of each factor market is directly related to employment.  Debates surround various ways to minimize unemployment (frictional, structural, cyclical).",
          claimIds: ["history.gilded-age-labor", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: the labor factor market is taught through real cases — the union movement's fight over wages and conditions, and who is paid what along a commodity value chain (the smile curve). The standard's formal unemployment taxonomy (frictional, structural, cyclical) is not taught.",
        },
        {
          code: "12.E2b",
          text: "The choices of buyers and sellers in the marketplace determine supply and demand, market prices, allocation of scarce resources, and the goods and services that are produced. In a perfect world, consumers influence product availability and price through their purchasing power in the product market.  Product market supply and demand determine product availability and pricing.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: supply and demand are taught through real commodity markets — a frost in Brazil moving world coffee prices, and why inelastic demand absorbs the spike — not as a general market-mechanics unit with curve-shifting exercises.",
        },
        {
          code: "12.E4d",
          text: "Trade policies and agreements (tariffs, quotas, embargoes) set the rules for trade between the United States and other nations. Agreeing on such rules is very difficult because each nation has different interests, and each nation has special interest groups trying to influence the negotiations.",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: trade policy is taught through two worked cases — the U.S. sugar program's quotas and tariffs with their winners and losers, and NAFTA→USMCA's labor rules and their limits. A general treatment of trade agreements is not attempted.",
        },
      ],
    },

    // ── Literacy in History/Social Studies, Science, and Technical Subjects (Grades 11-12) ──
    {
      id: "ny-ela",
      subject: "English/Language Arts",
      name: "New York State Next Generation Learning Standards for Literacy in History/Social Studies, Science, and Technical Subjects — Grades 11-12",
      publisher: "New York State Education Department (NYSED) / Board of Regents",
      version: "Grades 11-12 · Revised 2017",
      fetchedOn: "2026-07-17",
      sourceUrl:
        "https://www.nysed.gov/sites/default/files/programs/standards-instruction/nys-next-generation-literacy-standards-grades-6-12.pdf",
      adoption:
        "New York's revision of the Common Core content-area literacy standards. Codes are New York's grade-banded Reading-in-History (RH) and Writing-in-History/Science/Technical (WHST) standards, transcribed verbatim from the Grades 11-12 band. New York renamed and revised these from Common Core, so we map New York's own text rather than aliasing the shared Common Core file (see the file header). This history/social-studies catalog does not touch the science/technical (RST) literacy strand.",
      standards: [
        {
          code: "RH6",
          text: "Evaluate authors' points of view on the same historical event or issue by assessing the authors' claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "The strongest single ELA alignment. Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims and evidence. (New York's RH6 drops Common Core's word “differing”; the text above is New York's own.)",
        },
        {
          code: "RH8",
          text: "Evaluate an author's premises, claims, and evidence by corroborating or challenging them with other information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
        },
        {
          code: "RH9",
          text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
        },
        {
          code: "RH3",
          text: "Evaluate various explanations for actions or events and determine which explanation best accords with textual evidence, acknowledging where the text leaves matters uncertain.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Partial: evaluating competing accounts of the same events against their evidence is the Whose Voice method. The standard's “acknowledging where the text leaves matters uncertain” is not itself a focus of the lessons.",
        },
        {
          code: "WHST5",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question), analyze a topic, or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded research assignment. Where it runs, it meets this standard squarely.",
        },
        {
          code: "WHST6",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the specific task, purpose, and audience as well as by applying discipline-specific criteria used in the social sciences or sciences; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "Partial, same reason as WHST5: the Coffee project's Options B and C require gathering authoritative sources with an APA bibliography, but it is the only graded assignment currently shipping.",
        },
        {
          code: "WHST1",
          text: "Write arguments focused on discipline-specific content.",
          claimIds: ["bvc.coffee-project-argument-paper"],
          coverage: "partial",
          note: "Partial: the Coffee project's Option D requires a research paper with a required counterargument section — squarely this standard's develop-claims-and-counterclaims work — but it is the only graded argument assignment currently shipping.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no New York Next Generation mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "New York adopted the NGSS verbatim as the P-12 Science Learning Standards (NYSSLS, December 2016), so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. We verified the performance-expectation text against NYSED's own High School science document; it is identical to the NGSS. There is no laboratory work, no investigation, and no modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "The Opium Wars and the Haitian Revolution — New York's framework never names them.",
      body: "The catalog teaches both in depth (the Opium Wars and Lin Zexu's letter; the Haitian Revolution through to the 1825 indemnity). We searched the full Grades 9-12 Social Studies Framework and it contains no Key Idea on either — unlike Washington, D.C., whose standards name them explicitly (WH2.53, WH2.40). The gap is in New York's standards, not the lessons.",
    },
    {
      heading: "The New York Civics flagship's structure lessons have mostly no New York code to cite.",
      body: "New York Civics: How Your State Government Works teaches New York's 1894 constitution and its automatic 20-year convention question, the plural executive (a separately-elected Attorney General and Comptroller), the famously inverted court names (the “Supreme Court” is the TRIAL court), the 62 counties with New York City's five borough-counties, and the absence of any statewide citizen initiative — from New York's own official sources. But the Grade 12 Participation in Government framework is overwhelmingly FEDERAL: state government enters only through 12.G1b (state constitutions and their localities), 12.G4d (which names New York's party system), and the public-policy standards 12.G5a/12.G5c — which the course backs. The inverted court names, the plural executive, the 20-year convention question, and the no-initiative rule have no code to cite. The gap is in the standards, not the course.",
    },
    {
      heading: "The Great Migration and the labor movement have no single Key Idea of their own.",
      body: "Two entire courses teach the Great Migration and the American labor movement, but New York's framework distributes their content across Key Ideas about their eras (11.4a's Reconstruction, 11.5b's Progressive-Era reform, 11.6c's WWI effects, 11.10a's civil-rights movement, and the economics standard 12.E3b) rather than giving either its own standard. We map only where the framework names their people and events, and we mark those partial. The catalog's depth on both exceeds what any one New York Key Idea asks.",
    },
    {
      heading: "Personal finance and macroeconomic measurement (Economics 12.E1, 12.E4a-c).",
      body: "Budgeting, credit, investment, inflation, GDP/GNP/CPI, and fiscal and monetary policy were checked against the Grade 12 Economics framework and are not genuinely taught by these courses. We claim only the labor-market, market-mechanics, and trade-policy standards the catalog actually reaches.",
    },
    {
      heading: "The rest of the Grade 11 U.S. History framework.",
      body: "Colonial and constitutional foundations (11.1-11.2), expansion and sectionalism (11.3), the rise of American power and WWI beyond the Great Migration (11.6), World War II (11.8), the Cold War beyond the Eastern-Europe collapse (11.9a-c), the post-1965 domestic movements (11.10b-c), and the globalizing world (11.11) are not genuinely taught by this catalog, so we do not claim them.",
    },
    {
      heading: "The science/technical (RST) literacy strand and the general ELA reading/writing standards.",
      body: "New York publishes a separate Reading in Science and Technical Subjects (RST) literacy strand and a general ELA reading/writing set. This catalog's honest literacy home is the Reading and Writing in History/Social Studies (RH/WHST) strand, mapped above; the RST science-literacy standards and the general ELA standards are not claimed here.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "New York's closest frameworks (the Computer Science and Digital Fluency Standards, and the World Languages standards) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no New York claims this pass.",
    },
  ],
};
