// ─────────────────────────────────────────────────────────────────────────────
// TENNESSEE — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-tn` was written FROM Tennessee's own official sources (capitol.tn.gov, sos.tn.gov,
// tncourts.gov, and the 1870 Tennessee Constitution), so Tennessee's civics flagship gets its 1:1
// state-civics course — and a genuine home in the standards, because Tennessee's required United
// States Government and Civics course carries a dedicated "Tennessee State and Local Government"
// strand (GC.28–GC.30) that names Tennessee's own institutions explicitly.
//
// THE BESPOKE CALL (Tennessee writes all of its own K-12 standards):
//   · Social studies — BESPOKE. The Tennessee Academic Standards for Social Studies (adopted 2019,
//     the operative standards) are Tennessee's own. Every code below is transcribed verbatim from
//     that document. Some standards are flagged "(T.C.A. § …)" in the standard text and are legally
//     required to be taught; that citation is part of the verbatim text and is transcribed as-is.
//   · English language arts / mathematics — BESPOKE and NOT Common Core. Tennessee withdrew from
//     the Common Core and adopted its own Tennessee Academic Standards for ELA and Math, which live
//     in SEPARATE framework documents we did not fetch this pass. Our rule is fetch-or-don't-cite,
//     so Tennessee gets no ELA or math claim; see notClaimed.
//   · Science — BESPOKE. The Tennessee Academic Standards for Science are Tennessee's own (not the
//     NGSS), also a separate document not fetched this pass; no science claim. See notClaimed.
//
// Provenance: tn.gov refuses connections from our tooling, so the document was retrieved through the
// Wayback Machine and transcribed from the archived copy of the state's own titled PDF (Tennessee
// Social Studies Standards / Tennessee Academic Standards for Social Studies), fetched 2026-07-18:
//   · byte-faithful mirror: https://web.archive.org/web/20260711150551id_/https://www.tn.gov/content/dam/tn/education/standards/ss/Social_Studies_Standards.pdf
//   · canonical source (sourceUrl below): https://www.tn.gov/content/dam/tn/education/standards/ss/Social_Studies_Standards.pdf
// CODES: Tennessee prints one code per standard (GC.28, E.47, W.24, US.28), transcribed verbatim.
// Several standards print bulleted sub-lists in the document's two-column layout; where we cite one,
// the sub-items are transcribed inline (their wording verbatim; the two-column visual order
// normalized to a single reading order).
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const SS_2019 =
  "https://www.tn.gov/content/dam/tn/education/standards/ss/Social_Studies_Standards.pdf";
const PUBLISHER = "Tennessee Department of Education / Tennessee State Board of Education";
const VERSION = "Tennessee Academic Standards for Social Studies (adopted 2019)";

