import type { AuthoredCourse } from "./authored-course";

// "The Show Crew" (Careers & Media, also listed in Sports and Trade Skills). Slug `the-show-crew`.
// Series `the-crew-behind-the-show` ("The Crew Behind the Show"), code CREW, position 08: who sits
// where in a sports truck or studio control room, what each chair on the headset does during a live
// game, what gear it runs and what it must have ready before air. The first of a planned group: per-
// chair courses (audio, video shading, replay, graphics) follow later, each with its own brief.
// `broadcasting-break-in` stays outside the series and gives the overview this course goes below.
//
// RESEARCH TIER 1 (brief, status line).
// Brief:    cloud-briefs/crew-08/00-approved-brief.md (approved by BAM 2026-10-26: public, CREW-08, held
//           for a qualified reviewer with sports truck credits). Section 5, "Rules for the build", and
//           the section 6 correction (the Fox operator and director postings are news jobs) are binding.
// Research: cloud-briefs/crew-08/research/ (fetched 2026-10-26). 01-audio-and-comms.md covers outline
//           section 2, 02-video-replay-graphics.md sections 3 to 5, 03-control-room-teamwork-hiring.md
//           sections 1 and 6 to 8. Only V lines are asserted. I lines appear only with their reasoning
//           shown in the lesson ("Reasoned from ..."). A lines are never taught. Each file's "Teach this,
//           not that" list is applied where the lesson needs it.
//
// BUILD STATUS: pass 1 of 2 (2026-10-26) wrote sections 1 to 5 (lessons 1 to 17) and their quizzes:
// the room and the chain of command; audio, the A1 and the A2; video, the V1 and the V2; replay and
// playout; graphics. Pass 2 writes sections 6 to 9 (the floor and the support crew; how it fits
// together; getting hired; the capstone) and the final quiz.
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a qualified reviewer, a sports broadcast crew
// member who has held one of these chairs (A1, V1, replay operator or technical director), has read
// every lesson marked QR with authority to change or cut it. The publishHoldReason in
// scripts/seed-courses.ts says so.
//
// MARKED LESSONS. Every teaching lesson in pass 1 (1 to 17) opens with the QR marker below: each one
// describes a chair from postings, manuals and makers' pages, and a person who has held the chair must
// confirm the description matches the work.
//
// THE POSTINGS (brief section 5 and the section 6 correction):
//  - Fox News Media and Fox Television Stations postings (the A2, audio operator, Viz operator, senior
//    video operator, playout operator, show director and studio technician/TD) are news control-room
//    jobs in New York and Washington. Every lesson that cites one says so. Only the 2027 Live Sports
//    Virtual Enhancement Operator internship (Fox Corporation) is Fox Sports work.
//  - NFL Media's Greenhouse postings print a bare dollar figure followed by "USD" and no unit; the NFL's
//    own pay text says its ranges are "salaries or hourly rates". This course prints each figure as
//    posted and never adds "an hour" (crew08-nfl-pay-unit). Fox postings state "per hour", and the
//    lessons quote that.
//  - "EVS" is a replay system's name, not a job title. The person is the replay operator.
//  - No individual crew member is named in lesson text. Sources whose titles name a person (the SVG
//    Calrec craft interview, the SVG Game Creek sit-down) were left out where another source carried
//    the fact; Dachman (2017) is kept because it is the only source for the preseason side of the
//    first-and-ten debut disagreement, and only its title names anyone.
//
// LINK, DO NOT REPEAT. broadcasting-break-in: "1 · The landscape: who does what on a broadcast",
// "6 · Signal flow and audio fundamentals", "8 · The control room: switcher, graphics, and replay",
// "12 · Stats, spotting boards, and replay" and "13 · Game day: roles, call times, and where utility
// fits". CREW-00 (cables-and-connectors): 4, 7, 8, 9, 17, 18, 20, 25 and 26. CREW-02 (sound-craft):
// "17 · Meters, tone and gain". CREW-04 (cinema-look-camera-rig): "22 · What the truck does with your
// picture", "23 · Shading and matching color" and "24 · Tally, intercom, return video and the questions
// to ask". CREW-05 (arena-transmission): "4 · Beside the network: replay, tracking and referee comms",
// "23 · Feed check-in and the monitoring tools" and "26 · Status calls, escalation and reports".
// CREW-07 (sideline-systems): "1 · Three systems beside the field" and "9 · NFL: challenges, the command
// center and the line to gain". Each is named by title where this course stops.
//
// UNSOURCED LINES IN broadcasting-break-in, found by the research and NOT edited here (that course is
// published): "-6 to -3 dBFS" in "6 · Signal flow and audio fundamentals", "the most common paid entry
// point" in "3 · The utility technician", and "graphic up, replay ready" in "8 · The control room".
// Each has a check in src/lib/research-checks.ts (keys broadcasting-*).
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A: the Code of Federal Regulations sections (47 C.F.R. §§ 73.682, 73.8000, 74.801, 74.832),
//    a U.S. government work.
//  - Tier B, link only, never rehost: everything else. ESPN's 2018 manual (hosted by a conference),
//    the DGA's agreement excerpts, rate cards and event pages, the university and school handouts, the
//    job postings and their boards and aggregator copies (NFL Greenhouse; Fox, Disney and Warner Bros.
//    Discovery Workday; EntertainmentCareers.Net), makers' pages and PDFs (Calrec, Clear-Com, RTS,
//    Riedel, SSL, Sony, Ross Video, AJA, Audinate, Lawo, Shure, EVS, Vizrt, Chyron, Grass Valley,
//    Leader and LeaderPhabrix), ATSC A/85 and EBU R 128, truck providers' pages (Game Creek Video,
//    Mobile TV Group, NEP), the ESPN Press Room, SMT and the trade press (Sports Video Group, TV
//    Technology).
//  - Tier C: none.
//  - FIGURES: none embedded.
//
// MAKERS are worked examples, never endorsements. A maker's claim about its own product is taught as
// the maker's claim. Operator screens and certification content stay out.
//
// CITATION LETTERS (one scheme for the whole course, so pass 2 reuses it):
//  - NFL (2026a to 2026o) follow research file 03: a associate, real-time systems; b part-time
//    coordinator, real-time systems; c part-time segment producer; d seasonal associate producer; e FAST
//    video systems operator; f graphics designer/animator; g audio 2; h broadcast associate; i lighting
//    director; j RedZone production assistant; k segment producer; l TOC operator; m utility; n V1/
//    shading operator; o senior coordinator, studio technical operations. File 02's Media Design Group
//    designer/animator becomes (2026p). NFL (n.d.) is the Greenhouse API.
//  - Fox News Media (2026a to 2026f) follow file 03: a A2/audio assistant; b audio operator; c playout
//    operator; d senior video operator; e show director; f Viz operator. Added: (2026g) broadcast
//    production engineer, (2026h) studio/field technician, (2026i) real-time graphics artist. File 01's
//    capitalized "FOX" is written "Fox". Fox Corporation (2026a) is the internship. Fox Television
//    Stations (2026) is the FOX 5 DC technician.
//  - DGA letters follow file 03. Clear-Com follows file 01; file 03's partyline e-book becomes (2020c).
//    Daley (SVG) follows file 01. EVS, Vizrt, Chyron, Grass Valley and Ross Video's XPression follow
//    file 02; file 01's Ross Acuity help page becomes Ross Video (n.d.-b) and file 02's XPression page
//    Ross Video (n.d.-a). Calrec, RTS, Riedel, SSL, AJA and ATSC follow file 01. Mobile TV Group follows
//    file 03. Workday boards searched on 2026-10-26 are cited as their owners' (n.d.) job boards.
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts, keys crew08-*):
//  - L1: Network Agreement duty text not read (crew08-network-agreement-duties).
//  - L3: Game Creek 79's two floor areas (crew08-gcv-79-area).
//  - L4: the unit of the NFL's bare figures (crew08-nfl-pay-unit); no posting titled A1
//    (crew08-no-a1-posting); A3 undefined (crew08-a3-undefined).
//  - L5: "audio guarantee", "submixer" and "RF Manager" undefined (crew08-audio-team-titles); who
//    coordinates RF on a smaller show (crew08-rf-small-show).
//  - L7: how sports A1s use audio-follow-video (crew08-afv-practice).
//  - L8: no digital peak target in any source (crew08-peak-target).
//  - L9: "chip" undefined (crew08-chip).
//  - L11: what a truck V2 does today (crew08-v2-truck-duties).
//  - L12: no live replay operator posting (crew08-no-replay-posting).
//  - L13: what "count back" means (crew08-count-back).
//  - L14: "fax", "goodnight procedures" and "split routes" undefined (crew08-toc-terms).
//  - L16: "fill" and "key" undefined in any source read (crew08-fill-key).
//  - L17: the 1998 debut date (crew08-first-and-ten-debut); which tracking method networks use now
//    (crew08-tracking-method-now); where Fox inserts the line (crew08-fox-line-where).
//
// House style, matching sideline-systems-course.ts (CREW-07): `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; recallContent from the second teaching lesson on, quizzing the
// lesson before; APA 7 in-line citations and a `## Sources` block on every teaching lesson with a
// locator on every entry; a quiz per section pooled to round(words / 35), clamped 40 to 100, serving 5,
// passing 80, shuffled. Option lengths are balanced within each question. American spelling in prose;
// quotations keep their own spelling. No em or en dashes anywhere: where a source used one, the course
// writes "to" outside the quotation marks.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const RETRIEVED = "Retrieved October 26, 2026, from";

