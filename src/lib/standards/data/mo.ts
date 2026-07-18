// ─────────────────────────────────────────────────────────────────────────────
// MISSOURI — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-mo` was written FROM Missouri's own official sources (house.mo.gov,
// senate.mo.gov, sos.mo.gov, courts.mo.gov, and the 1945 Constitution), so Missouri's civics
// flagship gets its 1:1 state-civics course, and this file gives it a genuine home.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from DESE's own record:
//   · Social studies (High School Government) — BESPOKE. Missouri withdrew from the Common Core;
//     the Missouri Learning Standards are Missouri's own. The 6-12 Social Studies Grade Level
//     Expectations (State Board of Education, April 19, 2016) publish a discrete High School
//     GOVERNMENT course (course code GV). Its 9-12.GV.3.GS.F ("Compare the structure and functions
//     of local, state and federal governments") is a real home for the flagship's Missouri state
//     and local structure, and 9-12.GV.4.GS.B / 9-12.GV.4.GS.C host Missouri's citizen engagement
//     and its selection of leaders (the Missouri Plan). The general U.S. civics ladder maps to the
//     Theme-2/Theme-3 founding-and-structure GLEs; the catalog's media/source-literacy method maps
//     to the Theme-1 inquiry GLEs.
//   · ELA — BESPOKE, DEFERRED. Missouri withdrew from the Common Core (2016) and adopted its own
//     Missouri Learning Standards for English Language Arts under Missouri-specific codes. The
//     catalog's ELA strengths (an author's point of view and evidence, rhetoric, sustained research
//     with citation) — which we map VERBATIM to the shared Common Core RH/RI/WHST strands in states
//     that kept them — would map to Missouri's own grade 11-12 reading and writing GLEs, but
//     transcribing and verifying those verbatim is deferred this pass. Published in notClaimed.
//   · Mathematics — nothing (the catalog does no mathematics instruction).
//   · Science — BESPOKE (NOT NGSS), DEFERRED. Missouri adopted its own science grade-level
//     expectations, not the Next Generation Science Standards, so the shared ../shared/ngss file
//     does NOT apply here. The catalog's climate/resource content would find an analog in Missouri's
//     Earth/environmental science GLEs, but that is deferred this pass. Published in notClaimed.
//
// Provenance: the High School Government GLEs were transcribed VERBATIM from DESE's own
// machine-readable export — the "MLS Social Studies Standards Grades K-12 (Excel)" published at
// dese.mo.gov (its authoritative "MLS Code" column, sheet "Courses") — the byte-faithful companion
// to the 6-12 GLE PDF at the sourceUrl below, fetched 2026-07-18. Each mapped standard was
// cross-checked against that PDF, which lays the six course columns (6-8/9-12 American History,
// 6-8/9-12 World History, 6-8 Geography, and 9-12 Government) side by side; the 9-12 Government
// column is the rightmost. Codes are cited exactly as printed (e.g. 9-12.GV.3.GS.F). Only leading/
// trailing whitespace present in the export was trimmed; internal punctuation and curly apostrophes
// are preserved verbatim ("multiple points of views" and "peoples’" are the document's own wording).
// ─────────────────────────────────────────────────────────────────────────────

import type { JurisdictionFile } from "../types";

const MO_SS = "https://dese.mo.gov/media/pdf/curr-mls-standards-ss-6-12-sboe-2016";

