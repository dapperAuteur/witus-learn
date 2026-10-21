# Brief: Arena Transmission, How a Game Leaves the Building (proposed CREW-05)

**Status:** approved 2026-10-21 for build. Public; held for a qualified reviewer.

## 1. Description

A learner can trace a live game's video, audio and data from the arena to the world: cameras and the truck,
the venue's IP control room, the league's arena network, and the rights holders. They can explain what
SMPTE ST 2110 sends and why multicast matters, read a bandwidth budget, tell a source fault from a transport
fault from a receiver fault, handle fiber safely, and speak clearly on comms while a game is live. It is the
job-shaped knowledge for transmission and network work at an arena, taught for crew who already know a truck.

## 2. Outline (draft)

1. **The map:** who sends what to whom on game night (truck, venue control room, league network, network
   operations center, replay center, rights holders); local versus national broadcasts; the league systems beside
   the network (optical player tracking, instant replay review).
2. **IP for broadcast crew:** addresses, subnets, VLANs, Layer 2 and Layer 3, why video breaks office networks.
3. **Multicast:** groups, IGMP joins and snooping, the querier; what happens when it is wrong.
4. **Video over IP:** SDI to ST 2110 (video, audio, ancillary data as separate streams), SDP files,
   compression (JPEG 2000, JPEG XS, H.264/HEVC), bandwidth math with a calculator; packet size limits and
   sender pacing (ST 2110-10 and -21) as an extension.
5. **Timing and redundancy:** PTP and genlock, reading lock and offset; ST 2022-7 red and blue paths, diverse
   fiber routes.
6. **Fiber and the physical layer:** connectors, inspection and cleaning, polarity, light levels, loss
   budgets, laser safety.
7. **Monitoring and fault isolation under a clock:** multiviewers, probes, a check-in routine, the
   source/transport/receiver method, escalation and status calls, a mock game night.

About 7 sections, 25 to 28 lessons, section quizzes and a final, per the assessment spec.

## 3. Fit

Careers & Media; extra categories Sports and Trade Skills. **Series: CREW, "The Crew Behind the Show", as
CREW-05** (after rigging, sound, light, and the proposed CREW-04 camera rig). Audience: broadcast crew moving
toward technical and transmission roles, students who finished `broadcasting-break-in`. **Public**, held until
a qualified reviewer signs off (same as CREW-01 to 03). Research tier 2 (safety: fiber and laser, heights).

## 4. Connections (searched `scripts/data/`, 2026-10-21)

- `broadcasting-break-in`: `signal-flow-and-audio`, `the-switcher-and-control-room`, `encoding-and-streaming`,
  `game-day-roles` (prerequisite; this course goes deeper on the IP and transmission side).
- `stage-and-broadcast-rigging` (CREW-01) lesson 18 `arena-rigs-and-fly-systems` (the building).
- `sound-craft` (CREW-02) section 7 "Sound as work" (audio embedding, comms culture).
- `cyber-security` (VLANs, named in passing only).
- **Nothing covers** ST 2110, multicast, SDI, PTP, ST 2022-7, fiber handling or RF coordination: zero hits in
  `scripts/data/`. The rigging brief already logged the sports-broadcast technical job as uncovered.

## 5. Course or lesson?

**A course.** Rubric: gates pass (A8 approved 2026-10-21); B 2/2/2/3/3/3 = 28 (B1 2: the standards and
the league's own postings and releases document the practice, but the SMPTE standards are paywalled; B2 2:
`broadcasting-break-in` touches encoding and signal flow but not IP transport; B3 2: learners can examine SDP
files, packet captures and bandwidth tables, not the league's internal documents; B4 3; B5 3; B6 3, a named
CREW gap). Form **C6** (B1 ≥ 2, B2 ≥ 2, B4 ≥ 2). Build next.
Alternatives rejected: a section inside `broadcasting-break-in` (too deep for a career-entry course and it
would double that course's length); a private course (the skills are general and public).

## 6. Evidence status (APA entries: `cloud-briefs/crew-05/research/`)

| Claim | Status | Source |
|---|---|---|
| HSAN is the NBA's connectivity backbone linking arenas, production facilities, data centers and media partners; AT&T monitors it from its NOC | VERIFIED | AT&T (2026); NBA (2026a) |
| The 4th generation carries 118+ low-latency HD streams per game; install during 2026-27, launch July 2027, first full season 2027-28 | VERIFIED | NBA (2026a); Carlson (2026) |
| The NBA expanded ST 2110 workflows across its arenas | VERIFIED | Daley (2025) |
| League postings ask for multicast, Layer 2/3 switching, ST 2110, NMOS, SRT, JPEG XS, PTP and feed check-in | VERIFIED | NBA (2026c, 2026e) |
| HSAN generation 2 was JPEG 2000-based | VERIFIED | Dachman (2014) |
| Hawk-Eye optical tracking at every NBA arena since 2023-24: 12 cameras, 29 points per player, sub-second latency | VERIFIED | NBA (2023); Dachman (2023) |
| The current NBA Rule 13 lists 16 instant replay review triggers (14 on-court, 2 Replay Center) | VERIFIED | NBA (n.d.-b), counted 2026-10-21 |
| ST 2110-10 standard packet limit is 1,460 bytes; the 8,960-byte jumbo limit is optional | VERIFIED | Simpson (2017) |
| ST 2110-21 sender types: Narrow, Narrow Linear, Wide; Wide needs bigger buffers | VERIFIED | Simpson (2018) |
| Specific arena hardware lists, port speeds, ISO counts in unsourced AI-generated drafts | UNVERIFIED | None; do not teach |
| Unsourced AI-generated claims: HSAN began in 2014-15 with AT&T; "15" replay triggers; jumbo frames "typical"; a "SMPTE Professional Certificate in ST 2110 and ST 2059" | WRONG | Dachman (2014); NBA (n.d.-b); Simpson (2017); SMPTE Boot Camp page. Full review: witus `01-target-and-sources.md` section 10 |

Lessons on standards cite SMPTE's free material and vendor white papers that are fetched at build time;
no lesson asserts a REPORTED claim.

## 7. Decisions (2026-10-21)

- Public course in the CREW series as CREW-05, held until a qualified reviewer signs off.
- Teach a league arena network in general. The NBA's High-Speed Arena Network is the cited worked example. Do not
  name any team or venue.
- Practitioner demonstrations are recorded later and added as video lessons.
