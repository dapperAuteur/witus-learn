import type { AuthoredCourse } from "./authored-course";

// "Rigging for Stage and Broadcast Crews" (Careers & Media, also listed in Trade Skills).
// Slug `stage-and-broadcast-rigging`. Series `the-crew-behind-the-show` ("The Crew Behind the Show"),
// code CREW, position 01; CREW-02 is `sound-craft` and CREW-03 is `light-on-set`. `knot-tying` and
// `broadcasting-break-in` stay outside the series and link by lesson (brief section 3).
//
// RESEARCH TIER 2 (docs/course-method/README.md): fall protection, rigging hardware, loads, and work
// under suspended loads.
// Brief:   plans/future-courses/careers-and-media/2026-10-06-stage-and-broadcast-rigging-brief.md
//          (approved by BAM 2026-10-08; his decisions are in its section 8: write the course, include
//          the two fatality cases with links to the reports and to the news coverage, mark every
//          lesson that needs a qualified reviewer or a practitioner).
// Dossier: plans/future-courses/careers-and-media/_research-2026-10-06/rigging-sources.md
//          Only its VERIFIED lines are asserted. Its DERIVED lines appear only with their reasoning
//          shown in the lesson (lessons 3, 4, 7, 11, 12, 13, 15, 18). REPORTED and UNVERIFIED lines
//          are left out, or named in the lesson as open questions.
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a NAMED qualified rigging reviewer, for example
// an ETCP-certified rigger, has read every lesson marked QR with authority to change or cut it. The
// publishHoldReason in scripts/seed-courses.ts says so. No reviewer is named yet (brief question 1).
//
// WHAT IT IS NOT, stated in the description and in lessons 1 and 3: a rigging qualification, or a
// course that teaches anyone to fly a load. It never gives a capacity number. Section 4 teaches the
// shape of the angle rule as understanding, never as permission to rig; OSHA's chain-sling table is
// shown as ratios, not pounds.
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (qualified reviewer): 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20.
//     Brief marks 5 to 18 and 20. Added here: lesson 2 (its never-touch list, once BAM's account is
//     in) and lesson 4 (the rulebook framing is a legal claim).
//   P (practitioner or BAM's demonstration): 2 (BAM's own utility work, by interview) and 18 (a
//     ground-level look at a real arena rig and a counterweight fly system).
//   Unmarked: 1, 3 and 19 (job titles, the course's own limits, and the routes to certification).
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A, may be hosted on Cloudinary later: the CFR sections; OSHA's 1997 and 1984 letters, its
//    2004 letter and its sling guidance TEXT (the guidance's tables are linked, not hosted, until
//    their provenance against ASME B30.9 is checked); the 2016 Federal Register final rule; FM 5-125
//    (HQDA, "Approved for public release; distribution is unlimited"); O*NET pages (CC BY 4.0,
//    attribute the U.S. Department of Labor, Employment and Training Administration).
//    EXCEPTION: OSHA's 2013 hoist response (S8) is LINKED ONLY, never hosted as captured, because the
//    page prints the requester's full name and a home street address.
//  - Tier B, link only, never rehost: the two state FACE reports (California 12CA005, Massachusetts
//    19MA072), the three news articles, the ETCP pages, the IATSE Training Trust Fund and Stagehands
//    Local 2 pages, and the ESTA Technical Standards Program listing and EULA.
//  - Copyrighted standards (ANSI E1 through ESTA, ASME B30.9 and B30.16) are named by title and the
//    listing's own scope notes only, and linked to the listing page, never to a standard's PDF. No E1
//    standard was downloaded (downloading accepts the EULA). NCCER material is not used.
//  - FIGURES: none embedded. FM 5-125 Figure 1-17 is described in words and cited by number and page.
//
// CASES (lessons 8 and 17), BAM's decision of 2026-10-08: included, each report and each news article
// linked, never hosted. Victims are unnamed in lesson text even where the press names them (the WBUR
// article does). The reports name no venue; this course matched each to its news coverage by date,
// place and event, and the lessons say so. News lines were fetched 2026-10-13 and are quoted exactly;
// where the day's news and the investigation disagree (scaffolding against a false ceiling; 3,500
// against 3,200 pounds) the lessons teach the disagreement and take facts from the report. The
// Massachusetts title prints an em dash before the state name; its citation is cut at the dash.
// OSHA's correspondents are referred to by role, and references cite OSHA's page titles.
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts). A CTE standard
// for A/V or performing-arts production technology has not been searched.
//
// HEDGES WRITTEN INTO LESSONS (each needs a check in src/lib/research-checks.ts):
//  - L4: whether a load-in or a broadcast truss build counts as "construction work" under 1910.12(b).
//  - L5: whether the stage-edge exemption reaches beyond the stage's exposed edge (fly gallery,
//    loading rail, catwalk, truss). The QR must settle it before release.
//  - L12: whether any fixture on a show rig heats nearby wire rope past the 200 °F line.
//  - L15: which federal rule, if any, governs a powered chain hoist over a stage or arena floor.
//
// House style, matching making-string-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the lesson before;
// an APA 7 `## Sources` block on every teaching lesson with a locator on every entry (CFR paragraph,
// FR page, printed page AND PDF page for FM 5-125, report page, article paragraph); a quiz per
// section pooled to round(words / 35), clamped 40 to 100, serving 5, passing 80, shuffled; a final
// pooling 40+ and serving 10, placed last. Option lengths are balanced within each question so the
// correct option is neither visibly the longest nor the shortest. American spelling in prose;
// quotations keep their own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const ECFR = "https://www.ecfr.gov/current/title-29/section-";
const CFR_1910_184 = `Slings, 29 C.F.R. § 1910.184 (2026). ${ECFR}1910.184`;
const CFR_1926_251 = `Rigging equipment for material handling, 29 C.F.R. § 1926.251 (2026). ${ECFR}1926.251`;
const CFR_1910_28 = `Duty to have fall protection and falling object protection, 29 C.F.R. § 1910.28 (2026). ${ECFR}1910.28`;
const CFR_1910_140 = `Personal fall protection systems, 29 C.F.R. § 1910.140 (2026). ${ECFR}1910.140`;
const CFR_1926_501 = `Duty to have fall protection, 29 C.F.R. § 1926.501 (2026). ${ECFR}1926.501`;
const CFR_1926_502 = `Fall protection systems criteria and practices, 29 C.F.R. § 1926.502 (2026). ${ECFR}1926.502`;
const CFR_1910_12 = `Construction work, 29 C.F.R. § 1910.12 (2026). ${ECFR}1910.12`;
const CFR_1926_554 = `Overhead hoists, 29 C.F.R. § 1926.554 (2026). ${ECFR}1926.554`;
const OSHA_1997 =
  "Occupational Safety and Health Administration. (1997, January 28). *Fall protection for the entertainment industry under the OSH Act of 1970* [Standard interpretation letter to IATSE Local No. 9; edited 8/9/2002, corrected 6/2/2005]. https://www.osha.gov/laws-regs/standardinterpretations/1997-01-28";
const OSHA_HOIST_OVER_PEOPLE =
  "Occupational Safety and Health Administration. (n.d.). *Clarification of safe working load when hoisting overhead loads above people* [Response to an information quality correction request received December 9, 2010; the page prints no date line, and its address is dated 2013-08-29]. https://www.osha.gov/laws-regs/standardinterpretations/2013-08-29";
const OSHA_1984 =
  "Occupational Safety and Health Administration. (1984, April 23). *Interpretation of 1910.179, Overhead and gantry cranes* [Memorandum]. https://www.osha.gov/laws-regs/standardinterpretations/1984-04-23";
const OSHA_2004 =
  "Occupational Safety and Health Administration. (2004, October 6). [Standard interpretation letter on 29 C.F.R. § 1910.179(n)(2)]. https://www.osha.gov/laws-regs/standardinterpretations/2004-10-06";
const FR_2016 =
  "Occupational Safety and Health Administration. (2016, November 18). Walking-working surfaces and personal protective equipment (fall protection systems); Final rule. *Federal Register, 81*(223), 82494-83006. https://www.govinfo.gov/content/pkg/FR-2016-11-18/html/2016-24557.htm";
const OSHA_SLINGS = "Occupational Safety and Health Administration. (n.d.). *Guidance on safe sling use*. https://www.osha.gov/safe-sling-use";
const FM_5_125 =
  "Headquarters, Department of the Army. (1995, with Change 1, 2001). *Rigging techniques, procedures, and applications* (FM 5-125). https://archive.org/details/fm-5-125-rigging-techniques-procedures-and-applications-1995";
const FACE_CA =
  "California Fatality Assessment and Control Evaluation Program. (2014, April 30). *A stagehand falls from the ceiling of an amphitheater* (California FACE Report #12CA005). California Department of Public Health. https://stacks.cdc.gov/view/cdc/165117";
const FACE_MA =
  "Massachusetts Fatality Assessment and Control Evaluation Program. (2023, December 18). *Rigging crew leader crushed by light tower weight* (Report #19MA072; the printed title continues with the state name). Massachusetts Department of Public Health. https://stacks.cdc.gov/view/cdc/164834";
const NEWS_CBS_LA =
  "CBS Los Angeles. (2012, June 6). *Worker suffers fatal fall at Gibson Amphitheatre*. CBS News. https://www.cbsnews.com/losangeles/news/worker-suffers-fatal-fall-at-gibson-amphitheatre/";
const NEWS_NBC_BOSTON =
  "Greaney, A., & Salahi, L. (2019, December 28). *Event contractor dies during First Night preparations in Boston*. NBC Boston. https://www.nbcboston.com/news/local/worker-dies-during-first-night-preparations-in-boston/2054555/";
const NEWS_WBUR =
  "The Associated Press. (2019, December 29). *Worker struck, killed while preparing Boston's 'First Night' New Year's Eve celebration*. WBUR. https://www.wbur.org/news/2019/12/29/worker-death-first-night-boston-new-years-eve";
const ESTA_LISTING =
  "ESTA Technical Standards Program. (n.d.). *Published documents* [Listing]. https://tsp.esta.org/tsp/documents/published_docs.php";
const ESTA_EULA = "ESTA Technical Standards Program. (n.d.). *End user license agreement*. https://tsp.esta.org/tsp/documents/docs/EULA.pdf";
const ETCP_ABOUT = "Entertainment Technician Certification Program. (n.d.-a). *About ETCP*. ESTA. https://etcp.esta.org/etcp/about.html";
const ETCP_RIGGER =
  "Entertainment Technician Certification Program. (n.d.-b). *Get certified: Rigger, Arena / Theater*. ESTA. https://etcp.esta.org/certify/certify_rigger.html";
const ETCP_ARENA_EXAM =
  "Entertainment Technician Certification Program. (n.d.-c). *Examination content: Rigger, Arena*. ESTA. https://etcp.esta.org/certify/examination_rigger_arena.html";
const ETCP_THEATRE_EXAM =
  "Entertainment Technician Certification Program. (n.d.-d). *Examination content: Rigger, Theatre*. ESTA. https://etcp.esta.org/certify/examination_rigger_theatre.html";
const ETCP_TTF =
  "Entertainment Technician Certification Program. (n.d.-e). *Recognized electrical and rigging training programs: IATSE TTF*. ESTA. https://etcp.esta.org/training/bios/training_iatse_ttf.html";
const TTF_HOME = "IATSE Training Trust Fund. (n.d.-a). [Home page and Safety First! course descriptions]. https://www.iatsetrainingtrust.org/";
const TTF_REIMBURSE = "IATSE Training Trust Fund. (n.d.-b). *Certification reimbursement*. https://www.iatsetrainingtrust.org/certification-reimbursement/";
const LOCAL_2 = "Stagehands Local 2. (n.d.). *Journeymen & Apprentice Training Fund*. https://iatselocal2.com/All_Users/Jatf.aspx";
const ONET_LICENSE =
  "Licensed under CC BY 4.0; attribution: U.S. Department of Labor, Employment and Training Administration.";
