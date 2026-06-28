// Authored self-study course: a doctoral-EQUIVALENT Education Leadership program
// modeled on Harvard's Ed.L.D., built from the education-leader study-partner
// conversation (content/education-leader/). Doctoral rigor means primary-source
// reading + committee-style hard questions, NOT a cheerleader. Cited per the BVC
// citation standard. Committed so it survives a fresh clone; seeded on Learn.WitUS.

import type { AuthoredCourse } from "./authored-course";

export const EDUCATION_LEADER_COURSE: AuthoredCourse = {
  title: "Education Leadership: A Self-Study Doctoral Equivalent (Ed.L.D.)",
  description:
    "A rigorous, self-directed program modeled on the Harvard Doctor of Education Leadership (Ed.L.D.). You read the primary sources behind the idea of learning beyond schools — Illich, Klinenberg, Ito — study the real places that have built it, stress-test the public-finance case, and then defend your own design against the questions a dissertation committee would actually ask. The goal is not praise; it is an argument strong enough to survive city councils, unions, and skeptics.",
  lessons: [
    {
      slug: "orientation",
      title: "1 · Orientation: doctoral rigor, not a cheerleader",
      body: `A doctorate is not a reading list. Its value is a committee of people who poke holes in your thinking until it is strong enough to survive contact with city councils, unions, and skeptics. Praise feels good and teaches nothing. This course is built to do the opposite: every module gives you primary sources to read and a hard question to answer in writing.

### How to use this course
- **Read the primary sources**, not summaries of them. The summaries here are a map, not the territory.
- **Write your answers down.** A claim you cannot write clearly is a claim you do not yet hold.
- **Steel-man the critics.** For every idea you love, find the strongest argument against it and answer that.
- **Separate evidence from analogy.** Say "analogous programs show…" when that is what you mean, never "research proves my model will…".

### Your through-line
You are building toward one deliverable: a defensible design for a learning system beyond the traditional school — and the argument that funds and sustains it. Keep a running document. Each module adds a section and a stress-test.

### Committee question
In two paragraphs, state the problem you are trying to solve and who, specifically, is worse off if you are wrong. Name the people, not the abstraction.`,
    },
    {
      slug: "lineage-illich",
      title: "2 · Lineage I — Illich and the learning web",
      body: `Before the internet existed, Ivan Illich described what you are probably trying to build. In *Deschooling Society* (1971) he argued that schools monopolize learning, and proposed replacing them with **learning webs**: decentralized networks of people, resources, and tools for pursuing knowledge outside formal institutions. He named four parts — reference services for educational tools, skill exchanges where people list what they will teach, peer-matching networks connecting people by shared interest, and a directory of educators.

That is, almost one to one, the modern pattern: a civic learning hub, a portfolio-based "show your work" credential, and a peer-led model — written in 1971.

### Read
- Illich, I. (1971). *Deschooling Society*. (Full text is widely and legally available online — it is old enough to be openly posted.) Read at least the chapters on "learning webs."
- Then read the **critiques**. This is where your weak spots are exposed — especially the equity critique that self-directed models can favor those who already have resources and social capital.

### Committee question
Illich's critics say a learning web helps the already-motivated and already-resourced and leaves the struggling behind. Where in *your* design is the structural support that prevents that? Be concrete — a policy, a staffing model, a funded role, not a value statement.`,
    },
    {
      slug: "lineage-klinenberg",
      title: "3 · Lineage II — Klinenberg and social infrastructure",
      body: `If Illich gives you the pedagogy, Eric Klinenberg gives you the public-finance language and the political pitch. In *Palaces for the People* (2018) he coined **"social infrastructure"** — the physical places (libraries, parks, childcare centers) where social connections form — and argued that investing in them is as urgent as investing in bridges and airports.

The title is your history lesson: it comes from Andrew Carnegie's description of the roughly 2,800 libraries he funded. "Palaces for the people" is the frame you can hand a city council.

### Read
- Klinenberg, E. (2018). *Palaces for the People*. Crown.
- Klinenberg, E. "To Restore Civil Society, Start with the Library." *New York Times* (op-ed) — the five-minute version.
- The Harvard Graduate School of Design lecture by Klinenberg (Harvard GSD YouTube) — your video/audio source.

### Committee question
"Social infrastructure" is a compelling phrase. Translate it into a line item. What exactly would a city be buying, what does it cost in year one versus year eight, and why is it infrastructure rather than a program that gets cut in the first budget shortfall?`,
    },
    {
      slug: "pedagogy-connected-learning",
      title: "4 · The pedagogy — Ito and Connected Learning",
      body: `Inside the hub, what is the learning model? Mizuko "Mimi" Ito's **Connected Learning** is the academic backbone. Leading the MacArthur Foundation's Digital Media and Learning work, she defined a pedagogy that is "socially embedded, interest-driven, and oriented toward expanding educational, economic, or political opportunity."

Her research even named the three ways young people engage — "hang out," "mess around," and "geek out" — a progression from social presence to casual experimentation to deep, interest-driven mastery. That is your bus-stop teenager, formalized.

### Read
- Ito, M., et al. *Connected Learning: An Agenda for Research and Design* (clalliance.org — free).
- Ito, M., et al. *Affinity Online* (clalliance.org).
- A recorded Ito talk on interest-driven, equity-oriented learning (e.g., her conversation with Mitch Resnick of MIT).

### Committee question
Connected Learning is interest-driven. A skeptic says interest-driven learning is a luxury for kids whose interests are already cultivated at home. Using Ito's own equity framing, design one concrete mechanism in your hub that *cultivates* interest in a learner who arrives without one.`,
    },
    {
      slug: "us-precedents",
      title: "5 · Precedents that shipped (US first)",
      body: `Your idea is not hypothetical — versions of it have been built and funded in the United States. Two matter most.

**YOUmedia (Chicago Public Library, 2009).** A drop-in, out-of-school space in the Harold Washington Library where teens work in digital media, STEM, and making. Crucial for your *network* vision: it became a national model that informed similar spaces in **30+ libraries**, seeded by an IMLS and MacArthur "learning labs" initiative. It is the closest US precedent for a replicable hub network.

**The community-schools movement.** Public schools run as neighborhood hubs, built on four pillars: integrated student supports, expanded learning time, family and community engagement, and collaborative leadership. The money is real and growing — federal funding tripled to roughly **\$75M in 2021–22**, there is an active federal **Full-Service Community Schools Program**, and a Full-Service Community School Expansion Act has been repeatedly introduced. This is the live legislative template you would amend or imitate.

### Read
- chipublib.org/youmedia and youmedia.org (downloadable curricula); the YOUmedia YouTube channel.
- U.S. Dept. of Education, Full-Service Community Schools Program (ed.gov); the Coalition for Community Schools.

### Committee question
YOUmedia scaled to 30+ sites; many makerspaces did not survive year five. What did YOUmedia's network do — structurally, financially — that the failures did not? If you cannot answer from the sources, that gap is your next reading assignment.`,
    },
    {
      slug: "global-precedents",
      title: "6 · Global precedents",
      body: `Outside the US, several civic-learning institutions are your design already built in concrete. Study them for what worked *and* what they cost to operate.

- **Oodi (Helsinki)** — a central library reimagined as a civic living room (search "Oodi virtual tour"; ALA Architects briefs).
- **Dokk1 (Aarhus)** — built over a light-rail station: your hub-and-spoke model, literally.
- **Idea Stores (Tower Hamlets, London)** — libraries rebranded and relocated to retail high streets to raise usage.
- **Medellín's library parks** — civic investment in the poorest neighborhoods; the cautionary tale is *operating* them in years 5–12.
- **The Fab Lab network** (MIT, Neil Gershenfeld; fablabs.io) — a replicable maker-space model at global scale.

### Committee question
Pick the ONE precedent closest to your model. Write its operating budget story: who pays the staff in year eight, after the ribbon-cutting and the grant? If the source does not say, that silence is itself a finding — note it.`,
    },
    {
      slug: "public-finance-and-evidence",
      title: "7 · The public-finance case and the evidence problem",
      body: `Your political pitch leans on a return-on-investment claim: every \$1 spent saves several dollars later. The good news: it checks out, and is often *undersold*. Across studies the range is roughly **\$3 to \$12** in taxpayer savings per dollar — a Pennsylvania study found \$6.69; crime-prevention estimates run \$7–\$10; the Rose Institute study found \$8.92 per at-risk child (\$2.99–\$4.05 even excluding crime benefits).

The catch — and a committee *will* catch it — is that every one of those studies is about **afterschool and diversion programs**, not 24/7 civic hubs. Using them is a defensible **analogy**, not direct proof of your model. The honest sentence is "analogous programs show…", never "research shows my hubs will…". That one word of honesty is the difference between a doctoral argument and a sales pitch.

### Committee question
Write the two-sentence ROI claim you would actually say to a city council — phrased so that it is both persuasive AND survives a hostile economist who knows the studies are about afterschool programs. Then state what evidence you would need to collect to make it direct proof rather than analogy.`,
    },
    {
      slug: "committee-questions",
      title: "8 · The three questions a committee will ask",
      body: `Most visions in this space are strong on building and weak on the parts that actually decide success. Draft a written defense for each of these before you design anything else.

**1 · The sustainability problem.** Medellín's library parks and many US makerspaces got *built*; the hard part was staffing and operating them in years 5, 8, 12 after the grant ran out. Where is your boring, recurring operating budget — and who is politically accountable for it?

**2 · The "who does the work" problem.** Peer-to-peer, self-directed learning sounds liberating, but the research consistently shows it widens gaps unless there is heavy structural support: the motivated and resourced thrive, the struggling drift. Illich was criticized for exactly this. What is your support structure?

**3 · The evidence problem.** Your ROI pitch is borrowed from afterschool studies. Nobody has rigorously costed *your specific model* — a 24/7 civic hub network. What is your evidence, and what is analogy, and what is your plan to convert the second into the first?

### Committee question
Answer all three in writing, one page each. The point is not to have perfect answers; it is to know exactly where your argument is still weak — because that is what makes it doctoral.`,
    },
    {
      slug: "synthesis-defense",
      title: "9 · Synthesis: your design and its defense",
      body: `Now assemble the running document into one coherent proposal and defend it.

### Your deliverable
A written design that includes:
- **The model** — what the hub/network is, grounded in Illich's learning web and Ito's Connected Learning.
- **The pitch** — the social-infrastructure case (Klinenberg), in a city council's language.
- **The precedent** — the US and global examples you are extending, with what you are copying and what you are changing.
- **The money** — a year-1 and year-8 operating budget, and who owns it.
- **The evidence plan** — what you will measure to turn analogy into proof.
- **The three defenses** — sustainability, equity/who-does-the-work, evidence.

### The defense
Imagine the room: a skeptical economist, a union representative, a city budget director, and a parent from the neighborhood you mean to serve. Write the opening five minutes of your defense so that each of the four is answered before they object.

### Committee question
What is the single strongest argument *against* your entire project — and what is your honest answer to it? If your answer is "there isn't one," you have not finished the program.

## Sources
- Illich, I. (1971). *Deschooling Society*. Harper & Row.
- Klinenberg, E. (2018). *Palaces for the People*. Crown.
- Ito, M., et al. *Connected Learning: An Agenda for Research and Design*. Connected Learning Alliance (clalliance.org).
- YOUmedia, Chicago Public Library (2009–); YOUmedia Learning Labs Network (youmedia.org).
- U.S. Department of Education, Full-Service Community Schools Program (ed.gov).`,
    },
  ],
};
