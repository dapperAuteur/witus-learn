// ─────────────────────────────────────────────────────────────────────────────
// HAWAII — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-hi` was written FROM Hawaii's own official sources (capitol.hawaii.gov,
// elections.hawaii.gov, courts.state.hi.us, and the 1959 Constitution), so Hawaii's civics
// flagship gets its 1:1 state-civics course — but see the flagship caveat in notClaimed: Hawaii's
// high-school civics standards are almost entirely FEDERAL/general, so the course's Hawaii-structure
// lessons map only where Hawaii's own standards actually reach (its civic-engagement standard).
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from the HIDOE/BOE's own record:
//   · ELA — INHERITED in 2010 but DEFERRED here. The Hawaii Board of Education adopted the Common
//     Core State Standards for ELA and Mathematics on June 7, 2010 (the "Hawaii Common Core"),
//     phased in 2012-2014. BUT the BOE's Standards Advisory Council took committee action on a
//     "Revised Hawaii Common Core Standards for ELA" in April 2024, so Hawaii's CURRENT grade 11-12
//     RH/RI/WHST wording may no longer be verbatim CCSS (cf. Iowa 2024, which revised RI.11-12.6 and
//     WHST.11-12.8). We did NOT fetch and verify Hawaii's current ELA document this pass, and the
//     rule is compare-before-aliasing, so we DEFER the ELA framework rather than blind-alias the
//     shared common-core-ela file (published in notClaimed). The catalog's source-evaluation and
//     media-literacy work is instead claimed against Hawaii's OWN social-studies INQUIRY standards
//     (SS.9-12.2.1, .2.2, .3.1), which we transcribed verbatim.
//   · Math — INHERITED (Common Core, June 7, 2010); and this catalog teaches no mathematics anyway
//     (notClaimed).
//   · Science — INHERITED (verbatim NGSS). The Hawaii Board of Education adopted the Next Generation
//     Science Standards on February 16, 2016, phased in from 2016-17 (full by 2019-20). Hawaii
//     adopted the NGSS performance expectations using the NGSS codes; ../shared/ngss is adopted
//     verbatim, no aliases, one partial claim (HS-ESS3-1) — see the note on it.
//   · Social studies — BESPOKE. The Hawaiʻi Core Standards in Social Studies (HCSSS) are Hawaii's
//     own, built on the C3 Framework (NCSS, 2013) and written by teams of Hawaiʻi educators who met
//     2016-2018. The high-school "Participation in a Democracy" course is the civics anchor — but,
//     like California's Grade 12 Principles of American Democracy, it is overwhelmingly FEDERAL: it
//     names the U.S. Constitution, the national institutions, landmark Supreme Court cases, and
//     public policy, with NO standard for Hawaii's own government structure. So the flagship's
//     Hawaii-specific STRUCTURE has no code to cite; only its civic-ENGAGEMENT standard (SS.PID.5.7.1)
//     hosts the Hawaii-specific civic ACTIONS. data/hi.ts publishes the structure gap loudly.
//
// Provenance: the "Participation in a Democracy" codes and text were transcribed VERBATIM from the
// HIDOE-published PDF (the sourceUrl below), fetched 2026-07-19; the PDF renders clean text (no
// subset-font/glyph offset), and every code was verified to read as clean English before use.
// Coding (from the HCSSS preface, Table 2): inquiry standards are cited SS.9-12.<anchor>.<n>
// (e.g., SS.9-12.2.1) and Participation-in-a-Democracy content standards SS.PID.<theme>.<anchor>.<n>
// (e.g., SS.PID.2.6.1); we cite them exactly so.
// ─────────────────────────────────────────────────────────────────────────────

import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const HI_PID =
  "https://hawaiipublicschools.org/DOE%20Forms/Social%20Studies/HCSSSdemocracy.pdf";

