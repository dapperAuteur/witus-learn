# Arena Transmission: The League Network Facts

**Researched:** October 21, 2026. Every source below was fetched that day.

**Tags.** **V** = read in a source fetched on October 21, 2026. **I** = inferred from sources, with the reasoning shown. **A** = assumed; never to be taught as fact.

**Scope.** CREW-05 teaches how a game leaves the building over a **league arena network** in general. The worked example is the NBA's High-Speed Arena Network (HSAN), because it is well documented in public sources. The course names no team and no team's venue. Where a source names specific arenas, this pack gives a count instead.

## 1. What a league arena network is (the general idea)

From the worked example below, a league arena network is a private, carrier-run network that links every arena in a league to the league's own facilities (a replay center, data centers) and to its media partners, and carries video, audio, statistics and league data on it (I, generalized from AT&T, 2026, and National Basketball Association [NBA], n.d.-a). The carrier monitors it from a network operations center (V for HSAN: AT&T, 2026). Whether other leagues run networks of the same shape was not researched for this pack (A); a lesson may present HSAN as one documented example, not as how every league works.

## 2. The worked example: what HSAN is

| Fact | Tag | Source |
|---|---|---|
| HSAN is "the league's dedicated connectivity backbone" that links NBA arenas, production facilities, data centers and media partners | V | AT&T (2026) |
| It carries live game video, replays, highlights, statistics, audio feeds, broadcast content, digital media content and "other mission-critical league data" | V | AT&T (2026) |
| It supports live broadcasts, alternate viewing experiences, radio, mobile content and in-arena entertainment | V | AT&T (2026) |
| AT&T provides the connectivity and "monitors network performance through its Network Operations Center" | V | AT&T (2026) |
| The fourth generation was announced on October 19, 2026, by the NBA, the WNBA and AT&T; it rides more than 68,000 miles of AT&T fiber and is designed for more than 118 concurrent, low-latency streams per game | V | NBA (2026a); AT&T (2026) |
| The fourth generation brings all-new networking equipment to the venues, about four times the bandwidth of the current setup, fiber conduit into some venues from different directions so no single cut takes the site down, and streams split across paths for redundancy | V | Carlson (2026) |
| AT&T runs a dedicated engineering unit with 24/7 network telemetry, capacity modeling and automatic rerouting | V | Carlson (2026) |
| All 30 NBA arenas connect directly to the NBA Replay Center in Secaucus, New Jersey | V | NBA (n.d.-a) |
| The Replay Center has 94 HD monitors and 23 workstations: 15 Replay Operator and 8 Replay Manager stations | V | NBA (n.d.-a) |
| The current Rule 13 lists 16 instant replay review triggers: 14 started by on-court officials and 2 by the Replay Center official | V (counted October 21, 2026) | NBA (n.d.-b) |
| One WNBA arena is also named for the fourth-generation upgrade | V | Carlson (2026) |
| Since the 2023-24 season, Sony's Hawk-Eye 3D optical tracking follows each player and the ball "at sub-second latency"; the NBA named possible future automated calls on out-of-bounds and goaltending | V | NBA (2023) |
| Hawk-Eye's pose product "uses 12 cameras installed at each arena to capture 29 points on each player's body" | V | Dachman (2023) |
| Hawk-Eye data travels over HSAN | **I only, do not assert.** No source says so. HSAN carries "other mission-critical league data" (AT&T, 2026), which is consistent with it but does not show it | |
| In 2025 the NBA had "expanded SMPTE ST 2110 workflows across its arenas" and linked "remote data centers connected via the league's HSAN network" | V | Daley (2025) |
| Each arena has referee comms gear (Riedel Bolero): three antennas, a beltpack per referee, and "a full-size Bolero for a technician" | V | Daley (2025) |
| A league technician works at each arena on game nights, at least for referee comms | I | From Daley (2025): a station is built for one |

**The 250 Mbps puzzle.** The NBA's Ken DeGennaro told CNET that most video "comes back as uncompressed video at about 250 megabits per second per stream" (Carlson, 2026). That he said it is V. But uncompressed 1080p59.94 video at 10-bit 4:2:2 is about 2.486 gigabits per second of active picture (MDL Communications, n.d.), about ten times more. One tenth of 2.486 Gbps is about 249 Mbps, which matches the quote closely. So the streams are most likely compressed about 10:1, for example with a codec like JPEG XS, which is described as visually the same as uncompressed down to about 10:1 (AIMS Alliance, 2019), or the number was simplified for a general audience (I). **Teaching rule:** a lesson may teach the arithmetic, and must label the codec as a reasoned guess until a primary source states the format an arena hands to the network.

