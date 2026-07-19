// ─────────────────────────────────────────────────────────────────────────────
// ALASKA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ak` was written FROM Alaska's own official sources (akleg.gov,
// elections.alaska.gov, courts.alaska.gov, and the Alaska Constitution of 1959), so Alaska's
// civics flagship gets a genuine home: the Alaska Content Standards for Government and Citizenship
// carry a whole standard on "the character of government of the state" (Standard C), which names
// the Constitution of Alaska, the state's local governments, and the land/resource-ownership
// obligations that underpin the Permanent Fund.
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from Alaska DEED's own record (Alaska is
// BESPOKE-heavy — it is a notable NON-adopter of the Common Core):
//   · Government/Citizenship — BESPOKE. The Alaska Content and Performance Standards for Alaska
//     Students print Government and Citizenship as seven lettered content standards (A-G). Each is a
//     single "A student should…" statement followed by numbered performance items; we cite the
//     STATEMENT verbatim as the standard's text, and code them "G&C.A" … "G&C.G" ("G&C" is our
//     transparent abbreviation of the printed section title "GOVERNMENT AND CITIZENSHIP"; the letter
//     is the document's own). Standards F and G are the economics standards Alaska folds into this
//     same content area.
//   · English/Language Arts — BESPOKE. Alaska did NOT adopt the Common Core; the Alaska
//     English/Language Arts and Mathematics Standards (June 2012) are Alaska's own, so this is an
//     OWN framework citing Alaska's document, NOT an adoption of the shared Common Core file.
//     (Verification detail worth recording: Alaska's grades 11-12 "Reading Standards for Literacy in
//     History/Social Studies" strand reproduces the Common Core RH text word-for-word, but its
//     general "Reading Standards for Informational Text" strand was EDITED — item 6 reads "Discern an
//     author's point of view… aesthetic impact" where the Common Core reads "Determine… beauty" — so
//     Alaska adapted rather than adopted, and we cite Alaska's own wording throughout.) Alaska prints
//     these strands as numbered items (1-10) under each grades-11-12 strand heading with no printed
//     alphanumeric code, so we code them "<strand> 11-12.<n>" from the heading + item number.
//   · Science — ADOPTED (verbatim). Alaska's "K-12 Science Standards for Alaska" (adopted 2019) are
//     built on the NGSS; the high-school "Human Sustainability" performance expectation HS-ESS3-1 is
//     reproduced VERBATIM, using the NGSS code AND wording (compared byte-for-byte against the shared
//     NGSS file before adopting), so ../shared/ngss is adopted verbatim. This is not a science course;
//     see the note on the entry itself.
//
// PROVENANCE: Government/Citizenship transcribed VERBATIM from the Alaska DEED "Alaska Content
// Standards" (Content and Performance Standards for Alaska Students) PDF at
// education.alaska.gov/akstandards/standards/ContentStandards.pdf, Government and Citizenship
// section (pages 4-6 of the standards), fetched 2026-07-19. ELA transcribed VERBATIM from the DEED
// "Alaska English/Language Arts Standards, Grades 11-12" by-grade PDF at
// education.alaska.gov/akstandards/ela/resources/elabygrade/ELAStandards_gr11-12.pdf, fetched
// 2026-07-19. Both are public DEED deep links that also serve automated fetches, so no mirror was
// needed. Runs of whitespace inside a statement were collapsed to single spaces (an extraction
// artifact, not text). No instruction-shaped / injection content was found in any Alaska document.
// ─────────────────────────────────────────────────────────────────────────────

import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const AK_GC =
  "https://education.alaska.gov/akstandards/standards/ContentStandards.pdf";
const AK_ELA =
  "https://education.alaska.gov/akstandards/ela/resources/elabygrade/ELAStandards_gr11-12.pdf";
const AK_DEED = "Alaska Department of Education & Early Development (DEED)";

