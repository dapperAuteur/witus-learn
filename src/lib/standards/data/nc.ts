// ─────────────────────────────────────────────────────────────────────────────
// NORTH CAROLINA — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-nc` was written FROM North Carolina's own official sources (ncleg.gov,
// ncsbe.gov, sosnc.gov, nccourts.gov), so North Carolina's civics anchor course gets its
// flagship home here.
//
// What North Carolina actually adopted (verified against the NCDPI document itself, not assumed):
//   · Social studies — the North Carolina Standard Course of Study (NCSCOS) is North Carolina's
//     OWN framework (not Common Core, not the C3 codes verbatim). High-school civics is the
//     graduation-required course "Founding Principles of the United States of America and North
//     Carolina: Civic Literacy" (NCDPI State Course Code 4318), whose 2021 standards use the CL.*
//     prefix and are organized around a content-neutral Inquiry strand (I.*) plus five disciplinary
//     strands: Behavioral Sciences (CL.B), Civics and Government (CL.C&G), Economics (CL.E),
//     Geography (CL.G), and History (CL.H). The course is legislated by N.C. Session Law 2019-82
//     (House Bill 924). Several of its objectives name "the United States and North Carolina"
//     explicitly (CL.C&G.4.1, CL.C&G.4.3) or reach state and local government (CL.C&G.2.2,
//     CL.C&G.2.3, CL.C&G.3.7), so the North Carolina flagship's structure lessons have a genuine
//     home — mapped as partial, because the North Carolina half is taught and the federal half
//     lives in the general civics catalog.
//   · ELA — North Carolina writes its OWN 2017 ELA SCOS (Common Core-derived but with North
//     Carolina's own text and numbering). NOT fetched from an acceptable source this pass; see
//     notClaimed (fetch-or-don't-cite).
//   · Science — North Carolina writes its OWN science standards; it is NOT an NGSS state. Not
//     fetched this pass; see notClaimed.
//
// Provenance: www.dpi.nc.gov and files.nc.gov refuse connections from our tooling (HTTP 403), so
// the Civic Literacy standards PDF ("North Carolina Standards for the Founding Principles of the
// United States of America and North Carolina: Civic Literacy", NCDPI State Course Code 4318,
// Approved February 4, 2021) was transcribed from a byte-faithful mirror of NCDPI's own titled PDF
// hosted by Appalachian State University's Department of History
// (https://history.appstate.edu/sites/default/files/founding_principles_of_the_united_states_and_north_carolina_civic_literacy_standards_fall_2021_implementation.pdf);
// `sourceUrl` points to the canonical NCDPI page. Fetched 2026-07-18.
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

