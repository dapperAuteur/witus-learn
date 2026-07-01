// Authored career-starter course for Learn.WitUS, category "Careers & Media":
// how to break into and get hired in sports and media broadcasting. Career-
// oriented and practical — mirrors the "get the job" structure of the
// cyber-security course: cited lessons with a `## Sources` bibliography, sections,
// a fill-in exercise, and a final quiz (per-question explanation + sourceLessonSlug,
// passingScore 70). Original writing; claims cited APA 7 (in-line + Sources) to
// public/authoritative sources — U.S. Bureau of Labor Statistics *Occupational
// Outlook Handbook*, the National Association of Broadcasters (NAB), the Society of
// Broadcast Engineers (SBE), and the Federal Communications Commission (FCC).
//
// Cross-link: the "utility technician" entry role depends on knot & rigging skill,
// so several lessons point learners to the companion Knot-Tying & Rope Work course.
//
// Committed; seeded via the shared importer (upsert by (courseId, slug)).

import type { AuthoredCourse } from "./authored-course";

export const BROADCASTING_COURSE: AuthoredCourse = {
  title: "Break Into Sports & Media Broadcasting",
  description:
    "A practical, career-focused path into sports and media broadcasting — the roles that actually hire (on-air talent, producer, camera/AV, broadcast engineer, editor, stream ops, and the utility-technician entry role), the calling card that gets you noticed, the audio/video and live-production fundamentals to be useful on day one, and the internship, freelance, union, and networking moves that land a first job. Cited to the U.S. Bureau of Labor Statistics, the NAB, the SBE, and the FCC.",
  lessons: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — The landscape & roles
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "landscape-and-roles",
      title: "1 · The landscape: who does what on a broadcast",
      section: "Section 1 · The landscape & roles",
      body: `**Concept overview.** "Broadcasting" is not one job — it is a crew. A single sports telecast is made by on-air talent, a producer and director calling the show, camera and audio-visual (AV) operators, a broadcast engineer keeping the signal alive, editors cutting highlights, and social/stream operators pushing it to the internet. Underneath all of them is the entry role most people overlook: the **utility technician**.

**Why it matters.** Almost nobody starts on-air. You start by being useful to the crew, and "useful" has a shape you can learn. Knowing the roles tells you which door to knock on first — and most first doors are technical support, not the microphone.

**The core roles.**
- **On-air talent** — announcers, hosts, play-by-play and color commentators. The U.S. Bureau of Labor Statistics classifies these under *announcers and DJs* (U.S. Bureau of Labor Statistics [BLS], 2024a).
- **Producer / director** — decide what the audience sees and hears, and when; classified under *producers and directors* (BLS, 2024b).
- **Camera & AV operators** — run cameras and the AV gear; *film and video editors and camera operators* and *broadcast, sound, and video technicians* (BLS, 2024c, 2024d).
- **Broadcast engineer / technician** — sets up, operates, and maintains the equipment that captures and transmits the signal (BLS, 2024d). The Society of Broadcast Engineers is this role's professional home (Society of Broadcast Engineers [SBE], n.d.).
- **Editor** — assembles footage into highlights, packages, and replays (BLS, 2024c).
- **Social / stream operations** — encode, caption, and distribute the show online; a fast-growing slice as audiences move to streaming (National Association of Broadcasters [NAB], n.d.).
- **Utility technician** — the general-support role: pulling and dressing cable, rigging and de-rigging gear, taping runs, and helping every other department. It is the classic way in, and it is where you prove reliability.

**Real-world example.** At a live game, the utility tech runs a camera cable from the truck to a hand-held operator on the sideline, secures the slack so nobody trips, and stands by to move with the shot. Do that flawlessly for a season and the crew learns your name — that is how the next job finds you.

**Practical application.** List the seven roles above. Next to each, write one thing that role does that you could learn in the next month. Circle the utility-technician line — that is your likely first job.

**Next steps.** See what these jobs pay and whether they are growing — the numbers below decide where you aim.

## Sources
National Association of Broadcasters. (n.d.). *About NAB*. https://www.nab.org/

Society of Broadcast Engineers. (n.d.). *About SBE*. https://www.sbe.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm

U.S. Bureau of Labor Statistics. (2024b). *Producers and directors*. Occupational Outlook Handbook. https://www.bls.gov/ooh/entertainment-and-sports/producers-and-directors.htm

U.S. Bureau of Labor Statistics. (2024c). *Film and video editors and camera operators*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },
    {
      slug: "pay-and-outlook",
      title: "2 · Pay, outlook, and where the jobs really are",
      section: "Section 1 · The landscape & roles",
      body: `**Concept overview.** Before you invest years, look at the data. The U.S. Bureau of Labor Statistics publishes median pay and 10-year job-growth projections for every broadcasting role in its *Occupational Outlook Handbook* (OOH). Read it the way an investor reads a prospectus.

**Why it matters.** The OOH is the most authoritative free labor-market source in the U.S. It tells you which roles are growing (aim there), which are flat, and roughly what to expect in pay — so you set realistic goals and can talk credibly to a hiring manager.

**What the data says (2023 medians, U.S.).**
- **Broadcast, sound, and video technicians** — median about **$56,600**/year; overall employment projected to grow **faster than average** through 2033, largely because content and streaming keep expanding (BLS, 2024d).
- **Film and video editors and camera operators** — median about **$63,800**/year (editors higher than camera operators), with steady demand tied to more video everywhere (BLS, 2024c).
- **Producers and directors** — median about **$85,300**/year; growth about **as fast as average** (BLS, 2024b).
- **Announcers and DJs** — median about **$45,600**/year; **little or no change** overall, so on-air is the most competitive door (BLS, 2024a).

*(Figures are national medians and shift each year — always confirm the current number on the BLS page for your role and area before you quote it. Treat these as a labeled snapshot, not a promise.)*

**Real-world example.** A learner deciding between "camera operator" and "on-air announcer" checks the OOH: the technical role pays more at the median and is growing, while announcing is flat and hyper-competitive. They start technical to get in the building, then pursue on-air on the side — a data-driven plan.

**Practical application.** Open the OOH pages for two roles you like. Write down each one's median pay, projected growth, and typical entry-level education. Pick the role with the best growth-to-competition ratio as your first target.

**Next steps.** You have a target role. Now build the thing that gets you hired: your calling card.

## Sources
U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm

U.S. Bureau of Labor Statistics. (2024b). *Producers and directors*. Occupational Outlook Handbook. https://www.bls.gov/ooh/entertainment-and-sports/producers-and-directors.htm

U.S. Bureau of Labor Statistics. (2024c). *Film and video editors and camera operators*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },
    {
      slug: "utility-technician-and-rigging",
      title: "3 · The utility technician — your fastest way in (and why knots matter)",
      section: "Section 1 · The landscape & roles",
      body: `**Concept overview.** The **utility technician** (sometimes "utility" or "cable utility") is the crew's general-support hand. You pull and coil cable, dress and secure runs so nobody trips, help rig and de-rig cameras and lights, and back up whichever department needs hands. It is the most common paid entry point on a live sports crew — and it is where you earn trust.

**Why it matters.** You do not need a demo reel to be a utility tech; you need to be reliable, safe, and fast. Because the work involves securing gear, tying off cable, and rigging on truss and stands, **basic knot and rigging skill is a real, hireable competency**. A tech who can throw a clean, quick-release hitch and coil cable so it runs free is worth more than one who leaves a tangled, unsafe mess.

**Knots and rigging — the cross-link.** Camera cables, mic stands, banners, backdrops, and lighting all get secured with rope, straps, and ties. Knowing which knot holds under load, which one unties fast when you strike the set, and how to coil so a cable pays out without kinking is day-one utility work. **Learn this properly in the companion _Knot-Tying & Rope Work_ course on Learn.WitUS** — the bowline (a fixed loop that will not slip), the clove hitch and round-turn-and-two-half-hitches (securing to a rail or truss), the trucker's hitch (tensioning a run), and safe coiling. Bring those skills to a broadcast crew and you are immediately more useful than a rookie who can only tape.

**Real-world example.** During a rain delay, the utility tech re-secures a camera cable that came loose on the truss using a round turn and two half-hitches, coils the excess out of the walkway, and tapes the last run — the show comes back on air with nothing to trip over. That quiet competence is what gets a utility tech invited back.

**Practical application.** Learn four knots to muscle memory: a bowline, a clove hitch, a round turn and two half-hitches, and a trucker's hitch — then practice coiling a length of cable or rope so it pays out cleanly. (Do the drills in the _Knot-Tying & Rope Work_ course.) Time yourself; speed and cleanliness both count on a live crew.

**Next steps.** With a way in identified, build the materials that prove you belong: reel, résumé, and brand.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — Your calling card
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "demo-reel",
      title: "4 · The demo reel: your 90-second audition",
      section: "Section 2 · Your calling card",
      body: `**Concept overview.** A **demo reel** is a short, tightly edited highlight of your best work — your audition on a loop. On-air talent shows themselves presenting; producers and editors show finished packages; camera and technical crew show clean, well-shot footage they were responsible for.

**Why it matters.** Hiring managers watch the first 15–30 seconds and stop. A reel proves, not claims. In broadcasting, "show me" always beats "trust me."

**How to build one.**
- **Lead with your strongest 10 seconds.** No slow logo intro.
- **Keep it 60–120 seconds.** Longer is not better; tighter is.
- **Match the reel to the role.** On-air: energy, clarity, presence. Technical: framing, focus, exposure, and clean audio. Editing: pacing and storytelling.
- **Show real conditions.** Live, noisy, imperfect environments read as experience.
- **Caption what you did.** "Camera operator," "produced & edited," "play-by-play" — credit only your work.

**Real-world example.** An aspiring sideline reporter with no TV credits films themselves reporting from a real local game — stand-up intro, a quick interview, a wrap — and cuts a 75-second reel. It is not network-polished, but it shows they can do the job unscripted, which is exactly what a small-market station needs to see.

**Practical application.** Storyboard a 90-second reel for your target role. List the 5–6 clips you would include and what each proves. If you do not have the clips yet, plan the shoot that gets them — a local game, a school event, a mock broadcast.

**Next steps.** Wrap the reel in a résumé and portfolio that a recruiter can skim in ten seconds.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },
    {
      slug: "resume-portfolio-brand",
      title: "5 · Résumé, portfolio, and personal brand",
      section: "Section 2 · Your calling card",
      body: `**Concept overview.** Your reel gets watched only if the paperwork around it earns the click. That paperwork is three things: a **one-page résumé**, an online **portfolio** (a simple site or profile hosting your reel and work), and a **personal brand** — the consistent, professional way you show up on social platforms.

**Why it matters.** Broadcasting is a relationship-and-reputation business. A recruiter often finds you before you find the job posting. What they see — a clean résumé, a working portfolio link, and social feeds that look like a colleague and not a liability — decides whether they reach out.

**Build the three pieces.**
- **Résumé (one page).** Roles held, skills (cameras, switchers, editing software, live streaming, rigging/knots for utility work), and measurable results. List gear and software by name — hiring managers search for exact tools.
- **Portfolio.** One link that opens to your reel plus 2–4 sample projects, each with a one-line "what I did." Keep it loading fast and mobile-friendly.
- **Personal brand & socials.** Pick your lane (sports, news, tech). Post your work, tag events you cover, and keep it professional — recruiters *will* scroll. Consistency signals reliability.

**Real-world example.** A camera assistant lands a freelance gig because a producer clicked their portfolio link in an email signature, watched a 60-second reel, and saw on the résumé that they already knew the exact switcher the truck runs — one skim, one hire.

**Practical application.** Draft your one-page résumé now. List every piece of gear and software you can operate by name, and add a "utility / rigging" line if you have done the knots work. Reserve a portfolio URL and put your reel behind it.

**Next steps.** Employers will ask what you actually know. Start with the fundamentals of sound and picture.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — Audio & video fundamentals
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "signal-flow-and-audio",
      title: "6 · Signal flow and audio fundamentals",
      section: "Section 3 · Audio & video fundamentals",
      body: `**Concept overview.** Every broadcast is a chain: a **source** (mic, camera) → a **mixer/switcher** → a **recorder or transmitter** → the audience. Following that chain is called **signal flow**, and it is the single most useful mental model on a crew. On the audio side, you also need to know your **microphones** and the biggest killer of clean sound: bad levels.

**Why it matters.** When something breaks live, you troubleshoot along the signal flow — source, cable, connection, mixer, output — until you find the dead link. Broadcast technicians do exactly this work: setting up and operating the equipment that captures and moves the signal (BLS, 2024d). Poor audio sinks a broadcast faster than poor video; viewers forgive a soft picture but not sound they cannot hear.

**Microphones you will meet.**
- **Dynamic** — rugged, handles loud sources; the sideline reporter's handheld.
- **Condenser** — sensitive and detailed; booth and studio work.
- **Lavalier (lav)** — clip-on, hands-free; interviews and hosts.
- **Shotgun** — highly directional; captures a subject at distance and rejects crowd noise.

**Levels and the golden rule.** Set gain so the loudest moments peak safely below distortion (a common target is around −6 to −3 dBFS on the meter) — never let it "clip" into the red, which is unrecoverable. Ride the levels; do not set and forget.

**Real-world example.** A reporter's mic goes silent on air. The audio tech walks the signal flow: mic (on?), cable (seated?), channel (muted or gain down?), output (routed?). The fault is a half-unplugged cable at the mixer — found in seconds because they followed the chain.

**Practical application (drill).** Take any mic and recorder. Record yourself speaking softly, normally, and loudly. Watch the meter and set gain so the loud take peaks near −3 dBFS without clipping. Then unplug the cable mid-record and note exactly where the signal dies — that is signal-flow troubleshooting.

**Next steps.** Sound is half the job. Now make the picture look intentional.

## Sources
U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },
    {
      slug: "lighting-and-framing",
      title: "7 · Lighting and framing to be useful on day one",
      section: "Section 3 · Audio & video fundamentals",
      body: `**Concept overview.** Two skills make raw footage look like broadcast: **lighting** (controlling how light falls on the subject) and **framing** (where the subject sits in the shot). You do not need to be a cinematographer to help — you need the working basics camera operators use every day (BLS, 2024c).

**Why it matters.** A well-lit, well-framed shot reads as "professional" before a single word is spoken. On a small crew, the person who can light an interview and frame it cleanly is instantly employable.

**Lighting basics — three-point lighting.**
- **Key light** — the main light, off to one side of the subject.
- **Fill light** — softer, opposite the key, to lift the shadows.
- **Back (rim) light** — behind the subject, separating them from the background.
Add awareness of **white balance** (matching the camera to the light's color so whites look white) and **exposure** (not too dark, not blown out).

**Framing basics.**
- **Rule of thirds** — place the subject off-center, eyes about a third down from the top.
- **Headroom & lookroom** — a little space above the head; more space in the direction they face or move.
- **Shot sizes** — wide (context), medium (interview), close-up (emotion). Cut between them for a professional feel.

**Real-world example.** A one-person crew shooting a coach interview sets a soft key at 45°, bounces fill off a white wall, frames the coach on the left third with room to look right, and checks exposure on the camera's zebras. The result looks like TV, shot by one person with two lights.

**Practical application (drill).** Light and frame a single interview. Use any three lights (or two lights plus a bounce), place your subject on a third, set white balance and exposure, and record 30 seconds. Compare it to a flat, straight-on phone shot — the difference is your new skill.

**Next steps.** Fundamentals in hand, step into the live-production environment where these come together in real time.

## Sources
U.S. Bureau of Labor Statistics. (2024c). *Film and video editors and camera operators*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — Live production & streaming basics
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "the-switcher-and-control-room",
      title: "8 · The control room: switcher, graphics, and replay",
      section: "Section 4 · Live production & streaming basics",
      body: `**Concept overview.** A live broadcast is assembled in real time in a **control room** (or a production truck). At its heart is the **video switcher** (the vision mixer) that cuts between cameras and sources on the director's call. Around it sit **graphics** (scores, names, lower-thirds), **replay**, and audio.

**Why it matters.** Understanding the control room lets you slot into it. The producer decides content; the **technical director** operates the switcher; graphics and replay operators feed it. Even utility and camera roles need to know how their feed reaches air.

**Key positions and gear.**
- **Producer** — runs the show's content and timing (BLS, 2024b).
- **Director** — calls the shots ("ready camera 2… take 2").
- **Technical director (TD)** — physically operates the switcher.
- **Switcher / vision mixer** — cuts, dissolves, and keys between sources; keys the graphics over live video.
- **Graphics (CG) operator** — builds and triggers the scorebug, lower-thirds, and stats.
- **Replay operator** — marks and plays back key moments (see the sports workflows section).

**Real-world example.** On a touchdown, the director calls "graphic up, replay ready" — the CG operator pushes the updated score, the TD keys it over the wide shot, and the replay operator queues the play so it airs seconds later. A dozen people, one seamless moment.

**Practical application.** Download a free software switcher (for example, OBS Studio or a vendor's free vMix/ATEM trial). Wire two video sources — a webcam and a screen or a second camera — and practice cutting between them cleanly on cue. Add a lower-third graphic. You have just run a control room.

**Next steps.** Once it is cut, it has to reach the audience — learn encoding and streaming.

## Sources
U.S. Bureau of Labor Statistics. (2024b). *Producers and directors*. Occupational Outlook Handbook. https://www.bls.gov/ooh/entertainment-and-sports/producers-and-directors.htm`,
    },
    {
      slug: "encoding-and-streaming",
      title: "9 · Encoding, streaming, and the FCC basics",
      section: "Section 4 · Live production & streaming basics",
      body: `**Concept overview.** Getting a show to the audience means either **transmitting** it over the air (traditional broadcast) or **encoding and streaming** it over the internet — increasingly, both. Encoding compresses your video into a format the internet can carry; streaming pushes it to a platform or CDN for viewers.

**Why it matters.** Audiences have moved online, so **social/stream operations** is one of the fastest-growing entry lanes — and the skills (encoders, bitrates, protocols like RTMP/SRT, captions) are learnable on a laptop (NAB, n.d.). Meanwhile, anything transmitted over the public airwaves is regulated by the **Federal Communications Commission (FCC)**, which licenses stations, assigns spectrum, and sets rules broadcasters must follow (Federal Communications Commission [FCC], n.d.-a).

**Streaming basics.**
- **Encoder** — hardware or software (e.g., OBS) that compresses your feed.
- **Bitrate & resolution** — higher looks better but needs more upload bandwidth; match them to your connection.
- **Protocol** — RTMP is the common streaming protocol; SRT is favored for unreliable networks.
- **Captions & accessibility** — a professional requirement, not an extra.

**FCC basics you should know.**
- The FCC **licenses broadcast stations** and manages the **spectrum** they transmit on (FCC, n.d.-a).
- Broadcasters must follow FCC rules, including **closed-captioning** requirements for TV programming (FCC, n.d.-b).
- Certain equipment operators historically needed FCC operator permits; today most technical work is governed by the station's FCC license rather than an individual permit — but knowing the FCC exists and why is part of being a credible broadcast professional.

**Real-world example.** A stream op sets OBS to a 6 Mbps, 1080p RTMP output for a local game's YouTube feed, enables auto-captions for accessibility, and monitors dropped frames — the online broadcast side of the same event the truck is airing over the air under the station's FCC license.

**Practical application.** In OBS (or similar), set up a stream to a private/unlisted destination. Pick a resolution and bitrate that match your upload speed, start the stream, and watch the health/dropped-frame indicator. Turn on captions. You have run a basic streaming chain end to end.

**Next steps.** With production covered, step in front of the lens — the on-air craft.

## Sources
Federal Communications Commission. (n.d.-a). *What we do*. https://www.fcc.gov/about-fcc/what-we-do

Federal Communications Commission. (n.d.-b). *Closed captioning on television*. https://www.fcc.gov/consumers/guides/closed-captioning-television

National Association of Broadcasters. (n.d.). *About NAB*. https://www.nab.org/`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — On-air & interviewing
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "voice-and-teleprompter",
      title: "10 · Voice, delivery, and reading the teleprompter",
      section: "Section 5 · On-air & interviewing",
      body: `**Concept overview.** On-air work is a performance skill built on **voice** (pace, pitch, articulation, breath) and **delivery** (sounding natural while reading, often off a **teleprompter**). Announcers and hosts live or die by clarity and energy (BLS, 2024a).

**Why it matters.** The camera and mic exaggerate everything — a rushed pace, a swallowed word, a flat tone. Trained delivery is the difference between an amateur and a pro, and it is coachable, not innate.

**Voice fundamentals.**
- **Breath support** — speak from the diaphragm; it steadies your voice and stops you running out of air.
- **Pace** — slow down; nervous speakers rush. Punctuation is permission to breathe.
- **Articulation** — finish your consonants; the mic will not fix mush.
- **Energy** — lift the read; conversational-but-elevated beats monotone.

**Teleprompter craft.** Read a few words ahead of the scroll so your delivery sounds like thinking, not reading. Keep your eyes soft on the lens, let the operator match the scroll to your natural pace (never the other way around), and mark your script for emphasis and breaths.

**Real-world example.** A new anchor sounds robotic reading prompter copy. A coach has them slow down, mark breath points with slashes, and read one line ahead — within a week they sound like they are talking to a friend, not reciting.

**Practical application (drill).** Write 30 seconds of copy. Record yourself reading it three ways: too fast, natural, and marked-for-breath. Then scroll it on a free teleprompter app and read one line ahead. Listen back — pick the take that sounds like a conversation.

**Next steps.** The most-watched on-air skill in sports is calling the action. Learn play-by-play and color.

## Sources
U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },
    {
      slug: "play-by-play-and-interviewing",
      title: "11 · Play-by-play, color, and interview craft",
      section: "Section 5 · On-air & interviewing",
      body: `**Concept overview.** Sports broadcasting has two on-air voices: the **play-by-play** announcer (describes the action — the *what* and *when*) and the **color commentator** (adds analysis, context, and story — the *why*). Both are announcer roles under the BLS classification (BLS, 2024a). Alongside them sits a third essential skill: **interviewing**.

**Why it matters.** These are the visible jobs people dream about — and the most competitive doors (announcing shows little projected growth per the OOH), so craft matters even more (BLS, 2024a). The good news: play-by-play, color, and interviewing are practiced skills you can drill on any game or guest.

**Play-by-play essentials.**
- **Describe for the blind listener.** On radio especially, if you do not say it, it did not happen. Score, time, down, count, who has the ball.
- **Set the picture, then react.** Location and situation first; emotion on the payoff.
- **Give the score often.** Viewers and listeners join late.

**Color essentials.**
- **Explain, do not just describe.** Why did that play work? What is the adjustment?
- **Stay out of the play-by-play's way.** Talk between the action, not over it.

**Interview craft.**
- **Open-ended questions.** "Walk me through that final drive" beats "Were you happy?"
- **Listen and follow up.** The best question is the one their last answer suggested.
- **Keep it tight.** Short questions, let them talk, respect the clock.

**Real-world example.** Muting a televised game and calling it yourself is the classic drill — you learn to fill, to give the score, and to react to the play, all without a net. Pair it by interviewing a teammate about the game afterward using only open-ended questions.

**Practical application (drill).** Mute five minutes of a game and record your own play-by-play, giving the score at least twice. Then record a two-minute mock interview using only open-ended questions and one genuine follow-up. Listen back for dead air and closed questions.

**Next steps.** Sports has workflows the rest of broadcasting does not — stats, spotting, and replay.

## Sources
U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — Sports-specific workflows
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "stats-spotting-replay",
      title: "12 · Stats, spotting boards, and replay",
      section: "Section 6 · Sports-specific workflows",
      body: `**Concept overview.** Sports broadcasts run on **information delivered fast**: live **stats**, the announcer's **spotting board** (a pre-built cheat sheet of players and facts), and **replay** (marking and re-airing key moments). These workflows are what make a sports telecast different from a newscast.

**Why it matters.** A broadcast lives or dies on getting the right graphic, stat, or replay to air in seconds. These are concrete, learnable jobs — and often the entry roles adjacent to utility that get you into the sports side specifically.

**The workflows.**
- **Stats.** A stats operator feeds real-time numbers to the graphics system and the booth. Accuracy under time pressure is the whole job.
- **Spotting board.** Announcers build a board (often a two-team roster grid) with numbers, names, pronunciations, and storylines so they can identify a player instantly and add context on the fly. Building your own board for a game is a rite of passage.
- **Replay.** The replay operator marks in/out points on plays as they happen and hands the director clean angles to roll — the touchdown, the foul, the finish — within seconds.

**Real-world example.** A quarterback scrambles for a first down. The stats op updates the yardage, the announcer glances at the spotting board to name the tackler and note it is his career-high in tackles, and the replay operator rolls the scramble from two angles — three workflows, one clean 20 seconds of television.

**Practical application (drill).** Build a spotting board for a real upcoming game: a grid of both rosters with numbers, correct name pronunciations, and one storyline per key player. Then watch the game using your board to identify players in real time. Note where it failed and improve it.

**Next steps.** Zoom out to the whole game day — who does what, and when.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },
    {
      slug: "game-day-roles",
      title: "13 · Game day: roles, call times, and where utility fits",
      section: "Section 6 · Sports-specific workflows",
      body: `**Concept overview.** A live sports broadcast is a choreographed day. Hours before air, the crew **rigs** (sets up cameras, cable, audio, and comms); at **call time** everyone is in position; the show airs; then the crew **strikes** (tears down and packs). Knowing this timeline tells you where you fit and how to be indispensable.

**Why it matters.** The day starts and ends with the technical and utility crew, not the talent. If you are breaking in, the setup-and-strike window is where you are most needed and most visible. Show up early, work safe, and never leave until the strike is done — that reputation gets you the next call.

**The game-day timeline.**
1. **Load-in & rig** — trucks arrive; cable is pulled and dressed; cameras, audio, and comms are set. **Utility technicians and camera assistants carry this** — and clean, safe rigging (secured cable, proper knots and ties on stands and truss) is judged here.
2. **Setup & test** — signal flow checked end to end; graphics and replay loaded; comms tested.
3. **Rehearsal / pre-game** — the director runs through opens and camera assignments.
4. **Air** — everyone holds position; utility stands by to fix, move, and support live.
5. **Strike** — de-rig, coil cable properly, pack; the crew is not done until the truck is loaded.

**Cross-link — rigging safety.** Rigging and striking are hands-on rope-and-cable work: securing runs so nobody trips, tying gear to stands and rails, and coiling cable so it pays out clean next time. **The companion _Knot-Tying & Rope Work_ course on Learn.WitUS teaches the exact knots (bowline, clove hitch, round turn and two half-hitches, trucker's hitch) and safe coiling that make you valuable on the rig-and-strike crew.**

**Real-world example.** A new utility tech arrives 30 minutes early, helps pull cable and dress it with clean ties, stands by through the game to move a cable on cue, and stays to coil and pack every run at strike. The crew lead marks them as reliable — and calls them for the next three games.

**Practical application.** Map your target role onto the five-step timeline above: what are you doing at load-in, at air, and at strike? Write one way to be more useful in each phase. If utility is your entry, review your knots.

**Next steps.** You know the craft and the day. Now go get hired.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — Getting hired
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "internships-and-freelancing",
      title: "14 · Internships, freelancing, and building credits",
      section: "Section 7 · Getting hired",
      body: `**Concept overview.** Almost nobody's first broadcasting job is a staff position. You break in through **internships** (learn on a real crew, often for credit or low pay), **freelancing / day-calling** (getting hired per event, common for camera, utility, and technical roles), and **stringing together credits** until you have a résumé and a network.

**Why it matters.** Employers hire proof of reliability, and reliability is proven one gig at a time. A season of local freelance utility or camera work beats a degree with no credits when a truck needs hands next Saturday.

**How to start.**
- **Internships.** Station, sports team, and production-company internships are the classic entry. Treat them as a months-long interview.
- **Freelance / day rates.** Register with local production companies and crewing services; say yes to utility, camera-assist, and audio-utility calls. Show up early, work safe, coil clean.
- **Local & small-market first.** Small markets and local sports let you touch every role fast; the OOH notes many broadcast and technical workers start in smaller markets and move up (BLS, 2024a, 2024d).
- **Volunteer reps.** Community access, school sports, and church/event streaming give you real credits and reel material now.

**Real-world example.** A student interns with a regional sports network one summer, gets added to the freelance utility list, works a dozen games that fall as a day-caller, and is first-call for a camera-assist opening the next year — a staff path built entirely from credits.

**Practical application.** List three internships and three local production companies or crewing services to contact this month. Draft the two-sentence email: who you are, what you can do (name the gear/skills, including rigging/knots for utility), and that you will take any call to prove it.

**Next steps.** As you rack up gigs, understand the unions and the network that turn gigs into a career.

## Sources
U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },
    {
      slug: "unions-networking-first-job",
      title: "15 · Unions, networking, and landing the first job",
      section: "Section 7 · Getting hired",
      body: `**Concept overview.** Broadcasting careers are shaped by **networking** (who knows your work), often by **unions** (which represent much of the technical and crew workforce), and by professional bodies like the **SBE** (engineers) and the **NAB** (the industry association). Knowing this landscape turns scattered gigs into a durable career.

**Why it matters.** Many broadcast, live-event, and technical roles — camera, utility, audio, engineering — are union or union-adjacent in larger markets. Understanding that early tells you how pay, scheduling, and advancement really work, and where to build relationships.

**Unions and organizations to know.**
- **IATSE** (International Alliance of Theatrical Stage Employees) — represents many crew, camera, and technical roles across live events and production.
- **NABET-CWA** (National Association of Broadcast Employees and Technicians, part of the Communications Workers of America) — represents broadcast technicians and related workers at some networks and stations.
- **SBE** — the Society of Broadcast Engineers: certification, education, and a professional network for engineers and technicians (SBE, n.d.).
- **NAB** — the National Association of Broadcasters: the industry association, whose annual convention and career resources are major networking venues (NAB, n.d.).

*(Union representation varies by employer, market, and role — confirm the specifics for a given job with that employer or local, rather than assuming. Treat the names above as a map, not a rule.)*

**Networking that works.**
- **Be excellent on small gigs.** Your best marketing is a crew lead who wants you back.
- **Show up to the rooms.** Local sports, station events, SBE chapters, and NAB resources put you near people who hire.
- **Keep in touch.** A short, specific thank-you after a gig keeps you top of mind for the next call.

**Real-world example.** A freelance utility tech joins their local SBE chapter, meets a chief engineer at a meeting, mentions their rigging and RF-cable experience, and gets referred to a station that needs a technician — hired on a relationship, backed by real credits.

**Practical application.** Pick one organization from above (SBE, NAB, or the relevant union/local) and find its website or local chapter. Note one concrete next step — a meeting to attend, a resource to read, or a membership to consider — and put it on your calendar. Then send one thank-you note to someone you have already worked with.

**Where the jobs are.** The OOH is your ongoing map: it lists which broadcasting roles are growing, typical entry education, and pay by area (BLS, 2024a, 2024b, 2024c, 2024d). Streaming and content growth keep technical and production roles expanding, so aim where the data points (NAB, n.d.). Start technical or utility to get in the building, keep building credits and relationships, and move toward your target role.

## A note on how careers get built here
No one hands you the microphone on day one. You get in by being the reliable person who can pull cable, tie a clean knot, light an interview, and cut a switcher — then you build up. Every skill in this course is a door. Walk through the technical ones first; they are propped open widest.

## Sources
National Association of Broadcasters. (n.d.). *About NAB*. https://www.nab.org/

Society of Broadcast Engineers. (n.d.). *About SBE*. https://www.sbe.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm

U.S. Bureau of Labor Statistics. (2024b). *Producers and directors*. Occupational Outlook Handbook. https://www.bls.gov/ooh/entertainment-and-sports/producers-and-directors.htm

U.S. Bureau of Labor Statistics. (2024c). *Film and video editors and camera operators*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EXERCISE — fill-in production drill
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "broadcasting-exercise",
      title: "16 · Exercise: name the role, tool, and skill",
      section: "Section 7 · Getting hired",
      body: `A quick fill-in drill on the vocabulary a broadcast crew uses every day. Type the term the clue points to; the answer key explains each one. Right idea with a small spelling slip counts as "close."`,
      exercise: {
        instructions:
          "Fill in the broadcasting term each clue describes. One or two words each.",
        items: [
          {
            prompt:
              "The general-support entry role on a live crew — pulls and dresses cable, rigs gear, and helps every department: the ______ ______.",
            answer: "utility technician",
            accept: ["utility tech", "utility"],
            hint: "It is the classic paid way into a sports broadcast crew.",
            explanation:
              "The utility technician is the fastest way in — and its cable, rigging, and knot work links directly to the companion Knot-Tying & Rope Work course.",
          },
          {
            prompt:
              "The most authoritative free U.S. source for a role's median pay and job-growth projection is the BLS ______ ______ ______ (three words).",
            answer: "Occupational Outlook Handbook",
            accept: ["occupational outlook handbook", "OOH", "ooh"],
            hint: "Published by the U.S. Bureau of Labor Statistics; abbreviated OOH.",
            explanation:
              "The Occupational Outlook Handbook (OOH) is the labor-market prospectus you check before committing to a role (BLS, 2024a–d).",
          },
          {
            prompt:
              "The control-room device that cuts, dissolves, and keys between cameras and sources on the director's call: the video ______.",
            answer: "switcher",
            accept: ["vision mixer", "video switcher"],
            hint: "Also called the 'vision mixer'; the technical director operates it.",
            explanation:
              "The switcher (vision mixer) is the heart of live production, operated by the technical director.",
          },
          {
            prompt:
              "Following the chain source → mixer/switcher → recorder/transmitter → audience — and troubleshooting along it — is called ______ ______.",
            answer: "signal flow",
            accept: ["signal path"],
            hint: "It is how you find the dead link when something breaks live.",
            explanation:
              "Signal flow is the crew's core mental model; you troubleshoot a live failure by walking the chain.",
          },
          {
            prompt:
              "The federal agency that licenses broadcast stations, manages spectrum, and sets rules like closed-captioning is the ______ ______ ______ (three words, or its initials).",
            answer: "Federal Communications Commission",
            accept: ["FCC", "fcc", "federal communications commission"],
            hint: "Three letters: F__.",
            explanation:
              "The FCC regulates over-the-air broadcasting — licensing, spectrum, and captioning rules (FCC, n.d.-a, n.d.-b).",
          },
          {
            prompt:
              "The announcer's pre-built cheat sheet of rosters, numbers, name pronunciations, and storylines is the ______ ______.",
            answer: "spotting board",
            accept: ["spotting boards"],
            hint: "Building one for a real game is a sports-broadcasting rite of passage.",
            explanation:
              "The spotting board lets an announcer identify players instantly and add context on the fly.",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // QUIZ — final graded gate (passingScore 70)
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "broadcasting-final-quiz",
      title: "17 · Final quiz: break into broadcasting",
      section: "Section 7 · Getting hired",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt:
              "Which role is the most common PAID entry point onto a live sports broadcast crew?",
            options: [
              "Play-by-play announcer",
              "Utility technician",
              "Executive producer",
              "Technical director",
            ],
            correctIndex: 1,
            explanation:
              "The utility technician (cable, rigging, general support) is the classic way in — you prove reliability before you get a specialized or on-air role.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt:
              "Why does the course tell utility-technician hopefuls to learn knots and rigging (and point them to the Knot-Tying & Rope Work course)?",
            options: [
              "Knots are only decorative on a set",
              "Securing cable/gear, tying off runs, and clean coiling are real day-one utility skills that make you more hireable",
              "Only on-air talent needs knots",
              "The FCC requires a knot-tying license",
            ],
            correctIndex: 1,
            explanation:
              "Utility and AV work involves securing cable and rigging gear; knowing the bowline, clove hitch, round turn and two half-hitches, and trucker's hitch — taught in the companion Knot-Tying course — makes you immediately useful.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt:
              "What is the most authoritative FREE source for a broadcasting role's median pay and 10-year job outlook?",
            options: [
              "A random salary-comparison website",
              "The U.S. Bureau of Labor Statistics Occupational Outlook Handbook",
              "A job board's 'estimated' salary",
              "A social-media influencer's video",
            ],
            correctIndex: 1,
            explanation:
              "The BLS Occupational Outlook Handbook publishes median pay and projected growth for every broadcasting role and is the field's most authoritative free labor-market source.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt:
              "According to the OOH data discussed, which on-air lane is the MOST competitive because it shows little or no projected employment change?",
            options: [
              "Broadcast, sound, and video technicians",
              "Producers and directors",
              "Announcers and DJs",
              "Film and video editors",
            ],
            correctIndex: 2,
            explanation:
              "Announcers and DJs show little or no projected change, making on-air the most competitive door — a reason many people start technical to get in the building.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "A demo reel should primarily do what?",
            options: [
              "Run at least five minutes with a slow logo intro",
              "List your hobbies and references",
              "Lead with your strongest clip and PROVE what you can do in about 60–120 seconds",
              "Avoid crediting which parts were your work",
            ],
            correctIndex: 2,
            explanation:
              "A reel is a short audition: lead with your strongest 10 seconds, keep it 60–120 seconds, match it to the role, and caption exactly what you did.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt:
              "When audio fails live, the fastest way to find the fault is to:",
            options: [
              "Replace every piece of gear at once",
              "Walk the signal flow — source, cable, connection, mixer, output — until you find the dead link",
              "Turn all levels to maximum",
              "Restart the entire broadcast",
            ],
            correctIndex: 1,
            explanation:
              "Troubleshooting means following the signal flow step by step (source → cable → mixer → output) to isolate the broken link.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "In three-point lighting, the back (rim) light's job is to:",
            options: [
              "Be the main light on the subject's face",
              "Fill in the shadows opposite the key",
              "Separate the subject from the background",
              "Set the camera's white balance",
            ],
            correctIndex: 2,
            explanation:
              "The key is the main light, fill lifts the shadows, and the back/rim light separates the subject from the background for a professional look.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt:
              "Which agency licenses U.S. broadcast stations, manages spectrum, and sets rules like closed-captioning?",
            options: [
              "The National Association of Broadcasters (NAB)",
              "The Society of Broadcast Engineers (SBE)",
              "The Federal Communications Commission (FCC)",
              "The Bureau of Labor Statistics (BLS)",
            ],
            correctIndex: 2,
            explanation:
              "The FCC regulates over-the-air broadcasting — licensing stations, managing spectrum, and enforcing rules such as TV closed-captioning.",
            sourceLessonSlug: "encoding-and-streaming",
          },
          {
            prompt:
              "The difference between play-by-play and color commentary is best described as:",
            options: [
              "Play-by-play analyzes strategy; color describes the action",
              "Play-by-play describes the action (what/when); color adds analysis and story (why)",
              "They are two names for the exact same job",
              "Color handles the score and play-by-play stays silent",
            ],
            correctIndex: 1,
            explanation:
              "Play-by-play describes the action as it happens; color commentary adds the analysis, context, and story between the plays.",
            sourceLessonSlug: "play-by-play-and-interviewing",
          },
          {
            prompt:
              "Which combination best describes a realistic path to a first broadcasting job?",
            options: [
              "Wait for a network to offer you an on-air staff role first",
              "Internships + freelance/day-call gigs (often utility or camera) to build credits, plus networking through groups like SBE and NAB",
              "Only apply once you have a four-year degree and never freelance",
              "Avoid unions, local markets, and volunteer gigs entirely",
            ],
            correctIndex: 1,
            explanation:
              "Careers are built from credits: internships and freelance/day-call gigs (often starting in utility or camera) plus networking through unions and organizations like the SBE and NAB.",
            sourceLessonSlug: "unions-networking-first-job",
          },
        ],
      },
    },
  ],
};