// Manuals, agreements and handouts (research file 03)
const ESPN_2018 = `ESPN. (2018). *ESPN3 / ESPN+ school productions broadcast manual* (2018 ed.) [PDF]. Metro Atlantic Athletic Conference. ${RETRIEVED} https://s3.amazonaws.com/sidearm.sites/maacconf.sidearmsports.com/documents/2018/10/16/2018_ESPN3_School_Productions_Broadcast_Manual_docx.pdf`;
const DGA_FLTTA = `Directors Guild of America. (n.d.-a). *Freelance Live and Tape Television Agreement* [Web page]. ${RETRIEVED} https://www.dga.org/Contracts/Agreements/FLTTA2020`;
const DGA_ART2 = `Directors Guild of America. (2020b). *Freelance Live and Tape Television Agreement 2020-2023, Article 2* [Agreement excerpt, PDF]. ${RETRIEVED} https://edge.sitecorecloud.io/directorsguf4d4-dga2c79-dgaprod1615-f6e3/media/Files/Contracts/Agreements/2020-FLTTA/DGA_FLTTA2020_014Article02_Directors.pdf`;
const DGA_2021 = `Directors Guild of America. (2021, December 11). *Production 101 - did you know?* ${RETRIEVED} https://www.dga.org/Events/2022/January2022/ADSMPAWeststProduction101_1221`;
const DGA_2025 = `Directors Guild of America. (2025, July 29). *"All the world's a stage and we are here to manage it!" DGA stage managers and the future of the industry*. ${RETRIEVED} https://www.dga.org/events/2025/september2025/adsmpaeast_alltheworldsastage_0725`;
const DGA_2026A = `Directors Guild of America. (2026a, July 17). *2026-2027 rate cards online*. ${RETRIEVED} https://www.dga.org/news/guild-news/2026/august2026/new_ratecards_online_2026`;
const OWENS_2007 = `Owens, F. (2007). *Elements of TV director style* [Course handout, TCom 4884 TV Production Direction]. Youngstown State University. ${RETRIEVED} http://fowens.people.ysu.edu/DirectStyle07.pdf`;
const VINOVICH = `Vinovich, G. (n.d.). *TV industry personnel* [Course handout, DMA 320]. California State University, Dominguez Hills. ${RETRIEVED} https://www.csudh.edu/Assets/csudh-sites/tv-arts/docs/dma320-tv-industry-personnel.pdf`;

// Trucks and control rooms (research file 03)
const COSTA_2018 = `Costa, B. (2018, March 31). Live from Final Four: Game Creek Video checks mega event off its bucket list. *Sports Video Group*. ${RETRIEVED} https://www.sportsvideo.org/2018/03/31/live-from-final-four-game-creek-video-checks-mega-event-off-its-bucket-list/`;
const GCV_79 = `Game Creek Video. (n.d.). *79* [Mobile unit page]. ${RETRIEVED} https://www.gamecreekvideo.com/truck/79/`;
const MTVG_HOME = `Mobile TV Group. (n.d.-a). *Mobile TV Group* [Home page]. ${RETRIEVED} https://www.mobiletvgroup.com/`;
const MTVG_58 = `Mobile TV Group. (n.d.-b). *58FLEX & 58VMU* [Mobile unit page]. ${RETRIEVED} https://www.mobiletvgroup.com/mobile-unit/58flex-58vmu/`;
const MTVG_58_SPEC = `Mobile TV Group. (n.d.-c). *58FLEX & 58VMU equipment specifications* [Specification sheet, PDF]. ${RETRIEVED} http://www.mobiletvgroup.com/wp-content/uploads/2026/04/58FLEX58VMU-Equipment-Specs.pdf`;
const NEP = `NEP Group. (n.d.). *Capture* [Solutions page]. ${RETRIEVED} https://www.nepgroup.com/solutions/capture`;

// Job postings (letters: see CITATION LETTERS above)
const NFL_FAST = `National Football League. (2026e, August 11). *Seasonal FAST video systems operator* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5373370008`;
const NFL_LD = `National Football League. (2026i, August 4). *Seasonal part-time lighting director* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5378747008`;
const NFL_STUDIO_COORD = `National Football League. (2026o, September 21). *Seasonal senior coordinator, studio technical operations* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5427937008`;
const FNM_DIRECTOR = `Fox News Media. (2026e, April 8). *Freelance show director* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/New-York-New-York-USA/Freelance-Show-Director_R50026603`;
const FTS_TECH = `Fox Television Stations. (2026, October 15). *Studio technician/technical director* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/Washington-District-of-Columbia-USA/Studio-Technician-Technical-Director_R50034090-1`;

/** The marker every lesson needing a qualified reviewer opens with (authoring checklist, section 3). */
const QR =
  "> **Before release:** needs a qualified reviewer (QR): a sports broadcast crew member who has held this chair (A1, V1, replay operator or technical director).";

