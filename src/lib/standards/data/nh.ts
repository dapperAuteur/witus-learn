// ─────────────────────────────────────────────────────────────────────────────
// NEW HAMPSHIRE — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-nh` was written FROM New Hampshire's own official sources
// (gencourt.state.nh.us, sos.nh.gov, courts.nh.gov, and the New Hampshire Constitution of 1784),
// so New Hampshire's civics flagship gets a genuine home: the 2006 Civics strand names the NEW
// HAMPSHIRE Constitution (SS:CV:12:2.1) and the New Hampshire judicial system with the New
// Hampshire Supreme Court's advisory-opinion function (SS:CV:12:2.3) explicitly.
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from the NH DOE's own record (New Hampshire is
// INHERIT-heavy — the bespoke work is the 2006 Social Studies frame):
//   · ELA — INHERITED (verbatim, no aliases). The New Hampshire State Board of Education adopted
//     the Common Core State Standards for ELA and mathematics on July 13, 2010, implementing them
//     within the NH College and Career Ready Standards (NH CCRS). New Hampshire adopted the CCSS
//     as published and did NOT renumber them, so ../shared/common-core-ela is adopted verbatim,
//     keeping the canonical CCSS codes (contrast Michigan, which prints the bare RH.11-12.6 form
//     and therefore aliases). We claim no mathematics standards.
//   · Science — INHERITED (verbatim). The New Hampshire State Board of Education adopted the Next
//     Generation Science Standards in November 2016 as the state's science standards (New
//     Hampshire's College- and Career-Ready Science Standards), using the NGSS codes verbatim.
//     HS-ESS3-1, the one PE we cite, is a standard NGSS PE, so ../shared/ngss is adopted verbatim.
//     This is not a science course; see the note on the entry itself.
//   · Social studies — BESPOKE. New Hampshire's K-12 Social Studies Curriculum Framework (June
//     2006) is New Hampshire's own. Its Grades 9-12 band carries five strands, each coded
//     SS:<strand>:12:<standard>.<indicator> — Civics and Governments (CV), Economics (EC),
//     Geography (GE), US/NH History (HI), and World History (WH). We map the CV, HI, WH, and EC
//     strands the catalog genuinely reaches; each is its own framework here (the strands use
//     distinct code prefixes, so codes stay unique within a framework). The 2006 indicators are
//     deliberately example-based ("e.g., …"); we cite the full indicator text as printed.
//
// PROVENANCE (social studies): the education.nh.gov PDF (the sourceUrl below) opens in a browser
// but returns HTTP 403 to automated fetches, so we transcribed VERBATIM from the byte-faithful
// Wayback Machine capture of the SAME NH DOE document — snapshot 20250501034417 (2025-05-01) of
// education.nh.gov/.../standards-socialstudies-framework.pdf (106 pages, cover reads "K-12 Social
// Studies / New Hampshire / Curriculum Framework / June 2006") — fetched 2026-07-19. The sourceUrl
// below is the canonical NH DOE link. Codes are cited exactly as printed (SS:CV:12:2.1, etc.). The
// document's own curly apostrophes ("sheriff’s", "Legislature’s", "Truman’s", "States’") and the
// em-dashes in its examples ("county—role", "nation—role") are transcribed verbatim; runs of
// whitespace inside an indicator were collapsed to single spaces (an extraction artifact, not text).
// The "(Themes: …)" tag that trails each indicator in the document is NOT part of the standard's
// citable statement and is not transcribed (the framework mislabels a couple of those tags "A0" —
// a source typo left untouched precisely because we do not cite them).
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const NH_SS =
  "https://www.education.nh.gov/sites/g/files/ehbemt326/files/inline-documents/standards-socialstudies-framework.pdf";
const NH_SS_VERSION_BASE =
  "K-12 Social Studies New Hampshire Curriculum Framework, June 2006";
const NH_SS_PUBLISHER =
  "New Hampshire Department of Education (NH DOE) / State Board of Education";