export const JURISDICTION: JurisdictionFile = {
  state: "TN",
  frameworks: [
    // ── United States Government and Civics [GC] ──
    {
      id: "tn-us-government-civics",
      subject: "Social Studies",
      name: "Tennessee Academic Standards for Social Studies — United States Government and Civics",
      publisher: PUBLISHER,
      version: VERSION,
      fetchedOn: "2026-07-18",
      sourceUrl: SS_2019,
      adoption:
        "Tennessee's required high-school United States Government and Civics course is the anchor for the state's civic content. Most of its standards are about the FEDERAL system, but a dedicated 'Tennessee State and Local Government' strand (GC.28–GC.30) names Tennessee's own executive, legislative, and judicial branches and its county/city/metro local government explicitly — that is where Tennessee Civics (the flagship, written from Tennessee's own sources) is mapped, alongside the general civics ladder. Codes are transcribed verbatim.",
      standards: [
        {
          code: "GC.28",
          text: "Identify the functions of departments and agencies of the executive, legislative, and judicial branches in the state of Tennessee.",
          claimIds: ["civics.tn-state-structure"],
          coverage: "full",
          note: "This is the flagship's home: Tennessee's own three branches are taught in depth — the General Assembly (99 House, 33 Senate), the highly unusual executive (the Governor as the only statewide-elected officer, the Senate Speaker titled 'Lieutenant Governor,' the Secretary of State/Treasurer/Comptroller elected by the Legislature, and the Attorney General appointed by the state Supreme Court), and the 'Tennessee Plan' judiciary.",
        },
        {
          code: "GC.29",
          text: "Explain the differences among the types of local governments in Tennessee, including county, city, and metro governments, as well as the legal, fiscal, and operational relationships between them and the state government.",
          claimIds: ["civics.tn-local-government", "civics.local-government-layers"],
          coverage: "full",
          note: "Tennessee local government is taught as Tennessee's: 95 counties under an elected county commission and county mayor, cities and towns, and the consolidated metropolitan government of Nashville-Davidson County — exactly the county/city/metro distinction the standard names.",
        },
        {
          code: "GC.30",
          text: "Identify the current governor of Tennessee and the representatives in the General Assembly (for a student’s respective district).",
          claimIds: ["civics.tn-state-structure"],
          coverage: "partial",
          note: "The office of Governor (Tennessee's only statewide-elected executive) and the structure of the General Assembly are taught as Tennessee's. Identifying the CURRENT governor and a student's own district representatives is a live lookup the course points learners to their own officials for, rather than asserting names that go stale.",
        },
        {
          code: "GC.05",
          text: "Describe the purposes and functions of government as outlined in the Preamble of the Constitution.",
          claimIds: ["civics.preamble-purposes"],
          coverage: "full",
          note: "The Preamble is worked clause by clause as the purposes of government.",
        },
        {
          code: "GC.03",
          text: "Identify the strengths and weaknesses of the Articles of Confederation.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "full",
          note: "Why the Articles of Confederation failed and how that led to the 1787 Constitution is taught as its own lesson.",
        },
        {
          code: "GC.04",
          text: "Discuss the Constitutional Convention of 1787, including the Great Compromise and the ensuing debate over ratification between the Federalists and Anti-Federalists.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "partial",
          note: "The move from the Articles to the 1787 Constitution is taught, but the Great Compromise and the Federalist/Anti-Federalist ratification debate are not worked in the detail the standard asks for.",
        },
        {
          code: "GC.06",
          text: "Describe limited government within the Constitution, including: Checks and balances, Popular sovereignty, Civilian control of the military, Rule of law, Federalism, Separation of powers, Judicial review.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "civics.judicial-review-marbury",
          ],
          coverage: "partial",
          note: "Most of the named principles — checks and balances, popular sovereignty, rule of law, federalism, separation of powers, and judicial review — are taught directly. Civilian control of the military, which the standard also lists, is not taught.",
        },
        {
          code: "GC.07",
          text: "Describe the structure of the Constitution and the process to amend it.",
          claimIds: ["civics.constitution-article-by-article", "civics.article-v-amendment"],
          coverage: "full",
          note: "The Constitution is analyzed article by article, and Article V's amendment procedure is taught with why the bar is so high.",
        },
        {
          code: "GC.08",
          text: "Analyze how the Bill of Rights limits the powers of the government and ensures individual rights. (T.C.A. § 49-6-1028)",
          claimIds: ["civics.bill-of-rights-origin", "civics.bill-of-rights-overview", "rights.limits-on-rights"],
          coverage: "full",
          note: "The Bill of Rights is taught as a document and as applicable rules, including when government may and may not constitutionally limit a right.",
        },
        {
          code: "GC.10",
          text: "Analyze Article I and the 17th Amendment of the Constitution as they relate to the legislative branch, including: eligibility for office, roles, length of terms, and election to office for representatives and senators, respectively.",
          claimIds: ["civics.federal-articles-i-iii"],
          coverage: "partial",
          note: "Article I and the legislative branch's structure are taught, but the 17th Amendment and the specific eligibility/term details for each chamber are not worked in full.",
        },
        {
          code: "GC.13",
          text: "Describe the process of how a bill becomes a law.",
          claimIds: ["civics.federal-bill-process"],
          coverage: "full",
          note: "The complete federal lawmaking process — committees through veto override — is taught, and gets an entire dedicated course.",
        },
        {
          code: "GC.15",
          text: "Describe the powers of U.S. Congress, including: Appropriations, Declaration of war, Commerce, Implied powers, Confirmations, Necessary and proper clause.",
          claimIds: ["civics.federal-powers-taxonomy", "civics.federal-articles-i-iii"],
          coverage: "partial",
          note: "Implied powers and the Necessary and Proper Clause are taught by name as part of the powers taxonomy (with McCulloch v. Maryland). The full enumerated-power list the standard names (appropriations, war, commerce, confirmations) is not surveyed item by item.",
        },
        {
          code: "GC.18",
          text: "Explain the Electoral College system, and compare and contrast arguments for and against it.",
          claimIds: ["civics.electoral-college"],
          coverage: "full",
          note: "Both halves the standard names — how the Electoral College works, and its original purpose and modern relevance — are taught as separate lessons.",
        },
        {
          code: "GC.19",
          text: "Analyze Article III of the Constitution as it relates to judicial power, including the length of terms and the jurisdiction of the U.S. Supreme Court.",
          claimIds: ["civics.federal-articles-i-iii", "civics.federal-judiciary-structure"],
          coverage: "full",
          note: "Article III and the federal judiciary's structure, life tenure, and jurisdiction are taught directly.",
        },
        {
          code: "GC.20",
          text: "Explain the processes of selection and confirmation of Supreme Court justices.",
          claimIds: ["civics.scotus-nomination-confirmation"],
          coverage: "full",
          note: "An entire lesson: Article II advice-and-consent, the Judiciary Committee, and the simple-majority rule after 2013/2017.",
        },
        {
          code: "GC.21",
          text: "Explain the process of judicial review established by Marbury v. Madison.",
          claimIds: ["civics.judicial-review-marbury"],
          coverage: "full",
          note: "Judicial review is taught by name, through Marbury v. Madison.",
        },
        {
          code: "GC.22",
          text: "Describe the Supreme Court’s role in determining the constitutionality of laws and acts of the legislative and executive branches.",
          claimIds: ["civics.judicial-review-marbury", "civics.federal-judiciary-structure"],
          coverage: "full",
          note: "The Court's power to determine constitutionality — and the checks on it — is taught in the judicial-branch course.",
        },
        {
          code: "GC.23",
          text: "Evaluate the Supreme Court’s interpretations of the freedoms articulated in the 1st Amendment, including: Schenck v. United States, New York Times v. United States, Engel v. Vitale, Miller v. California, Tinker v. Des Moines, Texas v. Johnson, Lemon v. Kurtzman.",
          claimIds: ["rights.landmark-cases", "rights.limits-on-rights", "rights.scotus-precedent"],
          coverage: "partial",
          note: "Tinker v. Des Moines, in the standard's own list, is taught as an applicable rule, and First Amendment interpretation and its limits are taught directly. Most of the other enumerated cases are different ones, so we claim the case-application skill, not the full list.",
        },
        {
          code: "GC.25",
          text: "Evaluate the Supreme Court’s interpretations of freedoms in the 4th through 8th Amendments, including: Mapp v. Ohio, Gideon v. Wainwright, Miranda v. Arizona.",
          claimIds: ["rights.landmark-cases"],
          coverage: "partial",
          note: "Mapp v. Ohio, which the standard names, is taught directly, alongside the other Fourth Amendment search-and-seizure cases (Terry, T.L.O., Riley, Carpenter). Gideon and Miranda are not taught individually.",
        },
        {
          code: "GC.31",
          text: "Describe what should be reasonably expected from any citizen or resident of the U.S., and explain why it is important for the well-being of the nation, including: Being informed on civic issues, Obeying the law, Paying taxes, Respecting the rights of others, Serving as a juror, Serving in the military or alternative service, Volunteering and performing public service, Voting.",
          claimIds: ["civics.citizenship-responsibilities", "civics.jury-service", "civics.voter-registration"],
          coverage: "full",
          note: "The responsibilities are taught as practices, not exhortation: voting and registration, jury service (an entire course), staying informed, and civic participation.",
        },
        {
          code: "GC.34",
          text: "Describe the means that citizens use to participate in the political process, including: Campaigning, Demonstrating, Lobbying, Petitioning, Running for office, Voting.",
          claimIds: [
            "civics.campaign-help",
            "civics.run-for-office",
            "civics.show-up-every-level",
            "civics.voter-registration",
          ],
          coverage: "full",
          note: "Participation is taught as practice at every level — helping a campaign lawfully, running for office, showing up locally, and voting — with the legal guardrails.",
        },
        {
          code: "GC.35",
          text: "Explain the requirements to be considered a natural-born U.S. citizen, and describe the process of naturalization, including the knowledge required by the Naturalization Test.",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "full",
          note: "Birthright citizenship (the 14th Amendment, jus soli) and naturalization eligibility — including the civics/English requirements the Naturalization Test covers — are taught step by step.",
        },
        {
          code: "GC.32",
          text: "Explain the role of political parties in the nomination process for presidential candidates and the importance of and difference between primaries, caucuses, and general elections.",
          claimIds: ["civics.election-mechanics"],
          coverage: "partial",
          note: "How primaries and caucuses work, and how they differ from general elections, is taught thoroughly. The parties' role in the nomination process is sketched, not traced.",
        },
      ],
    },

    // ── Economics [E] ──
    {
      id: "tn-economics",
      subject: "Social Studies",
      name: "Tennessee Academic Standards for Social Studies — Economics",
      publisher: PUBLISHER,
      version: VERSION,
      fetchedOn: "2026-07-18",
      sourceUrl: SS_2019,
      adoption:
        "Tennessee's Economics course is filed in the social studies department. The BVC commodity series supplies its price-behavior, labor-institution, and trade standards through real commodity markets. Codes are transcribed verbatim.",
      standards: [
        {
          code: "E.47",
          text: "Describe causes and consequences of trade barriers (e.g., quotas, tariffs, and subsidies) on consumers and producers.",
          claimIds: ["bvc.sugar-program-trade-barriers"],
          coverage: "full",
          note: "The U.S. sugar program is worked in detail as exactly this: import quotas, tariffs, and price supports, and the consumer cost they impose — causes and consequences of trade barriers on consumers and producers.",
        },
        {
          code: "E.20",
          text: "Summarize the role and historical impact of economic institutions (such as labor unions, multinationals, and nonprofit organizations) within market economies.",
          claimIds: ["history.gilded-age-labor", "history.wagner-act", "history.taft-hartley-patco"],
          coverage: "partial",
          note: "The role and historical impact of labor unions the standard names is taught in real depth — the Knights and the AFL, the Wagner Act, and the Taft-Hartley/PATCO rollback. The multinationals and nonprofits the standard also lists are not this catalog's subject.",
        },
        {
          code: "E.11",
          text: "Use concepts of price elasticity of demand and supply to explain and predict changes in quantity as prices fluctuate.",
          claimIds: ["bvc.price-elasticity-demand"],
          coverage: "partial",
          note: "Price elasticity of demand is taught explicitly — inelastic coffee demand absorbing a sharp price spike — but as one concept in context, not a full elasticity unit covering the supply side with schedules and graphs.",
        },
        {
          code: "E.45",
          text: "Explain the benefits of trade among individuals, regions, and countries.",
          claimIds: ["bvc.value-chain-earnings", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "The geography of trade in real products — where commodities grow and who captures their value along the chain — is the series' spine. The formal gains-from-trade framework (comparative advantage by name) is not taught.",
        },
        {
          code: "E.50",
          text: "Evaluate the arguments for and against free trade.",
          claimIds: ["bvc.value-chain-earnings", "bvc.commodity-trap", "bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Who wins and who loses from global trade is worked at length — value captured downstream, the commodity trap, and a protected market's costs. But it is taught as distribution and power along real commodity chains rather than as the formal for-and-against free-trade debate.",
        },
      ],
    },

    // ── World History and Geography: The Modern World [W] ──
    {
      id: "tn-world-history",
      subject: "Social Studies",
      name: "Tennessee Academic Standards for Social Studies — World History and Geography: The Modern World",
      publisher: PUBLISHER,
      version: VERSION,
      fetchedOn: "2026-07-18",
      sourceUrl: SS_2019,
      adoption:
        "Tennessee's modern World History course is where the BVC series' colonial and commodity history maps — 19th-century imperialism driven by the search for resources and markets, and the growing influence of western powers on China from the Opium Wars. Codes are transcribed verbatim.",
      standards: [
        {
          code: "W.24",
          text: "Explain the growing influence of western powers on China from the Opium Wars through the Boxer Rebellion.",
          claimIds: ["bvc.opium-wars", "bvc.imperialism-africa-asia-oceania"],
          coverage: "full",
          note: "The Opium Wars, their impact on China, and the western imperialism the opium trade advanced are taught in depth (Lin Zexu's letter; the trade that forced the wars).",
        },
        {
          code: "W.19",
          text: "Define imperialism, and analyze reasons for 19th century imperialism, including: competition between empires, cultural justifications, and the search for natural resources and new markets in response to rapid industrialization.",
          claimIds: ["bvc.imperialism-africa-asia-oceania", "bvc.colonialism-persists-today"],
          coverage: "partial",
          note: "The search for natural resources and new markets — the material engine of imperialism the standard names — is exactly this curriculum's method, worked through the cash-crop and commodity systems, and how colonial patterns persist today. The cultural-justification and inter-empire-competition framings are touched, not surveyed.",
        },
      ],
    },

    // ── United States History and Geography: Post-Reconstruction to the Present [US] ──
    {
      id: "tn-us-history",
      subject: "Social Studies",
      name: "Tennessee Academic Standards for Social Studies — United States History and Geography: Post-Reconstruction to the Present",
      publisher: PUBLISHER,
      version: VERSION,
      fetchedOn: "2026-07-18",
      sourceUrl: SS_2019,
      adoption:
        "Tennessee's post-Reconstruction United States History course is where the catalog's American labor, migration, and Prohibition history maps. Some standards are legally required to be taught (T.C.A. citations transcribed verbatim). Codes are transcribed verbatim.",
      standards: [
        {
          code: "US.28",
          text: "Analyze the impact of the Great Migration of African Americans that began in the early 1900s from the rural South to the industrial regions of the Northeast and Midwest. (T.C.A. § 49-6-1006)",
          claimIds: ["history.migration-streams-arrival", "history.jim-crow-and-long-shadow"],
          coverage: "full",
          note: "The Great Migration is taught end to end: the Jim Crow South people fled, the routes and railroads of the three streams, the arrival cities of the Northeast and Midwest, and the urban communities it created.",
        },
        {
          code: "US.11",
          text: "Explain the rise of the labor movement, union tactics (e.g., strikes), the role of leaders (e.g., Eugene Debs and Samuel Gompers), the unjust use of prison labor (e.g., Coal Creek labor saga), and the responses of management and government.",
          claimIds: ["history.gilded-age-labor", "history.triangle-fire-debs"],
          coverage: "partial",
          note: "The rise of the labor movement, union tactics (strikes), and the leaders the standard names (Debs, Gompers) are taught in real depth — the Knights and the AFL, Haymarket, Homestead, Pullman, the Triangle fire. The Coal Creek labor saga, a Tennessee-specific example, is not covered.",
        },
        {
          code: "US.37",
          text: "Describe the impacts of Prohibition on American society, including: the rise of organized crime, bootlegging, and speakeasies.",
          claimIds: ["bvc.prohibition"],
          coverage: "partial",
          note: "Prohibition is taught as its causes, its rhetoric (Selling Prohibition), and its results as a failed experiment. The standard's specific downstream impacts — organized crime, bootlegging, and speakeasies — are named in that story rather than worked as a unit.",
        },
        {
          code: "US.33",
          text: "Describe the Harlem Renaissance, its impact, and important figures, including (T.C.A. § 49-6-1006): Louis Armstrong, Duke Ellington, Langston Hughes, Zora Neale Hurston.",
          claimIds: ["history.harlem-renaissance-black-press"],
          coverage: "partial",
          note: "The Harlem Renaissance and the New Negro are taught, tied to the Black press and the Great Migration that made them possible. The specific figures the standard enumerates are not each profiled.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "The flagship's most distinctive Tennessee facts have no Tennessee code to cite.",
      body: "Tennessee Civics teaches, from Tennessee's own sources, the Attorney General appointed by the state Supreme Court (unique in the nation), the Senate Speaker who carries the title 'Lieutenant Governor,' the Secretary of State/Treasurer/Comptroller elected by the Legislature, the unusually weak simple-majority veto override, the 'Tennessee Plan' appointment-then-retention judiciary, the ABSENCE of any citizen initiative, and Tennessee's photo-ID and excuse-required-absentee voting rules. The 2019 standards' Tennessee State and Local Government strand (GC.28–GC.30) reaches Tennessee's branches and its county/city/metro local government, and that is where those lessons are mapped — but the standards do not separately name the Attorney-General arrangement, the weak veto, the no-initiative rule, or the voting specifics, so those flagship details carry no dedicated code. The gap is in the standards, not the course.",
    },
    {
      heading: "English language arts, mathematics, and science — Tennessee's own, and not fetched.",
      body: "Tennessee withdrew from the Common Core and writes its own Tennessee Academic Standards for ELA and Mathematics, and its own science standards (not the NGSS). Each lives in a separate framework document we did not retrieve this pass. Our rule is fetch-or-don't-cite, so Tennessee gets no ELA, math, or science claim — even though the catalog's source-evaluation and research work would likely map to Tennessee's ELA literacy standards once fetched.",
    },
    {
      heading: "The federal-heavy government standards we checked and did not claim.",
      body: "The United States Government and Civics course contains many standards beyond the ones above — GC.01 (European/classical roots), GC.02 (the Declaration's grievances), GC.09 (democracy vs. republic as defined terms), GC.11 (the census, redistricting, Baker v. Carr), GC.12/GC.16/GC.17 (leadership positions and executive departments as named lists), GC.14 (identify your current members of Congress), GC.24 (the Second Amendment), GC.26/GC.27 (the 14th Amendment case menu; Title IX and the ADA), and GC.33 (media's influence on public opinion — our media-literacy work is consumer protection, not political-media analysis). The courses do not genuinely teach these as written, so we do not claim them.",
    },
    {
      heading: "The rest of Economics, World History, and US History we checked.",
      body: "Economics standards on market structures, money and banking, fiscal and monetary policy, and macroeconomic measurement (E.16–E.44), and the personal-finance content, are not genuinely taught. World History beyond the two imperialism standards (the World Wars, the Cold War, the Berlin Conference case detail) and US History beyond labor, the Great Migration, Prohibition, and the Harlem Renaissance (American imperialism and the Spanish-American War, the New Deal, the World Wars, the civil-rights movement's full arc) are not claimed. The reject list is the evidence the map was not padded.",
    },
  ],
};
