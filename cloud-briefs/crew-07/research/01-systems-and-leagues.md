# The Sideline's Other Crew: Tracking Systems and the Leagues' Rules

**Researched:** October 26, 2026. Every source tagged V below was fetched and read that day.

**Scope.** Outline sections 1 (what a tracking array is) and 3 (the leagues and the rules) of `cloud-briefs/crew-07/00-approved-brief.md`. Section 2 (medical review), sections 4 to 6 (game day, jobs, hiring) and the job postings in brief section 6 are other packs' work; where a fact here touches them, it says so.

**Tags.**

- **V** = read today in a page or PDF that was fetched and read in full or at the cited locator. A search-result snippet is never V.
- **I** = inferred from V facts, with the reasoning written beside it. Teach only with the reasoning shown.
- **A** = assumed. Never taught as fact.

**Source kinds.** "Vendor" means the company describing its own product: true that the vendor says it, not independently tested. "League" or "governing body" means the rule owner. "Trade press" (Sports Video Group) and "news" (an Associated Press story) are secondary and named as such.

**How pages were fetched.** Most pages were fetched with a plain `curl` request and read as text; PDFs were read as text with page numbers kept. Six pages on three sites (two on `pr.nba.com`, two on `official.nba.com`, two `atptour.com` news pages) refused plain `curl` with a 403 but were readable through the research tool's standard web fetch, which identifies itself normally; those rows are marked "(read via web fetch)", and that tool returns extracted quotations rather than the raw page, so they deserve a browser check. No user agent was spoofed and no cache or proxy copy was used. A reviewer may want to open those pages in a browser before release.

---

## 1. What a tracking array is

### 1a. The optical array: cameras, points, rates, latency

| Fact | Tag | Source |
|---|---|---|
| Hawk-Eye's three core technologies are "VIDEO REPLAY" ("Our multi-angle replay tech underpins our video capture, review & clipping capabilities"), "TRACK" ("Our optical tracking & camera calibration powers performance, ball & object tracking") and "INSIGHT" (data collation through visualisation) | V (vendor) | Hawk-Eye Innovations (n.d.-d), "Our Technologies" block |
| SkeleTRACK tracks "29 skeletal points on each player in real-time"; Hawk-Eye says it has been used since 2018 in "more than 32,000 matches across football, baseball, basketball, American football, and ice hockey" | V (vendor) | Hawk-Eye Innovations (n.d.-e), "Next-Gen Officiating with SkeleTRACK" |
| In the NBA, Hawk-Eye's pose product "uses 12 cameras installed at each arena to capture 29 points on each player's body" | V (trade press, re-fetched today) | Dachman (2023), paragraph 5 |
| The NBA's 2023 release says Hawk-Eye's 3D optical tracking captures the movement of each player and the ball "all at sub-second latency," beginning with the 2023-24 season | V (league; read via web fetch) | National Basketball Association [NBA] (2023), release text |
| FIFA's semi-automated offside technology (SAOT) "uses 12 dedicated tracking cameras mounted underneath the roof of the stadium to track the ball and up to 29 data points of each individual player, 50 times per second" | V (governing body) | Fédération Internationale de Football Association [FIFA] (n.d.-b), "How does it work?" paragraph 1 |
| For Qatar 2022, a sensor inside the match ball "sends ball data to the video operation room 500 times per second" to detect the kick point | V (governing body) | FIFA (n.d.-b), "How does it work?" paragraph 2 |
| Hawk-Eye's Advanced SAOT: "an array of high-frame rate tracking cameras captures 29 skeletal data points for each player"; offside alerts reach on-field officials' headsets "in under a second" | V (vendor) | Hawk-Eye Innovations (2026a), "How Advanced SAOT Works" and "The Evolution" |
| The Premier League's SAOT uses "up to 30 newly installed cameras mounted around Premier League stadiums," several of them "capturing footage at 100 frames per second, twice the frame rate of typical broadcast cameras" | V (league) | Premier League (2025b), section on cameras |
| Those cameras track the ball and "up to 10,000 surface 'mesh' data points per player" | V (league) | Premier League (2025b), same section |
| TRACAB, per EA's acquisition announcement, "tracks nearly everything happening on the field or pitch at 60Hz per second [sic], generating 600 million data points per game, including 65 unique data points per player and referee by capturing live skeleton data from 21 joints" | V (vendor's new owner) | Electronic Arts (2025), "Accelerating Realism with TRACAB" |
| TRACAB Optical: "Data delivered within 0.15 seconds"; "Installed in over 300 stadiums"; "modular camera positioning suitable to a wide variety of stadium designs"; can be "fixed positions for long-term deployments or as a temporary mobile setups" | V (vendor) | TRACAB Technologies (n.d.), "Live In-Game Data" and "Adaptable to Any Scale" |
| Hawk-Eye goal-line technology (GLT) "utilises 14 tracking cameras permanently installed in each stadium" and sends a "validated and encrypted signal" to the referee's smartwatch "in under one second" | V (vendor) | Michaelides (2026), "How It Works: The Technical Backbone" |
| MLB: "Each club now has 12 Hawk-Eye cameras arrayed around its ballpark"; five are high-frame-rate cameras for bat and pitch tracking, "upgraded from 100 frames per second to 300 fps in 2023"; the other seven track players and batted balls | V (league) | Major League Baseball [MLB] (n.d.), "About Statcast" paragraph 4 |
| MLB says the Hawk-Eye system raised the share of batted balls tracked "from roughly 89% to 99%" | V (league) | MLB (n.d.), "About Statcast" paragraph 4 |
| AP reported in June 2025 that NHL tracking cameras "capture 29 skeletal points on each player and three more on sticks" | V (news, secondary) | Whyno (2025), paragraph beginning "The technology has improved" |
| The WNBA's tracking provider (Second Spectrum, a Genius Sports company) uses "an array of cameras arranged in each WNBA arena to collect low-latency, 3D player pose and ball-tracking data" | V (league; read via web fetch) | Women's National Basketball Association [WNBA] (2024), release text |

### 1b. Calibration, as vendors and governing bodies describe it

| Fact | Tag | Source |
|---|---|---|
| Hawk-Eye names "camera calibration" as part of its tracking technology: "Our optical tracking & camera calibration powers performance, ball & object tracking" | V (vendor) | Hawk-Eye Innovations (n.d.-d), "TRACK" |
| Before SAOT, the Premier League's video assistant referee (VAR) worked "with replay operators (RO) to manually determine the 'kick-point' for the offside decision and then 'draw' calibrated lines with a crosshair on the relevant defender and attacker, using multiple camera angles" | V (league) | Premier League (2025b), "What is semi-automated offside technology?" |
| FIFA's GLT guidance: in busy stadiums "the provider must have enough time to calibrate the system in real match conditions, which will require full pitch access with competition goals, competition lighting and official field markings" | V (governing body) | FIFA (n.d.-a), "Installation process" paragraph 2 |
| Installing a GLT system "will typically take around a week"; the provider may need access to "the pitch, floodlighting and all technical areas of the stadium" | V (governing body) | FIFA (n.d.-a), "Installation process" paragraph 1 |
| "The final installation test checks that the system is functional and accurate"; after it, the test institute and competition organiser sign an acceptance form and FIFA certifies the installation for "12 months"; "A retest is necessary once the certification expires" | V (governing body) | FIFA (n.d.-a), "Certification process" |
| Hawk-Eye says its GLT shows "accuracy of under 1mm during FIFA Installation Tests," which is "the necessary condition to maintain the FIFA certification" | V (vendor) | Michaelides (2026), "Unmatched Accuracy" |
| Law 1: "Where GLT is used, the referee must test the technology's functionality before the match as set out in the Testing Manual"; if it fails, "the referee must not use the GLT system and must report this" | V (governing body) | The International Football Association Board [IFAB] (2026), Law 1.11, "Requirements and specifications of GLT," p. 52 |
| The NFL's Art McNally GameDay Central (AMGC): "Before the games begin, staff conduct technology checks to ensure they can communicate with officials at each stadium and see video of every game" | V (league) | National Football League [NFL] (n.d.-b), "Gameday at AMGC" paragraph 2 |
| What "calibration" means in plain terms: fixing each camera's position and view against the field's real, measured geometry (goals, lines, markings) so that a point in the picture maps to a true position on the field | I | Reasoning: FIFA ties calibration to "competition goals, competition lighting and official field markings" (FIFA, n.d.-a), and the Premier League describes offside lines as "calibrated" against the field (Premier League, 2025b). No fetched source gives a technical definition; see open checks |

