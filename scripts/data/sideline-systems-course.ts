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

// Jobs and hiring, sections 5 to 7 (research file 03; the Tampa Bay copy is research file 02's NFL 2026)
const NFL_IVR_TB = `National Football League. (2026c). *Injury video review operator, Tampa Bay Buccaneers* [Job posting; created April 6, 2026]. SHRM HireVets. ${RETRIEVED} https://hirevets.shrm.org/jobs/69df2e5b568dabf91ebff0e6`;
const NFL_FAST = `National Football League. (2026d, August 11). *Seasonal FAST video systems operator* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5373370008`;
const NFL_TOC = `National Football League. (2026e, August 14). *Seasonal part-time TOC operator* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/nflcareers/jobs/5389873008`;
const NFL_BOARD = `National Football League. (n.d.-g). *Jobs at the National Football League* [Job board]. Greenhouse. ${SAVED} https://job-boards.greenhouse.io/nflcareers`;
const NFL_BOARD_API = `National Football League. (n.d.-h). *nflcareers job board* [Greenhouse public job board API]. ${RETRIEVED} https://boards-api.greenhouse.io/v1/boards/nflcareers/jobs?content=true`;
const HE_CAREERS = `Hawk-Eye Innovations. (n.d.-h). *Hawk-Eye Innovations careers* [Careers home page with open positions]. ${SAVED} https://careers.hawkeyeinnovations.com`;
const HE_BOARD_API = `Hawk-Eye Innovations. (n.d.-i). *Job board* [Ashby public posting API]. ${RETRIEVED} https://api.ashbyhq.com/posting-api/job-board/hawkeyeinnovations?includeCompensation=true`;
const HE_SOFIA = `Hawk-Eye Innovations. (2026h, October 20). *Sports technology analyst* [Job posting]. Ashby. ${RETRIEVED} https://jobs.ashbyhq.com/hawkeyeinnovations/60cf4b0c-5d62-4acc-8aea-7a4cf3b4fdb7`;
const HE_STUDENT = `Hawk-Eye Innovations. (2026i, October 15). *Student placement: Tennis systems operator 27/28* [Job posting]. Ashby. ${RETRIEVED} https://jobs.ashbyhq.com/hawkeyeinnovations/be7c01bf-a20f-47aa-9e64-ae7e954294db`;
const KINEXON_MUC = `KINEXON. (2026a, August 25). *Football match tracking operator (m/f/d) München* [Job posting]. ${RETRIEVED} https://www.kinexon.com/jobs?gh_jid=4960164101`;
const KINEXON_HH = `KINEXON. (2026b, August 4). *Tracking operator (m/f/d) HSV Hamburg* [Job posting]. ${RETRIEVED} https://www.kinexon.com/jobs?gh_jid=4944464101`;
const CATAPULT_JOB = `Catapult. (2026, September 1). *Product support technician* [Job posting]. Greenhouse. ${RETRIEVED} https://job-boards.greenhouse.io/catapultsports/jobs/8161973`;
const GENIUS_ANALYST = `Genius Sports. (2026a, October 26). *Game operations analyst, sports (remote - Estonia, service provider)* [Job posting]. Greenhouse. ${RETRIEVED} https://boards.greenhouse.io/geniussports/jobs/8042567003?gh_jid=8042567003`;
const GENIUS_LEAD = `Genius Sports. (2026b, October 23). *Match lead* [Job posting]. Greenhouse. ${RETRIEVED} https://boards.greenhouse.io/geniussports/jobs/8034521003?gh_jid=8034521003`;
const SPORTRADAR_PT = `Sportradar. (2026a, July 20). *Production operator part time* [Job posting]. SmartRecruiters. ${RETRIEVED} https://jobs.smartrecruiters.com/Sportradar/744000138641759-production-operator-part-time`;
const SPORTRADAR_TRAINEE = `Sportradar. (2026b, September 30). *Production operator trainee* [Job posting]. SmartRecruiters. ${RETRIEVED} https://jobs.smartrecruiters.com/Sportradar/744000152749419-production-operator-trainee`;
const STARTUP_JOBS = `startup.jobs. (n.d.). *Hawk-Eye Innovations (HEI) jobs (October 2026)* [Company job list]. ${SAVED} https://startup.jobs/company/hawk-eye-innovations-hei?page=2`;
const TEAMWORK = `TeamWork Online. (n.d.). *Hawk-Eye Innovations* [Organization job list]. Saved October 26, 2026; the saved copy does not record the page's URL.`;
const MS_WIFI = `Microsoft. (n.d.-a). *Fix Wi-Fi connection issues in Windows*. Microsoft Support. ${RETRIEVED} https://support.microsoft.com/en-us/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows`;
const MS_LIFECYCLE = `Microsoft. (n.d.-b). *Windows 10 Home and Pro*. Microsoft Lifecycle, Microsoft Learn. ${RETRIEVED} https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro`;
const MS_W10_END = `Microsoft. (n.d.-c). *Windows 10 support has ended on October 14, 2025*. Microsoft Support. ${RETRIEVED} https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/windows-10-support-has-ended-on-october-14-2025`;

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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3: The leagues and the rules
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "nfl-replay-and-the-line-to-gain",
      title: "9 · NFL: challenges, the command center and the line to gain",
      section: "3 · The leagues and the rules",
      recallContent: [
        {
          prompt: "Who makes the final determination of unrestricted return to sport under the NCAA checklist?",
          answer: "The team physician or a medically qualified physician designee (NCAA Sport Science Institute, 2026, p. 11).",
        },
        {
          prompt: "In lesson 8's three tiers, where does the video crew sit?",
          answer: "Tier 3, non-medical crew: keep the video, clips and radios working and tag what they are told to tag; never diagnose or decide.",
        },
      ],
      body: `${QR}

**Back to officiating.** Section 2 was about video for medical staff. This section is about video and measurement for officials, league by league, from each league's or governing body's own rules. It starts with the NFL.

**Who may ask for a review.** Rule 15 gives each team "a minimum of two challenges," a third if at least one succeeds, and "A fourth challenge will not be permitted"; each challenge needs an available timeout (NFL, 2026a, Rule 15-1-1). In the 2026 text, "The head coach or head coach's pregame challenge designee can initiate a challenge by throwing a red flag" (Rule 15-1-1-a). Only the Replay Official or the Senior Vice President of Officiating, or a designee, may start a review after the two-minute warning, in overtime, on scores and Try attempts, and on rulings such as interceptions and failed fourth-down attempts (Rule 15-1-2).

**Who decides.** "All Replay Reviews will be conducted by the Senior Vice President of Officiating or his or her designee," in consultation with the Replay Official and the Referee (Rule 15-2). A ruling changes only when "clear and obvious video evidence warrants a change" (Rule 15-2-1). The Replay Official or the officiating department may also "advise, consult with, or assist the on-field officials on specific, objective aspects of a play when clear and obvious video evidence is present," including the game clock, possession and the ball's position relative to a line (Rule 15-9).

**When the link drops.** If communication with the League office is lost, the Referee waits one minute and then reviews with the Replay Official (Rule 15-8). A rule written for a lost link shows how much the system leans on the network between the stadium and New York.

**Art McNally GameDay Central (AMGC).** At league headquarters in New York, AMGC, "Launched in 2014," is "the hub of the NFL's replay review process," active for every game from preseason through the Super Bowl (NFL, n.d.-b).

| Item | What the NFL says |
|---|---|
| Stations | "16 stations, each set up to show a designated game on a 58-inch touch-screen monitor," with a replay assistant at each |
| Technology | "powered by Sony Hawk-Eye technology"; replays are driven "by Xbox controllers" |
| Who decides | "Three AMGC decision makers make final replay decisions"; each supervisor covers up to four games |
| Peak load | Up to nine games at once in the 1 p.m. ET window |
| Since 2021 | "the NFL has used Hawk-Eye to review multiple time-synchronized angles of the same play" |
| To the field | The replay field operator brings the referee a Microsoft Surface Pro tablet (since 2017); "Up to four selected synchronized camera angles can be sent to the tablet" |
| Speed | "In 2024, the average review lasted 1 minute and 25 seconds" |
| After the games | Staff "'tag' every play so they can be searched later in a database" |

Source: NFL (n.d.-b). Sony adds that SMART, adopted in 2021, combines "video feeds from all of the NFL's broadcast partners in one place" (Sony Electronics, 2025). So the officials' review system is fed by the broadcast's cameras, which is one reason the two crews work so closely on game day.

**The replay crew at the stadium.** Replay officials "oversee a team that includes a video operator, replay field operators, replay field communicators and a replay assistant" (NFL, n.d.-d). Replay assistants often come from college replay or from NFL game day assistant roles "such as replay video operators, replay field communicators or clock operators" (NFL, n.d.-d). That is a career path in the league's own words, and section 5 returns to it.

**The line to gain.** On April 1, 2025, Sony announced that Hawk-Eye would become "the primary method for measuring the line to gain, beginning with the 2025 season," and that "The chain crew will remain on the field in a secondary capacity" (Sony Electronics, 2025). So the NFL did not drop the chains. The system "consists of six 8K cameras for optical tracking of the position of the ball," in all 30 NFL stadiums and international venues, "operated from" AMGC and "integrated with the league's existing replay system." "The full operational process takes around 30 seconds, saving up to 40 seconds from a measurement with the chains" (Sony Electronics, 2025). This course read only the April 2025 announcement, so it does not say how the system ran across the 2025 season or whether it changed for 2026.

**Two kinds of tracking in one league, reasoned.** Lesson 4 showed that NFL player tracking is radio: tags in the shoulder pads and receivers around the venue (NFL, n.d.-c). The line to gain is optical: six Hawk-Eye cameras (Sony Electronics, 2025). Same league, same game, two technologies, run by different crews.

:::reveal Who conducts every NFL replay review? ||| The Senior Vice President of Officiating or a designee, in consultation with the Replay Official and the Referee (NFL, 2026a, Rule 15-2).

:::reveal What happens if the link to the League office is lost? ||| The Referee waits one minute and then reviews with the Replay Official (NFL, 2026a, Rule 15-8).

:::reveal Did the NFL drop the chain crew in 2025? ||| No. Hawk-Eye became the primary line-to-gain method, and the chain crew stays on the field in a secondary capacity (Sony Electronics, 2025).

## Sources
- ${NFL_RULES} Locator: Rule 15-1-1, 15-1-2, 15-2 and 15-2-1, PDF p. 67 (printed p. 60); Rules 15-8 and 15-9, PDF p. 71.
- ${NFL_AMGC} Locator: opening; "Gameday at AMGC" paragraphs 3 to 6; "During a Review" paragraph 4, the sidebar and the last paragraph; "After the Games".
- ${NFL_REPLAY_OFFICIALS} Locator: paragraph 2; "Maintaining the Pipeline".
- ${SONY_2025} Locator: paragraphs 1 and 3 to 6.
- ${NFL_NGS} Locator: paragraphs 3 and 4.`,
    },
    {
      slug: "basketball-hockey-and-baseball",
      title: "10 · Basketball, hockey and baseball",
      section: "3 · The leagues and the rules",
      recallContent: [
        {
          prompt: "How long did the average NFL replay review last in 2024?",
          answer: "1 minute and 25 seconds (NFL, n.d.-b).",
        },
        {
          prompt: "What does the NFL's optical line-to-gain system use?",
          answer: "Six 8K cameras for optical tracking of the ball, operated from AMGC; the chain crew stays in a secondary role (Sony Electronics, 2025).",
        },
      ],
      body: `${QR}

**Basketball: link, then add.** CREW-05 lesson "4 · Beside the network: replay, tracking and referee comms" teaches the NBA Replay Center, Rule 13's review triggers and the arena tracking counts. This lesson does not repeat them. It adds three things from one trade report (Dachman, 2023):

- **History.** "Since 2019, Hawk-Eye has worked closely with the NBA in a proof-of-concept capacity," collecting data "at NBA Summer League and six NBA arenas."
- **Data.** Sportradar, "the league's exclusive data provider," works alongside Hawk-Eye to generate events and stats (lesson 4).
- **The earlier provider stays.** Second Spectrum remains "an official NBA League Pass augmentation provider and an official NBA Team Basketball analytics provider."

Lesson 4 showed that Second Spectrum is the WNBA's tracking provider from 2024 (WNBA, 2024). So the NBA's league tracking and the WNBA's come from different optical vendors.

**Hockey.** The NHL says: "The NHL has used Sony's Hawk-Eye technology since 2015 with Synchronized Multi-Angle Replay Technology (SMART) services installed in all 32 NHL arenas" (NHL, 2025). Hawk-Eye's own homepage says "since 2016" (Hawk-Eye Innovations, n.d.-d). This course teaches the league's date, names the vendor's, and has not settled why they differ. In June 2025, Sony became an Official NHL Technology Partner in a multiyear deal (NHL, 2025).

A trade report describes the league's Situation Room in Toronto: "a dedicated operator" for each game, feeds from "standardized goal-line, blue-line, and overhead camera positions," and video that can go to officials' iPads on the ice (Costa, 2026). It adds that a separate Hawk-Eye optical tracking system "has been live league-wide for more than a year," as of January 2026 (Costa, 2026). Standardized camera positions in every arena are, reasoned, what make one central room possible: the operator in Toronto knows where each angle comes from.

**Baseball: Statcast.** MLB installed pitch tracking in every stadium in 2008, and Statcast in all 30 ballparks in 2015 after a partial 2014 trial (MLB, n.d.). "From 2015-19, Statcast consisted of a combination of camera and radar systems. That changed in 2020, with the arrival of Hawk-Eye" (MLB, n.d.). Hawk-Eye's homepage says Statcast data "since 2019" (Hawk-Eye Innovations, n.d.-d). The league says 2020 and the vendor 2019, and this course has not settled whether the vendor's year counts testing. Bat tracking began "with the second half of the 2023 season" (MLB, n.d.). Lesson 2 gave the 12 cameras and their frame rates.

**Baseball: the ABS Challenge System.** On September 23, 2025, MLB announced that its Joint Competition Committee, "six owners, four active players and one active umpire," had approved the Automated Ball-Strike (ABS) Challenge System for all Spring Training, regular-season and Postseason games "Beginning in 2026" (MLB, 2025). How it works, from MLB's release:

- "Twelve (12) Hawk-Eye cameras set up around the perimeter of the field track the location of each pitch," on "a 5G private network from T-Mobile for Business." "The entire process takes approximately 15 seconds."
- Only the pitcher, catcher or batter may challenge, "immediately," by tapping the hat or helmet, with no help from coaches or anyone else.
- Each club starts with two challenges, keeps any that succeed, and gets one in each extra inning if it has none left.
- The ABS zone is a two-dimensional rectangle at the middle of home plate, 17 inches wide, with its top at 53.5% and its bottom at 27% of the batter's height. Independent testers measure players in Spring Training.

The system came up through the minor leagues: the Florida State League from 2021, select Triple-A parks in 2022, all of Triple-A in 2023, and MLB Spring Training in 2025. In 2025 Spring Training, "just over four (4) pitches per game" were challenged, and success was "near 50%" (MLB, 2025).

**Why a technician reads this, reasoned.** The ABS rules set a time budget, about 15 seconds, and name a dedicated network. A system that must answer in 15 seconds in front of a crowd is one whose cameras and network are checked before the first pitch. Section 4 is about those checks.

:::reveal Since when does the NHL say it has used Hawk-Eye SMART, and what does Hawk-Eye's homepage say? ||| The NHL says since 2015, in all 32 arenas (NHL, 2025). Hawk-Eye's homepage says since 2016.

:::reveal Who may challenge a ball or strike call under MLB's ABS Challenge System? ||| Only the pitcher, catcher or batter, immediately, by tapping the hat or helmet (MLB, 2025).

:::reveal What network carries MLB's ABS camera data? ||| A 5G private network from T-Mobile for Business (MLB, 2025).

## Sources
- ${DACHMAN_2023} Locator: paragraph 1; paragraphs 7 and 8; section "Second Spectrum Stays in the Mix".
- ${WNBA_2024} Locator: release text (read through a web fetch tool).
- ${NHL_2025} Locator: paragraphs 1, 2 and 5.
- ${HE_HOME} Locator: "The Hawk-Eye You Know" (the NHL and MLB dates).
- ${COSTA_2026} Locator: "From Replay Reviews to a League-Wide Hub"; "The Sony Hawk-Eye Backbone".
- ${MLB_STATCAST} Locator: "About Statcast" paragraphs 2 and 3.
- ${MLB_2025} Locator: paragraph 1; "How It Works"; "ABS Challenge System Rules"; "ABS Challenge System Strike Zone"; the paragraph after the quotes; "ABS Challenge Results".`,
    },
    {
      slug: "tennis-and-football",
      title: "11 · Tennis and football: line calling, goal-line, VAR and offside",
      section: "3 · The leagues and the rules",
      recallContent: [
        {
          prompt: "When does MLB say Hawk-Eye arrived for Statcast, and what does Hawk-Eye's homepage say?",
          answer: "MLB says 2020; from 2015 to 2019 Statcast combined camera and radar (MLB, n.d.). Hawk-Eye's homepage says 2019.",
        },
        {
          prompt: "How long does MLB say the whole ABS challenge process takes?",
          answer: "Approximately 15 seconds (MLB, 2025).",
        },
      ],
      body: `${QR}

**Tennis: the line judges' calls move to cameras.** On April 28, 2023, the ATP announced "Tour-wide adoption of Electronic Line Calling Live (ELC Live) from 2025," covering "all court lines for 'out' calls," a role "traditionally carried out by on-court line judges" (ATP Tour, 2023). ELC Live "was first trialled at the Next Gen ATP Finals in 2017 in Milan." "Multiple suppliers" were approved, and all-court ELC Live would also deliver "comprehensive player and ball tracking across the whole Tour" (ATP Tour, 2023).

On February 6, 2025, the ATP said: "For the first time ever, all tour-level events on all surfaces are featuring Live Electronic Line Calling," and Video Review was coming to every court at all nine ATP Masters 1000 events that year (ATP Tour, 2025). The ATP's February 2025 news page was read through a web fetch tool rather than a browser, so a reviewer will open it before release.

**Wimbledon.** In October 2024, Wimbledon announced live electronic line calling from 2025 "for all main draw and qualifying match courts," for the calls line judges had made, after testing at the 2024 Championships (ATP Tour, 2024). That ATP page was also read through a web fetch tool rather than a browser, so a reviewer will open it before release. For 2026 the All England Club announced Video Review on six Show Courts, and "visual indicators will be installed on every court for live Electronic Line Calling to signal 'out' and 'fault' calls" (All England Lawn Tennis Club, 2026, p. 2). Older accounts that describe Wimbledon as the Grand Slam holding out with line judges are out of date.

Hawk-Eye's own account: electronic line calling was approved in 2005 and debuted at the 2006 Miami Masters, and Hawk-Eye Live launched in 2017 (Hawk-Eye Innovations, 2026c). Since the ATP approved "Multiple suppliers," Hawk-Eye is one supplier, not the only one.

**Football: the Laws set the rules for the technology.** The Laws of the Game 2026/27 are "Effective from 1st July 2026" (IFAB, 2026, cover).

*Goal-line technology (GLT).* "GLT systems may be used to verify whether a goal has been scored to support the referee's decision," and their use "must be stipulated in the competition rules" (IFAB, 2026, p. 50). GLT "applies solely to the goal line." The goal signal must be "automatically confirmed within one second," only to the match officials, by watch vibration and visual signal and/or earpiece, and may also go to the video operation room (p. 52). Systems must meet "the FIFA Quality Programme for GLT" (p. 52). Lesson 3 covered installation, certification and the referee's pre-match test. Hawk-Eye calls its GLT "the first FIFA-certified goal-line system" and says it can run from a "Remote Operations Centre (ROC)" with "24/7 remote monitoring" (Michaelides, 2026).

*Video assistant referee (VAR).* A VAR match needs a video operation room (VOR), "where the video assistant referee (VAR), assistant VAR (AVAR) and replay operator (RO) work; it may be in/close to the stadium or at a more distant location," and at least one referee review area (RRA) (IFAB, 2026, p. 53). A competition needs "written permission from FIFA" to use VAR (p. 153). VAR assists only on a "clear and obvious error" or "serious missed incident" in set categories; "The final decision is always taken by the referee"; and "There is no time limit for the review process" (pp. 153 to 154). In 2026/27 there are five categories, and the fifth is a "Clearly incorrectly awarded corner kick" in limited conditions (p. 155). Older material says four.

Notice, reasoned, that the replay operator is named in the Laws themselves. It is a job written into a sport's rulebook, which is why postings for it exist.

*Semi-automated offside (SAOT).* FIFA trialled its system at the FIFA Arab Cup 2021 and the FIFA Club World Cup 2021 (FIFA, n.d.-b); lesson 3 showed how VAR officials check its kick point and line. The Premier League introduced its own SAOT "on Saturday 12 April (Match Round 32)" of 2024/25, after "non-live testing in the Premier League and live operation in the FA Cup" (Premier League, 2025a), built with Genius Sports (lesson 4). It expected to save "approximately 30 seconds" on close offside calls (Premier League, 2025b). After a season it reported "27 seconds per offside event" and kept the system for 2025/26 (Premier League, 2025c).

**Not every match gets it.** In the 2025-26 FA Cup, SAOT was "active from the fifth round onwards at all matches taking place in Premier League stadiums, due to the technology and infrastructure that it requires," and GLT ran from the third round at fixtures hosted by Premier League and EFL Championship clubs (The Football Association, 2026). Reasoned: the technology follows the venue's installed infrastructure, so one competition runs with it in some grounds and without it in others.

:::reveal Within how long must a GLT goal signal be confirmed, and to whom? ||| Within one second, only to the match officials (IFAB, 2026, p. 52).

:::reveal Who works in the video operation room under Law 1? ||| The video assistant referee (VAR), the assistant VAR (AVAR) and the replay operator (RO) (IFAB, 2026, p. 53).

:::reveal Why did the 2025-26 FA Cup use SAOT only in Premier League stadiums? ||| "due to the technology and infrastructure that it requires" (The Football Association, 2026).

## Sources
- ${ATP_2023} Locator: paragraphs 1, 3, 5 and 6.
- ${ATP_2025} Locator: opening paragraphs (read through a web fetch tool).
- ${ATP_2024} Locator: paragraphs 1 to 3 (read through a web fetch tool).
- ${AELTC_2026} Locator: PDF p. 2 (repeated on PDF p. 14).
- ${HE_ATP} Locator: "The Dawn of Electronic Officiating" and "Going Live".
- ${IFAB_2026} Locator: cover; Law 1.11, p. 50; "Principles of GLT," p. 52; Law 1.14, p. 53; VAR protocol preamble, p. 153; Principles 1, 5 and 6, pp. 153 to 154; section 2, item e, p. 155.
- ${MICHAELIDES_2026} Locator: "A Decade of Trust" and "Sustainable & Hybrid Operations".
- ${FIFA_SAOT} Locator: "How was it tested?"
- ${PL_2025A} Locator: paragraph 1.
- ${PL_2025B} Locator: "Will SAOT rule out more goals".
- ${PL_2025C} Locator: VAR section.
- ${FA_2026} Locator: paragraphs 3 to 5.`,
    },
    {
      slug: "cricket-and-college-replay",
      title: "12 · Cricket and college: DRS, Rule 12 and the conferences",
      section: "3 · The leagues and the rules",
      recallContent: [
        {
          prompt: "How many VAR review categories do the 2026/27 Laws list, and what is the newest?",
          answer: "Five; the fifth is a clearly incorrectly awarded corner kick, in limited conditions (IFAB, 2026, p. 155).",
        },
        {
          prompt: "How much time per offside event did the Premier League say SAOT saved after a season?",
          answer: "27 seconds (Premier League, 2025c).",
        },
      ],
      body: `${QR}

**Cricket: the Decision Review System (DRS).** The International Cricket Council's men's Test playing conditions are "Effective from October 2026," and DRS and the third umpire are in Appendix D (International Cricket Council [ICC], 2026, p. 88). From Appendix D:

- Minimum requirements for DRS are the camera specification, "Approved ball-tracking technology" and "Approved sound-based edge detection technology" (p. 89).
- With DRS, the ICC appoints a neutral third umpire and "an independent technology expert (ICC Technical Officer)" at every DRS series (p. 89).
- Without DRS, the third umpire uses camera replays only, and the broadcaster's ball-tracking and edge detection "shall not be used during Umpire Reviews" (p. 89).
- The Home Board must provide "a separate room" for the third umpire, with access to the equipment (p. 89).
- An on-field umpire refers a decision to the third umpire "by making the shape of a TV screen with their hands" (p. 90).
- Each team may make at most "three (3) Player Review requests that are categorised as 'Unsuccessful'" per innings (p. 97). Older material says two.
- The ICC Match Referee makes the final call on which technology is used in a match, with the ICC Technical Official, ICC management and the boards (p. 99).

| Job | Approved technology (ICC, 2026, p. 98) |
|---|---|
| Ball-tracking | "HawkEye (HawkEye Innovations), or; VirtualEye (ARL)" |
| Sound-based edge detection | "Real-Time Snickometer (BBG Sports), or; UltraEdge (HawkEye Innovations)" |
| Heat-based edge detection | "Hot Spot cameras (BBG Sports)" |
| LED wickets | "Zing Bails and Stumps" |

So cricket ball-tracking is not only Hawk-Eye.

**College football: NCAA Rule 12.** The 2026 NCAA Football Rules and Interpretations define the process: "Instant replay is a process whereby video review is used to uphold or overturn certain on-field decisions" (National Collegiate Athletic Association [NCAA], 2026a, Rule 12-1-1). To overturn, the replay official "must be convinced beyond all doubt by clear and obvious video evidence" (Rule 12-1-3). Replay is optional: "Any member institution may use instant replay, but there is no requirement to do so" (Rule 12-2-1-a).

The rule names the crew. Replay needs "a minimum of three persons," "normally referred to as replay official, communicator and technician" (Rule 12-4-1). "The type of equipment used to carry out necessary instant replay duties shall be determined by each conference or member institution" (Rule 12-4-2-a). Replay equipment and staff sit in "a separate, secure location in the traditional press box area," a collaborative model may reach beyond the press box, and a protected wireless official-to-official (O2O) system is permitted (Rules 12-4-2 and 12-4-3). One 2026 change: after the two-minute timeout, when the Replay Official stops the game, the play clock freezes and restarts at the ready signal, with at least 10 seconds (NCAA, 2026b, p. 2).

So, reasoned from Rule 12-4: in college football the "technician" is a named seat in the rule, and the vendor is a conference's or a school's choice, not the NCAA's.

**The SEC.** The Southeastern Conference uses a Hawk-Eye multi-sport video review system, beginning with men's and women's basketball in 2024-25 (Southeastern Conference [SEC], 2025). For soccer and volleyball from 2024, a trade report says SMART is "the basis for video capture, replay, clipping and distribution." Soccer adds "six dedicated high-speed cameras," and referees talk to "a dedicated Replay Operator in a designated replay room on campus." Volleyball uses "12 dedicated high-speed cameras," including six "pylon cameras," and a Review Referee at the scorer's table has sole authority (Sports Video Group, 2024). Hawk-Eye says it supplies SMART to the SEC in "soccer, volleyball, baseball, softball and men's and women's basketball." It adds that the SEC Baseball Tournament of May 2026 ran the ABS Challenge on an experimental basis, "For the first time in a collegiate setting," with three challenges per team rather than MLB's two (Hawk-Eye Innovations, 2026b).

**SEC football is a separate question.** The University of Oklahoma's IT department wrote in 2024 that joining the SEC meant "Upgrade of the DV Sport video replay system for Football to include additional camera feeds and video delivery to the SEC office in Birmingham," and, separately, cabling "7 event venues" for "in-game instant replay review using the Hawkeye system" (University of Oklahoma Information Technology, 2024). One school is not the conference. This course does not say which vendor runs SEC football replay across the conference.

**The Big Ten.** A Hawk-Eye posting for a College Sports Systems Technician at Rutgers, now closed, described work "on-site at Big Ten Conference Football stadiums," including "Assisting in the set-up of the SMART replay & medical systems (both hardware and software)" (Hawk-Eye Innovations, n.d.-f). A posting is a primary source for what that employer asked. No Big Ten announcement naming its replay vendor could be read for this course, so the course states only what the posting says.

:::reveal Which two ball-tracking technologies does the ICC approve for DRS? ||| HawkEye (HawkEye Innovations) or VirtualEye (ARL) (ICC, 2026, p. 98).

:::reveal Which three people does NCAA Rule 12-4-1 name for replay? ||| The replay official, the communicator and the technician (NCAA, 2026a).

:::reveal Who decides what replay equipment a college football game uses? ||| Each conference or member institution (NCAA, 2026a, Rule 12-4-2-a).

## Sources
- ${ICC_2026} Locator: cover; Appendix D, p. 88; 1.1.3 table and 1.1.4, p. 89; 2.1.2, p. 90; 3.6.1, p. 97; 3.8.1.3 to 3.8.1.6, p. 98; 3.8.3, p. 99.
- ${NCAA_RULES} Locator: Rules 12-1-1, 12-1-3 and 12-2-1-a, p. FR-117; Rules 12-4-1 to 12-4-3, p. FR-122.
- ${NCAA_CHANGES} Locator: p. 2, Rule 3-2-4-c-12.
- ${SEC_2025} Locator: paragraph 1.
- ${SVG_2024} Locator: "Soccer" and "Volleyball".
- ${HE_SEC_ABS} Locator: paragraphs 1 to 3 and 5; last paragraph.
- ${OU_2024} Locator: "Projects Include".
- ${HE_RUTGERS} Locator: "What the Job is All About" and "Key Responsibilities".`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · The leagues and the rules",
      section: "3 · The leagues and the rules",
      body: "A graded check on replay, tracking and measurement under each league's rules: the NFL, the NBA, the NHL, MLB, tennis, football (soccer), cricket and college conferences. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How many challenges does NFL Rule 15 give each team at minimum?", options: ["One", "Two", "Three", "Four"], correctIndex: 1, explanation: "NFL (2026a, Rule 15-1-1): \"a minimum of two challenges,\" with a third if at least one succeeds.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "When does an NFL team get a third challenge?", options: ["If both of its challenges fail", "Only in the fourth quarter", "If at least one challenge succeeds", "Only after the two-minute warning"], correctIndex: 2, explanation: "NFL (2026a, Rule 15-1-1): a third challenge if at least one of the first two succeeds.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "Is a fourth challenge ever permitted under Rule 15?", options: ["Yes, in overtime only", "Yes, if two succeed", "Yes, with a timeout left", "No, it is not permitted"], correctIndex: 3, explanation: "NFL (2026a, Rule 15-1-1): \"A fourth challenge will not be permitted.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What must a team have available to make a challenge?", options: ["An available timeout", "A replay assistant", "A second red flag", "A sideline tablet"], correctIndex: 0, explanation: "NFL (2026a, Rule 15-1-1): each challenge needs an available timeout.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "Who may throw the red flag to start a challenge in the 2026 rule text?", options: ["Any player on the field of play", "The head coach or pregame designee", "The team's replay video operator", "The stadium's public-address host"], correctIndex: 1, explanation: "NFL (2026a, Rule 15-1-1-a): \"The head coach or head coach's pregame challenge designee can initiate a challenge by throwing a red flag.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "After the two-minute warning, who may start an NFL replay review?", options: ["Either head coach, with a red flag", "Either team's captain, with a hand signal", "The Replay Official or SVP of Officiating", "The broadcast network's replay producer"], correctIndex: 2, explanation: "NFL (2026a, Rule 15-1-2): only the Replay Official or the Senior Vice President of Officiating, or a designee.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "Who conducts every NFL replay review under Rule 15-2?", options: ["The Referee alone at the sideline", "The home team's replay assistant", "The broadcast's replay operator", "The SVP of Officiating or a designee"], correctIndex: 3, explanation: "NFL (2026a, Rule 15-2): \"All Replay Reviews will be conducted by the Senior Vice President of Officiating or his or her designee.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What standard must video meet to change a ruling under Rule 15-2-1?", options: ["Clear and obvious evidence", "Beyond all reasonable doubt", "More likely than not", "A majority of angles agree"], correctIndex: 0, explanation: "NFL (2026a, Rule 15-2-1): only when \"clear and obvious video evidence warrants a change.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What does Rule 15-8 say the Referee does if communication with the League office is lost?", options: ["Cancels the review and plays on at once", "Waits one minute, then reviews on site", "Calls a ten-minute delay of the game", "Lets the home team's coach decide it"], correctIndex: 1, explanation: "NFL (2026a, Rule 15-8): the Referee waits one minute, then reviews with the Replay Official.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What may Rule 15-9 let the Replay Official help on-field officials with?", options: ["Judgment calls such as holding fouls", "Which head coach may challenge next", "Objective aspects such as the game clock", "Whether a player needs to leave the game"], correctIndex: 2, explanation: "NFL (2026a, Rule 15-9): \"specific, objective aspects of a play,\" including the game clock, possession and the ball's position relative to a line.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "Where is the NFL's Art McNally GameDay Central?", options: ["In each NFL stadium's press box", "At Sony's offices in Basingstoke", "In a production truck at each game", "At league headquarters in New York"], correctIndex: 3, explanation: "NFL (n.d.-b): AMGC is at league headquarters in New York.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "How many stations does AMGC have, per the NFL?", options: ["16", "12", "30", "9"], correctIndex: 0, explanation: "NFL (n.d.-b): \"16 stations, each set up to show a designated game on a 58-inch touch-screen monitor.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What drives the replays at AMGC, per the NFL?", options: ["Foot pedals", "Xbox controllers", "Touch pens", "Voice commands"], correctIndex: 1, explanation: "NFL (n.d.-b): replays are driven \"by Xbox controllers.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What does the replay field operator bring the referee?", options: ["A printed still of the play", "A headset tied to the truck", "A Microsoft Surface Pro tablet", "A replay monitor on a cart"], correctIndex: 2, explanation: "NFL (n.d.-b): a Microsoft Surface Pro tablet, used since 2017.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What do AMGC staff do with every play after the games?", options: ["Delete it from the system in a day", "Send it to every broadcast partner", "Print it out for each of the clubs", "Tag it for search in a database"], correctIndex: 3, explanation: "NFL (n.d.-b): staff \"'tag' every play so they can be searched later in a database.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What does Sony say SMART combines for the NFL?", options: ["Feeds from all broadcast partners", "Tags from all players' pads", "Data from all betting partners", "Audio from all referee mics"], correctIndex: 0, explanation: "Sony Electronics (2025): SMART combines \"video feeds from all of the NFL's broadcast partners in one place.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "Which roles do NFL replay officials oversee, per the NFL?", options: ["Chain crew and the ball crew", "Video and replay field operators", "Broadcast camera and audio crew", "Doctors, trainers and paramedics"], correctIndex: 1, explanation: "NFL (n.d.-d): a video operator, replay field operators, replay field communicators and a replay assistant.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "Where do NFL replay assistants often come from, per the NFL?", options: ["Broadcast production truck jobs", "Team video coaching staffs", "College replay or game day roles", "Retired on-field officials"], correctIndex: 2, explanation: "NFL (n.d.-d): college replay, or game day assistant roles \"such as replay video operators, replay field communicators or clock operators.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "From which season did Hawk-Eye become the NFL's primary line-to-gain method?", options: ["The 2021 season", "The 2014 season", "The 2023 season", "The 2025 season"], correctIndex: 3, explanation: "Sony Electronics (2025): \"beginning with the 2025 season.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What happened to the NFL chain crew under the 2025 change?", options: ["It stays in a secondary role", "It was removed from the field", "It now runs the Hawk-Eye cameras", "It moved into AMGC in New York"], correctIndex: 0, explanation: "Sony Electronics (2025): \"The chain crew will remain on the field in a secondary capacity.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "What cameras make up the NFL's optical line-to-gain system?", options: ["Twelve 4K cameras", "Six 8K cameras", "Two HD cameras", "Thirty 8K cameras"], correctIndex: 1, explanation: "Sony Electronics (2025): \"six 8K cameras for optical tracking of the position of the ball.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "From where is the NFL's line-to-gain system operated?", options: ["Each press box", "The chain crew", "AMGC in New York", "The TV truck"], correctIndex: 2, explanation: "Sony Electronics (2025): the system is \"operated from\" AMGC and integrated with the replay system.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "About how long does Sony say the full line-to-gain process takes?", options: ["About 3 seconds", "About 3 minutes", "About 90 seconds", "About 30 seconds"], correctIndex: 3, explanation: "Sony Electronics (2025): \"around 30 seconds, saving up to 40 seconds from a measurement with the chains.\"", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "Why does lesson 9 not say how the line-to-gain system ran in 2025?", options: ["Only the April 2025 release was read", "The NFL kept the results secret", "The system was not used in 2025", "Sony withdrew the system in May"], correctIndex: 0, explanation: "The course read only the April 2025 announcement, so it says nothing about the season that followed.", sourceLessonSlug: "nfl-replay-and-the-line-to-gain" },
          { prompt: "Since when does a trade report say Hawk-Eye worked with the NBA as a proof of concept?", options: ["2014", "2019", "2023", "2008"], correctIndex: 1, explanation: "Dachman (2023): \"Since 2019, Hawk-Eye has worked closely with the NBA in a proof-of-concept capacity.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Where did Hawk-Eye's NBA proof of concept collect data?", options: ["All 30 arenas and the Finals", "Only the All-Star Game venue", "Summer League and six arenas", "College arenas in the SEC"], correctIndex: 2, explanation: "Dachman (2023): \"at NBA Summer League and six NBA arenas.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "What roles does Second Spectrum keep with the NBA, per the trade report?", options: ["Replay Center video operator", "Exclusive league data provider", "Official referee comms vendor", "League Pass and team analytics"], correctIndex: 3, explanation: "Dachman (2023): \"an official NBA League Pass augmentation provider and an official NBA Team Basketball analytics provider.\" Sportradar is the exclusive data provider.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Why does lesson 10 say the NBA's and the WNBA's tracking differ?", options: ["Different optical vendors", "Only one uses cameras", "Only one tracks the ball", "The WNBA uses radio tags"], correctIndex: 0, explanation: "The NBA's league tracking is Hawk-Eye's; the WNBA's is Second Spectrum's (WNBA, 2024). Both are optical.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Since when does the NHL say it has used Hawk-Eye SMART?", options: ["2016", "2015", "2019", "2025"], correctIndex: 1, explanation: "NHL (2025): \"since 2015.\" Hawk-Eye's homepage says 2016; the course teaches the league's date.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Which date does lesson 10 teach for NHL SMART?", options: ["The vendor's date", "Neither date", "The league's date", "An average of both"], correctIndex: 2, explanation: "It teaches the NHL's 2015, names Hawk-Eye's 2016, and has not settled why they differ.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "In how many NHL arenas is SMART installed, per the NHL?", options: ["All 30", "Only 12", "Only 6", "All 32"], correctIndex: 3, explanation: "NHL (2025): SMART services \"installed in all 32 NHL arenas.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Where is the NHL's Situation Room, per the trade report?", options: ["Toronto", "New York", "Secaucus", "Montreal"], correctIndex: 0, explanation: "Costa (2026): the Situation Room is in Toronto. Secaucus is the NBA's Replay Center.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "How many operators does the NHL Situation Room assign to each game, per the trade report?", options: ["Three shared operators", "One dedicated operator", "No live operator at all", "A team of sixteen staff"], correctIndex: 1, explanation: "Costa (2026): \"a dedicated operator\" for each game.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "By lesson 10's reasoning, what makes one central NHL review room possible?", options: ["A single shared broadcaster", "Referees with radio earpieces", "Standardized camera positions", "A league-wide ticketing system"], correctIndex: 2, explanation: "Feeds come from \"standardized goal-line, blue-line, and overhead camera positions\" (Costa, 2026), so the operator knows where each angle comes from.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "As of January 2026, how long had a separate NHL Hawk-Eye tracking system been live league-wide?", options: ["About a month", "Since 2015", "Not yet live", "More than a year"], correctIndex: 3, explanation: "Costa (2026): it \"has been live league-wide for more than a year.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "When did MLB install Statcast in all 30 ballparks?", options: ["2015", "2008", "2020", "2023"], correctIndex: 0, explanation: "MLB (n.d.): Statcast in all 30 ballparks in 2015, after a partial 2014 trial. 2008 was pitch tracking.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "What made up Statcast from 2015 to 2019, per MLB?", options: ["Radio tags in caps", "Cameras and radar", "GPS in the bats", "Umpire tablets"], correctIndex: 1, explanation: "MLB (n.d.): \"a combination of camera and radar systems.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "What year does MLB give for Hawk-Eye's arrival in Statcast?", options: ["2019", "2015", "2020", "2008"], correctIndex: 2, explanation: "MLB (n.d.): \"That changed in 2020, with the arrival of Hawk-Eye.\" Hawk-Eye's homepage says 2019.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Why does lesson 10 give both 2019 and 2020 for Statcast's Hawk-Eye start?", options: ["MLB revised its own date in 2021", "Two ballparks started a year apart", "Statcast had two vendors at once", "League and vendor give different years"], correctIndex: 3, explanation: "MLB says 2020 and Hawk-Eye says 2019; the course has not settled whether the vendor's year counts testing.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Who approved MLB's ABS Challenge System?", options: ["The Joint Competition Committee", "The umpires' union alone", "The 30 club owners alone", "The players' union alone"], correctIndex: 0, explanation: "MLB (2025): the Joint Competition Committee approved it.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Who sits on MLB's Joint Competition Committee?", options: ["Ten owners and the commissioner", "Six owners, four players, one umpire", "Thirty owners and thirty players", "Four umpires and two managers"], correctIndex: 1, explanation: "MLB (2025): \"six owners, four active players and one active umpire.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "How many Hawk-Eye cameras track each pitch for ABS?", options: ["Six", "Three", "Twelve", "Thirty"], correctIndex: 2, explanation: "MLB (2025): \"Twelve (12) Hawk-Eye cameras set up around the perimeter of the field.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "What network does MLB say carries ABS data?", options: ["The public stadium Wi-Fi", "A satellite uplink", "The broadcast truck", "A private 5G network"], correctIndex: 3, explanation: "MLB (2025): \"a 5G private network from T-Mobile for Business.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "About how long does MLB say the whole ABS challenge process takes?", options: ["15 seconds", "85 seconds", "5 minutes", "1 second"], correctIndex: 0, explanation: "MLB (2025): \"The entire process takes approximately 15 seconds.\"", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "Who may make an ABS challenge?", options: ["The manager from the dugout", "Pitcher, catcher or batter", "Any coach on the bench", "The home plate umpire"], correctIndex: 1, explanation: "MLB (2025): only the pitcher, catcher or batter, with no help from coaches or others.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "How does a player signal an ABS challenge?", options: ["Throwing a red flag", "Waving at the dugout", "Tapping the hat or helmet", "Pointing at the plate"], correctIndex: 2, explanation: "MLB (2025): by tapping the hat or helmet, immediately.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "How many ABS challenges does each MLB club start with?", options: ["Three", "One", "Five", "Two"], correctIndex: 3, explanation: "MLB (2025): two, keeping any that succeed. The 2026 SEC tournament used three.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "What sets the top and bottom of the ABS zone?", options: ["Percentages of the batter's height", "The umpire's view of the hitter", "The catcher's mitt position", "A fixed height for every batter"], correctIndex: 0, explanation: "MLB (2025): top at 53.5% and bottom at 27% of the batter's height.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "How wide is the ABS strike zone?", options: ["12 inches", "17 inches", "20 inches", "24 inches"], correctIndex: 1, explanation: "MLB (2025): a two-dimensional rectangle at the middle of home plate, 17 inches wide.", sourceLessonSlug: "basketball-hockey-and-baseball" },
          { prompt: "From when did the ATP announce tour-wide ELC Live?", options: ["2017", "2023", "2025", "2005"], correctIndex: 2, explanation: "ATP Tour (2023): \"Tour-wide adoption of Electronic Line Calling Live (ELC Live) from 2025.\" The announcement was made in 2023.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Which calls does the ATP's ELC Live cover?", options: ["Only the service line calls", "Only foot faults at the base", "Only net cords on a serve", "All court lines for out calls"], correctIndex: 3, explanation: "ATP Tour (2023): \"all court lines for 'out' calls.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Whose role does the ATP say ELC Live takes on?", options: ["On-court line judges", "The chair umpires", "The ball persons", "The tour referees"], correctIndex: 0, explanation: "ATP Tour (2023): a role \"traditionally carried out by on-court line judges.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Where was ELC Live first trialled, per the ATP?", options: ["The Wimbledon qualifying in London", "The Next Gen ATP Finals in Milan", "The US Open night session in New York", "The Davis Cup Finals in Malaga, Spain"], correctIndex: 1, explanation: "ATP Tour (2023): \"first trialled at the Next Gen ATP Finals in 2017 in Milan.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "What did the ATP say ELC Live would deliver besides line calls?", options: ["Live betting odds feeds", "Crowd noise monitoring", "Player and ball tracking", "Automatic score graphics"], correctIndex: 2, explanation: "ATP Tour (2023): \"comprehensive player and ball tracking across the whole Tour.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "What did the ATP say in February 2025 about live electronic line calling?", options: ["Only Masters events use it", "It was paused for clay", "It ended at Grand Slams", "All tour-level events use it"], correctIndex: 3, explanation: "ATP Tour (2025): \"all tour-level events on all surfaces are featuring Live Electronic Line Calling.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Where did the ATP say Video Review was coming to every court in 2025?", options: ["All nine Masters 1000 events", "All four Grand Slam events", "All Next Gen Finals events", "All Davis Cup ties and finals"], correctIndex: 0, explanation: "ATP Tour (2025): Video Review on every court at all nine ATP Masters 1000 events.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "What will the All England Club install on every court for 2026?", options: ["New cameras for the broadcast feed", "Visual indicators for out and fault", "Seats for the returning line judges", "Screens showing player tracking"], correctIndex: 1, explanation: "All England Lawn Tennis Club (2026, p. 2): \"visual indicators will be installed on every court\" to signal \"out\" and \"fault\" calls.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Why is calling Wimbledon the holdout with line judges out of date?", options: ["It never used line judges", "It bans electronic calling", "It went electronic in 2025", "It went electronic in 2006"], correctIndex: 2, explanation: "ATP Tour (2024): live electronic line calling from 2025 on all main draw and qualifying match courts.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Since the ATP approved multiple suppliers, what follows about Hawk-Eye?", options: ["It is the only approved supplier", "It was turned down by the ATP", "It supplies only the Grand Slams", "It is one supplier, not the only one"], correctIndex: 3, explanation: "ATP Tour (2023) approved \"Multiple suppliers,\" so Hawk-Eye is one of them.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "What does Law 1 say goal-line technology applies to?", options: ["Solely the goal line", "All lines on the pitch", "Offside lines as well", "Penalty-area lines too"], correctIndex: 0, explanation: "IFAB (2026, p. 52): GLT \"applies solely to the goal line.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Within how long must a GLT goal signal be confirmed?", options: ["Five seconds", "One second", "Ten seconds", "Half a minute"], correctIndex: 1, explanation: "IFAB (2026, p. 52): \"automatically confirmed within one second.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "To whom must the GLT goal signal go?", options: ["Both teams' benches", "The stadium screens", "Only the match officials", "The broadcasters first"], correctIndex: 2, explanation: "IFAB (2026, p. 52): only to the match officials; it may also go to the video operation room.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Who works in the video operation room under Law 1.14?", options: ["Referee, captains and coaches", "Doctors, physios and analysts", "Director, producer and talent", "VAR, AVAR and replay operator"], correctIndex: 3, explanation: "IFAB (2026, p. 53): the VAR, the assistant VAR (AVAR) and the replay operator (RO).", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Where may the video operation room be, under Law 1.14?", options: ["In or near the stadium, or farther away", "Only inside the stadium's main stand", "Only at FIFA's headquarters in Zurich", "Only inside the host broadcast truck"], correctIndex: 0, explanation: "IFAB (2026, p. 53): \"it may be in/close to the stadium or at a more distant location.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "What must a competition get before using VAR?", options: ["A vote of all the clubs", "Written permission from FIFA", "A broadcaster's approval", "A referee union contract"], correctIndex: 1, explanation: "IFAB (2026, p. 153): \"written permission from FIFA.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Who always takes the final decision in a VAR review?", options: ["The VAR", "The AVAR", "The referee", "The RO"], correctIndex: 2, explanation: "IFAB (2026, pp. 153 to 154): \"The final decision is always taken by the referee.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "What time limit do the Laws set for the VAR review process?", options: ["Ninety seconds at most", "Two minutes, then play", "Until the next restart", "There is no time limit"], correctIndex: 3, explanation: "IFAB (2026, pp. 153 to 154): \"There is no time limit for the review process.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "What is the fifth VAR review category in 2026/27?", options: ["Clearly wrong corner kick awards", "Clearly wrong throw-in awards", "Clearly wrong yellow cards", "Clearly wrong substitutions"], correctIndex: 0, explanation: "IFAB (2026, p. 155): a \"Clearly incorrectly awarded corner kick\" in limited conditions.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Which job does lesson 11 note is named in the Laws themselves?", options: ["The camera operator", "The replay operator", "The stadium manager", "The tracking engineer"], correctIndex: 1, explanation: "Law 1.14 names the replay operator (RO) in the video operation room (IFAB, 2026, p. 53).", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Where did FIFA trial its semi-automated offside technology?", options: ["Euro 2020 and Copa America 2021", "The 2018 World Cup in Russia", "Arab Cup and Club World Cup 2021", "The 2023 Women's World Cup"], correctIndex: 2, explanation: "FIFA (n.d.-b): trialled at the FIFA Arab Cup 2021 and FIFA Club World Cup 2021.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "When did the Premier League introduce SAOT?", options: ["1 July 2026, Round 1", "9 January 2026, Round 20", "5 August 2024, Round 1", "12 April 2025, Round 32"], correctIndex: 3, explanation: "Premier League (2025a): \"on Saturday 12 April (Match Round 32)\" of 2024/25.", sourceLessonSlug: "tennis-and-football" },
          { prompt: "How much time per offside event did the Premier League say SAOT saved after a season?", options: ["27 seconds", "3 minutes", "90 seconds", "2 seconds"], correctIndex: 0, explanation: "Premier League (2025c): \"27 seconds per offside event.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Why was SAOT used only in Premier League stadiums in the 2025-26 FA Cup?", options: ["The broadcasters paid only for those games", "The technology and infrastructure it needs", "The referees asked for it in big games", "The smaller clubs all voted against using it"], correctIndex: 1, explanation: "The Football Association (2026): \"due to the technology and infrastructure that it requires.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "What can Hawk-Eye's goal-line system run from, besides a stadium cabin?", options: ["A drone over the pitch", "A referee's smartphone", "A Remote Operations Centre", "The home team's bench"], correctIndex: 2, explanation: "Michaelides (2026): a \"Remote Operations Centre (ROC)\" with \"24/7 remote monitoring.\"", sourceLessonSlug: "tennis-and-football" },
          { prompt: "Since when are the current ICC men's Test playing conditions effective?", options: ["July 2026", "January 2025", "September 2017", "October 2026"], correctIndex: 3, explanation: "ICC (2026), cover: \"Effective from October 2026.\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Which three things are DRS minimum requirements?", options: ["Cameras, ball-tracking, edge detection", "Stumps, bails and a sight screen behind", "Umpire mics, radios, a scoreboard", "Floodlights, covers, a spare pitch"], correctIndex: 0, explanation: "ICC (2026, p. 89): the camera specification, approved ball-tracking and approved sound-based edge detection.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Whom does the ICC appoint at every DRS series besides a neutral third umpire?", options: ["A broadcast liaison", "An ICC Technical Officer", "A ball-tracking analyst", "A home board engineer"], correctIndex: 1, explanation: "ICC (2026, p. 89): \"an independent technology expert (ICC Technical Officer).\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "What must the Home Board provide for the third umpire?", options: ["A seat in the broadcast truck", "A tablet at the boundary rope", "A separate room with the equipment", "A desk in the players' area"], correctIndex: 2, explanation: "ICC (2026, p. 89): \"a separate room\" with access to the equipment.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "How does an on-field umpire refer a decision to the third umpire?", options: ["Raises one finger and points up high", "Taps the top of the helmet twice", "Throws a red flag onto the pitch", "Makes a TV-screen shape with the hands"], correctIndex: 3, explanation: "ICC (2026, p. 90): \"by making the shape of a TV screen with their hands.\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "How many unsuccessful player reviews may each team make per innings?", options: ["Three", "Two", "One", "Four"], correctIndex: 0, explanation: "ICC (2026, p. 97): \"three (3) Player Review requests that are categorised as 'Unsuccessful'.\" Older material says two.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Who makes the final call on which DRS technology is used in a match?", options: ["The home board's chair", "The ICC Match Referee", "The host broadcaster", "The two team captains"], correctIndex: 1, explanation: "ICC (2026, p. 99): the ICC Match Referee, with the Technical Official, ICC management and the boards.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Which ball-tracking systems does the ICC approve?", options: ["HawkEye or TRACAB Optical", "VirtualEye or Statcast", "HawkEye or VirtualEye", "HawkEye and nothing else"], correctIndex: 2, explanation: "ICC (2026, p. 98): \"HawkEye (HawkEye Innovations), or; VirtualEye (ARL).\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "What does the ICC approve UltraEdge for?", options: ["Ball-tracking on lbw calls", "LED wickets and the bails", "Heat-based edge detection", "Sound-based edge detection"], correctIndex: 3, explanation: "ICC (2026, p. 98): UltraEdge (HawkEye Innovations) is approved for sound-based edge detection; Hot Spot is the heat-based one.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Without DRS, what may the third umpire use?", options: ["Camera replays only", "Ball-tracking only", "Edge detection only", "No video at all"], correctIndex: 0, explanation: "ICC (2026, p. 89): camera replays only; broadcaster ball-tracking and edge detection \"shall not be used during Umpire Reviews.\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "How does the NCAA define instant replay in Rule 12-1-1?", options: ["A broadcast's rerun of the key plays", "Video review to uphold or overturn calls", "A coach's challenge made with a flag", "A medical review of an injured player"], correctIndex: 1, explanation: "NCAA (2026a, Rule 12-1-1): \"video review is used to uphold or overturn certain on-field decisions.\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Must an NCAA member institution use instant replay?", options: ["Yes, at every home game", "Yes, in conference play", "No, there is no requirement", "Only in the bowl games"], correctIndex: 2, explanation: "NCAA (2026a, Rule 12-2-1-a): \"Any member institution may use instant replay, but there is no requirement to do so.\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "What minimum replay crew does NCAA Rule 12-4-1 set?", options: ["Two: an official and a camera operator", "Four: two officials and two technicians", "One: the replay official working alone", "Three: official, communicator, technician"], correctIndex: 3, explanation: "NCAA (2026a, Rule 12-4-1): \"a minimum of three persons,\" the replay official, communicator and technician.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Who determines the replay equipment used in college football?", options: ["Each conference or institution", "The NCAA's national office", "The visiting team's staff", "The host television network"], correctIndex: 0, explanation: "NCAA (2026a, Rule 12-4-2-a): \"determined by each conference or member institution.\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Where does NCAA Rule 12-4-3-a put replay equipment and staff?", options: ["On the home team's own sideline bench", "A secure location in the press box", "Inside the host broadcaster's truck", "In a tent behind one of the end zones"], correctIndex: 1, explanation: "NCAA (2026a, Rule 12-4-3-a): \"a separate, secure location in the traditional press box area.\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "What 2026 NCAA change applies when the Replay Official stops the game after the two-minute timeout?", options: ["The game clock resets to two minutes", "Each team loses one of its timeouts", "The play clock freezes, then restarts", "The quarter ends at once on the stop"], correctIndex: 2, explanation: "NCAA (2026b, p. 2): the play clock freezes and restarts at the ready signal, with at least 10 seconds.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "By lesson 12's reasoning, whose choice is the replay vendor in college football?", options: ["The NCAA's national office", "The TV network's director", "The referee crew chief's", "A conference's or a school's"], correctIndex: 3, explanation: "Rule 12-4-2-a leaves equipment to each conference or member institution, so the vendor is their choice.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "In which SEC sport did Hawk-Eye video review begin in 2024-25, per the SEC?", options: ["Men's and women's basketball", "Football, home games only", "Track and field meets only", "Swimming and diving meets"], correctIndex: 0, explanation: "SEC (2025): the Hawk-Eye system for men's and women's basketball from 2024-25.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "In SEC soccer, whom do referees talk to for review, per a trade report?", options: ["The VAR at the SEC's central office", "A Replay Operator in a campus room", "The home team's own video coach", "The broadcast truck's replay director"], correctIndex: 1, explanation: "Sports Video Group (2024): \"a dedicated Replay Operator in a designated replay room on campus.\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Who has sole review authority in SEC volleyball?", options: ["The Replay Operator on campus", "The head coaches jointly", "A Review Referee at the table", "The SEC office in Birmingham"], correctIndex: 2, explanation: "Sports Video Group (2024): a Review Referee at the scorer's table has sole authority.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "How many ABS challenges per team did the 2026 SEC Baseball Tournament give?", options: ["Two", "One", "Five", "Three"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026b): three challenges per team, against MLB's two.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "What does the University of Oklahoma's 2024 note say about its football replay?", options: ["Upgrade of the DV Sport system", "Install of a Hawk-Eye system", "Removal of all replay gear", "Purchase of TRACAB cameras"], correctIndex: 0, explanation: "University of Oklahoma Information Technology (2024): \"Upgrade of the DV Sport video replay system for Football.\" Hawk-Eye was for seven other venues.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Why does lesson 12 not name a conference-wide vendor for SEC football replay?", options: ["The SEC bans vendor names", "One school is not the conference", "Football has no replay in the SEC", "Every school uses Hawk-Eye"], correctIndex: 1, explanation: "Only one school's note was read; it cannot speak for the whole conference.", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "What did the closed Rutgers posting say the technician helps set up?", options: ["Stadium lighting and power", "Broadcast cameras and graphics", "SMART replay and medical systems", "Ticket scanners and Wi-Fi"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-f): \"Assisting in the set-up of the SMART replay & medical systems (both hardware and software).\"", sourceLessonSlug: "cricket-and-college-replay" },
          { prompt: "Why does lesson 12 state only what the Rutgers posting says about the Big Ten?", options: ["The Big Ten forbids naming vendors", "The posting is the conference's own", "Hawk-Eye asked the course not to", "No Big Ten vendor announcement was read"], correctIndex: 3, explanation: "No Big Ten announcement naming its replay vendor could be read for the course.", sourceLessonSlug: "cricket-and-college-replay" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4: The game day, hour by hour
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "arrival-and-setup",
      title: "13 · Before the gates open: arrival and setup",
      section: "4 · The game day, hour by hour",
      recallContent: [
        {
          prompt: "Which three people does NCAA Rule 12-4-1 name for replay?",
          answer: "The replay official, the communicator and the technician (NCAA, 2026a).",
        },
        {
          prompt: "Which ball-tracking systems does the ICC approve for DRS?",
          answer: "HawkEye (HawkEye Innovations) or VirtualEye (ARL) (ICC, 2026, p. 98).",
        },
      ],
      body: `${QR}

**How this section is built.** This section assembles a game day from job postings and league pages, each named where it is used. A posting is a primary source for what one employer asked on the date it was posted. Different employers and sports are combined here to show the shape of the day, so no single job does every step. For the broadcast crew's own day beside this one, see *Break Into Sports & Media Broadcasting* lesson "13 · Game day: roles, call times, and where utility fits".

**What this section leaves out.** An early outline of this course listed "synchronizing the medical monitors" as a game-day step. No posting or league page read for this course supports it, so it is left out. Tagging video at the spotter's direction is real, but its source is the NFL's AT spotters page (lesson 5), not a posting.

**A week out.** The NFL's injury video review operator posting, created April 15, 2026, says operators "must notify the League's Player Health and Safety department of any scheduling conflicts at least one (1) week prior to game day" (NFL, 2026b).

**The day before.** Hawk-Eye's Big Ten technician posting gives the working hours as "Game Day minus 1 and Game Day," with hours that "vary depending on sport delivery" (Hawk-Eye Innovations, n.d.-f). Its football technician postings in Italy say setup days "may require the assistants to be present on the day/s before match day" (Hawk-Eye Innovations, 2026e, 2026f).

**Arrival.** The postings give different call times for different jobs.

| Role | Arrival, as posted | Source |
|---|---|---|
| Football video systems technician, Bolzano | "up to 7 hours pre-Kick Off" | Hawk-Eye Innovations (2026f), published October 22, 2026 |
| Football tracking systems technician, Firenze | "up to 6 hours pre-Kick Off" | Hawk-Eye Innovations (2026e), published October 19, 2026 |
| NFL injury video review operator | "Arrive at the stadium four (4) hours prior to kickoff" | NFL (2026b), created April 15, 2026 |

The NFL's own game-prep page matches for its local staff: all local game day assistants arrive at the stadium 4 hours before kickoff (NFL, n.d.-f).

**Setup: cameras and cable.** Hawk-Eye's UK casual football roles list "Setting up Hawk-Eye technology at the stadium/remote centre (this can involve physically demanding work, such as rigging cameras and running cables)" (Hawk-Eye Innovations, n.d.-g). The Big Ten posting lists "Assisting in the set-up of the SMART replay & medical systems (both hardware and software)" (Hawk-Eye Innovations, n.d.-f). For the cable craft, see CREW-00 lesson "27 · Coil, label and run".

**Setup: fiber and the network.** The Firenze tracking technician's first listed duty is: "Check that there is a fibre connection with all the switches in the stadium rooms and possibly resolve the problems by re-establishing the connections" (Hawk-Eye Innovations, 2026e). For fiber, see CREW-00 lessons "11 · Single-mode, multimode and the color codes", "12 · LC, SC and ST, and the polish on the end" and "13 · Inspect before you connect"; for network cable, "19 · Network cable: categories, the 100-meter channel, etherCON and PoE".

**Setup: comms and the remote center.** The same technician sets up and tests "communication via Dante with Replay Operator (RO), Assistant Replay Operator (ARO), Video Technical Guarantee (VTG) onsite and Technical Guarantee (TG) at the Remote Centre" (Hawk-Eye Innovations, 2026e). For Dante, see CREW-00 lesson "20 · Dante, ST 2110, and why a media network is not the office network". The Bolzano video technician connects "the van or the Control Room with the Remote Center," handles "Installation of the audio and Referee Review Area (RRA) system on the sidelines," and takes "the video signals from the control medium of all the cameras that frame the field" (Hawk-Eye Innovations, 2026f). For video signal paths, see CREW-00 lessons "4 · SDI on coax and the BNC" and "7 · Reference, timecode and return video". The referee review area is the one the Laws require (lesson 11).

**Sometimes you are the only one.** Hawk-Eye's Netherlands Football Systems Operator posting says: "you will be the only Hawk-Eye employee at the stadium" (Hawk-Eye Innovations, 2026d). Reasoned: on those days no colleague on site checks your work, which is one reason the remote center and the checklists in lesson 14 exist.

**Setup in the NBA G League.** A league posting for an automated officiating representative at Van Andel Arena, read on October 26, 2026, lists: "Lead gameday operations for connected basketball technology from pregame setup to postgame teardown," "Verify physical placements and functionality of cameras managed by technology vendors," and "Ensure all data is captured and flows to NBA storage locations" (National Basketball Association [NBA], 2026). CREW-05 lesson "5 · The jobs behind the network" teaches a twin of this posting at another arena.

**The radios, by the clock.** The NFL's game-prep page gives the medical radio handout times (NFL, n.d.-f):

- At 3 hours: "The injury video review system operator distributes a case containing fully charged radios to the visiting club's athletic training staff at the entrance to the visiting locker room."
- At 2 hours: "The injury video review system operators distribute radios to the local league-appointed unaffiliated neurotrauma consultants, airway management physician, emergency response physician, and AT spotters."

The operator posting also asks for skill with "Audio equipment (headsets and belt packs)" (NFL, 2026b). CREW-00 lesson "17 · Same plug, different signal: intercom and DMX on XLR" covers wired intercom beltpacks; it does not cover two-way radios. The case goes out "fully charged," so, reasoned, charging the radios is work done before that 3-hour handoff.

:::reveal How many hours before kickoff does the NFL posting say the injury video review operator arrives? ||| Four hours (NFL, 2026b).

:::reveal What is the Firenze tracking technician's first listed duty? ||| Check that there is a fiber connection with all the switches in the stadium rooms, and re-establish connections if needed (Hawk-Eye Innovations, 2026e).

:::reveal When, and where, does the NFL operator hand radios to the visiting club's athletic training staff? ||| At 3 hours before kickoff, at the entrance to the visiting locker room (NFL, n.d.-f).

## Sources
- ${NFL_IVR} Locator: "Responsibilities" (arrival, scheduling conflicts); "Qualifications" (headsets and belt packs).
- ${HE_RUTGERS} Locator: "Working Hours"; "Key Responsibilities".
- ${HE_FIRENZE} Locator: "Working day expectations"; "Key Responsibilities," items 1 and 3.
- ${HE_BOLZANO} Locator: "Working day expectations"; "Key Responsibilities".
- ${HE_UK_EOI} Locator: "What You Can Expect to Be Doing".
- ${HE_NL} Locator: "What does a typical day look like?"
- ${NBA_VAN_ANDEL} Locator: "Key Responsibilities".
- ${NFL_PREP} Locator: "Countdown to Kickoff," 4 hours, 3 hours and 2 hours.`,
    },
    {
      slug: "checks-calibration-and-meetings",
      title: "14 · Checks, calibration and the pre-game meetings",
      section: "4 · The game day, hour by hour",
      recallContent: [
        {
          prompt: "What does the NFL posting say operators must do about scheduling conflicts?",
          answer: "Notify the League's Player Health and Safety department at least one week before game day (NFL, 2026b).",
        },
        {
          prompt: "What does Hawk-Eye's Netherlands posting say about who else from Hawk-Eye is at the stadium?",
          answer: "\"you will be the only Hawk-Eye employee at the stadium\" (Hawk-Eye Innovations, 2026d).",
        },
      ],
      body: `${QR}

**Checks by the book.** The postings use the same words for pre-game checks. The Big Ten technician conducts "pre-game checks of the systems in accordance with standard procedures" (Hawk-Eye Innovations, n.d.-f). The UK roles conduct "pre-match set-up, checks and calibration of the systems in accordance with standard procedures" (Hawk-Eye Innovations, n.d.-g). The procedures themselves are the vendor's and are not public, so this course teaches that they exist and what the postings say about them.

**A checklist with reasons.** The Bolzano video technician fills in "the checklist relating to your role, reporting any uncompleted checks and specifying the reason" (Hawk-Eye Innovations, 2026f). Look at the second half of that sentence. A skipped check is not hidden; it is written down with its reason. Reasoned: the next person to read that checklist, on site or at the remote center, then knows exactly what was not done and why.

**Calibration and color.** The Firenze tracking technician must "Calibrate the GLT system before the match, following the relevant checklist and carrying out all the necessary tests to test its reliability and precision," and, with camera control, correct the colorimetry of the goal-line Ultra Motion cameras so they are "as similar as possible to the broadcast cameras" (Hawk-Eye Innovations, 2026e). Lesson 3 explained why calibration matters. One likely reason for the color match, reasoned, is that a goal-line angle shown beside a broadcast angle should look like the same match.

**The referees' test.** The same posting monitors the system "during the referees' test approximately two hours before the match" (Hawk-Eye Innovations, 2026e). That is the test the Laws require: "the referee must test the technology's functionality before the match as set out in the Testing Manual" (IFAB, 2026, p. 52). The technician's job at that moment is to have the system ready, and to watch it while the referee tests.

**The league side checks too.** At the NFL's replay center: "Before the games begin, staff conduct technology checks to ensure they can communicate with officials at each stadium and see video of every game" (NFL, n.d.-b).

**The remote desk's checks.** Hawk-Eye's SEC Live Operations Coordinator posting, published October 16, 2026 with a deadline to apply of October 30, 2026, asks the coordinator to "Verify system readiness for every assigned sporting event," to ensure events "are operationally sound from pre-game, in-game, and post-game checklists," and to be "the main point of contact for on-site personnel if remote assistance is required" (Hawk-Eye Innovations, 2026g). So a venue technician's checklist has a reader in the conference's home city of Birmingham, Alabama.

**The 60-minute medical meeting.** In the NFL, at 60 minutes before kickoff, a medical meeting brings together the head team physicians, head athletic trainers, AT spotters, UNCs, paramedic crews, the airway management physician, the emergency response physician, the NFL Football Operations representative and the referee. They review protocols, verify equipment locations and "test communication equipment" (NFL, n.d.-f). At that meeting the booth spotters "review the Medical Time-Out procedures with officials" (NFL Head, Neck and Spine Committee, 2024, p. 7). The two NFL documents place the meeting differently: the game-prep page puts it outside the officials' locker room, and the protocol says "in the referees' locker room" (NFL Head, Neck and Spine Committee, 2024, p. 6). Reasoned: the radios the operators handed out at 3 and 2 hours are among the communication equipment that meeting relies on, so they must be working before it starts.

**One practitioner's account.** An NFL AT spotter interviewed by the Board of Certification in 2021 described the game-day team as "two spotters, video and IT technicians," an arrival four to five hours before kickoff, checks of "all communication and computer equipment on the field and in our booth," and the assignment of home and away teams "to each spotter and video technician" (BOC, 2021). It is one person's account, published by the certifying body. It matches the 2026 posting's one operator per team in the booth (NFL, 2026b).

**Rugby's pre-match handoff.** At the pre-match medical meeting, the home team gives the MDD the tablet for mouthguard data, with its Bluetooth device (World Rugby, n.d.-b; lesson 7). That device has to be paired and charged before the meeting, not during it.

:::reveal What does the Bolzano posting say to do with a check you could not complete? ||| Report it on your role's checklist and specify the reason (Hawk-Eye Innovations, 2026f).

:::reveal About when does the Firenze technician monitor the system during the referees' test? ||| About two hours before the match (Hawk-Eye Innovations, 2026e).

:::reveal What does the NFL's 60-minute medical meeting do with communication equipment? ||| It tests it, along with reviewing protocols and verifying equipment locations (NFL, n.d.-f).

## Sources
- ${HE_RUTGERS} Locator: "Key Responsibilities".
- ${HE_UK_EOI} Locator: "What You Can Expect to Be Doing".
- ${HE_BOLZANO} Locator: "Key Responsibilities".
- ${HE_FIRENZE} Locator: "Key Responsibilities," items 5 to 7.
- ${IFAB_2026} Locator: Law 1, "Requirements and specifications of GLT," p. 52.
- ${NFL_AMGC} Locator: "Gameday at AMGC" paragraph 2.
- ${HE_SEC_COORD} Locator: "Key Responsibilities" and "What to Be Prepared For"; the publish and deadline dates.
- ${NFL_PREP} Locator: "60-Minute Medical Meeting".
- ${NFL_HNS_2024} Locator: p. 6 (meeting location); p. 7 (Medical Time-Out review).
- ${BOC_2021} Locator: paragraphs 2 and 4.
- ${NFL_IVR} Locator: "Summary".
- ${WR_BEFORE} Locator: paragraph 1.`,
    },
    {
      slug: "during-and-after-the-game",
      title: "15 · During the game and after it",
      section: "4 · The game day, hour by hour",
      recallContent: [
        {
          prompt: "What does Hawk-Eye's SEC coordinator verify for every assigned event?",
          answer: "System readiness, against pre-game, in-game and post-game checklists (Hawk-Eye Innovations, 2026g).",
        },
        {
          prompt: "At the NFL's 60-minute medical meeting, who reviews the Medical Time-Out procedures with the officials?",
          answer: "The booth AT spotters (NFL Head, Neck and Spine Committee, 2024, p. 7).",
        },
      ],
      body: `${QR}

**During the game: monitor.** The postings agree on the core duty: "Monitoring and maintaining the technology during the games" (Hawk-Eye Innovations, n.d.-f) and "Monitoring the systems during the match" (Hawk-Eye Innovations, n.d.-g). The UK roles also involve "Liaising with stadium staff, match officials and host broadcasters on-site" (Hawk-Eye Innovations, n.d.-g), and the Big Ten technician coordinates "with officials, broadcasters and Hawk-Eye staff, both on-site and remotely" (Hawk-Eye Innovations, n.d.-f).

**During the game: the medical booth.** The NFL operator posting says operators keep the Injury Video Review System "functional on game day" and support "the AT Spotters, Booth Unaffiliated Neurotrauma Consultant (UNC) and team medical personnel as it relates to reviewing injury video" (NFL, 2026b). Lesson 5 covered what that support is and is not. One line in the posting names the discipline the job takes: operators "Must be able to focus on the task at hand, not the game" (NFL, 2026b).

**The remote desk.** The SEC coordinator is "the first level of resolution for operational software issues and challenges before escalating to the Tech Ops engineering teams" (Hawk-Eye Innovations, 2026g). The posting is frank that there is no "typical day in the life": the schedule shifts "between fast-paced live event support on game days and structured project collaboration mid-week" (Hawk-Eye Innovations, 2026g). Hawk-Eye also says its goal-line technology can run with "24/7 remote monitoring" from a Remote Operations Centre (Michaelides, 2026). For a method of finding a fault, see CREW-00 lesson "28 · Test, then find the fault".

**When something fails.** Each rulebook in section 3 has a fallback. Knowing them helps you judge how urgent a fault is.

| Rule | Fallback |
|---|---|
| NFL Rule 15-8 | If the link to the League office is lost, the Referee waits one minute, then reviews with the Replay Official (NFL, 2026a) |
| Law 1, goal-line technology | If the pre-match test fails, the referee must not use the system and must report it (IFAB, 2026, p. 52) |
| FIFA's semi-automated offside | If it fails, VARs use crosshairs and triangulation (FIFA, n.d.-b) |
| World Rugby's HIA | If the video fails, the protocol may still be used; a missing side-line video link is a review-panel threshold (World Rugby, n.d.-e; World Rugby, 2022, p. 30) |

Reasoned: a fallback keeps the game going, but it is slower or rougher than the system, and in rugby the failure itself is reviewed. The technician's job is to make the fallback unnecessary, and to report it when it was used.

**After the final whistle.** The postings list the closing work:

- Upload "all the data requested by EPTS Remote Support," then help with "disassembly activities" (Hawk-Eye Innovations, 2026e).
- Fill in "your sections in the match report" (Hawk-Eye Innovations, 2026f).
- "Submit game reports through the Game Management System at the conclusion of each game," and be "Responsible for accurately reporting working hours in timekeeping system" (NFL, 2026b).

At the league level, AMGC staff "'tag' every play so they can be searched later in a database" (NFL, n.d.-b). The booth's medical reports are filed by the spotters and the booth UNC, not by the video crew (lesson 6).

**Going home.** The NFL posting gives "Approximately 8-9 hours per game (arrive 4 hours before kickoff, leave approximately 45 minutes" to 1 hour "after end of game)" (NFL, 2026b). The Firenze technician's day ends "up to 1 hour post game completion," and the Bolzano video technician's "up to 2 hours post-game completion" (Hawk-Eye Innovations, 2026e, 2026f).

**Between games.** The Big Ten posting adds "Periodic work during the off-season for building and maintaining our hardware and equipment" (Hawk-Eye Innovations, n.d.-f). The NFL posting says operators "Must be able to troubleshoot issues on non-game days in some circumstances" (NFL, 2026b).

**The whole day on one page.** Assembled from lessons 13 to 15; each line comes from the sources named there, and no single job does all of it.

| When | What happens | From |
|---|---|---|
| A week or more before | Report scheduling conflicts | NFL operator posting |
| The day before | Setup on site ("Game Day minus 1") | Big Ten and Italy postings |
| 7 to 4 hours before | Arrival, by role | Italy and NFL postings |
| Setup | Cameras, cable, fiber, Dante comms, the referee review area, video signals | UK, Italy and Big Ten postings |
| 3 and 2 hours before | NFL medical radios handed out | NFL game-prep page |
| About 2 hours before | The referees' test of goal-line technology | Firenze posting; Law 1 |
| 60 minutes before | NFL medical meeting tests communication equipment | NFL game-prep page |
| During | Monitor; support the medical booth; call the remote desk | All postings |
| After | Upload data, reports, hours, dismantle | Italy and NFL postings |
| Off-season | Build and maintain hardware | Big Ten posting |

**Not the same system.** The Big Ten posting's "SMART replay & medical systems" and the NFL's injury video review system both serve medical staff, but no source read for this course links them, so this course does not treat them as the same system.

:::reveal What does the SEC coordinator do before escalating to the engineering teams? ||| Acts as the first level of resolution for operational software issues (Hawk-Eye Innovations, 2026g).

:::reveal Through what system does the NFL operator submit game reports? ||| The Game Management System, at the end of each game (NFL, 2026b).

:::reveal About how long is an NFL injury video review operator's game day, as posted? ||| Approximately 8 to 9 hours (NFL, 2026b).

## Sources
- ${HE_RUTGERS} Locator: "Key Responsibilities"; the off-season line.
- ${HE_UK_EOI} Locator: "What You Can Expect to Be Doing".
- ${NFL_IVR} Locator: "Summary"; "Responsibilities"; "Qualifications"; "Physical Demands/Travel".
- ${HE_SEC_COORD} Locator: "First-Line Issue Resolution" and "What to Be Prepared For".
- ${MICHAELIDES_2026} Locator: "Sustainable & Hybrid Operations".
- ${NFL_RULES} Locator: Rule 15-8, PDF p. 71.
- ${IFAB_2026} Locator: Law 1, p. 52.
- ${FIFA_SAOT} Locator: FAQ on system failure.
- ${WR_VIDEO} Locator: paragraph 4.
- ${WR_2022} Locator: p. 30, threshold 2.
- ${HE_FIRENZE} Locator: "Key Responsibilities," item 9; "Working day expectations".
- ${HE_BOLZANO} Locator: "Key Responsibilities"; "Working day expectations".
- ${NFL_AMGC} Locator: "After the Games".`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The game day, hour by hour",
      section: "4 · The game day, hour by hour",
      body: "A graded check on the technician's game day, from the week before to the off-season, as the postings and league pages describe it. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "Where does section 4 get its game-day steps?", options: ["Vendor operator manuals", "Interviews with referees", "Job postings and league pages", "Broadcast rundown sheets"], correctIndex: 2, explanation: "Lesson 13: the day is assembled from job postings and league pages, each named where it is used.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Why does no single job do every step in section 4's game day?", options: ["Each step is a separate union job", "Leagues forbid one person doing all", "Vendors split the day by the hour", "Steps come from different employers"], correctIndex: 3, explanation: "Different employers and sports are combined to show the shape of the day.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Why does section 4 leave out \"synchronizing the medical monitors\"?", options: ["No posting or league page supports it", "The NFL forbids anyone teaching it", "It is a decision for the physician", "It happens only at rugby matches"], correctIndex: 0, explanation: "No posting or league page read for the course supports that step, so it is left out.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Where does tagging video at the spotter's direction come from, if not a posting?", options: ["Hawk-Eye's Big Ten posting", "The NFL's AT spotters page", "World Rugby's HIA protocol", "The NCAA concussion checklist"], correctIndex: 1, explanation: "NFL (n.d.-e), the AT spotters page: the spotter \"tells the technician to tag and label the video\" (lesson 5).", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "How far ahead must NFL operators report scheduling conflicts?", options: ["At least one day", "At least one month", "At least one week", "At least one season"], correctIndex: 2, explanation: "NFL (2026b): \"at least one (1) week prior to game day.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "To which NFL department do operators report scheduling conflicts?", options: ["Football Operations staff", "The NFL Media studios", "Each club's business office", "Player Health and Safety"], correctIndex: 3, explanation: "NFL (2026b): \"the League's Player Health and Safety department.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What working hours does the Big Ten posting give?", options: ["Game Day minus 1 and Game Day", "Game Day only, from noon", "The whole week before games", "Weekdays only, nine to five"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-f): \"Game Day minus 1 and Game Day,\" with hours that vary by sport.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What do the Italy postings say setup days may require?", options: ["A second technician from the UK", "Presence on the day before the match", "Overnight stays in the stadium", "A remote center shift instead"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026e, 2026f): setup days \"may require the assistants to be present on the day/s before match day.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "How early may the Bolzano video technician arrive, as posted?", options: ["Up to 2 hours before kickoff", "Exactly 1 hour before kickoff", "Up to 7 hours before kickoff", "Up to 12 hours before kickoff"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026f): \"up to 7 hours pre-Kick Off.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "How early may the Firenze tracking technician arrive, as posted?", options: ["Up to 7 hours before kickoff", "Up to 3 hours before kickoff", "Up to 10 hours before kickoff", "Up to 6 hours before kickoff"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026e): \"up to 6 hours pre-Kick Off.\" Seven hours is the Bolzano video technician.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "How early does the NFL posting say the injury video operator arrives?", options: ["Four hours before kickoff", "Two hours before kickoff", "Seven hours before kickoff", "One hour before kickoff"], correctIndex: 0, explanation: "NFL (2026b): \"Arrive at the stadium four (4) hours prior to kickoff.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "When do all NFL local game day assistants arrive, per the NFL's game-prep page?", options: ["2 hours before kickoff", "4 hours before kickoff", "1 day before kickoff", "30 minutes before kickoff"], correctIndex: 1, explanation: "NFL (n.d.-f): all local game day assistants arrive 4 hours before kickoff.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What do Hawk-Eye's UK roles say setup can involve?", options: ["Writing the match officials' reports", "Selling the tickets at the main gate", "Rigging cameras and running cables", "Training the match officials on Laws"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-g): \"physically demanding work, such as rigging cameras and running cables.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What is the Firenze tracking technician's first listed duty?", options: ["Calibrate the goal-line system's cameras", "Hand radios to the visiting medical staff", "Write the match report for the referee", "Check fiber links to all the stadium switches"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026e), item 1: \"Check that there is a fibre connection with all the switches in the stadium rooms.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Over what does the Firenze technician test communication with the replay operators?", options: ["Dante", "Wi-Fi", "Bluetooth", "Cellular"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026e): \"communication via Dante.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "With whom does the Firenze technician test Dante communication?", options: ["The broadcast director and producer", "Replay operators and the Remote Centre", "The home club's coaches and captain", "The stadium's security and stewards"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026e): the Replay Operator, Assistant Replay Operator, Video Technical Guarantee onsite and Technical Guarantee at the Remote Centre.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What does the Bolzano video technician install on the sidelines?", options: ["Tracking cameras under the roof", "Goal-line cameras in the nets", "Audio and the Referee Review Area", "Wi-Fi for the team benches"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026f): \"Installation of the audio and Referee Review Area (RRA) system on the sidelines.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What does the Bolzano technician connect to the Remote Center?", options: ["The referee's smartwatch", "The stadium's scoreboard", "The home club's office", "The van or the Control Room"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026f): connecting \"the van or the Control Room with the Remote Center.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Where does the Bolzano technician take video signals from?", options: ["The control of all field cameras", "The broadcaster's final program", "The stadium's security system", "The fans' phones in the stands"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026f): \"the video signals from the control medium of all the cameras that frame the field.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What does the Netherlands posting say about Hawk-Eye staff at the stadium?", options: ["You will lead a team of five", "You will be the only one there", "You will work beside the VAR", "You will share with a trainee"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026d): \"you will be the only Hawk-Eye employee at the stadium.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "By lesson 13's reasoning, why do the remote center and checklists matter on a solo day?", options: ["The league pays more for paperwork", "The remote center runs the cameras", "No colleague on site checks your work", "Solo workers may skip the checks"], correctIndex: 2, explanation: "Reasoned in lesson 13: with no colleague on site, the remote center and the checklists are how work gets checked.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What does the G League posting ask the representative to verify?", options: ["The arena's ticket scanners each game", "The referee's pay and travel claims", "The broadcast truck's graphics feed", "Placements and function of vendor cameras"], correctIndex: 3, explanation: "NBA (2026): \"Verify physical placements and functionality of cameras managed by technology vendors.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Where does the G League posting say all data must flow?", options: ["To NBA storage locations", "To the home team's servers", "To the broadcast truck", "To the referee's tablet"], correctIndex: 0, explanation: "NBA (2026): \"Ensure all data is captured and flows to NBA storage locations.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "At 3 hours before kickoff, what does the NFL operator hand the visiting athletic training staff?", options: ["A tablet with the injury video", "A case of fully charged radios", "A copy of the medical protocol", "A list of the booth's camera angles"], correctIndex: 1, explanation: "NFL (n.d.-f): \"a case containing fully charged radios.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Where does the 3-hour radio handoff take place?", options: ["At the spotters' booth above the field", "At the league's command center in NY", "At the visiting locker room entrance", "At the home team's bench on the field"], correctIndex: 2, explanation: "NFL (n.d.-f): \"at the entrance to the visiting locker room.\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "At 2 hours before kickoff, to whom do operators distribute radios?", options: ["Both teams' coaches and captains", "The referee and the chain crew", "The broadcast crew in the truck", "UNCs, physicians and AT spotters"], correctIndex: 3, explanation: "NFL (n.d.-f): the UNCs, airway management physician, emergency response physician and AT spotters.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What audio equipment does the NFL operator posting name?", options: ["Headsets and belt packs", "Wireless lavalier mics", "Studio monitor speakers", "Shotgun microphones"], correctIndex: 0, explanation: "NFL (2026b): \"Audio equipment (headsets and belt packs).\"", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Does CREW-00 lesson 17 cover two-way radios?", options: ["Yes, it covers them in full", "No, only wired intercom beltpacks", "Yes, with a licensing guide", "No, it covers only fiber optics"], correctIndex: 1, explanation: "Lesson 13: CREW-00's lesson 17 covers wired intercom beltpacks; it does not cover two-way radios.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "By lesson 13's reasoning, when is charging the medical radios done?", options: ["During the first quarter", "At the 60-minute meeting", "Before the 3-hour handoff", "After the final whistle"], correctIndex: 2, explanation: "The case goes out \"fully charged\" at 3 hours, so charging is done before that handoff.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "What does a posting tell you, as section 4 uses it?", options: ["What every employer pays in the market", "What the league's union contract says", "What a vendor's screens look like", "What one employer asked on one date"], correctIndex: 3, explanation: "Lesson 13: a posting is a primary source for what one employer asked on the date it was posted.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "Which posting is a G League twin of the one CREW-05 lesson 5 teaches?", options: ["The Van Andel Arena posting", "The Rutgers Big Ten posting", "The Bolzano video posting", "The Netherlands operator posting"], correctIndex: 0, explanation: "NBA (2026), Van Andel Arena, read October 26, 2026; CREW-05 teaches a twin at another arena.", sourceLessonSlug: "arrival-and-setup" },
          { prompt: "How do the Big Ten and UK postings say pre-game checks are done?", options: ["However the technician sees fit that day", "In accordance with standard procedures", "Only when the referee asks for them", "Only after the broadcast truck is ready"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-f, n.d.-g): checks \"in accordance with standard procedures.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Why does lesson 14 not teach the check procedures themselves?", options: ["They change with every single game", "They are the referee's to write", "They are the vendor's and not public", "They are too short to be useful"], correctIndex: 2, explanation: "The procedures are the vendor's own and are not public.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What does the Bolzano posting say to do with a check you could not complete?", options: ["Leave it off the checklist", "Finish it after the match", "Ask a fan to help with it", "Report it with the reason"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026f): \"reporting any uncompleted checks and specifying the reason.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "By lesson 14's reasoning, why write down a skipped check with its reason?", options: ["The next reader knows what was not done", "The league pays per completed check", "It lets the technician leave earlier", "Vendors fine anyone who skips a check"], correctIndex: 0, explanation: "Reasoned: the next reader, on site or remote, knows exactly what was not done and why.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What must the Firenze technician follow to calibrate goal-line technology?", options: ["The broadcast rundown", "The relevant checklist", "The referee's notebook", "The club's match program"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026e): \"following the relevant checklist.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What do the Firenze calibration tests check?", options: ["Crowd size and noise", "Ticket sales and gates", "Reliability and precision", "Weather and pitch length"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026e): tests \"to test its reliability and precision.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Which cameras does the Firenze technician color-match?", options: ["The stadium's security cameras", "The broadcaster's handheld cameras", "The fans' big-screen cameras", "The goal-line Ultra Motion cameras"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026e): the colorimetry of the goal-line Ultra Motion cameras.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "To what does the Firenze technician match the goal-line cameras' color?", options: ["The broadcast cameras", "The referee's kit", "The stadium lights", "The club's colors"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026e): \"as similar as possible to the broadcast cameras.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "By lesson 14's reasoning, what is one likely reason for the color match?", options: ["The referee prefers warmer colors", "Goal-line and broadcast angles look alike", "Color matching speeds up the tracking", "The league fines mismatched colors"], correctIndex: 1, explanation: "Reasoned: a goal-line angle shown beside a broadcast angle should look like the same match.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "About when is the referees' test of goal-line technology, per the Firenze posting?", options: ["About ten minutes before", "On the night before the match", "About two hours before", "At half-time, between halves"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026e): \"approximately two hours before the match.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Whose test does the Laws' goal-line requirement describe before each match?", options: ["The vendor's", "The club's", "FIFA's", "The referee's"], correctIndex: 3, explanation: "IFAB (2026, p. 52): \"the referee must test the technology's functionality before the match.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What is the technician's job during the referees' test, per lesson 14?", options: ["Have it ready and watch it", "Run the test for the referee", "Skip it if the system is fine", "Sign off on the referee's behalf"], correctIndex: 0, explanation: "Lesson 14: have the system ready, and watch it while the referee tests.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What do NFL replay center staff confirm before games begin?", options: ["Every player's tracking tag is charged", "They can reach officials and see video", "The chain crew is set at each stadium", "Each broadcast has loaded its graphics"], correctIndex: 1, explanation: "NFL (n.d.-b): staff check \"they can communicate with officials at each stadium and see video of every game.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "As posted, when was the SEC coordinator posting published, and when did applications close?", options: ["Published Apr 15, deadline Apr 24, 2026", "Published Sep 2, deadline Dec 16, 2026", "Published Oct 16, deadline Oct 30, 2026", "Published Oct 19, deadline Oct 22, 2026"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026g): published October 16, 2026; deadline to apply October 30, 2026.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What does the SEC coordinator verify for every assigned event?", options: ["Ticket sales", "Player health", "Referee pay", "System readiness"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026g): \"Verify system readiness for every assigned sporting event.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Which checklists does the SEC coordinator work from?", options: ["Pre-game, in-game and post-game", "Only the post-game checklist", "Only the referees' checklist", "The broadcaster's rundown only"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026g): events must be \"operationally sound from pre-game, in-game, and post-game checklists.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Whose main point of contact is the SEC coordinator when remote help is needed?", options: ["The SEC's fans", "On-site personnel", "The TV audience", "The team doctors"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026g): \"the main point of contact for on-site personnel if remote assistance is required.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Where does a venue technician's SEC checklist have a reader, per lesson 14?", options: ["In Basingstoke, UK", "In New York City", "In Birmingham, Alabama", "In Toronto, Canada"], correctIndex: 2, explanation: "The SEC coordinator works on site in Birmingham, Alabama (Hawk-Eye Innovations, 2026g).", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "How long before kickoff is the NFL medical meeting?", options: ["3 hours", "15 minutes", "2 hours", "60 minutes"], correctIndex: 3, explanation: "NFL (n.d.-f): the 60-Minute Medical Meeting.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Which of these attends the NFL's 60-minute medical meeting?", options: ["The referee", "The head coach", "The team owner", "The TV producer"], correctIndex: 0, explanation: "NFL (n.d.-f): physicians, athletic trainers, spotters, UNCs, paramedics, the Football Operations representative and the referee.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What does the 60-minute meeting do besides reviewing protocols?", options: ["Sets the betting lines for the game", "Verifies equipment and tests comms", "Chooses the broadcast camera plan", "Assigns parking for medical staff"], correctIndex: 1, explanation: "NFL (n.d.-f): it verifies equipment locations and tests communication equipment.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Who reviews the Medical Time-Out procedures with officials at the meeting?", options: ["The video operators", "The head coaches", "The booth spotters", "The team captains"], correctIndex: 2, explanation: "NFL Head, Neck and Spine Committee (2024, p. 7): the booth spotters review the Medical Time-Out procedures with officials.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Where does the 2024 protocol place the 60-minute meeting?", options: ["In the spotters' booth", "On the fifty-yard line", "In the broadcast truck", "In the referees' locker room"], correctIndex: 3, explanation: "NFL Head, Neck and Spine Committee (2024, p. 6): \"in the referees' locker room.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Where does the NFL game-prep page place the meeting, against the protocol?", options: ["Outside the officials' locker room", "Inside the broadcast truck", "At the league office in NY", "On the visiting team's bench"], correctIndex: 0, explanation: "NFL (n.d.-f) puts it outside the officials' locker room; the protocol says inside. The two documents differ.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "By lesson 14's reasoning, why must the radios work before the 60-minute meeting?", options: ["The radios are collected then", "The meeting relies on them", "The meeting assigns new radios", "Officials test them at kickoff"], correctIndex: 1, explanation: "Reasoned: the radios handed out at 3 and 2 hours are among the communication equipment the meeting relies on.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Who published the 2021 account by an NFL AT spotter?", options: ["The NFL Players Association", "The NCAA Sport Science Institute", "The Board of Certification", "World Rugby's medical team"], correctIndex: 2, explanation: "BOC (2021), the Board of Certification for the Athletic Trainer.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "How did that spotter describe the game-day team?", options: ["Three spotters and a broadcast crew", "One spotter, one coach and a medic", "Four spotters and two replay referees", "Two spotters, video and IT technicians"], correctIndex: 3, explanation: "BOC (2021): \"two spotters, video and IT technicians.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "How early did that spotter say the team arrives?", options: ["Four to five hours before kickoff", "One to two hours before kickoff", "The night before, every game", "Thirty minutes before kickoff"], correctIndex: 0, explanation: "BOC (2021): an arrival four to five hours before kickoff.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What did that spotter say is assigned to each spotter and video technician?", options: ["A camera position", "A home or away team", "A quarter of play", "A set of officials"], correctIndex: 1, explanation: "BOC (2021): home and away teams are assigned \"to each spotter and video technician.\"", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "Why does lesson 14 call the 2021 account one person's?", options: ["The NFL disputes everything in it", "It was written by a vendor's marketer", "It is a single practitioner's account", "It describes a college game instead"], correctIndex: 2, explanation: "It is one practitioner's account, published by the certifying body; it matches the posting's one operator per team.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "In rugby, what does the home team hand the MDD at the pre-match medical meeting?", options: ["The match video on a drive", "The referee's earpiece set", "The team sheet and kit list", "The tablet for mouthguard data"], correctIndex: 3, explanation: "World Rugby (n.d.-b): a Prevent iPad or iPhone for mouthguard data, sometimes with a Bluetooth device.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "By lesson 14, when must the rugby tablet's Bluetooth device be paired and charged?", options: ["Before the meeting", "During the match", "At half-time", "After the match"], correctIndex: 0, explanation: "Lesson 14: it has to be ready before the pre-match meeting, not during it.", sourceLessonSlug: "checks-calibration-and-meetings" },
          { prompt: "What core duty during the game do the Big Ten and UK postings share?", options: ["Calling the medical timeout", "Monitoring the systems", "Choosing the replay angles", "Talking to the broadcast"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-f, n.d.-g): monitoring and maintaining the technology during the game.", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "With whom do the UK roles liaise on site?", options: ["Ticket agents, ushers and caterers", "Players, coaches and team doctors", "Stadium staff, officials, broadcasters", "Fans, sponsors and the visiting press"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-g): \"stadium staff, match officials and host broadcasters on-site.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "With whom does the Big Ten technician coordinate?", options: ["Team doctors, trainers and the coaches", "Ticketing, parking and stadium security", "Players, captains and the marching band", "Officials, broadcasters and Hawk-Eye staff"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-f): \"officials, broadcasters and Hawk-Eye staff, both on-site and remotely.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What does the NFL posting say operators keep functional on game day?", options: ["The Injury Video Review System", "The coaches' sideline headsets", "The chain crew's down markers", "The stadium's main scoreboard"], correctIndex: 0, explanation: "NFL (2026b): the operator ensures the Injury Video Review System \"is functional on game day.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "Whom does the NFL operator support in reviewing injury video?", options: ["Head coaches and their video staff", "AT spotters, booth UNC and medical staff", "Referees and the replay official", "Broadcasters and their producers"], correctIndex: 1, explanation: "NFL (2026b): \"the AT Spotters, Booth Unaffiliated Neurotrauma Consultant (UNC) and team medical personnel.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What does the NFL posting say operators must focus on?", options: ["The game, not the task at hand", "The broadcast, not the booth", "The task at hand, not the game", "The crowd, not the field"], correctIndex: 2, explanation: "NFL (2026b): \"Must be able to focus on the task at hand, not the game.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What is the SEC coordinator before engineering is called in?", options: ["The final level of approval", "The on-site camera operator", "The league's replay official", "The first level of resolution"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026g): \"the first level of resolution for operational software issues.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "To whom does the SEC coordinator escalate?", options: ["The Tech Ops engineering teams", "The SEC commissioner's office", "The home team's coaching staff", "The broadcast network's producer"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026g): \"before escalating to the Tech Ops engineering teams.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What does the SEC posting say about a typical day?", options: ["Every day is the same", "There is no typical day", "Days end by 5 p.m.", "Days start at noon"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026g): there is no \"typical day in the life.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "How does the SEC posting describe the week?", options: ["Projects on game days, live support mid-week", "Only office work, with no game days at all", "Live support on game days, projects mid-week", "Travel on game days and rest in mid-week"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026g): \"between fast-paced live event support on game days and structured project collaboration mid-week.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What does Hawk-Eye say its goal-line technology can run with from a Remote Operations Centre?", options: ["Weekly site inspections", "A referee on call", "A backup chain crew", "24/7 remote monitoring"], correctIndex: 3, explanation: "Michaelides (2026): \"24/7 remote monitoring.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "Under NFL Rule 15-8, how long does the Referee wait after losing the League link?", options: ["One minute", "Five minutes", "Ten seconds", "Two minutes"], correctIndex: 0, explanation: "NFL (2026a, Rule 15-8): one minute, then a review with the Replay Official.", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "If goal-line technology fails its pre-match test, what must the referee do?", options: ["Use it, and report it", "Not use it, and report it", "Delay the match an hour", "Replace it with a camera"], correctIndex: 1, explanation: "IFAB (2026, p. 52): \"the referee must not use the GLT system and must report this.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What do VARs use if FIFA's semi-automated offside fails?", options: ["The broadcast's graphics", "The assistant's flag alone", "Crosshairs and triangulation", "A second tracking system"], correctIndex: 2, explanation: "FIFA (n.d.-b): \"crosshairs and triangulation.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "In World Rugby's HIA, what is a missing side-line video link?", options: ["A reason to end the match", "A matter for the referee", "A normal part of a match", "A review-panel threshold"], correctIndex: 3, explanation: "World Rugby (2022, p. 30): a failure in the delivery of video viewing is one of the thresholds for the HIA Review Panel.", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "By lesson 15's reasoning, what is a fallback?", options: ["Slower or rougher, but it keeps play going", "Faster and more accurate than the system", "A rule that stops the game for the day", "A way to skip all of the pre-game checks"], correctIndex: 0, explanation: "Reasoned: a fallback keeps the game going but is slower or rougher than the system.", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "By lesson 15's reasoning, what is the technician's job about fallbacks?", options: ["Use them as often as is possible", "Make them unnecessary; report their use", "Hide every use of them from officials", "Choose which one the referee will use"], correctIndex: 1, explanation: "Lesson 15: make the fallback unnecessary, and report it when it was used.", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What does the Firenze technician upload after the match?", options: ["The full broadcast feed to the club", "Player medical files to the league", "Data requested by EPTS Remote Support", "Highlight clips to social media pages"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026e): \"all the data requested by EPTS Remote Support.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What does the Firenze technician help with after uploading?", options: ["Ticket refunds", "Pitch watering", "Press interviews", "Disassembly"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026e): \"disassembly activities.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What does the Bolzano technician fill in after the match?", options: ["Their sections of the match report", "The referee's disciplinary report", "The home club's injury report form", "The broadcaster's running order"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026f): \"your sections in the match report.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "Through what system does the NFL operator submit game reports?", options: ["The Next Gen Stats portal", "The Game Management System", "The league's ticketing app", "The club's scouting database"], correctIndex: 1, explanation: "NFL (2026b): \"Submit game reports through the Game Management System at the conclusion of each game.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What else does the NFL posting make operators responsible for reporting?", options: ["Injuries, in a medical database", "Penalties, in the officials' log", "Working hours, in a timekeeping system", "Ratings, in the broadcast system"], correctIndex: 2, explanation: "NFL (2026b): \"Responsible for accurately reporting working hours in timekeeping system.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "Who files the NFL booth's medical reports?", options: ["The video operators", "The broadcast producer", "The replay official", "The spotters and booth UNC"], correctIndex: 3, explanation: "Lesson 6: booth spotters and booth UNCs file the reports, not the video crew (NFL Head, Neck and Spine Committee, 2024).", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "About how long is an NFL operator's game day, as posted?", options: ["8 to 9 hours", "4 to 5 hours", "12 to 14 hours", "2 to 3 hours"], correctIndex: 0, explanation: "NFL (2026b): \"Approximately 8-9 hours per game.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "When does the NFL operator leave, as posted?", options: ["Right at the final whistle, with the crowd", "About 45 minutes to an hour after the game", "About four hours after the game has ended", "At halftime, once the radios are checked"], correctIndex: 1, explanation: "NFL (2026b): leave \"approximately 45 minutes\" to 1 hour \"after end of game.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "Up to how long after the match does the Bolzano video technician's day run?", options: ["Up to 1 hour", "Up to 6 hours", "Up to 2 hours", "Up to 15 minutes"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026f): \"up to 2 hours post-game completion.\" Firenze's is up to 1 hour.", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What off-season work does the Big Ten posting mention?", options: ["Scouting players for next season", "Selling season tickets to fans", "Training new referees each week", "Building and maintaining hardware"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-f): \"Periodic work during the off-season for building and maintaining our hardware and equipment.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What does the NFL posting say about non-game days?", options: ["Some troubleshooting may be needed", "No work is ever needed then", "Operators must attend practices", "Operators run the team's video"], correctIndex: 0, explanation: "NFL (2026b): \"Must be able to troubleshoot issues on non-game days in some circumstances.\"", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "On lesson 15's one-page day, what happens about 2 hours before kickoff?", options: ["The final whistle and teardown", "The referees' goal-line test", "The day-before setup on site", "The medical radio collection"], correctIndex: 1, explanation: "The referees' test of goal-line technology, about two hours before (Hawk-Eye Innovations, 2026e; IFAB, 2026).", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "Why does lesson 15 not treat the Big Ten medical system as the NFL's system?", options: ["The Big Ten uses no video", "The NFL bans that comparison", "No source read links the two", "They are made by one vendor"], correctIndex: 2, explanation: "Both serve medical staff, but no source read for the course links them.", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "On lesson 15's one-page day, when are the NFL medical radios handed out?", options: ["On the day before", "At 60 minutes before", "During the first half", "3 and 2 hours before"], correctIndex: 3, explanation: "NFL (n.d.-f): at 3 hours (visiting athletic training staff) and 2 hours (UNCs, physicians, spotters).", sourceLessonSlug: "during-and-after-the-game" },
          { prompt: "What do AMGC staff do with plays after the games?", options: ["Tag them for later search", "Delete them at midnight", "Send them to the clubs", "Air them on NFL Network"], correctIndex: 0, explanation: "NFL (n.d.-b): staff \"'tag' every play so they can be searched later in a database.\"", sourceLessonSlug: "during-and-after-the-game" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5: The jobs and the ladder
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "four-us-roles-as-posted",
      title: "16 · Four US roles, as posted",
      section: "5 · The jobs and the ladder",
      recallContent: [
        {
          prompt: "Under NFL Rule 15-8, what happens if the link to the League office is lost?",
          answer: "The Referee waits one minute, then reviews with the Replay Official (NFL, 2026a).",
        },
        {
          prompt: "What does the SEC coordinator do before escalating to the Tech Ops engineering teams?",
          answer: "Acts as \"the first level of resolution for operational software issues\" (Hawk-Eye Innovations, 2026g).",
        },
      ],
      body: `${QR}

**How to read this section.** A job posting is a primary source for what one employer asked on the date it was posted. It is not a survey of the trade. So every pay figure in this section is written "as posted," with its date, and none of them is a going rate. Postings close and change, and each one below may be gone by the time you read this. Section 6 shows where to look for the current ones.

**Medical jobs are hired by their own rules.** Lesson 5 named them. The NFL's booth spotter must hold Board of Certification (BOC) athletic trainer certification and a state license or registration where required, with at least 10 years as an athletic trainer (NFL, n.d.-e). The Unaffiliated Neurotrauma Consultants (UNCs) are physicians (NFL, 2022b). The four roles below are the technical crew those people rely on. Their postings ask for technical skills, quoted below, and lesson 8 placed the injury video operator in the non-medical tier.

**1. Injury video review operator, NFL.** The copy read for this course is the New Orleans Saints posting on SHRM HireVets, a site that carried it; its page data gives a created date of April 15, 2026, and it was read on October 26, 2026 (NFL, 2026b).

| Item | As posted |
|---|---|
| Games | "all preseason, regular season, and postseason home games," and "flexed" games |
| Hours | About 8 to 9 per game |
| Skills | Touch typing, "minimum 40 words per minute"; Windows 10; Wi-Fi setup and troubleshooting; "Audio equipment (headsets and belt packs)"; "Audio and video path troubleshooting and testing," for which "training will be provided" |
| Physical | Lift "up to 30 pounds"; sit for long periods |
| Training | "Must attend periodic video conference meetings and in-person training seminar(s) at the NFL's request" |
| Location | "requires onsite presence at an NFL office or stadium location"; "NO RELOCATION ASSISTANCE WILL BE PROVIDED" |
| Eligibility | "Candidate may not be a full-time, part-time, or game day employee of any NFL team" |
| Employment type | Not stated (lesson 21) |
| Pay | $38 at both ends of the range, in USD, with no unit |

**The $38, read carefully.** The salary line gives $38 as the low and the high end, in US dollars, and never says per hour, per game or per year (NFL, 2026b). So this course does not write "$38 an hour." Here is a reading, with its reasons. The NFL's pay text on its own seasonal postings speaks of "salaries or hourly rates" (NFL, 2026d), so the league posts both kinds. And $38 for a whole game day of 8 to 9 hours would come to under $5 an hour, while $38 a year is not a wage at all. Hourly is therefore the likely unit, but it is a reading, not the posting's word, and the posting's unit is still unconfirmed.

**2. College sports systems technician, Hawk-Eye, Big Ten.** The Rutgers University posting was read in a saved startup.jobs copy marked "no longer available" (Hawk-Eye Innovations, n.d.-f).

| Item | As posted |
|---|---|
| Terms | "Part Time (contractor)"; "a temporary role"; employed through "a third-party managed service provider" |
| Days | "Game Day minus 1 and Game Day"; "commit to all of the home games for the season"; weekends and federal holidays |
| Skills | "Ideally a broadcast/engineering background with an understanding of signal flow"; "Strong technical grounding"; troubleshooting |
| Pay | "starting at $28 per hour" |

Read the terms row before the pay row. The employer of record was the staffing provider, so this is not "Hawk-Eye pays technicians $28 an hour." It was one provider's offer, for one season's work, at one school. The saved copy carries no publish or close date, so this course cannot say when it opened or closed.

**3. League technology representative, automated officiating, NBA G League.** The Van Andel Arena posting had a posting window of October 14 to October 31, 2026 (National Basketball Association [NBA], 2026).

| Item | As posted |
|---|---|
| Terms | "Project Employee"; a "temporary position," not to exceed 10 months; part time |
| Days | All shifts on site at the arena for the 2026-27 G League season, though its work option field says "Remote" |
| Skills | 1 to 3 years in broadcast technology, venue technology or technical operations; cabling, connectivity and basic IT; "work at heights"; preferred: calibration concepts, Linux and Python |
| Pay | "$200/Daily game rate" |

CREW-05 lesson "5 · The jobs behind the network" teaches a twin of this posting at another arena. It is here for the comparison of pay units in lesson 18.

**4. Live operations coordinator, Hawk-Eye, SEC.** Published October 16, 2026, with "Deadline to Apply October 30, 2026 at 7:00 PM EDT" (Hawk-Eye Innovations, 2026g). This course quotes it as a record of what the job asked, not as an open ad.

| Item | As posted |
|---|---|
| Terms | "Full time"; "On-site," Birmingham, Alabama, "Up to 5 days/week in the office" |
| Days | Game days plus mid-week projects; "long days over consecutive weekends and midweek evenings"; some travel |
| Skills | "A strong background in providing remote technical or operational support"; documentation; knowledge of college sports; desirable: "Prior experience within the broadcast A/V industry" |
| Sports | "Women's Soccer, Volleyball, Men's & Women's Basketball, Baseball, and Softball"; "The 2024-25 season marked our inaugural year partnering with the SEC" |
| Pay | $43,112 to $57,482 "base salary, plus bonus"; healthcare, paid vacation and "80 hours of accrued paid sick leave annually" |

This is an office job that supports venue technicians from a distance (lessons 14 and 15). It is not a work-from-home job: the posting says on site, up to five days a week.

:::reveal Why does this course not write "$38 an hour" for the NFL operator? ||| The posting gives $38 USD at both ends of its range with no unit. Hourly is a likely reading, not a stated fact.

:::reveal Who was the Rutgers technician's employer of record? ||| A third-party managed service provider, not Hawk-Eye directly (Hawk-Eye Innovations, n.d.-f).

:::reveal Is the SEC coordinator a work-from-home job? ||| No. The posting says "On-site" in Birmingham, Alabama, up to five days a week in the office; it supports venue technicians remotely.

## Sources
- ${NFL_AT_SPOTTERS} Locator: the requirements list.
- ${NFL_2022B} Locator: UNC paragraph.
- ${NFL_IVR} Locator: "Summary"; "Responsibilities"; "Qualifications"; "Physical Demands/Travel"; "Salary"; the page data's created date.
- ${NFL_FAST} Locator: "Salary / Pay Range" paragraph.
- ${HE_RUTGERS} Locator: "Working Hours"; "Key Responsibilities"; the requirements list; the pay and contractor lines; the "no longer available" banner.
- ${NBA_VAN_ANDEL} Locator: posting window; the requirements list; pay line; work option field.
- ${HE_SEC_COORD} Locator: "Role and Team Overview"; "Key Responsibilities"; "Salary & Benefits Disclosure"; the publish and deadline dates.`,
    },
    {
      slug: "casual-freelance-and-remote-roles",
      title: "17 · Casual, freelance and remote: the roles abroad",
      section: "5 · The jobs and the ladder",
      recallContent: [
        {
          prompt: "What eligibility rule does the NFL injury video review operator posting set?",
          answer: "The candidate \"may not be a full-time, part-time, or game day employee of any NFL team\" (NFL, 2026b).",
        },
        {
          prompt: "As posted on October 16, 2026, what was the SEC coordinator's pay?",
          answer: "$43,112 to $57,482 base salary, plus bonus (Hawk-Eye Innovations, 2026g).",
        },
      ],
      body: `${QR}

**Why look abroad.** On October 26, 2026, Hawk-Eye's public job board listed 25 postings, and the only one in the US was the SEC coordinator (Hawk-Eye Innovations, n.d.-i). The roles below, all read that day, are in Europe. They are worth reading even if you never apply, because they spell out the work, the terms and the pay unit more fully than the US postings in lesson 16.

**Hawk-Eye's posted roles, October 2026.**

| Role | Terms as posted | Schedule | Asks | Pay as posted | Published |
|---|---|---|---|---|---|
| Football tracking systems technician, Firenze | "Freelance, Casual" | Match day plus setup days, "mostly on the weekend with some midweek fixtures" | Preferred: "A technical background, ideally in IT or Broadcast"; "Experience working with VT/replay technology desirable"; English; a driving licence | "Starting from €130 daily rate, based on experience" | October 19, 2026 (2026e) |
| Football video systems technician, Bolzano | "Freelance" | As Firenze, with longer match days | English; work in a "high-pressure, procedural, live broadcast environment" | "Starting from €130 daily rate, based on experience" | October 22, 2026 (2026f) |
| Football systems operator, Netherlands | "Part-time (24 hrs per week), 6-Month Fixed-Term contract" | Weekends and midweek evenings, set by "the league's fixture list" and liable to "change at short notice" | A driving licence and "willingness to drive our vans"; "Fluent in Dutch and English" | Not posted | September 2, 2026 (2026d) |
| Sports technology analyst, Sofia Remote Operations Centre | "Contract: Consultant" | 8-hour shifts, "at least 4 days per week" | Data, video content, English | "80 EUR / shift" | October 20, 2026 (2026h) |
| Student placement: tennis systems operator 27/28 | "Full-Time, Fixed-Term - 12 Months" | "up to 220 days per year on tour away from home" | "Must be currently studying towards an undergraduate degree" | Not posted; travel, accommodation and a daily living allowance paid | October 15, 2026 (2026i) |

All five are Hawk-Eye Innovations postings, cited by the year and letter shown. The Netherlands operator is the posting that says "you will be the only Hawk-Eye employee at the stadium" (lesson 13).

**The standing form.** Hawk-Eye's careers page says: "We are always hiring for casual Football Systems Operators and other similar roles in the UK" (Hawk-Eye Innovations, n.d.-h). Its expression of interest names three casual roles: match day technicians, match operations assistants and systems operators, who "Must be available to work weekends and some midweek evenings." It lists as desirable "Networking," "Broadcast," "Live events," "Video routing knowledge," "Experience with Audio Over IP devices" and "Working with Fibre Optics" (Hawk-Eye Innovations, n.d.-g). The form posts no pay.

**Hawk-Eye in the US.** The careers page also says: "Join our growing business based in Atlanta and support the delivery of technology solutions to sports such as baseball and American football and Major League Soccer" (Hawk-Eye Innovations, n.d.-h). On October 26, 2026, no technician role for those sports was open on its board (Hawk-Eye Innovations, n.d.-i). Lesson 19 takes up what that means for timing.

**Other vendors' operators.** KINEXON, whose wearable tracking lesson 4 described, posted tracking operator roles in Germany in summer 2026. Its Hamburg handball posting, published August 4, 2026, gives about 6 hours per game and about 2 to 3 games a month. Its Munich football posting, published August 25, 2026, is worked in the company's Munich office, not at the stadium (KINEXON, 2026a, 2026b). Both postings are written in German, and this course's translations of them have not yet been checked by a German reader.

Catapult's product support technician in Wilmington, Massachusetts, published September 1, 2026, is office-based on a 24/7 support roster "including nights" and weekends. It prefers 1 to 2 years of technical support, PC or Mac troubleshooting and ticketing tools such as Salesforce and Zendesk, and posts "$48,300 to $72,450 per year" in total pay, base plus a target incentive (Catapult, 2026). Reasoned from those duties: it is a support desk for the product, not a seat at the game.

**Not replay: data operations.** Sportradar and Genius Sports hire operators too, but their duties are data work. Sportradar's part-time remote production operator assists scouts collecting live data and enters line-ups, on nights, weekends and some holidays, at "$15.75/hour" as released on July 20, 2026 (Sportradar, 2026a). Genius Sports' game operations analyst is "A fully remote hourly paid Service Provider position" (Genius Sports, 2026a). Use them to compare shift patterns, not as replay or injury video jobs.

**What the vendor postings share, reasoned.** Gather the asks from this lesson's table and the UK form and three come back: a technical background in IT or broadcast, English, and weekends and evenings set by a fixture list. Driving comes up for operators who move kit between grounds. That list is this course's gathering of the postings' words; no employer publishes it as one.

:::reveal As posted in October 2026, what did Hawk-Eye's Italy technicians start from, and in what unit? ||| €130, as a daily rate, "based on experience" (Hawk-Eye Innovations, 2026e, 2026f).

:::reveal What must an applicant be doing to take Hawk-Eye's tennis student placement? ||| Currently studying towards an undergraduate degree (Hawk-Eye Innovations, 2026i).

:::reveal Why are Sportradar's and Genius Sports' operator roles not replay jobs? ||| Their duties are data work: collecting, entering and checking live data, not replay or injury video.

## Sources
- ${HE_BOARD_API} Locator: the posting list, 25 postings and their locations, read October 26, 2026.
- ${HE_FIRENZE} Locator: employment type; "Working day expectations"; the requirements list; pay line.
- ${HE_BOLZANO} Locator: employment type; "Working day expectations"; the requirements list; pay line.
- ${HE_NL} Locator: contract line; "What does a typical day look like?"; requirements.
- ${HE_SOFIA} Locator: contract line; shift pattern; pay line.
- ${HE_STUDENT} Locator: contract line; travel days; eligibility; benefits.
- ${HE_CAREERS} Locator: the UK casual roles line; "USA".
- ${HE_UK_EOI} Locator: role list; availability; "Desirable".
- ${KINEXON_HH} Locator: "Rahmenbedingungen"; publish date.
- ${KINEXON_MUC} Locator: "Rahmenbedingungen"; publish date.
- ${CATAPULT_JOB} Locator: schedule; the requirements list; pay range.
- ${SPORTRADAR_PT} Locator: duties; schedule; pay line.
- ${GENIUS_ANALYST} Locator: the opening line describing the position.`,
    },
    {
      slug: "pay-eligibility-and-the-ladder",
      title: "18 · Pay units, eligibility and the ladder",
      section: "5 · The jobs and the ladder",
      recallContent: [
        {
          prompt: "How did Hawk-Eye's Sofia analyst posting state its pay and terms?",
          answer: "\"80 EUR / shift,\" as a consultant on 8-hour shifts (Hawk-Eye Innovations, 2026h).",
        },
        {
          prompt: "Which casual roles does Hawk-Eye's UK expression of interest name?",
          answer: "Match day technicians, match operations assistants and systems operators (Hawk-Eye Innovations, n.d.-g).",
        },
      ],
      body: `${QR}

**Six units in one section.** Put the posted pay lines from lessons 16 and 17 side by side, and the first thing they teach is that you cannot compare them until you know the unit.

| Posting | Pay as posted | Unit | Date |
|---|---|---|---|
| NFL injury video review operator | $38 at both ends of the range | Not stated | Created April 15, 2026 (NFL, 2026b) |
| Hawk-Eye Rutgers technician | "starting at $28 per hour" | Hour | Closed; saved October 26, 2026 (Hawk-Eye Innovations, n.d.-f) |
| NBA G League representative | "$200/Daily game rate" | Game day | October 14, 2026 (NBA, 2026) |
| Hawk-Eye Italy technicians | "Starting from €130 daily rate" | Day | October 19 and 22, 2026 (Hawk-Eye Innovations, 2026e, 2026f) |
| Hawk-Eye Sofia analyst | "80 EUR / shift" | Shift of 8 hours | October 20, 2026 (Hawk-Eye Innovations, 2026h) |
| Hawk-Eye SEC coordinator | $43,112 to $57,482 "base salary, plus bonus" | Year | October 16, 2026 (Hawk-Eye Innovations, 2026g) |
| Catapult product support technician | "$48,300 to $72,450 per year" | Year | September 1, 2026 (Catapult, 2026) |

**How to compare them, reasoned.** Convert only what the posting lets you convert. The Sofia posting states 8-hour shifts, so 80 EUR a shift is 10 EUR an hour for that posting. The Italy daily rate covers a match day that can start up to 6 or 7 hours before kickoff (lesson 13), but the postings give no total hours for the day, so it does not convert. The NFL's $38 has no unit, so it converts to nothing (lesson 16). And no figure here is a market rate: each is one employer's offer on one date, in one place.

**What a range means.** The NFL's text on its Greenhouse postings says: "The NFL expects to hire for this position near the middle of the range" (NFL, 2026d). The SEC posting says its range "does not include any other compensation components or bonuses," and that the actual offer depends on qualifications, experience, skills, education, certifications "and geographic location" (Hawk-Eye Innovations, 2026g). So the top of a range is not the offer to expect.

**No occupation-wide figure.** No government pay survey for this work could be read for this course: the Bureau of Labor Statistics page for broadcast, sound and video technicians refused the request. So this course gives no occupation-wide pay figure, only the postings above.

**Eligibility, as posted.** Some rules decide whether you can apply at all.

| Rule | Posting |
|---|---|
| "may not be a full-time, part-time, or game day employee of any NFL team" | NFL operator (NFL, 2026b) |
| "onsite presence at an NFL office or stadium location"; no relocation help | NFL operator (NFL, 2026b) |
| "commit to all of the home games for the season" | Rutgers technician (Hawk-Eye Innovations, n.d.-f) |
| "Must be currently studying towards an undergraduate degree" | Tennis student placement (Hawk-Eye Innovations, 2026i) |
| "Fluent in Dutch and English"; a driving licence | Netherlands operator (Hawk-Eye Innovations, 2026d) |
| A CV in English | Italy technicians (Hawk-Eye Innovations, 2026e, 2026f) |
| A question on whether you need visa sponsorship for the UK | UK form (Hawk-Eye Innovations, n.d.-g) |
| All shifts on site, though the work option says "Remote" | G League representative (NBA, 2026) |

**Why a team's employee is barred, reasoned.** The NFL posting gives no reason for its rule. But lesson 5 showed the same idea in the medical roles: UNCs have no affiliation with NFL clubs, and a spotter may have had no paid NFL team employment in the last 5 years (NFL, 2022b; NFL, n.d.-e). Read together, the league keeps the people around its injury review independent of the teams. That is a reading; the posting states only the rule.

**The ladder, as the postings describe it.** No employer read for this course publishes a career map. Here is everything the postings say about moving up.

- **From student placement.** The tennis operator role includes "contributing to the development of less experienced operators" and the "option to join a more project-focused team" (Hawk-Eye Innovations, 2026i).
- **From casual to full time.** Italy: "a great entry level route into full time employment with Hawk-Eye Innovations ltd" (Hawk-Eye Innovations, 2026e). The UK form: "Opportunities for full-time employment," "Travel across Europe and beyond to support major football tournaments" and "Contribute to improvements in VAR workflows" (Hawk-Eye Innovations, n.d.-g).
- **Growing in the role.** Netherlands: "you will initially focus on our on-site technical services. You will gain exposure to various other services as you grow in the role" (Hawk-Eye Innovations, 2026d). Big Ten: training to "encourage development and progression" (Hawk-Eye Innovations, n.d.-f).
- **The remote desk trains the venue crew.** The SEC coordinator produces "documentation for (and assist in delivering) training programs for college replay staff, including both onsite technicians and the Birmingham team" (Hawk-Eye Innovations, 2026g).
- **Beyond operator.** "Travel the world as a systems operator ... or join our engineering team," and "Grow your career as part of our leadership team, managing passionate individuals within our regional teams" (Hawk-Eye Innovations, n.d.-h).
- **On the data side.** Genius Sports' match lead and game operations analyst roles "Lead a group of Operators" and lead "training for newly signed Operators" (Genius Sports, 2026a, 2026b).
- **The NFL operator.** Its posting describes no progression at all (NFL, 2026b).

TeamWork Online, a job board that lists Hawk-Eye's roles, labels Hawk-Eye's SEC coordinator "Entry Level" and its student placements "Intern" (TeamWork Online, n.d.).

**One reading of the rungs.** Assembled from separate postings, not from any employer's map: you enter through a student placement, a casual venue technician role or a league game-day operator seat; next comes a part-time or fixed-term operator role; then a full-time coordinator or remote-desk role that trains and supports venue technicians; and at the vendor, engineering or leadership. Each rung rests on one posting's words, and the reviewer who has worked these jobs may reorder them.

:::reveal Why can the Sofia pay be turned into an hourly figure, but not the Italy daily rate? ||| The Sofia posting states 8-hour shifts (80 EUR is 10 EUR an hour). The Italy postings give a daily rate but no total hours for the day.

:::reveal Where in its range does the NFL say it expects to hire? ||| "Near the middle of the range" (NFL, 2026d).

:::reveal Which posting in this section describes no progression at all? ||| The NFL injury video review operator posting (NFL, 2026b).

## Sources
- ${NFL_IVR} Locator: "Salary"; "Qualifications"; the onsite and relocation lines.
- ${HE_RUTGERS} Locator: pay line; the season commitment; the training line.
- ${NBA_VAN_ANDEL} Locator: pay line; work option field.
- ${HE_FIRENZE} Locator: pay line; "Please attach your CV in English"; the entry level route line.
- ${HE_BOLZANO} Locator: pay line; "Please attach your CV in English".
- ${HE_SOFIA} Locator: shift pattern; pay line.
- ${HE_SEC_COORD} Locator: "Salary & Benefits Disclosure"; the training programs line.
- ${CATAPULT_JOB} Locator: pay range.
- ${NFL_FAST} Locator: "Salary / Pay Range".
- ${HE_STUDENT} Locator: eligibility; development of less experienced operators.
- ${HE_NL} Locator: requirements; growth in the role.
- ${HE_UK_EOI} Locator: visa question; "As You Progress".
- ${NFL_AT_SPOTTERS} Locator: the requirements list.
- ${NFL_2022B} Locator: UNC paragraph.
- ${HE_CAREERS} Locator: the operator, engineering and leadership lines.
- ${GENIUS_ANALYST} Locator: leadership and training duties.
- ${GENIUS_LEAD} Locator: "Lead a group of Operators".
- ${TEAMWORK} Locator: career-level label on each listing.`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz \u00b7 The jobs and the ladder",
      section: "5 \u00b7 The jobs and the ladder",
      body: "A graded check on the roles as posted, the pay units and dates, the eligibility rules and the ladder as the postings describe it. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What is a job posting a primary source for, as section 5 uses it?", options: ["What one employer asked on one date", "What the whole trade pays this year", "What a union contract sets for crews", "What every league requires of staff"], correctIndex: 0, explanation: "Lesson 16: a posting is a primary source for what one employer asked on the date it was posted, not a survey of the trade.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "How does section 5 write every pay figure?", options: ["As a national average", "As posted, with its date", "As a union minimum rate", "As a yearly equivalent"], correctIndex: 1, explanation: "Lesson 16: every pay figure is written \"as posted,\" with its date, and none is a going rate.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What certification must an NFL booth spotter hold?", options: ["A broadcast engineering license", "A Hawk-Eye systems operator certificate", "BOC athletic trainer certification", "An FCC radio operator permit"], correctIndex: 2, explanation: "NFL (n.d.-e): current Board of Certification athletic trainer certification, plus a state license or registration where required.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "How many years as an athletic trainer must an NFL booth spotter have?", options: ["At least 2 years", "At least 5 years", "At least 20 years", "At least 10 years"], correctIndex: 3, explanation: "NFL (n.d.-e): at least 10 years as an athletic trainer. Five years is the bar on paid NFL team employment.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Where was the NFL operator posting read for this course?", options: ["A New Orleans copy on SHRM HireVets", "The NFL's own Greenhouse job board", "A printed notice at a team stadium", "Hawk-Eye's Ashby public job board"], correctIndex: 0, explanation: "NFL (2026b): the New Orleans Saints posting, read in a copy on SHRM HireVets.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What created date does the New Orleans copy's page data give?", options: ["October 16, 2026", "April 15, 2026", "August 25, 2026", "January 7, 2026"], correctIndex: 1, explanation: "NFL (2026b): the page data gives a created date of April 15, 2026.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Which games does the NFL operator posting cover?", options: ["Only the regular season's road games each year", "Only the playoff games, both home and away alike", "Preseason, regular season, postseason home games", "Only games shown on national television"], correctIndex: 2, explanation: "NFL (2026b): \"all preseason, regular season, and postseason home games,\" plus \"flexed\" games.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What typing speed does the NFL operator posting ask for?", options: ["A minimum of 80 words per minute", "A minimum of 25 words per minute", "No typing speed is mentioned", "A minimum of 40 words per minute"], correctIndex: 3, explanation: "NFL (2026b): touch typing, \"minimum 40 words per minute.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What does the NFL posting say about audio and video path testing?", options: ["Training will be provided", "A degree must cover it", "Five years are required", "It is the club's duty"], correctIndex: 0, explanation: "NFL (2026b): \"Audio and video path troubleshooting and testing,\" with \"training will be provided.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "How much must the NFL operator be able to lift, as posted?", options: ["Up to 75 pounds", "Up to 30 pounds", "Up to 10 pounds", "Up to 50 pounds"], correctIndex: 1, explanation: "NFL (2026b): lift \"up to 30 pounds,\" and sit for long periods.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What does the NFL posting say about relocation?", options: ["Relocation is paid in full for the first season", "Relocation is shared with the home club", "No relocation assistance will be provided", "Relocation help depends on the market"], correctIndex: 2, explanation: "NFL (2026b): \"NO RELOCATION ASSISTANCE WILL BE PROVIDED.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Who may not apply for the NFL operator role?", options: ["Anyone without a degree", "Anyone under twenty-five", "Any former broadcaster", "Any NFL team's employee"], correctIndex: 3, explanation: "NFL (2026b): \"Candidate may not be a full-time, part-time, or game day employee of any NFL team.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What does the NFL posting's salary line show?", options: ["$38 at both ends, in USD, no unit", "$38 to $45 an hour, with overtime", "$38,000 a year, plus a game bonus", "$38 per game, paid at season's end"], correctIndex: 0, explanation: "NFL (2026b): $38 as the low and the high end, in USD; it never says per hour, per game or per year.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Why does lesson 16 treat hourly as the likely unit for the $38?", options: ["The posting's salary line says \"per hour\" in small print", "It fits an 8 to 9 hour day; the NFL posts hourly rates", "Every sports league pays its game-day staff by the hour", "The New Orleans club confirmed it in a press statement"], correctIndex: 1, explanation: "Reasoned: the NFL's pay text speaks of \"salaries or hourly rates\" (NFL, 2026d), and $38 per whole game day would be under $5 an hour. It is a reading, not the posting's word.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What phrase from the NFL's own pay text shows it posts both kinds of pay?", options: ["\"day rates and game fees\"", "\"stipends and allowances\"", "\"salaries or hourly rates\"", "\"contracts and retainers\""], correctIndex: 2, explanation: "NFL (2026d), \"Salary / Pay Range\": the text speaks of \"salaries or hourly rates.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What employment type does the NFL operator posting state?", options: ["Seasonal full-time staff", "An unpaid volunteer role", "A union crew member", "None; it is not stated"], correctIndex: 3, explanation: "NFL (2026b): the employment type is not stated (lesson 21 returns to this).", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Where was the Hawk-Eye Rutgers posting read?", options: ["A saved startup.jobs copy, closed", "Hawk-Eye's live Ashby job board", "The Big Ten conference website", "A Rutgers University news release"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-f): a saved startup.jobs copy marked \"no longer available.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "How did the Rutgers posting describe its terms?", options: ["Full-time salaried, permanent", "Part-time contractor, temporary", "Unpaid internship, one season", "Fixed-term, six months, salaried"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-f): \"Part Time (contractor)\"; \"a temporary role.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Through whom was the Rutgers technician employed?", options: ["The Big Ten Conference's league office", "Rutgers University's athletic department", "A third-party managed service provider", "Hawk-Eye's head office in Basingstoke"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-f): \"employed through a third-party managed service provider.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What background did the Rutgers posting ideally want?", options: ["Medical, with a current sports therapy license", "Coaching, with college football years", "Accounting, with payroll experience", "Broadcast or engineering, with signal flow"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-f): \"Ideally a broadcast/engineering background with an understanding of signal flow.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What commitment did the Rutgers posting ask for?", options: ["All of the home games for the season", "Two away games a month, at a minimum", "Only the conference championship", "Weekday practices through spring"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-f): \"commit to all of the home games for the season.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What pay did the Rutgers posting give?", options: ["A flat $200 per game day", "Starting at $28 per hour", "$38 with no unit stated", "€130 as a daily rate"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-f): \"starting at $28 per hour.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Why is \"Hawk-Eye pays technicians $28 an hour\" wrong?", options: ["The posting gave the pay in euros", "Hawk-Eye pays only yearly salaries", "The staffing provider employed them", "The $28 was really the NFL's posted rate"], correctIndex: 2, explanation: "Lesson 16: the employer of record was the staffing provider, so the figure was that provider's offer for one season at one school.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What dates does the saved Rutgers copy carry?", options: ["A close date of April 24", "A publish date of Oct 16", "A start date of Summer 2027", "No publish or close date"], correctIndex: 3, explanation: "Lesson 16: the saved copy carries no publish or close date, so the course cannot say when it opened or closed.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What was the G League Van Andel Arena posting window?", options: ["October 14 to October 31, 2026", "April 6 to April 24, 2026", "September 2 to October 30, 2026", "July 1 to August 4, 2026"], correctIndex: 0, explanation: "NBA (2026): a posting window of October 14 to October 31, 2026.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "How long may the G League representative's temporary position last?", options: ["Exactly one full season", "Not more than 10 months", "Not more than 6 months", "Two seasons, renewable"], correctIndex: 1, explanation: "NBA (2026): a \"temporary position,\" not to exceed 10 months.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What does the G League posting's work option field say, against its shifts?", options: ["\"On-site,\" though shifts are all remote", "\"Hybrid,\" with two home days each week", "\"Remote,\" though all shifts are on site", "\"Travel,\" with games in several arenas"], correctIndex: 2, explanation: "NBA (2026): the work option says \"Remote,\" but candidates must work all shifts on site at the arena.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Which skill does the G League posting list besides cabling and basic IT?", options: ["Touch typing", "Fluent Dutch", "Video editing", "Work at heights"], correctIndex: 3, explanation: "NBA (2026): \"work at heights,\" with cabling, connectivity and basic IT; calibration, Linux and Python are preferred.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What pay did the G League representative posting give?", options: ["\"$200/Daily game rate\"", "\"$28 per hour, starting\"", "\"80 EUR / shift\"", "\"$38 USD, both ends\""], correctIndex: 0, explanation: "NBA (2026): \"$200/Daily game rate.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What was the SEC coordinator posting's deadline to apply?", options: ["October 16, 2026, at noon EDT", "October 30, 2026, 7:00 PM EDT", "December 16, 2026, at midnight", "April 24, 2026, end of business"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026g): \"Deadline to Apply October 30, 2026 at 7:00 PM EDT.\" The course quotes it as a record, not an open ad.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Where is the SEC coordinator based, as posted?", options: ["From home, anywhere in the US", "In Basingstoke, at head office", "On site in Birmingham, Alabama", "On the road, at every SEC venue"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026g): \"On-site,\" Birmingham, AL, \"Up to 5 days/week in the office.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What background does the SEC coordinator posting ask for?", options: ["Physician training in college sports medicine", "A coaching career in college soccer", "Ten years of broadcast camera work", "Remote technical or operational support"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026g): \"A strong background in providing remote technical or operational support.\"", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "What sick leave did the SEC coordinator posting list?", options: ["80 hours accrued annually", "10 days paid each quarter", "None; it is a contract role", "40 hours after six months"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026g): \"80 hours of accrued paid sick leave annually,\" with healthcare and paid vacation.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "Which sport is not in Hawk-Eye's SEC delivery list?", options: ["Softball", "Football", "Volleyball", "Baseball"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026g): women's soccer, volleyball, men's and women's basketball, baseball and softball. Football is not on the list.", sourceLessonSlug: "four-us-roles-as-posted" },
          { prompt: "How many postings did Hawk-Eye's public job board list on October 26, 2026?", options: ["42", "8", "25", "12"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-i): 25 postings; 42 is the NFL's Greenhouse count.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Which was the only US posting on Hawk-Eye's board that day?", options: ["The Rutgers Big Ten technician role", "An NFL injury video review operator", "An MLB ballpark tracking technician", "The SEC live operations coordinator"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-i): the only US posting was the Live Operations Coordinator - SEC.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Why does lesson 17 read the European postings even for US learners?", options: ["They spell out work, terms and pay unit", "They pay more than any US posting does", "They are the only postings that exist", "They are written by the NFL's own staff"], correctIndex: 0, explanation: "Lesson 17: they spell out the work, the terms and the pay unit more fully than the US postings did.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "How was the Firenze tracking technician role described?", options: ["\"Full time, Salaried\"", "\"Freelance, Casual\"", "\"Intern, Unpaid\"", "\"Project Employee\""], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026e): \"Freelance, Casual.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What background does the Firenze posting prefer?", options: ["Medical, ideally in sports therapy", "Legal, ideally in sports contracts", "Technical, ideally in IT or broadcast", "Coaching, ideally in youth football"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026e): \"A technical background, ideally in IT or Broadcast.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "When are the Italy technicians' matches mostly, as posted?", options: ["On weekday mornings, never at weekends", "Only in summer, during the off-season", "Only at night, after the last kickoff", "On weekends, with some midweek fixtures"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026e): \"mostly on the weekend with some midweek fixtures.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What pay did the Italy technician postings give?", options: ["From €130 daily, based on experience", "€130 per hour, for every match day", "€80 per shift, for eight-hour shifts", "€43,112 a year, plus a match bonus"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026e, 2026f): \"Starting from €130 daily rate, based on experience.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What environment does the Bolzano posting describe?", options: ["Quiet, office-based, from nine to five daily", "High-pressure, procedural, live broadcast", "Remote, flexible and self-paced", "Classroom-based, with a mentor"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026f): a \"high-pressure, procedural, live broadcast environment.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What terms did the Netherlands operator posting give?", options: ["40 hours a week, a permanent contract", "One match a month, freelance only", "24 hours a week, 6-month fixed term", "12-month student placement, full time"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026d): \"Part-time (24 hrs per week), 6-Month Fixed-Term contract.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What sets the Netherlands operator's schedule?", options: ["The operator's own choice", "The broadcaster's rundown", "The club's training plan", "The league's fixture list"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026d): \"dedicated by the league's fixture list and can change at short notice.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Which languages does the Netherlands posting require?", options: ["Dutch and English", "Dutch and German", "English and French", "Dutch and Italian"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026d): \"Fluent in Dutch and English.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Besides a driving licence, what does the Netherlands posting ask about vans?", options: ["A heavy goods vehicle permit", "Willingness to drive them", "Ownership of a work van", "A mechanic's certificate"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026d): a driving licence and \"willingness to drive our vans.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What pay did the Netherlands operator posting give?", options: ["€130 a day", "€80 a shift", "None was posted", "$28 an hour"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026d): pay not posted.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "How did the Sofia analyst posting describe its contract?", options: ["\"Full time, permanent\"", "\"Casual, match day only\"", "\"Student placement\"", "\"Contract: Consultant\""], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026h): \"Contract: Consultant.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "How often must the Sofia analysts be available?", options: ["At least 4 days per week", "At least 1 day per month", "Exactly 2 weekends a month", "Only on tournament days"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026h): consultants \"are expected to be available for at least 4 days per week,\" on 8-hour shifts.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "How far on tour may the tennis student placement go?", options: ["Up to 30 days a year away from home", "Up to 220 days a year away from home", "No travel; it is office-based only", "Up to 100 days, in the UK only"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026i): \"up to 220 days per year on tour away from home.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What does the tennis student placement pay for, as posted?", options: ["Tuition fees at the student's university", "A car, fuel and a monthly phone allowance", "Travel, accommodation and a daily allowance", "Nothing; the placement is entirely unpaid"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026i): no pay posted; travel, accommodation and a daily living allowance paid.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "How long is the tennis student placement?", options: ["6 months, part time", "One tournament only", "Three summers in a row", "12 months, fixed term"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026i): \"Full-Time, Fixed-Term - 12 Months.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What does Hawk-Eye's careers page say it is always hiring for in the UK?", options: ["Casual Football Systems Operators", "Full-time tennis line judges", "Remote software engineers for tracking", "Club video analysts"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-h): \"We are always hiring for casual Football Systems Operators and other similar roles in the UK.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Which three roles does the UK expression of interest name?", options: ["Replay officials, referees and assessors", "Match day technicians, assistants, operators", "Camera operators, directors and producers", "Physios, team doctors and athletic trainers"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-g): match day technicians, match operations assistants and systems operators.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What availability does the UK form require?", options: ["Weekdays only, during office hours", "Summer tournaments only", "Weekends and some midweek evenings", "One weekend in four, at most"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-g): \"Must be available to work weekends and some midweek evenings.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Which of these is on the UK form's desirable list?", options: ["A sports medicine degree", "Ticket office experience", "A heavy goods licence", "Working with Fibre Optics"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-g): desirable skills include \"Working with Fibre Optics,\" \"Networking\" and \"Video routing knowledge.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What audio skill is on the UK form's desirable list?", options: ["Audio Over IP devices", "Studio music mixing", "Live concert sound", "Podcast production"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-g): \"Experience with Audio Over IP devices.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Where does Hawk-Eye's careers page base its US business?", options: ["Birmingham", "Atlanta", "New York", "Basingstoke"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-h): \"Join our growing business based in Atlanta.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Which sports does Hawk-Eye's US note name?", options: ["Tennis, cricket and rugby union", "Basketball, hockey and golf", "Baseball, American football, MLS", "Volleyball, softball and lacrosse"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-h): \"sports such as baseball and American football and Major League Soccer.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Was a Hawk-Eye technician role for those US sports open on October 26, 2026?", options: ["Yes, five were open in Atlanta", "Yes, one at every NFL stadium", "Yes, but only for MLB ballparks", "No, none was open on its board"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-i): no technician role for those sports was open that day.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What hours does KINEXON's Hamburg handball posting give?", options: ["About 6 hours a game, 2 to 3 games a month", "About 12 hours a game, and 8 games a month", "A full 40-hour week, all season long", "About 2 hours a game, every weekday"], correctIndex: 0, explanation: "KINEXON (2026b): about 6 hours per game, about 2 to 3 games per month.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Where is KINEXON's Munich football operator's work done?", options: ["In the stadium's broadcast truck", "In the company's Munich office", "At home, on a laptop, anywhere", "In the referees' review room"], correctIndex: 1, explanation: "KINEXON (2026a): the role is worked in the Munich office, not at the stadium.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "Why does lesson 17 flag its reading of the KINEXON postings?", options: ["KINEXON withdrew both of them in September", "They name no employer, so cannot be cited", "In German; the translations are unchecked", "They were read only on an aggregator site"], correctIndex: 2, explanation: "Lesson 17: both postings are written in German, and the course's translations have not yet been checked by a German reader.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What roster does Catapult's product support technician work?", options: ["Match days only, at the venue", "Weekdays, nine to five, no nights", "Tournaments only, on the road", "A 24/7 roster, including nights"], correctIndex: 3, explanation: "Catapult (2026): office-based on a 24/7 support roster \"including nights\" and weekends.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What pay did Catapult's support technician posting give?", options: ["$48,300 to $72,450 a year in total", "$200 for each daily game shift", "$15.75 an hour, nights included", "$28 an hour through a provider"], correctIndex: 0, explanation: "Catapult (2026): \"$48,300 to $72,450 per year,\" base plus target incentive.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "By lesson 17's reasoning, what kind of job is Catapult's support technician?", options: ["A replay operator in a stadium booth", "A product support desk, not a game seat", "An athletic trainer on the sideline", "A league official in a command center"], correctIndex: 1, explanation: "Reasoned from its duties: it is a support desk for the product, not a seat at the game.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What does Sportradar's part-time production operator do?", options: ["Runs replay for the officials at the stadium", "Hands radios to the medical staff", "Assists scouts with live data and line-ups", "Calibrates goal-line cameras each match"], correctIndex: 2, explanation: "Sportradar (2026a): assists scouts collecting live data and enters line-ups. It is data work, not replay.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What pay did Sportradar's part-time operator posting give?", options: ["€130 a day", "$200 a game", "$38, no unit", "$15.75 an hour"], correctIndex: 3, explanation: "Sportradar (2026a): \"$15.75/hour,\" released July 20, 2026.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "How does Genius Sports describe its game operations analyst?", options: ["A remote, hourly paid service provider", "A full-time stadium employee with benefits", "A volunteer scout at college games", "A league official in the replay center"], correctIndex: 0, explanation: "Genius Sports (2026a): \"A fully remote hourly paid Service Provider position.\"", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "By lesson 17, what three asks recur across the vendor postings?", options: ["A college degree, a car and a medical certificate", "IT or broadcast, English, weekends and evenings", "Sales, marketing and social media skills", "Coaching, refereeing and a sports license"], correctIndex: 1, explanation: "Lesson 17 gathers them: a technical background in IT or broadcast, English, and weekends and evenings set by a fixture list.", sourceLessonSlug: "casual-freelance-and-remote-roles" },
          { prompt: "What is the first thing lesson 18 says the posted pay lines teach?", options: ["The NFL pays more than any vendor does", "Europe always pays less than the US does", "You cannot compare them without the unit", "Yearly pay is always the better offer"], correctIndex: 2, explanation: "Lesson 18: put side by side, they show you cannot compare them until you know the unit.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What unit is the NBA G League pay figure?", options: ["Per hour", "Per year", "Per shift", "Per game day"], correctIndex: 3, explanation: "NBA (2026): \"$200/Daily game rate.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What unit is the Italy technicians' pay?", options: ["Per day", "Per hour", "Per year", "Per shift"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026e, 2026f): \"Starting from €130 daily rate.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What unit does the NFL operator's $38 carry?", options: ["Per hour, stated", "None is stated", "Per game, stated", "Per year, stated"], correctIndex: 1, explanation: "NFL (2026b): the salary line gives no unit.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What is 80 EUR per 8-hour shift as an hourly figure, for that posting?", options: ["8 EUR an hour", "16 EUR an hour", "10 EUR an hour", "20 EUR an hour"], correctIndex: 2, explanation: "Reasoned in lesson 18: the Sofia posting states 8-hour shifts, so 80 EUR a shift is 10 EUR an hour.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Why does the Italy daily rate not convert to an hourly figure?", options: ["The rate is paid in euros, not in US dollars", "Hawk-Eye forbids converting posted pay", "The rate changes with every single match", "The postings give no total hours for the day"], correctIndex: 3, explanation: "Lesson 18: the match day can start up to 6 or 7 hours before kickoff, but the postings give no total hours.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Is any pay figure in lesson 18's table a market rate?", options: ["No; each is one employer's offer on one date", "Yes; the NFL figure is the national rate", "Yes; the yearly figures are market rates", "Yes; the average of all seven is the rate"], correctIndex: 0, explanation: "Lesson 18: no figure is a market rate; each is one employer's offer on one date, in one place.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Where does the NFL say it expects to hire within a posted range?", options: ["At the bottom, for every hire", "Near the middle of the range", "At the top, for strong hires", "Wherever the club decides"], correctIndex: 1, explanation: "NFL (2026d): \"The NFL expects to hire for this position near the middle of the range.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What does the SEC posting say its salary range leaves out?", options: ["Healthcare, sick leave and paid vacation benefits", "Travel costs for away game support", "Other compensation components and bonuses", "Overtime for consecutive weekends"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026g): the range \"does not include any other compensation components or bonuses.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Besides experience and skills, what else does the SEC posting say shapes an offer?", options: ["The applicant's age", "The SEC's TV ratings", "Last season's results", "Geographic location"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026g): qualifications, experience, skills, education, certifications \"and geographic location.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What does lesson 18 conclude about the top of a posted range?", options: ["It is not the offer to expect", "It is the usual starting offer", "It is the union minimum wage", "It is paid after one season"], correctIndex: 0, explanation: "Lesson 18: with the NFL hiring near the middle and the SEC range excluding bonuses, the top is not the offer to expect.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Why does this course give no occupation-wide pay figure?", options: ["The BLS has never studied the work", "The BLS page refused the request", "Leagues forbid publishing pay data", "Vendors asked the course to omit it"], correctIndex: 1, explanation: "Lesson 18: the Bureau of Labor Statistics page for broadcast, sound and video technicians refused the request, so no occupation-wide figure could be read.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Which posting requires current study toward an undergraduate degree?", options: ["The NFL injury video operator", "The Netherlands systems operator", "The tennis student placement", "The SEC live operations coordinator"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026i): \"Must be currently studying towards an undergraduate degree.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Which postings ask for a CV in English?", options: ["The NFL operator postings", "The G League representative", "The Catapult support role", "The Italy technician postings"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026e, 2026f): \"Please attach your CV in English.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What does the UK form ask that bears on eligibility?", options: ["Whether you need visa sponsorship for the UK", "Whether you hold an NFL club employment", "Whether you are a certified athletic trainer", "Whether you can work in Birmingham, Alabama"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-g): whether the applicant needs \"visa sponsorship to work for Hawk-Eye in the UK.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What reason does the NFL operator posting give for barring team employees?", options: ["To keep salaries in line", "None; it states only the rule", "A union contract requires it", "Team staff work other shifts"], correctIndex: 1, explanation: "Lesson 18: the posting gives no reason. The course's reading, from lesson 5, is that the league keeps injury review independent of the teams.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Which lesson 5 facts support the reading that injury review is kept independent of teams?", options: ["Spotters are hired and paid by the home team", "Operators must be former team video staff", "UNCs lack club ties; spotters have a 5-year bar", "The clubs choose all of the booth's camera angles"], correctIndex: 2, explanation: "NFL (2022b; n.d.-e): UNCs have no affiliation with NFL clubs, and a spotter may have had no paid NFL team employment in the last 5 years.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Does any employer read for this course publish a career map?", options: ["Yes; Hawk-Eye publishes a full map", "Yes; the NFL posts one with every job ad", "Yes; TeamWork Online publishes one", "No; the ladder is gathered from postings"], correctIndex: 3, explanation: "Lesson 18: no employer read for the course publishes a career map; the ladder is built from what the postings say.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What do the Italy postings call the casual technician role?", options: ["An entry level route into full time work", "A final step before early retirement", "A volunteer role for students only", "A role reserved for qualified referees only"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026e): \"a great entry level route into full time employment with Hawk-Eye Innovations ltd.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Which progression does the UK form list?", options: ["A guaranteed promotion after a season", "Full-time work and tournament travel", "A move into refereeing at the club", "Sponsorship to study sports medicine"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-g): \"Opportunities for full-time employment\" and \"Travel across Europe and beyond to support major football tournaments.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What improvement may UK casual staff contribute to, as posted?", options: ["Ticket pricing", "Club tactics", "VAR workflows", "Pitch design"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-g): \"Contribute to improvements in VAR workflows.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What does the Netherlands posting say the operator first focuses on?", options: ["Software engineering work", "Leading a regional team", "Remote data analysis", "On-site technical services"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026d): \"you will initially focus on our on-site technical services,\" with exposure to other services as you grow.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What does the tennis operator role include toward others?", options: ["Developing less experienced operators", "Hiring all of the tour's line judges", "Coaching players between matches", "Selling systems to new tournaments"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026i): \"contributing to the development of less experienced operators.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "For whom does the SEC coordinator help deliver training?", options: ["The SEC's referees and their assessors", "Replay staff on site and in Birmingham", "Team doctors and athletic trainers", "The broadcast networks' camera crews"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026g): training programs \"for college replay staff, including both onsite technicians and the Birmingham team.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Which two paths beyond operator does Hawk-Eye's careers page name?", options: ["Refereeing, and coaching", "Sales, and marketing", "Engineering, and leadership", "Medicine, and nursing"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-h): \"join our engineering team,\" and \"Grow your career as part of our leadership team.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What do Genius Sports' match lead and analyst roles lead, as posted?", options: ["The league's match officials and assessors", "The broadcast crew and its director", "The club's medical and fitness staff", "A group of Operators, and their training"], correctIndex: 3, explanation: "Genius Sports (2026a, 2026b): \"Lead a group of Operators\" and \"training for newly signed Operators.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "How does TeamWork Online label Hawk-Eye's SEC coordinator?", options: ["Entry Level", "Senior", "Manager", "Intern"], correctIndex: 0, explanation: "TeamWork Online (n.d.): \"Entry Level\"; student placements are labelled \"Intern.\"", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "What progression does the NFL operator posting describe?", options: ["A path to spotter", "None at all", "A path to referee", "A path to physician"], correctIndex: 1, explanation: "NFL (2026b): the posting describes no progression.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "In lesson 18's reading of the rungs, what comes after a casual or entry seat?", options: ["An immediate move into team medicine", "A league referee's position on the field", "A part-time or fixed-term operator role", "A broadcast director's chair in the truck"], correctIndex: 2, explanation: "Reasoned from separate postings: entry, then a part-time or fixed-term operator, then a coordinator or remote desk, then engineering or leadership.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
          { prompt: "Why may the reviewer reorder lesson 18's rungs?", options: ["Hawk-Eye's map contradicts the lesson", "The NFL published a different ladder", "The rungs come from a union contract", "Each rests on one posting, not a map"], correctIndex: 3, explanation: "Lesson 18: the reading is assembled from separate postings, not from any employer's published map.", sourceLessonSlug: "pay-eligibility-and-the-ladder" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6: Getting hired
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "where-and-when-postings-open",
      title: "19 · Where postings live, and when they open",
      section: "6 · Getting hired",
      recallContent: [
        {
          prompt: "Why can the Sofia analyst's pay be turned into an hourly figure, but not the Italy daily rate?",
          answer: "The Sofia posting states 8-hour shifts, so 80 EUR a shift is 10 EUR an hour; the Italy postings give no total hours for the day.",
        },
        {
          prompt: "What do Hawk-Eye's Italy postings call the casual technician role?",
          answer: "\"a great entry level route into full time employment with Hawk-Eye Innovations ltd\" (Hawk-Eye Innovations, 2026e).",
        },
      ],
      body: `${QR}

**Where the postings were on October 26, 2026.** This is what each board held on the day this course's research read it. Boards change daily, so treat the table as a map of where to look, not a list of open jobs.

| Where | What it held that day | Source |
|---|---|---|
| The NFL's Greenhouse board | 42 postings through its public feed, none of them an injury video review, replay or officiating technology role. It hires for "one of our 32 NFL teams, NFL League office in New York City, NFL Films office based in Mt. Laurel, New Jersey, the NFL Media offices in Inglewood, California or one of our international offices" | NFL (n.d.-g, n.d.-h) |
| SHRM HireVets | Copies of the NFL injury video review operator posting, for New Orleans and for Tampa Bay | NFL (2026b, 2026c) |
| Hawk-Eye's careers site and its Ashby job board | 25 postings, one of them in the US | Hawk-Eye Innovations (n.d.-h, n.d.-i) |
| startup.jobs | The closed Rutgers posting, and a list of Hawk-Eye as "Hiring for 25 positions" | Hawk-Eye Innovations (n.d.-f); startup.jobs (n.d.) |
| TeamWork Online | Hawk-Eye's roles, each with a career level, and a "Get job alerts" button | TeamWork Online (n.d.) |
| The NBA's Workday board | A search for "officiating" gave eight results, five of them League Technology Representative postings, each for a different G League arena | NBA (2026) |
| KINEXON's board | Tracking operators for handball and football, in Germany | KINEXON (2026a, 2026b) |

**The employer's board and the copy.** The NFL operator posting was read in copies. The New Orleans copy links to an NFL Greenhouse job, and on October 26, 2026 that job returned "not found" from Greenhouse (NFL, 2026b; NFL, n.d.-h). A copy can outlive the job it copied.

Dates can disagree too. startup.jobs showed the Firenze technician as "7 months ago," while Hawk-Eye's own board gave a publish date of October 19, 2026 (startup.jobs, n.d.; Hawk-Eye Innovations, n.d.-i). Reasoned: the employer's board shows the latest publish date, and a copy's age can be older, so read any single date as "last published," not as the day hiring opened.

**When they open: the dated evidence.**

| Posting | Dates, as posted | Source |
|---|---|---|
| NFL operator, Tampa Bay copy | Created April 6, 2026 | NFL (2026c) |
| NFL operator, New Orleans copy | Created April 15, 2026, with an expiration date of April 24, 2026; its source job not found by October 26, 2026 | NFL (2026b) |
| KINEXON Hamburg handball operator | Published August 4, 2026; start "Saison 2026/2027" | KINEXON (2026b) |
| NFL Media seasonal TOC operator | First published August 14, 2026; "Up to 29 hours per week up to 7 months" | NFL (2026e) |
| Hawk-Eye Netherlands operator | Published September 2, 2026 | Hawk-Eye Innovations (2026d) |
| NBA G League representatives | Posting window October 14 to October 31, 2026, for the 2026-27 season | NBA (2026) |
| Hawk-Eye tennis student placements | Published October 15, 2026; assessment date December 16, 2026; start summer 2027 | Hawk-Eye Innovations (2026i) |
| Hawk-Eye SEC coordinator | Published October 16, 2026; deadline October 30, 2026 | Hawk-Eye Innovations (2026g) |
| Hawk-Eye Italy technicians | Published October 19 and 22, 2026; start "Immediate" | Hawk-Eye Innovations (2026e, 2026f) |

Genius Sports adds a line on the data side: its analysts get "fewer tasks in the summer (following the sports schedule)" (Genius Sports, 2026a).

**The SEC posting is a record.** It set a deadline of October 30, 2026, at 7:00 PM EDT (Hawk-Eye Innovations, 2026g). This course quotes it for what the job asked. If you want that job, look for a newer posting on Hawk-Eye's board; do not apply to the 2026 one.

**The pattern, reasoned.** The US league game-day postings read here went up before their seasons. The NFL operator copies were created in April 2026, for a role that covers "all preseason, regular season, and postseason home games" (NFL, 2026b). The G League postings opened in October 2026 for the 2026-27 season (NBA, 2026). By late October the NFL copy's source job was gone and the G League window was closing. European football hiring ran during the season, with "Immediate" starts. That is a pattern drawn from a handful of postings, and one year's dates are not a calendar. Whether the NFL posts these roles every spring, this course cannot yet say: the copies read are from one year. Copies for two clubs were read, and whether every stadium has its own posting, this course could not confirm.

**Vendors in the US.** On October 26, 2026, Hawk-Eye's board had no technician role for an NFL, MLB or Big Ten venue, so this course cannot say when those roles open (Hawk-Eye Innovations, n.d.-i). Its UK form, by contrast, is always open (lesson 17).

**Staying on top of it.** TeamWork Online's Hawk-Eye page offers "Get job alerts," with the line "Stay up to date on new jobs from Hawk-Eye Innovations" (TeamWork Online, n.d.). How those alerts work, how often they come, what they filter and whether they cost anything, this course could not read: TeamWork Online's own home and help pages did not load for this course's research. Reasoned from the dates above: check the employer's own board, check it again in the months before a season starts, and keep a copy of any posting you apply to, since the original may be gone by the interview.

:::reveal When were the two NFL operator copies read for this course created? ||| Tampa Bay on April 6, 2026, and New Orleans on April 15, 2026 (NFL, 2026c, 2026b).

:::reveal An aggregator says a posting is "7 months ago"; the employer's board says October 19. How do you read the dates? ||| Treat each as "last published," not the day hiring opened. The employer's board shows the latest publish date.

:::reveal Is the 2026 SEC coordinator posting an open ad? ||| No. Its deadline was October 30, 2026. The course quotes it as a record; look for a newer posting.

## Sources
- ${NFL_BOARD} Locator: the board's opening paragraph naming its hiring units.
- ${NFL_BOARD_API} Locator: the posting list, 42 postings, read October 26, 2026; job 5188007008 returned "not found."
- ${NFL_IVR} Locator: the page data's created and expiration dates; the link to the NFL Greenhouse job; "Summary".
- ${NFL_IVR_TB} Locator: the created date; "Summary".
- ${NFL_TOC} Locator: schedule line; first publish date.
- ${HE_CAREERS} Locator: "Open Positions (25)".
- ${HE_BOARD_API} Locator: the posting list with publish dates, read October 26, 2026.
- ${HE_RUTGERS} Locator: the "no longer available" banner.
- ${STARTUP_JOBS} Locator: the Hawk-Eye list, "Hiring for 25 positions" and each posting's age.
- ${TEAMWORK} Locator: "Get job alerts" and its line; career level on each listing.
- ${NBA_VAN_ANDEL} Locator: posting window; season.
- ${KINEXON_HH} Locator: publish date; start "Saison 2026/2027".
- ${HE_NL} Locator: publish date.
- ${HE_STUDENT} Locator: publish date; "Assessment Date(s)"; start date.
- ${HE_SEC_COORD} Locator: publish date; "Deadline to Apply".
- ${HE_FIRENZE} Locator: publish date; start "Immediate".
- ${HE_BOLZANO} Locator: publish date.
- ${GENIUS_ANALYST} Locator: the line on summer tasks.`,
    },
    {
      slug: "what-to-practice",
      title: "20 · What to practice before you apply",
      section: "6 · Getting hired",
      recallContent: [
        {
          prompt: "What was the NBA G League representatives' posting window?",
          answer: "October 14 to October 31, 2026, for the 2026-27 season (NBA, 2026).",
        },
        {
          prompt: "What did Greenhouse return on October 26, 2026 for the NFL job the New Orleans copy links to?",
          answer: "\"Not found\": a copy can outlive the job it copied (NFL, n.d.-h).",
        },
      ],
      body: `${QR}

**Start from the postings' own lists.** The NFL operator posting asks for Windows 10 proficiency, Wi-Fi setup and troubleshooting, hardware diagnosis, "Strong knowledge of all peripheral connectivity," "Audio equipment (headsets and belt packs)," and "Audio and video path troubleshooting and testing," with "training will be provided" (NFL, 2026b). Hawk-Eye's UK form lists as desirable "Networking," "Broadcast," "Live events," "Video routing knowledge," "Experience with Audio Over IP devices" and "Working with Fibre Optics" (Hawk-Eye Innovations, n.d.-g). The Rutgers posting wanted "Ideally a broadcast/engineering background with an understanding of signal flow" (Hawk-Eye Innovations, n.d.-f). This lesson maps each ask to a place to practice it.

**Signal flow, fiber and the network: practice them in CREW-00.** This course does not reteach them. This course matched each posting line to the CREW-00 lesson that teaches it.

| The posting asks | Practice in CREW-00, *Cables and Connectors* |
|---|---|
| "an understanding of signal flow"; "Audio and video path troubleshooting and testing" | "4 · SDI on coax and the BNC"; "7 · Reference, timecode and return video" |
| "Working with Fibre Optics"; a fiber link to every switch (lesson 13) | "11 · Single-mode, multimode and the color codes"; "12 · LC, SC and ST, and the polish on the end"; "13 · Inspect before you connect" |
| "Networking"; "Strong knowledge of all peripheral connectivity" | "19 · Network cable: categories, the 100-meter channel, etherCON and PoE" |
| "Experience with Audio Over IP devices"; Dante comms (lesson 13) | "20 · Dante, ST 2110, and why a media network is not the office network" |
| "Audio equipment (headsets and belt packs)" | "17 · Same plug, different signal: intercom and DMX on XLR," which covers wired intercom beltpacks, not two-way radios |
| "rigging cameras and running cables"; troubleshooting | "27 · Coil, label and run"; "28 · Test, then find the fault" |

**Windows: the version in the posting.** The NFL posting names Windows 10. Microsoft says "Windows 10 has reached the end of support on October 14, 2025," after which Microsoft no longer provides technical support, software updates or security updates (Microsoft, n.d.-c). Its lifecycle page says version 22H2 "will be the final version of Windows 10" (Microsoft, n.d.-b), and consumer Extended Security Updates "can protect your Windows 10 device till October 12, 2027" (Microsoft, n.d.-c). Reasoned: a posting that still names Windows 10 a year after its end of support points either to an older system image or to posting text nobody updated. Practice on current Windows, and be ready to meet Windows 10.

**Wi-Fi, by Microsoft's own steps.** Microsoft's guide to fixing Wi-Fi covers Windows 10 and Windows 11 and gives these steps in order (Microsoft, n.d.-a):

1. Check the connection status.
2. Check Airplane mode.
3. Forget the network and reconnect.
4. Restart the modem and router.
5. Try another frequency band, 2.4 GHz or 5 GHz.
6. Try another device.
7. Run network commands.
8. Reinstall the network adapter driver.
9. Ping the default gateway.

Step 7's commands are run as administrator, in this order: \`netsh winsock reset\`, \`netsh int ip reset\`, \`ipconfig /release\`, \`ipconfig /renew\`, \`ipconfig /flushdns\`. For step 9, run \`ipconfig\`, find the "Default gateway" address, then \`ping\` it (Microsoft, n.d.-a). Practice the whole list at home on your own computer until you can work it without the page. One caution, reasoned: at a venue the network belongs to someone else, so step 4 on a stadium's router is not yours to take. Report it and let the owner decide.

**Typing.** The NFL posting asks for touch typing at a "minimum 40 words per minute" (NFL, 2026b). That is one employer's figure on one date, not a rule for the trade. The posting names a speed, not a test, so time yourself on any typing test and practice until you clear it with room to spare.

**The body.** The NFL posting asks you to lift "up to 30 pounds" and to sit for long periods (NFL, 2026b). Hawk-Eye's UK roles involve "physically demanding work, such as rigging cameras and running cables" (Hawk-Eye Innovations, n.d.-g), and the G League posting lists "work at heights" (NBA, 2026). These are in the job's own text, so read them before you apply.

**Documentation.** The postings ask for written work: a checklist "reporting any uncompleted checks and specifying the reason" and "your sections in the match report" (Hawk-Eye Innovations, 2026f); game reports in the Game Management System and hours in a timekeeping system (NFL, 2026b); and, at the SEC desk, documentation for "checklists, post-event reporting, and disaster recovery protocols" (Hawk-Eye Innovations, 2026g). Lessons 14 and 15 showed where each fits in the day. A way to practice, reasoned: after any job you work, write a short report of what you checked, what you could not check and why, what failed, and what you did about it. It is the same shape the postings ask for.

**Focus.** The NFL posting says operators "Must be able to focus on the task at hand, not the game" (NFL, 2026b). A fan's habit of following the play is the one habit this job asks you to drop.

:::reveal On what date did Windows 10 reach its end of support, per Microsoft? ||| October 14, 2025 (Microsoft, n.d.-c).

:::reveal What is the last step in Microsoft's Wi-Fi guide, and how do you do it? ||| Ping the default gateway: run ipconfig, find the "Default gateway" address, then ping it (Microsoft, n.d.-a).

:::reveal Which CREW-00 lesson do you practice for "headsets and belt packs," and what does it not cover? ||| "17 · Same plug, different signal: intercom and DMX on XLR." It covers wired intercom beltpacks, not two-way radios.

## Sources
- ${NFL_IVR} Locator: "Qualifications"; "Physical Demands/Travel"; "Responsibilities" (reports and hours).
- ${HE_UK_EOI} Locator: "Desirable"; "What You Can Expect to Be Doing".
- ${HE_RUTGERS} Locator: the requirements list.
- ${MS_W10_END} Locator: opening paragraph; the Extended Security Updates paragraph.
- ${MS_LIFECYCLE} Locator: the retirement table and the 22H2 note.
- ${MS_WIFI} Locator: "General troubleshooting," steps 1 to 9; step 7 (network commands); step 9 (default gateway).
- ${NBA_VAN_ANDEL} Locator: the requirements list.
- ${HE_BOLZANO} Locator: "Key Responsibilities" (checklist; match report).
- ${HE_SEC_COORD} Locator: "Workflow Refinement".`,
    },
    {
      slug: "applying-and-how-you-are-employed",
      title: "21 · Applying, the interview, and how you are employed",
      section: "6 · Getting hired",
      recallContent: [
        {
          prompt: "What typing speed did the NFL operator posting ask for?",
          answer: "Touch typing at a \"minimum 40 words per minute\" (NFL, 2026b).",
        },
        {
          prompt: "Which network commands does step 7 of Microsoft's Wi-Fi guide run, and how?",
          answer: "As administrator, in order: netsh winsock reset, netsh int ip reset, ipconfig /release, ipconfig /renew, ipconfig /flushdns (Microsoft, n.d.-a).",
        },
      ],
      body: `${QR}

**What the forms ask.** Hawk-Eye's UK expression of interest asks for a name, an email address, a resume, a location, "When can you start a new role?", whether the applicant needs "visa sponsorship to work for Hawk-Eye in the UK," and "any relevant experience in broadcast or live sports" (Hawk-Eye Innovations, n.d.-g). Its Italy postings say "Please attach your CV in English" (Hawk-Eye Innovations, 2026e, 2026f). Its student placements set "Assessment Date(s): December 16th, 2026" (Hawk-Eye Innovations, 2026i). Reasoned: the experience question asks for broadcast or live sports, so the truck and arena days a crew member already has are the experience to list. For the resume itself, see *Break Into Sports & Media Broadcasting* lesson "5 · Résumé, portfolio, and personal brand".

**One posted process.** Sportradar's postings spell out a hiring process: "Initial Screening: A call with the management team to understand your background and expectations," and, at the end, "Receive feedback and, if successful, an offer!" (Sportradar, 2026a, 2026b). It is one data company's process, and this course does not assume that the replay vendors or the leagues hire the same way.

**The interview, reasoned.** This part is the course's reasoning from the postings, not a list of any employer's questions. Lesson 8 gave the answer for the medical booth: keep the system and the radios working, tag and play back what the licensed staff ask for, and leave every medical call to them. Two posting lines say what else to be ready to show. The SEC desk wants "A strong background in providing remote technical or operational support" (Hawk-Eye Innovations, 2026g), and the Rutgers posting asks for troubleshooting (Hawk-Eye Innovations, n.d.-f). So be ready to walk through one fault you found and fixed, step by step, and the report you wrote after it (lesson 20).

**How you are employed: what the postings state.** The postings use many arrangements, and each one changes what an offer means.

| Posting | The arrangement, as posted |
|---|---|
| Hawk-Eye Rutgers technician | "Part Time (contractor)"; "a temporary role"; "employed through a third-party managed service provider"; "you may be eligible to enrol in benefits, at your cost, through the managed service provider" (Hawk-Eye Innovations, n.d.-f) |
| Hawk-Eye Italy technicians | Firenze "Freelance, Casual"; Bolzano "Freelance"; both call the worker "the consultant" (Hawk-Eye Innovations, 2026e, 2026f) |
| Hawk-Eye Sofia analyst | "Contract: Consultant"; consultants "are expected to be available for at least 4 days per week" (Hawk-Eye Innovations, 2026h) |
| Hawk-Eye Netherlands operator | "Part-time (24 hrs per week), 6-Month Fixed-Term contract" (Hawk-Eye Innovations, 2026d) |
| NBA G League representative | "Project Employee"; a "temporary position" not to exceed 10 months (NBA, 2026) |
| Genius Sports analyst | "A fully remote hourly paid Service Provider position," with "Around 40-80 hours of tasks per month"; you supply a computer with "at least 512GB storage" and a connection of "at least 50 Mbps download and 10 Mbps upload" (Genius Sports, 2026a) |
| KINEXON Hamburg operator | "Freelancer oder im Rahmen eines Minijobs" (KINEXON, 2026b), quoted in German because this course's translation is unchecked (lesson 17) |
| Hawk-Eye SEC coordinator | "Full time," with healthcare, paid vacation and paid sick leave (Hawk-Eye Innovations, 2026g) |
| NFL injury video review operator | Not stated (NFL, 2026b) |

**The NFL operator's open question.** The posting asks operators to report hours "in timekeeping system" and gives a salary line, but it does not say whether the operator is an NFL employee, a contractor or a staffing provider's worker. This course does not guess.

**Three questions the postings answer differently, reasoned.** Read across the table, and three questions decide what an offer is worth:

1. **Who employs you?** The vendor directly, a staffing provider, or you yourself as a freelancer, consultant or service provider. At Rutgers the staffing provider was the employer, so "$28 per hour" was that provider's offer for work at a Hawk-Eye system.
2. **What is the pay unit, and what does it cover?** Lesson 18 showed six units across seven postings.
3. **What comes with it?** The Rutgers benefits were "at your cost"; the SEC role listed healthcare and paid leave; Genius Sports asks you to supply the computer and the connection.

Ask the employer all three before you accept. Questions of tax, contracts and benefits law belong to a qualified adviser where you live; this course does not answer them. For freelancing and building credits in broadcasting more widely, see *Break Into Sports & Media Broadcasting* lessons "14 · Internships, freelancing, and building credits" and "15 · Unions, networking, and landing the first job".

**Keep your copy.** Reasoned from lesson 19: the original posting may be gone by the interview, as the NFL's was by October. Save the posting you apply to, with its date, and you will know exactly what the employer asked and offered.

:::reveal Through whom was the Rutgers technician employed, and how were benefits offered? ||| Through a third-party managed service provider; benefits "at your cost," through that provider (Hawk-Eye Innovations, n.d.-f).

:::reveal What must you supply yourself for Genius Sports' remote analyst role? ||| Your own computer with at least 512GB of storage and a connection of at least 50 Mbps down and 10 Mbps up (Genius Sports, 2026a).

:::reveal What three questions does lesson 21 say to ask before accepting an offer? ||| Who employs you; what the pay unit is and what it covers; and what comes with it, such as benefits or the equipment you must supply.

## Sources
- ${HE_UK_EOI} Locator: the form fields.
- ${HE_FIRENZE} Locator: the CV line; employment type; "Working day expectations" (the consultant).
- ${HE_BOLZANO} Locator: the CV line; employment type.
- ${HE_STUDENT} Locator: "Assessment Date(s)".
- ${SPORTRADAR_PT} Locator: "Our Recruitment Process".
- ${SPORTRADAR_TRAINEE} Locator: "Our Recruitment Process".
- ${HE_SEC_COORD} Locator: the requirements list; employment type; "Salary & Benefits Disclosure".
- ${HE_RUTGERS} Locator: employment type; the managed service provider and benefits lines; the requirements list.
- ${HE_SOFIA} Locator: contract line; availability line.
- ${HE_NL} Locator: contract line.
- ${NBA_VAN_ANDEL} Locator: the posting title and the temporary position line.
- ${GENIUS_ANALYST} Locator: the opening line; hours of tasks; equipment and connection requirements.
- ${KINEXON_HH} Locator: "Rahmenbedingungen".
- ${NFL_IVR} Locator: "Responsibilities" (timekeeping); "Salary".`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz \u00b7 Getting hired",
      section: "6 \u00b7 Getting hired",
      body: "A graded check on where postings live and when they open, what to practice before you apply, the application and interview, and how the postings say you are employed. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "How should you treat lesson 19's table of boards?", options: ["As a list of open jobs today", "As a map of where to look", "As a ranking of best employers", "As the only boards that exist"], correctIndex: 1, explanation: "Lesson 19: boards change daily, so the table is a map of where to look, not a list of open jobs.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "How many postings did the NFL's Greenhouse feed list on October 26, 2026?", options: ["25", "8", "42", "5"], correctIndex: 2, explanation: "NFL (n.d.-h): 42 postings; 25 was Hawk-Eye's count.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Was an injury video review role among the NFL's Greenhouse postings that day?", options: ["Yes; one for every one of the 32 clubs", "Yes; but only for the New Orleans club", "Yes; listed under NFL Films in New Jersey", "No; no replay or review role was listed"], correctIndex: 3, explanation: "NFL (n.d.-h): none of the 42 was an injury video review, replay or officiating technology role.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Which of these is a hiring unit the NFL's Greenhouse board names?", options: ["The NFL Films office in Mt. Laurel, NJ", "The Hawk-Eye office in Atlanta, Georgia", "The SEC office in Birmingham, Alabama", "The Big Ten office in Rosemont, Illinois"], correctIndex: 0, explanation: "NFL (n.d.-g): the 32 teams, the League office in New York City, NFL Films in Mt. Laurel, NFL Media in Inglewood, and international offices.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Where were copies of the NFL operator posting read?", options: ["startup.jobs", "SHRM HireVets", "TeamWork Online", "NBA Workday"], correctIndex: 1, explanation: "NFL (2026b, 2026c): copies on SHRM HireVets, for New Orleans and Tampa Bay.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "For which two clubs were NFL operator copies read?", options: ["Dallas and Green Bay", "New York and Los Angeles", "New Orleans and Tampa Bay", "Chicago and Kansas City"], correctIndex: 2, explanation: "NFL (2026b, 2026c): the New Orleans Saints and the Tampa Bay Buccaneers copies.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What did the NBA Workday search for \"officiating\" return?", options: ["One result, for the NBA Replay Center", "No results, since the board was closed", "Thirty results, one for every NBA team", "Eight results, five of them G League reps"], correctIndex: 3, explanation: "NBA (2026): eight results, five of them League Technology Representative postings, each for a different G League arena.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What does TeamWork Online show beside each Hawk-Eye role?", options: ["A career level", "A pay estimate", "A closing date", "A star rating"], correctIndex: 0, explanation: "TeamWork Online (n.d.): each listing carries a career level, such as \"Entry Level\" or \"Intern.\"", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "How did startup.jobs describe Hawk-Eye?", options: ["\"Not hiring at this time\"", "\"Hiring for 25 positions\"", "\"Hiring for 42 positions\"", "\"Hiring in the US only\""], correctIndex: 1, explanation: "startup.jobs (n.d.): \"Hiring for 25 positions.\"", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What did Greenhouse return for the NFL job the New Orleans copy links to?", options: ["A new pay range", "A filled notice", "\"Not found\"", "A login screen"], correctIndex: 2, explanation: "NFL (2026b; n.d.-h): the source job returned \"not found\" from Greenhouse on October 26, 2026.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What does lesson 19 draw from the \"not found\" source job?", options: ["The NFL ended the role for good in 2026", "HireVets invented the posting entirely", "The posting was moved to Hawk-Eye's board", "A copy can outlive the job it copied"], correctIndex: 3, explanation: "Lesson 19: the copy was still up after its source job was gone.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "How did startup.jobs date the Firenze technician posting?", options: ["\"7 months ago\"", "\"Yesterday\"", "\"Closed\"", "\"2 years ago\""], correctIndex: 0, explanation: "startup.jobs (n.d.): \"7 months ago,\" while Hawk-Eye's own board gave October 19, 2026.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What publish date did Hawk-Eye's own board give the Firenze posting?", options: ["March 19, 2026", "October 19, 2026", "October 30, 2026", "April 15, 2026"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-i): October 19, 2026.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "How does lesson 19 say to read a single posting date?", options: ["As the deadline, after which no one is hired", "As the day the employer filled the position", "As last published, not as the day hiring opened", "As the start date for the job's first shift"], correctIndex: 2, explanation: "Reasoned: the employer's board shows the latest publish date and a copy's age can be older, so read a date as \"last published.\"", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "When was the Tampa Bay copy of the NFL operator posting created?", options: ["April 24, 2026", "June 26, 2026", "March 1, 2026", "April 6, 2026"], correctIndex: 3, explanation: "NFL (2026c): created April 6, 2026.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What expiration date did the New Orleans copy carry?", options: ["April 24, 2026", "October 30, 2026", "December 16, 2026", "August 14, 2026"], correctIndex: 0, explanation: "NFL (2026b): created April 15, 2026, with an expiration date of April 24, 2026.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "When was KINEXON's Hamburg handball operator posting published?", options: ["October 19, 2026", "August 4, 2026", "April 6, 2026", "January 2, 2026"], correctIndex: 1, explanation: "KINEXON (2026b): published August 4, 2026, for a start in the 2026/2027 season.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "How long does NFL Media's seasonal TOC operator role run, as posted?", options: ["A full 40-hour week, all year round", "One game day a week, for ten weeks", "Up to 29 hours a week, up to 7 months", "Up to 12 hours a week, for 2 months"], correctIndex: 2, explanation: "NFL (2026e): \"Up to 29 hours per week up to 7 months.\"", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "When was Hawk-Eye's Netherlands operator posting published?", options: ["October 22, 2026", "August 25, 2026", "April 15, 2026", "September 2, 2026"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026d): published September 2, 2026.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What season were the G League representative postings for?", options: ["The 2026-27 G League season", "The 2025-26 NBA playoffs", "The 2027 summer league", "The 2026 WNBA season"], correctIndex: 0, explanation: "NBA (2026): a posting window of October 14 to 31, 2026, for the 2026-27 season.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What assessment date did Hawk-Eye's student placements set?", options: ["October 30, 2026", "December 16, 2026", "April 24, 2026", "January 7, 2027"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026i): \"Assessment Date(s): December 16th, 2026,\" for a summer 2027 start.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "When do the student placements start?", options: ["Immediately", "Spring 2026", "Summer 2027", "Winter 2026"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026i): published October 15, 2026, start summer 2027.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What start did the Italy technician postings give?", options: ["\"Summer 2027\"", "\"Saison 2027\"", "\"Next spring\"", "\"Immediate\""], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026e, 2026f): published October 19 and 22, 2026, start \"Immediate.\"", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What does Genius Sports say about its analysts' summer?", options: ["Fewer tasks, following the sports schedule", "Double hours, to cover summer tournaments", "No change at all across the whole year", "Mandatory leave, unpaid, for two months"], correctIndex: 0, explanation: "Genius Sports (2026a): \"fewer tasks in the summer (following the sports schedule).\"", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Why does lesson 19 call the 2026 SEC posting a record?", options: ["It was never a real job posting", "Its deadline was October 30, 2026", "The SEC ended its Hawk-Eye work", "It was only shown to students"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026g): deadline October 30, 2026, at 7:00 PM EDT. Look for a newer posting instead.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "If you want the SEC coordinator job, what does lesson 19 say to do?", options: ["Apply to the 2026 posting after its deadline", "Email the SEC commissioner's office directly", "Look for a newer posting on Hawk-Eye's board", "Wait for the course to reopen the posting"], correctIndex: 2, explanation: "Lesson 19: do not apply to the 2026 posting; look for a newer one on Hawk-Eye's board.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "By lesson 19's reasoning, when did the US league game-day postings go up?", options: ["Midway through their seasons", "After their seasons had ended", "On the day of the first game", "Before their seasons began"], correctIndex: 3, explanation: "Reasoned: the NFL copies in April 2026 and the G League postings in October 2026, each before its season.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "How did European football hiring differ in the dates read?", options: ["It ran during the season, with immediate starts", "It closed a full year before the season began", "It hired only students, for the next summer", "It hired only through US staffing providers"], correctIndex: 0, explanation: "Reasoned from the Italy postings: published in October with \"Immediate\" starts, during the season.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Why does lesson 19 not call its pattern a calendar?", options: ["The NFL has forbidden publishing its calendar", "It comes from a handful of postings in one year", "Each posting's date was wrong when it was read", "The pattern reverses itself in odd-numbered years"], correctIndex: 1, explanation: "Lesson 19: a pattern from a handful of postings; one year's dates are not a calendar.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Why can't lesson 19 say whether every NFL stadium has its own operator posting?", options: ["The NFL publishes no posting at all", "Every club hires from one posting", "Copies for only two clubs were read", "The clubs refused to be contacted"], correctIndex: 2, explanation: "Lesson 19: copies for two clubs were read, and the course could not confirm whether every stadium has its own.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Why can't lesson 19 say when Hawk-Eye's US venue roles open?", options: ["Hawk-Eye has no US business at all", "Hawk-Eye posts its US roles in print", "The board blocked the course's reading", "None was open on its board that day"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-i): no technician role for an NFL, MLB or Big Ten venue was open on October 26, 2026.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "What does TeamWork Online's Hawk-Eye page offer to keep up with new roles?", options: ["\"Get job alerts\"", "A weekly webinar", "A printed digest", "A recruiter call"], correctIndex: 0, explanation: "TeamWork Online (n.d.): \"Get job alerts,\" with \"Stay up to date on new jobs from Hawk-Eye Innovations.\"", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Why does lesson 19 not explain how TeamWork Online's alerts work?", options: ["The alerts were discontinued in 2026", "Its home and help pages did not load", "Hawk-Eye asked the course not to say", "The alerts are only sent by post"], correctIndex: 1, explanation: "Lesson 19: TeamWork Online's own home and help pages did not load for the course's research.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Why keep a copy of any posting you apply to, per lesson 19?", options: ["Employers require a printed copy to enter", "Copies are needed to claim travel costs", "The original may be gone by the interview", "The law requires applicants to keep one"], correctIndex: 2, explanation: "Reasoned from the dates: the NFL source job was gone by late October, so save the posting with its date.", sourceLessonSlug: "where-and-when-postings-open" },
          { prompt: "Where does lesson 20 send you to practice signal flow, fiber and the network?", options: ["CREW-05, Arena transmission", "A vendor's operator course", "The NFL's training seminar", "CREW-00, Cables and Connectors"], correctIndex: 3, explanation: "Lesson 20: this course does not reteach them; practice them in CREW-00's lessons.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which posting line maps to CREW-00's SDI and return video lessons?", options: ["Audio and video path troubleshooting", "Willingness to drive our vans to grounds", "Fluent in Dutch and English", "A CV attached in English"], correctIndex: 0, explanation: "Lesson 20 maps \"an understanding of signal flow\" and \"Audio and video path troubleshooting and testing\" to CREW-00 lessons 4 and 7.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which CREW-00 lessons match \"Working with Fibre Optics\"?", options: ["17 and 27, the intercom and coiling only", "11, 12 and 13, fiber types to inspection", "19 and 20, network cable and Dante", "4 and 7, SDI and reference video"], correctIndex: 1, explanation: "Lesson 20: \"11 · Single-mode, multimode and the color codes,\" \"12 · LC, SC and ST\" and \"13 · Inspect before you connect.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which CREW-00 lesson matches \"Experience with Audio Over IP devices\"?", options: ["11, single-mode fiber", "4, SDI on coax", "20, Dante and ST 2110", "27, coil, label, run"], correctIndex: 2, explanation: "Lesson 20: \"20 · Dante, ST 2110, and why a media network is not the office network.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which CREW-00 lesson matches \"Networking\" and \"peripheral connectivity\"?", options: ["12, LC, SC and ST ends", "7, reference and timecode", "17, intercom on XLR", "19, network cable and PoE"], correctIndex: 3, explanation: "Lesson 20: \"19 · Network cable: categories, the 100-meter channel, etherCON and PoE.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "What does CREW-00 lesson 17 not cover that the NFL booth uses?", options: ["Two-way radios", "Wired beltpacks", "XLR connectors", "Party-line intercom"], correctIndex: 0, explanation: "Lesson 20: lesson 17 covers wired intercom beltpacks, not two-way radios.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which CREW-00 lessons match \"rigging cameras and running cables\" and troubleshooting?", options: ["11 and 12, fiber types and polish", "27 and 28, coiling and fault-finding", "19 and 20, network and Dante", "4 and 7, SDI and return video"], correctIndex: 1, explanation: "Lesson 20: \"27 · Coil, label and run\" and \"28 · Test, then find the fault.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "Who matched each posting line to a CREW-00 lesson?", options: ["The NFL, in its posting's training note", "Hawk-Eye, on its expression of interest", "This course, by what the lessons teach", "CREW-00's own authors, in its header"], correctIndex: 2, explanation: "Lesson 20: this course matched each posting line to the CREW-00 lesson that teaches it.", sourceLessonSlug: "what-to-practice" },
          { prompt: "When did Windows 10 reach its end of support, per Microsoft?", options: ["October 12, 2027", "October 14, 2026", "July 29, 2015", "October 14, 2025"], correctIndex: 3, explanation: "Microsoft (n.d.-c): \"Windows 10 has reached the end of support on October 14, 2025.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "What stopped for Windows 10 after its end of support, per Microsoft?", options: ["Support, software and security updates", "Sales of new PCs with any Windows on them", "All internet access from Windows 10 PCs", "Every program written for Windows 10"], correctIndex: 0, explanation: "Microsoft (n.d.-c): no more technical support, software updates or security updates.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which version does Microsoft call the final version of Windows 10?", options: ["21H1", "22H2", "1909", "24H2"], correctIndex: 1, explanation: "Microsoft (n.d.-b): version 22H2 \"will be the final version of Windows 10.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "Until when can consumer Extended Security Updates protect Windows 10, per Microsoft?", options: ["October 14, 2025", "December 31, 2026", "October 12, 2027", "April 15, 2026"], correctIndex: 2, explanation: "Microsoft (n.d.-c): consumer ESU \"can protect your Windows 10 device till October 12, 2027.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "By lesson 20's reasoning, what does a 2026 posting naming Windows 10 suggest?", options: ["That Windows 10 is still fully supported", "That the league bans all newer Windows", "That the role uses no computers at all", "An older system image or unedited text"], correctIndex: 3, explanation: "Reasoned: a year after end of support, it points to an older system image or posting text nobody updated.", sourceLessonSlug: "what-to-practice" },
          { prompt: "What does lesson 20 advise about Windows versions?", options: ["Practice current Windows; be ready for 10", "Practice only Windows 10, nothing newer", "Skip Windows; the booth runs on Linux", "Buy an Extended Security Update first"], correctIndex: 0, explanation: "Lesson 20: practice on current Windows, and be ready to meet Windows 10.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which Windows versions does Microsoft's Wi-Fi guide cover?", options: ["Windows 7 and Windows 8", "Windows 10 and Windows 11", "Windows 11 only", "Windows Server only"], correctIndex: 1, explanation: "Microsoft (n.d.-a): the guide applies to Windows 10 and Windows 11.", sourceLessonSlug: "what-to-practice" },
          { prompt: "What is the first step in Microsoft's Wi-Fi guide?", options: ["Reinstall the adapter driver", "Ping the default gateway", "Check the connection status", "Restart the modem and router"], correctIndex: 2, explanation: "Microsoft (n.d.-a), step 1: check the connection status.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which step of Microsoft's Wi-Fi guide comes second?", options: ["Try another device", "Run network commands", "Forget the network", "Check Airplane mode"], correctIndex: 3, explanation: "Microsoft (n.d.-a), step 2: check Airplane mode.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which frequency bands does Microsoft's guide suggest trying?", options: ["2.4 GHz and 5 GHz", "900 MHz and 60 GHz", "3.5 GHz and 28 GHz", "1.2 GHz and 10 GHz"], correctIndex: 0, explanation: "Microsoft (n.d.-a), step 5: try another frequency band, 2.4 GHz or 5 GHz.", sourceLessonSlug: "what-to-practice" },
          { prompt: "How must the step 7 network commands be run?", options: ["As a guest user, in any order", "As administrator, in a set order", "From the router's web page only", "On a second computer, remotely"], correctIndex: 1, explanation: "Microsoft (n.d.-a), step 7: run as administrator, in this order.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which command comes first in step 7 of Microsoft's guide?", options: ["ipconfig /flushdns", "ipconfig /renew", "netsh winsock reset", "ping the gateway"], correctIndex: 2, explanation: "Microsoft (n.d.-a): netsh winsock reset, netsh int ip reset, ipconfig /release, ipconfig /renew, ipconfig /flushdns.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which command comes last in step 7 of Microsoft's guide?", options: ["netsh winsock reset", "ipconfig /release", "netsh int ip reset", "ipconfig /flushdns"], correctIndex: 3, explanation: "Microsoft (n.d.-a): the order ends with ipconfig /flushdns.", sourceLessonSlug: "what-to-practice" },
          { prompt: "What is the last step of Microsoft's Wi-Fi guide?", options: ["Ping the default gateway", "Restart the computer", "Call the stadium help desk", "Replace the router"], correctIndex: 0, explanation: "Microsoft (n.d.-a), step 9: ping the default gateway.", sourceLessonSlug: "what-to-practice" },
          { prompt: "How do you find the default gateway's address for step 9?", options: ["Read the sticker under the stadium's desk", "Run ipconfig and read \"Default gateway\"", "Ask the broadcaster for its truck address", "Run netsh winsock reset and read it back"], correctIndex: 1, explanation: "Microsoft (n.d.-a): run ipconfig, find the \"Default gateway\" address, then ping it.", sourceLessonSlug: "what-to-practice" },
          { prompt: "By lesson 20's reasoning, why is restarting a stadium's router not yours to do?", options: ["Routers in stadiums cannot ever be restarted", "Microsoft's guide forbids step 4 at venues", "The venue's network belongs to someone else", "The league fines anyone who touches a router"], correctIndex: 2, explanation: "Reasoned: at a venue the network belongs to someone else; report it and let the owner decide.", sourceLessonSlug: "what-to-practice" },
          { prompt: "What does lesson 20 say about the posting's 40 words per minute?", options: ["The trade's standard for all crews", "A legal minimum for league work", "A speed for the league's test only", "One employer's figure on one date"], correctIndex: 3, explanation: "Lesson 20: one employer's figure on one date, not a rule for the trade.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which typing test does the NFL posting name?", options: ["None; it names only a speed", "The league's own online test", "A test given at the stadium", "A test from a staffing firm"], correctIndex: 0, explanation: "Lesson 20: the posting names a speed, not a test; time yourself on any typing test.", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which physical ask does the G League posting list?", options: ["Lift 100 pounds", "Work at heights", "Run two miles", "Swim fifty yards"], correctIndex: 1, explanation: "NBA (2026): \"work at heights.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "What physical work do Hawk-Eye's UK roles mention?", options: ["Mowing and marking the pitch lines", "Carrying players off on stretchers", "Rigging cameras and running cables", "Driving the team bus to matches"], correctIndex: 2, explanation: "Hawk-Eye Innovations (n.d.-g): \"physically demanding work, such as rigging cameras and running cables.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "Besides lifting, what physical demand does the NFL posting name?", options: ["Climbing the light towers", "Running the sideline chains", "Standing in the rain all game", "Sitting for long periods"], correctIndex: 3, explanation: "NFL (2026b): lift \"up to 30 pounds\" and sit for long periods.", sourceLessonSlug: "what-to-practice" },
          { prompt: "What documentation does the SEC desk produce, as posted?", options: ["Checklists, post-event reports, recovery plans", "Player injury reports written for the team doctors", "The referees' disciplinary match reports", "Broadcast rundowns for the TV networks"], correctIndex: 0, explanation: "Hawk-Eye Innovations (2026g): documentation for \"checklists, post-event reporting, and disaster recovery protocols.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "Where does the NFL operator record working hours?", options: ["On the club's paper log", "In a timekeeping system", "In the game report only", "On the referee's card"], correctIndex: 1, explanation: "NFL (2026b): \"Responsible for accurately reporting working hours in timekeeping system.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "What practice does lesson 20 suggest for documentation?", options: ["Copy a vendor's internal procedures", "Memorize the NFL's medical protocol", "Write a short report after every job", "Keep notes only when something fails"], correctIndex: 2, explanation: "Reasoned: after any job, report what you checked, what you could not check and why, what failed, and what you did.", sourceLessonSlug: "what-to-practice" },
          { prompt: "What habit does lesson 20 say the job asks you to drop?", options: ["Writing down every small fault", "Checking the radios before use", "Asking the remote desk for help", "Following the play like a fan"], correctIndex: 3, explanation: "NFL (2026b): \"Must be able to focus on the task at hand, not the game.\"", sourceLessonSlug: "what-to-practice" },
          { prompt: "Which of these is in the NFL posting's skills list?", options: ["Hardware diagnosis", "Video editing work", "Play calling", "Ticket sales"], correctIndex: 0, explanation: "NFL (2026b): Windows 10, Wi-Fi setup and troubleshooting, hardware diagnosis and peripheral connectivity, among others.", sourceLessonSlug: "what-to-practice" },
          { prompt: "What experience does Hawk-Eye's UK form ask about?", options: ["Coaching or refereeing", "Broadcast or live sports", "Medicine or nursing", "Retail or hospitality"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-g): \"any relevant experience in broadcast or live sports.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "By lesson 21's reasoning, what experience should a crew member list on that form?", options: ["Their years as a sports fan", "Their fantasy league results", "Their truck and arena days", "Their gym and fitness record"], correctIndex: 2, explanation: "Reasoned: the form asks for broadcast or live sports, so a crew member's truck and arena days are the experience to list.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What start question does the UK form ask?", options: ["Which football club do you support?", "How far will you commute?", "Who referred you to us?", "When can you start a new role?"], correctIndex: 3, explanation: "Hawk-Eye Innovations (n.d.-g): \"When can you start a new role?\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Which of these is a field on the UK expression of interest form?", options: ["Location", "Salary", "Photo", "Club"], correctIndex: 0, explanation: "Hawk-Eye Innovations (n.d.-g): name, email, resume, location, start date, visa sponsorship and relevant experience.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "In which language must Italy applicants attach a CV?", options: ["Italian", "English", "French", "German"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026e, 2026f): \"Please attach your CV in English.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Where does lesson 21 send you for help with the resume itself?", options: ["CREW-00 lesson 28 on fault-finding", "CREW-05 lesson 5 on network jobs", "Broadcasting lesson 5 on the resume", "This course's lesson 8 on licensing"], correctIndex: 2, explanation: "Lesson 21: Break Into Sports & Media Broadcasting lesson \"5 · Résumé, portfolio, and personal brand.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What is Sportradar's first stated hiring step?", options: ["A paid trial shift at a stadium", "A written exam on sports rules", "A typing test at 40 words a minute", "A screening call with management"], correctIndex: 3, explanation: "Sportradar (2026a, 2026b): \"Initial Screening: A call with the management team to understand your background and expectations.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "How does Sportradar describe its last hiring step?", options: ["Feedback and, if successful, an offer", "A six-month unpaid probation period", "A background check by the league office", "A panel interview with three referees"], correctIndex: 0, explanation: "Sportradar (2026a, 2026b): \"Receive feedback and, if successful, an offer!\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Why does lesson 21 not apply Sportradar's process to replay jobs?", options: ["Sportradar's process is secret by law", "It is one data company's process only", "Replay jobs never hold any interviews", "The NFL uses Sportradar to hire for it"], correctIndex: 1, explanation: "Lesson 21: it is one data company's process; the course does not assume replay vendors or leagues hire the same way.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What answer does lesson 21 carry over from lesson 8 for the medical booth?", options: ["Flag any injury you see to the referee", "Tell the coach what the replay showed", "Keep systems working; leave medical calls", "Decide when a player may go back in"], correctIndex: 2, explanation: "Lesson 8: keep the system and radios working, tag and play back what licensed staff ask, and leave every medical call to them.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What does lesson 21 suggest being ready to walk through in an interview?", options: ["The NFL's concussion protocol, step by step", "A vendor's operator screens, from memory", "The full rulebook of every league you know", "A fault you fixed, and the report after it"], correctIndex: 3, explanation: "Reasoned from the SEC and Rutgers postings: one fault found and fixed, step by step, and the report written after it.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Is lesson 21's interview advice a list of an employer's questions?", options: ["No; it is reasoned from the postings", "Yes; it is the NFL's published list", "Yes; Hawk-Eye's interview guide", "Yes; TeamWork Online's question bank"], correctIndex: 0, explanation: "Lesson 21: the part is the course's reasoning from the postings, not any employer's questions.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "How were benefits offered to the Rutgers technician?", options: ["Free, paid in full by Hawk-Eye itself", "At their own cost, through the provider", "Through Rutgers University's own plan", "Not at all, under any arrangement"], correctIndex: 1, explanation: "Hawk-Eye Innovations (n.d.-f): \"you may be eligible to enrol in benefits, at your cost, through the managed service provider.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What do the Italy postings call the worker?", options: ["The employee", "The volunteer", "The consultant", "The trainee"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026e, 2026f): \"the consultant,\" in the working-day section.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "How was the Bolzano technician's arrangement described?", options: ["\"Permanent\"", "\"Internship\"", "\"Salaried\"", "\"Freelance\""], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026f): \"Freelance.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "How many hours of tasks a month does the Genius Sports analyst posting give?", options: ["Around 40 to 80", "Exactly 160", "Around 10 to 20", "At least 200"], correctIndex: 0, explanation: "Genius Sports (2026a): \"Around 40-80 hours of tasks per month.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What storage must the Genius Sports analyst's own computer have?", options: ["At least 64GB", "At least 512GB", "At least 2TB", "At least 128GB"], correctIndex: 1, explanation: "Genius Sports (2026a): a computer with \"at least 512GB storage.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What connection does Genius Sports ask its analysts to have?", options: ["At least 5 Mbps down and 1 Mbps up", "A wired fiber line of 1 Gbps or more", "At least 50 Mbps down and 10 Mbps up", "Any mobile phone hotspot will do"], correctIndex: 2, explanation: "Genius Sports (2026a): \"at least 50 Mbps download and 10 Mbps upload.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Why does lesson 21 quote KINEXON's employment line in German?", options: ["KINEXON forbids any translation of it", "The phrase has no English equivalent", "German law requires quoting it as is", "The course's translation is unchecked"], correctIndex: 3, explanation: "Lesson 21, after lesson 17: the course's translation has not been checked by a German reader.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "How did the G League posting describe its arrangement?", options: ["A temporary Project Employee role", "A freelance consultant contract", "A permanent full-time position", "An unpaid volunteer placement"], correctIndex: 0, explanation: "NBA (2026): \"Project Employee\"; a \"temporary position\" not to exceed 10 months.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "How long was the Netherlands operator's contract, as posted?", options: ["Twelve months, rolling", "Six months, fixed term", "One season, freelance", "Open-ended, permanent"], correctIndex: 1, explanation: "Hawk-Eye Innovations (2026d): \"6-Month Fixed-Term contract,\" 24 hours a week.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Which posting in lesson 21's table lists healthcare and paid sick leave?", options: ["The Sofia analyst", "The Italy technicians", "The SEC coordinator", "The Genius Sports analyst"], correctIndex: 2, explanation: "Hawk-Eye Innovations (2026g): \"Full time,\" with healthcare, paid vacation and paid sick leave.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What two things does the NFL operator posting give, without stating employment type?", options: ["A union card and a pension plan", "A company car and a phone allowance", "A signing bonus and a relocation fund", "A timekeeping duty and a salary line"], correctIndex: 3, explanation: "NFL (2026b): operators report hours \"in timekeeping system,\" and the posting has a salary line, but it does not state the employment type.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What does lesson 21 do about the NFL operator's employment type?", options: ["Leaves it open and does not guess", "Calls it an NFL staff job outright", "Calls it a staffing provider's job", "Calls it a freelance contract role"], correctIndex: 0, explanation: "Lesson 21: the posting does not say whether the operator is an NFL employee, a contractor or a staffing provider's worker, and the course does not guess.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What is the first of lesson 21's three questions about an offer?", options: ["How far is the venue?", "Who employs you?", "Which team will play?", "Who else applied?"], correctIndex: 1, explanation: "Lesson 21: who employs you; what the pay unit is and covers; and what comes with it.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "At Rutgers, whose offer was \"$28 per hour,\" by lesson 21?", options: ["The Big Ten's own office", "Rutgers University's", "The staffing provider's", "The NFL's league office"], correctIndex: 2, explanation: "Lesson 21: the staffing provider was the employer, so the pay was that provider's offer for work at a Hawk-Eye system.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Which posting asks you to supply your own computer and connection?", options: ["Hawk-Eye's SEC live coordinator role", "The NFL's injury video operator role", "The NBA's G League representative role", "Genius Sports' remote analyst role"], correctIndex: 3, explanation: "Genius Sports (2026a): your own computer and an internet connection meeting its minimums.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Who should answer tax, contract and benefits law questions, per lesson 21?", options: ["A qualified adviser where you live", "The vendor's on-site technician", "This course's quiz explanations", "A fellow crew member at the venue"], correctIndex: 0, explanation: "Lesson 21: those questions belong to a qualified adviser where you live; the course does not answer them.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "Where does lesson 21 point for freelancing and building credits in broadcasting?", options: ["CREW-00 lessons 19 and 20", "Broadcasting lessons 14 and 15", "This course's lessons 2 and 3", "CREW-05 lessons 4 and 5"], correctIndex: 1, explanation: "Lesson 21: \"14 · Internships, freelancing, and building credits\" and \"15 · Unions, networking, and landing the first job.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "How many pay units did lesson 18 show, which lesson 21 recalls?", options: ["Two, hourly and yearly", "One, since all are hourly", "Six, across seven postings", "Ten, one for each league"], correctIndex: 2, explanation: "Lesson 21 recalls lesson 18: six units, including \"not stated,\" across seven postings.", sourceLessonSlug: "applying-and-how-you-are-employed" },
          { prompt: "What does the Sofia posting expect of its consultants' availability?", options: ["Only on match weekends", "One day each fortnight", "Only during tournaments", "At least 4 days per week"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026h): consultants \"are expected to be available for at least 4 days per week.\"", sourceLessonSlug: "applying-and-how-you-are-employed" },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7: Capstone
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "capstone-runbook-from-the-public-record",
      title: "22 · Capstone: a game-day runbook from the public record",
      section: "7 · Capstone",
      recallContent: [
        {
          prompt: "Through whom was Hawk-Eye's Rutgers technician employed, and how were benefits offered?",
          answer: "A third-party managed service provider; benefits \"at your cost,\" through that provider (Hawk-Eye Innovations, n.d.-f).",
        },
        {
          prompt: "What three questions does lesson 21 say to ask before accepting an offer?",
          answer: "Who employs you; what the pay unit is and what it covers; and what comes with it.",
        },
      ],
      body: `${QR}

**The task.** Choose one of two written projects:

- **Option A, a runbook.** Write a game-day runbook for one role, from the public record, with every step cited.
- **Option B, a comparison.** Compare two vendors' systems from their own pages.

Either way you work only from sources a reader can open, and you show plainly where the public record stops. Nothing here asks you to operate a system, so the capstone is written, not filmed.

**Rules for both options.**

1. **Every line is cited,** with a locator a reader can follow: a posting's section, a page, a paragraph, as in this course's Sources lists.
2. **Postings are dated.** Pay, terms and dates are "as posted on" a date. A posting past its deadline is written as a record, not an open ad (lesson 19).
3. **A vendor's figure is the vendor's.** Write "the vendor says" beside any accuracy, speed or latency claim (lesson 2).
4. **No medical step.** A line that would tell someone how to recognize, assess or clear an injury is out. Your runbook may say whom the role supports and what it keeps working, in the source's words (lessons 5 to 8).
5. **No screens, no internal procedures.** Where a source says "in accordance with standard procedures" or "the relevant checklist," write that the step exists and that its procedure is the vendor's (lessons 3 and 14).
6. **A gap is written as a gap.** "No source read says..." is a finished line, not a failure.
7. **No real people.** No athlete, game or injury is used as an example, and no private person is named.

**Option A: a model opening.** Here are the first lines of a runbook for the NFL injury video review operator, built from lessons 13 to 15. Use it to see the shape; then write your runbook for a different role.

| When | Step | Source |
|---|---|---|
| A week or more out | Tell the League's Player Health and Safety department of any scheduling conflict | NFL (2026b), "Responsibilities" |
| Kickoff minus 4 hours | Arrive at the stadium | NFL (2026b), "Responsibilities" |
| Before kickoff minus 3 hours | Have the radios charged: the case goes out "fully charged" (reasoned from the source) | NFL (n.d.-f), "Countdown to Kickoff" |
| Kickoff minus 3 hours | Case of radios to the visiting club's athletic training staff, at the visiting locker room entrance | NFL (n.d.-f), "Countdown to Kickoff" |
| Kickoff minus 2 hours | Radios to the UNCs, the airway management physician, the emergency response physician and the AT spotters | NFL (n.d.-f), "Countdown to Kickoff" |
| Kickoff minus 60 minutes | The medical meeting tests communication equipment, so the radios must already work | NFL (n.d.-f), "60-Minute Medical Meeting" |
| During the game | Keep the Injury Video Review System functional; support the AT spotters, the booth UNC and team medical personnel "as it relates to reviewing injury video" | NFL (2026b), "Summary" |
| Gap | The system's pre-game check procedure: not public | NFL (2026b) says only that the system must be "functional on game day" |
| After the game | Game report in the Game Management System; hours in the timekeeping system | NFL (2026b), "Responsibilities" |
| Leave | About 45 minutes to 1 hour after the game | NFL (2026b), "Physical Demands/Travel" |

**Choosing your role.** Good choices are the roles with the fullest public record: the Firenze tracking technician, the Bolzano video technician (both in lesson 13), the Rutgers Big Ten technician, the SEC remote desk, or the G League representative. A runbook for one role can borrow a league step, such as the referees' goal-line test in Law 1, if you cite the league document and say which role the step belongs to.

**Decisions while you write.** This is an invented walk-through with no real venue or people in it. Read each beat, decide your call, then reveal the answer.

**Beat 1: a step from a conversation.** Someone tells you operators "sync the medical monitors" before kickoff.

:::reveal What is your call on the step from a conversation? ||| Leave it out. A conversation is not a source a reader can open, and no posting or league page read for this course supports that step (lesson 13).

**Beat 2: an upper bound.** The Firenze posting says arrival is "up to 6 hours pre-Kick Off," and you want to write "Arrive 6 hours before kickoff."

:::reveal What is your call on the Firenze arrival line? ||| Write "up to 6 hours before kickoff," quoted. The posting gives an upper bound, not a fixed call time (Hawk-Eye Innovations, 2026e).

**Beat 3: the calibration steps.** Your tracking technician's runbook needs the goal-line calibration.

:::reveal What is your call on the calibration steps? ||| Write that the step exists and follows "the relevant checklist," and that the procedure is the vendor's and not public (Hawk-Eye Innovations, 2026e; lessons 3 and 14).

**Beat 4: the pay line.** You want to add "$38/hour" to the NFL operator's runbook header.

:::reveal What is your call on the NFL pay line? ||| Write "$38 USD at both ends of the range, unit not stated, created April 15, 2026" (NFL, 2026b). Never add "an hour" (lesson 16).

**Beat 5: a medical line.** A draft step reads "watch the replay for signs of a concussion."

:::reveal What is your call on the medical line? ||| Cut it. The operator supports licensed staff and makes no medical call; the course never teaches signs (lessons 5 and 8).

**Option B: what to compare.** Pick two vendors whose own pages this course cited: Hawk-Eye and TRACAB for optical tracking (lessons 2 and 4), or Catapult and KINEXON for worn tracking (lesson 4). Compare them, row by row, on what each system tracks and how (cameras or radio tags); points per athlete or what is tracked, in the vendor's words; rate and latency, marked "the vendor says"; where it is installed; and who uses the output. End with a row headed "What neither page says."

**A model row, and the trap in it.**

| Row | TRACAB | Hawk-Eye |
|---|---|---|
| Speed claim | "Data delivered within 0.15 seconds," the vendor says (TRACAB Technologies, n.d.) | Offside alerts reach officials' headsets "in under a second," the vendor says (Hawk-Eye Innovations, 2026a) |

The two figures do not measure the same thing: one is data delivery, the other an alert reaching officials. A good comparison says so in the row instead of ranking the two vendors by the numbers.

**You pass Option A when:**

- the runbook has at least ten timed steps for one role, each with a citation and a locator;
- every posting is dated, and every pay or terms line is "as posted";
- at least one line names a gap in the public record;
- no step is medical, and no step describes a screen or an internal procedure;
- it ends with a References list in APA 7 style.

**You pass Option B when:**

- the comparison has at least eight rows, each cell cited to the vendor's own page with a locator;
- every vendor figure is marked "the vendor says";
- at least one row notes where the two figures measure different things;
- it has a "What neither page says" row;
- it ends with a References list in APA 7 style.

:::reveal Why must the Option A runbook be for a different role than the model's? ||| The model already covers the NFL operator from lessons 13 to 15. The capstone asks you to build one yourself, from the record of another role.

## Sources
- ${NFL_IVR} Locator: "Summary"; "Responsibilities"; "Physical Demands/Travel"; "Salary".
- ${NFL_PREP} Locator: "Countdown to Kickoff," 3 hours and 2 hours; "60-Minute Medical Meeting".
- ${HE_FIRENZE} Locator: "Working day expectations"; "Key Responsibilities," item 5.
- ${TRACAB} Locator: "Live In-Game Data".
- ${HE_SAOT} Locator: "How Advanced SAOT Works".`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz \u00b7 Capstone",
      section: "7 \u00b7 Capstone",
      body: "A graded check on the capstone's rules, the model runbook, the decisions while you write, the vendor comparison and what it takes to pass. Each answer links back to the lesson that teaches it.",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          { prompt: "What are the capstone's two options?", options: ["A filmed demo, or a live system test", "A league exam, or a vendor certificate", "A cited runbook, or a vendor comparison", "A job application, or an interview"], correctIndex: 2, explanation: "Lesson 22: Option A, a game-day runbook for one role with every step cited; Option B, a comparison of two vendors' systems from their own pages.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Why is the capstone written rather than filmed?", options: ["Filming at stadiums is banned by every league", "The vendors' screens are public, so no need", "A written task needs no sources at all", "Nothing in it asks you to operate a system"], correctIndex: 3, explanation: "Lesson 22: nothing here asks you to operate a system, so the capstone is written, not filmed.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What must every line of a capstone carry?", options: ["A citation with a locator", "A photo of the equipment", "A vendor's written approval", "A signature from a referee"], correctIndex: 0, explanation: "Rule 1: every line is cited, with a locator a reader can follow.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Which of these is a locator, as the capstone uses the word?", options: ["The name of the person who told you", "A posting's section or a page number", "The date you first heard of the job", "The vendor's logo on the equipment"], correctIndex: 1, explanation: "Rule 1: a posting's section, a page or a paragraph, as in this course's Sources lists.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How must pay, terms and dates appear in a capstone?", options: ["Rounded to market rates", "Converted to yearly pay", "\"As posted on\" a date", "Left out of the runbook"], correctIndex: 2, explanation: "Rule 2: postings are dated, and pay, terms and dates are \"as posted on\" a date.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How is a posting past its deadline written in a capstone?", options: ["As an open ad, with its pay", "It is left out of the work", "As a rumor, without a date", "As a record, not an open ad"], correctIndex: 3, explanation: "Rule 2: a posting past its deadline is written as a record, not an open ad (lesson 19).", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What must you write beside a vendor's accuracy or latency claim?", options: ["\"The vendor says\"", "\"Independently tested\"", "\"League approved\"", "\"Industry standard\""], correctIndex: 0, explanation: "Rule 3: a vendor's figure is the vendor's; write \"the vendor says\" (lesson 2).", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Which kind of line does rule 4 keep out of a runbook?", options: ["One on handing out the charged radios", "One on recognizing or clearing injuries", "One on arriving before the kickoff", "One on filing the game report after"], correctIndex: 1, explanation: "Rule 4: no line that would tell someone how to recognize, assess or clear an injury (lessons 5 to 8).", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What may a runbook say about the medical staff, under rule 4?", options: ["How to assess a player before the next play", "When a player may return to the game", "Whom the role supports, in the source's words", "Which signs of injury the operator watches"], correctIndex: 2, explanation: "Rule 4: the runbook may say whom the role supports and what it keeps working, in the source's words.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "A source says \"in accordance with standard procedures.\" What do you write?", options: ["The procedure, guessed from similar systems", "Nothing at all; leave the step out entirely", "The procedure from a friend who worked it", "The step exists; its procedure is the vendor's"], correctIndex: 3, explanation: "Rule 5: write that the step exists and that its procedure is the vendor's (lessons 3 and 14).", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How does rule 6 treat a gap in the public record?", options: ["As a finished line, written as a gap", "As a failure that sinks the runbook", "As a cue to fill in a likely answer", "As a reason to switch to Option B"], correctIndex: 0, explanation: "Rule 6: \"No source read says...\" is a finished line, not a failure.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What does rule 7 forbid as an example?", options: ["A league's published rulebook", "A real athlete, game or injury", "A vendor's own product page", "A dated job posting copy"], correctIndex: 1, explanation: "Rule 7: no athlete, game or injury is used as an example, and no private person is named.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "For which role is the capstone's model runbook written?", options: ["The Firenze tracking technician", "The SEC live operations coordinator", "The NFL injury video review operator", "The G League representative"], correctIndex: 2, explanation: "Lesson 22: the model opening is for the NFL injury video review operator, built from lessons 13 to 15.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What is the model runbook's first line?", options: ["Arrive at the stadium at kickoff", "Calibrate the goal-line cameras", "Upload match data to the remote center", "Report scheduling conflicts a week out"], correctIndex: 3, explanation: "NFL (2026b), \"Responsibilities\": tell Player Health and Safety of any scheduling conflict at least one week before game day.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "In the model runbook, when does the operator arrive?", options: ["Kickoff minus 4 hours", "Kickoff minus 7 hours", "Kickoff minus 1 hour", "The day before, at noon"], correctIndex: 0, explanation: "NFL (2026b): arrive four hours before kickoff.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Why does the model mark radio charging as \"reasoned from the source\"?", options: ["The posting lists a charging schedule", "The source says only \"fully charged\"", "The league forbids charging at stadiums", "The vendor's manual gives the time"], correctIndex: 1, explanation: "NFL (n.d.-f): the case goes out \"fully charged,\" so charging before the 3-hour handoff is reasoned, not stated.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "In the model, who gets radios at kickoff minus 2 hours?", options: ["The coaches and the team captains", "The broadcast crew in the truck", "UNCs, physicians and AT spotters", "The referee and the chain crew"], correctIndex: 2, explanation: "NFL (n.d.-f): the UNCs, airway management physician, emergency response physician and AT spotters.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Why must the radios work before the 60-minute line in the model?", options: ["The radios are collected at that time", "Kickoff is moved if they are not ready", "The referee issues new radios then", "The meeting tests communication gear"], correctIndex: 3, explanation: "NFL (n.d.-f): the 60-minute medical meeting tests communication equipment.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What does the model's \"Gap\" line record?", options: ["The system's check procedure is not public", "The operator's pay unit is an hourly rate", "The operator diagnoses players at halftime", "The posting's created date is unknown"], correctIndex: 0, explanation: "Lesson 22: the posting says only that the system must be \"functional on game day\"; the check procedure is not public.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "When does the model runbook say the operator leaves?", options: ["Right at the final whistle", "About 45 minutes to 1 hour after", "Up to 2 hours after the match", "At halftime, once checked"], correctIndex: 1, explanation: "NFL (2026b), \"Physical Demands/Travel\": leave about 45 minutes to 1 hour after the game.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "For which role should your own Option A runbook be written?", options: ["The model's role, copied out", "Any medical role in the booth", "A role other than the model's", "A role you invent yourself"], correctIndex: 2, explanation: "Lesson 22: use the model to see the shape, then write your runbook for a different role.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Which role is suggested for Option A because its public record is full?", options: ["The NFL booth AT spotter", "The team's head physician", "The broadcast director", "The Bolzano video technician"], correctIndex: 3, explanation: "Lesson 22: Firenze, Bolzano, Rutgers, the SEC remote desk or the G League representative.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "May an Option A runbook borrow a league step, such as Law 1's referees' test?", options: ["Yes, if cited and assigned to its role", "No, runbooks may cite postings only", "Yes, without any citation needed", "No, league documents are private"], correctIndex: 0, explanation: "Lesson 22: you may borrow a league step if you cite the league document and say which role the step belongs to.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What is your call on a step heard in a conversation?", options: ["Keep it; a colleague is a source", "Leave it out; no source supports it", "Keep it, marked \"the vendor says\"", "Keep it, with today's date on it"], correctIndex: 1, explanation: "Beat 1: a conversation is not a source a reader can open, and no posting or league page supports \"sync the medical monitors\" (lesson 13).", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How do you write the Firenze arrival time in a runbook?", options: ["\"Exactly 6 hours before the kickoff\"", "\"About 4 hours before kickoff\"", "\"Up to 6 hours before kickoff,\" quoted", "\"At least 6 hours before kickoff\""], correctIndex: 2, explanation: "Beat 2: the posting gives an upper bound, \"up to 6 hours pre-Kick Off,\" not a fixed call time (Hawk-Eye Innovations, 2026e).", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What is your call on the goal-line calibration steps?", options: ["Copy the steps from another vendor's guide", "Invent steps that seem likely to be right", "Leave calibration out of the runbook", "Note the step and \"the relevant checklist\""], correctIndex: 3, explanation: "Beat 3: write that the step exists and follows \"the relevant checklist\"; the procedure is the vendor's and not public.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How should the NFL operator's pay appear in a runbook header?", options: ["$38 USD, unit not stated, with its date", "$38 an hour, the standard league rate", "$38,000 a year, plus game-day bonuses", "Left out, since pay is never public"], correctIndex: 0, explanation: "Beat 4: \"$38 USD at both ends of the range, unit not stated, created April 15, 2026\" (NFL, 2026b). Never add \"an hour.\"", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What is your call on \"watch the replay for signs of a concussion\"?", options: ["Keep it; it helps the doctors", "Cut it; it is a medical line", "Keep it, cited to the posting", "Soften it to \"look for hits\""], correctIndex: 1, explanation: "Beat 5: the operator supports licensed staff and makes no medical call; the course never teaches signs (lessons 5 and 8).", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Which vendor pair does lesson 22 suggest for an optical comparison?", options: ["Catapult and KINEXON", "Sportradar and Genius", "Hawk-Eye and TRACAB", "DV Sport and Sony"], correctIndex: 2, explanation: "Lesson 22: Hawk-Eye and TRACAB for optical tracking (lessons 2 and 4); Catapult and KINEXON for worn tracking.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Which vendor pair does lesson 22 suggest for a worn-tracking comparison?", options: ["Hawk-Eye and TRACAB", "TRACAB and Genius Sports", "Hawk-Eye and Sportradar", "Catapult and KINEXON"], correctIndex: 3, explanation: "Lesson 22: Catapult and KINEXON for worn tracking (lesson 4).", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Where must Option B's facts come from?", options: ["Each vendor's own pages", "Fan forums and comments", "A rival vendor's claims", "An unnamed insider's tip"], correctIndex: 0, explanation: "Lesson 22: compare two vendors' systems from their own pages, each cell cited with a locator.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What row must end an Option B comparison?", options: ["\"Which vendor is best\"", "\"What neither page says\"", "\"Which costs the least\"", "\"Which league prefers it\""], correctIndex: 1, explanation: "Lesson 22: end with a row headed \"What neither page says.\"", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What does TRACAB's page claim for data delivery?", options: ["Within 15 seconds", "Within 1.5 minutes", "Within 0.15 seconds", "In real time at 1 ms"], correctIndex: 2, explanation: "TRACAB Technologies (n.d.): \"Data delivered within 0.15 seconds,\" the vendor says.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What does Hawk-Eye claim for its offside alerts to officials?", options: ["In under a minute", "In under 10 ms", "In two seconds flat", "In under a second"], correctIndex: 3, explanation: "Hawk-Eye Innovations (2026a): alerts reach officials' headsets \"in under a second,\" the vendor says.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "What is the trap in the model comparison row?", options: ["The two figures measure different things", "One of the two vendors made up its figure", "Both vendors quote the very same number", "The figures are in two different languages"], correctIndex: 0, explanation: "Lesson 22: one is data delivery, the other an alert reaching officials, so the row should say so rather than rank them.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How does lesson 22 say to handle two figures that measure different things?", options: ["Pick the faster number as the winner", "Say so in the row; do not rank by them", "Average the two numbers into one", "Drop the row from the comparison"], correctIndex: 1, explanation: "Lesson 22: a good comparison says so in the row instead of ranking the vendors by the numbers.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How many timed steps must an Option A runbook have to pass?", options: ["At least three", "Exactly five", "At least ten", "At least thirty"], correctIndex: 2, explanation: "Lesson 22: at least ten timed steps for one role, each with a citation and a locator.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How many rows must an Option B comparison have to pass?", options: ["Exactly two", "At least twenty", "No set number", "At least eight"], correctIndex: 3, explanation: "Lesson 22: at least eight rows, each cell cited to the vendor's own page.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Which of these is required to pass Option A?", options: ["At least one line naming a gap", "A photograph of the venue itself", "A quote from a team doctor", "A signed vendor approval"], correctIndex: 0, explanation: "Lesson 22: at least one line names a gap in the public record.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Which of these is required to pass Option B?", options: ["A recommendation of one vendor", "A row on figures that differ in kind", "A current price for each of the systems", "A league official's sign-off"], correctIndex: 1, explanation: "Lesson 22: at least one row notes where the two figures measure different things.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "How must both capstone options end?", options: ["With a vendor's logo and contact", "With a summary of medical signs", "With a References list in APA 7", "With the learner's pay request"], correctIndex: 2, explanation: "Lesson 22: both end with a References list in APA 7 style.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
          { prompt: "Which of these would fail an Option A runbook?", options: ["A step dated \"as posted\" with its source", "A gap line naming what is not public", "A step citing a league's own page", "A step describing a vendor's screen"], correctIndex: 3, explanation: "Lesson 22: no step may describe a screen or an internal procedure.", sourceLessonSlug: "capstone-runbook-from-the-public-record" },
        ],
      },
    },
  ],
};