export const JURISDICTION: JurisdictionFile = {
  state: "NH",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "The New Hampshire State Board of Education adopted the Common Core State Standards for English language arts and mathematics on July 13, 2010, and implements them within the NH College and Career Ready Standards (NH CCRS). New Hampshire adopted the standards as published and did not renumber them, so the shared Common Core ELA file is adopted verbatim with no aliases; the literacy-in-history/social-studies (RH), informational-reading (RI), and writing-in-history (WHST) grade 11-12 strands are the ones this catalog touches, and the text here is the CCSS publisher's verbatim wording (thecorestandards.org). We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "In November 2016 the New Hampshire State Board of Education adopted the Next Generation Science Standards as the state's science standards (New Hampshire's College- and Career-Ready Science Standards), using the NGSS codes verbatim. HS-ESS3-1, the one performance expectation we cite, is a standard NGSS PE, so the shared NGSS file is adopted verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── NH Social Studies Framework (2006) — Grades 9-12 Civics and Governments ──
    {
      id: "nh-civics",
      subject: "Social Studies",
      name: "K-12 Social Studies New Hampshire Curriculum Framework — Grades 9-12 Civics and Governments (SS:CV)",
      publisher: NH_SS_PUBLISHER,
      version: `${NH_SS_VERSION_BASE} · Grades 9-12 Civics and Governments (SS:CV)`,
      fetchedOn: "2026-07-19",
      sourceUrl: NH_SS,
      adoption:
        "New Hampshire's Grades 9-12 Civics and Governments strand is the anchor for the New Hampshire Civics flagship. Two of its indicators name New Hampshire's own government explicitly — SS:CV:12:2.1 (the fundamental ideals incorporated in the United States Constitution AND the New Hampshire Constitution) and SS:CV:12:2.3 (the roles of the United States AND New Hampshire judicial systems, with the New Hampshire Supreme Court's advisory-opinion function as the document's own example) — so, unlike the purely-federal states, New Hampshire's own structure (the 400-member citizen House, the elected Executive Council, the appointed-to-70 judiciary, the town meeting) has a genuine home, mapped here. The federal-ladder indicators carry the general civics claims, and the Rights and Responsibilities strand (SS:CV:12:4) hosts the flagship's participation lessons. Transcribed verbatim from the 2006 NH DOE Framework (see the file header for the provenance note).",
      standards: [
        // — The flagship's home: indicators that name New Hampshire's own government —
        {
          code: "SS:CV:12:2.1",
          text: "Describe how the fundamental ideals and principles of American government are incorporated in the United States Constitution and the New Hampshire Constitution, e.g., the rule of law or individual rights and responsibilities.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.nh-constitution",
            "civics.separation-checks-balances",
          ],
          coverage: "full",
          note: "The flagship's primary home: the standard names the New Hampshire Constitution alongside the U.S. Constitution, and both are taught — the U.S. Constitution's fundamental ideals article by article (rule of law, separation of powers, individual rights) and New Hampshire's own Constitution of 1784 (its Part First Bill of Rights, the 'Live Free or Die' state).",
        },
        {
          code: "SS:CV:12:2.3",
          text: "Describe the roles and responsibilities of the United States and New Hampshire judicial systems, e.g., resolution of conflict between states or New Hampshire Legislature’s use of advisory opinions from the New Hampshire Supreme Court.",
          claimIds: ["civics.federal-judiciary-structure", "civics.nh-courts"],
          coverage: "full",
          note: "Both judicial systems the standard names are taught: the federal judiciary's structure and independence, and New Hampshire's own courts — judges nominated by the Governor and confirmed by the elected Executive Council, serving to age 70, and the New Hampshire Supreme Court's advisory-opinion function, which is the standard's own example.",
        },
        {
          code: "SS:CV:12:1.1",
          text: "Identify the structures and functions of government at various levels, e.g., county—role of the sheriff’s office, or nation—role of providing the defense of the country.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
            "civics.local-government-layers",
            "civics.nh-general-court",
            "civics.nh-executive-council",
          ],
          coverage: "full",
          note: "Structures and functions at various levels are taught end to end: the three federal branches (Articles I-III) and what local government handles, plus New Hampshire's own branches — the 400-member General Court and the elected five-member Executive Council that shares executive power with the Governor.",
        },
        {
          code: "SS:CV:12:4.1",
          text: "Demonstrate responsible practices within the political process, e.g., registering to vote or taking civic action.",
          claimIds: [
            "civics.voter-registration",
            "civics.citizenship-responsibilities",
            "civics.track-a-bill",
            "civics.show-up-every-level",
            "civics.nh-first-primary",
            "civics.nh-get-involved",
          ],
          coverage: "full",
          note: "The standard's own examples are taught as practice: registering to vote (including New Hampshire's Election-Day registration) and taking civic action — tracking a live bill, showing up at every level, and New Hampshire's own on-ramps, from the first-in-the-nation primary to speaking at town meeting.",
        },
        {
          code: "SS:CV:12:4.3",
          text: "Explain why the preservation of liberty requires the participation of knowledgeable and engaged citizens, e.g., writing letters to the editor or participating in town meetings.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.nh-get-involved",
            "civics.show-up-every-level",
          ],
          coverage: "full",
          note: "Why engaged citizenship preserves liberty is the flagship's closing argument, and the standard's own example — participating in town meetings — is New Hampshire's signature civic practice, taught as something a learner will actually do.",
        },
        // — Partial: the federal ladder, the living Constitution, and civic-action indicators —
        {
          code: "SS:CV:12:1.2",
          text: "Examine how institutions and individuals make, apply, and enforce rules and laws, e.g., the Federal Communications Commission regulations on television broadcast standards or local public hearings on zoning regulations.",
          claimIds: ["civics.federal-bill-process", "civics.nh-lawmaking", "civics.show-up-every-level"],
          coverage: "partial",
          note: "Partial: how rules and laws are MADE is taught in depth — the full federal lawmaking process and how a bill becomes a New Hampshire law in the General Court — and showing up at local hearings is taught as practice. The 'apply and enforce' regulatory-agency half (the FCC-style rulemaking the standard names) is not the course's focus.",
        },
        {
          code: "SS:CV:12:1.3",
          text: "Evaluate how the purposes of government have been interpreted, e.g., promoting the general welfare or protection of private property.",
          claimIds: ["civics.preamble-purposes"],
          coverage: "partial",
          note: "Partial: the purposes of government are taught by working the Preamble clause by clause (including 'promote the general welfare'). The standard's evaluative task — how those purposes have been INTERPRETED and contested over time — is set up rather than assessed.",
        },
        {
          code: "SS:CV:12:1.4",
          text: "Explain how in the United States legitimate authority derives from custom, law and consent of the governed, e.g., the Mayflower Compact or local curfews.",
          claimIds: ["civics.nh-town-meeting", "civics.constitution-article-by-article"],
          coverage: "partial",
          note: "Partial: consent of the governed is taught as an idea in the constitution course and embodied concretely by the New Hampshire town meeting, where residents themselves vote the budget and the warrant articles — direct consent in action. The standard's specific examples (the Mayflower Compact, local curfews) are not worked individually.",
        },
        {
          code: "SS:CV:12:2.2",
          text: "Analyze the evolution of the United States Constitution as a living document, e.g., the Bill of Rights or Plessy v. Ferguson.",
          claimIds: [
            "civics.bill-of-rights-origin",
            "civics.article-v-amendment",
            "rights.scotus-precedent",
            "rights.landmark-cases",
          ],
          coverage: "partial",
          note: "Partial: the Constitution as a living document is taught through the mechanisms that change it — the Bill of Rights as a document, the Article V amendment process, and how Supreme Court precedent expands rights over time through the landmark cases. Plessy v. Ferguson specifically is not taught.",
        },
        {
          code: "SS:CV:12:2.4",
          text: "Evaluate how individual rights have been extended in the United States, e.g., Truman’s integration of the Armed Services or the Miranda decision.",
          claimIds: ["rights.landmark-cases", "rights.scotus-precedent", "history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: the extension of individual rights is taught as usable rules — the landmark rights cases and how precedent expands rights over time — and the labor-to-civil-rights line (A. Philip Randolph) reaches the era of Truman's integration of the armed services. The standard's two specific examples (that integration and the Miranda decision) are not worked individually.",
        },
        {
          code: "SS:CV:12:4.2",
          text: "Investigate how knowledgeable and engaged citizens have acted to preserve and extend their liberties, e.g., writing letters to the editor or participating in town meetings.",
          claimIds: ["civics.nh-town-meeting", "civics.show-up-every-level", "civics.track-a-bill"],
          coverage: "partial",
          note: "Partial: acting to preserve and extend liberty is taught as practice — participating in town meetings (the standard's own New Hampshire example), showing up at every level, and tracking a live bill. The historical 'investigate how citizens have acted' research task is set up rather than run as a graded assignment.",
        },
      ],
    },

    // ── NH Social Studies Framework (2006) — Grades 9-12 US / NH History ──
    {
      id: "nh-us-history",
      subject: "Social Studies",
      name: "K-12 Social Studies New Hampshire Curriculum Framework — Grades 9-12 US / NH History (SS:HI)",
      publisher: NH_SS_PUBLISHER,
      version: `${NH_SS_VERSION_BASE} · Grades 9-12 US / NH History (SS:HI)`,
      fetchedOn: "2026-07-19",
      sourceUrl: NH_SS,
      adoption:
        "New Hampshire's Grades 9-12 US / NH History strand (SS:HI) is theme-based — the framework itself directs an effective study to 'focus on broad themes, important concepts, major issues and significant movements, rather than a lengthy and fragmented list of people, places, events and other facts.' The catalog's labor, migration, civil-rights, industrial, and trade history exercises several of its indicators on specific worked cases; each is claimed partially with the reach stated. Transcribed verbatim from the 2006 NH DOE Framework.",
      standards: [
        {
          code: "SS:HI:12:1.1",
          text: "Account for the rise and fall of political parties and movements and their impact, e.g., the Whig Party or the Progressive Movement.",
          claimIds: ["history.gilded-age-labor", "history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: one of the standard's two named examples — the Progressive-era reform movement — and the organized labor movement that ran alongside it are taught in depth for their impact (the Knights, the AFL, the drive that became the New Deal order). Political parties as such are not traced.",
        },
        {
          code: "SS:HI:12:1.3",
          text: "Analyze the roots and application of the federal system of government by examining key documents and events, e.g., the Articles of Confederation or the New Deal.",
          claimIds: ["civics.articles-to-constitution", "history.wagner-act", "civics.federalism-why-split-power"],
          coverage: "partial",
          note: "Partial: both of the standard's named examples are taught — why the Articles of Confederation failed and produced the 1787 Constitution, and one signature New Deal expansion of federal power, the Wagner Act — alongside federalism and why power is divided. A full analysis of the federal system's development is not the course's arc.",
        },
        {
          code: "SS:HI:12:3.2",
          text: "Analyze how the arts and science often reflect and/or influence major ideas, values and conflicts of particular time periods, e.g., the impact of the Enlightenment on the founding of our nation or the Harlem Renaissance.",
          claimIds: ["history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "Partial: one of the standard's two named examples — the Harlem Renaissance — is its own lesson, tied to the Black press and the Great Migration that made it possible. The Enlightenment's influence on the founding is not the worked case.",
        },
        {
          code: "SS:HI:12:4.2",
          text: "Evaluate the impact of major developments and changes in American economic productivity, e.g., the factory system or the emergence of a service-based economy.",
          claimIds: ["history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: the factory system — the standard's first named example — and its human impact are taught through Gilded Age industrialization and the labor movement it provoked. The shift to a service-based economy is not taught.",
        },
        {
          code: "SS:HI:12:4.4",
          text: "Examine how economic interactions have occurred on an increasingly global scale, e.g., mercantilism or North American Free Trade Agreement (NAFTA).",
          claimIds: ["history.nafta-usmca-labor", "bvc.value-chain-earnings", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: both of the standard's named examples are reached — NAFTA (through NAFTA→USMCA and its labor-side Rapid Response Mechanism) in depth, and mercantilism through the colonial commodity systems — plus the modern global value chains that show where goods grow and who earns from them.",
        },
        {
          code: "SS:HI:12:4.5",
          text: "Explain how the economy over time has shaped the distribution of wealth, e.g., the development of the middle class or the recent outsourcing of United States’ jobs.",
          claimIds: ["history.nafta-usmca-labor", "bvc.commodity-trap", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: one of the standard's examples — the outsourcing of U.S. jobs — is taught through NAFTA→USMCA, and how the economy distributes wealth is taught through commodity value chains (the smile curve, the commodity trap that keeps producers poor). The development of the American middle class is not the worked case.",
        },
        {
          code: "SS:HI:12:5.5",
          text: "Analyze how religious ideas of morality have impacted social change, e.g., the Abolitionist Movement or the debate over legalized abortion.",
          claimIds: ["bvc.prohibition", "bvc.plantation-economy-resistance"],
          coverage: "partial",
          note: "Partial: religious-moral reform driving social change is taught through the temperance movement behind Prohibition (a church-led moral crusade) and through abolition and the resistance to plantation slavery — one of the standard's two named examples. The debate over legalized abortion is not taught.",
        },
      ],
    },

    // ── NH Social Studies Framework (2006) — Grades 9-12 World History ──
    {
      id: "nh-world-history",
      subject: "Social Studies",
      name: "K-12 Social Studies New Hampshire Curriculum Framework — Grades 9-12 World History (SS:WH)",
      publisher: NH_SS_PUBLISHER,
      version: `${NH_SS_VERSION_BASE} · Grades 9-12 World History (SS:WH)`,
      fetchedOn: "2026-07-19",
      sourceUrl: NH_SS,
      adoption:
        "New Hampshire's Grades 9-12 World History strand (SS:WH), like the US/NH History strand, is theme-based rather than a chronology. The catalog's commodity, colonial, imperial, labor, and Cold-War history exercises several of its indicators on specific worked cases; each is claimed partially. Transcribed verbatim from the 2006 NH DOE Framework.",
      standards: [
        {
          code: "SS:WH:12:1.4",
          text: "Analyze the impact on political institutions of mass movements, e.g., the French Revolution, Taiping Rebellion, or anti-apartheid protest in South Africa.",
          claimIds: ["bvc.haitian-revolution", "history.solidarnosc-cold-war", "history.poland-1989-democratization"],
          coverage: "partial",
          note: "Partial: mass movements reshaping political institutions are taught through two deep cases — the Haitian Revolution (an enslaved people overturning a colonial regime) and Poland's Solidarność from the 1970s strikes to the 1989 negotiated exit. The standard's three named examples are different movements.",
        },
        {
          code: "SS:WH:12:2.1",
          text: "Describe how traders and merchants have been instrumental in spreading ideas and beliefs to new areas, e.g., Arab traders in Africa, Europeans to Australia and Micronesia, or Western business representatives in East Asia.",
          claimIds: ["bvc.tea-trade-networks", "bvc.agricultural-hearths", "bvc.wine-power-sacred"],
          coverage: "partial",
          note: "Partial: how traders spread goods, crops, and beliefs is taught through the commodity trade networks — the Tea Horse Road and Maritime Silk Road, the agricultural hearths and crop exchange, and wine as an object of power and the sacred. The standard's specific regional examples are not each covered.",
        },
        {
          code: "SS:WH:12:2.3",
          text: "Assess the impact of migrations of peoples on the receiving societies, e.g., Chinese to Southeast Asia, Europeans to Latin America, or formerly colonized peoples to Europe.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.mesoamerica-colonization"],
          coverage: "partial",
          note: "Partial: one of the standard's three named examples — Europeans to Latin America — is taught in depth through the conquest, the Columbian Exchange, and the colonization of Mesoamerica and its impact on the receiving (and conquered) societies. The other migrations are not covered.",
        },
        {
          code: "SS:WH:12:4.1",
          text: "Analyze various systems of distributing wealth, e.g., feudalism, free market economies, or the welfare state.",
          claimIds: ["bvc.traditional-vs-market-economies", "bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: two systems of distributing wealth are contrasted directly and at length — traditional (reciprocity) economies and free-market economies — and how a market value chain actually distributes wealth is taught through the smile curve and the commodity trap. Feudalism and the welfare state are not taught.",
        },
        {
          code: "SS:WH:12:4.2",
          text: "Analyze the impact of the Industrial Revolution around the world, e.g., the emergence of the factory system or the search for markets in Asia and Africa.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.opium-wars", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: both of the standard's named examples are taught — the search for markets in Asia and Africa through European imperialism and the Opium Wars, and the factory system through Gilded Age industrialization and its labor movement. A general treatment of the Industrial Revolution is not the arc.",
        },
        {
          code: "SS:WH:12:4.3",
          text: "Analyze the development and impact of various labor systems, e.g., slavery, the medieval guilds, or wage labor.",
          claimIds: ["bvc.plantation-economy-resistance", "bvc.middle-passage-primary-sources", "history.gilded-age-labor"],
          coverage: "partial",
          note: "Partial: two of the standard's three named labor systems are taught in depth — plantation slavery (through the Middle Passage's primary sources and the resistance to it) and wage labor (through the Gilded Age union movement). The medieval guilds are not taught.",
        },
      ],
    },

    // ── NH Social Studies Framework (2006) — Grades 9-12 Economics ──
    {
      id: "nh-economics",
      subject: "Social Studies",
      name: "K-12 Social Studies New Hampshire Curriculum Framework — Grades 9-12 Economics (SS:EC)",
      publisher: NH_SS_PUBLISHER,
      version: `${NH_SS_VERSION_BASE} · Grades 9-12 Economics (SS:EC)`,
      fetchedOn: "2026-07-19",
      sourceUrl: NH_SS,
      adoption:
        "New Hampshire's Grades 9-12 Economics strand (SS:EC) runs from basic concepts through international trade and personal finance. This catalog does economics only where its commodity history touches it — price behavior in a real market, and national trade policy in the international economy — so we claim exactly two indicators, partially, and reject the market-mechanics, macroeconomic, and personal-finance standards (see notClaimed). Transcribed verbatim from the 2006 NH DOE Framework.",
      standards: [
        {
          code: "SS:EC:12:2.3",
          text: "Interpret demand and supply schedules/graphs including the influences on price elasticity, e.g., the impact of downloading music from the internet.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: price elasticity is taught through a worked commodity case — a Brazilian frost moving world coffee prices, and why inelastic demand absorbs the spike. The formal demand/supply schedules and graphs the standard names are not the method.",
        },
        {
          code: "SS:EC:12:5.3",
          text: "Examine how various national economic policies have led to changes in the international economy, e.g., mercantilism or privatization.",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: national economic policy reshaping the international economy is taught through worked cases — the U.S. sugar program's quotas, price supports, and tariffs, the NAFTA→USMCA trade agreement, and the mercantilism of the colonial commodity systems (one of the standard's named examples). Privatization is not taught.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no New Hampshire College and Career Ready (Common Core) mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "New Hampshire adopted the NGSS in November 2016 as its science standards, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "New Hampshire's own state structure is taught more fully than any one 2006 indicator captures.",
      body: "New Hampshire Civics teaches the Constitution of 1784 and 'Live Free or Die,' the 400-member House of Representatives (roughly one representative per 3,300 residents, legislators paid $100 a year — a citizen legislature), the elected five-member Executive Council that shares executive power with a 2-year Governor who has no Lieutenant Governor, the appointed-to-70 judiciary confirmed by that Council, the first-in-the-nation presidential primary, the absence of any statewide citizen initiative, and the town meeting — all from New Hampshire's own sources. SS:CV:12:2.1 (the New Hampshire Constitution), SS:CV:12:2.3 (the New Hampshire judiciary), and SS:CV:12:1.1 (structures at various levels) host most of it, but the 2006 Civics indicators are deliberately example-based concept statements, not a New Hampshire-government checklist, so the Executive Council, the 400-member House, and the first-in-the-nation primary have no code of their own.",
    },
    {
      heading: "The Civics indicators on world affairs and foreign policy.",
      body: "The entire third Civics standard — SS:CV:12:3.1 (the United States' response to environmental, economic, and technological issues in world affairs), SS:CV:12:3.2 (the relationship between domestic and foreign policy), and SS:CV:12:3.3 (the impact of the United States' contributions to democratic ideals on world affairs) — is about the United States in the world. The catalog's civics is domestic structure and participation, so we do not claim these.",
    },
    {
      heading: "The Geography strand — checked, thin overlap, not claimed.",
      body: "The Grades 9-12 Geography strand (SS:GE:12) is human-environment and spatial geography. The catalog's growing-belts and resource-map content is geographic, but its overlap with the Geography indicators is adjacency-level at best, so we do not stretch it into a claim; where that content maps squarely — how trade and commodity distribution shape economies — it is claimed under the World History and Economics strands instead.",
    },
    {
      heading: "The US/NH History, World History, and Economics indicators we checked and rejected.",
      body: "Across the three history/economics strands, the indicators the courses do not genuinely teach are not claimed: in US/NH History, SS:HI:12:1.2 and 1.4 (religion in political life; sectionalism), all of SS:HI:12:2 (foreign policy and international relations), SS:HI:12:3.1/3.3/3.4 (intellectual movements, group influences on the arts, the spread of American culture), SS:HI:12:4.1/4.3 (westward movement; technology simplifying/complicating work), and SS:HI:12:5.1-5.4 (unity vs. pluralism, gender roles, attitudes toward diversity, social class); in World History, SS:WH:12:1.1-1.3/1.5, all of SS:WH:12:2.2/2.4 and 3, SS:WH:12:4.4/4.5, and all of SS:WH:12:5; and in Economics, the market-mechanics (SS:EC:12:1, 2.1/2.2/2.4/2.5), business-cycle (SS:EC:12:3), monetary/fiscal (SS:EC:12:4), comparative-advantage and currency (SS:EC:12:5.1/5.2), and personal-finance (SS:EC:12:6) standards. Where the catalog's globalization content could touch two near-duplicate indicators, it is claimed once under the closest fit rather than padded.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "New Hampshire's closest frameworks for these (its digital-literacy/computer-science and world-languages standards) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no New Hampshire claims this pass.",
    },
  ],
};