### Earlier generations

| Generation | What is known | Tag | Source |
|---|---|---|---|
| First | Existed before 2014; HSAN2 was "66 times faster" | I | Dachman (2014) |
| Second (HSAN2, 2014) | 10-gig, JPEG2000-based private network built with Zayo; Zayo monitored it and controlled all alarms; Cisco supplied the control and routing gear; two new equipment racks at every arena, including a Cisco router and firewall; up to 12 camera feeds per arena at once, with nine primary angles from the production truck as the standard | V for 2014; likely changed since (I) | Dachman (2014) |
| Third | No source found | A | none |
| Fourth (2026 onward) | AT&T; see the table above and section 3 | V | AT&T (2026); Carlson (2026) |

**Do not teach** that the network began in the 2014-15 season or that AT&T built the 2014 network: in 2014 it was HSAN2, faster than an earlier HSAN, and built with Zayo (Dachman, 2014).

## 3. Timing: build, switch-on, first season

| Claim | Tag | Source |
|---|---|---|
| Installation of the fourth generation starts "with the 2026-2027 season" | V | Carlson (2026) |
| Six arenas were named as the first install sites | V | Carlson (2026) |
| "The official launch of the updated HSAN will happen in July 2027" | V | Carlson (2026) |
| The network is designed for "basketball consumption during the 2027-28 NBA season" | V | NBA (2026a); AT&T (2026) |
| Bull Source repeats the CNET story's facts and quotes nearly word for word, so it is not a second, independent source | I | Bull Source (2026) compared with Carlson (2026) |

**Reading the dates together (I).** These are three stages of one plan, not a conflict: build during the 2026-27 season, switch on in July 2027 (the off-season), first full season 2027-28. An arena not among the first six has no published install date, so during 2026-27 it most likely still runs on the current network.

**What the timing means for arena-side work (I).** Work that starts during the 2026-27 season probably meets the current network. An install-era job (new equipment and new conduit going in; Carlson, 2026) and an operations-era job (feeds checked in and monitored on game nights; section 4) need different skills, so the network generation is a fair question to ask about any arena-side role.

## 4. What the work involves: public job postings

Three NBA postings, all posted October 14, 2026, describe arena-side and league-side network work. They are evidence of the duties, not of any one arena's staffing.

| Posting | Where | Level and pay | What it asks for | Tag |
|---|---|---|---|---|
| Technical Manager, Local Media (NBA, 2026d) | Secaucus, in office 5 days, travel to arenas | Director; $130,000 to $165,000; 8 to 10+ years | Leads freelance Technical Managers; contribution, routing, monitoring, transmission, master control, "HSAN connectivity"; incident response; runbooks; root cause analyses; prefers ST 2110, NMOS, SRT, NDI, JPEG XS, multicast | V; the only live posting naming HSAN |
| Project Employee, Broadcast Support Engineer (NBA, 2026b) | Secaucus "as well as at NBA arenas"; up to 10 months | $3,200 biweekly; 2 to 5 years | Check in all inbound and outbound feeds; monitor with multiviewers, IP probes and video analyzers; troubleshoot hybrid routers, IP codecs and Layer 2/3 switches; multicast; timing and sync; RTSP, RTMP, SRT, UDP/TCP, RTP; technical reports; 24x7 shifts | V; no HSAN mention |
| Project Employee, League Technology Representative, Automated Officiating (NBA, 2026c) | On site at one G League arena, game days; up to 10 months | $200 per game day; 1 to 3 years | Pre-game setup to teardown; verify cameras and data flow; troubleshoot under time pressure; read and execute deployment documents; cabling, connectivity and basic IT; work at heights; Linux and Python preferred | V; a sensor job, not HSAN. It shows what an arena-side, per-game league job looks like |

A search result also surfaced an NBA "Senior Broadcast Engineering Director, Game Support Lead" posting that called HSAN "the NBA's private fiber network connecting each NBA arena and NBA Entertainment," but its page could not be loaded. **It is not evidence; do not quote it.**

**What repeats across the postings (I):** checking feeds in and out; watching multiviewers and IP monitoring tools; troubleshooting IP-connected broadcast gear; multicast; timing; contribution protocols; written reports; escalation; nights, weekends and holidays.