export const THE_SHOW_CREW_COURSE: AuthoredCourse = {
  title: "The Show Crew",
  description:
    "A live game on television is made by a crew most viewers never see. This course takes you into the sports truck and the studio control room and goes chair by chair: who answers to whom, and who owns the rundown and the clock; the A1 and the A2 in audio, the intercom and the IFB, and the mix; the V1 and the V2 in video, shading, scopes and robotic cameras; the replay operator, the playout operator and the TOC; the graphics operator, the broadcast associate who checks names and numbers, the real-time systems crew and the virtual enhancement operator who places the first-and-ten line; the utility, camera operators, stage manager and lighting director on the floor; how the chairs talk on comms, the director's calls and the counts, the checks before air, and one play followed through every seat; and how these jobs are posted and paid, with dates. Every role is described from sources you can open: a network's production manual, the directors' guild agreement, makers' pages and dated job postings, quoted as posted. It teaches each chair at a working level. It is not any maker's operator certification, makers are cited worked examples rather than endorsements, and every lesson that needs a sign-off from someone who has held the chair says so at the top.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: The room and the chain of command
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-answers-to-whom",
      title: "1 · Who answers to whom",
      section: "1 · The room and the chain of command",
      body: `${QR}

**What this course is for.** A live game on television is made by a crew most viewers never see: a producer and a director, an associate director on the clock, a technical director on the switcher, audio, video, replay, playout and graphics operators, and a floor crew. By the end of this course you should be able to walk into a sports truck or a studio control room and say who sits where, what each person on the headset does during a game, what gear each one runs, what each must have ready before air, and how the jobs are posted and paid. It teaches each chair at a working level. It is not any maker's operator certification.

**Where it sits.** *Break Into Sports & Media Broadcasting* gives the overview in "1 · The landscape: who does what on a broadcast" and one line per role in "8 · The control room: switcher, graphics, and replay". Read those first; this course does not repeat them. It goes one level down, chair by chair, from sources you can open: a network's production manual, a guild agreement, makers' pages and dated job postings.

**A note on the postings.** A job posting is a primary source for what one employer asked on one date, not a market rate. Several postings in this course come from Fox News Media and Fox Television Stations. Those are news control-room jobs in New York and Washington, not sports trucks, and every lesson that cites one says so. The one Fox Sports posting this course draws on is an internship (lesson 17).

**One network's chain of command.** ESPN's 2018 manual for schools that produce games for ESPN3 and ESPN+ lists the top of the crew this way (ESPN, 2018, p. 20):

| Position | ESPN's description |
|---|---|
| Producer | "Content oversight of the show; works closely with talent / gfx / vt ops" |
| Director | "Visual oversight of the show; works closely with camera ops" |
| Associate director | "timing and elemental oversight of the show; works closely with Master Control" |
| Ops | "Technical and Logistical oversight of the show; guides the crew" |
| Technical director | "controls the video switcher and builds conceptual content look and feel" |

The same manual says the producer "is in charge of the entire broadcast" and "is like the architect of the show," while the director "takes the plans from the producer and builds the show" and "is like the contractor of the show" (ESPN, 2018, p. 21). Of the technical director (TD) it says: "With the Director being second in command, the TD is third in command" (p. 21). Reasoned from those words: the producer, in charge of the whole broadcast, comes first, the director second and the TD third.

ESPN recommends a separate producer and director, or a producer and a director who also switches, because "The accountability, work load, and concentration is much too great for one person to effectively Produce, Direct and TD a broadcast" (ESPN, 2018, p. 21). Its standard crew for a school-produced ESPN3 game is "between Twelve (12) to Fifteen (15) crew members" (p. 21).

**The guild's written description.** The Directors Guild of America's (DGA) Freelance Live and Tape Television Agreement (FLTTA) "covers live productions and projects shot on videotape" made under an agreement with the producers' association, and "applies to Directors, Associate Directors and Stage Managers working in these areas" (DGA, n.d.-a). Its Article 2 says what each job does:

- The director works "Subject only to the supervision and control of the Producer, the Executive Producer, or the Company executive to whom he/she reports" (DGA, 2020b, p. 14).
- "The Director or, at his or her option, an Associate Director or Stage Manager, shall issue instructions directly to the technical crew" (p. 14).
- "No one other than the Director may act as the Director of the talent, camera crew or sound crew on the set" (p. 19).
- The associate director (AD) will "Preset cues as assigned by the Director," "Check all facilities in the studio," "Perform all timing functions and give all time cues," and "Assist the Director in maintaining communication with all personnel connected in any way with the television program" (p. 16).

Network sports work is covered by separate agreements: the DGA's 2026 to 2027 rate cards include one for associate directors, stage managers and production associates "in network news, sports, operations, or local," negotiated with ABC, CBS and NBC (DGA, 2026a). The duty text of those network agreements was not read for this course, so treat Article 2 as the guild's written description of the jobs, not as the sports contract.

**The TD is the switcher.** ESPN's glossary defines the TD as the "Person responsible for switching to different video sources during a show; also known as the switcher" (ESPN, 2018, p. 34). A university directing handout adds that "TD" is "a network-level term for the person who switches," and that "In some settings, especially local television, a director will also perform TD functions" (Owens, 2007, p. 21).

**Who holds the chair varies by shop.** Fox Television Stations' per diem studio technician at FOX 5 DC, a local news control-room job, performs "functions including, but not limited to, technical director, audio operator, robotic camera, and/or floor director" (Fox Television Stations, 2026). Fox News Media's show director posting, also a news control-room job, lists "Technical director skills" as "NICE TO HAVE" (Fox News Media, 2026e). Reasoned from these: ESPN's manual separates producer, director and TD, while a local news station may give one technician four chairs. Learn the chairs, then learn how your shop splits them.

**One word to watch.** In a live control room, AD means associate director (DGA, 2020b; ESPN, 2018, p. 31). An older university handout calls the role "Assistant Director" and adds "coordinating the extras" (Vinovich, n.d.), which mixes in the film assistant director. This course says associate director.

:::reveal In ESPN's 2018 manual, who is second and who is third in command? ||| The director is second and the TD is third; the producer, "in charge of the entire broadcast," comes first (ESPN, 2018, p. 21).

:::reveal Why does this course call the DGA's FLTTA "the guild's written description" and not the sports contract? ||| Network sports work runs under separate agreements with ABC, CBS and NBC, whose duty text was not read; the FLTTA describes the jobs in writing.

:::reveal What does the FOX 5 DC technician posting show about chairs? ||| That one local news technician may work as TD, audio operator, robotic camera and floor director: who holds a chair varies by shop.

## Sources
- ${ESPN_2018} Locator: "Production personnel positions and responsibilities," p. 20; producer, director and TD, p. 21; glossary, pp. 31 and 34.
- ${DGA_FLTTA} Locator: page text, who the agreement covers.
- ${DGA_ART2} Locator: Art. 2, Sec. A, p. 14; Sec. B, item 3, p. 16; Sec. D, Example 2, p. 19.
- ${DGA_2026A} Locator: the list of 2026 to 2027 network rate cards.
- ${OWENS_2007} Locator: section 4, note 5 (PDF p. 21).
- ${FTS_TECH} Locator: "What You'll Do". A local news job.
- ${FNM_DIRECTOR} Locator: "NICE TO HAVE". A news control-room job.
- ${VINOVICH} Locator: "Below-the-line personnel," item 1.`,
    },
    {
      slug: "the-rundown-and-the-clock",
      title: "2 · The rundown and the clock",
      section: "1 · The room and the chain of command",
      recallContent: [
        {
          prompt: "In ESPN's 2018 manual, what does the associate director oversee?",
          answer: "\"timing and elemental oversight of the show\"; the AD \"works closely with Master Control\" (ESPN, 2018, p. 20).",
        },
        {
          prompt: "Who may act as the director of the talent, camera crew or sound crew, under the DGA's Article 2?",
          answer: "\"No one other than the Director\" (DGA, 2020b, p. 19).",
        },
      ],
      body: `${QR}

**The plan on paper.** ESPN's producer will "Create format to outline the plan for the day-of-show" and "Give copies of format to: TD, Dir, AP, AD, A1, EVS, RO, GIS, BC, PXP, Analyst, TOC" (ESPN, 2018, p. 23). Read that list as a seating chart: every chair that acts on the plan gets a copy. Several of those chairs have lessons here: the A1 (lesson 4), the replay position (lesson 12) and the TOC (lesson 14). ESPN's list writes the replay position as "EVS," which is a replay system's name; this course calls the person the replay operator. It expands only the abbreviations its sources expand.

**What a rundown looks like.** The manual's sample is a "Reader Card List" from an NFL team network's telecast dated "8-20-11." It numbers every item and gives columns for the element, graphics, audio, tape and running time. Break lines read like "BREAK 2 LOCAL 1:15" and "BREAK 1 NETWORK VT" (ESPN, 2018, p. 29). One sheet tells every chair what comes next and how long it runs.

**Words you will hear about it.** ESPN's glossary gives the rundown's working vocabulary (ESPN, 2018, pp. 31 to 32):

| Term | ESPN's definition |
|---|---|
| Float | "To remove an item from the rundown with the intent of bringing back later in the show" |
| Heavy | "When a game telecast runs long" |
| As Scripted | "Expression used to notify show crew that segment will run as originally planned" |
| A's | "First segment of a show" |

**The clock belongs to the AD.** ESPN's AD checklist starts with time: "Set clock in control room- Truck, with master control make sure clocks match" (ESPN, 2018, p. 25). The AD confirms the "length of all breaks with master control" and gets "run times on tease/open Animation, SOTS, B- Roll (or VO) and any pre-recorded element that is built and runs from the truck- control room" (p. 25). Before the game the AD goes "over all in game time outs with producer"; during it, the AD confirms "when we are in a break zone" and "that we have the time-out and can go to break" (p. 25).

**Master control and the breaks.** ESPN's glossary: "Master: Slang for "Master Control" where the shows commercial breaks are played back" (ESPN, 2018, p. 33). Who rolls the breaks depends on the show: "If breaks are rolled by ESPN, the producer or AD must be assigned to be in contact with ESPN throughout the event. In some cases, breaks will be rolled from site" (p. 3). That is why the AD matches the truck's clock to master control's before anything else.

**The guild says the same.** In the DGA's written description, the AD will "Perform all timing functions and give all time cues," prepares "telecast reports, top sheets, etc." and forwards the "as broadcast" script for filing (DGA, 2020b, p. 16). At a DGA council event, two ADs explained how scripts and rundowns "work differently in entertainment programs vs. news," and the moderator showed "how important notes are to an Associate Director" (DGA, 2021).

**Streaming runs on the AD's word too.** NFL Media's seasonal FAST video systems operator must "Execute SCTE-35 cue insertion for live and recorded programming, following AD commands and established operational procedures to ensure seamless break triggering and ad insertion" (National Football League [NFL], 2026e). The posting names SCTE-35 cues as what triggers the breaks, and the operator inserts them when the AD says so.

**Reasoned.** In every source read for this course the AD owns the clock: the DGA gives the AD "all timing functions," ESPN has the AD match the clock with master control and count the breaks, and an NFL streaming posting triggers breaks on the AD's commands. The counts themselves (to air, to break, back from break) are taught in section 7.

**What this means in the chair.** If you sit anywhere else, the rundown tells you what is coming and the AD tells you when. A graphic, a replay or a package that is ready but late is still late.

:::reveal What does ESPN's AD do first on the checklist, and why? ||| "Set clock in control room- Truck, with master control make sure clocks match": breaks may be rolled by master control, so both clocks must agree (ESPN, 2018, pp. 3 and 25).

:::reveal In ESPN's glossary, what does "heavy" mean? ||| "When a game telecast runs long" (ESPN, 2018, p. 32).

:::reveal On whose commands does NFL Media's FAST operator insert SCTE-35 cues? ||| The AD's: "following AD commands and established operational procedures" (NFL, 2026e).

## Sources
- ${ESPN_2018} Locator: "Commercial Breaks and Formats," p. 3; "Producer Responsibilities," p. 23; "Associate Director Responsibilities," items 1, 2, 5 and 7, p. 25; "Sample Production/Show Rundown," p. 29; glossary, pp. 31 to 33.
- ${DGA_ART2} Locator: Art. 2, Sec. B, items 3(c), 3(d) and 3(g), p. 16.
- ${DGA_2021} Locator: event write-up, paragraphs on scripts, rundowns and notes.
- ${NFL_FAST} Locator: "Required Qualifications".`,
    },
    {
      slug: "the-truck-and-the-studio",
      title: "3 · The truck and the studio control room",
      section: "1 · The room and the chain of command",
      recallContent: [
        {
          prompt: "Who owns the clock in every source this course read, and what does ESPN's AD do with it first?",
          answer: "The associate director. ESPN's AD sets the control room clock and makes sure it matches master control's (ESPN, 2018, p. 25).",
        },
        {
          prompt: "What does ESPN's glossary mean by \"float\"?",
          answer: "\"To remove an item from the rundown with the intent of bringing back later in the show\" (ESPN, 2018, p. 31).",
        },
      ],
      body: `${QR}

**The smallest room ESPN accepts.** ESPN's minimum equipment for a school production gives the floor of a control room (ESPN, 2018, p. 2):

| Area | ESPN's minimum |
|---|---|
| Switcher | "10 inputs," "2 keyers," "1 ME," "8 aux buses for iso's, monitors and transmission" |
| Cameras | "four cameras with an operator for each" |
| Replay | "one DVR Unit with minimum 4 input / 2 output" |
| Audio | a console of "24 inputs" |

Each row is a chair in this course: the switcher is the TD's (lesson 1), replay is section 4, audio is section 2.

**A network truck, split in two.** A trade report describes Game Creek Video's truck 79, built for ESPN, as a 53-foot expando with an A and a B unit, where "the A unit is hosting engineering, video, production, and audio, and the B unit has replay, comms, a V/O booth, and 4K support resources" (Costa, 2018). Game Creek's own page for 79 lists a Grass Valley K-Frame X-Series switcher, a Calrec Apollo audio console, Sony HDC 4300 and HDC 5500 cameras and EVS XT-VIA replay servers, with an A unit and a "79 B" unit (Game Creek Video, n.d.). The page gives the A unit's working area two ways, 64 by 24 feet and 64 by 22 feet, so this course gives neither figure as fact.

**Another truck, room by room.** Mobile TV Group's 58FLEX is a "Double expanding unit" with an "Optional VMU," and its page groups the gear as Space, Production, Engineering, Communications, Replay, Cameras and Audio (Mobile TV Group, n.d.-b). Its spec sheet gives a length of 53 feet and a width of 8 feet 6 inches "with ability to expand to" 16 feet 6 inches, "Up to 6 replay operator positions," and an "RTS Odin Digital Intercom System" (Mobile TV Group, n.d.-c, pp. 1 to 2).

**How many trucks there are.** These are the companies' own counts. NEP says it "operates more than 150 HD TV trucks around the world" (NEP Group, n.d.). Mobile TV Group says it has "37 mobile units across North America" and covers "over 4,000 live events a year" (Mobile TV Group, n.d.-a).

**The studio control room.** A studio holds the same jobs in a building. NFL Media's seasonal senior coordinator for studio technical operations keeps "control room, stage, and studio environments production-ready at all times" (National Football League [NFL], 2026o). NFL Media's lighting director will "Monitor show productions from shading room and consult with video operator as necessary" (NFL, 2026i). So a studio has a shading room too, the video chair's room in lesson 9.

**The floor answers to the room.** A veteran stage manager, quoted by the DGA, put the truck's distance plainly: "with a Producer and a Director sitting in a truck somewhere, you are the leader on the ground" (DGA, 2025). The stage manager and the floor crew are section 6.

**Reasoned.** Put the sources side by side: ESPN's minimums, Game Creek's A and B units, Mobile TV Group's grouped spec page and NFL Media's studio all hold the same rooms (production, audio, video shading, replay, engineering, comms). A truck splits them across one or more trailers and expanding sides; a studio puts them down a hallway. The jobs travel with the rooms.

**What the truck does to a picture.** CREW-04 lesson "22 · What the truck does with your picture" follows one camera's signal through the truck (receive, sync, shading, audio, delay, replay). This course does not repeat it. CREW-00, *Cables and Connectors*, covers the cable under every room.

:::reveal Which of truck 79's two units holds replay, according to the trade report? ||| The B unit: "replay, comms, a V/O booth, and 4K support resources" (Costa, 2018).

:::reveal How many replay operator positions does Mobile TV Group's 58FLEX spec sheet give? ||| "Up to 6 replay operator positions" (Mobile TV Group, n.d.-c).

:::reveal From which room does NFL Media's lighting director monitor shows? ||| From the shading room, consulting with the video operator (NFL, 2026i).

## Sources
- ${ESPN_2018} Locator: "Equipment Standards," p. 2.
- ${COSTA_2018} Locator: paragraphs on truck 79's A and B units.
- ${GCV_79} Locator: unit heading, "Key Features" and equipment list.
- ${MTVG_58} Locator: unit description and spec groups.
- ${MTVG_58_SPEC} Locator: "Space," "Replay" and "Communications," pp. 1 to 2.
- ${NEP} Locator: page text, truck count.
- ${MTVG_HOME} Locator: home page text, units and events.
- ${NFL_STUDIO_COORD} Locator: summary paragraph.
- ${NFL_LD} Locator: "Responsibilities".
- ${DGA_2025} Locator: panel write-up, the stage manager's remark on the truck.`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · The room and the chain of command",
      section: "1 · The room and the chain of command",
      body: "A graded check on who answers to whom, the rundown and the clock, and the truck and the studio control room. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which kind of job does this course say the Fox News Media and FOX 5 DC postings are?", options: ["News control-room jobs", "Sports truck jobs on tour", "Studio jobs at Fox Sports", "Stadium video board jobs"], correctIndex: 0, explanation: "Lesson 1: they are news control-room jobs in New York and Washington, not sports trucks, and every lesson that cites one says so.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Which Fox posting does this course treat as Fox Sports work?", options: ["The show director", "The A2 freelancer", "The 2027 internship", "The Viz operator"], correctIndex: 2, explanation: "Lesson 1: the one Fox Sports posting the course draws on is an internship (lesson 17). The director, A2 and Viz postings are Fox News Media news jobs.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What is a job posting a primary source for, in this course?", options: ["The market rate for the job", "What one employer asked, once", "What every network pays crew", "The union minimum for the role"], correctIndex: 1, explanation: "Lesson 1: a posting is a primary source for what one employer asked on one date, not a market rate or a union scale.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Who is ESPN's 2018 broadcast manual written for?", options: ["Schools producing ESPN3 games", "Network truck engineers only", "Fans who buy ESPN+ accounts", "Advertisers buying ESPN time"], correctIndex: 0, explanation: "ESPN (2018) is a manual for schools that produce games for ESPN3 and ESPN+.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "How does ESPN's 2018 manual describe the producer's job?", options: ["Visual oversight of the show", "Content oversight of the show", "Timing oversight of the show", "Technical oversight of the show"], correctIndex: 1, explanation: "ESPN (2018, p. 20): the producer has \"Content oversight of the show.\" Visual oversight is the director's, timing belongs to the AD, and technical and logistical oversight to Ops.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "How does ESPN's 2018 manual describe the director's job?", options: ["Content oversight of the show", "Timing oversight of the show", "Visual oversight of the show", "Technical oversight of the show"], correctIndex: 2, explanation: "ESPN (2018, p. 20): the director has \"Visual oversight of the show\" and works closely with camera ops.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Whom does ESPN say the associate director works closely with?", options: ["Master Control", "The camera ops", "The talent", "The utilities"], correctIndex: 0, explanation: "ESPN (2018, p. 20): the AD has \"timing and elemental oversight of the show\" and \"works closely with Master Control.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Whom does ESPN say the director works closely with?", options: ["Master Control", "The sponsors", "The utilities", "The camera ops"], correctIndex: 3, explanation: "ESPN (2018, p. 20): the director \"works closely with camera ops.\" Master Control is the AD's contact.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Which position does ESPN describe as \"Technical and Logistical oversight of the show; guides the crew\"?", options: ["Director", "Producer", "Ops", "AD"], correctIndex: 2, explanation: "ESPN (2018, p. 20) gives that description to Ops. The producer has content oversight, the director visual oversight and the AD timing.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Which position does ESPN's list say \"controls the video switcher\"?", options: ["The technical director", "The associate director", "The stage manager", "The audio mixer"], correctIndex: 0, explanation: "ESPN (2018, p. 20): the technical director \"controls the video switcher and builds conceptual content look and feel.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What does ESPN's manual compare the producer to?", options: ["The architect", "The contractor", "The inspector", "The surveyor"], correctIndex: 0, explanation: "ESPN (2018, p. 21): \"The Producer is like the architect of the show.\" The director is the contractor.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What does ESPN's manual compare the director to?", options: ["The architect", "The inspector", "The contractor", "The surveyor"], correctIndex: 2, explanation: "ESPN (2018, p. 21): the director \"takes the plans from the producer and builds the show\" and \"is like the contractor of the show.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Where does ESPN's manual rank the TD in the chain of command?", options: ["First", "Second", "Third", "Fourth"], correctIndex: 2, explanation: "ESPN (2018, p. 21): \"With the Director being second in command, the TD is third in command.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Which position does ESPN call \"second in command\"?", options: ["The director", "The producer", "The TD", "The AD"], correctIndex: 0, explanation: "ESPN (2018, p. 21) calls the director second in command and the TD third; the producer is in charge of the entire broadcast.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Who does ESPN say \"is in charge of the entire broadcast\"?", options: ["The ops lead", "The director", "The producer", "The TD"], correctIndex: 2, explanation: "ESPN (2018, p. 21): the producer \"is in charge of the entire broadcast\" and controls the content of the show.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Why does ESPN recommend a separate producer and director?", options: ["The load is too much for one", "Unions require two people", "ESPN pays by the position", "Schools have spare staff"], correctIndex: 0, explanation: "ESPN (2018, p. 21): \"The accountability, work load, and concentration is much too great for one person to effectively Produce, Direct and TD a broadcast.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What standard crew size does ESPN give for a school-produced ESPN3 game?", options: ["4 to 6", "12 to 15", "30 to 40", "50 or more"], correctIndex: 1, explanation: "ESPN (2018, p. 21): \"between Twelve (12) to Fifteen (15) crew members.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Which jobs does the DGA say its Freelance Live and Tape Television Agreement applies to?", options: ["Camera, audio and video operators", "Producers, writers and talent", "Utilities, grips and electricians", "Directors, ADs and stage managers"], correctIndex: 3, explanation: "DGA (n.d.-a): the agreement \"applies to Directors, Associate Directors and Stage Managers working in these areas.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Under Article 2 of the FLTTA, whose supervision is the director subject to?", options: ["The producer or a company executive", "The technical director on the show", "The stage manager on the floor", "The union steward on the crew"], correctIndex: 0, explanation: "DGA (2020b, p. 14): \"Subject only to the supervision and control of the Producer, the Executive Producer, or the Company executive to whom he/she reports.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Under Article 2, who shall issue instructions directly to the technical crew?", options: ["The producer and the sponsor", "The director, or an AD or SM", "The TD and the A1 together", "Each crew member's department"], correctIndex: 1, explanation: "DGA (2020b, p. 14): \"The Director or, at his or her option, an Associate Director or Stage Manager, shall issue instructions directly to the technical crew.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Under Article 2, who may act as the director of the talent, camera crew or sound crew on the set?", options: ["Any producer", "The TD on duty", "The stage manager", "Only the director"], correctIndex: 3, explanation: "DGA (2020b, p. 19): \"No one other than the Director may act as the Director of the talent, camera crew or sound crew on the set.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Which duty does Article 2 give the associate director?", options: ["Perform all timing functions", "Mix the program audio feed", "Shade every camera on air", "Build the graphics templates"], correctIndex: 0, explanation: "DGA (2020b, p. 16): the AD will \"Perform all timing functions and give all time cues.\" Mixing, shading and graphics belong to other chairs.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Under Article 2, how does the AD preset cues?", options: ["As the sponsor requests them", "As master control prefers", "As assigned by the director", "As the A1 sets them on air"], correctIndex: 2, explanation: "DGA (2020b, p. 16): the AD will \"Preset cues as assigned by the Director.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Why does this course treat Article 2 as a written description and not as the sports contract?", options: ["Network sports deals were not read", "The FLTTA was cancelled in 2020", "Sports crews have no union at all", "ESPN wrote the FLTTA's Article 2"], correctIndex: 0, explanation: "Lesson 1: network sports work runs under separate agreements with ABC, CBS and NBC, whose duty text was not read for this course (DGA, 2026a).", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "With which networks were the DGA's network rate cards negotiated?", options: ["ESPN, Fox and TNT", "NFL, NBA and MLB", "PBS, CNN and HBO", "ABC, CBS and NBC"], correctIndex: 3, explanation: "DGA (2026a): the network cards for associate directors, stage managers and production associates were negotiated with ABC, CBS and NBC.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What other name does ESPN's glossary give the technical director?", options: ["The shader", "The switcher", "The caller", "The mixer"], correctIndex: 1, explanation: "ESPN (2018, p. 34): the TD is the \"Person responsible for switching to different video sources during a show; also known as the switcher.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What does a university directing handout call \"TD\"?", options: ["A network-level term", "A term for radio crews", "A term for film sets", "A term for news only"], correctIndex: 0, explanation: "Owens (2007, p. 21): \"TD\" is \"a network-level term for the person who switches.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "In some settings, especially local television, who does the handout say may also perform TD functions?", options: ["The A1", "The talent", "The director", "The utility"], correctIndex: 2, explanation: "Owens (2007, p. 21): \"In some settings, especially local television, a director will also perform TD functions.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Which functions does the FOX 5 DC per diem technician posting list?", options: ["TD, audio, robotic camera, floor director", "Replay, playout, graphics and the TOC", "Lighting, rigging, scenic and props", "Producing, writing, editing and hosting"], correctIndex: 0, explanation: "Fox Television Stations (2026): \"technical director, audio operator, robotic camera, and/or floor director.\" It is a local news job.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What kind of job is the FOX 5 DC studio technician posting?", options: ["A Fox Sports truck job on tour", "A local news control-room job", "A network studio job for the NFL", "A stadium video board job"], correctIndex: 1, explanation: "Lesson 1: FOX 5 DC is a local news station; the posting is a news control-room job (Fox Television Stations, 2026).", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "How does Fox News Media's show director posting rate \"Technical director skills\"?", options: ["Nice to have", "Required", "Disqualifying", "Not mentioned"], correctIndex: 0, explanation: "Fox News Media (2026e), a news control-room job, lists \"Technical director skills\" as \"NICE TO HAVE.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What does lesson 1 conclude from ESPN's manual and the FOX 5 DC posting?", options: ["Every shop splits chairs the same", "Only networks have a TD at all", "Local news has no directors left", "Who holds a chair varies by shop"], correctIndex: 3, explanation: "Reasoned in lesson 1: ESPN separates producer, director and TD, while a local news station may give one technician four chairs.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "In a live control room, what does this course say AD means?", options: ["Assistant director", "Associate director", "Audio director", "Art director"], correctIndex: 1, explanation: "Lesson 1: AD means associate director (DGA, 2020b; ESPN, 2018, p. 31).", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Why does this course not use an older handout's \"Assistant Director\" for the AD?", options: ["It mixes in the film AD's job", "It is the DGA's current name", "It is ESPN's preferred term", "It means the same as the TD"], correctIndex: 0, explanation: "Lesson 1: the handout adds \"coordinating the extras,\" which mixes in the film assistant director (Vinovich, n.d.).", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "Which broadcasting-break-in lessons give the overview this course does not repeat?", options: ["Lessons 4 and 5", "Lessons 9 and 10", "Lessons 1 and 8", "Lessons 16 and 17"], correctIndex: 2, explanation: "Lesson 1 points to \"1 · The landscape: who does what on a broadcast\" and \"8 · The control room: switcher, graphics, and replay.\"", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What does this course say it is not?", options: ["A maker's operator certification", "A course built from cited sources", "A tour of the control room chairs", "A guide to reading job postings"], correctIndex: 0, explanation: "Lesson 1: it teaches each chair at a working level and is not any maker's operator certification.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "In ESPN's list, which position has \"timing and elemental oversight of the show\"?", options: ["The technical director", "The producer", "The associate director", "The director"], correctIndex: 2, explanation: "ESPN (2018, p. 20) gives timing and elemental oversight to the associate director.", sourceLessonSlug: "who-answers-to-whom" },
          { prompt: "What does ESPN's producer create to outline the plan for the day of the show?", options: ["A format", "A crew sheet", "A budget", "A comms plan"], correctIndex: 0, explanation: "ESPN (2018, p. 23): the producer will \"Create format to outline the plan for the day-of-show.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "Which of these is on ESPN's list of chairs that get a copy of the format?", options: ["The team sponsor", "The ticket office", "The team doctor", "The A1 in audio"], correctIndex: 3, explanation: "ESPN (2018, p. 23) lists TD, Dir, AP, AD, A1, EVS, RO, GIS, BC, PXP, Analyst and TOC. Sponsors, ticket offices and team doctors are not on it.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "What does this course call the person in the position ESPN's list writes as \"EVS\"?", options: ["The replay operator", "The EVS operator", "The graphics operator", "The video operator"], correctIndex: 0, explanation: "Lesson 2: EVS is a replay system's name, not a job title, so the course calls the person the replay operator.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "What is \"EVS\", as this course uses the word?", options: ["A job title on the crew", "A union for replay crew", "A replay system's name", "A league's replay rule"], correctIndex: 2, explanation: "Lesson 2: \"EVS\" is a replay system's name (lesson 12), not a job title.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "What is ESPN's sample rundown called?", options: ["A Reader Card List", "A Shot Sheet Log", "A Crew Call Sheet", "A Daily Run Card"], correctIndex: 0, explanation: "ESPN (2018, p. 29): the sample is a \"Reader Card List\" from an NFL team network's telecast.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "Which columns does ESPN's sample rundown give for each item?", options: ["Camera, lens, mic, light and cable", "Element, graphics, audio, tape, time", "Sponsor, rate, length and billing", "Talent, script, prompter and cue"], correctIndex: 1, explanation: "ESPN (2018, p. 29): columns for the element, graphics, audio, tape and running time.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "What does \"BREAK 2 LOCAL 1:15\" in ESPN's sample show?", options: ["A camera call on the headset", "A score in the graphics", "A replay clip's length", "A break line in the rundown"], correctIndex: 3, explanation: "ESPN (2018, p. 29): break lines in the sample read like \"BREAK 2 LOCAL 1:15\" and \"BREAK 1 NETWORK VT.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "In ESPN's glossary, what does \"float\" mean?", options: ["Run a segment exactly as planned", "Hold a camera shot steady on air", "Pull an item to bring it back later", "Drop a graphic for the rest of show"], correctIndex: 2, explanation: "ESPN (2018, p. 31): \"To remove an item from the rundown with the intent of bringing back later in the show.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "In ESPN's glossary, what does \"heavy\" mean?", options: ["A telecast that runs long", "A rundown with many graphics", "A camera with a long lens", "A break with extra spots"], correctIndex: 0, explanation: "ESPN (2018, p. 32): \"When a game telecast runs long.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "In ESPN's glossary, what does \"as scripted\" tell the crew?", options: ["The segment has been cut", "The segment runs as planned", "The talent will ad-lib it", "The script is still late"], correctIndex: 1, explanation: "ESPN (2018, p. 31): \"Expression used to notify show crew that segment will run as originally planned.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "In ESPN's glossary, what are \"A's\"?", options: ["The audio crew's channels", "The top-rated plays of a game", "The A unit of a truck", "The first segment of a show"], correctIndex: 3, explanation: "ESPN (2018, p. 31): \"First segment of a show.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "What is the first item on ESPN's AD checklist?", options: ["Set the clock and match master", "Build the opening graphics", "Check every camera's iris", "Call the talent to the booth"], correctIndex: 0, explanation: "ESPN (2018, p. 25): \"Set clock in control room- Truck, with master control make sure clocks match.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "With whom does ESPN's AD confirm the length of all breaks?", options: ["The talent", "The A1", "Master control", "The TD"], correctIndex: 2, explanation: "ESPN (2018, p. 25): the AD confirms the \"length of all breaks with master control.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "For which elements does ESPN's AD get run times?", options: ["Live camera shots on the field", "Pre-recorded pieces from the truck", "Every replay in the second half", "Each ad-lib the announcers make"], correctIndex: 1, explanation: "ESPN (2018, p. 25): run times on the tease, the open animation, SOTS, B-roll and \"any pre-recorded element that is built and runs from the truck.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "With whom does ESPN's AD go over in-game timeouts before the game?", options: ["The producer", "The referee", "The sponsor", "The utility"], correctIndex: 0, explanation: "ESPN (2018, p. 25): the AD goes \"over all in game time outs with producer.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "During the game, what does ESPN's AD confirm before going to break?", options: ["The score bug is on the air", "Every camera is white-balanced", "We have the time-out to break", "The replay is cued and ready"], correctIndex: 2, explanation: "ESPN (2018, p. 25): the AD confirms \"when we are in a break zone\" and \"that we have the time-out and can go to break.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "What does ESPN's glossary say master control is?", options: ["Where the cameras are shaded", "Where the graphics are designed", "Where the director calls shots", "Where commercial breaks play back"], correctIndex: 3, explanation: "ESPN (2018, p. 33): \"Master: Slang for \"Master Control\" where the shows commercial breaks are played back.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "If ESPN rolls the breaks, what does the manual require?", options: ["The producer or AD stays in contact", "The TD rolls each break by hand", "The A1 mutes every microphone", "The talent counts down on air"], correctIndex: 0, explanation: "ESPN (2018, p. 3): \"If breaks are rolled by ESPN, the producer or AD must be assigned to be in contact with ESPN throughout the event.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "Besides ESPN, where does the manual say breaks may be rolled from?", options: ["From the league", "From the site", "From the sponsor", "From a fan's phone"], correctIndex: 1, explanation: "ESPN (2018, p. 3): \"In some cases, breaks will be rolled from site.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "Under the DGA's Article 2, what does the AD prepare?", options: ["Camera scene files and looks", "Audio mix-minus feeds for talent", "Telecast reports and top sheets", "Graphics templates and fonts"], correctIndex: 2, explanation: "DGA (2020b, p. 16): the AD prepares \"telecast reports, top sheets, etc.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "Under Article 2, which script does the AD forward for filing?", options: ["The \"as broadcast\" script", "The first draft of the script", "The talent's own notes", "The sponsor's ad copy"], correctIndex: 0, explanation: "DGA (2020b, p. 16): the AD forwards the \"as broadcast\" script for filing.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "At a DGA event, two ADs said scripts and rundowns work differently between which kinds of programs?", options: ["Sports and weather", "Drama and comedy", "Live and taped sports", "Entertainment and news"], correctIndex: 3, explanation: "DGA (2021): scripts and rundowns \"work differently in entertainment programs vs. news.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "At that DGA event, what did the moderator show is important to an associate director?", options: ["Lenses", "Notes", "Fonts", "Cables"], correctIndex: 1, explanation: "DGA (2021): the moderator showed \"how important notes are to an Associate Director.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "What does NFL Media's FAST video systems operator insert during programming?", options: ["Score bugs", "IFB feeds", "SCTE-35 cues", "Lens data"], correctIndex: 2, explanation: "NFL (2026e): \"Execute SCTE-35 cue insertion for live and recorded programming.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "On whose commands does NFL Media's FAST operator insert those cues?", options: ["The A1's", "The talent's", "The V1's", "The AD's"], correctIndex: 3, explanation: "NFL (2026e): \"following AD commands and established operational procedures.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "What does lesson 2 conclude about the clock across every source it read?", options: ["The AD owns the clock", "The TD owns the clock", "The A1 owns the clock", "The talent owns it"], correctIndex: 0, explanation: "Reasoned in lesson 2: the DGA gives the AD all timing functions, ESPN's AD matches the clock with master control, and an NFL posting triggers breaks on the AD's commands.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "Where does this course teach the counts to air, to break and back from break?", options: ["Section 2", "Section 7", "Section 4", "Section 9"], correctIndex: 1, explanation: "Lesson 2: the counts themselves are taught in section 7, how it fits together.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "In lesson 2's summary, what do the rundown and the AD each tell you?", options: ["Who is paid, and how much", "Which camera, and which lens", "What is coming, and when", "What to wear, and where"], correctIndex: 2, explanation: "Lesson 2: the rundown tells you what is coming and the AD tells you when.", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "Whose telecast is ESPN's sample rundown taken from?", options: ["A college conference", "A high school league", "A national news show", "An NFL team network"], correctIndex: 3, explanation: "ESPN (2018, p. 29): the sample is from an NFL team network's telecast dated \"8-20-11.\"", sourceLessonSlug: "the-rundown-and-the-clock" },
          { prompt: "How many switcher inputs does ESPN require at minimum for a school production?", options: ["10", "4", "24", "8"], correctIndex: 0, explanation: "ESPN (2018, p. 2): \"10 inputs.\" Four is the camera minimum, 24 the audio console's inputs and 8 the aux buses.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "How many keyers does ESPN's minimum switcher need?", options: ["1", "8", "2", "10"], correctIndex: 2, explanation: "ESPN (2018, p. 2): \"2 keyers.\" One is the number of MEs.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "How many aux buses does ESPN's minimum switcher need, and for what?", options: ["2, for graphics and the score bug", "8, for isos, monitors and transmission", "4, for the four camera operators", "24, for the audio console inputs"], correctIndex: 1, explanation: "ESPN (2018, p. 2): \"8 aux buses for iso's, monitors and transmission.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "What is ESPN's minimum for cameras at a school production?", options: ["Two, both on robotic heads", "Six, with two left unmanned", "Eight, all shaded by one V1", "Four, with an operator for each"], correctIndex: 3, explanation: "ESPN (2018, p. 2): \"four cameras with an operator for each.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "What is ESPN's minimum replay for a school production?", options: ["One DVR unit, 4 in and 2 out", "Two EVS servers, 12 channels", "Six replay operator seats", "No replay is required at all"], correctIndex: 0, explanation: "ESPN (2018, p. 2): \"one DVR Unit with minimum 4 input / 2 output.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "How many inputs must the audio console have under ESPN's minimum?", options: ["10", "8", "4", "24"], correctIndex: 3, explanation: "ESPN (2018, p. 2): an audio console of \"24 inputs.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "For which network was Game Creek Video's truck 79 built, per the trade report?", options: ["Fox", "NBC", "ESPN", "CBS"], correctIndex: 2, explanation: "Costa (2018): truck 79 was built for ESPN.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Which rooms does the trade report put in truck 79's A unit?", options: ["Replay, comms, a V/O booth and 4K", "Engineering, video, production, audio", "Catering, wardrobe and makeup", "Graphics design and animation"], correctIndex: 1, explanation: "Costa (2018): \"the A unit is hosting engineering, video, production, and audio.\" Replay and comms are in the B unit.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Which rooms does the trade report put in truck 79's B unit?", options: ["Replay, comms, a V/O booth and 4K", "Engineering, video and production", "Audio, lighting and the stage", "Catering, wardrobe and makeup"], correctIndex: 0, explanation: "Costa (2018): \"the B unit has replay, comms, a V/O booth, and 4K support resources.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Which switcher does Game Creek's page list for truck 79?", options: ["A Calrec Apollo desk", "A Sony HDC 4300 body", "An EVS XT-VIA server", "A Grass Valley K-Frame"], correctIndex: 3, explanation: "Game Creek Video (n.d.) lists a Grass Valley K-Frame X-Series switcher. The Calrec is the audio console, the Sony HDC 4300 a camera and the EVS XT-VIA a replay server.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Which audio console does Game Creek's page list for truck 79?", options: ["An SSL S500 desk", "A Calrec Apollo", "A Yamaha RIO box", "A Calrec Brio"], correctIndex: 1, explanation: "Game Creek Video (n.d.) lists a Calrec Apollo audio console.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Which replay servers does Game Creek's page list for truck 79?", options: ["EVS XT-VIA", "Ross Rio", "EVS XT-GO", "Chyron PAINT"], correctIndex: 0, explanation: "Game Creek Video (n.d.) lists EVS XT-VIA replay.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Why does this course give no floor area for truck 79's A unit?", options: ["Game Creek keeps the size a secret", "Trucks change size on every show", "The page gives it two different ways", "The trade report left it out"], correctIndex: 2, explanation: "Lesson 3: Game Creek's page gives the A unit's working area as both 64 by 24 feet and 64 by 22 feet, so the course gives neither as fact.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "How does Mobile TV Group describe its 58FLEX?", options: ["A single fixed trailer", "A flypack in cases", "A studio in a building", "A double expanding unit"], correctIndex: 3, explanation: "Mobile TV Group (n.d.-b): a \"Double expanding unit\" with an \"Optional VMU.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "To what width can the 58FLEX expand, per its spec sheet?", options: ["8 feet 6 inches", "16 feet 6 inches", "53 feet", "22 feet"], correctIndex: 1, explanation: "Mobile TV Group (n.d.-c): 8 feet 6 inches wide \"with ability to expand to\" 16 feet 6 inches. Fifty-three feet is its length.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "How many replay operator positions does the 58FLEX spec sheet give?", options: ["Up to 2", "Up to 12", "Up to 6", "Up to 16"], correctIndex: 2, explanation: "Mobile TV Group (n.d.-c): \"Up to 6 replay operator positions.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Which intercom does the 58FLEX spec sheet list?", options: ["An RTS Odin system", "A Riedel Bolero set", "A Clear-Com Encore", "A Clear-Com Eclipse"], correctIndex: 0, explanation: "Mobile TV Group (n.d.-c): an \"RTS Odin Digital Intercom System.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "How many HD TV trucks does NEP say it operates around the world?", options: ["About 37", "Exactly 79", "Fewer than 20", "More than 150"], correctIndex: 3, explanation: "NEP Group (n.d.): \"more than 150 HD TV trucks around the world.\" Thirty-seven is Mobile TV Group's count.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "How many mobile units does Mobile TV Group say it has across North America?", options: ["150", "37", "4,000", "6"], correctIndex: 1, explanation: "Mobile TV Group (n.d.-a): \"37 mobile units across North America.\" It says it covers over 4,000 live events a year.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "How does this course treat NEP's and Mobile TV Group's truck counts?", options: ["As the companies' own counts", "As an industry census figure", "As a federal license tally", "As a union membership roll"], correctIndex: 0, explanation: "Lesson 3: \"These are the companies' own counts.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "What does NFL Media's studio coordinator keep \"production-ready at all times\"?", options: ["Trucks, trailers and generators", "Cameras, lenses and tripods", "Control room, stage and studio", "Scripts, rundowns and notes"], correctIndex: 2, explanation: "NFL (2026o): \"control room, stage, and studio environments production-ready at all times.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "From which room does NFL Media's lighting director monitor shows?", options: ["The audio room", "The replay room", "The green room", "The shading room"], correctIndex: 3, explanation: "NFL (2026i): \"Monitor show productions from shading room and consult with video operator as necessary.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "With whom does NFL Media's lighting director consult while monitoring shows?", options: ["The video operator", "The replay operator", "The audio mixer", "The talent"], correctIndex: 0, explanation: "NFL (2026i): the lighting director will \"consult with video operator as necessary.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "With the producer and director in a truck, what did a veteran stage manager quoted by the DGA say the stage manager is?", options: ["The last to be told", "The leader on the ground", "The voice of the truck", "The one who rolls tape"], correctIndex: 1, explanation: "DGA (2025): \"with a Producer and a Director sitting in a truck somewhere, you are the leader on the ground.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Reasoned in lesson 3, how does a truck hold the same rooms as a studio?", options: ["Stacked in one shared room", "Spread across the stadium", "Split across trailers and sides", "Moved into the press box"], correctIndex: 2, explanation: "Lesson 3: a truck splits production, audio, video, replay, engineering and comms across one or more trailers and expanding sides; a studio puts them down a hallway.", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "Which lesson follows one camera's signal through the truck, so this course does not repeat it?", options: ["CREW-00 lesson 1", "CREW-07 lesson 4", "CREW-05 lesson 27", "CREW-04 lesson 22"], correctIndex: 3, explanation: "Lesson 3 links CREW-04's \"22 · What the truck does with your picture.\"", sourceLessonSlug: "the-truck-and-the-studio" },
          { prompt: "In lesson 3's reasoning, what travels with the rooms from truck to studio?", options: ["The jobs", "The cables", "The trucks", "The fans"], correctIndex: 0, explanation: "Lesson 3: \"The jobs travel with the rooms.\"", sourceLessonSlug: "the-truck-and-the-studio" },
        ],
      },
    },
  ],
};
