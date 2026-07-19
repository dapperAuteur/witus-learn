// ─────────────────────────────────────────────────────────────────────────────
// VERMONT — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-vt` was written FROM Vermont's own official sources (legislature.vermont.gov,
// sos.vermont.gov, vermontjudiciary.org, and the Vermont Constitution). But Vermont is the
// SOCIAL-STUDIES EDGE CASE of this whole map, and the header below is honest about it.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from the Vermont Agency of Education's
// (AOE) own record — Vermont is INHERIT-heavy across ALL THREE subjects, and the social-studies
// situation is the point of this file:
//   · ELA — INHERITED (verbatim, no aliases). The Vermont State Board of Education adopted the
//     Common Core State Standards for ELA and mathematics on August 17, 2010, with implementation
//     in 2013-2014. Vermont adopted the standards as published and did NOT renumber them, so
//     ../shared/common-core-ela is adopted verbatim, keeping the canonical CCSS codes (contrast
//     Michigan, which prints the bare RH.11-12.6 form and therefore aliases). We claim no
//     mathematics standards.
//   · Science — INHERITED (verbatim). Vermont was an NGSS LEAD STATE and adopted the Next
//     Generation Science Standards in 2013 (nextgenscience.org/vermont). HS-ESS3-1, the one PE we
//     cite, is a standard NGSS PE, so ../shared/ngss is adopted verbatim. This is not a science
//     course; see the note on the entry itself.
//   · Social studies — NOT BESPOKE, and NOT a state-authored document at all. This is the edge
//     case: Vermont does NOT publish its own detailed social-studies standards or codes. In 2017
//     the Vermont State Board of Education ADOPTED the national College, Career, and Civic Life
//     (C3) Framework for Social Studies State Standards (NCSS, 2013) AS Vermont's social-studies
//     standards. So there is NO Vermont-specific SS code that names Vermont the way Rhode Island's
//     SSHS.CVC.4.5 names Rhode Island. We therefore cite the C3 Framework's OWN "By the End of
//     Grade 12" indicators (D2.Civ.*, D2.Eco.*, D2.Geo.*, D2.His.*) verbatim, and we are explicit
//     (see notClaimed) that the flagship's Vermont-structure lessons map only where the C3 civics
//     indicators reach "local" and "state" institutions (D2.Civ.1, D2.Civ.5, D2.Civ.11) — those
//     indicators are GENERAL and federal/comparative, not Vermont-specific. We do NOT invent VT
//     codes; we map the adopted national framework the state answers to and document the gap.
//
// WHY the C3 Framework is filed here as an OwnFramework rather than a shared adoption: the C3
// Framework's raw national indicators are cited by no OTHER state in this map (Rhode Island,
// Connecticut, Washington, Wisconsin, and Hawaii each AUTHORED their own C3-informed standards with
// their own codes — Vermont did not). So the framework is declared inline in this Vermont file,
// with `publisher` = NCSS and the `adoption` line naming the Vermont State Board of Education as the
// adopting authority. The `name`, `publisher`, and `adoption` a teacher reads are all accurate.
//
// PROVENANCE (social studies): the C3 Framework "By the End of Grade 12" Dimension 2 indicators
// (Civics, Economics, Geography, History) were transcribed VERBATIM, fetched 2026-07-19. The
// canonical NCSS PDF (socialstudies.org, the `sourceUrl` below) opens in a browser but returns
// HTTP 403 to automated fetches, so the verbatim text was read from a byte-faithful mirror of the
// SAME NCSS document served by Appalachian State University's history department
// (history.appstate.edu/.../c3_framework_-_dimension_2_-_all_social_studies.pdf); every indicator
// mapped below was verified to read as clean, sensible English before use. One extraction artifact
// in D2.Civ.14.9-12 — a double space RIDE-style, "the  common good" — was collapsed to a single
// space (a layout artifact, not citable text). Codes are cited exactly as the C3 Framework prints
// them (D2.Civ.1.9-12, etc.). The Vermont ADOPTION itself is recorded on the AOE social-studies
// page (education.vermont.gov/student-learning/content-areas/global-citizenship/social-studies).
// The C3 Framework's Dimensions 1, 3, and 4 (the inquiry / evaluating-sources / taking-action arc)
// are NOT separately transcribed this pass and are deferred in notClaimed (fetch-and-verify-or-
// don't-cite); this pass maps the Dimension 2 disciplinary indicators, which decoded cleanly.
//
// SECURITY / injection: nothing in the C3 Framework document or the Vermont AOE pages was
// instruction-shaped; it is ordinary standards prose. No embedded-instruction content was found.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

