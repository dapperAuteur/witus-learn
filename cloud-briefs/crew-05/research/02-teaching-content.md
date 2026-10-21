# Arena Transmission: Teaching Content

**Built:** October 21, 2026. Prices and course details were read on the seller's or issuer's own page that day unless marked "to verify."

**Tags.** **V** = read in a source fetched on October 21, 2026. **I** = inferred, with the reasoning shown. **A** = assumed; never taught as fact.

**How to use this file.** Eight topics, each with objectives, key facts with citations, labs and checks. **Only the cited key facts may be asserted in a lesson.** Where a topic says its teaching text still needs a source, the course author must fetch and cite one before writing that text as fact. The network facts behind topic 1 are in `01-league-network-facts.md`.

## Teaching boundaries (every topic)

- **A home lab is not the league's network.** Label every lab recording and write-up "home lab," and never present lab output as real network output (I).
- **Touch only what you own.** The carrier provides and monitors HSAN (AT&T, 2026). On a real job, a learner observes, asks and follows the employer's procedures: no packet captures, reboots, repatches or settings changes on live gear without the owner's go-ahead, and no photos of racks or screens without permission (I).
- **What a home lab cannot prove (I):** that a learner can run a league's gear, read its alarms or follow its procedures. Those come only from shadow shifts and a supervisor's sign-off.
- **Quiz items:** four options of similar length, no "all of the above," and no answer that stands out by its shape or position.

## Topic order and study time

Topic 1 first. Topics 2, 3, 4 and 5 build on each other in that order. Topic 6 (fiber) needs nothing first and can run alongside. Topic 7 needs topics 1 to 4. Topic 8 needs topic 1. Study times below are planning estimates (I).

---

## Topic 1. The league network map and the arena signal path (about 5 hours)

**Suggested lesson title:** "How a game leaves the building."

**Objectives.** The learner can:
1. Name each party on a game night and what it owns: the league's media operations and technology group (National Basketball Association [NBA], 2026d), the league's Replay Center in Secaucus (NBA, n.d.-a), and the carrier with its Network Operations Center (AT&T, 2026). The home venue's broadcast staff, the production truck and the rights holder are named too, marked "to confirm" for any specific arena (I).
2. Draw a labeled diagram: cameras to truck to the arena's network equipment to the Replay Center, data centers and partners, plus return feeds and referee comms, marking every unconfirmed part "to confirm."
3. Explain the timeline in two sentences: install from the 2026-27 season, launch in July 2027, built for the 2027-28 season (Carlson, 2026; NBA, 2026a).
4. Name the data the network carries besides video: statistics, audio and league data (AT&T, 2026). Say that whether tracking data rides it is not confirmed by any source.
5. Explain the two league systems that sit beside the network on game night: Hawk-Eye tracking, which follows each player and the ball in 3D "at sub-second latency" (NBA, 2023) using "12 cameras installed at each arena to capture 29 points on each player's body" (Dachman, 2023); and instant replay, where the current Rule 13 lists 16 review triggers, 14 started by on-court officials and 2 by the Replay Center official (NBA, n.d.-b).

**Dropped from the source plan:** an on-site versus remote production example whose only source described one team's venue. If the course wants that objective, find a league-level source first.

**Key facts** (full table in `01`, sections 2 and 3):
- HSAN is "the league's dedicated connectivity backbone" linking arenas, production facilities, data centers and media partners (AT&T, 2026).
- All 30 NBA arenas connect directly to the Replay Center, which has 94 HD monitors and 23 workstations (NBA, n.d.-a).
- The fourth generation brings fiber conduit into some venues from different directions so no single cut takes the site down, and splits streams across paths (Carlson, 2026).
- In 2014 the network (HSAN2) put two equipment racks in every arena, including a Cisco router and firewall, and carried up to 12 camera feeds per arena (Dachman, 2014). Teach it as history, dated.
- Each arena has referee comms gear with three antennas, a beltpack per referee, and "a full-size Bolero for a technician" (Daley, 2025).

