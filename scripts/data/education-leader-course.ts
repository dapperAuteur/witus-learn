// Authored self-study course: a doctoral-EQUIVALENT Education Leadership program
// modeled on Harvard's Ed.L.D., built from the education-leader study-partner
// conversation (content/education-leader/). Doctoral rigor means primary-source
// reading + committee-style hard questions, NOT a cheerleader. Cited per the BVC
// citation standard. Committed so it survives a fresh clone; seeded on Learn.WitUS.

import type { AuthoredCourse } from "./authored-course";

export const EDUCATION_LEADER_COURSE: AuthoredCourse = {
  title: "Education Leadership: A Self-Study Doctoral Equivalent (Ed.L.D.)",
  description:
    "A rigorous, self-directed program modeled on the Harvard Doctor of Education Leadership (Ed.L.D.). You read the primary sources behind the idea of learning beyond schools (Illich, Klinenberg, Ito), study the real places that have built it, stress-test the public-finance case, and then defend your own design against the questions a dissertation committee would actually ask. The goal is not praise; it is an argument strong enough to survive city councils, unions, and skeptics.",
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
You are building toward one deliverable: a defensible design for a learning system beyond the traditional school, and the argument that funds and sustains it. Keep a running document. Each module adds a section and a stress-test.

### Committee question
In two paragraphs, state the problem you are trying to solve and who, specifically, is worse off if you are wrong. Name the people, not the abstraction.`,
    },
    {
      slug: "lineage-illich",
      title: "2 · Lineage I: Illich and the learning web",
      body: `Before the internet existed, Ivan Illich described what you are probably trying to build. In *Deschooling Society* (1971) he argued that schools monopolize learning, and proposed replacing them with **learning webs**: decentralized networks of people, resources, and tools for pursuing knowledge outside formal institutions. He named four parts: reference services for educational tools, skill exchanges where people list what they will teach, peer-matching networks connecting people by shared interest, and a directory of educators.

That is, almost one to one, the modern pattern: a civic learning hub, a portfolio-based "show your work" credential, and a peer-led model, written in 1971.

### Read
- Illich, I. (1971). *Deschooling Society*. (Full text is widely and legally available online; it is old enough to be openly posted.) Read at least the chapters on "learning webs."
- Then read the **critiques**. This is where your weak spots are exposed, especially the equity critique that self-directed models can favor those who already have resources and social capital.

### Committee question
Illich's critics say a learning web helps the already-motivated and already-resourced and leaves the struggling behind. Where in *your* design is the structural support that prevents that? Be concrete: a policy, a staffing model, a funded role, not a value statement.`,
      recallContent: [
        {
          prompt: "According to the orientation, what makes a doctorate valuable beyond a reading list?",
          answer: "A committee of people who poke holes in your thinking until it is strong enough to survive city councils, unions, and skeptics; praise feels good but teaches nothing.",
        },
        {
          prompt: "What single deliverable is this whole course building toward?",
          answer: "A defensible design for a learning system beyond the traditional school, plus the argument that funds and sustains it, kept in a running document.",
        },
      ],
    },
    {
      slug: "lineage-klinenberg",
      title: "3 · Lineage II: Klinenberg and social infrastructure",
      body: `If Illich gives you the pedagogy, Eric Klinenberg gives you the public-finance language and the political pitch. In *Palaces for the People* (2018) he coined **"social infrastructure"**, the physical places (libraries, parks, childcare centers) where social connections form, and argued that investing in them is as urgent as investing in bridges and airports.

The title is your history lesson: it comes from Andrew Carnegie's description of the roughly 2,800 libraries he funded. "Palaces for the people" is the frame you can hand a city council.

### Read
- Klinenberg, E. (2018). *Palaces for the People*. Crown.
- Klinenberg, E. "To Restore Civil Society, Start with the Library." *New York Times* (op-ed): the five-minute version.
- The Harvard Graduate School of Design lecture by Klinenberg (Harvard GSD YouTube): your video/audio source.

### Committee question
"Social infrastructure" is a compelling phrase. Translate it into a line item. What exactly would a city be buying, what does it cost in year one versus year eight, and why is it infrastructure rather than a program that gets cut in the first budget shortfall?`,
      recallContent: [
        {
          prompt: "In Deschooling Society (1971), what did Ivan Illich propose to replace schools?",
          answer: "Learning webs: decentralized networks of people, resources, and tools for pursuing knowledge outside formal institutions.",
        },
        {
          prompt: "What is the main equity critique of Illich's learning web?",
          answer: "That self-directed models help the already-motivated and already-resourced while leaving the struggling behind.",
        },
      ],
    },
    {
      slug: "pedagogy-connected-learning",
      title: "4 · The pedagogy: Ito and Connected Learning",
      body: `Inside the hub, what is the learning model? Mizuko "Mimi" Ito's **Connected Learning** is the academic backbone. Leading the MacArthur Foundation's Digital Media and Learning work, she defined a pedagogy that is "socially embedded, interest-driven, and oriented toward expanding educational, economic, or political opportunity."

Her research even named the three ways young people engage: "hang out," "mess around," and "geek out," a progression from social presence to casual experimentation to deep, interest-driven mastery. That is your bus-stop teenager, formalized.

### Read
- Ito, M., et al. *Connected Learning: An Agenda for Research and Design* ([clalliance.org](https://clalliance.org), free).
- Ito, M., et al. *Affinity Online* ([clalliance.org](https://clalliance.org)).
- A recorded Ito talk on interest-driven, equity-oriented learning (e.g., her conversation with Mitch Resnick of MIT).

### Committee question
Connected Learning is interest-driven. A skeptic says interest-driven learning is a luxury for kids whose interests are already cultivated at home. Using Ito's own equity framing, design one concrete mechanism in your hub that *cultivates* interest in a learner who arrives without one.`,
      recallContent: [
        {
          prompt: "What does Klinenberg mean by social infrastructure?",
          answer: "The physical places, such as libraries, parks, and childcare centers, where social connections form; he argues investing in them is as urgent as investing in bridges and airports.",
        },
        {
          prompt: "Where does the phrase palaces for the people come from?",
          answer: "Andrew Carnegie's description of the roughly 2,800 libraries he funded.",
        },
      ],
    },
    {
      slug: "us-precedents",
      title: "5 · Precedents that shipped (US first)",
      body: `Your idea is not hypothetical: versions of it have been built and funded in the United States. Two matter most.

**YOUmedia (Chicago Public Library, 2009).** A drop-in, out-of-school space in the Harold Washington Library where teens work in digital media, STEM, and making. Important for your *network* vision: it became a national model that informed similar spaces in **30+ libraries**, seeded by an IMLS and MacArthur "learning labs" initiative. It is the closest US precedent for a replicable hub network.

**The community-schools movement.** Public schools run as neighborhood hubs, built on four pillars: integrated student supports, expanded learning time, family and community engagement, and collaborative leadership. The money is real and growing: federal funding tripled to roughly **\$75M in 2021 to 2022**, there is an active federal **Full-Service Community Schools Program**, and a Full-Service Community School Expansion Act has been repeatedly introduced. This is the live legislative template you would amend or imitate.

### Read
- [chipublib.org/youmedia](https://chipublib.org/youmedia) and [youmedia.org](https://youmedia.org) (downloadable curricula); the YOUmedia YouTube channel.
- U.S. Dept. of Education, Full-Service Community Schools Program ([ed.gov](https://ed.gov)); the Coalition for Community Schools.

### Committee question
YOUmedia scaled to 30+ sites; many makerspaces did not survive year five. What did YOUmedia's network do (structurally, financially) that the failures did not? If you cannot answer from the sources, that gap is your next reading assignment.`,
      recallContent: [
        {
          prompt: "How does Ito define Connected Learning?",
          answer: "A pedagogy that is socially embedded, interest-driven, and oriented toward expanding educational, economic, or political opportunity.",
        },
        {
          prompt: "What are Ito's three ways young people engage, and what progression do they form?",
          answer: "Hang out, mess around, and geek out: a progression from social presence to casual experimentation to deep, interest-driven mastery.",
        },
      ],
    },
    {
      slug: "global-precedents",
      title: "6 · Global precedents",
      body: `Outside the US, several civic-learning institutions are your design already built in concrete. Study them for what worked *and* what they cost to operate.

- **Oodi (Helsinki)**: a central library reimagined as a civic living room (search "Oodi virtual tour"; ALA Architects briefs).
- **Dokk1 (Aarhus)**, built over a light-rail station: your hub-and-spoke model, literally.
- **Idea Stores (Tower Hamlets, London)**: libraries rebranded and relocated to retail high streets to raise usage.
- **Medellín's library parks**: civic investment in the poorest neighborhoods; the cautionary tale is *operating* them in years 5 to 12.
- **The Fab Lab network** (MIT, Neil Gershenfeld; [fablabs.io](https://fablabs.io)): a replicable maker-space model at global scale.

### Committee question
Pick the ONE precedent closest to your model. Write its operating budget story: who pays the staff in year eight, after the ribbon-cutting and the grant? If the source does not say, that silence is itself a finding. Note it.`,
      recallContent: [
        {
          prompt: "What is YOUmedia, and why does it matter for a network vision?",
          answer: "A drop-in, out-of-school teen space for digital media, STEM, and making at the Chicago Public Library (2009) that became a national model informing 30+ libraries, seeded by an IMLS and MacArthur learning labs initiative.",
        },
        {
          prompt: "What are the four pillars of the community-schools movement?",
          answer: "Integrated student supports, expanded learning time, family and community engagement, and collaborative leadership.",
        },
      ],
    },
    {
      slug: "public-finance-and-evidence",
      title: "7 · The public-finance case and the evidence problem",
      body: `Your political pitch leans on a return-on-investment claim: every \$1 spent saves several dollars later. The good news: it checks out, and is often *undersold*. Across studies the range is roughly **\$3 to \$12** in taxpayer savings per dollar: a Pennsylvania study found \$6.69; crime-prevention estimates run \$7 to \$10; the Rose Institute study found \$8.92 per at-risk child (\$2.99 to \$4.05 even excluding crime benefits).

The catch (and a committee *will* catch it) is that every one of those studies is about **afterschool and diversion programs**, not 24/7 civic hubs. Using them is a defensible **analogy**, not direct proof of your model. The honest sentence is "analogous programs show…", never "research shows my hubs will…". That one word of honesty is the difference between a doctoral argument and a sales pitch.

### Committee question
Write the two-sentence ROI claim you would actually say to a city council, phrased so that it is both persuasive AND survives a hostile economist who knows the studies are about afterschool programs. Then state what evidence you would need to collect to make it direct proof rather than analogy.`,
      recallContent: [
        {
          prompt: "What makes Dokk1 in Aarhus a literal hub-and-spoke model?",
          answer: "It was built over a light-rail station, tying the civic hub directly to the transit line.",
        },
        {
          prompt: "What is the cautionary tale of Medellín's library parks?",
          answer: "The hard part is not building them but operating them in years 5 to 12, after the initial civic investment in the poorest neighborhoods.",
        },
      ],
    },
    {
      slug: "committee-questions",
      title: "8 · The three questions a committee will ask",
      body: `Most visions in this space are strong on building and weak on the parts that actually decide success. Draft a written defense for each of these before you design anything else.

**1 · The sustainability problem.** Medellín's library parks and many US makerspaces got *built*; the hard part was staffing and operating them in years 5, 8, 12 after the grant ran out. Where is your boring, recurring operating budget, and who is politically accountable for it?

**2 · The "who does the work" problem.** Peer-to-peer, self-directed learning sounds liberating, but the research consistently shows it widens gaps unless there is heavy structural support: the motivated and resourced thrive, the struggling drift. Illich was criticized for exactly this. What is your support structure?

**3 · The evidence problem.** Your ROI pitch is borrowed from afterschool studies. Nobody has rigorously costed *your specific model*, a 24/7 civic hub network. What is your evidence, and what is analogy, and what is your plan to convert the second into the first?

### Committee question
Answer all three in writing, one page each. The point is not to have perfect answers; it is to know exactly where your argument is still weak, because that is what makes it doctoral.`,
      recallContent: [
        {
          prompt: "What is the rough ROI range in the public-finance case, and what is the catch?",
          answer: "Roughly $3 to $12 in taxpayer savings per dollar, but every study is about afterschool and diversion programs, not 24/7 civic hubs, so it is analogy, not direct proof.",
        },
        {
          prompt: "What one honest phrasing separates a doctoral argument from a sales pitch here?",
          answer: "Saying analogous programs show rather than research shows my hubs will.",
        },
      ],
    },
    {
      slug: "synthesis-defense",
      title: "9 · Synthesis: your design and its defense",
      body: `Now assemble the running document into one coherent proposal and defend it.

### Your deliverable
A written design that includes:
- **The model**: what the hub/network is, grounded in Illich's learning web and Ito's Connected Learning.
- **The pitch**: the social-infrastructure case (Klinenberg), in a city council's language.
- **The precedent**: the US and global examples you are extending, with what you are copying and what you are changing.
- **The money**: a year-1 and year-8 operating budget, and who owns it.
- **The evidence plan**: what you will measure to turn analogy into proof.
- **The three defenses**: sustainability, equity/who-does-the-work, evidence.

### The defense
Imagine the room: a skeptical economist, a union representative, a city budget director, and a parent from the neighborhood you mean to serve. Write the opening five minutes of your defense so that each of the four is answered before they object.

### Committee question
What is the single strongest argument *against* your entire project, and what is your honest answer to it? If your answer is "there isn't one," you have not finished the program.

## Sources
- Illich, I. (1971). *Deschooling Society*. Harper & Row.
- Klinenberg, E. (2018). *Palaces for the People*. Crown.
- Ito, M., et al. *Connected Learning: An Agenda for Research and Design*. Connected Learning Alliance ([clalliance.org](https://clalliance.org)).
- YOUmedia, Chicago Public Library (2009 to present); YOUmedia Learning Labs Network ([youmedia.org](https://youmedia.org)).
- U.S. Department of Education, Full-Service Community Schools Program ([ed.gov](https://ed.gov)).`,
      recallContent: [
        {
          prompt: "What are the three questions a committee will ask about your design?",
          answer: "The sustainability problem (who funds operations in years 5, 8, 12), the who-does-the-work problem (structural support so self-directed learning does not widen gaps), and the evidence problem (how much is proof versus analogy).",
        },
        {
          prompt: "Why is the sustainability problem about years 5, 8, and 12 rather than year one?",
          answer: "Because projects usually get built, but the hard part is staffing and operating them for years after the grant runs out, with someone politically accountable for the recurring budget.",
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FINAL ASSESSMENT
    //
    // WHY ONE FINAL AND NOT SECTION QUIZZES. This course has no sections: its nine lessons are a
    // single argument built in order, orientation through synthesis, and the deliverable is one
    // running document rather than nine self-contained units. A section quiz needs a section to
    // sit in, so splitting these nine into invented groupings just to hang quizzes off them would
    // impose a structure the curriculum does not have and the running document actively resists.
    // One final, pooled deep enough that a retake is a different exam, is the right shape here.
    // Please do not "fix" this by inventing sections.
    //
    // Pool is sized by the Tier-0 density rule: 1,772 teaching words / 35 = 51, which also clears
    // the 40-question floor a final carries. Serves 10 at 80% to pass.
    // ─────────────────────────────────────────────────────────────────────────
    {
      slug: "edld-final-assessment",
      title: "10 · Final assessment",
      body: `A graded check on the whole argument: the four thinkers whose work you are extending, the precedents that actually shipped, the public-finance case and its honest limits, and the three questions a committee will put to you. Ten questions are drawn from a bank of fifty-one, so a retake is a different exam. Each answer links back to the lesson that teaches it.

This measures whether you can hold the argument. It does not measure the written work: the committee questions in each module are yours to answer, and no quiz can grade a design.`,
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course say gives a doctorate its value?",
            options: [
              "The length of the reading list a candidate works through before defending",
              "A committee that pokes holes in your thinking",
              "The reputation of the institution that eventually confers the credential",
              "The number of primary sources a candidate can cite from memory at a defense",
            ],
            correctIndex: 1,
            explanation:
              "A doctorate is not a reading list. Its value is a committee of people who poke holes in your thinking until it is strong enough to survive contact with city councils, unions, and skeptics. Praise feels good and teaches nothing.",
            sourceLessonSlug: "orientation",
          },
          {
            prompt: "Why does the course tell you to read the primary sources rather than summaries?",
            options: [
              "Because a committee will check whether you bought the books that you cite",
              "Because summaries of these particular works are all written by their critics",
              "The summaries here are a map, not the territory",
              "Because the primary sources hold data that no summary is permitted to reprint",
            ],
            correctIndex: 2,
            explanation:
              "The course says outright that its own summaries are a map and not the territory. The argument you will have to defend lives in the reading, not in the map of it.",
            sourceLessonSlug: "orientation",
          },
          {
            prompt: "Why does the orientation insist you write your answers down?",
            options: [
              "You do not yet hold a claim you cannot write clearly",
              "Because a committee wants the written record more than it wants the answer",
              "Because writing is the only format in which an argument can be shared",
              "Because drafting early stops you changing position later in the program",
            ],
            correctIndex: 0,
            explanation:
              "A claim you cannot write clearly is a claim you do not yet hold. The writing is a test of the thinking, not a record of it.",
            sourceLessonSlug: "orientation",
          },
          {
            prompt: "What does the course mean by steel-manning the critics?",
            options: [
              "Rehearse your position until you can deliver it without any notes at all",
              "Build the case that the weakest of your critics would be most likely to make",
              "Set the objections you cannot answer aside until the design is finished",
              "Answer the strongest argument against what you love",
            ],
            correctIndex: 3,
            explanation:
              "For every idea you love, find the strongest argument against it and answer that one. Answering the weakest version of a critique teaches you nothing and leaves the real objection standing.",
            sourceLessonSlug: "orientation",
          },
          {
            prompt: "Which distinction does the orientation insist you keep?",
            options: [
              "Evidence and analogy",
              "Primary sources and the secondary literature written about them",
              "Your own design and the precedents you are extending or copying",
              "The pedagogy inside the hub and the politics outside of it",
            ],
            correctIndex: 0,
            explanation:
              "Say analogous programs show when that is what you mean, and never research proves my model will. The same distinction returns as the evidence problem in module 7 and again among the committee questions.",
            sourceLessonSlug: "orientation",
          },
          {
            prompt: "What single deliverable is the whole course building toward?",
            options: [
              "A literature review covering the four thinkers the modules introduce",
              "A comparison of the American and the international precedents studied",
              "A defensible design and the argument that funds it",
              "A written response to each of the nine committee questions in order",
            ],
            correctIndex: 2,
            explanation:
              "A defensible design for a learning system beyond the traditional school, plus the argument that funds and sustains it. You keep a running document, and each module adds a section and a stress-test.",
            sourceLessonSlug: "orientation",
          },
          {
            prompt: "In Deschooling Society, what did Illich propose putting in place of schools?",
            options: [
              "Community colleges open to any adult regardless of prior schooling",
              "Learning webs",
              "A national apprenticeship system administered by trade associations",
              "Neighborhood libraries funded the way Andrew Carnegie funded his own",
            ],
            correctIndex: 1,
            explanation:
              "Learning webs: decentralized networks of people, resources, and tools for pursuing knowledge outside formal institutions. He published the argument in 1971, before the internet existed.",
            sourceLessonSlug: "lineage-illich",
          },
          {
            prompt: "Which of these is one of Illich's four parts of a learning web?",
            options: [
              "A standardized examination that certifies what a learner has picked up",
              "A residential campus where the peer network can gather in one place",
              "A public subsidy paid to the learner rather than to the institution",
              "Skill exchanges",
            ],
            correctIndex: 3,
            explanation:
              "The four are reference services for educational tools, skill exchanges where people list what they will teach, peer-matching networks connecting people by shared interest, and a directory of educators.",
            sourceLessonSlug: "lineage-illich",
          },
          {
            prompt: "What does a peer-matching network do in Illich's scheme?",
            options: [
              "Connects people by shared interest",
              "Assigns every learner a trained mentor drawn from the directory of educators",
              "Ranks learners against one another so that employers can read the result",
              "Pairs a beginner with an expert who is paid for the hours they teach",
            ],
            correctIndex: 0,
            explanation:
              "Peer matching connects people by shared interest. The paid expert and the ranked credential belong to the institutions Illich was arguing against.",
            sourceLessonSlug: "lineage-illich",
          },
          {
            prompt: "What is the equity critique of the learning web?",
            options: [
              "That it depends on internet access that did not exist when he wrote it",
              "That it removes the credential employers use to sort applicants fairly",
              "It helps those who already have resources",
              "That it costs more per learner than the schools it proposes to replace",
            ],
            correctIndex: 2,
            explanation:
              "Critics say a self-directed learning web serves the already-motivated and already-resourced and leaves the struggling behind. The course returns to it as the who-does-the-work problem in module 8.",
            sourceLessonSlug: "lineage-illich",
          },
          {
            prompt: "What kind of answer does the module demand to that equity critique?",
            options: [
              "A statement of the values that will guide the hub once it has opened",
              "A survey of the learners in the neighborhood the hub means to serve",
              "A comparison with the equity record of the traditional school system",
              "A policy, a staffing model, or a funded role",
            ],
            correctIndex: 3,
            explanation:
              "Be concrete: a policy, a staffing model, a funded role, not a value statement. A value statement cannot be costed and nobody can be held accountable for it.",
            sourceLessonSlug: "lineage-illich",
          },
          {
            prompt: "Why does the course call Illich's 1971 argument almost a one-to-one match for the modern pattern?",
            options: [
              "It already describes the hub and the peer model",
              "Because he predicted the internet would eventually make schools obsolete",
              "Because his four parts were adopted directly by the Chicago Public Library",
              "Because the critics who answered him later founded the Connected Learning Alliance",
            ],
            correctIndex: 0,
            explanation:
              "A civic learning hub, a portfolio-based show-your-work credential, and a peer-led model, written in 1971. He did not predict the internet, and no institution in this course traces its founding to him.",
            sourceLessonSlug: "lineage-illich",
          },
          {
            prompt: "What did Klinenberg coin the term social infrastructure for?",
            options: [
              "The set of relationships a person can call on during an emergency",
              "The digital platforms that carry civic conversation in a modern city",
              "The physical places where social connections form",
              "The public agencies responsible for licensing and inspecting buildings",
            ],
            correctIndex: 2,
            explanation:
              "Libraries, parks, childcare centers: the physical places where social connections form. Palaces for the People (2018) argues that investing in them is as urgent as investing in bridges and airports.",
            sourceLessonSlug: "lineage-klinenberg",
          },
          {
            prompt: "What comparison does Klinenberg use to argue for social infrastructure?",
            options: [
              "Bridges and airports",
              "Public schools, which cities already fund without a yearly argument",
              "Police and fire departments, whose budgets survive every downturn",
              "Hospitals, which no city council would propose closing to save money",
            ],
            correctIndex: 0,
            explanation:
              "He argues that investing in social infrastructure is as urgent as investing in bridges and airports. That framing is what moves a library out of the program column and into the infrastructure column of a budget.",
            sourceLessonSlug: "lineage-klinenberg",
          },
          {
            prompt: "Where does the phrase palaces for the people come from?",
            options: [
              "A New York Times headline written for Klinenberg's own op-ed",
              "A Helsinki city slogan adopted when the Oodi library opened",
              "Carnegie's description of the libraries he funded",
              "A Harvard Graduate School of Design lecture series on civic buildings",
            ],
            correctIndex: 2,
            explanation:
              "Andrew Carnegie used it for the roughly 2,800 libraries he funded. The op-ed, the Helsinki library, and the GSD lecture all appear in this module's reading list, which is what makes them plausible and still wrong.",
            sourceLessonSlug: "lineage-klinenberg",
          },
          {
            prompt: "Roughly how many libraries did Carnegie fund?",
            options: [
              "About 280, concentrated in the cities where his steel mills operated",
              "About 28,000, which is why the phrase entered the language at all",
              "About 800, one for each of the counties his foundation had surveyed",
              "About 2,800",
            ],
            correctIndex: 3,
            explanation:
              "Roughly 2,800. The number matters less than what it bought him: a phrase a city council still recognizes more than a century later, which is exactly why the module hands it to you.",
            sourceLessonSlug: "lineage-klinenberg",
          },
          {
            prompt: "What does this module's committee question demand you turn social infrastructure into?",
            options: [
              "A line item",
              "A slogan that a city council can repeat back to its own voters",
              "A comparison against the operating cost of the nearest public school",
              "A partnership agreement between the library and the parks department",
            ],
            correctIndex: 0,
            explanation:
              "Translate the phrase into a line item: what exactly a city is buying, what it costs in year one against year eight, and why it is infrastructure rather than a program that gets cut in the first budget shortfall.",
            sourceLessonSlug: "lineage-klinenberg",
          },
          {
            prompt: "How does Ito define Connected Learning?",
            options: [
              "Self-paced, technology-mediated, and measured against a common standard",
              "Social, interest-driven, and opportunity-expanding",
              "Project-based, teacher-guided, and assessed through a portfolio review",
              "Peer-led, credential-free, and organized around the learner's own schedule",
            ],
            correctIndex: 1,
            explanation:
              "Her formulation is socially embedded, interest-driven, and oriented toward expanding educational, economic, or political opportunity. That last clause is the equity commitment, and it is the part skeptics forget she wrote.",
            sourceLessonSlug: "pedagogy-connected-learning",
          },
          {
            prompt: "Which foundation's Digital Media and Learning work did Ito lead?",
            options: [
              "Carnegie, whose library money the previous module already described",
              "Rockefeller, through its long-running program in educational research",
              "MacArthur",
              "Gates, which funded the largest of the school-redesign efforts",
            ],
            correctIndex: 2,
            explanation:
              "Ito led the MacArthur Foundation's Digital Media and Learning work, and MacArthur money also seeded the YOUmedia learning-labs network you meet in the next module.",
            sourceLessonSlug: "pedagogy-connected-learning",
          },
          {
            prompt: "What are Ito's three named modes of engagement?",
            options: [
              "Observe, imitate, and then teach the next learner who arrives",
              "Explore, commit, and specialize under an assigned adult mentor",
              "Consume, remix, and publish work back to the community that made it",
              "Hang out, mess around, geek out",
            ],
            correctIndex: 3,
            explanation:
              "Hang out, mess around, and geek out. The course calls it the bus-stop teenager, formalized.",
            sourceLessonSlug: "pedagogy-connected-learning",
          },
          {
            prompt: "What does the progression from hanging out to geeking out describe?",
            options: [
              "Social presence deepening into mastery",
              "The stages a hub passes through in its first three years of operation",
              "The order in which a learner should meet each of the four learning webs",
              "The way an interest spreads from one learner to the rest of a peer group",
            ],
            correctIndex: 0,
            explanation:
              "It runs from social presence, through casual experimentation, to deep interest-driven mastery. It traces one learner's path, not a program's rollout.",
            sourceLessonSlug: "pedagogy-connected-learning",
          },
          {
            prompt: "What is the skeptic's charge against interest-driven learning?",
            options: [
              "That interests change too fast for any program to build a curriculum on",
              "That a learner's stated interest rarely matches the work they actually do",
              "Interests are cultivated at home first",
              "That measuring an interest is impossible, so the model cannot be evaluated",
            ],
            correctIndex: 2,
            explanation:
              "The charge is that interest-driven learning is a luxury for children whose interests were already cultivated at home. It is the same equity critique Illich drew, arriving through a different door.",
            sourceLessonSlug: "pedagogy-connected-learning",
          },
          {
            prompt: "What does the module ask you to design in answer to that charge?",
            options: [
              "A recruitment plan reaching families outside the hub's usual catchment",
              "An assessment recording what each arriving learner already cares about",
              "A partnership with the schools that already know these learners by name",
              "A mechanism that cultivates interest",
            ],
            correctIndex: 3,
            explanation:
              "Using Ito's own equity framing, design one concrete mechanism that cultivates interest in a learner who arrives without one. Measuring or recruiting an existing interest does not answer the objection.",
            sourceLessonSlug: "pedagogy-connected-learning",
          },
          {
            prompt: "What is YOUmedia?",
            options: [
              "A drop-in teen space in a Chicago library",
              "A federal grant program for out-of-school digital media instruction",
              "A curriculum publisher whose materials the Chicago public schools adopted",
              "A research center studying how teenagers use media outside of school",
            ],
            correctIndex: 0,
            explanation:
              "A drop-in, out-of-school space in the Harold Washington Library where teens work in digital media, STEM, and making. It opened at the Chicago Public Library in 2009.",
            sourceLessonSlug: "us-precedents",
          },
          {
            prompt: "Why does the course say YOUmedia matters most for a network vision?",
            options: [
              "It was the first such space funded from a city's own capital budget",
              "It published the only curriculum other libraries were licensed to reuse",
              "It became a model for 30 or more libraries",
              "It ran continuously for longer than any comparable space in the country",
            ],
            correctIndex: 2,
            explanation:
              "It became a national model that informed similar spaces in more than 30 libraries, seeded by an IMLS and MacArthur learning-labs initiative. That replicability makes it the closest United States precedent for a hub network.",
            sourceLessonSlug: "us-precedents",
          },
          {
            prompt: "Which two funders seeded the learning-labs initiative behind YOUmedia's spread?",
            options: [
              "The Department of Education and the Coalition for Community Schools",
              "The National Science Foundation and the Chicago public school district",
              "IMLS and MacArthur",
              "The Fab Foundation and the Connected Learning Alliance",
            ],
            correctIndex: 2,
            explanation:
              "The Institute of Museum and Library Services and the MacArthur Foundation. MacArthur is the same funder behind Ito's Digital Media and Learning work in the previous module.",
            sourceLessonSlug: "us-precedents",
          },
          {
            prompt: "What is the community-schools model?",
            options: [
              "Charter schools governed by a board drawn from the surrounding streets",
              "Public schools run as neighborhood hubs",
              "Libraries that took over the instructional duties of a school that closed",
              "Schools sharing one campus with a health clinic and a housing office",
            ],
            correctIndex: 1,
            explanation:
              "Public schools run as neighborhood hubs, built on four pillars: integrated student supports, expanded learning time, family and community engagement, and collaborative leadership.",
            sourceLessonSlug: "us-precedents",
          },
          {
            prompt: "Which of these is one of the four community-school pillars?",
            options: [
              "A published measure of the school's performance against the state average",
              "A guaranteed minimum of funding per enrolled student from the city budget",
              "An enrollment policy giving priority to families inside the neighborhood",
              "Collaborative leadership",
            ],
            correctIndex: 3,
            explanation:
              "The four pillars are integrated student supports, expanded learning time, family and community engagement, and collaborative leadership.",
            sourceLessonSlug: "us-precedents",
          },
          {
            prompt: "What does the module say happened to federal community-schools funding in 2021 to 2022?",
            options: [
              "It was consolidated into a single block grant issued out to the states",
              "It tripled, to roughly 75 million dollars",
              "It was held flat while an expansion act waited for a vote on the floor",
              "It was cut and then restored inside a later appropriations package",
            ],
            correctIndex: 1,
            explanation:
              "Funding tripled to roughly 75 million dollars, there is an active Full-Service Community Schools Program, and a Full-Service Community School Expansion Act has been repeatedly introduced. That is the live legislative template you would amend or imitate.",
            sourceLessonSlug: "us-precedents",
          },
          {
            prompt: "What does this module's committee question ask about YOUmedia's survival?",
            options: [
              "Whether teen attendance held up across the whole decade it operated",
              "How much of its budget came from the city rather than the foundations",
              "Which of the thirty sites still run the original curriculum today",
              "What the network did that the failures did not",
            ],
            correctIndex: 3,
            explanation:
              "YOUmedia scaled past 30 sites while many makerspaces did not survive year five, so the question is what its network did structurally and financially that the failures did not. If you cannot answer from the sources, that gap is your next reading assignment.",
            sourceLessonSlug: "us-precedents",
          },
          {
            prompt: "What is Oodi?",
            options: [
              "Helsinki's central library as a civic living room",
              "A Finnish national program that placed a library in every rail station",
              "An architecture practice specializing in redesigning public buildings",
              "A Nordic funding body that pays the operating costs of civic buildings",
            ],
            correctIndex: 0,
            explanation:
              "Oodi is Helsinki's central library reimagined as a civic living room. ALA Architects, whose briefs the module points you to, designed it, which is what makes an architecture practice a plausible wrong answer.",
            sourceLessonSlug: "global-precedents",
          },
          {
            prompt: "What makes Dokk1 in Aarhus a literal hub-and-spoke model?",
            options: [
              "It coordinates a ring of smaller branches spread across the whole city",
              "It runs a fleet of mobile libraries that return to it every evening",
              "It was built over a light-rail station",
              "It sits where the two busiest pedestrian streets in Denmark meet",
            ],
            correctIndex: 2,
            explanation:
              "Dokk1 was built over a light-rail station, tying the civic hub directly to the transit line. The spokes are the rail, not a branch network.",
            sourceLessonSlug: "global-precedents",
          },
          {
            prompt: "What did Tower Hamlets do with its Idea Stores?",
            options: [
              "Merged the borough's libraries into a single flagship civic building",
              "Handed the branches to a trust that runs them alongside adult education",
              "Opened them inside schools so that families already knew the buildings",
              "Moved libraries onto retail high streets",
            ],
            correctIndex: 3,
            explanation:
              "The Idea Stores rebranded and relocated libraries to retail high streets specifically to raise usage, putting the civic building where people were already walking.",
            sourceLessonSlug: "global-precedents",
          },
          {
            prompt: "What is the cautionary tale of Medellín's library parks?",
            options: [
              "Operating them in years 5 to 12",
              "Building them in the poorest neighborhoods before the transit arrived",
              "Designing them so ambitiously that construction ran past its own budget",
              "Staffing them with volunteers who were never trained for the work",
            ],
            correctIndex: 0,
            explanation:
              "The civic investment in the poorest neighborhoods got them built. The hard part, which returns as the sustainability problem in module 8, is operating them in years 5 to 12.",
            sourceLessonSlug: "global-precedents",
          },
          {
            prompt: "What is the Fab Lab network?",
            options: [
              "A European program funding digital fabrication inside public libraries",
              "A consortium of universities that certifies makerspace instructors",
              "A replicable maker-space model at global scale",
              "A manufacturer's franchise supplying equipment to community workshops",
            ],
            correctIndex: 2,
            explanation:
              "The Fab Lab network came out of MIT under Neil Gershenfeld and operates as a replicable maker-space model at global scale, which is why the module lists it among the precedents already built.",
            sourceLessonSlug: "global-precedents",
          },
          {
            prompt: "What does this module ask you to write for the precedent closest to your model?",
            options: [
              "A comparison of its floor plan against the hub you intend to build",
              "Its operating budget story",
              "A summary of the political coalition that got it approved and funded",
              "An account of how its programming changed over the first five years",
            ],
            correctIndex: 1,
            explanation:
              "Who pays the staff in year eight, after the ribbon-cutting and the grant. The module adds that if the source does not say, that silence is itself a finding worth noting.",
            sourceLessonSlug: "global-precedents",
          },
          {
            prompt: "What is the rough return-on-investment range the module reports?",
            options: [
              "About 1 to 2 dollars, which is why the case is usually made on values",
              "About 20 to 30 dollars, driven almost entirely by the crime estimates",
              "About 3 to 12 dollars per dollar",
              "About 50 cents, meaning the case has to rest on something besides money",
            ],
            correctIndex: 2,
            explanation:
              "Across studies the range runs roughly 3 to 12 dollars in taxpayer savings per dollar spent, and the module notes the claim is more often undersold than exaggerated.",
            sourceLessonSlug: "public-finance-and-evidence",
          },
          {
            prompt: "What did the Rose Institute study find per at-risk child?",
            options: [
              "8.92 dollars",
              "6.69 dollars, which is the figure the Pennsylvania study reported",
              "2.99 dollars, which is the low end once crime benefits are excluded",
              "7 to 10 dollars, which is the range the crime-prevention estimates give",
            ],
            correctIndex: 0,
            explanation:
              "The Rose Institute study found 8.92 dollars per at-risk child, and 2.99 to 4.05 dollars even with crime benefits excluded. Every wrong answer here is a real figure from this same module attached to a different study, which is the point: a doctoral argument knows which number came from where.",
            sourceLessonSlug: "public-finance-and-evidence",
          },
          {
            prompt: "What did the Pennsylvania study report?",
            options: [
              "8.92 dollars, which is the figure that came out of the Rose Institute work",
              "7 to 10 dollars, the range attached to the crime-prevention estimates",
              "2.99 to 4.05 dollars, the range once crime benefits are taken back out",
              "6.69 dollars saved per dollar",
            ],
            correctIndex: 3,
            explanation:
              "The Pennsylvania study found 6.69 dollars. Knowing which number belongs to which study is the difference between citing evidence and waving at it.",
            sourceLessonSlug: "public-finance-and-evidence",
          },
          {
            prompt: "What is the catch a committee will catch in the ROI case?",
            options: [
              "The studies were funded by the organizations that ran the programs",
              "The savings are counted in a currency year that has since been revised",
              "The studies are about afterschool programs",
              "The studies measure enrollment rather than any outcome for the learner",
            ],
            correctIndex: 2,
            explanation:
              "Every one of those studies is about afterschool and diversion programs, not 24/7 civic hubs. Using them is a defensible analogy, not direct proof of your model.",
            sourceLessonSlug: "public-finance-and-evidence",
          },
          {
            prompt: "What is the honest sentence this module insists on?",
            options: [
              "Analogous programs show",
              "Research shows my hubs will produce the same savings over time",
              "The evidence base for civic hubs is still being assembled by others",
              "Independent studies confirm what this particular design expects to achieve",
            ],
            correctIndex: 0,
            explanation:
              "Say analogous programs show, never research shows my hubs will. The module calls that one word of honesty the difference between a doctoral argument and a sales pitch.",
            sourceLessonSlug: "public-finance-and-evidence",
          },
          {
            prompt: "Besides a persuasive claim, what does this committee question ask you to state?",
            options: [
              "Which council members are most likely to object to your numbers",
              "How the claim compares with the return on a school construction bond",
              "What the pitch would cost to produce and who would go and deliver it",
              "What evidence would make it direct proof",
            ],
            correctIndex: 3,
            explanation:
              "Write the two-sentence ROI claim you would say to a city council, phrased to survive a hostile economist who knows the studies are about afterschool programs, then say what evidence you would need to collect to convert analogy into proof.",
            sourceLessonSlug: "public-finance-and-evidence",
          },
          {
            prompt: "What is the sustainability problem?",
            options: [
              "Whether the building can be maintained on the budget it was designed for",
              "Who pays to operate it after the grant",
              "Whether the model can be copied in cities smaller than the one it began in",
              "Whether a founding director can be replaced without the project losing focus",
            ],
            correctIndex: 1,
            explanation:
              "Medellín's library parks and many United States makerspaces got built; the hard part was staffing and operating them in years 5, 8, and 12 after the grant ran out. The question is where the boring, recurring operating budget is and who is politically accountable for it.",
            sourceLessonSlug: "committee-questions",
          },
          {
            prompt: "What does the research show about self-directed learning without heavy structural support?",
            options: [
              "It produces the same outcomes at a lower cost per enrolled learner",
              "It works for adult learners but not for those still of school age",
              "It widens gaps",
              "It succeeds wherever the peer group comes from a single neighborhood",
            ],
            correctIndex: 2,
            explanation:
              "The research consistently shows that peer-to-peer, self-directed learning widens gaps unless there is heavy structural support: the motivated and resourced thrive while the struggling drift. Illich drew exactly this criticism, which is why the course raises it twice.",
            sourceLessonSlug: "committee-questions",
          },
          {
            prompt: "What is the evidence problem, in one line?",
            options: [
              "The studies that exist have never been replicated by another team",
              "The outcome measures used in the field are not comparable to each other",
              "The data on civic hubs is held privately by the foundations that fund them",
              "Nobody has costed your specific model",
            ],
            correctIndex: 3,
            explanation:
              "Your ROI pitch is borrowed from afterschool studies, and nobody has rigorously costed a 24/7 civic hub network. The task is to say what is evidence, what is analogy, and how you plan to turn the second into the first.",
            sourceLessonSlug: "committee-questions",
          },
          {
            prompt: "What does the module say is the point of answering all three questions in writing?",
            options: [
              "To know where the argument is still weak",
              "To have a document a funder can read before committing any money",
              "To settle the three objections before a committee can raise any of them",
              "To produce the three chapters the final deliverable is assembled from",
            ],
            correctIndex: 0,
            explanation:
              "The point is not to have perfect answers; it is to know exactly where your argument is still weak, because that is what makes it doctoral.",
            sourceLessonSlug: "committee-questions",
          },
          {
            prompt: "Why does the module say most visions in this space come up short?",
            options: [
              "They copy an international precedent without adjusting for local politics",
              "They underestimate how long a municipal approval process actually runs",
              "They are strong on building and weak elsewhere",
              "They are written by people who have never run a public building",
            ],
            correctIndex: 2,
            explanation:
              "Most visions are strong on building and weak on the parts that actually decide success: sustainability, who does the work, and evidence. Draft a written defense of each before you design anything else.",
            sourceLessonSlug: "committee-questions",
          },
          {
            prompt: "Which of these is a required part of the final written design?",
            options: [
              "A signed letter of intent from the institution that would host the hub",
              "A review of the literature on out-of-school learning since Illich wrote",
              "An architectural brief describing the building the design would need",
              "A year-1 and year-8 operating budget",
            ],
            correctIndex: 3,
            explanation:
              "The deliverable is the model, the pitch, the precedent, the money as a year-1 and year-8 operating budget with a named owner, the evidence plan, and the three defenses.",
            sourceLessonSlug: "synthesis-defense",
          },
          {
            prompt: "Who is in the room the synthesis asks you to imagine?",
            options: [
              "The foundation officers who would fund the first three years of operation",
              "An economist, a union rep, a budget director, a parent",
              "The teachers and librarians who would be doing the work day to day",
              "The city council members whose votes the proposal has to win in the end",
            ],
            correctIndex: 1,
            explanation:
              "A skeptical economist, a union representative, a city budget director, and a parent from the neighborhood you mean to serve. Write the opening five minutes so that each of the four is answered before they object.",
            sourceLessonSlug: "synthesis-defense",
          },
          {
            prompt: "What does the evidence plan in the deliverable have to specify?",
            options: [
              "Which of the existing studies you consider the most rigorous of them",
              "How long the hub should run before an evaluation is worth commissioning",
              "What you will measure",
              "Whom among your critics you would invite to review the findings",
            ],
            correctIndex: 2,
            explanation:
              "What you will measure to turn analogy into proof. That is the module 7 problem carried into the design rather than left behind as an acknowledgment.",
            sourceLessonSlug: "synthesis-defense",
          },
          {
            prompt: "What answer does the closing committee question refuse to accept?",
            options: [
              "That there is no argument against your project",
              "An objection you have borrowed from one of the critics in the reading",
              "A weakness you have already described inside one of the three defenses",
              "Anything that depends on funding decisions outside your own control",
            ],
            correctIndex: 0,
            explanation:
              "Name the single strongest argument against your entire project and give your honest answer to it. If your answer is that there is not one, the course says you have not finished the program.",
            sourceLessonSlug: "synthesis-defense",
          },
        ],
      },
    },
  ],
};