### 1c. Who uses the output

| Fact | Tag | Source |
|---|---|---|
| NBA tracking "will enhance our officiating, power significant insights for our teams," and feed "virtual game recreations, dynamic visualizations, unique content development and gamification" | V (league; read via web fetch) | NBA (2023), release text |
| Sportradar, "the league's exclusive data provider," works alongside Hawk-Eye to generate tracking data and "automatically generate events, metrics, advanced stats" | V (trade press) | Dachman (2023), paragraph 8 |
| Second Spectrum stayed on as "an official NBA League Pass augmentation provider and an official NBA Team Basketball analytics provider" | V (trade press) | Dachman (2023), paragraph 1 and section "Second Spectrum Stays in the Mix" |
| NFL Next Gen Stats data is used by the 32 clubs (game planning), Football Operations (improving the game), Player Health & Safety ("to improve the safety of the players") and NFL media and broadcast partners | V (league) | NFL (n.d.-c), last two paragraphs |
| Hawk-Eye's analyst tools include "Injury Review," which lets medical teams "zoom, tag, and archive multi-angle video" | V (vendor) | Hawk-Eye Innovations (n.d.-c), "Powering Analysis with Data & Video" |
| NHL: Hawk-Eye SMART replay was installed for "replay reviews and coaches' challenges; with later enhancements supporting team medical, and player health and safety reviews" | V (league) | National Hockey League [NHL] (2025), paragraph 5 |
| NFL: technology "allows certified athletic trainers to use video to spot possible concussions and other potential injuries during games" | V (league). Section 2 territory: describe only, never as procedure | NFL (n.d.-a), paragraph beginning "Technology also helps better protect the players" |
| FIFA "is the sole owner of the tracking and ball data collected" by SAOT at its tournaments | V (governing body) | FIFA (n.d.-b), FAQ "Who owns the data collected?" |
| Output reaches fans: SAOT positional data becomes a 3D animation shown on stadium screens and given to broadcast partners | V (governing body) | FIFA (n.d.-b), "How does it work?" paragraph 4 |
| The same tracking data serves four audiences at once: officials, teams, medical and safety staff, and broadcast or fan products | I | Each audience is named for the same systems in NBA (2023), NFL (n.d.-c) and NHL (2025) |

### 1d. The vendors, each from its own pages

**Hawk-Eye Innovations (Sony)**

| Fact | Tag | Source |
|---|---|---|
| Headquartered in Basingstoke, UK; "over 1000 team members operating from offices and remote centres across 43 countries"; part of Sony Sports with Pulselive and Beyond Sports | V (vendor) | Hawk-Eye Innovations (n.d.-a), "Our Global Presence" and "Part of the Sony Family" |
| "Covering 25 top sports, Hawk-Eye has delivered over 100,000 days of events in 100+ countries" | V (vendor) | Hawk-Eye Innovations (n.d.-d), banner |
| SMART video review is a "synchronised system" for "capture and playback of video and audio for officials to review independently, known in football as VAR, in cricket as DRS, and more" | V (vendor) | Hawk-Eye Innovations (n.d.-e), "Video Review Officiating with SMART" |
| SMART stands for Synchronized Multi-Angle Replay Technology | V (vendor and league) | Sony Electronics (2025), paragraph 6; NHL (2025), paragraph 5 |
| Vendor history claims by sport: NFL "Implemented in 2021"; MLB video replay "since 2014" and Statcast data "since 2019"; NHL officiating and medical reviews "since 2016"; tennis Electronic Line Calling "Since 2005"; cricket "Since 2001" | V that Hawk-Eye says so; two dates conflict with the leagues (see "Teach this, not that") | Hawk-Eye Innovations (n.d.-d), "The Hawk-Eye You Know" |
| Hawk-Eye's site navigation shows no league-specific pages for the NFL, NBA, MLB, NHL or college football (the featured league pages are NPB and Super League Greece); its officiating page links only to product pages | V (checked today) | Hawk-Eye Innovations (n.d.-d, n.d.-e), navigation |
| Hawk-Eye's broadcast arm supplies "a full broadcasting ecosystem for venues, facilities and trucks" (HawkREPLAY, HawkNEST) | V (vendor) | Hawk-Eye Innovations (n.d.-b), page header |