**Labs.** Home: draw the diagram in any free drawing tool. On the job, with permission: ask the truck's engineer in charge or the venue's broadcast engineer where the network handoff is, and compare it to the diagram. Observe only.

**Checks.** Quiz: 8 items. Example: "Who monitors HSAN performance through a Network Operations Center?" Options: "AT&T, the network carrier" / "The league's Replay Center" / "The home team's engineers" / "The truck's video vendor" (answer: the first; AT&T, 2026). Practical: present the diagram in 3 minutes and answer "what happens if one fiber path into the building is cut?" (Carlson, 2026).

---

## Topic 2. IP basics for broadcast crew (about 10 hours)

**Suggested lesson title:** "IP for broadcast crew."

**Objectives.** The learner can:
1. Given an IP address and mask, state the network, the usable range and where the gateway sits: 18 of 20 right in a 20-minute drill.
2. Explain Layer 2 versus Layer 3 and what a VLAN separates, then set up two VLANs on a lab switch and prove with ping that they cannot reach each other.
3. Explain UDP versus TCP and point out RTP packets in a capture.
4. Run ping, traceroute and an interface status command on Linux and Mac, and say what each result means.

**Key facts.** Why it matters: a league support posting asks for troubleshooting "Layer 2/3 switches" and names UDP/TCP and RTP (NBA, 2026b). **The teaching text for addressing, VLANs and transport protocols is not sourced in this pack.** Fetch it from the resources below before a lesson asserts it.

**Resources.** Free: SMPTE's Essentials of Media over IP, modules 1.1 and 1.2, free for members and non-members, ongoing enrollment (Society of Motion Picture and Television Engineers [SMPTE], n.d.-a). Cisco Networking Academy's Networking Basics, listed as free; hours to verify on the course page (Cisco Networking Academy, n.d.). Professor Messer's N10-009 Network+ videos, "completely free," 87 videos and 12 hours 55 minutes in all; use the addressing, subnetting, VLAN, and ports and protocols videos (Professor Messer, n.d.). Paid: none needed.

**Labs.** Learner lab tier 0 or 1.