## 5. The standards this work touches

- The NBA runs SMPTE ST 2110 workflows across its arenas (Daley, 2025) (V).
- The HSAN-naming posting prefers ST 2110, NMOS, SRT, NDI, JPEG XS and multicast (NBA, 2026d) (V); the support posting adds timing and sync and the RTSP, RTMP, SRT, UDP/TCP and RTP protocols (NBA, 2026b) (V).
- So ST 2110, multicast and timing are core topics for this course, not extras (I). Network design, routing protocols and carrier work are not: the carrier owns and monitors the network (AT&T, 2026), so an arena-side role is unlikely to change it (I).
- The teaching facts for each standard, with their sources, are in `02-teaching-content.md`.

## References

AIMS Alliance. (2019). *SMPTE ST 2110 using JPEG-XS* [Presentation slides]. https://aimsalliance.org/document/smpte-st-2110-using-jpeg-xs/

AT&T. (2026, October 19). *AT&T, NBA and WNBA launch next-generation network built for the future of basketball* [Press release]. PR Newswire. https://www.prnewswire.com/news-releases/att-nba-and-wnba-launch-next-generation-network-built-for-the-future-of-basketball-302912017.html

Bull Source. (2026). *NBA arenas get a massive AT&T network upgrade to boost fan experiences*. Retrieved October 21, 2026, from https://bullsource.com/technology/nba-arenas-get-a-massive-att-network-upgrade-to-boost-fan-experiences/

Carlson, J. (2026, October 19). *NBA arenas get a massive AT&T network upgrade to boost fan experiences*. Yahoo Sports (originally published by CNET). https://sports.yahoo.com/articles/nba-arenas-massive-t-network-120000155.html

Dachman, J. (2014, October 28). *NBA season tip-off: New Replay Center set to revolutionize officiating, video ops*. Sports Video Group. https://www.sportsvideo.org/2014/10/28/nba-season-tip-off-new-replay-center-set-to-revolutionize-officiating-video-ops/

Dachman, J. (2023, March 9). *NBA taps Sony's Hawk-Eye for data-tracking beginning with 2023-24 season*. Sports Video Group. https://www.sportsvideo.org/2023/03/09/nba-taps-sonys-hawk-eye-for-data-tracking-beginning-with-2023-24-season/

Daley, D. (2025, November 18). *NBA debuts new comms infrastructure and systems for referees*. Sports Video Group. https://www.sportsvideo.org/2025/11/18/nba-debuts-new-comms-infrastructure-and-systems-for-referees/

MDL Communications. (n.d.). *ST 2110 bandwidth calculator*. Retrieved October 21, 2026, from https://www.mdlcommunications.com/engineers-toolkit/st-2110-bandwidth-calculator/

National Basketball Association. (n.d.-a). *Replay Center*. NBA Official. Retrieved October 21, 2026, from https://official.nba.com/replay/

National Basketball Association. (n.d.-b). *Rule no. 13: Instant replay*. NBA Official. Retrieved October 21, 2026, from https://official.nba.com/rule-no-13-instant-replay/

National Basketball Association. (2023, March 9). *NBA and Sony's Hawk-Eye Innovations launch strategic partnership powering next generation tracking technology*. NBA Communications. https://pr.nba.com/nba-sony-hawk-eye-innovations-partnership/

National Basketball Association. (2026a, October 19). *AT&T, NBA and WNBA launch next-generation network built for the future of basketball*. NBA Communications. https://pr.nba.com/att-nba-wnba-network

National Basketball Association. (2026b, October 14). *Project employee, broadcast support engineer* [Job posting]. https://nba.wd108.myworkdayjobs.com/nbacareers/job/Secaucus-USA/Project-Employee--Broadcast-Support-Engineer_JR000634

National Basketball Association. (2026c, October 14). *Project employee, league technology representative, automated officiating (NOW Arena)* [Job posting]. https://nba.wd108.myworkdayjobs.com/nbacareers/job/New-York-USA---Remote/Project-Employee--League-Technology-Representative---Automated-Officiating--NOW-Arena-_JR001082

National Basketball Association. (2026d, October 14). *Technical manager, local media* [Job posting]. https://nba.wd108.myworkdayjobs.com/nbacareers/job/Secaucus-USA/Technical-Manager--Local-Media_JR000961
