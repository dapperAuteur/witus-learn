// Authored career-starter course for Learn.WitUS, category "Careers & Media":
// how to break into and get hired in sports and media broadcasting. Career-
// oriented and practical, mirrors the "get the job" structure of the
// cyber-security course: cited lessons with a `## Sources` bibliography, sections,
// a fill-in exercise, and a final quiz (per-question explanation + sourceLessonSlug,
// passingScore 70). Original writing; claims cited APA 7 (in-line + Sources) to
// public/authoritative sources: U.S. Bureau of Labor Statistics *Occupational
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
    "A practical, career-focused path into sports and media broadcasting: the roles that actually hire (on-air talent, producer, camera/AV, broadcast engineer, editor, stream ops, and the utility-technician entry role), the calling card that gets you noticed, the audio/video and live-production fundamentals to be useful on day one, and the internship, freelance, union, and networking moves that land a first job. Cited to the U.S. Bureau of Labor Statistics, the NAB, the SBE, and the FCC.",
  lessons: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1: The landscape & roles
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "landscape-and-roles",
      title: "1 · The landscape: who does what on a broadcast",
      section: "Section 1 · The landscape & roles",
      body: `**Concept overview.** "Broadcasting" is not one job. It is a crew. A single sports telecast is made by on-air talent, a producer and director calling the show, camera and audio-visual (AV) operators, a broadcast engineer keeping the signal alive, editors cutting highlights, and social/stream operators pushing it to the internet. Underneath all of them is the entry role most people overlook: the **utility technician**.

**Why it matters.** Almost nobody starts on-air. You start by being useful to the crew, and "useful" has a shape you can learn. Knowing the roles tells you which door to knock on first, and most first doors are technical support, not the microphone.

**The core roles.**
- **On-air talent**: announcers, hosts, play-by-play and color commentators. The U.S. Bureau of Labor Statistics classifies these under *announcers and DJs* (U.S. Bureau of Labor Statistics [BLS], 2024a).
- **Producer / director**: decide what the audience sees and hears, and when; classified under *producers and directors* (BLS, 2024b).
- **Camera & AV operators**: run cameras and the AV gear; *film and video editors and camera operators* and *broadcast, sound, and video technicians* (BLS, 2024c, 2024d).
- **Broadcast engineer / technician**: sets up, operates, and maintains the equipment that captures and transmits the signal (BLS, 2024d). The Society of Broadcast Engineers is this role's professional home (Society of Broadcast Engineers [SBE], n.d.).
- **Editor**: assembles footage into highlights, packages, and replays (BLS, 2024c).
- **Social / stream operations**: encode, caption, and distribute the show online; a fast-growing slice as audiences move to streaming (National Association of Broadcasters [NAB], n.d.).
- **Utility technician**: the general-support role: pulling and dressing cable, rigging and de-rigging gear, taping runs, and helping every other department. It is the classic way in, and it is where you prove reliability.

**Real-world example.** At a live game, the utility tech runs a camera cable from the truck to a hand-held operator on the sideline, secures the slack so nobody trips, and stands by to move with the shot. Do that flawlessly for a season and the crew learns your name: that is how the next job finds you.

**Practical application.** List the seven roles above. Next to each, write one thing that role does that you could learn in the next month. Circle the utility-technician line: that is your likely first job.

**Next steps.** See what these jobs pay and whether they are growing. The numbers below decide where you aim.

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
      recallContent: [
        {
          prompt: "What is the utility technician's role on a broadcast crew, and why is it called the classic way in?",
          answer: "It is the crew's general-support role (pulling and dressing cable, rigging and de-rigging gear, taping runs, and backing up every department); it is the most common paid entry point, where you prove reliability before moving up.",
        },
        {
          prompt: "Besides on-air talent, name three core roles that make a broadcast.",
          answer: "Any three of: producer or director, camera and AV operators, broadcast engineer or technician, editor, and social or stream operations.",
        },
      ],
      title: "2 · Pay, outlook, and where the jobs really are",
      section: "Section 1 · The landscape & roles",
      body: `**Concept overview.** Before you invest years, look at the data. The U.S. Bureau of Labor Statistics publishes median pay and 10-year job-growth projections for every broadcasting role in its *Occupational Outlook Handbook* (OOH). Read it the way an investor reads a prospectus.

**Why it matters.** The OOH is the most authoritative free labor-market source in the U.S. It tells you which roles are growing (aim there), which are flat, and roughly what to expect in pay, so you set realistic goals and can talk credibly to a hiring manager.

**What the data says (2023 medians, U.S.).**
- **Broadcast, sound, and video technicians**: median about **$56,600**/year; overall employment projected to grow **faster than average** through 2033, largely because content and streaming keep expanding (BLS, 2024d).
- **Film and video editors and camera operators**: median about **$63,800**/year (editors higher than camera operators), with steady demand tied to more video everywhere (BLS, 2024c).
- **Producers and directors**: median about **$85,300**/year; growth about **as fast as average** (BLS, 2024b).
- **Announcers and DJs**: median about **$45,600**/year; **little or no change** overall, so on-air is the most competitive door (BLS, 2024a).

*(Figures are national medians and shift each year. Always confirm the current number on the BLS page for your role and area before you quote it. Treat these as a labeled snapshot, not a promise.)*