**Checks.** Quiz: a 20-item timed subnet drill, written as multiple choice (the platform's quiz rules forbid bare-number fill-ins). Practical: a screen recording that shows VLAN isolation and explains it in plain words.

---

## Topic 3. Multicast and IGMP (about 8 hours)

**Suggested lesson title:** "Multicast for broadcast crew."

**Objectives.** The learner can:
1. Explain unicast versus multicast, a multicast group, an IGMP join and leave, IGMP snooping, the querier, and in one sentence what PIM does between routers.
2. In the lab, send a multicast stream, join it from a second host, capture the IGMP join in Wireshark, and show what reaches a port that did not join, with snooping on and with it off.
3. Given a symptom ("receiver joined, no picture" or "every port is flooded"), name the two most likely causes and the first check for each.

**Key facts.**
- Both league postings name multicast: the support posting requires it and the HSAN posting prefers it (NBA, 2026b, 2026d).
- Source-specific multicast for IP is RFC 4607 (Holbrook & Cain, 2006). Do not label it RFC 4604, which RFC 4607 cites for the IGMPv3 and MLDv2 side.
- SMPTE's ST 2110 Practical Lab lists "Trace & fix multicast (IIF/OIF, RPF, PIM neighbor)" among its objectives (SMPTE, n.d.-b).
- **Definitions of IGMP, snooping and the querier still need a fetched source** (the resources below) before a lesson states them.

**Resources.** Free: SMPTE Essentials of Media over IP, module 1.3, "Upper Layers and Multicasting" (SMPTE, n.d.-a); the Wireshark User's Guide, version 5.1.0 (Wireshark Foundation, n.d.). Paid, later: SMPTE's ST 2110 Practical Lab, $99 for members and $199 for non-members, one day, open only after the ST 2110 Boot Camp or Understanding SMPTE ST 2110 (SMPTE, n.d.-b).

**Labs.** Learner lab tier 1 (a switch and a second Linux host). For a stream sender, a free tool such as ffmpeg or VLC (not reviewed; check it before recommending it). Before buying a switch for this topic, confirm on its datasheet that it does IGMP snooping; NETGEAR's GS308E product page does not list it (NETGEAR, n.d.). On the job, if allowed: ask how many multicast groups the arena sends and how they are named.

**Checks.** Quiz: 10 symptom-to-cause items. Practical: a 5-minute recorded demo plus a one-page write-up.

---

## Topic 4. ST 2110, compression and bandwidth math (about 10 hours)

**Suggested lesson title:** "Bandwidth math for live sports."

**Objectives.** The learner can:
1. Say what each ST 2110 part carries: -10 system timing, -20 uncompressed video, -21 traffic shaping, -22 constant bit-rate compressed video, -30 PCM audio, -40 ancillary data. Pass mark: 6 of 6 (SMPTE, 2025).
2. Open an SDP file and point out its address, port and format lines (SDP is taught in module 2.2 of SMPTE, n.d.-a).
3. Work the bandwidth math: uncompressed 1080p59.94 at 10-bit 4:2:2 is about 2.486 Gbps of active picture (MDL Communications, n.d.); one tenth of that is about 249 Mbps, close to the "about 250 megabits per second per stream" the NBA described for HSAN (Carlson, 2026); JPEG XS is described as visually the same as uncompressed down to about 10:1 (AIMS Alliance, 2019). Explain what that suggests and why it is still a guess until confirmed (I).
4. Explain how a controller finds devices and connects a sender to a receiver with NMOS IS-04 and IS-05 (SMPTE, n.d.-b, n.d.-c).
5. Extension: name the three ST 2110-21 sender types and say which needs the most buffering. Narrow Linear spaces packets evenly, Narrow is the same but sends nothing during blanking, and Wide is allowed "significantly greater burstiness," so receivers and switches need bigger buffers (Simpson, 2018).
6. Extension: state ST 2110-10's packet size rule. It sets "a standard UDP datagram size limit of 1,460 bytes"; an 8,960-byte extended limit "could be useful on networks that support Ethernet Jumbo Frames" (Simpson, 2017). So jumbo frames are optional, not the norm.

**Dropped from the source plan:** an objective naming the IP routing control system at one team's venue (team-specific source).

**Key facts / do not teach.**
- The NBA runs ST 2110 workflows across its arenas (Daley, 2025).
- Do not teach jumbo frames as typical for ST 2110 (Simpson, 2017).
- No source breaks the 118 streams per game down by type, and no source names the codec HSAN uses; do not invent either (I).

**Resources.** Free: SMPTE Essentials of Media over IP, Part 2: ST 2022 and ST 2110 history, SDP and PTP, NMOS (SMPTE, n.d.-a); the SMPTE ST 2110 FAQ (SMPTE, 2025); MDL's bandwidth calculator (MDL Communications, n.d.); the AIMS JPEG XS slides (AIMS Alliance, 2019); for the extensions, two free TV Tech explainers (Simpson, 2017, 2018). Paid: Understanding SMPTE ST 2110, instructor-led, 12 hours over three weeks, $399 for members and $599 for non-members; the listed cohort began July 21, 2026, so the next date is to verify (SMPTE, n.d.-c). After it, the ST 2110 Practical Lab ($99 or $199; SMPTE, n.d.-b). SMPTE membership dues, which unlock member prices, are to verify.

**Labs.** A bandwidth worksheet in a spreadsheet: four formats, the bitrate of each, and how many fit on a 10 Gbps link before and after 10:1 compression. On the job: ask what the truck hands to the league network (SDI, ST 2110, or a compressed format).

**Checks.** Quiz: 10 items, for example "Which ST 2110 part carries PCM audio?" with options "ST 2110-30" / "ST 2110-20" / "ST 2110-40" / "ST 2110-10". Practical: the finished worksheet, with a two-sentence note on what is known and what is a guess.

---

## Topic 5. Timing and dual-path redundancy (about 6 hours)

**Suggested lesson title:** a short concept lesson, for example "One clock, two paths."

**Objectives.** The learner can:
1. Explain why IP video needs a shared clock and the job of a PTP grandmaster and a follower; read lock, offset and jitter on a status screen (these are objectives in SMPTE, n.d.-b). PTP gives every device a common reference clock "accurate to better than a microsecond" (Simpson, 2017).
2. Run linuxptp between two Linux hosts, log the offset for 10 minutes, and explain why software timestamps on a laptop or virtual machine give rough numbers (I). linuxptp is a Linux implementation of IEEE 1588 and does not aim to run on other platforms (Network Time Foundation, n.d.), so a Mac needs a Linux virtual machine or a second Linux host.
3. Explain ST 2022-7: the sender sends "a second, identical copy" so the receiver can survive the loss of one path and fill in packets that never arrive (Clear-Com, n.d.). Draw red and blue paths for one feed.
4. Explain why the new network brings fiber into some venues from different directions (Carlson, 2026).

**Key facts / do not teach.**
- Do not teach that HSAN uses ST 2022-7. Sources say only that streams are split across paths for redundancy (Carlson, 2026) (I).
- Path names vary by maker. Clear-Com's manual titles its section "red/blue redundant networks" (Clear-Com, n.d.); do not teach any color scheme as universal (I).

**Resources.** Free: SMPTE Essentials of Media over IP, module 2.2, "SDP and PTP" (SMPTE, n.d.-a); linuxptp (Network Time Foundation, n.d.); Clear-Com (n.d.). Paid, later: the ST 2110 Practical Lab, which checks PTP lock and 2022-7 details ($99 or $199; SMPTE, n.d.-b).

**Labs.** Learner lab tier 1, or two Linux virtual machines. On the job: ask where the arena's timing reference comes from and how the two network paths are labeled.

**Checks.** Quiz: 8 items. Practical: the linuxptp log with a one-paragraph reading, and the red and blue diagram.

---

## Topic 6. Fiber hands-on (about 6 hours; can run alongside)

**Suggested lesson title:** "Clean fiber, every time," pointing to FOA's free courses.

**Objectives.** The learner can:
1. Identify LC, SC and ST connectors on sight: 10 of 10.
2. Inspect, clean and re-inspect an LC connector with a one-click cleaner, following the Fiber Optic Association's inspection and cleaning course and its fiber safety course (Fiber Optic Association [FOA], n.d.-b).
3. Use a visual fault locator to find a bad connector or a break on a patch cord.
4. Explain a link loss budget in decibels in plain words (FOA's MiniCourses cover dB and loss budgets; FOA, n.d.-b).

**Key facts.**
- FOA's Fiber U is "the free online learning website of the FOA": Basic Fiber Optics (10 to 20 hours), Connector Inspection and Cleaning (1 hour), Fiber Optic Safety (1 to 2 hours), Understanding OTDRs (2 to 4 hours, optional). MiniCourse certificates cost $10 (FOA, n.d.-b).
- If the work turns out to be install work: FOA's Certified Fiber Optic Technician (CFOT) is earned through an FOA-approved school, or by direct certification with at least two years of relevant field experience; 100 questions, 70 correct to pass; fees not listed on the page (FOA, n.d.-a).
- **Connector identification, cleaning steps and safety rules still need their text sourced** from FOA's courses before a lesson states them. Connector photos need a `:::figure` with a credit.

**Labs.** The fiber kit in the learner lab (tier 2, about $106 plus patch cords). On the job: ask to watch fiber patching or cleaning at the truck or the network rack, and offer to clean connectors under supervision.

**Checks.** Quiz: 10 items (connector identification from photos, safety). Practical: a video of inspect, clean, re-inspect, and one fault found with the visual fault locator.

---

## Topic 7. Monitoring, feed check-in and fault isolation (about 8 hours)

**Suggested lesson title:** "Source, transport or receiver?"

**Objectives.** The learner can:
1. Write a pre-game feed check-in checklist for every feed on the topic 1 diagram, labeled "practice version; replace with the employer's procedure." The outline follows the NBA's own duty list: check in all inbound and outbound feeds, monitor with multiviewers, IP probes and video analyzers, and write technical reports (NBA, 2026b).
2. Sort any fault into source, transport or receiver within 2 minutes in a drill, and name the evidence for each. The three-way sort is a teaching frame (I).
3. Use Wireshark's RTP Stream Analysis window (section 9.11.2 of the guide) on a lab capture to find lost packets and jitter (Wireshark Foundation, n.d.).
4. Send an SRT stream across the lab, add packet loss with a Linux traffic-shaping tool (to pick), and explain how SRT asks the sender to resend missing packets and how its latency setting trades delay for reliability (Haivision, n.d.).

**Key facts.**
- A league support posting lists the duties: check in all inbound and outbound feeds; monitor with multiviewers, IP probes and video analyzers; troubleshoot hybrid routers, IP codecs and Layer 2/3 switches; timing and sync; technical reports; 24x7 shifts (NBA, 2026b).
- A per-game, arena-side league posting asks for pre-game setup to teardown, verifying cameras and data flow, troubleshooting under time pressure, and reading and executing deployment documents (NBA, 2026c).
- The SRT project's `srt-live-transmit` sample app is, in the project's words, not for production use (Haivision, n.d.).

**Resources.** Free: the Wireshark guide (Wireshark Foundation, n.d.); the SRT project and its sample apps (Haivision, n.d.); the support engineer duty list (NBA, 2026b).

**Labs.** Learner lab tier 0 or 1. Three timed drills: a partner breaks one thing in the lab (wrong VLAN, a lost multicast join, packet loss), and the learner finds it and gives a status update within 5 minutes. On the job: shadow the pre-game check-in, and keep a personal log of what was checked and in what order, with nothing confidential in it.

**Checks.** Quiz: 10 scenario items. Practical: the three timed drills.

---

## Topic 8. Comms, escalation and reports (about 4 hours)

**Suggested lesson title:** "The 30-second status update."

**Objectives.** The learner can:
1. Give a 30-second status update with six parts: impact, scope, time, checks done, unknowns, and the ask. The six parts are a teaching frame (I).
2. Write a post-game report and a one-page root cause analysis of a lab fault; the HSAN posting asks for root cause analyses and runbooks (NBA, 2026d).
3. Describe the arena referee comms setup from public facts: three antennas, a beltpack per referee, a full-size Bolero station for a technician, and an adapter that links to the replay center, the PA and the truck (Daley, 2025).
4. State the change rule in one line: no reboot, repatch or settings change on network gear without the owner's go-ahead (I; the carrier provides and monitors the network, AT&T, 2026).

**Resources.** Daley (2025); NBA (2026d).

**Labs.** Record three status updates from the topic 7 drills. On the job: listen to how the truck's engineer and the league's facilities talk on comms, and copy the format.

**Checks.** Quiz: 6 items. Practical: one recorded status update and one written root cause analysis, scored against the six-part checklist.

---

## Learner lab

Prices were read on each seller's page on October 21, 2026. Delivery and tax are extra. A lesson that quotes a price gives the date it was read.

| Tier | What | Cost | Used in |
|---|---|---|---|
| 0 | The learner's own computer, free virtual machines, Wireshark, linuxptp in a Linux virtual machine, the SRT sample apps | $0 | Topics 2, 3, 4, 5, 7 |
| 1 | NETGEAR GS308E 8-port managed switch: $26.99 on sale, $44.99 list; VLANs supported (64); IGMP snooping not listed on the product page, so check the datasheet before buying (NETGEAR, n.d.) | $26.99 | Topics 2, 3, 7 |
| 1 | A second Linux host, for example a Raspberry Pi 5 2GB board at $77.50 after the October 2026 increase (Raspberry Pi, 2026); power supply, card and case are extra, to verify | $77.50 plus parts | Topics 3, 5 |
| 1 | Ethernet patch cables | to verify | Topics 2, 3 |
| 2 | Smart Click LC fiber connector cleaner, about 800 cleans (Fiber Cables Direct, n.d.) | $35.94 | Topic 6 |
| 2 | FIS Mini Visual Fault Locator, 2.5 mm adapter (Fiber Instrument Sales, n.d.); an LC adapter may be needed, to verify | $69.95 | Topic 6 |
| 2 | Two short LC patch cords; a connector inspection scope (optional) | to verify | Topic 6 |

Tiers 1 and 2 together come to about $210 plus cables, power and patch cords (I, sum).

## References

AIMS Alliance. (2019). *SMPTE ST 2110 using JPEG-XS* [Presentation slides]. https://aimsalliance.org/document/smpte-st-2110-using-jpeg-xs/

AT&T. (2026, October 19). *AT&T, NBA and WNBA launch next-generation network built for the future of basketball* [Press release]. PR Newswire. https://www.prnewswire.com/news-releases/att-nba-and-wnba-launch-next-generation-network-built-for-the-future-of-basketball-302912017.html

Carlson, J. (2026, October 19). *NBA arenas get a massive AT&T network upgrade to boost fan experiences*. Yahoo Sports (originally published by CNET). https://sports.yahoo.com/articles/nba-arenas-massive-t-network-120000155.html

Cisco Networking Academy. (n.d.). *Networking basics* [Online course]. Retrieved October 21, 2026, from https://www.netacad.com/courses/networking-basics?courseLang=en-US

Clear-Com. (n.d.). *ST 2022-7 seamless protection switching (red/blue redundant networks)*. In *Eclipse HX online manual*. Retrieved October 21, 2026, from https://clearcom.com/DownloadCenter/manuals/EclipseHX_EHX_Online_Manual/Content/Chapters/Eclipse%20EHX/Chapter17/ST%202022-7%20Seamless%20Protection%20Switching.htm

Dachman, J. (2014, October 28). *NBA season tip-off: New Replay Center set to revolutionize officiating, video ops*. Sports Video Group. https://www.sportsvideo.org/2014/10/28/nba-season-tip-off-new-replay-center-set-to-revolutionize-officiating-video-ops/

Dachman, J. (2023, March 9). *NBA taps Sony's Hawk-Eye for data-tracking beginning with 2023-24 season*. Sports Video Group. https://www.sportsvideo.org/2023/03/09/nba-taps-sonys-hawk-eye-for-data-tracking-beginning-with-2023-24-season/

Daley, D. (2025, November 18). *NBA debuts new comms infrastructure and systems for referees*. Sports Video Group. https://www.sportsvideo.org/2025/11/18/nba-debuts-new-comms-infrastructure-and-systems-for-referees/

Fiber Cables Direct. (n.d.). *Smart Click LC fiber optic connection cleaner* (FCDUS344). Retrieved October 21, 2026, from https://fibercablesdirect.com/fiber-optic-cleaners/344-one-click-lc-mu-fiber-optic-cleaner.html

Fiber Instrument Sales. (n.d.). *Visual fault locators*. Retrieved October 21, 2026, from https://www.fiberinstrumentsales.com/test-equipment/visual-fault-locators.html

Fiber Optic Association. (n.d.-a). *The Fiber Optic Association CFOT certification*. Retrieved October 21, 2026, from https://www.thefoa.org/cfot.htm

Fiber Optic Association. (n.d.-b). *Fiber U: FOA online self-study programs*. Retrieved October 21, 2026, from https://fiberu.org/

Haivision. (n.d.). *SRT* [Computer software]. GitHub. Retrieved October 21, 2026, from https://github.com/Haivision/srt

Holbrook, H., & Cain, B. (2006). *Source-specific multicast for IP* (RFC 4607). RFC Editor. https://www.rfc-editor.org/rfc/rfc4607.html

MDL Communications. (n.d.). *ST 2110 bandwidth calculator*. Retrieved October 21, 2026, from https://www.mdlcommunications.com/engineers-toolkit/st-2110-bandwidth-calculator/

National Basketball Association. (n.d.-a). *Replay Center*. NBA Official. Retrieved October 21, 2026, from https://official.nba.com/replay/

National Basketball Association. (n.d.-b). *Rule no. 13: Instant replay*. NBA Official. Retrieved October 21, 2026, from https://official.nba.com/rule-no-13-instant-replay/

National Basketball Association. (2023, March 9). *NBA and Sony's Hawk-Eye Innovations launch strategic partnership powering next generation tracking technology*. NBA Communications. https://pr.nba.com/nba-sony-hawk-eye-innovations-partnership/

National Basketball Association. (2026a, October 19). *AT&T, NBA and WNBA launch next-generation network built for the future of basketball*. NBA Communications. https://pr.nba.com/att-nba-wnba-network

National Basketball Association. (2026b, October 14). *Project employee, broadcast support engineer* [Job posting]. https://nba.wd108.myworkdayjobs.com/nbacareers/job/Secaucus-USA/Project-Employee--Broadcast-Support-Engineer_JR000634

National Basketball Association. (2026c, October 14). *Project employee, league technology representative, automated officiating (NOW Arena)* [Job posting]. https://nba.wd108.myworkdayjobs.com/nbacareers/job/New-York-USA---Remote/Project-Employee--League-Technology-Representative---Automated-Officiating--NOW-Arena-_JR001082

National Basketball Association. (2026d, October 14). *Technical manager, local media* [Job posting]. https://nba.wd108.myworkdayjobs.com/nbacareers/job/Secaucus-USA/Technical-Manager--Local-Media_JR000961

NETGEAR. (n.d.). *8-port Gigabit Ethernet Easy Smart Managed Essentials Switch (GS308E)*. Retrieved October 21, 2026, from https://www.netgear.com/business/wired/switches/easy-smart/gs308e/

Network Time Foundation. (n.d.). *linuxptp*. Retrieved October 21, 2026, from https://linuxptp.nwtime.org/

Professor Messer. (n.d.). *N10-009 training course*. Retrieved October 21, 2026, from https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/

Raspberry Pi. (2026, October 1). *Price increases for 2GB Raspberry Pi 4 and Raspberry Pi 5*. https://www.raspberrypi.com/news/price-increases-for-2gb-raspberry-pi-4-and-raspberry-pi-5/

Simpson, W. (2017, November 15). *SMPTE ST 2110-10: A base to build on*. TV Tech. https://www.tvtechnology.com/news/smpte-st-211010-a-base-to-build-on

Simpson, W. (2018, February 9). *SMPTE ST 2110-21: Taming the torrents*. TV Tech. https://www.tvtechnology.com/opinions/smpte-st-211021-taming-the-torrents

Society of Motion Picture and Television Engineers. (n.d.-a). *Essentials of Media over IP (EMIP)* [Virtual course]. Retrieved October 21, 2026, from https://www.smpte.org/virtual-course-essentials-of-media-over-ip-emip

Society of Motion Picture and Television Engineers. (n.d.-b). *ST 2110 practical lab* [Virtual course]. Retrieved October 21, 2026, from https://www.smpte.org/st2110-practical-lab

Society of Motion Picture and Television Engineers. (n.d.-c). *Understanding SMPTE ST 2110* [Virtual course]. Retrieved October 21, 2026, from https://www.smpte.org/virtual-course/st2110

Society of Motion Picture and Television Engineers. (2025, August 15). *SMPTE ST 2110 FAQ*. https://www.smpte.org/smpte-st-2110-faq

Wireshark Foundation. (n.d.). *Wireshark user's guide* (Version 5.1.0). Retrieved October 21, 2026, from https://www.wireshark.org/docs/wsug_html/
