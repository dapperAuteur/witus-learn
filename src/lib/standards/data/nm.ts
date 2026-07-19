// ─────────────────────────────────────────────────────────────────────────────
// NEW MEXICO — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-nm` was written FROM New Mexico's own official sources (nmlegis.gov, sos.nm.gov,
// nmcourts.gov, and the 1912 Constitution), so New Mexico's civics flagship gets a genuine home:
// the 2022 Social Studies Standards carry a standard specifically about New Mexico's own
// constitution (9-12.Civ.29), diverse populations (9-12.Civ.30), and government entities
// (9-12.Civ.31).
//
// THE INHERIT-VS-BESPOKE CALL, made per framework from NMPED's own record:
//   · ELA — INHERITED (verbatim, no aliases). New Mexico adopted the Common Core State Standards
//     for ELA on November 29, 2010 (NMPED), with full implementation in 2013-14. New Mexico
//     adopted the CCSS as published, so ../shared/common-core-ela is adopted verbatim, keeping the
//     canonical CCSS codes. PROVENANCE LIMIT: NMPED's own ELA reprint could not be re-fetched this
//     pass (web.ped.nm.gov sits behind a SiteGround captcha challenge, and the Internet Archive was
//     temporarily offline), so we did NOT verify whether New Mexico prints the bare codes (as
//     Michigan does) or the CCSS namespace. Rather than assert an alias we cannot confirm, we keep
//     the CCSS publisher's verbatim text and codes (fetched 2026-07-13 from thecorestandards.org,
//     the authoritative source for the CCSS text itself). We claim no mathematics standards.
//   · Science — INHERITED (verbatim). New Mexico adopted the NGSS in 2018 as the "NM STEM Ready!
//     Science Standards," which add six New Mexico-specific standards to the NGSS. HS-ESS3-1 — the
//     one performance expectation this catalog can honestly touch — is a standard NGSS PE unchanged
//     by the New Mexico additions, so ../shared/ngss is adopted verbatim. The six NM additions are
//     New Mexico's own and are not claimed (see notClaimed). This is not a science course; see the
//     note on the entry itself.
//   · Social studies — BESPOKE. New Mexico's Social Studies Standards (adopted February 2022,
//     effective 2023) are New Mexico's own, heavily revised, and organized into six strands (Civics,
//     Economics, Geography, History, Ethnic/Cultural/Identity, Inquiry). We map the High School
//     Civics, High School Economics, and High School World History courses; each is its own
//     framework here (the strands use distinct 9-12.<strand>.<n> code prefixes, so codes stay
//     unique within a framework). The NM-specific civics standards (9-12.Civ.29/30/31) host the
//     flagship's own-state structure; the federal C-ladder standards carry the general civics
//     claims.
//
// PROVENANCE (social studies): the canonical NMPED PDF (the sourceUrl below) is served from
// web.ped.nm.gov, which returns an HTTP 202 SiteGround captcha challenge to automated fetches. We
// transcribed VERBATIM from a byte-faithful district mirror of the SAME document, NM-Standards-508.pdf
// (identical filename), served at
// https://core-docs.s3.amazonaws.com/documents/asset/uploaded_file/1176/BCS/2426392/NM-Standards-508.pdf,
// fetched 2026-07-19. New Mexico cites HS Civics standards as 9-12.Civ.<n>; we cite them exactly so.
// One printing inconsistency: the document prints code 23 with a space ("9-12 Civ.23") rather than
// the strand's consistent "9-12.Civ.23"; we render it in the consistent form and flag it here. The
// document uses a curly apostrophe (’) in "New Mexico’s"; transcribed verbatim.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const NM_SS = "https://web.ped.nm.gov/wp-content/uploads/2025/01/NM-Standards-508.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "NM",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "New Mexico adopted the Common Core State Standards for English language arts on November 29, 2010 (New Mexico Public Education Department), with full implementation in the 2013-14 school year. New Mexico adopted the CCSS as published, so the shared Common Core ELA file is adopted verbatim, keeping the canonical CCSS codes. New Mexico's own ELA reprint could not be re-fetched this pass (web.ped.nm.gov is behind a captcha challenge and the Internet Archive was offline), so we did not verify New Mexico's printed code style and do not assert an alias — the text here is the CCSS publisher's verbatim wording (thecorestandards.org). We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "New Mexico adopted the Next Generation Science Standards in 2018 as the NM STEM Ready! Science Standards, which add six New Mexico-specific standards to the NGSS. HS-ESS3-1, the one performance expectation we cite, is a standard NGSS PE unchanged by the New Mexico additions, so the shared NGSS file is adopted verbatim. The six NM additions are New Mexico's own and are not claimed. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── NM Social Studies — High School Civics (adopted 2022, effective 2023) ──
    {
      id: "nm-civics",
      subject: "Social Studies",
      name: "New Mexico Social Studies Standards — High School Civics",
      publisher: "New Mexico Public Education Department (NMPED)",
      version: "New Mexico Social Studies Standards, February 2022 (effective 2023) · High School Civics",
      fetchedOn: "2026-07-19",
      sourceUrl: NM_SS,
      adoption:
        "New Mexico's High School Civics course is the anchor for the New Mexico Civics flagship. Three standards are specifically about New Mexico — 9-12.Civ.29 (New Mexico's constitution), 9-12.Civ.30 (New Mexico's diverse populations), and 9-12.Civ.31 (New Mexico's government entities) — and host the flagship's own-state structure; the federal C-ladder (9-12.Civ.13-15, 23, 24, 28, 45, 47, 49) carries the general civics ladder, and two inquiry standards (9-12.Civ.3, .10) host the source-evaluation method. The document prints code 23 with a space (“9-12 Civ.23”); we render it in the strand's consistent 9-12.Civ.23 form. Transcribed verbatim from the NMPED 2022 Social Studies Standards (see the file header for the mirror/provenance note).",
      standards: [
        // — New Mexico-specific standards (the flagship's home) —
        {
          code: "9-12.Civ.29",
          text: "Explain the unique features and processes of New Mexico’s constitution.",
          claimIds: ["civics.nm-bilingual-constitution", "civics.nm-lawmaking"],
          coverage: "full",
          note: "Near-1:1 with the flagship's headline: New Mexico's 1912 constitution and its unique feature — the special protections for Spanish-speaking citizens that make New Mexico effectively the most bilingual state — plus its processes (amendment by legislative referral to the voters, with the language-rights provisions especially hard to amend).",
        },
        {
          code: "9-12.Civ.30",
          text: "Evaluate the contributions of New Mexico’s diverse populations to its governmental structure and outcomes.",
          claimIds: ["civics.nm-bilingual-constitution", "civics.nm-tribal-nations"],
          coverage: "partial",
          note: "Partial: the flagship teaches how New Mexico's Hispano, Native American, and Anglo populations shaped its bilingual constitution and civic landscape, and names the 19 Pueblos and other sovereign nations. The standard's evaluative performance — assessing those contributions' effect on governmental outcomes — is set up by the course rather than fully worked.",
        },
        {
          code: "9-12.Civ.31",
          text: "Investigate challenges and opportunities within and between different government entities in New Mexico.",
          claimIds: [
            "civics.nm-unpaid-legislature",
            "civics.nm-executive",
            "civics.nm-courts",
            "civics.nm-local-government",
          ],
          coverage: "partial",
          note: "Partial: New Mexico's government entities are each taught in depth — the only fully unpaid state legislature in the nation, the plural executive (including the Commissioner of Public Lands), the appoint-then-partisan-elect-then-retain judiciary, and the 33 counties. The standard's “investigate challenges and opportunities between entities” is an inquiry the course frames rather than a full investigation.",
        },
        // — Federal C-ladder + citizenship (the general civics claims) —
        {
          code: "9-12.Civ.13",
          text: "Distinguish the powers and responsibilities of local, state, indigenous, national, and international civic and political institutions.",
          claimIds: [
            "civics.local-government-layers",
            "civics.nm-local-government",
            "civics.nm-tribal-nations",
            "civics.three-branches-federal",
            "civics.federalism-why-split-power",
          ],
          coverage: "partial",
          note: "Partial: local, state, indigenous, and national institutions are taught — what local government handles, New Mexico's counties, the sovereign tribal nations, the three federal branches, and federalism. International civic and political institutions are not taught.",
        },
        {
          code: "9-12.Civ.14",
          text: "Develop claims about the purpose, processes, strengths, and weaknesses of the U.S. government.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.separation-checks-balances",
            "civics.federal-articles-i-iii",
          ],
          coverage: "partial",
          note: "Partial: the purpose, structure, and processes of the three federal branches — Articles I-III, separation of powers, and checks and balances — are taught directly. “Develop claims about strengths and weaknesses” is an analytical performance students do rather than delivered content.",
        },
        {
          code: "9-12.Civ.15",
          text: "Evaluate efforts to adapt and redesign the U.S. Constitution and political institutions over time.",
          claimIds: ["civics.article-v-amendment"],
          coverage: "partial",
          note: "Partial: the Article V amendment procedure — how the Constitution is deliberately changed, and why the bar is so high — is taught. A historical survey of specific redesign efforts over time is not.",
        },
        {
          code: "9-12.Civ.23",
          text: "Analyze the U.S. Constitution and its founding principles.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.preamble-purposes",
          ],
          coverage: "full",
          note: "US Constitution 101 analyzes the Constitution article by article and teaches its founding principles — the Preamble's purposes, separation of powers, checks and balances, and federalism.",
        },
        {
          code: "9-12.Civ.24",
          text: "Evaluate procedures for making governmental decisions at the local, state, national, and international levels in terms of the civic purposes achieved.",
          claimIds: ["civics.federal-bill-process", "civics.nm-lawmaking", "civics.local-government-layers"],
          coverage: "partial",
          note: "Partial: the federal and New Mexico lawmaking procedures are taught in depth (committees through veto override; New Mexico's line-item veto and two-thirds override), and local decision-making is introduced. International decision-making is not taught, and the evaluative “civic purposes achieved” framing is student analysis.",
        },
        {
          code: "9-12.Civ.28",
          text: "Evaluate the U.S. justice system over time and its impacts on policy, society, economics, and individual rights.",
          claimIds: ["civics.federal-judiciary-structure", "civics.jury-service", "rights.landmark-cases"],
          coverage: "partial",
          note: "Partial: the structure of the federal judiciary, jury service, and the landmark rights cases (Tinker, Brandenburg, Mapp, Terry, and the Fourth Amendment line) are taught as applicable rules. A systematic evaluation of the justice system's impacts over time is not.",
        },
        {
          code: "9-12.Civ.45",
          text: "Analyze rights and obligations of citizens of the United States.",
          claimIds: ["civics.citizenship-responsibilities", "civics.us-citizenship-law", "rights.landmark-cases"],
          coverage: "full",
          note: "Both halves are taught: the rights (Know Your Rights, the landmark cases as usable rules) and the obligations (the responsibilities of citizenship — voting, jury service, taxes — and the legal meaning of citizenship itself).",
        },
        {
          code: "9-12.Civ.47",
          text: "Plan and demonstrate some ways in which an active citizen can effect change in the community, state, nation, or world.",
          claimIds: [
            "civics.show-up-every-level",
            "civics.run-for-office",
            "civics.campaign-help",
            "civics.track-a-bill",
            "civics.nm-get-involved",
          ],
          coverage: "full",
          note: "Multiple concrete pathways are taught as practice: showing up at every level of government, running for office, helping a campaign lawfully, tracking a live bill, and New Mexico's own on-ramps (including serving in the unpaid Legislature as civic volunteering).",
        },
        {
          code: "9-12.Civ.49",
          text: "Take informed action to improve your community.",
          claimIds: ["civics.show-up-every-level", "civics.nm-get-involved"],
          coverage: "partial",
          note: "Partial: showing up locally and New Mexico's civic on-ramps are taught as practice, but the “take informed action” project itself is prompted rather than run as a graded assignment.",
        },
        // — Inquiry standards: the source-evaluation method —
        {
          code: "9-12.Civ.3",
          text: "Gather relevant information from multiple sources representing a wide range of views while using the origin, authority, structure, context, and corroborative value of the sources to guide the selection.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.whose-voice-differing-accounts"],
          coverage: "partial",
          note: "Partial: multi-source evaluation using origin, authority, and corroborative value — differing accounts of the same event set side by side, with a checkable bibliography — is modeled throughout the BVC curriculum. The standard's full inquiry-selection process for a student's own research question is exercised only where a graded project runs.",
        },
        {
          code: "9-12.Civ.10",
          text: "Critique the use of claims and evidence in arguments for credibility.",
          claimIds: ["bvc.evaluate-claims-fallacies", "bvc.source-evaluation-modelled", "media.misleading-statistics"],
          coverage: "full",
          note: "Critiquing claims and evidence for credibility — identifying fallacious reasoning, cherry-picked statistics and truncated charts, and modeling source evaluation — is taught head-on across the media-literacy curriculum.",
        },
      ],
    },

    // ── NM Social Studies — High School Economics ─────────────────────────
    {
      id: "nm-economics",
      subject: "Social Studies",
      name: "New Mexico Social Studies Standards — High School Economics",
      publisher: "New Mexico Public Education Department (NMPED)",
      version: "New Mexico Social Studies Standards, February 2022 (effective 2023) · High School Economics",
      fetchedOn: "2026-07-19",
      sourceUrl: NM_SS,
      adoption:
        "New Mexico's High School Economics course, coded 9-12.Econ.<n>. The BVC commodity curriculum's economics — value chains, market price, comparative economic systems, globalization, and trade — maps to the trade-and-markets standards; New Mexico's personal-financial-literacy and market-structure standards are not claimed (see notClaimed). Transcribed verbatim from the NMPED 2022 Social Studies Standards.",
      standards: [
        {
          code: "9-12.Econ.18",
          text: "Analyze the production, distribution, and consumption of goods and services.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: production and distribution are taught in depth through real commodity value chains — where commodities grow and why, and who is paid what along the chain (the smile curve). A general goods-and-services production and consumption unit is not.",
        },
        {
          code: "9-12.Econ.20",
          text: "Compare the advantages and disadvantages of major economic systems found around the world.",
          claimIds: ["bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial: traditional (reciprocity) and market economies are contrasted directly and at length. Command and mixed-socialist systems, and a full survey of the world's economic systems, are not worked.",
        },
        {
          code: "9-12.Econ.21",
          text: "Critique inequalities that exist in economic systems.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "Partial: economic inequality is critiqued head-on through commodity value chains — the smile curve, the commodity trap that keeps producers poor while value accrues downstream, and colonialism's persistence — but as commodity-system inequality specifically, not a general treatment.",
        },
        {
          code: "9-12.Econ.28",
          text: "Evaluate how a variety of factors and conditions in a market determine price and the allocation of scarce goods and resources.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Partial: price formation is taught through a worked commodity case — a Brazilian frost moving world coffee prices, and why inelastic demand absorbs the spike. A general supply-and-demand and resource-allocation unit is not.",
        },
        {
          code: "9-12.Econ.40",
          text: "Explain how current globalization trends and policies affect economic growth, labor, markets, rights of citizens, the environment, and resource and income distribution in different nations.",
          claimIds: ["history.nafta-usmca-labor", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: globalization's effect on labor and income distribution is taught through NAFTA→USMCA (the Rapid Response Mechanism and its limits) and the commodity trap's downstream value capture. The environmental and citizen-rights clauses are not worked.",
        },
        {
          code: "9-12.Econ.43",
          text: "Analyze why a country might participate in global trade.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: why regions trade — the geography of where commodities grow, how that distribution drives trade, and who earns from it — is taught. A formal comparative-advantage framework is not.",
        },
        {
          code: "9-12.Econ.44",
          text: "Connect how trade agreements between nations have short- and long-term effects.",
          claimIds: ["history.nafta-usmca-labor"],
          coverage: "partial",
          note: "Partial: taught through one worked case — NAFTA→USMCA and its short- and long-term labor effects, through to the Rapid Response Mechanism. Not a general treatment of trade agreements.",
        },
      ],
    },

    // ── NM Social Studies — High School World History ─────────────────────
    {
      id: "nm-world-history",
      subject: "Social Studies",
      name: "New Mexico Social Studies Standards — High School World History",
      publisher: "New Mexico Public Education Department (NMPED)",
      version: "New Mexico Social Studies Standards, February 2022 (effective 2023) · High School World History",
      fetchedOn: "2026-07-19",
      sourceUrl: NM_SS,
      adoption:
        "New Mexico's High School World History course, coded 9-12.WH.<n>. Its standards are framed as historical-thinking skills applied to world history; the BVC commodity, colonial, labor, and Cold-War history exercises several of them on specific cases. New Mexico's own New Mexico History (9-12.NMH), Geography, and Ethnic/Cultural/Identity strands are not claimed (see notClaimed). Transcribed verbatim from the NMPED 2022 Social Studies Standards.",
      standards: [
        {
          code: "9-12.WH.26",
          text: "Analyze and evaluate the values and limitations of primary and secondary sources of information (including digital) with attention to the source, its context, reliability, and usefulness.",
          claimIds: ["bvc.source-evaluation-modelled", "bvc.middle-passage-primary-sources", "bvc.author-rhetoric-primary-texts"],
          coverage: "full",
          note: "Analyzing primary and secondary sources for their values and limitations — context, reliability, usefulness — is modeled throughout, including the primary-source accounts of formerly enslaved writers and the analysis of author rhetoric in effective primary texts.",
        },
        {
          code: "9-12.WH.29",
          text: "Use a variety of source materials to compare and contrast treatments of the same topic.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.whose-voice-absence"],
          coverage: "full",
          note: "Comparing differing accounts of the same event side by side, and reading a text for what it leaves out against first-person accounts, is the “Whose Voice” method run repeatedly across the curriculum.",
        },
        {
          code: "9-12.WH.12",
          text: "Evaluate methods people use to create, change, expand, or oppose systems of power and authority.",
          claimIds: [
            "bvc.imperialism-africa-asia-oceania",
            "bvc.plantation-economy-resistance",
            "bvc.haitian-revolution",
            "history.gilded-age-labor",
          ],
          coverage: "partial",
          note: "Partial: methods of building and opposing power are taught through colonial and plantation systems, the resistance to them (Maroon communities, the Haitian Revolution), and the Gilded Age labor movement. The standard is a broad skill the courses exercise on specific cases rather than survey.",
        },
        {
          code: "9-12.WH.13",
          text: "Evaluate the impact of global interconnectedness on international economic stability and growth.",
          claimIds: ["history.nafta-usmca-labor", "bvc.commodity-trap"],
          coverage: "partial",
          note: "Partial: interconnectedness is evaluated through trade integration (NAFTA→USMCA) and the commodity trap's downstream value capture. A general treatment of international economic stability and growth is not.",
        },
        {
          code: "9-12.WH.16",
          text: "Identify, evaluate, and explain the causes, characteristics, and impact of diffusion: the spread of ideas, beliefs, religions, cultural practices and traits, language, artifacts, methods, technologies, and diseases across space and over time.",
          claimIds: ["bvc.conquest-columbian-exchange", "bvc.agricultural-hearths", "bvc.tea-trade-networks"],
          coverage: "partial",
          note: "Partial: diffusion is taught through the Columbian Exchange (crops and diseases across the Atlantic), agricultural hearths and the exchange of crops among regions, and commodity trade networks (the Tea Horse Road and the Maritime Silk Road). The standard's fuller list — religions, artifacts, language — is not the focus.",
        },
        {
          code: "9-12.WH.30",
          text: "Examine historical events from the perspectives of diverse groups, including Indigenous peoples, national, regional, racial, ethnic, class, and gender, sexual orientation, and differently abled.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.middle-passage-primary-sources", "bvc.imperialism-africa-asia-oceania"],
          coverage: "partial",
          note: "Partial: events are examined from the perspectives of the colonized and enslaved — the Whose Voice method, formerly enslaved writers' accounts, and imperialism seen from the perspective of indigenous peoples. The standard's fuller list of groups (gender, sexual orientation, differently abled) is not covered.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no New Mexico Common Core mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "New Mexico adopted the NGSS in 2018 as the NM STEM Ready! Science Standards, so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. The six New Mexico-specific standards added to the NGSS are New Mexico's own; none is HS-ESS3-1, and this catalog has no laboratory work, investigation, or modelling, so we claim nothing there.",
    },
    {
      heading: "The New Mexico History (NMH) strand — not the catalog's content.",
      body: "New Mexico's High School New Mexico History course (9-12.NMH) is about New Mexico's own past: the Treaty of Guadalupe Hidalgo and its Article IX/X guarantees, the Homestead Act's effect on New Mexico, the boarding-school system and its ramifications on Indigenous peoples, the path to 1912 statehood, the Dust Bowl in New Mexico, and the atomic bomb and Cold-War testing sites born in New Mexico. The flagship civics course and the BVC curriculum do not teach this state-specific history, so we claim none of it. The New Mexico Civics course names the sovereign tribal nations but does not teach federal Indian policy or tribal sovereignty's interpretation over time (9-12.Civ.20, 9-12.NMH.26).",
    },
    {
      heading: "Geography and Ethnic, Cultural, and Identity Studies strands — not claimed.",
      body: "New Mexico's Geography strand (location/place/region, movement and systems, human-environment interaction) and its Ethnic, Cultural, and Identity Studies strand are not genuinely taught by these courses as their own content, so we claim neither. Where the BVC curriculum touches geographic diffusion, it is claimed under World History 9-12.WH.16, not the Geography strand.",
    },
    {
      heading: "The political-media civics standards.",
      body: "9-12.Civ.42 (the effects of media organizations, including internet social platforms, on elections and social movements) and 9-12.Civ.43 (bias in the media and its impact on government decision making) are political-media analysis. Our media-literacy course is consumer protection — reading ads and claims for omission and fallacy — not political-media analysis, so we do not claim these; the source-evaluation skill they share is claimed instead under the inquiry standards 9-12.Civ.3 and 9-12.Civ.10.",
    },
    {
      heading: "Most of the High School Civics inquiry standards, and the federal-heavy content standards we checked.",
      body: "The inquiry standards 9-12.Civ.1, .2, .4-.9, .11, .12 (constructing compelling/supporting questions, argument and explanation construction, taking informed action as named skills) are procedures the courses exercise but do not deliver as a unit. On the content side, 9-12.Civ.16-.22 (groups without formal power, equality/equity/justice as named concepts, government-civil-society-market relationships, comparative systems, Indigenous-U.S. relations over time, and foreign policy), 9-12.Civ.25-.27 (using and challenging laws, public-policy outcomes, means of changing societies), and 9-12.Civ.32-.44/.46/.48 (civic dispositions and democratic principles as named concepts, founding-document interpretation over time, political socialization, leadership case studies, and the political-media standards) are not genuinely taught, so we do not claim them.",
    },
    {
      heading: "Economics standards beyond trade and commodity markets.",
      body: "New Mexico's High School Economics course also covers personal financial literacy, cost-benefit and marginal analysis, market structures and competition, financial institutions and money, government market intervention, fiscal and monetary policy, and macroeconomic indicators (9-12.Econ.13-.17, .19, .22-.39, .41, .42, .45-onward). This catalog teaches commodity markets, comparative economic systems, and the labor side of trade — not personal finance or macroeconomic measurement — so it claims only the trade-and-markets standards mapped above.",
    },
    {
      heading: "Most World History standards, and the New Mexico's-own-structure detail no single code captures.",
      body: "New Mexico's World History standards not mapped above (9-12.WH.1-.11, .14, .15, .17-.25, .27, .28, .31) are historical-thinking and content skills the courses do not exercise cleanly enough to claim. And the New Mexico Civics flagship teaches more of New Mexico's own structure than any one code captures — the only unpaid state legislature in the nation, the appoint-then-partisan-elect-then-retain judiciary, and the powerful Commissioner of Public Lands — with 9-12.Civ.29/30/31 hosting most of it.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "New Mexico's closest frameworks (Computer Science, World Languages) have not been fetched and verified yet — and web.ped.nm.gov's captcha challenge blocked automated retrieval this pass. Our rule is fetch-or-don't-cite, so these courses carry no New Mexico claims this pass.",
    },
  ],
};
