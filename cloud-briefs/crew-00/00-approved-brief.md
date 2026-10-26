# Brief: Cables and Connectors, What Carries What in Broadcast (CREW-00)

**Status:** approved 2026-10-26 for build, as CREW-00, the CREW series' foundation. Public; held for a qualified
reviewer: a broadcast engineer for sections 1 to 6, 8 and 9, and a stage electrician for section 7. Research
tier 2 (section 7 is electrical safety). Build before CREW-07.

## 1. Description

A learner can pick up any cable on a broadcast truck, stage or arena floor and say what it carries, what
connector is on each end and why, how far it can run, what breaks it, and what must never be plugged into it.
They can tell 75-ohm video coax from 50-ohm RF coax, balanced audio from unbalanced, single-mode fiber from
multimode, a hybrid camera cable from a tactical fiber, Cat6 carrying Dante or ST 2110 from Cat6 carrying the
office network, and a feeder cable from an extension cord. They can coil, label, test and fault-find a cable,
and they know which power connectors only a licensed electrician may land. It is the first thing a new crew
member is handed and the thing every CREW course assumes.

## 2. Outline

1. **Why the cable matters:** signal, impedance, shielding, loss and length; why a cable that "fits" can still
   be wrong (75 versus 50 ohm BNC; a mic cable on a clock line); reading a spec sheet.
2. **Video over copper:** SDI on 75-ohm coax and BNC, from SD to 12G; HDMI and DisplayPort and where they stop;
   the reference line (genlock, tri-level sync on 75-ohm BNC); timecode; return video.
3. **Camera cables:** triax and the SMPTE ST 311 hybrid fiber cable with ST 304 connectors (two single-mode
   fibers for video, copper for power and data); tactical fiber; what a camera control unit does at the other end.
4. **Fiber:** single-mode versus multimode, LC, SC and ST, inspection and cleaning, loss budgets, bend radius,
   laser safety; link to CREW-05's fiber section rather than repeat it.
5. **Audio over copper:** balanced XLR (3-pin), TRS and TS, the 4-pin XLR of intercom, 5-pin DMX beside it and
   why they must not be swapped; AES3 digital audio on 110-ohm XLR and AES3-id on 75-ohm BNC; word clock; MADI.
6. **Audio and video over the network:** Cat5e, Cat6 and Cat6a; what Dante needs from a switch; ST 2110 on the
   same copper and on fiber; PoE; why a video network is not the office network.
7. **Power:** Edison and twist-lock, stage pin, powerCON and True1, cam-type single-pole feeders (three hots,
   neutral, ground; the gender trap); the law and the licence (NEC Article 520, OSHA temporary power), what crew
   may connect and what an electrician must; GFCI and wet locations.
8. **Control, comms and data:** DMX, RS-422 camera control, tally and GPI, USB, serial, RF and antenna coax
   (50 ohm, N-type), wireless mic and IFB coordination (named only).
9. **Craft:** over-under coiling, labeling and color codes, cable runs and ramps, testing with a cable tester and
   a light meter, the fault-finding order (source, cable, receiver), the kit, and a mock load-in.

About 9 sections, 24 to 28 lessons, section quizzes and a final. **Capstone (approved): hands-on, on video.**
The learner identifies, tests and coils ten cables on camera, naming each; a model-answer video is recorded
by the publisher before release (the capstone lesson carries a practitioner marker until it exists).

## 3. Fit

Careers & Media; extra categories Trade Skills and Sports. Series CREW, "The Crew Behind the Show", position
**00**. Audience: students starting in live events and broadcast, and CREW learners who hit cable questions in
CREW-02 and CREW-05. Public, held until the reviewers sign off.

## 4. Connections

- `sound-craft` (CREW-02): Dante named; three fiber lessons (`fiber-on-the-map`, `where-to-learn-fiber`,
  `a-fiber-kit-and-first-lab`): link, do not repeat.
- `arena-transmission` (CREW-05): ST 2110, multicast, fiber handling, PTP. This course is the copper and
  connector floor under it.
- `cinema-look-camera-rig` (CREW-04): XLR and HDMI named in passing. `renting-out-production-gear` (CREW-06):
  XLR and HDMI in inventory lists. `stage-and-broadcast-rigging` (CREW-01): cable runs over rigging.
- `broadcasting-break-in`: `signal-flow-and-audio` (prerequisite).

## 5. Rules for the build

- Teach only VERIFIED facts from `research/`. Standards bodies' texts (SMPTE, AES, NFPA 70) are paywalled: cite
  what free official pages, vendor spec sheets and government pages state, and never quote or reconstruct a
  paywalled standard's text.
- Section 7 never teaches anyone to tie in to a power source, open a panel or build a feeder; it teaches what
  the connectors are, what the rules say who may do what, and when to stop and call an electrician.
- Vendor products are cited as worked examples (a spec sheet a learner can read), not endorsements.
- No identifiable venue's or employer's internal procedures.

## 6. Known gaps going in (2026-10-26)

- Belden 1694A spec page: returned 403 to automated readers and "not found" in a browser on 2026-10-26. Find
  the spec sheet another way (a PDF on a distributor's site, Belden's catalog, or another maker's 12G coax
  with published run lengths).
- Neutrik's XLR pages list products only; no page states pin counts by use. Find a manufacturer or standards
  body page that does.
- Audinate's Dante pages moved to getdante.com; the Dante Via page is about software routing, not network
  requirements. Find Audinate's network and switch requirements page.
- NEC Article 520 text is paywalled (NFPA offers free read-only access behind an account). OSHA's temporary
  power rules (29 CFR 1910.305, 1926.405) are free at osha.gov and ecfr.gov.
