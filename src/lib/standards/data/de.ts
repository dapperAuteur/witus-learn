// ─────────────────────────────────────────────────────────────────────────────
// DELAWARE — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-de` (Delaware Civics: How Your State Government Works) was written FROM
// Delaware's own official sources (legis.delaware.gov, elections.delaware.gov,
// courts.delaware.gov, the 1897 Constitution), so Delaware's civics flagship gets its 1:1
// state-civics course. Delaware is INHERIT-heavy with a bespoke Social-Studies frame.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from Delaware's own record:
//   · ELA — INHERITED (Common Core). Delaware adopted the Common Core State Standards for ELA
//     in 2010 (a Race to the Top state) and publishes them today as the "Delaware ELA/Literacy
//     Standards"; the DDOE standards page even carries the CCSS's own framing that the standards
//     "must be complemented by a well-developed, content-rich curriculum." The standard TEXT is
//     the Common Core verbatim, so we adopt ../shared/common-core-ela. CODE STYLE CAVEAT (labeled
//     fallback, per the authoritative-values rule): we cite the CANONICAL Common Core codes
//     (CCSS.ELA-Literacy.RH.11-12.6, …) as published by the CCSS Initiative. We could not obtain
//     Delaware's own ELA PDF to confirm whether it reprints the bare strand codes (RH.11-12.6)
//     the way Michigan does; that is a cosmetic difference that does not change the standard's
//     identity or text, and we ADD NO ALIASES rather than guess Delaware's print form.
//   · Science — INHERITED (NGSS, verbatim). Delaware was one of the 26 NGSS lead-state partners
//     and became the 7TH state to adopt the NGSS, by a unanimous State Board vote on
//     September 19, 2013. We adopt ../shared/ngss verbatim, no aliases.
//   · Social studies — BESPOKE. Delaware's long-standing Social Studies Standards are four strands
//     (Civics, Economics, Geography, History), each an anchor "standard" with grade-cluster "End
//     of Cluster Expectations." The Civics strand's four anchor standards — Government, Politics,
//     Citizenship, Participation — are the home for the Delaware flagship; the Economics/Geography/
//     History strands host the BVC commodity, colonial, and labor catalog. Mapped at the Grades
//     9-12 cluster level.
//
// Provenance: the Delaware Social Studies Standards are hosted and maintained by the University of
// Delaware's Delaware Social Studies Education Project (DSSEP), the DOE-affiliated project that
// authored them. education.delaware.gov's social-studies pages are JavaScript-rendered and return
// no benchmark text to automated fetches, so the four strands' Grades 9-12 End of Cluster
// Expectations were transcribed VERBATIM from the DSSEP byte-faithful mirror (fetched 2026-07-19):
//   · Civics    — https://www1.udel.edu/dssep/standards/DEcivics.doc
//   · Economics — https://www1.udel.edu/dssep/standards/DEeconomics.doc
//   · Geography — https://www1.udel.edu/dssep/standards/DEgeography.doc
//   · History   — https://www1.udel.edu/dssep/standards/DEhistory.doc
//   (cross-checked against https://www1.udel.edu/dssep/benchmarks/bench912.html)
// `sourceUrl` below is the canonical DDOE social-studies standards page. Delaware's four separate
// strand documents use inconsistent lead-in casing for the 9-12 expectations (the Civics document
// capitalizes "Students will …"; the Economics/Geography/History documents print "students will
// …"); we transcribe each strand's expectation as printed. Typographic apostrophes are normalized
// to straight quotes, consistent with the shared frameworks — the words are verbatim.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const DE_SS =
  "https://education.delaware.gov/educators/academic-support/standards-and-assessments/social-studies/standards/";