export const JURISDICTION: JurisdictionFile = {
  state: "MO",
  frameworks: [
    // ── High School Government (Missouri Learning Standards, 6-12 Social Studies GLEs, 2016) ──
    {
      id: "mo-government",
      subject: "Social Studies",
      name: "Missouri Learning Standards — 6-12 Social Studies, High School Government (9-12.GV)",
      publisher:
        "Missouri Department of Elementary and Secondary Education (DESE) / State Board of Education",
      version:
        "Missouri Learning Standards for Social Studies, Grade Level Expectations (SBOE-approved April 19, 2016) · High School Government course",
      fetchedOn: "2026-07-18",
      sourceUrl: MO_SS,
      adoption:
        "Missouri's required High School Government course is the anchor for the Missouri Civics flagship. Missouri withdrew from the Common Core, so these Social Studies GLEs are Missouri's own, and 9-12.GV.3.GS.F (compare local, state, and federal governments) is a genuine home for a state's own structure. Transcribed verbatim from DESE's own machine-readable export and cross-checked against the 6-12 GLE PDF (see the file header for the provenance note). The GLEs use the coding Grade-band.Course.Theme.Strand.Item — e.g. 9-12.GV.3.GS.F is the 9-12 Government course, Theme 3 (Structure of Government), Governmental Systems and Principles strand, item F.",
      standards: [
        // — Theme 3: Structure of Government (the flagship's home + the general federal ladder) —
        {
          code: "9-12.GV.3.GS.F",
          text: "Compare the structure and functions of local, state and federal governments.",
          claimIds: [
            "civics.mo-state-structure",
            "civics.mo-local-government",
            "civics.local-government-layers",
            "civics.federalism-why-split-power",
          ],
          coverage: "full",
          note: "This is the flagship's primary home: Missouri's own state structure (the 1945 Constitution, the six-officer plural executive, the 163-member House and 34-member Senate) and Missouri local government (114 counties plus the independent City of St. Louis, home-rule charters) are taught in depth, and the federal level and the local/state/federal comparison are carried by the general civics catalog (US, State & Local Government; State vs Federal Power).",
        },
        {
          code: "9-12.GV.3.GS.C",
          text: "Analyze the unique roles and responsibilities of the three branches of government to determine how they function and interact.",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.three-branches-federal",
            "civics.federal-articles-i-iii",
          ],
          coverage: "full",
          note: "Articles I-III, the three branches, and how they check and interact with one another are taught end to end.",
        },
        {
          code: "9-12.GV.3.GS.D",
          text: "Describe and give examples of how the constitutional principle of checks and balances limits the powers of government and leaders.",
          claimIds: ["civics.separation-checks-balances"],
          coverage: "full",
        },
        {
          code: "9-12.GV.3.GS.E",
          text: "Explain how the Bill of Rights and subsequent amendments limit the power of government, protect individual liberty, and provide for equality under the law.",
          claimIds: [
            "civics.bill-of-rights-origin",
            "civics.bill-of-rights-overview",
            "rights.landmark-cases",
            "rights.limits-on-rights",
            "civics.article-v-amendment",
          ],
          coverage: "full",
          note: "The Bill of Rights as a document and as applied rules (Tinker, Mapp, Terry, T.L.O., …), the limits government may place on rights, and the later amendments via Article V are each taught by name.",
        },
        {
          code: "9-12.GV.3.GS.A",
          text: "Apply the concepts of due process of law, popular sovereignty, rule of law, representation, and federalism to explain the purpose and legacy of the Constitution.",
          claimIds: [
            "civics.constitution-article-by-article",
            "civics.separation-checks-balances",
            "civics.federalism-why-split-power",
            "rights.limits-on-rights",
          ],
          coverage: "full",
          note: "Each named concept — due process, popular sovereignty, rule of law, representation, and federalism — is taught by name across the Constitution, federalism, and rights courses.",
        },
        {
          code: "9-12.GV.3.CC.D",
          text: "Analyze the changing relationship between state and federal governmental powers.",
          claimIds: ["civics.federalism-why-split-power", "civics.federal-powers-taxonomy"],
          coverage: "full",
          note: "Taught through the enumerated/implied/reserved/concurrent powers taxonomy and McCulloch v. Maryland (implied powers and supremacy).",
        },
        // — Theme 2: Historical Foundations (the founding ladder) —
        {
          code: "9-12.GV.2.GS.C",
          text: "Describe the strengths and weaknesses of the Articles of Confederation to explain its failure as a national government.",
          claimIds: ["civics.articles-to-constitution"],
          coverage: "full",
          note: "US Constitution 101, Lesson 1 works exactly this: why the Articles of Confederation failed and how that produced the 1787 Constitution.",
        },
        // — Theme 4: Government in Action (elections + citizen engagement, the flagship's civic half) —
        {
          code: "9-12.GV.4.GS.C",
          text: "Compare the various processes pertaining to the selection of political leaders at the federal, state, and local level.",
          claimIds: [
            "civics.mo-missouri-plan",
            "civics.mo-elections",
            "civics.election-mechanics",
            "civics.electoral-college",
          ],
          coverage: "full",
          note: "Missouri's own selection processes — the Missouri Plan's merit-selection-plus-retention for judges, and its elected offices — are taught beside the federal processes (registration, primaries, and the Electoral College) in the general elections catalog.",
        },
        {
          code: "9-12.GV.4.GS.B",
          text: "Explain a citizen’s legal obligations, as well as opportunities for, engaging with and using local, state, and federal governments to shape decision-making.",
          claimIds: [
            "civics.mo-get-involved",
            "civics.mo-direct-democracy",
            "civics.show-up-every-level",
            "civics.track-a-bill",
            "civics.citizenship-responsibilities",
          ],
          coverage: "full",
          note: "Taught as practice, including Missouri's own levers: circulating an initiative or referendum, showing up at county commissions, city councils, and school boards, and contacting the Jefferson City legislators, alongside tracking a live bill and the responsibilities of citizenship.",
        },
        // — Theme 1: Tools of Social Science Inquiry (the catalog's media/source-literacy method) —
        {
          code: "9-12.GV.1.CC.D",
          text: "Using an inquiry lens, develop compelling questions about government, determine helpful resources and consider multiple points of views represented in the resources.",
          claimIds: [
            "civics.mo-state-structure",
            "bvc.source-evaluation-modelled",
            "bvc.whose-voice-differing-accounts",
            "bvc.reading-ads-for-omission",
          ],
          coverage: "full",
          note: "\"Consider multiple points of view represented in the resources\" is the source-literacy method run across the catalog — reading each source for its point of view, bias, and omission, and putting differing accounts of the same events side by side.",
        },
        {
          code: "9-12.GV.1.PC.A",
          text: "Using a government lens, describe how peoples’ perspectives shaped the sources/artifacts they created.",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.reading-ads-for-omission",
            "bvc.author-rhetoric-primary-texts",
          ],
          coverage: "full",
          note: "How an author's perspective shaped the source they created — the euphemism of a planter's account against the first-person accounts of formerly enslaved writers — is analyzed directly.",
        },
        {
          code: "9-12.GV.1.CC.C",
          text: "Develop a research plan, identify appropriate resources for investigating social studies topics, and create and present a research product which applies an aspect of government to a contemporary issue.",
          claimIds: [
            "civics.track-a-bill",
            "bvc.coffee-project-research-process",
            "bvc.coffee-project-synthesis",
          ],
          coverage: "partial",
          note: "The research process — a plan, appropriate sources, and a presented product with APA citation — is taught and shipped as a graded assignment only in the Coffee episode, whose topic is a commodity rather than a government issue; tracking a live bill applies research to a contemporary government issue, but no single graded government research product ships, so this is partial.",
        },
        {
          code: "9-12.GV.1.CC.E",
          text: "Analyze the causes and consequences of a specific issue tied to government as well as the challenges and opportunities faced by those trying to address the problem.",
          claimIds: [
            "civics.track-a-bill",
            "civics.show-up-every-level",
            "bvc.war-on-drugs-foreign-policy",
          ],
          coverage: "partial",
          note: "Government-policy issues are analyzed for their causes and consequences and for the people trying to address them (the War on Drugs and its foreign-policy arm; tracking a live bill and being heard on it), but not as a single Missouri-specific graded assignment, so this is partial.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Missouri Learning Standards mathematics expectation.",
    },
    {
      heading: "Science — Missouri's OWN standards (not the NGSS): deferred, not denied.",
      body: "Missouri adopted its own Missouri Learning Standards for science (grade-level expectations), NOT the Next Generation Science Standards, so the shared NGSS mapping this catalog uses in NGSS states does not apply in Missouri. The catalog's climate/resource content (resources, hazards, and climate shaping human activity) would find an analog in Missouri's Earth/environmental-science GLEs, but this pass mapped only the High School Government course; Missouri's science GLEs are deferred (verbatim-or-nothing), not claimed unverified.",
    },
    {
      heading: "English/Language Arts — Missouri-specific after the Common Core exit: deferred.",
      body: "Missouri withdrew from the Common Core and adopted its own Missouri Learning Standards for English Language Arts, under Missouri-specific codes (including the grade 11-12 Reading Informational Text and Writing expectations). The catalog's ELA-literacy strengths — evaluating an author's point of view and evidence, analyzing rhetoric, and sustained research with citation, which we map VERBATIM to the Common Core RH/RI/WHST strands in states that kept them — would map to Missouri's own 11-12 reading and writing GLEs, but transcribing and verifying those verbatim is deferred this pass and published here rather than claimed unverified.",
    },
    {
      heading: "Missouri's American History, World History, Geography, and Economics courses — deferred.",
      body: "The High School Government course is one of six in the 6-12 GLE document (the others being 6-8/9-12 American History, 6-8/9-12 World History, and 6-8 Geography), laid out side by side in a six-column grid. The catalog's commodity, colonial, labor, and civil-rights history and its commodity economics WOULD map to the 9-12 American/World History and Economics GLEs, as they do in other states, but we mapped the Government course this pass and defer the rest. Those courses sit in adjacent columns of the same grid, which risks cross-column bleed on transcription; we verified the Government column against the PDF and deferred the others rather than risk citing text we cannot cleanly verify.",
    },
    {
      heading: "Missouri's initiative and referendum have no discrete Government GLE.",
      body: "The Missouri flagship teaches the initiative and referendum as a headline feature, and Missouri's Government course names them nowhere as a discrete standard. They are claimed here only through 9-12.GV.4.GS.B (a citizen \"engaging with and using local, state, and federal governments to shape decision-making\"), which they fit squarely, rather than as a standard of their own.",
    },
    {
      heading: "The founding-content and political-science Government GLEs we checked and rejected.",
      body: "9-12.GV.1.CC.A/CC.B (chronological tools; historical context and perspectives as inquiry skills), 9-12.GV.1.GS.A/GS.B and 9-12.GV.1.G.A/G.B (the broad \"analyze laws/policies\" and \"powers and responsibilities\" inquiry-tool duplicates, and maps of the original 13 colonies), 9-12.GV.1.EC.A (opportunity costs) and 9-12.GV.1.PC.B (social structures and stratification); all of Theme 2's named founding content — 9-12.GV.2.CC.A-D, 9-12.GV.2.GS.A/GS.B, 9-12.GV.2.G.A, 9-12.GV.2.EC.A, 9-12.GV.2.PC.A (colonial self-rule, the Declaration's Enlightenment influences, the Constitutional Convention's prior models, democratic-vs-authoritarian comparison, the codification of law, natural law and social contract, North American geography, founding-era economic theory, and founding-era divisions); 9-12.GV.3.CC.A-C and 9-12.GV.3.GS.B (the Convention debates resolved, ratification concerns, the changing size/powers of the branches over time, and the Articles vs Constitution implementing the Declaration's ideals); 9-12.GV.3.EC.A/EC.B and 9-12.GV.3.PC.A/PC.B (trade/monetary/tax policy under the Articles vs Constitution, government's changing economic role, founding-era political philosophies, and the impact of government decision-making); and 9-12.GV.4.CC.A-C, 9-12.GV.4.GS.A, 9-12.GV.4.G.A, 9-12.GV.4.EC.A, 9-12.GV.4.PC.A-C (the branch power balance over time, an \"active\" judiciary/legislature/executive, political parties and interest groups, electoral results by demographic, taxation and spending, and public opinion) — the courses do not genuinely teach these, or teach them too thinly to claim, so we do not claim them.",
    },
  ],
};