export const JURISDICTION: JurisdictionFile = {
  state: "HI",
  adoptions: [
    {
      framework: NGSS,
      adoption:
        "The Hawaii Board of Education adopted the Next Generation Science Standards on February 16, 2016, phased in from the 2016-17 school year (full implementation by 2019-20). Hawaii adopted the NGSS performance expectations using the NGSS codes, so ../shared/ngss is adopted verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── Participation in a Democracy (Hawaiʻi Core Standards in Social Studies) ──
    {
      id: "hi-civics",
      subject: "Social Studies",
      name: "Hawaiʻi Core Standards in Social Studies — Participation in a Democracy (Grades 9-12)",
      publisher: "Hawaiʻi State Department of Education (HIDOE) / Hawaiʻi State Board of Education",
      version:
        "Hawaiʻi Core Standards in Social Studies (HCSSS, C3-based) · Participation in a Democracy · Grades 9-12 · written by Hawaiʻi educators 2016-2018",
      fetchedOn: "2026-07-19",
      sourceUrl: HI_PID,
      adoption:
        "Hawaii's high-school \"Participation in a Democracy\" course anchors the Hawaii Civics flagship, but it is a federal/general civics course: its content standards name the U.S. Constitution, the national institutions, landmark Supreme Court cases, and public policy, and its inquiry standards drive source evaluation and civic action. The ONE standard that reaches Hawaii's own participation is SS.PID.5.7.1 (effecting change in the community and state), which hosts the flagship's Hawaii-specific civic actions. Transcribed verbatim from the HIDOE PDF (see the file header for provenance).",
      standards: [
        // — Inquiry Anchor 2: Gathering and Evaluating Sources (the media-literacy home) —
        {
          code: "SS.9-12.2.1",
          text: "Evaluate the credibility of a source by examining its origin, author, context, content, and corroborative value",
          claimIds: [
            "bvc.source-evaluation-modelled",
            "bvc.evaluate-claims-fallacies",
            "bvc.media-fallacies-recurring",
            "media.misleading-statistics",
          ],
          coverage: "full",
          note: "Squarely met by the BVC media-literacy method: reading a source for origin, author, bias, omission, misleading statistics, and recurring fallacy is modelled and practiced across the catalog — exactly the credibility examination the standard names.",
        },
        {
          code: "SS.9-12.2.2",
          text: "Gather relevant information from credible sources representing a wide range of views, and note any inconsistencies in the information",
          claimIds: [
            "bvc.whose-voice-differing-accounts",
            "bvc.nearest-green-oral-history",
            "bvc.coffee-project-sources-ethics",
          ],
          coverage: "full",
          note: "The Whose Voice lessons put differing first-person accounts of the same event against each other and teach the student to note the discrepancies; the Nathan Green lesson resolves a documentary-vs-oral-record inconsistency; the Coffee project gathers and weighs multiple sources.",
        },
        // — Inquiry Anchor 3: Creating Claims —
        {
          code: "SS.9-12.3.1",
          text: "Develop claims and counterclaims using evidence that draws directly and substantively from multiple sources while pointing out the strengths and limitations of both",
          claimIds: ["bvc.coffee-project-synthesis", "bvc.evaluate-claims-fallacies"],
          coverage: "partial",
          note: "Partial: evaluating claims and their weaknesses is taught across the catalog, but the sustained claim-and-counterclaim deliverable drawn from multiple sources is run as a graded assignment only in the Coffee project.",
        },
        // — Inquiry Anchor 5: Taking Informed Action (civic action) —
        {
          code: "SS.9-12.5.3",
          text: "Apply a range of deliberative strategies and procedures to make decisions and propose feasible solutions to address local, regional, and/or global concerns",
          claimIds: ["civics.show-up-every-level", "civics.track-a-bill"],
          coverage: "partial",
          note: "Partial: matching an issue to the level of government that decides it, showing up there, and tracking a live bill are taught directly; the deliberative decision-making procedure the standard names is prompted rather than run as a structured classroom exercise.",
        },
        {
          code: "SS.9-12.5.4",
          text: "Create an action plan to address a solution to the problem or issue and demonstrate substantive evidence of implementation",
          claimIds: ["civics.hi-get-involved", "civics.track-a-bill"],
          coverage: "partial",
          note: "Partial: the flagship teaches how to take action in Hawaii and prompts the learner to follow one issue start to finish, but the action plan with demonstrated evidence of implementation is prompted, not collected and assessed.",
        },
        // — Theme 1: Foundations of the Constitution —
        {
          code: "SS.PID.1.19.2",
          text: "Analyze the problems and compromises that shaped the United States Constitution",
          claimIds: ["civics.articles-to-constitution", "civics.constitution-article-by-article"],
          coverage: "partial",
          note: "Partial: why the Articles of Confederation failed and how that produced the 1787 Constitution is taught directly, and the Constitution is analyzed article by article; the standard's specific compromises (the Three-Fifths Clause, the New Jersey vs. Virginia plans) and the Federalist/Anti-Federalist debate are not worked as named content.",
        },
        // — Theme 2: Institutions of National Government —
        {
          code: "SS.PID.2.6.1",
          text: "Explain how the American Constitution embodies the principles of the rule of law, popular sovereignty, separation of powers, checks and balances, and limited government",
          claimIds: [
            "civics.separation-checks-balances",
            "civics.three-branches-federal",
            "civics.preamble-purposes",
          ],
          coverage: "partial",
          note: "Partial: separation of powers and checks and balances are taught directly, the three branches are taught end to end, and popular sovereignty is worked through the Preamble; rule of law and limited government are touched as principles but not each taught as a discrete unit.",
        },
        {
          code: "SS.PID.2.8.2",
          text: "Analyze the role of the three branches of government in the lawmaking process",
          claimIds: [
            "civics.federal-bill-process",
            "civics.three-branches-federal",
            "civics.judicial-review-marbury",
          ],
          coverage: "full",
          note: "All three roles the standard names are taught: the legislative bill process end to end, the executive's veto and implementation, and judicial review through Marbury v. Madison.",
        },
        // — Theme 3: Civic Rights and Responsibilities —
        {
          code: "SS.PID.3.17.1",
          text: "Explain the significance and impact of landmark Supreme Court cases in American history",
          claimIds: [
            "civics.judicial-review-marbury",
            "rights.landmark-cases",
            "rights.scotus-precedent",
          ],
          coverage: "partial",
          note: "Partial: Marbury v. Madison (judicial review) is taught by name, and the rights-case line (Tinker, Brandenburg, Mapp, and how precedent expands rights) is taught as applicable rules; the rest of the standard's named list (Plessy, Korematsu, Brown, Shelby County) is not each taught.",
        },
        {
          code: "SS.PID.3.7.2",
          text: "Assess the importance of exercising the rights and responsibilities of citizenship in a democracy",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.jury-service",
            "civics.voter-registration",
          ],
          coverage: "full",
          note: "The standard's own examples — being an informed and active citizen, paying taxes, serving jury duty, and voting — are taught as practice: jury service is an entire course, and voting is taught through registration walkthroughs.",
        },
        // — Theme 5: Civic Engagement (the flagship's home) —
        {
          code: "SS.PID.5.7.1",
          text: "Plan and demonstrate some ways in which an active citizen can effect change in the community, state, nation, or world",
          claimIds: [
            "civics.hi-get-involved",
            "civics.hi-oha-and-schools",
            "civics.show-up-every-level",
            "civics.run-for-office",
            "civics.campaign-help",
            "civics.track-a-bill",
            "civics.voter-registration",
          ],
          coverage: "full",
          note: "The one standard that reaches Hawaii's own participation, and the flagship's home: the standard's own example set (voting, running for office, providing public testimony, writing to policymakers) is taught as practice, and Hawaii's distinctive civic actions — voting the mailed ballot, electing the Office of Hawaiian Affairs trustees, showing up at your county (the only local layer), and advocating on the statewide school system — are the worked example.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "The Hawaii Civics flagship's structure lessons have no Hawaii code to cite.",
      body: "Hawaii Civics: How Your State Government Works teaches Hawaii's genuinely distinctive structure — the most centralized state government in the nation (four counties and essentially no city or town governments below them; the ONLY state with a single, statewide public-school system), the Constitution of 1959, a compact elected executive (only the Governor and Lieutenant Governor), a Legislature of 25 senators and 51 representatives, a judiciary where the Judicial Selection Commission (not the voters) decides retention, the elected-trustee Office of Hawaiian Affairs, and Hawaiian as an official second language — from Hawaii's own official sources. But the HCSSS Participation in a Democracy standards are federal/general: they carry NO standard for a state's own government structure. Only the civic-engagement standard (SS.PID.5.7.1) reaches Hawaii's own participation, so the flagship's structure lessons carry no claim while its civic ACTIONS do. The gap is in the standards, not the course.",
    },
    {
      heading: "English/Language Arts — deferred (Hawaii adopted the Common Core, then revised its ELA in 2024).",
      body: "Hawaii adopted the Common Core State Standards for ELA on June 7, 2010, so the shared common-core-ela file would in principle apply. But the Board of Education took committee action on a \"Revised Hawaii Common Core Standards for ELA\" in April 2024, so Hawaii's current grade 11-12 RH/RI/WHST wording may no longer be verbatim CCSS — exactly the situation that made us transcribe Iowa's and Mississippi's revised ELA rather than alias. We did not fetch and verify Hawaii's current ELA document this pass, and the rule is compare-before-aliasing, so we DEFER the ELA framework rather than blind-alias it. The catalog's source-evaluation and media-literacy work is instead claimed against Hawaii's own social-studies inquiry standards (SS.9-12.2.1, .2.2, .3.1), which we transcribed verbatim.",
    },
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Hawaii Common Core mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Hawaii adopted the NGSS (February 16, 2016), so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "The federal-heavy Participation in a Democracy standards we checked and rejected.",
      body: "SS.PID.1.17.1 (classical, natural-rights, and English-common-law philosophy behind the Constitution), SS.PID.1.11.3 (the Hamilton vs. Jefferson debate on federal strength), SS.PID.4.7.1 (policy makers, interest groups, and the media in shaping public policy — our media literacy is consumer protection, not political-media analysis), SS.PID.4.10.2 (the economic functions of government and its social services), and SS.PID.4.16.3 (the global role of the United States, geopolitics, and international economics) — the courses do not genuinely teach these, so we do not claim them. The inquiry Anchor 1 (developing compelling and supporting questions) and Anchor 4 (communicating conclusions to a range of audiences) are teaching moves rather than course content here, and are not claimed.",
    },
    {
      heading: "Hawaii's other high-school social-studies courses — deferred, not denied.",
      body: "The HCSSS also define World History and Culture (CE 1500 to Present), United States History and Government, and Modern History of Hawaiʻi at grades 9-12. The catalog's commodity, colonial, labor, civil-rights, and migration history WOULD map to several of those courses' standards, as it does in other states. We mapped the Participation in a Democracy course this pass (the flagship's home) and DEFER the World History, U.S. History and Government, and Modern History of Hawaiʻi courses to a later pass rather than claim standards we have not yet transcribed and verified.",
    },
  ],
};
