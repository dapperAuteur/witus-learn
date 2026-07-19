// ─────────────────────────────────────────────────────────────────────────────
// KANSAS — codes → course claims. Read the rule in ../index.ts before editing.
// `state-civics-ks` was written FROM Kansas's own official sources (kslegislature.gov,
// sos.ks.gov, kscourts.gov, and the Wyandotte Constitution of 1859), so Kansas's civics
// flagship gets its 1:1 state-civics course.
//
// THE INHERIT-VS-ALIAS-VS-BESPOKE CALL, made per framework from KSDE's own record (Kansas is
// MIXED — a bespoke, skills-based social-studies framework + inherited Common Core + inherited NGSS):
//   · Social studies — BESPOKE, and UNUSUAL. The Kansas Standards for History, Government, and
//     Social Studies (2013) are deliberately SKILLS-NOT-CONTENT: FIVE thematic Standards
//     (1 "Choices have consequences." … 5 "Relationships among people, places, ideas, and
//     environments are dynamic."), each with four benchmarks that follow the same verbs — x.1
//     recognize/evaluate, x.2 analyze/draw conclusions, x.3 investigate/connect to contemporary
//     issues, x.4 use/apply. The High School United States Government course (Kansas Course Code
//     04151) applies those SAME benchmarks; the document states outright (p. 101) that "state
//     assessments will focus on the Standards and Benchmarks, not specific content" and (p. 102)
//     that the content outline "is not a list of required items." So — unlike Oklahoma's or Utah's
//     content-bearing government codes — Kansas publishes NO code that names its own structure. We
//     therefore cite the BENCHMARKS (verbatim, all > 40 chars) as the standards, and Kansas's own
//     structure (plural executive, 125/40 Legislature, merit-selection Supreme Court, no citizen
//     initiative, strong home rule, 105 counties) is the CONTENT through which the benchmark skills
//     are exercised by the flagship — see the "What we don't claim" note on this.
//   · ELA — INHERITED (Common Core), but ALIASED (like Michigan, unlike Illinois). Kansas KEPT the
//     Common Core (it did NOT withdraw as Oklahoma did): its ELA is the Kansas College and Career
//     Ready Standards for English Language Arts (KCCRS), which KSDE's own HGSS document (p. 101)
//     calls "often referred to as the Common Core." Kansas prints the literacy strands under the
//     BARE CCSS codes (RH.11-12.6, WHST.11-12.7, …) without the "CCSS.ELA-Literacy" web namespace
//     the shared file carries, so ../shared/common-core-ela is adopted with each code aliased to
//     Kansas's printed bare form. We compared the RH/RI/WHST 11-12 text this catalog touches against
//     Kansas's KCCRS and the wording is verbatim Common Core.
//   · Math — INHERITED (Common Core / KCCRS), but this catalog teaches no mathematics (notClaimed).
//   · Science — INHERITED (verbatim NGSS). On June 11, 2013 the Kansas State Board of Education
//     adopted the Next Generation Science Standards AS the Kansas College and Career Ready Standards
//     for Science, using the NGSS performance-expectation codes verbatim. ../shared/ngss is adopted
//     verbatim, no aliases.
//
// Provenance: the five Standards and their benchmarks, and the High School United States Government
// course sheet, were transcribed VERBATIM from the KSDE-published "Kansas History, Government, and
// Social Studies" standards (2013 edition), fetched 2026-07-19. The document was read from a
// byte-faithful mirror of the SAME KSDE PDF served at
// s3.amazonaws.com/scschoolfiles/587/kansas_history_government_social_studies_standards.pdf (it
// carries the KSDE acknowledgments, committee roster, and Commissioner credit); text was extracted
// deterministically and every benchmark verified to read as clean English before use. The sourceUrl
// below is KSDE's canonical HGSS standards page. NOTE (authoritative-values): Kansas published a
// 2020 revision of these standards with the SAME five-standard design; teachers should confirm codes
// against the current KSDE document. The Kansas ELA code form (bare "RH.11-12.6") and its verbatim
// Common Core text were confirmed against KSDE-referenced Kansas standards listings; a live fetch of
// Kansas's own KCCRS ELA site (community.ksde.gov) was blocked (login-gated / connection refused), so
// the shared verbatim Common Core file's text is what we cite and Kansas's bare-code form is what we
// alias to.
// ─────────────────────────────────────────────────────────────────────────────