export const JURISDICTION: JurisdictionFile = {
  state: "NC",
  frameworks: [
    // ── Founding Principles: Civic Literacy (2021, NCDPI course 4318) ──────
    {
      id: "nc-civic-literacy",
      subject: "Social Studies",
      name: "North Carolina Standards for the Founding Principles of the United States of America and North Carolina: Civic Literacy",
      publisher: "North Carolina Department of Public Instruction (NCDPI)",
      version: "2021 · Approved February 4, 2021 · NCDPI State Course Code 4318",
      fetchedOn: "2026-07-18",
      sourceUrl:
        "https://www.dpi.nc.gov/founding-principles-united-states-america-and-north-carolina-civic-literacy-standards-fall-2021/open",
      adoption:
        "North Carolina's graduation-required high-school civics course (legislated by N.C. Session Law 2019-82, House Bill 924). Standards use the CL.* prefix across a content-neutral Inquiry strand (I.*) and five disciplinary strands (Behavioral Sciences, Civics and Government, Economics, Geography, History). The course is overwhelmingly about the founding principles and the federal system, with North Carolina named explicitly in the judicial, constitutional, federalism, local-government, and elections objectives — where the North Carolina flagship course is mapped, as partial. Inquiry indicators are cited at the sub-indicator (bullet) level, because the indicator category stems are short.",
      standards: [
        // — Civics and Government —
        {
          code: "CL.C&G.1.1",
          text: "Explain the influence of the founding principles on state and federal decisions using primary and secondary source documents.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.preamble-purposes",
            "civics.separation-checks-balances",
            "civics.nc-constitution",
          ],
          coverage: "partial",
          note: "Partial: the founding principles are worked through the Constitution article by article (the Preamble's purposes, separation of powers) using the founding documents themselves, and North Carolina's own 1971 constitution is taught in the flagship. A systematic study of how those principles shaped specific state and federal decisions is not the frame.",
        },
        {
          code: "CL.C&G.1.2",
          text: "Critique the consistency with which federal policies, state policies, and Supreme Court decisions have upheld the founding principles.",
          claimIds: ["rights.scotus-precedent", "rights.landmark-cases"],
          coverage: "partial",
          note: "Partial: the Supreme Court half is strong — how precedent expands rights, and the landmark cases as applicable rules — but a sustained critique of the consistency of federal and state POLICY is not taught.",
        },
        {
          code: "CL.C&G.2.1",
          text: "Compare how national, state, and local governments maintain order, security, and protect individual rights.",
          claimIds: [
            "civics.three-branches-federal",
            "civics.nc-council-of-state",
            "civics.local-government-layers",
            "civics.nc-local-government",
            "rights.landmark-cases",
          ],
          coverage: "partial",
          note: "Partial: all three levels are taught — the federal branches, North Carolina's own state executive (the Council of State, a plural elected executive) and General Assembly, what local government handles and why it varies, and North Carolina's counties and municipalities — plus rights protection through the landmark cases. A single side-by-side comparison of how each level 'maintains order and security' is not the frame.",
        },
        {
          code: "CL.C&G.2.2",
          text: "Explain how the principle of federalism impacts the actions of state and local government.",
          claimIds: [
            "civics.federalism-why-split-power",
            "civics.federal-powers-taxonomy",
            "civics.nc-local-government",
          ],
          coverage: "full",
          note: "Federalism is taught in depth — why power is split, the enumerated/implied/reserved/concurrent taxonomy with McCulloch v. Maryland — and North Carolina's Dillon's-Rule limit on what its local governments may do is the state-and-local application named by the standard.",
        },
        {
          code: "CL.C&G.2.3",
          text: "Differentiate between the types of local governments in order to understand the role, powers, and functions each plays within an intergovernmental system.",
          claimIds: ["civics.local-government-layers", "civics.nc-local-government"],
          coverage: "full",
          note: "Both the general treatment (what local government handles, why it varies, the special districts people forget) and North Carolina's own map — 100 counties under Boards of Commissioners, municipalities, no townships, all under limited home rule.",
        },
        {
          code: "CL.C&G.3.1",
          text: "Differentiate citizenship and civic participation in terms of responsibilities, duties, and privileges of citizens.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.us-citizenship-law",
            "civics.jury-service",
            "civics.voter-registration",
          ],
          coverage: "full",
          note: "The legal meaning of citizenship (the 14th Amendment, naturalization) and civic participation as practiced responsibilities — voting, jury service (an entire course), staying informed.",
        },
        {
          code: "CL.C&G.3.2",
          text: "Compare strategies used by individuals to address discrimination, segregation, disenfranchisement, reconcentration, and other discriminatory practices that have existed in the United States.",
          claimIds: [
            "history.labor-civil-rights",
            "history.migration-civil-rights-politics",
            "bvc.plantation-economy-resistance",
          ],
          coverage: "partial",
          note: "Partial: strategies against discrimination and disenfranchisement are taught through specific movements — plantation resistance and the Maroons, Randolph to Memphis, the Black urban vote the Great Migration created — but not as a systematic comparison of strategies.",
        },
        {
          code: "CL.C&G.3.3",
          text: "Summarize the changes in process, perception, and the interpretation of United States citizenship and naturalization.",
          claimIds: ["civics.us-citizenship-law"],
          coverage: "partial",
          note: "Partial: the legal meaning of citizenship and the naturalization process are taught (14th Amendment, jus soli, eligibility); the changes in 'perception' of citizenship over time are not a systematic thread.",
        },
        {
          code: "CL.C&G.3.7",
          text: "Assess the effectiveness of the election process at the national, state, and local levels.",
          claimIds: ["civics.election-mechanics", "civics.electoral-college", "civics.nc-elections"],
          coverage: "partial",
          note: "Partial: national election mechanics (registration through certification, the Electoral College) and North Carolina's own rules (one-stop early voting with same-day registration, no-excuse absentee, photo ID) are taught thoroughly; 'assessing effectiveness' is analysis the courses prompt but do not grade.",
        },
        {
          code: "CL.C&G.4.1",
          text: "Differentiate the judicial systems of the United States and North Carolina in terms of structure, jurisdiction, and how each provides for equal protection.",
          claimIds: ["civics.federal-judiciary-structure", "civics.nc-courts"],
          coverage: "partial",
          note: "Partial: both systems' structure and selection are taught — the federal judiciary from district courts to the Supreme Court, and North Carolina's partisan-elected Supreme Court and Court of Appeals — but 'how each provides for equal protection' is not worked side by side.",
        },
        {
          code: "CL.C&G.4.2",
          text: "Differentiate the structure and function of state and federal courts in order to understand the adversarial nature of each.",
          claimIds: ["civics.federal-judiciary-structure", "civics.nc-courts", "civics.jury-service"],
          coverage: "partial",
          note: "Partial: federal and North Carolina court structure are taught, and jury service teaches the citizen's side of an adversarial system; the adversarial nature itself is illustrated through jury duty rather than compared state-to-federal.",
        },
        {
          code: "CL.C&G.4.3",
          text: "Exemplify how the constitutions of the United States and North Carolina have been interpreted and applied since ratification.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.article-v-amendment",
            "rights.scotus-precedent",
            "civics.nc-constitution",
          ],
          coverage: "partial",
          note: "Partial: the U.S. Constitution is worked article by article, with Article V and how precedent expands rights; North Carolina's 1971 constitution and its amendment path are taught in the flagship. Case-by-case interpretation 'since ratification' for North Carolina specifically is not.",
        },
        {
          code: "CL.C&G.4.4",
          text: "Assess how effective the American system of government has been in ensuring freedom, equality, and justice for all.",
          claimIds: [
            "history.jim-crow-and-long-shadow",
            "history.migration-civil-rights-politics",
            "history.labor-civil-rights",
          ],
          coverage: "partial",
          note: "Partial: taught through cases where the system fell short and was pushed to change — Jim Crow and the Great Migration, the labor half of the civil-rights movement — rather than a general assessment of the system's effectiveness.",
        },
        {
          code: "CL.C&G.4.5",
          text: "Summarize the importance of both the right to due process of law and the individual rights established in the Bill of Rights in the American legal system.",
          claimIds: [
            "civics.bill-of-rights-origin",
            "civics.bill-of-rights-overview",
            "rights.landmark-cases",
            "rights.limits-on-rights",
          ],
          coverage: "full",
          note: "The Bill of Rights as a document, what it protects, the landmark rights cases as rules a student can apply (including the Fourth Amendment and due process), and when government may constitutionally limit rights.",
        },
        {
          code: "CL.C&G.4.6",
          text: "Critique the extent  to which women, indigenous, religious, racial, ability, and identity groups have had access to justice as established in the founding principles of government.",
          claimIds: [
            "history.jim-crow-and-long-shadow",
            "history.labor-civil-rights",
            "bvc.plantation-economy-resistance",
          ],
          coverage: "partial",
          note: "Partial: access to justice is taught through where it was denied and fought for — Jim Crow, the plantation economy, unions' own colour bar — not as a comprehensive audit across all the named groups. (Transcribed as printed, including the document's double space in 'extent  to'.)",
        },
        // — Behavioral Sciences —
        {
          code: "CL.B.1.1",
          text: "Explain how values and beliefs influence the creation and implementation of public policy and laws.",
          claimIds: ["bvc.prohibition", "bvc.reefer-madness-language-of-fear"],
          coverage: "partial",
          note: "Partial: taught through drug- and alcohol-policy history — how moral values drove Prohibition, and how fear-based rhetoric drove marijuana criminalization — not as a general values-to-policy model.",
        },
        {
          code: "CL.B.1.2",
          text: "Explain how legislation, policy, and judicial rulings reflect changing norms and values in the United States.",
          claimIds: ["rights.scotus-precedent", "history.wagner-act"],
          coverage: "partial",
          note: "Partial: judicial rulings reflecting changing values are taught through how Supreme Court precedent expands rights over time; legislation reflecting changing norms through the Wagner Act. Not a general treatment.",
        },
        {
          code: "CL.B.1.3",
          text: "Explain how the values and beliefs regarding freedom, equality, and justice have helped transform the American system of government.",
          claimIds: [
            "history.labor-civil-rights",
            "history.migration-civil-rights-politics",
            "rights.scotus-precedent",
          ],
          coverage: "partial",
          note: "Partial: taught through the civil-rights transformation — the labor half of the movement, the Black urban vote the Great Migration created, and rights expanded by precedent — rather than as a survey.",
        },
        {
          code: "CL.B.1.4",
          text: "Explain how individual values and societal norms contribute to institutional discrimination and the marginalization of minority groups living under the American system of government.",
          claimIds: [
            "history.jim-crow-and-long-shadow",
            "history.labor-civil-rights",
            "bvc.plantation-economy-resistance",
          ],
          coverage: "partial",
          note: "Partial: taught through specific institutions — Jim Crow, the plantation economy, and unions' own colour bar — rather than a general treatment of institutional discrimination.",
        },
        // — Economics —
        {
          code: "CL.E.1.1",
          text: "Explain how the role federal and state governments play in economic decision-making impacts economic mobility, status, and quality of life of individuals living in America.",
          claimIds: ["history.wagner-act", "history.gilded-age-labor", "bvc.sugar-program-trade-barriers"],
          coverage: "partial",
          note: "Partial: government's role in the economy is taught through labor law (the Wagner Act's regime and who it excluded, the Gilded-Age fight that led there) and the U.S. sugar program; the link to 'economic mobility, status, and quality of life' is drawn but not measured.",
        },
        {
          code: "CL.E.1.2",
          text: "Summarize the role of the United States and North Carolina in the world economy.",
          claimIds: [
            "bvc.value-chain-earnings",
            "bvc.commodity-trap",
            "bvc.sugar-program-trade-barriers",
            "bvc.growing-belts-resource-maps",
          ],
          coverage: "partial",
          note: "Partial: the United States' role in the global commodity economy is taught in real depth (value chains, the sugar program, the growing belts that drive trade); North Carolina's specific role in the world economy is not.",
        },
        // — History —
        {
          code: "CL.H.1.1",
          text: "Explain how the tensions over power and authority led the founding fathers to develop a democratic republic.",
          claimIds: [
            "civics.articles-to-constitution",
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
          ],
          coverage: "full",
          note: "Why the Articles of Confederation failed and led to the 1787 Constitution, worked article by article, with separation of powers and checks and balances as the answer to concentrated authority.",
        },
        {
          code: "CL.H.1.2",
          text: "Compare competing narratives of the historical development of the United States and North Carolina in terms of how each depicts race, women, tribes, identity, ability, and religious groups.",
          claimIds: ["bvc.whose-voice-differing-accounts", "history.migration-primary-sources"],
          coverage: "partial",
          note: "Partial: comparing competing narratives is the Whose Voice method (a planter's account read against Equiano and Mary Prince) and the Great Migration's primary-source pointers; narratives specific to North Carolina's development are not.",
        },
        {
          code: "CL.H.1.3",
          text: "Interpret historical and current perspectives on the evolution of individual rights in America over time, including women, tribal, racial, religious, identity, and ability.",
          claimIds: ["rights.scotus-precedent", "rights.landmark-cases", "history.labor-civil-rights"],
          coverage: "partial",
          note: "Partial: the evolution of rights is taught through how precedent expands them and the landmark cases, plus the labor and civil-rights movements; not every named group is treated systematically.",
        },
        {
          code: "CL.H.1.4",
          text: "Explain the impact of social movements and reform efforts on governmental change, both current and in the past.",
          claimIds: [
            "history.gilded-age-labor",
            "history.wagner-act",
            "history.triangle-fire-debs",
            "history.migration-civil-rights-politics",
            "history.labor-civil-rights",
          ],
          coverage: "full",
          note: "Social movements driving governmental change is what this catalog does best: the labor movement from the Gilded Age through the Triangle fire to the Wagner Act, and the civil-rights politics the Great Migration created.",
        },
        {
          code: "CL.H.1.5",
          text: "Explain how the experiences and achievements of minorities and marginalized peoples have contributed to the protection of individual rights and “equality and justice for all” over time.",
          claimIds: [
            "history.harlem-renaissance-black-press",
            "history.labor-civil-rights",
            "history.migration-civil-rights-politics",
            "bvc.plantation-economy-resistance",
          ],
          coverage: "full",
          note: "Taught as agency, not victimhood: the Black press as an engine of change, Randolph to Memphis, the Black urban vote, and plantation resistance and the Maroons.",
        },
        {
          code: "CL.H.1.6",
          text: "Exemplify ways individuals have demonstrated resistance and resilience to inequities, injustice, and discrimination within the American system of government over time.",
          claimIds: [
            "bvc.plantation-economy-resistance",
            "history.labor-civil-rights",
            "history.migration-civil-rights-politics",
          ],
          coverage: "partial",
          note: "Partial: resilience and resistance are taught through plantation resistance and the Maroons, Randolph to Memphis, and the vote the Great Migration created; 'within the American system of government' frames some but not all of these.",
        },
        // — Inquiry (skill strand; cited at the sub-indicator/bullet level) —
        {
          code: "I.1.3 · Gathering and Evaluating Sources",
          text: "Determine the origin, context, and bias of primary and secondary sources.",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.reading-ads-for-omission",
            "bvc.whose-voice-differing-accounts",
          ],
          coverage: "partial",
          note: "Partial: North Carolina's Inquiry strand is content-neutral and applied across the course; these source-analysis skills are modelled in every BVC episode (reading an ad for what it omits, weighing accounts against each other) but sustained student-run analysis is graded only in the Coffee project. Cited at the sub-indicator (bullet) level, as the indicator's category stem is short.",
        },
        {
          code: "I.1.4 · Developing Claims and Using Evidence",
          text: "Analyze data from charts, graphs, timelines, and maps.",
          claimIds: ["bvc.coffee-project-mapping", "bvc.growing-belts-resource-maps"],
          coverage: "partial",
          note: "Partial: analyzing maps and data is the Commodity Map itself and the Coffee project's mapping option (maps and data tables of production regions); a broader charts-and-timelines program is not. Cited at the sub-indicator (bullet) level.",
        },
        {
          code: "I.1.5 · Communicating Ideas",
          text: "Support arguments with evidence and reasoning while considering counterclaims.",
          claimIds: ["bvc.coffee-project-argument-paper", "bvc.evaluate-claims-fallacies"],
          coverage: "partial",
          note: "Partial: the Coffee project's Option D requires exactly this, with a required counterargument section, and the fallacy-analysis lessons teach evaluating reasoning — but the graded argument is one optional project in one episode. Cited at the sub-indicator (bullet) level.",
        },
        {
          code: "I.1.6 · Taking Informed Action",
          text: "Organize and take individual or collaborative action in order to effect change and inform others.",
          claimIds: ["civics.show-up-every-level", "civics.track-a-bill", "civics.nc-get-involved"],
          coverage: "partial",
          note: "Partial: where and how to be heard at every level, tracking a live bill, and getting involved in North Carolina are taught as practice; the student's own action is prompted, not assessed. Cited at the sub-indicator (bullet) level.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no North Carolina mathematics standard.",
    },
    {
      heading: "North Carolina's ELA and Science standards — deferred, not denied.",
      body: "North Carolina writes its own 2017 English Language Arts SCOS (Common Core-derived, but with North Carolina's own text and numbering) and its own K-12 Science standards (North Carolina is NOT an NGSS state). Our rule is fetch-or-don't-cite: NCDPI's own PDFs on files.nc.gov and dpi.nc.gov refused our tooling (HTTP 403) this pass, and we will not transcribe standard text from a non-authoritative third-party alignment document, so these courses carry no North Carolina claims yet. The BVC media-literacy, rhetoric, and research-project work that maps to them elsewhere is real; it is the North Carolina text we have not yet retrieved from an acceptable source.",
    },
    {
      heading: "The flagship's most distinctive lesson — how a bill becomes a North Carolina law — has no home in these standards.",
      body: "North Carolina's Civic Literacy standards are thematic (founding principles, rights, the evolution of government); they contain NO lawmaking-process objective. So the North Carolina flagship's signature lesson — how a bill becomes a North Carolina law, including that the governor had no veto until 1997 (North Carolina was the last state to grant one) and that a veto is overridden by three-fifths, not two-thirds — has no North Carolina Civic Literacy standard to cite, and we do not stretch one to fit. The gap is in the standards, not the lesson.",
    },
    {
      heading: "The Geography strand (CL.G.1.1–CL.G.1.3).",
      body: "The Civic Literacy Geography objectives are specific: how views on freedom and equality shape legislation on immigration, migration, and the environment (CL.G.1.1); the geopolitical and environmental factors affecting civic participation and voting by region (CL.G.1.2); and how the United States works with international governments on global environmental issues (CL.G.1.3). Our migration and climate content does not sit inside those policy frames, so we claim none of them.",
    },
    {
      heading: "Comparative government and the political-process objectives we do not teach.",
      body: "CL.C&G.2.4 (comparing the U.S. federal government to various governments around the world) and CL.C&G.3.4 (comparing American citizenship to membership in other governments) ask for comparative-government work the catalog does not do. CL.C&G.3.5 (how the two-party system shaped the political landscape) and CL.C&G.3.6 (the relationship between the media and government) are likewise not taught — our media-literacy work is consumer protection, not political-media analysis, the same gap flagged for Arizona's HS.C3.3.",
    },
    {
      heading: "Inquiry indicators I.1.1 and I.1.2 (Compelling and Supporting Questions).",
      body: "The question-formulation indicators (identifying issues and framing compelling and supporting questions) describe a classroom inquiry process the courses prompt but do not run or assess, so we do not claim them; we claim the source-analysis, data-analysis, argument, and informed-action indicators the catalog genuinely exercises.",
    },
  ],
};