**Real-world example.** A learner deciding between "camera operator" and "on-air announcer" checks the OOH: the technical role pays more at the median and is growing, while announcing is flat and hyper-competitive. They start technical to get in the building, then pursue on-air on the side: a data-driven plan.

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
      recallContent: [
        {
          prompt: "What is the Occupational Outlook Handbook (OOH), and who publishes it?",
          answer: "It is the U.S. Bureau of Labor Statistics' free reference giving median pay and 10-year job-growth projections for every broadcasting role; you read it the way an investor reads a prospectus.",
        },
        {
          prompt: "Per the OOH data, which on-air lane is the most competitive, and why?",
          answer: "Announcers and DJs, because the role shows little or no projected employment change and comparatively low median pay, so many people start in a technical role to get in the building.",
        },
      ],
      title: "3 · The utility technician: your fastest way in (and why knots matter)",
      section: "Section 1 · The landscape & roles",
      body: `**Concept overview.** The **utility technician** (sometimes "utility" or "cable utility") is the crew's general-support hand. You pull and coil cable, dress and secure runs so nobody trips, help rig and de-rig cameras and lights, and back up whichever department needs hands. It is the most common paid entry point on a live sports crew, and it is where you earn trust.

**Why it matters.** You do not need a demo reel to be a utility tech; you need to be reliable, safe, and fast. Because the work involves securing gear, tying off cable, and rigging on truss and stands, **basic knot and rigging skill is a real, hireable competency**. A tech who can throw a clean, quick-release hitch and coil cable so it runs free is worth more than one who leaves a tangled, unsafe mess.

**Knots and rigging: the cross-link.** Camera cables, mic stands, banners, backdrops, and lighting all get secured with rope, straps, and ties. Knowing which knot holds under load, which one unties fast when you strike the set, and how to coil so a cable pays out without kinking is day-one utility work. **Learn this properly in the companion _Knot-Tying & Rope Work_ course on Learn.WitUS**: the bowline (a fixed loop that will not slip), the clove hitch and round-turn-and-two-half-hitches (securing to a rail or truss), the trucker's hitch (tensioning a run), and safe coiling. Bring those skills to a broadcast crew and you are immediately more useful than a rookie who can only tape.

**Real-world example.** During a rain delay, the utility tech re-secures a camera cable that came loose on the truss using a round turn and two half-hitches, coils the excess out of the walkway, and tapes the last run. The show comes back on air with nothing to trip over. That quiet competence is what gets a utility tech invited back.

**Practical application.** Learn four knots to muscle memory: a bowline, a clove hitch, a round turn and two half-hitches, and a trucker's hitch, then practice coiling a length of cable or rope so it pays out cleanly. (Do the drills in the _Knot-Tying & Rope Work_ course.) Time yourself; speed and cleanliness both count on a live crew.

**Next steps.** With a way in identified, build the materials that prove you belong: reel, résumé, and brand.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 QUIZ
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "quiz-landscape-and-roles",
      title: "Section 1 quiz · The landscape & roles",
      section: "Section 1 · The landscape & roles",
      body: `A graded check on who does what on a broadcast crew, what the labor data actually says about where the jobs are, and why the utility technician's rope work is a hireable skill rather than a chore. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Is broadcasting one job?",
            options: [
              "No, it is a crew",
              "Yes, though the title changes depending on the size of the market",
              "Yes for live sports, though news divides the work between two people",
              "Only in small markets, where one person covers every technical role",
            ],
            correctIndex: 0,
            explanation:
              "A single sports telecast is made by on-air talent, a producer and director, camera and AV operators, a broadcast engineer, editors, and social and stream operators, with a utility technician underneath all of them.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "Which role does the lesson call the entry role most people overlook?",
            options: [
              "The broadcast engineer, who keeps the signal alive through the show",
              "The graphics operator, who builds every score and lower-third on screen",
              "The utility technician",
              "The editor, who cuts the highlights that air after the game ends",
            ],
            correctIndex: 2,
            explanation:
              "Almost nobody starts on-air. Utility is the general-support role underneath every other department, and it is the classic way in.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "Why does knowing the roles matter to someone breaking in?",
            options: [
              "Because a crew expects a newcomer to name every position on sight",
              "It tells you which door to knock on first",
              "Because pay scales are set separately for each named position",
              "Because the union you join depends on which role you first work in",
            ],
            correctIndex: 1,
            explanation:
              "You start by being useful to the crew, and useful has a shape you can learn. Most first doors are technical support, not the microphone.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "Under which Bureau of Labor Statistics category do announcers, hosts, and commentators fall?",
            options: [
              "Producers and directors, since they shape the show as it airs",
              "Broadcast, sound, and video technicians, since they operate a microphone",
              "Film and video editors and camera operators",
              "Announcers and DJs",
            ],
            correctIndex: 3,
            explanation:
              "Play-by-play and color commentators are classified under announcers and DJs, which is also the category whose outlook the next lesson calls the most competitive.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "What do the producer and director decide?",
            options: [
              "Which equipment the truck carries to a given event",
              "What the audience sees and hears, and when",
              "How the signal is compressed before it leaves the building",
              "Which members of the crew are called for the next event",
            ],
            correctIndex: 1,
            explanation:
              "They decide the content and the timing of the show, which is what the producers and directors classification covers.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "What does a broadcast engineer do?",
            options: [
              "Designs the graphics package the show uses through a season",
              "Negotiates the rights that let a network carry a given event",
              "Sets up, operates, and maintains the equipment that captures and transmits",
              "Directs the camera operators from a position on the sideline",
            ],
            correctIndex: 2,
            explanation:
              "The engineer keeps the signal alive: setting up, operating, and maintaining the gear that captures and transmits it.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "Which organization does the lesson name as the broadcast engineer's professional home?",
            options: [
              "The Society of Broadcast Engineers",
              "The National Association of Broadcasters, the industry's trade association",
              "The Federal Communications Commission, which licenses the stations",
              "The Bureau of Labor Statistics, which classifies the occupation",
            ],
            correctIndex: 0,
            explanation:
              "The SBE is the engineer's professional home. The NAB is the industry association, the FCC is the regulator, and the BLS is the statistical agency, all of which appear elsewhere in this course.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "What does the editor do?",
            options: [
              "Reviews the script before the anchor reads it on air",
              "Assembles footage into highlights, packages, and replays",
              "Approves which stories make the show's rundown that night",
              "Checks the broadcast against the station's regulatory obligations",
            ],
            correctIndex: 1,
            explanation:
              "Editors assemble footage into highlights, packages, and replays, and they are classified alongside camera operators.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "What does social and stream operations do?",
            options: [
              "Writes the posts a station publishes about its own programming",
              "Buys the advertising that runs alongside the online feed",
              "Manages the relationships with the platforms that carry the show",
              "Encodes, captions, and distributes the show online",
            ],
            correctIndex: 3,
            explanation:
              "It is a fast-growing slice of the crew, and the reason is straightforward: audiences are moving to streaming.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "What does the utility technician actually do?",
            options: [
              "Pulls and dresses cable, rigs gear, and helps every department",
              "Operates a second camera when the main operator needs relief",
              "Keeps the inventory of equipment loaded on and off the truck",
              "Monitors the outgoing signal for faults during the broadcast",
            ],
            correctIndex: 0,
            explanation:
              "Pulling and dressing cable, rigging and de-rigging gear, taping runs, and helping every other department. It is where you prove reliability.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "In the sideline example, what does the utility tech do after running the camera cable?",
            options: [
              "Reports the cable run to the engineer so it can be logged",
              "Returns to the truck to await the next instruction from the director",
              "Secures the slack so nobody trips, and stands by to move with the shot",
              "Tests the signal at the camera end before handing over the connector",
            ],
            correctIndex: 2,
            explanation:
              "Do that flawlessly for a season and the crew learns your name, which is how the next job finds you.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "What does the lesson ask you to circle on your list of the seven roles?",
            options: [
              "The role with the highest median pay in the labor data",
              "The role you would most like to be doing in ten years",
              "The role your existing skills already come closest to matching",
              "The utility-technician line, as your likely first job",
            ],
            correctIndex: 3,
            explanation:
              "List the seven roles, write one thing beside each that you could learn in the next month, and circle utility. That is where you are most likely to start.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "What does the lesson mean by saying almost nobody starts on-air?",
            options: [
              "You start by being useful to the crew",
              "That on-air roles require a degree the technical roles do not",
              "That stations promote from within and never hire talent externally",
              "That on-air work is unpaid until a performer builds an audience",
            ],
            correctIndex: 0,
            explanation:
              "Useful has a shape you can learn, and most first doors into the industry are technical support rather than the microphone.",
            sourceLessonSlug: "landscape-and-roles",
          },
          {
            prompt: "Which publication carries median pay and 10-year job-growth projections for broadcasting roles?",
            options: [
              "The Occupational Outlook Handbook",
              "The National Association of Broadcasters career guide",
              "The Society of Broadcast Engineers certification handbook",
              "The Federal Communications Commission's annual industry report",
            ],
            correctIndex: 0,
            explanation:
              "The OOH is published by the U.S. Bureau of Labor Statistics and is the most authoritative free labor-market source in the country.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "How does the lesson tell you to read the Occupational Outlook Handbook?",
            options: [
              "As a guarantee of what a given role will pay in your own area",
              "The way an investor reads a prospectus",
              "As a ranking, taking whichever role sits at the top of it",
              "As a historical record rather than as a guide to the future",
            ],
            correctIndex: 1,
            explanation:
              "Before you invest years, look at the data. It tells you which roles are growing, which are flat, and roughly what to expect in pay.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "What is the projected employment growth for broadcast, sound, and video technicians?",
            options: [
              "Declining, as automation removes positions from the control room",
              "Little or no change over the projection period",
              "Faster than average",
              "Too varied between markets for the handbook to project at all",
            ],
            correctIndex: 2,
            explanation:
              "Faster than average through 2033, largely because content and streaming keep expanding.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "Why does the handbook expect technician employment to grow?",
            options: [
              "Because the existing workforce is approaching retirement age",
              "Because stations are bringing outsourced technical work back in house",
              "Because regulation now requires more technical staff per broadcast",
              "Content and streaming keep expanding",
            ],
            correctIndex: 3,
            explanation:
              "More content going to more places needs more people to capture, move, and distribute the signal.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "What is the projected growth for producers and directors?",
            options: [
              "About as fast as average",
              "Faster than average, matching the technical roles below them",
              "Little or no change, since each show needs only one of each",
              "Declining, as more shows are produced by smaller crews",
            ],
            correctIndex: 0,
            explanation:
              "Producers and directors are projected to grow about as fast as average, and they carry the highest median of the four roles the lesson lists.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "What is the projected growth for announcers and DJs?",
            options: [
              "Faster than average, driven by the growth of podcasting",
              "Little or no change",
              "About as fast as average, in line with production roles",
              "Growing in sports specifically while declining in news",
            ],
            correctIndex: 1,
            explanation:
              "Little or no change overall, which is why the lesson calls on-air the most competitive door in the industry.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "Which of the four roles the lesson lists carries the highest median pay?",
            options: [
              "Announcers and DJs, since the on-air role is the most visible",
              "Broadcast, sound, and video technicians, since demand is growing fastest",
              "Film and video editors and camera operators, since the skills are specialized",
              "Producers and directors",
            ],
            correctIndex: 3,
            explanation:
              "Producers and directors carry the highest of the four medians, and announcers and DJs the lowest, which is the opposite of what most people entering the field expect.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "What does the lesson say before you quote any of its pay figures?",
            options: [
              "Confirm the current number on the source page for your role and area",
              "Adjust the national median for the cost of living where you live",
              "Add the value of the benefits a staff position normally carries",
              "Check whether the role is unionized in the market you are applying to",
            ],
            correctIndex: 0,
            explanation:
              "The figures are national medians and shift each year. The lesson is explicit that they are a labeled snapshot, not a promise.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "In the lesson's example, what plan does the learner arrive at after reading the handbook?",
            options: [
              "Abandon on-air work, since the projections make it unrealistic",
              "Apply to both roles at once and take whichever offer arrives first",
              "Start technical to get in the building, and pursue on-air on the side",
              "Move to a larger market where announcing positions are more numerous",
            ],
            correctIndex: 2,
            explanation:
              "The technical role pays more at the median and is growing, while announcing is flat and hyper-competitive. Starting technical is a data-driven plan rather than a compromise.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "What does the practical exercise ask you to compare between two roles?",
            options: [
              "Median pay, projected growth, and typical entry-level education",
              "The number of openings currently advertised in your own area",
              "The equipment each role would require you to buy for yourself",
              "The size of the union local that represents each of the two",
            ],
            correctIndex: 0,
            explanation:
              "Open the handbook pages for two roles you like, note those three figures, and pick the role with the best growth-to-competition ratio as your first target.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "Why does the lesson call the labor data worth checking before you commit?",
            options: [
              "Because a hiring manager will ask you to recite the figures",
              "Because the projections determine which roles a station may advertise",
              "Because the handbook lists every employer hiring in your area",
              "So you set realistic goals and can talk credibly to a hiring manager",
            ],
            correctIndex: 3,
            explanation:
              "The handbook is the most authoritative free labor-market source available, and knowing what it says is both a planning tool and a credibility signal in a conversation.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "What do you NOT need in order to be a utility technician?",
            options: [
              "A demo reel",
              "The ability to work safely around cable and rigging",
              "Willingness to arrive before the rest of the crew does",
              "A reputation for turning up when you said you would",
            ],
            correctIndex: 0,
            explanation:
              "You do not need a reel; you need to be reliable, safe, and fast. The other three are exactly what the role does require.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "What do you need instead?",
            options: [
              "A certification from the engineers' professional body",
              "To be reliable, safe, and fast",
              "Prior credits on at least one televised event",
              "Your own set of tools and rigging hardware",
            ],
            correctIndex: 1,
            explanation:
              "Reliability, safety, and speed. Those are what a crew lead is judging on a rig, and they are what earn the next call.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "Why is knot and rigging skill a genuinely hireable competency here?",
            options: [
              "Because a certificate in rigging raises the day rate a freelancer can ask",
              "Because insurance rules require a certified rigger on every crew",
              "The work involves securing gear, tying off cable, and rigging on truss",
              "Because rope work is the only part of the job that cannot be taught fast",
            ],
            correctIndex: 2,
            explanation:
              "Camera cables, mic stands, banners, backdrops, and lighting all get secured with rope, straps, and ties. A tech who can throw a clean, quick-release hitch and coil cable so it runs free is worth more than one who leaves a tangled, unsafe mess.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "Which knot does the lesson describe as a fixed loop that will not slip?",
            options: [
              "The clove hitch, which wraps around a rail without a loop",
              "The bowline",
              "The trucker's hitch, which pulls a line tight against a fixed point",
              "The round turn and two half-hitches, which holds under a steady pull",
            ],
            correctIndex: 1,
            explanation:
              "The bowline is the fixed loop that will not slip. The others in this question all appear in the lesson too, doing different jobs.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "Which knots does the lesson name for securing to a rail or truss?",
            options: [
              "The bowline and the trucker's hitch, tied in sequence on the same line",
              "Any knot that can be untied quickly when the set is struck",
              "The clove hitch, and the round turn and two half-hitches",
              "A simple overhand knot backed up with gaffer tape",
            ],
            correctIndex: 2,
            explanation:
              "Those two are the securing-to-a-rail knots. The bowline is the fixed loop and the trucker's hitch is for tensioning a run.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "Which knot does the lesson name for tensioning a run?",
            options: [
              "The trucker's hitch",
              "The bowline, which holds its loop size under load",
              "The clove hitch, which tightens as the line is pulled",
              "The round turn and two half-hitches, which resists slipping",
            ],
            correctIndex: 0,
            explanation:
              "The trucker's hitch is the tensioning knot in the set of four the lesson asks you to learn to muscle memory.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "Why does the way you coil a cable matter?",
            options: [
              "Because a neat coil takes less room in the truck at the end of the night",
              "Because coiling protects the connectors from damage in transit",
              "Because the coil's direction affects the signal the cable carries",
              "So it pays out without kinking",
            ],
            correctIndex: 3,
            explanation:
              "A cable coiled so it runs free is the difference between a run that goes out clean and one that snags in the middle of a live show.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "Which companion course does this lesson send you to for the rope work?",
            options: [
              "Knot-Tying and Rope Work",
              "Off-Grid and Emergency Survival, which covers securing loads",
              "A rigging certification offered through the engineers' professional body",
              "The section on game-day rigging later in this same course",
            ],
            correctIndex: 0,
            explanation:
              "The companion Knot-Tying and Rope Work course on Learn.WitUS teaches the four knots and the safe coiling that make you valuable on a rig-and-strike crew.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "In the rain-delay example, which knot re-secures the loose camera cable on the truss?",
            options: [
              "A bowline, tied around the truss and left slack",
              "A trucker's hitch, pulling the cable taut against the rail",
              "A round turn and two half-hitches",
              "A clove hitch backed up with a second clove hitch",
            ],
            correctIndex: 2,
            explanation:
              "The tech re-secures the cable with a round turn and two half-hitches, coils the excess out of the walkway, and tapes the last run. The show comes back with nothing to trip over.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "What two qualities does the lesson say both count on a live crew?",
            options: [
              "Speed and cleanliness",
              "Accuracy and patience, in that order of importance",
              "Strength and stamina, since the work is physical",
              "Independence and initiative, since nobody has time to supervise",
            ],
            correctIndex: 0,
            explanation:
              "Time yourself on the drills. A live crew is judging both how fast you work and how clean the result is.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "What does the lesson call the quiet competence that gets a utility tech invited back?",
            options: [
              "Knowing every position on the crew by name before the first call",
              "Volunteering for extra shifts when the schedule is short-handed",
              "Being able to step into a camera operator's place when needed",
              "Fixing the problem so the show returns with nothing to trip over",
            ],
            correctIndex: 3,
            explanation:
              "The rain-delay example is the whole argument: the work nobody notices, done properly, is what earns the next call.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt: "What does the lesson say a rookie who can only tape is worth, next to one who can rig?",
            options: [
              "Less, since rigging skill makes you immediately more useful",
              "The same, since both are supervised on their first few calls",
              "More, since taping is faster than tying under time pressure",
              "It depends entirely on how early each of them arrives",
            ],
            correctIndex: 0,
            explanation:
              "Bring real knot and rigging skill to a broadcast crew and you are immediately more useful than a rookie who can only tape.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2: Your calling card
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "demo-reel",
      recallContent: [
        {
          prompt: "Why should a utility-technician hopeful learn knots and rigging?",
          answer: "Utility work means securing cable and gear, tying off runs so nobody trips, and coiling cable to pay out cleanly, so knot and rigging skill is a real, hireable, day-one competency.",
        },
        {
          prompt: "Which four knots does the lesson tell you to learn to muscle memory?",
          answer: "The bowline, the clove hitch, the round turn and two half-hitches, and the trucker's hitch, plus clean cable coiling (taught in the companion Knot-Tying and Rope Work course).",
        },
      ],
      title: "4 · The demo reel: your 90-second audition",
      section: "Section 2 · Your calling card",
      body: `**Concept overview.** A **demo reel** is a short, tightly edited highlight of your best work: your audition on a loop. On-air talent shows themselves presenting; producers and editors show finished packages; camera and technical crew show clean, well-shot footage they were responsible for.

**Why it matters.** Hiring managers watch the first 15 to 30 seconds and stop. A reel proves, not claims. In broadcasting, "show me" always beats "trust me."

**How to build one.**
- **Lead with your strongest 10 seconds.** No slow logo intro.
- **Keep it 60 to 120 seconds.** Longer is not better; tighter is.
- **Match the reel to the role.** On-air: energy, clarity, presence. Technical: framing, focus, exposure, and clean audio. Editing: pacing and storytelling.
- **Show real conditions.** Live, noisy, imperfect environments read as experience.
- **Caption what you did.** "Camera operator," "produced & edited," "play-by-play". Credit only your work.

**Real-world example.** An aspiring sideline reporter with no TV credits films themselves reporting from a real local game (stand-up intro, a quick interview, a wrap) and cuts a 75-second reel. It is not network-polished, but it shows they can do the job unscripted, which is exactly what a small-market station needs to see.

**Practical application.** Storyboard a 90-second reel for your target role. List the 5 to 6 clips you would include and what each proves. If you do not have the clips yet, plan the shoot that gets them: a local game, a school event, a mock broadcast.

**Next steps.** Wrap the reel in a résumé and portfolio that a recruiter can skim in ten seconds.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },
    {
      slug: "resume-portfolio-brand",
      recallContent: [
        {
          prompt: "What is a demo reel, and how long should it run?",
          answer: "A short, tightly edited highlight of your best work (your audition on a loop), ideally about 60 to 120 seconds, led by your strongest clip.",
        },
        {
          prompt: "Name two rules for building an effective demo reel.",
          answer: "Any two of: lead with your strongest 10 seconds (no slow logo intro), keep it 60 to 120 seconds, match the reel to the role, show real conditions, and caption exactly what you did.",
        },
      ],
      title: "5 · Résumé, portfolio, and personal brand",
      section: "Section 2 · Your calling card",
      body: `**Concept overview.** Your reel gets watched only if the paperwork around it earns the click. That paperwork is three things: a **one-page résumé**, an online **portfolio** (a simple site or profile hosting your reel and work), and a **personal brand**: the consistent, professional way you show up on social platforms.

**Why it matters.** Broadcasting is a relationship-and-reputation business. A recruiter often finds you before you find the job posting. What they see (a clean résumé, a working portfolio link, and social feeds that look like a colleague and not a liability) decides whether they reach out.

**Build the three pieces.**
- **Résumé (one page).** Roles held, skills (cameras, switchers, editing software, live streaming, rigging/knots for utility work), and measurable results. List gear and software by name: hiring managers search for exact tools.
- **Portfolio.** One link that opens to your reel plus 2 to 4 sample projects, each with a one-line "what I did." Keep it loading fast and mobile-friendly.
- **Personal brand & socials.** Pick your lane (sports, news, tech). Post your work, tag events you cover, and keep it professional. Recruiters *will* scroll. Consistency signals reliability.

**Real-world example.** A camera assistant lands a freelance gig because a producer clicked their portfolio link in an email signature, watched a 60-second reel, and saw on the résumé that they already knew the exact switcher the truck runs: one skim, one hire.

**Practical application.** Draft your one-page résumé now. List every piece of gear and software you can operate by name, and add a "utility / rigging" line if you have done the knots work. Reserve a portfolio URL and put your reel behind it.

**Next steps.** Employers will ask what you actually know. Start with the fundamentals of sound and picture.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 QUIZ
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "quiz-your-calling-card",
      title: "Section 2 quiz · Your calling card",
      section: "Section 2 · Your calling card",
      body: `A graded check on the reel that auditions for you and the paperwork that earns it a click. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is a demo reel?",
            options: [
              "A complete recording of one event you worked on start to finish",
              "A short, tightly edited highlight of your best work",
              "A written list of the productions you have credits on",
              "A recorded interview in which you describe your experience",
            ],
            correctIndex: 1,
            explanation:
              "It is your audition on a loop. On-air talent shows themselves presenting; producers and editors show finished packages; camera and technical crew show clean, well-shot footage they were responsible for.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt: "How much of a reel does a hiring manager typically watch?",
            options: [
              "All of it, since a short reel takes very little time",
              "The last 30 seconds, where the strongest work is usually placed",
              "The first 15 to 30 seconds",
              "Only the captions, to see which roles you actually held",
            ],
            correctIndex: 2,
            explanation:
              "They watch the first 15 to 30 seconds and stop, which is why the lesson says lead with your strongest ten seconds and skip the slow logo intro.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt: "How long should a reel run?",
            options: [
              "About 60 to 120 seconds",
              "Between four and five minutes, to show range across several jobs",
              "As long as your best continuous piece of work happens to be",
              "Under 30 seconds, since nobody watches past the opening",
            ],
            correctIndex: 0,
            explanation:
              "Longer is not better; tighter is. Sixty to 120 seconds, led by your strongest clip.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt: "What should a technical reel show, as opposed to an on-air one?",
            options: [
              "The equipment you own, shown clearly enough to be identified",
              "Footage from the largest production you have ever been part of",
              "The control room you worked in, filmed during a live show",
              "Framing, focus, exposure, and clean audio",
            ],
            correctIndex: 3,
            explanation:
              "Match the reel to the role. On-air shows energy, clarity, and presence; technical shows framing, focus, exposure, and clean audio; editing shows pacing and storytelling.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt: "Why does the lesson tell you to show real conditions in a reel?",
            options: [
              "Live, noisy, imperfect environments read as experience",
              "Because studio footage is assumed to have been shot by someone else",
              "Because a hiring manager can tell when footage has been graded",
              "Because polished work suggests you had a large budget to rely on",
            ],
            correctIndex: 0,
            explanation:
              "A reel proves rather than claims. Work done in real conditions is the evidence that you can do the job when nothing is controlled.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt: "What does the lesson say about captions on a reel?",
            options: [
              "Leave them off, since they distract from the footage itself",
              "Caption what you did, and credit only your own work",
              "Caption the event and the date, but never the role you held",
              "Caption everything the production credited you for, whether or not you did it",
            ],
            correctIndex: 1,
            explanation:
              "Camera operator, produced and edited, play-by-play. Say what you did and claim only that.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt: "In the lesson's example, what does the aspiring sideline reporter with no TV credits do?",
            options: [
              "Recreates a broadcast segment in a studio with borrowed equipment",
              "Waits for an internship that would produce usable footage",
              "Films themselves reporting from a real local game",
              "Edits a reel from clips of broadcasts they admire, with commentary",
            ],
            correctIndex: 2,
            explanation:
              "A stand-up intro, a quick interview, and a wrap, cut to 75 seconds. It is not network-polished, but it shows they can do the job unscripted, which is what a small-market station needs to see.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt: "What does the lesson mean by show me always beats trust me?",
            options: [
              "A reel proves, where a claim only asserts",
              "That a reference from a crew lead outweighs anything you write",
              "That a hiring manager will always ask for a live demonstration",
              "That footage is easier to verify than a written credit list",
            ],
            correctIndex: 0,
            explanation:
              "It is the whole reason the reel exists. The paperwork describes what you can do; the reel shows it.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt: "What three pieces make up your calling-card paperwork?",
            options: [
              "A cover letter, a reference list, and a certification record",
              "A one-page resume, a portfolio, and a personal brand",
              "A reel, a business card, and a professional membership",
              "A biography, a headshot, and a list of the gear you own",
            ],
            correctIndex: 1,
            explanation:
              "A one-page resume, an online portfolio hosting your reel and work, and a consistent, professional personal brand on your social platforms.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
          {
            prompt: "Why does the lesson say to list gear and software by name on a resume?",
            options: [
              "Because naming them proves you were trusted to operate them",
              "Because a longer skills list makes the one-page format look full",
              "Hiring managers search for the exact tools",
              "Because equipment names date a resume and show recent experience",
            ],
            correctIndex: 2,
            explanation:
              "Naming the cameras, switchers, and software you can operate is what lets a hiring manager find and pick you out of a stack.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
          {
            prompt: "How long should the resume be?",
            options: [
              "One page",
              "Two pages, so every credit can be listed with its date",
              "As long as the credit list requires, with no fixed limit",
              "One page for technical roles and two for on-air ones",
            ],
            correctIndex: 0,
            explanation:
              "One page, carrying roles held, skills named specifically, and measurable results.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
          {
            prompt: "What should a portfolio contain?",
            options: [
              "Every project you have worked on, arranged by date",
              "A written case study for each production you contributed to",
              "The raw footage behind each clip in your reel, for verification",
              "Your reel plus two to four sample projects, each with a one-line note",
            ],
            correctIndex: 3,
            explanation:
              "One link that opens to your reel plus two to four samples, each with a one-line description of what you did, loading fast and working on a phone.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
          {
            prompt: "What does the lesson say about your social platforms?",
            options: [
              "Keep them private, so a recruiter judges only the portfolio",
              "Pick your lane, post your work, and keep it professional",
              "Post daily, since the algorithms reward frequency over quality",
              "Use them only to follow the people you eventually want to work for",
            ],
            correctIndex: 1,
            explanation:
              "Pick a lane such as sports, news, or tech, post your work, tag events you cover, and keep it professional. Recruiters will scroll, and consistency signals reliability.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
          {
            prompt: "Why does the lesson call broadcasting a relationship-and-reputation business?",
            options: [
              "Because most positions are filled without ever being advertised",
              "Because credits matter more than any formal qualification",
              "A recruiter often finds you before you find the job posting",
              "Because every crew lead knows every other crew lead in a market",
            ],
            correctIndex: 2,
            explanation:
              "What they see when they find you, a clean resume, a working portfolio link, and social feeds that look like a colleague rather than a liability, decides whether they reach out.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
          {
            prompt: "In the lesson's example, what specifically got the camera assistant the freelance gig?",
            options: [
              "A recommendation from a crew lead they had worked under before",
              "A cover letter that named the producer's own past productions",
              "A reel long enough to show their work across a whole season",
              "A resume showing they already knew the exact switcher the truck runs",
            ],
            correctIndex: 3,
            explanation:
              "The producer clicked the portfolio link in an email signature, watched a 60-second reel, and saw the specific switcher named on the resume. One skim, one hire, which is the argument for naming your tools.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
          {
            prompt: "What line does the lesson tell a utility hopeful to add to their resume?",
            options: [
              "A utility and rigging line, if you have done the knots work",
              "A note that you are willing to relocate for the right position",
              "A list of the events you have attended as a spectator",
              "The certifications you intend to complete in the coming year",
            ],
            correctIndex: 0,
            explanation:
              "Name every piece of gear and software you can operate, and add the utility and rigging line, because it is a real skill a crew lead is looking for.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
          {
            prompt: "What does the lesson say a portfolio has to be, technically?",
            options: [
              "Hosted on a domain you own rather than on a free platform",
              "Fast-loading and mobile-friendly",
              "Password-protected, so you know who has viewed your work",
              "Updated weekly, so the newest work always appears first",
            ],
            correctIndex: 1,
            explanation:
              "One link, opening fast and working on a phone. A recruiter skimming on a phone between calls is exactly who it has to work for.",
            sourceLessonSlug: "resume-portfolio-brand",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3: Audio & video fundamentals
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "signal-flow-and-audio",
      recallContent: [
        {
          prompt: "What three pieces make up your calling-card paperwork?",
          answer: "A one-page résumé, an online portfolio that hosts your reel and work, and a consistent, professional personal brand on your social platforms.",
        },
        {
          prompt: "Why should you list gear and software by name on your résumé?",
          answer: "Hiring managers search for the exact tools, so naming the cameras, switchers, and software you can operate helps them find and pick you.",
        },
      ],
      title: "6 · Signal flow and audio fundamentals",
      section: "Section 3 · Audio & video fundamentals",
      body: `**Concept overview.** Every broadcast is a chain: a **source** (mic, camera) → a **mixer/switcher** → a **recorder or transmitter** → the audience. Following that chain is called **signal flow**, and it is the single most useful mental model on a crew. On the audio side, you also need to know your **microphones** and the biggest killer of clean sound: bad levels.

**Why it matters.** When something breaks live, you troubleshoot along the signal flow (source, cable, connection, mixer, output) until you find the dead link. Broadcast technicians do exactly this work: setting up and operating the equipment that captures and moves the signal (BLS, 2024d). Poor audio sinks a broadcast faster than poor video; viewers forgive a soft picture but not sound they cannot hear.

**Microphones you will meet.**
- **Dynamic**: rugged, handles loud sources; the sideline reporter's handheld.
- **Condenser**: sensitive and detailed; booth and studio work.
- **Lavalier (lav)**: clip-on, hands-free; interviews and hosts.
- **Shotgun**: highly directional; captures a subject at distance and rejects crowd noise.

**Levels and the golden rule.** Set gain so the loudest moments peak safely below distortion (a common target is around −6 to −3 dBFS on the meter). Never let it "clip" into the red, which is unrecoverable. Ride the levels; do not set and forget.

**Real-world example.** A reporter's mic goes silent on air. The audio tech walks the signal flow: mic (on?), cable (seated?), channel (muted or gain down?), output (routed?). The fault is a half-unplugged cable at the mixer, found in seconds because they followed the chain.

**Practical application (drill).** Take any mic and recorder. Record yourself speaking softly, normally, and loudly. Watch the meter and set gain so the loud take peaks near −3 dBFS without clipping. Then unplug the cable mid-record and note exactly where the signal dies: that is signal-flow troubleshooting.

**Next steps.** Sound is half the job. Now make the picture look intentional.

## Sources
U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },
    {
      slug: "lighting-and-framing",
      recallContent: [
        {
          prompt: "What is signal flow, and how do you use it when something breaks live?",
          answer: "It is the chain from source (mic, camera) to mixer or switcher to recorder or transmitter to audience; when a feed fails, you walk that chain step by step to find the dead link.",
        },
        {
          prompt: "What is the golden rule for setting audio levels?",
          answer: "Set gain so the loudest moments peak just below distortion (a common target is around -6 to -3 dBFS) and never clip into the red; ride the levels rather than set and forget.",
        },
      ],
      title: "7 · Lighting and framing to be useful on day one",
      section: "Section 3 · Audio & video fundamentals",
      body: `**Concept overview.** Two skills make raw footage look like broadcast: **lighting** (controlling how light falls on the subject) and **framing** (where the subject sits in the shot). You do not need to be a cinematographer to help. You need the working basics camera operators use every day (BLS, 2024c).

**Why it matters.** A well-lit, well-framed shot reads as "professional" before a single word is spoken. On a small crew, the person who can light an interview and frame it cleanly is instantly employable.

**Lighting basics: three-point lighting.**
- **Key light**: the main light, off to one side of the subject.
- **Fill light**: softer, opposite the key, to lift the shadows.
- **Back (rim) light**: behind the subject, separating them from the background.
Add awareness of **white balance** (matching the camera to the light's color so whites look white) and **exposure** (not too dark, not blown out).

**Framing basics.**
- **Rule of thirds**: place the subject off-center, eyes about a third down from the top.
- **Headroom & lookroom**: a little space above the head; more space in the direction they face or move.
- **Shot sizes**: wide (context), medium (interview), close-up (emotion). Cut between them for a professional feel.

**Real-world example.** A one-person crew shooting a coach interview sets a soft key at 45°, bounces fill off a white wall, frames the coach on the left third with room to look right, and checks exposure on the camera's zebras. The result looks like TV, shot by one person with two lights.

**Practical application (drill).** Light and frame a single interview. Use any three lights (or two lights plus a bounce), place your subject on a third, set white balance and exposure, and record 30 seconds. Compare it to a flat, straight-on phone shot. The difference is your new skill.

**Next steps.** Fundamentals in hand, step into the live-production environment where these come together in real time.

## Sources
U.S. Bureau of Labor Statistics. (2024c). *Film and video editors and camera operators*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 QUIZ
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "quiz-audio-and-video-fundamentals",
      title: "Section 3 quiz · Audio & video fundamentals",
      section: "Section 3 · Audio & video fundamentals",
      body: `A graded check on signal flow as a troubleshooting tool, on the microphones and levels that decide whether a show sounds professional, and on the lighting and framing that make raw footage read as broadcast. Each answer links back to the lesson that teaches it.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is signal flow?",
            options: [
              "The chain from source to mixer to recorder to audience",
              "The rate at which data leaves the encoder toward the platform",
              "The order in which the director calls each camera during a show",
              "The path a cable takes physically from the truck to the field",
            ],
            correctIndex: 0,
            explanation:
              "Source such as a mic or camera, then mixer or switcher, then recorder or transmitter, then the audience. The lesson calls it the single most useful mental model on a crew.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "What do you do with signal flow when something breaks live?",
            options: [
              "Replace each component in turn until the fault disappears",
              "Switch to the backup feed and diagnose after the show",
              "Walk the chain until you find the dead link",
              "Check the output first, since that is where the fault appears",
            ],
            correctIndex: 2,
            explanation:
              "Source, cable, connection, mixer, output. You walk the chain step by step rather than guessing, which is why the model is worth holding in your head.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "Why does the lesson say audio matters more than picture?",
            options: [
              "Because audio equipment fails more often than video equipment",
              "Because captioning requirements depend on the quality of the audio",
              "Because a soft picture can be corrected in post and audio cannot",
              "Viewers forgive a soft picture but not sound they cannot hear",
            ],
            correctIndex: 3,
            explanation:
              "Poor audio sinks a broadcast faster than poor video, which is why levels and mic choice get their own section this early in the course.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "Which microphone is the rugged one that handles loud sources?",
            options: [
              "Dynamic",
              "Condenser, which is sensitive enough for booth and studio work",
              "Lavalier, which clips on and leaves the hands free",
              "Shotgun, which is highly directional at a distance",
            ],
            correctIndex: 0,
            explanation:
              "The dynamic mic is rugged and handles loud sources, which is why it is the sideline reporter's handheld.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "Which microphone is sensitive and detailed, for booth and studio work?",
            options: [
              "Dynamic, which is rugged enough for a sideline in any weather",
              "Condenser",
              "Shotgun, which rejects the noise around its target",
              "Lavalier, which is small enough to hide under clothing",
            ],
            correctIndex: 1,
            explanation:
              "The condenser is the sensitive, detailed mic, and its home is the booth and the studio rather than the sideline.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "Which microphone is highly directional and rejects crowd noise?",
            options: [
              "Lavalier, which sits close enough to the mouth to exclude the rest",
              "Dynamic, which needs a loud source before it registers anything",
              "Shotgun",
              "Condenser, whose sensitivity lets it be aimed precisely",
            ],
            correctIndex: 2,
            explanation:
              "The shotgun captures a subject at a distance and rejects what is around it, which is what makes it usable in a stadium.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "Which microphone is the clip-on, hands-free choice for interviews and hosts?",
            options: [
              "Shotgun, mounted on a boom just out of the frame",
              "Dynamic, held by the host through the whole segment",
              "Condenser, on a stand between the two speakers",
              "Lavalier",
            ],
            correctIndex: 3,
            explanation:
              "The lav clips on and leaves the hands free, which is why it is the interview and host mic.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "What is the golden rule for setting audio levels?",
            options: [
              "Set gain so the loudest moments peak safely below distortion",
              "Set gain at the midpoint of the meter and leave it there",
              "Set gain from the quietest passage, so nothing is ever lost",
              "Set gain so the meter reaches the top on the loudest moments",
            ],
            correctIndex: 0,
            explanation:
              "A common target is around minus six to minus three dBFS on the meter. Never let it clip into the red, and ride the levels rather than setting and forgetting.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "What does the lesson say about clipping?",
            options: [
              "It is recoverable if the recording is made at a high enough bitrate",
              "It is unrecoverable",
              "It only matters on the recorded version, not the live output",
              "It is preferable to a signal too quiet to hear at all",
            ],
            correctIndex: 1,
            explanation:
              "Clipping into the red is unrecoverable, which is why the target sits safely below distortion rather than at the ceiling.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "In the lesson's example, where does the audio tech find the fault when a reporter's mic goes silent?",
            options: [
              "At the mixer, where a cable was half unplugged",
              "At the mic itself, which had been switched off between segments",
              "At the channel, where the gain had been pulled down",
              "At the output, which had been routed to the wrong destination",
            ],
            correctIndex: 0,
            explanation:
              "They walk the chain (mic, cable, channel, output) and find it in seconds precisely because they followed the order rather than guessing.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "What does the practical drill in this lesson ask you to notice?",
            options: [
              "Which mic type sounds best on your own voice at each volume",
              "How much the meter moves between a soft and a loud passage",
              "Whether your recorder introduces noise at a high gain setting",
              "Exactly where the signal dies when you unplug the cable mid-record",
            ],
            correctIndex: 3,
            explanation:
              "Record softly, normally, and loudly while watching the meter, then unplug mid-record. Seeing where the signal dies is signal-flow troubleshooting in miniature.",
            sourceLessonSlug: "signal-flow-and-audio",
          },
          {
            prompt: "What two skills make raw footage look like broadcast?",
            options: [
              "Color grading and audio mixing, applied after the shoot",
              "Camera choice and lens choice, decided before the shoot",
              "Lighting and framing",
              "Steadiness and focus, which are matters of practice",
            ],
            correctIndex: 2,
            explanation:
              "Controlling how light falls on the subject and where the subject sits in the shot. You do not need to be a cinematographer to help with either.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt: "In three-point lighting, what is the key light?",
            options: [
              "The main light, off to one side of the subject",
              "The softer light opposite the main one, lifting the shadows",
              "The light behind the subject, separating them from the background",
              "The ambient light already present in the room before you arrive",
            ],
            correctIndex: 0,
            explanation:
              "Key is the main light off to one side. Fill is the softer light opposite it, and the back or rim light sits behind the subject.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt: "What does the fill light do?",
            options: [
              "Adds a highlight along the edge of the subject's hair and shoulders",
              "Lifts the shadows, from opposite the key",
              "Raises the overall exposure so the camera can be stopped down",
              "Lights the background so the subject does not disappear into it",
            ],
            correctIndex: 1,
            explanation:
              "Softer than the key and positioned opposite it, the fill lifts the shadows the key creates.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt: "What does the back or rim light do?",
            options: [
              "Fills the shadow side of the face where the key does not reach",
              "Adds warmth to the image so skin tones read correctly on camera",
              "Separates the subject from the background",
              "Lets the camera operate at a lower gain setting in a dark room",
            ],
            correctIndex: 2,
            explanation:
              "It sits behind the subject, and separation from the background is the whole reason it is there.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt: "What is white balance?",
            options: [
              "Adjusting the exposure so the brightest area is not blown out",
              "Balancing the key and fill so neither overpowers the other",
              "Setting the same color temperature on every light in the room",
              "Matching the camera to the light's color so whites look white",
            ],
            correctIndex: 3,
            explanation:
              "It is the camera-side match to the color of the light you are working under, and it sits alongside exposure as the two settings the lesson wants you aware of.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt: "What is the rule of thirds?",
            options: [
              "Place the subject off-center, eyes about a third down from the top",
              "Divide the shot into three planes of foreground, subject, and background",
              "Use three lights, three shot sizes, and three angles in every sequence",
              "Leave a third of the frame empty in the direction the subject moves",
            ],
            correctIndex: 0,
            explanation:
              "Off-center placement with the eyes about a third down. Headroom and lookroom are the two related rules the lesson pairs with it.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt: "What is lookroom?",
            options: [
              "The gap between the subject and the edge of the frame at the bottom",
              "Space in the direction the subject faces or moves",
              "The distance the camera keeps back from the subject during an interview",
              "The area of the frame reserved for a lower-third graphic",
            ],
            correctIndex: 1,
            explanation:
              "A little space above the head is headroom; more space in the direction they face or move is lookroom.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt: "What do the three shot sizes carry?",
            options: [
              "Wide for the crowd, medium for the field, close for the scoreboard",
              "Wide for the opening, medium for the body, close for the sign-off",
              "Wide for context, medium for interview, close-up for emotion",
              "Wide for outdoors, medium for indoors, close for low light",
            ],
            correctIndex: 2,
            explanation:
              "Cutting between them is what gives a sequence a professional feel rather than the flatness of a single locked-off angle.",
            sourceLessonSlug: "lighting-and-framing",
          },
          {
            prompt: "In the lesson's one-person-crew example, how is the coach framed?",
            options: [
              "Centered in the frame, with even space on both sides",
              "Tight in close-up, so the background never has to be lit",
              "In a wide shot, so the setting establishes the interview",
              "On the left third, with room to look right",
            ],
            correctIndex: 3,
            explanation:
              "A soft key at 45 degrees, fill bounced off a white wall, the coach on the left third with lookroom to the right, and exposure checked on the camera's zebras. It looks like TV, shot by one person with two lights.",
            sourceLessonSlug: "lighting-and-framing",
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4: Live production & streaming basics
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "the-switcher-and-control-room",
      recallContent: [
        {
          prompt: "In three-point lighting, what does each light do?",
          answer: "The key is the main light off to one side, the fill is softer and opposite the key to lift the shadows, and the back or rim light sits behind the subject to separate it from the background.",
        },
        {
          prompt: "What is the rule of thirds in framing?",
          answer: "Place the subject off-center with the eyes about a third down from the top, and leave a little headroom plus lookroom in the direction they face or move.",
        },
      ],
      title: "8 · The control room: switcher, graphics, and replay",
      section: "Section 4 · Live production & streaming basics",
      body: `**Concept overview.** A live broadcast is assembled in real time in a **control room** (or a production truck). At its heart is the **video switcher** (the vision mixer) that cuts between cameras and sources on the director's call. Around it sit **graphics** (scores, names, lower-thirds), **replay**, and audio.

**Why it matters.** Understanding the control room lets you slot into it. The producer decides content; the **technical director** operates the switcher; graphics and replay operators feed it. Even utility and camera roles need to know how their feed reaches air.

**Key positions and gear.**
- **Producer**: runs the show's content and timing (BLS, 2024b).
- **Director**: calls the shots ("ready camera 2… take 2").
- **Technical director (TD)**: physically operates the switcher.
- **Switcher / vision mixer**: cuts, dissolves, and keys between sources; keys the graphics over live video.
- **Graphics (CG) operator**: builds and triggers the scorebug, lower-thirds, and stats.
- **Replay operator**: marks and plays back key moments (see the sports workflows section).

**Real-world example.** On a touchdown, the director calls "graphic up, replay ready". The CG operator pushes the updated score, the TD keys it over the wide shot, and the replay operator queues the play so it airs seconds later. A dozen people, one smooth moment.

**Practical application.** Download a free software switcher (for example, OBS Studio or a vendor's free vMix/ATEM trial). Wire two video sources (a webcam and a screen or a second camera) and practice cutting between them cleanly on cue. Add a lower-third graphic. You have just run a control room.

**Next steps.** Once it is cut, it has to reach the audience: learn encoding and streaming.

## Sources
U.S. Bureau of Labor Statistics. (2024b). *Producers and directors*. Occupational Outlook Handbook. https://www.bls.gov/ooh/entertainment-and-sports/producers-and-directors.htm`,
    },
    {
      slug: "encoding-and-streaming",
      recallContent: [
        {
          prompt: "What is the video switcher (vision mixer), and who operates it?",
          answer: "It is the control-room device that cuts, dissolves, and keys between cameras and sources and keys graphics over live video; the technical director operates it on the director's call.",
        },
        {
          prompt: "What does the graphics (CG) operator do in the control room?",
          answer: "Builds and triggers the on-screen graphics, such as the scorebug, lower-thirds, and stats, so they can be keyed over the live picture.",
        },
      ],
      title: "9 · Encoding, streaming, and the FCC basics",
      section: "Section 4 · Live production & streaming basics",
      body: `**Concept overview.** Getting a show to the audience means either **transmitting** it over the air (traditional broadcast) or **encoding and streaming** it over the internet (increasingly, both). Encoding compresses your video into a format the internet can carry; streaming pushes it to a platform or CDN for viewers.

**Why it matters.** Audiences have moved online, so **social/stream operations** is one of the fastest-growing entry lanes, and the skills (encoders, bitrates, protocols like RTMP/SRT, captions) are learnable on a laptop (NAB, n.d.). Meanwhile, anything transmitted over the public airwaves is regulated by the **Federal Communications Commission (FCC)**, which licenses stations, assigns spectrum, and sets rules broadcasters must follow (Federal Communications Commission [FCC], n.d.-a).

**Streaming basics.**
- **Encoder**: hardware or software (e.g., OBS) that compresses your feed.
- **Bitrate & resolution**: higher looks better but needs more upload bandwidth; match them to your connection.
- **Protocol**: RTMP is the common streaming protocol; SRT is favored for unreliable networks.
- **Captions & accessibility**: a professional requirement, not an extra.

**FCC basics you should know.**
- The FCC **licenses broadcast stations** and manages the **spectrum** they transmit on (FCC, n.d.-a).
- Broadcasters must follow FCC rules, including **closed-captioning** requirements for TV programming (FCC, n.d.-b).
- Certain equipment operators historically needed FCC operator permits; today most technical work is governed by the station's FCC license rather than an individual permit, but knowing the FCC exists and why is part of being a credible broadcast professional.

**Real-world example.** A stream op sets OBS to a 6 Mbps, 1080p RTMP output for a local game's YouTube feed, enables auto-captions for accessibility, and monitors dropped frames: the online broadcast side of the same event the truck is airing over the air under the station's FCC license.

**Practical application.** In OBS (or similar), set up a stream to a private/unlisted destination. Pick a resolution and bitrate that match your upload speed, start the stream, and watch the health/dropped-frame indicator. Turn on captions. You have run a basic streaming chain end to end.

**Next steps.** With production covered, step in front of the lens: the on-air craft.

## Sources
Federal Communications Commission. (n.d.-a). *What we do*. https://www.fcc.gov/about-fcc/what-we-do

Federal Communications Commission. (n.d.-b). *Closed captioning on television*. https://www.fcc.gov/consumers/guides/closed-captioning-television

National Association of Broadcasters. (n.d.). *About NAB*. https://www.nab.org/`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5: On-air & interviewing
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "voice-and-teleprompter",
      recallContent: [
        {
          prompt: "What does the FCC regulate in broadcasting?",
          answer: "The Federal Communications Commission licenses broadcast stations, manages the spectrum they transmit on, and sets rules such as closed-captioning for TV.",
        },
        {
          prompt: "In streaming, what is an encoder, and what does bitrate trade off?",
          answer: "An encoder (hardware or software such as OBS) compresses your feed; a higher bitrate and resolution look better but need more upload bandwidth, so you match them to your connection.",
        },
      ],
      title: "10 · Voice, delivery, and reading the teleprompter",
      section: "Section 5 · On-air & interviewing",
      body: `**Concept overview.** On-air work is a performance skill built on **voice** (pace, pitch, articulation, breath) and **delivery** (sounding natural while reading, often off a **teleprompter**). Announcers and hosts live or die by clarity and energy (BLS, 2024a).

**Why it matters.** The camera and mic exaggerate everything: a rushed pace, a swallowed word, a flat tone. Trained delivery is the difference between an amateur and a pro, and it is coachable, not innate.

**Voice fundamentals.**
- **Breath support**: speak from the diaphragm; it steadies your voice and stops you running out of air.
- **Pace**: slow down; nervous speakers rush. Punctuation is permission to breathe.
- **Articulation**: finish your consonants; the mic will not fix mush.
- **Energy**: lift the read; conversational-but-elevated beats monotone.

**Teleprompter craft.** Read a few words ahead of the scroll so your delivery sounds like thinking, not reading. Keep your eyes soft on the lens, let the operator match the scroll to your natural pace (never the other way around), and mark your script for emphasis and breaths.

**Real-world example.** A new anchor sounds robotic reading prompter copy. A coach has them slow down, mark breath points with slashes, and read one line ahead. Within a week they sound like they are talking to a friend, not reciting.

**Practical application (drill).** Write 30 seconds of copy. Record yourself reading it three ways: too fast, natural, and marked-for-breath. Then scroll it on a free teleprompter app and read one line ahead. Listen back. Pick the take that sounds like a conversation.

**Next steps.** The most-watched on-air skill in sports is calling the action. Learn play-by-play and color.

## Sources
U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },
    {
      slug: "play-by-play-and-interviewing",
      recallContent: [
        {
          prompt: "Name two voice fundamentals for on-air delivery.",
          answer: "Any two of: breath support (speak from the diaphragm), pace (slow down, since punctuation is permission to breathe), articulation (finish your consonants), and energy (lift the read above monotone).",
        },
        {
          prompt: "What is the key teleprompter technique for sounding natural?",
          answer: "Read a few words ahead of the scroll so delivery sounds like thinking rather than reading, keep your eyes soft on the lens, and let the operator match the scroll to your pace.",
        },
      ],
      title: "11 · Play-by-play, color, and interview craft",
      section: "Section 5 · On-air & interviewing",
      body: `**Concept overview.** Sports broadcasting has two on-air voices: the **play-by-play** announcer (describes the action: the *what* and *when*) and the **color commentator** (adds analysis, context, and story: the *why*). Both are announcer roles under the BLS classification (BLS, 2024a). Alongside them sits a third essential skill: **interviewing**.

**Why it matters.** These are the visible jobs people dream about, and the most competitive doors (announcing shows little projected growth per the OOH), so craft matters even more (BLS, 2024a). The good news: play-by-play, color, and interviewing are practiced skills you can drill on any game or guest.

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

**Real-world example.** Muting a televised game and calling it yourself is the classic drill: you learn to fill, to give the score, and to react to the play, all without a net. Pair it by interviewing a teammate about the game afterward using only open-ended questions.

**Practical application (drill).** Mute five minutes of a game and record your own play-by-play, giving the score at least twice. Then record a two-minute mock interview using only open-ended questions and one genuine follow-up. Listen back for dead air and closed questions.

**Next steps.** Sports has workflows the rest of broadcasting does not: stats, spotting, and replay.

## Sources
U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6: Sports-specific workflows
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "stats-spotting-replay",
      recallContent: [
        {
          prompt: "What is the difference between play-by-play and color commentary?",
          answer: "Play-by-play describes the action as it happens (the what and when); color commentary adds analysis, context, and story between the plays (the why).",
        },
        {
          prompt: "Give one rule for a strong on-air interview.",
          answer: "Ask open-ended questions (for example, 'walk me through that final drive'), listen and follow up on the last answer, and keep it tight so the guest does the talking.",
        },
      ],
      title: "12 · Stats, spotting boards, and replay",
      section: "Section 6 · Sports-specific workflows",
      body: `**Concept overview.** Sports broadcasts run on **information delivered fast**: live **stats**, the announcer's **spotting board** (a pre-built cheat sheet of players and facts), and **replay** (marking and re-airing key moments). These workflows are what make a sports telecast different from a newscast.

**Why it matters.** A broadcast lives or dies on getting the right graphic, stat, or replay to air in seconds. These are concrete, learnable jobs, and often the entry roles adjacent to utility that get you into the sports side specifically.

**The workflows.**
- **Stats.** A stats operator feeds real-time numbers to the graphics system and the booth. Accuracy under time pressure is the whole job.
- **Spotting board.** Announcers build a board (often a two-team roster grid) with numbers, names, pronunciations, and storylines so they can identify a player instantly and add context on the fly. Building your own board for a game is a rite of passage.
- **Replay.** The replay operator marks in/out points on plays as they happen and hands the director clean angles to roll (the touchdown, the foul, the finish) within seconds.

**Real-world example.** A quarterback scrambles for a first down. The stats op updates the yardage, the announcer glances at the spotting board to name the tackler and note it is his career-high in tackles, and the replay operator rolls the scramble from two angles: three workflows, one clean 20 seconds of television.

**Practical application (drill).** Build a spotting board for a real upcoming game: a grid of both rosters with numbers, correct name pronunciations, and one storyline per key player. Then watch the game using your board to identify players in real time. Note where it failed and improve it.

**Next steps.** Zoom out to the whole game day: who does what, and when.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm`,
    },
    {
      slug: "game-day-roles",
      recallContent: [
        {
          prompt: "What is a spotting board, and why does an announcer build one?",
          answer: "A pre-built cheat sheet, often a two-team roster grid with numbers, name pronunciations, and storylines, that lets the announcer identify a player instantly and add context on the fly.",
        },
        {
          prompt: "What is the stats operator's job during a sports telecast?",
          answer: "To feed accurate real-time numbers to the graphics system and the booth under time pressure; accuracy under pressure is the whole job.",
        },
      ],
      title: "13 · Game day: roles, call times, and where utility fits",
      section: "Section 6 · Sports-specific workflows",
      body: `**Concept overview.** A live sports broadcast is a choreographed day. Hours before air, the crew **rigs** (sets up cameras, cable, audio, and comms); at **call time** everyone is in position; the show airs; then the crew **strikes** (tears down and packs). Knowing this timeline tells you where you fit and how to be indispensable.

**Why it matters.** The day starts and ends with the technical and utility crew, not the talent. If you are breaking in, the setup-and-strike window is where you are most needed and most visible. Show up early, work safe, and never leave until the strike is done. That reputation gets you the next call.

**The game-day timeline.**
1. **Load-in & rig**: trucks arrive; cable is pulled and dressed; cameras, audio, and comms are set. **Utility technicians and camera assistants carry this**, and clean, safe rigging (secured cable, proper knots and ties on stands and truss) is judged here.
2. **Setup & test**: signal flow checked end to end; graphics and replay loaded; comms tested.
3. **Rehearsal / pre-game**: the director runs through opens and camera assignments.
4. **Air**: everyone holds position; utility stands by to fix, move, and support live.
5. **Strike**: de-rig, coil cable properly, pack; the crew is not done until the truck is loaded.

**Cross-link: rigging safety.** Rigging and striking are hands-on rope-and-cable work: securing runs so nobody trips, tying gear to stands and rails, and coiling cable so it pays out clean next time. **The companion _Knot-Tying & Rope Work_ course on Learn.WitUS teaches the exact knots (bowline, clove hitch, round turn and two half-hitches, trucker's hitch) and safe coiling that make you valuable on the rig-and-strike crew.**

**Real-world example.** A new utility tech arrives 30 minutes early, helps pull cable and dress it with clean ties, stands by through the game to move a cable on cue, and stays to coil and pack every run at strike. The crew lead marks them as reliable, and calls them for the next three games.

**Practical application.** Map your target role onto the five-step timeline above: what are you doing at load-in, at air, and at strike? Write one way to be more useful in each phase. If utility is your entry, review your knots.

**Next steps.** You know the craft and the day. Now go get hired.

## Sources
National Association of Broadcasters. (n.d.). *Career resources*. https://www.nab.org/

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7: Getting hired
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "internships-and-freelancing",
      recallContent: [
        {
          prompt: "What are the five phases of a live sports broadcast game day?",
          answer: "Load-in and rig, setup and test, rehearsal or pre-game, air, and strike; the technical and utility crew start the day and are not done until the truck is loaded.",
        },
        {
          prompt: "Why is the setup-and-strike window where someone breaking in should focus?",
          answer: "The day begins and ends with the technical and utility crew, so that window is where a newcomer is most needed and most visible; showing up early and staying through strike builds the reputation that earns the next call.",
        },
      ],
      title: "14 · Internships, freelancing, and building credits",
      section: "Section 7 · Getting hired",
      body: `**Concept overview.** Almost nobody's first broadcasting job is a staff position. You break in through **internships** (learn on a real crew, often for credit or low pay), **freelancing / day-calling** (getting hired per event, common for camera, utility, and technical roles), and **stringing together credits** until you have a résumé and a network.

**Why it matters.** Employers hire proof of reliability, and reliability is proven one gig at a time. A season of local freelance utility or camera work beats a degree with no credits when a truck needs hands next Saturday.

**How to start.**
- **Internships.** Station, sports team, and production-company internships are the classic entry. Treat them as a months-long interview.
- **Freelance / day rates.** Register with local production companies and crewing services; say yes to utility, camera-assist, and audio-utility calls. Show up early, work safe, coil clean.
- **Local & small-market first.** Small markets and local sports let you touch every role fast; the OOH notes many broadcast and technical workers start in smaller markets and move up (BLS, 2024a, 2024d).
- **Volunteer reps.** Community access, school sports, and church/event streaming give you real credits and reel material now.

**Real-world example.** A student interns with a regional sports network one summer, gets added to the freelance utility list, works a dozen games that fall as a day-caller, and is first-call for a camera-assist opening the next year: a staff path built entirely from credits.

**Practical application.** List three internships and three local production companies or crewing services to contact this month. Draft the two-sentence email: who you are, what you can do (name the gear/skills, including rigging/knots for utility), and that you will take any call to prove it.

**Next steps.** As you rack up gigs, understand the unions and the network that turn gigs into a career.

## Sources
U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },
    {
      slug: "unions-networking-first-job",
      recallContent: [
        {
          prompt: "What are the main ways people break into broadcasting instead of landing a staff job first?",
          answer: "Internships (learning on a real crew), freelancing or day-calling (getting hired per event, common for utility, camera, and technical roles), and stringing together credits until you have a résumé and a network.",
        },
        {
          prompt: "Why does the lesson recommend starting in local and small markets?",
          answer: "Small markets and local sports let you touch every role fast and build real credits and reel material now, and many broadcast and technical workers start there before moving up.",
        },
      ],
      title: "15 · Unions, networking, and landing the first job",
      section: "Section 7 · Getting hired",
      body: `**Concept overview.** Broadcasting careers are shaped by **networking** (who knows your work), often by **unions** (which represent much of the technical and crew workforce), and by professional bodies like the **SBE** (engineers) and the **NAB** (the industry association). Knowing this landscape turns scattered gigs into a durable career.

**Why it matters.** Many broadcast, live-event, and technical roles (camera, utility, audio, engineering) are union or union-adjacent in larger markets. Understanding that early tells you how pay, scheduling, and advancement really work, and where to build relationships.

**Unions and organizations to know.**
- **IATSE** (International Alliance of Theatrical Stage Employees): represents many crew, camera, and technical roles across live events and production.
- **NABET-CWA** (National Association of Broadcast Employees and Technicians, part of the Communications Workers of America): represents broadcast technicians and related workers at some networks and stations.
- **SBE**: the Society of Broadcast Engineers: certification, education, and a professional network for engineers and technicians (SBE, n.d.).
- **NAB**: the National Association of Broadcasters: the industry association, whose annual convention and career resources are major networking venues (NAB, n.d.).

*(Union representation varies by employer, market, and role. Confirm the specifics for a given job with that employer or local, rather than assuming. Treat the names above as a map, not a rule.)*

**Networking that works.**
- **Be excellent on small gigs.** Your best marketing is a crew lead who wants you back.
- **Show up to the rooms.** Local sports, station events, SBE chapters, and NAB resources put you near people who hire.
- **Keep in touch.** A short, specific thank-you after a gig keeps you top of mind for the next call.

**Real-world example.** A freelance utility tech joins their local SBE chapter, meets a chief engineer at a meeting, mentions their rigging and RF-cable experience, and gets referred to a station that needs a technician: hired on a relationship, backed by real credits.

**Practical application.** Pick one organization from above (SBE, NAB, or the relevant union/local) and find its website or local chapter. Note one concrete next step (a meeting to attend, a resource to read, or a membership to consider) and put it on your calendar. Then send one thank-you note to someone you have already worked with.

**Where the jobs are.** The OOH is your ongoing map: it lists which broadcasting roles are growing, typical entry education, and pay by area (BLS, 2024a, 2024b, 2024c, 2024d). Streaming and content growth keep technical and production roles expanding, so aim where the data points (NAB, n.d.). Start technical or utility to get in the building, keep building credits and relationships, and move toward your target role.

## A note on how careers get built here
No one hands you the microphone on day one. You get in by being the reliable person who can pull cable, tie a clean knot, light an interview, and cut a switcher. Then you build up. Every skill in this course is a door. Walk through the technical ones first; they are propped open widest.

## Sources
National Association of Broadcasters. (n.d.). *About NAB*. https://www.nab.org/

Society of Broadcast Engineers. (n.d.). *About SBE*. https://www.sbe.org/

U.S. Bureau of Labor Statistics. (2024a). *Announcers and DJs*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/announcers.htm

U.S. Bureau of Labor Statistics. (2024b). *Producers and directors*. Occupational Outlook Handbook. https://www.bls.gov/ooh/entertainment-and-sports/producers-and-directors.htm

U.S. Bureau of Labor Statistics. (2024c). *Film and video editors and camera operators*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/film-and-video-editors-and-camera-operators.htm

U.S. Bureau of Labor Statistics. (2024d). *Broadcast, sound, and video technicians*. Occupational Outlook Handbook. https://www.bls.gov/ooh/media-and-communication/broadcast-and-sound-engineering-technicians.htm`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EXERCISE: fill-in production drill
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
              "The general-support entry role on a live crew (pulls and dresses cable, rigs gear, and helps every department): the ______ ______.",
            answer: "utility technician",
            accept: ["utility tech", "utility"],
            hint: "It is the classic paid way into a sports broadcast crew.",
            explanation:
              "The utility technician is the fastest way in, and its cable, rigging, and knot work links directly to the companion Knot-Tying & Rope Work course.",
          },
          {
            prompt:
              "The most authoritative free U.S. source for a role's median pay and job-growth projection is the BLS ______ ______ ______ (three words).",
            answer: "Occupational Outlook Handbook",
            accept: ["occupational outlook handbook", "OOH", "ooh"],
            hint: "Published by the U.S. Bureau of Labor Statistics; abbreviated OOH.",
            explanation:
              "The Occupational Outlook Handbook (OOH) is the labor-market prospectus you check before committing to a role (BLS, 2024a-d).",
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
              "Following the chain source → mixer/switcher → recorder/transmitter → audience (and troubleshooting along it) is called ______ ______.",
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
              "The FCC regulates over-the-air broadcasting: licensing, spectrum, and captioning rules (FCC, n.d.-a, n.d.-b).",
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
    // QUIZ: final graded gate (passingScore 70)
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
              "The utility technician (cable, rigging, general support) is the classic way in: you prove reliability before you get a specialized or on-air role.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt:
              "Why does the course tell utility-technician hopefuls to learn knots and rigging (and point them to the Knot-Tying & Rope Work course)?",
            options: [
              "Knots are only decorative trim on a set",
              "Coiling and securing cable are core skills",
              "Only the on-air talent ever needs knots",
              "The FCC requires a paid knot-tying license",
            ],
            correctIndex: 1,
            explanation:
              "Utility and AV work involves securing cable and rigging gear; knowing the bowline, clove hitch, round turn and two half-hitches, and trucker's hitch (taught in the companion Knot-Tying course) makes you immediately useful.",
            sourceLessonSlug: "utility-technician-and-rigging",
          },
          {
            prompt:
              "What is the most authoritative FREE source for a broadcasting role's median pay and 10-year job outlook?",
            options: [
              "A random online salary-comparison website",
              "The BLS Occupational Outlook Handbook",
              "A job board's 'estimated' salary range",
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
              "Announcers and DJs show little or no projected change, making on-air the most competitive door: a reason many people start technical to get in the building.",
            sourceLessonSlug: "pay-and-outlook",
          },
          {
            prompt: "A demo reel should primarily do what?",
            options: [
              "Run at least five minutes with a slow logo intro",
              "List your hobbies and personal references",
              "Lead with your best clip and prove your skills",
              "Avoid crediting which parts were your work",
            ],
            correctIndex: 2,
            explanation:
              "A reel is a short audition: lead with your strongest 10 seconds, keep it 60 to 120 seconds, match it to the role, and caption exactly what you did.",
            sourceLessonSlug: "demo-reel",
          },
          {
            prompt:
              "When audio fails live, the fastest way to find the fault is to:",
            options: [
              "Swap out every piece of gear all at once",
              "Walk the signal flow until the dead link",
              "Turn every channel level up to maximum",
              "Restart the entire live broadcast feed",
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
              "Set the camera's white balance level",
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
              "The U.S. Bureau of Labor Statistics (BLS)",
            ],
            correctIndex: 2,
            explanation:
              "The FCC regulates over-the-air broadcasting: licensing stations, managing spectrum, and enforcing rules such as TV closed-captioning.",
            sourceLessonSlug: "encoding-and-streaming",
          },
          {
            prompt:
              "The difference between play-by-play and color commentary is best described as:",
            options: [
              "Play-by-play analyzes strategy; color describes the action",
              "Play-by-play describes action; color adds analysis",
              "They are two different names for the same exact job",
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
              "Internships and freelance gigs build credits, plus networking",
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
