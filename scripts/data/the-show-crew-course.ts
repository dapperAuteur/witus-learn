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
//  - L10: Sony's product pages could not be read (crew08-sony-panels).
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

const NFL_BOARD_API = `National Football League. (n.d.). *nflcareers job board* [Greenhouse public job board API]. ${RETRIEVED} https://boards-api.greenhouse.io/v1/boards/nflcareers/jobs?content=true`;
const NFL_AUDIO2 = `National Football League. (2026g, June 26). *Seasonal part-time audio 2* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5279619008`;
const FNM_A2 = `Fox News Media. (2026a, October 19). *Freelance A2/audio assistant* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/New-York-New-York-USA/Freelance-A2-Audio-Assistant_R50034126`;
const FNM_AUDIO_OP = `Fox News Media. (2026b, September 22). *Freelance audio operator* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/Washington-District-of-Columbia-USA/Freelance-Audio-Operator_R50033869`;
const FNM_BPE = `Fox News Media. (2026g, October 21). *Broadcast production engineer* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/Washington-District-of-Columbia-USA/Broadcast-Production-Engineer_R50025362`;
const ESPN_AUDIO_OP = `ESPN. (n.d.). *Studio audio operator* [Job posting, filled; aggregator copy]. EntertainmentCareers.Net. ${RETRIEVED} https://www.entertainmentcareers.net/espn/studio-audio-operator/job/484628`;
const FOX_BOARD = `Fox Corporation. (n.d.). [Workday job board, keyword search]. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic`;
const DISNEY_BOARD = `The Walt Disney Company. (n.d.). [Workday job board, keyword search]. ${RETRIEVED} https://disney.wd5.myworkdayjobs.com/disneycareer`;
const WBD_BOARD = `Warner Bros. Discovery. (n.d.). [Workday job board, keyword search]. ${RETRIEVED} https://warnerbros.wd5.myworkdayjobs.com/global`;

const NBA_BOARD = `National Basketball Association. (n.d.). [Workday job board, keyword search]. ${RETRIEVED} https://nba.wd108.myworkdayjobs.com/nbacareers`;

// Video (research file 02)
const NFL_V1 = `National Football League. (2026n, June 26). *Seasonal part-time V1/shading operator* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5281443008`;
const FNM_SENIOR_VIDEO = `Fox News Media. (2026d, August 25). *Freelance senior video operator* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/New-York-New-York-USA/Freelance-Senior-Video-Operator_R50033722`;
const NBC_V1 = `NBC Sports. (2025). *Video operator* [Job posting, removed by the employer January 5, 2026; aggregator copy]. EntertainmentCareers.Net. ${RETRIEVED} https://www.entertainmentcareers.net/nbc-sports/video-operator/job/503017`;
const TURNER_2022 = `Turner Sports. (2022). *V2, sports* [Job posting, removed by the employer October 3, 2022; aggregator copy]. EntertainmentCareers.Net. ${RETRIEVED} https://www.entertainmentcareers.net/turner-sports/v2-sports/job/417751/`;
const TURNER_2023 = `Turner Sports. (2023). *V2, sports* [Job posting, removed by the employer June 21, 2023; aggregator copy]. EntertainmentCareers.Net. ${RETRIEVED} https://www.entertainmentcareers.net/turner-sports/v2-sports/job/435506`;
const ABC_MAINT = `ABC News. (2026, September 15). *Broadcast maintenance technician (expression of interest) (as-needed)* [Job posting, req. 10160861]. The Walt Disney Company, Workday. ${RETRIEVED} https://disney.wd5.myworkdayjobs.com/disneycareer/job/Washington-DC-USA/Broadcast-Maintenance-Technician--Expression-of-Interest----As-Needed--_10160861`;
const LEADER_GUIDE = `Leader Electronics Corporation. (2026). *Leader scopes: On-set production guide* [Application guide; content as of March 2026; PDF]. LeaderPhabrix. ${RETRIEVED} https://leaderphabrix.com/pdfs/guides/Leader%20Scopes%20-%20On-Set%20Production.pdf`;
const LEADER_LV5600W = `LeaderPhabrix. (n.d.). *Leader LV5600W waveform monitor* [Product page]. ${RETRIEVED} https://leaderphabrix.com/products/lv5600w-waveform-monitor/`;
const GV_CREATIVE_GRADING = `Grass Valley. (n.d.-b). *Creative Grading* [Product page]. ${RETRIEVED} https://www.grassvalley.com/products/cameras/creative-grading/`;
const EVS_XTVIA = `EVS. (n.d.-b). *XT-VIA: Live production server* [Product page]. ${RETRIEVED} https://evs.com/products/live-production-servers/xt-via`;
// Replay, playout and the TOC (research files 02 and 03)
const EVS_LSMVIA = `EVS. (n.d.-a). *LSM-VIA: Live replay and highlights system* [Product page]. ${RETRIEVED} https://evs.com/products/live-replays-storytelling/lsm-via`;
const EVS_XTGO = `EVS. (n.d.-c). *XT-GO: Live replay server* [Product page]. ${RETRIEVED} https://evs.com/products/live-production-servers/xt-go`;
const EVS_IPDIRECTOR = `EVS. (n.d.-d). *IPDirector: Live PAM suite* [Product page]. ${RETRIEVED} https://evs.com/products/asset-workflow-management/ipdirector`;
const ROSS_XPRESSION = `Ross Video. (n.d.-a). *XPression: Real-time motion graphics platform* [Product page]. ${RETRIEVED} https://www.rossvideo.com/products/graphics-and-virtual/xpression/`;
const CHYRON_PAINT = `Chyron. (n.d.-a). *PAINT: Telestrated replay and sports analysis* [Product page]. ${RETRIEVED} https://chyron.com/products/all-in-one-production-systems/telestrated-replay-and-sports-analysis/`;
const CHYRON_VP = `Chyron. (n.d.-b). *Virtual Placement: Live broadcast virtual graphics* [Product page]. ${RETRIEVED} https://chyron.com/products/virtual-augmented-reality/live-broadcast-virtual-graphics/`;
const NBA_HIGHLIGHTS = `National Basketball Association. (2026a, October 13). *Highlight factory lead* [Job posting, JR001006]. Workday. ${RETRIEVED} https://nba.wd108.myworkdayjobs.com/nbacareers/job/Secaucus-USA/Highlight-Factory-Lead_JR001006`;
const NBA_LOCAL_SUP = `National Basketball Association. (2026b, October 14). *Local game production supervisor (coordinating producer)* [Job posting, JR000970]. Workday. ${RETRIEVED} https://nba.wd108.myworkdayjobs.com/nbacareers/job/Secaucus-USA/Local-Game-Production-Supervisor--Coordinating-Producer-_JR000970`;
const NFL_SEGMENT_PRODUCER = `National Football League. (2026k, September 29). *Seasonal part-time segment producer* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5393598008`;
const NFL_TOC = `National Football League. (2026l, August 14). *Seasonal part-time TOC operator* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5389873008`;
const FNM_PLAYOUT = `Fox News Media. (2026c, September 9). *Freelance playout operator* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/New-York-New-York-USA/Freelance-Playout-Operator_R50033820`;
const MTVG_CAREERS = `Mobile TV Group. (n.d.-e). *Careers*. ${RETRIEVED} https://www.mobiletvgroup.com/contact/careers/`;

// Graphics and the first-and-ten line (research file 02)
const NFL_RTS_ASSOC = `National Football League. (2026a, September 17). *Associate, real-time systems (external agency staff)* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5414662008`;
const NFL_RTS_COORD = `National Football League. (2026b, September 17). *Part-time coordinator, real-time systems* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5414283008`;
const NFL_DESIGNER = `National Football League. (2026f, July 10). *Seasonal graphics designer/animator* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5311969008`;
const NFL_BA = `National Football League. (2026h, September 29). *Seasonal part-time broadcast associate* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5393600008`;
const NFL_MDG = `National Football League. (2026p, September 2). *Part-time Media Design Group designer/animator* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5408969008`;
const FNM_VIZ = `Fox News Media. (2026f, July 24). *Freelance Viz operator* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/New-York-New-York-USA/Freelance-Viz-Operator_R50033229`;
const FNM_RTGA = `Fox News Media. (2026i, October 14). *Real-time graphics artist* [Job posting]. Fox Corporation, Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/New-York-New-York-USA/Real-Time-Graphics-Artist_R50033800`;
const FOX_INTERN = `Fox Corporation. (2026a, September 28). *Summer and fall 2027 FOX Technology Internship Program: Live sports virtual enhancement operator* [Job posting, R50033973; the published title has a dash before "Live"]. Workday. ${RETRIEVED} https://fox.wd1.myworkdayjobs.com/Domestic/job/USA---AZ---Tempe---2010-E-Centennial-Cir/Summer-and-Fall-2027-FOX-Technology-Internship-Program---Live-Sports-Virtual-Enhancement-Operator_R50033973`;
const VIZ_ENGINE = `Vizrt. (n.d.-a). *Viz Engine* [Product page]. ${RETRIEVED} https://www.vizrt.com/products/viz-engine/`;
const VIZ_TRIO = `Vizrt. (n.d.-b). *Viz Trio* [Product page]. ${RETRIEVED} https://www.vizrt.com/products/viz-trio/`;
const VIZ_ARENA = `Vizrt. (n.d.-c). *Viz Arena* [Product page]. ${RETRIEVED} https://www.vizrt.com/products/viz-arena/`;
const CHYRON_2024 = `Chyron. (2024, November 25). *Chyron Virtual Placement 7.7 optimizes graphic tools for American football broadcasting* [Press release]. ${RETRIEVED} https://chyron.com/nfl-broadcast-production-tools/`;
const HOFHEIMER_2013 = `Hofheimer, B. (2013, September 27). *Virtual yellow 1st and Ten line debuted on ESPN 15 years ago today*. ESPN Press Room. ${RETRIEVED} https://espnpressroom.com/feature/virtual-yellow-1st-and-ten-line-debuted-on-espn-15-years-ago-today/`;
const DACHMAN_2017 = `Dachman, J. (2017, November 28). *Sports Broadcasting Hall of Fame: Stan Honey [title continues after a dash] master innovator, navigator, collaborator*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2017/11/28/sports-broadcasting-hall-of-fame-stan-honey-master-innovator-navigator-collaborator/`;
const TAYLOR_2015 = `Taylor, T. (2015, January 29). *Behind the NFL's yellow first down line, and what's next for sports TV*. SMT (SportsMEDIA Technology). ${RETRIEVED} https://smt.com/behind-the-nfls-yellow-first-down-line-and-whats-next-for-sports-tv/`;

// Audio trade press (research file 01). Every article is one dated account; no lesson names its people.
const DALEY_2018 = `Daley, D. (2018, September 21). *Inside NBC Sports' all-encompassing audio production for Sunday Night Football*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2018/09/21/inside-nbc-sports-all-encompassing-audio-production-for-sunday-night-football/`;
const DALEY_2022 = `Daley, D. (2022, October 5). *Small changes make substantial differences in NFL audio*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2022/10/05/small-changes-make-substantial-differences-in-nfl-audio/`;
const DALEY_2023 = `Daley, D. (2023, December 1). *Broadcast audio's A2s are key in sports production*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2023/12/01/broadcast-audios-a2s-are-key-in-sports-production/`;
const DALEY_2024A = `Daley, D. (2024a, January 12). *NFL playoffs 2024: Broadcasters to bring out their A(udio) games*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2024/01/12/nfl-playoffs-2024-broadcasters-to-bring-out-their-audio-games/`;
const DALEY_2024B = `Daley, D. (2024b, September 11). *Tech focus: Training, part 1 [title continues after a dash] As broadcast sports' A1 cohort ages out, audio looks for solutions*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2024/09/11/tech-focus-training-part-1-as-broadcast-sports-a1-cohort-ages-out-audio-looks-for-solutions/`;
const DALEY_2024C = `Daley, D. (2024c, September 11). *Tech focus: Training, part 2 [title continues after a dash] A view from the audio compartment*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2024/09/11/tech-focus-training-part-2-a-view-from-the-audio-compartment/`;
const DALEY_2026 = `Daley, D. (2026, October 23). *FOX Sports gives Series sound a refresh with new people on the audio team, new parabolics*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2026/10/23/fox-sports-gives-series-sound-a-refresh-with-new-people-on-the-audio-team-new-parabolics/`;

// RF coordination, named only (research file 01; CREW-00 lesson 26 owns bands and power)
const CFR_74_801 = `Definitions, 47 C.F.R. § 74.801 (2026). Electronic Code of Federal Regulations, up to date as of October 23, 2026. ${RETRIEVED} https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-47?part=74&section=74.801`;
const CFR_74_832 = `Licensing requirements and procedures, 47 C.F.R. § 74.832 (2026). Electronic Code of Federal Regulations, up to date as of October 23, 2026. ${RETRIEVED} https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-47?part=74&section=74.832`;
const SHURE = `Shure. (n.d.). *All about wireless: Intermodulation distortion*. ${RETRIEVED} https://www.shure.com/en-US/insights/all-about-wireless-intermodulation-distortion`;
const YEARY_2018 = `Yeary, J. (2018, April 2). *The new reality of wireless frequency coordination*. TV Technology. ${RETRIEVED} https://www.tvtechnology.com/opinions/the-new-reality-of-wireless-frequency-coordination`;

// Intercom and IFB (research files 01 and 03)
const CC_ECLIPSE = `Clear-Com. (n.d.-a). *Eclipse HX matrix intercom systems* [Product page]. ${RETRIEVED} https://www.clearcom.com/Products/Products-By-Name/Eclipse-HX`;
const CC_MATRIX = `Clear-Com. (n.d.-b). *Matrix solutions* [Product category page]. ${RETRIEVED} https://www.clearcom.com/Products/Products-by-Technology/Matrix-Solutions`;
const CC_PARTYLINE = `Clear-Com. (n.d.-c). *Partyline communications* [Product category page]. ${RETRIEVED} https://www.clearcom.com/Products/Products-by-Technology/Partyline-Communications`;
const CC_2020A = `Clear-Com. (2020a, September 24). *Destination listen: How to listen to an IFB's composite output (IFB destination's source and the talent interrupt) on a Eclipse matrix's panel*. Clear-Com Solution Finder. ${RETRIEVED} https://clear-com.atlassian.net/wiki/spaces/SF/pages/845054010`;
const CC_2020B = `Clear-Com. (2020b, April 24). *What is the difference between a partylines (PL) and a fixed groups (FG)? And what is a sort group?* Clear-Com Solution Finder. ${RETRIEVED} https://clear-com.atlassian.net/wiki/spaces/SF/pages/323813421`;
const CC_2020C = `Clear-Com. (2020c). *A comprehensive guide to Clear-Com analog and digital partyline systems* [E-book, PDF]. ${RETRIEVED} https://clearcom.com/downloadcenter/technicaldocs/ComprehensiveGuidetoPartyline/Comprehensive_Guide_to_Clear_Com_Analog_Digital_Partyline_Ebook.pdf`;
const CC_2026A = `Clear-Com. (2026a, July 1). *Arcadia: What is IFB and how to make it work*. Clear-Com Solution Finder. ${RETRIEVED} https://clear-com.atlassian.net/wiki/spaces/SF/pages/4179558403`;
const CC_2026B = `Clear-Com. (2026b, February 18). *Matrix: MCR / sound operator monitoring of IFBs using DynamEC*. Clear-Com Solution Finder. ${RETRIEVED} https://clear-com.atlassian.net/wiki/spaces/SF/pages/4401790989`;
const RTS_MATRIX = `RTS. (n.d.-a). *Digital matrix intercom systems* [Product page]. ${RETRIEVED} https://rtsintercoms.com/products/digital-matrix-intercom-systems/`;
const RTS_PARTYLINE = `RTS. (n.d.-b). *Partyline intercom systems* [Product page]. ${RETRIEVED} https://rtsintercoms.com/products/partyline-intercom-systems/`;
const RIEDEL_ARTIST = `Riedel Communications. (n.d.-a). *Artist* [Product page]. ${RETRIEVED} https://www.riedel.net/intercom/artist/`;
const RIEDEL_BOLERO = `Riedel Communications. (n.d.-b). *Bolero* [Product page]. ${RETRIEVED} https://www.riedel.net/intercom/bolero/`;
const RIEDEL_SMARTPANELS = `Riedel Communications. (n.d.-c). *SmartPanels* [Product page]. ${RETRIEVED} https://www.riedel.net/intercom/smartpanels/`;

// Consoles, embedding and audio-follow-video (research file 01)
const CALREC_ARTEMIS = `Calrec Audio. (n.d.-a). *Artemis* [Product page]. ${RETRIEVED} https://calrec.com/shop/broadcast-audio-consoles/artemis/`;
const CALREC_HYDRA2 = `Calrec Audio. (n.d.-b). *Hydra2* [Product page]. ${RETRIEVED} https://calrec.com/shop/audio-networking/hydra2/`;
const CALREC_OB = `Calrec Audio. (n.d.-c). *Outside broadcast (OB)* [Applications page]. ${RETRIEVED} https://calrec.com/outside-broadcast/`;
const CALREC_PRIMER = `Calrec Audio. (2018). *Calrec audio primer: Basic introduction to Calrec functionality and applications* (Issue 5) [PDF]. ${RETRIEVED} https://calrec.com/wp-content/uploads/2018/01/Calrec-Audio-Primer-926-134-Iss-5.pdf`;
const SSL_SYSTEM_T = `Solid State Logic. (n.d.-a). *Audio consoles* [System T broadcast product page]. ${RETRIEVED} https://solidstatelogic.com/broadcast/audio-consoles`;
const SSL_S500 = `Solid State Logic. (n.d.-b). *S500* [Product page]. ${RETRIEVED} https://solidstatelogic.com/products/s500`;
const AUDINATE = `Audinate. (n.d.). *Dante certification program*. ${RETRIEVED} https://www.getdante.com/resources/training/dante-certification-program/`;
const AJA_12GAM = `AJA Video Systems. (n.d.-a). *OG-12G-AM: 16-channel AES/EBU audio embedder/disembedder* [Product page]. ${RETRIEVED} https://www.aja.com/products/og-12g-am`;
const AJA_DANTE = `AJA Video Systems. (n.d.-b). *OG-DANTE-12GAM: openGear 12G-SDI/Dante 64-channel embedder/disembedder* [Product page]. ${RETRIEVED} https://www.aja.com/products/og-dante-12gam`;
const SONY_AFV = `Sony. (n.d.). *Configuring AFV (audio follow video)* [M2L-X help guide]. ${RETRIEVED} https://helpguide.sony.net/pro/m2l-x/v1/en/contents/AFV_settings.html`;
const ROSS_ACUITY = `Ross Video. (n.d.-b). *Audio mixer* [Acuity 15.0 help topic, special custom control events]. ${RETRIEVED} https://help.rossvideo.com/acuity/Topics/Operation/CustomControls/Special-AMixer.html`;
const LAWO_KICK = `Lawo. (n.d.). *KICK: Automated close-ball audio for sports* [Product page]. ${RETRIEVED} https://lawo.com/products/kick/`;

// Loudness (research file 01)
const ATSC_PAGE = `Advanced Television Systems Committee. (n.d.). *A/85, techniques for establishing and maintaining audio loudness for digital television* [Document page]. ${RETRIEVED} https://www.atsc.org/atsc-documents/a85-techniques-for-establishing-and-maintaining-audio-loudness-for-digital-television/`;
const ATSC_2013 = `Advanced Television Systems Committee. (2013). *ATSC recommended practice: Techniques for establishing and maintaining audio loudness for digital television* (A/85:2013) [PDF]. ${RETRIEVED} https://www.atsc.org/wp-content/uploads/2021/04/A85-2013.pdf`;
const ATSC_2026A = `Advanced Television Systems Committee. (2026a). *Annex M: Loudness and true peak quick reference* (A/85:2026-07) [PDF]. ${RETRIEVED} https://www.atsc.org/wp-content/uploads/2026/07/A85-2026-07-Annex-M.pdf`;
const ATSC_2026B = `Advanced Television Systems Committee. (2026b). *ATSC recommended practice: Techniques for establishing and maintaining audio loudness for digital television* (A/85:2026-07) [PDF]. ${RETRIEVED} https://www.atsc.org/wp-content/uploads/2026/07/A85-2026-07.pdf`;
const CFR_73_682 = `Transmission of commercial advertisements by television broadcast station, 47 C.F.R. § 73.682(e) (2026). Electronic Code of Federal Regulations, up to date as of October 23, 2026. ${RETRIEVED} https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-47?part=73&section=73.682`;
const CFR_73_8000 = `Incorporation by reference, 47 C.F.R. § 73.8000 (2026). Electronic Code of Federal Regulations, up to date as of October 23, 2026. ${RETRIEVED} https://www.ecfr.gov/api/renderer/v1/content/enhanced/current/title-47?part=73&section=73.8000`;
const EBU_2023 = `European Broadcasting Union. (2023). *Loudness normalisation and permitted maximum level of audio signals* (EBU R 128-2023) [PDF]. ${RETRIEVED} https://tech.ebu.ch/docs/r/r128.pdf`;