const ONET_RIGGERS = `National Center for O\\*NET Development. (2026). *49-9096.00: Riggers*. O\\*NET OnLine. https://www.onetonline.org/link/summary/49-9096.00 ${ONET_LICENSE}`;
const ONET_AV = `National Center for O\\*NET Development. (2026). *27-4011.00: Audio and video technicians*. O\\*NET OnLine. https://www.onetonline.org/link/summary/27-4011.00 ${ONET_LICENSE}`;
const ONET_LIGHTING = `National Center for O\\*NET Development. (2026). *27-4015.00: Lighting technicians*. O\\*NET OnLine. https://www.onetonline.org/link/summary/27-4015.00 ${ONET_LICENSE}`;

/** The marker every lesson needing a qualified reviewer opens with (BAM, 2026-10-08). */
const QR = (who: string) => `> **Before release:** needs a qualified reviewer (QR): ${who}.`;
/** The marker every lesson needing a practitioner or BAM's demonstration opens with. */
const P = (what: string) => `> **Before release:** needs a practitioner or BAM's demonstration: ${what}.`;

export const STAGE_AND_BROADCAST_RIGGING_COURSE: AuthoredCourse = {
  title: "Rigging for Stage and Broadcast Crews",
  description:
    "For stagehands, arena crew and sports-broadcast utility technicians who work near rigging and need to know exactly where their job stops. The course reads the federal rules that govern the work, the stage-edge exemption in OSHA's fall-protection rule and what it does not say, what a personal fall arrest system must do, the parts and hitches of a sling, why gear with no legible rating tag is never used, how chain, wire rope, web and round slings and hooks are checked and pulled from service, and why spreading a sling's legs raises the tension in each one, including two misprinted worked examples in the Army's own rigging manual. Two state investigations of crew deaths, a fall through a false ceiling and a ballast weight that slid off a telehandler's forks, are read as cases, linked with the news coverage. It ends with the real routes to qualification: ETCP certification, IATSE training and the registered apprenticeship title Rigger. It is not a rigging qualification, it does not teach anyone to fly a load, and it never gives a capacity number. Every lesson whose safety claims need a qualified rigger or a practitioner says so at the top. The first course in The Crew Behind the Show series.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: The job and the line
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-rigs-on-a-show",
      title: "1 · Who rigs on a show",
      section: "1 · The job and the line",
      body: `**What this course is for.** It is for people who work near rigging: stagehands on a theater load-in, crew on an arena show, the utility technician on a sports broadcast. By the end you should be able to name the federal rules that generally govern the work, read a rating tag, check a sling before it is used, explain why spreading a sling's legs raises the tension in each leg, say what a fall arrest system must do, and stay out from under a load. Above all, you should be able to say where your own job stops.

**What it is not.** It is not a rigging qualification, and it does not teach anyone to fly a load. It never gives a number for what a sling, shackle or hoist can hold. Lesson 3 explains both refusals.

**Who rigs.** O\\*NET, the U.S. Department of Labor's occupation database, gives riggers their own code, 49-9096.00, and describes the work this way: "Set up or repair rigging for construction projects, manufacturing plants, logging yards, ships and shipyards, or for the entertainment industry." Two of its listed tasks: "Test rigging to ensure safety and reliability." and "Signal or verbally direct workers engaged in hoisting and moving loads to ensure safety of workers and materials."

**Where the stagehand sits.** In O\\*NET, "Stagehand" is one of the reported job titles of 27-4011.00, Audio and Video Technicians, who "Set up, maintain, and dismantle audio and video equipment ... for live or recorded events, such as concerts, meetings, conventions, presentations, podcasts, news conferences, and sporting events." A neighboring occupation, 27-4015.00 Lighting Technicians, handles "light fixtures, lighting control devices, and the associated lighting electrical and rigging equipment used for photography, television, film, video, and live productions."

**How one venue hired its crew.** A California investigation of a stagehand's death, the case in lesson 8, describes the staffing at one amphitheater: production companies "hire stage hands including electrical workers, riggers, carpenters, and painters from a local union." The report thanks "The International Alliance of Theatrical Stage Employees (IATSE), Local 33" for its help. Section 6 comes back to the union's training.

**The broadcast side.** *Break Into Sports & Media Broadcasting* covers the broadcast crew in its lessons "1 · The landscape: who does what on a broadcast", "3 · The utility technician: your fastest way in (and why knots matter)" and "13 · Game day: roles, call times, and where utility fits". None of the federal documents this course is built from describes the sports-broadcast utility job. Lesson 2 says what follows from that.

**How to read this course.** Every rule here is quoted from a document you can open, and every lesson ends with where to find it. A lesson that needs a qualified rigger or a practitioner before release says so at the top, in a box that begins "Before release".

:::reveal Which O*NET occupation names the entertainment industry among the places its workers rig? ||| 49-9096.00 Riggers: "Set up or repair rigging for construction projects, manufacturing plants, logging yards, ships and shipyards, or for the entertainment industry."

:::reveal Under which O*NET occupation is "Stagehand" a reported job title? ||| 27-4011.00, Audio and Video Technicians.

## Sources
- ${ONET_RIGGERS} Locator: summary page, description and "Tasks".
- ${ONET_AV} Locator: summary page, description and "Sample of reported job titles".
- ${ONET_LIGHTING} Locator: summary page, description.
- ${FACE_CA} Locator: p. 2, "Employer"; p. 7, "Acknowledgement".`,
    },
    {
      slug: "utility-tech-near-the-rig",
      title: "2 · The broadcast utility tech near the rig",
      section: "1 · The job and the line",
      recallContent: [
        {
          prompt: "How does O*NET describe the work of riggers (49-9096.00)?",
          answer: "\"Set up or repair rigging for construction projects, manufacturing plants, logging yards, ships and shipyards, or for the entertainment industry.\"",
        },
        {
          prompt: "Under which O*NET occupation does \"Stagehand\" appear as a reported job title?",
          answer: "27-4011.00, Audio and Video Technicians.",
        },
      ],
      body: `${P("BAM's own account of utility work on sports broadcasts (which venues, what the job touched, what crews were told never to touch), recorded as an interview, with anything shown on camera kept at ground level")}

${QR("an ETCP-certified rigger or a senior IATSE rigger, to check the never-touch list once BAM's account is in")}

**Two halves.** This lesson has a documented half and a practitioner's half. The documents this course rests on say a good deal about working near rigging and almost nothing about the sports-broadcast utility job itself. O\\*NET's description of Audio and Video Technicians names "sporting events" among the live events the occupation works, and that is as close as the federal sources come.

**What carries over to anyone near a rig.** Six rules from later lessons, each with the paragraph that states it:

1. Gear with no legible marking is not used: "Employers must not use slings without affixed and legible identification markings" (29 CFR 1910.184(c)(14)). Lesson 10.
2. Knots do not stand in for rated hardware: "Slings shall not be shortened with knots or bolts or other makeshift devices" ((c)(2)). Lesson 11.
3. Stay clear: "All employees shall be kept clear of loads about to be lifted and of suspended loads" ((c)(9)). Lesson 16.
4. Nobody rides a sling or walks under a load. OSHA's sling guidance names "Riding slings or walking under suspended loads" as a hazardous practice. Lesson 16.
5. Put rigging away: "Rigging equipment, when not in use, shall be removed from the immediate work area so as not to present a hazard to employees" (29 CFR 1926.251(a)(3)).
6. An open edge 4 feet or more above a lower level calls for fall protection under the general-industry rule (29 CFR 1910.28(b)(1)(i)). Lesson 6.

**The catalog's line.** *Knot-Tying & Rope Work* lesson "26 · Broadcast & stage rigging basics (safety-flagged)" sorts the work in two: "utility rope work", which is fine to do, and "overhead rigging / flying loads", where you "defer to certified riggers, rated slings, shackles, and load calcs." Its plainest sentence is "anything overhead or over people is rated rigging". This course keeps that line, and lesson 3 gives it federal citations.

**Where the practitioner's part begins.** The documents stop here. They do not say which venues a utility tech works, how camera and audio cable is run and protected in a stadium, where a utility tech stands while truss goes up, or what a crew chief tells a newcomer never to touch. BAM has done this work. This part of the lesson will come from a recorded interview with him, checked by a qualified rigger before release. Until then, hold to the documented half and to the catalog's line: if it is overhead or over people, it is not yours to rig.

:::reveal What does knots lesson 26 tell you to do about overhead rigging and flying loads? ||| Defer "to certified riggers, rated slings, shackles, and load calcs."

:::reveal Which hazardous practice does OSHA's sling guidance name that a ground crew must never do? ||| "Riding slings or walking under suspended loads".

## Sources
- ${ONET_AV} Locator: summary page, description.
- ${CFR_1910_184} Locator: paragraphs (c)(2), (c)(9) and (c)(14).
- ${OSHA_SLINGS} Locator: "Introduction", list of hazardous practices.
- ${CFR_1926_251} Locator: paragraph (a)(3).
- ${CFR_1910_28} Locator: paragraph (b)(1)(i).`,
    },
    {
      slug: "what-this-course-is-not",
      title: "3 · What this course is not",
      section: "1 · The job and the line",
      recallContent: [
        {
          prompt: "Which sentence does knots lesson 26 use to draw its line?",
          answer: "\"anything overhead or over people is rated rigging\"",
        },
        {
          prompt: "Name two of the six rules from lesson 2 that apply to anyone near a rig.",
          answer: "Any two of: no gear without a legible marking; no knots in place of rated hardware; stay clear of suspended loads; never ride a sling or walk under a load; put unused rigging away; fall protection at an open edge 4 feet or more up (general industry).",
        },
      ],
      body: `**Not a qualification, by the certifier's own rule.** The Entertainment Technician Certification Program, ETCP, certifies people, not equipment: "Personnel certification is the voluntary process by which a nongovernmental organization grants recognition to an individual who has demonstrated mastery in a discipline." It certifies "Arena Riggers, Theatre Riggers, Entertainment Electricians, and Portable Power Distribution Technicians," and "ETCP is a program of ESTA." To sit either rigging exam, "A candidate must have 30 points". Then the sentence that settles this course's status: "Courses taken outside a formal program of undergraduate or graduate studies do not count towards eligibility."

The reasoning, shown: the rule excludes courses outside a degree program, and this course is not part of one. Finishing it earns no ETCP eligibility points.

**Not a load table.** This course never tells you what a sling, shackle or hoist can hold. The federal sling rule puts that number on the sling itself: "Employers must not load a sling in excess of its recommended safe working load as prescribed by the sling manufacturer on the identification markings permanently affixed to the sling" (29 CFR 1910.184(c)(13)). *Making String* lesson "18 · Breaking strength, safe load, and who sets a rating" explains breaking strength, the factor of safety and who sets a rating, and this course does not repeat it. Section 4 teaches how forces change with angle so that you understand a rigger's decisions, never so that you can make them.

**The line the catalog already draws, now cited.** *Knot-Tying & Rope Work* lesson 26 ends: "Suspending anything over people, flying loads, truss and motor work: certified riggers and rated hardware only." Among its common mistakes is "using knots where rated slings/shackles are required." That lesson cites no rule for it. These are the rules:

- "Slings shall not be shortened with knots or bolts or other makeshift devices" (1910.184(c)(2)).
- For fiber-rope slings, "Knots shall not be used in lieu of splices" (1910.184(h)(3)(v)).
- In construction rigging, "Wire rope shall not be secured by knots, except on haul back lines on scrapers" (29 CFR 1926.251(c)(3)), and "Knots shall not be used in lieu of splices" (1926.251(d)(2)(v) and (d)(4)(v)).

**People and paper.** Knots lesson 26 also mentions "ETCP-style standards". ETCP certifies people. Written standards for entertainment rigging are a different thing: documents such as ANSI E1.6-1 on powered hoist systems, listed by ESTA's Technical Standards Program. Lesson 18 names them.

**What you can take from it.** A map: the rules you work under, the hardware you will see, what a rigger is weighing, where to stand, and how to qualify. And one habit: when a job crosses the line, say so and step back.

:::reveal Why does this course earn no points toward ETCP rigging eligibility? ||| ETCP states that "Courses taken outside a formal program of undergraduate or graduate studies do not count towards eligibility," and this course is not part of a degree program.

:::reveal Which paragraph of 29 CFR 1910.184 forbids shortening a sling with knots? ||| (c)(2): "Slings shall not be shortened with knots or bolts or other makeshift devices."

## Sources
- ${ETCP_ABOUT} Locator: page text, "Personnel certification" paragraph and list of certifications.
- ${ETCP_RIGGER} Locator: "Eligibility" section, the 30-point requirement and the outside-courses sentence.
- ${CFR_1910_184} Locator: paragraphs (c)(2), (c)(13) and (h)(3)(v).
- ${CFR_1926_251} Locator: paragraphs (c)(3), (d)(2)(v) and (d)(4)(v).
- ${ESTA_LISTING} Locator: entry "ANSI E1.6-1 - 2021".`,
    },
    {
      slug: "which-rulebook",
      title: "4 · Which rulebook applies",
      section: "1 · The job and the line",
      recallContent: [
        {
          prompt: "What does ETCP say about courses taken outside a degree program?",
          answer: "\"Courses taken outside a formal program of undergraduate or graduate studies do not count towards eligibility.\"",
        },
        {
          prompt: "Under 1910.184(c)(13), whose number limits the load on a sling?",
          answer: "The sling manufacturer's recommended safe working load, on the identification markings permanently affixed to the sling.",
        },
      ],
      body: `${QR("an ETCP-certified rigger or a safety professional who works under both OSHA rulebooks, to check the general-industry and construction framing and the question this lesson leaves open")}

**One letter, read closely.** In 1997 the Secretary and Senior Rigger of IATSE Local No. 9 wrote to OSHA asking which rules cover theater workers at height. OSHA's answer, dated January 28, 1997, is still on its website, marked as edited on 8/9/2002 and corrected on 6/2/2005. Its third paragraph is the shortest statement of this lesson:

> "OSHA does not have any industry specific standards for the entertainment industry. Generally the entertainment industry would be covered under the general industry standards, although there may be some construction jobs that would be required to follow the construction standards. Standards in Part 1926 also apply to construction activities at non-construction sites."

**Primary-source exercise.** Open the letter (linked below) and answer before you reveal:

:::reveal Does OSHA have a rulebook written for the entertainment industry? ||| No: "OSHA does not have any industry specific standards for the entertainment industry."

:::reveal Which rulebook generally covers entertainment work, and what is the exception? ||| The general industry standards (29 CFR Part 1910), "although there may be some construction jobs that would be required to follow the construction standards" (Part 1926).

:::reveal Which parts of Part 1910 does the letter name as "the appropriate standards"? ||| Subpart D, the general-industry fall protection standards at 1910.21 through 1910.32, and Subpart I, the personal protective equipment standards at 1910.132 through 1910.138.

**What decides it is the task.** The general-industry rules define the line: "Construction work means work for construction, alteration, and/or repair, including painting and decorating" (29 CFR 1910.12(b)). Whether a load-in, or a truss build for a broadcast, counts as construction work under that definition is a question no source read for this course decides. OSHA's letter says only that "there may be some construction jobs". This course does not answer it, and you should not guess it: ask whoever runs the job which rules the work is under.

**Why the answer matters.** The numbers differ. The general-industry rule protects an open edge at 4 feet, the construction rule at 6 (lesson 6). Slings fall under 1910.184 in general industry and rigging under 1926.251 in construction (section 3).

**States can ask more.** OSHA's sling guidance: "In States with OSHA-approved State plans there are equivalent or stricter standards." This course teaches the federal rules. The California case in lesson 8 applies California's own rules, which this course did not read and does not repeat.

**What a letter can do.** The page says so itself: "Our interpretation letters explain these requirements and how they apply to particular circumstances, but they cannot create additional employer obligations." The letter also predates today's general-industry fall rules, which OSHA issued in a final rule of November 18, 2016 (81 FR 82494). So take its durable points (general industry generally governs; Subparts D and I apply) and take current numbers from the current rules in section 2.

## Sources
- ${OSHA_1997} Locator: body paragraphs 3 and 5, counted from the salutation; the editorial notes and the boilerplate line on interpretation letters.
- ${CFR_1910_12} Locator: paragraph (b).
- ${OSHA_SLINGS} Locator: "Introduction", the state-plan sentence.
- ${FR_2016} Locator: title page, 81 FR 82494.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The job and the line",
      section: "1 · The job and the line",
      body: "A graded check on who rigs on a show, what the documents say about the broadcast utility job, what this course is not, and which federal rulebook applies. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Working at height
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-stage-edge-exemption",
      title: "5 · The stage-edge exemption",
      section: "2 · Working at height",
      recallContent: [
        {
          prompt: "What did OSHA's 1997 letter say about industry-specific standards for entertainment?",
          answer: "\"OSHA does not have any industry specific standards for the entertainment industry.\" Entertainment is generally under the general industry standards, with some construction jobs under construction standards.",
        },
        {
          prompt: "How does 29 CFR 1910.12(b) define construction work?",
          answer: "\"Construction work means work for construction, alteration, and/or repair, including painting and decorating.\"",
        },
      ],
      body: `${QR("an ETCP-certified Theatre rigger or a senior IATSE rigger, who must also settle, before release, whether the exemption reaches anything beyond the stage's own exposed edge")}

**The duty, then the exception.** The general-industry fall rule opens with the duty: "This section requires employers to provide protection for each employee exposed to fall and falling object hazards" (29 CFR 1910.28(a)(1)). Then it lists places where the section does not apply, and one of them is yours:

> "This section does not apply: ... (iii) To fall hazards presented by the exposed perimeters of entertainment stages and the exposed perimeters of rail-station platforms"

**Why OSHA kept it.** The reason is printed in the preamble to the 2016 final rule. Read it whole:

> "The third exception to the requirement to provide fall protection, specified in final paragraph (a)(2)(iii), applies to fall hazards presented by exposed perimeters of entertainment stages and rail station platforms; OSHA carried this exception over from the proposed rule. The use of guardrails or other fall protection systems could interfere with performances on stage, or create a greater hazard to the performers than would otherwise be present. OSHA recognizes that there may be circumstances when fall protection may be feasible in these occupational settings, and encourages employers in these settings to use fall protection when possible, such as during rehearsals. OSHA did not receive any comments opposing this exception, and adopted it as proposed." (81 FR 82587)

**Primary-source exercise.** Answer from the paragraph:

:::reveal Was the stage exception new in the 2016 final rule? ||| No. "OSHA carried this exception over from the proposed rule" and "adopted it as proposed."

:::reveal What two reasons does OSHA give for the exception? ||| Guardrails or other fall protection systems "could interfere with performances on stage, or create a greater hazard to the performers than would otherwise be present."

:::reveal What does OSHA encourage employers to do even so? ||| "use fall protection when possible, such as during rehearsals."

:::reveal Did anyone object to the exception during rulemaking? ||| "OSHA did not receive any comments opposing this exception."

**The same idea in 1997.** OSHA's letter to IATSE Local No. 9 put it this way: "Although OSHA recognizes it is not appropriate to put guardrails at the edge of stages, theatrical employees need to be protected from all occupational safety and health hazards."

**What the words do not say.** Read the exception again. It names "the exposed perimeters of entertainment stages". It does not name a fly gallery, a loading rail, a catwalk, a grid or a truss. Whether the exemption reaches any of those is not stated in the rule, and this course found no OSHA interpretation that answers it. This lesson therefore gives you no reason to treat any of them as exempt.

## Sources
- ${CFR_1910_28} Locator: paragraphs (a)(1) and (a)(2)(iii).
- ${FR_2016} Locator: 81 FR 82585, list of exceptions; 81 FR 82587, the paragraph quoted in full; 81 FR 82991, regulatory text of 1910.28(a)(2)(iii).
- ${OSHA_1997} Locator: body paragraph 5.`,
    },
    {
      slug: "thresholds-and-systems",
      title: "6 · Thresholds and systems",
      section: "2 · Working at height",
      recallContent: [
        {
          prompt: "What does 29 CFR 1910.28(a)(2)(iii) exempt?",
          answer: "\"fall hazards presented by the exposed perimeters of entertainment stages and the exposed perimeters of rail-station platforms\"",
        },
        {
          prompt: "Why did OSHA keep the stage exception in 2016?",
          answer: "Guardrails or other fall protection systems could interfere with performances, or create a greater hazard to performers. OSHA still encourages fall protection when possible, such as during rehearsals.",
        },
      ],
      body: `${QR("an ETCP-certified rigger or a senior IATSE rigger")}

**Four feet in general industry.** 29 CFR 1910.28(b)(1)(i) protects an employee "on a walking-working surface with an unprotected side or edge that is 4 feet (1.2 m) or more above a lower level". The protection is "one or more of the following: (A) Guardrail systems; (B) Safety net systems; or (C) Personal fall protection systems, such as personal fall arrest, travel restraint, or positioning systems."

**Six feet in construction.** 29 CFR 1926.501(b)(1) protects an employee "with an unprotected side or edge which is 6 feet (1.8 m) or more above a lower level", "by the use of guardrail systems, safety net systems, or personal fall arrest systems."

So the threshold depends on the rulebook: 4 feet if the task is general industry, 6 feet if it is construction (lesson 4). Never mix either with a state's figures, which can differ.

**Holes.** The general-industry rule also protects against falling "through any hole (including skylights) that is 4 feet (1.2 m) or more above a lower level" (1910.28(b)(3)(i)).

**Hoist areas.** Where loads are hoisted through an opening, both rulebooks speak. General industry: "When any portion of a guardrail system, gate, or chains is removed, and an employee must lean through or over the edge of the access opening to facilitate hoisting, the employee is protected from falling by a personal fall arrest system" (1910.28(b)(2)(ii)). Construction: "Each employee in a hoist area shall be protected from falling 6 feet (1.8 m) or more to lower levels by guardrail systems or personal fall arrest systems" (1926.501(b)(3)).

**Fixed ladders.** For fixed ladders that extend more than 24 feet, the general-industry rule sets dates. "Each fixed ladder installed before November 19, 2018 is equipped with a personal fall arrest system, ladder safety system, cage, or well"; "Each fixed ladder installed on and after November 19, 2018, is equipped with a personal fall arrest system or a ladder safety system"; and "On and after November 18, 2036, all fixed ladders are equipped with a personal fall arrest system or a ladder safety system" (1910.28(b)(9)(i)).

**Three kinds of system.** The rule names three ways to protect an edge: guardrails, nets and personal fall protection. Only the third is something a worker wears and clips in, and lesson 7 is about what it must do.

:::reveal At what height does the general-industry rule require protection at an unprotected side or edge? ||| 4 feet (1.2 m) or more above a lower level (1910.28(b)(1)(i)).

:::reveal By what date must every fixed ladder covered by 1910.28(b)(9)(i) carry a personal fall arrest system or a ladder safety system? ||| November 18, 2036.

## Sources
- ${CFR_1910_28} Locator: paragraphs (b)(1)(i), (b)(2)(ii), (b)(3)(i) and (b)(9)(i).
- ${CFR_1926_501} Locator: paragraphs (b)(1) and (b)(3).`,
    },
    {
      slug: "a-harness-not-a-seat",
      title: "7 · A harness, not a seat",
      section: "2 · Working at height",
      recallContent: [
        {
          prompt: "What threshold does each rulebook set for protecting an open edge?",
          answer: "4 feet in general industry (1910.28(b)(1)(i)); 6 feet in construction (1926.501(b)(1)).",
        },
        {
          prompt: "Name the three kinds of protection 1910.28(b)(1)(i) allows at an open edge.",
          answer: "Guardrail systems, safety net systems, or personal fall protection systems.",
        },
      ],
      body: `${QR("an ETCP-certified rigger or a senior IATSE rigger")}

**Two words first.** "Anchorage means a secure point of attachment for equipment such as lifelines, lanyards, or deceleration devices." "Free fall distance means the vertical displacement of the fall arrest attachment point on the employee's body belt or body harness between onset of the fall and just before the system begins to apply force to arrest the fall" (29 CFR 1910.140(b)).

**What a personal fall arrest system must do.** Under 1910.140(d)(1) it must "(i) Limit the maximum arresting force on the employee to 1,800 pounds (8 kN); (ii) Bring the employee to a complete stop and limit the maximum deceleration distance the employee travels to 3.5 feet (1.1 m)". And "Personal fall arrest systems are rigged in such a manner that the employee cannot free fall more than 6 feet (1.8 m) or contact a lower level" ((d)(2)(ii)).

**What its parts must hold.** "Lanyards and vertical lifelines must have a minimum breaking strength of 5,000 pounds (22.2 kN)" ((c)(4)). "D-rings, snaphooks, and carabiners must be capable of sustaining a minimum tensile load of 5,000 pounds (22.2 kN)" ((c)(7)). Anchorages must be "(i) Capable of supporting at least 5,000 pounds (22.2 kN) for each employee attached; or (ii) Designed, installed, and used, under the supervision of qualified person, as part of a complete personal fall protection system that maintains a safety factor of at least two" ((c)(13)). And they "must be independent of any anchorage used to suspend employees or platforms on which employees work" ((c)(12)).

None of these is a number to check by eye. The second route for anchorages runs under a qualified person, which puts that judgment in a qualified person's hands, not a ground crew's.

**A harness, not a belt.** "Body belts are prohibited as part of a personal fall arrest system" ((d)(3)). Construction got there first: "Effective January 1, 1998, body belts are not acceptable as part of a personal fall arrest system" (29 CFR 1926.502(d)). The harness attachment point is "located in the center of the employee's back near shoulder level" (1910.140(c)(22)).

**Inspect, retire, rescue.** Systems "must be inspected before initial use during each workshift for mildew, wear, damage, and other deterioration, and defective components must be removed from service" ((c)(18)). Equipment "subjected to impact loading must be removed from service immediately and not used again until a competent person inspects the system or components and determines that it is not damaged and safe for use" ((c)(17)). And "The employer must provide for prompt rescue of each employee in the event of a fall" ((c)(21)).

**The Swiss seat, 1997.** The rigger who wrote to OSHA asked "what regulations apply to the riggers, truss spot operators and others in theater who regularly work at heights at the 75' to 150' range". OSHA answered: "As a rigger, using a climbing belt "Swiss seat" as a positioning device may be permissible, but as you correctly assume, you can not use it as a fall protection device." And: "A full body harness would be an appropriate fall protection device for working at 75' to 150'." The letter predates 1910.140, so keep its point (a seat positions you; it does not arrest a fall) and take the numbers from the current rule.

**What this lesson is not.** It is not training in using a harness, and no source read for this course shows how a rescue is done. Get that training before you ever clip in; lesson 19 names one route.

:::reveal What maximum arresting force may a personal fall arrest system put on the worker? ||| 1,800 pounds (8 kN), under 1910.140(d)(1)(i).

:::reveal What did OSHA's 1997 letter say a Swiss seat may be, and what it may not be? ||| It "may be permissible" as a positioning device, but "you can not use it as a fall protection device."

## Sources
- ${CFR_1910_140} Locator: paragraphs (b), (c)(4), (c)(7), (c)(12), (c)(13), (c)(17), (c)(18), (c)(21), (c)(22), (d)(1), (d)(2)(ii) and (d)(3).
- ${CFR_1926_502} Locator: paragraph (d), opening sentence.
- ${OSHA_1997} Locator: body paragraph 4.`,
    },
    {
      slug: "case-a-fall-through-a-false-ceiling",
      title: "8 · Case: a fall through a false ceiling",
      section: "2 · Working at height",
      recallContent: [
        {
          prompt: "What three limits does 1910.140(d) set for a personal fall arrest system?",
          answer: "Maximum arresting force 1,800 pounds; maximum deceleration distance 3.5 feet; free fall no more than 6 feet, without contacting a lower level.",
        },
        {
          prompt: "Why may a Swiss seat not be used for fall protection, per OSHA's 1997 letter?",
          answer: "It may be permissible as a positioning device, but not as a fall protection device; a full body harness is the appropriate fall protection device.",
        },
      ],
      body: `${QR("an ETCP-certified rigger or a senior IATSE rigger, to check the reading of the case and the points drawn from it")}

**About this lesson.** This is a real death. California's Fatality Assessment and Control Evaluation (FACE) program investigated it and signed its report on April 30, 2014. The report names no one, and neither does this course. The report and the day's news coverage are linked below, not copied here.

**What happened.** The summary: "A stagehand died when he fell approximately 60 feet from the ceiling of an amphitheater to the floor below." He "was removing the decorations from a recent event held at the incident scene." He "climbed over the guard rail of the ceiling catwalk, walked on top of an air conditioning duct, then stepped onto a false ceiling tile to remove a suspended decoration. The false ceiling panel collapsed under his weight". "The victim was not wearing any fall protection. His supervisor was working on the floor below." It happened "On Wednesday, June 6, 2012". He "had been working as a stagehand for the past six years."

**What was there.** "There were sufficient anchorage points available for fall protection equipment" (p. 3). "Although the victim had a fall protection harness up in the ceiling area, he did not use this or tie off when he left the catwalk" (p. 4). And he "walked on surfaces (duct work and the false ceiling) which were not designed to withstand his body weight" (p. 4).

**What was missing.** The supervisor "reminded the workers to wear their fall protection equipment when leaving the catwalk, but did not verify compliance by direct observation" (p. 5). The employer's injury and illness prevention program "did not address employees working at elevated heights" (p. 2). "The employer cited by Cal/OSHA was the public entertainment company that leased and managed the amphitheater" (p. 2).

**The report's three recommendations.** "Employees working at elevated heights wear fall protection when necessary." "Employees are properly supervised when working at elevated heights." "A site-specific fall protection plan is designed and implemented for work to be performed at elevated heights."

**The news that day.** The report names no venue. A CBS Los Angeles report of the same day, June 6, 2012, describes a fatal fall of about 60 feet in an amphitheater, with Cal/OSHA notified; that match of date, height and venue type is how this course paired the two. The article reads: "Paramedics were sent to the facility about 8:30 a.m. on a report a man had fallen about 60 feet from some scaffolding, a county fire department spokesman said." The investigation tells a different story: a catwalk, a duct and a false ceiling panel. The day's news is a first account. The investigation is the record, so take facts from the report.

**Reading it as crew.**
1. The hazard was a surface, not a height alone: a ceiling not built to carry a person, reached by climbing over a guardrail.
2. The equipment was there. A harness and anchorages do nothing unattached.
3. A reminder is not supervision. The report's word is "verify".
4. The report applies California's own rules, which this course did not read; do not mix their figures with the federal ones in lesson 6.

:::reveal What gave way under the stagehand, according to the report? ||| A false ceiling panel, which "collapsed under his weight" after he climbed over the catwalk guardrail and walked on an air-conditioning duct.

:::reveal What did the day's news say he fell from, and what did the investigation find? ||| The news reported a fall "from some scaffolding"; the report found he stepped from a duct onto a false ceiling panel above the floor.

## Sources
- ${FACE_CA} Locator: p. 1, "Summary" and recommendations; p. 2, "Employer" and "Written safety programs and training"; p. 3, "Investigation"; p. 4, Recommendation #1; p. 5, Recommendation #2.
- ${NEWS_CBS_LA} Locator: paragraphs 2 and 4. Linked only, never hosted.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Working at height",
      section: "2 · Working at height",
      body: "A graded check on the stage-edge exemption, the fall-protection thresholds and systems, what a personal fall arrest system must do, and the California case. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Slings and hardware
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "sling-vocabulary",
      title: "9 · Sling vocabulary",
      section: "3 · Slings and hardware",
      recallContent: [
        {
          prompt: "What did the California report find about anchorage points in the ceiling?",
          answer: "\"There were sufficient anchorage points available for fall protection equipment.\" The stagehand had a harness up in the ceiling area and did not tie off.",
        },
        {
          prompt: "What did the supervisor do, and fail to do, according to the report?",
          answer: "He reminded the workers to wear fall protection when leaving the catwalk, but did not verify compliance by direct observation.",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger or a senior IATSE rigger, for sling and hardware practice")}

**What the sling rule covers.** 29 CFR 1910.184 "applies to slings used in conjunction with other material handling equipment for the movement of material by hoisting, in employments covered by this part." Its definition is short: "Sling is an assembly which connects the load to the material handling equipment." The types it names are "alloy steel chain, wire rope, metal mesh, natural or synthetic fiber rope (conventional three strand construction), and synthetic web (nylon, polyester, and polypropylene)."

**Round slings are not on that list.** OSHA's own sling guidance says it "does include information on synthetic round slings, which are not covered in OSHA's sling standards." Lesson 12 uses that guidance for round-sling inspection.

**Three hitches.** The rule defines each (1910.184(b)):
- "Vertical hitch is a method of supporting a load by a single, vertical part or leg of the sling."
- "Choker hitch is a sling configuration with one end of the sling passing under the load and through an end attachment, handle or eye on the other end of the sling."
- "Basket hitch is a sling configuration whereby the sling is passed under the load and has both ends, end attachments, eyes or handles on the hook or a single master link."

The Army's rigging manual, FM 5-125, adds what each does: "A choker hitch will tighten down against the load when a strain is placed on the sling." "A basket hitch is a single sling that is passed under the load with both ends hooked over the hoisting hook" (pp. 3-6 to 3-7).

**Angle of loading.** "Angle of loading is the inclination of a leg or branch of a sling measured from the horizontal or vertical plane as shown in Fig. N-184-5; provided that an angle of loading of five degrees or less from the vertical may be considered a vertical angle of loading." Section 4 shows why that angle matters so much.

**Two numbers and a test.** "Rated capacity or working load limit is the maximum working load permitted by the provisions of this section." "Proof test is a nondestructive tension test performed by the sling manufacturer or an equivalent entity to verify construction and workmanship of a sling." *Making String* lesson 18 covers breaking strength and ratings; this course does not repeat it.

**One more word.** "Designated means selected or assigned by the employer or the employer's representative as being qualified to perform specific duties." Lesson 12 shows who is designated to inspect.

**What the Army says about types.** "Fiber-rope slings are used for lifting comparatively light loads and for temporary jobs." "Properly designed and appropriately fabricated wire-rope slings are the safest type of slings" (FM 5-125, p. 3-5).

**A word left undefined.** OSHA titles its chain-sling table for "Vertical And Bridle Hitches", and ETCP's arena exam lists "2-way bridle" and "3-way bridle". The sling rule read for this course does not define a bridle, so this course does not either.

:::reveal Which sling type does OSHA's guidance say is not covered in OSHA's sling standards? ||| Synthetic round slings.

:::reveal What does FM 5-125 say a choker hitch does under strain? ||| It "will tighten down against the load when a strain is placed on the sling."

## Sources
- ${CFR_1910_184} Locator: paragraph (a) and the definitions in paragraph (b).
- ${OSHA_SLINGS} Locator: "Introduction", the round-sling sentence; "Tables and Figures", Table 1 title (https://www.osha.gov/safe-sling-use/tables-figures).
- ${FM_5_125} Locator: printed p. 3-5 (PDF p. 86); printed pp. 3-6 to 3-7 (PDF pp. 87 to 88).
- ${ETCP_ARENA_EXAM} Locator: "Planning and Engineering", "Formulas and Forces".`,
    },
    {
      slug: "no-tag-no-lift",
      title: "10 · No tag, no lift",
      section: "3 · Slings and hardware",
      recallContent: [
        {
          prompt: "How does 29 CFR 1910.184(b) define a sling?",
          answer: "\"Sling is an assembly which connects the load to the material handling equipment.\"",
        },
        {
          prompt: "Name the three hitches 1910.184(b) defines.",
          answer: "Vertical, choker and basket.",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger or a senior IATSE rigger, for sling and hardware practice")}

**The course's shorthand.** "No tag, no lift" is this course's phrase, not a regulation's. It compresses rules that all point the same way: the number on the manufacturer's marking governs, and gear without a legible marking is not used.

**Slings.** "Employers must not load a sling in excess of its recommended safe working load as prescribed by the sling manufacturer on the identification markings permanently affixed to the sling" (29 CFR 1910.184(c)(13)). "Employers must not use slings without affixed and legible identification markings" ((c)(14)).

**Construction rigging.** The construction rule says the same of all rigging equipment for material handling, which must "(i) Has permanently affixed and legible identification markings as prescribed by the manufacturer that indicate the recommended safe working load; (ii) Not be loaded in excess of its recommended safe working load as prescribed on the identification markings by the manufacturer; and (iii) Not be used without affixed, legible identification markings" (29 CFR 1926.251(a)(2)).

**Shackles.** "Employers must not use shackles with loads in excess of the rated capacities (i.e., working load limits) indicated on the shackle by permanently affixed and legible identification markings prescribed by the manufacturer" (1926.251(f)(1)).

**Hooks.** Where the manufacturer gives no recommendations, a hook "shall be tested to twice the intended safe working load before they are initially put into use" (1926.251(f)(2)).

**Hoists.** "The safe working load of the overhead hoist, as determined by the manufacturer, shall be indicated on the hoist, and this safe working load shall not be exceeded" (29 CFR 1926.554(a)(1)). Lesson 15 adds the structure the hoist hangs from.

**Primary-source exercise.** Set those paragraphs side by side and answer:

:::reveal In the sling, shackle and hoist paragraphs, who sets the number? ||| The manufacturer, every time: "as prescribed by the sling manufacturer", "prescribed by the manufacturer", "as determined by the manufacturer".

:::reveal What happens to a sling whose marking is missing or unreadable? ||| It is not used: "Employers must not use slings without affixed and legible identification markings."

**Markings to a consensus standard.** OSHA's guidance explains that "Sling manufacturers often manufacture and mark slings in accordance with the specifications set forth in the American Society of Mechanical Engineers (ASME) standard B30.9-2018, Slings, rather than with the specifications found in OSHA's existing sling standards. As long as there is no indication that the newer ASME specifications have lessened employee safety, OSHA will continue to accept, under its policy for de minimis violations, the use of slings manufactured and marked in compliance with the ASME standard." The guidance is plain about its own status: "It is advisory in nature and informational in content". The rule is the CFR.

**What a tag check is, and is not.** You can see whether a marking is there and legible. You cannot tell from the tag whether the load, the hitch and the angle keep the gear within its rating; section 4 shows why. The number that governs is the one on the tag. Not a table in a manual, not a rule of thumb, and not anything in this course.

## Sources
- ${CFR_1910_184} Locator: paragraphs (c)(13) and (c)(14).
- ${CFR_1926_251} Locator: paragraphs (a)(2), (f)(1) and (f)(2).
- ${CFR_1926_554} Locator: paragraph (a)(1).
- ${OSHA_SLINGS} Locator: "Introduction", the ASME B30.9-2018 paragraph; "Types of Slings", the advisory sentence.`,
    },
    {
      slug: "what-the-rules-forbid",
      title: "11 · What the rules forbid",
      section: "3 · Slings and hardware",
      recallContent: [
        {
          prompt: "Under 1926.251(f)(1), whose marking limits the load on a shackle?",
          answer: "The manufacturer's: the rated capacity (working load limit) shown on permanently affixed, legible identification markings prescribed by the manufacturer.",
        },
        {
          prompt: "On what condition does OSHA accept slings marked to ASME B30.9-2018?",
          answer: "As long as there is no indication that the newer ASME specifications have lessened employee safety, under its policy for de minimis violations.",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger or a senior IATSE rigger, for sling and hardware practice")}

**Shortcuts with knots.** "Slings shall not be shortened with knots or bolts or other makeshift devices" (29 CFR 1910.184(c)(2)). For fiber-rope slings, "Knots shall not be used in lieu of splices" ((h)(3)(v)). In construction, "Wire rope shall not be secured by knots, except on haul back lines on scrapers" (29 CFR 1926.251(c)(3)), and again "Knots shall not be used in lieu of splices" (1926.251(d)(2)(v) and (d)(4)(v)).

**Makeshift links.** For chain slings: "Makeshift links or fasteners formed from bolts or rods, or other such attachments, shall not be used" (1910.184(e)(2)(ii)). In construction: "Job or shop hooks and links, or makeshift fasteners, formed from bolts, rods, etc., or other such attachments, shall not be used" (1926.251(b)(3)). The Army agrees: "Never fasten chain links together with bolts or wire because such connections weaken the chain and limit its SWC" (FM 5-125, p. 3-3). SWC is the manual's abbreviation for safe working capacity (*Making String* lesson 18).

**The weakest part governs.** Chain attachments "shall have a rated capacity at least equal to that of the alloy steel chain with which they are used or the sling shall not be used in excess of the rated capacity of the weakest component" (1910.184(e)(2)(i)).

**Eyes and clips: rule and manual side by side.** The construction rule: "Eyes in wire rope bridles, slings, or bull wires shall not be formed by wire rope clips or knots" (1926.251(c)(4)(iii)). It also says "When U-bolt wire rope clips are used to form eyes, Table H-2 shall be used to determine the number and spacing of clips" ((c)(5)); this course did not read that table. Reading the two together: clips may form eyes in wire rope generally, but not the eye of a sling, bridle or bull wire. FM 5-125 says "Wire-rope clips are reliable and durable" and to "Use them, repeatedly, to make eyes in wire rope" (p. 2-35), without that limit. An Army field manual is not a rule for a U.S. employer. Where they differ, the rule governs.

**Handling.** From the sling rule's safe operating practices (1910.184(c)):
- "(1) Slings that are damaged or defective shall not be used."
- "(3) Sling legs shall not be kinked."
- "(5) Slings used in a basket hitch shall have the loads balanced to prevent slippage."
- "(7) Slings shall be padded or protected from the sharp edges of their loads."
- "(10) Hands or fingers shall not be placed between the sling and its load while the sling is being tightened around the load."
- "(11) Shock loading is prohibited."
- "(12) A sling shall not be pulled from under a load when the load is resting on the sling."

FM 5-125 says why shock matters: "An impact load occurs when an object is dropped suddenly for a distance and stopped. The impact load in such a case is several times the weight of the load" (p. 3-2).

**Chain and hooks.** "Do not permit chains to twist or kink when under strain." "Do not paint chains to prevent rusting because the paint will interfere with the action of the links" (p. 3-3). The manual says to "mouse" a hook "as a safety measure to prevent slings or ropes from jumping off", and adds that mousing "does not strengthen it materially" (pp. 3-3 to 3-4).

:::reveal What does the sling rule say about putting your hands between a sling and its load? ||| "Hands or fingers shall not be placed between the sling and its load while the sling is being tightened around the load" ((c)(10)).

:::reveal Where FM 5-125 and 1926.251 differ on clip-formed eyes, which governs a U.S. employer? ||| The rule: 1926.251(c)(4)(iii) forbids clip-formed eyes in slings, bridles and bull wires, and an Army field manual is not a rule for a U.S. employer.

## Sources
- ${CFR_1910_184} Locator: paragraphs (c)(1) to (c)(12), (e)(2)(i), (e)(2)(ii) and (h)(3)(v).
- ${CFR_1926_251} Locator: paragraphs (b)(3), (c)(3), (c)(4)(iii), (c)(5), (d)(2)(v) and (d)(4)(v).
- ${FM_5_125} Locator: printed p. 2-35 (PDF p. 71), clips; printed p. 3-2 (PDF p. 83), impact load; printed pp. 3-3 to 3-4 (PDF pp. 84 to 85), chains and hooks.`,
    },
    {
      slug: "inspection-and-removal",
      title: "12 · Inspection and removal from service",
      section: "3 · Slings and hardware",
      recallContent: [
        {
          prompt: "What may not be used in place of a splice, in both the general-industry and construction rules?",
          answer: "Knots: \"Knots shall not be used in lieu of splices.\"",
        },
        {
          prompt: "Under 1910.184(e)(2)(i), what governs a chain sling whose attachments are rated lower than the chain?",
          answer: "The sling may not be used in excess of the rated capacity of the weakest component.",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger or a senior IATSE rigger, for sling and hardware practice")}

**Who inspects, and when.** "Each day before being used, the sling and all fastenings and attachments shall be inspected for damage or defects by a competent person designated by the employer. Additional inspections shall be performed during sling use, where service conditions warrant. Damaged or defective slings shall be immediately removed from service" (29 CFR 1910.184(d)). Construction rigging is inspected "prior to use on each shift and as necessary during its use to ensure that it is safe. Defective rigging equipment shall be removed from service" (1926.251(a)(1)). Thorough periodic inspection of chain slings "shall in no event be at intervals greater than once every 12 months" (1910.184(e)(3)(i)). For round slings, OSHA's guidance gives periodic inspection "at intervals no greater than 12 months": "Yearly for normal service use, Monthly to quarterly for severe service".

The rule gives the inspection to a competent person the employer designates. If that is not you, your part is to notice and to say so.

**Wire rope slings come out of service for** "(i) Ten randomly distributed broken wires in one rope lay, or five broken wires in one strand in one rope lay. (ii) Wear or scraping of one-third the original diameter of outside individual wires. (iii) Kinking, crushing, bird caging or any other damage resulting in distortion of the wire rope structure. (iv) Evidence of heat damage. (v) End attachments that are cracked, deformed or worn. (vi) Hooks that have been opened more than 15 percent of the normal throat opening measured at the narrowest point or twisted more than 10 degrees from the plane of the unbent hook. (vii) Corrosion of the rope or end attachments" (1910.184(f)(5)).

**Synthetic web slings come out for** "(i) Acid or caustic burns; (ii) Melting or charring of any part of the sling surface; (iii) Snags, punctures, tears or cuts; (iv) Broken or worn stitches; or (v) Distortion of fittings" ((i)(9)).

**What the Army tells you to look for.** "Worn spots will show up as shiny flattened spots on the wires." Rope is unsafe if "Individual wires are broken next to one another". Replace it on "evidence of an electrical arc strike (or other thermal damage) or crushing damage", or of "birdcage" damage (FM 5-125, p. 1-20). Its Figure 1-17, "Unserviceable wire rope," draws two failures, labeled "Popped core" and "Birdcage" (p. 1-21). Hooks: "Hooks usually fail by straightening. Any deviation from the original inner arc indicates that the hook has been overloaded" (p. 3-3). Chain: "Bent links are a warning that the chain has been overloaded and might fail suddenly under a load" (p. 3-1).

**Three discard rules, not one.** For broken wires, the sling rule counts "Ten randomly distributed broken wires in one rope lay"; the construction rule counts "10 percent of the total number of wires" in "any length of eight diameters" (1926.251(c)(4)(iv)); the Army manual says replace at "2.5 percent of the total rope wires" broken in one lay (p. 1-20), and calls sling rope unsafe at "4 percent or more" (p. 3-9). A lay is "the length along the rope that a strand makes one complete spiral around the rope core" (p. 1-20). The three are not interchangeable. The rule that governs the job and the manufacturer decide, not a remembered number.

**Heat.** "Fiber core wire rope slings of all grades shall be permanently removed from service if they are exposed to temperatures in excess of 200 °F" ((f)(3)). The rule does not mention stage lighting. Whether any fixture on your rig heats nearby rope that far is a question for the rigger and the manufacturer, not something this course can tell you.

*Making String* lesson "19 · Inspecting a rope" covers fiber rope.

:::reveal Name four conditions that take a wire rope sling out of service under 1910.184(f)(5). ||| Any four of: ten random broken wires in one lay or five in one strand in one lay; wear of one-third the diameter of outside wires; kinking, crushing or bird caging; heat damage; cracked, deformed or worn end attachments; hooks opened more than 15 percent or twisted more than 10 degrees; corrosion.

:::reveal Who inspects slings each day under 1910.184(d)? ||| "a competent person designated by the employer".

## Sources
- ${CFR_1910_184} Locator: paragraphs (d), (e)(3)(i), (f)(3), (f)(5) and (i)(9).
- ${CFR_1926_251} Locator: paragraphs (a)(1) and (c)(4)(iv).
- ${OSHA_SLINGS} Locator: "Synthetic Round Slings", inspection (https://www.osha.gov/safe-sling-use/synth-round).
- ${FM_5_125} Locator: printed p. 1-20 (PDF p. 35), wire rope inspection; printed p. 1-21 (PDF p. 36), Figure 1-17; printed p. 3-1 (PDF p. 82), chains; printed p. 3-3 (PDF p. 84), hooks; printed p. 3-9 (PDF p. 90), slings.`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Slings and hardware",
      section: "3 · Slings and hardware",
      body: "A graded check on sling vocabulary, reading the marking, what the rules forbid, and inspection and removal from service. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Forces
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "why-spreading-the-legs-raises-tension",
      title: "13 · Why spreading the legs raises the tension",
      section: "4 · Forces",
      recallContent: [
        {
          prompt: "What three discard rules for broken wires does lesson 12 set side by side?",
          answer: "1910.184(f)(5)(i): ten random broken wires in one lay; 1926.251(c)(4)(iv): 10 percent of all wires in eight diameters; FM 5-125: 2.5 percent in one lay (and 4 percent for slings). The governing rule and the manufacturer decide.",
        },
        {
          prompt: "Above what temperature must fiber core wire rope slings come out of service?",
          answer: "200 °F, permanently (1910.184(f)(3)).",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger, to check the formula, the recomputed examples and the framing that none of it is permission to rig")}

**Understanding, not permission.** This lesson explains why a rigger worries about angles. It gives no capacity for any sling, and nothing in it lets you decide one. The tag governs (lesson 10), and the angle is the rigger's call.

**The rule in words.** FM 5-125: "The lifting capacity of a sling is reduced as the angle of its legs to the horizontal is reduced (as the legs of a sling are spread)" (p. 3-9).

**The rule as a formula.** The manual prints T = W/N × L/V, where "T = Tension in a single sling leg (which may be more than the weight of the load lifted)", "W= Weight of the load to be lifted", "N = Number of slings", "L = Length of sling", and "V = Vertical distance, measured from the hook to the top of the load". "L and V must be expressed in the same unit of measure."

**Why spreading raises T.** Each leg is the long side of a right triangle whose upright side is V, so V can never be longer than L, and L/V is never less than 1. Spread the legs and the hook drops toward the load: V shrinks while L stays the same, so L/V grows, and T with it.

**A misprint to catch.** The manual's worked example: an 1,800-pound load on two legs, each sling 8 feet long, vertical distance 6 feet. It prints the answer as "1,200 pounds or 6 tons". Work it: 1,800 ÷ 2 = 900; 900 × 8 ÷ 6 = 1,200 pounds. A ton is 2,000 pounds, so 1,200 pounds is 0.6 ton, not 6.

:::reveal Recompute FM 5-125's example: W = 1,800 pounds, N = 2, L = 8 feet, V = 6 feet. What is T, and what is wrong with the printed line? ||| T = 1,800 ÷ 2 × 8 ÷ 6 = 1,200 pounds, which is 0.6 ton. The printed "6 tons" is wrong by a factor of ten.

**A second misprint.** On p. 3-3, a hook example prints "SWC=D²=(1 1/4)² 16 tons or 3,125 pounds". Check both sides: 1.25 × 1.25 = 1.5625, and 3,125 ÷ 2,000 = 1.5625 tons. Both agree on 1.5625 tons, about 1.6. The printed "16" is wrong by a factor of ten. This course does not teach the hook rule itself as a load.

:::reveal Check FM 5-125's hook line "(1 1/4)² 16 tons or 3,125 pounds". What should the tons figure be? ||| 1.25² = 1.5625, and 3,125 pounds ÷ 2,000 = 1.5625 tons. The figure should be about 1.6 tons, not 16.

**The critical angle.** "A particular angle formed by the sling legs with the horizontal where the tension within each sling leg equals the weight of the load is called the critical angle". The manual gives "Critical angle = 60/N", with N the number of sling legs, and says "When using slings, stay above the critical angle." The shortcut is an approximation. Each leg carries the full weight when N times the sine of the angle equals 1: for two legs, sine 1/2, exactly 30°, matching 60/2; for four legs, sine 1/4, about 14.5°, against 60/4 = 15°.

**A floor for round slings.** OSHA's guidance: "Do not use horizontal angles less than 30 degrees except as recommended by the sling manufacturer or a qualified person."

**The shape of OSHA's chain table.** OSHA's Table 1, "Rated Load For Grade 80 Alloy Steel Chain Slings Vertical And Bridle Hitches", lists a single-leg rating and double-leg ratings at 60°, 45° and 30°. This course does not print the pounds, because a table is not your sling's tag. It prints the pattern. In the first row the double-leg ratings come to about 1.7, 1.4 and 1.0 times the single-leg rating, close to 2 × sine of the angle: 1.73, 1.41, 1.00. At 30°, two legs carry no more than one leg hanging straight.

**Spreaders and shock.** With a spreader bar, "The determining factor in computing the safe lifting capacity of the sling is the stress (or tension) in the sling leg above the spreader" (p. 3-8). Formulas assume a steady load; an impact load "is several times the weight of the load" (p. 3-2), which is why shock loading is prohibited (lesson 11).

**What certified riggers are examined on.** ETCP's arena exam gives 25 questions to "Formulas and Forces", including "Calculate sling length and forces" for a "2-way bridle", a "3-way bridle" and "Breast-lines", and candidates get "a formula sheet to serve as an aid". That is the depth this lesson points toward and does not reach.

## Sources
- ${FM_5_125} Locator: printed p. 3-2 (PDF p. 83), impact load; printed p. 3-3 (PDF p. 84), hook example (page image); printed p. 3-8 (PDF p. 89), spreaders; printed p. 3-9 (PDF p. 90), formula, worked example and critical angle (page image; the formulas are images).
- ${OSHA_SLINGS} Locator: "Synthetic Round Slings", the 30-degree sentence (https://www.osha.gov/safe-sling-use/synth-round); "Tables and Figures", Table 1, first row, 7/32 in (https://www.osha.gov/safe-sling-use/tables-figures).
- ${ETCP_ARENA_EXAM} Locator: "Planning and Engineering", "Formulas and Forces"; the formula-sheet note.`,
    },
    {
      slug: "blocks-and-hand-chain-hoists",
      title: "14 · Blocks, mechanical advantage and the hand chain hoist",
      section: "4 · Forces",
      recallContent: [
        {
          prompt: "In T = W/N × L/V, why does spreading a sling's legs raise T?",
          answer: "Spreading the legs shrinks V (the vertical distance) while L (the sling length) stays the same, so L/V grows and so does the tension in each leg.",
        },
        {
          prompt: "What should FM 5-125's printed \"1,200 pounds or 6 tons\" read?",
          answer: "1,200 pounds, which is 0.6 ton.",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger")}

**Mechanical advantage.** FM 5-125: "The mechanical advantage (MA) of a machine is the amount by which the machine multiplies the force applied to it to lift or move a load." "A block consists of a wood or metal frame containing one or more rotating pulleys called sheaves". And "Blocks used in the tackle to change the direction of the pull without affecting the MA of the system are called leading blocks" (p. 3-14).

**Count the lines.** "In a simple tackle system, the MA always will be the same as the number of lines supporting the load." "In counting, include the fall line if it leads out of a traveling block" (p. 3-18). A leading block changes where you pull from, not how hard.

:::reveal In a simple tackle, how do you find the mechanical advantage? ||| Count the lines supporting the load, including the fall line if it leads out of a traveling block (FM 5-125, p. 3-18).

**The hand chain hoist.** "The load can remain stationary without requiring attention" (p. 3-22). The manual gives efficiencies by type: spur-gear "about 85 percent", screw-gear "about 50 percent", differential "only about 35 percent".

**Built to warn you.** "Ordinarily, chain hoists are constructed with their lower hook as the weakest part of the assembly." "The lower hook will start to spread under overload, indicating to the operator that he is approaching the overload point of the chain hoist" (p. 3-23). And: "Any evidence of spreading of the hook or excessive wear is sufficient cause to replace the hook. If the links of the chain are distorted, it indicates that the chain hoist has been heavily overloaded and is probably unsafe for further use" (p. 3-24).

**Chain warns differently from wire rope.** "Chains usually stretch under excessive loading so that the individual links bend slightly. Bent links are a warning that the chain has been overloaded and might fail suddenly under a load. Wire rope, on the other hand, fails a strand at a time, giving warning before complete failure occurs. If a chain is equipped with the proper hook, the hook should start to fail first, indicating that the chain is overloaded" (p. 3-1). That is why the manual advises "a hook that is weaker than the chain to which it is attached", so that "hook distortion will occur before the chain is overloaded" (p. 3-3).

**What a ground crew can see.** A spread or opened hook, a bent or distorted link, a hook that has lost its original inner arc: each is visible from the ground once the gear is down, and each is a reason to take it out of use and tell the rigger. Lesson 12 gives the sling rule's own limits for hooks.

**What this lesson does not teach.** Operating a hoist, rigging a tackle, or hauling a person. *Knot-Tying & Rope Work* lesson "25 · Basic rescue uses (safety-flagged)" says it plainly: hauling a load with mechanical advantage, done safely, is "a trained skill with rated anchors, not something to improvise under load." FM 5-125 is about hand chain hoists. Electric chain hoists, the subject of the entertainment standards ESTA lists, are lesson 15's question.

:::reveal Which part of a hand chain hoist does FM 5-125 say is ordinarily built as the weakest, and why? ||| The lower hook, so that it "will start to spread under overload," warning the operator before the hoist reaches its overload point.

## Sources
- ${FM_5_125} Locator: printed p. 3-1 (PDF p. 82), chain and wire rope failure; printed p. 3-3 (PDF p. 84), hooks; printed p. 3-14 (PDF p. 95), mechanical advantage and blocks; printed p. 3-18 (PDF p. 99), counting lines; printed pp. 3-22 to 3-24 (PDF pp. 103 to 105), chain hoists.`,
    },
    {
      slug: "overhead-hoists-and-structure",
      title: "15 · Overhead hoists and what they hang from",
      section: "4 · Forces",
      recallContent: [
        {
          prompt: "How does FM 5-125 say you find the mechanical advantage of a simple tackle?",
          answer: "It equals the number of lines supporting the load, counting the fall line if it leads out of a traveling block.",
        },
        {
          prompt: "How does chain warn of overload, compared with wire rope?",
          answer: "Chain links bend (and the chain might then fail suddenly); wire rope fails a strand at a time, giving warning before complete failure.",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger, who must also confirm before release that this lesson still stops where the documents stop on powered chain hoists")}

**The construction rule.** 29 CFR 1926.554 governs overhead hoists in construction:
- "(1) The safe working load of the overhead hoist, as determined by the manufacturer, shall be indicated on the hoist, and this safe working load shall not be exceeded."
- "(2) The supporting structure to which the hoist is attached shall have a safe working load equal to that of the hoist."
- "(4) The hoist shall be installed only in locations that will permit the operator to stand clear of the load at all times."
- "(6) All overhead hoists in use shall meet the applicable requirements for construction, design, installation, testing, inspection, maintenance, and operation, as prescribed by the manufacturer."

**A question from the entertainment industry.** A request received December 9, 2010, raised "OSHA's Overhead hoists standard with respect to hoisting overhead loads above people in the entertainment industry", citing 1926.554(a)(2). The requester proposed that the supporting structure "should be at least 150 percent of the safe working load of the hoist." OSHA's response, signed by the Director of the Directorate of Construction, did not adopt it: "In determining the safe working load of a supporting structure for a hoist, the design already takes into consideration all of the expected impact forces that would be imposed on it including dynamic loading due to regular and emergency stops." "In addition, the design of the supporting structure also includes a factor of safety in accordance with applicable codes. No further modification of the safe working load is required." It also pointed to "ASME B30.16-2007, Overhead Hoist (Underhung)." The page prints no date line; its web address is dated August 29, 2013.

:::reveal What did the 2010 request propose, and what did OSHA answer? ||| It proposed a supporting structure of at least 150 percent of the hoist's safe working load. OSHA answered that the structure's design already accounts for expected impact forces and includes a factor of safety under applicable codes, so "No further modification of the safe working load is required."

**General industry, 1984.** An OSHA memorandum of April 23, 1984, says its position on "monorails, monorail cranes, top running single girder cranes and overhead hoists has not changed since our 1972 interpretation by John J. Klocko. Such equipment is not covered under 1910.179." Hazards from such equipment "should be regulated under Section 5(a)(1) of the Act", and the memo refers to standards including "ANSI B30.16 Overhead Hoists". It is a general-industry memo, and this course does not read it as an answer for stages.

**The hook carries the load.** A 2004 OSHA letter, answering a refinery question under the crane rule, says: "The quoted provision requires the load to be attached to the hook (by means of a sling or other approved device)."

**Where the Army manual stops.** FM 5-125 covers hand chain hoists. Nothing in its contents or its chapter 3 addresses electric chain hoists, truss or theater counterweight systems, which are the core of arena and theater rigging. Its chapters 4 to 6 are "Anchors and Guy Lines", "Lifting and Moving Equipment" and "Scaffolds": field engineering.

**Where the entertainment standards begin.** ESTA's listing describes ANSI E1.6-1 - 2021 as setting requirements "for the design, manufacture, installation, inspection, and maintenance of powered hoist systems for lifting and suspension of loads for performance, presentation, and theatrical production." It adds: "It does not apply to the structure to which the hoist is attached, to attachment of loads to the load carrying device, or to systems for flying people." ANSI E1.6-3 - 2019 "establishes minimum safety requirements for the selection and use of serially manufactured electric link-chain hoists in the entertainment industry." These are copyrighted; this course quotes only the listing.

**What this lesson does not answer.** Which federal rule, if any, governs a powered chain hoist hung over a stage or an arena floor is a question this course could not settle from the documents it read, so it gives no answer. What the documents it did read all point toward is the same: the manufacturer's marked load on the hoist, a supporting structure rated to match, and nobody under the load (1910.184(c)(9), lesson 16).

## Sources
- ${CFR_1926_554} Locator: paragraphs (a)(1), (a)(2), (a)(4) and (a)(6).
- ${OSHA_HOIST_OVER_PEOPLE} Locator: opening paragraph, the request; response paragraphs on design and factor of safety; the ASME B30.16-2007 suggestion. Linked only.
- ${OSHA_1984} Locator: memorandum body, paragraphs on 1910.179 and Section 5(a)(1).
- ${OSHA_2004} Locator: response to the question on 1910.179(n)(2).
- ${FM_5_125} Locator: contents; chapter 3; chapter openings at PDF pp. 108, 126 and 145.
- ${ESTA_LISTING} Locator: entries "ANSI E1.6-1 - 2021" and "ANSI E1.6-3 - 2019", scope notes.`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Forces",
      section: "4 · Forces",
      body: "A graded check on why spreading a sling's legs raises the tension, the two misprints in FM 5-125, blocks and hand chain hoists, and overhead hoists and their supporting structure. No question asks for a capacity. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Under the load
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "falling-objects-and-the-fall-zone",
      title: "16 · Falling objects and the fall zone",
      section: "5 · Under the load",
      recallContent: [
        {
          prompt: "What does 1926.554(a)(2) require of the structure an overhead hoist hangs from?",
          answer: "\"The supporting structure to which the hoist is attached shall have a safe working load equal to that of the hoist.\"",
        },
        {
          prompt: "What does ESTA's listing say ANSI E1.6-1 does not apply to?",
          answer: "\"the structure to which the hoist is attached, to attachment of loads to the load carrying device, or to systems for flying people.\"",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger")}

**Stay clear.** The sling rule is direct: "Suspended loads shall be kept clear of all obstructions" and "All employees shall be kept clear of loads about to be lifted and of suspended loads" (29 CFR 1910.184(c)(8) and (c)(9)). OSHA's sling guidance names, among hazardous practices, "Riding slings or walking under suspended loads". The hoist rule puts the operator out from under too: a hoist "shall be installed only in locations that will permit the operator to stand clear of the load at all times" (1926.554(a)(4)).

**The fall zone.** The Massachusetts investigation in lesson 17 defines it: "The fall zone of an object is the potential path the object will take if it tips or falls uncontrollably. The higher an object is lifted, the larger the fall zone becomes." A fall zone is not only the footprint under a load. It is wherever the load could land.

**Head protection and barricades, general industry.** "When an employee is exposed to falling objects, the employer must ensure that each employee wears head protection that meets the requirements of subpart I of this part" (29 CFR 1910.28(c)). One of the rule's options is "Barricading the area into which objects could fall, prohibiting employees from entering the barricaded area, and keeping objects far enough from an edge or opening to prevent them from falling to a lower level."

**Construction.** "When an employee is exposed to falling objects, the employer shall have each employee wear a hard hat and shall implement one of the following measures:" toeboards, screens or guardrails; a canopy; or barricading (29 CFR 1926.501(c)).

**Keep the ground clear.** "Rigging equipment, when not in use, shall be removed from the immediate work area so as not to present a hazard to employees" (1926.251(a)(3)). "A sling shall not be pulled from under a load when the load is resting on the sling" (1910.184(c)(12)).

**Why distance matters.** A dropped load that is stopped hits with an impact load "several times the weight of the load" (FM 5-125, p. 3-2). A barricade keeps people out of the place a load can fall.

**What a ground crew does.**
1. Before a lift, find where the load could land, not only where it hangs.
2. Keep out of that zone, and keep others out. A barricade, where one is set, means nobody crosses it.
3. Never put any part of yourself under a load to see where it will go.
4. Clear unused rigging from the work area.
5. If someone is under a load, say so before anything else happens.

:::reveal How does the Massachusetts report define the fall zone? ||| "The fall zone of an object is the potential path the object will take if it tips or falls uncontrollably. The higher an object is lifted, the larger the fall zone becomes."

:::reveal Which paragraph of 1910.184 keeps employees clear of suspended loads? ||| (c)(9): "All employees shall be kept clear of loads about to be lifted and of suspended loads."

## Sources
- ${CFR_1910_184} Locator: paragraphs (c)(8), (c)(9) and (c)(12).
- ${OSHA_SLINGS} Locator: "Introduction", list of hazardous practices.
- ${CFR_1926_554} Locator: paragraph (a)(4).
- ${FACE_MA} Locator: p. 9, Recommendation #1, "Discussion".
- ${CFR_1910_28} Locator: paragraph (c) and its option (3).
- ${CFR_1926_501} Locator: paragraph (c).
- ${CFR_1926_251} Locator: paragraph (a)(3).
- ${FM_5_125} Locator: printed p. 3-2 (PDF p. 83).`,
    },
    {
      slug: "case-a-ballast-weight-and-the-fall-zone",
      title: "17 · Case: a ballast weight and the fall zone",
      section: "5 · Under the load",
      recallContent: [
        {
          prompt: "What hazardous practice does OSHA's sling guidance name about suspended loads?",
          answer: "\"Riding slings or walking under suspended loads\".",
        },
        {
          prompt: "Under 1910.28(c), what must each employee exposed to falling objects wear?",
          answer: "Head protection that meets the requirements of subpart I.",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger, to check the reading of the case and the points drawn from it")}

**About this lesson.** This is a real death. Massachusetts' Fatality Assessment and Control Evaluation (FACE) program investigated it and dated its report December 18, 2023. The report names no one, and neither does this course. Some of the news coverage linked below names the worker; this course does not repeat it.

**What happened.** The summary: "On December 28, 2019, a male 34-year-old rigging crew leader was fatally injured while assisting in the construction of a stage light tower. He was helping to position a light tower ballast weight when it slid off the forks of an all-terrain telehandler and crushed him." The scene was an "Outdoor temporary entertainment venue"; the event type, "Struck by falling object".

**The load.** "The ballast weight that was involved in the incident weighed 3,200 pounds (Figure 2). It was a 36" cube consisting of concrete with rebar reinforcement within a welded steel plate shell." The towers used "eight-foot sections of aluminum truss".

**Two employers, one load.** The telehandler was "operated by an employee of another company." The crew leader "was reportedly looking underneath the ballast as it was being moved" (p. 3).

**The report's contributing factors.** "Working within the fall zone of hoisted materials"; "Failure to conduct a job hazard analysis"; "Failure to provide required training to equipment operators"; "Lack of coordination of safety and health programs at a multi-employer worksite." Note the report's own highlight about his employer: "Employer provided comprehensive training". Training did not keep him out of the fall zone.

**The fall zone.** Recommendation #1 is where lesson 16's definition comes from: "The fall zone of an object is the potential path the object will take if it tips or falls uncontrollably. The higher an object is lifted, the larger the fall zone becomes" (p. 9). The report cites the federal powered industrial truck rule, 29 CFR 1910.178(m)(2), which this course did not read.

**How the news reported it.** The report says the program "learned of the incident from local media on the day of the event" and reviewed "additional news coverage" (p. 3). It names no venue. NBC Boston's report of December 28, 2019, on a Boston New Year's Eve event, matches it by date, place and the light tower; that match is how this course paired them. Its subhead: "The tragic accident occurred while crews were setting up a light tower". It reported that "a 3,500-pound ballast fell from a forklift and crashed onto his chest around 10 a.m. Saturday morning". The investigation's report, four years later, gives the ballast's weight as 3,200 pounds. An Associated Press report carried by WBUR added: "The death is under investigation by Boston police, the Suffolk district attorney's office, and the federal Occupational Safety and Health Administration." Take the day's account as the day's account, and the facts from the report.

**Reading it as crew.**
1. The crew leader was guiding the load and looking under it: inside its fall zone, at the moment it fell.
2. The machine was run by another company's employee. On a shared site, who is moving what has to be settled before the move.
3. The report counts the missing job hazard analysis among the contributing factors: nobody had planned the move before it began.
4. If you need to see where a load will land, find a way to see it from outside the fall zone, or stop the move.

:::reveal Which contributing factor does the report list first? ||| "Working within the fall zone of hoisted materials".

:::reveal The day's news said 3,500 pounds. What does the report say the ballast weighed, and which should you cite? ||| 3,200 pounds. Cite the investigation's documented figure, not the first-day account.

## Sources
- ${FACE_MA} Locator: p. 1, "Summary", "Contributing factors" and "Incident highlights"; p. 3, "Introduction" and "Employer"; p. 4, "Equipment"; p. 9, Recommendation #1. Linked only, never hosted.
- ${NEWS_NBC_BOSTON} Locator: subhead; paragraph 2. Linked only.
- ${NEWS_WBUR} Locator: the paragraph beginning "The death is under investigation". Linked only.`,
    },
    {
      slug: "arena-rigs-and-fly-systems",
      title: "18 · Arena rigs, fly systems, and who writes their rules",
      section: "5 · Under the load",
      recallContent: [
        {
          prompt: "Name two contributing factors in the Massachusetts report.",
          answer: "Any two of: working within the fall zone of hoisted materials; failure to conduct a job hazard analysis; failure to provide required training to equipment operators; lack of coordination of safety and health programs at a multi-employer worksite.",
        },
        {
          prompt: "Who was operating the telehandler in the Massachusetts case?",
          answer: "\"an employee of another company\": not the crew leader's own employer.",
        },
      ],
      body: `${QR("an ETCP-certified Arena rigger for the arena half and an ETCP-certified Theatre rigger for the fly-system half")}

${P("a ground-level look at a real arena rig and a theater counterweight fly system, shown by a practitioner or BAM, with nothing flown for the camera")}

**Two kinds of rigging, in the certifier's words.** ETCP splits its rigging certification in two. "The Arena Certification encompasses rigging that employs chain hoists and truss systems to temporarily suspend objects from overhead structures in any environment." "The Theatre Certification encompasses rigging that employs the use of counterweighted systems, mechanical systems and hydraulic systems, usually, but not always, permanently installed". Put plainly: arena rigging is temporary and hangs from overhead structures; theater rigging is usually built in.

**What a theater rigger is examined on.** ETCP's theatre exam lists rigging systems "(e.g. counterweight, hemp system, powered and powered-assist, curtain and track, fire curtain)", and principles including "D/d ratio", "Fleet angle", "Center of gravity", "Fall protection and rescue plan" and "Regulations and standards (e.g. OSHA, OHSA, ANSI)". The arena exam's 150 questions fall under "Planning and Engineering" (50), "Installation" (60) and "Materials and Equipment" (40).

**Who writes the rules.** The written standards are ANSI E1 documents, published through ESTA's Technical Standards Program. The listing says: "Documents offered through this website are copyrighted and their viewing and downloading is covered by an End User Licensing Agreement (EULA)." "The downloads are free". Free to download is not free to share: the license says "Neither concurrent use on two or more computers nor use in a local area network or other network is permitted." So this course names the standards and quotes only the listing's own notes:

- ANSI E1.4-1 - 2022, manual counterweight rigging systems: it "applies to permanently installed, manually operated counterweight systems of stage rigging hardware for the raising, lowering, and suspension of scenery, lighting, and similar loads," and "no longer includes or recommends wire-guided systems for new installations."
- ANSI E1.6-1 - 2021, powered hoist systems (lesson 15).
- ANSI E1.6-3 - 2019, "Selection and Use of Serially Manufactured Chain Hoists in the Entertainment Industry".
- ANSI E1.2 - 2021, "Design, Manufacture and Use of Aluminum Trusses and Towers".
- ANSI E1.39 - 2021, "Selection and Use of Personal Fall Arrest Systems on Portable Structures Used in the Entertainment Industry".
- ANSI E1.47 - 2020, "Recommended Guidelines for Entertainment Rigging System Inspections", for systems "used to lift and support scenery, luminaires, and other equipment overhead in entertainment venues, such as theatres, video/film studios, amphitheatres, and arenas".

The listing also names E1.1 (wire rope ladders), E1.4-2 (statically suspended rigging systems), E1.4-3 (manually operated hoist rigging systems), E1.6-2 (electric chain hoists) and E1.21 (temporary structures for outdoor events). This course has not read the contents of any of them.

**Where the practitioner's part begins.** No federal document read for this course shows how chain hoists are hung from arena steel, how truss is assembled and checked, or how a counterweight set is loaded and run. That is what a certified rigger knows and what the standards above govern. This part of the lesson will be a ground-level walk-through by a practitioner or BAM, reviewed by certified riggers, with nothing flown for the camera. Until it exists, the documented rule for you is the one from lesson 16: stay out from under.

:::reveal How does ETCP describe the rigging its Arena certification covers? ||| Rigging "that employs chain hoists and truss systems to temporarily suspend objects from overhead structures in any environment."

:::reveal Why does this course link to ESTA's listing instead of hosting the E1 standards? ||| The standards are copyrighted and covered by a EULA that forbids networked use and transfer; free to download is not a license to redistribute.

## Sources
- ${ETCP_RIGGER} Locator: the Arena and Theatre certification paragraphs.
- ${ETCP_ARENA_EXAM} Locator: "TOTAL QUESTIONS 150" and the three content areas.
- ${ETCP_THEATRE_EXAM} Locator: principles and rigging-systems outline items.
- ${ESTA_LISTING} Locator: page notice on copyright and EULA; entries E1.1, E1.2, E1.4-1, E1.4-2, E1.4-3, E1.6-1, E1.6-2, E1.6-3, E1.21, E1.39 and E1.47.
- ${ESTA_EULA} Locator: p. 1, ownership notice; section 1(b).`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Under the load",
      section: "5 · Under the load",
      body: "A graded check on falling objects and the fall zone, the Massachusetts case, and what arena rigs and fly systems are and who writes their rules. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: The path
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "certification-and-training",
      title: "19 · Certification, training and apprenticeship",
      section: "6 · The path",
      recallContent: [
        {
          prompt: "How does ETCP describe the rigging its Theatre certification covers?",
          answer: "Rigging \"that employs the use of counterweighted systems, mechanical systems and hydraulic systems, usually, but not always, permanently installed\".",
        },
        {
          prompt: "What does ESTA's listing say about the E1 downloads?",
          answer: "They are copyrighted and covered by an End User Licensing Agreement; the downloads are free, but the license forbids networked use and transfer.",
        },
      ],
      body: `**ETCP certification.** "All experienced riggers 21 years of age and above are invited to take ETCP's rigging certification exams. The intent of the rigging examinations is to evaluate and validate the knowledge and skill base of the upper third of riggers working in the entertainment industry." There are two exams, Arena and Theatre, of 150 questions each (lesson 18). "A candidate must have 30 points to apply for either or both of the ETCP Rigging Examinations", and courses outside a degree program, this one included, do not count (lesson 3). ETCP's council seats include IATSE, and "In 2025, ETCP celebrated its 20th Anniversary".

**IATSE training.** The IATSE Training Trust Fund (TTF) is an ETCP "Recognized Training Program since August 18, 2021", and "Classes through this provider are only available to IATSE members and individuals verified to be working under IATSE agreements". Two of its Safety First! courses match this one:
- "Rigging Safety": "This course provides an overview of terminology and safe practices as they pertain to the methodology and materials used for rigging in the entertainment industry."
- "Fall Prevention and Protection", which covers "ladder safety, travel restraint and fall arrest systems, as well as specifics related to elevated work platform, rigging, and scaffold safety."

The TTF's certification reimbursement page lists "ETCP Certification & Recertification / Arena Rigger, Theatre Rigger, Entertainment Electrician, Portable Power Distribution Technician". Check the page for the current amount; this course does not state one.

**A local's apprenticeship fund.** "In 2008 Local 2 founded the Stagehands Local 2 Journeymen & Apprentice Training Fund or JATF. The JATF is a multi-employer trust that is jointly managed by a board composed of employer and union trustees. The JATF has a curriculum which has led to over 200 ETCP Certifications in Electric, Arena and Theatre Rigging." Ask your own local whether it runs something similar.

**Registered apprenticeship.** O\\*NET lists two apprenticeship titles for riggers, "Rigger" and "Rigger (Ship & Boat Bldg)", "vetted by industry and approved by the U.S. Department of Labor for use in a Registered Apprenticeship Program."

**Pay and outlook, as O\\*NET shows them.** Riggers (49-9096.00): "Median wages (2025) $30.12 hourly, $62,640 annual"; "Employment (2025) 22,500 employees"; "Projected growth (2025-2035) Average (3% to 4%)"; "Projected job openings (2025-2035) 1,700". Audio and Video Technicians (27-4011.00): median "(2025) $27.93 hourly, $58,100 annual". Lighting Technicians (27-4015.00): "Projected growth (2025-2035) Decline (-1% or lower)". Read these with care. The riggers' figures cover every industry O\\*NET names for the occupation, from construction to shipyards, not entertainment alone, so they describe riggers in general, not stage riggers.

**Putting it in order.** Work near rigging safely as ground crew. Get trained through your union or employer. Work under riggers. Find out from ETCP how its 30 points are earned, and sit the exam when you qualify. This course is the first step and earns nothing toward the others, which is exactly why it ends by pointing to them.

:::reveal Who may take IATSE Training Trust Fund classes? ||| "IATSE members and individuals verified to be working under IATSE agreements".

:::reveal Why are O*NET's rigger wages not a stage rigger's wages? ||| The occupation covers riggers in construction, manufacturing, logging, shipyards and entertainment, so the median describes riggers in general.

## Sources
- ${ETCP_RIGGER} Locator: eligibility paragraphs.
- ${ETCP_ABOUT} Locator: council seats; anniversary sentence.
- ${ETCP_TTF} Locator: page text, availability and recognition date.
- ${TTF_HOME} Locator: Safety First! course descriptions, "Rigging Safety" and "Fall Prevention and Protection".
- ${TTF_REIMBURSE} Locator: list of reimbursable certifications, the ETCP item.
- ${LOCAL_2} Locator: page text, JATF paragraph.
- ${ONET_RIGGERS} Locator: "Apprenticeship" and "Wages & Employment" sections.
- ${ONET_AV} Locator: "Wages & Employment".
- ${ONET_LIGHTING} Locator: "Wages & Employment", projected growth.`,
    },
    {
      slug: "capstone-the-stop-call",
      title: "20 · Capstone: the stop call",
      section: "6 · The path",
      recallContent: [
        {
          prompt: "What three ETCP eligibility facts does lesson 19 give for the rigging exams?",
          answer: "Riggers 21 years of age and above; 30 points to apply; courses outside a formal degree program do not count.",
        },
        {
          prompt: "Name the two IATSE Training Trust Fund courses that match this one.",
          answer: "\"Rigging Safety\" and \"Fall Prevention and Protection\".",
        },
      ],
      body: `${QR("an ETCP-certified rigger or a senior IATSE rigger, to check that every call in the scenario is right and that none goes past ground-crew work")}

**The scenario.** This is an invented scenario with no real people in it. You are on the ground crew for a morning load-in at an arena. A head rigger is in charge of everything overhead. A forklift is being run by an operator from another company. Your job is to stage gear, keep the floor clear and help where you are asked. Work through each beat, decide your call, then reveal the answer. No beat asks you for a load, and none should: the tag and the rigger decide those.

**Beat 1: the tags.** A pile of slings arrives. One web sling's tag is torn away, and you cannot read any marking.

:::reveal What is your call on the sling with no readable marking? ||| Set it aside and tell the rigger. "Employers must not use slings without affixed and legible identification markings" (1910.184(c)(14)). No tag, no lift.

**Beat 2: the pre-use look.** Another web sling has a cut along one edge. A wire rope sling shows damage that matches the drawing labeled "Birdcage" in FM 5-125's Figure 1-17 (lesson 12).

:::reveal What is your call on the cut web sling and the bird-caged wire rope? ||| Neither is used. "Snags, punctures, tears or cuts" take a web sling out of service ((i)(9)); "bird caging" takes a wire rope sling out ((f)(5)(iii)). Damaged slings "shall be immediately removed from service" ((d)), and the competent person decides what happens next.

**Beat 3: the shortcut.** A sling is too long for the job, and someone proposes tying a knot in it to shorten it.

:::reveal What is your call on knotting the sling to shorten it? ||| No. "Slings shall not be shortened with knots or bolts or other makeshift devices" ((c)(2)). Say so, and leave the fix to the rigger with the right length of rated gear.

**Beat 4: the fall zone.** The forklift is about to move a heavy ballast for a truss tower. A crew member crouches beside the forks to watch where it will set down.

:::reveal What is your call when a crew member crouches by the forks to watch the set-down? ||| Stop the move and get them out. In the Massachusetts case the crew leader was "looking underneath the ballast as it was being moved." Keep everyone out of the fall zone; if someone needs to see the set-down, they see it from outside the zone.

**Beat 5: overhead.** A chain hoist is lifting truss, and a stagehand cuts across the floor directly beneath it.

:::reveal What is your call when someone walks under the lifting truss? ||| Call out at once. "All employees shall be kept clear of loads about to be lifted and of suspended loads" ((c)(9)), and walking under suspended loads is a hazard OSHA's guidance names.

**Beat 6: at height.** A coworker on the catwalk wants to step off it to reach a banner, harness on but not clipped to anything.

:::reveal What is your call when a coworker means to leave the catwalk without tying off? ||| Stop them. In the California case a stagehand left a catwalk untied, stepped onto a false ceiling and fell about 60 feet, with anchorages and a harness at hand. Tie off, stay on surfaces built to carry a person, or wait for the rigger.

**Beat 7: after the lift.** A hook coming down from a hand chain hoist looks opened, and its curve is no longer smooth.

:::reveal What is your call on the opened hook? ||| Take it out of use and tell the rigger. A hook that has lost its original inner arc has been overloaded (FM 5-125, p. 3-3), and a chain-hoist hook showing spreading is "sufficient cause to replace the hook" (p. 3-24).

**The stop call.** Seven beats, one habit. When something is wrong, say so out loud and early, then step back and let the person in charge decide. Saying "stop" is this course's own advice, not a quotation from a rule; the rules above are why it is the right call. It is also the job description in O\\*NET's rigger tasks, which include signaling or directing workers "to ensure safety of workers and materials."

**Where next.** This is the first course in *The Crew Behind the Show*. The next two take the same crew into sound and into light: *Sound Craft* and *Light on Set*.

## Sources
- ${CFR_1910_184} Locator: paragraphs (c)(2), (c)(9), (c)(14), (d), (f)(5)(iii) and (i)(9).
- ${OSHA_SLINGS} Locator: "Introduction", list of hazardous practices.
- ${FACE_MA} Locator: p. 3, "Introduction". Linked only.
- ${FACE_CA} Locator: p. 1, "Summary"; p. 3, "Investigation"; p. 4, Recommendation #1. Linked only.
- ${FM_5_125} Locator: printed p. 1-21 (PDF p. 36), Figure 1-17; printed p. 3-3 (PDF p. 84); printed p. 3-24 (PDF p. 105).
- ${ONET_RIGGERS} Locator: "Tasks".`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · The path",
      section: "6 · The path",
      body: "A graded check on certification, training and apprenticeship, and on the calls in the capstone scenario. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // FINAL
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-quiz",
      title: "Final quiz · Rigging for Stage and Broadcast Crews",
      section: "Final assessment",
      body: "Ten questions drawn from the whole course, from who rigs on a show to the stop call. No question asks for a capacity. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
        ],
      },
    },
  ],
};
