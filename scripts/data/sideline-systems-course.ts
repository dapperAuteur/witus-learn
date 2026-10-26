import type { AuthoredCourse } from "./authored-course";

// "The Sideline's Other Crew" (Careers & Media, also listed in Sports and Trade Skills). Slug
// `sideline-systems`. Series `the-crew-behind-the-show` ("The Crew Behind the Show"), code CREW,
// position 07: the tracking, replay and injury video crew who work beside the field for officials,
// broadcasters and medical staff. CREW-00 is `cables-and-connectors` (signal flow, fiber, network),
// CREW-05 `arena-transmission` (the NBA's arena network, Replay Center and tracking counts).
// `broadcasting-break-in` stays outside the series; its "12 · Stats, spotting boards, and replay" is the
// broadcast replay this course contrasts with officiating review.
//
// RESEARCH TIER 2 (brief, status line): the course describes concussion and injury review protocols and
// must never teach medicine (gate A6, confirmed by the publisher).
// Brief:    cloud-briefs/crew-07/00-approved-brief.md (approved by BAM 2026-10-26: public, CREW-07, held
//           for a qualified reviewer who has worked one of these jobs, a tracking or replay systems
//           technician). Section 5 of the brief, "Rules for the build", is binding.
// Research: cloud-briefs/crew-07/research/ (fetched 2026-10-26). 01-systems-and-leagues.md covers outline
//           sections 1 and 3, 02-medical-review.md section 2, 03-jobs-and-hiring.md sections 4 to 6.
//           Only V lines are asserted. I lines appear only with their reasoning shown in the lesson.
//           A lines are never taught. Each file's "Teach this, not that" list is taught as corrections
//           where the lesson needs it.
//
// BUILD STATUS: pass 1 of 2 (2026-10-26) wrote sections 1 to 4 (lessons 1 to 15): what a tracking
// array is; what review systems do for medical staff; the leagues and the rules; the game day, hour
// by hour. Sections 5 to 7 (the jobs and the ladder, getting hired, the capstone) and the final quiz
// follow in pass 2.
//
// MEDICINE (gate A6). Section 2 says how review is organized and who is licensed to act, quoting each
// body's own words on the boundary. It never teaches diagnosis, signs or symptoms, assessment steps,
// removal criteria, scoring cut-offs or return-to-play stages, though the sources print them, and it
// never names or describes a real athlete's injury: where a source ties a policy to an incident, only
// the policy and its date are kept. World Rugby's documents disagree on criteria counts and HIA3
// timing, so this course gives neither number (crew07-world-rugby-hia-figures). "Spotter" is
// disambiguated in lesson 5: the athletic trainer spotter, not broadcasting-break-in's spotting board.
//
// VISIBILITY: PUBLIC, and HELD ("Coming soon") until a NAMED qualified reviewer, a tracking or replay
// systems technician, has read every lesson marked QR with authority to change or cut it; a certified
// athletic trainer joins for section 2. The publishHoldReason in scripts/seed-courses.ts says so.
//
// MARKED LESSONS. Each starts its body with a "> **Before release:**" line naming who must act.
//   QR (a tracking or replay systems technician): 2 to 4 and 9 to 15.
//   QR (a tracking or replay systems technician; and a certified athletic trainer): 5 to 8, section 2.
//   Unmarked: 1 (the map of the three systems, every line a direct quotation or a definition).
//
// LINK, DO NOT REPEAT. CREW-05's "4 · Beside the network: replay, tracking and referee comms" (the NBA
// Replay Center, Rule 13's triggers, Hawk-Eye's 12 cameras and 29 points) and "5 · The jobs behind the
// network" (the NBA automated officiating posting); broadcasting-break-in's "12 · Stats, spotting boards,
// and replay" (broadcast replay, contrasted with officiating review) and "13 · Game day: roles, call
// times, and where utility fits"; CREW-00's "4 · SDI on coax and the BNC", "7 · Reference, timecode and
// return video", "11 · Single-mode, multimode and the color codes", "12 · LC, SC and ST, and the polish
// on the end", "13 · Inspect before you connect", "17 · Same plug, different signal: intercom and DMX on
// XLR" (wired intercom beltpacks; it does not cover two-way radios), "19 · Network cable: categories,
// the 100-meter channel, etherCON and PoE", "20 · Dante, ST 2110, and why a media network is not the
// office network", "27 · Coil, label and run" and "28 · Test, then find the fault". Each is named by
// title where this course stops.
//
// CORRECTIONS TO THE BRIEF taught from the research: TRACAB is TRACAB Technologies, which Electronic
// Arts agreed to buy in 2025, not "ChyronHego TRACAB"; the Premier League's offside system is Genius
// Sports, not Hawk-Eye; the NFL kept the chain crew in a secondary role; NFL player tracking is radio,
// not optical; VAR reviews five categories in 2026/27; the outline's "synchronizing the medical
// monitors" is supported by no source and stays out; "tagging" comes from the NFL's AT spotters page,
// not from a posting.
//
// RIGHTS (the source-hosting rule in CLAUDE.md, decided per source):
//  - Tier A: none. No U.S. federal work is cited in sections 1 to 4.
//  - Tier B, link only, never rehost: every league, governing body, conference and vendor page and
//    PDF (the NFL, its Head, Neck and Spine Committee protocol, the NFLPA, the NBA, the WNBA, MLB, the
//    NHL, the NCAA and its Sport Science Institute, the SEC, IFAB's Laws, FIFA, the Premier League, The
//    FA, the ICC, the ATP, the All England Club, World Rugby, NATA, the BOC, Hawk-Eye, Sony, Electronic
//    Arts and TRACAB, Genius Sports, Catapult, KINEXON), the University of Oklahoma's IT page, the
//    trade press (Sports Video Group) and the AP story, and the job postings and their aggregator
//    copies (SHRM HireVets, startup.jobs, Ashby, Workday).
//  - Tier C: none.
//  - FIGURES: none embedded.
//
// VENDORS are worked examples, never endorsements (brief section 5). Accuracy and latency figures from
// a vendor are taught as "the vendor says".
//
// POSTINGS are primary sources for what that employer asked on that date. Pay and posting facts are
// "as posted on <date>". Operator screens and internal procedures stay out.
//
// CITATION LETTERS. Same-author, same-year letters follow research file 01. Sources from files 02 and
// 03 whose letters collide are re-lettered after file 01's: the NFL's AT spotters page and its game and
// stadium prep page (file 02's n.d.-a and n.d.-b) become NFL (n.d.-e) and (n.d.-f); the NFL rulebook
// stays NFL (2026a) and the New Orleans injury video review operator posting (file 03's 2026a) becomes
// NFL (2026b); file 03's Hawk-Eye postings become Hawk-Eye Innovations (n.d.-f) Rutgers, (n.d.-g) the UK
// expression of interest, (2026d) Netherlands, (2026e) Firenze, (2026f) Bolzano and (2026g) the SEC
// coordinator, after file 01's (n.d.-a) to (n.d.-e) and (2026a) to (2026c).
//
// STANDARDS: unmapped for now (BACKLOG entry in scripts/check-standards-coverage.ts).
//
// HEDGES WRITTEN INTO LESSONS (each has a check in src/lib/research-checks.ts, keys crew07-*):
//  - L1: the NBA's 2023 release, read through a web fetch tool (crew07-browser-nba-2023).
//  - L3: what calibration means technically, and how often it is redone (crew07-calibration-meaning).
//  - L4: whether Electronic Arts' purchase of TRACAB closed (crew07-tracab-close); Second Spectrum's own
//    description (crew07-second-spectrum-own-site); the WNBA's 2024 release, read through a web fetch
//    tool (crew07-browser-wnba-2024).
//  - L5: how many injury video operators work a game (crew07-ivr-count); whether 16 camera angles is
//    current (crew07-ivrs-angles).
//  - L6: "teal hat" against "teal shirt" for the field communicator (crew07-teal-hat-shirt).
//  - L7: World Rugby's stage counts and timings (crew07-world-rugby-hia-figures); who operates
//    pitch-side video (crew07-rugby-video-operator).
//  - L8: whether the NCAA checklist requires video (crew07-ncaa-video); whether the NHL's 2016 spotter
//    system runs today (crew07-nhl-spotters-current); 49 or 50 states (crew07-at-regulation-count);
//    what "recognize and record player injuries" means in the posting (crew07-recognize-wording).
//  - L9: how the NFL's optical line to gain ran in 2025 (crew07-nfl-line-to-gain-2025).
//  - L10: NHL SMART since 2015 or 2016 (crew07-nhl-smart-year); Statcast's Hawk-Eye in 2019 or 2020
//    (crew07-statcast-hawkeye-year).
//  - L11: the ATP's 2024 and 2025 news pages, read through a web fetch tool (crew07-browser-atp-2024,
//    crew07-browser-atp-2025).
//  - L12: SEC football replay vendor (crew07-sec-football-vendor); the Big Ten's own word on its vendor
//    (crew07-big-ten-vendor).
//  - L15: whether the Big Ten's SMART medical system is the NFL's IVRS (crew07-big-ten-vs-ivrs).
//
// House style, matching cables-and-connectors-course.ts and arena-transmission-course.ts: `section` on
// every lesson; flush-left single-line `:::reveal q ||| a`; recallContent from the second teaching
// lesson on, quizzing the lesson before; APA 7 in-line citations and a `## Sources` block on every
// teaching lesson with a locator on every entry; a quiz per section pooled to round(words / 35),
// clamped 40 to 100, serving 5, passing 80, shuffled. Option lengths are balanced within each question.
// American spelling in prose; quotations keep their own spelling. No em or en dashes anywhere.

// ── Source helpers ────────────────────────────────────────────────────────────────────────────────
const RETRIEVED = "Retrieved October 26, 2026, from";
const SAVED = "Saved October 26, 2026, from";

// Vendors (research file 01)
const HE_ABOUT = `Hawk-Eye Innovations. (n.d.-a). *About*. ${RETRIEVED} https://www.hawkeyeinnovations.com/about`;
const HE_DATA = `Hawk-Eye Innovations. (n.d.-c). *Data*. ${RETRIEVED} https://www.hawkeyeinnovations.com/data`;
const HE_HOME = `Hawk-Eye Innovations. (n.d.-d). *Digital media sports technology company* [Homepage]. ${RETRIEVED} https://www.hawkeyeinnovations.com/`;
const HE_OFFICIATING = `Hawk-Eye Innovations. (n.d.-e). *Officiating*. ${RETRIEVED} https://www.hawkeyeinnovations.com/officiating`;
const HE_SAOT = `Hawk-Eye Innovations. (2026a, October 5). *Advanced SAOT: The real-time future of football officiating*. ${RETRIEVED} https://www.hawkeyeinnovations.com/news/4584850/advanced-saot-the-realtime-future-of-football-officiating`;
const HE_SEC_ABS = `Hawk-Eye Innovations. (2026b, May 13). *SEC chooses Hawk-Eye Innovations, implements ABS Challenge System for 2026 baseball tournament* [Press release]. ${RETRIEVED} https://www.hawkeyeinnovations.com/news/4503092/sec-chooses-hawkeye-innovations-implements-abs-challenge-system-for-2026-baseball-tournament`;
const HE_ATP = `Hawk-Eye Innovations. (2026c, October 8). *Two decades of precision: How the ATP and Hawk-Eye elevated tennis officiating and storytelling*. ${RETRIEVED} https://www.hawkeyeinnovations.com/news/4588054/two-decades-of-precision-how-the-atp-and-hawkeye-elevated-tennis-officiating-and-storytelling`;
const MICHAELIDES_2026 = `Michaelides, M. (2026, May 20). *The millimetre margin: Why goal-line technology is the standard for global football*. Hawk-Eye Innovations. ${RETRIEVED} https://www.hawkeyeinnovations.com/news/4506659/the-millimetre-margin-why-goalline-technology-is-the-standard-for-global-football`;
const SONY_2025 = `Sony Electronics. (2025, April 1). *Sony's Hawk-Eye Innovations selected by the NFL to revolutionize line to gain measurements* [Press release]. ${RETRIEVED} https://sony.mediaroom.com/2025-04-01-Sonys-Hawk-Eye-Innovations-Selected-by-the-NFL-to-Revolutionize-Line-to-Gain-Measurements`;
const EA_2025 = `Electronic Arts. (2025, February 3). *Electronic Arts agrees to acquire TRACAB Technologies*. ${RETRIEVED} https://www.ea.com/news/ea-sports-realism-technology`;
const TRACAB = `TRACAB Technologies. (n.d.). *TRACAB Optical*. Electronic Arts. ${RETRIEVED} https://www.ea.com/tracab/tracab-optical`;
const PANKHURST_2025 = `Pankhurst, B. (2025, August 8). *The evolution of sports tracking technology: From stopwatches to AI*. Genius Sports. ${RETRIEVED} https://www.geniussports.com/content-hub/the-evolution-of-sports-tracking/`;
const CATAPULT = `Catapult. (n.d.). *Catapult Vector Pro*. ${RETRIEVED} https://www.catapult.com/solutions/vector-pro`;
const KINEXON_LPS = `KINEXON Sports. (n.d.-a). *KINEXON PERFORM LPS*. ${RETRIEVED} https://kinexon-sports.com/products/perform-lps/`;
const KINEXON_TRACKING = `KINEXON Sports. (n.d.-b). *Next generation player tracking for all sports*. ${RETRIEVED} https://kinexon-sports.com/technology/player-tracking/`;

// Trade press and news (research file 01)
const DACHMAN_2023 = `Dachman, J. (2023, March 9). *NBA taps Sony's Hawk-Eye for data-tracking beginning with 2023-24 season*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2023/03/09/nba-taps-sonys-hawk-eye-for-data-tracking-beginning-with-2023-24-season/`;
const COSTA_2026 = `Costa, B. (2026, January 13). *NHL Situation Room 2.0: How Sony Hawk-Eye powers centralized officiating, player safety, the league's next chapter*. Sports Video Group. ${RETRIEVED} https://www.sportsvideo.org/2026/01/13/nhl-situation-room-2-0-how-sony-hawk-eye-powers-centralized-officiating-player-safety-the-leagues-next-chapter/`;
const SVG_2024 = `Sports Video Group. (2024, September 18). *SEC utilizing Hawk-Eye video review technology for soccer, volleyball*. ${RETRIEVED} https://www.sportsvideo.org/2024/09/18/sec-utilizing-hawk-eye-video-review-technology-for-soccer-volleyball/`;
const WHYNO_2025 = `Whyno, S. (2025, June 4). *NHL expanding use of Hawk-Eye tracking, technology may eventually solve some on-ice issues*. Global News (The Associated Press). ${RETRIEVED} https://globalnews.ca/news/11212596/nhl-hawk-eye-technology-hockey/`;

