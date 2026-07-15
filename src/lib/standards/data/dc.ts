// ─────────────────────────────────────────────────────────────────────────────
// WASHINGTON, D.C. — codes → course claims. Read the rule in ../index.ts before editing.
//
// D.C. is the demonstration of SHARED-FRAMEWORK ADOPTION: it has no homegrown ELA or science
// standards — it adopted Common Core (July 2010) and NGSS (December 2013), both stated on
// OSSE's own service pages. Those two frameworks are mapped ONCE in ../shared/ and adopted
// here verbatim; only D.C.'s OWN social-studies standards (June 2023) are mapped in this file.
// A future state that adopted the same frameworks under local code numbering would pass
// `aliases` instead of re-mapping anything.
//
// This mapping currently covers the Commodity Map curriculum only; the wider-catalog pass done
// for Indiana has not been repeated against D.C.'s frameworks yet (see notClaimed).
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "DC",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "OSSE states that “In July 2010, the District of Columbia adopted the Common Core State Standards” for reading and mathematics. The literacy-in-history/social-studies (RH) and writing-in-history (WHST) strands are the ones this curriculum touches. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "OSSE states that “In Dec. 2013, the Next Generation Science Standards were adopted by DC State Board of Education as the new K-12 Science Standards for the District of Columbia Schools.” This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    {
      id: "dc-ss",
      subject: "Social Studies",
      name: "Washington, DC K-12 Social Studies Standards",
      publisher: "Office of the State Superintendent of Education (OSSE)",
      version: "June 2023",
      fetchedOn: "2026-07-13",
      sourceUrl:
        "https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/Adopted%20Standards.pdf",
      adoption:
        "Common Core never covered social studies, so DC wrote its own. These are the high-school course codes: WH1 (World History I), WH2 (World History II), US2 (US History II).",
      standards: [
        {
          code: "WH2.15",
          text: "Compare different forms of European colonization and enslavement, such as in plantation-based societies and economies across the Americas and the Caribbean, and resistance to such enslavement.",
          claimIds: ["bvc.plantation-economy-resistance"],
          coverage: "full",
          note: "Both halves of the standard are covered: the plantation economy itself, and resistance to it (Maroon communities, the Haitian Revolution, revolt and abolition).",
        },
        {
          code: "WH2.40",
          text: "Analyze the social, political and economic factors that contributed to the Haitian Revolution, and evaluate the impact of the Haitian revolution on Haiti and global events.",
          claimIds: ["bvc.haitian-revolution"],
          coverage: "full",
          note: "Including the standard's second half, which most curricula skip: the 1825 French indemnity, and the line from it to Haiti's poverty today.",
        },
        {
          code: "WH2.53",
          text: "Analyze the Opium Wars' impact on China's political, economic and social systems, and evaluate the global consequences of the Opium Wars.",
          claimIds: ["bvc.opium-wars"],
          coverage: "full",
        },
        {
          code: "WH2.37",
          text: "Evaluate the impact of the silver trade, spice trade, cotton trade and sugar industry on different societies and individuals during the 16th, 17th and 18th centuries.",
          claimIds: ["bvc.sugar-industry-impact"],
          coverage: "partial",
          note: "Partial: of the four trades the standard names, this curriculum covers the SUGAR INDUSTRY — thoroughly. It does not teach the silver, spice or cotton trades.",
        },
        {
          code: "WH2.13",
          text: "Analyze government structures, technological innovations and geographical features of empires and city states across the Americas to evaluate the drastic impact of European colonization on Indigenous societies, including the Aztec and Incan Empires.",
          claimIds: ["bvc.mesoamerica-colonization"],
          coverage: "partial",
          note: "Partial: Mesoamerica (Maya and Aztec) is covered in real depth, through the plants those societies governed. The Incan Empire is not covered, and the standard names it explicitly.",
        },
        {
          code: "WH2.18",
          text: "Evaluate primary source accounts of the Middle Passage to analyze the dehumanizing experience forced upon enslaved people and the ways in which individuals worked to maintain humanity and dignity in the face of mass atrocity.",
          claimIds: ["bvc.middle-passage-primary-sources"],
          coverage: "partial",
          note: "Partial, and the distinction is worth being exact about: the episode teaches the Middle Passage, and it does evaluate primary-source accounts by formerly enslaved writers (Equiano, Prince). But that primary-source work centres plantation labour rather than the crossing itself. The Middle Passage is taught from secondary sources.",
        },
        {
          code: "WH1.15",
          text: "Analyze the role of agricultural, technological and cultural innovations in the emergence and maintenance of early complex societies between 10,000 BCE and 500 BCE.",
          claimIds: ["bvc.beer-first-cities", "bvc.wine-power-sacred"],
          coverage: "partial",
          note: "Partial: fermentation is used as the way into early complex societies, and it falls inside the standard's window. It is one thread through that period, not a survey of it.",
        },
        {
          code: "US2.79",
          text: "Evaluate the effort of American foreign policy to meet humanitarian goals, further economic interests, and increase domestic security, including the War on Drugs and the invasion of Afghanistan during the Global War on Terror.",
          claimIds: ["bvc.war-on-drugs-foreign-policy"],
          coverage: "partial",
          note: "Partial: the War on Drugs half is covered in depth, including its foreign-policy arm. The invasion of Afghanistan and the Global War on Terror are not taught — the curriculum reaches Afghanistan through opium geography, not through the war.",
        },
      ],
    },
  ],
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This curriculum does no mathematics instruction, so it meets no Common Core mathematics standard.",
    },
    {
      heading: "Science — almost nothing.",
      body: "There is no laboratory work, no investigation and no scientific modelling here. We claim a single NGSS performance expectation, partially, and we explain exactly why on the entry itself. It is not a science course and we will not sell it as one.",
    },
    {
      heading: "Prohibition and mass incarceration.",
      body: "The curriculum teaches both. D.C.'s 2023 social studies standards contain no standard on either (we searched the full document), so there is nothing for us to cite. The gap is in the standards, not the lessons.",
    },
    {
      heading: "D.C.'s economics and geography strands.",
      body: "In the 2023 document these are un-numbered “statements of practice”, not coded standards. There is no code to cite, so we cite none — even though the economics content lines up well.",
    },
    {
      heading: "The wider catalog — not yet mapped for D.C.",
      body: "The civics, U.S. history, health, and PE mapping done for Indiana has not been repeated against D.C.'s frameworks yet. D.C. currently carries the Commodity Map alignment only; the catalog-wide pass is queued.",
    },
  ],
};