// Canonical NCSS C3 Framework document (opens in a browser; 403 to automated fetch — see header for
// the byte-faithful Appalachian State mirror the verbatim text was transcribed from).
const VT_C3 = "https://www.socialstudies.org/sites/default/files/c3/C3-Framework-for-Social-Studies.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "VT",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "The Vermont State Board of Education adopted the Common Core State Standards for English language arts and mathematics on August 17, 2010, with implementation in 2013-2014. Vermont adopted the standards as published and did not renumber them, so the shared Common Core ELA file is adopted verbatim with no aliases; the literacy-in-history/social-studies (RH), informational-reading (RI), and writing-in-history (WHST) grade 11-12 strands are the ones this catalog touches, and the text here is the CCSS publisher's verbatim wording (thecorestandards.org). We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "Vermont was an NGSS Lead State and adopted the Next Generation Science Standards in 2013. HS-ESS3-1, the one performance expectation we cite, is a standard NGSS PE, so the shared NGSS file is adopted verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── The C3 Framework (NCSS, 2013), adopted by Vermont in 2017 as its social-studies standards ──
    // Dimension 2 "By the End of Grade 12" indicators, cited verbatim. See the file header for why
    // there is no Vermont-specific code and why this national framework is declared here.
    {
      id: "vt-c3-social-studies",
      subject: "Social Studies",
      name: "College, Career, and Civic Life (C3) Framework for Social Studies State Standards — Dimension 2, By the End of Grade 12 (Vermont's adopted social-studies standards)",
      publisher: "National Council for the Social Studies (NCSS) — adopted by the Vermont State Board of Education / Agency of Education",
      version: "C3 Framework (NCSS, 2013) · adopted by Vermont in 2017 · Dimension 2, By the End of Grade 12",
      fetchedOn: "2026-07-19",
      sourceUrl: VT_C3,
      adoption:
        "Vermont does not publish its own detailed social-studies standards. In 2017 the Vermont State Board of Education adopted the national College, Career, and Civic Life (C3) Framework (NCSS, 2013) as Vermont's social-studies standards, so a Vermont teacher's only citable social-studies codes ARE the C3 Framework's indicators — and they are GENERAL (federal/comparative), not Vermont-specific. The flagship's Vermont-government lessons map onto the civics indicators that reach “local” and “state” institutions (D2.Civ.1, D2.Civ.5, D2.Civ.11) — marked partial because those same indicators also name tribal/national/international levels the courses do not all teach — and the BVC catalog's history, geography, and economics map onto the D2.His / D2.Geo / D2.Eco indicators. Transcribed verbatim from the C3 Framework's Dimension 2 “By the End of Grade 12” band (see the file header for the mirror/provenance note).",
      standards: [
        // ── Civics — the flagship's home (D2.Civ) ──
        {
          code: "D2.Civ.1.9-12",
          text: "Distinguish the powers and responsibilities of local, state, tribal, national, and international civic and political institutions.",
          claimIds: [
            "civics.vt-general-assembly",
            "civics.vt-executive",
            "civics.vt-courts",
            "civics.vt-republic-constitution",
            "civics.vt-town-meeting",
            "civics.federal-articles-i-iii",
            "civics.federalism-why-split-power",
            "civics.local-government-layers",
          ],
          coverage: "partial",
          note: "This is the flagship's primary home: Vermont's own state and local institutions are taught in depth — the General Assembly (a 150-member House and 30-member Senate on 2-year terms), the plural executive with its 2-year gubernatorial term, the appointed judiciary the Legislature votes to retain, the 1777/1793 constitutional origin, and the town as Vermont's primary unit of local government (Town Meeting Day) — alongside the federal institutions and the federalism course. Partial because the same C3 indicator also names TRIBAL and INTERNATIONAL institutions, which the courses do not teach.",
        },
        {
          code: "D2.Civ.4.9-12",
          text: "Explain how the U.S. Constitution establishes a system of government that has powers, responsibilities, and limits that have changed over time and that are still contested.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.federal-articles-i-iii",
            "civics.separation-checks-balances",
            "civics.federal-powers-taxonomy",
          ],
          coverage: "full",
          note: "The U.S. Constitution's system of powers, responsibilities, and limits is taught article by article — Articles I-III, separation of powers and checks and balances, and the enumerated/implied/reserved powers taxonomy that is still contested.",
        },
        {
          code: "D2.Civ.2.9-12",
          text: "Analyze the role of citizens in the U.S. political system, with attention to various theories of democracy, changes in Americans' participation over time, and alternative models from other countries, past and present.",
          claimIds: ["civics.citizenship-responsibilities", "civics.voter-registration", "civics.us-citizenship-law"],
          coverage: "partial",
          note: "Partial: the role of the citizen — the responsibilities of citizenship, registering and voting, and how one becomes a citizen — is taught as practice. The standard's comparative theories of democracy and its survey of how American participation has changed over time and against other countries' models are not the course's method.",
        },
        {
          code: "D2.Civ.5.9-12",
          text: "Evaluate citizens' and institutions' effectiveness in addressing social and political problems at the local, state, tribal, national, and/or international level.",
          claimIds: ["civics.vt-get-involved", "civics.vt-town-meeting", "civics.show-up-every-level", "civics.track-a-bill"],
          coverage: "partial",
          note: "Partial: how Vermonters and their institutions address problems is taught as practice — Town Meeting Day's direct vote on the town budget, showing up at the selectboard and school board, and tracking a live bill in Montpelier — at the local and state levels. The tribal, national, and international levels the indicator also names are not all covered.",
        },
        {
          code: "D2.Civ.11.9-12",
          text: "Evaluate multiple procedures for making governmental decisions at the local, state, national, and international levels in terms of the civic purposes achieved.",
          claimIds: ["civics.vt-lawmaking-no-initiative", "civics.vt-town-meeting", "civics.federal-bill-process"],
          coverage: "partial",
          note: "Partial: two of Vermont's decision-making procedures are taught in real depth — how a bill becomes a Vermont law in the General Assembly (with the two-thirds veto override) and how a town decides its budget directly at town meeting, alongside the full federal bill process. The international level the indicator also names is not taught.",
        },
        {
          code: "D2.Civ.12.9-12",
          text: "Analyze how people use and challenge local, state, national, and international laws to address a variety of public issues.",
          claimIds: ["civics.track-a-bill", "civics.vt-get-involved", "civics.ballot-measures-local-causes"],
          coverage: "partial",
          note: "Partial: using and challenging law to address public issues is taught as practice — tracking and testifying on a live bill, working local causes, and Vermont's own on-ramps — at the local and state levels. The national and international law the indicator also names is not the worked material.",
        },
        {
          code: "D2.Civ.14.9-12",
          text: "Analyze historical, contemporary, and emerging means of changing societies, promoting the common good, and protecting rights.",
          claimIds: ["civics.vt-republic-constitution", "bvc.plantation-economy-resistance", "history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: means of changing society and protecting rights are taught through Vermont's own 1777 constitution — the first in America to prohibit adult slavery — and through the catalog's resistance and labor/civil-rights history (plantation resistance, the union movement to Randolph and Memphis). It is not a general survey of every historical and emerging social-change movement.",
        },
        // ── History (D2.His) — the BVC catalog's method ──
        {
          code: "D2.His.6.9-12",
          text: "Analyze the ways in which the perspectives of those writing history shaped the history that they produced.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "This is the Whose Voice method taught directly: a planter's euphemism and passive voice read against two first-person accounts by formerly enslaved writers, and reading a text for what its author leaves out — perspective shaping the record.",
        },
        {
          code: "D2.His.11.9-12",
          text: "Critique the usefulness of historical sources for a specific historical inquiry based on their maker, date, place of origin, intended audience, and purpose.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.evaluate-claims-fallacies", "media.misleading-statistics"],
          coverage: "partial",
          note: "Partial: critiquing a source by its maker, purpose, and audience is the media/source-literacy method run in every episode — modelled source evaluation, reading claims for fallacy, and reading a widely repeated statistic for its limitations. The student performs the full critique for a specific inquiry only in the Coffee project.",
        },
        {
          code: "D2.His.14.9-12",
          text: "Analyze multiple and complex causes and effects of events in the past.",
          claimIds: ["bvc.opium-wars", "bvc.haitian-revolution", "history.solidarnosc-cold-war"],
          coverage: "partial",
          note: "Partial: complex causation is worked for major events — the Opium Wars, the Haitian Revolution, and martial-law Poland — with intended and unintended consequences. It is not a general survey of causation across eras.",
        },
        {
          code: "D2.His.16.9-12",
          text: "Integrate evidence from multiple relevant historical sources and interpretations into a reasoned argument about the past.",
          claimIds: ["bvc.coffee-project-argument-paper", "bvc.source-evaluation-modelled"],
          coverage: "partial",
          note: "Partial: integrating multiple sources into a reasoned argument is modelled throughout and required of the student in the Coffee episode's graded research paper. Where that project runs it meets this indicator squarely; the rest of the catalog models it rather than assessing it.",
        },
        // ── Geography (D2.Geo) — the Commodity Map ──
        {
          code: "D2.Geo.3.9-12",
          text: "Use geographic data to analyze variations in the spatial patterns of cultural and environmental characteristics at multiple scales.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.coffee-project-mapping"],
          coverage: "full",
          note: "The Commodity Map is this indicator: every episode pinned at its origin, the Growing Belts analyzed by latitude band and country, and the Coffee project has the student prepare maps and data tables of spatial patterns at multiple scales.",
        },
        {
          code: "D2.Geo.4.9-12",
          text: "Analyze relationships and interactions within and between human and physical systems to explain reciprocal influences that occur among them.",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.growing-belts-resource-maps"],
          coverage: "full",
          note: "Reciprocal human-physical interaction is the curriculum's method — volcanic soil and altitude deciding what grows, resource availability and climate shaping where and how people produce and trade.",
        },
        {
          code: "D2.Geo.9.9-12",
          text: "Evaluate the influence of long-term climate variability on human migration and settlement patterns, resource use, and land uses at local-to-global scales.",
          claimIds: ["bvc.climate-change-forecasts"],
          coverage: "partial",
          note: "Partial: published climate forecasts and their implications for growers, land use, and production regions are analyzed in depth (coffee, cacao, kava, beer). Climate-driven human migration and settlement, which the indicator also names, are touched, not worked.",
        },
        // ── Economics (D2.Eco) — commodity markets and trade policy ──
        {
          code: "D2.Eco.7.9-12",
          text: "Use benefits and costs to evaluate the effectiveness of government policies to improve market outcomes.",
          claimIds: ["bvc.sugar-program-trade-barriers", "bvc.prohibition", "bvc.war-on-drugs-foreign-policy"],
          coverage: "full",
          note: "Government policies that shape markets are evaluated for benefits and costs in real depth: the U.S. sugar program's quotas and tariffs (stable prices vs. a multi-billion-dollar consumer cost), Prohibition, and the War on Drugs and its balloon effect.",
        },
        {
          code: "D2.Eco.3.9-12",
          text: "Analyze the ways in which incentives influence what is produced and distributed in a market system.",
          claimIds: ["bvc.price-elasticity-demand", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: what gets produced and distributed is taught through real commodity markets — climate and soil deciding where crops can grow, supply shocks and inelastic demand moving prices — rather than as a general markets unit on incentives.",
        },
        {
          code: "D2.Eco.4.9-12",
          text: "Evaluate the extent to which competition among sellers and among buyers exists in specific markets.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: competition in specific markets is evaluated along real commodity chains — who captures value, and why producers stay poor in the commodity trap — but not as a systematic market-structure unit across sellers and buyers.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Vermont has NO state-specific social-studies code — it adopted the national C3 Framework.",
      body: "This is the honest heart of Vermont's page. Vermont does not publish its own detailed social-studies standards or codes; in 2017 the Vermont State Board of Education adopted the national College, Career, and Civic Life (C3) Framework (NCSS, 2013) as Vermont's social-studies standards. So — unlike Rhode Island (whose SSHS.CVC.4.5 names Rhode Island and the Narragansett) or Michigan (whose C3.2 names state, local, and tribal governments) — there is NO Vermont-specific standard that names Vermont's own government. The C3 civics indicators we cite (D2.Civ.1, D2.Civ.5, D2.Civ.11) are GENERAL and reach “local” and “state” institutions, which is where the flagship's Vermont-structure lessons map; the depth on Vermont's 2-year terms, its majority-vote-or-the-Legislature-decides rule, its legislative judicial retention, Town Meeting Day, and its lack of a statewide initiative is in the course, not in any Vermont code. We do not invent Vermont codes to fill the gap.",
    },
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Vermont Common Core mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Vermont was an NGSS Lead State and adopted the NGSS in 2013, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Tribal, national, and international levels named in the C3 civics indicators.",
      body: "D2.Civ.1, D2.Civ.5, D2.Civ.11, and D2.Civ.12 each name tribal, national, and/or international institutions and laws alongside local and state ones. Vermont Civics teaches Vermont's own state and local government (and the BVC/federal courses teach the national level), but the courses do not teach tribal governments or international institutions, so each of those indicators is claimed as PARTIAL with the gap called out on the entry, never stretched to full.",
    },
    {
      heading: "The C3 Framework's Dimensions 1, 3, and 4 — deferred, not denied.",
      body: "This pass maps the C3 Framework's Dimension 2 disciplinary indicators (Civics, Economics, Geography, History), which decoded cleanly and were verified verbatim. Dimension 1 (Developing Questions and Planning Inquiries), Dimension 3 (Evaluating Sources and Using Evidence), and Dimension 4 (Communicating Conclusions and Taking Informed Action) — the inquiry arc the catalog's source-literacy and Coffee-project research would also map to — were not separately retrieved verbatim this pass. Our rule is fetch-and-verify-or-don't-cite, so they are deferred rather than mapped from memory.",
    },
    {
      heading: "C3 Dimension 2 indicators we checked and did not claim.",
      body: "Within the disciplines we did map, the indicators the courses do not genuinely teach are not claimed: in Civics, D2.Civ.3 (constitutions, laws, and treaties on maintaining national/international order), D2.Civ.6 (relationships among governments, civil societies, and markets), D2.Civ.7-D2.Civ.10 (civic virtues, deliberative processes, and democratic principles as dispositions), and D2.Civ.13 (public policy in terms of intended/unintended outcomes) beyond the economic-policy angle already claimed under D2.Eco.7; in Economics, the personal-finance, national-economy, and monetary/fiscal-policy indicators (D2.Eco.1-2, D2.Eco.5-6, D2.Eco.8-13, D2.Eco.15) and comparative advantage by name (D2.Eco.14); in Geography, the geospatial-technology, settlement, and globalization indicators (D2.Geo.1-2, D2.Geo.5-8, D2.Geo.10-12); and in History, the historiography, sourcing, and argument indicators the courses touch but do not systematically teach (e.g., D2.His.1-5, D2.His.7-10, D2.His.12-13, D2.His.15, D2.His.17). The gap is in the catalog, not the framework.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Vermont's closest frameworks for these (its educational-technology / computer-science and world-languages guidance) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Vermont claims this pass.",
    },
  ],
};