// Leagues and governing bodies (research file 01)
const NBA_2023 = `National Basketball Association. (2023, March 9). *NBA and Sony's Hawk-Eye Innovations launch strategic partnership powering next generation tracking technology*. NBA Communications. ${RETRIEVED} https://pr.nba.com/nba-sony-hawk-eye-innovations-partnership/`;
const WNBA_2024 = `Women's National Basketball Association. (2024, March 5). *WNBA and Genius Sports bring cutting-edge tracking data to every WNBA arena*. NBA Communications. ${RETRIEVED} https://pr.nba.com/wnba-genius-sports-tracking-data/`;
const NFL_TECH = `National Football League. (n.d.-a). *Evolution of technology*. NFL Football Operations. ${RETRIEVED} https://operations.nfl.com/game-operations-logistics/technology/evolution-of-technology`;
const NFL_AMGC = `National Football League. (n.d.-b). *Inside Art McNally GameDay Central*. NFL Football Operations. ${RETRIEVED} https://operations.nfl.com/officiating/instant-replay/art-mcnally-gameday-central`;
const NFL_NGS = `National Football League. (n.d.-c). *Performance tracking data (Next Gen Stats)*. NFL Football Operations. ${RETRIEVED} https://operations.nfl.com/game-operations-logistics/technology/performance-tracking-data-next-gen-stats`;
const NFL_REPLAY_OFFICIALS = `National Football League. (n.d.-d). *Replay officials*. NFL Football Operations. ${RETRIEVED} https://operations.nfl.com/rules-officiating/instant-replay/replay-officials`;
const NFL_RULES = `National Football League. (2026a). *2026 official playing rules of the National Football League* [PDF]. ${RETRIEVED} https://static.www.nfl.com/image/upload/fl_attachment/league/tqivdkzt9mu6wdgsh1ku.pdf`;
const NHL_2025 = `National Hockey League. (2025, June 4). *NHL, Sony announce multiyear global technology partnership*. ${RETRIEVED} https://www.nhl.com/news/nhl-sony-announce-multiyear-global-technology-partnership`;
const MLB_STATCAST = `Major League Baseball. (n.d.). *Statcast*. MLB glossary. ${RETRIEVED} https://www.mlb.com/glossary/statcast`;
const MLB_2025 = `Major League Baseball. (2025, September 23). *MLB announces ABS Challenge System coming to the major leagues beginning in the 2026 season* [Press release]. ${RETRIEVED} https://www.mlb.com/press-release/press-release-mlb-announces-abs-challenge-system-coming-to-the-major-leagues-beginning-in-the-2026-season`;
const FIFA_GLT = `Fédération Internationale de Football Association. (n.d.-a). *Goal-line technology implementation*. Inside FIFA. ${RETRIEVED} https://inside.fifa.com/innovation/standards/goal-line-technology/goal-line-technology-implementation`;
const FIFA_SAOT = `Fédération Internationale de Football Association. (n.d.-b). *Semi-automated offside technology*. Inside FIFA. ${RETRIEVED} https://inside.fifa.com/innovation/world-cup-2022/semi-automated-offside-technology`;
const IFAB_2026 = `The International Football Association Board. (2026). *Laws of the game 2026/27* [Effective from 1 July 2026; PDF]. ${RETRIEVED} https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en`;
const PL_2025A = `Premier League. (2025a, April 1). *Semi-automated offside technology to be introduced in Matchweek 32*. ${RETRIEVED} https://www.premierleague.com/en/news/4273447`;
const PL_2025B = `Premier League. (2025b, April 12). *Semi-automated offside technology: What you need to know*. ${RETRIEVED} https://www.premierleague.com/en/news/4256036`;
const PL_2025C = `Premier League. (2025c, August 14). *What's new in 2025/26: IFAB laws and Premier League football principles*. ${RETRIEVED} https://www.premierleague.com/en/news/4373884/whats-new-in-2025-26-season-ifab-laws-and-premier-league-football-principles`;
const FA_2026 = `The Football Association. (2026, January 9). *Details on VAR, semi-automated offside and goal-line technology in the 2025-26 FA Cup*. ${RETRIEVED} https://www.thefa.com/news/2026/jan/09/emirates-fa-cup-2025-26-season-var-20260901`;
const ATP_2023 = `ATP Tour. (2023, April 28). *Electronic Line Calling Live to be adopted across the ATP Tour* [Press release]. ${RETRIEVED} https://www.atptour.com/-/media/files/elc-live-release-april-2023.pdf`;
const ATP_2024 = `ATP Tour. (2024, October 9). *Wimbledon embraces live electronic line calling*. ${RETRIEVED} https://www.atptour.com/en/news/wimbledon-2025-electronic-live-calling`;
const ATP_2025 = `ATP Tour. (2025, February 6). *ATP announced introduction of Video Review across all ATP Masters 1000s*. ${RETRIEVED} https://www.atptour.com/en/news/video-review-atp-masters-1000-2025`;
const AELTC_2026 = `All England Lawn Tennis Club. (2026). *Debenture handbook: 29 June - 12 July 2026* [PDF]. ${RETRIEVED} https://content.wimbledon.com/is/content/AELTC/aeltc/wimbledon/live-site/guest/pdfs/2026%20-%20Debenture%20Handbook.pdf`;
const ICC_2026 = `International Cricket Council. (2026). *ICC men's Test match playing conditions* [Effective from October 2026; PDF]. ${RETRIEVED} https://images.icc-cricket.com/image/upload/prd/a8114zro5tkioifz0jqg.pdf`;
const NCAA_RULES = `National Collegiate Athletic Association. (2026a). *2026 NCAA football rules and interpretations* [PDF]. ${RETRIEVED} https://ncaaorg.s3.amazonaws.com/championships/sports/football/rules/PRMFB_RulesBook.pdf`;
const NCAA_CHANGES = `National Collegiate Athletic Association. (2026b). *2026 NCAA football rules changes* [PDF]. ${RETRIEVED} https://ncaaorg.s3.amazonaws.com/championships/sports/football/rules/2026PRMFB_2026RuleChanges.pdf`;
const SEC_2025 = `Southeastern Conference. (2025, January). *SEC utilizing Hawk-Eye video review technology for basketball*. ${RETRIEVED} https://www.secsports.com/news/2025/01/sec-utilizing-hawk-eye-video-review-technology-for-basketball`;
const OU_2024 = `University of Oklahoma Information Technology. (2024, August 29). *OU IT and the SEC*. ${RETRIEVED} https://www.ou.edu/ouit/news/2024/august/ou-it-sec`;

// Medical review (research file 02)
const NFL_AT_SPOTTERS = `National Football League. (n.d.-e). *AT spotters*. NFL Football Operations. ${RETRIEVED} https://operations.nfl.com/gameday/behind-the-scenes/at-spotters/`;
const NFL_PREP = `National Football League. (n.d.-f). *Game and stadium prep*. NFL Football Operations. ${RETRIEVED} https://operations.nfl.com/game-operations-logistics/preparation-safety/game-and-stadium-prep`;
const NFL_2016A = `National Football League. (2016a, September 14). *Transforming the sideline: The medical timeout*. NFL.com. ${RETRIEVED} https://www.nfl.com/news/transforming-the-sideline-the-medical-timeout`;
const NFL_2016B = `National Football League. (2016b, December 22). *The eyes in the sky*. NFL.com. ${RETRIEVED} https://www.nfl.com/news/the-eyes-in-the-sky`;
const NFL_2018 = `National Football League. (2018, June 22). *Concussion protocol & return-to-participation protocol: Overview*. NFL Player Health and Safety. ${RETRIEVED} https://www.nfl.com/playerhealthandsafety/resources/fact-sheets/concussion-protocol-return-to-participation-protocol`;
const NFL_2022A = `National Football League. (2022a, September 13). *NFL health and safety fact sheet*. NFL Player Health and Safety. ${RETRIEVED} https://www.nfl.com/playerhealthandsafety/resources/fact-sheets/nfl-health-and-safety-fact-sheet`;
const NFL_2022B = `National Football League. (2022b, December 6). *Delivering world-class game day care to the NFL's world-class athletes*. NFL.com. ${RETRIEVED} https://www.nfl.com/news/delivering-world-class-game-day-care-to-nfl-world-class-athletes`;
const NFL_HNS_2024 = `National Football League Head, Neck and Spine Committee. (2024). *NFL Head, Neck and Spine Committee's concussion diagnosis and management protocol* (Updated September 2024) [PDF]. National Football League. ${RETRIEVED} https://static.www.nfl.com/image/upload/v1758892132/league/qjqlkfe9ffaivuugiqcf.pdf`;
const NFLPA_2016 = `National Football League Players Association. (2016, July 26). *Official NFLPA statement: NFL and NFLPA agreement*. ${RETRIEVED} https://nflpa.com/press/official-nflpa-statement-nfl-and-nflpa-agreement`;
const BOC_2021 = `Board of Certification for the Athletic Trainer. (2021, February 5). *In-depth look: Athletic trainer spotter for the National Football League*. ${RETRIEVED} https://bocatc.org/newsroom/in-depth-look-athletic-trainer-spotter-for-the-national-football-league/`;
const BOC_ABOUT = `Board of Certification for the Athletic Trainer. (n.d.-a). *About the BOC*. ${RETRIEVED} https://bocatc.org/about/`;
const BOC_STATES = `Board of Certification for the Athletic Trainer. (n.d.-b). *BOC athletic trainer state regulations*. ${RETRIEVED} https://bocatc.org/state-regulation/`;
const NATA = `National Athletic Trainers' Association. (n.d.). *Athletic training*. ${RETRIEVED} https://www.nata.org/about/athletic-training`;
const NCAA_SSI_IMC = `National Collegiate Athletic Association Sport Science Institute. (n.d.). *Interassociation consensus: Independent medical care for college student-athletes best practices* [PDF]. ${RETRIEVED} https://ncaaorg.s3.amazonaws.com/ssi/publications/SSI_IndependentMedicalCareBP.pdf`;
const NCAA_SSI_2026 = `National Collegiate Athletic Association Sport Science Institute. (2026). *Concussion safety protocol checklist* (Updated June 2026) [PDF]. ${RETRIEVED} https://ncaaorg.s3.amazonaws.com/ssi/concussion/SSI_ConcussionSafetyProtocolChecklist.pdf`;
const NHL_2016 = `National Hockey League. (2016, October 11). *NHL updates concussion protocol*. NHL.com. ${RETRIEVED} https://www.nhl.com/news/nhl-updates-concussion-protocol-282571624`;
const WR_HIA = `World Rugby. (n.d.-a). *HIA protocol*. World Rugby Passport. ${RETRIEVED} https://passport.world.rugby/player-welfare-medical/concussion-management-for-match-day-medical-staff-using-the-hia-protocol/hia-protocol/`;
const WR_BEFORE = `World Rugby. (n.d.-b). *Match day: Before kick-off*. World Rugby Passport. ${RETRIEVED} https://passport.world.rugby/player-welfare-medical/concussion-management-for-match-day-medical-staff-using-the-hia-protocol/img-alerts-prevent/match-day-doctor-requirements/match-day-before-kick-off/`;
const WR_MDD = `World Rugby. (n.d.-d). *MDD rights and responsibilities*. World Rugby Passport. ${RETRIEVED} https://passport.world.rugby/player-welfare-medical/concussion-management-for-match-day-medical-staff-using-the-hia-protocol/the-match-day-doctor/mdd-rights-and-responsibilities/`;
const WR_VIDEO = `World Rugby. (n.d.-e). *Video review*. World Rugby Passport. ${RETRIEVED} https://passport.world.rugby/player-welfare-medical/concussion-management-for-match-day-medical-staff-using-the-hia-protocol/match-day-doctor/video-review/`;
const WR_2022 = `World Rugby. (2022). *Head injury assessment (HIA) protocol* [PDF; page footers read "Version 4, January 2020"]. ${RETRIEVED} https://passport.world.rugby/media/3cgf3b3d/hia-protocol-2022-en.pdf`;

// Jobs and game day (research file 03)
const NFL_IVR = `National Football League. (2026b). *Injury video review operator- New Orleans Saints* [Job posting; created April 15, 2026]. SHRM HireVets. ${SAVED} https://hirevets.shrm.org/jobs/69df2e5b568dabf91ebff0d4`;
const HE_RUTGERS = `Hawk-Eye Innovations. (n.d.-f). *College sports systems technician - Rutgers University, Big Ten* [Job posting, closed]. startup.jobs. ${SAVED} https://startup.jobs/college-sports-systems-technician-rutgers-university-big-ten-hawk-eye-innovations-hei-9926585`;
const HE_UK_EOI = `Hawk-Eye Innovations. (n.d.-g). *Expression of interest - UK casual football roles* [Application form]. Ashby. ${SAVED} https://jobs.ashbyhq.com/hawkeyeinnovations/form/expression-of-interest-uk-casual-football-roles`;
const HE_NL = `Hawk-Eye Innovations. (2026d, September 2). *Football systems operator - Netherlands* [Job posting]. Ashby. ${RETRIEVED} https://jobs.ashbyhq.com/hawkeyeinnovations/cb95c2c1-90c3-48ae-98d5-a7e45cfd4439`;
const HE_FIRENZE = `Hawk-Eye Innovations. (2026e, October 19). *Football tracking systems technician - Firenze* [Job posting]. Ashby. ${RETRIEVED} https://jobs.ashbyhq.com/hawkeyeinnovations/dca0e834-c1a6-4290-91ad-7e7081e6615f`;
const HE_BOLZANO = `Hawk-Eye Innovations. (2026f, October 22). *Football video systems technician - Bolzano* [Job posting]. Ashby. ${RETRIEVED} https://jobs.ashbyhq.com/hawkeyeinnovations/476a5dbb-0ad8-4c5c-97e5-4835f9fd2c9d`;
const HE_SEC_COORD = `Hawk-Eye Innovations. (2026g, October 16). *Live operations coordinator - SEC* [Job posting]. Ashby. ${SAVED} https://jobs.ashbyhq.com/hawkeyeinnovations/50e2c73e-7607-43f9-a9a0-fe03c3c4581c`;
const NBA_VAN_ANDEL = `National Basketball Association. (2026, October 14). *Project employee, league technology representative - automated officiating (Van Andel Arena)* [Job posting]. Workday. ${RETRIEVED} https://nba.wd108.myworkdayjobs.com/nbacareers/job/New-York-USA---Remote/Project-Employee--League-Technology-Representative---Automated-Officiating--Van-Andel-Arena-_JR001080`;

/** The marker every lesson needing a qualified reviewer opens with (authoring checklist, section 3). */
const QR = "> **Before release:** needs a qualified reviewer (QR): a tracking or replay systems technician.";
/** Section 2 (medical review) needs a certified athletic trainer as well; the parser splits on "; and needs". */
const QR_MED =
  "> **Before release:** needs a qualified reviewer (QR): a tracking or replay systems technician; and needs a qualified reviewer (QR): a certified athletic trainer.";