// The floor, the checks and getting hired (research file 03; pass 2)
const NFL_UTILITY = `National Football League. (2026m, October 23). *Seasonal part-time utility* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5461351008`;
const NFL_RZ_PA = `National Football League. (2026j, October 16). *Seasonal part-time RedZone production assistant* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5455482008`;
const NFL_PT_SEGMENT = `National Football League. (2026c, October 12). *Part-time segment producer* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5446043008`;
const NFL_FILMS_AP = `National Football League. (2026d, October 13). *Seasonal associate producer* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5427059008`;
const DGA_SAFETY = `Directors Guild of America. (n.d.-b). *Safety Pass training*. ${RETRIEVED} https://www.dga.org/News/Guild-News/Safety_Issues_Section/Safety-Pass-Training`;
const DGA_2017 = `Directors Guild of America. (2017, May 18). *New safety training requirements for AD/UPM and AD/SM members*. ${RETRIEVED} https://www.dga.org/News/Guild-News/2017/June2017/NewSafetyTrainingRequirements0517`;
const DGA_2026B = `Directors Guild of America. (2026b). *Network AD, SM and PA rates: ABC* [Rate card, effective July 1, 2026 to June 30, 2027, PDF]. ${RETRIEVED} https://edge.sitecorecloud.io/directorsguf4d4-dga2c79-dgaprod1615-f6e3/media/Files/Contracts/Network-Rate-Cards/DGANetworkRates2026-2027_ABC.pdf`;
const DGA_2026C = `Directors Guild of America. (2026c). *Network AD, SM and PA rates: CBS* [Rate card, effective July 1, 2026 to June 30, 2027, PDF]. ${RETRIEVED} https://edge.sitecorecloud.io/directorsguf4d4-dga2c79-dgaprod1615-f6e3/media/Files/Contracts/Network-Rate-Cards/DGANetworkRates2026-2027_CBS.pdf`;
const DGA_2026D = `Directors Guild of America. (2026d). *Network AD, SM and PA rates: NBC* [Rate card, effective July 1, 2026 to June 30, 2027, PDF]. ${RETRIEVED} https://edge.sitecorecloud.io/directorsguf4d4-dga2c79-dgaprod1615-f6e3/media/Files/Contracts/Network-Rate-Cards/DGANetworkRates2026-2027_NBC.pdf`;
const MCPS_A = `Montgomery County Public Schools. (n.d.-a). *Notes to the director* [Classroom handout, Lights, Camera, Media Literacy! Unit 6, PDF]. ${RETRIEVED} https://ww2.montgomeryschoolsmd.org/info/LCL/LCLCoursesOnlinePDF/LCML!/LCML!%20HANDOUTS/LCML!%20Unit%206.%20Television/LCML!%20Director%20notes%20game%20show.pdf`;
const MCPS_B = `Montgomery County Public Schools. (n.d.-b). *Television production roles* [Classroom handout, Lights, Camera, Media Literacy! Unit 6, PDF]. ${RETRIEVED} https://ww2.montgomeryschoolsmd.org/info/LCL/LCLCoursesOnlinePDF/LCML!/LCML!%20HANDOUTS/LCML!%20Unit%206.%20Television/LCML!%20Television%20Production%20Roles.pdf`;
const NABET_ABOUT = `NABET-CWA. (n.d.-a). *About us*. National Association of Broadcast Employees and Technicians, Communications Workers of America. ${RETRIEVED} https://nabetcwa.org/about-us`;
const NABET_HOME = `NABET-CWA. (n.d.-b). *NABET-CWA* [Home page]. ${RETRIEVED} https://nabetcwa.org/`;
const NABET_HIRE = `NABET-CWA. (n.d.-c). *Members for hire*. ${RETRIEVED} https://nabetcwa.org/members-hire`;
const MTVG_CREW = `Mobile TV Group. (n.d.-d). *Crew forms & information*. ${RETRIEVED} https://www.mobiletvgroup.com/crew/`;

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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: Audio, the A1 and the A2
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a1-a2-a3-as-posted",
      title: "4 · The A1, the A2 and the A3, as posted",
      section: "2 · Audio: the A1 and the A2",
      recallContent: [
        {
          prompt: "How does a trade report divide Game Creek's truck 79 between its A and B units?",
          answer: "The A unit hosts engineering, video, production and audio; the B unit has replay, comms, a V/O booth and 4K support (Costa, 2018).",
        },
        {
          prompt: "From which room does NFL Media's lighting director monitor shows?",
          answer: "The shading room, consulting with the video operator (National Football League [NFL], 2026i).",
        },
      ],
      body: `${QR}

**Numbered chairs.** Broadcast audio has numbered chairs: the A1, the A2 and, in one posting, the A3. This lesson reads what employers wrote about each one. Lesson 5 adds what mixers and A2s told the trade press.

**What one network wrote down.** The clearest description of both chairs found for this course is a closed ESPN posting for an "Audio Operator I," read in an aggregator's copy. The job provides "audio mixing (A1) and/or audio assist (A2) support for live event , studio productions and pre-recorded material" (ESPN, n.d.). Then it splits the work:

| Chair | ESPN's posting |
|---|---|
| A1 | "you must be proficient in mixing and monitoring all audio sources including but not limited to microphones, music, sound effects and natural sound" |
| A2 | "you must be experienced in the configuration of in-house intercom/PL communications and proficient in dressing talent microphones/IFBs" |

It lists the gear: "audio mixing consoles, outboard equipment, audio & video routing, digital audio delivery servers, microphone & IFBs and their signal flows, mix minus, intercom devices & software, broadcast routers." It asks for "2 years practical Content Production or related experience at the large market or network level in the A1 and/or A2 role" (ESPN, n.d.). The aggregator marks it "This position has been filled," removed by the employer on March 4, 2025, with no pay shown.

**No open A1 posting.** When this course was researched on October 26, 2026, no posting titled A1 was open on the job boards of Fox, Disney or Warner Bros. Discovery, or on the NFL's (Fox Corporation, n.d.; National Football League [NFL], n.d.; The Walt Disney Company, n.d.; Warner Bros. Discovery, n.d.). So this course describes the A1 from that closed posting and from trade press, and a reviewer will recheck the boards before release.

**The NFL's A2 mixes.** NFL Media's "Seasonal Part-Time Audio 2," at its studios in Inglewood, California, opens: "NFL Media Technical Operations is looking for an A2 Audio Mixer" (NFL, 2026g). Its duties include:

- "Mix live and recorded show format productions with heavy emphasis on remotes and server playback."
- "Test and verify equipment: Networked audio consoles, intercoms, multiple audio and video servers, EVS Playback audio."
- "Required experience working with cart playback systems such as Ovation or 360systems."
- "Extensive knowledge and proper setup protocol of communication panels (i.e. Riedel) required."
- "Work with A1, show director and production teams on the proper audio requirements for each show."

It asks for 5 to 10 or more years "of experience mixing linear and IP content in a television studio environment," prefers "SSL audio boards (specifically S500)," requires stereo and 5.1 surround mixing, and calls "AES67 with Dante knowledge or certifications a plus" (NFL, 2026g). The terms are "Seasonal employment up to 7 months," with "holidays, nights, and weekends." The pay line, first published June 26, 2026, reads $65.47 USD at both ends of the range, with no unit. The NFL's own pay text says its ranges are "salaries or hourly rates," so this course prints the figure as posted and adds no unit.

Reasoned from the title and the first duty: at NFL Media, an A2 mixes. "A2" does not mean "never mixes" everywhere.

**The A3.** The same posting says: "Perform other duties as assigned such as A3 functions" (NFL, 2026g). It does not say what A3 functions are, and no source read for this course defines an A3, so this course does not either.

**Two news control-room postings.** Fox News Media's "Freelance A2/Audio Assistant" is a news control-room job in New York, posted October 19, 2026. The A2 works "directly with the FNC/FBN audio engineer and crew," will "Mic guests as needed for live and as-live production," "Assist in the maintenance of audio equipment under the direction of the A1," "Provide immediate solutions in the event of equipment failure or other audio problems," and "Move and organize furniture and set pieces in the studio prior to and following the shoot." It asks for "knowledge of RF frequencies," "microphone techniques for both field and studio," "the aesthetics of microphone cabling and IFB wiring" and "Knowledge of Yamaha RIO & Calrec Hydra I/O boxes." Pay: $36.00 to $43.75 per hour (Fox News Media, 2026a).

Fox News Media's "Freelance Audio Operator" is a news control-room job in Washington, posted September 22, 2026. The operator will "Operate audio board for live newscasts and productions" and "Perform facility checks with A2 and Stage Manager for all mic and IFB positions in the studio before daily production begins." It asks for the Calrec Sigma, Artemis and SSL System T consoles, "audio patch bays, Hydra BSP, signal flow," and the "Ability to work in a control room for at least 2 hours without a break." Pay: $28.00 to $37.50 per hour (Fox News Media, 2026b).

**Reasoned: the split, as posted.** Across these postings the A1 mixes and monitors every source and answers for the audio; the A2 sets up comms, dresses talent with mics and IFBs, and keeps the gear working under the A1; at NFL Media an A2 also mixes support audio and server playback. Every employer splits it a little differently: the Fox News A2 also moves furniture, and the local news technician in lesson 1 runs audio as one of four chairs.

:::reveal In ESPN's closed posting, what must the A1 be proficient in, and what must the A2 be experienced in? ||| The A1: mixing and monitoring all audio sources. The A2: configuring intercom/PL communications, and dressing talent microphones and IFBs (ESPN, n.d.).

:::reveal Does NFL Media's A2 mix? ||| Yes. The posting asks for "an A2 Audio Mixer," and its first duty is to mix live and recorded shows (NFL, 2026g).

:::reveal Why does this course print the NFL A2's $65.47 with no unit? ||| The posting prints no unit, and the NFL's pay text says its ranges may be "salaries or hourly rates."

## Sources
- ${ESPN_AUDIO_OP} Locator: opening paragraph; duties and qualifications; page status lines.
- ${FOX_BOARD} Locator: search results for "A1".
- ${NFL_BOARD_API} Locator: job titles and \`first_published\` field for job 5279619008.
- ${DISNEY_BOARD} Locator: search results for "A1 audio".
- ${WBD_BOARD} Locator: search results for "A1".
- ${NFL_AUDIO2} Locator: opening paragraph; "Responsibilities," items 1 to 5 and 8; "Required Qualifications," items 1 to 4; "Terms / Expected Hours of Work"; "Salary / Pay Range".
- ${FNM_A2} Locator: "Job Description," "A Snapshot of Your Responsibilities," "What You Will Need," pay disclosure. A news control-room job.
- ${FNM_AUDIO_OP} Locator: "A Snapshot of Your Responsibilities," "What You Will Need," pay disclosure. A news control-room job.`,
    },
    {
      slug: "the-audio-team-on-a-game",
      title: "5 · The audio team on a network game",
      section: "2 · Audio: the A1 and the A2",
      recallContent: [
        {
          prompt: "What did ESPN's closed Audio Operator I posting ask the A2 to be experienced in?",
          answer: "Configuring in-house intercom/PL communications, and dressing talent microphones and IFBs (ESPN, n.d.).",
        },
        {
          prompt: "What does NFL Media's Audio 2 posting call the job in its first line?",
          answer: "\"an A2 Audio Mixer\" (NFL, 2026g).",
        },
      ],
      body: `${QR}

**A note on these sources.** This lesson rests on trade press: Sports Video Group (SVG) articles that report what individual mixers and A2s said, on dates from 2018 to 2026. Each is one dated account, not a rule, and this course names none of the people quoted.

**What the A1 answers for.** In a 2024 SVG piece, a veteran A1 says the A1 "is responsible for both the internal and outside connections to the truck, all the unit's audio monitors, and audio routing and patching," and must know formats including Dante, "Hydra and MADI interfacing, and integrating RF systems" (Daley, 2024c). The piece adds that "depending on the nature of the production, the A1 is also often responsible for intercoms," and quotes the A1: "Over the years, all things intercom became our domain" (Daley, 2024c).

**The submixer and the field.** In 2018 a network mixer told SVG that the submixer "sends me the game at field level, from the parabolic and goal-post microphones," the league provides the player mics, and the A1 mixes "that with the announcers and the crowd" (Daley, 2018). The same mixer put the announcers "in the center channel and about 6 dB above the rest of the mix." That is one mixer's practice in 2018, not a rule. The submixer also "directs the A2s carrying the parabs to keep them focused on the field rather than the play" (Daley, 2018); the parabs are the parabolic microphones of the first quotation.

**Who carries the parabs.** In 2022, ESPN "agreed to supply two A2s as parab operators, replacing two of the four utility personnel previously assigned to four parabs per game." Utility workers "are usually relied on for such tasks as cable management behind cameras and other semi-technical jobs" (Daley, 2022). An ESPN A1 quoted there said "the parab operator is as important to the A1 as the camera operator is to the director." Fox ran "six parabs this season: four on the sidelines, two in the end zones" (Daley, 2022), and in 2024 SVG called six manned parabs "two more than for most NFL telecasts" (Daley, 2024a).

**The crew list.** SVG's 2024 playoff preview listed each network's NFL audio crew by truck as an "A1" and a "submixer," and the Fox and ESPN crews also listed an "RF Manager" (Daley, 2024a). For the 2026 World Series, the Fox audio team listed an A1, a new "FX submixer," an "audio guarantee" on the truck staff, two A2s, a third person assisting on submixing, and a wireless vendor "responsible for wireless audio" (Daley, 2026). The A1 cited "24 mics on the outfield wall," and smaller 16-inch parabs let "the A2s handling them" stand in more places, including aisles, "without interfering with fan sightlines" (Daley, 2026). The articles use "submixer," "audio guarantee" and "RF Manager" as titles without defining them, so this course gives them as titles only.

**What A2s say about the work.** "A2 is a broad term that covers more jobs than just putting out mics," an ESPN remote operations specialist told SVG (Daley, 2023). The same report says "front-line audio workers are largely self-employed," and one A2 said networks now "want a person who can do the booth, who can do the field, who can do RF. The days of doing only one thing are gone." Traveling A2s lead "platoons of local A2s." Multi-skill A2 work "comes without standardized training," so "A2s look to manufacturers' training to learn new products and skills" (Daley, 2023).

**From A2 to A1.** SVG reports a crewing firm's view that "the traditional path to the A1 seat is still the only reliable one: from school to A2 to A1, a journey that can take several years." It also reports that "Many A2s report that they don't find the extra $200 or so a day worth the pressure that comes with mixing a show" (Daley, 2024b). That figure is as reported in trade press, not a posting and not a market rate.

**RF, named here and taught elsewhere.** Federal rules describe a low power auxiliary station as intended "to transmit over distances of approximately 100 meters for uses such as wireless microphones, cue and control communications, and synchronization of TV camera signals" (47 C.F.R. § 74.801, 2026). Those who may hold the license include "A broadcast network entity," "Television program producers," "Large venue owners or operators" and "Professional sound companies" (47 C.F.R. § 74.832, 2026); the last two are ones that "routinely uses 50 or more low power auxiliary station devices" (47 C.F.R. § 74.801, 2026). Many transmitters in one place cause intermodulation, which "occurs when multiple RF signals interact in non-linear transmitter or receiver circuits, generating unwanted frequencies," and managing it "requires careful frequency coordination" (Shure, n.d.). A 2018 trade article gives the steps: "connect the analyzer, gather RF data, pull all data into the coordination software, run the analysis, then make any necessary frequency changes to the transmitters," then run it again to double-check (Yeary, 2018). No source read for this course says who coordinates RF on a smaller show, whether the A1, an A2 or a vendor. Bands and power limits are in CREW-00 lesson "26 · RF coax, wireless mics and IFB."

**Reasoned.** Put the accounts side by side: on a network game the audio chair is a team. An A1 mixes and answers for the audio and often the comms; one or more submixers handle the field and effects; A2s set up, carry parabs, dress talent and run RF; and on big shows an RF manager or a wireless vendor joins them. The seats vary by show.

:::reveal In the 2018 account, what does the submixer send the A1? ||| "the game at field level, from the parabolic and goal-post microphones" (Daley, 2018).

:::reveal Why does this course give "audio guarantee" as a title only? ||| The trade articles use it without defining it, and no source read for this course defines it.

:::reveal What path to the A1 seat does SVG report a crewing firm calling "the only reliable one"? ||| "from school to A2 to A1, a journey that can take several years" (Daley, 2024b).

## Sources
- ${DALEY_2024C} Locator: "A Position Unlike Any Other".
- ${DALEY_2018} Locator: paragraphs 1, 4 and 9.
- ${DALEY_2022} Locator: paragraphs 4, 6 and 7.
- ${DALEY_2024A} Locator: paragraphs 1 to 4.
- ${DALEY_2026} Locator: "New Faces on the Team," "Sitting in Klover" and closing paragraph.
- ${DALEY_2023} Locator: paragraphs 1 and 5, and the A2s' accounts that follow.
- ${DALEY_2024B} Locator: paragraph on the crewing firm's field-operations manager; paragraph on the A2 pay difference.
- ${CFR_74_801} Locator: definition of low power auxiliary station; large venue owner and professional sound company.
- ${CFR_74_832} Locator: paragraph (a), eligible licensees.
- ${SHURE} Locator: summary and body text on coordination.
- ${YEARY_2018} Locator: Wireless Workbench paragraph.`,
    },
    {
      slug: "intercom-panels-and-ifb",
      title: "6 · Intercom, panels and IFB",
      section: "2 · Audio: the A1 and the A2",
      recallContent: [
        {
          prompt: "In the 2022 trade report, whom did ESPN's two A2 parab operators replace?",
          answer: "Two of the four utility personnel previously assigned to four parabs per game (Daley, 2022).",
        },
        {
          prompt: "Which titles do the trade articles use without defining them?",
          answer: "\"Submixer,\" \"audio guarantee\" and \"RF Manager\"; this course gives them as titles only (Daley, 2024a, 2026).",
        },
      ],
      body: `${QR}

**Who owns comms.** ESPN's manual puts the audio chair "in charge of Audio and all communications associated with the broadcast," checking that "Camera Headsets, Control room headset (Producer, Director, 3play, Expression ), Announcer mics and IFB system" all work (ESPN, 2018, p. 21). ESPN's A2 sets up the "PxP & Color headsets," the "IFB system" and the natural sound mics (p. 21), and ESPN's glossary gives the A2 "establishing, monitoring and troubleshooting communications between the control room, studios and remote broadcast sites" (p. 31). Lesson 5 found the same thing in trade press: intercom became the A1's domain.

**Three ways to talk.** Clear-Com, an intercom maker, names three basic forms (Clear-Com, 2020b):

| Form | Clear-Com's words |
|---|---|
| Point to point | "This is when we talk privately from one device to another" |
| Partyline | "A PL is a conference where more than one user can communicate (in a full-duplex fashion) with other users" |
| Fixed group | pressing the group button means "every 'member' device will automatically hear the talker" |

Party lines "are the most common form of intercom and have been around since the beginning of these production intercoms since the 1960's," and "The PLs are broken down into channels, or separate paths, as needed for separation of conversations" (Clear-Com, 2020b). Clear-Com's glossary says the name PL "came from the original telephone systems" (Clear-Com, 2020c, p. 80); an older university handout expands PL as "Private Line" (Vinovich, n.d.). The sources differ; this course uses the maker's "partyline."

**Party-line and matrix.** Clear-Com's Encore party-line systems "connect over standard, two-conductor shielded mic cables," and "With full-duplex communication, there is no delay or waiting for any user to release the communication line" (Clear-Com, n.d.-c). A matrix is bigger: "Advanced Matrix intercom systems provide a high capacity of point-to-point audio routes to allow the greatest number of communication paths for individuals or groups," and frames "can also be trunked together" (Clear-Com, n.d.-b). Sizes, as each maker states them:

| System | The maker's words |
|---|---|
| Clear-Com Eclipse HX | supports "Analog, Dante, MADI, AES67, SMPTE 2110, and Clear-Com's LQ Series" (Clear-Com, n.d.-a) |
| RTS ADAM | "available in sizes from 16 to 880 users" (RTS, n.d.-a) |
| RTS ODIN | can "start with 16 ports, extend up to 128 ports, or connect eight units seamlessly for a 1024-port matrix" (RTS, n.d.-a) |
| Riedel Artist | "up to 1024 ports in just 2RU" (Riedel Communications, n.d.-a) |
| Riedel Bolero, wireless | "from 1.9 GHz DECT to 2.4 GHz operation"; standalone, "Unlimited point-to-point connections and up to 32 partylines" (Riedel Communications, n.d.-b) |

RTS also says "RTS is the only two-wire protocol that allows two communication channels to be connected on a single standard microphone cable" (RTS, n.d.-b). That is the maker's claim about itself.

**Panels and beltpacks.** Riedel says its SmartPanels "unify intercom, audio monitoring, timecode and control workflows into a single, consistent operating multifunctional environment" (Riedel Communications, n.d.-c). RTS's DBP beltpack "supports both digital partyline and matrix keypanel modes" (RTS, n.d.-a). Reasoned from those pages: the NFL A2 posting's "communication panels (i.e. Riedel)" (NFL, 2026g) are keypanels of this kind on a matrix. NFL Media's studio coordinator asks for experience with "RTS or Clear-Com intercom and IFB systems" (NFL, 2026o).

**IFB: the talent's ear.** Clear-Com defines IFB as "INTERRUPTIBLE FOLD BACK or INTERRUPTIBLE FEED BACK," "an audio workflow used most often in broadcast to send production audio to the on-air talent through a one-way link, most often through an IFB box which has an earpiece for the talent." Production staff "can 'interrupt' the program audio by pressing a button to provide cues or directions to the talent. When pressing the IFB button, the program audio will dip or cut entirely so the production staff's voice can be heard clearly" (Clear-Com, 2026a). ESPN's glossary is shorter: "The earpiece talent use so that the director or producer can talk to them from the control room" (ESPN, 2018, p. 32). An IFB all-call speaks on every IFB channel at once, "a handy feature when a producer needs to provide the same cue to multiple talent on a set" (Clear-Com, 2020c, p. 20).

**Three parts of an IFB.** Clear-Com splits an IFB into a SOURCE, "the audio that the talent (or a speaker) should be listening to"; a DESTINATION, "where the IFB feed should go"; and a RETURN, "the talent's microphone," which lets a producer or director hear the mic "pre-fade, meaning without the microphone turned up on the audio mixing console" (Clear-Com, 2026a). On a Clear-Com matrix an operator can check both ends: Destination Listen hears "the same audio as the IFB destination (i.e. mix + interrupt)," and Return Listen hears "the incoming return (i.e. pre-fade talent)" (Clear-Com, 2020a, 2026b).

**Mix-minus.** For talent in the field, the IFB source "is going to be a mix-minus feed, which is the program audio MINUS the microphone of the on-air talent who is talking. (Without mix-minus, the talent in the field will hear themself but with a few seconds of delay.)" (Clear-Com, 2026a). Calrec's primer gives the reason: "It can be very difficult to speak while hearing your own voice returned to you with even a slight delay" (Calrec Audio, 2018, p. 44).

**Reasoned.** IFB is not the crew's intercom. Intercom is two-way talk among the crew, by party-line, point to point or group; IFB is a one-way program feed to talent that production can interrupt. Who hears whom on a show, and how to talk on a headset, are in section 7. The wiring is in CREW-00 lessons "17 · Same plug, different signal: intercom and DMX on XLR" and "26 · RF coax, wireless mics and IFB."

:::reveal Name Clear-Com's three basic forms of intercom. ||| Point to point, partyline and fixed groups (Clear-Com, 2020b).

:::reveal What are the three parts of an IFB, in Clear-Com's terms? ||| SOURCE (what the talent should hear), DESTINATION (where the feed goes) and RETURN (the talent's microphone, heard pre-fade) (Clear-Com, 2026a).

:::reveal Why does talent in the field get a mix-minus? ||| Without it they hear their own voice back a few seconds late, which makes speaking very difficult (Clear-Com, 2026a; Calrec Audio, 2018, p. 44).

## Sources
- ${ESPN_2018} Locator: "Audio" and "EIC/Audio Assist," p. 21; glossary, pp. 31 to 32.
- ${CC_2020B} Locator: list items 1 to 3 and the "Partyline" item.
- ${CC_2020C} Locator: glossary, "Partyline (PL)," p. 80; IFB all-call, p. 20.
- ${VINOVICH} Locator: "Director (DGA)".
- ${CC_PARTYLINE} Locator: body text.
- ${CC_MATRIX} Locator: page introduction.
- ${CC_ECLIPSE} Locator: body text.
- ${RTS_MATRIX} Locator: body text, ADAM, ODIN and the DBP beltpack.
- ${RTS_PARTYLINE} Locator: user stations paragraph.
- ${RIEDEL_ARTIST} Locator: body text.
- ${RIEDEL_BOLERO} Locator: "Three Ways to Deploy Bolero".
- ${RIEDEL_SMARTPANELS} Locator: body text.
- ${NFL_AUDIO2} Locator: "Responsibilities," item 4.
- ${NFL_STUDIO_COORD} Locator: "Required Qualifications".
- ${CC_2026A} Locator: opening; "How to Configure an IFB"; "SOURCE".
- ${CC_2020A} Locator: article text.
- ${CC_2026B} Locator: article text.
- ${CALREC_PRIMER} Locator: "Mix Minus," p. 44.`,
    },
    {
      slug: "consoles-and-audio-follow-video",
      title: "7 · Consoles, embedded audio and audio-follow-video",
      section: "2 · Audio: the A1 and the A2",
      recallContent: [
        {
          prompt: "What does Clear-Com say happens to program audio when production presses the IFB button?",
          answer: "It will \"dip or cut entirely so the production staff's voice can be heard clearly\" (Clear-Com, 2026a).",
        },
        {
          prompt: "What is a mix-minus feed, in Clear-Com's words?",
          answer: "\"the program audio MINUS the microphone of the on-air talent who is talking\" (Clear-Com, 2026a).",
        },
      ],
      body: `${QR}

**A console is a router.** Calrec, a console maker, says: "Broadcast consoles are not just audio desks, but routers," with router sizes it writes as 1024² on its Brio and 8192² on its Apollo (Calrec Audio, n.d.-c). Its consoles "provide comprehensive delay at three separate points in the signal chain; input, output and path delay." Calrec also says that "in Sports Video Group's annual Gearbase survey, Calrec have come top of the list for audio consoles in HD trucks every single year" (Calrec Audio, n.d.-c). That is the maker's claim; the survey itself was not read for this course. Lesson 3's truck 79 carries a Calrec Apollo.

**The desks in the postings.** Each row pairs a maker's own description with the posting that asks for it:

| Desk or system | The maker's words | Asked for by |
|---|---|---|
| Calrec Artemis | "A third of the touch screen is dedicated for user configurable meters, providing up to 36 x 5.1 meters simultaneously and provides loudness metering" (Calrec Audio, n.d.-a) | Fox News Media's audio operator, a news control-room job |
| Calrec Hydra2 | "connects all Calrec's medium and large proprietary consoles and I/O via a high-speed, modular backbone" (Calrec Audio, n.d.-b) | Fox News Media's A2 and audio operator, both news jobs |
| SSL System T | "Up to three control interfaces can use a single processor core" (Solid State Logic [SSL], n.d.-a) | Fox News Media's audio operator |
| SSL S500 | fader status lights "covering Dynamics, De-ess mode, Dialogue Automix and Remote AFV or Production Automation control" (SSL, n.d.-b) | NFL Media's Audio 2, "specifically S500" |

Reasoned from Calrec's page: the Fox News postings' "Calrec Hydra I/O boxes" and "Hydra BSP" (Fox News Media, 2026a, 2026b) belong to this Hydra2 networking family, since Calrec says its Apollo, Artemis and Summa "rely on Hydra2 for the routing of all audio to and from their DSP" (Calrec Audio, n.d.-b).

**Networked audio.** NFL Media's A2 posting asks for "Understanding of IP Networked audio devices, specifically AES67 with Dante knowledge or certifications a plus" (National Football League [NFL], 2026g). Audinate's Dante Certification has three levels; Level 2 covers "IP networking, QoS, VLANs, IGMP, and redundancy," and Level 3 covers deploying "Dante across subnets" and synchronizing "your network using PTP" (Audinate, n.d.). Why a media network is kept apart from the office network is in CREW-00 lesson "20 · Dante, ST 2110, and why a media network is not the office network."

**Audio inside the video.** On SDI, audio can ride inside the video signal. AJA's OG-12G-AM "is a 16-channel AES/EBU audio embedder/disembedder openGear card," with embedding selectable "on a channel pair basis" (AJA Video Systems, n.d.-a). In AJA's workflow, the card "disembeds AES audio to the AES I/O for mixing," and "The output of the mixer is then embedded into the SDI stream" (n.d.-a). AJA's Dante card supports "up to 16-channels of embedded audio support per SDI connection" (AJA Video Systems, n.d.-b). That 16 is AJA's figure for its own cards; the standard behind it was not read for this course. AES3 and MADI are in CREW-00 lesson "18 · AES3, word clock and MADI."

**Audio follows video.** When the TD cuts to a camera, should that camera's microphone open with it? Makers call the link audio-follow-video (AFV). Sony defines it: "When the [AFV] button is pressed and the AFV function is enabled, the audio linked with a video is output when the program output is switched to that video. When the program output is switched to another video, the audio automatically switches to the muted state" (Sony, n.d.). Ross Video's switcher control software includes "AFV Hold," where audio is "automatically taken on-air with the video source" but left unchanged when the source goes off air, and "AFV Off," after which audio "will not automatically be taken on-air with the video source" (Ross Video, n.d.-b). Calrec's primer shows the link from the console side: a "Signal faded up on vision mixer" leads to "Associated audio sources faded up on Calrec console" (Calrec Audio, 2018, p. 46). No source read for this course says how sports A1s use AFV on a live game, or for which sources, so this course leaves that to the reviewer.

**Automation, as a maker describes it.** Lawo calls its KICK "a unique, patent-pending, automated audio mixing technology" for "major live sports events that use a ball," which "automatically prioritizes the microphones closest to the action" (Lawo, n.d.). That is the maker's description of its own product.

**Processing in a news posting.** Fox News Media's broadcast production engineer, a news job in Washington posted October 21, 2026, does "gating, compression, equalization of talent microphone audio, and multi-band processing of outbound audio programming using Orban processors," and sets up "small Dante audio networks." Pay: $44.00 to $51.25 per hour (Fox News Media, 2026g).

:::reveal What does Calrec say a broadcast console is besides an audio desk? ||| A router: "Broadcast consoles are not just audio desks, but routers" (Calrec Audio, n.d.-c).

:::reveal In AJA's workflow, what happens to the mixer's output? ||| It "is then embedded into the SDI stream" (AJA Video Systems, n.d.-a).

:::reveal With Sony's AFV on, what happens to a source's audio when program switches away from its video? ||| It "automatically switches to the muted state" (Sony, n.d.).

## Sources
- ${CALREC_OB} Locator: body text, routers, delay and the Gearbase claim.
- ${CALREC_ARTEMIS} Locator: body text, meters and 5.1 controls.
- ${CALREC_HYDRA2} Locator: body text.
- ${SSL_SYSTEM_T} Locator: body text.
- ${SSL_S500} Locator: "Fader Tiles".
- ${FNM_A2} Locator: "What You Will Need". A news control-room job.
- ${FNM_AUDIO_OP} Locator: "What You Will Need". A news control-room job.
- ${NFL_AUDIO2} Locator: "Required Qualifications," items 2 and 4.
- ${AUDINATE} Locator: level descriptions.
- ${AJA_12GAM} Locator: "Overview" and "OG-12G-AM Workflow".
- ${AJA_DANTE} Locator: features.
- ${SONY_AFV} Locator: "Configuring AFV".
- ${ROSS_ACUITY} Locator: "Audio Mixer" events, AFV Hold and AFV Off.
- ${CALREC_PRIMER} Locator: GPIO application, p. 46, text and Figure 1.
- ${LAWO_KICK} Locator: body text.
- ${FNM_BPE} Locator: responsibilities and pay disclosure. A news job.`,
    },
    {
      slug: "levels-formats-and-loudness",
      title: "8 · Levels, formats and loudness",
      section: "2 · Audio: the A1 and the A2",
      recallContent: [
        {
          prompt: "What are AFV Hold and AFV Off in Ross Video's switcher controls?",
          answer: "AFV Hold takes audio on air with the video source but leaves it unchanged when the source goes off; AFV Off stops audio being taken on air with the video (Ross Video, n.d.-b).",
        },
        {
          prompt: "How many embedded audio channels per SDI connection does AJA's Dante card support, and whose figure is it?",
          answer: "Up to 16, as AJA states it for its own card (AJA Video Systems, n.d.-b).",
        },
      ],
      body: `${QR}

**Headroom and reference level.** Calrec's Audio Primer: "The difference between the normal operating level and the maximum is referred to as headroom," and "0dBFS is the maximum level that can be passed" (Calrec Audio, 2018, p. 13). A reference level ties digital to analog: "Two common reference levels are -18dBFS=0dBU and -20dBFS=+4dBU. These are used in the UK and the US respectively," though "several other standards are used around the world" (p. 13). Reasoned from those two lines: the reference level sits at the normal operating level, and headroom is the room above it, up to 0 dBFS.

No source read for this course gives a digital peak target for a live mix, so this course gives none. *Break Into Sports & Media Broadcasting* lesson "6 · Signal flow and audio fundamentals" gives one without a source, and a research check is open on it. Use the reference level and the loudness targets below.

**Meters.** "PPM meters have a very fast attack time and a very slow decay time," while "VU meters have a much slower attack, but a faster decay"; on program material "a PPM meter will generally display several dB's higher than a VU meter" (Calrec Audio, 2018, p. 16). Calrec adds: "Its always a good idea to be able to meter and listen to audio from further downstream than the console output to ensure your signal is being delivered as intended" (p. 16). CREW-02 lesson "17 · Meters, tone and gain" teaches the VU meter and line-up tone; this lesson does not repeat it.

**Stereo and 5.1.** NFL Media's A2 posting requires "Stereo and 5.1. surround mixing formats" (National Football League [NFL], 2026g). A 5.1 signal is "Left (L), Right (R), Center (C), Low Frequency Effects (LFE), Left Surround (Ls) and Right Surround (Rs)"; one fader moves all six, and spill faders give separate control of L/R, C, LFE and Ls/Rs (Calrec Audio, 2018, p. 38). The ATSC defines the LFE as "An optional single channel of limited bandwidth (below 120 Hz)" (Advanced Television Systems Committee [ATSC], 2026b, p. 8).

**Loudness in the United States.** The ATSC's recommended practice A/85 covers how TV loudness is measured and managed. Its current edition is A/85:2026-07, approved 8 July 2026, and it covers audio "as presented in both stereo (2.0-channel) and surround (5.1-channel) formats" (ATSC, n.d.; ATSC, 2026b, section 1). It counts "sporting events" as long-form content (ATSC, 2026b, p. 8). Its quick reference: "For delivery or exchange of Content without metadata (and where there is no prior arrangement by the parties regarding Target Loudness), the Target Loudness should be -24 LKFS," with a measurement tolerance "of up to approximately ±2 dB" and a maximum true peak of -2 dBTP (ATSC, 2026a, Table M.1). For long-form content, "It is vital that the average Dialogue Level be measured and reported as the Loudness" (ATSC, 2026a, note 31).

**Mixing live to a number.** "The intent of Loudness measurements made during a live event is to guide the mixer to produce the Content at an average predetermined or Target Loudness." Sliding-window meters that show "a prior segment (typically 3 to 10 sec)" help "when mixing in noisy locations" (ATSC, 2026b, section 5.2.3, p. 12). Surround has a trap: "During production, the Loudness of surround programming should be measured in both its surround mix format and in its stereo (2.0-channel) downmix," because build-up can make the downmix louder "by up to 3 dB." One fix is "to assign dialogue and lead-singer elements primarily or exclusively to the center channel" (ATSC, 2026b, section 5.2.7, p. 13). For streaming only, A/85 recommends "a single Target Loudness between -23 to -27 LKFS" unless the parties agree otherwise (ATSC, 2026a, note 35).

**What the law covers.** The FCC rule says "television broadcast stations must comply with the ATSC A/85 RP incorporated by reference ... insofar as it concerns the transmission of commercial advertisements" (47 C.F.R. § 73.682(e)(1), 2026). The edition it incorporates is "ATSC A/85:2013" (47 C.F.R. § 73.8000, 2026), which also gives -24 LKFS for content without metadata (ATSC, 2013, p. 18). Reasoned from the rule's own words: the law binds the commercials, and the game is mixed to the target the parties agree, which A/85 recommends.

**Loudness in Europe.** EBU R 128: "the Programme Loudness Level shall be normalised to a Target Level of -23.0 LUFS. Where attaining the Target Level is not achievable practically (for example, live programmes), a tolerance of ±1.0 LU is permitted," and "the True Peak Level of a programme shall not exceed -1 dBTP" (European Broadcasting Union [EBU], 2023, pp. 3 to 4). The units match: "'LUFS' is equivalent to 'LKFS' (which is used in ITU-R BS.1770)" (EBU, 2023, p. 3). Reasoned: a US mix and a European mix aim at different targets, -24 LKFS against -23 LUFS, measured the same way.

:::reveal What reference level does Calrec give for the US? ||| -20 dBFS = +4 dBu; the UK's is -18 dBFS = 0 dBu (Calrec Audio, 2018, p. 13).

:::reveal What target loudness does A/85 give for content without metadata and no prior arrangement? ||| -24 LKFS, with a tolerance of up to about ±2 dB and a true peak no higher than -2 dBTP (ATSC, 2026a).

:::reveal Does the FCC rule require the whole game to be mixed to -24 LKFS? ||| No. It makes A/85 (the 2013 edition) binding for the transmission of commercial advertisements (47 C.F.R. § 73.682(e)(1); § 73.8000).

## Sources
- ${CALREC_PRIMER} Locator: headroom and reference levels, p. 13; meters, p. 16; 5.1, p. 38.
- ${NFL_AUDIO2} Locator: "Required Qualifications," item 3.
- ${ATSC_PAGE} Locator: current edition and approval date.
- ${ATSC_2026B} Locator: section 1 (scope); section 3, definitions, p. 8; section 5.2.3, p. 12; section 5.2.7, p. 13.
- ${ATSC_2026A} Locator: Table M.1 and notes 31 and 35.
- ${CFR_73_682} Locator: paragraph (e)(1).
- ${CFR_73_8000} Locator: the ATSC entry.
- ${ATSC_2013} Locator: section 6, p. 18.
- ${EBU_2023} Locator: p. 3, item h and note 1; p. 4, item m.`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Audio: the A1 and the A2",
      section: "2 · Audio: the A1 and the A2",
      body: "A graded check on the A1, A2 and A3 as posted, the audio team on a network game, intercom and IFB, consoles and audio-follow-video, and levels and loudness. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What was the title of the closed ESPN posting that describes both the A1 and the A2?", options: ["Audio Operator I", "Senior Audio Mixer", "Sound Supervisor", "Audio Engineer II"], correctIndex: 0, explanation: "ESPN (n.d.): an \"Audio Operator I\" providing \"audio mixing (A1) and/or audio assist (A2) support.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "In ESPN's closed posting, what must the A1 be proficient in?", options: ["Dressing talent with mics and IFBs", "Mixing and monitoring every source", "Configuring the intercom system", "Booking satellite and fiber feeds"], correctIndex: 1, explanation: "ESPN (n.d.): the A1 must be \"proficient in mixing and monitoring all audio sources.\" Intercom and dressing talent are the A2's.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "In ESPN's closed posting, what must the A2 be experienced in?", options: ["Mixing the show for air alone", "Shading cameras for the director", "Configuring intercom and PL comms", "Rolling clips for the producer"], correctIndex: 2, explanation: "ESPN (n.d.): the A2 must be \"experienced in the configuration of in-house intercom/PL communications\" and dress talent microphones and IFBs.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "What experience did ESPN's closed audio posting ask for?", options: ["Ten years at a national network", "A degree in audio engineering", "No experience; it was entry level", "2 years at network or large market"], correctIndex: 3, explanation: "ESPN (n.d.): \"2 years practical Content Production or related experience at the large market or network level in the A1 and/or A2 role.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "What is the status of ESPN's Audio Operator I posting, as the aggregator copy shows it?", options: ["Filled and removed in March 2025", "Open and accepting applications", "Paused until the next NFL season", "Reposted with a new pay range"], correctIndex: 0, explanation: "ESPN (n.d.): \"This position has been filled,\" removed by the employer on March 4, 2025, with no pay shown.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "What did this course find on the Fox, Disney, Warner Bros. Discovery and NFL boards on October 26, 2026?", options: ["Four open A1 postings in all", "No posting titled A1 was open", "One A1 posting, at Disney only", "A1 jobs listed only as interns"], correctIndex: 1, explanation: "Lesson 4: no posting titled A1 was open on those four boards, so the A1 is described from a closed posting and trade press.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "Where are the studios of NFL Media's Seasonal Part-Time Audio 2 job?", options: ["Mount Laurel, New Jersey", "Tempe, Arizona", "Inglewood, California", "Secaucus, New Jersey"], correctIndex: 2, explanation: "NFL (2026g): the role is at the NFL Media studios in Inglewood, California.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "What does NFL Media's Audio 2 posting call the job in its opening line?", options: ["An audio assistant", "A sound utility", "A comms engineer", "An A2 Audio Mixer"], correctIndex: 3, explanation: "NFL (2026g): \"NFL Media Technical Operations is looking for an A2 Audio Mixer.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "Which cart playback systems does the NFL Audio 2 posting name?", options: ["Ovation or 360systems", "Viz Trio or XPression", "EVS or Ross Rio", "iNews or Enco"], correctIndex: 0, explanation: "NFL (2026g): \"cart playback systems such as Ovation or 360systems.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "With whom does the NFL Audio 2 work on each show's audio requirements?", options: ["The talent and their agents", "The A1, show director and teams", "The sponsor and the ad agency", "The league office only"], correctIndex: 1, explanation: "NFL (2026g): \"Work with A1, show director and production teams on the proper audio requirements for each show.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "Which audio board does the NFL Audio 2 posting prefer?", options: ["Calrec Artemis", "Yamaha RIO", "SSL S500", "Lawo KICK"], correctIndex: 2, explanation: "NFL (2026g): \"Experience mixing with SSL audio boards (specifically S500) preferred.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "Which mixing formats does the NFL Audio 2 posting require?", options: ["Mono and stereo only", "Dolby Atmos and 7.1", "Binaural and 4.0", "Stereo and 5.1"], correctIndex: 3, explanation: "NFL (2026g): \"Experience in Stereo and 5.1. surround mixing formats required.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "How does this course print the NFL Audio 2's pay as posted?", options: ["$65.47 USD, with no unit", "$65.47 an hour, as posted", "$65.47 a week, as posted", "$65,470 a year, as posted"], correctIndex: 0, explanation: "Lesson 4: the pay line reads $65.47 USD with no unit, and the course adds none.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "Why does this course add no unit to the NFL's posted pay figures?", options: ["The NFL pays only by the season", "Its text allows salary or hourly", "The figure is a union minimum", "Units are illegal in postings"], correctIndex: 1, explanation: "Lesson 4: the NFL's pay text says its ranges are \"salaries or hourly rates,\" so the unit is not stated and must not be supplied.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "What does this course say about the \"A3 functions\" in the NFL posting?", options: ["They mean running the parabs", "They mean mixing the sub-feed", "No source read defines them", "They mean wiring the IFBs"], correctIndex: 2, explanation: "Lesson 4: the posting does not say what A3 functions are, and no source read for the course defines an A3.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "What kind of job is Fox News Media's Freelance A2/Audio Assistant?", options: ["A Fox Sports truck job", "An NFL studio job", "A stadium audio job", "A news control-room job"], correctIndex: 3, explanation: "Lesson 4: it is a news control-room job in New York, posted October 19, 2026 (Fox News Media, 2026a).", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "Under whose direction does the Fox News A2 help maintain audio equipment?", options: ["The A1", "The TD", "The V1", "The AD"], correctIndex: 0, explanation: "Fox News Media (2026a): \"Assist in the maintenance of audio equipment under the direction of the A1.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "Besides audio, what else does the Fox News A2 posting say the A2 will move?", options: ["Cameras and lenses", "Furniture and set pieces", "Trucks and trailers", "Lights and stands"], correctIndex: 1, explanation: "Fox News Media (2026a): \"Move and organize furniture and set pieces in the studio prior to and following the shoot.\"", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "With whom does Fox News Media's audio operator do facility checks before production?", options: ["The TD and the V1", "The producer alone", "The A2 and stage manager", "The talent and the AD"], correctIndex: 2, explanation: "Fox News Media (2026b): \"Perform facility checks with A2 and Stage Manager for all mic and IFB positions.\" A news control-room job.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "What pay does Fox News Media's freelance audio operator posting state?", options: ["$65.47 USD, with no unit", "$36.00 to $43.75 per hour", "$40.00 to $50.00 per hour", "$28.00 to $37.50 per hour"], correctIndex: 3, explanation: "Fox News Media (2026b): $28.00 to $37.50 per hour. The A2 posting is $36.00 to $43.75 per hour.", sourceLessonSlug: "a1-a2-a3-as-posted" },
          { prompt: "What kind of sources does lesson 5 rest on?", options: ["Trade press, each one dated account", "Union contracts for audio crews", "Federal rules on audio mixing", "Makers' operator manuals"], correctIndex: 0, explanation: "Lesson 5: Sports Video Group articles reporting what individual mixers and A2s said, 2018 to 2026; each is one dated account, not a rule.", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "In a 2024 trade piece, what does a veteran A1 say the A1 is responsible for?", options: ["Shading cameras and the replay", "The truck's connections and routing", "Graphics and the score bug", "Booking the satellite feeds"], correctIndex: 1, explanation: "Daley (2024c): the A1 \"is responsible for both the internal and outside connections to the truck, all the unit's audio monitors, and audio routing and patching.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "According to the 2024 piece, what is the A1 also often responsible for?", options: ["Lighting", "Replay", "Intercoms", "Graphics"], correctIndex: 2, explanation: "Daley (2024c): \"depending on the nature of the production, the A1 is also often responsible for intercoms.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "In the 2018 account, what does the submixer send the A1?", options: ["The announcers' booth mics", "The music and sound effects", "The talent's IFB return feed", "The game at field level"], correctIndex: 3, explanation: "Daley (2018): the submixer \"sends me the game at field level, from the parabolic and goal-post microphones.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "How does this course treat the 2018 account's announcers \"about 6 dB above the rest of the mix\"?", options: ["As one mixer's 2018 practice", "As the A/85 rule for sports", "As every network's standard", "As the NFL's league policy"], correctIndex: 0, explanation: "Lesson 5: it is one mixer's practice in 2018, not a rule (Daley, 2018).", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "In the 2018 account, what does the submixer tell the A2s carrying the parabs?", options: ["Stay behind the end zone", "Focus on the field, not the play", "Follow the ball at all times", "Point at the crowd on scores"], correctIndex: 1, explanation: "Daley (2018): the submixer \"directs the A2s carrying the parabs to keep them focused on the field rather than the play.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "In 2022, whom did ESPN's two A2 parab operators replace?", options: ["Two camera operators", "Two RF coordinators", "Two utility personnel", "Two submixers"], correctIndex: 2, explanation: "Daley (2022): ESPN \"agreed to supply two A2s as parab operators, replacing two of the four utility personnel.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "An ESPN A1 said the parab operator is as important to the A1 as whom is to the director?", options: ["The stage manager", "The technical director", "The associate director", "The camera operator"], correctIndex: 3, explanation: "Daley (2022): \"the parab operator is as important to the A1 as the camera operator is to the director.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "How many parabs did Fox run in the 2022 season, per the trade report?", options: ["Six", "Two", "Four", "Ten"], correctIndex: 0, explanation: "Daley (2022): \"six parabs this season: four on the sidelines, two in the end zones.\" In 2024 SVG called six \"two more than for most NFL telecasts.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "Which title did SVG's 2024 preview list on the Fox and ESPN NFL audio crews besides A1 and submixer?", options: ["Audio Guarantee", "RF Manager", "Sound Designer", "Comms Chief"], correctIndex: 1, explanation: "Daley (2024a): the Fox and ESPN crews also listed an \"RF Manager.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "For the 2026 World Series, what was the wireless vendor responsible for?", options: ["Wireless video", "The intercom", "Wireless audio", "The parabs"], correctIndex: 2, explanation: "Daley (2026): a wireless vendor \"responsible for wireless audio.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "Why does this course give \"audio guarantee\" and \"submixer\" as titles only?", options: ["They are union secrets", "They are maker trademarks", "They were dropped in 2026", "No source read defines them"], correctIndex: 3, explanation: "Lesson 5: the articles use them as titles without defining them, so the course gives them as titles only.", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "How does the 2023 report describe front-line audio workers in U.S. broadcasting?", options: ["Largely self-employed", "Mostly network staff", "Mostly league staff", "Largely unpaid interns"], correctIndex: 0, explanation: "Daley (2023): \"front-line audio workers are largely self-employed.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "One A2 told SVG networks now want a person who can do which three things?", options: ["Mix, shade and switch", "The booth, the field and RF", "Replay, graphics and audio", "Rig, light and run cable"], correctIndex: 1, explanation: "Daley (2023): networks \"want a person who can do the booth, who can do the field, who can do RF.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "Where does the 2023 report say A2s look to learn new products and skills?", options: ["University audio degrees", "League training camps", "Manufacturers' training", "Union apprenticeships"], correctIndex: 2, explanation: "Daley (2023): multi-skill work \"comes without standardized training,\" so \"A2s look to manufacturers' training.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "What path to the A1 seat does a crewing firm call \"the only reliable one\"?", options: ["From utility straight to A1", "From A3 to A1 in one season", "From camera to the A1 chair", "From school to A2 to A1"], correctIndex: 3, explanation: "Daley (2024b): \"from school to A2 to A1, a journey that can take several years.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "How does this course treat the \"extra $200 or so a day\" for mixing a show?", options: ["As reported in trade press", "As a posted network rate", "As a union scale minimum", "As an hourly market rate"], correctIndex: 0, explanation: "Lesson 5: the figure is as reported in trade press (Daley, 2024b), not a posting and not a market rate.", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "Over roughly what distance does the federal definition say a low power auxiliary station transmits?", options: ["About 10 kilometers", "About 100 meters", "About 1 mile", "About 10 meters"], correctIndex: 1, explanation: "47 C.F.R. § 74.801: \"approximately 100 meters for uses such as wireless microphones, cue and control communications.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "In the federal rule, how many devices does a large venue owner or professional sound company routinely use?", options: ["5 or more", "10 or more", "50 or more", "500 or more"], correctIndex: 2, explanation: "47 C.F.R. § 74.801: one that \"routinely uses 50 or more low power auxiliary station devices.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "What does Shure say managing intermodulation requires?", options: ["Fewer microphones on air", "Higher transmitter power", "Longer antenna cables", "Frequency coordination"], correctIndex: 3, explanation: "Shure (n.d.): managing intermodulation \"requires careful frequency coordination.\"", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "What is the first step in the 2018 trade article's RF coordination process?", options: ["Connect the analyzer", "Change the transmitters", "Run the analysis", "Call the FCC office"], correctIndex: 0, explanation: "Yeary (2018): \"connect the analyzer, gather RF data, pull all data into the coordination software, run the analysis,\" then change frequencies and run it again.", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "Reasoned in lesson 5, what is the audio chair on a network game?", options: ["One A1 working alone", "A team that varies by show", "Always exactly two A2s", "A job run by the league"], correctIndex: 1, explanation: "Lesson 5: an A1, submixers, A2s and on big shows an RF manager or wireless vendor; the seats vary by show.", sourceLessonSlug: "the-audio-team-on-a-game" },
          { prompt: "What does ESPN's manual put the audio chair in charge of?", options: ["Audio and the replay servers", "Audio and the camera shading", "Audio and all communications", "Audio and the graphics feed"], correctIndex: 2, explanation: "ESPN (2018, p. 21): the audio chair \"is in charge of Audio and all communications associated with the broadcast.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Which of these does ESPN's A2 set up, per the manual?", options: ["The switcher's two keyers", "The camera control units", "The replay server playlists", "The PxP and color headsets"], correctIndex: 3, explanation: "ESPN (2018, p. 21): the A2 sets up the \"PxP & Color headsets,\" the \"IFB system\" and natural sound mics.", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Which three basic forms of intercom does Clear-Com name?", options: ["Point to point, partyline, groups", "Wired, wireless and cellular", "Analog, digital and IP-based", "Program, preview and return"], correctIndex: 0, explanation: "Clear-Com (2020b): point to point, partyline and fixed groups.", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "In Clear-Com's words, what is point to point?", options: ["Everyone hears every talker", "Talking privately device to device", "Program audio sent to talent", "A group that hears one talker"], correctIndex: 1, explanation: "Clear-Com (2020b): \"This is when we talk privately from one device to another.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Which form of intercom does Clear-Com call the most common?", options: ["Fixed groups", "Point to point", "Party lines", "Wireless IFB"], correctIndex: 2, explanation: "Clear-Com (2020b): party lines \"are the most common form of intercom.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "How does Clear-Com say party lines keep conversations separate?", options: ["By time slots", "By volume", "By color codes", "By channels"], correctIndex: 3, explanation: "Clear-Com (2020b): \"The PLs are broken down into channels, or separate paths, as needed for separation of conversations.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Where does Clear-Com's glossary say the name PL came from?", options: ["Original telephone systems", "Early radio dispatch", "Military field phones", "Theater stage bells"], correctIndex: 0, explanation: "Clear-Com (2020c, p. 80): the name \"came from the original telephone systems.\" An older handout expands PL as \"Private Line.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Over what does Clear-Com say its Encore party-line systems connect?", options: ["Single-mode fiber cable", "Two-conductor mic cable", "Cat 6 network cable", "Triax camera cable"], correctIndex: 1, explanation: "Clear-Com (n.d.-c): \"standard, two-conductor shielded mic cables.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "What does Clear-Com say a matrix intercom provides?", options: ["A single shared talk channel", "A one-way feed to the talent", "Many point-to-point routes", "A backup for the program"], correctIndex: 2, explanation: "Clear-Com (n.d.-b): \"a high capacity of point-to-point audio routes to allow the greatest number of communication paths.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "In what sizes does RTS say its ADAM matrix is available?", options: ["2 to 32 users", "100 to 200 users", "1,024 users only", "16 to 880 users"], correctIndex: 3, explanation: "RTS (n.d.-a): \"available in sizes from 16 to 880 users.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "How many ports does Riedel say its Artist offers in 2RU?", options: ["Up to 1024", "Up to 128", "Up to 32", "Up to 880"], correctIndex: 0, explanation: "Riedel Communications (n.d.-a): \"up to 1024 ports in just 2RU.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "How does this course treat RTS's \"only two-wire protocol\" statement?", options: ["As an FCC finding", "As the maker's claim", "As a SMPTE standard", "As a test result"], correctIndex: 1, explanation: "Lesson 6: it is the maker's claim about itself (RTS, n.d.-b).", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Which two modes does RTS say its DBP beltpack supports?", options: ["Wired and Wi-Fi only", "IFB and program feed", "Partyline and keypanel", "Analog and DECT radio"], correctIndex: 2, explanation: "RTS (n.d.-a): the DBP \"supports both digital partyline and matrix keypanel modes.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "What does IFB stand for, in Clear-Com's definition?", options: ["Internal feed bus", "Isolated fixed beltpack", "Integrated fiber backbone", "Interruptible fold back"], correctIndex: 3, explanation: "Clear-Com (2026a): \"INTERRUPTIBLE FOLD BACK or INTERRUPTIBLE FEED BACK.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "What kind of link does Clear-Com say IFB uses to reach the talent?", options: ["A one-way link", "A two-way link", "A party-line link", "A matrix trunk"], correctIndex: 0, explanation: "Clear-Com (2026a): production audio goes to the talent \"through a one-way link.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "What happens to program audio when production presses the IFB button?", options: ["It doubles in level", "It dips or cuts out", "It goes to stereo", "It moves to the A1"], correctIndex: 1, explanation: "Clear-Com (2026a): \"the program audio will dip or cut entirely so the production staff's voice can be heard clearly.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "When does Clear-Com say an IFB all-call is handy?", options: ["Muting every microphone", "Talking to every camera", "One cue to many talent", "Rolling every break"], correctIndex: 2, explanation: "Clear-Com (2020c, p. 20): \"when a producer needs to provide the same cue to multiple talent on a set.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "In Clear-Com's terms, what is an IFB's RETURN?", options: ["The talent's earpiece", "The program mix out", "The crew party line", "The talent's microphone"], correctIndex: 3, explanation: "Clear-Com (2026a): the RETURN is \"the talent's microphone,\" heard pre-fade.", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "What does \"pre-fade\" mean for the IFB return, per Clear-Com?", options: ["Mic heard without fading up", "Mic heard after compression", "Mic heard on the air only", "Mic heard a frame early"], correctIndex: 0, explanation: "Clear-Com (2026a): \"pre-fade, meaning without the microphone turned up on the audio mixing console.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "On a Clear-Com matrix, what does Destination Listen let an operator hear?", options: ["The talent's mic, pre-fade", "The mix plus the interrupt", "The camera isolate channel", "The director's party line"], correctIndex: 1, explanation: "Clear-Com (2020a, 2026b): Destination Listen hears \"the same audio as the IFB destination (i.e. mix + interrupt).\" Return Listen hears the pre-fade talent.", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "What is a mix-minus feed, per Clear-Com?", options: ["The mix minus the music bed", "The mix minus all the effects", "The mix minus the talent's mic", "The mix minus the crowd noise"], correctIndex: 2, explanation: "Clear-Com (2026a): \"the program audio MINUS the microphone of the on-air talent who is talking.\"", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Without mix-minus, what does talent in the field hear?", options: ["Nothing at all", "Only the crowd", "Only the director", "Their voice, delayed"], correctIndex: 3, explanation: "Clear-Com (2026a): they \"will hear themself but with a few seconds of delay.\" Calrec (2018, p. 44) says that makes speaking very difficult.", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Reasoned in lesson 6, how does IFB differ from the crew's intercom?", options: ["IFB is a one-way feed to talent", "IFB is louder than intercom", "IFB is only used in news", "IFB replaces the party line"], correctIndex: 0, explanation: "Lesson 6: intercom is two-way talk among the crew; IFB is a one-way program feed to talent that production can interrupt.", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "Which intercom systems does NFL Media's studio coordinator posting ask experience with?", options: ["Riedel or Bolero", "RTS or Clear-Com", "Shure or Sennheiser", "Calrec or SSL"], correctIndex: 1, explanation: "NFL (2026o): \"RTS or Clear-Com intercom and IFB systems.\" Riedel panels are in the Audio 2 posting.", sourceLessonSlug: "intercom-panels-and-ifb" },
          { prompt: "What does Calrec say broadcast consoles are, besides audio desks?", options: ["Recorders", "Monitors", "Routers", "Servers"], correctIndex: 2, explanation: "Calrec Audio (n.d.-c): \"Broadcast consoles are not just audio desks, but routers.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "At how many points in the signal chain does Calrec say its consoles provide delay?", options: ["One", "Two", "Five", "Three"], correctIndex: 3, explanation: "Calrec Audio (n.d.-c): \"comprehensive delay at three separate points in the signal chain; input, output and path delay.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "How does this course treat Calrec's statement about the Gearbase survey?", options: ["As the maker's own claim", "As a survey it has read", "As a federal statistic", "As an SVG finding"], correctIndex: 0, explanation: "Lesson 7: it is the maker's claim, and the survey itself was not read for the course.", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "How many 5.1 meters can the Calrec Artemis touch screen show at once?", options: ["Up to 6", "Up to 36", "Up to 128", "Up to 1024"], correctIndex: 1, explanation: "Calrec Audio (n.d.-a): \"up to 36 x 5.1 meters simultaneously,\" with loudness metering.", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "What does Calrec say Hydra2 connects?", options: ["Cameras to the video switcher", "Talent to the IFB transmitters", "Consoles and I/O on a backbone", "Replay servers to the playout"], correctIndex: 2, explanation: "Calrec Audio (n.d.-b): Hydra2 \"connects all Calrec's medium and large proprietary consoles and I/O via a high-speed, modular backbone.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "Reasoned in lesson 7, what are the Fox News postings' \"Hydra I/O boxes\" and \"Hydra BSP\"?", options: ["Sony camera control parts", "Clear-Com intercom cards", "EVS replay server parts", "Calrec's Hydra2 family"], correctIndex: 3, explanation: "Lesson 7: Calrec says its Apollo, Artemis and Summa rely on Hydra2 for routing, so those posting terms belong to that networking family.", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "How many control interfaces does SSL say can use one System T processor core?", options: ["Up to three", "Exactly one", "Up to twelve", "Up to 99"], correctIndex: 0, explanation: "SSL (n.d.-a): \"Up to three control interfaces can use a single processor core.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "Which posting asks for the SSL S500 specifically?", options: ["Fox News Media's A2", "NFL Media's Audio 2", "FOX 5 DC's technician", "ESPN's Audio Operator I"], correctIndex: 1, explanation: "NFL (2026g): \"SSL audio boards (specifically S500) preferred.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "What does Audinate say its Dante Certification Level 3 covers?", options: ["Plugging in a Dante device", "Mixing in 5.1 surround", "Subnets and PTP timing", "Wireless mic coordination"], correctIndex: 2, explanation: "Audinate (n.d.): Level 3 covers deploying \"Dante across subnets\" and synchronizing \"your network using PTP.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "What is AJA's OG-12G-AM card, in AJA's words?", options: ["A 4K camera control unit", "A 12-port intercom panel", "A 5.1 loudness meter card", "A 16-channel AES embedder"], correctIndex: 3, explanation: "AJA Video Systems (n.d.-a): \"a 16-channel AES/EBU audio embedder/disembedder openGear card.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "In AJA's workflow, what happens to the mixer's output?", options: ["It is embedded into SDI", "It is sent out on Wi-Fi", "It is printed to a log", "It is muted on the cut"], correctIndex: 0, explanation: "AJA Video Systems (n.d.-a): \"The output of the mixer is then embedded into the SDI stream.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "How does this course treat \"16 channels of embedded audio per SDI connection\"?", options: ["As SMPTE's stated rule", "As AJA's own card figure", "As the FCC's channel cap", "As Calrec's console limit"], correctIndex: 1, explanation: "Lesson 7: the 16 is AJA's figure for its own cards; the standard behind it was not read for the course.", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "With Sony's AFV on, what happens to a source's audio when program switches to its video?", options: ["It is muted", "It is delayed", "It is output", "It is recorded"], correctIndex: 2, explanation: "Sony (n.d.): \"the audio linked with a video is output when the program output is switched to that video.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "With Ross Video's \"AFV Off,\" what happens to a source's audio?", options: ["It is muted for the whole show", "It follows the preview bus instead", "It doubles in level when on air", "It is not taken on air with video"], correctIndex: 3, explanation: "Ross Video (n.d.-b): audio \"will not automatically be taken on-air with the video source.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "In Calrec's GPIO example, what happens when a signal is faded up on the vision mixer?", options: ["Its audio fades up on the console", "Its camera tally light goes out", "Its replay clip starts to roll", "Its graphic keys over the picture"], correctIndex: 0, explanation: "Calrec Audio (2018, p. 46): \"Associated audio sources faded up on Calrec console.\"", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "What does this course say about how sports A1s use AFV on a live game?", options: ["They always leave it on", "No source read says how", "They never use it at all", "Only for crowd mics"], correctIndex: 1, explanation: "Lesson 7: no source read for the course says how sports A1s use AFV, or for which sources, so it is left to the reviewer.", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "What does Lawo say its KICK automatically prioritizes?", options: ["The announcers' mics", "The crowd microphones", "Mics nearest the action", "The talent's IFB feed"], correctIndex: 2, explanation: "Lawo (n.d.): it \"automatically prioritizes the microphones closest to the action.\" That is the maker's description.", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "What does Fox News Media's broadcast production engineer use Orban processors for?", options: ["Encoding the video feed", "Running the party line", "Embedding audio in SDI", "Processing outbound audio"], correctIndex: 3, explanation: "Fox News Media (2026g): \"multi-band processing of outbound audio programming using Orban processors.\" A news job.", sourceLessonSlug: "consoles-and-audio-follow-video" },
          { prompt: "What does Calrec's primer call the difference between normal operating level and the maximum?", options: ["Headroom", "Noise floor", "Dynamic gain", "Line-up"], correctIndex: 0, explanation: "Calrec Audio (2018, p. 13): \"The difference between the normal operating level and the maximum is referred to as headroom.\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "What does Calrec say 0 dBFS is?", options: ["The US reference level", "The maximum level passed", "The loudness target", "The noise floor"], correctIndex: 1, explanation: "Calrec Audio (2018, p. 13): \"0dBFS is the maximum level that can be passed.\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "Which reference level does Calrec give for the US?", options: ["-18 dBFS = 0 dBu", "-24 dBFS = +4 dBu", "-20 dBFS = +4 dBu", "-23 dBFS = 0 dBu"], correctIndex: 2, explanation: "Calrec Audio (2018, p. 13): \"-20dBFS=+4dBU\" in the US and \"-18dBFS=0dBU\" in the UK.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "What digital peak target does this course give for a live mix?", options: ["-6 to -3 dBFS", "-12 dBFS", "-1 dBFS", "None at all"], correctIndex: 3, explanation: "Lesson 8: no source read for the course gives a digital peak target for a live mix, so it gives none; it uses reference level and loudness targets.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "How does Calrec describe a PPM meter's ballistics?", options: ["Fast attack, slow decay", "Slow attack, fast decay", "Slow attack, slow decay", "Fast attack, fast decay"], correctIndex: 0, explanation: "Calrec Audio (2018, p. 16): \"PPM meters have a very fast attack time and a very slow decay time.\" VU meters are the reverse.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "Where does Calrec say it is always a good idea to meter and listen?", options: ["Only at the microphone", "Downstream of the console", "Inside the talent's IFB", "On the director's panel"], correctIndex: 1, explanation: "Calrec Audio (2018, p. 16): \"from further downstream than the console output.\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "Which six channels make up a 5.1 signal, per Calrec?", options: ["L, R, C, two height, LFE", "Two stereo pairs and two mono", "L, R, C, LFE, Ls and Rs", "Front, back, two sides, LFE"], correctIndex: 2, explanation: "Calrec Audio (2018, p. 38): Left, Right, Center, Low Frequency Effects, Left Surround and Right Surround.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "How does the ATSC define the LFE channel's bandwidth?", options: ["Above 12 kHz", "Below 20 Hz", "Full range", "Below 120 Hz"], correctIndex: 3, explanation: "ATSC (2026b, p. 8): \"An optional single channel of limited bandwidth (below 120 Hz).\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "Which edition of A/85 is current, per the ATSC?", options: ["A/85:2026-07", "A/85:2013", "A/85:2009", "A/85:2020-01"], correctIndex: 0, explanation: "ATSC (n.d.; 2026b): A/85:2026-07, approved 8 July 2026. The FCC rule incorporates the 2013 edition.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "What target loudness does A/85 give for content without metadata and no prior arrangement?", options: ["-23 LUFS", "-24 LKFS", "-18 LKFS", "-27 LKFS"], correctIndex: 1, explanation: "ATSC (2026a, Table M.1): \"the Target Loudness should be -24 LKFS.\" -23 LUFS is the EBU target.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "What maximum true peak does A/85's quick reference give?", options: ["0 dBTP", "-6 dBTP", "-2 dBTP", "-10 dBTP"], correctIndex: 2, explanation: "ATSC (2026a, Table M.1): a maximum true peak of -2 dBTP. EBU R 128's is -1 dBTP.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "For long-form content, what does A/85 say must be measured and reported as the loudness?", options: ["The loudest peak", "The music level", "The crowd level", "The dialogue level"], correctIndex: 3, explanation: "ATSC (2026a, note 31): \"It is vital that the average Dialogue Level be measured and reported as the Loudness.\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "Where does A/85 say short sliding-window loudness meters help?", options: ["Mixing in noisy places", "Mixing for radio only", "Mixing music videos", "Mixing in silence"], correctIndex: 0, explanation: "ATSC (2026b, p. 12): meters showing \"a prior segment (typically 3 to 10 sec)\" help \"when mixing in noisy locations.\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "In which formats does A/85 say surround programming should be measured during production?", options: ["Mono, for compatibility", "5.1 and the stereo downmix", "5.1, the surround mix alone", "Stereo and the mono sum"], correctIndex: 1, explanation: "ATSC (2026b, p. 13): \"in both its surround mix format and in its stereo (2.0-channel) downmix.\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "What fix does A/85 give for a downmix that builds up louder?", options: ["Raise the LFE channel", "Cut the surround channels", "Dialogue to the center", "Add a peak limiter"], correctIndex: 2, explanation: "ATSC (2026b, p. 13): \"assign dialogue and lead-singer elements primarily or exclusively to the center channel.\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "What does the FCC rule make A/85 binding for?", options: ["Every live sports mix", "Streaming services", "Radio broadcasts", "Commercial advertisements"], correctIndex: 3, explanation: "47 C.F.R. § 73.682(e)(1): stations must comply with A/85 \"insofar as it concerns the transmission of commercial advertisements.\"", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "Which edition of A/85 does the FCC rule incorporate?", options: ["A/85:2013", "A/85:2026-07", "A/85:2009", "A/85:2020-01"], correctIndex: 0, explanation: "47 C.F.R. § 73.8000: \"ATSC A/85:2013,\" not the 2026 edition.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "What target level does EBU R 128 set?", options: ["-24.0 LKFS", "-23.0 LUFS", "-18.0 LUFS", "-27.0 LKFS"], correctIndex: 1, explanation: "EBU (2023, p. 3): \"a Target Level of -23.0 LUFS.\" The US A/85 target is -24 LKFS.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "What tolerance does EBU R 128 permit where the target is not practical, as in live programs?", options: ["±3.0 LU", "±0.5 LU", "±1.0 LU", "±2.0 LU"], correctIndex: 2, explanation: "EBU (2023, p. 3): \"a tolerance of ±1.0 LU is permitted.\" A/85's measurement tolerance is about ±2 dB.", sourceLessonSlug: "levels-formats-and-loudness" },
          { prompt: "Reasoned in lesson 8, how do US and European loudness targets differ?", options: ["Same target, measured differently", "Same target, measured the same", "No target in either place", "Different targets, measured alike"], correctIndex: 3, explanation: "Lesson 8: -24 LKFS against -23 LUFS, and \"'LUFS' is equivalent to 'LKFS'\" (EBU, 2023, p. 3).", sourceLessonSlug: "levels-formats-and-loudness" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: Video, the V1 and the V2
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-v1-as-posted",
      title: "9 · The V1, as posted",
      section: "3 · Video: the V1 and the V2",
      recallContent: [
        {
          prompt: "What target loudness does ATSC A/85 give for content without metadata and no prior arrangement?",
          answer: "-24 LKFS, with a measurement tolerance of up to about ±2 dB and a maximum true peak of -2 dBTP (Advanced Television Systems Committee [ATSC], 2026a).",
        },
        {
          prompt: "What does the FCC rule make A/85 binding for, and which edition?",
          answer: "The transmission of commercial advertisements, under A/85:2013 (47 C.F.R. § 73.682(e)(1); § 73.8000).",
        },
      ],
      body: `${QR}

**The video chair.** Shading itself, what an operator does with a remote control panel (RCP) to match each camera's exposure and color, is taught in CREW-04 lesson "23 · Shading and matching color." The camera control unit (CCU) is defined in CREW-00 lesson "8 · The camera control unit and triax." This lesson reads what employers ask of the chair that does it, the V1.

**NFL Media's V1.** NFL Media's "Seasonal Part-Time V1/Shading Operator" seeks an operator "to lead in-studio and remote camera shading for live and pre-recorded news and sports productions across all platforms" (National Football League [NFL], 2026n). The role is "responsible for ensuring consistent, high-quality visual output across all camera feeds by managing real-time shading, color correction, and signal integrity," and partners "with Technical Directors, Engineering, and production teams to deliver a seamless, broadcast-ready product." Its duties include:

| Duty | As posted |
|---|---|
| Shade live | "Perform real-time shading of multiple camera sources during live and recorded productions, ensuring consistent color, exposure, and visual quality" |
| Run the camera chains | "Configure and manage camera shading systems, including Sony broadcast camera chains, CCUs, and RCPs" |
| Four controls | "Adjust iris, gamma, black levels, and color balance across multiple camera feeds to maintain a cohesive on-air look" |
| Incoming feeds | "Color correct inbound video feeds using Selenio Network Processor Manager" |
| Routing | "Manage video signal routing for shading and production workflows using Imagine Magellan Control systems" |
| Scopes | "Monitor and troubleshoot video signals using waveform monitors, vectorscopes, and diagnostic tools to maintain broadcast standards" |
| Changing light | "Adjust shading dynamically based on changing lighting conditions, production requirements, or environmental factors" |
| Setup | "Support setup, calibration, and testing of cameras, shading systems, and video infrastructure for studio and remote productions" |

It also supports "robotic camera systems (Panasonic, Telemetrics), Ultimatte systems, and OLED display integrations." It requires 5 to 10 or more "years of experience in camera shading or broadcast video operations in studio and/or remote production environments"; "Extensive experience with Sony broadcast camera systems, including studio and ENG configurations"; "Strong understanding of broadcast video formats, including 1080p, 1080i, and 720p"; "Working knowledge of SMPTE 2110 or IP-based video workflows"; and experience "shading, color correcting, and routing video using frame synchronizers and production systems (e.g., Imagine, Cobalt)." It prefers "Knowledge of HDR and emerging broadcast technologies." The first attribute it names is "Exceptional attention to detail with a strong eye for color accuracy and visual consistency" (NFL, 2026n). The terms are up to 29 hours a week, "Seasonal employment up to 7 months," lifting "up to 25 lbs." The pay line, first published June 26, 2026, reads $77.91 USD at both ends, with no unit; like every NFL figure in this course, it is printed as posted.

**A news control-room video operator.** Fox News Media's "Freelance Senior Video Operator" is a news control-room job in New York, posted August 25, 2026, "reporting to the Technical Production Manager" (Fox News Media, 2026d). The operator will "ensure video levels and lighting are the best possible quality on air," will "Chip, color correct, and monitor video levels on all studio cameras, video monitors, and remote cameras," and will "Collaborate with directors, lighting, and make-up to troubleshoot and make adjustments to ensure the best possible on-air look for our talent and set." Other duties: "Frame and monitor all remote Fox wire cameras as needed," and "Patch cameras to different in-house areas as needed and build, change, and update scene files to show as needed." It asks for Ikegami and Sony HD cameras with their color correction units and for robotic camera operations, with "Lawo Color correctors" a plus. Pay: $40.00 to $50.00 per hour. The posting uses "chip" without defining it, and no source read for this course defines it, so this course quotes the word and leaves its meaning to the reviewer.

**A sports V1, closed.** NBC Sports posted a per-event "Video Operator (V1)" in Stamford, Connecticut; the copy read for this course shows it was removed by the employer on January 5, 2026 (NBC Sports, 2025). The V1 works "under the direction of the Producer, Director, Technical Manager and/or other production or management representatives to provide images for the telecast." Duties include "Provide all CCU information to all departments involved with the telecast," "Maintain images to broadcast standards," and "Work closely with Studio Director, Building Engineer to set camera look and shading for all cameras, both robotic and manned in coordination with the game script." It asks for experience "using camera control units, color correction devices, waveform monitors, vector scopes, camera chipping and patch bays," and for familiarity with a Cobalt color corrector system and a Cerebrum routing system.

**Reasoned: the same kit.** The NFL, Fox News and NBC postings name the same core tools: camera control units or RCPs, color correctors, and waveform and vector scopes. Two of them use the title V1, "V1/Shading Operator" at the NFL and "Video Operator (V1)" at NBC, with shading as the core duty.

**Who the V1 works beside.** NFL Media's lighting director will "Monitor show productions from shading room and consult with video operator as necessary" (NFL, 2026i), and the Fox News operator works with "directors, lighting, and make-up." Reasoned from both: the shader's picture depends on the light on the set, so the two chairs talk.

:::reveal Which four controls does NFL Media's V1 posting name? ||| Iris, gamma, black levels and color balance, adjusted "across multiple camera feeds to maintain a cohesive on-air look" (NFL, 2026n).

:::reveal What kind of job is Fox News Media's senior video operator, and what pay does it state? ||| A news control-room job in New York, at $40.00 to $50.00 per hour (Fox News Media, 2026d).

:::reveal Which tools do the NFL, Fox News and NBC postings share? ||| Camera control units or RCPs, color correctors, and waveform and vector scopes.

## Sources
- ${NFL_V1} Locator: opening and second paragraphs; "Responsibilities"; "Required Qualifications"; "Preferred Experience"; "Other Key Attributes / Characteristics," item 1; "Terms / Expected Hours of Work"; "Physical Demands"; "Salary / Pay Range".
- ${FNM_SENIOR_VIDEO} Locator: "Job Description," "A Snapshot of Your Responsibilities," items 1 to 4, "What You Will Need," pay paragraph. A news control-room job.
- ${NBC_V1} Locator: opening paragraphs, duty list, qualifications, page header and footer.
- ${NFL_LD} Locator: "Responsibilities".`,
    },
    {
      slug: "scopes-and-matching-cameras",
      title: "10 · Scopes and matching cameras",
      section: "3 · Video: the V1 and the V2",
      recallContent: [
        {
          prompt: "What does NFL Media's V1 posting say the role is responsible for?",
          answer: "\"ensuring consistent, high-quality visual output across all camera feeds by managing real-time shading, color correction, and signal integrity\" (NFL, 2026n).",
        },
        {
          prompt: "Why does this course quote \"chip\" from the Fox News posting without explaining it?",
          answer: "The posting does not define it, and no source read for the course does, so its meaning is left to the reviewer.",
        },
      ],
      body: `${QR}

**Why scopes.** Every V1 posting in lesson 9 asks for waveform monitors and vectorscopes. A scope maker's guide explains why: "A waveform monitor on set allows you to detect errors that are not visible on a traditional monitor," because monitors "can look different due to the amount of light reflection on the screen or how the monitor is calibrated" (Leader Electronics Corporation, 2026, p. 8). And: "The classic waveform display is still used on set to ensure that, before production commences, all of the cameras are correctly set up and match each other" (p. 8).

**A note on this guide.** By its own introduction, Leader's guide is written for cinema and high-end television sets and the digital imaging technician who manages the picture there, not for a sports truck. Its basics apply to any camera match; its procedures are not a V1's procedure, so this lesson uses only the basics. It contrasts those sets with "studio-based production where a vision engineer has access to all the cameras, and producers and directors can view camera images live" (Leader Electronics Corporation, 2026).

**The two scopes.**

| Scope | What it shows, in Leader's words |
|---|---|
| Waveform monitor | errors "not visible on a traditional monitor"; used to make sure "all of the cameras are correctly set up and match each other" |
| Vectorscope | "supplements a waveform display to visualize chrominance"; its graticule "roughly represents saturation as distance from the center of the circle and hue as the angle," with "boxes around the circle for the colors in the main bars" |

**Matching cameras.** Multiple cameras "should also match," which "is achieved by checking the RGB balance using a waveform and grey-scale chart" (Leader Electronics Corporation, 2026, pp. 8 to 9). Three settings do most of the work:

- **White balance.** "The ratio between Red, Green and Blue channels of the camera video output must be 1:1:1" (p. 10).
- **Black balance.** The camera must reproduce "a true black when the lens is closed, otherwise a colorcast (a tint of a particular color) may be seen," which "requires accurate matching of the Red, Green and Blue black levels" (p. 13).
- **Gamma.** "most cameras have a default Gamma of 0.45" (Leader Electronics Corporation, 2026).

Highlights have two more circuits. Knee correction "compresses the wide dynamic video signals acquired by the imager (CCDs) into the limited video-level range specified by the television standards," and the white clip circuit "clips off or electrically limits the video level of highlights" (Leader Electronics Corporation, 2026).

**From the posting to the scope.** Reasoned from lesson 9 and the guide: the NFL V1's four controls (iris, gamma, black levels and color balance) move the same quantities the scopes show. Brightness shows on the waveform, black and white balance in the red, green and blue levels, and hue and saturation on the vectorscope. Turner Sports' V2 posting pairs the same words: the V2 helps the V1 with the look "in terms of color/tone, iris/brightness, and camera matching" (Turner Sports, 2023). Lesson 11 reads that posting.

**A scope, as its maker describes it.** Leader's LV5600W "features a 7-inch touch screen display in a compact 3RU enclosure" and offers "waveform, vector, picture, audio, and eye pattern displays," with vectorscope marks for "Color Bar Saturation 75 %, 100 %." Its "Serial communication RS-422/485 terminals enable to display camera ID, and tally" (LeaderPhabrix, n.d.).

**A shading panel, as its maker describes it.** Grass Valley calls Creative Grading "a cutting-edge camera shading control panel and tablet application" for its cameras (Grass Valley, n.d.-b); the praise is the maker's. The page says it "minimizes the need for endless menus and layers of settings" by "grouping parameters into logical bundles," helps engineers "quickly adapt to changing light conditions or visual styles," allows "camera shading from any location via IP or cloud," and lets users "capture, compare, and apply different "looks" across multiple cameras instantly." Its "CGP 500 panel features six customizable rotaries, joystick controls, and push-buttons," and the system "can manage up to 99 cameras on a single IP network" (Grass Valley, n.d.-b).

Sony's own product pages could not be read for this course, so this lesson describes no Sony panel, though the NFL posting names Sony camera chains. CREW-00 lesson 8 defines the CCU and RCP from a Sony manual.

**Where this sits.** CREW-04 lesson "23 · Shading and matching color" covers shading cinema-style bodies from an RCP and agreeing the look with the shader. This lesson adds the scope basics under it.

:::reveal What red, green and blue ratio does Leader give for a correct white? ||| 1:1:1 (Leader Electronics Corporation, 2026, p. 10).

:::reveal How does a vectorscope show hue and saturation? ||| Saturation as distance from the center of the circle, hue as the angle (Leader Electronics Corporation, 2026).

:::reveal What does Leader say a waveform monitor catches that a picture monitor may not? ||| Errors that are "not visible on a traditional monitor," because monitors vary with reflection and calibration (Leader Electronics Corporation, 2026, p. 8).

## Sources
- ${LEADER_GUIDE} Locator: "Introduction"; "Why do we need the classic waveform monitor and vector scope on-set?" pp. 8 to 9; "Camera White Balance," p. 10; "Camera Black Balance," p. 13, with the knee, white clip and gamma passages; "Leader Scope - On-Set Production".
- ${TURNER_2023} Locator: first bullet.
- ${LEADER_LV5600W} Locator: product overview, vectorscope specifications and feature list.
- ${GV_CREATIVE_GRADING} Locator: opening paragraph; "Precision Control Made Simple"; "Features".
- ${NFL_V1} Locator: "Responsibilities," items 2 and 3.`,
    },
    {
      slug: "v2-robotics-and-the-chain",
      title: "11 · The V2, robotics and the camera chain",
      section: "3 · Video: the V1 and the V2",
      recallContent: [
        {
          prompt: "How does Leader say multiple cameras are matched?",
          answer: "\"by checking the RGB balance using a waveform and grey-scale chart\" (Leader Electronics Corporation, 2026).",
        },
        {
          prompt: "What default gamma does Leader say most cameras have?",
          answer: "0.45 (Leader Electronics Corporation, 2026).",
        },
      ],
      body: `${QR}

**What one employer said a V2 does.** Turner Sports posted "V2, Sports" in 2022 and again in 2023; both postings are closed (Turner Sports, 2022, 2023). The first line reads: "Video 2 Operator for remote sports broadcast show. Video 2 Operator works closely with the Video 1 to help achieve the desired "look" of the studio cameras in terms of color/tone, iris/brightness, and camera matching" (Turner Sports, 2023). Most of the rest is editing: "Exhibits advanced skill to assemble and create content using non-linear editing software in a fast-paced sport news environment," and "Must have the skill and attitude to train less experienced editors on edit workflows and software." It asks for "Minimum 5 years' experience as a Video II or Video I technician for national network remote sports broadcasts," the ability "to control hue, saturation, luminance, contrast, color space, color temperature, white level, and sync," and a "Strong understanding of audio and video broadcast quality control (video scopes, audio levels, CALM Act compliance, etc.)." The 2023 posting gave $49,489.00 to $91,909.00 salary per year and was removed by the employer on June 21, 2023. The 2022 copy shows no pay.

**Reasoned, and what is missing.** That V2 matched "the studio cameras" and spent most of its time editing, so it may not describe a V2 on a remote truck. On October 26, 2026, no live posting titled V2 or "Video 2" was found on the Fox, Disney, Warner Bros. Discovery, NFL or NBA boards (Fox Corporation, n.d.; National Basketball Association, n.d.; National Football League [NFL], n.d.; The Walt Disney Company, n.d.; Warner Bros. Discovery, n.d.). What a V2 does on a truck today is left to the reviewer, who has held the V1 chair.

**Robotic cameras.** Robotics turns up across the postings:

| Posting | What it says about robotics |
|---|---|
| NFL Media V1 | supports "robotic camera systems (Panasonic, Telemetrics)" and prefers "Experience with automated and robotic camera systems" (NFL, 2026n) |
| Fox News Media senior video operator, a news control-room job | asks for robotic camera operations (Fox News Media, 2026d) |
| FOX 5 DC studio technician, a local news job | may work as "robotic camera" (Fox Television Stations, 2026) |
| NBC Sports V1, closed | sets the look "for all cameras, both robotic and manned" (NBC Sports, 2025) |
| ABC News maintenance technician | maintains "Sony, Panasonic, Canon Studio Camera Systems" and "Telemetrics EVS Studio and field Robotics" (wording as posted); $65.18 per hour; covered by the NABET-CWA and ABC agreement; posted September 15, 2026 (ABC News, 2026) |

A maker's menu shows how far robotics reaches: EVS lists "Media production robotics," including an "Arcam 6-axis robotic camera arm" and an "OmniGlide Robotic camera rover platform" (EVS, n.d.-b).

**Talking to one camera.** Clear-Com says most large installations and virtually all mobile units use camera isolate systems, which let one operator, "usually the video operator or technical director," talk privately with any camera operator for setup or maintenance without interrupting the other cameras' talk with the director (Clear-Com, 2020c, p. 18). That is the video chair's private line to a camera.

**The chain under the V1.** Reasoned from the postings' "Sony broadcast camera chains, CCUs, and RCPs" (NFL, 2026n) and NBC's "video feeds through CCU's to execute camera and video cabling, connections and patching" (NBC Sports, 2025): every camera reaches the shading position through a chain of camera head, cable, CCU and RCP, with routing and color correction around it. The parts are taught in other courses:

| Part | Where it is taught |
|---|---|
| The CCU and triax | CREW-00, "8 · The camera control unit and triax" |
| Hybrid fiber camera cable | CREW-00, "9 · The SMPTE hybrid fiber camera cable" |
| Reference and return video | CREW-00, "7 · Reference, timecode and return video" |
| SDI on coax | CREW-00, "4 · SDI on coax and the BNC" |
| Tally | CREW-00, "25 · DMX, RS-422, tally and USB"; CREW-04, "24 · Tally, intercom, return video and the questions to ask" |
| The truck's path for one picture | CREW-04, "22 · What the truck does with your picture" |

The NFL V1 posting asks for the IP side too, "Working knowledge of SMPTE 2110 or IP-based video workflows" (NFL, 2026n), which CREW-05, *Arena transmission*, teaches.

:::reveal According to Turner Sports' posting, what does the V2 help the V1 achieve? ||| The desired "look" of the studio cameras "in terms of color/tone, iris/brightness, and camera matching" (Turner Sports, 2023).

:::reveal Why might the Turner posting not describe a V2 on a remote truck? ||| It matched the studio cameras and was mostly an editing job; no live V2 posting was found to compare.

:::reveal On a camera isolate system, who usually talks privately with a camera operator? ||| The video operator or the technical director (Clear-Com, 2020c, p. 18).

## Sources
- ${TURNER_2023} Locator: first bullet; bullets 2 and 5; qualification bullets; pay paragraph and header.
- ${TURNER_2022} Locator: header (removal date; no pay shown).
- ${FOX_BOARD} Locator: search results for "V2" and "video 2".
- ${DISNEY_BOARD} Locator: search results for "V2" and "video 2".
- ${WBD_BOARD} Locator: search results for "V2" and "video 2".
- ${NFL_BOARD_API} Locator: job title list.
- ${NBA_BOARD} Locator: search results.
- ${NFL_V1} Locator: "Responsibilities," item 2 and last item; "Required Qualifications"; "Preferred Experience".
- ${FNM_SENIOR_VIDEO} Locator: "What You Will Need". A news control-room job.
- ${FTS_TECH} Locator: "What You'll Do". A local news job.
- ${NBC_V1} Locator: duty list.
- ${ABC_MAINT} Locator: system list; pay and union paragraphs.
- ${EVS_XTVIA} Locator: site menu, "Media production robotics".
- ${CC_2020C} Locator: "Cameras," p. 18.`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Video: the V1 and the V2",
      section: "3 · Video: the V1 and the V2",
      body: "A graded check on the V1 as posted, scopes and matching cameras, and the V2, robotics and the camera chain. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which lesson teaches shading itself, so this course does not repeat it?", options: ["CREW-04 lesson 23", "CREW-00 lesson 18", "CREW-02 lesson 17", "CREW-05 lesson 12"], correctIndex: 0, explanation: "Lesson 9 links CREW-04's \"23 · Shading and matching color.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which lesson defines the camera control unit (CCU) for this course?", options: ["CREW-04 lesson 22", "CREW-00 lesson 8", "CREW-07 lesson 2", "CREW-02 lesson 4"], correctIndex: 1, explanation: "Lesson 9 links CREW-00's \"8 · The camera control unit and triax.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What does NFL Media's V1 posting seek an operator to lead?", options: ["Replay for every NFL game day", "Graphics for studio and remote", "Studio and remote camera shading", "Audio for live news and sports"], correctIndex: 2, explanation: "NFL (2026n): \"to lead in-studio and remote camera shading for live and pre-recorded news and sports productions across all platforms.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What does the NFL V1 posting say the role is responsible for ensuring?", options: ["Every camera operator's safety", "Each replay airs on time", "The loudness of the program", "Consistent output on all feeds"], correctIndex: 3, explanation: "NFL (2026n): \"consistent, high-quality visual output across all camera feeds.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "With whom does the NFL V1 posting say the role partners?", options: ["TDs, Engineering and production", "Talent, agents and sponsors", "Officials and the league office", "Fans and the social media team"], correctIndex: 0, explanation: "NFL (2026n): \"partners with Technical Directors, Engineering, and production teams.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which four controls does the NFL V1 posting name?", options: ["Zoom, focus, pan and tilt", "Iris, gamma, black and color", "Gain, pan, mute and solo", "Hue, key, wipe and dissolve"], correctIndex: 1, explanation: "NFL (2026n): \"Adjust iris, gamma, black levels, and color balance across multiple camera feeds.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which camera shading systems does the NFL V1 posting name?", options: ["Ikegami heads and Lawo units", "Grass Valley Creative Grading", "Sony chains, CCUs and RCPs", "Panasonic consoles and decks"], correctIndex: 2, explanation: "NFL (2026n): \"Sony broadcast camera chains, CCUs, and RCPs.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What does the NFL V1 use to color correct inbound video feeds?", options: ["Imagine Magellan Control", "Cerebrum Routing System", "Grass Valley K-Frame", "Selenio Network Processor"], correctIndex: 3, explanation: "NFL (2026n): \"Color correct inbound video feeds using Selenio Network Processor Manager.\" Magellan is for routing.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What does the NFL V1 use to manage video signal routing?", options: ["Imagine Magellan Control", "Selenio Network Processor", "Riedel Artist matrix", "EVS IPDirector suite"], correctIndex: 0, explanation: "NFL (2026n): \"Manage video signal routing for shading and production workflows using Imagine Magellan Control systems.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "With what does the NFL V1 monitor and troubleshoot video signals?", options: ["Loudness and PPM meters", "Waveforms and vectorscopes", "Spectrum and RF analyzers", "Tally lights and talkback"], correctIndex: 1, explanation: "NFL (2026n): \"waveform monitors, vectorscopes, and diagnostic tools.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Based on what does the NFL V1 posting say shading is adjusted dynamically?", options: ["The score of the game", "The talent's requests", "Changing light conditions", "The sponsor's logo colors"], correctIndex: 2, explanation: "NFL (2026n): \"Adjust shading dynamically based on changing lighting conditions, production requirements, or environmental factors.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which robotic camera systems does the NFL V1 posting name?", options: ["Arcam arm and OmniGlide", "Vinten heads and Ikegami", "Sony and Canon robotics", "Panasonic and Telemetrics"], correctIndex: 3, explanation: "NFL (2026n): \"robotic camera systems (Panasonic, Telemetrics).\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "How much experience does the NFL V1 posting require?", options: ["5 to 10 or more years", "1 year in a control room", "No experience required", "2 years as a utility"], correctIndex: 0, explanation: "NFL (2026n): 5 to \"10+ years of experience in camera shading or broadcast video operations.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which video formats does the NFL V1 posting list?", options: ["480i, 576i and 720p", "1080p, 1080i and 720p", "4K, 8K and 12K", "HDR10 and Dolby Vision"], correctIndex: 1, explanation: "NFL (2026n): \"Strong understanding of broadcast video formats, including 1080p, 1080i, and 720p.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which IP video standard does the NFL V1 posting ask working knowledge of?", options: ["SCTE-35", "AES67", "SMPTE 2110", "MADI"], correctIndex: 2, explanation: "NFL (2026n): \"Working knowledge of SMPTE 2110 or IP-based video workflows.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which systems does the NFL V1 posting give as examples for frame synchronizers?", options: ["Riedel, RTS", "Viz, Ross", "EVS, Chyron", "Imagine, Cobalt"], correctIndex: 3, explanation: "NFL (2026n): \"frame synchronizers and production systems (e.g., Imagine, Cobalt).\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What knowledge does the NFL V1 posting list as preferred?", options: ["HDR and emerging technology", "Stereo and 5.1 surround mixing", "NFL and college football rules", "Viz Trio and graphics playout"], correctIndex: 0, explanation: "NFL (2026n): \"Knowledge of HDR and emerging broadcast technologies.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which attribute does the NFL V1 posting name first?", options: ["Speed on a jog dial", "An eye for color accuracy", "A loud, clear voice", "Strength to lift 75 lbs"], correctIndex: 1, explanation: "NFL (2026n): \"Exceptional attention to detail with a strong eye for color accuracy and visual consistency.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "How many hours a week does the NFL V1 posting allow?", options: ["Exactly 40", "Over 60", "Up to 29", "Up to 10"], correctIndex: 2, explanation: "NFL (2026n): a \"part-time position based on operational requirements up to 29 hours per week.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "How long is the NFL V1's seasonal employment, per the posting?", options: ["One game only", "Two full years", "Year-round", "Up to 7 months"], correctIndex: 3, explanation: "NFL (2026n): \"Seasonal employment up to 7 months.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "How much does the NFL V1 posting say the role must be able to lift?", options: ["Up to 25 lbs", "Up to 60 lbs", "Up to 75 lbs", "Up to 100 lbs"], correctIndex: 0, explanation: "NFL (2026n): lift \"up to 25 lbs.\" Sixty pounds is the utility's and 75 the lighting director's.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "How does this course print the NFL V1's posted pay?", options: ["$77.91 an hour", "$77.91 USD, no unit", "$77,910 a year", "$77.91 a week"], correctIndex: 1, explanation: "Lesson 9: the pay line reads $77.91 USD with no unit, and the course prints it as posted.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "When was the NFL V1 posting first published?", options: ["October 23, 2026", "August 14, 2026", "June 26, 2026", "April 8, 2026"], correctIndex: 2, explanation: "Lesson 9: first published June 26, 2026 (NFL, 2026n).", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What kind of job is Fox News Media's Freelance Senior Video Operator?", options: ["A Fox Sports truck job", "An NFL studio V1 job", "A stadium board job", "A news control-room job"], correctIndex: 3, explanation: "Lesson 9: a news control-room job in New York, posted August 25, 2026 (Fox News Media, 2026d).", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "To whom does Fox News Media's senior video operator report?", options: ["The Technical Production Manager", "The Show Director on each shift", "The Lighting Director on the set", "The Senior Audio Engineer on duty"], correctIndex: 0, explanation: "Fox News Media (2026d): \"reporting to the Technical Production Manager.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which three verbs does the Fox News posting give for video levels on all cameras?", options: ["Frame, focus and zoom", "Chip, color correct, monitor", "Route, record and replay", "Light, gel and diffuse"], correctIndex: 1, explanation: "Fox News Media (2026d): \"Chip, color correct, and monitor video levels on all studio cameras, video monitors, and remote cameras.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "With whom does the Fox News senior video operator collaborate on the on-air look?", options: ["Sponsors, agents and talent", "Replay, graphics and audio", "Directors, lighting, make-up", "Utilities, grips and drivers"], correctIndex: 2, explanation: "Fox News Media (2026d): \"Collaborate with directors, lighting, and make-up.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What does the Fox News senior video operator build, change and update?", options: ["Rundowns", "Playlists", "Graphics", "Scene files"], correctIndex: 3, explanation: "Fox News Media (2026d): \"build, change, and update scene files to show as needed.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What pay does the Fox News senior video operator posting state?", options: ["$40.00 to $50.00 per hour", "$36.00 to $43.75 per hour", "$28.00 to $37.50 per hour", "$65.18 per hour, union"], correctIndex: 0, explanation: "Fox News Media (2026d): $40.00 to $50.00 per hour.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "How does this course handle the word \"chip\" in the Fox News posting?", options: ["It defines it as color balance", "It quotes it, undefined", "It defines it as iris only", "It leaves the word out"], correctIndex: 1, explanation: "Lesson 9: no source read defines \"chip,\" so the course quotes the word and leaves its meaning to the reviewer.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which camera makers does the Fox News senior video posting ask experience with?", options: ["Canon and Panasonic", "Grass Valley and Red", "Ikegami and Sony", "Blackmagic and Arri"], correctIndex: 2, explanation: "Fox News Media (2026d): \"Ikegami HD Cameras\" and \"SONY HD cameras\" with their color correction units.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What is the status of NBC Sports' per-event V1 posting, as the copy shows?", options: ["Open until filled", "Reposted for 2027", "Paused for winter", "Removed in January 2026"], correctIndex: 3, explanation: "NBC Sports (2025): removed by the employer on January 5, 2026.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Under whose direction does NBC's V1 work, per the posting?", options: ["Producer, director, tech manager", "The league office and officials", "The talent and their own agents", "The sponsor's own crew chief"], correctIndex: 0, explanation: "NBC Sports (2025): \"under the direction of the Producer, Director, Technical Manager and/or other production or management representatives.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "To whom does NBC's V1 provide all CCU information?", options: ["Only the director", "All departments", "Only the league", "The audio team"], correctIndex: 1, explanation: "NBC Sports (2025): \"Provide all CCU information to all departments involved with the telecast.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "In coordination with what does NBC's V1 set the camera look and shading?", options: ["The sponsor list", "The weather report", "The game script", "The league rules"], correctIndex: 2, explanation: "NBC Sports (2025): \"set camera look and shading for all cameras, both robotic and manned in coordination with the game script.\"", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Which routing system does NBC's V1 posting ask familiarity with?", options: ["Imagine Magellan", "Riedel MediorNet", "Ross Ultrix", "Cerebrum"], correctIndex: 3, explanation: "NBC Sports (2025): familiarity with a \"Cerebrum Routing System\" and a Cobalt color corrector system.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Reasoned in lesson 9, which tools do the NFL, Fox News and NBC postings share?", options: ["CCUs, correctors and scopes", "Jog dials and replay servers", "Intercom panels and IFBs", "Lighting desks and dimmers"], correctIndex: 0, explanation: "Lesson 9: camera control units or RCPs, color correctors, and waveform and vector scopes.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "Reasoned in lesson 9, why do the V1 and the lighting director talk?", options: ["They share one pay rate", "The picture depends on light", "The V1 hires the lighting crew", "The LD runs the camera chain"], correctIndex: 1, explanation: "Lesson 9: NFL Media's LD consults the video operator from the shading room, and the Fox News operator works with lighting; the shader's picture depends on the light.", sourceLessonSlug: "the-v1-as-posted" },
          { prompt: "What does Leader say a waveform monitor on set lets you detect?", options: ["Errors in the audio mix", "Faults in the intercom", "Errors a monitor hides", "Drops in the RF signal"], correctIndex: 2, explanation: "Leader Electronics Corporation (2026, p. 8): \"errors that are not visible on a traditional monitor.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "Why does Leader say picture monitors can mislead?", options: ["They show audio meters", "They run on old cables", "They are always in mono", "Reflection and calibration"], correctIndex: 3, explanation: "Leader Electronics Corporation (2026, p. 8): monitors \"can look different due to the amount of light reflection on the screen or how the monitor is calibrated.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "Before production, what does Leader say the classic waveform display is used to ensure?", options: ["Cameras are set up and match", "Every mic is at reference", "The graphics are spelled right", "The truck clock matches master"], correctIndex: 0, explanation: "Leader Electronics Corporation (2026, p. 8): \"all of the cameras are correctly set up and match each other.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "For whom does Leader's guide say it is written, by its own introduction?", options: ["Sports truck V1s and V2s", "Cinema sets and the DIT", "Replay operators on trucks", "Audio mixers in studios"], correctIndex: 1, explanation: "Lesson 10: the guide is written for cinema and high-end television sets and the digital imaging technician, not for a sports truck.", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "How does lesson 10 use Leader's guide?", options: ["As the V1's full procedure", "As the NFL's own manual", "Its basics only", "Not at all"], correctIndex: 2, explanation: "Lesson 10: the basics apply to any camera match; the procedures are not a V1's procedure.", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "In studio-based production, what does Leader say a vision engineer has access to?", options: ["Only the replay feeds", "Only the audio desk", "Only one camera", "All the cameras"], correctIndex: 3, explanation: "Leader Electronics Corporation (2026): \"a vision engineer has access to all the cameras.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What does Leader say the vectorscope visualizes?", options: ["Chrominance", "Loudness", "Timecode", "Bit rate"], correctIndex: 0, explanation: "Leader Electronics Corporation (2026): the vectorscope \"supplements a waveform display to visualize chrominance.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "On a vectorscope, what does distance from the center represent?", options: ["Hue", "Saturation", "Brightness", "Timing"], correctIndex: 1, explanation: "Leader Electronics Corporation (2026): \"saturation as distance from the center of the circle and hue as the angle.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "On a vectorscope, what does the angle represent?", options: ["Saturation", "Brightness", "Hue", "Gamma"], correctIndex: 2, explanation: "Leader Electronics Corporation (2026): hue is shown \"as the angle.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What are the boxes around a vectorscope's circle for, per Leader?", options: ["Audio channel levels", "Camera ID numbers", "Tally states", "Colors in the main bars"], correctIndex: 3, explanation: "Leader Electronics Corporation (2026): \"boxes around the circle for the colors in the main bars.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "How does Leader say multiple cameras are matched?", options: ["RGB balance, waveform, grey chart", "Audio tone and a VU meter check", "Tally lights and a stopwatch count", "A light meter and a gel swatch book"], correctIndex: 0, explanation: "Leader Electronics Corporation (2026): \"by checking the RGB balance using a waveform and grey-scale chart.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What red, green and blue ratio does Leader give for a correct white?", options: ["2:1:1", "1:1:1", "1:2:1", "3:2:1"], correctIndex: 1, explanation: "Leader Electronics Corporation (2026, p. 10): \"must be 1:1:1.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What must a camera reproduce when its lens is closed, per Leader?", options: ["A full white", "A grey card", "A true black", "A color bar"], correctIndex: 2, explanation: "Leader Electronics Corporation (2026, p. 13): \"a true black when the lens is closed.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What may be seen if the red, green and blue black levels do not match?", options: ["A rolling bar", "A frozen frame", "A loud hum", "A colorcast"], correctIndex: 3, explanation: "Leader Electronics Corporation (2026, p. 13): \"otherwise a colorcast (a tint of a particular color) may be seen.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What default gamma does Leader say most cameras have?", options: ["0.45", "2.4", "1.0", "0.18"], correctIndex: 0, explanation: "Leader Electronics Corporation (2026): \"most cameras have a default Gamma of 0.45.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What does Leader say knee correction does?", options: ["Adds noise to dark areas", "Compresses a wide signal", "Boosts the color saturation", "Delays the picture a frame"], correctIndex: 1, explanation: "Leader Electronics Corporation (2026): knee correction \"compresses the wide dynamic video signals acquired by the imager (CCDs) into the limited video-level range.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What does Leader say the white clip circuit does?", options: ["Raises the black level", "Adds a colorcast", "Limits highlight levels", "Sets the gamma curve"], correctIndex: 2, explanation: "Leader Electronics Corporation (2026): it \"clips off or electrically limits the video level of highlights.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "Reasoned in lesson 10, how do the NFL V1's four controls relate to the scopes?", options: ["They are set by the A1", "They have no effect on them", "They are only for robotics", "They move what scopes show"], correctIndex: 3, explanation: "Lesson 10: brightness shows on the waveform, black and white balance in the RGB levels, and hue and saturation on the vectorscope.", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "Which word does Turner Sports' V2 posting pair with iris?", options: ["Brightness", "Saturation", "Hue", "Sync"], correctIndex: 0, explanation: "Turner Sports (2023): \"iris/brightness.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What screen does Leader say the LV5600W has?", options: ["A 17-inch LCD", "A 7-inch touch screen", "A 3-inch OLED", "No screen at all"], correctIndex: 1, explanation: "LeaderPhabrix (n.d.): \"a 7-inch touch screen display in a compact 3RU enclosure.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "Which displays does Leader list for the LV5600W?", options: ["Loudness and RF meters only", "Tally and timecode readouts", "Waveform, vector, picture, more", "Spectrum and network graphs"], correctIndex: 2, explanation: "LeaderPhabrix (n.d.): \"waveform, vector, picture, audio, and eye pattern displays.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "Which color bar saturations does the LV5600W's vectorscope mark?", options: ["25 % and 50 %", "50 % and 90 %", "60 % and 80 %", "75 % and 100 %"], correctIndex: 3, explanation: "LeaderPhabrix (n.d.): \"Color Bar Saturation 75 %, 100 %.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What do the LV5600W's RS-422/485 terminals let it display?", options: ["Camera ID and tally", "Loudness and peaks", "IFB and intercom", "Score and clock"], correctIndex: 0, explanation: "LeaderPhabrix (n.d.): they \"enable to display camera ID, and tally.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What does Grass Valley call Creative Grading?", options: ["A replay server and remote", "A shading panel and tablet app", "A graphics engine and plug-in", "An intercom panel and beltpack"], correctIndex: 1, explanation: "Grass Valley (n.d.-b): \"a cutting-edge camera shading control panel and tablet application\"; the praise is the maker's.", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "How does Grass Valley say Creative Grading reduces menus?", options: ["By hiding the iris", "By locking the gamma", "By grouping settings", "By using voice control"], correctIndex: 2, explanation: "Grass Valley (n.d.-b): \"grouping parameters into logical bundles.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "From where does Grass Valley say Creative Grading allows shading?", options: ["Only from beside the camera", "Only from inside the truck", "Only from the studio floor", "Any location, by IP or cloud"], correctIndex: 3, explanation: "Grass Valley (n.d.-b): \"camera shading from any location via IP or cloud.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What does Grass Valley's snapshot matching let users do across cameras?", options: ["Capture, compare, apply looks", "Record and replay every shot", "Mute and unmute each mic", "Count down to every break"], correctIndex: 0, explanation: "Grass Valley (n.d.-b): users \"can capture, compare, and apply different \"looks\" across multiple cameras instantly.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "What controls does Grass Valley list on the CGP 500 panel?", options: ["A jog dial and a T-bar", "Six rotaries and a joystick", "Faders and a talkback key", "A touch screen only"], correctIndex: 1, explanation: "Grass Valley (n.d.-b): \"six customizable rotaries, joystick controls, and push-buttons.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "How many cameras does Grass Valley say Creative Grading can manage on one IP network?", options: ["Up to 9", "Up to 29", "Up to 99", "Up to 999"], correctIndex: 2, explanation: "Grass Valley (n.d.-b): \"up to 99 cameras on a single IP network.\"", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "Why does lesson 10 describe no Sony shading panel?", options: ["Sony makes no shading panels", "The NFL uses no Sony gear at all", "Sony's panels are now obsolete", "Sony's pages could not be read"], correctIndex: 3, explanation: "Lesson 10: Sony's own product pages could not be read for the course; CREW-00 lesson 8 defines the CCU and RCP from a Sony manual.", sourceLessonSlug: "scopes-and-matching-cameras" },
          { prompt: "In which years did Turner Sports post \"V2, Sports\"?", options: ["2022 and 2023", "2018 and 2019", "2024 and 2025", "2020 and 2026"], correctIndex: 0, explanation: "Lesson 11: Turner Sports posted it in 2022 and again in 2023; both are closed.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Whom does Turner's V2 posting say the V2 works closely with?", options: ["The A1", "The Video 1", "The TD", "The AD"], correctIndex: 1, explanation: "Turner Sports (2023): \"Video 2 Operator works closely with the Video 1.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Whose cameras' look does Turner's V2 help achieve?", options: ["The field cameras", "The robotic arms", "The studio cameras", "The sideline gimbals"], correctIndex: 2, explanation: "Turner Sports (2023): the desired \"look\" of \"the studio cameras.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "What is most of Turner's V2 posting about?", options: ["Replay", "Audio", "Lighting", "Editing"], correctIndex: 3, explanation: "Turner Sports (2023): it asks for advanced non-linear editing and training other editors.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Whom does Turner's V2 posting say the V2 must be able to train?", options: ["Less experienced editors", "New replay operators", "Junior audio assistants", "Camera utilities"], correctIndex: 0, explanation: "Turner Sports (2023): \"train less experienced editors on edit workflows and software.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "What experience does Turner's V2 posting require?", options: ["2 years in local news", "5 years as Video I or II", "1 year as a utility", "10 years as a director"], correctIndex: 1, explanation: "Turner Sports (2023): \"Minimum 5 years' experience as a Video II or Video I technician for national network remote sports broadcasts.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which act's compliance does Turner's V2 posting list under quality control?", options: ["The ADA", "The FLSA", "The CALM Act", "The DMCA"], correctIndex: 2, explanation: "Turner Sports (2023): \"video scopes, audio levels, CALM Act compliance, etc.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "What pay did Turner's 2023 V2 posting give?", options: ["$77.91 USD, no unit", "$40.00 to $50.00 per hour", "$20.00 per hour", "$49,489 to $91,909 a year"], correctIndex: 3, explanation: "Turner Sports (2023): \"$49,489.00\" to \"$91,909.00 salary per year.\" The 2022 copy shows no pay.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "When was Turner's 2023 V2 posting removed by the employer?", options: ["June 21, 2023", "October 3, 2022", "January 5, 2026", "March 4, 2025"], correctIndex: 0, explanation: "Turner Sports (2023): removed June 21, 2023. October 3, 2022 is the 2022 copy's removal date.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Reasoned in lesson 11, why might Turner's V2 not describe a V2 on a remote truck?", options: ["It was a radio station job", "Studio cameras, mostly editing", "It paid only by the hour", "It required a union card first"], correctIndex: 1, explanation: "Lesson 11: that V2 matched the studio cameras and spent most of its time editing.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "What did this course find when it searched five boards for a V2 posting on October 26, 2026?", options: ["Two open V2 jobs at Fox", "One V2 job at the NBA", "No live V2 posting", "V2 jobs at every network"], correctIndex: 2, explanation: "Lesson 11: no live posting titled V2 or \"Video 2\" on the Fox, Disney, Warner Bros. Discovery, NFL or NBA boards.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Who does lesson 11 leave to say what a truck V2 does today?", options: ["The NFL's recruiting team", "The 2023 Turner posting", "A camera maker's manual", "The reviewer, a former V1"], correctIndex: 3, explanation: "Lesson 11: it is left to the reviewer, who has held the V1 chair.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which posting may have a local news technician work as \"robotic camera\"?", options: ["FOX 5 DC's technician", "NFL Media's V1", "NBC Sports' V1", "ABC News' engineer"], correctIndex: 0, explanation: "Fox Television Stations (2026): technical director, audio operator, \"robotic camera,\" and/or floor director. A local news job.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "For which cameras does NBC's closed V1 posting set the look?", options: ["Manned cameras only", "Robotic and manned alike", "Robotic cameras only", "Only the game camera"], correctIndex: 1, explanation: "NBC Sports (2025): \"for all cameras, both robotic and manned.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which robotics does ABC News' Washington maintenance posting list, as written?", options: ["Arcam and OmniGlide", "Vinten and Ross", "Telemetrics EVS Studio", "Panasonic AW only"], correctIndex: 2, explanation: "ABC News (2026): \"Telemetrics EVS Studio and field Robotics\" (wording as posted).", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "What pay does ABC News' maintenance technician posting state?", options: ["$40.00 per hour", "$77.91 USD", "$20.00 per hour", "$65.18 per hour"], correctIndex: 3, explanation: "ABC News (2026): \"$65.18 per hour,\" posted September 15, 2026.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which union agreement covers ABC News' maintenance technician, per the posting?", options: ["NABET-CWA and ABC", "IATSE Local 819", "The DGA's FLTTA", "SAG-AFTRA's code"], correctIndex: 0, explanation: "ABC News (2026): covered by the NABET-CWA and ABC collective bargaining agreement.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which robotic products does EVS's menu list under media production robotics?", options: ["Telemetrics heads and Vinten", "Arcam arm and OmniGlide rover", "XT-VIA and LSM-VIA servers", "Cobalt and Selenio correctors"], correctIndex: 1, explanation: "EVS (n.d.-b): an \"Arcam 6-axis robotic camera arm\" and an \"OmniGlide Robotic camera rover platform.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Where does Clear-Com say camera isolate systems are used?", options: ["Only in radio studios today", "Only on theater stage shows", "Virtually all mobile units", "Only in local news rooms"], correctIndex: 2, explanation: "Clear-Com (2020c, p. 18): most large installations and virtually all mobile units use camera isolate systems.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "On a camera isolate system, who usually talks privately with a camera operator?", options: ["The talent or the AD", "The A1 or the A2", "The producer or the PA", "The video operator or TD"], correctIndex: 3, explanation: "Clear-Com (2020c, p. 18): \"usually the video operator or technical director.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "What does a camera isolate talk avoid interrupting, per Clear-Com?", options: ["The other cameras and director", "The talent's IFB program feed", "The A1's mix of the crowd", "The commercial break count"], correctIndex: 0, explanation: "Clear-Com (2020c, p. 18): it does not interrupt the other cameras' talk with the director.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Reasoned in lesson 11, what chain does every camera reach shading through?", options: ["Mic, preamp, console, router", "Head, cable, CCU and RCP", "Server, playlist, remote, jog", "Engine, template, data, key"], correctIndex: 1, explanation: "Lesson 11: camera head, cable, CCU and RCP, with routing and color correction around it.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which lesson teaches the SMPTE hybrid fiber camera cable?", options: ["CREW-04 lesson 23", "CREW-07 lesson 13", "CREW-00 lesson 9", "CREW-05 lesson 20"], correctIndex: 2, explanation: "Lesson 11 links CREW-00's \"9 · The SMPTE hybrid fiber camera cable.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which lesson teaches reference and return video?", options: ["CREW-04 lesson 18", "CREW-02 lesson 8", "CREW-05 lesson 17", "CREW-00 lesson 7"], correctIndex: 3, explanation: "Lesson 11 links CREW-00's \"7 · Reference, timecode and return video.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which course teaches the IP side the NFL V1 posting asks for (SMPTE 2110)?", options: ["CREW-05", "CREW-02", "CREW-03", "CREW-01"], correctIndex: 0, explanation: "Lesson 11: CREW-05, *Arena transmission*, teaches SMPTE 2110 and IP video.", sourceLessonSlug: "v2-robotics-and-the-chain" },
          { prompt: "Which lessons teach tally, per lesson 11's table?", options: ["CREW-02 17 and CREW-03 4", "CREW-00 25 and CREW-04 24", "CREW-05 9 and CREW-07 13", "CREW-01 2 and CREW-06 5"], correctIndex: 1, explanation: "Lesson 11: CREW-00's \"25 · DMX, RS-422, tally and USB\" and CREW-04's \"24 · Tally, intercom, return video and the questions to ask.\"", sourceLessonSlug: "v2-robotics-and-the-chain" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: Replay and playout
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-replay-operator",
      title: "12 · The replay server and the replay operator",
      section: "4 · Replay and playout",
      recallContent: [
        {
          prompt: "What did Turner Sports' V2 posting say the V2 helps the V1 achieve?",
          answer: "The desired \"look\" of the studio cameras \"in terms of color/tone, iris/brightness, and camera matching\" (Turner Sports, 2023).",
        },
        {
          prompt: "On a camera isolate system, who usually talks privately with a camera operator?",
          answer: "\"usually the video operator or technical director\" (Clear-Com, 2020c, p. 18).",
        },
      ],
      body: `${QR}

**Two kinds of replay.** Broadcast replay serves the viewer; officiating replay serves the referee. They are different systems run by different crews, and the truck's replay operator does not decide reviews. CREW-05 lesson "4 · Beside the network: replay, tracking and referee comms" and CREW-07 lesson "1 · Three systems beside the field" teach the officiating side. *Break Into Sports & Media Broadcasting* lesson "12 · Stats, spotting boards, and replay" gives the broadcast replay operator in one paragraph. This lesson goes into the gear.

**EVS is a system, not a person.** The postings use "EVS" as a system's name: "EVS teams" at the NBA (National Basketball Association [NBA], 2026a), an "EVS playout system" in a Fox News Media playout posting, a news control-room job (Fox News Media, 2026c), and "EVS IP Director ingest server systems" at NFL Media (National Football League [NFL], 2026l). One NFL posting has a segment producer oversee "EVS operators in the tape room" (NFL, 2026k), meaning the people who run that system. ESPN's format list writes the replay position as "EVS" (lesson 2). This course calls the person the replay operator. EVS is one maker; Ross Video and Chyron also sell replay systems.

**No open posting.** On October 26, 2026, no live posting titled replay operator or EVS operator was found on the Fox, Disney (which includes ESPN and ABC), Warner Bros. Discovery, NFL or NBA boards, and Disney's searches for "replay" and "replay operator" returned no results (Fox Corporation, n.d.; NBA, n.d.; NFL, n.d.; The Walt Disney Company, n.d.; Warner Bros. Discovery, n.d.). So this lesson describes the work from makers' pages and from postings that mention replay, and the reviewer, who has held the chair, will confirm it.

**The server.** EVS calls its XT-VIA a "Live production server," with "up to six channels of UHD and 12+ channels of HD" and "loop recording technology" (EVS, n.d.-b). It records "super motion cameras" at "2x up to 16x" in HD for "super slow-motion replays." Its licenses include "Multicam," for "super slow-motion replays and highlights"; "Spotbox," for "ingest and playback purposes"; and "Sportlight," for smaller productions. EVS's XT-GO is an "Entry-level replay server" for "smaller productions operating on tighter budgets," with "live feed recording, slow and super motion replays, as well as clipping and playlist control" (EVS, n.d.-c). Lesson 3's truck 79 lists EVS XT-VIA servers.

**The remote.** EVS calls LSM-VIA a "Live replay and highlights system" that works "together with the XT-VIA, XS-VIA and XT-GO servers" and was "Designed hand in hand with EVS's global community of operators" (EVS, n.d.-a). Its remote has an "EVS quality jog dial and lever," "Shortcut buttons with programmable functions," and "Quick clip playout control with shotbox function," and it can "Control live, recorders, clips and playlists." Its viewer screen shows "your clips, trains, and playlists." EVS lists these key features:

- "Multi-camera ingest & playback control"
- "Slow-motion and super slow-motion control"
- "Highlights creation and editing"
- "Live mode, clip mode, playlist mode"
- "Instant access to any record train in the network"
- "Metadata tagging"

EVS says its LSM-GO remote for the XT-GO "is immediately accessible to any LSM operator with no need for extra training" (EVS, n.d.-c).

**Seeing every angle.** EVS's MultiReview option lets an operator "Place in/out markers, select the angles you want to use" and "Create clips, export to targets, append to playlists," with "up to 16 multi-cam proxy feeds in one layout." EVS says it "Combines the overview of a director, with the possibilities of a replay operator" (EVS, n.d.-a). A multiviewer gives "Control of PGM & PVW ports," and shortcut buttons can give "easy access to intercom systems ("push-to-talk")."

**Other makers.** Ross Video's product menu lists a "Rio Replay Live Replay System" (Ross Video, n.d.-a). Chyron's PAINT "combines a six-channel internal replay server with powerful, real-time telestration tools," and its operators can "comb through live feeds, clip key moments, and build highlight packages on the fly" (Chyron, n.d.-a).

**The work, reasoned.** Assembled only from these makers' functions, because no posting read for this course lists a broadcast replay operator's duties: the operator records every camera to a server, marks in and out points, builds clips and playlists, and plays them back at speed or in slow motion.

**On the crew.** ESPN's school minimum is "one DVR Unit with minimum 4 input / 2 output" (ESPN, 2018, p. 2), and its producer will "Request replays and graphics to support the themes and topics of the game" (p. 23). Mobile TV Group's 58FLEX has room for "Up to 6 replay operator positions" (Mobile TV Group, n.d.-c). The NBA's local game production supervisor coordinates "graphics, replay, sponsored elements, and other game presentation components" (NBA, 2026b). Section 7 follows one replay through every chair.

:::reveal Does the truck's replay operator decide officiating reviews? ||| No. Broadcast replay serves the viewer; officiating replay is a separate system run by a separate crew (CREW-05, CREW-07).

:::reveal What does this course call the person the postings call an "EVS operator"? ||| The replay operator. EVS is a system's name, not a job title.

:::reveal What does EVS say its MultiReview option combines? ||| "the overview of a director, with the possibilities of a replay operator" (EVS, n.d.-a).

## Sources
- ${NBA_HIGHLIGHTS} Locator: description, "EVS teams".
- ${FNM_PLAYOUT} Locator: "What You Will Need". A news control-room job.
- ${NFL_TOC} Locator: "Responsibilities".
- ${NFL_SEGMENT_PRODUCER} Locator: "Responsibilities".
- ${FOX_BOARD} Locator: search results for "replay," "EVS" and "playout".
- ${NBA_BOARD} Locator: search results.
- ${NFL_BOARD_API} Locator: job title list.
- ${DISNEY_BOARD} Locator: search results for "replay" and "replay operator" (none).
- ${WBD_BOARD} Locator: search results for "replay" and "EVS".
- ${EVS_XTVIA} Locator: "At the heart of the action," "Core benefits," "High quality super motion replays," "Introducing a new licensing model".
- ${EVS_XTGO} Locator: "Go premium at lower cost" and "Fast and efficient control".
- ${EVS_LSMVIA} Locator: page heading; "The new replay experience"; "LSM-VIA remote"; "Viewer screen"; "LSM-VIA Key features"; "MultiReview option"; "LSM-VIA Multiviewer".
- ${ROSS_XPRESSION} Locator: product menu, "Video Servers & Replay".
- ${CHYRON_PAINT} Locator: product description.
- ${ESPN_2018} Locator: "Equipment Standards," p. 2; "Producer Responsibilities," p. 23.
- ${MTVG_58_SPEC} Locator: "Replay," p. 1.
- ${NBA_LOCAL_SUP} Locator: responsibilities.`,
    },
    {
      slug: "playout-rolling-elements",
      title: "13 · Playout: rolling elements on cue",
      section: "4 · Replay and playout",
      recallContent: [
        {
          prompt: "What does EVS's XT-VIA record, and at what speeds for super motion?",
          answer: "Up to six UHD or 12+ HD channels with loop recording, and super motion cameras at 2x up to 16x in HD (EVS, n.d.-b).",
        },
        {
          prompt: "From what is lesson 12's account of the replay operator's work assembled, and why?",
          answer: "From makers' functions only, because no posting read for the course lists a broadcast replay operator's duties.",
        },
      ],
      body: `${QR}

**A news playout posting.** Fox News Media's "Freelance Playout Operator" is a news control-room job in New York, posted September 9, 2026 (Fox News Media, 2026c). The freelancer "will replace staff members who are on vacation or sick leave, including holidays and weekend shifts." The duties:

- "Insert video elements during live programming as well as pretaped shows using a file server playout system"
- "Count back to directors and roll elements simultaneously"
- "Record and edit quick turnaround pieces"

It asks for a "Strong understanding of iNews" and of "using a file server playout system," and says "Viz knowledge is a plus" and "Knowledge of EVS playout system is a plus." Pay: $36.00 to $43.75 per hour (Fox News Media, 2026c).

The posting does not say what "count back" means, and no source read for this course defines it, so this course quotes the phrase and leaves its meaning to the reviewer. Section 7 teaches the counts that ESPN's manual does spell out.

**Playout gear, as makers describe it.** EVS calls IPDirector a "live production asset management (PAM) suite" with "applications for ingest and playout control, logging, content search and browsing, editing, and social media publishing" (EVS, n.d.-d). Its MPlay remote "is used for the playout of clips, playlists and graphics" and "lets a single operator control up to four channels simultaneously," including "fill & key graphics and ganged clips." IPDirector also offers instant review of content while it is still being captured, and "Advanced playout control (playlist and ABRoll)" (EVS, n.d.-d). The XT-VIA's Spotbox license gives "playback channels for shot-box purposes (also suitable for studios, news/MCR environments)" (EVS, n.d.-b). Chyron's Virtual Placement includes "an internal disc recorder that provides access to footage of all input channels for near-live replays, removing the need for extra servers or additional crew" (Chyron, n.d.-b). These are the makers' descriptions of their own products.

**Audio has playout too.** NFL Media's A2 posting asks for experience with "cart playback systems such as Ovation or 360systems" and mixing "with heavy emphasis on remotes and server playback" (National Football League [NFL], 2026g). Lesson 4 reads that posting.

**Elements on the clock.** ESPN's AD gets "run times on tease/open Animation, SOTS, B- Roll (or VO) and any pre-recorded element that is built and runs from the truck- control room" (ESPN, 2018, p. 25). Commercial breaks are elements too: master control is "where the shows commercial breaks are played back" (p. 33), and "In some cases, breaks will be rolled from site" (p. 3). Lesson 2 sets out who owns that clock.

**Streaming playout.** NFL Media's "Seasonal FAST Video Systems Operator" will "Perform digital ad insertion operations on FAST live games" and "Execute SCTE-35 cue insertion for live and recorded programming, following AD commands" (NFL, 2026e). It is an "On-call position working less than 40 hours per week," seasonal for up to 7 months. Its pay line, first published August 11, 2026, reads $26 to $26.50 USD with no unit, printed here as posted. It asks for "A minimum of 2-years of experience in a Technical Support role."

**Reasoned.** Put the postings and pages side by side: replay plays back moments the cameras just recorded, while playout rolls prepared elements (packages, animations, clips, graphics, breaks and ad cues) when the AD or the director calls for them. Both chairs work on the clock from lesson 2, and both may sit at the same kind of server: EVS sells one box with a replay license and a playback license.

:::reveal Whom does Fox News Media's freelance playout operator replace? ||| "staff members who are on vacation or sick leave, including holidays and weekend shifts" (Fox News Media, 2026c).

:::reveal What does EVS's MPlay remote let one operator control? ||| Up to four channels at once, for clips, playlists and graphics, including "fill & key graphics and ganged clips" (EVS, n.d.-d).

:::reveal How does lesson 13 tell replay and playout apart? ||| Replay plays back what the cameras just recorded; playout rolls prepared elements on the AD's or director's call.

## Sources
- ${FNM_PLAYOUT} Locator: "Job Description"; "A Snapshot of Your Responsibilities," items 1 to 3; "What You Will Need"; pay paragraph. A news control-room job.
- ${EVS_IPDIRECTOR} Locator: "Ingest, create and play"; "Remote controllers"; "Key features".
- ${EVS_XTVIA} Locator: "Introducing a new licensing model".
- ${CHYRON_VP} Locator: replay paragraph.
- ${NFL_AUDIO2} Locator: "Responsibilities," items 1 and 3.
- ${ESPN_2018} Locator: "Commercial Breaks and Formats," p. 3; "Associate Director Responsibilities," item 5, p. 25; glossary, "Master," p. 33.
- ${NFL_FAST} Locator: "Responsibilities"; "Required Qualifications"; "Terms"; "Salary / Pay Range".`,
    },
    {
      slug: "the-toc-feeds-in-and-out",
      title: "14 · The TOC: feeds in and out",
      section: "4 · Replay and playout",
      recallContent: [
        {
          prompt: "Why does this course quote \"count back\" from the Fox News playout posting without explaining it?",
          answer: "The posting does not define it, and no source read for the course does, so its meaning is left to the reviewer.",
        },
        {
          prompt: "On whose commands does NFL Media's FAST operator insert SCTE-35 cues?",
          answer: "The AD's: \"following AD commands\" (NFL, 2026e).",
        },
      ],
      body: `${QR}

**The name.** Mobile TV Group's careers page listed a "Technical Operations Center (TOC) Supervisor" opening (Mobile TV Group, n.d.-e). ESPN's producer gives the TOC a copy of the day's format, with the A1 and the replay position (ESPN, 2018, p. 23).

**A TOC operator, as posted.** NFL Media's "Seasonal Part-Time TOC Operator" "will perform multiple job functions and ensure that all technical facility requests are met" (National Football League [NFL], 2026l). The operator works with "NFL Media Production team, Newsroom personnel, NFL Films Technical Operations, Encompass Atlanta Technical Operation, and members of all 32 NFL Clubs to ensure all video content is received and distributed to broadcast specifications," and "Communicates with NFL Network Master Control during live broadcasts to ensure signal continuity." The TOC handles feeds "for live remote network productions including NFL Network Games, Super Bowl, NFL Combine, NFL Draft, Hall of Fame Enshrinement." And: "The TOC operator is the first point of troubleshooting and escalation if an issue occurs."

**The duties.**

| Duty | As posted |
|---|---|
| Routing | "broadcast routing systems, including split routes" |
| Scopes and bars | "Ability to read digital & analog waveform monitors and how to set up test bars" |
| Audio | "Ability to read audio meters" |
| Before air | "Must be able to perform Sync and Fax checks prior to live shows and events"; "Ability to perform extensive transmission checks prior to live remote events" |
| Bookings | "Booking and goodnight procedures for The Switch, Lumen & AT&T Fiber and Satellite orders" |
| Records | "Must possess above average writing skills to document on-air issues"; "Responsible for the generation of broadcast reports as required" |
| Ingest | "Familiarity with EVS IP Director ingest server systems" |

It requires "A minimum of 5 years' experience in a broadcast operations environment including 2110, HD/SD, ASI, JPEG and MPLS signals." The terms are "Up to 29 hours per week up to 7 months." The pay line, first published August 14, 2026, reads $60.06 USD at both ends, with no unit (NFL, 2026l).

**Words the posting does not define.** "Fax" in "Sync and Fax checks," "goodnight procedures" for a booked circuit, and "split routes" appear without definitions, and no source read for this course defines them, so this course quotes them and leaves their meanings to the reviewer. Section 7 shows how ESPN's manual uses "fax" for the checks before air.

**ESPN's transmission check.** ESPN's AD, "when the transmission time opens," will "call Bristol Transmission" and "check all sources with them" (ESPN, 2018, p. 25). ESPN's sample schedule for an 8:00 p.m. game lists "7:00PM TRANSMISSION CHECK IN" (p. 27). Its glossary defines the test at the receiving end: "Continuity Check: An audio and video test to determine if the control room's output is the same as what is received by master control prior to a show's airing" (p. 31). The manual lists a separate trouble line for transmission check-in or problems (p. 6).

**First line, then escalation.** The NFL's TOC operator is "the first point of troubleshooting and escalation" and "will be expected to communicate issues to Operations and Production Management in a timely and efficient manner" (NFL, 2026l). The FAST operator from lesson 13 will "Document, escalate, and manage video distribution incidents to resolution" (NFL, 2026e). Section 7 sets out who fixes what when something breaks on air.

**Where this continues.** CREW-05, *Arena transmission*, teaches the transmission side past the TOC, in "23 · Feed check-in and the monitoring tools" and "26 · Status calls, escalation and reports." This course does not repeat them.

**Reasoned.** From the NFL posting and ESPN's manual together: the TOC is the door of the truck or studio. Feeds come in and go out through it, it checks them before air with bars, scopes, meters and the receiving end, it books and releases the circuits, and it is the first call when a feed fails.

:::reveal With whom does NFL Media's TOC operator communicate during live broadcasts, and why? ||| NFL Network Master Control, "to ensure signal continuity" (NFL, 2026l).

:::reveal In ESPN's glossary, what does a continuity check test? ||| Whether the control room's output is the same as what master control receives, before the show airs (ESPN, 2018, p. 31).

:::reveal Why does this course not define "fax," "goodnight procedures" or "split routes"? ||| The posting does not define them and no source read for the course does, so they are quoted and left to the reviewer.

## Sources
- ${MTVG_CAREERS} Locator: openings list.
- ${ESPN_2018} Locator: "Producer Responsibilities," p. 23; "Trouble Numbers," p. 6; AD item 6, p. 25; "Sample Basketball Operations/Production Schedule," p. 27; glossary, "Continuity Check," p. 31.
- ${NFL_TOC} Locator: opening paragraph; "Responsibilities"; "Required Qualifications"; "Expected Hours of Work"; "Salary / Pay Range".
- ${NFL_FAST} Locator: "Responsibilities".`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Replay and playout",
      section: "4 · Replay and playout",
      body: "A graded check on the replay server and the replay operator, playout, and the TOC. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Whom does broadcast replay serve, in lesson 12?", options: ["The viewer", "The referee", "The league", "The coach"], correctIndex: 0, explanation: "Lesson 12: broadcast replay serves the viewer; officiating replay serves the referee.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Whom does officiating replay serve, in lesson 12?", options: ["The viewer", "The referee", "The sponsor", "The talent"], correctIndex: 1, explanation: "Lesson 12: officiating replay serves the referee, on a separate system run by a separate crew.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Does the truck's replay operator decide officiating reviews?", options: ["Yes, on every scoring play", "Yes, when the referee asks", "No, it is a separate system", "Only in college football"], correctIndex: 2, explanation: "Lesson 12: broadcast and officiating replay are different systems run by different crews; the truck's operator does not decide reviews.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Which lessons teach the officiating side of replay?", options: ["CREW-02 lesson 17 and CREW-03 4", "CREW-00 lesson 8 and CREW-04 23", "CREW-01 lesson 3 and CREW-06 1", "CREW-05 lesson 4 and CREW-07 1"], correctIndex: 3, explanation: "Lesson 12 links CREW-05's \"4 · Beside the network: replay, tracking and referee comms\" and CREW-07's \"1 · Three systems beside the field.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "How do the postings in lesson 12 use \"EVS\"?", options: ["As a system's name", "As a job title", "As a union name", "As a league rule"], correctIndex: 0, explanation: "Lesson 12: \"EVS teams,\" an \"EVS playout system\" and \"EVS IP Director ingest server systems\" all name a system, not a person.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Which phrase appears in the NBA's highlight factory lead posting?", options: ["\"EVS replay chair\"", "\"EVS teams\"", "\"EVS crew chief\"", "\"EVS desk lead\""], correctIndex: 1, explanation: "NBA (2026a): the lead coordinates \"across Content Creation, Automation, and EVS teams.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Whom does an NFL segment producer posting say the producer oversees in the tape room?", options: ["Graphics designers", "Audio assistants", "EVS operators", "Camera utilities"], correctIndex: 2, explanation: "NFL (2026k): oversee \"EVS operators in the tape room,\" the people who run that system.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does this course call the person who runs the replay system?", options: ["The EVS operator", "The tape operator", "The video operator", "The replay operator"], correctIndex: 3, explanation: "Lesson 12: EVS is a system's name, so the course calls the person the replay operator.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Besides EVS, which makers does lesson 12 say also sell replay systems?", options: ["Ross Video and Chyron", "Calrec and Solid State", "Riedel and RTS intercom", "Leader and Sony scopes"], correctIndex: 0, explanation: "Lesson 12: Ross Video lists Rio Replay and Chyron sells PAINT with an internal replay server.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What did this course find for live replay operator postings on October 26, 2026?", options: ["Three, all at ESPN", "None on five boards", "One at NBC Sports", "Two at the NFL"], correctIndex: 1, explanation: "Lesson 12: no live posting titled replay operator or EVS operator on the Fox, Disney, Warner Bros. Discovery, NFL or NBA boards.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What did Disney's searches for \"replay\" and \"replay operator\" return?", options: ["Two ESPN jobs", "One ABC job", "No results", "A closed job"], correctIndex: 2, explanation: "Lesson 12: Disney's searches for \"replay\" and \"replay operator\" returned no results.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "From what does lesson 12 describe the replay operator's work?", options: ["A live replay operator posting", "The DGA's Article 2 duties", "A union's job description", "Makers' pages and replay mentions"], correctIndex: 3, explanation: "Lesson 12: from makers' pages and postings that mention replay; the reviewer who has held the chair will confirm it.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does EVS call its XT-VIA?", options: ["A live production server", "A replay remote controller", "A graphics render engine", "A matrix intercom frame"], correctIndex: 0, explanation: "EVS (n.d.-b): XT-VIA is its \"Live production server.\" LSM-VIA is the replay remote.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "How many channels does EVS give for the XT-VIA?", options: ["Two UHD or four HD", "Six UHD or 12+ HD", "One UHD or two HD", "Sixteen UHD only"], correctIndex: 1, explanation: "EVS (n.d.-b): \"up to six channels of UHD and 12+ channels of HD.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What recording technology does EVS name for the XT-VIA?", options: ["Tape recording", "Cloud recording", "Loop recording", "Disc recording"], correctIndex: 2, explanation: "EVS (n.d.-b): \"loop recording technology.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "At what speeds does EVS say XT-VIA records super motion cameras in HD?", options: ["1x only", "4x to 8x", "50x to 100x", "2x up to 16x"], correctIndex: 3, explanation: "EVS (n.d.-b): \"2x up to 16x\" in HD for super slow-motion replays.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Which XT-VIA license does EVS give for super slow-motion replays and highlights?", options: ["Multicam", "Spotbox", "Sportlight", "MultiReview"], correctIndex: 0, explanation: "EVS (n.d.-b): \"Multicam\" for \"super slow-motion replays and highlights.\" Spotbox is for ingest and playback.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Which XT-VIA license does EVS give for ingest and playback?", options: ["Multicam", "Spotbox", "Sportlight", "LSM-GO"], correctIndex: 1, explanation: "EVS (n.d.-b): \"Spotbox\" for \"ingest and playback purposes.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "For what does EVS say its XT-GO is meant?", options: ["The Super Bowl only", "Studio news playout", "Smaller productions", "Officiating review"], correctIndex: 2, explanation: "EVS (n.d.-c): an \"Entry-level replay server\" for \"smaller productions operating on tighter budgets.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does EVS call LSM-VIA?", options: ["A graphics playout and keying tool", "A live production and ingest server", "A camera robotics arm and rover", "A live replay and highlights system"], correctIndex: 3, explanation: "EVS (n.d.-a): a \"Live replay and highlights system.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "With whom does EVS say LSM-VIA was designed?", options: ["EVS's community of operators", "The NFL's officiating office", "Network directors' guild", "A university lab"], correctIndex: 0, explanation: "EVS (n.d.-a): \"Designed hand in hand with EVS's global community of operators.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Which physical controls does EVS name on the LSM-VIA remote?", options: ["A T-bar and joystick", "A jog dial and lever", "Faders and mutes", "A touchpad only"], correctIndex: 1, explanation: "EVS (n.d.-a): an \"EVS quality jog dial and lever,\" with shortcut buttons.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does EVS say the LSM-VIA remote's shotbox function gives?", options: ["Camera tally control", "Intercom party lines", "Quick clip playout", "Loudness metering"], correctIndex: 2, explanation: "EVS (n.d.-a): \"Quick clip playout control with shotbox function.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does EVS say the LSM-VIA viewer screen shows?", options: ["Scores and game stats", "Camera shading levels", "Audio meters and peaks", "Clips, trains, playlists"], correctIndex: 3, explanation: "EVS (n.d.-a): the viewer screen shows \"your clips, trains, and playlists.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Which three modes does EVS list among LSM-VIA's key features?", options: ["Live, clip and playlist", "Ingest, render and key", "Shade, match and paint", "Talk, listen and call"], correctIndex: 0, explanation: "EVS (n.d.-a): \"Live mode, clip mode, playlist mode.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Who does EVS say can use the LSM-GO remote with no extra training?", options: ["Any graphics operator", "Any LSM operator", "Any camera operator", "Any audio mixer"], correctIndex: 1, explanation: "EVS (n.d.-c): it \"is immediately accessible to any LSM operator with no need for extra training.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "How many multi-cam proxy feeds can MultiReview show in one layout?", options: ["Up to 4", "Up to 8", "Up to 16", "Up to 64"], correctIndex: 2, explanation: "EVS (n.d.-a): \"up to 16 multi-cam proxy feeds in one layout.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does EVS say MultiReview combines?", options: ["Audio and video mixing in one desk", "Shading and robotics on one panel", "Graphics and the game clock data", "A director's overview and replay"], correctIndex: 3, explanation: "EVS (n.d.-a): it \"Combines the overview of a director, with the possibilities of a replay operator.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What can LSM-VIA's shortcut buttons give access to through a Cerebrum integration?", options: ["Intercom push-to-talk", "Camera iris control", "Loudness meters", "The score bug"], correctIndex: 0, explanation: "EVS (n.d.-a): \"easy access to intercom systems (\"push-to-talk\").\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Which replay system does Ross Video's product menu list?", options: ["XT-GO", "Rio Replay", "PAINT", "LSM-VIA"], correctIndex: 1, explanation: "Ross Video (n.d.-a): \"Rio Replay Live Replay System.\" XT-GO and LSM-VIA are EVS's; PAINT is Chyron's.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does Chyron say PAINT combines?", options: ["Intercom and IFB", "Shading and scopes", "Replay and telestration", "Loudness and AFV"], correctIndex: 2, explanation: "Chyron (n.d.-a): \"a six-channel internal replay server with powerful, real-time telestration tools.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "Reasoned from makers' functions, what does lesson 12 say a replay operator does?", options: ["Shades and matches every camera", "Mixes the announcers and crowd", "Books satellite and fiber feeds", "Records, marks, clips, plays back"], correctIndex: 3, explanation: "Lesson 12: records every camera, marks in and out points, builds clips and playlists, and plays them back at speed or slow.", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does ESPN's producer request to support the themes of the game?", options: ["Replays and graphics", "Camera moves and lenses", "Mics and IFB checks", "Feeds and bookings"], correctIndex: 0, explanation: "ESPN (2018, p. 23): \"Request replays and graphics to support the themes and topics of the game.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What does the NBA's local game production supervisor coordinate, among other things?", options: ["Ticket sales and gates", "Graphics and replay", "Payroll and benefits", "Travel and hotels"], correctIndex: 1, explanation: "NBA (2026b): \"graphics, replay, sponsored elements, and other game presentation components.\"", sourceLessonSlug: "the-replay-operator" },
          { prompt: "What kind of job is Fox News Media's Freelance Playout Operator?", options: ["A Fox Sports truck job", "An NFL studio job", "A news control-room job", "An NBA arena job"], correctIndex: 2, explanation: "Lesson 13: a news control-room job in New York, posted September 9, 2026 (Fox News Media, 2026c).", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Whom does the Fox News freelance playout operator replace?", options: ["The show's director", "The truck's A1", "Every new intern", "Staff on leave"], correctIndex: 3, explanation: "Fox News Media (2026c): \"staff members who are on vacation or sick leave, including holidays and weekend shifts.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "With what does the Fox News playout operator insert video elements?", options: ["A file server playout system", "A tape deck and a stopwatch", "A camera's own memory card", "The switcher's still store"], correctIndex: 0, explanation: "Fox News Media (2026c): \"using a file server playout system.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What two things does the Fox News playout operator do simultaneously?", options: ["Shade and match cameras", "Count back and roll elements", "Mix and monitor audio", "Book and release circuits"], correctIndex: 1, explanation: "Fox News Media (2026c): \"Count back to directors and roll elements simultaneously.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What else does the Fox News playout posting say the operator will do?", options: ["Direct the newscast", "Run the TOC desk", "Edit quick turnarounds", "Write the scripts"], correctIndex: 2, explanation: "Fox News Media (2026c): \"Record and edit quick turnaround pieces.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Which newsroom system does the Fox News playout posting require a strong understanding of?", options: ["Viz Trio", "Riedel", "Calrec", "iNews"], correctIndex: 3, explanation: "Fox News Media (2026c): \"Strong understanding of iNews.\" Viz and EVS are pluses.", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Which playout system does the Fox News posting call a plus?", options: ["EVS", "Ross Rio", "Enco", "Ovation"], correctIndex: 0, explanation: "Fox News Media (2026c): \"Knowledge of EVS playout system is a plus,\" as is Viz.", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What pay does the Fox News playout operator posting state?", options: ["$26 to $26.50 USD", "$36.00 to $43.75 per hour", "$60.06 USD, no unit", "$44.00 to $58.50 per hour"], correctIndex: 1, explanation: "Fox News Media (2026c): $36.00 to $43.75 per hour.", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "How does this course handle \"count back\" in the Fox News playout posting?", options: ["Defines it as a countdown", "Defines it as a rewind", "Quotes it, undefined", "Leaves it out entirely"], correctIndex: 2, explanation: "Lesson 13: no source read defines it, so the course quotes the phrase and leaves its meaning to the reviewer.", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What does EVS call IPDirector?", options: ["A live replay server", "A graphics engine", "An intercom matrix", "A live PAM suite"], correctIndex: 3, explanation: "EVS (n.d.-d): a \"live production asset management (PAM) suite.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "How many channels does EVS say one operator can control with the MPlay remote?", options: ["Up to four", "Up to sixteen", "Exactly one", "Up to two"], correctIndex: 0, explanation: "EVS (n.d.-d): MPlay \"lets a single operator control up to four channels simultaneously.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What does EVS say MPlay is used for the playout of?", options: ["Audio carts and music", "Clips, playlists, graphics", "Satellite and fiber feeds", "Camera scene files"], correctIndex: 1, explanation: "EVS (n.d.-d): \"the playout of clips, playlists and graphics.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Which kinds of material does EVS say MPlay can play out, besides plain clips?", options: ["Live camera iso feeds", "Talkback and IFB", "Fill & key graphics", "Loudness reports"], correctIndex: 2, explanation: "EVS (n.d.-d): \"fill & key graphics and ganged clips.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What advanced playout control does EVS list for IPDirector?", options: ["Tally and talkback", "Shading and scopes", "Loop and record", "Playlist and ABRoll"], correctIndex: 3, explanation: "EVS (n.d.-d): \"Advanced playout control (playlist and ABRoll).\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "For which settings does EVS say the Spotbox shot-box channels are also suitable?", options: ["Studios and news/MCR", "Stadium video boards", "Radio and podcasts", "Cinema and DIT carts"], correctIndex: 0, explanation: "EVS (n.d.-b): \"also suitable for studios, news/MCR environments.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What does Chyron say its Virtual Placement's internal disc recorder removes the need for?", options: ["A graphics operator", "Extra servers or crew", "A camera tracking rig", "A director's call"], correctIndex: 1, explanation: "Chyron (n.d.-b): near-live replays, \"removing the need for extra servers or additional crew.\" That is the maker's claim.", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Which cart playback systems does NFL Media's A2 posting name?", options: ["EVS or Ross Rio", "iNews or Enco servers", "Ovation or 360systems", "Viz Trio or XPression"], correctIndex: 2, explanation: "NFL (2026g): \"cart playback systems such as Ovation or 360systems.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "For which elements does ESPN's AD get run times?", options: ["Live shots on the field", "Every replay in the game", "The announcers' ad-libs", "Pre-recorded truck elements"], correctIndex: 3, explanation: "ESPN (2018, p. 25): run times on the tease, open, SOTS, B-roll and \"any pre-recorded element that is built and runs from the truck.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Where does ESPN's glossary say commercial breaks are played back?", options: ["Master control", "The replay room", "The audio booth", "The TOC desk"], correctIndex: 0, explanation: "ESPN (2018, p. 33): master control is \"where the shows commercial breaks are played back.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What does NFL Media's FAST operator perform on FAST live games?", options: ["Camera shading", "Digital ad insertion", "Parab operation", "Graphics design"], correctIndex: 1, explanation: "NFL (2026e): \"Perform digital ad insertion operations on FAST live games.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Which cues does the FAST operator insert for live and recorded programming?", options: ["IFB cues", "Tally cues", "SCTE-35 cues", "GPI cues"], correctIndex: 2, explanation: "NFL (2026e): \"Execute SCTE-35 cue insertion for live and recorded programming.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "What hours does the NFL FAST posting describe?", options: ["Exactly 40 hours per week", "Up to 29 hours a week", "Overnight shifts only", "On call, under 40 a week"], correctIndex: 3, explanation: "NFL (2026e): \"On-call position working less than 40 hours per week,\" seasonal up to 7 months.", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "How does this course print the NFL FAST operator's posted pay?", options: ["$26 to $26.50 USD, no unit", "$26 to $26.50 an hour", "$26,000 to $26,500 a year", "$26 to $26.50 a day"], correctIndex: 0, explanation: "Lesson 13: the pay line reads $26 to $26.50 USD with no unit, printed as posted.", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "How much experience does the NFL FAST posting ask for?", options: ["5 years in a truck", "2 years in tech support", "10 years in news", "None; it is an internship"], correctIndex: 1, explanation: "NFL (2026e): \"A minimum of 2-years of experience in a Technical Support role.\"", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Reasoned in lesson 13, how does playout differ from replay?", options: ["Playout is used only for audio", "Playout is used only in news", "Playout rolls prepared elements", "Playout is run by the TD alone"], correctIndex: 2, explanation: "Lesson 13: replay plays back what the cameras just recorded; playout rolls prepared elements when the AD or director calls for them.", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Reasoned in lesson 13, why may replay and playout sit at the same kind of server?", options: ["The FCC requires one box", "Unions demand one server", "Sony makes every server", "EVS licenses both on one box"], correctIndex: 3, explanation: "Lesson 13: EVS sells the XT-VIA with a replay license (Multicam) and a playback license (Spotbox).", sourceLessonSlug: "playout-rolling-elements" },
          { prompt: "Which posting expands TOC as \"Technical Operations Center\"?", options: ["Mobile TV Group's careers", "NFL Media's TOC operator", "ESPN's 2018 manual", "Fox News Media's playout"], correctIndex: 0, explanation: "Mobile TV Group (n.d.-e) listed a \"Technical Operations Center (TOC) Supervisor\" opening.", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "What does ESPN's producer give the TOC before the show?", options: ["A transmission booking", "A copy of the format", "A spare beltpack", "A list of trouble lines"], correctIndex: 1, explanation: "ESPN (2018, p. 23): the producer gives copies of the format to the TOC, among others.", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "What does NFL Media's TOC operator ensure, per the opening paragraph?", options: ["Every replay airs", "Graphics are spelled right", "Facility requests are met", "Talent hear their IFB"], correctIndex: 2, explanation: "NFL (2026l): \"ensure all technical facility requests are met.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Whom does the NFL TOC communicate with during live broadcasts?", options: ["The league's game officials", "Each club's own head coach", "The talent and their agents", "NFL Network Master Control"], correctIndex: 3, explanation: "NFL (2026l): \"Communicates with NFL Network Master Control during live broadcasts to ensure signal continuity.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Why does the NFL TOC communicate with master control during live broadcasts?", options: ["To ensure signal continuity", "To approve the show rundown", "To shade the studio cameras", "To schedule the next crew"], correctIndex: 0, explanation: "NFL (2026l): \"to ensure signal continuity.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Which events does the NFL TOC posting name among its live remote productions?", options: ["Only preseason games", "Super Bowl, Combine, Draft", "Only NFL Films shoots", "Only college bowl games"], correctIndex: 1, explanation: "NFL (2026l): \"NFL Network Games, Super Bowl, NFL Combine, NFL Draft, Hall of Fame Enshrinement.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "What does the NFL posting say the TOC operator is the first point of?", options: ["Contact for the talent", "Sale for the sponsors", "Troubleshooting, escalation", "Approval for graphics"], correctIndex: 2, explanation: "NFL (2026l): \"the first point of troubleshooting and escalation if an issue occurs.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "What kind of routes does the NFL TOC posting include in its routing duty?", options: ["Bus routes", "Cable routes", "Mail routes", "Split routes"], correctIndex: 3, explanation: "NFL (2026l): \"broadcast routing systems, including split routes.\" The posting does not define the term.", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "What must the NFL TOC operator be able to set up, besides reading waveform monitors?", options: ["Test bars", "Camera lenses", "Talent mics", "Lighting cues"], correctIndex: 0, explanation: "NFL (2026l): \"Ability to read digital & analog waveform monitors and how to set up test bars.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Which checks must the NFL TOC perform before live shows and events?", options: ["Loudness and peak checks", "Sync and Fax checks", "Lens and focus checks", "Spelling and fact checks"], correctIndex: 1, explanation: "NFL (2026l): \"Must be able to perform Sync and Fax checks prior to live shows and events.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Before live remote events, what checks does the NFL TOC posting ask for?", options: ["Camera fax checks", "Parab aim checks", "Transmission checks", "Wardrobe checks"], correctIndex: 2, explanation: "NFL (2026l): \"Ability to perform extensive transmission checks prior to live remote events.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "For which providers does the NFL TOC handle booking and goodnight procedures?", options: ["EVS, Ross and Chyron", "Riedel, RTS, Clear-Com", "Sony, Ikegami, Canon", "The Switch, Lumen, AT&T"], correctIndex: 3, explanation: "NFL (2026l): \"Booking and goodnight procedures for The Switch, Lumen & AT&T Fiber and Satellite orders.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Why does the NFL TOC posting ask for above average writing skills?", options: ["To document on-air issues", "To write the show's script", "To post on social media", "To draft graphics text"], correctIndex: 0, explanation: "NFL (2026l): \"Must possess above average writing skills to document on-air issues.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Which ingest server system does the NFL TOC posting ask familiarity with?", options: ["Ross Rio Replay", "EVS IP Director", "Chyron PAINT", "Viz Trio"], correctIndex: 1, explanation: "NFL (2026l): \"Familiarity with EVS IP Director ingest server systems.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "What does the NFL TOC posting make the operator responsible for generating?", options: ["Crew schedules", "Rate cards", "Broadcast reports", "Score graphics"], correctIndex: 2, explanation: "NFL (2026l): \"Responsible for the generation of broadcast reports as required.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Which signal types does the NFL TOC posting's experience requirement list?", options: ["AM, FM and shortwave", "VHS, Beta and U-matic", "DMX, MIDI and USB", "2110, ASI, JPEG, MPLS"], correctIndex: 3, explanation: "NFL (2026l): 5 years \"including 2110, HD/SD, ASI, JPEG and MPLS signals.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "How does this course print the NFL TOC operator's posted pay?", options: ["$60.06 USD, no unit", "$60.06 an hour, posted", "$60,060 a year, posted", "$60.06 a day, posted"], correctIndex: 0, explanation: "Lesson 14: the pay line reads $60.06 USD at both ends, with no unit.", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "When was the NFL TOC posting first published?", options: ["June 26, 2026", "August 14, 2026", "October 23, 2026", "July 10, 2026"], correctIndex: 1, explanation: "Lesson 14: first published August 14, 2026 (NFL, 2026l).", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Which TOC posting words does this course quote without defining?", options: ["Rundown, float and heavy", "Iris, gamma and black level", "Fax, goodnight, split routes", "Ready, take and stand by"], correctIndex: 2, explanation: "Lesson 14: \"fax,\" \"goodnight procedures\" and \"split routes\" are not defined by the posting or any source read, so they are left to the reviewer.", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Whom does ESPN's AD call when the transmission time opens?", options: ["The league office", "The A1 in the truck", "The team's PR staff", "Bristol Transmission"], correctIndex: 3, explanation: "ESPN (2018, p. 25): the AD will \"call Bristol Transmission\" and \"check all sources with them.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "When does ESPN's sample schedule set transmission check-in for an 8:00 p.m. game?", options: ["7:00 p.m.", "2:00 p.m.", "4:30 p.m.", "7:55 p.m."], correctIndex: 0, explanation: "ESPN (2018, p. 27): \"7:00PM TRANSMISSION CHECK IN.\" 2:00 p.m. is crew call and 4:30 p.m. the full show fax.", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "What does ESPN's continuity check test?", options: ["The talent's IFB return level", "Output matches master's input", "The camera's back focus setting", "The truck's generator power"], correctIndex: 1, explanation: "ESPN (2018, p. 31): whether \"the control room's output is the same as what is received by master control.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "For what does ESPN's manual list a separate trouble line?", options: ["Talent travel issues", "Crew payroll issues", "Transmission check-in", "Catering on site"], correctIndex: 2, explanation: "ESPN (2018, p. 6) lists separate trouble lines, including one for transmission check-in or problems.", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "To whom must the NFL TOC communicate issues, per the posting?", options: ["The talent and agents", "The fans on social media", "The league's officials", "Operations and production"], correctIndex: 3, explanation: "NFL (2026l): \"communicate issues to Operations and Production Management in a timely and efficient manner.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "What does the NFL FAST operator do with video distribution incidents?", options: ["Document, escalate, resolve", "Ignore until the next show", "Post them on social media", "Send them to the talent"], correctIndex: 0, explanation: "NFL (2026e): \"Document, escalate, and manage video distribution incidents to resolution.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Which course teaches the transmission side past the TOC?", options: ["CREW-02", "CREW-05", "CREW-03", "CREW-06"], correctIndex: 1, explanation: "Lesson 14 links CREW-05's \"23 · Feed check-in and the monitoring tools\" and \"26 · Status calls, escalation and reports.\"", sourceLessonSlug: "the-toc-feeds-in-and-out" },
          { prompt: "Reasoned in lesson 14, what is the TOC to the truck or studio?", options: ["Its kitchen", "Its stage", "Its door", "Its roof"], correctIndex: 2, explanation: "Lesson 14: feeds come in and go out through the TOC; it checks them, books and releases circuits, and is the first call when a feed fails.", sourceLessonSlug: "the-toc-feeds-in-and-out" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: Graphics
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "who-builds-checks-and-plays-graphics",
      title: "15 · Who builds, checks and plays the graphics",
      section: "5 · Graphics",
      recallContent: [
        {
          prompt: "What does NFL Media's TOC posting say the TOC operator is the first point of?",
          answer: "\"troubleshooting and escalation if an issue occurs\" (National Football League [NFL], 2026l).",
        },
        {
          prompt: "In ESPN's glossary, what does a continuity check test?",
          answer: "Whether the control room's output is the same as what master control receives, before the show airs (ESPN, 2018, p. 31).",
        },
      ],
      body: `${QR}

**Where it sits.** *Break Into Sports & Media Broadcasting* lesson "8 · The control room: switcher, graphics, and replay" names the graphics (CG) operator in one line. This lesson splits the graphics work into the chairs the postings describe.

**The broadcast associate checks the words and numbers.** NFL Media's "Seasonal Part-Time Broadcast Associate" "will work in a LIVE television control room and coordinate LIVE graphics for many different studio & remote shows" (National Football League [NFL], 2026h). The associate "Must work to ensure all graphics are spelled correctly, are factually & grammatically accurate, and reflect proper news judgment as stories develop." The duties include "Work with the operator to build graphics, and monitor execution of graphics during the show," "Communicate with line and edit producers to understand what material is covered in each show," and "Create graphics that reflect breaking news, current NFL topics, and statistics related to show content." It asks for the "Ability to do basic stat/info research" and a "Basic understanding of on-air graphic systems, specifically VizRT," and its supervisory line reads "Oversee graphics built by VizRT operators." The terms are "Part-time, up to 29 hours per week," "Sunday availability from 7:30am - 4:30pm," and "Seasonal employment up to 7 months." The pay line, first published September 29, 2026, reads $31 to $33 USD, with no unit.

**The operator builds and plays them.** Fox News Media's "Freelance Viz Operator" is a news control-room job in New York, posted July 24, 2026 (Fox News Media, 2026f). The operator will "set up and play out all graphic elements that are integrated into pre-recorded and live programming," "under the supervision of the show's director and operations management." The duties include "Execute cleanly on-air in a high-stress, rapidly changing environment" and "Quickly troubleshoot graphic errors with producers." It asks for "Graphic playout experience in a live control room environment," "Knowledge of the Viz Trio system and 1 year of experience working with Viz in a live control room," "Excellent typing, spelling, and grammatical skills," and "a strong understanding of broadcast language." Pay: $40.00 to $50.00 per hour.

Reasoned from the NFL posting's own words: at NFL Media the broadcast associate and the Viz operator are two chairs, because the associate works "with the operator" and oversees "graphics built by VizRT operators."

**Real-time systems keep it running.** NFL Media's "Part-Time Coordinator, Real-Time Systems" "provides operational support for digital graphics workflows that support FAST channels, NFL+, RedZone, and other NFL Media productions" (NFL, 2026b). The coordinator will "Review and validate ticker content, L-Bar playlists, sponsorship elements, and graphics content" and "Monitor graphics systems, applications, and data feeds before and during productions and escalate issues to senior RTS staff when needed." It asks for "Up to 3 years of experience," part time at "fewer than 29 hours per week," "anticipated to last up to six months." The pay line, first published September 17, 2026, reads $26 to $30 USD, with no unit.

NFL Media's "Associate, Real-Time Systems" "supports the design, configuration, operation, and troubleshooting of Real-Time Systems that power NFL Media digital graphics experiences" (NFL, 2026a). It will "Configure, maintain, and troubleshoot Viz graphics systems, render engines, ticker systems, L-Bar applications," support "data-driven Viz graphics, scorebars, ticker content, promotional elements, sponsorship integrations, countdown clocks, and lower-third graphic packages," and "Serve as a frontline technical resource during live productions." It asks for "3+ years" and prefers "Viz Trio, Viz Engine, ticker systems, or graphics automation workflows" and "SQL databases." The associate is "an employee of that third-party agency and not the NFL," and the posting shows no pay figure.

**Designers and animators build the look.** NFL Media's "Seasonal Graphics Designer/Animator" works "under the direction of a team of an Art Director and Creative Producer," with deadlines "as short as same-day," and needs "Adobe After Effects, Photoshop and Illustrator" and "a working knowledge of C4D (preferably Octane render engine)" (NFL, 2026f). The terms are "Up to 7-month employment period, 40 hours/week expected"; the pay line, first published July 10, 2026, reads $37 to $80 USD, with no unit. NFL Media's "Part-Time Media Design Group Designer/Animator" asks for "3+ years," "Expert-level proficiency in Adobe After Effects (including Scripting and Mogrts)," "Experience using Figma" and "Knowledge of Cinema 4D," and will "Develop scalable, repeatable animation systems and templates"; its pay line, first published September 2, 2026, also reads $37 to $80 USD (NFL, 2026p). Fox News Media's "Real-Time Graphics Artist," a news job in New York posted October 14, 2026, creates "Vizrt transition logic show packages and the corresponding templates allowing for real-time content creation," which "require scripting." It asks for "Vizrt applications including Artist/Engine, Content Pilot, and Trio," a "Strong command of HTML, CSS, Javascript," "Knowledge of Maya and/or Cinema 4D," and a portfolio link. Pay: $44.00 to $58.50 per hour (Fox News Media, 2026i).

**Reasoned: the division of labor.** No single source states it, but put the postings side by side: designers and animators build the templates and packages; operators fill and play them live; the broadcast associate checks the words and numbers; and real-time systems staff keep the engines and data feeds running.

**The producer signs off.** On game day ESPN's producer will "Verify that graphics (clock/score included) conform to standards and are error-free" (ESPN, 2018, p. 23).

:::reveal What must NFL Media's broadcast associate ensure about every graphic? ||| That it is "spelled correctly," "factually & grammatically accurate," and reflects "proper news judgment as stories develop" (NFL, 2026h).

:::reveal Under whose supervision does Fox News Media's Viz operator work? ||| "the show's director and operations management" (Fox News Media, 2026f). It is a news control-room job.

:::reveal Who employs NFL Media's Associate, Real-Time Systems? ||| A third-party agency, "not the NFL" (NFL, 2026a).

## Sources
- ${NFL_BA} Locator: opening paragraph; "Responsibilities"; "Required Qualifications"; "Supervisory Responsibility"; "Terms / Expected Hours of Work"; "Salary / Pay Range".
- ${FNM_VIZ} Locator: "Job Description"; "A Snapshot of Your Responsibilities"; "What You Will Need"; pay paragraph. A news control-room job.
- ${NFL_RTS_COORD} Locator: opening paragraph; "Responsibilities"; "Required Qualifications"; "Terms"; "Salary / Pay Range".
- ${NFL_RTS_ASSOC} Locator: opening paragraph; "Responsibilities," items 1 and 2; "Qualifications"; "Terms"; "Salary / Pay Range".
- ${NFL_DESIGNER} Locator: opening paragraph; "Responsibilities"; "Required Qualifications"; "Terms"; "Salary / Pay Range".
- ${NFL_MDG} Locator: "Responsibilities"; "Required Qualifications"; "Salary / Pay Range".
- ${FNM_RTGA} Locator: "Job Description"; "What You Will Need"; pay paragraph. A news job.
- ${NFL_BOARD_API} Locator: \`first_published\` field for each NFL posting.
- ${ESPN_2018} Locator: "Producer Responsibilities," p. 23.`,
    },
    {
      slug: "real-time-graphics-systems",
      title: "16 · Real-time graphics systems and data",
      section: "5 · Graphics",
      recallContent: [
        {
          prompt: "Reasoned in lesson 15, how is graphics work divided among the chairs?",
          answer: "Designers and animators build templates and packages; operators fill and play them live; the broadcast associate checks words and numbers; real-time systems staff keep engines and data feeds running.",
        },
        {
          prompt: "What does NFL Media's Part-Time Coordinator, Real-Time Systems review and validate?",
          answer: "\"ticker content, L-Bar playlists, sponsorship elements, and graphics content\" (NFL, 2026b).",
        },
      ],
      body: `${QR}

**The engine and the operator's screen.** Vizrt calls Viz Engine a "real-time 3D graphics rendering and compositing engine" whose compositing engine "renders video, graphics, and data instantly in a single pass" (Vizrt, n.d.-a). Viz Trio, the system the Fox News Media Viz posting names, helps "operators manage, edit, and play out real-time graphics and video from a single, intuitive interface, from the control room or in the cloud" (Vizrt, n.d.-b). In Trio, operators "Browse templates, build playlists, edit elements, trigger clips and graphics, all done from one interface," and with Viz Engine it ensures "frame-accurate playout." Vizrt also calls Trio a "character generator and playout control application for 3D live graphics," with "frame-accurate cueing, take, and transitions" and graphics output "manually or via automation triggers," and says it "supports VBScript which can be attached to any show or template" (Vizrt, n.d.-b). These are the maker's descriptions.

**Data in the graphics.** Viz Trio connects "to live data sources such as sports stats, finance, elections using Datacenter, and auto-fill templates during your live show. From scorebugs to dynamic lower thirds" (Vizrt, n.d.-b). Ross Video calls XPression a "Real-Time Motion Graphics Platform" that supports "Flexible Templates and Automated Workflows" and binds data through "the XPression DataLinq Server"; its data server automates "tickers, branding, and informational graphics" with feeds that include "live sports scores" (Ross Video, n.d.-a). Its 1RU and 2RU engines allow "up to four channels (Video/Key) of 1080P real-time motion graphics in HD-SDI, SMPTE IP, and NDI." Chyron says PAINT integrates "with major sports data providers like Opta and STATS Perform" (Chyron, n.d.-a). On the posting side, NFL Media's associate for real-time systems prefers "SQL databases" (National Football League [NFL], 2026a), and its coordinator monitors "graphics systems, applications, and data feeds before and during productions" (NFL, 2026b).

**Telestration.** Ross says XPression Telestrate lets operators "draw, highlight, and manipulate graphics" to "emphasize important plays" (Ross Video, n.d.-a). Chyron calls PAINT "the world's leading telestrator," with "advanced replay creation, 3D telestration effects, and live data integration" (Chyron, n.d.-a). "The world's leading" is the maker's claim, not this course's.

**Fill and key.** Maker pages list graphics outputs in pairs: the EVS XT-VIA lists "6ch Fill/Key" (EVS, n.d.-b), XPression lists "Video/Key" channels (Ross Video, n.d.-a), and EVS's MPlay plays "fill & key graphics" (EVS, n.d.-d). No source read for this course defines fill and key in plain words, so this course leaves that definition to the reviewer. Reasoned from those listings: a graphics output comes as a pair of signals. ESPN's minimum switcher has "2 keyers" (ESPN, 2018, p. 2; lesson 3).

**Errors and checks.** Fox News Media's Viz operator will "Quickly troubleshoot graphic errors with producers" (Fox News Media, 2026f). ESPN's producer will "Verify that graphics (clock/score included) conform to standards and are error-free," and ESPN's director will "Make sure the back-up score bug is built" and "Review the "traffic" for your opening" with the TD, graphics, audio and tape (ESPN, 2018, pp. 23 to 24). Section 7 gathers the checks before air.

**Reasoned: what the makers share.** Vizrt, Ross Video and Chyron each describe the same three parts: templates built ahead of time, a live data link that fills them, and a playout control that takes them to air on cue. The postings in lesson 15 ask mostly for Viz. That is what those employers asked on those dates, not a measure of who sells the most.

:::reveal What does Vizrt say operators do in Viz Trio? ||| "Browse templates, build playlists, edit elements, trigger clips and graphics, all done from one interface" (Vizrt, n.d.-b).

:::reveal Which sports data providers does Chyron say PAINT integrates with? ||| Opta and STATS Perform (Chyron, n.d.-a).

:::reveal How does this course treat Chyron's "the world's leading telestrator"? ||| As the maker's own claim, not as fact.

## Sources
- ${VIZ_ENGINE} Locator: heading and "Real-Time Rendering Without Bottlenecks".
- ${VIZ_TRIO} Locator: page heading; "All Your Graphics, One Control"; "Data Visualized, Instantly"; "Dynamic Playout Control for Real-Time Live Shows"; "On-Demand Demos"; FAQ.
- ${ROSS_XPRESSION} Locator: title and feature list; "Hardware options"; "XPression Data Server"; "XPression Telestrate".
- ${CHYRON_PAINT} Locator: product description; data paragraph.
- ${NFL_RTS_ASSOC} Locator: "Qualifications".
- ${NFL_RTS_COORD} Locator: "Responsibilities".
- ${EVS_XTVIA} Locator: "Channels".
- ${EVS_IPDIRECTOR} Locator: "Remote controllers".
- ${FNM_VIZ} Locator: "A Snapshot of Your Responsibilities". A news control-room job.
- ${ESPN_2018} Locator: "Equipment Standards," p. 2; "Producer Responsibilities," p. 23; "Director Responsibilities," p. 24.`,
    },
    {
      slug: "the-first-and-ten-line",
      title: "17 · The first-and-ten line",
      section: "5 · Graphics",
      recallContent: [
        {
          prompt: "What does Vizrt say Viz Trio connects to during a live show?",
          answer: "Live data sources such as sports stats, finance and elections, through Datacenter, to auto-fill templates \"From scorebugs to dynamic lower thirds\" (Vizrt, n.d.-b).",
        },
        {
          prompt: "Why does this course not define \"fill\" and \"key\"?",
          answer: "Maker pages list \"Fill/Key\" and \"Video/Key\" outputs, but no source read for the course defines them in plain words, so the definition is left to the reviewer.",
        },
      ],
      body: `${QR}

**The debut, two accounts.** ESPN's Press Room says "The Virtual Yellow 1st and Ten line" was introduced on "ESPN's Sunday Night Football telecast of the Baltimore Ravens and Cincinnati Bengals" on September 27, 1998 (Hofheimer, 2013). A 2017 trade article says instead: "During the 1998 NFL preseason, ESPN and Sportvision debuted the 1st & Ten line" (Dachman, 2017). Both may be true if a preseason test came first, but no source read for this course says so, so this course gives both accounts with their sources.

**Who built it.** ESPN's account: "SportVision, a then-fledgling sports broadcasting technology company, created 1st and Ten and pitched the idea to various networks. While others passed, ESPN saw an opportunity," and "ESPN secured exclusive rights to 1st and Ten for the entire 1998 NFL season" (Hofheimer, 2013). ESPN says one of its own remote production executives suggested the yellow hue. The 2017 trade article says the idea of a virtual first-down line was brainstormed during Fox's glowing-puck project, that Fox debuted its FoxTrax puck at the 1996 NHL All-Star game, and that Sportvision launched in January 1998 (Dachman, 2017). In 2013 ESPN wrote: "Today, nearly every NFL and college football telecast uses a version of 1st and Ten" (Hofheimer, 2013).

**How it worked, as of 2015.** A 2015 article from SMT, a sports graphics company, says the line "was built" on "chroma key and camera modeling technologies," and that chroma key "works by identifying which pixels in a video frame should be replaced with graphics" (Taylor, 2015). For each game, "we have a palette of colors, and we look at that and we select all the different shades of grass," and the system has to cope with sun, shade and "the curve of the ground." "Sportvision fits each of the broadcaster's cameras with instruments that measure pan, tilt and zoom data" so that the graphic stays "in perspective." And: "At first Sportvision would travel with a truck full of gear and several computer operators, but now everything can be done by just one person and a small stack of computers" (Taylor, 2015). That was 2015.

**What makers sell now.** Chyron's Virtual Placement inserts virtual graphics "Using optical tracking and image-processing algorithms"; in American football its "Virtual 1st tools adds red zone visuals, first down markers, and sponsor-branded graphics" (Chyron, n.d.-b). Chyron says it needs "no encoders or extra hardware," that calibration "takes just minutes from a simple video input," and that "Built-in chroma keying adapts to lighting changes." Its November 2024 release added a "Field Goal Target tool," red zone outline options, and a Down and Distance module with "automatic midfield switching" as "teams cross the 50-yard line" (Chyron, 2024). Vizrt calls Viz Arena "The one-box AR and virtual advertising suite for live events," an "Image based solution" with "AI calibration" (Vizrt, n.d.-c). These are the makers' descriptions of their own products.

**Then and now, reasoned.** The 2015 account describes instrumented cameras that measured pan, tilt and zoom; Chyron and Vizrt now describe image-based tracking that needs no camera encoders. No source read for this course says which method any network uses today.

**The chair, as posted.** Fox Corporation's internship for a 2027 "Live Sports Virtual Enhancement Operator" is Fox Sports work (Fox Corporation, 2026a). The intern will "Provide integration of first and 10 markers, plus down and distance graphics throughout live broadcast of NFL and College Football games," "Work closely with remote Sports Production to coordinate graphical placement opportunities," and "Provide integration of on-air sports ticker, throughout various sporting events." Eligibility includes "Knowledge of NFL and College Football rules," sophomore standing or above, and work "on-site in a variety of shifts including weekends and holidays." The roles are "on-site in Tempe, Arizona," and interns need "Access to own housing and transportation to/from the FOX Technology Center." The program runs from June 21, 2027 to January 2, 2028, "up to 40 hours per week from June through August and 16-24 hours per week from September through January." The general application deadline is "Sunday, January 10, 2027," and pay is "$20.00 per hour." It was posted September 28, 2026.

Reasoned from "on-site in Tempe" and "Work closely with remote Sports Production": at least for these interns, the virtual enhancement work is done at the Tempe technology center while the game is produced elsewhere. The posting does not say where the line itself is inserted, so this course does not say either.

**A graphic, not a measurement.** Reasoned: the yellow line is a graphic for viewers. The NFL's official line to gain is measured by a separate officiating system, taught in CREW-07 lesson "9 · NFL: challenges, the command center and the line to gain." No source read for this course links the two.

:::reveal On what date, by ESPN's own account, did the virtual yellow line debut, and what does the 2017 trade article say instead? ||| September 27, 1998, on ESPN's Sunday Night Football (Hofheimer, 2013); the trade article says "During the 1998 NFL preseason" (Dachman, 2017).

:::reveal In the 2015 account, what did Sportvision fit to the broadcaster's cameras, and why? ||| Instruments that measure pan, tilt and zoom data, so the graphic stays in perspective (Taylor, 2015).

:::reveal Is the yellow line the official line to gain? ||| No. It is a graphic for viewers; the official measurement is a separate officiating system (CREW-07 lesson 9).

## Sources
- ${HOFHEIMER_2013} Locator: paragraphs 1, 2, 4, 5 and 6.
- ${DACHMAN_2017} Locator: "The 1st & Ten Line: A New Era in Televised Football"; "The Glowing Puck".
- ${TAYLOR_2015} Locator: paragraphs 3, 4, 6 and 7.
- ${CHYRON_VP} Locator: product description; tracking paragraph.
- ${CHYRON_2024} Locator: paragraphs 2 and 3.
- ${VIZ_ARENA} Locator: heading and "Benefits".
- ${FOX_INTERN} Locator: "Job Description"; "A Snapshot of Your Responsibilities," items 1 to 3; "Eligibility Requirements"; "Summer and Fall 2027 Schedule"; pay paragraph. Fox Sports work.`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Graphics",
      section: "5 · Graphics",
      body: "A graded check on who builds, checks and plays the graphics, real-time graphics systems and data, and the first-and-ten line. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which broadcasting-break-in lesson names the graphics (CG) operator in one line?", options: ["Lesson 8", "Lesson 2", "Lesson 13", "Lesson 15"], correctIndex: 0, explanation: "Lesson 15 links \"8 · The control room: switcher, graphics, and replay.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Where does NFL Media's broadcast associate work, per the posting?", options: ["An outdoor stadium tower", "A live TV control room", "A remote edit suite", "The league's main office"], correctIndex: 1, explanation: "NFL (2026h): \"will work in a LIVE television control room and coordinate LIVE graphics.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What must NFL Media's broadcast associate ensure about all graphics?", options: ["They play on time", "They match the set", "They are accurate", "They load quickly"], correctIndex: 2, explanation: "NFL (2026h): \"spelled correctly,\" \"factually & grammatically accurate,\" and reflecting \"proper news judgment.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "With whom does the NFL broadcast associate work to build graphics?", options: ["The producer alone", "The A1 and the A2", "The camera crew", "The operator"], correctIndex: 3, explanation: "NFL (2026h): \"Work with the operator to build graphics, and monitor execution of graphics during the show.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "With whom does the NFL broadcast associate communicate about each show's material?", options: ["Line and edit producers", "League officials and refs", "Sponsors and advertisers", "Camera and audio crews"], correctIndex: 0, explanation: "NFL (2026h): \"Communicate with line and edit producers to understand what material is covered in each show.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What kind of research does the NFL broadcast associate posting ask the ability to do?", options: ["Legal and contract research", "Basic stat/info research", "Audience ratings research", "Advertising market research"], correctIndex: 1, explanation: "NFL (2026h): \"Ability to do basic stat/info research.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Which graphics system does the NFL broadcast associate posting name?", options: ["Ross XPression", "Chyron PAINT", "VizRT", "Adobe Premiere"], correctIndex: 2, explanation: "NFL (2026h): \"Basic understanding of on-air graphic systems, specifically VizRT.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What does the NFL broadcast associate's supervisory line say?", options: ["Hire and schedule the graphics crew", "Train the new replay operators", "Approve the crew's pay rates", "Oversee VizRT operators' graphics"], correctIndex: 3, explanation: "NFL (2026h): \"Oversee graphics built by VizRT operators.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Which Sunday hours does the NFL broadcast associate posting ask availability for?", options: ["7:30 a.m. to 4:30 p.m.", "Noon to 11:00 p.m.", "6:00 p.m. to 2:00 a.m.", "Midnight to 8:00 a.m."], correctIndex: 0, explanation: "NFL (2026h): \"Sunday availability from 7:30am - 4:30pm.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "How does this course print the NFL broadcast associate's posted pay?", options: ["$31 to $33 an hour", "$31 to $33 USD, no unit", "$31,000 to $33,000 a year", "$31 to $33 a day"], correctIndex: 1, explanation: "Lesson 15: the pay line reads $31 to $33 USD with no unit; the course adds none.", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "When was the NFL broadcast associate posting first published?", options: ["June 26, 2026", "July 10, 2026", "September 29, 2026", "October 23, 2026"], correctIndex: 2, explanation: "Lesson 15: first published September 29, 2026 (NFL, 2026h).", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What kind of job is Fox News Media's Freelance Viz Operator?", options: ["A Fox Sports truck job", "An NFL Media studio job", "An NBA arena graphics job", "A news control-room job"], correctIndex: 3, explanation: "Lesson 15: a news control-room job in New York, posted July 24, 2026 (Fox News Media, 2026f).", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Under whose supervision does the Fox News Viz operator work?", options: ["The director and operations", "The A1 and the A2 on duty", "The art director, working alone", "The talent and their agents"], correctIndex: 0, explanation: "Fox News Media (2026f): \"under the supervision of the show's director and operations management.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What does the Fox News Viz operator set up and play out?", options: ["Every camera's look", "All graphic elements", "Each commercial break", "The talent's IFB feeds"], correctIndex: 1, explanation: "Fox News Media (2026f): \"set up and play out all graphic elements that are integrated into pre-recorded and live programming.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "With whom does the Fox News Viz operator troubleshoot graphic errors?", options: ["The A1", "The TOC", "Producers", "Utilities"], correctIndex: 2, explanation: "Fox News Media (2026f): \"Quickly troubleshoot graphic errors with producers.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What Viz experience does the Fox News Viz operator posting require?", options: ["Five years as a designer", "A Viz certification exam", "Two years in a truck", "One year of Viz live"], correctIndex: 3, explanation: "Fox News Media (2026f): \"Knowledge of the Viz Trio system and 1 year of experience working with Viz in a live control room.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Which skills does the Fox News Viz posting call excellent?", options: ["Typing, spelling, grammar", "Lifting, climbing, rigging", "Mixing, metering, routing", "Shading, matching, framing"], correctIndex: 0, explanation: "Fox News Media (2026f): \"Excellent typing, spelling, and grammatical skills.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What pay does the Fox News Viz operator posting state?", options: ["$31 to $33 USD", "$40.00 to $50.00 per hour", "$20.00 per hour", "$44.00 to $58.50 per hour"], correctIndex: 1, explanation: "Fox News Media (2026f): $40.00 to $50.00 per hour. $44.00 to $58.50 is the real-time graphics artist.", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Reasoned in lesson 15, why are NFL Media's broadcast associate and Viz operator two chairs?", options: ["They work in two buildings", "They are paid the same rate", "The BA works with and oversees", "The Viz operator hires the BA"], correctIndex: 2, explanation: "Lesson 15: the BA works \"with the operator\" and oversees \"graphics built by VizRT operators\" (NFL, 2026h).", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Which productions does NFL Media's real-time systems coordinator support?", options: ["Only NFL Films", "Only the Draft", "Only preseason", "FAST, NFL+, RedZone"], correctIndex: 3, explanation: "NFL (2026b): \"FAST channels, NFL+, RedZone, and other NFL Media productions.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What does the NFL real-time systems coordinator review and validate?", options: ["Ticker, L-Bar and sponsor content", "Camera looks and shading files", "Audio mixes and IFB levels", "Crew schedules and payroll"], correctIndex: 0, explanation: "NFL (2026b): \"ticker content, L-Bar playlists, sponsorship elements, and graphics content.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "To whom does the NFL real-time systems coordinator escalate issues?", options: ["The talent", "Senior RTS staff", "The league office", "The sponsor"], correctIndex: 1, explanation: "NFL (2026b): \"escalate issues to senior RTS staff when needed.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "How much experience does the NFL real-time systems coordinator posting ask for?", options: ["10 or more years", "At least 5 years", "Up to 3 years", "Exactly 7 years"], correctIndex: 2, explanation: "NFL (2026b): \"Up to 3 years of experience.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "How does this course print the NFL real-time systems coordinator's posted pay?", options: ["$26 to $30 an hour, posted", "$26,000 to $30,000 a year", "$26 to $30 a day, posted", "$26 to $30 USD, no unit"], correctIndex: 3, explanation: "Lesson 15: the pay line reads $26 to $30 USD with no unit.", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Who employs NFL Media's Associate, Real-Time Systems?", options: ["A third-party agency", "The NFL directly", "A team in the league", "A graphics maker"], correctIndex: 0, explanation: "NFL (2026a): \"an employee of that third-party agency and not the NFL.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What pay does the NFL Associate, Real-Time Systems posting show?", options: ["$37 to $80 USD", "No pay figure", "$26 to $30 USD", "$20.00 per hour"], correctIndex: 1, explanation: "Lesson 15: the posting shows no pay figure; its terms are handled by the agency.", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Which of these does the NFL associate for real-time systems support?", options: ["Camera robotics and arms", "Parabolic microphones", "Scorebars and countdown clocks", "Satellite and fiber bookings"], correctIndex: 2, explanation: "NFL (2026a): \"data-driven Viz graphics, scorebars, ticker content, ... countdown clocks, and lower-third graphic packages.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Under whose direction does NFL Media's seasonal graphics designer/animator work?", options: ["The show's lead A1 mixer", "The TOC operator on duty", "The studio's stage manager", "An art director's team"], correctIndex: 3, explanation: "NFL (2026f): \"under the direction of a team of an Art Director and Creative Producer.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "How short can the NFL seasonal designer's deadlines be, per the posting?", options: ["Same-day", "One month", "One season", "Two weeks"], correctIndex: 0, explanation: "NFL (2026f): deadlines \"as short as same-day.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Which software does the NFL seasonal designer posting require?", options: ["Pro Tools and Logic Pro", "After Effects, Photoshop", "Excel and Access tables", "AutoCAD and Revit plans"], correctIndex: 1, explanation: "NFL (2026f): \"Adobe After Effects, Photoshop and Illustrator,\" with a working knowledge of C4D.", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "How does this course print the NFL designer/animator postings' pay?", options: ["$37 to $80 an hour, posted", "$37,000 to $80,000 a year", "$37 to $80 USD, no unit", "$37 to $80 a day, posted"], correctIndex: 2, explanation: "Lesson 15: both NFL designer postings read $37 to $80 USD with no unit.", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What does NFL Media's Media Design Group designer/animator develop?", options: ["Lighting plots", "Audio stems", "Replay playlists", "Animation systems"], correctIndex: 3, explanation: "NFL (2026p): \"Develop scalable, repeatable animation systems and templates.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What does Fox News Media's real-time graphics artist create?", options: ["Vizrt show packages", "Talent IFB mixes", "Camera scene files", "Transmission bookings"], correctIndex: 0, explanation: "Fox News Media (2026i): \"Vizrt transition logic show packages and the corresponding templates.\" A news job.", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Which web skills does the Fox News real-time graphics artist posting ask for?", options: ["PHP and MySQL servers", "HTML, CSS, Javascript", "Java and C++ desktop", "Swift and Kotlin apps"], correctIndex: 1, explanation: "Fox News Media (2026i): \"Strong command of HTML, CSS, Javascript.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "Reasoned in lesson 15, who checks the words and numbers in the graphics?", options: ["The graphics designer", "The Viz playout operator", "The broadcast associate", "The real-time systems staff"], correctIndex: 2, explanation: "Lesson 15: designers build, operators fill and play, the broadcast associate checks, and real-time systems staff keep engines and feeds running.", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What does ESPN's producer verify about graphics on game day?", options: ["That they are animated", "That they are sponsored", "That they are in 4K", "That they are error-free"], correctIndex: 3, explanation: "ESPN (2018, p. 23): \"Verify that graphics (clock/score included) conform to standards and are error-free.\"", sourceLessonSlug: "who-builds-checks-and-plays-graphics" },
          { prompt: "What does Vizrt call Viz Engine?", options: ["A real-time 3D render engine", "A replay and highlights server", "A matrix intercom frame", "A camera shading panel"], correctIndex: 0, explanation: "Vizrt (n.d.-a): a \"real-time 3D graphics rendering and compositing engine.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "What does Vizrt say Viz Engine renders in a single pass?", options: ["Audio, IFB and comms", "Video, graphics, data", "Tally, timecode, sync", "Scripts, rundowns, notes"], correctIndex: 1, explanation: "Vizrt (n.d.-a): it \"renders video, graphics, and data instantly in a single pass.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "From where does Vizrt say operators can use Viz Trio?", options: ["Only in a truck", "Only in a studio", "Control room or cloud", "Only from a tablet"], correctIndex: 2, explanation: "Vizrt (n.d.-b): \"from the control room or in the cloud.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "What does Vizrt say Viz Trio with Viz Engine ensures?", options: ["Lossless audio output", "Matched camera looks", "Signal continuity checks", "Frame-accurate playout"], correctIndex: 3, explanation: "Vizrt (n.d.-b): \"frame-accurate playout.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "How else does Vizrt describe Viz Trio?", options: ["A CG and playout control app", "A replay server for slow motion", "An audio console with faders", "A router for camera feeds"], correctIndex: 0, explanation: "Vizrt (n.d.-b): a \"character generator and playout control application for 3D live graphics.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "How does Vizrt say Viz Trio graphics can be output?", options: ["Only by the show producer", "Manually or by automation", "Only by the TD's switcher", "Only on a fixed timer"], correctIndex: 1, explanation: "Vizrt (n.d.-b): graphics output \"manually or via automation triggers.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "Which scripting language does Vizrt say Viz Trio supports?", options: ["Python", "Lua", "VBScript", "Ruby"], correctIndex: 2, explanation: "Vizrt (n.d.-b): Trio \"supports VBScript which can be attached to any show or template.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "Through what does Vizrt say Viz Trio connects to live data?", options: ["DataLinq", "IPDirector", "Cerebrum", "Datacenter"], correctIndex: 3, explanation: "Vizrt (n.d.-b): live data sources \"using Datacenter.\" DataLinq is Ross Video's.", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "Which graphics does Vizrt say Trio's data link can fill?", options: ["Scorebugs to lower thirds", "Camera looks to scene files", "IFB mixes to talkback", "Tally lights to timecode"], correctIndex: 0, explanation: "Vizrt (n.d.-b): \"From scorebugs to dynamic lower thirds.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "What does Ross Video call XPression?", options: ["A live replay and highlights system", "A real-time motion graphics platform", "A matrix intercom and panel system", "A camera control unit and panel"], correctIndex: 1, explanation: "Ross Video (n.d.-a): a \"Real-Time Motion Graphics Platform.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "Through which server does Ross say XPression binds data?", options: ["Datacenter", "IPDirector", "DataLinq", "Hydra2"], correctIndex: 2, explanation: "Ross Video (n.d.-a): \"the XPression DataLinq Server.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "What does Ross say the XPression Data Server automates?", options: ["Camera shading files", "Audio mixing levels", "Replay clip lists", "Tickers and branding"], correctIndex: 3, explanation: "Ross Video (n.d.-a): it automates \"tickers, branding, and informational graphics,\" with feeds including \"live sports scores.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "How many Video/Key channels does Ross say XPression 1RU and 2RU engines allow?", options: ["Up to four", "Up to twelve", "Exactly one", "Up to 99"], correctIndex: 0, explanation: "Ross Video (n.d.-a): \"up to four channels (Video/Key) of 1080P real-time motion graphics.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "Which sports data providers does Chyron say PAINT integrates with?", options: ["Hawk-Eye and TRACAB", "Opta and STATS Perform", "Riedel and RTS comms", "Nielsen and Comscore"], correctIndex: 1, explanation: "Chyron (n.d.-a): \"major sports data providers like Opta and STATS Perform.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "What graphics database skill does NFL Media's associate for real-time systems prefer?", options: ["MongoDB", "Oracle Forms", "SQL databases", "FileMaker"], correctIndex: 2, explanation: "NFL (2026a): prefers \"SQL databases.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "What does Ross say XPression Telestrate lets operators do?", options: ["Mute the crowd microphones", "Book the satellite uplink", "Shade all the studio cameras", "Draw to emphasize plays"], correctIndex: 3, explanation: "Ross Video (n.d.-a): operators can \"draw, highlight, and manipulate graphics\" to \"emphasize important plays.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "How does this course treat Chyron calling PAINT \"the world's leading telestrator\"?", options: ["As the maker's claim", "As an industry award", "As a sales ranking", "As an FCC finding"], correctIndex: 0, explanation: "Lesson 16: \"The world's leading\" is the maker's claim, not this course's.", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "How does EVS's XT-VIA page list its graphics-capable outputs?", options: ["As 6ch Video/Audio", "As 6ch Fill/Key", "As 6ch Left/Right", "As 6ch Prev/Prog"], correctIndex: 1, explanation: "EVS (n.d.-b) lists \"6ch Fill/Key.\" XPression lists \"Video/Key.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "Why does this course not define \"fill\" and \"key\"?", options: ["They are trade secrets", "They mean the same thing", "No source defines them", "They are out of date"], correctIndex: 2, explanation: "Lesson 16: no source read for the course defines fill and key in plain words, so the definition is left to the reviewer.", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "Reasoned from the maker listings, how does a graphics output come?", options: ["As one audio channel", "As a printed sheet", "As a data file only", "As a pair of signals"], correctIndex: 3, explanation: "Lesson 16: the pages list outputs in pairs (Fill/Key, Video/Key), so a graphics output comes as a pair of signals.", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "What does ESPN's director make sure is built before the game?", options: ["A back-up score bug", "A spare camera head", "A second truck", "A new rundown"], correctIndex: 0, explanation: "ESPN (2018, p. 24): \"Make sure the back-up score bug is built.\"", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "With whom does ESPN's director review the \"traffic\" for the opening?", options: ["The talent and their agents", "TD, graphics, audio, tape", "The league office on site", "The TOC and master control"], correctIndex: 1, explanation: "ESPN (2018, p. 24): review the \"traffic\" for your opening with the TD, graphics, audio and tape.", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "Reasoned in lesson 16, which three parts do Vizrt, Ross and Chyron each describe?", options: ["Camera, lens and mount", "Mic, mixer and meter", "Templates, data, playout", "Server, remote and jog"], correctIndex: 2, explanation: "Lesson 16: templates built ahead, a live data link that fills them, and a playout control that takes them to air on cue.", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "What does lesson 16 say the postings' preference for Viz shows?", options: ["Viz's market share", "Viz is the only tool", "Viz is required by law", "What employers asked"], correctIndex: 3, explanation: "Lesson 16: it is what those employers asked on those dates, not a measure of who sells the most.", sourceLessonSlug: "real-time-graphics-systems" },
          { prompt: "On what date does ESPN's account say the virtual yellow line debuted?", options: ["September 27, 1998", "January 1, 1998", "February 1, 1996", "September 27, 2013"], correctIndex: 0, explanation: "Hofheimer (2013): ESPN's Sunday Night Football telecast on September 27, 1998. The 2013 date is the feature's own.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Which telecast does ESPN's account name for the debut?", options: ["Monday Night Football", "Sunday Night Football", "A college bowl game", "The 1998 Super Bowl"], correctIndex: 1, explanation: "Hofheimer (2013): \"ESPN's Sunday Night Football telecast of the Baltimore Ravens and Cincinnati Bengals.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "When does the 2017 trade article say the line debuted?", options: ["The 1997 playoffs", "The 1999 season", "The 1998 preseason", "The 2000 Super Bowl"], correctIndex: 2, explanation: "Dachman (2017): \"During the 1998 NFL preseason, ESPN and Sportvision debuted the 1st & Ten line.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "How does this course handle the two debut accounts?", options: ["Picks the trade article's", "Picks ESPN's and drops it", "Averages the two dates", "Gives both with sources"], correctIndex: 3, explanation: "Lesson 17: both may be true if a preseason test came first, but no source says so, so the course gives both accounts with their sources.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Which company does ESPN's account say created 1st and Ten?", options: ["SportVision", "Vizrt", "Chyron", "EVS"], correctIndex: 0, explanation: "Hofheimer (2013): \"SportVision, a then-fledgling sports broadcasting technology company, created 1st and Ten.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What rights does ESPN say it secured for the 1998 NFL season?", options: ["Shared rights", "Exclusive rights", "Regional rights", "Playoff rights"], correctIndex: 1, explanation: "Hofheimer (2013): \"ESPN secured exclusive rights to 1st and Ten for the entire 1998 NFL season.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Who does ESPN's account say suggested the yellow hue?", options: ["A league officiating official", "A Sportvision staff engineer", "An ESPN production executive", "A team's head football coach"], correctIndex: 2, explanation: "Lesson 17: ESPN says one of its own remote production executives suggested the yellow hue.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "During which project does the 2017 article say the virtual line idea was brainstormed?", options: ["A golf tracer project", "A baseball pitch tracker", "A basketball shot meter", "Fox's glowing-puck project"], correctIndex: 3, explanation: "Dachman (2017): the idea was brainstormed during Fox's glowing-puck project.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Where does the 2017 article say Fox debuted the FoxTrax puck?", options: ["The 1996 NHL All-Star game", "The 1998 Stanley Cup Final", "A 1995 preseason game", "The 1994 Winter Olympics"], correctIndex: 0, explanation: "Dachman (2017): Fox debuted the FoxTrax puck at the 1996 NHL All-Star game.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "When does the 2017 article say Sportvision launched?", options: ["Fall 1996", "January 1998", "Summer 1999", "March 2001"], correctIndex: 1, explanation: "Dachman (2017): Sportvision launched in January 1998.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What did ESPN write in 2013 about how widely the line is used?", options: ["Only ESPN still uses the line", "Fox stopped using it in 2013", "Nearly every telecast uses it", "It is now used in all sports"], correctIndex: 2, explanation: "Hofheimer (2013): \"nearly every NFL and college football telecast uses a version of 1st and Ten.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "On which technologies does the 2015 SMT article say the line was built?", options: ["GPS and radio player tags", "Lidar and radar scanning", "Infrared and sonar sensors", "Chroma key and camera models"], correctIndex: 3, explanation: "Taylor (2015): \"chroma key and camera modeling technologies.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "How does the 2015 article say chroma key works?", options: ["Finds pixels to replace", "Measures ball speed", "Tracks player helmets", "Reads the scoreboard"], correctIndex: 0, explanation: "Taylor (2015): it \"works by identifying which pixels in a video frame should be replaced with graphics.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "In the 2015 account, what palette is chosen for each game?", options: ["The team colors", "Shades of grass", "Jersey numbers", "Sky and clouds"], correctIndex: 1, explanation: "Taylor (2015): \"we select all the different shades of grass.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What did Sportvision fit to the broadcaster's cameras, per the 2015 account?", options: ["Wireless microphone packs", "Extra tally lights on top", "Pan, tilt and zoom sensors", "Longer zoom lenses for range"], correctIndex: 2, explanation: "Taylor (2015): \"instruments that measure pan, tilt and zoom data\" so the graphic stays \"in perspective.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "By 2015, what does the SMT article say the line needed to run?", options: ["A full truck of gear on site", "A crew of ten operators", "Two satellite uplink trucks", "One person, a few computers"], correctIndex: 3, explanation: "Taylor (2015): \"now everything can be done by just one person and a small stack of computers.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "How does Chyron say Virtual Placement inserts virtual graphics?", options: ["Optical tracking, image processing", "Camera encoders fitted to every lens", "GPS tags worn by all the officials", "Radio tags sewn into the football"], correctIndex: 0, explanation: "Chyron (n.d.-b): \"Using optical tracking and image-processing algorithms.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What does Chyron say its Virtual 1st tools add in American football?", options: ["Player speed readouts", "First down markers", "Crowd noise meters", "Weather overlays"], correctIndex: 1, explanation: "Chyron (n.d.-b): \"red zone visuals, first down markers, and sponsor-branded graphics.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What does Chyron say Virtual Placement does not need?", options: ["A plain video input", "A graphics operator", "Encoders or extra hardware", "Any chroma keying at all"], correctIndex: 2, explanation: "Chyron (n.d.-b): \"no encoders or extra hardware.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Which tool did Chyron's November 2024 release add?", options: ["A Touchdown Replay tool", "A Penalty Flag tool", "A Coin Toss tool", "A Field Goal Target tool"], correctIndex: 3, explanation: "Chyron (2024): a \"Field Goal Target tool,\" red zone outline options and a Down and Distance module.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What does Chyron's Down and Distance module do as teams cross the 50-yard line?", options: ["Switches midfield automatically", "Mutes the stadium microphones", "Freezes the game clock on air", "Calls the next replay for air"], correctIndex: 0, explanation: "Chyron (2024): \"automatic midfield switching\" as \"teams cross the 50-yard line.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What does Vizrt call Viz Arena?", options: ["A replay and server suite", "An AR and virtual ad suite", "An intercom matrix frame", "A scope and picture monitor"], correctIndex: 1, explanation: "Vizrt (n.d.-c): \"The one-box AR and virtual advertising suite for live events.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What kind of calibration does Vizrt say Viz Arena uses?", options: ["Laser calibration", "Manual survey", "AI calibration", "GPS calibration"], correctIndex: 2, explanation: "Vizrt (n.d.-c): an \"Image based solution\" with \"AI calibration.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What does lesson 17 say about which tracking method networks use today?", options: ["All use camera sensors", "All use image tracking", "Fox uses Viz Arena", "No source read says"], correctIndex: 3, explanation: "Lesson 17: the 2015 account describes instrumented cameras and makers now describe image-based tracking; no source read says which any network uses.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What is the title of Fox's 2027 internship role in lesson 17?", options: ["Live Sports Virtual Enhancement Operator", "Live Sports Graphics Producer, Studio B", "Freelance Viz Operator, Studio Graphics", "Real-Time Graphics Artist, News"], correctIndex: 0, explanation: "Fox Corporation (2026a): the internship is for a \"Live Sports Virtual Enhancement Operator,\" Fox Sports work.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Which graphics will the Fox intern integrate during NFL and college football broadcasts?", options: ["Player tracking heat maps", "First and 10 markers", "Weather radar graphics", "Fantasy league scores"], correctIndex: 1, explanation: "Fox Corporation (2026a): \"first and 10 markers, plus down and distance graphics.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Which knowledge does the Fox internship list among its eligibility requirements?", options: ["Viz Trio scripting", "A union membership", "NFL and college rules", "A pilot's license"], correctIndex: 2, explanation: "Fox Corporation (2026a): \"Knowledge of NFL and College Football rules.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Where does the Fox internship say the roles are on site?", options: ["Los Angeles, California", "New York, New York", "Washington, D.C.", "Tempe, Arizona"], correctIndex: 3, explanation: "Fox Corporation (2026a): \"on-site in Tempe, Arizona,\" at the FOX Technology Center.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What pay does the Fox virtual enhancement internship state?", options: ["$20.00 per hour", "$40.00 per hour", "$65.18 per hour", "$26 USD, no unit"], correctIndex: 0, explanation: "Fox Corporation (2026a): \"$20.00 per hour.\"", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "What is the Fox internship's general application deadline?", options: ["June 21, 2027", "January 10, 2027", "January 2, 2028", "September 28, 2026"], correctIndex: 1, explanation: "Fox Corporation (2026a): \"General Application Deadline: Sunday, January 10, 2027.\" June 21, 2027 starts the program.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "How many hours a week does the Fox internship give for September through January?", options: ["Up to 40", "Exactly 8", "16 to 24", "Over 50"], correctIndex: 2, explanation: "Fox Corporation (2026a): up to 40 hours from June through August and 16 to 24 hours from September through January.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Does the Fox internship posting say where the line itself is inserted?", options: ["Yes, in the stadium", "Yes, in the truck", "Yes, in New York", "No, it does not say"], correctIndex: 3, explanation: "Lesson 17: the posting does not say, so the course does not either. It reasons only that the interns work at the Tempe center while the game is produced elsewhere.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Reasoned in lesson 17, what is the yellow line on a broadcast?", options: ["A graphic for viewers", "The official line to gain", "A referee's measurement", "A league rule marker"], correctIndex: 0, explanation: "Lesson 17: the yellow line is a graphic for viewers; the official line to gain is measured by a separate officiating system.", sourceLessonSlug: "the-first-and-ten-line" },
          { prompt: "Which lesson teaches the NFL's official line-to-gain measurement?", options: ["CREW-05 lesson 4", "CREW-07 lesson 9", "CREW-00 lesson 25", "CREW-04 lesson 22"], correctIndex: 1, explanation: "Lesson 17 links CREW-07's \"9 · NFL: challenges, the command center and the line to gain.\"", sourceLessonSlug: "the-first-and-ten-line" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: The floor and the support crew
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-utility-as-posted",
      title: "18 · The utility, as posted",
      section: "6 · The floor and the support crew",
      recallContent: [
        {
          prompt: "What does lesson 17 say the yellow line on a broadcast is, and what is it not?",
          answer: "A graphic for viewers. It is not the NFL's official line to gain, which a separate officiating system measures (CREW-07 lesson 9).",
        },
        {
          prompt: "Where does Fox's 2027 virtual enhancement internship put its interns, and what does it pay?",
          answer: "On site in Tempe, Arizona, at \"$20.00 per hour\" (Fox Corporation, 2026a). It is Fox Sports work.",
        },
      ],
      body: `${QR}

**Where this sits.** *Break Into Sports & Media Broadcasting* lesson "3 · The utility technician: your fastest way in (and why knots matter)" describes the utility as the crew's general-support hand and teaches knots. CREW-01, *Rigging for Stage and Broadcast Crews*, lesson "2 · The broadcast utility tech near the rig" sets out what carries over to anyone who works near a rig. This lesson adds what one employer posted for the job and repeats neither.

**One posting, read closely.** NFL Media's "Seasonal Part-Time Utility," at its studios in Inglewood, California, was first published October 23, 2026 (National Football League [NFL], 2026m; NFL, n.d.). It opens: "As a member of the stage crew the Utility position performs a wide range of tasks in support of the overall program production process. Under supervision of the Stage Manager, Director, and Operations team, Utilities work with technical staff" (NFL, 2026m). What it lists, grouped by area:

| Area | As posted |
|---|---|
| The set | "Moving large set pieces and monitors during stage resets"; "Set talent marks on floor at the direction of Stage Manager and Director" |
| Cameras | "Support Camera Operators in the setup of studio cameras and over-under cable pulls"; "Ability to troubleshoot cameras on stage (tally, prompter etc.)"; "Ability to change camera lenses" |
| Signal | "Understanding of signal path, routers, patch bays and bulkhead connectivity"; "Work with video engineer to determine correct camera routing" |
| Start and end of day | "Maintain continuity of all related camera equipment, including studio fax out and strike at end of day" |
| Stand-ins | "Assist production crew (i.e., Lighting, Director, etc.) as talent stand-ins on set" |
| Safety and trucks | "Pro-actively keep the studio floor safe for all tech traffic"; "Loading and off-loading of equipment trucks" |

**What it asks.** The required qualifications are a "Minimum of 5 years' experience working on a sound stage," the "Ability to lift 60lbs and set/strike studio gear" and the "Ability to over-under cables" (NFL, 2026m). The hours are "Less than 29 hours/week when needed," including early mornings, late nights, weekends and holidays. The pay line reads $46.54 USD at both ends of the range, with no unit; like every NFL figure in this course, it is printed as posted (lesson 4).

**Five years is this posting's ask.** That requirement belongs to one network studio posting on one date. It is not an industry rule, and this course does not teach it as one. *Break Into Sports & Media Broadcasting* lesson 3 calls utility "the most common paid entry point on a live sports crew" without a source, and that line has its own research check. No source read for this course shows a utility posting for a remote sports truck, so this course does not say what a truck's utility job asks.

**The school side.** ESPN's 2018 manual for schools that produce games for ESPN3 and ESPN+ lists "Grips/Camera Asst/Utilities," whose job is: "Pre Game: assist with the setting up of camera cables, audio cables, building and setting cameras and any other details that need to be handled during set up" (ESPN, 2018, p. 22). Its sample basketball schedule opens with "2:00PM CREW CALL - everyone including 3 Utilities hired by Union Venue" (p. 27). Reasoned from that line: on that one sample game, the venue's union supplied the utilities, not the production crew. One sample schedule is not a rule.

**Utilities and parabs.** Lesson 5 read a 2022 trade report in which ESPN "agreed to supply two A2s as parab operators, replacing two of the four utility personnel previously assigned to four parabs per game," and in which utility workers "are usually relied on for such tasks as cable management behind cameras and other semi-technical jobs" (Daley, 2022). That is one network's change in one season, as trade press reported it.

**Reasoned: what the job touches.** Put the posting and the manual side by side. The utility works for the floor (the stage manager and the director), for the cameras (cables, lenses, tally and prompter) and for the signal (routing, patch bays and bulkheads), and is there at the start and the end of the day. That is why one posting asks for signal path knowledge beside a 60-pound lift. The word "fax" in "studio fax out" is taken up in lesson 24.

:::reveal Under whose supervision does NFL Media's utility work? ||| "the Stage Manager, Director, and Operations team" (NFL, 2026m).

:::reveal How much sound stage experience does that posting require, and how does this course treat it? ||| A minimum of five years. It is that posting's ask on that date, not a rule for every utility job.

:::reveal In ESPN's sample schedule, who hired the three utilities? ||| The venue's union: "3 Utilities hired by Union Venue" (ESPN, 2018, p. 27).

## Sources
- ${NFL_UTILITY} Locator: opening paragraph; "Responsibilities"; "Required Qualifications"; hours paragraph; pay range paragraph.
- ${NFL_BOARD_API} Locator: \`first_published\` field for job 5461351008.
- ${ESPN_2018} Locator: "Grips/Camera Asst/Utilities," p. 22; "Sample Basketball Operations/Production Schedule," p. 27.
- ${DALEY_2022} Locator: paragraphs 4 and 6.`,
    },
    {
      slug: "camera-operators",
      title: "19 · Camera operators",
      section: "6 · The floor and the support crew",
      recallContent: [
        {
          prompt: "Which camera tasks does NFL Media's utility posting list?",
          answer: "Support camera operators in studio camera setup and over-under cable pulls, troubleshoot cameras on stage (tally, prompter), and change lenses (NFL, 2026m).",
        },
        {
          prompt: "In ESPN's manual, what do grips, camera assistants and utilities do before the game?",
          answer: "\"assist with the setting up of camera cables, audio cables, building and setting cameras\" and any other set-up details (ESPN, 2018, p. 22).",
        },
      ],
      body: `${QR}

**Where this sits.** CREW-04, *Cinema-look camera rig*, follows a camera operator's own rig into the truck in "22 · What the truck does with your picture" and "24 · Tally, intercom, return video and the questions to ask." This lesson reads what a network's manual asks of the camera chair on a game.

**ESPN's camera operator.** ESPN's 2018 manual lists the job in one line: "Camera operator; builds, operates, and tears down all camera equipment/cabling" (ESPN, 2018, p. 20). It asks more later: operators "Must have a complete understanding of the operation of your camera unit, including the ability to white balance, zoom, pan, tilt and focus. Knowledge of the standard camera assignments that are unique to each sport." (p. 22). Its minimum crew has "four cameras with an operator for each," and its minimum gear includes "Two handhelds, two handheld buildups (hard cam configuration)" (p. 2).

**Cameras have numbers and places.** ESPN numbers each camera by its position, sport by sport. For baseball with five cameras the manual gives (ESPN, 2018, p. 7):

| Camera | Position |
|---|---|
| 1 | Low 3rd |
| 2 | High Home |
| 3 | High 1st |
| 4 | Centerfield |
| 5 | Low 1st |

Reasoned: when ESPN's director says "ready 2" (lesson 23), the number names a camera at a position like these, so an operator who knows the standard assignments knows what shot the director expects.

An older, undated university handout says that for "unscripted programs such as talk shows and sports broadcasts," camera operators "have an assigned area or type of shot" (Vinovich, n.d.). The same handout says a sports director "may have as many as 12 cameras from which to select or up to 25 cameras during an event such as the Super Bowl." That is an old figure from an undated handout, not today's count.

**The camera meeting.** ESPN's director should "Create a coaches "headshot" sheet for camera operators. Always have a pre-game camera meeting" (ESPN, 2018, p. 24). The sample schedule for an 8:00 p.m. game has "6:00 PM Camera Meeting on site" and "7:15PM All Cameras at Game Positions- Bumps/Rehearsal" (p. 27).

**Who else touches the picture.** ESPN's crew list also has a video engineer, who "controls all incoming video signals; line patching and routing; "painting" cam video levels" (ESPN, 2018, p. 20). Lessons 9 and 10 read the V1's shading. On a camera isolate system, the video operator or the TD talks privately with one camera operator (Clear-Com, 2020c, p. 18; lesson 11). Reasoned from these: the operator frames, zooms and focuses, and in ESPN's list white balances; the levels are painted or shaded from the control room.

**A classroom rule.** A school classroom handout tells its student camera operators: "NEVER adjust shots when your camera is shown on the monitor!" (Montgomery County Public Schools [MCPS], n.d.-b). It is a classroom handout, not a network rule. On a show, the tally light that CREW-04 lesson 24 describes is how an operator knows the camera is on air.

**Robotic cameras.** Not every camera has an operator beside it. Lesson 11 read the robotics in the postings, and FOX 5 DC's per diem technician, a local news job, may work as "robotic camera" (Fox Television Stations, 2026).

:::reveal Which camera skills does ESPN's manual require of an operator? ||| White balance, zoom, pan, tilt and focus, plus knowing each sport's standard camera assignments (ESPN, 2018, p. 22).

:::reveal In ESPN's five-camera baseball plan, where is camera 2? ||| High Home (ESPN, 2018, p. 7).

:::reveal What does ESPN's director prepare for camera operators before the game? ||| A coaches "headshot" sheet, and always a pre-game camera meeting (ESPN, 2018, p. 24).

## Sources
- ${ESPN_2018} Locator: "Equipment Standards," p. 2; "Camera Placements," p. 7; "Production personnel positions and responsibilities," p. 20; "Camera Operators," p. 22; "Director Responsibilities," p. 24; "Sample Basketball Operations/Production Schedule," p. 27.
- ${VINOVICH} Locator: "Below-the-line personnel," item 3; "Director (DGA)".
- ${CC_2020C} Locator: "Cameras," p. 18.
- ${MCPS_B} Locator: "Cameras". A classroom handout.
- ${FTS_TECH} Locator: "What You'll Do". A local news job.`,
    },
    {
      slug: "the-stage-manager",
      title: "20 · The stage manager on the floor",
      section: "6 · The floor and the support crew",
      recallContent: [
        {
          prompt: "How does ESPN's manual describe a camera operator in its one-line list?",
          answer: "\"builds, operates, and tears down all camera equipment/cabling\" (ESPN, 2018, p. 20).",
        },
        {
          prompt: "When does ESPN's sample schedule hold the camera meeting, and when are cameras at game positions?",
          answer: "The camera meeting at 6:00 p.m.; all cameras at game positions for bumps and rehearsal at 7:15 p.m., for an 8:00 p.m. game (ESPN, 2018, p. 27).",
        },
      ],
      body: `${QR}

**The guild's written description.** Article 2 of the DGA's Freelance Live and Tape Television Agreement has a section for the stage manager (SM). As lesson 1 says, it is the guild's written description of the job, not the network sports contract. During rehearsals and performances the SM "shall serve as the sole liaison between the Director or Producer-Director, Associate Director and all persons and facilities in the studio, on location or on the stage" (DGA, 2020b, p. 17). The SM's floor duties include (pp. 17 to 18):

- "Relaying stage directions of the Associate Director, Director or Producer-Director"
- "Marking all positions on the set for performers"
- "Holding cards which give directions from the Director, Producer-Director or Associate Director and timing information to the cast"
- "Give all cues from the floor or, if on location, the equivalent thereof"

Two more lines settle what the SM owns: "It shall be the sole responsibility of the Stage Manager to make up and put before the camera the slate," and "The use of telex, IFB or other related communications or intercommunication device(s) will not replace the use of the Stage Manager." (DGA, 2020b, p. 18).

**ESPN's version.** ESPN's crew list says: "Stage Mgr. manages the announce booth, read cards, and booth traffic" (ESPN, 2018, p. 20). On a small crew ESPN folds the engineer in charge (EIC), the A2 and the SM into one person: "During the Broadcast you will be able to function as EIC and Stage Manager. You are the eyes and ears for your Producer/Director on the court or field. If any issues need to be handled you will be the first line of defense." (pp. 21 to 22). The sample schedule calls the "Stage Manager / Booth Coordinator" at 5:30 p.m., later than the 2:00 p.m. main crew call (p. 27).

**Stage managers on the job.** The DGA's write-up of a 2025 stage managers' panel reports their own words. One panelist, whose credits include many network sports telecasts, spoke about how "Stage Managers still play an important role even as new technology is introduced," recalling a Super Bowl at which a virtual monitor failed and he handed cards to the presenter. Another said: "I will always point out the need to make sure everyone is safe." Another prepares by getting "a floor plan" and learning "how do I get from here to the control room" (DGA, 2025). Lesson 3 quoted the same panel: with the producer and the director in a truck, "you are the leader on the ground."

**Hand signals and counts.** An older, undated university handout calls the job "Floor Manager/Stage Director (DGA)" and says the floor manager relays the director's commands "via hand signals since his or her voice would pick up on the live microphones" (Vinovich, n.d.). A school classroom handout tells its student floor manager to "Repeat all director calls, such as time countdown, for the studio" and, "At one minute before on air, hold a stand-by signal with your hand" (Montgomery County Public Schools [MCPS], n.d.-b). Both are teaching documents, not network rules.

**Who the SM works with.** NFL Media's utility works "Under supervision of the Stage Manager" (National Football League [NFL], 2026m; lesson 18). Fox News Media's audio operator, a news control-room job, performs "facility checks with A2 and Stage Manager for all mic and IFB positions in the studio before daily production begins" (Fox News Media, 2026b). FOX 5 DC's per diem technician, a local news job, lists "floor director" among its functions and asks for "experience with floor directing" (Fox Television Stations, 2026).

**Three titles.** "Stage manager" (the DGA, ESPN, NFL Media and Fox News), "floor manager" (the two handouts) and "floor director" (FOX 5 DC) name overlapping floor jobs. No source read for this course says the three titles are the same job, so this course uses each source's own title.

:::reveal Under the DGA's Article 2, can an IFB or an intercom replace the stage manager? ||| No: "The use of telex, IFB or other related communications or intercommunication device(s) will not replace the use of the Stage Manager" (DGA, 2020b, p. 18).

:::reveal What does ESPN's manual say the stage manager manages? ||| "the announce booth, read cards, and booth traffic" (ESPN, 2018, p. 20).

:::reveal Why does the older handout say the floor manager uses hand signals? ||| Because his or her voice "would pick up on the live microphones" (Vinovich, n.d.).

## Sources
- ${DGA_ART2} Locator: Art. 2, Sec. C, p. 17, opening clause and item 3(a); p. 18, items 3(e), 3(g), 3(h), 5 and 6.
- ${ESPN_2018} Locator: "Production personnel positions and responsibilities," p. 20; "EIC/Audio Assist," pp. 21 to 22; "Sample Basketball Operations/Production Schedule," p. 27.
- ${DGA_2025} Locator: panel write-up, the panelists' remarks on technology, safety and preparation.
- ${VINOVICH} Locator: "Below-the-line personnel," item 8.
- ${MCPS_B} Locator: "Floor Manager". A classroom handout.
- ${NFL_UTILITY} Locator: opening paragraph.
- ${FNM_AUDIO_OP} Locator: "A Snapshot of Your Responsibilities". A news control-room job.
- ${FTS_TECH} Locator: "What You'll Do"; qualifications. A local news job.`,
    },
    {
      slug: "the-lighting-director",
      title: "21 · The lighting director",
      section: "6 · The floor and the support crew",
      recallContent: [
        {
          prompt: "Under the DGA's Article 2, who has sole responsibility for the slate?",
          answer: "The stage manager, who makes it up and puts it before the camera (DGA, 2020b, p. 18).",
        },
        {
          prompt: "What does ESPN's combined EIC and stage manager become on the court or field?",
          answer: "\"the eyes and ears for your Producer/Director\" and \"the first line of defense\" (ESPN, 2018, pp. 21 to 22).",
        },
      ],
      body: `${QR}

**Where this sits.** CREW-03, *Light on Set*, teaches lighting itself; its lessons "2 · Who lights, and where training begins" and "23 · The television studio" cover who lights and the studio. This lesson reads one posting for the lighting director (LD) on a sports network's stages.

**NFL Media's lighting director.** NFL Media's "Seasonal Part-Time Lighting Director" was first published August 4, 2026 (National Football League [NFL], 2026i; NFL, n.d.). The LD will "Collaborate with show Directors, Producers, Scenic, and Video teams" and implement and maintain "the specific look of various productions between multiple stages and remote locations." The duties:

| Duty | As posted |
|---|---|
| The console | "Operation of ETC EOS consoles to playback and modify existing lighting looks" |
| Start of shift | "Perform tech checks at the beginning of each shift to check for burnouts, repositioning of equipment and overall stage & grid maintenance" |
| On air | "Monitor show productions from shading room and consult with video operator as necessary" |
| Problems | "Report technical and/or equipment issues to Studio Operations and Engineering teams" |

**What it asks.** Required: "5-10 years of experience working in a studio environment; live & recorded productions" and "Knowledge and understanding of lighting data protocols and networks, DMX-512, SACN and ETC NET3." The qualifications include the "Ability to draft, read, and interpret lighting plots"; "Auto-Cad, Vectorworks, ETC Concert and Lightwright experience"; "Advanced ETC EOS programming training"; and "Advanced ETC NET3 Networking training." The physical demands: the "Ability to work high above the ground, on lifts and/or ladders," and "Must be able to lift 75lbs for up to 30 minutes at a time." The hours are "Less than 29 hours/week when needed." The pay line reads $68.99 USD at both ends, with no unit, printed as posted (NFL, 2026i). ETC is a lighting maker, named here only because the posting names it. DMX on an XLR cable is in CREW-00 lesson "17 · Same plug, different signal: intercom and DMX on XLR."

**Light and the picture.** The LD watches the show "from shading room" with the video operator (lesson 3). Fox News Media's senior video operator, a news control-room job, will "Collaborate with directors, lighting, and make-up to troubleshoot and make adjustments to ensure the best possible on-air look" (Fox News Media, 2026d). Reasoned from both postings: the lighting chair and the video chair share the look. What the LD lights, the V1 shades (lessons 9 and 10), so a change in one shows up in the other.

**A studio chair.** An older, undated university handout says the TV lighting director "is concerned mainly with lighting a particular set that is used repeatedly on a show" and works "predominately in a studio and rarely work outdoors on location" (Vinovich, n.d.). ESPN's school-production crew list names no lighting director; its director's checklist says only "Notice the arena lighting. Where are the dark areas." (ESPN, 2018, pp. 20 and 24). Reasoned from these three sources: in every source read for this course, the lighting director is a studio chair. No source read for this course describes a lighting director on a remote sports truck crew, so this course does not say whether trucks carry one.

:::reveal What does NFL Media's lighting director check at the start of each shift? ||| Burnouts, equipment that has been repositioned, and overall stage and grid maintenance (NFL, 2026i).

:::reveal Which lighting data protocols does the NFL posting name? ||| DMX-512, sACN (written "SACN" in the posting) and ETC NET3 (NFL, 2026i).

:::reveal What does ESPN's manual tell the director about arena lighting? ||| "Notice the arena lighting. Where are the dark areas." (ESPN, 2018, p. 24).

## Sources
- ${NFL_LD} Locator: opening paragraph; "Responsibilities"; "Required Qualifications"; "Qualifications"; "Physical Demands"; hours and pay range paragraphs.
- ${NFL_BOARD_API} Locator: \`first_published\` field for job 5378747008.
- ${FNM_SENIOR_VIDEO} Locator: "A Snapshot of Your Responsibilities". A news control-room job.
- ${VINOVICH} Locator: "Lighting Director (IBEW)".
- ${ESPN_2018} Locator: "Production personnel positions and responsibilities," p. 20; "Director Responsibilities," p. 24.`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · The floor and the support crew",
      section: "6 · The floor and the support crew",
      body: "A graded check on the utility, camera operators, the stage manager and the lighting director. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Which employer's utility posting does lesson 18 read closely?", options: ["NFL Media's studios", "Fox News's newsroom", "ESPN's school crews", "Game Creek's trucks"], correctIndex: 0, explanation: "Lesson 18 reads NFL Media's \"Seasonal Part-Time Utility\" at its Inglewood studios (NFL, 2026m).", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "When was NFL Media's utility posting first published?", options: ["June 26, 2026", "October 23, 2026", "August 4, 2026", "September 29, 2026"], correctIndex: 1, explanation: "NFL (n.d.): first published October 23, 2026. June 26 is the Audio 2 and V1 date, August 4 the lighting director's.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Where are the studios that NFL Media's utility posting is for?", options: ["Tempe, Arizona, USA", "Secaucus, New Jersey", "Inglewood, California", "Stamford, Connecticut"], correctIndex: 2, explanation: "NFL (2026m): NFL Media's studios in Inglewood, California.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Under whose supervision does NFL Media's utility work?", options: ["The A1 and the A2 alone", "The talent and their agents", "The league's game officials", "SM, director and operations"], correctIndex: 3, explanation: "NFL (2026m): \"Under supervision of the Stage Manager, Director, and Operations team.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "What does the NFL utility move during stage resets?", options: ["Large set pieces and monitors", "Satellite and fiber bookings", "Replay clips and playlists", "Graphics templates and fonts"], correctIndex: 0, explanation: "NFL (2026m): \"Moving large set pieces and monitors during stage resets.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "At whose direction does the NFL utility set talent marks?", options: ["The A1 and the TOC operator", "Stage manager and director", "The sponsor and the league", "The talent and their agent"], correctIndex: 1, explanation: "NFL (2026m): \"Set talent marks on floor at the direction of Stage Manager and Director.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Which cable skill does the NFL utility posting name twice?", options: ["Soldering XLR connectors", "Splicing fiber in the field", "Over-under cable pulls", "Terminating triax heads"], correctIndex: 2, explanation: "NFL (2026m): \"over-under cable pulls\" in the duties and the \"Ability to over-under cables\" in the requirements.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "What camera problems must the NFL utility be able to troubleshoot on stage?", options: ["Shading and gamma", "Lens metadata files", "Fiber transmission", "Tally and prompter"], correctIndex: 3, explanation: "NFL (2026m): \"Ability to troubleshoot cameras on stage (tally, prompter etc.).\" Shading belongs to the V1 (lesson 9).", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Which camera part does the NFL utility posting say the utility must be able to change?", options: ["Camera lenses", "Camera sensors", "Scene files", "Fiber cores"], correctIndex: 0, explanation: "NFL (2026m): \"Ability to change camera lenses.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "With whom does the NFL utility work to find the correct camera routing?", options: ["The play-by-play voice", "The video engineer", "The graphics designer", "The team's equipment staff"], correctIndex: 1, explanation: "NFL (2026m): \"Work with video engineer to determine correct camera routing.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Which signal knowledge does the NFL utility posting ask for?", options: ["Loudness, LKFS and true peak", "SCTE-35 cues and ad breaks", "Routers, patch bays, bulkheads", "Viz templates and data feeds"], correctIndex: 2, explanation: "NFL (2026m): \"Understanding of signal path, routers, patch bays and bulkhead connectivity.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "What does the NFL utility maintain at the end of the day?", options: ["The crew's payroll records", "The show's rundown archive", "The talent's IFB earpieces", "Camera continuity and strike"], correctIndex: 3, explanation: "NFL (2026m): \"Maintain continuity of all related camera equipment, including studio fax out and strike at end of day.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "In what role may the NFL utility assist the crew on set?", options: ["As talent stand-ins", "As the show's director", "As the A1 at the desk", "As a game referee"], correctIndex: 0, explanation: "NFL (2026m): \"Assist production crew (i.e., Lighting, Director, etc.) as talent stand-ins on set.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "What must the NFL utility keep safe for all tech traffic?", options: ["The parking lot", "The studio floor", "The press box", "The team bench"], correctIndex: 1, explanation: "NFL (2026m): \"Pro-actively keep the studio floor safe for all tech traffic.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Which job with equipment trucks does the NFL utility posting list?", options: ["Driving them on tour", "Wiring their generators", "Loading and off-loading", "Booking their satellites"], correctIndex: 2, explanation: "NFL (2026m): \"Loading and off-loading of equipment trucks.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "How much sound stage experience does NFL Media's utility posting require?", options: ["None at all", "At least 1 year", "At least 10 years", "At least 5 years"], correctIndex: 3, explanation: "NFL (2026m): \"Minimum of 5 years' experience working on a sound stage.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "How much must the NFL utility be able to lift?", options: ["60 pounds", "25 pounds", "75 pounds", "100 pounds"], correctIndex: 0, explanation: "NFL (2026m): \"Ability to lift 60lbs and set/strike studio gear.\" The 75 is the lighting director's figure (lesson 21).", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "What hours does the NFL utility posting give?", options: ["40 a week, all year round", "Under 29 a week, as needed", "60 a week in the season", "Weekends only, 8 a day"], correctIndex: 1, explanation: "NFL (2026m): \"Less than 29 hours/week when needed,\" including early mornings, late nights, weekends and holidays.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "How does this course print the NFL utility's posted pay?", options: ["$46.54 an hour", "$46,540 a year", "$46.54 USD, no unit", "$46.54 a day"], correctIndex: 2, explanation: "Lesson 18: the pay line reads $46.54 USD at both ends with no unit; the course adds none.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "How does lesson 18 treat the posting's five-year requirement?", options: ["As an industry rule", "As a union minimum", "As a federal standard", "As that posting's ask"], correctIndex: 3, explanation: "Lesson 18: it belongs to one network studio posting on one date; it is not an industry rule.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Why does lesson 18 not say what a truck utility job asks?", options: ["No truck posting was read", "Trucks have no utilities", "Unions forbid saying so", "It is the same as studio"], correctIndex: 0, explanation: "Lesson 18: no source read for this course shows a utility posting for a remote sports truck.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "In ESPN's sample schedule, who hired the three utilities?", options: ["ESPN in Bristol", "The venue's union", "The visiting team", "The truck vendor"], correctIndex: 1, explanation: "ESPN (2018, p. 27): \"3 Utilities hired by Union Venue.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "What does lesson 18 conclude from that one schedule line?", options: ["Unions hire all utilities", "ESPN never hires utilities", "It is one game, not a rule", "Venues ban network crews"], correctIndex: 2, explanation: "Reasoned in lesson 18: on that one sample game the venue's union supplied the utilities; one sample schedule is not a rule.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "What did ESPN's 2022 change put A2s in place of, on the parabs?", options: ["Two of four camera ops", "Two of four replay ops", "Two of four floor managers", "Two of four utilities"], correctIndex: 3, explanation: "Daley (2022): ESPN supplied two A2s as parab operators, replacing two of the four utility personnel previously assigned to four parabs per game.", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "What does the 2022 report say utility workers are usually relied on for?", options: ["Cable management behind cameras", "Mixing the announcers' audio", "Calling shots to the cameras", "Shading the cameras on air"], correctIndex: 0, explanation: "Daley (2022): \"cable management behind cameras and other semi-technical jobs.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Which cables do ESPN's grips, camera assistants and utilities help set up?", options: ["Fiber and satellite feeds", "Camera and audio cables", "Power and lighting rigs", "Rigging and truss chains"], correctIndex: 1, explanation: "ESPN (2018, p. 22): \"assist with the setting up of camera cables, audio cables, building and setting cameras.\"", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "Reasoned in lesson 18, which three things does the utility work for?", options: ["Ads, sponsors and talent", "Scripts, notes and logs", "Floor, cameras and signal", "Stats, scores and clocks"], correctIndex: 2, explanation: "Lesson 18: the floor (the SM and the director), the cameras (cables, lenses, tally and prompter) and the signal (routing, patch bays and bulkheads).", sourceLessonSlug: "the-utility-as-posted" },
          { prompt: "How does ESPN's position list describe the camera operator?", options: ["Paints all the video levels", "Calls the shots to the TD", "Rolls the replays on cue", "Builds, operates, tears down"], correctIndex: 3, explanation: "ESPN (2018, p. 20): \"builds, operates, and tears down all camera equipment/cabling.\" Painting levels is the video engineer's.", sourceLessonSlug: "camera-operators" },
          { prompt: "Which of these is on ESPN's list of camera operator skills?", options: ["White balance", "Audio mixing", "Clip editing", "Line patching"], correctIndex: 0, explanation: "ESPN (2018, p. 22): white balance, zoom, pan, tilt and focus. Line patching belongs to the video engineer (p. 20).", sourceLessonSlug: "camera-operators" },
          { prompt: "Besides camera skills, what knowledge does ESPN ask of operators?", options: ["Each league's pay scale for crew", "Each sport's camera assignments", "Each truck's intercom wiring", "Each sponsor's logo guidelines"], correctIndex: 1, explanation: "ESPN (2018, p. 22): \"Knowledge of the standard camera assignments that are unique to each sport.\"", sourceLessonSlug: "camera-operators" },
          { prompt: "How many cameras, with how many operators, does ESPN's minimum crew have?", options: ["Two, both unmanned", "Six, one operator each", "Four, one operator each", "Eight, two per operator"], correctIndex: 2, explanation: "ESPN (2018, p. 2): \"four cameras with an operator for each.\"", sourceLessonSlug: "camera-operators" },
          { prompt: "Which camera build does ESPN's minimum gear include?", options: ["Cable cams on wires", "Drone cameras aloft", "Robotic rail dollies", "Handheld buildups"], correctIndex: 3, explanation: "ESPN (2018, p. 2): \"Two handhelds, two handheld buildups (hard cam configuration).\"", sourceLessonSlug: "camera-operators" },
          { prompt: "What does ESPN call a handheld buildup's configuration?", options: ["Hard cam", "Soft cam", "Robo cam", "Sky cam"], correctIndex: 0, explanation: "ESPN (2018, p. 2): \"handheld buildups (hard cam configuration).\"", sourceLessonSlug: "camera-operators" },
          { prompt: "How does ESPN number cameras?", options: ["By serial number", "By position, per sport", "By operator's age", "By order of purchase"], correctIndex: 1, explanation: "ESPN (2018, p. 7) numbers each camera by its position, sport by sport.", sourceLessonSlug: "camera-operators" },
          { prompt: "In ESPN's five-camera baseball plan, where is camera 1?", options: ["High Home", "Centerfield", "Low 3rd", "Low 1st"], correctIndex: 2, explanation: "ESPN (2018, p. 7): 1 Low 3rd, 2 High Home, 3 High 1st, 4 Centerfield, 5 Low 1st.", sourceLessonSlug: "camera-operators" },
          { prompt: "In ESPN's five-camera baseball plan, which camera is in centerfield?", options: ["Camera 1", "Camera 2", "Camera 5", "Camera 4"], correctIndex: 3, explanation: "ESPN (2018, p. 7): camera 4 is Centerfield.", sourceLessonSlug: "camera-operators" },
          { prompt: "In ESPN's five-camera baseball plan, where is camera 3?", options: ["High 1st", "Low 3rd", "High Home", "Low 1st"], correctIndex: 0, explanation: "ESPN (2018, p. 7): camera 3 is High 1st.", sourceLessonSlug: "camera-operators" },
          { prompt: "Reasoned in lesson 19, what does the number in \"ready 2\" name?", options: ["A replay clip on a server", "A camera at a position", "A graphic in the playlist", "A channel on the intercom"], correctIndex: 1, explanation: "Lesson 19: the number names a camera at a position, so an operator who knows the standard assignments knows the shot expected.", sourceLessonSlug: "camera-operators" },
          { prompt: "What does the older handout say camera operators have on unscripted sports shows?", options: ["A script for every shot", "No fixed position at all", "An assigned area or shot", "A shot list from talent"], correctIndex: 2, explanation: "Vinovich (n.d.): camera operators \"have an assigned area or type of shot.\"", sourceLessonSlug: "camera-operators" },
          { prompt: "How many cameras does the older handout say a Super Bowl director may have?", options: ["Exactly 4", "Up to 12", "Over 100", "Up to 25"], correctIndex: 3, explanation: "Vinovich (n.d.): as many as 12 in sports, or up to 25 during an event such as the Super Bowl.", sourceLessonSlug: "camera-operators" },
          { prompt: "How does lesson 19 treat the handout's camera counts?", options: ["As an old, undated figure", "As the current NFL count", "As ESPN's school minimum", "As a union crew rule"], correctIndex: 0, explanation: "Lesson 19: an old figure from an undated handout, not today's count.", sourceLessonSlug: "camera-operators" },
          { prompt: "What does ESPN's director create for camera operators?", options: ["A lens and filter chart", "A coaches headshot sheet", "A payroll and hours sheet", "A replay clip playlist"], correctIndex: 1, explanation: "ESPN (2018, p. 24): \"Create a coaches \"headshot\" sheet for camera operators.\"", sourceLessonSlug: "camera-operators" },
          { prompt: "Which meeting does ESPN tell the director always to have?", options: ["A post-game sponsor meeting", "A weekly union meeting", "A pre-game camera meeting", "A halftime talent meeting"], correctIndex: 2, explanation: "ESPN (2018, p. 24): \"Always have a pre-game camera meeting.\"", sourceLessonSlug: "camera-operators" },
          { prompt: "When is the camera meeting in ESPN's sample schedule?", options: ["2:00 p.m.", "4:30 p.m.", "7:00 p.m.", "6:00 p.m."], correctIndex: 3, explanation: "ESPN (2018, p. 27): \"6:00 PM Camera Meeting on site.\" 2:00 is the crew call, 4:30 the full show fax and 7:00 the transmission check-in.", sourceLessonSlug: "camera-operators" },
          { prompt: "What happens at 7:15 p.m. in ESPN's sample schedule?", options: ["Cameras at game positions", "The main crew is called", "The full show fax runs", "Transmission check-in"], correctIndex: 0, explanation: "ESPN (2018, p. 27): \"7:15PM All Cameras at Game Positions- Bumps/Rehearsal.\"", sourceLessonSlug: "camera-operators" },
          { prompt: "Who on ESPN's crew list paints the camera video levels?", options: ["The camera operator", "The video engineer", "The stage manager", "The graphics op"], correctIndex: 1, explanation: "ESPN (2018, p. 20): the video engineer controls incoming video, line patching and routing, and \"painting\" cam video levels.", sourceLessonSlug: "camera-operators" },
          { prompt: "Who usually talks privately with one camera on a camera isolate system?", options: ["The producer or the AD", "The A1 or the A2 alone", "The video operator or TD", "The talent on the set"], correctIndex: 2, explanation: "Clear-Com (2020c, p. 18): \"usually the video operator or technical director.\"", sourceLessonSlug: "camera-operators" },
          { prompt: "What does the school handout tell camera operators never to do?", options: ["Talk to the director on headset", "White balance before the show", "Wear a headset during the show", "Adjust shots while on the monitor"], correctIndex: 3, explanation: "MCPS (n.d.-b): \"NEVER adjust shots when your camera is shown on the monitor!\" A classroom handout, not a network rule.", sourceLessonSlug: "camera-operators" },
          { prompt: "How does lesson 19 classify the \"NEVER adjust shots\" line?", options: ["A classroom handout's rule", "A DGA contract clause", "An ESPN network policy", "A federal safety rule"], correctIndex: 0, explanation: "Lesson 19: it is a classroom handout, not a network rule.", sourceLessonSlug: "camera-operators" },
          { prompt: "On a show, what tells an operator the camera is on air, per lesson 19?", options: ["The zoom rocker", "The tally light", "The lens hood", "The battery LED"], correctIndex: 1, explanation: "Lesson 19 points to the tally light that CREW-04 lesson 24 describes.", sourceLessonSlug: "camera-operators" },
          { prompt: "Which FOX 5 DC function shows that not every camera has an operator beside it?", options: ["Floor director", "Audio operator", "Robotic camera", "Master control"], correctIndex: 2, explanation: "Lesson 19: FOX 5 DC's per diem technician, a local news job, may work as \"robotic camera\" (Fox Television Stations, 2026).", sourceLessonSlug: "camera-operators" },
          { prompt: "Under Article 2, what is the stage manager between the director and the floor?", options: ["A backup director", "A union steward", "A sponsor's agent", "The sole liaison"], correctIndex: 3, explanation: "DGA (2020b, p. 17): the SM \"shall serve as the sole liaison\" between the director, the AD and all persons and facilities in the studio, on location or on the stage.", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Whose stage directions does the SM relay under Article 2?", options: ["The AD's and the director's", "The sponsor's and the league's", "The talent agent's and coach's", "The A1's and the V1's only"], correctIndex: 0, explanation: "DGA (2020b, p. 17): \"Relaying stage directions of the Associate Director, Director or Producer-Director.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Which floor task does Article 2 give the stage manager?", options: ["Shading the studio cameras", "Marking performers' positions", "Mixing the program audio", "Building graphics templates"], correctIndex: 1, explanation: "DGA (2020b, p. 18): \"Marking all positions on the set for performers.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "What do the SM's cards give the cast, under Article 2?", options: ["Scores and statistics", "Pay and call times", "Directions and timing", "Lyrics and scripts"], correctIndex: 2, explanation: "DGA (2020b, p. 18): cards \"which give directions from the Director, Producer-Director or Associate Director and timing information to the cast.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Under Article 2, who gives all cues from the floor?", options: ["The technical director", "The A2 on the floor", "The floor utility", "The stage manager"], correctIndex: 3, explanation: "DGA (2020b, p. 18): \"Give all cues from the floor or, if on location, the equivalent thereof.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Under Article 2, whose sole responsibility is the slate?", options: ["The stage manager's", "The director's own", "The AD's alone", "The camera operator's"], correctIndex: 0, explanation: "DGA (2020b, p. 18): \"It shall be the sole responsibility of the Stage Manager to make up and put before the camera the slate.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "What does Article 2 say telex, IFB or intercom will not do?", options: ["Reach the talent on air", "Replace the stage manager", "Work in a remote truck", "Carry the director's voice"], correctIndex: 1, explanation: "DGA (2020b, p. 18): they \"will not replace the use of the Stage Manager.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Why does lesson 20 call Article 2 a written description and not the sports contract?", options: ["Article 2 was repealed in 2020", "Stage managers have no union", "Sports runs under other deals", "ESPN wrote Article 2 itself"], correctIndex: 2, explanation: "Lessons 1 and 20: network sports work runs under separate agreements whose duty text was not read for this course.", sourceLessonSlug: "the-stage-manager" },
          { prompt: "What does ESPN's crew list say the stage manager manages?", options: ["Replay room and its servers", "Truck power and generators", "Graphics and the score bug", "Announce booth and booth traffic"], correctIndex: 3, explanation: "ESPN (2018, p. 20): \"manages the announce booth, read cards, and booth traffic.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "On a small ESPN crew, which two jobs does one person combine with the SM?", options: ["EIC and A2", "TD and AD", "V1 and V2", "PA and BC"], correctIndex: 0, explanation: "ESPN (2018, pp. 21 to 22): the EIC/Audio Assist \"will be able to function as EIC and Stage Manager.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "What does ESPN's combined EIC and SM become for the producer and director?", options: ["Their final word", "Their eyes and ears", "Their backup voice", "Their stand-in"], correctIndex: 1, explanation: "ESPN (2018, pp. 21 to 22): \"You are the eyes and ears for your Producer/Director on the court or field.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Which line of defense does ESPN call the combined EIC and SM?", options: ["The last", "The second", "The first", "The only"], correctIndex: 2, explanation: "ESPN (2018, p. 22): \"If any issues need to be handled you will be the first line of defense.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "When does ESPN's sample schedule call the stage manager?", options: ["2:00 p.m.", "6:00 p.m.", "7:15 p.m.", "5:30 p.m."], correctIndex: 3, explanation: "ESPN (2018, p. 27): \"5:30PM CREW CALL - Stage Manager / Booth Coordinator,\" later than the 2:00 p.m. main call.", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Who shares the stage manager's 5:30 p.m. call in ESPN's sample?", options: ["The booth coordinator", "The camera operators", "The three utilities", "The TD and the AD"], correctIndex: 0, explanation: "ESPN (2018, p. 27): \"Stage Manager / Booth Coordinator.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "In the 2025 DGA panel account, what failed at a Super Bowl before the SM handed over cards?", options: ["A wireless mic", "A virtual monitor", "A camera's tally", "The truck's power"], correctIndex: 1, explanation: "DGA (2025): a virtual monitor failed and the stage manager handed cards to the presenter.", sourceLessonSlug: "the-stage-manager" },
          { prompt: "What did one DGA panelist say they will always point out?", options: ["That the script is final", "That the clock is accurate", "That everyone must be safe", "That the cards are ready"], correctIndex: 2, explanation: "DGA (2025): \"I will always point out the need to make sure everyone is safe.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "How does one DGA panelist prepare for a show?", options: ["Reads the rate card twice", "Meets the sponsors first", "Calls the league office", "Gets a floor plan and route"], correctIndex: 3, explanation: "DGA (2025): getting \"a floor plan\" and learning \"how do I get from here to the control room.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Why does the older handout say the floor manager uses hand signals?", options: ["The voice would be on the mics", "The headsets often fail", "The talent cannot hear", "Its union contract says so"], correctIndex: 0, explanation: "Vinovich (n.d.): the voice \"would pick up on the live microphones.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "What does the school handout tell the floor manager to repeat?", options: ["All the talent's lines", "All the director's calls", "All the camera numbers", "All the sponsor's spots"], correctIndex: 1, explanation: "MCPS (n.d.-b): \"Repeat all director calls, such as time countdown, for the studio.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "One minute before air, what does the school handout's floor manager hold?", options: ["A countdown clock card", "The talent's microphone", "A stand-by hand signal", "The camera's lens cap"], correctIndex: 2, explanation: "MCPS (n.d.-b): \"At one minute before on air, hold a stand-by signal with your hand.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "With whom does Fox News Media's audio operator do facility checks?", options: ["The TD and the AD", "The V1 and the LD", "The TOC and master", "The A2 and the SM"], correctIndex: 3, explanation: "Fox News Media (2026b), a news control-room job: \"facility checks with A2 and Stage Manager for all mic and IFB positions.\"", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Which floor title does the FOX 5 DC posting use?", options: ["Floor director", "Floor manager", "Stage director", "Floor captain"], correctIndex: 0, explanation: "Fox Television Stations (2026), a local news job: \"floor director.\" Floor manager is the handouts' title.", sourceLessonSlug: "the-stage-manager" },
          { prompt: "Which sources use the title \"floor manager,\" per lesson 20?", options: ["The DGA's Article 2", "The two handouts", "NFL Media's postings", "The FOX 5 DC post"], correctIndex: 1, explanation: "Lesson 20: \"floor manager\" comes from the older university handout and the school handout.", sourceLessonSlug: "the-stage-manager" },
          { prompt: "How does lesson 20 handle the three floor titles?", options: ["Treats all three as one", "Uses only \"floor director\"", "Uses each source's title", "Drops the floor titles"], correctIndex: 2, explanation: "Lesson 20: no source read says the three titles are the same job, so the course uses each source's own title.", sourceLessonSlug: "the-stage-manager" },
          { prompt: "When was NFL Media's lighting director posting first published?", options: ["June 26, 2026", "October 23, 2026", "July 10, 2026", "August 4, 2026"], correctIndex: 3, explanation: "NFL (n.d.): first published August 4, 2026 (NFL, 2026i).", sourceLessonSlug: "the-lighting-director" },
          { prompt: "With which teams does NFL Media's lighting director collaborate?", options: ["Directors, producers, scenic, video", "Sponsors, sales and marketing staff", "Coaches, players and team doctors", "League officials and the referees"], correctIndex: 0, explanation: "NFL (2026i): \"Collaborate with show Directors, Producers, Scenic, and Video teams.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Where does the NFL lighting director keep each production's look?", options: ["Across the 32 teams' stadiums", "Across stages and remote sites", "Across each sponsor's ads", "Across every talent's wardrobe"], correctIndex: 1, explanation: "NFL (2026i): \"the specific look of various productions between multiple stages and remote locations.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Which console does the NFL lighting director posting name?", options: ["Calrec Apollo", "SSL S500", "ETC EOS", "Viz Trio"], correctIndex: 2, explanation: "NFL (2026i): \"Operation of ETC EOS consoles.\" Calrec and SSL make audio desks; Viz Trio plays graphics.", sourceLessonSlug: "the-lighting-director" },
          { prompt: "What does the NFL lighting director do with ETC EOS consoles?", options: ["Mix the announcers' audio", "Route the camera signals", "Build the opening graphics", "Play back and modify looks"], correctIndex: 3, explanation: "NFL (2026i): \"playback and modify existing lighting looks.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "When does the NFL lighting director perform tech checks?", options: ["At the start of each shift", "Once a season, in summer", "After each broadcast", "During each commercial"], correctIndex: 0, explanation: "NFL (2026i): \"Perform tech checks at the beginning of each shift.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Which of these does the NFL lighting director check for at the start of a shift?", options: ["Ratings", "Burnouts", "Payroll", "Weather"], correctIndex: 1, explanation: "NFL (2026i): \"check for burnouts, repositioning of equipment and overall stage & grid maintenance.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Which NFL lighting director duty ties the lighting chair to the video chair?", options: ["Booking the satellite feeds", "Setting the talent's IFB", "Monitoring from shading room", "Building the score bug"], correctIndex: 2, explanation: "NFL (2026i): \"Monitor show productions from shading room and consult with video operator as necessary.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "To whom does the NFL lighting director report technical issues?", options: ["The league's officials", "The talent's agents", "The sponsor's staff", "Studio Ops and Engineering"], correctIndex: 3, explanation: "NFL (2026i): \"Report technical and/or equipment issues to Studio Operations and Engineering teams.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "How much studio experience does the NFL lighting director posting require?", options: ["5 to 10 years", "1 to 2 years", "None required", "20 or more years"], correctIndex: 0, explanation: "NFL (2026i): \"5-10 years of experience working in a studio environment; live & recorded productions.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Which data protocols does the NFL lighting director posting name?", options: ["Dante, AES67 and MADI", "DMX-512, sACN, ETC NET3", "SCTE-35 and SMPTE 2110", "RS-422 and GPI tally"], correctIndex: 1, explanation: "NFL (2026i): \"DMX-512, SACN and ETC NET3.\" Dante and AES67 are audio networking (lesson 7).", sourceLessonSlug: "the-lighting-director" },
          { prompt: "What drawing skill does the NFL lighting director posting ask for?", options: ["Truck floor plans", "Camera storyboards", "Lighting plots", "Graphics layouts"], correctIndex: 2, explanation: "NFL (2026i): \"Ability to draft, read, and interpret lighting plots.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Which software does the NFL lighting director posting list?", options: ["After Effects and Photoshop", "Pro Tools and Logic Pro", "iNews and IPDirector", "Vectorworks and Lightwright"], correctIndex: 3, explanation: "NFL (2026i): \"Auto-Cad, Vectorworks, ETC Concert and Lightwright experience.\" After Effects is the graphics designer's (lesson 15).", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Where must the NFL lighting director be able to work?", options: ["High above ground, on lifts", "At floor level only, seated", "Up to six feet, no higher", "From the shading room only"], correctIndex: 0, explanation: "NFL (2026i): \"Ability to work high above the ground, on lifts and/or ladders.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "How much must the NFL lighting director be able to lift, and for how long?", options: ["25 lbs, up to 10 minutes", "75 lbs, up to 30 minutes", "60 lbs, for a full shift", "100 lbs, up to an hour"], correctIndex: 1, explanation: "NFL (2026i): \"Must be able to lift 75lbs for up to 30 minutes at a time.\" The 60 pounds is the utility's (lesson 18).", sourceLessonSlug: "the-lighting-director" },
          { prompt: "How does this course print the NFL lighting director's posted pay?", options: ["$68.99 an hour", "$68,990 a year", "$68.99 USD, no unit", "$68.99 a day"], correctIndex: 2, explanation: "Lesson 21: the pay line reads $68.99 USD at both ends with no unit, printed as posted.", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Why does lesson 21 name ETC?", options: ["It is the best maker", "The DGA requires it", "ESPN's manual uses it", "The posting names it"], correctIndex: 3, explanation: "Lesson 21: ETC is a lighting maker, named only because the posting names it.", sourceLessonSlug: "the-lighting-director" },
          { prompt: "What does Fox News Media's senior video operator work with lighting to ensure?", options: ["The best on-air look", "The show's rundown", "The crew's schedules", "The talent's scripts"], correctIndex: 0, explanation: "Fox News Media (2026d), a news control-room job: \"Collaborate with directors, lighting, and make-up\" to \"ensure the best possible on-air look.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Reasoned in lesson 21, how do the lighting and video chairs relate?", options: ["They never speak", "They share the look", "They swap each week", "One hires the other"], correctIndex: 1, explanation: "Lesson 21: the LD lights and the V1 shades, so a change in one shows up in the other.", sourceLessonSlug: "the-lighting-director" },
          { prompt: "What does the older handout say a TV lighting director mainly lights?", options: ["Outdoor stadium games", "Touring concert stages", "A set used repeatedly", "Film location shoots"], correctIndex: 2, explanation: "Vinovich (n.d.): \"lighting a particular set that is used repeatedly on a show,\" mostly in a studio.", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Does ESPN's school-production crew list name a lighting director?", options: ["Yes, one per game", "Yes, two per game", "Yes, from the venue", "No, it names none"], correctIndex: 3, explanation: "ESPN (2018, p. 20) names no lighting director; the director's checklist says only \"Notice the arena lighting.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "What does ESPN's director checklist ask about arena lighting?", options: ["Where the dark areas are", "Who the venue's LD is", "What the bulbs cost", "When the lights go out"], correctIndex: 0, explanation: "ESPN (2018, p. 24): \"Notice the arena lighting. Where are the dark areas.\"", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Why does lesson 21 not say whether trucks carry a lighting director?", options: ["Trucks are lit by the venue", "No source read shows one", "The DGA bars the role", "ESPN forbids truck LDs"], correctIndex: 1, explanation: "Lesson 21: no source read for the course describes a lighting director on a remote sports truck crew.", sourceLessonSlug: "the-lighting-director" },
          { prompt: "Which course teaches lighting itself, per lesson 21?", options: ["CREW-02 (Sound Craft)", "CREW-00 (Cables)", "CREW-03 (Light on Set)", "CREW-04 (Camera Rig)"], correctIndex: 2, explanation: "Lesson 21 links CREW-03, Light on Set, lessons 2 and 23.", sourceLessonSlug: "the-lighting-director" },
        ],
      },
    },
  ],
};