export const JURISDICTION: JurisdictionFile = {
  state: "AK",
  adoptions: [
    {
      framework: NGSS,
      adoption:
        "Alaska is a notable non-adopter of the Common Core, but for science it adopted the K-12 Science Standards for Alaska (2019), built on the Next Generation Science Standards. The high-school “Human Sustainability” performance expectation HS-ESS3-1 is reproduced verbatim in Alaska's document, using the NGSS code and the NGSS wording (compared byte-for-byte before adoption), so the shared NGSS file is adopted verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── Alaska Content Standards — Government and Citizenship (A-G) ──
    {
      id: "ak-civics",
      subject: "Social Studies",
      name: "Alaska Content Standards — Government and Citizenship (A-G)",
      publisher: `${AK_DEED} / Alaska Board of Education & Early Development`,
      version: "Alaska Content and Performance Standards for Alaska Students · Government and Citizenship",
      fetchedOn: "2026-07-19",
      sourceUrl: AK_GC,
      adoption:
        "Alaska's Government and Citizenship content standards are the anchor for the Alaska Civics flagship. Standard C — “A student should understand the character of government of the state” — names the Constitution of Alaska, the state's local governments, and the land/resource-ownership obligations that underpin the Permanent Fund, so — unlike the purely-federal states — the Alaska flagship's own-government lessons (boroughs and the Unorganized Borough, the strong governor, the Permanent Fund, merit-selection courts, the top-four/ranked-choice election system) have a genuine home. Standard B carries the general constitutional civics ladder, Standard E the participation claims, and Standard F Alaska's own oil-and-Permanent-Fund economics. Transcribed verbatim from the Alaska Content Standards (see the file header for the provenance note).",
      standards: [
        // — The flagship's home: the character of Alaska's own government —
        {
          code: "G&C.C",
          text: "A student should understand the character of government of the state.",
          claimIds: [
            "civics.ak-constitution-boroughs",
            "civics.ak-executive-legislature",
            "civics.ak-top-four-rcv",
            "civics.ak-permanent-fund",
            "civics.ak-courts",
            "civics.ak-direct-democracy-involved",
            "civics.local-government-layers",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "This is the flagship's primary home: Alaska's own government is taught in depth — the Constitution of 1959, the boroughs and the Unorganized Borough, the strong governor and small elected executive, the merit-selection judiciary, the top-four/ranked-choice election system, and the Permanent Fund (the standard's “land and resource ownership” obligations). Partial because this standard also requires Alaska Native communities, the Alaska Native Claims Settlement Act, and the roles of tribal governments (its items 4, 5, and 8), which the course does not teach (see notClaimed).",
        },
        // — The general constitutional civics ladder —
        {
          code: "G&C.B",
          text: "A student should understand the constitutional foundations of the American political system and the democratic ideals of this nation.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.bill-of-rights-origin",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.three-branches-federal",
          ],
          coverage: "full",
          note: "The constitutional foundations the standard names are taught comprehensively: the ideals of the Declaration and the Constitution, the U.S. Constitution article by article, the Bill of Rights, separation of powers and the three branches, and how power is shared at the federal, state, and local levels (federalism).",
        },
        {
          code: "G&C.A",
          text: "A student should know and understand how societies define authority, rights, and responsibilities through a governmental process.",
          claimIds: ["civics.three-branches-federal", "civics.preamble-purposes", "civics.separation-checks-balances"],
          coverage: "partial",
          note: "The necessity and purpose of government and the fundamental ideas of authority, power, and rights are taught (the purpose of government and the Preamble worked clause by clause). Partial because the standard's comparative task — how different societies have governed themselves over time and in different places — is not the course's focus.",
        },
        // — Participation and civic responsibility —
        {
          code: "G&C.E",
          text: "A student should have the knowledge and skills necessary to participate effectively as an informed and responsible citizen.",
          claimIds: [
            "civics.ak-direct-democracy-involved",
            "civics.citizenship-responsibilities",
            "civics.campaign-help",
            "civics.voter-registration",
            "civics.show-up-every-level",
          ],
          coverage: "full",
          note: "Participating effectively as an informed citizen is taught end to end: the characteristics and responsibilities of citizenship, voting (under Alaska's own top-four/ranked-choice system), building consensus and joining campaigns, and showing up to be heard at every level.",
        },
        // — Economics: Alaska's oil-and-Permanent-Fund economy —
        {
          code: "G&C.F",
          text: "A student should understand the economies of the United States and the state and their relationships to the global economy.",
          claimIds: ["civics.ak-permanent-fund", "bvc.traditional-vs-market-economies", "bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "How government and the economy interrelate through taxation, and the features of Alaska's own economy the standard names — natural resources, government ownership and management of resources, and the Alaska Permanent Fund Corporation — are taught in the flagship's Permanent Fund lesson, and market-economics concepts (economic systems, supply and demand, the role of price) through the commodity course. Partial because the broader survey the standard requires (the Federal Reserve, GDP and inflation, the stock market, international trade) is not taught.",
        },
      ],
    },

    // ── Alaska English/Language Arts Standards (June 2012), Grades 11-12 ──
    {
      id: "ak-ela",
      subject: "English/Language Arts",
      name: "Alaska English/Language Arts Standards — Grades 11-12",
      publisher: `${AK_DEED} / Alaska Board of Education & Early Development`,
      version: "Alaska English/Language Arts and Mathematics Standards, June 2012 · Grades 11-12",
      fetchedOn: "2026-07-19",
      sourceUrl: AK_ELA,
      adoption:
        "Alaska is a non-adopter of the Common Core; the Alaska English/Language Arts and Mathematics Standards (June 2012) are Alaska's own. We map the grades 11-12 reading-in-history/social-studies, informational-reading, and research-writing standards this catalog genuinely reaches, transcribed verbatim from Alaska's by-grade document. (Alaska's history/social-studies reading strand happens to reproduce the Common Core RH wording, while its general informational-reading strand was edited — “Discern… aesthetic impact” for “Determine… beauty” — so we cite Alaska's own wording throughout rather than aliasing the shared Common Core file.) We claim no mathematics standards.",
      standards: [
        {
          code: "Literacy in History/Social Studies 11-12.6",
          text: "Evaluate authors’ differing points of view on the same historical event or issue by assessing the authors’ claims, reasoning, and evidence.",
          claimIds: ["bvc.whose-voice-differing-accounts"],
          coverage: "full",
          note: "The strongest single alignment on this page. Ep 4 puts a planter's euphemism and passive voice directly against two first-person accounts by formerly enslaved writers, and teaches the student to assess each author's claims and evidence.",
        },
        {
          code: "Literacy in History/Social Studies 11-12.8",
          text: "Evaluate an author’s premises, claims, and evidence by corroborating or challenging them with other information.",
          claimIds: ["bvc.evaluate-claims-fallacies"],
          coverage: "full",
        },
        {
          code: "Literacy in History/Social Studies 11-12.9",
          text: "Integrate information from diverse sources, both primary and secondary, into a coherent understanding of an idea or event, noting discrepancies among sources.",
          claimIds: ["bvc.nearest-green-oral-history", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "“Noting discrepancies among sources” is the whole point of the Nathan Green lesson: the documentary record and the oral record disagree, and the episode teaches why oral history is a legitimate scholarly method for resolving that.",
        },
        {
          code: "Informational Text 11-12.6",
          text: "Discern an author’s point of view or purpose in a text in which the rhetoric is particularly effective, analyzing how style and content contribute to the power, persuasiveness, or aesthetic impact of the text.",
          claimIds: ["bvc.rhetoric-power-persuasion"],
          coverage: "full",
          note: "Alaska's own wording (“Discern… aesthetic impact,” where the Common Core reads “Determine… beauty”). Reading a persuasive text for how its rhetoric works is the method run on ads, labels, and campaign language throughout the catalog.",
        },
        {
          code: "Writing 11-12.7",
          text: "Conduct short as well as more sustained research projects to answer a question (including a self-generated question) or solve a problem; narrow or broaden the inquiry when appropriate; synthesize multiple sources on the subject, demonstrating understanding of the subject under investigation.",
          claimIds: ["bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: only the Coffee episode currently ships a graded research assignment. Where it runs, it meets this standard squarely.",
        },
        {
          code: "Writing 11-12.8",
          text: "Gather relevant information from multiple authoritative print and digital sources, using advanced searches effectively; assess the strengths and limitations of each source in terms of the task, purpose, and audience; integrate information into the text selectively to maintain the flow of ideas, avoiding plagiarism and overreliance on any one source and following a standard format for citation.",
          claimIds: ["bvc.coffee-project-sources-ethics"],
          coverage: "partial",
          note: "Partial, same reason as Writing 11-12.7.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Alaska (2012) mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Alaska's 2019 K-12 Science Standards reproduce the NGSS HS-ESS3-1 performance expectation verbatim, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Alaska Native communities, ANCSA, and tribal governments (Government and Citizenship, Standard C).",
      body: "Alaska's Standard C requires students to understand the historical and current roles of Alaska Native communities, the Alaska Native Claims Settlement Act and its impact on the state, and the roles of and relationships among the federal, tribal, and state governments (its items 4, 5, and 8). Alaska Civics teaches Alaska's state and local structure — boroughs, the Unorganized Borough, the strong governor, the Permanent Fund, the courts, and the election system — but does not teach Alaska Native governance or ANCSA, so Standard C is claimed as partial. The gap is in the course, not the standard.",
    },
    {
      heading: "Alaska's own state structure is taught more fully than Standard C captures.",
      body: "Alaska Civics teaches the Constitution of 1959, boroughs instead of counties and the vast Unorganized Borough where the state provides county-type services, the strong governor with only two elected statewide officials, the 40/20 Legislature with no term limits, the line-item veto with a two-thirds/three-quarters override, the merit-selection judiciary, the citizen initiative/referendum/recall, the 2020 top-four/ranked-choice election system, and the Permanent Fund with no state income or sales tax — all from Alaska's own sources. Standard C hosts most of it, but this lettered content standard is a single broad statement, not an Alaska-government checklist, so the top-four/ranked-choice system, the Permanent Fund Dividend, and the boroughs have no code of their own.",
    },
    {
      heading: "The international-affairs and economic-decision-making standards we checked and rejected.",
      body: "Government and Citizenship Standard D (the role of the United States in international affairs — foreign policy, U.S. influence on other nations, international organizations) and Standard G (the impact of economic choices and effective participation in local, state, national, and global economies — the economic-decision-making pedagogy of scarcity, costs and benefits, and informed choices) are not genuinely taught, so we do not claim them.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Alaska's closest frameworks for these (its digital-literacy/technology and world-languages standards) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Alaska claims this pass.",
    },
  ],
};