export const SIDELINE_SYSTEMS_COURSE: AuthoredCourse = {
  title: "The Sideline's Other Crew",
  description:
    "Beside every broadcast crew at a big game works a second crew that most viewers never see: the technicians who run the tracking cameras, the officials' replay systems and the injury video that medical staff review. This course explains what a stadium's tracking array is and who uses its output; how review systems serve the licensed medical people who keep athletes safe, and why the video crew never makes a medical call; how the NFL, the NBA, the NHL, MLB, tennis, football (soccer), cricket and college conferences use replay, tracking and measurement under their own rules; and what a technician's game day looks like, hour by hour, from the postings that describe it. It is job-shaped knowledge for crew who already know a truck or an arena. It does not teach medicine, and it does not teach any vendor's operator screens. Vendors and leagues are cited worked examples, not endorsements, and every lesson that needs a systems technician's or an athletic trainer's sign-off says so at the top.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1: What a tracking array is
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "three-systems-beside-the-field",
      title: "1 · Three systems beside the field",
      section: "1 · What a tracking array is",
      body: `**What this course is for.** At a big game, the broadcast crew is not the only crew. Officials review plays on synchronized video. Cameras around the field track every athlete and the ball. Medical staff review video of a hit before a player goes back in. Each of those systems has technicians who set it up, check it and keep it running. By the end of this course you should be able to say what those systems do, who sits where on a game day, which jobs need a medical license and which do not, what the non-medical jobs ask for, and how people get hired into them.

**What it is not.** It is not a medical course. It never teaches how to recognize an injury, and it never describes a real athlete's injury. It is not a vendor's operator training either: operator screens are proprietary and are taught on the job. Every company named is a worked example from its own pages, not an endorsement.

**Where it sits.** *Break Into Sports & Media Broadcasting* lesson "12 · Stats, spotting boards, and replay" teaches broadcast replay: an operator marks in and out points and hands the director clean angles to air. That replay is production. It serves the show. This course is about a different kind of replay, owned by a league or a governing body, which serves the officials and the medical staff. For the copper and glass under all of it, see CREW-00, *Cables and Connectors*. For the NBA's replay center and its arena network, see CREW-05, *Arena transmission*, lesson "4 · Beside the network: replay, tracking and referee comms".

**One vendor's map of the field.** Hawk-Eye Innovations, part of Sony, names three core technologies on its homepage (Hawk-Eye Innovations, n.d.-d):

| Hawk-Eye's name | In its own words |
|---|---|
| VIDEO REPLAY | "Our multi-angle replay tech underpins our video capture, review & clipping capabilities" |
| TRACK | "Our optical tracking & camera calibration powers performance, ball & object tracking" |
| INSIGHT | Data collation through visualization |

**System one: officiating review.** Hawk-Eye calls its review product SMART, a "synchronised system" for "capture and playback of video and audio for officials to review independently, known in football as VAR, in cricket as DRS, and more" (Hawk-Eye Innovations, n.d.-e). SMART stands for Synchronized Multi-Angle Replay Technology (Sony Electronics, 2025; National Hockey League [NHL], 2025). Synchronized means every angle shows the same instant, so an official can step through one moment from several cameras.

**System two: tracking.** A tracking array is a set of cameras, or a set of radio receivers, that turns each athlete and the ball into positions many times a second. Lessons 2 to 4 take it apart.

**System three: medical review.** The National Football League (NFL) says technology "allows certified athletic trainers to use video to spot possible concussions and other potential injuries during games" (NFL, n.d.-a). Hawk-Eye lists an "Injury Review" tool that lets medical teams "zoom, tag, and archive multi-angle video" (Hawk-Eye Innovations, n.d.-c). The National Hockey League installed SMART for "replay reviews and coaches' challenges; with later enhancements supporting team medical, and player health and safety reviews" (NHL, 2025). Section 2 is about the people who use that video and the line between their work and yours.

**Same vendor, separate systems.** The NHL runs replay review and optical tracking from Hawk-Eye, and a trade report says the two "serve different purposes today" (Costa, 2026). So replay and tracking can share a company and still be separate systems with separate jobs.

**Who uses the output.** The same data reaches very different people:

| Who | What they get | Source |
|---|---|---|
| Officials | Review video; the NBA says tracking "will enhance our officiating" | National Basketball Association [NBA] (2023) |
| Teams | NFL Next Gen Stats for the 32 clubs' game planning | NFL (n.d.-c) |
| Health and safety staff | NFL Player Health & Safety uses the data "to improve the safety of the players" | NFL (n.d.-c) |
| Broadcast and fans | FIFA's offside data becomes a 3D animation on stadium screens and goes to broadcast partners | Fédération Internationale de Football Association [FIFA] (n.d.-b) |

The NBA also names "virtual game recreations, dynamic visualizations, unique content development and gamification" (NBA, 2023). The NBA's 2023 release was read through a web fetch tool rather than a browser, so a reviewer will open it before release. Ownership matters too: at its tournaments, FIFA "is the sole owner of the tracking and ball data collected" (FIFA, n.d.-b).

**What that means for the crew, reasoned.** Each of those sources names a different audience for the same systems, so one tracking or replay fault can reach the officials, the teams, the medical staff and the broadcast at once. That is why the postings in section 4 ask for checks, logs and reports, not only for knowing the gear.

:::reveal What is the difference between the replay in broadcasting-break-in lesson 12 and the replay in this course? ||| Broadcast replay is production: an operator hands the director angles to air. This course's replay belongs to a league or governing body and serves officials and medical staff.

:::reveal What does SMART stand for, and what does "synchronized" buy an official? ||| Synchronized Multi-Angle Replay Technology. Every angle shows the same instant, so one moment can be stepped through from several cameras.

## Sources
- ${HE_HOME} Locator: "Our Technologies" block (VIDEO REPLAY, TRACK, INSIGHT).
- ${HE_OFFICIATING} Locator: "Video Review Officiating with SMART".
- ${HE_DATA} Locator: "Powering Analysis with Data & Video", the "Injury Review" tool.
- ${SONY_2025} Locator: paragraph 6, SMART spelled out.
- ${NHL_2025} Locator: paragraph 5, SMART in all 32 arenas and its later medical uses.
- ${NFL_TECH} Locator: paragraph beginning "Technology also helps better protect the players".
- ${COSTA_2026} Locator: section "The Sony Hawk-Eye Backbone".
- ${NFL_NGS} Locator: last two paragraphs, who uses Next Gen Stats data.
- ${NBA_2023} Locator: release text, the uses of tracking data (read through a web fetch tool).
- ${FIFA_SAOT} Locator: "How does it work?" paragraph 4; FAQ "Who owns the data collected?"`,
    },
    {
      slug: "cameras-points-and-speed",
      title: "2 · Cameras, points and speed",
      section: "1 · What a tracking array is",
      recallContent: [
        {
          prompt: "Name Hawk-Eye's three core technologies.",
          answer: "VIDEO REPLAY, TRACK and INSIGHT (Hawk-Eye Innovations, n.d.-d).",
        },
        {
          prompt: "What does a trade report say about the NHL's Hawk-Eye replay and tracking systems?",
          answer: "That they \"serve different purposes today\": one vendor, two separate systems (Costa, 2026).",
        },
      ],
      body: `${QR}

**An optical array, described by its owner.** FIFA's semi-automated offside technology (SAOT) "uses 12 dedicated tracking cameras mounted underneath the roof of the stadium to track the ball and up to 29 data points of each individual player, 50 times per second" (FIFA, n.d.-b). At the 2022 World Cup in Qatar, a sensor inside the match ball also sent "ball data to the video operation room 500 times per second" so the system could find the moment the ball was kicked (FIFA, n.d.-b). That one sentence holds the four parts of every optical array: fixed cameras, points on each athlete, the ball, and a rate.

The NBA's camera and point counts are in CREW-05 lesson "4 · Beside the network: replay, tracking and referee comms". This lesson does not repeat them.

**Points per athlete are a design choice.** "29 points" is not an industry constant. It is one vendor's number:

| System | Points per athlete | Source |
|---|---|---|
| Hawk-Eye SkeleTRACK | "29 skeletal points on each player in real-time" | Hawk-Eye Innovations (n.d.-e) |
| TRACAB | "65 unique data points per player and referee," from "21 joints" | Electronic Arts (2025) |
| Premier League offside system | "up to 10,000 surface 'mesh' data points per player" | Premier League (2025b) |
| NHL tracking, as reported by AP | 29 skeletal points plus "three more on sticks" | Whyno (2025) |

Hawk-Eye says SkeleTRACK has been used since 2018 in "more than 32,000 matches across football, baseball, basketball, American football, and ice hockey" (Hawk-Eye Innovations, n.d.-e). That is the vendor's own count.

**Frame rates.** A tracking camera is not a broadcast camera. The Premier League's offside system uses "up to 30 newly installed cameras mounted around Premier League stadiums," several of them "capturing footage at 100 frames per second, twice the frame rate of typical broadcast cameras" (Premier League, 2025b). Major League Baseball (MLB) says "Each club now has 12 Hawk-Eye cameras arrayed around its ballpark": five high-frame-rate cameras for pitch and bat tracking, "upgraded from 100 frames per second to 300 fps in 2023," and seven that track players and batted balls (MLB, n.d.). MLB says the system raised the share of batted balls tracked "from roughly 89% to 99%" (MLB, n.d.). TRACAB, by its new owner's account, tracks the field "at 60Hz per second [sic], generating 600 million data points per game" (Electronic Arts, 2025).

**Latency.** Latency is the delay from the moment on the field to the data arriving. The figures below are each company's claim, not an independent test.

| Claim | Who says it |
|---|---|
| TRACAB Optical: "Data delivered within 0.15 seconds" | TRACAB Technologies (n.d.) |
| Hawk-Eye's offside alerts reach officials' headsets "in under a second" | Hawk-Eye Innovations (2026a) |
| Hawk-Eye goal-line technology: "14 tracking cameras permanently installed in each stadium," with a signal to the referee's watch "in under one second" | Michaelides (2026) |

So teach them as "the vendor says". A league's own rule can set a limit too, and lesson 11 shows football's.

**Where the cameras go.** TRACAB describes "modular camera positioning suitable to a wide variety of stadium designs," either "fixed positions for long-term deployments or as a temporary mobile setups," and says it is "Installed in over 300 stadiums" (TRACAB Technologies, n.d.). FIFA's cameras sit under the stadium roof (FIFA, n.d.-b). Goal-line cameras are permanent (Michaelides, 2026).

**The shape of every array, reasoned.** Put the sources side by side: Hawk-Eye, FIFA, the Premier League, TRACAB and MLB each describe fixed, fast cameras placed around the field, software that finds points on each athlete and the ball, and 3D positions delivered in under a second. The counts and rates differ by vendor and sport. The shape does not. Lesson 3 adds the step that ties the cameras to the real field, and lesson 4 shows the systems that use radio tags instead of cameras.

**Why a technician cares, reasoned.** A camera that moves, a cable that drops frames or a network that adds delay all damage the numbers above. That is why section 4's postings ask technicians to check cameras, fiber and the network before every game.

:::reveal How many cameras, points per player and updates per second does FIFA give for its offside system? ||| 12 dedicated tracking cameras under the roof, up to 29 data points per player, 50 times per second (FIFA, n.d.-b).

:::reveal Is "29 points per athlete" the industry standard? ||| No. It is Hawk-Eye's number. TRACAB uses 21 joints and 65 data points, and the Premier League's system up to 10,000 mesh points.

:::reveal Why does the Premier League stress its cameras' 100 frames per second? ||| It is "twice the frame rate of typical broadcast cameras" (Premier League, 2025b).

## Sources
- ${FIFA_SAOT} Locator: "How does it work?" paragraphs 1 and 2.
- ${HE_OFFICIATING} Locator: "Next-Gen Officiating with SkeleTRACK".
- ${EA_2025} Locator: "Accelerating Realism with TRACAB".
- ${PL_2025B} Locator: section on cameras.
- ${WHYNO_2025} Locator: paragraph beginning "The technology has improved".
- ${MLB_STATCAST} Locator: "About Statcast" paragraph 4.
- ${TRACAB} Locator: "Live In-Game Data" and "Adaptable to Any Scale".
- ${HE_SAOT} Locator: "How Advanced SAOT Works" and "The Evolution".
- ${MICHAELIDES_2026} Locator: "How It Works: The Technical Backbone".`,
    },
    {
      slug: "calibration-and-certification",
      title: "3 · Calibration: tying the picture to the field",
      section: "1 · What a tracking array is",
      recallContent: [
        {
          prompt: "What does FIFA's offside system track, and how often?",
          answer: "The ball and up to 29 data points per player, 50 times per second, from 12 cameras under the roof (FIFA, n.d.-b).",
        },
        {
          prompt: "Why are latency figures like TRACAB's \"within 0.15 seconds\" taught as \"the vendor says\"?",
          answer: "They are the company's own claims about its product, not independent tests.",
        },
      ],
      body: `${QR}

**The word in the vendor's own sentence.** Hawk-Eye does not list calibration as an extra. It puts it inside tracking: "Our optical tracking & camera calibration powers performance, ball & object tracking" (Hawk-Eye Innovations, n.d.-d).

**What calibration means, reasoned.** No source read for this course gives a technical definition, so here is the course's reading, with its reasons. FIFA ties calibration of goal-line technology to "competition goals, competition lighting and official field markings" (FIFA, n.d.-a). The Premier League describes offside lines as "calibrated" lines drawn on the picture (Premier League, 2025b). Both point the same way: calibration fixes each camera's position and view against the field's real, measured geometry, so that a point in the picture maps to a true position on the field. No source read for this course defines calibration for an optical tracking array or says how often it is redone during a season.

**Goal-line technology: installation.** FIFA's guidance is the clearest public account of calibration as work (FIFA, n.d.-a):

- Installing a goal-line system "will typically take around a week."
- The provider may need access to "the pitch, floodlighting and all technical areas of the stadium."
- In busy stadiums, "the provider must have enough time to calibrate the system in real match conditions, which will require full pitch access with competition goals, competition lighting and official field markings."

**Then a test, then a certificate.** "The final installation test checks that the system is functional and accurate." After it, the test institute and the competition organizer sign an acceptance form, and FIFA certifies the installation for "12 months." "A retest is necessary once the certification expires" (FIFA, n.d.-a). Hawk-Eye says its goal-line system shows "accuracy of under 1mm during FIFA Installation Tests," which it calls "the necessary condition to maintain the FIFA certification" (Michaelides, 2026). That accuracy figure is the vendor's claim.

**And a test before every match.** The Laws of the Game put a check on the referee: "Where GLT is used, the referee must test the technology's functionality before the match as set out in the Testing Manual." If it fails, "the referee must not use the GLT system and must report this" (The International Football Association Board [IFAB], 2026, p. 52). Section 4 shows a technician's posting that monitors the system "during the referees' test approximately two hours before the match" (Hawk-Eye Innovations, 2026e).

**Calibration on game day, from a posting.** A Hawk-Eye technician posting in Italy lists, as a duty: "Calibrate the GLT system before the match, following the relevant checklist and carrying out all the necessary tests to test its reliability and precision" (Hawk-Eye Innovations, 2026e). Notice the words "relevant checklist". The procedure is the vendor's own and is not public; this course teaches that the step exists, not how it is done.

**Lines drawn by hand, then by software.** Before semi-automated offside, the Premier League's video assistant referee (VAR) worked "with replay operators (RO) to manually determine the 'kick-point' for the offside decision and then 'draw' calibrated lines with a crosshair on the relevant defender and attacker, using multiple camera angles" (Premier League, 2025b). With FIFA's semi-automated system, VAR officials "validate the proposed decision by manually checking the automatically selected kick point and the automatically created offside line" (FIFA, n.d.-b). If the system fails, "the VARs can still use other well-known offside support tools, such as crosshairs and triangulation" (FIFA, n.d.-b). So software draws the line, people still check it, and a manual method stays ready.

**League checks before kickoff.** The NFL's replay center works the same way at a different scale: "Before the games begin, staff conduct technology checks to ensure they can communicate with officials at each stadium and see video of every game" (NFL, n.d.-b).

**What to take away, reasoned.** Calibration is not done once at installation. FIFA's process has three layers: a calibration and test at install, a certificate that expires after 12 months, and a functionality test by the referee before each match. A technician's day sits inside the third layer, and their checklist is how the first two stay true.

:::reveal What three things does FIFA say a provider needs to calibrate goal-line technology in real match conditions? ||| Full pitch access with competition goals, competition lighting and official field markings (FIFA, n.d.-a).

:::reveal How long does FIFA's certification of a goal-line installation last? ||| 12 months; a retest is needed once it expires (FIFA, n.d.-a).

:::reveal What must the referee do if the goal-line system fails its pre-match test? ||| Not use the system, and report it (IFAB, 2026, p. 52).

## Sources
- ${HE_HOME} Locator: "Our Technologies" block, "TRACK".
- ${FIFA_GLT} Locator: "Installation process" paragraphs 1 and 2; "Certification process".
- ${MICHAELIDES_2026} Locator: "Unmatched Accuracy".
- ${IFAB_2026} Locator: Law 1.11, "Requirements and specifications of GLT," p. 52.
- ${HE_FIRENZE} Locator: "Key Responsibilities," items 5 and 6.
- ${PL_2025B} Locator: "What is semi-automated offside technology?"
- ${FIFA_SAOT} Locator: "How does it work?" paragraph 3; FAQ on system failure.
- ${NFL_AMGC} Locator: "Gameday at AMGC" paragraph 2.`,
    },
    {
      slug: "the-vendors-optical-and-worn",
      title: "4 · The vendors, optical and worn",
      section: "1 · What a tracking array is",
      recallContent: [
        {
          prompt: "What does FIFA say a goal-line provider needs in order to calibrate in real match conditions?",
          answer: "Full pitch access with competition goals, competition lighting and official field markings (FIFA, n.d.-a).",
        },
        {
          prompt: "What happens to a FIFA goal-line certificate after 12 months?",
          answer: "It expires, and a retest is necessary (FIFA, n.d.-a).",
        },
      ],
      body: `${QR}

**Why learn the vendors.** Postings name them, and each describes its own system differently. Every fact below comes from the company's own pages or a league's, and each is a worked example, not an endorsement.

**Hawk-Eye Innovations.** Headquartered in Basingstoke in the UK, with "over 1000 team members operating from offices and remote centres across 43 countries," and part of Sony Sports with Pulselive and Beyond Sports (Hawk-Eye Innovations, n.d.-a). It says: "Covering 25 top sports, Hawk-Eye has delivered over 100,000 days of events in 100+ countries" (Hawk-Eye Innovations, n.d.-d). It runs both review (SMART) and tracking (lessons 1 and 2).

**TRACAB.** Older articles call it "ChyronHego TRACAB". That is out of date. On February 3, 2025, Electronic Arts announced that it had "reached an agreement to acquire TRACAB Technologies" (Electronic Arts, 2025). TRACAB's product page now sits on Electronic Arts' site, calls TRACAB Optical "Emmy Award-winning," says it is used "by leagues, teams, and rights holders," and offers data through "TRACAB Gateway, an open API" (TRACAB Technologies, n.d.). This course has not found a page that says the purchase closed, so it says only that Electronic Arts agreed to buy TRACAB.

**Second Spectrum and Genius Sports.** Second Spectrum is "a Genius Sports technology solution." It became the WNBA's optical tracking provider from the 2024 regular season, using "an array of cameras arranged in each WNBA arena to collect low-latency, 3D player pose and ball-tracking data" (Women's National Basketball Association [WNBA], 2024). The WNBA's release was read through a web fetch tool rather than a browser, so a reviewer will open it before release. Second Spectrum's own website could not be read for this course, so this lesson gives no camera or point counts for it. Genius Sports also built the Premier League's offside system "in collaboration with PGMOL" (Premier League, 2025b). So the Premier League's offside system is Genius Sports, not Hawk-Eye.

**Sportradar.** In the NBA, Sportradar is "the league's exclusive data provider," working alongside Hawk-Eye to "automatically generate events, metrics, advanced stats" (Dachman, 2023). That is a data company using another company's tracking.

**Worn systems: no cameras at all.** Some tracking puts a radio tag on the athlete. KINEXON lists four tracking methods: satellite positioning (GNSS or GPS), local positioning over ultra-wideband (UWB) radio, inertial measurement units (IMUs), and optical computer vision. It notes that an "IMU does not offer opportunity to track positions" (KINEXON Sports, n.d.-b).

| Product | What the vendor says |
|---|---|
| Catapult Vector S7, "THE PREMIERE OUTDOOR SOLUTION" | 53 g; "10Hz GPS, GLONASS & SBAS (or 18Hz GPS)"; UWB range "Up to 300m"; "100 athletes" |
| Catapult Vector T7, "THE PREMIERE INDOOR SOLUTION" | 17.5 g; no satellite positioning; UWB range "Up to 250m"; worn "in Vest or Waist Pouch" |
| KINEXON PERFORM LPS | "sub-10 cm accuracy and latency under 100 ms"; "a minimum of 12 UWB anchors" indoors |

Sources: Catapult (n.d.), specifications; KINEXON Sports (n.d.-a). KINEXON's accuracy and latency are its own claims. Its anchors, the fixed receivers, "are wired in every permanent installation" (KINEXON Sports, n.d.-b), which is cable work like any other.

**The NFL tracks players by radio.** Next Gen Stats puts 20 to 30 ultra-wideband receivers in every venue, two or three radio-frequency identification (RFID) tags in each player's shoulder pads, and tags on officials, pylons, sticks, chains and in the ball: "an estimated 250 devices." "A team of three operators is required at every game." It captures location, speed, distance and acceleration "10 times per second," and "More than 200 new data points are created on every play" (NFL, n.d.-c). Lesson 9 shows that the NFL's line-to-gain measurement uses Hawk-Eye cameras instead. So in one league, players are tracked by radio and the ball's spot is measured optically.

**The rules on worn devices.** Under football's Laws, wearable tracking used in official competitions must not be dangerous and must meet "the FIFA Quality Programme for EPTS" (electronic performance and tracking systems) (IFAB, 2026, p. 69).

**A line this course keeps.** A vendor's marketing page is not evidence for a health or safety claim. A Genius Sports blog says the NFL "has reduced concussion rates partly through sports tracking data" and cites nothing (Pankhurst, 2025). This course does not teach that claim, or any vendor claim about injuries.

:::reveal Who now owns TRACAB, according to the sources this course read? ||| Electronic Arts announced an agreement to acquire TRACAB Technologies on February 3, 2025. No page read says the purchase closed.

:::reveal Which company built the Premier League's semi-automated offside system? ||| Genius Sports, with PGMOL (Premier League, 2025b), not Hawk-Eye.

:::reveal Does NFL Next Gen Stats track players with cameras? ||| No. It uses RFID tags in shoulder pads and ultra-wideband receivers around the venue (NFL, n.d.-c).

## Sources
- ${HE_ABOUT} Locator: "Our Global Presence" and "Part of the Sony Family".
- ${HE_HOME} Locator: banner.
- ${EA_2025} Locator: paragraphs 2 and 4.
- ${TRACAB} Locator: "TRACAB Optical" and "Scaleable Delivery through the Cloud".
- ${WNBA_2024} Locator: release text (read through a web fetch tool).
- ${PL_2025B} Locator: paragraph 4.
- ${DACHMAN_2023} Locator: paragraph 8.
- ${KINEXON_TRACKING} Locator: "What is Player Tracking?", "Athlete Tracking Technology" and the LPS section.
- ${CATAPULT} Locator: "Vector S7" and "Vector T7" specifications.
- ${KINEXON_LPS} Locator: opening paragraph, "Validated Accuracy" and the FAQ.
- ${NFL_NGS} Locator: paragraphs 3, 4 and 6.
- ${IFAB_2026} Locator: Law 4, "Electronic performance and tracking systems (EPTS)," p. 69.
- ${PANKHURST_2025} Locator: "Injury Prevention" (cited as a claim this course does not teach).`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · What a tracking array is",
      section: "1 · What a tracking array is",
      body: "A graded check on the three systems beside the field, how an optical array is built and calibrated, and the vendors, optical and worn. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What does broadcasting-break-in lesson 12's replay operator do, as this course describes it?", options: ["Marks plays and hands the director angles", "Checks the officials' synchronized angles", "Tags injury clips for the medical staff", "Calibrates cameras against field lines"], correctIndex: 0, explanation: "Broadcast replay is production: the operator marks in and out points and hands the director clean angles to air. Officiating and medical review belong to league systems, and calibration belongs to tracking.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Whom does the replay in this course serve, rather than the show?", options: ["The director and the producer", "The officials and medical staff", "The sponsors and the ad sales team", "The announcers and the stats crew"], correctIndex: 1, explanation: "Lesson 1: this course's replay is owned by a league or governing body and serves the officials and the medical staff. The director, announcers and stats crew belong to the broadcast.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Why does this course not teach a vendor's operator screens?", options: ["They change every single broadcast season", "They are the same for every league anyway", "They are proprietary, taught on the job", "They are covered fully in CREW-05 lessons"], correctIndex: 2, explanation: "Lesson 1: operator screens are proprietary and are taught on the job. CREW-05 does not teach them either.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Which three core technologies does Hawk-Eye name on its homepage?", options: ["SMART, POSE and GOAL-LINE", "REVIEW, MEASURE and STREAM", "CAPTURE, ROUTE and BROADCAST", "VIDEO REPLAY, TRACK and INSIGHT"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-d) names VIDEO REPLAY, TRACK and INSIGHT. SMART is the name of its review product, not one of the three.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Which Hawk-Eye technology does it say includes camera calibration?", options: ["TRACK", "INSIGHT", "VIDEO REPLAY", "SMART"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-d): \"Our optical tracking & camera calibration powers performance, ball & object tracking,\" under TRACK.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does SMART stand for?", options: ["Standard Media Archive and Routing Toolkit", "Synchronized Multi-Angle Replay Technology", "Stadium Monitoring And Review Terminal", "Shared Multi-Angle Recording Technique"], correctIndex: 1, explanation: "Synchronized Multi-Angle Replay Technology (Sony Electronics, 2025; NHL, 2025). The other expansions are invented.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does Hawk-Eye say SMART is known as in cricket?", options: ["VAR", "DRS", "TMO", "ELC"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-e): SMART is \"known in football as VAR, in cricket as DRS, and more.\" ELC is tennis line calling.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does Hawk-Eye say SMART is known as in football (soccer)?", options: ["DRS", "ELC", "VAR", "ABS"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-e): known in football as VAR. DRS is cricket's review system and ABS is baseball's ball-strike system.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does \"synchronized\" give an official reviewing a play?", options: ["Every angle shows the same instant", "Every camera records in 8K format", "Every clip is sent to the broadcaster", "Every angle has its own replay operator"], correctIndex: 0, explanation: "Lesson 1: synchronized means every angle shows the same instant, so one moment can be stepped through from several cameras.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does the NFL say technology lets certified athletic trainers do during games?", options: ["Overrule the referee on a penalty", "Diagnose a concussion from the booth", "Clear a player to return to the game", "Use video to spot possible injuries"], correctIndex: 3, explanation: "NFL (n.d.-a): technology \"allows certified athletic trainers to use video to spot possible concussions and other potential injuries during games.\" Section 2 shows that diagnosis and return decisions belong to physicians.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does Hawk-Eye say its \"Injury Review\" tool lets medical teams do?", options: ["Diagnose injuries from tracking data", "Send alerts to the referee's watch", "Zoom, tag, and archive multi-angle video", "Rank players by their injury risk"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-c): \"Injury Review\" lets medical teams \"zoom, tag, and archive multi-angle video.\" It makes no diagnosis.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Besides replay reviews and coaches' challenges, what does the NHL say later SMART enhancements supported?", options: ["Ticket scanning and fan entry gates", "Team medical and player safety reviews", "Broadcast graphics and sponsor logos", "Ice resurfacing and arena lighting"], correctIndex: 1, explanation: "NHL (2025): later enhancements supported \"team medical, and player health and safety reviews.\"", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does a trade report say about the NHL's Hawk-Eye replay and tracking systems?", options: ["They serve different purposes today", "They were merged into one system", "They are run by two rival vendors", "They replaced the league's referees"], correctIndex: 0, explanation: "Costa (2026): the two \"serve different purposes today.\" Both come from Hawk-Eye.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does lesson 1 conclude from the NHL's two Hawk-Eye systems?", options: ["Replay and tracking are one product", "A league can use only one vendor", "Tracking replaced replay review", "One vendor can run separate systems"], correctIndex: 3, explanation: "Replay and tracking can share a company and still be separate systems with separate jobs (Costa, 2026).", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Who uses NFL Next Gen Stats for game planning?", options: ["The 32 clubs", "The referees", "The stadium crew", "The fans' apps"], correctIndex: 0, explanation: "NFL (n.d.-c): the 32 clubs use the data for game planning. Football Operations, Player Health & Safety and media partners use it too, for other ends.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Which NFL department does the league say uses tracking data \"to improve the safety of the players\"?", options: ["Stadium Security", "Player Health & Safety", "Ticket Operations", "Club Marketing"], correctIndex: 1, explanation: "NFL (n.d.-c) names Player Health & Safety as using the data \"to improve the safety of the players.\"", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "In FIFA's account, what does its offside system's positional data become for fans?", options: ["A printed report after the match", "A betting feed sold to bookmakers", "A 3D animation on stadium screens", "A radio call to the stadium crowd"], correctIndex: 2, explanation: "FIFA (n.d.-b): the positional data becomes a 3D animation shown on stadium screens and given to broadcast partners.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Who owns the tracking and ball data collected by FIFA's offside system at its tournaments?", options: ["The host clubs", "The vendor", "The broadcasters", "FIFA alone"], correctIndex: 3, explanation: "FIFA (n.d.-b): FIFA \"is the sole owner of the tracking and ball data collected.\"", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "Which use besides officiating does the NBA name for its tracking data?", options: ["Virtual game recreations", "Ticket pricing for games", "Player salary arbitration", "Hiring new referees"], correctIndex: 0, explanation: "NBA (2023) names \"virtual game recreations, dynamic visualizations, unique content development and gamification.\"", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "By lesson 1's reasoning, why do the postings ask for checks, logs and reports?", options: ["Vendors are paid by the report", "Logs replace the need for checks", "One fault can reach every audience", "Leagues ban spoken handovers"], correctIndex: 2, explanation: "Each source names a different audience for the same systems, so one fault can reach officials, teams, medical staff and the broadcast at once.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What is a tracking array, in lesson 1's short definition?", options: ["Cameras or receivers that output positions", "A rack of replay decks for the officials", "The broadcast truck's camera control units", "A bank of monitors in the medical booth"], correctIndex: 0, explanation: "Lesson 1: a set of cameras, or a set of radio receivers, that turns each athlete and the ball into positions many times a second.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "What does this course say it never does about athletes' injuries?", options: ["Name the vendors who film them", "Mention that injuries happen", "Cite the leagues' own rules", "Describe a real athlete's injury"], correctIndex: 3, explanation: "Lesson 1: the course never teaches how to recognize an injury and never describes a real athlete's injury. It does name vendors and cite the leagues' rules.", sourceLessonSlug: "three-systems-beside-the-field" },
          { prompt: "How many dedicated tracking cameras does FIFA say its offside system uses?", options: ["12", "6", "30", "14"], correctIndex: 0, explanation: "FIFA (n.d.-b): \"12 dedicated tracking cameras.\" Up to 30 is the Premier League's count and 14 is Hawk-Eye's goal-line count.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "Where does FIFA mount its offside tracking cameras?", options: ["On poles behind each goal", "Underneath the stadium roof", "Along the edge of the pitch", "Inside the broadcast truck"], correctIndex: 1, explanation: "FIFA (n.d.-b): the cameras are \"mounted underneath the roof of the stadium.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "How many data points per player does FIFA's offside system track?", options: ["Exactly 21", "Up to 65", "Up to 29", "About 250"], correctIndex: 2, explanation: "FIFA (n.d.-b): \"up to 29 data points of each individual player.\" 21 joints and 65 points are TRACAB's figures.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "How often does FIFA's offside system track players and the ball?", options: ["10 times per second", "50 times per second", "500 times per second", "Once each frame of TV"], correctIndex: 1, explanation: "FIFA (n.d.-b): \"50 times per second.\" 500 times per second was the 2022 ball sensor.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "At the 2022 World Cup, how often did the ball's sensor send data to the video operation room?", options: ["50 times per second", "100 times per second", "60 times per second", "500 times per second"], correctIndex: 3, explanation: "FIFA (n.d.-b): the sensor \"sends ball data to the video operation room 500 times per second.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "Why did the 2022 World Cup ball carry a sensor, per FIFA?", options: ["To find the kick point", "To measure ball pressure", "To count the passes made", "To stop counterfeit balls"], correctIndex: 0, explanation: "FIFA (n.d.-b): the ball data was used to detect the kick point for offside.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "Which four parts does lesson 2 find in FIFA's one sentence about its array?", options: ["Fiber, power, network and a truck", "Referees, coaches, medics and fans", "Cameras, body points, the ball, a rate", "Lenses, tripods, cables and lights"], correctIndex: 2, explanation: "Fixed cameras, points on each athlete, the ball, and a rate: the four parts of every optical array.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "Whose number is \"29 skeletal points on each player in real-time\"?", options: ["TRACAB's Optical", "Hawk-Eye's SkeleTRACK", "KINEXON's LPS", "Catapult's Vector"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-e), SkeleTRACK. TRACAB uses 21 joints, and KINEXON and Catapult are worn radio systems.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "From how many joints does Electronic Arts say TRACAB captures live skeleton data?", options: ["29", "12", "65", "21"], correctIndex: 3, explanation: "Electronic Arts (2025): \"live skeleton data from 21 joints.\" 65 is its data points per player and referee.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "How many unique data points per player and referee does Electronic Arts say TRACAB produces?", options: ["65", "29", "21", "10"], correctIndex: 0, explanation: "Electronic Arts (2025): \"65 unique data points per player and referee.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "Up to how many surface mesh points per player does the Premier League's system track?", options: ["1,000", "100,000", "10,000", "600"], correctIndex: 2, explanation: "Premier League (2025b): \"up to 10,000 surface 'mesh' data points per player.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "According to AP, what do NHL tracking cameras capture beyond 29 skeletal points?", options: ["Two more points on skates", "Three more points on sticks", "One more point on the puck", "Four more on the goal frame"], correctIndex: 1, explanation: "Whyno (2025), an AP story: cameras \"capture 29 skeletal points on each player and three more on sticks.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "What does lesson 2 conclude about \"29 points per athlete\"?", options: ["It is a FIFA legal minimum", "It is the industry standard", "It is the NFL's own count", "It is one vendor's number"], correctIndex: 3, explanation: "Points per athlete are a design choice: 29 for Hawk-Eye, 21 joints and 65 points for TRACAB, up to 10,000 mesh points for the Premier League system.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "How many cameras does the Premier League say its offside system uses?", options: ["Exactly 12", "Up to 14", "Up to 30", "About 6"], correctIndex: 2, explanation: "Premier League (2025b): \"up to 30 newly installed cameras.\" FIFA's system uses 12.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "At what frame rate do several Premier League tracking cameras capture?", options: ["50 frames per second", "100 frames per second", "300 frames per second", "25 frames per second"], correctIndex: 1, explanation: "Premier League (2025b): \"capturing footage at 100 frames per second.\" 300 fps is MLB's pitch and bat cameras.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "How does the Premier League compare its tracking cameras' 100 fps with typical broadcast cameras?", options: ["Half their frame rate", "The same frame rate", "Four times the rate", "Twice their frame rate"], correctIndex: 3, explanation: "Premier League (2025b): \"twice the frame rate of typical broadcast cameras.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "How many Hawk-Eye cameras does MLB say each club has around its ballpark?", options: ["12", "6", "30", "5"], correctIndex: 0, explanation: "MLB (n.d.): \"Each club now has 12 Hawk-Eye cameras.\" Five of them are the high-frame-rate pitch and bat cameras.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "What do MLB's five high-frame-rate cameras track?", options: ["Fans in the seats", "Umpires' positions", "Pitches and bats", "The bullpen doors"], correctIndex: 2, explanation: "MLB (n.d.): five high-frame-rate cameras for pitch and bat tracking; the other seven track players and batted balls.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "To what frame rate did MLB upgrade its pitch and bat cameras in 2023?", options: ["100 fps", "300 fps", "60 fps", "1,000 fps"], correctIndex: 1, explanation: "MLB (n.d.): \"upgraded from 100 frames per second to 300 fps in 2023.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "What share of batted balls does MLB say Hawk-Eye now tracks?", options: ["Roughly 89%", "About 75%", "Exactly 50%", "Roughly 99%"], correctIndex: 3, explanation: "MLB (n.d.): the system raised the share \"from roughly 89% to 99%.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "What does TRACAB say about how fast its optical data is delivered?", options: ["Within 0.15 seconds", "Within 15 seconds", "Within 1.5 seconds", "Within 0.015 seconds"], correctIndex: 0, explanation: "TRACAB Technologies (n.d.): \"Data delivered within 0.15 seconds.\" It is the vendor's claim.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "How fast does Hawk-Eye say its goal-line signal reaches the referee's watch?", options: ["In about 15 seconds", "In under five minutes", "In under one second", "At the next stoppage"], correctIndex: 2, explanation: "Michaelides (2026): a validated and encrypted signal reaches the referee's smartwatch \"in under one second.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "How many tracking cameras does Hawk-Eye say its goal-line system installs per stadium?", options: ["12", "14", "6", "30"], correctIndex: 1, explanation: "Michaelides (2026): \"14 tracking cameras permanently installed in each stadium.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "Why are vendor latency figures taught as \"the vendor says\"?", options: ["They are secret by contract", "They change every match", "They are wrong by design", "They are claims, not tests"], correctIndex: 3, explanation: "Lesson 2: each figure is the company's claim about its own product, not an independent test.", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "What does TRACAB say about where its cameras can be placed?", options: ["Fixed or as a temporary mobile setup", "Only underneath the stadium roof", "Only behind both of the two goals", "Only on the broadcast camera gantry"], correctIndex: 0, explanation: "TRACAB Technologies (n.d.): \"modular camera positioning,\" either \"fixed positions for long-term deployments or as a temporary mobile setups.\"", sourceLessonSlug: "cameras-points-and-speed" },
          { prompt: "Where does Hawk-Eye place camera calibration in its list of technologies?", options: ["Inside TRACK", "Inside INSIGHT", "Inside VIDEO REPLAY", "It is not listed"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-d), under TRACK: \"Our optical tracking & camera calibration powers performance, ball & object tracking.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What is lesson 3's reasoned meaning of calibration?", options: ["Matching every camera's color to TV", "Mapping each camera's view to the field", "Setting each camera to one frame rate", "Checking each camera's power supply"], correctIndex: 1, explanation: "Lesson 3 reasons that calibration fixes each camera's position and view against the field's measured geometry, so a point in the picture maps to a true position.", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "Why does lesson 3 label its meaning of calibration as reasoned?", options: ["FIFA forbids defining it publicly", "Every vendor defines it differently", "No source gives a technical definition", "The Laws of the Game define it"], correctIndex: 2, explanation: "No source read for the course gives a technical definition, so the meaning is reasoned from FIFA's and the Premier League's wording.", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What does FIFA say installing a goal-line system typically takes?", options: ["Around a day", "Around a month", "Around a year", "Around a week"], correctIndex: 3, explanation: "FIFA (n.d.-a): installation \"will typically take around a week.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "Which three things does FIFA tie goal-line calibration to?", options: ["Competition goals, lighting, markings", "Broadcast cameras, graphics, audio", "Ball pressure, turf, temperature", "Referee watches, earpieces, radios"], correctIndex: 0, explanation: "FIFA (n.d.-a): full pitch access \"with competition goals, competition lighting and official field markings.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What does FIFA's final installation test check?", options: ["The broadcaster can show its graphics", "The system is functional and accurate", "The stadium is ready for its crowd", "The referees have their earpieces on"], correctIndex: 1, explanation: "FIFA (n.d.-a): \"The final installation test checks that the system is functional and accurate.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "Who signs the acceptance form after FIFA's final installation test?", options: ["The referee and the home team doctor", "The broadcaster and the home club", "The test institute and the organizer", "The vendor's lead and the league office"], correctIndex: 2, explanation: "FIFA (n.d.-a): the test institute and the competition organizer sign the acceptance form.", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "For how long does FIFA certify a goal-line installation?", options: ["One match", "Five years", "One week", "12 months"], correctIndex: 3, explanation: "FIFA (n.d.-a): FIFA certifies the installation for \"12 months.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What does FIFA say is necessary once a goal-line certificate expires?", options: ["A retest", "A new vendor", "A fine", "A new stadium"], correctIndex: 0, explanation: "FIFA (n.d.-a): \"A retest is necessary once the certification expires.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What accuracy does Hawk-Eye say its goal-line system shows in FIFA installation tests?", options: ["Under 1 cm", "Under 1 mm", "Under 10 cm", "Under 1 m"], correctIndex: 1, explanation: "Michaelides (2026): \"accuracy of under 1mm during FIFA Installation Tests.\" It is the vendor's claim.", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "Under Law 1, who must test goal-line technology before the match?", options: ["The vendor", "The home club", "The referee", "The broadcaster"], correctIndex: 2, explanation: "IFAB (2026, p. 52): \"the referee must test the technology's functionality before the match as set out in the Testing Manual.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "Under Law 1, what must the referee do if goal-line technology fails its test?", options: ["Use it anyway, then report", "Delay the match until fixed", "Ask the vendor to override", "Not use it, and report this"], correctIndex: 3, explanation: "IFAB (2026, p. 52): \"the referee must not use the GLT system and must report this.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "When does Hawk-Eye's Firenze technician posting monitor the system during the referees' test?", options: ["About two hours before", "About ten minutes before", "The day before the match", "Right after the match"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026e): \"during the referees' test approximately two hours before the match.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What does the Firenze posting say the technician follows to calibrate goal-line technology?", options: ["The referee's own notes", "The relevant checklist", "The broadcaster's script", "The club's match program"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026e): \"Calibrate the GLT system before the match, following the relevant checklist.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "Why does this course teach that calibration happens, but not how it is done?", options: ["Calibration is never done on game day", "Any crew member may calibrate freely", "The vendor's procedure is not public", "FIFA does all the calibration itself"], correctIndex: 2, explanation: "Lesson 3: the procedure is the vendor's own and is not public, so the course teaches that the step exists.", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "Before semi-automated offside, who worked with the Premier League's VAR to draw offside lines?", options: ["Assistant referees", "Club video analysts", "Broadcast directors", "Replay operators"], correctIndex: 3, explanation: "Premier League (2025b): the VAR worked \"with replay operators (RO)\" to find the kick point and draw calibrated lines.", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What tool did the Premier League's VAR use to draw calibrated lines before SAOT?", options: ["A crosshair", "A laser pen", "A stopwatch", "A tape rule"], correctIndex: 0, explanation: "Premier League (2025b): lines were drawn \"with a crosshair on the relevant defender and attacker.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "With FIFA's semi-automated offside, what do VAR officials still do by hand?", options: ["Draw every line without software", "Check the kick point and the line", "Choose the tracking camera angles", "Measure players with a tape rule"], correctIndex: 1, explanation: "FIFA (n.d.-b): VAR officials \"validate the proposed decision by manually checking the automatically selected kick point and the automatically created offside line.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What does FIFA say VARs can use if the semi-automated system fails?", options: ["The referee's own memory", "A coin toss between teams", "Crosshairs and triangulation", "The broadcaster's graphics"], correctIndex: 2, explanation: "FIFA (n.d.-b): \"other well-known offside support tools, such as crosshairs and triangulation.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What does the NFL say its replay center staff check before games begin?", options: ["Every stadium camera is recalibrated", "Every player's helmet radio is tested", "Every game ball is weighed and marked", "They can talk to officials and see video"], correctIndex: 3, explanation: "NFL (n.d.-b): staff check that \"they can communicate with officials at each stadium and see video of every game.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What are the three layers of goal-line calibration and testing in lesson 3?", options: ["Install test, 12-month certificate, match test", "Daily test, weekly test and a monthly test", "Vendor test, club test and broadcaster test", "Camera test, cable test and a power test"], correctIndex: 0, explanation: "A calibration and test at installation, a certificate that expires after 12 months, and the referee's functionality test before each match (FIFA, n.d.-a; IFAB, 2026).", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "In lesson 3's reasoning, which layer of testing does a technician's game day sit inside?", options: ["The 12-month certificate", "The referee's pre-match test", "The week-long installation", "The yearly league audit"], correctIndex: 1, explanation: "The technician's day sits inside the pre-match layer: the referee's functionality test before each match, which the Firenze posting monitors.", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "What does FIFA say a goal-line provider may need access to during installation?", options: ["Dressing rooms, bar, ticket office", "Team buses, hotel, training ground", "Pitch, floodlights, technical areas", "Press room, car park, club shop"], correctIndex: 2, explanation: "FIFA (n.d.-a): \"the pitch, floodlighting and all technical areas of the stadium.\"", sourceLessonSlug: "calibration-and-certification" },
          { prompt: "Where is Hawk-Eye Innovations headquartered?", options: ["Atlanta, USA", "Tokyo, Japan", "Munich, Germany", "Basingstoke, UK"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-a): headquartered in Basingstoke, UK.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Of which company's sports group is Hawk-Eye a part?", options: ["Sony Sports", "EA Sports", "Genius Sports", "Stats Perform"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-a): part of Sony Sports, with Pulselive and Beyond Sports.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Across how many countries does Hawk-Eye say its offices and remote centers operate?", options: ["25", "43", "100", "12"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-a): \"over 1000 team members operating from offices and remote centres across 43 countries.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Why is the label \"ChyronHego TRACAB\" out of date?", options: ["TRACAB closed down in 2023", "Sony bought TRACAB in 2020", "TRACAB merged with KINEXON", "EA agreed to buy TRACAB in 2025"], correctIndex: 3, explanation: "Electronic Arts (2025) announced an agreement to acquire TRACAB Technologies on February 3, 2025.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "On what date did Electronic Arts announce its agreement to acquire TRACAB Technologies?", options: ["February 3, 2025", "April 1, 2025", "June 4, 2025", "March 9, 2023"], correctIndex: 0, explanation: "Electronic Arts (2025), dated February 3, 2025. April 1, 2025 is the NFL line-to-gain announcement.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Why does lesson 4 say only that Electronic Arts agreed to buy TRACAB?", options: ["The purchase was blocked by a court", "No page read says the purchase closed", "Electronic Arts withdrew the offer", "TRACAB's owners refused the offer"], correctIndex: 1, explanation: "No page read for the course states that the purchase closed, so the lesson says only what the announcement says.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "What does TRACAB call the open API it offers data through?", options: ["TRACAB Insight", "TRACAB Connect", "TRACAB Gateway", "TRACAB Bridge"], correctIndex: 2, explanation: "TRACAB Technologies (n.d.): \"TRACAB Gateway, an open API.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Who does TRACAB say uses TRACAB Optical?", options: ["Only betting firms and bookmakers", "Only video game developers", "Only college athletic programs", "Leagues, teams, and rights holders"], correctIndex: 3, explanation: "TRACAB Technologies (n.d.): used \"by leagues, teams, and rights holders.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Which league's optical tracking did Second Spectrum take on from the 2024 regular season?", options: ["The WNBA's", "The NHL's", "MLB's", "The NFL's"], correctIndex: 0, explanation: "WNBA (2024): Second Spectrum became the WNBA's optical tracking provider from the 2024 regular season.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Second Spectrum is described as a technology solution of which company?", options: ["Hawk-Eye", "Genius Sports", "Sportradar", "Catapult"], correctIndex: 1, explanation: "WNBA (2024): Second Spectrum is \"a Genius Sports technology solution.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Why does lesson 4 give no camera or point counts for Second Spectrum?", options: ["It refuses to use cameras at all", "It tracks only the ball, not players", "Its own website could not be read", "Its counts are the same as TRACAB's"], correctIndex: 2, explanation: "Second Spectrum's own site could not be read for the course, so the lesson does not give its counts.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Who built the Premier League's semi-automated offside system with PGMOL?", options: ["Hawk-Eye", "TRACAB", "KINEXON", "Genius Sports"], correctIndex: 3, explanation: "Premier League (2025b): built \"in collaboration with PGMOL and sports data and technology company Genius Sports.\" Not Hawk-Eye.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "What role does Sportradar play in NBA tracking, per a trade report?", options: ["The league's exclusive data provider", "The league's camera installer", "The league's replay center operator", "The league's ticketing partner"], correctIndex: 0, explanation: "Dachman (2023): Sportradar is \"the league's exclusive data provider,\" working alongside Hawk-Eye.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Which tracking method does KINEXON say does not offer positions?", options: ["Ultra-wideband positioning", "Inertial measurement units", "Satellite positioning", "Optical computer vision"], correctIndex: 1, explanation: "KINEXON Sports (n.d.-b): \"IMU does not offer opportunity to track positions.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "What accuracy does KINEXON claim for PERFORM LPS?", options: ["Sub-1 mm", "Sub-1 m", "Sub-10 cm", "Sub-10 m"], correctIndex: 2, explanation: "KINEXON Sports (n.d.-a) claims \"sub-10 cm accuracy and latency under 100 ms.\" It is the vendor's claim.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "How many UWB anchors does KINEXON say a typical indoor installation needs at minimum?", options: ["4", "30", "250", "12"], correctIndex: 3, explanation: "KINEXON Sports (n.d.-a): \"a minimum of 12 UWB anchors to ensure indoor coverage.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "How does KINEXON say its anchors connect in every permanent installation?", options: ["They are wired", "Over Wi-Fi", "Over cellular", "By satellite"], correctIndex: 0, explanation: "KINEXON Sports (n.d.-b): anchors \"are wired in every permanent installation.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "How does Catapult describe its Vector T7?", options: ["The premiere outdoor solution", "The premiere indoor solution", "A stadium camera array", "A referee's smartwatch"], correctIndex: 1, explanation: "Catapult (n.d.): the T7 is \"THE PREMIERE INDOOR SOLUTION\"; the S7 is the outdoor one.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Which Catapult Vector unit has satellite positioning?", options: ["The T7", "Neither unit", "The S7", "Both units"], correctIndex: 2, explanation: "Catapult (n.d.): the S7 lists \"10Hz GPS, GLONASS & SBAS\"; the indoor T7 has no satellite positioning.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "How does NFL Next Gen Stats track players?", options: ["Twelve roof-mounted cameras", "GPS units in each helmet", "Drones above the stadium", "RFID tags and UWB receivers"], correctIndex: 3, explanation: "NFL (n.d.-c): RFID tags in shoulder pads and 20 to 30 ultra-wideband receivers in every venue. It is radio, not optical.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "About how many devices does the NFL estimate Next Gen Stats uses per venue?", options: ["250", "29", "12", "1,000"], correctIndex: 0, explanation: "NFL (n.d.-c): \"an estimated 250 devices.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "How many operators does the NFL say Next Gen Stats needs at every game?", options: ["One", "Three", "Ten", "Thirty"], correctIndex: 1, explanation: "NFL (n.d.-c): \"A team of three operators is required at every game.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "How often does Next Gen Stats capture location, speed, distance and acceleration?", options: ["50 times per second", "Once per play", "10 times per second", "Once per quarter"], correctIndex: 2, explanation: "NFL (n.d.-c): \"10 times per second.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Where does the NFL put the RFID tags in a player's gear?", options: ["In the helmet visor", "In the cleats' soles", "In the jersey number", "In the shoulder pads"], correctIndex: 3, explanation: "NFL (n.d.-c): two to three RFID tags in each player's shoulder pads.", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Under the Laws of the Game, what must wearable tracking used in official competitions meet?", options: ["FIFA Quality Programme for EPTS", "The ISO 9001 quality standard", "The IFAB charter for wearables", "The UEFA device registration"], correctIndex: 0, explanation: "IFAB (2026, p. 69): wearable EPTS must not be dangerous and must meet \"the FIFA Quality Programme for EPTS.\"", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "Why does lesson 4 not teach the Genius Sports blog's concussion claim?", options: ["The claim is about a rival vendor", "The NFL asked for it to be removed", "The blog is behind a paywall", "Marketing is not medical evidence"], correctIndex: 3, explanation: "The blog cites nothing, and a vendor's marketing page is not evidence for a health or safety claim (Pankhurst, 2025).", sourceLessonSlug: "the-vendors-optical-and-worn" },
          { prompt: "In one league, players are tracked by radio while the ball's spot is measured optically. Which league?", options: ["The NBA", "The NFL", "MLB", "The NHL"], correctIndex: 1, explanation: "NFL Next Gen Stats is radio (RFID and UWB); the NFL's line-to-gain measurement uses Hawk-Eye cameras (lesson 9).", sourceLessonSlug: "the-vendors-optical-and-worn" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2: What review systems do for medical staff
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-nfl-booth",
      title: "5 · The NFL booth: who watches, who decides",
      section: "2 · What review systems do for medical staff",
      recallContent: [
        {
          prompt: "What did Electronic Arts announce about TRACAB on February 3, 2025?",
          answer: "An agreement to acquire TRACAB Technologies. No page read for this course says the purchase closed.",
        },
        {
          prompt: "How does NFL Next Gen Stats track players?",
          answer: "By radio: RFID tags in shoulder pads and 20 to 30 ultra-wideband receivers, about 250 devices, with three operators at every game (NFL, n.d.-c).",
        },
      ],
      body: `${QR_MED}

**Two meanings of "spotter".** In *Break Into Sports & Media Broadcasting* lesson "12 · Stats, spotting boards, and replay", a spotting board is the announcer's cheat sheet of names and numbers. In this section a spotter is a person: in the NFL, a certified athletic trainer who watches the game from a booth for possible injuries (NFL, n.d.-e). When someone says "spotter" on a game day, ask which one they mean.

**What this section teaches, and what it never teaches.** It says how review is organized and who is licensed to act, in each body's own words. It does not teach how to recognize an injury, any list of signs, any assessment step or any return-to-play decision. Those are medicine. They belong to the licensed people this section names.

**How the booth began, as policy dates.** The NFL put independent certified athletic trainers in stadium booths at every game in December 2011, added a video component before the wild card playoff games of January 7 and 8, 2012, and "permanently instituted a more sophisticated system before the start of the 2012 season" (NFL, n.d.-e). A second booth spotter was added for the 2016 season (NFL, 2016a). A booth Unaffiliated Neurotrauma Consultant (UNC) was added for 2018, to "monitor the broadcast video and audio feeds of each game from the spotters' booth, and notify on-field UNCs of possible head, neck or spine injuries" (NFL, 2018).

**Who sits in the booth.**

| Who | In the NFL's words | Source |
|---|---|---|
| Two athletic trainer (AT) spotters | They "observe the game from a booth above the field and monitor all camera views," in "a dedicated private booth overlooking the field of play" | NFL (2022a); NFL (2022b) |
| The booth UNC, a physician | "co-located with the Booth AT Spotter" and "charged with monitoring all available video feeds and the network audio" | NFL Head, Neck and Spine Committee (2024, p. 5) |
| Injury video technicians | "ATC Spotters are supported by two Injury Video Replay Technicians, who assist with video replay." | NFL (2022b) |

Each game also has a UNC on each sideline. UNCs are physicians with no affiliation with NFL clubs, retained jointly by the NFL and the NFL Players Association (NFLPA) (NFL, 2022b).

**Who a spotter is.** The NFL retains and assigns spotters. Each must hold current Board of Certification (BOC) athletic trainer certification, a state license or registration where required, a four-year degree, at least 10 years as an athletic trainer, significant football experience, and no paid NFL team employment in the last 5 years (NFL, n.d.-e).

**What a spotter does.** The spotter watches play and the broadcast feed "to identify players who may potentially be injured on a play, with an emphasis on concussions and other head and neck injuries." The spotter must speak directly to the team physician, the UNC or the head athletic trainer, and "cannot relay the information to other team staff assigned to answer the bench phones" (NFL, n.d.-e).

**The boundary, in the NFL's own words.** Two sentences draw it.

> "The AT spotter does not diagnose any injuries or suggest treatment, but simply alerts the team's medical personnel to a potential injury and describes how the injury happened when possible" (NFL, n.d.-e).

> "The responsibility for the diagnosis of concussion and the decision to return a player to a game remain exclusively within the professional judgment of the Head Team Physician or the Club physician designated as responsible for the diagnosis and management of concussion" (NFL Head, Neck and Spine Committee, 2024, p. 5).

So even a licensed athletic trainer with ten years' experience does not diagnose from the booth. The physician does.

**Where the video crew fits.** The injury video review system "uses NFL Vision technology and the broadcast feed" (NFL, n.d.-e). It "is in place at every NFL game" and "gives the medical experts in the booth access to every camera angle in the stadium, well beyond what viewers see in the TV broadcast. Each game has an average of 16 camera angles" (NFL, 2022b). That count is from a page dated December 6, 2022, and this course has not confirmed that it is still the NFL's figure.

The NFL describes the work this way:

- "When the spotter spots a potential problem ... he or she tells the technician to tag and label the video" (NFL, n.d.-e).
- The spotter "can send the video via fiber optic cable to a sideline monitor where the physician, athletic trainer, or Unaffiliated Neurotrauma Consultant can see the play. The medical staff, assisted by an on-field injury video technician, can ask for slow motion, specific angles, rewind and more" (NFL, n.d.-e).
- "Sideline UNCs and team physicians are required to review video as part of their evaluation of a potential player injury" (NFL, 2022b).

**Read the verbs.** The spotter spots and tells. The technician tags, labels and plays back what the medical staff ask for. The physician evaluates. Because the physicians are required to review video, the system has to work at every game, and that is the technician's job.

**How many technicians, reasoned.** The NFL's posting for the job says two operators sit in the Injury Video Review Booth, one for each team, and two more are stationed on the field at the IVR carts, one on each sideline (NFL, 2026b). The 2022 page's "two Injury Video Replay Technicians" who support the booth spotters match the booth pair. So a game most likely has four, two up and two down. The NFL page that may state the count could not be read for this course, so the number four is reasoned, not quoted.

**One job, three names.** NFL sources say "injury video technician" and "on-field injury video technician" (NFL, n.d.-e), "Injury Video Replay Technicians" (NFL, 2022b) and "Injury Video Review Operator" (NFL, 2026b). This course uses the posting's title: injury video review operator.

:::reveal In this section, who is the "spotter," and how is that different from broadcasting-break-in's spotting board? ||| An NFL spotter is a certified athletic trainer who watches from a booth for possible injuries. A spotting board is the announcer's cheat sheet of names and numbers.

:::reveal Who diagnoses a concussion and decides on return to the game in the NFL's protocol? ||| The Head Team Physician or the club physician designated as responsible (NFL Head, Neck and Spine Committee, 2024, p. 5). Not the spotter, and not the video crew.

:::reveal What does the spotter tell the technician to do with the video? ||| "Tag and label the video" (NFL, n.d.-e).

## Sources
- ${NFL_AT_SPOTTERS} Locator: paragraphs 2 to 6 (the policy dates); "On-field injury detection and intervention," paragraphs 1, 3, 5 and 6; the requirements list.
- ${NFL_2016A} Locator: paragraph beginning "For the 2016 season".
- ${NFL_2018} Locator: "For the 2018 season" list.
- ${NFL_2022A} Locator: "Booth ATC Spotters and the Medical Timeout".
- ${NFL_2022B} Locator: paragraph on ATC spotters; UNC paragraph; IVRS paragraph.
- ${NFL_HNS_2024} Locator: p. 5, the booth UNC and the responsibility for diagnosis.
- ${NFL_IVR} Locator: "Summary".`,
    },
    {
      slug: "the-medical-timeout-and-the-radio-net",
      title: "6 · The medical timeout and the radio net",
      section: "2 · What review systems do for medical staff",
      recallContent: [
        {
          prompt: "Since when has the NFL had certified athletic trainers in stadium booths at every game?",
          answer: "December 2011; the permanent, more sophisticated system came before the 2012 season (NFL, n.d.-e).",
        },
        {
          prompt: "What does the NFL say the AT spotter does not do?",
          answer: "Diagnose any injuries or suggest treatment. The spotter alerts the team's medical personnel to a potential injury (NFL, n.d.-e).",
        },
      ],
      body: `${QR_MED}

**A stop in play, called from the booth.** "Beginning in 2015, AT spotters may use a medical timeout to stop the game to remove a player from the field for medical examination" (NFL, n.d.-e). The NFL called it "the first time in a major sport a non-participant can freeze the game clock for player safety" (NFL, 2016a).

**When, without the medicine.** The spotter may stop play only on "clear visual evidence" that meets criteria the NFL defines narrowly (NFL, n.d.-e). Those criteria are clinical, and this course does not list them. The 2024 protocol adds routes that turn on communication rather than on anything the spotter sees: the booth spotter calls the timeout when told that the booth UNC has asked for a sideline evaluation and the player is staying in the game, and the spotter "is required to call a Medical Time-Out" if a flagged player goes back in before the club confirms that an evaluation was done (NFL Head, Neck and Spine Committee, 2024, pp. 5 to 6 and 10).

**Who calls it.** In every NFL source read for this course, the call belongs to the booth AT spotter. None gives it to a video operator, and none asks the operator to suggest one.

**How the call travels.** The protocol spells out the radio procedure (NFL Head, Neck and Spine Committee, 2024, p. 10):

1. The spotter calls the Side Judge "over the Official-to-Official communication system," naming the player by team and jersey number.
2. "The exact wording is 'MEDICAL TIME OUT' repeated three times."
3. If the referee does not respond, the spotter calls the league's Field Communicator, whom the protocol calls the "teal hat."

The NFL's football operations page names the same relay as the field communicator in a "teal shirt" (NFL, n.d.-e). The two NFL documents word it differently, and this course has not settled which is current.

**What happens on the field.** The game and play clocks stop and stay frozen until the player is removed. The play clock resets to 10 seconds if it was below 10, and there is no coach-to-player headset communication during the stoppage. The player is out for at least one play, with listed exceptions, and no injury timeout is charged to the team (NFL Head, Neck and Spine Committee, 2024, pp. 10 to 11). A team's deliberate attempt to stop play unnecessarily, delay the process or "influence the actions of the AT spotter" is an "unfair act" subject to discipline (NFL, n.d.-e).

**Why this is a comms procedure, reasoned.** Every step above is a radio call: a fixed phrase, a named listener, and a fallback listener if the first does not answer. That is the shape of any good comms plan on a show, and it works only if the radios do.

**The radio net.** The protocol says booth AT spotters, UNCs and the responsible club physician "shall be connected by radio communication," that the booth spotters are also connected to the on-field game officials by radio, and that "The sideline medical staff will be able to review the game film on the sidelines" (NFL Head, Neck and Spine Committee, 2024, p. 6). The operator's posting puts those radios in the operator's hands: "Support, distribute and maintain two-way radios for both teams' medical personnel and independent medical personnel" (NFL, 2026b). Section 4 gives the hours at which the radios are handed out.

**Times on the record.** When the booth flags a player, the booth spotter and the booth UNC each note the time of their first contact with the club's medical staff and the time the staff confirm that an evaluation was done, and both times go into the post-game report. Booth spotters and booth UNCs each file a report after every game, for review by the chair of the Head, Neck and Spine Committee, the NFL Chief Medical Officer and the NFLPA Medical Director (NFL Head, Neck and Spine Committee, 2024, pp. 5 to 6). After an evaluation, the person named at the pregame meeting tells the booth that it was done, which the protocol calls closing the loop (p. 9).

**The video outlives the game.** The independent consultant who confirms a player's final clearance "must be provided a copy of all relevant reports and tests, including the sideline and booth UNC reports, the Booth AT Spotter report and team injury reports, and have access to video of the injury, where applicable" (NFL Head, Neck and Spine Committee, 2024, p. 16). So a clip tagged during the game may be needed long after it.

**Who decides, again.** The club physician "remains responsible for all final decisions regarding Return-to-Play" after consulting the sideline UNC (NFL Head, Neck and Spine Committee, 2024, p. 9). When the NFL and the NFLPA agreed in 2016 to enforce the game day protocol, with club fines of up to $150,000 for a first violation, they said an investigation "will not reach medical conclusions; it will only determine whether the protocol was followed" (National Football League Players Association [NFLPA], 2016). Even enforcement checks the process, not the medicine.

:::reveal What exact words does the booth spotter use to call a medical timeout, and to whom? ||| "MEDICAL TIME OUT," repeated three times, to the Side Judge over the Official-to-Official system (NFL Head, Neck and Spine Committee, 2024, p. 10).

:::reveal May an injury video review operator call a medical timeout? ||| No. Every NFL source read gives the call to the booth AT spotter.

:::reveal What does the operator's posting say about radios? ||| "Support, distribute and maintain two-way radios for both teams' medical personnel and independent medical personnel" (NFL, 2026b).

## Sources
- ${NFL_AT_SPOTTERS} Locator: "Stopping the game," paragraph 1; the paragraph before the field-communicator paragraph; the last paragraph ("teal shirt").
- ${NFL_2016A} Locator: paragraph 5.
- ${NFL_HNS_2024} Locator: pp. 5 to 6 (booth times and reports); p. 6 (radio communication); p. 9, items 3 and 4; pp. 10 to 11, the Medical Time-Out procedure; p. 16 (the independent consultant's file).
- ${NFL_IVR} Locator: "Responsibilities".
- ${NFLPA_2016} Locator: paragraphs 1, 3 and 4.`,
    },
    {
      slug: "world-rugby-hia-and-pitch-side-video",
      title: "7 · World Rugby: the HIA and pitch-side video",
      section: "2 · What review systems do for medical staff",
      recallContent: [
        {
          prompt: "Since when may NFL AT spotters call a medical timeout?",
          answer: "Since 2015 (NFL, n.d.-e).",
        },
        {
          prompt: "Who supports, distributes and maintains the two-way radios for both teams' medical staff, per the NFL posting?",
          answer: "The injury video review operator (NFL, 2026b).",
        },
      ],
      body: `${QR_MED}

**A second model.** World Rugby's Head Injury Assessment (HIA) organizes review differently from the NFL: the doctors run it, with video as one of their tools. As with the NFL, this lesson describes how it is organized and who may act. It does not teach the assessment.

**What the HIA is.** World Rugby's current HIA Protocol page calls it "a four-stage process introduced by World Rugby for elite adult teams" (World Rugby, n.d.-a). Its 2022 protocol PDF calls it "a three-stage process" (World Rugby, 2022, p. 1). The first stage happens during the match; the later ones happen after it and are the doctors' work. The documents also disagree with each other on other counts and timings. Because World Rugby's own documents disagree, this course gives no counts or timings of its own, and a reviewer will settle which document governs.

**Who can raise a head impact.** Head impact events are identified "by Match Officials, Team Doctors, pitch side medical practitioners or Independent Match Day Doctor (MDD)," through "direct observation, video review or instrumented mouth guard (iMG) data/alerts" (World Rugby, n.d.-a). Who may request the in-game assessment is narrower: the on-field medical staff, the referee or the MDD. An opposing team's medical staff may not request one on an opposing player (World Rugby, 2022, p. 15).

**What non-medical staff may not do.** World Rugby says it plainly:

> "Non-medical staff can alert their respective team medical staff that they have seen an incident that suggests an off-field HIA1 assessment or permanent removal. Non-medical staff cannot call for an off-field HIA1 assessment, this must be done by medical staff. Non-medical staff cannot overrule or question a call for an off-field HIA1 assessment requested by the on-field medical staff, MDD or referee" (World Rugby, 2022, pp. 18 to 19).

**Who decides.** The Team Doctor has primary responsibility for the off-field assessment and may delegate it to the MDD, and "All return to play decisions must be discussed with the Independent Match Day Doctor who has ultimate oversight and decision-making with respect to return to play" (World Rugby, n.d.-a). The MDD may also remove a player under Regulation 15.2.1(d), after discussion with the Team Doctor (World Rugby, n.d.-d).

**Where video sits.** "Video review has three roles in off-field HIA1 assessment": the MDD reviews incidents during play; a second review takes place with the MDD and the Team Doctor present; and a final review comes after the off-field assessment, before any return decision (World Rugby, n.d.-a). If a player cleared by the MDD is to return, "the Team Doctor MUST review the video before the player is allowed to return to play" (World Rugby, n.d.-e). All three roles are doctors' reviews.

**The video standard reads like a technician's spec.** For premium competitions, World Rugby sets a minimum (World Rugby, n.d.-e):

- "Live and delayed (10 seconds) views"
- "Minimum 4 views (broadcast+ 3 others - ideally inclusive of a high wide view)"
- "Ability to stop/ rewind /slowdown/ replay vision"
- "Availability of sound or sports ears"

The 2022 PDF adds "Ability to mark incident" (World Rugby, 2022, p. 26). "As a basic standard a competition using the HIA protocol must facilitate access to video review" (World Rugby, n.d.-e). Reasoned: each item on that list is something a video crew builds and runs, from feeds and a delay to transport controls, marking and audio. No World Rugby page read for this course says who builds it.

**When the video fails.** World Rugby plans for it. If the system fails before or during a game, the HIA protocol may still be used; the doctors are advised to work with "a Lower threshold for removal"; and if play goes ahead without video review, the MDD should make sure some footage, broadcast or performance, is captured for later review (World Rugby, n.d.-e). A failure in "the delivery of video viewing," such as "no side-line video link," is one of the thresholds that send a case to the HIA Review Panel (World Rugby, 2022, p. 30). A dead video link is an event the governing body reviews.

**Clips after the match.** Each union's chief medical officer must confirm whether HIA and suspicious incidents "will be identified and 'clipped' by the Union's video support technicians," or by World Rugby's Game Analysis department where a union lacks the service (World Rugby, 2022, p. 29). Clips of every HIA event and other suspicious events are collated and sent weekly to the competition's HIA Process Reviewer (World Rugby, 2022, pp. 29 to 30). That is the one place these documents name a non-medical video role.

**Who runs the pitch-side video.** No World Rugby page read for this course says who operates pitch-side video on match day: a technician, the MDD, or the "video match day doctor" the current HIA page mentions.

**Time and devices.** The off-field assessment uses a temporary replacement of "a set 12 minutes," and the clock starts "when the player crosses the sideline" (World Rugby, n.d.-a). Assessments are logged in World Rugby's Specialised Concussion rugby Management (SCRM) app (World Rugby, n.d.-a). At the pre-match medical meeting, the home team gives the MDD a Prevent iPad or iPhone for mouthguard data, sometimes with a Bluetooth device that "helps enhance the connectivity to the IMGs" and must sit next to the iPad for the whole game (World Rugby, n.d.-b). That is a piece of kit someone has to set up and keep charged.

:::reveal Under World Rugby's protocol, may non-medical staff call for an off-field HIA1 assessment? ||| No. They can alert their team's medical staff, but the call "must be done by medical staff" (World Rugby, 2022, pp. 18 to 19).

:::reveal Name two items in World Rugby's minimum video standard for the HIA. ||| Any two of: live and 10-second delayed views; at least 4 views including broadcast; stop, rewind, slow-down and replay; sound (World Rugby, n.d.-e).

:::reveal What happens to a case in which there was "no side-line video link"? ||| It meets one of the thresholds that send a case to the HIA Review Panel (World Rugby, 2022, p. 30).

## Sources
- ${WR_HIA} Locator: "four-stage process" list; "Stage 1" (who identifies head impact events, responsibility for the off-field assessment); "Video review has three roles"; the paragraphs on the 12-minute replacement, SCRM, and the multiple-HIA paragraph ("video match day doctor").
- ${WR_2022} Locator: p. 1 ("three-stage process"); p. 15, Q6; pp. 18 to 19, Q21; p. 26, standard 4; pp. 29 to 30, the HIA Review Process and threshold 2.
- ${WR_MDD} Locator: list items on unilateral removal.
- ${WR_VIDEO} Locator: opening list; paragraphs 1, 3 and 4.
- ${WR_BEFORE} Locator: paragraph 1.`,
    },
    {
      slug: "who-is-licensed-to-act",
      title: "8 · Who may diagnose, who may stop play, who runs the video",
      section: "2 · What review systems do for medical staff",
      recallContent: [
        {
          prompt: "Under World Rugby's HIA, who has ultimate oversight of return-to-play decisions?",
          answer: "The Independent Match Day Doctor (MDD); all return decisions must be discussed with the MDD (World Rugby, n.d.-a).",
        },
        {
          prompt: "Which non-medical role does World Rugby name for clipping incidents for post-game review?",
          answer: "The union's video support technicians, or World Rugby's Game Analysis department where a union lacks the service (World Rugby, 2022, p. 29).",
        },
      ],
      body: `${QR_MED}

**College sport: the NCAA.** The NCAA Sport Science Institute's Concussion Safety Protocol Checklist is headed "Updated June 2026" and says it is "not intended as a clinical practice guideline or legal standard of care" (National Collegiate Athletic Association [NCAA] Sport Science Institute, 2026, p. 1). It requires medical personnel "with training in the diagnosis, treatment and initial management of acute concussion" to be "present" at all NCAA competitions in 21 listed contact or collision sports. "Present" means "on site at the campus or arena of the competition," and those personnel "may be from either team or may be independently contracted for the event" (NCAA Sport Science Institute, 2026, p. 4). "Evaluation must be by an athletic trainer or team physician (or physician designee) with concussion experience" (p. 4), and "Final determination of unrestricted return-to-sport is from the team physician or medically qualified physician designee" (p. 11).

**No video in the checklist, reasoned.** The checklist was read in full for this course, all 12 pages, and none of its sections mentions video review. So this document does not require video, though a school or conference may use it. Whether any other NCAA rule requires video review for concussion is a question this course leaves open.

**Who holds the authority.** The NCAA's independent medical care best practices affirm "the unchallengeable autonomous authority of primary athletics health care providers (team physicians and athletic trainers) to determine medical management and return-to-play decisions," with "ultimate medical reporting authority being the team physician" (NCAA Sport Science Institute, n.d., pp. 3 to 4). The administrator who runs the program, called the "Athletics Health Care Administrator" in the legislative language, "does not need to be a licensed physician" (NCAA Sport Science Institute, n.d., p. 4).

**Hockey: spotters at the league office.** In October 2016 the NHL announced Central League Spotters who monitor all games "from the Player Safety Room in New York" through the television broadcast and can require a player's removal for evaluation. They "are all certified athletic trainers who have clinical experience working in elite level hockey." In-Arena League Spotters are off-ice officials trained for the role, and only the Central League Spotter communicates with the club's medical staff. A player designated for evaluation may not re-enter "unless and until he is evaluated by his Club's medical staff and cleared to play" (NHL, 2016). This course read only the 2016 announcement and has not confirmed that the NHL's spotter system still works this way.

**Who athletic trainers are.** The National Athletic Trainers' Association (NATA) says athletic training "is recognized by the American Medical Association (AMA), Health Resources Services Administration (HRSA) and the Department of Health and Human Services (HHS) as an allied health care profession." Athletic trainers "render service or treatment, under the direction of or in collaboration with a physician, in accordance with their education, training and the state's statutes, rules and regulations," and "Athletic trainers must graduate from an accredited master's program" (National Athletic Trainers' Association [NATA], n.d.). The BOC "provides the only accredited certification program for Athletic Trainers (ATs) in the United States" (Board of Certification for the Athletic Trainer [BOC], n.d.-a).

**Licensed in how many states: two numbers.** NATA says "Athletic trainers are licensed or otherwise regulated in 50 states and the District of Columbia" (NATA, n.d.). The BOC says "Currently, 49 states and the District of Columbia regulate the practice of athletic training," and that "Compliance with state regulatory requirements is mandatory and the only avenue to legal athletic training practice" (BOC, n.d.-b). The two bodies give different counts, and this course has not settled which is current.

**Three tiers, reasoned.** Set the NFL, World Rugby, the NCAA and the NHL side by side and the same three tiers come back. The table is this course's grouping; each line rests on lessons 5 to 8.

| Tier | Who | What the sources let them do |
|---|---|---|
| 1. Physicians | The NFL club physician, with the UNC; rugby's Team Doctor and MDD; the NCAA team physician | Diagnose, and decide on return |
| 2. Licensed health professionals in a watching role | NFL booth AT spotters; NHL central league spotters | Watch, flag, and trigger an evaluation or stop play; not diagnose in that role |
| 3. Non-medical crew | NFL injury video review operators; rugby union video support technicians | Keep the video, the clips and the radios working; tag what they are told to tag |

The NFL booth spotter shows why tier 2 exists. The role requires BOC certification and a state license where required (NFL, n.d.-e), and yet "The AT spotter does not diagnose any injuries or suggest treatment" (NFL, n.d.-e). This course teaches tier 3 as the job, and tiers 1 and 2 as the people that job serves.

**One posting phrase to read carefully.** The NFL's posting for the operator lists "Must be able to recognize and record player injuries" among its qualifications (NFL, 2026b). No source read for this course says what "recognize" means for this role or lists what the operator must not do. Read against the protocols in this section, the narrow reading is the safe one, reasoned: notice and log what happens for the people who decide, and never act as one of them. The reviewer who has done the job will confirm or correct it.

**What to say in an interview, reasoned.** If you are asked what you would do when you see a hard hit on your monitor, the sources point to one answer: keep the system and the radios working, tag and play back what the licensed staff ask for, and leave every medical call to them.

:::reveal Who makes the final determination of return to sport under the NCAA checklist? ||| The team physician or a medically qualified physician designee (NCAA Sport Science Institute, 2026, p. 11).

:::reveal In the three tiers, where does the video crew sit, and what may it do? ||| Tier 3, non-medical crew: keep the video, clips and radios working and tag what they are told to tag. It never diagnoses or decides.

:::reveal Do NATA and the BOC agree on how many states regulate athletic trainers? ||| No. NATA says 50 states and the District of Columbia; the BOC says 49 states and the District of Columbia.

## Sources
- ${NCAA_SSI_2026} Locator: p. 1 (date and scope note); p. 4 (medical personnel present; who evaluates); p. 11 (final determination); whole document, read for any mention of video.
- ${NCAA_SSI_IMC} Locator: pp. 3 to 4 (autonomous authority); p. 4 (Athletics Health Care Administrator).
- ${NHL_2016} Locator: paragraphs 1 to 3.
- ${NATA} Locator: paragraphs 1 to 3; the regulation paragraphs.
- ${BOC_ABOUT} Locator: paragraph 1.
- ${BOC_STATES} Locator: paragraph 1.
- ${NFL_AT_SPOTTERS} Locator: requirements list; "On-field injury detection and intervention".
- ${NFL_IVR} Locator: "Qualifications".`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · What review systems do for medical staff",
      section: "2 · What review systems do for medical staff",
      body: "A graded check on how medical review is organized and who is licensed to act: the NFL booth, the medical timeout and the radio net, World Rugby's HIA and pitch-side video, and the three tiers. It asks nothing about diagnosis. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "In section 2, what is an NFL \"spotter\"?", options: ["A certified athletic trainer in a booth", "The announcer's cheat sheet of names", "A camera aimed at the line of scrimmage", "A referee who watches from the sideline"], correctIndex: 0, explanation: "Lesson 5: an NFL spotter is a certified athletic trainer who watches from a booth for possible injuries (NFL, n.d.-e). The cheat sheet is broadcasting's spotting board.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "What is a spotting board in broadcasting-break-in lesson 12?", options: ["A booth where athletic trainers watch play", "An announcer's sheet of names and numbers", "A screen that shows the tracking data", "A panel that routes the injury video"], correctIndex: 1, explanation: "A spotting board is the announcer's cheat sheet of names and numbers. Lesson 5 warns that \"spotter\" means a person in this section.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "When did the NFL put independent certified athletic trainers in stadium booths at every game?", options: ["September 2016", "January 2018", "December 2011", "August 2015"], correctIndex: 2, explanation: "NFL (n.d.-e): December 2011. The second spotter came for 2016 and the booth UNC for 2018.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "Before which games was a video component added to the NFL booth?", options: ["The 2016 preseason opener games", "The 2018 Super Bowl and Pro Bowl", "The 2015 international games", "The January 2012 wild card games"], correctIndex: 3, explanation: "NFL (n.d.-e): a video component was added before the wild card playoff games of January 7 and 8, 2012.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "For which season did the NFL add a second booth spotter?", options: ["2012", "2016", "2018", "2015"], correctIndex: 1, explanation: "NFL (2016a): the second booth spotter was added for the 2016 season.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "For which season did the NFL add a booth UNC?", options: ["2016", "2012", "2018", "2011"], correctIndex: 2, explanation: "NFL (2018): the booth UNC was added for the 2018 season, to monitor the broadcast video and audio feeds from the spotters' booth.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "What does UNC stand for among the NFL's game-day medical staff?", options: ["Unified National Coordinator", "Unassigned Network Controller", "University Neurology Clinician", "Unaffiliated Neurotrauma Consultant"], correctIndex: 3, explanation: "Unaffiliated Neurotrauma Consultant: a physician with no affiliation with NFL clubs (NFL, 2022b).", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "What is the booth UNC charged with, per the 2024 protocol?", options: ["Monitoring all video feeds and network audio", "Operating replay decks for the game officials", "Running the radio net for both of the teams", "Clearing every flagged player to go back in"], correctIndex: 0, explanation: "NFL Head, Neck and Spine Committee (2024, p. 5): the booth UNC is \"charged with monitoring all available video feeds and the network audio.\" Return decisions belong to the club physician.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "Who retains the UNCs, per the NFL?", options: ["The home club's medical staff", "The NFL and the NFLPA jointly", "The visiting club's head coach", "The stadium's emergency service"], correctIndex: 1, explanation: "NFL (2022b): UNCs are physicians with no club affiliation, retained jointly by the NFL and the NFLPA.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "At least how many years as an athletic trainer must an NFL booth spotter have?", options: ["5", "4", "20", "10"], correctIndex: 3, explanation: "NFL (n.d.-e): at least 10 years as an athletic trainer. Five years is the bar on past paid NFL team employment.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "What is the NFL spotter's rule on past team employment?", options: ["No paid NFL team job in the past 5 years", "No paid NFL team job in the past 20 years", "Must have worked for at least one club", "Must be employed by the home team"], correctIndex: 0, explanation: "NFL (n.d.-e): no paid NFL team employment in the last 5 years. The spotter is independent of the clubs.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "Which certification must an NFL booth spotter hold?", options: ["A board certification in neurology", "BOC athletic trainer certification", "An emergency medical technician card", "A league replay official's license"], correctIndex: 1, explanation: "NFL (n.d.-e): current Board of Certification athletic trainer certification, plus a state license or registration where required.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "To whom must an NFL spotter speak directly?", options: ["Any staff member on the bench phone", "The head coach or the quarterback", "The team physician, UNC or head AT", "The broadcast producer in the truck"], correctIndex: 2, explanation: "NFL (n.d.-e): the spotter must speak directly to the team physician, the UNC or the head athletic trainer, and \"cannot relay the information to other team staff assigned to answer the bench phones.\"", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "What does the NFL say the AT spotter does not do?", options: ["Watch the broadcast feed for injuries", "Alert the team's medical personnel", "Describe how an injury happened", "Diagnose injuries or suggest treatment"], correctIndex: 3, explanation: "NFL (n.d.-e): \"The AT spotter does not diagnose any injuries or suggest treatment, but simply alerts the team's medical personnel.\"", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "Who holds responsibility for diagnosing a concussion in the NFL protocol?", options: ["The head team or club physician", "The booth athletic trainer spotter", "The injury video review operator", "The referee on the field of play"], correctIndex: 0, explanation: "NFL Head, Neck and Spine Committee (2024, p. 5): diagnosis and the return decision \"remain exclusively within the professional judgment of the Head Team Physician or the Club physician designated.\"", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "What does the NFL's injury video review system use, per its operations page?", options: ["Next Gen Stats tags and receivers", "NFL Vision and the broadcast feed", "Only Hawk-Eye's line-to-gain cameras", "Only the stadium's security cameras"], correctIndex: 1, explanation: "NFL (n.d.-e): the system \"uses NFL Vision technology and the broadcast feed.\"", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "What average number of camera angles per game did the NFL give for the system in December 2022?", options: ["4", "12", "16", "29"], correctIndex: 2, explanation: "NFL (2022b): \"Each game has an average of 16 camera angles.\" Lesson 5 notes the figure is from December 2022.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "Why does lesson 5 date the \"16 camera angles\" figure?", options: ["The NFL changes it every week", "It counts only broadcast cameras", "It applies only to playoff games", "It is from 2022, not confirmed since"], correctIndex: 3, explanation: "The count comes from a page dated December 6, 2022, and the course has not confirmed that it is still the NFL's figure.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "What does the spotter tell the technician to do when a potential problem is spotted?", options: ["Tag and label the video", "Stop the game clock", "Call the team doctor", "Clear the player"], correctIndex: 0, explanation: "NFL (n.d.-e): \"he or she tells the technician to tag and label the video.\" The technician never clears anyone.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "How can the spotter send video to the sideline monitor, per the NFL?", options: ["Over a cellular link", "Via fiber optic cable", "On a USB thumb drive", "Through the scoreboard"], correctIndex: 1, explanation: "NFL (n.d.-e): the spotter \"can send the video via fiber optic cable to a sideline monitor.\"", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "On the sideline, who assists the medical staff with slow motion, angles and rewind?", options: ["The broadcast replay operator", "The league's field communicator", "An on-field injury video technician", "The visiting team's video coach"], correctIndex: 2, explanation: "NFL (n.d.-e): \"The medical staff, assisted by an on-field injury video technician, can ask for slow motion, specific angles, rewind and more.\"", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "Who does the NFL say are required to review video as part of evaluating a potential injury?", options: ["Booth spotters and video operators", "Referees and replay officials", "Head coaches and team captains", "Sideline UNCs and team physicians"], correctIndex: 3, explanation: "NFL (2022b): \"Sideline UNCs and team physicians are required to review video as part of their evaluation of a potential player injury.\"", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "How many injury video review operators does the NFL's posting place at one game?", options: ["Two booth and two on the field", "One in the booth and none below", "Four in the booth and two below", "Two on the field and none above"], correctIndex: 0, explanation: "NFL (2026b): two operators in the Injury Video Review Booth, one per team, and two at the sideline IVR carts.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "Why does lesson 5 call the number four reasoned, not quoted?", options: ["The NFL forbids publishing staff counts", "The page with the count could not be read", "Each club hires as many as it wants", "Four is only a vendor's own estimate"], correctIndex: 1, explanation: "The posting gives two booth and two field operators, and the 2022 page's two technicians match the booth pair; the NFL page that may state the count could not be read.", sourceLessonSlug: "the-nfl-booth" },
          { prompt: "Since when may NFL AT spotters use a medical timeout?", options: ["2011", "2018", "2024", "2015"], correctIndex: 3, explanation: "NFL (n.d.-e): \"Beginning in 2015, AT spotters may use a medical timeout.\"", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "How did the NFL describe the medical timeout when it began?", options: ["A non-participant freezing the clock", "A coach's challenge for player safety", "An official's review of a hit on tape", "A team's extra timeout for injuries"], correctIndex: 0, explanation: "NFL (2016a): \"the first time in a major sport a non-participant can freeze the game clock for player safety.\"", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "On what kind of evidence may the spotter stop play?", options: ["A player's own request", "Clear visual evidence", "A coach's complaint", "Tracking data alerts"], correctIndex: 1, explanation: "NFL (n.d.-e): only with \"clear visual evidence\" meeting criteria the NFL defines narrowly. The criteria are clinical and not taught here.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Why does lesson 6 not list the criteria for a medical timeout?", options: ["They are secret league documents", "They change during every game", "They are clinical, not taught here", "They apply only in the playoffs"], correctIndex: 2, explanation: "The criteria are clinical, and this course never teaches medicine.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Under the 2024 protocol, when is the spotter required to call a medical timeout?", options: ["A coach asks the booth to stop the game", "The broadcast truck misses a replay angle", "The video system loses one of its cameras", "A flagged player returns before evaluation"], correctIndex: 3, explanation: "NFL Head, Neck and Spine Committee (2024, p. 10): the spotter \"is required to call a Medical Time-Out\" if a flagged player returns before the club confirms an evaluation.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "In every NFL source read for the course, who calls the medical timeout?", options: ["The booth AT spotter", "The video operator", "The head coach", "The team captain"], correctIndex: 0, explanation: "Lesson 6: every NFL source read gives the call to the booth AT spotter, and none to a video operator.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "May an injury video review operator suggest a medical timeout?", options: ["Yes, whenever the replay shows a hit", "No source gives the operator that role", "Yes, but only in the fourth quarter", "Yes, if the spotter is on a break"], correctIndex: 1, explanation: "No NFL source read gives the call to a video operator, and none asks the operator to suggest one.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "To which official does the spotter first call a medical timeout?", options: ["The Back Judge", "The Line Judge", "The Side Judge", "The Field Judge"], correctIndex: 2, explanation: "NFL Head, Neck and Spine Committee (2024, p. 10): the spotter calls the Side Judge.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Over what system does the spotter call the Side Judge?", options: ["The stadium's public-address system", "The broadcast truck's intercom", "The coaches' helmet radio channel", "Official-to-Official communication"], correctIndex: 3, explanation: "NFL Head, Neck and Spine Committee (2024, p. 10): \"over the Official-to-Official communication system.\"", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "What exact wording does the protocol give for the call?", options: ["MEDICAL TIME OUT, three times", "STOP THE GAME NOW, two times", "PLAYER DOWN, BOOTH CALL, once", "INJURY CHECK, four times"], correctIndex: 0, explanation: "NFL Head, Neck and Spine Committee (2024, p. 10): \"The exact wording is 'MEDICAL TIME OUT' repeated three times.\"", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "How does the spotter identify the player in the call?", options: ["By last name and position", "By team and jersey number", "By the RFID tag in the pads", "By the yard line he is on"], correctIndex: 1, explanation: "NFL Head, Neck and Spine Committee (2024, p. 10): the player is identified by team and jersey number.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Whom does the spotter call if the referee does not respond?", options: ["The home team's coach", "The broadcast director", "The Field Communicator", "The stadium's announcer"], correctIndex: 2, explanation: "NFL Head, Neck and Spine Committee (2024, p. 10): the spotter calls the league's Field Communicator.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Why does lesson 6 give both \"teal hat\" and \"teal shirt\"?", options: ["Two NFL documents word it differently", "There are two different communicators", "The color changes for night games", "One is for home and one for away"], correctIndex: 0, explanation: "The protocol says \"teal hat\" and the operations page says \"teal shirt\"; the course has not settled which is current.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "What happens to the game and play clocks during a medical timeout?", options: ["They keep running as usual", "They stop and stay frozen", "They reset to two minutes", "They run on a ten-second loop"], correctIndex: 1, explanation: "NFL Head, Neck and Spine Committee (2024, pp. 10 to 11): the clocks stop and stay frozen until the player is removed.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "What does the NFL call a team's attempt to influence the AT spotter?", options: ["A false start", "A delay of game", "An unfair act", "A loss of down"], correctIndex: 2, explanation: "NFL (n.d.-e): an attempt to \"influence the actions of the AT spotter\" is an \"unfair act\" subject to discipline.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Who does the protocol say shall be connected by radio communication?", options: ["Coaches, captains and the referee", "Producers, directors and announcers", "Ushers, security and paramedics", "Spotters, UNCs and the club physician"], correctIndex: 3, explanation: "NFL Head, Neck and Spine Committee (2024, p. 6): booth AT spotters, UNCs and the responsible club physician \"shall be connected by radio communication.\"", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "To whom are the booth spotters also connected by radio, per the protocol?", options: ["The on-field game officials", "The broadcast producers", "The teams' head coaches", "The ticket office staff"], correctIndex: 0, explanation: "NFL Head, Neck and Spine Committee (2024, p. 6): the booth spotters are also connected to the on-field game officials by radio.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "What does the posting say the operator does with two-way radios?", options: ["Programs them for the broadcast crew", "Supports, distributes and maintains them", "Collects them from the officials", "Licenses them with the FCC each week"], correctIndex: 1, explanation: "NFL (2026b): \"Support, distribute and maintain two-way radios for both teams' medical personnel and independent medical personnel.\"", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "When the booth flags a player, which times do the spotter and booth UNC record?", options: ["Kickoff and the final whistle only", "The play clock and the game clock", "First contact and confirmed evaluation", "Arrival and departure from the booth"], correctIndex: 2, explanation: "NFL Head, Neck and Spine Committee (2024, pp. 5 to 6): the time of first contact with the club's medical staff and the time they confirm an evaluation was done.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Who reviews the booth spotters' and booth UNCs' post-game reports?", options: ["The head coaches of both of the teams", "The broadcast network's lead producer", "The stadium's director of security", "Committee chair, CMO and NFLPA director"], correctIndex: 3, explanation: "NFL Head, Neck and Spine Committee (2024, pp. 5 to 6): the chair of the Head, Neck and Spine Committee, the NFL Chief Medical Officer and the NFLPA Medical Director.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "What does the protocol call telling the booth that an evaluation was done?", options: ["Closing the loop", "Calling the play", "Clearing the deck", "Marking the tape"], correctIndex: 0, explanation: "NFL Head, Neck and Spine Committee (2024, p. 9): the person named at the pregame meeting closes the loop with the booth.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Why may a clip tagged during the game be needed long after it?", options: ["Broadcasters must air it the next week", "The final-clearance consultant may view it", "The league sells it to video games", "Teams use it to plan their next play"], correctIndex: 1, explanation: "NFL Head, Neck and Spine Committee (2024, p. 16): the independent consultant must have \"access to video of the injury, where applicable.\"", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "Who remains responsible for all final return-to-play decisions in the NFL protocol?", options: ["The sideline UNC", "The booth spotter", "The club physician", "The head coach"], correctIndex: 2, explanation: "NFL Head, Neck and Spine Committee (2024, p. 9): the club physician \"remains responsible for all final decisions regarding Return-to-Play,\" after consulting the sideline UNC.", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "What did the NFL and NFLPA say a 2016 protocol investigation would not do?", options: ["Look at the game video", "Interview any team staff", "Fine any club for errors", "Reach medical conclusions"], correctIndex: 3, explanation: "NFLPA (2016): the investigation \"will not reach medical conclusions; it will only determine whether the protocol was followed.\"", sourceLessonSlug: "the-medical-timeout-and-the-radio-net" },
          { prompt: "What does HIA stand for in World Rugby's protocol?", options: ["Health Incident Alert", "Head Impact Analysis", "Home Injury Audit", "Head Injury Assessment"], correctIndex: 3, explanation: "Head Injury Assessment (World Rugby, n.d.-a).", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "How many stages does World Rugby's current HIA page give, against its 2022 PDF?", options: ["Three, against two", "Four, against three", "Five, against four", "Two, against one"], correctIndex: 1, explanation: "World Rugby (n.d.-a) calls it \"a four-stage process\"; World Rugby (2022, p. 1) calls it \"a three-stage process.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Why does lesson 7 give no counts or timings of its own for the HIA?", options: ["The counts are behind a paywall", "World Rugby does not publish any", "World Rugby's documents disagree", "They change for every competition"], correctIndex: 2, explanation: "World Rugby's own documents disagree, so the course gives none of its own and leaves the reviewer to settle which governs.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "When does the first HIA stage take place?", options: ["The next morning", "A week later", "Before kick-off", "During the match"], correctIndex: 3, explanation: "Lesson 7: the first stage happens during the match; the later ones happen after it and are the doctors' work.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Through which three channels does World Rugby say head impact events are identified?", options: ["Observation, video review, iMG data", "Crowd noise, social media, replays", "Coach reports, player reports, TV", "Tracking cameras, GPS, heart rate"], correctIndex: 0, explanation: "World Rugby (n.d.-a): \"direct observation, video review or instrumented mouth guard (iMG) data/alerts.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Who may request the in-game HIA assessment, per the 2022 PDF?", options: ["Any player on either team on the field", "On-field medics, the referee or the MDD", "The opposing team's medical staff", "The television match official only"], correctIndex: 1, explanation: "World Rugby (2022, p. 15): the on-field medical staff, the referee or the MDD. The opposition's medical staff may not request one on an opposing player.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "May an opposing team's medical staff request an HIA on an opposing player?", options: ["Yes, at any time", "Only at half-time", "No, they may not", "Only in the finals"], correctIndex: 2, explanation: "World Rugby (2022, p. 15): the opposition's medical staff may not request an HIA on an opposing player.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "What may non-medical staff do under World Rugby's protocol?", options: ["Call for an off-field HIA1 assessment", "Overrule a referee's call for an HIA1", "Question the MDD's call for an HIA1", "Alert their own team's medical staff"], correctIndex: 3, explanation: "World Rugby (2022, pp. 18 to 19): non-medical staff \"can alert their respective team medical staff\" but cannot call for, overrule or question an HIA1.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Under World Rugby's protocol, who must call for an off-field HIA1 assessment?", options: ["Medical staff", "Team captains", "Video operators", "Match commissioners"], correctIndex: 0, explanation: "World Rugby (2022, pp. 18 to 19): \"this must be done by medical staff.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Who has primary responsibility for the off-field assessment, per World Rugby?", options: ["The referee", "The Team Doctor", "The team analyst", "The head coach"], correctIndex: 1, explanation: "World Rugby (n.d.-a): the Team Doctor has primary responsibility and may delegate it to the MDD.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "With whom must all return-to-play decisions be discussed under World Rugby's HIA?", options: ["The referee and both captains", "The video support technicians", "The Independent Match Day Doctor", "The home union's chief executive"], correctIndex: 2, explanation: "World Rugby (n.d.-a): \"All return to play decisions must be discussed with the Independent Match Day Doctor who has ultimate oversight.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "What may the MDD do under Regulation 15.2.1(d), after discussion with the Team Doctor?", options: ["Replace the match referee", "Stop the match broadcast", "Fine the home union directly", "Remove a player unilaterally"], correctIndex: 3, explanation: "World Rugby (n.d.-d): the MDD may unilaterally remove a player under Regulation 15.2.1(d), after discussion with the Team Doctor.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Before a player cleared by the MDD returns, who must review the video?", options: ["The referee", "The Team Doctor", "The TMO", "The captain"], correctIndex: 1, explanation: "World Rugby (n.d.-e): \"the Team Doctor MUST review the video before the player is allowed to return to play.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "How many views does World Rugby's minimum video standard require?", options: ["At least 2, both broadcast", "Exactly 12, all tracking", "At least 8, no broadcast", "At least 4, broadcast plus 3"], correctIndex: 3, explanation: "World Rugby (n.d.-e): \"Minimum 4 views (broadcast+ 3 others - ideally inclusive of a high wide view).\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "What does the 2022 PDF add to the minimum video standard?", options: ["Ability to mark incident", "Ability to stream to fans", "Ability to track players", "Ability to add graphics"], correctIndex: 0, explanation: "World Rugby (2022, p. 26): \"Ability to mark incident.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Why does lesson 7 say the video standard reads like a technician's spec?", options: ["World Rugby says technicians wrote it", "Each item is built and run by a crew", "It lists each technician's pay rate", "It names the vendor for each item"], correctIndex: 1, explanation: "Reasoned in lesson 7: feeds, a delay, transport controls, marking and audio are each something a video crew builds and runs. No page says who builds it.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "If the video system fails, may the HIA protocol still be used?", options: ["No, the match must be abandoned", "No, the HIA is suspended entirely", "Yes, with a lower removal threshold", "Yes, but only in the second half"], correctIndex: 2, explanation: "World Rugby (n.d.-e): the protocol may still be used, and the doctors are advised to work with \"a Lower threshold for removal.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "If play goes ahead without video review, what should the MDD make sure of?", options: ["The referee stops every scrum", "The broadcast cuts to a wide shot", "The teams agree to fewer subs", "Some footage is captured for later"], correctIndex: 3, explanation: "World Rugby (n.d.-e): the MDD should ensure some footage, broadcast or performance, is captured for later review.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "What happens to a case in which there was \"no side-line video link\"?", options: ["It goes to the HIA Review Panel", "The home union is fined at once", "The match result is overturned", "The video crew is suspended"], correctIndex: 0, explanation: "World Rugby (2022, p. 30): a failure in \"the delivery of video viewing\" is one of the thresholds that send a case to the HIA Review Panel.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Who clips HIA and suspicious incidents for post-game review, where a union has the service?", options: ["The broadcaster's highlights team", "The union's video support technicians", "The match referee after the game", "The opposing team's video analysts"], correctIndex: 1, explanation: "World Rugby (2022, p. 29): incidents \"will be identified and 'clipped' by the Union's video support technicians,\" or by World Rugby's Game Analysis department.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Where do collated HIA clips go each week?", options: ["The broadcaster's highlights archive", "Each club's head coach and captain", "The competition's HIA Process Reviewer", "The players' union press office"], correctIndex: 2, explanation: "World Rugby (2022, pp. 29 to 30): clips are collated and sent weekly to the competition's HIA Process Reviewer.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "Why does lesson 7 not say who operates pitch-side video on match day?", options: ["World Rugby bans video technicians", "Only referees may touch the video", "It is always the home team's analyst", "No World Rugby page read says who does"], correctIndex: 3, explanation: "No World Rugby page read for the course names the operator: a technician, the MDD or a \"video match day doctor.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "How long is the temporary replacement for an off-field HIA assessment?", options: ["A set 12 minutes", "A set 10 minutes", "Until half-time", "Five minutes"], correctIndex: 0, explanation: "World Rugby (n.d.-a): \"a set 12 minutes.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "When does the 12-minute clock start?", options: ["When the referee blows the whistle", "When the player crosses the sideline", "When the doctor reaches the player", "When play next restarts after the stop"], correctIndex: 1, explanation: "World Rugby (n.d.-a): the clock starts \"when the player crosses the sideline.\"", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "What does the home team give the MDD at the pre-match medical meeting for mouthguard data?", options: ["A wired intercom beltpack", "A printed team sheet only", "A Prevent iPad or iPhone", "A broadcast camera feed"], correctIndex: 2, explanation: "World Rugby (n.d.-b): a Prevent iPad or iPhone, sometimes with a Bluetooth device that must sit next to it for the whole game.", sourceLessonSlug: "world-rugby-hia-and-pitch-side-video" },
          { prompt: "What does the NCAA checklist say it is not intended as?", options: ["A clinical guideline or care standard", "A list of who must attend games", "A rule on medical staff presence", "A guide for team travel plans"], correctIndex: 0, explanation: "NCAA Sport Science Institute (2026, p. 1): \"not intended as a clinical practice guideline or legal standard of care.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "In how many listed NCAA sports must trained medical personnel be present at competitions?", options: ["12", "21", "50", "4"], correctIndex: 1, explanation: "NCAA Sport Science Institute (2026, p. 4): 21 listed contact or collision sports.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "What does \"present\" mean in the NCAA checklist?", options: ["Reachable by phone during play", "Watching the live stream at home", "On site at the campus or arena", "Listed on the team's travel roster"], correctIndex: 2, explanation: "NCAA Sport Science Institute (2026, p. 4): \"on site at the campus or arena of the competition.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Under the NCAA checklist, who must do the evaluation?", options: ["Any coach with first aid training", "The school's athletics director", "A video operator with the footage", "An athletic trainer or team physician"], correctIndex: 3, explanation: "NCAA Sport Science Institute (2026, p. 4): \"Evaluation must be by an athletic trainer or team physician (or physician designee) with concussion experience.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Who makes the final determination of unrestricted return to sport under the NCAA checklist?", options: ["The team physician or designee", "The head athletic trainer alone", "The conference's replay official", "The head coach and the athlete"], correctIndex: 0, explanation: "NCAA Sport Science Institute (2026, p. 11): \"from the team physician or medically qualified physician designee.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "What did lesson 8 find when the NCAA checklist was read in full?", options: ["Video is required at every game", "No section mentions video review", "Video is banned at competitions", "Video must be kept for a year"], correctIndex: 1, explanation: "All 12 pages were read and none mentions video review, so the document does not require it.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Does the NCAA checklist stop a school or conference from using video?", options: ["Yes, it bans video at all games", "Yes, unless a vendor is approved", "No, it simply does not require it", "No, it requires video everywhere"], correctIndex: 2, explanation: "Lesson 8: the checklist does not require video, though a school or conference may use it.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Whose authority do the NCAA best practices call \"unchallengeable\" and \"autonomous\"?", options: ["Head coaches and athletics directors", "The conference's replay officials", "Team video coordinators and analysts", "Team physicians and athletic trainers"], correctIndex: 3, explanation: "NCAA Sport Science Institute (n.d., pp. 3 to 4): \"primary athletics health care providers (team physicians and athletic trainers).\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "With whom does the NCAA put \"ultimate medical reporting authority\"?", options: ["The team physician", "The athletics director", "The head football coach", "The conference office"], correctIndex: 0, explanation: "NCAA Sport Science Institute (n.d., p. 4): \"ultimate medical reporting authority being the team physician.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Where did the NHL say its Central League Spotters monitor games from, in 2016?", options: ["The Situation Room in Toronto, Canada", "The Player Safety Room in New York", "Each arena's press box, beside replay", "Each club's own medical room on site"], correctIndex: 1, explanation: "NHL (2016): \"from the Player Safety Room in New York,\" through the television broadcast.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Who are the NHL's Central League Spotters, per the 2016 announcement?", options: ["Retired NHL on-ice referees", "Each club's own video coaches", "Certified athletic trainers", "Television broadcast producers"], correctIndex: 2, explanation: "NHL (2016): they \"are all certified athletic trainers who have clinical experience working in elite level hockey.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "In the NHL's 2016 system, who communicates with the club's medical staff?", options: ["Any In-Arena League Spotter", "The arena's public-address host", "The on-ice referee's linesman", "Only the Central League Spotter"], correctIndex: 3, explanation: "NHL (2016): only the Central League Spotter communicates with the club's medical staff.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Why does lesson 8 hedge the NHL spotter system?", options: ["Only the 2016 announcement was read", "The NHL announced it ended in 2017", "It is said to run only in the playoffs", "The NHL's page is behind a login"], correctIndex: 0, explanation: "The course read only the 2016 announcement and has not confirmed that the system still works this way.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Which bodies does NATA say recognize athletic training as an allied health care profession?", options: ["The NFL, NBA and NHL", "The AMA, HRSA and HHS", "The NCAA, BOC and NFLPA", "The FDA, OSHA and FCC"], correctIndex: 1, explanation: "NATA (n.d.): the American Medical Association, the Health Resources Services Administration and the Department of Health and Human Services.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "What degree does NATA say athletic trainers must graduate from?", options: ["Any four-year bachelor's program", "A two-year associate program", "An accredited master's program", "A one-year certificate course"], correctIndex: 2, explanation: "NATA (n.d.): \"Athletic trainers must graduate from an accredited master's program.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "What does the BOC say about its certification program?", options: ["One of five rival AT programs in the US", "A voluntary add-on most ATs skip", "A program run by the NFL for spotters", "The only accredited AT program in the US"], correctIndex: 3, explanation: "BOC (n.d.-a): it \"provides the only accredited certification program for Athletic Trainers (ATs) in the United States.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "How many states does NATA say regulate athletic trainers, plus the District of Columbia?", options: ["50", "49", "43", "21"], correctIndex: 0, explanation: "NATA (n.d.): \"50 states and the District of Columbia.\" The BOC says 49; the course has not settled which is current.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "What does the BOC call compliance with state regulatory requirements?", options: ["An optional mark of quality", "The only avenue to legal practice", "A matter for each employer", "A rule for NFL spotters only"], correctIndex: 1, explanation: "BOC (n.d.-b): \"Compliance with state regulatory requirements is mandatory and the only avenue to legal athletic training practice.\"", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "In lesson 8's three tiers, who may diagnose and decide on return?", options: ["AT spotters", "Video crew", "Physicians", "Officials"], correctIndex: 2, explanation: "Tier 1, the physicians: the NFL club physician with the UNC, rugby's Team Doctor and MDD, the NCAA team physician.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "In the three tiers, what may tier 2 licensed professionals in a watching role do?", options: ["Diagnose and clear a player", "Run the video and the radios", "Coach the team from the booth", "Flag and trigger an evaluation"], correctIndex: 3, explanation: "Tier 2 (NFL booth AT spotters, NHL central spotters) watch, flag and can trigger an evaluation or stop play, but do not diagnose in that role.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Which tier does this course teach as the job?", options: ["Tier 3, the non-medical crew", "Tier 1, the physicians", "Tier 2, the AT spotters", "All three tiers equally"], correctIndex: 0, explanation: "Lesson 8: the course teaches tier 3 as the job, and tiers 1 and 2 as the people that job serves.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Why does tier 2 exist, as the NFL booth spotter shows?", options: ["Unlicensed, yet allowed to diagnose", "Licensed, yet not diagnosing in the role", "Licensed, and the final medical word", "Unlicensed, and only runs the radios"], correctIndex: 1, explanation: "The spotter must be BOC certified and state licensed where required, yet \"does not diagnose any injuries or suggest treatment\" (NFL, n.d.-e).", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Which phrase in the NFL operator posting does lesson 8 read narrowly?", options: ["Focus on the task at hand, not the game", "Arrive four hours prior to kickoff", "Recognize and record player injuries", "Support and maintain two-way radios"], correctIndex: 2, explanation: "NFL (2026b) lists \"Must be able to recognize and record player injuries\"; no source says what \"recognize\" means for the role.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "What is lesson 8's reasoned narrow reading of \"recognize and record\"?", options: ["Diagnose and log every injury seen", "Tell the player to leave the game", "Recommend treatment to the trainer", "Notice and log it for those who decide"], correctIndex: 3, explanation: "Read against the protocols, the safe reading is to notice and log what happens for the people who decide, and never act as one of them.", sourceLessonSlug: "who-is-licensed-to-act" },
          { prompt: "Asked in an interview what you would do on seeing a hard hit, what answer do the sources point to?", options: ["Keep the systems up; leave calls to staff", "Radio the referee to stop the game", "Tell the team's coach what you saw", "Post the clip for the fans at once"], correctIndex: 0, explanation: "Lesson 8: keep the system and the radios working, tag and play back what the licensed staff ask for, and leave every medical call to them.", sourceLessonSlug: "who-is-licensed-to-act" },
        ],
      },
    },
    // NEXT_SECTION
  ],
};