**TRACAB (formerly ChyronHego's TRACAB; now Electronic Arts)**

| Fact | Tag | Source |
|---|---|---|
| Electronic Arts announced on February 3, 2025 that it had "reached an agreement to acquire TRACAB Technologies"; close expected "in EA's first fiscal quarter of FY26"; terms not disclosed | V (acquirer) | Electronic Arts (2025), paragraphs 2, 4 and last |
| TRACAB's product page now sits on `ea.com/tracab`; it calls TRACAB Optical "Emmy Award-winning," says it is used "by leagues, teams, and rights holders," and offers data through "TRACAB Gateway, an open API" | V (vendor) | TRACAB Technologies (n.d.), "TRACAB Optical" and "Scaleable Delivery through the Cloud" |
| The deal has closed | I only, do not assert | The product page sits on EA's domain (TRACAB Technologies, n.d.), which suggests it, but no fetched page states the close |

**Second Spectrum (Genius Sports)**

| Fact | Tag | Source |
|---|---|---|
| Second Spectrum is "a Genius Sports technology solution" and became the WNBA's optical tracking provider from the 2024 regular season (tip-off May 14) | V (league; read via web fetch) | WNBA (2024), release text |
| The Premier League built its SAOT "in collaboration with PGMOL and sports data and technology company Genius Sports" | V (league) | Premier League (2025b), paragraph 4; also stated in Premier League (2025a), body text |
| Genius describes optical systems as "Networks of specialised cameras ... while sophisticated computer vision algorithms identify and track objects in real-time," and names its GeniusIQ as "used in the Premier League and LFP" | V (vendor blog) | Pankhurst (2025), "Optical Tracking Systems" |
| Second Spectrum's own site | Not reachable (HTTP 401) | see "Not reachable" |

**Sportradar**

| Fact | Tag | Source |
|---|---|---|
| Sportradar's role with NBA tracking: "the league's exclusive data provider," generating events and stats with Hawk-Eye | V (trade press) | Dachman (2023), paragraph 8 |
| Sportradar's own description of its tracking work | Not reachable (investor release 403). Sportradar's homepage was fetched today, but its text did not describe a tracking system, so it is not cited | none |

**Wearables: Catapult and KINEXON**

| Fact | Tag | Source |
|---|---|---|
| Catapult Vector S7 ("THE PREMIERE OUTDOOR SOLUTION"): 53 g; 6 hrs battery; "10Hz GPS, GLONASS & SBAS (or 18Hz GPS)"; local positioning "400HZ (recorded at 100Hz)"; ultra-wideband and Bluetooth 5; range "Up to 300m (UWB)"; capacity "100 athletes"; accelerometer sampled at 1 kHz, provided at 100 Hz | V (vendor) | Catapult (n.d.), "Vector S7" specifications |
| Catapult Vector T7 ("THE PREMIERE INDOOR SOLUTION"): 17.5 g; 6 hours; no global positioning; ultra-wideband and Bluetooth 5; range "Up to 250m"; worn "in Vest or Waist Pouch" | V (vendor) | Catapult (n.d.), "Vector T7" specifications |
| KINEXON PERFORM LPS is "powered by ultra-wideband (UWB)" and claims "sub-10 cm accuracy and latency under 100 ms" | V (vendor claim) | KINEXON Sports (n.d.-a), opening paragraph and "Validated Accuracy" |
| "A typical installation needs a minimum of 12 UWB anchors to ensure indoor coverage" | V (vendor) | KINEXON Sports (n.d.-a), FAQ |
| KINEXON lists four tracking methods: GNSS or GPS, local positioning (UWB), inertial measurement units ("IMU does not offer opportunity to track positions"), and optical computer vision | V (vendor) | KINEXON Sports (n.d.-b), "What is Player Tracking?" and "Athlete Tracking Technology" |
| KINEXON anchors "are wired in every permanent installation" | V (vendor) | KINEXON Sports (n.d.-b), LPS section |
| Wearable tracking is "not optical": the athlete carries a radio tag and fixed anchors or receivers locate it; the NFL's Next Gen Stats is this kind (see 3.1) | I | From Catapult (n.d.), KINEXON Sports (n.d.-b) and NFL (n.d.-c), which all describe worn tags plus fixed receivers |
| Under football's Laws, wearable EPTS used in official competitions must not be dangerous and must meet "the FIFA Quality Programme for EPTS" | V (governing body) | IFAB (2026), Law 4, "Electronic performance and tracking systems (EPTS)," p. 69 |

### 1e. What section 1 can teach (inferences, reasoning shown)

- **I.** A venue tracking array is a set of fixed, high-frame-rate cameras around the field, calibrated to the field, whose software finds body points on each athlete plus the ball (and, in hockey, the stick) and outputs 3D positions in under a second. Reasoning: the same shape appears in Hawk-Eye NBA (12 cameras, 29 points, sub-second), FIFA SAOT (12 cameras, 29 points, 50 per second), Premier League SAOT (up to 30 cameras), TRACAB (21 joints, 0.15 seconds) and MLB (12 cameras).
- **I.** Points per athlete are a vendor design choice, not an industry constant: 29 (Hawk-Eye; FIFA SAOT), 21 joints and 65 data points (TRACAB), up to 10,000 surface mesh points (Premier League with Genius Sports).
- **I.** Replay review and tracking are different systems that can share a vendor. The NHL runs both from Hawk-Eye, and trade press reports they "serve different purposes today" (Costa, 2026, section "The Sony Hawk-Eye Backbone").

---

## 3. The leagues and the rules

### 3.1 NFL: replay, the Hawk-Eye partnership, measurement and tracking

| Fact | Tag | Source |
|---|---|---|
| Rule 15, Section 1, Article 1: each team gets "a minimum of two challenges"; a third if at least one succeeds; "A fourth challenge will not be permitted"; each challenge needs an available timeout | V (league) | NFL (2026), Rule 15-1-1, PDF p. 67 (printed p. 60) |
| 2026 text: "The head coach or head coach's pregame challenge designee can initiate a challenge by throwing a red flag" | V (league) | NFL (2026), Rule 15-1-1-a, PDF p. 67 |
| Only the Replay Official or the Senior Vice President of Officiating (or designee) may initiate review after the two-minute warning, in overtime, on scores, on Try attempts, and on rulings such as interceptions and failed fourth-down attempts | V (league) | NFL (2026), Rule 15-1-2, PDF p. 67 |
| "All Replay Reviews will be conducted by the Senior Vice President of Officiating or his or her designee," in consultation with the Replay Official and the Referee | V (league) | NFL (2026), Rule 15-2, PDF p. 67 |
| A ruling changes only when "clear and obvious video evidence warrants a change" | V (league) | NFL (2026), Rule 15-2-1, PDF p. 67 |
| If communication with the League office is lost, the Referee waits one minute, then reviews with the Replay Official | V (league) | NFL (2026), Rule 15-8, PDF p. 71 |
| Rule 15-9 lets the Replay Official or Officiating department "advise, consult with, or assist the on-field officials on specific, objective aspects of a play when clear and obvious video evidence is present," including the game clock, possession and the ball's location relative to a line | V (league) | NFL (2026), Rule 15-9, PDF p. 71 |
| AMGC, at league headquarters in New York, "Launched in 2014," is "the hub of the NFL's replay review process" and is active for every game from preseason through the Super Bowl | V (league) | NFL (n.d.-b), opening and "Gameday at AMGC" |
| AMGC has "16 stations, each set up to show a designated game on a 58-inch touch-screen monitor," a replay assistant at each, "powered by Sony Hawk-Eye technology"; replays are driven "by Xbox controllers" | V (league) | NFL (n.d.-b), "Gameday at AMGC" paragraph 5 |
| "Three AMGC decision makers make final replay decisions"; each supervisor covers up to four games; up to nine games at once in the 1 p.m. ET window; up to 12 games across three 90-inch TVs | V (league) | NFL (n.d.-b), "Gameday at AMGC" paragraphs 3, 4 and 6 |
| "Since 2021, the NFL has used Hawk-Eye to review multiple time-synchronized angles of the same play" | V (league) | NFL (n.d.-b), "Gameday at AMGC" paragraph 5 |
| The replay field operator brings a Microsoft Surface Pro tablet to the referee (since 2017); "Up to four selected synchronized camera angles can be sent to the tablet" | V (league) | NFL (n.d.-b), "During a Review" paragraph 4 and sidebar |
| "In 2024, the average review lasted 1 minute and 25 seconds" | V (league) | NFL (n.d.-b), "During a Review", last paragraph |
| After games, AMGC staff "'tag' every play so they can be searched later in a database" | V (league) | NFL (n.d.-b), "After the Games" |
| Replay officials "oversee a team that includes a video operator, replay field operators, replay field communicators and a replay assistant" | V (league) | NFL (n.d.-d), paragraph 2 |
| Replay assistants often come from college replay or from NFL GameDay Assistant roles "such as replay video operators, replay field communicators or clock operators" | V (league) | NFL (n.d.-d), "Maintaining the Pipeline" |
| Announced April 1, 2025: Hawk-Eye becomes "the primary method for measuring the line to gain, beginning with the 2025 season"; "The chain crew will remain on the field in a secondary capacity" | V (vendor release quoting the league) | Sony Electronics (2025), paragraphs 1 and 3 |
| The system "consists of six 8K cameras for optical tracking of the position of the ball," in all 30 NFL stadiums and international venues, "operated from" AMGC and "integrated with the league's existing replay system" | V | Sony Electronics (2025), paragraph 4 |
| "The full operational process takes around 30 seconds, saving up to 40 seconds from a measurement with the chains" | V | Sony Electronics (2025), paragraph 5 |
| SMART (adopted 2021) combines "video feeds from all of the NFL's broadcast partners in one place" and let replay officials "synchronize up to four camera angles at one time" | V | Sony Electronics (2025), paragraph 6 |
| Next Gen Stats tracking in every venue: 20 to 30 ultra-wide band receivers, 2 to 3 radio-frequency identification (RFID) tags in shoulder pads, tags on officials, pylons, sticks, chains and in the ball; "an estimated 250 devices"; "A team of three operators is required at every game" | V (league) | NFL (n.d.-c), paragraphs 3 and 4 |
| It captures location, speed, distance and acceleration "10 times per second"; "More than 200 new data points are created on every play" | V (league) | NFL (n.d.-c), paragraph 6 |
| The NFL's player tracking is radio-based (RFID and UWB), while its line-to-gain measurement is optical (Hawk-Eye cameras) | I | Compare NFL (n.d.-c) with Sony Electronics (2025) |

### 3.2 NBA: optical tracking from 2023-24 and the Replay Center

| Fact | Tag | Source |
|---|---|---|
| Hawk-Eye 3D optical tracking from the 2023-24 season, "at sub-second latency"; possible future automated calls "on plays such as out-of-bounds and goaltending" | V (league; read via web fetch) | NBA (2023), release text |
| 12 cameras per arena, 29 points per player (Pose) | V (trade press) | Dachman (2023), paragraph 5 |
| "Since 2019, Hawk-Eye has worked closely with the NBA in a proof-of-concept capacity," collecting data "at NBA Summer League and six NBA arenas" | V (trade press) | Dachman (2023), paragraph 7 |
| "All 30 NBA arenas are connected directly to the NBA Replay Center in Secaucus, NJ"; "94 HD monitors"; "23 work stations, including 15 Replay Operator stations and 8 Replay Manager stations" | V (league; read via web fetch, re-checked today) | NBA (n.d.-a), page text |
| Rule 13 lists 16 instant replay triggers: 14 started by on-court officials (Section I(a)) and 2 by the Replay Center Official (Section I(b)); recounted today, unchanged from October 21 | V (league; read via web fetch) | NBA (n.d.-b), Section I |
| Rule 13 does not mention Hawk-Eye, tracking or any vendor | V (checked today) | NBA (n.d.-b), whole page |
| Which system the Replay Center uses for video | A | No fetched source names it; see open checks |

### 3.3 MLB: Statcast and the Automated Ball-Strike (ABS) Challenge System

| Fact | Tag | Source |
|---|---|---|
| MLB installed pitch tracking in every stadium in 2008; Statcast was installed in all 30 ballparks in 2015 after a partial 2014 trial | V (league) | MLB (n.d.), "About Statcast" paragraph 2 |
| "From 2015-19, Statcast consisted of a combination of camera and radar systems. That changed in 2020, with the arrival of Hawk-Eye" | V (league) | MLB (n.d.), "About Statcast" paragraph 3 |
| Bat tracking data began "with the second half of the 2023 season" | V (league) | MLB (n.d.), "About Statcast" paragraph 3 |
| ABS Challenge System approved by the Joint Competition Committee (announced September 23, 2025) for all Spring Training, regular-season and Postseason games "Beginning in 2026" | V (league) | MLB (2025), paragraph 1 |
| The committee is "six owners, four active players and one active umpire" | V (league) | MLB (2025), paragraph 1 |
| "Twelve (12) Hawk-Eye cameras set up around the perimeter of the field track the location of each pitch," on "a 5G private network from T-Mobile for Business"; "The entire process takes approximately 15 seconds" | V (league) | MLB (2025), "How It Works" |
| Only the pitcher, catcher or batter may challenge, "immediately," by tapping the hat or helmet; no help from coaches or others; each club starts with two challenges, keeps successful ones, and gets one in each extra inning if it has none left | V (league) | MLB (2025), "How It Works" and "ABS Challenge System Rules" |
| The ABS zone is a two-dimensional rectangle at the middle of home plate, 17 inches wide, top at 53.5% and bottom at 27% of the batter's height; independent testers measure players in Spring Training | V (league) | MLB (2025), "ABS Challenge System Strike Zone" |
| Minor league history: Florida State League since 2021; Triple-A select parks 2022, all of Triple-A 2023; MLB Spring Training debut 2025 | V (league) | MLB (2025), paragraph after the quotes |
| 2025 Spring Training: "just over four (4) pitches per game" challenged, success "near 50%"; defense 54% vs offense 50% overturn rate | V (league) | MLB (2025), "ABS Challenge Results" |

### 3.4 NHL (named in the brief's vendor list)

| Fact | Tag | Source |
|---|---|---|
| June 4, 2025: Sony named an Official NHL Technology Partner in a multiyear deal broadening "Sony's Hawk-Eye measuring and tracking technologies" | V (league) | NHL (2025), paragraphs 1 and 2 |
| "The NHL has used Sony's Hawk-Eye technology since 2015 with Synchronized Multi-Angle Replay Technology (SMART) services installed in all 32 NHL arenas" | V (league) | NHL (2025), paragraph 5 |
| The Situation Room in Toronto assigns "a dedicated operator" per game; feeds come from "standardized goal-line, blue-line, and overhead camera positions" and can go to officials' iPads on the ice | V (trade press) | Costa (2026), "From Replay Reviews to a League-Wide Hub" |
| A separate Hawk-Eye optical tracking system "has been live league-wide for more than a year" (as of January 2026) | V (trade press) | Costa (2026), "The Sony Hawk-Eye Backbone" |

### 3.5 Tennis: electronic line calling

| Fact | Tag | Source |
|---|---|---|
| April 28, 2023: the ATP announced "Tour-wide adoption of Electronic Line Calling Live (ELC Live) from 2025," covering "all court lines for 'out' calls," a role "traditionally carried out by on-court line judges" | V (governing body) | ATP Tour (2023), paragraph 1 |
| ELC Live "was first trialled at the Next Gen ATP Finals in 2017 in Milan" | V (governing body) | ATP Tour (2023), paragraph 5 |
| In 2023, "Multiple suppliers" were approved on hard court and grass, with clay testing under way | V (governing body) | ATP Tour (2023), paragraph 6 |
| All-court ELC Live will also deliver "comprehensive player and ball tracking across the whole Tour" | V (governing body) | ATP Tour (2023), paragraph 3 |
| February 6, 2025: "For the first time ever, all tour-level events on all surfaces are featuring Live Electronic Line Calling"; Video Review on every court at all nine ATP Masters 1000 events in 2025 | V (governing body; read via web fetch) | ATP Tour (2025), opening paragraphs |
| Wimbledon: live electronic line calling from 2025 "for all main draw and qualifying match courts," for the calls line judges previously made, after testing at the 2024 Championships (announced October 9, 2024) | V (governing body's tour site; read via web fetch) | ATP Tour (2024), paragraphs 1 to 3 |
| For 2026, the All England Club announced Video Review on six Show Courts and "visual indicators will be installed on every court for live Electronic Line Calling to signal 'out' and 'fault' calls" | V (event owner) | All England Lawn Tennis Club (2026), PDF p. 2 (repeated on PDF p. 14) |
| Hawk-Eye's account: ELC approved in 2005, debut at the 2006 Miami Masters; Hawk-Eye Live launched 2017 | V (vendor) | Hawk-Eye Innovations (2026c), "The Dawn of Electronic Officiating" and "Going Live" |
| US Open electronic line calling | Not verified: no primary page found today; trade press refused (403) | see "Not reachable" |

### 3.6 Football (soccer): goal-line technology, VAR and semi-automated offside

| Fact | Tag | Source |
|---|---|---|
| The Laws of the Game 2026/27 are "Effective from 1st July 2026" | V (governing body) | IFAB (2026), cover |
| Law 1.11: "GLT systems may be used to verify whether a goal has been scored to support the referee's decision"; their use "must be stipulated in the competition rules" | V | IFAB (2026), Law 1.11, p. 50 |
| GLT "applies solely to the goal line"; the goal signal must be "automatically confirmed within one second" only to the match officials (watch vibration and visual signal and/or earpiece), and may also go to the video operation room (VOR) | V | IFAB (2026), Law 1, "Principles of GLT," p. 52 |
| GLT must meet "the FIFA Quality Programme for GLT" | V | IFAB (2026), Law 1, p. 52 |
| Law 1.14: VAR matches need a VOR, "where the video assistant referee (VAR), assistant VAR (AVAR) and replay operator (RO) work; it may be in/close to the stadium or at a more distant location," and at least one referee review area (RRA) | V | IFAB (2026), Law 1.14, p. 53 |
| VAR use requires the organiser to meet the VAR Handbook's implementation requirements and get "written permission from FIFA" | V | IFAB (2026), VAR protocol, preamble, p. 153 |
| VAR assists only on a "clear and obvious error" or "serious missed incident" in goal/no goal, penalty/no penalty, red card, mistaken identity; "The final decision is always taken by the referee"; "There is no time limit for the review process" | V | IFAB (2026), VAR protocol, Principles 1, 5 and 6, pp. 153 to 154 |
| 2026/27 lists five reviewable categories; the fifth is a "Clearly incorrectly awarded corner kick" in limited conditions | V | IFAB (2026), VAR protocol, section 2, item e, p. 155 |
| FIFA SAOT: VAR officials "validate the proposed decision by manually checking the automatically selected kick point and the automatically created offside line"; trialled at the FIFA Arab Cup 2021 and FIFA Club World Cup 2021 | V | FIFA (n.d.-b), "How does it work?" paragraph 3 and "How was it tested?" |
| If SAOT fails, "the VARs can still use other well-known offside support tools, such as crosshairs and triangulation" | V | FIFA (n.d.-b), FAQ |
| Premier League SAOT introduced "on Saturday 12 April (Match Round 32)" of 2024/25, after "non-live testing in the Premier League and live operation in the FA Cup" | V (league) | Premier League (2025a), paragraph 1 |
| Expected average time saved on close offside calls "approximately 30 seconds"; after a season, the league reported it saved "27 seconds per offside event" and kept it for 2025/26 | V (league) | Premier League (2025b), "Will SAOT rule out more goals"; Premier League (2025c), VAR section |
| FA Cup 2025-26: SAOT "active from the fifth round onwards at all matches taking place in Premier League stadiums, due to the technology and infrastructure that it requires"; GLT from the third round for fixtures hosted by Premier League and EFL Championship clubs | V (competition owner) | The Football Association (2026), paragraphs 3 to 5 |
| Hawk-Eye GLT: "the first FIFA-certified goal-line system"; used in 50 countries, 250+ stadiums, 35,000+ matches; can run from a permanent cabin or a "Remote Operations Centre (ROC)" with "24/7 remote monitoring" | V (vendor) | Michaelides (2026), "A Decade of Trust" and "Sustainable & Hybrid Operations" |

### 3.7 Cricket: the Decision Review System (DRS)

| Fact | Tag | Source |
|---|---|---|
| The current ICC men's Test playing conditions are "Effective from October 2026"; DRS and the third umpire are in Appendix D | V (governing body) | International Cricket Council [ICC] (2026), cover and Appendix D, p. 88 |
| Minimum requirements for DRS: the camera specification, "Approved ball-tracking technology" and "Approved sound-based edge detection technology" | V | ICC (2026), Appendix D 1.1.3 table, p. 89 |
| The camera specification diagram's text labels include Run Out Cameras 1 to 4 and Ball Follow 1 and 2 | V for the labels; the diagram may show more cameras than its text layer | ICC (2026), Appendix D 1.1.2, p. 88 |
| With DRS, the ICC appoints a neutral third umpire (not from either team's country) and "an independent technology expert (ICC Technical Officer)" at every DRS series | V | ICC (2026), Appendix D 1.1.3 table, p. 89 |
| Without DRS, the third umpire uses camera replays only; broadcaster ball-tracking and edge detection "shall not be used during Umpire Reviews" | V | ICC (2026), Appendix D 1.1.3 table, p. 89 |
| The Home Board must provide "a separate room" for the third umpire with access to the equipment | V | ICC (2026), Appendix D 1.1.4, p. 89 |
| An on-field umpire refers to the third umpire "by making the shape of a TV screen with their hands" | V | ICC (2026), Appendix D 2.1.2, p. 90 |
| Each team may make at most "three (3) Player Review requests that are categorised as 'Unsuccessful'" per innings | V | ICC (2026), Appendix D 3.6.1, p. 97 |
| Approved technology named: ball-tracking "HawkEye (HawkEye Innovations), or; VirtualEye (ARL)"; sound-based edge "Real-Time Snickometer (BBG Sports), or; UltraEdge (HawkEye Innovations)"; heat-based "Hot Spot cameras (BBG Sports)"; LED wickets "Zing Bails and Stumps" | V | ICC (2026), Appendix D 3.8.1.3 to 3.8.1.6, p. 98 |
| The ICC Match Referee makes the final call on which technology is used in a match, with the ICC Technical Official, ICC management and the boards | V | ICC (2026), Appendix D 3.8.3, p. 99 |
| An older ICC web version of Appendix D (dated September 28, 2017) has the same minimum-requirements table | V; superseded, cite the 2026 PDF | ICC (2017), section 1.1.5 |

### 3.8 College: NCAA replay rules, the SEC and the Big Ten

| Fact | Tag | Source |
|---|---|---|
| 2026 NCAA Football Rules and Interpretations (dated May 2026), Rule 12-1-1: "Instant replay is a process whereby video review is used to uphold or overturn certain on-field decisions" | V (governing body) | National Collegiate Athletic Association [NCAA] (2026a), Rule 12-1-1, p. FR-117 |
| Rule 12-1-3: to overturn, the replay official "must be convinced beyond all doubt by clear and obvious video evidence" | V | NCAA (2026a), Rule 12-1-3, p. FR-117 |
| Rule 12-2-1-a: "Any member institution may use instant replay, but there is no requirement to do so" | V | NCAA (2026a), Rule 12-2-1-a, p. FR-117 |
| Rule 12-4-1: replay personnel need "a minimum of three persons," "normally referred to as replay official, communicator and technician" | V | NCAA (2026a), Rule 12-4-1, p. FR-122 |
| Rule 12-4-2-a: "The type of equipment used to carry out necessary instant replay duties shall be determined by each conference or member institution" | V | NCAA (2026a), Rule 12-4-2-a, p. FR-122 |
| Rule 12-4-2-c permits a protected wireless official-to-official (O2O) system; 12-4-3-a puts replay equipment and staff in "a separate, secure location in the traditional press box area"; 12-4-3-b lets a collaborative model reach beyond the press box | V | NCAA (2026a), Rule 12-4-2 and 12-4-3, p. FR-122 |
| 2026 change, Rule 3-2-4-c-12: after the two-minute timeout, when the Replay Official stops the game, the play clock freezes and restarts at the ready signal (minimum 10 seconds) | V | NCAA (2026b), p. 2 |
| SEC: a Hawk-Eye multi-sport video review system from the 2024-25 men's and women's basketball seasons | V (conference) | Southeastern Conference [SEC] (2025), paragraph 1 |
| SEC soccer and volleyball from 2024: SMART is "the basis for video capture, replay, clipping and distribution"; soccer adds "six dedicated high-speed cameras" (goal lines, penalty boxes, one wide each side); referees talk to "a dedicated Replay Operator in a designated replay room on campus" | V (trade press) | Sports Video Group (2024), "Soccer" |
| SEC volleyball: "12 dedicated high-speed cameras" including six "pylon cameras" for in/out reviews; a Review Referee at the scorer's table has sole authority | V (trade press) | Sports Video Group (2024), "Volleyball" |
| SEC Baseball Tournament, May 19 to 24, 2026: ABS Challenge on an experimental basis using Hawk-Eye tracking, "For the first time in a collegiate setting"; three challenges per team; ties into the SEC replay system | V (vendor release) | Hawk-Eye Innovations (2026b), paragraphs 1 to 3 and 5 |
| Hawk-Eye has supplied SMART video review to the SEC in "soccer, volleyball, baseball, softball and men's and women's basketball" | V (vendor) | Hawk-Eye Innovations (2026b), last paragraph |
| University of Oklahoma IT (2024): SEC entry meant "Upgrade of the DV Sport video replay system for Football to include additional camera feeds and video delivery to the SEC office in Birmingham," and separately cabling "7 event venues" for "in-game instant replay review using the Hawkeye system" | V (member school) | University of Oklahoma Information Technology (2024), "Projects Include" |
| SEC football replay does not run on Hawk-Eye conference-wide | I only, do not assert | One school (OU, 2024) names DV Sport for football and Hawk-Eye for other venues; the SEC's own pages fetched today name Hawk-Eye only for non-football sports. One school is not the conference |
| Big Ten football uses Hawk-Eye SMART replay and medical systems | Not V today. Brief section 6 records it from a Hawk-Eye Rutgers posting (verified in an earlier session); no Big Ten announcement was found, and TeamWork Online refused (403) | see open checks |

---

## Teach this, not that

1. **TRACAB is not "ChyronHego TRACAB" in 2026.** Teach: TRACAB Technologies, which Electronic Arts agreed to acquire in February 2025, with its product page now on EA's site (Electronic Arts, 2025; TRACAB Technologies, n.d.). The brief's "ChyronHego/TRACAB" label is out of date.
2. **The Premier League's offside system is Genius Sports, not Hawk-Eye.** Hawk-Eye runs SAOT elsewhere (FIFA's joint Football Technology Centre; Hawk-Eye Innovations, 2026a), but the Premier League built its system with PGMOL and Genius Sports (Premier League, 2025a).
3. **The NFL did not drop the chains.** Hawk-Eye is the primary line-to-gain method from 2025; "The chain crew will remain on the field in a secondary capacity" (Sony Electronics, 2025).
4. **NFL player tracking is radio, not cameras.** Next Gen Stats uses RFID tags and ultra-wideband receivers (NFL, n.d.-c). Only the line-to-gain measurement is optical.
5. **Statcast's Hawk-Eye date.** MLB says Hawk-Eye arrived in 2020 (MLB, n.d.); Hawk-Eye's homepage says "since 2019" (Hawk-Eye Innovations, n.d.-d). Teach MLB's date, or both with attribution. The 2019 figure may count testing.
6. **NHL Hawk-Eye date.** The NHL says SMART since 2015 (NHL, 2025); Hawk-Eye's homepage says "since 2016" (Hawk-Eye Innovations, n.d.-d). Teach the league's date.
7. **"29 points" is Hawk-Eye's number, not the industry's.** TRACAB uses 21 joints and 65 data points; the Premier League system uses up to 10,000 mesh points.
8. **Cricket ball-tracking is not only Hawk-Eye.** The ICC approves HawkEye or VirtualEye (ARL) (ICC, 2026, 3.8.1.3).
9. **Unsuccessful DRS reviews: three per innings** in the October 2026 Test conditions (ICC, 2026, 3.6.1), not two.
10. **VAR reviews five categories in 2026/27**, not four: corner kicks were added (IFAB, 2026, p. 155).
11. **ABS challenges come from players only**, never managers or coaches (MLB, 2025). The SEC tournament version gave three challenges, not MLB's two (Hawk-Eye Innovations, 2026b).
12. **Wimbledon moved to live electronic line calling in 2025** on all main draw and qualifying match courts (ATP Tour, 2024). Do not teach older accounts that describe Wimbledon as the Grand Slam holding out with line judges.
13. **SEC "replay technicians on site" are not proof of Hawk-Eye football replay.** See 3.8: the SEC's Hawk-Eye use is documented for basketball, soccer, volleyball, baseball and softball.
14. **Vendor marketing is not evidence for medical or safety outcomes.** A Genius Sports blog says the NFL "has reduced concussion rates partly through sports tracking data" (Pankhurst, 2025, "Injury Prevention"); it cites nothing. Do not teach it. Catapult's page says its product supports "return to play" decisions (Catapult, n.d.); that is medical territory (gate A6) and stays out.
15. **Accuracy and latency figures from vendors are claims.** KINEXON's "sub-10 cm" and TRACAB's "0.15 seconds" must be taught as "the vendor says."

## Already taught elsewhere in the catalog

**`arena-transmission` (CREW-05), lesson 4 `replay-tracking-and-referee-comms`.** Already teaches, with sources: all 30 NBA arenas connect to the Secaucus Replay Center; 94 HD monitors and 23 workstations (15 Replay Operator, 8 Replay Manager) (NBA, n.d.-a); Rule 13's 16 triggers, 14 by on-court officials and 2 by the Replay Center official, counted October 21, 2026 (NBA, n.d.-b); Hawk-Eye 3D optical tracking from 2023-24 "at sub-second latency" and possible automated out-of-bounds and goaltending calls (NBA, 2023); 12 cameras and 29 points per player (Dachman, 2023); that no source shows tracking data riding the league network; Riedel Bolero referee comms. Its section 1 quiz already tests those numbers. **CREW-07 should link this lesson and not re-teach the NBA counts**; it can add the 2019 proof-of-concept history and the Sportradar and Second Spectrum roles (Dachman, 2023), which CREW-05 does not teach.

**`arena-transmission` lesson 5 `the-jobs-behind-the-network`.** Already shows the NBA "League Technology Representative, Automated Officiating" posting ($200 per game day; verify cameras and data flow; set-up to teardown). CREW-07's jobs section should link it as the NBA example.

**`broadcasting-break-in` lesson `stats-spotting-replay` (lesson 12).** Teaches broadcast workflows only: a stats operator feeding numbers to graphics and the booth, the announcer's spotting board, and a broadcast replay operator marking in and out points for the director. It does not cover officiating review, tracking systems or any league rule, and its sources are general (National Association of Broadcasters, n.d.; U.S. Bureau of Labor Statistics). **CREW-07 should open by contrasting broadcast replay (production) with officiating review (league systems), linking that lesson**, and the next lesson, `game-day-roles`, for the load-in to strike timeline.

## Not reachable

| Source | URL | Result | What a person should check in a browser |
|---|---|---|---|
| Second Spectrum home | https://www.secondspectrum.com/ | HTTP 401 | Second Spectrum's own description of its optical system (camera count, points, latency) |
| TRACAB legacy site | https://tracab.com/ | No connection | Whether it now redirects to `ea.com/tracab` |
| Sportradar NBA partnership release | https://investors.sportradar.com/news-releases/news-release-details/nba-and-sportradar-announce-landmark-long-term-global | HTTP 403 | Sportradar's own description of its NBA tracking-data role |
| Sony Europe Hawk-Eye and MLB release (2020) | https://www.sony.eu/presscentre/hawk-eye-innovations-mlb-introduce-next-gen-baseball-tracking-analytics-platform | HTTP 403 | The 2020 Statcast launch date and camera count, to settle the 2019 vs 2020 question |
| SportBusiness on US Open line calling | https://www.sportbusiness.com/news/us-open-switches-to-fully-electronic-line-calling/ | HTTP 403 | Year the US Open went fully electronic; better, find the USTA's own release |
| TeamWork Online, Hawk-Eye Rutgers posting | https://www.teamworkonline.com/sports-technology-jobs/hawk-eye-innovations/hawk-eye-innovations-jobs/college-sports-systems-technician-rutgers-university-big-ten-2188819 | HTTP 403 | Already covered by brief section 6 from another copy |
| Big Ten "Expanded Big Ten Broadcast Replay Access" | https://bigten.org/fb/article/60351/ | HTTP 404 | The Big Ten's own description of its replay center and any vendor |
| AP via Local10 on Big Ten replay coverage (September 9, 2026) | https://www.local10.com/sports/2026/09/09/big-ten-expanding-its-enhanced-replay-review-coverage-beyond-friday-games/ | HTTP 404 | Same as above |
| West Ham United copy of the Premier League SAOT statement | https://www.whufc.com/news/premier-league-statement-semi-automated-offside-technology | HTTP 500 | Not needed; the Premier League's own pages were read |
| atptour.com news pages (plain request) | https://www.atptour.com/en/news/wimbledon-2025-electronic-live-calling and https://www.atptour.com/en/news/video-review-atp-masters-1000-2025 | HTTP 403 to plain `curl`; read via web fetch | Confirm the quoted sentences and dates in a browser |
| pr.nba.com and official.nba.com (plain request) | https://pr.nba.com/nba-sony-hawk-eye-innovations-partnership/, https://pr.nba.com/wnba-genius-sports-tracking-data/, https://official.nba.com/replay/, https://official.nba.com/rule-no-13-instant-replay/ | HTTP 403 to plain `curl`; read via web fetch | Confirm in a browser |

## Research checks still open

1. What does any vendor or league publish as the technical meaning of "calibration" for an optical tracking array (camera position, lens, field model), and how often is it redone during a season?
2. Which video review system does the NBA Replay Center run, and does any NBA source say Hawk-Eye tracking feeds officiating calls in 2026-27?
3. Has the NBA put any automated call (out-of-bounds, goaltending) into use, and from which date?
4. Does the Big Ten itself (bigten.org or a conference release) name Hawk-Eye as its football replay vendor, and since which season?
5. Is SEC football replay on DV Sport conference-wide, or was that only the University of Oklahoma in 2024?
6. Which company supplies goal-line technology to the Premier League in 2026-27?
7. Did the USTA announce fully electronic line calling at the US Open, in which year, and with which supplier?
8. Did Roland Garros adopt electronic line calling for 2026? (No source was fetched for it today.)
9. Did MLB's Hawk-Eye Statcast system start in 2019 or 2020? (MLB says 2020; Hawk-Eye says 2019.)
10. Did NHL SMART start in 2015 or 2016? (The NHL says 2015; Hawk-Eye says 2016.)
11. Has Electronic Arts' acquisition of TRACAB closed, and does TRACAB still sell tracking to leagues under EA?
12. What does Second Spectrum's own site say about its cameras, points per player and latency?
13. What does Sportradar publish about its role in NBA optical tracking?
14. Did the NFL's virtual line-to-gain measurement run in every 2025 regular-season game, and is it unchanged for 2026? (Only the April 2025 announcement was read.)
15. Does the NCAA's 2026 Instant Replay Case Book or Part II, Section 16 ("Collaborative Replay Officiating Standards") describe technician duties beyond Rule 12-4-1's "technician"?
16. How many cameras does the ICC's DRS camera specification diagram actually show beyond its text labels?

## References

All England Lawn Tennis Club. (2026). *Debenture handbook: 29 June - 12 July 2026* [PDF]. Retrieved October 26, 2026, from https://content.wimbledon.com/is/content/AELTC/aeltc/wimbledon/live-site/guest/pdfs/2026%20-%20Debenture%20Handbook.pdf

ATP Tour. (2023, April 28). *Electronic Line Calling Live to be adopted across the ATP Tour* [Press release]. Retrieved October 26, 2026, from https://www.atptour.com/-/media/files/elc-live-release-april-2023.pdf

ATP Tour. (2024, October 9). *Wimbledon embraces live electronic line calling*. Retrieved October 26, 2026, from https://www.atptour.com/en/news/wimbledon-2025-electronic-live-calling

ATP Tour. (2025, February 6). *ATP announced introduction of Video Review across all ATP Masters 1000s*. Retrieved October 26, 2026, from https://www.atptour.com/en/news/video-review-atp-masters-1000-2025

Catapult. (n.d.). *Catapult Vector Pro*. Retrieved October 26, 2026, from https://www.catapult.com/solutions/vector-pro

Costa, B. (2026, January 13). *NHL Situation Room 2.0: How Sony Hawk-Eye powers centralized officiating, player safety, the league's next chapter*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2026/01/13/nhl-situation-room-2-0-how-sony-hawk-eye-powers-centralized-officiating-player-safety-the-leagues-next-chapter/

Dachman, J. (2023, March 9). *NBA taps Sony's Hawk-Eye for data-tracking beginning with 2023-24 season*. Sports Video Group. Retrieved October 26, 2026, from https://www.sportsvideo.org/2023/03/09/nba-taps-sonys-hawk-eye-for-data-tracking-beginning-with-2023-24-season/

Electronic Arts. (2025, February 3). *Electronic Arts agrees to acquire TRACAB Technologies*. Retrieved October 26, 2026, from https://www.ea.com/news/ea-sports-realism-technology

Fédération Internationale de Football Association. (n.d.-a). *Goal-line technology implementation*. Inside FIFA. Retrieved October 26, 2026, from https://inside.fifa.com/innovation/standards/goal-line-technology/goal-line-technology-implementation

Fédération Internationale de Football Association. (n.d.-b). *Semi-automated offside technology*. Inside FIFA. Retrieved October 26, 2026, from https://inside.fifa.com/innovation/world-cup-2022/semi-automated-offside-technology

The Football Association. (2026, January 9). *Details on VAR, semi-automated offside and goal-line technology in the 2025-26 FA Cup*. Retrieved October 26, 2026, from https://www.thefa.com/news/2026/jan/09/emirates-fa-cup-2025-26-season-var-20260901

Hawk-Eye Innovations. (n.d.-a). *About*. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/about

Hawk-Eye Innovations. (n.d.-b). *Broadcast*. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/broadcast

Hawk-Eye Innovations. (n.d.-c). *Data*. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/data

Hawk-Eye Innovations. (n.d.-d). *Digital media sports technology company* [Homepage]. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/

Hawk-Eye Innovations. (n.d.-e). *Officiating*. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/officiating

Hawk-Eye Innovations. (2026a, October 5). *Advanced SAOT: The real-time future of football officiating*. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/news/4584850/advanced-saot-the-realtime-future-of-football-officiating

Hawk-Eye Innovations. (2026b, May 13). *SEC chooses Hawk-Eye Innovations, implements ABS Challenge System for 2026 baseball tournament* [Press release]. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/news/4503092/sec-chooses-hawkeye-innovations-implements-abs-challenge-system-for-2026-baseball-tournament

Hawk-Eye Innovations. (2026c, October 8). *Two decades of precision: How the ATP and Hawk-Eye elevated tennis officiating and storytelling*. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/news/4588054/two-decades-of-precision-how-the-atp-and-hawkeye-elevated-tennis-officiating-and-storytelling

International Cricket Council. (2017, September 28). *Men's Test match Appendix D Decision Review System (DRS) and Third Umpire Protocol 1: General*. Retrieved October 26, 2026, from https://www.icc-cricket.com/news/mens-test-match-appendix-d-decision-review-system-drs-and-third-umpire-protocol-1-general

International Cricket Council. (2026). *ICC men's Test match playing conditions* [Effective from October 2026; PDF]. Retrieved October 26, 2026, from https://images.icc-cricket.com/image/upload/prd/a8114zro5tkioifz0jqg.pdf

The International Football Association Board. (2026). *Laws of the game 2026/27* [Effective from 1 July 2026; PDF]. Retrieved October 26, 2026, from https://downloads.theifab.com/downloads/laws-of-the-game-202627-single-pages?l=en

KINEXON Sports. (n.d.-a). *KINEXON PERFORM LPS*. Retrieved October 26, 2026, from https://kinexon-sports.com/products/perform-lps/

KINEXON Sports. (n.d.-b). *Next generation player tracking for all sports*. Retrieved October 26, 2026, from https://kinexon-sports.com/technology/player-tracking/

Major League Baseball. (n.d.). *Statcast*. MLB glossary. Retrieved October 26, 2026, from https://www.mlb.com/glossary/statcast

Major League Baseball. (2025, September 23). *MLB announces ABS Challenge System coming to the major leagues beginning in the 2026 season* [Press release]. Retrieved October 26, 2026, from https://www.mlb.com/press-release/press-release-mlb-announces-abs-challenge-system-coming-to-the-major-leagues-beginning-in-the-2026-season

Michaelides, M. (2026, May 20). *The millimetre margin: Why goal-line technology is the standard for global football*. Hawk-Eye Innovations. Retrieved October 26, 2026, from https://www.hawkeyeinnovations.com/news/4506659/the-millimetre-margin-why-goalline-technology-is-the-standard-for-global-football

National Basketball Association. (n.d.-a). *Replay Center*. NBA Official. Retrieved October 26, 2026, from https://official.nba.com/replay/

National Basketball Association. (n.d.-b). *Rule no. 13: Instant replay*. NBA Official. Retrieved October 26, 2026, from https://official.nba.com/rule-no-13-instant-replay/

National Basketball Association. (2023, March 9). *NBA and Sony's Hawk-Eye Innovations launch strategic partnership powering next generation tracking technology*. NBA Communications. Retrieved October 26, 2026, from https://pr.nba.com/nba-sony-hawk-eye-innovations-partnership/

National Collegiate Athletic Association. (2026a). *2026 NCAA football rules and interpretations* [PDF]. Retrieved October 26, 2026, from https://ncaaorg.s3.amazonaws.com/championships/sports/football/rules/PRMFB_RulesBook.pdf

National Collegiate Athletic Association. (2026b). *2026 NCAA football rules changes* [PDF]. Retrieved October 26, 2026, from https://ncaaorg.s3.amazonaws.com/championships/sports/football/rules/2026PRMFB_2026RuleChanges.pdf

National Football League. (n.d.-a). *Evolution of technology*. NFL Football Operations. Retrieved October 26, 2026, from https://operations.nfl.com/game-operations-logistics/technology/evolution-of-technology

National Football League. (n.d.-b). *Inside Art McNally GameDay Central*. NFL Football Operations. Retrieved October 26, 2026, from https://operations.nfl.com/officiating/instant-replay/art-mcnally-gameday-central

National Football League. (n.d.-c). *Performance tracking data (Next Gen Stats)*. NFL Football Operations. Retrieved October 26, 2026, from https://operations.nfl.com/game-operations-logistics/technology/performance-tracking-data-next-gen-stats

National Football League. (n.d.-d). *Replay officials*. NFL Football Operations. Retrieved October 26, 2026, from https://operations.nfl.com/rules-officiating/instant-replay/replay-officials

National Football League. (2026). *2026 official playing rules of the National Football League* [PDF]. Retrieved October 26, 2026, from https://static.www.nfl.com/image/upload/fl_attachment/league/tqivdkzt9mu6wdgsh1ku.pdf

National Hockey League. (2025, June 4). *NHL, Sony announce multiyear global technology partnership*. Retrieved October 26, 2026, from https://www.nhl.com/news/nhl-sony-announce-multiyear-global-technology-partnership

Pankhurst, B. (2025, August 8). *The evolution of sports tracking technology: From stopwatches to AI*. Genius Sports. Retrieved October 26, 2026, from https://www.geniussports.com/content-hub/the-evolution-of-sports-tracking/

Premier League. (2025a, April 1). *Semi-automated offside technology to be introduced in Matchweek 32*. Retrieved October 26, 2026, from https://www.premierleague.com/en/news/4273447

Premier League. (2025b, April 12). *Semi-automated offside technology: What you need to know*. Retrieved October 26, 2026, from https://www.premierleague.com/en/news/4256036

Premier League. (2025c, August 14). *What's new in 2025/26: IFAB laws and Premier League football principles*. Retrieved October 26, 2026, from https://www.premierleague.com/en/news/4373884/whats-new-in-2025-26-season-ifab-laws-and-premier-league-football-principles

Sony Electronics. (2025, April 1). *Sony's Hawk-Eye Innovations selected by the NFL to revolutionize line to gain measurements* [Press release]. Retrieved October 26, 2026, from https://sony.mediaroom.com/2025-04-01-Sonys-Hawk-Eye-Innovations-Selected-by-the-NFL-to-Revolutionize-Line-to-Gain-Measurements

Southeastern Conference. (2025, January). *SEC utilizing Hawk-Eye video review technology for basketball*. Retrieved October 26, 2026, from https://www.secsports.com/news/2025/01/sec-utilizing-hawk-eye-video-review-technology-for-basketball

Sports Video Group. (2024, September 18). *SEC utilizing Hawk-Eye video review technology for soccer, volleyball*. Retrieved October 26, 2026, from https://www.sportsvideo.org/2024/09/18/sec-utilizing-hawk-eye-video-review-technology-for-soccer-volleyball/

TRACAB Technologies. (n.d.). *TRACAB Optical*. Electronic Arts. Retrieved October 26, 2026, from https://www.ea.com/tracab/tracab-optical

University of Oklahoma Information Technology. (2024, August 29). *OU IT and the SEC*. Retrieved October 26, 2026, from https://www.ou.edu/ouit/news/2024/august/ou-it-sec

Whyno, S. (2025, June 4). *NHL expanding use of Hawk-Eye tracking, technology may eventually solve some on-ice issues*. Global News (The Associated Press). Retrieved October 26, 2026, from https://globalnews.ca/news/11212596/nhl-hawk-eye-technology-hockey/

Women's National Basketball Association. (2024, March 5). *WNBA and Genius Sports bring cutting-edge tracking data to every WNBA arena*. NBA Communications. Retrieved October 26, 2026, from https://pr.nba.com/wnba-genius-sports-tracking-data/
