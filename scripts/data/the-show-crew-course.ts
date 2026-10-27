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
  ],
};