export const JURISDICTION: JurisdictionFile = {
  state: "DE",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      adoption:
        "Delaware adopted the Common Core State Standards for English language arts in 2010 (as a Race to the Top state) and publishes them today as the Delaware ELA/Literacy Standards — the DDOE standards page carries the CCSS's own “must be complemented by a well-developed, content-rich curriculum” framing. The standard text is the Common Core verbatim. We cite the canonical CCSS codes as published by the CCSS Initiative; we could not obtain Delaware's own ELA PDF to confirm whether it reprints the bare strand codes (RH.11-12.6) rather than the CCSS web-namespace form, so we add no aliases — a cosmetic difference that does not change the standard's identity or text. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "Delaware was one of the 26 NGSS lead-state partners and became the 7th state to adopt the Next Generation Science Standards, by a unanimous State Board of Education vote on September 19, 2013 — the NGSS performance expectations, using the NGSS codes verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── Delaware Social Studies Standards (Civics · Economics · Geography · History) ──
    {
      id: "de-social-studies",
      subject: "Social Studies",
      name: "Delaware Social Studies Standards — Civics, Economics, Geography, and History (End of Cluster Expectations, Grades 9-12)",
      publisher: "Delaware Department of Education (DDOE) / Delaware Social Studies Education Project",
      version: "Delaware Social Studies Standards · Grades 9-12 End of Cluster Expectations",
      fetchedOn: "2026-07-19",
      sourceUrl: DE_SS,
      adoption:
        "Delaware's Social Studies Standards are four anchor strands (Civics, Economics, Geography, History), each with grade-cluster End of Cluster Expectations. The Civics strand's four anchor standards — Government, Politics, Citizenship, and Participation — anchor the Delaware Civics flagship; the Economics, Geography, and History strands host the BVC commodity, colonial, and labor catalog. We cite each strand's Grades 9-12 expectation as printed (see the file header for the DSSEP provenance and the casing note).",
      standards: [
        // — Civics strand (the flagship's home) —
        {
          code: "Civics Standard Three (Citizenship), Grades 9-12",
          text: "Students will understand that citizens are individually responsible for keeping themselves informed about public policy issues on the local, state, and federal levels; participating in the civic process; and upholding the laws of the land.",
          claimIds: ["civics.de-get-involved", "civics.citizenship-responsibilities", "civics.voter-registration"],
          coverage: "full",
          note: "The benchmark's exact triad is the flagship's “how to take part” lesson: keeping informed on public-policy issues, participating in the civic process (registering and voting, showing up at county, city, and school-board meetings, contacting legislators), and upholding the law — taught for the local and state levels Delaware's course centers, with the general civics courses covering the federal level.",
        },
        {
          code: "History Standard Two (Analysis), Grades 9-12 — primary and secondary sources",
          text: "students will examine and analyze primary and secondary sources in order to differentiate between historical facts and historical interpretations.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.whose-voice-absence", "history.migration-primary-sources"],
          coverage: "full",
          note: "The Whose Voice method is exactly this: a planter's euphemistic account read against first-person narratives by formerly enslaved writers, the documentary record read against the oral record, and a repeated unsupported statistic exposed — teaching students to separate historical fact from interpretation using primary and secondary sources.",
        },
        {
          code: "History Standard Three (Interpretation), Grades 9-12",
          text: "students will compare competing historical narratives, by contrasting different historians' choice of questions, use and choice of sources, perspectives, beliefs, and points of view, in order to demonstrate how these factors contribute to different interpretations.",
          claimIds: ["bvc.whose-voice-differing-accounts", "bvc.nearest-green-oral-history"],
          coverage: "full",
          note: "Comparing competing historical narratives by contrasting authors' questions, sources, and points of view is the curriculum's signature move — the Nathan Green lesson sets the documentary record against the oral record and teaches why they differ and how historians choose.",
        },
        {
          code: "Economics Standard Four (International Trade), Grades 9-12",
          text: "students will analyze and interpret the influence of the distribution of the world's resources, political stability, national efforts to encourage or discourage trade, and the flow of investment on patterns of international trade.",
          claimIds: [
            "bvc.growing-belts-resource-maps",
            "bvc.sugar-program-trade-barriers",
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
          ],
          coverage: "full",
          note: "This is the BVC commodity series' spine: how the distribution of the world's growing regions and resources, national efforts to encourage or discourage trade (the U.S. sugar program's quotas and tariffs), and where value and investment flow shape real patterns of international trade in coffee, sugar, cacao, and more.",
        },
        {
          code: "Civics Standard One (Government), Grades 9-12",
          text: "Students will analyze the ways in which the structure and purposes of different governments around the world reflect differing ideologies, cultures, values, and histories.",
          claimIds: [
            "civics.de-constitution-unique",
            "civics.de-executive-legislature",
            "civics.de-courts",
            "civics.de-local-government",
          ],
          coverage: "partial",
          note: "Partial: the course analyzes the structure and purposes of ONE government in depth — Delaware's — and how they reflect its own ideology, values, and history (a legislature-centered constitutional tradition, a business-law judiciary, and the pride of being “The First State”). The benchmark's comparison of different governments around the world is not the course's method, so this is claimed as partial.",
        },
        {
          code: "Civics Standard Two (Politics), Grades 9-12 — the dynamic process of government",
          text: "Students will understand that the functioning of the government is a dynamic process which combines the formal balances of power incorporated in the Constitution with traditions, precedents, and interpretations which have evolved over the past 200 years.",
          claimIds: ["civics.de-constitution-unique", "civics.de-chancery", "civics.de-courts", "civics.de-lawmaking"],
          coverage: "partial",
          note: "Partial, applied to Delaware: the course teaches the formal balances of power in Delaware's Constitution of 1897 (the amendment process, the veto and three-fifths override, appointment-and-confirmation of judges) alongside the traditions, precedents, and interpretations that have evolved around them — the Court of Chancery's deep body of business-law precedent and the litigated major-party balance rule. It is not the general 200-year survey of the U.S. Constitution the benchmark frames.",
        },
        {
          code: "Civics Standard Four (Participation), Grades 9-12 — working with government agencies",
          text: "Students will develop and employ the skills necessary to work with government programs and agencies.",
          claimIds: ["civics.de-get-involved", "civics.show-up-every-level"],
          coverage: "partial",
          note: "Partial: the course develops skills to engage Delaware's government bodies directly — registering and confirming rules with the Department of Elections, attending county council/Levy Court, municipal, and school-board meetings, and contacting legislators — but it does not walk through navigating government programs and agencies as a service-access skill, so this is claimed as partial.",
        },
        {
          code: "Economics Standard One (Microeconomics), Grades 9-12",
          text: "Students will demonstrate how individual economic choices are made within the context of a market economy in which markets influence the production and distribution of goods and services.",
          claimIds: ["bvc.price-elasticity-demand", "bvc.value-chain-earnings"],
          coverage: "partial",
          note: "Partial: individual economic choices inside a market are taught through real commodity markets — how a supply shock and inelastic demand move prices, and how market structure along the chain distributes earnings — rather than as a general microeconomics unit.",
        },
        {
          code: "Economics Standard Three (Economic Systems), Grades 9-12",
          text: "Students will analyze the wide range of opportunities and consequences resulting from the current transitions from command to market economies in many countries.",
          claimIds: ["history.solidarnosc-cold-war", "history.poland-1989-democratization", "bvc.traditional-vs-market-economies"],
          coverage: "partial",
          note: "Partial: the benchmark's transition “from command to market economies” is taught through one worked case in real depth — Poland's move from a command economy to a market one, through Solidarność and the 1989 negotiated exit — alongside a direct comparison of reciprocity (traditional) and market economies. It is not a survey of many countries' transitions.",
        },
        {
          code: "Geography Standard Two (Environment), Grades 9-12",
          text: "students will understand the Earth's physical environment as a set of interconnected systems (ecosystems) and the ways humans have perceived, reacted to, and changed environments at local to global scales.",
          claimIds: ["bvc.climate-resources-shape-humans", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: how the physical environment shapes and is shaped by human activity is the curriculum's method — volcanic soil and altitude deciding what grows, climate change redrawing the growing belts — but it is taught through commodity agriculture, not as a general treatment of Earth's interconnected ecosystems.",
        },
        {
          code: "Geography Standard Three (Places), Grades 9-12",
          text: "students will understand the processes which result in distinctive cultures, economic activity, and settlement formation in particular locations across the world.",
          claimIds: ["bvc.growing-belts-resource-maps", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "Partial: the processes that give particular places distinctive cultures and economic activity are taught through the commodity map — why coffee, sugar, and cacao regions developed as they did, and how colonial cash-crop systems still shape them — rather than as a systematic world-cultures survey.",
        },
        {
          code: "History Standard One (Chronology), Grades 9-12",
          text: "students will analyze historical materials to trace the development of an idea or trend across space and over a prolonged period of time in order to explain patterns of historical continuity and change.",
          claimIds: ["history.gilded-age-labor", "history.wagner-act", "history.nafta-usmca-labor", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "Partial: tracing an idea across a prolonged period is done for the arc of American labor (the Gilded Age through the Wagner Act to NAFTA/USMCA) and for how colonial cash-crop systems persist into the present — genuine continuity-and-change work, though not a general chronological-reasoning program.",
        },
        {
          code: "History Standard Two (Analysis), Grades 9-12 — research strategies",
          text: "students will develop and implement effective research strategies for investigating a given historical topic.",
          claimIds: ["bvc.coffee-project-research-process", "bvc.coffee-project-synthesis"],
          coverage: "partial",
          note: "Partial: the Coffee episode's project has students develop and run a research strategy on a historical topic, but it is one graded project in one episode, so we do not claim a sustained research program.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Delaware (Common Core) mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Delaware was an NGSS lead state and the 7th state to adopt the NGSS verbatim (unanimous State Board vote, September 19, 2013), so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "Two Civics 9-12 expectations we checked and rejected.",
      body: "Civics Standard Two 9-12 (“examine and analyze the extra-Constitutional role that political parties play in American politics”) is not taught: Delaware Civics teaches the CONSTITUTIONAL major-party balance rule on Delaware's courts, which is the opposite of an extra-Constitutional party analysis. Civics Standard Four 9-12 (“understand the process of working within a political party, a commission engaged in examining public policy, or a citizen's group”) is likewise not taught — the course teaches running for local office and attending public boards, not working inside a party, commission, or advocacy group. The courses do not genuinely teach these, so we do not claim them.",
    },
    {
      heading: "Economics — Macroeconomics is not taught.",
      body: "Economics Standard Two 9-12 (how economies function as a whole — inflation, unemployment, business cycles, and monetary and fiscal policies) is not taught by this catalog. The BVC economics is microeconomic and trade-focused (commodity prices, value chains, trade barriers), so we claim the Microeconomics, Economic Systems, and International Trade expectations and reject Macroeconomics.",
    },
    {
      heading: "Geography — Maps (excluded as unverifiable here) and Regions.",
      body: "The Commodity Map itself would map to Geography Standard One (Maps), but that strand's Grades 9-12 expectation is a bulleted, multi-part standard (mapped patterns analyzed through hierarchy, accessibility, diffusion, and complementarity, each with its own parenthetical definition) that we could not reproduce cleanly verbatim in a single entry — verbatim-or-nothing, so we exclude it rather than paraphrase, and note the gap here. Geography Standard Four (Regions) is not genuinely taught. The gap on Maps is in our transcription, not the lessons.",
    },
    {
      heading: "History — the Content strand's Delaware connection.",
      body: "History Standard Four 9-12 asks for modern United States and world history “and its connections to Delaware history.” The catalog teaches world and U.S. history at real depth, but not Delaware's own history, which the benchmark centers — so we map the History strand's analytical expectations (Chronology, Analysis, Interpretation) and do not claim the Content strand.",
    },
    {
      heading: "The AI-literacy ladder, the language courses, and Learning How to Learn — deferred, not denied.",
      body: "Delaware's closest frameworks (Computer Science, World Languages) have not been fetched and verified yet. Our rule is fetch-or-don't-cite, so these courses carry no Delaware claims this pass.",
    },
  ],
};
