// ─────────────────────────────────────────────────────────────────────────────
// NEBRASKA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ne` was written FROM Nebraska's own official sources
// (nebraskalegislature.gov, sos.nebraska.gov, supremecourt.nebraska.gov), so Nebraska's civics
// flagship gets its 1:1 state-civics course.
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from NDE's own record (Nebraska is BESPOKE-heavy —
// a notable NON-adopter of the Common Core):
//   · Social studies — BESPOKE, and content-bearing (unlike Kansas's skills-only design). The
//     Nebraska Social Studies Standards (2019, approved by the State Board of Education on
//     November 8, 2019) are Nebraska's own. Their High School Civics standards NAME government
//     content, and SS HS.1.1.e ("Analyze the foundation, structures, and functions of state
//     government and its outcomes") explicitly lists "bicameral/unicameral" in its own example set —
//     so the Nebraska Civics flagship's headline (the one-house, officially nonpartisan Unicameral)
//     has a genuine 1:1 home, alongside SS HS.1.1.d (local government) and the SS HS.1.2 civic-
//     participation standards. This is the anchor for the flagship.
//   · ELA — NEBRASKA'S OWN (not Common Core). Nebraska is one of the handful of states that never
//     adopted the Common Core; its Nebraska College and Career Ready Standards for English Language
//     Arts are Nebraska's own. The shared common-core-ela file therefore does NOT apply, and we do
//     not blind-alias it. Nebraska's ELA reading/writing standards were not fetched-and-verified this
//     pass, so — verbatim-or-nothing — we DEFER them (published in notClaimed).
//   · Math — NEBRASKA'S OWN (not Common Core); and this catalog teaches no mathematics anyway
//     (notClaimed).
//   · Science — NEBRASKA'S OWN. Nebraska's 2017 science standards are Nebraska's own, NGSS-INFLUENCED
//     but NOT verbatim NGSS, so the shared ngss file does NOT apply and we do not blind-alias it;
//     deferred fetch-or-don't-cite (published in notClaimed).
//
// Provenance: the High School Civics standards and indicators were transcribed VERBATIM from the
// NDE-published "Nebraska Social Studies Standards" (2019 edition), fetched 2026-07-19 from the
// canonical NDE PDF (the sourceUrl below), which renders clean text; every indicator was verified to
// read as clean English before use. Nebraska cites its standards as "SS HS.<standard>.<indicator>"
// (e.g., SS HS.1.1.e); we cite them exactly so.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const NE_SS =
  "https://www.education.ne.gov/wp-content/uploads/2019/11/Nebraska-Social-Studies-Standards-Final-11-2019.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "NE",
  frameworks: [
    // ── High School Civics (Nebraska Social Studies Standards, 2019) ──
    {
      id: "ne-civics",
      subject: "Social Studies",
      name: "Nebraska Social Studies Standards — High School Civics",
      publisher: "Nebraska Department of Education (NDE) / Nebraska State Board of Education",
      version: "Nebraska Social Studies Standards, 2019 · High School Civics · approved November 8, 2019",
      fetchedOn: "2026-07-19",
      sourceUrl: NE_SS,
      adoption:
        "Nebraska's High School Civics standards are the anchor for the Nebraska Civics flagship. Nebraska writes its own standards (it is a non-adopter of the Common Core), and its civics standards are content-bearing: SS HS.1.1.e names state government (its own example set includes 'bicameral/unicameral'), which is a 1:1 home for Nebraska's defining one-house, nonpartisan Unicameral; SS HS.1.1.d hosts Nebraska's local government (its 93 counties, natural resources districts, and elected public-power boards); and the SS HS.1.2 standards host civic participation and media literacy. Transcribed verbatim from NDE's 2019 document (see the file header for the provenance note).",
      standards: [
        // — Forms and Functions of Government —
        {
          code: "SS HS.1.1.e",
          text: "Analyze the foundation, structures, and functions of state government and its outcomes.",
          claimIds: [
            "civics.ne-unicameral",
            "civics.ne-lawmaking",
            "civics.ne-executive",
            "civics.ne-courts-merit-selection",
            "civics.ne-public-power",
          ],
          coverage: "full",
          note: "The flagship's headline home: the standard's own example set names 'bicameral/unicameral' and 'branches of government,' and the Nebraska Civics course teaches Nebraska's state government in depth — the one-house nonpartisan Unicameral of 49 senators and its three-stage, public-hearing lawmaking, the joint-ticket Governor with separately elected officers, the merit-selection judiciary, and Nebraska's uniquely all-public-power utilities.",
        },
        {
          code: "SS HS.1.1.d",
          text: "Analyze the foundation, structures, and functions of local government and its outcomes.",
          claimIds: ["civics.ne-local-government", "civics.local-government-layers", "civics.ne-public-power"],
          coverage: "full",
          note: "Nebraska local government is taught as Nebraska's own: 93 counties and their elected boards and officers, cities and villages (Omaha and Lincoln with home-rule charters), school districts, and two Nebraska distinctives the standard's 'regional boards' example fits — elected natural resources district (NRD) boards and elected public-power district boards.",
        },
        {
          code: "SS HS.1.1.b",
          text: "Evaluate the structure of American constitutional government.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.electoral-college",
            "civics.ne-split-electoral",
            "civics.article-v-amendment",
          ],
          coverage: "partial",
          note: "The core of the standard is taught directly by the general civics ladder: federalism, the three branches, separation of powers and checks and balances, the Article V amendment process, the enumerated/implied/reserved powers taxonomy, and the Electoral College (including Nebraska's own district-split of its electoral votes). Partial: the standard's example set also lists historical content (Reconstruction amendments, Prohibition, women's vote) that this catalog touches only in its history courses, not as named constitutional structure.",
        },
        {
          code: "SS HS.1.1.c",
          text: "Analyze the functions of United States government and its outcomes.",
          claimIds: ["civics.three-branches-federal", "civics.federal-bill-process", "civics.us-citizenship-law"],
          coverage: "partial",
          note: "Several named functions are taught: legislative law-making (the federal bill process end to end), executive implementation and judicial interpretation (the three branches), and naturalization of citizens (citizenship law). Partial: the standard's other examples — national security, taxation, and environmental implications — are policy content this catalog does not teach.",
        },
        // — Civic Participation —
        {
          code: "SS HS.1.2.a",
          text: "Investigate how individuals and groups can effectively use the structure and functions of various levels of government to shape policy.",
          claimIds: [
            "civics.ne-direct-democracy",
            "civics.ne-get-involved",
            "civics.campaign-help",
            "civics.track-a-bill",
            "civics.show-up-every-level",
          ],
          coverage: "full",
          note: "The standard's own examples — voting, contacting government officials, petitioning, lobbying — are each taught as practice: Nebraska's strong initiative and referendum (petitioning), helping a campaign lawfully, tracking a live bill and testifying (Nebraska guarantees every bill a public hearing), and showing up at the level where an issue is decided.",
        },
        {
          code: "SS HS.1.2.c",
          text: "Engage and reflect on participation in civic activities.",
          claimIds: ["civics.ne-get-involved", "civics.voter-registration", "civics.campaign-help"],
          coverage: "full",
          note: "The standard's own examples — registering to vote and voting on reaching the age of majority, advocating for rights, participating in community improvement — are taught as practiced civic activities, with the flagship's reveal prompts asking the learner to reflect on how they will take part in Nebraska (including for the elected utility and NRD boards).",
        },
        {
          code: "SS HS.1.2.d",
          text: "Investigate an issue and communicate which level of government is most appropriate to utilize in addressing the issue.",
          claimIds: ["civics.show-up-every-level", "civics.local-government-layers", "civics.ne-get-involved"],
          coverage: "partial",
          note: "Matching an issue to the level of government that decides it, and showing up there, is taught directly (the general state-and-local course and the Nebraska get-involved lesson). Partial: the standard's communicate-the-finding deliverable (an editorial, PSA, or public presentation) is prompted, not run as a graded assignment.",
        },
        {
          code: "SS HS.1.2.f",
          text: "Analyze various media sources for accuracy and perspective.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.media-fallacies-recurring",
            "bvc.evaluate-claims-fallacies",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Squarely met by the BVC media-literacy method the standard's examples name (news media literacy, online civic reasoning): reading a source for accuracy, bias, omission, misleading statistics, and recurring fallacy is modelled and practiced across the catalog.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "SS HS.1.1.a (historical foundation of the Constitution) — not claimed.",
      body: "SS HS.1.1.a asks students to examine the historical foundation that influenced the creation of the U.S. Constitution (its example set names philosophers, social contract theory, natural rights, the Constitutional Convention, the Federalist and Anti-Federalist papers, and the Iroquois Confederation). The catalog teaches the Constitution's structure and its Articles, but not a named survey of its Enlightenment and Convention foundation, so we do not claim this indicator.",
    },
    {
      heading: "SS HS.1.1.f/g/h and SS HS.1.2.b/e — not claimed.",
      body: "We do not claim SS HS.1.1.f (supranational organizations: UN, NATO, EU, treaties), SS HS.1.1.g (the roles of political parties), SS HS.1.1.h (U.S. foreign policy), SS HS.1.2.b (patriotic symbols, songs, and holidays), or SS HS.1.2.e (how individuals, groups, and the media check governmental practices, via Watergate, the Civil Rights movement, and the Suffrage movement). The civics ladder teaches government structure and civic action, not international relations, party history, patriotic-symbol analysis, or the press-and-scandal history these indicators name.",
    },
    {
      heading: "High School Economics (SS HS.2.x) — deferred.",
      body: "Nebraska's High School Economics standards are personal-finance and market-economics heavy (cost-benefit and PACED decision-making, budgeting, banking, credit and debt, saving and investing, supply and demand). The catalog's commodity-economics content would map to a few market concepts, but Nebraska's economics standards are dominated by personal financial literacy this catalog does not teach, so we defer the economics discipline rather than pad the map.",
    },
    {
      heading: "Nebraska's Geography and History disciplines — deferred, not denied.",
      body: "The catalog's commodity, colonial, labor, civil-rights, and migration history and its Commodity Map geography WOULD map to Nebraska's High School Geography and History standards, as they do in other states. We mapped the High School Civics discipline this pass (the flagship's home) and DEFER the geography and history strands to a later pass rather than claim standards we have not yet transcribed and verified.",
    },
    {
      heading: "English/Language Arts — deferred (Nebraska is a non-adopter of the Common Core).",
      body: "Nebraska never adopted the Common Core; its Nebraska College and Career Ready Standards for English Language Arts are Nebraska's own. The shared Common Core ELA file therefore does not apply, and the rule is compare-before-aliasing. Nebraska's own ELA reading/writing standards were not fetched-and-verified this pass, so we defer them rather than cite text we have not confirmed verbatim. (The catalog's source-evaluation and media-literacy work is instead claimed against Nebraska's own civics media-literacy standard, SS HS.1.2.f.)",
    },
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Nebraska mathematics standard (Nebraska's math standards, like its ELA, are Nebraska's own rather than the Common Core).",
    },
    {
      heading: "Science — deferred (Nebraska's science is its own, not verbatim NGSS).",
      body: "Nebraska's 2017 science standards are Nebraska's own — NGSS-influenced but not verbatim NGSS — so our shared NGSS file does NOT apply and we do not blind-alias it. The one Earth-science-adjacent claim the catalog could support is deferred until Nebraska's own science document is fetched and verified.",
    },
  ],
};