import { COMMON_CORE_ELA } from "../shared/common-core-ela";
import { NGSS } from "../shared/ngss";
import type { JurisdictionFile } from "../types";

const KS_HGSS =
  "https://www.ksde.gov/Agency/Division-of-Learning-Services/Career-Standards-and-Assessment-Services/Content-Area-F-L/History-Government-and-Social-Studies";

export const JURISDICTION: JurisdictionFile = {
  state: "KS",
  adoptions: [
    {
      framework: COMMON_CORE_ELA,
      // Kansas kept the text verbatim but prints the strands under the bare CCSS codes, so each
      // shared code is aliased to Kansas's printed bare form (the same situation as Michigan).
      aliases: {
        "CCSS.ELA-Literacy.RH.11-12.6": "RH.11-12.6",
        "CCSS.ELA-Literacy.RH.11-12.8": "RH.11-12.8",
        "CCSS.ELA-Literacy.RH.11-12.9": "RH.11-12.9",
        "CCSS.ELA-Literacy.RI.11-12.6": "RI.11-12.6",
        "CCSS.ELA-Literacy.WHST.11-12.7": "WHST.11-12.7",
        "CCSS.ELA-Literacy.WHST.11-12.8": "WHST.11-12.8",
      },
      adoption:
        "Kansas adopted the Common Core State Standards for English language arts as the Kansas College and Career Ready Standards for English Language Arts (KCCRS) and — unlike Oklahoma — never withdrew them; KSDE's own History, Government, and Social Studies document (2013, p. 101) calls the KCCRS “often referred to as the Common Core.” Kansas reproduces the CCSS text VERBATIM but prints the Reading/Writing for Literacy strands under the bare CCSS codes (RH.11-12.6, WHST.11-12.7, …) without the “CCSS.ELA-Literacy” web namespace, so the codes here are aliased to Kansas's printed bare form. We claim no mathematics standards.",
    },
    {
      framework: NGSS,
      adoption:
        "On June 11, 2013 the Kansas State Board of Education adopted the Next Generation Science Standards as the Kansas College and Career Ready Standards for Science, using the NGSS performance-expectation codes verbatim. This is not a science course, so we claim exactly one NGSS performance expectation, partially — see the note on it.",
    },
  ],
  frameworks: [
    // ── High School United States Government (Kansas HGSS Standards, 2013) ──
    // The five thematic Standards + benchmarks are the assessed standards; Kansas's own government
    // is the content vehicle. Benchmark text is verbatim from the KSDE 2013 document (pp. 10-12).
    {
      id: "ks-hgss-usg",
      subject: "Social Studies",
      name: "Kansas Standards for History, Government, and Social Studies — High School United States Government",
      publisher: "Kansas State Department of Education (KSDE) / Kansas State Board of Education",
      version:
        "Kansas History, Government, and Social Studies Standards, 2013 · Five Standards and Benchmarks (skills-based) · HS United States Government, Kansas Course Code 04151",
      fetchedOn: "2026-07-19",
      sourceUrl: KS_HGSS,
      adoption:
        "Kansas's High School United States Government course is the anchor for the Kansas Civics flagship. Kansas's standards are deliberately skills-not-content: the five thematic Standards and their benchmarks (verbatim below) are what the state assesses, and the document says outright that assessments focus on the Standards and Benchmarks, not specific content. So Kansas's own government — its plural executive, its 125/40 Legislature, its merit-selection Supreme Court, its lack of a citizen initiative, its strong home rule, and its 105 counties — is taught by the flagship as the CONTENT through which these benchmark skills are exercised. Benchmarks transcribed verbatim from the KSDE 2013 document (see the file header for the provenance note).",
      standards: [
        // — Standard 1: Choices have consequences —
        {
          code: "Standard 1, Benchmark 1.1",
          text: "The student will recognize and evaluate significant choices made by individuals, communities, states, and nations that have impacted our lives and futures.",
          claimIds: ["civics.ks-bleeding-kansas-wyandotte"],
          coverage: "partial",
          note: "Kansas's founding choice — whether to enter the Union free or slave — and its consequences (Bleeding Kansas, the Civil War, and the free-state Wyandotte Constitution still in force) are taught in depth, and the lesson's reveal prompts have the learner recognize and evaluate that choice. Partial: the benchmark's full breadth across individuals, communities, states, AND nations, and a graded evaluation, are beyond one flagship lesson.",
        },
        {
          code: "Standard 1, Benchmark 1.4",
          text: "The student will use his/her understanding of choices and consequences to construct a decision-making process and to justify a decision.",
          claimIds: ["civics.ks-get-involved", "civics.ks-no-initiative"],
          coverage: "partial",
          note: "The flagship teaches how Kansas civic decisions actually get made — including that Kansans cannot start ballot measures and only ratify amendments the Legislature refers — and prompts learners to decide how they will take part. Partial: the benchmark's construct-a-decision-making-process-and-justify-a-decision is prompted, not delivered as a graded assignment.",
        },
        // — Standard 2: Individuals have rights and responsibilities —
        {
          code: "Standard 2, Benchmark 2.1",
          text: "The student will recognize and evaluate the rights and responsibilities of people living in societies.",
          claimIds: [
            "civics.citizenship-responsibilities",
            "civics.us-citizenship-law",
            "civics.jury-service",
            "rights.landmark-cases",
          ],
          coverage: "full",
          note: "Squarely met by the general civics ladder this flagship sits atop: Know Your Rights teaches individual rights as applicable rules, and citizenship, jury service, and voting teach the responsibilities — each with active-recall and quizzes that have the learner recognize and evaluate them.",
        },
        {
          code: "Standard 2, Benchmark 2.3",
          text: "The student will investigate specific rights and responsibilities of individuals and connect those rights and responsibilities with contemporary issues.",
          claimIds: ["civics.voter-registration", "civics.jury-service", "civics.ks-get-involved"],
          coverage: "full",
          note: "Registering and voting, serving on a jury, and the Kansas get-involved lesson each take a specific right or responsibility and connect it to present-day civic life (with the Kansas-specific photo-ID and advance-voting rules flagged time-sensitive).",
        },
        {
          code: "Standard 2, Benchmark 2.4",
          text: "The student will use his/her understanding of rights and responsibilities to address contemporary issues.",
          claimIds: ["civics.ks-get-involved", "civics.show-up-every-level", "civics.track-a-bill"],
          coverage: "partial",
          note: "Addressing contemporary issues is taught as practice — showing up where an issue is decided, tracking a live bill, and Kansas's own levers for being heard. Partial: it is prompted and practiced, not run as a graded, sustained civic-action project.",
        },
        // — Standard 4: Societies experience continuity and change over time —
        {
          code: "Standard 4, Benchmark 4.1",
          text: "The student will recognize and evaluate continuity and change over time and its impact on individuals, institutions, communities, states, and nations.",
          claimIds: ["civics.ks-bleeding-kansas-wyandotte"],
          coverage: "partial",
          note: "The flagship teaches a vivid case of continuity and change: the 1859 Wyandotte Constitution, forged against slavery, is still Kansas's governing document today (heavily amended). Partial: the benchmark's full breadth across institutions, communities, states, and nations, and a graded evaluation, exceed the single lesson.",
        },
        {
          code: "Standard 4, Benchmark 4.2",
          text: "The student will analyze the context of continuity and change and the vehicles of reform, drawing conclusions about past change and potential future change.",
          claimIds: ["civics.ks-courts-merit-selection", "civics.ks-no-initiative"],
          coverage: "partial",
          note: "Two live Kansas reform questions are taught: the recurring debate over changing how Kansas selects its Supreme Court justices (a vehicle-of-reform question with potential future change), and Kansas's lack of a citizen initiative, which shapes how reform can happen at all. Partial: the analyze-and-draw-conclusions is exercised through reveal prompts, not a graded analysis.",
        },
        // — Standard 5: Relationships among people, places, ideas, and environments are dynamic —
        {
          code: "Standard 5, Benchmark 5.1",
          text: "The student will recognize and evaluate dynamic relationships that impact lives in communities, states, and nations.",
          claimIds: [
            "civics.ks-home-rule",
            "civics.ks-local-government",
            "civics.federalism-why-split-power",
            "civics.ks-plural-executive",
            "civics.ks-legislature",
          ],
          coverage: "full",
          note: "The flagship's primary home. Kansas's dynamic intergovernmental relationships are taught directly: strong home rule (state ↔ local), federalism (state ↔ federal), and the relationships among Kansas's separately elected executive officers and its two legislative chambers — each with active recall that has the learner recognize and evaluate them.",
        },
      ],
    },
  ],

  // Standards we CONSIDERED AND REJECTED — published as loudly as the claims.
  notClaimed: [
    {
      heading: "Kansas assesses SKILLS, not content — so Kansas's own structure has no code of its own.",
      body: "Kansas's standards are the five thematic Standards and their benchmarks, and KSDE states outright that assessments focus on the Standards and Benchmarks, not specific content, and that the government course's content outline is not a list of required items. So Kansas — unlike Oklahoma or Utah — publishes NO standard that names its plural executive, its 125-member House and 40-member Senate, its merit-selection Supreme Court, its absence of a citizen initiative, its strong home rule, or its 105 counties. The Kansas Civics flagship teaches all of these in depth, but as the CONTENT through which the benchmark skills are exercised; we map them onto the benchmarks (above) rather than inventing content codes Kansas does not publish.",
    },
    {
      heading: "Standard 3 (beliefs, ideas, and diversity) — not claimed.",
      body: "Standard 3 and its benchmarks (3.1-3.4) ask students to recognize, analyze, investigate, and apply the significant beliefs, contributions, and ideas of diverse peoples and groups. The Kansas Civics flagship and the general civics ladder teach government structure and civic practice, not a survey of diverse beliefs and contributions, so we do not claim Standard 3. (The catalog's history courses touch this content in other states' content-bearing frameworks, but Kansas's skills framework is the wrong home for it here.)",
    },
    {
      heading: "The other benchmarks under Standards 1, 2, 4, and 5 — not claimed.",
      body: "Within the standards we do touch, we claim only the benchmarks whose skill the flagship genuinely exercises. The analyze/draw-conclusions and use/apply benchmarks we did not map (1.2, 1.3, 2.2, 4.3, 4.4, 5.2, 5.3, 5.4) call for sustained, graded analysis or the construction of a personal/community/state narrative that this catalog prompts but does not deliver as assessed work. We leave them unclaimed rather than round a prompt up to a performance.",
    },
    {
      heading: "The federal-heavy and policy units of Kansas's US Government course.",
      body: "Kansas's HS United States Government course suggests units on Principles and Foundations of the U.S. Constitution, the Structure and Function of the Federal Government, Human and Civil Rights, Domestic and Foreign Policy, and Politics/Interest Groups/Media. The general civics ladder (US Civics 101, US Constitution 101, the three-branches courses, Know Your Rights) covers much of the first three, but Domestic and Foreign Policy (fiscal policy, GDP, treaties, NATO/UN, the Monroe Doctrine) is economics/international-relations content this catalog does not teach, so we do not claim those units.",
    },
    {
      heading: "Mathematics — nothing.",
      body: "This catalog does no mathematics instruction, so it meets no Kansas College and Career Ready (KCCRS / Common Core) mathematics standard.",
    },
    {
      heading: "Science — one partial claim, via the shared NGSS file.",
      body: "Kansas adopted the NGSS verbatim as the Kansas College and Career Ready Standards for Science (June 11, 2013), so our one honest science claim — HS-ESS3-1, partial — comes through the shared NGSS mapping with the limit stated on the entry. There is no laboratory work, investigation, or modelling in this catalog, and we will not claim more.",
    },
    {
      heading: "A 2020 revision exists — confirm current codes.",
      body: "Kansas published a 2020 revision of the History, Government, and Social Studies Standards with the same five-standard design (five standards and four associated benchmarks, measured by a Classroom-Based Assessment). We cite the 2013 edition here; a teacher should confirm the current benchmark wording against KSDE's present document before filing.",
    },
  ],
};
