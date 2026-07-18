// ─────────────────────────────────────────────────────────────────────────────
// WASHINGTON — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-wa` was written FROM Washington's own official sources (leg.wa.gov, sos.wa.gov,
// courts.wa.gov, the 1889 Constitution). Unlike California or Arkansas — whose Grade 12 civics
// standards are overwhelmingly FEDERAL — Washington's high-school Civics standard C2.11-12.2
// EXPLICITLY names "Washington state" constitutions, so the flagship's Washington-structure lessons
// (the 1889 constitution and direct democracy, the nine-official plural executive, the 49-district
// Legislature, the nonpartisan elected courts) have a genuine state code to cite. That is the
// Washington 1:1 anchor. The flagship's finer specifics (top-two primary, all-mail voting, the
// contested no-income-tax question) have no dedicated election/tax standard — see notClaimed.
//
// THE INHERIT-VS-BESPOKE CALL (the point of this state), made per framework from OSPI's own
// documents rather than assumed:
//   · ELA — INHERITED (verbatim). Washington formally adopted the Common Core State Standards for
//     English Language Arts (and mathematics) in July 2011. Washington distributes them as the
//     "Washington State K-12 Learning Standards for English Language Arts" but retains the Common
//     Core codes and text (they are the CCSS document itself, via CCSSO), so the RH/WHST
//     literacy-in-history strand this catalog touches is adopted verbatim — no aliases needed.
//     AUTHORITATIVE-VALUES FLAG: OSPI is running a Learning Standards Review with a draft "WA ELA
//     2026" in progress; as of this writing the 2011 Common Core adoption remains the operative
//     standard. Confirm current status at ospi.k12.wa.us before filing.
//   · Science — INHERITED (verbatim). On October 1, 2013, Washington adopted the Next Generation
//     Science Standards as the Washington State 2013 K-12 Science Learning Standards (WSSLS) —
//     Washington was the eighth state to adopt. The WSSLS ARE the NGSS, used with the NGSS codes
//     verbatim (including HS-ESS3-1). Verbatim adoption of ../shared/ngss is honest. This is not a
//     science course; see the note on the entry itself.
//   · Social studies — BESPOKE. Common Core never covered it. Washington's K-12 Social Studies
//     Learning Standards (adopted September 2019, incorporating the C3 Framework) are Washington's
//     own. Codes are <Discipline><Standard>.<GradeBand>.<Number>, e.g. C2.11-12.2 (Civics standard
//     2, grades 11-12, indicator 2). The high-school charts split each standard into a 9/10 anchor
//     and an 11/12 anchor; we cite the anchor whose grade band the content genuinely reaches.
//
// Provenance: OSPI served the standards PDF directly (no Wayback needed); the file is a
// subset-font PDF that we extracted locally and transcribed verbatim — fetched 2026-07-18:
//   · Washington State K-12 Learning Standards for Social Studies (adopted September 2019) —
//     ospi.k12.wa.us/sites/default/files/2023-08/ospi_socstudies_standards_2019.pdf
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "WA",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "Washington formally adopted the Common Core State Standards for English Language Arts (and mathematics) in July 2011 (State Superintendent Randy Dorn). Washington distributes them as the Washington State K-12 Learning Standards for English Language Arts but retains the Common Core codes and text, so the literacy-in-history/social-studies (RH) and writing-in-history (WHST) strands this catalog touches are adopted verbatim. Note: OSPI is running a Learning Standards Review with a draft “WA ELA 2026” in progress; as of this writing the 2011 Common Core adoption remains the operative standard — confirm current status at ospi.k12.wa.us. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "On October 1, 2013, Washington adopted the Next Generation Science Standards as the Washington State 2013 K-12 Science Learning Standards (WSSLS), the eighth state in the country to do so. The WSSLS are the NGSS, used with the NGSS codes verbatim (including HS-ESS3-1). This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── Civics (Grades 9-12) — the Washington Civics flagship's home ───────
    {
      id: "wa-ss-civics",
      subject: "Social Studies",
      name: "Washington State K-12 Learning Standards for Social Studies — Civics, Grades 9-12",
      publisher: "Office of Superintendent of Public Instruction (OSPI)",
      version: "Adopted September 2019",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://ospi.k12.wa.us/sites/default/files/2023-08/ospi_socstudies_standards_2019.pdf",
      adoption:
        "Washington's high-school Civics standards, coded <Discipline><Standard>.<GradeBand>.<Number> (C2.11-12.2). C2.11-12.2 is the Washington 1:1 anchor: it names “Washington state” constitutions explicitly, which is where the Washington Civics flagship lands. Washington also has a statutory civics graduation requirement, and districts must give a civics classroom-based assessment in grades 11 or 12.",
      standards: [
        {
          code: "C2.11-12.2",
          text: "Analyze the origins, functions, and structure of government with reference to the United States, Washington state, and tribal constitutions.",
          claimIds: [
            "civics.wa-constitution-direct-democracy",
            "civics.wa-plural-executive",
            "civics.wa-courts-legislature",
            "civics.wa-bill-process",
          ],
          coverage: "partial",
          note: "The Washington 1:1 flagship anchor. Washington's own origins (the 1889 constitution and its direct democracy), functions, and structure — the nine-official plural executive, the 49-district Legislature, the nonpartisan elected courts, the two lawmaking roads — are taught in depth, and the U.S. structure through the federal civics courses. Partial only because the standard also names tribal constitutions, which the flagship does not teach.",
        },
        {
          code: "C1.11-12.1",
          text: "Analyze and evaluate the ideas and principles contained in the foundational documents of the United States, and explain how they influence the social and political system.",
          claimIds: [
            "civics.preamble-purposes",
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
          ],
          coverage: "full",
          note: "US Constitution 101 works the founding documents article by article — the Preamble's purposes, separation of powers and checks and balances, federalism — exactly the foundational-documents analysis this standard asks for.",
        },
        {
          code: "C2.11-12.4",
          text: "Evaluate the effectiveness of our system of checks and balances in limiting the power of government at the national, state, and local levels.",
          claimIds: ["civics.separation-checks-balances", "civics.wa-courts-legislature"],
          coverage: "partial",
          note: "Partial: checks and balances are taught directly at the national level, and Washington's own limits — the Governor's line-item veto and the two-thirds override — through the flagship. The standard's systematic evaluation of the balance at the state and local levels is not fully worked.",
        },
        {
          code: "C4.11-12.2",
          text: "Analyze and evaluate ways of influencing local, state, and national governments and international organizations to establish or preserve individual rights and/or promote the common good.",
          claimIds: [
            "civics.wa-get-involved",
            "civics.campaign-help",
            "civics.ballot-measures-local-causes",
            "civics.show-up-every-level",
          ],
          coverage: "partial",
          note: "Partial: influencing local, state, and national government is taught as practice — Washington's unusually open initiative and referendum on-ramps, helping a campaign or a ballot measure lawfully, and showing up at every level. The standard's “international organizations” are not a course focus.",
        },
        {
          code: "C2.11-12.1",
          text: "Analyze citizens’ and institutions’ effectiveness in addressing social and political problems at the local, state, tribal, national and/or international level.",
          claimIds: ["civics.wa-local-and-taxes", "civics.wa-get-involved"],
          coverage: "partial",
          note: "Partial: addressing problems at the local and state level is taught through Washington's counties, code cities, and special districts, its contested tax structure, and how a resident takes part. The tribal, national, and international scales, and a formal effectiveness analysis, are not the flagship's focus.",
        },
      ],
    },

    // ── Economics (Grades 9-12) — the Commodity Map ────────────────────────
    {
      id: "wa-ss-econ",
      subject: "Social Studies",
      name: "Washington State K-12 Learning Standards for Social Studies — Economics, Grades 9-12",
      publisher: "Office of Superintendent of Public Instruction (OSPI)",
      version: "Adopted September 2019",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://ospi.k12.wa.us/sites/default/files/2023-08/ospi_socstudies_standards_2019.pdf",
      adoption:
        "Washington's high-school Economics standards. This is the honest home for much of the Commodity Map's specialization, trade-policy, comparative-advantage, and globalization content.",
      standards: [
        {
          code: "E2.9-10.3",
          text: "Analyze how and why countries have specialized in the production of particular goods and services in the past or present.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: where commodities are grown and why (the growing belts) and who captures the value along the chain are the Commodity Map's spine — the “how and why countries specialized” this standard names. A general treatment of specialization is not attempted.",
        },
        {
          code: "E4.11-12.4",
          text: "Analyze the role of comparative advantage in international trade of goods and services.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: which regions produce which commodities and why, and who is paid what along the value chain (the smile curve), is taught in depth. The formal comparative-advantage framework, by name, is not.",
        },
        {
          code: "E4.11-12.5",
          text: "Explain how current globalization trends and policies affect economic growth, labor markets, rights of citizens, the environment, and resource and income distribution in different nations.",
          claimIds: [
            "bvc.commodity-trap",
            "bvc.value-chain-earnings",
            "bvc.colonialism-persists-today",
          ],
          coverage: "partial",
          note: "Partial: how commodity globalization distributes income — why producing nations stay poor while value accrues downstream, and how colonial trade patterns persist — is taught in depth. The standard's labor-market and environmental strands are touched but not systematically surveyed.",
        },
        {
          code: "E3.9-10.1",
          text: "Analyze the costs and benefits of government trade policies from around the world in the past and present.",
          claimIds: ["bvc.sugar-program-trade-barriers", "history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: government's role in trade is taught through two worked cases — the U.S. sugar program's quotas and tariffs, and NAFTA→USMCA's labor rules and their limits. A general treatment is not attempted.",
        },
      ],
    },

    // ── Geography (Grades 9-12) — the Commodity Map ────────────────────────
    {
      id: "wa-ss-geo",
      subject: "Social Studies",
      name: "Washington State K-12 Learning Standards for Social Studies — Geography, Grades 9-12",
      publisher: "Office of Superintendent of Public Instruction (OSPI)",
      version: "Adopted September 2019",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://ospi.k12.wa.us/sites/default/files/2023-08/ospi_socstudies_standards_2019.pdf",
      adoption:
        "Washington's high-school Geography standards — the honest home for the Commodity Map's resource-distribution, climate, and expansion-and-encounter content, and for the Great Migration.",
      standards: [
        {
          code: "G3.11-12.4",
          text: "Evaluate how changes in the environmental and cultural characteristics of a place or region influence spatial patterns of trade and land use.",
          claimIds: [
            "bvc.climate-resources-shape-humans",
            "bvc.growing-belts-resource-maps",
            "bvc.climate-change-forecasts",
          ],
          coverage: "partial",
          note: "Partial: how climate and the availability of resources shape where commodities can grow and how trade is patterned — and the published forecasts of that shift for coffee, cacao, and kava — is taught with the evidence supplied. It is one worked thread through the changes this standard names, not a survey.",
        },
        {
          code: "G3.9-10.1",
          text: "Define how the geography of expansion and encounter have shaped global politics and economics in history.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.imperialism-africa-asia-oceania"],
          coverage: "partial",
          note: "Partial: the geography of conquest and the Columbian exchange, and of imperial expansion into Africa, Asia, and the Americas, is taught through the commodities those systems ran. A general geographic treatment of expansion is not attempted.",
        },
        {
          code: "G3.11-12.5",
          text: "Evaluate how economic globalization and the expanding use of scarce resources contribute to conflict and cooperation within and among countries.",
          claimIds: ["bvc.commodity-trap", "bvc.climate-resources-shape-humans"],
          coverage: "partial",
          note: "Partial: economic globalization and the scramble for scarce resources — the commodity trap, and how resource availability and climate drive human activity — are taught in depth. The standard's full conflict-and-cooperation frame is one thread, not a survey.",
        },
        {
          code: "G1.11-12.3",
          text: "Compare the causes and effects of voluntary and involuntary migration in the United States.",
          claimIds: ["history.migration-streams-arrival"],
          coverage: "partial",
          note: "Partial: one migration is taught in real depth — the Great Migration of African Americans out of the Jim Crow South, its push and pull factors and its effects. The standard's wider comparison across U.S. migrations is not the course's scope.",
        },
      ],
    },

    // ── History (Grades 9-12) — sourcing, perspective, world history ───────
    {
      id: "wa-ss-history",
      subject: "Social Studies",
      name: "Washington State K-12 Learning Standards for Social Studies — History, Grades 9-12",
      publisher: "Office of Superintendent of Public Instruction (OSPI)",
      version: "Adopted September 2019",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://ospi.k12.wa.us/sites/default/files/2023-08/ospi_socstudies_standards_2019.pdf",
      adoption:
        "Washington's high-school History standards. The H3 (multiple perspectives) strand is a strong social-studies home for the catalog's source-evaluation and Whose Voice method, alongside the verbatim Common Core RH literacy strand adopted above.",
      standards: [
        {
          code: "H3.11-12.4",
          text: "Integrate evidence from multiple relevant historical sources and interpretations into a reasoned argument about the past to create claims and counterclaims.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.nearest-green-oral-history"],
          coverage: "full",
          note: "Integrating primary and secondary sources into a reasoned argument, noting where they disagree, is exactly the Whose Voice and Nathan Green method: a planter's account set against formerly enslaved writers', and the documentary record set against the oral record.",
        },
        {
          code: "H3.11-12.2",
          text: "Analyze the ways in which the perspectives of those writing history shaped the history that they produced.",
          claimIds: ["bvc.whose-voice-absence", "bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "Whose voice is present in the record, and whose is absent, is taught directly — how the position of the person writing shapes the account that survives.",
        },
        {
          code: "H2.9-10.1",
          text: "Analyze how individuals and movements have shaped world history (1450-present).",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.plantation-economy-resistance",
            "history.solidarnosc-cold-war",
          ],
          coverage: "partial",
          note: "Partial: movements that shaped the modern world are taught through the commodities they turned on — imperial and colonial systems and the resistance to them (Maroon communities, revolution, abolition), and Solidarność at the Cold War's end. It is a set of deep threads, not a survey of the period.",
        },
        {
          code: "H4.11-12.3",
          text: "Analyze how current events today are rooted in past events.",
          claimIds: ["bvc.colonialism-persists-today", "bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: how the present is rooted in the past is taught where the courses reach it — how colonial trade patterns persist today, and how the War on Drugs' foreign arm grew from earlier policy. It is not a general treatment of contemporary issues.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Common Core mathematics standard Washington adopted.",
    },
    {
      heading: "Science — almost nothing.",
      body: "There is no laboratory work, no investigation and no scientific modelling here. Washington adopted the NGSS verbatim (as the WSSLS), and we claim a single NGSS performance expectation, partially, explaining exactly why on the entry itself. It is not a science course and we will not sell it as one.",
    },
    {
      heading: "Tribal governments and the Since Time Immemorial curriculum.",
      body: "Washington's social studies standards repeatedly reference tribal constitutions, tribal sovereignty, and the Since Time Immemorial curriculum (e.g., C2.11-12.2 names tribal constitutions; the standards footnote tribal connections throughout). The catalog does not teach tribal government, so we claim only the United-States and Washington-state portions of those standards and mark C2.11-12.2 partial for exactly this reason.",
    },
    {
      heading: "The flagship's election and tax specifics have no dedicated Washington code.",
      body: "Washington Civics teaches the all-mail (vote-by-mail) system and the top-two primary — the state's most distinctive civics content — plus the contested no-personal-income-tax tradition (the uniformity clause; the 2021 capital-gains tax upheld in 2023). Washington's high-school Civics standards contain no discrete election-administration or tax-policy standard, so this election content is taught but carries no Washington claim, and the tax content is reached only through the general C2 civics standards. The specifics have no code — the gap is in the standards, not the course.",
    },
    {
      heading: "Prohibition, the War on Drugs as domestic policy, and mass incarceration.",
      body: "The catalog teaches all three. Washington's 2019 social studies standards are analytical and thematic (“current events rooted in past events,” “individuals and movements”) rather than event-naming, so — unlike Washington, D.C. — there is no Washington standard that names Prohibition or mass incarceration to cite. We claim the War on Drugs' foreign-policy arm only through the broad H4.11-12.3, and mark it partial.",
    },
    {
      heading: "The wider catalog — health, PE, AI-literacy, and languages.",
      body: "Washington's relevant frameworks for these (Health and Physical Education; Computer Science; World Languages) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Washington claims this pass.",
    },
  ],
};
